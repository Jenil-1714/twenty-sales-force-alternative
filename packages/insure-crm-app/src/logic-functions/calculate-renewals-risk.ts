import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction, type RoutePayload } from 'twenty-sdk/define';
import { Response } from 'twenty-sdk/logic-function';

export const CALCULATE_RENEWALS_RISK_UNIVERSAL_IDENTIFIER = '9b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e';

export type RiskAssessmentResult = {
  policyId: string;
  riskScore: number; // 0-100
  riskCategory: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  factors: string[];
};

export const computePolicyRisk = (policy: {
  status?: string;
  nextRenewalDate?: string;
  premiumFrequency?: string;
  policyTerm?: number;
  premium?: number;
}): RiskAssessmentResult => {
  let score = 20; // baseline
  const factors: string[] = [];

  const now = new Date();
  if (policy.nextRenewalDate) {
    const diffDays = Math.ceil((new Date(policy.nextRenewalDate).getTime() - now.getTime()) / (1000 * 3600 * 24));

    if (diffDays <= 0) {
      score += 40;
      factors.push('Past renewal date (Lapsed risk)');
    } else if (diffDays <= 7) {
      score += 30;
      factors.push('Due within 7 days');
    } else if (diffDays <= 15) {
      score += 15;
      factors.push('Due within 15 days');
    }
  }

  if (policy.premiumFrequency === 'MONTHLY') {
    score += 15;
    factors.push('High-frequency monthly payment friction');
  } else if (policy.premiumFrequency === 'SINGLE') {
    score -= 10;
    factors.push('Single premium (low renewal risk)');
  }

  if (policy.status === 'PREMIUM_DUE') {
    score += 20;
    factors.push('Payment currently overdue');
  } else if (policy.status === 'REVIVAL_PENDING') {
    score += 35;
    factors.push('Revival pending after lapse');
  }

  const finalScore = Math.min(Math.max(score, 0), 100);
  let category: RiskAssessmentResult['riskCategory'] = 'LOW';
  if (finalScore >= 75) category = 'CRITICAL';
  else if (finalScore >= 50) category = 'HIGH';
  else if (finalScore >= 30) category = 'MEDIUM';

  return {
    policyId: '',
    riskScore: finalScore,
    riskCategory: category,
    factors,
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
          status: true,
          nextRenewalDate: true,
          premiumFrequency: true,
          policyTerm: true,
          premium: true,
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

  const result = computePolicyRisk({
    status: policy.status as string,
    nextRenewalDate: policy.nextRenewalDate as string,
    premiumFrequency: policy.premiumFrequency as string,
    policyTerm: policy.policyTerm as number,
    premium: policy.premium as number,
  });

  result.policyId = policy.id as string;

  return new Response(JSON.stringify({ success: true, riskAssessment: result }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export default defineLogicFunction({
  universalIdentifier: CALCULATE_RENEWALS_RISK_UNIVERSAL_IDENTIFIER,
  name: 'calculate-renewals-risk',
  description: 'Calculates renewal lapse risk score (0-100) and risk factors for a policy.',
  timeoutSeconds: 15,
  handler,
  httpRouteTriggerSettings: {
    path: '/renewals/calculate-risk',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
});
