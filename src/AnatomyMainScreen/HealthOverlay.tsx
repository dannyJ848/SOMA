/**
 * Health Overlay Component
 *
 * Main component for visualizing patient health data on the 3D anatomy model.
 * Combines condition highlights, symptom indicators, lab badges, and medication
 * target visualizations into a unified overlay system.
 *
 * Features:
 * - Condition highlights with severity-based colors and pulsing animations
 * - Symptom indicators floating near affected body regions
 * - Lab result badges with directional arrows for abnormal values
 * - Medication target highlights showing where medications work
 *
 * Usage:
 * ```tsx
 * <Canvas>
 *   <AnatomyModel />
 *   <HealthOverlay
 *     patientData={biologicalSelf}
 *     onRegionClick={(regionId) => handleRegionClick(regionId)}
 *   />
 * </Canvas>
 * ```
 */

import React, { useMemo, memo, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import {
  type HealthOverlayProps,
  type BiologicalSelf,
  type AnatomyPatientBridge,
} from './types';
import { createBridge } from './utils';
import { ConditionHighlights } from './ConditionHighlights';
import { SymptomIndicators } from './SymptomIndicators';
import { LabBadges } from './LabBadges';
import { MedicationTargets } from './MedicationTargets';

// ============================================
// Main Health Overlay Component
// ============================================

export const HealthOverlay = memo(function HealthOverlay({
  patientData,
  anatomyBridge,
  visible = true,
  onRegionHover,
  onRegionClick,
}: HealthOverlayProps) {
  // Track visibility states for sub-components
  const [showConditions, setShowConditions] = useState(true);
  const [showSymptoms, setShowSymptoms] = useState(true);
  const [showLabs, setShowLabs] = useState(true);
  const [showMedications, setShowMedications] = useState(true);
  const [showSymptomLabels, setShowSymptomLabels] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Build or use provided bridge
  const bridge = useMemo(() => {
    if (anatomyBridge) return anatomyBridge;
    return createBridge(patientData);
  }, [patientData, anatomyBridge]);

  // Summary statistics for the overlay
  const stats = useMemo(() => {
    return {
      conditionCount: patientData.conditions.length,
      activeConditions: patientData.conditions.filter(c => c.status === 'active').length,
      symptomCount: patientData.symptoms.length,
      severeSymptoms: patientData.symptoms.filter(s => s.severity >= 7).length,
      abnormalLabs: patientData.labResults.filter(l => l.status !== 'normal').length,
      criticalLabs: patientData.labResults.filter(l => l.status.includes('critical')).length,
      medicationCount: patientData.medications.length,
    };
  }, [patientData]);

  if (!visible) {
    return null;
  }

  return (
    <group name="health-overlay">
      {/* Condition highlights - Shows affected regions */}
      {showConditions && (
        <ConditionHighlights
          conditions={bridge.conditionsByRegion}
          visible={showConditions}
          animationEnabled={animationsEnabled}
        />
      )}

      {/* Symptom indicators - Shows symptom locations */}
      {showSymptoms && (
        <SymptomIndicators
          symptoms={bridge.symptomsByRegion}
          visible={showSymptoms}
          showLabels={showSymptomLabels}
        />
      )}

      {/* Lab badges - Shows abnormal lab results on organs */}
      {showLabs && (
        <LabBadges
          labs={bridge.labsByOrgan}
          visible={showLabs}
          showOnlyAbnormal={true}
        />
      )}

      {/* Medication targets - Shows where medications work */}
      {showMedications && (
        <MedicationTargets
          medications={bridge.medicationTargets}
          visible={showMedications}
          highlightMode="hover"
        />
      )}
    </group>
  );
});

// ============================================
// Health Overlay Controller Hook
// ============================================

/**
 * Hook for controlling the Health Overlay from outside the 3D scene
 */
export interface HealthOverlayControls {
  showConditions: boolean;
  showSymptoms: boolean;
  showLabs: boolean;
  showMedications: boolean;
  showSymptomLabels: boolean;
  animationsEnabled: boolean;
  setShowConditions: (show: boolean) => void;
  setShowSymptoms: (show: boolean) => void;
  setShowLabs: (show: boolean) => void;
  setShowMedications: (show: boolean) => void;
  setShowSymptomLabels: (show: boolean) => void;
  setAnimationsEnabled: (enabled: boolean) => void;
  toggleAll: (show: boolean) => void;
}

export function useHealthOverlayControls(): HealthOverlayControls {
  const [showConditions, setShowConditions] = useState(true);
  const [showSymptoms, setShowSymptoms] = useState(true);
  const [showLabs, setShowLabs] = useState(true);
  const [showMedications, setShowMedications] = useState(true);
  const [showSymptomLabels, setShowSymptomLabels] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const toggleAll = useCallback((show: boolean) => {
    setShowConditions(show);
    setShowSymptoms(show);
    setShowLabs(show);
    setShowMedications(show);
  }, []);

  return {
    showConditions,
    showSymptoms,
    showLabs,
    showMedications,
    showSymptomLabels,
    animationsEnabled,
    setShowConditions,
    setShowSymptoms,
    setShowLabs,
    setShowMedications,
    setShowSymptomLabels,
    setAnimationsEnabled,
    toggleAll,
  };
}

// ============================================
// Controlled Health Overlay Component
// ============================================

interface ControlledHealthOverlayProps extends Omit<HealthOverlayProps, 'visible'> {
  controls: HealthOverlayControls;
}

/**
 * Health Overlay with external controls
 * Use with useHealthOverlayControls hook
 */
export const ControlledHealthOverlay = memo(function ControlledHealthOverlay({
  patientData,
  anatomyBridge,
  onRegionHover,
  onRegionClick,
  controls,
}: ControlledHealthOverlayProps) {
  // Build or use provided bridge
  const bridge = useMemo(() => {
    if (anatomyBridge) return anatomyBridge;
    return createBridge(patientData);
  }, [patientData, anatomyBridge]);

  return (
    <group name="health-overlay-controlled">
      {controls.showConditions && (
        <ConditionHighlights
          conditions={bridge.conditionsByRegion}
          visible={controls.showConditions}
          animationEnabled={controls.animationsEnabled}
        />
      )}

      {controls.showSymptoms && (
        <SymptomIndicators
          symptoms={bridge.symptomsByRegion}
          visible={controls.showSymptoms}
          showLabels={controls.showSymptomLabels}
        />
      )}

      {controls.showLabs && (
        <LabBadges
          labs={bridge.labsByOrgan}
          visible={controls.showLabs}
          showOnlyAbnormal={true}
        />
      )}

      {controls.showMedications && (
        <MedicationTargets
          medications={bridge.medicationTargets}
          visible={controls.showMedications}
          highlightMode="hover"
        />
      )}
    </group>
  );
});

// ============================================
// Health Overlay UI Panel Component
// ============================================

interface HealthOverlayPanelProps {
  controls: HealthOverlayControls;
  stats?: {
    conditionCount: number;
    activeConditions: number;
    symptomCount: number;
    severeSymptoms: number;
    abnormalLabs: number;
    criticalLabs: number;
    medicationCount: number;
  };
  className?: string;
}

/**
 * UI panel for controlling Health Overlay visibility
 * Render this outside the 3D canvas
 */
export function HealthOverlayPanel({
  controls,
  stats,
  className = '',
}: HealthOverlayPanelProps) {
  return (
    <div className={`health-overlay-panel ${className}`}>
      <div className="health-overlay-panel-header">
        <span>Health Visualization</span>
        <button
          className="toggle-all-btn"
          onClick={() => controls.toggleAll(!controls.showConditions)}
        >
          {controls.showConditions ? 'Hide All' : 'Show All'}
        </button>
      </div>

      <div className="health-overlay-panel-options">
        <label className="health-overlay-option">
          <input
            type="checkbox"
            checked={controls.showConditions}
            onChange={(e) => controls.setShowConditions(e.target.checked)}
          />
          <span className="option-label">
            Conditions
            {stats && <span className="option-count">({stats.activeConditions} active)</span>}
          </span>
        </label>

        <label className="health-overlay-option">
          <input
            type="checkbox"
            checked={controls.showSymptoms}
            onChange={(e) => controls.setShowSymptoms(e.target.checked)}
          />
          <span className="option-label">
            Symptoms
            {stats && (
              <span className="option-count">
                ({stats.symptomCount}{stats.severeSymptoms > 0 && `, ${stats.severeSymptoms} severe`})
              </span>
            )}
          </span>
        </label>

        <label className="health-overlay-option option-nested">
          <input
            type="checkbox"
            checked={controls.showSymptomLabels}
            onChange={(e) => controls.setShowSymptomLabels(e.target.checked)}
            disabled={!controls.showSymptoms}
          />
          <span className="option-label">Show labels</span>
        </label>

        <label className="health-overlay-option">
          <input
            type="checkbox"
            checked={controls.showLabs}
            onChange={(e) => controls.setShowLabs(e.target.checked)}
          />
          <span className="option-label">
            Lab Results
            {stats && (
              <span className="option-count">
                ({stats.abnormalLabs} abnormal{stats.criticalLabs > 0 && `, ${stats.criticalLabs} critical`})
              </span>
            )}
          </span>
        </label>

        <label className="health-overlay-option">
          <input
            type="checkbox"
            checked={controls.showMedications}
            onChange={(e) => controls.setShowMedications(e.target.checked)}
          />
          <span className="option-label">
            Medication Targets
            {stats && <span className="option-count">({stats.medicationCount})</span>}
          </span>
        </label>

        <div className="health-overlay-divider" />

        <label className="health-overlay-option">
          <input
            type="checkbox"
            checked={controls.animationsEnabled}
            onChange={(e) => controls.setAnimationsEnabled(e.target.checked)}
          />
          <span className="option-label">Enable animations</span>
        </label>
      </div>
    </div>
  );
}

// ============================================
// Exports
// ============================================

export {
  // Types
  type BiologicalSelf,
  type AnatomyPatientBridge,
  type HealthOverlayProps,
} from './types';

export {
  // Utilities
  createBridge,
  getRegionMesh,
  getRegionCenter,
  getOrganCenter,
  highlightMesh,
} from './utils';

export { ConditionHighlights } from './ConditionHighlights';
export { SymptomIndicators } from './SymptomIndicators';
export { LabBadges } from './LabBadges';
export { MedicationTargets } from './MedicationTargets';

export default HealthOverlay;
