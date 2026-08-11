import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const POLICY_OBJ_ID = '7d1f2e3a-5a1b-6f2d-be4f-0g2d6c5e4f3d';
export const PRODUCT_OBJ_ID = '1a5b6c7d-9e5f-0a6b-fi8j-4k6h0g9i8l7h';

export const POLICY_PRODUCT_FIELD_ID = '2b6c7d8e-0f6a-1b7c-gj9k-5l7i1h0j9m8i';
export const PRODUCT_POLICIES_FIELD_ID = '3c7d8e9f-1a7b-2c8d-hk0l-6m8j2i1k0n9j';

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
