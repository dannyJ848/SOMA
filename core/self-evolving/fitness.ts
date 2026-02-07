/**
 * Fitness Module - Evaluation and Natural Selection
 *
 * Evaluates how well each strategy genome performs based on user
 * interactions. Implements selection mechanisms for choosing which
 * genomes survive and reproduce.
 *
 * Biological analogy:
 * - Fitness = how well an organism survives in its environment
 * - Selection pressure = competition between strategies
 * - Environmental feedback = user engagement signals
 * - Adaptation = strategies that match user needs score higher
 */

import type {
  FitnessObservation,
  FitnessScore,
  GeneDomain,
  Genome,
  InteractionContext,
  InteractionType,
  SelectionStrategy,
} from './types';

// ---------------------------------------------------------------------------
// Observation Creation
// ---------------------------------------------------------------------------

let observationCounter = 0;

function generateObservationId(): string {
  observationCounter++;
  return `obs-${Date.now()}-${observationCounter}`;
}

/** Create a fitness observation from a user interaction */
export function createObservation(
  genomeId: string,
  interactionType: InteractionType,
  score: number,
  context: InteractionContext = {},
): FitnessObservation {
  return {
    id: generateObservationId(),
    genomeId,
    interactionType,
    score: Math.max(0, Math.min(1, score)),
    weight: 1.0,
    context,
    timestamp: new Date(),
  };
}

// ---------------------------------------------------------------------------
// Interaction Scoring - Converting raw events to fitness scores
// ---------------------------------------------------------------------------

/** Weight of each interaction type toward overall fitness */
const INTERACTION_WEIGHTS: Record<InteractionType, number> = {
  'content-view': 0.3,
  'content-completion': 0.8,
  'quiz-answer': 0.7,
  'quiz-score': 0.9,
  'cue-engagement': 0.6,
  'cue-dismissal': -0.3,
  'bookmark-creation': 0.5,
  'session-duration': 0.4,
  'return-visit': 1.0,
  'exploration-depth': 0.5,
  'feedback-positive': 1.0,
  'feedback-negative': -0.8,
};

/** Map interaction types to the gene domains they most reflect */
const INTERACTION_TO_DOMAIN: Record<InteractionType, GeneDomain[]> = {
  'content-view': ['content-selection', 'personalization'],
  'content-completion': ['content-selection', 'pacing', 'difficulty'],
  'quiz-answer': ['difficulty', 'reinforcement'],
  'quiz-score': ['difficulty', 'reinforcement', 'pacing'],
  'cue-engagement': ['timing', 'engagement'],
  'cue-dismissal': ['timing', 'engagement'],
  'bookmark-creation': ['content-selection', 'personalization'],
  'session-duration': ['pacing', 'engagement', 'timing'],
  'return-visit': ['engagement', 'pacing'],
  'exploration-depth': ['exploration', 'content-selection'],
  'feedback-positive': ['content-selection', 'engagement', 'personalization'],
  'feedback-negative': ['content-selection', 'engagement', 'personalization'],
};

// ---------------------------------------------------------------------------
// Fitness Evaluation
// ---------------------------------------------------------------------------

/** Calculate aggregate fitness score for a genome from its observations */
export function evaluateFitness(
  genomeId: string,
  observations: FitnessObservation[],
  temporalDecayFactor: number = 0.95,
): FitnessScore {
  const genomeObs = observations.filter(o => o.genomeId === genomeId);

  if (genomeObs.length === 0) {
    return createEmptyFitnessScore(genomeId);
  }

  // Sort by timestamp (most recent first)
  genomeObs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  // Apply temporal decay: recent observations weight more
  const weighted = genomeObs.map((obs, index) => ({
    ...obs,
    weight: obs.weight * Math.pow(temporalDecayFactor, index),
  }));

  // Calculate overall fitness (weighted average)
  let totalWeightedScore = 0;
  let totalWeight = 0;

  for (const obs of weighted) {
    const interactionWeight = INTERACTION_WEIGHTS[obs.interactionType];
    const combinedWeight = Math.abs(interactionWeight) * obs.weight;

    // Negative interaction weights flip the score contribution
    const effectiveScore = interactionWeight >= 0
      ? obs.score * combinedWeight
      : (1 - obs.score) * combinedWeight;

    totalWeightedScore += effectiveScore;
    totalWeight += combinedWeight;
  }

  const overall = totalWeight > 0 ? totalWeightedScore / totalWeight : 0;

  // Calculate per-domain fitness
  const byDomain = calculateDomainFitness(weighted);

  // Calculate per-interaction fitness
  const byInteraction = calculateInteractionFitness(weighted);

  // Calculate confidence based on observation count (log scale)
  const confidence = Math.min(1.0, Math.log10(genomeObs.length + 1) / 2);

  // Calculate trend from recent vs older observations
  const trend = calculateTrend(weighted);

  return {
    genomeId,
    overall: Math.max(0, Math.min(1, overall)),
    byDomain,
    byInteraction,
    observationCount: genomeObs.length,
    confidence,
    trend,
    calculatedAt: new Date(),
  };
}

