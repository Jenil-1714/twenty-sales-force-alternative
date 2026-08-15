import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'e4f5a6b7-c8d9-4e0f-a1b2-c3d4e5f6a7b8',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'dpdpConsentStatus',
  label: 'DPDP Consent Status',
  description: 'DPDP Consent Status',
  icon: 'IconShieldLock',
  options: [
    { id: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d', value: 'NOT_REQUESTED', label: 'Not Requested', color: 'gray', position: 0 },
    { id: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e', value: 'CONSENTED', label: 'Consented', color: 'green', position: 1 },
    { id: '710fa0fa-f82f-49ee-be5a-465e415e3f19', value: 'WITHDRAWN', label: 'Withdrawn', color: 'red', position: 2 },
  ]
});

