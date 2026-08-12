import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import {
  COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
  INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const COMMISSION_INSURER_FIELD_ID = 'a315a6a7-1202-4238-96bd-dcfcd1f1732e';
export const INSURER_COMMISSIONS_FIELD_ID = '541aab8d-188b-469f-8785-fa470529920b';

export default defineField({
  universalIdentifier: COMMISSION_INSURER_FIELD_ID,
  objectUniversalIdentifier: COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'insurer',
  label: 'Insurer',
  description: 'Relation to insurer',
  icon: 'IconBuildingBank',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: INSURER_COMMISSIONS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'insurerId',
  },
});
