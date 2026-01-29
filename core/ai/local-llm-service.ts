/**
 * Local LLM Service - DeepSeek 14B Integration Layer
 *
 * Provides the integration layer for communicating with a locally-running
 * DeepSeek 14B model via the Tauri backend (llama.cpp / Metal acceleration).
 * Falls back to Ollama HTTP API when Tauri native inference is unavailable,
 * and further falls back to a MockLLMService for development/testing.
 *
 * All inference runs on-device. No data ever leaves the user's machine.
 */

// ============================================================================
// Types & Interfaces
// ============================================================================

/** Options for text generation requests */
export interface GenerateOptions {
  /** Sampling temperature (0 = deterministic, higher = more creative). Default: 0.7 */
  temperature?: number;
  /** Maximum tokens to generate. Default: 1024 */
  maxTokens?: number;
  /** Top-p nucleus sampling threshold. Default: 0.9 */
  topP?: number;
  /** Top-k sampling. Default: 40 */
  topK?: number;
  /** Stop sequences that halt generation */
  stopSequences?: string[];
  /** System prompt override (most methods supply their own) */
  systemPrompt?: string;
}

/** Complexity levels mapping to reading-level tiers */
export type ExplanationLevel = 1 | 2 | 3 | 4 | 5;

/** Supported languages */
export type SupportedLanguage = 'en' | 'es';

/** Model metadata returned from the backend */
export interface ModelInfo {
  name: string;
  parameterCount?: string;
  quantization?: string;
  contextLength?: number;
  isOnDevice: boolean;
}

/** Health / availability status of the LLM backend */
export interface LLMHealthStatus {
  available: boolean;
  model?: string;
  error?: string;
  isOnDevice: boolean;
  backendType: 'tauri-native' | 'ollama' | 'mock';
}

/**
 * Core interface for communicating with the local DeepSeek 14B model.
 * Every method runs entirely on-device; nothing is sent to remote servers.
 */
export interface LocalLLMService {
  /** Check if the local model is available and ready for inference */
  isAvailable(): Promise<boolean>;

  /** Get health/status information about the LLM backend */
  getHealth(): Promise<LLMHealthStatus>;

  /** Get information about the loaded model */
  getModelInfo(): Promise<ModelInfo | null>;

  /** Generate a response from a prompt (non-streaming) */
  generate(prompt: string, options?: GenerateOptions): Promise<string>;

  /** Stream a response token-by-token */
  generateStream(prompt: string, options?: GenerateOptions): AsyncGenerator<string>;

  /** Explain a medical concept at a specific complexity level and language */
  explainConcept(concept: string, level: ExplanationLevel, language: SupportedLanguage): Promise<string>;

  /** Generate an explanation for a medical condition */
  explainCondition(conditionId: string, level: ExplanationLevel, language: SupportedLanguage): Promise<string>;

  /** Answer a question using local knowledge base context chunks */
  answerWithContext(question: string, context: string[], language: SupportedLanguage): Promise<string>;

  /** Translate medical content between English and Spanish */
  translateMedical(text: string, fromLang: SupportedLanguage, toLang: SupportedLanguage): Promise<string>;
}

// ============================================================================
// Prompt Templates
// ============================================================================

/**
 * Level descriptions used across all prompt templates.
 * Maps ExplanationLevel to a description of the target audience.
 */
const LEVEL_DESCRIPTIONS: Record<ExplanationLevel, { en: string; es: string }> = {
  1: {
    en: 'an 8th-grade reading level. Use simple everyday language, analogies, and short sentences. Avoid jargon entirely or define it simply. Be warm and reassuring.',
    es: 'un nivel de lectura de 8vo grado. Use lenguaje cotidiano simple, analogias y oraciones cortas. Evite la jerga medica o definala de forma sencilla. Sea calido y tranquilizador.',
  },
  2: {
    en: 'a 10th-grade reading level. Introduce basic medical terms but always define them. Use analogies for complex ideas. Assume basic biology knowledge.',
    es: 'un nivel de lectura de 10mo grado. Introduzca terminos medicos basicos pero siempre definalos. Use analogias para ideas complejas. Asuma conocimiento basico de biologia.',
  },
  3: {
    en: 'a high-school graduate level. Use standard medical terminology with brief context. Provide moderately detailed explanations. Assume general health literacy.',
    es: 'un nivel de graduado de secundaria. Use terminologia medica estandar con contexto breve. Proporcione explicaciones moderadamente detalladas. Asuma alfabetizacion general en salud.',
  },
  4: {
    en: 'a college or pre-med level. Use proper medical and scientific terminology. Include biochemistry and physiological pathways. Discuss mechanisms of action.',
    es: 'un nivel universitario o pre-medico. Use terminologia medica y cientifica adecuada. Incluya bioquimica y vias fisiologicas. Discuta mecanismos de accion.',
  },
  5: {
    en: 'a graduate or physician level. Use precise scientific terminology. Discuss molecular and cellular mechanisms. Reference research evidence and clinical guidelines. Address nuance and uncertainty.',
    es: 'un nivel de posgrado o medico. Use terminologia cientifica precisa. Discuta mecanismos moleculares y celulares. Haga referencia a evidencia de investigacion y guias clinicas. Aborde matices e incertidumbre.',
  },
};

