/**
 * Women's Health Module - Type Definitions
 *
 * Specialized types for women's health education content,
 * building on the core educational content framework.
 */

import {
  LevelContent,
  EducationalContent,
  Citation,
} from '../content/types';

// =============================================================================
// MENSTRUAL HEALTH TYPES
// =============================================================================

export interface MenstrualCyclePhase {
  name: string;
  days: string;
  hormoneChanges: string;
  physicalChanges: string;
  emotionalChanges?: string;
  fertilitySigns?: string;
}

export interface MenstrualSymptom {
  symptom: string;
  normalRange: string;
  whenToSeekHelp: string;
  managementTips: string[];
}

export interface MenstrualHealthContent extends EducationalContent {
  type: 'process' | 'condition';
  category: 'menstrual-health';

  // Normal parameters
  normalRange?: {
    cycleLength: string;
    periodDuration: string;
    bloodLoss: string;
  };

  // Phases (for cycle-related content)
  phases?: MenstrualCyclePhase[];

  // Symptoms and management
  symptoms?: MenstrualSymptom[];

  // Tracking guidance
  trackingGuidance?: {
    whatToTrack: string[];
    whyTrack: string;
    tools: string[];
  };

  // When to seek care
  redFlags?: {
    symptom: string;
    urgency: 'routine' | 'soon' | 'urgent' | 'emergency';
    action: string;
  }[];
}

// =============================================================================
// REPRODUCTIVE HEALTH TYPES
// =============================================================================

export interface ContraceptiveMethod {
  name: string;
  type: 'hormonal' | 'barrier' | 'intrauterine' | 'permanent' | 'fertility-awareness' | 'emergency';
  effectiveness: {
    perfectUse: string;
    typicalUse: string;
  };
  howItWorks: string;
  advantages: string[];
  disadvantages: string[];
  sideEffects?: string[];
  contraindications?: string[];
  duration?: string;
  reversibility: string;
  stiProtection: boolean;
}

export interface FertilitySign {
  sign: string;
  whatItIndicates: string;
  howToObserve: string;
  interpretation: string;
}

export interface STIInfo {
  name: string;
  causativeAgent: string;
  transmission: string;
  symptoms: {
    early: string[];
    ifUntreated: string[];
  };
  testing: string;
  treatment: string;
  prevention: string[];
  complications?: string[];
}

export interface ScreeningGuideline {
  test: string;
  startAge: string;
  frequency: string;
  stopAge?: string;
  specialConsiderations?: string[];
  preparation?: string;
}

// =============================================================================
// PREGNANCY TYPES
// =============================================================================

export interface PregnancyWeek {
  week: number;
  babyDevelopment: string;
  maternalChanges: string;
  tips: string[];
  appointments?: string[];
}

export interface PregnancySymptom {
  symptom: string;
  trimester: 'first' | 'second' | 'third' | 'all';
  cause: string;
  relief: string[];
  whenToWorry: string;
}

export interface PregnancyWarningSign {
  sign: string;
  possibleCauses: string[];
  urgency: 'call-doctor' | 'same-day' | 'go-to-hospital' | 'call-911';
  action: string;
}

export interface LaborStage {
  stage: string;
  duration: string;
  whatHappens: string;
  whatToExpect: string;
  painManagement?: string[];
}

export interface PostpartumMilestone {
  timeframe: string;
  physicalRecovery: string[];
  emotionalAdjustment: string[];
  babyMilestones: string[];
  whenToSeekHelp: string[];
}

export interface BreastfeedingTopic {
  topic: string;
  guidance: string;
  commonChallenges: string[];
  solutions: string[];
  whenToGetHelp: string;
}

// =============================================================================
// MENOPAUSE TYPES
// =============================================================================

export interface MenopauseSymptom {
  symptom: string;
  prevalence: string;
  cause: string;
  managementOptions: {
    lifestyle: string[];
    nonHormonal: string[];
    hormonal?: string[];
  };
  typicalDuration?: string;
}

export interface HormoneTherapyOption {
  type: string;
  indications: string[];
  contraindications: string[];
  benefits: string[];
  risks: string[];
  formulations: string[];
  duration?: string;
}

export interface BoneHealthGuideline {
  topic: string;
  recommendations: string[];
  riskFactors?: string[];
  screening?: string;
}

// =============================================================================
// GYNECOLOGIC CONDITIONS TYPES
// =============================================================================

