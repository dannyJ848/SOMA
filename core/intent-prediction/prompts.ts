/**
 * Prediction Prompts - Optimized Prompts for Intent Prediction
 *
 * Contains prompt templates and parsing logic for the prediction engine.
 */

import type {
  ActionEvent,
  PredictionRequest,
  InferredIntent,
  PredictedAction,
  SuggestedShortcut,
  QuickAction,
  PreloadContent,
  FeatureArea,
} from './types.js';

// ============================================
// Prompt Templates
// ============================================

export interface PredictionPrompt {
  systemPrompt: string;
  userPrompt: string;
}

/**
 * Build the complete prediction prompt from request data
 */
export function buildPredictionPrompt(request: PredictionRequest): PredictionPrompt {
  const systemPrompt = buildSystemPrompt();
  const userPrompt = buildUserPrompt(request);
  return { systemPrompt, userPrompt };
}

/**
 * Build the system prompt with domain knowledge
 */
function buildSystemPrompt(): string {
  return `You are an intent prediction assistant for a personal health education app called "Biological Self".

Your task is to predict what the user will do next based on their recent actions and health profile.

DOMAIN KNOWLEDGE - Common user journeys:
1. Symptom Investigation: User explores a symptom → views anatomical sources → may check related conditions → may consult AI chat
2. Medication Learning: User selects medication → views mechanism → checks body system effects → may view interactions
3. Condition Exploration: User browses conditions → views timeline progression → explores treatments → may link to medications
4. Cross-Feature Navigation: Users often flow between related features (symptom→condition, medication→condition, condition→anatomy)
5. Educational Deep Dives: Encyclopedia browsing, complexity level changes, following related links

HEALTH PERSONALIZATION:
- Prioritize content related to user's active conditions
- Suggest relevant medication information for their current medications
- Consider recent symptoms when predicting next views

OUTPUT FORMAT:
Respond with a JSON object containing:
{
  "primaryIntent": "Brief description of what user is trying to accomplish",
  "confidence": 0.0-1.0,
  "relatedTopics": ["topic1", "topic2"],
  "predictedNextActions": [
    {
      "featureArea": "feature-name",
      "actionType": "action-type",
      "entityId": "optional-entity-id",
      "entityName": "optional-entity-name",
      "probability": 0.0-1.0,
      "reasoning": "Why this action is predicted"
    }
  ],
  "suggestedShortcuts": [
    {
      "id": "shortcut-id",
      "label": "Button label",
      "description": "What this shortcut does",
      "targetView": "view-name",
      "targetEntityId": "optional-entity-id",
      "targetEntityName": "optional-entity-name",
      "iconType": "symptom|medication|condition|anatomy|lab|chat|encyclopedia|timeline|health",
      "priority": 1-10,
      "reasoning": "Why this shortcut is suggested"
    }
  ],
  "recommendedPanels": ["panel-id-1", "panel-id-2"],
  "contentToPreload": [
    {
      "type": "component|data|image|model",
      "identifier": "identifier",
      "priority": "high|medium|low"
    }
  ],
  "quickActions": [
    {
      "id": "action-id",
      "label": "Action label",
      "description": "What this action does",
      "iconType": "icon-name",
      "contextual": true,
      "targetView": "optional-view",
      "targetEntityId": "optional-entity"
    }
  ]
}

Feature Areas: navigation, dashboard, symptom-explorer, medication-explorer, condition-simulator, encyclopedia, encyclopedia-entry, lab-values, health-markers, anatomy-3d, chat, timeline, body-map

Be concise and focus on the most likely next actions. Limit predictions to top 3-5 most probable.`;
}

/**
 * Build the user prompt with action sequence and context
 */
