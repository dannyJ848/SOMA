/**
 * Men's Health Educational Content
 *
 * Comprehensive content covering men's health topics:
 * - Preventive Care: Screenings, health promotion, and wellness exams
 * - Prostate Health: Prostate-specific health information
 */

import { screeningMenContent } from './preventive-care/screening-men';
import { wellMaleExamContent } from './preventive-care/well-male-exam';
import { healthPromotionMenContent } from './preventive-care/health-promotion-men';
import { prostateOverviewContent } from './prostate-health/prostate-overview';

// Preventive Care module exports
export { screeningMenContent } from './preventive-care/screening-men';
export { wellMaleExamContent } from './preventive-care/well-male-exam';
export { healthPromotionMenContent } from './preventive-care/health-promotion-men';

// Prostate Health module exports
export { prostateOverviewContent } from './prostate-health/prostate-overview';

// Content categories
export const MENS_HEALTH_CATEGORIES = [
  'preventive-care',
  'prostate-health',
  'mens-wellness',
  'screenings',
  'lifestyle',
  'mental-health',
] as const;

export type MensHealthCategory = typeof MENS_HEALTH_CATEGORIES[number];

// Clinical relevance mapping
export const MENS_HEALTH_CLINICAL_PRIORITIES = {
  'preventive-care': 'high',
  'prostate-health': 'high',
  'mens-wellness': 'medium',
  'screenings': 'high',
  'lifestyle': 'medium',
  'mental-health': 'high',
} as const;

// Content registry for programmatic access
export const mensHealthContent = {
  preventiveCare: {
    screeningMen: screeningMenContent,
    wellMaleExam: wellMaleExamContent,
    healthPromotionMen: healthPromotionMenContent,
  },
  prostateHealth: {
    prostateOverview: prostateOverviewContent,
  },
};

export default mensHealthContent;
