/**
 * patient-education-templates.ts
 *
 * Templates for generating patient education materials across all 5 explanation
 * levels and in both English (EN) and Spanish (ES).
 *
 * Nine standard question categories cover the full patient-education arc:
 *   1. What is [condition]?
 *   2. What causes [condition]?
 *   3. What are the symptoms?
 *   4. How is it diagnosed?
 *   5. How is it treated?
 *   6. What can I do at home?
 *   7. When should I see a doctor?
 *   8. How can I prevent it?
 *   9. What questions should I ask my doctor?
 *
 * Each template includes an LLM prompt for both EN and ES at every level,
 * so a downstream generation pipeline can produce fully localized materials.
 */

import type { ExplanationLevelNumber } from './explanation-levels';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Language = 'en' | 'es';

export type EducationCategory =
  | 'what_is'
  | 'causes'
  | 'symptoms'
  | 'diagnosis'
  | 'treatment'
  | 'home_care'
  | 'when_to_see_doctor'
  | 'prevention'
  | 'questions_for_doctor';

export interface EducationCategoryMeta {
  key: EducationCategory;
  /** English display title */
  titleEN: string;
  /** Spanish display title */
  titleES: string;
  /** Sort order for consistent UI presentation */
  order: number;
}

export const EDUCATION_CATEGORIES: EducationCategoryMeta[] = [
  { key: 'what_is',              titleEN: 'What is [condition]?',                  titleES: '¿Qué es [condición]?',                    order: 1 },
  { key: 'causes',               titleEN: 'What causes [condition]?',              titleES: '¿Qué causa [condición]?',                  order: 2 },
  { key: 'symptoms',             titleEN: 'What are the symptoms?',                titleES: '¿Cuáles son los síntomas?',                order: 3 },
  { key: 'diagnosis',            titleEN: 'How is it diagnosed?',                  titleES: '¿Cómo se diagnostica?',                    order: 4 },
  { key: 'treatment',            titleEN: 'How is it treated?',                    titleES: '¿Cómo se trata?',                          order: 5 },
  { key: 'home_care',            titleEN: 'What can I do at home?',                titleES: '¿Qué puedo hacer en casa?',                order: 6 },
  { key: 'when_to_see_doctor',   titleEN: 'When should I see a doctor?',           titleES: '¿Cuándo debo ver al médico?',              order: 7 },
  { key: 'prevention',           titleEN: 'How can I prevent it?',                 titleES: '¿Cómo puedo prevenirlo?',                  order: 8 },
  { key: 'questions_for_doctor', titleEN: 'What questions should I ask my doctor?', titleES: '¿Qué preguntas debo hacerle a mi médico?', order: 9 },
];

// ---------------------------------------------------------------------------
// Template structure
// ---------------------------------------------------------------------------

export interface EducationTemplate {
  /** Which question this template answers */
  category: EducationCategory;
  /** Explanation level (1-5) */
  level: ExplanationLevelNumber;
  /** Language */
  language: Language;
  /** System prompt for the LLM */
  systemPrompt: string;
  /** User prompt template — {condition} is replaced at runtime */
  userPromptTemplate: string;
  /** Maximum word count guidance */
  maxWords: number;
}

// ---------------------------------------------------------------------------
// Level-specific system prompt fragments
// ---------------------------------------------------------------------------

