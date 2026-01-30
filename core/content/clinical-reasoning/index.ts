/**
 * Clinical Reasoning Educational Content
 *
 * Comprehensive clinical reasoning content for patient education, helping
 * people understand how healthcare providers evaluate symptoms and make
 * diagnostic and treatment decisions.
 *
 * Content Categories:
 * - Diagnostic Algorithms: Step-by-step approaches to common presentations
 * - History-Taking Frameworks: OLDCARTS, OPQRST, and other mnemonics
 * - Physical Examination: Systematic examination approaches
 * - Red Flags: Warning signs requiring urgent attention
 * - Urgent Referrals: When and why to seek specialist care
 * - Differential Diagnosis: Frameworks for thinking through possibilities
 * - Diagnostic Reasoning: How doctors think through diagnoses
 * - Clinical Decision Making: Making treatment decisions
 * - Evidence-Based Medicine: Using research in practice
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

// Diagnostic Algorithms
export * from './diagnostic-algorithms';

// History-Taking Frameworks
export * from './history-taking';

// Physical Examination Approaches
export * from './physical-examination';

// Red Flags
export * from './red-flags';

// Urgent Referral Guidelines
export * from './urgent-referrals';

// Differential Diagnosis Frameworks
export * from './differential-diagnosis';

// Core Clinical Reasoning Content
export { diagnosticReasoningContent } from './diagnostic-reasoning';
export { clinicalDecisionMakingContent } from './clinical-decision-making';
export { evidenceBasedMedicineContent } from './evidence-based-medicine';

// Clinical Reasoning Database
export {
  clinicalReasoningDatabase,
  searchClinicalReasoningEntries,
  filterByCategory,
  getEntryById,
} from './clinical-reasoning-database';
export type {
  ClinicalReasoningCategory as ClinicalReasoningDatabaseCategory,
  ClinicalReasoningEntry,
} from './clinical-reasoning-database';

// Content registry for discovery
export const CLINICAL_REASONING_CATEGORIES = [
  'diagnostic-algorithms',
  'history-taking',
  'physical-examination',
  'red-flags',
  'urgent-referrals',
  'differential-diagnosis',
  'diagnostic-reasoning',
  'clinical-decision-making',
  'evidence-based-medicine',
] as const;

export type ClinicalReasoningCategory = (typeof CLINICAL_REASONING_CATEGORIES)[number];

/**
 * Educational context for clinical reasoning content
 */
export const CLINICAL_REASONING_CONTEXT = {
  purpose: `This content helps patients understand how healthcare providers evaluate
symptoms and make diagnostic decisions. It is educational only and does not
replace professional medical advice, diagnosis, or treatment.`,

  disclaimer: `Always consult a qualified healthcare provider for medical concerns.
If you experience symptoms described as "red flags" or requiring urgent attention,
seek immediate medical care. This information is meant to help you be an informed
participant in your healthcare, not to self-diagnose or self-treat.`,

  howToUse: `
1. Select your understanding level (1-5) based on your background
2. Review the overview to understand the clinical approach
3. Follow algorithms or frameworks as educational guides
4. Note red flags that should prompt immediate medical attention
5. Use this knowledge to better communicate with your healthcare team
`,

  forPatients: `Understanding how doctors think about symptoms can help you:
- Know what information is important to share with your doctor
- Understand why certain questions are asked
- Recognize when symptoms need urgent attention
- Be a more active participant in your healthcare decisions`,

  forStudents: `This content provides a framework for clinical reasoning:
- Systematic approaches to common presentations
- Key historical and physical exam findings
- Red flags that change management
- Evidence-based decision rules where available`,
};
