/**
 * AI Bridge - CLI interface for Tauri AI IPC
 *
 * This script is called by Tauri Rust commands for AI operations.
 * It uses the Ollama service for local LLM inference.
 */

import {
  checkOllamaHealth,
  listModels,
  chat,
  streamChat,
  chatJSON,
  type ChatMessage,
  type ChatRequest,
  type OllamaModel,
  type OllamaStatus,
} from './core/ai/ollama.js';
import { RAGRetrieval, type RetrievedContext } from './core/rag/retrieval.js';
import { ensurePopulated } from './core/rag/populate.js';
import {
  searchHealthTopic,
  formatPubMedContext,
  formatPubMedCitations,
  type PubMedSearchResult,
} from './core/ai/pubmed-search.js';
import {
  ContentIngestion,
  type IngestionResult,
  type CollectionName,
  COLLECTIONS,
} from './core/ingestion/index.js';

interface AIHealthResponse {
  available: boolean;
  version?: string;
  error?: string;
}

interface AIModelsResponse {
  models: OllamaModel[];
}

interface AIChatRequest {
  model?: string;
  messages: ChatMessage[];
  systemPrompt?: string;
  format?: 'json';
  temperature?: number;
}

interface AIChatResponse {
  content: string;
  model: string;
  done: boolean;
}

interface AIChatRAGRequest {
  model?: string;
  messages: ChatMessage[];
  systemPrompt?: string;
  temperature?: number;
  // RAG-specific options
  ragOptions?: {
    structureName?: string;  // For anatomy queries
    symptom?: string;        // For symptom queries
    labName?: string;        // For lab result queries
    labValue?: string;
    system?: string;         // Body system filter
    complexityLevel?: 1 | 2 | 3 | 4 | 5;
    maxTokens?: number;
    includePubMed?: boolean; // Include live PubMed search
    pubMedQuery?: string;    // Custom PubMed query
  };
}

interface AIChatRAGResponse {
  content: string;
  model: string;
  done: boolean;
  citations: Array<{
    index: number;
    source: string;
    section?: string;
    url?: string;
  }>;
  ragContext?: {
    chunksUsed: number;
    totalTokens: number;
    processingTimeMs: number;
  };
}

