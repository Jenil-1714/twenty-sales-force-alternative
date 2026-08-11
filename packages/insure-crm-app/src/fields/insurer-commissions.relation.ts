import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { COMMISSION_OBJECT_ID } from '../objects/commission.object';
import { INSURER_OBJ_ID } from './policy-insurer.relation';
import { COMMISSION_INSURER_FIELD_ID, INSURER_COMMISSIONS_FIELD_ID } from './commission-insurer.relation';

export default defineField({
  universalIdentifier: INSURER_COMMISSIONS_FIELD_ID,
  objectUniversalIdentifier: INSURER_OBJ_ID,
  type: FieldType.RELATION,
  name: 'commissions',
  label: 'Commissions',
  description: 'Relation to commissions',
  icon: 'IconMoneybag',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: COMMISSION_OBJECT_ID,
  relationTargetFieldMetadataUniversalIdentifier: COMMISSION_INSURER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
