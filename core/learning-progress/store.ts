/**
 * Learning Progress Tracking Store
 *
 * Functions for tracking user exploration of educational content,
 * body systems progress, and learning history.
 */

import type {
  LearningBodySystem,
  LearningContentType,
  LearningProgress,
  SystemProgress,
  TopicProgress,
  RecentItem,
  Achievement,
  ContinueLearingSuggestion,
  ProgressReport,
  ProgressSummary,
  SystemProgressBreakdown,
  LearningSession,
  ProgressTrackingState,
  CompletionStatus,
  DailyActivity,
} from './types';

/**
 * System display names
 */
export const systemDisplayNames: Record<LearningBodySystem, string> = {
  cardiovascular: 'Cardiovascular System',
  respiratory: 'Respiratory System',
  digestive: 'Digestive System',
  nervous: 'Nervous System',
  musculoskeletal: 'Musculoskeletal System',
  endocrine: 'Endocrine System',
  urinary: 'Urinary System',
  reproductive: 'Reproductive System',
  lymphatic: 'Lymphatic System',
  integumentary: 'Integumentary System',
};

/**
 * Estimated topics per system (for percentage calculation)
 */
export const topicsPerSystem: Record<LearningBodySystem, number> = {
  cardiovascular: 45,
  respiratory: 30,
  digestive: 40,
  nervous: 50,
  musculoskeletal: 55,
  endocrine: 25,
  urinary: 20,
  reproductive: 25,
  lymphatic: 20,
  integumentary: 15,
};

/**
 * Achievement definitions
 */
export const achievementDefinitions: Achievement[] = [
  {
    achievementId: 'first-topic',
    name: 'First Steps',
    description: 'Viewed your first educational topic',
    icon: '🎯',
    earnedAt: new Date(),
    category: 'exploration',
  },
  {
    achievementId: 'system-complete',
    name: 'System Master',
    description: 'Completed 100% of a body system',
    icon: '⭐',
    earnedAt: new Date(),
    category: 'completion',
  },
  {
    achievementId: 'week-streak',
    name: 'Week Warrior',
    description: 'Learned something 7 days in a row',
    icon: '🔥',
    earnedAt: new Date(),
    category: 'streak',
  },
  {
    achievementId: 'deep-dive',
    name: 'Deep Diver',
    description: 'Spent 30+ minutes on a single topic',
    icon: '🏊',
    earnedAt: new Date(),
    category: 'depth',
  },
  {
    achievementId: 'explorer',
    name: 'Body Explorer',
    description: 'Viewed topics in all 10 body systems',
    icon: '🗺️',
    earnedAt: new Date(),
    category: 'exploration',
  },
  {
    achievementId: 'hundred-topics',
    name: 'Century Club',
    description: 'Viewed 100 different topics',
    icon: '💯',
    earnedAt: new Date(),
    category: 'completion',
  },
];

/**
 * Create empty system progress
 */
function createEmptySystemProgress(system: LearningBodySystem): SystemProgress {
  return {
    system,
    structuresViewed: 0,
    structuresTotal: topicsPerSystem[system],
    pathwaysViewed: 0,
    pathwaysTotal: Math.floor(topicsPerSystem[system] * 0.3),
    topicsViewed: 0,
    topicsTotal: topicsPerSystem[system],
    completionPercentage: 0,
    timeSpent: 0,
    lastViewed: null,
    status: 'not-started',
  };
}

/**
 * Create new learning progress
 */
