/**
 * Precise AI Cueing System Type Definitions
 *
 * Types for AI-driven proactive educational content surfacing
 * based on health context, user activity, and learning patterns.
 */

import type { LearningBodySystem, LearningContentType } from '../learning-progress/types';

/**
 * Cue trigger type - what caused this cue
 */
export type CueTriggerType =
  | 'symptom-entry'
  | 'lab-view'
  | 'biomarker-change'
  | 'medication-reminder'
  | 'time-based'
  | 'learning-milestone'
  | 'health-anniversary'
  | 'structure-click'
  | 'search-query'
  | 'idle-prompt';

/**
 * Cue priority level
 */
export type CuePriority = 'urgent' | 'important' | 'suggested' | 'nice-to-know';

/**
 * Notification style for cue delivery
 */
export type NotificationStyle =
  | 'banner'
  | 'toast'
  | 'badge'
  | 'spotlight'
  | 'inline'
  | 'modal';

/**
 * Cue frequency preference
 */
export type CueFrequency = 'always' | 'often' | 'sometimes' | 'rarely' | 'never';

/**
 * Engagement action for tracking
 */
export type EngagementAction =
  | 'viewed'
  | 'clicked'
  | 'dismissed'
  | 'snoozed'
  | 'completed'
  | 'shared'
  | 'bookmarked';

/**
 * Cue trigger event
 */
export interface CueTrigger {
  triggerId: string;
  triggerType: CueTriggerType;
  sourceId: string;
  sourceName: string;
  sourceDetails: Record<string, unknown>;
  timestamp: Date;
  contextData: ContextData;
}

/**
 * Context data for cue generation
 */
export interface ContextData {
  currentView: string;
  recentActivity: string[];
  activeHealthConditions: string[];
  recentSymptoms: string[];
  viewedStructures: string[];
  searchHistory: string[];
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  dayOfWeek: number;
  learningStreak: number;
}

/**
 * Educational cue
 */
export interface EducationalCue {
  cueId: string;
  userId: string;
  trigger: CueTrigger;
  priority: CuePriority;
  title: string;
  summary: string;
  detailedContent: string;
  relevanceExplanation: string;
  targetContent: CueTargetContent;
  notificationStyle: NotificationStyle;
  displayDuration?: number;
  expiresAt?: Date;
  createdAt: Date;
  status: CueStatus;
  engagement: CueEngagement | null;
  tags: string[];
}

/**
 * Cue status
 */
export interface CueStatus {
  isActive: boolean;
  isRead: boolean;
  isDismissed: boolean;
  isSnoozed: boolean;
  snoozeUntil?: Date;
  isCompleted: boolean;
}

/**
 * Target content linked to a cue
 */
export interface CueTargetContent {
  contentId: string;
  contentName: string;
  contentType: LearningContentType;
  system: LearningBodySystem;
  structureId?: string;
  navigationPath: string;
  deepLinkParams: Record<string, string>;
  previewText: string;
  thumbnailUrl?: string;
}

/**
 * Cue engagement tracking
 */
export interface CueEngagement {
  cueId: string;
  actions: EngagementRecord[];
  totalViewTime: number;
  clickThroughToContent: boolean;
  completedLearning: boolean;
  feedbackRating?: 1 | 2 | 3 | 4 | 5;
  feedbackComment?: string;
}

/**
 * Engagement record
 */
export interface EngagementRecord {
  action: EngagementAction;
  timestamp: Date;
  durationMs?: number;
  additionalData?: Record<string, unknown>;
}

/**
 * User cue preferences
 */
export interface CuePreferences {
  userId: string;
  globalFrequency: CueFrequency;
  frequencyByTrigger: Map<CueTriggerType, CueFrequency>;
  frequencyByPriority: Map<CuePriority, CueFrequency>;
  preferredNotificationStyle: NotificationStyle;
  quietHours: QuietHours | null;
  maxCuesPerDay: number;
  maxCuesPerSession: number;
  enableSounds: boolean;
  enableVibration: boolean;
  groupSimilarCues: boolean;
}

/**
 * Quiet hours configuration
 */
export interface QuietHours {
  enabled: boolean;
  startTime: string;
  endTime: string;
  daysOfWeek: number[];
  allowUrgent: boolean;
}

/**
 * Cue template for generation
 */
export interface CueTemplate {
  templateId: string;
  triggerType: CueTriggerType;
  priority: CuePriority;
  titleTemplate: string;
  summaryTemplate: string;
  contentTemplate: string;
  relevanceTemplate: string;
  targetContentType: LearningContentType;
  targetSystem?: LearningBodySystem;
  notificationStyle: NotificationStyle;
  displayDuration?: number;
  expirationHours?: number;
}

/**
 * Cue analytics
 */
export interface CueAnalytics {
  totalCuesGenerated: number;
  totalCuesViewed: number;
  totalCuesClicked: number;
  totalCuesDismissed: number;
  averageEngagementRate: number;
  clickThroughRate: number;
  completionRate: number;
  byTriggerType: Map<CueTriggerType, TriggerAnalytics>;
  byPriority: Map<CuePriority, PriorityAnalytics>;
  topPerformingCues: string[];
  leastEngagedCues: string[];
}

/**
 * Analytics by trigger type
 */
export interface TriggerAnalytics {
  count: number;
  viewRate: number;
  clickRate: number;
  dismissRate: number;
}

/**
 * Analytics by priority
 */
export interface PriorityAnalytics {
  count: number;
  viewRate: number;
  clickRate: number;
  averageFeedbackRating: number;
}

/**
 * AI cueing state
 */
export interface AICueingState {
  activeCues: Map<string, EducationalCue>;
  cueHistory: Map<string, EducationalCue>;
  templates: Map<string, CueTemplate>;
  preferences: CuePreferences;
  analytics: CueAnalytics;
  currentContext: ContextData | null;
  isLoaded: boolean;
}
