/**
 * AI Learning Recommendations Store
 *
 * In-memory data store for AI-driven learning suggestions based on
 * health data, learning history, and knowledge gaps.
 */

import type {
  RecommendationPriority,
  RecommendationSource,
  KnowledgeGap,
  HealthTrigger,
  LearningRecommendation,
  LearningDigest,
  DigestSummary,
  LearningPreferences,
  RecommendationEngineConfig,
  TopicConditionMapping,
  AIRecommendationsState,
} from './types';
import type { LearningBodySystem, LearningContentType } from '../learning-progress/types';

/**
 * Topic-condition mappings for personalized recommendations
 */
export const sampleTopicMappings: TopicConditionMapping[] = [
  {
    mappingId: 'map-001',
    conditionId: 'hypertension',
    conditionName: 'Hypertension',
    relevantTopics: [
      {
        topicId: 'cardiovascular-anatomy',
        topicName: 'Heart and Blood Vessel Anatomy',
        relevanceScore: 0.95,
        whyRelevant:
          'Understanding how blood pressure is generated and maintained helps you recognize why hypertension affects your cardiovascular system.',
        priority: 'high',
      },
      {
        topicId: 'kidney-blood-pressure',
        topicName: 'Kidney Role in Blood Pressure',
        relevanceScore: 0.9,
        whyRelevant:
          'The kidneys regulate blood volume and produce hormones that control blood pressure. Understanding this helps explain why kidney health matters for hypertension.',
        priority: 'high',
      },
      {
        topicId: 'raas-system',
        topicName: 'Renin-Angiotensin-Aldosterone System',
        relevanceScore: 0.88,
        whyRelevant:
          'Many blood pressure medications target this system. Understanding it helps you know how your medications work.',
        priority: 'medium',
      },
      {
        topicId: 'heart-failure-progression',
        topicName: 'How Hypertension Leads to Heart Failure',
        relevanceScore: 0.85,
        whyRelevant:
          'Uncontrolled hypertension can cause heart muscle thickening and eventual failure. Learning this emphasizes why control is important.',
        priority: 'medium',
      },
    ],
    learningPath: [
      'cardiovascular-anatomy',
      'kidney-blood-pressure',
      'raas-system',
      'heart-failure-progression',
    ],
  },
  {
    mappingId: 'map-002',
    conditionId: 'diabetes-type2',
    conditionName: 'Type 2 Diabetes',
    relevantTopics: [
      {
        topicId: 'pancreas-insulin',
        topicName: 'Pancreas and Insulin Production',
        relevanceScore: 0.95,
        whyRelevant:
          'Understanding how your pancreas produces insulin and what happens when it doesn\'t work properly is fundamental to managing diabetes.',
        priority: 'critical',
      },
      {
        topicId: 'glucose-metabolism',
        topicName: 'How Your Body Uses Glucose',
        relevanceScore: 0.92,
        whyRelevant:
          'Learning how cells use glucose for energy helps you understand why blood sugar control matters for every organ.',
        priority: 'high',
      },
      {
        topicId: 'diabetic-complications',
        topicName: 'How Diabetes Affects Blood Vessels and Nerves',
        relevanceScore: 0.88,
        whyRelevant:
          'High blood sugar damages blood vessels and nerves over time. Understanding this motivates preventive care.',
        priority: 'high',
      },
      {
        topicId: 'kidney-diabetes',
        topicName: 'Kidney Function and Diabetes',
        relevanceScore: 0.85,
        whyRelevant:
          'The kidneys are particularly vulnerable to diabetes damage. Learning about nephron function helps you protect your kidneys.',
        priority: 'medium',
      },
    ],
    learningPath: [
      'pancreas-insulin',
      'glucose-metabolism',
      'diabetic-complications',
      'kidney-diabetes',
    ],
  },
  {
    mappingId: 'map-003',
    conditionId: 'asthma',
    conditionName: 'Asthma',
    relevantTopics: [
      {
        topicId: 'respiratory-anatomy',
        topicName: 'Airways and Lung Structure',
        relevanceScore: 0.95,
        whyRelevant:
          'Knowing the anatomy of your airways helps you understand where asthma affects your breathing and why certain symptoms occur.',
        priority: 'high',
      },
      {
        topicId: 'bronchial-inflammation',
        topicName: 'Airway Inflammation and Bronchospasm',
        relevanceScore: 0.92,
        whyRelevant:
          'Asthma involves inflammation and muscle tightening in your airways. Understanding this explains how your medications work.',
        priority: 'high',
      },
      {
        topicId: 'immune-triggers',
        topicName: 'Immune System and Asthma Triggers',
        relevanceScore: 0.85,
        whyRelevant:
          'Your immune system plays a key role in asthma. Learning about allergic responses helps identify and avoid triggers.',
        priority: 'medium',
      },
    ],
    learningPath: ['respiratory-anatomy', 'bronchial-inflammation', 'immune-triggers'],
  },
  {
    mappingId: 'map-004',
    conditionId: 'hypothyroidism',
    conditionName: 'Hypothyroidism',
    relevantTopics: [
      {
        topicId: 'thyroid-function',
        topicName: 'Thyroid Gland Function',
        relevanceScore: 0.95,
        whyRelevant:
          'Understanding how your thyroid produces hormones helps you grasp why replacement medication is necessary.',
        priority: 'critical',
      },
      {
        topicId: 'thyroid-metabolism',
        topicName: 'Thyroid Hormones and Metabolism',
        relevanceScore: 0.9,
        whyRelevant:
          'Thyroid hormones regulate metabolism throughout your body. This explains why hypothyroidism causes fatigue, weight gain, and cold intolerance.',
        priority: 'high',
      },
      {
        topicId: 'tsh-feedback',
        topicName: 'TSH and Feedback Regulation',
        relevanceScore: 0.85,
        whyRelevant:
          'Understanding the TSH feedback loop helps you interpret your lab results and medication adjustments.',
        priority: 'medium',
      },
    ],
    learningPath: ['thyroid-function', 'thyroid-metabolism', 'tsh-feedback'],
  },
];

