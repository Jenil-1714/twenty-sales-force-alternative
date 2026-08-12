import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'aef41ea3-36a6-4db9-828f-5c51e06f27d6',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.DATE_TIME,
  name: 'dateOfBirth',
  label: 'Date of Birth',
  description: 'Date of Birth',
  icon: 'IconCalendarEvent',
});
