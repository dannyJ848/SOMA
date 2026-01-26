/**
 * Chronic Myeloid Leukemia (CML) - Comprehensive Educational Content
 *
 * A myeloproliferative neoplasm defined by the Philadelphia chromosome
 * t(9;22) and BCR-ABL1 fusion.
 */

import { EducationalContent } from '../../../types';

export const chronicMyeloidLeukemia: EducationalContent = {
  id: 'condition-chronic-myeloid-leukemia',
  type: 'condition',
  name: 'Chronic Myeloid Leukemia',
  alternateNames: ['CML', 'Chronic myelogenous leukemia', 'Chronic granulocytic leukemia'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic myeloid leukemia is a type of blood cancer where the bone marrow makes too many white blood cells, caused by a specific gene problem.',
      explanation: `Chronic myeloid leukemia (CML) is a cancer that starts in the bone marrow.

**What Happens:**
- A specific change in the genes (called the Philadelphia chromosome) makes blood cells grow out of control
- The bone marrow makes too many white blood cells
- These cells work somewhat normally at first but can become dangerous over time

**Common Signs:**
- Feeling tired
- Enlarged spleen (fullness in the belly)
- Night sweats
- Weight loss
- Sometimes no symptoms at all

**Treatment:**
- Special pills called tyrosine kinase inhibitors (TKIs)
- These pills block the gene that causes the cancer
- Most people take one pill a day
- Treatment works very well for most people`,
      keyTerms: [
        { term: 'Philadelphia chromosome', definition: 'An abnormal chromosome that causes CML', pronunciation: 'fil-ah-DEL-fee-ah' },
        { term: 'spleen', definition: 'An organ in the upper left belly that filters blood' },
        { term: 'tyrosine kinase inhibitor', definition: 'A medicine that blocks the signal telling cancer cells to grow', pronunciation: 'TY-roh-seen KY-nays' },
      ],
      analogies: [
        'Think of CML like a car with a stuck accelerator. The Philadelphia chromosome keeps telling cells to make more cells, like a gas pedal stuck to the floor. TKI medicines release that stuck pedal.',
      ],
      examples: [
        'A 50-year-old notices he feels full after eating just a little food. His doctor finds his spleen is enlarged and blood tests show very high white blood cells, leading to a CML diagnosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'CML is a myeloproliferative neoplasm defined by the BCR-ABL1 fusion gene from t(9;22), treated with tyrosine kinase inhibitors that target the oncogenic protein.',
      explanation: `CML is one of the first cancers where a specific genetic cause was identified and successfully targeted with therapy.

**Pathophysiology:**
- Translocation t(9;22) creates Philadelphia chromosome
- BCR-ABL1 fusion gene encodes constitutively active tyrosine kinase
- Drives proliferation and inhibits apoptosis
- Affects myeloid lineage predominantly

**Disease Phases:**
1. **Chronic phase (CP)**: Stable, responsive to therapy
2. **Accelerated phase (AP)**: Increasing blasts (10-19%)
3. **Blast crisis (BC)**: >20% blasts, behaves like acute leukemia

**Clinical Features:**
- Often asymptomatic (found on routine labs)
- Splenomegaly (most common finding)
- Fatigue, night sweats, weight loss
- Leukocytosis with left shift (all stages of myeloid maturation)

**Diagnosis:**
- CBC: Elevated WBC with basophilia, eosinophilia
- Peripheral smear: All stages of myeloid cells
- Bone marrow: Hypercellular, increased M:E ratio
- Cytogenetics: t(9;22) Philadelphia chromosome
- Molecular: BCR-ABL1 by PCR

**Treatment:**
- Tyrosine kinase inhibitors (TKIs) are standard
- Imatinib, dasatinib, nilotinib, bosutinib, ponatinib
- Response monitored by BCR-ABL1 transcript levels
- Allogeneic transplant reserved for TKI failure`,
      keyTerms: [
        { term: 'BCR-ABL1', definition: 'Fusion gene creating a constitutively active tyrosine kinase that drives CML', pronunciation: 'B-C-R A-B-L one' },
        { term: 'myeloproliferative neoplasm', definition: 'Cancers where the bone marrow makes too many blood cells' },
        { term: 'blast crisis', definition: 'Advanced CML phase with >20% blasts; behaves like acute leukemia' },
        { term: 'left shift', definition: 'Presence of immature white blood cells in the blood' },
      ],
      analogies: [
        'BCR-ABL1 is like a light switch stuck in the ON position. TKIs are like finally being able to flip that switch off.',
      ],
    },
    3: {
      level: 3,
      summary: 'CML management centers on TKI therapy with molecular response monitoring, aiming for deep molecular response that may permit treatment discontinuation.',
      explanation: `## Overview

CML represents a triumph of targeted therapy, transforming a once-fatal disease into a chronic manageable condition.

## Epidemiology
- Incidence: 1-2/100,000
- Median age: 65 years
- Slight male predominance

## Pathogenesis

**Philadelphia Chromosome:**
- t(9;22)(q34;q11.2)
- ABL1 (9q34) fuses with BCR (22q11)
- Creates constitutively active tyrosine kinase
- Found in >95% of CML

**Molecular Variants:**
| Fusion | Protein Size | Association |
|--------|--------------|-------------|
| e13a2/e14a2 | p210 | Classic CML |
| e1a2 | p190 | Ph+ ALL |
| e19a2 | p230 | CML (neutrophilic) |

## Diagnosis

**Laboratory:**
- WBC often >25,000, can exceed 500,000
- Basophilia (characteristic)
- Thrombocytosis common
- Low LAP (leukocyte alkaline phosphatase) score

**Peripheral Smear:**
- Full spectrum of myeloid maturation
- "Leukoerythroblastic" picture
- Basophils, eosinophils increased

**Bone Marrow:**
- Hypercellular (often 100%)
- M:E ratio 10-30:1
- Pseudo-Gaucher cells
- Sea-blue histiocytes

**Cytogenetics/Molecular:**
- Karyotype: t(9;22)
- FISH: BCR-ABL1 fusion
- RT-qPCR: BCR-ABL1 transcript level (quantitative)

## Response Milestones

| Timepoint | Response | Definition |
|-----------|----------|------------|
| 3 months | Early molecular | BCR-ABL1 ≤10% (IS) |
| 6 months | Optimal | BCR-ABL1 ≤1% |
| 12 months | Major molecular (MMR) | BCR-ABL1 ≤0.1% |
| Any time | Deep molecular (DMR) | BCR-ABL1 ≤0.01% (MR4) |

## Treatment

**First-Line TKIs:**
- Imatinib 400mg daily
- Dasatinib 100mg daily
- Nilotinib 300mg BID
- Bosutinib 400mg daily

**TKI Selection:**
- Imatinib: Oldest, safest, generic available
- Dasatinib/Nilotinib: Faster/deeper responses
- Consider comorbidities (cardiovascular, pulmonary)

**Monitoring:**
- qPCR every 3 months
- Cytogenetics at 3, 6 months if not in response
- Mutation analysis if suboptimal response

**Treatment Failure:**
- Change TKI (consider mutation profile)
- T315I mutation: Requires ponatinib or asciminib
- Allogeneic HCT for refractory disease or blast crisis

## Disease Transformation

**Accelerated Phase Criteria:**
- 10-19% blasts (blood or marrow)
- ≥20% basophils
- Persistent thrombocytopenia
- Additional cytogenetic abnormalities

**Blast Crisis:**
- ≥20% blasts
- Myeloid (60%) or lymphoid (30%)
- Lymphoid BC: Add ALL-type therapy to TKI`,
      keyTerms: [
        { term: 'BCR-ABL1 IS', definition: 'International Scale standardizing BCR-ABL1 measurement across laboratories' },
        { term: 'deep molecular response', definition: 'BCR-ABL1 ≤0.01% (MR4) or ≤0.0032% (MR4.5)' },
        { term: 'T315I mutation', definition: 'Gatekeeper mutation conferring resistance to most TKIs; requires ponatinib or asciminib' },
        { term: 'LAP score', definition: 'Leukocyte alkaline phosphatase; low in CML, high in leukemoid reaction' },
      ],
      clinicalNotes: 'Low LAP score distinguishes CML from leukemoid reactions. T315I mutation causes resistance to imatinib, dasatinib, nilotinib, and bosutinib.',
    },
    4: {
      level: 4,
      summary: 'CML treatment aims for treatment-free remission in deep molecular responders, with mutation analysis guiding TKI selection and transformation prevention being a key goal.',
      explanation: `## Molecular Response Hierarchy

**Standardized Monitoring:**
- BCR-ABL1 on International Scale (IS)
- Conversion factor applied per laboratory
- Measured from peripheral blood

**Response Levels:**
| Level | BCR-ABL1 (IS) | Log Reduction |
|-------|---------------|---------------|
| EMR | ≤10% | 1-log |
| CCyR | ~1% | 2-log |
| MMR | ≤0.1% | 3-log |
| MR4 | ≤0.01% | 4-log |
| MR4.5 | ≤0.0032% | 4.5-log |
| MR5 | ≤0.001% | 5-log |

## TKI Selection and Toxicity

**Cardiovascular Considerations:**
- Nilotinib: QTc prolongation, arterial occlusive events
- Dasatinib: Pleural effusions, pulmonary hypertension
- Ponatinib: Arterial occlusive events (dose-dependent)
- Bosutinib: Hepatotoxicity, diarrhea

**Drug Interactions:**
- CYP3A4 metabolism (most TKIs)
- Avoid strong inducers/inhibitors
- Dasatinib: H2-blockers/PPIs reduce absorption

**Specific Scenarios:**
| Comorbidity | Preferred TKI | Avoid |
|-------------|---------------|-------|
| Cardiovascular | Imatinib, dasatinib | Nilotinib, ponatinib |
| Pulmonary | Imatinib, nilotinib | Dasatinib |
| Diabetes | Imatinib, dasatinib | Nilotinib |
| Hepatic | Imatinib | Bosutinib |
| GI disease | Nilotinib | Imatinib, bosutinib |

## Resistance and Mutation Analysis

**When to Test:**
- Suboptimal response
- Loss of response
- Progression

**Common Mutations:**
| Mutation | Frequency | Sensitive TKIs |
|----------|-----------|----------------|
| T315I | 15-20% | Ponatinib, asciminib |
| F317L | 5-10% | Nilotinib, bosutinib |
| Y253H | 5% | Dasatinib, bosutinib |
| E255K/V | 5% | Dasatinib |
| Compound | Variable | Ponatinib |

**Asciminib (STAMP inhibitor):**
- Targets ABL1 myristoyl pocket
- Different binding site than ATP-competitive TKIs
- Active against T315I (except T315I + A337V)
- Approved for ≥2 prior TKIs or T315I

## Treatment-Free Remission (TFR)

**Eligibility:**
- CP-CML, typical BCR-ABL1 transcripts
- ≥3 years TKI therapy
- ≥2 years sustained DMR (MR4 or deeper)
- Frequent monitoring capability

**Outcomes:**
- 40-60% maintain MMR off therapy
- Relapse usually within 6 months
- Virtually all regain response with TKI restart

**Monitoring in TFR:**
- Monthly PCR for 6 months
- Every 2 months for 6 months
- Every 3 months thereafter
- Resume TKI if loss of MMR

## Advanced Phase Management

**Accelerated Phase:**
- TKI intensification (higher dose or different TKI)
- Consider allo-HCT if not achieving CP response
- Mutation analysis

**Blast Crisis:**
- TKI + acute leukemia chemotherapy
- Myeloid BC: 7+3 or HiDAC
- Lymphoid BC: ALL-type induction
- Allo-HCT if remission achieved`,
      keyTerms: [
        { term: 'TFR', definition: 'Treatment-free remission; sustained remission after TKI discontinuation' },
        { term: 'asciminib', definition: 'STAMP inhibitor targeting ABL1 myristoyl pocket; different mechanism than ATP-competitive TKIs' },
        { term: 'STAMP', definition: 'Specifically Targeting the ABL Myristoyl Pocket; novel mechanism of asciminib' },
        { term: 'compound mutation', definition: 'Two mutations in the same BCR-ABL1 molecule; highly resistant' },
      ],
      clinicalNotes: 'TFR attempts should only be in monitored settings with molecular testing capability. Resume TKI immediately upon MMR loss for optimal re-response.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CML management integrates precise molecular monitoring, mutation-guided TKI selection, TFR strategies, and novel agents to achieve functional cure in most patients.',
      explanation: `## Precision Medicine in CML

**Baseline Assessment:**
- BCR-ABL1 transcript type (e13a2 vs e14a2)
- Sokal, Hasford, EUTOS scores (less relevant in TKI era)
- ELTS score (CML-specific, TKI-treated)
- Additional cytogenetic abnormalities (ACA)

**ELTS Score Components:**
- Age
- Spleen size
- Platelet count
- Peripheral blood blast percentage
- Predicts probability of death from CML

## Molecular Monitoring Strategy

**ELN Recommendations:**
| Timepoint | Optimal | Warning | Failure |
|-----------|---------|---------|---------|
| 3 mo | ≤10% | >10% | >10% without cytogenetic response |
| 6 mo | ≤1% | 1-10% | >10% |
| 12 mo | ≤0.1% | 0.1-1% | >1% |
| After | ≤0.1% | 0.1-1% | Loss MMR, mutations, ACA |

**Management by Response:**
- Optimal: Continue current TKI
- Warning: Monitor closely, mutation analysis
- Failure: Change TKI based on mutations

## TKI Selection Algorithm

**First Line:**
1. If comorbidities: Imatinib (most data, best tolerated long-term)
2. If targeting rapid/deep response: 2G TKI (dasatinib, nilotinib, bosutinib)
3. If high-risk score: 2G TKI may be preferred

**Second Line (by resistance mechanism):**
- T315I: Ponatinib or asciminib
- Non-T315I mutation: Select based on sensitivity profile
- Intolerance: Switch class (consider asciminib)

**Third Line and Beyond:**
- Asciminib preferred
- Ponatinib if T315I
- Allo-HCT for refractory disease
- Clinical trials

## Treatment-Free Remission Strategy

**Optimal Candidates:**
- CP-CML, typical e13a2 or e14a2
- First-line TKI responders
- Sustained MR4 or deeper ≥2 years
- Total TKI therapy ≥5 years (some require ≥3)
- No prior treatment failure/resistance
- Patient preference and commitment to monitoring

**Predictors of TFR Success:**
- Duration of DMR before stopping
- Duration of TKI therapy
- First-line TKI (vs later line)
- Imatinib may have higher TFR rates than 2G TKI
- NK cell reconstitution

**Withdrawal Syndrome:**
- Musculoskeletal pain in 20-30%
- Usually self-limited
- Does not predict molecular relapse

## Novel Therapies

**Asciminib:**
- Allosteric STAMP inhibitor
- Approved for ≥2 prior TKIs
- Approved for T315I mutation
- Phase 3 vs bosutinib showed superiority in 2L
- Investigating first-line vs imatinib

**Combination Therapy:**
- Asciminib + TKI under investigation
- May overcome resistance better

**Immune Approaches:**
- IFN-alpha (historical, some combination use)
- Checkpoint inhibitors (investigational)
- CAR-T cells (blast crisis)

## Advanced Phase Transformation

**Prevention:**
- Optimal TKI response prevents transformation
- ACA in CP = higher transformation risk
- Mutation accumulation = warning sign

**Mechanism:**
- Additional genetic hits
- TP53, RUNX1, IKZF1 mutations common
- Myeloid or lymphoid lineage commitment

**Treatment:**
- Myeloid BC: TKI + AML-type induction, HCT
- Lymphoid BC: TKI + ALL-type therapy (POMP-type), HCT
- Very poor prognosis without HCT
- Outcomes improving with novel agents

## Long-Term Outcomes

**With TKI:**
- 10-year OS: >80%
- Most deaths not CML-related
- Near-normal life expectancy if optimal response

**Considerations:**
- Adherence critical
- Lifelong therapy (unless TFR achieved)
- Long-term toxicity monitoring
- Pregnancy: TKI teratogenic, managed discontinuation`,
      keyTerms: [
        { term: 'ELTS score', definition: 'EUTOS long-term survival score; predicts CML-specific mortality in TKI-treated patients' },
        { term: 'ACA', definition: 'Additional cytogenetic abnormalities in Ph+ cells; associated with disease progression' },
        { term: 'withdrawal syndrome', definition: 'Musculoskeletal pain after TKI discontinuation; not related to CML relapse' },
        { term: 'POMP', definition: 'Prednisone, vincristine (Oncovin), methotrexate, 6-MP; ALL-type regimen for lymphoid blast crisis' },
      ],
      clinicalNotes: `**Board Pearls:**
- Philadelphia chromosome t(9;22) defines CML
- BCR-ABL1 p210 = CML, p190 = Ph+ ALL
- Low LAP score distinguishes from leukemoid reaction
- Basophilia is characteristic of CML
- T315I = gatekeeper mutation resistant to 1st/2nd gen TKIs
- TFR achievable in 40-60% with sustained DMR
- Blast crisis: treat TKI + ALL or AML induction based on lineage
- Asciminib works via different mechanism (STAMP)`,
    },
  },

  media: [
    {
      id: 'cml-smear',
      type: 'histology',
      filename: 'cml-peripheral-smear.jpg',
      title: 'CML Peripheral Blood Smear',
      description: 'Full spectrum of myeloid maturation with basophilia',
    },
    {
      id: 'philadelphia-chromosome',
      type: 'diagram',
      filename: 'philadelphia-chromosome.svg',
      title: 'Philadelphia Chromosome',
      description: 't(9;22) translocation creating BCR-ABL1 fusion',
    },
  ],

  citations: [
    {
      id: 'hochhaus-2020',
      type: 'article',
      title: 'European LeukemiaNet 2020 recommendations for CML',
      authors: ['Hochhaus A', 'Baccarani M', 'Silver RT', 'et al'],
      source: 'Leukemia',
      url: 'https://doi.org/10.1038/s41375-020-0776-2',
    },
  ],

  crossReferences: [
    { targetId: 'condition-acute-myeloid-leukemia', targetType: 'condition', relationship: 'related', label: 'Acute Myeloid Leukemia' },
    { targetId: 'condition-essential-thrombocythemia', targetType: 'condition', relationship: 'related', label: 'Essential Thrombocythemia' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['leukemia', 'oncology', 'myeloproliferative neoplasm'],
    keywords: ['CML', 'BCR-ABL1', 'Philadelphia chromosome', 'TKI', 'imatinib'],
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

export default chronicMyeloidLeukemia;
