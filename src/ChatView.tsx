import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { invoke } from './tauri-invoke';
import { useActionTracker } from './hooks/useActionTracker';
import { useJourneyContext, getContextualSuggestions } from './hooks/useJourneyContext';
import type { ChatAction } from '../core/intent-prediction/types';
import { useVoice, useVoiceConfig } from './contexts/VoiceContext';
import { VoiceButton, SpeakingIndicator } from './components/voice';
import { useTranslation } from './i18n/useI18n';
import { LanguageToggle } from './components/LanguageSwitcher';
import { buildAnatomyChatSystemPrompt, dashboardToPatientData } from './ai';

interface DashboardData {
  summary: {
    totalConditions: number;
    totalMedications: number;
    totalLabResults: number;
  };
  activeConditions: Array<{
    name: string;
    status: string;
  }>;
  currentMedications: Array<{
    name: string;
    dosage?: string;
    frequency?: string;
  }>;
  recentLabs: Array<{
    testName: string;
    value: number | string;
    unit?: string;
    status?: string;
  }>;
  recentSymptoms: Array<{
    description: string;
    severity: number;
    location?: string;
  }>;
}

interface AIHealthResponse {
  available: boolean;
  version?: string;
  error?: string;
}

interface Citation {
  index: number;
  source: string;
  section?: string;
  url?: string;
}

interface AIChatRAGResponse {
  content: string;
  model: string;
  done: boolean;
  citations: Citation[];
  ragContext?: {
    chunksUsed: number;
    totalTokens: number;
    processingTimeMs: number;
  };
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  citations?: Citation[];
}

/** Structured anatomy context from the 3D body model */
interface AnatomyChatContext {
  regionId: string;
  regionName: string;
  bodySystems: string[];
  anatomyStructures: string[];
  symptoms: string[];
  conditions: string[];
  specialties: string[];
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  initialQuestion?: string;
}

interface ChatViewProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  /** Optional region context pre-populated when navigating from "Ask AI" on a body region */
  regionContext?: string | null;
  /** Structured anatomy context (preferred over regionContext when available) */
  anatomyChatContext?: AnatomyChatContext | null;
}

function buildHealthContext(dashboard: DashboardData | null): string {
  if (!dashboard) {
    return 'No health data is currently available.';
  }

  const parts: string[] = [];

  // Active conditions
  if (dashboard.activeConditions.length > 0) {
    const conditions = dashboard.activeConditions
      .map(c => `- ${c.name} (${c.status})`)
      .join('\n');
    parts.push(`Active Conditions:\n${conditions}`);
  }

  // Current medications
  if (dashboard.currentMedications.length > 0) {
    const meds = dashboard.currentMedications
      .map(m => `- ${m.name}${m.dosage ? ` ${m.dosage}` : ''}${m.frequency ? ` (${m.frequency})` : ''}`)
      .join('\n');
    parts.push(`Current Medications:\n${meds}`);
  }

  // Recent symptoms
  if (dashboard.recentSymptoms.length > 0) {
    const symptoms = dashboard.recentSymptoms
      .slice(0, 5)
      .map(s => `- ${s.description} (severity: ${s.severity}/10${s.location ? `, location: ${s.location}` : ''})`)
      .join('\n');
    parts.push(`Recent Symptoms:\n${symptoms}`);
  }

  // Recent labs (abnormal ones)
  const abnormalLabs = dashboard.recentLabs.filter(l => l.status === 'abnormal' || l.status === 'critical');
  if (abnormalLabs.length > 0) {
    const labs = abnormalLabs
      .slice(0, 5)
      .map(l => `- ${l.testName}: ${l.value}${l.unit ? ` ${l.unit}` : ''} (${l.status})`)
      .join('\n');
    parts.push(`Notable Lab Results:\n${labs}`);
  }

  if (parts.length === 0) {
    return 'The user has health records but no active conditions, medications, or recent symptoms to note.';
  }

  return parts.join('\n\n');
}

