/**
 * Genome Module - Evolvable Strategy Genomes
 *
 * Handles creation, mutation, crossover, and management of strategy genomes.
 * Each genome is a collection of genes (tunable parameters) that define
 * how the system behaves for content selection, timing, difficulty, etc.
 *
 * Biological analogy:
 * - Gene = a single tunable parameter (e.g., "preferred quiz difficulty")
 * - Genome = complete set of genes defining one strategy
 * - Mutation = small random change to explore nearby strategies
 * - Crossover = combining genes from two successful parents
 */

import type {
  Gene,
  GeneDomain,
  Genome,
  GenomeOrigin,
} from './types';

// ---------------------------------------------------------------------------
// Gene Definitions - The building blocks of strategy
// ---------------------------------------------------------------------------

/** Default gene definitions for all tunable parameters */
export const DEFAULT_GENE_DEFINITIONS: Omit<Gene, 'value'>[] = [
  // Content Selection genes
  {
    id: 'content-relevance-weight',
    name: 'Relevance Weight',
    description: 'How much to weight content relevance to user health profile',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.1,
    mutationRate: 0.15,
    domain: 'content-selection',
  },
  {
    id: 'content-novelty-weight',
    name: 'Novelty Weight',
    description: 'How much to weight new/unseen content over familiar topics',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.1,
    mutationRate: 0.15,
    domain: 'content-selection',
  },
  {
    id: 'content-depth-preference',
    name: 'Depth Preference',
    description: 'Preference for depth (1) vs breadth (0) in content presentation',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.1,
    mutationRate: 0.1,
    domain: 'content-selection',
  },

  // Timing genes
  {
    id: 'cue-frequency-minutes',
    name: 'Cue Frequency',
    description: 'Minutes between learning cue presentations',
    valueType: 'integer',
    min: 5,
    max: 120,
    mutationStep: 5,
    mutationRate: 0.2,
    domain: 'timing',
  },
  {
    id: 'session-optimal-minutes',
    name: 'Optimal Session Length',
    description: 'Target session duration in minutes before suggesting break',
    valueType: 'integer',
    min: 5,
    max: 90,
    mutationStep: 5,
    mutationRate: 0.15,
    domain: 'timing',
  },
  {
    id: 'review-spacing-factor',
    name: 'Review Spacing Factor',
    description: 'Multiplier for spaced repetition intervals',
    valueType: 'float',
    min: 1.0,
    max: 4.0,
    mutationStep: 0.2,
    mutationRate: 0.15,
    domain: 'timing',
  },

  // Difficulty genes
  {
    id: 'difficulty-target-success-rate',
    name: 'Target Success Rate',
    description: 'Desired quiz success rate (flow state sweet spot)',
    valueType: 'float',
    min: 0.5,
    max: 0.95,
    mutationStep: 0.05,
    mutationRate: 0.1,
    domain: 'difficulty',
  },
  {
    id: 'difficulty-ramp-speed',
    name: 'Difficulty Ramp Speed',
    description: 'How quickly to increase difficulty after success streaks',
    valueType: 'float',
    min: 0.1,
    max: 1.0,
    mutationStep: 0.1,
    mutationRate: 0.15,
    domain: 'difficulty',
  },
  {
    id: 'complexity-auto-adjust',
    name: 'Auto-Adjust Complexity',
    description: 'Whether to automatically adjust content complexity level',
    valueType: 'boolean',
    mutationRate: 0.05,
    domain: 'difficulty',
  },

  // Engagement genes
  {
    id: 'gamification-intensity',
    name: 'Gamification Intensity',
    description: 'How much gamification to apply (achievements, streaks)',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.15,
    mutationRate: 0.15,
    domain: 'engagement',
  },
  {
    id: 'encouragement-frequency',
    name: 'Encouragement Frequency',
    description: 'How often to show positive reinforcement messages',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.1,
    mutationRate: 0.1,
    domain: 'engagement',
  },
  {
    id: 'notification-style',
    name: 'Notification Style',
    description: 'Preferred notification presentation style',
    valueType: 'categorical',
    allowedValues: ['subtle', 'moderate', 'prominent'],
    mutationRate: 0.1,
    domain: 'engagement',
  },

  // Pacing genes
  {
    id: 'new-topics-per-session',
    name: 'New Topics Per Session',
    description: 'Maximum new topics to introduce per learning session',
    valueType: 'integer',
    min: 1,
    max: 10,
    mutationStep: 1,
    mutationRate: 0.15,
    domain: 'pacing',
  },
  {
    id: 'review-to-new-ratio',
    name: 'Review to New Ratio',
    description: 'Ratio of review content to new content (0=all new, 1=all review)',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.1,
    mutationRate: 0.15,
    domain: 'pacing',
  },

  // Reinforcement genes
  {
    id: 'immediate-feedback',
    name: 'Immediate Feedback',
    description: 'Whether to give immediate feedback on quiz answers',
    valueType: 'boolean',
    mutationRate: 0.05,
    domain: 'reinforcement',
  },
  {
    id: 'spaced-repetition-aggressiveness',
    name: 'Spaced Repetition Aggressiveness',
    description: 'How aggressively to schedule review (higher = more frequent)',
    valueType: 'float',
    min: 0.1,
    max: 1.0,
    mutationStep: 0.1,
    mutationRate: 0.15,
    domain: 'reinforcement',
  },

  // Exploration vs Exploitation genes
  {
    id: 'exploration-rate',
    name: 'Exploration Rate',
    description: 'Probability of trying new/random content vs optimal (epsilon-greedy)',
    valueType: 'float',
    min: 0.01,
    max: 0.5,
    mutationStep: 0.05,
    mutationRate: 0.2,
    domain: 'exploration',
  },
  {
    id: 'exploration-decay',
    name: 'Exploration Decay',
    description: 'How much to reduce exploration over time (0=never, 1=fast)',
    valueType: 'float',
    min: 0,
    max: 0.1,
    mutationStep: 0.01,
    mutationRate: 0.1,
    domain: 'exploration',
  },

  // Personalization genes
  {
    id: 'personalization-weight',
    name: 'Personalization Weight',
    description: 'How much to personalize content to user health profile',
    valueType: 'float',
    min: 0,
    max: 1,
    mutationStep: 0.1,
    mutationRate: 0.1,
    domain: 'personalization',
  },
  {
    id: 'health-context-depth',
    name: 'Health Context Depth',
    description: 'How much health context to include in AI prompts',
    valueType: 'categorical',
    allowedValues: ['minimal', 'moderate', 'comprehensive'],
    mutationRate: 0.1,
    domain: 'personalization',
  },
];

