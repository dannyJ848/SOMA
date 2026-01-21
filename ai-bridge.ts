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

        try {
          // Get the user's query from the last message
          const userMessages = request.messages.filter(m => m.role === 'user');
          const lastQuery = userMessages[userMessages.length - 1]?.content || '';

          // Retrieve relevant content based on RAG options
          const ragOpts = request.ragOptions || {};

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

        // Build citations array from context
        const citationsArray = context?.chunks.map(chunk => ({
          index: chunk.citationIndex || 0,
          source: chunk.metadata.source,
          section: chunk.metadata.section || chunk.metadata.chapter,
          url: chunk.metadata.url,
        })) || [];

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

      default:
        console.error(`Unknown AI command: ${command}`);
        process.exit(1);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(JSON.stringify({ error: message }));
    process.exit(1);
  }
}

main();
