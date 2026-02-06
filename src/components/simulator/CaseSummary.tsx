/**
 * CaseSummary Component
 * 
 * Displays a summary card for a clinical case in the case selection view.
 */

import React from 'react';
import type { ClinicalCase } from '../../../../core/education/simulator/types';
import { COMPLEXITY_LEVELS } from '../../../../core/education/types';

interface CaseSummaryProps {
  caseData: ClinicalCase;
  onSelect: () => void;
  isCompleted?: boolean;
  bestScore?: number;
}

export const CaseSummary: React.FC<CaseSummaryProps> = ({
  caseData,
  onSelect,
  isCompleted = false,
  bestScore,
}) => {
  const complexityInfo = COMPLEXITY_LEVELS[caseData.complexity];
  
  const getSpecialtyLabel = (specialty: string): string => {
    return specialty
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getComplexityColor = (level: number): string => {
    const colors: Record<number, string> = {
      1: '#22c55e',
      2: '#84cc16',
      3: '#eab308',
      4: '#f97316',
      5: '#ef4444',
      6: '#dc2626',
    };
    return colors[level] || '#6b7280';
  };

  return (
    <div className="case-summary-card" onClick={onSelect}>
      <div className="case-header">
        <h3 className="case-title">{caseData.title}</h3>
        
        {isCompleted && (
          <div className="completion-badge">
            {bestScore !== undefined && (
              <span className="best-score">Best: {bestScore}%</span>
            )}
            <span className="completed-label">✓ Completed</span>
          </div>
        )}
      </div>

      <p className="case-description">{caseData.description}</p>

      <div className="case-meta">
        <div className="meta-item">
          <span className="meta-label">Specialty:</span>
          <span className="meta-value specialty-tag">
            {getSpecialtyLabel(caseData.specialty)}
          </span>
        </div>

        <div className="meta-item">
          <span className="meta-label">Complexity:</span>
          <span 
            className="meta-value complexity-badge"
            style={{ backgroundColor: getComplexityColor(caseData.complexity) }}
          >
            {complexityInfo.name} (Level {caseData.complexity})
          </span>
        </div>

        <div className="meta-item">
          <span className="meta-label">Time:</span>
          <span className="meta-value">~{caseData.estimatedTimeMinutes} minutes</span>
        </div>
      </div>

      <div className="learning-objectives">
        <strong>Learning Objectives:</strong>
        <ul>
          {caseData.learningObjectives.slice(0, 3).map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
          {caseData.learningObjectives.length > 3 && (
            <li>+{caseData.learningObjectives.length - 3} more...</li>
          )}
        </ul>
      </div>

      <div className="case-footer">
        <span className="author">By {caseData.author}</span>
        <button className="btn-select">
          {isCompleted ? 'Play Again' : 'Start Case'}
        </button>
      </div>
    </div>
  );
};
