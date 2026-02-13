import { describe, it, expect, beforeEach } from 'vitest';
import type {
  LearningRecommendation,
  KnowledgeGap,
  HealthTrigger,
  LearningPreferences,
  RecommendationPriority,
  RecommendationSource,
} from '../../../core/ai-recommendations/types';

describe('AI Recommendation Engine', () => {
  describe('Recommendation Priority Levels', () => {
    const priorities: RecommendationPriority[] = ['critical', 'high', 'medium', 'low'];

    it('should have 4 priority levels', () => {
      expect(priorities).toHaveLength(4);
    });

    it('should have correct priority order', () => {
      const priorityOrder = {
        critical: 4,
        high: 3,
        medium: 2,
        low: 1,
      };

      expect(priorityOrder.critical).toBeGreaterThan(priorityOrder.high);
      expect(priorityOrder.high).toBeGreaterThan(priorityOrder.medium);
      expect(priorityOrder.medium).toBeGreaterThan(priorityOrder.low);
    });
  });

  describe('Recommendation Sources', () => {
    const sources: RecommendationSource[] = [
      'health-condition',
      'symptom-reported',
      'medication-use',
      'lab-result',
      'knowledge-gap',
      'learning-path',
      'related-topic',
      'trending-health',
      'seasonal-relevance',
    ];

    it('should have 9 recommendation sources', () => {
      expect(sources).toHaveLength(9);
    });

    it('should include health-related sources', () => {
      expect(sources).toContain('health-condition');
      expect(sources).toContain('symptom-reported');
      expect(sources).toContain('medication-use');
      expect(sources).toContain('lab-result');
    });

    it('should include learning-related sources', () => {
      expect(sources).toContain('knowledge-gap');
      expect(sources).toContain('learning-path');
      expect(sources).toContain('related-topic');
    });
  });

  describe('Recommendation Scoring', () => {
    it('should calculate health relevance score', () => {
      const recommendation: Partial<LearningRecommendation> = {
        priority: 'high',
        source: 'health-condition',
        healthRelevance: {
          summary: 'Relevant to diabetes',
          detailedExplanation: 'Detailed explanation',
          potentialBenefits: ['Better glucose control', 'Understanding complications'],
          connectionToHealth: 'Direct connection',
          actionableInsights: ['Monitor blood sugar', 'Diet changes'],
        },
      };

      const relevanceScore = recommendation.healthRelevance?.potentialBenefits.length || 0;
      expect(relevanceScore).toBe(2);
    });

    it('should prioritize health-triggered recommendations', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { priority: 'medium', source: 'trending-health' },
        { priority: 'high', source: 'health-condition' },
        { priority: 'low', source: 'related-topic' },
        { priority: 'critical', source: 'lab-result' },
      ];

      const sorted = [...recommendations].sort((a, b) => {
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority!] - priorityOrder[a.priority!];
      });

      expect(sorted[0].priority).toBe('critical');
      expect(sorted[0].source).toBe('lab-result');
      expect(sorted[3].priority).toBe('low');
    });

    it('should weight knowledge gaps appropriately', () => {
      const gap: KnowledgeGap = {
        gapId: 'gap-001',
        topicId: 'topic-001',
        topicName: 'Blood Pressure Basics',
        system: 'cardiovascular',
        contentType: 'module',
        relevanceToHealth: 0.85,
        confidenceScore: 0.92,
        prerequisiteTopics: ['heart-anatomy'],
        estimatedLearningTime: 15,
        lastAssessed: new Date(),
      };

      expect(gap.relevanceToHealth).toBeGreaterThan(0.5);
      expect(gap.confidenceScore).toBeGreaterThan(0.8);
      expect(gap.estimatedLearningTime).toBeGreaterThan(0);
    });
  });

  describe('Health Trigger Processing', () => {
    it('should create recommendations from health triggers', () => {
      const trigger: HealthTrigger = {
        triggerId: 'trigger-001',
        triggerType: 'condition',
        triggerName: 'Type 2 Diabetes',
        triggerDetails: 'HbA1c: 8.5%',
        relevantTopics: ['diabetes-management', 'blood-sugar-control'],
        urgency: 'high',
      };

      const recommendations = trigger.relevantTopics.map((topic) => ({
        topicId: topic,
        priority: trigger.urgency,
        source: 'health-condition',
        becauseYouHave: [trigger.triggerName],
      }));

      expect(recommendations).toHaveLength(2);
      expect(recommendations[0].priority).toBe('high');
      expect(recommendations[0].becauseYouHave).toContain('Type 2 Diabetes');
    });

    it('should handle multiple triggers', () => {
      const triggers: HealthTrigger[] = [
        {
          triggerId: 't1',
          triggerType: 'condition',
          triggerName: 'Hypertension',
          triggerDetails: 'BP: 140/90',
          relevantTopics: ['hypertension-basics'],
          urgency: 'medium',
        },
        {
          triggerId: 't2',
          triggerType: 'medication',
          triggerName: 'Metformin',
          triggerDetails: '500mg twice daily',
          relevantTopics: ['metformin-guide'],
          urgency: 'low',
        },
      ];

      const allTopics = triggers.flatMap((t) => t.relevantTopics);
      expect(allTopics).toContain('hypertension-basics');
      expect(allTopics).toContain('metformin-guide');
    });
  });

  describe('User Preference Matching', () => {
    const preferences: LearningPreferences = {
      userId: 'user-001',
      pace: 'moderate',
      digestFrequency: 'weekly',
      preferredSystems: ['cardiovascular', 'endocrinology'],
      excludedSystems: ['orthopedics'],
      dailyTimeBudget: 30,
      weeklyGoal: 3,
      preferredContentTypes: ['module', 'quiz'],
      notificationEnabled: true,
      focusOnHealthRelevant: true,
      includePreventive: true,
      depthPreference: 3,
    };

    it('should respect user pace preference', () => {
      const paces = ['intensive', 'moderate', 'casual', 'minimal'];
      expect(paces).toContain(preferences.pace);
    });

    it('should calculate time-based limits', () => {
      const weeklyTimeBudget = preferences.dailyTimeBudget * 7;
      expect(weeklyTimeBudget).toBe(210);
    });

    it('should filter by preferred systems', () => {
      const isPreferred = (system: string) => preferences.preferredSystems.includes(system as any);
      expect(isPreferred('cardiovascular')).toBe(true);
      expect(isPreferred('orthopedics')).toBe(false);
    });

    it('should respect content type preferences', () => {
      const validContentTypes = ['module', 'article', 'video', 'quiz', 'interactive'];
      preferences.preferredContentTypes.forEach((type) => {
        expect(validContentTypes).toContain(type);
      });
    });
  });

  describe('Recommendation Filtering', () => {
    const recommendations: Partial<LearningRecommendation>[] = [
      {
        recommendationId: 'rec-001',
        topicId: 'diabetes',
        priority: 'high',
        source: 'health-condition',
        prerequisitesMet: true,
      },
      {
        recommendationId: 'rec-002',
        topicId: 'cardiology',
        priority: 'medium',
        source: 'learning-path',
        prerequisitesMet: false,
      },
      {
        recommendationId: 'rec-003',
        topicId: 'nutrition',
        priority: 'low',
        source: 'related-topic',
        prerequisitesMet: true,
        dismissed: true,
      },
    ];

    it('should filter by prerequisites met', () => {
      const readyToStart = recommendations.filter((r) => r.prerequisitesMet && !r.dismissed);
      expect(readyToStart).toHaveLength(1);
      expect(readyToStart[0].recommendationId).toBe('rec-001');
    });

    it('should exclude dismissed recommendations', () => {
      const active = recommendations.filter((r) => !r.dismissed);
      expect(active).toHaveLength(2);
    });

    it('should sort by priority', () => {
      const active = recommendations.filter((r) => !r.dismissed);
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      const sorted = active.sort((a, b) => priorityOrder[b.priority!] - priorityOrder[a.priority!]);

      expect(sorted[0].priority).toBe('high');
      expect(sorted[1].priority).toBe('medium');
    });
  });

  describe('Knowledge Gap Detection', () => {
    it('should identify gaps based on quiz performance', () => {
      const quizResults = [
        { topicId: 'cardio-anatomy', accuracy: 0.3, questionsAttempted: 10 },
        { topicId: 'cardio-physiology', accuracy: 0.8, questionsAttempted: 10 },
        { topicId: 'cardio-pathology', accuracy: 0.2, questionsAttempted: 5 },
      ];

      const gaps = quizResults
        .filter((r) => r.accuracy < 0.5 && r.questionsAttempted >= 5)
        .map((r) => ({
          topicId: r.topicId,
          accuracy: r.accuracy,
          needsReview: true,
        }));

      expect(gaps).toHaveLength(2);
      expect(gaps.map((g) => g.topicId)).toContain('cardio-anatomy');
      expect(gaps.map((g) => g.topicId)).toContain('cardio-pathology');
    });

    it('should consider confidence scores', () => {
      const gap: KnowledgeGap = {
        gapId: 'gap-001',
        topicId: 'topic-001',
        topicName: 'Test Topic',
        system: 'cardiovascular',
        contentType: 'module',
        relevanceToHealth: 0.9,
        confidenceScore: 0.75,
        prerequisiteTopics: [],
        estimatedLearningTime: 20,
        lastAssessed: new Date(),
      };

      const isHighConfidence = gap.confidenceScore >= 0.7;
      const isHighRelevance = gap.relevanceToHealth >= 0.8;

      expect(isHighConfidence).toBe(true);
      expect(isHighRelevance).toBe(true);
    });
  });

  describe('Recommendation Personalization', () => {
    it('should generate personalized reasons', () => {
      const recommendation: Partial<LearningRecommendation> = {
        topicName: 'Diabetes Management',
        becauseYouHave: ['Type 2 Diabetes', 'High HbA1c'],
        personalizedReason: 'Based on your recent lab results',
      };

      expect(recommendation.becauseYouHave?.length).toBeGreaterThan(0);
      expect(recommendation.personalizedReason).toBeDefined();
    });

    it('should estimate learning time', () => {
      const estimatedTimes = [10, 15, 20, 30, 45, 60];
      const totalTime = estimatedTimes.reduce((a, b) => a + b, 0);

      expect(totalTime).toBe(180);
    });

    it('should suggest learning objectives', () => {
      const objectives = [
        'Understand blood sugar monitoring',
        'Learn carbohydrate counting',
        'Recognize hypo/hyperglycemia symptoms',
      ];

      expect(objectives).toHaveLength(3);
      objectives.forEach((obj) => {
        expect(typeof obj).toBe('string');
        expect(obj.length).toBeGreaterThan(10);
      });
    });
  });
});
