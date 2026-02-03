/**
 * Anatomy Intent Recognizer
 *
 * Uses AI/ML to recognize user intents from natural language for anatomy-related queries.
 * Works with the Voice Command Parser to understand complex queries beyond simple keyword matching.
 *
 * Features:
 * - Dual mode: AI-powered and rule-based fallback
 * - Entity extraction (region, layer, condition, medication)
 * - Confidence scoring
 * - Clarification prompts for ambiguous queries
 * - Context awareness (previous conversation)
 * - React hook for easy integration
 */

import { useState, useCallback, useRef } from 'react';
import { useAI } from './useAI';

// ============================================================================
// Types
// ============================================================================

/**
 * Supported anatomy intent types
 */
export type AnatomyIntent =
  | 'navigate_to_region'
  | 'show_layer'
  | 'compare_regions'
  | 'explain_structure'
  | 'show_condition'
  | 'show_medication'
  | 'ask_question'
  | 'search'
  | 'reset_view'
  | 'unknown';

/**
 * Extracted entities from user input
 */
export interface IntentEntities {
  /** Anatomical region mentioned (e.g., 'heart', 'brain') */
  region?: string;
  /** Layer type mentioned (e.g., 'skin', 'muscle', 'bone') */
  layer?: string;
  /** Medical condition mentioned */
  condition?: string;
  /** Medication mentioned */
  medication?: string;
  /** Specific anatomical structure */
  structure?: string;
  /** Body system mentioned */
  system?: string;
}

/**
 * Result of intent recognition
 */
export interface IntentRecognitionResult {
  /** Recognized intent type */
  intent: AnatomyIntent;
  /** Confidence score (0-1) */
  confidence: number;
  /** Extracted entities from the input */
  entities: IntentEntities;
  /** Suggested action to take based on the intent */
  suggestedAction?: string;
  /** Whether clarification is needed from the user */
  requiresClarification: boolean;
  /** Prompt to show user when clarification is needed */
  clarificationPrompt?: string;
  /** Original input text */
  originalText?: string;
  /** Timestamp of recognition */
  timestamp: number;
  /** Method used for recognition ('ai' | 'rule-based') */
  method: 'ai' | 'rule-based';
}

/**
 * Options for configuring the intent recognizer
 */
export interface IntentRecognizerOptions {
  /** Whether to use AI or rule-based recognition */
  useAI: boolean;
  /** Minimum confidence threshold (0-1) */
  minConfidence: number;
  /** Previous messages for context awareness */
  contextWindow?: string[];
  /** Maximum context window size */
  maxContextSize?: number;
  /** Whether to enable clarification for ambiguous queries */
  enableClarification: boolean;
  /** Default action when intent is unknown */
  defaultAction?: string;
}

/**
 * Default options for the intent recognizer
 */
export const DEFAULT_RECOGNIZER_OPTIONS: IntentRecognizerOptions = {
  useAI: true,
  minConfidence: 0.6,
  contextWindow: [],
  maxContextSize: 5,
  enableClarification: true,
  defaultAction: 'ask_question',
};

// ============================================================================
// Intent Patterns for Rule-Based Matching
// ============================================================================

/**
 * Regular expression patterns for each intent type
 * Patterns are ordered by specificity (more specific patterns first)
 */
