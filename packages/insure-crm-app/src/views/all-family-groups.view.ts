import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_FAMILY_GROUPS_ID = 'b4d64380-60b1-4d76-b608-251f0436d41f';

export default defineView({
  universalIdentifier: VIEW_ALL_FAMILY_GROUPS_ID,
  name: 'All Family Groups',
  objectUniversalIdentifier: '36881cba-68db-4171-8bc6-67a034298194',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: 'dffb94f6-8d14-419b-ba2d-b1be04653dd7', fieldMetadataUniversalIdentifier: '286d5258-305f-4a00-ba5d-e19c0179a613', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '7876a3cc-cbfb-4b2a-8c76-2f520be1e793', fieldMetadataUniversalIdentifier: '45d42398-32f2-49da-9c4c-473d0607c3ce', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: 'a4dbf068-d6fb-4050-8b1b-7a307c9b0e27', fieldMetadataUniversalIdentifier: '3c8c7f76-ebef-48cd-b141-f761d719e742', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: 'ca95232b-31da-45e0-8197-2debeaa9c262', fieldMetadataUniversalIdentifier: '144cc2b6-5d25-4122-83b4-82f5b5c92c81', position: 3, isVisible: true, size: 200 },
  ],
});
