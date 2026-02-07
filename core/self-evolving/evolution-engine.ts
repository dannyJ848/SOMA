/**
 * Evolution Engine - The Main Orchestrator
 *
 * This is the beating heart of the self-evolving system. It orchestrates:
 * 1. Population management (creation, evolution, replacement)
 * 2. Fitness evaluation from user interaction signals
 * 3. Memory consolidation (pattern learning over time)
 * 4. Homeostasis (self-regulation to prevent stagnation/instability)
 * 5. Strategy deployment (selecting the active genome for decisions)
 *
 * The engine runs an evolutionary cycle triggered by accumulated interactions.
 * Between cycles, it collects fitness observations and updates memories.
 *
 * Biological analogy:
 * This is the "organism" - it has a genome (strategy), senses its
 * environment (user interactions), remembers patterns (memory system),
 * and evolves over generations to become better at its job.
 */

import type {
  EvolutionConfig,
  FitnessObservation,
  FitnessScore,
  Generation,
  Genome,
  HomeostasisAction,
  InteractionContext,
  InteractionType,
  Memory,
  SelfEvolvingState,
  SystemHealth,
} from './types';

import {
  createRandomGenome,
  createSeededGenome,
  crossoverGenomes,
  mutateGenome,
  populationDiversity,
  getGeneValue,
} from './genome';

import {
  consolidateMemories,
  createMemoryFromObservation,
  extractInsights,
  getMemoryStats,
  findConsolidatedMemories,
} from './memory';

import {
  createObservation,
  evaluateFitness,
  getChampion,
  getElites,
  getPopulationStats,
  selectParent,
} from './fitness';

// ---------------------------------------------------------------------------
// Default Configuration
// ---------------------------------------------------------------------------

export const DEFAULT_EVOLUTION_CONFIG: EvolutionConfig = {
  populationSize: 12,
  eliteCount: 2,
  crossoverRate: 0.4,
  mutationRate: 0.35,
  immigrationRate: 0.1,
  minObservationsForEvaluation: 5,
  temporalDecayFactor: 0.95,
  minFitnessConfidence: 0.2,
  maxGenerationHistory: 50,
  evolutionInterval: 20,      // Evolve every 20 interactions
  memoryConsolidationInterval: 30, // Consolidate every 30 minutes
  maxMemoriesPerTier: 100,
  selfModifyConfig: true,
};

// ---------------------------------------------------------------------------
// State Initialization
// ---------------------------------------------------------------------------

/** Initialize a fresh self-evolving system */
export function initializeSelfEvolvingState(
  config: Partial<EvolutionConfig> = {},
): SelfEvolvingState {
  const fullConfig = { ...DEFAULT_EVOLUTION_CONFIG, ...config };
  const now = new Date();

  // Create initial population: 1 seeded + rest random
  const population = new Map<string, Genome>();

  const seedGenome = createSeededGenome(0);
  population.set(seedGenome.id, seedGenome);

  for (let i = 1; i < fullConfig.populationSize; i++) {
    const genome = createRandomGenome(0);
    population.set(genome.id, genome);
  }

  // Initial generation record
  const generation0: Generation = {
    number: 0,
    genomeIds: Array.from(population.keys()),
    bestFitness: 0.5,
    averageFitness: 0.5,
    worstFitness: 0.5,
    diversity: populationDiversity(Array.from(population.values())),
    createdAt: now,
    championId: seedGenome.id,
  };

  return {
    config: fullConfig,
    currentGeneration: 0,
    population,
    activeGenomeId: seedGenome.id, // Start with the balanced seed
    fitnessScores: new Map(),
    pendingObservations: [],
    memories: new Map(),
    generations: [generation0],
    health: createInitialHealth(now),
    totalInteractions: 0,
    initializedAt: now,
    lastEvolutionAt: now,
    lastConsolidationAt: now,
  };
}

function createInitialHealth(now: Date): SystemHealth {
  return {
    geneticDiversity: 1.0,
    fitnessVelocity: 0,
    memoryUtilization: 0,
    memoryRetentionRate: 1.0,
    averageFitnessConfidence: 0,
    activeStrategyCount: 0,
    isStagnating: false,
    conceptDriftDetected: false,
    recentActions: [],
    lastCheckAt: now,
  };
}

// ---------------------------------------------------------------------------
// Interaction Recording - How the system learns from the user
// ---------------------------------------------------------------------------

