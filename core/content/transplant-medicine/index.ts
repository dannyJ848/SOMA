/**
 * Transplant Medicine Educational Content
 *
 * Comprehensive transplant medicine content covering:
 * - Organ Transplant Basics (principles, history, indications)
 * - Transplant Evaluation Process (medical, psychosocial, financial)
 * - Waitlist and Allocation (UNOS, prioritization, matching)
 * - Types of Organ Transplants (kidney, liver, heart, lung, pancreas, intestine)
 * - Living Donation (eligibility, risks, benefits, paired exchange)
 * - Immunosuppression Therapy (induction, maintenance, protocols)
 * - Rejection Recognition (hyperacute, acute, chronic, antibody-mediated)
 * - Post-Transplant Care (monitoring, complications, lifestyle)
 * - Long-Term Outcomes (survival, quality of life, complications)
 * - Bone Marrow Transplant (autologous, allogeneic, GVHD)
 *
 * Patient-focused education with multi-level complexity (5 tiers)
 */

// Content exports
export { organTransplantBasics } from './organ-transplant-basics';
export { transplantEvaluationProcess } from './transplant-evaluation-process';
export { waitlistAndAllocation } from './waitlist-and-allocation';
export { typesOfOrganTransplants } from './types-of-organ-transplants';
export { livingDonation } from './living-donation';
export { immunosuppressionTherapy } from './immunosuppression-therapy';
export { rejectionRecognition } from './rejection-recognition';
export { postTransplantCare } from './post-transplant-care';
export { longTermOutcomes } from './long-term-outcomes';
export { boneMarrowTransplant } from './bone-marrow-transplant';

// Transplant medicine database & utilities
export {
  TRANSPLANT_MEDICINE_ENTRIES,
  getAllTransplantEntries,
  getTransplantEntriesByCategory,
  searchTransplantEntries,
  getTransplantEntryById,
  getTransplantCategories,
} from './transplant-medicine-database';
export type { TransplantCategory, TransplantMedicineEntry } from './transplant-medicine-database';

// Content categories
export const TRANSPLANT_MEDICINE_CATEGORIES = [
  'fundamentals',
  'pre-transplant',
  'surgical-procedures',
  'living-donation',
  'immunology',
  'post-transplant',
  'hematologic-transplant',
  'outcomes',
] as const;

export type TransplantMedicineCategory = (typeof TRANSPLANT_MEDICINE_CATEGORIES)[number];

// All transplant medicine content items
export const TRANSPLANT_MEDICINE_CONTENT_IDS = [
  'concept-organ-transplant-basics',
  'process-transplant-evaluation',
  'process-waitlist-allocation',
  'concept-organ-transplant-types',
  'process-living-donation',
  'concept-immunosuppression-therapy',
  'condition-transplant-rejection',
  'process-post-transplant-care',
  'concept-long-term-outcomes',
  'process-bone-marrow-transplant',
] as const;
