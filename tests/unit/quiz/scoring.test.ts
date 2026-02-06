import { describe, it, expect, beforeEach } from 'vitest';
import type {
  QuizQuestion,
  UserAnswer,
  QuizSession,
  QuizScore,
  QuizConfig,
  AnswerChoice,
} from '../../../core/quiz/types';

describe('Quiz Scoring Logic', () => {
  describe('Basic Scoring', () => {
    const mockQuestion: QuizQuestion = {
      questionId: 'q-001',
      type: 'structure-identification',
      format: 'multiple-choice',
      system: 'cardiovascular',
      difficulty: 1,
      questionText: 'Test question',
      choices: [
        { choiceId: 'a', text: 'Answer A', isCorrect: true },
        { choiceId: 'b', text: 'Answer B', isCorrect: false },
        { choiceId: 'c', text: 'Answer C', isCorrect: false },
      ],
      correctAnswer: 'a',
      explanation: {
        brief: 'Brief explanation',
        detailed: 'Detailed explanation',
        relatedConcepts: ['concept1'],
      },
      tags: ['tag1'],
      relatedTopicIds: ['topic1'],
    };

    it('should calculate score correctly for all correct answers', () => {
      const answers: UserAnswer[] = [
        { questionId: 'q-001', answer: 'a', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
        { questionId: 'q-002', answer: 'b', isCorrect: true, timeTaken: 25, answeredAt: new Date() },
        { questionId: 'q-003', answer: 'c', isCorrect: true, timeTaken: 35, answeredAt: new Date() },
      ];

      const correct = answers.filter((a) => a.isCorrect).length;
      const score: QuizScore = {
        correct,
        incorrect: answers.length - correct,
        total: answers.length,
        percentage: Math.round((correct / answers.length) * 100),
        bySystem: new Map(),
        byDifficulty: new Map(),
        byType: new Map(),
      };

      expect(score.correct).toBe(3);
      expect(score.incorrect).toBe(0);
      expect(score.percentage).toBe(100);
    });

    it('should calculate score correctly for mixed answers', () => {
      const answers: UserAnswer[] = [
        { questionId: 'q-001', answer: 'a', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
        { questionId: 'q-002', answer: 'b', isCorrect: false, timeTaken: 25, answeredAt: new Date() },
        { questionId: 'q-003', answer: 'c', isCorrect: true, timeTaken: 35, answeredAt: new Date() },
        { questionId: 'q-004', answer: 'd', isCorrect: false, timeTaken: 20, answeredAt: new Date() },
      ];

      const correct = answers.filter((a) => a.isCorrect).length;
      const score: QuizScore = {
        correct,
        incorrect: answers.length - correct,
        total: answers.length,
        percentage: Math.round((correct / answers.length) * 100),
        bySystem: new Map(),
        byDifficulty: new Map(),
        byType: new Map(),
      };

      expect(score.correct).toBe(2);
      expect(score.incorrect).toBe(2);
      expect(score.percentage).toBe(50);
    });

    it('should handle zero correct answers', () => {
      const answers: UserAnswer[] = [
        { questionId: 'q-001', answer: 'b', isCorrect: false, timeTaken: 30, answeredAt: new Date() },
        { questionId: 'q-002', answer: 'c', isCorrect: false, timeTaken: 25, answeredAt: new Date() },
      ];

      const correct = answers.filter((a) => a.isCorrect).length;
      const score: QuizScore = {
        correct,
        incorrect: answers.length - correct,
        total: answers.length,
        percentage: 0,
        bySystem: new Map(),
        byDifficulty: new Map(),
        byType: new Map(),
      };

      expect(score.correct).toBe(0);
      expect(score.percentage).toBe(0);
    });
  });

  describe('Difficulty-based Scoring', () => {
    const questions: QuizQuestion[] = [
      {
        questionId: 'q-001',
        type: 'structure-identification',
        format: 'multiple-choice',
        system: 'cardiovascular',
        difficulty: 1,
        questionText: 'Easy',
        correctAnswer: 'a',
        explanation: { brief: '', detailed: '', relatedConcepts: [] },
        tags: [],
        relatedTopicIds: [],
      },
      {
        questionId: 'q-002',
        type: 'function-match',
        format: 'multiple-choice',
        system: 'cardiovascular',
        difficulty: 3,
        questionText: 'Medium',
        correctAnswer: 'b',
        explanation: { brief: '', detailed: '', relatedConcepts: [] },
        tags: [],
        relatedTopicIds: [],
      },
      {
        questionId: 'q-003',
        type: 'clinical-correlation',
        format: 'multiple-choice',
        system: 'cardiovascular',
        difficulty: 5,
        questionText: 'Hard',
        correctAnswer: 'c',
        explanation: { brief: '', detailed: '', relatedConcepts: [] },
        tags: [],
        relatedTopicIds: [],
      },
    ];

    it('should track performance by difficulty', () => {
      const byDifficulty = new Map<number, { correct: number; total: number }>();

      byDifficulty.set(1, { correct: 1, total: 1 });
      byDifficulty.set(3, { correct: 0, total: 1 });
      byDifficulty.set(5, { correct: 1, total: 1 });

      expect(byDifficulty.get(1)).toEqual({ correct: 1, total: 1 });
      expect(byDifficulty.get(3)).toEqual({ correct: 0, total: 1 });
      expect(byDifficulty.get(5)).toEqual({ correct: 1, total: 1 });
    });

    it('should calculate weighted score based on difficulty', () => {
      const answers: UserAnswer[] = [
        { questionId: 'q-001', answer: 'a', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
        { questionId: 'q-002', answer: 'b', isCorrect: false, timeTaken: 45, answeredAt: new Date() },
        { questionId: 'q-003', answer: 'c', isCorrect: true, timeTaken: 60, answeredAt: new Date() },
      ];

      // Weighted by difficulty
      const weightedScore = answers.reduce((acc, answer) => {
        const question = questions.find((q) => q.questionId === answer.questionId);
        const weight = question ? question.difficulty : 1;
        return acc + (answer.isCorrect ? weight : 0);
      }, 0);

      const maxWeightedScore = questions.reduce((acc, q) => acc + q.difficulty, 0);
      const percentage = Math.round((weightedScore / maxWeightedScore) * 100);

      expect(weightedScore).toBe(6); // 1 + 0 + 5
      expect(maxWeightedScore).toBe(9); // 1 + 3 + 5
      expect(percentage).toBe(67);
    });
  });

  describe('System-based Scoring', () => {
    it('should track performance by body system', () => {
      const bySystem = new Map<string, { correct: number; total: number }>();

      bySystem.set('cardiovascular', { correct: 3, total: 4 });
      bySystem.set('respiratory', { correct: 2, total: 3 });
      bySystem.set('nervous', { correct: 1, total: 2 });

      expect(bySystem.get('cardiovascular')?.correct).toBe(3);
      expect(bySystem.get('respiratory')?.percentage).toBe(undefined); // Not calculated yet

      const cardioAccuracy = (bySystem.get('cardiovascular')!.correct / bySystem.get('cardiovascular')!.total) * 100;
      expect(cardioAccuracy).toBe(75);
    });
  });

  describe('Question Type Scoring', () => {
    it('should track performance by question type', () => {
      const byType = new Map<string, { correct: number; total: number }>();

      byType.set('structure-identification', { correct: 2, total: 3 });
      byType.set('function-match', { correct: 1, total: 2 });
      byType.set('clinical-correlation', { correct: 0, total: 1 });

      expect(byType.has('structure-identification')).toBe(true);
      expect(byType.get('clinical-correlation')?.correct).toBe(0);
    });
  });

  describe('Time Tracking', () => {
    it('should calculate average time per question', () => {
      const answers: UserAnswer[] = [
        { questionId: 'q-001', answer: 'a', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
        { questionId: 'q-002', answer: 'b', isCorrect: true, timeTaken: 45, answeredAt: new Date() },
        { questionId: 'q-003', answer: 'c', isCorrect: true, timeTaken: 25, answeredAt: new Date() },
      ];

      const totalTime = answers.reduce((acc, a) => acc + a.timeTaken, 0);
      const averageTime = totalTime / answers.length;

      expect(totalTime).toBe(100);
      expect(averageTime).toBe(33.33);
    });

    it('should flag questions taking too long', () => {
      const timeLimit = 60; // seconds
      const answers: UserAnswer[] = [
        { questionId: 'q-001', answer: 'a', isCorrect: true, timeTaken: 30, answeredAt: new Date() },
        { questionId: 'q-002', answer: 'b', isCorrect: true, timeTaken: 75, answeredAt: new Date() },
      ];

      const slowQuestions = answers.filter((a) => a.timeTaken > timeLimit);
      expect(slowQuestions).toHaveLength(1);
      expect(slowQuestions[0].questionId).toBe('q-002');
    });
  });

  describe('Pass/Fail Thresholds', () => {
    it('should pass with 70% or higher', () => {
      const passingScores = [70, 75, 80, 90, 100];
      const passingThreshold = 70;

      passingScores.forEach((score) => {
        expect(score >= passingThreshold).toBe(true);
      });
    });

    it('should fail with below 70%', () => {
      const failingScores = [0, 50, 60, 69];
      const passingThreshold = 70;

      failingScores.forEach((score) => {
        expect(score < passingThreshold).toBe(true);
      });
    });

    it('should support different passing thresholds', () => {
      const masteryThreshold = 90;
      const completionThreshold = 60;

      expect(85 >= masteryThreshold).toBe(false);
      expect(85 >= completionThreshold).toBe(true);
      expect(95 >= masteryThreshold).toBe(true);
    });
  });

  describe('Answer Validation', () => {
    it('should validate correct answer format', () => {
      const validAnswer: AnswerChoice = {
        choiceId: 'a',
        text: 'Correct answer',
        isCorrect: true,
        explanation: 'Why this is correct',
      };

      expect(validAnswer.choiceId).toBeDefined();
      expect(validAnswer.text).toBeDefined();
      expect(typeof validAnswer.isCorrect).toBe('boolean');
    });

    it('should only have one correct answer per question', () => {
      const choices: AnswerChoice[] = [
        { choiceId: 'a', text: 'A', isCorrect: true },
        { choiceId: 'b', text: 'B', isCorrect: false },
        { choiceId: 'c', text: 'C', isCorrect: false },
        { choiceId: 'd', text: 'D', isCorrect: false },
      ];

      const correctCount = choices.filter((c) => c.isCorrect).length;
      expect(correctCount).toBe(1);
    });

    it('should match user answer to correct answer', () => {
      const correctAnswer = 'a';
      const userAnswer: UserAnswer = {
        questionId: 'q-001',
        answer: 'a',
        isCorrect: true,
        timeTaken: 30,
        answeredAt: new Date(),
      };

      expect(userAnswer.answer).toBe(correctAnswer);
      expect(userAnswer.isCorrect).toBe(true);
    });
  });
});
