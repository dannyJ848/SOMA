/**
 * Lab Interpretation Education Module
 *
 * Understanding laboratory tests - what they measure, what results mean,
 * and how to interpret patterns. Designed to help patients become
 * informed partners in their healthcare.
 */

export type {
  LabCategory,
  SpecimenType,
  ResultType,
  LabTestEducation,
  PhysiologicalBasis,
  ReferenceRange,
  PopulationGroup,
  InterpretationEducation,
  CauseCategory,
  LabCause,
  SeverityGuidance,
  CriticalValue,
  RelatedTest,
  LabConditionAssociation,
  InterferingFactor,
  TemporalPattern,
  LabPanelEducation,
  PanelPattern,
  PatternFinding,
  PanelScenario,
  ExpectedResult,
  LabResultAnalysis,
  PanelAnalysis,
  DetectedPattern,
  OrganSystemImplication,
  LabTrend,
  TrendPoint,
  LabLearningModule,
  LabConcept,
  LabCase,
  CaseLabResult,
  LabReviewQuestion,
} from './types.js';

export {
  LAB_TESTS,
  LAB_PANELS,
  CBC_PANEL,
  BASIC_METABOLIC_PANEL,
  getLabTest,
  getLabTestByName,
  getLabPanel,
  getLabTestsByCategory,
  getAllLabTests,
  getAllLabPanels,
} from './lab-database.js';
