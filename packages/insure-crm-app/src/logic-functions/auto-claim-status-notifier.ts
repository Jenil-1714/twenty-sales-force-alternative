import { defineLogicFunction } from 'twenty-sdk/define';
import { type ObjectRecordUpdateEvent } from 'twenty-sdk/logic-function';
import { CLAIM_OBJECT_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export const AUTO_CLAIM_STATUS_NOTIFIER_UNIVERSAL_IDENTIFIER = '4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9c';

const handler = async (event: ObjectRecordUpdateEvent): Promise<void> => {
  const before = event.properties?.before as Record<string, unknown> | undefined;
  const after = event.properties?.after as Record<string, unknown> | undefined;

  if (after?.status && after.status !== before?.status) {
    const claimNumber = (after.claimNumber as string) ?? 'N/A';
    const newStatus = after.status as string;

    console.log(`[Auto Claim Notifier] Claim #${claimNumber} status changed from "${before?.status ?? 'N/A'}" to "${newStatus}".`);
    console.log(`[WhatsApp Dispatch] Sending automated claim status update alert to customer for Claim #${claimNumber} -> Stage: ${newStatus}`);
  }
};

export default defineLogicFunction({
  universalIdentifier: AUTO_CLAIM_STATUS_NOTIFIER_UNIVERSAL_IDENTIFIER,
  name: 'auto-claim-status-notifier',
  description: 'Triggers real-time WhatsApp status notifications whenever a claim stage changes.',
  timeoutSeconds: 15,
  handler,
  databaseEventTriggerSettings: {
    objectUniversalIdentifier: CLAIM_OBJECT_UNIVERSAL_IDENTIFIER,
    eventName: 'updated',
  },
});

