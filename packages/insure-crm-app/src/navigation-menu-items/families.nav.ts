import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_FAMILIES_ID = 'e2fb2090-f92d-450e-8a1a-428271e8ce09';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_FAMILIES_ID,
  name: 'Families',
  icon: 'IconUsers',
  color: 'blue',
  position: 4,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: 'b4d64380-60b1-4d76-b608-251f0436d41f',
});
