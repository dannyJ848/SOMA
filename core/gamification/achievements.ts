/**
 * Achievement System for Health Journey Gamification
 * 
 * Defines all achievements, badges, and unlock criteria.
 * Awards recognition for learning milestones and engagement.
 */

// ============================================================================
// Achievement Types
// ============================================================================

export type AchievementCategory = 
  | 'milestone'      // Module completion milestones
  | 'quiz'           // Quiz performance achievements
  | 'engagement'     // Login streak and engagement
  | 'social'         // Sharing and helping others
  | 'specialty'      // Specialty-specific badges
  | 'lab'            // Lab result exploration
  | 'expert';        // Advanced mode achievements

export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  category: AchievementCategory;
  rarity: AchievementRarity;
  icon: string; // Lucide icon name or emoji
  condition: AchievementCondition;
  points: number;
  unlockedAt?: Date;
  isSecret?: boolean; // Hidden until unlocked
}

export type AchievementCondition =
  | { type: 'modules_completed'; count: number }
  | { type: 'perfect_quizzes'; count: number }
  | { type: 'login_streak'; days: number }
  | { type: 'content_shared'; count: number }
  | { type: 'labs_reviewed'; count: number }
  | { type: 'specialty_modules_completed'; specialty: string; count: number }
  | { type: 'expert_mode_unlocked' }
  | { type: 'teaching_mode_unlocked' }
  | { type: 'time_spent'; minutes: number }
  | { type: 'all_achievements_in_category'; category: AchievementCategory };

export interface AchievementProgress {
  achievementId: string;
  currentValue: number;
  targetValue: number;
  percentage: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

export interface UnlockedAchievement extends Achievement {
  unlockedAt: Date;
}

// ============================================================================
// Achievement Definitions
// ============================================================================

export const ACHIEVEMENT_DEFINITIONS: Achievement[] = [
  // === MILESTONE ACHIEVEMENTS ===
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first educational module',
    category: 'milestone',
    rarity: 'common',
    icon: '👣',
    condition: { type: 'modules_completed', count: 1 },
    points: 10,
  },
  {
    id: 'knowledge-seeker',
    name: 'Knowledge Seeker',
    description: 'Complete 5 educational modules',
    category: 'milestone',
    rarity: 'common',
    icon: '📚',
    condition: { type: 'modules_completed', count: 5 },
    points: 25,
  },
  {
    id: 'expert-patient',
    name: 'Expert Patient',
    description: 'Complete 10 educational modules',
    category: 'milestone',
    rarity: 'rare',
    icon: '🎓',
    condition: { type: 'modules_completed', count: 10 },
    points: 50,
  },
  {
    id: 'health-scholar',
    name: 'Health Scholar',
    description: 'Complete 25 educational modules',
    category: 'milestone',
    rarity: 'epic',
    icon: '🏆',
    condition: { type: 'modules_completed', count: 25 },
    points: 100,
    isSecret: true,
  },
  {
    id: 'mastery-path',
    name: 'Mastery Path',
    description: 'Complete 50 educational modules',
    category: 'milestone',
    rarity: 'legendary',
    icon: '👑',
    condition: { type: 'modules_completed', count: 50 },
    points: 250,
    isSecret: true,
  },

