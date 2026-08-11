import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { CLAIM_OBJECT_ID } from '../objects/claim.object';
import { POLICY_OBJ_ID } from './policy-insurer.relation';

export const CLAIM_POLICY_FIELD_ID = '8h2c3d4e-6f2g-7h3i-mp5q-1r3o7n6p5s4o';
export const POLICY_CLAIMS_FIELD_ID = '9i3d4e5f-7g3h-8i4j-nq6r-2s4p8o7q6t5p';

export default defineField({
  universalIdentifier: CLAIM_POLICY_FIELD_ID,
  objectUniversalIdentifier: CLAIM_OBJECT_ID,
  type: FieldType.RELATION,
  name: 'policy',
  label: 'Policy',
  description: 'Relation to policy',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_CLAIMS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'policyId',
  },
});
