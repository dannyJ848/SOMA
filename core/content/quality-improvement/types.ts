/**
 * Quality Improvement Content Types
 *
 * Types for quality improvement educational content including
 * methodology, patient safety, performance measurement, and
 * quality improvement tools and frameworks.
 */

/**
 * Quiz question for knowledge assessment
 */
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

/**
 * Level content for quality improvement (named level format)
 */
export interface QILevelContent {
  title: string;
  content: string;
  learningObjectives: string[];
  keyTerms: Record<string, string>;
  quizQuestions: QuizQuestion[];
  estimatedReadTime: number;
  prerequisites: string[];
}

/**
 * Alternative level content format (numeric levels)
 */
export interface NumericLevelContent {
  level: number;
  summary: string;
  explanation: string;
  keyTerms: Array<{ term: string; definition: string }>;
  analogies?: string[];
  examples?: string[];
  patientCounselingPoints?: string[];
}

/**
 * Quality improvement level names
 */
export type QILevelName = 'novice' | 'beginner' | 'intermediate' | 'advanced' | 'expert';

/**
 * Levels format - can be either named levels or numeric levels
 */
export type LevelsFormat =
  | Partial<Record<QILevelName, QILevelContent>>
  | Partial<Record<'1' | '2' | '3' | '4' | '5', NumericLevelContent>>;

/**
 * Quality improvement educational content with named levels
 * All levels are optional to support partial content
 */
export interface EducationalContent {
  id: string;
  title?: string;
  category?: string;
  subcategory?: string;
  description?: string;
  // Optional fields from alternate format
  type?: string;
  name?: string;
  alternateNames?: string[];
  // Support both named levels (novice, beginner, etc.) and numeric levels (1, 2, 3, etc.)
  levels?: LevelsFormat;
}
