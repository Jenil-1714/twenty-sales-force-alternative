import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.CURRENCY,
  name: 'annualIncome',
  label: 'Annual Income',
  description: 'Annual Income',
  icon: 'IconCurrencyDollar',
});
