/**
 * Domain Rules - Rule-Based Intent Prediction Fallback
 *
 * Provides rule-based predictions when LLM is unavailable.
 * Uses health domain knowledge to make reasonable predictions.
 */

import type {
  ActionEvent,
  InferredIntent,
  PredictedAction,
  SuggestedShortcut,
  QuickAction,
  PreloadContent,
  PredictionHealthProfile,
  PredictionCurrentContext,
  FeatureArea,
} from './types.js';

// ============================================
// Domain Knowledge Patterns
// ============================================

/**
 * Common navigation patterns in health education
 */
const NAVIGATION_PATTERNS: Record<string, string[]> = {
  // Symptom exploration flow
  'symptom-explorer:select-symptom': ['anatomy-3d', 'chat', 'condition-simulator'],
  'symptom-explorer:view-source': ['anatomy-3d', 'encyclopedia'],
  'symptom-explorer:answer-followup': ['chat', 'anatomy-3d'],

  // Medication exploration flow
  'medication-explorer:select-medication': ['medication-explorer:view-mechanism', 'medication-explorer:view-system-effects'],
  'medication-explorer:view-mechanism': ['anatomy-3d', 'medication-explorer:view-adverse-effects'],
  'medication-explorer:view-system-effects': ['anatomy-3d', 'condition-simulator'],
  'medication-explorer:check-interaction': ['chat', 'medication-explorer'],

  // Condition exploration flow
  'condition-simulator:select-condition': ['condition-simulator:scrub-timeline', 'condition-simulator:view-symptoms'],
  'condition-simulator:scrub-timeline': ['condition-simulator:view-phase', 'anatomy-3d'],
  'condition-simulator:view-treatments': ['medication-explorer', 'chat'],

  // Encyclopedia flow
  'encyclopedia:view-entry': ['encyclopedia-entry:view-content', 'anatomy-3d'],
  'encyclopedia-entry:view-anatomy-link': ['anatomy-3d', 'encyclopedia-entry'],
  'encyclopedia-entry:view-related-entry': ['encyclopedia-entry', 'encyclopedia'],

  // Dashboard flow
  'dashboard:click-quick-access': ['symptom-explorer', 'medication-explorer', 'condition-simulator', 'encyclopedia'],
  'dashboard:click-card': ['timeline', 'lab-values', 'health-markers'],

  // Anatomy flow
  'anatomy-3d:select-structure': ['anatomy-3d:open-info-panel', 'anatomy-3d:ask-ai'],
  'anatomy-3d:ask-ai': ['chat', 'encyclopedia'],
};

/**
 * Shortcut suggestions based on feature area
 */
