import { defineAgent } from 'twenty-sdk/define';

export const RENEWAL_AGENT_ID = 'a47b19dc-1c05-4c07-ba2f-f4951b14cece';

export default defineAgent({
  universalIdentifier: RENEWAL_AGENT_ID,
  name: 'renewal-agent',
  label: 'Insurance Renewal AI Agent',
  description: 'Agent for handling insurance renewals automatically.',
  icon: 'IconRobot',
  prompt: 'You are an Insurance Renewal AI Agent. Your goals are to find expiring policies, prioritize them by risk, draft renewal messages, send reminders via WhatsApp, update pipeline status, and escalate to human agents if necessary.',
});
