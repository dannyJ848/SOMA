/**
 * Knowledge Base Module
 *
 * Exports vector store, embeddings, and retrieval functionality.
 */

export { LocalEmbeddings, cosineSimilarity } from './embeddings.js';
export { VectorStore } from './vector-store.js';
export type { KnowledgeChunk, SearchResult } from './vector-store.js';
export { KnowledgeRetriever } from './knowledge-retriever.js';
export type { RetrievalContext, RetrievedKnowledge } from './knowledge-retriever.js';
export { seedKnowledgeBase, needsSeeding } from './seed-knowledge.js';
