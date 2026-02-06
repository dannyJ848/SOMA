/**
 * Gamification Data Layer
 * 
 * Persists achievements, progress, and rewards to localStorage.
 * Syncs with education module completion.
 */

import type { Achievement, UnlockedAchievement, AchievementProgress } from './achievements';
import type { GamificationProgress, LearningStreak, TimeTracking, DailyTimeRecord } from './progress';
import type { Reward, UnlockedReward, TeachingSession } from './rewards';
import { 
  ACHIEVEMENT_DEFINITIONS, 
  getAchievementById, 
  createAchievementNotification,
  calculateAchievementStats 
} from './achievements';
import {
  calculateHealthLiteracyScore,
  calculateLevelFromXP,
  getLevelTitle,
  XP_REWARDS,
  calculateXPForActivity,
  updateLearningStreak,
  recordDailyActivity,
} from './progress';
import {
  REWARD_DEFINITIONS,
  getRewardById,
  checkRewardCondition,
  getUnlockableRewards,
  calculateTeachingScore,
} from './rewards';

// ============================================================================
// Storage Keys
// ============================================================================

const STORAGE_KEYS = {
  ACHIEVEMENTS: 'bs_gamification_achievements',
  PROGRESS: 'bs_gamification_progress',
  REWARDS: 'bs_gamification_rewards',
  TEACHING_SESSIONS: 'bs_gamification_teaching_sessions',
  LAST_LOGIN: 'bs_gamification_last_login',
  SETTINGS: 'bs_gamification_settings',
} as const;

// ============================================================================
// State Types
// ============================================================================

export interface GamificationState {
  achievements: UnlockedAchievement[];
  progress: GamificationProgress;
  unlockedRewards: UnlockedReward[];
  teachingSessions: TeachingSession[];
  settings: GamificationSettings;
  lastSync: Date;
}

export interface GamificationSettings {
  notificationsEnabled: boolean;
  soundEnabled: boolean;
  confettiEnabled: boolean;
  showMilestonePopups: boolean;
  shareProgress: boolean;
}

export interface GamificationUpdate {
  newAchievements: UnlockedAchievement[];
  newRewards: UnlockedReward[];
  levelUp?: {
    oldLevel: number;
    newLevel: number;
    title: string;
  };
  xpGained: number;
  notifications: AchievementNotification[];
}

export interface AchievementNotification {
  achievementId: string;
  name: string;
  description: string;
  icon: string;
  rarity: string;
  points: number;
  showConfetti: boolean;
}

// ============================================================================
// Default State
// ============================================================================

const DEFAULT_SETTINGS: GamificationSettings = {
  notificationsEnabled: true,
  soundEnabled: true,
  confettiEnabled: true,
  showMilestonePopups: true,
  shareProgress: false,
};

function createDefaultProgress(userId: string): GamificationProgress {
  const now = new Date();
  
  // Initialize all specialties with empty progress
  const specialties: GamificationProgress['specialties'] = {} as any;
  const specialtyKeys = [
    'cardiology', 'endocrinology', 'gastroenterology', 'neurology', 'rheumatology',
    'pulmonology', 'nephrology', 'hematology', 'infectious-disease', 'oncology',
    'psychiatry', 'dermatology', 'ophthalmology', 'ent', 'orthopedics', 'obgyn',
    'urology', 'allergy-immunology', 'sports-medicine', 'physical-medicine',
    'emergency-medicine', 'critical-care', 'anesthesiology', 'pathology', 
    'radiology', 'general-practice'
  ];
  
  for (const key of specialtyKeys) {
    specialties[key as keyof typeof specialties] = {
      specialty: key as any,
      displayName: key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      completedModules: 0,
      totalModules: 10, // Default estimate
      percentage: 0,
      quizzesTaken: 0,
      averageQuizScore: 0,
      timeSpent: 0,
      lastActivity: null,
      level: 1,
    };
  }
  
  return {
    userId,
    healthLiteracy: {
      overall: 0,
      bySpecialty: {} as any,
      lastCalculated: now,
    },
    specialties,
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastLoginDate: null,
      streakHistory: [],
    },
    timeTracking: {
      totalMinutes: 0,
      thisWeek: 0,
      thisMonth: 0,
      dailyAverage: 0,
      history: [],
    },
    level: {
      currentLevel: 1,
      currentXP: 0,
      xpToNextLevel: 100,
      totalXP: 0,
      title: 'Health Novice',
    },
    weeklyProgress: [],
    monthlyProgress: [],
    updatedAt: now,
  };
}

// ============================================================================
// Storage Functions
// ============================================================================