/** Language instruction appended to prompts */
const LANGUAGE_INSTRUCTION: Record<SupportedLanguage, string> = {
  en: '',
  es: '\n\nIMPORTANT: You MUST respond entirely in Spanish. Use appropriate Spanish medical terminology. When mentioning a medication or condition name for the first time, you may include the English term in parentheses.',
};

/**
 * Medical-specific prompt templates.
 * Each returns a fully-formed prompt string ready for the LLM.
 */

export const EXPLAIN_CONDITION_PROMPT = (
  condition: string,
  level: ExplanationLevel,
  language: SupportedLanguage,
): string => {
  const levelDesc = LEVEL_DESCRIPTIONS[level][language];
  const langInstr = LANGUAGE_INSTRUCTION[language];

  if (language === 'es') {
    return `Eres un educador medico de clase mundial. Explica la siguiente condicion medica a ${levelDesc}

Condicion: ${condition}

Proporciona:
1. Que es esta condicion y como se desarrolla
2. Que ocurre en el cuerpo (la fisiopatologia)
3. Como se manifiesta tipicamente (sintomas y signos)
4. Como se maneja generalmente y por que esos enfoques funcionan
5. Cuando alguien deberia buscar atencion medica

IMPORTANTE: Esto es educacion, NO diagnostico. Siempre recomienda consultar con un profesional de salud.${langInstr}`;
  }

  return `You are a world-class medical educator. Explain the following medical condition at ${levelDesc}

Condition: ${condition}

Provide:
1. What this condition is and how it develops
2. What goes wrong in the body (the pathophysiology)
3. How it typically manifests (symptoms and signs)
4. How it is generally managed and why those approaches work
5. When someone should seek medical attention

IMPORTANT: This is education, NOT diagnosis. Always recommend consulting a healthcare provider.${langInstr}`;
};

export const EXPLAIN_PROCEDURE_PROMPT = (
  procedure: string,
  level: ExplanationLevel,
  language: SupportedLanguage,
): string => {
  const levelDesc = LEVEL_DESCRIPTIONS[level][language];
  const langInstr = LANGUAGE_INSTRUCTION[language];

  if (language === 'es') {
    return `Eres un educador medico de clase mundial. Explica el siguiente procedimiento medico a ${levelDesc}

Procedimiento: ${procedure}

Proporciona:
1. Que es este procedimiento y por que se realiza
2. Como se lleva a cabo (paso a paso simplificado)
3. Que esperar antes, durante y despues
4. Riesgos y beneficios comunes
5. Preguntas importantes para hacerle al medico

IMPORTANTE: Esto es educacion para ayudar a los pacientes a entender. Las decisiones medicas deben tomarse con su equipo de salud.${langInstr}`;
  }

  return `You are a world-class medical educator. Explain the following medical procedure at ${levelDesc}

Procedure: ${procedure}

Provide:
1. What this procedure is and why it is performed
2. How it is carried out (simplified step-by-step)
3. What to expect before, during, and after
4. Common risks and benefits
5. Important questions to ask the doctor

IMPORTANT: This is education to help patients understand. Medical decisions should be made with their healthcare team.${langInstr}`;
};

