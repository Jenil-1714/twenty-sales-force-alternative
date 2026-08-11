import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction } from 'twenty-sdk/define';

export const CHECK_EXPIRING_POLICIES_UNIVERSAL_IDENTIFIER = '7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c';

const handler = async (): Promise<{ success: boolean; totalProcessed: number; buckets: Record<string, number> }> => {
  const client = new CoreApiClient();

  const now = new Date();
  const date60Days = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString();

  // Query policies with status ACTIVE or PREMIUM_DUE and renewal dates coming up
  const { policies } = await client.query({
    policies: {
      __args: {
        filter: {
          status: { in: ['ACTIVE', 'PREMIUM_DUE'] },
          nextRenewalDate: { lte: date60Days },
        },
        first: 500,
      },
      edges: {
        node: {
          id: true,
          policyNumber: true,
          status: true,
          premium: true,
          nextRenewalDate: true,
          priority: true,
        },
      },
    },
  });

  const bucketCounts: Record<string, number> = {
    dueIn7Days: 0,
    dueIn15Days: 0,
    dueIn30Days: 0,
    dueIn60Days: 0,
  };

  const nodeList = policies?.edges?.map((edge: { node: Record<string, unknown> }) => edge.node) ?? [];

  for (const policy of nodeList) {
    if (!policy.nextRenewalDate) continue;
    const renewalTime = new Date(policy.nextRenewalDate as string).getTime();
    const diffDays = Math.ceil((renewalTime - now.getTime()) / (1000 * 3600 * 24));

    if (diffDays <= 7) {
      bucketCounts.dueIn7Days++;
      // High urgency - update priority to High
      if (policy.priority !== 'HIGH') {
        await client.mutation({
          updatePolicy: {
            __args: {
              id: policy.id as string,
              data: { priority: 'HIGH', status: 'PREMIUM_DUE' },
            },
            id: true,
          },
        });
      }
    } else if (diffDays <= 15) {
      bucketCounts.dueIn15Days++;
    } else if (diffDays <= 30) {
      bucketCounts.dueIn30Days++;
    } else if (diffDays <= 60) {
      bucketCounts.dueIn60Days++;
    }
  }

  return {
    success: true,
    totalProcessed: nodeList.length,
    buckets: bucketCounts,
  };
};

export default defineLogicFunction({
  universalIdentifier: CHECK_EXPIRING_POLICIES_UNIVERSAL_IDENTIFIER,
  name: 'check-expiring-policies',
  description: 'Daily cron task scanning for policies expiring in 60/30/15/7 days and prioritizing renewal reminders.',
  timeoutSeconds: 60,
  handler,
  cronTriggerSettings: {
    pattern: '0 8 * * *', // Daily at 8:00 AM IST
  },
});
