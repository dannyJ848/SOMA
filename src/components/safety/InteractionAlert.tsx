/**
 * Interaction Alert Component
 * Visual warning cards for displaying drug interactions
 */

import React from 'react';
import { InteractionAlert, AlertSummary, getSeverityColor, getSeverityIcon, generatePlainLanguageExplanation } from '../../../core/safety/drug-interactions/alerts';
import './InteractionAlert.css';

interface InteractionAlertProps {
  alert: InteractionAlert;
  onDismiss?: (alertId: string) => void;
  onResolve?: (alertId: string) => void;
  expanded?: boolean;
}

export const InteractionAlertCard: React.FC<InteractionAlertProps> = ({
  alert,
  onDismiss,
  onResolve,
  expanded = false
}) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const explanation = generatePlainLanguageExplanation(alert.details as any);

  const severityStyles = {
    contraindicated: { borderColor: '#7f1d1d', backgroundColor: '#fef2f2' },
    major: { borderColor: '#ef4444', backgroundColor: '#fef2f2' },
    moderate: { borderColor: '#f59e0b', backgroundColor: '#fffbeb' },
    minor: { borderColor: '#3b82f6', backgroundColor: '#eff6ff' }
  };

  const severityClass = `alert-card alert-${alert.severity}`;

  return (
    <div 
      className={severityClass}
      style={{
        borderLeft: `4px solid ${getSeverityColor(alert.severity)}`,
        ...severityStyles[alert.severity]
      }}
    >
      <div className="alert-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="alert-title-row">
          <span className="alert-icon">{getSeverityIcon(alert.severity)}</span>
          <span className="alert-title">{alert.title}</span>
          <span className={`alert-badge alert-badge-${alert.severity}`}>
            {alert.severity.toUpperCase()}
          </span>
        </div>
        <div className="alert-message">{alert.message}</div>
        <div className="alert-meta">
          <span>Onset: {alert.onset}</span>
          <span>Evidence: {alert.evidenceLevel}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="alert-details">
          <div className="alert-section">
            <h4>What's Happening</h4>
            <p>{explanation.mechanismExplained}</p>
          </div>

          <div className="alert-section">
            <h4>What Could Happen</h4>
            <ul>
              {alert.details.whatCouldHappen.map((effect, i) => (
                <li key={i}>{effect}</li>
              ))}
            </ul>
          </div>

          <div className="alert-section">
            <h4>What You Should Do</h4>
            <ul>
              {alert.details.whatToDo.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </div>

          {alert.details.monitoringRequired && alert.details.monitoringRequired.length > 0 && (
            <div className="alert-section">
              <h4>Monitoring Required</h4>
              <ul>
                {alert.details.monitoringRequired.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {alert.details.alternatives && alert.details.alternatives.length > 0 && (
            <div className="alert-section">
              <h4>Possible Alternatives</h4>
              <ul>
                {alert.details.alternatives.map((alt, i) => (
                  <li key={i}>{alt}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="alert-section alert-ask-doctor">
            <h4>🩺 Ask Your Doctor About</h4>
            <ul>
              {alert.details.askYourDoctor.map((question, i) => (
                <li key={i}>{question}</li>
              ))}
            </ul>
          </div>

          <div className="alert-section">
            <h4>When to Seek Help</h4>
            <ul>
              {explanation.whenToSeekHelp.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="alert-actions">
            {onDismiss && (
              <button 
                className="btn btn-secondary"
                onClick={() => onDismiss(alert.id)}
              >
                Acknowledge
              </button>
            )}
            {onResolve && (
              <button 
                className="btn btn-primary"
                onClick={() => onResolve(alert.id)}
              >
                Mark Resolved
              </button>
            )}
          </div>
        </div>
      )}

      <button 
        className="alert-expand-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

interface AlertSummaryProps {
  summary: AlertSummary;
  onViewDetails?: () => void;
}

export const AlertSummaryCard: React.FC<AlertSummaryProps> = ({ summary, onViewDetails }) => {
  if (summary.totalAlerts === 0) {
    return (
      <div className="alert-summary alert-summary-safe">
        <div className="alert-summary-icon">✅</div>
        <div className="alert-summary-content">
          <h3>No Interactions Detected</h3>
          <p>Your medications appear safe together.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`alert-summary ${summary.immediateActionRequired ? 'alert-summary-critical' : ''}`}>
      <div className="alert-summary-stats">
        {summary.criticalCount > 0 && (
          <div className="stat stat-critical">
            <span className="stat-number">{summary.criticalCount}</span>
            <span className="stat-label">Critical</span>
          </div>
        )}
        {summary.warningCount > 0 && (
          <div className="stat stat-warning">
            <span className="stat-number">{summary.warningCount}</span>
            <span className="stat-label">Warnings</span>
          </div>
        )}
        {summary.infoCount > 0 && (
          <div className="stat stat-info">
            <span className="stat-number">{summary.infoCount}</span>
            <span className="stat-label">Info</span>
          </div>
        )}
      </div>

      <div className="alert-summary-message">
        {summary.immediateActionRequired && (
          <>
            <strong>⚠️ URGENT ACTION REQUIRED</strong>
            <p>Contraindicated combination detected. Do not proceed without medical consultation.</p>
          </>
        )}
        {summary.requiresDoctorApproval && !summary.immediateActionRequired && (
          <>
            <strong>⚠️ Medical Consultation Recommended</strong>
            <p>Major interactions detected. Please consult your doctor.</p>
          </>
        )}
        {!summary.requiresDoctorApproval && summary.warningCount > 0 && (
          <>
            <strong>ℹ️ Review Recommended</strong>
            <p>Moderate interactions detected. Discuss with your pharmacist.</p>
          </>
        )}
        {summary.infoCount > 0 && summary.warningCount === 0 && summary.criticalCount === 0 && (
          <>
            <strong>ℹ️ Minor Interactions</strong>
            <p>Minor interactions detected. Usually no action needed.</p>
          </>
        )}
      </div>

      {onViewDetails && (
        <button className="btn btn-primary" onClick={onViewDetails}>
          View Details
        </button>
      )}
    </div>
  );
};

export default InteractionAlertCard;
