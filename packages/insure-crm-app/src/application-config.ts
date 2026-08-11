import { defineApplication } from 'twenty-sdk/define';
import { APPLICATION_UNIVERSAL_IDENTIFIER, DEFAULT_ROLE_UNIVERSAL_IDENTIFIER } from './constants/universal-identifiers';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'InsureCRM',
  description: 'Insurance Growth OS',
  defaultRoleUniversalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
  logo: 'public/logo.svg',
  author: 'InsureCRM',
  category: 'CRM',
});
