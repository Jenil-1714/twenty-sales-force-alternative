import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import {
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  CLAIM_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { CLAIM_POLICY_FIELD_ID, POLICY_CLAIMS_FIELD_ID } from './claim-policy.relation';

export default defineField({
  universalIdentifier: POLICY_CLAIMS_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'claims',
  label: 'Claims',
  description: 'Relation to claims',
  icon: 'IconFileAlert',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: CLAIM_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CLAIM_POLICY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