export const INTENT_PATTERNS: Record<AnatomyIntent, RegExp[]> = {
  navigate_to_region: [
    // Direct navigation commands with anatomy terms
    /(?:show|display|navigate|go|zoom|take me|focus on).{0,30}(?:heart|brain|lungs?|liver|kidneys?|stomach|intestines?|bones?|muscles?|nerves?|spine|skull|rib|chest|abdomen|pelvis|limbs?|arms?|legs?|hands?|feet)/i,
    // Where is / find queries
    /(?:where is|where are|find|locate|point to).{0,20}(?:heart|brain|lungs?|liver|kidneys?|stomach|intestines?|pancreas|spleen|bladder|gallbladder)/i,
    // "Show me the..." pattern
    /\b(show me|let me see|display)\s+(?:the\s+)?(heart|brain|lungs?|liver|kidneys?|stomach)/i,
    // View/look at patterns
    /\b(view|look at|examine)\s+(?:the\s+)?(anatomy|structure|organ)/i,
  ],

  show_layer: [
    // Layer switching commands
    /(?:show|display|switch to|change to|view).{0,15}(?:skin|epidermis|dermis|muscle|skeletal|bone|vessels?|arteries?|veins?|nerves?|organs?|lymphatic).{0,10}(?:layer|system|view)?/i,
    // Layer-specific queries
    /\b(skin|muscle|bone|vessel|nerve)\s+(?:layer|view|mode)\b/i,
    // "Show me the X layer"
    /\bshow\s+(?:me\s+)?(?:the\s+)?(muscular|skeletal|nervous|circulatory|lymphatic)\s+(?:system|layer)\b/i,
    // Peel back/reveal patterns
    /\b(peel\s+back|remove|hide|toggle)\s+(?:the\s+)?(skin|muscle|layer)\b/i,
  ],

  compare_regions: [
    // Direct comparison commands
    /(?:compare|contrast|difference between|versus|vs).{0,40}(?:and|with).{0,30}(?:heart|brain|lungs?|liver|kidneys?)/i,
    // Side-by-side requests
    /\b(side by side|alongside|next to|comparison of)\b.{0,30}(?:heart|brain|lungs?|liver)/i,
    // "What's the difference..."
    /\bwhat\s+(?:is|are)\s+(?:the\s+)?differences?\s+between\s+(?:the\s+)?(.+?)\s+and\s+(.+)/i,
    // "Show both..."
    /\bshow\s+(?:me\s+)?(?:both|all)\s+(?:the\s+)?(heart|brain|lungs|organs)/i,
  ],

  explain_structure: [
    // Direct explanation requests
    /(?:explain|describe|tell me about|what is|how does).{0,30}(?:heart|brain|lungs?|liver|kidneys?|stomach|intestines?|pancreas|spleen|function|work)/i,
    // Function/purpose questions
    /\bwhat\s+(?:does|is)\s+(?:the\s+)?(heart|brain|liver|kidney|lung).{0,20}(?:do|function|purpose|role)/i,
    // "How does X work"
    /\bhow\s+(?:does|do)\s+(?:the\s+)?(.+?)\s+(?:work|function|operate)/i,
    // Educational queries
    /\b(learn about|teach me|educate me|information about)\s+(.+)/i,
  ],

  show_condition: [
    // Condition display requests
    /(?:show|display|see|view).{0,20}(?:condition|disease|disorder|illness|problem|affect).{0,30}(?:heart|brain|lungs?|liver|diabetes|cancer)/i,
    // "What does X look like"
    /\bwhat\s+(?:does|do)\s+(.+?)\s+(?:look|appear)\s+like\s+(?:with|in|when|having)\s+(.+)/i,
    // Condition impact queries
    /\bhow\s+(?:does|do)\s+(.+?)\s+affect.{0,20}(?:the\s+)?(heart|brain|body)/i,
  ],

  show_medication: [
    // Medication display requests
    /(?:show|display|see|where|how).{0,20}(?:medication|medicine|drug|pill|treatment).{0,30}(?:work|act|affect|in|on)/i,
    // Mechanism of action queries
    /\bhow\s+(?:does|do)\s+(.+?)\s+(?:work|act|function)\s+(?:in|on)\s+(?:the\s+)?(body|system)/i,
    // "Show me where X works"
    /\bshow\s+(?:me\s+)?(?:where|how)\s+(.+?)\s+(?:affects|works|acts)/i,
  ],

  ask_question: [
    // General question patterns (low priority)
    /\b(what|why|how|when|where|who|can|could|would|will|is|are|does|do)\s+.+\?/i,
    // Help requests
    /\b(help|assist|guide).{0,20}(?:me|with|understand)/i,
    // Curiosity expressions
    /\b(i wonder|curious about|interested in)\s+(.+)/i,
  ],

  search: [
    // Explicit search commands
    /\b(search|find|look up|lookup|query)\s+(?:for\s+)?(.+)/i,
    // "I want to find..."
    /\b(i want|i need|let me)\s+(?:to\s+)?(search|find|look)\s+(?:for\s+)?(.+)/i,
    // Information seeking
    /\b(information|info|details|data)\s+(?:about|on|regarding)\s+(.+)/i,
  ],

  reset_view: [
    // Reset commands
    /\b(reset|restore|return|go back|default|initial|original|home|start over)\s+(?:the\s+)?(?:view|position|camera|zoom|everything)?\b/i,
    // Clear/hide all
    /\b(clear|hide all|remove all|deselect)\s+(?:the\s+)?(?:selection|highlights|view)?\b/i,
    // "Start over"
    /\b(start over|begin again|fresh start|clear all)\b/i,
  ],

  unknown: [
    // Catch-all pattern (should never match directly)
    /./,
  ],
};

