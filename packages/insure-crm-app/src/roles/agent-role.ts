import { defineRole } from 'twenty-sdk/define';

export const AGENT_ROLE_ID = '73eb1bc6-d50d-4034-8c7c-47bcffaf933d';

export default defineRole({
  universalIdentifier: AGENT_ROLE_ID,
  label: 'Agent',
  description: 'Agent role — can read and update own records only (no soft delete, no destroy)',
  canReadAllObjectRecords: false,
  canUpdateAllObjectRecords: false,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
});
