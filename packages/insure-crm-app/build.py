import os, uuid, re

base_dir = "/Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/packages/insure-crm-app"
os.makedirs(os.path.join(base_dir, "src/constants"), exist_ok=True)
os.makedirs(os.path.join(base_dir, "src/objects"), exist_ok=True)

uuids = {}
def get_u(match):
    name = match.group(1)
    if name not in uuids:
        uuids[name] = str(uuid.uuid4())
    return uuids[name]

def p(content):
    return re.sub(r'@UUID:([A-Z0-9_]+)@', get_u, content)

def w(path, content):
    with open(os.path.join(base_dir, path), 'w') as f:
        f.write(p(content))

# --- FILES ---
pkg = """{
  "name": "@insurecrm/insure-crm-app",
  "version": "0.1.0",
  "description": "Insurance Growth OS CRM application.",
  "license": "AGPL-3.0",
  "engines": { "node": "^24.5.0", "npm": "please-use-yarn", "yarn": ">=4.0.2" },
  "keywords": ["twenty-app"],
  "packageManager": "yarn@4.13.0",
  "scripts": { "twenty": "twenty", "lint": "eslint src/", "test": "vitest run" },
  "devDependencies": {
    "@types/node": "^24.7.2",
    "@types/react": "^18.2.0",
    "react": "^18.2.0",
    "twenty-client-sdk": "^2.16.0",
    "twenty-sdk": "^2.16.0",
    "typescript": "^5.9.3",
    "vitest": "^4.0.0"
  }
}"""
w("package.json", pkg)

tsc = """{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "paths": { "src/*": ["./src/*"] },
    "outDir": "dist",
    "declaration": true
  },
  "include": ["src"]
}"""
w("tsconfig.json", tsc)

