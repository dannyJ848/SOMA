/**
 * useRegionalEncyclopedia Hook
 *
 * Fetches all educational content for a specific anatomical region.
 * Combines data from:
 *   - regionContentMapping (REGION_CONTENT_MAP) for histology, pathology, physiology, models
 *   - ContentService (knowledge graph, symptoms DB, specialties, anatomy encyclopedia)
 *
 * The hook merges both sources so tabs get the richest data available.
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
import {
  useContentService,
  type AnatomyRegion,
  type SymptomEntry,
  type MedicalSpecialty,
  type KnowledgeNode,
} from '../../services/ContentService';
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

// ---------------------------------------------------------------------------
// Internal: enrichment data fetched from ContentService
// ---------------------------------------------------------------------------

interface ContentServiceData {
  anatomyRegion: AnatomyRegion | undefined;
  symptoms: SymptomEntry[];
  specialties: MedicalSpecialty[];
  relatedNodes: KnowledgeNode[];
}

const EMPTY_CONTENT_SERVICE_DATA: ContentServiceData = {
  anatomyRegion: undefined,
  symptoms: [],
  specialties: [],
  relatedNodes: [],
};

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

// ---------------------------------------------------------------------------
// Enrichment helpers: merge ContentService data into regional content
// ---------------------------------------------------------------------------

/**
 * Enrich structures with anatomy encyclopedia data from ContentService.
 * Merges extra AnatomyRegion details into existing structures without duplicates.
 */
function enrichStructuresWithAnatomyRegion(
  existing: AnatomicalStructure[],
  anatomyRegion: AnatomyRegion | undefined,
  regionId: string,
): AnatomicalStructure[] {
  if (!anatomyRegion) return existing;

  const existingIds = new Set(existing.map(s => s.id));

  // The AnatomyRegion may have a richer description - use it to augment the
  // main region structure if present.
  const enriched = existing.map(s => {
    if (s.id === regionId && anatomyRegion.function) {
      return {
        ...s,
        description: s.description || anatomyRegion.function,
      };
    }
    return s;
  });

  // If the anatomy region has a different id that is not already present, add it
  const encyclopediaId = `anatomy:${anatomyRegion.id}`;
  if (!existingIds.has(encyclopediaId) && !existingIds.has(anatomyRegion.id)) {
    if (anatomyRegion.id !== regionId) {
      enriched.push({
        id: encyclopediaId,
        name: anatomyRegion.name,
        description: anatomyRegion.function ?? '',
        type: 'other',
        parentId: regionId,
      });
    }
  }

  return enriched;
}

/**
 * Merge symptoms from the symptom database into the pathology section.
 * Adds symptom names to clinical presentations if not already present,
 * and enriches condition symptom lists with matching symptom DB entries.
 */
function enrichPathologyWithSymptoms(
  pathology: PathologyContent,
  symptoms: SymptomEntry[],
): PathologyContent {
  if (symptoms.length === 0) return pathology;

  const existingPresentations = new Set(
    pathology.clinicalPresentations.map(p => p.toLowerCase()),
  );

  const additionalPresentations: string[] = [];
  for (const symptom of symptoms) {
    const name = symptom.name;
    if (!existingPresentations.has(name.toLowerCase())) {
      additionalPresentations.push(name);
      existingPresentations.add(name.toLowerCase());
    }
  }

  // Enrich common conditions with symptom names from the DB
  const enrichedConditions = pathology.commonConditions.map(condition => {
    const matchingSymptoms = symptoms.filter(s =>
      s.possibleCauses?.some(
        cause =>
          condition.name.toLowerCase().includes(cause.conditionId.toLowerCase()) ||
          cause.conditionId.toLowerCase().includes(
            condition.name.toLowerCase().replace(/\s+/g, '-'),
          ),
      ),
    );

    if (matchingSymptoms.length === 0) return condition;

    const existingSymptomNames = new Set(condition.symptoms.map(s => s.toLowerCase()));
    const newSymptomNames = matchingSymptoms
      .map(s => s.name)
      .filter(name => !existingSymptomNames.has(name.toLowerCase()));

    return {
      ...condition,
      symptoms: [...condition.symptoms, ...newSymptomNames],
    };
  });

  return {
    ...pathology,
    commonConditions: enrichedConditions,
    clinicalPresentations: [
      ...pathology.clinicalPresentations,
      ...additionalPresentations,
    ],
  };
}

/**
 * Add relevant specialties to clinical notes.
 */
function enrichClinicalNotesWithSpecialties(
  existingNotes: string[],
  specialties: MedicalSpecialty[],
): string[] {
  if (specialties.length === 0) return existingNotes;

  const specialtyNames = specialties.map(s => s.name).join(', ');
  const specialtyNote = `Relevant medical specialties: ${specialtyNames}`;

  if (existingNotes.some(n => n.startsWith('Relevant medical specialties:'))) {
    return existingNotes;
  }

  return [...existingNotes, specialtyNote];
}

/**
 * Merge related structure IDs from content service knowledge graph nodes.
 */
