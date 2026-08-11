import { defineSkill } from 'twenty-sdk/define';

export const RENEWAL_MANAGEMENT_SKILL_ID = 'b732fb4b-5134-4b5b-a63e-f14d86927cc7';

export default defineSkill({
  universalIdentifier: RENEWAL_MANAGEMENT_SKILL_ID,
  name: 'renewal-management',
  label: 'Renewal Management',
  description: 'Handles the logic and processing for managing renewals.',
  icon: 'IconBrain',
  content: 'Detailed instructions for renewal management: 1. Find policies near expiration. 2. Calculate risk of non-renewal. 3. Send automated reminders. 4. Track responses and update status.',
});
