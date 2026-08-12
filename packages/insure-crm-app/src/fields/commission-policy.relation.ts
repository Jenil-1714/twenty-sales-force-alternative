import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { COMMISSION_OBJECT_ID } from '../objects/commission.object';
import { POLICY_OBJ_ID } from './policy-insurer.relation';

export const COMMISSION_POLICY_FIELD_ID = 'fbdc5a38-0be1-49c0-9620-aa333f6364db';
export const POLICY_COMMISSIONS_FIELD_ID = '90da91ac-58f2-40b6-961d-667cd672add7';

export default defineField({
  universalIdentifier: COMMISSION_POLICY_FIELD_ID,
  objectUniversalIdentifier: COMMISSION_OBJECT_ID,
  type: FieldType.RELATION,
  name: 'policy',
  label: 'Policy',
  description: 'Relation to policy',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_COMMISSIONS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'policyId',
  },
});
