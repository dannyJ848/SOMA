/**
 * Differential Diagnosis Content
 *
 * Educational content about approaches to building and organizing
 * differential diagnoses across clinical presentations.
 */

export * from "./diagnostic-framework";
export * from "./probabilistic-reasoning";
export * from "./pattern-recognition";
export * from "./diagnostic-pitfalls";

export const DIFFERENTIAL_DIAGNOSIS_TOPICS = [
  "diagnostic-framework",
  "probabilistic-reasoning",
  "pattern-recognition",
  "diagnostic-pitfalls",
] as const;

export type DifferentialDiagnosisTopic = (typeof DIFFERENTIAL_DIAGNOSIS_TOPICS)[number];
