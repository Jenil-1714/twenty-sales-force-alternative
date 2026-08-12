import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import {
  INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { POLICY_INSURER_FIELD_ID, INSURER_POLICIES_FIELD_ID } from './policy-insurer.relation';

export default defineField({
  universalIdentifier: INSURER_POLICIES_FIELD_ID,
  objectUniversalIdentifier: INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'policies',
  label: 'Policies',
  description: 'Relation to policies',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_INSURER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
