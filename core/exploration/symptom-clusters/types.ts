/**
 * Symptom Cluster Recognition Type Definitions
 *
 * Types for identifying symptom patterns that suggest specific
 * syndromes, with pathophysiological mechanisms and educational content.
 */

/**
 * Body system category for syndromes
 */
export type SyndromeCategory =
  | 'cardiovascular'
  | 'respiratory'
  | 'gastrointestinal'
  | 'neurologic'
  | 'musculoskeletal'
  | 'endocrine'
  | 'autoimmune'
  | 'infectious'
  | 'metabolic'
  | 'psychiatric'
  | 'hematologic'
  | 'multisystem';

/**
 * Urgency level for medical evaluation
 */
export type EvaluationUrgency =
  | 'emergency'
  | 'urgent'
  | 'soon'
  | 'routine'
  | 'monitoring';

/**
 * Confidence level for cluster match
 */
export type MatchConfidence = 'high' | 'moderate' | 'low' | 'possible';

/**
 * Symptom requirement type
 */
export type SymptomRequirement = 'required' | 'major' | 'minor' | 'supportive';

/**
 * Symptom cluster definition (syndrome)
 */
export interface SymptomCluster {
  clusterId: string;
  name: string;
  alternateNames: string[];
  category: SyndromeCategory;
  icdCode?: string;
  prevalence: string;
  symptoms: ClusterSymptom[];
  diagnosticCriteria: DiagnosticCriteria;
  pathophysiology: ClusterPathophysiology;
  affectedSystems: AffectedSystem[];
  typicalPresentation: string;
  atypicalPresentations: string[];
  temporalPattern: TemporalPattern;
  triggers: string[];
  redFlags: ClusterRedFlag[];
  whenToSeekCare: CareRecommendation;
  relatedClusters: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Symptom within a cluster
 */
export interface ClusterSymptom {
  symptom: string;
  requirement: SymptomRequirement;
  frequency: string;
  characteristicFeatures?: string[];
  differentiatingValue: string;
}

/**
 * Diagnostic criteria for syndrome recognition
 */
export interface DiagnosticCriteria {
  type: 'clinical' | 'formal-criteria' | 'exclusion';
  description: string;
  requiredCount?: {
    required: number;
    major: number;
    minor: number;
  };
  formalCriteria?: string;
  exclusions?: string[];
}

/**
 * Pathophysiology of the cluster
 */
export interface ClusterPathophysiology {
  mechanism: string;
  pathwaySteps: string[];
  underlyingCauses: string[];
  contributingFactors: string[];
}

/**
 * Body system affected by the cluster
 */
export interface AffectedSystem {
  system: string;
  structures: string[];
  structureIds: string[];
  manifestations: string[];
  highlightColor: string;
}

/**
 * Temporal pattern of the syndrome
 */
export interface TemporalPattern {
  onset: 'sudden' | 'gradual' | 'variable';
  duration: string;
  course: 'episodic' | 'chronic' | 'progressive' | 'relapsing-remitting' | 'self-limited';
  periodicity?: string;
}

/**
 * Red flag within a cluster
 */
export interface ClusterRedFlag {
  sign: string;
  concern: string;
  action: string;
  urgency: EvaluationUrgency;
}

/**
 * Care recommendation
 */
export interface CareRecommendation {
  urgency: EvaluationUrgency;
  providerType: string;
  reasoning: string;
  initialEvaluation: string[];
}

/**
 * User symptom input for matching
 */
export interface UserSymptomSet {
  symptoms: string[];
  duration?: string;
  severity?: number;
  onset?: 'sudden' | 'gradual';
  triggers?: string[];
  relievingFactors?: string[];
  associatedConditions?: string[];
  age?: number;
  sex?: 'male' | 'female';
}

/**
 * Cluster match result
 */
export interface ClusterMatchResult {
  clusterId: string;
  clusterName: string;
  confidence: MatchConfidence;
  matchScore: number;
  matchedSymptoms: MatchedSymptom[];
  missingRequired: string[];
  missingMajor: string[];
  supportingFactors: string[];
  againstFactors: string[];
  explanation: string;
}

/**
 * Matched symptom detail
 */
export interface MatchedSymptom {
  userSymptom: string;
  clusterSymptom: string;
  requirement: SymptomRequirement;
  matchQuality: 'exact' | 'related' | 'partial';
}

/**
 * Symptom cluster explorer state
 */
export interface SymptomClusterExplorerState {
  userSymptoms: UserSymptomSet;
  matchResults: ClusterMatchResult[];
  selectedCluster: SymptomCluster | null;
  anatomyHighlights: AffectedSystem[];
  showingPathophysiology: boolean;
}

/**
 * Cluster exploration result
 */
export interface ClusterExplorationResult {
  cluster: SymptomCluster;
  matchResult: ClusterMatchResult | null;
  pathophysiologySteps: string[];
  anatomyHighlights: AffectedSystem[];
  educationalContent: {
    overview: string;
    mechanism: string;
    recognition: string;
    management: string;
  };
  viewSettings: {
    cameraPosition: { x: number; y: number; z: number };
    highlightedSystems: string[];
    animationEnabled: boolean;
  };
}
