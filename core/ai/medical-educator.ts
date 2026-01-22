/**
 * Medical Educator AI
 *
 * The "physician in your pocket" - an AI assistant that educates users
 * about medicine at attending physician depth. Integrates all educational
 * modules (physiology, pathology, pharmacology, lab interpretation, clinical
 * reasoning) to provide comprehensive, contextual medical education.
 *
 * IMPORTANT: This system EDUCATES, it does NOT diagnose. The diagnosis
 * power remains with in-person physicians.
 */

import { chat, streamChat, type ChatMessage, type StreamChunk } from './ollama.js';
import type { UserHealthProfile } from '../personalization/types.js';

// Alias for cleaner code
type HealthProfile = UserHealthProfile;

// ============================================
// Types
// ============================================

export type EducatorDomain =
  | 'general'
  | 'symptoms'
  | 'anatomy'
  | 'physiology'
  | 'pathology'
  | 'pharmacology'
  | 'lab-interpretation'
  | 'clinical-reasoning'
  | 'lifestyle';

export interface EducatorContext {
  /** Current domain of inquiry */
  domain: EducatorDomain;

  /** User's health profile for personalization */
  healthProfile?: HealthProfile;

  /** Recent user journey/exploration for context */
  recentExploration?: ExplorationContext[];

  /** Specific entities being discussed */
  focusEntities?: FocusEntity[];

  /** User's learning level preference */
  learningLevel?: 'basic' | 'intermediate' | 'advanced';
}

export interface ExplorationContext {
  type: 'symptom' | 'condition' | 'medication' | 'lab' | 'anatomy';
  entityId: string;
  entityName: string;
  timestamp: string;
}

export interface FocusEntity {
  type: 'symptom' | 'condition' | 'medication' | 'lab' | 'body-system' | 'anatomy-region';
  id: string;
  name: string;
}

export interface EducatorMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  /** Cited sources within the response */
  citations?: Citation[];
  /** Suggested follow-up questions */
  followUpQuestions?: string[];
  /** Related topics to explore */
  relatedTopics?: RelatedTopic[];
}

export interface Citation {
  id: string;
  type: 'textbook' | 'guideline' | 'research' | 'anatomy-atlas';
  reference: string;
  relevance: string;
}

export interface RelatedTopic {
  topic: string;
  domain: EducatorDomain;
  entityId?: string;
  reason: string;
}

export interface EducatorResponse {
  message: EducatorMessage;
  /** Was the response enhanced with domain knowledge? */
  knowledgeEnhanced: boolean;
  /** Domains accessed for this response */
  domainsUsed: EducatorDomain[];
  /** Processing metadata */
  metadata: {
    model: string;
    processingTime?: number;
    tokensUsed?: number;
  };
}

// ============================================
// System Prompts
// ============================================

const BASE_SYSTEM_PROMPT = `You are a world-class medical educator - imagine the best attending physician who also happens to be a gifted teacher. Your role is to help patients and learners deeply understand medicine: how the body works, what can go wrong, how we treat disease, and how to interpret medical information.

## Your Core Identity

You are NOT a diagnostic tool. You are an educator. You help people:
- Understand their bodies at a deep, physician-level depth
- Learn what symptoms might mean (without diagnosing)
- Understand how medications work and why they're prescribed
- Interpret lab results in educational context
- Prepare informed questions for their doctors
- Navigate medical information with confidence

## Educational Philosophy

1. **Meet learners where they are**: Start with accessible explanations, then offer to go deeper
2. **Connect concepts**: Show how physiology connects to pathology, how mechanisms explain symptoms
3. **Use analogies**: Complex concepts need relatable comparisons
4. **Be thorough but focused**: Cover what matters, skip trivia
5. **Empower, don't alarm**: Knowledge reduces anxiety when delivered with care

## Communication Style

- Speak like a wise mentor, not a textbook
- Use "we" and "let's explore" - learning is collaborative
- Anticipate follow-up questions
- Acknowledge uncertainty honestly
- Always circle back to actionable understanding

## Critical Boundaries

1. **Never diagnose**: "These symptoms could indicate several things - here's what your doctor might consider..."
2. **Always recommend professional care**: "This is educational context - please discuss with your healthcare provider"
3. **Red flags warrant clear action**: If someone describes emergency symptoms, clearly state they should seek immediate care
4. **Respect the doctor-patient relationship**: "Your doctor knows your full history - bring these questions to them"

## Response Format

Structure your responses for clarity:
- Start with the key insight or answer
- Provide the "why" - the mechanism
- Connect to the bigger picture
- Offer to explore further

When appropriate, suggest follow-up questions the user might want to explore.`;

