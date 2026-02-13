import { EducationalContent } from '../../types';

export const immunodeficiencyPathologyContent: EducationalContent = {
  id: 'pathology-immunodeficiency',
  type: 'condition',
  name: 'Immunodeficiency Pathology',
  alternateNames: ['Immune deficiency pathology', 'Immunodeficiency histology', 'PID pathology'],

  levels: {
    1: {
      level: 1,
      summary: 'Immunodeficiency pathology examines how diseases affect immune system cells and tissues, showing changes in lymph nodes, spleen, and other organs.',
      explanation: `When someone has an immunodeficiency, their immune tissues look different under the microscope. Doctors can see these changes to help understand what type of problem exists.

**What Pathologists Look For:**

1. **Missing Cells**
   - Absent B cells or T cells
   - Missing germinal centers
   - Empty follicles

2. **Abnormal Cells**
   - Unusual cell shapes
   - Wrong cell types in wrong places
   - Abnormal proliferation

3. **Infections in Tissues**
   - Signs of chronic infections
   - Unusual organisms
   - Granulomas

**Common Findings:**
- Small or absent tonsils/adenoids
- Depleted lymph nodes
- Abnormal thymus
- Organ damage from infections

**Why It Matters:**
- Helps diagnose the type of immunodeficiency
- Guides treatment decisions
- Monitors disease progression`,
      keyTerms: [
        { term: 'pathology', definition: 'The study of disease by examining tissues and cells' },
        { term: 'germinal center', definition: 'Area in lymph nodes where B cells multiply and mature' },
        { term: 'follicle', definition: 'Cluster of B cells in lymphoid tissue' },
        { term: 'granuloma', definition: 'Collection of immune cells that forms when the body fights certain infections' },
      ],
      analogies: [
        'Pathology is like being a detective examining the scene of a crime - looking for clues about what went wrong.',
        'Think of examining immune tissues like checking the factory floor to see if all the workers are present and doing their jobs.',
      ],
      examples: [
        'In SCID, lymph nodes appear empty because T cells are missing.',
        'In X-linked agammaglobulinemia, lymph nodes lack B cells and germinal centers.',
      ],
    },
    2: {
      level: 2,
      summary: 'Immunodeficiency pathology involves assessment of lymphoid tissue architecture, cell populations, and infectious complications to characterize immune defects.',
      explanation: `Pathological examination of immunodeficiency reveals characteristic changes in lymphoid tissues reflecting specific immune defects and secondary complications.

**Lymph Node Pathology:**

1. **B Cell Deficiencies:**
   - Small lymph nodes
   - Absent or small follicles
   - No germinal centers
   - Paracortical hyperplasia (reactive)
   - Plasma cells absent

2. **T Cell Deficiencies:**
   - Follicular hyperplasia possible
   - Depleted paracortex
   - Absent/delayed hypersensitivity
   - Poor granuloma formation

3. **Combined Deficiencies:**
   - Markedly hypoplastic
   - Empty architecture
   - Stromal prominence
   - Occasional plasma cells

**Splenic Pathology:**

1. **Normal Components:**
   - White pulp: Lymphoid follicles
   - Red pulp: Filtering function
   - Marginal zone: Antigen capture

2. **Deficiency Patterns:**
   - White pulp depletion
   - Germinal center absence
   - Marginal zone loss
   - Red pulp prominence
   - Increased hemosiderin

**Thymic Pathology:**

1. **Normal Thymus:**
   - Cortex: Dense thymocytes
   - Medulla: Hassall corpuscles
   - T cell development site

2. **Deficiency Changes:**
   - Thymic hypoplasia/aplasia
   - Absent lymphoid tissue
   - Fibrous replacement
   - Hassall corpuscle-only thymus
   - Early involution

**Bone Marrow:**

1. **Cellularity:**
   - May be normal or abnormal
   - Precursor populations assessed
   - Plasma cell evaluation
   - Mast cells, eosinophils

2. **Specific Findings:**
   - B cell precursors absent (XLA)
   - Multilineage abnormalities
   - Storage cells (some PIDs)
   - Viral inclusions`,
      keyTerms: [
        { term: 'paracortex', definition: 'T cell zone of lymph node' },
        { term: 'white pulp', definition: 'Immune portion of spleen containing lymphocytes' },
        { term: 'Hassall corpuscle', definition: 'Keratinized structure in thymic medulla' },
        { term: 'hypoplasia', definition: 'Underdevelopment or incomplete development of tissue' },
        { term: 'aplasia', definition: 'Complete failure of tissue to develop' },
      ],
      analogies: [
        'A lymph node without germinal centers is like a library without books - the structure exists but the function is missing.',
        'The thymus in SCID is like an empty school building - the infrastructure is there but no students are learning.',
      ],
    },
    3: {
      level: 3,
      summary: 'Immunodeficiency pathology demonstrates characteristic architectural abnormalities in lymphoid tissues correlating with specific immune defects, alongside infectious and neoplastic complications.',
      explanation: `Histopathological evaluation in immunodeficiency syndromes reveals structural changes corresponding to affected immune components and provides diagnostic and prognostic information.

**Specific Disease Pathology:**

1. **X-linked Agammaglobulinemia (XLA):**
   - Absent B cells in all tissues
   - No lymphoid follicles
   - No germinal centers
   - No plasma cells
   - Pre-B cells in bone marrow
   - Normal T cell zones

2. **Common Variable Immunodeficiency (CVID):**
   - Variable patterns
   - May have follicular hyperplasia
   - May have depleted follicles
   - Granulomatous inflammation
   - Nodular lymphoid hyperplasia (GI)
   - Increased malignancy risk

3. **Severe Combined Immunodeficiency (SCID):**
   - Hypoplastic lymph nodes
   - Empty follicular areas
   - Depleted paracortex
   - Thymic aplasia/hypoplasia
   - No Hassall corpuscles
   - Small/absent tonsils

4. **DiGeorge Syndrome:**
   - Thymic hypoplasia/aplasia
   - Variable severity
   - Disorganized thymus if present
   - Parathyroid absent
   - Great vessel abnormalities

**Infectious Complications:**

1. **Viral Infections:**
   - Chronic active infections
   - Giant cells (CMV)
   - Inclusion bodies
   - Lymphoid depletion
   - EBV-associated lymphoproliferation

2. **Bacterial Infections:**
   - Abscess formation
   - Poor containment
   - Granuloma formation (variable)
   - Necrosis
   - Septic changes

3. **Fungal Infections:**
   - Poorly formed granulomas
   - Disseminated disease
   - Organisms visible (special stains)
   - Minimal inflammation
   - Necrotizing lesions

4. **Parasitic Infections:**
   - Pneumocystis pneumonia
   - Toxoplasmosis
   - Cryptosporidiosis (GI)
   - Severe manifestations

**Neoplastic Complications:**

1. **Lymphoma Risk:**
   - Increased in many PIDs
   - EBV-associated
   - B cell lymphomas common
   - Often extra-nodal
   - Poor response to therapy

2. **Specific Associations:**
   - CVID: Lymphoma, gastric cancer
   - AT: Lymphoma, leukemia
   - WAS: Lymphoma
   - XLP: Fulminant EBV, lymphoma

**Granulomatous Disease:**

1. **Chronic Granulomatous Disease:**
   - Granulomas with infection
   - Pigment-laden macrophages
   - Chronic inflammation
   - Abscesses
   - Necrosis

2. **CVID-Associated Granulomas:**
   - Non-infectious
   - Multiple organs
   - Sarcoid-like
   - Multinucleated giant cells`,
      keyTerms: [
        { term: 'nodular lymphoid hyperplasia', definition: 'Benign proliferation of lymphoid follicles, common in CVID GI tract' },
        { term: 'lymphoproliferation', definition: 'Abnormal proliferation of lymphoid cells' },
        { term: 'giant cell', definition: 'Large cell formed by fusion of macrophages, seen in chronic infections' },
        { term: 'extra-nodal', definition: 'Occurring outside of lymph nodes' },
        { term: 'inclusion body', definition: 'Structure within cell representing virus or abnormal protein' },
      ],
      clinicalNotes: 'GI biopsies in CVID may show nodular lymphoid hyperplasia, villous atrophy (celiac-like), or giardiasis. Liver granulomas seen in CVID and CGD. Brain biopsy may be needed in some immunodeficiencies with CNS infections.',
    },
    4: {
      level: 4,
      summary: 'Immunodeficiency pathology requires detailed assessment of lymphoid architecture, cytology, and molecular markers to characterize specific defects and associated complications.',
      explanation: `Comprehensive pathological evaluation in immunodeficiency integrates morphological assessment with immunophenotyping and molecular studies to define specific defects and guide clinical management.

**Diagnostic Approach:**

1. **Tissue Sampling:**
   - Lymph node biopsy (excisional preferred)
   - Bone marrow biopsy/aspirate
   - GI biopsies if indicated
   - Skin biopsy (morphologic assessment)
   - Liver biopsy (granulomas, infection)

2. **Morphological Assessment:**
   - Architecture evaluation
   - Cell population identification
   - Special stains for organisms
   - Immunohistochemistry panel
   - In situ hybridization (EBV)

**Immunohistochemistry Panels:**

1. **Lymphoid Markers:**
   - Pan-B: CD20, CD79a, PAX5
   - Pan-T: CD3
   - T subsets: CD4, CD8
   - Plasma cell: CD138
   - Activation: CD30, Ki-67

2. **Dendritic/Macrophage:**
   - CD68, CD163
   - S100 (Langerhans)
   - CD21 (FDCs)
   - CD123 (pDCs)

3. **Organism Detection:**
   - AFB (mycobacteria)
   - GMS (fungi)
   - Warthin-Starry (spirochetes)
   - CMV, EBV IHC
   - Toxoplasma IHC

**Flow Cytometry Correlation:**

1. **Peripheral Blood:**
   - Lymphocyte subsets
   - Immunoglobulin levels
   - Activation markers
   - TRECs (thymic output)

2. **Tissue:**
   - B cell clonality
   - T cell receptor analysis
   - Abnormal populations
   - EBV detection

**Specific Disease Features:**

1. **Hyper-IgM Syndromes:**
   - No germinal centers
   - No class-switched B cells
   - IgM+ plasma cells present
   - No IgA, IgG plasma cells

2. **Wiskott-Aldrich Syndrome:**
   - Small platelets
   - T cell dysfunction
   - Lymphoma risk
   - Autoimmune features

3. **Ataxia-Telangiectasia:**
   - Thymic hypoplasia
   - Ovarian dysgenesis
   - Lymphoid malignancy
   - Cerebellar degeneration

4. **X-linked Lymphoproliferative Disease:**
   - Fulminant EBV infection
   - Hemophagocytosis
   - Lymphoma (Burkitt-like)
   - Dysgammaglobulinemia

**Malignancy in Immunodeficiency:**

1. **EBV-Associated Lymphomas:**
   - B cell origin
   - EBER positive
   - Various histologies
   - Often extranodal

2. **Leukemia:**
   - Risk in some PIDs
   - AT: T-PLL, B-CLL
   - Nijmegen breakage syndrome
   - Fanconi anemia

3. **Carcinomas:**
   - CVID: Gastric cancer
   - HPV-related cancers
   - Squamous cell carcinoma

**Post-Transplant Pathology:**

1. **Graft-vs-Host Disease:**
   - Skin: Basal vacuolar change
   - GI: Apoptosis, crypt loss
   - Liver: Bile duct damage
   - Grading systems

2. **Graft Rejection:**
   - Loss of donor T cells
   - T cell chimerism loss
   - Need for second transplant`,
      keyTerms: [
        { term: 'TREC', definition: 'T cell receptor excision circle; marker of recent thymic emigrants' },
        { term: 'EBER', definition: 'EBV-encoded RNA; detected by in situ hybridization' },
        { term: 'hemophagocytosis', definition: 'Macrophages engulfing blood cells; seen in severe infections' },
        { term: 'chimerism', definition: 'Presence of cells from different genetic origins after transplant' },
        { term: 'T-PLL', definition: 'T cell Prolymphocytic Leukemia; seen in AT' },
      ],
      clinicalNotes: 'Bone marrow in CVID may show reactive changes, granulomas, or lymphoid aggregates. GI biopsies essential for CVID evaluation - may show giardiasis, nodular lymphoid hyperplasia, or inflammatory changes.',
    },
    5: {
      level: 5,
      summary: 'Advanced immunodeficiency pathology integrates morphological, immunophenotypic, and molecular studies to characterize complex disorders, guide therapy, and monitor complications including malignancy and transplant outcomes.',
      explanation: `Contemporary pathology practice in immunodeficiency employs sophisticated diagnostic techniques for precise characterization and optimal patient management.

**Molecular Pathology:**

1. **Genetic Testing Integration:**
   - NGS panel results
   - Sanger sequencing
   - Deletion/duplication analysis
   - RNA sequencing
   - Variant interpretation

2. **Molecular Cytogenetics:**
   - FISH for rearrangements
   - Chromosomal breakage (AT, FA)
   - Clonality assessment (lymphoma)
   - Chimerism analysis

**Advanced Diagnostics:**

1. **Next-Generation Sequencing:**
   - Targeted PID panels
   - Whole exome sequencing
   - Somatic mutations (malignancy)
   - Pharmacogenomics

2. **Single-Cell Analysis:**
   - scRNA-seq
   - BCR/TCR repertoire
   - Clonal evolution
   - Microenvironment studies

**Post-Transplant Monitoring:**

1. **Engraftment Assessment:**
   - Chimerism studies
   - Short tandem repeat analysis
   - Lineage-specific chimerism
   - Donor vs recipient cells

2. **Immune Reconstitution:**
   - T cell subsets over time
   - TREC recovery
   - KREC (B cell output)
   - Functional assays

3. **Complication Surveillance:**
   - GVHD grading
   - Viral reactivation (CMV, EBV)
   - Lymphoproliferative disease
   - Secondary malignancy

**Quality Assurance:**

1. **Tissue Handling:**
   - Fresh tissue for flow
   - Proper fixation
   - Snap freezing for molecular
   - Sterile technique

2. **Reporting Standards:**
   - Standardized terminology
   - Clinical correlation
   - Recommendations
   - Multidisciplinary input

**Research Applications:**

1. **Biomarker Development:**
   - Predictive markers
   - Treatment response
   - Complication risk
   - Endotype definition

2. **Therapeutic Monitoring:**
   - Gene therapy outcomes
   - CAR-T tracking
   - Treg therapy monitoring
   - Pharmacodynamic markers

**Specialized Scenarios:**

1. **Newborn Screening:**
   - TREC analysis
   - Confirmatory testing
   - Rapid genetic testing
   - Urgent intervention

2. **Adult Presentations:**
   - CVID variants
   - Late-onset PIDs
   - Mimics of other diseases
   - Diagnostic challenges

3. **Autoinflammatory Disorders:**
   - Neutrophilic infiltrates
   - IL-1 pathway markers
   - Cryopyrin-associated
   - Histologic patterns`,
      keyTerms: [
        { term: 'KREC', definition: 'Kappa-deleting recombination excision circle; marker of B cell output' },
        { term: 'endotype', definition: 'Disease subtype defined by distinct molecular mechanism' },
        { term: 'pharmacogenomics', definition: 'Study of genetic factors affecting drug response' },
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing for transcriptomic analysis' },
        { term: 'chimerism', definition: 'Coexistence of donor and recipient cells after transplantation' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Lymph node in XLA: No B cells, no germinal centers, no plasma cells
- Thymus in SCID: May be aplastic or have Hassall corpuscles only
- CVID GI: Nodular lymphoid hyperplasia, villous atrophy, giardiasis, gastric cancer risk
- CGD: Pigment-laden macrophages, granulomas, Staph/Strep/Nocardia/Aspergillus infections
- EBV lymphoproliferation: EBER positive, polymorphic to monomorphic spectrum
- GVHD grading: Skin, GI, liver involvement; grade determines therapy
- Hemophagocytic lymphohistiocytosis: Activated macrophages engulfing RBCs, platelets, leukocytes`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['pathology', 'histology', 'immunology'],
    keywords: ['immunodeficiency', 'pathology', 'lymph node', 'histology'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immunodeficiencyPathologyContent;
