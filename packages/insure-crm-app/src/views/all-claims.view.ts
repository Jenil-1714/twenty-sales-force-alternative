import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_CLAIMS_ID = '7e73d328-91cc-44d4-9d04-58fffae6ceb9';

export default defineView({
  universalIdentifier: VIEW_ALL_CLAIMS_ID,
  name: 'All Claims',
  objectUniversalIdentifier: 'b248a8eb-84da-448c-af60-8bbcf9957cd9',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: '84b55812-d9db-4952-ade6-347e30d22223', fieldMetadataUniversalIdentifier: 'bd2eb020-f472-4d51-9cae-a61986420e6a', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '0b3017a1-591b-4f9e-a864-18c7bc785532', fieldMetadataUniversalIdentifier: '360ce01b-c403-4f9e-be3c-1b702e482367', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: 'a4dfd74c-473d-429a-ae53-bd3ff7900b95', fieldMetadataUniversalIdentifier: '1e19eb06-6110-40e8-be58-7e43681be119', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '5c0ccdd0-213c-4384-ba8f-dc4a88bcba01', fieldMetadataUniversalIdentifier: 'a8a70650-6a75-4fde-ba46-0b8bb0920542', position: 3, isVisible: true, size: 200 },
    { universalIdentifier: '78d91c25-bb35-430c-ab22-26db12b32525', fieldMetadataUniversalIdentifier: '10cf2e20-94d8-4a57-b011-85b248037bce', position: 4, isVisible: true, size: 200 },
  ],
});
