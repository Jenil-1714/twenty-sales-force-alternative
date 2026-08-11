import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6',
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
