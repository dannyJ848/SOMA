/**
 * Vital Signs Education Types
 *
 * Deep education about vital signs - the fundamental measurements
 * that reveal the body's physiological state.
 */

// ============================================
// Vital Sign Types
// ============================================

export type VitalSignId =
  | 'blood-pressure'
  | 'heart-rate'
  | 'respiratory-rate'
  | 'temperature'
  | 'oxygen-saturation'
  | 'pain-level';

export type VitalSignCategory = 'cardiovascular' | 'respiratory' | 'neurological' | 'metabolic';

// ============================================
// Vital Sign Education
// ============================================

/**
 * Complete education about a vital sign
 */
export interface VitalSignEducation {
  id: VitalSignId;
  name: string;
  fullName: string;
  abbreviation: string;
  category: VitalSignCategory;

  /** What this measurement tells us */
  whatItMeasures: string;

  /** Why it matters clinically */
  clinicalSignificance: string;

  /** The physiology behind it */
  physiology: VitalSignPhysiology;

  /** How to measure it */
  measurement: MeasurementEducation;

  /** Normal ranges by age/context */
  normalRanges: NormalRange[];

  /** What affects this vital sign */
  influencingFactors: InfluencingFactor[];

  /** What abnormal values mean */
  interpretation: VitalSignInterpretation;

  /** Related vital signs and their interactions */
  relationships: VitalSignRelationship[];

  /** Clinical scenarios */
  clinicalScenarios: ClinicalScenario[];

  /** Common misconceptions */
  misconceptions: Misconception[];

  /** Historical context */
  history: string;
}

// ============================================
// Physiology Behind Vital Signs
// ============================================

export interface VitalSignPhysiology {
  /** The organ systems involved */
  systemsInvolved: string[];

  /** How the body regulates this */
  regulatoryMechanisms: RegulatoryMechanism[];

  /** The feedback loops controlling it */
  homeostasis: HomeostasisExplanation;

  /** What's happening at the cellular level */
  cellularBasis: string;

  /** Neural/hormonal control */
  neurohormonalControl: string;

  /** How quickly it can change */
  responseTime: string;
}

export interface RegulatoryMechanism {
  name: string;
  type: 'neural' | 'hormonal' | 'local' | 'intrinsic';
  description: string;
  speed: 'seconds' | 'minutes' | 'hours' | 'days';
  clinicalRelevance: string;
}

export interface HomeostasisExplanation {
  setPoint: string;
  sensor: string;
  controlCenter: string;
  effector: string;
  feedbackType: 'negative' | 'positive';
  explanation: string;
}

// ============================================
// Measurement Education
// ============================================

export interface MeasurementEducation {
  /** How to measure properly */
  technique: MeasurementTechnique[];

  /** Equipment used */
  equipment: EquipmentInfo[];

  /** Common errors and how to avoid them */
  commonErrors: MeasurementError[];

  /** Special considerations */
  specialConsiderations: string[];

  /** Frequency of measurement in different settings */
  measurementFrequency: FrequencyGuideline[];
}

export interface MeasurementTechnique {
  name: string;
  steps: string[];
  tips: string[];
  accuracy: string;
  setting: 'home' | 'clinic' | 'hospital' | 'all';
}

export interface EquipmentInfo {
  name: string;
  type: 'manual' | 'automatic' | 'continuous';
  description: string;
  accuracy: string;
  pros: string[];
  cons: string[];
  costRange: string;
}

export interface MeasurementError {
  error: string;
  consequence: string;
  howToAvoid: string;
}

export interface FrequencyGuideline {
  setting: string;
  frequency: string;
  rationale: string;
}

// ============================================
// Normal Ranges
// ============================================

export interface NormalRange {
  population: string;
  ageRange?: { min: number; max: number };
  value: { min: number; max: number };
  unit: string;
  notes: string;
}

// ============================================
// Factors Affecting Vital Signs
// ============================================

export interface InfluencingFactor {
  factor: string;
  category: 'physiological' | 'pathological' | 'environmental' | 'medication' | 'behavioral';
  effect: 'increases' | 'decreases' | 'variable';
  magnitude: 'mild' | 'moderate' | 'significant' | 'variable';
  mechanism: string;
  examples: string[];
  clinicalRelevance: string;
}

// ============================================
// Interpretation
// ============================================

export interface VitalSignInterpretation {
  /** What high values mean */
  highValues: AbnormalInterpretation;

  /** What low values mean */
  lowValues: AbnormalInterpretation;

  /** Patterns over time */
  trends: TrendInterpretation[];

  /** Context-dependent interpretation */
  contextualInterpretation: ContextualInterpretation[];

  /** Red flags requiring immediate action */
  redFlags: RedFlag[];
}

export interface AbnormalInterpretation {
  terminology: string;
  thresholds: Threshold[];
  causes: CauseCategory[];
  urgency: UrgencyGuideline[];
  workup: string[];
}

export interface Threshold {
  level: 'mild' | 'moderate' | 'severe' | 'critical';
  range: { min?: number; max?: number };
  interpretation: string;
  action: string;
}

export interface CauseCategory {
  category: string;
  causes: string[];
  distinguishingFeatures: string;
}

export interface UrgencyGuideline {
  condition: string;
  urgency: 'routine' | 'urgent' | 'emergent';
  action: string;
}

export interface TrendInterpretation {
  pattern: string;
  significance: string;
  possibleCauses: string[];
  action: string;
}

export interface ContextualInterpretation {
  context: string;
  normalAdjustment: string;
  clinicalImplication: string;
}

export interface RedFlag {
  finding: string;
  concernFor: string;
  immediateAction: string;
}

// ============================================
// Vital Sign Relationships
// ============================================

export interface VitalSignRelationship {
  relatedVitalSign: VitalSignId;
  relationship: string;
  mechanism: string;
  clinicalExample: string;
}

// ============================================
// Clinical Scenarios
// ============================================

export interface ClinicalScenario {
  scenario: string;
  vitalSignPattern: VitalSignPattern;
  interpretation: string;
  differentialDiagnosis: string[];
  keyLearningPoint: string;
}

export interface VitalSignPattern {
  bloodPressure?: string;
  heartRate?: string;
  respiratoryRate?: string;
  temperature?: string;
  oxygenSaturation?: string;
}

// ============================================
// Misconceptions
// ============================================

export interface Misconception {
  misconception: string;
  reality: string;
  importance: string;
}

// ============================================
// Vital Signs Session
// ============================================

export interface VitalSignsSession {
  sessionId: string;
  timestamp: string;
  readings: VitalSignReading[];
  context: string;
  notes?: string;
}

export interface VitalSignReading {
  vitalSign: VitalSignId;
  value: number | string;
  unit: string;
  timestamp: string;
  position?: string;
  notes?: string;
}

// ============================================
// Tracking and Trends
// ============================================

export interface VitalSignsTracking {
  userId: string;
  vitalSign: VitalSignId;
  history: VitalSignHistoryEntry[];
  trend: 'improving' | 'stable' | 'worsening' | 'insufficient-data';
  alerts: VitalSignAlert[];
}

export interface VitalSignHistoryEntry {
  date: string;
  value: number;
  context?: string;
  notes?: string;
}

export interface VitalSignAlert {
  type: 'high' | 'low' | 'trend' | 'variability';
  message: string;
  severity: 'info' | 'warning' | 'critical';
  timestamp: string;
}
