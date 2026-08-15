import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_INSURERS_ID = U.VIEW_INSURER_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_INSURERS_ID,
  name: 'All Insurers',
  objectUniversalIdentifier: U.INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconBuilding',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be01', fieldMetadataUniversalIdentifier: U.INSURER_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be02', fieldMetadataUniversalIdentifier: U.INSURER_SHORT_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be03', fieldMetadataUniversalIdentifier: U.INSURER_IRDAI_LICENSE_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 200 },
  ],
});
