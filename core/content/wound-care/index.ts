/**
 * Wound Care Educational Content Module
 *
 * Comprehensive content covering all aspects of wound healing, care, and management.
 * This module provides multi-level educational content from basic understanding
 * through professional clinical knowledge.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Always consult healthcare providers for
 * specific wound care needs.
 *
 * Topics covered:
 * - Wound Healing Phases: Hemostasis, inflammation, proliferation, remodeling
 * - Wound Types: Acute, chronic, surgical, traumatic classifications
 * - Wound Assessment: Systematic evaluation and documentation
 * - Wound Cleaning and Debridement: Proper techniques and materials
 * - Suture Techniques: Closure methods and care
 * - Dressing Selection: Choosing appropriate wound coverings
 * - Complication Prevention: Infection and healing problems
 * - Signs of Infection: Recognition and response
 * - When to Seek Care: Decision guidance for wound evaluation
 * - Chronic Wounds: Pressure ulcers, diabetic ulcers, venous ulcers
 * - Burn Care: Classification and management
 * - Scar Management: Prevention and treatment strategies
 * - Tetanus Prophylaxis: Vaccination guidelines and wound types
 */

// Wound healing fundamentals
export { woundHealingPhases } from './wound-healing-phases';
export { woundTypes } from './wound-types';

// Core wound care content (newly created)
export { woundBasicsContent } from './wound-basics';
export { woundAssessmentContent } from './wound-assessment';
export { woundCleaningContent } from './wound-cleaning';
export { sutureTechniquesContent } from './suture-techniques';
export { dressingSelectionContent } from './dressing-selection';
export { complicationPreventionContent } from './complication-prevention';

// Existing wound care content
export { woundCleaningDressing } from './wound-cleaning-dressing';
export { suturesStaplesGlue } from './sutures-staples-glue';

// Clinical assessment
export { signsOfInfection } from './signs-of-infection';
export { whenToSeekCare } from './when-to-seek-care';

// Specialized wound care
export { chronicWounds } from './chronic-wounds';
export { burnCare } from './burn-care';

// Outcomes and prevention
export { scarManagement } from './scar-management';
export { tetanusProphylaxis } from './tetanus-prophylaxis';

// Re-export types
export type {
  EducationalContent,
  LevelContent,
  ComplexityLevel,
} from '../types';

// Content categories
export const WOUND_CARE_CATEGORIES = [
  'healing-fundamentals',
  'wound-classification',
  'wound-assessment',
  'wound-cleaning',
  'suture-techniques',
  'dressing-selection',
  'complication-prevention',
  'care-techniques',
  'clinical-assessment',
  'chronic-wounds',
  'burns',
  'scar-management',
  'prevention',
] as const;

export type WoundCareCategory = (typeof WOUND_CARE_CATEGORIES)[number];
