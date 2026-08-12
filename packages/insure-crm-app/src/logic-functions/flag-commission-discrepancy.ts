import { defineLogicFunction } from 'twenty-sdk/define';
import { type ObjectRecordUpdateEvent } from 'twenty-sdk/logic-function';
import { COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export const FLAG_COMMISSION_DISCREPANCY_UNIVERSAL_IDENTIFIER = 'e6f593b2-06de-4f68-8e83-d1768cda49ab';

const handler = async (event: ObjectRecordUpdateEvent): Promise<void> => {
  const updatedData = event.properties?.after as Record<string, unknown> | undefined;

  if (updatedData?.varianceStatus === 'Shortfall') {
    const statementRef = updatedData.statementReference ?? 'N/A';
    const varianceAmount = updatedData.variance ?? 0;
    console.warn(`[Commission Discrepancy Alert] Commission statement "${statementRef}" has a shortfall of ₹${Math.abs(Number(varianceAmount))}. Escalated for review.`);
  }
};

export default defineLogicFunction({
  universalIdentifier: FLAG_COMMISSION_DISCREPANCY_UNIVERSAL_IDENTIFIER,
  name: 'flag-commission-discrepancy',
  description: 'Triggers alerts whenever a commission update results in a shortfall variance.',
  timeoutSeconds: 15,
  handler,
  databaseEventTriggerSettings: {
    objectUniversalIdentifier: COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
    eventName: 'updated',
  },
});

