import { defineField, FieldType, STANDARD_OBJECT } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'd3fe8545-de96-49c3-83ce-850541a23454',
  objectUniversalIdentifier: STANDARD_OBJECT.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'panNumber',
  label: 'PAN Number',
  description: 'PAN Number',
  icon: 'IconId',
});