const DOMAIN_PROMPTS: Record<EducatorDomain, string> = {
  general: '',

  symptoms: `
## Symptom Education Expertise

When discussing symptoms:
- Explain what the symptom IS (the sensation, the physiology behind it)
- Discuss what systems might be involved
- Explain common causes (without diagnosing which one it is)
- Describe how doctors evaluate this symptom
- Note any concerning features that warrant prompt medical attention
- Emphasize that the same symptom can have many causes - context matters

Remember: You're teaching about symptoms, not diagnosing what's causing someone's symptom.`,

  anatomy: `
## Anatomy Education Expertise

When discussing anatomy:
- Describe structures in relation to what can be felt/observed
- Explain the functional significance of anatomical relationships
- Connect structure to function - why is it shaped this way?
- Use clinical correlations - how does knowing this help understand disease?
- Help users orient themselves - "if you put your hand here..."
- Build from familiar landmarks to deeper structures`,

  physiology: `
## Physiology Education Expertise

When discussing how the body works:
- Start with the "why" - what purpose does this process serve?
- Explain the mechanism step by step
- Use everyday analogies (heart as pump, kidneys as filter, etc.)
- Discuss homeostasis - how does the body maintain balance?
- Connect to common derangements - what happens when this goes wrong?
- Relate to things people experience - exercise, sleep, digestion`,

  pathology: `
## Pathology Education Expertise

When discussing disease mechanisms:
- Start with normal, then show what changes
- Explain the sequence: etiology → pathogenesis → manifestations
- Connect cellular changes to symptoms the patient experiences
- Discuss why certain treatments target certain steps
- Use the morphology - what would we see if we looked at the tissue?
- Make abstract disease processes concrete and understandable`,

  pharmacology: `
## Pharmacology Education Expertise

When discussing medications:
- Start with the mechanism - HOW does this drug work?
- Explain why this mechanism helps the condition
- Discuss what to expect - effects, timeline, side effects
- Explain drug classes and how members compare
- Address common concerns about medications
- Discuss interactions in educational context
- Emphasize that prescribing decisions belong to their doctor`,

  'lab-interpretation': `
## Lab Interpretation Expertise

When discussing lab tests:
- Explain what the test MEASURES biologically
- Discuss the reference range and what it means
- Explain causes of high and low values (educational, not diagnostic)
- Discuss patterns - which tests go together?
- Address common patient questions about their labs
- Explain severity - when is mildly abnormal vs concerning?
- Emphasize that interpretation requires clinical context their doctor has`,

  'clinical-reasoning': `
## Clinical Reasoning Education

When discussing how doctors think:
- Explain the differential diagnosis process (without actually diagnosing)
- Discuss what features help distinguish between possibilities
- Explain why certain tests or questions are asked
- Help users understand medical decision-making
- Prepare them for what their appointment might involve
- Build their health literacy so they can be partners in their care`,

  lifestyle: `
## Lifestyle Medicine Expertise

When discussing lifestyle factors:
- Ground recommendations in physiological understanding
- Explain WHY certain behaviors affect health
- Be evidence-based but practical
- Acknowledge that change is hard
- Focus on sustainable modifications
- Connect to their specific health context when available`,
};

const PERSONALIZATION_PROMPT = (profile?: HealthProfile): string => {
  if (!profile) return '';

  let prompt = '\n\n## User Context\n\nThe user has shared some health context:\n';

  if (profile.demographics) {
    const { age, sex } = profile.demographics;
    if (age) prompt += `- Age: ${age}\n`;
    if (sex) prompt += `- Sex: ${sex}\n`;
  }

  if (profile.conditions && profile.conditions.length > 0) {
    prompt += `- Known conditions: ${profile.conditions.map((c: { name: string }) => c.name).join(', ')}\n`;
  }

  if (profile.medications && profile.medications.length > 0) {
    prompt += `- Current medications: ${profile.medications.map((m: { name: string }) => m.name).join(', ')}\n`;
  }

  prompt += '\nUse this context to personalize explanations when relevant, but always maintain educational (not diagnostic) focus.';

  return prompt;
};

