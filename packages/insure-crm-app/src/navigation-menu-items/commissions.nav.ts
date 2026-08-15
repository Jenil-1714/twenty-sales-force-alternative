import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const NAV_COMMISSIONS_ID = 'f6e4a2e5-e633-4f9e-bd80-8b17a5a3a2d5';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_COMMISSIONS_ID,
  name: 'Commissions',
  icon: 'IconCurrencyRupee',
  color: 'blue',
  position: 2,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: U.VIEW_COMMISSION_LIST_UNIVERSAL_IDENTIFIER,
});
