/**
 * Pathology Education Module
 *
 * Understanding disease mechanisms at the cellular and molecular level.
 * How physiology goes wrong and produces clinical disease.
 */

export type {
  PathologicalCategory,
  DiseaseMechanism,
  EtiologicalFactor,
  PathogenesisStep,
  MorphologicalChange,
  ClinicalManifestation,
  Mediator,
  DiagnosticFeature,
  TherapeuticTarget,
  CellInjuryType,
  CellInjuryMechanism,
  CellularResponse,
  CellularChange,
  InjuryMarker,
  InflammationType,
  InflammationMechanism,
  VascularChange,
  CellularEvent,
  InflammatoryMediator,
  InflammationOutcome,
  SystemicEffect,
  NeoplasiaEducation,
  CellBehaviorComparison,
  CancerHallmark,
  GeneticAlteration,
  TumorProgressionStage,
  MetastasisStep,
  NeoplasiaEffect,
  HemodynamicDisorder,
  ImmunopathologyMechanism,
  HypersensitivityType,
  HypersensitivityReaction,
} from './types.js';

export {
  CELL_INJURY_MECHANISMS,
  INFLAMMATION_MECHANISMS,
  HYPERSENSITIVITY_REACTIONS,
  HEMODYNAMIC_DISORDERS,
  NEOPLASIA_EDUCATION,
  DISEASE_MECHANISMS,
  getCellInjuryMechanism,
  getInflammationMechanism,
  getHypersensitivityReaction,
  getHemodynamicDisorder,
  getDiseaseMechanism,
} from './disease-mechanisms.js';