async function main() {
  const command = process.argv[2];

  try {
    switch (command) {
      case 'health': {
        const status: OllamaStatus = await checkOllamaHealth();
        const response: AIHealthResponse = status.available
          ? { available: true, version: status.version }
          : { available: false, error: status.error };
        console.log(JSON.stringify(response));
        break;
      }

      case 'models': {
        const models = await listModels();
        const response: AIModelsResponse = { models };
        console.log(JSON.stringify(response));
        break;
      }

      case 'chat': {
        // Read request from argument (JSON string)
        const requestJson = process.argv[3];
        if (!requestJson) {
          console.error('Missing chat request');
          process.exit(1);
        }

        const request = JSON.parse(requestJson) as AIChatRequest;
        const messages: ChatMessage[] = [];

        // Add system prompt if provided
        if (request.systemPrompt) {
          messages.push({ role: 'system', content: request.systemPrompt });
        }

        // Add user messages
        messages.push(...request.messages);

        const chatRequest: ChatRequest = {
          model: request.model,
          messages,
          format: request.format,
          options: request.temperature ? { temperature: request.temperature } : undefined,
        };

        const result = await chat(chatRequest);
        const response: AIChatResponse = {
          content: result.message.content,
          model: result.model,
          done: result.done,
        };
        console.log(JSON.stringify(response));
        break;
      }

      case 'chat-json': {
        // Chat with JSON format response
        const requestJson = process.argv[3];
        if (!requestJson) {
          console.error('Missing chat request');
          process.exit(1);
        }

        const request = JSON.parse(requestJson) as AIChatRequest;
        const messages: ChatMessage[] = [];

        if (request.systemPrompt) {
          messages.push({ role: 'system', content: request.systemPrompt });
        }

        messages.push(...request.messages);

        const result = await chatJSON({
          model: request.model,
          messages,
          options: request.temperature ? { temperature: request.temperature } : undefined,
        });

        console.log(JSON.stringify({ result, success: true }));
        break;
      }

      case 'chat-rag': {
        // RAG-enhanced chat - retrieves relevant content before generating response
        const requestJson = process.argv[3];
        if (!requestJson) {
          console.error('Missing chat request');
          process.exit(1);
        }

        const request = JSON.parse(requestJson) as AIChatRAGRequest;
        const rag = new RAGRetrieval();
        let context: RetrievedContext | null = null;
        const ragOpts = request.ragOptions || {};

        // Ensure the vector store is populated before retrieval
        try {
          await ensurePopulated();
        } catch (populateError) {
          console.error('RAG population warning:', populateError);
        }

        try {
          // Get the user's query from the last message
          const userMessages = request.messages.filter(m => m.role === 'user');
          const lastQuery = userMessages[userMessages.length - 1]?.content || '';

          if (ragOpts.structureName) {
            // Anatomy-specific retrieval
            context = await rag.retrieveForStructure(ragOpts.structureName, {
              system: ragOpts.system,
              complexityLevel: ragOpts.complexityLevel,
              maxTokens: ragOpts.maxTokens || 3000,
            });
          } else if (ragOpts.symptom) {
            // Symptom-specific retrieval
            context = await rag.retrieveForSymptom(ragOpts.symptom, {
              system: ragOpts.system,
              complexityLevel: ragOpts.complexityLevel,
              maxTokens: ragOpts.maxTokens || 3000,
            });
          } else if (ragOpts.labName) {
            // Lab result retrieval
            context = await rag.retrieveForLabResult(ragOpts.labName, ragOpts.labValue, {
              complexityLevel: ragOpts.complexityLevel,
              maxTokens: ragOpts.maxTokens || 3000,
            });
          } else {
            // General retrieval based on the query
            context = await rag.retrieve(lastQuery, {
              system: ragOpts.system,
              complexityLevel: ragOpts.complexityLevel,
              maxTokens: ragOpts.maxTokens || 3000,
            });
          }
        } catch (ragError) {
          // RAG retrieval failed, continue without context
          console.error('RAG retrieval warning:', ragError);
        }

        // Optional: Search PubMed for recent literature
        let pubmedResult: PubMedSearchResult | null = null;

        if (ragOpts?.includePubMed) {
          try {
            const userMessages = request.messages.filter(m => m.role === 'user');
            const lastQuery = userMessages[userMessages.length - 1]?.content || '';
            const pubmedQuery = ragOpts.pubMedQuery || ragOpts.structureName || lastQuery;

            pubmedResult = await searchHealthTopic(pubmedQuery, {
              includeReviews: true,
              recentOnly: true,
              maxResults: 3,
            });
          } catch (pubmedError) {
            console.error('PubMed search warning:', pubmedError);
          }
        }

        // Build enhanced system prompt with RAG context
        let enhancedSystemPrompt = request.systemPrompt || '';

        if (context && context.chunks.length > 0) {
          const ragContext = rag.formatContextForPrompt(context);
          const citations = rag.formatCitations(context);

          enhancedSystemPrompt += `

=== EDUCATIONAL REFERENCE CONTENT ===
Use the following verified educational content to inform your response. Cite sources using [N] notation.

${ragContext}

=== SOURCES ===
${citations}

Important: Base your response on the educational content above when relevant. Include citations [1], [2], etc. when using information from these sources.`;
        }

        // Add PubMed results if available
        if (pubmedResult && pubmedResult.articles.length > 0) {
          const pubmedContext = formatPubMedContext(pubmedResult);

          enhancedSystemPrompt += `

=== RECENT RESEARCH (PubMed) ===
The following recent research articles may provide additional context. Cite using [PubMed-N] notation if relevant.

${pubmedContext}`;
        }

        const messages: ChatMessage[] = [];
        if (enhancedSystemPrompt) {
          messages.push({ role: 'system', content: enhancedSystemPrompt });
        }
        messages.push(...request.messages);

        const chatRequest: ChatRequest = {
          model: request.model,
          messages,
          options: request.temperature ? { temperature: request.temperature } : undefined,
        };

        const result = await chat(chatRequest);

        // Build citations array from RAG context
        const citationsArray: Array<{
          index: number;
          source: string;
          section?: string;
          url?: string;
        }> = context?.chunks.map(chunk => ({
          index: chunk.citationIndex || 0,
          source: chunk.metadata.source,
          section: chunk.metadata.section || chunk.metadata.chapter,
          url: chunk.metadata.url,
        })) || [];

        // Add PubMed citations
        if (pubmedResult && pubmedResult.articles.length > 0) {
          const pubmedCitations = formatPubMedCitations(pubmedResult);
          // Map to ensure compatible type (make url optional)
          citationsArray.push(...pubmedCitations.map(c => ({
            index: c.index,
            source: c.source,
            section: c.section,
            url: c.url as string | undefined,
          })));
        }

        const response: AIChatRAGResponse = {
          content: result.message.content,
          model: result.model,
          done: result.done,
          citations: citationsArray,
          ragContext: context ? {
            chunksUsed: context.chunks.length,
            totalTokens: context.totalTokens,
            processingTimeMs: context.processingTimeMs,
          } : undefined,
        };

        console.log(JSON.stringify(response));
        await rag.close();
        break;
      }

      case 'stream': {
        // Streaming chat - outputs NDJSON (newline-delimited JSON)
        const requestJson = process.argv[3];
        if (!requestJson) {
          console.error('Missing chat request');
          process.exit(1);
        }

        const request = JSON.parse(requestJson) as AIChatRequest;
        const messages: ChatMessage[] = [];

        if (request.systemPrompt) {
          messages.push({ role: 'system', content: request.systemPrompt });
        }

        messages.push(...request.messages);

        await streamChat(
          {
            model: request.model,
            messages,
            options: request.temperature ? { temperature: request.temperature } : undefined,
          },
          (chunk) => {
            // Output each chunk as a JSON line
            console.log(JSON.stringify({
              content: chunk.message.content,
              done: chunk.done,
            }));
          },
          () => {
            // Stream complete
          },
          (error) => {
            console.error(JSON.stringify({ error: error.message }));
            process.exit(1);
          }
        );
        break;
      }

      case 'ingest-sample': {
        // Ingest sample life sciences content for testing/demo
        const ingestion = new ContentIngestion();
        try {
          console.error('Ingesting sample life sciences content...');
          const results = await ingestion.ingestSampleContent();

          const summary = {
            success: true,
            collections: results.map(r => ({
              collection: r.collection,
              chunks: r.chunksCreated,
              tokens: r.totalTokens,
              timeMs: r.processingTimeMs,
            })),
            totalChunks: results.reduce((sum, r) => sum + r.chunksCreated, 0),
            totalTokens: results.reduce((sum, r) => sum + r.totalTokens, 0),
          };

          console.log(JSON.stringify(summary));
        } finally {
          await ingestion.close();
        }
        break;
      }

      case 'ingest': {
        // Ingest content from file or directory
        const argJson = process.argv[3];
        if (!argJson) {
          console.error('Missing ingest arguments');
          process.exit(1);
        }

        const args = JSON.parse(argJson) as {
          collection: CollectionName;
          path: string;
          metadata?: Record<string, string | number>;
          isDirectory?: boolean;
        };

        if (!COLLECTIONS.includes(args.collection)) {
          console.error(`Invalid collection. Must be one of: ${COLLECTIONS.join(', ')}`);
          process.exit(1);
        }

        const ingestion = new ContentIngestion();
        try {
          let result: IngestionResult;

          if (args.isDirectory) {
            result = await ingestion.ingestDirectory(
              args.collection,
              args.path,
              args.metadata || {},
              {
                onProgress: (p) => console.error(`${p.stage}: ${p.message}`),
              }
            );
          } else {
            result = await ingestion.ingestFile(
              args.collection,
              args.path,
              args.metadata || {},
              {
                onProgress: (p) => console.error(`${p.stage}: ${p.message}`),
              }
            );
          }

          console.log(JSON.stringify({
            success: true,
            collection: result.collection,
            documentsAdded: result.documentsAdded,
            chunksCreated: result.chunksCreated,
            totalTokens: result.totalTokens,
            processingTimeMs: result.processingTimeMs,
          }));
        } finally {
          await ingestion.close();
        }
        break;
      }

      case 'rag-stats': {
        // Get RAG collection statistics
        const rag = new RAGRetrieval();
        try {
          const stats = await rag.getStats();
          console.log(JSON.stringify({
            success: true,
            ...stats,
          }));
        } finally {
          await rag.close();
        }
        break;
      }

      default:
        console.error(`Unknown AI command: ${command}`);
        console.error('Available commands: health, models, chat, chat-json, chat-rag, stream, ingest-sample, ingest, rag-stats');
        process.exit(1);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(JSON.stringify({ error: message }));
    process.exit(1);
  }
}

main();
