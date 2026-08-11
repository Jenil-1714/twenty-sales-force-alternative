import { defineObject, FieldType } from 'twenty-sdk/define';

export const FAMILY_GROUP_OBJECT_ID = '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g2c';
export const FAMILY_GROUP_NAME_FIELD_ID = '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g2d';

export default defineObject({
  universalIdentifier: FAMILY_GROUP_OBJECT_ID,
  nameSingular: 'familyGroup',
  namePlural: 'familyGroups',
  labelSingular: 'Family Group',
  labelPlural: 'Family Groups',
  description: 'Family Group record',
  icon: 'IconUsers',
  labelIdentifierFieldMetadataUniversalIdentifier: FAMILY_GROUP_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: FAMILY_GROUP_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'familyName',
      label: 'Family Name',
      description: 'Family Name',
      icon: 'IconTextCaption',
      isLabelIdentifier: true,
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g2e',
      type: FieldType.RAW_JSON,
      name: 'members',
      label: 'Members',
      description: 'Members',
      icon: 'IconCode',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g2f',
      type: FieldType.CURRENCY,
      name: 'totalAnnualIncome',
      label: 'Total Annual Income',
      description: 'Total Annual Income',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g30',
      type: FieldType.CURRENCY,
      name: 'totalCoverLife',
      label: 'Total Cover Life',
      description: 'Total Cover Life',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g31',
      type: FieldType.CURRENCY,
      name: 'totalCoverHealth',
      label: 'Total Cover Health',
      description: 'Total Cover Health',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g32',
      type: FieldType.CURRENCY,
      name: 'coverageGapLife',
      label: 'Coverage Gap Life',
      description: 'Coverage Gap Life',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g33',
      type: FieldType.CURRENCY,
      name: 'coverageGapHealth',
      label: 'Coverage Gap Health',
      description: 'Coverage Gap Health',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g34',
      type: FieldType.CURRENCY,
      name: 'totalAnnualPremium',
      label: 'Total Annual Premium',
      description: 'Total Annual Premium',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g35',
      type: FieldType.RAW_JSON,
      name: 'crossSellOpportunities',
      label: 'Cross Sell Opportunities',
      description: 'Cross Sell Opportunities',
      icon: 'IconCode',
    },
    {
      universalIdentifier: '6c9e3d7a-4f0b-5g1c-ad3e-9f1c5b4d3g36',
      type: FieldType.ADDRESS,
      name: 'address',
      label: 'Address',
      description: 'Address',
      icon: 'IconMapPin',
    }
  ]
});