/** Create an empty fitness score for unevaluated genomes */
function createEmptyFitnessScore(genomeId: string): FitnessScore {
  return {
    genomeId,
    overall: 0.5, // Neutral starting fitness
    byDomain: new Map(),
    byInteraction: new Map(),
    observationCount: 0,
    confidence: 0,
    trend: 'stable',
    calculatedAt: new Date(),
  };
}

/** Calculate fitness broken down by gene domain */
function calculateDomainFitness(
  observations: FitnessObservation[],
): Map<GeneDomain, number> {
  const domainScores = new Map<GeneDomain, { total: number; weight: number }>();

  for (const obs of observations) {
    const domains = INTERACTION_TO_DOMAIN[obs.interactionType];
    for (const domain of domains) {
      const current = domainScores.get(domain) ?? { total: 0, weight: 0 };
      current.total += obs.score * obs.weight;
      current.weight += obs.weight;
      domainScores.set(domain, current);
    }
  }

  const result = new Map<GeneDomain, number>();
  for (const [domain, scores] of domainScores) {
    result.set(domain, scores.weight > 0 ? scores.total / scores.weight : 0.5);
  }
  return result;
}

/** Calculate fitness broken down by interaction type */
function calculateInteractionFitness(
  observations: FitnessObservation[],
): Map<InteractionType, number> {
  const typeScores = new Map<InteractionType, { total: number; weight: number }>();

  for (const obs of observations) {
    const current = typeScores.get(obs.interactionType) ?? { total: 0, weight: 0 };
    current.total += obs.score * obs.weight;
    current.weight += obs.weight;
    typeScores.set(obs.interactionType, current);
  }

  const result = new Map<InteractionType, number>();
  for (const [type, scores] of typeScores) {
    result.set(type, scores.weight > 0 ? scores.total / scores.weight : 0.5);
  }
  return result;
}

/** Calculate whether fitness is improving, stable, or declining */
function calculateTrend(
  observations: FitnessObservation[],
): 'improving' | 'stable' | 'declining' {
  if (observations.length < 4) return 'stable';

  const midpoint = Math.floor(observations.length / 2);
  const recent = observations.slice(0, midpoint);
  const older = observations.slice(midpoint);

  const recentAvg = recent.reduce((sum, o) => sum + o.score, 0) / recent.length;
  const olderAvg = older.reduce((sum, o) => sum + o.score, 0) / older.length;

  const threshold = 0.05;
  if (recentAvg > olderAvg + threshold) return 'improving';
  if (recentAvg < olderAvg - threshold) return 'declining';
  return 'stable';
}

// ---------------------------------------------------------------------------
// Selection Mechanisms - Choosing parents for next generation
// ---------------------------------------------------------------------------

/** Select a parent genome using the specified strategy */
export function selectParent(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
  strategy: SelectionStrategy,
  tournamentSize: number = 3,
): Genome {
  switch (strategy) {
    case 'tournament':
      return tournamentSelection(population, fitnessScores, tournamentSize);
    case 'roulette':
      return rouletteSelection(population, fitnessScores);
    case 'rank':
      return rankSelection(population, fitnessScores);
    case 'elitist':
      return elitistSelection(population, fitnessScores);
  }
}

/** Tournament selection: pick random subset, return fittest */
function tournamentSelection(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
  tournamentSize: number,
): Genome {
  const contestants: Genome[] = [];

  for (let i = 0; i < Math.min(tournamentSize, population.length); i++) {
    const idx = Math.floor(Math.random() * population.length);
    contestants.push(population[idx]);
  }

  return contestants.reduce((best, current) => {
    const bestFitness = fitnessScores.get(best.id)?.overall ?? 0.5;
    const currentFitness = fitnessScores.get(current.id)?.overall ?? 0.5;
    return currentFitness > bestFitness ? current : best;
  });
}

