import type { EducationalContent } from '../../../types';

export const allAmlContent: EducationalContent = {
  id: 'all-aml',
  type: 'condition',
  name: 'ALL and AML',
  alternateNames: ['Acute Lymphoblastic Leukemia', 'Acute Myeloid Leukemia', 'Acute Leukemias'],
  levels: {
    1: {
      level: 1,
      summary: 'ALL and AML are fast-growing blood cancers where the bone marrow makes too many immature white blood cells that cannot fight infections properly.',
      explanation: `Acute lymphoblastic leukemia (ALL) and acute myeloid leukemia (AML) are types of blood cancer that develop quickly. In both conditions, the bone marrow makes too many young white blood cells that never grow up properly to do their job of fighting infections.

Think of bone marrow like a factory that makes different types of blood cells. In ALL and AML, the factory gets stuck making broken, immature cells that fill up the bone marrow and spill into the blood. These bad cells crowd out the healthy red blood cells and platelets, causing problems like fatigue, bleeding, and infections.

ALL affects the lymphocyte type of white blood cells and is more common in children. AML affects the myeloid cells and is more common in adults. Both require urgent treatment with chemotherapy and sometimes bone marrow transplants.

Symptoms often come on quickly and include feeling very tired, getting fevers, bleeding easily, and bone pain. Doctors diagnose these leukemias by looking at blood samples and bone marrow under a microscope and doing special tests.`,
      keyTerms: [
        { term: 'leukemia', definition: 'A cancer of the blood or bone marrow where abnormal white blood cells multiply uncontrollably' },
        { term: 'bone marrow', definition: 'The soft tissue inside bones where blood cells are made' },
        { term: 'lymphocytes', definition: 'A type of white blood cell that helps fight infections' },
        { term: 'myeloid cells', definition: 'A group of blood cells that include red blood cells, platelets, and some white blood cells' }
      ],
      analogies: [
        'Acute leukemia is like a factory where defective copies keep getting made and pile up, pushing out the good products',
        'Think of it like weeds taking over a garden - the bad cells crowd out the healthy flowers'
      ],
      examples: [
        'A 5-year-old with frequent infections, bruising, and bone pain who is diagnosed with ALL',
        'A 65-year-old who develops AML after chemotherapy treatment for another cancer'
      ]
    },
    2: {
      level: 2,
      summary: 'ALL and AML are aggressive hematologic malignancies characterized by clonal proliferation of immature blast cells (greater than 20% in marrow), requiring urgent diagnosis and treatment.',
      explanation: `Acute leukemias represent clonal expansions of hematopoietic progenitors arrested at early stages of differentiation. The defining feature is the presence of 20% or more blast cells (immature hematopoietic precursors) in the bone marrow or peripheral blood. These malignancies are medical emergencies requiring prompt intervention.

Acute Lymphoblastic Leukemia (ALL):
- Arises from lymphoid progenitors (B-cell or T-cell lineage)
- Most common childhood malignancy (peak age 2-5 years)
- B-ALL comprises 75% of cases; T-ALL 25%
- Philadelphia chromosome (BCR-ABL fusion) in 25% of adult B-ALL, 3% of pediatric B-ALL

Acute Myeloid Leukemia (AML):
- Arises from myeloid progenitors (granulocytic, monocytic, erythroid, or megakaryocytic lineages)
- Median age at diagnosis is 68 years
- Classified by WHO 2022 criteria incorporating genetics, morphology, and immunophenotype
- Can arise de novo or secondary to chemotherapy/radiation (therapy-related AML)

Pathophysiology involves genetic mutations that:
- Block differentiation (Class II mutations: transcription factors)
- Enhance proliferation (Class I mutations: signaling pathways)
- Both types of mutations typically required for leukemia development

Clinical manifestations result from:
- Bone marrow failure: anemia (fatigue), neutropenia (infection), thrombocytopenia (bleeding)
- Organ infiltration: hepatosplenomegaly, lymphadenopathy, CNS involvement
- Leukostasis: hyperleukocytosis causing vessel occlusion (respiratory distress, neurologic symptoms)

Prognosis varies dramatically based on cytogenetics, molecular markers, age, and treatment response. Pediatric ALL has cure rates exceeding 90%, while adult AML has 5-year survival rates of 25-40%.`,
      keyTerms: [
        { term: 'blast cells', definition: 'Immature blood cells; greater than 20% defines acute leukemia' },
        { term: 'clonal expansion', definition: 'Proliferation of cells derived from a single abnormal parent cell' },
        { term: 'Philadelphia chromosome', definition: 'Abnormal chromosome 22 with BCR-ABL fusion; creates constitutively active tyrosine kinase' },
        { term: 'leukostasis', definition: 'Clinical syndrome from hyperleukocytosis causing vessel occlusion and organ dysfunction' },
        { term: 'cytogenetics', definition: 'Study of chromosomal abnormalities in cancer cells' }
      ],
      analogies: [
        'Blast cells are like apprentices who never learn their trade - they multiply but cannot do the actual work',
        'The bone marrow is like a crowded elevator where the blasts keep getting on but never get off at their floor'
      ],
      examples: [
        'A 4-year-old with WBC 150,000 and mediastinal mass - T-cell ALL with hyperleukocytosis',
        'A 72-year-old with AML and complex karyotype with TP53 mutation - poor risk category'
      ]
    },
    3: {
      level: 3,
      summary: 'ALL and AML pathogenesis requires cooperative mutations affecting differentiation and proliferation, with classification systems integrating morphology, immunophenotyping, cytogenetics, and molecular genetics.',
      explanation: `Acute leukemias arise from acquired genetic alterations in hematopoietic stem or progenitor cells. The "two-hit" model proposes that leukemia development requires cooperating mutations: one affecting differentiation/apoptosis (class II) and another enhancing proliferation/survival (class I).

Acute Lymphoblastic Leukemia (ALL) classification:

Immunophenotypic classification:
- Early B-cell precursor (pro-B): CD19+, CD10-, cCD79a+
- Common B-cell (c-ALL): CD19+, CD10+, cCD79a+
- Pre-B-cell: CD19+, CD10+, cIgM+, sIg-
- Mature B-cell: sIg+, typically Burkitt leukemia/lymphoma
- T-cell: CD3+, CD7+, TdT+, classified by thymic stage (early, cortical, mature)

Genetic subtypes of B-ALL:
- BCR-ABL1 (Philadelphia chromosome): t(9;22), poor prognosis historically
- KMT2A-rearranged: infant leukemia, often MLLT1/AF4 fusion
- ETV6-RUNX1 (TEL-AML1): t(12;21), favorable in pediatric B-ALL
- TCF3-PBX1: t(1;19), intermediate risk
- Hyperdiploidy (>50 chromosomes): favorable prognosis
- Hypodiploidy (<44 chromosomes): poor prognosis
- Ph-like ALL: BCR-ABL1-like gene expression with CRLF2 rearrangements or other kinase-activating lesions

Acute Myeloid Leukemia (AML) - WHO 2022 Classification:

AML with defining genetic abnormalities:
- AML with t(8;21)(q22;q22.1); RUNX1-RUNX1T1 (favorable)
- AML with inv(16)(p13.1q22) or t(16;16); CBFB-MYH11 (favorable)
- APL with PML::RARA (treatment with ATRA, curable)
- AML with t(9;11)(p21.3;q23.3); KMT2A::MLLT3 (intermediate)
- AML with t(6;9)(p23;q34.1); DEK::NUP214 (poor)
- AML with inv(3)(q21.3q26.2) or t(3;3); GATA2,MECOM (poor)
- AML (megakaryoblastic) with t(1;22)(p13.3;q13.3); RBM15::MRTFA
- AML with BCR::ABL1 (blast phase of CML)
- AML with NPM1 mutation (favorable if FLT3-ITD negative)
- AML with CEBPA mutation (favorable if biallelic)
- AML with RUNX1 mutation (adverse)
- AML with ASXL1 mutation (adverse)
- AML with TP53 mutation (adverse)

Pathophysiologic mechanisms:
- Transcription factor fusions (RUNX1-RUNX1T1, PML-RARA) block differentiation
- Signaling mutations (FLT3-ITD, KIT, RAS) drive proliferation
- Epigenetic modifiers (DNMT3A, TET2, IDH1/2) alter gene expression
- Tumor suppressor loss (TP53) enables genomic instability`,
      keyTerms: [
        { term: 'immunophenotyping', definition: 'Identifying cell lineage using flow cytometry with antibodies against surface and cytoplasmic markers' },
        { term: 'FLT3-ITD', definition: 'Internal tandem duplication in FLT3 gene; confers poor prognosis in AML' },
        { term: 'NPM1 mutation', definition: 'Mutation in nucleophosmin gene; favorable prognostic marker in AML without FLT3-ITD' },
        { term: 'APL', definition: 'Acute promyelocytic leukemia; subtype with t(15;17) treated with ATRA and arsenic' },
        { term: 'epigenetic modifiers', definition: 'Genes that modify chromatin and DNA methylation without changing DNA sequence' }
      ]
    },
    4: {
      level: 4,
      summary: 'Diagnostic workup includes morphology, flow cytometry, cytogenetics, FISH, and molecular testing for mutations. Risk stratification guides treatment intensity and transplant decisions.',
      explanation: `The diagnostic evaluation of suspected acute leukemia requires comprehensive assessment to establish diagnosis, classify subtype, and determine prognostic factors. This is typically completed within 24-48 hours given the urgency of treatment initiation.

Initial evaluation:
- Complete blood count with differential and peripheral smear
- Comprehensive metabolic panel (including uric acid, LDH, phosphorus, calcium)
- Coagulation studies (especially important in APL)
- Blood cultures if febrile
- Tumor lysis syndrome risk assessment

Bone marrow evaluation:
- Morphology with special stains (MPO, esterase for AML; PAS, TdT for ALL)
- Flow cytometry with comprehensive antibody panels
- Conventional karyotype analysis (requires dividing cells)
- Fluorescence in situ hybridization (FISH) for common abnormalities
- Molecular testing: PCR for fusion genes, NGS panels for mutations

ALL workup specifics:
- Immunophenotyping for B vs T lineage and maturity stage
- Cytogenetics for Ph chromosome, MLL rearrangements, hyper/hypodiploidy
- Molecular testing: BCR-ABL1 PCR, CRLF2 rearrangements, IKZF1 deletions
- Lumbar puncture with intrathecal chemotherapy for CNS prophylaxis
- Testicular exam (T-ALL can involve testes)

AML workup specifics:
- Morphologic classification using WHO criteria
- Immunophenotyping for myeloid markers (CD13, CD33, CD117, MPO)
- APL suspicion requires immediate FISH or PCR for PML-RARA - ATRA should be started empirically if suspected
- Cytogenetics for risk stratification
- Molecular testing: NPM1, FLT3-ITD, CEBPA, TP53, RUNX1, ASXL1
- Screening for FLT3 inhibitors if FLT3-ITD or TKD positive

Risk stratification:

ALL:
- Standard risk: Age 1-9, WBC <50,000, favorable cytogenetics (ETV6-RUNX1, hyperdiploidy)
- High risk: Age >10, WBC >50,000, BCR-ABL1, Ph-like, KMT2A-r, hypodiploidy, poor early response
- MRD (measurable residual disease) at day 29 critical for risk adjustment

AML (ELN 2022):
- Favorable: t(8;21), inv(16)/t(16;16), NPM1 without FLT3-ITD, biallelic CEBPA
- Intermediate: NPM1 with FLT3-ITD (low allelic ratio), wild-type NPM1 without adverse features
- Adverse: t(6;9), t(9;22), inv(3)/t(3;3), -5/del(5q), -7, abn(17p), complex karyotype, RUNX1, ASXL1, TP53 mutations

Treatment overview:
- ALL: Multi-agent chemotherapy (induction, consolidation, maintenance), CNS prophylaxis, targeted therapy (imatinib for Ph+), CAR-T for refractory disease
- AML: 7+3 chemotherapy (cytarabine + anthracycline), targeted agents (midostaurin for FLT3, gemtuzumab for CD33), allogeneic transplant for high-risk`,
      keyTerms: [
        { term: 'minimal residual disease', definition: 'Small number of leukemia cells remaining after treatment; detected by flow cytometry or PCR' },
        { term: 'tumor lysis syndrome', definition: 'Metabolic emergency from rapid cell breakdown causing hyperuricemia, hyperkalemia, hyperphosphatemia' },
        { term: 'ATRA', definition: 'All-trans retinoic acid; differentiation therapy for APL' },
        { term: 'CAR-T therapy', definition: 'Chimeric antigen receptor T-cell therapy; patient T-cells engineered to target leukemia' },
        { term: '7+3 regimen', definition: 'Standard AML induction: 7 days cytarabine + 3 days anthracycline' }
      ],
      clinicalNotes: `Clinical pearls for ALL and AML:

1. APL is a medical emergency - high risk of DIC; start ATRA immediately if suspected even before confirming genetics
2. Hyperleukocytosis (WBC >100,000) requires urgent cytoreduction with hydroxyurea or leukapheresis to prevent leukostasis
3. Tumor lysis prophylaxis: aggressive hydration, allopurinol or rasburicase, frequent electrolyte monitoring
4. Philadelphia chromosome ALL in adults requires addition of tyrosine kinase inhibitor (imatinib, dasatinib) to chemotherapy
5. FLT3-ITD AML benefits from midostaurin addition to chemotherapy

Infection considerations:
- Febrile neutropenia is medical emergency - empiric broad-spectrum antibiotics within 1 hour
- Prophylaxis: fluoroquinolones, acyclovir, PCP prophylaxis during high-dose steroids
- Fungal prophylaxis with posaconazole or voriconazole during prolonged neutropenia

Transplant decisions:
- ALL: MRD positivity after consolidation generally indicates transplant need
- AML: Intermediate or adverse risk by ELN criteria typically warrant allogeneic transplant in first remission if medically fit
- Sibling vs MUD vs haploidentical donor considerations

Supportive care:
- Transfusion thresholds: Hb >7-8, platelets >10 (or >50 for procedures)
- Growth factors (G-CSF) may shorten neutropenia but do not improve survival
- Nutrition support critical given high metabolic demands`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include MRD-directed therapy, targeted agents (venetoclax, menin inhibitors), bispecific antibodies, CAR-T cell therapy, and the role of NGS in tracking clonal evolution and resistance mutations.',
      explanation: `Contemporary acute leukemia management increasingly relies on molecular diagnostics and precision therapeutics. Next-generation sequencing panels can detect mutations at 0.01% sensitivity, enabling measurable residual disease (MRD) monitoring beyond flow cytometry capabilities.

MRD assessment and clinical utility:
- Multiparameter flow cytometry: sensitivity 10^-4 to 10^-5
- PCR for fusion transcripts (BCR-ABL1, PML-RARA, RUNX1-RUNX1T1): sensitivity 10^-4 to 10^-6
- NGS for immunoglobulin/TCR rearrangements or mutations: sensitivity 10^-6
- MRD negativity at end-induction in ALL is strongest predictor of cure
- Persistence of NPM1 transcripts in AML predicts relapse
- MRD-directed therapy: intensification or transplant for MRD-positive patients

Novel therapeutics in ALL:

Blinatumomab (Blincyto): CD19-CD3 bispecific T-cell engager
- Approved for MRD-positive and relapsed/refractory B-ALL
- Continuous IV infusion for 4-week cycles
- Cytokine release syndrome and neurotoxicity are key toxicities

Inotuzumab ozogamicin: CD22 antibody-drug conjugate
- Approved for relapsed/refractory B-ALL
- Superior CR rates vs standard chemotherapy in INO-VATE trial
- Hepatotoxicity including sinusoidal obstruction syndrome

CAR-T cell therapy:
- Tisagenlecleucel (Kymriah): CD19-directed CAR-T for B-ALL up to age 25
- Brexucabtagene autoleucel (Tecartus): approved for mantle cell lymphoma, being studied in ALL
- High CR rates (80-90%) but relapse common (CD19-negative escape)
- Cytokine release syndrome and neurotoxicity manageable with tocilizumab and steroids

Novel therapeutics in AML:

Venetoclax-based regimens:
- Venetoclax + hypomethylating agent (azacitidine or decitabine) for older/unfit patients
- Venetoclax + low-dose cytarabine alternative
- Superior survival vs HMA alone in VIALE-A trial
- Tumor lysis syndrome risk, especially with high blast count

Targeted agents:
- Midostaurin: Multi-kinase inhibitor approved for FLT3-mutated AML
- Gilteritinib: Selective FLT3 inhibitor approved for relapsed/refractory FLT3-mutated AML
- Ivosidenib: IDH1 inhibitor for relapsed/refractory IDH1-mutated AML
- Enasidenib: IDH2 inhibitor for relapsed/refractory IDH2-mutated AML
- Gemtuzumab ozogamicin: CD33 antibody-drug conjugate
- Glasdegib: Hedgehog pathway inhibitor for unfit patients

Emerging therapies:
- Menin inhibitors (revumenib, ziftomenib) for NPM1-mutated and KMT2A-rearranged AML
- TP53-targeted therapies (APR-246/eprenetapopt) ongoing trials
- CD123-targeted therapies for blastic plasmacytoid dendritic cell neoplasm

Clonal evolution and resistance:
- Serial NGS can track emergence of resistance mutations
- FLT3-ITD clones may expand under selective pressure
- Secondary AML often harbors pre-existing CHIP mutations (DNMT3A, TET2, ASXL2) that confer chemotherapy resistance`,
      keyTerms: [
        { term: 'bispecific antibody', definition: 'Antibody with two different binding sites; blinatumomab binds CD19 on B-cells and CD3 on T-cells' },
        { term: 'antibody-drug conjugate', definition: 'Monoclonal antibody linked to cytotoxic drug; targets delivery to cancer cells' },
        { term: 'cytokine release syndrome', definition: 'Systemic inflammatory response from CAR-T or bispecific antibody activation' },
        { term: 'menin inhibitor', definition: 'Drug blocking menin-MLL interaction; promising for KMT2A and NPM1-mutated leukemia' },
        { term: 'CHIP', definition: 'Clonal hematopoiesis of indeterminate potential; pre-leukemic mutations in healthy individuals' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Philadelphia chromosome-like (Ph-like) ALL:
- 15-20% of B-ALL in adults; worse outcomes than standard ALL
- CRLF2 rearrangements most common; also ABL-class fusions, JAK mutations
- ABL-class fusions responsive to tyrosine kinase inhibitors
- JAK inhibitors under investigation for CRLF2-rearranged disease

Mixed phenotype acute leukemia (MPAL):
- Biphenotypic or bilineage leukemia with both myeloid and lymphoid features
- Poor outcomes with standard regimens
- Often treated with ALL-type induction plus myeloid agents

Central nervous disease:
- CNS involvement in 5-10% of ALL at diagnosis; prophylaxis mandatory
- High-dose methotrexate and cytarabine penetrate CNS
- Cranial radiation now rarely used (reserved for CNS relapse)
- CAR-T cells may have limited CNS penetration

Relapsed/refractory disease:
- Relapsed ALL in children: blinatumomab or CAR-T as bridge to transplant
- Relapsed AML: clinical trials, targeted agents based on molecular profile
- Second allogeneic transplant possible for late relapse after first transplant

Geriatric AML:
- Unfit patients defined by comorbidities, performance status, not age alone
- Venetoclax + HMA standard of care
- Decitabine 10-day regimen may improve outcomes in adverse-risk disease
- Supportive care only appropriate for some patients with very poor prognostic features`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapters 73-74: Acute Lymphoblastic Leukemia and Acute Myeloid Leukemia' },
    { id: '2', type: 'article', title: 'Diagnosis and management of AML in adults: 2022 ELN recommendations', authors: ['Dohner H', 'Wei AH', 'Appelbaum FR'], source: 'Blood', chapter: '2022' }
  ],
  crossReferences: [
    { targetId: 'acute-lymphoblastic-leukemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'acute-myeloid-leukemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'chronic-lymphocytic-leukemia', targetType: 'condition', relationship: 'see-also' }
  ],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['leukemia', 'blood cancer', 'hematologic malignancy'],
    keywords: ['ALL', 'AML', 'acute leukemia', 'blasts', 'chemotherapy', 'bone marrow transplant'],
    clinicalRelevance: 'critical'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
