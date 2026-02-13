/**
 * Toxicology Content Type Definitions
 *
 * Extended types for toxicology content including poisoning emergencies,
 * toxidromes, antidotes, and treatment protocols.
 *
 * IMPORTANT: This content is for educational purposes only. In any
 * poisoning emergency, call Poison Control (1-800-222-1222) or 911.
 */

import { EducationalContent, LevelContent } from '../types';

/**
 * Toxicity severity classification
 */
export type ToxicitySeverity = 'mild' | 'moderate' | 'severe' | 'life-threatening';

/**
 * Route of exposure
 */
export type ExposureRoute = 'ingestion' | 'inhalation' | 'dermal' | 'ocular' | 'injection' | 'envenomation';

/**
 * Time course of toxicity
 */
export type OnsetTiming = 'immediate' | 'minutes' | 'hours' | 'delayed' | 'cumulative';

/**
 * Toxicology category
 */
export type ToxicologyCategory =
  | 'pharmaceutical'
  | 'household'
  | 'industrial'
  | 'environmental'
  | 'food-borne'
  | 'drug-of-abuse'
  | 'plant'
  | 'envenomation'
  | 'toxidrome';

/**
 * Clinical manifestation of toxicity
 */
export interface ToxicityManifestation {
  system: 'cardiovascular' | 'respiratory' | 'neurological' | 'gastrointestinal' |
          'hepatic' | 'renal' | 'dermatologic' | 'metabolic' | 'hematologic' | 'ocular';
  findings: string[];
  severity: ToxicitySeverity;
  timeToOnset?: string;
}

/**
 * Antidote or treatment
 */
export interface Antidote {
  name: string;
  mechanism: string;
  indication: string;
  dose?: string;
  route?: string;
  timing?: string;
  contraindications?: string[];
  adverseEffects?: string[];
  availability?: 'routine' | 'pharmacy' | 'specialty' | 'regional-poison-center';
}

/**
 * Decontamination method
 */
export interface DecontaminationMethod {
  method: 'activated-charcoal' | 'gastric-lavage' | 'whole-bowel-irrigation' |
          'skin-decontamination' | 'eye-irrigation' | 'enhanced-elimination' | 'supportive';
  indication: string;
  contraindications: string[];
  timeWindow?: string;
  procedure?: string;
}

/**
 * Toxidrome - constellation of symptoms
 */
export interface Toxidrome {
  name: string;
  classicPresentation: {
    vitals: {
      heartRate?: 'increased' | 'decreased' | 'normal' | 'variable';
      bloodPressure?: 'increased' | 'decreased' | 'normal' | 'variable';
      temperature?: 'increased' | 'decreased' | 'normal' | 'variable';
      respirations?: 'increased' | 'decreased' | 'normal' | 'variable';
    };
    pupils?: 'dilated' | 'constricted' | 'normal' | 'variable';
    skin?: string;
    mentalStatus?: string;
    otherFindings?: string[];
  };
  causativeAgents: string[];
  mnemonic?: string;
}

/**
 * Drug interaction causing toxicity
 */
export interface ToxicDrugInteraction {
  drugs: string[];
  mechanism: string;
  result: string;
  severity: ToxicitySeverity;
  management: string;
  avoidance: string;
}

/**
 * Poisoning risk assessment
 */
export interface RiskAssessment {
  factors: {
    factor: string;
    impact: 'increases' | 'decreases';
    explanation: string;
  }[];
  highRiskPopulations: string[];
  timeConsiderations: string;
}

/**
 * When to call for help
 */
export interface EmergencyGuidance {
  call911If: string[];
  callPoisonControlIf: string[];
  urgentCareIf: string[];
  monitorAtHomeIf: string[];
  neverDo: string[];
}

/**
 * Laboratory evaluation
 */
export interface ToxLabEvaluation {
  routineLabs: string[];
  specificLevels?: {
    test: string;
    timing?: string;
    interpretation: string;
  }[];
  toxicologyScreen?: {
    type: 'urine' | 'serum' | 'both';
    limitations: string[];
  };
  otherTests?: string[];
}

/**
 * Complete toxicology content
 */
export interface ToxicologyContent extends EducationalContent {
  type: 'condition' | 'concept';

  // Toxicology-specific metadata
  toxicologyMetadata: {
    category: ToxicologyCategory;
    exposureRoute: ExposureRoute[];
    onsetTiming: OnsetTiming;
    typicalDuration?: string;
    reversibility: 'fully-reversible' | 'partially-reversible' | 'irreversible' | 'depends-on-timing';
  };

  // Clinical presentation
  clinicalPresentation: {
    manifestations: ToxicityManifestation[];
    warningSignsOfSeverity: string[];
    progressionPattern?: string;
  };

  // Associated toxidrome (if applicable)
  toxidrome?: Toxidrome;

  // Risk assessment
  riskAssessment: RiskAssessment;

  // Emergency guidance
  emergencyGuidance: EmergencyGuidance;

  // Treatment
  treatment: {
    decontamination?: DecontaminationMethod[];
    antidotes?: Antidote[];
    supportiveCare: string[];
    enhancedElimination?: {
      method: string;
      indication: string;
    }[];
    disposition: string;
  };

  // Laboratory evaluation
  labEvaluation?: ToxLabEvaluation;

  // Prevention
  prevention?: string[];
}

/**
 * Poison control guidance content
 */
export interface PoisonControlGuidance {
  id: string;
  poisonControlNumber: string;
  whenToCall: string[];
  informationNeeded: string[];
  whatToExpect: string[];
  commonMisconceptions: string[];
}

/**
 * Household poisoning content
 */
export interface HouseholdPoisoningContent extends ToxicologyContent {
  commonProducts: string[];
  storageSafety: string[];
  childproofingTips: string[];
  accidentalVsIntentional: {
    clues: string[];
    managementDifferences?: string;
  };
}

/**
 * Drug overdose content
 */
export interface DrugOverdoseContent extends ToxicologyContent {
  drugClass: string;
  therapeuticDose?: string;
  toxicDose?: string;
  lethalDose?: string;
  halfLife?: string;
  metabolism?: string;
  interactingDrugs?: ToxicDrugInteraction[];
  withdrawalConsiderations?: string;
}

/**
 * Environmental toxin content
 */
export interface EnvironmentalToxinContent extends ToxicologyContent {
  sources: string[];
  occupationalRisk?: string[];
  geographicConsiderations?: string[];
  chronicExposureEffects?: string[];
  regulatoryLimits?: {
    setting: string;
    limit: string;
    unit: string;
  }[];
}

/**
 * Food poisoning content
 */
export interface FoodPoisoningContent extends ToxicologyContent {
  causativeOrganisms?: string[];
  commonFoodSources: string[];
  incubationPeriod: string;
  reportingRequirements?: string;
  publicHealthImplications?: string[];
}

/**
 * US Poison Control contact
 */
export const POISON_CONTROL_NUMBER = '1-800-222-1222';

/**
 * Critical toxicology contacts
 */
export const TOXICOLOGY_CONTACTS = {
  poisonControl: '1-800-222-1222',
  emergencyServices: '911',
  suicidePrevention: '988',
};
