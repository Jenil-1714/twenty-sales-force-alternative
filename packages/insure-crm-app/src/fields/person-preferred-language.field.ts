import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'preferredLanguage',
  label: 'Preferred Language',
  description: 'Preferred Language',
  icon: 'IconLanguage',
  options: [
    { id: '1', value: 'English', label: 'English', color: 'blue', position: 0 },
    { id: '2', value: 'Hindi', label: 'Hindi', color: 'orange', position: 1 },
    { id: '3', value: 'Tamil', label: 'Tamil', color: 'green', position: 2 },
    { id: '4', value: 'Telugu', label: 'Telugu', color: 'purple', position: 3 },
    { id: '5', value: 'Marathi', label: 'Marathi', color: 'sky', position: 4 },
    { id: '6', value: 'Bengali', label: 'Bengali', color: 'yellow', position: 5 },
    { id: '7', value: 'Kannada', label: 'Kannada', color: 'pink', position: 6 },
    { id: '8', value: 'Gujarati', label: 'Gujarati', color: 'gray', position: 7 },
    { id: '9', value: 'Malayalam', label: 'Malayalam', color: 'turquoise', position: 8 },
  ]
});
