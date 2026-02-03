/**
 * AI Integration Types
 *
 * Core type definitions for the AI integration system.
 */

// ============================================================================
// Core AI Types
// ============================================================================

export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  citations?: Citation[];
  timestamp?: number;
}

export interface Citation {
  index: number;
  source: string;
  section?: string;
  url?: string;
  type?: 'textbook' | 'pubmed' | 'guideline' | 'reference';
}

export interface AIResponse {
  content: string;
  model: string;
  done: boolean;
  citations: Citation[];
  ragContext?: {
    chunksUsed: number;
    totalTokens: number;
    processingTimeMs: number;
  };
  error?: string;
}

// ============================================================================
// AI Context Types
// ============================================================================

export type ExplanationLevel = 'simple' | 'intermediate' | 'advanced' | 'clinical';

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export interface AIContextState {
  isAvailable: boolean;
  isLoading: boolean;
  currentModel: string | null;
  error: string | null;
  explanationLevel: ExplanationLevel;
  includePersonalization: boolean;
  includePubMed: boolean;
  streamingEnabled: boolean;
}

// ============================================================================
// Structure Context Types
// ============================================================================

export interface StructureContext {
  structureId: string;
  structureName: string;
  system?: string;
  latinName?: string;
  location?: string;
  relatedStructures?: string[];
}

export interface HistologyContext {
  slideId: string;
  tissueName: string;
  stain: string;
  magnification: string;
  organSource?: string;
  keyFeatures?: string[];
}

export interface ConditionContext {
  conditionId: string;
  conditionName: string;
  category?: string;
  severity?: string;
  userHasCondition?: boolean;
}

// ============================================================================
// Health Context Types
// ============================================================================

export interface DashboardData {
  summary: {
    totalConditions: number;
    totalMedications: number;
    totalLabResults: number;
  };
  activeConditions: Array<{
    name: string;
    status: string;
    severity?: string;
  }>;
  currentMedications: Array<{
    name: string;
    dosage?: string;
    frequency?: string;
  }>;
  recentLabs: Array<{
    testName: string;
    value: number | string;
    unit?: string;
    status?: string;
    trend?: string;
  }>;
  recentSymptoms: Array<{
    description: string;
    severity: number;
    location?: string;
    onsetDate?: string;
  }>;
  vitalsSummary?: {
    restingHeartRate?: number;
    hrv?: number;
    sleepHours?: number;
    recoveryScore?: number;
  };
}

// ============================================================================
// AI Request Types
// ============================================================================

export interface AIExplainRequest {
  topic: string;
  context?: StructureContext | HistologyContext | ConditionContext;
  level?: ExplanationLevel;
  healthContext?: DashboardData | null;
  customSystemPrompt?: string;
  followUpQuestions?: boolean;
}

export interface AIChatRequest {
  messages: AIMessage[];
  systemPrompt?: string;
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
  ragOptions?: {
    structureName?: string;
    symptom?: string;
    labName?: string;
    labValue?: string;
    system?: string;
    complexityLevel?: ComplexityLevel;
    maxTokens?: number;
    includePubMed?: boolean;
    pubMedQuery?: string;
  };
}

export interface AISearchRequest {
  query: string;
  collections?: string[];
  maxResults?: number;
  minScore?: number;
  complexityLevel?: ComplexityLevel;
}

export interface AIQuizRequest {
  topic: string;
  context?: StructureContext | HistologyContext;
  questionCount?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  questionTypes?: ('multiple_choice' | 'true_false' | 'fill_blank')[];
}

// ============================================================================
// AI Response Types
// ============================================================================

export interface AIExplanation {
  title: string;
  summary: string;
  sections: {
    title: string;
    content: string;
    level?: ExplanationLevel;
  }[];
  keyPoints: string[];
  relatedTopics?: string[];
  suggestedQuestions?: string[];
  citations: Citation[];
  healthConnections?: string[];
}

export interface AISearchResult {
  id: string;
  title: string;
  snippet: string;
  score: number;
  source: string;
  collection: string;
  url?: string;
  metadata?: Record<string, unknown>;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'fill_blank';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  citation?: Citation;
}

export interface AIQuiz {
  id: string;
  topic: string;
  questions: QuizQuestion[];
  generatedAt: number;
  estimatedTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

// ============================================================================
// Anatomy Chat Context Types
// ============================================================================

/**
 * Structured context passed from the anatomy screen to the AI chat interface.
 * Carries region data, body system info, conditions, and complexity so the
 * chat can build a rich, contextual system prompt.
 */
export interface AnatomyChatContext {
  /** The region ID from the 3D model (e.g. "heart", "chest", "leftArm") */
  regionId: string;
  /** Human-readable region name (e.g. "Heart", "Chest") */
  regionName: string;
  /** Body systems associated with this region */
  bodySystems: string[];
  /** Anatomy structures discovered via ContentService */
  anatomyStructures: string[];
  /** Symptoms associated with this region's body systems */
  symptoms: string[];
  /** Conditions relevant to this region (from patient data or content) */
  conditions: string[];
  /** Medical specialties relevant to this region */
  specialties: string[];
  /** Complexity / explanation level (1-5) */
  complexityLevel: ComplexityLevel;
  /** Optional initial question the user wants answered */
  initialQuestion?: string;
}

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationIntent {
  action: 'navigate' | 'zoom' | 'highlight' | 'isolate' | 'compare';
  target?: string;
  structureId?: string;
  system?: string;
  viewAngle?: { x: number; y: number; z: number };
  zoomLevel?: number;
  confidence?: number;
}

export interface ParsedIntent {
  type: 'anatomy_navigation' | 'question' | 'explanation' | 'search' | 'quiz' | 'comparison';
  navigationIntent?: NavigationIntent;
  query?: string;
  entities?: string[];
  confidence: number;
}

// ============================================================================
// Event Types
// ============================================================================

export interface AIEvent {
  type: 'request_start' | 'stream_chunk' | 'request_complete' | 'error';
  timestamp: number;
  data?: unknown;
  error?: string;
}

export type AIEventHandler = (event: AIEvent) => void;
