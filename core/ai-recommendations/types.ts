/**
 * AI Learning Recommendations Type Definitions
 *
 * Types for AI-driven learning suggestions based on health data,
 * learning history, and knowledge gaps.
 */

import type { LearningBodySystem, LearningContentType } from '../learning-progress/types';

/**
 * Recommendation priority level
 */
export type RecommendationPriority = 'critical' | 'high' | 'medium' | 'low';

/**
 * Recommendation source - why this was recommended
 */
export type RecommendationSource =
  | 'health-condition'
  | 'symptom-reported'
  | 'medication-use'
  | 'lab-result'
  | 'knowledge-gap'
  | 'learning-path'
  | 'related-topic'
  | 'trending-health'
  | 'seasonal-relevance';

/**
 * Learning pace preference
 */
export type LearningPace = 'intensive' | 'moderate' | 'casual' | 'minimal';

/**
 * Digest frequency
 */
export type DigestFrequency = 'daily' | 'weekly' | 'biweekly' | 'monthly';

/**
 * Knowledge gap identified by AI
 */
export interface KnowledgeGap {
  gapId: string;
  topicId: string;
  topicName: string;
  system: LearningBodySystem;
  contentType: LearningContentType;
  relevanceToHealth: number;
  confidenceScore: number;
  prerequisiteTopics: string[];
  estimatedLearningTime: number;
  lastAssessed: Date;
}

/**
 * Health-based trigger for recommendation
 */
export interface HealthTrigger {
  triggerId: string;
  triggerType: 'condition' | 'symptom' | 'medication' | 'lab-result';
  triggerName: string;
  triggerDetails: string;
  relevantTopics: string[];
  urgency: RecommendationPriority;
}

/**
 * AI learning recommendation
 */
export interface LearningRecommendation {
  recommendationId: string;
  userId: string;
  topicId: string;
  topicName: string;
  system: LearningBodySystem;
  contentType: LearningContentType;
  priority: RecommendationPriority;
  source: RecommendationSource;
  personalizedReason: string;
  becauseYouHave: string[];
  learningObjectives: string[];
  estimatedTime: number;
  prerequisitesMet: boolean;
  prerequisites: string[];
  relatedTopics: string[];
  healthRelevance: HealthRelevanceExplanation;
  createdAt: Date;
  expiresAt?: Date;
  dismissed: boolean;
  completed: boolean;
}

/**
 * Explanation of health relevance
 */
export interface HealthRelevanceExplanation {
  summary: string;
  detailedExplanation: string;
  potentialBenefits: string[];
  connectionToHealth: string;
  actionableInsights: string[];
}

/**
 * Weekly learning digest
 */
export interface LearningDigest {
  digestId: string;
  userId: string;
  weekStart: Date;
  weekEnd: Date;
  generatedAt: Date;
  summary: DigestSummary;
  topRecommendations: LearningRecommendation[];
  knowledgeGapsIdentified: KnowledgeGap[];
  progressHighlights: string[];
  upcomingTopics: string[];
  motivationalMessage: string;
}

/**
 * Digest summary statistics
 */
export interface DigestSummary {
  newRecommendations: number;
  healthTriggeredCount: number;
  knowledgeGapCount: number;
  totalEstimatedTime: number;
  priorityBreakdown: Map<RecommendationPriority, number>;
  systemCoverage: Map<LearningBodySystem, number>;
}

/**
 * User learning preferences
 */
export interface LearningPreferences {
  userId: string;
  pace: LearningPace;
  digestFrequency: DigestFrequency;
  preferredSystems: LearningBodySystem[];
  excludedSystems: LearningBodySystem[];
  dailyTimeBudget: number;
  weeklyGoal: number;
  preferredContentTypes: LearningContentType[];
  notificationEnabled: boolean;
  focusOnHealthRelevant: boolean;
  includePreventive: boolean;
  depthPreference: 1 | 2 | 3 | 4 | 5;
}

/**
 * Recommendation engine configuration
 */
export interface RecommendationEngineConfig {
  maxRecommendations: number;
  healthWeightFactor: number;
  gapWeightFactor: number;
  recencyWeightFactor: number;
  includePrerequisites: boolean;
  respectPaceLimit: boolean;
  prioritizeUrgent: boolean;
}

/**
 * Topic-condition mapping for personalization
 */
export interface TopicConditionMapping {
  mappingId: string;
  conditionId: string;
  conditionName: string;
  relevantTopics: RelevantTopic[];
  learningPath: string[];
}

/**
 * Relevant topic for a condition
 */
export interface RelevantTopic {
  topicId: string;
  topicName: string;
  relevanceScore: number;
  whyRelevant: string;
  priority: RecommendationPriority;
}

/**
 * Recommendation feedback for learning
 */
export interface RecommendationFeedback {
  recommendationId: string;
  wasHelpful: boolean;
  relevanceRating: 1 | 2 | 3 | 4 | 5;
  difficultyRating: 1 | 2 | 3 | 4 | 5;
  comments?: string;
  submittedAt: Date;
}

/**
 * AI recommendations state
 */
export interface AIRecommendationsState {
  recommendations: Map<string, LearningRecommendation>;
  knowledgeGaps: Map<string, KnowledgeGap>;
  healthTriggers: Map<string, HealthTrigger>;
  currentDigest: LearningDigest | null;
  preferences: LearningPreferences;
  engineConfig: RecommendationEngineConfig;
  topicMappings: Map<string, TopicConditionMapping>;
  feedback: Map<string, RecommendationFeedback>;
  lastAnalyzed: Date | null;
  isLoaded: boolean;
}