/**
 * Load gamification state from localStorage
 */
export function loadGamificationState(userId: string): GamificationState {
  try {
    const achievementsJson = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    const progressJson = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    const rewardsJson = localStorage.getItem(STORAGE_KEYS.REWARDS);
    const teachingJson = localStorage.getItem(STORAGE_KEYS.TEACHING_SESSIONS);
    const settingsJson = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    
    const achievements: UnlockedAchievement[] = achievementsJson 
      ? JSON.parse(achievementsJson, dateReviver)
      : [];
    
    const progress: GamificationProgress = progressJson 
      ? JSON.parse(progressJson, dateReviver)
      : createDefaultProgress(userId);
    
    const unlockedRewards: UnlockedReward[] = rewardsJson 
      ? JSON.parse(rewardsJson, dateReviver)
      : [];
    
    const teachingSessions: TeachingSession[] = teachingJson 
      ? JSON.parse(teachingJson, dateReviver)
      : [];
    
    const settings: GamificationSettings = settingsJson 
      ? JSON.parse(settingsJson)
      : DEFAULT_SETTINGS;
    
    // Check for daily login and update streak
    const updatedProgress = checkDailyLogin(progress);
    
    return {
      achievements,
      progress: updatedProgress,
      unlockedRewards,
      teachingSessions,
      settings,
      lastSync: new Date(),
    };
  } catch (error) {
    console.error('Failed to load gamification state:', error);
    return {
      achievements: [],
      progress: createDefaultProgress(userId),
      unlockedRewards: [],
      teachingSessions: [],
      settings: DEFAULT_SETTINGS,
      lastSync: new Date(),
    };
  }
}

/**
 * Save gamification state to localStorage
 */
export function saveGamificationState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(state.achievements));
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.progress));
    localStorage.setItem(STORAGE_KEYS.REWARDS, JSON.stringify(state.unlockedRewards));
    localStorage.setItem(STORAGE_KEYS.TEACHING_SESSIONS, JSON.stringify(state.teachingSessions));
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings));
    localStorage.setItem(STORAGE_KEYS.LAST_LOGIN, new Date().toISOString());
  } catch (error) {
    console.error('Failed to save gamification state:', error);
  }
}

/**
 * Clear all gamification data
 */
export function clearGamificationData(): void {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}

// Helper to revive Date objects from JSON
function dateReviver(key: string, value: unknown): unknown {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)) {
    return new Date(value);
  }
  return value;
}

// ============================================================================
// Achievement Tracking
// ============================================================================

/**
 * Track module completion and check for achievements
 */
export function trackModuleCompletion(
  state: GamificationState,
  moduleId: string,
  specialty: string,
  timeSpentMinutes: number,
  quizScore?: number
): GamificationUpdate {
  const update: GamificationUpdate = {
    newAchievements: [],
    newRewards: [],
    xpGained: 0,
    notifications: [],
  };
  
  // Update progress
  const specialtyKey = specialty as keyof typeof state.progress.specialties;
  if (state.progress.specialties[specialtyKey]) {
    const spec = state.progress.specialties[specialtyKey];
    spec.completedModules++;
    spec.lastActivity = new Date();
    spec.timeSpent += timeSpentMinutes;
    
    if (quizScore !== undefined) {
      const totalScore = spec.averageQuizScore * spec.quizzesTaken + quizScore;
      spec.quizzesTaken++;
      spec.averageQuizScore = Math.round(totalScore / spec.quizzesTaken);
    }
    
    // Recalculate percentage
    spec.percentage = Math.round((spec.completedModules / spec.totalModules) * 100);
    spec.level = Math.min(10, Math.max(1, Math.floor(spec.percentage / 10) + 1));
  }
  
  // Award XP
  const xpForModule = calculateXPForActivity('MODULE_COMPLETED', state.progress.streak.currentStreak);
  update.xpGained += xpForModule;
  
  if (quizScore === 100) {
    const xpForPerfectQuiz = calculateXPForActivity('PERFECT_QUIZ');
    update.xpGained += xpForPerfectQuiz;
  } else if (quizScore !== undefined) {
    const xpForQuiz = calculateXPForActivity('QUIZ_COMPLETED');
    update.xpGained += xpForQuiz;
  }
  
  // Update time tracking
  recordActivityTime(state, timeSpentMinutes, 1, quizScore ? 1 : 0);
  
  // Check for new achievements
  const newAchievements = checkForNewAchievements(state);
  update.newAchievements = newAchievements;
  
  // Award XP for achievements
  for (const achievement of newAchievements) {
    update.xpGained += achievement.points;
    const notification = createAchievementNotification(achievement);
    update.notifications.push({
      achievementId: achievement.id,
      name: achievement.name,
      description: achievement.description,
      icon: achievement.icon,
      rarity: achievement.rarity,
      points: achievement.points,
      showConfetti: notification.showConfetti,
    });
  }
  
  // Update level
  const levelUp = updateLevel(state, update.xpGained);
  if (levelUp) {
    update.levelUp = levelUp;
  }
  
  // Recalculate health literacy
  state.progress.healthLiteracy = calculateHealthLiteracyScore(state.progress.specialties);
  
  // Check for new rewards
  const newRewards = checkForNewRewards(state);
  update.newRewards = newRewards;
  
  // Update timestamp
  state.progress.updatedAt = new Date();
  
  // Save state
  saveGamificationState(state);
  
  return update;
}

