import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_RENEWALS_ID = '4ab1f8ad-78d1-4e78-becc-82245b7367ce';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_RENEWALS_ID,
  name: 'Renewals',
  icon: 'IconRefresh',
  color: 'blue',
  position: 1,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: '2f745778-99d7-466d-8b09-b68e0d9b4b0e',
});
