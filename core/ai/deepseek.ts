/**
 * DeepSeek AI Service Configuration
 *
 * Supports DeepSeek R1, DeepSeekCoder, and Whisper (ggml-medium) models.
 * DeepSeek is the central brain for processing Spanish dictation and medical reasoning.
 *
 * @module deepseek
 */

import { invoke } from '@tauri-apps/api/core';

// ============================================================================
// TYPES
// ============================================================================

/**
 * Supported DeepSeek model variants.
 *
 * DeepSeek R1 7B Q3_K_L is a quantized model optimized for edge devices
 * while maintaining strong reasoning capabilities. Whisper ggml-medium is optimized
 * for Spanish speech recognition.
 */
export type DeepSeekModel =
  | 'deepseek-r1:7b'      // Quantized R1 for edge/mobile (7B params, Q3_K_L quantization)
  | 'deepseek-coder:7b'  // Quantized Coder for edge/mobile (7B params, Q3_K_L quantization)
  | 'whisper-ggml-medium'; // Spanish transcription (ggml-medium, optimized for speech)

/**
 * Model configuration with capabilities.
 */
export interface DeepSeekModelConfig {
  /** Model identifier */
  model: DeepSeekModel;

  /** Maximum context length (tokens) */
  maxTokens?: number;

  /** Temperature for response generation (0-2, higher = more creative) */
  temperature?: number;

  /** Top-p sampling (0-1) */
  topP?: number;

  /** Whether to stream responses */
  stream?: boolean;
}

/**
 * Transcription result from Whisper ggml-medium.
 */
export interface WhisperTranscriptionResult {
  /** The transcribed text in Spanish */
  text: string;

  /** Confidence score (0-1) */
  confidence?: number;

  /** Language detected (should be 'es' for Spanish) */
  language?: string;

  /** Processing duration in milliseconds */
  duration?: number;
}

/**
 * Chat completion response from DeepSeek.
 */
export interface DeepSeekChatResponse {
  /** The assistant's response text */
  message: string;

  /** Reasoning/thought process (if enabled) */
  reasoning?: string;

  /** Usage statistics */
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };

  /** Whether response is complete */
  done: boolean;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Default DeepSeek API endpoint (configure as needed)
 */
export const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1';

/**
 * Default model selection for Spanish medical dictation.
 * R1 7B Q3_K_L is a quantized model optimized for edge devices
 * while maintaining strong reasoning capabilities for medical terminology.
 */
export const DEFAULT_DEEPSEEK_MODEL: DeepSeekModel = 'deepseek-r1:7b';

/**
 * Whisper endpoint URL (can be local or remote)
 */
export const WHISPER_API_URL = 'http://localhost:9000/transcribe';

// ============================================================================
// TRANSCRIPTION (Whisper - ggml-medium for Spanish)
// ============================================================================

/**
 * Transcribe audio using Whisper ggml-medium model.
 * Optimized for Spanish speech recognition.
 *
 * @param audioBlob - Audio data to transcribe
 * @returns Transcription result with Spanish text
 */
export async function transcribeAudio(audioBlob: Blob): Promise<WhisperTranscriptionResult> {
  const formData = new FormData();
  formData.append('file', audioBlob, 'audio.wav');
  formData.append('language', 'auto'); // Auto-detect, optimized for Spanish

  try {
    const response = await fetch(WHISPER_API_URL, {
      method: 'POST',
      body: formData,
      signal: AbortSignal.timeout(30000), // 30 second timeout
    });

    if (!response.ok) {
      throw new Error(`Whisper transcription failed: HTTP ${response.status}`);
    }

    const result = await response.json();

    return {
      text: result.text?.text || '',
      confidence: result.confidence || 0,
      language: result.language || 'es',
      duration: result.duration,
    };
  } catch (error) {
    console.error('[DeepSeek] Whisper transcription error:', error);
    throw error;
  }
}

// ============================================================================
// CHAT (DeepSeek R1 for Medical Reasoning)
// ============================================================================

/**
 * Send chat completion request to DeepSeek R1.
 * R1 provides excellent reasoning capabilities for medical terminology in Spanish.
 *
 * @param prompt - The user's prompt/message
 * @param config - Model configuration
 * @returns Response with medical reasoning
 */
export async function deepSeekChat(
  prompt: string,
  config?: DeepSeekModelConfig
): Promise<DeepSeekChatResponse> {
  try {
    const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getDeepSeekAPIKey()}`,
      },
      body: JSON.stringify({
        model: config?.model || DEFAULT_DEEPSEEK_MODEL,
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente médico de habla hispana. Responde siempre en español. Proporciona información médica precisa y ayuda empática. Los usuarios pueden hablar en español para dictar síntomas, hacer preguntas de salud, o recibir explicaciones detalladas de anatomía, condiciones médicas, y tratamientos.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: config?.maxTokens || 8192, // R1 supports up to 8192 tokens
        temperature: config?.temperature ?? 0.3,
        top_p: config?.topP ?? 0.9, // Encourage diversity in responses
        stream: config?.stream ?? false,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek chat failed: HTTP ${response.status}`);
    }

    const data = await response.json();

    return {
      message: data.choices[0]?.message?.content || '',
      reasoning: data.choices[0]?.message?.reasoning,
      usage: {
        promptTokens: data.usage?.prompt_tokens || 0,
        completionTokens: data.usage?.completion_tokens || 0,
        totalTokens: data.usage?.total_tokens || 0,
      },
      done: data.choices[0]?.finish_reason === 'stop',
    };
  } catch (error) {
    console.error('[DeepSeek] Chat error:', error);
    throw error;
  }
}

// ============================================================================
// CODE GENERATION (DeepSeek Coder)
// ============================================================================

/**
 * Generate medical code using DeepSeek Coder.
 * Useful for creating anatomical visualizations or procedural generation.
 *
 * @param prompt - Code generation prompt
 * @param language - Programming language (default 'typescript')
 * @returns Generated code
 */
export async function deepSeekCode(
  prompt: string,
  language: string = 'typescript'
): Promise<string> {
  try {
    const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getDeepSeekAPIKey()}`,
      },
      body: JSON.stringify({
        model: 'deepseek-coder:7b',
        messages: [
          {
            role: 'system',
            content: `Eres un asistente de programación médica. Genera código en ${language}. Los usuarios pueden solicitar visualizaciones anatómicas, scripts de procedimientos médicos, o utilidades de procesamiento de datos.`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 4096,
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek Coder failed: HTTP ${response.status}`);
    }

    const data = await response.json();

    return data.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('[DeepSeek] Code generation error:', error);
    throw error;
  }
}

// ============================================================================
// API KEY MANAGEMENT
// ============================================================================

/**
 * Tauri command to get stored API key.
 */
async function getDeepSeekAPIKey(): Promise<string> {
  try {
    return await invoke('get_deepseek_api_key');
  } catch {
    // Fallback to environment variable or default
    return localStorage.getItem('deepseek_api_key') || '';
  }
}

/**
 * Store API key for future use.
 */
export async function setDeepSeekAPIKey(apiKey: string): Promise<void> {
  try {
    await invoke('set_deepseek_api_key', { apiKey: apiKey });
    localStorage.setItem('deepseek_api_key', apiKey);
  } catch (error) {
    console.error('[DeepSeek] Failed to store API key:', error);
    throw error;
  }
}
