/**
 * Self-Evolving Algorithm Type Definitions
 *
 * A biologically-inspired evolutionary system that gets smarter over time.
 * Uses genetic algorithms, biological memory consolidation, and adaptive
 * fitness landscapes to continuously improve learning recommendations,
 * content delivery, and user engagement strategies.
 *
 * Key biological metaphors:
 * - Genome: A set of tunable strategy parameters (genes)
 * - Population: Multiple competing strategy variants
 * - Fitness: How well a strategy performs for the user
 * - Selection: Fitter strategies survive and reproduce
 * - Mutation: Small random changes explore new approaches
 * - Crossover: Combining traits from successful strategies
 * - Memory: Short-term observations consolidate into long-term patterns
 * - Homeostasis: The system self-regulates to maintain stability
 */

// ---------------------------------------------------------------------------
// Gene Types - The atomic units of evolvable behavior
// ---------------------------------------------------------------------------

/** The data type a gene encodes */
export type GeneValueType = 'float' | 'integer' | 'boolean' | 'categorical';

/** A single tunable parameter in a strategy genome */
export interface Gene {
  /** Unique identifier for this gene */
  id: string;
  /** Human-readable name */
  name: string;
  /** What this gene controls */
  description: string;
  /** Data type */
  valueType: GeneValueType;
  /** Current value */
  value: number | boolean | string;
  /** Minimum value (for numeric genes) */
  min?: number;
  /** Maximum value (for numeric genes) */
  max?: number;
  /** Step size for mutations (for numeric genes) */
  mutationStep?: number;
  /** Allowed values (for categorical genes) */
  allowedValues?: string[];
  /** How likely this gene is to mutate (0-1) */
  mutationRate: number;
  /** Which behavioral domain this gene affects */
  domain: GeneDomain;
}

/** Behavioral domains that genes can affect */
export type GeneDomain =
  | 'content-selection'    // What content to show
  | 'timing'              // When to present content
  | 'difficulty'          // How challenging to make content
  | 'engagement'          // How to engage the user
  | 'pacing'              // Learning speed/rhythm
  | 'reinforcement'       // How to reinforce learned material
  | 'exploration'         // How much to explore vs exploit
  | 'personalization';    // How much to personalize

// ---------------------------------------------------------------------------
// Genome - A complete strategy configuration
// ---------------------------------------------------------------------------

/** A complete set of genes defining one strategy variant */
export interface Genome {
  /** Unique identifier */
  id: string;
  /** Generation number this genome was created in */
  generation: number;
  /** Parent genome IDs (1 for mutation, 2 for crossover, 0 for random) */
  parentIds: string[];
  /** The genes comprising this genome */
  genes: Map<string, Gene>;
  /** Creation timestamp */
  createdAt: Date;
  /** How this genome was created */
  origin: GenomeOrigin;
  /** Lineage depth (generations from original random seed) */
  lineageDepth: number;
  /** Tags for categorization */
  tags: string[];
}

/** How a genome came into existence */
export type GenomeOrigin =
  | 'random'       // Randomly generated
  | 'mutation'     // Mutated from a single parent
  | 'crossover'    // Crossover of two parents
  | 'elite'        // Preserved unchanged from previous generation
  | 'immigrant'    // Introduced from external source
  | 'seeded';      // Initial seed genome with domain defaults

// ---------------------------------------------------------------------------
// Fitness - Measuring how well a strategy performs
// ---------------------------------------------------------------------------

/** A single fitness observation from a user interaction */
export interface FitnessObservation {
  /** Unique ID */
  id: string;
  /** The genome being evaluated */
  genomeId: string;
  /** What type of interaction was observed */
  interactionType: InteractionType;
  /** Raw score from this interaction (0-1) */
  score: number;
  /** Weight of this observation (recent = higher) */
  weight: number;
  /** Context of the interaction */
  context: InteractionContext;
  /** When this was observed */
  timestamp: Date;
}

/** Types of user interactions that generate fitness signals */
export type InteractionType =
  | 'content-view'         // User viewed educational content
  | 'content-completion'   // User finished reading/watching
  | 'quiz-answer'          // User answered a quiz question
  | 'quiz-score'           // Overall quiz performance
  | 'cue-engagement'       // User engaged with a learning cue
  | 'cue-dismissal'        // User dismissed a learning cue
  | 'bookmark-creation'    // User bookmarked content
  | 'session-duration'     // Length of learning session
  | 'return-visit'         // User came back to learn more
  | 'exploration-depth'    // How deep the user explored
  | 'feedback-positive'    // Explicit positive feedback
  | 'feedback-negative';   // Explicit negative feedback

