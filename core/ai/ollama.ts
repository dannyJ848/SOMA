/**
 * Ollama Service - Local LLM Integration
 *
 * Provides functions to communicate with a locally running Ollama instance.
 * All AI processing stays on device - this is core to the privacy promise.
 *
 * Ollama REST API: http://localhost:11434
 * Docs: https://github.com/ollama/ollama/blob/main/docs/api.md
 */

// Browser-compatible alternatives to Node.js 'os' module
// In Tauri, we run inside a WebView so Node.js APIs aren't available
function totalmem(): number {
  // navigator.deviceMemory is in GB (Chrome/Edge only), default to 8GB
  const deviceMemGB = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 8;
  return deviceMemGB * 1024 * 1024 * 1024; // Convert to bytes
}

function platform(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('mac') || ua.includes('iphone') || ua.includes('ipad')) return 'darwin';
  if (ua.includes('win')) return 'win32';
  if (ua.includes('linux') || ua.includes('android')) return 'linux';
  return 'unknown';
}

const OLLAMA_BASE_URL = 'http://localhost:11434';

// ============================================================================
// Model Configuration - Auto-select based on device capabilities
// ============================================================================

/**
 * Model tiers based on available system memory
 * - Mobile (≤8GB): Optimized 7B models for iPhone
 * - Standard (8-16GB): 14B models for most Macs
 * - High-end (>16GB): 32B+ models for powerful machines
 */
interface ModelTier {
  name: string;
  minMemoryGB: number;
  maxMemoryGB: number;
  preferredModels: string[]; // In order of preference
}

const MODEL_TIERS: ModelTier[] = [
  {
    name: 'mobile',
    minMemoryGB: 0,
    maxMemoryGB: 10,
    preferredModels: [
      // Primary: Qwen 2.5 7B - best reasoning at this size
      'qwen2.5:7b-instruct',
      'qwen2.5:7b',
      // Fallback: Qwen3 4B if 7B causes memory issues
      'qwen3:4b',
      'qwen3:4b-instruct',
      // Other 7B alternatives
      'deepseek-r1:7b',
      'llama3.2:7b',
      // Smaller fallbacks if needed
      'qwen3:1.7b',
      'phi4-mini',
      'smollm3:3b',
    ],
  },
  {
    name: 'standard',
    minMemoryGB: 10,
    maxMemoryGB: 24,
    preferredModels: [
      'qwen2.5:14b-instruct',
      'qwen2.5:14b',
      'deepseek-r1:14b',
      'llama3.2:11b',
      'mistral-nemo:12b',
    ],
  },
  {
    name: 'high-end',
    minMemoryGB: 24,
    maxMemoryGB: Infinity,
    preferredModels: [
      'qwen2.5:32b-instruct',
      'qwen2.5:32b',
      'deepseek-r1:32b',
      'llama3.3:70b-instruct-q4_0',
      'mixtral:8x7b',
    ],
  },
];

// Fallback if no preferred model is available
const FALLBACK_MODEL = 'qwen2.5:7b-instruct';

// Cache for detected settings
let cachedSystemMemoryGB: number | null = null;
let cachedSelectedModel: string | null = null;

/**
 * Get system memory in GB
 */
function getSystemMemoryGB(): number {
  if (cachedSystemMemoryGB !== null) {
    return cachedSystemMemoryGB;
  }

  try {
    // totalmem() returns bytes
    cachedSystemMemoryGB = totalmem() / (1024 * 1024 * 1024);
  } catch {
    // Default to mobile tier if we can't detect
    // This is safer for iPhone where os.totalmem might not work
    cachedSystemMemoryGB = 6;
  }

  return cachedSystemMemoryGB;
}

/**
 * Detect if running on iOS (limited memory environment)
 */
function isIOSEnvironment(): boolean {
  // In Tauri iOS, we're running in a constrained environment
  // On iOS via Tauri, platform() returns 'darwin' but with limited memory
  // We use memory as the primary indicator since Node's platform() won't return 'ios'
  const memGB = getSystemMemoryGB();
  // iPhone Pro models have 8GB, standard iPhones have 6GB
  // Any darwin device with ≤8GB is likely iOS
  const plat = platform();
  return (plat === 'darwin' && memGB <= 8) || memGB <= 6;
}

