import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_POLICIES_ID = '15bde329-8438-4e89-8dcf-3c5b5bb2c7cf';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_POLICIES_ID,
  name: 'Policies',
  icon: 'IconFileDescription',
  color: 'blue',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: '556cdab3-a551-40ef-bc61-a58d62638a1f',
});
