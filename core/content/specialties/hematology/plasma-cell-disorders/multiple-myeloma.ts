/**
 * Multiple Myeloma - Comprehensive Educational Content
 *
 * A malignant plasma cell neoplasm characterized by bone destruction,
 * renal impairment, and immunodeficiency.
 */

import { EducationalContent } from '../../../types';

export const multipleMyeloma: EducationalContent = {
  id: 'condition-multiple-myeloma',
  type: 'condition',
  name: 'Multiple Myeloma',
  alternateNames: ['MM', 'Plasma cell myeloma', 'Kahlers disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Multiple myeloma is a cancer of plasma cells in the bone marrow that can cause bone pain, kidney problems, and infections.',
      explanation: `Multiple myeloma is a type of blood cancer that affects plasma cells.

**What Are Plasma Cells:**
- Plasma cells are white blood cells that make antibodies
- Antibodies help fight infections

**What Happens in Myeloma:**
- Abnormal plasma cells grow out of control in the bone marrow
- They crowd out normal blood cells
- They produce abnormal proteins that can damage kidneys
- They cause bones to weaken and break easily

**Common Signs (CRAB):**
- Calcium high (makes you thirsty, confused)
- Renal (kidney) problems
- Anemia (feeling tired, pale)
- Bone problems (pain, fractures)

**Treatment:**
- Chemotherapy and targeted drugs
- Sometimes stem cell transplant
- Drugs to strengthen bones
- Treatment helps many people live longer`,
      keyTerms: [
        { term: 'plasma cells', definition: 'White blood cells that make antibodies to fight infections' },
        { term: 'bone marrow', definition: 'The soft tissue inside bones where blood cells are made' },
        { term: 'antibodies', definition: 'Proteins that help your body fight germs' },
      ],
      analogies: [
        'Think of plasma cells as soldiers making weapons (antibodies) to fight invaders. In myeloma, one soldier goes rogue, makes copies of itself, and produces defective weapons that cause damage.',
      ],
      examples: [
        'A 70-year-old with back pain has an X-ray showing holes in his spine. Blood tests show anemia and kidney problems, leading to a myeloma diagnosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Multiple myeloma is a clonal plasma cell malignancy producing monoclonal immunoglobulin, causing end-organ damage through CRAB criteria.',
      explanation: `Multiple myeloma is characterized by malignant plasma cells secreting a monoclonal protein (M-protein).

**Pathophysiology:**
- Clonal plasma cell proliferation in bone marrow
- Production of monoclonal immunoglobulin (paraprotein)
- Cytokine-mediated bone destruction
- Light chain damage to kidneys

**Diagnostic Criteria:**
- Clonal bone marrow plasma cells ≥10%
- Plus one or more myeloma-defining events

**CRAB Criteria:**
- **C**alcium >11 mg/dL
- **R**enal insufficiency (Cr >2 or CrCl <40)
- **A**nemia (Hgb <10 or 2g below normal)
- **B**one lesions (lytic lesions, fractures)

**SLiM Criteria (2014):**
- ≥60% clonal plasma cells
- Serum free light chain ratio ≥100
- >1 focal lesion on MRI

**Diagnosis:**
- Serum protein electrophoresis (SPEP) - M-spike
- Serum free light chains
- Bone marrow biopsy
- Skeletal survey or PET-CT

**Treatment:**
- Induction therapy (VRd: bortezomib, lenalidomide, dexamethasone)
- Autologous stem cell transplant if eligible
- Maintenance therapy (lenalidomide)`,
      keyTerms: [
        { term: 'M-protein', definition: 'Monoclonal protein produced by myeloma cells; detected on SPEP as M-spike' },
        { term: 'CRAB criteria', definition: 'End-organ damage: Calcium, Renal, Anemia, Bone' },
        { term: 'bortezomib', definition: 'Proteasome inhibitor used in myeloma treatment', pronunciation: 'bor-TEZ-oh-mib' },
        { term: 'lenalidomide', definition: 'Immunomodulatory drug (IMiD) for myeloma', pronunciation: 'len-ah-LID-oh-mide' },
      ],
      analogies: [
        'The M-protein is like a factory making only one product - the same defective antibody over and over - while neglecting to make the variety of antibodies needed for proper immune function.',
      ],
    },
    3: {
      level: 3,
      summary: 'Myeloma requires risk stratification by cytogenetics and staging, with transplant-eligible patients receiving intensive induction followed by ASCT and maintenance.',
      explanation: `## Overview

Multiple myeloma accounts for 10% of hematologic malignancies with improving outcomes due to novel agents.

## Epidemiology
- Median age at diagnosis: 69 years
- More common in African Americans
- Incidence: 7/100,000

## Diagnosis

**Laboratory:**
- SPEP: M-spike (IgG most common, then IgA)
- UPEP: Bence Jones protein (light chains)
- Serum free light chains (kappa/lambda ratio)
- Immunofixation: Identifies immunoglobulin type

**Bone Marrow:**
- ≥10% clonal plasma cells (often >30%)
- Cytogenetics and FISH

**Imaging:**
- PET-CT or whole-body low-dose CT
- MRI for suspected cord compression
- Skeletal survey (older method)

## Risk Stratification

**High-Risk Cytogenetics:**
- t(4;14): Intermediate
- t(14;16), t(14;20): High
- del(17p): High
- 1q gain: Adverse
- del(1p): Adverse

**Staging (R-ISS):**
| Stage | Criteria | 5-yr OS |
|-------|----------|---------|
| I | ISS I + standard risk cyto + normal LDH | 82% |
| II | Not I or III | 62% |
| III | ISS III + high-risk cyto OR high LDH | 40% |

## Treatment

**Transplant-Eligible:**
1. Induction: VRd x 4-6 cycles
2. Stem cell collection
3. High-dose melphalan + ASCT
4. Maintenance: Lenalidomide

**Transplant-Ineligible:**
1. VRd until progression
2. Or DRd (daratumumab-Rd)
3. Lenalidomide maintenance

**Quadruplet Induction (Emerging):**
- Dara-VRd showing improved outcomes
- Becoming new standard

## Supportive Care

**Bone Disease:**
- Bisphosphonates (zoledronic acid)
- Denosumab
- Radiation for painful lesions
- Vertebroplasty/kyphoplasty

**Infection Prevention:**
- Vaccination
- IVIG for recurrent infections
- PCP prophylaxis during treatment

**VTE Prophylaxis:**
- Aspirin or anticoagulation (IMiD-based regimens)

## Relapsed Disease

**Salvage Regimens:**
- DKd (daratumumab-carfilzomib-dex)
- DVd (daratumumab-bortezomib-dex)
- KRd (carfilzomib-lenalidomide-dex)
- Selinexor combinations
- CAR-T (ide-cel, cilta-cel)
- Bispecifics (teclistamab, elranatamab)`,
      keyTerms: [
        { term: 'R-ISS', definition: 'Revised International Staging System incorporating cytogenetics and LDH' },
        { term: 'VRd', definition: 'Bortezomib, lenalidomide, dexamethasone; standard induction' },
        { term: 'daratumumab', definition: 'Anti-CD38 monoclonal antibody; backbone of modern myeloma therapy' },
        { term: 'ASCT', definition: 'Autologous stem cell transplant; improves PFS in eligible patients' },
      ],
      clinicalNotes: 'Light chain myeloma (15%) may have no M-spike on SPEP. Always check serum free light chains. Hyperviscosity rare except in IgA or IgM (Waldenstrom).',
    },
    4: {
      level: 4,
      summary: 'Myeloma management requires integration of genomic risk, measurable residual disease assessment, and sequential novel agent combinations with emerging cellular therapies.',
      explanation: `## Pathogenesis

**Tumor Microenvironment:**
- Bone marrow stromal cell interactions
- RANK-RANKL signaling (bone destruction)
- IL-6 (growth factor)
- VEGF (angiogenesis)

**Key Pathways:**
- NF-kB activation
- Proteasome/protein degradation
- Cereblon (IMiD target)
- BCMA (cellular therapy target)

**Genetic Evolution:**
- MGUS → SMM → MM progression
- Primary events: IgH translocations, hyperdiploidy
- Secondary events: del(17p), 1q gain, MYC rearrangements

## Treatment Classes

**Proteasome Inhibitors:**
- Bortezomib: Subcutaneous, weekly preferred
- Carfilzomib: More potent, cardiac toxicity
- Ixazomib: Oral

**IMiDs:**
- Lenalidomide: Maintenance standard
- Pomalidomide: Post-lenalidomide
- Cereblon degraders (iberdomide): Investigational

**Anti-CD38:**
- Daratumumab: IV or SQ
- Isatuximab: IV

**Anti-SLAMF7:**
- Elotuzumab

## MRD Assessment

**Methods:**
- Next-generation flow (10^-5 to 10^-6)
- NGS (10^-5 to 10^-6)
- PET-CT for imaging MRD

**Clinical Significance:**
- MRD negativity correlates with PFS/OS
- Sustained MRD negativity most important
- Not yet treatment-directing (trials ongoing)

## Transplantation Considerations

**ASCT:**
- Improves PFS vs no ASCT
- Upfront vs delayed: Similar OS
- Tandem ASCT in high-risk

**Conditioning:**
- Melphalan 200 mg/m2 standard
- Reduced dose (140) if renal impairment or older

## Relapsed/Refractory Management

**Treatment Selection:**
- Class switching preferred
- Consider prior agents, duration of response
- Triple-class refractory: Poor prognosis

**BCMA-Directed Therapy:**
- Ide-cel (CAR-T): ORR 73%, CR 33%
- Cilta-cel (CAR-T): ORR 98%, CR 83%
- Teclistamab (bispecific): ORR 63%
- Belantamab mafodotin (ADC): Corneal toxicity

**Other Novel Agents:**
- Selinexor (XPO1 inhibitor)
- Venetoclax (t(11;14))
- CELMoDs (next-gen IMiDs)

## Special Populations

**Renal Impairment:**
- Bortezomib-based preferred
- Avoid lenalidomide until renal recovery
- Daratumumab safe

**High-Risk Disease:**
- Quadruplet induction
- Early transplant
- Tandem ASCT consideration
- Earlier novel agents

**Extramedullary Disease:**
- Aggressive biology
- May benefit from CAR-T`,
      keyTerms: [
        { term: 'BCMA', definition: 'B-cell maturation antigen; target for CAR-T and bispecifics in myeloma' },
        { term: 'MRD', definition: 'Measurable residual disease; powerful prognostic factor in myeloma' },
        { term: 'triple-class refractory', definition: 'Refractory to PI, IMiD, and anti-CD38; poor prognosis' },
        { term: 'ide-cel', definition: 'Idecabtagene vicleucel; BCMA-directed CAR-T for myeloma' },
      ],
      clinicalNotes: 'Cilta-cel has highest response rates but longer manufacturing time. Movement disorder and parkinsonism reported. Teclistamab is off-the-shelf alternative to CAR-T.',
    },
    5: {
      level: 5,
      summary: 'Contemporary myeloma therapy integrates quadruplet induction, risk-adapted transplant strategies, MRD-guided maintenance, and expanding cellular/immunotherapy options toward functional cure.',
      explanation: `## Precision Medicine in Myeloma

**Genomic Assessment:**
- FISH panel (mandatory)
- Gene expression profiling (GEP70, SKY92)
- NGS mutation panels (emerging)

**High-Risk Features:**
- del(17p), t(4;14), t(14;16), t(14;20)
- 1q gain (especially ≥4 copies)
- del(1p)
- GEP high-risk signature
- ISS III + elevated LDH

## Frontline Treatment Evolution

**Quadruplet Induction:**
- GRIFFIN trial: Dara-VRd → ASCT
- PERSEUS trial: Dara-VRd superiority
- Becoming standard of care

**MRD-Directed Approaches:**
- MASTER trial: MRD-SURE stopping rule
- MRD-negative sustained: May stop therapy
- Ongoing validation

**Tandem vs Single ASCT:**
- High-risk may benefit from tandem
- EMN02, StaMINA trials
- Maintenance may substitute

## Maintenance Therapy

**Standard:**
- Lenalidomide until progression
- Clear PFS benefit, modest OS benefit

**High-Risk Maintenance:**
- VRd maintenance
- Daratumumab combinations
- More intensive approach

**Duration Questions:**
- Indefinite vs MRD-guided?
- Trials exploring limited duration

## BCMA-Directed Therapies

**CAR-T Cells:**
| Agent | Target | ORR | CR Rate | DOR |
|-------|--------|-----|---------|-----|
| Ide-cel | BCMA | 73% | 33% | 11 mo |
| Cilta-cel | BCMA | 98% | 83% | >21 mo |

**Moving Earlier:**
- KarMMa-3: Ide-cel vs SOC in 2-4 prior lines
- CARTITUDE-4: Cilta-cel in 1-3 prior lines
- Both positive

**Bispecific Antibodies:**
| Agent | Target | ORR | Setting |
|-------|--------|-----|---------|
| Teclistamab | BCMAxCD3 | 63% | R/R |
| Elranatamab | BCMAxCD3 | 61% | R/R |
| Talquetamab | GPRC5DxCD3 | 73% | R/R |

**ADC:**
- Belantamab mafodotin: Corneal toxicity limits use
- DREAMM studies ongoing

## Emerging Strategies

**Novel Targets:**
- GPRC5D (talquetamab)
- FcRH5
- CD38 x CD3 bispecifics

**Combinations:**
- Bispecific + daratumumab
- CAR-T + consolidation
- Quadruplet throughout

**Resistance Mechanisms:**
- BCMA downregulation
- T cell exhaustion
- Next-gen approaches

## Special Scenarios

**Smoldering Myeloma:**
- 20/20/20 criteria predict progression
- Early treatment trials (E3A06, QuiRedex)
- Consider observation vs trial enrollment

**Primary Plasma Cell Leukemia:**
- Very aggressive
- VRd + ASCT aggressive approach
- High-risk features universal

**Light Chain (AL) Amyloidosis:**
- Often diagnosed with myeloma
- Daratumumab-based regimens
- Cardiac staging critical

## Future Directions

**MRD as Endpoint:**
- FDA considering for accelerated approval
- Sustained MRD negativity most important

**Functional Cure:**
- MRD-negative, therapy discontinuation
- 10-15% may achieve
- Longer follow-up needed

**Combination Immunotherapy:**
- Bispecific + CAR-T?
- Optimal sequencing
- Overcome resistance`,
      keyTerms: [
        { term: 'MRD-SURE', definition: 'MRD-directed treatment stopping approach in MASTER trial' },
        { term: 'talquetamab', definition: 'GPRC5DxCD3 bispecific antibody; alternative target to BCMA' },
        { term: 'cilta-cel', definition: 'Ciltacabtagene autoleucel; BCMA CAR-T with highest response rates' },
        { term: 'GEP', definition: 'Gene expression profiling; risk stratification beyond cytogenetics' },
      ],
      clinicalNotes: `**Board Pearls:**
- CRAB + SLiM criteria define symptomatic myeloma
- SPEP shows M-spike; immunofixation identifies type
- High-risk: del(17p), t(4;14), t(14;16), 1q gain
- VRd is standard induction; quadruplet (Dara-VRd) emerging
- ASCT improves PFS; maintenance with lenalidomide
- MRD negativity is strongest prognostic factor
- BCMA is target for CAR-T and bispecifics
- Cilta-cel has highest responses; moving earlier in disease`,
    },
  },

  media: [
    {
      id: 'myeloma-biopsy',
      type: 'histology',
      filename: 'plasma-cell-myeloma.jpg',
      title: 'Bone Marrow in Multiple Myeloma',
      description: 'Sheets of abnormal plasma cells replacing normal marrow',
    },
  ],

  citations: [
    {
      id: 'rajkumar-kumar-2020',
      type: 'article',
      title: 'Multiple Myeloma: Current Treatment Algorithms',
      authors: ['Rajkumar SV', 'Kumar S'],
      source: 'Blood Cancer Journal',
      url: 'https://doi.org/10.1038/s41408-020-0299-4',
    },
  ],

  crossReferences: [
    { targetId: 'condition-mgus', targetType: 'condition', relationship: 'related', label: 'MGUS' },
    { targetId: 'condition-al-amyloidosis', targetType: 'condition', relationship: 'related', label: 'AL Amyloidosis' },
  ],

  tags: {
    systems: ['hematologic', 'skeletal'],
    topics: ['plasma cell disorder', 'oncology', 'hematologic malignancy'],
    keywords: ['myeloma', 'M-protein', 'CRAB', 'ASCT', 'CAR-T', 'BCMA'],
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

export default multipleMyeloma;
