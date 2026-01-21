/**
 * Anatomy Chat Panel
 *
 * A compact chat interface for structure-specific AI conversations.
 * Shows when user clicks "Ask AI" in StructureInfoPanel.
 */

import { useState, useEffect, useRef } from 'react';
import { invoke } from './tauri-invoke';
import {
  buildAnatomySystemPrompt,
  generateSuggestedQuestions,
  type DashboardData,
} from './utils/anatomyContextBuilder';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatResponse {
  content: string;
  model: string;
  done: boolean;
}

interface AnatomyChatPanelProps {
  structureId: string;
  structureName: string;
  dashboardData: DashboardData | null;
  onClose: () => void;
  onExpandToFullChat?: () => void;
}

export function AnatomyChatPanel({
  structureId,
  structureName,
  dashboardData,
  onClose,
  onExpandToFullChat,
}: AnatomyChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate suggested questions on mount
  useEffect(() => {
    const questions = generateSuggestedQuestions(structureId, structureName, dashboardData);
    setSuggestedQuestions(questions);
  }, [structureId, structureName, dashboardData]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(messageText?: string) {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      // Build the system prompt with anatomy + health context
      const systemPrompt = buildAnatomySystemPrompt(structureId, structureName, dashboardData);

      // Build message history
      const chatMessages = messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      chatMessages.push({ role: 'user', content: text });

      const response = await invoke<AIChatResponse>('ai_chat', {
        request: {
          messages: chatMessages,
          systemPrompt,
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.content }]);
    } catch (err) {
      console.error('Anatomy chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `I'm sorry, I encountered an error. Please try again.`,
        },
      ]);
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
    <div className="anatomy-chat-panel">
      {/* Header */}
      <div className="chat-panel-header">
        <div className="header-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Ask about {structureName}</span>
        </div>
        <div className="header-actions">
          {onExpandToFullChat && (
            <button
              className="expand-btn"
              onClick={onExpandToFullChat}
              title="Open full chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          )}
          <button className="close-btn" onClick={onClose} title="Close chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="chat-panel-disclaimer">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span>Educational information only, not medical advice</span>
      </div>

      {/* Messages */}
      <div className="chat-panel-messages">
        {messages.length === 0 && (
          <div className="chat-panel-welcome">
            <p>Ask me anything about the {structureName}!</p>
            {suggestedQuestions.length > 0 && (
              <div className="suggested-questions">
                {suggestedQuestions.slice(0, 3).map((question, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(question)}
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} className={`chat-panel-message ${message.role}`}>
            <div className="message-content">{message.content}</div>
          </div>
        ))}

        {isLoading && (
          <div className="chat-panel-message assistant loading">
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

      {/* More suggestions after conversation starts */}
      {messages.length > 0 && messages.length < 4 && suggestedQuestions.length > 0 && (
        <div className="chat-panel-suggestions">
          {suggestedQuestions.slice(0, 2).map((question, i) => (
            <button
              key={i}
              onClick={() => sendMessage(question)}
              disabled={isLoading}
            >
              {question}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="chat-panel-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a question..."
          disabled={isLoading}
        />
        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || isLoading}
          className="send-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>

      <style>{`
        .anatomy-chat-panel {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 380px;
          max-width: 100%;
          background: #1a1a2e;
          border-left: 1px solid #333;
          display: flex;
          flex-direction: column;
          z-index: 100;
          animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .chat-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #252538;
          border-bottom: 1px solid #333;
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          color: #fff;
        }

        .header-title svg {
          color: #4a9eff;
        }

        .header-actions {
          display: flex;
          gap: 8px;
        }

        .header-actions button {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-actions button:hover {
          background: #333;
          color: #fff;
        }

        .chat-panel-disclaimer {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          font-size: 11px;
          border-bottom: 1px solid #333;
        }

        .chat-panel-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-panel-welcome {
          text-align: center;
          color: #888;
          padding: 20px;
        }

        .chat-panel-welcome p {
          margin: 0 0 16px 0;
        }

        .suggested-questions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suggested-questions button {
          padding: 10px 14px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          font-size: 13px;
          transition: all 0.15s;
        }

        .suggested-questions button:hover:not(:disabled) {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .suggested-questions button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chat-panel-message {
          display: flex;
        }

        .chat-panel-message.user {
          justify-content: flex-end;
        }

        .chat-panel-message .message-content {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .chat-panel-message.user .message-content {
          background: #4a9eff;
          color: #fff;
          border-bottom-right-radius: 4px;
        }

        .chat-panel-message.assistant .message-content {
          background: #252538;
          color: #e0e0e0;
          border-bottom-left-radius: 4px;
        }

        .chat-panel-message.loading .message-content {
          padding: 14px 18px;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #666;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out both;
        }

        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes typing {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        .chat-panel-suggestions {
          padding: 8px 16px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          border-top: 1px solid #333;
        }

        .chat-panel-suggestions button {
          padding: 6px 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 16px;
          color: #888;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.15s;
        }

        .chat-panel-suggestions button:hover:not(:disabled) {
          background: #2a2a4a;
          color: #ccc;
        }

        .chat-panel-suggestions button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chat-panel-input {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          background: #252538;
          border-top: 1px solid #333;
        }

        .chat-panel-input input {
          flex: 1;
          padding: 10px 14px;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 20px;
          color: #fff;
          font-size: 14px;
          outline: none;
        }

        .chat-panel-input input:focus {
          border-color: #4a9eff;
        }

        .chat-panel-input input::placeholder {
          color: #666;
        }

        .chat-panel-input .send-btn {
          width: 40px;
          height: 40px;
          background: #4a9eff;
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .chat-panel-input .send-btn:hover:not(:disabled) {
          background: #3a8eef;
          transform: scale(1.05);
        }

        .chat-panel-input .send-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default AnatomyChatPanel;
