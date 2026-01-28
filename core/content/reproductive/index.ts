/**
 * Reproductive System Educational Content
 *
 * Comprehensive content covering:
 * - Clinical: Fertility evaluation, contraception, menstrual disorders
 * - Histology: Ovary, testis, and uterus microscopic anatomy
 * - Pathology: Breast, female, male, pregnancy, and STI conditions
 * - Physiology: Menstrual cycle, spermatogenesis, pregnancy physiology
 *
 * Total: 23 content modules across 8 subdirectories
 */

// Clinical content (3 files)
export { fertilityEvaluation } from './clinical/fertility-evaluation';
export { contraceptionMethods } from './clinical/contraception-methods';
export { menstrualDisorders } from './clinical/menstrual-disorders';

// Histology content (3 files)
export { ovaryHistology } from './histology/ovary-histology';
export { testisHistology } from './histology/testis-histology';
export { uterusHistology } from './histology/uterus-histology';

// Pathology - Breast (2 files)
export { breastCancerPathology } from './pathology/breast/breast-cancer-pathology';
export { benignBreastConditions } from './pathology/breast/benign-breast-conditions';

// Pathology - Female (3 files)
export { ovarianCancer } from './pathology/female/ovarian-cancer';
export { cervicalPathology } from './pathology/female/cervical-pathology';
export { endometrialCancer } from './pathology/female/endometrial-cancer';

// Pathology - Male (3 files)
export { prostateCancer } from './pathology/male/prostate-cancer';
export { testicularCancer } from './pathology/male/testicular-cancer';
export { maleInfertilityContent as maleInfertility } from './pathology/male/male-infertility';

// Pathology - Pregnancy (3 files)
export { preeclampsiaContent as preeclampsia } from './pathology/pregnancy/preeclampsia';
export { ectopicPregnancy } from './pathology/pregnancy/ectopic-pregnancy';
export { gestationalDiabetes } from './pathology/pregnancy/gestational-diabetes';

// Pathology - STI (3 files)
export { chlamydiaGonorrhea } from './pathology/sti/chlamydia-gonorrhea';
export { hpvPathology } from './pathology/sti/hpv-pathology';
export { syphilisHiv } from './pathology/sti/syphilis-hiv';

// Physiology content (3 files)
export { menstrualCycleContent } from './physiology/menstrual-cycle';
export { spermatogenesis } from './physiology/spermatogenesis';
export { pregnancyPhysiology } from './physiology/pregnancy-physiology';

// Content registry for module enumeration
export const REPRODUCTIVE_CONTENT_MODULES = [
  // Clinical (3)
  'fertility-evaluation',
  'contraception-methods',
  'menstrual-disorders',
  // Histology (3)
  'ovary-histology',
  'testis-histology',
  'uterus-histology',
  // Pathology - Breast (2)
  'breast-cancer-pathology',
  'benign-breast-conditions',
  // Pathology - Female (3)
  'ovarian-cancer',
  'cervical-pathology',
  'endometrial-cancer',
  // Pathology - Male (3)
  'prostate-cancer',
  'testicular-cancer',
  'male-infertility',
  // Pathology - Pregnancy (3)
  'preeclampsia',
  'ectopic-pregnancy',
  'gestational-diabetes',
  // Pathology - STI (3)
  'chlamydia-gonorrhea',
  'hpv-pathology',
  'syphilis-hiv',
  // Physiology (3)
  'menstrual-cycle',
  'spermatogenesis',
  'pregnancy-physiology',
] as const;

export type ReproductiveContentModule = (typeof REPRODUCTIVE_CONTENT_MODULES)[number];

// Directory structure
export const REPRODUCTIVE_DIRECTORIES = {
  clinical: 3,
  histology: 3,
  'pathology/breast': 2,
  'pathology/female': 3,
  'pathology/male': 3,
  'pathology/pregnancy': 3,
  'pathology/sti': 3,
  physiology: 3,
} as const;

// Total count
export const REPRODUCTIVE_TOTAL_MODULES = 23;
