/**
 * Lab Abnormal Pattern Recognition Types
 * 
 * Comprehensive types for recognizing abnormal lab patterns,
 * differential diagnosis, and clinical correlations.
 */

/**
 * Abnormal pattern category
 */
export type PatternCategory = 
  | 'electrolyte'
  | 'metabolic'
  | 'hematologic'
  | 'hepatic'
  | 'renal'
  | 'endocrine'
  | 'inflammatory';

/**
 * Lab abnormality pattern
 */
export interface LabAbnormalityPattern {
  id: string;
  name: string;
  category: PatternCategory;
  description: string;
  
  // Pattern definition
  pattern: {
    primaryAbnormality: string;
    associatedFindings: { lab: string; finding: string; required: boolean }[];
    calculating: string;
  };
  
  // Differential diagnosis
  differentialDiagnosis: DifferentialItem[];
  
  // Clinical context
  clinicalContext: {
    patientPopulation: string[];
    clinicalScenarios: string[];
    redFlags: string[];
  };
  
  // Workup
  workup: {
    additionalLabs: string[];
    imaging: string[];
    procedures: string[];
    clinicalPearls: string[];
  };
  
  // Management approach
  management: {
    immediate: string[];
    definitive: string[];
    monitoring: string[];
  };
  
  // Explanations
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
}

/**
 * Differential diagnosis item
 */
export interface DifferentialItem {
  condition: string;
  pretestProbability: 'high' | 'moderate' | 'low' | 'variable';
  distinguishingFeatures: string[];
  confirmatoryTest: string;
  urgency: 'emergent' | 'urgent' | 'routine';
}

/**
 * Lab combination pattern
 */
export interface LabCombinationPattern {
  id: string;
  name: string;
  description: string;
  labs: { [key: string]: { expected: string; mechanism: string } };
  differential: string[];
  clinicalSignificance: string[];
}

/**
 * Critical value
 */
export interface CriticalValue {
  lab: string;
  criticalLow?: string;
  criticalHigh?: string;
  clinicalSignificance: string;
  immediateActions: string[];
  lifeThreatening: boolean;
}

/**
 * Artifact vs true abnormality
 */
export interface LabArtifact {
  abnormality: string;
  causes: { mechanism: string; cause: string }[];
  howToVerify: string[];
  clinicalContext: string[];
}
