/**
 * Prediction Engine - Core Intent Prediction Logic
 *
 * Uses DeepSeek via Ollama to predict user intent based on action sequences.
 * Includes rule-based fallback when LLM is unavailable.
 */

import { chatJSON, isOllamaAvailable } from '../ai/ollama.js';
import { emitPrediction, emitPredictionFailed, requestPrediction } from '../../src/utils/intentEventBus.js';
import type {
  ActionEvent,
  PredictionRequest,
  PredictionResponse,
  InferredIntent,
} from './types.js';
import { buildPredictionPrompt, parseIntentResponse } from './prompts.js';
import { applyDomainRules, getDomainFallbackPrediction } from './domain-rules.js';

// ============================================
// Constants
// ============================================

const DEBOUNCE_MS = 1500;
const MIN_ACTIONS_FOR_PREDICTION = 2;
const MAX_ACTIONS_IN_PROMPT = 10;
const PREDICTION_TIMEOUT_MS = 30000;

// ============================================
// Debounce State
// ============================================

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let pendingRequest: PredictionRequest | null = null;
let isPredicting = false;

// ============================================
// Main Prediction Function
// ============================================

/**
 * Request an intent prediction (debounced)
 * Will trigger after DEBOUNCE_MS of inactivity
 */
export function requestIntentPrediction(request: PredictionRequest): void {
  pendingRequest = request;

  // Clear existing timer
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  // Check minimum actions
  if (request.recentActions.length < MIN_ACTIONS_FOR_PREDICTION) {
    return;
  }

  // Emit prediction requested event
  const sessionId = request.recentActions[0]?.sessionId || 'unknown';
  requestPrediction(sessionId, request.recentActions.length, 'prediction-engine');

  // Set new debounce timer
  debounceTimer = setTimeout(async () => {
    if (pendingRequest && !isPredicting) {
      await executePrediction(pendingRequest);
    }
  }, DEBOUNCE_MS);
}

/**
 * Cancel any pending prediction request
 */
export function cancelPendingPrediction(): void {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  pendingRequest = null;
}

/**
 * Force immediate prediction (bypasses debounce)
 */
export async function predictImmediate(request: PredictionRequest): Promise<PredictionResponse> {
  cancelPendingPrediction();
  return executePrediction(request);
}

// ============================================
// Prediction Execution
// ============================================

/**
 * Execute the prediction (called after debounce)
 */
async function executePrediction(request: PredictionRequest): Promise<PredictionResponse> {
  isPredicting = true;
  const startTime = Date.now();

  try {
    // Check if Ollama is available
    const ollamaAvailable = await isOllamaAvailable();

    if (!ollamaAvailable) {
      // Use fallback rules
      const fallbackIntent = getDomainFallbackPrediction(
        request.recentActions,
        request.healthProfile,
        request.currentContext
      );

      const response: PredictionResponse = {
        intent: fallbackIntent,
        model: 'rule-based-fallback',
        processingTimeMs: Date.now() - startTime,
        tokensUsed: 0,
        usedFallback: true,
      };

      emitPrediction(response, 'prediction-engine');
      return response;
    }

    // Build prompt
    const prompt = buildPredictionPrompt(request);

    // Call LLM
    const llmResponse = await Promise.race([
      chatJSON<InferredIntent>({
        messages: [
          { role: 'system', content: prompt.systemPrompt },
          { role: 'user', content: prompt.userPrompt },
        ],
        options: {
          temperature: 0.3,
          num_predict: 1000,
        },
      }),
      timeoutPromise<InferredIntent>(PREDICTION_TIMEOUT_MS),
    ]);

    // Parse and validate response
    const intent = parseIntentResponse(llmResponse);

    // Apply domain rules to enhance/validate predictions
    const enhancedIntent = applyDomainRules(intent, request.recentActions, request.healthProfile);

    const response: PredictionResponse = {
      intent: enhancedIntent,
      model: 'deepseek-r1:14b',
      processingTimeMs: Date.now() - startTime,
      tokensUsed: estimateTokens(prompt.systemPrompt + prompt.userPrompt),
      usedFallback: false,
    };

    emitPrediction(response, 'prediction-engine');
    return response;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    // Try fallback on error
    try {
      const fallbackIntent = getDomainFallbackPrediction(
        request.recentActions,
        request.healthProfile,
        request.currentContext
      );

      const response: PredictionResponse = {
        intent: fallbackIntent,
        model: 'rule-based-fallback',
        processingTimeMs: Date.now() - startTime,
        tokensUsed: 0,
        usedFallback: true,
      };

      emitPredictionFailed(errorMessage, true, 'prediction-engine');
      emitPrediction(response, 'prediction-engine');
      return response;

    } catch {
      emitPredictionFailed(errorMessage, false, 'prediction-engine');
      throw error;
    }
  } finally {
    isPredicting = false;
    pendingRequest = null;
  }
}

// ============================================
// Helper Functions
// ============================================

/**
 * Create a timeout promise
 */
function timeoutPromise<T>(ms: number): Promise<T> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Prediction timed out after ${ms}ms`)), ms);
  });
}

/**
 * Rough token count estimation
 */
function estimateTokens(text: string): number {
  // Rough estimate: ~4 characters per token
  return Math.ceil(text.length / 4);
}

/**
 * Prepare actions for prompt (limit and format)
 */
export function prepareActionsForPrompt(actions: ActionEvent[]): ActionEvent[] {
  return actions.slice(-MAX_ACTIONS_IN_PROMPT);
}

// ============================================
// Prediction State
// ============================================

/**
 * Check if a prediction is currently in progress
 */
export function isPredictionInProgress(): boolean {
  return isPredicting;
}

/**
 * Check if there's a pending prediction request
 */
export function hasPendingPrediction(): boolean {
  return pendingRequest !== null;
}

// ============================================
// Direct Prediction (No Debounce)
// ============================================

/**
 * Get a prediction without emitting events (for background use)
 */
export async function getPredictionQuiet(
  request: PredictionRequest
): Promise<InferredIntent | null> {
  try {
    const ollamaAvailable = await isOllamaAvailable();

    if (!ollamaAvailable) {
      return getDomainFallbackPrediction(
        request.recentActions,
        request.healthProfile,
        request.currentContext
      );
    }

    const prompt = buildPredictionPrompt(request);

    const llmResponse = await Promise.race([
      chatJSON<InferredIntent>({
        messages: [
          { role: 'system', content: prompt.systemPrompt },
          { role: 'user', content: prompt.userPrompt },
        ],
        options: {
          temperature: 0.3,
          num_predict: 1000,
        },
      }),
      timeoutPromise<InferredIntent>(PREDICTION_TIMEOUT_MS),
    ]);

    const intent = parseIntentResponse(llmResponse);
    return applyDomainRules(intent, request.recentActions, request.healthProfile);

  } catch {
    return getDomainFallbackPrediction(
      request.recentActions,
      request.healthProfile,
      request.currentContext
    );
  }
}
