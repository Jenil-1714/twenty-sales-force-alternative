import { defineRole } from 'twenty-sdk/define';

export const SUB_AGENT_ROLE_ID = 'd916d1bb-7d6f-42e1-8857-8ff7a4ad8573';

export default defineRole({
  universalIdentifier: SUB_AGENT_ROLE_ID,
  label: 'Sub-agent / POSP',
  description: 'Sub-agent/POSP role — restricted read/update, no delete',
  canReadAllObjectRecords: false,
  canUpdateAllObjectRecords: false,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
});
