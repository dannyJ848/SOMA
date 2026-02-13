/**
 * Rehabilitation Medicine Educational Content
 *
 * Comprehensive content covering:
 * - Physical therapy principles and modalities
 * - Occupational therapy and ADL training
 * - Speech-language pathology
 * - Stroke rehabilitation
 * - Cardiac rehabilitation
 * - Pulmonary rehabilitation
 * - Post-surgical rehabilitation
 * - Assistive devices and mobility aids
 * - Disability and functional assessment
 * - Return to work/activity planning
 *
 * All content available at 5 complexity levels for patient education.
 * Designed to help patients understand rehabilitation processes and actively
 * participate in their recovery journey.
 */

// Physical therapy
export { physicalTherapyPrinciples } from './physical-therapy/physical-therapy-principles';
export { therapeuticExercise } from './physical-therapy/therapeutic-exercise';
export { manualTherapyTechniques } from './physical-therapy/manual-therapy-techniques';
export { physicalModalities } from './physical-therapy/physical-modalities';
export { gaitTraining } from './physical-therapy/gait-training';

// Occupational therapy
export { occupationalTherapyPrinciples } from './occupational-therapy/occupational-therapy-principles';
export { adlTraining } from './occupational-therapy/adl-training';
export { cognitiveRehabilitation } from './occupational-therapy/cognitive-rehabilitation';
export { homeModifications } from './occupational-therapy/home-modifications';

// Speech therapy
export { speechTherapyPrinciples } from './speech-therapy/speech-therapy-principles';
export { aphasiaRehabilitation } from './speech-therapy/aphasia-rehabilitation';
export { dysarthriaTreatment } from './speech-therapy/dysarthria-treatment';
export { swallowingDisorders } from './speech-therapy/swallowing-disorders';
export { voiceTherapy } from './speech-therapy/voice-therapy';

// Stroke rehabilitation
export { strokeRehabilitationOverview } from './stroke-rehabilitation/stroke-rehabilitation-overview';
export { acuteStrokeRehab } from './stroke-rehabilitation/acute-stroke-rehab';
export { motorRecoveryAfterStroke } from './stroke-rehabilitation/motor-recovery-after-stroke';
export { strokeCognitiveRehab } from './stroke-rehabilitation/stroke-cognitive-rehab';

// Cardiac rehabilitation
export { cardiacRehabilitationProgram } from './cardiac-rehabilitation/cardiac-rehabilitation-program';
export { exercisePrescriptionCardiac } from './cardiac-rehabilitation/exercise-prescription-cardiac';
export { riskFactorModificationCardiac } from './cardiac-rehabilitation/risk-factor-modification-cardiac';
export { cardiacRehabPhases } from './cardiac-rehabilitation/cardiac-rehab-phases';

// Pulmonary rehabilitation
export { pulmonaryRehabilitationProgram } from './pulmonary-rehabilitation/pulmonary-rehabilitation-program';
export { breathingExercises } from './pulmonary-rehabilitation/breathing-exercises';
export { airwayClearanceTechniques } from './pulmonary-rehabilitation/airway-clearance-techniques';
export { oxygenTherapyRehab } from './pulmonary-rehabilitation/oxygen-therapy-rehab';

// Post-surgical rehabilitation
export { postSurgicalRehabPrinciples } from './post-surgical-rehabilitation/post-surgical-rehab-principles';
export { jointReplacementRehab } from './post-surgical-rehabilitation/joint-replacement-rehab';
export { spinePostSurgicalRehab } from './post-surgical-rehabilitation/spine-post-surgical-rehab';
export { cardiacSurgeryRehab } from './post-surgical-rehabilitation/cardiac-surgery-rehab';
export { cancerSurgeryRehab } from './post-surgical-rehabilitation/cancer-surgery-rehab';

// Assistive devices
export { mobilityAidsOverview } from './assistive-devices/mobility-aids-overview';
export { wheelchairsAndScooters } from './assistive-devices/wheelchairs-and-scooters';
export { prostheticDevices } from './assistive-devices/prosthetic-devices';
export { orthoticDevices } from './assistive-devices/orthotic-devices';
export { adaptiveEquipment } from './assistive-devices/adaptive-equipment';

// Functional assessment
export { functionalAssessmentOverview } from './functional-assessment/functional-assessment-overview';
export { functionalCapacityEvaluation } from './functional-assessment/functional-capacity-evaluation';
export { disabilityRatingScales } from './functional-assessment/disability-rating-scales';
export { qualityOfLifeMeasures } from './functional-assessment/quality-of-life-measures';

// Return to work/activity
export { returnToWorkPlanning } from './return-to-work/return-to-work-planning';
export { workHardeningPrograms } from './return-to-work/work-hardening-programs';
export { vocationalRehabilitation } from './return-to-work/vocational-rehabilitation';
export { returnToSportProtocols } from './return-to-work/return-to-sport-protocols';

// Content categories
export const REHABILITATION_CATEGORIES = [
  'physical-therapy',
  'occupational-therapy',
  'speech-therapy',
  'stroke-rehabilitation',
  'cardiac-rehabilitation',
  'pulmonary-rehabilitation',
  'post-surgical-rehabilitation',
  'assistive-devices',
  'functional-assessment',
  'return-to-work',
] as const;

export type RehabilitationCategory = (typeof REHABILITATION_CATEGORIES)[number];

// Content registry for programmatic access
export const REHABILITATION_CONTENT_REGISTRY = {
  'physical-therapy': [
    'physical-therapy-principles',
    'therapeutic-exercise',
    'manual-therapy-techniques',
    'physical-modalities',
    'gait-training',
  ],
  'occupational-therapy': [
    'occupational-therapy-principles',
    'adl-training',
    'cognitive-rehabilitation',
    'home-modifications',
  ],
  'speech-therapy': [
    'speech-therapy-principles',
    'aphasia-rehabilitation',
    'dysarthria-treatment',
    'swallowing-disorders',
    'voice-therapy',
  ],
  'stroke-rehabilitation': [
    'stroke-rehabilitation-overview',
    'acute-stroke-rehab',
    'motor-recovery-after-stroke',
    'stroke-cognitive-rehab',
  ],
  'cardiac-rehabilitation': [
    'cardiac-rehabilitation-program',
    'exercise-prescription-cardiac',
    'risk-factor-modification-cardiac',
    'cardiac-rehab-phases',
  ],
  'pulmonary-rehabilitation': [
    'pulmonary-rehabilitation-program',
    'breathing-exercises',
    'airway-clearance-techniques',
    'oxygen-therapy-rehab',
  ],
  'post-surgical-rehabilitation': [
    'post-surgical-rehab-principles',
    'joint-replacement-rehab',
    'spine-post-surgical-rehab',
    'cardiac-surgery-rehab',
    'cancer-surgery-rehab',
  ],
  'assistive-devices': [
    'mobility-aids-overview',
    'wheelchairs-and-scooters',
    'prosthetic-devices',
    'orthotic-devices',
    'adaptive-equipment',
  ],
  'functional-assessment': [
    'functional-assessment-overview',
    'functional-capacity-evaluation',
    'disability-rating-scales',
    'quality-of-life-measures',
  ],
  'return-to-work': [
    'return-to-work-planning',
    'work-hardening-programs',
    'vocational-rehabilitation',
    'return-to-sport-protocols',
  ],
} as const;
