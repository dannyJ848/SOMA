/**
 * Pain Management Content Types
 *
 * Data models for comprehensive pain management educational content.
 * Supports multi-level complexity to help patients and healthcare providers
 * understand pain assessment, treatment options, and management strategies.
 */

import { ComplexityLevel, Citation, MediaAsset, CrossReference, ContentTags } from '../types';

/**
 * Pain assessment scale type
 */
export interface PainAssessmentScale {
  name: string;
  abbreviation?: string;
  scoreRange: {
    min: number;
    max: number;
    unit?: string;
  };
  interpretation: {
    range: string;
    severity: 'none' | 'mild' | 'moderate' | 'severe' | 'worst';
    description: string;
  }[];
  applicablePopulations: string[];
  limitations?: string[];
  advantages?: string[];
}

/**
 * Medication class for pain management
 */
export interface PainMedication {
  genericName: string;
  brandNames?: string[];
  class: string;
  subclass?: string;
  mechanismOfAction: string;
  indications: string[];
  contraindications: string[];
  commonDosing?: string;
  maxDailyDose?: string;
  sideEffects: {
    common: string[];
    serious: string[];
  };
  drugInteractions?: string[];
  specialPopulations?: {
    population: string;
    consideration: string;
  }[];
  monitoringRequired?: string[];
  blackBoxWarning?: string;
  deaSchedule?: 'II' | 'III' | 'IV' | 'V' | 'unscheduled';
  costCategory?: 'low' | 'moderate' | 'high' | 'very-high';
}

/**
 * WHO Pain Ladder step
 */
export interface WHOPainLadderStep {
  step: 1 | 2 | 3;
  painSeverity: string;
  medicationClasses: string[];
  examples: PainMedication[];
  adjuvants?: string[];
  principles: string[];
  whenToStepUp: string[];
}

/**
 * Interventional procedure for pain management
 */
export interface InterventionalProcedure {
  name: string;
  category: 'injection' | 'ablation' | 'neuromodulation' | 'surgical' | 'implantable';
  description: string;
  indications: string[];
  contraindications: string[];
  technique?: string;
  risks: string[];
  expectedDuration?: string;
  evidenceLevel?: 'high' | 'moderate' | 'low' | 'very-low';
  recoverTime?: string;
}

/**
 * Physical therapy modality for pain management
 */
export interface PhysicalTherapyModality {
  name: string;
  category: 'manual' | 'exercise' | 'modality' | 'education';
  description: string;
  indications: string[];
  contraindications?: string[];
  frequency?: string;
  evidenceLevel?: 'high' | 'moderate' | 'low';
  patientEducationPoints?: string[];
}

/**
 * Complementary/alternative approach
 */
export interface ComplementaryApproach {
  name: string;
  category: 'mind-body' | 'manual' | 'traditional' | 'energy-based' | 'natural-products';
  description: string;
  proposedMechanism?: string;
  conditions: string[];
  evidenceLevel: 'strong' | 'moderate' | 'limited' | 'insufficient' | 'conflicting';
  safetyConsiderations?: string[];
  considerations?: string[];
}

/**
 * Content for a specific complexity level in pain management
 */
export interface PainManagementLevelContent {
  level: ComplexityLevel;
  summary: string;
  explanation: string;
  keyTerms: {
    term: string;
    definition: string;
    pronunciation?: string;
  }[];
  analogies?: string[];
  examples?: string[];
  clinicalNotes?: string;
  patientCounselingPoints?: string[];
}

/**
 * Complete pain management educational content
 */
export interface PainManagementContent {
  id: string;
  type: 'concept' | 'medication' | 'procedure' | 'assessment' | 'condition' | 'therapy';
  name: string;
  alternateNames?: string[];

  // Multi-level content
  levels: {
    1: PainManagementLevelContent;
    2: PainManagementLevelContent;
    3: PainManagementLevelContent;
    4: PainManagementLevelContent;
    5: PainManagementLevelContent;
  };

  // Pain-specific data
  assessmentScales?: PainAssessmentScale[];
  medications?: PainMedication[];
  procedures?: InterventionalProcedure[];
  physicalTherapy?: PhysicalTherapyModality[];
  complementaryApproaches?: ComplementaryApproach[];
  whoPainLadder?: WHOPainLadderStep[];

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
  contributors?: string[];
}

/**
 * Pain categories for organization
 */
export const PAIN_CATEGORIES = [
  'fundamentals',
  'assessment',
  'pharmacologic',
  'interventional',
  'physical-therapy',
  'complementary',
  'chronic-pain-syndromes',
] as const;

export type PainCategory = (typeof PAIN_CATEGORIES)[number];
