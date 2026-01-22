/**
 * AI Module
 *
 * Local AI services powered by Ollama for privacy-preserving
 * medical education assistance.
 */

// Core Ollama functions
export {
  checkOllamaHealth,
  isOllamaAvailable,
  listModels,
  hasModel,
  getDefaultModel,
  chat,
  askQuestion,
  streamChat,
  streamChatGenerator,
  chatJSON,
  OLLAMA_BASE_URL,
  DEFAULT_MODEL,
  type OllamaModel,
  type OllamaModelsResponse,
  type ChatMessage,
  type ChatRequest,
  type ChatResponse,
  type StreamChunk,
  type OllamaError,
  type OllamaStatus,
} from './ollama.js';

// Medical Educator AI
export {
  educatorChat,
  streamEducatorChat,
  explainSymptom,
  explainMedication,
  explainLabResult,
  explainCondition,
  explainBodySystem,
  buildEducatorSystemPrompt,
  detectDomain,
  checkForEmergency,
  BASE_SYSTEM_PROMPT,
  DOMAIN_PROMPTS,
  type EducatorDomain,
  type EducatorContext,
  type ExplorationContext,
  type FocusEntity,
  type EducatorMessage,
  type Citation,
  type RelatedTopic,
  type EducatorResponse,
} from './medical-educator.js';

// PubMed Search
export {
  searchPubMed,
  type PubMedArticle,
  type PubMedSearchResult,
} from './pubmed-search.js';
