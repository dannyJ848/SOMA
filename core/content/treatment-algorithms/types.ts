/**
 * Treatment Algorithm Types
 *
 * Data models for evidence-based treatment pathways.
 * Supports multi-level complexity to help patients understand:
 * - Why doctors choose specific treatments
 * - What to expect at each step
 * - When treatment adjustments occur (step-up/step-down)
 */

import { ComplexityLevel, Citation, MediaAsset, CrossReference, ContentTags } from '../types';

/**
 * Treatment step within an algorithm
 */
export interface TreatmentStep {
  id: string;
  order: number;
  name: string;
  description: string;
  medications?: MedicationOption[];
  nonPharmacologic?: string[];
  targets?: TreatmentTarget[];
  monitoringRequired?: MonitoringRequirement[];
  timeframe?: string;
  patientEducation?: string;
}

/**
 * Medication option within a treatment step
 */
export interface MedicationOption {
  name: string;
  genericName?: string;
  class: string;
  dosing?: string;
  frequency?: string;
  commonSideEffects?: string[];
  seriousWarnings?: string[];
  contraindications?: string[];
  considerations?: string;
  costCategory?: 'low' | 'moderate' | 'high' | 'very-high';
}

/**
 * Treatment target/goal
 */
export interface TreatmentTarget {
  parameter: string;
  goal: string;
  rationale?: string;
}

/**
 * Monitoring requirement
 */
export interface MonitoringRequirement {
  test: string;
  frequency: string;
  purpose: string;
}

/**
 * Criteria for stepping up or down in treatment
 */
export interface StepCriteria {
  stepUp: {
    triggers: string[];
    timeline: string;
    considerations?: string[];
  };
  stepDown: {
    triggers: string[];
    timeline: string;
    considerations?: string[];
  };
}

/**
 * Special population considerations
 */
export interface SpecialPopulation {
  population: string;
  modifications: string[];
  contraindications?: string[];
  monitoring?: string[];
}

/**
 * Content for a specific complexity level
 */
export interface TreatmentLevelContent {
  level: ComplexityLevel;
  overview: string;
  whyThisApproach: string;
  whatToExpect: string;
  keyPoints: string[];
  patientQuestions?: string[];
  detailedSteps?: TreatmentStep[];
}

/**
 * Complete treatment algorithm
 */
export interface TreatmentAlgorithm {
  id: string;
  condition: string;
  alternateNames?: string[];
  icdCodes?: string[];
  guidelineSource: string;
  guidelineYear: number;
  lastReviewed: string;

  // Multi-level content
  levels: {
    1: TreatmentLevelContent;
    2: TreatmentLevelContent;
    3: TreatmentLevelContent;
    4: TreatmentLevelContent;
    5: TreatmentLevelContent;
  };

  // Treatment pathway
  steps: TreatmentStep[];
  stepCriteria: StepCriteria;

  // Special considerations
  specialPopulations?: SpecialPopulation[];
  emergencyIndications?: string[];
  referralCriteria?: string[];

  // Resources
  media?: MediaAsset[];
  citations: Citation[];
  crossReferences?: CrossReference[];
  tags: ContentTags;

  // Metadata
  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Vaccination schedule entry
 */
export interface VaccinationEntry {
  vaccine: string;
  tradeName?: string;
  targetDiseases: string[];
  schedule: {
    age: string;
    dose: string;
    notes?: string;
  }[];
  catchUp?: string;
  contraindications?: string[];
  precautions?: string[];
  sideEffects?: string[];
  specialPopulations?: {
    population: string;
    recommendation: string;
  }[];
}

/**
 * Complete vaccination schedule
 */
export interface VaccinationSchedule {
  id: string;
  name: string;
  population: 'pediatric' | 'adult' | 'pregnancy' | 'travel' | 'occupational';
  source: string;
  year: number;
  lastReviewed: string;

  // Multi-level content
  levels: {
    1: TreatmentLevelContent;
    2: TreatmentLevelContent;
    3: TreatmentLevelContent;
    4: TreatmentLevelContent;
    5: TreatmentLevelContent;
  };

  vaccines: VaccinationEntry[];

  citations: Citation[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Antibiotic selection entry
 */
export interface AntibioticSelection {
  infection: string;
  pathogens: string[];
  firstLine: MedicationOption[];
  alternatives: MedicationOption[];
  duration: string;
  specialConsiderations?: string[];
  whenToRefer?: string[];
}

/**
 * Antibiotic selection guide
 */
export interface AntibioticGuide {
  id: string;
  name: string;
  category: string;
  source: string;
  year: number;
  lastReviewed: string;

  // Multi-level content
  levels: {
    1: TreatmentLevelContent;
    2: TreatmentLevelContent;
    3: TreatmentLevelContent;
    4: TreatmentLevelContent;
    5: TreatmentLevelContent;
  };

  selections: AntibioticSelection[];

  // Resistance considerations
  localResistancePatterns?: string;
  empiricConsiderations?: string[];

  citations: Citation[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}
