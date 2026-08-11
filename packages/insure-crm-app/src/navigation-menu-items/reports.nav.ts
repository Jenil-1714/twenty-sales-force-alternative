import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_REPORTS_ID = 'aa9fc7dc-4009-4458-9642-f38bbfce57b0';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_REPORTS_ID,
  name: 'Reports',
  icon: 'IconChartBar',
  color: 'blue',
  position: 6,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: 'bbb8e622-4ff1-45da-98d0-2ecdb09b5de4',
});
