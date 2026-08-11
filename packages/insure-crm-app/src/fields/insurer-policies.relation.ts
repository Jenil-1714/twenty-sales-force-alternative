import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { POLICY_OBJ_ID, INSURER_OBJ_ID, POLICY_INSURER_FIELD_ID, INSURER_POLICIES_FIELD_ID } from './policy-insurer.relation';

export default defineField({
  universalIdentifier: INSURER_POLICIES_FIELD_ID,
  objectUniversalIdentifier: INSURER_OBJ_ID,
  type: FieldType.RELATION,
  name: 'policies',
  label: 'Policies',
  description: 'Relation to policies',
  icon: 'IconFileDescription',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: POLICY_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: POLICY_INSURER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
