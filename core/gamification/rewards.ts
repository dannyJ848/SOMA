/**
 * Rewards System for Health Journey Gamification
 * 
 * Manages unlockable content, features, and capabilities
 * based on user progress and achievements.
 */

import type { Achievement } from './achievements';
import type { GamificationProgress } from './progress';

// ============================================================================
// Reward Types
// ============================================================================

export type RewardType = 
  | 'module'           // Unlock new educational modules
  | 'feature'          // Unlock app features
  | 'mode'             // Unlock learning modes
  | 'visual'           // Unlock visual customizations
  | 'content'          // Unlock special content
  | 'capability';      // Unlock advanced capabilities

export type RewardRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface Reward {
  id: string;
  name: string;
  description: string;
  type: RewardType;
  rarity: RewardRarity;
  icon: string;
  unlockCondition: RewardCondition;
  isUnlocked: boolean;
  unlockedAt?: Date;
  preview?: string; // Preview of what the reward contains
}

export type RewardCondition =
  | { type: 'modules_completed'; count: number }
  | { type: 'achievement_unlocked'; achievementId: string }
  | { type: 'achievements_in_category'; category: string; count: number }
  | { type: 'level_reached'; level: number }
  | { type: 'specialty_completed'; specialty: string; percentage: number }
  | { type: 'streak_reached'; days: number }
  | { type: 'score_reached'; score: number }
  | { type: 'all_conditions'; conditions: RewardCondition[] };

export interface UnlockedReward extends Reward {
  unlockedAt: Date;
}

// ============================================================================
// Reward Definitions
// ============================================================================

