/**
 * Tumor Markers - Laboratory Interpretation Content
 *
 * Educational content for tumor marker interpretation including:
 * - PSA (prostate), CEA (colon/GI), AFP (liver/testicular)
 * - CA-125 (ovarian), CA 19-9 (pancreatic), CA 15-3 (breast)
 * - HCG, LDH, B2-microglobulin
 * - Sensitivity/specificity, screening vs monitoring
 *
 * Spanish translations (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

// =============================================================================
// TUMOR MARKERS INTERPRETATION (EducationalContent format)
// =============================================================================

export const tumorMarkersInterpretation: EducationalContent = {
  id: 'tumor-markers-interpretation',
  type: 'concept',
  name: 'Tumor Marker Interpretation',
  alternateNames: ['Cancer Markers', 'Oncologic Biomarkers', 'Marcadores Tumorales'],

  levels: {
    1: {
      level: 1,
      summary:
        'Tumor markers are substances found in blood that can be higher when certain cancers are present.',
      explanation: `Tumor markers are chemicals that your body makes in larger amounts when cancer is growing. Doctors measure them with a simple blood test.

**Important things to know:**

1. **Not all cancers make markers.** Some cancers do not raise any marker at all.

2. **High markers do not always mean cancer.** Other conditions like infections or inflammation can also raise them.

3. **Markers help doctors track treatment.** If the number goes down after treatment, the treatment is likely working. If it goes back up, the cancer may be returning.

**Common markers you might hear about:**
- **PSA** — related to the prostate gland (Antígeno Prostático Específico)
- **CEA** — related to colon and digestive cancers (Antígeno Carcinoembrionario)
- **CA-125** — related to ovarian cancer (Marcador CA-125)
- **HCG** — related to pregnancy tests but also some cancers (Gonadotropina Coriónica Humana)

Doctors use these markers along with scans and biopsies — never by themselves — to make decisions about your care.`,
      keyTerms: [
        { term: 'tumor marker', definition: 'A substance in the blood that may be elevated when cancer is present (marcador tumoral)' },
        { term: 'PSA', definition: 'Prostate-Specific Antigen; a marker related to prostate health (Antígeno Prostático Específico)' },
        { term: 'CEA', definition: 'Carcinoembryonic Antigen; a marker often checked in colon cancer (Antígeno Carcinoembrionario)' },
        { term: 'CA-125', definition: 'A marker that may rise with ovarian cancer (Marcador CA-125)' },
      ],
      analogies: [
        'Tumor markers are like smoke detectors — they can signal a fire (cancer), but sometimes they go off because of burnt toast (benign conditions).',
        'Tracking a tumor marker over time is like checking your car\'s "check engine" light after a repair — if it stays off, the fix is working.',
      ],
      examples: [
        'A man with prostate cancer has his PSA checked every few months to see if treatment is working.',
        'A woman after colon cancer surgery has regular CEA blood tests to watch for cancer coming back.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Tumor markers are proteins or other substances produced by cancer cells or normal cells in response to cancer. They are most useful for monitoring treatment response and detecting recurrence, not for screening.',
      explanation: `Tumor markers are measurable substances — usually proteins — found in blood, urine, or tissue. They can be produced by cancer cells directly or by the body in response to a malignancy.

**Key Tumor Markers:**

| Marker | Spanish Name | Associated Cancer | Normal Range |
|--------|-------------|-------------------|--------------|
| PSA | Antígeno Prostático Específico | Prostate | < 4.0 ng/mL |
| CEA | Antígeno Carcinoembrionario | Colorectal, GI | < 3.0 ng/mL (nonsmokers) |
| AFP | Alfa-fetoproteína | Liver, testicular | < 10 ng/mL |
| CA-125 | Marcador CA-125 | Ovarian | < 35 U/mL |
| CA 19-9 | Marcador CA 19-9 | Pancreatic | < 37 U/mL |
| CA 15-3 | Marcador CA 15-3 | Breast | < 30 U/mL |
| HCG | Gonadotropina Coriónica Humana | Gestational trophoblastic, testicular | < 5 mIU/mL (non-pregnant) |
| LDH | Deshidrogenasa Láctica | Lymphoma, germ cell | 140–280 U/L |
| Beta-2 microglobulin | Beta-2 microglobulina | Myeloma, lymphoma | 1.0–2.4 mg/L |

**Important Principles:**
- **Screening** means testing healthy people to find early cancer. Most markers are NOT good for screening because they cause too many false alarms.
- **Monitoring** means tracking the marker during or after treatment. This is where markers are most helpful.
- A rising trend is more meaningful than a single value.
- Benign conditions (liver disease, inflammation, smoking) can elevate many markers.`,
      keyTerms: [
        { term: 'sensitivity', definition: 'The ability of a test to correctly identify people who have the disease (true positive rate)', pronunciation: 'sen-sih-TIV-ih-tee' },
        { term: 'specificity', definition: 'The ability of a test to correctly identify people who do NOT have the disease (true negative rate)', pronunciation: 'speh-sih-FIS-ih-tee' },
        { term: 'AFP (alpha-fetoprotein)', definition: 'A marker elevated in liver cancer and some testicular cancers (alfa-fetoproteína)', pronunciation: 'AL-fah fee-toh-PRO-teen' },
        { term: 'CA 19-9', definition: 'A marker associated with pancreatic and biliary cancers (Marcador CA 19-9)' },
      ],
      analogies: [
        'Sensitivity is like a metal detector at the airport — high sensitivity catches almost all weapons but also sets off alarms for belt buckles (false positives).',
        'Specificity is like a guard who only stops people carrying actual weapons and lets everyone else through — fewer false alarms, but might miss some threats.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Tumor markers serve primarily as adjuncts for monitoring treatment response, detecting recurrence, and assessing prognosis. Their limited sensitivity and specificity preclude use as standalone screening tools for most cancers.',
      explanation: `## Tumor Marker Interpretation

### PSA (Prostate-Specific Antigen) — Antígeno Prostático Específico
- **Normal**: < 4.0 ng/mL (age-adjusted ranges exist)
- **Sensitivity/Specificity**: At 4.0 cutoff, sensitivity ~21% for any prostate cancer, ~51% for high-grade; specificity ~91%
- **Elevations**: Prostate cancer, BPH, prostatitis, recent ejaculation, urinary retention
- **Clinical use**: Controversial for screening (USPSTF: shared decision-making ages 55–69). Primary role is monitoring after treatment; PSA should become undetectable after radical prostatectomy
- **PSA velocity**: Rise > 0.75 ng/mL/year is concerning
- **Free-to-total PSA ratio**: Lower ratio (< 10%) favors cancer over BPH

### CEA (Carcinoembryonic Antigen) — Antígeno Carcinoembrionario
- **Normal**: < 3.0 ng/mL nonsmokers; < 5.0 ng/mL smokers
- **Sensitivity**: 25–50% for early-stage CRC; 75% for advanced
- **Elevations**: Colorectal, gastric, pancreatic, lung, breast cancers; cirrhosis, IBD, smoking
- **Clinical use**: NOT for screening. Monitor post-surgical CRC; rising CEA suggests recurrence
- **ASCO guideline**: Check every 3 months for 3 years post-resection of stage II/III CRC

### AFP (Alpha-Fetoprotein) — Alfa-fetoproteína
- **Normal**: < 10 ng/mL
- **Elevations**: Hepatocellular carcinoma (HCC), nonseminomatous germ cell tumors, hepatitis, cirrhosis, pregnancy
- **Screening role**: Used with ultrasound for HCC surveillance in high-risk patients (cirrhosis, chronic HBV)
- **Sensitivity/Specificity for HCC**: ~60% / ~90% at 20 ng/mL cutoff

### CA-125 — Marcador CA-125
- **Normal**: < 35 U/mL
- **Sensitivity**: ~50% for early-stage ovarian cancer; ~80% for advanced
- **Elevations**: Epithelial ovarian cancer, endometriosis, PID, pregnancy, menstruation, liver disease, peritoneal irritation
- **Clinical use**: NOT for screening in general population. Monitor treatment response and detect recurrence in ovarian cancer. ROCA (Risk of Ovarian Cancer Algorithm) evaluates longitudinal CA-125 trends

### CA 19-9 — Marcador CA 19-9
- **Normal**: < 37 U/mL
- **Sensitivity/Specificity for pancreatic cancer**: ~80% / ~82%
- **Elevations**: Pancreatic, biliary, gastric cancers; cholestasis, pancreatitis
- **Limitation**: Lewis-antigen negative patients (~5–10%) cannot produce CA 19-9
- **Clinical use**: Baseline before pancreatic cancer treatment; monitor response and recurrence

### CA 15-3 — Marcador CA 15-3
- **Normal**: < 30 U/mL
- **Sensitivity**: ~23% early breast cancer; ~69% metastatic
- **Elevations**: Breast cancer, liver disease, lung disease
- **Clinical use**: Monitor metastatic breast cancer treatment response. NOT recommended for screening or early-stage monitoring per ASCO

### HCG (Human Chorionic Gonadotropin) — Gonadotropina Coriónica Humana
- **Normal**: < 5 mIU/mL (non-pregnant)
- **Elevations**: Gestational trophoblastic disease, choriocarcinoma, nonseminomatous germ cell tumors, seminoma (10–15%)
- **Clinical use**: Essential for staging and monitoring testicular germ cell tumors; post-treatment HCG should normalize

### LDH (Lactate Dehydrogenase) — Deshidrogenasa Láctica
- **Normal**: 140–280 U/L
- **Non-specific**: Elevated in many conditions (hemolysis, liver disease, MI, tissue damage)
- **Oncology use**: Prognostic marker in lymphoma (part of IPI), melanoma, germ cell tumors (IGCCCG staging)

### Beta-2 Microglobulin — Beta-2 microglobulina
- **Normal**: 1.0–2.4 mg/L
- **Elevations**: Multiple myeloma, CLL, lymphoma, renal disease, inflammation
- **Clinical use**: Part of ISS staging for multiple myeloma; prognostic in CLL`,
      keyTerms: [
        { term: 'PSA velocity', definition: 'Rate of PSA change over time; rise > 0.75 ng/mL/year raises concern for prostate cancer' },
        { term: 'free-to-total PSA ratio', definition: 'Lower ratio (< 10%) suggests prostate cancer rather than BPH' },
        { term: 'ROCA', definition: 'Risk of Ovarian Cancer Algorithm; uses longitudinal CA-125 trends rather than single values' },
        { term: 'Lewis antigen', definition: 'Blood group antigen required for CA 19-9 production; 5–10% of people are Lewis-negative and cannot produce it' },
      ],
      clinicalNotes:
        'No tumor marker should be used in isolation for diagnosis. Always integrate markers with imaging, pathology, and clinical context. Trends over time are more informative than single values.',
    },
    4: {
      level: 4,
      summary:
        'Advanced tumor marker interpretation requires understanding test operating characteristics, kinetics, confounders, and integration with staging systems and molecular diagnostics.',
      explanation: `## Advanced Tumor Marker Interpretation

### Operating Characteristics and Bayesian Reasoning

The clinical utility of any tumor marker depends on the pre-test probability (disease prevalence in the tested population):

| Marker | Cutoff | Sensitivity | Specificity | PPV (screening) | PPV (high-risk) |
|--------|--------|-------------|-------------|-----------------|-----------------|
| PSA ≥ 4 | 4.0 ng/mL | 21% (any), 51% (high-grade) | 91% | ~30% | ~50% |
| CEA | 5.0 ng/mL | 25–50% early; 75% advanced | 90% | Low | Moderate |
| AFP (HCC) | 20 ng/mL | 60% | 90% | ~5% (general) | ~30% (cirrhosis) |
| CA-125 | 35 U/mL | 50% stage I; 80% advanced | 97% (post-menopausal) | ~3% (general) | ~10% (family hx) |
| CA 19-9 | 37 U/mL | 80% | 82% | Low | ~50% (symptomatic) |

**Key principle**: Low PPV in low-prevalence populations is why most markers fail as screening tools.

### Marker Kinetics

**PSA Kinetics:**
- PSA doubling time (PSADT): < 3 months after treatment → aggressive disease
- PSA density: PSA / prostate volume; > 0.15 ng/mL/cc favors cancer
- Post-prostatectomy: PSA should be undetectable (< 0.1 ng/mL); biochemical recurrence defined as PSA ≥ 0.2 ng/mL on two readings

**HCG/AFP Half-Lives (Germ Cell Tumors):**
- HCG half-life: 24–36 hours
- AFP half-life: 5–7 days
- Failure to decline at expected rate post-orchiectomy indicates residual disease
- IGCCCG risk classification uses post-orchiectomy marker levels

**CEA Kinetics:**
- Post-surgical CEA should normalize within 4–6 weeks
- Two consecutive rises above baseline suggest recurrence

### Confounders and Pitfalls

| Marker | Common Confounders |
|--------|--------------------|
| PSA | BPH (0.3 ng/mL per gram tissue), prostatitis, DRE (mild), ejaculation, cycling |
| CEA | Smoking (doubles normal), cirrhosis, IBD, hypothyroidism |
| AFP | Hepatitis, cirrhosis, pregnancy, hereditary persistence |
| CA-125 | Endometriosis, PID, ascites, pleuritis, menstruation, first trimester pregnancy |
| CA 19-9 | Cholestasis (may exceed 1000 U/mL), Lewis-negative genotype (always undetectable) |
| CA 15-3 | Liver disease, sarcoidosis, benign breast disease |
| LDH | Hemolysis, liver disease, MI, vigorous exercise, sample handling |
| B2M | Renal insufficiency (primary confounder), any inflammatory state |

### Integration with Staging Systems

**Testicular Germ Cell (IGCCCG Classification):**
| Risk | AFP (ng/mL) | HCG (mIU/mL) | LDH |
|------|-------------|---------------|-----|
| Good | < 1,000 | < 5,000 | < 1.5x ULN |
| Intermediate | 1,000–10,000 | 5,000–50,000 | 1.5–10x ULN |
| Poor | > 10,000 | > 50,000 | > 10x ULN |

**Multiple Myeloma (R-ISS):**
- Stage I: B2M < 3.5 mg/L + albumin ≥ 3.5 g/dL + standard-risk cytogenetics + normal LDH
- Stage III: B2M > 5.5 mg/L + high-risk cytogenetics or elevated LDH

**Hepatocellular Carcinoma:**
- AFP > 400 ng/mL in cirrhotics is highly suggestive of HCC
- AFP-L3 (lectin-reactive fraction): > 10% more specific for HCC vs benign liver disease
- DCP (des-gamma-carboxy prothrombin): Complementary marker to AFP`,
      keyTerms: [
        { term: 'PSA doubling time', definition: 'Time for PSA to double; < 3 months indicates aggressive disease; important post-treatment prognostic factor' },
        { term: 'AFP-L3', definition: 'Lectin-reactive AFP fraction; more specific for HCC than total AFP' },
        { term: 'IGCCCG classification', definition: 'International Germ Cell Cancer Collaborative Group risk stratification using post-orchiectomy AFP, HCG, and LDH' },
        { term: 'positive predictive value (PPV)', definition: 'Probability that a person with a positive test truly has the disease; depends on prevalence' },
      ],
      clinicalNotes:
        'Marker kinetics (half-life, doubling time, velocity) often provide more actionable clinical information than absolute values. Always assess the trajectory.',
    },
    5: {
      level: 5,
      summary:
        'Expert tumor marker analysis integrates liquid biopsy technologies, multi-analyte panels, circulating tumor DNA, and evidence-based guideline synthesis for precision oncology.',
      explanation: `## Expert-Level Tumor Marker Analysis

### Emerging Liquid Biopsy Technologies

**Circulating Tumor DNA (ctDNA):**
- Cell-free DNA fragments shed by tumors into blood
- Applications: Early detection (e.g., Galleri multi-cancer test), minimal residual disease (MRD), treatment resistance monitoring
- Sensitivity depends on tumor burden, shedding rate, and assay (NGS vs dPCR)
- ctDNA clearance post-treatment correlates with outcome in CRC, NSCLC, breast cancer

**Circulating Tumor Cells (CTCs):**
- CellSearch platform: ≥ 5 CTCs/7.5 mL blood prognostic in metastatic breast, prostate, colorectal cancer
- Limited by low sensitivity in early-stage disease
- CTC molecular characterization may guide therapy (e.g., AR-V7 in prostate cancer)

**Multi-Cancer Early Detection (MCED):**
- Galleri test: Methylation-based cfDNA assay detecting 50+ cancer types
- PATHFINDER trial: 1.4% cancer signal detected, 38% PPV
- NHS-Galleri trial: Large-scale RCT of population screening
- Limitations: Lower sensitivity for stage I (17%) vs stage IV (90%); cost-effectiveness under study

### Guideline Synthesis

**PSA Screening (2023 AUA/ASCO/NCCN Consensus):**
- Shared decision-making for ages 55–69 (USPSTF Grade C)
- Consider early baseline PSA at age 45–50 for risk stratification
- mpMRI + targeted biopsy replacing systematic biopsy for PSA 4–10
- Stockholm3 model and 4Kscore integrate multiple biomarkers for improved specificity
- PHI (Prostate Health Index) = ([-2]proPSA / free PSA) × √PSA; improves detection of clinically significant cancer

**HCC Surveillance (AASLD 2023):**
- AFP + ultrasound every 6 months for at-risk patients
- AFP-L3 and DCP under investigation as adjuncts (GALAD score)
- GALAD = Gender, Age, AFP-L3, AFP, DCP → AUC 0.92 for early HCC detection
- Abbreviated MRI protocols being studied as alternative to ultrasound

**Ovarian Cancer (NCCN 2024):**
- No population-based screening recommended (UK COLS trial: screening did not reduce mortality)
- HE4 (Human Epididymis Protein 4): Complementary to CA-125; not elevated by endometriosis
- ROMA (Risk of Ovarian Malignancy Algorithm): Combines CA-125 + HE4 + menopausal status
- OVA1 (multivariate index assay): 5-protein panel for adnexal mass risk stratification

### Multi-Analyte Panels and Algorithms

| Panel | Components | Application |
|-------|-----------|-------------|
| ROMA | CA-125 + HE4 + menopausal status | Adnexal mass triage |
| GALAD | AFP + AFP-L3 + DCP + age + gender | HCC early detection |
| PHI | PSA + free PSA + [-2]proPSA | Prostate cancer detection |
| 4Kscore | Total PSA + free PSA + intact PSA + hK2 | Aggressive prostate cancer risk |
| CancerSEEK | 8 proteins + ctDNA (16 genes) | Multi-cancer detection (research) |
| OVA1 | CA-125 + transthyretin + ApoA1 + B2M + transferrin | Ovarian mass classification |

### Molecular Markers Beyond Traditional Tumor Markers

**Microsatellite Instability (MSI) / Mismatch Repair (MMR):**
- Not a serum marker but essential biomarker in CRC and endometrial cancer
- Predicts immunotherapy response (pembrolizumab for MSI-H/dMMR tumors)

**PD-L1 Expression and Tumor Mutational Burden (TMB):**
- Guide checkpoint inhibitor therapy across tumor types
- TMB ≥ 10 mut/Mb: FDA-approved indication for pembrolizumab (tumor-agnostic)

**Minimal Residual Disease (MRD) via ctDNA:**
- Signatera (tumor-informed ctDNA): Detects MRD in CRC, breast, bladder cancer
- ctDNA-guided adjuvant therapy trials (DYNAMIC in CRC): ctDNA-negative patients may safely forgo chemotherapy
- Leads radiographic recurrence by median 8–9 months in CRC

### Evidence Appraisal

| Marker Use | Level of Evidence | Key Trials |
|------------|-------------------|------------|
| PSA screening | 1A (controversial) | PLCO, ERSPC, CAP |
| CEA monitoring CRC | 2A | FACS, CEAwatch |
| AFP + US for HCC | 2A | Multiple cohort studies |
| CA-125 screening ovarian | 1A (not recommended) | UKCTOCS, PLCO |
| ctDNA-guided CRC adjuvant | 2B (emerging) | DYNAMIC, CIRCULATE |
| MCED screening | 2B (emerging) | PATHFINDER, NHS-Galleri |

### Sensitivity and Specificity Summary Table

| Marker | Cancer | Sensitivity | Specificity | Best Use |
|--------|--------|-------------|-------------|----------|
| PSA (≥4) | Prostate | 21% any / 51% high-grade | 91% | Monitoring post-treatment |
| CEA (≥5) | CRC | 25–50% early / 75% late | 90% | Post-surgical surveillance |
| AFP (≥20) | HCC | 60% | 90% | Surveillance in cirrhosis |
| CA-125 (≥35) | Ovarian | 50% early / 80% late | 97% (post-menopause) | Monitoring response/recurrence |
| CA 19-9 (≥37) | Pancreatic | 80% | 82% | Treatment monitoring |
| CA 15-3 (≥30) | Breast | 23% early / 69% metastatic | 87% | Monitoring metastatic disease |
| HCG | Germ cell | >95% (nonseminoma) | High | Staging, monitoring, MRD |
| B2M | Myeloma | N/A (prognostic) | N/A | ISS staging |`,
      keyTerms: [
        { term: 'circulating tumor DNA (ctDNA)', definition: 'Cell-free DNA fragments derived from tumor cells; used for liquid biopsy, MRD detection, and resistance monitoring' },
        { term: 'GALAD score', definition: 'Algorithm combining Gender, Age, AFP-L3, AFP, and DCP for HCC early detection; AUC ~0.92' },
        { term: 'ROMA', definition: 'Risk of Ovarian Malignancy Algorithm; integrates CA-125, HE4, and menopausal status for adnexal mass risk stratification' },
        { term: 'multi-cancer early detection (MCED)', definition: 'Emerging blood-based tests (e.g., Galleri) using cfDNA methylation to screen for multiple cancers simultaneously' },
      ],
      clinicalNotes:
        'The field is rapidly evolving from single-analyte tumor markers toward multi-analyte panels, liquid biopsy platforms, and ctDNA-guided treatment decisions. Evidence from ongoing RCTs (NHS-Galleri, DYNAMIC, CIRCULATE) will define the clinical integration of these technologies. Current guidelines still anchor on traditional markers for monitoring, with emerging tools for MRD and early detection.',
    },
  },

  media: [],
  citations: [
    {
      id: 'nccn-tumor-markers',
      type: 'website',
      title: 'NCCN Clinical Practice Guidelines: Tumor Markers',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org',
    },
    {
      id: 'devita-oncology',
      type: 'textbook',
      title: "DeVita, Hellman, and Rosenberg's Cancer: Principles & Practice of Oncology",
      authors: ['DeVita VT', 'Lawrence TS', 'Rosenberg SA'],
      source: 'Wolters Kluwer',
    },
  ],
  crossReferences: [
    { targetId: 'lab-afp', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-psa', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-cea', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-ca125', targetType: 'concept', relationship: 'child' },
  ],
  tags: {
    systems: ['oncologic'],
    topics: ['laboratory', 'oncology', 'screening', 'diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'ob-gyn'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
