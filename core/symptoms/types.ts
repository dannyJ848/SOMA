/**
 * Symptom Checker Types
 *
 * Comprehensive type definitions for the symptom checker system,
 * including symptom models, triage levels, and assessment types.
 */

// ============================================
// Core Enums and Literal Types
// ============================================

/**
 * Body region for symptom localization
 */
export type BodyRegion =
  | 'head'
  | 'face'
  | 'eyes'
  | 'ears'
  | 'nose'
  | 'mouth'
  | 'neck'
  | 'throat'
  | 'chest'
  | 'breast'
  | 'upper-back'
  | 'mid-back'
  | 'lower-back'
  | 'abdomen-upper'
  | 'abdomen-lower'
  | 'abdomen-right'
  | 'abdomen-left'
  | 'pelvis'
  | 'groin'
  | 'shoulder'
  | 'upper-arm'
  | 'elbow'
  | 'forearm'
  | 'wrist'
  | 'hand'
  | 'fingers'
  | 'hip'
  | 'thigh'
  | 'knee'
  | 'lower-leg'
  | 'ankle'
  | 'foot'
  | 'toes'
  | 'skin-general'
  | 'whole-body';

/**
 * Symptom severity level (1-10 scale)
 */
export type SeverityLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Symptom onset pattern
 */
export type OnsetPattern =
  | 'sudden' // seconds to minutes
  | 'rapid' // minutes to hours
  | 'gradual' // hours to days
  | 'insidious'; // days to weeks

/**
 * Symptom duration pattern
 */
export type DurationPattern =
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'weeks'
  | 'months'
  | 'years'
  | 'constant'
  | 'intermittent'
  | 'progressive';

/**
 * Symptom quality descriptors
 */
export type SymptomQuality =
  | 'sharp'
  | 'dull'
  | 'aching'
  | 'burning'
  | 'stabbing'
  | 'throbbing'
  | 'cramping'
  | 'pressure'
  | 'squeezing'
  | 'tearing'
  | 'colicky'
  | 'tingling'
  | 'numbness'
  | 'weakness'
  | 'stiffness'
  | 'itching'
  | 'nausea'
  | 'fullness';

/**
 * Symptom category
 */
export type SymptomCategory =
  | 'pain'
  | 'sensory'
  | 'motor'
  | 'autonomic'
  | 'constitutional'
  | 'respiratory'
  | 'cardiac'
  | 'gastrointestinal'
  | 'neurological'
  | 'psychiatric'
  | 'musculoskeletal'
  | 'dermatological'
  | 'urological'
  | 'reproductive'
  | 'ophthalmological'
  | 'otological'
  | 'dental';

/**
 * Triage urgency level
 */
export type TriageLevel =
  | 'emergency' // Call 911 / Go to ER immediately
  | 'urgent' // See doctor within 24 hours
  | 'soon' // See doctor within 1-2 weeks
  | 'routine' // Schedule regular appointment
  | 'self-care'; // Can manage at home

/**
 * Condition likelihood ranking
 */
export type LikelihoodRank = 'very-likely' | 'likely' | 'possible' | 'unlikely' | 'rare';

// ============================================
// Core Symptom Definition
// ============================================

/**
 * Complete symptom definition
 */
export interface Symptom {
  id: string;
  name: string;
  commonNames: string[];
  medicalTerms: string[];
  category: SymptomCategory;
  description: string;

  /** Body regions where this symptom can occur */
  bodyRegions: BodyRegion[];

  /** Primary body region for this symptom */
  primaryRegion: BodyRegion;

  /** Variations of this symptom */
  variations: SymptomVariation[];

  /** Possible causes ranked by likelihood */
  possibleCauses: PossibleCause[];

  /** Symptoms commonly occurring together */
  associatedSymptoms: string[];

  /** Red flags requiring emergency attention */
  redFlags: RedFlag[];

  /** Follow-up questions to narrow diagnosis */
  followUpQuestions: FollowUpQuestion[];

  /** When to see a doctor */
  whenToSeeDoctor: WhenToSeeDoctor;

  /** Self-care recommendations */
  selfCare: SelfCareRecommendation[];

