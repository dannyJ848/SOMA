import { useState, useEffect, useRef } from 'react';
import { invoke } from './tauri-invoke';

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

interface AIChatResponse {
  content: string;
  model: string;
  done: boolean;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatViewProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
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

const SYSTEM_PROMPT_TEMPLATE = `You are a helpful health education assistant for the Biological Self app. You help users understand their health data and learn about medical concepts.

IMPORTANT: You are NOT a doctor. You provide educational information only, not medical advice or diagnoses. Always encourage users to consult healthcare professionals for medical decisions.

The user has the following health information on file:

{HEALTH_CONTEXT}

Guidelines:
- Be helpful, clear, and educational
- Explain medical terms in accessible language
- When discussing their data, help them understand what values mean
- Never diagnose or prescribe
- If asked about treatment decisions, recommend consulting their doctor
- Keep responses concise but informative`;

export function ChatView({ onBack, dashboardData }: ChatViewProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState<'checking' | 'available' | 'unavailable'>('checking');
  const [aiError, setAiError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkAIHealth();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

    try {
      // Build the system prompt with health context
      const healthContext = buildHealthContext(dashboardData);
      const systemPrompt = SYSTEM_PROMPT_TEMPLATE.replace('{HEALTH_CONTEXT}', healthContext);

      // Build message history for context
      const chatMessages = messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      chatMessages.push({ role: 'user', content: userMessage });

      const response = await invoke<AIChatResponse>('ai_chat', {
        request: {
          messages: chatMessages,
          systemPrompt,
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.content }]);
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

  return (
    <div className="container chat-view">
      <header className="app-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <h1>Health Assistant</h1>
        <div className="header-spacer" />
      </header>

      {/* Medical Disclaimer */}
      <div className="chat-disclaimer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
        <span>This is for educational purposes only, not medical advice. Always consult a healthcare professional.</span>
      </div>

      {/* AI Status */}
      {aiStatus === 'checking' && (
        <div className="ai-status checking">
          <span className="status-indicator"></span>
          Checking AI availability...
        </div>
      )}
      {aiStatus === 'unavailable' && (
        <div className="ai-status unavailable">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
          </svg>
          <div className="status-content">
            <strong>AI Unavailable</strong>
            <span>{aiError}</span>
            <span className="status-hint">Make sure Ollama is running: <code>ollama serve</code></span>
          </div>
          <button onClick={checkAIHealth} className="retry-button">Retry</button>
        </div>
      )}

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.length === 0 && aiStatus === 'available' && (
          <div className="chat-welcome">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <h3>Ask me about your health data</h3>
            <p>I can help you understand your conditions, medications, lab results, and symptoms.</p>
            <div className="suggested-questions">
              <button onClick={() => setInput('What do my recent lab results indicate?')}>
                What do my recent lab results indicate?
              </button>
              <button onClick={() => setInput('Explain my current medications')}>
                Explain my current medications
              </button>
              <button onClick={() => setInput('What could be causing my recent symptoms?')}>
                What could be causing my symptoms?
              </button>
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

      {/* Input Area */}
      <div className="chat-input-container">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={aiStatus === 'available' ? 'Ask a question about your health...' : 'AI unavailable'}
          disabled={aiStatus !== 'available' || isLoading}
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
