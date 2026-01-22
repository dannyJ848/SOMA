/**
 * Physiology Education Module
 *
 * Deep understanding of how the body works at attending physician level.
 * Educational, not diagnostic.
 */

export type {
  BodySystemId,
  BodySystem,
  SystemFunction,
  SystemOrgan,
  MicroanatomyDetail,
  PhysiologicalProcess,
  ProcessCategory,
  ProcessStep,
  Molecule,
  HomeostasisMechanism,
  FeedbackComponent,
  SystemInteraction,
  ClinicalCorrelation,
  DysfunctionScenario,
  RegulationMechanism,
  NormalParameter,
  VisualizationReference,
  PhysiologyLearningPath,
  LearningModule,
  AssessmentQuestion,
  CellularMechanism,
  MolecularDetail,
  SignalingPathway,
  ReceptorInfo,
  SignalingStep,
  DrugTarget,
} from './types.js';

export {
  BODY_SYSTEMS,
  CARDIOVASCULAR_SYSTEM,
  RESPIRATORY_SYSTEM,
  getBodySystem,
  getAllBodySystems,
  getSystemInteractions,
  getProcessById,
} from './body-systems.js';
