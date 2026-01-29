/**
 * Anatomy Main Screen
 *
 * THE main app screen that displays a 3D anatomical model as the central
 * interface. Users can interact with body regions, toggle anatomical layers,
 * and view health overlays based on patient data.
 */

import React, { useState, useCallback, useRef, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PersonalizedBodyModel } from './PersonalizedBodyModel';
import { useUserDemographics, DEFAULT_DEMOGRAPHICS } from '../hooks/useUserDemographics';
import { calculateBodyProportions, type BodyProportions } from '../utils/bodyProportionCalculator';
import { ANATOMICAL_LAYERS, type LayerDefinition } from '../LayerPanel';
import type { BiologicalSelf } from './types';

interface AnatomyMainScreenProps {
  patientData?: BiologicalSelf;
  onRegionSelect?: (regionId: string, regionName: string) => void;
  onNavigateToDetail?: (regionId: string) => void;
}

interface RegionContextMenuProps {
  regionId: string;
  patientData?: BiologicalSelf;
  onClose: () => void;
  onViewDetails?: () => void;
  onViewSymptoms?: () => void;
  onViewMedications?: () => void;
  onAskAI?: () => void;
}

interface LayerControllerProps {
  activeLayers: string[];
  onLayersChange: (layers: string[]) => void;
}

interface HealthOverlayProps {
  patientData: BiologicalSelf;
}

// ============================================
// Layer Controller Component
// ============================================

