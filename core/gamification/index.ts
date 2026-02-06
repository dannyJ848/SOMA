/**
 * Gamification Module Index
 * 
 * Main exports for the gamification system
 */

// Achievement System
export {
  // Types
  type Achievement,
  type AchievementCategory,
  type AchievementRarity,
  type AchievementCondition,
  type AchievementProgress,
  type UnlockedAchievement,
  type AchievementNotification,
  type AchievementStats,
  
  // Constants
  ACHIEVEMENT_DEFINITIONS,
  
  // Functions
  getAchievementsByCategory,
  getAchievementById,
  getRarityColor,
  getRarityBackground,
  getTotalPossiblePoints,
  getAchievementDisplayInfo,
  createAchievementNotification,
  calculateAchievementStats,
} from './achievements';

// Progress Tracking
export {
  // Types
  type HealthLiteracyScore,
  type SpecialtyProgress,
  type LearningStreak,
  type StreakDay,
  type TimeTracking,
  type DailyTimeRecord,
  type WeeklyProgress,
  type MonthlyProgress,
  type LevelSystem,
  type GamificationProgress,
  type ProgressMilestone,
  type XPRewardType,
  
  // Constants
  SPECIALTY_DISPLAY_NAMES,
  LEVEL_TITLES,
  XP_REWARDS,
  PROGRESS_MILESTONES,
  
  // Functions
  calculateXPForLevel,
  calculateLevelFromXP,
  getLevelTitle,
  calculateXPForActivity,
  calculateHealthLiteracyScore,
  calculateSpecialtyProgress,
  updateLearningStreak,
  recordDailyActivity,
  calculateWeeklyProgress,
  getProgressSummary,
  checkMilestones,
} from './progress';

// Rewards System
export {
  // Types
  type Reward,
  type RewardType,
  type RewardRarity,
  type RewardCondition,
  type UnlockedReward,
  type TeachingSession,
  type TeachingFeedback,
  
  // Constants
  REWARD_DEFINITIONS,
  
  // Functions
  checkRewardCondition,
  getUnlockableRewards,
  getLockedRewardsProgress,
  getRewardsByType,
  getRewardById,
  createTeachingSession,
  calculateTeachingScore,
  getTeachingPrompts,
} from './rewards';

// Store / Data Layer
export {
  // Types
  type GamificationState,
  type GamificationSettings,
  type GamificationUpdate,
  
  // Functions
  loadGamificationState,
  saveGamificationState,
  clearGamificationData,
  trackModuleCompletion,
  trackLabReview,
  trackContentShare,
  completeTeachingSession,
  exportGamificationData,
  importGamificationData,
  syncWithEducationModule,
  updateSettings,
  getAchievementStatistics,
} from './store';
