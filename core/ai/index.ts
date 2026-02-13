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
  selectOptimalModel,
  getRecommendedModels,
  getDeviceTier,
  clearModelCache,
  chat,
  askQuestion,
  streamChat,
  streamChatGenerator,
  chatJSON,
  OLLAMA_BASE_URL,
  FALLBACK_MODEL,
  MODEL_TIERS,
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

// Local LLM Services (Ollama + DeepSeek R1/Coder integration)
export {
  TauriLLMBridge,
  MockLLMService,
  ContextBuilder,
  createLLMService,
  EXPLAIN_CONDITION_PROMPT,
  EXPLAIN_PROCEDURE_PROMPT,
  EXPLAIN_MEDICATION_PROMPT,
  EXPLAIN_SYMPTOM_PROMPT,
  ANSWER_QUESTION_PROMPT,
  TRANSLATE_MEDICAL_PROMPT,
  SIMPLIFY_TEXT_PROMPT,
  type LocalLLMService,
  type GenerateOptions,
  type ExplanationLevel,
  type SupportedLanguage,
  type ModelInfo,
  type LLMHealthStatus,
  type ContextChunk,
  type ContextBuilderConfig,
} from './local-llm-service.js';

// Medical Dictation Matcher (voice STT → medical entity matching)
export {
  processDictation,
  extractMedicalEntities,
  matchEntityToContent,
  buildSearchIndex,
  detectLanguage,
  type MedicalEntityType,
  type MedicalEntity,
  type DictationMatch,
  type DictationResult,
} from './medical-dictation-matcher.js';

// DeepSeek AI Service (R1 + Coder + Whisper for Spanish)
export {
  transcribeAudio,
  deepSeekChat,
  deepSeekCode,
  setDeepSeekAPIKey,
  type DeepSeekModel,
  type DeepSeekModelConfig,
  type WhisperTranscriptionResult,
  type DeepSeekChatResponse,
  DEFAULT_DEEPSEEK_MODEL,
  DEEPSEEK_API_URL,
  WHISPER_API_URL,
} from './deepseek.js';

// Smart Medical Search (AI-powered unified content search)
export {
  smartSearch,
  quickSearch,
  searchByBodySystem,
  getRelatedContent,
  rebuildCorpus,
  getCorpusSize,
  getCorpusSummary,
  type SearchResultType,
  type SearchResult,
  type SmartSearchResult,
  type SearchFilters,
} from './smart-medical-search.js';