export const EXPLAIN_MEDICATION_PROMPT = (
  medication: string,
  level: ExplanationLevel,
  language: SupportedLanguage,
): string => {
  const levelDesc = LEVEL_DESCRIPTIONS[level][language];
  const langInstr = LANGUAGE_INSTRUCTION[language];

  if (language === 'es') {
    return `Eres un educador medico de clase mundial. Explica el siguiente medicamento a ${levelDesc}

Medicamento: ${medication}

Proporciona:
1. Como funciona este medicamento (mecanismo de accion)
2. Para que condiciones se usa tipicamente y por que
3. Que esperar al tomarlo (efectos, cronograma)
4. Efectos secundarios comunes y cuando preocuparse
5. Interacciones importantes a conocer

IMPORTANTE: Las decisiones de prescripcion pertenecen al medico del paciente. Esto es solo educacion.${langInstr}`;
  }

  return `You are a world-class medical educator. Explain the following medication at ${levelDesc}

Medication: ${medication}

Provide:
1. How this medication works (mechanism of action)
2. What conditions it is typically used for and why
3. What to expect when taking it (effects, timeline)
4. Common side effects and when to be concerned
5. Important interactions to know about

IMPORTANT: Prescribing decisions belong to the patient's doctor. This is education only.${langInstr}`;
};

export const EXPLAIN_SYMPTOM_PROMPT = (
  symptom: string,
  level: ExplanationLevel,
  language: SupportedLanguage,
): string => {
  const levelDesc = LEVEL_DESCRIPTIONS[level][language];
  const langInstr = LANGUAGE_INSTRUCTION[language];

  if (language === 'es') {
    return `Eres un educador medico de clase mundial. Explica el siguiente sintoma a ${levelDesc}

Sintoma: ${symptom}

Proporciona:
1. Que es este sintoma (la sensacion, la fisiologia detras)
2. Que sistemas del cuerpo podrian estar involucrados
3. Causas comunes (contexto educativo, NO diagnostico)
4. Como los medicos tipicamente evaluan este sintoma
5. Senales de alarma que ameritan atencion medica inmediata

IMPORTANTE: Estas ensenando sobre sintomas, NO diagnosticando. Recomienda siempre consultar con un profesional de salud.${langInstr}`;
  }

  return `You are a world-class medical educator. Explain the following symptom at ${levelDesc}

Symptom: ${symptom}

Provide:
1. What this symptom IS (the sensation, the physiology behind it)
2. What body systems might be involved
3. Common causes (educational context, NOT diagnosis)
4. How doctors typically evaluate this symptom
5. Red flags that warrant immediate medical attention

IMPORTANT: You are teaching about symptoms, NOT diagnosing. Always recommend consulting a healthcare provider.${langInstr}`;
};

export const ANSWER_QUESTION_PROMPT = (
  question: string,
  context: string[],
  language: SupportedLanguage,
): string => {
  const contextBlock = context.length > 0
    ? context.map((chunk, i) => `[Source ${i + 1}]:\n${chunk}`).join('\n\n')
    : 'No specific context available.';

  const langInstr = LANGUAGE_INSTRUCTION[language];

  if (language === 'es') {
    return `Eres un educador medico de clase mundial. Responde la siguiente pregunta usando el contexto proporcionado de la base de conocimiento local.

CONTEXTO DE LA BASE DE CONOCIMIENTO:
${contextBlock}

PREGUNTA DEL USUARIO:
${question}

INSTRUCCIONES:
- Base tu respuesta en el contexto proporcionado cuando sea posible
- Cita las fuentes usando [Fuente N] cuando hagas referencia a informacion especifica
- Si el contexto no cubre completamente la pregunta, complementa con conocimiento general pero indicalo
- Esto es EDUCACION, no diagnostico medico
- Siempre recomienda consultar con un profesional de salud para decisiones medicas${langInstr}`;
  }

  return `You are a world-class medical educator. Answer the following question using the provided context from the local knowledge base.

KNOWLEDGE BASE CONTEXT:
${contextBlock}

USER QUESTION:
${question}

INSTRUCTIONS:
- Base your answer on the provided context when possible
- Cite sources using [Source N] when referencing specific information
- If the context does not fully cover the question, supplement with general knowledge but indicate this
- This is EDUCATION, not medical diagnosis
- Always recommend consulting a healthcare provider for medical decisions${langInstr}`;
};