// ---------------------------------------------------------------------------
// ID Generation
// ---------------------------------------------------------------------------

let genomeCounter = 0;

function generateGenomeId(): string {
  genomeCounter++;
  return `genome-${Date.now()}-${genomeCounter}`;
}

// ---------------------------------------------------------------------------
// Random Value Generators
// ---------------------------------------------------------------------------

/** Generate a random value appropriate for a gene's type and constraints */
export function randomGeneValue(geneDef: Omit<Gene, 'value'>): number | boolean | string {
  switch (geneDef.valueType) {
    case 'float': {
      const min = geneDef.min ?? 0;
      const max = geneDef.max ?? 1;
      return min + Math.random() * (max - min);
    }
    case 'integer': {
      const min = geneDef.min ?? 0;
      const max = geneDef.max ?? 100;
      return Math.floor(min + Math.random() * (max - min + 1));
    }
    case 'boolean':
      return Math.random() > 0.5;
    case 'categorical': {
      const values = geneDef.allowedValues ?? [];
      return values[Math.floor(Math.random() * values.length)] ?? '';
    }
  }
}

// ---------------------------------------------------------------------------
// Genome Creation
// ---------------------------------------------------------------------------

/** Create a random genome with all default genes */
export function createRandomGenome(generation: number): Genome {
  const genes = new Map<string, Gene>();

  for (const geneDef of DEFAULT_GENE_DEFINITIONS) {
    const gene: Gene = {
      ...geneDef,
      value: randomGeneValue(geneDef),
    };
    genes.set(gene.id, gene);
  }

  return {
    id: generateGenomeId(),
    generation,
    parentIds: [],
    genes,
    createdAt: new Date(),
    origin: 'random',
    lineageDepth: 0,
    tags: [],
  };
}

