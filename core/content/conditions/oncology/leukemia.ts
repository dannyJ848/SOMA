/**
 * Leukemia - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const leukemia: EducationalContent = {
  id: 'condition-leukemia',
  type: 'condition',
  name: 'Leukemia',
  nameEs: 'Leucemia',
  alternateNames: ['Blood Cancer', 'Leukemia', 'Acute Leukemia', 'Chronic Leukemia'],
  hpoId: 'HP:0001902',

  levels: {
    1: {
      level: 1,
      summary: 'Leukemia is cancer of the blood-forming tissues, including bone marrow and lymphatic system. It causes the body to make too many abnormal white blood cells.',
      explanation: `Leukemia is a cancer that starts in the bone marrow—the soft tissue inside bones where blood cells are made. The bone marrow makes too many abnormal white blood cells that do not work properly.

**Types of Leukemia:**
- Acute (fast-growing)
- Chronic (slow-growing)
- Lymphocytic (affects lymphoid cells)
- Myelogenous (affects myeloid cells)

**Common symptoms:**
- Fever and infections
- Easy bruising or bleeding
- Fatigue and weakness
- Pale skin
- Bone pain
- Swollen lymph nodes

**How it is diagnosed:**
- Blood tests showing abnormal blood counts
- Bone marrow biopsy
- Genetic testing on leukemia cells

**Treatment:**
- Chemotherapy (main treatment)
- Targeted therapy
- Radiation therapy
- Stem cell transplant
- Immunotherapy`,
      keyTerms: [
        { term: 'bone marrow', definition: 'Soft tissue inside bones that makes blood cells' },
        { term: 'white blood cells', definition: 'Cells that fight infection' },
        { term: 'biopsy', definition: 'Removing a sample of tissue to examine under a microscope' },
      ],
      analogies: ['Leukemia is like a factory that is producing defective products—too many abnormal white blood cells that crowd out the healthy blood cells.'],
      examples: ['A child develops frequent infections, fatigue, and bruising. Blood tests reveal acute lymphoblastic leukemia, which is treated with chemotherapy.'],
    },
    2: {
      level: 2,
      summary: 'Leukemia is classified into four main types: ALL, AML, CLL, and CML, based on cell lineage (lymphoid vs myeloid) and clinical behavior (acute vs chronic).',
      explanation: `## Four Main Types

**Acute Lymphoblastic Leukemia (ALL):**
- Most common childhood cancer
- Affects lymphoid progenitor cells
- Rapid progression
- Curable in ~90% of children

**Acute Myeloid Leukemia (AML):**
- Most common acute leukemia in adults
- Affects myeloid progenitor cells
- Rapid progression
- Treatment requires intensive chemotherapy

**Chronic Lymphocytic Leukemia (CLL):**
- Most common adult leukemia in Western countries
- Mature-appearing lymphocytes
- Often indolent, may not require immediate treatment
- Watchful waiting for early-stage

**Chronic Myeloid Leukemia (CML):**
- Affects myeloid cells
- Defined by Philadelphia chromosome
- Three phases: chronic, accelerated, blast crisis
- Highly treatable with TKIs

## Diagnosis
- Complete blood count (CBC) with differential
- Peripheral blood smear
- Bone marrow aspiration and biopsy
- Flow cytometry for immunophenotyping
- Cytogenetics and molecular studies

## General Treatment Principles
- Acute: Urgent treatment needed
- Chronic: May observe initially
- Stem cell transplant for high-risk or relapsed disease`,
      keyTerms: [
        { term: 'Philadelphia chromosome', definition: 'Abnormal chromosome forming BCR-ABL fusion gene in CML' },
        { term: 'TKI', definition: 'Tyrosine kinase inhibitor; targeted therapy for CML' },
        { term: 'flow cytometry', definition: 'Lab technique analyzing cell surface markers for diagnosis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Leukemia management is guided by risk stratification using cytogenetics, molecular markers, and measurable residual disease, with treatment intensification for high-risk disease.',
      explanation: `## ALL Risk Stratification
**Favorable:**
- Age 1-9 years, WBC <50,000
- t(12;21) ETV6-RUNX1
- Hyperdiploidy (50+ chromosomes)

**Unfavorable:**
- Age >10 years, WBC >50,000
- t(9;22) Philadelphia chromosome
- Hypodiploidy
- MRD positivity after induction

**Treatment:**
- Induction, consolidation, maintenance phases
- CNS prophylaxis (intrathecal chemo)
- Asparaginase, vincristine, steroids (core drugs)
- Imatinib added for Ph+ ALL

## AML Risk Stratification
**Favorable:**
- t(8;21), inv(16), t(15;17) (APL)
- NPM1 mutation without FLT3

**Unfavorable:**
- Complex karyotype
- Monosomy 5 or 7
- TP53 mutation

**APL (Acute Promyelocytic Leukemia):**
- Medical emergency (risk of DIC)
- ATRA + arsenic trioxide (highly curable)
- Monitor for differentiation syndrome

## CLL Staging (Rai/Binet)
**Rai Stage 0 (low risk):** Lymphocytosis only
**Rai Stage I-II (intermediate):** Lymphocytosis + lymphadenopathy/splenomegaly
**Rai Stage III-IV (high):** Anemia or thrombocytopenia

**Treatment Indications:**
- Symptomatic disease
- Cytopenias from marrow infiltration
- Rapid lymphocyte doubling time

## CML Treatment
- Imatinib (first-generation TKI)
- Dasatinib, nilotinib (second-generation)
- Ponatinib (for T315I mutation)
- Lifelong therapy (usually)`,
      keyTerms: [
        { term: 'MRD', definition: 'Measurable residual disease; small number of remaining cancer cells after treatment' },
        { term: 'APL', definition: 'Acute promyelocytic leukemia; medical emergency with DIC risk' },
        { term: 'ATRA', definition: 'All-trans retinoic acid; differentiation therapy for APL' },
      ],
      clinicalNotes: 'APL is a hematologic emergency—suspected cases require immediate ATRA and aggressive transfusion support for coagulopathy. MRD assessment is now standard in ALL and AML for risk stratification.',
    },
    4: {
      level: 4,
      summary: 'Leukemia therapeutics include monoclonal antibodies, CAR-T cells, bispecific antibodies, targeted inhibitors, and novel approaches for relapsed/refractory disease.',
      explanation: `## Novel Therapeutics in ALL
**Antibody-Based:**
- Rituximab (CD20) for B-ALL
- Blinatumomab (CD19 BiTE)
- Inotuzumab ozogamicin (CD22 ADC)

**CAR-T Cell Therapy:**
- Tisagenlecleucel for relapsed/refractory B-ALL
- High complete remission rates
- Cytokine release syndrome and neurotoxicity risks

## AML Targeted Therapy
**FLT3 Inhibitors:**
- Midostaurin (with frontline chemo)
- Gilteritinib (relapsed/refractory)
- Quizartinib

**IDH Inhibitors:**
- Ivosidenib (IDH1)
- Enasidenib (IDH2)
- For relapsed/refractory disease

**Other Targets:**
- Gemtuzumab ozogamicin (CD33)
- Venetoclax (BCL-2 inhibitor) + hypomethylating agent (elderly/unfit)

## CLL Targeted Therapy
**BTK Inhibitors:**
- Ibrutinib, acalabrutinib, zanubrutinib
- Continuous therapy until progression
- Superior to chemoimmunotherapy

**BCL-2 Inhibitor:**
- Venetoclax + obinutuzumab (fixed-duration)
- Deep remissions, MRD-negative

**PI3K Inhibitors:**
- Idelalisib, duvelisib (later lines)

## Allogeneic Stem Cell Transplant
- Curative potential for high-risk disease
- Graft-versus-leukemia effect
- Significant morbidity and mortality
- Reduced-intensity conditioning for older patients`,
      keyTerms: [
        { term: 'BiTE', definition: 'Bispecific T-cell engager; brings T cells to leukemia cells' },
        { term: 'ADC', definition: 'Antibody-drug conjugate; targeted chemotherapy delivery' },
        { term: 'graft-versus-leukemia', definition: 'Immune effect where donor cells attack leukemia' },
      ],
      clinicalNotes: 'CAR-T has revolutionized relapsed/refractory B-ALL. Venetoclax-based combinations allow effective treatment of elderly AML patients previously ineligible for intensive therapy.',
    },
    5: {
      level: 5,
      summary: 'Precision leukemia management incorporates next-generation sequencing for minimal residual disease detection, novel immunotherapies, and molecularly targeted approaches based on comprehensive genomic profiling.',
      explanation: `## Molecular Monitoring
**NGS-Based Approaches:**
- Ultra-deep sequencing for MRD detection
- Clonal evolution tracking
- Early relapse prediction
- Treatment guidance

**Peripheral Blood Monitoring:**
- BCR-ABL quantification (CML)
- NPM1 MRD assessment (AML)
- Ig/TCR rearrangements (ALL)

## Emerging Immunotherapies
**Next-Generation CAR-T:**
- Allogeneic (off-the-shelf) CAR-T
- Dual-target CARs
- Armored CARs
- CAR-NK cells

**Bispecific Antibodies:**
- Mosunetuzumab, glofitamab (CD20 x CD3)
- Tebentafusp (for BPDCN)
- Targeting novel antigens (CD123, CD33)

## Novel Targets in AML
- Menin inhibitors (KMT2A-rearranged, NPM1-mutated)
- CD47-SIRPa blockade (magrolimab)
- TIM-3, CD123-directed therapies
- Epigenetic modifiers

## Precision Medicine
- Comprehensive genomic profiling at diagnosis
- Risk-adapted therapy de-escalation
- Molecularly directed salvage therapy
- MRD-driven treatment duration

## Acute Leukemia of Ambiguous Lineage
- Mixed phenotype acute leukemia (MPAL)
- Diagnostic challenges
- Therapy: ALL-like vs AML-like approaches
- Poor prognosis, consider early transplant

## Prevention and Predisposition
- Germline predisposition syndromes
- Familial clustering
- Chemoprevention strategies
- Monitoring at-risk individuals`,
      keyTerms: [
        { term: 'clonal evolution', definition: 'Genetic changes in leukemia over time and treatment' },
        { term: 'BPDCN', definition: 'Blastic plasmacytoid dendritic cell neoplasm; rare aggressive leukemia' },
        { term: 'MRD-driven', definition: 'Treatment decisions guided by measurable residual disease assessment' },
      ],
      clinicalNotes: 'Ultra-deep NGS can detect MRD at levels of 10^-6, predicting relapse months before clinical recurrence. Germline predisposition testing is increasingly important for family counseling.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-leukemia-2024', type: 'website', title: 'NCCN Guidelines for Acute Leukemias', source: 'National Comprehensive Cancer Network' },
    { id: 'nccn-cll-cml-2024', type: 'website', title: 'NCCN Guidelines for CLL and CML', source: 'National Comprehensive Cancer Network' },
    { id: 'eln-2024', type: 'website', title: 'ELN Recommendations for AML and ALL', source: 'European LeukemiaNet' },
  ],
  crossReferences: [
    { targetId: 'condition-lymphoma', targetType: 'condition', relationship: 'related', label: 'Lymphoma' },
  ],
  tags: { systems: ['hematologic'], topics: ['oncology', 'hematology'], keywords: ['leukemia', 'ALL', 'AML', 'CLL', 'CML', 'bone marrow', 'CAR-T'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'hematology'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default leukemia;
