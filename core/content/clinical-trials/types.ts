/**
 * Clinical Trials Content Types
 *
 * Extended types for clinical trials content including
 * trial phases, study designs, ethical considerations,
 * and participant information.
 */

import { ComplexityLevel, LevelContent, ContentType } from '../types';

/**
 * A term definition for vocabulary
 */
export interface VocabularyTerm {
  term: string;
  definition: string;
}

/**
 * Content level for clinical trials educational content (array-based format)
 */
export interface ClinicalTrialsLevelContent {
  level: ComplexityLevel;
  title: string;
  content: string;
  keyPoints: string[];
  vocabulary: VocabularyTerm[];
}

/**
 * Clinical trials educational content (array-based format)
 */
export interface ClinicalTrialsContent {
  id: string;
  title: string;
  category: string;
  levels: ClinicalTrialsLevelContent[];
}

/**
 * Extended educational content for clinical trials (object-based levels format)
 * This type makes optional fields that may not be populated in all content
 */
export interface ClinicalTrialsEducationalContent {
  id: string;
  type: ContentType;
  name: string;
  alternateNames?: string[];
  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };
  media?: any[];
  citations?: any[];
  crossReferences?: any[];
  tags?: any;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
  status?: 'draft' | 'review' | 'published';
  contributors?: string[];
}
