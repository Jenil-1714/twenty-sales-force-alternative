import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { POLICY_OBJ_ID, PRODUCT_OBJ_ID, POLICY_PRODUCT_FIELD_ID, PRODUCT_POLICIES_FIELD_ID } from './policy-product.relation';

export default defineField({
  universalIdentifier: PRODUCT_POLICIES_FIELD_ID,
  objectUniversalIdentifier: PRODUCT_OBJ_ID,
  type: FieldType.RELATION,
  name: 'policies',
  label: 'Policies',
  description: 'Relation to policies',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_PRODUCT_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