/** Create a seeded genome with sensible defaults for the health learning domain */
export function createSeededGenome(generation: number): Genome {
  const genes = new Map<string, Gene>();
  const defaults: Record<string, number | boolean | string> = {
    'content-relevance-weight': 0.7,
    'content-novelty-weight': 0.4,
    'content-depth-preference': 0.5,
    'cue-frequency-minutes': 30,
    'session-optimal-minutes': 25,
    'review-spacing-factor': 2.5,
    'difficulty-target-success-rate': 0.75,
    'difficulty-ramp-speed': 0.5,
    'complexity-auto-adjust': true,
    'gamification-intensity': 0.5,
    'encouragement-frequency': 0.4,
    'notification-style': 'moderate',
    'new-topics-per-session': 3,
    'review-to-new-ratio': 0.4,
    'immediate-feedback': true,
    'spaced-repetition-aggressiveness': 0.5,
    'exploration-rate': 0.15,
    'exploration-decay': 0.01,
    'personalization-weight': 0.6,
    'health-context-depth': 'moderate',
  };

  for (const geneDef of DEFAULT_GENE_DEFINITIONS) {
    const gene: Gene = {
      ...geneDef,
      value: defaults[geneDef.id] ?? randomGeneValue(geneDef),
    };
    genes.set(gene.id, gene);
  }

  return {
    id: generateGenomeId(),
    generation,
    parentIds: [],
    genes,
    createdAt: new Date(),
    origin: 'seeded',
    lineageDepth: 0,
    tags: ['seed', 'balanced'],
  };
}

// ---------------------------------------------------------------------------
// Mutation - Small random changes to explore nearby strategies
// ---------------------------------------------------------------------------

/** Mutate a genome, producing a new variant with small random changes */
export function mutateGenome(parent: Genome, generation: number): Genome {
  const newGenes = new Map<string, Gene>();

  for (const [id, gene] of parent.genes) {
    if (Math.random() < gene.mutationRate) {
      newGenes.set(id, mutateGene(gene));
    } else {
      newGenes.set(id, { ...gene });
    }
  }

  return {
    id: generateGenomeId(),
    generation,
    parentIds: [parent.id],
    genes: newGenes,
    createdAt: new Date(),
    origin: 'mutation',
    lineageDepth: parent.lineageDepth + 1,
    tags: [...parent.tags.filter(t => t !== 'seed')],
  };
}

/** Mutate a single gene */
function mutateGene(gene: Gene): Gene {
  const mutated = { ...gene };

  switch (gene.valueType) {
    case 'float': {
      const step = gene.mutationStep ?? 0.1;
      const delta = (Math.random() * 2 - 1) * step;
      let newValue = (gene.value as number) + delta;
      if (gene.min !== undefined) newValue = Math.max(gene.min, newValue);
      if (gene.max !== undefined) newValue = Math.min(gene.max, newValue);
      mutated.value = newValue;
      break;
    }
    case 'integer': {
      const step = gene.mutationStep ?? 1;
      const delta = Math.round((Math.random() * 2 - 1) * step);
      let newValue = (gene.value as number) + delta;
      if (gene.min !== undefined) newValue = Math.max(gene.min, newValue);
      if (gene.max !== undefined) newValue = Math.min(gene.max, newValue);
      mutated.value = Math.round(newValue);
      break;
    }
    case 'boolean':
      mutated.value = !(gene.value as boolean);
      break;
    case 'categorical': {
      const values = gene.allowedValues ?? [];
      const current = gene.value as string;
      const others = values.filter(v => v !== current);
      if (others.length > 0) {
        mutated.value = others[Math.floor(Math.random() * others.length)];
      }
      break;
    }
  }

  return mutated;
}

// ---------------------------------------------------------------------------
// Crossover - Combining genes from two successful parents
// ---------------------------------------------------------------------------

/** Perform uniform crossover between two parent genomes */
export function crossoverGenomes(
  parent1: Genome,
  parent2: Genome,
  generation: number,
): Genome {
  const newGenes = new Map<string, Gene>();

  for (const [id, gene1] of parent1.genes) {
    const gene2 = parent2.genes.get(id);
    if (!gene2) {
      newGenes.set(id, { ...gene1 });
      continue;
    }

    // Uniform crossover: randomly pick from either parent
    if (Math.random() < 0.5) {
      newGenes.set(id, { ...gene1 });
    } else {
      newGenes.set(id, { ...gene2 });
    }
  }

  return {
    id: generateGenomeId(),
    generation,
    parentIds: [parent1.id, parent2.id],
    genes: newGenes,
    createdAt: new Date(),
    origin: 'crossover',
    lineageDepth: Math.max(parent1.lineageDepth, parent2.lineageDepth) + 1,
    tags: [],
  };
}

