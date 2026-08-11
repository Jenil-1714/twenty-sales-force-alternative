import { defineView } from 'twenty-sdk/define';

export const VIEW_ALL_COMMISSIONS_ID = 'df55a401-4475-430c-ab22-0d6e6abedc5c';

export default defineView({
  universalIdentifier: VIEW_ALL_COMMISSIONS_ID,
  name: 'All Commissions',
  objectUniversalIdentifier: '31be6130-bbd4-469a-a4ec-a1a7988350ed',
  icon: 'IconList',
  position: 0,
  fields: [
    { universalIdentifier: '19ef07ff-15df-40ab-96f3-34e8ce9eb5f0', fieldMetadataUniversalIdentifier: '82410a76-c567-4632-a56f-e3c35b6b158f', position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '6a4b1625-ff4b-4c07-b359-bb4bb992160d', fieldMetadataUniversalIdentifier: '9eaf61e3-85f3-4e44-bc94-f2a893bf40dc', position: 1, isVisible: true, size: 200 },
    { universalIdentifier: 'e86b245f-eb5d-4f1a-b0c6-30b6df4299b9', fieldMetadataUniversalIdentifier: '458bfa93-4aeb-4751-9e5c-2041dd7ffb1f', position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '407d174a-1311-4796-987f-e2c7ab7709a8', fieldMetadataUniversalIdentifier: '90dc815e-dbda-443b-891f-0e065538e1b6', position: 3, isVisible: true, size: 200 },
    { universalIdentifier: '2c5ffdae-37eb-4b2a-b732-21147a40733a', fieldMetadataUniversalIdentifier: '2a49800a-42c6-43b9-a299-bb01c5f3e4db', position: 4, isVisible: true, size: 200 },
  ],
});
