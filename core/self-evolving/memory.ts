/**
 * Memory Module - Biological Memory Consolidation
 *
 * Implements a multi-tier memory system inspired by human memory:
 * - Sensory: Ultra-short observations (raw interaction data)
 * - Working: Active processing (current session patterns)
 * - Short-term: Recent patterns (hours to days)
 * - Long-term: Consolidated knowledge (weeks+)
 * - Permanent: Core patterns with high reinforcement
 *
 * Memory consolidation mimics sleep-based memory processing:
 * patterns observed in sensory/working memory get evaluated,
 * reinforced memories promote to higher tiers, weak memories decay
 * and eventually get pruned.
 */

import type {
  Memory,
  MemoryAssociation,
  MemoryPattern,
  MemoryTier,
  PatternData,
  PatternType,
  FitnessObservation,
} from './types';

// ---------------------------------------------------------------------------
// Memory ID Generation
// ---------------------------------------------------------------------------

let memoryCounter = 0;

function generateMemoryId(): string {
  memoryCounter++;
  return `mem-${Date.now()}-${memoryCounter}`;
}

// ---------------------------------------------------------------------------
// Memory Creation
// ---------------------------------------------------------------------------

/** Create a new sensory memory from a raw observation */
export function createSensoryMemory(
  patternType: PatternType,
  description: string,
  data: PatternData,
): Memory {
  const now = new Date();
  return {
    id: generateMemoryId(),
    pattern: {
      type: patternType,
      description,
      data,
      confidence: 0.3,
      supportCount: 1,
      contradictionCount: 0,
    },
    tier: 'sensory',
    strength: 0.5,
    reinforcementCount: 1,
    createdAt: now,
    lastAccessedAt: now,
    nextReviewAt: new Date(now.getTime() + 30 * 1000), // 30 seconds
    decayRate: 0.5, // Fast decay for sensory
    associations: [],
  };
}

/** Create a memory from a fitness observation pattern */
export function createMemoryFromObservation(
  observation: FitnessObservation,
): Memory | null {
  const context = observation.context;
  const data: PatternData = {
    subject: observation.interactionType,
    predicate: observation.score >= 0.5 ? 'positive-outcome' : 'negative-outcome',
    object: context.bodySystem ?? 'general',
    value: observation.score,
    conditions: {},
  };

  if (context.complexityLevel !== undefined) {
    data.conditions!['complexityLevel'] = context.complexityLevel;
  }
  if (context.timeOfDay) {
    data.conditions!['timeOfDay'] = context.timeOfDay;
  }
  if (context.sessionMinutes !== undefined) {
    data.conditions!['sessionMinutes'] = context.sessionMinutes;
  }

  // Determine pattern type based on interaction
  let patternType: PatternType;
  switch (observation.interactionType) {
    case 'content-view':
    case 'content-completion':
    case 'bookmark-creation':
      patternType = 'content-affinity';
      break;
    case 'quiz-answer':
    case 'quiz-score':
      patternType = 'difficulty-sweet-spot';
      break;
    case 'cue-engagement':
    case 'cue-dismissal':
      patternType = 'engagement-trigger';
      break;
    case 'session-duration':
      patternType = 'session-rhythm';
      break;
    case 'return-visit':
      patternType = 'time-pattern';
      break;
    case 'exploration-depth':
      patternType = 'user-preference';
      break;
    case 'feedback-positive':
    case 'feedback-negative':
      patternType = 'user-preference';
      break;
    default:
      patternType = 'correlation';
  }

  const description = `${observation.interactionType}: score=${observation.score.toFixed(2)} for ${context.bodySystem ?? 'general'}`;

  return createSensoryMemory(patternType, description, data);
}

// ---------------------------------------------------------------------------
// Memory Decay and Strength
// ---------------------------------------------------------------------------

/** Decay rates by tier (strength loss per hour without reinforcement) */
const DECAY_RATES: Record<MemoryTier, number> = {
  sensory: 2.0,       // Loses all strength in ~30 minutes
  working: 0.5,       // Loses strength over a few hours
  'short-term': 0.05, // Gradual decay over days
  'long-term': 0.005, // Very slow decay over weeks
  permanent: 0.0005,  // Essentially permanent
};

/** Promotion thresholds: minimum strength to promote to next tier */
const PROMOTION_THRESHOLDS: Record<MemoryTier, number> = {
  sensory: 0.4,       // Easy to promote from sensory
  working: 0.5,       // Moderate threshold
  'short-term': 0.6,  // Higher threshold for long-term
  'long-term': 0.8,   // Difficult to reach permanent
  permanent: 1.1,     // Cannot promote beyond permanent
};

