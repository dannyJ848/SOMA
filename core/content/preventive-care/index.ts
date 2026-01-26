/**
 * Preventive Care Educational Content
 *
 * Comprehensive preventive medicine education including:
 * - Screening guidelines (cancer, cardiovascular, bone density)
 * - Vaccinations (adult, childhood, travel)
 * - Health maintenance (annual exams, dental, eye, hearing)
 * - Lifestyle medicine (diet, exercise, sleep, stress, smoking, alcohol)
 *
 * All content based on USPSTF guidelines and major medical society recommendations.
 * Content available at 5 complexity levels for patient education.
 */

// Screening content
export * from './screenings/cancer-screening-overview';
export * from './screenings/mammogram-screening';
export * from './screenings/colonoscopy-screening';
export * from './screenings/pap-smear-screening';
export * from './screenings/psa-screening';
export * from './screenings/lung-cancer-screening';
export * from './screenings/cardiovascular-screening';
export * from './screenings/lipid-screening';
export * from './screenings/blood-pressure-screening';
export * from './screenings/diabetes-screening';
export * from './screenings/bone-density-screening';
export * from './screenings/age-appropriate-screening-schedules';

// Vaccination content
export * from './vaccinations/adult-vaccine-schedule';
export * from './vaccinations/childhood-vaccines';
export * from './vaccinations/travel-vaccines';
export * from './vaccinations/how-vaccines-work';
export * from './vaccinations/vaccine-safety';

// Health maintenance content
export * from './health-maintenance/annual-physical-exam';
export * from './health-maintenance/well-woman-visit';
export * from './health-maintenance/well-man-visit';
export * from './health-maintenance/dental-checkups';
export * from './health-maintenance/eye-exams';
export * from './health-maintenance/hearing-screening';

// Lifestyle medicine content
export * from './lifestyle-medicine/diet-nutrition-basics';
export * from './lifestyle-medicine/exercise-recommendations';
export * from './lifestyle-medicine/sleep-hygiene';
export * from './lifestyle-medicine/stress-management';
export * from './lifestyle-medicine/smoking-cessation';
export * from './lifestyle-medicine/alcohol-moderation';

// Content categories
export const PREVENTIVE_CARE_CATEGORIES = [
  'screenings',
  'vaccinations',
  'health-maintenance',
  'lifestyle-medicine',
] as const;

export type PreventiveCareCategory = (typeof PREVENTIVE_CARE_CATEGORIES)[number];

// Sub-categories
export const SCREENING_SUBCATEGORIES = [
  'cancer-screening',
  'cardiovascular-screening',
  'bone-density-screening',
  'age-specific-screening',
] as const;

export const VACCINATION_SUBCATEGORIES = [
  'adult-vaccines',
  'childhood-vaccines',
  'travel-vaccines',
  'vaccine-science',
] as const;

export const HEALTH_MAINTENANCE_SUBCATEGORIES = [
  'annual-exams',
  'gender-specific-visits',
  'dental-care',
  'vision-care',
  'hearing-care',
] as const;

export const LIFESTYLE_MEDICINE_SUBCATEGORIES = [
  'nutrition',
  'physical-activity',
  'sleep',
  'mental-wellness',
  'substance-use',
] as const;