export const REWARD_DEFINITIONS: Reward[] = [
  // === MODULE UNLOCKS ===
  {
    id: 'advanced-cardiology',
    name: 'Advanced Cardiology',
    description: 'Unlock advanced cardiovascular modules with complex case studies',
    type: 'module',
    rarity: 'rare',
    icon: '❤️',
    unlockCondition: { 
      type: 'specialty_completed', 
      specialty: 'cardiology', 
      percentage: 50 
    },
    isUnlocked: false,
    preview: 'Heart failure management, arrhythmia mechanisms, and cardiac imaging',
  },
  {
    id: 'advanced-endocrinology',
    name: 'Advanced Endocrinology',
    description: 'Unlock advanced hormone and metabolism modules',
    type: 'module',
    rarity: 'rare',
    icon: '🧬',
    unlockCondition: { 
      type: 'specialty_completed', 
      specialty: 'endocrinology', 
      percentage: 50 
    },
    isUnlocked: false,
    preview: 'Diabetes management, thyroid disorders, and adrenal conditions',
  },
  {
    id: 'lab-mastery-modules',
    name: 'Lab Mastery Series',
    description: 'Unlock comprehensive lab interpretation modules',
    type: 'module',
    rarity: 'epic',
    icon: '🧪',
    unlockCondition: { 
      type: 'achievements_in_category', 
      category: 'lab', 
      count: 2 
    },
    isUnlocked: false,
    preview: 'Complete blood count deep dive, metabolic panel mastery, and more',
  },
  {
    id: 'case-study-library',
    name: 'Clinical Case Library',
    description: 'Unlock real-world case studies for all specialties',
    type: 'module',
    rarity: 'epic',
    icon: '📋',
    unlockCondition: { type: 'modules_completed', count: 20 },
    isUnlocked: false,
    preview: '25+ real patient cases with diagnostic reasoning',
  },
  {
    id: 'research-frontiers',
    name: 'Research Frontiers',
    description: 'Unlock cutting-edge research summaries and emerging treatments',
    type: 'module',
    rarity: 'legendary',
    icon: '🔬',
    unlockCondition: { type: 'modules_completed', count: 50 },
    isUnlocked: false,
    preview: 'Latest clinical trials, breakthrough treatments, and medical advances',
  },

  // === FEATURE UNLOCKS ===
  {
    id: 'progress-dashboard',
    name: 'Progress Dashboard',
    description: 'Unlock detailed analytics and progress visualization',
    type: 'feature',
    rarity: 'common',
    icon: '📊',
    unlockCondition: { type: 'modules_completed', count: 3 },
    isUnlocked: false,
    preview: 'Visual charts, trends, and detailed learning analytics',
  },
  {
    id: 'study-scheduler',
    name: 'Study Scheduler',
    description: 'Create personalized learning schedules and reminders',
    type: 'feature',
    rarity: 'uncommon',
    icon: '📅',
    unlockCondition: { type: 'streak_reached', days: 3 },
    isUnlocked: false,
    preview: 'AI-powered study planning and spaced repetition scheduling',
  },
  {
    id: 'note-taking',
    name: 'Advanced Notes',
    description: 'Unlock comprehensive note-taking with tagging and search',
    type: 'feature',
    rarity: 'uncommon',
    icon: '📝',
    unlockCondition: { type: 'modules_completed', count: 5 },
    isUnlocked: false,
    preview: 'Rich text notes, cross-referencing, and knowledge mapping',
  },
  {
    id: 'lab-comparison-tool',
    name: 'Lab Comparison Tool',
    description: 'Compare lab results across time periods',
    type: 'feature',
    rarity: 'rare',
    icon: '📈',
    unlockCondition: { 
      type: 'achievements_in_category', 
      category: 'lab', 
      count: 1 
    },
    isUnlocked: false,
    preview: 'Trend analysis, change tracking, and health trajectory visualization',
  },
  {
    id: 'personal-health-insights',
    name: 'Personal Health Insights',
    description: 'AI-powered insights based on your learning and health data',
    type: 'feature',
    rarity: 'epic',
    icon: '💡',
    unlockCondition: { type: 'level_reached', level: 5 },
    isUnlocked: false,
    preview: 'Personalized recommendations and health risk assessments',
  },

  // === MODE UNLOCKS ===
  {
    id: 'expert-mode',
    name: 'Expert Mode',
    description: 'Unlock advanced complexity levels (4-6) for all modules',
    type: 'mode',
    rarity: 'epic',
    icon: '🎓',
    unlockCondition: { type: 'modules_completed', count: 10 },
    isUnlocked: false,
    preview: 'College, Graduate, and Physician-level content complexity',
  },
  {
    id: 'teaching-mode',
    name: 'Teaching Mode',
    description: 'Learn by teaching with the Feynman technique',
    type: 'mode',
    rarity: 'legendary',
    icon: '👨‍🏫',
    unlockCondition: { 
      type: 'all_conditions',
      conditions: [
        { type: 'modules_completed', count: 15 },
        { type: 'achievement_unlocked', achievementId: 'expert-patient' },
      ]
    },
    isUnlocked: false,
    preview: 'Explain concepts in your own words, get AI feedback on your understanding',
  },
  {
    id: 'quiz-challenge-mode',
    name: 'Challenge Mode',
    description: 'Timed quizzes with leaderboards and difficulty scaling',
    type: 'mode',
    rarity: 'rare',
    icon: '⚡',
    unlockCondition: { 
      type: 'achievements_in_category', 
      category: 'quiz', 
      count: 2 
    },
    isUnlocked: false,
    preview: 'Speed challenges, accuracy streaks, and competitive quizzes',
  },
  {
    id: 'spaced-repetition',
    name: 'Spaced Repetition',
    description: 'Scientifically optimized review system for long-term retention',
    type: 'mode',
    rarity: 'epic',
    icon: '🧠',
    unlockCondition: { type: 'modules_completed', count: 15 },
    isUnlocked: false,
    preview: 'AI-scheduled reviews based on forgetting curve optimization',
  },

  // === VISUAL UNLOCKS ===
  {
    id: 'dark-theme',
    name: 'Dark Theme',
    description: 'Unlock dark mode for comfortable night learning',
    type: 'visual',
    rarity: 'common',
    icon: '🌙',
    unlockCondition: { type: 'modules_completed', count: 2 },
    isUnlocked: false,
  },
  {
    id: 'achievement-showcase',
    name: 'Achievement Showcase',
    description: 'Display your achievements on your profile',
    type: 'visual',
    rarity: 'uncommon',
    icon: '🏆',
    unlockCondition: { 
      type: 'achievements_in_category', 
      category: 'milestone', 
      count: 2 
    },
    isUnlocked: false,
  },
  {
    id: 'custom-avatars',
    name: 'Custom Avatars',
    description: 'Unlock health-themed avatar customization options',
    type: 'visual',
    rarity: 'rare',
    icon: '🎨',
    unlockCondition: { type: 'level_reached', level: 3 },
    isUnlocked: false,
    preview: 'Medical professional avatars, body system themes, and specialty icons',
  },
  {
    id: 'legendary-theme',
    name: 'Legendary Theme',
    description: 'Exclusive golden theme for dedicated learners',
    type: 'visual',
    rarity: 'legendary',
    icon: '👑',
    unlockCondition: { type: 'level_reached', level: 10 },
    isUnlocked: false,
    preview: 'Premium golden interface with animated effects',
  },

  // === CONTENT UNLOCKS ===
  {
    id: 'medical-history-series',
    name: 'Medical History',
    description: 'Fascinating stories from medical history',
    type: 'content',
    rarity: 'uncommon',
    icon: '📜',
    unlockCondition: { type: 'modules_completed', count: 8 },
    isUnlocked: false,
    preview: 'Great discoveries, medical pioneers, and fascinating cases from history',
  },
  {
    id: 'anatomy-3d-access',
    name: '3D Anatomy Explorer',
    description: 'Full access to interactive 3D anatomy models',
    type: 'content',
    rarity: 'epic',
    icon: '🫀',
    unlockCondition: { 
      type: 'all_conditions',
      conditions: [
        { type: 'modules_completed', count: 12 },
        { type: 'score_reached', score: 60 },
      ]
    },
    isUnlocked: false,
    preview: 'Rotate, dissect, and explore detailed 3D body models',
  },
  {
    id: 'expert-interviews',
    name: 'Expert Interviews',
    description: 'Video interviews with leading medical professionals',
    type: 'content',
    rarity: 'legendary',
    icon: '🎙️',
    unlockCondition: { type: 'modules_completed', count: 40 },
    isUnlocked: false,
    preview: 'Conversations with specialists, researchers, and healthcare leaders',
  },

  // === CAPABILITY UNLOCKS ===
  {
    id: 'export-reports',
    name: 'Progress Reports',
    description: 'Export detailed learning reports as PDF',
    type: 'capability',
    rarity: 'uncommon',
    icon: '📄',
    unlockCondition: { type: 'modules_completed', count: 5 },
    isUnlocked: false,
  },
  {
    id: 'share-achievements',
    name: 'Share Achievements',
    description: 'Share your progress and achievements socially',
    type: 'capability',
    rarity: 'uncommon',
    icon: '🔗',
    unlockCondition: { 
      type: 'achievements_in_category', 
      category: 'social', 
      count: 1 
    },
    isUnlocked: false,
  },
  {
    id: 'mentor-mode',
    name: 'Mentor Mode',
    description: 'Guide new learners through their first modules',
    type: 'capability',
    rarity: 'epic',
    icon: '🌟',
    unlockCondition: { 
      type: 'all_conditions',
      conditions: [
        { type: 'modules_completed', count: 25 },
        { type: 'achievement_unlocked', achievementId: 'expert-patient' },
      ]
    },
    isUnlocked: false,
    preview: 'Help others learn, earn mentor badges, and build the community',
  },
];