/** Minimum reinforcements needed to promote */
const PROMOTION_MIN_REINFORCEMENTS: Record<MemoryTier, number> = {
  sensory: 1,
  working: 2,
  'short-term': 5,
  'long-term': 15,
  permanent: Infinity, // Already at max tier
};

/** Get the next tier up from the current tier */
function getNextTier(tier: MemoryTier): MemoryTier | null {
  const order: MemoryTier[] = ['sensory', 'working', 'short-term', 'long-term', 'permanent'];
  const idx = order.indexOf(tier);
  return idx < order.length - 1 ? order[idx + 1] : null;
}

/** Apply time-based decay to a memory's strength */
export function decayMemory(memory: Memory, hoursElapsed: number): Memory {
  const decayRate = DECAY_RATES[memory.tier];
  const newStrength = memory.strength * Math.exp(-decayRate * hoursElapsed);

  return {
    ...memory,
    strength: Math.max(0, newStrength),
  };
}

/** Reinforce a memory, increasing its strength and reinforcement count */
export function reinforceMemory(
  memory: Memory,
  reinforcementStrength: number = 0.1,
): Memory {
  const now = new Date();
  const newStrength = Math.min(1.0, memory.strength + reinforcementStrength);
  const newCount = memory.reinforcementCount + 1;

  // Calculate next review using expanding intervals (spaced repetition)
  const baseInterval = getReviewInterval(memory.tier, newCount);
  const nextReviewAt = new Date(now.getTime() + baseInterval);

  return {
    ...memory,
    strength: newStrength,
    reinforcementCount: newCount,
    lastAccessedAt: now,
    nextReviewAt,
    pattern: {
      ...memory.pattern,
      confidence: Math.min(1.0, memory.pattern.confidence + 0.05),
      supportCount: memory.pattern.supportCount + 1,
    },
  };
}

/** Get review interval in milliseconds based on tier and reinforcement count */
function getReviewInterval(tier: MemoryTier, reinforcements: number): number {
  const baseMs = {
    sensory: 30 * 1000,             // 30 seconds
    working: 5 * 60 * 1000,         // 5 minutes
    'short-term': 60 * 60 * 1000,   // 1 hour
    'long-term': 24 * 60 * 60 * 1000,    // 1 day
    permanent: 7 * 24 * 60 * 60 * 1000,  // 1 week
  };

  // Expanding intervals with each reinforcement
  const multiplier = Math.pow(2.0, Math.min(reinforcements - 1, 10));
  return baseMs[tier] * multiplier;
}

/** Add a contradiction to a memory, weakening its confidence */
export function contradictMemory(memory: Memory): Memory {
  return {
    ...memory,
    strength: Math.max(0, memory.strength - 0.15),
    pattern: {
      ...memory.pattern,
      confidence: Math.max(0, memory.pattern.confidence - 0.1),
      contradictionCount: memory.pattern.contradictionCount + 1,
    },
  };
}

// ---------------------------------------------------------------------------
// Memory Consolidation - The "sleep" cycle
// ---------------------------------------------------------------------------

/** Result of a consolidation cycle */
export interface ConsolidationResult {
  promoted: string[];       // Memory IDs promoted to higher tier
  pruned: string[];         // Memory IDs removed
  reinforced: string[];     // Memory IDs that were reinforced
  newAssociations: number;  // New associations created
  merged: string[];         // Memory IDs that were merged
}

