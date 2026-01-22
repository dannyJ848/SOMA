/**
 * Pharmacology Types
 *
 * Comprehensive types for understanding medications:
 * mechanisms, pharmacokinetics, interactions, and clinical use.
 */

// ============================================
// Drug Classification
// ============================================

export type DrugCategory =
  | 'cardiovascular'
  | 'neurological'
  | 'psychiatric'
  | 'respiratory'
  | 'gastrointestinal'
  | 'endocrine'
  | 'musculoskeletal'
  | 'antimicrobial'
  | 'oncologic'
  | 'immunologic'
  | 'analgesic'
  | 'anesthetic'
  | 'dermatologic'
  | 'ophthalmic'
  | 'hematologic'
  | 'urologic'
  | 'reproductive';

export type MechanismType =
  | 'receptor-agonist'
  | 'receptor-antagonist'
  | 'enzyme-inhibitor'
  | 'enzyme-inducer'
  | 'ion-channel-blocker'
  | 'ion-channel-opener'
  | 'transporter-inhibitor'
  | 'dna-modifier'
  | 'protein-synthesis-inhibitor'
  | 'cell-wall-inhibitor'
  | 'other';

// ============================================
// Drug Information
// ============================================

/**
 * Comprehensive drug education
 */
export interface DrugEducation {
  id: string;
  genericName: string;
  brandNames: string[];
  drugClass: string;
  category: DrugCategory;

  /** Plain language description */
  overview: string;

  /** How it works */
  mechanism: DrugMechanism;

  /** How body handles the drug */
  pharmacokinetics: Pharmacokinetics;

  /** What it's used for */
  indications: Indication[];

  /** How to take it */
  dosing: DosingInformation;

  /** Side effects */
  adverseEffects: AdverseEffect[];

  /** Drug interactions */
  interactions: DrugInteraction[];

  /** When not to use */
  contraindications: Contraindication[];

  /** Special considerations */
  specialPopulations: SpecialPopulation[];

  /** Monitoring requirements */
  monitoring: MonitoringParameter[];

  /** Patient education points */
  patientEducation: string[];

  /** Clinical pearls */
  clinicalPearls: string[];
}

// ============================================
// Drug Mechanism
// ============================================

export interface DrugMechanism {
  type: MechanismType;
  target: string;
  targetLocation: string;

  /** Plain language explanation */
  simpleExplanation: string;

  /** Detailed mechanism */
  detailedMechanism: string;

  /** Step-by-step */
  mechanismSteps: MechanismStep[];

  /** What changes in the body */
  physiologicalEffects: PhysiologicalEffect[];

  /** Time to effect */
  onsetOfAction: string;

  /** How long it lasts */
  durationOfEffect: string;

  /** Visual representation type */
  visualizationType?: 'receptor-binding' | 'enzyme-inhibition' | 'ion-channel' | 'pathway';
}

export interface MechanismStep {
  order: number;
  location: string;
  action: string;
  result: string;
  timeframe?: string;
}

export interface PhysiologicalEffect {
  system: string;
  effect: string;
  mechanism: string;
  clinicalRelevance: string;
  desiredOrAdverse: 'desired' | 'adverse' | 'both';
}

// ============================================
// Pharmacokinetics
// ============================================

export interface Pharmacokinetics {
  absorption: AbsorptionInfo;
  distribution: DistributionInfo;
  metabolism: MetabolismInfo;
  excretion: ExcretionInfo;
  halfLife: string;
  timeToSteadyState: string;
  foodEffect?: string;
}

export interface AbsorptionInfo {
  bioavailability: string;
  route: string[];
  factors: string[];
  timeToePeak: string;
  foodEffect?: string;
}

export interface DistributionInfo {
  volumeOfDistribution: string;
  proteinBinding: string;
  tissueDistribution: string[];
  crossesBBB: boolean;
  crossesPlacenta: boolean;
}

export interface MetabolismInfo {
  primarySite: string;
  enzymes: string[];
  activeMetabolites: string[];
  geneticVariability?: string;
  drugInteractionRisk: 'low' | 'moderate' | 'high';
}

