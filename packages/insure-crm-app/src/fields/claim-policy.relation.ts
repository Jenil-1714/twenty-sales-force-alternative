import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import {
  CLAIM_OBJECT_UNIVERSAL_IDENTIFIER,
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const CLAIM_POLICY_FIELD_ID = 'e9a38e58-ad1d-4d1e-b05d-0161fcb58d71';
export const POLICY_CLAIMS_FIELD_ID = '6a7c4ea4-9a4e-4f3d-aa21-939e2d33d242';

export default defineField({
  universalIdentifier: CLAIM_POLICY_FIELD_ID,
  objectUniversalIdentifier: CLAIM_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'policy',
  label: 'Policy',
  description: 'Relation to policy',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_CLAIMS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'policyId',
  },
});
