/**
 * Hodgkin Lymphoma - Comprehensive Educational Content
 *
 * A lymphoid malignancy characterized by Reed-Sternberg cells
 * in a reactive inflammatory background.
 */

import { EducationalContent } from '../../../types';

export const hodgkinLymphoma: EducationalContent = {
  id: 'condition-hodgkin-lymphoma',
  type: 'condition',
  name: 'Hodgkin Lymphoma',
  alternateNames: ['HL', 'Hodgkin disease', 'Hodgkins lymphoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Hodgkin lymphoma is a cancer of the lymph system that usually starts in lymph nodes and is highly curable with treatment.',
      explanation: `Hodgkin lymphoma is a type of cancer that affects the lymph system, which is part of your immune system.

**What Happens:**
- Cancer starts in white blood cells called lymphocytes
- It usually begins in lymph nodes (most often in the neck or chest)
- Special cancer cells called Reed-Sternberg cells are found

**Common Signs:**
- Swollen lymph nodes (lumps) that do not hurt
- Fevers and night sweats
- Unexplained weight loss
- Itching all over the body
- Tiredness

**Who Gets It:**
- Young adults (ages 15-35)
- Adults over 55
- Slightly more common in males

**Treatment:**
- Chemotherapy (drugs that kill cancer)
- Sometimes radiation therapy
- Treatment is very effective - most people are cured`,
      keyTerms: [
        { term: 'lymphoma', definition: 'Cancer that starts in the lymph system', pronunciation: 'lim-FOH-mah' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that filter fluid and help fight infection' },
        { term: 'Reed-Sternberg cells', definition: 'Large abnormal cells seen in Hodgkin lymphoma' },
      ],
      analogies: [
        'Lymph nodes are like security checkpoints in your body. In Hodgkin lymphoma, the guards (cells) at these checkpoints become abnormal and multiply.',
      ],
      examples: [
        'A college student notices a painless lump in his neck that does not go away. He also has night sweats. A biopsy shows Hodgkin lymphoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hodgkin lymphoma is distinguished by Reed-Sternberg cells in a reactive background, with classical and nodular lymphocyte-predominant subtypes having different biology and treatment.',
      explanation: `Hodgkin lymphoma is a B-cell lymphoma with unique pathological features and high cure rates.

**Pathophysiology:**
- Reed-Sternberg cells are the malignant cells (usually only 1-2% of tumor)
- Surrounded by reactive inflammatory cells
- EBV associated in ~40% of cases

**Types:**
1. **Classical Hodgkin lymphoma (95%)**
   - Nodular sclerosis (most common)
   - Mixed cellularity
   - Lymphocyte-rich
   - Lymphocyte-depleted

2. **Nodular lymphocyte-predominant (5%)**
   - "Popcorn" cells (LP cells)
   - CD20+, different biology

**Clinical Features:**
- Painless lymphadenopathy
- Contiguous spread (predictable pattern)
- B symptoms: Fever >38C, night sweats, weight loss >10%
- Mediastinal mass common (nodular sclerosis)
- Pel-Ebstein fever (rare, cyclic)
- Alcohol-induced lymph node pain (rare but classic)

**Diagnosis:**
- Excisional lymph node biopsy (not FNA)
- Reed-Sternberg cells: CD15+, CD30+, CD20-
- PET-CT for staging

**Staging (Ann Arbor):**
- Stage I: Single lymph node region
- Stage II: Two or more regions, same side of diaphragm
- Stage III: Both sides of diaphragm
- Stage IV: Extranodal involvement (bone marrow, liver)

**Treatment:**
- Early stage: ABVD x 2-4 + radiation or ABVD x 4-6
- Advanced stage: ABVD or A+AVD (brentuximab vedotin)
- Cure rates: 80-90%`,
      keyTerms: [
        { term: 'Reed-Sternberg cell', definition: 'Large binucleated cells with "owl eyes" appearance, diagnostic of classical HL' },
        { term: 'B symptoms', definition: 'Fever, night sweats, weight loss >10%; indicate more advanced disease' },
        { term: 'ABVD', definition: 'Chemotherapy regimen: Adriamycin, bleomycin, vinblastine, dacarbazine' },
        { term: 'Ann Arbor staging', definition: 'Staging system for lymphomas based on nodal involvement' },
      ],
      analogies: [
        'Reed-Sternberg cells are like corrupt mayors in a small town (the tumor mass) - few in number but causing all the trouble, while most residents (inflammatory cells) react to them.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hodgkin lymphoma management requires risk-adapted therapy balancing cure rates against long-term toxicity, with PET-guided treatment and novel agents improving outcomes.',
      explanation: `## Overview

Hodgkin lymphoma is highly curable but treatment carries risk of significant late effects, driving PET-adapted strategies.

## Epidemiology
- Bimodal age distribution: 15-35 years, >55 years
- Incidence: 2-3/100,000
- Higher in males

## Classification (WHO)

**Classical Hodgkin Lymphoma:**
| Subtype | Frequency | Features |
|---------|-----------|----------|
| Nodular sclerosis | 70% | Mediastinal mass, young women |
| Mixed cellularity | 20% | EBV+, older patients |
| Lymphocyte-rich | 5% | Best prognosis |
| Lymphocyte-depleted | <5% | Worst prognosis, HIV-associated |

**Nodular Lymphocyte-Predominant HL:**
- "Popcorn" or LP cells
- CD20+, CD15-, CD30-
- Indolent course
- May transform to DLBCL

## Diagnosis

**Pathology:**
- Excisional biopsy required
- Classic RS cells: CD15+, CD30+, CD20-, CD45-
- Background: Lymphocytes, eosinophils, plasma cells, fibrosis

**Staging Workup:**
- PET-CT (standard)
- CT chest/abdomen/pelvis
- Bone marrow biopsy (if PET negative)
- Labs: CBC, LDH, ESR, albumin, HIV

**Prognostic Factors (Advanced Stage - IPS):**
- Male sex
- Age ≥45
- Stage IV
- Hemoglobin <10.5
- WBC ≥15,000
- Lymphocyte <600 or <8%
- Albumin <4

## Treatment

**Early Stage Favorable:**
- ABVD x 2 cycles + IFRT (20 Gy)
- Or ABVD x 4 cycles (radiation-free approach)

**Early Stage Unfavorable:**
- ABVD x 4-6 cycles +/- IFRT
- Or escalated BEACOPP x 2 + ABVD x 2

**Advanced Stage:**
- A+AVD (brentuximab + AVD) x 6 - standard
- Or ABVD x 6 cycles
- Avoid bleomycin (A+AVD) - less pulmonary toxicity

**PET-Adapted Therapy:**
- Interim PET after 2 cycles
- PET-negative: May de-escalate (omit bleomycin, reduce cycles)
- PET-positive: May escalate (BEACOPP)

## Relapsed/Refractory

**Second Line:**
- Salvage chemotherapy (ICE, DHAP, GDP)
- High-dose chemotherapy + autologous stem cell transplant
- 50% cure rate in relapse

**Beyond Second Line:**
- Brentuximab vedotin (anti-CD30 ADC)
- Checkpoint inhibitors (nivolumab, pembrolizumab)
- Allogeneic transplant`,
      keyTerms: [
        { term: 'IPS', definition: 'International Prognostic Score; 7-factor model for advanced HL prognosis' },
        { term: 'BEACOPP', definition: 'Intensive regimen: bleomycin, etoposide, doxorubicin, cyclophosphamide, vincristine, procarbazine, prednisone' },
        { term: 'brentuximab vedotin', definition: 'Anti-CD30 antibody-drug conjugate active in HL' },
        { term: 'interim PET', definition: 'PET scan after 2 cycles to assess early response and guide therapy' },
      ],
      clinicalNotes: 'Bleomycin pulmonary toxicity is a major concern. Avoid supplemental O2, monitor DLCO. A+AVD eliminates bleomycin while maintaining efficacy.',
    },
    4: {
      level: 4,
      summary: 'Hodgkin lymphoma treatment balances high cure rates against late effects through risk-adapted PET-guided therapy, with checkpoint inhibitors transforming relapsed disease management.',
      explanation: `## Pathobiology

**Reed-Sternberg Cell Origin:**
- Derived from germinal center B cells
- Crippled B cells with non-functional BCR
- Should undergo apoptosis but rescued by:
  - NF-kB activation
  - JAK-STAT signaling
  - EBV (if present)

**Immune Evasion:**
- PD-L1 overexpression (9p24.1 amplification)
- Creates immunosuppressive microenvironment
- Rationale for checkpoint inhibitor efficacy

**EBV Association:**
- ~40% of cases in Western countries
- >90% in immunocompromised
- LMP1 activates NF-kB

## PET-Adapted Strategies

**Deauville Criteria:**
| Score | Definition |
|-------|------------|
| 1 | No uptake |
| 2 | ≤ mediastinum |
| 3 | > mediastinum, ≤ liver |
| 4 | > liver (moderate) |
| 5 | > liver (markedly) or new lesions |

- Deauville 1-3: PET-negative (good response)
- Deauville 4-5: PET-positive (poor response)

**Clinical Application:**
- RAPID trial: PET-negative after 3 ABVD → omit radiation
- RATHL trial: PET-negative after 2 ABVD → omit bleomycin
- GHSG HD18: PET-negative after 2 BEACOPP → reduce to 4 total

## Frontline Treatment Details

**Early Favorable (GHSG):**
- 2 ABVD + 20 Gy IFRT (standard)
- Alternative: 4 ABVD (no radiation)
- Excellent PFS either approach

**Early Unfavorable:**
- Risk factors: Large mediastinal mass, extranodal, ESR elevated, >3 sites
- 4-6 ABVD +/- IFRT
- Or 2 eBEACOPP + 2 ABVD + IFRT

**Advanced Stage:**
- A+AVD x 6 (ECHELON-1): Superior PFS vs ABVD
- Primary G-CSF required
- Lower pulmonary toxicity (no bleomycin)
- Alternative: ABVD x 6 (cost considerations)

## Late Effects

**Cardiovascular:**
- Coronary artery disease
- Valvular disease
- Cardiomyopathy (anthracyclines)
- Risk: Mediastinal radiation + doxorubicin

**Secondary Malignancies:**
- Breast cancer (radiation field)
- Lung cancer (radiation + smoking)
- Leukemia (alkylators, etoposide)
- NHL transformation

**Pulmonary:**
- Bleomycin pneumonitis
- Radiation fibrosis

**Other:**
- Thyroid dysfunction
- Infertility
- Hypothyroidism

## Relapsed/Refractory Management

**Salvage + ASCT:**
- ICE, DHAP, GDP, GVD
- Goal: Chemosensitive disease
- BEAM conditioning
- 50% long-term survival

**Brentuximab Vedotin:**
- Post-ASCT maintenance (AETHERA): Improved PFS
- R/R disease: 75% ORR, 34% CR

**Checkpoint Inhibitors:**
- Nivolumab, pembrolizumab
- ORR 65-70%
- PFS ~15 months
- Approved for post-ASCT and post-BV

**Allogeneic HCT:**
- For relapse post-ASCT
- Reduced intensity preferred
- Graft-vs-lymphoma effect`,
      keyTerms: [
        { term: 'Deauville criteria', definition: '5-point scale for PET response assessment in lymphoma' },
        { term: 'A+AVD', definition: 'Brentuximab vedotin + AVD (no bleomycin); standard for advanced HL' },
        { term: '9p24.1 amplification', definition: 'Genetic alteration leading to PD-L1 overexpression in HL' },
        { term: 'AETHERA', definition: 'Trial showing brentuximab maintenance benefit post-ASCT in high-risk HL' },
      ],
      clinicalNotes: 'Survivors need lifelong surveillance for late effects. Annual mammography starting 8 years post-radiation (or age 40) for chest radiation recipients. CV risk factor management essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary Hodgkin lymphoma management optimizes cure while minimizing toxicity through PET-adapted therapy, novel frontline combinations, and checkpoint immunotherapy.',
      explanation: `## Precision Medicine in HL

**Biomarkers:**
- Interim PET (Deauville score)
- ctDNA for MRD (emerging)
- TME characteristics (research)

**Risk Stratification:**
- Early vs advanced stage
- Favorable vs unfavorable features
- PET response (most important)

## Treatment Optimization Strategies

**Frontline Advanced HL:**

*ECHELON-1 (A+AVD vs ABVD):*
- A+AVD: 6-year PFS 82% vs 75%
- OS benefit in Stage IV
- Requires G-CSF prophylaxis
- Standard of care

*Alternative Approaches:*
- ABVD with interim PET de-escalation
- BEACOPP then step-down (German approach)
- Escalation if PET+ (less used)

**Early Stage Optimization:**

*Radiation Omission:*
- RAPID, H10, EORTC trials
- PET-negative after chemo: Radiation may be omitted
- Trade-off: Slightly higher relapse, fewer late effects

*Chemotherapy Reduction:*
- PET-adapted cycles
- Goal: Minimum effective therapy

## Checkpoint Inhibitors in HL

**Mechanism:**
- HL uniquely sensitive due to 9p24.1 amplification
- PD-L1/PD-L2 overexpression
- High tumor-infiltrating lymphocytes

**Clinical Results:**
- CheckMate 205 (nivolumab): ORR 69%, CR 16%
- KEYNOTE-087 (pembrolizumab): ORR 69%, CR 22%
- Duration of response: Median 16-18 months
- Some patients with prolonged responses

**Frontline Investigation:**
- Nivo + AVD (CheckMate 812): Promising
- Pembro + ABVD/AVD: Under study
- May replace brentuximab-based approaches

## Nodular Lymphocyte-Predominant HL

**Biology:**
- CD20+, CD15-, CD30-
- Origin: Germinal center B cell
- May transform to DLBCL

**Management:**
- Stage IA: ISRT alone (if limited)
- Advanced: Rituximab +/- chemo
- Observation if asymptomatic

## Special Populations

**HIV-Associated:**
- Full-dose ABVD with ART
- Brentuximab-based regimens safe
- Similar outcomes to HIV-negative if CD4 adequate

**Elderly (>60 years):**
- ABVD feasible, bleomycin concern
- Consider A+AVD or AVD without bleomycin
- PET-adapted approach

**Pregnancy:**
- Delay treatment if possible (late pregnancy)
- ABVD in 2nd/3rd trimester if urgent
- Avoid radiation until postpartum

## Late Effects Surveillance

**Cardiovascular:**
- Echo/stress test every 5-10 years
- Aggressive risk factor management
- Screening starting 5-10 years post-treatment

**Secondary Malignancies:**
- Breast: Annual screening starting 8 years or age 40
- Lung: CT screening in smokers
- Thyroid: Annual exam, TSH
- Skin: Regular dermatology

**Fertility:**
- Pre-treatment counseling
- Sperm/egg banking
- ABVD: Usually preserves fertility
- BEACOPP: Higher infertility risk

## Emerging Therapies

**CD30-Directed:**
- Next-gen CD30 CAR-T
- Bispecific antibodies

**Novel Combinations:**
- Checkpoint inhibitor + chemotherapy
- BV + checkpoint inhibitor
- Reduced chemotherapy approaches

**ctDNA Monitoring:**
- Emerging for response assessment
- May complement PET
- MRD detection`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; emerging biomarker for MRD detection in lymphoma' },
        { term: 'TME', definition: 'Tumor microenvironment; reactive cells surrounding RS cells' },
        { term: 'ISRT', definition: 'Involved-site radiation therapy; modern targeted radiation approach' },
        { term: 'CheckMate 205', definition: 'Key trial establishing nivolumab efficacy in relapsed HL' },
      ],
      clinicalNotes: `**Board Pearls:**
- Reed-Sternberg cells: CD15+, CD30+, CD20-, "owl eyes"
- Nodular sclerosis = most common, young women, mediastinal mass
- A+AVD is standard for advanced HL (ECHELON-1)
- PET response is most important prognostic factor
- 9p24.1 amplification explains checkpoint inhibitor sensitivity
- Late effects mandate lifelong surveillance
- NLPHL: CD20+, may use rituximab, can transform to DLBCL`,
    },
  },

  media: [
    {
      id: 'reed-sternberg',
      type: 'histology',
      filename: 'reed-sternberg-cells.jpg',
      title: 'Reed-Sternberg Cells',
      description: 'Classic binucleated RS cells with "owl eyes" appearance',
    },
  ],

  citations: [
    {
      id: 'ansell-2018',
      type: 'article',
      title: 'Hodgkin Lymphoma',
      authors: ['Ansell SM'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1706961',
    },
  ],

  crossReferences: [
    { targetId: 'condition-non-hodgkin-lymphoma', targetType: 'condition', relationship: 'related', label: 'Non-Hodgkin Lymphoma' },
    { targetId: 'condition-dlbcl', targetType: 'condition', relationship: 'related', label: 'DLBCL' },
  ],

  tags: {
    systems: ['hematologic', 'lymphatic'],
    topics: ['lymphoma', 'oncology', 'hematologic malignancy'],
    keywords: ['Hodgkin', 'Reed-Sternberg', 'ABVD', 'checkpoint inhibitor'],
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

export default hodgkinLymphoma;
