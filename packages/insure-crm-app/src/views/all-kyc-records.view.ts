import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_KYC_RECORDS_ID = 'e22e5a62-132d-42bc-adfc-ab93d6e15967';

export default defineView({
  universalIdentifier: VIEW_ALL_KYC_RECORDS_ID,
  name: 'All KYC Records',
  objectUniversalIdentifier: 'f048d0d1-0361-460d-8eb9-cf560934d400',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: 'd3fdfca2-1a4c-473d-9dcd-e01ffab57cd2', fieldMetadataUniversalIdentifier: '44520ce4-2df2-4753-90d5-ad78e24c2ed2', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: 'b56eb1bc-9d0a-42cd-9bc8-29be1927362a', fieldMetadataUniversalIdentifier: '6b245e41-057d-4180-82a8-125dd2802052', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '0831afbb-63c6-43b9-bb88-348259747970', fieldMetadataUniversalIdentifier: '1fbbde3b-c290-48ef-b00d-58728edbda05', position: 2, isVisible: true, size: 200 },
  ],
});