function buildUserPrompt(request: PredictionRequest): string {
  const lines: string[] = [];

  // Format recent actions
  lines.push('RECENT USER ACTIONS:');
  const recentActions = request.recentActions.slice(-10);
  recentActions.forEach((action, index) => {
    lines.push(`${index + 1}. [${action.featureArea}] ${action.actionType}${formatActionPayload(action)}`);
  });
  lines.push('');

  // Format health profile
  lines.push('USER HEALTH PROFILE:');
  if (request.healthProfile.conditions.length > 0) {
    lines.push(`- Active conditions: ${request.healthProfile.conditions.map(c => c.name).join(', ')}`);
  }
  if (request.healthProfile.medications.length > 0) {
    lines.push(`- Current medications: ${request.healthProfile.medications.map(m => m.name).join(', ')}`);
  }
  if (request.healthProfile.recentSymptoms.length > 0) {
    lines.push(`- Recent symptoms: ${request.healthProfile.recentSymptoms.map(s => s.description).join(', ')}`);
  }
  if (request.healthProfile.abnormalLabs.length > 0) {
    lines.push(`- Abnormal labs: ${request.healthProfile.abnormalLabs.map(l => l.testName).join(', ')}`);
  }
  lines.push('');

  // Format current context
  lines.push('CURRENT CONTEXT:');
  lines.push(`- Current view: ${request.currentContext.view}`);
  if (request.currentContext.selectedEntity) {
    lines.push(`- Selected: ${request.currentContext.selectedEntity.type} - ${request.currentContext.selectedEntity.name}`);
  }
  if (request.currentContext.visiblePanels.length > 0) {
    lines.push(`- Visible panels: ${request.currentContext.visiblePanels.join(', ')}`);
  }
  if (request.currentContext.activeComplexityLevel) {
    lines.push(`- Complexity level: ${request.currentContext.activeComplexityLevel}`);
  }
  lines.push('');

  lines.push('Based on this action sequence, health profile, and context, predict what the user will do next. Return JSON only.');

  return lines.join('\n');
}

/**
 * Format action payload for prompt
 */
function formatActionPayload(action: ActionEvent): string {
  const parts: string[] = [];

  if (action.payload.entityName) {
    parts.push(`entity: "${action.payload.entityName}"`);
  }
  if (action.payload.searchQuery) {
    parts.push(`search: "${action.payload.searchQuery}"`);
  }
  if (action.payload.structureName) {
    parts.push(`structure: "${action.payload.structureName}"`);
  }
  if (action.payload.tabName) {
    parts.push(`tab: "${action.payload.tabName}"`);
  }
  if (action.payload.complexityLevel) {
    parts.push(`complexity: ${action.payload.complexityLevel}`);
  }

  if (parts.length > 0) {
    return ` (${parts.join(', ')})`;
  }
  return '';
}

// ============================================
// Response Parsing
// ============================================

/**
 * Parse and validate LLM response to InferredIntent
 */
export function parseIntentResponse(response: unknown): InferredIntent {
  // Handle if response is already a valid InferredIntent
  if (isValidInferredIntent(response)) {
    return response as InferredIntent;
  }

  // Try to extract from a wrapped response
  if (typeof response === 'object' && response !== null) {
    const obj = response as Record<string, unknown>;

    return {
      primaryIntent: String(obj.primaryIntent || 'Unknown intent'),
      confidence: Number(obj.confidence) || 0.5,
      relatedTopics: Array.isArray(obj.relatedTopics)
        ? obj.relatedTopics.map(String)
        : [],
      predictedNextActions: parseActions(obj.predictedNextActions),
      suggestedShortcuts: parseShortcuts(obj.suggestedShortcuts),
      recommendedPanels: Array.isArray(obj.recommendedPanels)
        ? obj.recommendedPanels.map(String)
        : [],
      contentToPreload: parsePreloadContent(obj.contentToPreload),
      quickActions: parseQuickActions(obj.quickActions),
    };
  }

  // Return empty intent if parsing fails
  return createEmptyIntent();
}

/**
 * Check if object is a valid InferredIntent
 */
function isValidInferredIntent(obj: unknown): boolean {
  if (typeof obj !== 'object' || obj === null) return false;
  const intent = obj as Record<string, unknown>;
  return (
    typeof intent.primaryIntent === 'string' &&
    typeof intent.confidence === 'number' &&
    Array.isArray(intent.predictedNextActions)
  );
}

/**
 * Parse predicted actions array
 */
