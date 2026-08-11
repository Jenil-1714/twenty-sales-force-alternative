import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_SETTINGS_ID = 'cee8dbd2-5a2a-44af-bacd-dc540e1069d2';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_SETTINGS_ID,
  name: 'Settings',
  icon: 'IconSettings',
  color: 'blue',
  position: 7,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: 'd32d0342-a169-42b7-a8a2-2b63af77df93',
});
