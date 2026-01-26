/**
 * Cardiovascular Physiology Type Definitions
 *
 * Comprehensive types for cardiac physiology concepts including:
 * - Cardiac cycle (systole/diastole, pressure-volume loops)
 * - Cardiac output (stroke volume, heart rate, Frank-Starling)
 * - Blood pressure regulation (baroreceptors, RAAS, ANP)
 * - Coronary circulation (oxygen demand, autoregulation)
 * - ECG basics (waves, intervals, interpretation)
 * - Heart sounds (S1, S2, murmurs)
 * - Hemodynamics (preload, afterload, contractility)
 * - Arrhythmias (types, mechanisms, clinical significance)
 *
 * All content supports 5 complexity levels:
 * Level 1: 8th Grade (simple analogies, everyday language)
 * Level 2: High School (basic medical terminology)
 * Level 3: College (full terminology, mechanisms)
 * Level 4: Graduate (detailed pathophysiology)
 * Level 5: MD/Professional (clinical correlations, current research)
 */

/**
 * Multi-level explanation content
 */
export interface MultiLevelContent {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
}

/**
 * Clinical pearl for physician education
 */
export interface ClinicalPearl {
  context: string;
  insight: string;
  evidenceLevel?: 'high' | 'moderate' | 'low' | 'expert-opinion';
  source?: string;
}

/**
 * Patient education point
 */
export interface PatientEducationPoint {
  topic: string;
  keyMessage: string;
  analogy?: string;
  commonMisconception?: string;
  actionableAdvice?: string;
}

// ============================================
// Cardiac Cycle Types
// ============================================

export type CardiacPhaseType =
  | 'atrial-systole'
  | 'isovolumetric-contraction'
  | 'rapid-ejection'
  | 'reduced-ejection'
  | 'isovolumetric-relaxation'
  | 'rapid-filling'
  | 'diastasis';

export type ValveState = 'open' | 'closed';

