import { defineLogicFunction } from 'twenty-sdk/define';
import { type ObjectRecordUpdateEvent } from 'twenty-sdk/logic-function';
import { COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export const FLAG_COMMISSION_DISCREPANCY_UNIVERSAL_IDENTIFIER = '1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e';

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
    event: 'updated',
  },
});
