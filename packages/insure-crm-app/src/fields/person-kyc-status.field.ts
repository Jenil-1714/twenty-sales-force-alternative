import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '7f3423b2-60e8-4cef-89f7-9fe457f64f09',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'kycStatus',
  label: 'KYC Status',
  description: 'KYC Status',
  icon: 'IconShieldCheck',
  options: [
    { id: '1', value: 'Pending', label: 'Pending', color: 'gray', position: 0 },
    { id: '2', value: 'Verified', label: 'Verified', color: 'green', position: 1 },
    { id: '3', value: 'Expired', label: 'Expired', color: 'red', position: 2 },
  ]
});
