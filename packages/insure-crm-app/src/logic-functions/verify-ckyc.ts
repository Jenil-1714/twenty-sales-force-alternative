import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction, type RoutePayload } from 'twenty-sdk/define';
import { Response } from 'twenty-sdk/logic-function';

export const VERIFY_CKYC_UNIVERSAL_IDENTIFIER = 'c87e11f0-1042-463d-b027-0a4cce0a6848';

export type CKYCRequest = {
  panNumber?: string;
  aadhaarNumber?: string;
  dob?: string;
  personId?: string;
};

const handler = async (event: RoutePayload): Promise<Response> => {
  const body = (event.body as Record<string, unknown> | null) ?? {};
  const panNumber = (body.panNumber as string | undefined)?.toUpperCase();
  const personId = body.personId as string | undefined;

  if (!panNumber && !personId) {
    return new Response(JSON.stringify({ success: false, error: 'panNumber or personId is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Simulated CKYC Registry Lookup
  const mockCkycNumber = `CKYC-${Math.floor(100000000000 + Math.random() * 900000000000)}`;

  const client = new CoreApiClient();

  if (personId) {
    // Update Person record with verified KYC status
    await client.mutation({
      updatePerson: {
        __args: {
          id: personId,
          data: {
            kycStatus: 'Verified',
          },
        },
        id: true,
      },
    });
  }

  return new Response(JSON.stringify({
    success: true,
    verificationStatus: 'Verified',
    ckycNumber: mockCkycNumber,
    verifiedDate: new Date().toISOString(),
    details: {
      panMatch: true,
      nameMatch: true,
      addressVerified: true,
    },
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export default defineLogicFunction({
  universalIdentifier: VERIFY_CKYC_UNIVERSAL_IDENTIFIER,
  name: 'verify-ckyc',
  description: 'Simulates CKYC registry lookup using PAN/Aadhaar and auto-verifies KYC status.',
  timeoutSeconds: 20,
  handler,
  httpRouteTriggerSettings: {
    path: '/kyc/verify-ckyc',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
});
