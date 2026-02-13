/**
 * Medical History Taking Content Module
 *
 * Comprehensive educational content to help patients prepare for doctor visits
 * and understand what information is important to communicate to healthcare providers.
 *
 * Covers all major components of a complete medical history:
 * - Chief Complaint (CC)
 * - History of Present Illness (HPI)
 * - Past Medical History (PMH)
 * - Surgical History (PSH)
 * - Family History (FH)
 * - Social History (SH)
 * - Review of Systems (ROS)
 * - Medications
 * - Allergies
 *
 * NOTE: Content modules are planned for future implementation.
 */

// Content categories for future implementation
export const MEDICAL_HISTORY_CATEGORIES = [
  'chief-complaint',
  'history-present-illness',
  'past-medical-history',
  'surgical-history',
  'family-history',
  'social-history',
  'review-of-systems',
  'medication-history',
  'allergy-documentation',
] as const;

export type MedicalHistoryCategory = (typeof MEDICAL_HISTORY_CATEGORIES)[number];

// Re-export types
export type {
  EducationalContent,
  LevelContent,
  ComplexityLevel,
} from '../types';