constants = """// UUID Constants
export const APPLICATION_UNIVERSAL_IDENTIFIER = '@UUID:APP@';
export const DEFAULT_ROLE_UNIVERSAL_IDENTIFIER = '@UUID:ROLE@';

export const INSURER_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_OBJ@';
export const INSURER_NAME_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_NAME@';
export const INSURER_SHORT_NAME_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_SHORT@';
export const INSURER_IRDAI_LICENSE_NUMBER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_LIC@';
export const INSURER_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_CAT@';
export const INSURER_LOGO_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_LOGO@';
export const INSURER_CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_EMAIL@';
export const INSURER_CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_PHONE@';
export const INSURER_PORTAL_URL_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_URL@';
export const INSURER_COMMISSION_RATES_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_COMM@';
export const INSURER_CLAIM_SETTLEMENT_RATIO_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_RATIO@';
export const INSURER_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_ADDR@';
export const INSURER_PAYMENT_CYCLE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:INSURER_PAY@';

export const INSURER_CATEGORY_OPTION_LIFE_ID = '@UUID:INS_CAT_L@';
export const INSURER_CATEGORY_OPTION_GENERAL_ID = '@UUID:INS_CAT_G@';
export const INSURER_CATEGORY_OPTION_HEALTH_ID = '@UUID:INS_CAT_H@';
export const INSURER_CATEGORY_OPTION_STANDALONE_HEALTH_ID = '@UUID:INS_CAT_S@';
export const INSURER_PAYMENT_CYCLE_OPTION_MONTHLY_ID = '@UUID:INS_PAY_M@';
export const INSURER_PAYMENT_CYCLE_OPTION_QUARTERLY_ID = '@UUID:INS_PAY_Q@';

export const INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:PROD_OBJ@';
export const INSURANCE_PRODUCT_PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_NAME@';
export const INSURANCE_PRODUCT_PRODUCT_CODE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_CODE@';
export const INSURANCE_PRODUCT_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_CAT@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_SUB@';
export const INSURANCE_PRODUCT_COMMISSION_FIRST_YEAR_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_C1@';
export const INSURANCE_PRODUCT_COMMISSION_RENEWAL_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_C2@';
export const INSURANCE_PRODUCT_MIN_ENTRY_AGE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_MINA@';
export const INSURANCE_PRODUCT_MAX_ENTRY_AGE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_MAXA@';
export const INSURANCE_PRODUCT_MIN_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_MINS@';
export const INSURANCE_PRODUCT_MAX_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_MAXS@';
export const INSURANCE_PRODUCT_FEATURES_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_FEAT@';
export const INSURANCE_PRODUCT_BROCHURE_URL_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_BRO@';
export const INSURANCE_PRODUCT_IS_ACTIVE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:PROD_ACT@';

export const INSURANCE_PRODUCT_CATEGORY_OPTION_LIFE_ID = '@UUID:PCAT_L@';
export const INSURANCE_PRODUCT_CATEGORY_OPTION_HEALTH_ID = '@UUID:PCAT_H@';
export const INSURANCE_PRODUCT_CATEGORY_OPTION_MOTOR_ID = '@UUID:PCAT_M@';
export const INSURANCE_PRODUCT_CATEGORY_OPTION_FIRE_ID = '@UUID:PCAT_F@';
export const INSURANCE_PRODUCT_CATEGORY_OPTION_MARINE_ID = '@UUID:PCAT_MA@';
export const INSURANCE_PRODUCT_CATEGORY_OPTION_TRAVEL_ID = '@UUID:PCAT_T@';
export const INSURANCE_PRODUCT_CATEGORY_OPTION_PA_ID = '@UUID:PCAT_P@';

export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_TERM_ID = '@UUID:PSUB_T@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_ENDOWMENT_ID = '@UUID:PSUB_E@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_ULIP_ID = '@UUID:PSUB_U@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_MEDICLAIM_ID = '@UUID:PSUB_M@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_TOPUP_ID = '@UUID:PSUB_TO@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_CRITICAL_ILLNESS_ID = '@UUID:PSUB_C@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_COMPREHENSIVE_ID = '@UUID:PSUB_CO@';
export const INSURANCE_PRODUCT_SUB_CATEGORY_OPTION_THIRD_PARTY_ID = '@UUID:PSUB_TP@';

export const POLICY_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:POL_OBJ@';
export const POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_NUM@';
export const POLICY_POLICY_TYPE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_TYP@';
export const POLICY_POLICY_SUB_TYPE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_SUB@';
export const POLICY_STATUS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_STA@';
export const POLICY_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_SUM@';
export const POLICY_PREMIUM_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_PRE@';
export const POLICY_PREMIUM_FREQUENCY_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_FRQ@';
export const POLICY_START_DATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_SDT@';
export const POLICY_END_DATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_EDT@';
export const POLICY_MATURITY_DATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_MDT@';
export const POLICY_NEXT_PREMIUM_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_NPD@';
export const POLICY_NEXT_RENEWAL_DATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_NRD@';
export const POLICY_POLICY_TERM_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_TRM@';
export const POLICY_PREMIUM_PAYING_TERM_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_PPT@';
export const POLICY_NOMINEES_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_NOM@';
export const POLICY_RIDERS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_RID@';
export const POLICY_SOURCE_CHANNEL_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_SRC@';
export const POLICY_COMMISSION_RATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_CMR@';
export const POLICY_PAYMENT_MODE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_PMT@';
export const POLICY_PROPOSAL_DATE_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_PRD@';
export const POLICY_LOGIN_NUMBER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_LGN@';
export const POLICY_VEHICLE_DETAILS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_VEH@';
export const POLICY_HEALTH_DETAILS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_HLT@';
export const POLICY_DOCUMENTS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_DOC@';
export const POLICY_PRIORITY_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:POL_PRI@';

export const POLICY_POLICY_TYPE_OPTION_LIFE_ID = '@UUID:PT_L@';
export const POLICY_POLICY_TYPE_OPTION_HEALTH_ID = '@UUID:PT_H@';
export const POLICY_POLICY_TYPE_OPTION_MOTOR_ID = '@UUID:PT_M@';
export const POLICY_POLICY_TYPE_OPTION_FIRE_ID = '@UUID:PT_F@';
export const POLICY_POLICY_TYPE_OPTION_MARINE_ID = '@UUID:PT_MA@';
export const POLICY_POLICY_TYPE_OPTION_TRAVEL_ID = '@UUID:PT_T@';
export const POLICY_POLICY_TYPE_OPTION_LIABILITY_ID = '@UUID:PT_LI@';
export const POLICY_POLICY_TYPE_OPTION_CROP_ID = '@UUID:PT_C@';

export const POLICY_POLICY_SUB_TYPE_OPTION_TERM_ID = '@UUID:PS_T@';
export const POLICY_POLICY_SUB_TYPE_OPTION_ENDOWMENT_ID = '@UUID:PS_E@';
export const POLICY_POLICY_SUB_TYPE_OPTION_ULIP_ID = '@UUID:PS_U@';
export const POLICY_POLICY_SUB_TYPE_OPTION_WHOLE_LIFE_ID = '@UUID:PS_W@';
export const POLICY_POLICY_SUB_TYPE_OPTION_MEDICLAIM_ID = '@UUID:PS_M@';
export const POLICY_POLICY_SUB_TYPE_OPTION_TOPUP_ID = '@UUID:PS_TO@';
export const POLICY_POLICY_SUB_TYPE_OPTION_CRITICAL_ILLNESS_ID = '@UUID:PS_CI@';
export const POLICY_POLICY_SUB_TYPE_OPTION_COMPREHENSIVE_ID = '@UUID:PS_CO@';
export const POLICY_POLICY_SUB_TYPE_OPTION_THIRD_PARTY_ID = '@UUID:PS_TP@';
export const POLICY_POLICY_SUB_TYPE_OPTION_PA_ID = '@UUID:PS_PA@';

export const POLICY_STATUS_OPTION_PROPOSAL_ID = '@UUID:PST_P@';
export const POLICY_STATUS_OPTION_PENDING_ISSUANCE_ID = '@UUID:PST_PI@';
export const POLICY_STATUS_OPTION_ACTIVE_ID = '@UUID:PST_A@';
export const POLICY_STATUS_OPTION_PREMIUM_DUE_ID = '@UUID:PST_PD@';
export const POLICY_STATUS_OPTION_LAPSED_ID = '@UUID:PST_L@';
export const POLICY_STATUS_OPTION_REVIVAL_PENDING_ID = '@UUID:PST_RP@';
export const POLICY_STATUS_OPTION_PAID_UP_ID = '@UUID:PST_PU@';
export const POLICY_STATUS_OPTION_SURRENDERED_ID = '@UUID:PST_S@';
export const POLICY_STATUS_OPTION_MATURED_ID = '@UUID:PST_M@';
export const POLICY_STATUS_OPTION_CLAIMED_ID = '@UUID:PST_C@';
export const POLICY_STATUS_OPTION_CANCELLED_ID = '@UUID:PST_CA@';

export const POLICY_PREMIUM_FREQUENCY_OPTION_MONTHLY_ID = '@UUID:PF_M@';
export const POLICY_PREMIUM_FREQUENCY_OPTION_QUARTERLY_ID = '@UUID:PF_Q@';
export const POLICY_PREMIUM_FREQUENCY_OPTION_HALF_YEARLY_ID = '@UUID:PF_H@';
export const POLICY_PREMIUM_FREQUENCY_OPTION_ANNUAL_ID = '@UUID:PF_A@';
export const POLICY_PREMIUM_FREQUENCY_OPTION_SINGLE_ID = '@UUID:PF_S@';

export const POLICY_SOURCE_CHANNEL_OPTION_DIRECT_ID = '@UUID:PSC_D@';
export const POLICY_SOURCE_CHANNEL_OPTION_REFERRAL_ID = '@UUID:PSC_R@';
export const POLICY_SOURCE_CHANNEL_OPTION_ONLINE_ID = '@UUID:PSC_O@';
export const POLICY_SOURCE_CHANNEL_OPTION_WALKIN_ID = '@UUID:PSC_W@';
export const POLICY_SOURCE_CHANNEL_OPTION_POSP_ID = '@UUID:PSC_P@';
export const POLICY_SOURCE_CHANNEL_OPTION_BANCASSURANCE_ID = '@UUID:PSC_B@';
export const POLICY_SOURCE_CHANNEL_OPTION_DSA_ID = '@UUID:PSC_DS@';

export const POLICY_PAYMENT_MODE_OPTION_ONLINE_ID = '@UUID:PPM_O@';
export const POLICY_PAYMENT_MODE_OPTION_OFFLINE_ID = '@UUID:PPM_OF@';
export const POLICY_PAYMENT_MODE_OPTION_UPI_ID = '@UUID:PPM_U@';
export const POLICY_PAYMENT_MODE_OPTION_AUTODEBIT_ID = '@UUID:PPM_A@';
export const POLICY_PAYMENT_MODE_OPTION_NACH_ID = '@UUID:PPM_N@';

export const POLICY_PRIORITY_OPTION_HIGH_ID = '@UUID:PP_H@';
export const POLICY_PRIORITY_OPTION_MEDIUM_ID = '@UUID:PP_M@';
export const POLICY_PRIORITY_OPTION_LOW_ID = '@UUID:PP_L@';

export const COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:COMM_OBJ@';
export const COMMISSION_COMMISSION_NUMBER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:COMM_NUM@';
export const COMMISSION_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:COMM_AMT@';

export const CLAIM_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:CLM_OBJ@';
export const CLAIM_CLAIM_NUMBER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:CLM_NUM@';
export const CLAIM_STATUS_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:CLM_STA@';

export const KYC_RECORD_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:KYC_OBJ@';
export const KYC_RECORD_DOCUMENT_NUMBER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:KYC_NUM@';

export const FAMILY_GROUP_OBJECT_UNIVERSAL_IDENTIFIER = '@UUID:FAM_OBJ@';
export const FAMILY_GROUP_GROUP_NAME_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:FAM_NAM@';

export const RELATION_POLICY_INSURER_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:REL_PI@';
export const RELATION_INSURER_POLICIES_FIELD_UNIVERSAL_IDENTIFIER = '@UUID:REL_IP@';

export const VIEW_POLICY_LIST_UNIVERSAL_IDENTIFIER = '@UUID:VW_POL@';
export const NAV_POLICIES_UNIVERSAL_IDENTIFIER = '@UUID:NAV_POL@';
export const CMD_CREATE_POLICY_UNIVERSAL_IDENTIFIER = '@UUID:CMD_POL@';
export const AGENT_ASSISTANT_UNIVERSAL_IDENTIFIER = '@UUID:AGT_AST@';
export const SKILL_CALC_PREMIUM_UNIVERSAL_IDENTIFIER = '@UUID:SKL_PRM@';

// String Constants
export const INSURER_CATEGORY_LIFE = 'LIFE';
export const INSURER_CATEGORY_GENERAL = 'GENERAL';
export const INSURER_CATEGORY_HEALTH = 'HEALTH';
export const INSURER_CATEGORY_STANDALONE_HEALTH = 'STANDALONE_HEALTH';
export const INSURER_PAYMENT_CYCLE_MONTHLY = 'MONTHLY';
export const INSURER_PAYMENT_CYCLE_QUARTERLY = 'QUARTERLY';

export const INSURANCE_PRODUCT_CATEGORY_LIFE = 'LIFE';
export const INSURANCE_PRODUCT_CATEGORY_HEALTH = 'HEALTH';
export const INSURANCE_PRODUCT_CATEGORY_MOTOR = 'MOTOR';
export const INSURANCE_PRODUCT_CATEGORY_FIRE = 'FIRE';
export const INSURANCE_PRODUCT_CATEGORY_MARINE = 'MARINE';
export const INSURANCE_PRODUCT_CATEGORY_TRAVEL = 'TRAVEL';
export const INSURANCE_PRODUCT_CATEGORY_PA = 'PA';

export const INSURANCE_PRODUCT_SUB_CATEGORY_TERM = 'TERM';
export const INSURANCE_PRODUCT_SUB_CATEGORY_ENDOWMENT = 'ENDOWMENT';
export const INSURANCE_PRODUCT_SUB_CATEGORY_ULIP = 'ULIP';
export const INSURANCE_PRODUCT_SUB_CATEGORY_MEDICLAIM = 'MEDICLAIM';
export const INSURANCE_PRODUCT_SUB_CATEGORY_TOPUP = 'TOPUP';
export const INSURANCE_PRODUCT_SUB_CATEGORY_CRITICAL_ILLNESS = 'CRITICAL_ILLNESS';
export const INSURANCE_PRODUCT_SUB_CATEGORY_COMPREHENSIVE = 'COMPREHENSIVE';
export const INSURANCE_PRODUCT_SUB_CATEGORY_THIRD_PARTY = 'THIRD_PARTY';

export const POLICY_POLICY_TYPE_LIFE = 'LIFE';
export const POLICY_POLICY_TYPE_HEALTH = 'HEALTH';
export const POLICY_POLICY_TYPE_MOTOR = 'MOTOR';
export const POLICY_POLICY_TYPE_FIRE = 'FIRE';
export const POLICY_POLICY_TYPE_MARINE = 'MARINE';
export const POLICY_POLICY_TYPE_TRAVEL = 'TRAVEL';
export const POLICY_POLICY_TYPE_LIABILITY = 'LIABILITY';
export const POLICY_POLICY_TYPE_CROP = 'CROP';

export const POLICY_POLICY_SUB_TYPE_TERM = 'TERM';
export const POLICY_POLICY_SUB_TYPE_ENDOWMENT = 'ENDOWMENT';
export const POLICY_POLICY_SUB_TYPE_ULIP = 'ULIP';
export const POLICY_POLICY_SUB_TYPE_WHOLE_LIFE = 'WHOLE_LIFE';
export const POLICY_POLICY_SUB_TYPE_MEDICLAIM = 'MEDICLAIM';
export const POLICY_POLICY_SUB_TYPE_TOPUP = 'TOPUP';
export const POLICY_POLICY_SUB_TYPE_CRITICAL_ILLNESS = 'CRITICAL_ILLNESS';
export const POLICY_POLICY_SUB_TYPE_COMPREHENSIVE = 'COMPREHENSIVE';
export const POLICY_POLICY_SUB_TYPE_THIRD_PARTY = 'THIRD_PARTY';
export const POLICY_POLICY_SUB_TYPE_PA = 'PA';

export const POLICY_STATUS_PROPOSAL = 'PROPOSAL';
export const POLICY_STATUS_PENDING_ISSUANCE = 'PENDING_ISSUANCE';
export const POLICY_STATUS_ACTIVE = 'ACTIVE';
export const POLICY_STATUS_PREMIUM_DUE = 'PREMIUM_DUE';
export const POLICY_STATUS_LAPSED = 'LAPSED';
export const POLICY_STATUS_REVIVAL_PENDING = 'REVIVAL_PENDING';
export const POLICY_STATUS_PAID_UP = 'PAID_UP';
export const POLICY_STATUS_SURRENDERED = 'SURRENDERED';
export const POLICY_STATUS_MATURED = 'MATURED';
export const POLICY_STATUS_CLAIMED = 'CLAIMED';
export const POLICY_STATUS_CANCELLED = 'CANCELLED';

export const POLICY_PREMIUM_FREQUENCY_MONTHLY = 'MONTHLY';
export const POLICY_PREMIUM_FREQUENCY_QUARTERLY = 'QUARTERLY';
export const POLICY_PREMIUM_FREQUENCY_HALF_YEARLY = 'HALF_YEARLY';
export const POLICY_PREMIUM_FREQUENCY_ANNUAL = 'ANNUAL';
export const POLICY_PREMIUM_FREQUENCY_SINGLE = 'SINGLE';

export const POLICY_SOURCE_CHANNEL_DIRECT = 'DIRECT';
export const POLICY_SOURCE_CHANNEL_REFERRAL = 'REFERRAL';
export const POLICY_SOURCE_CHANNEL_ONLINE = 'ONLINE';
export const POLICY_SOURCE_CHANNEL_WALKIN = 'WALKIN';
export const POLICY_SOURCE_CHANNEL_POSP = 'POSP';
export const POLICY_SOURCE_CHANNEL_BANCASSURANCE = 'BANCASSURANCE';
export const POLICY_SOURCE_CHANNEL_DSA = 'DSA';

export const POLICY_PAYMENT_MODE_ONLINE = 'ONLINE';
export const POLICY_PAYMENT_MODE_OFFLINE = 'OFFLINE';
export const POLICY_PAYMENT_MODE_UPI = 'UPI';
export const POLICY_PAYMENT_MODE_AUTODEBIT = 'AUTODEBIT';
export const POLICY_PAYMENT_MODE_NACH = 'NACH';

export const POLICY_PRIORITY_HIGH = 'HIGH';
export const POLICY_PRIORITY_MEDIUM = 'MEDIUM';
export const POLICY_PRIORITY_LOW = 'LOW';
"""
w("src/constants/universal-identifiers.ts", constants)

