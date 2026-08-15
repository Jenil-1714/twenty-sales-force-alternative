import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'fef11e13-6ee8-4223-8689-951b77efd308',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'smokerStatus',
  label: 'Smoker Status',
  description: 'Smoker Status',
  icon: 'IconFlame',
  options: [
    { id: 'fef11e13-6ee8-4223-8689-951b77efd001', value: 'SMOKER', label: 'Smoker', color: 'red', position: 0 },
    { id: 'fef11e13-6ee8-4223-8689-951b77efd002', value: 'NON_SMOKER', label: 'Non-Smoker', color: 'green', position: 1 },
    { id: 'fef11e13-6ee8-4223-8689-951b77efd003', value: 'FORMER', label: 'Former', color: 'orange', position: 2 },
  ]
});
