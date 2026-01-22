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
