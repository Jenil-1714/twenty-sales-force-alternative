import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const POLICY_OBJ_ID = '7d1f2e3a-5a1b-6f2d-be4f-0g2d6c5e4f3d';
export const INSURER_OBJ_ID = '8e2g3f4b-6b2c-7f3e-cf5g-1f3e7d6f5f4e';

export const POLICY_INSURER_FIELD_ID = '9f3h4g5c-7c3d-8f4f-dg6h-2f4f8e7g6f5f';
export const INSURER_POLICIES_FIELD_ID = '0g4i5h6d-8d4e-9f5g-eh7i-3f5g9f8h7f6g';

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
