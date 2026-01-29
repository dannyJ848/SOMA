/**
 * useRegionalEncyclopedia Hook
 *
 * Fetches all educational content for a specific anatomical region.
 * Combines data from region content mapping, histology, pathology, and physiology sources.
 */

import { useState, useEffect, useMemo } from 'react';
import {
  getRegionContent,
  type RegionContent,
  type PhysiologyContent,
  type PathologyContent,
  type HistologyContent,
  type ModelReference,
} from '../../education/regionContentMapping';
import type { HistologyImage } from '../../../core/histology/types';

/**
 * Anatomical structure within a region
 */
export interface AnatomicalStructure {
  id: string;
  name: string;
  description: string;
  type: 'organ' | 'muscle' | 'bone' | 'nerve' | 'vessel' | 'tissue' | 'other';
  parentId?: string;
  children?: string[];
  fmaId?: string; // Foundational Model of Anatomy ID
  modelPath?: string;
}

/**
 * Layer definition for anatomical visualization
 */
export interface AnatomicalLayer {
  id: string;
  name: string;
  order: number; // Display order (0 = deepest/innermost)
  structures: string[]; // Structure IDs in this layer
  color?: string;
  opacity?: number;
  visible?: boolean;
}

/**
 * Extended content for histology tab including images
 */
export interface HistologyTabContent extends HistologyContent {
  images: HistologyImage[];
}

/**
 * Regional encyclopedia data structure
 */
export interface RegionalEncyclopediaData {
  region: {
    id: string;
    name: string;
    description: string;
  };
  structures: AnatomicalStructure[];
  layers: AnatomicalLayer[];
  models: ModelReference[];
  content: {
    physiology: PhysiologyContent;
    pathology: PathologyContent;
    histology: HistologyTabContent;
  };
  relatedRegions: string[];
  clinicalNotes: string[];
}

export interface UseRegionalEncyclopediaResult extends RegionalEncyclopediaData {
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Convert region content to anatomical structures
 */
function buildStructuresFromRegion(regionContent: RegionContent): AnatomicalStructure[] {
  const structures: AnatomicalStructure[] = [];

  // Create main region structure
  structures.push({
    id: regionContent.id,
    name: regionContent.name,
    description: regionContent.description,
    type: 'other',
  });

  // Add tissue types as structures
  regionContent.histology.tissueTypes.forEach((tissue, index) => {
    structures.push({
      id: `${regionContent.id}-tissue-${index}`,
      name: tissue.name,
      description: tissue.description,
      type: 'tissue',
      parentId: regionContent.id,
    });
  });

  // Add microscopic structures
  regionContent.histology.microscopicStructures.forEach((structure, index) => {
    structures.push({
      id: `${regionContent.id}-micro-${index}`,
      name: structure.name,
      description: structure.description,
      type: 'tissue',
      parentId: regionContent.id,
    });
  });

  return structures;
}

/**
 * Build anatomical layers for visualization
 */
function buildLayersFromRegion(regionContent: RegionContent): AnatomicalLayer[] {
  const layers: AnatomicalLayer[] = [];

  // Create layers based on tissue categories
  const tissueCategories = new Set(
    regionContent.histology.tissueTypes.map(t => t.category)
  );

  const categoryOrder: Record<string, number> = {
    epithelial: 0, // Surface layer
    connective: 1,
    muscle: 2,
    nervous: 3, // Deepest
  };

  tissueCategories.forEach(category => {
    const tissueIds = regionContent.histology.tissueTypes
      .filter(t => t.category === category)
      .map((_, i) => `${regionContent.id}-tissue-${i}`);

    layers.push({
      id: `layer-${category}`,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      order: categoryOrder[category] ?? 99,
      structures: tissueIds,
      visible: true,
    });
  });

  return layers.sort((a, b) => a.order - b.order);
}

/**
 * Generate placeholder histology images based on region content
 */
function generateHistologyImages(regionContent: RegionContent): HistologyImage[] {
  const images: HistologyImage[] = [];

  regionContent.histology.tissueTypes.forEach((tissue, index) => {
    images.push({
      id: `${regionContent.id}-histology-${index}`,
      title: `${tissue.name} - ${regionContent.name}`,
      description: tissue.description,
      tissueCategory: tissue.category,
      tissueSubtype: undefined,
      organSource: regionContent.id,
      bodySystem: regionContent.bodySystems[0] || 'musculoskeletal',
      stain: 'H&E',
      magnification: '10x',
      filename: `${regionContent.id}-${tissue.category}-${index}.jpg`,
      filePath: `/images/histology/${regionContent.id}/${tissue.category}.jpg`,
      fileSize: 0,
      width: 800,
      height: 600,
      annotations: {
        points: [],
        regions: [],
      },
      relatedStructures: [],
      relatedImages: [],
      source: 'other',
      license: 'Educational use',
      complexityLevel: 3,
      keyFeatures: regionContent.histology.keyFeatures.slice(0, 3),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  });

  return images;
}

/**
 * Hook to fetch all encyclopedia content for a region
 */
export function useRegionalEncyclopedia(regionId: string): UseRegionalEncyclopediaResult {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [regionContent, setRegionContent] = useState<RegionContent | null>(null);
  const [fetchKey, setFetchKey] = useState(0);

  // Fetch region content
  useEffect(() => {
    let mounted = true;

    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate async fetch - in production this would be an API call
        await new Promise(resolve => setTimeout(resolve, 100));

        const content = getRegionContent(regionId);

        if (!mounted) return;

        if (!content) {
          throw new Error(`Region "${regionId}" not found in encyclopedia`);
        }

        setRegionContent(content);
      } catch (err) {
        if (!mounted) return;
        setError(err instanceof Error ? err : new Error('Failed to load region content'));
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      mounted = false;
    };
  }, [regionId, fetchKey]);

  // Build encyclopedia data from region content
  const encyclopediaData = useMemo<RegionalEncyclopediaData>(() => {
    if (!regionContent) {
      return {
        region: { id: regionId, name: '', description: '' },
        structures: [],
        layers: [],
        models: [],
        content: {
          physiology: {
            functions: [],
            processes: [],
            homeostasis: [],
            normalParameters: [],
            systemInteractions: [],
          },
          pathology: {
            commonConditions: [],
            injuryMechanisms: [],
            diseaseCategories: [],
            diagnosticMarkers: [],
            clinicalPresentations: [],
          },
          histology: {
            tissueTypes: [],
            keyFeatures: [],
            stains: [],
            cellTypes: [],
            microscopicStructures: [],
            images: [],
          },
        },
        relatedRegions: [],
        clinicalNotes: [],
      };
    }

    return {
      region: {
        id: regionContent.id,
        name: regionContent.name,
        description: regionContent.description,
      },
      structures: buildStructuresFromRegion(regionContent),
      layers: buildLayersFromRegion(regionContent),
      models: regionContent.models,
      content: {
        physiology: regionContent.physiology,
        pathology: regionContent.pathology,
        histology: {
          ...regionContent.histology,
          images: generateHistologyImages(regionContent),
        },
      },
      relatedRegions: regionContent.relatedStructures,
      clinicalNotes: regionContent.clinicalNotes,
    };
  }, [regionContent, regionId]);

  const refetch = () => {
    setFetchKey(prev => prev + 1);
  };

  return {
    ...encyclopediaData,
    isLoading,
    error,
    refetch,
  };
}

export default useRegionalEncyclopedia;
