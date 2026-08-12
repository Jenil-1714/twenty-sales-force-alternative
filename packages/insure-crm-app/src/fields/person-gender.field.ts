import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'f5112018-1cda-4ef8-a5d8-6f588a91f0fa',
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
