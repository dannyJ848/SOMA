/**
 * Acute Myeloid Leukemia (AML) - Comprehensive Educational Content
 *
 * A heterogeneous clonal disorder of hematopoietic progenitor cells characterized
 * by immature myeloid cell proliferation and bone marrow failure.
 */

import { EducationalContent } from '../../../types';

export const acuteMyeloidLeukemia: EducationalContent = {
  id: 'condition-acute-myeloid-leukemia',
  type: 'condition',
  name: 'Acute Myeloid Leukemia',
  alternateNames: ['AML', 'Acute myelogenous leukemia', 'Acute nonlymphocytic leukemia'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute myeloid leukemia is a fast-growing cancer of the blood and bone marrow that affects the cells that would normally become white blood cells.',
      explanation: `Acute myeloid leukemia (AML) is a type of cancer that starts in the bone marrow.

**What Happens:**
- The bone marrow makes too many abnormal white blood cells
- These cells are called "blasts" and they do not work properly
- The blasts crowd out healthy blood cells

**Common Signs:**
- Feeling very tired (from low red blood cells)
- Getting infections easily (from abnormal white blood cells)
- Bruising or bleeding easily (from low platelets)
- Fevers and night sweats

**Who Gets It:**
- More common in adults, especially older people
- Can happen at any age

**Treatment:**
- Strong chemotherapy
- Sometimes bone marrow transplant
- Treatment has improved a lot over the years`,
      keyTerms: [
        { term: 'leukemia', definition: 'Cancer of the blood and bone marrow', pronunciation: 'loo-KEE-mee-ah' },
        { term: 'blasts', definition: 'Immature blood cells that have not developed properly' },
        { term: 'bone marrow', definition: 'The spongy tissue inside bones where blood cells are made' },
      ],
      analogies: [
        'Imagine a factory (bone marrow) that is supposed to make trained workers (blood cells). In AML, the factory keeps producing unfinished trainees who cannot do any useful work and take up all the space.',
      ],
      examples: [
        'An older adult who develops sudden fatigue, bruising, and recurrent infections over a few weeks might have AML.',
      ],
    },
    2: {
      level: 2,
      summary: 'AML is a clonal hematopoietic malignancy characterized by proliferation of myeloid blasts in the bone marrow, leading to bone marrow failure.',
      explanation: `Acute myeloid leukemia is a cancer arising from myeloid progenitor cells that replicate rapidly and fail to mature.

**Pathophysiology:**
- Genetic mutations in myeloid stem/progenitor cells
- Blocked differentiation with continued proliferation
- Accumulation of blasts (>20% in marrow)
- Suppression of normal hematopoiesis

**Classification:**
- WHO classification based on genetics and morphology
- FAB classification (M0-M7) - historical
- Genetics now drive classification and treatment

**Clinical Features:**
- Bone marrow failure: anemia, neutropenia, thrombocytopenia
- Leukocytosis or leukopenia
- DIC (especially APL - M3)
- Gum hypertrophy, skin infiltration (monocytic subtypes)
- CNS involvement possible

**Diagnosis:**
- CBC with differential
- Peripheral blood smear (blasts, Auer rods)
- Bone marrow biopsy (>20% blasts)
- Flow cytometry
- Cytogenetics and molecular studies

**Treatment:**
- Induction: 7+3 (cytarabine + anthracycline)
- Consolidation: High-dose cytarabine or transplant
- Targeted therapy for specific mutations`,
      keyTerms: [
        { term: 'myeloid', definition: 'Relating to granulocytes, monocytes, and their precursors', pronunciation: 'MY-eh-loyd' },
        { term: 'Auer rods', definition: 'Rod-shaped inclusions in leukemic blasts; pathognomonic for AML' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation; abnormal blood clotting' },
        { term: 'APL', definition: 'Acute promyelocytic leukemia; a subtype of AML with t(15;17)' },
      ],
      analogies: [
        'AML is like a computer program with a bug that causes cells to keep copying themselves without ever finishing their development.',
      ],
    },
    3: {
      level: 3,
      summary: 'AML encompasses diverse genetic subtypes with distinct biology and outcomes, requiring integrated molecular profiling for accurate classification, prognosis, and treatment selection.',
      explanation: `## Overview

AML represents a heterogeneous group of myeloid neoplasms with varied genetic drivers, clinical behavior, and treatment responses.

## Epidemiology
- Median age at diagnosis: 68 years
- Incidence increases with age
- Annual incidence: 4/100,000

## WHO Classification (2022)

**AML with Defining Genetic Abnormalities:**
- AML with t(8;21)(q22;q22.1); RUNX1-RUNX1T1
- AML with inv(16)(p13.1q22); CBFB-MYH11
- APL with t(15;17)(q24.1;q21.2); PML-RARA
- AML with t(9;11)(p21.3;q23.3); MLLT3-KMT2A
- AML with mutated NPM1
- AML with mutated CEBPA (biallelic)

**AML with Myelodysplasia-Related Changes**

**Therapy-Related AML**

**AML, NOS (by differentiation)**

## Key Mutations

| Mutation | Frequency | Prognosis | Targeted Therapy |
|----------|-----------|-----------|------------------|
| FLT3-ITD | 25-30% | Adverse | Midostaurin, gilteritinib |
| NPM1 | 25-30% | Favorable | - |
| CEBPA (bi) | 5-10% | Favorable | - |
| IDH1/2 | 15-20% | Intermediate | Ivosidenib, enasidenib |
| t(8;21) | 8-10% | Favorable | - |
| inv(16) | 5-8% | Favorable | - |
| t(15;17) APL | 10-15% | Favorable | ATRA + ATO |
| TP53 | 5-10% | Very adverse | - |
| Complex karyotype | 10-15% | Adverse | - |

## Diagnosis

**Laboratory Findings:**
- WBC: Variable (20% present with WBC >100,000)
- Anemia and thrombocytopenia common
- DIC (especially APL)
- Elevated LDH, uric acid

**Morphology:**
- Blasts with cytoplasmic granules
- Auer rods (pathognomonic)
- Myeloperoxidase positive

**Immunophenotype:**
- CD13+, CD33+, CD117+
- MPO+
- Variable CD34

## Treatment

**Intensive Chemotherapy (Fit Patients):**

*Induction:*
- 7+3: Cytarabine 7 days + daunorubicin 3 days
- +/- Midostaurin (if FLT3 mutated)
- +/- Gemtuzumab ozogamicin (CD33+)

*Consolidation:*
- High-dose cytarabine (HiDAC)
- Or allogeneic HCT (intermediate/adverse risk)

**Lower-Intensity Options (Unfit):**
- Venetoclax + azacitidine
- Azacitidine alone
- Low-dose cytarabine

**APL Treatment:**
- ATRA + arsenic trioxide (ATO)
- Chemotherapy-free regimen
- Cure rate >90%

## Prognosis

**ELN 2022 Risk Stratification:**
- Favorable: t(8;21), inv(16), NPM1 mutated without FLT3-ITD
- Intermediate: NPM1/FLT3-ITD+, normal cytogenetics
- Adverse: Complex, TP53, ASXL1, FLT3-ITD high ratio`,
      keyTerms: [
        { term: 'FLT3-ITD', definition: 'Internal tandem duplication in FLT3 receptor tyrosine kinase; adverse prognostic marker in AML' },
        { term: 'NPM1', definition: 'Nucleophosmin 1 mutation; favorable prognosis when isolated' },
        { term: 'ATRA', definition: 'All-trans retinoic acid; differentiating agent for APL', pronunciation: 'AY-tra' },
        { term: '7+3', definition: 'Standard induction regimen: 7 days cytarabine + 3 days anthracycline' },
      ],
      clinicalNotes: 'APL is a medical emergency due to coagulopathy. Start ATRA immediately if APL is suspected, before confirmation.',
    },
    4: {
      level: 4,
      summary: 'AML treatment requires precise genetic characterization to guide selection among cytotoxic, targeted, and low-intensity regimens, with MRD assessment informing consolidation and transplant decisions.',
      explanation: `## Molecular Pathogenesis

**Two-Hit Model:**
- Class I mutations: Proliferative advantage (FLT3, KIT, RAS)
- Class II mutations: Impaired differentiation (NPM1, CEBPA, RUNX1)
- Both required for leukemogenesis

**Clonal Evolution:**
- Founder mutations in HSC
- Acquisition of cooperating mutations
- Relapse clones may be present at diagnosis

**Key Signaling Pathways:**
- FLT3/RAS/MAPK
- JAK/STAT
- PI3K/AKT
- Apoptosis (BCL2)

## Targeted Therapies

**FLT3 Inhibitors:**
- Midostaurin (1st line with chemo)
- Gilteritinib (R/R disease)
- Quizartinib (relapsed FLT3-ITD+)
- Crenolanib (investigational)

**IDH Inhibitors:**
- Ivosidenib (IDH1)
- Enasidenib (IDH2)
- Mechanism: Differentiation therapy
- Response rate 30-40% monotherapy

**Venetoclax (BCL2 inhibitor):**
- Combined with HMA or LDAC
- Standard for unfit patients
- CR rates 50-70%
- Median OS 14+ months (vs 5-10 HMA alone)

**Gemtuzumab Ozogamicin:**
- Anti-CD33 ADC
- Favorable/intermediate risk
- Fractionated dosing

## MRD Assessment

**Methods:**
- Multiparameter flow cytometry (10^-3 to 10^-4)
- RT-qPCR for fusion transcripts (10^-4 to 10^-5)
- NGS for mutations (10^-2 to 10^-3)

**Clinical Utility:**
- Post-induction MRD predicts relapse
- Guides transplant decisions
- Emerging: MRD-directed maintenance

## Transplantation

**Indications:**
- Intermediate risk in CR1
- Adverse risk in CR1
- Relapsed disease in CR2

**Conditioning:**
- Myeloablative (younger, fit)
- Reduced-intensity (older, comorbidities)

**Post-Transplant Maintenance:**
- FLT3 inhibitors (sorafenib, gilteritinib)
- Azacitidine (investigational)

## Special Populations

**Older Adults (>60-75 years):**
- Venetoclax + azacitidine standard
- Intensive chemo if very fit
- Consider frailty assessment (GA)

**Secondary/Therapy-Related AML:**
- CPX-351 (liposomal daunorubicin-cytarabine)
- Higher response rates than 7+3
- Survival benefit

**APL:**
- ATRA + ATO curative in most
- Differentiation syndrome management
- Coagulopathy support`,
      keyTerms: [
        { term: 'venetoclax', definition: 'BCL2 inhibitor that restores apoptosis in AML; backbone of low-intensity therapy' },
        { term: 'differentiation syndrome', definition: 'Life-threatening complication of differentiating agents in APL; treat with steroids' },
        { term: 'ELN', definition: 'European LeukemiaNet; provides risk stratification guidelines for AML' },
        { term: 'CPX-351', definition: 'Liposomal formulation of cytarabine and daunorubicin; approved for secondary AML' },
      ],
      clinicalNotes: 'Venetoclax + azacitidine has transformed treatment for older/unfit AML patients. However, tumor lysis syndrome prophylaxis and monitoring is essential during ramp-up.',
    },
    5: {
      level: 5,
      summary: 'Contemporary AML management integrates comprehensive genomic profiling, risk-adapted therapy selection, targeted agents, and MRD-guided decisions within evolving treatment paradigms.',
      explanation: `## Genomic Classification

**Comprehensive Profiling:**
- Karyotype (mandatory)
- NGS panel (FLT3, NPM1, CEBPA, IDH1/2, TP53, RUNX1, ASXL1)
- RNA-seq for fusions (KMT2A partners, NUP98)
- Flow cytometry (CD33 for GO eligibility)

**ELN 2022 Categories:**

*Favorable:*
- t(8;21), inv(16)
- NPM1 mutated without FLT3-ITD
- bZIP CEBPA mutations

*Intermediate:*
- NPM1 with FLT3-ITD
- Normal karyotype, wildtype
- t(9;11)

*Adverse:*
- Complex (≥3 abnormalities)
- Monosomal karyotype
- TP53, ASXL1, RUNX1 mutations
- FLT3-ITD without NPM1
- KMT2A rearrangements (except t(9;11))
- del(5q), -5, -7

## Treatment Selection Algorithm

**Intensive Candidates:**
1. Induction: 7+3 +/- GO +/- midostaurin (FLT3+)
2. If CR: Risk stratify
   - Favorable: HiDAC consolidation
   - Intermediate/Adverse: Allo-HCT
3. MRD guides intensity modifications

**Non-Intensive Candidates:**
1. Venetoclax + azacitidine (preferred)
2. Alternative: HMA alone, LDAC + venetoclax
3. IDH inhibitor options (single agent or combinations)
4. Clinical trials

## MRD-Directed Management

**Assessment Timepoints:**
- Post-induction
- Post-consolidation
- Pre/post-transplant

**Response Definitions:**
- MRD negative: Below detection threshold
- MRD positive: Detectable disease

**Clinical Decisions:**
- MRD+ favorable risk → Consider HCT
- MRD+ post-HCT → Intervention (DLI, targeted therapy)
- MRD- adverse risk → May still benefit from HCT

## Novel Agents and Combinations

**Menin Inhibitors:**
- Revumenib, ziftomenib
- KMT2A-rearranged, NPM1-mutated
- 30-40% CR rates in R/R disease
- FDA accelerated approval (revumenib 2024)

**CD123-Targeted:**
- Tagraxofusp (CD123 ADC) - BPDCN
- Pivekimab sunirine (investigational)

**Immune Checkpoint:**
- Limited single-agent activity
- Combinations with HMA explored

**CAR-T in AML:**
- CD33, CD123, CLL-1 targets
- Challenges: Myelosuppression, antigen expression
- Early development

## Special Scenarios

**APL Detailed Management:**
- Standard risk: ATRA + ATO (chemotherapy-free)
- High risk (WBC >10K): Add idarubicin or GO
- Differentiation syndrome: Dexamethasone 10mg BID
- Coagulopathy: Maintain fibrinogen >150, platelets >30-50K

**Relapsed AML:**
1. Fit patients:
   - Intensive salvage (FLAG-IDA, MEC)
   - Targeted agents (gilteritinib, enasidenib)
   - HCT if response
2. Unfit patients:
   - Venetoclax-based
   - IDH inhibitors
   - Best supportive care

**Post-HCT Relapse:**
- DLI for molecular/MRD relapse
- Salvage chemotherapy
- Targeted agents as maintenance
- Second HCT (selected patients)

## Emerging Standards

**Triplet Combinations:**
- Venetoclax + azacitidine + GO
- Venetoclax + azacitidine + FLT3i

**Measurable Residual Disease Trials:**
- MRD-directed therapy de-escalation
- MRD-triggered intervention

**Maintenance Therapy:**
- Oral azacitidine (QUAZAR)
- FLT3 inhibitors post-HCT`,
      keyTerms: [
        { term: 'menin inhibitor', definition: 'Drug targeting menin-KMT2A interaction; active in KMT2A-rearranged and NPM1-mutated AML' },
        { term: 'monosomal karyotype', definition: 'Two or more autosomal monosomies or one monosomy with structural abnormality; very adverse prognosis' },
        { term: 'DLI', definition: 'Donor lymphocyte infusion; immunotherapy for post-transplant relapse' },
        { term: 'QUAZAR', definition: 'Trial establishing oral azacitidine maintenance post-induction in older AML' },
      ],
      clinicalNotes: `**Board Pearls:**
- Auer rods = pathognomonic for AML (especially APL - faggot cells with multiple Auer rods)
- APL coagulopathy: DIC + fibrinolysis; start ATRA immediately if suspected
- NPM1 mutation alone = favorable; with FLT3-ITD = intermediate
- TP53 mutation = very poor prognosis, poor response to all therapies
- Venetoclax + azacitidine changed landscape for unfit AML
- Tumor lysis risk highest with hyperleukocytosis (WBC >100K); consider leukapheresis`,
    },
  },

  media: [
    {
      id: 'aml-auer-rods',
      type: 'histology',
      filename: 'aml-auer-rods.jpg',
      title: 'Auer Rods in AML',
      description: 'Peripheral blood smear showing myeloblasts with Auer rods',
    },
    {
      id: 'aml-flow-cytometry',
      type: 'diagram',
      filename: 'aml-flow-cytometry.svg',
      title: 'AML Immunophenotype by Flow Cytometry',
      description: 'Typical markers for AML blast identification',
    },
  ],

  citations: [
    {
      id: 'dohner-2022',
      type: 'article',
      title: 'Diagnosis and Management of AML in Adults: 2022 Recommendations from ELN',
      authors: ['Dohner H', 'Wei AH', 'Appelbaum FR', 'et al'],
      source: 'Blood',
      url: 'https://doi.org/10.1182/blood.2022016867',
    },
    {
      id: 'dinardo-2020',
      type: 'article',
      title: 'Venetoclax combined with azacitidine for AML',
      authors: ['DiNardo CD', 'Jonas BA', 'Pullarkat V', 'et al'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2012971',
    },
  ],

  crossReferences: [
    { targetId: 'condition-acute-lymphoblastic-leukemia', targetType: 'condition', relationship: 'related', label: 'Acute Lymphoblastic Leukemia' },
    { targetId: 'condition-myelodysplastic-syndrome', targetType: 'condition', relationship: 'related', label: 'Myelodysplastic Syndrome' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['leukemia', 'oncology', 'hematologic malignancy'],
    keywords: ['AML', 'myeloid', 'Auer rods', 'FLT3', 'venetoclax', 'APL'],
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

export default acuteMyeloidLeukemia;
