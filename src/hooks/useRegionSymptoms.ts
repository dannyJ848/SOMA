/**
 * useRegionSymptoms hook
 *
 * Fetches real symptom data from the ContentService (155-symptom database)
 * for a given body region or set of body systems, and maps it into the
 * RegionSymptom[] format that SymptomIndicators expects.
 *
 * Also provides symptom detail lookup via ContentService.getSymptomInfo().
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useContentService, type SymptomEntry, type SymptomInfo } from '../services/ContentService';
import type { RegionSymptom, PatientSymptom } from '../AnatomyMainScreen/types';

// ---------------------------------------------------------------------------
// Region-to-BodyRegion mapping
// ---------------------------------------------------------------------------

/**
 * Maps UI region IDs (from the 3D model) to the BodyRegion values used in
 * the symptom-database bodyRegions field.
 *
 * BodyRegion: 'head' | 'face' | 'eyes' | 'ears' | 'nose' | 'mouth' |
 *   'throat' | 'neck' | 'chest' | 'abdomen' | 'pelvis' | 'back' |
 *   'upper-extremities' | 'lower-extremities' | 'skin' | 'whole-body'
 */
const UI_REGION_TO_DB_REGIONS: Record<string, string[]> = {
  head: ['head', 'face', 'eyes', 'ears', 'nose', 'mouth'],
  neck: ['neck', 'throat'],
  chest: ['chest'],
  heart: ['chest'],
  abdomen: ['abdomen'],
  stomach: ['abdomen'],
  liver: ['abdomen'],
  pelvis: ['pelvis'],
  back: ['back'],
  leftArm: ['upper-extremities'],
  rightArm: ['upper-extremities'],
  leftLeg: ['lower-extremities'],
  rightLeg: ['lower-extremities'],
  skin: ['skin'],
};

// ---------------------------------------------------------------------------
// State types
// ---------------------------------------------------------------------------

export interface RegionSymptomsState {
  /** Map from regionId to RegionSymptom[], ready for SymptomIndicators */
  symptomsByRegion: Map<string, RegionSymptom[]>;
  /** Flat list of SymptomEntry objects fetched from the database */
  rawSymptoms: SymptomEntry[];
  /** True while fetching symptoms from the database */
  isLoading: boolean;
  /** Error message if fetch failed */
  error: string | null;
  /** Total count of symptoms found for this region (before truncation) */
  count: number;
}

export interface SymptomDetailState {
  /** The currently selected symptom ID (for detail view) */
  selectedSymptomId: string | null;
  /** The enriched SymptomInfo from ContentService */
  info: SymptomInfo | null;
  /** True while loading symptom detail */
  isLoading: boolean;
  /** Error message if lookup failed */
  error: string | null;
}

// ---------------------------------------------------------------------------
// Severity helper
// ---------------------------------------------------------------------------

function estimateSeverityFromEntry(entry: SymptomEntry): number {
  // Estimate a default display severity based on the presence of red flags
  // and "do-not-miss" conditions. Real patient-reported data would override.
  const doNotMissCount = entry.possibleCauses.filter(
    (c) => c.likelihood === 'do-not-miss',
  ).length;
  const redFlagCount = entry.redFlags.length;

  if (doNotMissCount >= 2 || redFlagCount >= 4) return 8;
  if (doNotMissCount >= 1 || redFlagCount >= 2) return 6;
  if (redFlagCount >= 1) return 4;
  return 3;
}

function getSeverityColor(severity: number): string {
  if (severity <= 3) return '#FFD93D'; // yellow
  if (severity <= 6) return '#FF9F43'; // orange
  return '#FF6B6B'; // red
}

// ---------------------------------------------------------------------------
// Convert SymptomEntry to RegionSymptom
// ---------------------------------------------------------------------------

export function symptomEntryToRegionSymptom(
  entry: SymptomEntry,
  severity?: number,
): RegionSymptom {
  const sev = severity ?? estimateSeverityFromEntry(entry);

  const patientSymptom: PatientSymptom = {
    id: entry.symptomId,
    description: entry.name,
    severity: sev,
    location: entry.bodyRegions[0] ?? 'whole-body',
    frequency: 'intermittent',
    character: entry.description,
  };

  return {
    symptom: patientSymptom,
    indicatorSize: 0.01 + (sev / 10) * 0.02,
    indicatorColor: getSeverityColor(sev),
  };
}

