import { defineApplicationRole, SystemPermissionFlag } from 'twenty-sdk/define';

export const DEFAULT_ROLE_ID = 'e2e0436d-1db9-4a0d-8557-0a4dc0e21a41';

export default defineApplicationRole({
  universalIdentifier: DEFAULT_ROLE_ID,
  label: 'Default Admin Role',
  description: 'Default application role with full read/update, file upload, tool access, agent assignment',
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: true,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
  canAccessAllTools: true,
  canBeAssignedToAgents: true,
  permissionFlagUniversalIdentifiers: [SystemPermissionFlag.UPLOAD_FILE],
});
