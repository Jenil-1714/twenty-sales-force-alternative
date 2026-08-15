import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '9fb4f354-5d80-434a-be0d-ae0a0aa85873',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.MULTI_SELECT,
  name: 'communicationPref',
  label: 'Communication Preference',
  description: 'Communication Preference',
  icon: 'IconMessageCircle',
  universalSettings: { maxNumberOfValues: 10 },
  options: [
    { id: '9fb4f354-5d80-434a-be0d-ae0a0aa85801', value: 'WHATSAPP', label: 'WhatsApp', color: 'green', position: 0 },
    { id: '9fb4f354-5d80-434a-be0d-ae0a0aa85802', value: 'SMS', label: 'SMS', color: 'blue', position: 1 },
    { id: '9fb4f354-5d80-434a-be0d-ae0a0aa85803', value: 'EMAIL', label: 'Email', color: 'orange', position: 2 },
    { id: '9fb4f354-5d80-434a-be0d-ae0a0aa85804', value: 'PHONE', label: 'Phone', color: 'purple', position: 3 },
  ]
});
