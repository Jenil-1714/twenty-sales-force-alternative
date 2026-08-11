import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_PRODUCTS_ID = 'e6c70810-7e6e-4f51-b016-83cd158e085c';

export default defineView({
  universalIdentifier: VIEW_ALL_PRODUCTS_ID,
  name: 'All Products',
  objectUniversalIdentifier: '20c74996-03f6-4876-90b4-3a525f69c5be',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: '58778f63-0df1-4a43-b248-26abecb074a1', fieldMetadataUniversalIdentifier: '5e0d7c71-36ba-4a64-b52b-fb6263592ed6', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '66c5a8ec-f350-4dcd-b962-97b7bbfb5eb5', fieldMetadataUniversalIdentifier: 'a40d5140-bcbe-4eb8-ad7d-c9448ad53f3e', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '603db0f6-ec38-4e8c-a1d2-00ab56b7c02f', fieldMetadataUniversalIdentifier: 'bd24a737-f8cc-4d32-9c9b-eb2d69f3d9ee', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '01d6706e-8123-452f-8be5-612bb15f012e', fieldMetadataUniversalIdentifier: '24ff95b2-302a-43cf-8a7e-12df595b16f3', position: 3, isVisible: true, size: 200 },
  ],
});
