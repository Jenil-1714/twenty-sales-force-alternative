import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import {
  INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { PRODUCT_INSURER_FIELD_ID, INSURER_PRODUCTS_FIELD_ID } from './product-insurer.relation';

export default defineField({
  universalIdentifier: INSURER_PRODUCTS_FIELD_ID,
  objectUniversalIdentifier: INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'products',
  label: 'Products',
  description: 'Relation to products',
  icon: 'IconBox',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PRODUCT_INSURER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
