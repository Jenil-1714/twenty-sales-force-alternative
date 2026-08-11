import { defineObject, FieldType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: U.INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'insuranceProduct',
  namePlural: 'insuranceProducts',
  labelSingular: 'Insurance Product',
  labelPlural: 'Insurance Products',
  description: 'Insurance products',
  icon: 'IconBox',
  labelIdentifierFieldMetadataUniversalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'productName', label: 'Product Name', description: 'Product Name', icon: 'IconTextCaption', isLabelIdentifier: true },
    { universalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_CODE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'productCode', label: 'Product Code', description: 'Product Code', icon: 'IconCode' },
    {
      universalIdentifier: U.INSURANCE_PRODUCT_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'category',
      label: 'Category',
      description: 'Category',
      icon: 'IconCategory',
      options: [
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_LIFE_ID, value: U.INSURANCE_PRODUCT_CATEGORY_LIFE, label: 'Life', color: 'blue', position: 0 },
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_HEALTH_ID, value: U.INSURANCE_PRODUCT_CATEGORY_HEALTH, label: 'Health', color: 'green', position: 1 },
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_MOTOR_ID, value: U.INSURANCE_PRODUCT_CATEGORY_MOTOR, label: 'Motor', color: 'red', position: 2 },
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_FIRE_ID, value: U.INSURANCE_PRODUCT_CATEGORY_FIRE, label: 'Fire', color: 'orange', position: 3 },
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_MARINE_ID, value: U.INSURANCE_PRODUCT_CATEGORY_MARINE, label: 'Marine', color: 'purple', position: 4 },
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_TRAVEL_ID, value: U.INSURANCE_PRODUCT_CATEGORY_TRAVEL, label: 'Travel', color: 'sky', position: 5 },
        { id: U.INSURANCE_PRODUCT_CATEGORY_OPTION_PA_ID, value: U.INSURANCE_PRODUCT_CATEGORY_PA, label: 'PA', color: 'gray', position: 6 }
      ]
    },
    {
      universalIdentifier: U.INSURANCE_PRODUCT_SUB_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'subCategory',
      label: 'Sub Category',
      description: 'Sub Category',
      icon: 'IconCategory2',
      options: [
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_TERM_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_TERM, label: 'Term', color: 'blue', position: 0 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_ENDOWMENT_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_ENDOWMENT, label: 'Endowment', color: 'green', position: 1 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_ULIP_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_ULIP, label: 'ULIP', color: 'red', position: 2 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_MEDICLAIM_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_MEDICLAIM, label: 'Mediclaim', color: 'orange', position: 3 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_TOPUP_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_TOPUP, label: 'TopUp', color: 'purple', position: 4 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_CRITICAL_ILLNESS_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_CRITICAL_ILLNESS, label: 'Critical Illness', color: 'sky', position: 5 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_COMPREHENSIVE_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_COMPREHENSIVE, label: 'Comprehensive', color: 'pink', position: 6 },
        { id: U.INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_THIRD_PARTY_ID, value: U.INSURANCE_PRODUCT_SUB_CATEGORY_THIRD_PARTY, label: 'Third Party', color: 'gray', position: 7 }
      ]
    },
    { universalIdentifier: U.INSURANCE_PRODUCT_COMMISSION_FIRST_YEAR_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'commissionFirstYear', label: 'Commission First Year', description: 'Commission First Year', icon: 'IconPercentage' },
    { universalIdentifier: U.INSURANCE_PRODUCT_COMMISSION_RENEWAL_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'commissionRenewal', label: 'Commission Renewal', description: 'Commission Renewal', icon: 'IconPercentage' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MIN_ENTRY_AGE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'minEntryAge', label: 'Min Entry Age', description: 'Min Entry Age', icon: 'IconUser' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MAX_ENTRY_AGE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'maxEntryAge', label: 'Max Entry Age', description: 'Max Entry Age', icon: 'IconUserPlus' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MIN_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'minSumAssured', label: 'Min Sum Assured', description: 'Min Sum Assured', icon: 'IconCoin' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MAX_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'maxSumAssured', label: 'Max Sum Assured', description: 'Max Sum Assured', icon: 'IconCoin' },
    { universalIdentifier: U.INSURANCE_PRODUCT_FEATURES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RICH_TEXT, name: 'features', label: 'Features', description: 'Features', icon: 'IconListDetails' },
    { universalIdentifier: U.INSURANCE_PRODUCT_BROCHURE_URL_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.LINKS, name: 'brochureUrl', label: 'Brochure URL', description: 'Brochure URL', icon: 'IconLink' },
    { universalIdentifier: U.INSURANCE_PRODUCT_IS_ACTIVE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.BOOLEAN, name: 'isActive', label: 'Is Active', description: 'Is Active', icon: 'IconCheck', defaultValue: true }
  ]
});
