/**
 * useHistologyContent Hook
 *
 * Fetches and manages histology content for a given region and complexity level.
 * Provides tissue types, cell types, key structures, staining methods,
 * and clinical correlations at the appropriate complexity level.
 *
 * Uses real content from REGION_CONTENT_MAP when available, with a generated
 * fallback for regions not yet in the content database.
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ComplexityLevel } from '../../core/content/types';
import {
  getRegionContent,
  type RegionContent,
  type HistologyContent as RegionHistologyContent,
  type TissueTypeInfo,
  type StainInfo,
  type MicroscopicStructure,
} from '../education/regionContentMapping';

// ============================================
// Types
// ============================================

export interface TissueType {
  id: string;
  name: string;
  description: string;
  category: 'epithelial' | 'connective' | 'muscle' | 'nervous';
  characteristics?: string[];
}

export interface CellType {
  id: string;
  name: string;
  function: string;
  morphology?: string;
  markers?: string[];
  location?: string;
}

export interface KeyStructure {
  id: string;
  name: string;
  description: string;
  significance?: string;
  visualFeatures?: string[];
}

export interface StainingMethod {
  id: string;
  name: string;
  purpose: string;
  color?: string;
  targets?: string[];
}

export interface ClinicalCorrelation {
  id: string;
  condition: string;
  histologicalFindings: string;
  significance: string;
  severity?: 'mild' | 'moderate' | 'severe';
}

export interface MagnificationLevel {
  id: string;
  name: string;
  description: string;
  power: string;
  structures: string[];
}

export interface HistologyContent {
  regionId: string;
  regionName: string;
  overview: string;
  explanation: string;
  tissueTypes: TissueType[];
  cellTypes: CellType[];
  keyStructures: KeyStructure[];
  stainingMethods: StainingMethod[];
  clinicalCorrelations: ClinicalCorrelation[];
  magnificationLevels: MagnificationLevel[];
  keyTerms: Array<{ term: string; definition: string; pronunciation?: string }>;
  analogies?: string[];
  clinicalNotes?: string;
}

export interface UseHistologyContentResult {
  content: HistologyContent | null;
  isLoading: boolean;
  error: Error | null;
  refresh: () => void;
}

// ============================================
// Helpers: slugify names to IDs
// ============================================

function toId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ============================================
// Transform real RegionContent into hook types
// ============================================

/**
 * Maps TissueTypeInfo from the content database to the hook's TissueType.
 */
function mapTissueTypes(infos: TissueTypeInfo[]): TissueType[] {
  return infos.map((t) => ({
    id: toId(t.name),
    name: t.name,
    description: t.description,
    category: t.category,
    characteristics: [t.location, t.function].filter(Boolean),
  }));
}

/**
 * Maps cell type names from the content database to the hook's CellType[].
 * The content DB stores cell types as plain strings, so we derive structured data.
 */
function mapCellTypes(names: string[], regionName: string): CellType[] {
  return names.map((name) => ({
    id: toId(name),
    name,
    function: `Functional cell found in ${regionName}`,
    location: regionName,
  }));
}

/**
 * Maps MicroscopicStructure from the content database to the hook's KeyStructure[].
 */
function mapKeyStructures(structures: MicroscopicStructure[]): KeyStructure[] {
  return structures.map((s) => ({
    id: toId(s.name),
    name: s.name,
    description: s.description,
    significance: s.function,
    visualFeatures: s.appearance ? [s.appearance] : undefined,
  }));
}

/**
 * Maps StainInfo from the content database to the hook's StainingMethod[].
 */
function mapStainingMethods(stains: StainInfo[]): StainingMethod[] {
  return stains.map((s) => ({
    id: toId(s.name),
    name: s.name,
    purpose: s.purpose,
    color: s.appearance,
  }));
}

/**
 * Maps pathology conditions from the content database to ClinicalCorrelation[].
 */
function mapClinicalCorrelations(region: RegionContent): ClinicalCorrelation[] {
  return region.pathology.commonConditions.map((c) => ({
    id: toId(c.name),
    condition: c.name,
    histologicalFindings: c.mechanism,
    significance: c.symptoms.join('; '),
    severity: c.severity === 'life-threatening' ? 'severe' as const : c.severity as 'mild' | 'moderate' | 'severe',
  }));
}

/**
 * Generates MagnificationLevel[] from the real histology data.
 * Uses key features for low power, cell types for medium, and microscopic
 * structures for high power.
 */
