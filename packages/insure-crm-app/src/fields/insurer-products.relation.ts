import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PRODUCT_OBJ_ID } from './policy-product.relation';
import { INSURER_OBJ_ID } from './policy-insurer.relation';
import { PRODUCT_INSURER_FIELD_ID, INSURER_PRODUCTS_FIELD_ID } from './product-insurer.relation';

export default defineField({
  universalIdentifier: INSURER_PRODUCTS_FIELD_ID,
  objectUniversalIdentifier: INSURER_OBJ_ID,
  type: FieldType.RELATION,
  name: 'products',
  label: 'Products',
  description: 'Relation to products',
  icon: 'IconBox',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: PRODUCT_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: PRODUCT_INSURER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
