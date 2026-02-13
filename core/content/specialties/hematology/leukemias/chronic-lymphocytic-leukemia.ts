/**
 * Chronic Lymphocytic Leukemia (CLL) - Comprehensive Educational Content
 *
 * A mature B-cell neoplasm characterized by progressive accumulation of
 * functionally incompetent lymphocytes.
 */

import { EducationalContent } from '../../../types';

export const chronicLymphocyticLeukemia: EducationalContent = {
  id: 'condition-chronic-lymphocytic-leukemia',
  type: 'condition',
  name: 'Chronic Lymphocytic Leukemia',
  alternateNames: ['CLL', 'Small lymphocytic lymphoma', 'SLL'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic lymphocytic leukemia is a slow-growing cancer where the bone marrow makes too many white blood cells called lymphocytes.',
      explanation: `Chronic lymphocytic leukemia (CLL) is a type of blood cancer that usually grows slowly.

**What Happens:**
- The body makes too many lymphocytes (a type of white blood cell)
- These cells build up in the blood and bone marrow
- They can also collect in lymph nodes and the spleen

**Common Signs:**
- Many people have no symptoms at first
- Swollen lymph nodes (lumps in neck, armpit, or groin)
- Feeling tired
- Getting infections more easily
- Weight loss without trying

**Who Gets It:**
- Most common in older adults
- Usually diagnosed after age 60
- More common in men

**Treatment:**
- Sometimes just watching and waiting
- Pills that target the cancer cells
- Chemotherapy if needed`,
      keyTerms: [
        { term: 'lymphocytes', definition: 'A type of white blood cell that helps fight infections', pronunciation: 'LIM-foh-sites' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that filter harmful substances' },
        { term: 'chronic', definition: 'Long-lasting or slow-developing (opposite of acute)' },
      ],
      analogies: [
        'CLL is like a slowly filling bathtub - the drain (cell death) cannot keep up with the faucet (cell production), so cells gradually build up over time.',
      ],
      examples: [
        'A 70-year-old man goes to the doctor for a routine checkup and blood tests show his white blood cell count is very high, leading to a CLL diagnosis even though he feels fine.',
      ],
    },
    2: {
      level: 2,
      summary: 'CLL is an indolent B-cell malignancy characterized by accumulation of CD5+ mature B lymphocytes in the blood, bone marrow, and lymphoid organs.',
      explanation: `Chronic lymphocytic leukemia is the most common leukemia in Western adults, typically following an indolent course.

**Pathophysiology:**
- Clonal proliferation of mature B lymphocytes
- Defective apoptosis leads to accumulation
- Cells are immunologically incompetent
- Disrupted normal immune function

**Diagnosis Criteria:**
- Lymphocytosis ≥5,000/mcL B lymphocytes
- Clonal B cells with CD5+, CD19+, CD23+
- If lymphocytosis without lymphadenopathy = CLL
- If lymphadenopathy without significant lymphocytosis = SLL

**Clinical Features:**
- Often asymptomatic (found incidentally)
- Lymphadenopathy
- Hepatosplenomegaly
- B symptoms (fever, night sweats, weight loss)
- Infections (hypogammaglobulinemia)

**Complications:**
- Autoimmune hemolytic anemia
- Immune thrombocytopenia
- Richter transformation (to aggressive lymphoma)

**Staging:**
- Rai staging (0-IV)
- Binet staging (A-C)
- Based on lymphocytosis, lymphadenopathy, organomegaly, cytopenias

**Treatment:**
- Early stage: Watch and wait
- Indications to treat: Symptoms, cytopenias, bulky disease
- Modern therapy: BTK inhibitors, BCL2 inhibitors`,
      keyTerms: [
        { term: 'indolent', definition: 'Slow-growing; a cancer that progresses slowly', pronunciation: 'IN-doh-lent' },
        { term: 'CD5', definition: 'A cell surface marker; unusual on B cells but characteristic of CLL' },
        { term: 'Richter transformation', definition: 'Conversion of CLL to aggressive large cell lymphoma' },
        { term: 'hypogammaglobulinemia', definition: 'Low antibody levels leading to infection susceptibility' },
      ],
      analogies: [
        'CLL cells are like workers who show up but do not do their jobs effectively, and they also refuse to retire (resist apoptosis).',
      ],
    },
    3: {
      level: 3,
      summary: 'CLL demonstrates variable clinical behavior determined by genetic features including IGHV mutation status, cytogenetic abnormalities, and TP53 status, guiding treatment selection.',
      explanation: `## Overview

CLL represents a spectrum from indolent disease requiring no treatment to aggressive variants requiring early intervention.

## Epidemiology
- Most common adult leukemia in Western countries
- Median age at diagnosis: 70 years
- Male predominance (2:1)
- Incidence: 4-5/100,000

## Immunophenotype

**Diagnostic Markers:**
| Marker | CLL Pattern |
|--------|-------------|
| CD19 | Positive (B cell) |
| CD5 | Positive (unusual for B cells) |
| CD23 | Positive |
| CD20 | Dim positive |
| Surface Ig | Dim positive |
| CD10 | Negative |
| Cyclin D1 | Negative |

## Prognostic Factors

**Favorable:**
- Mutated IGHV (>2% mutation from germline)
- del(13q) as sole abnormality
- Low beta-2 microglobulin
- Low CD49d expression

**Unfavorable:**
- Unmutated IGHV
- del(17p) / TP53 mutation
- del(11q)
- Complex karyotype
- High beta-2 microglobulin
- High ZAP-70 expression

## Staging

**Rai Staging:**
| Stage | Features | Risk |
|-------|----------|------|
| 0 | Lymphocytosis only | Low |
| I | + Lymphadenopathy | Intermediate |
| II | + Hepato/splenomegaly | Intermediate |
| III | + Anemia (Hgb <11) | High |
| IV | + Thrombocytopenia (<100K) | High |

## Indications for Treatment

- Constitutional symptoms
- Progressive lymphocytosis (doubling time <6 months)
- Cytopenias due to marrow involvement
- Massive/symptomatic lymphadenopathy or splenomegaly
- Autoimmune cytopenias unresponsive to steroids

## Treatment

**First-Line Options:**

*Without del(17p)/TP53:*
- BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib)
- BCL2 inhibitor (venetoclax) + obinutuzumab
- Chemoimmunotherapy (FCR) - selected young, fit, mutated IGHV

*With del(17p)/TP53:*
- BTK inhibitors preferred
- Venetoclax-based regimens
- Avoid chemoimmunotherapy

**Continuous vs Fixed Duration:**
- BTK inhibitors: Continuous until progression
- Venetoclax + obinutuzumab: Fixed duration (12 months)

## Complications

**Infections:**
- Hypogammaglobulinemia
- Cellular immune defects
- IVIG for recurrent infections

**Autoimmune Cytopenias:**
- AIHA (10-25%)
- ITP (2-5%)
- Treat with steroids, rituximab

**Richter Transformation:**
- 5-10% lifetime risk
- Usually DLBCL
- Poor prognosis`,
      keyTerms: [
        { term: 'IGHV', definition: 'Immunoglobulin heavy chain variable region; mutated status indicates better prognosis' },
        { term: 'BTK inhibitor', definition: 'Bruton tyrosine kinase inhibitor; blocks B-cell receptor signaling' },
        { term: 'del(17p)', definition: 'Deletion of chromosome 17p (TP53 location); poor prognosis, requires targeted therapy' },
        { term: 'FCR', definition: 'Fludarabine, cyclophosphamide, rituximab; historical chemoimmunotherapy regimen' },
      ],
      clinicalNotes: 'Always test for del(17p) and TP53 mutation before treatment selection. Chemoimmunotherapy should be avoided in these patients.',
    },
    4: {
      level: 4,
      summary: 'CLL management has transformed with targeted agents, requiring integration of genetic profiling, fitness assessment, and MRD evaluation to optimize outcomes.',
      explanation: `## Molecular Pathogenesis

**B-Cell Receptor Signaling:**
- Constitutive or antigen-driven BCR activation
- Downstream kinases: BTK, PI3K
- Survival signals through NF-kB, AKT
- Targeted by BTK inhibitors, PI3K inhibitors

**Apoptosis Resistance:**
- BCL2 overexpression
- Nurse-like cells in microenvironment
- Venetoclax restores apoptosis

**Key Mutations:**
| Gene | Frequency | Clinical Impact |
|------|-----------|-----------------|
| TP53 | 5-10% (20%+ relapse) | Treatment resistance |
| NOTCH1 | 10-15% | Richter risk |
| SF3B1 | 10-15% | Adverse prognosis |
| ATM | 10-15% | DNA repair defect |
| BIRC3 | 5% | NF-kB dysregulation |

## Targeted Therapy Details

**BTK Inhibitors:**

*Ibrutinib:*
- First-in-class, covalent inhibitor
- Off-target effects: EGFR, ITK, TEC
- Toxicities: Atrial fibrillation, bleeding, hypertension

*Acalabrutinib:*
- More selective
- Less atrial fibrillation
- BID dosing, avoid PPI

*Zanubrutinib:*
- Most selective
- Best tolerability profile
- Emerging preferred agent

**Venetoclax:**
- BCL2 inhibitor (BH3 mimetic)
- Rapid tumor lysis risk
- 5-week ramp-up required
- Fixed duration with obinutuzumab

**PI3K Inhibitors:**
- Idelalisib, duvelisib
- Immune-mediated toxicities
- Reserved for refractory disease

## MRD Assessment

**Methods:**
- Flow cytometry (10^-4 sensitivity)
- PCR-based (10^-5 sensitivity)

**Clinical Utility:**
- Predicts PFS/OS
- Guides venetoclax-based treatment duration
- Research: MRD-driven treatment decisions

## Treatment Sequencing

**First Line:**
1. BTK inhibitor (continuous) OR
2. Venetoclax + obinutuzumab (fixed duration)

**Second Line:**
- Switch mechanism: BTK → venetoclax or vice versa
- Consider cellular therapy if refractory

**BTK Inhibitor Resistance:**
- BTKc481S mutation (covalent inhibitors)
- PLCG2 mutations
- Non-covalent BTK inhibitor (pirtobrutinib)

## Special Populations

**Young, Fit, Mutated IGHV:**
- FCR remains an option (potential cure)
- Deep MRD responses
- Risk of secondary MDS/AML

**Frail/Comorbid:**
- Targeted therapy preferred
- Fixed-duration venetoclax regimens attractive
- Avoid fludarabine combinations

**Richter Transformation:**
- Anthracycline-based chemotherapy
- Consider R-EPOCH
- CAR-T cells emerging
- Allo-HCT for eligible`,
      keyTerms: [
        { term: 'pirtobrutinib', definition: 'Non-covalent BTK inhibitor active against BTKc481S resistant CLL' },
        { term: 'BH3 mimetic', definition: 'Drug class that mimics BH3-only proteins to induce apoptosis; venetoclax' },
        { term: 'nurse-like cells', definition: 'Microenvironment cells that support CLL survival through CD40L and BAFF' },
        { term: 'MRD', definition: 'Minimal/measurable residual disease; undetectable MRD (uMRD) is treatment goal' },
      ],
      clinicalNotes: 'Venetoclax requires tumor lysis prophylaxis and 5-week dose ramp-up. Hospitalize high-risk patients for initial dosing. BTK inhibitor-related atrial fibrillation requires anticoagulation (prefer DOACs, avoid warfarin with ibrutinib).',
    },
    5: {
      level: 5,
      summary: 'Contemporary CLL management integrates targeted therapies with MRD endpoints, sequencing strategies for resistance, and emerging cellular therapies in a rapidly evolving treatment landscape.',
      explanation: `## Precision Medicine in CLL

**Comprehensive Assessment:**
- FISH panel: del(13q), del(11q), del(17p), +12
- TP53 mutation sequencing
- IGHV mutation status
- NGS panel (NOTCH1, SF3B1, ATM, BIRC3)
- Complex karyotype assessment

**Risk Integration:**
- CLL-IPI (international prognostic index)
- Incorporates: TP53, IGHV, B2M, stage, age
- Guides treatment timing and intensity

## Treatment Selection Algorithm

**First-Line del(17p)/TP53 absent:**

*Option 1: Continuous BTK inhibitor*
- Acalabrutinib or zanubrutinib preferred
- Continue until progression or intolerance
- High response rates, durable

*Option 2: Fixed-duration venetoclax-obinutuzumab*
- 12-month treatment
- Treatment-free interval
- uMRD in 50-70%

*Option 3: FCR (selected patients)*
- Young (<65), fit, mutated IGHV
- Potential cure (60% long-term remissions)
- Risk: MDS/AML (5%)

**First-Line del(17p)/TP53 present:**
- Avoid chemoimmunotherapy
- BTK inhibitor or venetoclax-based
- Earlier progression expected

## MRD-Guided Therapy

**Venetoclax-Based Regimens:**
- Assess MRD at month 12
- uMRD <10^-4: Stop after fixed duration
- MRD detectable: Continue (emerging data)

**Significance:**
- uMRD correlates with PFS
- Deeper response = longer duration

## Resistance Mechanisms

**BTK Inhibitor Resistance:**
- BTKc481S: ~80% of covalent BTKi resistance
- PLCG2 mutations: Bypass BTK
- Treatment: Non-covalent BTKi (pirtobrutinib)

**Venetoclax Resistance:**
- BCL2 mutations (Gly101Val)
- Upregulation of MCL1, BCL-XL
- Less characterized; sequencing options limited

## Novel Therapies

**Non-Covalent BTK Inhibitors:**
- Pirtobrutinib: FDA approved for BTKi-refractory
- 70%+ response in double-refractory disease
- New resistance patterns emerging

**CAR-T Cells:**
- Lisocabtagene maraleucel (liso-cel) approved
- For R/R CLL after BTKi and BCL2i
- CR rates 20%, but durable

**Bispecific Antibodies:**
- CD20xCD3: Mosunetuzumab, epcoritamab
- Investigational in CLL
- Off-the-shelf option vs CAR-T

**Novel Combinations:**
- BTKi + venetoclax (GLOW, CAPTIVATE trials)
- Fixed-duration combinations
- Higher uMRD rates

## Special Scenarios

**Double-Refractory CLL:**
- Definition: Progressed on BTKi and venetoclax
- Pirtobrutinib
- CAR-T (liso-cel)
- Clinical trials
- Allo-HCT (selected)

**Richter Transformation:**
- Clonally related vs unrelated
- R-CHOP or R-EPOCH
- CAR-T cells (investigational)
- Checkpoint inhibitors
- Allo-HCT if responsive

**Autoimmune Complications:**
- AIHA: Steroids, rituximab
- Pure red cell aplasia: Cyclosporine
- May occur during BTKi treatment

## Emerging Directions

**Minimal Disease Approach:**
- MRD-driven treatment cessation
- Re-treatment on MRD recurrence

**Triple Therapy:**
- BTKi + venetoclax + obinutuzumab
- Very high uMRD rates
- Time-limited approach

**Novel Targets:**
- ROR1
- CD37
- Next-generation BTKi`,
      keyTerms: [
        { term: 'CLL-IPI', definition: 'CLL International Prognostic Index incorporating genetic and clinical factors' },
        { term: 'uMRD', definition: 'Undetectable MRD; no disease below 10^-4 threshold' },
        { term: 'lisocabtagene maraleucel', definition: 'CD19-directed CAR-T therapy approved for relapsed CLL' },
        { term: 'double-refractory', definition: 'CLL progressing after both BTK inhibitor and venetoclax' },
      ],
      clinicalNotes: `**Board Pearls:**
- CLL = CD5+ CD23+ B-cell neoplasm with dim CD20 and surface Ig
- Smudge cells on peripheral smear are characteristic
- del(17p)/TP53 = avoid chemoimmunotherapy, use targeted agents
- Mutated IGHV = favorable, potential for FCR cure in young fit patients
- Venetoclax requires TLS prophylaxis with 5-week ramp-up
- BTKi-related AF: anticoagulate, prefer DOACs
- Richter transformation: sudden clinical deterioration, high LDH, FDG-avid adenopathy`,
    },
  },

  media: [
    {
      id: 'cll-smear',
      type: 'histology',
      filename: 'cll-smudge-cells.jpg',
      title: 'CLL Peripheral Blood Smear',
      description: 'Mature lymphocytes with smudge cells characteristic of CLL',
    },
  ],

  citations: [
    {
      id: 'hallek-2018',
      type: 'article',
      title: 'Chronic lymphocytic leukaemia',
      authors: ['Hallek M'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(18)31903-8',
    },
  ],

  crossReferences: [
    { targetId: 'condition-non-hodgkin-lymphoma', targetType: 'condition', relationship: 'related', label: 'Non-Hodgkin Lymphoma' },
    { targetId: 'condition-autoimmune-hemolytic-anemia', targetType: 'condition', relationship: 'related', label: 'Autoimmune Hemolytic Anemia' },
  ],

  tags: {
    systems: ['hematologic', 'lymphatic'],
    topics: ['leukemia', 'oncology', 'B-cell malignancy'],
    keywords: ['CLL', 'BTK inhibitor', 'venetoclax', 'IGHV', 'CD5'],
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

export default chronicLymphocyticLeukemia;
