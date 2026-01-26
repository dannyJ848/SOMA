/**
 * Women's Health Educational Content
 *
 * Comprehensive patient education content covering:
 * - Reproductive Health: Menstrual cycle, disorders, contraception, fertility, menopause
 * - Pregnancy: Preconception, prenatal care, symptoms, warning signs, delivery, postpartum
 * - Breast Health: Self-exam, mammograms, conditions, cancer risk factors
 * - Gynecologic Conditions: Pelvic pain, PCOS, endometriosis, fibroids, vaginitis, cervical health
 * - Bone Health: Osteoporosis prevention, calcium/vitamin D, bone density testing
 * - Mental Health: Postpartum depression, premenstrual disorders, perimenopause mood changes
 *
 * Content is structured for OB/GYN patient counseling with multi-level complexity (1-5).
 */

// Menstrual Health
export * from './menstrual-health';
export { menstrualCycle } from './menstrual-health/menstrual-cycle';
export { menstrualDisorders as menstrualHealthDisorders } from './menstrual-health/menstrual-disorders';
export { pms } from './menstrual-health/pms';
export { pmdd } from './menstrual-health/pmdd';
export { amenorrhea } from './menstrual-health/amenorrhea';
export { menorrhagia } from './menstrual-health/menorrhagia';
export { dysmenorrhea } from './menstrual-health/dysmenorrhea';

// Fertility
export * from './fertility';
export { fertilityOverview } from './fertility/fertility-overview';
export { infertility } from './fertility/infertility';
export { fertilityTreatments } from './fertility/fertility-treatments';
export { ivf } from './fertility/ivf';
export { contraception } from './fertility/contraception';
export { contraceptiveMethods } from './fertility/contraceptive-methods';

// Reproductive Health (legacy)
export * from './reproductive-health';
export { menstrualCycleExplained } from './reproductive-health/menstrual-cycle-explained';
export { menstrualDisorders } from './reproductive-health/menstrual-disorders';
export { contraceptionOptions } from './reproductive-health/contraception-options';
export { fertilityBasics } from './reproductive-health/fertility-basics';
export { menopauseTransition } from './reproductive-health/menopause-transition';

// Pregnancy
export * from './pregnancy';
export { preconceptionCare } from './pregnancy/preconception-care';
export { prenatalCareSchedule } from './pregnancy/prenatal-care-schedule';
export { commonPregnancySymptoms } from './pregnancy/common-pregnancy-symptoms';
export { warningSingsInPregnancy } from './pregnancy/warning-signs-in-pregnancy';
export { laborAndDeliveryOverview } from './pregnancy/labor-and-delivery-overview';
export { postpartumCare } from './pregnancy/postpartum-care';

// Breast Health
export * from './breast-health';
export { breastSelfExam } from './breast-health/breast-self-exam';
export { mammogramGuidelines } from './breast-health/mammogram-guidelines';
export { breastConditions } from './breast-health/breast-conditions';
export { breastCancerRiskFactors } from './breast-health/breast-cancer-risk-factors';
export { breastAnatomy } from './breast-health/breast-anatomy';
export { breastExam } from './breast-health/breast-exam';
export { breastCancerScreening } from './breast-health/breast-cancer-screening';
export { mastalgia } from './breast-health/mastalgia';
export { lactation } from './breast-health/lactation';

// Reproductive Conditions
export * from './reproductive-conditions';
export { pcos } from './reproductive-conditions/pcos';
export { endometriosis } from './reproductive-conditions/endometriosis';
export { fibroids } from './reproductive-conditions/fibroids';
export { ovarianCysts } from './reproductive-conditions/ovarian-cysts';
export { pelvicInflammatoryDisease } from './reproductive-conditions/pelvic-inflammatory-disease';

// Gynecologic Conditions
export * from './gynecologic-conditions';
export { pelvicPain } from './gynecologic-conditions/pelvic-pain';
export { pcosContent } from './gynecologic-conditions/pcos';
export { endometriosisContent } from './gynecologic-conditions/endometriosis';
export { uterineFibroidsContent } from './gynecologic-conditions/fibroids';
export { vaginitisContent } from './gynecologic-conditions/vaginitis';
export { cervicalHealthPapSmears } from './gynecologic-conditions/cervical-health-pap-smears';

// Bone Health
export * from './bone-health';
export { osteoporosisPrevention } from './bone-health/osteoporosis-prevention';
export { calciumVitaminD } from './bone-health/calcium-vitamin-d';
export { boneDensityTesting } from './bone-health/bone-density-testing';

// Mental Health
export * from './mental-health';
export { postpartumDepression } from './mental-health/postpartum-depression';
export { premenstrualDisorders } from './mental-health/premenstrual-disorders';
export { perimenopauseMoodChanges } from './mental-health/perimenopause-mood-changes';

// Content categories
export const WOMENS_HEALTH_CATEGORIES = [
  'menstrual-health',
  'fertility',
  'pregnancy',
  'breast-health',
  'reproductive-conditions',
  'reproductive-health',
  'gynecologic-conditions',
  'bone-health',
  'mental-health',
] as const;

export type WomensHealthCategory = (typeof WOMENS_HEALTH_CATEGORIES)[number];

// All Women's Health content metadata
export const womensHealthContent = {
  specialty: 'womens-health',
  displayName: "Women's Health",
  categories: WOMENS_HEALTH_CATEGORIES,
  topics: [
    // Menstrual Health
    'menstrual-cycle',
    'menstrual-disorders',
    'pms',
    'pmdd',
    'amenorrhea',
    'menorrhagia',
    'dysmenorrhea',
    // Fertility
    'fertility-overview',
    'infertility',
    'fertility-treatments',
    'ivf',
    'contraception',
    'contraceptive-methods',
    // Pregnancy
    'preconception',
    'prenatal-care',
    'pregnancy-symptoms',
    'pregnancy-warning-signs',
    'labor-delivery',
    'postpartum',
    // Breast Health
    'breast-anatomy',
    'breast-exam',
    'breast-cancer-screening',
    'mastalgia',
    'lactation',
    'breast-self-exam',
    'mammogram',
    'breast-conditions',
    'breast-cancer-risk',
    // Reproductive Conditions
    'pcos',
    'endometriosis',
    'fibroids',
    'ovarian-cysts',
    'pelvic-inflammatory-disease',
    // Gynecologic Conditions
    'pelvic-pain',
    'vaginitis',
    'cervical-health',
    'pap-smear',
    // Bone Health
    'osteoporosis',
    'calcium-vitamin-d',
    'bone-density',
    // Mental Health
    'postpartum-depression',
    'pmdd',
    'perimenopause-mood',
    // Reproductive Health (legacy)
    'contraception',
    'fertility',
    'menopause',
  ],
};