/** Context surrounding an interaction */
export interface InteractionContext {
  /** Which body system was being studied */
  bodySystem?: string;
  /** Content complexity level (1-5) */
  complexityLevel?: number;
  /** Time of day */
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'night';
  /** Session number for this user */
  sessionNumber?: number;
  /** How long the user has been active this session (minutes) */
  sessionMinutes?: number;
  /** Any additional context key-value pairs */
  metadata?: Record<string, string | number | boolean>;
}

/** Aggregated fitness score for a genome */
export interface FitnessScore {
  /** The genome this score belongs to */
  genomeId: string;
  /** Overall fitness (0-1, higher is better) */
  overall: number;
  /** Fitness broken down by domain */
  byDomain: Map<GeneDomain, number>;
  /** Fitness broken down by interaction type */
  byInteraction: Map<InteractionType, number>;
  /** Number of observations contributing to this score */
  observationCount: number;
  /** Confidence in this score (0-1, based on observation count) */
  confidence: number;
  /** Trend direction over recent observations */
  trend: 'improving' | 'stable' | 'declining';
  /** When this score was last calculated */
  calculatedAt: Date;
}

// ---------------------------------------------------------------------------
// Memory System - Biological memory consolidation
// ---------------------------------------------------------------------------

/** Memory durability tiers (inspired by biological memory) */
export type MemoryTier =
  | 'sensory'      // Ultra-short: raw observation, <30 seconds
  | 'working'      // Short-term: active processing, minutes
  | 'short-term'   // Hours to days, needs consolidation
  | 'long-term'    // Consolidated pattern, persists weeks+
  | 'permanent';   // Core pattern, highly reinforced

/** A memory unit - an observed pattern or learned association */
export interface Memory {
  /** Unique identifier */
  id: string;
  /** What was observed/learned */
  pattern: MemoryPattern;
  /** Current durability tier */
  tier: MemoryTier;
  /** Strength of this memory (0-1) */
  strength: number;
  /** How many times this pattern has been reinforced */
  reinforcementCount: number;
  /** When this memory was first created */
  createdAt: Date;
  /** When this memory was last accessed/reinforced */
  lastAccessedAt: Date;
  /** When this memory should next be reviewed (spaced repetition) */
  nextReviewAt: Date;
  /** Decay rate (how fast strength decreases without reinforcement) */
  decayRate: number;
  /** Connections to other memories */
  associations: MemoryAssociation[];
}

/** The content of what was learned */
export interface MemoryPattern {
  /** Type of pattern */
  type: PatternType;
  /** Human-readable description */
  description: string;
  /** The pattern data */
  data: PatternData;
  /** Confidence in this pattern (0-1) */
  confidence: number;
  /** Number of supporting observations */
  supportCount: number;
  /** Number of contradicting observations */
  contradictionCount: number;
}

/** Types of patterns the system can learn */
export type PatternType =
  | 'user-preference'       // User prefers X over Y
  | 'time-pattern'          // User engages best at certain times
  | 'difficulty-sweet-spot' // Optimal challenge level for user
  | 'content-affinity'      // User likes certain content types
  | 'session-rhythm'        // Preferred session length/frequency
  | 'learning-sequence'     // Effective topic ordering
  | 'engagement-trigger'    // What triggers engagement
  | 'fatigue-signal'        // Signs of user fatigue
  | 'correlation'           // A correlates with B
  | 'causal'                // A causes B (with confidence)
  | 'contextual';           // Behavior changes by context

/** The actual data stored in a pattern */
export interface PatternData {
  /** Primary subject of the pattern */
  subject: string;
  /** Relation or action */
  predicate: string;
  /** Object/target of the pattern */
  object: string;
  /** Numeric value if applicable */
  value?: number;
  /** Conditions under which this pattern holds */
  conditions?: Record<string, string | number | boolean>;
}

/** A connection between two memories */
export interface MemoryAssociation {
  /** ID of the associated memory */
  targetMemoryId: string;
  /** Type of association */
  type: 'reinforces' | 'contradicts' | 'extends' | 'contextualizes';
  /** Strength of the association (0-1) */
  strength: number;
}

// ---------------------------------------------------------------------------
// Evolution - Population-level dynamics
// ---------------------------------------------------------------------------

