/**
 * Sports Medicine Type Definitions
 *
 * Extended types for sports medicine content with additional fields for
 * injury classification, treatment protocols, and return-to-play criteria.
 */

import { EducationalContent, LevelContent } from '../types';

/**
 * Injury severity classification
 */
export type InjurySeverity = 'mild' | 'moderate' | 'severe';

/**
 * Injury type classification
 */
export type InjuryType =
  | 'sprain'
  | 'strain'
  | 'fracture'
  | 'dislocation'
  | 'contusion'
  | 'laceration'
  | 'tendinopathy'
  | 'overuse'
  | 'concussion';

/**
 * Tissue type affected
 */
export type TissueType = 'bone' | 'muscle' | 'tendon' | 'ligament' | 'cartilage' | 'nerve' | 'skin' | 'brain';

/**
 * Sport category
 */
export type SportCategory =
  | 'running'
  | 'team-sports'
  | 'contact-sports'
  | 'throwing'
  | 'swimming'
  | 'cycling'
  | 'weightlifting'
  | 'racquet-sports'
  | 'winter-sports'
  | 'combat-sports';

/**
 * Injury mechanism
 */
export interface InjuryMechanism {
  type: 'acute' | 'overuse' | 'contact' | 'non-contact';
  description: string;
  commonScenarios: string[];
  riskFactors: string[];
}

/**
 * Grading system for injuries
 */
export interface InjuryGrade {
  grade: 'I' | 'II' | 'III' | 1 | 2 | 3;
  severity: InjurySeverity;
  description: string;
  structuralDamage: string;
  typicalRecovery: string;
  treatmentApproach: string;
}

/**
 * Rehabilitation phase
 */
export interface RehabPhase {
  phase: number;
  name: string;
  duration: string;
  goals: string[];
  activities: string[];
  progressionCriteria: string[];
  precautions: string[];
}

/**
 * Return to play criteria
 */
export interface ReturnToPlayCriteria {
  clinical: string[];
  functional: string[];
  strengthCriteria?: string;
  psychologicalReadiness?: string[];
  sportSpecificTests?: string[];
}

/**
 * Exercise prescription parameters
 */
export interface ExercisePrescription {
  frequency: string;
  intensity: string;
  time: string;
  type: string;
  progression: string;
  precautions: string[];
  modifications?: string[];
}

/**
 * Vital signs during exercise
 */
export interface ExerciseVitals {
  heartRateRange: string;
  bloodPressureConsiderations: string;
  rpeRange?: string;
  contraindications?: string[];
}

/**
 * Sports injury content extension
 */
export interface SportsInjuryContent extends EducationalContent {
  injuryType: InjuryType;
  tissueAffected: TissueType[];
  mechanism: InjuryMechanism;
  grades?: InjuryGrade[];
  anatomy: {
    structure: string;
    function: string;
    relevantAnatomy: string[];
  };
  presentation: {
    acuteSigns: string[];
    symptoms: string[];
    delayedFindings?: string[];
  };
  diagnosis: {
    physicalExam: string[];
    specialTests: string[];
    imaging: {
      modality: string;
      findings: string;
      whenToOrder: string;
    }[];
  };
  treatment: {
    acute: string[];
    conservative: string[];
    surgical?: string[];
    surgicalIndications?: string[];
  };
  rehabilitation: RehabPhase[];
  returnToPlay: ReturnToPlayCriteria;
  complications: string[];
  prevention: string[];
  prognosis: string;
  sportsAtRisk: SportCategory[];
}

/**
 * Concussion-specific content
 */
export interface ConcussionContent extends EducationalContent {
  recognitionSigns: {
    observedSigns: string[];
    reportedSymptoms: string[];
    redFlags: string[];
  };
  assessment: {
    sidelineTools: string[];
    clinicalEvaluation: string[];
    neurocognitiveTests?: string[];
  };
  management: {
    acutePhase: string[];
    recoveryStaggedProtocol: {
      stage: number;
      activity: string;
      duration: string;
      goal: string;
    }[];
    returnToLearn: string[];
    returnToPlay: string[];
  };
  specialPopulations?: {
    pediatric?: string[];
    collegiateAthletes?: string[];
    professionalAthletes?: string[];
  };
  longTermConsiderations: string[];
}

/**
 * Exercise physiology content
 */
export interface ExercisePhysiologyContent extends EducationalContent {
  physiologicalSystem: 'cardiovascular' | 'respiratory' | 'musculoskeletal' | 'metabolic' | 'neurological';
  acuteResponses: {
    response: string;
    mechanism: string;
    magnitude: string;
  }[];
  chronicAdaptations: {
    adaptation: string;
    timeframe: string;
    trainingStimulus: string;
  }[];
  clinicalImplications?: string[];
}

/**
 * Nutrition content
 */
export interface SportsNutritionContent extends EducationalContent {
  nutrientCategory?: 'macronutrient' | 'micronutrient' | 'supplement' | 'hydration';
  recommendations: {
    population: string;
    amount: string;
    timing: string;
    rationale: string;
  }[];
  foodSources?: string[];
  supplementation?: {
    form: string;
    dose: string;
    evidence: string;
    safety: string;
  };
  performanceImpact: string;
}

/**
 * Exercise prescription content
 */
export interface ExercisePrescriptionContent extends EducationalContent {
  targetCondition: string;
  contraindications: {
    absolute: string[];
    relative: string[];
  };
  prescription: ExercisePrescription;
  vitals: ExerciseVitals;
  monitoringParameters: string[];
  warningSignsToStop: string[];
  evidenceBase: string;
}

/**
 * Heat illness severity levels
 */
export type HeatIllnessSeverity = 'heat-cramps' | 'heat-syncope' | 'heat-exhaustion' | 'heat-stroke';

/**
 * Heat illness content
 */
export interface HeatIllnessContent extends EducationalContent {
  severity: HeatIllnessSeverity;
  pathophysiology: string;
  riskFactors: string[];
  presentation: {
    signs: string[];
    symptoms: string[];
    temperature?: string;
  };
  treatment: {
    fieldManagement: string[];
    medicalManagement: string[];
    coolingMethods?: string[];
  };
  prevention: string[];
  returnToActivityGuidelines: string[];
}

/**
 * Prevention program structure
 */
export interface PreventionProgram {
  name: string;
  targetInjury: string;
  components: {
    category: 'warmup' | 'strength' | 'plyometric' | 'balance' | 'flexibility' | 'technique';
    exercises: string[];
    frequency: string;
    duration: string;
  }[];
  evidence: string;
  implementation: string[];
}
