import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_KYC_RECORDS_ID = U.VIEW_KYC_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_KYC_RECORDS_ID,
  name: 'All KYC Records',
  objectUniversalIdentifier: U.KYC_RECORD_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconId',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be17', fieldMetadataUniversalIdentifier: U.KYC_RECORD_DOCUMENT_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be18', fieldMetadataUniversalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f1d', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be19', fieldMetadataUniversalIdentifier: '5b8d2c6f-3e9a-4f0b-9c2d-8e0b4a3c2f1e', position: 2, isVisible: true, size: 200 },
  ],
});