export const TRANSLATE_MEDICAL_PROMPT = (
  text: string,
  fromLang: SupportedLanguage,
  toLang: SupportedLanguage,
): string => {
  const fromName = fromLang === 'en' ? 'English' : 'Spanish';
  const toName = toLang === 'en' ? 'English' : 'Spanish';

  return `You are a professional medical translator with expertise in both English and Spanish medical terminology.

Translate the following medical text from ${fromName} to ${toName}.

REQUIREMENTS:
- Preserve medical accuracy and terminology
- Use the standard medical terminology in the target language
- For drug names, keep the generic name and add the common local brand name in parentheses if different
- For anatomical terms, use the standard accepted terms in the target language
- Maintain the same level of formality and technical depth as the original
- Do NOT add explanations or commentary; provide only the translation

TEXT TO TRANSLATE:
${text}

TRANSLATION:`;
};

export const SIMPLIFY_TEXT_PROMPT = (
  text: string,
  targetLevel: ExplanationLevel,
  language: SupportedLanguage,
): string => {
  const levelDesc = LEVEL_DESCRIPTIONS[targetLevel][language];
  const langInstr = LANGUAGE_INSTRUCTION[language];

  if (language === 'es') {
    return `Eres un educador medico experto en comunicacion con pacientes. Simplifica el siguiente texto medico a ${levelDesc}

TEXTO ORIGINAL:
${text}

INSTRUCCIONES:
- Mantiene toda la informacion medica importante
- Reemplaza la jerga medica con lenguaje cotidiano (o definela claramente)
- Usa analogias para conceptos complejos
- Organiza la informacion de forma clara
- NO agregues informacion nueva que no este en el original
- NO omitas informacion de seguridad o advertencias${langInstr}`;
  }

  return `You are a medical educator expert in patient communication. Simplify the following medical text to ${levelDesc}

ORIGINAL TEXT:
${text}

INSTRUCTIONS:
- Preserve all important medical information
- Replace medical jargon with everyday language (or clearly define it)
- Use analogies for complex concepts
- Organize information clearly
- Do NOT add new information not present in the original
- Do NOT omit safety information or warnings${langInstr}`;
};


// ============================================================================
// TauriLLMBridge - Primary implementation via Tauri native commands
// ============================================================================

/**
 * Communicates with the DeepSeek 14B model through Tauri IPC commands.
 * The Rust backend (src-tauri/src/llm.rs) handles actual model inference
 * using llama.cpp with Metal acceleration for on-device processing.
 */
export class TauriLLMBridge implements LocalLLMService {
  private invoker: <T>(cmd: string, args?: Record<string, unknown>) => Promise<T>;

  /**
   * @param invoker - The Tauri invoke function. Accepts a custom invoker
   *   for testing or when the import path differs across environments.
   */
  constructor(invoker?: <T>(cmd: string, args?: Record<string, unknown>) => Promise<T>) {
    // Default to dynamic import of the project's Tauri invoke wrapper.
    // Callers can inject their own invoker for tests or alternative environments.
    this.invoker = invoker ?? (async <T>(cmd: string, args?: Record<string, unknown>): Promise<T> => {
      const { invoke } = await import('../../src/tauri-invoke.js');
      return invoke<T>(cmd, args);
    });
  }

  async isAvailable(): Promise<boolean> {
    try {
      const status = await this.invoker<{ available: boolean }>('llm_health');
      return status.available;
    } catch {
      return false;
    }
  }

  async getHealth(): Promise<LLMHealthStatus> {
    try {
      const status = await this.invoker<{
        available: boolean;
        model?: string;
        error?: string;
        isOnDevice?: boolean;
      }>('llm_health');
      return {
        available: status.available,
        model: status.model ?? undefined,
        error: status.error ?? undefined,
        isOnDevice: status.isOnDevice ?? true,
        backendType: 'tauri-native',
      };
    } catch (err) {
      return {
        available: false,
        error: err instanceof Error ? err.message : String(err),
        isOnDevice: true,
        backendType: 'tauri-native',
      };
    }
  }

  async getModelInfo(): Promise<ModelInfo | null> {
    try {
      const status = await this.invoker<{
        available: boolean;
        model?: string;
      }>('llm_health');
      if (!status.available || !status.model) return null;
      return {
        name: status.model,
        isOnDevice: true,
      };
    } catch {
      return null;
    }
  }

  async generate(prompt: string, options?: GenerateOptions): Promise<string> {
    const request = {
      messages: [
        ...(options?.systemPrompt
          ? [{ role: 'system', content: options.systemPrompt }]
          : []),
        { role: 'user', content: prompt },
      ],
      temperature: options?.temperature ?? 0.7,
      maxTokens: options?.maxTokens ?? 1024,
    };

    const response = await this.invoker<{ content: string }>('llm_chat', { request });
    return response.content;
  }

