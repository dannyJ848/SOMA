/**
 * Non-Hodgkin Lymphoma - Comprehensive Educational Content
 *
 * A diverse group of lymphoid malignancies distinct from Hodgkin lymphoma,
 * encompassing indolent to aggressive subtypes.
 */

import { EducationalContent } from '../../../types';

export const nonHodgkinLymphoma: EducationalContent = {
  id: 'condition-non-hodgkin-lymphoma',
  type: 'condition',
  name: 'Non-Hodgkin Lymphoma',
  alternateNames: ['NHL', 'Non-Hodgkins lymphoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Non-Hodgkin lymphoma is a group of blood cancers that develop in the lymphatic system, with many different types that grow at different speeds.',
      explanation: `Non-Hodgkin lymphoma is a type of cancer that starts in the lymphatic system.

**What Is It:**
- Cancer of white blood cells called lymphocytes
- Many different types exist
- Some grow slowly (indolent), others grow quickly (aggressive)

**Common Signs:**
- Swollen lymph nodes
- Fever, night sweats
- Weight loss
- Feeling tired
- Sometimes belly pain if spleen is enlarged

**Who Gets It:**
- More common in older adults
- Can occur at any age
- More common than Hodgkin lymphoma

**Treatment:**
- Depends on the type and how fast it grows
- May include chemotherapy, radiation, or immunotherapy
- Some slow-growing types just need watching
- Many types can be cured or controlled`,
      keyTerms: [
        { term: 'lymphoma', definition: 'Cancer that starts in white blood cells called lymphocytes', pronunciation: 'lim-FOH-mah' },
        { term: 'indolent', definition: 'Slow-growing, not aggressive' },
        { term: 'aggressive', definition: 'Fast-growing, requiring prompt treatment' },
      ],
      analogies: [
        'Non-Hodgkin lymphoma is like a large family of related diseases - they are all lymphomas but with different personalities, some quiet and slow, others loud and fast.',
      ],
      examples: [
        'A 65-year-old notices lumps in his neck and groin. Tests show follicular lymphoma, a slow-growing type that may be watched without immediate treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'NHL encompasses diverse B-cell and T-cell lymphomas classified by cell of origin, behavior (indolent vs aggressive), and molecular features, with treatment tailored to subtype.',
      explanation: `Non-Hodgkin lymphoma includes all lymphomas except Hodgkin lymphoma, with over 60 distinct subtypes.

**Classification:**
- B-cell lymphomas (85%)
- T-cell lymphomas (15%)
- Further classified by aggressiveness

**Common Subtypes:**

*Indolent (Slow-Growing):*
- Follicular lymphoma
- Marginal zone lymphoma
- Small lymphocytic lymphoma (CLL)

*Aggressive (Fast-Growing):*
- Diffuse large B-cell lymphoma (DLBCL) - most common
- Mantle cell lymphoma
- Burkitt lymphoma (highly aggressive)
- Peripheral T-cell lymphoma

**Clinical Features:**
- Painless lymphadenopathy
- B symptoms (fever, night sweats, weight loss)
- Bone marrow involvement
- Extranodal disease (GI, skin, CNS)

**Diagnosis:**
- Excisional lymph node biopsy
- Immunohistochemistry
- Flow cytometry
- FISH and molecular studies
- PET-CT staging

**General Treatment Principles:**
- Indolent: Watch and wait vs rituximab-based therapy
- Aggressive: R-CHOP or similar regimens
- Goal: Cure for aggressive, control for indolent`,
      keyTerms: [
        { term: 'DLBCL', definition: 'Diffuse large B-cell lymphoma; the most common aggressive NHL' },
        { term: 'follicular lymphoma', definition: 'Common indolent NHL arising from germinal center B cells' },
        { term: 'R-CHOP', definition: 'Standard chemo-immunotherapy: rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone' },
        { term: 'rituximab', definition: 'Anti-CD20 monoclonal antibody used in B-cell lymphomas' },
      ],
      analogies: [
        'Think of NHL like a spectrum - indolent lymphomas are like slow-growing plants that need occasional trimming, while aggressive lymphomas are like fast-growing weeds that need immediate removal.',
      ],
    },
    3: {
      level: 3,
      summary: 'NHL subtypes require precise classification using morphology, immunophenotype, and genetics to guide risk stratification and therapy selection.',
      explanation: `## Overview

Non-Hodgkin lymphomas represent a heterogeneous group requiring accurate subtype diagnosis for optimal management.

## Common B-Cell NHL Subtypes

**Diffuse Large B-Cell Lymphoma (DLBCL):**
- Most common NHL (30-40%)
- Aggressive, curable
- R-CHOP x 6 cycles standard
- Cell of origin subtypes: GCB vs ABC (ABC worse)

**Follicular Lymphoma:**
- Second most common NHL (20%)
- Indolent, incurable but long survival
- t(14;18) BCL2 rearrangement (85%)
- Grade 1-3a indolent, 3b treat as aggressive

**Mantle Cell Lymphoma:**
- 5-7% of NHL
- t(11;14) cyclin D1 overexpression
- Aggressive course, historically poor prognosis
- Young/fit: Intensive chemo + ASCT

**Marginal Zone Lymphoma:**
- MALT (GI, lung), nodal, splenic
- Gastric MALT: H. pylori associated
- Treatment: Antibiotics for H. pylori, rituximab-based

**Burkitt Lymphoma:**
- Highly aggressive
- c-MYC translocation
- Endemic, sporadic, immunodeficiency-associated
- Intensive chemo, CNS prophylaxis required

## T-Cell Lymphomas

**Peripheral T-Cell Lymphoma (PTCL):**
- Heterogeneous group
- PTCL-NOS most common
- CHOP-based + ASCT consolidation

**Anaplastic Large Cell Lymphoma:**
- ALK+ (favorable) vs ALK- (less favorable)
- CD30+ (target for brentuximab vedotin)

## Staging and Prognostic Indices

**Staging (Lugano):**
- Limited (I-II) vs Advanced (III-IV)
- PET-CT standard for aggressive NHL

**Prognostic Indices:**
| Lymphoma | Index | Factors |
|----------|-------|---------|
| DLBCL | IPI | Age, LDH, stage, PS, extranodal |
| Follicular | FLIPI | Age, LDH, stage, Hgb, nodes |
| MCL | MIPI | Age, LDH, PS, WBC |

## Treatment

**DLBCL:**
- R-CHOP x 6
- CNS prophylaxis if high risk
- PET response assessment
- Relapsed: Salvage + ASCT or CAR-T

**Follicular Lymphoma:**
- Asymptomatic: Watch and wait
- Symptomatic: Bendamustine-rituximab or R-CHOP
- Maintenance rituximab
- Transformation to DLBCL (2-3%/year)

**Mantle Cell:**
- Young: R-CHOP/R-DHAP alternating + ASCT
- Older: BR, VR-CAP
- BTK inhibitors in relapse`,
      keyTerms: [
        { term: 'IPI', definition: 'International Prognostic Index; 5-factor score predicting DLBCL outcomes' },
        { term: 'cell of origin', definition: 'DLBCL classification into GCB vs ABC type based on gene expression' },
        { term: 't(14;18)', definition: 'Translocation placing BCL2 under IgH promoter; hallmark of follicular lymphoma' },
        { term: 'transformation', definition: 'Conversion of indolent to aggressive lymphoma' },
      ],
      clinicalNotes: 'Gastric MALT lymphoma should be treated with H. pylori eradication first. Up to 75% respond to antibiotics alone in early stage.',
    },
    4: {
      level: 4,
      summary: 'NHL management integrates molecular classification, targeted therapy, and cellular immunotherapy, with treatment intensity matched to disease biology and patient factors.',
      explanation: `## Molecular Pathogenesis

**DLBCL Subtypes:**

*Germinal Center B-cell (GCB):*
- BCL2 translocation
- EZH2 mutations
- Better prognosis

*Activated B-Cell (ABC):*
- MYD88, CD79B mutations (NF-kB activation)
- Worse prognosis
- May benefit from BTK inhibitors

*Double-Hit/Triple-Hit:*
- MYC + BCL2 and/or BCL6 rearrangements
- Very aggressive, dose-adjusted R-EPOCH

**Follicular Lymphoma:**
- t(14;18) BCL2 in 85%
- Secondary mutations: CREBBP, KMT2D, EZH2
- Transformation markers: TP53, MYC

## Novel Therapies

**Bispecific Antibodies:**
- Mosunetuzumab, epcoritamab, glofitamab
- CD20xCD3 bispecifics
- High response rates in R/R DLBCL
- Off-the-shelf (vs CAR-T manufacturing)

**CAR-T Cell Therapy:**
- Axicabtagene ciloleucel (axi-cel)
- Tisagenlecleucel (tisa-cel)
- Lisocabtagene maraleucel (liso-cel)
- CR rates 40-54% in R/R DLBCL
- Now approved for 2nd line in high-risk

**Polatuzumab Vedotin:**
- Anti-CD79b ADC
- Pola-R-CHP frontline for DLBCL
- Pola-BR in relapsed disease

**BTK Inhibitors:**
- Ibrutinib in ABC-DLBCL (investigational)
- MCL: Ibrutinib, acalabrutinib, zanubrutinib
- R/R MZL

**EZH2 Inhibitors:**
- Tazemetostat for FL with EZH2 mutation
- Oral, well-tolerated

## DLBCL Treatment Algorithm

**First Line:**
- R-CHOP x 6 (standard)
- Pola-R-CHP (emerging frontline)
- DA-R-EPOCH for double-hit

**High-Risk Features:**
- High IPI
- Double-expressor (BCL2+, MYC+ by IHC)
- CNS risk (IT prophylaxis or HD-MTX)

**Relapsed/Refractory:**
- If transplant eligible: Salvage then ASCT or CAR-T
- 2nd line CAR-T for primary refractory/early relapse
- CAR-T if relapse post-ASCT
- Bispecifics if CAR-T ineligible/failed

## Follicular Lymphoma Management

**When to Treat:**
- Symptoms
- Organ compromise
- Cytopenias
- Rapid progression

**Frontline Options:**
- BR (bendamustine-rituximab)
- R-CHOP
- R-CVP
- Rituximab monotherapy (low tumor burden)

**Maintenance:**
- Rituximab q2 months x 2 years
- Improves PFS, no OS benefit proven

**Relapsed FL:**
- PI3K inhibitors (idelalisib, copanlisib)
- EZH2 inhibitors (tazemetostat)
- Lenalidomide + rituximab
- CAR-T (axicabtagene ciloleucel approved)

## Mantle Cell Lymphoma

**Frontline:**
- Young/fit: Alternating R-CHOP/R-DHAP + ASCT
- Older: BR, VR-CAP
- Rituximab maintenance

**Relapsed:**
- BTK inhibitors (ibrutinib, acalabrutinib)
- Venetoclax
- Brexucabtagene autoleucel (CAR-T)`,
      keyTerms: [
        { term: 'double-hit lymphoma', definition: 'DLBCL with concurrent MYC and BCL2 (and/or BCL6) rearrangements' },
        { term: 'bispecific antibody', definition: 'Antibody binding two targets simultaneously; CD20xCD3 links T cells to tumor' },
        { term: 'polatuzumab vedotin', definition: 'Anti-CD79b antibody-drug conjugate for DLBCL' },
        { term: 'DA-R-EPOCH', definition: 'Dose-adjusted intensive regimen for high-risk DLBCL' },
      ],
      clinicalNotes: 'Double-hit lymphoma requires DA-R-EPOCH (not R-CHOP). Always check for MYC rearrangement in DLBCL. CNS prophylaxis for high IPI, testicular, breast, kidney involvement.',
    },
    5: {
      level: 5,
      summary: 'Contemporary NHL management integrates comprehensive molecular profiling, targeted therapy selection, and rapidly evolving cellular/immunotherapy options in a disease-specific precision medicine approach.',
      explanation: `## Precision Medicine in NHL

**Comprehensive Workup:**
- Morphology + immunohistochemistry
- Flow cytometry
- FISH panel (MYC, BCL2, BCL6, CCND1)
- Gene expression profiling (GCB vs ABC)
- NGS mutation panels

## DLBCL Advances

**COO-Based Therapy:**
- ABC-DLBCL: BTK inhibitor combinations (ongoing trials)
- GCB-DLBCL: Standard R-CHOP effective

**Double-Hit/Triple-Hit Management:**
- DA-R-EPOCH standard
- CNS prophylaxis required
- Consider frontline CAR-T (trials)

**Pola-R-CHP (POLARIX Trial):**
- Polatuzumab + R-CHP vs R-CHOP
- Improved PFS in IPI 2-5
- Emerging new standard

**2nd Line Treatment Revolution:**
- ZUMA-7 (axi-cel), TRANSFORM (liso-cel): CAR-T superior to ASCT
- For primary refractory or early relapse (<12 months)
- Later relapse: ASCT still option

**Bispecifics:**
- Mosunetuzumab, epcoritamab, glofitamab
- Step-up dosing to mitigate CRS
- CR rates 35-50% in heavily pretreated
- Outpatient administration possible
- Sequencing with CAR-T being defined

## Follicular Lymphoma Evolution

**Risk Stratification:**
- FLIPI-2, m7-FLIPI (molecular)
- POD24 (progression within 24 months): Adverse

**Novel Combinations:**
- Lenalidomide + rituximab (R2)
- Obinutuzumab-based regimens
- EZH2 inhibition (mutated EZH2)

**Cellular Therapy:**
- Axicabtagene ciloleucel approved for R/R FL
- Bispecifics active in FL

**MRD-Directed Approaches:**
- Emerging trials
- ctDNA monitoring

## Mantle Cell Lymphoma Advances

**Risk Stratification:**
- Ki-67 index
- TP53 mutation (very poor prognosis)
- Blastoid/pleomorphic variant

**Frontline Intensification:**
- Cytarabine-containing induction
- ASCT consolidation
- Rituximab maintenance

**Novel Agents:**
- BTK inhibitors transforming R/R management
- Venetoclax + BTKi combinations
- Brexucabtagene autoleucel CAR-T

**TP53 Mutated MCL:**
- Very poor prognosis with standard therapy
- BTK inhibitors may benefit
- Consider clinical trials, early CAR-T

## T-Cell Lymphoma

**PTCL Frontline:**
- CHOP or CHOEP
- Brentuximab + CHP for CD30+ (ECHELON-2)
- ASCT consolidation in first remission

**Relapsed PTCL:**
- Pralatrexate, romidepsin, belinostat
- Limited efficacy
- Allogeneic HCT if eligible

## Emerging Directions

**Antibody-Drug Conjugates:**
- Loncastuximab tesirine (CD19)
- New targets in development

**Novel Bispecifics:**
- Next-gen CD20xCD3
- Alternative targets (CD19xCD3)

**Combination Approaches:**
- Bispecific + checkpoint inhibitor
- CAR-T + maintenance
- BTK + venetoclax + anti-CD20

**MRD Assessment:**
- ctDNA increasingly validated
- Response-adapted therapy
- Early detection of relapse`,
      keyTerms: [
        { term: 'POD24', definition: 'Progression of disease within 24 months of initial treatment; adverse prognostic factor in FL' },
        { term: 'POLARIX', definition: 'Phase 3 trial showing Pola-R-CHP superiority over R-CHOP in DLBCL' },
        { term: 'ZUMA-7', definition: 'Trial demonstrating axi-cel superiority over SOC in 2nd line DLBCL' },
        { term: 'm7-FLIPI', definition: 'Clinicogenetic risk model incorporating mutations in FL prognosis' },
      ],
      clinicalNotes: `**Board Pearls:**
- DLBCL: Most common NHL, R-CHOP standard, cure rate 60%
- Double-hit = MYC + BCL2/BCL6 rearrangement, requires DA-R-EPOCH
- Follicular: t(14;18) BCL2, indolent, watch if asymptomatic
- Mantle cell: Cyclin D1 (CCND1), t(11;14), aggressive course
- Burkitt: c-MYC translocation, starry sky pattern, very aggressive
- Gastric MALT: H. pylori association, treat infection first
- CAR-T now 2nd line for primary refractory/early relapse DLBCL`,
    },
  },

  media: [
    {
      id: 'dlbcl-histology',
      type: 'histology',
      filename: 'dlbcl-histology.jpg',
      title: 'DLBCL Histology',
      description: 'Diffuse infiltrate of large B cells effacing nodal architecture',
    },
  ],

  citations: [
    {
      id: 'sehn-salles-2021',
      type: 'article',
      title: 'Diffuse Large B-Cell Lymphoma',
      authors: ['Sehn LH', 'Salles G'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra2027612',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hodgkin-lymphoma', targetType: 'condition', relationship: 'related', label: 'Hodgkin Lymphoma' },
    { targetId: 'condition-chronic-lymphocytic-leukemia', targetType: 'condition', relationship: 'related', label: 'CLL/SLL' },
  ],

  tags: {
    systems: ['hematologic', 'lymphatic'],
    topics: ['lymphoma', 'oncology', 'hematologic malignancy'],
    keywords: ['NHL', 'DLBCL', 'follicular', 'R-CHOP', 'CAR-T'],
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

export default nonHodgkinLymphoma;
