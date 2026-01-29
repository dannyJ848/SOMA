/**
 * AI Medical Encyclopedia
 *
 * The core AI assistant interface for region-specific medical education.
 * Integrates with the Physiology, Histology, and Pathology content
 * and provides complexity-adaptive explanations.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { invoke } from '../tauri-invoke';
import type { UserCondition } from '../../core/personalization/types';
import { COMPLEXITY_LEVELS, type ComplexityLevel } from '../ComplexityLevel';

// ============================================
// Types
// ============================================

interface Citation {
  index: number;
  source: string;
  section?: string;
  url?: string;
}

interface DiagramReference {
  id: string;
  name: string;
  type: 'anatomy' | 'histology' | 'physiology' | 'pathology';
  description?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  citations?: Citation[];
  diagramReferences?: DiagramReference[];
  complexityLevel?: ComplexityLevel;
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

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  prompt: string;
}

export interface AIMedicalEncyclopediaProps {
  regionId: string;
  regionName: string;
  userConditions?: UserCondition[];
  initialComplexity: 1 | 2 | 3 | 4 | 5;
  onClose: () => void;
  onNavigateToRegion: (regionId: string) => void;
}

// ============================================
// Constants
// ============================================

const COMPLEXITY_LABELS: Record<ComplexityLevel, string> = {
  1: 'Patient',
  2: 'High School',
  3: 'Medical Student',
  4: 'Resident',
  5: 'Physician',
};

const generateSuggestedQuestions = (regionName: string): string[] => [
  `What doctors specialize in treating the ${regionName}?`,
  `What do medical students learn about the ${regionName}?`,
  `What conditions commonly affect the ${regionName}?`,
  `How does the ${regionName} function?`,
  `What tests examine the ${regionName}?`,
];

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'doctor-explain',
    label: 'Explain like a doctor would',
    icon: 'stethoscope',
    prompt: 'Explain this in clinical terms, as a physician would explain to a colleague during rounds.',
  },
  {
    id: 'med-student',
    label: 'Show me what medical students learn',
    icon: 'graduation-cap',
    prompt: 'What key concepts about this region do medical students need to master? Include high-yield board exam content.',
  },
  {
    id: 'treatments',
    label: 'What are the latest treatments?',
    icon: 'pills',
    prompt: 'What are the current evidence-based treatments for conditions affecting this region? Include any recent advances.',
  },
  {
    id: 'compare',
    label: 'Compare to similar regions',
    icon: 'compare',
    prompt: 'How does this region compare anatomically and functionally to similar regions in the body?',
  },
];

// ============================================
// Icon Components
// ============================================

const BrainBookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4z" />
    <path d="M8 9.5C6.3 10.3 5 12 5 14c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4 0-2-1.3-3.7-3-4.5" />
    <path d="M4 19h16" />
    <path d="M6 19v3h12v-3" />
    <path d="M9 15h6" />
  </svg>
);

const MicrophoneIcon = ({ isRecording = false }: { isRecording?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={isRecording ? 'recording-pulse' : ''}
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const BookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const getQuickActionIcon = (iconName: string) => {
  switch (iconName) {
    case 'stethoscope':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
          <circle cx="20" cy="10" r="2" />
        </svg>
      );
    case 'graduation-cap':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'pills':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
          <path d="m8.5 8.5 7 7" />
        </svg>
      );
    case 'compare':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    default:
      return null;
  }
};

// ============================================
// Helper Functions
// ============================================

const generateMessageId = () => `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

const buildSystemPrompt = (
  regionId: string,
  regionName: string,
  complexityLevel: ComplexityLevel,
  userConditions?: UserCondition[]
): string => {
  const levelDef = COMPLEXITY_LEVELS[complexityLevel];

  let conditionsContext = '';
  if (userConditions && userConditions.length > 0) {
    const activeConditions = userConditions.filter(c => c.status === 'active' || c.status === 'chronic');
    if (activeConditions.length > 0) {
      conditionsContext = `
=== USER'S HEALTH CONTEXT ===
The user has the following relevant conditions: ${activeConditions.map(c => c.name).join(', ')}
When relevant, connect explanations to how this region may be affected by or relate to their conditions.
`;
    }
  }

  return `You are the AI Medical Encyclopedia, an advanced medical education assistant. You specialize in providing evidence-based anatomical and clinical education about the ${regionName}.

IMPORTANT DISCLAIMER: You provide educational information only, NOT medical advice. Always encourage consulting qualified healthcare professionals for diagnoses and treatment decisions.

=== COMPLEXITY LEVEL: ${levelDef.name} (Level ${complexityLevel}/5) ===
Target audience: ${levelDef.audience}
Content characteristics:
${levelDef.characteristics.map(c => `- ${c}`).join('\n')}

=== CURRENT ANATOMICAL REGION ===
Region ID: ${regionId}
Region Name: ${regionName}

${conditionsContext}

=== CONTENT FRAMEWORK ===

When explaining this anatomical region, integrate knowledge from:

1. PHYSIOLOGY
   - Normal functions and mechanisms
   - Homeostatic processes
   - Normal parameters and values
   - System integration

2. HISTOLOGY
   - Tissue types and cellular composition
   - Microscopic anatomy
   - Cell types and their roles
   - Ultrastructure when relevant

3. PATHOLOGY
   - Common conditions affecting this region
   - Disease mechanisms and pathophysiology
   - Clinical presentations
   - Diagnostic approaches

4. CLINICAL CORRELATIONS
   - What physicians look for when examining this region
   - Relevant diagnostic tests and imaging
   - Treatment approaches (educational context only)
   - Specialties that treat conditions in this region

=== RESPONSE GUIDELINES ===

1. Adjust terminology complexity to the selected level
2. Use proper anatomical terminology with definitions at lower complexity levels
3. Include Latin/Greek terms with explanations when helpful
4. Reference diagrams and anatomical structures that could be visualized
5. Provide citations [1], [2], etc. for educational sources
6. Connect to the user's conditions when relevant and appropriate
7. Be thorough but organized - use headers and bullet points
8. NEVER diagnose or prescribe - always refer to healthcare providers
9. Mention which medical specialties would treat conditions when asked

For Level 5 (Physician) responses:
- Include clinical pearls and board-relevant content
- Discuss differential diagnoses
- Reference current clinical guidelines
- Use appropriate medical abbreviations`;
};

// ============================================
// Main Component
// ============================================

export function AIMedicalEncyclopedia({
  regionId,
  regionName,
  userConditions,
  initialComplexity,
  onClose,
  onNavigateToRegion,
}: AIMedicalEncyclopediaProps) {
  // State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [complexityLevel, setComplexityLevel] = useState<ComplexityLevel>(initialComplexity);
  const [isRecording, setIsRecording] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [ragStats, setRagStats] = useState<{ chunks: number; time: number } | null>(null);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Suggested questions based on region
  const suggestedQuestions = generateSuggestedQuestions(regionName);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Send message handler
  const sendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    setInput('');
    setShowQuickActions(false);

    const userMessage: ChatMessage = {
      id: generateMessageId(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const systemPrompt = buildSystemPrompt(regionId, regionName, complexityLevel, userConditions);

      // Build message history for context
      const chatMessages = messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      chatMessages.push({ role: 'user', content: text });

      // Use RAG-enhanced chat
      const response = await invoke<AIChatRAGResponse>('ai_chat_rag', {
        request: {
          messages: chatMessages,
          systemPrompt,
          temperature: 0.7,
          ragOptions: {
            structureName: regionName,
            complexityLevel: complexityLevel,
            maxTokens: 4000,
          },
        },
      });

      // Extract diagram references from response (look for structure names)
      const diagramReferences: DiagramReference[] = [];
      const structureMatches = response.content.match(/\b(heart|lung|liver|kidney|brain|stomach|intestine|spine|muscle)\b/gi);
      if (structureMatches) {
        const uniqueStructures = [...new Set(structureMatches.map(s => s.toLowerCase()))];
        uniqueStructures.slice(0, 3).forEach(structure => {
          diagramReferences.push({
            id: structure,
            name: structure.charAt(0).toUpperCase() + structure.slice(1),
            type: 'anatomy',
          });
        });
      }

      const assistantMessage: ChatMessage = {
        id: generateMessageId(),
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
        citations: response.citations,
        diagramReferences: diagramReferences.length > 0 ? diagramReferences : undefined,
        complexityLevel: complexityLevel,
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (response.ragContext) {
        setRagStats({
          chunks: response.ragContext.chunksUsed,
          time: response.ragContext.processingTimeMs,
        });
      }
    } catch (err) {
      console.error('Encyclopedia chat error:', err);
      const errorMessage: ChatMessage = {
        id: generateMessageId(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error processing your request. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, regionId, regionName, complexityLevel, userConditions]);

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Handle voice input (placeholder - integrates with VoiceContext)
  const handleVoiceInput = useCallback(() => {
    setIsRecording(!isRecording);
    // In production, this would integrate with the VoiceContext
    // For now, toggle the recording state
    if (isRecording) {
      // Would call stopRecording() from VoiceContext
      setIsRecording(false);
    } else {
      // Would call startRecording() from VoiceContext
      setIsRecording(true);
      // Simulate voice input ending after 3 seconds
      setTimeout(() => setIsRecording(false), 3000);
    }
  }, [isRecording]);

  // Handle quick action click
  const handleQuickAction = (action: QuickAction) => {
    sendMessage(`${action.prompt} (About the ${regionName})`);
  };

  // Handle suggested question click
  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  // Handle diagram reference click
  const handleDiagramClick = (ref: DiagramReference) => {
    onNavigateToRegion(ref.id);
  };

  return (
    <div className="ai-medical-encyclopedia">
      {/* Header */}
      <header className="encyclopedia-header">
        <div className="header-left">
          <div className="header-icon">
            <BrainBookIcon />
          </div>
          <div className="header-text">
            <h1>AI Medical Encyclopedia</h1>
            <span className="header-subtitle">Evidence-based medical education</span>
          </div>
        </div>

        <div className="header-center">
          <div className="region-badge">
            <span className="region-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <span className="region-name">{regionName}</span>
          </div>
        </div>

        <div className="header-right">
          <div className="complexity-selector">
            <label>Complexity:</label>
            <div className="complexity-buttons">
              {([1, 2, 3, 4, 5] as ComplexityLevel[]).map(level => {
                const def = COMPLEXITY_LEVELS[level];
                return (
                  <button
                    key={level}
                    className={`complexity-btn ${complexityLevel === level ? 'active' : ''}`}
                    onClick={() => setComplexityLevel(level)}
                    title={`${def.name}: ${def.description}`}
                    style={{ '--level-color': def.color } as React.CSSProperties}
                  >
                    {COMPLEXITY_LABELS[level]}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="close-btn" onClick={onClose} title="Close">
            <CloseIcon />
          </button>
        </div>
      </header>

      {/* Disclaimer */}
      <div className="encyclopedia-disclaimer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span>Educational information only - not medical advice. Consult healthcare professionals for medical decisions.</span>
      </div>

      {/* Main Chat Area */}
      <div className="encyclopedia-main">
        <div className="chat-container">
          {/* Welcome message */}
          {messages.length === 0 && (
            <div className="welcome-section">
              <div className="welcome-icon">
                <BrainBookIcon />
              </div>
              <h2>Welcome to the AI Medical Encyclopedia</h2>
              <p>
                Ask me anything about the <strong>{regionName}</strong> - from basic anatomy to
                clinical correlations. I'll adjust my explanations to match your selected
                complexity level.
              </p>

              {/* User conditions context */}
              {userConditions && userConditions.length > 0 && (
                <div className="conditions-context">
                  <span className="context-label">Your health context is active:</span>
                  <div className="condition-tags">
                    {userConditions
                      .filter(c => c.status === 'active' || c.status === 'chronic')
                      .slice(0, 3)
                      .map(c => (
                        <span key={c.conditionId} className="condition-tag">
                          {c.name}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {/* Suggested Questions */}
              <div className="suggested-questions">
                <h3>Suggested Questions</h3>
                <div className="questions-grid">
                  {suggestedQuestions.map((question, i) => (
                    <button
                      key={i}
                      className="suggested-question-btn"
                      onClick={() => handleSuggestedQuestion(question)}
                      disabled={isLoading}
                    >
                      <span className="question-icon">?</span>
                      <span className="question-text">{question}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="messages-list">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.role}`}>
                {message.role === 'assistant' && (
                  <div className="message-avatar">
                    <BrainBookIcon />
                  </div>
                )}

                <div className="message-body">
                  {/* Complexity indicator for assistant messages */}
                  {message.role === 'assistant' && message.complexityLevel && (
                    <div
                      className="message-complexity"
                      style={{
                        '--level-color': COMPLEXITY_LEVELS[message.complexityLevel].color,
                      } as React.CSSProperties}
                    >
                      Level {message.complexityLevel}: {COMPLEXITY_LEVELS[message.complexityLevel].name}
                    </div>
                  )}

                  <div className="message-content">{message.content}</div>

                  {/* Diagram References */}
                  {message.diagramReferences && message.diagramReferences.length > 0 && (
                    <div className="diagram-references">
                      <div className="diagrams-header">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span>View in 3D Model</span>
                      </div>
                      <div className="diagram-chips">
                        {message.diagramReferences.map(ref => (
                          <button
                            key={ref.id}
                            className="diagram-chip"
                            onClick={() => handleDiagramClick(ref)}
                          >
                            {ref.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Citations */}
                  {message.citations && message.citations.length > 0 && (
                    <div className="message-citations">
                      <div className="citations-header">
                        <BookIcon />
                        <span>Sources</span>
                      </div>
                      <div className="citations-list">
                        {message.citations.map(citation => (
                          <a
                            key={citation.index}
                            href={citation.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="citation-link"
                            onClick={e => !citation.url && e.preventDefault()}
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

                {message.role === 'user' && (
                  <div className="message-avatar user">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="message assistant loading">
                <div className="message-avatar">
                  <BrainBookIcon />
                </div>
                <div className="message-body">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        {showQuickActions && messages.length > 0 && (
          <div className="quick-actions-sidebar">
            <h3>Quick Actions</h3>
            <div className="quick-actions-list">
              {QUICK_ACTIONS.map(action => (
                <button
                  key={action.id}
                  className="quick-action-btn"
                  onClick={() => handleQuickAction(action)}
                  disabled={isLoading}
                >
                  <span className="action-icon">{getQuickActionIcon(action.icon)}</span>
                  <span className="action-label">{action.label}</span>
                </button>
              ))}
            </div>

            {/* RAG Stats */}
            {ragStats && (
              <div className="rag-stats">
                <span className="stat">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                  {ragStats.chunks} sources
                </span>
                <span className="stat">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  {ragStats.time}ms
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="encyclopedia-input">
        <button
          className={`voice-btn ${isRecording ? 'recording' : ''}`}
          onClick={handleVoiceInput}
          title={isRecording ? 'Stop recording' : 'Press to speak'}
          disabled={isLoading}
        >
          <MicrophoneIcon isRecording={isRecording} />
          {isRecording && <span className="recording-badge">Recording...</span>}
        </button>

        <div className="text-input-wrapper">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask about the ${regionName}...`}
            disabled={isLoading}
            rows={1}
          />
        </div>

        <button
          className="send-btn"
          onClick={() => sendMessage()}
          disabled={!input.trim() || isLoading}
          title="Send message"
        >
          <SendIcon />
        </button>
      </div>

      <style>{`
        .ai-medical-encyclopedia {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background: #0d0d1a;
          color: #e0e0e0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
          overflow: hidden;
        }

        /* Header */
        .encyclopedia-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-bottom: 1px solid #2a2a4a;
          gap: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #4a9eff 0%, #a855f7 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .header-text h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
        }

        .header-subtitle {
          font-size: 12px;
          color: #888;
        }

        .header-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .region-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(74, 158, 255, 0.15);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 20px;
          color: #4a9eff;
          font-weight: 500;
        }

        .region-icon {
          display: flex;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .complexity-selector {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .complexity-selector label {
          font-size: 12px;
          color: #888;
        }

        .complexity-buttons {
          display: flex;
          gap: 4px;
        }

        .complexity-btn {
          padding: 6px 10px;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .complexity-btn:hover {
          background: #252538;
          color: #ccc;
        }

        .complexity-btn.active {
          background: var(--level-color);
          color: #fff;
          border-color: var(--level-color);
        }

        .close-btn {
          width: 36px;
          height: 36px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .close-btn:hover {
          background: #333;
          color: #fff;
        }

        /* Disclaimer */
        .encyclopedia-disclaimer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          font-size: 12px;
          border-bottom: 1px solid rgba(255, 193, 7, 0.2);
        }

        /* Main Area */
        .encyclopedia-main {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .chat-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Welcome Section */
        .welcome-section {
          padding: 40px;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .welcome-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #4a9eff 0%, #a855f7 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #fff;
        }

        .welcome-icon svg {
          width: 32px;
          height: 32px;
        }

        .welcome-section h2 {
          margin: 0 0 12px 0;
          font-size: 24px;
          color: #fff;
        }

        .welcome-section p {
          margin: 0 0 24px 0;
          color: #888;
          line-height: 1.6;
        }

        .welcome-section strong {
          color: #4a9eff;
        }

        .conditions-context {
          margin-bottom: 24px;
          padding: 12px 16px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .context-label {
          font-size: 12px;
          color: #888;
        }

        .condition-tags {
          display: flex;
          gap: 6px;
        }

        .condition-tag {
          padding: 4px 10px;
          background: #4a9eff;
          border-radius: 12px;
          font-size: 11px;
          color: #fff;
        }

        .suggested-questions {
          text-align: left;
        }

        .suggested-questions h3 {
          margin: 0 0 16px 0;
          font-size: 14px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .questions-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suggested-question-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 10px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
        }

        .suggested-question-btn:hover:not(:disabled) {
          background: #252538;
          border-color: #4a9eff;
          color: #fff;
        }

        .suggested-question-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .question-icon {
          width: 28px;
          height: 28px;
          background: rgba(74, 158, 255, 0.15);
          color: #4a9eff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .question-text {
          font-size: 14px;
          line-height: 1.4;
        }

        /* Messages */
        .messages-list {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .message {
          display: flex;
          gap: 12px;
          max-width: 85%;
          animation: messageIn 0.2s ease-out;
        }

        @keyframes messageIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #4a9eff 0%, #a855f7 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .message-avatar.user {
          background: #4a9eff;
        }

        .message-avatar svg {
          width: 18px;
          height: 18px;
        }

        .message-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .message-complexity {
          font-size: 10px;
          color: var(--level-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .message-content {
          padding: 14px 18px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
        }

        .message.assistant .message-content {
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-top-left-radius: 4px;
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #4a9eff 0%, #3a8eef 100%);
          color: #fff;
          border-top-right-radius: 4px;
        }

        /* Diagram References */
        .diagram-references {
          padding: 10px 14px;
          background: rgba(74, 158, 255, 0.1);
          border: 1px solid rgba(74, 158, 255, 0.2);
          border-radius: 8px;
        }

        .diagrams-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #4a9eff;
          margin-bottom: 8px;
        }

        .diagram-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .diagram-chip {
          padding: 4px 10px;
          background: rgba(74, 158, 255, 0.2);
          border: none;
          border-radius: 12px;
          color: #4a9eff;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .diagram-chip:hover {
          background: #4a9eff;
          color: #fff;
        }

        /* Citations */
        .message-citations {
          padding: 12px 14px;
          background: #151520;
          border: 1px solid #2a2a4a;
          border-radius: 8px;
        }

        .citations-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #888;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .citations-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .citation-link {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          background: #1a1a2e;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.15s;
        }

        .citation-link:hover {
          background: #252538;
        }

        .citation-index {
          color: #4a9eff;
          font-weight: 600;
          font-size: 12px;
        }

        .citation-source {
          color: #ccc;
          font-size: 12px;
        }

        .citation-section {
          color: #666;
          font-size: 11px;
          width: 100%;
          margin-top: 2px;
        }

        /* Loading */
        .message.loading .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 14px 18px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 16px;
          border-top-left-radius: 4px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #4a9eff;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* Quick Actions Sidebar */
        .quick-actions-sidebar {
          width: 240px;
          padding: 20px;
          background: #151520;
          border-left: 1px solid #2a2a4a;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .quick-actions-sidebar h3 {
          margin: 0;
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quick-actions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-action-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
        }

        .quick-action-btn:hover:not(:disabled) {
          background: #252538;
          border-color: #4a9eff;
          color: #fff;
        }

        .quick-action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .action-icon {
          width: 28px;
          height: 28px;
          background: rgba(74, 158, 255, 0.15);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a9eff;
        }

        .action-label {
          font-size: 13px;
          line-height: 1.3;
        }

        /* RAG Stats */
        .rag-stats {
          margin-top: auto;
          padding: 12px;
          background: #1a1a2e;
          border-radius: 8px;
          display: flex;
          gap: 16px;
        }

        .rag-stats .stat {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #666;
        }

        /* Input Area */
        .encyclopedia-input {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: #151520;
          border-top: 1px solid #2a2a4a;
        }

        .voice-btn {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.15s;
        }

        .voice-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }

        .voice-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .voice-btn.recording {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(168, 85, 247, 0); }
        }

        .recording-pulse {
          animation: iconPulse 1s infinite;
        }

        @keyframes iconPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .recording-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 2px 6px;
          background: #ef4444;
          border-radius: 10px;
          font-size: 9px;
          font-weight: 600;
        }

        .text-input-wrapper {
          flex: 1;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 24px;
          overflow: hidden;
          transition: border-color 0.15s;
        }

        .text-input-wrapper:focus-within {
          border-color: #4a9eff;
        }

        .text-input-wrapper textarea {
          width: 100%;
          padding: 14px 20px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          outline: none;
          font-family: inherit;
        }

        .text-input-wrapper textarea::placeholder {
          color: #666;
        }

        .send-btn {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #4a9eff 0%, #3a8eef 100%);
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(74, 158, 255, 0.4);
        }

        .send-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .quick-actions-sidebar {
            display: none;
          }

          .complexity-buttons {
            display: none;
          }

          .encyclopedia-header {
            flex-wrap: wrap;
            gap: 12px;
          }

          .header-center {
            order: 3;
            flex-basis: 100%;
            justify-content: flex-start;
          }
        }

        @media (max-width: 600px) {
          .encyclopedia-header {
            padding: 12px 16px;
          }

          .header-text h1 {
            font-size: 16px;
          }

          .messages-list {
            padding: 12px;
          }

          .message {
            max-width: 95%;
          }

          .welcome-section {
            padding: 24px 16px;
          }

          .encyclopedia-input {
            padding: 12px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default AIMedicalEncyclopedia;