/**
 * Sample health triggers
 */
export const sampleHealthTriggers: HealthTrigger[] = [
  {
    triggerId: 'trigger-001',
    triggerType: 'condition',
    triggerName: 'Hypertension',
    triggerDetails: 'Diagnosed with high blood pressure',
    relevantTopics: [
      'cardiovascular-anatomy',
      'kidney-blood-pressure',
      'raas-system',
    ],
    urgency: 'high',
  },
  {
    triggerId: 'trigger-002',
    triggerType: 'symptom',
    triggerName: 'Chest Pain',
    triggerDetails: 'Reported chest discomfort',
    relevantTopics: ['cardiac-pain-referral', 'coronary-circulation', 'angina'],
    urgency: 'critical',
  },
  {
    triggerId: 'trigger-003',
    triggerType: 'medication',
    triggerName: 'Metformin',
    triggerDetails: 'Taking metformin for blood sugar control',
    relevantTopics: ['glucose-metabolism', 'pancreas-insulin', 'metformin-mechanism'],
    urgency: 'medium',
  },
  {
    triggerId: 'trigger-004',
    triggerType: 'lab-result',
    triggerName: 'Elevated HbA1c',
    triggerDetails: 'HbA1c above target range',
    relevantTopics: ['hemoglobin-glycation', 'diabetes-complications', 'glucose-metabolism'],
    urgency: 'high',
  },
];

/**
 * Sample AI-generated recommendations
 */
