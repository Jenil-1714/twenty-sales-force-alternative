import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_RENEWALS_ID = '2f745778-99d7-466d-8b09-b68e0d9b4b0e';

export default defineView({
  universalIdentifier: VIEW_ALL_RENEWALS_ID,
  name: 'All Renewals',
  objectUniversalIdentifier: U.POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconCalendarEvent',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be1e', fieldMetadataUniversalIdentifier: U.POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be1f', fieldMetadataUniversalIdentifier: U.POLICY_NEXT_RENEWAL_DATE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be20', fieldMetadataUniversalIdentifier: U.POLICY_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 200 },
  ],
});
