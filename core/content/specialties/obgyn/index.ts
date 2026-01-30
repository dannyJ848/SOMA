/**
 * OB/GYN Specialty Educational Content
 *
 * Comprehensive coverage of obstetrics and gynecology including:
 * - Female Reproductive Anatomy: Uterus, ovaries, fallopian tubes, cervix, vagina
 * - Menstrual Cycle Physiology: Hormonal regulation, ovarian and uterine cycles
 * - Contraception Options: Hormonal, barrier, IUDs, permanent methods
 * - Pregnancy Stages and Fetal Development: Embryology through term
 * - Prenatal Care and Testing: Screening, diagnostics, monitoring
 * - Labor and Delivery: Stages of labor, interventions, complications
 * - Common Gynecological Conditions: Fibroids, endometriosis, PCOS
 * - Menopause Management: Physiology, symptoms, treatment options
 * - Gynecological Cancers: Ovarian, uterine, cervical, vulvar
 * - Cervical Cancer Screening: Pap smear, HPV testing, guidelines
 *
 * Content is physician-level for patient education with multi-level complexity.
 */

// Anatomy
export { femaleReproductiveAnatomy } from './anatomy/female-reproductive-anatomy';
export { uterusAnatomy } from './anatomy/uterus';
export { ovariesAnatomy } from './anatomy/ovaries';
export { fallopianTubesAnatomy } from './anatomy/fallopian-tubes';
export { cervixAnatomy } from './anatomy/cervix';
export { vaginaAnatomy } from './anatomy/vagina';
export { vulvaAnatomy } from './anatomy/vulva';

// Physiology
export { menstrualCyclePhysiology } from './physiology/menstrual-cycle';
export { ovarianCycleContent } from './physiology/ovarian-cycle';
export { uterineCycleContent } from './physiology/uterine-cycle';
export { hormonalRegulationContent } from './physiology/hormonal-regulation';

// Contraception
export { contraceptionOverview } from './contraception/contraception-overview';
export { hormonalContraception } from './contraception/hormonal-contraception';
export { intrauterineDevices } from './contraception/intrauterine-devices';
export { barrierMethods } from './contraception/barrier-methods';
export { permanentContraception } from './contraception/permanent-methods';
export { emergencyContraception } from './contraception/emergency-contraception';

// Pregnancy and Fetal Development
export { pregnancyOverview } from './pregnancy/pregnancy-overview';
export { firstTrimesterDevelopment } from './pregnancy/first-trimester';
export { secondTrimesterDevelopment } from './pregnancy/second-trimester';
export { thirdTrimesterDevelopment } from './pregnancy/third-trimester';
export { fetalDevelopmentContent } from './pregnancy/fetal-development';
export { placentaPhysiology } from './pregnancy/placenta';

// Prenatal Care
export { prenatalCareOverview } from './prenatal/prenatal-care-overview';
export { prenatalScreeningContent } from './prenatal/prenatal-screening';
export { prenatalDiagnosticsContent } from './prenatal/prenatal-diagnostics';
export { prenatalMonitoringContent } from './prenatal/fetal-monitoring';
export { prenatalNutritionContent } from './prenatal/nutrition';

// Labor and Delivery
export { laborOverview } from './labor-delivery/labor-overview';
export { stagesOfLabor } from './labor-delivery/stages-of-labor';
export { laborInduction } from './labor-delivery/labor-induction';
export { cesareanDelivery } from './labor-delivery/cesarean-delivery';
export { laborComplications } from './labor-delivery/complications';
export { postpartumCare } from './labor-delivery/postpartum-care';

// Common Gynecological Conditions
export { uterineFibroids } from './conditions/uterine-fibroids';
export { endometriosis } from './conditions/endometriosis';
export { polycysticOvarySyndrome } from './conditions/pcos';
export { abnormalUterineBleeding } from './conditions/abnormal-uterine-bleeding';
export { pelvicInflammatoryDisease } from './conditions/pelvic-inflammatory-disease';

// Menopause
export { menopauseOverview } from './menopause/menopause-overview';
export { perimenopause } from './menopause/perimenopause';
export { hormoneReplacementTherapy } from './menopause/hormone-therapy';
export { menopauseSymptomManagement } from './menopause/symptom-management';

// Gynecologic Oncology
export { ovariancancerContent } from './gynecologic-oncology/ovarian-cancer';
export { uterineCancerContent } from './gynecologic-oncology/uterine-cancer';
export { cervicalCancerContent } from './gynecologic-oncology/cervical-cancer';
export { vulvarCancerContent } from './gynecologic-oncology/vulvar-cancer';

// Screening
export { cervicalCancerScreening } from './screening/cervical-cancer-screening';
export { papSmearContent } from './screening/pap-smear';
export { hpvTestingContent } from './screening/hpv-testing';
export { breastCancerScreeningContent } from './screening/breast-cancer-screening';

// OB/GYN Clinical Database
export {
  OBGYN_ENTRIES,
  getOBGYNEntry,
  searchOBGYN,
  getOBGYNBySubcategory,
  getOBGYNCount,
} from './obgyn-database';
export type { OBGYNEntry, OBGYNSubcategory } from './obgyn-database';

// Content categories
export const OBGYN_CATEGORIES = [
  'anatomy',
  'physiology',
  'contraception',
  'pregnancy',
  'prenatal-care',
  'labor-delivery',
  'gynecological-conditions',
  'menopause',
  'gynecologic-oncology',
  'screening',
] as const;

export type ObgynCategory = (typeof OBGYN_CATEGORIES)[number];

// All OB/GYN content metadata
export const obgynContent = {
  specialty: 'obgyn',
  displayName: 'Obstetrics and Gynecology',
  categories: OBGYN_CATEGORIES,
  topics: [
    'female-reproductive-anatomy',
    'menstrual-cycle',
    'contraception',
    'pregnancy',
    'fetal-development',
    'prenatal-care',
    'labor-delivery',
    'fibroids',
    'endometriosis',
    'pcos',
    'menopause',
    'gynecologic-cancers',
    'cervical-screening',
  ],
};
