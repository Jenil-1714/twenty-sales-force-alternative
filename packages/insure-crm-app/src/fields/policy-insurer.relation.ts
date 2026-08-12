import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const POLICY_OBJ_ID = '9df0e376-8011-437f-b052-c22588405377';
export const INSURER_OBJ_ID = '7312cf60-adea-4048-9c87-df99bb6d04fd';

export const POLICY_INSURER_FIELD_ID = '2209d523-3f61-439a-84d3-f13e970718d9';
export const INSURER_POLICIES_FIELD_ID = '810ae633-f88a-4243-a484-2588a6f44871';

export default defineField({
  universalIdentifier: POLICY_INSURER_FIELD_ID,
  objectUniversalIdentifier: POLICY_OBJ_ID,
  type: FieldType.RELATION,
  name: 'insurer',
  label: 'Insurer',
  description: 'Relation to insurer',
  icon: 'IconBuildingBank',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: INSURER_OBJ_ID,
  relationTargetFieldMetadataUniversalIdentifier: INSURER_POLICIES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'insurerId',
  },
});