function LayerController({ activeLayers, onLayersChange }: LayerControllerProps) {
  const handleToggleLayer = useCallback((layerId: string) => {
    if (activeLayers.includes(layerId)) {
      onLayersChange(activeLayers.filter(id => id !== layerId));
    } else {
      onLayersChange([...activeLayers, layerId]);
    }
  }, [activeLayers, onLayersChange]);

  const handleShowAll = useCallback(() => {
    onLayersChange(ANATOMICAL_LAYERS.map(l => l.id));
  }, [onLayersChange]);

  const handleHideAll = useCallback(() => {
    onLayersChange([]);
  }, [onLayersChange]);

  // Quick presets
  const presets = [
    { id: 'skin-muscle-bone', name: 'External', layers: ['integumentary', 'muscular', 'skeletal'] },
    { id: 'organs', name: 'Organs', layers: ['organs', 'cardiovascular', 'respiratory'] },
    { id: 'nervous', name: 'Nervous', layers: ['nervous'] },
    { id: 'all', name: 'All', layers: ANATOMICAL_LAYERS.map(l => l.id) },
  ];

  return (
    <div className="layer-controller">
      <div className="layer-controller-header">
        <h3>Layers</h3>
        <div className="layer-quick-actions">
          <button
            className="layer-quick-btn"
            onClick={handleShowAll}
            title="Show all layers"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
          <button
            className="layer-quick-btn"
            onClick={handleHideAll}
            title="Hide all layers"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="layer-presets">
        {presets.map(preset => (
          <button
            key={preset.id}
            className={`layer-preset-btn ${
              preset.layers.every(l => activeLayers.includes(l)) &&
              preset.layers.length === activeLayers.length
                ? 'active'
                : ''
            }`}
            onClick={() => onLayersChange(preset.layers)}
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="layer-list">
        {ANATOMICAL_LAYERS.map((layer: LayerDefinition) => (
          <button
            key={layer.id}
            className={`layer-toggle-btn ${activeLayers.includes(layer.id) ? 'active' : ''}`}
            onClick={() => handleToggleLayer(layer.id)}
          >
            <span
              className="layer-color-indicator"
              style={{ backgroundColor: layer.color }}
            />
            <span className="layer-name">{layer.name}</span>
            <span className="layer-visibility-icon">
              {activeLayers.includes(layer.id) ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Regional Context Menu Component
// ============================================

function RegionalContextMenu({
  regionId,
  patientData,
  onClose,
  onViewDetails,
  onViewSymptoms,
  onViewMedications,
  onAskAI,
}: RegionContextMenuProps) {
  // Get region-specific data
  const regionConditions = patientData?.conditions?.filter(c =>
    c.affectedRegions.includes(regionId) || c.affectedOrgans.includes(regionId)
  ) || [];

  const regionSymptoms = patientData?.symptoms?.filter(s =>
    s.location.toLowerCase().includes(regionId.toLowerCase())
  ) || [];

  const regionMedications = patientData?.medications?.filter(m =>
    m.targetOrgans.includes(regionId) || m.targetSystems.includes(regionId)
  ) || [];

  const hasHealthData = regionConditions.length > 0 ||
                        regionSymptoms.length > 0 ||
                        regionMedications.length > 0;

  return (
    <div className="regional-context-menu">
      <div className="context-menu-header">
        <h4>{formatRegionName(regionId)}</h4>
        <button className="context-menu-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" />
          </svg>
        </button>
      </div>

      <div className="context-menu-content">
        {/* Health status summary */}
        {hasHealthData && (
          <div className="context-health-summary">
            {regionConditions.length > 0 && (
              <div className="health-badge condition">
                {regionConditions.length} condition{regionConditions.length > 1 ? 's' : ''}
              </div>
            )}
            {regionSymptoms.length > 0 && (
              <div className="health-badge symptom">
                {regionSymptoms.length} symptom{regionSymptoms.length > 1 ? 's' : ''}
              </div>
            )}
            {regionMedications.length > 0 && (
              <div className="health-badge medication">
                {regionMedications.length} medication{regionMedications.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="context-menu-actions">
          <button className="context-action-btn primary" onClick={onViewDetails}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <span>View Details</span>
          </button>

          <button className="context-action-btn" onClick={onViewSymptoms}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>Symptoms</span>
          </button>

          <button className="context-action-btn" onClick={onViewMedications}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <span>Medications</span>
          </button>

          <button className="context-action-btn ai" onClick={onAskAI}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            <span>Ask AI</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Health Overlay Component (3D)
// ============================================

function HealthOverlay({ patientData }: HealthOverlayProps) {
  // Create visual indicators for health conditions in 3D space
  // This component renders inside the Canvas

  const conditionMarkers = useMemo(() => {
    if (!patientData.conditions || patientData.conditions.length === 0) return [];

    return patientData.conditions
      .filter(c => c.status === 'active')
      .map(condition => ({
        id: condition.id,
        regions: [...condition.affectedRegions, ...condition.affectedOrgans],
        severity: condition.severity,
        color: condition.severity === 'severe'
          ? '#ff4444'
          : condition.severity === 'moderate'
            ? '#ffaa00'
            : '#44aa44',
      }));
  }, [patientData.conditions]);

  const symptomMarkers = useMemo(() => {
    if (!patientData.symptoms || patientData.symptoms.length === 0) return [];

    return patientData.symptoms
      .filter(s => s.severity > 3)
      .map(symptom => ({
        id: symptom.id,
        location: symptom.location,
        intensity: symptom.severity / 10,
      }));
  }, [patientData.symptoms]);

  // Render health indicator spheres at affected regions
  return (
    <group name="health-overlay">
      {conditionMarkers.map(marker => (
        <mesh
          key={marker.id}
          position={getRegionPosition(marker.regions[0])}
          scale={[0.05, 0.05, 0.05]}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial
            color={marker.color}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {symptomMarkers.map(marker => (
        <mesh
          key={marker.id}
          position={getRegionPosition(marker.location)}
          scale={[0.03 * marker.intensity, 0.03 * marker.intensity, 0.03 * marker.intensity]}
        >
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial
            color="#ff6600"
            transparent
            opacity={0.4 + marker.intensity * 0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

// ============================================
// Helper Functions
// ============================================

/**
 * Format region ID to display name
 */
function formatRegionName(regionId: string): string {
  return regionId
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/-/g, ' ')
    .trim();
}

/**
 * Get 3D position for a region (simplified mapping)
 */
function getRegionPosition(regionId: string): [number, number, number] {
  const regionPositions: Record<string, [number, number, number]> = {
    head: [0, 1.4, 0],
    neck: [0, 1.1, 0],
    chest: [0, 0.6, 0],
    heart: [-0.1, 0.5, 0.05],
    abdomen: [0, 0, 0],
    stomach: [0, 0.1, 0],
    liver: [0.15, 0.15, 0],
    leftArm: [-0.5, 0.4, 0],
    rightArm: [0.5, 0.4, 0],
    leftLeg: [-0.2, -0.8, 0],
    rightLeg: [0.2, -0.8, 0],
  };

  return regionPositions[regionId] || [0, 0, 0];
}

// ============================================
// Loading Component
// ============================================

function CanvasLoading() {
  return (
    <div className="anatomy-canvas-loading">
      <div className="loading-spinner" />
      <span>Loading 3D model...</span>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function AnatomyMainScreen({
  patientData,
  onRegionSelect,
  onNavigateToDetail,
}: AnatomyMainScreenProps) {
  // State
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedRegionName, setSelectedRegionName] = useState<string>('');
  const [activeLayers, setActiveLayers] = useState<string[]>(['integumentary', 'muscular', 'skeletal']);
  const [showHealthOverlay, setShowHealthOverlay] = useState(true);

  // Refs
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Get user demographics for body model customization
  const { demographics } = useUserDemographics();

  // Calculate body proportions from user demographics
  const bodyProportions: BodyProportions = useMemo(() => {
    const demoData = demographics || DEFAULT_DEMOGRAPHICS;
    return calculateBodyProportions(demoData);
  }, [demographics]);

  // Handlers
  const handleRegionSelect = useCallback((regionId: string, regionName: string) => {
    setSelectedRegion(regionId);
    setSelectedRegionName(regionName);
    onRegionSelect?.(regionId, regionName);
  }, [onRegionSelect]);

  const handleCloseContextMenu = useCallback(() => {
    setSelectedRegion(null);
    setSelectedRegionName('');
  }, []);

  const handleViewDetails = useCallback(() => {
    if (selectedRegion) {
      onNavigateToDetail?.(selectedRegion);
    }
  }, [selectedRegion, onNavigateToDetail]);

  const handleToggleHealthOverlay = useCallback(() => {
    setShowHealthOverlay(prev => !prev);
  }, []);

  return (
    <div className="anatomy-main-screen">
      {/* 3D Canvas - takes up most of the screen */}
      <div ref={canvasContainerRef} className="anatomy-canvas-container">
        <Suspense fallback={<CanvasLoading />}>
          <Canvas
            camera={{ position: [0, 0, 2], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
          >
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <directionalLight position={[-5, 5, -5]} intensity={0.3} />

            {/* 3D Body Model */}
            <PersonalizedBodyModel
              bodyProportions={bodyProportions}
              activeLayers={activeLayers}
              onRegionSelect={handleRegionSelect}
              selectedRegion={selectedRegion}
            />

            {/* Health Overlay */}
            {showHealthOverlay && patientData && (
              <HealthOverlay patientData={patientData} />
            )}

            {/* Camera Controls */}
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={1}
              maxDistance={5}
              maxPolarAngle={Math.PI}
            />
          </Canvas>
        </Suspense>

        {/* Health overlay toggle */}
        <button
          className={`health-overlay-toggle ${showHealthOverlay ? 'active' : ''}`}
          onClick={handleToggleHealthOverlay}
          title={showHealthOverlay ? 'Hide health overlay' : 'Show health overlay'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </button>
      </div>

      {/* Layer controls - side panel */}
      <LayerController
        activeLayers={activeLayers}
        onLayersChange={setActiveLayers}
      />

      {/* Regional context menu - shows when region selected */}
      {selectedRegion && (
        <RegionalContextMenu
          regionId={selectedRegion}
          patientData={patientData}
          onClose={handleCloseContextMenu}
          onViewDetails={handleViewDetails}
          onViewSymptoms={() => console.log('View symptoms for', selectedRegion)}
          onViewMedications={() => console.log('View medications for', selectedRegion)}
          onAskAI={() => console.log('Ask AI about', selectedRegionName)}
        />
      )}

      {/* Help hint when nothing selected */}
      {!selectedRegion && (
        <div className="anatomy-help-hint">
          <span>Tap any body region to explore</span>
        </div>
      )}
    </div>
  );
}

export default AnatomyMainScreen;
