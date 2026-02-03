/**
 * Adaptive 3D Anatomy System
 * 
 * The 3D model is the living heart of the application - it adapts, evolves,
 * and personalizes based on the user's longitudinal health data.
 * 
 * Key Features:
 * - Visual indicators of affected regions based on health conditions
 * - Layer customization showing pathology, histology, or clinical data
 * - Temporal visualization of health changes over time
 * - Personalized anatomical representation
 * - Direct launchpad to all medical knowledge
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type { AnatomicalRegion, RegionContext, RegionPatientData } from './anatomicalRegionMenu';
import { findRegionById, getRelatedRegions, ANATOMICAL_REGIONS } from './anatomicalRegionMenu';

// Visual state of an anatomical region
export interface RegionVisualState {
  regionId: string;
  affected: boolean;
  severity: 'none' | 'mild' | 'moderate' | 'severe' | 'critical';
  layerVisibility: {
    anatomy: boolean;
    histology: boolean;
    pathology: boolean;
    clinical: boolean;
    imaging: boolean;
  };
  highlightColor?: string;
  pulseAnimation?: boolean;
  opacity: number;
  lastUpdated: Date;
}

// Longitudinal health event for a region
export interface RegionHealthEvent {
  id: string;
  regionId: string;
  timestamp: Date;
  type: 'diagnosis' | 'symptom' | 'procedure' | 'imaging' | 'lab' | 'medication';
  description: string;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  provider: string;
  relatedConditions?: string[];
  imagingUrl?: string;
  labValues?: Record<string, number>;
}

// User's longitudinal health profile
export interface UserHealthProfile {
  patientId: string;
  baselineAnatomy: Record<string, RegionVisualState>;
  healthEvents: RegionHealthEvent[];
  activeConditions: Array<{
    conditionId: string;
    name: string;
    affectedRegions: string[];
    onsetDate: Date;
    status: 'active' | 'managed' | 'resolved';
  }>;
  medications: Array<{
    medicationId: string;
    name: string;
    targetRegions: string[];
    startDate: Date;
  }>;
  procedures: Array<{
    procedureId: string;
    name: string;
    regionId: string;
    date: Date;
    outcome: string;
  }>;
  imagingHistory: Array<{
    imagingId: string;
    type: 'xray' | 'ct' | 'mri' | 'ultrasound' | 'pet';
    regionId: string;
    date: Date;
    findings: string;
    imageUrl?: string;
  }>;
}

// Adaptive layer configuration
export interface AdaptiveLayerConfig {
  id: string;
  name: string;
  type: 'anatomy' | 'histology' | 'pathology' | 'physiology' | 'clinical' | 'imaging' | 'custom';
  visible: boolean;
  opacity: number;
  dataSource?: 'user-health' | 'medical-knowledge' | 'imaging' | 'lab-results';
  filter?: {
    timeRange?: { start: Date; end: Date };
    severity?: ('mild' | 'moderate' | 'severe' | 'critical')[];
    conditionTypes?: string[];
  };
}

// Adaptive anatomy state
export interface AdaptiveAnatomyState {
  selectedRegion: string | null;
  hoveredRegion: string | null;
  visualStates: Record<string, RegionVisualState>;
  activeLayers: AdaptiveLayerConfig[];
  timePoint: Date | null; // For temporal visualization
  animationEnabled: boolean;
  detailLevel: 'overview' | 'standard' | 'detailed' | 'microscopic';
}

// Default visual state
const createDefaultVisualState = (regionId: string): RegionVisualState => ({
  regionId,
  affected: false,
  severity: 'none',
  layerVisibility: {
    anatomy: true,
    histology: false,
    pathology: false,
    clinical: false,
    imaging: false,
  },
  opacity: 1.0,
  lastUpdated: new Date(),
});

// Adaptive Anatomy Manager
class AdaptiveAnatomyManager {
  private state: AdaptiveAnatomyState;
  private listeners: Set<(state: AdaptiveAnatomyState) => void> = new Set();
  private healthProfile: UserHealthProfile | null = null;

  constructor() {
    this.state = {
      selectedRegion: null,
      hoveredRegion: null,
      visualStates: {},
      activeLayers: [
        { id: 'anatomy', name: 'Anatomy', type: 'anatomy', visible: true, opacity: 1.0 },
        { id: 'clinical', name: 'Clinical Data', type: 'clinical', visible: true, opacity: 0.7, dataSource: 'user-health' },
      ],
      timePoint: null,
      animationEnabled: true,
      detailLevel: 'standard',
    };

    // Initialize all regions
    ANATOMICAL_REGIONS.forEach(region => {
      this.state.visualStates[region.id] = createDefaultVisualState(region.id);
    });
  }

  // Subscribe to state changes
  subscribe(listener: (state: AdaptiveAnatomyState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // Notify all listeners
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // Load user health profile
  loadHealthProfile(profile: UserHealthProfile) {
    this.healthProfile = profile;
    this.updateVisualStatesFromHealthData();
    this.notify();
  }

  // Update visual states based on health data
  private updateVisualStatesFromHealthData() {
    if (!this.healthProfile) return;

    // Reset all states
    Object.keys(this.state.visualStates).forEach(regionId => {
      this.state.visualStates[regionId] = createDefaultVisualState(regionId);
    });

    // Apply active conditions
    this.healthProfile.activeConditions.forEach(condition => {
      condition.affectedRegions.forEach(regionId => {
        if (this.state.visualStates[regionId]) {
          this.state.visualStates[regionId].affected = true;
          this.state.visualStates[regionId].severity = 'moderate';
          this.state.visualStates[regionId].highlightColor = this.getSeverityColor('moderate');
          this.state.visualStates[regionId].layerVisibility.clinical = true;
        }
      });
    });

    // Apply medications
    this.healthProfile.medications.forEach(med => {
      med.targetRegions.forEach(regionId => {
        if (this.state.visualStates[regionId]) {
          this.state.visualStates[regionId].layerVisibility.clinical = true;
        }
      });
    });

    // Apply procedures
    this.healthProfile.procedures.forEach(proc => {
      if (this.state.visualStates[proc.regionId]) {
        this.state.visualStates[proc.regionId].affected = true;
        this.state.visualStates[proc.regionId].severity = 'mild';
        this.state.visualStates[proc.regionId].highlightColor = '#2196f3'; // Blue for procedures
      }
    });

    // Apply health events
    this.healthProfile.healthEvents.forEach(event => {
      if (this.state.visualStates[event.regionId]) {
        const state = this.state.visualStates[event.regionId];
        state.affected = true;
        
        // Upgrade severity if event is more severe
        if (this.severityWeight(event.severity) > this.severityWeight(state.severity)) {
          state.severity = event.severity;
          state.highlightColor = this.getSeverityColor(event.severity);
        }

        // Enable relevant layers
        if (event.type === 'imaging') state.layerVisibility.imaging = true;
        if (event.type === 'diagnosis') state.layerVisibility.pathology = true;
      }
    });
  }

  private severityWeight(severity: string): number {
    const weights = { none: 0, mild: 1, moderate: 2, severe: 3, critical: 4 };
    return weights[severity as keyof typeof weights] || 0;
  }

  private getSeverityColor(severity: string): string {
    const colors = {
      mild: '#ffeb3b',
      moderate: '#ff9800',
      severe: '#f44336',
      critical: '#b71c1c',
    };
    return colors[severity as keyof typeof colors] || '#4caf50';
  }

  // Select a region
  selectRegion(regionId: string | null) {
    this.state.selectedRegion = regionId;
    this.notify();
  }

  // Hover over a region
  hoverRegion(regionId: string | null) {
    this.state.hoveredRegion = regionId;
    this.notify();
  }

  // Toggle layer visibility
  toggleLayer(layerId: string) {
    const layer = this.state.activeLayers.find(l => l.id === layerId);
    if (layer) {
      layer.visible = !layer.visible;
      this.notify();
    }
  }

  // Set layer opacity
  setLayerOpacity(layerId: string, opacity: number) {
    const layer = this.state.activeLayers.find(l => l.id === layerId);
    if (layer) {
      layer.opacity = Math.max(0, Math.min(1, opacity));
      this.notify();
    }
  }

  // Add custom layer
  addLayer(config: Omit<AdaptiveLayerConfig, 'id'>) {
    const layer: AdaptiveLayerConfig = {
      ...config,
      id: `layer-${Date.now()}`,
    };
    this.state.activeLayers.push(layer);
    this.notify();
  }

  // Remove layer
  removeLayer(layerId: string) {
    this.state.activeLayers = this.state.activeLayers.filter(l => l.id !== layerId);
    this.notify();
  }

  // Set temporal point
  setTimePoint(date: Date | null) {
    this.state.timePoint = date;
    if (date) {
      this.updateVisualStatesForTimePoint(date);
    } else {
      this.updateVisualStatesFromHealthData();
    }
    this.notify();
  }

  // Update visual states for a specific time point
  private updateVisualStatesForTimePoint(date: Date) {
    if (!this.healthProfile) return;

    // Reset states
    Object.keys(this.state.visualStates).forEach(regionId => {
      this.state.visualStates[regionId] = createDefaultVisualState(regionId);
    });

    // Apply events up to this time point
    const relevantEvents = this.healthProfile.healthEvents.filter(e => e.timestamp <= date);
    
    relevantEvents.forEach(event => {
      if (this.state.visualStates[event.regionId]) {
        const state = this.state.visualStates[event.regionId];
        state.affected = true;
        state.severity = event.severity;
        state.highlightColor = this.getSeverityColor(event.severity);
        state.lastUpdated = event.timestamp;
      }
    });
  }

  // Set detail level
  setDetailLevel(level: AdaptiveAnatomyState['detailLevel']) {
    this.state.detailLevel = level;
    this.notify();
  }

  // Toggle animation
  toggleAnimation() {
    this.state.animationEnabled = !this.state.animationEnabled;
    this.notify();
  }

  // Get current state
  getState(): AdaptiveAnatomyState {
    return { ...this.state };
  }

  // Get region context for menu generation
  getRegionContext(regionId: string): RegionContext | null {
    const region = findRegionById(regionId);
    if (!region) return null;

    const visualState = this.state.visualStates[regionId];
    
    // Build patient data for this region
    const patientData: RegionPatientData = {
      conditions: [],
      symptoms: [],
      medications: [],
      labResults: [],
      imaging: [],
      procedures: [],
    };

    if (this.healthProfile) {
      // Get conditions affecting this region
      patientData.conditions = this.healthProfile.activeConditions
        .filter(c => c.affectedRegions.includes(regionId))
        .map(c => ({
          name: c.name,
          status: c.status,
          severity: 'moderate', // Would come from actual data
          diagnosedDate: c.onsetDate,
        }));

      // Get medications targeting this region
      patientData.medications = this.healthProfile.medications
        .filter(m => m.targetRegions.includes(regionId))
        .map(m => ({
          name: m.name,
          dose: '', // Would come from actual data
          indication: '',
        }));

      // Get procedures on this region
      patientData.procedures = this.healthProfile.procedures
        .filter(p => p.regionId === regionId)
        .map(p => ({
          name: p.name,
          date: p.date,
          outcome: p.outcome,
        }));

      // Get imaging for this region
      patientData.imaging = this.healthProfile.imagingHistory
        .filter(i => i.regionId === regionId)
        .map(i => ({
          type: i.type,
          date: i.date,
          findings: i.findings,
        }));
    }

    return {
      region,
      patientData,
      availableContent: {
        anatomy: true,
        histology: true,
        pathology: visualState?.affected || false,
        physiology: true,
        clinical: visualState?.affected || false,
      },
    };
  }

  // Export current view configuration
  exportViewConfig() {
    return {
      activeLayers: this.state.activeLayers,
      detailLevel: this.state.detailLevel,
      timePoint: this.state.timePoint,
    };
  }

  // Import view configuration
  importViewConfig(config: ReturnType<typeof this.exportViewConfig>) {
    this.state.activeLayers = config.activeLayers;
    this.state.detailLevel = config.detailLevel;
    this.state.timePoint = config.timePoint;
    this.notify();
  }
}

// Singleton instance
let managerInstance: AdaptiveAnatomyManager | null = null;

export function getAdaptiveAnatomyManager(): AdaptiveAnatomyManager {
  if (!managerInstance) {
    managerInstance = new AdaptiveAnatomyManager();
  }
  return managerInstance;
}

// React hook for using adaptive anatomy
export function useAdaptiveAnatomy() {
  const manager = useRef(getAdaptiveAnatomyManager());
  const [state, setState] = useState(manager.current.getState());

  useEffect(() => {
    return manager.current.subscribe(newState => {
      setState(newState);
    });
  }, []);

  const selectRegion = useCallback((regionId: string | null) => {
    manager.current.selectRegion(regionId);
  }, []);

  const hoverRegion = useCallback((regionId: string | null) => {
    manager.current.hoverRegion(regionId);
  }, []);

  const toggleLayer = useCallback((layerId: string) => {
    manager.current.toggleLayer(layerId);
  }, []);

  const setLayerOpacity = useCallback((layerId: string, opacity: number) => {
    manager.current.setLayerOpacity(layerId, opacity);
  }, []);

  const setTimePoint = useCallback((date: Date | null) => {
    manager.current.setTimePoint(date);
  }, []);

  const loadHealthProfile = useCallback((profile: UserHealthProfile) => {
    manager.current.loadHealthProfile(profile);
  }, []);

  const getRegionContext = useCallback((regionId: string) => {
    return manager.current.getRegionContext(regionId);
  }, []);

  return {
    state,
    selectRegion,
    hoverRegion,
    toggleLayer,
    setLayerOpacity,
    setTimePoint,
    loadHealthProfile,
    getRegionContext,
  };
}

// Types are already exported above as interfaces
