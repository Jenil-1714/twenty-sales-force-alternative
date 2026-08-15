import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const NAV_CLAIMS_ID = 'dae3c75a-c51d-48d6-95f2-95f32a6bcde6';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_CLAIMS_ID,
  name: 'Claims',
  icon: 'IconClipboardCheck',
  color: 'blue',
  position: 3,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: U.VIEW_CLAIM_LIST_UNIVERSAL_IDENTIFIER,
});