function buildMagnificationLevels(histology: RegionHistologyContent): MagnificationLevel[] {
  const levels: MagnificationLevel[] = [
    {
      id: 'low-power',
      name: 'Low Power (Tissue Level)',
      description: 'Overall tissue architecture and organization',
      power: '4x-10x',
      structures: histology.keyFeatures.length > 0
        ? histology.keyFeatures
        : histology.tissueTypes.map((t) => t.name),
    },
    {
      id: 'medium-power',
      name: 'Medium Power (Cellular Level)',
      description: 'Individual cell types and their arrangements',
      power: '20x-40x',
      structures: histology.cellTypes.length > 0
        ? histology.cellTypes
        : ['Cell morphology', 'Nuclear features'],
    },
  ];

  // High power only if we have microscopic structures
  if (histology.microscopicStructures.length > 0) {
    levels.push({
      id: 'high-power',
      name: 'High Power (Subcellular Level)',
      description: 'Detailed structural features and subcellular organization',
      power: '40x-100x (oil)',
      structures: histology.microscopicStructures.map((s) => `${s.name}: ${s.appearance}`),
    });
  }

  return levels;
}

/**
 * Builds key terms from the real data (tissue type names, stain names, structures).
 */
function buildKeyTerms(
  histology: RegionHistologyContent,
): Array<{ term: string; definition: string }> {
  const terms: Array<{ term: string; definition: string }> = [];

  // Add tissue types as key terms
  for (const t of histology.tissueTypes) {
    terms.push({
      term: t.name,
      definition: `${t.description}. Found in ${t.location}. Function: ${t.function}`,
    });
  }

  // Add microscopic structures as key terms
  for (const s of histology.microscopicStructures) {
    terms.push({
      term: s.name,
      definition: `${s.description}. Function: ${s.function}`,
    });
  }

  // Add stains as key terms
  for (const st of histology.stains) {
    terms.push({
      term: st.name,
      definition: `${st.purpose}. Appearance: ${st.appearance}`,
    });
  }

  return terms;
}

/**
 * Build an overview string from the real region data.
 */
function buildOverview(region: RegionContent): string {
  const tissueNames = region.histology.tissueTypes.map((t) => t.name).join(', ');
  return `The ${region.name} contains characteristic histological features including ${tissueNames}. ${region.description}`;
}

/**
 * Build a detailed explanation from the real region data.
 */
function buildExplanation(region: RegionContent): string {
  const histology = region.histology;
  const sections: string[] = [];

  // Tissue types section
  sections.push('**Tissue Types:**');
  for (const t of histology.tissueTypes) {
    sections.push(`- **${t.name}** (${t.category}): ${t.description}. Location: ${t.location}. Function: ${t.function}`);
  }

  // Key features section
  if (histology.keyFeatures.length > 0) {
    sections.push('');
    sections.push('**Key Histological Features:**');
    for (const f of histology.keyFeatures) {
      sections.push(`- ${f}`);
    }
  }

  // Cell types section
  if (histology.cellTypes.length > 0) {
    sections.push('');
    sections.push('**Cell Types:**');
    for (const c of histology.cellTypes) {
      sections.push(`- ${c}`);
    }
  }

  // Staining section
  if (histology.stains.length > 0) {
    sections.push('');
    sections.push('**Staining Methods:**');
    for (const s of histology.stains) {
      sections.push(`- **${s.name}**: ${s.purpose} (${s.appearance})`);
    }
  }

  // Microscopic structures section
  if (histology.microscopicStructures.length > 0) {
    sections.push('');
    sections.push('**Microscopic Structures:**');
    for (const m of histology.microscopicStructures) {
      sections.push(`- **${m.name}**: ${m.description}. ${m.function}. Appearance: ${m.appearance}`);
    }
  }

  return sections.join('\n');
}

/**
 * Transform a RegionContent entry from the content database into the hook's
 * HistologyContent format.
 */
function transformRegionContent(region: RegionContent): HistologyContent {
  const histology = region.histology;

  return {
    regionId: region.id,
    regionName: region.name,
    overview: buildOverview(region),
    explanation: buildExplanation(region),
    tissueTypes: mapTissueTypes(histology.tissueTypes),
    cellTypes: mapCellTypes(histology.cellTypes, region.name),
    keyStructures: mapKeyStructures(histology.microscopicStructures),
    stainingMethods: mapStainingMethods(histology.stains),
    clinicalCorrelations: mapClinicalCorrelations(region),
    magnificationLevels: buildMagnificationLevels(histology),
    keyTerms: buildKeyTerms(histology),
    clinicalNotes: region.clinicalNotes.length > 0
      ? region.clinicalNotes.join('. ')
      : undefined,
  };
}