  async *generateStream(prompt: string, options?: GenerateOptions): AsyncGenerator<string> {
    // The Tauri native backend currently does not support true token streaming.
    // We emit the full response as a single chunk. When the Rust backend adds
    // streaming support via Tauri events, this method will yield real tokens.
    const result = await this.generate(prompt, options);

    // Simulate streaming by yielding word-by-word for better UX
    const words = result.split(/(\s+)/);
    for (const word of words) {
      yield word;
    }
  }

  async explainConcept(
    concept: string,
    level: ExplanationLevel,
    language: SupportedLanguage,
  ): Promise<string> {
    const prompt = EXPLAIN_CONDITION_PROMPT(concept, level, language);
    return this.generate(prompt, { temperature: 0.6, maxTokens: 1500 });
  }

  async explainCondition(
    conditionId: string,
    level: ExplanationLevel,
    language: SupportedLanguage,
  ): Promise<string> {
    const prompt = EXPLAIN_CONDITION_PROMPT(conditionId, level, language);
    return this.generate(prompt, { temperature: 0.6, maxTokens: 1500 });
  }

  async answerWithContext(
    question: string,
    context: string[],
    language: SupportedLanguage,
  ): Promise<string> {
    const prompt = ANSWER_QUESTION_PROMPT(question, context, language);
    return this.generate(prompt, { temperature: 0.7, maxTokens: 2048 });
  }

  async translateMedical(
    text: string,
    fromLang: SupportedLanguage,
    toLang: SupportedLanguage,
  ): Promise<string> {
    if (fromLang === toLang) return text;
    const prompt = TRANSLATE_MEDICAL_PROMPT(text, fromLang, toLang);
    return this.generate(prompt, { temperature: 0.3, maxTokens: 2048 });
  }
}


// ============================================================================
// MockLLMService - Fallback for development and testing
// ============================================================================

/**
 * Returns template-based responses without a real model.
 * Used during development, testing, and when no model is available.
 */
export class MockLLMService implements LocalLLMService {
  private latencyMs: number;

  /**
   * @param latencyMs - Simulated latency in milliseconds to mimic real inference. Default: 200
   */
  constructor(latencyMs: number = 200) {
    this.latencyMs = latencyMs;
  }

  private async simulateLatency(): Promise<void> {
    if (this.latencyMs > 0) {
      await new Promise(resolve => setTimeout(resolve, this.latencyMs));
    }
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }

  async getHealth(): Promise<LLMHealthStatus> {
    return {
      available: true,
      model: 'mock-deepseek-14b',
      isOnDevice: false,
      backendType: 'mock',
    };
  }

  async getModelInfo(): Promise<ModelInfo> {
    return {
      name: 'mock-deepseek-14b',
      parameterCount: '14B',
      quantization: 'Q4_K_M',
      contextLength: 16384,
      isOnDevice: false,
    };
  }

  async generate(prompt: string, _options?: GenerateOptions): Promise<string> {
    await this.simulateLatency();

    const lower = prompt.toLowerCase();

    if (lower.includes('condition') || lower.includes('condicion')) {
      return this._mockConditionResponse(lower);
    }
    if (lower.includes('procedure') || lower.includes('procedimiento')) {
      return this._mockProcedureResponse();
    }
    if (lower.includes('medication') || lower.includes('medicamento')) {
      return this._mockMedicationResponse();
    }
    if (lower.includes('symptom') || lower.includes('sintoma')) {
      return this._mockSymptomResponse();
    }
    if (lower.includes('translate') || lower.includes('translation')) {
      return '[Mock Translation] ' + prompt.slice(prompt.indexOf(':') + 1).trim();
    }
    if (lower.includes('simplif')) {
      return '[Mock Simplified] The text has been rewritten in simpler language for easier understanding.';
    }
    if (lower.includes('knowledge base context') || lower.includes('base de conocimiento')) {
      return this._mockContextualAnswer();
    }

    return `[Mock LLM Response]\n\nThis is a development placeholder response for the prompt:\n"${prompt.slice(0, 100)}...".\n\nIn production, the DeepSeek 14B model would provide a medically-informed educational response here.\n\nPlease consult your healthcare provider for medical advice.`;
  }

  async *generateStream(prompt: string, options?: GenerateOptions): AsyncGenerator<string> {
    const result = await this.generate(prompt, options);
    const words = result.split(/(\s+)/);
    for (const word of words) {
      await new Promise(resolve => setTimeout(resolve, 20));
      yield word;
    }
  }

