import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'e47b5b87-e846-4c7c-b12c-ad49a2345f97',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'preferredLanguage',
  label: 'Preferred Language',
  description: 'Preferred Language',
  icon: 'IconLanguage',
  options: [
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f01', value: 'ENGLISH', label: 'English', color: 'blue', position: 0 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f02', value: 'HINDI', label: 'Hindi', color: 'orange', position: 1 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f03', value: 'TAMIL', label: 'Tamil', color: 'green', position: 2 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f04', value: 'TELUGU', label: 'Telugu', color: 'purple', position: 3 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f05', value: 'MARATHI', label: 'Marathi', color: 'sky', position: 4 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f06', value: 'BENGALI', label: 'Bengali', color: 'yellow', position: 5 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f07', value: 'KANNADA', label: 'Kannada', color: 'pink', position: 6 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f08', value: 'GUJARATI', label: 'Gujarati', color: 'gray', position: 7 },
    { id: 'e47b5b87-e846-4c7c-b12c-ad49a2345f09', value: 'MALAYALAM', label: 'Malayalam', color: 'turquoise', position: 8 },
  ]
});
