/**
 * ExportProgress.tsx
 * 
 * Standalone progress indicator for export operations.
 * Shows detailed progress with stage, percentage, and estimated time.
 */

import React, { useEffect, useState } from 'react';
import type { ExportProgress as ExportProgressType, ExportStage } from '../../core/export';

/**
 * Props for ExportProgress
 */
interface ExportProgressProps {
  /** Current progress state */
  progress: ExportProgressType;
  /** Whether to show details */
  showDetails?: boolean;
  /** Custom className */
  className?: string;
  /** Called when user cancels */
  onCancel?: () => void;
  /** Language preference */
  language?: 'es' | 'en';
}

/**
 * Stage icons and descriptions
 */
const STAGE_INFO: Record<ExportStage, { icon: string; color: string }> = {
  preparing: { icon: '📦', color: '#3182ce' },
  collecting: { icon: '📥', color: '#38a169' },
  processing: { icon: '⚙️', color: '#d69e2e' },
  generating: { icon: '📄', color: '#805ad5' },
  encrypting: { icon: '🔐', color: '#e53e3e' },
  finalizing: { icon: '✨', color: '#38a169' },
  complete: { icon: '✅', color: '#276749' },
  error: { icon: '❌', color: '#c53030' },
};

/**
 * Export Progress Component
 */
export const ExportProgress: React.FC<ExportProgressProps> = ({
  progress,
  showDetails = true,
  className = '',
  onCancel,
  language = 'es',
}) => {
  const isSpanish = language === 'es';
  const stageInfo = STAGE_INFO[progress.stage];
  
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Track elapsed time
  useEffect(() => {
    if (progress.stage === 'complete' || progress.stage === 'error') {
      return;
    }
    
    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [progress.stage]);
  
  // Format time
  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };
  
  // Calculate estimated remaining time
  const estimatedRemaining = progress.estimatedTimeRemaining
    ? formatTime(progress.estimatedTimeRemaining)
    : null;
  
  const t = {
    recordsProcessed: isSpanish ? 'Registros procesados' : 'Records processed',
    elapsed: isSpanish ? 'Tiempo transcurrido' : 'Elapsed time',
    estimatedRemaining: isSpanish ? 'Tiempo restante estimado' : 'Estimated time remaining',
    cancel: isSpanish ? 'Cancelar' : 'Cancel',
    complete: isSpanish ? '¡Completado!' : 'Complete!',
    error: isSpanish ? 'Error en la exportación' : 'Export error',
  };
  
  const isComplete = progress.stage === 'complete';
  const isError = progress.stage === 'error';
  const isActive = !isComplete && !isError;
  
  return (
    <div className={`export-progress-container ${className} ${isComplete ? 'complete' : ''} ${isError ? 'error' : ''}`}>
      {/* Stage indicator */}
      <div className="stage-header">
        <div 
          className="stage-icon"
          style={{ backgroundColor: `${stageInfo.color}20`, color: stageInfo.color }}
        >
          {stageInfo.icon}
        </div>
        <div className="stage-info">
          <div className="stage-name" style={{ color: stageInfo.color }}>
            {isSpanish ? progress.messageEs : progress.messageEn}
          </div>
          {isComplete && <div className="stage-status success">{t.complete}</div>}
          {isError && <div className="stage-status error">{t.error}</div>}
        </div>
        
        <div className="stage-percent">
          {progress.percent}%
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="progress-bar-wrapper">
        <div 
          className="progress-bar-track"
          role="progressbar"
          aria-valuenow={progress.percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div 
            className={`progress-bar-fill ${isActive ? 'animated' : ''}`}
            style={{ 
              width: `${progress.percent}%`,
              backgroundColor: stageInfo.color,
            }}
          />
        </div>
        
        {isActive && (
          <div className="progress-shimmer"></div>
        )}
      </div>
      
      {/* Details */}
      {showDetails && (
        <div className="progress-details">
          <div className="detail-item">
            <span className="detail-label">{t.recordsProcessed}</span>
            <span className="detail-value">
              {progress.processedCount.toLocaleString()} / {progress.totalCount.toLocaleString()}
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">{t.elapsed}</span>
            <span className="detail-value">{formatTime(elapsedTime)}</span>
          </div>
          
          {estimatedRemaining && isActive && (
            <div className="detail-item">
              <span className="detail-label">{t.estimatedRemaining}</span>
              <span className="detail-value">{estimatedRemaining}</span>
            </div>
          )}
        </div>
      )}
      
      {/* Error message */}
      {isError && progress.error && (
        <div className="error-message">
          {progress.error}
        </div>
      )}
      
      {/* Cancel button */}
      {isActive && onCancel && (
        <button 
          className="cancel-button"
          onClick={onCancel}
        >
          {t.cancel}
        </button>
      )}
      
      <style>{`
        .export-progress-container {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .export-progress-container.complete {
          border-color: #9ae6b4;
          background: #f0fff4;
        }
        
        .export-progress-container.error {
          border-color: #fc8181;
          background: #fff5f5;
        }
        
        .stage-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .stage-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
        }
        
        .stage-info {
          flex: 1;
        }
        
        .stage-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .stage-status {
          font-size: 14px;
          font-weight: 500;
        }
        
        .stage-status.success {
          color: #38a169;
        }
        
        .stage-status.error {
          color: #e53e3e;
        }
        
        .stage-percent {
          font-size: 28px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .progress-bar-wrapper {
          position: relative;
          margin-bottom: 20px;
        }
        
        .progress-bar-track {
          height: 12px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }
        
        .progress-bar-fill {
          height: 100%;
          border-radius: 6px;
          transition: width 0.3s ease;
        }
        
        .progress-bar-fill.animated {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .progress-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .progress-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          padding: 16px;
          background: #f7fafc;
          border-radius: 12px;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .detail-label {
          font-size: 12px;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .detail-value {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
        }
        
        .error-message {
          margin-top: 16px;
          padding: 12px 16px;
          background: #fed7d7;
          color: #c53030;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .cancel-button {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          background: #edf2f7;
          color: #4a5568;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .cancel-button:hover {
          background: #e2e8f0;
        }
      `}
      </style>
    </div>
  );
};

export default ExportProgress;
