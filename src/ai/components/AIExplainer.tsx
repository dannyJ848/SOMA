/**
 * AI Explainer Component
 *
 * Reusable component for AI-powered explanations across the app.
 * Supports multiple explanation contexts: anatomy, histology, conditions.
 */

import { useState, useCallback, useEffect } from 'react';
import { useAI, useAnatomyAI, useHistologyAI, usePatientEducationAI } from '../useAI';
import { useAISettings } from '../AIProvider';
import type {
  StructureContext,
  HistologyContext,
  ConditionContext,
  Citation,
  ExplanationLevel,
} from '../types';

// ============================================================================
// Types
// ============================================================================

type ExplainerMode = 'anatomy' | 'histology' | 'condition' | 'general';

interface AIExplainerProps {
  // Mode determines the type of explanation
  mode: ExplainerMode;

  // Context based on mode
  structureContext?: StructureContext;
  histologyContext?: HistologyContext;
  conditionContext?: ConditionContext;

  // Customization
  initialQuestion?: string;
  showLevelToggle?: boolean;
  showSuggestions?: boolean;
  compact?: boolean;
  className?: string;

  // Callbacks
  onClose?: () => void;
  onCitationClick?: (citation: Citation) => void;
  onStructureNavigate?: (structureId: string) => void;
}

// ============================================================================
// Level Toggle Component
// ============================================================================

const LEVEL_LABELS: Record<ExplanationLevel, { label: string; description: string }> = {
  simple: { label: 'Simple', description: 'Explain like I\'m 5' },
  intermediate: { label: 'Standard', description: 'High school / College level' },
  advanced: { label: 'Advanced', description: 'Graduate level' },
  clinical: { label: 'Clinical', description: 'Healthcare professional' },
};

