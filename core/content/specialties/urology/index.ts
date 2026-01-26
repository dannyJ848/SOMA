/**
 * Urology Specialty Educational Content
 *
 * Comprehensive urology content covering:
 * - Urinary tract anatomy
 * - Urinary tract infections (UTIs)
 * - Kidney stones (nephrolithiasis)
 * - Benign prostatic hyperplasia (BPH)
 * - Prostate cancer screening
 * - Bladder conditions (overactive bladder, incontinence)
 * - Erectile dysfunction
 * - Male infertility
 * - Testicular conditions
 * - Common urological procedures
 *
 * Physician-level detail with multi-level complexity (5 tiers)
 */

// Anatomy
export { urinaryTractAnatomy } from './urinary-tract-anatomy';

// Infectious conditions
export { urinaryTractInfections } from './urinary-tract-infections';

// Stone disease
export { kidneyStones } from './kidney-stones';

// Prostate conditions
export { benignProstaticHyperplasia } from './benign-prostatic-hyperplasia';
export { prostateCancerScreening } from './prostate-cancer-screening';

// Bladder conditions
export { bladderConditions } from './bladder-conditions';

// Sexual and reproductive health
export { erectileDysfunction } from './erectile-dysfunction';
export { maleInfertility } from './male-infertility';

// Testicular conditions
export { testicularConditions } from './testicular-conditions';

// Procedures
export { urologicalProcedures } from './urological-procedures';

// Content categories
export const UROLOGY_CATEGORIES = [
  'anatomy',
  'infectious-disease',
  'stone-disease',
  'prostate-conditions',
  'bladder-conditions',
  'sexual-health',
  'reproductive-health',
  'testicular-conditions',
  'procedures',
] as const;

export type UrologyCategory = (typeof UROLOGY_CATEGORIES)[number];

// All urology content items
export const UROLOGY_CONTENT_IDS = [
  'structure-urinary-tract-anatomy',
  'condition-urinary-tract-infections',
  'condition-kidney-stones',
  'condition-benign-prostatic-hyperplasia',
  'concept-prostate-cancer-screening',
  'condition-bladder-conditions',
  'condition-erectile-dysfunction',
  'condition-male-infertility',
  'condition-testicular-conditions',
  'process-urological-procedures',
] as const;

// Specialty metadata
export const urologyContent = {
  specialty: 'urology',
  topics: [
    'urinary-tract-anatomy',
    'urinary-tract-infections',
    'kidney-stones',
    'benign-prostatic-hyperplasia',
    'prostate-cancer-screening',
    'bladder-conditions',
    'erectile-dysfunction',
    'male-infertility',
    'testicular-conditions',
    'urological-procedures',
  ],
};
