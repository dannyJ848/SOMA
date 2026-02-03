/**
 * DiseaseTimelinePanel Component
 *
 * Interactive timeline panel for disease progression with phase markers,
 * descriptions, anatomical changes, and 3D viewer synchronization.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type {
  ProgressionStep,
  AnatomicalChange,
  Reversibility,
  DiseaseProgression,
} from '../core/medical-simulation/conditions/types';
import './DiseaseTimelinePanel.css';

// ============================================
// Props
// ============================================

interface DiseaseTimelinePanelProps {
  /** Disease progression data */
  progression: DiseaseProgression;
  /** Currently selected phase index */
  selectedPhaseIndex: number;
  /** Callback when phase changes */
  onPhaseChange: (index: number) => void;
  /** Callback when anatomical change is clicked (for 3D navigation) */
  onAnatomicalChangeClick?: (structureId: string) => void;
  /** Optional label for the condition */
  conditionName?: string;
}

// ============================================
// Reversibility Badge Component
// ============================================

interface ReversibilityBadgeProps {
  reversibility: Reversibility;
  size?: 'small' | 'medium';
}

function ReversibilityBadge({
  reversibility,
  size = 'medium',
}: ReversibilityBadgeProps) {
  const config: Record<Reversibility, { bg: string; text: string; label: string }> = {
    reversible: { bg: '#22c55e22', text: '#22c55e', label: 'Reversible' },
    'partially-reversible': {
      bg: '#f9731622',
      text: '#f97316',
      label: 'Partial',
    },
    irreversible: { bg: '#ef444422', text: '#ef4444', label: 'Irreversible' },
  };

  const style = config[reversibility];

  return (
    <span
      className={`timeline-reversibility-badge ${size}`}
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}

// ============================================
// Severity Badge Component
// ============================================

interface SeverityBadgeProps {
  severity: 'mild' | 'moderate' | 'severe';
}

function SeverityBadge({ severity }: SeverityBadgeProps) {
  const colors: Record<string, string> = {
    mild: '#fbbf24',
    moderate: '#f97316',
    severe: '#ef4444',
  };

  return (
    <span
      className="timeline-severity-badge"
      style={{ backgroundColor: `${colors[severity]}22`, color: colors[severity] }}
    >
      {severity}
    </span>
  );
}

// ============================================
// Phase Marker Component
// ============================================

interface PhaseMarkerProps {
  step: ProgressionStep;
  index: number;
  total: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

function PhaseMarker({
  step,
  index,
  total,
  isActive,
  isCompleted,
  onClick,
}: PhaseMarkerProps) {
  const getPhaseColor = () => {
    if (isActive) return '#22c55e';
    if (isCompleted) return '#3b82f6';
    return '#64748b';
  };

  return (
    <div
      className={`phase-marker-container ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
      onClick={onClick}
    >
      <div className="marker-track">
        <div
          className="marker-dot"
          style={{
            backgroundColor: getPhaseColor(),
            borderColor: getPhaseColor(),
          }}
        >
          <span className="marker-number">{index + 1}</span>
        </div>
        {index < total - 1 && (
          <div
            className="marker-line"
            style={{
              backgroundColor: isCompleted ? '#3b82f6' : '#334155',
            }}
          />
        )}
      </div>
      <div className="marker-label">
        <span className="marker-name">{step.displayName}</span>
        <span className="marker-timeframe">{step.timeframe}</span>
      </div>
    </div>
  );
}

// ============================================
// Anatomical Change Item Component
// ============================================

interface AnatomicalChangeItemProps {
  change: AnatomicalChange;
  onClick: () => void;
}

function AnatomicalChangeItem({ change, onClick }: AnatomicalChangeItemProps) {
  return (
    <button
      className="anatomical-change-item"
      style={{ borderLeftColor: change.visualIndicator.color }}
      onClick={onClick}
      type="button"
    >
      <div className="change-item-header">
        <span
          className="change-color-indicator"
          style={{ backgroundColor: change.visualIndicator.color }}
        />
        <span className="change-structure">{change.structureName}</span>
        {change.isNewAtPhase && <span className="new-indicator">New</span>}
      </div>
      <div className="change-item-content">
        <span className="change-type-label">
          {change.changeType.replace('-', ' ')}
        </span>
        <SeverityBadge severity={change.severity} />
      </div>
      <p className="change-description-text">{change.description}</p>
      <span className="view-in-3d-hint">Click to view in 3D →</span>
    </button>
  );
}

// ============================================
// Phase Detail Card Component
// ============================================

interface PhaseDetailCardProps {
  step: ProgressionStep;
  onAnatomicalChangeClick?: (structureId: string) => void;
}

function PhaseDetailCard({ step, onAnatomicalChangeClick }: PhaseDetailCardProps) {
  return (
    <div className="phase-detail-card">
      <div className="detail-card-header">
        <div className="header-title-section">
          <h3>{step.displayName}</h3>
          <ReversibilityBadge reversibility={step.reversibility} />
        </div>
        <span className="detail-timeframe">{step.timeframe}</span>
      </div>

      <p className="phase-detail-description">{step.description}</p>

      {/* Symptoms Section */}
      <div className="detail-section">
        <h4>Symptoms at this Phase</h4>
        <ul className="symptoms-list">
          {step.symptoms.map((symptom, idx) => (
            <li key={idx}>{symptom}</li>
          ))}
        </ul>
      </div>

      {/* Anatomical Changes Section */}
      {step.anatomicalChanges.length > 0 && (
        <div className="detail-section">
          <h4>Anatomical Changes</h4>
          <div className="anatomical-changes-grid">
            {step.anatomicalChanges.map((change, idx) => (
              <AnatomicalChangeItem
                key={idx}
                change={change}
                onClick={() => onAnatomicalChangeClick?.(change.structureId)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Typical Treatments */}
      {step.typicalTreatments && step.typicalTreatments.length > 0 && (
        <div className="detail-section">
          <h4>Typical Treatments</h4>
          <ul className="treatments-list">
            {step.typicalTreatments.map((treatment, idx) => (
              <li key={idx}>{treatment}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Goals of Care */}
      {step.goalsOfCare && step.goalsOfCare.length > 0 && (
        <div className="detail-section goals-section">
          <h4>Goals of Care</h4>
          <ul className="goals-list">
            {step.goalsOfCare.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ============================================
// Main DiseaseTimelinePanel Component
// ============================================

export default function DiseaseTimelinePanel({
  progression,
  selectedPhaseIndex,
  onPhaseChange,
  onAnatomicalChangeClick,
  conditionName,
}: DiseaseTimelinePanelProps) {
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  const steps = progression.timelineSteps;
  const currentStep = steps[selectedPhaseIndex];

  // Handle slider change
  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newIndex = parseInt(e.target.value, 10);
      onPhaseChange(newIndex);
    },
    [onPhaseChange]
  );

  // Handle drag on timeline track
  const handleTimelineDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!timelineRef.current || steps.length <= 1) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const newIndex = Math.round(percentage * (steps.length - 1));
      onPhaseChange(newIndex);
    },
    [steps.length, onPhaseChange]
  );

  // Mouse event handlers for drag
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      handleTimelineDrag(e);
    },
    [handleTimelineDrag]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) {
        handleTimelineDrag(e);
      }
    },
    [isDragging, handleTimelineDrag]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse up listener when dragging
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseUp = () => setIsDragging(false);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight' && selectedPhaseIndex < steps.length - 1) {
        onPhaseChange(selectedPhaseIndex + 1);
      } else if (e.key === 'ArrowLeft' && selectedPhaseIndex > 0) {
        onPhaseChange(selectedPhaseIndex - 1);
      }
    },
    [selectedPhaseIndex, steps.length, onPhaseChange]
  );

  return (
    <div
      className="disease-timeline-panel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Disease progression timeline"
    >
      {/* Header */}
      <div className="timeline-panel-header">
        <div className="header-text">
          <h3>Disease Progression Timeline</h3>
          {conditionName && <span className="condition-label">{conditionName}</span>}
        </div>
        <div className="phase-counter">
          Phase {selectedPhaseIndex + 1} of {steps.length}
        </div>
      </div>

      {/* Natural History Summary */}
      <p className="natural-history">{progression.naturalHistory}</p>

      {/* Timeline Track - Desktop */}
      <div
        ref={timelineRef}
        className="timeline-track desktop-only"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {steps.map((step, index) => (
          <PhaseMarker
            key={step.phaseId}
            step={step}
            index={index}
            total={steps.length}
            isActive={index === selectedPhaseIndex}
            isCompleted={index < selectedPhaseIndex}
            onClick={() => onPhaseChange(index)}
          />
        ))}
      </div>

      {/* Slider - Mobile */}
      <div className="timeline-slider-container mobile-only">
        <div className="slider-labels">
          {steps.map((step, index) => (
            <span
              key={step.phaseId}
              className={`slider-label ${index === selectedPhaseIndex ? 'active' : ''}`}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <input
          ref={sliderRef}
          type="range"
          min={0}
          max={steps.length - 1}
          value={selectedPhaseIndex}
          onChange={handleSliderChange}
          className="timeline-range-slider"
          aria-label="Select disease phase"
        />
        <div className="current-phase-label">
          {currentStep.displayName}
        </div>
      </div>

      {/* Quick Phase Nav Pills */}
      <div className="phase-pills">
        {steps.map((step, index) => (
          <button
            key={step.phaseId}
            className={`phase-pill ${index === selectedPhaseIndex ? 'active' : ''} ${index < selectedPhaseIndex ? 'completed' : ''}`}
            onClick={() => onPhaseChange(index)}
            type="button"
          >
            <ReversibilityBadge
              reversibility={step.reversibility}
              size="small"
            />
            <span className="pill-name">{step.displayName}</span>
          </button>
        ))}
      </div>

      {/* Phase Detail Card */}
      <PhaseDetailCard
        step={currentStep}
        onAnatomicalChangeClick={onAnatomicalChangeClick}
      />

      {/* Prognosis */}
      <div className="prognosis-footer">
        <h4>Prognosis</h4>
        <p>{progression.prognosis}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="timeline-navigation">
        <button
          className="nav-button prev"
          onClick={() => onPhaseChange(selectedPhaseIndex - 1)}
          disabled={selectedPhaseIndex === 0}
          type="button"
        >
          ← Previous Phase
        </button>
        <button
          className="nav-button next"
          onClick={() => onPhaseChange(selectedPhaseIndex + 1)}
          disabled={selectedPhaseIndex === steps.length - 1}
          type="button"
        >
          Next Phase →
        </button>
      </div>
    </div>
  );
}
