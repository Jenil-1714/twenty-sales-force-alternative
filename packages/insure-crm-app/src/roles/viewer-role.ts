import { defineRole } from 'twenty-sdk/define';

export const VIEWER_ROLE_ID = 'e0eaf037-f131-412f-98dc-a7c87c714400';

export default defineRole({
  universalIdentifier: VIEWER_ROLE_ID,
  label: 'Viewer',
  description: 'Viewer role — read only',
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: false,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
});
