/**
 * AI-Enhanced Histology Panel
 *
 * AI features for the histology viewer including:
 * - "What am I looking at?" explanations
 * - AI annotation assistance
 * - Quiz generation for tissue identification
 * - Differential diagnosis suggestions
 */

import { useState, useCallback } from 'react';
import { useHistologyAI } from '../useAI';
import AIExplainer from './AIExplainer';
import { AIQuiz as AIQuizComponent } from './AIQuiz';
import type { HistologyContext, ExplanationLevel } from '../types';

interface HistologyImage {
  id: string;
  title: string;
  tissueCategory: string;
  tissueSubtype?: string;
  organSource: string;
  stain: string;
  magnification: string;
  description: string;
  keyFeatures: string[];
}

interface AIHistologyPanelProps {
  image: HistologyImage;
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
  onStructureClick?: (structureId: string) => void;
  onNavigateToAnatomy?: (structureId: string) => void;
}

// Map complexity level to explanation level
const LEVEL_MAP: Record<number, ExplanationLevel> = {
  1: 'simple',
  2: 'simple',
  3: 'intermediate',
  4: 'advanced',
  5: 'clinical',
};

type ViewMode = 'idle' | 'explain' | 'quiz' | 'annotate' | 'differential';

export function AIHistologyPanel({
  image,
  complexityLevel = 3,
  onStructureClick,
  onNavigateToAnatomy,
}: AIHistologyPanelProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('idle');
  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>();

  // Build histology context for AI
  const histologyContext: HistologyContext = {
    slideId: image.id,
    tissueName: image.title,
    stain: image.stain,
    magnification: image.magnification,
    organSource: image.organSource,
    keyFeatures: image.keyFeatures,
  };

  // Use histology AI hook
  const ai = useHistologyAI(histologyContext);

  // Handle "What am I looking at?" button
  const handleWhatAmILookingAt = useCallback(() => {
    setCurrentQuestion(`I'm looking at a histology slide of ${image.title} stained with ${image.stain} at ${image.magnification} magnification. What am I looking at? Describe the key features I should be able to identify.`);
    setViewMode('explain');
  }, [image]);

  // Handle annotation help
  const handleAnnotationHelp = useCallback(() => {
    setCurrentQuestion(`Help me annotate this ${image.tissueCategory} tissue slide. What are the key structures and features I should label?`);
    setViewMode('annotate');
  }, [image.tissueCategory]);

  // Handle quiz generation
  const handleGenerateQuiz = useCallback(() => {
    setViewMode('quiz');
  }, []);

  // Handle differential diagnosis
  const handleDifferential = useCallback(() => {
    setCurrentQuestion(`What pathological conditions might show similar histological features to normal ${image.tissueCategory} tissue? What microscopic changes would I look for to differentiate them?`);
    setViewMode('differential');
  }, [image.tissueCategory]);

  // Handle suggested question
  const handleAskQuestion = useCallback((question: string) => {
    setCurrentQuestion(question);
    setViewMode('explain');
  }, []);

  // Close current view
  const handleClose = useCallback(() => {
    setViewMode('idle');
    setCurrentQuestion(undefined);
  }, []);

  // Get suggested questions
  const suggestedQuestions = ai.suggestedQuestions;

  return (
    <div className="ai-histology-panel">
      {/* Header */}
      <div className="panel-header">
        <h3>AI Assistant</h3>
        {ai.isAvailable && <span className="ai-status">Ready</span>}
      </div>

      {/* AI Actions */}
      {viewMode === 'idle' && ai.isAvailable && (
        <div className="ai-actions">
          <button
            className="ai-action-btn primary"
            onClick={handleWhatAmILookingAt}
          >
            <span className="btn-icon">?</span>
            What am I looking at?
          </button>

          <button
            className="ai-action-btn"
            onClick={handleAnnotationHelp}
          >
            <span className="btn-icon">T</span>
            Help me annotate
          </button>

          <button
            className="ai-action-btn"
            onClick={handleGenerateQuiz}
          >
            <span className="btn-icon">Q</span>
            Test my knowledge
          </button>

          {complexityLevel >= 4 && (
            <button
              className="ai-action-btn clinical"
              onClick={handleDifferential}
            >
              <span className="btn-icon">Dx</span>
              Differential diagnosis
            </button>
          )}
        </div>
      )}

      {/* AI Explainer */}
      {(viewMode === 'explain' || viewMode === 'annotate' || viewMode === 'differential') && (
        <div className="ai-content">
          <AIExplainer
            mode="histology"
            histologyContext={histologyContext}
            initialQuestion={currentQuestion}
            showLevelToggle={true}
            compact={true}
            onClose={handleClose}
          />
        </div>
      )}

      {/* AI Quiz */}
      {viewMode === 'quiz' && (
        <div className="ai-content">
          <AIQuizComponent
            topic={image.title}
            context={histologyContext}
            difficulty={complexityLevel <= 2 ? 'easy' : complexityLevel >= 4 ? 'hard' : 'medium'}
            onComplete={(score: number, total: number) => {
              console.log(`Quiz completed with score: ${score}/${total}`);
            }}
            onClose={handleClose}
          />
        </div>
      )}

      {/* Suggested Questions */}
      {viewMode === 'idle' && ai.isAvailable && suggestedQuestions.length > 0 && (
        <div className="suggested-questions">
          <h4>Quick Questions</h4>
          <div className="questions-list">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                className="question-btn"
                onClick={() => handleAskQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tissue Info Summary */}
      {viewMode === 'idle' && (
        <div className="tissue-summary">
          <h4>Current Slide</h4>
          <div className="summary-details">
            <div className="detail-row">
              <span className="label">Tissue:</span>
              <span className="value">{image.tissueCategory}</span>
            </div>
            <div className="detail-row">
              <span className="label">Stain:</span>
              <span className="value">{image.stain}</span>
            </div>
            <div className="detail-row">
              <span className="label">Source:</span>
              <span className="value">{image.organSource}</span>
            </div>
          </div>
          {onNavigateToAnatomy && (
            <button
              className="anatomy-link"
              onClick={() => onNavigateToAnatomy(image.organSource)}
            >
              View in 3D Anatomy
            </button>
          )}
        </div>
      )}

      {/* AI Unavailable */}
      {!ai.isAvailable && (
        <div className="ai-unavailable">
          <p>AI features are currently unavailable.</p>
          <button onClick={() => ai.checkHealth()}>
            Retry Connection
          </button>
        </div>
      )}

      <style>{`
        .ai-histology-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          background: #222;
          border-radius: 8px;
          color: #e0e0e0;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }

        .ai-status {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border-radius: 4px;
        }

        .ai-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ai-action-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #2a2a2a;
          border: 1px solid #333;
          border-radius: 6px;
          color: #ccc;
          cursor: pointer;
          font-size: 13px;
          text-align: left;
          transition: all 0.2s;
        }

        .ai-action-btn:hover {
          background: #333;
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

        .ai-action-btn.clinical {
          border-color: rgba(255, 193, 7, 0.3);
          background: rgba(255, 193, 7, 0.1);
        }

        .ai-action-btn.clinical:hover {
          background: rgba(255, 193, 7, 0.15);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }

        .ai-action-btn.primary .btn-icon {
          background: rgba(255, 255, 255, 0.2);
        }

        .ai-content {
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .suggested-questions h4,
        .tissue-summary h4 {
          margin: 0 0 8px 0;
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .question-btn {
          padding: 8px 10px;
          background: #2a2a2a;
          border: 1px solid #333;
          border-radius: 4px;
          color: #aaa;
          cursor: pointer;
          text-align: left;
          font-size: 12px;
        }

        .question-btn:hover {
          background: #333;
          color: #ccc;
        }

        .tissue-summary {
          padding-top: 12px;
          border-top: 1px solid #333;
        }

        .summary-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }

        .detail-row .label {
          color: #666;
        }

        .detail-row .value {
          color: #ccc;
        }

        .anatomy-link {
          width: 100%;
          padding: 8px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #4a9eff;
          cursor: pointer;
          font-size: 12px;
        }

        .anatomy-link:hover {
          background: #3a3a3a;
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
          font-size: 13px;
        }

        .ai-unavailable button {
          padding: 8px 16px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          font-size: 12px;
        }

        .ai-unavailable button:hover {
          background: #444;
        }
      `}</style>
    </div>
  );
}

export default AIHistologyPanel;
