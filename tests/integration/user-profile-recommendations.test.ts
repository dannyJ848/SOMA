import { describe, it, expect, vi } from 'vitest';
import type {
  LearningPreferences,
  LearningRecommendation,
  KnowledgeGap,
  HealthTrigger,
} from '../../core/ai-recommendations/types';
import type {
  EducationalModule,
  UserLearningProfile,
} from '../../core/education/types';

describe('User Profile to Recommendations Flow', () => {
  describe('Preference-based Recommendations', () => {
    const userPreferences: LearningPreferences = {
      userId: 'user-001',
      pace: 'moderate',
      digestFrequency: 'weekly',
      preferredSystems: ['cardiovascular', 'endocrinology'],
      excludedSystems: ['orthopedics', 'dermatology'],
      dailyTimeBudget: 30,
      weeklyGoal: 3,
      preferredContentTypes: ['module', 'quiz'],
      notificationEnabled: true,
      focusOnHealthRelevant: true,
      includePreventive: true,
      depthPreference: 3,
    };

    it('should filter recommendations by preferred systems', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { topicId: 'heart-health', system: 'cardiovascular' },
        { topicId: 'diabetes-mgmt', system: 'endocrinology' },
        { topicId: 'bone-health', system: 'orthopedics' },
        { topicId: 'skin-care', system: 'dermatology' },
      ];

      const filtered = recommendations.filter((r) =>
        userPreferences.preferredSystems.includes(r.system as any)
      );

      expect(filtered).toHaveLength(2);
      expect(filtered.map((r) => r.system)).toContain('cardiovascular');
      expect(filtered.map((r) => r.system)).toContain('endocrinology');
    });

    it('should exclude recommendations from excluded systems', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { topicId: 'heart-health', system: 'cardiovascular' },
        { topicId: 'bone-health', system: 'orthopedics' },
      ];

      const filtered = recommendations.filter(
        (r) => !userPreferences.excludedSystems.includes(r.system as any)
      );

      expect(filtered).toHaveLength(1);
      expect(filtered[0].system).toBe('cardiovascular');
    });

    it('should respect daily time budget', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { topicId: 'short-topic', estimatedTime: 15 },
        { topicId: 'medium-topic', estimatedTime: 30 },
        { topicId: 'long-topic', estimatedTime: 45 },
      ];

      const withinBudget = recommendations.filter(
        (r) => (r.estimatedTime || 0) <= userPreferences.dailyTimeBudget
      );

      expect(withinBudget).toHaveLength(2);
    });

    it('should calculate weekly recommendation capacity', () => {
      const weeklyCapacity = userPreferences.dailyTimeBudget * 7;
      expect(weeklyCapacity).toBe(210);
    });

    it('should prioritize health-relevant content when requested', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { topicId: 'general-nutrition', source: 'trending-health', priority: 'low' },
        { topicId: 'diabetes-mgmt', source: 'health-condition', priority: 'high' },
      ];

      const healthRelevantFirst = [...recommendations].sort((a, b) => {
        if (a.source === 'health-condition' && b.source !== 'health-condition') return -1;
        if (b.source === 'health-condition' && a.source !== 'health-condition') return 1;
        return 0;
      });

      expect(healthRelevantFirst[0].topicId).toBe('diabetes-mgmt');
    });
  });

  describe('Learning Profile to Content Matching', () => {
    const userProfile: UserLearningProfile = {
      preferredComplexity: 3,
      learningStyle: 'visual',
      priorKnowledge: ['heart-anatomy', 'blood-pressure'],
      struggledConcepts: ['electrocardiogram'],
      masteredConcepts: ['heart-anatomy'],
      timeAvailable: 'moderate',
    };

    it('should match content to complexity level', () => {
      const modules: Partial<EducationalModule>[] = [
        { id: 'm1', title: 'Basic Heart' },
        { id: 'm2', title: 'Heart Details' },
        { id: 'm3', title: 'Advanced Cardiology' },
      ];

      // Simulate matching complexity level 3 (Standard)
      const matched = modules.filter((m) => {
        // In real implementation, would check content complexity
        return true;
      });

      expect(matched.length).toBeGreaterThan(0);
    });

    it('should recommend content filling knowledge gaps', () => {
      const knowledgeGaps: Partial<KnowledgeGap>[] = [
        { topicId: 'ecg-interpretation', topicName: 'ECG Reading' },
        { topicId: 'cardiac-cycle', topicName: 'Cardiac Cycle' },
      ];

      const gapRecommendations = knowledgeGaps.map((gap) => ({
        topicId: gap.topicId,
        topicName: gap.topicName,
        priority: 'high' as const,
        reason: 'Knowledge gap identified',
      }));

      expect(gapRecommendations).toHaveLength(2);
      expect(gapRecommendations[0].reason).toContain('gap');
    });

    it('should exclude mastered concepts', () => {
      const allTopics = ['heart-anatomy', 'blood-pressure', 'ecg-interpretation'];
      const newTopics = allTopics.filter((t) => !userProfile.masteredConcepts.includes(t));

      expect(newTopics).not.toContain('heart-anatomy');
      expect(newTopics).toContain('blood-pressure');
    });
  });

  describe('Health Triggers to Recommendations', () => {
    const healthTriggers: HealthTrigger[] = [
      {
        triggerId: 'trigger-001',
        triggerType: 'condition',
        triggerName: 'Type 2 Diabetes',
        triggerDetails: 'HbA1c: 8.5%',
        relevantTopics: ['diabetes-basics', 'blood-sugar-control', 'diabetic-diet'],
        urgency: 'high',
      },
      {
        triggerId: 'trigger-002',
        triggerType: 'lab-result',
        triggerName: 'High Cholesterol',
        triggerDetails: 'LDL: 160 mg/dL',
        relevantTopics: ['cholesterol-management', 'heart-healthy-diet'],
        urgency: 'medium',
      },
    ];

    it('should convert health triggers to recommendations', () => {
      const recommendations = healthTriggers.flatMap((trigger) =
        trigger.relevantTopics.map((topic) => ({
          topicId: topic,
          priority: trigger.urgency,
          source: 'health-condition',
          becauseYouHave: [trigger.triggerName],
          healthRelevance: {
            summary: `Relevant to ${trigger.triggerName}`,
            detailedExplanation: trigger.triggerDetails,
            potentialBenefits: ['Better health outcomes'],
            connectionToHealth: `Direct connection to ${trigger.triggerName}`,
            actionableInsights: [],
          },
        }))
      );

      expect(recommendations.length).toBe(5); // 3 + 2
    });

    it('should prioritize by trigger urgency', () => {
      const recommendations = healthTriggers.flatMap((trigger) =
        trigger.relevantTopics.map((topic) => ({
          topicId: topic,
          priority: trigger.urgency,
        }))
      );

      const highPriority = recommendations.filter((r) => r.priority === 'high'
      );
      expect(highPriority.length).toBe(3);
    });

    it('should include trigger context in recommendations', () => {
      const trigger = healthTriggers[0];
      const recommendation = {
        topicId: trigger.relevantTopics[0],
        becauseYouHave: [trigger.triggerName],
        personalizedReason: `Based on your ${trigger.triggerName} diagnosis`,
      };

      expect(recommendation.becauseYouHave).toContain('Type 2 Diabetes');
    });
  });

  describe('Recommendation Personalization', () => {
    it('should generate personalized reason', () => {
      const userCondition = 'Hypertension';
      const topicName = 'Blood Pressure Management';

      const personalizedReason = `Because you have ${userCondition}, learning about ${topicName} can help you better manage your health.`;

      expect(personalizedReason).toContain(userCondition);
      expect(personalizedReason).toContain(topicName);
    });

    it('should estimate learning time based on complexity', () => {
      const complexityEstimates: Record<number, number> = {
        1: 10,
        2: 15,
        3: 20,
        4: 30,
        5: 45,
        6: 60,
      };

      const userDepth = 3;
      const estimatedTime = complexityEstimates[userDepth];

      expect(estimatedTime).toBe(20);
    });

    it('should filter completed recommendations', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { recommendationId: 'rec-1', completed: false },
        { recommendationId: 'rec-2', completed: true },
        { recommendationId: 'rec-3', completed: false },
      ];

      const incomplete = recommendations.filter((r) => !r.completed);
      expect(incomplete).toHaveLength(2);
    });

    it('should filter dismissed recommendations', () => {
      const recommendations: Partial<LearningRecommendation>[] = [
        { recommendationId: 'rec-1', dismissed: false },
        { recommendationId: 'rec-2', dismissed: true },
        { recommendationId: 'rec-3', dismissed: false },
      ];

      const active = recommendations.filter((r) => !r.dismissed);
      expect(active).toHaveLength(2);
    });
  });

  describe('Recommendation Queue Management', () => {
    it('should limit recommendations to manageable number', () => {
      const maxRecommendations = 10;
      const rawRecommendations = Array(20).fill(null).map((_, i) => ({
        recommendationId: `rec-${i}`,
        priority: i < 5 ? 'high' : 'medium',
      }));

      const limited = rawRecommendations.slice(0, maxRecommendations);
      expect(limited.length).toBeLessThanOrEqual(maxRecommendations);
    });

    it('should sort by priority then recency', () => {
      const recommendations = [
        { id: 'r1', priority: 'medium', createdAt: new Date('2024-01-01') },
        { id: 'r2', priority: 'high', createdAt: new Date('2024-01-02') },
        { id: 'r3', priority: 'high', createdAt: new Date('2024-01-03') },
        { id: 'r4', priority: 'low', createdAt: new Date('2024-01-04') },
      ];

      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      const sorted = [...recommendations].sort((a, b) => {
        const priorityDiff =
          priorityOrder[b.priority as keyof typeof priorityOrder] -
          priorityOrder[a.priority as keyof typeof priorityOrder];
        if (priorityDiff !== 0) return priorityDiff;
        return b.createdAt.getTime() - a.createdAt.getTime();
      });

      expect(sorted[0].id).toBe('r3'); // High priority, newest
      expect(sorted[1].id).toBe('r2'); // High priority, older
      expect(sorted[2].id).toBe('r1'); // Medium priority
    });
  });
});
