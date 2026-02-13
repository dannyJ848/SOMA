/**
 * Lung Cancer - Comprehensive Educational Content
 *
 * Covers types, diagnosis, staging, and treatment of lung cancer.
 */

import { EducationalContent } from '../../types';

export const lungCancer: EducationalContent = {
  id: 'condition-lung-cancer',
  type: 'condition',
  name: 'Lung Cancer',
  nameEs: 'Cáncer de Pulmón',
  alternateNames: ['Lung Carcinoma', 'Bronchogenic Carcinoma', 'NSCLC', 'SCLC'],
  hpoId: 'HP:0030358',

  levels: {
    1: {
      level: 1,
      summary: 'Lung cancer is when abnormal cells grow out of control in the lungs. Smoking is the leading cause, but non-smokers can also develop it.',
      explanation: `Lung cancer is the leading cause of cancer death worldwide. Most cases are caused by smoking, but radon, air pollution, and genetics also play a role.

**What is lung cancer?**
- Normal cells in the lungs change and grow uncontrollably
- These abnormal cells form a tumor
- The tumor can invade nearby tissues
- Cells can spread to other parts of the body (metastasis)

**Symptoms (often appear late):**
- Persistent cough that doesn't go away
- Coughing up blood
- Shortness of breath
- Chest pain
- Hoarseness
- Weight loss without trying
- Fatigue
- Frequent infections

**Major risk factors:**
- Smoking (causes 80-90% of cases)
- Secondhand smoke
- Radon exposure (in homes)
- Asbestos exposure
- Air pollution
- Family history
- Previous radiation to chest

**Prevention:**
- Don't smoke (or quit if you do)
- Avoid secondhand smoke
- Test your home for radon
- Avoid carcinogens at work
- Eat a diet rich in fruits and vegetables

**Screening:**
- Low-dose CT scan for high-risk people:
  - Ages 50-80
  - Current or former smokers
  - 20+ pack-year history
  - Quit within past 15 years (or still smoking)

**Treatment depends on:**
- Type of lung cancer
- Stage (how far it has spread)
- Patient's overall health
- May include surgery, radiation, chemotherapy, targeted therapy, or immunotherapy`,
      keyTerms: [
        { term: 'tumor', definition: 'An abnormal mass of tissue that forms when cells grow uncontrollably' },
        { term: 'metastasis', definition: 'The spread of cancer from one part of the body to another' },
        { term: 'pack-year', definition: 'A measure of smoking: packs per day × years smoked' },
        { term: 'biopsy', definition: 'Removing a small piece of tissue to examine for cancer cells' },
      ],
      analogies: [
        'Cigarette smoke is like pouring toxic chemicals onto healthy cells year after year - eventually some cells mutate and turn cancerous.',
        'Cancer cells are like weeds in a garden - they grow uncontrollably and can crowd out the healthy plants.',
      ],
      examples: [
        'A 65-year-old who smoked a pack a day for 40 years (40 pack-years) should get annual lung cancer screening.',
        'Someone with a nagging cough for 3 months that won\'t go away should see a doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lung cancer is classified as non-small cell (NSCLC, 85%) or small cell (SCLC, 15%), with treatment based on histology, stage, and molecular profiling. Smoking causes most cases, but never-smokers can develop lung cancer.',
      explanation: `## Types of Lung Cancer

**Non-Small Cell Lung Cancer (NSCLC) - 85%:**
- Adenocarcinoma (most common, often peripheral)
- Squamous cell carcinoma (usually central, cavitation common)
- Large cell carcinoma (undifferentiated)
- More slow-growing than SCLC
- Surgery possible for early stages

**Small Cell Lung Cancer (SCLC) - 15%:**
- Highly aggressive
- Almost always in smokers
- Usually central location
- Early metastasis common
- Surgery rarely helpful (chemotherapy mainstay)

## Risk Factors

**Tobacco Smoking:**
- 80-90% of lung cancer deaths attributable to smoking
- Risk increases with pack-years
- Filtered and low-tar cigarettes don't eliminate risk
- Secondhand smoke increases risk 20-30%

**Occupational Exposures:**
- Asbestos (synergistic with smoking)
- Silica
- Diesel exhaust
- Metals (arsenic, chromium, nickel)
- Radon (leading cause in non-smokers)

**Other:**
- Family history (genetic predisposition)
- Previous radiation therapy
- HIV infection
- Air pollution

## Clinical Presentation

**Local Symptoms:**
- Persistent cough (>3 weeks)
- Hemoptysis (coughing blood)
- Dyspnea (shortness of breath)
- Chest pain
- Hoarseness (recurrent laryngeal nerve involvement)
- Superior vena cava syndrome (face/swelling of upper body)

**Metastatic Symptoms:**
- Bone pain
- Neurologic symptoms (brain mets)
- Weight loss, anorexia

**Paraneoplastic Syndromes:**
- SIADH (SCLC, squamous)
- Hypercalcemia (squamous, PTHrP)
- Cushing syndrome (SCLC, ACTH)
- Lambert-Eaton myasthenic syndrome (SCLC)

## Diagnosis

**Imaging:**
- Chest X-ray (may detect but limited)
- CT chest (better characterization)
- PET/CT (staging, detect metastases)

**Tissue Diagnosis:**
- Bronchoscopy (central lesions)
- CT-guided needle biopsy (peripheral lesions)
- Mediastinoscopy (lymph node sampling)
- Thoracentesis (if pleural effusion)

**Molecular Testing (NSCLC adenocarcinoma):**
- EGFR mutations
- ALK rearrangement
- ROS1 rearrangement
- BRAF V600E
- KRAS G12C
- PD-L1 expression

## Staging

**TNM System:**
- T: Tumor size and invasion
- N: Lymph node involvement
- M: Metastasis

**Stage Grouping:**
- Stage I: Localized to lung, surgery curative
- Stage II: Localized with lymph node involvement
- Stage III: Locally advanced (N2 or T4)
- Stage IV: Metastatic disease

## Treatment by Type and Stage

**NSCLC:**
- Stage I-II: Surgery (lobectomy preferred)
- Stage III: Chemoradiation +/- immunotherapy
- Stage IV: Systemic therapy

**SCLC:**
- Limited stage: Chemoradiation
- Extensive stage: Chemotherapy + immunotherapy
- Prophylactic cranial irradiation if good response`,
      keyTerms: [
        { term: 'adenocarcinoma', definition: 'Cancer arising from glandular cells; most common NSCLC type' },
        { term: 'hemoptysis', definition: 'Coughing up blood from the respiratory tract' },
        { term: 'paraneoplastic syndrome', definition: 'Symptom complex from tumor-produced hormones or immune response, not direct effects' },
        { term: 'SCLC', definition: 'Small cell lung cancer; aggressive neuroendocrine tumor' },
        { term: 'NSCLC', definition: 'Non-small cell lung cancer; includes adenocarcinoma, squamous, large cell' },
      ],
      analogies: [
        'NSCLC is like a slow-growing weed that can often be removed if caught early. SCLC is like a fast-spreading vine that reaches everywhere quickly.',
      ],
    },
    3: {
      level: 3,
      summary: 'NSCLC molecular profiling identifies driver mutations (EGFR, ALK, ROS1, KRAS) guiding targeted therapy, with PD-L1 expression directing immunotherapy use. SCLC relies on platinum-based chemotherapy with added immunotherapy, having poor prognosis due to early metastasis.',
      explanation: `## Molecular Testing in NSCLC

**Required for All Non-Squamous NSCLC (and select squamous):**

| Biomarker | Test | Frequency | Targeted Therapy |
|-----------|------|-----------|------------------|
| EGFR | Tissue or plasma | 10-15% (Western), 40% (Asian) | Osimertinib |
| ALK | FISH or IHC | 3-7% | Alectinib, lorlatinib |
| ROS1 | FISH or NGS | 1-2% | Crizotinib, entrectinib |
| KRAS | NGS | 25-30% | Sotorasib (G12C) |
| BRAF | NGS | 1-3% | Dabrafenib + trametinib |
| RET | NGS | 1-2% | Selpercatinib |
| METex14 | NGS | 3-4% | Capmatinib, tepotinib |
| NTRK | NGS | <1% | Larotrectinib |
| PD-L1 | IHC | Variable | Pembrolizumab |

**Testing Timeline:**
- Adequate tissue critical (avoid small biopsies)
- Reflex testing at diagnosis
- Plasma testing if tissue insufficient (catches ~70% of tissue positives)
- Re-biopsy at progression for resistance mutations

## Targeted Therapies

**EGFR-Mutant NSCLC:**
- **First-line:** Osimertinib (3rd gen TKI)
  - Superior PFS vs 1st gen
  - CNS activity
  - Better tolerability
- **Resistance:** C797S, MET amplification → Combination therapy or trial

**ALK-Rearranged NSCLC:**
- **First-line:** Alectinib or lorlatinib
  - Superior to crizotinib
  - CNS penetration
- **Sequential:** Lorlatinib after 2nd gen TKI failure

**KRAS G12C:**
- **Sotorasib or adagrasib**
- First KRAS-targeted drugs (historically "undruggable")
- Response rate ~40%

## Immunotherapy

**PD-1/PD-L1 Inhibitors:**

| Agent | Indication | Key Data |
|-------|------------|----------|
| Pembrolizumab | PD-L1 ≥50% first-line monotherapy | KEYNOTE-024 |
| Pembrolizumab | + chemo for PD-L1 <50% | KEYNOTE-189 |
| Nivolumab | Second-line | CheckMate 017/057 |
| Nivolumab + ipilimumab | First-line (PD-L1 ≥1%) | CheckMate 227 |
| Atezolizumab | First-line + chemo | IMpower150 |

**Key Considerations:**
- Check driver mutations first (targeted therapy preferred)
- PD-L1 ≥50%: Consider pembro monotherapy
- PD-L1 <50%: Chemo + immunotherapy
- Never combine EGFR/ALK TKI + immunotherapy (increased toxicity)

## SCLC Management

**Staging:**
- **Limited stage:** Confined to one hemithorax and regional nodes
- **Extensive stage:** Distant metastases

**Treatment:**
**Limited Stage:**
- Concurrent chemoradiation (cisplatin/etoposide)
- Prophylactic cranial irradiation if response
- Thoracic radiation boost considered

**Extensive Stage:**
- Carboplatin/etoposide + atezolizumab (IMpower133)
- Carboplatin/etoposide + durvalumab (CASPIAN)
- Improved overall survival with immunotherapy
- Prophylactic cranial irradiation if response

## Complications

**Superior Vena Cava Syndrome:**
- Malignant obstruction of SVC
- Facial swelling, arm edema, venous distention
- Emergency: Radiation or stent

**Malignant Pleural Effusion:**
- Indicates stage IV disease
- Thoracentesis for symptom relief
- Consider pleurodesis or indwelling catheter

**Brain Metastases:**
- Common in NSCLC (adenocarcinoma) and SCLC
- Treatment: SRS for limited, WBRT for extensive
- TKIs with CNS penetration (osimertinib, lorlatinib)`,
      keyTerms: [
        { term: 'driver mutation', definition: 'Genetic alteration that drives cancer growth; target for therapy' },
        { term: 'TKI', definition: 'Tyrosine kinase inhibitor; targeted therapy blocking specific signaling pathways' },
        { term: 'plasma testing', definition: 'Liquid biopsy using blood to detect tumor DNA; useful when tissue unavailable' },
        { term: 'CNS activity', definition: 'Drug effectiveness against brain metastases' },
        { term: 'SRS', definition: 'Stereotactic radiosurgery; focused radiation for brain tumors' },
        { term: 'WBRT', definition: 'Whole brain radiation therapy; treats brain metastases throughout brain' },
      ],
      clinicalNotes: 'Always obtain molecular testing before immunotherapy in NSCLC - EGFR and ALK tumors respond poorly to immunotherapy alone. Osimertinib has CNS penetration superior to earlier EGFR TKIs. For SCLC, always consider prophylactic cranial irradiation in patients responding to initial therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced lung cancer management addresses resistance mechanisms to targeted therapies, CNS metastases management, oligometastatic disease treatment, perioperative immunotherapy, and novel approaches including antibody-drug conjugates and combination strategies.',
      explanation: `## Resistance to Targeted Therapy

### EGFR Resistance Mechanisms

**On-Target:**
- **T790M:** Classic first-line resistance
  - Treated with osimertinib (3rd gen)
- **C797S:** Resistance to osimertinib
  - If cis with T790M: No current TKI effective
  - If trans: May respond to 1st/2nd gen + osimertinib (combination)

**Off-Target:**
- **MET amplification:** 5-22% of osimertinib resistance
  - Add MET inhibitor (capmatinib, savolitinib)
- **HER2 amplification, small cell transformation**

### ALK Resistance
- Sequential TKI therapy based on resistance mutation profile
- G1202R: Lorlatinib most active
- Compound mutations: Combination strategies

## CNS Metastases

**Epidemiology:**
- 30-50% of NSCLC patients develop brain mets
- Adenocarcinoma and EGFR/ALK enriched
- 15-20% of SCLC at diagnosis, 50% during course

**Treatment Approach:**
| Scenario | Treatment |
|----------|-----------|
| Asymptomatic, few (<4) mets | TKI alone (if CNS-active) or SRS |
| Symptomatic or many mets | SRS + consider TKI |
| Leptomeningeal disease | CNS-active TKI + intrathecal chemo, poor prognosis |
| Large/mass effect | Surgery + SRS |
| Widespread/diffuse | WBRT |

**CNS-Active TKIs:**
- EGFR: Osimertinib
- ALK: Lorlatinib, alectinib, brigatinib
- ROS1: Entrectinib, lorlatinib
- NTRK: Larotrectinib, entrectinib

## Oligometastatic Disease

**Definition:**
- Limited number of metastases (typically ≤3-5)
- Usually controlled primary tumor
- Amenable to local therapy

**Treatment Strategy:**
- Local consolidative therapy (LCT) to all sites
- SBRT for metastases
- Surgery or SBRT for primary
- Systemic therapy (maintenance or continued)

**Evidence:**
- Multiple phase II trials showing OS benefit
- Selection critical (slow progression, good PS)

## Perioperative Immunotherapy

**Neoadjuvant:**
- **CheckMate 816:** Nivolumab + chemo → increased pCR
- **KEYNOTE-671:** Pembrolizumab + chemo → improved event-free survival
- pCR correlates with improved survival

**Adjuvant:**
- **IMpower010:** Atezolizumab for stage IB-IIIA after chemo
- **KEYNOTE-091:** Pembrolizumab after surgery ± chemo
- **ADAURA:** Osimertinib for EGFR-mutant (dramatic DFS benefit)

## Antibody-Drug Conjugates

**Sacituzumab govitecan (Trop-2):**
- NSCLC progressing after platinum + immunotherapy
- Modest activity, toxicities significant

**Datopotamab deruxtecan (TROP2):**
- Phase 3 data positive
- Under regulatory review

**Trastuzumab deruxtecan (HER2):**
- For HER2-mutant NSCLC
- FDA approved
- Significant activity

**Telisotuzumab vedotin (c-Met):**
- For MET-overexpressing NSCLC
- Phase 3 ongoing

## SCLC Advances

**Extensive Stage:**
- Chemo + immunotherapy now standard (atezolizumab or durvalumab)
- Lurbinectedin for second-line
- Serotonin antagonist (tirzepatide BiTE) in development

**Limited Stage:**
- Consider thoracic surgery after chemoradiation in highly selected cases
- Prophylactic cranial irradiation remains standard

**Novel Targets in SCLC:**
- DLL3 (tarlatamab BiTE)
- BCL-2 (navitoclax)
- PARP inhibitors (biomarker-selected)

## Liquid Biopsy

**Applications:**
- Tissue insufficient → plasma NGS
- Monitor treatment response (ctDNA clearance)
- Detect resistance mutations early
- Minimal residual disease assessment

**Limitations:**
- Lower sensitivity than tissue (especially for brain mets)
- False negatives common
- Positive result usually reliable

**Clinical Use:**
- Recommended when tissue unavailable
- Complementary to tissue, not replacement
- Serial monitoring emerging application`,
      keyTerms: [
        { term: 'pCR', definition: 'Pathologic complete response; no viable cancer cells in resected specimen after neoadjuvant therapy' },
        { term: 'leptomeningeal disease', definition: 'Cancer spread to meninges and CSF; poor prognosis' },
        { term: 'oligometastatic', definition: 'Limited number of metastases potentially amenable to local ablative therapy' },
        { term: 'SBRT', definition: 'Stereotactic body radiation therapy; precise high-dose radiation to tumors' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; tumor-derived cell-free DNA in blood' },
      ],
      clinicalNotes: 'For CNS metastases from NSCLC, CNS-active TKIs may obviate need for immediate radiation. Consider repeat biomarker testing at progression - resistance mechanisms are targetable in 30-50% of cases (EGFR C797S, MET amp). Oligometastatic disease may benefit from local consolidative therapy.',
    },
    5: {
      level: 5,
      summary: 'Precision lung oncology integrates liquid biopsy, ctDNA-guided therapy, novel targets (KRAS, HER2, NRG1, METex14), bispecific antibodies, and understanding of tumor evolution, tumor mutational burden, and rational combination strategies to improve outcomes.',
      explanation: `## Precision Diagnostics

### Liquid biopsy Evolution

**ctDNA Applications:**
- **Baseline:** Detect mutations when tissue unavailable (70% sensitivity)
- **MRD detection:** Post-surgery/recurrence risk (adenocarcinoma)
- **Response assessment:** ctDNA clearance correlates with outcomes
- **Resistance detection:** Earlier than radiographic progression
- **Tumor evolution:** Track clonal dynamics over time

**Technical Considerations:**
- NGS panels (300-500 genes) preferred over single-gene tests
- Limit of detection: ~0.1% allele frequency
- White blood cell filtering reduces false positives (clonal hematopoiesis)

**Clinical Utility:**
- Guardant360, FoundationOne Liquid CDx FDA-approved
- Complementary to tissue, not replacement (yet)
- Serial monitoring may enable adaptive therapy

### Tumor Mutational Burden (TMB)

**Concept:**
- Number of mutations per megabase of sequenced DNA
- Surrogate for neoantigen load
- Higher in smoking-related cancers

**Clinical Application:**
- TMB ≥10 mut/Mb predicts immunotherapy benefit
- Approved biomarker for pembrolizumab regardless of PD-L1
- Challenges: Standardization, cost, tissue requirements

### Comprehensive Molecular Profiling

**Expanded NGS Panels:**
- RNA sequencing for fusions (ALK, ROS1, RET, NTRK)
- DNA + RNA increases detection yield
- Emerging biomarkers: TMB, MSI, dMMR

**Rare but Targetable:**
- **NRG1 fusions:** Therapeutic uncertainty
- **RET fusions:** Selpercatinib, pralsetinib
- **NTRK fusions:** Larotrectinib, entrectinib
- **METex14 skipping:** Capmatinib, tepotinib
- **HER2 mutations:** T-DXd, neratinib
- **BRAF V600E:** Dabrafenib + trametinib
- **KRAS G12C:** Sotorasib, adagrasib

## Immunotherapy 2.0

### Beyond PD-1/PD-L1

**CTLA-4 + PD-1:**
- Nivolumab + ipilimumab (CheckMate 227)
- Increased toxicity, limited added benefit

**LAG-3:**
- Relatlimab + nivolumab (RELATIVITY-047)
- Approved for melanoma, lung trials ongoing

**TIGIT:**
- Tiragolumab + atezolizumab (CITYSCAPE)
- Phase 3 negative (SKYSCRAPER-01, SKYSCRAPER-02)

**Bispecific Antibodies:**
- **Tarlatamab:** DLL3 BiTE for SCLC
  - 23% response rate in refractory SCLC
  - Neurotoxicity (immune effector cell-associated neurotoxicity)
- **Amivantamab:** EGFR-MET bispecific
  - Exon 20 insertions (EGFR)
  - Approved for EGFR exon20ins NSCLC

### Predictive Biomarkers Beyond PD-L1

**Inflammatory Gene Signatures:**
- IFN-γ signature
- T-cell inflamed GEP
- Commercially available (e.g., RNA-seq based)

**Microbiome:**
- Gut microbiome composition affects immunotherapy response
- Antibiotics before immunotherapy worsen outcomes
- FMT (fecal microbiota transplant) being studied

## Emerging Targets

### KRAS Therapeutics

**KRAS G12C Inhibitors:**
- **Sotorasib:** 37% response rate, PFS 6.8 months
- **Adagrasib:** 43% response rate, PFS 8.5 months
- Resistance mechanisms: Secondary mutations, bypass pathways

**Future Directions:**
- KRAS G12D inhibitors (MRTX1133)
- KRAS inhibitors + immunotherapy
- KRAS inhibitors + SOS1 inhibitors
- Combination with SHP2 inhibitors

### Antibody-Drug Conjugates

**ADC Pipeline:**
| Target | Agent | Status |
|--------|-------|--------|
| HER2 | T-DXd | Approved |
| TROP2 | Datopotamab deruxtecan | Phase 3 positive |
| MET | Telisotuzumab vedotin | Phase 3 |
| CEACAM5 | Tusamitamab | Phase 3 |
| HER3 | Patritumab deruxtecan | Phase 3 |

**Challenges:**
- Toxicity (interstitial lung disease)
- Optimal target antigen expression
- Resistance mechanisms

### Next-Generation TKIs

**Fourth-Generation EGFR TKIs:**
- For C797S resistance (after osimertinib)
- BLU-945, BPI-3611756 in development
- Combining with EGFR/MET bispecifics

**ALK/ROS1 Next-Gen:**
- Repotrectinib (TPX-0005) for ROS1 and ALK
- Active against solvent-front mutations

## Tumor Evolution and Heterogeneity

**Spatial Heterogeneity:**
- Different clones in primary vs metastasis
- Biopsy site matters for molecular profiling
- Multi-region sequencing research tool

**Temporal Evolution:**
- Subclonal diversity predicts resistance
- ctDNA captures evolution non-invasively
- Adaptive therapy approaches under study

## Early Detection

**Low-Dose CT Screening:**
- Reduces mortality by 20-24% (NLST, NELSON trials)
- Challenges: False positives, overdiagnosis, access
- Risk calculators improve selection

**Blood-Based Screening:**
- EarlyCDT-Lung (autoantibodies) - mixed results
- Multi-cancer early detection (MCED) tests
- Limited sensitivity for early-stage disease

**Breath Analysis:**
- Volatile organic compound (VOC) signatures
- Experimental, not clinically validated

## Special Populations

**Never-Smokers with Lung Cancer:**
- Distinct biology (EGFR, ALK, ROS1 enriched)
- Better outcomes with targeted therapy
- Immune "cold" tumors respond poorly to immunotherapy

**Older Adults:**
- Underrepresented in trials
- Geriatric assessment guides treatment intensity
- Single-agent TKIs often tolerated

**Patients with Poor Performance Status:**
- May still benefit from treatment (especially targeted therapy)
- Immunotherapy can be well-tolerated
- Need for PS improvement strategies`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; cell-free DNA from tumor cells in bloodstream' },
        { term: 'TMB', definition: 'Tumor mutational burden; number of mutations per megabase, immunotherapy biomarker' },
        { term: 'MRD', definition: 'Minimal residual disease; microscopic disease remaining after treatment' },
        { term: 'GEP', definition: 'Gene expression profile; pattern of gene activity that may predict treatment response' },
        { term: 'DLL3', definition: 'Delta-like ligand 3; target expressed on SCLC cells' },
        { term: 'exon 20 insertion', definition: 'Specific EGFR mutation resistant to first-generation TKIs' },
      ],
      clinicalNotes: `Key clinical considerations for advanced lung cancer management:

1. **Molecular testing:** Comprehensive NGS preferred over single-gene tests. Include DNA + RNA for fusion detection. Plasma testing when tissue insufficient.

2. **Immunotherapy timing:** Always check for driver mutations first - EGFR and ALK tumors respond poorly to initial immunotherapy. Targeted therapy preferred even if PD-L1 high.

3. **CNS disease:** Use CNS-active TKIs when available (osimertinib, lorlatinib). Defer radiation for asymptomatic brain mets in patients on CNS-penetrating TKIs.

4. **Perioperative therapy:** Neoadjuvant chemoimmunotherapy improves outcomes in resectable NSCLC. Adjuvant osimertinib for EGFR-mutant disease.

5. **Resistance:** Always re-biopsy or liquid biopsy at progression. Resistance mechanisms often targetable (MET amp, C797S, ALK mutations).

6. **Oligometastatic disease:** Consider local consolidative therapy (SBRT, surgery) to all sites in selected patients with good PS.

7. **TMB-high:** Consider pembrolizumab monotherapy regardless of PD-L1 if TMB ≥10 mut/Mb.

8. **Liquid biopsy:** Useful when tissue unavailable, for MRD assessment, and early detection of resistance. Complementary to tissue.`,
    },
  },

  media: [
    {
      id: 'nsclc-vs-sclc',
      type: 'diagram',
      filename: 'nsclc-sclc-comparison.svg',
      title: 'NSCLC vs SCLC Comparison',
      description: 'Comparison of histological features and clinical behavior',
    },
    {
      id: 'lung-cancer-staging',
      type: 'diagram',
      filename: 'lung-cancer-tnm-staging.svg',
      title: 'Lung Cancer TNM Staging',
      description: 'TNM staging system diagram for lung cancer',
    },
  ],

  citations: [
    {
      id: 'nccn-lung-2024',
      type: 'website',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Lung Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org',
    },
    {
      id: 'who-lung-2024',
      type: 'article',
      title: 'WHO Classification of Lung Tumors',
      source: 'International Agency for Research on Cancer',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-pulmonary-fibrosis', targetType: 'condition', relationship: 'related', label: 'Pulmonary Fibrosis' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['oncology', 'pulmonology', 'radiology', 'pathology'],
    keywords: ['lung cancer', 'NSCLC', 'SCLC', 'EGFR', 'ALK', 'immunotherapy', 'targeted therapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'oncology'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lungCancer;