  /** Related anatomy structures */
  relatedAnatomy: string[];

  /** Related encyclopedia entries */
  encyclopediaLinks: string[];

  /** Differential diagnosis considerations */
  differentialDiagnosis: string[];

  /** Clinical pearls */
  clinicalPearls: string[];
}

/**
 * Symptom variation (e.g., different types of headache)
 */
export interface SymptomVariation {
  id: string;
  name: string;
  description: string;
  distinguishingFeatures: string[];
  typicalCauses: string[];
  specificRedFlags?: string[];
}

/**
 * Possible cause for a symptom
 */
export interface PossibleCause {
  conditionId: string;
  conditionName: string;
  likelihood: LikelihoodRank;
  mechanism: string;
  supportingFeatures: string[];
  opposingFeatures: string[];
  relatedConditions: string[];
  typicalPresentation: {
    onset: OnsetPattern;
    duration: DurationPattern;
    quality: SymptomQuality[];
    severity: { min: SeverityLevel; max: SeverityLevel };
  };
}

// ============================================
// Red Flags
// ============================================

/**
 * Red flag warning sign
 */
export interface RedFlag {
  id: string;
  description: string;
  concern: string;
  urgency: TriageLevel;
  associatedConditions: string[];
  actionRequired: string;
  timeframe: string;
  additionalContext?: string;
}

// ============================================
// Assessment Questions
// ============================================

/**
 * Follow-up question for symptom assessment
 */
export interface FollowUpQuestion {
  id: string;
  question: string;
  category: 'timing' | 'location' | 'quality' | 'severity' | 'modifying' | 'associated' | 'context' | 'history';
  clinicalRationale: string;
  answerType: 'single-choice' | 'multiple-choice' | 'scale' | 'text' | 'duration' | 'yes-no';
  options?: QuestionOption[];
  scaleRange?: { min: number; max: number; labels?: Record<number, string> };
  diagnosticValue: DiagnosticValue[];
  required: boolean;
  dependsOn?: { questionId: string; answer: string }[];
}

/**
 * Answer option for a question
 */
export interface QuestionOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

/**
 * Diagnostic value of an answer
 */
export interface DiagnosticValue {
  answer: string;
  suggestsConditions: { conditionId: string; weightChange: number }[];
  explanation: string;
}

// ============================================
// When to See Doctor
// ============================================

/**
 * Guidelines for when to seek medical care
 */
export interface WhenToSeeDoctor {
  emergency: string[];
  urgent: string[];
  soon: string[];
  routine: string[];
  selfCareOk: string[];
}

// ============================================
// Self-Care
// ============================================

/**
 * Self-care recommendation
 */
export interface SelfCareRecommendation {
  id: string;
  name: string;
  description: string;
  howTo: string[];
  cautions: string[];
  whenNotToUse: string[];
  effectiveness: 'high' | 'moderate' | 'low' | 'variable';
  evidenceLevel: 'strong' | 'moderate' | 'limited' | 'traditional';
}

// ============================================
// Symptom Assessment
// ============================================

/**
 * User's symptom input
 */
export interface SymptomInput {
  symptomId: string;
  description?: string;
  bodyRegion: BodyRegion;
  severity: SeverityLevel;
  onset: OnsetPattern;
  duration: DurationPattern;
  quality?: SymptomQuality[];
  answers: AnsweredQuestion[];
  associatedSymptoms?: string[];
  aggravatingFactors?: string[];
  relievingFactors?: string[];
}

/**
 * User's answered question
 */
export interface AnsweredQuestion {
  questionId: string;
  answer: string | string[] | number;
  timestamp: number;
}

/**
 * Symptom assessment result
 */
export interface SymptomAssessment {
  symptomInput: SymptomInput;
  possibleConditions: AssessedCondition[];
  triageRecommendation: TriageRecommendation;
  redFlagsPresent: RedFlag[];
  followUpQuestions: FollowUpQuestion[];
  selfCareRecommendations: SelfCareRecommendation[];
  anatomyHighlights: AnatomyHighlight[];
  confidence: number;
  disclaimer: string;
}

