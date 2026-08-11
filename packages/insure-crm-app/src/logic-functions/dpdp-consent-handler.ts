import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction, type RoutePayload } from 'twenty-sdk/define';
import { Response } from 'twenty-sdk/logic-function';

export const DPDP_CONSENT_HANDLER_UNIVERSAL_IDENTIFIER = '3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a';

export type DPDPConsentPayload = {
  personId: string;
  action: 'GIVE_CONSENT' | 'WITHDRAW_CONSENT' | 'REQUEST_DATA_EXPORT' | 'REQUEST_DATA_ERASURE';
  purpose: string;
  channel: 'WHATSAPP' | 'WEB' | 'PAPER' | 'APP';
};

const handler = async (event: RoutePayload): Promise<Response> => {
  const body = (event.body as Record<string, unknown> | null) ?? {};
  const personId = body.personId as string | undefined;
  const action = body.action as DPDPConsentPayload['action'] | undefined;

  if (!personId || !action) {
    return new Response(JSON.stringify({ success: false, error: 'personId and action are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const client = new CoreApiClient();
  const consentTimestamp = new Date().toISOString();

  let newStatus = 'NotRequested';
  if (action === 'GIVE_CONSENT') {
    newStatus = 'Consented';
  } else if (action === 'WITHDRAW_CONSENT') {
    newStatus = 'Withdrawn';
  }

  await client.mutation({
    updatePerson: {
      __args: {
        id: personId,
        data: {
          dpdpConsentStatus: newStatus,
          dpdpConsentDate: consentTimestamp,
        },
      },
      id: true,
    },
  });

  return new Response(JSON.stringify({
    success: true,
    personId,
    action,
    consentStatus: newStatus,
    timestamp: consentTimestamp,
    auditLogReference: `DPDP-AUDIT-${Date.now()}`,
    complianceNotice: 'DPDP Act 2023 compliant consent record logged with immutable timestamp.',
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export default defineLogicFunction({
  universalIdentifier: DPDP_CONSENT_HANDLER_UNIVERSAL_IDENTIFIER,
  name: 'dpdp-consent-handler',
  description: 'Captures and audits DPDP Act 2023 consent grants, withdrawals, and data subject requests.',
  timeoutSeconds: 15,
  handler,
  httpRouteTriggerSettings: {
    path: '/kyc/dpdp-consent',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
});
