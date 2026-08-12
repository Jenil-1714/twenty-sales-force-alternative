import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction, type RoutePayload } from 'twenty-sdk/define';
import { Response } from 'twenty-sdk/logic-function';
import { calculatePersistencyRatios, type PolicyCohortEntry } from '../utils/irdai-report-generator';

export const PERSISTENCY_CALCULATOR_UNIVERSAL_IDENTIFIER = 'fe9e57a1-8f54-4498-be1f-1969cd5a99ee';

const handler = async (event: RoutePayload): Promise<Response> => {
  const client = new CoreApiClient();

  const { policies } = await client.query({
    policies: {
      __args: { first: 500 },
      edges: {
        node: {
          id: true,
          status: true,
          premium: true,
          startDate: true,
        },
      },
    },
  });

  const now = new Date();
  const cohort: PolicyCohortEntry[] = (policies?.edges ?? []).map((edge: { node: Record<string, unknown> }) => {
    const p = edge.node;
    const start = p.startDate ? new Date(p.startDate as string) : now;
    const diffMonths = Math.floor((now.getTime() - start.getTime()) / (1000 * 3600 * 24 * 30.44));

    return {
      policyId: (p.id as string) ?? '',
      issueDate: (p.startDate as string) ?? now.toISOString(),
      status: (p.status as PolicyCohortEntry['status']) ?? 'ACTIVE',
      premium: (p.premium as number) ?? 0,
      monthsActive: Math.max(diffMonths, 0),
    };
  });

  const metrics = calculatePersistencyRatios(cohort);

  return new Response(JSON.stringify({ success: true, metrics }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export default defineLogicFunction({
  universalIdentifier: PERSISTENCY_CALCULATOR_UNIVERSAL_IDENTIFIER,
  name: 'persistency-calculator',
  description: 'Computes 13th, 25th, 37th, and 61st month persistency ratios for IRDAI compliance.',
  timeoutSeconds: 30,
  handler,
  httpRouteTriggerSettings: {
    path: '/reports/persistency',
    httpMethod: 'GET',
    isAuthRequired: true,
  },
});
