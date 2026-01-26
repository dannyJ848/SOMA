/**
 * Palliative Care Educational Content Module
 *
 * Comprehensive, compassionate content for end-of-life care planning and
 * understanding. This module covers all aspects of palliative and hospice
 * care to help patients and families make informed decisions about care
 * during serious illness.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Decisions about care should always be made
 * in consultation with healthcare providers.
 *
 * Topics covered:
 * - Palliative vs Hospice Care: Understanding the differences
 * - Symptom Management: Pain, nausea, dyspnea, and other symptoms
 * - Goals of Care Conversations: How to discuss wishes and preferences
 * - Advance Directives: Legal documents for future care decisions
 * - Living Wills: Documenting treatment preferences
 * - DNR/DNI Orders: Understanding resuscitation decisions
 * - POLST Forms: Physician orders for life-sustaining treatment
 * - Comfort Care Measures: Focus on quality and dignity
 * - Family Support and Grief: Resources for loved ones
 * - Quality of Life Focus: Patient-centered care approach
 * - When to Consider Palliative Care: Timing and indications
 */

// Core concepts
export { palliativeVsHospiceCare } from './palliative-vs-hospice';
export { whenToConsiderPalliativeCare } from './when-to-consider';
export { qualityOfLifeFocus } from './quality-of-life';

// Symptom management
export { painManagement } from './symptoms/pain-management';
export { nauseaManagement } from './symptoms/nausea-management';
export { dyspneaManagement } from './symptoms/dyspnea-management';
export { symptomManagementOverview } from './symptoms/overview';

// Care planning
export { goalsOfCareConversations } from './care-planning/goals-of-care';
export { advanceDirectives } from './care-planning/advance-directives';
export { livingWills } from './care-planning/living-wills';
export { dnrDniOrders } from './care-planning/dnr-dni-orders';
export { polstForms } from './care-planning/polst-forms';

// Comfort and support
export { comfortCareMeasures } from './comfort-care/comfort-measures';
export { familySupportAndGrief } from './comfort-care/family-support-grief';

// Re-export types
export type {
  EducationalContent,
  LevelContent,
  ComplexityLevel,
} from '../types';

// Content categories
export const PALLIATIVE_CARE_CATEGORIES = [
  'core-concepts',
  'symptom-management',
  'care-planning',
  'legal-documents',
  'comfort-care',
  'family-support',
] as const;

export type PalliativeCareCategory = (typeof PALLIATIVE_CARE_CATEGORIES)[number];