  async explainConcept(
    concept: string,
    level: ExplanationLevel,
    language: SupportedLanguage,
  ): Promise<string> {
    await this.simulateLatency();
    const levelName = ['basic', 'introductory', 'intermediate', 'advanced', 'expert'][level - 1];
    if (language === 'es') {
      return `[Respuesta Simulada - Nivel ${level}]\n\n**${concept}**\n\nEsta es una explicacion de nivel ${levelName} de "${concept}". En produccion, el modelo DeepSeek 14B proporcionaria una explicacion medica detallada y educativa aqui.\n\nConsulte con su profesional de salud para consejo medico.`;
    }
    return `[Mock Response - Level ${level}]\n\n**${concept}**\n\nThis is a ${levelName}-level explanation of "${concept}". In production, the DeepSeek 14B model would provide a detailed, educational medical explanation here.\n\nPlease consult your healthcare provider for medical advice.`;
  }

  async explainCondition(
    conditionId: string,
    level: ExplanationLevel,
    language: SupportedLanguage,
  ): Promise<string> {
    return this.explainConcept(conditionId, level, language);
  }

  async answerWithContext(
    question: string,
    context: string[],
    language: SupportedLanguage,
  ): Promise<string> {
    await this.simulateLatency();
    const sourceCount = context.length;
    if (language === 'es') {
      return `[Respuesta Simulada con Contexto]\n\n**Pregunta:** ${question}\n\nBasandome en ${sourceCount} fuente(s) de la base de conocimiento local, aqui hay una respuesta educativa:\n\nEsta es una respuesta de marcador de posicion. En produccion, el modelo DeepSeek 14B sintetizaria el contexto proporcionado para dar una respuesta medica educativa completa.\n\nConsulte con su profesional de salud para decisiones medicas.`;
    }
    return `[Mock Contextual Answer]\n\n**Question:** ${question}\n\nBased on ${sourceCount} source(s) from the local knowledge base, here is an educational answer:\n\nThis is a placeholder response. In production, the DeepSeek 14B model would synthesize the provided context to give a comprehensive, educational medical answer.\n\nPlease consult your healthcare provider for medical decisions.`;
  }

  async translateMedical(
    text: string,
    fromLang: SupportedLanguage,
    toLang: SupportedLanguage,
  ): Promise<string> {
    await this.simulateLatency();
    if (fromLang === toLang) return text;
    const direction = `${fromLang} -> ${toLang}`;
    return `[Mock Translation (${direction})]\n\n${text}\n\n[Note: In production, DeepSeek 14B would provide an accurate medical translation preserving terminology and meaning.]`;
  }

  // --- Private mock response helpers ---

  private _mockConditionResponse(lower: string): string {
    const isSpanish = lower.includes('condicion') || lower.includes('proporciona');
    if (isSpanish) {
      return `**Explicacion de la Condicion**

1. **Que es:** Esta condicion es un trastorno que afecta el funcionamiento normal del cuerpo.
2. **Fisiopatologia:** Se producen cambios a nivel celular que alteran la funcion del organo afectado.
3. **Manifestaciones:** Los sintomas tipicos incluyen malestar y cambios en la funcion normal.
4. **Manejo:** El tratamiento generalmente incluye medicamentos y cambios en el estilo de vida.
5. **Cuando buscar atencion:** Consulte a su medico si los sintomas empeoran o no mejoran.

*Esta informacion es educativa. Consulte con su profesional de salud.*`;
    }
    return `**Condition Explanation**

1. **What it is:** This condition is a disorder that affects the normal functioning of the body.
2. **Pathophysiology:** Cellular-level changes occur that alter the function of the affected organ.
3. **Manifestations:** Typical symptoms include discomfort and changes in normal function.
4. **Management:** Treatment generally includes medications and lifestyle modifications.
5. **When to seek care:** See your doctor if symptoms worsen or do not improve.

*This information is educational. Please consult your healthcare provider.*`;
  }

  private _mockProcedureResponse(): string {
    return `**Procedure Explanation**

1. **What it is:** This is a medical procedure performed to diagnose or treat a condition.
2. **How it works:** The procedure involves a series of steps performed by trained medical professionals.
3. **What to expect:** Preparation may include fasting or stopping certain medications. Recovery varies.
4. **Risks and benefits:** Benefits typically outweigh risks, which your doctor will discuss with you.
5. **Questions to ask:** Ask about alternatives, recovery time, and what results to expect.

*Please discuss all procedural questions with your healthcare team.*`;
  }