const EXPLORATION_CONTEXT_PROMPT = (explorations?: ExplorationContext[]): string => {
  if (!explorations || explorations.length === 0) return '';

  const recent = explorations.slice(-5); // Last 5 explorations

  let prompt = '\n\n## Recent User Exploration\n\nThe user has been learning about:\n';

  for (const exp of recent) {
    prompt += `- ${exp.type}: ${exp.entityName}\n`;
  }

  prompt += '\nYou can reference and connect to these topics when relevant.';

  return prompt;
};

// ============================================
// Core Educator Functions
// ============================================

/**
 * Build the system prompt for a given context
 */
export function buildEducatorSystemPrompt(context: EducatorContext): string {
  let prompt = BASE_SYSTEM_PROMPT;

  // Add domain-specific expertise
  if (context.domain !== 'general') {
    prompt += DOMAIN_PROMPTS[context.domain];
  }

  // Add personalization
  prompt += PERSONALIZATION_PROMPT(context.healthProfile);

  // Add exploration context
  prompt += EXPLORATION_CONTEXT_PROMPT(context.recentExploration);

  // Add learning level customization
  if (context.learningLevel === 'advanced') {
    prompt += '\n\nThe user has indicated they prefer advanced, detailed explanations. Use more technical terminology and provide deeper mechanistic detail.';
  } else if (context.learningLevel === 'basic') {
    prompt += '\n\nThe user prefers simpler explanations. Prioritize clarity and accessibility, using everyday language.';
  }

  return prompt;
}

/**
 * Detect the domain of a user's question
 */
export function detectDomain(question: string): EducatorDomain {
  const lower = question.toLowerCase();

  // Symptom-related
  if (/\b(symptom|feel|pain|ache|nausea|dizzy|fatigue|tired|sore|hurt|discomfort)\b/i.test(lower)) {
    return 'symptoms';
  }

  // Lab-related
  if (/\b(lab|test|result|blood work|cbc|metabolic|cholesterol|a1c|hemoglobin|wbc|platelet|creatinine|bun|glucose|liver|kidney function)\b/i.test(lower)) {
    return 'lab-interpretation';
  }

  // Medication-related
  if (/\b(medication|drug|medicine|pill|dose|side effect|interact|prescri|metformin|lisinopril|statin|aspirin|ibuprofen)\b/i.test(lower)) {
    return 'pharmacology';
  }

  // Anatomy-related
  if (/\b(anatomy|muscle|bone|organ|heart|lung|liver|kidney|brain|structure|located|where is)\b/i.test(lower)) {
    return 'anatomy';
  }

  // Physiology-related
  if (/\b(how does.*work|function|process|mechanism|homeostasis|regulation|body system|circulat|digest|breath|metabol)\b/i.test(lower)) {
    return 'physiology';
  }

  // Pathology-related
  if (/\b(disease|condition|disorder|syndrome|pathology|cause of|what causes|cancer|diabetes|hypertension|infection)\b/i.test(lower)) {
    return 'pathology';
  }

  // Clinical reasoning
  if (/\b(diagnos|differential|why would doctor|what test|how do doctors|workup|evaluate)\b/i.test(lower)) {
    return 'clinical-reasoning';
  }

  // Lifestyle
  if (/\b(diet|exercise|sleep|stress|lifestyle|weight|nutrition|prevent|healthy|wellness)\b/i.test(lower)) {
    return 'lifestyle';
  }

  return 'general';
}

/**
 * Extract suggested follow-up questions from response
 */
function extractFollowUpQuestions(content: string): string[] {
  const questions: string[] = [];

  // Look for explicit follow-up sections
  const followUpMatch = content.match(/(?:want to know more|might also ask|follow.?up question|could explore|might wonder)[:\s]*([^.!?]+[.!?])/gi);
  if (followUpMatch) {
    questions.push(...followUpMatch.map(q => q.replace(/^[^:]+:\s*/i, '').trim()));
  }

  // Look for questions posed at end
  const endQuestions = content.match(/(?:Would you like|Do you want|Should I explain|Want me to)[^?]+\?/gi);
  if (endQuestions) {
    questions.push(...endQuestions);
  }

  return questions.slice(0, 3); // Max 3 follow-ups
}

/**
 * Generate related topics based on domain
 */
