import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_COMMISSIONS_ID = U.VIEW_COMMISSION_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_COMMISSIONS_ID,
  name: 'All Commissions',
  objectUniversalIdentifier: U.COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconMoneybag',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be0d', fieldMetadataUniversalIdentifier: U.COMMISSION_COMMISSION_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be0e', fieldMetadataUniversalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a2', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be0f', fieldMetadataUniversalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a4', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be10', fieldMetadataUniversalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a5', position: 3, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be11', fieldMetadataUniversalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b6', position: 4, isVisible: true, size: 200 },
  ],
});
