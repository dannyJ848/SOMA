/**
 * Preventive Medicine Educational Content
 *
 * Comprehensive content covering:
 * - Screening guidelines by age and gender
 * - Immunization schedules (adult and pediatric)
 * - Lifestyle modifications (exercise, diet, sleep)
 * - Risk factor modification
 * - Annual physical exam components
 * - Cancer screening (mammography, colonoscopy, Pap, PSA)
 * - Cardiovascular risk assessment
 * - Mental health screening
 * - Travel medicine basics
 * - Occupational health
 *
 * All content available at 5 complexity levels for patient education.
 *
 * NOTE: Content modules are planned for future implementation.
 */

// Content categories
export const PREVENTIVE_MEDICINE_CATEGORIES = [
  'screening',
  'immunizations',
  'lifestyle',
  'risk-factors',
  'annual-exam',
  'cancer-screening',
  'cardiovascular',
  'mental-health',
  'travel-medicine',
  'occupational-health',
] as const;

export type PreventiveMedicineCategory = (typeof PREVENTIVE_MEDICINE_CATEGORIES)[number];
