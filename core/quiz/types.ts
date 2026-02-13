/**
 * Comprehensive Medical Quiz Type Definitions
 *
 * Types for anatomy, histology, physiology, pathology, and pharmacology quizzes
 * with adaptive difficulty, spaced repetition, and multi-modal question formats.
 */

import type { LearningBodySystem } from '../learning-progress/types';
import type { BodySystemId } from '../physiology/types';
import type { TissueCategory, StainType, Magnification } from '../histology/types';
import type { PathologicalCategory } from '../pathology/types';
import type { DrugCategory } from '../pharmacology/types';

// ============================================
// Question Type Enums
// ============================================

/**
 * Content domain for questions
 */
export type ContentDomain =
  | 'anatomy'
  | 'histology'
  | 'physiology'
  | 'pathology'
  | 'pharmacology'
  | 'clinical-integration';

/**
 * Question type categories
 */
export type QuestionType =
  // Anatomy
  | 'structure-identification'
  | 'location-relationship'
  | 'blood-supply'
  | 'innervation'
  | 'anatomical-correlation'
  // Histology
  | 'tissue-identification'
  | 'cell-type-recognition'
  | 'staining-characteristics'
  | 'organ-specific-histology'
  // Physiology
  | 'process-mechanism'
  | 'regulatory-pathway'
  | 'homeostasis'
  | 'calculation'
  // Pathology
  | 'disease-mechanism'
  | 'morphological-change'
  | 'clinical-presentation'
  | 'diagnostic-feature'
  // Pharmacology
  | 'drug-mechanism'
  | 'side-effects'
  | 'drug-interaction'
  | 'clinical-scenario'
  // General
  | 'true-false'
  | 'fill-blank'
  | 'matching'
  | 'sequence-ordering';

/**
 * Answer format types
 */
export type AnswerFormat =
  | 'multiple-choice'
  | 'multiple-select'
  | 'free-response'
  | 'image-select'
  | 'hotspot'
  | 'ordering'
  | 'matching'
  | 'fill-in-blank'
  | 'drag-drop';

/**
 * Difficulty level (1-5 scale)
 */
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Quiz status
 */
export type QuizStatus = 'not-started' | 'in-progress' | 'completed' | 'abandoned' | 'paused';

/**
 * Quiz mode
 */
export type QuizMode =
  | 'practice'
  | 'timed-test'
  | 'review'
  | 'spaced-repetition'
  | 'adaptive'
  | 'custom';

// ============================================
// Answer Choice Types
// ============================================

/**
 * Answer choice for multiple choice questions
 */
export interface AnswerChoice {
  choiceId: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
  imageUrl?: string;
}

/**
 * Matching pair for matching questions
 */
export interface MatchingPair {
  itemId: string;
  term: string;
  definition: string;
  matchId: string;
}

/**
 * Hotspot region for image-based questions
 */
export interface HotspotRegion {
  id: string;
  type: 'circle' | 'rectangle' | 'polygon';
  coordinates: number[];
  label: string;
  isCorrect: boolean;
}

/**
 * Fill-in-blank segment
 */
export interface FillBlankSegment {
  type: 'text' | 'blank';
  content: string;
  acceptedAnswers?: string[];
  caseSensitive?: boolean;
}

// ============================================
// Question Explanation Types
// ============================================

/**
 * Detailed explanation for a question
 */
export interface QuestionExplanation {
  brief: string;
  detailed: string;
  clinicalRelevance?: string;
  mnemonicTip?: string;
  relatedConcepts: string[];
  references?: string[];
  videoUrl?: string;
  diagramUrl?: string;
}

// ============================================
// Base Question Interface
// ============================================

/**
 * Base quiz question interface
 */
export interface QuizQuestion {
  questionId: string;
  domain: ContentDomain;
  type: QuestionType;
  format: AnswerFormat;
  system: LearningBodySystem;
  difficulty: DifficultyLevel;

  // Question content
  questionText: string;
  questionHtml?: string;
  questionHint?: string;

  // Media
  imageUrl?: string;
  imageCaption?: string;
  audioUrl?: string;
  videoUrl?: string;
  modelId?: string; // 3D model reference

  // Answer data (depends on format)
  choices?: AnswerChoice[];
  matchingPairs?: MatchingPair[];
  hotspots?: HotspotRegion[];
  fillBlanks?: FillBlankSegment[];
  sequenceItems?: string[];

  // Correct answer
  correctAnswer: string | string[];
  acceptedAlternatives?: string[];

  // Explanation
  explanation: QuestionExplanation;

  // Metadata
  tags: string[];
  relatedTopicIds: string[];
  relatedStructureIds?: string[];
  timeLimit?: number; // seconds
  points?: number;

