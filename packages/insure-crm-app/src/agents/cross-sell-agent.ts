import { defineAgent } from 'twenty-sdk/define';

export const CROSS_SELL_AGENT_ID = '930c25a0-0dbd-4348-8df0-7a8e527d2c3e';

export default defineAgent({
  universalIdentifier: CROSS_SELL_AGENT_ID,
  name: 'cross-sell-agent',
  label: 'Insurance Cross-sell AI Agent',
  description: 'Agent for discovering and analyzing cross-sell opportunities.',
  icon: 'IconRobot',
  prompt: 'You are an Insurance Cross-sell AI Agent. Your objective is to analyze family coverage gaps, match products to gaps, generate personalized pitches, suggest optimal contact timing, and create opportunity records.',
});