// ============================================================================
// Entity Extraction Patterns
// ============================================================================

/**
 * Patterns for extracting specific entities from user input
 */
export const ENTITY_PATTERNS = {
  /** Anatomical regions */
  region: [
    /\b(heart|cardiac|brain|cerebral|lungs?|pulmonary|liver|hepatic|kidneys?|renal|stomach|gastric|intestines?|intestinal|bowel|pancreas|pancreatic|spleen|splenic|bladder|urinary|gallbladder|appendix|thyroid|adrenals?|pituitary|hypothalamus|thalamus|cerebellum|brainstem|spinal cord|spine|vertebrae|ribs?|sternum|pelvis|skull|cranium|jaw|mandible|temple|forehead|chest|thorax|thoracic|abdomen|abdominal|groin|hip|shoulder|knee|elbow|wrist|ankle|neck|cervical|lumbar|sacral)\b/gi,
  ],

  /** Anatomical layers */
  layer: [
    /\b(skin|epidermis|dermis|hypodermis|subcutaneous|muscle|muscular|tendon|ligament|fascia|bone|bony|skeletal|cartilage|vessels?|vasculature|arter(y|ies)|vein|venous|capillaries?|nerves?|nervous|neural|neurons?|organs?|tissues?|cells?)\b/gi,
  ],

  /** Medical conditions */
  condition: [
    /\b(diabetes|hypertension|cancer|tumor|fracture|infection|disease|syndrome|disorder|inflammation|arthritis|asthma|copd|emphysema|pneumonia|bronchitis|heart failure|arrhythmia|atherosclerosis|stroke|aneurysm|seizure|epilepsy|migraine|dementia|alzheimer|parkinson|depression|anxiety|fibromyalgia|lupus|ms|multiple sclerosis)\b/gi,
  ],

  /** Medications */
  medication: [
    /\b(insulin|metformin|lisinopril|atorvastatin|simvastatin|metoprolol|amlodipine|omeprazole|albuterol|gabapentin|prednisone|ibuprofen|acetaminophen|aspirin|warfarin|levothyroxine|medication|medicine|drug|pill|tablet|injection)\b/gi,
  ],

  /** Body systems */
  system: [
    /\b(cardiovascular|circulatory|respiratory|digestive|gastrointestinal|nervous|neurological|skeletal|muscular|endocrine|immune|lymphatic|urinary|renal|reproductive|integumentary|sensory|visual|auditory)\s+(?:system)?\b/gi,
  ],

  /** Anatomical structures */
  structure: [
    /\b(atrium|ventricle|valve|aorta|artery|vein|capillary|lobe|neuron|synapse|axon|dendrite|muscle fiber|bone marrow|joint|ligament|tendon|cartilage|membrane|cell|nucleus|organelle)\b/gi,
  ],
};

/** Pattern weights for entity scoring */
const ENTITY_WEIGHTS: Record<keyof IntentEntities, number> = {
  region: 1.0,
  layer: 0.8,
  condition: 0.9,
  medication: 0.85,
  system: 0.75,
  structure: 0.7,
};

// ============================================================================
// Clarification Templates
// ============================================================================

/**
 * Templates for generating clarification prompts
 */
