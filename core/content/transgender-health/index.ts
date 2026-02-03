/**
 * Transgender Health Content Index
 *
 * Comprehensive, evidence-based educational content covering all aspects
 * of transgender and gender-diverse health care. This content is designed
 * to be compassionate, affirming, and medically accurate.
 *
 * Content areas:
 * - Gender identity basics and terminology
 * - Gender-affirming care overview
 * - Hormone therapy (feminizing and masculinizing)
 * - Mental health considerations
 * - Finding affirming healthcare providers
 * - Surgical options overview
 * - Health screening guidelines
 * - Voice and communication
 * - Legal and social considerations
 * - Support resources
 *
 * Multi-level content for physician-level patient education with emphasis
 * on reducing stigma, promoting understanding, and providing practical guidance.
 *
 * Clinical Guidelines Referenced:
 * - WPATH Standards of Care Version 8 (2022)
 * - Endocrine Society Clinical Practice Guidelines (2017)
 * - UCSF Guidelines for Primary and Gender-Affirming Care
 */

// Gender Identity Basics
export * from './basics/gender-identity-basics';
export * from './basics/terminology-glossary';
export * from './basics/gender-diversity-science';

// Gender-Affirming Care
export * from './gender-affirming-care/care-overview';
export * from './gender-affirming-care/informed-consent-model';
export * from './gender-affirming-care/care-team';

// Hormone Therapy
export * from './hormone-therapy/feminizing-hormone-therapy';
export * from './hormone-therapy/masculinizing-hormone-therapy';
export * from './hormone-therapy/monitoring-and-safety';
export * from './hormone-therapy/puberty-blockers';

// Mental Health
export * from './mental-health/mental-health-overview';
export * from './mental-health/gender-dysphoria';
export * from './mental-health/resilience-and-coping';

// Finding Providers
export * from './finding-providers/affirming-providers';
export * from './finding-providers/patient-rights';

// Surgical Options
export * from './surgical-options/surgical-overview';
export * from './surgical-options/chest-surgery';
export * from './surgical-options/genital-surgery';
export * from './surgical-options/other-procedures';

// Health Screening
export * from './health-screening/screening-guidelines';
export * from './health-screening/organ-specific-care';

// Voice and Communication
export * from './voice-communication/voice-overview';
export * from './voice-communication/voice-training';

// Legal and Social
export * from './legal-social/legal-considerations';
export * from './legal-social/social-transition';
export * from './legal-social/workplace-considerations';

// Support Resources
export * from './support-resources/community-resources';
export * from './support-resources/crisis-resources';

// Content registry
export const TRANSGENDER_HEALTH_CONTENT_CATEGORIES = [
  'basics',
  'gender-affirming-care',
  'hormone-therapy',
  'mental-health',
  'finding-providers',
  'surgical-options',
  'health-screening',
  'voice-communication',
  'legal-social',
  'support-resources',
] as const;

export type TransgenderHealthCategory = (typeof TRANSGENDER_HEALTH_CONTENT_CATEGORIES)[number];

// Core affirming messages
export const TRANSGENDER_HEALTH_CORE_MESSAGES = {
  identityValid: 'Your gender identity is valid. Being transgender is a natural variation of human experience, not a disorder or illness.',
  careAccess: 'Gender-affirming care is medically necessary healthcare. Every major medical organization supports access to evidence-based gender-affirming care.',
  notAlone: 'You are not alone. Transgender and gender-diverse people have always existed across all cultures and throughout history.',
  individualJourney: 'Every person\'s gender journey is unique. There is no single "right way" to be transgender or to transition.',
  supportMatters: 'Social support significantly improves health outcomes. Connecting with affirming communities, families, and providers makes a difference.',
  resilienceStrength: 'Transgender people show remarkable resilience. While facing unique challenges, many transgender individuals thrive with appropriate support and care.',
};

// Important disclaimers
export const TRANSGENDER_HEALTH_DISCLAIMERS = {
  medicalAdvice: 'This content is for educational purposes only and does not replace individualized medical advice from qualified healthcare providers.',
  emergencyResources: 'If you are in crisis, please contact emergency services or a crisis hotline. The 988 Suicide and Crisis Lifeline is available 24/7.',
  legalVariation: 'Legal protections and requirements vary significantly by location. Consult local resources and legal professionals for guidance specific to your area.',
  evolvingScience: 'The science of gender-affirming care continues to evolve. Guidelines are updated regularly based on new evidence.',
};
