import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_INSURERS_ID = '80e32f58-c2b6-455a-bd59-71af94dc5060';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_INSURERS_ID,
  name: 'Insurers',
  icon: 'IconBuildingBank',
  color: 'blue',
  position: 5,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: 'a951fcf5-dc56-4279-9941-8f81014ab52e',
});
