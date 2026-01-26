/**
 * Evidence-Based Medicine Content Types
 *
 * Extended types for evidence-based medicine content including
 * study types, statistical concepts, clinical research methods,
 * and evidence interpretation.
 */

import { ComplexityLevel } from '../types';

/**
 * A quiz question for knowledge assessment
 */
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

/**
 * Content level for evidence-based medicine (array-based format)
 */
export interface EBMLevelContent {
  level: ComplexityLevel;
  title: string;
  content: string;
  keyPoints: string[];
  quiz: QuizQuestion[];
}

/**
 * Evidence-based medicine educational content (array-based format)
 */
export interface EBMContent {
  id: string;
  title: string;
  category: string;
  description?: string;
  levels: EBMLevelContent[];
}
