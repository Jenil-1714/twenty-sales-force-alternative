import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import {
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const POLICY_PRODUCT_FIELD_ID = '291a25a3-7945-40b9-b9ac-80f1ac836b27';
export const PRODUCT_POLICIES_FIELD_ID = '425a36ca-3554-4a14-bc49-1bb6a11aaaf8';

export default defineField({
  universalIdentifier: POLICY_PRODUCT_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'product',
  label: 'Product',
  description: 'Relation to product',
  icon: 'IconBox',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PRODUCT_POLICIES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'productId',
  },
});