export const sampleRecommendations: LearningRecommendation[] = [
  {
    recommendationId: 'rec-001',
    userId: 'user-default',
    topicId: 'cardiovascular-anatomy',
    topicName: 'Heart and Blood Vessel Anatomy',
    system: 'cardiovascular',
    contentType: 'anatomy-structure',
    priority: 'high',
    source: 'health-condition',
    personalizedReason:
      'Because you have hypertension, understanding how your heart and blood vessels work will help you see why blood pressure control is so important.',
    becauseYouHave: ['Hypertension'],
    learningObjectives: [
      'Identify the four chambers of the heart',
      'Trace blood flow through the cardiovascular system',
      'Understand how blood pressure is generated',
      'Recognize which organs are most affected by high blood pressure',
    ],
    estimatedTime: 15,
    prerequisitesMet: true,
    prerequisites: [],
    relatedTopics: ['kidney-blood-pressure', 'raas-system'],
    healthRelevance: {
      summary:
        'Your heart pumps blood at high pressure through your arteries. Understanding this system helps you manage your hypertension.',
      detailedExplanation:
        'With hypertension, your heart must work harder to pump blood against increased resistance in your arteries. Over time, this extra work can cause the heart muscle to thicken and eventually weaken. The arteries themselves can become damaged, leading to complications in organs like the brain, kidneys, and eyes.',
      potentialBenefits: [
        'Better understanding of why medications help',
        'Recognition of warning signs',
        'Motivation for lifestyle changes',
        'Improved communication with healthcare providers',
      ],
      connectionToHealth:
        'Your blood pressure readings directly relate to the work your heart does and the condition of your arteries.',
      actionableInsights: [
        'When you feel your pulse, you\'re feeling your heart\'s work',
        'The systolic number reflects when your heart contracts',
        'The diastolic number reflects when your heart relaxes',
      ],
    },
    createdAt: new Date('2024-06-20'),
    dismissed: false,
    completed: false,
  },
  {
    recommendationId: 'rec-002',
    userId: 'user-default',
    topicId: 'pancreas-insulin',
    topicName: 'Pancreas and Insulin Production',
    system: 'endocrine',
    contentType: 'physiology-pathway',
    priority: 'critical',
    source: 'health-condition',
    personalizedReason:
      'Because you have type 2 diabetes, understanding how your pancreas makes insulin is essential for managing your blood sugar.',
    becauseYouHave: ['Type 2 Diabetes'],
    learningObjectives: [
      'Locate the pancreas and understand its dual role',
      'Explain how beta cells produce insulin',
      'Understand insulin resistance and its effects',
      'Connect insulin function to blood sugar control',
    ],
    estimatedTime: 20,
    prerequisitesMet: true,
    prerequisites: [],
    relatedTopics: ['glucose-metabolism', 'diabetic-complications'],
    healthRelevance: {
      summary:
        'Your pancreas produces insulin, the key hormone for controlling blood sugar. In type 2 diabetes, this system doesn\'t work as well.',
      detailedExplanation:
        'In type 2 diabetes, two problems occur: your cells become resistant to insulin\'s effects, and your pancreas may not produce enough insulin to overcome this resistance. Understanding this dual defect helps explain why treatment may involve medications that work in different ways.',
      potentialBenefits: [
        'Understanding why blood sugar fluctuates',
        'Knowing how your medications work',
        'Recognizing the importance of diet timing',
        'Motivation for protecting remaining beta cell function',
      ],
      connectionToHealth:
        'Your HbA1c and daily blood sugar readings reflect how well your pancreas and insulin are working.',
      actionableInsights: [
        'Eating smaller, frequent meals reduces the demand on your pancreas',
        'Exercise improves insulin sensitivity',
        'Some medications help your pancreas produce more insulin',
        'Other medications help your cells respond better to insulin',
      ],
    },
    createdAt: new Date('2024-06-20'),
    dismissed: false,
    completed: false,
  },
  {
    recommendationId: 'rec-003',
    userId: 'user-default',
    topicId: 'kidney-blood-pressure',
    topicName: 'Kidney Role in Blood Pressure',
    system: 'urinary',
    contentType: 'physiology-pathway',
    priority: 'high',
    source: 'knowledge-gap',
    personalizedReason:
      'You\'ve learned about heart anatomy but haven\'t explored how your kidneys regulate blood pressure. This is a key knowledge gap for managing hypertension.',
    becauseYouHave: ['Hypertension', 'Knowledge gap in renal physiology'],
    learningObjectives: [
      'Understand how kidneys filter blood and regulate volume',
      'Explain the renin-angiotensin-aldosterone system',
      'Connect kidney function to blood pressure control',
      'Recognize why kidney-protective medications matter',
    ],
    estimatedTime: 18,
    prerequisitesMet: true,
    prerequisites: ['cardiovascular-anatomy'],
    relatedTopics: ['raas-system', 'nephron-function'],
    healthRelevance: {
      summary:
        'Your kidneys play a crucial role in blood pressure by controlling how much fluid stays in your blood vessels.',
      detailedExplanation:
        'The kidneys regulate blood pressure in two ways: by controlling blood volume (retaining or excreting water and salt) and by producing hormones that constrict or relax blood vessels. Many blood pressure medications work by affecting these kidney functions.',
      potentialBenefits: [
        'Understanding why salt intake matters',
        'Knowing how ACE inhibitors and ARBs work',
        'Recognizing early signs of kidney involvement',
        'Better understanding of fluid retention',
      ],
      connectionToHealth:
        'Your kidney function tests (creatinine, GFR) indicate how well your kidneys are handling blood pressure regulation.',
      actionableInsights: [
        'Reducing salt intake directly reduces kidney workload',
        'Staying hydrated helps your kidneys function optimally',
        'Some medications protect your kidneys while lowering blood pressure',
      ],
    },
    createdAt: new Date('2024-06-21'),
    dismissed: false,
    completed: false,
  },
  {
    recommendationId: 'rec-004',
    userId: 'user-default',
    topicId: 'respiratory-anatomy',
    topicName: 'Airways and Lung Structure',
    system: 'respiratory',
    contentType: 'anatomy-structure',
    priority: 'medium',
    source: 'learning-path',
    personalizedReason:
      'Based on your learning progress, exploring the respiratory system would round out your foundational anatomy knowledge.',
    becauseYouHave: ['Learning path progression'],
    learningObjectives: [
      'Identify major airway structures',
      'Understand how air reaches the alveoli',
      'Recognize the relationship between lungs and heart',
      'Connect structure to breathing function',
    ],
    estimatedTime: 12,
    prerequisitesMet: true,
    prerequisites: [],
    relatedTopics: ['gas-exchange', 'breathing-mechanics'],
    healthRelevance: {
      summary:
        'Understanding lung structure helps you appreciate how breathing brings oxygen to every cell in your body.',
      detailedExplanation:
        'The respiratory system is designed to efficiently bring oxygen into your blood and remove carbon dioxide. The branching airways maximize surface area, and the thin alveolar walls allow rapid gas exchange. This system works closely with your cardiovascular system.',
      potentialBenefits: [
        'Foundation for understanding respiratory conditions',
        'Better appreciation of heart-lung connection',
        'Knowledge for interpreting breathing difficulties',
      ],
      connectionToHealth:
        'Your oxygen saturation readings reflect how well your lungs are transferring oxygen to your blood.',
      actionableInsights: [
        'Deep breathing exercises use more of your lung capacity',
        'Posture affects how well your lungs can expand',
        'Exercise improves lung efficiency over time',
      ],
    },
    createdAt: new Date('2024-06-22'),
    dismissed: false,
    completed: false,
  },
];

