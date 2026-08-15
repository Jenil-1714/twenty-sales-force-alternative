import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_PRODUCTS_ID = U.VIEW_PRODUCT_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_PRODUCTS_ID,
  name: 'All Products',
  objectUniversalIdentifier: U.INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconBox',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be04', fieldMetadataUniversalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be05', fieldMetadataUniversalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_CODE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be06', fieldMetadataUniversalIdentifier: U.INSURANCE_PRODUCT_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be07', fieldMetadataUniversalIdentifier: U.INSURANCE_PRODUCT_SUB_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 200 },
  ],
});
