import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.DATE_TIME,
  name: 'dateOfBirth',
  label: 'Date of Birth',
  description: 'Date of Birth',
  icon: 'IconCalendarEvent',
});
