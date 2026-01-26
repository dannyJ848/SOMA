/**
 * GI Cancers - Comprehensive Educational Content
 *
 * Covers esophageal, gastric, colorectal, pancreatic, and hepatocellular cancers:
 * epidemiology, risk factors, staging, and treatment approaches.
 */

import { EducationalContent } from '../../../types';

export const giCancers: EducationalContent = {
  id: 'condition-gi-cancers',
  type: 'condition',
  name: 'Gastrointestinal Cancers',
  alternateNames: [
    'Esophageal Cancer',
    'Gastric Cancer',
    'Colorectal Cancer',
    'Colon Cancer',
    'Pancreatic Cancer',
    'Hepatocellular Carcinoma',
    'HCC',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Cancers of the digestive system include cancers of the esophagus, stomach, colon, rectum, liver, and pancreas. Many can be prevented or caught early with healthy habits and screening tests.',
      explanation: `**What is Cancer?**

Cancer happens when cells in your body grow out of control. Normally, old cells die and new ones replace them. In cancer, cells keep growing and can form lumps called tumors.

**Types of Digestive System Cancers:**

**Colorectal Cancer (Colon and Rectum):**
- One of the most common cancers
- Often starts as small growths called polyps
- Can be prevented by removing polyps during colonoscopy
- Screening starts at age 45 for most people

**Esophageal Cancer:**
- Cancer of the food tube connecting mouth to stomach
- Risk factors: Smoking, heavy alcohol, chronic heartburn (GERD)

**Stomach (Gastric) Cancer:**
- More common in some countries than others
- Risk factors: H. pylori infection, smoking, salty foods

**Liver Cancer:**
- Often develops in people with liver disease (hepatitis, cirrhosis)
- Hepatitis B and C viruses increase risk

**Pancreatic Cancer:**
- One of the hardest cancers to treat
- Often found late because early symptoms are vague
- Risk factors: Smoking, diabetes, family history

**Warning Signs (see a doctor if you have):**
- Blood in stool or vomit
- Unexplained weight loss
- Pain in belly that doesn't go away
- Trouble swallowing
- Yellowing of skin or eyes (jaundice)
- Change in bowel habits

**Prevention:**
- Get screened for colon cancer starting at age 45
- Don't smoke
- Limit alcohol
- Maintain healthy weight
- Get vaccinated for hepatitis B
- Treat hepatitis C if you have it`,
      keyTerms: [
        { term: 'cancer', definition: 'A disease where cells grow out of control' },
        { term: 'tumor', definition: 'A lump of abnormal cells; can be benign (not cancer) or malignant (cancer)' },
        { term: 'polyp', definition: 'A small growth on the inside of the colon that can become cancer over time' },
        { term: 'colonoscopy', definition: 'A test where a doctor uses a camera to look inside the colon', pronunciation: 'koh-luh-NAH-skuh-pee' },
        { term: 'screening', definition: 'Tests done to find cancer early, before symptoms appear' },
      ],
      analogies: [
        'Cancer cells are like weeds in a garden that keep growing and spreading if not removed.',
        'A polyp is like a warning sign - it\'s not cancer yet, but removing it prevents cancer from developing.',
        'Screening is like a smoke detector - it catches problems early when they\'re easier to fix.',
      ],
      examples: [
        'A person gets a colonoscopy at 50, and the doctor finds and removes a polyp that would have turned into cancer in 10 years.',
        'Someone with chronic heartburn develops Barrett\'s esophagus and needs regular monitoring to catch any cancer early.',
      ],
    },
    2: {
      level: 2,
      summary: 'GI cancers encompass malignancies of the esophagus, stomach, small intestine, colon, rectum, pancreas, and liver. Risk factors, screening strategies, and treatment approaches vary by tumor type and stage.',
      explanation: `## Overview of GI Malignancies

### Colorectal Cancer

**Epidemiology:**
- 3rd most common cancer worldwide
- Incidence increasing in younger adults (<50)

**Risk Factors:**
- Age (>45)
- Family history of CRC or polyps
- Inflammatory bowel disease
- Hereditary syndromes (Lynch, FAP)
- Lifestyle: Red meat, processed foods, obesity, smoking, alcohol

**Screening (average risk):**
- Start at age 45
- Options: Colonoscopy q10yr, FIT annually, stool DNA q3yr, CT colonography q5yr
- High-risk individuals: Earlier and more frequent

**Adenoma-Carcinoma Sequence:**
- Normal mucosa → Adenomatous polyp → Dysplasia → Cancer
- Takes 10-15 years typically
- Removing polyps prevents cancer

**Presentation:**
- Often asymptomatic early
- Blood in stool (occult or visible)
- Change in bowel habits
- Iron deficiency anemia
- Right-sided: Often anemia, less obstruction
- Left-sided: More likely obstruction, narrowing

**Staging (TNM):**
- Stage I: Through mucosa into submucosa/muscle
- Stage II: Through wall, no lymph nodes
- Stage III: Lymph node involvement
- Stage IV: Distant metastases (liver, lung)

**Treatment:**
- Surgery: Primary treatment for localized disease
- Chemotherapy: Adjuvant for stage III, stage IV
- Radiation: Primarily for rectal cancer

### Esophageal Cancer

**Types:**
- **Squamous cell carcinoma**: Upper/mid esophagus; smoking, alcohol, hot beverages
- **Adenocarcinoma**: Lower esophagus/GE junction; GERD, Barrett's, obesity

**Symptoms:**
- Dysphagia (progressive, solids then liquids)
- Weight loss
- Odynophagia (pain with swallowing)

**Diagnosis:**
- EGD with biopsy
- CT chest/abdomen for staging
- PET scan
- EUS for local staging

**Treatment:**
- Early: Endoscopic resection or surgery
- Locally advanced: Neoadjuvant chemoradiation + surgery
- Metastatic: Systemic therapy, palliative stenting

### Gastric Cancer

**Types:**
- Intestinal type: Associated with H. pylori, chronic gastritis, well-differentiated
- Diffuse type: Younger patients, signet ring cells, worse prognosis

**Risk Factors:**
- H. pylori infection
- Diet (salt, smoked foods)
- Smoking
- Pernicious anemia
- Family history (CDH1 mutations - hereditary diffuse gastric cancer)

**Symptoms:**
- Often vague until advanced
- Weight loss, early satiety
- Epigastric pain
- GI bleeding, anemia
- "Leather bottle stomach" (linitis plastica) in diffuse type

### Pancreatic Cancer

**Epidemiology:**
- 4th leading cause of cancer death
- 5-year survival ~10%

**Risk Factors:**
- Smoking (strongest modifiable)
- Chronic pancreatitis
- Diabetes (new-onset may be sign)
- Obesity
- Family history, genetic syndromes (BRCA2, Lynch)

**Symptoms:**
- Painless jaundice (head tumors)
- Weight loss
- Back pain (retroperitoneal invasion)
- New-onset diabetes
- Steatorrhea

**Diagnosis:**
- CT with pancreatic protocol
- CA 19-9 (not screening, but for monitoring)
- EUS with FNA for tissue
- MRCP for ductal evaluation

### Hepatocellular Carcinoma (HCC)

**Risk Factors:**
- Cirrhosis (any cause)
- Chronic hepatitis B (even without cirrhosis)
- Chronic hepatitis C
- MASLD (increasing cause)
- Alcohol

**Screening:**
- Ultrasound with or without AFP every 6 months
- In all cirrhosis patients and high-risk HBV carriers

**Diagnosis:**
- LI-RADS criteria: Can diagnose HCC by imaging without biopsy
- Classic features: Arterial enhancement, "washout" on portal/delayed phase

**Staging:** Barcelona Clinic Liver Cancer (BCLC)`,
      keyTerms: [
        { term: 'adenoma-carcinoma sequence', definition: 'Progression from normal colon to polyp to cancer over 10-15 years' },
        { term: 'Lynch syndrome', definition: 'Hereditary condition causing high risk of colorectal and other cancers (HNPCC)' },
        { term: 'FAP', definition: 'Familial adenomatous polyposis; hundreds of polyps, nearly 100% cancer risk without surgery' },
        { term: 'Barrett\'s esophagus', definition: 'Precancerous change from chronic acid reflux; risk factor for esophageal adenocarcinoma' },
        { term: 'linitis plastica', definition: 'Diffuse gastric cancer causing "leather bottle" stomach from infiltration' },
        { term: 'CA 19-9', definition: 'Tumor marker for pancreatic cancer; used for monitoring, not screening' },
      ],
      analogies: [
        'The adenoma-carcinoma sequence is like a slow-motion transformation - catching it early (polyp stage) means you can stop it.',
        'Screening for colon cancer is like scheduled maintenance on a car - catch small problems before they become big ones.',
        'Barrett\'s esophagus is like a warning light on your dashboard - it means something needs attention.',
      ],
    },
    3: {
      level: 3,
      summary: 'GI cancer molecular pathogenesis involves specific oncogenic pathways (APC, KRAS, p53 in CRC). Treatment is stage-dependent, integrating surgery, chemotherapy, radiation, and increasingly targeted therapies and immunotherapy based on molecular profiling.',
      explanation: `## GI Cancer Pathogenesis and Staging

### Colorectal Cancer Molecular Pathways

**Chromosomal Instability Pathway (CIN) - 85%:**
- Sequential mutations: APC → KRAS → SMAD4 → p53
- APC mutation: Loss of tumor suppressor, initiation
- KRAS activation: Proliferation signals
- p53 loss: Evasion of apoptosis
- Classic adenoma-carcinoma sequence

**Microsatellite Instability Pathway (MSI) - 15%:**
- Defective DNA mismatch repair (MMR)
- Lynch syndrome (germline MLH1, MSH2, MSH6, PMS2)
- Sporadic (MLH1 promoter hypermethylation)
- Better prognosis stage-for-stage
- Respond to immunotherapy (checkpoint inhibitors)

**CpG Island Methylator Phenotype (CIMP):**
- Epigenetic silencing
- Overlaps with MSI pathway

**Molecular Testing in CRC:**

| Test | Clinical Use |
|------|--------------|
| MSI/MMR | Prognosis, Lynch screening, immunotherapy eligibility |
| KRAS/NRAS | Anti-EGFR therapy eligibility (wild-type only) |
| BRAF V600E | Prognosis, treatment (targeted therapy) |
| HER2 | Emerging targeted therapy |

### Colorectal Cancer Staging and Treatment

**TNM Staging:**

| Stage | T | N | M | 5-Year Survival |
|-------|---|---|---|-----------------|
| I | T1-2 | N0 | M0 | >90% |
| IIA | T3 | N0 | M0 | ~85% |
| IIB | T4a | N0 | M0 | ~70% |
| IIIA | T1-2 | N1 | M0 | ~70% |
| IIIB | T3-4a | N1 | M0 | ~50% |
| IIIC | Any | N2 | M0 | ~30% |
| IV | Any | Any | M1 | ~15% (improving) |

**Treatment by Stage:**

*Stage I:* Surgery alone (polypectomy for pT1, surgical resection otherwise)

*Stage II:*
- Surgery
- Adjuvant chemo for high-risk features:
  - T4 tumor, perforation, poorly differentiated
  - <12 lymph nodes examined, lymphovascular invasion
  - MSI testing (MSI-H = good prognosis, may not need chemo)

*Stage III:* Surgery + adjuvant chemotherapy (FOLFOX or CAPOX x 3-6 months)

*Stage IV:*
- Molecular profiling (RAS, BRAF, MSI, HER2)
- Systemic chemotherapy (FOLFOX, FOLFIRI) + biologics
  - Left-sided, RAS wild-type: Anti-EGFR (cetuximab, panitumumab)
  - Right-sided or RAS mutant: Anti-VEGF (bevacizumab)
  - BRAF mutant: BRAF inhibitor combinations
  - MSI-H: Immunotherapy (pembrolizumab first-line)
- Consider liver metastasectomy if limited, resectable disease

### Esophageal Cancer

**Staging:**
- EUS: T and N staging, critical for local assessment
- PET-CT: Distant metastases

**Treatment by Stage:**

*T1a (mucosal):* Endoscopic mucosal resection (EMR) or ESD

*T1b-T2, N0:* Surgery (esophagectomy)

*Locally advanced (T3+ or N+):*
- Neoadjuvant chemoradiation (CROSS protocol) → Surgery
- Perioperative chemotherapy alternative (FLOT)

*Metastatic:*
- Systemic therapy
- HER2+ → trastuzumab
- PD-L1+ → immunotherapy
- Palliative stenting for dysphagia

### Gastric Cancer

**Staging Similar to Esophageal:**
- EGD with biopsies
- CT chest/abdomen/pelvis
- EUS for local staging
- Staging laparoscopy if considering resection (to detect peritoneal disease)

**Treatment:**

*Early gastric cancer (T1a):* EMR/ESD if favorable features

*Resectable:*
- Gastrectomy with D2 lymphadenectomy
- Perioperative chemotherapy (FLOT preferred)
- Adjuvant chemoradiation if inadequate lymph node dissection

*Metastatic:*
- HER2+ (~15-20%): Trastuzumab + chemotherapy
- PD-L1+: Immunotherapy combinations (nivolumab)
- Claudin 18.2+: Zolbetuximab (emerging)

### Pancreatic Cancer

**Resectability Criteria:**
- Resectable: No arterial contact, minimal venous involvement
- Borderline resectable: Limited arterial contact, venous involvement
- Locally advanced: Extensive vascular involvement, no metastases
- Metastatic: Distant spread

**Treatment:**

*Resectable:*
- Upfront surgery (pancreaticoduodenectomy) vs. neoadjuvant therapy
- Adjuvant FOLFIRINOX (if fit) or gemcitabine/capecitabine

*Borderline/Locally Advanced:*
- Neoadjuvant therapy (FOLFIRINOX or gemcitabine/nab-paclitaxel)
- Reassess for surgery

*Metastatic:*
- FOLFIRINOX (fit patients) or gemcitabine/nab-paclitaxel
- Molecular testing: BRCA/PALB2 (olaparib maintenance), MSI-H, NTRK fusions
- Median survival ~12-18 months with modern therapy

### Hepatocellular Carcinoma

**BCLC Staging System:**

| Stage | Tumor Status | Performance | Liver Function | Treatment |
|-------|--------------|-------------|----------------|-----------|
| 0 (Very early) | Single <2cm | ECOG 0 | Child A | Ablation/Resection |
| A (Early) | Single or ≤3 tumors ≤3cm | ECOG 0 | Child A-B | Resection/Ablation/Transplant |
| B (Intermediate) | Multinodular | ECOG 0 | Child A-B | TACE |
| C (Advanced) | Portal invasion/extrahepatic | ECOG 1-2 | Child A-B | Systemic therapy |
| D (Terminal) | Any | ECOG 3-4 | Child C | Best supportive care |

**First-Line Systemic Therapy:**
- Atezolizumab + bevacizumab (IMbrave150)
- Durvalumab + tremelimumab (HIMALAYA)
- Lenvatinib or sorafenib alternatives`,
      keyTerms: [
        { term: 'microsatellite instability', definition: 'DNA repair defect leading to mutations; predicts immunotherapy response in GI cancers' },
        { term: 'anti-EGFR therapy', definition: 'Targeted therapy (cetuximab, panitumumab) for RAS wild-type colorectal cancer' },
        { term: 'CROSS protocol', definition: 'Neoadjuvant chemoradiation regimen for esophageal cancer (carboplatin/paclitaxel/RT)' },
        { term: 'D2 lymphadenectomy', definition: 'Extensive lymph node dissection for gastric cancer, standard in Asia' },
        { term: 'FOLFIRINOX', definition: 'Intensive chemotherapy (5-FU, leucovorin, irinotecan, oxaliplatin) for pancreatic cancer' },
        { term: 'BCLC', definition: 'Barcelona Clinic Liver Cancer staging; guides HCC treatment selection' },
      ],
      clinicalNotes: 'All metastatic CRC should have molecular profiling (MSI, RAS, BRAF). MSI-H tumors respond dramatically to immunotherapy. Anti-EGFR only for left-sided, RAS wild-type tumors. Liver-limited CRC metastases may be curable with resection.',
    },
    4: {
      level: 4,
      summary: 'Precision oncology guides GI cancer treatment through molecular profiling, biomarker-driven therapy selection, and immunotherapy integration. Multidisciplinary management optimizes outcomes across tumor types.',
      explanation: `## Precision Oncology in GI Cancers

### Colorectal Cancer - Molecular-Guided Therapy

**Universal MSI/MMR Testing:**
- All newly diagnosed CRC
- dMMR/MSI-H: 15% of early-stage, 4% of metastatic
- Lynch syndrome screening: Germline testing if MSI-H
- Treatment implications:
  - Stage II MSI-H: May not benefit from 5-FU
  - Stage IV MSI-H: First-line pembrolizumab (KEYNOTE-177)

**Extended Biomarker Testing in Metastatic CRC:**

| Biomarker | Prevalence | Therapeutic Implication |
|-----------|------------|------------------------|
| KRAS mut | 40-45% | No anti-EGFR, standard chemotherapy |
| NRAS mut | 3-5% | No anti-EGFR |
| BRAF V600E | 8-10% | Encorafenib + cetuximab (BEACON) |
| HER2 amp | 3-5% | Trastuzumab + pertuzumab or lapatinib |
| NTRK fusion | <1% | Larotrectinib/entrectinib |
| RET fusion | <1% | Selpercatinib |

**Sidedness in CRC:**
- Left-sided (splenic flexure to rectum): Better prognosis, responds to anti-EGFR
- Right-sided (cecum to transverse): Worse prognosis, more BRAF mutations, anti-VEGF preferred

**Circulating Tumor DNA (ctDNA):**
- Minimal residual disease (MRD) detection post-surgery
- May guide adjuvant therapy decisions (DYNAMIC trial)
- Monitoring for recurrence

### Oligometastatic Disease

**Liver Metastases:**
- Resectable in ~20% of Stage IV CRC patients
- 5-year survival 40-50% after R0 resection
- Criteria: Adequate liver remnant, all disease resectable, fit for surgery

**Ablation:**
- RFA/MWA for lesions <3cm, ≤5 lesions
- Combination with resection (two-stage hepatectomy)

**Lung Metastases:**
- Consider resection if limited, controlled liver disease

### Esophageal and Gastric Cancer

**HER2 Testing:**
- Required for all metastatic disease
- IHC 3+ or IHC 2+/FISH+: Trastuzumab eligible
- ToGA trial established benefit

**PD-L1 and Immunotherapy:**
- CPS (combined positive score) predicts response
- Nivolumab + chemotherapy (CheckMate-649): First-line for CPS ≥5
- Pembrolizumab combinations also approved

**Claudin 18.2:**
- Tight junction protein, target for zolbetuximab
- SPOTLIGHT/GLOW trials: Benefit in CLDN18.2+ gastric cancer

**Perioperative Therapy Evolution:**

| Trial | Regimen | Approach |
|-------|---------|----------|
| MAGIC | ECF perioperative | Established benefit |
| FLOT4 | FLOT perioperative | Superior to ECF |
| CROSS | Chemo-RT | Standard for esophageal |
| CheckMate-577 | Adjuvant nivolumab | After chemo-RT + surgery |

### Pancreatic Cancer - Emerging Targets

**Germline Testing:**
- Recommended for all pancreatic cancer patients
- BRCA1/2, PALB2 mutations: Platinum-sensitive, PARP inhibitor maintenance

**Tumor Profiling:**

| Finding | Prevalence | Treatment |
|---------|------------|-----------|
| BRCA1/2/PALB2 | 5-7% | Platinum, olaparib maintenance |
| MSI-H | 1-2% | Pembrolizumab |
| NTRK fusion | <1% | Larotrectinib |
| KRAS G12C | ~1-2% | Sotorasib, adagrasib (emerging) |

**PARP Inhibitor Maintenance:**
- POLO trial: Olaparib maintenance in BRCA-mutant, platinum-responsive disease
- Improved PFS, not OS
- Important option for select patients

### Hepatocellular Carcinoma - Systemic Therapy

**First-Line Options:**

| Regimen | Trial | Notes |
|---------|-------|-------|
| Atezo + bev | IMbrave150 | Most commonly used first-line |
| Durva + treme | HIMALAYA | Single-dose treme + durva maintenance |
| Lenvatinib | REFLECT | Non-inferior to sorafenib |
| Sorafenib | SHARP | Original standard |

**Patient Selection:**
- Atezo + bev: Requires EGD to assess variceal bleeding risk
- TKI alternatives if bleeding risk, autoimmune disease

**Locoregional-Systemic Integration:**
- TACE + systemic therapy combinations under study
- LEAP-012, EMERALD-1 trials ongoing

**Transplant Oncology:**
- Downstaging with locoregional therapy → transplant
- Extending criteria beyond Milan

### Neuroendocrine Tumors

**Classification:**
- Grade 1: Ki-67 <3%, mitotic rate <2
- Grade 2: Ki-67 3-20%, mitotic rate 2-20
- Grade 3: Ki-67 >20%, mitotic rate >20
- Well-differentiated NET vs. poorly differentiated NEC

**Treatment:**
- Surgery: Curative for localized disease
- SSAs (octreotide, lanreotide): Control symptoms, antiproliferative effect
- PRRT (Lu-177 DOTATATE): For somatostatin receptor-positive tumors
- Everolimus: mTOR inhibitor
- Chemotherapy: Mainly for high-grade/NEC

### Gastrointestinal Stromal Tumor (GIST)

**Molecular Drivers:**
- KIT mutations (80%): Respond to imatinib
- PDGFRA mutations (10%): Most respond; D842V resistant to imatinib
- SDH-deficient, BRAF, NF1: Rare subtypes

**Treatment:**
- Localized: Surgery; adjuvant imatinib for high-risk (>3 years)
- Metastatic: Imatinib → Sunitinib → Regorafenib → Ripretinib
- PDGFRA D842V: Avapritinib`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; blood-based biomarker for MRD detection and monitoring' },
        { term: 'CPS', definition: 'Combined positive score; PD-L1 scoring system predicting immunotherapy benefit in gastric cancer' },
        { term: 'POLO trial', definition: 'Study establishing olaparib maintenance in BRCA-mutant pancreatic cancer' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy; Lu-177 DOTATATE for NETs' },
        { term: 'avapritinib', definition: 'Targeted therapy for PDGFRA D842V-mutant GIST, overcoming imatinib resistance' },
        { term: 'downstaging', definition: 'Reducing tumor burden with locoregional therapy to achieve transplant eligibility' },
      ],
      clinicalNotes: 'ctDNA for MRD detection is practice-changing - may spare low-risk patients from adjuvant chemotherapy or identify high-risk patients who need treatment. All pancreatic cancer patients should have germline testing. BRAF V600E CRC requires triplet therapy (encorafenib + cetuximab + binimetinib) for optimal outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary GI oncology integrates liquid biopsy-guided therapy, immunotherapy combinations, and multidisciplinary approaches. Clinical trials explore neoadjuvant immunotherapy, organ preservation, and novel targeted agents across tumor types.',
      explanation: `## GI Oncology: Frontiers and Practice

### Colorectal Cancer - Practice Evolution

**Total Neoadjuvant Therapy (TNT) for Rectal Cancer:**
- RAPIDO, PRODIGE-23 trials established TNT
- Induction chemotherapy → Chemoradiation → Surgery
- OR Short-course RT → Consolidation chemotherapy → Surgery
- Higher pCR rates, improved DFS

**Organ Preservation (Watch and Wait):**
- Complete clinical response (cCR) after neoadjuvant therapy
- Avoid proctectomy in select patients
- Requirements: Complete tumor regression, rigorous surveillance
- ~30% regrowth risk, most salvageable

**CIRCULATE Trial Platform:**
- ctDNA-guided adjuvant therapy
- DYNAMIC: ctDNA+ patients benefit from chemotherapy
- ctDNA- may safely avoid adjuvant treatment (ongoing validation)

**Immunotherapy Expansion:**
- KEYNOTE-177: Pembrolizumab first-line for MSI-H mCRC
- NICHE trials: Neoadjuvant immunotherapy achieving dramatic responses
- dMMR/MSI-H rectal cancer: Non-operative management emerging (Cercek study - 100% cCR)

### Esophagogastric Cancer - Current Practice

**Resectable Disease Algorithm:**

\`\`\`
Staging workup (EGD, EUS, CT, PET)
           │
           ├── cT1a, select cT1b → Endoscopic resection
           │
           ├── cT1b-T2, N0 → Surgery (esophagectomy/gastrectomy)
           │
           └── cT3+ or N+ → Neoadjuvant therapy
                               │
                               ├── Esophageal SCC → Chemo-RT (CROSS)
                               │
                               └── GEJ/Gastric adenoca → FLOT or chemo-RT
                                                              │
                                                              └── Surgery
                                                                    │
                                                                    └── Adjuvant nivolumab if residual disease
\`\`\`

**CheckMate-577:**
- Adjuvant nivolumab after neoadjuvant chemo-RT + surgery
- Doubled DFS in patients with residual disease
- Established immunotherapy in perioperative setting

**Metastatic Treatment Sequencing:**
- First-line: Chemotherapy + immunotherapy ± HER2-directed therapy
- Second-line: Options based on prior therapy, molecular profile
- Integration of molecular profiling throughout

### Pancreatic Cancer - Intensive Investigation

**Neoadjuvant vs. Adjuvant Debate:**
- PREOPANC trials supporting neoadjuvant approach
- Better R0 resection rates, delivery of systemic therapy
- Ongoing: ALLIANCE A021806 (perioperative mFOLFIRINOX ± RT)

**Gemcitabine/nab-Paclitaxel vs. FOLFIRINOX:**
- FOLFIRINOX: Higher response, more toxicity, fit patients
- Gem/nab-P: Better tolerated, appropriate for frailer patients
- Modified FOLFIRINOX commonly used

**KRAS G12C - New Target:**
- Sotorasib, adagrasib showing activity
- First druggable KRAS mutation
- Combinations under investigation

**Stroma-Targeting Approaches:**
- Dense desmoplastic stroma limits drug delivery
- Multiple trials (HALO) failed to show benefit
- Ongoing research into stromal modulation

### HCC - Therapeutic Advances

**Treatment Sequencing:**

*First-line:*
1. Atezolizumab + bevacizumab (preferred)
2. Durvalumab + tremelimumab (STRIDE)
3. Lenvatinib, sorafenib (if checkpoint inhibitor contraindicated)

*Second-line:*
- After IO: TKI (sorafenib, lenvatinib, cabozantinib, regorafenib)
- After TKI: Consider IO if not prior
- Ramucirumab if AFP ≥400

**Combination Trials:**
- COSMIC-312: Atezo + cabozantinib
- LEAP-002: Pembrolizumab + lenvatinib
- Integration with locoregional therapy ongoing

**Downstaging and Bridging:**
- Locoregional therapy (TACE, Y90, ablation)
- Downstage beyond-Milan to within-Milan
- Bridge to transplant to prevent progression

### Biliary Tract Cancers

**Molecular Profiling Mandatory:**
- IDH1 mutations (15% ICC): Ivosidenib
- FGFR2 fusions (10-15% ICC): Pemigatinib, futibatinib
- BRAF V600E, HER2, MSI-H: Targeted/IO options
- All patients should receive germline and somatic testing

**First-Line:**
- ABC-02: Gemcitabine + cisplatin
- TOPAZ-1: Adding durvalumab improves OS

### Clinical Trial Priorities

**Key Ongoing Questions:**
- Optimal neoadjuvant duration and sequencing
- ctDNA-guided therapy personalization
- Immunotherapy combinations and novel targets
- Organ preservation strategies

**Novel Agents:**
- Bispecific antibodies
- ADCs (antibody-drug conjugates)
- Cellular therapies (TIL, CAR-T in development)
- Microbiome modulation

### Quality Metrics and MDT

**Multidisciplinary Tumor Board:**
- All GI cancers should be discussed
- Surgery, medical oncology, radiation, radiology, pathology, GI
- Treatment planning, clinical trial enrollment

**Quality Indicators:**
- Time from diagnosis to treatment
- Molecular testing completion rate
- R0 resection rates
- Lymph node harvest adequacy (≥12 for CRC)
- Clinical trial enrollment

**Survivorship:**
- Surveillance protocols by stage
- Secondary cancer screening
- Management of treatment sequelae
- Genetic counseling referrals`,
      keyTerms: [
        { term: 'total neoadjuvant therapy', definition: 'Delivering all systemic chemotherapy before surgery for rectal cancer' },
        { term: 'watch and wait', definition: 'Organ preservation strategy for rectal cancer after complete clinical response' },
        { term: 'NICHE trial', definition: 'Neoadjuvant immunotherapy study showing dramatic responses in dMMR colon cancer' },
        { term: 'STRIDE regimen', definition: 'Durvalumab + single-dose tremelimumab for HCC (HIMALAYA trial)' },
        { term: 'ivosidenib', definition: 'IDH1 inhibitor for cholangiocarcinoma with IDH1 mutations' },
        { term: 'downstaging', definition: 'Treating HCC to reduce tumor burden for transplant eligibility' },
      ],
      clinicalNotes: `Key clinical pearls:
1. All CRC should have MSI/MMR testing - implications for Lynch screening and treatment
2. dMMR rectal cancer may achieve organ preservation with immunotherapy alone (emerging data)
3. ctDNA (MRD) testing will guide adjuvant chemotherapy decisions - practice-changing
4. Left vs. right CRC sidedness determines biologic selection (anti-EGFR vs. anti-VEGF)
5. All pancreatic cancer patients need germline testing - BRCA/PALB2 affects treatment
6. Atezolizumab + bevacizumab requires EGD within 6 months to assess variceal bleeding risk
7. All biliary cancers need comprehensive molecular profiling - actionable targets in 40%+
8. Adjuvant nivolumab for esophageal cancer after neoadjuvant + surgery with residual disease
9. Total neoadjuvant therapy is new standard for locally advanced rectal cancer
10. Multidisciplinary discussion is essential - improves outcomes and trial enrollment`,
    },
  },

  media: [
    {
      id: 'crc-screening',
      type: 'diagram',
      filename: 'colorectal-screening-algorithm.svg',
      title: 'Colorectal Cancer Screening',
      description: 'Screening recommendations by risk category',
    },
    {
      id: 'gi-cancer-staging',
      type: 'diagram',
      filename: 'gi-cancer-staging.svg',
      title: 'GI Cancer Staging',
      description: 'TNM staging for major GI malignancies',
    },
  ],

  citations: [
    {
      id: 'nccn-colon',
      type: 'article',
      title: 'NCCN Guidelines: Colon Cancer',
      source: 'NCCN Clinical Practice Guidelines',
      url: 'https://www.nccn.org/',
    },
    {
      id: 'keynote-177',
      type: 'article',
      title: 'KEYNOTE-177: Pembrolizumab for MSI-H Metastatic CRC',
      source: 'New England Journal of Medicine',
    },
    {
      id: 'imbrave150',
      type: 'article',
      title: 'IMbrave150: Atezolizumab + Bevacizumab for HCC',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gerd-peptic-ulcer', targetType: 'condition', relationship: 'related', label: 'Barrett\'s Esophagus' },
    { targetId: 'condition-liver-diseases', targetType: 'condition', relationship: 'related', label: 'Cirrhosis and HCC' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopy' },
  ],

  tags: {
    systems: ['digestive'],
    topics: ['oncology', 'gastroenterology', 'surgery', 'pathology'],
    keywords: ['colorectal cancer', 'esophageal cancer', 'gastric cancer', 'pancreatic cancer', 'HCC', 'screening', 'immunotherapy'],
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

export default giCancers;