/**
 * Default learning preferences
 */
export const defaultLearningPreferences: LearningPreferences = {
  userId: 'user-default',
  pace: 'moderate',
  digestFrequency: 'weekly',
  preferredSystems: [],
  excludedSystems: [],
  dailyTimeBudget: 15,
  weeklyGoal: 3,
  preferredContentTypes: [],
  notificationEnabled: true,
  focusOnHealthRelevant: true,
  includePreventive: true,
  depthPreference: 3,
};

/**
 * Default recommendation engine config
 */
export const defaultEngineConfig: RecommendationEngineConfig = {
  maxRecommendations: 10,
  healthWeightFactor: 2.0,
  gapWeightFactor: 1.5,
  recencyWeightFactor: 1.2,
  includePrerequisites: true,
  respectPaceLimit: true,
  prioritizeUrgent: true,
};

/**
 * Generate a unique ID
 */
function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Get initial AI recommendations state
 */
export function getInitialAIRecommendationsState(): AIRecommendationsState {
  const recommendations = new Map<string, LearningRecommendation>();
  sampleRecommendations.forEach((r) => recommendations.set(r.recommendationId, r));

  const healthTriggers = new Map<string, HealthTrigger>();
  sampleHealthTriggers.forEach((t) => healthTriggers.set(t.triggerId, t));

  const topicMappings = new Map<string, TopicConditionMapping>();
  sampleTopicMappings.forEach((m) => topicMappings.set(m.mappingId, m));

  return {
    recommendations,
    knowledgeGaps: new Map(),
    healthTriggers,
    currentDigest: null,
    preferences: { ...defaultLearningPreferences },
    engineConfig: { ...defaultEngineConfig },
    topicMappings,
    feedback: new Map(),
    lastAnalyzed: null,
    isLoaded: true,
  };
}

