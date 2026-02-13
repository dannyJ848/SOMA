/**
 * Cancer Screening - Screening & Prevention
 *
 * Comprehensive content on cancer screening methods, guidelines,
 * and USPSTF recommendations including mammography, colonoscopy,
 * Pap smear/HPV, PSA, lung cancer (LDCT), and skin cancer screening.
 */

import { EducationalContent } from '../types';

export const cancerScreening: EducationalContent = {
  id: 'screening-cancer-screening',
  type: 'topic',
  name: 'Cancer Screening',
  alternateNames: ['Cancer Detection', 'Cancer Prevention Screening', 'Oncology Screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer screening means checking your body for cancer before you have any symptoms, so doctors can find it early when it is easiest to treat.',
      explanation: `Cancer screening is like getting a safety inspection for your body. Doctors use special tests to look for signs of cancer before you feel sick.

**Why Screen for Cancer?**
- Finding cancer early makes it much easier to treat
- Some screenings can actually prevent cancer by finding problems before they become cancer
- Many cancers have no symptoms in the early stages

**Common Cancer Screenings:**

**Breast Cancer (Mammogram):**
- A special X-ray of the breast
- Recommended for women starting around age 40-50
- Done every 1-2 years

**Colon Cancer (Colonoscopy):**
- A doctor looks inside your colon with a tiny camera
- Recommended starting at age 45
- Can find and remove growths (polyps) before they turn into cancer

**Cervical Cancer (Pap Smear):**
- A quick test done during a pelvic exam
- Checks for changes in cells of the cervix
- Recommended for women starting at age 21

**Lung Cancer (CT Scan):**
- A special scan for people who have smoked heavily
- Recommended for long-term smokers ages 50-80

**Skin Cancer:**
- A doctor checks your skin for unusual moles or spots
- Anyone can get skin cancer, but it is more common in people with fair skin

**What You Should Do:**
- Talk to your doctor about which screenings are right for you
- Keep up with your screening schedule
- Tell your doctor about your family history of cancer`,
      keyTerms: [
        { term: 'screening', definition: 'A test done to check for a disease before you have symptoms' },
        { term: 'mammogram', definition: 'A special X-ray picture of the breast used to look for cancer' },
        { term: 'colonoscopy', definition: 'A test where a doctor uses a tiny camera to look inside your colon' },
        { term: 'Pap smear', definition: 'A test that checks for changes in cells of the cervix that could lead to cancer' },
      ],
      analogies: [
        'Cancer screening is like a smoke detector - it catches problems early before they become a big fire.',
        'Getting regular screenings is like taking your car for an inspection - it catches small problems before they become expensive repairs.',
        'A mammogram is like looking through a window into the breast to check for anything unusual.',
      ],
      examples: [
        'A 50-year-old woman gets a mammogram every two years to check for breast cancer.',
        'A 45-year-old man gets his first colonoscopy, and the doctor removes a small polyp that could have become cancer.',
        'A 25-year-old woman gets a Pap smear during her regular checkup.',
      ],
      patientCounselingPoints: [
        'Talk to your doctor about which cancer screenings you need based on your age and risk.',
        'Screenings are usually quick and can save your life by finding cancer early.',
        'If you have a family history of cancer, tell your doctor - you may need screenings earlier.',
        'Do not skip screenings even if you feel healthy - early cancer often has no symptoms.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer screening uses specific tests to detect cancer or precancerous changes in asymptomatic individuals, following evidence-based guidelines from organizations like the USPSTF.',
      explanation: `## Cancer Screening Overview

Cancer screening aims to detect malignancies or precancerous conditions before symptoms develop, improving treatment outcomes and survival rates.

## Key Screening Tests

### Mammography (Breast Cancer)
- **What it detects:** Breast tumors, calcifications, tissue changes
- **Who should get it:** Women aged 40-74 (timing varies by guideline)
- **Frequency:** Every 1-2 years depending on risk and guidelines
- **USPSTF recommendation:** Biennial screening ages 40-74 (Grade B)

### Colonoscopy (Colorectal Cancer)
- **What it detects:** Polyps, adenomas, colorectal cancer
- **Who should get it:** Adults starting at age 45
- **Frequency:** Every 10 years (if normal), or more often with findings
- **Alternatives:** Stool-based tests (FIT, Cologuard) done more frequently

### Pap Smear & HPV Testing (Cervical Cancer)
- **What it detects:** Abnormal cervical cells, HPV infection
- **Who should get it:** Women aged 21-65
- **Frequency:** Pap every 3 years (21-29), Pap + HPV co-testing every 5 years (30-65)

### Low-Dose CT (Lung Cancer)
- **What it detects:** Lung nodules and early-stage lung cancer
- **Who should get it:** Adults 50-80 with 20+ pack-year smoking history
- **Frequency:** Annual

### PSA Test (Prostate Cancer)
- **What it detects:** Elevated prostate-specific antigen levels
- **Who should get it:** Men aged 55-69 (shared decision-making)
- **Controversy:** Risk of overdiagnosis and overtreatment

### Skin Cancer Screening
- **What it detects:** Melanoma, basal cell carcinoma, squamous cell carcinoma
- **Method:** Full-body skin examination by dermatologist
- **Who should get it:** Based on individual risk factors

## Understanding Results
- **True positive:** Cancer correctly identified
- **False positive:** Test says cancer is present when it is not (leads to unnecessary worry and procedures)
- **False negative:** Test misses actual cancer
- **Overdiagnosis:** Finding a cancer that would never have caused harm`,
      keyTerms: [
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force - a panel of experts that makes evidence-based screening recommendations' },
        { term: 'false positive', definition: 'A test result that incorrectly indicates cancer is present when it is not' },
        { term: 'polyp', definition: 'A small growth on the lining of the colon that can sometimes become cancerous' },
        { term: 'PSA', definition: 'Prostate-specific antigen - a protein measured in the blood to screen for prostate cancer' },
        { term: 'LDCT', definition: 'Low-dose computed tomography - a type of CT scan using less radiation, used for lung cancer screening' },
      ],
      analogies: [
        'False positives in screening are like a fire alarm that goes off when you burn toast - scary but not a real fire.',
        'Removing polyps during colonoscopy is like pulling weeds before they take over the garden.',
      ],
      examples: [
        'A woman with dense breasts may need additional imaging like ultrasound alongside mammography.',
        'A 55-year-old man discusses the pros and cons of PSA testing with his doctor before deciding.',
        'A long-term smoker qualifies for annual low-dose CT screening to catch lung cancer early.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cancer screening employs validated modalities targeting specific malignancies in defined at-risk populations, balancing sensitivity and specificity while considering lead-time bias, length bias, and overdiagnosis.',
      explanation: `## Cancer Screening: Principles and Modalities

### Screening Framework
Effective cancer screening requires:
1. **Detectable preclinical phase** - Disease can be identified before symptoms
2. **Available effective treatment** - Early detection changes outcomes
3. **Acceptable test** - Safe, affordable, with adequate sensitivity/specificity
4. **Net benefit** - Benefits outweigh harms (false positives, overdiagnosis)

### Mammography
- **Sensitivity:** 75-90% (lower in dense breast tissue)
- **Specificity:** ~90%
- **Digital breast tomosynthesis (3D mammography):** Improves detection in dense breasts
- **BI-RADS scoring:** Standardized reporting system (0-6)
- **Risk factors for enhanced screening:** BRCA1/2 mutations, strong family history, prior chest radiation

### Colonoscopy
- **Gold standard** for colorectal cancer screening
- **Adenoma detection rate (ADR):** Quality metric for colonoscopists (target >25%)
- **Polyp-cancer sequence:** Adenoma to carcinoma progression over 10-15 years
- **Alternative modalities:**
  - FIT (fecal immunochemical test) - annual
  - mt-sDNA (Cologuard) - every 3 years
  - CT colonography - every 5 years
  - Flexible sigmoidoscopy - every 5 years

### Cervical Cancer Screening
- **Pap cytology:** Bethesda classification system (NILM, ASC-US, LSIL, HSIL, AGC)
- **HPV testing:** High-risk HPV types (16, 18 most oncogenic)
- **Colposcopy:** Follow-up for abnormal results with biopsy
- **CIN grading:** Cervical intraepithelial neoplasia I-III

### Lung Cancer Screening (LDCT)
- **NLST trial:** Demonstrated 20% reduction in lung cancer mortality
- **NELSON trial:** 24% mortality reduction in men
- **Eligibility:** 50-80 years, 20+ pack-year history, current or quit within 15 years
- **Lung-RADS:** Standardized reporting for LDCT findings

### PSA Screening
- **Normal PSA:** Generally <4.0 ng/mL (age-dependent)
- **PSA density, velocity, free-to-total ratio:** Improve specificity
- **Gleason score / Grade Groups:** Tumor grading if biopsy performed
- **USPSTF:** Grade C (ages 55-69) - individualized decision-making

### Skin Cancer
- **ABCDE criteria:** Asymmetry, Border, Color, Diameter, Evolving
- **Dermoscopy:** Enhanced visualization of skin lesions
- **No USPSTF recommendation** for general population screening (Grade I - insufficient evidence)

### Statistical Concepts in Screening
- **Lead-time bias:** Earlier detection appears to increase survival without changing outcome
- **Length bias:** Screening preferentially detects slower-growing tumors
- **Number needed to screen (NNS):** Number screened to prevent one death`,
      keyTerms: [
        { term: 'sensitivity', definition: 'The ability of a test to correctly identify people who have the disease (true positive rate)' },
        { term: 'specificity', definition: 'The ability of a test to correctly identify people who do not have the disease (true negative rate)' },
        { term: 'lead-time bias', definition: 'The apparent increase in survival time due to earlier detection without actual change in outcome' },
        { term: 'adenoma-carcinoma sequence', definition: 'The progression from normal tissue to adenomatous polyp to colorectal carcinoma over 10-15 years' },
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System - standardized classification for mammographic findings (0-6)' },
        { term: 'overdiagnosis', definition: 'Detection of a cancer that would never have caused symptoms or death during the patient\'s lifetime' },
      ],
      examples: [
        'A 45-year-old with a first-degree relative diagnosed with CRC at 50 should begin screening at age 40 (10 years before relative\'s diagnosis).',
        'A mammogram reported as BI-RADS 4 (suspicious) requires tissue biopsy for definitive diagnosis.',
        'A Pap smear showing HSIL (high-grade squamous intraepithelial lesion) warrants colposcopy with biopsy.',
      ],
    },
    4: {
      level: 4,
      summary: 'Cancer screening programs integrate epidemiological evidence, molecular biomarkers, risk stratification models, and cost-effectiveness analyses to optimize population-level detection while minimizing harms from overdiagnosis and overtreatment.',
      explanation: `## Advanced Cancer Screening Concepts

### Risk Stratification and Personalized Screening

#### Breast Cancer
- **Gail Model / Tyrer-Cuzick Model:** Quantify lifetime and 5-year breast cancer risk
- **Genetic testing:** BRCA1/2, PALB2, ATM, CHEK2 variants modify screening approach
- **High-risk protocols:** Annual MRI alternating with mammography for BRCA carriers
- **Dense breast legislation:** Many states mandate notification and supplemental screening
- **Contrast-enhanced mammography (CEM):** Emerging modality with MRI-comparable sensitivity
- **AI-assisted detection:** Machine learning algorithms improving radiologist performance

#### Colorectal Cancer
- **Lynch syndrome screening:** MSI/IHC testing on tumor tissue; germline MLH1, MSH2, MSH6, PMS2
- **Hereditary polyposis syndromes:** FAP (APC gene), MAP (MUTYH), Peutz-Jeghers (STK11)
- **Emerging biomarkers:** Cell-free DNA (cfDNA), methylated SEPT9, multi-target stool panels
- **Interval cancers:** CRC detected between screening intervals - related to serrated pathway and proximal location
- **Quality metrics:** ADR, cecal intubation rate, bowel preparation adequacy, withdrawal time

#### Cervical Cancer
- **HPV genotype-specific risk:** HPV 16 confers highest risk; HPV 18 associated with adenocarcinoma
- **Primary HPV screening:** FDA-approved as standalone screening strategy
- **Dual-stain cytology (p16/Ki-67):** Triage marker for HPV-positive women
- **ASCCP risk-based management:** 2019 consensus guidelines using risk thresholds for colposcopy

#### Lung Cancer
- **PLCOm2012 model:** Risk prediction incorporating multiple variables beyond pack-years
- **Lung-RADS categories and management:**
  - 1 (Negative): Continue annual screening
  - 2 (Benign appearance): Continue annual screening
  - 3 (Probably benign): 6-month LDCT follow-up
  - 4A/4B (Suspicious): Diagnostic CT, PET, or tissue sampling
- **Incidental findings:** Coronary calcification, emphysema, thyroid nodules common on LDCT
- **Smoking cessation integration:** Screening programs should include cessation counseling

#### Prostate Cancer
- **Multiparametric MRI (mpMRI):** PI-RADS scoring before biopsy
- **PHI (Prostate Health Index):** [-2]proPSA, free PSA, total PSA combination
- **4Kscore:** Kallikrein panel predicting high-grade prostate cancer
- **Active surveillance:** Management strategy for low-risk prostate cancer avoiding overtreatment
- **ISUP Grade Groups:** Replaced traditional Gleason scoring system

### Health Economics of Screening
- **ICER (incremental cost-effectiveness ratio):** Dollars per quality-adjusted life year (QALY) gained
- **USPSTF grading framework:**
  - A: High certainty of substantial net benefit
  - B: High certainty of moderate or moderate certainty of substantial net benefit
  - C: Moderate certainty of small net benefit (individualized)
  - D: Moderate/high certainty of no net benefit or harms outweigh benefits
  - I: Insufficient evidence
- **ACA coverage mandate:** A and B recommendations must be covered without cost-sharing`,
      keyTerms: [
        { term: 'Lynch syndrome', definition: 'Hereditary condition caused by mismatch repair gene mutations (MLH1, MSH2, MSH6, PMS2) conferring high lifetime CRC and other cancer risks' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System - standardized scoring for multiparametric MRI findings (1-5)' },
        { term: 'cfDNA', definition: 'Cell-free DNA - fragments of tumor DNA circulating in the blood, used as a liquid biopsy biomarker' },
        { term: 'ICER', definition: 'Incremental cost-effectiveness ratio - the ratio of cost difference to effectiveness difference between interventions' },
        { term: 'active surveillance', definition: 'Close monitoring of low-risk cancer with serial testing, deferring treatment until evidence of progression' },
      ],
      clinicalNotes: `**Key Clinical Considerations:**
- Risk calculators should inform personalized screening intervals, not replace clinical judgment
- Shared decision-making is mandatory for Grade C recommendations (e.g., PSA screening)
- Incidental findings from screening studies require standardized management protocols
- Screening adherence disparities exist across racial, socioeconomic, and geographic lines
- Integration of smoking cessation with lung cancer screening improves overall outcomes`,
      examples: [
        'A 40-year-old Ashkenazi Jewish woman with a sister diagnosed with breast cancer at 38 undergoes BRCA testing and is found to carry BRCA1; she begins alternating MRI and mammography every 6 months.',
        'A 60-year-old man with PSA of 5.2 ng/mL undergoes mpMRI showing a PI-RADS 4 lesion, leading to MRI-targeted fusion biopsy revealing Gleason 3+4=7 (Grade Group 2).',
      ],
    },
    5: {
      level: 5,
      summary: 'Cancer screening at the professional level integrates multi-cancer early detection (MCED) assays, polygenic risk scores, evolving guidelines from competing societies, and population health infrastructure considerations alongside the limitations of current evidence.',
      explanation: `## Frontier Topics in Cancer Screening

### Multi-Cancer Early Detection (MCED) Tests
- **Galleri (Grail):** Cell-free DNA methylation-based assay detecting 50+ cancer types with tissue-of-origin prediction
  - PATHFINDER study: Signal detected in 1.4% of screened participants; 38% PPV for cancer
  - NHS-Galleri trial: 140,000-participant randomized trial underway in the UK
  - Limitations: Lower sensitivity for early-stage and low-shedding tumors
- **CancerSEEK (Thrive):** Combines cfDNA mutations with protein biomarkers
- **DETECT-A trial:** Real-world evidence for multi-analyte blood tests
- **Regulatory status:** No MCED test has USPSTF recommendation as of current guidelines
- **Clinical integration challenges:** Diagnostic workup for signal-positive/unknown-primary results

### Polygenic Risk Scores (PRS) in Screening
- **Breast cancer PRS:** 300+ SNPs combined improve Gail model discrimination
- **Colorectal cancer PRS:** May identify average-risk individuals who benefit from earlier screening
- **Implementation barriers:** Ancestry bias, clinical utility validation, health equity concerns
- **BOADICEA model integration:** Combines PRS with family history and known pathogenic variants

### Evolving Guideline Controversies
- **Mammography start age:** USPSTF 2024 lowered to 40 (Grade B); ACS recommends choice at 40, regular at 45
- **CRC screening start age:** Lowered from 50 to 45 across major guidelines - driven by rising incidence in younger adults
- **Prostate cancer screening:** AUA risk-adapted approach vs. USPSTF shared decision-making framework
- **Cervical screening exit age:** 65 years per USPSTF; concerns about missed adenocarcinomas in older women
- **Thyroid cancer:** USPSTF recommends against screening asymptomatic adults (Grade D) despite rising incidence (largely overdiagnosis)

### Liquid Biopsy and Emerging Technologies
- **ctDNA analysis:** Tumor-derived fragments for minimal residual disease and early detection
- **Methylation profiling:** Tissue-specific patterns enable cancer-type identification
- **Fragmentomics:** Fragment length and end-motif patterns of cfDNA as biomarkers
- **AI in screening:** FDA-cleared mammography algorithms, real-time colonoscopy polyp detection (CADe/CADx), automated Gleason grading

### Population Health and Research Frontiers
- **Organized vs. opportunistic screening:** Registries, invitation systems, quality assurance
- **Screening equity:** Disparities by race, socioeconomic status, insurance, geography
- **HPV self-collection:** Home-based sampling to improve cervical screening access
- **Adaptive screening intervals:** Dynamic risk-based scheduling using longitudinal biomarker data`,
      keyTerms: [
        { term: 'MCED', definition: 'Multi-cancer early detection - blood-based tests designed to detect multiple cancer types simultaneously through cfDNA methylation or multi-analyte panels' },
        { term: 'polygenic risk score', definition: 'A quantitative measure of genetic predisposition calculated from the combined effect of many common genetic variants (SNPs)' },
        { term: 'fragmentomics', definition: 'Analysis of cell-free DNA fragment size distribution and end-motif patterns as biomarkers for cancer detection' },
        { term: 'CADe', definition: 'Computer-aided detection - AI algorithms that identify and flag potential lesions in real time during screening procedures' },
        { term: 'liquid biopsy', definition: 'Analysis of tumor-derived biomarkers (ctDNA, CTCs, exosomes) from blood or other body fluids as a non-invasive cancer detection method' },
      ],
      clinicalNotes: `**Professional Practice Points:**
- MCED tests are not yet guideline-recommended and should complement, not replace, standard screening
- Polygenic risk scores are not validated across all ancestries; use with caution in diverse populations
- AI-assisted screening should function as decision support, not replace clinical interpretation
- Incidental findings management requires institutional protocols and multidisciplinary coordination
- Shared decision-making tools (decision aids, risk calculators) improve patient understanding and satisfaction
- Quality metrics (ADR, callback rates, cancer detection rates) must be tracked for continuous improvement`,
      examples: [
        'A health system implements a Galleri-based MCED pilot alongside standard screening and tracks diagnostic resolution pathways for signal-detected cases.',
        'A 48-year-old woman with a breast cancer PRS in the top 5th percentile is reclassified to high-risk and offered enhanced screening with MRI despite no family history.',
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'uspstf-recommendations',
      type: 'website',
      title: 'USPSTF A and B Recommendations',
      source: 'United States Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics/uspstf-a-and-b-recommendations',
      license: 'Public Domain',
    },
    {
      id: 'acs-screening-guidelines',
      type: 'website',
      title: 'American Cancer Society Screening Guidelines',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org/cancer/screening.html',
      license: 'Copyright ACS',
    },
    {
      id: 'nlst-trial',
      type: 'article',
      title: 'Reduced Lung-Cancer Mortality with Low-Dose Computed Tomographic Screening',
      authors: ['National Lung Screening Trial Research Team'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1102873',
    },
  ],
  crossReferences: [
    {
      targetId: 'screening-metabolic-screening',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Metabolic Screening',
    },
  ],
  tags: {
    systems: ['oncology', 'preventive-medicine'],
    topics: ['screening', 'prevention', 'public-health', 'oncology'],
    keywords: [
      'cancer screening', 'mammography', 'colonoscopy', 'Pap smear', 'HPV',
      'PSA', 'LDCT', 'lung cancer', 'USPSTF', 'MCED', 'liquid biopsy',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'ob-gyn'],
    },
  },

  createdAt: '2026-01-30T00:00:00Z',
  updatedAt: '2026-01-30T00:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['biological-self-team'],
};
