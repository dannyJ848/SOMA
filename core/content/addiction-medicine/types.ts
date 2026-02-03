/**
 * Addiction Medicine Content Types
 *
 * Types for addiction medicine educational content including
 * substance use disorders, withdrawal management, medications,
 * and treatment approaches.
 */

import { ComplexityLevel } from '../types';
import type { LevelContent as StandardLevelContent } from '../types';

/**
 * A vocabulary term definition
 */
export interface VocabularyTerm {
  term: string;
  definition: string;
}

/**
 * Content level for addiction medicine module (array format)
 * Used by most addiction-medicine files
 */
export interface AddictionLevelContent {
  level: ComplexityLevel;
  title: string;
  content: string;
  keyPoints: string[];
  vocabulary: VocabularyTerm[];
}

/**
 * Educational content for addiction medicine topics (array format)
 * Used by most addiction-medicine files
 */
export interface EducationalContent {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  levels: AddictionLevelContent[];
}

/**
 * Educational content for addiction medicine topics (object format with numeric levels)
 * Used by smoking-cessation.ts and matches the standard EducationalContent structure
 * from /core/content/types.ts but with fewer required fields
 */
export interface EducationalContentObjectLevels {
  id: string;
  type: string;
  name: string;
  alternateNames?: string[];
  levels: {
    1: StandardLevelContent;
    2: StandardLevelContent;
    3: StandardLevelContent;
    4: StandardLevelContent;
    5: StandardLevelContent;
  };
}

/**
 * Union type for both addiction medicine content formats
 */
export type AddictionContent = EducationalContent | EducationalContentObjectLevels;
