import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '61cfc848-0140-40f9-98cf-fe48f687f044',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'maritalStatus',
  label: 'Marital Status',
  description: 'Marital Status',
  icon: 'IconUsers',
  options: [
    { id: '1', value: 'Single', label: 'Single', color: 'blue', position: 0 },
    { id: '2', value: 'Married', label: 'Married', color: 'green', position: 1 },
    { id: '3', value: 'Divorced', label: 'Divorced', color: 'orange', position: 2 },
    { id: '4', value: 'Widowed', label: 'Widowed', color: 'gray', position: 3 },
  ]
});