  // Source tracking
  source?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ============================================
// Domain-Specific Question Types
// ============================================

/**
 * Anatomy-specific question
 */
export interface AnatomyQuestion extends QuizQuestion {
  domain: 'anatomy';
  structureId?: string;
  structureName?: string;
  viewAngle?: string;
  anatomicalRegion?: string;
  clinicalCorrelation?: string;
}

/**
 * Histology-specific question
 */
export interface HistologyQuestion extends QuizQuestion {
  domain: 'histology';
  tissueCategory?: TissueCategory;
  tissueSubtype?: string;
  organSource?: string;
  stainType?: StainType;
  magnification?: Magnification;
  keyFeatures?: string[];
}

/**
 * Physiology-specific question
 */
export interface PhysiologyQuestion extends QuizQuestion {
  domain: 'physiology';
  processId?: string;
  processName?: string;
  bodySystem: BodySystemId;
  calculationType?: 'basic' | 'intermediate' | 'complex';
  formula?: string;
  variables?: { name: string; value: string; unit: string }[];
}

/**
 * Pathology-specific question
 */
export interface PathologyQuestion extends QuizQuestion {
  domain: 'pathology';
  pathologicalCategory?: PathologicalCategory;
  diseaseId?: string;
  diseaseName?: string;
  morphologyType?: 'gross' | 'microscopic' | 'ultrastructural';
  stagingInfo?: string;
}

/**
 * Pharmacology-specific question
 */
export interface PharmacologyQuestion extends QuizQuestion {
  domain: 'pharmacology';
  drugCategory?: DrugCategory;
  drugId?: string;
  drugName?: string;
  drugClass?: string;
  mechanismType?: string;
  interactionSeverity?: 'minor' | 'moderate' | 'major' | 'contraindicated';
}

// ============================================
// User Answer Types
// ============================================

/**
 * User's answer to a question
 */
export interface UserAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  isPartiallyCorrect?: boolean;
  partialScore?: number;
  timeTaken: number; // milliseconds
  answeredAt: Date;
  confidenceLevel?: 1 | 2 | 3 | 4 | 5;
  flaggedForReview?: boolean;
  notes?: string;
}

// ============================================
// Quiz Session Types
// ============================================

/**
 * Quiz score breakdown
 */
export interface QuizScore {
  correct: number;
  incorrect: number;
  skipped: number;
  total: number;
  percentage: number;
  points?: number;
  maxPoints?: number;
  byDomain: Map<ContentDomain, { correct: number; total: number }>;
  bySystem: Map<LearningBodySystem, { correct: number; total: number }>;
  byDifficulty: Map<DifficultyLevel, { correct: number; total: number }>;
  byType: Map<QuestionType, { correct: number; total: number }>;
}

/**
 * Quiz session configuration
 */
export interface QuizConfig {
  // Content selection
  domains: ContentDomain[];
  systems: LearningBodySystem[];
  questionTypes: QuestionType[];

  // Difficulty
  difficulty: DifficultyLevel;
  difficultyRange?: { min: DifficultyLevel; max: DifficultyLevel };

  // Quiz settings
  questionCount: number;
  timeLimit?: number; // total time in seconds
  questionTimeLimit?: number; // per question

  // Modes
  mode: QuizMode;
  isAdaptive: boolean;
  showFeedback: 'immediate' | 'end' | 'none';
  allowSkip: boolean;
  allowReview: boolean;
  shuffleQuestions: boolean;
  shuffleChoices: boolean;

  // Focus areas
  focusOnWeakAreas: boolean;
  includeReviewItems: boolean;
  tags?: string[];
  excludeTags?: string[];
}

/**
 * Quiz session
 */
export interface QuizSession {
  sessionId: string;
  userId: string;
  config: QuizConfig;

  // Quiz content
  title: string;
  description?: string;
  questions: QuizQuestion[];

  // Progress
  answers: UserAnswer[];
  currentQuestionIndex: number;
  status: QuizStatus;

  // Timing
  startedAt: Date;
  completedAt?: Date;
  pausedAt?: Date;
  totalTime: number;
  timeRemaining?: number;

  // Score
  score: QuizScore;

  // Adaptive settings
  currentDifficulty?: DifficultyLevel;
  adaptiveAdjustments?: number;
}

// ============================================
// Question Bank Types
// ============================================

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
  successRate: number;
  tags: string[];
}

/**
 * Topic performance tracking
 */
export interface TopicPerformance {
  topicId: string;
  topicName: string;
  domain: ContentDomain;
  system: LearningBodySystem;
  questionsAttempted: number;
  correctAnswers: number;
  accuracy: number;
  averageTime: number;
  lastAttempted?: Date;
  needsReview: boolean;
  recommendedDifficulty: DifficultyLevel;
  weakAreas: string[];
  strongAreas: string[];
}

// ============================================
// Quiz History Types
// ============================================

/**
 * Quiz history entry
 */
export interface QuizHistoryEntry {
  sessionId: string;
  title: string;
  config: QuizConfig;
  completedAt: Date;
  score: QuizScore;
  duration: number;
  domains: ContentDomain[];
  systems: LearningBodySystem[];
  difficulty: DifficultyLevel;
  questionCount: number;
  improvement?: number;
}

/**
 * Weak area recommendation
 */
