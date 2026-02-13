/**
 * Precise AI Cueing System Store
 *
 * In-memory data store for AI-driven proactive educational content
 * surfacing based on health context and learning patterns.
 */

import type {
  CueTriggerType,
  CuePriority,
  CueFrequency,
  EngagementAction,
  CueTrigger,
  ContextData,
  EducationalCue,
  CueTargetContent,
  EngagementRecord,
  CuePreferences,
  CueTemplate,
  CueAnalytics,
  AICueingState,
} from './types';

/**
 * Cue templates for different trigger types
 */
export const sampleCueTemplates: CueTemplate[] = [
  {
    templateId: 'tpl-symptom-001',
    triggerType: 'symptom-entry',
    priority: 'important',
    titleTemplate: 'Understanding {{symptom}}',
    summaryTemplate:
      "You logged {{symptom}}. Learn about what's happening in your body.",
    contentTemplate:
      "When you experience {{symptom}}, specific physiological processes are occurring. Understanding these can help you communicate better with your healthcare provider and recognize patterns.",
    relevanceTemplate:
      'This is directly relevant because you just reported experiencing {{symptom}}.',
    targetContentType: 'symptom-exploration',
    notificationStyle: 'toast',
    displayDuration: 8000,
    expirationHours: 24,
  },
  {
    templateId: 'tpl-lab-001',
    triggerType: 'lab-view',
    priority: 'suggested',
    titleTemplate: 'Deep Dive: {{labTest}}',
    summaryTemplate: 'Curious about your {{labTest}} results? Explore what this test measures.',
    contentTemplate:
      "The {{labTest}} test measures specific aspects of your body's function. Understanding what this test reveals can help you have more informed conversations with your healthcare team.",
    relevanceTemplate:
      "You're viewing your {{labTest}} results, which is a great opportunity to learn more about what they mean.",
    targetContentType: 'lab-exploration',
    notificationStyle: 'inline',
    expirationHours: 72,
  },
  {
    templateId: 'tpl-biomarker-001',
    triggerType: 'biomarker-change',
    priority: 'important',
    titleTemplate: '{{biomarker}} Change Detected',
    summaryTemplate: 'Your {{biomarker}} has {{direction}}. Learn what this means.',
    contentTemplate:
      "Changes in {{biomarker}} can indicate shifts in your body's function. Understanding the underlying physiology helps you appreciate why monitoring matters.",
    relevanceTemplate:
      'Your {{biomarker}} recently {{direction}}, making this a timely opportunity to understand the science behind this change.',
    targetContentType: 'physiology-pathway',
    notificationStyle: 'banner',
    displayDuration: 10000,
    expirationHours: 48,
  },
  {
    templateId: 'tpl-medication-001',
    triggerType: 'medication-reminder',
    priority: 'nice-to-know',
    titleTemplate: 'How {{medication}} Works',
    summaryTemplate: 'Taking {{medication}}? Understand its mechanism of action.',
    contentTemplate:
      "{{medication}} works through specific pathways in your body. Learning how it functions can help you understand why it's prescribed and what to expect.",
    relevanceTemplate:
      "Since you take {{medication}}, understanding how it works gives you insight into your treatment.",
    targetContentType: 'medication-mechanism',
    notificationStyle: 'badge',
    expirationHours: 168,
  },
  {
    templateId: 'tpl-time-001',
    triggerType: 'time-based',
    priority: 'nice-to-know',
    titleTemplate: 'Daily Learning: {{topic}}',
    summaryTemplate: "Today's suggested topic based on your learning journey.",
    contentTemplate:
      'Based on your learning history and health profile, {{topic}} would be a valuable addition to your knowledge.',
    relevanceTemplate:
      'This topic connects to what you\'ve been learning and your health interests.',
    targetContentType: 'anatomy-structure',
    notificationStyle: 'toast',
    displayDuration: 6000,
    expirationHours: 24,
  },
  {
    templateId: 'tpl-milestone-001',
    triggerType: 'learning-milestone',
    priority: 'suggested',
    titleTemplate: 'Milestone: {{milestone}}',
    summaryTemplate: 'Congratulations! You\'ve reached {{milestone}}. Here\'s what\'s next.',
    contentTemplate:
      "You've made great progress in understanding {{topic}}. The next logical step is exploring {{nextTopic}}, which builds on what you've learned.",
    relevanceTemplate:
      'This recommendation follows naturally from your recent learning achievement.',
    targetContentType: 'physiology-pathway',
    notificationStyle: 'spotlight',
    displayDuration: 12000,
    expirationHours: 72,
  },
  {
    templateId: 'tpl-structure-001',
    triggerType: 'structure-click',
    priority: 'suggested',
    titleTemplate: 'Explore {{structure}}',
    summaryTemplate: 'You selected {{structure}}. Discover its function and clinical significance.',
    contentTemplate:
      'The {{structure}} plays important roles in your body. Understanding its anatomy and function helps you appreciate how your body works as a system.',
    relevanceTemplate:
      'You just clicked on {{structure}}, indicating interest in learning more.',
    targetContentType: 'anatomy-structure',
    notificationStyle: 'inline',
    expirationHours: 4,
  },
];

