import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '8c57b5cf-ae3d-4de9-815e-233bbb229b85',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.CURRENCY,
  name: 'annualIncome',
  label: 'Annual Income',
  description: 'Annual Income',
  icon: 'IconCurrencyDollar',
});
