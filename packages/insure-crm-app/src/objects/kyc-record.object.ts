import { defineObject, FieldType } from 'twenty-sdk/define';
import {
  KYC_RECORD_OBJECT_UNIVERSAL_IDENTIFIER,
  KYC_RECORD_DOCUMENT_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const KYC_RECORD_OBJECT_ID = KYC_RECORD_OBJECT_UNIVERSAL_IDENTIFIER;
export const KYC_RECORD_NAME_FIELD_ID = KYC_RECORD_DOCUMENT_NUMBER_FIELD_UNIVERSAL_IDENTIFIER;


export default defineObject({
  universalIdentifier: KYC_RECORD_OBJECT_ID,
  nameSingular: 'kycRecord',
  namePlural: 'kycRecords',
  labelSingular: 'KYC Record',
  labelPlural: 'KYC Records',
  description: 'KYC Record',
  icon: 'IconId',
  labelIdentifierFieldMetadataUniversalIdentifier: KYC_RECORD_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: KYC_RECORD_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'documentNumber',
      label: 'Document Number',
      description: 'Document Number',
      icon: 'IconHash',
      isLabelIdentifier: true,
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f1d',
      type: FieldType.SELECT,
      name: 'kycType',
      label: 'KYC Type',
      description: 'KYC Type',
      icon: 'IconCategory',
      options: [
        { id: '1', value: 'Aadhaar', label: 'Aadhaar', color: 'blue', position: 0 },
        { id: '2', value: 'PAN', label: 'PAN', color: 'green', position: 1 },
        { id: '3', value: 'VoterID', label: 'Voter ID', color: 'purple', position: 2 },
        { id: '4', value: 'Passport', label: 'Passport', color: 'orange', position: 3 },
        { id: '5', value: 'DrivingLicense', label: 'Driving License', color: 'red', position: 4 },
        { id: '6', value: 'CKYC', label: 'CKYC', color: 'sky', position: 5 },
      ]
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f1e',
      type: FieldType.SELECT,
      name: 'verificationStatus',
      label: 'Verification Status',
      description: 'Verification Status',
      icon: 'IconStatusChange',
      defaultValue: "'Pending'",
      options: [
        { id: '1', value: 'Pending', label: 'Pending', color: 'gray', position: 0 },
        { id: '2', value: 'Verified', label: 'Verified', color: 'green', position: 1 },
        { id: '3', value: 'Failed', label: 'Failed', color: 'red', position: 2 },
        { id: '4', value: 'Expired', label: 'Expired', color: 'orange', position: 3 },
      ]
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f1f',
      type: FieldType.DATE_TIME,
      name: 'verifiedDate',
      label: 'Verified Date',
      description: 'Verified Date',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f20',
      type: FieldType.DATE_TIME,
      name: 'expiryDate',
      label: 'Expiry Date',
      description: 'Expiry Date',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f21',
      type: FieldType.TEXT,
      name: 'ckycNumber',
      label: 'CKYC Number',
      description: 'CKYC Number',
      icon: 'IconHash',
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f22',
      type: FieldType.SELECT,
      name: 'verificationMethod',
      label: 'Verification Method',
      description: 'Verification Method',
      icon: 'IconSettings',
      options: [
        { id: '1', value: 'Manual', label: 'Manual', color: 'gray', position: 0 },
        { id: '2', value: 'eKYC_Aadhaar', label: 'eKYC Aadhaar', color: 'blue', position: 1 },
        { id: '3', value: 'DigiLocker', label: 'DigiLocker', color: 'green', position: 2 },
        { id: '4', value: 'VideoKYC', label: 'Video KYC', color: 'purple', position: 3 },
        { id: '5', value: 'CKYC_Lookup', label: 'CKYC Lookup', color: 'orange', position: 4 },
      ]
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f23',
      type: FieldType.FILES,
      name: 'documentFront',
      label: 'Document Front',
      description: 'Document Front',
      icon: 'IconFile',
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f24',
      type: FieldType.FILES,
      name: 'documentBack',
      label: 'Document Back',
      description: 'Document Back',
      icon: 'IconFile',
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f25',
      type: FieldType.BOOLEAN,
      name: 'dpdpConsentCaptured',
      label: 'DPDP Consent Captured',
      description: 'DPDP Consent Captured',
      icon: 'IconShieldCheck',
      defaultValue: false,
    },
    {
      universalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f26',
      type: FieldType.DATE_TIME,
      name: 'dpdpConsentDate',
      label: 'DPDP Consent Date',
      description: 'DPDP Consent Date',
      icon: 'IconCalendarEvent',
    }
  ]
});
