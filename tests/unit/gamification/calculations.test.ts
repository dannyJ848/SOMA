import { describe, it, expect, beforeEach } from 'vitest';
import {
  calculateLevelFromXP,
  calculateXPForLevel,
  getLevelTitle,
  XP_REWARDS,
  calculateXPForActivity,
  calculateHealthLiteracyScore,
  updateLearningStreak,
  recordDailyActivity,
  SPECIALTY_DISPLAY_NAMES,
  LEVEL_TITLES,
} from '../../../core/gamification/progress';
import {
  ACHIEVEMENT_DEFINITIONS,
  getAchievementById,
  getAchievementsByCategory,
  getRarityColor,
  getRarityBackground,
  getTotalPossiblePoints,
  calculateAchievementStats,
  createAchievementNotification,
} from '../../../core/gamification/achievements';
import type {
  AchievementCategory,
  AchievementRarity,
  GamificationProgress,
  SpecialtyProgress,
} from '../../../core/gamification/progress';

describe('Gamification Calculations', () => {
  describe('XP and Level System', () => {
    it('should calculate XP required for each level', () => {
      const xpLevel1 = calculateXPForLevel(1);
      const xpLevel5 = calculateXPForLevel(5);
      const xpLevel10 = calculateXPForLevel(10);

      expect(xpLevel1).toBeGreaterThan(0);
      expect(xpLevel5).toBeGreaterThan(xpLevel1);
      expect(xpLevel10).toBeGreaterThan(xpLevel5);
    });

    it('should calculate correct level from total XP', () => {
      const level1 = calculateLevelFromXP(0);
      expect(level1.level).toBe(1);

      const level2 = calculateLevelFromXP(calculateXPForLevel(1));
      expect(level2.level).toBe(2);
    });

    it('should provide correct level titles', () => {
      expect(getLevelTitle(1)).toBe('Health Novice');
      expect(getLevelTitle(5)).toBe('Health Scholar');
      expect(getLevelTitle(10)).toBe('Health Legend');
    });

    it('should have all level titles defined', () => {
      for (let i = 1; i <= 10; i++) {
        expect(getLevelTitle(i)).toBeDefined();
        expect(typeof getLevelTitle(i)).toBe('string');
      }
    });
  });

  describe('XP Rewards', () => {
    it('should have defined XP values for all activities', () => {
      expect(XP_REWARDS.MODULE_COMPLETED).toBe(50);
      expect(XP_REWARDS.QUIZ_COMPLETED).toBe(20);
      expect(XP_REWARDS.PERFECT_QUIZ).toBe(50);
      expect(XP_REWARDS.LAB_REVIEWED).toBe(15);
      expect(XP_REWARDS.CONTENT_SHARED).toBe(25);
      expect(XP_REWARDS.DAILY_LOGIN).toBe(10);
      expect(XP_REWARDS.ACHIEVEMENT_UNLOCKED).toBe(100);
    });

    it('should calculate XP with streak bonus', () => {
      const baseLoginXP = calculateXPForActivity('DAILY_LOGIN', 0);
      const streak5XP = calculateXPForActivity('DAILY_LOGIN', 5);
      const streak10XP = calculateXPForActivity('DAILY_LOGIN', 10);

      expect(baseLoginXP).toBe(10);
      expect(streak5XP).toBe(35); // 10 + (5 * 5)
      expect(streak10XP).toBe(60); // 10 + (10 * 5)
    });

    it('should calculate XP for module completion', () => {
      const xp = calculateXPForActivity('MODULE_COMPLETED');
      expect(xp).toBe(50);
    });

    it('should calculate XP for perfect quiz', () => {
      const xp = calculateXPForActivity('PERFECT_QUIZ');
      expect(xp).toBe(50);
    });
  });

  describe('Health Literacy Score', () => {
    const mockSpecialties: Record<string, Partial<SpecialtyProgress>> = {
      cardiology: {
        specialty: 'cardiology',
        percentage: 80,
        quizzesTaken: 10,
        averageQuizScore: 85,
      },
      endocrinology: {
        specialty: 'endocrinology',
        percentage: 60,
        quizzesTaken: 5,
        averageQuizScore: 70,
      },
      neurology: {
        specialty: 'neurology',
        percentage: 40,
        quizzesTaken: 3,
        averageQuizScore: 65,
      },
    };

    it('should calculate weighted health literacy score', () => {
      const score = calculateHealthLiteracyScore(mockSpecialties as any);

      expect(score.overall).toBeGreaterThanOrEqual(0);
      expect(score.overall).toBeLessThanOrEqual(100);
      expect(Object.keys(score.bySpecialty)).toHaveLength(3);
    });

    it('should include all specialties in score calculation', () => {
      const score = calculateHealthLiteracyScore(mockSpecialties as any);

      expect(score.bySpecialty.cardiology).toBeDefined();
      expect(score.bySpecialty.endocrinology).toBeDefined();
      expect(score.bySpecialty.neurology).toBeDefined();
    });

    it('should handle empty specialties', () => {
      const score = calculateHealthLiteracyScore({} as any);
      expect(score.overall).toBe(0);
    });

    it('should have lastCalculated timestamp', () => {
      const score = calculateHealthLiteracyScore(mockSpecialties as any);
      expect(score.lastCalculated).toBeInstanceOf(Date);
    });
  });

  describe('Learning Streak', () => {
    it('should initialize streak on first login', () => {
      const initialStreak = {
        currentStreak: 0,
        longestStreak: 0,
        lastLoginDate: null,
        streakHistory: [],
      };

      const today = new Date('2024-01-15');
      const updated = updateLearningStreak(initialStreak as any, today);

      expect(updated.currentStreak).toBe(1);
      expect(updated.longestStreak).toBe(1);
    });

    it('should increment streak on consecutive day', () => {
      const yesterday = new Date('2024-01-14');
      const today = new Date('2024-01-15');

      const currentStreak = {
        currentStreak: 5,
        longestStreak: 5,
        lastLoginDate: yesterday,
        streakHistory: [{ date: yesterday, activityMinutes: 30, modulesCompleted: 1, quizzesTaken: 0 }],
      };

      const updated = updateLearningStreak(currentStreak as any, today);

      expect(updated.currentStreak).toBe(6);
      expect(updated.longestStreak).toBe(6);
    });

    it('should reset streak after gap', () => {
      const twoDaysAgo = new Date('2024-01-13');
      const today = new Date('2024-01-15');

      const currentStreak = {
        currentStreak: 5,
        longestStreak: 10,
        lastLoginDate: twoDaysAgo,
        streakHistory: [],
      };

      const updated = updateLearningStreak(currentStreak as any, today);

      expect(updated.currentStreak).toBe(1);
      expect(updated.longestStreak).toBe(10); // Keeps record
    });

    it('should not change streak on same day login', () => {
      const today = new Date('2024-01-15');

      const currentStreak = {
        currentStreak: 5,
        longestStreak: 5,
        lastLoginDate: today,
        streakHistory: [],
      };

      const updated = updateLearningStreak(currentStreak as any, today);

      expect(updated.currentStreak).toBe(5);
    });
  });

  describe('Daily Activity Recording', () => {
    it('should record activity for today', () => {
      const streak = {
        currentStreak: 1,
        longestStreak: 1,
        lastLoginDate: new Date(),
        streakHistory: [],
      };

      const today = new Date();
      const updated = recordDailyActivity(streak as any, 30, 1, 2, today);

      expect(updated.streakHistory).toHaveLength(1);
      expect(updated.streakHistory[0].activityMinutes).toBe(30);
      expect(updated.streakHistory[0].modulesCompleted).toBe(1);
      expect(updated.streakHistory[0].quizzesTaken).toBe(2);
    });

    it('should accumulate activity for same day', () => {
      const today = new Date('2024-01-15');
      const streak = {
        currentStreak: 1,
        longestStreak: 1,
        lastLoginDate: today,
        streakHistory: [{
          date: today,
          activityMinutes: 20,
          modulesCompleted: 1,
          quizzesTaken: 0,
        }],
      };

      const updated = recordDailyActivity(streak as any, 15, 0, 1, today);

      expect(updated.streakHistory[0].activityMinutes).toBe(35);
      expect(updated.streakHistory[0].quizzesTaken).toBe(1);
    });
  });

  describe('Specialty Display Names', () => {
    it('should have display names for all specialties', () => {
      const specialties = [
        'cardiology',
        'endocrinology',
        'neurology',
        'orthopedics',
        'oncology',
        'psychiatry',
      ];

      specialties.forEach((specialty) => {
        expect(SPECIALTY_DISPLAY_NAMES[specialty]).toBeDefined();
        expect(typeof SPECIALTY_DISPLAY_NAMES[specialty]).toBe('string');
      });
    });

    it('should have proper formatting', () => {
      expect(SPECIALTY_DISPLAY_NAMES.cardiology).toBe('Cardiology');
      expect(SPECIALTY_DISPLAY_NAMES.endocrinology).toBe('Endocrinology');
      expect(SPECIALTY_DISPLAY_NAMES['infectious-disease']).toBe('Infectious Disease');
      expect(SPECIALTY_DISPLAY_NAMES['allergy-immunology']).toBe('Allergy & Immunology');
    });
  });

  describe('Achievements', () => {
    it('should have all achievement definitions', () => {
      expect(ACHIEVEMENT_DEFINITIONS.length).toBeGreaterThan(0);
    });

    it('should find achievement by ID', () => {
      const achievement = getAchievementById('first-steps');
      expect(achievement).toBeDefined();
      expect(achievement?.name).toBe('First Steps');
    });

    it('should return undefined for unknown achievement', () => {
      const achievement = getAchievementById('unknown-id');
      expect(achievement).toBeUndefined();
    });

    it('should get achievements by category', () => {
      const milestoneAchievements = getAchievementsByCategory('milestone');
      const quizAchievements = getAchievementsByCategory('quiz');

      expect(milestoneAchievements.length).toBeGreaterThan(0);
      expect(quizAchievements.length).toBeGreaterThan(0);
    });

    it('should have rarity colors', () => {
      expect(getRarityColor('common')).toBe('#6B7280');
      expect(getRarityColor('rare')).toBe('#3B82F6');
      expect(getRarityColor('epic')).toBe('#8B5CF6');
      expect(getRarityColor('legendary')).toBe('#F59E0B');
    });

    it('should have rarity backgrounds', () => {
      expect(getRarityBackground('common')).toContain('bg-gray');
      expect(getRarityBackground('rare')).toContain('bg-blue');
      expect(getRarityBackground('epic')).toContain('bg-purple');
      expect(getRarityBackground('legendary')).toContain('bg-amber');
    });

    it('should calculate total possible points', () => {
      const total = getTotalPossiblePoints();
      expect(total).toBeGreaterThan(0);
    });

    it('should calculate achievement stats', () => {
      const unlockedIds = ['first-steps', 'knowledge-seeker'];
      const stats = calculateAchievementStats(unlockedIds);

      expect(stats.totalAchievements).toBe(ACHIEVEMENT_DEFINITIONS.length);
      expect(stats.unlockedCount).toBe(2);
      expect(stats.lockedCount).toBe(stats.totalAchievements - 2);
      expect(stats.completionPercentage).toBeGreaterThan(0);
    });

    it('should categorize stats by rarity', () => {
      const stats = calculateAchievementStats([]);

      expect(stats.byRarity.common).toBeDefined();
      expect(stats.byRarity.rare).toBeDefined();
      expect(stats.byRarity.epic).toBeDefined();
      expect(stats.byRarity.legendary).toBeDefined();
    });

    it('should create achievement notifications', () => {
      const achievement = ACHIEVEMENT_DEFINITIONS[0];
      const notification = createAchievementNotification(achievement);

      expect(notification.achievement).toBeDefined();
      expect(notification.achievement.unlockedAt).toBeInstanceOf(Date);
      expect(typeof notification.showConfetti).toBe('boolean');
      expect(typeof notification.autoDismiss).toBe('boolean');
    });
  });

  describe('Progress Summary', () => {
    const mockProgress: Partial<GamificationProgress> = {
      specialties: {
        cardiology: {
          specialty: 'cardiology',
          displayName: 'Cardiology',
          completedModules: 5,
          totalModules: 10,
          percentage: 50,
          quizzesTaken: 3,
          averageQuizScore: 80,
          timeSpent: 120,
          lastActivity: new Date(),
          level: 3,
        } as SpecialtyProgress,
        endocrinology: {
          specialty: 'endocrinology',
          displayName: 'Endocrinology',
          completedModules: 3,
          totalModules: 8,
          percentage: 37,
          quizzesTaken: 2,
          averageQuizScore: 75,
          timeSpent: 90,
          lastActivity: new Date(),
          level: 2,
        } as SpecialtyProgress,
      },
      streak: {
        currentStreak: 7,
        longestStreak: 14,
        lastLoginDate: new Date(),
        streakHistory: [],
      },
      timeTracking: {
        totalMinutes: 300,
        thisWeek: 60,
        thisMonth: 180,
        dailyAverage: 15,
        history: [],
      },
      healthLiteracy: {
        overall: 65,
        bySpecialty: {} as any,
        lastCalculated: new Date(),
      },
    };

    it('should calculate total modules completed', () => {
      const specialties = Object.values(mockProgress.specialties || {});
      const total = specialties.reduce((sum, s) => sum + s.completedModules, 0);
      expect(total).toBe(8);
    });

    it('should calculate total quizzes taken', () => {
      const specialties = Object.values(mockProgress.specialties || {});
      const total = specialties.reduce((sum, s) => sum + s.quizzesTaken, 0);
      expect(total).toBe(5);
    });

    it('should identify top specialty', () => {
      const specialties = Object.values(mockProgress.specialties || {});
      const top = specialties.reduce((max, s) => s.percentage > max.percentage ? s : max, specialties[0]);
      expect(top.specialty).toBe('cardiology');
    });

    it('should identify weakest specialty', () => {
      const specialties = Object.values(mockProgress.specialties || {});
      const weakest = specialties.reduce((min, s) => s.percentage < min.percentage ? s : min, specialties[0]);
      expect(weakest.specialty).toBe('endocrinology');
    });
  });
});
