#!/usr/bin/env npx tsx
/**
 * AI Prediction Bridge for Tauri
 *
 * CLI bridge for intent prediction from the Tauri Rust backend.
 * Uses DeepSeek via Ollama for local LLM inference.
 */

import {
  buildPredictionPrompt,
  parseIntentResponse,
  createEmptyIntent,
} from './core/intent-prediction/prompts';
import {
  getDomainFallbackPrediction,
} from './core/intent-prediction/domain-rules';
import type {
  PredictionRequest,
  PredictionResponse,
} from './core/intent-prediction/types';

// ============================================
// Ollama Client
// ============================================

interface OllamaGenerateRequest {
  model: string;
  prompt: string;
  format?: string;
  stream?: boolean;
  options?: {
    temperature?: number;
    num_predict?: number;
    top_p?: number;
    seed?: number;
  };
}

interface OllamaGenerateResponse {
  model: string;
  response: string;
  done: boolean;
  total_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
}

const OLLAMA_BASE_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const DEFAULT_MODEL = process.env.PREDICTION_MODEL || 'deepseek-r1:14b';
const REQUEST_TIMEOUT_MS = 30000;

async function generateWithOllama(
  prompt: string,
  model: string = DEFAULT_MODEL,
  options: { temperature?: number; maxTokens?: number } = {}
): Promise<{ content: string; tokensUsed: number }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const request: OllamaGenerateRequest = {
      model,
      prompt,
      format: 'json',
      stream: false,
      options: {
        temperature: options.temperature ?? 0.3,
        num_predict: options.maxTokens ?? 1000,
      },
    };

    const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
    }

    const result: OllamaGenerateResponse = await response.json();
    const tokensUsed = (result.prompt_eval_count || 0) + (result.eval_count || 0);

    return {
      content: result.response,
      tokensUsed,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

// ============================================
// Prediction Logic
// ============================================

async function predictIntent(request: PredictionRequest): Promise<PredictionResponse> {
  const startTime = Date.now();

  // Check if we have enough actions
  if (request.recentActions.length < 2) {
    return {
      intent: createEmptyIntent(),
      model: 'none',
      processingTimeMs: Date.now() - startTime,
      tokensUsed: 0,
      usedFallback: true,
    };
  }

  try {
    // Build the prompt
    const { systemPrompt, userPrompt } = buildPredictionPrompt(request);
    const fullPrompt = `${systemPrompt}\n\n${userPrompt}`;

    // Call Ollama
    const { content, tokensUsed } = await generateWithOllama(fullPrompt, DEFAULT_MODEL, {
      temperature: 0.3,
      maxTokens: 1000,
    });

    // Parse JSON from response
    let parsedContent: unknown;
    try {
      parsedContent = JSON.parse(content);
    } catch {
      // Response might be wrapped in markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        parsedContent = JSON.parse(jsonMatch[1].trim());
      } else {
        throw new Error('Failed to parse JSON from LLM response');
      }
    }

    // Parse the response
    const intent = parseIntentResponse(parsedContent);

    return {
      intent,
      model: DEFAULT_MODEL,
      processingTimeMs: Date.now() - startTime,
      tokensUsed,
      usedFallback: false,
    };
  } catch (error) {
    // Fall back to domain rules
    console.error('LLM prediction failed, using fallback:', error);

    const fallbackIntent = getDomainFallbackPrediction(
      request.recentActions,
      request.healthProfile,
      request.currentContext
    );

    return {
      intent: fallbackIntent,
      model: 'domain-rules',
      processingTimeMs: Date.now() - startTime,
      tokensUsed: 0,
      usedFallback: true,
    };
  }
}

// ============================================
// CLI Commands
// ============================================

const commands: Record<string, (args: string[]) => Promise<void>> = {
  async predict(args: string[]) {
    if (args.length < 1) {
      throw new Error('Usage: predict <request-json>');
    }

    const requestJson = args[0];
    const request: PredictionRequest = JSON.parse(requestJson);

    const response = await predictIntent(request);
    console.log(JSON.stringify(response));
  },

  async health() {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
      if (response.ok) {
        console.log(JSON.stringify({ available: true, model: DEFAULT_MODEL }));
      } else {
        console.log(JSON.stringify({ available: false, error: 'Ollama not responding' }));
      }
    } catch (error) {
      console.log(JSON.stringify({
        available: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }));
    }
  },
};

// ============================================
// Main Entry
// ============================================

async function main() {
  const [, , command, ...args] = process.argv;

  if (!command || !commands[command]) {
    console.error('Usage: ai-predict-bridge.ts <command> [args]');
    console.error('Commands: predict, health');
    process.exit(1);
  }

  try {
    await commands[command](args);
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
