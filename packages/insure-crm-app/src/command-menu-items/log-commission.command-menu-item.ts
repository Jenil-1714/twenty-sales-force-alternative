import { defineCommandMenuItem } from 'twenty-sdk/define';
import { FRONT_COMPONENT_COMMISSION_RECONCILIATION_VIEW_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export const CMD_LOG_COMMISSION_ID = '2f5c15e8-fb16-4af5-b772-23c563e7c8eb';

export default defineCommandMenuItem({
  universalIdentifier: CMD_LOG_COMMISSION_ID,
  label: 'Log Commission Payment',
  shortLabel: 'Log Commission',
  isPinned: false,
  availabilityType: 'RECORD_SELECTION',
  frontComponentUniversalIdentifier: FRONT_COMPONENT_COMMISSION_RECONCILIATION_VIEW_UNIVERSAL_IDENTIFIER,
});

