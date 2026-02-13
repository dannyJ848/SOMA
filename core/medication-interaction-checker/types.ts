/**
 * Medication Interaction Checker Types
 */

export type InteractionSeverity = "contraindicated" | "major" | "moderate" | "minor" | "none";
export type InteractionType = "pharmacokinetic" | "pharmacodynamic";
export type EvidenceLevel = "established" | "probable" | "suspected" | "theoretical";
export type OnsetTiming = "immediate" | "rapid" | "delayed" | "variable";

export interface DrugInput {
  id: string;
  name: string;
  brandNames?: string[];
  drugClass?: string;
  dose?: { amount: number; unit: string; frequency: string; };
}

export interface PatientContext {
  age?: number;
  weight?: number;
  egfr?: number;
  hepaticFunction?: "normal" | "mild-impairment" | "moderate-impairment" | "severe-impairment";
  pregnancy?: "none" | "first-trimester" | "second-trimester" | "third-trimester";
  breastfeeding?: boolean;
  conditions?: string[];
  allergies?: string[];
  pharmacogenomics?: PharmacogenomicVariant[];
}

export interface PharmacogenomicVariant {
  gene: string;
  allele: string;
  phenotype: "poor-metabolizer" | "intermediate-metabolizer" | "normal-metabolizer" | "rapid-metabolizer" | "ultra-rapid-metabolizer";
  significance: "high" | "moderate" | "low";
}

export interface DrugInteraction {
  id: string;
  drug1: DrugInput;
  drug2: DrugInput;
  severity: InteractionSeverity;
  type: InteractionType;
  evidenceLevel: EvidenceLevel;
  onsetTiming: OnsetTiming;
  mechanism: string;
  clinicalEffect: string;
  management: string;
  monitoring?: string[];
  affectedSystems?: string[];
  clinicalSignificance?: string;
  documentation?: string;
  patientSpecificModifications?: {
    severity?: InteractionSeverity;
    additionalRecommendations?: string[];
    reason?: string;
  };
}

export interface InteractionExplanation {
  severity: InteractionSeverity;
  title: string;
  whatHappens: string;
  whyItMatters: string;
  whatToWatchFor?: string[];
  whatToDo: string[];
  whenToSeekHelp: string;
  questionsToAsk: string[];
}

export interface OverallRiskAssessment {
  level: "critical" | "high" | "moderate" | "low" | "none";
  score: number;
  summary: string;
  color: string;
}

export interface GroupedInteractions {
  contraindicated: DrugInteraction[];
  major: DrugInteraction[];
  moderate: DrugInteraction[];
  minor: DrugInteraction[];
}

export interface DrugPair {
  drug1: DrugInput;
  drug2: DrugInput;
}

export interface InteractionSummary {
  totalPairs: number;
  totalInteractions: number;
  countsBySeverity: { contraindicated: number; major: number; moderate: number; minor: number; };
}

export interface Recommendation {
  priority: "urgent" | "high" | "moderate" | "low";
  category: "avoid-combination" | "dose-adjustment" | "monitor" | "consult-provider" | "timing-adjustment" | "alternative-therapy";
  recommendation: string;
  applicableDrugs: string[];
  rationale?: string;
}

export interface InteractionAnalysisResult {
  overallRisk: OverallRiskAssessment;
  interactions: DrugInteraction[];
  interactionsBySeverity: GroupedInteractions;
  safeCombinations: DrugPair[];
  summary: InteractionSummary;
  recommendations: Recommendation[];
}

export interface GeneDrugInteraction {
  gene: string;
  phenotype: string;
  drug: DrugInput;
  impact: { type: "metabolism" | "transport" | "target" | "toxicity"; description: string; consequence: string; };
  recommendations: string[];
  alternatives?: string[];
  evidenceLevel: EvidenceLevel;
}

export interface PharmacogenomicResult {
  interactions: GeneDrugInteraction[];
  affectedDrugs: DrugInput[];
  assessment: string;
  recommendations: Recommendation[];
}

export interface ConditionContraindication {
  drug: DrugInput;
  condition: string;
  type: "absolute" | "relative";
  reason: string;
  risk: string;
  alternatives?: string[];
}

export interface ContraindicationResult {
  contraindications: ConditionContraindication[];
  byDrug: Map<string, ConditionContraindication[]>;
  urgentWarnings: ConditionContraindication[];
}

export interface InteractionCheckerConfig {
  includeMinor: boolean;
  includeTheoretical: boolean;
  usePatientContext: boolean;
  includePharmacogenomics: boolean;
  includeContraindications: boolean;
  maxInteractions?: number;
}

export const DEFAULT_CONFIG: InteractionCheckerConfig = {
  includeMinor: true,
  includeTheoretical: false,
  usePatientContext: true,
  includePharmacogenomics: true,
  includeContraindications: true,
};
