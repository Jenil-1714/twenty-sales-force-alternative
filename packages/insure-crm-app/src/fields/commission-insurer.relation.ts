import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { COMMISSION_OBJECT_ID } from '../objects/commission.object';
import { INSURER_OBJ_ID } from './policy-insurer.relation';

export const COMMISSION_INSURER_FIELD_ID = '6f0a1b2c-4d0e-5f1g-kn3o-9p1m5l4n3q2m';
export const INSURER_COMMISSIONS_FIELD_ID = '7g1b2c3d-5e1f-6g2h-lo4p-0q2n6m5o4r3n';

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
