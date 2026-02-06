/**
 * DecisionPoint Component
 * 
 * Presents a clinical decision with multiple choice options.
 * Includes feedback and learning points after selection.
 */

import React, { useState, useCallback } from 'react';
import type { DecisionNode, DecisionOption } from '../../../../core/education/simulator/types';

interface DecisionPointProps {
  node: DecisionNode;
  onDecision: (optionId: string, timeSpentSeconds: number) => void;
  isLoading?: boolean;
}

interface FeedbackState {
  selectedOption: DecisionOption;
  isCorrect: boolean;
  isAcceptable: boolean;
  feedback: string;
  learningPoint: string;
}

export const DecisionPoint: React.FC<DecisionPointProps> = ({
  node,
  onDecision,
  isLoading = false,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [startTime] = useState<number>(Date.now());

  const handleOptionSelect = useCallback((option: DecisionOption) => {
    if (feedback) return; // Prevent changing after selection
    
    setSelectedOptionId(option.id);
    
    const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
    
    setFeedback({
      selectedOption: option,
      isCorrect: option.scoring.isOptimal,
      isAcceptable: option.scoring.isAcceptable,
      feedback: option.scoring.isOptimal 
        ? (option.scoring.feedbackCorrect || 'Correct!')
        : (option.scoring.feedbackIncorrect || 'Not the optimal choice.'),
      learningPoint: option.scoring.learningPoint,
    });
    
    onDecision(option.id, timeSpentSeconds);
  }, [feedback, startTime, onDecision]);

  const getOptionClass = (option: DecisionOption): string => {
    const baseClass = 'decision-option';
    
    if (!feedback) {
      return selectedOptionId === option.id 
        ? `${baseClass} selected` 
        : baseClass;
    }
    
    // After feedback
    if (option.scoring.isOptimal) {
      return `${baseClass} optimal`;
    }
    
    if (option.id === selectedOptionId) {
      return option.scoring.isAcceptable 
        ? `${baseClass} acceptable`
        : `${baseClass} incorrect`;
    }
    
    return `${baseClass} disabled`;
  };

  return (
    <div className="decision-point">
      <div className="decision-header">
        <h2>{node.title}</h2>
        {node.timeLimit && (
          <div className="time-limit">
            Time limit: {node.timeLimit} seconds
          </div>
        )}
      </div>

      <div className="decision-narrative">
        {node.narrative}
      </div>

      <div className="decision-question">
        <h3>{node.question}</h3>
      </div>

      <div className="decision-options">
        {node.options.map((option) => (
          <button
            key={option.id}
            className={getOptionClass(option)}
            onClick={() => handleOptionSelect(option)}
            disabled={!!feedback || isLoading}
          >
            <div className="option-text">{option.text}</div>
            
            {feedback && option.id === selectedOptionId && (
              <div className="option-status">
                {option.scoring.isOptimal ? '✓' : option.scoring.isAcceptable ? '○' : '✗'}
              </div>
            )}
          </button>
        ))}
      </div>

      {feedback && (
        <div className={`feedback-panel ${feedback.isCorrect ? 'correct' : feedback.isAcceptable ? 'acceptable' : 'incorrect'}`}>
          <div className="feedback-header">
            <span className="feedback-icon">
              {feedback.isCorrect ? '✓' : feedback.isAcceptable ? '○' : '✗'}
            </span>
            <span className="feedback-title">
              {feedback.isCorrect 
                ? 'Optimal Choice' 
                : feedback.isAcceptable 
                  ? 'Acceptable Choice' 
                  : 'Suboptimal Choice'}
            </span>
          </div>
          
          <div className="feedback-message">
            {feedback.feedback}
          </div>
          
          <div className="learning-point">
            <strong>💡 Learning Point:</strong>
            <p>{feedback.learningPoint}</p>
          </div>
        </div>
      )}
    </div>
  );
};