/** Perform blended crossover for numeric genes (interpolate between parents) */
export function blendedCrossover(
  parent1: Genome,
  parent2: Genome,
  generation: number,
): Genome {
  const newGenes = new Map<string, Gene>();

  for (const [id, gene1] of parent1.genes) {
    const gene2 = parent2.genes.get(id);
    if (!gene2) {
      newGenes.set(id, { ...gene1 });
      continue;
    }

    if (gene1.valueType === 'float' || gene1.valueType === 'integer') {
      const v1 = gene1.value as number;
      const v2 = gene2.value as number;
      const alpha = Math.random();
      let blended = v1 * alpha + v2 * (1 - alpha);

      if (gene1.valueType === 'integer') blended = Math.round(blended);
      if (gene1.min !== undefined) blended = Math.max(gene1.min, blended);
      if (gene1.max !== undefined) blended = Math.min(gene1.max, blended);

      newGenes.set(id, { ...gene1, value: blended });
    } else {
      // For non-numeric, use uniform crossover
      newGenes.set(id, Math.random() < 0.5 ? { ...gene1 } : { ...gene2 });
    }
  }

  return {
    id: generateGenomeId(),
    generation,
    parentIds: [parent1.id, parent2.id],
    genes: newGenes,
    createdAt: new Date(),
    origin: 'crossover',
    lineageDepth: Math.max(parent1.lineageDepth, parent2.lineageDepth) + 1,
    tags: ['blended'],
  };
}

// ---------------------------------------------------------------------------
// Genome Analysis Utilities
// ---------------------------------------------------------------------------

/** Calculate genetic distance between two genomes (0 = identical, 1 = maximally different) */
export function geneticDistance(g1: Genome, g2: Genome): number {
  let totalDistance = 0;
  let geneCount = 0;

  for (const [id, gene1] of g1.genes) {
    const gene2 = g2.genes.get(id);
    if (!gene2) continue;

    geneCount++;

    switch (gene1.valueType) {
      case 'float':
      case 'integer': {
        const range = (gene1.max ?? 1) - (gene1.min ?? 0);
        if (range > 0) {
          totalDistance += Math.abs(
            (gene1.value as number) - (gene2.value as number)
          ) / range;
        }
        break;
      }
      case 'boolean':
        totalDistance += gene1.value !== gene2.value ? 1 : 0;
        break;
      case 'categorical':
        totalDistance += gene1.value !== gene2.value ? 1 : 0;
        break;
    }
  }

  return geneCount > 0 ? totalDistance / geneCount : 0;
}

/** Calculate population diversity as average pairwise distance */
export function populationDiversity(genomes: Genome[]): number {
  if (genomes.length < 2) return 0;

  let totalDistance = 0;
  let pairs = 0;

  for (let i = 0; i < genomes.length; i++) {
    for (let j = i + 1; j < genomes.length; j++) {
      totalDistance += geneticDistance(genomes[i], genomes[j]);
      pairs++;
    }
  }

  return pairs > 0 ? totalDistance / pairs : 0;
}

/** Get a gene value from a genome by gene ID */
export function getGeneValue(
  genome: Genome,
  geneId: string,
): number | boolean | string | undefined {
  return genome.genes.get(geneId)?.value;
}

/** Get all genes for a specific domain */
export function getGenesByDomain(
  genome: Genome,
  domain: GeneDomain,
): Gene[] {
  const result: Gene[] = [];
  for (const gene of genome.genes.values()) {
    if (gene.domain === domain) {
      result.push(gene);
    }
  }
  return result;
}

/** Create a human-readable summary of a genome's key traits */
export function summarizeGenome(genome: Genome): Record<string, string> {
  const summary: Record<string, string> = {};

  for (const [_id, gene] of genome.genes) {
    if (typeof gene.value === 'number') {
      summary[gene.name] = gene.value.toFixed(2);
    } else {
      summary[gene.name] = String(gene.value);
    }
  }

  return summary;
}

/** Serialize genome genes to a plain object (for persistence) */
export function serializeGenome(genome: Genome): Record<string, unknown> {
  const genes: Record<string, Gene> = {};
  for (const [id, gene] of genome.genes) {
    genes[id] = gene;
  }

  return {
    id: genome.id,
    generation: genome.generation,
    parentIds: genome.parentIds,
    genes,
    createdAt: genome.createdAt.toISOString(),
    origin: genome.origin,
    lineageDepth: genome.lineageDepth,
    tags: genome.tags,
  };
}

/** Deserialize a genome from a plain object */
export function deserializeGenome(data: Record<string, unknown>): Genome {
  const genesObj = data.genes as Record<string, Gene>;
  const genes = new Map<string, Gene>();
  for (const [id, gene] of Object.entries(genesObj)) {
    genes.set(id, gene);
  }

  return {
    id: data.id as string,
    generation: data.generation as number,
    parentIds: data.parentIds as string[],
    genes,
    createdAt: new Date(data.createdAt as string),
    origin: data.origin as GenomeOrigin,
    lineageDepth: data.lineageDepth as number,
    tags: data.tags as string[],
  };
}
