import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import {
  POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { COMMISSION_POLICY_FIELD_ID, POLICY_COMMISSIONS_FIELD_ID } from './commission-policy.relation';

export default defineField({
  universalIdentifier: POLICY_COMMISSIONS_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'commissions',
  label: 'Commissions',
  description: 'Relation to commissions',
  icon: 'IconMoneybag',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: COMMISSION_POLICY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
