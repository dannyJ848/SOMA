/**
 * Sports Medicine Educational Content
 *
 * Comprehensive content covering:
 * - Exercise physiology basics
 * - Common sports injuries (sprains, strains, tears)
 * - Concussion recognition and management
 * - Overuse injuries
 * - RICE and acute injury management
 * - Return to play guidelines
 * - Performance nutrition
 * - Hydration and heat illness
 * - Exercise prescription for chronic disease
 * - Injury prevention strategies
 *
 * All content available at 5 complexity levels for patient education.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Always consult with a healthcare provider
 * for diagnosis and treatment of injuries.
 */

// Exercise Physiology
export { exercisePhysiologyBasics } from './physiology/exercise-physiology-basics';
export { energySystems } from './physiology/energy-systems';
export { muscleAdaptations } from './physiology/muscle-adaptations';
export { cardiovascularAdaptations } from './physiology/cardiovascular-adaptations';

// Common Sports Injuries
export { ankleSprain } from './injuries/ankle-sprain';
export { muscleStrainsOverview } from './injuries/muscle-strains-overview';
export { aclTear } from './injuries/acl-tear';
export { rotatorCuffInjury } from './injuries/rotator-cuff-injury';
export { meniscusTear } from './injuries/meniscus-tear';

// Concussion
export { concussionRecognition } from './concussion/concussion-recognition';
export { concussionManagement } from './concussion/concussion-management';
export { postconcussionSyndrome } from './concussion/post-concussion-syndrome';

// Overuse Injuries
export { overuseInjuriesOverview } from './overuse/overuse-injuries-overview';
export { tendinopathy } from './overuse/tendinopathy';
export { stressFractures } from './overuse/stress-fractures';
export { shinsplints } from './overuse/shin-splints';

// Acute Injury Management
export { riceProtocol } from './acute-management/rice-protocol';
export { acuteInjuryAssessment } from './acute-management/acute-injury-assessment';
export { fracturePrinciples } from './acute-management/fracture-principles';

// Return to Play
export { returnToPlayPrinciples } from './return-to-play/return-to-play-principles';
export { returnToPlayProtocols } from './return-to-play/return-to-play-protocols';
export { functionalTestingCriteria } from './return-to-play/functional-testing-criteria';

// Performance Nutrition
export { sportsNutritionBasics } from './nutrition/sports-nutrition-basics';
export { macronutrientsForAthletes } from './nutrition/macronutrients-for-athletes';
export { supplementsInSport } from './nutrition/supplements-in-sport';

// Hydration and Heat Illness
export { hydrationForExercise } from './hydration/hydration-for-exercise';
export { heatIllness } from './hydration/heat-illness';
export { exerciseInExtremes } from './hydration/exercise-in-extremes';

// Exercise Prescription
export { exercisePrescriptionPrinciples } from './exercise-prescription/exercise-prescription-principles';
export { exerciseForDiabetes } from './exercise-prescription/exercise-for-diabetes';
export { exerciseForCardiovascular } from './exercise-prescription/exercise-for-cardiovascular';
export { exerciseForObesity } from './exercise-prescription/exercise-for-obesity';

// Injury Prevention
export { injuryPreventionPrinciples } from './prevention/injury-prevention-principles';
export { warmupAndCooldown } from './prevention/warmup-and-cooldown';
export { flexibilityAndMobility } from './prevention/flexibility-and-mobility';
export { strengthTrainingForInjuryPrevention } from './prevention/strength-training-for-injury-prevention';

// Types
export * from './types';

// Content categories
export const SPORTS_MEDICINE_CATEGORIES = [
  'physiology',
  'injuries',
  'concussion',
  'overuse',
  'acute-management',
  'return-to-play',
  'nutrition',
  'hydration',
  'exercise-prescription',
  'prevention',
] as const;

export type SportsMedicineCategory = (typeof SPORTS_MEDICINE_CATEGORIES)[number];