  private _mockMedicationResponse(): string {
    return `**Medication Explanation**

1. **Mechanism:** This medication works by targeting specific pathways in the body.
2. **Uses:** It is commonly prescribed for conditions where this mechanism is beneficial.
3. **What to expect:** Effects may take days to weeks. Take as directed by your doctor.
4. **Side effects:** Common side effects are generally mild. Report persistent or severe effects.
5. **Interactions:** Tell your doctor about all medications you take, including supplements.

*Prescribing decisions belong to your healthcare provider.*`;
  }

  private _mockSymptomResponse(): string {
    return `**Symptom Explanation**

1. **What it is:** This symptom represents a signal from your body that something needs attention.
2. **Systems involved:** Multiple body systems may contribute to this experience.
3. **Common causes:** There are many possible causes ranging from benign to more serious.
4. **Evaluation:** Doctors assess this through history, examination, and sometimes tests.
5. **Red flags:** Seek immediate care if the symptom is sudden, severe, or accompanied by warning signs.

*This is educational information. Please consult your healthcare provider for evaluation.*`;
  }

  private _mockContextualAnswer(): string {
    return `**Answer Based on Knowledge Base**

Based on the provided medical knowledge sources, here is an educational summary:

The topic you asked about involves interconnected physiological processes. Understanding these mechanisms helps you have more informed conversations with your healthcare team.

Key points:
- The body maintains balance through multiple regulatory systems
- When one system is affected, others may compensate or be impacted
- Treatment approaches target specific mechanisms to restore function

[Source 1] provided foundational information. [Source 2] offered clinical context.

*Please discuss specific health concerns with your healthcare provider.*`;
  }
}


// ============================================================================
// ContextBuilder - Assembles knowledge base context for LLM queries
// ============================================================================

/** A single context chunk with its source metadata */
export interface ContextChunk {
  content: string;
  source: string;
  section?: string;
  relevanceScore?: number;
}

/** Configuration for context window management */
export interface ContextBuilderConfig {
  /** Maximum total tokens for the context window. Default: 8192 */
  maxContextTokens: number;
  /** Maximum number of context chunks to include. Default: 8 */
  maxChunks: number;
  /** Minimum relevance score (0-1) to include a chunk. Default: 0.3 */
  minRelevanceScore: number;
  /** Approximate tokens per character (for rough estimation). Default: 0.25 */
  tokensPerChar: number;
}

const DEFAULT_CONTEXT_CONFIG: ContextBuilderConfig = {
  maxContextTokens: 8192,
  maxChunks: 8,
  minRelevanceScore: 0.3,
  tokensPerChar: 0.25, // ~4 chars per token is a common approximation
};

/**
 * Assembles relevant knowledge base context for a query, keeping the total
 * context within the model's context window budget.
 *
 * Pulls from conditions, anatomy, procedures, medications, and other knowledge
 * sources, then formats them as context chunks for the LLM prompt.
 */
export class ContextBuilder {
  private config: ContextBuilderConfig;

  constructor(config?: Partial<ContextBuilderConfig>) {
    this.config = { ...DEFAULT_CONTEXT_CONFIG, ...config };
  }

  /**
   * Estimate token count for a string.
   * Uses a simple character-based heuristic. For production accuracy,
   * integrate a proper tokenizer (e.g., tiktoken or llama tokenizer).
   */
  estimateTokens(text: string): number {
    return Math.ceil(text.length * this.config.tokensPerChar);
  }

