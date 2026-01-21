/**
 * Learning Progress Tracking Type Definitions
 *
 * Types for tracking user exploration of educational content,
 * body systems progress, and learning history.
 */

/**
 * Body system for progress tracking
 */
export type LearningBodySystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'endocrine'
  | 'urinary'
  | 'reproductive'
  | 'lymphatic'
  | 'integumentary';

/**
 * Content type for learning
 */
export type LearningContentType =
  | 'anatomy-structure'
  | 'physiology-pathway'
  | 'pathophysiology'
  | 'symptom-exploration'
  | 'lab-exploration'
  | 'medication-mechanism'
  | 'clinical-scenario';

/**
 * Completion status
 */
export type CompletionStatus = 'not-started' | 'in-progress' | 'completed';

/**
 * User's learning progress
 */
export interface LearningProgress {
  userId: string;
  systemProgress: Map<LearningBodySystem, SystemProgress>;
  topicProgress: Map<string, TopicProgress>;
  recentlyViewed: RecentItem[];
  totalTimeSpent: number;
  overallCompletion: number;
  streakDays: number;
  lastActivityDate: Date;
  achievements: Achievement[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Progress for a body system
 */
export interface SystemProgress {
  system: LearningBodySystem;
  structuresViewed: number;
  structuresTotal: number;
  pathwaysViewed: number;
  pathwaysTotal: number;
  topicsViewed: number;
  topicsTotal: number;
  completionPercentage: number;
  timeSpent: number;
  lastViewed: Date | null;
  status: CompletionStatus;
}

/**
 * Progress for an individual topic
 */
export interface TopicProgress {
  topicId: string;
  topicName: string;
  contentType: LearningContentType;
  system: LearningBodySystem;
  viewCount: number;
  timeSpent: number;
  completionPercentage: number;
  status: CompletionStatus;
  firstViewed: Date;
  lastViewed: Date;
  bookmarked: boolean;
  notes: string[];
  relatedTopicsViewed: string[];
}

/**
 * Recently viewed item
 */
export interface RecentItem {
  itemId: string;
  itemName: string;
  itemType: LearningContentType;
  system: LearningBodySystem;
  viewedAt: Date;
  duration: number;
}

/**
 * Learning achievement
 */
export interface Achievement {
  achievementId: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  category: 'exploration' | 'completion' | 'streak' | 'depth';
}

/**
 * Continue learning suggestion
 */
export interface ContinueLearingSuggestion {
  suggestionId: string;
  topicId: string;
  topicName: string;
  system: LearningBodySystem;
  reason: SuggestionReason;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: number;
}

/**
 * Reason for suggestion
 */
export type SuggestionReason =
  | 'incomplete-topic'
  | 'related-to-recent'
  | 'next-in-system'
  | 'recommended-for-conditions'
  | 'popular-topic'
  | 'quick-review';

/**
 * Progress report for export
 */
export interface ProgressReport {
  reportId: string;
  generatedAt: Date;
  userId: string;
  summary: ProgressSummary;
  systemBreakdown: SystemProgressBreakdown[];
  recentActivity: RecentActivitySummary;
  recommendations: string[];
  achievements: Achievement[];
}

/**
 * Progress summary
 */
export interface ProgressSummary {
  totalTopicsViewed: number;
  totalTopicsAvailable: number;
  overallCompletion: number;
  totalTimeSpent: number;
  averageSessionLength: number;
  streakDays: number;
  mostExploredSystem: LearningBodySystem;
  leastExploredSystem: LearningBodySystem;
}

/**
 * System progress breakdown
 */
export interface SystemProgressBreakdown {
  system: LearningBodySystem;
  systemName: string;
  completion: number;
  topicsViewed: number;
  topicsTotal: number;
  timeSpent: number;
  status: CompletionStatus;
}

/**
 * Recent activity summary
 */
export interface RecentActivitySummary {
  last7Days: DailyActivity[];
  last30Days: WeeklyActivity[];
  topTopics: { topicName: string; viewCount: number }[];
}

/**
 * Daily activity
 */
export interface DailyActivity {
  date: Date;
  topicsViewed: number;
  timeSpent: number;
  newTopics: number;
}

/**
 * Weekly activity
 */
export interface WeeklyActivity {
  weekStart: Date;
  weekEnd: Date;
  topicsViewed: number;
  timeSpent: number;
  systemsFocused: LearningBodySystem[];
}

/**
 * Learning session
 */
export interface LearningSession {
  sessionId: string;
  startTime: Date;
  endTime: Date | null;
  topicsViewed: string[];
  activeTopicId: string | null;
  totalDuration: number;
}

/**
 * Progress update event
 */
export interface ProgressUpdateEvent {
  eventType: 'view' | 'complete' | 'bookmark' | 'note' | 'session-end';
  topicId: string;
  timestamp: Date;
  duration?: number;
  data?: Record<string, unknown>;
}

/**
 * Learning goal
 */
export interface LearningGoal {
  goalId: string;
  type: 'system-completion' | 'daily-time' | 'weekly-topics' | 'streak';
  target: number;
  current: number;
  deadline?: Date;
  completed: boolean;
  createdAt: Date;
}

/**
 * Progress tracking state
 */
export interface ProgressTrackingState {
  progress: LearningProgress | null;
  currentSession: LearningSession | null;
  suggestions: ContinueLearingSuggestion[];
  goals: LearningGoal[];
  isLoaded: boolean;
}
