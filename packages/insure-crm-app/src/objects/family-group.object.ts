import { defineObject, FieldType } from 'twenty-sdk/define';
import {
  FAMILY_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
  FAMILY_GROUP_GROUP_NAME_FIELD_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const FAMILY_GROUP_OBJECT_ID = FAMILY_GROUP_OBJECT_UNIVERSAL_IDENTIFIER;
export const FAMILY_GROUP_NAME_FIELD_ID = FAMILY_GROUP_GROUP_NAME_FIELD_UNIVERSAL_IDENTIFIER;


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
      universalIdentifier: '859e8510-3c43-4e32-ba00-8bba60786899',
      type: FieldType.RAW_JSON,
      name: 'members',
      label: 'Members',
      description: 'Members',
      icon: 'IconCode',
    },
    {
      universalIdentifier: 'b844482e-e2e3-4397-8230-b4d4df8b8636',
      type: FieldType.CURRENCY,
      name: 'totalAnnualIncome',
      label: 'Total Annual Income',
      description: 'Total Annual Income',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '5019baa4-1055-41ce-90dc-3f5dc43349be',
      type: FieldType.CURRENCY,
      name: 'totalCoverLife',
      label: 'Total Cover Life',
      description: 'Total Cover Life',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: 'edd14d2c-5001-480a-865e-0e9c7d3cad08',
      type: FieldType.CURRENCY,
      name: 'totalCoverHealth',
      label: 'Total Cover Health',
      description: 'Total Cover Health',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '4e7de2dc-d3d1-4571-8aa4-398858fa54a4',
      type: FieldType.CURRENCY,
      name: 'coverageGapLife',
      label: 'Coverage Gap Life',
      description: 'Coverage Gap Life',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '8d50f890-628f-4602-913f-6324f92efa9b',
      type: FieldType.CURRENCY,
      name: 'coverageGapHealth',
      label: 'Coverage Gap Health',
      description: 'Coverage Gap Health',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '90b988d5-eb56-48c5-b9ff-6171dae578a4',
      type: FieldType.CURRENCY,
      name: 'totalAnnualPremium',
      label: 'Total Annual Premium',
      description: 'Total Annual Premium',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: 'bf0a9570-1c57-41ed-aff4-7c55b06d246b',
      type: FieldType.RAW_JSON,
      name: 'crossSellOpportunities',
      label: 'Cross Sell Opportunities',
      description: 'Cross Sell Opportunities',
      icon: 'IconCode',
    },
    {
      universalIdentifier: 'e7b2e078-21e6-4458-8c19-7bcc35e39c42',
      type: FieldType.ADDRESS,
      name: 'primaryAddress',
      label: 'Address',
      description: 'Address',
      icon: 'IconMapPin',
    }
  ]
});
