/**
 * Radiology Content Types
 *
 * Defines types specific to radiology and medical imaging educational content,
 * building on the base EducationalContent types.
 */

import { ComplexityLevel, EducationalContent, LevelContent } from '../types';

/**
 * Imaging modality categories
 */
export type ImagingModality =
  | 'x-ray'
  | 'ct'
  | 'mri'
  | 'ultrasound'
  | 'pet'
  | 'nuclear-medicine'
  | 'fluoroscopy'
  | 'mammography'
  | 'dexa'
  | 'interventional';

/**
 * Body region for imaging
 */
export type BodyRegion =
  | 'head'
  | 'neck'
  | 'chest'
  | 'abdomen'
  | 'pelvis'
  | 'spine'
  | 'upper-extremity'
  | 'lower-extremity'
  | 'whole-body'
  | 'vascular';

/**
 * Contrast agent information
 */
export interface ContrastAgent {
  name: string;
  type: 'iodinated' | 'gadolinium' | 'barium' | 'microbubble' | 'radiotracer';
  route: 'intravenous' | 'oral' | 'rectal' | 'intrathecal' | 'intra-articular';
  indications: string[];
  contraindications: string[];
  adverseReactions: {
    mild: string[];
    moderate: string[];
    severe: string[];
  };
  renalConsiderations?: string;
  premedication?: string;
}

/**
 * Radiation exposure information
 */
export interface RadiationExposure {
  hasRadiation: boolean;
  typicalDose?: {
    value: number;
    unit: 'mSv' | 'mGy';
    range?: { min: number; max: number };
  };
  equivalentTo?: string; // e.g., "3 months of background radiation"
  organDose?: {
    organ: string;
    dose: number;
    unit: 'mGy';
  }[];
  riskCategory?: 'minimal' | 'low' | 'moderate' | 'high';
  ageConsiderations?: string;
  pregnancyRisk?: string;
}

/**
 * Patient preparation requirements
 */
export interface PatientPreparation {
  fastingRequired: boolean;
  fastingDuration?: string;
  hydration?: string;
  medications?: {
    hold: string[];
    continue: string[];
    premedication?: string[];
  };
  clothing?: string;
  jewelry?: string;
  implants?: string[];
  contrast?: {
    labsRequired: string[];
    eGFRCutoff?: number;
    diabeticInstructions?: string;
  };
  duration?: string;
  specialInstructions?: string[];
}

/**
 * Contraindication for imaging study
 */
export interface ImagingContraindication {
  condition: string;
  type: 'absolute' | 'relative';
  rationale: string;
  alternative?: string;
  safetyConcern?: string;
}

/**
 * Common imaging finding
 */
export interface ImagingFinding {
  name: string;
  description: string;
  appearance: {
    modality: ImagingModality;
    description: string;
    keyFeatures: string[];
  }[];
  differentialDiagnosis: string[];
  clinicalSignificance: 'incidental' | 'mild' | 'moderate' | 'significant' | 'critical';
  recommendedFollowUp?: string;
  urgency?: 'routine' | 'expedited' | 'urgent' | 'emergent';
}

/**
 * Imaging protocol information
 */
export interface ImagingProtocol {
  name: string;
  modality: ImagingModality;
  indication: string[];
  technique: {
    positioning?: string;
    sequences?: string[]; // For MRI
    phases?: string[]; // For CT
    views?: string[]; // For X-ray
    settings?: Record<string, string | number>;
  };
  contrastProtocol?: {
    agent: string;
    dose: string;
    timing: string;
    rate?: string;
  };
  reconstructions?: string[];
  reportElements: string[];
}

/**
 * MRI safety classification
 */
export type MRISafetyCategory =
  | 'mr-safe'
  | 'mr-conditional'
  | 'mr-unsafe'
  | 'unknown';

/**
 * Implant/device MRI safety information
 */
export interface MRIDeviceSafety {
  device: string;
  category: MRISafetyCategory;
  conditions?: string[]; // Conditions under which it's safe
  fieldStrengthLimit?: number; // Tesla
  waitPeriod?: string; // e.g., "6 weeks post-implantation"
  scanningZone?: string;
  additionalPrecautions?: string[];
}