const CLARIFICATION_TEMPLATES: Record<AnatomyIntent, string[]> = {
  navigate_to_region: [
    'Which specific body region would you like to see? (e.g., heart, brain, lungs)',
    'I can navigate to different body parts. Which region interests you?',
    'Could you specify which anatomical area you\'d like to explore?',
  ],
  show_layer: [
    'Which layer would you like to view? (skin, muscle, bone, vessels, nerves)',
    'I can show different anatomical layers. Which one interests you?',
    'Would you like to see the skin, muscle, bone, or nervous system layer?',
  ],
  compare_regions: [
    'Which two body parts would you like to compare?',
    'I can compare different structures. What would you like to compare?',
    'Please specify the regions or structures you\'d like to compare side by side.',
  ],
  explain_structure: [
    'Which structure would you like me to explain?',
    'I can explain how different body parts work. Which one interests you?',
    'What specific anatomical structure would you like to learn about?',
  ],
  show_condition: [
    'Which medical condition would you like to visualize?',
    'I can show how various conditions affect the body. Which condition interests you?',
    'Please specify the condition you\'d like to see demonstrated.',
  ],
  show_medication: [
    'Which medication would you like to see in action?',
    'I can visualize how medications work. Which one interests you?',
    'Please specify the medication you\'d like to learn about.',
  ],
  ask_question: [
    'What would you like to know about the human body?',
    'I can answer questions about anatomy and physiology. What\'s your question?',
    'Feel free to ask me anything about how the body works.',
  ],
  search: [
    'What topic would you like me to search for?',
    'I can search for information on any body system or condition. What are you looking for?',
    'Please tell me what you\'d like to find information about.',
  ],
  reset_view: [
    'Would you like to reset the view to the default position?',
    'I can restore the original view. Is that what you\'d like?',
  ],
  unknown: [
    'I\'m not sure I understood. Could you rephrase your request?',
    'I didn\'t catch that. Try asking about a specific body part, layer, or condition.',
    'Could you be more specific? For example: "Show me the heart" or "Explain how lungs work"',
  ],
};

// ============================================================================
// Main Recognizer Class
// ============================================================================

/**
 * Anatomy Intent Recognizer class
 *
 * Provides dual-mode intent recognition:
 * 1. AI-powered recognition using the useAI hook
 * 2. Rule-based fallback using regex patterns
 *
 * @example
 * ```typescript
 * const recognizer = new AnatomyIntentRecognizer({
 *   useAI: true,
 *   minConfidence: 0.6,
 * });
 *
 * const result = await recognizer.recognizeIntent('Show me the heart');
 * // result.intent === 'navigate_to_region'
 * // result.entities.region === 'heart'
 * ```
 */
export class AnatomyIntentRecognizer {
  private options: IntentRecognizerOptions;
  private ai: ReturnType<typeof useAI> | null;
  private contextHistory: string[];

  /**
   * Creates a new AnatomyIntentRecognizer instance
   *
   * @param options - Configuration options for the recognizer
   * @param aiInstance - Optional pre-initialized AI instance from useAI()
   */
  constructor(
    options: Partial<IntentRecognizerOptions> = {},
    aiInstance: ReturnType<typeof useAI> | null = null
  ) {
    this.options = { ...DEFAULT_RECOGNIZER_OPTIONS, ...options };
    this.ai = aiInstance;
    this.contextHistory = this.options.contextWindow || [];
  }

  /**
   * Main entry point for intent recognition.
   * Chooses between AI and rule-based recognition based on options and availability.
   *
   * @param text - User input text to analyze
   * @returns Promise resolving to the recognition result
   */
  async recognizeIntent(text: string): Promise<IntentRecognitionResult> {
    const normalizedText = this.normalizeText(text);

    // Add to context history
    this.addToContext(normalizedText);

    // Try AI-based recognition if enabled and available
    if (this.options.useAI && this.ai?.isAvailable) {
      try {
        const aiResult = await this.recognizeIntentWithAI(normalizedText);
        if (aiResult.confidence >= this.options.minConfidence) {
          return aiResult;
        }
        // Fall through to rule-based if AI confidence is too low
      } catch (error) {
        // AI failed, fall back to rule-based
        console.warn('AI recognition failed, using rule-based fallback:', error);
      }
    }

    // Use rule-based recognition
    return this.recognizeIntentRuleBased(normalizedText);
  }