app_config = """import { defineApplication } from 'twenty-sdk/define';
import { APPLICATION_UNIVERSAL_IDENTIFIER, DEFAULT_ROLE_UNIVERSAL_IDENTIFIER } from './constants/universal-identifiers';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'InsureCRM',
  description: 'Insurance Growth OS',
  defaultRoleUniversalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
  logo: 'public/logo.svg',
  author: 'InsureCRM',
  category: 'CRM',
});
"""
w("src/application-config.ts", app_config)

insurer = """import { defineObject, FieldType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: U.INSURER_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'insurer',
  namePlural: 'insurers',
  labelSingular: 'Insurer',
  labelPlural: 'Insurers',
  description: 'Insurance companies',
  icon: 'IconBuilding',
  labelIdentifierFieldMetadataUniversalIdentifier: U.INSURER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: U.INSURER_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'name', label: 'Name', description: 'Name', icon: 'IconAbc', isLabelIdentifier: true },
    { universalIdentifier: U.INSURER_SHORT_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'shortName', label: 'Short Name', description: 'Short Name', icon: 'IconAbc' },
    { universalIdentifier: U.INSURER_IRDAI_LICENSE_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'irdaiLicenseNumber', label: 'IRDAI License Number', description: 'License', icon: 'IconId' },
    {
      universalIdentifier: U.INSURER_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'category',
      label: 'Category',
      description: 'Category',
      icon: 'IconCategory',
      options: [
        { id: U.INSURER_CATEGORY_OPTION_LIFE_ID, value: U.INSURER_CATEGORY_LIFE, label: 'Life', color: 'blue', position: 0 },
        { id: U.INSURER_CATEGORY_OPTION_GENERAL_ID, value: U.INSURER_CATEGORY_GENERAL, label: 'General', color: 'green', position: 1 },
        { id: U.INSURER_CATEGORY_OPTION_HEALTH_ID, value: U.INSURER_CATEGORY_HEALTH, label: 'Health', color: 'red', position: 2 },
        { id: U.INSURER_CATEGORY_OPTION_STANDALONE_HEALTH_ID, value: U.INSURER_CATEGORY_STANDALONE_HEALTH, label: 'Standalone Health', color: 'orange', position: 3 }
      ]
    },
    { universalIdentifier: U.INSURER_LOGO_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.FILES, name: 'logo', label: 'Logo', description: 'Logo', icon: 'IconPhoto' },
    { universalIdentifier: U.INSURER_CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.EMAILS, name: 'contactEmail', label: 'Contact Email', description: 'Email', icon: 'IconMail' },
    { universalIdentifier: U.INSURER_CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.PHONES, name: 'contactPhone', label: 'Contact Phone', description: 'Phone', icon: 'IconPhone' },
    { universalIdentifier: U.INSURER_PORTAL_URL_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.LINKS, name: 'portalUrl', label: 'Portal URL', description: 'Portal URL', icon: 'IconLink' },
    { universalIdentifier: U.INSURER_COMMISSION_RATES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'commissionRates', label: 'Commission Rates', description: 'Rates', icon: 'IconJson' },
    { universalIdentifier: U.INSURER_CLAIM_SETTLEMENT_RATIO_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'claimSettlementRatio', label: 'Claim Settlement Ratio', description: 'CSR', icon: 'IconPercentage' },
    { universalIdentifier: U.INSURER_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.ADDRESS, name: 'address', label: 'Address', description: 'Address', icon: 'IconMapPin' },
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
"""
w("src/objects/insurer.object.ts", insurer)

