/**
 * Health Literacy Content Module
 *
 * Comprehensive educational content on health literacy, patient communication,
 * and ensuring patient understanding across healthcare settings.
 */

export { healthLiteracyBasics } from './basics';
export { assessingHealthLiteracy } from './assessing-literacy';
export { teachBackMethod } from './teach-back';
export { plainLanguage } from './plain-language';
export { visualAids } from './visual-aids';
export { healthNumeracy } from './numeracy';
export { medicationInstructions } from './medication-instructions';
export { informedConsent } from './informed-consent';
export { dischargeInstructions } from './discharge-instructions';

// Re-export with default exports for convenience
export { default as healthLiteracyBasicsDefault } from './basics';
export { default as assessingHealthLiteracyDefault } from './assessing-literacy';
export { default as teachBackMethodDefault } from './teach-back';
export { default as plainLanguageDefault } from './plain-language';
export { default as visualAidsDefault } from './visual-aids';
export { default as healthNumeracyDefault } from './numeracy';
export { default as medicationInstructionsDefault } from './medication-instructions';
export { default as informedConsentDefault } from './informed-consent';
export { default as dischargeInstructionsDefault } from './discharge-instructions';

// Module metadata
export const healthLiteracyMetadata = {
  id: 'health-literacy',
  title: 'Health Literacy',
  description: 'Educational content on health literacy, patient communication, and ensuring understanding',
  version: '1.0.0',
  lastUpdated: new Date().toISOString().split('T')[0],
  modules: [
    'health-literacy-basics',
    'health-literacy-assessing-literacy',
    'health-literacy-teach-back',
    'health-literacy-plain-language',
    'health-literacy-visual-aids',
    'health-literacy-numeracy',
    'health-literacy-medication-instructions',
    'health-literacy-informed-consent',
    'health-literacy-discharge-instructions',
  ],
  categories: [
    'communication-skills',
    'patient-education',
    'health-literacy',
  ],
  relatedTopics: [
    'medical-terminology',
    'clinical-reasoning',
    'patient-safety',
    'quality-improvement',
  ],
  references: [
    'Agency for Healthcare Research and Quality (AHRQ)',
    'American Medical Association (AMA) Health Literacy',
    'Institute of Medicine Health Literacy Reports',
    'Healthy People 2030',
    'Plain Language Action and Information Network',
  ],
};