function generateRelatedTopics(domain: EducatorDomain, _content: string): RelatedTopic[] {
  const topics: RelatedTopic[] = [];

  // Simple keyword-based topic extraction
  const domainConnections: Record<string, { domain: EducatorDomain; topic: string }[]> = {
    symptoms: [
      { domain: 'anatomy', topic: 'Understand the anatomy involved' },
      { domain: 'pathology', topic: 'Learn what can cause this' },
      { domain: 'clinical-reasoning', topic: 'How doctors evaluate this' },
    ],
    pharmacology: [
      { domain: 'physiology', topic: 'How the body system works normally' },
      { domain: 'pathology', topic: 'The disease mechanism being treated' },
      { domain: 'lab-interpretation', topic: 'Monitoring labs for this medication' },
    ],
    'lab-interpretation': [
      { domain: 'physiology', topic: 'What this marker reflects' },
      { domain: 'pathology', topic: 'Conditions that affect this' },
      { domain: 'pharmacology', topic: 'Medications that can alter this' },
    ],
  };

  const connections = domainConnections[domain];
  if (connections) {
    topics.push(...connections.map(c => ({
      ...c,
      reason: 'Related to what we discussed',
    })));
  }

  return topics.slice(0, 3);
}

/**
 * Main education chat function
 */
export async function educatorChat(
  userMessage: string,
  conversationHistory: EducatorMessage[],
  context: EducatorContext
): Promise<EducatorResponse> {
  const startTime = Date.now();

  // Detect domain if not specified
  const domain = context.domain === 'general' ? detectDomain(userMessage) : context.domain;
  const enrichedContext = { ...context, domain };

  // Build messages
  const systemPrompt = buildEducatorSystemPrompt(enrichedContext);

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory.map(m => ({
      role: m.role as 'user' | 'assistant' | 'system',
      content: m.content,
    })),
    { role: 'user', content: userMessage },
  ];

  // Call the LLM
  const response = await chat({
    messages,
    options: {
      temperature: 0.7,
      top_p: 0.9,
    },
  });

  const content = response.message.content;
  const processingTime = Date.now() - startTime;

  // Post-process response
  const followUpQuestions = extractFollowUpQuestions(content);
  const relatedTopics = generateRelatedTopics(domain, content);

  return {
    message: {
      role: 'assistant',
      content,
      followUpQuestions: followUpQuestions.length > 0 ? followUpQuestions : undefined,
      relatedTopics: relatedTopics.length > 0 ? relatedTopics : undefined,
    },
    knowledgeEnhanced: domain !== 'general',
    domainsUsed: [domain],
    metadata: {
      model: response.model,
      processingTime,
      tokensUsed: response.eval_count,
    },
  };
}

/**
 * Streaming education chat
 */
export async function streamEducatorChat(
  userMessage: string,
  conversationHistory: EducatorMessage[],
  context: EducatorContext,
  onChunk: (chunk: StreamChunk) => void,
  onDone?: (response: EducatorResponse) => void,
  onError?: (error: Error) => void
): Promise<void> {
  const startTime = Date.now();

  // Detect domain if not specified
  const domain = context.domain === 'general' ? detectDomain(userMessage) : context.domain;
  const enrichedContext = { ...context, domain };

  // Build messages
  const systemPrompt = buildEducatorSystemPrompt(enrichedContext);

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory.map(m => ({
      role: m.role as 'user' | 'assistant' | 'system',
      content: m.content,
    })),
    { role: 'user', content: userMessage },
  ];

  let fullContent = '';

  await streamChat(
    { messages, options: { temperature: 0.7, top_p: 0.9 } },
    (chunk) => {
      fullContent += chunk.message.content;
      onChunk(chunk);
    },
    (finalResponse) => {
      const processingTime = Date.now() - startTime;
      const followUpQuestions = extractFollowUpQuestions(fullContent);
      const relatedTopics = generateRelatedTopics(domain, fullContent);

      if (onDone) {
        onDone({
          message: {
            role: 'assistant',
            content: fullContent,
            followUpQuestions: followUpQuestions.length > 0 ? followUpQuestions : undefined,
            relatedTopics: relatedTopics.length > 0 ? relatedTopics : undefined,
          },
          knowledgeEnhanced: domain !== 'general',
          domainsUsed: [domain],
          metadata: {
            model: finalResponse.model,
            processingTime,
            tokensUsed: finalResponse.eval_count,
          },
        });
      }
    },
    onError
  );
}