prod = """import { defineObject, FieldType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: U.INSURANCE_PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'insuranceProduct',
  namePlural: 'insuranceProducts',
  labelSingular: 'Insurance Product',
  labelPlural: 'Insurance Products',
  description: 'Products',
  icon: 'IconBox',
  labelIdentifierFieldMetadataUniversalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'productName', label: 'Product Name', description: 'Name', icon: 'IconAbc', isLabelIdentifier: true },
    { universalIdentifier: U.INSURANCE_PRODUCT_PRODUCT_CODE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'productCode', label: 'Product Code', description: 'Code', icon: 'IconCode' },
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
    { universalIdentifier: U.INSURANCE_PRODUCT_COMMISSION_FIRST_YEAR_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'commissionFirstYear', label: 'Commission First Year', description: 'First Year %', icon: 'IconPercentage' },
    { universalIdentifier: U.INSURANCE_PRODUCT_COMMISSION_RENEWAL_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'commissionRenewal', label: 'Commission Renewal', description: 'Renewal %', icon: 'IconPercentage' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MIN_ENTRY_AGE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'minEntryAge', label: 'Min Entry Age', description: 'Min Age', icon: 'IconUser' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MAX_ENTRY_AGE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'maxEntryAge', label: 'Max Entry Age', description: 'Max Age', icon: 'IconUser' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MIN_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'minSumAssured', label: 'Min Sum Assured', description: 'Min SA', icon: 'IconCoin' },
    { universalIdentifier: U.INSURANCE_PRODUCT_MAX_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'maxSumAssured', label: 'Max Sum Assured', description: 'Max SA', icon: 'IconCoin' },
    { universalIdentifier: U.INSURANCE_PRODUCT_FEATURES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RICH_TEXT, name: 'features', label: 'Features', description: 'Features', icon: 'IconList' },
    { universalIdentifier: U.INSURANCE_PRODUCT_BROCHURE_URL_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.LINKS, name: 'brochureUrl', label: 'Brochure URL', description: 'Brochure', icon: 'IconLink' },
    { universalIdentifier: U.INSURANCE_PRODUCT_IS_ACTIVE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.BOOLEAN, name: 'isActive', label: 'Is Active', description: 'Active', icon: 'IconCheck', defaultValue: true }
  ]
});
"""
w("src/objects/insurance-product.object.ts", prod)