// ---------------------------------------------------------------------------
// useRegionSymptoms
// ---------------------------------------------------------------------------

/**
 * Fetch symptoms from the 155-symptom database for a given UI region.
 *
 * @param regionId - The 3D model region ID (e.g. "chest", "head", "abdomen")
 * @param maxSymptoms - Maximum symptoms to include per region (default 8)
 * @returns RegionSymptomsState with data ready for SymptomIndicators
 */
export function useRegionSymptoms(
  regionId: string | null,
  maxSymptoms: number = 8,
): RegionSymptomsState {
  const service = useContentService();
  const [state, setState] = useState<RegionSymptomsState>({
    symptomsByRegion: new Map(),
    rawSymptoms: [],
    isLoading: false,
    error: null,
    count: 0,
  });

  // Track latest regionId to avoid stale updates
  const latestRegionRef = useRef(regionId);
  latestRegionRef.current = regionId;

  useEffect(() => {
    if (!regionId) {
      setState({
        symptomsByRegion: new Map(),
        rawSymptoms: [],
        isLoading: false,
        error: null,
        count: 0,
      });
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const dbRegions = UI_REGION_TO_DB_REGIONS[regionId] ?? [regionId];

    // Fetch symptoms for all mapped database regions in parallel
    const promises = dbRegions.map((r) => service.getSymptomsByRegion(r));

    Promise.all(promises)
      .then((arrays) => {
        // Guard against stale responses
        if (latestRegionRef.current !== regionId) return;

        // Deduplicate by symptomId
        const seen = new Set<string>();
        const allSymptoms: SymptomEntry[] = [];
        for (const arr of arrays) {
          for (const entry of arr) {
            if (!seen.has(entry.symptomId)) {
              seen.add(entry.symptomId);
              allSymptoms.push(entry);
            }
          }
        }

        // Sort by estimated severity descending, then take top N
        const sorted = allSymptoms
          .map((e) => ({ entry: e, severity: estimateSeverityFromEntry(e) }))
          .sort((a, b) => b.severity - a.severity)
          .slice(0, maxSymptoms);

        // Build the Map<regionId, RegionSymptom[]>
        const symptomsByRegion = new Map<string, RegionSymptom[]>();
        const regionSymptoms: RegionSymptom[] = sorted.map(({ entry, severity }) =>
          symptomEntryToRegionSymptom(entry, severity),
        );

        if (regionSymptoms.length > 0) {
          symptomsByRegion.set(regionId, regionSymptoms);
        }

        setState({
          symptomsByRegion,
          rawSymptoms: sorted.map((s) => s.entry),
          isLoading: false,
          error: null,
          count: allSymptoms.length,
        });
      })
      .catch((err) => {
        if (latestRegionRef.current !== regionId) return;
        setState({
          symptomsByRegion: new Map(),
          rawSymptoms: [],
          isLoading: false,
          error: err instanceof Error ? err.message : 'Failed to load symptoms',
          count: 0,
        });
      });
  }, [regionId, maxSymptoms, service]);

  return state;
}

// ---------------------------------------------------------------------------
// useSymptomDetail
// ---------------------------------------------------------------------------

/**
 * Hook for looking up full symptom details on click.
 * Uses ContentService.getSymptomInfo() which enriches with possible conditions,
 * do-not-miss diagnoses, anatomy regions, and glossary entries.
 */
export function useSymptomDetail(): {
  state: SymptomDetailState;
  selectSymptom: (symptomId: string) => void;
  clearSelection: () => void;
} {
  const service = useContentService();
  const [state, setState] = useState<SymptomDetailState>({
    selectedSymptomId: null,
    info: null,
    isLoading: false,
    error: null,
  });

  const selectSymptom = useCallback(
    (symptomId: string) => {
      setState({
        selectedSymptomId: symptomId,
        info: null,
        isLoading: true,
        error: null,
      });

      service.getSymptomInfo(symptomId).then((info) => {
        if (!info) {
          setState({
            selectedSymptomId: symptomId,
            info: null,
            isLoading: false,
            error: `Symptom "${symptomId}" not found in the database`,
          });
        } else {
          setState({
            selectedSymptomId: symptomId,
            info,
            isLoading: false,
            error: null,
          });
        }
      });
    },
    [service],
  );

  const clearSelection = useCallback(() => {
    setState({
      selectedSymptomId: null,
      info: null,
      isLoading: false,
      error: null,
    });
  }, []);

  return { state, selectSymptom, clearSelection };
}
