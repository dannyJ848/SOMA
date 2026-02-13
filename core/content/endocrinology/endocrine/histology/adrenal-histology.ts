/**
 * Adrenal Histology - Comprehensive Educational Content
 */

import { EducationalContent } from '../../../types';

export const adrenalHistology: EducationalContent = {
  id: 'histology-adrenal-glands',
  type: 'structure',
  name: 'Adrenal Histology',
  alternateNames: ['Adrenal Microscopic Anatomy', 'Suprarenal Gland Histology'],

  levels: {
    1: {
      level: 1,
      summary: 'The adrenal gland has two main parts: the outer cortex that makes steroid hormones, and the inner medulla that makes adrenaline.',
      explanation: `The adrenal gland is like a layered cake with different parts making different hormones.

**Adrenal Cortex (outer part):**
- Three zones (layers)
- Makes cortisol, aldosterone, and sex hormones
- Yellowish color from cholesterol

**Adrenal Medulla (inner part):**
- Central part of gland
- Makes adrenaline and noradrenaline
- Brownish color
- Part of the nervous system

**The three zones of cortex:**
1. Zona glomerulosa (outer) - makes aldosterone
2. Zona fasciculata (middle) - makes cortisol
3. Zona reticularis (inner) - makes sex hormones

**Blood supply:**
- Rich blood vessels
- Three arteries supply the gland
- One vein drains each gland

**Normal appearance:**
- Cortex is thicker than medulla
- Cells arranged in distinct patterns in each zone
- Lipid droplets visible in cortical cells`,
      keyTerms: [
        { term: 'adrenal cortex', definition: 'Outer part of adrenal gland making steroid hormones' },
        { term: 'adrenal medulla', definition: 'Inner part making adrenaline' },
        { term: 'zona', definition: 'Zone or layer of the adrenal cortex' },
      ],
      analogies: [
        'The adrenal gland is like a factory with different assembly lines - the cortex has three production lines for different hormones, and the medulla is the shipping department releasing adrenaline.',
      ],
      examples: [
        'On microscopy, the adrenal cortex shows three distinct zones with different cell arrangements and functions.',
      ],
    },
    2: {
      level: 2,
      summary: 'The adrenal cortex has three zones (glomerulosa, fasciculata, reticularis) producing different steroids. The medulla contains chromaffin cells producing catecholamines. The gland has a rich vascular network.',
      explanation: `## Adrenal Cortex

**Zona Glomerulosa (15%):**
- Outermost zone
- Arched clusters (glomeruloid)
- Aldosterone production
- Salt-regulating hormones
- No 17-alpha-hydroxylase

**Zona Fasciculata (75%):**
- Middle and largest zone
- Straight cords (fascicles)
- 2 cells thick
- Lipid-rich (foamy cytoplasm)
- Cortisol production
- Glucocorticoids

**Zona Reticularis (10%):**
- Innermost cortex
- Network pattern (reticular)
- Smaller cells
- Lipofuscin pigment
- Sex hormones (DHEA)

## Adrenal Medulla

**Chromaffin Cells:**
- Modified sympathetic ganglion cells
- Polyhedral shape
- Basophilic cytoplasm
- Produce catecholamines
- Epinephrine (80%)
- Norepinephrine (20%)

**Sustentacular Cells:**
- Supporting cells
- At periphery of cell nests
- Schwann cell-like

**Blood Vessels:**
- Sinusoids between cells
- Receives cortical venous blood
- "Cortical-medullary portal" system

## Capsule and Blood Supply

**Capsule:**
- Dense connective tissue
- Collagen fibers
- Capsular arteries

**Arterial Supply:**
- Superior adrenal artery
- Middle adrenal artery
- Inferior adrenal artery

**Venous Drainage:**
- Central adrenal vein
- Short, drains into IVC (right) or renal vein (left)
- Large luminal diameter`,
      keyTerms: [
        { term: 'chromaffin cells', definition: 'Cells in adrenal medulla producing catecholamines' },
        { term: 'zona fasciculata', definition: 'Middle layer of adrenal cortex making cortisol' },
        { term: 'lipofuscin', definition: 'Brown pigment from lipid breakdown' },
      ],
    },
    3: {
      level: 3,
      summary: 'Adrenal cortical cells contain abundant smooth endoplasmic reticulum and mitochondria for steroid synthesis. The zona glomerulosa lacks 17-alpha-hydroxylase, explaining its selective aldosterone production. Medullary chromaffin cells store catecholamines in secretory granules.',
      explanation: `## Steroid-Producing Cell Features

**Common Features (All Zones):**
- Abundant smooth ER (steroid synthesis)
- Tubulovesicular mitochondria
- Lipid droplets (cholesterol)
- No secretory granules (diffuse secretion)

**Zone-Specific Features:**

*Zona Glomerulosa:*
- Scant lipid
- Mitochondria with lamellar cristae
- No 17-alpha-hydroxylase
- Angiotensin II receptors

*Zona Fasciculata:*
- Abundant lipid (vacuolated)
- ACTH-dependent
- 17-alpha-hydroxylase present

*Zona Reticularis:*
- Lipofuscin accumulation
- 17,20-lyase activity
- DHEA sulfotransferase

## Medullary Cell Ultrastructure

**Chromaffin Granules:**
- Membrane-bound
- Catecholamine storage
- Core proteins (chromogranins)
- ATP, calcium

**Epinephrine Cells:**
- Larger granules
- Pale cytoplasm
- Phenylethanolamine N-methyltransferase (PNMT)
- Requires cortisol (from high local concentration)

**Norepinephrine Cells:**
- Smaller, denser granules
- Basophilic cytoplasm
- No PNMT

## Embryology

**Cortex:**
- Mesodermal origin
- Coelomic epithelium
- Proliferative capacity

**Medulla:**
- Neural crest origin
- Migrates with sympathetic ganglia
- Invades cortex

## Functional Relationships

**Cortisol and Medulla:**
- High cortisol in medullary blood
- Induces PNMT
- Converts norepinephrine to epinephrine
- "Cortical-medullary portal" system

**Blood Flow:**
- Cortex to medulla
- Delivers cortisol to medulla
- High intra-adrenal cortisol`,
      keyTerms: [
        { term: '17-alpha-hydroxylase', definition: 'Enzyme needed for cortisol synthesis; absent in zona glomerulosa' },
        { term: 'chromogranins', definition: 'Proteins in secretory granules of neuroendocrine cells' },
        { term: 'PNMT', definition: 'Phenylethanolamine N-methyltransferase; converts NE to epinephrine' },
      ],
      clinicalNotes: 'The intra-adrenal portal system delivers high concentrations of cortisol to the medulla, which is necessary for PNMT expression and epinephrine synthesis.',
    },
    4: {
      level: 4,
      summary: 'Pathological adrenal histology includes cortical adenomas with lipid-rich cells, cortical carcinomas with atypia and invasion, pheochromocytomas with zellballen architecture, and adrenal hyperplasia patterns.',
      explanation: `## Cortical Adenoma

**Features:**
- Well-circumscribed
- Lipid-rich cells (yellow)
- Resembles fasciculata
- No atypia
- No invasion
- May be functional or non-functional

**Variants:**
- Oncocytic (eosinophilic)
- Myelolipoma (fat, hematopoietic elements)
- Black (pigmented) adenoma

## Cortical Carcinoma

**Features:**
- Large (>5 cm)
- Invasion of capsule or vessels
- Atypia
- Mitoses (>5 per 50 HPF)
- Necrosis
- Broad fibrous bands
- Weiss criteria for diagnosis

**Histologic Patterns:**
- Diffuse
- Trabecular
- Alveolar
- Oncocytic

## Pheochromocytoma

**Architecture:**
- Zellballen (nests)
- Rich vascular network
- Sustentacular cells at periphery
- Neuroendocrine appearance

**Cell Features:**
- Basophilic cytoplasm
- Salt-and-pepper chromatin
- Pleomorphism (can be marked)
- Nuclear pseudoinclusions

**Grading:**
- PASS (Pheochromocytoma of Adrenal Gland Scaled Score)
- Predicts behavior
- Not definitive

**Malignancy:**
- Defined by metastases
- Cannot predict histologically

## Hyperplasia

**Diffuse Hyperplasia:**
- ACTH-dependent (Cushing disease)
- Bilateral
- Cortical thickening
- Reticularis prominence

**Nodular Hyperplasia:**
- ACTH-independent
- Macronodules (>1 cm)
- Micronodules
- Primary pigmented nodular adrenocortical disease (PPNAD)

**Congenital Adrenal Hyperplasia:**
- Enzyme deficiency
- Cortical hyperplasia
- Discordant maturation

## Inflammatory Conditions

**Adrenalitis:**
- Autoimmune (Addison disease)
- Lymphocytic infiltration
- Cortical atrophy
- Medulla spared

**Infectious:**
- TB (caseating granulomas)
- Fungal
- CMV (HIV patients)
- Waterhouse-Friderichsen (hemorrhage)

**Infiltrative:**
- Amyloidosis
- Hemochromatosis
- Metastases (most common tumor in adrenal)`,
      keyTerms: [
        { term: 'zellballen', definition: 'Nests of cells characteristic of pheochromocytoma' },
        { term: 'Weiss criteria', definition: 'Histologic criteria for adrenocortical carcinoma' },
        { term: 'PPNAD', definition: 'Primary pigmented nodular adrenocortical disease' },
      ],
      clinicalNotes: 'Pheochromocytomas can show marked nuclear pleomorphism (bizarre nuclei) without being malignant; malignancy can only be defined by the presence of metastases.',
    },
    5: {
      level: 5,
      summary: 'Advanced adrenal histology integrates molecular pathology, immunohistochemistry for diagnosis, and recognition of rare entities including adrenocortical tumors of uncertain malignant potential and composite pheochromocytomas.',
      explanation: `## Molecular Pathology

**Cortical Tumors:**
- TP53 mutations (aggressive)
- CTNNB1 (beta-catenin)
- IGF2 overexpression
- Chromosomal alterations
- miRNA profiles

**Pheochromocytoma:**
- RET (MEN2)
- VHL
- SDHx genes
- EPAS1 (HIF2A)
- MAX, TMEM127

**Immunohistochemistry:**

*Cortex:*
- Melan-A, inhibin, calretinin
- Synaptophysin (focal)
- Ki-67 (proliferation index)

*Medulla:*
- Chromogranin A, synaptophysin
- S100 (sustentacular)
- GATA3

## Borderline Lesions

**Adrenocortical Tumors of Uncertain Malignant Potential (ATUMP):**
- Atypical features
- Not clearly malignant
- Uncertain behavior
- Close follow-up

**Composite Pheochromocytoma:**
- Pheochromocytoma + other component
- Ganglioneuroma
- Malignant peripheral nerve sheath tumor
- Neuroendocrine component

## Special Techniques

**Electron Microscopy:**
- Steroid hormone crystals
- Chromaffin granules
- Diagnostic in challenging cases

**Molecular Testing:**
- Gene panels
- FISH for chromosomal gains
- Prognostic stratification

## Research Directions

**Biomarkers:**
- SF-1 (steroidogenic factor-1)
- Prognostic markers
- Liquid biopsy

**Precision Pathology:**
- Integrated diagnosis
- Morphology + molecular
- Treatment guidance

**Artificial Intelligence:**
- Image analysis
- Classification algorithms
- Prognosis prediction`,
      keyTerms: [
        { term: 'ATUMP', definition: 'Adrenocortical tumor of uncertain malignant potential' },
        { term: 'composite pheochromocytoma', definition: 'Pheochromocytoma with additional neural component' },
        { term: 'SF-1', definition: 'Steroidogenic factor-1; transcription factor marker' },
      ],
      clinicalNotes: 'Integrated pathology reporting combining histology, immunohistochemistry, and molecular testing is becoming standard for adrenal tumors to guide prognosis and treatment.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-endocrine-2022',
      type: 'article',
      title: 'WHO Classification of Endocrine Tumours',
      source: 'WHO',
      authors: ['Asa SL', 'Mete O', 'Perry A', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-adrenal-glands', targetType: 'structure', relationship: 'related', label: 'Adrenal Glands' },
    { targetId: 'condition-pheochromocytoma', targetType: 'condition', relationship: 'related', label: 'Pheochromocytoma' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['histology', 'pathology', 'endocrinology'],
    keywords: ['adrenal histology', 'cortex', 'medulla', 'chromaffin', 'steroid'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['pathology', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adrenalHistology;
