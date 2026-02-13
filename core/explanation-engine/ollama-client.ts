/**
 * Ollama Client - Local LLM Interface
 *
 * Communicates with locally-running Ollama for inference.
 * No data ever leaves the device.
 */

import { Ollama } from 'ollama';
import type { DepthLevel } from '../biological-self/types.js';

// ============================================================================
// Types
// ============================================================================

export interface ExplanationRequest {
  question: string;
  depthLevel: DepthLevel;
  context: string;  // Relevant biological self context
  knowledge: string;  // Retrieved medical knowledge
}

export interface ExplanationResponse {
  explanation: string;
  citations: Citation[];
  modelUsed: string;
  tokensUsed?: number;
}

export interface Citation {
  source: string;
  text: string;
}

// ============================================================================
// Depth Level System Prompts
// ============================================================================

const DEPTH_PROMPTS: Record<DepthLevel, string> = {
  1: `You are a patient health educator. Explain medical concepts at an 8th grade reading level.

STYLE REQUIREMENTS:
- Use simple, everyday words
- Use analogies (e.g., "your heart is like a pump")
- Avoid medical jargon, or define it simply when necessary
- Use short sentences
- Be warm and reassuring

REMEMBER: The patient may be scared or confused. Be kind and clear.`,

  2: `You are a patient health educator. Explain medical concepts at a 10th grade reading level.

STYLE REQUIREMENTS:
- Introduce basic medical terms, but define them
- Use some analogies to clarify complex ideas
- Keep explanations accessible but somewhat detailed
- Assume basic biology knowledge (cells, organs, etc.)`,

  3: `You are a patient health educator. Explain medical concepts at a 12th grade / high school graduate level.

STYLE REQUIREMENTS:
- Use standard medical terminology with brief context
- Provide moderately detailed explanations
- Assume the reader has general health literacy
- Include relevant numbers and ranges when helpful`,

  4: `You are a medical educator. Explain concepts at a college or pre-med level.

STYLE REQUIREMENTS:
- Use proper medical and scientific terminology
- Include biochemistry and physiological pathways when relevant
- Discuss mechanisms of action
- Reference relevant anatomy and physiology
- Be thorough but focused`,

  5: `You are a medical educator for graduate-level students. Explain at a Master's or PhD level.

STYLE REQUIREMENTS:
- Use precise scientific and medical terminology
- Discuss mechanisms at molecular and cellular levels
- Reference relevant research and evidence
- Include statistical context when appropriate
- Address nuance and uncertainty in the evidence`,

  6: `You are a clinical consultant speaking to a physician colleague. Provide physician-level explanations.

STYLE REQUIREMENTS:
- Full clinical reasoning and differential thinking
- Assume complete medical training
- Include relevant clinical pearls
- Discuss management considerations
- Reference guidelines and evidence-based practice
- Be concise but comprehensive`,
};

// ============================================================================
// System Prompt Builder
// ============================================================================

function buildSystemPrompt(depthLevel: DepthLevel): string {
  return `${DEPTH_PROMPTS[depthLevel]}

CRITICAL RULES:
1. You are providing EDUCATION, not medical advice or diagnosis
2. Always recommend consulting a healthcare provider for medical decisions
3. Base your explanations on the provided context and knowledge
4. If you cite information, note the source
5. If something is uncertain or outside your knowledge, say so
6. Personalize explanations to the patient's specific context when provided

FORMAT:
- Provide clear, organized explanations
- Use paragraphs for readability
- When citing sources, use [Source: X] format`;
}

// ============================================================================
// Ollama Client Class
// ============================================================================

export class OllamaClient {
  private ollama: Ollama;
  private model: string;

  constructor(model: string = 'llama3.1:8b', host: string = 'http://localhost:11434') {
    this.ollama = new Ollama({ host });
    this.model = model;
  }

  /**
   * Generate an explanation for a health question
   */
  async explain(request: ExplanationRequest): Promise<ExplanationResponse> {
    const systemPrompt = buildSystemPrompt(request.depthLevel);

    const userPrompt = this.buildUserPrompt(request);

    const response = await this.ollama.chat({
      model: this.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    });

    const citations = this.extractCitations(response.message.content);

    return {
      explanation: response.message.content,
      citations,
      modelUsed: this.model,
      tokensUsed: response.eval_count,
    };
  }

  /**
   * Build the user prompt with context and knowledge
   */
  private buildUserPrompt(request: ExplanationRequest): string {
    let prompt = '';

    if (request.context) {
      prompt += `PATIENT CONTEXT (from their health record):\n${request.context}\n\n`;
    }

    if (request.knowledge) {
      prompt += `RELEVANT MEDICAL KNOWLEDGE:\n${request.knowledge}\n\n`;
    }

    prompt += `PATIENT QUESTION:\n${request.question}`;

    return prompt;
  }

  /**
   * Extract citations from the response
   */
  private extractCitations(text: string): Citation[] {
    const citations: Citation[] = [];
    const citationRegex = /\[Source:\s*([^\]]+)\]/g;

    let match;
    while ((match = citationRegex.exec(text)) !== null) {
      citations.push({
        source: match[1].trim(),
        text: match[0],
      });
    }

    return citations;
  }

  /**
   * Check if Ollama is running and the model is available
   */
  async healthCheck(): Promise<{ ok: boolean; error?: string }> {
    try {
      const models = await this.ollama.list();
      const hasModel = models.models.some(m => m.name.startsWith(this.model.split(':')[0]));

      if (!hasModel) {
        return {
          ok: false,
          error: `Model ${this.model} not found. Run: ollama pull ${this.model}`,
        };
      }

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: `Cannot connect to Ollama. Is it running? Error: ${error}`,
      };
    }
  }

  /**
   * List available models
   */
  async listModels(): Promise<string[]> {
    const response = await this.ollama.list();
    return response.models.map(m => m.name);
  }

  /**
   * Change the active model
   */
  setModel(model: string): void {
    this.model = model;
  }
}
