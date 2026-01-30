/**
 * Anesthesia Content Module
 *
 * Comprehensive educational content covering all aspects of anesthesia
 * including types, techniques, risks, and special populations.
 *
 * This module provides educational content across five complexity levels:
 * - Level 1: 8th Grade (simple analogies, everyday language)
 * - Level 2: High School (basic medical terminology)
 * - Level 3: College (full terminology, mechanisms)
 * - Level 4: Graduate (detailed pathophysiology)
 * - Level 5: MD/Professional (clinical correlations, current research)
 */

import { anesthesiaBasicsContent as basics } from './basics';
import { generalAnesthesiaContent as generalAnesthesia } from './general-anesthesia';
import { regionalAnesthesiaContent as regionalAnesthesia } from './regional-anesthesia';
import { localAnesthesiaContent as localAnesthesia } from './local-anesthesia';
import { sedationContent as sedation } from './sedation';
import { anesthesiaRisksContent as risks } from './anesthesia-risks';
import { preoperativeEvaluationContent as preoperativeEvaluation } from './preoperative-evaluation';
import { postoperativeCareContent as postoperativeCare } from './postoperative-care';
import { specialPopulationsContent as specialPopulations } from './special-populations';

export { anesthesiaBasicsContent as basics } from './basics';
export { generalAnesthesiaContent as generalAnesthesia } from './general-anesthesia';
export { regionalAnesthesiaContent as regionalAnesthesia } from './regional-anesthesia';
export { localAnesthesiaContent as localAnesthesia } from './local-anesthesia';
export { sedationContent as sedation } from './sedation';
export { anesthesiaRisksContent as risks } from './anesthesia-risks';
export { preoperativeEvaluationContent as preoperativeEvaluation } from './preoperative-evaluation';
export { postoperativeCareContent as postoperativeCare } from './postoperative-care';
export { specialPopulationsContent as specialPopulations } from './special-populations';

// Anesthesia database
export type { AnesthesiaCategory, AnesthesiaEntry } from './anesthesia-database';
export {
  ANESTHESIA_ENTRIES,
  getAllAnesthesiaEntries,
  getAnesthesiaEntryById,
  searchAnesthesiaEntries,
  filterByCategory,
  filterAnesthesiaEntries,
  getAnesthesiaDatabaseCategories,
  getAnesthesiaEntryCounts,
} from './anesthesia-database';

/**
 * Anesthesia module exports
 *
 * Available content files:
 * - basics: Overview of anesthesia types and goals
 * - generalAnesthesia: Induction, maintenance, emergence
 * - regionalAnesthesia: Spinal, epidural, nerve blocks
 * - localAnesthesia: Topical, infiltration, field blocks
 * - sedation: Minimal, moderate, deep sedation levels
 * - risks: Common complications and prevention
 * - preoperativeEvaluation: ASA classification, risk assessment
 * - postoperativeCare: PACU, recovery criteria
 * - specialPopulations: Pediatric, geriatric, obstetric anesthesia
 *
 * All content follows the EducationalContent interface from ../types
 * and cites American Society of Anesthesiologists (ASA) guidelines.
 *
 * @module anesthesia
 */

// Re-export all content for convenience
export const content = {
  basics,
  generalAnesthesia,
  regionalAnesthesia,
  localAnesthesia,
  sedation,
  risks,
  preoperativeEvaluation,
  postoperativeCare,
  specialPopulations,
};

// Default export for module loading
export default content;
