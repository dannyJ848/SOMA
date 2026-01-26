/**
 * AI-Enhanced Chat Component
 *
 * Enhanced chat interface with:
 * - Context-aware responses based on current view
 * - Citations from medical references
 * - Multi-turn conversations with memory
 * - Suggested follow-up questions
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAI, useAIContext } from '../index';
import type { AIMessage, Citation, StructureContext, HistologyContext, ConditionContext } from '../types';

interface AIChatEnhancedProps {
  // Context for the chat (what the user is currently viewing)
  structureContext?: StructureContext;
  histologyContext?: HistologyContext;
  conditionContext?: ConditionContext;

  // Callbacks
  onNavigateToStructure?: (structureId: string) => void;
  onNavigateToHistology?: (slideId: string) => void;
  onNavigateToCondition?: (conditionId: string) => void;

  // UI options
  compact?: boolean;
  showSuggestions?: boolean;
  placeholder?: string;
}

interface ChatMessage extends AIMessage {
  id: string;
  isLoading?: boolean;
}

export function AIChatEnhanced({
  structureContext,
  histologyContext,
  conditionContext,
  onNavigateToStructure,
  onNavigateToHistology,
  onNavigateToCondition,
  compact = false,
  showSuggestions = true,
  placeholder = 'Ask me anything about anatomy, conditions, or your health...',
}: AIChatEnhancedProps) {
  const ai = useAI();
  const context = useAIContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Generate context-aware system prompt
  const getSystemPrompt = useCallback(() => {
    let contextInfo = '';

    if (structureContext) {
      contextInfo += `\nThe user is currently viewing: ${structureContext.structureName} (${structureContext.system} system).`;
    }

    if (histologyContext) {
      contextInfo += `\nThe user is viewing a histology slide: ${histologyContext.tissueName} stained with ${histologyContext.stain}.`;
    }

    if (conditionContext) {
      contextInfo += `\nThe user is learning about: ${conditionContext.conditionName}.`;
      if (conditionContext.userHasCondition) {
        contextInfo += ` The user has this condition.`;
      }
    }

    return `You are an educational AI assistant for the Biological Self anatomy app. You help users understand human anatomy, physiology, and health.
${contextInfo}

Guidelines:
- Provide accurate, educational information about anatomy and health
- Adapt explanations to the user's complexity level preference
- When relevant, reference the structure or content they're viewing
- Suggest related topics they might want to explore
- Never provide medical diagnoses or treatment recommendations
- Cite sources when making specific claims

When you reference medical facts, include inline citations like [1], [2] that refer to sources.`;
  }, [structureContext, histologyContext, conditionContext]);

  // Handle sending a message
  const handleSendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text || isTyping) return;

    const userMessageId = `msg-${Date.now()}-user`;
    const assistantMessageId = `msg-${Date.now()}-assistant`;

    // Add user message
    setMessages(prev => [...prev, {
      id: userMessageId,
      role: 'user',
      content: text,
      timestamp: Date.now(),
    }]);

    // Add loading placeholder for assistant
    setMessages(prev => [...prev, {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      isLoading: true,
      timestamp: Date.now(),
    }]);

    setInputValue('');
    setIsTyping(true);

    try {
      let response;

      // Choose appropriate method based on context
      if (structureContext) {
        response = await ai.explainStructure(structureContext, text);
      } else if (histologyContext) {
        response = await ai.explainHistology(histologyContext, text);
      } else if (conditionContext) {
        response = await ai.explainCondition(conditionContext, text);
      } else {
        response = await ai.ask(text, getSystemPrompt());
      }

      // Update with actual response
      setMessages(prev => prev.map(msg =>
        msg.id === assistantMessageId
          ? {
              ...msg,
              content: response.content,
              citations: response.citations,
              isLoading: false,
            }
          : msg
      ));
    } catch (err) {
      // Update with error message
      setMessages(prev => prev.map(msg =>
        msg.id === assistantMessageId
          ? {
              ...msg,
              content: 'I apologize, but I encountered an error processing your request. Please try again.',
              isLoading: false,
            }
          : msg
      ));
    } finally {
      setIsTyping(false);
    }
  }, [inputValue, isTyping, ai, structureContext, histologyContext, conditionContext, getSystemPrompt]);

  // Handle key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // Generate suggested questions based on context
  const suggestedQuestions = ai.generateSuggestedQuestions(
    structureContext,
    histologyContext,
    conditionContext
  );

  // Clear conversation
  const handleClearChat = useCallback(() => {
    setMessages([]);
    ai.clearConversation();
  }, [ai]);

  // Render a single message
  const renderMessage = (message: ChatMessage) => (
    <div
      key={message.id}
      className={`chat-message ${message.role}`}
    >
      <div className="message-avatar">
        {message.role === 'user' ? 'You' : 'AI'}
      </div>
      <div className="message-content">
        {message.isLoading ? (
          <div className="loading-dots">
            <span></span><span></span><span></span>
          </div>
        ) : (
          <>
            <p>{message.content}</p>
            {message.citations && message.citations.length > 0 && (
              <div className="citations">
                <span className="citations-label">Sources:</span>
                {message.citations.map((citation, i) => (
                  <a
                    key={i}
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="citation-link"
                    title={citation.section || citation.source}
                  >
                    [{i + 1}] {citation.source}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className={`ai-chat-enhanced ${compact ? 'compact' : ''}`}>
      {/* Header */}
      <div className="chat-header">
        <div className="header-info">
          <h3>AI Assistant</h3>
          {ai.currentModel && (
            <span className="model-badge">{ai.currentModel}</span>
          )}
        </div>
        <div className="header-actions">
          <select
            value={context.explanationLevel}
            onChange={(e) => context.setExplanationLevel(e.target.value as any)}
            className="level-select"
          >
            <option value="simple">Simple</option>
            <option value="intermediate">Standard</option>
            <option value="advanced">Advanced</option>
            <option value="clinical">Clinical</option>
          </select>
          {messages.length > 0 && (
            <button onClick={handleClearChat} className="clear-btn">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Context Banner */}
      {(structureContext || histologyContext || conditionContext) && (
        <div className="context-banner">
          {structureContext && (
            <span>Viewing: {structureContext.structureName}</span>
          )}
          {histologyContext && (
            <span>Slide: {histologyContext.tissueName}</span>
          )}
          {conditionContext && (
            <span>Topic: {conditionContext.conditionName}</span>
          )}
        </div>
      )}

      {/* Messages */}
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">AI</div>
            <p>Ask me anything about anatomy, physiology, or your health.</p>
            <p className="empty-hint">I can explain structures, conditions, and help you understand medical concepts.</p>
          </div>
        )}

        {messages.map(renderMessage)}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {showSuggestions && messages.length === 0 && suggestedQuestions.length > 0 && (
        <div className="suggestions">
          {suggestedQuestions.map((question, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(question)}
              className="suggestion-btn"
            >
              {question}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="chat-input-container">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="chat-input"
          rows={compact ? 1 : 2}
          disabled={!ai.isAvailable || isTyping}
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!ai.isAvailable || isTyping || !inputValue.trim()}
          className="send-btn"
        >
          {isTyping ? '...' : 'Send'}
        </button>
      </div>

      {/* AI Unavailable */}
      {!ai.isAvailable && (
        <div className="unavailable-banner">
          AI is currently unavailable.
          <button onClick={() => ai.checkHealth()}>Retry</button>
        </div>
      )}

      <style>{`
        .ai-chat-enhanced {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1e1e1e;
          color: #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }

        .ai-chat-enhanced.compact {
          max-height: 400px;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #252525;
          border-bottom: 1px solid #333;
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-info h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }

        .model-badge {
          padding: 2px 8px;
          background: #333;
          border-radius: 4px;
          font-size: 11px;
          color: #888;
        }

        .header-actions {
          display: flex;
          gap: 8px;
        }

        .level-select {
          padding: 4px 8px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          font-size: 12px;
          cursor: pointer;
        }

        .clear-btn {
          padding: 4px 8px;
          background: none;
          border: 1px solid #444;
          border-radius: 4px;
          color: #888;
          font-size: 12px;
          cursor: pointer;
        }

        .clear-btn:hover {
          border-color: #666;
          color: #ccc;
        }

        .context-banner {
          padding: 8px 16px;
          background: rgba(74, 158, 255, 0.1);
          border-bottom: 1px solid rgba(74, 158, 255, 0.2);
          font-size: 12px;
          color: #4a9eff;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          color: #666;
        }

        .empty-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border-radius: 12px;
          color: white;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .empty-state p {
          margin: 0 0 4px 0;
        }

        .empty-hint {
          font-size: 12px;
          color: #555;
        }

        .chat-message {
          display: flex;
          gap: 12px;
        }

        .chat-message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-size: 10px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .chat-message.user .message-avatar {
          background: #333;
          color: #ccc;
        }

        .chat-message.assistant .message-avatar {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          color: white;
        }

        .message-content {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
        }

        .chat-message.user .message-content {
          background: #333;
          border-radius: 12px 12px 4px 12px;
        }

        .chat-message.assistant .message-content {
          background: #252525;
          border-radius: 12px 12px 12px 4px;
        }

        .message-content p {
          margin: 0;
        }

        .loading-dots {
          display: flex;
          gap: 4px;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #666;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .citations {
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid #333;
          font-size: 12px;
        }

        .citations-label {
          color: #888;
          margin-right: 8px;
        }

        .citation-link {
          display: inline-block;
          margin-right: 8px;
          color: #4a9eff;
          text-decoration: none;
        }

        .citation-link:hover {
          text-decoration: underline;
        }

        .suggestions {
          padding: 0 16px 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .suggestion-btn {
          padding: 8px 12px;
          background: #252525;
          border: 1px solid #333;
          border-radius: 16px;
          color: #aaa;
          font-size: 12px;
          cursor: pointer;
        }

        .suggestion-btn:hover {
          background: #2a2a2a;
          border-color: #444;
          color: #ccc;
        }

        .chat-input-container {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          background: #252525;
          border-top: 1px solid #333;
        }

        .chat-input {
          flex: 1;
          padding: 10px 12px;
          background: #1e1e1e;
          border: 1px solid #333;
          border-radius: 8px;
          color: #e0e0e0;
          font-size: 14px;
          resize: none;
          font-family: inherit;
        }

        .chat-input:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .chat-input:disabled {
          opacity: 0.5;
        }

        .send-btn {
          padding: 10px 20px;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 500;
          cursor: pointer;
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .unavailable-banner {
          padding: 8px 16px;
          background: rgba(255, 107, 107, 0.1);
          border-top: 1px solid rgba(255, 107, 107, 0.2);
          font-size: 12px;
          color: #ff6b6b;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .unavailable-banner button {
          padding: 4px 8px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          font-size: 11px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default AIChatEnhanced;