export interface WeakAreaRecommendation {
  topicId: string;
  topicName: string;
  domain: ContentDomain;
  system: LearningBodySystem;
  accuracy: number;
  questionCount: number;
  priority: 'high' | 'medium' | 'low';
  suggestedAction: string;
  suggestedResources?: string[];
}

// ============================================
// Quiz Statistics Types
// ============================================

/**
 * Comprehensive quiz statistics
 */
export interface QuizStatistics {
  // Overall stats
  totalQuizzes: number;
  totalQuestions: number;
  overallAccuracy: number;
  averageQuizDuration: number;

  // Streak tracking
  streakDays: number;
  bestStreak: number;
  lastActivityDate: Date;

  // Performance breakdowns
  performanceByDomain: Map<ContentDomain, number>;
  performanceBySystem: Map<LearningBodySystem, number>;
  performanceByType: Map<QuestionType, number>;
  performanceByDifficulty: Map<DifficultyLevel, number>;

  // Trends
  recentTrend: 'improving' | 'stable' | 'declining';
  weeklyAccuracy: number[];
  monthlyAccuracy: number[];

  // Recommendations
  weakAreas: WeakAreaRecommendation[];
  strongAreas: { topicName: string; accuracy: number; domain: ContentDomain }[];

  // Time analysis
  averageTimePerQuestion: number;
  fastestCategory: ContentDomain;
  slowestCategory: ContentDomain;
}

// ============================================
// Spaced Repetition Types
// ============================================

/**
 * SM-2 algorithm spaced repetition item
 */
export interface SpacedRepetitionItem {
  questionId: string;
  easeFactor: number;
  interval: number; // days
  repetitions: number;
  nextReviewDate: Date;
  lastReviewDate?: Date;
  quality: number; // last review quality (0-5)
  lapses: number;
  status: 'new' | 'learning' | 'review' | 'relearning';
}

/**
 * Spaced repetition deck
 */
export interface SpacedRepetitionDeck {
  deckId: string;
  name: string;
  description?: string;
  domain?: ContentDomain;
  system?: LearningBodySystem;
  items: Map<string, SpacedRepetitionItem>;
  createdAt: Date;
  lastStudied?: Date;
  newPerDay: number;
  reviewsPerDay: number;
  statistics: {
    totalCards: number;
    newCards: number;
    learningCards: number;
    reviewCards: number;
    dueToday: number;
    retention: number;
  };
}

// ============================================
// Flashcard Types
// ============================================

/**
 * Flashcard for spaced repetition study
 */
export interface Flashcard {
  cardId: string;
  questionId: string;
  front: {
    text: string;
    imageUrl?: string;
    audioUrl?: string;
  };
  back: {
    text: string;
    imageUrl?: string;
    explanation?: string;
  };
  domain: ContentDomain;
  system: LearningBodySystem;
  tags: string[];
  difficulty: DifficultyLevel;
  spacedRepetition: SpacedRepetitionItem;
}

// ============================================
// Quiz State Types
// ============================================

/**
 * Complete quiz state for the store
 */
export interface QuizState {
  // Current session
  currentSession: QuizSession | null;

  // Question bank
  questionBank: Map<string, QuestionBankEntry>;

  // Performance tracking
  topicPerformance: Map<string, TopicPerformance>;
  domainPerformance: Map<ContentDomain, number>;

  // History
  history: QuizHistoryEntry[];

  // Statistics
  statistics: QuizStatistics;

  // Spaced repetition
  spacedRepetition: Map<string, SpacedRepetitionItem>;
  decks: Map<string, SpacedRepetitionDeck>;

  // Flashcards
  flashcards: Map<string, Flashcard>;

  // UI state
  isLoaded: boolean;
  isLoading: boolean;
  error?: string;

  // Settings
  settings: QuizSettings;
}

/**
 * Quiz settings
 */
export interface QuizSettings {
  defaultDifficulty: DifficultyLevel;
  defaultQuestionCount: number;
  defaultTimeLimit?: number;
  showTimer: boolean;
  soundEffects: boolean;
  hapticFeedback: boolean;
  darkModeQuiz: boolean;
  autoAdvance: boolean;
  reviewMistakes: boolean;
  dailyGoal: number;
  reminderTime?: string;
}

// ============================================
// Event Types
// ============================================

/**
 * Quiz event for tracking and analytics
 */
export interface QuizEvent {
  eventId: string;
  eventType:
    | 'quiz-started'
    | 'quiz-completed'
    | 'quiz-abandoned'
    | 'question-answered'
    | 'question-skipped'
    | 'flashcard-reviewed'
    | 'streak-achieved'
    | 'achievement-unlocked';
  timestamp: Date;
  sessionId?: string;
  questionId?: string;
  data?: Record<string, unknown>;
}

/**
 * Quiz achievement
 */
export interface QuizAchievement {
  achievementId: string;
  name: string;
  description: string;
  icon: string;
  category: 'accuracy' | 'streak' | 'volume' | 'mastery' | 'speed';
  requirement: {
    type: string;
    value: number;
  };
  earnedAt?: Date;
  progress: number;
  isUnlocked: boolean;
}
