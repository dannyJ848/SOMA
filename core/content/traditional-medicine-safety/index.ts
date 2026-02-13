/**
 * Traditional Medicine Safety Content Module
 *
 * Educational content on safely using traditional and herbal remedies,
 * identifying dangerous practices, and integrating traditional medicine
 * with conventional healthcare.
 */

export { curanderismoPracticesSafetyContent } from './curanderismo-practices-safety';
export { herbalRemedyInteractionsContent } from './herbal-remedy-interactions';
export { leadInRemediesAzarconGretaContent } from './lead-in-remedies-azarcon-greta';
export { combiningTraditionalWesternContent } from './combining-traditional-western';
export { mercuryInPracticesContent } from './mercury-in-practices';
export { safeVsDangerousRemediesContent } from './safe-vs-dangerous-remedies';
export { commonHerbalRemediesGuideContent } from './common-herbal-remedies-guide';
export { whenToSeekMedicalCareContent } from './when-to-seek-medical-care';
export { talkingToDoctorAboutRemediesContent } from './talking-to-doctor-about-remedies';

export const TRADITIONAL_MEDICINE_SAFETY_CATEGORIES = [
  'curanderismo-practices-safety',
  'herbal-remedy-interactions',
  'lead-in-remedies-azarcon-greta',
  'combining-traditional-western',
  'mercury-in-practices',
  'safe-vs-dangerous-remedies',
  'common-herbal-remedies-guide',
  'when-to-seek-medical-care',
  'talking-to-doctor-about-remedies',
] as const;

export type TraditionalMedicineSafetyCategory = (typeof TRADITIONAL_MEDICINE_SAFETY_CATEGORIES)[number];