/**
 * Complete radiology content for an imaging modality
 */
export interface RadiologyModalityContent extends EducationalContent {
  type: 'concept';

  // Imaging-specific metadata
  imagingMetadata: {
    modality: ImagingModality;
    alternativeNames: string[];
    yearIntroduced?: number;
    principleType: 'ionizing-radiation' | 'magnetic-resonance' | 'acoustic' | 'radiotracer';
  };

  // Physics principles (at appropriate complexity levels)
  physicsExplanation: {
    level: ComplexityLevel;
    content: string;
  }[];

  // Radiation information
  radiation: RadiationExposure;

  // Contrast agents used
  contrastAgents?: ContrastAgent[];

  // Contraindications
  contraindications: ImagingContraindication[];

  // Patient preparation
  preparation: PatientPreparation;

  // What it shows well
  strengths: string[];

  // Limitations
  limitations: string[];

  // Common clinical indications
  commonIndications: {
    indication: string;
    urgency: 'routine' | 'urgent' | 'emergent';
    bodyRegion: BodyRegion;
  }[];

  // Comparison with other modalities
  comparisonWithOtherModalities?: {
    modality: ImagingModality;
    comparison: string;
    preferWhen: string;
  }[];

  // Cost considerations
  costCategory?: 'low' | 'moderate' | 'high' | 'very-high';

  // Availability
  availability?: 'widespread' | 'common' | 'limited' | 'specialized-centers';
}

/**
 * Common findings content organized by modality and body region
 */
export interface CommonFindingsContent extends EducationalContent {
  type: 'concept';

  findingsMetadata: {
    modality: ImagingModality;
    bodyRegion: BodyRegion;
    category: 'normal-variants' | 'incidental' | 'pathological' | 'emergent';
  };

  findings: ImagingFinding[];

  // Pattern recognition tips
  patternRecognition: {
    level: ComplexityLevel;
    patterns: {
      name: string;
      description: string;
      examples: string[];
    }[];
  }[];

  // Pitfalls and mimics
  pitfalls: {
    pitfall: string;
    mimic: string;
    howToDistinguish: string;
  }[];
}

/**
 * Radiation safety educational content
 */
export interface RadiationSafetyContent extends EducationalContent {
  type: 'concept';

  safetyMetadata: {
    topic: 'patient-exposure' | 'occupational' | 'shielding' | 'alara' | 'pregnancy';
  };

  // Dose comparisons for patient education
  doseComparisons?: {
    study: string;
    dose: number;
    unit: 'mSv';
    equivalentBackground: string;
    equivalentFlights?: string;
  }[];

  // Safety principles
  safetyPrinciples: {
    principle: string;
    explanation: string;
    implementation: string[];
  }[];

  // Risk communication
  riskCommunication: {
    level: ComplexityLevel;
    content: string;
  }[];
}

/**
 * Imaging study preparation guide for patients
 */
export interface PatientPrepGuide {
  studyName: string;
  modality: ImagingModality;
  bodyRegion: BodyRegion;

  beforeExam: {
    days?: string[];
    night?: string[];
    morning?: string[];
  };

  whatToExpect: {
    arrival: string;
    duringExam: string;
    afterExam: string;
    duration: string;
  };

  faqs: {
    question: string;
    answer: string;
  }[];

  warnings: string[];

  contactInfo?: string;
}

/**
 * Quick reference card for radiology
 */
export interface RadiologyQuickReference {
  modalityId: string;
  name: string;
  radiation: 'none' | 'low' | 'moderate' | 'high';
  typicalDose?: string;
  duration: string;
  contrast?: 'none' | 'optional' | 'common' | 'required';
  keyContraindications: string[];
  bestFor: string[];
  notGoodFor: string[];
}

/**
 * ACR Appropriateness Criteria reference
 */
export interface AppropriatenessCriteria {
  clinicalScenario: string;
  recommendedStudies: {
    study: string;
    modality: ImagingModality;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; // ACR 1-9 scale
    radiationLevel: string;
    comments?: string;
  }[];
  variants?: {
    condition: string;
    modifications: string;
  }[];
  references: string[];
}
