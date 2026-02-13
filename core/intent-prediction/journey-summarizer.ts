/**
 * Journey Summarizer
 *
 * Formats user exploration history into contextual summaries
 * for the AI chat assistant.
 */

import type {
  ActionEvent,
  FeatureArea,
} from './types';

// ============================================
// Interfaces
// ============================================

/**
 * Summarized journey for chat context
 */
export interface JourneySummary {
  /** Natural language summary of the journey */
  narrativeSummary: string;

  /** Key topics explored */
  topicsExplored: string[];

  /** Entities viewed (medications, conditions, symptoms, etc.) */
  entitiesViewed: EntityReference[];

  /** Feature areas visited */
  areasVisited: FeatureArea[];

  /** Duration of exploration in minutes */
  durationMinutes: number;

  /** Number of actions in journey */
  actionCount: number;

  /** Inferred learning focus */
  learningFocus?: string;
}

/**
 * Reference to a viewed entity
 */
export interface EntityReference {
  type: 'symptom' | 'medication' | 'condition' | 'anatomy' | 'lab' | 'encyclopedia';
  id?: string;
  name: string;
}

// ============================================
// Journey Summarizer
// ============================================

/**
 * Summarize recent actions into chat context
 */
export function summarizeJourney(actions: ActionEvent[]): JourneySummary {
  if (actions.length === 0) {
    return {
      narrativeSummary: '',
      topicsExplored: [],
      entitiesViewed: [],
      areasVisited: [],
      durationMinutes: 0,
      actionCount: 0,
    };
  }

  const entitiesViewed = extractEntities(actions);
  const areasVisited = extractUniqueAreas(actions);
  const topicsExplored = extractTopics(actions);
  const learningFocus = inferLearningFocus(actions, entitiesViewed);
  const durationMinutes = calculateDuration(actions);
  const narrativeSummary = buildNarrativeSummary(
    actions,
    entitiesViewed,
    areasVisited,
    learningFocus
  );

  return {
    narrativeSummary,
    topicsExplored,
    entitiesViewed,
    areasVisited,
    durationMinutes,
    actionCount: actions.length,
    learningFocus,
  };
}

/**
 * Format journey summary as chat system prompt context
 */
export function formatJourneyForChatPrompt(summary: JourneySummary): string {
  if (summary.actionCount === 0 || !summary.narrativeSummary) {
    return '';
  }

  const lines: string[] = [
    '=== CURRENT EXPLORATION CONTEXT ===',
    '',
    summary.narrativeSummary,
    '',
  ];

  if (summary.entitiesViewed.length > 0) {
    lines.push('Recently Explored:');
    const grouped = groupEntitiesByType(summary.entitiesViewed);

    if (grouped.symptom.length > 0) {
      lines.push(`- Symptoms: ${grouped.symptom.map(e => e.name).join(', ')}`);
    }
    if (grouped.medication.length > 0) {
      lines.push(`- Medications: ${grouped.medication.map(e => e.name).join(', ')}`);
    }
    if (grouped.condition.length > 0) {
      lines.push(`- Conditions: ${grouped.condition.map(e => e.name).join(', ')}`);
    }
    if (grouped.anatomy.length > 0) {
      lines.push(`- Anatomy: ${grouped.anatomy.map(e => e.name).join(', ')}`);
    }
    if (grouped.lab.length > 0) {
      lines.push(`- Lab Tests: ${grouped.lab.map(e => e.name).join(', ')}`);
    }
    if (grouped.encyclopedia.length > 0) {
      lines.push(`- Encyclopedia: ${grouped.encyclopedia.map(e => e.name).join(', ')}`);
    }

    lines.push('');
  }

  if (summary.learningFocus) {
    lines.push(`The user appears to be learning about: ${summary.learningFocus}`);
    lines.push('');
  }

  lines.push('Use this context to provide more relevant and personalized responses.');

  return lines.join('\n');
}

// ============================================
// Helper Functions
// ============================================

/**
 * Extract entities from actions
 */
function extractEntities(actions: ActionEvent[]): EntityReference[] {
  const entities: EntityReference[] = [];
  const seen = new Set<string>();

  for (const action of actions) {
    const entity = extractEntityFromAction(action);
    if (entity) {
      const key = `${entity.type}:${entity.name}`;
      if (!seen.has(key)) {
        seen.add(key);
        entities.push(entity);
      }
    }
  }

  return entities;
}

/**
 * Extract entity reference from a single action
 */
function extractEntityFromAction(action: ActionEvent): EntityReference | null {
  const { featureArea, actionType, payload } = action;

  // Symptom explorer
  if (featureArea === 'symptom-explorer') {
    if (payload.entityName) {
      return { type: 'symptom', id: payload.entityId, name: payload.entityName };
    }
    if (payload.searchQuery && actionType === 'select-symptom') {
      return { type: 'symptom', name: payload.searchQuery };
    }
  }

  // Medication explorer
  if (featureArea === 'medication-explorer') {
    if (payload.entityName) {
      return { type: 'medication', id: payload.entityId, name: payload.entityName };
    }
  }

  // Condition simulator
  if (featureArea === 'condition-simulator') {
    if (payload.entityName) {
      return { type: 'condition', id: payload.entityId, name: payload.entityName };
    }
  }

  // Encyclopedia
  if (featureArea === 'encyclopedia' || featureArea === 'encyclopedia-entry') {
    if (payload.entityName) {
      return { type: 'encyclopedia', id: payload.entityId, name: payload.entityName };
    }
  }

  // Anatomy
  if (featureArea === 'anatomy-3d') {
    if (payload.structureName) {
      return { type: 'anatomy', id: payload.structureId, name: payload.structureName };
    }
  }

  // Lab values
  if (featureArea === 'lab-values') {
    if (payload.labTestName) {
      return { type: 'lab', name: payload.labTestName };
    }
  }

  return null;
}