/** Configuration for the evolutionary process */
export interface EvolutionConfig {
  /** Size of the strategy population */
  populationSize: number;
  /** How many top performers to keep unchanged (elitism) */
  eliteCount: number;
  /** Fraction of population created via crossover (0-1) */
  crossoverRate: number;
  /** Fraction of population created via mutation (0-1) */
  mutationRate: number;
  /** Fraction of population randomly generated (immigration) */
  immigrationRate: number;
  /** Minimum observations before a genome can be evaluated */
  minObservationsForEvaluation: number;
  /** How much to weight recent observations vs older ones */
  temporalDecayFactor: number;
  /** Minimum confidence to consider a fitness score valid */
  minFitnessConfidence: number;
  /** How many generations of history to keep */
  maxGenerationHistory: number;
  /** Interval between evolution cycles (in interactions) */
  evolutionInterval: number;
  /** Memory consolidation interval (in minutes) */
  memoryConsolidationInterval: number;
  /** Maximum memories to retain per tier */
  maxMemoriesPerTier: number;
  /** Whether to allow the system to self-modify its own config */
  selfModifyConfig: boolean;
}

/** A single generation in the evolutionary history */
export interface Generation {
  /** Generation number */
  number: number;
  /** Genomes in this generation */
  genomeIds: string[];
  /** Best fitness in this generation */
  bestFitness: number;
  /** Average fitness in this generation */
  averageFitness: number;
  /** Worst fitness in this generation */
  worstFitness: number;
  /** Diversity score (0-1, genetic diversity of population) */
  diversity: number;
  /** When this generation was created */
  createdAt: Date;
  /** The genome ID that won this generation */
  championId: string;
}

/** Selection strategies for choosing parents */
export type SelectionStrategy =
  | 'tournament'     // Random subset, pick best
  | 'roulette'       // Probability proportional to fitness
  | 'rank'           // Selection based on rank, not raw fitness
  | 'elitist';       // Always pick the best

// ---------------------------------------------------------------------------
// Homeostasis - Self-regulation and stability
// ---------------------------------------------------------------------------

/** System health metrics for self-monitoring */
export interface SystemHealth {
  /** Population genetic diversity (0-1, low = stagnation risk) */
  geneticDiversity: number;
  /** Fitness improvement rate over recent generations */
  fitnessVelocity: number;
  /** Memory system utilization (0-1) */
  memoryUtilization: number;
  /** Ratio of reinforced vs decayed memories */
  memoryRetentionRate: number;
  /** Average confidence across all fitness scores */
  averageFitnessConfidence: number;
  /** Number of active competing strategies */
  activeStrategyCount: number;
  /** Whether the system is in a stagnation state */
  isStagnating: boolean;
  /** Whether the system detected a concept drift */
  conceptDriftDetected: boolean;
  /** Self-regulation actions taken */
  recentActions: HomeostasisAction[];
  /** Last health check timestamp */
  lastCheckAt: Date;
}

/** Actions the system takes to self-regulate */
export interface HomeostasisAction {
  /** What action was taken */
  type: HomeostasisActionType;
  /** Why it was taken */
  reason: string;
  /** When it was taken */
  timestamp: Date;
  /** Parameters of the action */
  params: Record<string, number | string | boolean>;
}

/** Types of self-regulation actions */
export type HomeostasisActionType =
  | 'increase-mutation-rate'    // Stagnation detected, explore more
  | 'decrease-mutation-rate'    // Good progress, exploit more
  | 'increase-population'      // Need more diversity
  | 'decrease-population'      // Too much noise, focus
  | 'inject-immigrants'        // Fresh genetic material needed
  | 'consolidate-memory'       // Move memories to longer-term storage
  | 'prune-memories'           // Remove weak/contradicted memories
  | 'reset-stagnant-genomes'   // Replace stuck genomes
  | 'adjust-selection-pressure' // Change how aggressively we select
  | 'trigger-evolution-cycle';  // Force an evolution step

// ---------------------------------------------------------------------------
// Top-Level State
// ---------------------------------------------------------------------------

/** Complete state of the self-evolving system */
export interface SelfEvolvingState {
  /** System configuration */
  config: EvolutionConfig;
  /** Current generation number */
  currentGeneration: number;
  /** All genomes in the current population */
  population: Map<string, Genome>;
  /** The currently active genome (being used for decisions) */
  activeGenomeId: string;
  /** Fitness scores for all evaluated genomes */
  fitnessScores: Map<string, FitnessScore>;
  /** Pending fitness observations not yet aggregated */
  pendingObservations: FitnessObservation[];
  /** All memories across all tiers */
  memories: Map<string, Memory>;
  /** Generation history */
  generations: Generation[];
  /** System health metrics */
  health: SystemHealth;
  /** Total interactions processed */
  totalInteractions: number;
  /** When the system was initialized */
  initializedAt: Date;
  /** When the last evolution cycle ran */
  lastEvolutionAt: Date;
  /** When the last memory consolidation ran */
  lastConsolidationAt: Date;
}
