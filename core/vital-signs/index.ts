/**
 * Vital Signs Education Module
 *
 * Deep education about vital signs - the fundamental measurements
 * that reveal the body's physiological state.
 */

export type {
  VitalSignId,
  VitalSignCategory,
  VitalSignEducation,
  VitalSignPhysiology,
  RegulatoryMechanism,
  HomeostasisExplanation,
  MeasurementEducation,
  MeasurementTechnique,
  EquipmentInfo,
  MeasurementError,
  FrequencyGuideline,
  NormalRange,
  InfluencingFactor,
  VitalSignInterpretation,
  AbnormalInterpretation,
  Threshold,
  CauseCategory,
  UrgencyGuideline,
  TrendInterpretation,
  ContextualInterpretation,
  RedFlag,
  VitalSignRelationship,
  ClinicalScenario,
  VitalSignPattern,
  Misconception,
  VitalSignsSession,
  VitalSignReading,
  VitalSignsTracking,
  VitalSignHistoryEntry,
  VitalSignAlert,
} from './types.js';

export {
  VITAL_SIGNS,
  BLOOD_PRESSURE,
  HEART_RATE,
  getVitalSign,
  getAllVitalSigns,
  getVitalSignsByCategory,
} from './vital-signs-database.js';
