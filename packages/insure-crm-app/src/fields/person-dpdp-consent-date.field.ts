import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '818d9479-70e2-4eaa-8a83-5c09b3c0db2c',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.DATE_TIME,
  name: 'dpdpConsentDate',
  label: 'DPDP Consent Date',
  description: 'DPDP Consent Date',
  icon: 'IconCalendarEvent',
});
