import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import {
  INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { POLICY_PRODUCT_FIELD_ID, PRODUCT_POLICIES_FIELD_ID } from './policy-product.relation';

export default defineField({
  universalIdentifier: PRODUCT_POLICIES_FIELD_ID,
  objectUniversalIdentifier: INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'policies',
  label: 'Policies',
  description: 'Relation to policies',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_PRODUCT_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
