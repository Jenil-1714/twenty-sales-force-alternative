import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { COMMISSION_OBJECT_ID } from '../objects/commission.object';
import { INSURER_OBJ_ID } from './policy-insurer.relation';

export const COMMISSION_INSURER_FIELD_ID = 'a315a6a7-1202-4238-96bd-dcfcd1f1732e';
export const INSURER_COMMISSIONS_FIELD_ID = '541aab8d-188b-469f-8785-fa470529920b';

export default defineField({
  universalIdentifier: COMMISSION_INSURER_FIELD_ID,
  objectUniversalIdentifier: COMMISSION_OBJECT_ID,
  type: FieldType.RELATION,
  name: 'insurer',
  label: 'Insurer',
  description: 'Relation to insurer',
  icon: 'IconBuildingBank',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURER_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: INSURER_COMMISSIONS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'insurerId',
  },
});
