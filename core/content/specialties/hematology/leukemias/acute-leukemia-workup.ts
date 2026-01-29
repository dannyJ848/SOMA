import type { EducationalContent } from '../../../types';

export const acuteLeukemiaWorkup: EducationalContent = {
  id: 'acute-leukemia-workup',
  type: 'concept',
  name: 'Acute Leukemia Workup',
  alternateNames: ['Acute Leukemia Diagnostic Approach', 'New Leukemia Evaluation', 'Blast Crisis Workup'],
  levels: {
    1: {
      level: 1,
      summary: 'The acute leukemia workup is a set of tests doctors use to diagnose and classify blood cancer quickly so treatment can begin as soon as possible.',
      explanation: `When doctors suspect someone has acute leukemia, they need to do several tests quickly to confirm the diagnosis and figure out the best treatment. This is important because acute leukemia can worsen rapidly.

The first test is usually a blood test to check blood cell counts and look at the cells under a microscope. If there are too many immature cells called blasts, this suggests leukemia.

Next, doctors take a sample of bone marrow from the hip bone. This sample is examined under a microscope and tested with special machines to identify the exact type of leukemia. Doctors also look at the chromosomes and genes in the leukemia cells because this helps predict how well treatment will work.

Additional tests check how the leukemia is affecting the body, including liver and kidney function, and whether the cancer has spread to the brain or spinal cord. Sometimes a small amount of spinal fluid is collected to check for leukemia cells.

All these tests help the medical team create a treatment plan and start therapy quickly, often within 24 to 48 hours of diagnosis.`,
      keyTerms: [
        { term: 'bone marrow biopsy', definition: 'A procedure to remove a small amount of bone marrow for testing' },
        { term: 'blasts', definition: 'Immature blood cells that are found in high numbers in leukemia' },
        { term: 'chromosomes', definition: 'Structures in cells that contain genetic information; abnormalities help classify leukemia' }
      ],
      analogies: [
        'The leukemia workup is like being a detective gathering clues to solve a mystery quickly',
        'It is like running diagnostics on a car to find all the problems before starting repairs'
      ],
      examples: [
        'A patient with fatigue and bruising gets blood tests showing high white count with blasts, leading to rapid bone marrow biopsy and diagnosis',
        'A child with joint pain and fever has blood work that triggers immediate leukemia workup and treatment initiation'
      ]
    },
    2: {
      level: 2,
      summary: 'The acute leukemia workup requires urgent completion of blood tests, bone marrow evaluation, imaging, and lumbar puncture to establish diagnosis, classify subtype, and assess complications.',
      explanation: `Suspected acute leukemia constitutes a hematologic emergency requiring rapid diagnostic evaluation, typically within 24-48 hours. The workup has several components:

Immediate blood tests:
- Complete blood count with differential: Documents cytopenias and blast percentage
- Peripheral blood smear: Manual review for blasts and morphology
- Comprehensive metabolic panel: Electrolytes, renal function, liver function, uric acid, LDH, phosphorus
- Coagulation studies: PT/INR, aPTT, fibrinogen, D-dimer (critical for APL)
- Blood type and crossmatch: For potential transfusion support
- Blood cultures: If febrile or neutropenic

Bone marrow evaluation:
- Aspirate and biopsy from posterior iliac crest
- Morphology with special stains (MPO, esterase for AML; TdT, PAS for ALL)
- Flow cytometry: Immunophenotyping for lineage assignment
- Cytogenetics: Karyotype analysis for chromosomal abnormalities
- FISH: Fluorescence in situ hybridization for common translocations
- Molecular testing: PCR for fusion transcripts, NGS for mutations

Lumbar puncture:
- Performed for CNS assessment in ALL and high-risk AML
- Cell count, cytology, flow cytometry of CSF
- Intrathecal chemotherapy administration for CNS prophylaxis/treatment

Imaging and additional studies:
- Chest X-ray: Mediastinal mass assessment (especially T-ALL)
- CT/PET if extramedullary disease suspected
- Echocardiogram: Baseline cardiac function (anthracyclines cardiotoxic)
- Infectious disease screening: HBV, HCV, HIV, CMV, HSV, fungal serologies
- Pregnancy test in women of childbearing potential
- HLA typing: For potential stem cell transplant candidacy

Risk stratification assessment:
- Age, performance status, comorbidities
- Cytogenetic and molecular risk groups
- Presenting white blood cell count
- CNS involvement

Urgent complications to assess:
- Tumor lysis syndrome risk (high WBC, elevated LDH, bulky disease)
- Disseminated intravascular coagulation (especially APL)
- Hyperleukocytosis and leukostasis (WBC >100,000)
- Infection (febrile neutropenia)`,
      keyTerms: [
        { term: 'flow cytometry', definition: 'Technique using antibodies and lasers to identify cell types based on surface markers' },
        { term: 'cytogenetics', definition: 'Study of chromosomes to identify structural abnormalities in cancer cells' },
        { term: 'FISH', definition: 'Fluorescent probes that bind to specific DNA sequences to detect gene rearrangements' },
        { term: 'lumbar puncture', definition: 'Procedure to collect cerebrospinal fluid from the spinal canal' },
        { term: 'HLA typing', definition: 'Testing for human leukocyte antigens to match donors for stem cell transplant' }
      ],
      analogies: [
        'The acute leukemia workup is like assembling a complete profile of a suspect before planning the response',
        'Each test adds a piece to the puzzle: flow cytometry identifies the cell type, cytogenetics reveals the genetic fingerprint'
      ],
      examples: [
        'A 25-year-old with WBC 200,000 needs emergent cytoreduction and tumor lysis prophylaxis before definitive chemotherapy',
        'An elderly patient with AML and FLT3-ITD mutation identified on rapid molecular testing gets midostaurin added to induction chemotherapy'
      ]
    },
    3: {
      level: 3,
      summary: 'Comprehensive acute leukemia evaluation integrates morphology, immunophenotyping, cytogenetics, and molecular genetics to establish lineage, classify by WHO criteria, determine prognostic risk, and identify therapeutic targets.',
      explanation: `The modern acute leukemia workup employs multiparametric analysis to precisely characterize the disease and guide therapy. The WHO 2022 classification system requires integration of morphology, immunophenotype, cytogenetics, and molecular genetics.

Morphologic evaluation:

Bone marrow aspirate stained with Wright-Giemsa:
- Blast enumeration (20% or more defines acute leukemia)
- Auer rods: Needle-like cytoplasmic inclusions pathognomonic for myeloid lineage
- Cytoplasmic granularity and nuclear features
- Background hematopoiesis assessment

Special cytochemical stains:
- Myeloperoxidase (MPO): Positive in myeloid blasts; negative in lymphoblasts
- Sudan Black B: Myeloid-specific lipid staining
- Nonspecific esterase (NSE): Positive in monocytic differentiation
- Periodic acid-Schiff (PAS): Block positivity in lymphoblasts
- TdT (terminal deoxynucleotidyl transferase): Nuclear enzyme in lymphoid precursors

Immunophenotyping by flow cytometry:

Essential for lineage assignment and subclassification:

Myeloid markers: CD13, CD33, CD117, MPO (cytoplasmic), HLA-DR
Monocytic markers: CD14, CD64, CD11b, CD4, lysozyme
B-lymphoid markers: CD19, CD10, CD22, CD79a, CD20, CD34, TdT
T-lymphoid markers: CD3 (cytoplasmic and surface), CD7, CD2, CD5, CD4, CD8, TdT
Progenitor markers: CD34, HLA-DR, CD38

Acute promyelocytic leukemia markers: CD33 bright, CD13, heterogeneous, HLA-DR negative, CD34 negative

Diagnostic panels typically use 8-10 color flow cytometry with gating strategies to identify blast populations and assess maturation patterns.

Cytogenetic analysis:

Conventional karyotype requires viable, dividing cells:
- G-banding analysis of 20 metaphase cells
- Identifies gross chromosomal rearrangements
- Required for risk stratification in both ALL and AML
- May be unsuccessful if insufficient dividing cells (poor sample or hypocellularity)

Fluorescence in situ hybridization (FISH):
- Uses DNA probes labeled with fluorescent dyes
- Can be performed on interphase cells (no division required)
- Rapid results (24-48 hours)
- Common panels: BCR-ABL1, KMT2A/MLL, PML-RARA, RUNX1-RUNX1T1, CBFB-MYH11

Molecular genetic testing:

PCR-based assays:
- Detect fusion transcripts (BCR-ABL1, PML-RARA, RUNX1-RUNX1T1)
- Quantitative monitoring during treatment
- Highly sensitive for minimal residual disease

Next-generation sequencing:
- Comprehensive mutation profiling
- AML: FLT3, NPM1, CEBPA, RUNX1, TP53, ASXL1, IDH1/2, DNMT3A
- ALL: IKZF1, CRLF2, JAK-STAT pathway mutations
- Prognostic and therapeutic implications

Genomic microarray:
- Detects copy number alterations
- Identifies regions of loss/gain not visible by karyotype
- Useful for cryptic abnormalities

Diagnostic reporting:

Final diagnosis integrates all data:
- Morphology confirms acute leukemia
- Immunophenotype establishes lineage
- Genetics provide classification and prognostic risk
- Report per WHO 2022 classification guidelines

Turnaround time goals:
- Morphology and flow cytometry: 24-48 hours
- FISH: 24-48 hours
- Karyotype: 7-14 days
- NGS: 7-14 days (though rapid panels available)`,
      keyTerms: [
        { term: 'Auer rod', definition: 'Fusiform cytoplasmic inclusion in myeloid blasts; formed from fused azurophilic granules' },
        { term: 'TdT', definition: 'Terminal deoxynucleotidyl transferase; DNA polymerase present in immature lymphoid cells' },
        { term: 'G-banding', definition: 'Chromosome staining technique producing characteristic banding patterns for identification' },
        { term: 'interphase FISH', definition: 'FISH performed on non-dividing cells; faster than karyotyping' },
        { term: 'lineage assignment', definition: 'Determination of cell type origin (myeloid vs lymphoid) based on marker expression' }
      ]
    },
    4: {
      level: 4,
      summary: 'Prognostic risk stratification in acute leukemia integrates cytogenetic and molecular findings, age, WBC count, and treatment response metrics to guide intensity of therapy and transplant decisions.',
      explanation: `Risk stratification in acute leukemia has evolved from clinical parameters alone to sophisticated integration of genetic abnormalities and treatment response. These classifications guide therapeutic intensity and transplant decisions.

Acute Myeloid Leukemia risk stratification (ELN 2022):

Favorable risk:
- t(8;21)(q22;q22.1); RUNX1-RUNX1T1
- inv(16)(p13.1q22) or t(16;16)(p13.1;q22); CBFB-MYH11
- NPM1 mutation without FLT3-ITD or with FLT3-ITD low allelic ratio (<0.5)
- Biallelic CEBPA mutation

Intermediate risk:
- NPM1 mutation with FLT3-ITD high allelic ratio (>=0.5)
- Wild-type NPM1 without adverse risk features and with FLT3-ITD low allelic ratio
- Cytogenetic and/or molecular abnormalities not classified as favorable or adverse

Adverse risk:
- t(6;9)(p23;q34.1); DEK-NUP214
- t(9;22)(q34.1;q11.2); BCR-ABL1 (blast phase)
- t(9;11)(p21.3;q23.3); KMT2A-MLLT3
- t(10;11)(p12;q23); KMT2A-MLLT10
- t(11;19)(q23.3;p13.3); KMT2A-MLLT1/ELL
- inv(3)(q21.3q26.2) or t(3;3)(q21.3;q26.2); GATA2,MECOM(EVI1)
- t(8;16)(p11.2;p13.3); KAT6A-CREBBP
- inv(16)(p13.1q22) or t(16;16) with CKIT or NRAS mutation (considered adverse by some)
- -5 or del(5q); -7; -17/abn(17p)
- Complex karyotype (3 or more abnormalities, none defining)
- Monosomal karyotype (2 or more autosomal monosomies, or 1 monosomy with structural abnormality)
- RUNX1 mutation
- ASXL1 mutation
- TP53 mutation

Acute Lymphoblastic Leukemia risk stratification:

Standard risk (pediatric):
- Age 1 to younger than 10 years
- WBC <50,000/uL
- Favorable cytogenetics: ETV6-RUNX1, hyperdiploidy
- No CNS or testicular involvement
- Rapid early response to induction

High risk:
- Age >=10 years
- WBC >=50,000/uL
- CNS or testicular involvement
- BCR-ABL1 (Ph-positive)
- KMT2A rearrangement
- Hypodiploidy (<44 chromosomes)
- IKZF1 deletion
- Poor early response to induction

Ph-like ALL:
- BCR-ABL1-like gene expression signature
- CRLF2 rearrangements or other kinase-activating lesions
- Associated with poor prognosis similar to Ph-positive ALL

Treatment response assessment:

Morphologic response:
- Complete remission (CR): Less than 5% blasts in marrow, ANC >1000, platelets >100,000, no extramedullary disease
- CR with incomplete count recovery (CRi): Meets CR criteria except cytopenias
- Partial remission: 5-25% blasts, at least 50% decrease from baseline

Minimal residual disease (MRD):
- Measured by flow cytometry or PCR
- Strongest predictor of relapse
- Adult ALL: MRD negativity at day 29 associated with cure
- AML: MRD positivity predicts relapse; threshold varies by assay

Molecular MRD (AML):
- NPM1 transcript monitoring
- RUNX1-RUNX1T1, CBFB-MYH11 transcript monitoring
- Persistence or rise predicts relapse

Clinical factors affecting prognosis:

Age:
- Pediatric ALL: Cure rates >90%
- Adult ALL: Cure rates 40-50%
- AML: Outcomes worsen with age >60

Performance status:
- ECOG 0-1 associated with better outcomes
- Poor performance status limits intensive therapy options

Comorbidities:
- Cardiac function (anthracycline exposure)
- Renal function (methotrexate clearance)
- Hepatic function (chemotherapy metabolism)
- Prior malignancy (secondary AML)

Transplant decisions:

ALL:
- Standard risk: Continue chemotherapy if MRD negative
- High risk/Ph-positive: Allogeneic transplant in first remission
- MRD positive after consolidation: Transplant indicated

AML:
- Favorable risk: Chemotherapy alone if MRD negative
- Intermediate risk: Consider transplant based on MRD, donor availability
- Adverse risk: Allogeneic transplant in first remission if medically fit

Donor selection considerations:
- Matched sibling preferred
- Matched unrelated donor (MUD)
- Haploidentical (half-matched) donors increasingly used
- Cord blood for patients lacking other donors`,
      keyTerms: [
        { term: 'allelic ratio', definition: 'Ratio of mutant to wild-type allele; in FLT3-ITD, high ratio predicts poor prognosis' },
        { term: 'complex karyotype', definition: 'Presence of 3 or more chromosomal abnormalities in the absence of defining translocations' },
        { term: 'hyperdiploidy', definition: 'Presence of more than 50 chromosomes; favorable in ALL' },
        { term: 'hypodiploidy', definition: 'Presence of fewer than 44 chromosomes; poor prognosis in ALL' },
        { term: 'minimal residual disease', definition: 'Small number of leukemia cells remaining after treatment; detected by sensitive methods' }
      ],
      clinicalNotes: `Clinical pearls for acute leukemia workup:

Timing priorities:
1. APL suspected? Start ATRA immediately while awaiting genetics
2. Hyperleukocytosis with respiratory/neurologic symptoms? Urgent leukapheresis or cytoreduction
3. DIC present? Aggressive blood product support before procedures
4. Tumor lysis risk? Start prophylaxis before chemotherapy

Bone marrow biopsy technique:
- Posterior iliac crest preferred site
- Aspirate first (for flow cytometry, cytogenetics, molecular)
- Core biopsy for architecture (assess cellularity, fibrosis)
- If dry tap, biopsy imprint and peripheral blood may substitute

Flow cytometry considerations:
- Anticoagulated sample delivered to lab within 24 hours
- EDTA or heparin acceptable
- Avoid freezing or extreme temperatures
- Viability assessment important (dead cells nonspecifically bind antibodies)

Molecular testing nuances:
- FLT3-ITD testing must report allelic ratio
- NPM1 mutation type may have prognostic significance
- Germline mutations (CEBPA, RUNX1, DDX41) vs somatic mutations
- Consider inherited predisposition syndromes in young patients or family history

Communication essentials:
- Rapid communication of APL or high-risk features
- Clear documentation of genetic results and risk category
- Multidisciplinary team involvement early
- Patient counseling about diagnosis, prognosis, treatment plan

Common pitfalls:
- Assuming peripheral blasts represent marrow involvement (confirm with biopsy)
- Delaying workup for cytoreduction in stable patients
- Missing APL (can have pancytopenia without elevated WBC)
- Not checking for extramedullary disease (CNS, chloromas)`
    },
    5: {
      level: 5,
      summary: 'Advanced diagnostic concepts include next-generation flow cytometry MRD detection, error-corrected NGS for mutation tracking, single-cell sequencing, liquid biopsy applications, and integration of clonal evolution data into treatment decisions.',
      explanation: `Contemporary acute leukemia diagnostics incorporates cutting-edge technologies for improved sensitivity, precision, and real-time monitoring of treatment response and clonal evolution.

Next-generation MRD detection:

Multiparameter flow cytometry (NGF):
- 8-12 color panels with standardized EuroFlow protocols
- Detects 1 leukemia cell in 10,000 normal cells (10^-4)
- Can distinguish leukemia-associated immunophenotypes (LAIP) from normal regenerating blasts
- Next-generation flow (NGF) with optimized antibody panels improves sensitivity and standardization

Molecular MRD methods:

Real-time quantitative PCR (RQ-PCR):
- Sensitivity 10^-4 to 10^-6
- Requires patient-specific or disease-specific targets
- Standardized reporting (IS scale for BCR-ABL1, NPM1)
- Fusion transcripts: RUNX1-RUNX1T1, CBFB-MYH11, PML-RARA
- Gene mutations: NPM1, WT1

Next-generation sequencing MRD:
- Error-corrected NGS (ecNGS) using unique molecular identifiers (UMIs)
- Detects mutations at 10^-6 sensitivity
- Can track multiple clones simultaneously
- Identifies emerging resistance mutations
- Applications: Ig/TCR rearrangements in ALL, somatic mutations in AML

Single-cell sequencing:
- Characterizes intratumoral heterogeneity
- Identifies therapy-resistant subclones
- Maps differentiation hierarchies in leukemia
- Can distinguish leukemic stem cells from bulk blasts

Liquid biopsy:

Circulating tumor DNA (ctDNA):
- Cell-free DNA from plasma contains leukemia-derived mutations
- Non-invasive monitoring of disease burden
- Can detect relapse earlier than bone marrow assessment
- Challenges: Low abundance, clonal hematopoiesis interference

Circulating leukemia cells:
- Enumeration in peripheral blood
- May correlate with bone marrow disease burden
- Potential for less invasive monitoring

Clonal evolution tracking:

Serial molecular profiling:
- Comparison of diagnostic and relapse samples
- Identification of chemotherapy-resistant clones
- Understanding mechanisms of treatment failure

Common patterns:
- Persistence of founding clone with acquisition of new mutations
- Selection of pre-existing resistant subclones
- Lineage switch (myeloid to lymphoid or vice versa)

Mutational processes:
- Chemotherapy-induced mutational signatures
- APOBEC-mediated mutagenesis
- Defective DNA repair pathways

Genomic classification advances:

RNA sequencing:
- Fusion detection without prior knowledge
- Alternative splicing events
- Gene expression signatures for risk stratification
- Ph-like ALL detection by gene expression

DNA methylation profiling:
- CpG island methylator phenotype (CIMP)
- Prognostic significance in AML
- Classification of leukemias of ambiguous lineage

Functional precision medicine:

Ex vivo drug sensitivity testing:
- Patient-derived xenografts (PDX)
- Organoid cultures
- High-throughput drug screening on primary samples
- Challenges: Time required, cost, standardization

Biomarker development:
- Predictive markers for targeted therapy response
- Resistance mechanism identification
- Minimal residual disease predictors

Artificial intelligence applications:
- Automated blast enumeration from smears
- Integration of multi-omics data for risk prediction
- Treatment response prediction models
- Resource allocation optimization

Standardization and quality:

External quality assessment:
- College of American Pathologists (CAP) proficiency testing
- European LeukemiaNet standards
- Standardized reporting criteria

Clinical implementation:
- Turnaround time optimization
- Cost-effectiveness considerations
- Integration into clinical workflows
- Reimbursement challenges for advanced testing`,
      keyTerms: [
        { term: 'error-corrected NGS', definition: 'Sequencing method using molecular barcodes to eliminate PCR and sequencing errors' },
        { term: 'unique molecular identifier', definition: 'Molecular barcode added during library preparation to track individual DNA molecules' },
        { term: 'liquid biopsy', definition: 'Analysis of circulating tumor material (DNA or cells) from blood without tissue biopsy' },
        { term: 'clonal evolution', definition: 'Process by which tumors acquire new mutations and change over time under selective pressure' },
        { term: 'leukemia-associated immunophenotype', definition: 'Abnormal antigen expression pattern distinguishing leukemia cells from normal cells' }
      ],
      clinicalNotes: `Advanced clinical considerations:

MRD monitoring strategies:
- Adult AML: PCR for NPM1 if mutated; flow cytometry for others; every 3 months for 2 years
- Adult ALL: Flow cytometry or Ig/TCR PCR; critical at day 29 and end-consolidation
- CML: BCR-ABL1 PCR every 3 months; transcript type affects monitoring

Emerging biomarkers:
- FLT3-ITD measurable residual disease in NPM1-mutated AML
- Single-cell DNA sequencing for clonal architecture
- Immune repertoire profiling

Diagnostic challenges:
- Lineage plasticity and mixed phenotype acute leukemia
- Therapy-related myeloid neoplasms with complex genetics
- Germline vs somatic mutation distinction
- Clonal hematopoiesis interference in older patients

Research applications:
- Understanding mechanisms of therapy resistance
- Identifying therapeutic vulnerabilities
- Development of novel targeted agents
- Design of rational combination therapies

Future directions:
- Real-time genomics during treatment
- Integration of immune profiling
- Predictive models incorporating multi-omics
- Point-of-care molecular diagnostics
- Non-invasive monitoring replacing bone marrow biopsies`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapter 71: Acute Leukemia Diagnostic Approach' },
    { id: '2', type: 'article', title: 'The 5th edition of the WHO Classification of Haematolymphoid Tumours', authors: ['Khoury JD', 'Solary E', 'Abla O'], source: 'Leukemia', chapter: '2022' }
  ],
  crossReferences: [
    { targetId: 'all-aml', targetType: 'condition', relationship: 'related' },
    { targetId: 'acute-lymphoblastic-leukemia', targetType: 'condition', relationship: 'related' },
    { targetId: 'acute-myeloid-leukemia', targetType: 'condition', relationship: 'related' }
  ],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['leukemia', 'diagnostic workup', 'laboratory medicine'],
    keywords: ['acute leukemia', 'diagnostic workup', 'flow cytometry', 'cytogenetics', 'molecular testing', 'MRD'],
    clinicalRelevance: 'critical'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
