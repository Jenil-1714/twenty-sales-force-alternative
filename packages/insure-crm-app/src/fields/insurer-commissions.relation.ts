import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import {
  INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { COMMISSION_INSURER_FIELD_ID, INSURER_COMMISSIONS_FIELD_ID } from './commission-insurer.relation';

export default defineField({
  universalIdentifier: INSURER_COMMISSIONS_FIELD_ID,
  objectUniversalIdentifier: INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'commissions',
  label: 'Commissions',
  description: 'Relation to commissions',
  icon: 'IconMoneybag',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: COMMISSION_INSURER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
