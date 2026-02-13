/**
 * Age-Appropriate Screening Schedules
 *
 * Comprehensive education on preventive health screening by age group
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const AGE_APPROPRIATE_SCREENING_SCHEDULES: EducationalContent = {
  id: 'concept-age-appropriate-screening-schedules',
  type: 'concept',
  name: 'Age-Appropriate Screening Schedules',
  alternateNames: ['Preventive screening guidelines', 'Health screening by age', 'Wellness screening schedule'],

  levels: {
    1: {
      level: 1,
      summary: 'Different health screenings are recommended at different ages to catch problems early when they can be treated most easily.',
      explanation: `As we go through life, our health needs change. Different tests are recommended at different ages to find problems early.

**Why Age Matters:**
- Some diseases are more common at certain ages
- Tests are most useful when you're at risk
- Starting too early or too late may not help

**General Screenings for All Adults:**
- Blood pressure: Every year
- Weight/BMI: Every year
- Depression: Periodically

**Screenings by Age Group:**

**Young Adults (20s-30s):**
- Blood pressure
- Cholesterol (if risk factors)
- Pap smear (women starting at 21)
- STI testing if sexually active
- HIV testing

**Middle-Aged Adults (40s-50s):**
- All of the above plus:
- Mammogram (women starting at 40-50)
- Colonoscopy (starting at 45)
- Diabetes screening (if overweight)
- Lung cancer screening (if smoker)

**Older Adults (60s+):**
- All of the above plus:
- Bone density (women at 65)
- Abdominal aortic aneurysm (men who smoked)

**Talk to Your Doctor:**
- Your schedule may differ based on:
  - Family history
  - Personal health history
  - Risk factors
  - Your preferences`,
      keyTerms: [
        { term: 'screening', definition: 'Tests done to find disease before symptoms appear' },
        { term: 'risk factors', definition: 'Things that increase your chances of getting a disease' },
        { term: 'preventive care', definition: 'Healthcare focused on preventing disease rather than treating it' },
      ],
      analogies: [
        'Screening schedules are like maintenance schedules for a car - certain checks are done at certain mileages to prevent breakdowns.',
      ],
      examples: [
        'At her 50th birthday checkup, Karen and her doctor discussed which screenings she should start, including mammograms and colonoscopy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Age-appropriate screening guidelines balance the benefits of early disease detection against potential harms, with recommendations varying by age, sex, and individual risk factors.',
      explanation: `Preventive screening recommendations are based on evidence showing that testing specific populations at specific ages leads to improved health outcomes.

**Core Principles:**
- Screen when disease is prevalent in age group
- Screen when early detection improves outcomes
- Consider benefits vs. harms (false positives, overdiagnosis)
- Individualize based on risk factors

**Women's Screening Schedule:**

| Age | Screening | Frequency |
|-----|-----------|-----------|
| 21-29 | Pap smear | Every 3 years |
| 30-65 | Pap + HPV | Every 5 years |
| 40-74 | Mammogram | Every 1-2 years |
| 45-75 | Colorectal cancer | Per method |
| 65+ | Osteoporosis (DXA) | Once, then per results |

**Men's Screening Schedule:**

| Age | Screening | Frequency |
|-----|-----------|-----------|
| 35+ | Lipid panel | Every 4-6 years |
| 45-75 | Colorectal cancer | Per method |
| 55-69 | PSA (discuss) | Shared decision |
| 65-75 | AAA (if ever smoked) | Once |

**Both Sexes:**

| Age | Screening | Frequency |
|-----|-----------|-----------|
| 18+ | Blood pressure | Every year |
| 35-70 | Diabetes (if overweight) | Every 3 years |
| 50-80 | Lung cancer (if smoker) | Annually |

**Special Populations:**

*Higher Risk - May Need Earlier/More Frequent Screening:*
- Family history of cancer
- Genetic syndromes (BRCA, Lynch)
- Personal history of precancer
- Immunocompromised
- Certain ethnic backgrounds

**When to Stop Screening:**
- Generally when life expectancy <10 years
- When harms outweigh benefits
- Based on prior screening history
- Patient preferences

**Key Immunizations by Age:**
- Annual flu vaccine (all adults)
- Tdap booster (every 10 years)
- Shingles vaccine (50+)
- Pneumococcal vaccines (65+)
- COVID-19 vaccines (per current guidelines)`,
      keyTerms: [
        { term: 'USPSTF', definition: 'US Preventive Services Task Force - independent panel that makes screening recommendations' },
        { term: 'overdiagnosis', definition: 'Finding diseases that would never cause symptoms or death' },
        { term: 'shared decision-making', definition: 'Doctor and patient discussing options and making decisions together' },
        { term: 'AAA', definition: 'Abdominal aortic aneurysm - a bulge in the main artery in the abdomen' },
      ],
      analogies: [
        'Screening guidelines are like traffic rules - they are based on data about where accidents happen most often and are designed to keep everyone safe.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based screening guidelines integrate USPSTF recommendations with specialty society guidance, addressing age-specific disease incidence, screening test characteristics, and the balance of benefits and harms across the lifespan.',
      explanation: `**USPSTF Grading System:**

| Grade | Meaning | Clinical Action |
|-------|---------|-----------------|
| A | High certainty of substantial benefit | Offer/provide |
| B | High certainty of moderate benefit OR moderate certainty of substantial benefit | Offer/provide |
| C | Moderate certainty of small benefit | Offer selectively based on individual |
| D | Moderate/high certainty of no benefit or harms outweigh benefits | Discourage |
| I | Insufficient evidence | Use clinical judgment |

**Grade A and B Recommendations:**

*Cancer Screening:*
- Cervical cancer: Pap (21-65), HPV co-testing or primary (30-65)
- Breast cancer: Mammography (40-74)
- Colorectal cancer: Multiple modalities (45-75)
- Lung cancer: LDCT (50-80, 20 pack-years, current/quit <15 years)

*Cardiovascular:*
- Hypertension screening: All adults
- Lipid disorders: Men ≥35, women ≥45 (earlier if risk factors)
- Diabetes: Adults 35-70 with overweight/obesity

*Other:*
- Depression: All adults
- HIV: Ages 15-65
- Hepatitis C: Ages 18-79 (once)
- STIs: Sexually active persons at increased risk

**Grade C Recommendations (Shared Decision):**

- Prostate cancer: PSA (men 55-69)
- Aspirin for CVD prevention (limited populations)
- Breast cancer: Mammography (40-49)

**Age-Specific Considerations:**

*Young Adults (18-39):*
- Focus: STIs, depression, substance use, injury prevention
- Limited cancer screening (cervical cancer only)
- CVD risk factor identification

*Middle Age (40-64):*
- Cancer screening intensifies
- CVD prevention critical
- Metabolic disease screening

*Older Adults (65+):*
- Continue appropriate cancer screening
- Osteoporosis screening (women)
- Fall risk assessment
- Consider stopping screening based on life expectancy

**When to Stop Screening:**

*General Principles:*
- Benefit requires 10+ years to accrue for cancer screening
- Life expectancy considerations
- Competing comorbidities
- Patient preferences

*Specific Recommendations:*
- Cervical: Stop at 65 if adequate prior screening
- Colorectal: Consider stopping at 75-85 based on individual
- Breast: Consider stopping at 75 (insufficient evidence beyond)
- Prostate: Not recommended after 70

**High-Risk Screening Modifications:**

*Family History of Cancer:*
- Breast: Consider MRI, earlier mammography
- Colorectal: Start 10 years before youngest affected relative or age 40
- Lynch syndrome: Colonoscopy every 1-2 years from age 20-25

*HIV Infection:*
- More frequent Pap smears
- Annual anal Pap (high-risk)
- Earlier lung cancer screening consideration`,
      keyTerms: [
        { term: 'USPSTF Grade', definition: 'Evidence-based rating indicating strength of recommendation for preventive services' },
        { term: 'lead time', definition: 'Time between screen detection and when disease would have been clinically detected' },
        { term: 'length bias', definition: 'Screening preferentially detects slower-growing diseases with better prognosis' },
        { term: 'number needed to screen', definition: 'Number of people who must be screened to prevent one adverse outcome' },
      ],
      clinicalNotes: 'Use shared decision-making for Grade C recommendations. Document discussions. Consider individual risk factors that may modify standard schedules. Address stopping screening discussions proactively in elderly.',
    },
    4: {
      level: 4,
      summary: 'Optimizing preventive screening requires integration of individual risk assessment tools, health system population management strategies, and addressing barriers to recommended care while balancing resource utilization and health equity considerations.',
      explanation: `**Risk-Stratified Screening:**

*Moving Beyond Age Alone:*
- Age is proxy for disease risk
- Risk calculators refine screening decisions
- May identify high-risk young individuals
- May avoid screening low-risk older individuals

*Available Risk Tools:*
| Condition | Tool |
|-----------|------|
| Breast cancer | Tyrer-Cuzick, Gail |
| Cardiovascular disease | Pooled Cohort Equations |
| Colorectal cancer | Family history algorithms |
| Lung cancer | PLCOm2012 |
| Osteoporosis | FRAX |

**Implementation Science:**

*Current Screening Rates (US):*
- Breast cancer: ~70%
- Cervical cancer: ~80%
- Colorectal cancer: ~70%
- Lung cancer: ~5-15%

*Barriers:*
- Patient: Awareness, fear, cost, time
- Provider: Competing priorities, forgetting
- System: Access, tracking, follow-up

*Evidence-Based Interventions:*
- Reminder systems (patient and provider)
- Standing orders
- Mailed FIT kits
- Patient navigation
- Team-based care
- Reducing structural barriers

**Electronic Health Record Integration:**

*Clinical Decision Support:*
- Alerts for overdue screening
- Risk calculation integration
- Order sets for preventive care
- Patient outreach lists

*Quality Dashboards:*
- Population-level screening rates
- Identify care gaps
- Track disparities
- Benchmark performance

**Special Populations:**

*Transgender Individuals:*
- Screening based on anatomy present
- Trans women with breast tissue: Consider mammography
- Trans men with cervix: Pap smears
- Sensitive, patient-centered approach

*Individuals with Disabilities:*
- Same screening recommendations apply
- Address access barriers
- Adaptive equipment may be needed
- Do not assume screening not needed

*Immigrants/Refugees:*
- May need catch-up screening
- Consider endemic diseases from country of origin
- Language and cultural barriers
- Hepatitis B screening if from endemic area

**Health Equity:**

*Disparities in Screening:*
- Lower rates in: Black, Hispanic, low-income, uninsured, rural
- Higher cancer mortality despite equal/higher incidence

*Root Causes:*
- Insurance coverage
- Geographic access
- Medical mistrust
- Social determinants of health
- Implicit bias

*Interventions:*
- Community health workers
- Culturally tailored outreach
- Mobile screening units
- Financial assistance programs
- Patient navigation

**Cost-Effectiveness:**

*Most Cost-Effective Screenings:*
- Cervical cancer
- Colorectal cancer
- Hypertension
- HIV

*Considerations:*
- Screening costs + follow-up costs
- Treatment costs averted
- Quality-adjusted life years gained
- Resource availability

**Shared Decision-Making Framework:**

*Elements:*
1. Explain the decision context
2. Discuss options including no screening
3. Describe potential benefits (absolute numbers)
4. Describe potential harms
5. Elicit patient values and preferences
6. Make a decision together
7. Document discussion`,
      keyTerms: [
        { term: 'clinical decision support', definition: 'EHR-based tools that guide clinical decisions, such as screening reminders' },
        { term: 'patient navigation', definition: 'Assistance helping patients overcome barriers to accessing care' },
        { term: 'standing orders', definition: 'Pre-authorized orders allowing staff to initiate screening without individual provider order' },
        { term: 'health equity', definition: 'Absence of avoidable, unfair, or remediable differences in health among population groups' },
      ],
      clinicalNotes: 'Use EHR tools to identify overdue screenings. Address disparities by tracking rates by demographics. Implement patient navigation for complex populations. Document shared decision-making discussions.',
    },
    5: {
      level: 5,
      summary: 'Future preventive screening paradigms will integrate polygenic risk scores, AI-enhanced risk prediction, multi-cancer early detection technologies, and precision medicine approaches while addressing the implementation science of translating screening evidence to population-level health improvements.',
      explanation: `**Emerging Technologies:**

*Multi-Cancer Early Detection (MCED):*
- Blood-based tests detecting multiple cancers
- Galleri: 50+ cancer types
- Methylation-based cfDNA analysis
- Cancer Signal Origin prediction

*Current Evidence:*
- PATHFINDER: 1.4% cancer detection rate
- Sensitivity varies by stage (I: 17%, III: 77%)
- High specificity (99.5%)
- False positive management critical

*Implementation Questions:*
- Role alongside existing screening
- Interval between tests
- Follow-up algorithms
- Cost-effectiveness
- Health equity implications

**Polygenic Risk Scores:**

*Concept:*
- Aggregate genetic risk from many variants
- May identify high-risk individuals for earlier/intensive screening
- May identify low-risk for de-intensified screening

*Current Status:*
- Breast cancer: 313-SNP score validated
- Colorectal cancer: Emerging
- Prostate cancer: Available
- Not yet guideline-recommended for most

*Challenges:*
- Ancestry-specific calibration
- Integration into clinical workflow
- Patient understanding
- Health equity (European-centric data)

**AI and Machine Learning:**

*Applications:*
- Risk prediction from EHR data
- Image interpretation (mammography, CT)
- Natural language processing for follow-up tracking
- Population outreach optimization

*Current Examples:*
- AI-assisted mammography (FDA approved)
- AI lung nodule detection
- AI colonoscopy (polyp detection)

*Future Potential:*
- Automated screening eligibility identification
- Personalized screening intervals
- Predictive models for no-show prevention

**Personalized Screening:**

*Current Approach:*
- Age + limited risk factors
- One-size-fits-most intervals

*Future Vision:*
- Integrated risk (genetic + clinical + imaging)
- Dynamic risk recalculation
- Personalized start ages and intervals
- Targeted screening for high-risk

**Implementation Science:**

*Screening Cascade:*
1. Identify eligible population
2. Invite/inform
3. Complete screening
4. Communicate results
5. Follow up abnormals
6. Treat as needed
7. Repeat as indicated

*Failures at Each Step:*
- Only 70-80% screened (best case)
- Significant losses at each step
- Disparities compound through cascade

*System-Level Solutions:*
- Population health management
- Automated outreach
- Closed-loop follow-up
- Quality metrics and accountability

**Global Perspective:**

*WHO Recommendations:*
- Resource-appropriate screening programs
- Focus on cervical, breast, colorectal cancer
- Implementation in low-resource settings

*Innovations for LMICs:*
- HPV self-collection
- Visual inspection with acetic acid
- mHealth reminders
- Task-shifting to community workers

**Stopping Screening:**

*Evolving Understanding:*
- Quantitative tools emerging
- Lee Schonberg Index (mortality prediction)
- Integrating life expectancy into decisions
- Patient preference research

*Communication:*
- Framing positively
- Acknowledging prior screening
- Focusing on quality over quantity
- Addressing patient expectations

**Quality Metrics Evolution:**

*Process Metrics:*
- Screening rates by test
- Completion of follow-up
- Time to diagnosis after abnormal screen

*Outcome Metrics:*
- Stage distribution at diagnosis
- Cancer-specific mortality
- Overdiagnosis estimation

*Equity Metrics:*
- Screening rates by race/ethnicity
- Screening rates by insurance status
- Geographic variation

**Research Priorities:**

1. MCED integration strategies
2. PRS clinical implementation
3. AI-enhanced screening optimization
4. Stopping screening decisions
5. Implementation science for disparities
6. Personalized screening intervals`,
      keyTerms: [
        { term: 'multi-cancer early detection (MCED)', definition: 'Blood-based tests capable of detecting multiple cancer types simultaneously' },
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic predisposition based on many common variants' },
        { term: 'screening cascade', definition: 'Sequence of steps from identification to treatment completion in screening programs' },
        { term: 'Lee Schonberg Index', definition: 'Tool predicting mortality risk to inform decisions about continuing screening in elderly' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Follow USPSTF Grade A and B recommendations systematically
- Use shared decision-making for Grade C
- Implement EHR-based screening reminders
- Track and address disparities in your practice
- Consider risk calculators for personalization
- Discuss stopping screening proactively
- Stay current: MCED tests and PRS emerging
- Ensure follow-up of all abnormal results
- Integrate preventive care into all visits
- Advocate for system-level improvements`,
    },
  },

  media: [
    {
      id: 'screening-timeline',
      type: 'diagram',
      filename: 'age-based-screening-timeline.svg',
      title: 'Age-Based Screening Timeline',
      description: 'Visual timeline of recommended screenings across the lifespan',
    },
  ],

  citations: [
    {
      id: 'uspstf-recommendations',
      type: 'website',
      title: 'USPSTF A and B Recommendations',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics/uspstf-a-and-b-recommendations',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'related', label: 'Cancer Screening Overview' },
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Screening' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'screening', 'public health'],
    keywords: ['screening', 'preventive care', 'USPSTF', 'age-appropriate', 'guidelines'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
