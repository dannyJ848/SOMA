/**
 * Prostate Cancer Screening - Comprehensive Educational Content
 *
 * Covers PSA testing, screening guidelines, risk assessment,
 * diagnostic workup, and shared decision-making in prostate cancer detection.
 */

import { EducationalContent } from '../../types';

export const prostateCancerScreening: EducationalContent = {
  id: 'concept-prostate-cancer-screening',
  type: 'concept',
  name: 'Prostate Cancer Screening',
  alternateNames: ['PSA Screening', 'Prostate Cancer Detection', 'PSA Testing', 'Prostate Examination'],

  levels: {
    1: {
      level: 1,
      summary: 'Prostate cancer screening uses a blood test called PSA and a physical exam to look for cancer early, before it causes symptoms.',
      explanation: `Prostate cancer is one of the most common cancers in men. Screening means looking for cancer before you have any symptoms, when it might be easier to treat.

**What is Screening?**
Screening tests look for diseases early, before they cause problems. For prostate cancer, screening involves:

1. **PSA Blood Test**
   - PSA stands for "prostate-specific antigen"
   - It is a protein made by the prostate gland
   - A simple blood test measures how much PSA is in your blood
   - Higher levels might (but do not always) mean cancer

2. **Digital Rectal Exam (DRE)**
   - The doctor feels the prostate through the rectum
   - They check for lumps or hard areas
   - Not as useful as PSA for finding early cancer

**What Does the PSA Number Mean?**
- PSA is measured in ng/mL (nanograms per milliliter)
- Normal is usually considered below 4.0 ng/mL
- Higher PSA can be caused by:
  - Prostate cancer
  - Enlarged prostate (BPH) - very common and NOT cancer
  - Prostate infection
  - Recent ejaculation
  - Bicycle riding

**Why is Screening Controversial?**
- Many prostate cancers grow very slowly and may never cause problems
- Finding and treating these cancers may cause more harm than good (side effects of treatment)
- Treatment side effects can include: Difficulty urinating, erectile dysfunction, bowel problems
- But some prostate cancers are aggressive and need to be found early

**When Should Men Consider Screening?**
- Talk to your doctor about whether screening is right for you
- The decision should be based on your individual risk factors
- Generally considered for men aged 50-70
- Earlier for men at higher risk (African American, family history)

**Making the Decision:**
You and your doctor should discuss:
- Your overall health and life expectancy
- Your personal values and preferences
- The potential benefits and harms of screening
- Your risk factors for prostate cancer`,
      keyTerms: [
        { term: 'PSA', definition: 'Prostate-specific antigen - a protein in the blood that can be elevated with prostate problems', pronunciation: 'P-S-A' },
        { term: 'screening', definition: 'Looking for disease in people who have no symptoms' },
        { term: 'digital rectal exam', definition: 'An exam where the doctor feels the prostate through the rectum with a gloved finger' },
        { term: 'false positive', definition: 'When a test says you might have a problem, but you actually do not' },
      ],
      analogies: [
        'PSA is like a smoke detector - it can alert you to a potential problem, but sometimes it goes off when there is no fire (false alarm).',
        'Finding prostate cancer early is like catching a small leak before it floods your house - but sometimes the "leak" is so tiny it would never cause a problem.',
      ],
      examples: [
        'A 55-year-old man gets a PSA test of 5.2 ng/mL. This is slightly elevated, but it might be from an enlarged prostate (BPH), not cancer. More testing is needed.',
        'A 60-year-old man with a family history of prostate cancer discusses screening with his doctor and decides to get annual PSA tests.',
      ],
    },
    2: {
      level: 2,
      summary: 'PSA-based screening involves measuring serum PSA levels to detect prostate cancer early, balanced against the risks of overdiagnosis and overtreatment of indolent disease.',
      explanation: `## Epidemiology of Prostate Cancer

**In the United States:**
- Second most common cancer in men (after skin cancer)
- ~270,000 new cases annually
- ~35,000 deaths annually
- Lifetime risk: 1 in 8 men diagnosed; 1 in 41 die from it
- Most common after age 65

**Risk Factors:**
- Age (strongest risk factor)
- African American race (1.7× higher incidence, 2× mortality)
- Family history (2-3× risk with first-degree relative)
- BRCA1/BRCA2 mutations
- High-fat diet, obesity (possibly)

## PSA Biology

**What is PSA?**
- Glycoprotein produced by prostatic epithelium
- Function: Liquefies semen
- Normally present in low levels in blood
- Organ-specific, NOT cancer-specific

**Causes of Elevated PSA:**
| Condition | PSA Effect |
|-----------|------------|
| Prostate cancer | Elevated |
| BPH | Elevated (0.3 ng/mL per gram of tissue) |
| Prostatitis | Elevated (may be dramatic) |
| Recent ejaculation | Mild elevation for 24-48 hours |
| Prostatic manipulation | Elevated (DRE causes minimal effect) |
| Urinary retention | Elevated |
| 5-alpha reductase inhibitors | Reduced by 50% |

## Screening Tests

**PSA Thresholds:**
- Traditional cutoff: 4.0 ng/mL
- No PSA level guarantees absence of cancer
- 15% of men with PSA <4.0 have cancer on biopsy
- Most cancers found with PSA 4-10 are low-grade

**Age-Adjusted PSA Ranges:**
| Age | "Normal" PSA |
|-----|--------------|
| 40-49 | <2.5 ng/mL |
| 50-59 | <3.5 ng/mL |
| 60-69 | <4.5 ng/mL |
| 70-79 | <6.5 ng/mL |

**PSA Refinements:**
1. **PSA density**: PSA ÷ prostate volume
   - >0.15 suggests cancer
2. **PSA velocity**: Rate of change over time
   - >0.75 ng/mL/year concerning
3. **Free PSA percentage**: Free PSA ÷ Total PSA
   - Low free PSA (<10%) more likely cancer
   - High free PSA (>25%) more likely BPH

**Digital Rectal Exam:**
- Detects only posterior-peripheral zone tumors
- Low sensitivity for early cancer
- Abnormal DRE warrants biopsy regardless of PSA
- No longer recommended as standalone screening tool

## Benefits and Harms of Screening

**Benefits:**
- Earlier detection of cancer
- Potential mortality reduction (controversial)
- Peace of mind if negative

**Harms:**
- False positives leading to unnecessary biopsies
- Overdiagnosis of indolent cancers
- Overtreatment with side effects (incontinence, ED)
- Anxiety from elevated PSA
- Biopsy complications (pain, bleeding, infection)

## Screening Guidelines

**American Urological Association (AUA):**
- Shared decision-making for men 55-69
- Do not screen men <40 or >70 or with <10-year life expectancy
- Consider earlier discussion for high-risk men (African American, family history)

**US Preventive Services Task Force (USPSTF):**
- Informed decision-making for men 55-69 (Grade C)
- Do not screen men ≥70 (Grade D)

**American Cancer Society:**
- Informed decision-making starting at age 50
- Earlier for high-risk men (45 for African American/family history; 40 for multiple relatives)

## Diagnostic Workup After Elevated PSA

**Initial Evaluation:**
1. Repeat PSA (confirm elevation)
2. Rule out infection (urinalysis)
3. Digital rectal exam

**If PSA Persistently Elevated:**
- Consider biomarkers (see below)
- MRI prostate (increasingly used before biopsy)
- Prostate biopsy if indicated

**Prostate Biopsy:**
- TRUS-guided systematic biopsy (traditional)
- MRI-fusion targeted biopsy (emerging standard)
- 12-core template sampling
- Complications: Hematuria, hematospermia, infection (1-3%), sepsis (<1%)`,
      keyTerms: [
        { term: 'PSA density', definition: 'PSA level divided by prostate volume; helps distinguish BPH from cancer' },
        { term: 'PSA velocity', definition: 'Rate of PSA increase over time; rapid rise suggests cancer' },
        { term: 'free PSA', definition: 'Unbound PSA in blood; lower percentage suggests cancer' },
        { term: 'overdiagnosis', definition: 'Detection of cancers that would never cause symptoms or death' },
        { term: 'TRUS biopsy', definition: 'Transrectal ultrasound-guided needle biopsy of the prostate' },
      ],
      analogies: [
        'PSA density is like adjusting the speed limit based on road conditions - what is "high" depends on how big the prostate is.',
        'Overdiagnosis is like finding every tiny crack in a building - some need repair, but many would never cause the building to fall.',
      ],
    },
    3: {
      level: 3,
      summary: 'Contemporary prostate cancer screening integrates PSA kinetics, serum and urine biomarkers, risk calculators, and multiparametric MRI to improve the positive predictive value and reduce overdiagnosis of clinically insignificant disease.',
      explanation: `## Advanced PSA Interpretation

**PSA Kinetics:**
1. **PSA velocity (PSAV)**:
   - Rate of change over ≥18 months with ≥3 measurements
   - PSAV >0.75 ng/mL/year: 5× increased cancer risk
   - May predict aggressive cancer

2. **PSA doubling time (PSADT)**:
   - Time for PSA to double
   - Used primarily for monitoring after treatment
   - PSADT <3 months suggests aggressive recurrence

**PSA Isoforms:**
- Total PSA = Free PSA + Complexed PSA
- Complexed PSA: Bound to alpha-1-antichymotrypsin (ACT), alpha-2-macroglobulin
- Free PSA: Includes proPSA, BPSA, intact PSA
- [-2]proPSA: Isoform associated with cancer

## Novel Biomarkers

**Serum Biomarkers:**

| Test | Components | Use |
|------|------------|-----|
| Prostate Health Index (PHI) | [-2]proPSA, free PSA, total PSA | PSA 4-10, reduces unnecessary biopsies |
| 4Kscore | Total PSA, free PSA, intact PSA, hK2 + clinical variables | Predicts high-grade cancer |

**PHI Calculation:**
PHI = ([-2]proPSA / free PSA) × √(total PSA)
- PHI <27: Low risk
- PHI 27-35: Intermediate
- PHI >35: High risk

**Urine Biomarkers:**

| Test | Target | Collection |
|------|--------|------------|
| PCA3 | Non-coding RNA overexpressed in cancer | First-void urine after DRE |
| SelectMDx | HOXC6 + DLX1 mRNA | First-void urine after DRE |
| ExoDx Prostate (EPI) | Exosomal ERG, PCA3 | First-void urine (no DRE required) |
| MyProstateScore (MPS) | TMPRSS2:ERG + PCA3 | First-void urine after DRE |

**PCA3 Score:**
- PCA3 mRNA / PSA mRNA ratio
- Score >25 suggests increased cancer risk
- Not affected by prostate size
- Most useful in repeat biopsy setting

## Risk Calculators

**Prostate Cancer Prevention Trial Risk Calculator (PCPTRC):**
- Inputs: PSA, DRE, age, race, family history, prior biopsy
- Outputs: Risk of any cancer, high-grade cancer
- Available online: https://riskcalc.org

**ERSPC Risk Calculators:**
- European-derived models
- Incorporate DRE, TRUS volume, PSA, prior biopsy
- Multiple versions (3, 4, 5, 6)

**Stockholm3 Test:**
- Combines protein biomarkers, genetic markers, clinical data
- Reduces unnecessary biopsies while detecting significant cancer
- Validated primarily in European populations

## Multiparametric MRI (mpMRI)

**Sequences:**
1. T2-weighted imaging: Anatomic detail, zonal anatomy
2. Diffusion-weighted imaging (DWI): Cellularity, ADC maps
3. Dynamic contrast-enhanced (DCE): Vascularity, enhancement curves

**PI-RADS Scoring (v2.1):**
| Score | Likelihood of Significant Cancer | Recommendation |
|-------|----------------------------------|----------------|
| 1 | Very low | No biopsy |
| 2 | Low | No biopsy (usually) |
| 3 | Intermediate | Consider biomarkers or targeted biopsy |
| 4 | High | MRI-targeted biopsy |
| 5 | Very high | MRI-targeted biopsy |

**MRI Before Biopsy:**
- PRECISION trial: MRI-targeted detected 12% more significant cancers while reducing overall biopsies
- Can reduce detection of insignificant (Gleason 3+3) cancers
- Increasingly recommended before first biopsy

## Biopsy Approaches

**Systematic Biopsy:**
- 12-core template (sextant bilateral: apex, mid, base)
- TRUS-guided
- Misses 20-30% of significant cancers
- Detects many insignificant cancers

**MRI-Fusion Biopsy:**
- Targets PI-RADS 3-5 lesions
- Cognitive fusion vs software platform (UroNav, Artemis)
- Combined with systematic biopsy (current standard)
- Improved detection of Gleason ≥7 cancer

**Transperineal Biopsy:**
- Through perineum rather than rectum
- Eliminates rectal sepsis risk
- Better sampling of anterior prostate
- Increasingly adopted

**Biopsy Complications:**
- Hematuria (40-50%), hematospermia (30-40%): Self-limited
- Rectal bleeding (2-5%)
- Infection: TRUS 2-4%, transperineal <1%
- Urinary retention (1-2%)
- Sepsis: TRUS 1-3%, transperineal rare

## Chemoprevention

**5-Alpha Reductase Inhibitors:**
- PCPT trial: Finasteride reduced prostate cancer by 25%
- REDUCE trial: Dutasteride reduced cancer by 23%
- Concern: Possible increase in high-grade cancer (likely detection artifact)
- Not FDA-approved for prevention
- Consider in high-risk patients after discussion`,
      keyTerms: [
        { term: 'PHI', definition: 'Prostate Health Index - composite biomarker improving specificity of PSA screening' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System - standardized MRI interpretation scale' },
        { term: 'MRI-fusion biopsy', definition: 'Combining MRI images with real-time ultrasound for targeted prostate sampling' },
        { term: 'PCA3', definition: 'Prostate Cancer Antigen 3 - non-coding RNA overexpressed in prostate cancer' },
        { term: 'transperineal biopsy', definition: 'Prostate biopsy through the perineum avoiding rectal route and sepsis risk' },
      ],
      clinicalNotes: 'MRI before biopsy detects more significant cancers while reducing unnecessary biopsies. PI-RADS 4-5 lesions warrant targeted biopsy. Transperineal approach eliminates sepsis risk from rectal bacteria. PHI and 4Kscore most useful in PSA 4-10 "gray zone" to guide biopsy decision.',
    },
    4: {
      level: 4,
      summary: 'Risk-stratified prostate cancer screening utilizes genetic risk scores, advanced imaging biomarkers, and liquid biopsy technologies to personalize screening intensity and biopsy decisions while minimizing overdiagnosis.',
      explanation: `## Genetic Risk Stratification

**Polygenic Risk Scores (PRS):**
- Combines ~250 SNPs associated with prostate cancer
- Provides odds ratio compared to average population risk
- Can identify men who benefit most from screening
- Integration with clinical factors improves prediction

**Germline Mutations:**
| Gene | Cancer Risk | Screening Implication |
|------|-------------|----------------------|
| BRCA2 | 3-8× increased | Screen from age 40-45 |
| BRCA1 | 2-4× increased | Screen from age 40-45 |
| HOXB13 G84E | 3-4× increased | Earlier screening |
| ATM, CHEK2, PALB2 | 1.5-2× increased | Consider earlier screening |
| Lynch syndrome (MMR genes) | 2-5× increased | Earlier screening |

**NCCN Recommendations for Germline Testing:**
- Family history of prostate cancer (especially metastatic/lethal)
- Ashkenazi Jewish ancestry
- Known family mutation
- Personal history of high-risk/metastatic prostate cancer

## Advanced Imaging Biomarkers

**Quantitative MRI Metrics:**
- ADC values: Lower ADC correlates with higher Gleason
- ADC <750 × 10^-6 mm²/s suggests significant cancer
- Tumor volume on MRI predicts pathologic volume
- Extraprostatic extension detection on T2

**PSMA PET/CT:**
- Prostate-specific membrane antigen imaging
- Higher sensitivity than conventional imaging for metastases
- Emerging role in high-risk patients before definitive therapy
- May detect unsuspected metastatic disease

**Radiomics and AI:**
- Texture analysis of MRI images
- Machine learning classification of lesions
- Computer-aided detection (CAD) systems
- Potential to standardize PI-RADS interpretation

## Liquid Biopsy Technologies

**Circulating Tumor Cells (CTCs):**
- Present in advanced disease
- Limited utility in screening/early detection
- CellSearch platform FDA-approved for prognosis

**Circulating Tumor DNA (ctDNA):**
- Tumor-derived DNA fragments in blood
- Detects mutations, copy number changes
- Emerging in castration-resistant disease monitoring
- Early detection sensitivity limited

**Exosome-Based Assays:**
- ExoDx Prostate (EPI): Non-invasive urine test
- Exosomal RNA analysis
- Predicts high-grade cancer on biopsy
- Can be used before initial or repeat biopsy

## Screening Program Design

**Risk-Adapted Screening:**
1. **Baseline PSA at age 45-50**:
   - PSA <1.0 ng/mL: Rescreen in 5-10 years
   - PSA 1.0-3.0: Rescreen in 2-4 years
   - PSA >3.0: Further evaluation (biomarkers, MRI)

2. **Genetic risk integration**:
   - High PRS: Start earlier, screen more frequently
   - Low PRS: May safely extend screening intervals
   - Known BRCA2: Screen from age 40

**European Randomized Study (ERSPC) Protocol:**
- PSA every 4 years
- 21% mortality reduction at 16-year follow-up
- NNS (number needed to screen): 570 to prevent 1 death
- NNT (number needed to treat): 18 to prevent 1 death

**PLCO Trial Issues:**
- High contamination (control arm screening)
- Cannot conclude screening has no benefit
- Different from ERSPC findings

## Shared Decision-Making Framework

**Information to Discuss:**
1. Risk of prostate cancer (personalized if possible)
2. What PSA testing involves
3. Potential benefits: Early detection, possible mortality reduction
4. Potential harms: False positives, biopsy complications, overdiagnosis
5. Downstream decisions: Biopsy, active surveillance vs treatment
6. Patient values and preferences

**Decision Aids:**
- AUA/ACS decision aids available
- Increase patient knowledge
- Reduce decisional conflict
- May reduce PSA testing rates (not necessarily bad)

**Documentation:**
- Document shared decision-making discussion
- Record patient's decision
- Note any risk factors influencing recommendation

## Active Surveillance After Detection

**Importance to Screening Discussion:**
- Low-risk cancer can be monitored without immediate treatment
- Reduces overtreatment harm
- Makes screening more favorable risk-benefit
- Should be discussed when explaining screening

**Active Surveillance Eligibility (Typical):**
- Gleason 3+3=6 (Grade Group 1)
- PSA <10-20 ng/mL
- ≤2 positive cores, ≤50% involvement
- Clinical stage T1-T2a

**Monitoring Protocol:**
- PSA every 3-6 months
- DRE every 6-12 months
- Repeat biopsy within 12 months, then periodically
- MRI for surveillance increasingly used`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Genetic test combining multiple SNPs to quantify inherited prostate cancer risk' },
        { term: 'PSMA PET', definition: 'Prostate-specific membrane antigen positron emission tomography for detecting prostate cancer' },
        { term: 'active surveillance', definition: 'Monitoring low-risk prostate cancer without immediate treatment' },
        { term: 'number needed to screen (NNS)', definition: 'Number of men who must be screened to prevent one death from prostate cancer' },
        { term: 'radiomics', definition: 'Quantitative analysis of medical imaging features using computational methods' },
      ],
      clinicalNotes: 'Baseline PSA at age 45-50 can guide screening intensity. Men with BRCA2 mutations should begin screening at age 40-45. Active surveillance eligibility should be discussed when counseling about screening - reduces concern about overtreatment. Document shared decision-making conversations.',
    },
    5: {
      level: 5,
      summary: 'Precision prostate cancer screening integrates germline and somatic genomics, advanced imaging with artificial intelligence, novel biomarker platforms, and health system implementation science to optimize the balance between early detection benefits and minimization of overdiagnosis and overtreatment.',
      explanation: `## Genomic Integration

**Germline Risk Panels:**
- BRCA1/2, ATM, CHEK2, PALB2, HOXB13, Lynch genes
- 10-15% of metastatic prostate cancer patients carry pathogenic variants
- NCCN recommends testing for:
  - Metastatic prostate cancer
  - High-risk localized disease
  - Family history criteria
- Cascade testing of family members

**Polygenic Risk Score Implementation:**
- Currently ~270 SNPs in validated scores
- Adds predictive value beyond PSA and family history
- Not yet standard of care; emerging evidence
- Commercial tests available (e.g., Genomics plc)
- May guide who benefits most from intensive screening

**Tumor Genomics in Screening Context:**
- ConfirmMDx: Methylation markers in negative biopsy tissue
- Oncotype DX GPS: Tumor genomic profiling for risk stratification
- Prolaris: Cell cycle progression score
- Decipher: 22-gene genomic classifier
- These inform treatment decisions, indirectly affect screening value

## AI-Enhanced Imaging

**Automated PI-RADS Assessment:**
- Convolutional neural networks for lesion detection
- Comparable accuracy to experienced radiologists
- Potential to standardize interpretation
- FDA-cleared systems emerging (e.g., AIProstate)

**Radiomics Signatures:**
- Texture features (entropy, homogeneity, correlation)
- Shape features
- Intensity histogram features
- Combined with clinical data in machine learning models
- Can predict Gleason grade, extracapsular extension

**PSMA PET Quantification:**
- SUVmax, tumor volume metrics
- Predictive of biochemical recurrence
- May identify oligometastatic disease for focal therapy
- Emerging role in high-risk staging

## Novel Biomarker Platforms

**Single-Cell Technologies:**
- CTC characterization at single-cell level
- Heterogeneity assessment
- AR splice variant detection (AR-V7)
- Currently research/advanced disease focused

**Methylation-Based Liquid Biopsy:**
- Tumor-specific methylation patterns in cfDNA
- GRAIL multi-cancer early detection (includes prostate)
- High specificity, moderate sensitivity
- Expensive, insurance coverage variable

**Proteomics:**
- Mass spectrometry-based protein panels
- Discovery of novel markers
- Validation in large cohorts ongoing

**Metabolomics:**
- Sarcosine (initially promising, now debated)
- Polyamine signatures
- Research stage

## Health System Implementation

**Population-Based Screening Programs:**
- Organized vs opportunistic screening
- Sweden: Population-based PSA testing programs
- UK: PROSTAGRAM trial (population MRI screening)
- US: Predominantly opportunistic

**Screening Quality Metrics:**
- Shared decision-making documentation rate
- Biopsy rates per elevated PSA
- Cancer detection rate per biopsy
- Significant cancer detection rate
- Time from abnormal PSA to diagnosis

**Cost-Effectiveness:**
- Screening cost-effective if targeted appropriately
- MRI before biopsy may be cost-effective despite MRI cost
- Biomarkers add cost but may reduce unnecessary procedures
- Active surveillance utilization affects overall value

## Controversies and Ongoing Trials

**PSA Screening Debate:**
| Position | Evidence | Argument |
|----------|----------|----------|
| Pro-screening | ERSPC 21% mortality reduction | Saves lives with risk-adapted approach |
| Anti-screening | PLCO no benefit (but contaminated) | Overdiagnosis harms exceed benefits |
| Moderate | Both | Shared decision-making with high-risk focus |

**PLCO Re-Analysis:**
- Contamination rate >80% in control arm
- When adjusted, suggests mortality reduction
- Not directly comparable to ERSPC

**Ongoing Trials:**
1. **ProScreen (Finland)**: Risk-adapted screening with MRI
2. **PROSTAGRAM (UK)**: Non-contrast MRI as screening tool
3. **IP2-PROSTAGRAM**: Full mpMRI screening
4. **STHLM3-MRI**: Stockholm3 with MRI in clinical practice

## Future Directions

**Urine-Based Multi-Cancer Detection:**
- DNA, RNA, protein, metabolite combinations
- Home collection possible
- Repeated testing for sensitivity

**Artificial Intelligence Integration:**
- End-to-end risk prediction: Demographics → PSA → biomarkers → imaging → biopsy recommendation
- Real-time clinical decision support
- Automated follow-up scheduling

**Personalized Screening Intervals:**
- Dynamic models adjusting to individual trajectories
- Machine learning with longitudinal data
- Continuous risk assessment vs periodic testing

**Prevention Integration:**
- Lifestyle modification counseling
- Chemoprevention for highest risk
- Holistic approach to men's health

## Special Populations

**African American Men:**
- Earlier onset, higher mortality
- Consider screening discussion at age 40-45
- May benefit most from organized screening
- Require culturally appropriate counseling

**Men with BRCA2:**
- IMPACT study: Elevated cancer risk confirmed
- Annual PSA from age 40
- Lower PSA threshold for biopsy (3.0 ng/mL)
- Higher rate of clinically significant cancer

**Older Men:**
- Screening generally not recommended >70 or <10-year life expectancy
- Individualize based on health status
- Avoid screening in men with limited life expectancy
- Active surveillance preferred for detected cancers

**Transgender Women:**
- Maintain prostate; cancer rare but possible
- Limited data on screening
- PSA levels lower on hormone therapy
- Shared decision-making if appropriate`,
      keyTerms: [
        { term: 'ConfirmMDx', definition: 'Epigenetic tissue assay detecting field cancerization in negative prostate biopsies' },
        { term: 'multi-cancer early detection (MCED)', definition: 'Blood tests designed to screen for multiple cancer types including prostate' },
        { term: 'IMPACT study', definition: 'Trial demonstrating value of PSA screening in BRCA mutation carriers' },
        { term: 'field cancerization', definition: 'Molecular abnormalities in tissue adjacent to cancer that may indicate unsampled disease' },
        { term: 'Stockholm3 test', definition: 'Integrated screening test combining blood biomarkers, genetic markers, and clinical variables' },
      ],
      clinicalNotes: `**Board-Relevant Clinical Pearls:**
- ERSPC: 21% mortality reduction with screening (16-year data)
- BRCA2 carriers: Screen from age 40, threshold PSA 3.0 ng/mL
- PI-RADS 4-5: MRI-targeted biopsy recommended
- 5-ARIs reduce PSA by 50% - double measured value
- MRI before biopsy (PRECISION trial): More significant cancers, fewer biopsies
- Transperineal biopsy: Eliminates sepsis risk
- Shared decision-making required before PSA testing (USPSTF, AUA)
- Active surveillance for low-risk cancer reduces overtreatment harm`,
    },
  },

  media: [
    {
      id: 'psa-interpretation-algorithm',
      type: 'diagram',
      filename: 'psa-interpretation-algorithm.svg',
      title: 'PSA Interpretation Algorithm',
      description: 'Decision pathway for evaluating elevated PSA levels',
    },
    {
      id: 'pirads-examples',
      type: 'image',
      filename: 'pirads-examples.jpg',
      title: 'PI-RADS Scoring Examples',
      description: 'MRI examples of PI-RADS 1-5 lesions',
    },
    {
      id: 'screening-guidelines-comparison',
      type: 'diagram',
      filename: 'screening-guidelines-comparison.svg',
      title: 'Screening Guidelines Comparison',
      description: 'AUA, USPSTF, and ACS prostate cancer screening recommendations',
    },
  ],

  citations: [
    {
      id: 'aua-psa-guidelines',
      type: 'article',
      title: 'Early Detection of Prostate Cancer: AUA Guideline',
      authors: ['Carter HB', 'Albertsen PC', 'Barry MJ', 'et al.'],
      source: 'Journal of Urology',
      chapter: '190(2):419-426',
      url: 'https://doi.org/10.1016/j.juro.2013.04.119',
    },
    {
      id: 'erspc-trial',
      type: 'article',
      title: 'Prostate Cancer Mortality at 11 Years of Follow-up',
      authors: ['Schroder FH', 'Hugosson J', 'Roobol MJ', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '366(11):981-990',
    },
    {
      id: 'precision-trial',
      type: 'article',
      title: 'MRI-Targeted or Standard Biopsy for Prostate-Cancer Diagnosis',
      authors: ['Kasivisvanathan V', 'Rannikko AS', 'Borghi M', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '378(19):1767-1777',
    },
  ],

  crossReferences: [
    { targetId: 'condition-benign-prostatic-hyperplasia', targetType: 'condition', relationship: 'related', label: 'BPH' },
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'oncology-cancer-biology', targetType: 'topic', relationship: 'related', label: 'Cancer Biology' },
    { targetId: 'process-urological-procedures', targetType: 'topic', relationship: 'related', label: 'Urological Procedures' },
  ],

  tags: {
    systems: ['reproductive', 'urinary'],
    topics: ['oncology', 'urology', 'preventive-medicine', 'screening'],
    keywords: ['PSA', 'prostate cancer', 'screening', 'MRI', 'biopsy', 'PI-RADS'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostateCancerScreening;
