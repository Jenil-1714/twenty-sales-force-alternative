import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { PRODUCT_OBJ_ID } from './policy-product.relation';
import { INSURER_OBJ_ID } from './policy-insurer.relation';

export const PRODUCT_INSURER_FIELD_ID = '0j4e5f6g-8h4i-9j5k-or7s-3t5q9p8r7u6q';
export const INSURER_PRODUCTS_FIELD_ID = '1k5f6g7h-9i5j-0k6l-ps8t-4u6r0q9s8v7r';

export default defineField({
  universalIdentifier: PRODUCT_INSURER_FIELD_ID,
  objectUniversalIdentifier: PRODUCT_OBJ_ID,
  type: FieldType.RELATION,
  name: 'insurer',
  label: 'Insurer',
  description: 'Relation to insurer',
  icon: 'IconBuildingBank',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURER_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: INSURER_PRODUCTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'insurerId',
  },
});