/**
 * Sample active cues
 */
export const sampleActiveCues: EducationalCue[] = [
  {
    cueId: 'cue-001',
    userId: 'user-default',
    trigger: {
      triggerId: 'trg-001',
      triggerType: 'symptom-entry',
      sourceId: 'symptom-headache',
      sourceName: 'Headache',
      sourceDetails: { severity: 'moderate', location: 'frontal' },
      timestamp: new Date(),
      contextData: {
        currentView: 'symptoms-log',
        recentActivity: ['logged-symptom', 'viewed-history'],
        activeHealthConditions: ['hypertension'],
        recentSymptoms: ['headache', 'fatigue'],
        viewedStructures: [],
        searchHistory: [],
        timeOfDay: 'morning',
        dayOfWeek: 1,
        learningStreak: 5,
      },
    },
    priority: 'important',
    title: 'Understanding Your Headache',
    summary:
      'You logged a headache. Learn about the different types and what might be causing yours.',
    detailedContent:
      'Headaches can originate from various sources: tension in muscles, blood vessel changes, nerve irritation, or referred pain from other structures. Understanding the anatomy involved can help you identify patterns and triggers.',
    relevanceExplanation:
      'This is directly relevant because you just reported experiencing a headache. With your history of hypertension, understanding the relationship between blood pressure and headaches is particularly valuable.',
    targetContent: {
      contentId: 'headache-anatomy',
      contentName: 'Headache Anatomy and Pathophysiology',
      contentType: 'pathophysiology',
      system: 'nervous',
      structureId: 'brain-meninges',
      navigationPath: '/explore/nervous/headache',
      deepLinkParams: { focus: 'pain-pathways', highlight: 'meninges' },
      previewText:
        'The brain itself cannot feel pain - headaches come from surrounding structures...',
    },
    notificationStyle: 'toast',
    displayDuration: 8000,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    createdAt: new Date(),
    status: {
      isActive: true,
      isRead: false,
      isDismissed: false,
      isSnoozed: false,
      isCompleted: false,
    },
    engagement: null,
    tags: ['headache', 'symptom', 'nervous-system', 'hypertension-related'],
  },
  {
    cueId: 'cue-002',
    userId: 'user-default',
    trigger: {
      triggerId: 'trg-002',
      triggerType: 'biomarker-change',
      sourceId: 'biomarker-bp',
      sourceName: 'Blood Pressure',
      sourceDetails: { previous: '142/88', current: '135/82', change: 'decreased' },
      timestamp: new Date(),
      contextData: {
        currentView: 'health-dashboard',
        recentActivity: ['checked-vitals', 'logged-medication'],
        activeHealthConditions: ['hypertension'],
        recentSymptoms: [],
        viewedStructures: ['heart'],
        searchHistory: ['blood pressure'],
        timeOfDay: 'afternoon',
        dayOfWeek: 1,
        learningStreak: 5,
      },
    },
    priority: 'suggested',
    title: 'Your Blood Pressure is Improving!',
    summary:
      'Your blood pressure has decreased. Learn how your cardiovascular system responds to treatment.',
    detailedContent:
      "Your blood pressure has gone from 142/88 to 135/82 - a positive change! This improvement reflects changes in how your heart pumps and your blood vessels respond. Understanding these mechanisms can motivate continued adherence to your treatment plan.",
    relevanceExplanation:
      'Your blood pressure recently decreased, making this a perfect time to understand the physiology behind this positive change.',
    targetContent: {
      contentId: 'bp-regulation',
      contentName: 'Blood Pressure Regulation',
      contentType: 'physiology-pathway',
      system: 'cardiovascular',
      structureId: 'arterioles',
      navigationPath: '/explore/cardiovascular/bp-regulation',
      deepLinkParams: { focus: 'baroreceptors', highlight: 'vasodilation' },
      previewText:
        'Blood pressure is regulated by your heart, blood vessels, kidneys, and nervous system working together...',
    },
    notificationStyle: 'banner',
    displayDuration: 10000,
    expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
    createdAt: new Date(),
    status: {
      isActive: true,
      isRead: false,
      isDismissed: false,
      isSnoozed: false,
      isCompleted: false,
    },
    engagement: null,
    tags: ['blood-pressure', 'improvement', 'cardiovascular', 'positive-change'],
  },
];

