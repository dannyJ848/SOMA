/**
 * Self-Assessment Quiz Type Definitions
 *
 * Types for anatomy and physiology quizzes with adaptive
 * difficulty, score tracking, and spaced repetition.
 */

import type { LearningBodySystem } from '../learning-progress/types';

/**
 * Quiz question type
 */
export type QuestionType =
  | 'structure-identification'
  | 'function-match'
  | 'relationship'
  | 'pathway-sequence'
  | 'clinical-correlation'
  | 'true-false'
  | 'fill-blank';

/**
 * Answer format
 */
export type AnswerFormat = 'multiple-choice' | 'free-response' | 'image-select' | 'ordering';

/**
 * Difficulty level
 */
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Quiz status
 */
export type QuizStatus = 'not-started' | 'in-progress' | 'completed' | 'abandoned';

/**
 * Answer choice for multiple choice questions
 */
export interface AnswerChoice {
  choiceId: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

/**
 * Quiz question
 */
export interface QuizQuestion {
  questionId: string;
  type: QuestionType;
  format: AnswerFormat;
  system: LearningBodySystem;
  difficulty: DifficultyLevel;
  questionText: string;
  questionHint?: string;
  imageUrl?: string;
  structureId?: string;
  choices?: AnswerChoice[];
  correctAnswer: string;
  explanation: QuestionExplanation;
  tags: string[];
  relatedTopicIds: string[];
  timeLimit?: number;
}

/**
 * Detailed explanation for a question
 */
export interface QuestionExplanation {
  brief: string;
  detailed: string;
  clinicalRelevance?: string;
  mnemonicTip?: string;
  relatedConcepts: string[];
}

/**
 * User's answer to a question
 */
export interface UserAnswer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
  timeTaken: number;
  answeredAt: Date;
  confidenceLevel?: 1 | 2 | 3 | 4 | 5;
}

/**
 * Quiz session
 */
export interface QuizSession {
  sessionId: string;
  userId: string;
  title: string;
  description?: string;
  systems: LearningBodySystem[];
  questionTypes: QuestionType[];
  difficulty: DifficultyLevel;
  questions: QuizQuestion[];
  answers: UserAnswer[];
  currentQuestionIndex: number;
  status: QuizStatus;
  startedAt: Date;
  completedAt?: Date;
  totalTime: number;
  score: QuizScore;
  isAdaptive: boolean;
}

/**
 * Quiz score
 */
export interface QuizScore {
  correct: number;
  incorrect: number;
  total: number;
  percentage: number;
  bySystem: Map<LearningBodySystem, { correct: number; total: number }>;
  byDifficulty: Map<DifficultyLevel, { correct: number; total: number }>;
  byType: Map<QuestionType, { correct: number; total: number }>;
}

/**
 * Quiz configuration
 */
export interface QuizConfig {
  systems: LearningBodySystem[];
  questionTypes: QuestionType[];
  difficulty: DifficultyLevel;
  questionCount: number;
  timeLimit?: number;
  isAdaptive: boolean;
  focusOnWeakAreas: boolean;
  includeReview: boolean;
}

/**
 * Question bank entry with performance stats
 */
export interface QuestionBankEntry {
  question: QuizQuestion;
  timesAsked: number;
  timesCorrect: number;
  averageTime: number;
  lastAsked?: Date;
  userDifficulty: number;
}

/**
 * Performance by topic for weak area identification
 */
export interface TopicPerformance {
  topicId: string;
  topicName: string;
  system: LearningBodySystem;
  questionsAttempted: number;
  correctAnswers: number;
  accuracy: number;
  averageTime: number;
  lastAttempted?: Date;
  needsReview: boolean;
  recommendedDifficulty: DifficultyLevel;
}

/**
 * Quiz history entry
 */
export interface QuizHistoryEntry {
  sessionId: string;
  title: string;
  completedAt: Date;
  score: QuizScore;
  duration: number;
  systems: LearningBodySystem[];
  difficulty: DifficultyLevel;
}

/**
 * Weak area recommendation
 */
export interface WeakAreaRecommendation {
  topicId: string;
  topicName: string;
  system: LearningBodySystem;
  accuracy: number;
  questionCount: number;
  priority: 'high' | 'medium' | 'low';
  suggestedAction: string;
}

/**
 * Quiz statistics
 */
export interface QuizStatistics {
  totalQuizzes: number;
  totalQuestions: number;
  overallAccuracy: number;
  averageQuizDuration: number;
  streakDays: number;
  bestStreak: number;
  performanceBySystem: Map<LearningBodySystem, number>;
  performanceByType: Map<QuestionType, number>;
  recentTrend: 'improving' | 'stable' | 'declining';
  weakAreas: WeakAreaRecommendation[];
  strongAreas: { topicName: string; accuracy: number }[];
}

/**
 * Spaced repetition item
 */
export interface SpacedRepetitionItem {
  questionId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: Date;
  lastReviewDate?: Date;
}

/**
 * Quiz state for the store
 */
export interface QuizState {
  currentSession: QuizSession | null;
  questionBank: Map<string, QuestionBankEntry>;
  topicPerformance: Map<string, TopicPerformance>;
  history: QuizHistoryEntry[];
  statistics: QuizStatistics;
  spacedRepetition: Map<string, SpacedRepetitionItem>;
  isLoaded: boolean;
}
