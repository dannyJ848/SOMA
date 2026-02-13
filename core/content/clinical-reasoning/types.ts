/**
 * Clinical Reasoning Content Types
 *
 * Specialized types for clinical reasoning educational content including:
 * - Diagnostic algorithms
 * - History-taking frameworks
 * - Physical examination approaches
 * - Red flags and urgent referral criteria
 * - Differential diagnosis frameworks
 *
 * All content supports multi-level complexity (8th grade through MD level)
 */

import { ComplexityLevel, Citation, MediaAsset, CrossReference, ContentTags, LevelContent } from '../types';

/**
 * A single step in a diagnostic algorithm
 */
export interface AlgorithmStep {
  id: string;
  type: 'question' | 'action' | 'decision' | 'endpoint' | 'warning';
  content: {
    1: string;  // 8th grade version
    2: string;  // High school version
    3: string;  // College version
    4: string;  // Graduate version
    5: string;  // MD/Professional version
  };
  nextSteps?: {
    condition: string;
    targetStepId: string;
  }[];
  isRedFlag?: boolean;
  requiresUrgentAction?: boolean;
  clinicalPearl?: string;
}

/**
 * Complete diagnostic algorithm for a clinical presentation
 */
export interface DiagnosticAlgorithm {
  id: string;
  name: string;
  alternateNames?: string[];
  presentation: string;  // e.g., "Chest Pain", "Dyspnea"
  icdCodes?: string[];

  // Multi-level content for the algorithm overview
  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  // Algorithm steps (the actual decision tree)
  steps: AlgorithmStep[];
  startStepId: string;

  // Key differentials to consider
  differentials: {
    diagnosis: string;
    prevalence: 'common' | 'uncommon' | 'rare';
    urgency: 'emergent' | 'urgent' | 'routine';
    keyFeatures: string[];
  }[];

  // Red flags specific to this presentation
  redFlags: {
    finding: string;
    implication: string;
    action: string;
  }[];

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * History-taking mnemonic framework
 */
export interface HistoryFramework {
  id: string;
  name: string;
  acronym: string;
  fullName: string;
  applicableTo: string[];  // e.g., ['pain', 'symptoms', 'chief complaint']

  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  components: {
    letter: string;
    meaning: string;
    questions: {
      1: string[];  // 8th grade appropriate questions
      2: string[];
      3: string[];
      4: string[];
      5: string[];  // MD-level clinical questions
    };
    clinicalRationale: string;
    examples: string[];
  }[];

  // Sample case demonstrating framework use
  sampleCases?: {
    presentation: string;
    applicationOfFramework: Record<string, string>;
    level: ComplexityLevel;
  }[];

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Physical examination systematic approach
 */
export interface PhysicalExamApproach {
  id: string;
  name: string;
  bodySystem: string;
  region?: string;

  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  // Examination sequence
  sequence: {
    step: number;
    technique: string;
    description: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    normalFindings: string;
    abnormalFindings: {
      finding: string;
      possibleCauses: string[];
      significance: string;
    }[];
    patientPosition?: string;
    equipmentNeeded?: string[];
    clinicalPearl?: string;
  }[];

  // Common examination maneuvers/special tests
  specialTests?: {
    name: string;
    indication: string;
    technique: string;
    interpretation: {
      positive: string;
      negative: string;
    };
    sensitivity?: number;
    specificity?: number;
    clinicalUtility: string;
  }[];

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Red flags for a body system or presentation
 */
export interface RedFlagGuide {
  id: string;
  name: string;
  systemOrPresentation: string;

  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  redFlags: {
    flag: string;
    description: {
      1: string;  // Simple explanation
      2: string;
      3: string;
      4: string;
      5: string;  // Clinical detail
    };
    concernedConditions: string[];
    urgency: 'call-911' | 'emergency-department' | 'same-day' | 'within-days';
    action: string;
    rationale: string;
    prevalenceWhenPresent?: string;  // e.g., "30% have serious pathology"
  }[];

  // Context for when red flags are most important
  highRiskPopulations?: {
    population: string;
    additionalConcerns: string[];
  }[];

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Urgent referral criteria
 */
export interface UrgentReferralGuide {
  id: string;
  name: string;
  specialty: string;

  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  criteria: {
    indication: string;
    description: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    timeframe: 'immediate' | 'same-day' | '24-hours' | '48-72-hours' | '1-week' | '2-weeks';
    rationale: string;
    whatToExpect: string;  // What patient can expect from referral
    preparationNeeded?: string[];
  }[];

  // General guidance on specialty
  specialtyOverview: {
    whatTheyTreat: string;
    commonProcedures: string[];
    typicalWaitTimes?: string;
  };

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Differential diagnosis framework
 */
export interface DifferentialDiagnosisFramework {
  id: string;
  name: string;
  approach: string;  // e.g., "anatomical", "pathophysiological", "mnemonic"
  acronym?: string;  // e.g., "VINDICATE"

  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  categories: {
    category: string;
    letter?: string;  // If using mnemonic
    description: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    examples: string[];
    keyQuestions: string[];
  }[];

  // How to apply the framework
  applicationGuide: {
    step: number;
    instruction: string;
    tips: string[];
  }[];

  // Example cases showing framework application
  exampleCases?: {
    presentation: string;
    differentialsByCategory: Record<string, string[]>;
    finalDiagnosis?: string;
    level: ComplexityLevel;
  }[];

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Clinical decision rule (validated scoring system)
 */
export interface ClinicalDecisionRule {
  id: string;
  name: string;
  alternateNames?: string[];
  indication: string;

  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  // Scoring criteria
  criteria: {
    criterion: string;
    description: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    points: number;
    howToAssess: string;
  }[];

  // Score interpretation
  interpretation: {
    scoreRange: string;
    riskLevel: string;
    recommendation: string;
    probability?: string;
  }[];

  // Validation data
  validation: {
    sensitivity?: number;
    specificity?: number;
    derivationStudy?: string;
    validationStudies?: string[];
    limitations: string[];
  };

  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}
