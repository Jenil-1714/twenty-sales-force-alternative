import { defineObject, FieldType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: U.INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'insurer',
  namePlural: 'insurers',
  labelSingular: 'Insurer',
  labelPlural: 'Insurers',
  description: 'Insurance company records',
  icon: 'IconBuilding',
  labelIdentifierFieldMetadataUniversalIdentifier: U.INSURER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: U.INSURER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      description: 'Insurer Name',
      icon: 'IconBuilding',
      isLabelIdentifier: true
    },
    {
      universalIdentifier: U.INSURER_SHORT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'shortName',
      label: 'Short Name',
      description: 'Short Name',
      icon: 'IconTextCaption'
    },
    {
      universalIdentifier: U.INSURER_IRDAI_LICENSE_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'irdaiLicenseNumber',
      label: 'IRDAI License Number',
      description: 'IRDAI License Number',
      icon: 'IconId'
    },
    {
      universalIdentifier: U.INSURER_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'category',
      label: 'Category',
      description: 'Insurer Category',
      icon: 'IconCategory',
      options: [
        { id: U.INSURER_CATEGORY_OPTION_LIFE_ID, value: U.INSURER_CATEGORY_LIFE, label: 'Life', color: 'blue', position: 0 },
        { id: U.INSURER_CATEGORY_OPTION_GENERAL_ID, value: U.INSURER_CATEGORY_GENERAL, label: 'General', color: 'green', position: 1 },
        { id: U.INSURER_CATEGORY_OPTION_HEALTH_ID, value: U.INSURER_CATEGORY_HEALTH, label: 'Health', color: 'red', position: 2 },
        { id: U.INSURER_CATEGORY_OPTION_STANDALONE_HEALTH_ID, value: U.INSURER_CATEGORY_STANDALONE_HEALTH, label: 'Standalone Health', color: 'orange', position: 3 }
      ]
    },
    {
      universalIdentifier: U.INSURER_LOGO_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.FILES,
      name: 'logo',
      label: 'Logo',
      description: 'Insurer Logo',
      icon: 'IconPhoto'
    },
    {
      universalIdentifier: U.INSURER_CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.EMAILS,
      name: 'contactEmail',
      label: 'Contact Email',
      description: 'Contact Email',
      icon: 'IconMail'
    },
    {
      universalIdentifier: U.INSURER_CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.PHONES,
      name: 'contactPhone',
      label: 'Contact Phone',
      description: 'Contact Phone',
      icon: 'IconPhone'
    },
    {
      universalIdentifier: U.INSURER_PORTAL_URL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.LINKS,
      name: 'portalUrl',
      label: 'Portal URL',
      description: 'Portal URL',
      icon: 'IconLink'
    },
    {
      universalIdentifier: U.INSURER_COMMISSION_RATES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.RAW_JSON,
      name: 'commissionRates',
      label: 'Commission Rates',
      description: 'Commission Rates JSON',
      icon: 'IconJson'
    },
    {
      universalIdentifier: U.INSURER_CLAIM_SETTLEMENT_RATIO_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'claimSettlementRatio',
      label: 'Claim Settlement Ratio',
      description: 'Claim Settlement Ratio',
      icon: 'IconPercentage'
    },
    {
      universalIdentifier: U.INSURER_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.ADDRESS,
      name: 'address',
      label: 'Address',
      description: 'Address',
      icon: 'IconMapPin'
    },
    {
      universalIdentifier: U.INSURER_PAYMENT_CYCLE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'paymentCycle',
      label: 'Payment Cycle',
      description: 'Payment Cycle',
      icon: 'IconCalendarEvent',
      options: [
        { id: U.INSURER_PAYMENT_CYCLE_OPTION_MONTHLY_ID, value: U.INSURER_PAYMENT_CYCLE_MONTHLY, label: 'Monthly', color: 'blue', position: 0 },
        { id: U.INSURER_PAYMENT_CYCLE_OPTION_QUARTERLY_ID, value: U.INSURER_PAYMENT_CYCLE_QUARTERLY, label: 'Quarterly', color: 'green', position: 1 }
      ]
    }
  ]
});
