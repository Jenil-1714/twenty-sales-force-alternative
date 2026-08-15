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
    { id: 'f5112018-1cda-4ef8-a5d8-6f588a91f001', value: 'MALE', label: 'Male', color: 'blue', position: 0 },
    { id: 'f5112018-1cda-4ef8-a5d8-6f588a91f002', value: 'FEMALE', label: 'Female', color: 'pink', position: 1 },
    { id: 'f5112018-1cda-4ef8-a5d8-6f588a91f003', value: 'OTHER', label: 'Other', color: 'gray', position: 2 },
  ]
});
