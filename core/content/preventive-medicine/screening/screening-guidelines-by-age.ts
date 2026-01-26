/**
 * Screening Guidelines by Age
 *
 * Age-appropriate preventive health screenings based on
 * USPSTF recommendations and major medical society guidelines.
 */

import { EducationalContent } from '../../types';

export const SCREENING_GUIDELINES_BY_AGE: EducationalContent = {
  id: 'concept-screening-guidelines-age',
  type: 'concept',
  name: 'Screening Guidelines by Age',
  alternateNames: ['Age-based health screenings', 'Preventive health by age group'],

  levels: {
    1: {
      level: 1,
      summary: 'Health checkups help find problems early when they are easier to treat. Different age groups need different types of checkups.',
      explanation: `Going to the doctor isn't just for when you're sick! Regular checkups can find health problems before they cause symptoms.

**Why Screenings Matter:**
- Finding problems early often means easier treatment
- Many serious diseases have no symptoms at first
- Prevention is better than cure

**What to Expect at Different Ages:**

**Children (0-18 years):**
- Growth and development checks
- Vision and hearing tests
- Vaccinations
- Check for common childhood problems

**Young Adults (18-39 years):**
- Blood pressure checks
- Cholesterol tests (if at risk)
- Skin cancer awareness
- Mental health screening

**Middle Age (40-64 years):**
- Regular blood pressure and cholesterol checks
- Diabetes screening
- Cancer screenings begin (depending on type)
- Eye exams

**Seniors (65+ years):**
- All the middle-age screenings plus
- Bone density tests
- Hearing tests
- Memory checks

Your doctor will tell you exactly which tests you need based on your age and health history.`,
      keyTerms: [
        { term: 'screening', definition: 'A test to check for a disease before you have symptoms' },
        { term: 'prevention', definition: 'Stopping health problems before they start' },
        { term: 'checkup', definition: 'A regular visit to the doctor to make sure you are healthy' },
      ],
      analogies: [
        'Screenings are like car inspections - catching small problems before they become big, expensive repairs.',
        'Think of preventive care like brushing your teeth - doing a little regularly prevents major problems later.',
      ],
      examples: [
        'A blood pressure check takes less than a minute but can prevent heart attacks and strokes.',
        'Children get vision tests to catch problems before they affect school performance.',
      ],
    },
    2: {
      level: 2,
      summary: 'Preventive screening recommendations are organized by age groups to detect diseases early when treatment is most effective.',
      explanation: `Preventive health screenings are evidence-based tests recommended at specific ages to catch diseases early. The United States Preventive Services Task Force (USPSTF) provides guidelines used by most doctors.

**Screening Categories:**
1. **Cardiovascular** - Blood pressure, cholesterol
2. **Metabolic** - Blood sugar, diabetes
3. **Cancer** - Various types by age and gender
4. **Infectious Disease** - HIV, hepatitis, STIs
5. **Sensory** - Vision, hearing
6. **Mental Health** - Depression, anxiety

**Age-Specific Recommendations:**

**Ages 18-39:**
- Blood pressure: Every 3-5 years (annually if elevated)
- HIV testing: At least once
- Cholesterol: Start at 35 (men) or if risk factors present
- Skin self-exams: Monthly
- Dental checkups: Every 6 months
- Cervical cancer screening: Ages 21-29 (Pap smear every 3 years)

**Ages 40-49:**
- Blood pressure: Annually
- Diabetes screening: Every 3 years if BMI ≥25
- Cholesterol: Every 5 years
- Mammography: Discuss with doctor (may start at 40 or 50)
- Eye exam: Every 2-4 years

**Ages 50-64:**
- Colorectal cancer screening: Every 10 years (colonoscopy) or more frequent with other methods
- Lung cancer screening: If smoking history
- All previous screenings continue
- Osteoporosis screening: Women at 65 (earlier if risk factors)

**Ages 65+:**
- Bone density test: Women (and men with risk factors)
- Abdominal aortic aneurysm: One-time screening (men who smoked)
- Hearing test: As needed
- Fall risk assessment: Annually
- Cognitive screening: As indicated`,
      keyTerms: [
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force - an independent panel that makes evidence-based screening recommendations', pronunciation: 'U-S-P-S-T-F' },
        { term: 'evidence-based', definition: 'Recommendations supported by scientific research' },
        { term: 'risk factors', definition: 'Conditions that increase your chance of getting a disease' },
        { term: 'baseline', definition: 'An initial measurement used for comparison in future tests' },
      ],
      analogies: [
        'Age-based screening is like grade-specific testing in school - different ages have different needs and capabilities.',
      ],
    },
    3: {
      level: 3,
      summary: 'Age-stratified screening guidelines are derived from epidemiological data on disease incidence, screening test performance characteristics, and benefit-harm analyses to optimize early detection while minimizing unnecessary interventions.',
      explanation: `Preventive screening recommendations integrate disease epidemiology, test sensitivity/specificity, natural disease history, and treatment efficacy to determine optimal screening ages and intervals.

**Principles of Screening:**
1. **Wilson-Jungner Criteria** (WHO, 1968):
   - Disease must be important health problem
   - Accepted treatment available
   - Facilities for diagnosis and treatment available
   - Recognizable latent or early symptomatic stage
   - Suitable screening test exists
   - Test acceptable to population
   - Natural history of disease understood
   - Agreed policy on whom to treat
   - Cost-effective
   - Screening should be continuous, not one-time

2. **USPSTF Grading System:**
   - **A**: High certainty of substantial net benefit - recommend
   - **B**: High certainty of moderate benefit or moderate certainty of substantial benefit - recommend
   - **C**: May be appropriate for select patients - offer selectively
   - **D**: Harms outweigh benefits - recommend against
   - **I**: Insufficient evidence

**Comprehensive Age-Based Screening:**

**Ages 18-39:**

| Screening | Frequency | Population | Grade |
|-----------|-----------|------------|-------|
| Blood pressure | Every 3-5 years | All adults ≥18 | A |
| HIV | At least once | All adolescents/adults 15-65 | A |
| Hepatitis C | Once | All adults 18-79 | B |
| Cervical cancer (Pap) | Every 3 years | Women 21-29 | A |
| Chlamydia/Gonorrhea | Annually | Sexually active women <25 | B |
| Depression | Annually | All adults | B |

**Ages 40-49:**

| Screening | Frequency | Population | Grade |
|-----------|-----------|------------|-------|
| Diabetes (prediabetes) | Every 3 years | Adults 35-70, BMI ≥25 | B |
| Lipid disorders | Every 5 years | Adults 40-75 | B |
| Mammography | Biennial | Women 40-49 (shared decision) | C |
| Cervical cancer | Every 5 years | Women 30-65 (Pap + HPV co-test) | A |

**Ages 50-64:**

| Screening | Frequency | Population | Grade |
|-----------|-----------|------------|-------|
| Colorectal cancer | Every 10 years (colonoscopy) | Adults 45-75 | A |
| Lung cancer (LDCT) | Annually | 50-80 yrs, ≥20 pack-years | B |
| Mammography | Biennial | Women 50-74 | B |
| Osteoporosis (DEXA) | Variable | Women ≥65 (earlier if risk) | B |

**Ages 65+:**

| Screening | Frequency | Population | Grade |
|-----------|-----------|------------|-------|
| AAA (ultrasound) | Once | Men 65-75 who ever smoked | B |
| Osteoporosis (DEXA) | Variable | Women ≥65, men with risk | B |
| Vision screening | Every 1-2 years | All adults | Clinical |
| Hearing screening | As needed | Adults ≥50 | Clinical |`,
      keyTerms: [
        { term: 'Wilson-Jungner criteria', definition: 'Classic principles for determining whether screening for a disease is appropriate' },
        { term: 'sensitivity', definition: 'Ability of a test to correctly identify those with the disease (true positive rate)' },
        { term: 'specificity', definition: 'Ability of a test to correctly identify those without the disease (true negative rate)' },
        { term: 'positive predictive value', definition: 'Probability that a positive test result indicates true disease' },
        { term: 'lead-time bias', definition: 'Apparent increase in survival time due to earlier detection without actual improvement in outcomes' },
        { term: 'length-time bias', definition: 'Screening preferentially detects slower-growing tumors, making screening appear more effective' },
      ],
      clinicalNotes: 'USPSTF recommendations apply to asymptomatic individuals without known risk factors. Higher-risk individuals may require more intensive or earlier screening. Always assess individual risk factors.',
    },
    4: {
      level: 4,
      summary: 'Screening recommendations balance disease burden, test operating characteristics (sensitivity, specificity, PPV, NPV), lead-time and length-time biases, overdiagnosis, and number needed to screen (NNS) to provide evidence-based age-stratified guidelines.',
      explanation: `**Epidemiological Framework for Screening:**

The decision to recommend screening at specific ages requires analysis of:
1. Age-specific disease incidence and mortality
2. Test performance in the target population
3. Available effective treatments
4. Potential harms (false positives, overdiagnosis, overtreatment)
5. Cost-effectiveness

**Key Metrics:**

*Number Needed to Screen (NNS):*
- Number of individuals who must be screened to prevent one death/outcome
- Example: Mammography ages 50-59 NNS ≈ 1,339 over 10 years to prevent 1 breast cancer death
- NNS increases with younger ages due to lower incidence

*Overdiagnosis Rate:*
- Detection of disease that would never cause symptoms or death
- Prostate cancer: 20-50% of screen-detected cancers
- Breast cancer: 10-30% estimated overdiagnosis
- Thyroid cancer: Significant overdiagnosis with widespread screening

**Advanced Age-Stratified Analysis:**

**Childhood/Adolescence (0-17):**

| Condition | Screen | Rationale |
|-----------|--------|-----------|
| Phenylketonuria | Newborn | Prevents intellectual disability |
| Congenital hypothyroidism | Newborn | Critical for neurodevelopment |
| Hearing loss | Birth, 4, 5, 6, 8, 10 years | Early intervention improves outcomes |
| Vision | 3-5 years | Amblyopia treatment window |
| Lead exposure | 12-24 months (at risk) | Neurodevelopmental toxicity |
| Autism spectrum | 18, 24 months | Early intervention beneficial |
| Depression | 12+ years | Prevalent, treatable |

**Young Adult (18-39):**

*Cardiovascular:*
- Hypertension screening threshold lowered to ≥130/80 mmHg (2017 ACC/AHA)
- Lipid screening age lowered to 20+ (if risk factors) vs. traditional 35+

*Infectious:*
- Universal HIV screening (opt-out approach)
- Hepatitis C: Universal once (previously birth cohort 1945-1965)
- STI screening based on sexual practices

*Reproductive:*
- Cervical cancer: Age 21 start (regardless of sexual debut) due to high regression rate of HPV in teens
- BRCA testing: Only if family history warrants

**Middle Age (40-64):**

*Cancer Screening Nuances:*
- Colorectal: Start at 45 (USPSTF 2021 update, previously 50)
- Lung: LDCT if 50-80, ≥20 pack-years, currently smoking or quit <15 years ago
- Breast: Biennial 50-74 (A); 40-49 shared decision-making (C)
- Prostate: Shared decision-making ages 55-69 (C)

*Cardiovascular Risk:*
- 10-year ASCVD risk calculation starts at 40
- Statin eligibility assessment

**Older Adult (65+):**

*When to Stop Screening:*
- Life expectancy <10 years may negate benefit
- Competing risks of mortality
- Patient values and preferences

*Upper Age Limits:*
- Colonoscopy: 75-85 selective, >85 not recommended
- Mammography: Evidence weaker after 74
- PSA: Generally not recommended >70
- Cervical cancer: Stop at 65 if adequate prior screening`,
      keyTerms: [
        { term: 'number needed to screen (NNS)', definition: 'Number of individuals who must be screened over a time period to prevent one adverse outcome' },
        { term: 'overdiagnosis', definition: 'Detection of a condition through screening that would not have caused symptoms or death during the patient\'s lifetime' },
        { term: 'ASCVD risk score', definition: 'Atherosclerotic cardiovascular disease risk calculation estimating 10-year risk of heart attack or stroke' },
        { term: 'lead-time', definition: 'Time between screen detection and when disease would have presented clinically' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient jointly decide on screening based on evidence and patient values' },
      ],
      clinicalNotes: 'Screening recommendations evolve with new evidence. Recent changes: colorectal cancer screening lowered to 45, lung cancer screening expanded to 50+, hepatitis C screening now universal. Always check current guidelines.',
    },
    5: {
      level: 5,
      summary: 'Age-stratified screening optimization requires integration of population-level epidemiology, individual risk stratification, evolving test technologies, cost-effectiveness analyses, health equity considerations, and shared decision-making frameworks to maximize benefit while minimizing overdiagnosis and healthcare resource utilization.',
      explanation: `**Advanced Screening Framework:**

**1. Risk-Stratified vs. Age-Based Screening:**

Traditional age-based thresholds are being replaced by risk-stratified approaches:

*Breast Cancer Example:*
- Tyrer-Cuzick model integrates:
  - Age, BMI, age at menarche/menopause
  - Reproductive history
  - Family history (first/second degree)
  - Personal history of atypical hyperplasia, LCIS
  - BRCA status
  - Breast density
- Lifetime risk >20% → consider MRI screening
- Moderate risk (15-20%) → may benefit from earlier/more frequent mammography

*Colorectal Cancer:*
- Polygenic risk scores emerging
- Family history modifies recommendations (first-degree relative → start 10 years before earliest diagnosis or age 40)
- Lynch syndrome → start colonoscopy at 20-25, every 1-2 years

*Cardiovascular:*
- Pooled Cohort Equations (ASCVD) + coronary artery calcium score
- Risk enhancers: Family history, metabolic syndrome, chronic kidney disease, inflammatory conditions, ethnicity-specific risks

**2. Emerging Technologies:**

*Liquid Biopsy:*
- Multi-cancer early detection (MCED) tests
- Galleri test: Detects 50+ cancer types via cell-free DNA
- Current data: Sensitivity varies by cancer type (27-90%)
- Specificity ~99.5% (still generates false positives at population level)
- Cost-effectiveness and clinical utility being evaluated

*Artificial Intelligence:*
- Deep learning for mammography (improved sensitivity/specificity)
- AI-assisted colonoscopy (increased adenoma detection)
- Retinal imaging for systemic disease prediction

*Genetic Testing:*
- Population-based BRCA screening under evaluation
- Pharmacogenomics for prevention (e.g., statin response)

**3. Health Equity in Screening:**

*Disparities:*
- Lower screening rates in underserved populations
- Later stage at diagnosis in minorities
- Access barriers: Insurance, transportation, language, trust

*Guideline Modifications:*
- Some advocate earlier CRC screening for Black individuals (higher incidence, earlier age of onset)
- Prostate cancer: Higher incidence in Black men, may warrant earlier shared decision-making

*Interventions:*
- Patient navigation programs
- Mailed FIT kits for CRC screening
- Mobile mammography units
- Culturally tailored messaging

**4. Overdiagnosis and Overtreatment:**

*Quantifying Overdiagnosis:*

| Cancer | Estimated Overdiagnosis Rate |
|--------|------------------------------|
| Prostate | 20-50% |
| Thyroid | Up to 70-80% (due to incidental detection) |
| Breast | 10-30% |
| Melanoma in situ | Significant (vs. invasive) |
| Lung (LDCT) | 3-25% |

*Mitigation Strategies:*
- Active surveillance protocols (prostate, thyroid)
- Appropriate test selection (e.g., FIT vs. colonoscopy)
- Raising detection thresholds
- Shared decision-making with explicit overdiagnosis discussion

**5. Cost-Effectiveness Considerations:**

*QALY-Based Analysis:*
- Threshold: $50,000-$150,000 per QALY gained
- Colorectal screening: $10,000-$25,000 per life-year saved (highly cost-effective)
- Lung cancer LDCT: $50,000-$90,000 per QALY (borderline)
- Universal PSA screening: Often exceeds thresholds when overtreatment included

*Resource Allocation:*
- Colonoscopy capacity limitations
- Radiologist availability for mammography
- Integration of lower-cost alternatives (FIT, self-collected HPV)

**6. Clinical Implementation:**

*Decision Aids:*
- Visual representations of absolute risk
- Number needed to screen over time
- Potential harms quantified
- Patient values elicitation

*EHR Integration:*
- Automated reminders
- Risk calculation
- Tracking compliance
- Overdue screening alerts

*Quality Measures:*
- HEDIS measures for screening rates
- ACO quality metrics
- Pay-for-performance implications

**7. Evolving Guidelines 2024-2025:**

*Recent Updates:*
- USPSTF 2021: CRC screening start at 45
- USPSTF 2021: Lung cancer screening 50-80, ≥20 pack-years
- USPSTF 2020: Diabetes screening start at 35 (vs. 40)
- FDA approval of AI-based screening aids

*Anticipated Changes:*
- MCED test recommendations pending large trial results (NHS-Galleri, PATHFINDER)
- AI standardization in imaging interpretation
- Polygenic risk score integration`,
      keyTerms: [
        { term: 'multi-cancer early detection (MCED)', definition: 'Blood-based tests detecting cell-free DNA or protein signatures from multiple cancer types' },
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic predisposition based on multiple common variants' },
        { term: 'QALY', definition: 'Quality-adjusted life year; metric integrating quantity and quality of life for cost-effectiveness analysis' },
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set; standardized quality measures used by health plans' },
        { term: 'active surveillance', definition: 'Monitoring strategy for low-risk cancers to avoid/delay treatment and associated harms' },
      ],
      clinicalNotes: `**Implementation Pearls:**
- Use EHR alerts and health maintenance reminders
- Risk calculators: Tyrer-Cuzick (breast), Gail model, ASCVD pooled cohorts
- Consider life expectancy when discussing screening in elderly (10-year benefit window)
- Document shared decision-making discussions (especially for C-grade recommendations)
- Address barriers: Cost, access, health literacy
- MCED tests not yet recommended by USPSTF but increasingly requested by patients
- Stay current: Guidelines update every 5-7 years on average`,
    },
  },

  media: [
    {
      id: 'screening-timeline',
      type: 'diagram',
      filename: 'screening-timeline-by-age.svg',
      title: 'Preventive Screening Timeline',
      description: 'Visual timeline of recommended screenings across the lifespan',
    },
  ],

  citations: [
    {
      id: 'uspstf-recommendations',
      type: 'website',
      title: 'USPSTF Recommendations',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cdc-screening',
      type: 'website',
      title: 'Preventive Health Care',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/prevention/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'related', label: 'Cancer Screening' },
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'concept-immunizations', targetType: 'concept', relationship: 'related', label: 'Immunizations' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'screening', 'public health'],
    keywords: ['screening', 'prevention', 'USPSTF', 'age-based', 'early detection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