  /**
   * Rule-based intent recognition using regex patterns.
   * Used as fallback when AI is unavailable or confidence is low.
   *
   * @param text - Normalized user input text
   * @returns Recognition result based on pattern matching
   */
  recognizeIntentRuleBased(text: string): IntentRecognitionResult {
    const scores: Record<AnatomyIntent, number> = {
      navigate_to_region: 0,
      show_layer: 0,
      compare_regions: 0,
      explain_structure: 0,
      show_condition: 0,
      show_medication: 0,
      ask_question: 0,
      search: 0,
      reset_view: 0,
      unknown: 0.1, // Base score for unknown
    };

    // Score each intent based on pattern matches
    (Object.keys(INTENT_PATTERNS) as AnatomyIntent[]).forEach((intent) => {
      if (intent === 'unknown') return;

      const patterns = INTENT_PATTERNS[intent];
      patterns.forEach((pattern, index) => {
        // Reset lastIndex for global regexes
        pattern.lastIndex = 0;

        if (pattern.test(text)) {
          // Higher weight for earlier (more specific) patterns
          const patternWeight = 1 - (index * 0.1);
          scores[intent] += patternWeight;
        }
      });
    });

    // Find the highest scoring intent
    let bestIntent: AnatomyIntent = 'unknown';
    let bestScore = 0;

    (Object.keys(scores) as AnatomyIntent[]).forEach((intent) => {
      if (scores[intent] > bestScore) {
        bestScore = scores[intent];
        bestIntent = intent;
      }
    });

    // Extract entities
    const entities = this.extractEntities(text);

    // Calculate confidence based on score and entity presence
    const entityBoost = Object.values(entities).filter(Boolean).length * 0.1;
    const confidence = Math.min(0.95, bestScore * 0.3 + entityBoost);

    // Determine if clarification is needed
    const requiresClarification = this.needsClarification({
      intent: bestIntent,
      confidence,
      entities,
    });

    // Generate clarification prompt if needed
    const clarificationPrompt = requiresClarification
      ? this.generateClarification({ intent: bestIntent, entities })
      : undefined;

    // Generate suggested action
    const suggestedAction = this.generateSuggestedAction(bestIntent, entities);

    return {
      intent: bestIntent,
      confidence,
      entities,
      suggestedAction,
      requiresClarification,
      clarificationPrompt,
      originalText: text,
      timestamp: Date.now(),
      method: 'rule-based',
    };
  }

  /**
   * AI-based intent recognition using the useAI hook.
   * Provides more nuanced understanding but requires AI availability.
   *
   * @param text - Normalized user input text
   * @returns Promise resolving to AI-based recognition result
   */
  async recognizeIntentWithAI(text: string): Promise<IntentRecognitionResult> {
    if (!this.ai) {
      throw new Error('AI instance not available');
    }

    // Use the parseNavigationIntent method from useAI
    const parsedIntent = await this.ai.parseNavigationIntent(text);

    // Map the AI response to our intent types
    const intentMap: Record<string, AnatomyIntent> = {
      'navigate': 'navigate_to_region',
      'zoom': 'navigate_to_region',
      'highlight': 'navigate_to_region',
      'isolate': 'navigate_to_region',
      'compare': 'compare_regions',
      'explain': 'explain_structure',
      'question': 'ask_question',
      'search': 'search',
    };

    const intent = intentMap[parsedIntent.navigationIntent?.action || ''] ||
                   (parsedIntent.type === 'anatomy_navigation' ? 'navigate_to_region' :
                    parsedIntent.type === 'question' ? 'ask_question' :
                    parsedIntent.type === 'search' ? 'search' :
                    parsedIntent.type === 'comparison' ? 'compare_regions' :
                    parsedIntent.type === 'explanation' ? 'explain_structure' :
                    'unknown');

    // Extract entities
    const entities = this.extractEntities(text);
    
    // Add AI-extracted entities if available
    if (parsedIntent.navigationIntent?.target) {
      entities.region = entities.region || parsedIntent.navigationIntent.target;
    }
    if (parsedIntent.navigationIntent?.system) {
      entities.system = entities.system || parsedIntent.navigationIntent.system;
    }

    const confidence = parsedIntent.confidence || 0.5;
    const requiresClarification = this.needsClarification({
      intent,
      confidence,
      entities,
    });

    return {
      intent,
      confidence,
      entities,
      suggestedAction: this.generateSuggestedAction(intent, entities),
      requiresClarification,
      clarificationPrompt: requiresClarification ? this.generateClarification({
        intent, entities
      }) : undefined,
      originalText: text,
      timestamp: Date.now(),
      method: 'ai',
    };
  }

