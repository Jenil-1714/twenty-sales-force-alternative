import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '862c3ec3-3a08-4969-8c14-4a4d6c60b964',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'pinCode',
  label: 'PIN Code',
  description: 'PIN Code',
  icon: 'IconMapPin',
});