const SHORTCUT_SUGGESTIONS: Record<FeatureArea, SuggestedShortcut[]> = {
  'symptom-explorer': [
    {
      id: 'view-anatomy',
      label: 'View Anatomy',
      description: 'See 3D anatomy for this symptom',
      targetView: 'anatomy-3d',
      iconType: 'anatomy',
      priority: 1,
    },
    {
      id: 'ask-ai',
      label: 'Ask AI',
      description: 'Get more information from AI',
      targetView: 'chat',
      iconType: 'chat',
      priority: 2,
    },
  ],
  'medication-explorer': [
    {
      id: 'view-conditions',
      label: 'Conditions',
      description: 'See conditions this treats',
      targetView: 'condition-simulator',
      iconType: 'condition',
      priority: 1,
    },
    {
      id: 'check-interactions',
      label: 'Interactions',
      description: 'Check drug interactions',
      targetView: 'medication-explorer',
      iconType: 'medication',
      priority: 2,
    },
  ],
  'condition-simulator': [
    {
      id: 'view-treatments',
      label: 'Treatments',
      description: 'See treatment options',
      targetView: 'condition-simulator',
      iconType: 'medication',
      priority: 1,
    },
    {
      id: 'view-anatomy',
      label: 'Anatomy',
      description: 'See affected anatomy',
      targetView: 'anatomy-3d',
      iconType: 'anatomy',
      priority: 2,
    },
  ],
  'encyclopedia': [
    {
      id: 'browse-conditions',
      label: 'Conditions',
      description: 'Browse conditions',
      targetView: 'encyclopedia',
      iconType: 'condition',
      priority: 1,
    },
    {
      id: 'browse-anatomy',
      label: 'Anatomy',
      description: 'Browse anatomy topics',
      targetView: 'encyclopedia',
      iconType: 'anatomy',
      priority: 2,
    },
  ],
  'encyclopedia-entry': [
    {
      id: 'related-entries',
      label: 'Related',
      description: 'See related entries',
      targetView: 'encyclopedia-entry',
      iconType: 'encyclopedia',
      priority: 1,
    },
    {
      id: 'view-anatomy',
      label: '3D View',
      description: 'See in 3D anatomy',
      targetView: 'anatomy-3d',
      iconType: 'anatomy',
      priority: 2,
    },
  ],
  'anatomy-3d': [
    {
      id: 'learn-more',
      label: 'Learn More',
      description: 'Read about this structure',
      targetView: 'encyclopedia',
      iconType: 'encyclopedia',
      priority: 1,
    },
    {
      id: 'ask-ai',
      label: 'Ask AI',
      description: 'Ask AI about this',
      targetView: 'chat',
      iconType: 'chat',
      priority: 2,
    },
  ],
  'chat': [
    {
      id: 'explore-anatomy',
      label: 'Anatomy',
      description: 'Explore in 3D',
      targetView: 'anatomy-3d',
      iconType: 'anatomy',
      priority: 1,
    },
    {
      id: 'encyclopedia',
      label: 'Encyclopedia',
      description: 'Read more',
      targetView: 'encyclopedia',
      iconType: 'encyclopedia',
      priority: 2,
    },
  ],
  'dashboard': [
    {
      id: 'explore-symptoms',
      label: 'Symptoms',
      description: 'Explore symptoms',
      targetView: 'symptom-explorer',
      iconType: 'symptom',
      priority: 1,
    },
    {
      id: 'medications',
      label: 'Medications',
      description: 'View your medications',
      targetView: 'medication-explorer',
      iconType: 'medication',
      priority: 2,
    },
  ],
  'navigation': [],
  'lab-values': [
    {
      id: 'view-trend',
      label: 'Trends',
      description: 'See lab trends',
      targetView: 'lab-values',
      iconType: 'lab',
      priority: 1,
    },
  ],
  'health-markers': [
    {
      id: 'view-vitals',
      label: 'Vitals',
      description: 'View vital signs',
      targetView: 'health-markers',
      iconType: 'health',
      priority: 1,
    },
  ],
  'timeline': [
    {
      id: 'filter-labs',
      label: 'Labs',
      description: 'Filter to lab events',
      targetView: 'timeline',
      iconType: 'lab',
      priority: 1,
    },
  ],
  'body-map': [
    {
      id: 'log-symptom',
      label: 'Log Symptom',
      description: 'Log a new symptom',
      targetView: 'body-map',
      iconType: 'symptom',
      priority: 1,
    },
  ],
};

// ============================================
// Fallback Prediction
// ============================================

/**
 * Get rule-based prediction when LLM is unavailable
 */
export function getDomainFallbackPrediction(
  actions: ActionEvent[],
  healthProfile: PredictionHealthProfile,
  currentContext: PredictionCurrentContext
): InferredIntent {
  const lastAction = actions[actions.length - 1];
  const currentFeature = currentContext.view as FeatureArea;

  // Determine primary intent from action pattern
  const primaryIntent = inferIntentFromActions(actions);

  // Get predicted next actions
  const predictedActions = getPredictedActions(lastAction, currentFeature);

  // Get suggested shortcuts
  const shortcuts = getSuggestedShortcuts(currentFeature, healthProfile, currentContext);

  // Get quick actions
  const quickActions = getQuickActions(currentFeature, currentContext);

  // Get content to preload
  const preloadContent = getPreloadContent(predictedActions);

  return {
    primaryIntent,
    confidence: 0.6, // Lower confidence for rule-based
    relatedTopics: getRelatedTopics(actions, healthProfile),
    predictedNextActions: predictedActions,
    suggestedShortcuts: shortcuts,
    recommendedPanels: getRecommendedPanels(currentFeature),
    contentToPreload: preloadContent,
    quickActions,
  };
}

