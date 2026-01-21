/**
 * AI Response with Citations
 *
 * Enhances AI responses with inline citations from RAG-retrieved sources.
 * Provides structured output parsing for citation extraction and linking.
 */

import { RAGRetrieval, RetrievedContext, RetrievalOptions } from './retrieval';
import { chat, ChatMessage, ChatRequest, streamChatGenerator } from '../ai/ollama';

/**
 * Citation in an AI response
 */
export interface Citation {
  index: number;          // Citation number [1], [2], etc.
  source: string;         // Source name
  section?: string;       // Section/chapter reference
  url?: string;           // Link to full content
  relevantText: string;   // The text that supports the claim
  chunkId: string;        // ID for navigation
}

/**
 * AI response with citations
 */
export interface CitedResponse {
  text: string;           // Full response text with [N] citations
  citations: Citation[];  // List of citations
  context: RetrievedContext; // Retrieved context used
  processingTimeMs: number;
}

/**
 * System prompt for citation-aware responses
 */
const CITATION_SYSTEM_PROMPT = `You are an educational assistant helping users understand human anatomy and physiology.

IMPORTANT CITATION RULES:
1. Use inline citations in the format [1], [2], etc. to reference the provided context
2. Only make claims that are supported by the provided context
3. If the context doesn't contain relevant information, say so clearly
4. Include citations for specific facts, not general knowledge
5. At the end, list all sources you cited

RESPONSE FORMAT:
- Answer the question using the context provided
- Use [N] notation inline to cite sources
- Keep explanations clear and appropriate for the user's level
- Include a "Sources:" section at the end listing cited references

CONTEXT:
{context}

EDUCATIONAL DISCLAIMER:
This information is for educational purposes only and should not be used for medical diagnosis or treatment. Always consult a healthcare professional for medical advice.`;

/**
 * Build system prompt with context
 */
function buildSystemPrompt(context: RetrievedContext, complexityLevel: number): string {
  const retrieval = new RAGRetrieval();
  const contextText = retrieval.formatContextForPrompt(context);

  const levelDescriptions: Record<number, string> = {
    1: 'Explain at an 8th grade level using simple terms and analogies.',
    2: 'Explain at a high school level with basic medical terminology.',
    3: 'Explain at a college level with full medical terminology.',
    4: 'Explain at a graduate level with detailed mechanisms.',
    5: 'Explain at a medical professional level with clinical correlations.',
  };

  const levelInstruction = levelDescriptions[complexityLevel] || levelDescriptions[3];

  return CITATION_SYSTEM_PROMPT
    .replace('{context}', contextText)
    + `\n\nEXPLANATION LEVEL: ${levelInstruction}`;
}

/**
 * Parse citations from AI response text
 */
function parseCitations(
  responseText: string,
  context: RetrievedContext
): Citation[] {
  const citations: Citation[] = [];
  const citationPattern = /\[(\d+)\]/g;
  const seenIndices = new Set<number>();

  let match;
  while ((match = citationPattern.exec(responseText)) !== null) {
    const index = parseInt(match[1], 10);

    if (seenIndices.has(index)) continue;
    seenIndices.add(index);

    // Find the corresponding chunk
    const chunk = context.chunks.find(c => c.citationIndex === index);

    if (chunk) {
      citations.push({
        index,
        source: chunk.metadata.source,
        section: chunk.metadata.section || chunk.metadata.chapter,
        url: chunk.metadata.url,
        relevantText: chunk.text.substring(0, 200) + (chunk.text.length > 200 ? '...' : ''),
        chunkId: chunk.id,
      });
    }
  }

  return citations.sort((a, b) => a.index - b.index);
}

/**
 * Generate a cited response
 */
export async function generateCitedResponse(
  query: string,
  options?: {
    retrieval?: RetrievalOptions;
    complexityLevel?: number;
    conversationHistory?: ChatMessage[];
    model?: string;
  }
): Promise<CitedResponse> {
  const startTime = Date.now();
  const complexityLevel = options?.complexityLevel || 3;

  // Retrieve relevant context
  const retrieval = new RAGRetrieval();
  const context = await retrieval.retrieve(query, {
    ...options?.retrieval,
    complexityLevel: complexityLevel as 1 | 2 | 3 | 4 | 5,
  });

  // Build messages for the AI
  const systemPrompt = buildSystemPrompt(context, complexityLevel);

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...(options?.conversationHistory || []),
    { role: 'user', content: query },
  ];

  // Build chat request
  const chatRequest: ChatRequest = {
    model: options?.model,
    messages,
    options: {
      temperature: 0.3, // Lower temperature for more factual responses
    },
  };

  // Generate response
  const aiResponse = await chat(chatRequest);

  // Parse citations from the response
  const citations = parseCitations(aiResponse.message.content, context);

  return {
    text: aiResponse.message.content,
    citations,
    context,
    processingTimeMs: Date.now() - startTime,
  };
}

/**
 * Stream a cited response
 */
export async function* streamCitedResponse(
  query: string,
  options?: {
    retrieval?: RetrievalOptions;
    complexityLevel?: number;
    conversationHistory?: ChatMessage[];
    model?: string;
  }
): AsyncGenerator<{ type: 'chunk' | 'context' | 'done'; data: string | RetrievedContext | CitedResponse }> {
  const startTime = Date.now();
  const complexityLevel = options?.complexityLevel || 3;

  // Retrieve relevant context
  const retrieval = new RAGRetrieval();
  const context = await retrieval.retrieve(query, {
    ...options?.retrieval,
    complexityLevel: complexityLevel as 1 | 2 | 3 | 4 | 5,
  });

  // Emit context first
  yield { type: 'context', data: context };

  // Build messages for the AI
  const systemPrompt = buildSystemPrompt(context, complexityLevel);

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...(options?.conversationHistory || []),
    { role: 'user', content: query },
  ];

  // Build chat request
  const chatRequest: ChatRequest = {
    model: options?.model,
    messages,
    options: {
      temperature: 0.3,
    },
  };

  // Stream the response
  let fullText = '';

  for await (const chunk of streamChatGenerator(chatRequest)) {
    const content = chunk.message?.content || '';
    fullText += content;
    yield { type: 'chunk', data: content };
  }

  // Parse citations from the complete response
  const citations = parseCitations(fullText, context);

  // Emit final result
  yield {
    type: 'done',
    data: {
      text: fullText,
      citations,
      context,
      processingTimeMs: Date.now() - startTime,
    },
  };
}

/**
 * Format a citation for display
 */
export function formatCitation(citation: Citation): string {
  let formatted = `[${citation.index}] ${citation.source}`;

  if (citation.section) {
    formatted += ` - ${citation.section}`;
  }

  if (citation.url) {
    formatted += ` (${citation.url})`;
  }

  return formatted;
}

/**
 * Format citations list for display
 */
export function formatCitationsList(citations: Citation[]): string {
  return citations.map(formatCitation).join('\n');
}

/**
 * Extract academic-style citation
 */
export function toAcademicCitation(citation: Citation): string {
  const parts: string[] = [];

  parts.push(citation.source);

  if (citation.section) {
    parts.push(`"${citation.section}"`);
  }

  if (citation.url) {
    parts.push(`Available at: ${citation.url}`);
  }

  return parts.join('. ') + '.';
}

/**
 * Copy all citations in academic format
 */
export function toAcademicCitationsList(citations: Citation[]): string {
  return citations
    .map((c, i) => `${i + 1}. ${toAcademicCitation(c)}`)
    .join('\n');
}
