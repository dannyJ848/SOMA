/**
 * Geriatrics Specialty Content Index
 *
 * Comprehensive geriatric medicine educational content covering:
 * - Aging physiology and biology of senescence
 * - Polypharmacy and medication management
 * - Falls prevention and assessment
 * - Cognitive impairment assessment
 * - Delirium versus dementia differentiation
 * - Frailty and sarcopenia
 * - End-of-life planning
 * - Caregiver support and education
 * - Age-related sensory changes
 * - Geriatric syndromes (comprehensive overview)
 *
 * This module is designed for physician-level education suitable for
 * family education, with multi-level complexity from basic explanations
 * to clinical practice guidelines.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Care decisions should always be made in
 * consultation with qualified healthcare providers.
 */

// Core aging concepts
export { agingPhysiology } from './aging-physiology';

// Medication management
export { polypharmacy } from './polypharmacy';

// Safety and function
export { fallsPrevention } from './falls-prevention';

// Cognitive assessment
export { cognitiveImpairmentAssessment } from './cognitive-impairment-assessment';
export { deliriumVsDementia } from './delirium-vs-dementia';

// Physical decline
export { frailtySarcopenia } from './frailty-sarcopenia';

// Comprehensive syndromes
export { geriatricSyndromes } from './geriatric-syndromes';

// Sensory changes
export { ageRelatedSensoryChanges } from './age-related-sensory-changes';

// Care planning and support
export { endOfLifePlanning } from './end-of-life-planning';
export { caregiverSupport } from './caregiver-support';

// Geriatrics database
export {
  GERIATRICS_ENTRIES,
  getGeriatricsEntry,
  searchGeriatrics,
  getGeriatricsByCategory,
  getGeriatricsCategoryCounts,
  getGeriatricsCount,
} from './geriatrics-database';
export type {
  GeriatricsEntry,
  GeriatricsCategory as GeriatricsDatabaseCategory,
} from './geriatrics-database';

// Re-export types
export type {
  EducationalContent,
  LevelContent,
  ComplexityLevel,
} from '../../types';

// Content categories
export const GERIATRICS_CATEGORIES = [
  'aging-biology',
  'medication-management',
  'falls-mobility',
  'cognitive-health',
  'frailty-function',
  'sensory-changes',
  'geriatric-syndromes',
  'end-of-life',
  'caregiver-support',
] as const;

export type GeriatricsCategory = (typeof GERIATRICS_CATEGORIES)[number];

// All geriatrics content metadata
export const geriatricsContent = {
  specialty: 'geriatrics',
  topics: [
    'aging-physiology',
    'polypharmacy',
    'falls-prevention',
    'cognitive-impairment-assessment',
    'delirium-vs-dementia',
    'frailty-sarcopenia',
    'geriatric-syndromes',
    'age-related-sensory-changes',
    'end-of-life-planning',
    'caregiver-support',
  ],
};