/**
 * Generate recommendations based on health profile
 */
export function generateRecommendationsForCondition(
  conditionId: string,
  topicMappings: Map<string, TopicConditionMapping>
): LearningRecommendation[] {
  const mapping = Array.from(topicMappings.values()).find(
    (m) => m.conditionId === conditionId
  );

  if (!mapping) return [];

  return mapping.relevantTopics.map((topic) => ({
    recommendationId: generateId('rec'),
    userId: 'user-default',
    topicId: topic.topicId,
    topicName: topic.topicName,
    system: 'cardiovascular' as LearningBodySystem,
    contentType: 'physiology-pathway' as LearningContentType,
    priority: topic.priority,
    source: 'health-condition' as RecommendationSource,
    personalizedReason: topic.whyRelevant,
    becauseYouHave: [mapping.conditionName],
    learningObjectives: [],
    estimatedTime: 15,
    prerequisitesMet: true,
    prerequisites: [],
    relatedTopics: [],
    healthRelevance: {
      summary: topic.whyRelevant,
      detailedExplanation: topic.whyRelevant,
      potentialBenefits: [],
      connectionToHealth: `Directly relevant to managing ${mapping.conditionName}`,
      actionableInsights: [],
    },
    createdAt: new Date(),
    dismissed: false,
    completed: false,
  }));
}

/**
 * Get top recommendations by priority
 */
export function getTopRecommendations(
  recommendations: Map<string, LearningRecommendation>,
  count: number
): LearningRecommendation[] {
  const priorityOrder: Record<RecommendationPriority, number> = {
    critical: 0,
    high: 1,
    medium: 2,
    low: 3,
  };

  return Array.from(recommendations.values())
    .filter((r) => !r.dismissed && !r.completed)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, count);
}

/**
 * Get recommendations by system
 */
export function getRecommendationsBySystem(
  recommendations: Map<string, LearningRecommendation>,
  system: LearningBodySystem
): LearningRecommendation[] {
  return Array.from(recommendations.values()).filter((r) => r.system === system);
}

/**
 * Get recommendations by source
 */
export function getRecommendationsBySource(
  recommendations: Map<string, LearningRecommendation>,
  source: RecommendationSource
): LearningRecommendation[] {
  return Array.from(recommendations.values()).filter((r) => r.source === source);
}

/**
 * Dismiss a recommendation
 */
export function dismissRecommendation(
  recommendations: Map<string, LearningRecommendation>,
  recommendationId: string
): void {
  const rec = recommendations.get(recommendationId);
  if (rec) {
    rec.dismissed = true;
  }
}

/**
 * Mark recommendation as completed
 */
export function completeRecommendation(
  recommendations: Map<string, LearningRecommendation>,
  recommendationId: string
): void {
  const rec = recommendations.get(recommendationId);
  if (rec) {
    rec.completed = true;
  }
}