/** Record a user interaction and feed it into the evolutionary system */
export function recordInteraction(
  state: SelfEvolvingState,
  interactionType: InteractionType,
  score: number,
  context: InteractionContext = {},
): SelfEvolvingState {
  // Create fitness observation for the currently active genome
  const observation = createObservation(
    state.activeGenomeId,
    interactionType,
    score,
    context,
  );

  // Create a memory from this observation
  const memory = createMemoryFromObservation(observation);

  const newMemories = new Map(state.memories);
  if (memory) {
    newMemories.set(memory.id, memory);
  }

  const newPending = [...state.pendingObservations, observation];
  const newTotalInteractions = state.totalInteractions + 1;

  let newState: SelfEvolvingState = {
    ...state,
    pendingObservations: newPending,
    memories: newMemories,
    totalInteractions: newTotalInteractions,
  };

  // Check if it's time to run an evolution cycle
  if (newTotalInteractions % state.config.evolutionInterval === 0) {
    newState = runEvolutionCycle(newState);
  }

  // Check if it's time for memory consolidation
  const minutesSinceConsolidation =
    (Date.now() - state.lastConsolidationAt.getTime()) / (1000 * 60);
  if (minutesSinceConsolidation >= state.config.memoryConsolidationInterval) {
    newState = runMemoryConsolidation(newState);
  }

  return newState;
}

// ---------------------------------------------------------------------------
// Evolution Cycle - The generational step
// ---------------------------------------------------------------------------

/** Run one evolution cycle: evaluate, select, reproduce, replace */
export function runEvolutionCycle(state: SelfEvolvingState): SelfEvolvingState {
  const config = state.config;
  const now = new Date();
  const newGeneration = state.currentGeneration + 1;

  // Step 1: Evaluate fitness for all genomes with enough observations
  const newFitnessScores = new Map(state.fitnessScores);
  for (const genomeId of state.population.keys()) {
    const genomeObs = state.pendingObservations.filter(o => o.genomeId === genomeId);
    const existingObs = getExistingObservations(state, genomeId);
    const allObs = [...existingObs, ...genomeObs];

    if (allObs.length >= config.minObservationsForEvaluation) {
      const fitness = evaluateFitness(genomeId, allObs, config.temporalDecayFactor);
      newFitnessScores.set(genomeId, fitness);
    }
  }

  // Step 2: Get current population as array
  const populationArray = Array.from(state.population.values());

  // Step 3: Select elites (preserved unchanged)
  const elites = getElites(populationArray, newFitnessScores, config.eliteCount);

  // Step 4: Build next generation
  const nextPopulation = new Map<string, Genome>();

  // Add elites
  for (const elite of elites) {
    const preserved: Genome = {
      ...elite,
      generation: newGeneration,
      origin: 'elite',
    };
    nextPopulation.set(preserved.id, preserved);
  }

  // Calculate how many of each type we need
  const remaining = config.populationSize - elites.length;
  const crossoverCount = Math.floor(remaining * config.crossoverRate);
  const mutationCount = Math.floor(remaining * config.mutationRate);
  const immigrantCount = Math.max(1, remaining - crossoverCount - mutationCount);

  // Crossover offspring
  for (let i = 0; i < crossoverCount; i++) {
    const parent1 = selectParent(populationArray, newFitnessScores, 'tournament');
    const parent2 = selectParent(populationArray, newFitnessScores, 'tournament');
    const child = crossoverGenomes(parent1, parent2, newGeneration);
    nextPopulation.set(child.id, child);
  }

  // Mutation offspring
  for (let i = 0; i < mutationCount; i++) {
    const parent = selectParent(populationArray, newFitnessScores, 'roulette');
    const child = mutateGenome(parent, newGeneration);
    nextPopulation.set(child.id, child);
  }

  // Random immigrants (fresh genetic material)
  for (let i = 0; i < immigrantCount; i++) {
    const immigrant = createRandomGenome(newGeneration);
    nextPopulation.set(immigrant.id, immigrant);
  }

  // Step 5: Select new active genome (champion of new population)
  const champion = getChampion(
    Array.from(nextPopulation.values()),
    newFitnessScores,
  );
  const activeGenomeId = champion?.id ?? elites[0]?.id ?? state.activeGenomeId;

  // Step 6: Record generation statistics
  const popStats = getPopulationStats(
    Array.from(nextPopulation.values()),
    newFitnessScores,
  );

  const diversity = populationDiversity(Array.from(nextPopulation.values()));

  const generationRecord: Generation = {
    number: newGeneration,
    genomeIds: Array.from(nextPopulation.keys()),
    bestFitness: popStats.best,
    averageFitness: popStats.average,
    worstFitness: popStats.worst,
    diversity,
    createdAt: now,
    championId: activeGenomeId,
  };

  // Step 7: Run homeostasis check
  const generations = [...state.generations, generationRecord];
  const health = checkHomeostasis(
    generations,
    diversity,
    state.memories,
    newFitnessScores,
  );

  // Step 8: Trim generation history
  const trimmedGenerations = generations.slice(
    Math.max(0, generations.length - config.maxGenerationHistory),
  );

  return {
    ...state,
    currentGeneration: newGeneration,
    population: nextPopulation,
    activeGenomeId,
    fitnessScores: newFitnessScores,
    pendingObservations: [], // Reset after processing
    generations: trimmedGenerations,
    health,
    lastEvolutionAt: now,
  };
}