/**
 * Track lab review
 */
export function trackLabReview(
  state: GamificationState,
  labId: string
): GamificationUpdate {
  const update: GamificationUpdate = {
    newAchievements: [],
    newRewards: [],
    xpGained: calculateXPForActivity('LAB_REVIEWED'),
    notifications: [],
  };
  
  // Update level
  const levelUp = updateLevel(state, update.xpGained);
  if (levelUp) {
    update.levelUp = levelUp;
  }
  
  // Check for achievements
  const newAchievements = checkForNewAchievements(state);
  update.newAchievements = newAchievements;
  
  for (const achievement of newAchievements) {
    update.xpGained += achievement.points;
    const notification = createAchievementNotification(achievement);
    update.notifications.push({
      achievementId: achievement.id,
      name: achievement.name,
      description: achievement.description,
      icon: achievement.icon,
      rarity: achievement.rarity,
      points: achievement.points,
      showConfetti: notification.showConfetti,
    });
  }
  
  // Check for rewards
  const newRewards = checkForNewRewards(state);
  update.newRewards = newRewards;
  
  saveGamificationState(state);
  return update;
}

/**
 * Track content sharing
 */
export function trackContentShare(
  state: GamificationState,
  contentId: string
): GamificationUpdate {
  const update: GamificationUpdate = {
    newAchievements: [],
    newRewards: [],
    xpGained: calculateXPForActivity('CONTENT_SHARED'),
    notifications: [],
  };
  
  // Update level
  const levelUp = updateLevel(state, update.xpGained);
  if (levelUp) {
    update.levelUp = levelUp;
  }
  
  // Check for achievements
  const newAchievements = checkForNewAchievements(state);
  update.newAchievements = newAchievements;
  
  for (const achievement of newAchievements) {
    update.xpGained += achievement.points;
    const notification = createAchievementNotification(achievement);
    update.notifications.push({
      achievementId: achievement.id,
      name: achievement.name,
      description: achievement.description,
      icon: achievement.icon,
      rarity: achievement.rarity,
      points: achievement.points,
      showConfetti: notification.showConfetti,
    });
  }
  
  saveGamificationState(state);
  return update;
}

/**
 * Complete a teaching session
 */
export function completeTeachingSession(
  state: GamificationState,
  session: TeachingSession
): GamificationUpdate {
  const update: GamificationUpdate = {
    newAchievements: [],
    newRewards: [],
    xpGained: 0,
    notifications: [],
  };
  
  if (session.aiFeedback) {
    const { score, xp } = calculateTeachingScore(session.aiFeedback);
    session.score = score;
    session.xpEarned = xp;
    session.completedAt = new Date();
    
    update.xpGained += xp;
    state.teachingSessions.push(session);
    
    // Update level
    const levelUp = updateLevel(state, update.xpGained);
    if (levelUp) {
      update.levelUp = levelUp;
    }
    
    // Check for teaching mode achievement
    if (state.teachingSessions.length >= 1) {
      const teachingAchievement = getAchievementById('teaching-mode');
      if (teachingAchievement && !state.achievements.find(a => a.id === teachingAchievement.id)) {
        const unlockedAchievement = { ...teachingAchievement, unlockedAt: new Date() };
        state.achievements.push(unlockedAchievement);
        update.newAchievements.push(unlockedAchievement);
        update.xpGained += teachingAchievement.points;
      }
    }
  }
  
  saveGamificationState(state);
  return update;
}

// ============================================================================
// Internal Helpers
// ============================================================================

/**
 * Check daily login and update streak
 */
