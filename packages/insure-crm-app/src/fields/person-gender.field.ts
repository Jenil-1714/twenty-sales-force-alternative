import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'gender',
  label: 'Gender',
  description: 'Gender',
  icon: 'IconUser',
  options: [
    { id: '1', value: 'Male', label: 'Male', color: 'blue', position: 0 },
    { id: '2', value: 'Female', label: 'Female', color: 'pink', position: 1 },
    { id: '3', value: 'Other', label: 'Other', color: 'gray', position: 2 },
  ]
});