/**
 * Infer intent from action sequence
 */
function inferIntentFromActions(actions: ActionEvent[]): string {
  if (actions.length === 0) return 'Exploring health information';

  const featureAreas = actions.map(a => a.featureArea);
  const lastAction = actions[actions.length - 1];

  // Check for symptom investigation pattern
  if (featureAreas.includes('symptom-explorer')) {
    return 'Investigating symptoms and their anatomical sources';
  }

  // Check for medication learning pattern
  if (featureAreas.includes('medication-explorer')) {
    return 'Learning about medication mechanisms and effects';
  }

  // Check for condition exploration pattern
  if (featureAreas.includes('condition-simulator')) {
    return 'Understanding condition progression and treatments';
  }

  // Check for encyclopedia research pattern
  if (featureAreas.includes('encyclopedia') || featureAreas.includes('encyclopedia-entry')) {
    return 'Researching health topics in the encyclopedia';
  }

  // Check for anatomy exploration pattern
  if (featureAreas.includes('anatomy-3d')) {
    return 'Exploring 3D anatomy';
  }

  // Default
  return `Exploring ${lastAction.featureArea.replace('-', ' ')}`;
}

/**
 * Get predicted next actions based on patterns
 */
function getPredictedActions(
  lastAction: ActionEvent | undefined,
  _currentFeature: FeatureArea
): PredictedAction[] {
  if (!lastAction) {
    return [{
      featureArea: 'dashboard',
      actionType: 'click-quick-access',
      probability: 0.7,
      reasoning: 'User typically starts from dashboard',
    }];
  }

  const key = `${lastAction.featureArea}:${lastAction.actionType}`;
  const nextFeatures = NAVIGATION_PATTERNS[key] || [];

  return nextFeatures.slice(0, 3).map((feature, index) => {
    const [featureArea, actionType] = feature.includes(':')
      ? feature.split(':')
      : [feature, 'view-change'];

    return {
      featureArea: featureArea as FeatureArea,
      actionType: actionType as PredictedAction['actionType'],
      probability: 0.8 - (index * 0.15),
      reasoning: `Common navigation from ${lastAction.featureArea}`,
    };
  });
}

/**
 * Get suggested shortcuts based on context
 */
function getSuggestedShortcuts(
  currentFeature: FeatureArea,
  healthProfile: PredictionHealthProfile,
  _context: PredictionCurrentContext
): SuggestedShortcut[] {
  const baseShortcuts = SHORTCUT_SUGGESTIONS[currentFeature] || [];

  // Add personalized shortcuts based on health profile
  const personalizedShortcuts: SuggestedShortcut[] = [];

  if (healthProfile.conditions.length > 0) {
    personalizedShortcuts.push({
      id: 'my-conditions',
      label: 'My Conditions',
      description: `View ${healthProfile.conditions[0].name}`,
      targetView: 'condition-simulator',
      targetEntityId: healthProfile.conditions[0].id,
      targetEntityName: healthProfile.conditions[0].name,
      iconType: 'condition',
      priority: 3,
    });
  }

  if (healthProfile.medications.length > 0) {
    personalizedShortcuts.push({
      id: 'my-medications',
      label: 'My Meds',
      description: `View ${healthProfile.medications[0].name}`,
      targetView: 'medication-explorer',
      targetEntityId: healthProfile.medications[0].id,
      targetEntityName: healthProfile.medications[0].name,
      iconType: 'medication',
      priority: 4,
    });
  }

  return [...baseShortcuts, ...personalizedShortcuts].slice(0, 5);
}

/**
 * Get quick actions for current context
 */