/** Roulette wheel selection: probability proportional to fitness */
function rouletteSelection(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
): Genome {
  const fitnesses = population.map(g => Math.max(0.01, fitnessScores.get(g.id)?.overall ?? 0.5));
  const totalFitness = fitnesses.reduce((sum, f) => sum + f, 0);

  let spin = Math.random() * totalFitness;
  for (let i = 0; i < population.length; i++) {
    spin -= fitnesses[i];
    if (spin <= 0) return population[i];
  }

  return population[population.length - 1];
}

/** Rank-based selection: probability based on rank, not raw fitness */
function rankSelection(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
): Genome {
  const sorted = [...population].sort((a, b) => {
    const fa = fitnessScores.get(a.id)?.overall ?? 0.5;
    const fb = fitnessScores.get(b.id)?.overall ?? 0.5;
    return fb - fa;
  });

  // Linear ranking: P(i) proportional to (N - rank)
  const n = sorted.length;
  const totalRank = (n * (n + 1)) / 2;
  let spin = Math.random() * totalRank;

  for (let i = 0; i < n; i++) {
    spin -= (n - i);
    if (spin <= 0) return sorted[i];
  }

  return sorted[0];
}

/** Elitist selection: always return the fittest */
function elitistSelection(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
): Genome {
  return population.reduce((best, current) => {
    const bestFitness = fitnessScores.get(best.id)?.overall ?? 0.5;
    const currentFitness = fitnessScores.get(current.id)?.overall ?? 0.5;
    return currentFitness > bestFitness ? current : best;
  });
}

// ---------------------------------------------------------------------------
// Population-Level Fitness Analysis
// ---------------------------------------------------------------------------

/** Get the top N genomes by fitness */
export function getElites(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
  count: number,
): Genome[] {
  return [...population]
    .sort((a, b) => {
      const fa = fitnessScores.get(a.id)?.overall ?? 0;
      const fb = fitnessScores.get(b.id)?.overall ?? 0;
      return fb - fa;
    })
    .slice(0, count);
}

/** Get the genome with the highest fitness */
export function getChampion(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
): Genome | null {
  if (population.length === 0) return null;
  const elites = getElites(population, fitnessScores, 1);
  return elites[0] ?? null;
}

/** Calculate population-level fitness statistics */
export function getPopulationStats(
  population: Genome[],
  fitnessScores: Map<string, FitnessScore>,
): {
  best: number;
  worst: number;
  average: number;
  median: number;
  standardDeviation: number;
  evaluatedCount: number;
} {
  const fitnesses = population
    .map(g => fitnessScores.get(g.id))
    .filter((f): f is FitnessScore => f !== undefined && f.observationCount > 0)
    .map(f => f.overall);

  if (fitnesses.length === 0) {
    return {
      best: 0,
      worst: 0,
      average: 0,
      median: 0,
      standardDeviation: 0,
      evaluatedCount: 0,
    };
  }

  fitnesses.sort((a, b) => a - b);

  const sum = fitnesses.reduce((s, f) => s + f, 0);
  const avg = sum / fitnesses.length;
  const variance =
    fitnesses.reduce((s, f) => s + Math.pow(f - avg, 2), 0) / fitnesses.length;

  return {
    best: fitnesses[fitnesses.length - 1],
    worst: fitnesses[0],
    average: avg,
    median: fitnesses[Math.floor(fitnesses.length / 2)],
    standardDeviation: Math.sqrt(variance),
    evaluatedCount: fitnesses.length,
  };
}

/** Identify which gene domains are underperforming */
export function identifyWeakDomains(
  fitnessScore: FitnessScore,
  threshold: number = 0.4,
): GeneDomain[] {
  const weak: GeneDomain[] = [];
  for (const [domain, score] of fitnessScore.byDomain) {
    if (score < threshold) {
      weak.push(domain);
    }
  }
  return weak;
}

/** Compare two genomes' fitness across all domains */
export function compareFitness(
  scoreA: FitnessScore,
  scoreB: FitnessScore,
): {
  overallWinner: string;
  domainWinners: Map<GeneDomain, string>;
  significantDifference: boolean;
} {
  const overallWinner = scoreA.overall >= scoreB.overall ? scoreA.genomeId : scoreB.genomeId;

  const domainWinners = new Map<GeneDomain, string>();
  const allDomains = new Set([...scoreA.byDomain.keys(), ...scoreB.byDomain.keys()]);

  for (const domain of allDomains) {
    const a = scoreA.byDomain.get(domain) ?? 0.5;
    const b = scoreB.byDomain.get(domain) ?? 0.5;
    domainWinners.set(domain, a >= b ? scoreA.genomeId : scoreB.genomeId);
  }

  const significantDifference = Math.abs(scoreA.overall - scoreB.overall) > 0.1;

  return { overallWinner, domainWinners, significantDifference };
}
