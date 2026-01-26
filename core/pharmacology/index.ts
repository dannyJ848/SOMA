/**
 * Pharmacology Education Module
 *
 * Understanding medications - mechanisms, effects, interactions.
 * How drugs work and why they're used.
 */

export type {
  DrugCategory,
  MechanismType,
  DrugEducation,
  DrugMechanism,
  MechanismStep,
  PhysiologicalEffect,
  Pharmacokinetics,
  AbsorptionInfo,
  DistributionInfo,
  MetabolismInfo,
  ExcretionInfo,
  Indication,
  DosingInformation,
  DoseRegimen,
  DoseAdjustment,
  AdministrationInfo,
  AdverseEffect,
  DrugInteraction,
  Contraindication,
  SpecialPopulation,
  MonitoringParameter,
  DrugClassEducation,
  DrugClassMember,
  ClassEffect,
  MemberComparison,
  InteractionCheckResult,
  MultiDrugInteractionResult,
  PharmacologyLearningModule,
  PharmReviewQuestion,
} from './types.js';

export {
  DRUG_CLASSES,
  DRUGS,
  COMMON_INTERACTIONS,
  getDrugById,
  getDrugByName,
  getDrugClassById,
  getDrugsByCategory,
  getInteractionsForDrug,
  getAllDrugClasses,
} from './drug-database.js';

// Comprehensive Drug Interactions
export type {
  InteractionSeverity,
  DrugInteractionEntry,
} from './interactions.js';

export {
  CARDIOVASCULAR_INTERACTIONS,
  ANTICOAGULANT_INTERACTIONS,
  PSYCHIATRIC_INTERACTIONS,
  DIABETES_INTERACTIONS,
  ANTIBIOTIC_INTERACTIONS,
  GI_INTERACTIONS,
  ALL_INTERACTIONS,
  findInteractionBetween,
  findInteractionsForDrug,
  checkMultipleDrugInteractions,
  getInteractionSeverityColor,
  getOverallInteractionRisk,
} from './interactions.js';

// Condition-Based Contraindications
export type {
  ContraindicationType,
  DrugContraindication,
} from './contraindications.js';

export {
  CARDIOVASCULAR_CONTRAINDICATIONS,
  DIABETES_CONTRAINDICATIONS,
  PSYCHIATRIC_CONTRAINDICATIONS,
  ANALGESIC_CONTRAINDICATIONS,
  ANTIBIOTIC_CONTRAINDICATIONS,
  GI_CONTRAINDICATIONS,
  ALL_CONTRAINDICATIONS,
  getContraindicationsForDrug,
  getContraindicationsForCondition,
  isContraindicated,
  checkMultipleContraindications,
  getContraindicationColor,
  getAlternatives,
} from './contraindications.js';
