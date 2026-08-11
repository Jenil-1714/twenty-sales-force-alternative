import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

export const NAV_COMMISSIONS_ID = 'f6e4a2e5-e633-4f9e-bd80-8b17a5a3a2d5';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_COMMISSIONS_ID,
  name: 'Commissions',
  icon: 'IconCurrencyRupee',
  color: 'blue',
  position: 2,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: 'df55a401-4475-430c-ab22-0d6e6abedc5c',
});