export interface ExcretionInfo {
  primaryRoute: string;
  renalClearance?: string;
  biliaryClearance?: string;
  adjustmentNeeded: {
    renal: boolean;
    hepatic: boolean;
  };
}

// ============================================
// Clinical Use
// ============================================

export interface Indication {
  condition: string;
  approvalStatus: 'FDA-approved' | 'off-label' | 'investigational';
  evidenceLevel: 'high' | 'moderate' | 'low';
  firstLine: boolean;
  notes?: string;
}

export interface DosingInformation {
  usualDose: DoseRegimen;
  adjustments: DoseAdjustment[];
  maxDose: string;
  administration: AdministrationInfo;
}

export interface DoseRegimen {
  amount: string;
  frequency: string;
  route: string;
  duration?: string;
}

export interface DoseAdjustment {
  condition: string;
  adjustment: string;
  rationale: string;
}

export interface AdministrationInfo {
  route: string;
  withFood: 'with-food' | 'without-food' | 'either';
  timing?: string;
  specialInstructions: string[];
}

// ============================================
// Safety Information
// ============================================

export interface AdverseEffect {
  name: string;
  frequency: 'very-common' | 'common' | 'uncommon' | 'rare' | 'very-rare';
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  mechanism: string;
  management: string;
  reversible: boolean;
  onsetTiming: string;
}

export interface DrugInteraction {
  interactingDrug: string;
  interactionType: 'pharmacokinetic' | 'pharmacodynamic';
  severity: 'contraindicated' | 'major' | 'moderate' | 'minor';
  mechanism: string;
  effect: string;
  management: string;
}

export interface Contraindication {
  condition: string;
  type: 'absolute' | 'relative';
  reason: string;
  alternative?: string;
}

export interface SpecialPopulation {
  population: 'pregnancy' | 'breastfeeding' | 'pediatric' | 'geriatric' | 'renal-impairment' | 'hepatic-impairment';
  consideration: string;
  recommendation: string;
  pregnancyCategory?: string;
}

export interface MonitoringParameter {
  parameter: string;
  frequency: string;
  rationale: string;
  actionThreshold?: string;
}

// ============================================
// Drug Classes
// ============================================

export interface DrugClassEducation {
  id: string;
  name: string;
  category: DrugCategory;

  /** Overview of the class */
  overview: string;

  /** Shared mechanism */
  sharedMechanism: string;

  /** Common target */
  target: string;

  /** Prototype drug */
  prototypeDrug: string;

  /** Class members */
  members: DrugClassMember[];

  /** Class effects */
  classEffects: ClassEffect[];

  /** Class warnings */
  classWarnings: string[];

  /** When to choose this class */
  clinicalNiche: string;

  /** Comparison within class */
  memberComparison: MemberComparison[];
}

export interface DrugClassMember {
  name: string;
  distinguishingFeatures: string[];
  advantagesOverClass: string[];
  disadvantagesOverClass: string[];
}

export interface ClassEffect {
  effect: string;
  mechanism: string;
  universalToClass: boolean;
  exceptions?: string[];
}

export interface MemberComparison {
  property: string;
  drugComparisons: {
    drug: string;
    value: string;
  }[];
}

// ============================================
// Interaction Checker Types
// ============================================

export interface InteractionCheckResult {
  drugA: string;
  drugB: string;
  hasInteraction: boolean;
  interaction?: DrugInteraction;
  recommendation: string;
  alternativesForA?: string[];
  alternativesForB?: string[];
}

export interface MultiDrugInteractionResult {
  drugs: string[];
  interactions: InteractionCheckResult[];
  overallRisk: 'low' | 'moderate' | 'high' | 'contraindicated';
  recommendations: string[];
}

// ============================================
// Pharmacology Learning
// ============================================

export interface PharmacologyLearningModule {
  id: string;
  title: string;
  objectives: string[];
  drugClasses: string[];
  keyConceptsCovered: string[];
  clinicalCorrelations: string[];
  reviewQuestions: PharmReviewQuestion[];
}

export interface PharmReviewQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedDrug?: string;
}
