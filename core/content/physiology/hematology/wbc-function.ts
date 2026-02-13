/**
 * White Blood Cell Function - Comprehensive Educational Content
 *
 * Covers leukocyte types, differential interpretation, immune function,
 * and clinical significance for infection and immune disorders.
 */

import { EducationalContent } from '../../types';

export const wbcFunction: EducationalContent = {
  id: 'physiology-wbc-function',
  type: 'process',
  name: 'White Blood Cell Function',
  alternateNames: ['Leukocyte function', 'WBC differential', 'Immune cells'],

  levels: {
    1: {
      level: 1,
      summary: 'White blood cells are your body\'s soldiers that fight germs and keep you healthy.',
      explanation: `White blood cells are like an army inside your body that protects you from getting sick.

**Types of White Blood Cells:**

Think of your immune system as having different types of soldiers, each with a special job:

1. **Neutrophils** - The "first responders"
   - The most common type (about half of all white cells)
   - Rush to infections first
   - Eat bacteria and kill them

2. **Lymphocytes** - The "memory soldiers"
   - Remember germs they have fought before
   - Make antibodies (like wanted posters for bad germs)
   - Include T cells and B cells

3. **Monocytes** - The "cleanup crew"
   - Eat germs and dead cells
   - Help other immune cells know what to attack

4. **Eosinophils** - The "parasite fighters"
   - Fight parasites like worms
   - Involved in allergies

5. **Basophils** - The "alarm sounders"
   - Release chemicals during allergic reactions
   - Help with swelling and itching

**When Something Goes Wrong:**
- **Too few white cells:** Your body cannot fight infections well
- **Too many white cells:** Could mean infection, or sometimes a blood cancer

**Signs Your White Cells Are Fighting:**
- Fever
- Swelling
- Pus (dead white cells and germs)
- Feeling sick`,
      keyTerms: [
        { term: 'white blood cells', definition: 'Cells in your blood that fight infections and disease' },
        { term: 'immune system', definition: 'The parts of your body that protect you from germs' },
        { term: 'antibodies', definition: 'Proteins that stick to germs to help destroy them' },
        { term: 'infection', definition: 'When germs get into your body and make you sick' },
      ],
      analogies: [
        'White blood cells are like security guards patrolling your body, looking for intruders.',
        'Antibodies work like wanted posters - once your body makes them, it can recognize the bad guy if it comes back.',
      ],
      examples: [
        'When you get a splinter and see pus, that yellowish stuff is made of dead neutrophils that fought the bacteria.',
        'Vaccines teach your lymphocytes to recognize a germ so they can fight it faster if you ever encounter it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Leukocytes comprise granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (lymphocytes, monocytes), each with specific roles in innate and adaptive immunity.',
      explanation: `## White Blood Cell Types

**Normal WBC Count:** 5,000-10,000 cells/microL

**The Differential (percentages and functions):**

| Cell Type | Normal % | Absolute Count | Main Function |
|-----------|----------|----------------|---------------|
| Neutrophils | 50-70% | 2,500-7,000/microL | Bacterial infections |
| Lymphocytes | 20-40% | 1,000-4,000/microL | Adaptive immunity |
| Monocytes | 2-8% | 200-800/microL | Phagocytosis, antigen presentation |
| Eosinophils | 1-4% | 50-400/microL | Parasites, allergies |
| Basophils | 0.5-1% | 25-100/microL | Allergic reactions |

**Granulocytes (have visible granules):**

1. **Neutrophils:**
   - First responders to infection
   - Short-lived (6-12 hours in blood)
   - Kill bacteria by phagocytosis
   - Release enzymes and reactive oxygen species
   - Form pus at infection sites

2. **Eosinophils:**
   - Fight parasitic infections
   - Participate in allergic responses
   - Elevated in asthma, allergies, parasites

3. **Basophils:**
   - Contain histamine and heparin
   - Involved in allergic reactions
   - Least common white cell

**Agranulocytes:**

1. **Lymphocytes:**
   - T cells: Cell-mediated immunity
   - B cells: Produce antibodies
   - NK cells: Kill infected/cancer cells

2. **Monocytes:**
   - Become macrophages in tissues
   - Phagocytosis of pathogens
   - Present antigens to lymphocytes

## Clinical Significance

**Leukocytosis (elevated WBC):**
- Infection (bacterial, viral)
- Inflammation
- Stress response
- Leukemia

**Leukopenia (low WBC):**
- Bone marrow failure
- Chemotherapy
- Severe infection (overwhelming)
- HIV/AIDS

**Left Shift:**
- Increased immature neutrophils (bands)
- Indicates acute bacterial infection
- Bone marrow releasing cells early

**Common Patterns:**
- Bacterial infection: High neutrophils
- Viral infection: High lymphocytes
- Allergies/parasites: High eosinophils
- Chronic inflammation: High monocytes`,
      keyTerms: [
        { term: 'differential', definition: 'The breakdown of white blood cell types and percentages' },
        { term: 'neutrophil', definition: 'Most common WBC; first responder to bacterial infections', pronunciation: 'NOO-troh-fil' },
        { term: 'lymphocyte', definition: 'WBC responsible for adaptive immunity including T cells and B cells', pronunciation: 'LIM-foh-site' },
        { term: 'leukocytosis', definition: 'Elevated white blood cell count, often indicating infection', pronunciation: 'loo-koh-sy-TOH-sis' },
        { term: 'left shift', definition: 'Increased immature neutrophils (bands) in blood, seen in acute infection' },
      ],
      analogies: [
        'A left shift is like calling in the trainees because you need all hands on deck during a battle.',
        'Eosinophils are like special forces trained to fight large enemies (parasites) rather than small ones (bacteria).',
      ],
    },
    3: {
      level: 3,
      summary: 'Leukocyte biology encompasses granulopoiesis, lymphopoiesis, and the coordinated immune response, with differential patterns reflecting specific pathologic processes.',
      explanation: `## Neutrophil Biology

**Granulopoiesis:**
- Myeloblast -> Promyelocyte -> Myelocyte -> Metamyelocyte -> Band -> Segmented
- Transit time in marrow: 10-14 days
- Marrow reserve: 10x circulating pool
- Circulating half-life: 6-8 hours
- Tissue survival: 1-2 days

**Neutrophil Response to Infection:**
1. **Margination:** Selectin-mediated rolling on endothelium
2. **Adhesion:** Integrin-mediated firm attachment
3. **Diapedesis:** Transmigration through vessel wall
4. **Chemotaxis:** Migration toward infection (IL-8, C5a, fMLP)
5. **Phagocytosis:** Engulfment of pathogen
6. **Killing:** Oxidative burst, degranulation

**Oxidative Burst:**
- NADPH oxidase generates superoxide
- Myeloperoxidase creates hypochlorous acid
- Deficient in Chronic Granulomatous Disease (CGD)

**Neutrophil Extracellular Traps (NETs):**
- Web of DNA, histones, and antimicrobial proteins
- Trap and kill pathogens
- May contribute to autoimmunity and thrombosis

## Lymphocyte Subsets

**T Lymphocytes (Thymus-derived):**

| Subset | Markers | Function |
|--------|---------|----------|
| Helper T (Th) | CD4+ | Cytokine production, B cell help |
| Cytotoxic T (Tc) | CD8+ | Kill infected/tumor cells |
| Regulatory T (Treg) | CD4+CD25+FoxP3+ | Suppress immune responses |
| Memory T | CD45RO+ | Rapid response to recall antigens |

**T Cell Receptor (TCR):**
- Recognizes antigen + MHC
- CD4 T cells: MHC Class II (antigen-presenting cells)
- CD8 T cells: MHC Class I (all nucleated cells)

**B Lymphocytes (Bone marrow-derived):**
- Markers: CD19, CD20, surface immunoglobulin
- Plasma cells: Antibody factories
- Memory B cells: Long-lived, rapid secondary response

**NK Cells:**
- Innate lymphocytes (no antigen-specific receptor)
- Markers: CD16, CD56
- Kill cells lacking MHC I (missing self)
- Important for viral infections and tumor surveillance

## Clinical Patterns

**Absolute Neutrophil Count (ANC):**
- ANC = WBC x (% neutrophils + % bands)
- Neutropenia: ANC <1,500/microL
- Severe neutropenia: ANC <500/microL (high infection risk)
- Febrile neutropenia: Medical emergency

**Differential Patterns:**

| Pattern | Likely Causes |
|---------|---------------|
| Neutrophilia | Bacterial infection, steroids, stress |
| Lymphocytosis | Viral infection, CLL, pertussis |
| Monocytosis | Chronic infection, malignancy, recovery |
| Eosinophilia | Allergies, parasites, drugs, malignancy |
| Basophilia | CML, allergic reactions |

**Causes of Neutropenia:**
- Decreased production: Drugs, infections, marrow failure
- Increased destruction: Autoimmune
- Increased utilization: Overwhelming sepsis
- Sequestration: Splenomegaly

**CD4 Count and HIV:**
| CD4 Count | Risk |
|-----------|------|
| >500/microL | Normal immune function |
| 200-500/microL | Moderate immunodeficiency |
| <200/microL | AIDS-defining, opportunistic infection risk |
| <50/microL | Severe AIDS, CMV, MAC risk |`,
      keyTerms: [
        { term: 'oxidative burst', definition: 'Rapid release of reactive oxygen species by neutrophils to kill pathogens' },
        { term: 'NETs', definition: 'Neutrophil extracellular traps; web of DNA and antimicrobial proteins that trap pathogens' },
        { term: 'CD4 count', definition: 'Number of helper T cells per microliter; key marker for HIV disease progression' },
        { term: 'ANC', definition: 'Absolute neutrophil count; total number of neutrophils including bands' },
        { term: 'febrile neutropenia', definition: 'Fever with ANC <500/microL; medical emergency requiring urgent antibiotics' },
      ],
      clinicalNotes: 'Febrile neutropenia requires urgent blood cultures and empiric broad-spectrum antibiotics within 1 hour. The CD4 count guides prophylaxis and treatment decisions in HIV.',
    },
    4: {
      level: 4,
      summary: 'Leukocyte biology integrates transcriptional regulation of lineage commitment, signaling pathways governing activation and function, and the molecular basis of immunodeficiency and immunoproliferative disorders.',
      explanation: `## Transcriptional Control of Myelopoiesis

**Key Transcription Factors:**
- PU.1: Myeloid and B cell development
- C/EBPalpha: Granulocyte differentiation
- GATA-1: Erythroid and megakaryocyte lineage
- GATA-2: HSC maintenance
- RUNX1 (AML1): Definitive hematopoiesis

**Lineage Decisions:**
- PU.1 high / GATA-1 low: Myeloid
- PU.1 low / GATA-1 high: Erythroid
- Cross-antagonism between factors

**Growth Factors:**
- G-CSF: Neutrophil production and release
- GM-CSF: Granulocyte and monocyte development
- M-CSF: Monocyte/macrophage development
- IL-3: Multi-lineage support

## Neutrophil Signaling and Dysfunction

**Chemotaxis Pathways:**
- Chemoattractant receptors: GPCRs (CXCR1, CXCR2, C5aR)
- PI3K/Akt activation
- Actin polymerization (Rho GTPases)
- Cell polarization and migration

**Phagocytosis Signaling:**
- Fc receptors (FcgammaRI, II, III)
- Complement receptors (CR1, CR3)
- Syk kinase activation
- Phagosome formation

**Primary Immunodeficiencies Affecting Neutrophils:**

| Disorder | Defect | Clinical Features |
|----------|--------|-------------------|
| CGD | NADPH oxidase | Catalase+ infections (Aspergillus, S. aureus) |
| LAD Type I | CD18 (beta2 integrin) | No pus, poor wound healing, leukocytosis |
| LAD Type II | Sialyl-Lewis X | Recurrent infections, mental retardation |
| Chediak-Higashi | LYST (lysosomal trafficking) | Giant granules, albinism, infections |
| Myeloperoxidase deficiency | MPO | Usually asymptomatic or mild |

## Lymphocyte Development and Selection

**T Cell Development (Thymus):**
1. Double negative (DN): CD4-CD8-
2. TCR rearrangement (VDJ recombination)
3. Double positive (DP): CD4+CD8+
4. Positive selection: MHC recognition (survival)
5. Negative selection: Strong self-reactivity (apoptosis)
6. Single positive: CD4+ or CD8+

**B Cell Development (Bone Marrow):**
1. Pro-B: Heavy chain rearrangement
2. Pre-B: Surrogate light chain expression
3. Immature B: Surface IgM expression
4. Negative selection: Autoreactive cells deleted/edited
5. Mature B: IgM and IgD co-expression

**Central vs Peripheral Tolerance:**
- Central: Deletion in thymus/bone marrow
- Peripheral: Anergy, Tregs, deletion
- Failure leads to autoimmunity

## Clinical Applications

**Flow Cytometry Panels:**

| Panel | Purpose | Key Markers |
|-------|---------|-------------|
| T cell | HIV monitoring, SCID | CD3, CD4, CD8, CD45 |
| B cell | CLL, lymphoma | CD19, CD20, CD5, kappa, lambda |
| NK cell | NK deficiency | CD16, CD56, CD3- |
| T/B/NK | SCID workup | Combined panel |

**Immunophenotyping in Leukemia:**
- ALL-B: CD19+, CD10+, TdT+
- ALL-T: CD3+, CD7+, TdT+
- AML: CD33+, CD13+, MPO+
- CLL: CD5+, CD19+, CD23+

**Minimal Residual Disease (MRD):**
- Flow cytometry: 0.01% sensitivity
- Leukemia-associated immunophenotype (LAIP)
- Prognostic in ALL, AML, CLL
- Guides therapy duration

## Immunomodulatory Therapy

**Colony-Stimulating Factors:**
- G-CSF (filgrastim, pegfilgrastim): Chemotherapy-induced neutropenia
- GM-CSF (sargramostim): Post-transplant engraftment
- Biosimilars available

**Immunosuppression Monitoring:**
- Tacrolimus/cyclosporine levels
- Lymphocyte subset monitoring
- Infection prophylaxis based on immunosuppression level

**Checkpoint Inhibitors (Cancer Immunotherapy):**
- Anti-CTLA-4: Ipilimumab
- Anti-PD-1: Nivolumab, pembrolizumab
- Anti-PD-L1: Atezolizumab
- Immune-related adverse events: Colitis, hepatitis, endocrinopathies`,
      keyTerms: [
        { term: 'CGD', definition: 'Chronic granulomatous disease; NADPH oxidase deficiency causing inability to kill catalase-positive organisms' },
        { term: 'LAD', definition: 'Leukocyte adhesion deficiency; impaired neutrophil migration due to integrin or selectin ligand defects' },
        { term: 'VDJ recombination', definition: 'Somatic recombination generating diverse T and B cell receptor repertoires' },
        { term: 'MRD', definition: 'Minimal residual disease; detection of small numbers of leukemia cells below morphologic detection' },
        { term: 'SCID', definition: 'Severe combined immunodeficiency; absent T cells with or without B/NK cells' },
      ],
      clinicalNotes: 'CGD patients should avoid marijuana/compost (Aspergillus) and receive lifelong prophylaxis (TMP-SMX, itraconazole). LAD Type I presents with delayed umbilical cord separation. Consider SCID in any infant with persistent infections or failure to thrive.',
    },
    5: {
      level: 5,
      summary: 'Contemporary leukocyte biology integrates single-cell technologies, systems immunology, and precision medicine approaches to diagnose and treat immunodeficiency, autoimmunity, and malignancy.',
      explanation: `## Single-Cell Technologies in Immunology

**Single-Cell RNA Sequencing (scRNA-seq):**
- Cell-by-cell transcriptomic profiling
- Identifies novel cell populations
- Maps differentiation trajectories
- Reveals heterogeneity in disease

**Applications:**
- Leukemia stem cell identification
- Tumor microenvironment characterization
- T cell exhaustion phenotypes
- CAR-T cell persistence analysis

**Mass Cytometry (CyTOF):**
- Metal-labeled antibodies
- >40 parameters simultaneously
- Deep immune profiling
- No spectral overlap

**Immune Profiling Platforms:**
| Technology | Parameters | Throughput |
|------------|------------|------------|
| Flow cytometry | 20-30 | High |
| CyTOF | 40+ | Medium |
| scRNA-seq | Genome-wide | High |
| CITE-seq | RNA + protein | Medium |

## Advanced Immunodeficiency Diagnosis

**Next-Generation Sequencing Panels:**
- Primary immunodeficiency panels: 300+ genes
- Whole exome sequencing for novel genes
- Whole genome for regulatory variants
- RNA-seq for splicing defects

**Newborn Screening (TREC/KREC):**
- T cell receptor excision circles (TRECs)
- Kappa-deleting recombination excision circles (KRECs)
- Detects SCID and XLA at birth
- Allows pre-symptomatic treatment

**Functional Assays:**
| Test | Measures | Indications |
|------|----------|-------------|
| DHR (Dihydrorhodamine) | NADPH oxidase | CGD |
| CD107a degranulation | NK/CTL function | HLH |
| Lymphocyte proliferation | T cell function | SCID |
| Complement CH50/AH50 | Complement pathways | Complement deficiencies |

## CAR-T Cell Therapy

**CAR Structure:**
- scFv (antigen binding): Derived from antibody
- Hinge and transmembrane domain
- Co-stimulatory domain: CD28 or 4-1BB
- CD3zeta activation domain

**Approved Products:**
| Product | Target | Indication |
|---------|--------|------------|
| Tisagenlecleucel | CD19 | ALL, DLBCL |
| Axicabtagene ciloleucel | CD19 | DLBCL, FL |
| Brexucabtagene autoleucel | CD19 | MCL |
| Lisocabtagene maraleucel | CD19 | DLBCL |
| Idecabtagene vicleucel | BCMA | Multiple myeloma |
| Ciltacabtagene autoleucel | BCMA | Multiple myeloma |

**Toxicities:**
- Cytokine release syndrome (CRS): IL-6 mediated, tocilizumab
- Immune effector cell-associated neurotoxicity (ICANS)
- B cell aplasia (CD19 targets)
- Cytopenias
- Secondary malignancies (rare)

## Checkpoint Inhibitor Immunology

**PD-1/PD-L1 Axis:**
- PD-1 on activated T cells
- PD-L1 on tumor cells and APCs
- Engagement causes T cell exhaustion
- Blockade restores anti-tumor immunity

**CTLA-4 Biology:**
- Competes with CD28 for B7 binding
- Inhibits T cell activation
- Treg function
- Blockade enhances T cell responses

**Biomarkers of Response:**
- PD-L1 expression (tumor and immune cells)
- Tumor mutational burden (TMB)
- Microsatellite instability (MSI)
- Tumor-infiltrating lymphocytes (TILs)

**Resistance Mechanisms:**
- Loss of MHC expression
- Beta-2 microglobulin mutations
- JAK1/2 mutations (interferon signaling)
- Alternative checkpoint upregulation (LAG-3, TIM-3, TIGIT)

## Systems Immunology

**Immune Signatures in Disease:**
- Type I interferon signature: SLE, dermatomyositis
- Th17 signature: Psoriasis, IBD
- Exhaustion signature: Chronic viral infection, cancer
- Senescence signature: Aging, chronic inflammation

**Computational Immunology:**
- Immune repertoire analysis
- TCR/BCR sequencing for clonality
- Neoantigen prediction
- Immune cell deconvolution from bulk RNA-seq

**Clinical Trials Integration:**
- Basket trials based on biomarkers
- Umbrella trials with immune profiling
- Adaptive designs with molecular monitoring
- Real-world evidence integration

## Emerging Therapies

**Bispecific Antibodies:**
- Blinatumomab (CD3/CD19): ALL
- Mosunetuzumab (CD3/CD20): Lymphoma
- Teclistamab (CD3/BCMA): Myeloma
- Off-the-shelf, no manufacturing delay

**NK Cell Therapies:**
- Cord blood-derived NK cells
- iPSC-derived NK cells
- CAR-NK cells
- Lower CRS risk than CAR-T

**Gene Editing for Immunodeficiency:**
- CRISPR-Cas9 gene correction
- HSC gene therapy for SCID, CGD
- Base editing for precision correction
- In vivo delivery approaches`,
      keyTerms: [
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing; transcriptomic profiling of individual cells revealing heterogeneity and differentiation' },
        { term: 'TREC', definition: 'T cell receptor excision circles; byproduct of TCR rearrangement used for SCID newborn screening' },
        { term: 'CRS', definition: 'Cytokine release syndrome; systemic inflammatory response to CAR-T therapy treated with tocilizumab' },
        { term: 'ICANS', definition: 'Immune effector cell-associated neurotoxicity syndrome; neurologic toxicity of CAR-T treated with steroids' },
        { term: 'bispecific antibody', definition: 'Engineered antibody binding two different antigens, typically CD3 on T cells and a tumor antigen' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Newborn screening for SCID using TRECs allows pre-symptomatic HSC transplant
- CRS grading guides tocilizumab use: Grade 1-2 may observe, Grade 3+ treat
- CD19 CAR-T causes B cell aplasia requiring IVIG replacement
- High TMB and MSI-H predict checkpoint inhibitor response across tumor types
- Beta-2 microglobulin loss is an immune escape mechanism in checkpoint inhibitor resistance
- Bispecific antibodies are off-the-shelf alternatives to CAR-T with lower but real CRS risk`,
    },
  },

  media: [
    {
      id: 'wbc-types-diagram',
      type: 'diagram',
      filename: 'wbc-types.svg',
      title: 'White Blood Cell Types',
      description: 'Morphology and classification of leukocytes',
    },
    {
      id: 'neutrophil-function',
      type: 'diagram',
      filename: 'neutrophil-response.svg',
      title: 'Neutrophil Response to Infection',
      description: 'Steps from margination to phagocytosis',
    },
    {
      id: 'lymphocyte-development',
      type: 'diagram',
      filename: 'lymphocyte-development.svg',
      title: 'T and B Cell Development',
      description: 'Lymphocyte maturation in thymus and bone marrow',
    },
  ],

  citations: [
    {
      id: 'abbas-immunology',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
    },
    {
      id: 'williams-leukocytes',
      type: 'textbook',
      title: 'Neutrophils and Monocytes',
      source: 'Williams Hematology',
      chapter: '66-68',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-blood-components', targetType: 'topic', relationship: 'parent', label: 'Blood Components' },
    { targetId: 'condition-leukemia', targetType: 'condition', relationship: 'related', label: 'Leukemia' },
    { targetId: 'physiology-bone-marrow', targetType: 'topic', relationship: 'related', label: 'Bone Marrow Function' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],

  tags: {
    systems: ['hematologic', 'immune'],
    topics: ['leukocytes', 'immunity', 'infection', 'WBC differential'],
    keywords: ['neutrophil', 'lymphocyte', 'monocyte', 'eosinophil', 'basophil'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default wbcFunction;
