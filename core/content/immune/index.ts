// Immune System Content Exports

// Core Immunology - Innate Immunity
export { innateBarriersContent } from './innate-barriers';
export { innateCellsContent } from './innate-cells';
export { patternRecognitionContent } from './pattern-recognition';

// Core Immunology - Adaptive Immunity (only from root, not from physiology)
export { adaptiveImmunityContent } from './adaptive-immunity';

// Clinical Immunology
export { immunodeficiencyDisordersContent } from './clinical/immunodeficiency-disorders';
export { autoimmuneBasicsContent } from './clinical/autoimmune-basics';
export { hypersensitivityReactionsContent } from './clinical/hypersensitivity-reactions';

// Histology
export { lymphNodeStructureContent } from './histology/lymph-node-structure';
export { spleenHistologyContent } from './histology/spleen-histology';
export { thymusStructureContent } from './histology/thymus-structure';

// Pathology
export { autoimmunityMechanismsContent } from './pathology/autoimmunity-mechanisms';
export { immunodeficiencyPathologyContent } from './pathology/immunodeficiency-pathology';
export { lymphomaBasicsContent } from './pathology/lymphoma-basics';

// Physiology - Note: adaptiveImmunityContent is already exported from root
export { innateImmunityContent } from './physiology/innate-immunity';
// export { adaptiveImmunityContent } from './physiology/adaptive-immunity'; // Duplicate - already exported from root
export { immuneRegulationContent } from './physiology/immune-regulation';

// Re-export for convenience - Core Immunology
export { default as innateBarriers } from './innate-barriers';
export { default as innateCells } from './innate-cells';
export { default as patternRecognition } from './pattern-recognition';
export { default as adaptiveImmunityOverview } from './adaptive-immunity';

// Re-export for convenience - Clinical/Histology/Pathology/Physiology
export { default as immunodeficiencyDisorders } from './clinical/immunodeficiency-disorders';
export { default as autoimmuneBasics } from './clinical/autoimmune-basics';
export { default as hypersensitivityReactions } from './clinical/hypersensitivity-reactions';
export { default as lymphNodeStructure } from './histology/lymph-node-structure';
export { default as spleenHistology } from './histology/spleen-histology';
export { default as thymusStructure } from './histology/thymus-structure';
export { default as autoimmunityMechanisms } from './pathology/autoimmunity-mechanisms';
export { default as immunodeficiencyPathology } from './pathology/immunodeficiency-pathology';
export { default as lymphomaBasics } from './pathology/lymphoma-basics';
export { default as innateImmunity } from './physiology/innate-immunity';
// export { default as adaptiveImmunity } from './physiology/adaptive-immunity'; // Duplicate
export { default as immuneRegulation } from './physiology/immune-regulation';

// Aggregate all core immunology content
import { innateBarriersContent } from './innate-barriers';
import { innateCellsContent } from './innate-cells';
import { patternRecognitionContent } from './pattern-recognition';
import { adaptiveImmunityContent } from './adaptive-immunity';

export const coreImmunologyContent = [
  innateBarriersContent,
  innateCellsContent,
  patternRecognitionContent,
  adaptiveImmunityContent,
];
