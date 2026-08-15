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
    { id: '61cfc848-0140-40f9-98cf-fe48f687f001', value: 'SINGLE', label: 'Single', color: 'blue', position: 0 },
    { id: '61cfc848-0140-40f9-98cf-fe48f687f002', value: 'MARRIED', label: 'Married', color: 'green', position: 1 },
    { id: '61cfc848-0140-40f9-98cf-fe48f687f003', value: 'DIVORCED', label: 'Divorced', color: 'orange', position: 2 },
    { id: '61cfc848-0140-40f9-98cf-fe48f687f004', value: 'WIDOWED', label: 'Widowed', color: 'gray', position: 3 },
  ]
});
