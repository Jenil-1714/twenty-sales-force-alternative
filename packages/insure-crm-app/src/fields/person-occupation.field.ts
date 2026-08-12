import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '70c10e87-7a97-4db9-88ef-79603e4df807',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'occupation',
  label: 'Occupation',
  description: 'Occupation',
  icon: 'IconBriefcase',
});
