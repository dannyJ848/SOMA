/**
 * Growth and Development Type Definitions
 *
 * Types specific to developmental milestones, growth charts,
 * puberty staging, and developmental screening.
 */

export * from '../types';

/**
 * Milestone achievement status
 */
export type MilestoneStatus = 'not-yet' | 'emerging' | 'achieved' | 'concern';

/**
 * Developmental age assessment
 */
export interface DevelopmentalAge {
  domain: import('../types').DevelopmentalDomain;
  chronologicalAgeMonths: number;
  developmentalAgeMonths: number;
  percentile?: number;
  status: 'typical' | 'advanced' | 'delayed';
}

/**
 * Red flag indicator
 */
export interface DevelopmentalRedFlag {
  ageMonths: number;
  domain: import('../types').DevelopmentalDomain;
  description: string;
  significance: string;
  nextSteps: string[];
}

/**
 * Growth velocity
 */
export interface GrowthVelocity {
  parameter: import('../types').GrowthParameter;
  ageRangeMonths: { start: number; end: number };
  expectedGain: { min: number; max: number };
  unit: string;
}

/**
 * Pubertal progression
 */
export interface PubertyProgression {
  sex: 'male' | 'female';
  typicalSequence: string[];
  averageOnsetAge: number;
  averageDuration: number;
  precocious: { age: number; workup: string[] };
  delayed: { age: number; workup: string[] };
}
