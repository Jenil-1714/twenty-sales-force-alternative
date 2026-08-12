import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const POLICY_OBJ_ID = '9df0e376-8011-437f-b052-c22588405377';
export const PRODUCT_OBJ_ID = '340c33bf-91bf-4812-9321-c6d2a03432fa';

export const POLICY_PRODUCT_FIELD_ID = '291a25a3-7945-40b9-b9ac-80f1ac836b27';
export const PRODUCT_POLICIES_FIELD_ID = '425a36ca-3554-4a14-bc49-1bb6a11aaaf8';

export default defineField({
  universalIdentifier: POLICY_PRODUCT_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJ_ID,
  type: FieldType.RELATION,
  name: 'product',
  label: 'Product',
  description: 'Relation to product',
  icon: 'IconBox',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: PRODUCT_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: PRODUCT_POLICIES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'productId',
  },
});