export function createNewProgress(userId: string): LearningProgress {
  const systemProgress = new Map<LearningBodySystem, SystemProgress>();
  const systems: LearningBodySystem[] = [
    'cardiovascular', 'respiratory', 'digestive', 'nervous', 'musculoskeletal',
    'endocrine', 'urinary', 'reproductive', 'lymphatic', 'integumentary'
  ];

  for (const system of systems) {
    systemProgress.set(system, createEmptySystemProgress(system));
  }

  return {
    userId,
    systemProgress,
    topicProgress: new Map(),
    recentlyViewed: [],
    totalTimeSpent: 0,
    overallCompletion: 0,
    streakDays: 0,
    lastActivityDate: new Date(),
    achievements: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

/**
 * Create initial tracking state
 */
export function createInitialTrackingState(): ProgressTrackingState {
  return {
    progress: null,
    currentSession: null,
    suggestions: [],
    goals: [],
    isLoaded: false,
  };
}

/**
 * Start a new learning session
 */
export function startSession(): LearningSession {
  return {
    sessionId: `session-${Date.now()}`,
    startTime: new Date(),
    endTime: null,
    topicsViewed: [],
    activeTopicId: null,
    totalDuration: 0,
  };
}

/**
 * End a learning session
 */
export function endSession(session: LearningSession): LearningSession {
  return {
    ...session,
    endTime: new Date(),
    totalDuration: Date.now() - session.startTime.getTime(),
  };
}

/**
 * Record topic view
 */
export function recordTopicView(
  progress: LearningProgress,
  topicId: string,
  topicName: string,
  contentType: LearningContentType,
  system: LearningBodySystem,
  duration: number
): LearningProgress {
  const now = new Date();

  // Update or create topic progress
  let topicProg = progress.topicProgress.get(topicId);
  if (!topicProg) {
    topicProg = {
      topicId,
      topicName,
      contentType,
      system,
      viewCount: 0,
      timeSpent: 0,
      completionPercentage: 0,
      status: 'not-started',
      firstViewed: now,
      lastViewed: now,
      bookmarked: false,
      notes: [],
      relatedTopicsViewed: [],
    };
  }

  topicProg.viewCount += 1;
  topicProg.timeSpent += duration;
  topicProg.lastViewed = now;
  topicProg.status = topicProg.timeSpent > 60000 ? 'completed' : 'in-progress';
  topicProg.completionPercentage = Math.min(100, (topicProg.timeSpent / 60000) * 100);

  progress.topicProgress.set(topicId, topicProg);

  // Update system progress
  const systemProg = progress.systemProgress.get(system) || createEmptySystemProgress(system);
  const uniqueTopicsInSystem = Array.from(progress.topicProgress.values())
    .filter((t) => t.system === system).length;
  systemProg.topicsViewed = uniqueTopicsInSystem;
  systemProg.completionPercentage = Math.round((systemProg.topicsViewed / systemProg.topicsTotal) * 100);
  systemProg.timeSpent += duration;
  systemProg.lastViewed = now;
  systemProg.status = determineStatus(systemProg.completionPercentage);
  progress.systemProgress.set(system, systemProg);

  // Update recently viewed
  const recentItem: RecentItem = {
    itemId: topicId,
    itemName: topicName,
    itemType: contentType,
    system,
    viewedAt: now,
    duration,
  };
  progress.recentlyViewed = [recentItem, ...progress.recentlyViewed.slice(0, 49)];

  // Update overall progress
  progress.totalTimeSpent += duration;
  progress.overallCompletion = calculateOverallCompletion(progress);
  progress.lastActivityDate = now;
  progress.updatedAt = now;

  // Check for streak
  progress.streakDays = calculateStreak(progress);

  return progress;
}

/**
 * Determine completion status from percentage
 */
function determineStatus(percentage: number): CompletionStatus {
  if (percentage === 0) return 'not-started';
  if (percentage >= 100) return 'completed';
  return 'in-progress';
}

/**
 * Calculate overall completion
 */
function calculateOverallCompletion(progress: LearningProgress): number {
  const systems = Array.from(progress.systemProgress.values());
  if (systems.length === 0) return 0;

  const totalCompletion = systems.reduce((sum, s) => sum + s.completionPercentage, 0);
  return Math.round(totalCompletion / systems.length);
}

/**
 * Calculate streak days
 */
function calculateStreak(progress: LearningProgress): number {
  const today = new Date();
  const lastActivity = progress.lastActivityDate;

  const daysDiff = Math.floor(
    (today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysDiff > 1) {
    return 0;
  }

  return progress.streakDays + (daysDiff === 0 ? 0 : 1);
}

/**
 * Toggle bookmark for a topic
 */
export function toggleBookmark(
  progress: LearningProgress,
  topicId: string
): LearningProgress {
  const topicProg = progress.topicProgress.get(topicId);
  if (topicProg) {
    topicProg.bookmarked = !topicProg.bookmarked;
    progress.topicProgress.set(topicId, topicProg);
    progress.updatedAt = new Date();
  }
  return progress;
}

/**
 * Add note to topic
 */
export function addNote(
  progress: LearningProgress,
  topicId: string,
  note: string
): LearningProgress {
  const topicProg = progress.topicProgress.get(topicId);
  if (topicProg) {
    topicProg.notes.push(note);
    progress.topicProgress.set(topicId, topicProg);
    progress.updatedAt = new Date();
  }
  return progress;
}

/**
 * Get continue learning suggestions
 */
export function getContinueSuggestions(
  progress: LearningProgress,
  limit: number = 5
): ContinueLearingSuggestion[] {
  const suggestions: ContinueLearingSuggestion[] = [];

  // Suggest incomplete topics
  for (const [topicId, topicProg] of progress.topicProgress) {
    if (topicProg.status === 'in-progress') {
      suggestions.push({
        suggestionId: `continue-${topicId}`,
        topicId,
        topicName: topicProg.topicName,
        system: topicProg.system,
        reason: 'incomplete-topic',
        priority: 'high',
        estimatedTime: Math.max(1, Math.ceil((60000 - topicProg.timeSpent) / 60000)),
      });
    }
  }

  // Suggest next topics in systems being explored
  for (const [system, systemProg] of progress.systemProgress) {
    if (systemProg.status === 'in-progress' && systemProg.completionPercentage < 100) {
      suggestions.push({
        suggestionId: `next-${system}`,
        topicId: `next-in-${system}`,
        topicName: `Continue ${systemDisplayNames[system]}`,
        system,
        reason: 'next-in-system',
        priority: 'medium',
        estimatedTime: 5,
      });
    }
  }

  // Suggest systems not yet started
  for (const [system, systemProg] of progress.systemProgress) {
    if (systemProg.status === 'not-started') {
      suggestions.push({
        suggestionId: `start-${system}`,
        topicId: `start-${system}`,
        topicName: `Explore ${systemDisplayNames[system]}`,
        system,
        reason: 'popular-topic',
        priority: 'low',
        estimatedTime: 10,
      });
    }
  }

  // Sort by priority and limit
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return suggestions
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, limit);
}

/**
 * Get system progress breakdown
 */
export function getSystemBreakdown(progress: LearningProgress): SystemProgressBreakdown[] {
  return Array.from(progress.systemProgress.entries()).map(([system, prog]) => ({
    system,
    systemName: systemDisplayNames[system],
    completion: prog.completionPercentage,
    topicsViewed: prog.topicsViewed,
    topicsTotal: prog.topicsTotal,
    timeSpent: prog.timeSpent,
    status: prog.status,
  }));
}

/**
 * Get progress summary
 */
export function getProgressSummary(progress: LearningProgress): ProgressSummary {
  const systems = Array.from(progress.systemProgress.entries());
  const totalTopicsViewed = Array.from(progress.topicProgress.values()).length;
  const totalTopicsAvailable = systems.reduce((sum, [, s]) => sum + s.topicsTotal, 0);

  const mostExplored = systems.reduce((max, [, s]) =>
    s.completionPercentage > (max?.completionPercentage || 0) ? s : max,
    systems[0]?.[1]
  );

  const leastExplored = systems.reduce((min, [, s]) =>
    s.completionPercentage < (min?.completionPercentage || 100) ? s : min,
    systems[0]?.[1]
  );

  const recentSessions = progress.recentlyViewed.length;
  const avgSessionLength = recentSessions > 0
    ? Math.round(progress.totalTimeSpent / recentSessions / 60000)
    : 0;

  return {
    totalTopicsViewed,
    totalTopicsAvailable,
    overallCompletion: progress.overallCompletion,
    totalTimeSpent: progress.totalTimeSpent,
    averageSessionLength: avgSessionLength,
    streakDays: progress.streakDays,
    mostExploredSystem: mostExplored?.system || 'cardiovascular',
    leastExploredSystem: leastExplored?.system || 'cardiovascular',
  };
}

/**
 * Get recent activity
 */
export function getRecentActivity(progress: LearningProgress): DailyActivity[] {
  const activities: DailyActivity[] = [];
  const now = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    date.setHours(0, 0, 0, 0);

    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    const dayItems = progress.recentlyViewed.filter((item) =>
      item.viewedAt >= date && item.viewedAt < nextDate
    );

    const uniqueTopics = new Set(dayItems.map((item) => item.itemId));
    const newTopics = dayItems.filter((item) => {
      const topicProg = progress.topicProgress.get(item.itemId);
      return topicProg && topicProg.viewCount === 1 && topicProg.firstViewed >= date;
    }).length;

    activities.push({
      date,
      topicsViewed: uniqueTopics.size,
      timeSpent: dayItems.reduce((sum, item) => sum + item.duration, 0),
      newTopics,
    });
  }

  return activities;
}

/**
 * Check for new achievements
 */
export function checkAchievements(progress: LearningProgress): Achievement[] {
  const newAchievements: Achievement[] = [];
  const earnedIds = new Set(progress.achievements.map((a) => a.achievementId));

  // First topic
  if (!earnedIds.has('first-topic') && progress.topicProgress.size > 0) {
    newAchievements.push({
      ...achievementDefinitions.find((a) => a.achievementId === 'first-topic')!,
      earnedAt: new Date(),
    });
  }

  // System complete
  if (!earnedIds.has('system-complete')) {
    for (const [, systemProg] of progress.systemProgress) {
      if (systemProg.completionPercentage >= 100) {
        newAchievements.push({
          ...achievementDefinitions.find((a) => a.achievementId === 'system-complete')!,
          earnedAt: new Date(),
        });
        break;
      }
    }
  }

  // Week streak
  if (!earnedIds.has('week-streak') && progress.streakDays >= 7) {
    newAchievements.push({
      ...achievementDefinitions.find((a) => a.achievementId === 'week-streak')!,
      earnedAt: new Date(),
    });
  }

  // Deep dive
  if (!earnedIds.has('deep-dive')) {
    for (const [, topicProg] of progress.topicProgress) {
      if (topicProg.timeSpent >= 30 * 60 * 1000) {
        newAchievements.push({
          ...achievementDefinitions.find((a) => a.achievementId === 'deep-dive')!,
          earnedAt: new Date(),
        });
        break;
      }
    }
  }

  // Explorer (all systems)
  if (!earnedIds.has('explorer')) {
    const systemsWithProgress = Array.from(progress.systemProgress.values())
      .filter((s) => s.topicsViewed > 0).length;
    if (systemsWithProgress >= 10) {
      newAchievements.push({
        ...achievementDefinitions.find((a) => a.achievementId === 'explorer')!,
        earnedAt: new Date(),
      });
    }
  }

  // Hundred topics
  if (!earnedIds.has('hundred-topics') && progress.topicProgress.size >= 100) {
    newAchievements.push({
      ...achievementDefinitions.find((a) => a.achievementId === 'hundred-topics')!,
      earnedAt: new Date(),
    });
  }

  return newAchievements;
}

/**
 * Generate progress report
 */
export function generateProgressReport(progress: LearningProgress): ProgressReport {
  const summary = getProgressSummary(progress);
  const breakdown = getSystemBreakdown(progress);
  const recentActivity = getRecentActivity(progress);

  const recommendations: string[] = [];

  // Generate recommendations
  if (summary.leastExploredSystem !== summary.mostExploredSystem) {
    recommendations.push(
      `Consider exploring the ${systemDisplayNames[summary.leastExploredSystem]} - it's your least explored system.`
    );
  }

  if (summary.streakDays > 0) {
    recommendations.push(
      `Great job keeping a ${summary.streakDays}-day learning streak! Keep it up!`
    );
  } else {
    recommendations.push(
      'Start a learning streak by exploring content daily.'
    );
  }

  const incompleteTopics = Array.from(progress.topicProgress.values())
    .filter((t) => t.status === 'in-progress').length;
  if (incompleteTopics > 0) {
    recommendations.push(
      `You have ${incompleteTopics} topics in progress. Consider completing them for deeper understanding.`
    );
  }

  const topTopics = Array.from(progress.topicProgress.values())
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 5)
    .map((t) => ({ topicName: t.topicName, viewCount: t.viewCount }));

  return {
    reportId: `report-${Date.now()}`,
    generatedAt: new Date(),
    userId: progress.userId,
    summary,
    systemBreakdown: breakdown,
    recentActivity: {
      last7Days: recentActivity,
      last30Days: [],
      topTopics,
    },
    recommendations,
    achievements: progress.achievements,
  };
}

/**
 * Export progress report as JSON string
 */
export function exportProgressReport(progress: LearningProgress): string {
  const report = generateProgressReport(progress);
  return JSON.stringify(report, null, 2);
}

/**
 * Format time spent for display
 */
export function formatTimeSpent(milliseconds: number): string {
  const totalMinutes = Math.floor(milliseconds / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

/**
 * Get bookmarked topics
 */
export function getBookmarkedTopics(progress: LearningProgress): TopicProgress[] {
  return Array.from(progress.topicProgress.values())
    .filter((t) => t.bookmarked)
    .sort((a, b) => b.lastViewed.getTime() - a.lastViewed.getTime());
}

/**
 * Learning progress disclaimer
 */
export const PROGRESS_DISCLAIMER = `
Learning progress tracking helps you understand your exploration of health education content.
Progress percentages are estimates based on available content and do not represent medical
knowledge proficiency. This tracking is for personal motivation and organization only.
`;
