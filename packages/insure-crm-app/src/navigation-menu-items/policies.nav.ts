import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const NAV_POLICIES_ID = '15bde329-8438-4e89-8dcf-3c5b5bb2c7cf';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_POLICIES_ID,
  name: 'Policies',
  icon: 'IconFileDescription',
  color: 'blue',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: U.VIEW_POLICY_LIST_UNIVERSAL_IDENTIFIER,
});