function parseActions(actions: unknown): PredictedAction[] {
  if (!Array.isArray(actions)) return [];

  return actions
    .filter((a): a is Record<string, unknown> => typeof a === 'object' && a !== null)
    .map(a => ({
      featureArea: String(a.featureArea || 'dashboard') as FeatureArea,
      actionType: String(a.actionType || 'click-card') as PredictedAction['actionType'],
      entityId: a.entityId ? String(a.entityId) : undefined,
      entityName: a.entityName ? String(a.entityName) : undefined,
      probability: Number(a.probability) || 0.5,
      reasoning: String(a.reasoning || ''),
    }))
    .slice(0, 5);
}

/**
 * Parse suggested shortcuts array
 */
function parseShortcuts(shortcuts: unknown): SuggestedShortcut[] {
  if (!Array.isArray(shortcuts)) return [];

  return shortcuts
    .filter((s): s is Record<string, unknown> => typeof s === 'object' && s !== null)
    .map(s => ({
      id: String(s.id || `shortcut-${Date.now()}`),
      label: String(s.label || 'Shortcut'),
      description: String(s.description || ''),
      targetView: String(s.targetView || 'dashboard'),
      targetEntityId: s.targetEntityId ? String(s.targetEntityId) : undefined,
      targetEntityName: s.targetEntityName ? String(s.targetEntityName) : undefined,
      iconType: validateIconType(s.iconType),
      priority: Number(s.priority) || 5,
      reasoning: s.reasoning ? String(s.reasoning) : undefined,
    }))
    .slice(0, 5);
}

/**
 * Validate and return icon type
 */
function validateIconType(iconType: unknown): SuggestedShortcut['iconType'] {
  const validTypes = ['symptom', 'medication', 'condition', 'anatomy', 'lab', 'chat', 'encyclopedia', 'timeline', 'health'];
  if (typeof iconType === 'string' && validTypes.includes(iconType)) {
    return iconType as SuggestedShortcut['iconType'];
  }
  return 'health';
}

/**
 * Parse preload content array
 */
function parsePreloadContent(content: unknown): PreloadContent[] {
  if (!Array.isArray(content)) return [];

  return content
    .filter((c): c is Record<string, unknown> => typeof c === 'object' && c !== null)
    .map(c => ({
      type: validateContentType(c.type),
      identifier: String(c.identifier || ''),
      priority: validatePriority(c.priority),
    }))
    .slice(0, 5);
}

/**
 * Validate content type
 */
function validateContentType(type: unknown): PreloadContent['type'] {
  const validTypes = ['component', 'data', 'image', 'model'];
  if (typeof type === 'string' && validTypes.includes(type)) {
    return type as PreloadContent['type'];
  }
  return 'data';
}

/**
 * Validate priority
 */
function validatePriority(priority: unknown): PreloadContent['priority'] {
  const validPriorities = ['high', 'medium', 'low'];
  if (typeof priority === 'string' && validPriorities.includes(priority)) {
    return priority as PreloadContent['priority'];
  }
  return 'medium';
}

/**
 * Parse quick actions array
 */
function parseQuickActions(actions: unknown): QuickAction[] {
  if (!Array.isArray(actions)) return [];

  return actions
    .filter((a): a is Record<string, unknown> => typeof a === 'object' && a !== null)
    .map(a => ({
      id: String(a.id || `action-${Date.now()}`),
      label: String(a.label || 'Action'),
      description: a.description ? String(a.description) : undefined,
      iconType: String(a.iconType || 'action'),
      contextual: Boolean(a.contextual),
      targetView: a.targetView ? String(a.targetView) : undefined,
      targetEntityId: a.targetEntityId ? String(a.targetEntityId) : undefined,
    }))
    .slice(0, 5);
}

/**
 * Create an empty intent for fallback
 */
export function createEmptyIntent(): InferredIntent {
  return {
    primaryIntent: 'Exploring health information',
    confidence: 0.3,
    relatedTopics: [],
    predictedNextActions: [],
    suggestedShortcuts: [],
    recommendedPanels: [],
    contentToPreload: [],
    quickActions: [],
  };
}
