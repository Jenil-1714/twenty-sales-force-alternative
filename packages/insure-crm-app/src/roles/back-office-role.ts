import { defineRole } from 'twenty-sdk/define';

export const BACK_OFFICE_ROLE_ID = 'eab92f98-b80c-48c0-82d2-850ed96f014e';

export default defineRole({
  universalIdentifier: BACK_OFFICE_ROLE_ID,
  label: 'Back Office',
  description: 'Back office role — can read all, update all, no delete access',
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: true,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
});
