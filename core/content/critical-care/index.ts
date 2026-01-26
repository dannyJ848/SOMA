/**
 * Critical Care / ICU Educational Content Module
 *
 * Comprehensive content for understanding intensive care medicine,
 * designed to help patients and families navigate the ICU experience.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. ICU care decisions should always be made
 * in consultation with the critical care team.
 *
 * Topics covered:
 * - ICU Basics and Equipment: Understanding the ICU environment
 * - Mechanical Ventilation: How breathing machines work
 * - Shock Types and Management: When blood pressure is critically low
 * - Sepsis Recognition and Treatment: Understanding severe infections
 * - Cardiac Arrest and ACLS: Emergency resuscitation
 * - Multi-Organ Failure: When multiple organs are affected
 * - Sedation and Pain Management: Keeping patients comfortable
 * - ICU Nutrition: Feeding critically ill patients
 * - Family Communication in ICU: Working with the care team
 * - Surviving the ICU: Recovery and post-ICU syndrome
 */

// Core ICU concepts
export { icuBasicsAndEquipment } from './icu-basics-equipment';
export { mechanicalVentilation } from './mechanical-ventilation';

// Critical conditions
export { shockTypesAndManagement } from './shock-types-management';
export { sepsisRecognitionTreatment } from './sepsis-recognition-treatment';
export { cardiacArrestAndAcls } from './cardiac-arrest-acls';
export { multiOrganFailure } from './multi-organ-failure';

// ICU care aspects
export { sedationPainManagement } from './sedation-pain-management';
export { icuNutrition } from './icu-nutrition';

// Patient and family support
export { familyCommunicationIcu } from './family-communication-icu';
export { survivingTheIcu } from './surviving-the-icu';

// Re-export types
export type {
  EducationalContent,
  LevelContent,
  ComplexityLevel,
} from '../types';

// Content categories
export const CRITICAL_CARE_CATEGORIES = [
  'icu-basics',
  'respiratory-support',
  'cardiovascular-emergencies',
  'infectious-emergencies',
  'organ-failure',
  'supportive-care',
  'family-support',
  'recovery',
] as const;

export type CriticalCareCategory = (typeof CRITICAL_CARE_CATEGORIES)[number];

// All critical care content
export const criticalCareContent = {
  specialty: 'critical-care',
  topics: [
    'icu-basics-equipment',
    'mechanical-ventilation',
    'shock-types-management',
    'sepsis-recognition-treatment',
    'cardiac-arrest-acls',
    'multi-organ-failure',
    'sedation-pain-management',
    'icu-nutrition',
    'family-communication-icu',
    'surviving-the-icu',
  ],
};
