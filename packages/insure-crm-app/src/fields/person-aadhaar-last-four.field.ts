import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'b599f384-726f-4b30-83cc-083c3e9bb9fb',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'aadhaarLastFour',
  label: 'Aadhaar Last Four',
  description: 'Aadhaar Last Four',
  icon: 'IconHash',
});
