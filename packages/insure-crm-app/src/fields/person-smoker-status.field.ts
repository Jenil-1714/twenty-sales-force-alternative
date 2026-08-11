import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'smokerStatus',
  label: 'Smoker Status',
  description: 'Smoker Status',
  icon: 'IconFlame',
  options: [
    { id: '1', value: 'Smoker', label: 'Smoker', color: 'red', position: 0 },
    { id: '2', value: 'NonSmoker', label: 'Non-Smoker', color: 'green', position: 1 },
    { id: '3', value: 'Former', label: 'Former', color: 'orange', position: 2 },
  ]
});
