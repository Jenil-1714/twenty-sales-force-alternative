import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const NAV_FAMILIES_ID = 'e2fb2090-f92d-450e-8a1a-428271e8ce09';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_FAMILIES_ID,
  name: 'Families',
  icon: 'IconUsers',
  color: 'blue',
  position: 4,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: U.VIEW_FAMILY_LIST_UNIVERSAL_IDENTIFIER,
});
