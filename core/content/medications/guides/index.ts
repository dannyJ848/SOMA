/**
 * Medication Guides - Patient-Friendly Drug Information
 *
 * Comprehensive guides for the most commonly prescribed medications,
 * written at multiple reading levels with practical usage instructions.
 */

export { metforminGuideContent } from './metformin-guide';
export { lisinoprilGuideContent } from './lisinopril-guide';
export { amlodipineGuideContent } from './amlodipine-guide';
export { omeprazoleGuideContent } from './omeprazole-guide';
export { amoxicillinGuideContent } from './amoxicillin-guide';
export { ibuprofenGuideContent } from './ibuprofen-guide';
export { acetaminophenGuideContent } from './acetaminophen-guide';
export { albuterolGuideContent } from './albuterol-guide';
export { levothyroxineGuideContent } from './levothyroxine-guide';
export { prenatalVitaminsGuideContent } from './prenatal-vitamins-guide';
export { insulinGuideContent } from './insulin-guide';
export { birthControlPillsGuideContent } from './birth-control-pills-guide';
export { ironSupplementsGuideContent } from './iron-supplements-guide';
export { azithromycinGuideContent } from './azithromycin-guide';
export { antihistaminesGuideContent } from './antihistamines-guide';

export const MEDICATION_GUIDE_LIST = [
  'metformin', 'lisinopril', 'amlodipine', 'omeprazole', 'amoxicillin',
  'ibuprofen', 'acetaminophen', 'albuterol', 'levothyroxine', 'prenatal-vitamins',
  'insulin', 'birth-control-pills', 'iron-supplements', 'azithromycin', 'antihistamines',
] as const;
