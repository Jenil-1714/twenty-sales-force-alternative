import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { CLAIM_OBJECT_ID } from '../objects/claim.object';
import { POLICY_OBJ_ID } from './policy-insurer.relation';
import { CLAIM_POLICY_FIELD_ID, POLICY_CLAIMS_FIELD_ID } from './claim-policy.relation';

export default defineField({
  universalIdentifier: POLICY_CLAIMS_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJ_ID,
  type: FieldType.RELATION,
  name: 'claims',
  label: 'Claims',
  description: 'Relation to claims',
  icon: 'IconFileAlert',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: CLAIM_OBJECT_ID,
  relationTargetFieldMetadataUniversalIdentifier: CLAIM_POLICY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
