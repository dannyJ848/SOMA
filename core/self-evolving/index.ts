/**
 * Self-Evolving Algorithm Module
 *
 * A biologically-inspired system that gets smarter over time through:
 * - Genetic algorithm-based strategy evolution
 * - Multi-tier biological memory with consolidation
 * - Fitness-driven natural selection
 * - Self-regulating homeostasis
 *
 * The system maintains a population of competing strategies (genomes),
 * evaluates them against user interaction signals, evolves better
 * strategies through mutation and crossover, and consolidates learned
 * patterns into persistent memory.
 */

export * from './types';
export * from './genome';
export * from './memory';
export * from './fitness';
export * from './evolution-engine';