pol = """import { defineObject, FieldType } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: U.POLICY_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'policy',
  namePlural: 'policies',
  labelSingular: 'Policy',
  labelPlural: 'Policies',
  description: 'Policies',
  icon: 'IconShieldCheck',
  labelIdentifierFieldMetadataUniversalIdentifier: U.POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: U.POLICY_POLICY_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'policyNumber', label: 'Policy Number', description: 'Number', icon: 'IconHash', isLabelIdentifier: true },
    {
      universalIdentifier: U.POLICY_POLICY_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'policyType',
      label: 'Policy Type',
      description: 'Type',
      icon: 'IconShield',
      options: [
        { id: U.POLICY_POLICY_TYPE_OPTION_LIFE_ID, value: U.POLICY_POLICY_TYPE_LIFE, label: 'Life', color: 'blue', position: 0 },
        { id: U.POLICY_POLICY_TYPE_OPTION_HEALTH_ID, value: U.POLICY_POLICY_TYPE_HEALTH, label: 'Health', color: 'green', position: 1 },
        { id: U.POLICY_POLICY_TYPE_OPTION_MOTOR_ID, value: U.POLICY_POLICY_TYPE_MOTOR, label: 'Motor', color: 'red', position: 2 },
        { id: U.POLICY_POLICY_TYPE_OPTION_FIRE_ID, value: U.POLICY_POLICY_TYPE_FIRE, label: 'Fire', color: 'orange', position: 3 },
        { id: U.POLICY_POLICY_TYPE_OPTION_MARINE_ID, value: U.POLICY_POLICY_TYPE_MARINE, label: 'Marine', color: 'purple', position: 4 },
        { id: U.POLICY_POLICY_TYPE_OPTION_TRAVEL_ID, value: U.POLICY_POLICY_TYPE_TRAVEL, label: 'Travel', color: 'sky', position: 5 },
        { id: U.POLICY_POLICY_TYPE_OPTION_LIABILITY_ID, value: U.POLICY_POLICY_TYPE_LIABILITY, label: 'Liability', color: 'pink', position: 6 },
        { id: U.POLICY_POLICY_TYPE_OPTION_CROP_ID, value: U.POLICY_POLICY_TYPE_CROP, label: 'Crop', color: 'gray', position: 7 }
      ]
    },
    {
      universalIdentifier: U.POLICY_POLICY_SUB_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'policySubType',
      label: 'Policy Sub Type',
      description: 'Sub Type',
      icon: 'IconShield',
      options: [
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_TERM_ID, value: U.POLICY_POLICY_SUB_TYPE_TERM, label: 'Term', color: 'blue', position: 0 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_ENDOWMENT_ID, value: U.POLICY_POLICY_SUB_TYPE_ENDOWMENT, label: 'Endowment', color: 'green', position: 1 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_ULIP_ID, value: U.POLICY_POLICY_SUB_TYPE_ULIP, label: 'ULIP', color: 'red', position: 2 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_WHOLE_LIFE_ID, value: U.POLICY_POLICY_SUB_TYPE_WHOLE_LIFE, label: 'Whole Life', color: 'orange', position: 3 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_MEDICLAIM_ID, value: U.POLICY_POLICY_SUB_TYPE_MEDICLAIM, label: 'Mediclaim', color: 'purple', position: 4 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_TOPUP_ID, value: U.POLICY_POLICY_SUB_TYPE_TOPUP, label: 'TopUp', color: 'sky', position: 5 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_CRITICAL_ILLNESS_ID, value: U.POLICY_POLICY_SUB_TYPE_CRITICAL_ILLNESS, label: 'Critical Illness', color: 'pink', position: 6 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_COMPREHENSIVE_ID, value: U.POLICY_POLICY_SUB_TYPE_COMPREHENSIVE, label: 'Comprehensive', color: 'gray', position: 7 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_THIRD_PARTY_ID, value: U.POLICY_POLICY_SUB_TYPE_THIRD_PARTY, label: 'Third Party', color: 'gray', position: 8 },
        { id: U.POLICY_POLICY_SUB_TYPE_OPTION_PA_ID, value: U.POLICY_POLICY_SUB_TYPE_PA, label: 'PA', color: 'gray', position: 9 }
      ]
    },
    {
      universalIdentifier: U.POLICY_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      description: 'Status',
      icon: 'IconActivity',
      defaultValue: U.POLICY_STATUS_PROPOSAL,
      options: [
        { id: U.POLICY_STATUS_OPTION_PROPOSAL_ID, value: U.POLICY_STATUS_PROPOSAL, label: 'Proposal', color: 'blue', position: 0 },
        { id: U.POLICY_STATUS_OPTION_PENDING_ISSUANCE_ID, value: U.POLICY_STATUS_PENDING_ISSUANCE, label: 'Pending Issuance', color: 'orange', position: 1 },
        { id: U.POLICY_STATUS_OPTION_ACTIVE_ID, value: U.POLICY_STATUS_ACTIVE, label: 'Active', color: 'green', position: 2 },
        { id: U.POLICY_STATUS_OPTION_PREMIUM_DUE_ID, value: U.POLICY_STATUS_PREMIUM_DUE, label: 'Premium Due', color: 'red', position: 3 },
        { id: U.POLICY_STATUS_OPTION_LAPSED_ID, value: U.POLICY_STATUS_LAPSED, label: 'Lapsed', color: 'gray', position: 4 },
        { id: U.POLICY_STATUS_OPTION_REVIVAL_PENDING_ID, value: U.POLICY_STATUS_REVIVAL_PENDING, label: 'Revival Pending', color: 'purple', position: 5 },
        { id: U.POLICY_STATUS_OPTION_PAID_UP_ID, value: U.POLICY_STATUS_PAID_UP, label: 'Paid Up', color: 'sky', position: 6 },
        { id: U.POLICY_STATUS_OPTION_SURRENDERED_ID, value: U.POLICY_STATUS_SURRENDERED, label: 'Surrendered', color: 'pink', position: 7 },
        { id: U.POLICY_STATUS_OPTION_MATURED_ID, value: U.POLICY_STATUS_MATURED, label: 'Matured', color: 'green', position: 8 },
        { id: U.POLICY_STATUS_OPTION_CLAIMED_ID, value: U.POLICY_STATUS_CLAIMED, label: 'Claimed', color: 'orange', position: 9 },
        { id: U.POLICY_STATUS_OPTION_CANCELLED_ID, value: U.POLICY_STATUS_CANCELLED, label: 'Cancelled', color: 'gray', position: 10 }
      ]
    },
    { universalIdentifier: U.POLICY_SUM_ASSURED_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'sumAssured', label: 'Sum Assured', description: 'Sum Assured', icon: 'IconCoin' },
    { universalIdentifier: U.POLICY_PREMIUM_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.CURRENCY, name: 'premium', label: 'Premium', description: 'Premium', icon: 'IconCoin' },
    {
      universalIdentifier: U.POLICY_PREMIUM_FREQUENCY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'premiumFrequency',
      label: 'Premium Frequency',
      description: 'Frequency',
      icon: 'IconCalendarEvent',
      options: [
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_MONTHLY_ID, value: U.POLICY_PREMIUM_FREQUENCY_MONTHLY, label: 'Monthly', color: 'blue', position: 0 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_QUARTERLY_ID, value: U.POLICY_PREMIUM_FREQUENCY_QUARTERLY, label: 'Quarterly', color: 'green', position: 1 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_HALF_YEARLY_ID, value: U.POLICY_PREMIUM_FREQUENCY_HALF_YEARLY, label: 'Half Yearly', color: 'orange', position: 2 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_ANNUAL_ID, value: U.POLICY_PREMIUM_FREQUENCY_ANNUAL, label: 'Annual', color: 'purple', position: 3 },
        { id: U.POLICY_PREMIUM_FREQUENCY_OPTION_SINGLE_ID, value: U.POLICY_PREMIUM_FREQUENCY_SINGLE, label: 'Single', color: 'sky', position: 4 }
      ]
    },
    { universalIdentifier: U.POLICY_START_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'startDate', label: 'Start Date', description: 'Start', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_END_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'endDate', label: 'End Date', description: 'End', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_MATURITY_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'maturityDate', label: 'Maturity Date', description: 'Maturity', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_NEXT_PREMIUM_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'nextPremiumDueDate', label: 'Next Premium Due Date', description: 'Next Due', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_NEXT_RENEWAL_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'nextRenewalDate', label: 'Next Renewal Date', description: 'Next Renewal', icon: 'IconCalendar' },
    { universalIdentifier: U.POLICY_POLICY_TERM_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'policyTerm', label: 'Policy Term', description: 'Term', icon: 'IconClock' },
    { universalIdentifier: U.POLICY_PREMIUM_PAYING_TERM_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'premiumPayingTerm', label: 'Premium Paying Term', description: 'PPT', icon: 'IconClock' },
    { universalIdentifier: U.POLICY_NOMINEES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'nominees', label: 'Nominees', description: 'Nominees', icon: 'IconUsers' },
    { universalIdentifier: U.POLICY_RIDERS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'riders', label: 'Riders', description: 'Riders', icon: 'IconPlus' },
    {
      universalIdentifier: U.POLICY_SOURCE_CHANNEL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'sourceChannel',
      label: 'Source Channel',
      description: 'Source',
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
    { universalIdentifier: U.POLICY_COMMISSION_RATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'commissionRate', label: 'Commission Rate', description: 'Rate', icon: 'IconPercentage' },
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
    { universalIdentifier: U.POLICY_LOGIN_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'loginNumber', label: 'Login Number', description: 'Login', icon: 'IconHash' },
    { universalIdentifier: U.POLICY_VEHICLE_DETAILS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'vehicleDetails', label: 'Vehicle Details', description: 'Vehicle', icon: 'IconCar' },
    { universalIdentifier: U.POLICY_HEALTH_DETAILS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.RAW_JSON, name: 'healthDetails', label: 'Health Details', description: 'Health', icon: 'IconHeart' },
    { universalIdentifier: U.POLICY_DOCUMENTS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.FILES, name: 'documents', label: 'Documents', description: 'Documents', icon: 'IconFiles' },
    {
      universalIdentifier: U.POLICY_PRIORITY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'priority',
      label: 'Priority',
      description: 'Priority',
      icon: 'IconFlag',
      defaultValue: U.POLICY_PRIORITY_MEDIUM,
      options: [
        { id: U.POLICY_PRIORITY_OPTION_HIGH_ID, value: U.POLICY_PRIORITY_HIGH, label: 'High', color: 'red', position: 0 },
        { id: U.POLICY_PRIORITY_OPTION_MEDIUM_ID, value: U.POLICY_PRIORITY_MEDIUM, label: 'Medium', color: 'orange', position: 1 },
        { id: U.POLICY_PRIORITY_OPTION_LOW_ID, value: U.POLICY_PRIORITY_LOW, label: 'Low', color: 'green', position: 2 }
      ]
    }
  ]
});
"""
w("src/objects/policy.object.ts", pol)
