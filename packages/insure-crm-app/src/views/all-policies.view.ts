import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_POLICIES_ID = U.VIEW_POLICY_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_POLICIES_ID,
  name: 'All Policies',
  objectUniversalIdentifier: U.POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconShieldCheck',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be08', fieldMetadataUniversalIdentifier: U.POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be09', fieldMetadataUniversalIdentifier: U.POLICY_POLICY_TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be0a', fieldMetadataUniversalIdentifier: U.POLICY_POLICY_SUB_TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be0b', fieldMetadataUniversalIdentifier: U.POLICY_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be0c', fieldMetadataUniversalIdentifier: U.POLICY_PREMIUM_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true, size: 200 },
  ],
});
