/**
 * Ollama Service - Local LLM Integration
 *
 * Provides functions to communicate with a locally running Ollama instance.
 * All AI processing stays on device - this is core to the privacy promise.
 *
 * Ollama REST API: http://localhost:11434
 * Docs: https://github.com/ollama/ollama/blob/main/docs/api.md
 */

const OLLAMA_BASE_URL = 'http://localhost:11434';
const DEFAULT_MODEL = 'deepseek-r1:14b';

// ============================================================================
// Types
// ============================================================================

export interface OllamaModel {
  name: string;
  modified_at: string;
  size: number;
  digest: string;
  details?: {
    format: string;
    family: string;
    parameter_size: string;
    quantization_level: string;
  };
}

export interface OllamaModelsResponse {
  models: OllamaModel[];
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  model?: string;
  messages: ChatMessage[];
  stream?: boolean;
  options?: {
    temperature?: number;
    top_p?: number;
    top_k?: number;
    num_predict?: number;
    stop?: string[];
  };
  format?: 'json';
}

export interface ChatResponse {
  model: string;
  created_at: string;
  message: ChatMessage;
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

export interface StreamChunk {
  model: string;
  created_at: string;
  message: ChatMessage;
  done: boolean;
}

export interface OllamaError {
  error: string;
}

export type OllamaStatus =
  | { available: true; version?: string }
  | { available: false; error: string };

// ============================================================================
// Health Check
// ============================================================================

/**
 * Check if Ollama is running locally
 */
export async function checkOllamaHealth(): Promise<OllamaStatus> {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/version`, {
      method: 'GET',
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    if (!response.ok) {
      return { available: false, error: `HTTP ${response.status}` };
    }

    const data = await response.json() as { version?: string };
    return { available: true, version: data.version };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';

    if (message.includes('fetch failed') || message.includes('ECONNREFUSED')) {
      return {
        available: false,
        error: 'Ollama is not running. Start it with: ollama serve'
      };
    }

    return { available: false, error: message };
  }
}

/**
 * Check if Ollama is available (simple boolean check)
 */
export async function isOllamaAvailable(): Promise<boolean> {
  const status = await checkOllamaHealth();
  return status.available;
}

// ============================================================================
// Models
// ============================================================================

/**
 * List available models in the local Ollama instance
 */
export async function listModels(): Promise<OllamaModel[]> {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
      method: 'GET',
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`Failed to list models: HTTP ${response.status}`);
    }

    const data = await response.json() as OllamaModelsResponse;
    return data.models || [];
  } catch (err) {
    if (err instanceof Error && err.message.includes('fetch failed')) {
      throw new Error('Ollama is not running. Start it with: ollama serve');
    }
    throw err;
  }
}

/**
 * Check if a specific model is available
 */
export async function hasModel(modelName: string): Promise<boolean> {
  const models = await listModels();
  return models.some(m => m.name === modelName || m.name.startsWith(modelName + ':'));
}

/**
 * Get the default model name, or first available if default not found
 */
export async function getDefaultModel(): Promise<string | null> {
  const models = await listModels();
  if (models.length === 0) return null;

  // Check for the preferred model
  const preferred = models.find(m =>
    m.name === DEFAULT_MODEL || m.name.startsWith('deepseek')
  );
  if (preferred) return preferred.name;

  // Fall back to first available
  return models[0].name;
}

// ============================================================================
// Chat Completions (Non-Streaming)
// ============================================================================

/**
 * Send a chat completion request to Ollama
 */
export async function chat(request: ChatRequest): Promise<ChatResponse> {
  const model = request.model || DEFAULT_MODEL;

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: request.messages,
        stream: false,
        options: request.options,
        format: request.format,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})) as OllamaError;
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    return await response.json() as ChatResponse;
  } catch (err) {
    if (err instanceof Error && err.message.includes('fetch failed')) {
      throw new Error('Ollama is not running. Start it with: ollama serve');
    }
    throw err;
  }
}

/**
 * Simple helper for single-turn chat
 */
export async function askQuestion(
  question: string,
  systemPrompt?: string,
  model?: string
): Promise<string> {
  const messages: ChatMessage[] = [];

  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }

  messages.push({ role: 'user', content: question });

  const response = await chat({ model, messages });
  return response.message.content;
}

// ============================================================================
// Streaming Chat
// ============================================================================

/**
 * Stream a chat completion response from Ollama
 *
 * @param request - Chat request parameters
 * @param onChunk - Callback for each streamed chunk
 * @param onDone - Callback when streaming is complete
 * @param onError - Callback for errors
 */
export async function streamChat(
  request: ChatRequest,
  onChunk: (chunk: StreamChunk) => void,
  onDone?: (finalResponse: ChatResponse) => void,
  onError?: (error: Error) => void,
): Promise<void> {
  const model = request.model || DEFAULT_MODEL;

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: request.messages,
        stream: true,
        options: request.options,
        format: request.format,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})) as OllamaError;
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    if (!response.body) {
      throw new Error('No response body for streaming');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let finalResponse: ChatResponse | null = null;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Process complete JSON lines
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // Keep incomplete line in buffer

      for (const line of lines) {
        if (!line.trim()) continue;

        try {
          const chunk = JSON.parse(line) as StreamChunk;
          onChunk(chunk);

          if (chunk.done) {
            finalResponse = chunk as ChatResponse;
          }
        } catch {
          // Skip malformed JSON lines
        }
      }
    }

    // Process any remaining buffer
    if (buffer.trim()) {
      try {
        const chunk = JSON.parse(buffer) as StreamChunk;
        onChunk(chunk);
        if (chunk.done) {
          finalResponse = chunk as ChatResponse;
        }
      } catch {
        // Skip malformed JSON
      }
    }

    if (onDone && finalResponse) {
      onDone(finalResponse);
    }
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));

    if (error.message.includes('fetch failed')) {
      error.message = 'Ollama is not running. Start it with: ollama serve';
    }

    if (onError) {
      onError(error);
    } else {
      throw error;
    }
  }
}

/**
 * Create an async generator for streaming chat responses
 */
export async function* streamChatGenerator(
  request: ChatRequest
): AsyncGenerator<StreamChunk, void, unknown> {
  const model = request.model || DEFAULT_MODEL;

  const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: request.messages,
      stream: true,
      options: request.options,
      format: request.format,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({})) as OllamaError;
    throw new Error(errorData.error || `HTTP ${response.status}`);
  }

  if (!response.body) {
    throw new Error('No response body for streaming');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (!line.trim()) continue;

      try {
        const chunk = JSON.parse(line) as StreamChunk;
        yield chunk;
      } catch {
        // Skip malformed JSON
      }
    }
  }

  if (buffer.trim()) {
    try {
      const chunk = JSON.parse(buffer) as StreamChunk;
      yield chunk;
    } catch {
      // Skip malformed JSON
    }
  }
}

// ============================================================================
// JSON Mode / Structured Output
// ============================================================================

/**
 * Request a structured JSON response from the model
 */
export async function chatJSON<T>(
  request: Omit<ChatRequest, 'format'>
): Promise<T> {
  const response = await chat({
    ...request,
    format: 'json',
  });

  try {
    return JSON.parse(response.message.content) as T;
  } catch {
    throw new Error(`Failed to parse JSON response: ${response.message.content}`);
  }
}

// ============================================================================
// Export constants
// ============================================================================

export { OLLAMA_BASE_URL, DEFAULT_MODEL };
