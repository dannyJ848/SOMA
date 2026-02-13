/**
 * Nutrition Science Content Types
 *
 * Types for nutrition science content including vitamins, minerals,
 * special diets, nutrition assessment, and nutrition therapy.
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
 * Content for a complexity level
 */
export interface LevelContent {
  level: ComplexityLevel;
  title: string;
  description: string;
  content: {
    keyPoints: string[];
    definitions: VocabularyTerm[];
    examples: string[];
  };
}

/**
 * Educational content for nutrition science
 */
export interface EducationalContent {
  id: string;
  title: string;
  category: string;
  description: string;
  levels: LevelContent[];
}
