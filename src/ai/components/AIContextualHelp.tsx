/**
 * AIContextualHelp Component
 *
 * A floating help button that uses context to answer questions.
 * Integrates with the current view and journey context.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAIChat } from '../../hooks/useAIChat';
import { useAIContext as useAIIntegrationContext, AIIntegrationProvider } from '../../hooks/useAIContext';
import type { Citation, DashboardData } from '../types';
import type { ViewContext, UserContext, ContextualHelpResponse } from '../types-enhanced';

// ============================================================================
// Types
// ============================================================================

interface AIContextualHelpProps {
  /** Current view context */
  viewContext?: ViewContext;
  /** User context */
  userContext?: UserContext;
  /** Health data for personalization */
  healthData?: DashboardData | null;
  /** Position of the floating button */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Callback when an action is suggested */
  onAction?: (action: string, targetView?: string) => void;
  /** Callback when a citation is clicked */
  onCitationClick?: (citation: Citation) => void;
  /** Initial collapsed state */
  initialCollapsed?: boolean;
  /** Custom CSS class */
  className?: string;
}

// ============================================================================
// Inner Component (uses context)
// ============================================================================

function AIContextualHelpInner({
  viewContext,
  userContext,
  healthData,
  position = 'bottom-right',
  onAction,
  onCitationClick,
  initialCollapsed = true,
  className = '',
}: AIContextualHelpProps) {
  const [isOpen, setIsOpen] = useState(!initialCollapsed);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<ContextualHelpResponse | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const { askContextualHelp, isTyping, error, isAvailable, suggestedQuestions } = useAIChat({
    viewContext,
    userContext,
    healthData,
  });

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        // Don't close if clicking the toggle button
        const target = event.target as HTMLElement;
        if (target.closest('.help-toggle-btn')) return;
        // Keep open if there's a response
        if (response) return;
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, response]);

  // Toggle panel
  const togglePanel = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setResponse(null);
      setQuestion('');
    }
  }, [isOpen]);

  // Handle submit
  const handleSubmit = useCallback(async () => {
    if (!question.trim() || isTyping || !isAvailable) return;

    try {
      const result = await askContextualHelp(question);
      setResponse(result);
      setQuestion('');
    } catch (err) {
      // Error is handled in the hook
    }
  }, [question, isTyping, isAvailable, askContextualHelp]);

  // Handle suggested question click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuestion(suggestion);
    // Auto-submit
    setTimeout(() => {
      handleSubmit();
    }, 0);
  }, [handleSubmit]);

  // Handle key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  // Handle action click
  const handleActionClick = useCallback((action: string, targetView?: string) => {
    onAction?.(action, targetView);
    setIsOpen(false);
  }, [onAction]);

  // Clear response
  const handleClear = useCallback(() => {
    setResponse(null);
    setQuestion('');
    inputRef.current?.focus();
  }, []);

  // Position styles
  const positionStyles: Record<string, React.CSSProperties> = {
    'bottom-right': { bottom: 20, right: 20 },
    'bottom-left': { bottom: 20, left: 20 },
    'top-right': { top: 20, right: 20 },
    'top-left': { top: 20, left: 20 },
  };

  return (
    <div
      className={`ai-contextual-help ${className}`}
      style={positionStyles[position]}
    >
      {/* Toggle Button */}
      <button
        className={`help-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={togglePanel}
        title="AI Help"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        )}
      </button>

      {/* Help Panel */}
      {isOpen && (
        <div ref={panelRef} className="help-panel">
          {/* Header */}
          <div className="help-header">
            <h3>AI Assistant</h3>
            {viewContext?.selectedEntity && (
              <span className="context-badge">
                {viewContext.selectedEntity.name}
              </span>
            )}
          </div>

          {/* Response Area */}
          {response && (
            <div className="help-response">
              <div className="response-content">{response.content}</div>

              {/* Citations */}
              {response.citations && response.citations.length > 0 && (
                <div className="response-citations">
                  {response.citations.map((citation) => (
                    <button
                      key={citation.index}
                      className="citation-btn"
                      onClick={() => onCitationClick?.(citation)}
                    >
                      [{citation.index}] {citation.source}
                    </button>
                  ))}
                </div>
              )}

              {/* Follow-up suggestions */}
              {response.suggestedFollowUps && response.suggestedFollowUps.length > 0 && (
                <div className="follow-ups">
                  <span className="follow-ups-label">You might also ask:</span>
                  {response.suggestedFollowUps.map((followUp, i) => (
                    <button
                      key={i}
                      className="follow-up-btn"
                      onClick={() => handleSuggestionClick(followUp)}
                    >
                      {followUp}
                    </button>
                  ))}
                </div>
              )}

              {/* Related actions */}
              {response.relatedActions && response.relatedActions.length > 0 && (
                <div className="related-actions">
                  {response.relatedActions.map((action, i) => (
                    <button
                      key={i}
                      className="action-btn"
                      onClick={() => handleActionClick(action.action, action.targetView)}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              <button className="clear-btn" onClick={handleClear}>
                Ask another question
              </button>
            </div>
          )}

          {/* Loading */}
          {isTyping && (
            <div className="help-loading">
              <span className="loading-dots">
                <span></span><span></span><span></span>
              </span>
              Thinking...
            </div>
          )}

          {/* Error */}
          {error && !response && (
            <div className="help-error">
              {error}
            </div>
          )}

          {/* Input Area (when no response) */}
          {!response && !isTyping && (
            <>
              {/* Suggestions */}
              {suggestedQuestions.length > 0 && !question && (
                <div className="help-suggestions">
                  <span className="suggestions-label">Try asking:</span>
                  {suggestedQuestions.map((suggestion, i) => (
                    <button
                      key={i}
                      className="suggestion-btn"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="help-input">
                <input
                  ref={inputRef}
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  disabled={!isAvailable}
                />
                <button
                  className="send-btn"
                  onClick={handleSubmit}
                  disabled={!question.trim() || isTyping || !isAvailable}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </>
          )}

          {/* Offline notice */}
          {!isAvailable && (
            <div className="help-offline">
              AI is unavailable. Please check your connection.
            </div>
          )}
        </div>
      )}

      <style>{`
        .ai-contextual-help {
          position: fixed;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .help-toggle-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(74, 158, 255, 0.4);
          transition: all 0.2s;
        }

        .help-toggle-btn:hover {
          transform: scale(1.05);
        }

        .help-toggle-btn.open {
          background: #333;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .help-panel {
          width: 360px;
          max-height: 500px;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .help-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #252538;
          border-bottom: 1px solid #333;
        }

        .help-header h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
        }

        .context-badge {
          padding: 4px 10px;
          background: rgba(74, 158, 255, 0.1);
          color: #4a9eff;
          border-radius: 12px;
          font-size: 11px;
        }

        .help-response {
          padding: 16px;
          overflow-y: auto;
          flex: 1;
        }

        .response-content {
          font-size: 14px;
          line-height: 1.6;
          color: #e0e0e0;
          white-space: pre-wrap;
        }

        .response-citations {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #333;
        }

        .citation-btn {
          padding: 4px 8px;
          background: #252538;
          border: none;
          border-radius: 4px;
          color: #4a9eff;
          font-size: 11px;
          cursor: pointer;
        }

        .citation-btn:hover {
          background: #2a2a4a;
        }

        .follow-ups {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .follow-ups-label {
          font-size: 11px;
          color: #888;
        }

        .follow-up-btn {
          padding: 8px 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #ccc;
          font-size: 12px;
          text-align: left;
          cursor: pointer;
        }

        .follow-up-btn:hover {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .related-actions {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .action-btn {
          padding: 8px 14px;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          border-radius: 6px;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
        }

        .action-btn:hover {
          opacity: 0.9;
        }

        .clear-btn {
          width: 100%;
          margin-top: 12px;
          padding: 8px;
          background: none;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          font-size: 12px;
          cursor: pointer;
        }

        .clear-btn:hover {
          background: #252538;
          color: #ccc;
        }

        .help-loading {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #888;
          font-size: 14px;
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
          animation: loading-bounce 1.4s infinite ease-in-out both;
        }

        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes loading-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .help-error {
          padding: 16px;
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          font-size: 13px;
          text-align: center;
        }

        .help-suggestions {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suggestions-label {
          font-size: 12px;
          color: #888;
        }

        .suggestion-btn {
          padding: 10px 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #ccc;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          transition: all 0.15s;
        }

        .suggestion-btn:hover {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .help-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          background: #252538;
          border-top: 1px solid #333;
        }

        .help-input input {
          flex: 1;
          padding: 10px 14px;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          outline: none;
        }

        .help-input input:focus {
          border-color: #4a9eff;
        }

        .help-input input::placeholder {
          color: #666;
        }

        .send-btn {
          width: 40px;
          height: 40px;
          background: #4a9eff;
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .send-btn:hover:not(:disabled) {
          background: #3a8eef;
        }

        .send-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }

        .help-offline {
          padding: 12px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// Main Component (with provider wrapper)
// ============================================================================

export function AIContextualHelp(props: AIContextualHelpProps) {
  return (
    <AIIntegrationProvider
      initialView={props.viewContext?.currentView}
      dashboardData={props.healthData}
    >
      <AIContextualHelpInner {...props} />
    </AIIntegrationProvider>
  );
}

export default AIContextualHelp;
