import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '2d287b1b-ef54-422f-8d19-32a42c2e5d42',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.DATE_TIME,
  name: 'customerSince',
  label: 'Customer Since',
  description: 'Customer Since',
  icon: 'IconCalendarEvent',
});
