import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_POLICIES_ID = '556cdab3-a551-40ef-bc61-a58d62638a1f';

export default defineView({
  universalIdentifier: VIEW_ALL_POLICIES_ID,
  name: 'All Policies',
  objectUniversalIdentifier: 'c813a078-4389-49ea-9dc3-e62ebbe2bc0e',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: 'f328f430-802c-4977-8321-729c1598f4e2', fieldMetadataUniversalIdentifier: '80de21f1-2856-43e6-ab10-ce7e7811ef62', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: 'c4e97ff0-a3bc-42b7-a065-ce90f4214ce9', fieldMetadataUniversalIdentifier: 'ec60714b-226e-4148-af5f-c9679deaf315', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '8913959b-2e9b-449e-88c9-0a6e70908f95', fieldMetadataUniversalIdentifier: 'a4ec86be-73c3-4d64-a745-f033a30dfa48', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '36ebf7b0-ed32-4796-bb7c-2bdf55f372a4', fieldMetadataUniversalIdentifier: 'f642442f-76ee-48c0-85f0-6ed7a2503923', position: 3, isVisible: true, size: 200 },
    { universalIdentifier: '662b25c3-1d0b-4eb2-a0c5-555562723019', fieldMetadataUniversalIdentifier: 'bf027429-23c2-4a00-ab60-15a0c8684d28', position: 4, isVisible: true, size: 200 },
  ],
});
