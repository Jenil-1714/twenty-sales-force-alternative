import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction, type RoutePayload } from 'twenty-sdk/define';
import { Response } from 'twenty-sdk/logic-function';

export const SEND_WHATSAPP_REMINDER_UNIVERSAL_IDENTIFIER = '8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d';

export type WhatsAppPayload = {
  policyId: string;
  phoneNumber: string;
  templateName: string;
  customerName: string;
  policyNumber: string;
  premiumAmount: number;
  dueDate: string;
  paymentLink?: string;
};

const sendGupshupMessage = async (payload: WhatsAppPayload): Promise<{ success: boolean; messageId?: string; error?: string }> => {
  // Simulated Gupshup WhatsApp API call
  console.log(`[Gupshup API] Sending WhatsApp template "${payload.templateName}" to ${payload.phoneNumber}`);
  console.log(`[Payload] Hi ${payload.customerName}, your policy ${payload.policyNumber} premium ₹${payload.premiumAmount} is due on ${payload.dueDate}. Pay now: ${payload.paymentLink ?? 'https://pay.insurecrm.in'}`);

  return {
    success: true,
    messageId: `wamid.HBgL${Date.now()}`,
  };
};

const handler = async (event: RoutePayload): Promise<Response> => {
  const body = (event.body as Record<string, unknown> | null) ?? {};
  const policyId = body.policyId as string | undefined;

  if (!policyId) {
    return new Response(JSON.stringify({ success: false, error: 'policyId is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const client = new CoreApiClient();

  const { policies } = await client.query({
    policies: {
      __args: { filter: { id: { eq: policyId } }, first: 1 },
      edges: {
        node: {
          id: true,
          policyNumber: true,
          premium: true,
          nextPremiumDueDate: true,
        },
      },
    },
  });

  const policy = policies?.edges?.[0]?.node;

  if (!policy?.id) {
    return new Response(JSON.stringify({ success: false, error: 'Policy not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const recipientPhone = (body.phoneNumber as string | undefined) ?? '+919876543210';
  const customerName = (body.customerName as string | undefined) ?? 'Valued Customer';

  const gupshupResult = await sendGupshupMessage({
    policyId: policy.id as string,
    phoneNumber: recipientPhone,
    templateName: 'renewal_reminder_v1',
    customerName,
    policyNumber: (policy.policyNumber as string) ?? 'N/A',
    premiumAmount: (policy.premium as number) ?? 0,
    dueDate: (policy.nextPremiumDueDate as string) ?? new Date().toISOString().split('T')[0],
    paymentLink: `https://pay.insurecrm.in/r/${policy.id}`,
  });

  return new Response(JSON.stringify({ success: true, ...gupshupResult }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export default defineLogicFunction({
  universalIdentifier: SEND_WHATSAPP_REMINDER_UNIVERSAL_IDENTIFIER,
  name: 'send-whatsapp-reminder',
  description: 'Triggers interactive Gupshup WhatsApp renewal reminder with payment link.',
  timeoutSeconds: 30,
  handler,
  httpRouteTriggerSettings: {
    path: '/renewals/send-whatsapp',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
});