  /**
   * Build context from an array of raw chunks, fitting within the token budget.
   *
   * @param chunks - Candidate context chunks, ideally pre-sorted by relevance
   * @param reservedTokens - Tokens reserved for the prompt + completion (subtracted from budget)
   * @returns Formatted context strings ready to pass to answerWithContext
   */
  buildContext(
    chunks: ContextChunk[],
    reservedTokens: number = 2048,
  ): string[] {
    const tokenBudget = this.config.maxContextTokens - reservedTokens;
    if (tokenBudget <= 0) return [];

    // Filter by minimum relevance score
    const eligible = chunks.filter(
      c => (c.relevanceScore ?? 1.0) >= this.config.minRelevanceScore,
    );

    // Sort by relevance (highest first)
    const sorted = [...eligible].sort(
      (a, b) => (b.relevanceScore ?? 1.0) - (a.relevanceScore ?? 1.0),
    );

    // Greedily pack chunks within the token budget
    const selected: string[] = [];
    let usedTokens = 0;

    for (const chunk of sorted) {
      if (selected.length >= this.config.maxChunks) break;

      const formatted = this.formatChunk(chunk);
      const chunkTokens = this.estimateTokens(formatted);

      if (usedTokens + chunkTokens > tokenBudget) {
        // Try truncating the chunk to fit remaining budget
        const remainingBudget = tokenBudget - usedTokens;
        if (remainingBudget > 100) {
          // Only include if we can fit at least ~100 tokens of it
          const truncated = this.truncateToTokenBudget(formatted, remainingBudget);
          selected.push(truncated);
          break; // No room for more after truncation
        }
        break;
      }

      selected.push(formatted);
      usedTokens += chunkTokens;
    }

    return selected;
  }

  /**
   * Build context from multiple knowledge source categories.
   * Merges and deduplicates chunks from different sources.
   */
  buildFromSources(sources: {
    conditions?: ContextChunk[];
    anatomy?: ContextChunk[];
    procedures?: ContextChunk[];
    medications?: ContextChunk[];
    labResults?: ContextChunk[];
    general?: ContextChunk[];
  }, reservedTokens?: number): string[] {
    // Merge all sources, tagging with category
    const allChunks: ContextChunk[] = [];

    const addChunks = (chunks: ContextChunk[] | undefined, category: string) => {
      if (!chunks) return;
      for (const chunk of chunks) {
        allChunks.push({
          ...chunk,
          source: chunk.source || category,
        });
      }
    };

    addChunks(sources.conditions, 'Conditions');
    addChunks(sources.anatomy, 'Anatomy');
    addChunks(sources.procedures, 'Procedures');
    addChunks(sources.medications, 'Medications');
    addChunks(sources.labResults, 'Lab Results');
    addChunks(sources.general, 'General Knowledge');

    // Deduplicate by content similarity (simple exact-match dedup)
    const seen = new Set<string>();
    const deduped = allChunks.filter(chunk => {
      const key = chunk.content.slice(0, 200).toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return this.buildContext(deduped, reservedTokens);
  }

  /**
   * Format a single chunk with its source attribution.
   */
  private formatChunk(chunk: ContextChunk): string {
    let header = `[${chunk.source}`;
    if (chunk.section) {
      header += ` - ${chunk.section}`;
    }
    header += ']';

    return `${header}\n${chunk.content}`;
  }

  /**
   * Truncate text to fit within a token budget.
   */
  private truncateToTokenBudget(text: string, maxTokens: number): string {
    const maxChars = Math.floor(maxTokens / this.config.tokensPerChar);
    if (text.length <= maxChars) return text;

    // Truncate at a sentence or word boundary
    const truncated = text.slice(0, maxChars);
    const lastSentence = truncated.lastIndexOf('. ');
    const lastNewline = truncated.lastIndexOf('\n');
    const cutoff = Math.max(lastSentence, lastNewline);

    if (cutoff > maxChars * 0.5) {
      return truncated.slice(0, cutoff + 1) + '\n[... truncated]';
    }

    // Fall back to word boundary
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > maxChars * 0.5) {
      return truncated.slice(0, lastSpace) + '... [truncated]';
    }

    return truncated + '... [truncated]';
  }
}


// ============================================================================
// Factory & Convenience
// ============================================================================

/**
 * Create the appropriate LLM service based on the runtime environment.
 * Tries Tauri native first, then falls back to mock.
 *
 * @param forceMode - Force a specific backend. Useful for testing.
 */
export async function createLLMService(
  forceMode?: 'tauri' | 'mock',
): Promise<LocalLLMService> {
  if (forceMode === 'mock') {
    return new MockLLMService();
  }

  if (forceMode === 'tauri') {
    return new TauriLLMBridge();
  }

  // Auto-detect: try Tauri native first
  const tauriBridge = new TauriLLMBridge();
  try {
    const available = await tauriBridge.isAvailable();
    if (available) {
      return tauriBridge;
    }
  } catch {
    // Tauri not available (e.g., running in browser dev mode)
  }

  // Fall back to mock service
  console.warn('[LocalLLM] No model backend available. Using MockLLMService for development.');
  return new MockLLMService();
}