/**
 * Extract unique feature areas visited
 */
function extractUniqueAreas(actions: ActionEvent[]): FeatureArea[] {
  const areas = new Set<FeatureArea>();
  for (const action of actions) {
    areas.add(action.featureArea);
  }
  return Array.from(areas);
}

/**
 * Extract topics from actions
 */
function extractTopics(actions: ActionEvent[]): string[] {
  const topics = new Set<string>();

  for (const action of actions) {
    const { payload } = action;

    // Add search queries as topics
    if (payload.searchQuery) {
      topics.add(payload.searchQuery.toLowerCase());
    }

    // Add category names as topics
    if (payload.categoryName) {
      topics.add(payload.categoryName.toLowerCase());
    }

    // Add tab names as topics
    if (payload.tabName) {
      topics.add(payload.tabName.toLowerCase());
    }
  }

  return Array.from(topics).slice(0, 10); // Limit to top 10 topics
}

/**
 * Infer the user's learning focus from actions
 */
function inferLearningFocus(
  _actions: ActionEvent[],
  entities: EntityReference[]
): string | undefined {
  if (entities.length === 0) return undefined;

  // Count entity types
  const typeCounts: Record<string, number> = {};
  for (const entity of entities) {
    typeCounts[entity.type] = (typeCounts[entity.type] || 0) + 1;
  }

  // Find dominant type
  let maxType = '';
  let maxCount = 0;
  for (const [type, count] of Object.entries(typeCounts)) {
    if (count > maxCount) {
      maxCount = count;
      maxType = type;
    }
  }

  // Build focus description
  const recentEntity = entities[entities.length - 1];

  switch (maxType) {
    case 'symptom':
      return `understanding symptoms, particularly ${recentEntity.name}`;
    case 'medication':
      return `learning about medications, especially ${recentEntity.name}`;
    case 'condition':
      return `exploring medical conditions, focusing on ${recentEntity.name}`;
    case 'anatomy':
      return `studying anatomy, recently looking at ${recentEntity.name}`;
    case 'lab':
      return `understanding lab tests, including ${recentEntity.name}`;
    case 'encyclopedia':
      return `researching medical topics, recently ${recentEntity.name}`;
    default:
      return undefined;
  }
}

/**
 * Calculate journey duration in minutes
 */
function calculateDuration(actions: ActionEvent[]): number {
  if (actions.length < 2) return 0;

  const first = new Date(actions[0].timestamp);
  const last = new Date(actions[actions.length - 1].timestamp);
  const diffMs = last.getTime() - first.getTime();

  return Math.round(diffMs / 60000); // Convert to minutes
}

/**
 * Build natural language narrative summary
 */
function buildNarrativeSummary(
  actions: ActionEvent[],
  entities: EntityReference[],
  areas: FeatureArea[],
  learningFocus?: string
): string {
  if (actions.length === 0) return '';

  const parts: string[] = [];

  // Opening
  if (entities.length === 1) {
    parts.push(`The user has been exploring ${entities[0].name}.`);
  } else if (entities.length > 1) {
    const entityNames = entities.slice(-3).map(e => e.name);
    parts.push(
      `The user has been exploring ${entityNames.slice(0, -1).join(', ')}${
        entityNames.length > 1 ? ' and ' : ''
      }${entityNames[entityNames.length - 1]}.`
    );
  }

  // Feature areas visited
  const areaDescriptions = areas.map(areaToDescription).filter(Boolean);
  if (areaDescriptions.length > 0) {
    parts.push(
      `They have visited: ${areaDescriptions.join(', ')}.`
    );
  }

  // Learning focus
  if (learningFocus) {
    parts.push(`They appear to be ${learningFocus}.`);
  }

  return parts.join(' ');
}

/**
 * Convert feature area to human-readable description
 */
function areaToDescription(area: FeatureArea): string {
  const descriptions: Record<FeatureArea, string> = {
    navigation: '',
    dashboard: 'the dashboard',
    'symptom-explorer': 'the symptom explorer',
    'medication-explorer': 'the medication explorer',
    'condition-simulator': 'the condition simulator',
    encyclopedia: 'the medical encyclopedia',
    'encyclopedia-entry': 'encyclopedia entries',
    'lab-values': 'lab results',
    'health-markers': 'health markers',
    'anatomy-3d': 'the 3D anatomy viewer',
    chat: 'the AI chat',
    timeline: 'the health timeline',
    'body-map': 'the body map',
  };

  return descriptions[area] || '';
}

/**
 * Group entities by type
 */
function groupEntitiesByType(
  entities: EntityReference[]
): Record<EntityReference['type'], EntityReference[]> {
  const groups: Record<EntityReference['type'], EntityReference[]> = {
    symptom: [],
    medication: [],
    condition: [],
    anatomy: [],
    lab: [],
    encyclopedia: [],
  };

  for (const entity of entities) {
    groups[entity.type].push(entity);
  }

  return groups;
}

/**
 * Get recent actions for summarization (last N actions or last M minutes)
 */
export function getRecentActionsForSummary(
  actions: ActionEvent[],
  maxActions = 20,
  maxMinutes = 15
): ActionEvent[] {
  if (actions.length === 0) return [];

  const cutoffTime = Date.now() - maxMinutes * 60 * 1000;
  const recentByTime = actions.filter(
    (a) => new Date(a.timestamp).getTime() >= cutoffTime
  );

  // Take the most recent N actions, or time-filtered if fewer
  const candidates = recentByTime.length >= 3 ? recentByTime : actions;
  return candidates.slice(-maxActions);
}