const SYSTEM_PROMPT_TEMPLATE = `You are a life sciences education assistant for the Biological Self app. You help users understand their health data through the lens of anatomy, physiology, pathophysiology, and clinical medicine.

IMPORTANT DISCLAIMER: You are an educational assistant, NOT a healthcare provider. You provide evidence-based educational information to help users understand their bodies and health data. Always encourage consulting qualified healthcare professionals for medical decisions, diagnoses, and treatments.

=== USER HEALTH PROFILE ===
{HEALTH_CONTEXT}

=== EDUCATIONAL APPROACH ===

When explaining concepts, follow this educational framework:

1. ANATOMY (Structure): Describe the relevant body structures involved
   - Use proper anatomical terminology with lay explanations
   - Include relationships between structures (proximal/distal, medial/lateral)
   - Reference body systems and their interconnections

2. PHYSIOLOGY (Function): Explain how structures work under normal conditions
   - Describe mechanisms at organ, tissue, and cellular levels when relevant
   - Explain homeostatic mechanisms and regulatory pathways
   - Connect form to function

3. PATHOPHYSIOLOGY (When Disease Occurs): For health conditions, explain:
   - How normal function becomes disrupted
   - The cascade of physiological changes
   - Why certain symptoms manifest
   - How treatments work to restore function

4. CLINICAL CORRELATION: Help users understand their personal data
   - Explain lab values in context of normal physiology
   - Connect symptoms to underlying mechanisms
   - Relate medications to their physiological effects

=== CITATION GUIDELINES ===

Use bracketed citations [1], [2], etc. when referencing educational sources:
- Cite specific facts, mechanisms, or clinical information
- Include citations for normal reference ranges
- Reference sources for treatment mechanisms
- Use [PubMed-N] notation for research literature

=== RESPONSE GUIDELINES ===

- Use proper scientific terminology with clear explanations
- Structure explanations from basic to complex
- Use analogies to make concepts accessible
- Include relevant clinical pearls when appropriate
- Acknowledge limitations and uncertainties in medical knowledge
- NEVER diagnose, prescribe, or recommend stopping medications
- Recommend professional consultation for concerning symptoms`;


