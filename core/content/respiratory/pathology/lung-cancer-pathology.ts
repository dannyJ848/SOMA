/**
 * Lung Cancer Pathology - Respiratory Pathology
 *
 * Pathological features of lung cancer including adenocarcinoma,
 * squamous cell carcinoma, small cell carcinoma, and other types.
 */

import { EducationalContent } from '../../types';

export const lungCancerPathologyContent: EducationalContent = {
  id: 'pathology-lung-cancer',
  type: 'condition',
  name: 'Lung Cancer Pathology',
  alternateNames: ['Lung Carcinoma Pathology', 'Pulmonary Neoplasia', 'Bronchogenic Carcinoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Lung cancer occurs when cells in the lung grow out of control, forming tumors. The main types are adenocarcinoma, squamous cell carcinoma, and small cell lung cancer.',
      explanation: `## What Is Lung Cancer Pathology?

Lung cancer pathology is the study of abnormal cells that grow uncontrollably in the lungs. These cells form tumors that can spread to other parts of the body.

### Main Types of Lung Cancer

**Non-Small Cell Lung Cancer (NSCLC):**
- About 85% of lung cancers
- Grows more slowly than small cell
- Three main subtypes
- Usually treated with surgery if found early

**Small Cell Lung Cancer (SCLC):**
- About 15% of lung cancers
- Grows and spreads quickly
- Usually not treated with surgery
- Often starts in central airways

### Types of Non-Small Cell Lung Cancer

**Adenocarcinoma:**
- Most common type (40%)
- Usually starts in outer lung
- Often in smokers and non-smokers
- Can have mutations for targeted therapy

**Squamous Cell Carcinoma:**
- About 25-30% of lung cancers
- Starts in central airways
- Linked to smoking
- Often cavitates

**Large Cell Carcinoma:**
- About 10-15%
- Grows quickly
- No specific features
- Usually outer lung

### What Cancer Looks Like Under Microscope

**Normal vs Cancer:**
- Normal: Organized, uniform cells
- Cancer: Disorganized, abnormal cells
- Cancer cells divide rapidly
- Invade surrounding tissue

**Features of Cancer:**
- Large, dark nuclei
- Many dividing cells
- Abnormal shapes
- Loss of normal structure

### How Cancer Spreads

**Local Growth:**
- Into nearby tissue
- Along airways
- Into blood vessels

**Lymph Node Spread:**
- To nearby lymph nodes
- Through lymphatic vessels
- Can be seen under microscope

**Distant Spread (Metastasis):**
- To brain, bone, liver
- Through bloodstream
- Same cancer type as primary

### Risk Factors
- Smoking (main cause)
- Secondhand smoke
- Radon exposure
- Asbestos
- Family history
- Air pollution`,
      keyTerms: [
        { term: 'adenocarcinoma', definition: 'Cancer that starts in glandular cells, most common lung cancer type' },
        { term: 'squamous cell carcinoma', definition: 'Cancer that starts in squamous cells lining airways' },
        { term: 'small cell lung cancer', definition: 'Fast-growing cancer of neuroendocrine cells' },
        { term: 'metastasis', definition: 'Spread of cancer to other parts of the body' },
        { term: 'biopsy', definition: 'Tissue sample taken to examine for cancer' },
      ],
      analogies: [
        'Cancer cells are like weeds in a garden - they grow uncontrollably and choke out healthy plants.',
        'Normal cells are like well-organized city blocks; cancer cells are like a chaotic, unplanned shantytown.',
        'Metastasis is like seeds from a weed blowing to other parts of the garden and growing there.',
      ],
      examples: [
        'A lung adenocarcinoma shows gland formation and may have EGFR mutations allowing targeted therapy.',
        'Small cell lung cancer shows small blue cells with nuclear molding and high mitotic rate under microscopy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lung cancer pathology includes histologic subtypes with distinct features. Adenocarcinoma shows glandular differentiation, squamous cell has keratinization and intercellular bridges, and small cell shows neuroendocrine features with nuclear molding.',
      explanation: `## Major Lung Cancer Types

### Adenocarcinoma

**Growth Patterns:**
- Lepidic (growth along alveolar walls)
- Acinar (gland formation)
- Papillary (finger-like projections)
- Micropapillary (small clusters)
- Solid (sheets of cells)

**Cytology:**
- Columnar or cuboidal cells
- Often peripheral location
- May produce mucin
- Gland-like structures

**Variants:**
- Mucinous (abundant mucin)
- Fetal (resembles fetal lung)
- Enteric (resembles colon)
- Colloid (mucin pools)

### Squamous Cell Carcinoma

**Features:**
- Keratinization (keratin pearls)
- Intercellular bridges
- Polygonal cells
- Central location typical
- Cavitation common

**Growth Patterns:**
- Sheets and nests
- Keratin pearls
- Individual cell keratinization
- Invasive growth

**Variants:**
- Basaloid
- Clear cell
- Small cell
- Papillary

### Small Cell Lung Cancer

**Features:**
- Small cells (scant cytoplasm)
- High nuclear-to-cytoplasmic ratio
- Fine "salt and pepper" chromatin
- Nuclear molding
- High mitotic rate

**Growth:**
- Sheets and nests
- Crush artifact common
- Central mass typical
- Early lymph node spread

**Immunohistochemistry:**
- TTF-1 positive (75%)
- Synaptophysin positive
- Chromogranin positive
- CD56 positive

### Large Cell Neuroendocrine Carcinoma

**Features:**
- Large cells
- Neuroendocrine morphology
- Organoid nesting
- Palisading
- Rosette formation
- High mitotic rate

**Distinction from SCLC:**
- Larger cells
- More cytoplasm
- Prominent nucleoli
- Same immunophenotype

### Typical Carcinoid

**Features:**
- Neuroendocrine tumor
- Low grade
- Organoid growth
- Salt and pepper chromatin
- <2 mitoses per 2 mm2
- No necrosis

**Atypical Carcinoid:**
- 2-10 mitoses per 2 mm2
- Or necrosis present
- Intermediate grade
- Worse prognosis

### Pre-invasive Lesions

**Atypical Adenomatous Hyperplasia (AAH):**
- Small lesion (<5 mm)
- Type II pneumocyte proliferation
- Lepidic growth
- Precedes adenocarcinoma

**Adenocarcinoma In Situ (AIS):**
- Small tumor (<3 cm)
- Pure lepidic growth
- No invasion
- 100% survival if resected

**Minimally Invasive Adenocarcinoma (MIA):**
- <3 cm
- Predominant lepidic
- Invasion <5 mm
- >95% survival

### Grading

**Differentiation:**
- Well-differentiated
- Moderately differentiated
- Poorly differentiated

**Features:**
- Nuclear pleomorphism
- Mitotic count
- Necrosis
- Architecture

### Staging Components

**Tumor (T):**
- Size
- Invasion extent
- Satellite nodules

**Nodes (N):**
- Nodal involvement
- Location
- Number

**Metastasis (M):**
- Distant spread
- Location
- Number`,
      keyTerms: [
        { term: 'lepidic growth', definition: 'Tumor cells growing along alveolar walls without invasion' },
        { term: 'keratin pearl', definition: 'Concentric layers of keratin in squamous cell carcinoma' },
        { term: 'nuclear molding', definition: 'Nuclear shapes conforming to adjacent cells; seen in small cell carcinoma' },
        { term: 'neuroendocrine', definition: 'Cells with features of both nerve and hormone-producing cells' },
        { term: 'mitotic rate', definition: 'Number of cell divisions seen; indicates growth rate' },
      ],
      analogies: [
        'Lepidic growth is like ivy spreading along a wall without breaking through it.',
        'Keratin pearls are like an onion with concentric layers of dead skin cells.',
        'Nuclear molding is like wet clay balls pressed together - they take each other\'s shape.',
      ],
      examples: [
        'A well-differentiated squamous cell carcinoma shows prominent keratin pearls and intercellular bridges.',
        'Adenocarcinoma with predominant lepidic pattern and <5 mm invasion is classified as minimally invasive.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lung cancer pathology includes molecular subtyping with driver mutations, immunohistochemistry panels, specimen handling, cytology techniques, and understanding of tumor heterogeneity.',
      explanation: `## Molecular Pathology

### Driver Mutations

**EGFR Mutations:**
- Exon 19 deletions
- L858R point mutation
- T790M resistance
- More common in:
  - Never/light smokers
  - Adenocarcinoma
  - Asian ethnicity
  - Women

**ALK Rearrangement:**
- EML4-ALK fusion
- Younger patients
- Never/light smokers
- Adenocarcinoma
- ROS1 similar

**KRAS Mutations:**
- G12C most common
- Smoking associated
- Less targetable
- Prognostic significance

**BRAF Mutations:**
- V600E actionable
- Vemurafenib response
- MEK inhibitors

**MET Alterations:**
- Exon 14 skipping
- Amplification
- Resistance mechanism
- Capmatinib approved

**RET Fusions:**
- Selpercatinib
- Pralsetinib
- Lung and thyroid

**HER2 Mutations:**
- Exon 20 insertions
- Trastuzumab response
- Emerging target

**NTRK Fusions:**
- Rare but actionable
- Larotrectinib
- Entrectinib

### Immunohistochemistry

**Primary Panel:**
- TTF-1 (thyroid transcription factor-1)
  - Lung adenocarcinoma marker
  - Nuclear staining
  - 75% of adenocarcinomas positive
  - Negative in squamous cell

- p40 or p63
  - Squamous differentiation
  - Nuclear staining
  - Negative in adenocarcinoma

**Neuroendocrine Markers:**
- Synaptophysin
- Chromogranin A
- CD56
- Panel for SCLC and carcinoid

**PD-L1:**
- Immune checkpoint expression
- Predicts immunotherapy response
- 22C3, 28-8, SP142 clones
- Tumor proportion score (TPS)

### Cytology

**Sample Types:**
- Sputum
- Bronchial washings
- Fine needle aspiration
- Pleural fluid

**Diagnostic Criteria:**
- Cellularity
- Architecture
- Nuclear features
- Background

**Liquid-Based Preparations:**
- Better preservation
- Immunocytochemistry possible
- Molecular testing
- Standardized reporting

### Specimen Handling

**Frozen Section:**
- Diagnosis
- Margins
- Lymph nodes
- Adequacy assessment

**Fixation:**
- 10% neutral buffered formalin
- Adequate time (6-72 hours)
- Molecular preservation
- Cold ischemia time

**Tissue for Molecular:**
- Separate block if possible
- Formalin acceptable for most
- RNA-based tests need care
- Percentage of tumor cells

### Tumor Heterogeneity

**Spatial Heterogeneity:**
- Different areas different grade
- Mixed patterns
- Multiple drivers
- Sampling considerations

**Temporal Heterogeneity:**
- Resistance mutations
- Lineage switching
- Clonal evolution
- Liquid biopsy utility

### Immunotherapy Markers

**PD-L1:**
- Tumor proportion score
- Combined positive score
- Platform-specific cutoffs
- Predictive not prognostic

**Tumor Mutational Burden (TMB):**
- High TMB predicts response
- Mutations per megabase
- Platform variability
- Emerging standardization

**Microsatellite Instability (MSI):**
- Mismatch repair deficiency
- pembrolizumab approved
- Rare in lung cancer
- Universal testing

### Small Biopsies and Cytology

**Classification:**
- NSCLC favor adenocarcinoma
- NSCLC favor squamous
- NSCLC-NOS (not otherwise specified)
- Specific subtypes if possible

**Molecular Testing:**
- Adequate tissue assessment
- H&E review
- Serial sections
- DNA/RNA quality

### Immunohistochemistry Algorithm

**Step 1:** TTF-1 and p40
- If TTF-1 positive: Adenocarcinoma
- If p40 positive: Squamous cell
- If both negative: Further workup

**Step 2:** If needed
- Napsin A (adenocarcinoma)
- CK5/6 (squamous)
- Neuroendocrine markers

**Step 3:** Molecular triage
- EGFR, ALK testing priority
- PD-L1 testing
- Extended panel as indicated`,
      keyTerms: [
        { term: 'driver mutation', definition: 'Genetic alteration that promotes cancer growth and can be targeted' },
        { term: 'TTF-1', definition: 'Thyroid transcription factor-1; immunohistochemical marker for lung adenocarcinoma' },
        { term: 'PD-L1', definition: 'Programmed death-ligand 1; immune checkpoint protein target for immunotherapy' },
        { term: 'tumor proportion score', definition: 'Percentage of viable tumor cells staining positive for PD-L1' },
        { term: 'liquid biopsy', definition: 'Detection of tumor DNA in blood or other body fluids' },
      ],
      clinicalNotes: 'All lung adenocarcinomas and large cell carcinomas, and some squamous cell carcinomas in never/light smokers, should undergo molecular testing for actionable mutations (EGFR, ALK, ROS1, BRAF, MET, RET, NTRK, KRAS, HER2). PD-L1 testing is standard for all NSCLC being considered for immunotherapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced lung cancer pathology covers tumor spread patterns, pleural involvement, staging systems, treatment effects, resistance mechanisms, and the pathology of uncommon variants and second primary tumors.',
      explanation: `## Patterns of Spread

**Lymphatic Spread:**
- Intrapulmonary nodes
- Hilar nodes
- Mediastinal nodes
- Supraclavicular nodes
- Skip metastases possible

**Hematogenous Spread:**
- Brain (most common)
- Bone
- Adrenal glands
- Liver
- Contralateral lung

**Pleural Spread:**
- Pleural nodules
- Malignant effusion
- Pleural thickening
- Dyspnea
- Poor prognosis

### Pleural Involvement

**Malignant Pleural Effusion:**
- Exudative
- Cytology positive
- Adenocarcinoma most common
- Thoracoscopy often needed

**Pleural Nodules:**
- Visceral pleura
- Parietal pleura
- Biopsy confirmation
- Staging implication

### Treatment Effects

**Neoadjuvant Therapy:**
- Chemotherapy
- Chemoradiation
- Immunotherapy
- Targeted therapy

**Pathologic Assessment:**
- Percentage of viable tumor
- Necrosis
- Fibrosis
- Inflammation
- Major pathologic response

**Complete Response:**
- No viable tumor
- Scar/fibrosis only
- Nodal regression
- Good prognosis

### Resistance Mechanisms

**EGFR TKI Resistance:**
- T790M mutation (50-60%)
- MET amplification
- Small cell transformation
- PIK3CA mutation
- Histologic transformation

**ALK TKI Resistance:**
- Secondary mutations
- Bypass signaling
- Histologic transformation
- Compound mutations

**Immunotherapy Resistance:**
- Primary resistance
- Acquired resistance
- Loss of antigen presentation
- Alternative checkpoints

### Unusual Variants

**Sarcomatoid Carcinoma:**
- Pleomorphic carcinoma
- Spindle cells
- Giant cells
- Poor prognosis
- Often lacks drivers

**Adenosquamous Carcinoma:**
- Both components (>10% each)
- Worse than pure types
- Aggressive behavior
- Complete sampling needed

**Fetal Adenocarcinoma:**
- Glandular/fetal pattern
- Low grade variant
- Good prognosis
- Rare

**Mucinous Adenocarcinoma:**
- Abundant extracellular mucin
- Enteric differentiation possible
- KRAS mutations common
- Different behavior

**Colloid Carcinoma:**
- Mucin pools
- Floating tumor cells
- Enteric features
- Prognostic uncertainty

### Multiple Primaries vs Metastases

**Criteria (Martini and Melamed):**
- Different histology = separate primaries
- Same histology:
  - Different lobes, no nodes/common
  - 2+ years between
  - Different molecular profile

**Molecular Analysis:**
- Clonality assessment
- Driver mutations
- Genome-wide analysis
- Clinical correlation

### Staging Pathology

**T Factors:**
- Size (T1: <=3 cm, T2: 3-5 cm, T3: 5-7 cm, T4: >7 cm)
- Main bronchus involvement
- Visceral pleura
- Atelectasis
- Invasion (chest wall, diaphragm, mediastinum, heart, vessels)
- Satellite nodules

**N Factors:**
- N1: Ipsilateral peribronchial/hilar
- N2: Ipsilateral mediastinal/subcarinal
- N3: Contralateral mediastinal/hilar, scalene, supraclavicular

**M Factors:**
- M1a: Contralateral lung, pleural/pericardial nodules, effusion
- M1b: Single extrathoracic metastasis
- M1c: Multiple extrathoracic metastases

### Lymph Node Examination

**Sampling:**
- EBUS-TBNA
- Mediastinoscopy
- Surgical dissection
- Adequacy assessment

**Micrometastases:**
- Tumor deposits <2 mm
- pN1(mi)
- Prognostic significance
- Cytokeratin immunohistochemistry

**Isolated Tumor Cells:**
- Single cells/small clusters
- pN0(i+)
- Questionable significance
- IHC detection

### Second Primary Lung Cancer

**Risk Factors:**
- Smoking
- Prior lung cancer
- Radiation therapy
- Field cancerization
- Genetic susceptibility

**Pathology:**
- Different histology
- Different molecular profile
- Separate location
- Synchronous vs metachronous`,
      keyTerms: [
        { term: 'sarcomatoid carcinoma', definition: 'Poorly differentiated carcinoma with spindle or giant cell features' },
        { term: 'major pathologic response', definition: 'Less than 10% viable tumor after neoadjuvant therapy' },
        { term: 'field cancerization', definition: 'Widespread molecular changes throughout respiratory tract from carcinogen exposure' },
        { term: 'skip metastasis', definition: 'Lymph node metastasis bypassing intervening nodes' },
        { term: 'clonality', definition: 'Whether tumors share common origin based on molecular analysis' },
      ],
      clinicalNotes: 'Small cell transformation as a mechanism of resistance to EGFR and ALK inhibitors is increasingly recognized. Repeat biopsy at progression is essential to identify transformation and guide appropriate therapy (platinum-etoposide for small cell phenotype).',
    },
    5: {
      level: 5,
      summary: 'Expert lung cancer pathology integrates molecular diagnostics, liquid biopsies, artificial intelligence, personalized treatment selection, and understanding of tumor microenvironment and immune evasion mechanisms.',
      explanation: `## Advanced Molecular Diagnostics

**Next-Generation Sequencing:**
- Comprehensive genomic profiling
- FoundationOne CDx
- Guardant360
- Tumor and liquid

**RNA-based Testing:**
- ALK, ROS1, RET fusions
- NTRK fusions
- MET exon 14 skipping
- Expression signatures

**Circulating Tumor DNA:**
- Liquid biopsy
- Minimal residual disease
- Resistance monitoring
- TAT advantage

### Artificial Intelligence in Pathology

**Image Analysis:**
- Automated detection
- Grading assistance
- Biomarker prediction
- PD-L1 scoring

**Digital Pathology:**
- Whole slide imaging
- Remote consultation
- Algorithm development
- Quality control

**Predictive Models:**
- Survival prediction
- Treatment response
- Molecular prediction
- Clinical trial matching

### Tumor Microenvironment

**Immune Infiltrate:**
- Tumor-infiltrating lymphocytes
- CD8+ T cells
- Regulatory T cells
- Macrophages

**Tertiary Lymphoid Structures:**
- Organized lymphoid aggregates
- Germinal centers
- Prognostic significance
- Immune response

**Stromal Components:**
- Cancer-associated fibroblasts
- Extracellular matrix
- Angiogenesis
- Desmoplasia

### Immune Evasion Mechanisms

**Checkpoint Expression:**
- PD-L1 upregulation
- Alternative checkpoints
- IDO, LAG3, TIM3
- Combination targets

**Antigen Presentation:**
- HLA loss
- Beta-2 microglobulin loss
- Immunoproteasome alterations
- Neoantigen depletion

**Exclusion Mechanisms:**
- T cell exclusion
- Fibrotic stroma
- Hypoxia
- Metabolic barriers

### Personalized Treatment Selection

**Molecular Tumor Board:**
- Multidisciplinary review
- Actionable alteration identification
- Clinical trial matching
- Treatment recommendations

**Therapy Sequencing:**
- First-line selection
- Resistance monitoring
- Rebiopsy strategies
- Clinical trial options

**Biomarker-Driven Trials:**
- Basket trials
- Umbrella trials
- Platform trials
- Master protocols

### Minimal Residual Disease

**Detection:**
- Circulating tumor DNA
- Molecular residual disease
- Risk stratification
- Adjuvant therapy guidance

**Clinical Utility:**
- Early recurrence detection
- Adjuvant therapy trials
- Surveillance strategies
- Treatment modification

### Pathology of Novel Therapies

**Targeted Therapy Effects:**
- Histologic changes
- Tumor regression patterns
- Fibrosis
- Viability assessment

**Immunotherapy Effects:**
- Immune-related patterns
- Pseudoprogression
- Hyperprogression
- Immune-related adverse events

**CAR-T and Cellular Therapy:**
- Emerging applications
- Toxicity patterns
- Response assessment
- Future directions

### Quality Assurance

**Proficiency Testing:**
- Immunohistochemistry
- Molecular testing
- EGFR, ALK, PD-L1
- External quality assessment

**Standardization:**
- PD-L1 assays
- Pre-analytic variables
- Interpretation guidelines
- Reporting standards

**Laboratory Accreditation:**
- CAP guidelines
- CLIA requirements
- Molecular pathology
- Quality metrics

### Research Frontiers

**Spatial Biology:**
- Spatial transcriptomics
- Multiplex immunofluorescence
- Digital spatial profiling
- Microenvironment mapping

**Organoids:**
- Patient-derived models
- Drug screening
- Co-culture systems
- Personalized medicine

**Single-Cell Analysis:**
- Tumor heterogeneity
- Immune profiling
- Therapy resistance
- Evolution tracking

### Global Health Considerations

**Mutation Frequency Differences:**
- EGFR in Asia
- KRAS in West
- Smoking patterns
- Environmental factors

**Access to Testing:**
- Resource-limited settings
- IHC-based algorithms
- Reflex testing
- Telepathology

**Tobacco Control:**
- Prevention impact
- Declining smoking rates
- Changing epidemiology
- Never-smoker lung cancer`,
      keyTerms: [
        { term: 'liquid biopsy', definition: 'Analysis of circulating tumor DNA or cells in blood' },
        { term: 'molecular residual disease', definition: 'Detection of minimal tumor DNA after treatment' },
        { term: 'spatial transcriptomics', definition: 'Mapping gene expression while preserving tissue location' },
        { term: 'tertiary lymphoid structures', definition: 'Organized immune cell aggregates in tumors' },
        { term: 'pseudoprogression', definition: 'Initial tumor enlargement on immunotherapy followed by response' },
      ],
      clinicalNotes: `Key advances in lung cancer pathology:

1. **Comprehensive molecular profiling:** NGS panels are standard of care, identifying actionable alterations in over 50% of adenocarcinomas and increasingly in squamous cell carcinomas.

2. **Liquid biopsies:** ctDNA testing provides faster turnaround for molecular profiling and enables resistance monitoring without tissue rebiopsy.

3. **PD-L1 testing:** Essential for immunotherapy patient selection, but interpretation is complex with different antibodies, platforms, and cutoffs for different indications.

4. **Small biopsies:** The majority of lung cancer diagnoses are made on small samples. Pathologists must triage tissue carefully for diagnosis, immunohistochemistry, and molecular testing.

5. **Resistance mechanisms:** Understanding mechanisms of resistance (T790M, MET amplification, histologic transformation) requires repeat biopsy at progression to guide next-line therapy.

6. **AI in pathology:** Machine learning algorithms are being developed to improve detection, grading, and biomarker assessment, though regulatory and validation challenges remain.

7. **Tumor microenvironment:** Beyond tumor cells, the immune microenvironment and stromal components are critical determinants of treatment response, especially for immunotherapy.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'who-lung-classification',
      type: 'textbook',
      title: 'WHO Classification of Thoracic Tumours',
      authors: ['Travis WD', 'Brambilla E', 'Burke AP', 'Marx A', 'Nicholson AG'],
      source: 'IARC Press',
    },
    {
      id: 'nccn-guidelines',
      type: 'website',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org',
    },
  ],

  crossReferences: [
    { targetId: 'condition-lung-cancer', targetType: 'condition', relationship: 'related', label: 'Lung Cancer' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'histology-bronchial-tree', targetType: 'structure', relationship: 'related', label: 'Bronchial Tree' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pathology', 'oncology', 'pulmonology'],
    keywords: ['lung cancer', 'adenocarcinoma', 'squamous cell carcinoma', 'small cell lung cancer', 'oncology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology', 'oncology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lungCancerPathologyContent;
