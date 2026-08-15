import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_FAMILY_GROUPS_ID = U.VIEW_FAMILY_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_FAMILY_GROUPS_ID,
  name: 'All Family Groups',
  objectUniversalIdentifier: U.FAMILY_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconUsers',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be1a', fieldMetadataUniversalIdentifier: U.FAMILY_GROUP_GROUP_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be1b', fieldMetadataUniversalIdentifier: 'b844482e-e2e3-4397-8230-b4d4df8b8636', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be1c', fieldMetadataUniversalIdentifier: '5019baa4-1055-41ce-90dc-3f5dc43349be', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be1d', fieldMetadataUniversalIdentifier: 'edd14d2c-5001-480a-865e-0e9c7d3cad08', position: 3, isVisible: true, size: 200 },
  ],
});
