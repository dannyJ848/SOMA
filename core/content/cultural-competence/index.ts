// Cultural Awareness Modules
import { culturalHumilityContent } from './cultural-awareness/cultural-humility';
import { biasAwarenessContent } from './cultural-awareness/bias-awareness';
import { selfReflectionContent } from './cultural-awareness/self-reflection';
import { culturalAwarenessModules } from './cultural-awareness';

// Health Disparities Modules
import { disparitiesOverviewContent } from './health-disparities/disparities-overview';
import { socialDeterminantsContent } from './health-disparities/social-determinants';
import { healthEquityContent } from './health-disparities/health-equity';
import { healthDisparitiesModules } from './health-disparities';

// Communication Modules
import { culturalCommunicationContent } from './communication/cultural-communication';
import { interpreterUseContent } from './communication/interpreter-use';
import { communicationModules } from './communication';

export {
  culturalHumilityContent,
  biasAwarenessContent,
  selfReflectionContent,
  culturalAwarenessModules,
  disparitiesOverviewContent,
  socialDeterminantsContent,
  healthEquityContent,
  healthDisparitiesModules,
  culturalCommunicationContent,
  interpreterUseContent,
  communicationModules,
};

import { EducationalContent } from '../types';

// All cultural competence modules (using custom structure, not EducationalContent)
export const culturalCompetenceModules = [
  ...(culturalAwarenessModules as any),
  ...(healthDisparitiesModules as any),
  ...(communicationModules as any),
];

// Categories
export const culturalCompetenceCategories = {
  'cultural-awareness': {
    title: 'Cultural Awareness',
    description: 'Develop self-awareness and recognize biases that affect healthcare delivery.',
    modules: culturalAwarenessModules as any,
  },
  'health-disparities': {
    title: 'Health Disparities',
    description: 'Understand systemic inequities and social determinants that affect health outcomes.',
    modules: healthDisparitiesModules as any,
  },
  'communication': {
    title: 'Cross-Cultural Communication',
    description: 'Master communication skills for effective care across cultural differences.',
    modules: communicationModules as any,
  },
} as const;
