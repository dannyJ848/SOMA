/**
 * Thyroid Histology
 *
 * Microscopic anatomy of the thyroid gland including follicular architecture,
 * cellular components, ultrastructure, and histopathological correlates.
 */

import { EducationalContent } from '../../types';

export const THYROID_HISTOLOGY: EducationalContent = {
  id: 'endocrine-thyroid-histology',
  type: 'concept',
  name: 'Thyroid Histology',
  alternateNames: ['Thyroid microscopic anatomy', 'Thyroid tissue structure'],

  levels: {
    1: {
      level: 1,
      summary: 'Under a microscope, the thyroid gland looks like many tiny balls called follicles, each filled with a jelly-like material that stores thyroid hormone.',
      explanation: `**What Does the Thyroid Look Like Under a Microscope?**

The thyroid gland has a unique structure that you can easily recognize under a microscope:

**Follicles - The Basic Unit:**
- The thyroid is made of thousands of tiny hollow balls called follicles
- Each follicle is like a small storage container for thyroid hormone
- The wall of each follicle is made of cells that produce the hormone
- The center is filled with a pink, jelly-like material called colloid

**The Two Types of Cells:**

1. **Follicular Cells**
   - Line the wall of each follicle
   - Make thyroid hormone (T4 and T3)
   - Store hormone in the colloid
   - Release hormone when needed

2. **C Cells (Parafollicular Cells)**
   - Found between follicles
   - Larger and lighter colored
   - Make calcitonin (helps control calcium)
   - Not as common as follicular cells

**Why the Structure Matters:**

- The follicle design allows the thyroid to store large amounts of hormone
- When you need more hormone, the cells absorb colloid and release hormone
- The shape of the cells changes based on how active the thyroid is
- Flat cells = resting thyroid
- Tall cells = active thyroid

**What Doctors Look For:**

- Normal follicle shape and size
- Proper amount of colloid
- Healthy-looking cells
- No lumps or abnormal growths`,
      keyTerms: [
        { term: 'Follicle', definition: 'A small ball-shaped structure in the thyroid that makes and stores hormone' },
        { term: 'Colloid', definition: 'The pink, jelly-like material inside follicles where thyroid hormone is stored' },
        { term: 'Follicular cells', definition: 'The cells that form the wall of thyroid follicles and make thyroid hormone' },
        { term: 'C cells', definition: 'Cells between follicles that make calcitonin, a hormone that helps control calcium' },
      ],
      analogies: [
        'Thyroid follicles are like water balloons - each one stores hormone "soup" ready to be squeezed out when needed.',
        'The colloid is like honey stored in honeycomb - the bees (follicular cells) make it and store it until it is needed.',
      ],
      examples: [
        'When the thyroid is very active, the follicles look smaller because the colloid is being used up faster.',
        'A pathologist can tell if the thyroid is underactive because the follicles are large and full of colloid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid histology features follicular epithelium surrounding colloid-filled lumens, with follicular cell height reflecting functional activity, and scattered parafollicular C cells producing calcitonin.',
      explanation: `**Normal Thyroid Architecture:**

*Follicular Structure:*
| Component | Description | Function |
|-----------|-------------|----------|
| Follicular cells | Simple cuboidal to columnar epithelium | Hormone synthesis |
| Basement membrane | Surrounds each follicle | Structural support |
| Colloid | Eosinophilic, homogeneous material | Thyroglobulin storage |
| Interfollicular stroma | Connective tissue with vessels | Blood supply |

**Follicular Cells (Thyrocytes):**

*Structural Features:*
- Cuboidal to columnar shape (depending on activity)
- Round, central nucleus
- Cytoplasm with secretory granules
- Apical microvilli extending into colloid
- Basolateral attachment to basement membrane

*Activity-Dependent Changes:*
| Thyroid State | Cell Shape | Colloid Appearance | Notes |
|---------------|------------|-------------------|-------|
| Resting/Hypoactive | Flat/squamous | Abundant, dense | Large, full follicles |
| Normal | Cuboidal | Moderate | Standard appearance |
| Active/Hyperactive | Tall columnar | Scalloped edges | Resorption lacunae |

**Parafollicular Cells (C Cells):**

*Characteristics:*
- Located between follicles or within follicular epithelium
- Larger than follicular cells
- Pale, granular cytoplasm
- Do not contact follicular lumen
- Derived from neural crest (ultimobranchial body)

*Function:*
- Produce calcitonin
- Respond to serum calcium
- Contain neuroendocrine granules

**Colloid Composition:**

*Thyroglobulin:*
- Main protein in colloid (660 kDa)
- Contains tyrosine residues for iodination
- Serves as hormone precursor and storage

*Colloid Appearance on H&E:*
- Pink (eosinophilic) staining
- Homogeneous when inactive
- Scalloped edges when active (resorption vacuoles)

**Blood Supply:**

*Vascular Features:*
- Rich capillary network surrounds follicles
- Fenestrated endothelium
- Allows hormone release into bloodstream
- Two main arteries: superior and inferior thyroid

**Lymphatic Drainage:**
- Extensive lymphatic network
- Important for cancer spread
- Drains to central and lateral neck nodes`,
      keyTerms: [
        { term: 'Thyroglobulin', definition: 'The large protein in colloid that serves as the precursor for thyroid hormone' },
        { term: 'Resorption lacunae', definition: 'Scalloped edges in colloid indicating active hormone release' },
        { term: 'Fenestrated capillaries', definition: 'Blood vessels with pores allowing easy hormone release' },
        { term: 'Ultimobranchial body', definition: 'Embryonic structure from which C cells originate' },
      ],
      analogies: [
        'The scalloped colloid edges are like bite marks - the cells are "eating" the colloid to release hormone.',
        'Fenestrated capillaries are like windows in a wall - they let hormones pass through easily.',
      ],
      examples: [
        'In Graves\' disease, follicular cells are tall and columnar with scalloped colloid due to overactivity.',
        'In a goiter from iodine deficiency, follicles are enlarged and full of colloid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid histology reflects the functional relationship between follicular cell ultrastructure, hormone synthesis machinery, and colloid dynamics, with distinct immunohistochemical profiles for follicular versus C cell lineages.',
      explanation: `**Follicular Cell Ultrastructure:**

*Apical Domain:*
\`\`\`
Microvilli:
- Project into colloid
- Increase surface area
- Thyroid peroxidase (TPO) localized here
- Site of iodine organification

Pseudopods:
- Form during colloid endocytosis
- Phagocytic uptake of colloid droplets
- Active during hormone release
\`\`\`

*Basolateral Domain:*
| Structure | Function |
|-----------|----------|
| Sodium-iodide symporter (NIS) | Iodide uptake from blood |
| TSH receptor | Responds to pituitary TSH |
| Na/K-ATPase | Maintains ionic gradients |
| Thyroid hormone transporters | Release T3/T4 into blood |

*Cytoplasmic Organelles:*
- Extensive RER (thyroglobulin synthesis)
- Prominent Golgi apparatus
- Lysosomes (colloid processing)
- Mitochondria (energy production)

**Hormone Synthesis Localization:**

*Steps and Locations:*
| Step | Location | Key Enzyme/Transporter |
|------|----------|----------------------|
| Iodide uptake | Basolateral membrane | NIS |
| Iodide efflux | Apical membrane | Pendrin |
| Iodide oxidation | Apical membrane | TPO |
| Iodination | Colloid/membrane interface | TPO |
| Coupling | Within thyroglobulin | TPO |
| Endocytosis | Apical membrane | Megalin |
| Proteolysis | Lysosomes | Cathepsins |
| Hormone release | Basolateral | MCT8, OATP |

**C Cell Histology - Advanced:**

*Identification:*
- H&E: Difficult to see (need immunostains)
- Location: Typically upper third of lateral lobes
- Distribution: Usually solitary or small clusters

*Immunohistochemistry:*
| Marker | C Cells | Follicular Cells |
|--------|---------|------------------|
| Calcitonin | + | - |
| Chromogranin A | + | - |
| Synaptophysin | + | - |
| TTF-1 | + | + |
| Thyroglobulin | - | + |
| PAX8 | - | + |

**Functional Histology Correlations:**

*Active Thyroid (Hyperthyroidism):*
- Tall columnar follicular cells
- Small, depleted follicles
- Scalloped colloid (resorption lacunae)
- Papillary infoldings (Graves')
- Increased vascularity

*Inactive Thyroid (Hypothyroidism):*
- Flat, attenuated follicular cells
- Large, distended follicles
- Dense, homogeneous colloid
- May see Hurthle cell change (Hashimoto)

**Developmental Histology:**

*Embryonic Origin:*
| Component | Origin | Timing |
|-----------|--------|--------|
| Follicular cells | Foregut endoderm | Week 3-4 |
| C cells | Neural crest (ultimobranchial) | Week 4-5 |
| Stroma | Mesenchyme | Throughout |

*Solid Cell Nests:*
- Remnants of ultimobranchial body
- Located in middle/upper thyroid
- P63+, TTF-1-, thyroglobulin-
- May be thyroid stem cell niche
- Can mimic malignancy

**Special Stains:**

*Periodic Acid-Schiff (PAS):*
- Colloid: PAS-positive (glycoprotein)
- Demonstrates thyroglobulin

*Immunohistochemistry Panel:*
| Marker | Target | Use |
|--------|--------|-----|
| TTF-1 | Thyroid transcription factor | Lineage confirmation |
| PAX8 | Transcription factor | Follicular differentiation |
| Thyroglobulin | Colloid protein | Follicular origin |
| Calcitonin | C cell hormone | C cell identification |
| Ki-67 | Proliferation | Activity/malignancy |`,
      keyTerms: [
        { term: 'NIS', definition: 'Sodium-iodide symporter responsible for iodide uptake into thyroid cells' },
        { term: 'Pendrin', definition: 'Apical transporter facilitating iodide efflux into the follicular lumen' },
        { term: 'Solid cell nests', definition: 'Ultimobranchial body remnants that may serve as thyroid stem cells' },
        { term: 'TTF-1', definition: 'Thyroid transcription factor 1, nuclear marker confirming thyroid lineage' },
      ],
      clinicalNotes: 'Immunohistochemistry is essential for distinguishing follicular from C cell lesions - calcitonin positivity confirms C cell origin (medullary carcinoma). Solid cell nests can be mistaken for carcinoma; awareness of their characteristic features (P63+, TTF-1-) prevents misdiagnosis. NIS expression is exploited in radioiodine therapy; loss of NIS expression indicates dedifferentiation.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroid histology integrates molecular classification systems, immunohistochemical algorithms for tumor diagnosis, and understanding of histological variants with their genetic and prognostic correlates.',
      explanation: `**Molecular Thyroid Development:**

*Transcription Factor Cascade:*
\`\`\`
Thyroid Organogenesis:
PAX8 + TTF-1 (NKX2-1) → Thyroid specification
        ↓
FOXE1 (TTF-2) → Migration, descent
        ↓
HHEX → Folliculogenesis
        ↓
PAX8 + TTF-1 → Differentiation maintenance
\`\`\`

*C Cell Lineage:*
- Neural crest derivation
- MASH1/ASCL1 → Neuroendocrine specification
- GATA3 → C cell differentiation
- RET signaling crucial for survival

**Histopathology of Thyroid Diseases:**

*Hashimoto Thyroiditis:*
| Feature | Description | Significance |
|---------|-------------|--------------|
| Lymphoid follicles | With germinal centers | Autoimmune hallmark |
| Hurthle cells | Oncocytic metaplasia | Mitochondria-rich |
| Follicular atrophy | Small, collapsed follicles | Progressive damage |
| Fibrosis | Variable | Late stage |

*Graves Disease:*
| Feature | Description | Significance |
|---------|-------------|--------------|
| Diffuse hyperplasia | Tall columnar cells | TSI stimulation |
| Papillary infoldings | Epithelial projections | Increased surface area |
| Scalloped colloid | Resorption lacunae | Active secretion |
| Lymphoid infiltrate | Less than Hashimoto | Secondary |

**Thyroid Nodule Histology:**

*Colloid Nodule:*
- Macro-follicles with abundant colloid
- Flat follicular epithelium
- Degenerative changes (hemorrhage, fibrosis)
- No capsule (hyperplastic, not neoplastic)

*Follicular Adenoma:*
- Complete fibrous capsule
- Uniform follicular architecture
- Different from surrounding thyroid
- No capsular or vascular invasion

*Follicular Carcinoma (Distinguishing Features):*
| Feature | Adenoma | Carcinoma |
|---------|---------|-----------|
| Capsular invasion | Absent | Present (through capsule) |
| Vascular invasion | Absent | Present (in capsule or beyond) |
| Architecture | Preserved | May be disturbed |
| Metastases | No | Possible (hematogenous) |

**Papillary Thyroid Carcinoma:**

*Nuclear Features (Diagnostic):*
\`\`\`
The "Ground Glass" Nucleus:
1. Nuclear enlargement
2. Overlapping nuclei
3. Irregular nuclear contours
4. Optically clear chromatin ("Orphan Annie eyes")
5. Nuclear grooves (longitudinal)
6. Intranuclear pseudoinclusions
\`\`\`

*Architectural Patterns:*
| Variant | Pattern | Prognosis |
|---------|---------|-----------|
| Classic | Papillary | Good |
| Follicular | Follicular architecture | Good (if encapsulated) |
| Tall cell | Cells 3x height:width | More aggressive |
| Columnar | Stratified epithelium | Aggressive |
| Hobnail | Apical nuclear position | Aggressive |
| Diffuse sclerosing | Diffuse, sclerosis | More mets, good survival |

*Psammoma Bodies:*
- Laminated calcifications
- Highly associated with PTC
- May be seen in lymph nodes (diagnostic)
- Form from degenerating tumor cells

**Medullary Thyroid Carcinoma:**

*Histological Features:*
- Sheets, nests, or trabecular pattern
- Polygonal to spindle cells
- "Salt and pepper" chromatin
- Amyloid in stroma (calcitonin deposits)
- Positive: Calcitonin, CEA, chromogranin

*Variants:*
| Type | Features | Prognosis |
|------|----------|-----------|
| Classic | Solid growth | Standard |
| Papillary | Pseudopapillary | Variable |
| Follicular | Follicle-like spaces | May mimic follicular neoplasm |
| Spindle | Elongated cells | May mimic sarcoma |

**Immunohistochemistry Algorithm:**

*Primary Panel:*
\`\`\`
Thyroid Mass
    ├── TTF-1 positive, Tg positive → Follicular-derived
    │       ├── Papillary nuclear features → PTC
    │       └── No papillary features → Follicular neoplasm
    │
    ├── TTF-1 positive, Calcitonin positive → MTC
    │       └── Confirm with CEA, chromogranin
    │
    └── TTF-1 negative → Consider metastasis
            └── Additional markers as needed
\`\`\`

*Molecular Correlates:*
| Marker | Mutation | Associated Histology |
|--------|----------|---------------------|
| BRAF V600E | BRAF | Classic PTC, tall cell |
| RAS | NRAS, HRAS, KRAS | Follicular pattern |
| RET/PTC | Rearrangement | Classic PTC, radiation |
| PAX8-PPARg | Fusion | Follicular carcinoma |
| RET point mutation | RET | MTC (hereditary or sporadic) |`,
      keyTerms: [
        { term: 'Orphan Annie eyes', definition: 'Optically clear nuclei characteristic of papillary thyroid carcinoma' },
        { term: 'Psammoma bodies', definition: 'Laminated calcifications highly associated with papillary thyroid carcinoma' },
        { term: 'Hurthle cells', definition: 'Oncocytic follicular cells with abundant mitochondria seen in Hashimoto thyroiditis' },
        { term: 'Tall cell variant', definition: 'Aggressive PTC variant with cells three times as tall as wide' },
      ],
      clinicalNotes: 'The diagnosis of follicular carcinoma requires identifying capsular or vascular invasion on permanent sections - frozen section cannot make this distinction. Psammoma bodies in lymph nodes indicate metastatic PTC even without other tumor. Tall cell variant PTC should be managed more aggressively with total thyroidectomy and consideration of radioactive iodine. BRAF V600E testing can be performed on cytology specimens to guide surgical planning.',
    },
    5: {
      level: 5,
      summary: 'Expert thyroid histology encompasses emerging WHO classification systems, molecular diagnostics integration, single-cell analysis, and advanced understanding of tumor heterogeneity and microenvironment for precision diagnosis and prognosis.',
      explanation: `**WHO 2022 Thyroid Tumor Classification:**

*Major Changes:*
\`\`\`
Terminology Updates:
- "Carcinoma" restricted to proven malignant behavior
- NIFTP: Recognized as low-risk neoplasm (not carcinoma)
- New category: "Differentiated high-grade thyroid carcinoma"

Classification Hierarchy:
1. Benign neoplasms
2. Low-risk neoplasms
3. Malignant neoplasms
   a. Follicular cell-derived
   b. C cell-derived
   c. Mixed/uncertain
\`\`\`

*High-Grade Follicular Cell-Derived Carcinomas:*
| Category | Criteria | Prognosis |
|----------|----------|-----------|
| Differentiated high-grade | Mitoses ≥5/2mm² OR necrosis + follicular differentiation | Intermediate |
| Poorly differentiated (Turin) | Solid/trabecular/insular + necrosis OR mitoses OR nuclear atypia | Poor |
| Anaplastic | Dedifferentiated, high mitoses, necrosis | Very poor |

**Molecular Diagnostics Integration:**

*Thyroid Cytology Molecular Testing:*
| Test | Methodology | Application |
|------|-------------|-------------|
| Afirma GSC | RNA expression | Rule out benign |
| ThyroSeq v3 | NGS (DNA/RNA) | Risk stratification |
| RosettaGX Reveal | miRNA | Indeterminate nodules |
| Thyroseq-TR | Targeted RNA | Gene rearrangements |

*Histological Correlation:*
\`\`\`
BRAF V600E Positive:
- Classic PTC: 60%
- Tall cell PTC: 80%
- PDTC: 20-30%
- ATC: 40-50%

RAS Mutations:
- Follicular adenoma: 20-30%
- Follicular carcinoma: 40%
- Follicular variant PTC: 20-30%
- NIFTP: 30-40%
\`\`\`

**Single-Cell Analysis:**

*Thyroid Cell Heterogeneity:*
| Population | Markers | Function |
|------------|---------|----------|
| Mature follicular | TG+, TPO+, NIS+ | Hormone synthesis |
| Progenitor-like | SOX9+, reduced TG | Stem-like properties |
| C cells | CALCA+, CHGA+ | Calcitonin production |
| Stromal | COL1A1+, PDGFRA+ | Support structure |

*Tumor Heterogeneity:*
- Subclonal populations within tumors
- Drug-resistant clones identifiable
- Implications for therapy

**Spatial Transcriptomics:**

*Applications in Thyroid:*
\`\`\`
Tumor Microenvironment Mapping:
- Spatial distribution of immune cells
- Tumor-stroma interactions
- Regional heterogeneity assessment

Technologies:
- Visium (10x Genomics)
- GeoMx Digital Spatial Profiling
- MERFISH
\`\`\`

**Advanced Immunohistochemistry:**

*Multiplexed IHC/IF:*
| Platform | Markers | Application |
|----------|---------|-------------|
| Vectra/OPAL | 6-7 markers | Immune profiling |
| CODEX | 40+ markers | Deep phenotyping |
| IMC | 40+ markers | Metal-labeled antibodies |

*Predictive Markers:*
| Marker | Indication | Clinical Use |
|--------|------------|--------------|
| PD-L1 | Immune checkpoint | ATC immunotherapy |
| VEGFR | Angiogenesis | TKI response |
| RET | Oncogenic driver | RET inhibitors |
| NIS | Iodine uptake | RAI eligibility |

**Artificial Intelligence in Thyroid Pathology:**

*Current Applications:*
\`\`\`
Diagnostic AI:
- Cytology classification (Bethesda)
- Nuclear feature detection
- Mitotic counting
- PTC variant classification

Prognostic AI:
- Risk stratification algorithms
- Recurrence prediction
- Response to therapy
\`\`\`

*Validation Status:*
| Application | Development Stage |
|-------------|-------------------|
| Cytology screening | Clinical trials |
| Nuclear morphometry | Research |
| Digital path review | Emerging |
| Prognosis prediction | Research |

**Emerging Entities and Concepts:**

*Hyalinizing Trabecular Tumor:*
- Previously uncertain malignant potential
- Now classified as benign
- Characteristic PAX8-GLIS rearrangement
- Trabecular growth, hyaline stroma

*Secretory Carcinoma of Thyroid:*
- ETV6-NTRK3 fusion
- Similar to secretory breast carcinoma
- Rare, recently recognized
- NTRK inhibitor responsive

*Cribriform-Morular Thyroid Carcinoma:*
- Associated with FAP/Gardner syndrome
- CTNNB1 mutations
- Distinctive nuclear/morular features
- Excellent prognosis

**Quality Assurance in Thyroid Pathology:**

*Interobserver Variability:*
| Diagnosis | Kappa Value | Implications |
|-----------|-------------|--------------|
| PTC vs benign | 0.6-0.8 | Moderate-good |
| NIFTP diagnosis | 0.4-0.6 | Moderate |
| PTC variant typing | 0.3-0.5 | Fair |
| High-grade criteria | Variable | Emerging |

*Standardization Efforts:*
- WHO classification updates
- Bethesda system for cytology
- Synoptic reporting templates
- Central pathology review for trials

**Research Frontiers:**

*Thyroid Organoids:*
| Application | Status |
|-------------|--------|
| Disease modeling | Active research |
| Drug screening | Preclinical |
| Personalized medicine | Early development |
| Regenerative medicine | Experimental |

*Liquid Biopsy in Pathology:*
- Circulating tumor DNA correlation
- BRAF V600E ctDNA monitoring
- Integration with tissue findings`,
      keyTerms: [
        { term: 'NIFTP', definition: 'Noninvasive follicular thyroid neoplasm with papillary-like nuclear features, now classified as low-risk neoplasm' },
        { term: 'Differentiated high-grade thyroid carcinoma', definition: 'WHO 2022 category for tumors with mitoses or necrosis but retained differentiation' },
        { term: 'PAX8-GLIS', definition: 'Fusion gene characteristic of hyalinizing trabecular tumor' },
        { term: 'Turin criteria', definition: 'Diagnostic criteria for poorly differentiated thyroid carcinoma' },
      ],
      clinicalNotes: 'The WHO 2022 classification introduces "differentiated high-grade thyroid carcinoma" as an intermediate category between well-differentiated and poorly differentiated carcinomas - these patients need closer surveillance. NIFTP diagnosis requires complete capsule evaluation and absence of BRAF V600E; incomplete sampling may miss invasion. Multiplex IHC enables immune profiling that may predict response to checkpoint inhibitors in anaplastic carcinoma. AI-assisted diagnosis shows promise but requires validation before clinical implementation.',
    },
  },

  media: [
    {
      id: 'thyroid-histo-normal-1',
      type: 'histology',
      filename: 'normal-thyroid-follicles.jpg',
      title: 'Normal Thyroid Histology',
      description: 'Light microscopy of normal thyroid showing follicular architecture',
    },
    {
      id: 'thyroid-histo-ptc-1',
      type: 'histology',
      filename: 'ptc-nuclear-features.jpg',
      title: 'Papillary Thyroid Carcinoma',
      description: 'Nuclear features of papillary thyroid carcinoma including grooves and pseudoinclusions',
    },
    {
      id: 'thyroid-em-1',
      type: 'diagram',
      filename: 'thyroid-cell-ultrastructure.svg',
      title: 'Thyroid Cell Ultrastructure',
      description: 'Electron microscopy features of follicular cells',
    },
  ],

  citations: [
    {
      id: 'who-thyroid-tumors',
      type: 'textbook',
      title: 'WHO Classification of Tumours: Endocrine and Neuroendocrine Tumours',
      authors: ['WHO Classification of Tumours Editorial Board'],
      source: 'IARC Press',
      license: 'Copyrighted',
    },
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
    { targetId: 'endocrine-thyroid-anatomy', targetType: 'structure', relationship: 'related', label: 'Thyroid Anatomy' },
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'related', label: 'Thyroid Pathology' },
    { targetId: 'endocrine-histology', targetType: 'concept', relationship: 'parent', label: 'Endocrine Histology' },
    { targetId: 'endocrine-thyroid-function-tests', targetType: 'concept', relationship: 'related', label: 'Thyroid Function Tests' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['histology', 'microscopy', 'anatomy', 'pathology'],
    keywords: ['thyroid', 'follicle', 'colloid', 'histology', 'papillary carcinoma', 'immunohistochemistry'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'histology', 'endocrinology'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
