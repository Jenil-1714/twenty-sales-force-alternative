import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import {
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const POLICY_INSURER_FIELD_ID = '2209d523-3f61-439a-84d3-f13e970718d9';
export const INSURER_POLICIES_FIELD_ID = '810ae633-f88a-4243-a484-2588a6f44871';

export default defineField({
  universalIdentifier: POLICY_INSURER_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'insurer',
  label: 'Insurer',
  description: 'Relation to insurer',
  icon: 'IconBuildingBank',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: INSURER_POLICIES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'insurerId',
  },
});