// ============================================
// Specialized Education Functions
// ============================================

/**
 * Get an explanation of a specific symptom
 */
export async function explainSymptom(
  symptomName: string,
  context?: EducatorContext
): Promise<EducatorResponse> {
  const question = `I want to understand the symptom "${symptomName}". Can you explain:
1. What this symptom actually IS (the physiology/sensation)
2. What body systems might be involved
3. Common reasons why people experience this (educational context, not diagnosing me)
4. What doctors typically ask about or look for with this symptom

Please help me understand so I can have an informed conversation with my healthcare provider.`;

  return educatorChat(question, [], {
    domain: 'symptoms',
    ...context,
  });
}

/**
 * Get an explanation of a medication
 */
export async function explainMedication(
  medicationName: string,
  context?: EducatorContext
): Promise<EducatorResponse> {
  const question = `I want to understand the medication "${medicationName}". Can you explain:
1. How this medication works (its mechanism)
2. What conditions it's typically used for and why
3. What to expect when taking it
4. Important things to know about side effects and interactions

This is for education - I understand my prescribing decisions are between me and my doctor.`;

  return educatorChat(question, [], {
    domain: 'pharmacology',
    ...context,
  });
}

/**
 * Get an educational interpretation of lab results
 */
export async function explainLabResult(
  testName: string,
  value: number,
  unit: string,
  context?: EducatorContext
): Promise<EducatorResponse> {
  const question = `I'd like to understand my lab result for ${testName}: ${value} ${unit}.

Please help me understand:
1. What this test measures biologically
2. What this value might indicate (general education, not diagnosing)
3. What factors can affect this result
4. What questions I might want to ask my doctor about this result

I understand that interpreting labs requires clinical context that my doctor has.`;

  return educatorChat(question, [], {
    domain: 'lab-interpretation',
    ...context,
  });
}

/**
 * Get an explanation of a condition/disease
 */
export async function explainCondition(
  conditionName: string,
  context?: EducatorContext
): Promise<EducatorResponse> {
  const question = `I want to understand the condition "${conditionName}". Can you explain:
1. What this condition is and how it develops
2. What goes wrong in the body (the pathophysiology)
3. How it typically manifests
4. How it's generally managed and why those approaches work

This is for my education so I can understand my health better.`;

  return educatorChat(question, [], {
    domain: 'pathology',
    ...context,
  });
}

/**
 * Get an explanation of how a body system works
 */
export async function explainBodySystem(
  systemName: string,
  context?: EducatorContext
): Promise<EducatorResponse> {
  const question = `I want to understand the ${systemName}. Can you explain:
1. What this system does for the body
2. The key structures and how they work together
3. How this system is regulated and maintains balance
4. What happens when things go wrong with this system

Help me understand at a deep level how my body works.`;

  return educatorChat(question, [], {
    domain: 'physiology',
    ...context,
  });
}

// ============================================
// Red Flag Detection
// ============================================

const EMERGENCY_PATTERNS = [
  /chest pain.*sudden|sudden.*chest pain/i,
  /can't breathe|difficulty breathing.*severe|severe.*difficulty breathing/i,
  /worst headache.*ever|thunderclap headache/i,
  /stroke.*symptom|face droop|arm weak|speech slur/i,
  /suicidal|want to die|kill myself/i,
  /blood.*vomit|vomiting blood/i,
  /seizure.*now|having.*seizure/i,
  /unconscious|unresponsive/i,
  /severe.*allergic|anaphyla/i,
];

/**
 * Check if user message indicates an emergency
 */
export function checkForEmergency(message: string): { isEmergency: boolean; guidance?: string } {
  for (const pattern of EMERGENCY_PATTERNS) {
    if (pattern.test(message)) {
      return {
        isEmergency: true,
        guidance: `⚠️ **If you're experiencing a medical emergency, please call 911 or your local emergency number immediately, or go to your nearest emergency department.**

This app is for education only and cannot provide emergency care. Your safety is the priority.

Once you've ensured you're safe, I'm happy to help you understand what happened and answer questions about your health.`,
      };
    }
  }

  return { isEmergency: false };
}

// ============================================
// Exports
// ============================================

export {
  BASE_SYSTEM_PROMPT,
  DOMAIN_PROMPTS,
};