const LEVEL_SYSTEM_FRAGMENTS: Record<ExplanationLevelNumber, Record<Language, string>> = {
  1: {
    en: `You are a friendly doctor talking to a child between ages 5 and 12.
Rules:
- Use only simple, everyday words (1-2 syllables preferred).
- Use fun comparisons to things kids know: toys, food, animals, games, family.
- NEVER use medical jargon.
- Keep every sentence under 12 words.
- Be warm, reassuring, and never scary.
- Use active voice and present tense.
- Target Flesch-Kincaid grade level 3-4.`,
    es: `Eres un doctor amigable hablando con un niño entre 5 y 12 años.
Reglas:
- Usa solo palabras sencillas y cotidianas (preferiblemente de 1-2 sílabas).
- Usa comparaciones divertidas con cosas que los niños conocen: juguetes, comida, animales, juegos, familia.
- NUNCA uses jerga médica.
- Mantén cada oración con menos de 12 palabras.
- Sé cálido, tranquilizador y nunca aterrador.
- Usa voz activa y tiempo presente.
- Nivel de lectura apropiado para niños de 5 a 12 años.`,
  },
  2: {
    en: `You are a caring doctor speaking to an adult patient with no medical background.
Rules:
- Use plain language at a 6th-8th grade reading level.
- Define medical terms in parentheses on first use.
- Focus on practical "what does this mean for me?" framing.
- Use short paragraphs and bullet points.
- Be empathetic, supportive, and empowering — not condescending.
- Avoid raw statistics — give context.`,
    es: `Eres un doctor comprensivo hablando con un paciente adulto sin conocimientos médicos.
Reglas:
- Usa lenguaje sencillo a nivel de lectura de 6to a 8vo grado.
- Define los términos médicos entre paréntesis la primera vez que los uses.
- Enfócate en lo práctico: "¿qué significa esto para mí?"
- Usa párrafos cortos y viñetas.
- Sé empático, comprensivo y motivador — no condescendiente.
- Evita estadísticas crudas — da contexto.`,
  },
  3: {
    en: `You are a clinical educator writing for nurses and allied health professionals.
Rules:
- Use standard clinical terminology without defining common terms.
- Include relevant pathophysiology for clinical reasoning.
- Reference current treatment protocols and care standards.
- Note key vital-sign thresholds, lab values, and red flags.
- Be evidence-based and practice-oriented.`,
    es: `Eres un educador clínico escribiendo para enfermeras y profesionales de salud.
Reglas:
- Usa terminología clínica estándar sin definir términos comunes.
- Incluye fisiopatología relevante para el razonamiento clínico.
- Referencia protocolos de tratamiento y estándares de atención actuales.
- Señala umbrales de signos vitales, valores de laboratorio y señales de alarma.
- Sé basado en evidencia y orientado a la práctica.`,
  },
  4: {
    en: `You are a medical school professor preparing a comprehensive review.
Rules:
- Provide full pathophysiology with molecular and cellular detail.
- Include differential diagnosis reasoning.
- Cover pharmacology: MOA, pharmacokinetics, drug interactions.
- Cite landmark trials and guidelines by name.
- Include epidemiology and risk-factor data.
- Highlight board-relevant clinical pearls.`,
    es: `Eres un profesor de medicina preparando una revisión exhaustiva.
Reglas:
- Proporciona fisiopatología completa con detalle molecular y celular.
- Incluye razonamiento de diagnóstico diferencial.
- Cubre farmacología: mecanismo de acción, farmacocinética, interacciones.
- Cita ensayos y guías clínicas importantes por nombre.
- Incluye epidemiología y datos de factores de riesgo.
- Destaca puntos clínicos relevantes para exámenes de certificación.`,
  },
  5: {
    en: `You are a subspecialist writing for attending physicians.
Rules:
- Assume expert clinical knowledge.
- Reference the latest society guidelines with publication year.
- Discuss nuances, controversies, and evolving evidence.
- Include recent RCTs, meta-analyses, and ongoing clinical trials.
- Address comparative effectiveness and cost-effectiveness.
- Integrate precision medicine and pharmacogenomics when applicable.`,
    es: `Eres un subespecialista escribiendo para médicos tratantes.
Reglas:
- Asume conocimiento clínico experto.
- Referencia las guías más recientes de sociedades médicas con año de publicación.
- Discute matices, controversias y evidencia en evolución.
- Incluye ensayos clínicos aleatorizados recientes, metaanálisis y ensayos en curso.
- Aborda efectividad comparativa y costo-efectividad.
- Integra medicina de precisión y farmacogenómica cuando sea aplicable.`,
  },
};

// ---------------------------------------------------------------------------
// Word count targets by level
// ---------------------------------------------------------------------------

const MAX_WORDS_BY_LEVEL: Record<ExplanationLevelNumber, number> = {
  1: 100,
  2: 200,
  3: 300,
  4: 500,
  5: 600,
};

// ---------------------------------------------------------------------------
// Category-specific user prompt fragments
// ---------------------------------------------------------------------------

interface CategoryPromptFragments {
  en: string;
  es: string;
}

