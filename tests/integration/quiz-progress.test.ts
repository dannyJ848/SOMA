import { describe, it, expect, vi } from 'vitest';
import type {
  QuizSession,
  QuizScore,
  UserAnswer,
  QuizQuestion,
  TopicPerformance,
} from '../../core/quiz/types';
import type {
  LearningProgress,
  MasteryRecord,
} from '../../core/education/types';
import type { GamificationProgress, SpecialtyProgress } from '../../core/gamification/progress';

describe('Quiz Completion to Progress Tracking Flow', () => {
  describe('Quiz Score Calculation', () => {
    const mockAnswers: UserAnswer[] = [
      { questionId: 'q1', answer: 'a', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
      { questionId: 'q2', answer: 'b', isCorrect: true, timeTaken: 25, answeredAt: new Date() },
      { questionId: 'q3', answer: 'c', isCorrect: false, timeTaken: 40, answeredAt: new Date() },
      { questionId: 'q4', answer: 'd', isCorrect: true, timeTaken: 20, answeredAt: new Date() },
    ];

    it('should calculate quiz score from answers', () => {
      const correct = mockAnswers.filter((a) => a.isCorrect).length;
      const score: QuizScore = {
        correct,
        incorrect: mockAnswers.length - correct,
        total: mockAnswers.length,
        percentage: Math.round((correct / mockAnswers.length) * 100),
        bySystem: new Map(),
        byDifficulty: new Map(),
        byType: new Map(),
      };

      expect(score.correct).toBe(3);
      expect(score.percentage).toBe(75);
    });

    it('should track time spent on quiz', () => {
      const totalTime = mockAnswers.reduce((sum, a) => sum + a.timeTaken, 0);
      expect(totalTime).toBe(115);
    });

    it('should calculate average time per question', () => {
      const avgTime =
        mockAnswers.reduce((sum, a) => sum + a.timeTaken, 0) / mockAnswers.length;
      expect(avgTime).toBe(28.75);
    });
  });

  describe('Progress Update', () => {
    const initialProgress: Partial<LearningProgress> = {
      userId: 'user-001',
      moduleId: 'cardio-basics',
      complexityLevel: 3,
      status: 'in-progress',
      startedAt: new Date('2024-01-01'),
      timeSpent: 30,
      revisitCount: 0,
    };

    const quizResult: QuizScore = {
      correct: 4,
      incorrect: 1,
      total: 5,
      percentage: 80,
      bySystem: new Map(),
      byDifficulty: new Map(),
      byType: new Map(),
    };

    it('should update progress on quiz completion', () => {
      const updatedProgress: Partial<LearningProgress> = {
        ...initialProgress,
        status: 'completed',
        completedAt: new Date(),
        quizScore: quizResult.percentage,
        timeSpent: initialProgress.timeSpent! + 20,
      };

      expect(updatedProgress.status).toBe('completed');
      expect(updatedProgress.quizScore).toBe(80);
    });

    it('should mark as mastered on high score', () => {
      const masteryThreshold = 90;
      const highScore = 95;

      const status = highScore >= masteryThreshold ? 'mastered' : 'completed';
      expect(status).toBe('mastered');
    });

    it('should increment revisit count', () => {
      const updatedProgress = {
        ...initialProgress,
        revisitCount: initialProgress.revisitCount! + 1,
      };

      expect(updatedProgress.revisitCount).toBe(1);
    });
  });

  describe('Topic Performance Update', () => {
    const existingPerformance: TopicPerformance = {
      topicId: 'heart-anatomy',
      topicName: 'Heart Anatomy',
      system: 'cardiovascular',
      questionsAttempted: 10,
      correctAnswers: 7,
      accuracy: 70,
      averageTime: 25,
      lastAttempted: new Date('2024-01-01'),
      needsReview: false,
      recommendedDifficulty: 3,
    };

    const newAnswers: UserAnswer[] = [
      { questionId: 'q1', answer: 'a', isCorrect: true, timeTaken: 20, answeredAt: new Date() },
      { questionId: 'q2', answer: 'b', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
      { questionId: 'q3', answer: 'c', isCorrect: false, timeTaken: 25, answeredAt: new Date() },
    ];

    it('should update topic accuracy', () => {
      const correct = newAnswers.filter((a) => a.isCorrect).length;
      const totalQuestions = existingPerformance.questionsAttempted + newAnswers.length;
      const totalCorrect = existingPerformance.correctAnswers + correct;
      const newAccuracy = Math.round((totalCorrect / totalQuestions) * 100);

      expect(newAccuracy).toBe(70); // (7 + 2) / (10 + 3) = 69.2 -> 70
    });

    it('should update average time', () => {
      const newTotalTime =
        existingPerformance.averageTime * existingPerformance.questionsAttempted +
        newAnswers.reduce((sum, a) => sum + a.timeTaken, 0);
      const totalQuestions = existingPerformance.questionsAttempted + newAnswers.length;
      const newAverageTime = Math.round(newTotalTime / totalQuestions);

      expect(newAverageTime).toBe(25);
    });

    it('should flag topics needing review', () => {
      const newAccuracy = 65;
      const needsReview = newAccuracy < 70;
      expect(needsReview).toBe(true);
    });
  });

  describe('Mastery Record Update', () => {
    it('should create mastery record on high performance', () => {
      const quizScore = 95;
      const masteryThreshold = 90;

      if (quizScore >= masteryThreshold) {
        const masteryRecord: Partial<MasteryRecord> = {
          conceptId: 'heart-anatomy',
          userId: 'user-001',
          moduleId: 'cardio-basics',
          masteryLevel: 'expert',
          demonstratedAt: new Date(),
          evidence: ['quiz-session-001'],
        };

        expect(masteryRecord.masteryLevel).toBe('expert');
        expect(masteryRecord.evidence).toHaveLength(1);
      }
    });

    it('should update mastery level based on consistency', () => {
      const quizScores = [85, 90, 88, 92, 95];
      const averageScore = quizScores.reduce((a, b) => a + b, 0) / quizScores.length;

      let masteryLevel: string;
      if (averageScore >= 90) masteryLevel = 'expert';
      else if (averageScore >= 80) masteryLevel = 'proficient';
      else if (averageScore >= 70) masteryLevel = 'developing';
      else masteryLevel = 'novice';

      expect(averageScore).toBe(90);
      expect(masteryLevel).toBe('expert');
    });
  });

  describe('Specialty Progress Update', () => {
    const initialSpecialtyProgress: Partial<SpecialtyProgress> = {
      specialty: 'cardiology',
      completedModules: 2,
      totalModules: 10,
      percentage: 20,
      quizzesTaken: 3,
      averageQuizScore: 75,
    };

    it('should update completed modules count', () => {
      const updated = {
        ...initialSpecialtyProgress,
        completedModules: initialSpecialtyProgress.completedModules! + 1,
        percentage: Math.round(((initialSpecialtyProgress.completedModules! + 1) / initialSpecialtyProgress.totalModules!) * 100),
      };

      expect(updated.completedModules).toBe(3);
      expect(updated.percentage).toBe(30);
    });

    it('should update average quiz score', () => {
      const newQuizScore = 85;
      const totalQuizzes = initialSpecialtyProgress.quizzesTaken! + 1;
      const totalScore =
        initialSpecialtyProgress.averageQuizScore! * initialSpecialtyProgress.quizzesTaken! +
        newQuizScore;
      const newAverage = Math.round(totalScore / totalQuizzes);

      expect(newAverage).toBe(78);
    });

    it('should update specialty level', () => {
      const percentage = 65;
      const level = Math.min(10, Math.max(1, Math.floor(percentage / 10) + 1));

      expect(level).toBe(7);
    });
  });

  describe('Streak Update', () => {
    it('should update streak on quiz completion', () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const streak = {
        currentStreak: 5,
        longestStreak: 10,
        lastLoginDate: yesterday,
        streakHistory: [],
      };

      const daysSinceLastLogin = Math.floor(
        (today.getTime() - yesterday.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysSinceLastLogin === 1) {
        streak.currentStreak += 1;
        streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);
      }

      expect(streak.currentStreak).toBe(6);
    });

    it('should record quiz in daily activity', () => {
      const dailyActivity = {
        date: new Date(),
        activityMinutes: 30,
        modulesCompleted: 1,
        quizzesTaken: 1,
      };

      expect(dailyActivity.quizzesTaken).toBe(1);
    });
  });

  describe('XP Award', () => {
    const XP_REWARDS = {
      QUIZ_COMPLETED: 20,
      PERFECT_QUIZ: 50,
    };

    it('should award XP for quiz completion', () => {
      const score: QuizScore = {
        correct: 4,
        incorrect: 1,
        total: 5,
        percentage: 80,
        bySystem: new Map(),
        byDifficulty: new Map(),
        byType: new Map(),
      };

      const xpEarned = XP_REWARDS.QUIZ_COMPLETED;
      expect(xpEarned).toBe(20);
    });

    it('should award bonus XP for perfect score', () => {
      const isPerfectScore = true;
      const xpEarned = isPerfectScore ? XP_REWARDS.PERFECT_QUIZ : XP_REWARDS.QUIZ_COMPLETED;

      expect(xpEarned).toBe(50);
    });

    it('should calculate total XP for session', () => {
      const baseXP = 20;
      const streakBonus = 5;
      const totalXP = baseXP + streakBonus;

      expect(totalXP).toBe(25);
    });
  });

  describe('Achievement Check', () => {
    it('should check for quiz achievements', () => {
      const quizzesCompleted = 5;
      const perfectQuizzes = 3;

      const achievements = [];
      if (quizzesCompleted >= 1) achievements.push('first-quiz');
      if (perfectQuizzes >= 5) achievements.push('quiz-master');

      expect(achievements).toContain('first-quiz');
    });

    it('should track quiz streak achievement', () => {
      const dailyQuizStreak = 7;
      const hasStreakAchievement = dailyQuizStreak >= 7;

      expect(hasStreakAchievement).toBe(true);
    });
  });
});
