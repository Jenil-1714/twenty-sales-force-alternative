import { defineObject, FieldType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: U.POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'policy',
  namePlural: 'policies',
  labelSingular: 'Policy',
  labelPlural: 'Policies',
  description: 'Insurance Policies',
  icon: 'IconShieldCheck',
  labelIdentifierFieldMetadataUniversalIdentifier: U.POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: U.POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'policyNumber', label: 'Policy Number', description: 'Policy Number', icon: 'IconHash', isLabelIdentifier: true },
    {
      universalIdentifier: U.POLICY_POLICY_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'policyType',
      label: 'Policy Type',
      description: 'Policy Type',
      icon: 'IconShield',
      options: [
        { id: U.POLICY_POLICY_TYPE_OPTION_LIFE_ID, value: U.POLICY_POLICY_TYPE_LIFE, label: 'Life', color: 'blue', position: 0 },
        { id: U.POLICY_POLICY_TYPE_OPTION_HEALTH_ID, value: U.POLICY_POLICY_TYPE_HEALTH, label: 'Health', color: 'green', position: 1 },
        { id: U.POLICY_POLICY_TYPE_OPTION_MOTOR_ID, value: U.POLICY_POLICY_TYPE_MOTOR, label: 'Motor', color: 'red', position: 2 },
        { id: U.POLICY_POLICY_TYPE_OPTION_FIRE_ID, value: U.POLICY_POLICY_TYPE_FIRE, label: 'Fire', color: 'orange', position: 3 },
        { id: U.POLICY_POLICY_TYPE_OPTION_MARINE_ID, value: U.POLICY_POLICY_TYPE_MARINE, label: 'Marine', color: 'purple', position: 4 },
        { id: U.POLICY_POLICY_TYPE_OPTION_TRAVEL_ID, value: U.POLICY_POLICY_TYPE_TRAVEL, label: 'Travel', color: 'sky', position: 5 },
        { id: U.POLICY_POLICY_TYPE_OPTION_LIABILITY_ID, value: U.POLICY_POLICY_TYPE_LIABILITY, label: 'Liability', color: 'pink', position: 6 },
        { id: U.POLICY_POLICY_TYPE_OPTION_CROP_ID, value: U.POLICY_POLICY_TYPE_CROP, label: 'Crop', color: 'yellow', position: 7 }
      ]
    },
    {
      universalIdentifier: U.POLICY_POLICY_SUB_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'policySubType',
      label: 'Policy Sub Type',
      description: 'Policy Sub Type',
      icon: 'IconShield',
      options: [
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_TERM_ID, value: U.POLICY_POLICY_SUB_TYPE_TERM, label: 'Term', color: 'blue', position: 0 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_ENDOWMENT_ID, value: U.POLICY_POLICY_SUB_TYPE_ENDOWMENT, label: 'Endowment', color: 'green', position: 1 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_ULIP_ID, value: U.POLICY_POLICY_SUB_TYPE_ULIP, label: 'ULIP', color: 'red', position: 2 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_WHOLE_LIFE_ID, value: U.POLICY_POLICY_SUB_TYPE_WHOLE_LIFE, label: 'Whole Life', color: 'orange', position: 3 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_MEDICLAIM_ID, value: U.POLICY_POLICY_SUB_TYPE_MEDICLAIM, label: 'Mediclaim', color: 'purple', position: 4 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_TOPUP_ID, value: U.POLICY_POLICY_SUB_TYPE_TOPUP, label: 'TopUp', color: 'sky', position: 5 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_CRITICAL_ILLNESS_ID, value: U.POLICY_POLICY_SUB_TYPE_CRITICAL_ILLNESS, label: 'Critical Illness', color: 'pink', position: 6 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_COMPREHENSIVE_ID, value: U.POLICY_POLICY_SUB_TYPE_COMPREHENSIVE, label: 'Comprehensive', color: 'yellow', position: 7 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_THIRD_PARTY_ID, value: U.POLICY_POLICY_SUB_TYPE_THIRD_PARTY, label: 'Third Party', color: 'gray', position: 8 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_PA_ID, value: U.POLICY_POLICY_SUB_TYPE_PA, label: 'PA', color: 'turquoise', position: 9 }
      ]
    },
    {
      universalIdentifier: U.POLICY_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      description: 'Policy Status',
      icon: 'IconActivity',
      defaultValue: "'PROPOSAL'",
      options: [
        { id: U.POLICY_STATUS_OPTION_PROPOSAL_ID, value: U.POLICY_STATUS_PROPOSAL, label: 'Proposal', color: 'blue', position: 0 },
        { id: U.POLICY_STATUS_OPTION_PENDING_ISSUANCE_ID, value: U.POLICY_STATUS_PENDING_ISSUANCE, label: 'Pending Issuance', color: 'orange', position: 1 },
        { id: U.POLICY_STATUS_OPTION_ACTIVE_ID, value: U.POLICY_STATUS_ACTIVE, label: 'Active', color: 'green', position: 2 },
        { id: U.POLICY_STATUS_OPTION_PREMIUM_DUE_ID, value: U.POLICY_STATUS_PREMIUM_DUE, label: 'Premium Due', color: 'yellow', position: 3 },
        { id: U.POLICY_STATUS_OPTION_LAPSED_ID, value: U.POLICY_STATUS_LAPSED, label: 'Lapsed', color: 'red', position: 4 },
        { id: U.POLICY_STATUS_OPTION_REVIVAL_PENDING_ID, value: U.POLICY_STATUS_REVIVAL_PENDING, label: 'Revival Pending', color: 'purple', position: 5 },
        { id: U.POLICY_STATUS_OPTION_PAID_UP_ID, value: U.POLICY_STATUS_PAID_UP, label: 'Paid Up', color: 'sky', position: 6 },
        { id: U.POLICY_STATUS_OPTION_SURRENDERED_ID, value: U.POLICY_STATUS_SURRENDERED, label: 'Surrendered', color: 'gray', position: 7 },
        { id: U.POLICY_STATUS_OPTION_MATURED_ID, value: U.POLICY_STATUS_MATURED, label: 'Matured', color: 'green', position: 8 },
        { id: U.POLICY_STATUS_OPTION_CLAIMED_ID, value: U.POLICY_STATUS_CLAIMED, label: 'Claimed', color: 'pink', position: 9 },
        { id: U.POLICY_STATUS_OPTION_CANCELLED_ID, value: U.POLICY_STATUS_CANCELLED, label: 'Cancelled', color: 'gray', position: 10 }
      ]
    },
    { universalIdentifier: U.POLICY_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'sumAssured', label: 'Sum Assured', description: 'Sum Assured', icon: 'IconCurrencyDollar' },
    { universalIdentifier: U.POLICY_PREMIUM_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'premium', label: 'Premium', description: 'Premium', icon: 'IconCurrencyDollar' },
    {
      universalIdentifier: U.POLICY_PREMIUM_FREQUENCY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'premiumFrequency',
      label: 'Premium Frequency',
      description: 'Premium Frequency',
      icon: 'IconCalendarEvent',
      options: [
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_MONTHLY_ID, value: U.POLICY_PREMIUM_FREQUENCY_MONTHLY, label: 'Monthly', color: 'blue', position: 0 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_QUARTERLY_ID, value: U.POLICY_PREMIUM_FREQUENCY_QUARTERLY, label: 'Quarterly', color: 'green', position: 1 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_HALF_YEARLY_ID, value: U.POLICY_PREMIUM_FREQUENCY_HALF_YEARLY, label: 'Half Yearly', color: 'orange', position: 2 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_ANNUAL_ID, value: U.POLICY_PREMIUM_FREQUENCY_ANNUAL, label: 'Annual', color: 'purple', position: 3 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_SINGLE_ID, value: U.POLICY_PREMIUM_FREQUENCY_SINGLE, label: 'Single', color: 'sky', position: 4 }
      ]
    },
    { universalIdentifier: U.POLICY_START_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'startDate', label: 'Start Date', description: 'Start Date', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_END_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'endDate', label: 'End Date', description: 'End Date', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_MATURITY_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'maturityDate', label: 'Maturity Date', description: 'Maturity Date', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_NEXT_PREMIUM_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'nextPremiumDueDate', label: 'Next Premium Due Date', description: 'Next Premium Due Date', icon: 'IconCalendarEvent' },
    { universalIdentifier: U.POLICY_NEXT_RENEWAL_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'nextRenewalDate', label: 'Next Renewal Date', description: 'Next Renewal Date', icon: 'IconCalendarEvent' },
    { universalIdentifier: U.POLICY_POLICY_TERM_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'policyTerm', label: 'Policy Term', description: 'Policy Term', icon: 'IconClock' },
    { universalIdentifier: U.POLICY_PREMIUM_PAYING_TERM_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'premiumPayingTerm', label: 'Premium Paying Term', description: 'Premium Paying Term', icon: 'IconClock' },
    { universalIdentifier: U.POLICY_NOMINEES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'nominees', label: 'Nominees', description: 'Nominees JSON', icon: 'IconUsers' },
    { universalIdentifier: U.POLICY_RIDERS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'riders', label: 'Riders', description: 'Riders JSON', icon: 'IconPlus' },
    {
      universalIdentifier: U.POLICY_SOURCE_CHANNEL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'sourceChannel',
      label: 'Source Channel',
      description: 'Source Channel',
      icon: 'IconNetwork',
      options: [
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_DIRECT_ID, value: U.POLICY_SOURCE_CHANNEL_DIRECT, label: 'Direct', color: 'blue', position: 0 },
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_REFERRAL_ID, value: U.POLICY_SOURCE_CHANNEL_REFERRAL, label: 'Referral', color: 'green', position: 1 },
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_ONLINE_ID, value: U.POLICY_SOURCE_CHANNEL_ONLINE, label: 'Online', color: 'red', position: 2 },
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_WALKIN_ID, value: U.POLICY_SOURCE_CHANNEL_WALKIN, label: 'WalkIn', color: 'orange', position: 3 },
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_POSP_ID, value: U.POLICY_SOURCE_CHANNEL_POSP, label: 'POSP', color: 'purple', position: 4 },
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_BANCASSURANCE_ID, value: U.POLICY_SOURCE_CHANNEL_BANCASSURANCE, label: 'Bancassurance', color: 'sky', position: 5 },
        { id: U.POLICY_SOURCE_CHANNEL_OPTION_DSA_ID, value: U.POLICY_SOURCE_CHANNEL_DSA, label: 'DSA', color: 'gray', position: 6 }
      ]
    },
    { universalIdentifier: U.POLICY_COMMISSION_RATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'commissionRate', label: 'Commission Rate', description: 'Commission Rate', icon: 'IconPercentage' },
    {
      universalIdentifier: U.POLICY_PAYMENT_MODE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'paymentMode',
      label: 'Payment Mode',
      description: 'Payment Mode',
      icon: 'IconCreditCard',
      options: [
        { id: U.POLICY_PAYMENT_MODE_OPTION_ONLINE_ID, value: U.POLICY_PAYMENT_MODE_ONLINE, label: 'Online', color: 'blue', position: 0 },
        { id: U.POLICY_PAYMENT_MODE_OPTION_OFFLINE_ID, value: U.POLICY_PAYMENT_MODE_OFFLINE, label: 'Offline', color: 'gray', position: 1 },
        { id: U.POLICY_PAYMENT_MODE_OPTION_UPI_ID, value: U.POLICY_PAYMENT_MODE_UPI, label: 'UPI', color: 'green', position: 2 },
        { id: U.POLICY_PAYMENT_MODE_OPTION_AUTODEBIT_ID, value: U.POLICY_PAYMENT_MODE_AUTODEBIT, label: 'AutoDebit', color: 'orange', position: 3 },
        { id: U.POLICY_PAYMENT_MODE_OPTION_NACH_ID, value: U.POLICY_PAYMENT_MODE_NACH, label: 'NACH', color: 'purple', position: 4 }
      ]
    },
    { universalIdentifier: U.POLICY_PROPOSAL_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'proposalDate', label: 'Proposal Date', description: 'Proposal Date', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_LOGIN_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'loginNumber', label: 'Login Number', description: 'Login Number', icon: 'IconHash' },
    { universalIdentifier: U.POLICY_VEHICLE_DETAILS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'vehicleDetails', label: 'Vehicle Details', description: 'Vehicle Details JSON', icon: 'IconCar' },
    { universalIdentifier: U.POLICY_HEALTH_DETAILS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'healthDetails', label: 'Health Details', description: 'Health Details JSON', icon: 'IconHeartbeat' },
    { universalIdentifier: U.POLICY_DOCUMENTS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.FILES, name: 'documents', label: 'Documents', description: 'Documents', icon: 'IconFiles', universalSettings: { maxNumberOfValues: 10 } },
    {
      universalIdentifier: U.POLICY_PRIORITY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'priority',
      label: 'Priority',
      description: 'Priority',
      icon: 'IconFlag',
      defaultValue: "'MEDIUM'",
      options: [
        { id: U.POLICY_PRIORITY_OPTION_HIGH_ID, value: U.POLICY_PRIORITY_HIGH, label: 'High', color: 'red', position: 0 },
        { id: U.POLICY_PRIORITY_OPTION_MEDIUM_ID, value: U.POLICY_PRIORITY_MEDIUM, label: 'Medium', color: 'orange', position: 1 },
        { id: U.POLICY_PRIORITY_OPTION_LOW_ID, value: U.POLICY_PRIORITY_LOW, label: 'Low', color: 'green', position: 2 }
      ]
    }
  ]
});