const CATEGORY_PROMPTS: Record<EducationCategory, CategoryPromptFragments> = {
  what_is: {
    en: `Explain what {condition} is. Describe it clearly for the target audience. Include a brief overview of how it affects the body.`,
    es: `Explica qué es {condition}. Descríbelo claramente para la audiencia objetivo. Incluye una breve descripción de cómo afecta al cuerpo.`,
  },
  causes: {
    en: `Explain what causes {condition}. Cover the main risk factors and underlying reasons why it develops. Be specific and accurate for the target audience.`,
    es: `Explica qué causa {condition}. Cubre los principales factores de riesgo y las razones subyacentes por las que se desarrolla. Sé específico y preciso para la audiencia objetivo.`,
  },
  symptoms: {
    en: `Describe the symptoms of {condition}. List the most common signs and symptoms a person might experience. Note which symptoms appear early vs. later, and which are most important to watch for.`,
    es: `Describe los síntomas de {condition}. Enumera los signos y síntomas más comunes que una persona podría experimentar. Indica cuáles aparecen temprano vs. tarde, y cuáles son los más importantes a observar.`,
  },
  diagnosis: {
    en: `Explain how {condition} is diagnosed. Describe the tests, exams, or procedures used, and what the patient can expect during the diagnostic process.`,
    es: `Explica cómo se diagnostica {condition}. Describe las pruebas, exámenes o procedimientos utilizados, y qué puede esperar el paciente durante el proceso de diagnóstico.`,
  },
  treatment: {
    en: `Explain how {condition} is treated. Cover the main treatment options including medications, procedures, therapies, and lifestyle changes. Describe what to expect from treatment.`,
    es: `Explica cómo se trata {condition}. Cubre las principales opciones de tratamiento incluyendo medicamentos, procedimientos, terapias y cambios en el estilo de vida. Describe qué esperar del tratamiento.`,
  },
  home_care: {
    en: `Explain what someone with {condition} can do at home to manage their condition. Include practical self-care tips, lifestyle modifications, and daily habits that help.`,
    es: `Explica qué puede hacer en casa alguien con {condition} para manejar su condición. Incluye consejos prácticos de autocuidado, modificaciones del estilo de vida y hábitos diarios que ayudan.`,
  },
  when_to_see_doctor: {
    en: `Explain when someone with {condition} should see a doctor or go to the emergency room. List the warning signs and red flags that require immediate medical attention vs. those that can wait for a regular appointment.`,
    es: `Explica cuándo alguien con {condition} debe ver al médico o ir a la sala de emergencias. Enumera las señales de advertencia y señales de alarma que requieren atención médica inmediata vs. las que pueden esperar a una cita regular.`,
  },
  prevention: {
    en: `Explain how to prevent {condition} or reduce the risk of developing it. Cover lifestyle changes, screenings, vaccinations, and other preventive measures as appropriate.`,
    es: `Explica cómo prevenir {condition} o reducir el riesgo de desarrollarlo. Cubre cambios en el estilo de vida, exámenes de detección, vacunas y otras medidas preventivas según corresponda.`,
  },
  questions_for_doctor: {
    en: `Provide a list of important questions a person should ask their doctor about {condition}. Include questions about diagnosis, treatment options, prognosis, lifestyle, follow-up care, and anything else that would help them be an informed participant in their care.`,
    es: `Proporciona una lista de preguntas importantes que una persona debe hacerle a su médico sobre {condition}. Incluye preguntas sobre diagnóstico, opciones de tratamiento, pronóstico, estilo de vida, seguimiento y cualquier otra cosa que les ayude a ser un participante informado en su atención.`,
  },
};

// ---------------------------------------------------------------------------
// Template generation
// ---------------------------------------------------------------------------

/**
 * Build a single EducationTemplate for a given category, level, and language.
 */
export function buildEducationTemplate(
  category: EducationCategory,
  level: ExplanationLevelNumber,
  language: Language,
): EducationTemplate {
  return {
    category,
    level,
    language,
    systemPrompt: LEVEL_SYSTEM_FRAGMENTS[level][language],
    userPromptTemplate: CATEGORY_PROMPTS[category][language],
    maxWords: MAX_WORDS_BY_LEVEL[level],
  };
}

/**
 * Build all templates for every (category x level x language) combination.
 * Returns a flat array of 9 categories x 5 levels x 2 languages = 90 templates.
 */
export function buildAllEducationTemplates(): EducationTemplate[] {
  const templates: EducationTemplate[] = [];
  const languages: Language[] = ['en', 'es'];
  const levels: ExplanationLevelNumber[] = [1, 2, 3, 4, 5];

  for (const cat of EDUCATION_CATEGORIES) {
    for (const level of levels) {
      for (const lang of languages) {
        templates.push(buildEducationTemplate(cat.key, level, lang));
      }
    }
  }

  return templates;
}

// ---------------------------------------------------------------------------
// Runtime prompt generation
// ---------------------------------------------------------------------------

export interface GeneratedPrompt {
  category: EducationCategory;
  level: ExplanationLevelNumber;
  language: Language;
  systemPrompt: string;
  userPrompt: string;
  maxWords: number;
}

/**
 * Generate a ready-to-use prompt pair for a specific condition, category,
 * level, and language. Interpolates {condition} into the user prompt.
 */
export function generateEducationPrompt(
  condition: string,
  category: EducationCategory,
  level: ExplanationLevelNumber,
  language: Language,
): GeneratedPrompt {
  const template = buildEducationTemplate(category, level, language);
  const wordCountInstruction =
    language === 'en'
      ? `\n\nKeep your response under ${template.maxWords} words.`
      : `\n\nMantén tu respuesta en menos de ${template.maxWords} palabras.`;

  return {
    category,
    level,
    language,
    systemPrompt: template.systemPrompt,
    userPrompt: template.userPromptTemplate.replace(/\{condition\}/g, condition) + wordCountInstruction,
    maxWords: template.maxWords,
  };
}