/** Run a consolidation cycle on all memories */
export function consolidateMemories(
  memories: Map<string, Memory>,
  maxPerTier: number,
): ConsolidationResult {
  const result: ConsolidationResult = {
    promoted: [],
    pruned: [],
    reinforced: [],
    newAssociations: 0,
    merged: [],
  };

  const now = new Date();

  // Phase 1: Apply decay to all memories
  for (const [id, memory] of memories) {
    const hoursSinceAccess =
      (now.getTime() - memory.lastAccessedAt.getTime()) / (1000 * 60 * 60);
    const decayed = decayMemory(memory, hoursSinceAccess);
    memories.set(id, decayed);
  }

  // Phase 2: Prune dead memories (strength below threshold)
  const pruneThreshold = 0.05;
  for (const [id, memory] of memories) {
    if (memory.strength < pruneThreshold && memory.tier !== 'permanent') {
      memories.delete(id);
      result.pruned.push(id);
    }
  }

  // Phase 3: Promote strong memories to higher tiers
  for (const [id, memory] of memories) {
    const threshold = PROMOTION_THRESHOLDS[memory.tier];
    const minReinforcements = PROMOTION_MIN_REINFORCEMENTS[memory.tier];
    const nextTier = getNextTier(memory.tier);

    if (
      nextTier &&
      memory.strength >= threshold &&
      memory.reinforcementCount >= minReinforcements
    ) {
      memories.set(id, {
        ...memory,
        tier: nextTier,
        decayRate: DECAY_RATES[nextTier],
      });
      result.promoted.push(id);
    }
  }

  // Phase 4: Find and create associations between related memories
  const memoryList = Array.from(memories.values());
  for (let i = 0; i < memoryList.length; i++) {
    for (let j = i + 1; j < memoryList.length; j++) {
      const similarity = patternSimilarity(memoryList[i].pattern, memoryList[j].pattern);
      if (similarity > 0.7) {
        const hasAssociation = memoryList[i].associations.some(
          a => a.targetMemoryId === memoryList[j].id
        );
        if (!hasAssociation) {
          addAssociation(memories, memoryList[i].id, memoryList[j].id, similarity);
          result.newAssociations++;
        }
      }
    }
  }

  // Phase 5: Merge highly similar memories in the same tier
  const tierGroups = groupByTier(memories);
  for (const [_tier, tierMemories] of tierGroups) {
    for (let i = 0; i < tierMemories.length; i++) {
      for (let j = i + 1; j < tierMemories.length; j++) {
        if (!memories.has(tierMemories[j].id)) continue;
        const sim = patternSimilarity(tierMemories[i].pattern, tierMemories[j].pattern);
        if (sim > 0.9) {
          const merged = mergeMemories(tierMemories[i], tierMemories[j]);
          memories.set(merged.id, merged);
          memories.delete(tierMemories[j].id);
          result.merged.push(tierMemories[j].id);
        }
      }
    }
  }

  // Phase 6: Enforce tier size limits (keep strongest per tier)
  for (const [_tier, tierMemories] of tierGroups) {
    if (tierMemories.length > maxPerTier) {
      const sorted = tierMemories.sort((a, b) => b.strength - a.strength);
      for (let i = maxPerTier; i < sorted.length; i++) {
        if (memories.has(sorted[i].id)) {
          memories.delete(sorted[i].id);
          result.pruned.push(sorted[i].id);
        }
      }
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Pattern Similarity and Association
// ---------------------------------------------------------------------------

/** Calculate similarity between two memory patterns (0-1) */
export function patternSimilarity(a: MemoryPattern, b: MemoryPattern): number {
  let score = 0;
  let factors = 0;

  // Same pattern type is a strong signal
  if (a.type === b.type) {
    score += 1.0;
  }
  factors += 1;

  // Compare data fields
  if (a.data.subject === b.data.subject) {
    score += 1.0;
  } else if (a.data.subject.includes(b.data.subject) || b.data.subject.includes(a.data.subject)) {
    score += 0.5;
  }
  factors += 1;

  if (a.data.predicate === b.data.predicate) {
    score += 0.8;
  }
  factors += 1;

  if (a.data.object === b.data.object) {
    score += 1.0;
  } else if (a.data.object.includes(b.data.object) || b.data.object.includes(a.data.object)) {
    score += 0.5;
  }
  factors += 1;

  // Compare conditions overlap
  if (a.data.conditions && b.data.conditions) {
    const aKeys = Object.keys(a.data.conditions);
    const bKeys = Object.keys(b.data.conditions);
    const commonKeys = aKeys.filter(k => bKeys.includes(k));
    if (commonKeys.length > 0) {
      const matchingValues = commonKeys.filter(
        k => a.data.conditions![k] === b.data.conditions![k]
      );
      score += matchingValues.length / Math.max(aKeys.length, bKeys.length);
    }
    factors += 1;
  }

  return factors > 0 ? score / factors : 0;
}

/** Add a bidirectional association between two memories */
function addAssociation(
  memories: Map<string, Memory>,
  id1: string,
  id2: string,
  strength: number,
): void {
  const mem1 = memories.get(id1);
  const mem2 = memories.get(id2);
  if (!mem1 || !mem2) return;

  const type: MemoryAssociation['type'] =
    mem1.pattern.data.predicate === mem2.pattern.data.predicate ? 'reinforces' : 'extends';

  mem1.associations.push({ targetMemoryId: id2, type, strength });
  mem2.associations.push({ targetMemoryId: id1, type, strength });
}

/** Merge two very similar memories into one stronger memory */
function mergeMemories(a: Memory, b: Memory): Memory {
  const stronger = a.strength >= b.strength ? a : b;
  const weaker = a.strength >= b.strength ? b : a;

  return {
    ...stronger,
    strength: Math.min(1.0, stronger.strength + weaker.strength * 0.5),
    reinforcementCount: stronger.reinforcementCount + weaker.reinforcementCount,
    pattern: {
      ...stronger.pattern,
      confidence: Math.min(1.0, stronger.pattern.confidence + 0.1),
      supportCount: stronger.pattern.supportCount + weaker.pattern.supportCount,
      contradictionCount: stronger.pattern.contradictionCount + weaker.pattern.contradictionCount,
    },
    associations: [
      ...stronger.associations,
      ...weaker.associations.filter(
        wa => !stronger.associations.some(sa => sa.targetMemoryId === wa.targetMemoryId)
      ),
    ],
  };
}

/** Group memories by their tier */
function groupByTier(memories: Map<string, Memory>): Map<MemoryTier, Memory[]> {
  const groups = new Map<MemoryTier, Memory[]>();

  for (const memory of memories.values()) {
    const group = groups.get(memory.tier) ?? [];
    group.push(memory);
    groups.set(memory.tier, group);
  }

  return groups;
}

// ---------------------------------------------------------------------------
// Memory Queries
// ---------------------------------------------------------------------------

/** Find memories matching a pattern type */
export function findMemoriesByType(
  memories: Map<string, Memory>,
  type: PatternType,
): Memory[] {
  const result: Memory[] = [];
  for (const memory of memories.values()) {
    if (memory.pattern.type === type) {
      result.push(memory);
    }
  }
  return result.sort((a, b) => b.strength - a.strength);
}

/** Find memories above a minimum tier */
export function findConsolidatedMemories(
  memories: Map<string, Memory>,
  minTier: MemoryTier = 'short-term',
): Memory[] {
  const tierOrder: MemoryTier[] = ['sensory', 'working', 'short-term', 'long-term', 'permanent'];
  const minIndex = tierOrder.indexOf(minTier);

  const result: Memory[] = [];
  for (const memory of memories.values()) {
    if (tierOrder.indexOf(memory.tier) >= minIndex) {
      result.push(memory);
    }
  }
  return result.sort((a, b) => b.strength - a.strength);
}

/** Find the strongest memories related to a subject */
export function findMemoriesBySubject(
  memories: Map<string, Memory>,
  subject: string,
  limit: number = 10,
): Memory[] {
  const result: Memory[] = [];
  for (const memory of memories.values()) {
    if (
      memory.pattern.data.subject.includes(subject) ||
      memory.pattern.data.object.includes(subject)
    ) {
      result.push(memory);
    }
  }
  return result.sort((a, b) => b.strength - a.strength).slice(0, limit);
}

/** Get memory statistics */
export function getMemoryStats(memories: Map<string, Memory>): {
  totalCount: number;
  byTier: Record<MemoryTier, number>;
  averageStrength: number;
  averageConfidence: number;
  totalAssociations: number;
  oldestMemory: Date | null;
  strongestPatternType: PatternType | null;
} {
  const byTier: Record<MemoryTier, number> = {
    sensory: 0,
    working: 0,
    'short-term': 0,
    'long-term': 0,
    permanent: 0,
  };

  let totalStrength = 0;
  let totalConfidence = 0;
  let totalAssociations = 0;
  let oldest: Date | null = null;
  const typeCounts = new Map<PatternType, number>();

  for (const memory of memories.values()) {
    byTier[memory.tier]++;
    totalStrength += memory.strength;
    totalConfidence += memory.pattern.confidence;
    totalAssociations += memory.associations.length;

    if (!oldest || memory.createdAt < oldest) {
      oldest = memory.createdAt;
    }

    typeCounts.set(
      memory.pattern.type,
      (typeCounts.get(memory.pattern.type) ?? 0) + 1,
    );
  }

  const total = memories.size;
  let strongestType: PatternType | null = null;
  let maxTypeCount = 0;
  for (const [type, count] of typeCounts) {
    if (count > maxTypeCount) {
      maxTypeCount = count;
      strongestType = type;
    }
  }

  return {
    totalCount: total,
    byTier,
    averageStrength: total > 0 ? totalStrength / total : 0,
    averageConfidence: total > 0 ? totalConfidence / total : 0,
    totalAssociations: totalAssociations / 2, // Each association counted twice
    oldestMemory: oldest,
    strongestPatternType: strongestType,
  };
}

/** Extract actionable insights from consolidated memories */
export function extractInsights(
  memories: Map<string, Memory>,
): { pattern: MemoryPattern; tier: MemoryTier; strength: number }[] {
  const consolidated = findConsolidatedMemories(memories, 'short-term');

  return consolidated
    .filter(m => m.pattern.confidence >= 0.5)
    .map(m => ({
      pattern: m.pattern,
      tier: m.tier,
      strength: m.strength,
    }));
}