/**
 * Get the appropriate model tier based on system memory
 */
function getModelTier(): ModelTier {
  const memGB = getSystemMemoryGB();

  // Find the appropriate tier
  for (const tier of MODEL_TIERS) {
    if (memGB >= tier.minMemoryGB && memGB < tier.maxMemoryGB) {
      return tier;
    }
  }

  // Default to mobile tier for safety
  return MODEL_TIERS[0];
}

/**
 * Get the current device tier name for UI display
 */
export function getDeviceTier(): { tier: string; memoryGB: number; isIOS: boolean } {
  const tier = getModelTier();
  return {
    tier: tier.name,
    memoryGB: Math.round(getSystemMemoryGB() * 10) / 10,
    isIOS: isIOSEnvironment(),
  };
}

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
 * Select the optimal model based on device capabilities and available models
 * This is the main function for auto-selecting the right model for the device
 */
export async function selectOptimalModel(): Promise<string | null> {
  // Return cached selection if available
  if (cachedSelectedModel !== null) {
    return cachedSelectedModel;
  }

  const models = await listModels();
  if (models.length === 0) return null;

  const modelNames = models.map(m => m.name);
  const tier = getModelTier();

  console.log(`[AI] Device tier: ${tier.name}, Memory: ${getSystemMemoryGB().toFixed(1)}GB`);
  console.log(`[AI] Available models: ${modelNames.join(', ')}`);

  // Try to find a preferred model for this tier
  for (const preferredModel of tier.preferredModels) {
    const match = modelNames.find(m =>
      m === preferredModel ||
      m.startsWith(preferredModel.split(':')[0]) // Match base model name
    );
    if (match) {
      console.log(`[AI] Selected model: ${match} (matched preference: ${preferredModel})`);
      cachedSelectedModel = match;
      return match;
    }
  }

  // If no preferred model found, try models from lower tiers (for mobile compatibility)
  if (tier.name !== 'mobile') {
    const mobileTier = MODEL_TIERS[0];
    for (const mobileModel of mobileTier.preferredModels) {
      const match = modelNames.find(m =>
        m === mobileModel ||
        m.startsWith(mobileModel.split(':')[0])
      );
      if (match) {
        console.log(`[AI] Selected fallback model: ${match} (mobile-compatible)`);
        cachedSelectedModel = match;
        return match;
      }
    }
  }

  // Last resort: use first available model
  console.log(`[AI] No preferred model found, using first available: ${models[0].name}`);
  cachedSelectedModel = models[0].name;
  return cachedSelectedModel;
}

/**
 * Get the default model name (alias for selectOptimalModel for backwards compatibility)
 */
export async function getDefaultModel(): Promise<string | null> {
  return selectOptimalModel();
}

/**
 * Clear the cached model selection (useful when models change)
 */
export function clearModelCache(): void {
  cachedSelectedModel = null;
  cachedSystemMemoryGB = null;
}

/**
 * Get recommended models for the user to download based on their device
 */
export function getRecommendedModels(): { primary: string; alternatives: string[] } {
  const tier = getModelTier();
  return {
    primary: tier.preferredModels[0],
    alternatives: tier.preferredModels.slice(1, 4),
  };
}

// ============================================================================
// Chat Completions (Non-Streaming)
// ============================================================================

/**
 * Send a chat completion request to Ollama
 */
export async function chat(request: ChatRequest): Promise<ChatResponse> {
  // Auto-select optimal model if not specified
  const model = request.model || await selectOptimalModel() || FALLBACK_MODEL;

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
  // Auto-select optimal model if not specified
  const model = request.model || await selectOptimalModel() || FALLBACK_MODEL;

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
  // Auto-select optimal model if not specified
  const model = request.model || await selectOptimalModel() || FALLBACK_MODEL;

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

// Constants are exported here (functions use inline export)
export { OLLAMA_BASE_URL, FALLBACK_MODEL, MODEL_TIERS };
