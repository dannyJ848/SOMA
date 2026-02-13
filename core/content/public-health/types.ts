/**
 * Public Health Content Types
 *
 * Types for public health educational content including
 * epidemiology, health promotion, disease prevention,
 * and global health issues.
 */

import { ComplexityLevel } from '../types';

/**
 * A term definition for vocabulary
 */
export interface VocabularyTerm {
  term: string;
  definition: string;
}

/**
 * Content for a specific level in the public health module
 */
export interface PublicHealthLevelContent {
  level: ComplexityLevel;
  title: string;
  content: {
    summary: string;
    keyPoints: string[];
    vocabulary: VocabularyTerm[];
    examples: string[];
  };
}

/**
 * Public health educational content type
 */
export interface PublicHealthContent {
  id: string;
  title: string;
  category: string;
  description: string;
  levels: PublicHealthLevelContent[];
}