/** Get historical observations for a genome (from fitness score history) */
function getExistingObservations(
  state: SelfEvolvingState,
  genomeId: string,
): FitnessObservation[] {
  // Reconstruct approximate observations from pending
  return state.pendingObservations.filter(o => o.genomeId === genomeId);
}

// ---------------------------------------------------------------------------
// Memory Consolidation - The "sleep" cycle
// ---------------------------------------------------------------------------

/** Run memory consolidation cycle */
export function runMemoryConsolidation(state: SelfEvolvingState): SelfEvolvingState {
  const newMemories = new Map(state.memories);
  consolidateMemories(newMemories, state.config.maxMemoriesPerTier);

  return {
    ...state,
    memories: newMemories,
    lastConsolidationAt: new Date(),
  };
}

// ---------------------------------------------------------------------------
// Homeostasis - Self-regulation
// ---------------------------------------------------------------------------

/** Check system health and take corrective actions if needed */
function checkHomeostasis(
  generations: Generation[],
  currentDiversity: number,
  memories: Map<string, Memory>,
  fitnessScores: Map<string, FitnessScore>,
): SystemHealth {
  const now = new Date();
  const actions: HomeostasisAction[] = [];

  // Calculate fitness velocity (improvement rate)
  let fitnessVelocity = 0;
  if (generations.length >= 3) {
    const recent = generations.slice(-3);
    const oldest = recent[0].averageFitness;
    const newest = recent[recent.length - 1].averageFitness;
    fitnessVelocity = newest - oldest;
  }

  // Detect stagnation: no improvement over last 5 generations
  let isStagnating = false;
  if (generations.length >= 5) {
    const recentGens = generations.slice(-5);
    const fitnesses = recentGens.map(g => g.averageFitness);
    const range = Math.max(...fitnesses) - Math.min(...fitnesses);
    isStagnating = range < 0.02;
  }

  // Detect concept drift: sudden fitness drop
  let conceptDriftDetected = false;
  if (generations.length >= 3) {
    const last = generations[generations.length - 1];
    const prev = generations[generations.length - 2];
    if (last.averageFitness < prev.averageFitness - 0.15) {
      conceptDriftDetected = true;
    }
  }

  // Take homeostatic actions
  if (isStagnating) {
    actions.push({
      type: 'increase-mutation-rate',
      reason: 'Population fitness stagnating - increasing exploration',
      timestamp: now,
      params: { increase: 0.1 },
    });
  }

  if (currentDiversity < 0.2) {
    actions.push({
      type: 'inject-immigrants',
      reason: 'Genetic diversity too low - injecting fresh genomes',
      timestamp: now,
      params: { count: 3 },
    });
  }

  if (conceptDriftDetected) {
    actions.push({
      type: 'reset-stagnant-genomes',
      reason: 'Concept drift detected - resetting poorly adapted genomes',
      timestamp: now,
      params: { resetFraction: 0.3 },
    });
  }

  // Memory health check
  const memStats = getMemoryStats(memories);
  const maxCapacity = 500; // Rough max across all tiers
  const memoryUtilization = memStats.totalCount / maxCapacity;

  if (memoryUtilization > 0.9) {
    actions.push({
      type: 'prune-memories',
      reason: 'Memory system near capacity - pruning weak memories',
      timestamp: now,
      params: { targetUtilization: 0.7 },
    });
  }

  // Calculate average fitness confidence
  let totalConfidence = 0;
  let confidenceCount = 0;
  for (const score of fitnessScores.values()) {
    totalConfidence += score.confidence;
    confidenceCount++;
  }
  const avgConfidence = confidenceCount > 0 ? totalConfidence / confidenceCount : 0;

  return {
    geneticDiversity: currentDiversity,
    fitnessVelocity,
    memoryUtilization,
    memoryRetentionRate: memStats.totalCount > 0
      ? memStats.averageStrength
      : 1.0,
    averageFitnessConfidence: avgConfidence,
    activeStrategyCount: fitnessScores.size,
    isStagnating,
    conceptDriftDetected,
    recentActions: actions,
    lastCheckAt: now,
  };
}

