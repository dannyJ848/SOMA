/**
 * Diagnostic Frameworks
 *
 * Educational content about different approaches to clinical diagnosis,
 * including Bayesian reasoning, pattern recognition, and the
 * hypothetico-deductive method.
 */

export * from "./bayesian-reasoning";
export * from "./pattern-recognition";
export * from "./hypothetico-deductive";

export const DIAGNOSTIC_FRAMEWORK_TOPICS = [
  "bayesian-reasoning",
  "pattern-recognition",
  "hypothetico-deductive",
] as const;

export type DiagnosticFrameworkTopic = (typeof DIAGNOSTIC_FRAMEWORK_TOPICS)[number];
