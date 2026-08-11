import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4',
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
