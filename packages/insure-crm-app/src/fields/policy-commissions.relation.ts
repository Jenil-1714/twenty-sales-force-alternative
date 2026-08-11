import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { COMMISSION_OBJECT_ID } from '../objects/commission.object';
import { POLICY_OBJ_ID } from './policy-insurer.relation';
import { COMMISSION_POLICY_FIELD_ID, POLICY_COMMISSIONS_FIELD_ID } from './commission-policy.relation';

export default defineField({
  universalIdentifier: POLICY_COMMISSIONS_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJ_ID,
  type: FieldType.RELATION,
  name: 'commissions',
  label: 'Commissions',
  description: 'Relation to commissions',
  icon: 'IconMoneybag',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: COMMISSION_OBJECT_ID,
  relationTargetFieldMetadataUniversalIdentifier: COMMISSION_POLICY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
