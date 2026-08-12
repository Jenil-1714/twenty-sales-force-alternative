import { defineCommandMenuItem } from 'twenty-sdk/define';
import { FRONT_COMPONENT_RENEWAL_COMMAND_FORM_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export const CMD_CREATE_POLICY_ID = '331828f7-f815-4674-8b6f-87034c56beee';

export default defineCommandMenuItem({
  universalIdentifier: CMD_CREATE_POLICY_ID,
  label: 'Create New Policy',
  shortLabel: 'New Policy',
  isPinned: false,
  availabilityType: 'RECORD_SELECTION',
  frontComponentUniversalIdentifier: FRONT_COMPONENT_RENEWAL_COMMAND_FORM_UNIVERSAL_IDENTIFIER,
});

