import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const NAV_INSURERS_ID = '80e32f58-c2b6-455a-bd59-71af94dc5060';

export default defineNavigationMenuItem({
  universalIdentifier: NAV_INSURERS_ID,
  name: 'Insurers',
  icon: 'IconBuildingBank',
  color: 'blue',
  position: 5,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: U.VIEW_INSURER_LIST_UNIVERSAL_IDENTIFIER,
});
