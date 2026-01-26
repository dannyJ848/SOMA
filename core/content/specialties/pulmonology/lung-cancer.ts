/**
 * Lung Cancer - Comprehensive Educational Content
 *
 * Covers non-small cell and small cell lung cancer, staging, molecular
 * testing, targeted therapy, immunotherapy, and management approaches.
 */

import { EducationalContent } from '../../types';

export const lungCancer: EducationalContent = {
  id: 'condition-lung-cancer',
  type: 'condition',
  name: 'Lung Cancer',
  alternateNames: ['Bronchogenic Carcinoma', 'NSCLC', 'SCLC', 'Pulmonary Malignancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Lung cancer is when cells in the lungs grow out of control, forming tumors that can spread to other parts of the body. Smoking is the main cause.',
      explanation: `**What is Lung Cancer?**

Normally, cells in your body grow, divide, and die in an orderly way. Cancer happens when cells start growing out of control. In lung cancer, this uncontrolled growth starts in the cells lining the airways or air sacs of the lungs.

**Why is lung cancer serious?**
- It's the leading cause of cancer death worldwide
- By the time symptoms appear, it's often already advanced
- It can spread to other parts of the body (metastasize)

**Types of lung cancer:**
1. **Non-small cell lung cancer (NSCLC):** Most common (85%)
   - Grows slower than small cell
   - Several subtypes
2. **Small cell lung cancer (SCLC):** Less common (15%)
   - Grows very fast
   - Often has spread by the time it's found

**What causes lung cancer?**
- **Smoking:** Causes about 80-90% of lung cancers
- **Secondhand smoke:** Increases risk even for non-smokers
- **Radon gas:** A natural radioactive gas that can build up in homes
- **Asbestos and other toxins:** Workplace exposures
- **Family history:** Some risk is inherited

**Warning signs (often appear late):**
- Cough that won't go away or gets worse
- Coughing up blood (even small amounts)
- Shortness of breath
- Chest pain that gets worse with breathing or coughing
- Hoarseness
- Losing weight without trying
- Feeling very tired
- Frequent lung infections

**Diagnosis:**
- Chest X-ray or CT scan to find tumors
- Biopsy (taking a small piece of tissue) to confirm cancer
- PET scan to see if cancer has spread

**Treatment depends on the type and stage:**
- Surgery to remove the tumor (early stages)
- Radiation therapy
- Chemotherapy
- Newer treatments that target specific cancer changes
- Immunotherapy that helps your immune system fight cancer

**Prevention:**
- Don't smoke or quit if you do
- Avoid secondhand smoke
- Test your home for radon
- Screening CT scans for high-risk people (long-term smokers)`,
      keyTerms: [
        { term: 'tumor', definition: 'An abnormal mass of cells; can be benign (not cancer) or malignant (cancer)' },
        { term: 'metastasize', definition: 'When cancer cells spread from where they started to other parts of the body', pronunciation: 'meh-TAS-tah-size' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to look at under a microscope', pronunciation: 'BY-op-see' },
        { term: 'chemotherapy', definition: 'Medicines that kill cancer cells or stop them from growing' },
      ],
      analogies: [
        'Cancer is like a dandelion spreading seeds - if you catch it early, you can remove it, but if the seeds spread, it\'s much harder to control.',
        'Normal cells follow traffic rules; cancer cells run every red light and cause chaos.',
      ],
      examples: [
        'A 60-year-old who smoked for 30 years and develops a persistent cough with blood-tinged mucus.',
        'A person who never smoked but was exposed to asbestos at work for 20 years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lung cancer is primarily classified as non-small cell (adenocarcinoma, squamous, large cell) or small cell, with staging determining treatment approach from surgical resection to systemic therapy.',
      explanation: `## Classification

### Non-Small Cell Lung Cancer (NSCLC) - 85%

**Adenocarcinoma (40%):**
- Most common subtype
- Arises from glandular cells
- Often in outer (peripheral) parts of lung
- Most common type in non-smokers
- Associated with driver mutations (EGFR, ALK, etc.)

**Squamous Cell Carcinoma (25-30%):**
- Arises from bronchial epithelium
- Centrally located (near airways)
- Strongly associated with smoking
- May cause cavitary lesions
- Can produce parathyroid hormone-related protein (hypercalcemia)

**Large Cell Carcinoma (10%):**
- Undifferentiated
- Can occur anywhere in lung
- Aggressive, poor prognosis
- Diagnosis of exclusion

### Small Cell Lung Cancer (SCLC) - 15%

- Neuroendocrine tumor
- Almost exclusively in smokers
- Centrally located
- Very aggressive, fast growing
- Often metastatic at diagnosis
- Responds to chemotherapy initially, then relapses
- Associated with paraneoplastic syndromes

## Risk Factors

**Strong risk factors:**
- Cigarette smoking (15-30x increased risk)
- Radon exposure (second leading cause)
- Occupational exposures (asbestos, arsenic, chromium)
- Personal/family history of lung cancer

**Moderate risk factors:**
- Air pollution
- Pulmonary fibrosis
- HIV infection
- Prior radiation to chest

**Lung cancer in never-smokers:**
- 10-15% of cases
- More common in women
- Often adenocarcinoma
- Higher rate of targetable mutations (EGFR, ALK)

## Clinical Presentation

### Local Symptoms
- Cough (new or changing)
- Hemoptysis
- Dyspnea
- Chest pain
- Recurrent pneumonia (post-obstructive)

### Regional Spread
- Hoarseness (recurrent laryngeal nerve)
- Superior vena cava syndrome (facial swelling, dilated neck veins)
- Horner syndrome (ptosis, miosis, anhidrosis)
- Pancoast tumor (shoulder/arm pain, Horner's)
- Dysphagia (esophageal compression)

### Metastatic Symptoms
- Brain: Headache, seizures, neurologic deficits
- Bone: Pain, pathologic fractures
- Liver: Hepatomegaly, elevated LFTs
- Adrenal: Often asymptomatic

### Paraneoplastic Syndromes
| Syndrome | Cancer Type | Mechanism |
|----------|-------------|-----------|
| Hypercalcemia | Squamous | PTHrP production |
| SIADH | SCLC | ADH production |
| Cushing's | SCLC | ACTH production |
| Lambert-Eaton | SCLC | Antibodies to calcium channels |
| Clubbing | Any | Unknown |

## Diagnosis

### Imaging
- **Chest X-ray:** May show mass, nodule, effusion
- **CT chest:** Characterizes tumor, nodes, invasion
- **PET scan:** Detects metabolic activity, helps staging
- **Brain MRI:** Staging for advanced disease or symptoms

### Tissue Diagnosis
Methods to obtain biopsy:
- Bronchoscopy with biopsy (central tumors)
- CT-guided needle biopsy (peripheral tumors)
- Thoracentesis (if pleural effusion)
- Mediastinoscopy (lymph node sampling)
- EBUS (endobronchial ultrasound)
- Surgical biopsy

## Staging

### NSCLC (TNM System)
**T (Tumor):**
- T1: ≤3 cm, surrounded by lung
- T2: 3-5 cm or involving main bronchus
- T3: 5-7 cm or invasion of chest wall
- T4: >7 cm or invasion of vital structures

**N (Nodes):**
- N0: No nodal involvement
- N1: Ipsilateral hilar nodes
- N2: Ipsilateral mediastinal nodes
- N3: Contralateral nodes or scalene/supraclavicular

**M (Metastases):**
- M0: No distant metastases
- M1: Distant metastases (including contralateral lung)

**Stage Groupings:**
| Stage | Description | 5-Year Survival |
|-------|-------------|-----------------|
| I | T1-2, N0 | 70-90% |
| II | T1-2 N1 or T3 N0 | 50-60% |
| III | Any T, N2-3, or T4 | 20-40% |
| IV | Any M1 | <10% |

### SCLC Staging
- **Limited stage:** Confined to one hemithorax (fits in one radiation field)
- **Extensive stage:** Beyond one hemithorax

## Treatment Overview

### NSCLC
**Stage I-II:**
- Surgery (lobectomy preferred)
- Adjuvant chemotherapy if high risk

**Stage III:**
- Multimodality: Chemoradiation ± surgery
- Immunotherapy consolidation (durvalumab)

**Stage IV:**
- Systemic therapy based on molecular testing
- Targeted therapy if driver mutation
- Immunotherapy if PD-L1 positive
- Chemotherapy

### SCLC
**Limited stage:**
- Chemotherapy + radiation (concurrent)
- Prophylactic cranial irradiation (PCI) if response

**Extensive stage:**
- Chemotherapy + immunotherapy
- Radiation for consolidation in responders`,
      keyTerms: [
        { term: 'adenocarcinoma', definition: 'Cancer arising from glandular cells; most common NSCLC subtype', pronunciation: 'AD-eh-no-car-sin-OH-ma' },
        { term: 'Pancoast tumor', definition: 'Lung cancer at the apex causing shoulder pain and Horner syndrome', pronunciation: 'PAN-coast' },
        { term: 'paraneoplastic syndrome', definition: 'Symptoms caused by substances the cancer produces, not direct tumor effects', pronunciation: 'PARE-ah-nee-oh-PLAS-tik' },
        { term: 'EBUS', definition: 'Endobronchial ultrasound; bronchoscopy with ultrasound to biopsy lymph nodes' },
        { term: 'PD-L1', definition: 'Programmed death-ligand 1; a protein that helps cancer evade the immune system; target for immunotherapy' },
      ],
      analogies: [
        'Staging is like determining how far a fire has spread - it tells us how to fight it.',
        'Paraneoplastic syndromes are like smoke signals - the tumor is sending messages throughout the body.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lung cancer treatment has been transformed by molecular profiling identifying actionable driver mutations (EGFR, ALK, ROS1, KRAS, etc.) and immune checkpoint inhibitors, enabling precision oncology approaches for advanced NSCLC.',
      explanation: `## Molecular Pathology

### Driver Mutations in NSCLC

**EGFR Mutations (15-20% in Caucasians, 50% in Asian adenocarcinoma):**
- Activating mutations in tyrosine kinase domain
- Most common: Exon 19 deletion, L858R (exon 21)
- Treatment: EGFR TKIs (osimertinib first-line)
- Resistance: T790M mutation (covered by osimertinib)

**ALK Rearrangements (3-5%):**
- EML4-ALK fusion most common
- Young, light/never smokers
- Treatment: ALK TKIs (alectinib, brigatinib, lorlatinib)

**ROS1 Rearrangements (1-2%):**
- Similar to ALK biology
- Treatment: Crizotinib, entrectinib

**KRAS Mutations (25-30%):**
- G12C most common targetable mutation
- Treatment: Sotorasib, adagrasib

**Other Targetable Mutations:**
| Mutation | Frequency | Treatment |
|----------|-----------|-----------|
| BRAF V600E | 1-3% | Dabrafenib + trametinib |
| MET exon 14 | 3% | Capmatinib, tepotinib |
| RET | 1-2% | Selpercatinib, pralsetinib |
| NTRK | <1% | Larotrectinib, entrectinib |
| HER2 | 2-4% | Trastuzumab deruxtecan |

### Molecular Testing Recommendations

**Who to test:** All patients with advanced NSCLC (especially non-squamous)

**What to test:**
- EGFR, ALK, ROS1, BRAF, KRAS G12C, MET ex14, RET, NTRK
- Next-generation sequencing (NGS) preferred
- PD-L1 immunohistochemistry

**Sample requirements:**
- Tissue biopsy (preferred)
- Liquid biopsy (ctDNA) if tissue unavailable or insufficient

### PD-L1 Expression

**Tumor Proportion Score (TPS):**
- <1%: Low/negative
- 1-49%: Positive
- ≥50%: High expression

**Implications:**
- High PD-L1 → May use single-agent immunotherapy
- Low PD-L1 → Combination chemo-immunotherapy
- Driver mutation positive → Targeted therapy first (immunotherapy less effective)

## Staging Workup

### Diagnostic Evaluation

**Tissue diagnosis:**
- Bronchoscopy with EBUS for central tumors/nodal disease
- CT-guided biopsy for peripheral lesions
- Thoracentesis if malignant effusion
- Mediastinoscopy or thoracoscopic biopsy if needed

**Staging imaging:**
- CT chest/abdomen (liver, adrenals)
- PET-CT (standard for staging)
- Brain MRI (all Stage III-IV, symptoms, or surgical candidate)

### PET Interpretation

**SUV (Standardized Uptake Value):**
- SUV >2.5 concerning for malignancy
- False positives: Infection, inflammation
- False negatives: Small lesions, low-grade tumors

**Nodal staging:**
- Negative PET does not exclude N2/N3 disease
- Pathologic confirmation required before surgery for PET-positive nodes

### Invasive Mediastinal Staging

**Indications:**
- Central tumor or nodal enlargement
- PET-positive nodes (confirm before surgery)
- Suspicion of N2/N3 disease

**Methods:**
- EBUS-TBNA (endobronchial)
- EUS-FNA (esophageal)
- Mediastinoscopy (gold standard)

## Treatment by Stage

### Stage I NSCLC

**Surgery:** Lobectomy with mediastinal lymph node dissection
- Video-assisted thoracoscopic surgery (VATS) or robotic preferred
- Segmentectomy for small tumors (<2cm) or poor pulmonary reserve

**Non-surgical candidates:**
- Stereotactic body radiation therapy (SBRT)
- Excellent local control (90%+)

**Adjuvant therapy:**
- Stage IB (>4cm): Consider adjuvant chemotherapy
- Osimertinib adjuvant if EGFR-mutant

### Stage II NSCLC

**Surgery:** Lobectomy + node dissection

**Adjuvant therapy:**
- Chemotherapy (cisplatin-based doublet) x 4 cycles
- Osimertinib if EGFR-mutant
- Atezolizumab if PD-L1 ≥1% (IMpower010)

### Stage III NSCLC

**Resectable (limited N2):**
- Neoadjuvant chemoimmunotherapy (CheckMate 816)
- Surgery
- Adjuvant therapy as indicated

**Unresectable:**
- Concurrent chemoradiation (60 Gy)
- Durvalumab consolidation x 1 year (PACIFIC trial)

### Stage IV NSCLC

**With driver mutation:**
| Mutation | First-line | Sequence |
|----------|------------|----------|
| EGFR | Osimertinib | Platinum doublet on progression |
| ALK | Alectinib or lorlatinib | Next-gen ALK TKI → chemo |
| ROS1 | Entrectinib/crizotinib | Lorlatinib → chemo |
| KRAS G12C | Sotorasib/adagrasib | Chemo-IO |
| BRAF V600E | Dabrafenib + trametinib | Chemo-IO |

**Without driver mutation:**
| PD-L1 | Treatment Options |
|-------|-------------------|
| ≥50% | Pembrolizumab monotherapy OR chemo + pembrolizumab |
| 1-49% | Chemo + pembrolizumab |
| <1% | Chemo + pembrolizumab OR chemo + nivolumab + ipilimumab |

### SCLC Treatment

**Limited stage:**
- Concurrent chemotherapy (cisplatin + etoposide) + thoracic radiation
- If complete response: Prophylactic cranial irradiation (PCI)
- Survival: Median 15-20 months

**Extensive stage:**
- Chemotherapy + immunotherapy
- Platinum + etoposide + atezolizumab (IMpower133) OR durvalumab (CASPIAN)
- PCI or MRI surveillance
- Survival: Median 12-15 months

## Supportive Care

### Symptom Management
- Dyspnea: Bronchodilators, oxygen, opioids
- Pain: Opioids, radiation for bone mets
- Malignant effusion: Thoracentesis, pleurodesis, indwelling catheter
- Airway obstruction: Stenting, laser, radiation

### Palliative Care
- Early integration improves quality of life and survival
- Address goals of care
- Symptom management
- Hospice referral when appropriate`,
      keyTerms: [
        { term: 'TKI', definition: 'Tyrosine kinase inhibitor; targeted therapy blocking specific driver mutations in cancer cells' },
        { term: 'NGS', definition: 'Next-generation sequencing; comprehensive molecular profiling to identify actionable mutations' },
        { term: 'liquid biopsy', definition: 'Blood test detecting circulating tumor DNA (ctDNA) for molecular testing when tissue unavailable' },
        { term: 'SBRT', definition: 'Stereotactic body radiation therapy; high-dose, precisely targeted radiation for early-stage inoperable lung cancer' },
        { term: 'PACIFIC trial', definition: 'Landmark study showing durvalumab consolidation after chemoradiation improves survival in Stage III NSCLC' },
        { term: 'checkpoint inhibitor', definition: 'Immunotherapy blocking PD-1/PD-L1 pathway to restore anti-tumor immune response' },
      ],
      clinicalNotes: 'Never start first-line therapy for advanced non-squamous NSCLC without molecular testing results. Osimertinib is now standard for EGFR-mutant (including adjuvant). Durvalumab maintenance is standard after chemoradiation for unresectable Stage III.',
    },
    4: {
      level: 4,
      summary: 'Lung cancer therapy is increasingly guided by molecular alterations and immune biomarkers, with combination strategies, perioperative immunotherapy, and novel targeted agents transforming outcomes across stages.',
      explanation: `## Molecular Biology and Resistance

### EGFR Biology

**Mutation landscape:**
- Exon 19 del (45%): Better prognosis
- L858R (40%): Good response but slightly worse than exon 19
- Exon 20 insertions (10%): Generally resistant to standard TKIs

**Resistance mechanisms to osimertinib:**
| Mechanism | Frequency | Approach |
|-----------|-----------|----------|
| C797S mutation | 10-15% | 4th-gen TKI trials |
| MET amplification | 15-20% | Combo with MET inhibitor |
| Small cell transformation | 5-10% | Chemotherapy |
| Histologic transformation | Variable | Based on new histology |
| Off-target (bypass) | Variable | Combo or new target |

**EGFR exon 20 insertions:**
- Amivantamab (EGFR-MET bispecific antibody)
- Mobocertinib (exon 20-selective TKI)

### ALK Biology

**ALK TKI generations:**
| Generation | Examples | Characteristics |
|------------|----------|-----------------|
| 1st | Crizotinib | First-in-class, CNS penetration limited |
| 2nd | Alectinib, brigatinib, ceritinib | Better CNS activity, standard first-line |
| 3rd | Lorlatinib | Overcomes most resistance mutations |

**Sequential therapy:**
- 2nd-gen TKI first-line (alectinib preferred)
- Lorlatinib at progression
- Chemotherapy when TKIs exhausted

### KRAS G12C

**Sotorasib:**
- First FDA-approved KRAS inhibitor
- Covalent inhibitor of GDP-bound KRAS G12C
- ORR ~37% second-line, median PFS ~6 months

**Adagrasib:**
- Similar mechanism
- Longer half-life
- CNS activity

**Resistance mechanisms:**
- Secondary KRAS mutations
- Bypass pathway activation
- Combinations under investigation

### Novel Targets and Therapies

**HER2 alterations:**
- HER2 mutations (not amplification)
- Trastuzumab deruxtecan (T-DXd): ORR ~55%
- Poziotinib: HER2-selective TKI

**MET amplification:**
- Capmatinib, tepotinib, crizotinib
- May be primary driver or resistance mechanism

**KRASG12D:**
- Not yet druggable with approved agents
- MRTX1133 in development

## Immunotherapy Integration

### Biomarkers Beyond PD-L1

**Tumor Mutational Burden (TMB):**
- High TMB correlates with IO response
- Cutoff: ≥10 mutations/megabase
- Not universally used for treatment selection

**STK11/KEAP1 mutations:**
- Associated with IO resistance
- May guide toward chemotherapy combinations

**Microsatellite instability (MSI):**
- Rare in lung cancer
- If MSI-high, pembrolizumab approved

### First-Line Combinations

**Driver negative, PD-L1 ≥50%:**
- Pembrolizumab monotherapy (KEYNOTE-024)
- OR Chemo + pembrolizumab if bulky disease, rapid progression needed

**Driver negative, PD-L1 <50%:**
| Regimen | Trial | Median OS |
|---------|-------|-----------|
| Chemo + pembrolizumab | KEYNOTE-189 | 22 months |
| Chemo + nivolumab + ipilimumab | CheckMate 9LA | 15.6 months |
| Chemo + atezolizumab + bevacizumab | IMpower150 | 19 months (if EGFR/ALK+) |

### Perioperative Immunotherapy

**Neoadjuvant:**
- CheckMate 816: Nivolumab + chemo → surgery
- pCR rate 24% vs 2% (chemo alone)
- EFS benefit in Stage IB-IIIA

**Adjuvant:**
- IMpower010: Atezolizumab after chemo in Stage II-IIIA with PD-L1 ≥1%
- KEYNOTE-091: Pembrolizumab regardless of PD-L1 (all Stage IB-IIIA)

**Perioperative:**
- AEGEAN: Neoadjuvant + adjuvant durvalumab
- KEYNOTE-671: Perioperative pembrolizumab

### Resistance and Sequencing

**After first-line IO progression:**
- No second-line IO approved
- Docetaxel + ramucirumab
- Targeted therapy if actionable mutation found

**Hyperprogression:**
- Rare, but can occur with IO
- Rapid disease acceleration
- Switch to chemotherapy

## Special Scenarios

### Brain Metastases

**Prevalence:** 10% at diagnosis, 40% during course

**Management:**
- Small number (≤4): Stereotactic radiosurgery (SRS)
- Multiple/larger: Whole brain radiation (WBRT)
- Systemic therapy considerations:
  - Osimertinib: Excellent CNS penetration
  - Lorlatinib: Designed for CNS activity
  - Immunotherapy: Variable CNS efficacy

**Leptomeningeal disease:**
- Poor prognosis
- Intrathecal chemotherapy
- High-dose EGFR/ALK TKIs

### Oligometastatic Disease

**Definition:** Limited metastatic burden (≤3-5 sites)

**Approach:**
- Local ablative therapy (SBRT, surgery) to all sites
- Continue systemic therapy
- Potential for prolonged disease-free intervals

**Evidence:**
- SINDAS trial: EGFR-mutant, synchronous oligo
- Multiple randomized trials ongoing

### NSCLC with Targetable Mutation + High PD-L1

**Challenge:** Both targeted therapy and IO are options

**Guidance:**
- Always prioritize targeted therapy
- IO less effective in driver-positive NSCLC
- IO after TKI exhaustion may still benefit

### Acquired Resistance Workup

**Re-biopsy or liquid biopsy:**
- Identify resistance mechanism
- Guide next-line therapy

**Common findings:**
| Original | Resistance Finding | Next Step |
|----------|-------------------|-----------|
| EGFR TKI | T790M | Osimertinib (if not prior) |
| EGFR TKI | MET amp | Add MET inhibitor |
| EGFR TKI | SCLC transformation | Chemo |
| ALK TKI | Specific mutation | Lorlatinib or ALK TKI with activity |

## Lung Cancer Screening

### LDCT Screening Criteria (USPSTF)
- Age 50-80 years
- ≥20 pack-year smoking history
- Current smoker or quit within past 15 years

### Implementation
- Annual low-dose CT
- Shared decision-making
- Smoking cessation counseling
- Management of screen-detected nodules per Lung-RADS

### Benefits and Risks
**Benefits:** 20% mortality reduction (NLST), 24% (NELSON)
**Risks:** False positives, radiation, overdiagnosis`,
      keyTerms: [
        { term: 'pCR', definition: 'Pathologic complete response; no viable tumor found in surgical specimen after neoadjuvant therapy' },
        { term: 'TMB', definition: 'Tumor mutational burden; number of mutations per megabase, correlates with immunotherapy response' },
        { term: 'bispecific antibody', definition: 'Antibody engineered to bind two different targets simultaneously (e.g., EGFR and MET)' },
        { term: 'oligometastatic', definition: 'Limited metastatic disease (≤3-5 sites) potentially amenable to local ablative therapy' },
        { term: 'SRS', definition: 'Stereotactic radiosurgery; precise, high-dose radiation to small targets, often used for brain metastases' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; tumor-derived DNA in blood used for molecular profiling and monitoring' },
      ],
      clinicalNotes: 'At progression on targeted therapy, always pursue re-biopsy or liquid biopsy to identify resistance mechanism. Perioperative immunotherapy is now standard for resectable NSCLC - discuss with multidisciplinary tumor board. Brain MRI is mandatory staging for all Stage III-IV NSCLC.',
    },
    5: {
      level: 5,
      summary: 'Contemporary lung cancer management requires integrated molecular diagnostics, understanding of resistance biology, perioperative strategies, and precision sequencing to optimize outcomes across the therapeutic continuum.',
      explanation: `## Precision Oncology Framework

### Comprehensive Molecular Profiling

**Minimum testing panel:**
- EGFR (including exon 20 insertions)
- ALK, ROS1, RET rearrangements
- KRAS G12C, BRAF V600E
- MET exon 14 skipping, MET amplification
- NTRK fusions
- PD-L1 IHC

**Extended NGS panels:**
- Whole exome sequencing identifies additional alterations
- RNA sequencing improves fusion detection
- TMB calculation
- Homologous recombination deficiency

**Liquid biopsy integration:**
| Setting | Application |
|---------|-------------|
| Initial diagnosis | When tissue insufficient |
| Monitoring | Response assessment, MRD |
| Progression | Resistance mechanism |
| Real-time | Rapid turnaround while awaiting tissue |

### Molecular Residual Disease (MRD)

**ctDNA-based MRD:**
- Detects minimal residual disease post-surgery
- Predicts recurrence months before imaging
- May guide adjuvant therapy intensity

**Clinical trials:**
- MERMAID-1, -2: Durvalumab for ctDNA+ after curative-intent treatment
- Personalized assays (tumor-informed) vs fixed panels

### Emerging Targets

**Antibody-drug conjugates (ADCs):**
| ADC | Target | Efficacy |
|-----|--------|----------|
| Trastuzumab deruxtecan | HER2 | ORR 55% in HER2-mutant |
| Patritumab deruxtecan | HER3 | Under investigation |
| Dato-DXd | TROP2 | Phase 3 trials ongoing |

**Bispecific antibodies:**
- Amivantamab: EGFR + MET
  - Exon 20 insertions
  - Combination with lazertinib (EGFR TKI)
- Tarlatamab: DLL3 × CD3 (for SCLC)
  - BiTE engaging T cells
  - ORR ~40% in relapsed SCLC

**Cell therapy:**
- TIL therapy in investigation
- CAR-T for lung cancer early phase
- Challenges: Solid tumor microenvironment

## Stage-Specific Management Updates

### Early-Stage Neoadjuvant/Adjuvant

**Neoadjuvant chemo-IO paradigm:**
| Trial | Regimen | pCR | EFS HR |
|-------|---------|-----|--------|
| CheckMate 816 | Nivo + chemo | 24% | 0.63 |
| KEYNOTE-671 | Pembro + chemo (peri-op) | 18% | 0.58 |
| AEGEAN | Durva + chemo (peri-op) | 17% | 0.68 |

**Patient selection:**
- Stage II-IIIA (and selected IB)
- Resectable disease
- Adequate performance status
- Tumor PD-L1 testing (informs decision)
- Exclude actionable driver mutations (EGFR, ALK)

**EGFR-mutant adjuvant:**
- ADAURA trial: Osimertinib × 3 years
- DFS improvement (HR 0.17)
- OS benefit confirmed (HR 0.49)
- Standard of care for EGFR-mutant Stage IB-IIIA

### Stage III Management

**Unresectable, concurrent chemo-radiation:**
- PACIFIC regimen standard
- Durvalumab × 12 months consolidation
- 5-year OS: 42.9% vs 33.4%

**Predictive factors:**
- PD-L1 ≥1%: Greater durvalumab benefit
- Complete radiation: Better outcomes

**Potentially resectable N2:**
- Consider neoadjuvant chemo-IO
- Surgery if good response
- vs Definitive chemoradiation + durvalumab
- Multidisciplinary tumor board discussion

### Stage IV Precision Sequencing

**Driver-positive paradigm:**
\`\`\`
First-line: Targeted TKI
    ↓ Progression
Re-biopsy / liquid biopsy
    ↓
Identify resistance mechanism
    ↓
┌─────────────────┬─────────────────────────┐
│ On-target       │ Bypass pathway          │
│ (e.g., C797S)   │ (e.g., MET amp)         │
│     ↓           │         ↓               │
│ Next-gen TKI    │ Combination or switch   │
└─────────────────┴─────────────────────────┘
    ↓
Chemo-IO when targeted options exhausted
\`\`\`

**Driver-negative paradigm:**
\`\`\`
First-line: Chemo + IO (pembrolizumab preferred)
    ↓ Progression
Second-line: Docetaxel ± ramucirumab
    ↓
Third-line: Clinical trial or best supportive care
\`\`\`

### SCLC Updates

**Limited stage:**
- Concurrent chemo-RT remains standard
- PCI if complete response (survival benefit)
- MRI surveillance alternative to PCI (controversial)

**Extensive stage:**
- First-line: Platinum-etoposide + atezolizumab (IMpower133) or durvalumab (CASPIAN)
- Thoracic consolidation RT in responders
- Second-line: Topotecan, lurbinectedin
- Emerging: Tarlatamab (DLL3 × CD3 BiTE)

## Resistance and Therapeutic Sequencing

### EGFR Resistance Landscape

**Osimertinib first-line resistance:**
| Mechanism | Frequency | Management |
|-----------|-----------|------------|
| MET amplification | 15-20% | Osimertinib + savolitinib/capmatinib |
| C797X | 10-15% | 4th-gen TKI trials |
| SCLC transformation | 5-10% | Platinum-etoposide |
| Off-target (various) | 30-40% | Targeted combo or chemo |
| Unknown | 20-30% | Chemo-IO or clinical trial |

**Investigational strategies:**
- Amivantamab + lazertinib (MARIPOSA trial)
- Osimertinib combinations (SAVANNAH, TATTON)

### ALK Resistance

**ALK TKI selection based on mutation:**
| Resistance Mutation | Active TKI |
|---------------------|------------|
| G1202R | Lorlatinib |
| L1196M | Brigatinib, lorlatinib |
| I1171X | Lorlatinib |
| Compound mutations | Lorlatinib ± other |

**Post-lorlatinib:**
- Chemotherapy standard
- Re-challenge with prior TKI if new mutation
- Investigational agents

## Supportive Care and Quality Metrics

### Palliative Care Integration

**ASCO recommendation:**
- Early palliative care for all advanced NSCLC
- Within 8 weeks of diagnosis
- Improves QOL, possibly survival (Temel NEJM 2010)

**Key domains:**
- Symptom management
- Psychosocial support
- Goals of care discussions
- Advance care planning

### Survivorship

**Long-term toxicities:**
| Treatment | Late Effects |
|-----------|--------------|
| EGFR TKI | Interstitial lung disease, cardiac |
| IO | Delayed/persistent immune-related AEs |
| Radiation | Fibrosis, esophageal stricture |
| Chemotherapy | Neuropathy, cognitive |

**Surveillance:**
- Imaging q3-6 months during treatment
- Post-curative: q6 months × 2 years, then annually
- PET not recommended for routine surveillance

### Quality Metrics

**ASCO Quality Oncology Practice Initiative:**
- Molecular testing before first-line therapy
- PD-L1 testing
- Smoking cessation counseling
- Palliative care referral

## Clinical Pearls for Practice

1. **Never start first-line systemic therapy** for advanced non-squamous NSCLC without molecular results. If unable to wait, begin chemo (can add IO later).

2. **EGFR-mutant adjuvant:** Osimertinib for 3 years after resection significantly improves DFS and OS in Stage IB-IIIA.

3. **Neoadjuvant chemo-IO** is emerging standard for resectable Stage II-IIIA. Discuss all surgical candidates at tumor board.

4. **Liquid biopsy** at progression identifies resistance mechanisms in 70-80% of cases; always obtain if tissue biopsy not feasible.

5. **Brain metastases:** Osimertinib and lorlatinib have excellent CNS penetration; SRS preferred for limited brain mets.

6. **SCLC transformation** should be considered when EGFR-mutant disease becomes refractory. Requires biopsy confirmation.

7. **Oligometastatic NSCLC** with favorable biology may benefit from local consolidative therapy to all sites after systemic therapy.

8. **Screening saves lives:** Implement LDCT screening programs with shared decision-making and smoking cessation support.

9. **Palliative care early:** All advanced NSCLC patients should have palliative care involvement within 8 weeks regardless of prognosis.`,
      keyTerms: [
        { term: 'MRD', definition: 'Molecular residual disease; detection of tumor-derived ctDNA after curative-intent treatment, predicting recurrence' },
        { term: 'BiTE', definition: 'Bispecific T-cell engager; antibody linking tumor cell to T cell for immune-mediated killing' },
        { term: 'ADAURA trial', definition: 'Landmark study establishing adjuvant osimertinib for EGFR-mutant resected NSCLC with OS benefit' },
        { term: 'PACIFIC regimen', definition: 'Standard of care for unresectable Stage III NSCLC: concurrent chemo-RT followed by durvalumab consolidation' },
        { term: 'tumor-informed assay', definition: 'Personalized ctDNA test based on patient-specific tumor mutations for sensitive MRD detection' },
        { term: 'SCLC transformation', definition: 'Histologic change from NSCLC to SCLC as resistance mechanism, requiring chemotherapy' },
      ],
      clinicalNotes: `Key practice recommendations:

1. **Molecular testing:** Ensure NGS panel includes all guideline-recommended targets. Turnaround time matters - consider liquid biopsy in parallel.

2. **Perioperative therapy:** Neoadjuvant chemo-IO for resectable Stage II-IIIA (excluding EGFR/ALK). Adjuvant osimertinib for EGFR-mutant. Adjuvant IO for others per trial criteria.

3. **Stage III unresectable:** Durvalumab consolidation after chemo-RT is standard. Ensure patients complete radiation and assess PD-L1.

4. **Resistance re-biopsy:** At progression on TKI, always obtain tissue or liquid biopsy. Resistance mechanism guides next-line therapy.

5. **SCLC first-line:** Platinum-etoposide plus atezolizumab or durvalumab is standard for extensive stage.

6. **Multidisciplinary approach:** All lung cancer patients should be discussed at tumor board. Surgical, radiation, and medical oncology input essential.`,
    },
  },

  media: [
    {
      id: 'lung-cancer-classification',
      type: 'diagram',
      filename: 'lung-cancer-types.svg',
      title: 'Lung Cancer Classification',
      description: 'NSCLC subtypes and SCLC characteristics',
    },
    {
      id: 'lung-cancer-staging',
      type: 'diagram',
      filename: 'lung-cancer-staging.svg',
      title: 'TNM Staging',
      description: 'TNM staging system for NSCLC with stage groupings',
    },
    {
      id: 'molecular-targets',
      type: 'diagram',
      filename: 'nsclc-molecular-targets.svg',
      title: 'Molecular Targets in NSCLC',
      description: 'Actionable driver mutations and targeted therapies',
    },
  ],

  citations: [
    {
      id: 'nccn-nsclc-2024',
      type: 'website',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer',
      authors: ['National Comprehensive Cancer Network'],
      source: 'NCCN',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450',
      accessedDate: '2024-01-01',
    },
    {
      id: 'checkmate-816',
      type: 'article',
      title: 'Neoadjuvant Nivolumab plus Chemotherapy in Resectable Lung Cancer',
      authors: ['Forde PM', 'Spicer J', 'Lu S', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa2202170',
    },
    {
      id: 'adaura',
      type: 'article',
      title: 'Overall Survival with Osimertinib in Resected EGFR-Mutated NSCLC',
      authors: ['Tsuboi M', 'Herbst RS', 'John T', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa2304594',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'topic-cancer-biology', targetType: 'topic', relationship: 'related', label: 'Cancer Biology' },
    { targetId: 'condition-pleural-effusion', targetType: 'condition', relationship: 'related', label: 'Pleural Effusion' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['oncology', 'pulmonology', 'thoracic surgery'],
    keywords: ['lung cancer', 'NSCLC', 'SCLC', 'EGFR', 'immunotherapy', 'targeted therapy', 'smoking'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lungCancer;