/**
 * Default cue preferences
 */
export const defaultCuePreferences: CuePreferences = {
  userId: 'user-default',
  globalFrequency: 'often',
  frequencyByTrigger: new Map<CueTriggerType, CueFrequency>([
    ['symptom-entry', 'always'],
    ['lab-view', 'often'],
    ['biomarker-change', 'always'],
    ['medication-reminder', 'sometimes'],
    ['time-based', 'sometimes'],
    ['learning-milestone', 'always'],
    ['health-anniversary', 'often'],
    ['structure-click', 'often'],
    ['search-query', 'sometimes'],
    ['idle-prompt', 'rarely'],
  ]),
  frequencyByPriority: new Map<CuePriority, CueFrequency>([
    ['urgent', 'always'],
    ['important', 'always'],
    ['suggested', 'often'],
    ['nice-to-know', 'sometimes'],
  ]),
  preferredNotificationStyle: 'toast',
  quietHours: {
    enabled: true,
    startTime: '22:00',
    endTime: '07:00',
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    allowUrgent: true,
  },
  maxCuesPerDay: 10,
  maxCuesPerSession: 3,
  enableSounds: false,
  enableVibration: false,
  groupSimilarCues: true,
};

/**
 * Generate a unique ID
 */
function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Get initial AI cueing state
 */
export function getInitialAICueingState(): AICueingState {
  const activeCues = new Map<string, EducationalCue>();
  sampleActiveCues.forEach((c) => activeCues.set(c.cueId, c));

  const templates = new Map<string, CueTemplate>();
  sampleCueTemplates.forEach((t) => templates.set(t.templateId, t));

  return {
    activeCues,
    cueHistory: new Map(),
    templates,
    preferences: { ...defaultCuePreferences },
    analytics: {
      totalCuesGenerated: 0,
      totalCuesViewed: 0,
      totalCuesClicked: 0,
      totalCuesDismissed: 0,
      averageEngagementRate: 0,
      clickThroughRate: 0,
      completionRate: 0,
      byTriggerType: new Map(),
      byPriority: new Map(),
      topPerformingCues: [],
      leastEngagedCues: [],
    },
    currentContext: null,
    isLoaded: true,
  };
}

/**
 * Generate a cue from a template
 */
