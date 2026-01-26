/**
 * Physical Examination Content Module
 *
 * Comprehensive educational content covering all aspects of the physical examination,
 * from vital signs to specialized system examinations. Each section includes:
 * - Normal findings and technique
 * - Abnormal findings and their clinical significance
 * - Disease correlations
 * - Multi-level complexity for learners at all stages
 *
 * NOTE: Content modules are planned for future implementation.
 */

/**
 * Physical Examination Systematic Approach
 */
export const PHYSICAL_EXAM_SEQUENCE = [
  'vital-signs',
  'general-survey',
  'heent',
  'neck',
  'cardiovascular',
  'respiratory',
  'abdominal',
  'musculoskeletal',
  'neurological',
  'skin',
] as const;

export type PhysicalExamSection = (typeof PHYSICAL_EXAM_SEQUENCE)[number];