  /**
   * Extract entities from text using regex patterns.
   *
   * @param text - Input text to analyze
   * @returns Object containing extracted entities
   */
  extractEntities(text: string): IntentEntities {
    const entities: IntentEntities = {};
    const normalizedText = this.normalizeText(text);

    // Extract each entity type
    (Object.keys(ENTITY_PATTERNS) as (keyof IntentEntities)[]).forEach((entityType) => {
      const patterns = ENTITY_PATTERNS[entityType];
      const matches: string[] = [];

      patterns.forEach((pattern) => {
        // Reset lastIndex for global regexes
        pattern.lastIndex = 0;

        let match: RegExpExecArray | null;
        while ((match = pattern.exec(normalizedText)) !== null) {
          matches.push(match[1] || match[0]);
          // Prevent infinite loop on zero-width matches
          if (match.index === pattern.lastIndex) {
            pattern.lastIndex++;
          }
        }
      });

      // Take the first (or most specific) match
      if (matches.length > 0) {
        // Remove duplicates and normalize
        const uniqueMatches = Array.from(new Set(matches.map(m => m.toLowerCase().trim())));
        entities[entityType] = uniqueMatches[0];
      }
    });

    return entities;
  }

  /**
   * Check if clarification is needed based on confidence and entities.
   *
   * @param result - Partial recognition result to evaluate
   * @returns Whether clarification is needed
   */
  needsClarification(result: Pick<IntentRecognitionResult, 'intent' | 'confidence' | 'entities'>): boolean {
    if (!this.options.enableClarification) {
      return false;
    }

    // Low confidence requires clarification
    if (result.confidence < this.options.minConfidence) {
      return true;
    }

    // Certain intents require specific entities
    switch (result.intent) {
      case 'navigate_to_region':
        return !result.entities.region && !result.entities.system;
      case 'show_layer':
        return !result.entities.layer;
      case 'compare_regions':
        return !result.entities.region;
      case 'explain_structure':
        return !result.entities.structure && !result.entities.region && !result.entities.system;
      case 'show_condition':
        return !result.entities.condition;
      case 'show_medication':
        return !result.entities.medication;
      default:
        return false;
    }
  }

  /**
   * Generate a clarification prompt for ambiguous queries.
   *
   * @param result - Recognition result requiring clarification
   * @returns Clarification prompt string
   */
  generateClarification(result: Pick<IntentRecognitionResult, 'intent' | 'entities'>): string {
    const templates = CLARIFICATION_TEMPLATES[result.intent] || CLARIFICATION_TEMPLATES.unknown;
    
    // Select a template (could be randomized or context-aware)
    const template = templates[0];

    // Add context about what we did understand
    const understoodParts: string[] = [];
    if (result.entities.region) understoodParts.push(`region: ${result.entities.region}`);
    if (result.entities.layer) understoodParts.push(`layer: ${result.entities.layer}`);
    if (result.entities.condition) understoodParts.push(`condition: ${result.entities.condition}`);
    if (result.entities.medication) understoodParts.push(`medication: ${result.entities.medication}`);
    if (result.entities.system) understoodParts.push(`system: ${result.entities.system}`);
    if (result.entities.structure) understoodParts.push(`structure: ${result.entities.structure}`);

    if (understoodParts.length > 0) {
      return `${template} (I understood you mentioned: ${understoodParts.join(', ')})`;
    }

    return template;
  }

  /**
   * Update recognizer options dynamically.
   *
   * @param newOptions - Partial options to update
   */
  updateOptions(newOptions: Partial<IntentRecognizerOptions>): void {
    this.options = { ...this.options, ...newOptions };
  }

  /**
   * Get current context history.
   *
   * @returns Array of previous messages
   */
  getContext(): string[] {
    return [...this.contextHistory];
  }

  /**
   * Clear context history.
   */
  clearContext(): void {
    this.contextHistory = [];
  }

  // ============================================================================
  // Private Helpers
  // ============================================================================