/**
 * Generate all 9 category prompts for a given condition at a specific level
 * and language. Useful for producing a complete education packet.
 */
export function generateFullEducationPacket(
  condition: string,
  level: ExplanationLevelNumber,
  language: Language,
): GeneratedPrompt[] {
  return EDUCATION_CATEGORIES.map((cat) =>
    generateEducationPrompt(condition, cat.key, level, language),
  );
}

/**
 * Generate the complete matrix: all 9 categories x 5 levels x 2 languages
 * for a single condition. Returns 90 prompts.
 */
export function generateCompleteEducationMatrix(
  condition: string,
): GeneratedPrompt[] {
  const prompts: GeneratedPrompt[] = [];
  const languages: Language[] = ['en', 'es'];
  const levels: ExplanationLevelNumber[] = [1, 2, 3, 4, 5];

  for (const cat of EDUCATION_CATEGORIES) {
    for (const level of levels) {
      for (const lang of languages) {
        prompts.push(generateEducationPrompt(condition, cat.key, level, lang));
      }
    }
  }

  return prompts;
}

// ---------------------------------------------------------------------------
// Pre-built example prompts for the 10 reference conditions
// ---------------------------------------------------------------------------

export const REFERENCE_CONDITIONS = [
  { key: 'diabetes',        nameEN: 'Type 2 Diabetes',                nameES: 'Diabetes Tipo 2' },
  { key: 'hypertension',    nameEN: 'High Blood Pressure',            nameES: 'Presión Arterial Alta' },
  { key: 'asthma',          nameEN: 'Asthma',                         nameES: 'Asma' },
  { key: 'depression',      nameEN: 'Depression',                     nameES: 'Depresión' },
  { key: 'fracture',        nameEN: 'Bone Fracture',                  nameES: 'Fractura Ósea' },
  { key: 'uti',             nameEN: 'Urinary Tract Infection (UTI)',   nameES: 'Infección del Tracto Urinario (ITU)' },
  { key: 'pneumonia',       nameEN: 'Pneumonia',                      nameES: 'Neumonía' },
  { key: 'gerd',            nameEN: 'Acid Reflux (GERD)',             nameES: 'Reflujo Ácido (ERGE)' },
  { key: 'anxiety',         nameEN: 'Anxiety',                        nameES: 'Ansiedad' },
  { key: 'osteoarthritis',  nameEN: 'Osteoarthritis',                 nameES: 'Osteoartritis' },
] as const;

/**
 * Convenience: generate all prompts for all 10 reference conditions.
 * Returns a map keyed by condition key, each containing 90 prompts.
 */
export function generateAllReferenceConditionPrompts(): Record<string, GeneratedPrompt[]> {
  const result: Record<string, GeneratedPrompt[]> = {};

  for (const cond of REFERENCE_CONDITIONS) {
    // Use English name for EN prompts and Spanish name for ES prompts
    const prompts: GeneratedPrompt[] = [];
    const levels: ExplanationLevelNumber[] = [1, 2, 3, 4, 5];

    for (const cat of EDUCATION_CATEGORIES) {
      for (const level of levels) {
        prompts.push(generateEducationPrompt(cond.nameEN, cat.key, level, 'en'));
        prompts.push(generateEducationPrompt(cond.nameES, cat.key, level, 'es'));
      }
    }

    result[cond.key] = prompts;
  }

  return result;
}

// ---------------------------------------------------------------------------
// Bilingual section builder — produces a structured outline for bilingual
// patient-education documents
// ---------------------------------------------------------------------------

export interface BilingualSection {
  order: number;
  category: EducationCategory;
  titleEN: string;
  titleES: string;
  promptEN: GeneratedPrompt;
  promptES: GeneratedPrompt;
}

/**
 * Build a bilingual education document outline for a given condition and level.
 * Returns 9 sections, each with EN and ES prompts ready for generation.
 */
export function buildBilingualEducationDocument(
  conditionEN: string,
  conditionES: string,
  level: ExplanationLevelNumber,
): BilingualSection[] {
  return EDUCATION_CATEGORIES.map((cat) => ({
    order: cat.order,
    category: cat.key,
    titleEN: cat.titleEN.replace('[condition]', conditionEN),
    titleES: cat.titleES.replace('[condición]', conditionES),
    promptEN: generateEducationPrompt(conditionEN, cat.key, level, 'en'),
    promptES: generateEducationPrompt(conditionES, cat.key, level, 'es'),
  }));
}
