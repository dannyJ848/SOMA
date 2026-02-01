/**
 * Medical Legal Educational Content
 *
 * Comprehensive content covering legal aspects of medical practice:
 * - Medical Malpractice: Overview of malpractice law and liability
 * - Liability: Understanding various forms of medical liability
 */

import { liability } from './medical-malpractice/liability';
import { malpracticeOverview } from './medical-malpractice/malpractice-overview';

// Medical Malpractice module exports
export { liability } from './medical-malpractice/liability';
export { malpracticeOverview } from './medical-malpractice/malpractice-overview';

// Content categories
export const MEDICAL_LEGAL_CATEGORIES = [
  'medical-malpractice',
  'liability',
  'informed-consent',
  'healthcare-law',
  'risk-management',
] as const;

export type MedicalLegalCategory = typeof MEDICAL_LEGAL_CATEGORIES[number];

// Clinical relevance mapping
export const MEDICAL_LEGAL_CLINICAL_PRIORITIES = {
  'medical-malpractice': 'high',
  'liability': 'high',
  'informed-consent': 'high',
  'healthcare-law': 'medium',
  'risk-management': 'high',
} as const;

// Content registry
export const medicalLegalContent = {
  liability,
  malpracticeOverview,
};

export default medicalLegalContent;