export interface GynecologicCondition extends EducationalContent {
  type: 'condition';
  category: 'gynecologic';

  prevalence: string;

  riskFactors: {
    factor: string;
    contribution: string;
  }[];

  symptoms: {
    symptom: string;
    frequency: 'common' | 'less-common' | 'occasional';
    description: string;
  }[];

  diagnosis: {
    method: string;
    whatToExpect: string;
  }[];

  treatment: {
    approach: string;
    type: 'lifestyle' | 'medication' | 'procedure' | 'surgery' | 'watchful-waiting';
    description: string;
    effectiveness?: string;
  }[];

  prognosis: string;

  livingWith?: {
    dailyManagement: string[];
    workplaceAccommodations?: string[];
    relationships?: string;
    fertilityImpact?: string;
  };

  support?: {
    organizations: string[];
    resources: string[];
  };
}

// =============================================================================
// BREAST HEALTH TYPES
// =============================================================================

export interface BreastExamGuideline {
  type: 'self-exam' | 'clinical-exam' | 'mammogram' | 'mri' | 'ultrasound';
  purpose: string;
  frequency: string;
  ageGuidelines: string;
  technique?: string[];
  whatToLookFor?: string[];
  followUp?: string;
}

export interface BreastCondition {
  name: string;
  nature: 'benign' | 'malignant' | 'varies';
  description: string;
  symptoms: string[];
  diagnosis: string[];
  treatment: string[];
  prognosis: string;
  followUp?: string;
}

// =============================================================================
// MENTAL HEALTH TYPES
// =============================================================================

export interface PerinatalMentalHealthCondition extends EducationalContent {
  type: 'condition';
  category: 'perinatal-mental-health';

  timing: string;
  prevalence: string;

  riskFactors: {
    factor: string;
    type: 'biological' | 'psychological' | 'social';
  }[];

  symptoms: {
    category: string;
    examples: string[];
  }[];

  differentialDiagnosis?: string[];

  screening: {
    tool: string;
    when: string;
  }[];

  treatment: {
    approach: string;
    type: 'psychotherapy' | 'medication' | 'support' | 'lifestyle' | 'intensive';
    details: string;
    evidenceLevel?: string;
  }[];

  impactOnBaby?: string;
  impactOnRelationships?: string;
  recoveryExpectations: string;

  emergencyResources: {
    situation: string;
    resource: string;
    contact?: string;
  }[];

  partnerGuidance?: string[];
}

// =============================================================================
// CONTENT GENERATION HELPERS
// =============================================================================

export function createWomensHealthContent(
  id: string,
  name: string,
  category: string,
  levels: EducationalContent['levels'],
  additionalFields?: Partial<EducationalContent>
): EducationalContent {
  const now = new Date().toISOString();

  return {
    id,
    type: 'concept',
    name,
    levels,
    media: [],
    citations: [],
    crossReferences: [],
    tags: {
      systems: ['reproductive'],
      topics: ['womens-health', category],
      clinicalRelevance: 'high',
    },
    createdAt: now,
    updatedAt: now,
    version: 1,
    status: 'published',
    ...additionalFields,
  };
}

export const WOMENS_HEALTH_CITATIONS: Citation[] = [
  {
    id: 'acog-guidelines',
    type: 'website',
    title: 'ACOG Practice Guidelines',
    source: 'American College of Obstetricians and Gynecologists',
    url: 'https://www.acog.org/clinical',
    license: 'Proprietary - Referenced',
  },
  {
    id: 'uptodate-womens-health',
    type: 'website',
    title: 'UpToDate - Women\'s Health',
    source: 'UpToDate / Wolters Kluwer',
    url: 'https://www.uptodate.com',
    license: 'Proprietary - Referenced',
  },
  {
    id: 'who-reproductive-health',
    type: 'website',
    title: 'WHO Sexual and Reproductive Health Guidelines',
    source: 'World Health Organization',
    url: 'https://www.who.int/health-topics/sexual-and-reproductive-health',
    license: 'CC BY-NC-SA 3.0 IGO',
  },
  {
    id: 'cdc-womens-health',
    type: 'website',
    title: 'CDC Women\'s Health',
    source: 'Centers for Disease Control and Prevention',
    url: 'https://www.cdc.gov/women/',
    license: 'Public Domain',
  },
];
