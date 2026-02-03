/**
 * Biological Self - Medical Procedure Type Definitions
 */

export type ProcedureCategory =
  | 'diagnostic'
  | 'surgical'
  | 'therapeutic'
  | 'preventive'
  | 'rehabilitative';

export type ProcedureSubcategory =
  | 'blood-vascular'
  | 'cardiac'
  | 'imaging'
  | 'endoscopic'
  | 'neurological'
  | 'musculoskeletal'
  | 'respiratory'
  | 'gastrointestinal'
  | 'genitourinary'
  | 'dermatological'
  | 'ophthalmologic'
  | 'otologic'
  | 'dental'
  | 'oncologic'
  | 'obstetric'
  | 'psychiatric'
  | 'general-surgery'
  | 'orthopedic-surgery'
  | 'cardiovascular-surgery'
  | 'neurosurgery'
  | 'injection-infusion'
  | 'wound-care'
  | 'dialysis'
  | 'transfusion';

export type AnesthesiaType =
  | 'none'
  | 'local'
  | 'topical'
  | 'regional'
  | 'sedation'
  | 'general'
  | 'spinal'
  | 'epidural';

export type SettingType =
  | 'outpatient-clinic'
  | 'outpatient-surgery-center'
  | 'hospital-outpatient'
  | 'hospital-inpatient'
  | 'emergency-department'
  | 'intensive-care'
  | 'operating-room'
  | 'cardiac-cath-lab'
  | 'interventional-radiology'
  | 'endoscopy-suite'
  | 'bedside'
  | 'home';

export type RiskLevel = 'minimal' | 'low' | 'moderate' | 'high' | 'very-high';

export type UrgencyLevel = 'elective' | 'urgent' | 'emergent';

export interface CPTCode {
  code: string;
  description: string;
  modifier?: string;
  relativeValueUnits?: number;
}

export interface ICDCode {
  code: string;
  description: string;
}

export interface Duration {
  minimum: number; // minutes
  typical: number;
  maximum: number;
  unit: 'minutes' | 'hours';
}

export interface RecoveryTime {
  immediateRecovery: string; // e.g., "1-2 hours in recovery room"
  returnToNormalActivities: string; // e.g., "1-2 days"
  fullRecovery: string; // e.g., "1-2 weeks"
  restrictions: string[];
  followUpSchedule: string[];
}

export interface Complication {
  name: string;
  description: string;
  frequency: 'rare' | 'uncommon' | 'occasional' | 'common';
  frequencyPercent?: string; // e.g., "<1%", "1-5%"
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  prevention: string[];
  treatment: string[];
  warningSignsToReport: string[];
}

export interface PreparationStep {
  timing: string; // e.g., "1 week before", "night before", "day of"
  instruction: string;
  rationale: string;
  critical: boolean;
}

export interface ProcedureStep {
  stepNumber: number;
  phase: 'preparation' | 'positioning' | 'anesthesia' | 'procedure' | 'completion' | 'recovery';
  action: string;
  detailedDescription: string;
  duration?: string;
  patientExperience?: string;
  criticalPoints?: string[];
  equipmentUsed?: string[];
}

export interface AnatomyVisualization {
  structure: string;
  description: string;
  relevance: string;
  visualizationUrl?: string;
  modelType?: '3D' | '2D' | 'animation' | 'video';
}

export interface PatientExperience {
  beforeProcedure: string[];
  duringProcedure: string[];
  immediatelyAfter: string[];
  daysAfter: string[];
  sensationsToExpect: string[];
  painLevel: {
    during: string;
    after: string;
    managementOptions: string[];
  };
  emotionalConsiderations: string[];
}

export interface AlternativeProcedure {
  procedureId: string;
  name: string;
  whenPreferred: string;
  comparisonNotes: string;
}

export interface SpecialConsideration {
  population: string; // e.g., "elderly", "pediatric", "pregnant"
  modifications: string[];
  additionalRisks: string[];
  contraindicated?: boolean;
}

export interface Equipment {
  name: string;
  description: string;
  purpose: string;
  imageUrl?: string;
}

export interface DescriptionLevel {
  simple: string; // For general public
  intermediate: string; // For informed patients
  technical: string; // For healthcare professionals
  pediatric?: string; // Child-friendly explanation
}

export interface MedicalProcedure {
  // Identification
  id: string;
  name: string;
  alternativeNames: string[];
  category: ProcedureCategory;
  subcategory: ProcedureSubcategory;
  bodySystem: string;

  // Coding
  cptCodes: CPTCode[];
  icdCodes?: ICDCode[];

  // Descriptions
  description: DescriptionLevel;
  purpose: string;
  overview: string;

  // Clinical Information
  indications: {
    condition: string;
    explanation: string;
    urgency: UrgencyLevel;
  }[];

  contraindications: {
    absolute: {
      condition: string;
      reason: string;
    }[];
    relative: {
      condition: string;
      reason: string;
      workaround?: string;
    }[];
  };

  // Procedure Details
  setting: SettingType[];
  anesthesiaOptions: {
    type: AnesthesiaType;
    description: string;
    typical: boolean;
  }[];

  duration: Duration;

  preparation: {
    daysBeforeInstructions: PreparationStep[];
    dayOfInstructions: PreparationStep[];
    fastingRequired: boolean;
    fastingDuration?: string;
    medicationAdjustments: {
      medication: string;
      instruction: string;
      reason: string;
    }[];
    labsRequired: string[];
    imagingRequired: string[];
    consentRequired: boolean;
  };

  // Step-by-Step Process
  procedureSteps: ProcedureStep[];

  // Risks and Complications
  riskLevel: RiskLevel;
  complications: Complication[];

  // Recovery
  recovery: RecoveryTime;

  // Patient Experience
  patientExperience: PatientExperience;

  // Anatomy
  anatomyInvolved: AnatomyVisualization[];

  // Alternatives
  alternatives: AlternativeProcedure[];

  // Special Populations
  specialConsiderations: SpecialConsideration[];

  // Equipment
  equipment: Equipment[];

  // Success Metrics
  successRate?: string;
  expectedOutcomes: string[];

  // Resources
  patientResources: {
    title: string;
    url: string;
    type: 'video' | 'article' | 'pdf' | 'interactive';
  }[];

  // Metadata
  lastUpdated: string;
  references: string[];
}

// Search and filtering types
export interface ProcedureSearchFilters {
  category?: ProcedureCategory;
  subcategory?: ProcedureSubcategory;
  bodySystem?: string;
  riskLevel?: RiskLevel;
  setting?: SettingType;
  searchTerm?: string;
  cptCode?: string;
}

export interface ProcedureSearchResult {
  procedure: MedicalProcedure;
  relevanceScore: number;
  matchedFields: string[];
}
