/**
 * Endocrine Histology
 *
 * Microscopic anatomy of endocrine glands including cellular organization,
 * ultrastructure, and histological features related to hormone production.
 */

import { EducationalContent } from '../../types';

export const ENDOCRINE_HISTOLOGY: EducationalContent = {
  id: 'endocrine-histology',
  type: 'concept',
  name: 'Endocrine Histology',
  alternateNames: ['Endocrine gland microscopy', 'Endocrine tissue organization'],

  levels: {
    1: {
      level: 1,
      summary: 'Under a microscope, hormone-making glands have special cells arranged in patterns that help them make and release hormones into the blood.',
      explanation: `**What Do Hormone Glands Look Like Under a Microscope?**

Each gland in your body that makes hormones has a special structure designed for its job:

**Thyroid Gland:**
- Made of tiny balls called follicles
- Each follicle is filled with a jelly-like material (colloid)
- Cells around the edges make thyroid hormone and store it in the colloid

**Adrenal Gland:**
- Has two parts: outer layer (cortex) and inner part (medulla)
- The outer layer has three zones, each making different hormones
- The inner part makes adrenaline

**Pituitary Gland:**
- Has a front part and a back part
- Front part has many different cell types making different hormones
- Back part stores hormones made by the brain

**Pancreatic Islets:**
- Small clusters of hormone-making cells scattered in the pancreas
- Different cells make insulin or glucagon
- Surrounded by cells that make digestive enzymes

**Why Does Structure Matter?**

- Each cell type is specialized for making specific hormones
- The arrangement helps hormones get into the blood quickly
- Doctors can see if cells look abnormal under a microscope`,
      keyTerms: [
        { term: 'follicle', definition: 'A small ball-shaped structure in the thyroid that stores hormones' },
        { term: 'colloid', definition: 'The jelly-like material inside thyroid follicles that stores hormones' },
        { term: 'islet', definition: 'A small cluster of hormone-making cells in the pancreas' },
      ],
      analogies: [
        'Thyroid follicles are like water balloons filled with hormone "soup" ready to be released.',
        'The adrenal gland is like a layered cake - each layer makes something different.',
      ],
      examples: [
        'When the thyroid is very active, the follicles become smaller because hormone is being released faster than stored.',
        'Insulin-making cells in islets can be stained blue, while glucagon cells stain pink.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endocrine glands show characteristic histological organization with follicular, cord/cluster, or diffuse arrangements of epithelial cells specialized for hormone synthesis and secretion into fenestrated capillaries.',
      explanation: `**General Features of Endocrine Tissue:**

*Common Characteristics:*
- Epithelial cells with secretory function
- Rich blood supply (fenestrated capillaries)
- No ducts (unlike exocrine glands)
- Variable cell arrangements

*Organizational Patterns:*
| Pattern | Example | Description |
|---------|---------|-------------|
| Follicular | Thyroid | Spherical structures with central lumen |
| Cord/Trabecular | Adrenal cortex | Linear cell arrangements |
| Cluster | Islets of Langerhans | Discrete cell groups |
| Diffuse | Adrenal medulla | Cells without clear organization |

**Thyroid Histology:**

*Follicular Cells:*
- Simple cuboidal to columnar epithelium
- Height varies with activity (taller when active)
- Colloid fills central lumen
- Apical microvilli extend into colloid

*Parafollicular (C) Cells:*
- Scattered between follicles
- Larger, paler cytoplasm
- Produce calcitonin
- Not visible on routine H&E (need special stains)

**Adrenal Gland Histology:**

*Cortex Zones:*
| Zone | Cells | Hormone | Appearance |
|------|-------|---------|------------|
| Glomerulosa | Columnar clusters | Aldosterone | Arched/ball-like groups |
| Fasciculata | Large, pale cells | Cortisol | Radial cords |
| Reticularis | Small, dark cells | Androgens | Netlike pattern |

*Medulla:*
- Chromaffin cells (turn brown with chromium salts)
- Modified sympathetic neurons
- Produce epinephrine and norepinephrine

**Pituitary Histology:**

*Anterior Pituitary (Adenohypophysis):*
| Cell Type | Stain | Hormone |
|-----------|-------|---------|
| Somatotroph | Acidophil | Growth hormone |
| Lactotroph | Acidophil | Prolactin |
| Corticotroph | Basophil | ACTH |
| Thyrotroph | Basophil | TSH |
| Gonadotroph | Basophil | LH, FSH |

*Posterior Pituitary (Neurohypophysis):*
- Axon terminals from hypothalamus
- Pituicytes (supporting glial cells)
- Herring bodies (hormone storage granules)

**Pancreatic Islets:**

*Cell Types:*
| Cell | Hormone | Location in Islet | Percentage |
|------|---------|-------------------|------------|
| Beta | Insulin | Central | 70% |
| Alpha | Glucagon | Peripheral | 20% |
| Delta | Somatostatin | Scattered | 5-10% |
| PP | Pancreatic polypeptide | Variable | <5% |`,
      keyTerms: [
        { term: 'fenestrated capillaries', definition: 'Blood vessels with pores that allow hormones to easily enter the bloodstream' },
        { term: 'chromaffin cells', definition: 'Adrenal medulla cells that produce catecholamines and stain brown with chromium' },
        { term: 'acidophil', definition: 'Pituitary cells that stain pink/red with acidic dyes (GH and prolactin cells)' },
        { term: 'basophil', definition: 'Pituitary cells that stain blue/purple with basic dyes (ACTH, TSH, LH/FSH cells)' },
      ],
      analogies: [
        'The adrenal cortex zones are like layers of different flavors in a layered drink, each making something different.',
        'Fenestrated capillaries are like windows that let hormones escape into the blood easily.',
      ],
    },
    3: {
      level: 3,
      summary: 'Endocrine histology reveals specialized ultrastructural features including secretory granules, rough endoplasmic reticulum for protein hormones, smooth ER for steroid hormones, and characteristic immunohistochemical profiles for cell identification.',
      explanation: `**Ultrastructural Features:**

*Protein/Peptide Hormone Cells:*
- Extensive rough ER (protein synthesis)
- Prominent Golgi apparatus (processing)
- Dense secretory granules (storage)
- Examples: Beta cells, anterior pituitary

*Steroid Hormone Cells:*
- Abundant smooth ER (steroid synthesis)
- Tubular cristae mitochondria (cholesterol processing)
- Lipid droplets (cholesterol ester storage)
- Examples: Adrenal cortex, Leydig cells

**Thyroid - Detailed:**

*Follicular Cell Ultrastructure:*
\`\`\`
Apical Surface:
- Microvilli into colloid
- Pseudopods for colloid endocytosis
- Thyroid peroxidase (TPO)

Basolateral Surface:
- Sodium-iodide symporter (NIS)
- TSH receptor
- Na/K-ATPase
\`\`\`

*Functional Histology Correlation:*
| Activity State | Follicular Cell Height | Colloid | Appearance |
|----------------|----------------------|---------|------------|
| Resting | Flat/cuboidal | Abundant, dense | Full follicles |
| Active | Tall columnar | Scalloped edges | Resorption lacunae |
| Hyperactive | Very tall | Scant | Near-empty follicles |

*Immunohistochemistry:*
- TTF-1 (thyroid transcription factor 1): Follicular cells
- Thyroglobulin: Follicular cells and colloid
- Calcitonin: C cells (also chromogranin A)

**Adrenal - Detailed:**

*Zona Glomerulosa:*
- Clustered cells beneath capsule
- Moderate lipid content
- Express CYP11B2 (aldosterone synthase)

*Zona Fasciculata:*
- Largest zone (75% of cortex)
- "Spongiocytes" - pale, vacuolated cytoplasm
- Extensive SER and lipid droplets
- Express CYP17 (17α-hydroxylase)

*Zona Reticularis:*
- Compact, eosinophilic cells
- Lipofuscin pigment accumulation
- DHEA-S production

*Adrenal Medulla:*
\`\`\`
Chromaffin Cells:
- Named for chromium salt reaction
- Large, basophilic cytoplasm
- Dense-core granules (catecholamines)
- Sympathetic ganglia equivalent
\`\`\`

*Immunohistochemistry:*
| Marker | Location |
|--------|----------|
| Melan-A | Cortex (all zones) |
| SF-1 | Cortex |
| Inhibin-α | Cortex |
| Chromogranin A | Medulla |
| Synaptophysin | Medulla |

**Pituitary - Advanced:**

*Anterior Pituitary Organization:*
- Cells in cords and clusters
- 30-40% somatotrophs (lateral wings)
- 10-30% lactotrophs (central)
- Corticotrophs (mucoid wedge)

*Immunohistochemistry Panel:*
| Hormone | Transcription Factor | Notes |
|---------|---------------------|-------|
| GH | PIT1 | Most abundant cell type |
| Prolactin | PIT1 | Increases in pregnancy |
| ACTH | TPIT | Also produces MSH |
| TSH | PIT1 | Glycoprotein hormone |
| LH/FSH | SF-1 | Share same cell |

*Posterior Pituitary:*
- Unmyelinated axons from hypothalamus
- Herring bodies: Dilated axon terminals with neurosecretory granules
- Pituicytes: Supporting cells (modified astrocytes)
- Rich capillary network`,
      keyTerms: [
        { term: 'spongiocyte', definition: 'Lipid-laden cells of zona fasciculata with vacuolated "spongy" appearance' },
        { term: 'Herring bodies', definition: 'Neurosecretory granule accumulations in posterior pituitary axon terminals' },
        { term: 'TTF-1', definition: 'Thyroid transcription factor 1; nuclear marker for thyroid and lung epithelium' },
        { term: 'SF-1', definition: 'Steroidogenic factor 1; nuclear marker for adrenal cortex and gonads' },
      ],
      clinicalNotes: 'Immunohistochemistry is essential for pituitary adenoma classification and determining hormone production. TTF-1 helps identify thyroid origin of metastatic carcinoma. The ratio of follicular cell height to colloid density reflects thyroid activity and helps assess iodine status. Chromaffin reaction is rarely used now; chromogranin A IHC is preferred for medullary identification.',
    },
    4: {
      level: 4,
      summary: 'Advanced endocrine histology integrates molecular classification systems, stem cell biology, hormonal regulation of tissue architecture, and pathological correlates for understanding disease mechanisms and diagnostic applications.',
      explanation: `**Molecular Histology:**

*Thyroid Molecular Classification:*
\`\`\`
Thyroid Follicular Cell:
- PAX8 + TTF1 → Thyroid lineage specification
- FOXE1 (TTF2) → Migration, development
- NKX2-1 → Differentiation maintenance

C Cell Lineage:
- Neural crest origin
- MASH1/ASCL1 → Neuroendocrine specification
- GATA3 → C cell differentiation
\`\`\`

*Adrenal Cortex Development:*
| Zone | Key Factor | Regulation |
|------|------------|------------|
| Glomerulosa | DAX1, WT1 | Angiotensin II, K+ |
| Fasciculata | SF-1 | ACTH |
| Reticularis | ? | ? (age-dependent) |

**Stem/Progenitor Cells:**

*Thyroid:*
- Solid cell nests (remnants of ultimobranchial body)
- May harbor thyroid stem cells
- P63+, TTF1-, thyroglobulin-

*Adrenal:*
- Capsular/subcapsular progenitors
- Centripetal migration and differentiation
- Zona glomerulosa cells can convert to fasciculata
- Sonic hedgehog signaling

*Pituitary:*
- Rathke's pouch remnants
- SOX2+ stem cells
- May give rise to craniopharyngiomas

**Histological Features in Disease:**

*Autoimmune Thyroiditis (Hashimoto):*
- Lymphoid follicles with germinal centers
- Hurthle cell (oncocytic) metaplasia
- Follicular atrophy
- Fibrosis (late stage)

*Graves Disease:*
- Diffuse hyperplasia
- Tall columnar follicular cells
- Scalloped colloid
- Papillary infoldings
- Lymphoid infiltrate (less than Hashimoto)

*Adrenal Adenoma vs Carcinoma:*
| Feature | Adenoma | Carcinoma |
|---------|---------|-----------|
| Size | <5 cm | Often >5 cm |
| Architecture | Preserved | Disturbed |
| Mitoses | Rare | Frequent (>5/50 HPF) |
| Atypical mitoses | Absent | Present |
| Necrosis | Absent | Common |
| Vascular invasion | Absent | Present |
| Capsular invasion | Absent | Present |

*Weiss Score for ACC:*
9 criteria, ≥3 = malignant

**Immunohistochemistry in Pathology:**

*Thyroid Carcinoma:*
| Marker | PTC | FTC | MTC | ATC |
|--------|-----|-----|-----|-----|
| TTF-1 | + | + | + | +/- |
| Thyroglobulin | + | + | - | +/- |
| Calcitonin | - | - | + | - |
| PAX8 | + | + | + | +/- |
| CEA | - | - | + | - |

*Pituitary Adenoma Classification:*
\`\`\`
WHO 2017 Classification:
Based on transcription factors + hormones

PIT1 lineage:
- Somatotroph adenoma
- Lactotroph adenoma
- Thyrotroph adenoma
- Mixed GH/prolactin

TPIT lineage:
- Corticotroph adenoma

SF1 lineage:
- Gonadotroph adenoma

Null cell:
- No hormone, no transcription factor
\`\`\`

**Electron Microscopy Applications:**

*Secretory Granule Size:*
| Tumor | Granule Size | Type |
|-------|--------------|------|
| GH adenoma | 150-600 nm | Dense-granulated |
| GH adenoma | 100-250 nm | Sparse-granulated |
| Prolactinoma | 150-300 nm | Pleomorphic |
| ACTH adenoma | 200-450 nm | Dense-granulated |

*Diagnostic Value:*
- Silent corticotroph adenoma (ACTH granules, no clinical syndrome)
- Crooke's cell change (perinuclear keratin in glucocorticoid excess)
- Oncocytic transformation (abundant mitochondria)`,
      keyTerms: [
        { term: 'Weiss score', definition: 'Histopathological scoring system using 9 criteria to distinguish adrenal adenoma from carcinoma' },
        { term: 'Hurthle cell', definition: 'Oncocytic metaplasia of follicular cells with abundant eosinophilic, granular cytoplasm from packed mitochondria' },
        { term: 'solid cell nests', definition: 'Ultimobranchial body remnants in thyroid that may contain stem cells' },
        { term: 'Crooke change', definition: 'Perinuclear hyaline change in corticotrophs due to glucocorticoid excess' },
      ],
      clinicalNotes: 'The WHO 2017 pituitary tumor classification relies on transcription factor expression (PIT1, TPIT, SF1) plus hormone immunostains for accurate categorization. Sparse-granulated somatotroph adenomas often respond less well to somatostatin analogs. Silent corticotroph adenomas may have aggressive behavior despite lacking clinical Cushing syndrome.',
    },
    5: {
      level: 5,
      summary: 'Expert endocrine histology encompasses advanced molecular diagnostics, single-cell analysis, spatial transcriptomics, and integration of morphology with genomic/proteomic profiling for precision diagnosis and emerging therapeutic targets.',
      explanation: `**Single-Cell Analysis:**

*Thyroid:*
\`\`\`
Single-cell RNA-seq reveals:
- Follicular cell heterogeneity
- C cell subtypes
- Stromal populations
- Immune microenvironment

Applications:
- Tumor cell of origin
- Dedifferentiation mechanisms
- Therapeutic targets
\`\`\`

*Islet Biology:*
| Cell Type | Markers | Heterogeneity |
|-----------|---------|---------------|
| Beta cell | INS, MAFA, PDX1 | Virgin β, mature β |
| Alpha cell | GCG, ARX | Functional subtypes |
| Delta cell | SST | Regional variation |
| PP cell | PPY | Head vs tail |

**Spatial Transcriptomics:**

*Adrenal Zonation:*
\`\`\`
Molecular Gradients:
- WNT pathway: High in glomerulosa
- PKA/CREB: High in fasciculata
- Melanocortin signaling: Zone-specific

Spatial Methods:
- GeoMx Digital Spatial Profiling
- Visium (10x Genomics)
- MERFISH/seqFISH
\`\`\`

*Pituitary Mapping:*
- Spatial organization of cell types
- Cell-cell interactions
- Paracrine signaling networks

**Molecular Diagnostics Integration:**

*Thyroid Fine Needle Aspirate:*
| Molecular Test | Method | Clinical Use |
|----------------|--------|--------------|
| Afirma | RNA classifier | Rule out malignancy |
| ThyroSeq | NGS panel | Malignancy probability |
| RosettaGX | miRNA | Bethesda III/IV |

*BRAF/RAS Testing in PTC:*
\`\`\`
BRAF V600E Positive:
- Classic PTC morphology
- Higher recurrence risk
- Less RAI responsive
- BRAF inhibitor candidate

RAS Positive:
- Follicular variant PTC
- Follicular carcinoma
- Better prognosis
\`\`\`

**Tumor Microenvironment:**

*Thyroid Cancer:*
| Component | Role | Prognostic Value |
|-----------|------|------------------|
| TAMs | Tumor promotion | High = worse |
| TILs | Immune response | Variable |
| CAFs | Invasion support | Correlates with stage |
| Vasculature | Metastasis | VEGF expression |

*Pituitary:*
- Folliculostellate cells (S100+)
- Supporting/paracrine function
- May contribute to tumor microenvironment

**Advanced Pathology Applications:**

*Multiplexed IHC/IF:*
\`\`\`
Platforms:
- Vectra/OPAL (Akoya)
- CODEX
- Imaging mass cytometry

Applications:
- Immune profiling
- Cell-cell interactions
- Tumor heterogeneity mapping
\`\`\`

*Digital Pathology/AI:*
| Application | Status |
|-------------|--------|
| Thyroid nodule classification | Emerging |
| Mitotic figure detection | Available |
| Tumor grading | Research |
| Prognosis prediction | Development |

**Emerging Histopathological Entities:**

*NIFTP (Noninvasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features):*
- Reclassified from follicular variant PTC
- Requires complete encapsulation
- No BRAF V600E
- Treated as low-risk neoplasm

*Hyalinizing Trabecular Tumor:*
- Previously uncertain malignant potential
- Now considered benign
- Characteristic PAX8-GLIS rearrangement

*High-Grade Follicular Cell-Derived Thyroid Carcinoma:*
\`\`\`
WHO 2022 Categories:
1. Differentiated high-grade thyroid carcinoma
   - Elevated mitoses (≥5/2mm²) OR necrosis
   - Retains follicular differentiation

2. Poorly differentiated thyroid carcinoma
   - Turin criteria
   - Solid/trabecular/insular pattern
   - Necrosis, high mitoses, nuclear atypia
\`\`\`

**Research Frontiers:**

*Organoids:*
| Tissue | Applications |
|--------|--------------|
| Thyroid | Drug testing, regeneration |
| Islets | Diabetes modeling, cell therapy |
| Pituitary | Development studies |
| Adrenal | Tumor modeling |

*Lineage Tracing:*
- Understanding cell plasticity
- Tumor cell of origin
- Regeneration mechanisms

*Epigenetic Profiling:*
- DNA methylation classifiers
- Histone modification patterns
- Prognostic stratification`,
      keyTerms: [
        { term: 'spatial transcriptomics', definition: 'Technology combining gene expression analysis with tissue location information' },
        { term: 'NIFTP', definition: 'Noninvasive follicular thyroid neoplasm with papillary-like nuclear features; reclassified as low-risk neoplasm' },
        { term: 'folliculostellate cells', definition: 'S100-positive support cells in anterior pituitary with paracrine functions' },
        { term: 'Turin criteria', definition: 'Diagnostic criteria for poorly differentiated thyroid carcinoma' },
      ],
      clinicalNotes: 'Molecular testing has transformed thyroid nodule management; integration of histology with genomics improves diagnostic accuracy and prognostication. The WHO 2022 classification introduces "differentiated high-grade thyroid carcinoma" as a category between differentiated and poorly differentiated carcinomas. Single-cell technologies are revealing unexpected heterogeneity within seemingly uniform tumors, with implications for therapy.',
    },
  },

  media: [
    {
      id: 'endocrine-histo-1',
      type: 'histology',
      filename: 'endocrine-glands-histology.jpg',
      title: 'Endocrine Glands Histology',
      description: 'Comparative histology of major endocrine organs',
    },
    {
      id: 'thyroid-histo-1',
      type: 'histology',
      filename: 'thyroid-follicles.jpg',
      title: 'Thyroid Follicle Histology',
      description: 'Normal thyroid showing follicular structure',
    },
  ],

  citations: [
    {
      id: 'ross-histology',
      type: 'textbook',
      title: 'Histology: A Text and Atlas',
      authors: ['Ross, MH', 'Pawlina, W'],
      source: 'Wolters Kluwer',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-pancreatic-islets-histology', targetType: 'concept', relationship: 'related', label: 'Pancreatic Islet Histology' },
    { targetId: 'endocrine-thyroid-anatomy', targetType: 'structure', relationship: 'related', label: 'Thyroid Anatomy' },
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Pathology' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['histology', 'microscopy', 'anatomy'],
    keywords: ['histology', 'endocrine', 'thyroid', 'adrenal', 'pituitary', 'microscopy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'histology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
