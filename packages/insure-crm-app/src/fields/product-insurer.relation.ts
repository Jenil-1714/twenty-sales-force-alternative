import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import {
  INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const PRODUCT_INSURER_FIELD_ID = 'f3aa315c-e97c-4b35-a68f-8adbf62287c6';
export const INSURER_PRODUCTS_FIELD_ID = '8afdc7c9-bdd0-4e80-9665-8f467be18b02';

export default defineField({
  universalIdentifier: PRODUCT_INSURER_FIELD_ID,
  objectUniversalIdentifier: INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'insurer',
  label: 'Insurer',
  description: 'Relation to insurer',
  icon: 'IconBuildingBank',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: INSURER_PRODUCTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'insurerId',
  },
});
