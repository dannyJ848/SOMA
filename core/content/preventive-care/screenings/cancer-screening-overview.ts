/**
 * Cancer Screening Overview
 *
 * Comprehensive overview of cancer screening principles and recommendations
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const CANCER_SCREENING_OVERVIEW: EducationalContent = {
  id: 'concept-cancer-screening-overview',
  type: 'concept',
  name: 'Cancer Screening Overview',
  alternateNames: ['Cancer early detection', 'Cancer prevention screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer screening tests look for cancer before you have any symptoms, when treatment works best.',
      explanation: `Cancer screening is like a safety check for your body. These tests look for signs of cancer before you feel sick.

**Why Screen for Cancer?**
- Cancer found early is often easier to treat
- Early treatment can save lives
- Some tests can find pre-cancers before they become cancer

**Common Cancer Screening Tests:**

**Breast Cancer (Mammogram)**
- An X-ray of the breast
- Recommended for women starting at age 40-50
- Done every 1-2 years

**Colon Cancer (Colonoscopy)**
- A camera looks inside your colon
- Recommended starting at age 45
- Done every 10 years (or more often with other tests)

**Cervical Cancer (Pap Smear)**
- A sample from the cervix
- For women ages 21-65
- Done every 3-5 years

**Lung Cancer (CT Scan)**
- A special X-ray of the lungs
- For people who smoke or used to smoke heavily
- Done every year

**Prostate Cancer (PSA Test)**
- A blood test
- For men to discuss with their doctor
- Usually ages 55-69

**Important to Know:**
- Not everyone needs every test
- Your doctor will tell you which tests you need
- Age, family history, and habits affect recommendations
- Some tests have risks along with benefits`,
      keyTerms: [
        { term: 'screening', definition: 'A test to look for disease before symptoms appear' },
        { term: 'early detection', definition: 'Finding a disease in its early stages' },
        { term: 'pre-cancer', definition: 'Abnormal cells that might become cancer if not treated' },
      ],
      analogies: [
        'Cancer screening is like checking your car regularly to find problems before you break down on the highway.',
        'Think of screening as looking for small fires before they spread - much easier to put out early.',
      ],
      examples: [
        'A mammogram finds a tiny lump that cannot be felt, leading to early treatment and cure.',
        'A colonoscopy removes a polyp before it turns into cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer screening uses specific tests at recommended intervals to detect cancers early or identify precancerous conditions, improving treatment outcomes and survival rates.',
      explanation: `Cancer screening is the systematic testing of healthy individuals to detect cancer before symptoms develop. Early detection often leads to better outcomes because treatment is most effective when cancer is found at early stages.

**Goals of Cancer Screening:**
1. **Detect cancer early** - Find tumors when they're small and localized
2. **Find pre-cancerous changes** - Identify abnormalities that could become cancer
3. **Reduce cancer deaths** - Early treatment improves survival
4. **Reduce treatment intensity** - Early cancers often need less aggressive treatment

**Who Makes Screening Recommendations?**

The U.S. Preventive Services Task Force (USPSTF) evaluates scientific evidence and makes recommendations:
- **Grade A**: Strongly recommended (high benefit)
- **Grade B**: Recommended (moderate benefit)
- **Grade C**: Offer selectively (individual decision)
- **Grade D**: Not recommended (harms outweigh benefits)
- **Grade I**: Insufficient evidence

**Major Cancer Screenings:**

| Cancer Type | Test | Who Should Screen | How Often |
|-------------|------|-------------------|-----------|
| Breast | Mammogram | Women 50-74 | Every 2 years |
| Colorectal | Colonoscopy/stool tests | Adults 45-75 | Every 10 yrs (colonoscopy) |
| Cervical | Pap smear + HPV test | Women 21-65 | Every 3-5 years |
| Lung | Low-dose CT scan | Smokers 50-80 | Every year |
| Prostate | PSA blood test | Men 55-69 | Discuss with doctor |

**Risk Factors That May Change Recommendations:**
- Family history of cancer
- Genetic mutations (like BRCA for breast cancer)
- Personal history of cancer or precancer
- Environmental exposures
- Certain medical conditions

**Benefits vs. Risks:**
- Benefits: Earlier detection, better outcomes, peace of mind
- Risks: False positives, unnecessary procedures, overdiagnosis, anxiety`,
      keyTerms: [
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force - an independent panel that makes screening recommendations', pronunciation: 'U-S-P-S-T-F' },
        { term: 'false positive', definition: 'A test result that says you have cancer when you actually do not' },
        { term: 'false negative', definition: 'A test result that says you do not have cancer when you actually do' },
        { term: 'overdiagnosis', definition: 'Finding a cancer that would never have caused problems in your lifetime' },
      ],
      analogies: [
        'Screening guidelines are like a recommended maintenance schedule for your car - based on data about when problems typically arise.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cancer screening programs utilize evidence-based protocols to balance sensitivity and specificity of tests against the natural history of disease, considering number needed to screen (NNS), lead-time bias, and overdiagnosis to optimize population-level outcomes.',
      explanation: `Cancer screening represents a complex public health intervention that requires careful balance between benefits (early detection, reduced mortality) and harms (false positives, overdiagnosis, procedural complications).

**Principles of Effective Cancer Screening:**

**Wilson-Jungner Criteria (WHO):**
1. The condition should be an important health problem
2. There should be an accepted treatment
3. Facilities for diagnosis and treatment should be available
4. There should be a latent or early symptomatic stage
5. There should be a suitable screening test
6. The test should be acceptable to the population
7. The natural history should be adequately understood
8. There should be an agreed policy on whom to treat
9. The cost should be economically balanced
10. Screening should be a continuing process

**Test Performance Characteristics:**

*Sensitivity* - Ability to correctly identify those with disease
- High sensitivity = few false negatives
- Important for ruling OUT disease (SnNout)

*Specificity* - Ability to correctly identify those without disease
- High specificity = few false positives
- Important for ruling IN disease (SpPin)

*Positive Predictive Value (PPV)*
- Probability that positive test = true disease
- Depends on disease prevalence in population

*Negative Predictive Value (NPV)*
- Probability that negative test = truly disease-free

**USPSTF Evidence Review Process:**

1. Define key questions
2. Systematic literature review
3. Assess quality of evidence
4. Estimate magnitude of benefits and harms
5. Assess certainty of evidence
6. Assign grade (A, B, C, D, I)

**Current USPSTF Cancer Screening Recommendations:**

**Breast Cancer:**
- Biennial mammography ages 50-74 (Grade B)
- Ages 40-49: Individual decision (Grade C)
- BRCA testing if family history (Grade B)

**Colorectal Cancer:**
- All adults 45-75 (Grade A)
- Adults 76-85: Selective (Grade C)
- Options: Colonoscopy every 10 years, FIT yearly, CT colonography every 5 years

**Cervical Cancer:**
- Ages 21-29: Pap every 3 years (Grade A)
- Ages 30-65: Pap + HPV co-testing every 5 years OR Pap every 3 years (Grade A)
- Primary HPV testing every 5 years ages 30-65 (Grade A)

**Lung Cancer:**
- Annual LDCT for ages 50-80 with 20+ pack-year history, current or quit <15 years (Grade B)

**Prostate Cancer:**
- Ages 55-69: Shared decision-making (Grade C)
- Not recommended for men 70+ (Grade D)

**Number Needed to Screen (NNS):**
- Mammography (50-74): ~1,000-2,000 over 10 years to prevent 1 death
- Colonoscopy: ~500-1,000 to prevent 1 death
- LDCT lung: ~250-320 to prevent 1 death`,
      keyTerms: [
        { term: 'sensitivity', definition: 'True positive rate; the probability that a diseased person will have a positive test result' },
        { term: 'specificity', definition: 'True negative rate; the probability that a disease-free person will have a negative test result' },
        { term: 'positive predictive value (PPV)', definition: 'The probability that a person with a positive test truly has the disease' },
        { term: 'number needed to screen (NNS)', definition: 'The number of people who need to be screened to prevent one adverse outcome' },
        { term: 'lead-time bias', definition: 'Apparent increase in survival time due to earlier detection without actual outcome improvement' },
      ],
      clinicalNotes: 'When counseling patients, use absolute risk reduction rather than relative risk reduction. "The test reduces your risk of dying from colon cancer by 50%" is misleading if the baseline risk is only 2% (absolute reduction of 1%).',
    },
    4: {
      level: 4,
      summary: 'Optimal cancer screening implementation requires understanding of tumor biology, pre-clinical detectable phase (PCDP), sojourn time, sensitivity drift, and the complex interplay between detection advances and overdiagnosis, particularly for cancers with heterogeneous natural histories.',
      explanation: `**Theoretical Framework for Cancer Screening:**

**Natural History of Cancer:**

Cancer progression through stages:
1. Normal tissue
2. Initiation (genetic mutation)
3. Promotion (clonal expansion)
4. Pre-clinical detectable phase (PCDP)
5. Clinical detection (symptoms)
6. Treatment/outcome

**Key Concepts:**

*Sojourn Time:*
- Duration of pre-clinical detectable phase
- Shorter sojourn time = harder to detect by screening
- Longer sojourn time = more opportunity for detection
- Varies by cancer type and aggressiveness

*Critical Point:*
- Stage at which treatment no longer changes outcome
- Goal: detect before critical point
- Some cancers have short window between detection and critical point

*Sensitivity Drift:*
- Test sensitivity varies by tumor stage
- Earlier tumors harder to detect
- Impacts screening interval optimization

**Overdiagnosis in Cancer Screening:**

*Definition:* Detection of cancer that would never have become clinically apparent during the patient's lifetime.

*Mechanisms:*
1. Very slow-growing tumors
2. Competing mortality (patient dies of other cause first)
3. Spontaneous regression (rare but documented)

*Evidence by Cancer Type:*

| Cancer | Estimated Overdiagnosis Rate |
|--------|------------------------------|
| Prostate | 20-50% |
| Breast | 10-30% |
| Thyroid | 70-80% |
| Lung (LDCT) | 3-25% |
| Melanoma in situ | Significant |

*Clinical Implications:*
- Active surveillance protocols developed
- Risk stratification becoming essential
- Shared decision-making critical

**Molecular and Biomarker Advances:**

*Liquid Biopsy:*
- Circulating tumor DNA (ctDNA)
- Circulating tumor cells (CTCs)
- Multi-cancer early detection (MCED) tests
- Galleri test: detects 50+ cancer types
- GRAIL study data: Sensitivity varies by stage (Stage I: 17-25%; Stage III: 75-90%)

*Germline Genetic Testing:*
- BRCA1/2 for breast/ovarian
- Lynch syndrome genes for CRC
- CDH1 for gastric cancer
- Population-based testing debates ongoing

*Polygenic Risk Scores:*
- Combining multiple common variants
- May modify screening recommendations
- Breast cancer: 313-SNP score validated
- Colorectal cancer: Emerging evidence

**Screening Interval Optimization:**

*Factors:*
- Sojourn time of target cancer
- Test sensitivity at each stage
- Incidence in target population
- Cost-effectiveness thresholds
- Patient compliance/burden

*Modeling Approaches:*
- Microsimulation models (CISNET)
- Markov models
- Cost-effectiveness analysis

**Special Populations:**

*High-Risk Groups:*
- BRCA carriers: MRI + mammography, earlier age, more frequent
- Lynch syndrome: Colonoscopy every 1-2 years from age 20-25
- Family history: Often 10 years before earliest diagnosis

*Stopping Screening:*
- Life expectancy considerations (<10 years benefit window)
- Competing comorbidities
- Patient preferences
- Diminishing returns with advanced age`,
      keyTerms: [
        { term: 'sojourn time', definition: 'The duration of the preclinical detectable phase; the period during which disease can be detected by screening before symptoms develop' },
        { term: 'overdiagnosis', definition: 'The detection of disease that would never have become clinically apparent or caused death during the patient\'s natural lifetime' },
        { term: 'lead-time', definition: 'The interval between screen detection and when the disease would have presented clinically without screening' },
        { term: 'PCDP', definition: 'Pre-clinical detectable phase; the period when disease is detectable by screening but not yet symptomatic' },
        { term: 'CISNET', definition: 'Cancer Intervention and Surveillance Modeling Network; consortium that develops cancer simulation models' },
        { term: 'liquid biopsy', definition: 'Blood-based test detecting circulating tumor DNA, cells, or other cancer biomarkers' },
      ],
      clinicalNotes: 'When discussing overdiagnosis, frame it carefully: "This test may find something that would never cause you harm, but once found, we cannot distinguish it from cancer that would be dangerous, so treatment is usually recommended."',
    },
    5: {
      level: 5,
      summary: 'Contemporary cancer screening integrates precision medicine approaches with population-level strategies, utilizing risk-stratified protocols, multi-cancer early detection platforms, AI-enhanced imaging interpretation, and sophisticated benefit-harm frameworks while addressing health equity challenges and evolving evidence on optimal implementation.',
      explanation: `**Precision Screening Paradigm:**

The evolution from one-size-fits-all age-based screening to risk-stratified approaches represents a fundamental shift in cancer early detection strategy.

**Risk Stratification Models:**

*Breast Cancer:*
- Tyrer-Cuzick (IBIS) model: Integrates genetic, hormonal, and imaging factors
- Gail model: Age, reproductive history, family history
- BRCAPRO: Probability of BRCA mutation
- Breast density (BI-RADS): Independent risk factor
- Polygenic risk scores: 313-SNP score adds prognostic value

*Clinical Application:*
- Lifetime risk >20%: Add annual MRI to mammography
- Moderate risk (15-20%): Consider supplemental screening
- Average risk: Standard biennial mammography

*Colorectal Cancer:*
- Family history algorithms
- Emerging polygenic risk scores
- Fecal immunochemical test (FIT) compliance monitoring
- Adenoma detection rate quality metrics

**Multi-Cancer Early Detection (MCED):**

*Galleri Test (GRAIL):*
- Methylation-based cell-free DNA analysis
- Detects 50+ cancer types
- Cancer Signal Origin (CSO) prediction for localization
- Sensitivity by stage: I (17%), II (40%), III (77%), IV (90%)
- Specificity: 99.5%

*Clinical Considerations:*
- Not yet USPSTF recommended
- False positive cascade effects
- Unknown impact on cancer mortality
- Cost-effectiveness pending
- Ongoing trials: NHS-Galleri (140,000 participants)

*PATHFINDER Study Results:*
- Cancer detected in 1.4% of participants
- 38% of detected cancers would not have been found by standard screening
- Resolution of abnormal results without invasive testing in some cases

**Artificial Intelligence in Screening:**

*Mammography:*
- Deep learning achieves radiologist-level performance
- AI triage can reduce reading volume by 40-70%
- FDA-approved algorithms available
- Debate: AI-assisted vs AI-standalone

*Colonoscopy:*
- Computer-aided detection (CADe) for polyp identification
- Increases adenoma detection rate (ADR) by 10-15%
- GI Genius, EndoBrain-EYE approved devices

*Low-Dose CT:*
- AI for nodule detection and characterization
- Lung-RADS standardization
- Volumetric analysis for growth assessment

**Implementation Science:**

*Barriers to Optimal Screening:*
1. Access (geographic, financial, insurance)
2. Knowledge/awareness
3. Trust in healthcare system
4. Time/convenience
5. Fear of results
6. Competing priorities

*Evidence-Based Interventions:*
- Mailed FIT kits increase CRC screening by 20-30%
- Patient navigation improves colonoscopy completion
- Mobile mammography increases access
- Culturally tailored messaging improves uptake
- Text message reminders effective

*Health Equity Considerations:*
- Black individuals have higher CRC mortality (may warrant earlier screening)
- Black men have higher prostate cancer mortality
- Asian populations have different cancer profiles (gastric, liver)
- Insurance coverage disparities
- Language and cultural barriers

**Cost-Effectiveness Framework:**

*Standard Thresholds:*
- $50,000-$150,000 per QALY typically considered cost-effective
- LDCT lung: ~$81,000/QALY (borderline)
- Colonoscopy: <$50,000/QALY (cost-effective)
- MCED: Currently exceeds thresholds, may improve with scale

*Resource Allocation:*
- Colonoscopy capacity constraints
- Radiologist shortage for mammography/LDCT
- Integration of less resource-intensive alternatives
- FIT, HPV self-collection, AI-assisted reading

**Emerging Paradigms:**

*Blood-Based Detection:*
- ctDNA for minimal residual disease (MRD)
- Proteomics panels
- Exosome analysis
- Metabolomics

*Prevention Integration:*
- HPV vaccination reducing cervical cancer incidence
- Aspirin for CRC prevention (with appropriate risk stratification)
- H. pylori eradication for gastric cancer
- Hepatitis B vaccination for hepatocellular carcinoma

*Personalized Intervals:*
- Breast density-adjusted mammography frequency
- Adenoma-based colonoscopy surveillance
- CT finding-based lung cancer screening intervals

**Quality Metrics and Reporting:**

*Key Performance Indicators:*
- Screening rate (percentage of eligible population screened)
- Colonoscopy ADR (adenoma detection rate) - minimum 25%
- Mammography cancer detection rate per 1,000
- Recall rate (target <10% for mammography)
- Time to diagnostic resolution

*Accreditation:*
- ACR accreditation for mammography
- ACOG for Pap smears
- GI society guidelines for colonoscopy quality`,
      keyTerms: [
        { term: 'MCED', definition: 'Multi-cancer early detection; blood-based tests capable of detecting multiple cancer types from a single sample' },
        { term: 'cancer signal origin (CSO)', definition: 'Prediction of the anatomical location of cancer origin based on methylation or other molecular patterns' },
        { term: 'adenoma detection rate (ADR)', definition: 'Quality metric for colonoscopy representing the percentage of procedures in which at least one adenoma is detected' },
        { term: 'QALY', definition: 'Quality-adjusted life year; metric combining quantity and quality of life for cost-effectiveness analysis' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; tumor-derived DNA fragments detectable in blood' },
        { term: 'minimal residual disease (MRD)', definition: 'Small numbers of cancer cells remaining after treatment, detectable by sensitive molecular methods' },
      ],
      clinicalNotes: `**Implementation Pearls:**
- Use shared decision-making for Grade C recommendations (prostate, breast 40-49)
- Document discussions and patient preferences
- Integrate risk calculators into EHR workflows
- Monitor and address screening disparities in your practice
- Stay current: USPSTF updates guidelines approximately every 5 years
- Consider MCED tests for high-risk patients requesting "more complete" screening, but set appropriate expectations about current evidence limitations
- Quality improvement: Track your ADR, recall rates, and follow-up on abnormal results`,
    },
  },

  media: [
    {
      id: 'cancer-screening-flowchart',
      type: 'diagram',
      filename: 'cancer-screening-decision-flowchart.svg',
      title: 'Cancer Screening Decision Flowchart',
      description: 'Visual guide for cancer screening decisions based on age and risk factors',
    },
  ],

  citations: [
    {
      id: 'uspstf-cancer-screening',
      type: 'website',
      title: 'USPSTF Cancer Screening Recommendations',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'acs-screening-guidelines',
      type: 'website',
      title: 'American Cancer Society Screening Guidelines',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org/cancer/screening.html',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-mammogram-screening', targetType: 'concept', relationship: 'child', label: 'Mammogram Screening' },
    { targetId: 'concept-colonoscopy-screening', targetType: 'concept', relationship: 'child', label: 'Colonoscopy Screening' },
    { targetId: 'concept-pap-smear-screening', targetType: 'concept', relationship: 'child', label: 'Pap Smear Screening' },
    { targetId: 'concept-psa-screening', targetType: 'concept', relationship: 'child', label: 'PSA Screening' },
    { targetId: 'concept-lung-cancer-screening', targetType: 'concept', relationship: 'child', label: 'Lung Cancer Screening' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'oncology', 'screening', 'public health'],
    keywords: ['cancer screening', 'early detection', 'USPSTF', 'mammogram', 'colonoscopy', 'Pap smear', 'PSA', 'lung cancer CT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
