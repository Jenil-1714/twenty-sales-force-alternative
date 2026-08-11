import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_INSURERS_ID = 'a951fcf5-dc56-4279-9941-8f81014ab52e';

export default defineView({
  universalIdentifier: VIEW_ALL_INSURERS_ID,
  name: 'All Insurers',
  objectUniversalIdentifier: 'f39ce567-2d85-4841-baee-1be4120ecba8',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: '5f958f4c-f1d2-4354-9721-6dc35be3ed66', fieldMetadataUniversalIdentifier: '7f9994fb-7a54-47b2-859a-11234c034de9', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '2437dc7b-8457-414c-a1ba-cbcc0716c52a', fieldMetadataUniversalIdentifier: '5ec0bd6e-e175-4ceb-8e3d-2495afecff13', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '45bc47eb-af53-4dc7-a36c-9c980753af11', fieldMetadataUniversalIdentifier: 'd35df027-e0fa-40f4-8a48-b472e3a89e9f', position: 2, isVisible: true, size: 200 },
  ],
});