function LevelToggle({
  level,
  onChange,
}: {
  level: ExplanationLevel;
  onChange: (level: ExplanationLevel) => void;
}) {
  return (
    <div className="ai-level-toggle">
      <span className="toggle-label">Explanation Level:</span>
      <div className="toggle-buttons">
        {(Object.keys(LEVEL_LABELS) as ExplanationLevel[]).map(lvl => (
          <button
            key={lvl}
            className={`level-btn ${level === lvl ? 'active' : ''}`}
            onClick={() => onChange(lvl)}
            title={LEVEL_LABELS[lvl].description}
          >
            {LEVEL_LABELS[lvl].label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Citations Component
// ============================================================================

function CitationsList({
  citations,
  onCitationClick,
}: {
  citations: Citation[];
  onCitationClick?: (citation: Citation) => void;
}) {
  if (citations.length === 0) return null;

  return (
    <div className="ai-citations">
      <div className="citations-header">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span>Sources</span>
      </div>
      <div className="citations-list">
        {citations.map((citation) => (
          <a
            key={citation.index}
            href={citation.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`citation-item ${citation.type || ''}`}
            onClick={(e) => {
              if (!citation.url) e.preventDefault();
              onCitationClick?.(citation);
            }}
          >
            <span className="citation-index">[{citation.index}]</span>
            <span className="citation-source">{citation.source}</span>
            {citation.section && (
              <span className="citation-section">{citation.section}</span>
            )}
            {citation.type === 'pubmed' && (
              <span className="citation-badge">PubMed</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Suggested Questions Component
// ============================================================================

function SuggestedQuestions({
  questions,
  onSelect,
  disabled,
}: {
  questions: string[];
  onSelect: (question: string) => void;
  disabled?: boolean;
}) {
  if (questions.length === 0) return null;

  return (
    <div className="ai-suggestions">
      <span className="suggestions-label">Ask about:</span>
      <div className="suggestions-list">
        {questions.map((question, i) => (
          <button
            key={i}
            onClick={() => onSelect(question)}
            disabled={disabled}
            className="suggestion-btn"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function AIExplainer({
  mode,
  structureContext,
  histologyContext,
  conditionContext,
  initialQuestion,
  showLevelToggle = true,
  showSuggestions = true,
  compact = false,
  className = '',
  onClose,
  onCitationClick,
  onStructureNavigate: _onStructureNavigate,
}: AIExplainerProps) {
  // State
  const [response, setResponse] = useState<{
    content: string;
    citations: Citation[];
  } | null>(null);
  const [input, setInput] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // AI Hooks
  const { explanationLevel, setExplanationLevel } = useAISettings();
  const anatomyAI = useAnatomyAI(structureContext);
  const histologyAI = useHistologyAI(histologyContext);
  const patientAI = usePatientEducationAI();
  const generalAI = useAI();

  // Get appropriate AI and suggestions based on mode
  const ai = mode === 'anatomy' ? anatomyAI :
             mode === 'histology' ? histologyAI :
             mode === 'condition' ? patientAI :
             generalAI;

  const suggestedQuestions = mode === 'anatomy' ? anatomyAI.suggestedQuestions :
                             mode === 'histology' ? histologyAI.suggestedQuestions :
                             [];

  // Get title based on mode
  const getTitle = () => {
    switch (mode) {
      case 'anatomy':
        return `Ask about ${structureContext?.structureName || 'this structure'}`;
      case 'histology':
        return `What am I looking at?`;
      case 'condition':
        return `Learn about ${conditionContext?.conditionName || 'this condition'}`;
      default:
        return 'Ask AI';
    }
  };

  // Handle ask
  const handleAsk = useCallback(async (question?: string) => {
    const q = question || input.trim();
    if (!q) return;

    setIsAsking(true);
    setError(null);
    setInput('');

    try {
      let result;

      switch (mode) {
        case 'anatomy':
          if (!structureContext) throw new Error('Structure context required');
          result = await anatomyAI.explainStructure(structureContext, q);
          break;
        case 'histology':
          if (!histologyContext) throw new Error('Histology context required');
          result = await histologyAI.explainHistology(histologyContext, q);
          break;
        case 'condition':
          if (!conditionContext) throw new Error('Condition context required');
          result = await patientAI.explainCondition(conditionContext, q);
          break;
        default:
          result = await generalAI.ask(q);
      }

      setResponse({
        content: result.content,
        citations: result.citations || [],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response');
    } finally {
      setIsAsking(false);
    }
  }, [
    mode, input, structureContext, histologyContext, conditionContext,
    anatomyAI, histologyAI, patientAI, generalAI
  ]);

  // Handle initial question
  useEffect(() => {
    if (initialQuestion) {
      handleAsk(initialQuestion);
    }
  }, [initialQuestion]); // Only run on mount with initial question

  // Handle key down
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className={`ai-explainer ${compact ? 'compact' : ''} ${className}`}>
      {/* Header */}
      <div className="explainer-header">
        <h3>{getTitle()}</h3>
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Disclaimer */}
      <div className="explainer-disclaimer">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span>Educational information only, not medical advice</span>
      </div>

      {/* Level Toggle */}
      {showLevelToggle && !compact && (
        <LevelToggle level={explanationLevel} onChange={setExplanationLevel} />
      )}

      {/* Response */}
      {response && (
        <div className="explainer-response">
          <div className="response-content">
            {response.content}
          </div>
          <CitationsList
            citations={response.citations}
            onCitationClick={onCitationClick}
          />
        </div>
      )}

      {/* Loading */}
      {isAsking && (
        <div className="explainer-loading">
          <span className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>Thinking...</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="explainer-error">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Suggested Questions */}
      {showSuggestions && !response && !isAsking && (
        <SuggestedQuestions
          questions={suggestedQuestions}
          onSelect={handleAsk}
          disabled={isAsking}
        />
      )}

      {/* Input */}
      <div className="explainer-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
          disabled={isAsking || !ai.isAvailable}
        />
        <button
          onClick={() => handleAsk()}
          disabled={!input.trim() || isAsking || !ai.isAvailable}
          className="send-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>

      {/* AI Unavailable */}
      {!ai.isAvailable && (
        <div className="explainer-unavailable">
          AI is currently unavailable. Please check Ollama is running.
        </div>
      )}

      <style>{`
        .ai-explainer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          background: #1a1a2e;
          border-radius: 12px;
          border: 1px solid #333;
          max-height: 500px;
          overflow: hidden;
        }

        .ai-explainer.compact {
          padding: 12px;
          gap: 8px;
          max-height: 300px;
        }

        .explainer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .explainer-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }

        .close-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: #fff;
        }

        .explainer-disclaimer {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          font-size: 11px;
          border-radius: 6px;
        }

        .ai-level-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
        }

        .toggle-label {
          font-size: 12px;
          color: #888;
        }

        .toggle-buttons {
          display: flex;
          gap: 4px;
        }

        .level-btn {
          padding: 4px 8px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 4px;
          color: #888;
          cursor: pointer;
          font-size: 11px;
          transition: all 0.15s;
        }

        .level-btn:hover {
          background: #2a2a4a;
          color: #ccc;
        }

        .level-btn.active {
          background: #4a9eff;
          border-color: #4a9eff;
          color: #fff;
        }

        .explainer-response {
          flex: 1;
          overflow-y: auto;
          padding-right: 8px;
        }

        .response-content {
          font-size: 14px;
          line-height: 1.6;
          color: #e0e0e0;
          white-space: pre-wrap;
        }

        .ai-citations {
          margin-top: 12px;
          padding: 10px;
          background: #1e1e30;
          border: 1px solid #333;
          border-radius: 8px;
        }

        .citations-header {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #888;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .citations-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .citation-item {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          padding: 6px 8px;
          background: #252538;
          border-radius: 4px;
          text-decoration: none;
          color: inherit;
          font-size: 12px;
          transition: background 0.15s;
        }

        .citation-item:hover {
          background: #2a2a4a;
        }

        .citation-index {
          color: #4a9eff;
          font-weight: 600;
        }

        .citation-source {
          color: #ccc;
        }

        .citation-section {
          color: #888;
          width: 100%;
        }

        .citation-badge {
          padding: 2px 6px;
          background: #2d4a1c;
          color: #8bc34a;
          border-radius: 4px;
          font-size: 10px;
        }

        .explainer-loading {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          color: #888;
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

        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .explainer-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border-radius: 6px;
          font-size: 13px;
        }

        .ai-suggestions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suggestions-label {
          font-size: 12px;
          color: #888;
        }

        .suggestions-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .suggestion-btn {
          padding: 10px 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          font-size: 13px;
          transition: all 0.15s;
        }

        .suggestion-btn:hover:not(:disabled) {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .suggestion-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .explainer-input {
          display: flex;
          gap: 8px;
          padding-top: 8px;
          border-top: 1px solid #333;
        }

        .explainer-input input {
          flex: 1;
          padding: 10px 14px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          outline: none;
        }

        .explainer-input input:focus {
          border-color: #4a9eff;
        }

        .explainer-input input::placeholder {
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
          transition: all 0.15s;
        }

        .send-btn:hover:not(:disabled) {
          background: #3a8eef;
        }

        .send-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }

        .explainer-unavailable {
          padding: 10px;
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border-radius: 6px;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default AIExplainer;
