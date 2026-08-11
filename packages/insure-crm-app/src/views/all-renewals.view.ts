import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_RENEWALS_ID = '2f745778-99d7-466d-8b09-b68e0d9b4b0e';

export default defineView({
  universalIdentifier: VIEW_ALL_RENEWALS_ID,
  name: 'All Renewals',
  objectUniversalIdentifier: 'cfc00d46-4e58-48b0-8f92-5e60897dd6cb',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: '8910b806-0354-47ab-9ca3-189cc5cfedb8', fieldMetadataUniversalIdentifier: 'c1dc79d2-7c93-4e4b-9cf7-4f6ff6331a98', position: 0, isVisible: true, size: 200 },
  ],
});