// ---------------------------------------------------------------------------
// Strategy Queries - Using the active genome for decisions
// ---------------------------------------------------------------------------

/** Get the current active genome's value for a gene */
export function getActiveGeneValue(
  state: SelfEvolvingState,
  geneId: string,
): number | boolean | string | undefined {
  const genome = state.population.get(state.activeGenomeId);
  if (!genome) return undefined;
  return getGeneValue(genome, geneId);
}

/** Get multiple gene values from the active genome */
export function getActiveStrategy(
  state: SelfEvolvingState,
): Record<string, number | boolean | string> {
  const genome = state.population.get(state.activeGenomeId);
  if (!genome) return {};

  const strategy: Record<string, number | boolean | string> = {};
  for (const [id, gene] of genome.genes) {
    strategy[id] = gene.value;
  }
  return strategy;
}

/** Should the system explore (try something new) or exploit (use best known)? */
export function shouldExplore(state: SelfEvolvingState): boolean {
  const explorationRate = getActiveGeneValue(state, 'exploration-rate');
  if (typeof explorationRate !== 'number') return Math.random() < 0.1;

  // Apply exploration decay over time
  const decayRate = getActiveGeneValue(state, 'exploration-decay');
  const decay = typeof decayRate === 'number' ? decayRate : 0.01;
  const effectiveRate = explorationRate * Math.exp(-decay * state.totalInteractions);

  return Math.random() < effectiveRate;
}

// ---------------------------------------------------------------------------
// Insight Extraction - What the system has learned
// ---------------------------------------------------------------------------

/** Get a summary of what the system has learned so far */
export function getSystemInsights(state: SelfEvolvingState): {
  generation: number;
  totalInteractions: number;
  championFitness: number;
  fitnessHistory: { generation: number; best: number; avg: number }[];
  topPatterns: { description: string; confidence: number; strength: number }[];
  activeStrategy: Record<string, number | boolean | string>;
  health: SystemHealth;
  memoryStats: ReturnType<typeof getMemoryStats>;
} {
  const champion = state.fitnessScores.get(state.activeGenomeId);

  const fitnessHistory = state.generations.map(g => ({
    generation: g.number,
    best: g.bestFitness,
    avg: g.averageFitness,
  }));

  const insights = extractInsights(state.memories);
  const topPatterns = insights.slice(0, 10).map(i => ({
    description: i.pattern.description,
    confidence: i.pattern.confidence,
    strength: i.strength,
  }));

  return {
    generation: state.currentGeneration,
    totalInteractions: state.totalInteractions,
    championFitness: champion?.overall ?? 0.5,
    fitnessHistory,
    topPatterns,
    activeStrategy: getActiveStrategy(state),
    health: state.health,
    memoryStats: getMemoryStats(state.memories),
  };
}

/** Get recommendations based on consolidated memories */
export function getLearnedRecommendations(state: SelfEvolvingState): {
  contentPreferences: string[];
  optimalTiming: string[];
  difficultyGuidance: string[];
  engagementInsights: string[];
} {
  const consolidated = findConsolidatedMemories(state.memories, 'short-term');

  const contentPreferences: string[] = [];
  const optimalTiming: string[] = [];
  const difficultyGuidance: string[] = [];
  const engagementInsights: string[] = [];

  for (const memory of consolidated) {
    switch (memory.pattern.type) {
      case 'content-affinity':
        contentPreferences.push(memory.pattern.description);
        break;
      case 'time-pattern':
      case 'session-rhythm':
        optimalTiming.push(memory.pattern.description);
        break;
      case 'difficulty-sweet-spot':
        difficultyGuidance.push(memory.pattern.description);
        break;
      case 'engagement-trigger':
      case 'user-preference':
        engagementInsights.push(memory.pattern.description);
        break;
    }
  }

  return {
    contentPreferences: contentPreferences.slice(0, 5),
    optimalTiming: optimalTiming.slice(0, 5),
    difficultyGuidance: difficultyGuidance.slice(0, 5),
    engagementInsights: engagementInsights.slice(0, 5),
  };
}