/**
 * Assessed possible condition
 */
export interface AssessedCondition {
  conditionId: string;
  conditionName: string;
  probability: number;
  matchingFeatures: string[];
  missingFeatures: string[];
  explanation: string;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  encyclopediaLink?: string;
}

/**
 * Triage recommendation
 */
export interface TriageRecommendation {
  level: TriageLevel;
  rationale: string;
  actionItems: string[];
  timeframe: string;
  warningToWatch: string[];
}

/**
 * Anatomy highlight for 3D viewer
 */
export interface AnatomyHighlight {
  structureId: string;
  structureName: string;
  color: string;
  opacity: number;
  reason: string;
  isPrimarySource: boolean;
}

// ============================================
// Body Region Mapping
// ============================================

/**
 * Body region definition
 */
export interface BodyRegionDefinition {
  id: BodyRegion;
  name: string;
  parentRegion?: BodyRegion;
  childRegions: BodyRegion[];
  anatomyIds: string[];
  commonSymptoms: string[];
  systems: string[];
}

/**
 * Body map region (for UI)
 */
export interface BodyMapRegion {
  id: string;
  name: string;
  bodyRegion: BodyRegion;
  svgPath: string;
  center: { x: number; y: number };
  view: 'anterior' | 'posterior' | 'lateral';
}

// ============================================
// Differential Diagnosis
// ============================================

/**
 * Differential diagnosis entry
 */
export interface DifferentialDiagnosis {
  conditionId: string;
  conditionName: string;
  category: string;
  likelihood: LikelihoodRank;
  keyFeatures: string[];
  distinguishingFeatures: string[];
  ruleOutCriteria: string[];
  workupSuggested: string[];
  urgency: TriageLevel;
}

/**
 * Symptom cluster (pattern of symptoms suggesting a condition)
 */
export interface SymptomCluster {
  id: string;
  name: string;
  symptoms: string[];
  suggestedConditions: string[];
  clinicalSignificance: string;
  prevalence: 'common' | 'uncommon' | 'rare';
}

// ============================================
// Search and Navigation
// ============================================

/**
 * Symptom search result
 */
export interface SymptomSearchResult {
  symptomId: string;
  symptomName: string;
  matchType: 'exact' | 'common-name' | 'medical-term' | 'partial' | 'related';
  relevanceScore: number;
  bodyRegion: BodyRegion;
  category: SymptomCategory;
}

/**
 * Symptom by body region index
 */
export interface SymptomsByRegion {
  region: BodyRegion;
  regionName: string;
  symptoms: SymptomSummary[];
}

/**
 * Symptom summary for lists
 */
export interface SymptomSummary {
  id: string;
  name: string;
  category: SymptomCategory;
  hasRedFlags: boolean;
  commonness: 'very-common' | 'common' | 'uncommon' | 'rare';
}

// ============================================
// AI Integration
// ============================================

/**
 * Natural language symptom parsing result
 */
export interface ParsedSymptomNL {
  symptoms: {
    name: string;
    matchedSymptomId?: string;
    confidence: number;
  }[];
  bodyRegions: BodyRegion[];
  severity?: SeverityLevel;
  duration?: DurationPattern;
  onset?: OnsetPattern;
  quality?: SymptomQuality[];
  associatedFactors?: string[];
  additionalContext?: string;
}

/**
 * AI symptom analysis request
 */
export interface SymptomAnalysisRequest {
  naturalLanguageInput?: string;
  structuredInput?: SymptomInput;
  userHistory?: {
    previousSymptoms?: string[];
    conditions?: string[];
    medications?: string[];
    allergies?: string[];
  };
  preferences?: {
    complexityLevel: 1 | 2 | 3 | 4 | 5;
    includeAnatomyContext: boolean;
    maxConditions: number;
  };
}

/**
 * AI symptom analysis response
 */
export interface SymptomAnalysisResponse {
  assessment: SymptomAssessment;
  narrative: string;
  followUpSuggestions: string[];
  educationalContent: {
    explanations: Record<string, string>;
    anatomyNotes: string[];
    preventionTips: string[];
  };
  confidence: number;
  reasoning: string;
}