  /**
   * Normalize text for consistent processing.
   *
   * @param text - Raw input text
   * @returns Normalized text
   */
  private normalizeText(text: string): string {
    return text
      .trim()
      .toLowerCase()
      .replace(/[.,!?;:'"-]+/g, ' ') // Replace punctuation with spaces
      .replace(/\s+/g, ' '); // Normalize whitespace
  }

  /**
   * Add text to context history with size limit.
   *
   * @param text - Text to add to context
   */
  private addToContext(text: string): void {
    this.contextHistory.push(text);
    const maxSize = this.options.maxContextSize || DEFAULT_RECOGNIZER_OPTIONS.maxContextSize!;
    if (this.contextHistory.length > maxSize) {
      this.contextHistory = this.contextHistory.slice(-maxSize);
    }
  }

  /**
   * Generate a suggested action based on intent and entities.
   *
   * @param intent - Recognized intent
   * @param entities - Extracted entities
   * @returns Suggested action string
   */
  private generateSuggestedAction(intent: AnatomyIntent, entities: IntentEntities): string {
    switch (intent) {
      case 'navigate_to_region':
        return entities.region
          ? `Navigate to ${entities.region}`
          : 'Navigate to selected region';
      case 'show_layer':
        return entities.layer
          ? `Switch to ${entities.layer} layer`
          : 'Switch layer view';
      case 'compare_regions':
        return entities.region
          ? `Compare ${entities.region} with...`
          : 'Enter comparison mode';
      case 'explain_structure':
        return entities.structure || entities.region
          ? `Explain ${entities.structure || entities.region}`
          : 'Provide explanation';
      case 'show_condition':
        return entities.condition
          ? `Show ${entities.condition} visualization`
          : 'Show condition effects';
      case 'show_medication':
        return entities.medication
          ? `Show ${entities.medication} mechanism`
          : 'Show medication action';
      case 'ask_question':
        return 'Answer question';
      case 'search':
        return 'Perform search';
      case 'reset_view':
        return 'Reset to default view';
      default:
        return 'Ask for clarification';
    }
  }
}

// ============================================================================
// React Hook
// ============================================================================

/**
 * React hook for using the Anatomy Intent Recognizer.
 *
 * Provides a convenient interface for React components with state management
 * for the recognition process.
 *
 * @example
 * ```typescript
 * function VoiceCommandComponent() {
 *   const { recognize, isRecognizing, lastResult, error } = useAnatomyIntentRecognizer({
 *     useAI: true,
 *     minConfidence: 0.6,
 *   });
 *
 *   const handleVoiceInput = async (text: string) => {
 *     const result = await recognize(text);
 *     if (result.requiresClarification) {
 *       showClarificationPrompt(result.clarificationPrompt);
 *     } else {
 *       executeAction(result.suggestedAction);
 *     }
 *   };
 * }
 * ```
 *
 * @param options - Partial options to override defaults
 * @returns Object with recognition function and state
 */
export function useAnatomyIntentRecognizer(
  options: Partial<IntentRecognizerOptions> = {}
): {
  /** Function to recognize intent from text */
  recognize: (text: string) => Promise<IntentRecognitionResult>;
  /** Whether recognition is in progress */
  isRecognizing: boolean;
  /** The last recognition result */
  lastResult: IntentRecognitionResult | null;
  /** Error from last recognition attempt */
  error: Error | null;
  /** Update recognizer options */
  updateOptions: (newOptions: Partial<IntentRecognizerOptions>) => void;
  /** Clear the last result and error */
  reset: () => void;
} {
  const ai = useAI();
  const recognizerRef = useRef<AnatomyIntentRecognizer | null>(null);
  
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [lastResult, setLastResult] = useState<IntentRecognitionResult | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Initialize recognizer on first render
  if (!recognizerRef.current) {
    recognizerRef.current = new AnatomyIntentRecognizer(options, ai);
  }

  /**
   * Recognize intent from user input.
   *
   * @param text - User input text to analyze
   * @returns Promise resolving to recognition result
   */
  const recognize = useCallback(async (text: string): Promise<IntentRecognitionResult> => {
    setIsRecognizing(true);
    setError(null);

    try {
      const result = await recognizerRef.current!.recognizeIntent(text);
      setLastResult(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      throw error;
    } finally {
      setIsRecognizing(false);
    }
  }, []);

  /**
   * Update recognizer options.
   *
   * @param newOptions - Partial options to update
   */
  const updateOptions = useCallback((newOptions: Partial<IntentRecognizerOptions>): void => {
    recognizerRef.current?.updateOptions(newOptions);
  }, []);

  /**
   * Reset the last result and error state.
   */
  const reset = useCallback((): void => {
    setLastResult(null);
    setError(null);
  }, []);

  return {
    recognize,
    isRecognizing,
    lastResult,
    error,
    updateOptions,
    reset,
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Calculate confidence score based on entity presence and weights.
 *
 * @param entities - Extracted entities
 * @param baseScore - Base confidence score
 * @returns Calculated confidence score (0-1)
 */
export function calculateEntityConfidence(
  entities: IntentEntities,
  baseScore: number = 0.5
): number {
  let weightedScore = baseScore;
  let totalWeight = 0;

  (Object.keys(entities) as (keyof IntentEntities)[]).forEach((key) => {
    if (entities[key]) {
      weightedScore += ENTITY_WEIGHTS[key];
      totalWeight += 1;
    }
  });

  // Normalize by number of possible entities
  const maxPossibleWeight = Object.values(ENTITY_WEIGHTS).reduce((a, b) => a + b, 0);
  const normalizedScore = weightedScore / (baseScore + maxPossibleWeight);

  return Math.min(0.95, normalizedScore);
}

/**
 * Merge multiple intent recognition results.
 * Useful for combining results from different recognition methods.
 *
 * @param results - Array of recognition results to merge
 * @returns Merged recognition result
 */
export function mergeRecognitionResults(
  results: IntentRecognitionResult[]
): IntentRecognitionResult {
  if (results.length === 0) {
    return {
      intent: 'unknown',
      confidence: 0,
      entities: {},
      requiresClarification: true,
      timestamp: Date.now(),
      method: 'rule-based',
    };
  }

  if (results.length === 1) {
    return results[0];
  }

  // Weight by confidence
  const totalConfidence = results.reduce((sum, r) => sum + r.confidence, 0);
  
  // Find weighted most common intent
  const intentScores: Record<string, number> = {};
  results.forEach((r) => {
    intentScores[r.intent] = (intentScores[r.intent] || 0) + r.confidence;
  });

  const mergedIntent = (Object.entries(intentScores)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'unknown') as AnatomyIntent;

  // Merge entities (prefer higher confidence)
  const mergedEntities: IntentEntities = {};
  results
    .sort((a, b) => b.confidence - a.confidence)
    .forEach((r) => {
      (Object.keys(r.entities) as (keyof IntentEntities)[]).forEach((key) => {
        if (!mergedEntities[key] && r.entities[key]) {
          mergedEntities[key] = r.entities[key];
        }
      });
    });

  // Calculate average confidence
  const avgConfidence = totalConfidence / results.length;

  return {
    intent: mergedIntent,
    confidence: avgConfidence,
    entities: mergedEntities,
    requiresClarification: avgConfidence < 0.6,
    timestamp: Date.now(),
    method: results[0].method,
  };
}

/**
 * Check if a query is anatomy-related.
 *
 * @param text - Input text to check
 * @returns Whether the text appears to be anatomy-related
 */
export function isAnatomyRelated(text: string): boolean {
  const normalizedText = text.toLowerCase();
  
  // Check for anatomy keywords
  const anatomyKeywords = [
    /\b(heart|brain|lung|liver|kidney|stomach|intestine|muscle|bone|nerve|blood|cell|organ|body|anatomy|physiology)\b/,
    /\b(cardiovascular|respiratory|digestive|nervous|skeletal|muscular|system)\b/,
    /\b(medical|health|disease|condition|treatment|medication)\b/,
    /\b(show|display|navigate|explain|where|how does)\s+.{0,20}(?:body|heart|brain|organ)/,
  ];

  return anatomyKeywords.some((pattern) => pattern.test(normalizedText));
}

// ============================================================================
// Default Export
// ============================================================================

export default AnatomyIntentRecognizer;
