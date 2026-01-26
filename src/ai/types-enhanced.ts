/**
 * Enhanced AI Integration Types
 *
 * Extended type definitions for the enhanced AI integration components.
 */

import type {
  ExplanationLevel,
  DashboardData,
  Citation,
  AIResponse,
  StructureContext,
  HistologyContext,
  ConditionContext,
} from './types';

// ============================================================================
// Content Enhancement Types
// ============================================================================

export interface EnhancedContent {
  originalContent: string;
  enhancedContent: string;
  summary: string;
  keyPoints: string[];
  relatedTopics: string[];
  citations: Citation[];
  complexityLevel: ExplanationLevel;
  timestamp: number;
}

export interface ContentEnhancementRequest {
  content: string;
  context?: {
    topic?: string;
    structureContext?: StructureContext;
    histologyContext?: HistologyContext;
    conditionContext?: ConditionContext;
  };
  targetLevel?: ExplanationLevel;
  includeKeyPoints?: boolean;
  includeRelatedTopics?: boolean;
}

// ============================================================================
// Contextual Help Types
// ============================================================================

export interface ContextualHelpRequest {
  question: string;
  viewContext: ViewContext;
  userContext?: UserContext;
}

export interface ViewContext {
  currentView: string;
  selectedEntity?: {
    type: 'structure' | 'condition' | 'medication' | 'lab' | 'symptom';
    id: string;
    name: string;
  };
  recentActions?: string[];
  journeyContext?: string;
}

export interface UserContext {
  complexityLevel: ExplanationLevel;
  healthProfile?: DashboardData;
  preferences?: {
    verbosity: 'concise' | 'detailed';
    includeExamples: boolean;
    includeAnalogies: boolean;
  };
}

export interface ContextualHelpResponse extends AIResponse {
  suggestedFollowUps: string[];
  relatedActions?: {
    label: string;
    action: string;
    targetView?: string;
  }[];
}

// ============================================================================
// Symptom Analysis Types
// ============================================================================

export interface SymptomAnalysisRequest {
  symptoms: SymptomInput[];
  healthContext?: DashboardData;
  includeAnatomicalContext?: boolean;
  includeDifferentials?: boolean;
}

export interface SymptomInput {
  description: string;
  severity: number;
  location?: string;
  duration?: string;
  frequency?: string;
  onset?: string;
  triggers?: string[];
  relievingFactors?: string[];
  associatedSymptoms?: string[];
}

export interface SymptomAnalysisResult {
  summary: string;
  possibleCauses: PossibleCause[];
  anatomicalSystems: AffectedSystem[];
  redFlags: RedFlagItem[];
  recommendedActions: string[];
  followUpQuestions: string[];
  citations: Citation[];
  disclaimer: string;
}

export interface PossibleCause {
  condition: string;
  likelihood: 'common' | 'less-common' | 'rare';
  explanation: string;
  matchingSymptoms: string[];
  relatedAnatomy?: string[];
}

export interface AffectedSystem {
  systemId: string;
  systemName: string;
  relevance: 'primary' | 'secondary';
  explanation: string;
  structures: string[];
}

export interface RedFlagItem {
  symptom: string;
  concern: string;
  urgency: 'immediate' | 'urgent' | 'soon';
  recommendation: string;
}

// ============================================================================
// Medication Checker Types
// ============================================================================

export interface MedicationCheckRequest {
  medications: MedicationInput[];
  healthContext?: DashboardData;
  checkInteractions?: boolean;
  checkContraindications?: boolean;
  includeEducation?: boolean;
}

export interface MedicationInput {
  name: string;
  dosage?: string;
  frequency?: string;
  purpose?: string;
}

export interface MedicationCheckResult {
  summary: string;
  interactions: DrugInteraction[];
  contraindications: Contraindication[];
  educationalContent: MedicationEducation[];
  overallRisk: 'low' | 'moderate' | 'high' | 'critical';
  recommendations: string[];
  citations: Citation[];
  disclaimer: string;
}

export interface DrugInteraction {
  drug1: string;
  drug2: string;
  severity: 'minor' | 'moderate' | 'major' | 'contraindicated';
  mechanism: string;
  effect: string;
  management: string;
  affectedSystems: string[];
}

