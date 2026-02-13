/**
 * Personalized Health Context Type Definitions
 *
 * Types for personalizing AI educational responses based on
 * user's conditions, medications, lab results, and history.
 */

/**
 * Relevance level for personalized content
 */
export type RelevanceLevel = 'directly-relevant' | 'related' | 'general-interest' | 'not-relevant';

/**
 * Personalization category
 */
export type PersonalizationCategory =
  | 'condition'
  | 'medication'
  | 'lab-result'
  | 'family-history'
  | 'lifestyle'
  | 'pharmacogenomics'
  | 'imaging'
  | 'symptom';

/**
 * User health profile for personalization
 */
export interface UserHealthProfile {
  conditions: UserCondition[];
  medications: UserMedication[];
  labResults: UserLabResult[];
  familyHistory: UserFamilyHistory[];
  pharmacogenomics: UserPGxData[];
  allergies: string[];
  surgeries: UserSurgery[];
  demographics: UserDemographics;
  lastUpdated: Date;
}

/**
 * User condition
 */
export interface UserCondition {
  conditionId: string;
  name: string;
  nameEs?: string;
  icdCode?: string;
  diagnosedDate?: Date;
  status: 'active' | 'resolved' | 'chronic';
  severity?: 'mild' | 'moderate' | 'severe';
  relatedStructures?: string[];
  relatedSystems?: string[];
}

/**
 * User medication
 */
export interface UserMedication {
  medicationId: string;
  name: string;
  genericName: string;
  dose?: string;
  frequency?: string;
  indication?: string;
  drugClass: string;
  mechanism?: string;
  targetStructures?: string[];
  startDate?: Date;
}

/**
 * User lab result (most recent)
 */
export interface UserLabResult {
  labId: string;
  testName: string;
  value: number;
  unit: string;
  referenceRange: { low: number; high: number };
  status: 'low' | 'normal' | 'high' | 'critical';
  collectedDate: Date;
  trend?: 'increasing' | 'stable' | 'decreasing';
  relatedOrgans?: string[];
}

/**
 * User family history
 */
export interface UserFamilyHistory {
  condition: string;
  relatives: string[];
  ageOfOnset?: number;
  relevanceToUser: string;
}

/**
 * User pharmacogenomics data
 */
export interface UserPGxData {
  gene: string;
  variant: string;
  phenotype: string;
  affectedDrugs: string[];
  recommendation: string;
}

/**
 * User surgery
 */
export interface UserSurgery {
  procedure: string;
  date: Date;
  affectedStructures: string[];
  notes?: string;
}

/**
 * User demographics
 */
export interface UserDemographics {
  age?: number;
  sex?: 'male' | 'female';
  ethnicity?: string;
}

/**
 * Personalization preferences
 */
export interface PersonalizationPreferences {
  enabled: boolean;
  showRelevanceIndicators: boolean;
  includeConditionContext: boolean;
  includeMedicationContext: boolean;
  includeLabContext: boolean;
  includeFamilyHistoryContext: boolean;
  includePGxContext: boolean;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  privacyMode: 'full' | 'limited' | 'off';
}

/**
 * Content relevance match
 */
export interface RelevanceMatch {
  matchId: string;
  category: PersonalizationCategory;
  matchedItem: string;
  relevanceLevel: RelevanceLevel;
  explanation: string;
  userContext: string;
}

/**
 * Personalized content context
 */
export interface PersonalizedContentContext {
  topicId: string;
  topicName: string;
  relevanceMatches: RelevanceMatch[];
  overallRelevance: RelevanceLevel;
  personalizedExplanation: string;
  userSpecificNotes: string[];
  relatedUserConditions: string[];
  relatedUserMedications: string[];
  relatedUserLabs: string[];
}

/**
 * AI prompt context for personalization
 */
export interface AIPromptContext {
  basePrompt: string;
  userHealthContext: string;
  relevantConditions: UserCondition[];
  relevantMedications: UserMedication[];
  relevantLabs: UserLabResult[];
  relevantPGx: UserPGxData[];
  privacyLevel: 'full' | 'limited' | 'off';
  requestedComplexity: number;
}

/**
 * Personalized response
 */
export interface PersonalizedResponse {
  baseContent: string;
  personalizedContent: string;
  relevanceIndicators: RelevanceIndicator[];
  userContextSections: UserContextSection[];
  disclaimers: string[];
}

/**
 * Relevance indicator for UI
 */
export interface RelevanceIndicator {
  type: 'condition' | 'medication' | 'lab' | 'family-history' | 'pgx';
  label: string;
  description: string;
  color: string;
}

/**
 * User context section in response
 */
export interface UserContextSection {
  sectionId: string;
  title: string;
  content: string;
  relatedTo: string;
  category: PersonalizationCategory;
}

/**
 * Lab trend interpretation
 */
export interface LabTrendInterpretation {
  labName: string;
  currentValue: number;
  trend: 'increasing' | 'stable' | 'decreasing';
  interpretation: string;
  personalizedContext: string;
  recommendations: string[];
  relatedConditions: string[];
  relatedMedications: string[];
}

/**
 * Medication context
 */
export interface MedicationPersonalizedContext {
  medicationName: string;
  mechanism: string;
  personalizedMechanism: string;
  relevantConditions: string[];
  relevantLabs: string[];
  pgxConsiderations: string[];
  interactions: string[];
  structuresAffected: string[];
}

/**
 * Condition context
 */
export interface ConditionPersonalizedContext {
  conditionName: string;
  overview: string;
  personalizedOverview: string;
  relevantMedications: string[];
  relevantLabs: string[];
  monitoringRecommendations: string[];
  anatomyHighlights: string[];
}

/**
 * Personalization session state
 */
export interface PersonalizationSessionState {
  profile: UserHealthProfile | null;
  preferences: PersonalizationPreferences;
  recentContexts: PersonalizedContentContext[];
  isLoaded: boolean;
}
