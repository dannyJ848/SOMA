/**
 * AIContentEnhancer Component
 *
 * A component that can enhance any content display with AI explanations.
 * Provides content enhancement, key point extraction, and related topics.
 */

import { useState, useCallback, useEffect, type ReactNode } from 'react';
import { useAIEnhancement } from '../../hooks/useAIEnhancement';
import { useAISettings } from '../AIProvider';
import type { ExplanationLevel, Citation } from '../types';
import type { EnhancedContent, ContentEnhancementRequest } from '../types-enhanced';

// ============================================================================
// Types
// ============================================================================

interface AIContentEnhancerProps {
  /** The original content to enhance */
  content: string;
  /** Optional topic context for better enhancement */
  topic?: string;
  /** Whether to auto-enhance on mount */
  autoEnhance?: boolean;
  /** Whether to show the enhance button */
  showEnhanceButton?: boolean;
  /** Whether to show key points */
  showKeyPoints?: boolean;
  /** Whether to show related topics */
  showRelatedTopics?: boolean;
  /** Callback when a related topic is clicked */
  onRelatedTopicClick?: (topic: string) => void;
  /** Callback when a citation is clicked */
  onCitationClick?: (citation: Citation) => void;
  /** Custom render for the content */
  renderContent?: (content: string, isEnhanced: boolean) => ReactNode;
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// Level Selector Component
// ============================================================================

function LevelSelector({
  level,
  onChange,
  disabled,
}: {
  level: ExplanationLevel;
  onChange: (level: ExplanationLevel) => void;
  disabled?: boolean;
}) {
  const levels: { value: ExplanationLevel; label: string }[] = [
    { value: 'simple', label: 'Simple' },
    { value: 'intermediate', label: 'Standard' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'clinical', label: 'Clinical' },
  ];

  return (
    <div className="level-selector">
      {levels.map(({ value, label }) => (
        <button
          key={value}
          className={`level-btn ${level === value ? 'active' : ''}`}
          onClick={() => onChange(value)}
          disabled={disabled}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function AIContentEnhancer({
  content,
  topic,
  autoEnhance = false,
  showEnhanceButton = true,
  showKeyPoints = true,
  showRelatedTopics = true,
  onRelatedTopicClick,
  onCitationClick,
  renderContent,
  className = '',
}: AIContentEnhancerProps) {
  const { enhanceContent, isProcessing, error, isAvailable } = useAIEnhancement();
  const { explanationLevel, setExplanationLevel } = useAISettings();

  const [enhanced, setEnhanced] = useState<EnhancedContent | null>(null);
  const [showEnhanced, setShowEnhanced] = useState(false);
  const [targetLevel, setTargetLevel] = useState<ExplanationLevel>(explanationLevel);

  // Handle enhance request
  const handleEnhance = useCallback(async () => {
    if (!isAvailable || isProcessing) return;

    const request: ContentEnhancementRequest = {
      content,
      context: { topic },
      targetLevel,
      includeKeyPoints: showKeyPoints,
      includeRelatedTopics: showRelatedTopics,
    };

    const result = await enhanceContent(request);

    if ('enhancedContent' in result) {
      setEnhanced(result);
      setShowEnhanced(true);
    }
  }, [content, topic, targetLevel, showKeyPoints, showRelatedTopics, enhanceContent, isAvailable, isProcessing]);

  // Auto-enhance on mount if enabled
  useEffect(() => {
    if (autoEnhance && isAvailable && !enhanced) {
      handleEnhance();
    }
  }, [autoEnhance, isAvailable, enhanced, handleEnhance]);

  // Toggle between original and enhanced content
  const toggleView = useCallback(() => {
    setShowEnhanced((prev) => !prev);
  }, []);

  // Current content to display
  const displayContent = showEnhanced && enhanced ? enhanced.enhancedContent : content;

  return (
    <div className={`ai-content-enhancer ${className}`}>
      {/* Controls */}
      <div className="enhancer-controls">
        <LevelSelector
          level={targetLevel}
          onChange={(level) => {
            setTargetLevel(level);
            setExplanationLevel(level);
          }}
          disabled={isProcessing}
        />

        <div className="control-buttons">
          {showEnhanceButton && (
            <button
              className="enhance-btn"
              onClick={handleEnhance}
              disabled={!isAvailable || isProcessing}
            >
              {isProcessing ? 'Enhancing...' : 'Enhance with AI'}
            </button>
          )}

          {enhanced && (
            <button className="toggle-btn" onClick={toggleView}>
              {showEnhanced ? 'Show Original' : 'Show Enhanced'}
            </button>
          )}
        </div>
      </div>

      {/* Error display */}
      {error && (
        <div className="enhancer-error">
          <span className="error-icon">!</span>
          <span>{error}</span>
        </div>
      )}

      {/* Content */}
      <div className={`enhancer-content ${showEnhanced ? 'enhanced' : 'original'}`}>
        {renderContent ? renderContent(displayContent, showEnhanced) : (
          <div className="content-text">{displayContent}</div>
        )}
      </div>

      {/* Summary */}
      {showEnhanced && enhanced?.summary && (
        <div className="enhancer-summary">
          <h4>Summary</h4>
          <p>{enhanced.summary}</p>
        </div>
      )}

      {/* Key Points */}
      {showKeyPoints && showEnhanced && enhanced?.keyPoints && enhanced.keyPoints.length > 0 && (
        <div className="enhancer-key-points">
          <h4>Key Points</h4>
          <ul>
            {enhanced.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Topics */}
      {showRelatedTopics && showEnhanced && enhanced?.relatedTopics && enhanced.relatedTopics.length > 0 && (
        <div className="enhancer-related">
          <h4>Related Topics</h4>
          <div className="related-topics">
            {enhanced.relatedTopics.map((relatedTopic, i) => (
              <button
                key={i}
                className="related-topic-btn"
                onClick={() => onRelatedTopicClick?.(relatedTopic)}
              >
                {relatedTopic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Citations */}
      {showEnhanced && enhanced?.citations && enhanced.citations.length > 0 && (
        <div className="enhancer-citations">
          <h4>Sources</h4>
          <div className="citations-list">
            {enhanced.citations.map((citation) => (
              <a
                key={citation.index}
                href={citation.url || '#'}
                className="citation-link"
                onClick={(e) => {
                  if (!citation.url) e.preventDefault();
                  onCitationClick?.(citation);
                }}
              >
                [{citation.index}] {citation.source}
                {citation.section && <span className="citation-section"> - {citation.section}</span>}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Offline indicator */}
      {!isAvailable && (
        <div className="enhancer-offline">
          AI enhancement is currently unavailable. Content displayed as-is.
        </div>
      )}

      <style>{`
        .ai-content-enhancer {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          background: #1a1a2e;
          border-radius: 12px;
          border: 1px solid #333;
        }

        .enhancer-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .level-selector {
          display: flex;
          gap: 4px;
        }

        .level-btn {
          padding: 6px 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .level-btn:hover:not(:disabled) {
          background: #2a2a4a;
          color: #ccc;
        }

        .level-btn.active {
          background: #4a9eff;
          border-color: #4a9eff;
          color: #fff;
        }

        .level-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .control-buttons {
          display: flex;
          gap: 8px;
        }

        .enhance-btn {
          padding: 8px 16px;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.15s;
        }

        .enhance-btn:hover:not(:disabled) {
          opacity: 0.9;
        }

        .enhance-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .toggle-btn {
          padding: 8px 16px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 6px;
          color: #ccc;
          font-size: 13px;
          cursor: pointer;
        }

        .toggle-btn:hover {
          background: #2a2a4a;
        }

        .enhancer-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border-radius: 6px;
          font-size: 13px;
        }

        .error-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ff6b6b;
          color: #fff;
          border-radius: 50%;
          font-weight: bold;
          font-size: 12px;
        }

        .enhancer-content {
          padding: 16px;
          background: #1e1e30;
          border-radius: 8px;
          border: 1px solid #333;
        }

        .enhancer-content.enhanced {
          border-color: rgba(74, 158, 255, 0.3);
        }

        .content-text {
          font-size: 14px;
          line-height: 1.7;
          color: #e0e0e0;
          white-space: pre-wrap;
        }

        .enhancer-summary,
        .enhancer-key-points,
        .enhancer-related,
        .enhancer-citations {
          padding: 12px;
          background: #1e1e30;
          border-radius: 8px;
          border: 1px solid #333;
        }

        .enhancer-summary h4,
        .enhancer-key-points h4,
        .enhancer-related h4,
        .enhancer-citations h4 {
          margin: 0 0 10px 0;
          font-size: 13px;
          font-weight: 600;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .enhancer-summary p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #ccc;
        }

        .enhancer-key-points ul {
          margin: 0;
          padding-left: 20px;
        }

        .enhancer-key-points li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #ccc;
        }

        .related-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .related-topic-btn {
          padding: 6px 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 16px;
          color: #aaa;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .related-topic-btn:hover {
          background: #2a2a4a;
          border-color: #4a9eff;
          color: #4a9eff;
        }

        .citations-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .citation-link {
          padding: 8px 10px;
          background: #252538;
          border-radius: 6px;
          color: #4a9eff;
          text-decoration: none;
          font-size: 12px;
          display: block;
        }

        .citation-link:hover {
          background: #2a2a4a;
        }

        .citation-section {
          color: #888;
        }

        .enhancer-offline {
          padding: 10px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          border-radius: 6px;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default AIContentEnhancer;
