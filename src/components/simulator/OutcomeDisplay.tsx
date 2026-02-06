/**
 * OutcomeDisplay Component
 * 
 * Displays case results, debrief, and feedback.
 */

import React from 'react';
import type { OutcomeNode, CaseScore, MissedOpportunity } from '../../../../core/education/simulator/types';
import { getGradeDescription, getGradeColor } from '../../../../core/education/simulator/scoring';

interface OutcomeDisplayProps {
  outcome: OutcomeNode;
  score: CaseScore;
  missedOpportunities: MissedOpportunity[];
  onRestart: () => void;
  onNextCase?: () => void;
}

export const OutcomeDisplay: React.FC<OutcomeDisplayProps> = ({
  outcome,
  score,
  missedOpportunities,
  onRestart,
  onNextCase,
}) => {
  const getOutcomeClass = (): string => {
    switch (outcome.outcome) {
      case 'success':
        return 'outcome-success';
      case 'partial-success':
        return 'outcome-partial';
      case 'complication':
        return 'outcome-complication';
      case 'failure':
        return 'outcome-failure';
      default:
        return '';
    }
  };

  const getOutcomeLabel = (): string => {
    switch (outcome.outcome) {
      case 'success':
        return 'Successful Outcome';
      case 'partial-success':
        return 'Partial Success';
      case 'complication':
        return 'Complication Occurred';
      case 'failure':
        return 'Unsuccessful Outcome';
      default:
        return 'Case Complete';
    }
  };

  return (
    <div className="outcome-display">
      <div className={`outcome-header ${getOutcomeClass()}`}>
        <div className="outcome-badge">{getOutcomeLabel()}</div>
        <h2>{outcome.title}</h2>
      </div>

      <div className="patient-outcome">
        <h3>Patient Outcome</h3>
        <p>{outcome.patientOutcome}</p>
      </div>

      <div className="score-section">
        <div className="score-header">
          <h3>Your Performance</h3>
        </div>

        <div className="score-overview">
          <div className="score-circle" style={{ borderColor: getGradeColor(score.grade) }}>
            <span className="score-percentage" style={{ color: getGradeColor(score.grade) }}>
              {score.percentage}%
            </span>
            <span className="score-grade" style={{ color: getGradeColor(score.grade) }}>
              {score.grade.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          <div className="score-details">
            <div className="score-row">
              <span className="score-label">Points:</span>
              <span className="score-value">{score.totalPoints} / {score.maxPoints}</span>
            </div>
            
            <div className="score-row">
              <span className="score-label">Optimal Decisions:</span>
              <span className="score-value">{score.optimalDecisions}</span>
            </div>
            
            <div className="score-row">
              <span className="score-label">Acceptable Decisions:</span>
              <span className="score-value">{score.acceptableDecisions}</span>
            </div>
            
            <div className="score-row">
              <span className="score-label">Critical Decisions Correct:</span>
              <span className="score-value">
                {score.criticalDecisionsCorrect} / {score.criticalDecisionsTotal}
              </span>
            </div>
            
            {score.timeBonus > 0 && (
              <div className="score-row bonus">
                <span className="score-label">Time Bonus:</span>
                <span className="score-value">+{score.timeBonus} points</span>
              </div>
            )}
            
            {score.criticalDecisionBonus > 0 && (
              <div className="score-row bonus">
                <span className="score-label">Critical Decision Bonus:</span>
                <span className="score-value">+{score.criticalDecisionBonus} points</span>
              </div>
            )}
          </div>
        </div>

        <div className="grade-description">
          {getGradeDescription(score.grade)}
        </div>
      </div>

      <div className="debrief-section">
        <h3>Case Debrief</h3>
        
        <div className="debrief-content">
          <div className="debrief-summary">
            <strong>Summary:</strong>
            <p>{outcome.debrief.summary}</p>
          </div>

          {outcome.debrief.expertComparison && (
            <div className="expert-comparison">
              <strong>Expert Pathway:</strong>
              <p>{outcome.debrief.expertComparison}</p>
            </div>
          )}
        </div>
      </div>

      {missedOpportunities.length > 0 && (
        <div className="missed-opportunities">
          <h3>Missed Opportunities</h3>
          
          {missedOpportunities.map((missed, idx) => (
            <div key={idx} className="missed-item">
              <div className="missed-question">{missed.question}</div>
              
              <div className="missed-comparison">
                <div className="missed-actual">
                  <strong>You chose:</strong> {missed.whatUserDid}
                </div>
                <div className="missed-optimal">
                  <strong>Optimal choice:</strong> {missed.whatShouldHaveDone}
                </div>
              </div>
              
              <div className="missed-why">
                <strong>Why it matters:</strong>
                <p>{missed.whyItMatters}</p>
              </div>
              
              <div className="missed-learning">
                <strong>💡 Learning Point:</strong>
                <p>{missed.learningPoint}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {outcome.debrief.learningPoints.length > 0 && (
        <div className="learning-points">
          <h3>Key Learning Points</h3>
          
          <ul>
            {outcome.debrief.learningPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {outcome.debrief.resources.length > 0 && (
        <div className="resources">
          <h3>Resources for Further Learning</h3>
          
          <ul>
            {outcome.debrief.resources.map((resource, idx) => (
              <li key={idx}>{resource}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="outcome-actions">
        <button className="btn-primary" onClick={onRestart}>
          Restart Case
        </button>
        
        {onNextCase && (
          <button className="btn-secondary" onClick={onNextCase}>
            Next Case
          </button>
        )}
      </div>
    </div>
  );
};
