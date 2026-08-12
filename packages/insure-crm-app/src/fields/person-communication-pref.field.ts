import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '9fb4f354-5d80-434a-be0d-ae0a0aa85873',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.MULTI_SELECT,
  name: 'communicationPref',
  label: 'Communication Preference',
  description: 'Communication Preference',
  icon: 'IconMessageCircle',
  options: [
    { id: '1', value: 'WhatsApp', label: 'WhatsApp', color: 'green', position: 0 },
    { id: '2', value: 'SMS', label: 'SMS', color: 'blue', position: 1 },
    { id: '3', value: 'Email', label: 'Email', color: 'orange', position: 2 },
    { id: '4', value: 'Phone', label: 'Phone', color: 'purple', position: 3 },
  ]
});