function checkDailyLogin(progress: GamificationProgress): GamificationProgress {
  const today = new Date();
  const lastLogin = progress.streak.lastLoginDate;
  
  if (!lastLogin) {
    // First login
    progress.streak.currentStreak = 1;
    progress.streak.longestStreak = 1;
    progress.streak.lastLoginDate = today;
    recordDailyActivity(progress.streak, 0, 0, 0, today);
  } else {
    const lastLoginDate = new Date(lastLogin);
    lastLoginDate.setHours(0, 0, 0, 0);
    const todayDate = new Date(today);
    todayDate.setHours(0, 0, 0, 0);
    
    const daysDiff = Math.floor(
      (todayDate.getTime() - lastLoginDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    if (daysDiff >= 1) {
      // Update streak
      progress.streak = updateLearningStreak(progress.streak, today);
      
      // Award daily login XP if not already logged in today
      if (daysDiff === 1) {
        const xp = calculateXPForActivity('DAILY_LOGIN', progress.streak.currentStreak);
        progress.level.totalXP += xp;
        const levelInfo = calculateLevelFromXP(progress.level.totalXP);
        progress.level.currentLevel = levelInfo.level;
        progress.level.currentXP = levelInfo.currentXP;
        progress.level.xpToNextLevel = levelInfo.xpToNext;
        progress.level.title = getLevelTitle(levelInfo.level);
      }
    }
  }
  
  return progress;
}

/**
 * Record activity time
 */
function recordActivityTime(
  state: GamificationState,
  minutes: number,
  modulesCompleted: number = 0,
  quizzesCompleted: number = 0
): void {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Update today's record
  recordDailyActivity(state.progress.streak, minutes, modulesCompleted, quizzesCompleted, today);
  
  // Update time tracking
  state.progress.timeTracking.totalMinutes += minutes;
  
  // Find or create today's record
  const todayRecord = state.progress.timeTracking.history.find(r => {
    const recordDate = new Date(r.date);
    recordDate.setHours(0, 0, 0, 0);
    return recordDate.getTime() === today.getTime();
  });
  
  if (todayRecord) {
    todayRecord.minutes += minutes;
    todayRecord.modulesCompleted += modulesCompleted;
    todayRecord.quizzesCompleted += quizzesCompleted;
  } else {
    state.progress.timeTracking.history.push({
      date: today,
      minutes,
      modulesCompleted,
      quizzesCompleted,
    });
  }
  
  // Keep only last 365 days
  if (state.progress.timeTracking.history.length > 365) {
    state.progress.timeTracking.history = state.progress.timeTracking.history.slice(-365);
  }
  
  // Calculate this week and month
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const monthAgo = new Date(now);
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  
  state.progress.timeTracking.thisWeek = state.progress.timeTracking.history
    .filter(r => r.date >= weekAgo)
    .reduce((sum, r) => sum + r.minutes, 0);
  
  state.progress.timeTracking.thisMonth = state.progress.timeTracking.history
    .filter(r => r.date >= monthAgo)
    .reduce((sum, r) => sum + r.minutes, 0);
  
  // Calculate daily average
  const daysWithActivity = state.progress.timeTracking.history.filter(r => r.minutes > 0).length;
  state.progress.timeTracking.dailyAverage = daysWithActivity > 0
    ? Math.round(state.progress.timeTracking.totalMinutes / daysWithActivity)
    : 0;
}

/**
 * Check for new achievements
 */
function checkForNewAchievements(state: GamificationState): UnlockedAchievement[] {
  const newAchievements: UnlockedAchievement[] = [];
  const unlockedIds = new Set(state.achievements.map(a => a.id));
  
  // Calculate current stats
  const totalModulesCompleted = Object.values(state.progress.specialties)
    .reduce((sum, s) => sum + s.completedModules, 0);
  const perfectQuizzes = state.teachingSessions.filter(s => s.score === 100).length; // Approximation
  
  for (const achievement of ACHIEVEMENT_DEFINITIONS) {
    if (unlockedIds.has(achievement.id)) continue;
    
    let shouldUnlock = false;
    
    switch (achievement.condition.type) {
      case 'modules_completed':
        shouldUnlock = totalModulesCompleted >= achievement.condition.count;
        break;
      case 'perfect_quizzes':
        shouldUnlock = perfectQuizzes >= achievement.condition.count;
        break;
      case 'login_streak':
        shouldUnlock = state.progress.streak.currentStreak >= achievement.condition.days;
        break;
      case 'content_shared':
        // Would need to track shares separately
        shouldUnlock = false;
        break;
      case 'labs_reviewed':
        // Would need to track lab reviews separately
        shouldUnlock = false;
        break;
      case 'specialty_modules_completed':
        const spec = state.progress.specialties[achievement.condition.specialty as keyof typeof state.progress.specialties];
        shouldUnlock = spec && spec.completedModules >= achievement.condition.count;
        break;
      case 'expert_mode_unlocked':
        shouldUnlock = totalModulesCompleted >= 10;
        break;
      case 'teaching_mode_unlocked':
        shouldUnlock = state.teachingSessions.length >= 1;
        break;
      case 'time_spent':
        shouldUnlock = state.progress.timeTracking.totalMinutes >= achievement.condition.minutes;
        break;
      case 'all_achievements_in_category':
        // Complex check - skip for now
        shouldUnlock = false;
        break;
    }
    
    if (shouldUnlock) {
      newAchievements.push({ ...achievement, unlockedAt: new Date() });
    }
  }
  
  // Add to state
  state.achievements.push(...newAchievements);
  
  return newAchievements;
}

/**
 * Check for new rewards
 */
function checkForNewRewards(state: GamificationState): UnlockedReward[] {
  const unlockedRewardIds = new Set(state.unlockedRewards.map(r => r.id));
  const unlockedAchievementIds = state.achievements.map(a => a.id);
  
  const newRewards: UnlockedReward[] = [];
  
  for (const reward of REWARD_DEFINITIONS) {
    if (unlockedRewardIds.has(reward.id)) continue;
    
    if (checkRewardCondition(reward.unlockCondition, state.progress, unlockedAchievementIds)) {
      newRewards.push({ ...reward, isUnlocked: true, unlockedAt: new Date() });
    }
  }
  
  state.unlockedRewards.push(...newRewards);
  return newRewards;
}

/**
 * Update level based on XP gain
 */
function updateLevel(
  state: GamificationState,
  xpGained: number
): { oldLevel: number; newLevel: number; title: string } | undefined {
  const oldLevel = state.progress.level.currentLevel;
  state.progress.level.totalXP += xpGained;
  
  const levelInfo = calculateLevelFromXP(state.progress.level.totalXP);
  state.progress.level.currentLevel = levelInfo.level;
  state.progress.level.currentXP = levelInfo.currentXP;
  state.progress.level.xpToNextLevel = levelInfo.xpToNext;
  state.progress.level.title = getLevelTitle(levelInfo.level);
  
  if (levelInfo.level > oldLevel) {
    return {
      oldLevel,
      newLevel: levelInfo.level,
      title: state.progress.level.title,
    };
  }
  
  return undefined;
}

// ============================================================================
// Export/Import
// ============================================================================

/**
 * Export gamification data as JSON
 */
export function exportGamificationData(state: GamificationState): string {
  const exportData = {
    version: '1.0',
    exportedAt: new Date(),
    achievements: state.achievements,
    progress: state.progress,
    unlockedRewards: state.unlockedRewards,
    teachingSessions: state.teachingSessions,
    stats: calculateAchievementStats(state.achievements.map(a => a.id)),
  };
  
  return JSON.stringify(exportData, null, 2);
}

/**
 * Import gamification data from JSON
 */
export function importGamificationData(json: string): GamificationState | null {
  try {
    const data = JSON.parse(json, dateReviver);
    
    return {
      achievements: data.achievements || [],
      progress: data.progress,
      unlockedRewards: data.unlockedRewards || [],
      teachingSessions: data.teachingSessions || [],
      settings: DEFAULT_SETTINGS,
      lastSync: new Date(),
    };
  } catch (error) {
    console.error('Failed to import gamification data:', error);
    return null;
  }
}

// ============================================================================
// Sync with Education Module
// ============================================================================

/**
 * Sync with education module completion
 * Call this when a module is completed in the education system
 */
export function syncWithEducationModule(
  state: GamificationState,
  moduleData: {
    moduleId: string;
    specialty: string;
    timeSpentMinutes: number;
    quizScore?: number;
    completedAt: Date;
  }
): GamificationUpdate {
  return trackModuleCompletion(
    state,
    moduleData.moduleId,
    moduleData.specialty,
    moduleData.timeSpentMinutes,
    moduleData.quizScore
  );
}

// ============================================================================
// Settings
// ============================================================================

/**
 * Update settings
 */
export function updateSettings(
  state: GamificationState,
  settings: Partial<GamificationSettings>
): void {
  state.settings = { ...state.settings, ...settings };
  saveGamificationState(state);
}

/**
 * Get achievement statistics
 */
export function getAchievementStatistics(state: GamificationState) {
  return calculateAchievementStats(state.achievements.map(a => a.id));
}
