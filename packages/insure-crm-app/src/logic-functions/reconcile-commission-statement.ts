import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction, type RoutePayload } from 'twenty-sdk/define';
import { Response } from 'twenty-sdk/logic-function';

export const RECONCILE_COMMISSION_STATEMENT_UNIVERSAL_IDENTIFIER = '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d';

export type StatementEntry = {
  statementReference: string;
  policyNumber: string;
  payoutAmount: number;
  paymentDate: string;
  tdsAmount?: number;
  gstAmount?: number;
};

const handler = async (event: RoutePayload): Promise<Response> => {
  const body = (event.body as Record<string, unknown> | null) ?? {};
  const entries = body.entries as StatementEntry[] | undefined;

  if (!entries || !Array.isArray(entries) || entries.length === 0) {
    return new Response(JSON.stringify({ success: false, error: 'Array of statement entries is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const client = new CoreApiClient();

  const results = {
    matched: 0,
    shortfall: 0,
    excess: 0,
    unmatched: 0,
    details: [] as Array<{ statementReference: string; status: string; variance: number }>,
  };

  for (const entry of entries) {
    // Find expected commission record matching reference or policy
    const { commissions } = await client.query({
      commissions: {
        __args: {
          filter: { statementReference: { eq: entry.statementReference } },
          first: 1,
        },
        edges: {
          node: {
            id: true,
            expectedAmount: true,
            receivedAmount: true,
            varianceStatus: true,
          },
        },
      },
    });

    const commNode = commissions?.edges?.[0]?.node;

    if (!commNode?.id) {
      results.unmatched++;
      results.details.push({ statementReference: entry.statementReference, status: 'UNMATCHED', variance: 0 });
      continue;
    }

    const expected = (commNode.expectedAmount as number) ?? 0;
    const received = entry.payoutAmount;
    const variance = received - expected;

    let varianceStatus = 'Match';
    if (variance < -10) {
      varianceStatus = 'Shortfall';
      results.shortfall++;
    } else if (variance > 10) {
      varianceStatus = 'Excess';
      results.excess++;
    } else {
      results.matched++;
    }

    await client.mutation({
      updateCommission: {
        __args: {
          id: commNode.id as string,
          data: {
            receivedAmount: received,
            variance,
            varianceStatus,
            status: 'Received',
            paymentDate: entry.paymentDate,
            tdsAmount: entry.tdsAmount ?? 0,
            gstOnCommission: entry.gstAmount ?? 0,
            netAmount: received - (entry.tdsAmount ?? 0),
          },
        },
        id: true,
      },
    });

    results.details.push({ statementReference: entry.statementReference, status: varianceStatus, variance });
  }

  return new Response(JSON.stringify({ success: true, summary: results }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export default defineLogicFunction({
  universalIdentifier: RECONCILE_COMMISSION_STATEMENT_UNIVERSAL_IDENTIFIER,
  name: 'reconcile-commission-statement',
  description: 'Automated commission statement reconciliation matching received payouts against expectations.',
  timeoutSeconds: 45,
  handler,
  httpRouteTriggerSettings: {
    path: '/commissions/reconcile',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
});