  // === QUIZ ACHIEVEMENTS ===
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Score 100% on 5 quizzes',
    category: 'quiz',
    rarity: 'rare',
    icon: '🎯',
    condition: { type: 'perfect_quizzes', count: 5 },
    points: 50,
  },
  {
    id: 'perfect-streak',
    name: 'Perfect Streak',
    description: 'Score 100% on 10 quizzes in a row',
    category: 'quiz',
    rarity: 'epic',
    icon: '💯',
    condition: { type: 'perfect_quizzes', count: 10 },
    points: 100,
    isSecret: true,
  },
  {
    id: 'quiz-whiz',
    name: 'Quiz Whiz',
    description: 'Score 100% on 25 quizzes',
    category: 'quiz',
    rarity: 'legendary',
    icon: '🧠',
    condition: { type: 'perfect_quizzes', count: 25 },
    points: 200,
    isSecret: true,
  },

  // === ENGAGEMENT ACHIEVEMENTS ===
  {
    id: 'consistency',
    name: 'Consistency',
    description: 'Log in 7 days in a row',
    category: 'engagement',
    rarity: 'rare',
    icon: '🔥',
    condition: { type: 'login_streak', days: 7 },
    points: 35,
  },
  {
    id: 'dedication',
    name: 'Dedication',
    description: 'Log in 30 days in a row',
    category: 'engagement',
    rarity: 'epic',
    icon: '⚡',
    condition: { type: 'login_streak', days: 30 },
    points: 150,
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'Log in 100 days in a row',
    category: 'engagement',
    rarity: 'legendary',
    icon: '🚀',
    condition: { type: 'login_streak', days: 100 },
    points: 500,
    isSecret: true,
  },
  {
    id: 'deep-learner',
    name: 'Deep Learner',
    description: 'Spend 5 hours learning',
    category: 'engagement',
    rarity: 'common',
    icon: '⏱️',
    condition: { type: 'time_spent', minutes: 300 },
    points: 25,
  },
  {
    id: 'dedicated-student',
    name: 'Dedicated Student',
    description: 'Spend 20 hours learning',
    category: 'engagement',
    rarity: 'rare',
    icon: '📖',
    condition: { type: 'time_spent', minutes: 1200 },
    points: 75,
  },

  // === SOCIAL ACHIEVEMENTS ===
  {
    id: 'helper',
    name: 'Helper',
    description: 'Share educational content with others',
    category: 'social',
    rarity: 'common',
    icon: '🤝',
    condition: { type: 'content_shared', count: 1 },
    points: 15,
  },
  {
    id: 'health-advocate',
    name: 'Health Advocate',
    description: 'Share educational content 5 times',
    category: 'social',
    rarity: 'rare',
    icon: '📢',
    condition: { type: 'content_shared', count: 5 },
    points: 50,
  },
  {
    id: 'community-leader',
    name: 'Community Leader',
    description: 'Share educational content 20 times',
    category: 'social',
    rarity: 'epic',
    icon: '🌟',
    condition: { type: 'content_shared', count: 20 },
    points: 150,
    isSecret: true,
  },

  // === LAB ACHIEVEMENTS ===
  {
    id: 'lab-literate',
    name: 'Lab Literate',
    description: 'Review all your lab results',
    category: 'lab',
    rarity: 'rare',
    icon: '🧪',
    condition: { type: 'labs_reviewed', count: 1 },
    points: 30,
  },
  {
    id: 'lab-explorer',
    name: 'Lab Explorer',
    description: 'Review 10 different lab results',
    category: 'lab',
    rarity: 'epic',
    icon: '🔬',
    condition: { type: 'labs_reviewed', count: 10 },
    points: 100,
    isSecret: true,
  },

  // === SPECIALTY BADGES ===
  {
    id: 'heart-healthy',
    name: 'Heart Healthy',
    description: 'Complete 3 cardiology modules',
    category: 'specialty',
    rarity: 'rare',
    icon: '❤️',
    condition: { type: 'specialty_modules_completed', specialty: 'cardiology', count: 3 },
    points: 40,
  },
  {
    id: 'diabetes-pro',
    name: 'Diabetes Pro',
    description: 'Complete 3 endocrinology modules',
    category: 'specialty',
    rarity: 'rare',
    icon: '💉',
    condition: { type: 'specialty_modules_completed', specialty: 'endocrinology', count: 3 },
    points: 40,
  },
  {
    id: 'lab-whisperer',
    name: 'Lab Whisperer',
    description: 'Complete 3 modules about understanding lab tests',
    category: 'specialty',
    rarity: 'rare',
    icon: '📊',
    condition: { type: 'specialty_modules_completed', specialty: 'lab-literacy', count: 3 },
    points: 40,
  },
  {
    id: 'brain-keeper',
    name: 'Brain Keeper',
    description: 'Complete 3 neurology modules',
    category: 'specialty',
    rarity: 'rare',
    icon: '🧠',
    condition: { type: 'specialty_modules_completed', specialty: 'neurology', count: 3 },
    points: 40,
    isSecret: true,
  },
  {
    id: 'lung-guardian',
    name: 'Lung Guardian',
    description: 'Complete 3 pulmonology modules',
    category: 'specialty',
    rarity: 'rare',
    icon: '🫁',
    condition: { type: 'specialty_modules_completed', specialty: 'pulmonology', count: 3 },
    points: 40,
    isSecret: true,
  },
  {
    id: 'bone-builder',
    name: 'Bone Builder',
    description: 'Complete 3 orthopedics modules',
    category: 'specialty',
    rarity: 'rare',
    icon: '🦴',
    condition: { type: 'specialty_modules_completed', specialty: 'orthopedics', count: 3 },
    points: 40,
    isSecret: true,
  },

  // === EXPERT ACHIEVEMENTS ===
  {
    id: 'expert-mode',
    name: 'Expert Mode',
    description: 'Unlock Expert Mode by completing 10 modules',
    category: 'expert',
    rarity: 'epic',
    icon: '🔓',
    condition: { type: 'expert_mode_unlocked' },
    points: 100,
  },
  {
    id: 'teaching-mode',
    name: 'Teaching Mode',
    description: 'Unlock Teaching Mode - teach others what you\'ve learned',
    category: 'expert',
    rarity: 'legendary',
    icon: '👨‍🏫',
    condition: { type: 'teaching_mode_unlocked' },
    points: 200,
  },
  {
    id: 'master-of-all',
    name: 'Master of All',
    description: 'Unlock all specialty badges',
    category: 'expert',
    rarity: 'legendary',
    icon: '🎖️',
    condition: { type: 'all_achievements_in_category', category: 'specialty' },
    points: 500,
    isSecret: true,
  },
];