export function ChatView({ onBack, dashboardData, regionContext, anatomyChatContext }: ChatViewProps) {
  const { t } = useTranslation('chat');
  const { t: tCommon } = useTranslation('common');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState<'checking' | 'available' | 'unavailable'>('checking');
  const [aiError, setAiError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Action tracking for intent prediction
  const { track } = useActionTracker<ChatAction>('chat', 'ChatView');

  // Get journey context for personalized responses
  const { chatContext, summary } = useJourneyContext();

  // Voice integration
  const { speak, stopSpeaking, playbackState, recordingState } = useVoice();
  const { config: voiceConfig } = useVoiceConfig();
  const lastAssistantMessageRef = useRef<string | null>(null);

  // Get contextual suggestions based on exploration journey
  const contextualSuggestions = useMemo(() => {
    return getContextualSuggestions(summary);
  }, [summary]);

  useEffect(() => {
    checkAIHealth();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-speak new assistant messages when enabled
  useEffect(() => {
    if (!voiceConfig.autoSpeak) return;

    const lastMessage = messages[messages.length - 1];
    if (
      lastMessage &&
      lastMessage.role === 'assistant' &&
      lastMessage.content !== lastAssistantMessageRef.current &&
      !isLoading
    ) {
      lastAssistantMessageRef.current = lastMessage.content;
      // Extract plain text for speaking (remove citations markers)
      const textToSpeak = lastMessage.content.replace(/\[\d+\]/g, '').trim();
      if (textToSpeak) {
        speak(textToSpeak);
      }
    }
  }, [messages, voiceConfig.autoSpeak, isLoading, speak]);

  // Pre-populate chat with region context when navigating from "Ask AI" on a body region.
  // When anatomyChatContext is provided we build a rich, structured system prompt via
  // EducationalContextBuilder. Otherwise fall back to the plain regionContext string.
  const regionContextProcessedRef = useRef(false);
  useEffect(() => {
    const hasContext = anatomyChatContext || regionContext;
    if (!hasContext || regionContextProcessedRef.current || aiStatus !== 'available') return;

    regionContextProcessedRef.current = true;

    // Determine the user message and system prompt
    let userMessage: string;
    let systemPrompt: string;
    let ragOptions: { complexityLevel: 1 | 2 | 3 | 4 | 5; maxTokens: number; structureName?: string; system?: string } = {
      complexityLevel: 3,
      maxTokens: 3000,
    };

    if (anatomyChatContext) {
      // -- Structured context path: build enriched system prompt --
      userMessage = anatomyChatContext.initialQuestion
        || `Tell me about the ${anatomyChatContext.regionName}. What is its structure, function, and clinical relevance?`;

      // Convert dashboard data to PatientHealthData for the builder
      const patientData = dashboardData ? dashboardToPatientData(dashboardData) : null;
      systemPrompt = buildAnatomyChatSystemPrompt(anatomyChatContext, patientData);

      // Append journey context if available
      if (chatContext) {
        systemPrompt = systemPrompt + '\n\n' + chatContext;
      }

      ragOptions = {
        complexityLevel: anatomyChatContext.complexityLevel,
        maxTokens: 3000,
        structureName: anatomyChatContext.regionName,
        system: anatomyChatContext.bodySystems[0],
      };
    } else {
      // -- Legacy plain-string path --
      userMessage = regionContext!;
      const healthContext = buildHealthContext(dashboardData);
      systemPrompt = SYSTEM_PROMPT_TEMPLATE.replace('{HEALTH_CONTEXT}', healthContext);
      if (chatContext) {
        systemPrompt = systemPrompt + '\n\n' + chatContext;
      }
    }

    setMessages([{ role: 'user', content: userMessage }]);
    setIsLoading(true);

    invoke<AIChatRAGResponse>('ai_chat_rag', {
      request: {
        messages: [{ role: 'user', content: userMessage }],
        systemPrompt,
        temperature: 0.7,
        ragOptions,
      },
    }).then((response) => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.content,
        citations: response.citations,
      }]);
    }).catch((err) => {
      console.error('Region context chat error:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I'm sorry, I encountered an error: ${String(err)}. Please try again.`,
      }]);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [regionContext, anatomyChatContext, aiStatus, dashboardData, chatContext]);

  async function checkAIHealth() {
    try {
      const response = await invoke<AIHealthResponse>('ai_health');
      if (response.available) {
        setAiStatus('available');
      } else {
        setAiStatus('unavailable');
        setAiError(response.error || 'Ollama is not running');
      }
    } catch (err) {
      setAiStatus('unavailable');
      setAiError(String(err));
    }
  }

  async function sendMessage() {
    if (!input.trim() || isLoading || aiStatus !== 'available') return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Track send-message action
    track('send-message', { messageContent: userMessage, messageRole: 'user' });

    try {
      // Build the system prompt with health context and journey context
      const healthContext = buildHealthContext(dashboardData);
      let systemPrompt = SYSTEM_PROMPT_TEMPLATE.replace('{HEALTH_CONTEXT}', healthContext);

      // Add journey context if available
      if (chatContext) {
        systemPrompt = systemPrompt + '\n\n' + chatContext;
      }

      // Build message history for context
      const chatMessages = messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      chatMessages.push({ role: 'user', content: userMessage });

      // Use RAG-enhanced chat for better educational content with citations
      const response = await invoke<AIChatRAGResponse>('ai_chat_rag', {
        request: {
          messages: chatMessages,
          systemPrompt,
          temperature: 0.7,
          ragOptions: {
            complexityLevel: 3,
            maxTokens: 3000,
          },
        },
      });

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.content,
        citations: response.citations,
      }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I'm sorry, I encountered an error: ${String(err)}. Please try again.`
      }]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  // Handle suggestion click with tracking
  const handleSuggestionClick = useCallback((suggestion: string) => {
    track('click-suggestion', { suggestionText: suggestion });
    setInput(suggestion);
  }, [track]);

  // Handle citation click with tracking
  const handleCitationClick = useCallback((citation: Citation, event: React.MouseEvent) => {
    // Track view-citation action
    track('view-citation', {
      citationIndex: citation.index,
      metadata: { source: citation.source, section: citation.section },
    });

    // If no URL, prevent navigation
    if (!citation.url) {
      event.preventDefault();
    }
  }, [track]);

  // Handle voice transcription
  const handleVoiceTranscription = useCallback((text: string) => {
    if (text.trim()) {
      // Stop any ongoing speech when user starts talking
      if (playbackState === 'playing') {
        stopSpeaking();
      }
      setInput(text);
      track('voice-input', { messageContent: text, messageRole: 'user' });
    }
  }, [playbackState, stopSpeaking, track]);

  // Handle voice recording start - interrupt TTS
  const handleVoiceRecordingStart = useCallback(() => {
    if (playbackState === 'playing') {
      stopSpeaking();
    }
  }, [playbackState, stopSpeaking]);

  return (
    <div className="container chat-view">
      <header className="app-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {tCommon('action.back')}
        </button>
        <h1>{t('chat.title')}</h1>
        <LanguageToggle />
      </header>

      {/* Medical Disclaimer */}
      <div className="chat-disclaimer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
        <span>{t('chat.disclaimer')}</span>
      </div>

      {/* AI Status */}
      {aiStatus === 'checking' && (
        <div className="ai-status checking">
          <span className="status-indicator"></span>
          {t('chat.thinking')}
        </div>
      )}
      {aiStatus === 'unavailable' && (
        <div className="ai-status unavailable">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
          </svg>
          <div className="status-content">
            <strong>{t('error.unavailable')}</strong>
            <span>{aiError}</span>
            <span className="status-hint">{t('error.ollamaHint')}</span>
          </div>
          <button onClick={checkAIHealth} className="retry-button">{tCommon('action.retry')}</button>
        </div>
      )}

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.length === 0 && aiStatus === 'available' && (
          <div className="chat-welcome">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <h3>{t('chat.welcome.title')}</h3>
            <p>{t('chat.welcome.subtitle')}</p>
            <div className="suggested-questions">
              {contextualSuggestions.length > 0 ? (
                contextualSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))
              ) : (
                <>
                  <button onClick={() => handleSuggestionClick(t('chat.examples.anatomy'))}>
                    {t('chat.examples.anatomy')}
                  </button>
                  <button onClick={() => handleSuggestionClick(t('chat.examples.symptom'))}>
                    {t('chat.examples.symptom')}
                  </button>
                  <button onClick={() => handleSuggestionClick(t('chat.examples.medication'))}>
                    {t('chat.examples.medication')}
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}`}>
            <div className="message-avatar">
              {message.role === 'user' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                  <path d="M19 9h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"/>
                  <path d="M5 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5"/>
                  <path d="M12 8v14"/>
                </svg>
              )}
            </div>
            <div className="message-content">
              {message.content}
              {message.citations && message.citations.length > 0 && (
                <div className="message-citations">
                  <div className="citations-header">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    {t('chat.sources')}
                  </div>
                  <div className="citations-list">
                    {message.citations.map((citation) => (
                      <a
                        key={citation.index}
                        href={citation.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="citation-link"
                        onClick={(e) => handleCitationClick(citation, e)}
                      >
                        <span className="citation-index">[{citation.index}]</span>
                        <span className="citation-source">{citation.source}</span>
                        {citation.section && (
                          <span className="citation-section">{citation.section}</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="chat-message assistant loading">
            <div className="message-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                <path d="M19 9h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"/>
                <path d="M5 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5"/>
                <path d="M12 8v14"/>
              </svg>
            </div>
            <div className="message-content">
              <span className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Speaking Indicator */}
      {(playbackState === 'playing' || playbackState === 'loading') && (
        <div className="chat-speaking-indicator">
          <SpeakingIndicator text={t('chat.reading')} />
        </div>
      )}

      {/* Input Area */}
      <div className="chat-input-container">
        <VoiceButton
          size="small"
          onTranscription={handleVoiceTranscription}
          onRecordingStart={handleVoiceRecordingStart}
          disabled={aiStatus !== 'available' || isLoading}
          tooltip="Press and hold to speak"
        />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            recordingState === 'recording'
              ? t('voice.listening')
              : recordingState === 'transcribing'
              ? t('voice.processing')
              : aiStatus === 'available'
              ? t('chat.placeholder')
              : t('error.unavailable')
          }
          disabled={aiStatus !== 'available' || isLoading || recordingState !== 'idle'}
          rows={1}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading || aiStatus !== 'available'}
          className="send-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