// ============================================================================
// Reward Helpers
// ============================================================================

/**
 * Check if a reward condition is met
 */
export function checkRewardCondition(
  condition: RewardCondition,
  progress: GamificationProgress,
  unlockedAchievements: string[]
): boolean {
  switch (condition.type) {
    case 'modules_completed':
      const completedCount = Object.values(progress.specialties)
        .reduce((sum, s) => sum + s.completedModules, 0);
      return completedCount >= condition.count;
      
    case 'achievement_unlocked':
      return unlockedAchievements.includes(condition.achievementId);
      
    case 'achievements_in_category':
      // This would need achievement definitions to check categories
      // For now, return false - implement with actual achievement data
      return false;
      
    case 'level_reached':
      return progress.level.currentLevel >= condition.level;
      
    case 'specialty_completed':
      const specialty = progress.specialties[condition.specialty as keyof typeof progress.specialties];
      return specialty ? specialty.percentage >= condition.percentage : false;
      
    case 'streak_reached':
      return progress.streak.currentStreak >= condition.days;
      
    case 'score_reached':
      return progress.healthLiteracy.overall >= condition.score;
      
    case 'all_conditions':
      return condition.conditions.every(c => 
        checkRewardCondition(c, progress, unlockedAchievements)
      );
      
    default:
      return false;
  }
}

/**
 * Get all unlockable rewards
 */
export function getUnlockableRewards(
  progress: GamificationProgress,
  unlockedAchievements: string[],
  alreadyUnlocked: string[]
): Reward[] {
  return REWARD_DEFINITIONS.filter(reward => {
    if (alreadyUnlocked.includes(reward.id)) return false;
    return checkRewardCondition(reward.unlockCondition, progress, unlockedAchievements);
  });
}

/**
 * Get locked rewards with progress
 */
export function getLockedRewardsProgress(
  progress: GamificationProgress,
  unlockedAchievements: string[],
  alreadyUnlocked: string[]
): Array<{ reward: Reward; progress: number; requirement: string }> {
  return REWARD_DEFINITIONS
    .filter(reward => !alreadyUnlocked.includes(reward.id))
    .map(reward => {
      const progressPct = calculateRewardProgress(reward.unlockCondition, progress, unlockedAchievements);
      const requirement = formatRewardRequirement(reward.unlockCondition);
      return { reward, progress: progressPct, requirement };
    })
    .sort((a, b) => b.progress - a.progress); // Sort by progress (highest first)
}

