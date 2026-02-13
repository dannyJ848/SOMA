/**
 * Biostatistics Educational Content
 *
 * Comprehensive biostatistics reference covering:
 * - Diagnostic Accuracy: Sensitivity, specificity, PPV, NPV, LRs, ROC curves
 * - Measures of Effect: NNT, NNH, ARR, RR, OR, HR, confidence intervals
 * - Hypothesis Testing: p-values, Type I/II errors, power, t-test, chi-square, ANOVA
 * - Regression: Linear, logistic, and Cox proportional hazards
 * - Survival Analysis: Kaplan-Meier estimation
 * - Study Design: RCT, ITT, per-protocol, crossover, case-control, cohort, systematic review
 * - Meta-Analysis: Pooled estimates, forest plots, funnel plots
 * - Bias Assessment: Selection, recall, attrition, and publication bias
 */

export {
  BIOSTATISTICS_ENTRIES,
  getAllEntryIds,
  getEntryById,
  filterByCategory,
  searchBiostatisticsEntries,
  getEntriesByCategory,
  getEntryCount,
} from './biostatistics-database';

export type {
  BiostatisticsCategory,
  BiostatisticsEntry,
} from './biostatistics-database';
