import { defineSkill } from 'twenty-sdk/define';

export const COVERAGE_ANALYSIS_SKILL_ID = '33ea55b4-9333-40e1-bbde-1845bb0886a8';

export default defineSkill({
  universalIdentifier: COVERAGE_ANALYSIS_SKILL_ID,
  name: 'coverage-analysis',
  label: 'Coverage Analysis',
  description: 'Analyzes coverage gaps to recommend cross-sell products.',
  icon: 'IconBrain',
  content: 'Detailed instructions for coverage gap analysis: 1. Analyze family members and current coverage. 2. Compute gaps based on standard risk models. 3. Recommend specific products. 4. Generate cross-sell opportunities.',
});