/**
 * Calculate progress toward a reward condition
 */
function calculateRewardProgress(
  condition: RewardCondition,
  progress: GamificationProgress,
  unlockedAchievements: string[]
): number {
  switch (condition.type) {
    case 'modules_completed':
      const completedCount = Object.values(progress.specialties)
        .reduce((sum, s) => sum + s.completedModules, 0);
      return Math.min(100, (completedCount / condition.count) * 100);
      
    case 'level_reached':
      return Math.min(100, (progress.level.currentLevel / condition.level) * 100);
      
    case 'streak_reached':
      return Math.min(100, (progress.streak.currentStreak / condition.days) * 100);
      
    case 'score_reached':
      return Math.min(100, (progress.healthLiteracy.overall / condition.score) * 100);
      
    case 'specialty_completed':
      const specialty = progress.specialties[condition.specialty as keyof typeof progress.specialties];
      return specialty ? Math.min(100, (specialty.percentage / condition.percentage) * 100) : 0;
      
    case 'all_conditions':
      const progresses = condition.conditions.map(c => 
        calculateRewardProgress(c, progress, unlockedAchievements)
      );
      return progresses.reduce((sum, p) => sum + p, 0) / progresses.length;
      
    default:
      return 0;
  }
}

/**
 * Format reward requirement for display
 */
function formatRewardRequirement(condition: RewardCondition): string {
  switch (condition.type) {
    case 'modules_completed':
      return `Complete ${condition.count} modules`;
    case 'achievement_unlocked':
      return `Unlock specific achievement`;
    case 'achievements_in_category':
      return `Unlock ${condition.count} ${condition.category} achievements`;
    case 'level_reached':
      return `Reach level ${condition.level}`;
    case 'specialty_completed':
      return `Complete ${condition.percentage}% of ${condition.specialty}`;
    case 'streak_reached':
      return `Maintain a ${condition.days}-day streak`;
    case 'score_reached':
      return `Reach ${condition.score}% health literacy`;
    case 'all_conditions':
      return `Complete multiple requirements`;
    default:
      return 'Complete requirement';
  }
}

/**
 * Get rewards by type
 */
export function getRewardsByType(type: RewardType): Reward[] {
  return REWARD_DEFINITIONS.filter(r => r.type === type);
}

/**
 * Get reward by ID
 */
export function getRewardById(id: string): Reward | undefined {
  return REWARD_DEFINITIONS.find(r => r.id === id);
}

// ============================================================================
// Teaching Mode (Feynman Technique)
// ============================================================================

export interface TeachingSession {
  id: string;
  moduleId: string;
  moduleName: string;
  startedAt: Date;
  completedAt?: Date;
  explanation: string;
  aiFeedback?: TeachingFeedback;
  score?: number;
  xpEarned?: number;
}

export interface TeachingFeedback {
  overallRating: number; // 1-5
  clarity: number; // 1-5
  accuracy: number; // 1-5
  completeness: number; // 1-5
  strengths: string[];
  areasToImprove: string[];
  suggestedResources: string[];
  feedback: string;
}

/**
 * Create a new teaching session
 */
export function createTeachingSession(
  moduleId: string,
  moduleName: string
): TeachingSession {
  return {
    id: `teaching-${Date.now()}`,
    moduleId,
    moduleName,
    startedAt: new Date(),
    explanation: '',
  };
}

/**
 * Calculate teaching score and XP
 */
export function calculateTeachingScore(feedback: TeachingFeedback): { score: number; xp: number } {
  const score = Math.round(
    (feedback.overallRating + feedback.clarity + feedback.accuracy + feedback.completeness) / 4
  );
  
  // XP based on score
  const xpBase = 75;
  const xpMultiplier = score / 5;
  const xp = Math.round(xpBase * xpMultiplier);
  
  return { score, xp };
}

/**
 * Get teaching prompts for Feynman technique
 */
export function getTeachingPrompts(moduleName: string): string[] {
  return [
    `Explain ${moduleName} as if teaching it to a 12-year-old.`,
    `What are the 3 most important concepts about ${moduleName}?`,
    `How would you explain ${moduleName} to someone who has never studied medicine?`,
    `Use an analogy to explain the key mechanism in ${moduleName}.`,
    `What would happen if the normal process of ${moduleName} went wrong?`,
  ];
}