// ============================================================================
// Achievement Helpers
// ============================================================================

/**
 * Get achievements by category
 */
export function getAchievementsByCategory(category: AchievementCategory): Achievement[] {
  return ACHIEVEMENT_DEFINITIONS.filter(a => a.category === category);
}

/**
 * Get achievement by ID
 */
export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENT_DEFINITIONS.find(a => a.id === id);
}

/**
 * Get rarity color for styling
 */
export function getRarityColor(rarity: AchievementRarity): string {
  switch (rarity) {
    case 'common': return '#6B7280'; // gray-500
    case 'rare': return '#3B82F6'; // blue-500
    case 'epic': return '#8B5CF6'; // purple-500
    case 'legendary': return '#F59E0B'; // amber-500
  }
}

/**
 * Get rarity background for styling
 */
export function getRarityBackground(rarity: AchievementRarity): string {
  switch (rarity) {
    case 'common': return 'bg-gray-100 border-gray-300';
    case 'rare': return 'bg-blue-50 border-blue-300';
    case 'epic': return 'bg-purple-50 border-purple-300';
    case 'legendary': return 'bg-amber-50 border-amber-300';
  }
}

/**
 * Calculate total possible points
 */
export function getTotalPossiblePoints(): number {
  return ACHIEVEMENT_DEFINITIONS.reduce((sum, a) => sum + a.points, 0);
}

/**
 * Get achievement display name with rarity indicator
 */
export function getAchievementDisplayInfo(achievement: Achievement): {
  name: string;
  color: string;
  bgClass: string;
  points: number;
} {
  return {
    name: achievement.name,
    color: getRarityColor(achievement.rarity),
    bgClass: getRarityBackground(achievement.rarity),
    points: achievement.points,
  };
}

// ============================================================================
// Achievement Notification
// ============================================================================

export interface AchievementNotification {
  achievement: UnlockedAchievement;
  showConfetti: boolean;
  autoDismiss: boolean;
  dismissAfterMs: number;
}

/**
 * Create achievement notification
 */
export function createAchievementNotification(
  achievement: Achievement
): AchievementNotification {
  return {
    achievement: { ...achievement, unlockedAt: new Date() },
    showConfetti: achievement.rarity === 'epic' || achievement.rarity === 'legendary',
    autoDismiss: achievement.rarity === 'common',
    dismissAfterMs: achievement.rarity === 'common' ? 5000 : 8000,
  };
}

// ============================================================================
// Achievement Statistics
// ============================================================================

export interface AchievementStats {
  totalAchievements: number;
  unlockedCount: number;
  lockedCount: number;
  totalPoints: number;
  earnedPoints: number;
  byCategory: Record<AchievementCategory, {
    total: number;
    unlocked: number;
  }>;
  byRarity: Record<AchievementRarity, {
    total: number;
    unlocked: number;
  }>;
  completionPercentage: number;
}

/**
 * Calculate achievement statistics
 */
export function calculateAchievementStats(
  unlockedIds: string[]
): AchievementStats {
  const totalAchievements = ACHIEVEMENT_DEFINITIONS.length;
  const unlockedSet = new Set(unlockedIds);
  
  const byCategory: Record<string, { total: number; unlocked: number }> = {};
  const byRarity: Record<string, { total: number; unlocked: number }> = {};
  
  let earnedPoints = 0;
  
  for (const achievement of ACHIEVEMENT_DEFINITIONS) {
    // Category stats
    if (!byCategory[achievement.category]) {
      byCategory[achievement.category] = { total: 0, unlocked: 0 };
    }
    byCategory[achievement.category].total++;
    if (unlockedSet.has(achievement.id)) {
      byCategory[achievement.category].unlocked++;
      earnedPoints += achievement.points;
    }
    
    // Rarity stats
    if (!byRarity[achievement.rarity]) {
      byRarity[achievement.rarity] = { total: 0, unlocked: 0 };
    }
    byRarity[achievement.rarity].total++;
    if (unlockedSet.has(achievement.id)) {
      byRarity[achievement.rarity].unlocked++;
    }
  }
  
  const totalPoints = getTotalPossiblePoints();
  
  return {
    totalAchievements,
    unlockedCount: unlockedIds.length,
    lockedCount: totalAchievements - unlockedIds.length,
    totalPoints,
    earnedPoints,
    byCategory: byCategory as AchievementStats['byCategory'],
    byRarity: byRarity as AchievementStats['byRarity'],
    completionPercentage: Math.round((unlockedIds.length / totalAchievements) * 100),
  };
}