// ============================================
// Fallback: Generated content for unknown regions
// ============================================

/**
 * Generate fallback histology content for regions NOT in the content database.
 * This preserves backward compatibility for any region IDs not yet mapped.
 */
function generateFallbackContent(
  regionId: string,
  regionName: string,
): HistologyContent {
  return {
    regionId,
    regionName,
    overview: `The ${regionName} displays characteristic histological architecture with distinct tissue organization and cellular components visible on standard staining.`,
    explanation: `**Tissue Organization:**\n\nThe ${regionName} is composed of several tissue types arranged in a specific pattern:\n\n- **Epithelial Tissue**: Lines surfaces and forms barriers\n- **Connective Tissue**: Provides support and structure\n- **Specialized Cells**: Perform region-specific functions`,
    tissueTypes: [
      {
        id: 'epithelial-1',
        name: 'Epithelial Tissue',
        description: 'Tissue that covers surfaces and lines cavities',
        category: 'epithelial',
      },
      {
        id: 'connective-1',
        name: 'Connective Tissue',
        description: 'Tissue that supports and connects other tissues',
        category: 'connective',
      },
    ],
    cellTypes: [
      {
        id: 'parenchymal-1',
        name: 'Parenchymal Cells',
        function: 'Main working cells of the tissue',
      },
      {
        id: 'stromal-1',
        name: 'Stromal Cells',
        function: 'Cells that provide support structure',
      },
    ],
    keyStructures: [
      {
        id: 'basement-membrane',
        name: 'Basement Membrane',
        description: 'Thin layer that separates different tissue types',
      },
      {
        id: 'vasculature',
        name: 'Blood Vessels',
        description: 'Tubes that carry blood through the tissue',
      },
    ],
    stainingMethods: [
      {
        id: 'he-stain',
        name: 'H&E (Hematoxylin & Eosin)',
        purpose: 'The most common stain that colors different parts of cells',
        color: 'Blue (nuclei) / Pink (cytoplasm)',
      },
    ],
    clinicalCorrelations: [
      {
        id: 'inflammation',
        condition: 'Inflammation',
        histologicalFindings: 'More immune cells and swelling visible',
        significance: 'Indicates active immune response or infection',
        severity: 'moderate',
      },
    ],
    magnificationLevels: [
      {
        id: 'tissue-level',
        name: 'Tissue Level',
        description: 'Overall tissue architecture and organization',
        power: '4x-10x',
        structures: ['Tissue layers', 'Overall organization', 'Major vessels'],
      },
      {
        id: 'cell-level',
        name: 'Cellular Level',
        description: 'Individual cells and their relationships',
        power: '20x-40x',
        structures: ['Cell types', 'Nuclear features', 'Cellular arrangements'],
      },
    ],
    keyTerms: [
      {
        term: 'Histology',
        definition: 'The study of tissues under a microscope',
        pronunciation: 'his-TOL-oh-jee',
      },
    ],
  };
}

// ============================================
// Hook Implementation
// ============================================

/**
 * Hook to fetch and manage histology content for a region
 *
 * @param regionId - The unique identifier of the anatomical region
 * @param complexityLevel - The complexity level for content (1-5)
 * @returns Object containing histology content, loading state, error, and refresh function
 */
export function useHistologyContent(
  regionId: string,
  complexityLevel: ComplexityLevel
): UseHistologyContentResult {
  const [content, setContent] = useState<HistologyContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Derive region name from ID (used as fallback if region not in content map)
  const regionName = useMemo(() => {
    return regionId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [regionId]);

  // Load content synchronously from the content map, or fall back to generated data
  const loadContent = useCallback(() => {
    setIsLoading(true);
    setError(null);

    try {
      const regionData = getRegionContent(regionId);

      if (regionData) {
        // Use real content from the content database
        const histologyContent = transformRegionContent(regionData);
        setContent(histologyContent);
      } else {
        // Fallback for regions not yet in the content database
        const fallbackContent = generateFallbackContent(regionId, regionName);
        setContent(fallbackContent);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load histology content'));
      setContent(null);
    } finally {
      setIsLoading(false);
    }
  }, [regionId, regionName]);

  // Load on mount and when dependencies change
  useEffect(() => {
    loadContent();
  }, [loadContent]);

  return {
    content,
    isLoading,
    error,
    refresh: loadContent,
  };
}

export default useHistologyContent;