export interface Contraindication {
  medication: string;
  condition: string;
  severity: 'relative' | 'absolute';
  reason: string;
  alternatives?: string[];
}

export interface MedicationEducation {
  medication: string;
  mechanism: string;
  commonSideEffects: string[];
  importantConsiderations: string[];
}

// ============================================================================
// Lab Interpreter Types
// ============================================================================

export interface LabInterpretationRequest {
  labs: LabInput[];
  healthContext?: DashboardData;
  includeNormalRanges?: boolean;
  includeTrends?: boolean;
  includeRecommendations?: boolean;
}

export interface LabInput {
  testName: string;
  value: number | string;
  unit?: string;
  referenceRange?: string;
  collectedAt?: string;
  previousValue?: number | string;
}

export interface LabInterpretationResult {
  summary: string;
  interpretations: LabInterpretation[];
  patterns: LabPattern[];
  recommendations: string[];
  followUpTests?: string[];
  citations: Citation[];
  disclaimer: string;
}

export interface LabInterpretation {
  testName: string;
  value: string;
  status: 'normal' | 'low' | 'high' | 'critical';
  interpretation: string;
  clinicalSignificance: string;
  relatedConditions?: string[];
  relatedAnatomy?: string[];
}

export interface LabPattern {
  patternName: string;
  involvedTests: string[];
  significance: string;
  possibleCauses: string[];
}

// ============================================================================
// Health Summary Types
// ============================================================================

export interface HealthSummaryRequest {
  healthData: DashboardData;
  includeConditions?: boolean;
  includeMedications?: boolean;
  includeLabs?: boolean;
  includeVitals?: boolean;
  includeSymptoms?: boolean;
  summaryLength?: 'brief' | 'standard' | 'comprehensive';
}

export interface HealthSummaryResult {
  overview: string;
  sections: HealthSummarySection[];
  keyInsights: string[];
  actionItems: string[];
  questionsForProvider: string[];
  citations: Citation[];
  generatedAt: number;
}

export interface HealthSummarySection {
  title: string;
  content: string;
  highlights?: string[];
  concerns?: string[];
}

// ============================================================================
// Education Adapter Types
// ============================================================================

export interface EducationAdaptRequest {
  content: string;
  currentLevel: ExplanationLevel;
  targetLevel: ExplanationLevel;
  context?: {
    topic?: string;
    userBackground?: string;
  };
}

export interface AdaptedEducation {
  content: string;
  level: ExplanationLevel;
  simplifications?: string[];
  elaborations?: string[];
  glossary?: Record<string, string>;
  examples?: string[];
  analogies?: string[];
}

// ============================================================================
// Follow-Up Generator Types
// ============================================================================

export interface FollowUpRequest {
  originalQuestion: string;
  aiResponse: string;
  context?: {
    topic?: string;
    userLevel?: ExplanationLevel;
    healthContext?: DashboardData;
  };
  count?: number;
}

export interface FollowUpResult {
  questions: FollowUpQuestion[];
  relatedTopics: string[];
  deeperDiveOptions: string[];
}

export interface FollowUpQuestion {
  question: string;
  category: 'clarification' | 'deeper-dive' | 'related' | 'practical';
  priority: 'high' | 'medium' | 'low';
}

// ============================================================================
// Offline Fallback Types
// ============================================================================

export interface FallbackResponse {
  content: string;
  isOfflineFallback: true;
  cachedAt?: number;
  source: 'cache' | 'static' | 'partial';
  limitedFunctionality: string[];
}

export interface OfflineCapability {
  feature: string;
  available: boolean;
  fallbackBehavior?: string;
}

// ============================================================================
// Hook State Types
// ============================================================================

export interface AIEnhancementState {
  isProcessing: boolean;
  error: string | null;
  lastEnhancement: EnhancedContent | null;
}

export interface AIChatState {
  messages: ChatMessage[];
  isTyping: boolean;
  error: string | null;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  citations?: Citation[];
  timestamp: number;
  isStreaming?: boolean;
}

export interface AIContextProviderValue {
  viewContext: ViewContext;
  userContext: UserContext;
  journeyContext: string;
  updateViewContext: (context: Partial<ViewContext>) => void;
  updateUserContext: (context: Partial<UserContext>) => void;
}
