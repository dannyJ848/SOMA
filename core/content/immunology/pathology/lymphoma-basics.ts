import { EducationalContent } from '../../types';

export const lymphomaBasicsContent: EducationalContent = {
  id: 'pathology-lymphoma-basics',
  type: 'condition',
  name: 'Lymphoma Basics',
  alternateNames: ['Lymphoid malignancy', 'Lymphatic cancer', 'Lymphoproliferative disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Lymphoma is a cancer that starts in the lymphatic system, affecting lymphocytes which are cells that help fight infections.',
      explanation: `Lymphoma is a type of cancer that affects the lymphatic system, which is part of your immune system. It happens when lymphocytes (white blood cells) grow out of control.

**What is Lymphoma:**

1. **Starts in Lymphocytes**
   - B cells or T cells become cancerous
   - They multiply uncontrollably
   - Form tumors in lymph nodes

2. **Two Main Types**
   - Hodgkin lymphoma: Has Reed-Sternberg cells
   - Non-Hodgkin lymphoma: Many different types

**How It Shows Up:**
- Swollen lymph nodes (neck, armpits, groin)
- Tiredness
- Fever
- Night sweats
- Weight loss

**What Doctors Look At:**
- Size of lymph nodes
- Where they are located
- Microscopic appearance
- Special tests on cells

**Why It Happens:**
- Often unknown cause
- Sometimes linked to infections
- Can run in families
- More common in older adults`,
      keyTerms: [
        { term: 'lymphoma', definition: 'Cancer of the lymphatic system involving lymphocytes' },
        { term: 'lymphocyte', definition: 'Type of white blood cell in the lymphatic system' },
        { term: 'lymph node', definition: 'Small organ that filters lymph and contains immune cells' },
        { term: 'Reed-Sternberg cell', definition: 'Large abnormal cell seen in Hodgkin lymphoma' },
      ],
      analogies: [
        'Lymphoma is like having security guards that multiply uncontrollably and crowd out the normal operations of the security system.',
        'Think of it as a factory where one type of worker starts making copies of themselves endlessly, disrupting normal production.',
      ],
      examples: [
        'Hodgkin lymphoma often causes painless swelling of lymph nodes in the neck.',
        'Some lymphomas grow slowly and may not need immediate treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lymphomas are malignant neoplasms of lymphoid tissue classified as Hodgkin or non-Hodgkin, with distinct microscopic features, clinical behaviors, and treatment approaches.',
      explanation: `Lymphomas represent clonal proliferations of lymphoid cells that can arise in lymph nodes or extranodal sites, requiring biopsy diagnosis and classification.

**Classification Overview:**

1. **Hodgkin Lymphoma (HL):**
   - Reed-Sternberg cells present
   - B cell origin
   - Often curable
   - Two main types: Classical and Nodular Lymphocyte-Predominant

2. **Non-Hodgkin Lymphoma (NHL):**
   - No Reed-Sternberg cells
   - B cell (85%) or T cell (15%) origin
   - Wide spectrum of aggressiveness
   - Multiple subtypes

**Hodgkin Lymphoma Types:**

1. **Classical HL:**
   - Nodular sclerosis (most common)
   - Mixed cellularity
   - Lymphocyte-rich
   - Lymphocyte-depleted

2. **Nodular Lymphocyte-Predominant HL:**
   - Different biology
   - LP (lymphocyte-predominant) cells
   - Slower progression
   - Different treatment

**Non-Hodgkin Lymphoma Categories:**

1. **Aggressive (High-Grade):**
   - Diffuse large B cell lymphoma
   - Burkitt lymphoma
   - Lymphoblastic lymphoma
   - Require immediate treatment
   - Often curable

2. **Indolent (Low-Grade):**
   - Follicular lymphoma
   - Small lymphocytic lymphoma
   - Marginal zone lymphoma
   - Slow growing
   - Often incurable but manageable

**Diagnostic Approach:**

1. **Biopsy Requirements:**
   - Excisional preferred
   - Adequate tissue sampling
   - Fresh tissue for flow cytometry
   - Formalin fixation

2. **Ancillary Studies:**
   - Immunohistochemistry
   - Flow cytometry
   - Cytogenetics/FISH
   - Molecular testing
   - PET/CT staging`,
      keyTerms: [
        { term: 'clonal', definition: 'Derived from a single cell; all cells have same genetic origin' },
        { term: 'extranodal', definition: 'Occurring outside of lymph nodes' },
        { term: 'indolent', definition: 'Slow-growing, less aggressive' },
        { term: 'aggressive', definition: 'Fast-growing, requires prompt treatment' },
        { term: 'nodular sclerosis', definition: 'Subtype of Hodgkin lymphoma with fibrous bands' },
      ],
      analogies: [
        'Hodgkin lymphoma is like having a specific type of troublemaker (Reed-Sternberg cell) that marks this particular cancer.',
        'Indolent lymphomas are like slow-moving trains - they take time to reach the destination but are harder to stop completely.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lymphoma diagnosis requires integration of morphology, immunophenotype, and genetic studies following WHO classification, with distinct entities having specific pathological features and clinical correlations.',
      explanation: `The WHO classification of lymphoid neoplasms provides a framework for diagnosing specific lymphoma subtypes based on morphological, immunophenotypic, and molecular characteristics.

**Hodgkin Lymphoma - Detailed:**

1. **Classical HL:**
   
   *Reed-Sternberg Cells:*
   - Large binucleated cells
   - Owl-eye nucleoli
   - CD30+, CD15+
   - CD45-, PAX5+ (weak)
   - EBV positive (40-50%)
   
   *Nodular Sclerosis:*
   - Fibrous bands dividing nodules
   - Lacunar cells (variant RS)
   - Young adults, mediastinum
   - CD20 variable
   
   *Mixed Cellularity:*
   - Classical RS cells
   - Mixed inflammatory background
   - EBV positive (70%)
   - Older patients, HIV-associated

2. **Nodular Lymphocyte-Predominant HL:**
   - LP (popcorn) cells
   - CD20+, CD79a+, CD45+
   - CD30-, CD15-
   - Nodular growth pattern
   - Risk of transformation to DLBCL

**Common B Cell Lymphomas:**

1. **Diffuse Large B Cell Lymphoma (DLBCL):**
   - Sheets of large cells
   - CD20+, CD45+
   - BCL6+, MUM1+ (variable)
   - Aggressive, curable
   - Cell of origin: GCB or ABC

2. **Follicular Lymphoma:**
   - Back-to-back follicles
   - Loss of polarization
   - CD10+, BCL6+, BCL2+
   - t(14;18)(q32;q21)
   - Indolent

3. **Mantle Cell Lymphoma:**
   - Monotonous small cells
   - Expanded mantle zones
   - CD5+, CD20+, cyclin D1+
   - t(11;14)(q13;q32)
   - Aggressive

4. **Marginal Zone Lymphomas:**
   - Small lymphocytes
   - Various sites (nodal, MALT, splenic)
   - CD20+, CD43+/-, CD5-
   - Associated with inflammation/infection
   - Indolent

5. **Burkitt Lymphoma:**
   - Starry sky pattern
   - High proliferation (Ki-67 ~100%)
   - CD10+, BCL6+, BCL2-
   - MYC rearrangement
   - Very aggressive

**T Cell Lymphomas:**

1. **Peripheral T Cell Lymphoma:**
   - Pleomorphic cells
   - CD3+, CD4>CD8
   - Aggressive
   - Poor prognosis

2. **Anaplastic Large Cell Lymphoma:**
   - Large pleomorphic cells
   - Hallmark cells
   - CD30+, ALK+ (ALK-positive type)
   - t(2;5) translocation
   - Better prognosis if ALK+`,
      keyTerms: [
        { term: 'WHO classification', definition: 'World Health Organization system for classifying hematologic malignancies' },
        { term: 'GCB', definition: 'Germinal Center B cell-like; molecular subtype of DLBCL' },
        { term: 'ABC', definition: 'Activated B cell-like; molecular subtype of DLBCL' },
        { term: 'MALT', definition: 'Mucosa-Associated Lymphoid Tissue; type of marginal zone lymphoma' },
        { term: 'ALK', definition: 'Anaplastic Lymphoma Kinase; tyrosine kinase involved in some lymphomas' },
      ],
      clinicalNotes: 'Excisional biopsy preferred for diagnosis. Fine needle aspiration insufficient for initial diagnosis. Immunophenotyping essential for classification. MYC, BCL2, BCL6 rearrangements assessed in aggressive lymphomas (double/triple hit).',
    },
    4: {
      level: 4,
      summary: 'Lymphoma pathology requires comprehensive assessment of morphology, immunophenotype, genetic abnormalities, and clinical context following standardized diagnostic criteria with prognostic implications.',
      explanation: `Accurate lymphoma diagnosis integrates multiple diagnostic modalities to classify specific entities, assess prognosis, and guide therapy selection.

**Immunophenotyping:**

1. **B Cell Markers:**
   - Pan-B: CD19, CD20, CD79a, PAX5
   - Subsets: CD5, CD10, BCL6, MUM1
   - Activation: CD30, CD38
   - Proliferation: Ki-67
   - Light chains: kappa, lambda

2. **T Cell Markers:**
   - Pan-T: CD2, CD3, CD5, CD7
   - Subsets: CD4, CD8
   - Cytotoxic: TIA-1, granzyme B, perforin
   - ALK for ALCL

3. **Hodgkin Lymphoma Panel:**
   - CD30, CD15
   - PAX5 (weak)
   - CD20 (variable)
   - CD45 (negative)
   - EBER (EBV)
   - LMP1

**Cytogenetic and Molecular Testing:**

1. **Recurrent Translocations:**
   - t(14;18): Follicular lymphoma
   - t(11;14): Mantle cell lymphoma
   - t(8;14): Burkitt lymphoma
   - t(2;5): ALCL
   - MYC rearrangements

2. **FISH Panel:**
   - MYC, BCL2, BCL6
   - For double/triple hit lymphoma
   - Prognostic significance

3. **Molecular Subtyping:**
   - DLBCL: GCB vs ABC
   - Gene expression profiling
   - Mutational profiling
   - MYD88, CD79B (MYD88 L265P in LPL)

**Specialized Entities:**

1. **Primary Mediastinal Large B Cell Lymphoma:**
   - Young women
   - CD23+, CD30+
   - Diffuse fibrosis
   - Distinct from DLBCL

2. **Burkitt-like Lymphoma:****
   - Intermediate features
   - MYC rearrangement
   - High proliferation
   - 11q aberrations

3. **High-Grade B Cell Lymphoma:**
   - MYC and BCL2 and/or BCL6 rearranged
   - "Double hit" or "triple hit"
   - Aggressive
   - Poor prognosis

**T Cell Lymphoma Details:**

1. **Angioimmunoblastic T Cell Lymphoma:**
   - Follicular helper T cell origin
   - CD10+, BCL6+, PD1+
   - EBV+ B cells
   - Systemic symptoms
   - Proliferation of HEVs

2. **Enteropathy-Associated T Cell Lymphoma:**
   - Celiac disease association
   - GI involvement
   - CD3+, CD7+, CD4-, CD8+/-
   - Type I and Type II

3. **Mycosis Fungoides:**
   - Cutaneous T cell lymphoma
   - Epidermotropism
   - Pautrier microabscesses
   - CD4+, CD7 loss

**Staging and Pathology:**

1. **Ann Arbor Staging:**
   - Anatomic distribution
   - A vs B symptoms
   - Extranodal involvement
   - Bulky disease

2. **Bone Marrow Assessment:**
   - Involvement patterns
   - Discordant histology
   - Paratrabecular (follicular)
   - Interstitial vs nodular

3. **Response Assessment:**
   - Post-treatment biopsies
   - Residual mass evaluation
   - PET/CT correlation
   - Relapse vs transformation`,
      keyTerms: [
        { term: 'double hit lymphoma', definition: 'High-grade B cell lymphoma with MYC and BCL2 and/or BCL6 rearrangements' },
        { term: 'EBER', definition: 'EBV-encoded RNA; detected by in situ hybridization' },
        { term: 'epidermotropism', definition: 'Migration of malignant cells into epidermis; seen in cutaneous T cell lymphoma' },
        { term: 'follicular helper T cell', definition: 'CD4+ T cell subset helping B cells in germinal centers; origin of AITL' },
        { term: 'Pautrier microabscess', definition: 'Intraepidermal collection of atypical lymphocytes in mycosis fungoides' },
      ],
      clinicalNotes: 'Double hit lymphomas require FISH testing for MYC, BCL2, BCL6. EBV assessment important in HL, HIV-associated lymphomas, and post-transplant lymphoproliferative disorders. Transformation from indolent to aggressive lymphoma must be excluded in clinical progression.',
    },
    5: {
      level: 5,
      summary: 'Contemporary lymphoma pathology integrates molecular diagnostics, including NGS profiling and gene expression analysis, to refine classification, prognostication, and therapeutic selection in the era of precision medicine.',
      explanation: `Advanced lymphoma diagnostics now incorporate comprehensive molecular characterization to identify actionable targets, predict outcomes, and select optimal therapies.

**Next-Generation Sequencing:**

1. **Panel Testing:**
   - Lymphoma-specific gene panels
   - MYD88, CD79B (LPL)
   - STAT3, STAT5B (LGL leukemia)
   - TET2, DNMT3A, IDH2
   - TP53 mutations

2. **Mutational Profiling Applications:**
   - Clonality assessment
   - Target identification
   - Resistance prediction
   - Minimal residual disease

**Gene Expression Profiling:**

1. **DLBCL Subtyping:**
   - Cell of origin (COO)
   - GCB vs ABC type
   - NanoString technology
   - Lymph2Cx assay
   - Prognostic relevance

2. **Novel Signatures:**
   - Stromal signatures
   - Immune signatures
   - Proliferation indices
   - Risk stratification

**Liquid Biopsy Applications:**

1. **ctDNA Monitoring:**
   - Circulating tumor DNA
   - Treatment response
   - Early relapse detection
   - Molecular profiling

2. **CTC Analysis:**
   - Circulating tumor cells
   - Enumeration
   - Phenotypic characterization
   - Prognostic marker

**Emerging Biomarkers:**

1. **PD-L1 Expression:**
   - Predictive for checkpoint inhibitors
   - Primary mediastinal LBCL
   - Hodgkin lymphoma
   - EBV+ lymphomas

2. **Microenvironment Markers:**
   - Tumor-infiltrating lymphocytes
   - Macrophage polarization
   - Immune checkpoint expression
   - Prognostic significance

**Molecular Pathology - Specific Entities:**

1. **Molecular DLBCL Classification:**
   - Beyond GCB/ABC
   - LymphGen algorithm
   - Genetic subtypes
   - Targeted therapy implications

2. **Follicular Lymphoma:**
   - m7-FLIPI (mutation status)
   - EZH2 mutations
   - Tazemetab target
   - POD24 prediction

3. **Mantle Cell Lymphoma:**
   - SOX11 expression
   - Blastoid variant
   - TP53 mutations
   - IGHV mutation status

**Special Clinical Scenarios:**

1. **CNS Lymphoma:**
   - MYD88 L265P
   - CD79B mutations
   - Diagnosis from CSF
   - Methotrexate sensitivity

2. **Primary Effusion Lymphoma:**
   - HHV8-associated
   - Immunoblastic morphology
   - Liquid phase growth
   - HIV-related

3. **Post-Transplant Lymphoproliferative Disorders:**
   - Early lesions
   - Polymorphic
   - Monomorphic (lymphoma)
   - EBV-driven
   - Reduction of immunosuppression

**Quality and Reporting:**

1. **Standardized Reporting:**
   - CAP synoptic reports
   - WHO criteria
   - Required elements
   - Ancillary testing results

2. **Clinical-Pathological Correlation:**
   - Multidisciplinary conferences
   - Treatment response
   - Discordant cases
   - Second opinions

**Future Directions:**

1. **Artificial Intelligence:**
   - Image analysis
   - Pattern recognition
   - Prognostic models
   - Digital pathology

2. **Single-Cell Analysis:**
   - Microenvironment characterization
   - Clonal evolution
   - Drug resistance mechanisms
   - Therapeutic targets`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; tumor-derived DNA in bloodstream' },
        { term: 'NanoString', definition: 'Technology for digital gene expression analysis' },
        { term: 'm7-FLIPI', definition: 'Follicular lymphoma prognostic index incorporating mutation status' },
        { term: 'POD24', definition: 'Progression of disease within 24 months; adverse prognostic factor' },
        { term: 'liquid biopsy', definition: 'Analysis of tumor material from blood sample' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Excisional biopsy required for lymphoma diagnosis; FNA insufficient
- Double hit lymphoma: MYC + BCL2 and/or BCL6 rearrangements; very aggressive
- Hodgkin lymphoma: CD30+, CD15+, CD45-, PAX5 weak+, EBER variable
- DLBCL: Cell of origin (GCB vs ABC) by Hans algorithm or gene expression
- Burkitt: MYC rearrangement, Ki-67 near 100%, starry sky, very aggressive
- Follicular: t(14;18), BCL2+ germinal centers, indolent, may transform to DLBCL
- ALCL: CD30+, ALK+ or ALK-, hallmark cells`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['pathology', 'oncology', 'hematology'],
    keywords: ['lymphoma', 'cancer', 'lymphoid malignancy', 'pathology'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lymphomaBasicsContent;
