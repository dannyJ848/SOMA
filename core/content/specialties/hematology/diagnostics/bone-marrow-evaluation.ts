/**
 * Bone Marrow Evaluation - Comprehensive Educational Content
 *
 * The diagnostic assessment of bone marrow through aspiration
 * and biopsy for hematologic disorders.
 */

import { EducationalContent } from '../../../types';

export const boneMarrowEvaluation: EducationalContent = {
  id: 'topic-bone-marrow-evaluation',
  type: 'topic',
  name: 'Bone Marrow Evaluation',
  alternateNames: ['Bone marrow biopsy', 'Bone marrow aspiration', 'BMB'],

  levels: {
    1: {
      level: 1,
      summary: 'Bone marrow evaluation is a test where doctors take a small sample from inside a bone to look at blood cell production and diagnose blood disorders.',
      explanation: `Bone marrow evaluation helps doctors understand problems with blood cells.

**What Is Bone Marrow:**
- Soft, spongy tissue inside bones
- Where all blood cells are made
- Contains stem cells that become red cells, white cells, and platelets

**Why Its Done:**
- Find out why blood counts are abnormal
- Diagnose blood cancers (leukemia, lymphoma, myeloma)
- See if cancer has spread to the bone marrow
- Monitor treatment response

**The Procedure:**
- Usually done in the back of the hip bone
- Local anesthesia numbs the area
- Two parts: aspirate (liquid sample) and biopsy (solid core)
- Takes about 15-30 minutes
- Some pressure and brief pain during sampling

**What They Look For:**
- Number and types of cells
- Abnormal cells
- Infections
- Other diseases affecting the marrow`,
      keyTerms: [
        { term: 'bone marrow', definition: 'The soft tissue inside bones where blood cells are made' },
        { term: 'aspiration', definition: 'Removing liquid bone marrow through a needle' },
        { term: 'biopsy', definition: 'Removing a small solid piece of tissue for examination' },
      ],
      analogies: [
        'If your blood is a river, the bone marrow is the spring where the river starts. Testing the spring helps understand why the river might be polluted or running dry.',
      ],
      examples: [
        'A patient with unexplained anemia has a bone marrow biopsy that shows the marrow is not making enough red blood cells, helping diagnose aplastic anemia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bone marrow evaluation includes aspiration for morphology and flow cytometry, and core biopsy for architecture, with indications spanning cytopenias to malignancy staging.',
      explanation: `Bone marrow evaluation is essential for diagnosing many hematologic conditions.

**Components:**
- **Aspirate**: Liquid marrow for smear, flow cytometry, cytogenetics, molecular studies
- **Core biopsy**: Solid tissue for architecture, cellularity, fibrosis
- **Touch prep**: Imprints of biopsy for morphology

**Indications:**
- Unexplained cytopenias
- Suspected leukemia or MDS
- Lymphoma/myeloma staging
- Fever of unknown origin
- Suspected metastatic cancer
- Monitoring treatment response

**Normal Findings:**
- Cellularity: 100 minus age (%)
- M:E ratio: 2:1 to 4:1
- Maturation orderly
- No abnormal infiltrates
- Iron stores present

**Site:**
- Posterior iliac crest (most common)
- Anterior iliac crest
- Sternum (aspiration only - higher risk)
- Tibia (pediatrics)

**Complications (Rare):**
- Pain
- Bleeding
- Infection
- Needle breakage

**Studies Performed:**
- Morphology (aspirate smear and biopsy)
- Flow cytometry (immunophenotype)
- Cytogenetics (karyotype)
- FISH
- Molecular testing (NGS panels)
- Iron stain`,
      keyTerms: [
        { term: 'cellularity', definition: 'The proportion of marrow occupied by hematopoietic cells vs fat' },
        { term: 'M:E ratio', definition: 'Myeloid to erythroid ratio; normally 2:1 to 4:1' },
        { term: 'flow cytometry', definition: 'Technique identifying cell types by surface markers' },
        { term: 'touch prep', definition: 'Imprint cytology from the biopsy specimen' },
      ],
      analogies: [
        'The aspirate is like drawing water from a well to test, while the biopsy is like taking a core sample of the well itself to see its structure.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bone marrow evaluation requires integration of morphology, immunophenotype, cytogenetics, and molecular studies for accurate diagnosis of hematologic disorders.',
      explanation: `## Procedure Technique

**Preparation:**
- Review indications and contraindications
- Check coagulation (PLT >20K generally safe)
- Informed consent
- Positioning: Prone or lateral decubitus

**Steps:**
1. Sterile prep and drape
2. Local anesthesia (skin to periosteum)
3. Aspiration needle insertion
4. Aspirate collection (multiple pulls)
5. Core biopsy needle insertion
6. Core specimen collection (2cm optimal)
7. Hemostasis and dressing

**Specimen Handling:**
| Sample | Anticoagulant | Studies |
|--------|---------------|---------|
| Aspirate smears | None | Morphology |
| Aspirate liquid | EDTA | Flow, molecular |
| Aspirate liquid | Heparin | Cytogenetics |
| Core biopsy | Formalin | Histology, IHC |
| Touch prep | None | Morphology |

## Morphologic Evaluation

**Aspirate Assessment:**
- Cellularity estimate
- M:E ratio
- Maturation sequence
- Blast percentage
- Megakaryocytes
- Abnormal cells

**Biopsy Assessment:**
- Cellularity (more accurate)
- Architecture
- Fibrosis grade
- Infiltrates (focal, diffuse)
- Immunohistochemistry

**Special Stains:**
- Iron stain: Storage iron, ring sideroblasts
- Reticulin: Fibrosis grade (MF-0 to MF-3)
- PAS, myeloperoxidase: Lineage determination

## Flow Cytometry Panel

**Standard Markers:**
- B-cell: CD19, CD20, CD10, kappa/lambda
- T-cell: CD3, CD4, CD8, CD5, CD7
- Myeloid: CD13, CD33, CD117, MPO
- Blast: CD34, TdT, HLA-DR
- Plasma cell: CD38, CD138, CD56

**Applications:**
- MRD detection (sensitivity 10^-4)
- Immunophenotype classification
- PNH screening
- Lymphoma/leukemia diagnosis

## Cytogenetics and Molecular

**Conventional Karyotype:**
- 20+ metaphases analyzed
- Detects large abnormalities
- Important for risk stratification

**FISH:**
- Targeted specific abnormalities
- Works on non-dividing cells
- Common probes: BCR-ABL, MLL, del(5q), etc.

**NGS Panels:**
- Myeloid: FLT3, NPM1, CEBPA, TP53, etc.
- Lymphoid: IGHV, TP53, SF3B1, etc.
- Essential for modern classification`,
      keyTerms: [
        { term: 'ring sideroblasts', definition: 'Erythroid precursors with iron-laden mitochondria ringing the nucleus; diagnostic of MDS-RS' },
        { term: 'fibrosis grade', definition: 'Reticulin stain assessment (MF-0 to MF-3) for myelofibrosis' },
        { term: 'MRD', definition: 'Minimal/measurable residual disease; detection of low-level disease' },
        { term: 'immunohistochemistry', definition: 'Antibody-based staining of biopsy sections for cell identification' },
      ],
      clinicalNotes: 'Dry tap (failure to aspirate) suggests fibrosis, packed marrow (leukemia), or technical issue. Proceed with biopsy and touch preps for diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Bone marrow evaluation requires systematic integration of morphology, ancillary studies, and clinical context for accurate diagnosis and disease classification.',
      explanation: `## Pattern Recognition

**Hypercellular Marrow:**
- Leukemias
- Myeloproliferative neoplasms
- Recovery post-chemotherapy
- Megaloblastic anemia
- Infections (some)

**Hypocellular Marrow:**
- Aplastic anemia
- Hypoplastic MDS
- Post-chemotherapy
- Myelofibrosis (late)
- Infection (some)

**Fibrotic Marrow:**
- Primary myelofibrosis
- Essential thrombocythemia (progression)
- Hairy cell leukemia
- Metastatic cancer
- Autoimmune myelofibrosis

**Infiltrative Patterns:**
| Pattern | Differential |
|---------|--------------|
| Diffuse | Acute leukemia, ALL |
| Nodular | Lymphoma, MDS, mastocytosis |
| Interstitial | Low-grade lymphoma, hairy cell |
| Paratrabecular | Follicular lymphoma |
| Intrasinusoidal | Intravascular lymphoma, hepatosplenic T |

## Specific Disease Findings

**Acute Myeloid Leukemia:**
- ≥20% blasts
- Auer rods
- Aberrant immunophenotype
- Cytogenetics/molecular define subtype

**Myelodysplastic Syndrome:**
- Cytopenias with dysplasia
- <20% blasts (usually <5-10%)
- Ring sideroblasts (RS subtype)
- Specific cytogenetic/molecular findings

**Multiple Myeloma:**
- Plasma cells ≥10% (often >30%)
- Abnormal morphology
- Clonal by flow/IHC
- Light chain restriction

**Myeloproliferative Neoplasms:**
- Hypercellular, often all lineages
- Megakaryocyte clustering and atypia
- Fibrosis variable
- Specific mutations (JAK2, CALR, MPL)

## Quality Assurance

**Adequate Specimens:**
- Aspirate: Spicules present, smears readable
- Biopsy: ≥1.5cm length, intact architecture
- Adequate for all required studies

**Reporting Standards:**
- Cellularity percentage
- M:E ratio
- Blast percentage
- Dysplasia (specified by lineage)
- Ancillary study results
- Final diagnosis and WHO classification

## Correlation

**Integrated Diagnosis:**
- Morphology + immunophenotype + genetics + clinical
- Multidisciplinary review for complex cases
- WHO classification requires all components
- Molecular increasingly essential`,
      keyTerms: [
        { term: 'paratrabecular infiltrate', definition: 'Lymphoma cells adjacent to bone trabeculae; characteristic of follicular lymphoma' },
        { term: 'dry tap', definition: 'Inability to aspirate marrow; suggests fibrosis or packed marrow' },
        { term: 'spicules', definition: 'Marrow fragments on aspirate indicating adequate sampling' },
        { term: 'WHO classification', definition: 'International standard for hematologic malignancy diagnosis' },
      ],
      clinicalNotes: 'Aspirate blast count and biopsy blast count may differ. WHO uses the higher of the two for AML diagnosis. Touch preps valuable when aspirate is hemodilute.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bone marrow evaluation integrates comprehensive morphologic assessment with advanced molecular diagnostics for precision diagnosis and risk stratification.',
      explanation: `## Advanced Diagnostics

**Next-Generation Sequencing:**
- Myeloid panels (30-50 genes)
- Comprehensive panels (100+ genes)
- Variant allele frequency (VAF) for clonality
- Paired germline for somatic vs inherited

**Applications:**
- Diagnostic classification
- Risk stratification
- Therapeutic targeting
- MRD monitoring
- Clonal evolution tracking

**Minimal Residual Disease:**
| Method | Sensitivity | Application |
|--------|-------------|-------------|
| Morphology | 5% | Baseline |
| Flow cytometry | 10^-4 to 10^-5 | AML, ALL |
| RT-qPCR | 10^-5 | Fusion transcripts |
| NGS | 10^-3 to 10^-4 | Mutations |

## Integrated Genomic Reporting

**WHO 2022 Classification:**
- Genetics increasingly defining
- Morphology + immunophenotype + genetics
- New entities (MDS with biallelic TP53, etc.)
- Mutation-defined categories

**ELN 2022 (AML Example):**
- Favorable: NPM1 without FLT3-ITD, CEBPAbZIP, etc.
- Intermediate: NPM1 with FLT3-ITD, cytogenetically normal
- Adverse: TP53, complex, RUNX1, ASXL1, etc.

## Challenging Scenarios

**Hypoplastic MDS vs Aplastic Anemia:**
- Both hypocellular
- Dysplasia (MDS)
- Cytogenetics/mutations (MDS)
- PNH clone (can be either)
- Clinical correlation essential

**MDS vs MPN:**
- Dysplasia vs proliferation
- Mutations overlap (ASXL1, TET2)
- JAK2/CALR suggest MPN
- Ring sideroblasts suggest MDS

**Reactive vs Clonal:**
- Flow for clonality
- Cytogenetics
- Mutation analysis
- Clinical context

## Technical Advances

**Digital Pathology:**
- Whole slide imaging
- AI-assisted cell counting
- Remote consultation

**Single-Cell Analysis:**
- Single-cell sequencing
- Clonal architecture
- Heterogeneity assessment

**Spatial Transcriptomics:**
- Gene expression in tissue context
- Microenvironment characterization
- Research application

## Quality Metrics

**Pre-Analytical:**
- Proper specimen handling
- Timely processing
- Appropriate anticoagulants

**Analytical:**
- Adequate cellularity for studies
- Controls for molecular
- Turnaround time

**Post-Analytical:**
- Integrated reporting
- Multidisciplinary review
- Follow-up correlation

## Clinical Integration

**Staging and Prognosis:**
- Bone marrow involvement percentage
- Cytogenetic/molecular risk
- Treatment planning

**Treatment Monitoring:**
- Response assessment
- MRD status
- Relapse detection

**Repeat Biopsy Indications:**
- Treatment response evaluation
- Suspected relapse
- Unexplained cytopenias during treatment`,
      keyTerms: [
        { term: 'variant allele frequency', definition: 'Proportion of sequencing reads with a mutation; indicates clone size' },
        { term: 'clonal hematopoiesis', definition: 'Age-related mutations in blood cells without overt disease' },
        { term: 'ELN 2022', definition: 'European LeukemiaNet risk stratification for AML' },
        { term: 'spatial transcriptomics', definition: 'Gene expression analysis preserving tissue location information' },
      ],
      clinicalNotes: `**Board Pearls:**
- Cellularity formula: Roughly 100 minus age
- M:E ratio normally 2:1 to 4:1
- Posterior iliac crest is standard site
- Dry tap suggests fibrosis or packed marrow
- Ring sideroblasts: Iron-laden mitochondria in MDS-RS
- Paratrabecular pattern classic for follicular lymphoma
- Flow cytometry MRD sensitivity: 10^-4 to 10^-5
- WHO classification requires morphology + immunophenotype + genetics
- ≥20% blasts defines acute leukemia
- Touch preps valuable when aspirate is poor quality`,
    },
  },

  media: [
    {
      id: 'bm-aspiration',
      type: 'diagram',
      filename: 'bone-marrow-aspiration-technique.svg',
      title: 'Bone Marrow Aspiration Technique',
      description: 'Illustration of posterior iliac crest biopsy procedure',
    },
  ],

  citations: [
    {
      id: 'arber-2016',
      type: 'article',
      title: 'The 2016 revision to the WHO classification of myeloid neoplasms',
      authors: ['Arber DA', 'Orazi A', 'Hasserjian R', 'et al'],
      source: 'Blood',
      url: 'https://doi.org/10.1182/blood-2016-03-643544',
    },
  ],

  crossReferences: [
    { targetId: 'condition-acute-myeloid-leukemia', targetType: 'condition', relationship: 'related', label: 'AML' },
    { targetId: 'condition-mds', targetType: 'condition', relationship: 'related', label: 'MDS' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['diagnostics', 'bone marrow', 'hematology'],
    keywords: ['bone marrow', 'biopsy', 'aspiration', 'morphology', 'flow cytometry'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default boneMarrowEvaluation;
