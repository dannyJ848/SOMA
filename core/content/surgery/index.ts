/**
 * Surgery Educational Content
 *
 * Comprehensive surgical content for patient education, covering the full
 * surgical journey from pre-operative preparation through recovery.
 *
 * Content Categories:
 * - Pre-Operative: Evaluation, preparation, informed consent
 * - Anesthesia: Types, risks, what to expect
 * - Procedures: Common surgical procedures overview
 * - Post-Operative: Recovery, care instructions, milestones
 * - Complications: Recognition, prevention, management
 * - Wound Care: Healing stages, sutures, dressings
 * - Equipment: Drains, tubes, surgical devices
 * - Decision-Making: Surgery vs conservative treatment
 * - Techniques: Minimally invasive approaches
 *
 * All content supports 5 complexity levels:
 * Level 1: 8th Grade (simple language, analogies)
 * Level 2: High School (basic medical terminology)
 * Level 3: College (full terminology, mechanisms)
 * Level 4: Graduate (detailed pathophysiology)
 * Level 5: MD/Professional (clinical correlations)
 */

// Type definitions
export * from './types';

// Pre-Operative Content
export { preOperativeEvaluation } from './pre-operative-evaluation';

// Anesthesia Content
export { anesthesiaTypes } from './anesthesia-types';

// Procedures
export { commonSurgicalProcedures } from './common-surgical-procedures';

// Post-Operative Care
export { postOperativeCare } from './post-operative-care';

// Complications
export { surgicalComplications } from './surgical-complications';

// Wound Healing
export { woundHealing } from './wound-healing';

// Sutures and Wound Care
export { suturesAndWoundCare } from './sutures-and-wound-care';

// Surgical Drains
export { surgicalDrains } from './surgical-drains';

// Surgery Database (comprehensive reference entries with search utilities)
export {
  SURGERY_ENTRIES,
  getAllSurgeryEntries,
  getSurgeryEntryById,
  getSurgeryEntriesByCategory,
  searchSurgeryEntries,
  filterSurgeryEntries,
  getSurgeryDatabaseCategories,
  getSurgeryEntryCounts,
} from './surgery-database';
export type { SurgeryDatabaseCategory, SurgeryEntry } from './surgery-database';

// Surgery vs Conservative Treatment
export { surgeryVsConservative } from './surgery-vs-conservative';

// Minimally Invasive Surgery
export { minimallyInvasiveSurgery } from './minimally-invasive-surgery';

// Content registry for discovery
export const SURGERY_CATEGORIES = [
  'preparation',
  'anesthesia',
  'procedures',
  'post-operative',
  'complications',
  'wound-care',
  'equipment',
  'decision-making',
] as const;

export type SurgeryCategory = (typeof SURGERY_CATEGORIES)[number];

// All surgery content for easy access
export const ALL_SURGERY_CONTENT = [
  'pre-operative-evaluation',
  'anesthesia-types',
  'common-surgical-procedures',
  'post-operative-care',
  'surgical-complications',
  'wound-healing',
  'sutures-and-wound-care',
  'surgical-drains',
  'surgery-vs-conservative',
  'minimally-invasive-surgery',
] as const;

/**
 * Educational context for surgery content
 */
export const SURGERY_CONTEXT = {
  purpose: `This content helps patients understand surgical procedures, preparation,
recovery, and potential complications. It is educational only and does not
replace professional medical advice from your surgical team.`,

  disclaimer: `Always consult your surgeon, anesthesiologist, and healthcare team for
medical advice specific to your procedure. If you experience concerning symptoms
after surgery such as fever, severe pain, heavy bleeding, or difficulty breathing,
seek immediate medical attention. This information is meant to help you be an
informed participant in your surgical care.`,

  howToUse: `
1. Select your understanding level (1-5) based on your background
2. Review content relevant to your stage of the surgical journey
3. Prepare questions for your surgical team based on what you learn
4. Refer to post-operative instructions from your care team
5. Use this knowledge to recognize when to seek help
`,

  forPatients: `Understanding surgery can help you:
- Know what to expect before, during, and after your procedure
- Follow preparation instructions correctly
- Recognize normal recovery vs. warning signs
- Participate actively in your care and recovery
- Ask informed questions of your healthcare team`,

  forStudents: `This content provides a framework for surgical education:
- Systematic approaches to perioperative care
- Evidence-based practices and guidelines
- Complication recognition and management
- Surgical decision-making frameworks`,
};