// ---------------------------------------------------------------------------
// Serialization - For persistence
// ---------------------------------------------------------------------------

/** Serialize state to a plain object for storage */
export function serializeState(state: SelfEvolvingState): Record<string, unknown> {
  const population: Record<string, unknown> = {};
  for (const [id, genome] of state.population) {
    const genes: Record<string, unknown> = {};
    for (const [geneId, gene] of genome.genes) {
      genes[geneId] = gene;
    }
    population[id] = { ...genome, genes, createdAt: genome.createdAt.toISOString() };
  }

  const fitnessScores: Record<string, unknown> = {};
  for (const [id, score] of state.fitnessScores) {
    const byDomain: Record<string, number> = {};
    for (const [d, v] of score.byDomain) byDomain[d] = v;
    const byInteraction: Record<string, number> = {};
    for (const [t, v] of score.byInteraction) byInteraction[t] = v;
    fitnessScores[id] = {
      ...score,
      byDomain,
      byInteraction,
      calculatedAt: score.calculatedAt.toISOString(),
    };
  }

  const memories: Record<string, unknown> = {};
  for (const [id, memory] of state.memories) {
    memories[id] = {
      ...memory,
      createdAt: memory.createdAt.toISOString(),
      lastAccessedAt: memory.lastAccessedAt.toISOString(),
      nextReviewAt: memory.nextReviewAt.toISOString(),
    };
  }

  return {
    config: state.config,
    currentGeneration: state.currentGeneration,
    population,
    activeGenomeId: state.activeGenomeId,
    fitnessScores,
    pendingObservations: state.pendingObservations.map(o => ({
      ...o,
      timestamp: o.timestamp.toISOString(),
    })),
    memories,
    generations: state.generations.map(g => ({
      ...g,
      createdAt: g.createdAt.toISOString(),
    })),
    health: {
      ...state.health,
      recentActions: state.health.recentActions.map(a => ({
        ...a,
        timestamp: a.timestamp.toISOString(),
      })),
      lastCheckAt: state.health.lastCheckAt.toISOString(),
    },
    totalInteractions: state.totalInteractions,
    initializedAt: state.initializedAt.toISOString(),
    lastEvolutionAt: state.lastEvolutionAt.toISOString(),
    lastConsolidationAt: state.lastConsolidationAt.toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Sample Data - For demonstration and testing
// ---------------------------------------------------------------------------

/** Create a sample state with some pre-evolved history */
export function createSampleEvolvingState(): SelfEvolvingState {
  const state = initializeSelfEvolvingState();

  // Simulate some interactions to demonstrate the system working
  const sampleInteractions: { type: InteractionType; score: number; context: InteractionContext }[] = [
    { type: 'content-view', score: 0.7, context: { bodySystem: 'cardiovascular', complexityLevel: 3 } },
    { type: 'content-completion', score: 0.9, context: { bodySystem: 'cardiovascular', complexityLevel: 3 } },
    { type: 'quiz-answer', score: 0.8, context: { bodySystem: 'cardiovascular', complexityLevel: 3 } },
    { type: 'cue-engagement', score: 0.6, context: { bodySystem: 'nervous', timeOfDay: 'evening' } },
    { type: 'session-duration', score: 0.75, context: { sessionMinutes: 22 } },
    { type: 'return-visit', score: 1.0, context: { sessionNumber: 2 } },
    { type: 'quiz-score', score: 0.85, context: { bodySystem: 'respiratory', complexityLevel: 2 } },
    { type: 'bookmark-creation', score: 0.8, context: { bodySystem: 'cardiovascular' } },
    { type: 'exploration-depth', score: 0.6, context: { bodySystem: 'digestive' } },
    { type: 'content-view', score: 0.5, context: { bodySystem: 'endocrine', complexityLevel: 4 } },
  ];

  let evolved = state;
  for (const interaction of sampleInteractions) {
    evolved = recordInteraction(evolved, interaction.type, interaction.score, interaction.context);
  }

  return evolved;
}
