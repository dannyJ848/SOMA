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
