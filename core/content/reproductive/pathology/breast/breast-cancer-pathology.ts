/**
 * Breast Cancer Pathology - Reproductive System
 *
 * Comprehensive content on breast cancer pathology including histologic
 * types, grading, staging, molecular subtypes, and prognostic factors.
 */

import { EducationalContent } from '../../../types';

export const breastCancerPathology: EducationalContent = {
  id: 'reproductive-breast-cancer-pathology',
  type: 'condition',
  name: 'Breast Cancer Pathology',
  alternateNames: ['Breast Carcinoma', 'Mammary Cancer Pathology'],

  levels: {
    1: {
      level: 1,
      summary: 'Breast cancer is when abnormal cells in the breast grow out of control. There are different types, and doctors look at the cells under a microscope to decide the best treatment.',
      explanation: `## What Is Breast Cancer Pathology?

Pathology is the study of disease by looking at tissues and cells. Breast cancer pathology helps doctors understand what type of cancer it is and how to treat it.

### Where Breast Cancer Starts

Most breast cancers start in:
- **Milk ducts** (tubes that carry milk) - called ductal cancer
- **Milk-producing glands** (lobules) - called lobular cancer

### Common Types of Breast Cancer

**1. Invasive Ductal Carcinoma (IDC)**
- Most common type (70-80% of cases)
- Starts in milk ducts and spreads to nearby tissue
- Called "invasive" because it grows into surrounding breast tissue

**2. Invasive Lobular Carcinoma (ILC)**
- Second most common (10-15% of cases)
- Starts in milk-producing glands
- Often grows in a line pattern

**3. Ductal Carcinoma In Situ (DCIS)**
- "In situ" means "in place"
- Abnormal cells in the milk duct but have not spread
- Non-invasive (precancerous)
- May become invasive if not treated

### How Doctors Grade Cancer

Grade tells how different cancer cells look from normal cells:
- **Grade 1:** Cells look most like normal cells (grow slower)
- **Grade 2:** Cells look somewhat different
- **Grade 3:** Cells look very different (grow faster)

### Key Tests on Cancer Cells

Doctors test for special markers:
- **ER/PR:** Hormone receptors - helps decide if hormone therapy will work
- **HER2:** A protein that can make cancer grow faster
- **Ki-67:** Shows how fast cells are dividing

### Why Pathology Matters

The pathology report helps doctors decide:
- What treatments to use
- How serious the cancer is
- Chances of recovery`,
      keyTerms: [
        { term: 'invasive cancer', definition: 'Cancer that has grown into surrounding tissue' },
        { term: 'in situ', definition: 'Cancer that has not spread beyond where it started' },
        { term: 'ductal', definition: 'Related to the milk ducts in the breast' },
        { term: 'lobular', definition: 'Related to the milk-producing lobules' },
        { term: 'receptors', definition: 'Proteins on cells that receive signals from hormones' },
      ],
      analogies: [
        'Invasive cancer is like ivy growing through a fence - it spreads beyond where it started into surrounding areas.',
        'In situ cancer is like weeds that have not spread past their garden bed - contained but needs removal.',
      ],
      examples: [
        'About 70-80% of breast cancers are invasive ductal carcinoma',
        'DCIS is stage 0 breast cancer - the earliest form',
        'ER-positive cancers can be treated with hormone-blocking medications',
      ],
      patientCounselingPoints: [
        'The pathology report takes several days because careful testing is needed',
        'Grade is different from stage - grade describes cells, stage describes spread',
        'Hormone receptor and HER2 status guide treatment decisions',
      ],
    },
    2: {
      level: 2,
      summary: 'Breast cancer pathology involves classification by histologic type and grade. Invasive ductal carcinoma is most common, followed by invasive lobular carcinoma. Immunohistochemistry for ER, PR, and HER2 status guides therapy selection and predicts prognosis.',
      explanation: `## Breast Cancer Pathology Overview

### Histologic Classification

**Invasive Carcinomas:**

| Type | Frequency | Key Features |
|------|-----------|--------------|
| Invasive ductal carcinoma (NST) | 70-80% | No special features; heterogeneous |
| Invasive lobular carcinoma | 10-15% | Single file pattern; often bilateral |
| Tubular carcinoma | 2% | Well-formed tubules; excellent prognosis |
| Mucinous (colloid) carcinoma | 2% | Pools of mucin; good prognosis |
| Medullary carcinoma | 1-2% | Syncytial growth, lymphocytic infiltrate |
| Metaplastic carcinoma | <1% | Squamous or mesenchymal differentiation |

**Non-Invasive Lesions:**

Ductal Carcinoma In Situ (DCIS):
- Proliferation of malignant epithelial cells
- Confined to ductal-lobular system
- No basement membrane invasion
- Graded: low, intermediate, high nuclear grade
- Architectural patterns: cribriform, micropapillary, solid, comedo

Lobular Carcinoma In Situ (LCIS):
- Usually incidental finding
- Fills acini of lobules
- Classic vs pleomorphic types
- Marker of increased risk rather than precursor

### Histologic Grading (Nottingham/Scarff-Bloom-Richardson)

**Three Parameters (each scored 1-3):**

1. **Tubule Formation:**
   - Score 1: >75% of tumor forms tubules
   - Score 2: 10-75% tubule formation
   - Score 3: <10% tubule formation

2. **Nuclear Pleomorphism:**
   - Score 1: Small, uniform nuclei
   - Score 2: Moderate size and variation
   - Score 3: Marked variation, large nuclei

3. **Mitotic Count:**
   - Score 1: 0-9 mitoses per 10 HPF
   - Score 2: 10-19 mitoses per 10 HPF
   - Score 3: >=20 mitoses per 10 HPF

**Final Grade:**
- Grade 1 (well-differentiated): Total 3-5
- Grade 2 (moderately differentiated): Total 6-7
- Grade 3 (poorly differentiated): Total 8-9

### Immunohistochemistry Markers

**Hormone Receptors:**

ER (Estrogen Receptor):
- Nuclear staining
- Any positive cells = "positive"
- Higher percentage = better response to hormone therapy
- Reported as percentage positive

PR (Progesterone Receptor):
- Also nuclear staining
- Usually co-expressed with ER
- Independent prognostic marker

**HER2:**

Testing methods:
1. IHC scoring:
   - 0 or 1+: Negative
   - 2+: Equivocal (needs FISH)
   - 3+: Positive

2. FISH (Fluorescence In Situ Hybridization):
   - HER2 gene amplification
   - Ratio of HER2 to CEP17 signals
   - >2.0 = amplified

**Ki-67:**
- Proliferation marker
- Percentage of cells staining
- Higher = more aggressive
- Guides chemotherapy decisions

### Molecular Subtypes (Based on IHC)

| Subtype | ER | PR | HER2 | Characteristics |
|---------|----|----|------|-----------------|
| Luminal A | + | + (high) | - | Good prognosis, hormone-sensitive |
| Luminal B | + | + (low) or - | +/- | More aggressive than Luminal A |
| HER2-enriched | - | - | + | Aggressive, HER2-targeted therapy |
| Triple-negative | - | - | - | Aggressive, chemotherapy-based |

### Lymphovascular Invasion (LVI)

- Cancer cells in lymphatic or blood vessels
- Adverse prognostic factor
- Increases risk of lymph node metastasis
- Identified on H&E or D2-40 immunostain`,
      keyTerms: [
        { term: 'DCIS', definition: 'Ductal carcinoma in situ - non-invasive breast cancer confined to ducts' },
        { term: 'Nottingham grade', definition: 'Histologic grading system combining tubule formation, nuclear pleomorphism, and mitotic count' },
        { term: 'triple-negative', definition: 'Breast cancer negative for ER, PR, and HER2' },
        { term: 'lymphovascular invasion', definition: 'Presence of cancer cells within lymphatic or blood vessels' },
        { term: 'FISH', definition: 'Fluorescence in situ hybridization - test for gene amplification' },
      ],
      analogies: [
        'Tumor grading is like rating how wild a party is getting - grade 1 is calm and organized, grade 3 is chaotic and out of control.',
        'Hormone receptors are like keyholes - hormone therapies are keys that block these keyholes to stop cancer growth.',
      ],
      examples: [
        'A Grade 3 tumor with high Ki-67 is more likely to respond to chemotherapy',
        'HER2-positive cancers can be treated with trastuzumab (Herceptin)',
        'Triple-negative breast cancer is more common in BRCA1 mutation carriers',
      ],
      patientCounselingPoints: [
        'ER/PR-positive cancers have more treatment options including hormone therapy',
        'HER2-positive status is not inherited like BRCA mutations',
        'Low-grade tumors generally grow more slowly than high-grade tumors',
      ],
    },
    3: {
      level: 3,
      summary: 'Breast cancer pathology involves detailed histologic evaluation including special subtypes with distinct prognoses, comprehensive assessment of margins and lymph nodes, and integration of molecular testing including Oncotype DX for treatment decision-making.',
      explanation: `## Detailed Breast Cancer Pathology

### Special Histologic Subtypes

**Favorable Prognosis Types:**

Tubular carcinoma:
- Well-formed tubules (>90%)
- Single cell layer
- Low nuclear grade
- Excellent prognosis (nearly 100% survival)

Mucinous (Colloid) carcinoma:
- Pools of extracellular mucin
- Tumor cells floating in mucin
- Two types: A (pure) and B (more cellular)
- Good prognosis, especially pure type

Tubulolobular carcinoma:
- Hybrid of tubular and lobular features
- Excellent prognosis

**Less Favorable Types:**

Inflammatory breast cancer:
- Clinical diagnosis (erythema, peau d\'orange)
- Dermal lymphatic tumor emboli
- Dermal lymphatic invasion
- Very aggressive

Metaplastic carcinoma:
- Squamous or mesenchymal differentiation
- Spindle cell, matrix-producing, squamous
- Often triple-negative
- Aggressive, chemotherapy-resistant

Micropapillary carcinoma:
- Reverse polarity of cells
- Clear spaces around clusters
- High incidence of lymph node metastasis

### Surgical Margins

**Definition:**
- Distance from tumor to inked surface
- Measured in millimeters

**Significance:**
- Positive margin: Tumor at ink
- Close margin: Usually <2 mm
- Negative margin: No tumor at ink

**Guidelines:**
- No tumor on ink = adequate for invasive cancer
- 2 mm preferred for DCIS
- Re-excision if positive margins

### Lymph Node Assessment

**Sentinel Lymph Node Biopsy:**
- First draining lymph node(s)
- Blue dye and/or radioactive tracer
- If negative, usually no further surgery

**Axillary Lymph Node Dissection:**
- Removed if sentinel node positive
- Usually level I and II nodes
- 10+ nodes for adequate staging

**Pathologic N Staging:**

| Stage | Description |
|-------|-------------|
| pN0 | No cancer in nodes |
| pN1mi | Micrometastasis (0.2-2 mm) |
| pN1 | 1-3 positive nodes |
| pN2 | 4-9 positive nodes |
| pN3 | 10+ positive nodes |

**Isolated Tumor Cells (ITC):**
- Single cells or clusters <0.2 mm
- pN0(i+)
- Generally not considered metastatic

**Micrometastases:**
- 0.2-2 mm
- pN1mi
- Prognostic significance debated

### Pathologic Staging (pTNM)

**Primary Tumor (pT):**

| Stage | Size |
|-------|------|
| pTis | DCIS |
| pT1 | <=2 cm (microm, 1a, 1b, 1c) |
| pT2 | >2-5 cm |
| pT3 | >5 cm |
| pT4 | Chest wall/skin involvement |

**Stage Grouping:**
- Stage 0: DCIS
- Stage I: Small tumor, node negative
- Stage II: Larger tumor or 1-3 nodes
- Stage III: Locally advanced
- Stage IV: Metastatic

### Molecular Testing

**Oncotype DX:**
- 21-gene expression assay
- For ER+, HER2-, node-negative or limited node-positive
- Recurrence score (0-100)
- Guides chemotherapy decision

---
Recurrence Score Interpretation:
  <18: Low risk - hormonal therapy only
  18-30: Intermediate - clinical decision
  >30: High risk - chemotherapy + hormonal
---

**MammaPrint:**
- 70-gene signature
- Low risk vs high risk
- For node-negative patients

**Prosigna (PAM50):**
- 50-gene assay
- Risk of recurrence score
- Intrinsic subtype classification

**Breast Cancer Index (BCI):**
- Predicts late recurrence
- Guides extended hormonal therapy

### Special Stains

| Stain | Use |
|-------|-----|
| E-cadherin | Distinguish ductal from lobular |
| p120-catenin | Lobular: cytoplasmic; Ductal: membranous |
| CK5/6, EGFR | Basal-like (often triple-negative) |
| GATA3 | Breast origin marker |
| Mammaglobin | Breast origin marker |
| GCDFP-15 | Breast origin marker |`,
      keyTerms: [
        { term: 'Oncotype DX', definition: '21-gene expression assay to predict chemotherapy benefit in ER+ breast cancer' },
        { term: 'sentinel lymph node', definition: 'First lymph node to drain the tumor; if negative, other nodes usually negative' },
        { term: 'metaplastic', definition: 'Cancer showing transformation to another cell type (squamous, mesenchymal)' },
        { term: 'micrometastasis', definition: 'Small tumor deposit in lymph node (0.2-2 mm)' },
        { term: 'recurrence score', definition: 'Numerical score from gene expression testing predicting risk of cancer return' },
      ],
      clinicalNotes: 'For DCIS, margins are particularly important. A margin of at least 2 mm is generally preferred to reduce recurrence risk. For invasive cancer, "no tumor on ink" is the standard for adequate margins.',
    },
    4: {
      level: 4,
      summary: 'Advanced breast cancer pathology encompasses genomic classifications, response to neoadjuvant therapy, pathology of hereditary cancers, and prognostic factors including tumor-infiltrating lymphocytes and PD-L1 status for immunotherapy selection.',
      explanation: `## Advanced Breast Cancer Pathology

### Genomic Classifications

**PAM50 (Prediction Analysis of Microarray 50):**

Intrinsic subtypes:
- Luminal A: Low proliferation, good prognosis
- Luminal B: Higher proliferation, more aggressive
- HER2-enriched: HER2-driven, aggressive
- Basal-like: Often triple-negative, aggressive
- Normal-like: Resembles normal tissue

**Claudin-Low:**
- Low expression of cell-cell junction proteins
- Mesenchymal features
- Often triple-negative
- Resistant to chemotherapy

**Molecular Apocrine:**
- Androgen receptor positive
- Usually ER/PR negative
- FOXA1-driven
- Potential AR-targeted therapy

### Neoadjuvant Therapy Response

**Pathologic Complete Response (pCR):**

Definitions:
- ypT0/is ypN0: No residual invasive cancer
- ypT0: No residual cancer in breast
- Some trials: ypT0/is (allowing DCIS)

Prognostic significance:
- pCR predicts excellent outcome
- Especially important for triple-negative and HER2+
- Less predictive for Luminal A

**Residual Cancer Burden (RCB):**

Scoring system:
- Measures extent of residual disease
- Tumor bed dimensions
- Percentage of carcinoma
- Nodal involvement

Categories:
- RCB-0: pCR
- RCB-I: Minimal residual
- RCB-II: Moderate residual
- RCB-III: Extensive residual

**Miller-Payne System:**
- Grades response in breast
- 1 (no change) to 5 (no tumor)

### Hereditary Breast Cancer

**BRCA1-Associated Cancer:**

Pathology:
- High-grade (grade 3)
- Triple-negative (70-80%)
- Basal-like molecular subtype
- Pushing margins
- Lymphocytic infiltrate
- Medullary features common

Genetics:
- BRCA1 mutation
- Homologous recombination deficiency
- PARP inhibitor sensitivity

**BRCA2-Associated Cancer:**

Pathology:
- Higher grade than sporadic
- Usually ER/PR positive
- HER2 negative
- Luminal B subtype common

**Lynch Syndrome:**
- Mismatch repair deficiency
- Can present with breast cancer (rare)
- MSH2, MLH1 mutations

### Prognostic and Predictive Factors

**Tumor-Infiltrating Lymphocytes (TILs):**

Assessment:
- Percentage of stroma infiltrated
- Mononuclear inflammatory cells
- Exclude necrosis and crush artifact

Significance:
- Better prognosis in triple-negative and HER2+
- Predicts response to chemotherapy
- May predict immunotherapy benefit

**Programmed Death-Ligand 1 (PD-L1):**

Testing:
- Immunohistochemistry (SP142 or 22C3)
- Staining of immune cells
- Cutoff varies by indication

Clinical use:
- Triple-negative breast cancer
- Atezolizumab or pembrolizumab eligibility
- PD-L1 positive required for approval

**Androgen Receptor (AR):**
- Expressed in 70-90% of ER+ and 10-50% of ER-
- Prognostic significance varies
- Target for AR inhibitors

### Special Clinical Scenarios

**Paget Disease of Breast:**

Clinical:
- Eczematous nipple changes
- Often underlying DCIS or invasive cancer

Pathology:
- Paget cells in epidermis
- Large cells with clear cytoplasm
- CK7+, HER2 often positive

**Phyllodes Tumor:**

Classification:
- Benign, borderline, malignant
- Stromal overgrowth
- Leaf-like architecture
- Surgical excision with wide margins

**Male Breast Cancer:**

Features:
- Usually invasive ductal
- High rate of hormone receptor positivity
- HER2+ less common
- Consider genetic testing (BRCA2)

**Breast Cancer in Pregnancy:**
- Usually high-grade
- Can receive chemotherapy (2nd/3rd trimester)
- Sentinel node with dye contraindicated
- Radiation delayed until postpartum

### Digital Pathology and AI

**Applications:**
- Automated HER2 scoring
- Ki-67 quantification
- Lymph node metastasis detection
- Nottingham grade assistance

**Challenges:**
- Validation required
- Regulatory approval
- Integration into workflow
- Cost considerations`,
      keyTerms: [
        { term: 'pathologic complete response', definition: 'No residual invasive cancer after neoadjuvant chemotherapy' },
        { term: 'tumor-infiltrating lymphocytes', definition: 'Immune cells present in tumor tissue; associated with better prognosis in some subtypes' },
        { term: 'PARP inhibitor', definition: 'Drug targeting DNA repair; effective in BRCA-mutated cancers' },
        { term: 'basal-like', definition: 'Molecular subtype often expressing basal cytokeratins; usually triple-negative' },
        { term: 'homologous recombination', definition: 'DNA repair pathway; deficient in BRCA-mutated cancers' },
      ],
      clinicalNotes: 'Tumor-infiltrating lymphocytes (TILs) are assessed as a percentage of the tumor stroma. In triple-negative breast cancer, each 10% increase in TILs is associated with improved outcomes. TILs are also predictive of benefit from chemotherapy and potentially immunotherapy.',
    },
    5: {
      level: 5,
      summary: 'Expert-level breast cancer pathology includes liquid biopsy applications, circulating tumor DNA monitoring, next-generation sequencing for targeted therapy, response prediction models, and emerging biomarkers for precision oncology in breast cancer management.',
      explanation: `## Expert Breast Cancer Pathology

### Liquid Biopsy Applications

**Circulating Tumor Cells (CTCs):**

Detection:
- CellSearch system (FDA-approved)
- Enumerates epithelial cells in blood
- Threshold: >=5 cells/7.5 mL

Prognostic value:
- Metastatic disease monitoring
- Worse prognosis with high counts
- Decline with treatment response

**Circulating Tumor DNA (ctDNA):**

Applications:
- Treatment response monitoring
- Early detection of recurrence
- Identification of resistance mutations
- Minimal residual disease assessment

Testing platforms:
- NGS panels (broad mutation profiling)
- Digital PCR (specific mutations)
- BEAMing (sensitivity enhancement)

**Clinical Utility:**
- Monitoring HER2+ therapy (ESR1 mutations)
- PIK3CA testing for alpelisib eligibility
- Early detection in high-risk patients
- Response prediction

### Next-Generation Sequencing

**Comprehensive Genomic Profiling:**

Targeted panels:
- FoundationOne CDx
- Guardant360
- Tempus xT

Key actionable alterations:

| Gene | Alteration | Therapy |
|------|------------|---------|
| PIK3CA | Activating mutations | Alpelisib (with ET) |
| ESR1 | Mutations | Switch ET, fulvestrant |
| HER2 | Mutations | Trastuzumab deruxtecan |
| BRCA1/2 | Mutations | PARP inhibitors |
| NTRK | Fusions | Larotrectinib, entrectinib |
| MSI-H/dMMR | Various | Pembrolizumab |
| TMB-H | High tumor burden | Pembrolizumab |

**Germline vs Somatic Testing:**
- Tumor sequencing can detect germline variants
- BRCA1/2 should be confirmed with germline testing
- Cascade testing implications

### Resistance Mechanisms

**Endocrine Therapy Resistance:**

ESR1 mutations:
- Acquired during AI therapy
- Ligand-independent activation
- Switch to fulvestrant or SERDs
- Frequency increases with treatment lines

PI3K/AKT/mTOR pathway:
- PIK3CA mutations (40% ER+)
- PTEN loss
- AKT mutations
- Targeted therapies available

Cell cycle pathway:
- CCND1 amplification
- CDK4/6 amplification
- RB1 loss (rare, late)

**HER2-Targeted Therapy Resistance:**

Mechanisms:
- HER2 extracellular domain shedding
- HER3/PI3K activation
- Truncated HER2 (p95)
- Somatic HER2 mutations

Cross-resistance:
- Different mechanisms for different agents
- Trastuzumab deruxtecan active after multiple lines

### Emerging Biomarkers

**ESR1 Mutations:**
- Liquid biopsy detection
- Predict resistance to AIs
- Guide switch to fulvestrant
- Clinical trials of oral SERDs

**HER2-Low:**
- IHC 1+ or 2+/FISH negative
- New therapeutic category
- Trastuzumab deruxtecan approved
- IHC scoring challenges

**PD-L1 in Early-Stage TNBC:**
- KEYNOTE-522 established standard
- Neoadjuvant pembrolizumab
- Adjuvant continuation
- CPS >=1 cutoff

**ctDNA as Prognostic:**
- Postoperative detection
- Minimal residual disease
- Guide adjuvant therapy escalation
- Clinical trials ongoing

### Pathologic Response Prediction Models

**Neo-Bioscore:**
- Integrates clinical and pathologic factors
- Predicts outcome after neoadjuvant therapy
- Better than clinical or pathologic alone

**Residual Risk Score:**
- Integrates RCB with subtype
- Predicts prognosis post-neoadjuvant
- Guides adjuvant decisions

### Quality Assurance

**CAP Accreditation:**
- Standardized reporting
- Proficiency testing
- Quality metrics

**Inter-observer Variability:**
- Ki-67 scoring (high variability)
- TILs assessment (moderate variability)
- HER2 scoring (improved with guidelines)
- Mitotic count (moderate variability)

**Digital Pathology Standards:**
- Whole slide imaging validation
- Viewing software requirements
- Storage and archiving
- Regulatory considerations

### Research Frontiers

**Single-Cell Sequencing:**
- Intratumoral heterogeneity
- Clonal evolution
- Resistance mechanisms
- Immune microenvironment

**Spatial Transcriptomics:**
- Tumor architecture
- Immune-tumor interactions
- Therapeutic targets
- Prognostic patterns

**AI in Pathology:**
- Automated grading
- Predictive algorithms
- Prognostic models
- Integration with clinical data`,
      keyTerms: [
        { term: 'liquid biopsy', definition: 'Analysis of circulating tumor cells or DNA from blood sample' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA released from cancer cells into bloodstream' },
        { term: 'SERD', definition: 'Selective estrogen receptor degrader - type of endocrine therapy' },
        { term: 'minimal residual disease', definition: 'Small amount of cancer remaining after treatment, detectable by sensitive methods' },
        { term: 'spatial transcriptomics', definition: 'Technology mapping gene expression within tissue architecture' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. HER2-low breast cancer (IHC 1+ or 2+/ISH-) represents approximately 50% of breast cancers and is now a treatable category with trastuzumab deruxtecan.

2. ESR1 mutations are acquired mutations that develop during aromatase inhibitor therapy and cause resistance. They are rarely present de novo. Switching to fulvestrant or using a SERD is recommended.

3. Tumor-infiltrating lymphocytes (TILs) should be reported for all triple-negative and HER2+ breast cancers as they provide prognostic information and may predict immunotherapy benefit.

4. PIK3CA mutations can be detected in tumor tissue or ctDNA. Testing is required for alpelisib (Piqray) eligibility in HR+, HER2- advanced breast cancer.

5. ctDNA monitoring shows promise for early detection of recurrence and treatment response monitoring but is not yet standard of care outside clinical trials for most patients.`,
    },
  },

  media: [
    {
      id: 'breast-cancer-grading',
      type: 'histology',
      filename: 'breast-cancer-grading.jpg',
      title: 'Breast Cancer Histologic Grades',
      description: 'Comparison of Grade 1, 2, and 3 breast cancers',
    },
    {
      id: 'breast-ihc-panel',
      type: 'diagram',
      filename: 'breast-ihc.svg',
      title: 'Breast Cancer Immunohistochemistry Panel',
      description: 'ER, PR, HER2, and Ki-67 staining patterns',
    },
  ],

  citations: [
    {
      id: 'who-breast-classification',
      type: 'textbook',
      title: 'WHO Classification of Tumours of the Breast',
      authors: ['WHO'],
      source: 'IARC Press',
    },
    {
      id: 'oncotype-validation',
      type: 'article',
      title: 'Prospective Validation of a 21-Gene Expression Assay in Breast Cancer',
      authors: ['Sparano JA', 'Gray RJ', 'Makower DF', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-benign-breast-conditions', targetType: 'condition', relationship: 'sibling', label: 'Benign Breast Conditions' },
    { targetId: 'reproductive-ovarian-cancer', targetType: 'condition', relationship: 'related', label: 'Ovarian Cancer' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'breast-disease'],
    keywords: ['breast cancer', 'DCIS', 'invasive carcinoma', 'HER2', 'hormone receptors'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default breastCancerPathology;
