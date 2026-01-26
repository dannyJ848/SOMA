/**
 * Cognitive Biases in Clinical Reasoning
 *
 * Educational content about cognitive biases that can affect
 * diagnostic accuracy and clinical decision-making.
 */

export * from "./anchoring-bias";
export * from "./availability-heuristic";
export * from "./confirmation-bias";

export const COGNITIVE_BIAS_TOPICS = [
  "anchoring-bias",
  "availability-heuristic",
  "confirmation-bias",
] as const;

export type CognitiveBiasTopic = (typeof COGNITIVE_BIAS_TOPICS)[number];
