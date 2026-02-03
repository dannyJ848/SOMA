/**
 * AI-Enhanced Structure Info Panel
 *
 * Wraps the StructureInfoPanel with AI capabilities including:
 * - AI explanations at different complexity levels
 * - Context-aware suggested questions
 * - Voice-guided tours (placeholder)
 * - Health comparisons (healthy vs diseased)
 */

import { useState, useCallback } from 'react';
import { useAnatomyAI } from '../useAI';
import { AIExplainer } from './AIExplainer';
import type { StructureContext, ExplanationLevel } from '../types';

interface AIStructurePanelProps {
  structureId: string;
  structureName: string;
  system?: string;
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
  onClose?: () => void;
  onSelectStructure?: (id: string) => void;
  onViewInIsolation?: () => void;
  onViewHistology?: (histologyId: string) => void;
  onViewEducation?: () => void;
  onNavigateToChat?: () => void;
}

// Map complexity level to explanation level
const LEVEL_MAP: Record<number, ExplanationLevel> = {
  1: 'simple',
  2: 'simple',
  3: 'intermediate',
  4: 'advanced',
  5: 'clinical',
};

export function AIStructurePanel({
  structureId,
  structureName,
  system = 'General',
  complexityLevel = 3,
  onClose,
  onSelectStructure,
  onViewInIsolation,
  onViewHistology,
  onViewEducation,
  onNavigateToChat,
}: AIStructurePanelProps) {
  const [showAIExplainer, setShowAIExplainer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>();

  // Build structure context for AI
  const structureContext: StructureContext = {
    structureId,
    structureName,
    system,
  };

  // Use anatomy AI hook
  const ai = useAnatomyAI(structureContext);

  // Handle AI question
  const handleAskAI = useCallback((question: string) => {
    setCurrentQuestion(question);
    setShowAIExplainer(true);
  }, []);

  // Handle "What am I looking at?" button
  const handleWhatAmILookingAt = useCallback(() => {
    handleAskAI(`What is the ${structureName} and what is its function?`);
  }, [structureName, handleAskAI]);

  // Handle comparison request
  const handleCompareHealthy = useCallback(() => {
    handleAskAI(`Compare a healthy ${structureName} to one affected by common conditions. What changes occur?`);
  }, [structureName, handleAskAI]);

  // Get suggested questions
  const suggestedQuestions = ai.suggestedQuestions;

  return (
    <div className="ai-structure-panel">
      {/* Header */}
      <div className="panel-header">
        <div className="header-info">
          <h2>{structureName}</h2>
          <div className="header-tags">
            <span className="system-tag">{system}</span>
            {ai.isAvailable && (
              <span className="ai-badge">AI Ready</span>
            )}
          </div>
        </div>
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        )}
      </div>

      <div className="panel-content">
        {/* Quick Actions */}
        <div className="quick-actions">
          {onViewInIsolation && (
            <button onClick={onViewInIsolation}>View in Isolation</button>
          )}
          {onViewHistology && (
            <button onClick={() => onViewHistology(structureId)}>
              View Histology
            </button>
          )}
          {onViewEducation && (
            <button onClick={onViewEducation} className="education-btn">
              Education
            </button>
          )}
        </div>

        {/* AI Actions */}
        {ai.isAvailable && (
          <div className="ai-actions">
            <button
              className="ai-action-btn primary"
              onClick={handleWhatAmILookingAt}
            >
              <span className="ai-icon">AI</span>
              What is this?
            </button>
            <button
              className="ai-action-btn"
              onClick={handleCompareHealthy}
            >
              <span className="compare-icon">vs</span>
              Compare Healthy
            </button>
            {onNavigateToChat && (
              <button
                className="ai-action-btn"
                onClick={onNavigateToChat}
              >
                <span className="chat-icon">Chat</span>
                Ask More
              </button>
            )}
          </div>
        )}

        {/* AI Explainer (when active) */}
        {showAIExplainer && (
          <div className="ai-explainer-container">
            <AIExplainer
              mode="anatomy"
              structureContext={structureContext}
              initialQuestion={currentQuestion}
              showLevelToggle={true}
              compact={true}
              onClose={() => setShowAIExplainer(false)}
            />
          </div>
        )}

        {/* Suggested Questions */}
        {!showAIExplainer && ai.isAvailable && suggestedQuestions.length > 0 && (
          <div className="suggested-questions">
            <h3>Ask AI about this structure</h3>
            <div className="questions-list">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="question-btn"
                  onClick={() => handleAskAI(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Related Structures */}
        <div className="related-section">
          <h3>Related Structures</h3>
          <p className="placeholder-text">
            Select related structures in the 3D view or use AI to discover connections.
          </p>
          {onSelectStructure && (
            <button
              className="discover-btn"
              onClick={() => handleAskAI(`What structures are related to the ${structureName}? How do they work together?`)}
            >
              Discover Related Structures
            </button>
          )}
        </div>

        {/* AI Unavailable Notice */}
        {!ai.isAvailable && (
          <div className="ai-unavailable">
            <p>AI features are currently unavailable.</p>
            <button onClick={() => ai.checkHealth()}>
              Check Connection
            </button>
          </div>
        )}
      </div>

      <style>{`
        .ai-structure-panel {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1e1e1e;
          color: #e0e0e0;
          border-left: 1px solid #333;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px;
          background: #252525;
          border-bottom: 1px solid #333;
        }

        .header-info h2 {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
        }

        .header-tags {
          display: flex;
          gap: 8px;
        }

        .system-tag {
          background: #333;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          color: #4a9eff;
        }

        .ai-badge {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          color: white;
          font-weight: 500;
        }

        .close-btn {
          background: none;
          border: none;
          color: #888;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }

        .close-btn:hover {
          color: #fff;
        }

        .panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .quick-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .quick-actions button {
          flex: 1;
          padding: 8px 12px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          font-size: 13px;
        }

        .quick-actions button:hover {
          background: #444;
        }

        .quick-actions .education-btn {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          color: white;
          font-weight: 500;
        }

        .ai-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
          padding: 12px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(74, 158, 255, 0.2);
        }

        .ai-action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: #252525;
          border: 1px solid #333;
          border-radius: 6px;
          color: #ccc;
          cursor: pointer;
          font-size: 14px;
          text-align: left;
        }

        .ai-action-btn:hover {
          background: #2a2a2a;
          border-color: #444;
        }

        .ai-action-btn.primary {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          color: white;
          font-weight: 500;
        }

        .ai-action-btn.primary:hover {
          opacity: 0.9;
        }

        .ai-icon, .compare-icon, .chat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-size: 10px;
          font-weight: bold;
        }

        .ai-action-btn.primary .ai-icon {
          background: rgba(255, 255, 255, 0.2);
        }

        .ai-explainer-container {
          margin-bottom: 16px;
        }

        .suggested-questions {
          margin-bottom: 16px;
        }

        .suggested-questions h3 {
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 12px 0;
        }

        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .question-btn {
          padding: 10px 12px;
          background: #252525;
          border: 1px solid #333;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          font-size: 13px;
        }

        .question-btn:hover {
          background: #2a2a2a;
          border-color: #444;
        }

        .related-section {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #333;
        }

        .related-section h3 {
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 8px 0;
        }

        .placeholder-text {
          font-size: 13px;
          color: #666;
          margin-bottom: 12px;
        }

        .discover-btn {
          width: 100%;
          padding: 10px 12px;
          background: #252525;
          border: 1px solid #333;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          font-size: 13px;
        }

        .discover-btn:hover {
          background: #2a2a2a;
          border-color: #444;
        }

        .ai-unavailable {
          padding: 16px;
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.2);
          border-radius: 8px;
          text-align: center;
        }

        .ai-unavailable p {
          margin: 0 0 12px 0;
          color: #ff6b6b;
        }

        .ai-unavailable button {
          padding: 8px 16px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
        }

        .ai-unavailable button:hover {
          background: #444;
        }
      `}</style>
    </div>
  );
}

export default AIStructurePanel;
