/**
 * Ollama Mock
 *
 * Mock implementation for Ollama AI client.
 */

import { vi, Mock } from 'vitest';

// ============================================================================
// Types
// ============================================================================

export interface OllamaMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OllamaChatRequest {
  model: string;
  messages: OllamaMessage[];
  stream?: boolean;
  options?: {
    temperature?: number;
    top_p?: number;
    top_k?: number;
    num_ctx?: number;
    seed?: number;
  };
}

export interface OllamaChatResponse {
  model: string;
  created_at: string;
  message: OllamaMessage;
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

export interface OllamaGenerateRequest {
  model: string;
  prompt: string;
  stream?: boolean;
  system?: string;
  context?: number[];
  options?: Record<string, unknown>;
}

export interface OllamaGenerateResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
}

export interface OllamaModelInfo {
  name: string;
  modified_at: string;
  size: number;
  digest: string;
  details: {
    format: string;
    family: string;
    families: string[];
    parameter_size: string;
    quantization_level: string;
  };
}

// ============================================================================
// Mock Responses
// ============================================================================

const defaultChatResponse: OllamaChatResponse = {
  model: 'llama3.2:3b',
  created_at: new Date().toISOString(),
  message: {
    role: 'assistant',
    content: 'This is a mock response from Ollama. The heart is a muscular organ that pumps blood through the circulatory system.',
  },
  done: true,
  total_duration: 1500000000,
  load_duration: 500000000,
  prompt_eval_count: 50,
  prompt_eval_duration: 300000000,
  eval_count: 100,
  eval_duration: 700000000,
};

const defaultGenerateResponse: OllamaGenerateResponse = {
  model: 'llama3.2:3b',
  created_at: new Date().toISOString(),
  response: 'This is a mock generated response from Ollama.',
  done: true,
  context: [1, 2, 3, 4, 5],
  total_duration: 1500000000,
  load_duration: 500000000,
  prompt_eval_count: 50,
  eval_count: 100,
};

const defaultModels: OllamaModelInfo[] = [
  {
    name: 'llama3.2:3b',
    modified_at: new Date().toISOString(),
    size: 3000000000,
    digest: 'abc123',
    details: {
      format: 'gguf',
      family: 'llama',
      families: ['llama'],
      parameter_size: '3B',
      quantization_level: 'Q4_0',
    },
  },
  {
    name: 'mistral:7b',
    modified_at: new Date().toISOString(),
    size: 7000000000,
    digest: 'def456',
    details: {
      format: 'gguf',
      family: 'mistral',
      families: ['mistral'],
      parameter_size: '7B',
      quantization_level: 'Q4_0',
    },
  },
];

// ============================================================================
// Mock Implementation
// ============================================================================

export interface MockOllamaClient {
  chat: Mock<(request: OllamaChatRequest) => Promise<OllamaChatResponse>>;
  generate: Mock<(request: OllamaGenerateRequest) => Promise<OllamaGenerateResponse>>;
  list: Mock<() => Promise<{ models: OllamaModelInfo[] }>>;
  show: Mock<(model: string) => Promise<OllamaModelInfo>>;
  pull: Mock<(model: string) => Promise<{ status: string }>>;
  delete: Mock<(model: string) => Promise<{ status: string }>>;
  embeddings: Mock<(request: { model: string; prompt: string }) => Promise<{ embedding: number[] }>>;
  reset: () => void;
  setResponse: (type: 'chat' | 'generate', response: unknown) => void;
  setError: (type: 'chat' | 'generate' | 'list', error: Error) => void;
}

/**
 * Creates a mock Ollama client
 */
export function createOllamaMock(): MockOllamaClient {
  let chatResponse: OllamaChatResponse = { ...defaultChatResponse };
  let generateResponse: OllamaGenerateResponse = { ...defaultGenerateResponse };
  let models: OllamaModelInfo[] = [...defaultModels];
  let chatError: Error | null = null;
  let generateError: Error | null = null;
  let listError: Error | null = null;

  const mock: MockOllamaClient = {
    chat: vi.fn(async (request: OllamaChatRequest): Promise<OllamaChatResponse> => {
      if (chatError) throw chatError;
      return {
        ...chatResponse,
        model: request.model,
      };
    }),

    generate: vi.fn(async (request: OllamaGenerateRequest): Promise<OllamaGenerateResponse> => {
      if (generateError) throw generateError;
      return {
        ...generateResponse,
        model: request.model,
      };
    }),

    list: vi.fn(async (): Promise<{ models: OllamaModelInfo[] }> => {
      if (listError) throw listError;
      return { models };
    }),

    show: vi.fn(async (model: string): Promise<OllamaModelInfo> => {
      const found = models.find((m) => m.name === model);
      if (!found) {
        throw new Error(`Model ${model} not found`);
      }
      return found;
    }),

    pull: vi.fn(async (model: string): Promise<{ status: string }> => {
      return { status: `Pulled ${model}` };
    }),

    delete: vi.fn(async (model: string): Promise<{ status: string }> => {
      models = models.filter((m) => m.name !== model);
      return { status: `Deleted ${model}` };
    }),

    embeddings: vi.fn(async (_request: { model: string; prompt: string }): Promise<{ embedding: number[] }> => {
      // Return a mock 384-dimensional embedding
      return {
        embedding: Array.from({ length: 384 }, () => Math.random()),
      };
    }),

    reset: (): void => {
      chatResponse = { ...defaultChatResponse };
      generateResponse = { ...defaultGenerateResponse };
      models = [...defaultModels];
      chatError = null;
      generateError = null;
      listError = null;
      vi.clearAllMocks();
    },

    setResponse: (type: 'chat' | 'generate', response: unknown): void => {
      if (type === 'chat') {
        chatResponse = response as OllamaChatResponse;
      } else {
        generateResponse = response as OllamaGenerateResponse;
      }
    },

    setError: (type: 'chat' | 'generate' | 'list', error: Error): void => {
      if (type === 'chat') chatError = error;
      else if (type === 'generate') generateError = error;
      else if (type === 'list') listError = error;
    },
  };

  return mock;
}

/**
 * Default Ollama mock instance
 */
export const ollamaMock = createOllamaMock();

// ============================================================================
// Medical-specific mock responses
// ============================================================================

export const medicalResponses: Record<string, string> = {
  heart: 'The heart is a muscular organ about the size of a fist, located just behind and slightly left of the breastbone. The heart pumps blood through the network of arteries and veins called the cardiovascular system.',
  lungs: 'The lungs are the primary organs of the respiratory system. They are located on either side of the heart inside the chest cavity. The right lung is divided into three lobes, while the left lung has two lobes to accommodate the heart.',
  brain: 'The brain is the central organ of the human nervous system. It is protected by the skull and consists of the cerebrum, brainstem, and cerebellum. The brain controls most of the activities of the body.',
  liver: 'The liver is the largest internal organ, located in the upper right portion of the abdomen. It performs over 500 functions including producing bile, filtering blood, and metabolizing drugs.',
};

/**
 * Get a medical response for a topic
 */
export function getMedicalResponse(topic: string): string {
  const key = topic.toLowerCase();
  return medicalResponses[key] || `Information about ${topic} from the mock medical database.`;
}

/**
 * Create a chat response with medical content
 */
export function createMedicalChatResponse(topic: string): OllamaChatResponse {
  return {
    ...defaultChatResponse,
    message: {
      role: 'assistant',
      content: getMedicalResponse(topic),
    },
  };
}

export default ollamaMock;
