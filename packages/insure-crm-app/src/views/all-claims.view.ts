import { defineView } from 'twenty-sdk/define';
import * as U from '../constants/universal-identifiers';

export const VIEW_ALL_CLAIMS_ID = U.VIEW_CLAIM_LIST_UNIVERSAL_IDENTIFIER;

export default defineView({
  universalIdentifier: VIEW_ALL_CLAIMS_ID,
  name: 'All Claims',
  objectUniversalIdentifier: U.CLAIM_OBJECT_UNIVERSAL_IDENTIFIER,
  icon: 'IconFileAlert',
  position: 0,
  fields: [
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be12', fieldMetadataUniversalIdentifier: U.CLAIM_CLAIM_NUMBER_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be13', fieldMetadataUniversalIdentifier: '4a7c1b5e-2f8d-4e9a-8b1c-7d9a3f2b1e0c', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be14', fieldMetadataUniversalIdentifier: '4a7c1b5e-2f8d-4e9a-8b1c-7d9a3f2b1e0d', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be15', fieldMetadataUniversalIdentifier: '4a7c1b5e-2f8d-4e9a-8b1c-7d9a3f2b1e0f', position: 3, isVisible: true, size: 200 },
    { universalIdentifier: '7bcfa431-2277-5d96-b6f1-381ea5a5be16', fieldMetadataUniversalIdentifier: '4a7c1b5e-2f8d-4e9a-8b1c-7d9a3f2b1e11', position: 4, isVisible: true, size: 200 },
  ],
});
