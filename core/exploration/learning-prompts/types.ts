/**
 * Symptom-Triggered Learning Prompts Type Definitions
 *
 * Types for contextual educational content triggered when
 * users log symptoms, with anatomy links and guidance.
 */

/**
 * Content type for learning prompts
 */
export type LearningContentType =
  | 'anatomy'
  | 'pathophysiology'
  | 'differential'
  | 'related-conditions'
  | 'when-to-seek-care'
  | 'lifestyle'
  | 'prevention';

/**
 * Prompt display priority
 */
export type PromptPriority = 'high' | 'medium' | 'low';

/**
 * Prompt state
 */
export type PromptState = 'pending' | 'shown' | 'dismissed' | 'explored';

/**
 * Symptom learning prompt
 */
export interface SymptomLearningPrompt {
  promptId: string;
  symptom: string;
  symptomAliases: string[];
  title: string;
  teaser: string;
  contentSections: LearningContentSection[];
  anatomyLinks: AnatomyLink[];
  relatedSymptoms: string[];
  relatedConditions: RelatedCondition[];
  whenToSeekCare: CareGuidancePrompt;
  priority: PromptPriority;
  estimatedReadTime: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Learning content section
 */
export interface LearningContentSection {
  sectionId: string;
  type: LearningContentType;
  title: string;
  summary: string;
  content: string;
  visualizationId?: string;
  interactiveElements?: InteractiveElement[];
}

/**
 * Interactive element in content
 */
export interface InteractiveElement {
  elementId: string;
  type: 'anatomy-highlight' | 'pathway-animation' | 'quiz' | 'explore-link';
  label: string;
  action: string;
  targetId?: string;
}

/**
 * Link to anatomy visualization
 */
export interface AnatomyLink {
  structureId: string;
  structureName: string;
  system: string;
  relevance: string;
  viewSettings: {
    cameraPosition: { x: number; y: number; z: number };
    highlightColor: string;
    isolate: boolean;
  };
}

/**
 * Related condition summary
 */
export interface RelatedCondition {
  conditionId: string;
  name: string;
  relationship: 'causes' | 'caused-by' | 'associated' | 'differential';
  brief: string;
  learnMoreLink?: string;
}

/**
 * Care guidance in prompt
 */
export interface CareGuidancePrompt {
  summary: string;
  urgentSigns: string[];
  routineReasons: string[];
  selfCareOptions: string[];
  disclaimer: string;
}

/**
 * User's dismissed prompts tracking
 */
export interface DismissedPrompt {
  promptId: string;
  symptom: string;
  dismissedAt: Date;
  reason?: 'not-interested' | 'already-know' | 'not-relevant' | 'other';
  showAgainAfter?: Date;
}

/**
 * User learning prompt preferences
 */
export interface LearningPromptPreferences {
  enabled: boolean;
  autoShowLevel: 'always' | 'new-symptoms' | 'never';
  preferredComplexity: 1 | 2 | 3 | 4 | 5;
  dismissedPrompts: DismissedPrompt[];
  exploredPrompts: string[];
  showAfterDismissDays: number;
}

/**
 * Prompt trigger event
 */
export interface PromptTriggerEvent {
  triggerId: string;
  symptom: string;
  timestamp: Date;
  context: SymptomContext;
  matchedPrompts: SymptomLearningPrompt[];
  selectedPrompt: SymptomLearningPrompt | null;
}

/**
 * Symptom context for prompt selection
 */
export interface SymptomContext {
  severity?: number;
  duration?: string;
  frequency?: string;
  isNew: boolean;
  relatedToExistingConditions: boolean;
  userAge?: number;
  userSex?: 'male' | 'female';
}

/**
 * Learning prompt display state
 */
export interface LearningPromptDisplayState {
  isVisible: boolean;
  currentPrompt: SymptomLearningPrompt | null;
  triggerEvent: PromptTriggerEvent | null;
  displayMode: 'teaser' | 'expanded' | 'fullscreen';
  currentSection: string | null;
  interactionHistory: PromptInteraction[];
}

/**
 * Prompt interaction record
 */
export interface PromptInteraction {
  promptId: string;
  action: 'viewed' | 'expanded' | 'dismissed' | 'explored-section' | 'clicked-anatomy';
  timestamp: Date;
  details?: string;
}

/**
 * Prompt search result
 */
export interface PromptSearchResult {
  prompt: SymptomLearningPrompt;
  matchScore: number;
  matchedTerm: string;
  alreadyDismissed: boolean;
  alreadyExplored: boolean;
}