function getQuickActions(
  _currentFeature: FeatureArea,
  context: PredictionCurrentContext
): QuickAction[] {
  const actions: QuickAction[] = [];

  // Always include chat action
  actions.push({
    id: 'ask-ai',
    label: 'Ask AI',
    description: 'Ask AI about this',
    iconType: 'chat',
    contextual: true,
    targetView: 'chat',
  });

  // Feature-specific actions
  if (context.selectedEntity) {
    actions.push({
      id: 'learn-more',
      label: `Learn about ${context.selectedEntity.name}`,
      iconType: 'encyclopedia',
      contextual: true,
      targetView: 'encyclopedia',
      targetEntityId: context.selectedEntity.id,
    });
  }

  return actions.slice(0, 3);
}

/**
 * Get content to preload based on predictions
 */
function getPreloadContent(predictions: PredictedAction[]): PreloadContent[] {
  return predictions.slice(0, 2).map(p => ({
    type: 'component' as const,
    identifier: p.featureArea,
    priority: 'high' as const,
  }));
}

/**
 * Get related topics from actions and health profile
 */
function getRelatedTopics(
  actions: ActionEvent[],
  healthProfile: PredictionHealthProfile
): string[] {
  const topics = new Set<string>();

  // Extract from actions
  actions.forEach(action => {
    if (action.payload.entityName) topics.add(action.payload.entityName);
    if (action.payload.structureName) topics.add(action.payload.structureName);
  });

  // Extract from health profile
  healthProfile.conditions.forEach(c => topics.add(c.name));
  healthProfile.medications.forEach(m => topics.add(m.name));

  return Array.from(topics).slice(0, 5);
}

/**
 * Get recommended panels for feature
 */
function getRecommendedPanels(feature: FeatureArea): string[] {
  const panelMap: Record<FeatureArea, string[]> = {
    'symptom-explorer': ['anatomy-sources', 'followup-chat'],
    'medication-explorer': ['mechanism-panel', 'effects-panel'],
    'condition-simulator': ['timeline-panel', 'treatment-panel'],
    'anatomy-3d': ['info-panel', 'layer-controls'],
    'encyclopedia': ['search-panel', 'category-panel'],
    'encyclopedia-entry': ['content-panel', 'related-panel'],
    'dashboard': ['vitals-panel', 'insights-panel'],
    'navigation': [],
    'lab-values': ['trend-panel', 'details-panel'],
    'health-markers': ['chart-panel', 'goals-panel'],
    'chat': ['suggestions-panel'],
    'timeline': ['filters-panel', 'details-panel'],
    'body-map': ['symptom-form', 'history-panel'],
  };

  return panelMap[feature] || [];
}

// ============================================
// Domain Rule Enhancement
// ============================================

/**
 * Apply domain rules to enhance/validate LLM predictions
 */
export function applyDomainRules(
  intent: InferredIntent,
  actions: ActionEvent[],
  healthProfile: PredictionHealthProfile
): InferredIntent {
  // Boost predictions that match known patterns
  const lastAction = actions[actions.length - 1];
  if (lastAction) {
    const key = `${lastAction.featureArea}:${lastAction.actionType}`;
    const expectedNexts = NAVIGATION_PATTERNS[key] || [];

    intent.predictedNextActions = intent.predictedNextActions.map(pred => {
      if (expectedNexts.some(e => e.startsWith(pred.featureArea))) {
        return { ...pred, probability: Math.min(pred.probability + 0.1, 1.0) };
      }
      return pred;
    });
  }

  // Add personalized shortcuts if missing
  const hasConditionShortcut = intent.suggestedShortcuts.some(s => s.iconType === 'condition');
  if (!hasConditionShortcut && healthProfile.conditions.length > 0) {
    intent.suggestedShortcuts.push({
      id: 'my-condition',
      label: healthProfile.conditions[0].name,
      description: 'View your condition',
      targetView: 'condition-simulator',
      targetEntityId: healthProfile.conditions[0].id,
      targetEntityName: healthProfile.conditions[0].name,
      iconType: 'condition',
      priority: 5,
    });
  }

  // Ensure confidence is reasonable
  intent.confidence = Math.max(0.3, Math.min(0.95, intent.confidence));

  return intent;
}