export function generateCueFromTemplate(
  template: CueTemplate,
  trigger: CueTrigger,
  variables: Record<string, string>,
  targetContent: CueTargetContent
): EducationalCue {
  const replaceVars = (text: string): string => {
    let result = text;
    for (const [key, value] of Object.entries(variables)) {
      result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
    return result;
  };

  const now = new Date();
  const expiresAt = template.expirationHours
    ? new Date(now.getTime() + template.expirationHours * 60 * 60 * 1000)
    : undefined;

  return {
    cueId: generateId('cue'),
    userId: 'user-default',
    trigger,
    priority: template.priority,
    title: replaceVars(template.titleTemplate),
    summary: replaceVars(template.summaryTemplate),
    detailedContent: replaceVars(template.contentTemplate),
    relevanceExplanation: replaceVars(template.relevanceTemplate),
    targetContent,
    notificationStyle: template.notificationStyle,
    displayDuration: template.displayDuration,
    expiresAt,
    createdAt: now,
    status: {
      isActive: true,
      isRead: false,
      isDismissed: false,
      isSnoozed: false,
      isCompleted: false,
    },
    engagement: null,
    tags: [],
  };
}

/**
 * Check if cue should be shown based on preferences
 */
export function shouldShowCue(
  cue: EducationalCue,
  preferences: CuePreferences,
  currentCueCount: number
): boolean {
  // Check max cues per session
  if (currentCueCount >= preferences.maxCuesPerSession) {
    return false;
  }

  // Check frequency by priority
  const priorityFreq = preferences.frequencyByPriority.get(cue.priority);
  if (priorityFreq === 'never') {
    return false;
  }

  // Check frequency by trigger
  const triggerFreq = preferences.frequencyByTrigger.get(cue.trigger.triggerType);
  if (triggerFreq === 'never') {
    return false;
  }

  // Check quiet hours
  if (preferences.quietHours?.enabled) {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    if (
      currentTime >= preferences.quietHours.startTime ||
      currentTime < preferences.quietHours.endTime
    ) {
      if (!preferences.quietHours.allowUrgent || cue.priority !== 'urgent') {
        return false;
      }
    }
  }

  return true;
}

/**
 * Record cue engagement
 */
export function recordCueEngagement(
  cue: EducationalCue,
  action: EngagementAction,
  durationMs?: number
): void {
  if (!cue.engagement) {
    cue.engagement = {
      cueId: cue.cueId,
      actions: [],
      totalViewTime: 0,
      clickThroughToContent: false,
      completedLearning: false,
    };
  }

  const record: EngagementRecord = {
    action,
    timestamp: new Date(),
    durationMs,
  };

  cue.engagement.actions.push(record);

  // Update status based on action
  switch (action) {
    case 'viewed':
      cue.status.isRead = true;
      if (durationMs) {
        cue.engagement.totalViewTime += durationMs;
      }
      break;
    case 'clicked':
      cue.engagement.clickThroughToContent = true;
      break;
    case 'dismissed':
      cue.status.isDismissed = true;
      cue.status.isActive = false;
      break;
    case 'snoozed':
      cue.status.isSnoozed = true;
      cue.status.snoozeUntil = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
      break;
    case 'completed':
      cue.status.isCompleted = true;
      cue.status.isActive = false;
      cue.engagement.completedLearning = true;
      break;
  }
}

/**
 * Get active cues by priority
 */
export function getActiveCuesByPriority(
  cues: Map<string, EducationalCue>,
  priority: CuePriority
): EducationalCue[] {
  return Array.from(cues.values()).filter(
    (c) => c.status.isActive && c.priority === priority
  );
}

/**
 * Get active cues by trigger type
 */
export function getActiveCuesByTrigger(
  cues: Map<string, EducationalCue>,
  triggerType: CueTriggerType
): EducationalCue[] {
  return Array.from(cues.values()).filter(
    (c) => c.status.isActive && c.trigger.triggerType === triggerType
  );
}

/**
 * Dismiss a cue
 */
export function dismissCue(cues: Map<string, EducationalCue>, cueId: string): void {
  const cue = cues.get(cueId);
  if (cue) {
    recordCueEngagement(cue, 'dismissed');
  }
}

/**
 * Snooze a cue
 */
export function snoozeCue(
  cues: Map<string, EducationalCue>,
  cueId: string,
  snoozeMinutes: number = 60
): void {
  const cue = cues.get(cueId);
  if (cue) {
    cue.status.isSnoozed = true;
    cue.status.snoozeUntil = new Date(Date.now() + snoozeMinutes * 60 * 1000);
    recordCueEngagement(cue, 'snoozed');
  }
}

/**
 * Mark cue as completed
 */
export function completeCue(cues: Map<string, EducationalCue>, cueId: string): void {
  const cue = cues.get(cueId);
  if (cue) {
    recordCueEngagement(cue, 'completed');
  }
}

/**
 * Get cues ready to show (not snoozed, not expired)
 */
export function getCuesReadyToShow(
  cues: Map<string, EducationalCue>
): EducationalCue[] {
  const now = new Date();

  return Array.from(cues.values()).filter((c) => {
    if (!c.status.isActive) return false;
    if (c.status.isDismissed) return false;
    if (c.status.isCompleted) return false;

    // Check snooze
    if (c.status.isSnoozed && c.status.snoozeUntil) {
      if (c.status.snoozeUntil > now) return false;
      // Snooze expired, reset
      c.status.isSnoozed = false;
    }

    // Check expiration
    if (c.expiresAt && c.expiresAt < now) {
      c.status.isActive = false;
      return false;
    }

    return true;
  });
}

/**
 * Update cue analytics
 */
export function updateAnalytics(
  analytics: CueAnalytics,
  cue: EducationalCue
): void {
  analytics.totalCuesGenerated++;

  if (cue.status.isRead) analytics.totalCuesViewed++;
  if (cue.engagement?.clickThroughToContent) analytics.totalCuesClicked++;
  if (cue.status.isDismissed) analytics.totalCuesDismissed++;

  // Recalculate rates
  if (analytics.totalCuesGenerated > 0) {
    analytics.averageEngagementRate =
      analytics.totalCuesViewed / analytics.totalCuesGenerated;
    analytics.clickThroughRate =
      analytics.totalCuesClicked / analytics.totalCuesGenerated;
    analytics.completionRate =
      (analytics.totalCuesViewed - analytics.totalCuesDismissed) /
      analytics.totalCuesGenerated;
  }
}

/**
 * Create a trigger from symptom entry
 */
export function createSymptomTrigger(
  symptomId: string,
  symptomName: string,
  details: Record<string, unknown>,
  context: ContextData
): CueTrigger {
  return {
    triggerId: generateId('trg'),
    triggerType: 'symptom-entry',
    sourceId: symptomId,
    sourceName: symptomName,
    sourceDetails: details,
    timestamp: new Date(),
    contextData: context,
  };
}

/**
 * Create a trigger from lab view
 */
export function createLabViewTrigger(
  labTestId: string,
  labTestName: string,
  results: Record<string, unknown>,
  context: ContextData
): CueTrigger {
  return {
    triggerId: generateId('trg'),
    triggerType: 'lab-view',
    sourceId: labTestId,
    sourceName: labTestName,
    sourceDetails: results,
    timestamp: new Date(),
    contextData: context,
  };
}

/**
 * Create a trigger from biomarker change
 */
export function createBiomarkerTrigger(
  biomarkerId: string,
  biomarkerName: string,
  change: { previous: string; current: string; direction: string },
  context: ContextData
): CueTrigger {
  return {
    triggerId: generateId('trg'),
    triggerType: 'biomarker-change',
    sourceId: biomarkerId,
    sourceName: biomarkerName,
    sourceDetails: change,
    timestamp: new Date(),
    contextData: context,
  };
}

/**
 * Get template for trigger type
 */
export function getTemplateForTrigger(
  templates: Map<string, CueTemplate>,
  triggerType: CueTriggerType
): CueTemplate | undefined {
  return Array.from(templates.values()).find((t) => t.triggerType === triggerType);
}