function enrichRelatedRegions(
  existing: string[],
  relatedNodes: KnowledgeNode[],
): string[] {
  const existingSet = new Set(existing.map(r => r.toLowerCase()));
  const additional: string[] = [];

  for (const node of relatedNodes) {
    const shortId = node.id.replace(/^anatomy:/, '');
    if (
      !existingSet.has(shortId.toLowerCase()) &&
      !existingSet.has(node.id.toLowerCase())
    ) {
      additional.push(shortId);
      existingSet.add(shortId.toLowerCase());
    }
  }

  return [...existing, ...additional];
}

/**
 * Hook to fetch all encyclopedia content for a region.
 *
 * Combines:
 *   1. REGION_CONTENT_MAP (via getRegionContent) for static educational content
 *   2. ContentService (via useContentService) for live data from the knowledge
 *      graph, symptom database, specialty map, and anatomy encyclopedia
 */
export function useRegionalEncyclopedia(regionId: string): UseRegionalEncyclopediaResult {
  const contentService = useContentService();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [regionContent, setRegionContent] = useState<RegionContent | null>(null);
  const [serviceData, setServiceData] = useState<ContentServiceData>(
    EMPTY_CONTENT_SERVICE_DATA,
  );
  const [fetchKey, setFetchKey] = useState(0);

  // Fetch region content from both sources in parallel
  useEffect(() => {
    let mounted = true;

    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 1. Get static region content from REGION_CONTENT_MAP
        const staticContent = getRegionContent(regionId);

        if (!mounted) return;

        if (!staticContent) {
          throw new Error(`Region "${regionId}" not found in encyclopedia`);
        }

        // 2. Fetch enrichment data from ContentService in parallel
        const bodySystems = staticContent.bodySystems;

        const [anatomyRegion, symptoms, specialtiesArrays, relatedNodes] =
          await Promise.all([
            // Get anatomy region details from the encyclopedia
            contentService.getAnatomyRegion(regionId),

            // Get symptoms for this region
            contentService
              .getSymptomsByRegion(regionId)
              .catch(() => [] as SymptomEntry[]),

            // Get specialties for each body system the region belongs to
            Promise.all(
              bodySystems.map(system =>
                contentService
                  .getSpecialtiesForBodySystem(system as any)
                  .catch(() => [] as MedicalSpecialty[]),
              ),
            ),

            // Get related anatomy nodes from knowledge graph
            Promise.resolve(
              contentService.getRelated(
                `anatomy:${regionId}`,
                undefined,
                'anatomy',
              ),
            ),
          ]);

        if (!mounted) return;

        // Flatten and deduplicate specialties
        const seenSpecialtyIds = new Set<string>();
        const uniqueSpecialties: MedicalSpecialty[] = [];
        for (const arr of specialtiesArrays) {
          for (const sp of arr) {
            if (!seenSpecialtyIds.has(sp.specialtyId)) {
              seenSpecialtyIds.add(sp.specialtyId);
              uniqueSpecialties.push(sp);
            }
          }
        }

        setRegionContent(staticContent);
        setServiceData({
          anatomyRegion,
          symptoms,
          specialties: uniqueSpecialties,
          relatedNodes,
        });
      } catch (err) {
        if (!mounted) return;
        setError(
          err instanceof Error ? err : new Error('Failed to load region content'),
        );
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
  }, [regionId, fetchKey, contentService]);

  // Build encyclopedia data by merging static and service content
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

    // Build base structures & layers from static region content
    const baseStructures = buildStructuresFromRegion(regionContent);
    const layers = buildLayersFromRegion(regionContent);

    // Enrich structures with anatomy encyclopedia data
    const structures = enrichStructuresWithAnatomyRegion(
      baseStructures,
      serviceData.anatomyRegion,
      regionContent.id,
    );

    // Enrich pathology with real symptoms from symptom database
    const enrichedPathology = enrichPathologyWithSymptoms(
      regionContent.pathology,
      serviceData.symptoms,
    );

    // Enrich clinical notes with specialty info
    const enrichedClinicalNotes = enrichClinicalNotesWithSpecialties(
      regionContent.clinicalNotes,
      serviceData.specialties,
    );

    // Enrich related regions from knowledge graph
    const enrichedRelatedRegions = enrichRelatedRegions(
      regionContent.relatedStructures,
      serviceData.relatedNodes,
    );

    // Use the anatomy encyclopedia description if it is richer
    const regionDescription =
      serviceData.anatomyRegion?.function &&
      serviceData.anatomyRegion.function.length > regionContent.description.length
        ? `${regionContent.description} ${serviceData.anatomyRegion.function}`
        : regionContent.description;

    return {
      region: {
        id: regionContent.id,
        name: regionContent.name,
        description: regionDescription,
      },
      structures,
      layers,
      models: regionContent.models,
      content: {
        physiology: regionContent.physiology,
        pathology: enrichedPathology,
        histology: {
          ...regionContent.histology,
          images: generateHistologyImages(regionContent),
        },
      },
      relatedRegions: enrichedRelatedRegions,
      clinicalNotes: enrichedClinicalNotes,
    };
  }, [regionContent, regionId, serviceData]);

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