/**
 * Generate weekly learning digest
 */
export function generateWeeklyDigest(
  recommendations: Map<string, LearningRecommendation>,
  knowledgeGaps: Map<string, KnowledgeGap>,
  preferences: LearningPreferences
): LearningDigest {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const activeRecs = Array.from(recommendations.values()).filter(
    (r) => !r.dismissed && !r.completed
  );

  const topRecs = getTopRecommendations(recommendations, preferences.weeklyGoal);
  const gaps = Array.from(knowledgeGaps.values());

  const priorityBreakdown = new Map<RecommendationPriority, number>();
  const systemCoverage = new Map<LearningBodySystem, number>();

  activeRecs.forEach((r) => {
    priorityBreakdown.set(r.priority, (priorityBreakdown.get(r.priority) || 0) + 1);
    systemCoverage.set(r.system, (systemCoverage.get(r.system) || 0) + 1);
  });

  const summary: DigestSummary = {
    newRecommendations: activeRecs.length,
    healthTriggeredCount: activeRecs.filter((r) => r.source === 'health-condition').length,
    knowledgeGapCount: gaps.length,
    totalEstimatedTime: activeRecs.reduce((sum, r) => sum + r.estimatedTime, 0),
    priorityBreakdown,
    systemCoverage,
  };

  const motivationalMessages = [
    'Small steps lead to big understanding. Keep learning!',
    'Every topic you explore helps you take better care of your health.',
    'You\'re building valuable knowledge about your body.',
    'Understanding your health is an ongoing journey - you\'re doing great!',
  ];

  return {
    digestId: generateId('digest'),
    userId: 'user-default',
    weekStart,
    weekEnd,
    generatedAt: now,
    summary,
    topRecommendations: topRecs,
    knowledgeGapsIdentified: gaps,
    progressHighlights: [],
    upcomingTopics: topRecs.map((r) => r.topicName),
    motivationalMessage:
      motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)],
  };
}

/**
 * Identify knowledge gaps from learning history
 */
export function identifyKnowledgeGaps(
  completedTopics: Set<string>,
  topicMappings: Map<string, TopicConditionMapping>,
  userConditions: string[]
): KnowledgeGap[] {
  const gaps: KnowledgeGap[] = [];

  for (const conditionId of userConditions) {
    const mapping = Array.from(topicMappings.values()).find(
      (m) => m.conditionId === conditionId
    );

    if (!mapping) continue;

    for (const topic of mapping.relevantTopics) {
      if (!completedTopics.has(topic.topicId)) {
        gaps.push({
          gapId: generateId('gap'),
          topicId: topic.topicId,
          topicName: topic.topicName,
          system: 'cardiovascular',
          contentType: 'physiology-pathway',
          relevanceToHealth: topic.relevanceScore,
          confidenceScore: 0.8,
          prerequisiteTopics: [],
          estimatedLearningTime: 15,
          lastAssessed: new Date(),
        });
      }
    }
  }

  return gaps.sort((a, b) => b.relevanceToHealth - a.relevanceToHealth);
}

/**
 * Update learning preferences
 */
export function updateLearningPreferences(
  state: AIRecommendationsState,
  updates: Partial<LearningPreferences>
): LearningPreferences {
  state.preferences = { ...state.preferences, ...updates };
  return state.preferences;
}

/**
 * Get "Because you have X" suggestions
 */
export function getBecauseYouHaveSuggestions(
  recommendations: Map<string, LearningRecommendation>,
  conditionName: string
): LearningRecommendation[] {
  return Array.from(recommendations.values()).filter((r) =>
    r.becauseYouHave.includes(conditionName)
  );
}

/**
 * Calculate total estimated learning time
 */
export function getTotalEstimatedTime(
  recommendations: Map<string, LearningRecommendation>
): number {
  return Array.from(recommendations.values())
    .filter((r) => !r.dismissed && !r.completed)
    .reduce((sum, r) => sum + r.estimatedTime, 0);
}
