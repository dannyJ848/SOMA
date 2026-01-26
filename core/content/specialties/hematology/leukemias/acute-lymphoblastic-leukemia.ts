/**
 * Acute Lymphoblastic Leukemia (ALL) - Comprehensive Educational Content
 *
 * A malignant clonal disease characterized by the accumulation of lymphoblasts
 * in the bone marrow and blood.
 */

import { EducationalContent } from '../../../types';

export const acuteLymphoblasticLeukemia: EducationalContent = {
  id: 'condition-acute-lymphoblastic-leukemia',
  type: 'condition',
  name: 'Acute Lymphoblastic Leukemia',
  alternateNames: ['ALL', 'Acute lymphocytic leukemia', 'Precursor lymphoid neoplasm'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute lymphoblastic leukemia is a type of blood cancer where the bone marrow makes too many immature white blood cells.',
      explanation: `Acute lymphoblastic leukemia (ALL) is a cancer that starts in the bone marrow, where blood cells are made.

**What Happens:**
- The bone marrow starts making too many white blood cells that never grow up properly
- These immature cells are called "blasts"
- They crowd out the healthy blood cells

**Why It's a Problem:**
- Not enough red blood cells (feeling tired, looking pale)
- Not enough platelets (easy bruising and bleeding)
- Not enough healthy white blood cells (getting sick often)

**Who Gets It:**
- Most common cancer in children
- Can also happen in adults
- Treatment works very well, especially in children

**How It's Treated:**
- Chemotherapy (strong medicines that kill cancer cells)
- Sometimes radiation therapy
- Sometimes bone marrow transplant`,
      keyTerms: [
        { term: 'leukemia', definition: 'A cancer of the blood and bone marrow', pronunciation: 'loo-KEE-mee-ah' },
        { term: 'bone marrow', definition: 'The soft tissue inside bones where blood cells are made' },
        { term: 'blasts', definition: 'Very young blood cells that have not finished growing' },
        { term: 'chemotherapy', definition: 'Strong medicines used to kill cancer cells', pronunciation: 'kee-moh-THAIR-ah-pee' },
      ],
      analogies: [
        'Think of bone marrow like a factory that makes different workers (blood cells). In ALL, the factory keeps making workers who never finish their training and cannot do their jobs.',
      ],
      examples: [
        'A child who suddenly starts bruising easily, feeling very tired, and getting frequent fevers might have ALL.',
      ],
    },
    2: {
      level: 2,
      summary: 'ALL is a rapidly progressing cancer of lymphoid progenitor cells that accumulate in the bone marrow and suppress normal hematopoiesis.',
      explanation: `Acute lymphoblastic leukemia is a hematologic malignancy characterized by uncontrolled proliferation of immature lymphoid cells (lymphoblasts).

**Pathophysiology:**
- Malignant transformation of lymphoid progenitor cells
- Clonal expansion in bone marrow
- Suppression of normal hematopoiesis
- Potential spread to CNS, lymph nodes, and other organs

**Classification:**
- B-cell ALL (85% of cases)
- T-cell ALL (15% of cases)
- Based on immunophenotype and cytogenetics

**Clinical Presentation:**
- Bone marrow failure symptoms: anemia, thrombocytopenia, neutropenia
- Bone pain (marrow expansion)
- Lymphadenopathy and hepatosplenomegaly
- CNS involvement (headache, cranial nerve palsies)
- Mediastinal mass (T-cell ALL)

**Diagnosis:**
- Complete blood count showing blasts
- Bone marrow biopsy (>20% blasts)
- Flow cytometry for immunophenotyping
- Cytogenetics and molecular studies

**Prognosis:**
- Pediatric ALL: >90% cure rate
- Adult ALL: 40-50% cure rate
- Varies by genetic subtype`,
      keyTerms: [
        { term: 'lymphoblasts', definition: 'Immature lymphoid cells; the malignant cells in ALL', pronunciation: 'LIM-foh-blasts' },
        { term: 'hematopoiesis', definition: 'The process of blood cell production in bone marrow', pronunciation: 'hee-mat-oh-poy-EE-sis' },
        { term: 'immunophenotype', definition: 'Classification of cells based on their surface markers' },
        { term: 'cytogenetics', definition: 'Study of chromosomes in cells to identify abnormalities' },
      ],
      analogies: [
        'ALL is like a factory where one machine goes haywire and keeps producing defective parts that pile up and stop all the other machines from working.',
      ],
    },
    3: {
      level: 3,
      summary: 'ALL results from genetic alterations in lymphoid progenitors leading to blocked differentiation and enhanced proliferation, with treatment stratified by immunophenotype, cytogenetics, and response to therapy.',
      explanation: `## Overview

Acute lymphoblastic leukemia represents a heterogeneous group of neoplasms arising from lymphoid precursors with varied biology and clinical outcomes.

## Epidemiology
- Bimodal age distribution: peak at 2-5 years, second peak >50 years
- Most common pediatric malignancy (25% of childhood cancers)
- Annual incidence: 1.5/100,000

## Classification

**WHO Classification:**
- B-lymphoblastic leukemia/lymphoma, NOS
- B-lymphoblastic leukemia/lymphoma with recurrent genetic abnormalities
- T-lymphoblastic leukemia/lymphoma

**Key Cytogenetic Subtypes:**
| Subtype | Frequency | Prognosis |
|---------|-----------|-----------|
| t(12;21) ETV6-RUNX1 | 25% pediatric | Favorable |
| Hyperdiploidy (>50) | 25% pediatric | Favorable |
| t(9;22) BCR-ABL1 | 3% pediatric, 25% adult | Unfavorable* |
| KMT2A rearrangements | 5-10% | Unfavorable |
| Hypodiploidy | 1-2% | Unfavorable |

*Improved with TKI therapy

## Diagnosis

**Laboratory Findings:**
- WBC: Variable (low, normal, or markedly elevated)
- Anemia and thrombocytopenia
- Peripheral smear: lymphoblasts (may be absent)
- LDH and uric acid elevated

**Bone Marrow:**
- ≥20% lymphoblasts (often >90%)
- Morphology: L1, L2, L3 (FAB classification - historical)

**Immunophenotype:**
- B-ALL: CD19+, CD10+ (common), CD22+, TdT+
- T-ALL: CD2+, CD3+, CD5+, CD7+, TdT+

## Treatment Phases

1. **Induction** (4-6 weeks)
   - Goal: Complete remission (<5% blasts)
   - Vincristine, prednisone, asparaginase, anthracycline

2. **Consolidation/Intensification**
   - Goal: Eliminate residual disease
   - High-dose methotrexate, cytarabine

3. **CNS Prophylaxis**
   - Intrathecal methotrexate/cytarabine
   - Sometimes cranial radiation

4. **Maintenance** (2-3 years)
   - Goal: Prevent relapse
   - 6-mercaptopurine, methotrexate

## Risk Stratification

**Favorable:**
- Age 1-9 years
- WBC <50,000
- Favorable cytogenetics
- Rapid early response

**Unfavorable:**
- Age <1 or >10 years (pediatric), >35 (adult)
- WBC >50,000
- T-cell phenotype
- CNS involvement
- Unfavorable cytogenetics`,
      keyTerms: [
        { term: 'TdT', definition: 'Terminal deoxynucleotidyl transferase; marker of immature lymphoid cells' },
        { term: 'minimal residual disease', definition: 'Small numbers of leukemia cells remaining after treatment, detected by sensitive methods' },
        { term: 'BCR-ABL1', definition: 'Philadelphia chromosome fusion gene; defines Ph+ ALL' },
        { term: 'intrathecal', definition: 'Administration of drugs into the cerebrospinal fluid space' },
      ],
      clinicalNotes: 'The presence of minimal residual disease (MRD) after induction is one of the strongest prognostic factors. MRD-negative status correlates with excellent outcomes.',
    },
    4: {
      level: 4,
      summary: 'ALL management requires integration of genomic classification, MRD-directed therapy, and novel targeted agents including TKIs, bispecific antibodies, and CAR-T cells.',
      explanation: `## Molecular Pathogenesis

**Driver Mutations:**
- Transcription factor alterations (PAX5, IKZF1, EBF1)
- Signaling pathway mutations (RAS, JAK-STAT)
- Epigenetic regulators (CREBBP, SETD2)
- Cell cycle genes (CDKN2A/B deletions)

**Key Genetic Subtypes:**

*B-ALL:*
- Ph-like ALL: JAK-STAT or ABL-class fusions without BCR-ABL1
- DUX4-rearranged: Favorable prognosis
- PAX5alt: Diverse PAX5 alterations
- MEF2D-rearranged: Distinct phenotype

*T-ALL:*
- Early T-cell precursor (ETP): Stem cell-like, historically poor prognosis
- NOTCH1/FBXW7 mutations (favorable)
- TLX1, TLX3, TAL1 rearrangements

## Minimal Residual Disease

**Detection Methods:**
- Flow cytometry (sensitivity 10^-4)
- PCR for fusion transcripts (10^-5)
- Next-generation sequencing (10^-6)

**Clinical Application:**
- End of induction MRD predicts outcome
- MRD-directed therapy intensification
- Guides transplant decisions

## Novel Therapeutics

**Tyrosine Kinase Inhibitors:**
- Imatinib, dasatinib for Ph+ ALL
- Ruxolitinib for JAK-activated Ph-like ALL
- Dramatically improved Ph+ ALL outcomes

**Immunotherapy:**
- Blinatumomab: BiTE antibody (CD19-CD3)
- Inotuzumab ozogamicin: Anti-CD22 ADC
- CAR-T cells (tisagenlecleucel, brexucabtagene)

**Indications:**
- Relapsed/refractory disease
- MRD-positive after chemotherapy
- Bridge to transplant

## Transplantation

**Indications for Allo-HCT:**
- High-risk first remission
- All adult patients in CR1 (controversial)
- Relapsed disease in CR2
- MRD persistence

**Conditioning:**
- Myeloablative for younger patients
- Reduced intensity for older/comorbid

## Complications

**Treatment-Related:**
- Tumor lysis syndrome
- Infection (neutropenic fever)
- Asparaginase: pancreatitis, thrombosis
- Vincristine: neuropathy
- Steroids: avascular necrosis, hyperglycemia

**Long-Term:**
- Secondary malignancies
- Cardiotoxicity (anthracyclines)
- Neurocognitive effects (CNS therapy)
- Growth/endocrine dysfunction`,
      keyTerms: [
        { term: 'Ph-like ALL', definition: 'ALL with gene expression profile similar to Ph+ ALL but lacking BCR-ABL1; often has targetable kinase alterations' },
        { term: 'CAR-T cells', definition: 'Chimeric antigen receptor T cells; genetically modified patient T cells that target leukemia' },
        { term: 'blinatumomab', definition: 'Bispecific T-cell engager (BiTE) antibody that links CD3 on T cells to CD19 on B cells' },
        { term: 'ETP-ALL', definition: 'Early T-cell precursor ALL; immature phenotype with stem cell features' },
      ],
      clinicalNotes: 'Ph-like ALL represents a high-risk subtype that may benefit from TKI therapy if a targetable kinase fusion is identified. RNA sequencing should be considered for risk stratification.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ALL treatment integrates precision genomics, MRD-guided therapy, and novel immunotherapies within risk-adapted frameworks to optimize cure rates while minimizing toxicity.',
      explanation: `## Precision Medicine in ALL

**Comprehensive Genomic Profiling:**
- Karyotype
- FISH panel (BCR-ABL1, KMT2A, ETV6-RUNX1)
- RNA sequencing for fusions
- Targeted NGS panels
- SNP array for copy number

**Actionable Alterations:**

| Alteration | Frequency | Targeted Agent |
|------------|-----------|----------------|
| BCR-ABL1 | 3-25% | TKI (dasatinib preferred) |
| ABL-class fusions | 3-5% | TKI |
| JAK mutations/fusions | 5-10% | JAK inhibitors |
| CRLF2 rearrangements | 5-15% | JAK inhibitors |
| FLT3 | Rare | FLT3 inhibitors |

## MRD-Directed Therapy

**Timing of Assessment:**
- End of induction (day 29)
- End of consolidation
- During maintenance

**Response Criteria:**
- MRD negative: <10^-4 (flow), <10^-5 (molecular)
- MRD positive: Intensify therapy, consider immunotherapy/transplant

**Impact on Outcomes:**
- MRD negative CR1: >90% EFS (pediatric)
- MRD positive CR1: 30-50% EFS without intervention

## Immunotherapy Integration

**Blinatumomab:**
- Mechanism: CD19-CD3 BiTE
- Continuous IV infusion (28-day cycles)
- Response rate 40-50% in R/R disease
- Incorporated into frontline protocols (E1910)

**Inotuzumab Ozogamicin:**
- Mechanism: Anti-CD22 antibody-drug conjugate
- Response rate 80% in R/R disease
- Risk: VOD/SOS (hepatotoxicity)
- Duration of response limited

**CAR-T Cell Therapy:**
- Tisagenlecleucel (pediatric/young adult B-ALL)
- Brexucabtagene autoleucel (adult R/R B-ALL)
- Complete response 70-90%
- Toxicities: CRS, ICANS
- Durability variable; relapse via CD19 loss

## Special Populations

**Adolescent and Young Adult (AYA):**
- Better outcomes with pediatric-inspired regimens
- Asparaginase-intensive protocols
- COG-style therapy through age 39

**Older Adults:**
- Reduced-intensity chemotherapy
- Consider blinatumomab-based induction
- Inotuzumab combinations
- Mini-allo transplant if fit

**Ph+ ALL:**
- TKI + chemotherapy (or TKI + steroids + blinatumomab)
- MRD assessment guides transplant
- Ponatinib for T315I mutations

**CNS Disease:**
- Triple intrathecal therapy
- Systemic high-dose methotrexate
- CAR-T cells have CNS penetration

## Relapsed/Refractory Management

**Salvage Options:**
1. Blinatumomab
2. Inotuzumab ozogamicin
3. CAR-T cell therapy
4. Reinduction chemotherapy
5. Nelarabine (T-ALL)

**Post-Remission:**
- Allogeneic HCT if candidate
- MRD negativity goal before transplant
- CAR-T as bridge or definitive therapy

## Emerging Directions

**Novel Targets:**
- CD22 CAR-T (post-CD19 escape)
- Dual CD19/CD22 CAR-T
- CD38 targeting
- BAFF-R

**New Agents:**
- Ponatinib combinations
- Venetoclax (BCL2 inhibitor)
- Menin inhibitors (KMT2A-r)

**Treatment Optimization:**
- MRD-adapted de-escalation
- Chemotherapy-free regimens
- Late effects reduction strategies`,
      keyTerms: [
        { term: 'CRS', definition: 'Cytokine release syndrome; systemic inflammatory response to CAR-T cell activation' },
        { term: 'ICANS', definition: 'Immune effector cell-associated neurotoxicity syndrome; neurologic toxicity of CAR-T therapy' },
        { term: 'VOD/SOS', definition: 'Veno-occlusive disease/sinusoidal obstruction syndrome; hepatic toxicity, particularly with inotuzumab' },
        { term: 'BiTE', definition: 'Bispecific T-cell engager; antibody format linking T cells to tumor cells' },
      ],
      clinicalNotes: `**Board Pearls:**
- TdT+ with CD10+ (CALLA) = most common B-ALL phenotype
- t(12;21) ETV6-RUNX1 = most favorable pediatric cytogenetics
- t(9;22) BCR-ABL1 prognosis dramatically improved with TKI + chemotherapy
- CAR-T achieves high response rates but CD19-negative relapse is emerging challenge
- E1910 showed survival benefit for blinatumomab in MRD+ adult B-ALL`,
    },
  },

  media: [
    {
      id: 'all-peripheral-smear',
      type: 'histology',
      filename: 'all-lymphoblasts-smear.jpg',
      title: 'Peripheral Blood Smear in ALL',
      description: 'Lymphoblasts with high nuclear-to-cytoplasmic ratio and fine chromatin',
    },
    {
      id: 'all-bone-marrow',
      type: 'histology',
      filename: 'all-bone-marrow-biopsy.jpg',
      title: 'Bone Marrow Biopsy in ALL',
      description: 'Hypercellular marrow packed with lymphoblasts',
    },
  ],

  citations: [
    {
      id: 'pui-2019',
      type: 'article',
      title: 'Acute lymphoblastic leukemia',
      authors: ['Pui CH', 'Evans WE'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1406028',
    },
    {
      id: 'hunger-mullighan-2015',
      type: 'article',
      title: 'Acute Lymphoblastic Leukemia in Children',
      authors: ['Hunger SP', 'Mullighan CG'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1400972',
    },
  ],

  crossReferences: [
    { targetId: 'condition-acute-myeloid-leukemia', targetType: 'condition', relationship: 'related', label: 'Acute Myeloid Leukemia' },
    { targetId: 'condition-chronic-lymphocytic-leukemia', targetType: 'condition', relationship: 'related', label: 'Chronic Lymphocytic Leukemia' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
  ],

  tags: {
    systems: ['hematologic', 'lymphatic'],
    topics: ['leukemia', 'oncology', 'pediatric oncology', 'hematologic malignancy'],
    keywords: ['lymphoblasts', 'ALL', 'CAR-T', 'chemotherapy', 'immunotherapy'],
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

export default acuteLymphoblasticLeukemia;
