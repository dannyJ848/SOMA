/**
 * Lab Interpretation Content Types
 *
 * Defines types specific to laboratory value interpretation content,
 * building on the base EducationalContent types.
 */

import { ComplexityLevel, EducationalContent, LevelContent } from '../types';

/**
 * Reference range with demographic variations
 */
export interface ReferenceRange {
  low: number;
  high: number;
  unit: string;
  demographic?: {
    ageGroup?: 'pediatric' | 'adult' | 'geriatric';
    sex?: 'male' | 'female';
    trimester?: 1 | 2 | 3; // For pregnancy
    condition?: string; // e.g., 'athlete', 'high altitude'
  };
  notes?: string;
}

/**
 * Critical value thresholds requiring immediate action
 */
export interface CriticalValue {
  low?: number;
  high?: number;
  unit: string;
  urgency: 'immediate' | 'urgent' | 'expedited';
  action: string;
  notificationRequired: boolean;
}

/**
 * Clinical significance of abnormal values
 */
export interface AbnormalityInterpretation {
  direction: 'low' | 'high';
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  causes: CauseCategory[];
  associatedFindings: string[];
  workupSuggestions: string[];
  clinicalPearls: string[];
}

/**
 * Categorized causes of abnormal values
 */
export interface CauseCategory {
  category: string; // e.g., 'Decreased Production', 'Increased Loss'
  causes: string[];
  commonality: 'common' | 'uncommon' | 'rare';
}

/**
 * Specimen collection requirements
 */
export interface SpecimenRequirements {
  specimenType: string; // e.g., 'serum', 'plasma', 'whole blood'
  tubeType?: string; // e.g., 'lavender top (EDTA)', 'red top'
  volume?: string;
  fastingRequired: boolean;
  fastingDuration?: string;
  specialHandling?: string[];
  stability?: {
    roomTemp?: string;
    refrigerated?: string;
    frozen?: string;
  };
  interferences?: string[];
}

/**
 * Lab test method information
 */
export interface LabMethodology {
  primaryMethod: string;
  alternativeMethods?: string[];
  pointOfCare?: boolean;
  turnaroundTime?: string;
  limitations?: string[];
}

/**
 * Complete lab interpretation content
 */
export interface LabInterpretationContent extends EducationalContent {
  type: 'concept'; // Labs are concepts in the content system

  // Lab-specific metadata
  labMetadata: {
    loincCode?: string;
    cptCode?: string;
    testName: string;
    commonAbbreviations: string[];
    category: LabCategory;
    panel?: string; // e.g., 'CBC', 'BMP', 'CMP'
    orderingFrequency: 'routine' | 'common' | 'specialty';
  };

  // Reference ranges
  referenceRanges: {
    adult: ReferenceRange;
    variations?: ReferenceRange[];
  };

  // Critical values
  criticalValues?: CriticalValue;

  // Abnormality interpretations
  interpretations: {
    low?: AbnormalityInterpretation;
    high?: AbnormalityInterpretation;
  };

  // Specimen requirements
  specimen: SpecimenRequirements;

  // Methodology
  methodology?: LabMethodology;

  // Related labs for panel interpretation
  relatedLabs?: string[];

  // Organ/system associations
  organAssociations: {
    organId: string;
    organName: string;
    relationship: string;
  }[];
}

/**
 * Lab panel grouping
 */
export interface LabPanel {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  includedTests: string[]; // IDs of LabInterpretationContent
  commonIndications: string[];
  interpretationGuidance: {
    level: ComplexityLevel;
    content: string;
  }[];
  patterns: PanelPattern[];
}

/**
 * Common patterns seen in lab panels
 */
export interface PanelPattern {
  patternName: string;
  description: string;
  labFindings: {
    labId: string;
    labName: string;
    expectedDirection: 'low' | 'high' | 'normal';
  }[];
  suggestsDiagnosis: string[];
  clinicalContext: string;
}

/**
 * Lab categories
 */
export type LabCategory =
  | 'hematology'
  | 'chemistry'
  | 'liver'
  | 'kidney'
  | 'lipid'
  | 'thyroid'
  | 'cardiac'
  | 'coagulation'
  | 'electrolyte'
  | 'glucose'
  | 'inflammatory'
  | 'blood-gas'
  | 'urinalysis'
  | 'tumor-marker';

/**
 * Quick reference card for clinical use
 */
export interface LabQuickReference {
  labId: string;
  name: string;
  normalRange: string;
  criticalLow?: string;
  criticalHigh?: string;
  unit: string;
  mnemonics?: string[];
  quickInterpretation: {
    low: string;
    high: string;
  };
}
