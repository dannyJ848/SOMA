/**
 * Lab Results Interpreter Module
 *
 * Comprehensive lab test interpretation with:
 * - Reference ranges by age, sex, and demographics
 * - Multi-level explanations (simple to expert)
 * - Pattern recognition (anemia types, liver patterns, etc.)
 * - Clinical interpretations and follow-up recommendations
 * - Anatomy connections for 3D visualization
 */

// Types
export type {
  Sex,
  AgeGroup,
  LabCategory,
  SpecimenType,
  ResultStatus,
  Urgency,
  TrendDirection,
  ReferenceRangeCondition,
  ReferenceRange,
  LabReferenceRanges,
  LabTestExplanation,
  LabTestCause,
  LabTestInterpretation,
  SeverityLevel,
  MedicationEffect,
  RelatedTest,
  LabConditionLink,
  AnatomyLink,
  TemporalPattern,
  InterferingFactor,
  CriticalValue,
  LabTest,
  LabPanel,
  PatternFinding,
  LabPattern,
  LabResultInput,
  InterpretedLabResult,
  LabTrendPoint,
  LabTrend,
  PanelAnalysisResult,
  DetectedPattern,
  OrganImplication,
  UserDemographics,
  LabStatistics,
  BodySystem,
  OrganLabMapping,
} from './types';

// Reference Ranges
export {
  REFERENCE_RANGES,
  getApplicableReferenceRange,
  getReferenceRanges,
  listTestsWithRanges,
  convertUnit,
} from './reference-ranges';

// Lab Database
export {
  LAB_TESTS,
  LAB_PANELS,
  getLabTest,
  getLabTestByName,
  getLabPanel,
  getLabTestsByCategory,
  getAllLabTests,
  getAllLabPanels,
  searchLabTests,
} from './lab-database';

// Interpretations
export {
  interpretLabResult,
  interpretMultipleResults,
  analyzeLabTrend,
  getExplanationAtLevel,
  formatStatus,
  formatUrgency,
} from './interpretations';
export type { ExplanationLevel } from './interpretations';

// Patterns
export {
  LAB_PATTERNS,
  detectPatterns,
  analyzeOrganImplications,
  analyzePanel,
  getAllPatterns,
  getPatternsByCategory,
  getPattern,
} from './patterns';

// ============================================
// Convenience Functions
// ============================================

import type { LabResultInput, UserDemographics, InterpretedLabResult, PanelAnalysisResult, DetectedPattern } from './types';
import { interpretMultipleResults } from './interpretations';
import { detectPatterns, analyzePanel } from './patterns';
import { getAllLabTests, getAllLabPanels } from './lab-database';
import { getAllPatterns } from './patterns';

/**
 * Interpret a set of lab results and detect patterns
 */
export function analyzeLabResults(
  inputs: LabResultInput[],
  demographics: UserDemographics
): {
  results: InterpretedLabResult[];
  patterns: DetectedPattern[];
} {
  const results = interpretMultipleResults(inputs, demographics);
  const patterns = detectPatterns(results);

  return { results, patterns };
}

/**
 * Full panel analysis with pattern detection
 */
export function analyzeFullPanel(
  panelId: string,
  inputs: LabResultInput[],
  demographics: UserDemographics
): PanelAnalysisResult | null {
  const results = interpretMultipleResults(inputs, demographics);
  return analyzePanel(panelId, results);
}

/**
 * Get lab statistics
 */
export function getLabStatistics(): {
  totalTests: number;
  totalPanels: number;
  totalPatterns: number;
  categories: string[];
} {
  return {
    totalTests: getAllLabTests().length,
    totalPanels: getAllLabPanels().length,
    totalPatterns: getAllPatterns().length,
    categories: ['cbc', 'cmp', 'lipid', 'thyroid', 'cardiac', 'diabetes', 'iron', 'inflammatory', 'urinalysis'],
  };
}

/**
 * Search for lab tests by query
 */
export function searchLabs(query: string): {
  tests: ReturnType<typeof getAllLabTests>;
  panels: ReturnType<typeof getAllLabPanels>;
} {
  const lowerQuery = query.toLowerCase();

  const tests = getAllLabTests().filter(test =>
    test.name.toLowerCase().includes(lowerQuery) ||
    test.abbreviations.some(a => a.toLowerCase().includes(lowerQuery)) ||
    test.whatItMeasures.toLowerCase().includes(lowerQuery) ||
    test.category.toLowerCase().includes(lowerQuery)
  );

  const panels = getAllLabPanels().filter(panel =>
    panel.name.toLowerCase().includes(lowerQuery) ||
    (panel.abbreviation && panel.abbreviation.toLowerCase().includes(lowerQuery)) ||
    panel.description.toLowerCase().includes(lowerQuery)
  );

  return { tests, panels };
}
