/**
 * Clinical Pearls and High-Yield Content Type Definitions
 *
 * Types for marking clinically important anatomy, board exam
 * relevant content, and surgical/physical exam correlations.
 */

import type { LearningBodySystem } from '../learning-progress/types';

/**
 * Clinical relevance category
 */
export type ClinicalRelevanceCategory =
  | 'surgical-landmark'
  | 'physical-exam'
  | 'imaging-correlation'
  | 'pathology-site'
  | 'injection-site'
  | 'nerve-block'
  | 'vascular-access'
  | 'anatomical-variant';

/**
 * Board exam type
 */
export type BoardExamType =
  | 'USMLE-Step1'
  | 'USMLE-Step2'
  | 'COMLEX-Level1'
  | 'COMLEX-Level2'
  | 'NBME-Shelf'
  | 'MCAT'
  | 'PANCE'
  | 'NCLEX';

/**
 * High-yield category for filtering
 */
export type HighYieldCategory =
  | 'must-know'
  | 'frequently-tested'
  | 'clinical-vignette'
  | 'image-based'
  | 'calculation-based';

/**
 * Clinical pearl badge
 */
export interface ClinicalPearl {
  pearlId: string;
  structureId: string;
  structureName: string;
  system: LearningBodySystem;
  title: string;
  content: string;
  clinicalContext: string;
  relevanceCategories: ClinicalRelevanceCategory[];
  examRelevance: BoardExamRelevance[];
  highYieldCategory: HighYieldCategory;
  mnemonicTip?: string;
  commonMistakes?: string[];
  relatedPearls: string[];
  tags: string[];
  viewCount: number;
  helpfulCount: number;
}

/**
 * Board exam relevance
 */
export interface BoardExamRelevance {
  examType: BoardExamType;
  frequency: 'very-common' | 'common' | 'occasional' | 'rare';
  questionTypes: string[];
  sampleQuestion?: string;
  testingPoints: string[];
}

/**
 * Surgical landmark
 */
export interface SurgicalLandmark {
  landmarkId: string;
  structureId: string;
  structureName: string;
  system: LearningBodySystem;
  surgicalProcedures: string[];
  landmarkDescription: string;
  clinicalSignificance: string;
  safetyConsiderations: string[];
  relatedStructures: string[];
  visualizationTips: string;
  commonApproaches: SurgicalApproach[];
}

/**
 * Surgical approach
 */
export interface SurgicalApproach {
  approachName: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  structuresAtRisk: string[];
}

/**
 * Physical exam correlation
 */
export interface PhysicalExamCorrelation {
  correlationId: string;
  structureId: string;
  structureName: string;
  system: LearningBodySystem;
  examTechnique: string;
  normalFindings: string;
  abnormalFindings: AbnormalFinding[];
  patientPositioning: string;
  equipmentNeeded: string[];
  clinicalPearls: string[];
  videoUrl?: string;
}

/**
 * Abnormal physical exam finding
 */
export interface AbnormalFinding {
  findingName: string;
  description: string;
  associatedConditions: string[];
  sensitivity?: number;
  specificity?: number;
}

/**
 * Common exam question
 */
export interface CommonExamQuestion {
  questionId: string;
  structureId: string;
  structureName: string;
  system: LearningBodySystem;
  examTypes: BoardExamType[];
  questionStem: string;
  correctConcept: string;
  wrongAnswerTraps: string[];
  keyDistinction: string;
  relatedTopics: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
}

/**
 * High-yield structure summary
 */
export interface HighYieldStructure {
  structureId: string;
  structureName: string;
  system: LearningBodySystem;
  overallYieldScore: number;
  pearls: ClinicalPearl[];
  surgicalLandmarks: SurgicalLandmark[];
  physicalExamCorrelations: PhysicalExamCorrelation[];
  commonQuestions: CommonExamQuestion[];
  boardRelevance: Map<BoardExamType, number>;
}

/**
 * Filter options for high-yield content
 */
export interface HighYieldFilter {
  systems?: LearningBodySystem[];
  examTypes?: BoardExamType[];
  relevanceCategories?: ClinicalRelevanceCategory[];
  highYieldCategories?: HighYieldCategory[];
  minYieldScore?: number;
  hasSurgicalLandmarks?: boolean;
  hasPhysicalExam?: boolean;
}

/**
 * High-yield content state
 */
export interface ClinicalPearlsState {
  pearls: Map<string, ClinicalPearl>;
  surgicalLandmarks: Map<string, SurgicalLandmark>;
  physicalExamCorrelations: Map<string, PhysicalExamCorrelation>;
  commonQuestions: Map<string, CommonExamQuestion>;
  highYieldStructures: Map<string, HighYieldStructure>;
  currentFilter: HighYieldFilter;
  isLoaded: boolean;
}
