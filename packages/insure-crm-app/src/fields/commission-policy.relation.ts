import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { COMMISSION_OBJECT_ID } from '../objects/commission.object';
import { POLICY_OBJ_ID } from './policy-insurer.relation';

export const COMMISSION_POLICY_FIELD_ID = '4d8e9f0a-2b8c-3d9e-il1m-7n9k3j2l1o0k';
export const POLICY_COMMISSIONS_FIELD_ID = '5e9f0a1b-3c9d-4e0f-jm2n-8o0l4k3m2p1l';

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