export interface CardiacCyclePhaseDetail {
  id: string;
  name: string;
  type: CardiacPhaseType;
  category: 'systole' | 'diastole';
  duration: {
    typical: string;
    percentage: string;
    variableWith: string[];
  };
  valveStates: {
    mitral: ValveState;
    tricuspid: ValveState;
    aortic: ValveState;
    pulmonary: ValveState;
  };
  pressures: {
    leftVentricular: string;
    leftAtrial: string;
    aortic: string;
    description: string;
  };
  volumes: {
    leftVentricular: string;
    change: string;
  };
  ecgCorrelation: string;
  heartSounds: string[];
  physiologicEvents: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface PressureVolumeConcept {
  id: string;
  name: string;
  description: string;
  loopPhases: {
    phase: string;
    startPoint: string;
    endPoint: string;
    pressureChange: string;
    volumeChange: string;
  }[];
  clinicalApplications: string[];
  abnormalPatterns: {
    condition: string;
    loopChange: string;
    mechanism: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

// ============================================
// Cardiac Output Types
// ============================================

export interface CardiacOutputConcept {
  id: string;
  name: string;
  formula: string;
  normalValues: {
    value: string;
    unit: string;
    range: string;
  };
  determinants: string[];
  measurementMethods: string[];
  clinicalSignificance: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface StrokeVolumeDeterminant {
  id: string;
  name: string;
  definition: string;
  physiologicBasis: string;
  factors: {
    factor: string;
    effect: 'increase' | 'decrease';
    mechanism: string;
  }[];
  measurement: {
    method: string;
    normalValues: string;
    unit: string;
  }[];
  clinicalImplications: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface FrankStarlingConcept {
  id: string;
  name: string;
  principle: string;
  molecularBasis: string;
  curve: {
    xAxis: string;
    yAxis: string;
    normalShape: string;
    shiftMechanisms: {
      direction: 'left' | 'right' | 'up' | 'down';
      cause: string;
      effect: string;
    }[];
  };
  clinicalApplications: string[];
  limitations: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface HeartRateRegulation {
  id: string;
  name: string;
  intrinsicRate: string;
  autonomicControl: {
    system: 'sympathetic' | 'parasympathetic';
    neurotransmitter: string;
    receptor: string;
    effect: string;
    mechanism: string;
  }[];
  hormonalInfluences: {
    hormone: string;
    effect: string;
    mechanism: string;
  }[];
  physiologicVariation: {
    condition: string;
    rateChange: string;
    purpose: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

// ============================================
// Blood Pressure Regulation Types
// ============================================

export interface BloodPressureConcept {
  id: string;
  name: string;
  definition: string;
  formula: string;
  determinants: string[];
  normalValues: {
    systolic: string;
    diastolic: string;
    map: string;
    unit: string;
  };
  measurementTechnique: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface BaroreceptorReflex {
  id: string;
  name: string;
  location: string[];
  afferentPathway: string;
  integrationCenter: string;
  efferentPathway: string[];
  responseToHypertension: {
    step: number;
    event: string;
    result: string;
  }[];
  responseToHypotension: {
    step: number;
    event: string;
    result: string;
  }[];
  resetting: string;
  clinicalRelevance: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface RAASPathway {
  id: string;
  name: string;
  fullName: string;
  components: {
    name: string;
    source: string;
    function: string;
    targetOrEffect: string;
  }[];
  triggers: string[];
  effects: {
    target: string;
    effect: string;
    mechanism: string;
  }[];
  pharmacologicTargets: {
    drugClass: string;
    target: string;
    examples: string[];
    indication: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface NatriureticPeptideConcept {
  id: string;
  name: string;
  types: {
    name: string;
    abbreviation: string;
    source: string;
    stimulus: string;
    halfLife: string;
  }[];
  effects: {
    target: string;
    effect: string;
    mechanism: string;
  }[];
  clinicalUse: {
    application: string;
    interpretation: string;
    limitations: string[];
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

// ============================================
// Coronary Circulation Types
// ============================================

export interface CoronaryCirculationConcept {
  id: string;
  name: string;
  uniqueFeatures: string[];
  bloodFlow: {
    restingValue: string;
    percentageOfCO: string;
    timingPeculiarity: string;
  };
  oxygenExtraction: {
    restingValue: string;
    comparison: string;
    implication: string;
  };
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface MyocardialOxygenDemand {
  id: string;
  name: string;
  determinants: {
    factor: string;
    contribution: string;
    modifiable: boolean;
    clinicalRelevance: string;
  }[];
  supplyDemandBalance: string;
  ischemiaMechanism: string;
  therapeuticImplications: {
    intervention: string;
    effectOnDemand: string;
    mechanism: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface CoronaryAutoregulation {
  id: string;
  name: string;
  definition: string;
  mechanisms: {
    type: 'metabolic' | 'myogenic' | 'endothelial';
    mediator: string;
    mechanism: string;
    contribution: string;
  }[];
  pressureRange: {
    lower: string;
    upper: string;
    beyondRange: string;
  };
  pathologicStates: {
    condition: string;
    effect: string;
    clinicalImplication: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

// ============================================
// ECG Types
// ============================================

export type ECGWaveType = 'P' | 'Q' | 'R' | 'S' | 'T' | 'U';
export type ECGIntervalType = 'PR' | 'QRS' | 'QT' | 'QTc' | 'RR';
export type ECGSegmentType = 'PR' | 'ST' | 'TP';

export interface ECGComponent {
  id: string;
  name: string;
  componentType: 'wave' | 'interval' | 'segment' | 'complex';
  electrophysiology: string;
  anatomicCorrelate: string;
  normalValues: {
    duration?: string;
    amplitude?: string;
    morphology?: string;
  };
  measurementTechnique: string;
  abnormalities: {
    finding: string;
    causes: string[];
    significance: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface ECGInterpretationFramework {
  id: string;
  name: string;
  systematicApproach: {
    step: number;
    assessment: string;
    normalFinding: string;
    keyAbnormalities: string[];
  }[];
  commonPatterns: {
    pattern: string;
    features: string[];
    diagnosis: string;
    urgency: 'emergent' | 'urgent' | 'routine';
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

// ============================================
// Heart Sounds Types
// ============================================

export type HeartSoundType = 'S1' | 'S2' | 'S3' | 'S4' | 'murmur' | 'click' | 'rub' | 'snap';

export interface HeartSoundConcept {
  id: string;
  name: string;
  type: HeartSoundType;
  timing: string;
  mechanism: string;
  normalVariation: string;
  auscultationLocation: string[];
  characteristics: {
    quality: string;
    intensity: string;
    duration: string;
  };
  splitting?: {
    type: string;
    mechanism: string;
    pathologicVariants: string[];
  };
  abnormalities: {
    finding: string;
    cause: string;
    clinicalSignificance: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface MurmurConcept {
  id: string;
  name: string;
  timing: 'systolic' | 'diastolic' | 'continuous';
  shape: 'crescendo' | 'decrescendo' | 'crescendo-decrescendo' | 'plateau' | 'variable';
  location: string;
  radiation: string;
  intensity: {
    grade: string;
    description: string;
  };
  pitch: 'high' | 'medium' | 'low';
  quality: string;
  differentialDiagnosis: string[];
  maneuvers: {
    maneuver: string;
    effect: string;
    mechanism: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

// ============================================
// Hemodynamics Types
// ============================================

export interface HemodynamicParameter {
  id: string;
  name: string;
  definition: string;
  formula?: string;
  normalValues: {
    value: string;
    unit: string;
    range: string;
  };
  determinants: string[];
  measurementMethod: string[];
  clinicalAssessment: string[];
  therapeuticTargets: {
    condition: string;
    goal: string;
    intervention: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface PreloadConcept {
  id: string;
  name: string;
  definition: string;
  physiologicBasis: string;
  surrogates: {
    parameter: string;
    measurement: string;
    limitations: string;
  }[];
  determinants: {
    factor: string;
    effect: 'increase' | 'decrease';
    mechanism: string;
  }[];
  optimization: {
    condition: string;
    approach: string;
    goal: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface AfterloadConcept {
  id: string;
  name: string;
  definition: string;
  physiologicBasis: string;
  determinants: {
    factor: string;
    contribution: string;
    modifiable: boolean;
  }[];
  effects: {
    acuteIncrease: string;
    chronicIncrease: string;
    decrease: string;
  };
  therapeuticImplications: {
    condition: string;
    strategy: string;
    mechanism: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

export interface ContractilityConcept {
  id: string;
  name: string;
  definition: string;
  physiologicBasis: string;
  assessment: {
    method: string;
    parameter: string;
    normalValue: string;
    limitations: string;
  }[];
  modulators: {
    factor: string;
    effect: 'positive-inotrope' | 'negative-inotrope';
    mechanism: string;
    clinicalUse?: string;
  }[];
  pathologicStates: {
    condition: string;
    contractilityChange: string;
    mechanism: string;
  }[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

// ============================================
// Arrhythmia Types
// ============================================

export type ArrhythmiaCategory =
  | 'bradyarrhythmia'
  | 'supraventricular-tachycardia'
  | 'ventricular-tachycardia'
  | 'conduction-disorder'
  | 'accessory-pathway'
  | 'atrial-arrhythmia';

export type ArrhythmiaMechanism =
  | 'automaticity'
  | 'triggered-activity'
  | 'reentry'
  | 'conduction-block';

export interface ArrhythmiaConcept {
  id: string;
  name: string;
  category: ArrhythmiaCategory;
  mechanism: ArrhythmiaMechanism;
  electrophysiology: string;
  ecgFeatures: {
    rate: string;
    rhythm: string;
    pWaves: string;
    qrsComplex: string;
    otherFeatures: string[];
  };
  clinicalPresentation: {
    symptoms: string[];
    hemodynamicEffect: string;
    riskFactors: string[];
  };
  management: {
    acute: string[];
    chronic: string[];
    ablationRole?: string;
  };
  prognosis: string;
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
  patientEducation: PatientEducationPoint[];
}

export interface ConductionBlockConcept {
  id: string;
  name: string;
  location: string;
  degrees: {
    degree: string;
    ecgFinding: string;
    prognosis: string;
    intervention: string;
  }[];
  etiology: string[];
  clinicalSignificance: string;
  managementPrinciples: string[];
  explanations: MultiLevelContent;
  clinicalPearls: ClinicalPearl[];
}

// ============================================
// Integration Types
// ============================================

export interface CardiovascularPhysiologyModule {
  cardiacCycle: CardiacCyclePhaseDetail[];
  pressureVolumeLoops: PressureVolumeConcept[];
  cardiacOutput: CardiacOutputConcept[];
  strokeVolumeDeterminants: StrokeVolumeDeterminant[];
  frankStarling: FrankStarlingConcept[];
  heartRateRegulation: HeartRateRegulation[];
  bloodPressure: BloodPressureConcept[];
  baroreceptors: BaroreceptorReflex[];
  raas: RAASPathway[];
  natriureticPeptides: NatriureticPeptideConcept[];
  coronaryCirculation: CoronaryCirculationConcept[];
  myocardialOxygenDemand: MyocardialOxygenDemand[];
  coronaryAutoregulation: CoronaryAutoregulation[];
  ecgComponents: ECGComponent[];
  ecgInterpretation: ECGInterpretationFramework[];
  heartSounds: HeartSoundConcept[];
  murmurs: MurmurConcept[];
  hemodynamicParameters: HemodynamicParameter[];
  preload: PreloadConcept[];
  afterload: AfterloadConcept[];
  contractility: ContractilityConcept[];
  arrhythmias: ArrhythmiaConcept[];
  conductionBlocks: ConductionBlockConcept[];
}

export interface PhysiologyStatistics {
  totalConcepts: number;
  conceptsByCategory: Record<string, number>;
  clinicalPearlsCount: number;
  patientEducationPointsCount: number;
}
