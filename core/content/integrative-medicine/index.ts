/**
 * Integrative Medicine Educational Content
 *
 * Comprehensive content empowering patients to evaluate complementary approaches:
 * - Evidence-Based Complementary Therapies: What research actually shows
 * - Acupuncture: Mechanisms, evidence, and appropriate use
 * - Massage Therapy: Benefits, limitations, and contraindications
 * - Mind-Body Practices: Meditation, yoga, tai chi evidence
 * - Herbal Supplements: Evidence, interactions, and safety
 * - Nutrition and Supplements: Science vs marketing
 * - Chiropractic Care: Evidence and appropriate applications
 * - When Alternative Therapies Help vs Harm: Critical evaluation
 * - Discussing with Your Doctor: Communication strategies
 * - Red Flags for Quackery: Protecting yourself from fraud
 *
 * All content follows the 5-level complexity model for accessibility.
 */

// Evidence-Based Complementary Therapies Overview
export { evidenceBasedComplementaryTherapies } from './evidence-based-complementary-therapies';

// Acupuncture
export { acupunctureContent } from './acupuncture';

// Massage Therapy
export { massageTherapyContent } from './massage-therapy';

// Mind-Body Practices
export { mindBodyPracticesContent } from './mind-body-practices';

// Herbal Supplements
export { herbalSupplementsContent } from './herbal-supplements';

// Nutrition and Supplements
export { nutritionSupplementsContent } from './nutrition-supplements';

// Chiropractic Care
export { chiropracticCareContent } from './chiropractic-care';

// When Alternative Therapies Help vs Harm
export { alternativeTherapiesEvaluation } from './alternative-therapies-evaluation';

// Discussing with Your Doctor
export { discussingWithDoctor } from './discussing-with-doctor';

// Red Flags for Quackery
export { redFlagsQuackery } from './red-flags-quackery';

// Integrative Medicine Structured Database
export {
  INTEGRATIVE_MEDICINE_ENTRIES,
  searchIntegrativeMedicine,
  filterByCategory,
  getCategorySummary,
  getEntryById,
} from './integrative-medicine-database';
export type {
  IntegrativeCategory,
  IntegrativeMedicineEntry,
} from './integrative-medicine-database';

// Content categories
export const INTEGRATIVE_MEDICINE_CATEGORIES = [
  'evidence-overview',
  'acupuncture',
  'massage',
  'mind-body',
  'herbal',
  'nutrition',
  'chiropractic',
  'evaluation',
  'communication',
  'safety',
] as const;

export type IntegrativeMedicineCategory = (typeof INTEGRATIVE_MEDICINE_CATEGORIES)[number];

// All integrative medicine content for bulk operations
export const getAllIntegrativeMedicineContent = async () => {
  const modules = await Promise.all([
    import('./evidence-based-complementary-therapies'),
    import('./acupuncture'),
    import('./massage-therapy'),
    import('./mind-body-practices'),
    import('./herbal-supplements'),
    import('./nutrition-supplements'),
    import('./chiropractic-care'),
    import('./alternative-therapies-evaluation'),
    import('./discussing-with-doctor'),
    import('./red-flags-quackery'),
  ]);

  return modules.map((m) => m.default);
};

// Utility types for integrative medicine content
export interface TherapyEvidence {
  condition: string;
  evidenceLevel: 'strong' | 'moderate' | 'weak' | 'insufficient' | 'negative';
  summary: string;
  keyStudies?: string[];
}

export interface DrugInteraction {
  substance: string;
  interactsWith: string[];
  mechanism: string;
  severity: 'major' | 'moderate' | 'minor';
  recommendation: string;
}

export interface SafetyProfile {
  commonSideEffects: string[];
  seriousRisks: string[];
  contraindications: string[];
  specialPopulations: {
    pregnancy: string;
    nursing: string;
    elderly: string;
    children: string;
  };
}
