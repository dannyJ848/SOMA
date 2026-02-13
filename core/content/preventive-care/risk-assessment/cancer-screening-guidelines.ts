/**
 * Cancer Screening Guidelines
 *
 * Comprehensive education on evidence-based cancer screening recommendations
 * including breast, cervical, colorectal, lung, and prostate cancer screening.
 */

import { EducationalContent } from '../../types';

export const CANCER_SCREENING_GUIDELINES: EducationalContent = {
  id: 'preventive-cancer-screening-guidelines',
  type: 'concept',
  name: 'Cancer Screening Guidelines',
  alternateNames: ['Cancer prevention screening', 'Oncology screening', 'Tumor screening recommendations'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer screening tests help find cancer early when it is easier to treat, with different screening recommendations for different types of cancer based on age and risk factors.',
      explanation: `Screening tests check for cancer before you have symptoms. Finding cancer early often means treatment works better.

**What is Cancer Screening?**
Screening means looking for cancer in people who do not have symptoms. The goal is to find cancer early when treatment is most likely to work.

**Common Cancer Screening Tests:**

*Breast Cancer:*
- Mammogram (X-ray of breast)
- Starting around age 40-50
- Every 1-2 years depending on age
- Finds tumors too small to feel

*Cervical Cancer:*
- Pap smear (cells from cervix)
- Starting at age 21
- Checks for abnormal cells
- HPV test checks for virus causing cancer

*Colorectal Cancer:*
- Colonoscopy (camera looks at colon)
- Stool tests you do at home
- Starting at age 45
- Finds polyps before they become cancer

*Lung Cancer:*
- Low-dose CT scan
- For adults 50-80 who smoked heavily
- Must have quit within 15 years or still smoke

*Prostate Cancer:*
- PSA blood test
- Decision based on age and preferences
- Not recommended for all men

**Benefits of Screening:**
- Find cancer early when easier to treat
- Find polyps before they become cancer
- Reduce chance of dying from cancer
- Less extensive treatment needed

**Risks of Screening:**
- False positives (test says cancer when there is none)
- Unnecessary procedures
- Finding slow-growing cancers that may never cause problems
- Anxiety while waiting for results

**Who Should Get Screened?**
- Depends on your age
- Depends on your sex
- Depends on family history
- Depends on personal risk factors
- Ask your doctor what is right for you

**Important Points:**
- Screening saves lives but is not perfect
- Normal screening does not guarantee no cancer
- Symptoms should always be checked even with normal screening
- Screening recommendations change as new research comes out`,
      keyTerms: [
        { term: 'mammogram', definition: 'An X-ray picture of the breast used to find breast cancer' },
        { term: 'pap smear', definition: 'A test that collects cells from the cervix to check for cervical cancer' },
        { term: 'colonoscopy', definition: 'A test that uses a camera to look inside the colon for polyps or cancer' },
        { term: 'polyp', definition: 'A small growth that can develop into cancer if not removed' },
        { term: 'false positive', definition: 'When a test says there might be cancer when there actually is not' },
      ],
      analogies: [
        'Cancer screening is like checking your car\'s engine before a long trip - it helps find problems before they leave you stranded.',
        'Think of cancer screening like checking a house for termites - it is easier to fix the problem when you catch it early.',
      ],
      examples: [
        'Lisa had her first mammogram at age 45. It found a small tumor that was successfully treated with surgery because it was caught early.',
        'Robert did a home stool test at age 50. It was abnormal, and a follow-up colonoscopy found precancerous polyps that were removed.',
      ],
      patientCounselingPoints: [
        'Ask your doctor which screenings are right for your age and risk factors',
        'Screening tests have benefits and risks - discuss with your healthcare provider',
        'Do not ignore symptoms even if your screening was normal',
        'Family history of cancer may mean you need earlier or more frequent screening',
        'Screening recommendations may change as new research comes out',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based cancer screening guidelines from USPSTF and specialty societies recommend specific screening tests, intervals, and age ranges for breast, cervical, colorectal, lung, and prostate cancers to reduce cancer mortality through early detection.',
      explanation: `Cancer screening is a cornerstone of preventive medicine. Understanding current evidence-based guidelines helps optimize benefits while minimizing harms.

**USPSTF Screening Recommendations Summary:**

| Cancer Type | Test | Age Range | Frequency | Grade |
|-------------|------|-----------|-----------|-------|
| Breast | Mammography | 40-74 | Every 2 years | B |
| Cervical | Pap/HPV | 21-65 | Varies | A |
| Colorectal | Multiple options | 45-75 | Varies | A |
| Lung | LDCT | 50-80 | Annual | B |
| Prostate | PSA | 55-69 | Individualized | C |

**Breast Cancer Screening:**

*Guidelines Overview:*
- USPSTF 2023: Biennial screening mammography 40-74
- ACS: Optional 40-44, annual 45-54, biennial 55+
- ACOG: Offer at 40, every 1-2 years
- Discrepancies reflect balancing benefits and harms

*Benefits:*
- 15-20% reduction in breast cancer mortality
- Greater benefit with longer follow-up
- Downstaging of detected cancers

*Harms:*
- False positives (10% per round)
- Overdiagnosis (estimated 10-30%)
- Overtreatment
- Radiation exposure (minimal)

*Risk Factors:*
- Age (primary)
- Family history (BRCA1/2, others)
- Dense breast tissue
- Prior breast biopsy
- Hormone exposure

**Cervical Cancer Screening:**

*Evolution of Guidelines:*
- Cytology (Pap smear) historically primary test
- HPV testing now primary or co-testing
- Longer intervals with HPV testing

*Current Recommendations:*
| Age | Method | Interval |
|-----|--------|----------|
| <21 | No screening | - |
| 21-29 | Cytology alone | 3 years |
| 30-65 | HPV primary OR | 5 years |
| 30-65 | Co-testing | 5 years |
| 30-65 | Cytology alone | 3 years |
| >65 | Discontinue if adequate prior screening | - |

*HPV Vaccination Impact:*
- Bivalent, quadrivalent, 9-valent vaccines
- Recommended age 11-12, catch-up to 26
- May allow future screening interval lengthening
- Does not eliminate need for screening

**Colorectal Cancer Screening:**

*Recommended Tests (USPSTF):*

*Stool-Based:*
- FIT (Fecal Immunochemical Test): Annual
- gFOBT (Guaiac): Annual (less preferred)
- FIT-DNA (Cologuard): Every 3 years

*Direct Visualization:*
- Colonoscopy: Every 10 years
- CT colonography: Every 5 years
- Flexible sigmoidoscopy: Every 5 years

*Screening Ages:*
- Start: Age 45 (lowered from 50 in 2021)
- Stop: Age 75 (individualize)
- 76-85: Selective based on health

*Benefits:*
- 30-50% mortality reduction
- Polypectomy prevents cancer
- Various options improve uptake

**Lung Cancer Screening:**

*Eligibility Criteria:*
- Age 50-80
- 20 pack-year smoking history
- Current smoker OR quit within 15 years
- Stop when quit >15 years or health limits treatment

*Procedure:*
- Low-dose CT (LDCT) of chest
- Annual screening
- Non-contrast
- Low radiation dose

*Benefits:*
- 20% mortality reduction (NLST trial)
- Stage shift (more early-stage detection)

*Harms:*
- High false positive rate (96.4% of positives are false)
- Incidental findings
- Radiation exposure
- Overdiagnosis

**Prostate Cancer Screening:**

*PSA Testing:*
- Prostate-specific antigen blood test
- USPSTF: Individual decision 55-69 (C grade)
- Not recommended >=70
- Not recommended if life expectancy <10 years

*Benefits:*
- Some men avoid metastatic disease
- Possible mortality benefit in some subgroups

*Harms:*
- Overdiagnosis (significant)
- Overtreatment with side effects
- False positives leading to biopsies

*Shared Decision-Making:*
- Essential for prostate screening
- Discuss benefits and harms
- Consider patient values
- Family history consideration

**Implementation Considerations:**

*Barriers to Screening:*
- Cost and insurance coverage
- Access to facilities
- Fear and anxiety
- Time constraints
- Health literacy

*Quality Metrics:*
- Screening rates by modality
- Follow-up of abnormal tests
- Time to diagnosis after abnormal screen
- Cancer stage at diagnosis`,
      keyTerms: [
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force; independent panel making evidence-based screening recommendations' },
        { term: 'overdiagnosis', definition: 'Diagnosis of a condition that would not have caused symptoms or death during the patient\'s lifetime' },
        { term: 'FIT', definition: 'Fecal immunochemical test; stool test detecting blood using antibodies' },
        { term: 'pack-year', definition: 'Measure of smoking exposure: packs per day times years smoked' },
        { term: 'LDCT', definition: 'Low-dose computed tomography; CT scan with reduced radiation for screening' },
      ],
      analogies: [
        'Cancer screening is like a security checkpoint - it catches potential threats early but occasionally flags innocent travelers.',
        'Think of cancer screening recommendations like speed limits - they are set based on population data to maximize safety for most people.',
      ],
      examples: [
        'The National Lung Screening Trial showed 20% reduction in lung cancer mortality with annual LDCT in high-risk smokers.',
        'Randomized trials demonstrate 30% reduction in colorectal cancer mortality with fecal occult blood testing.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cancer screening decisions require balancing mortality benefits against harms including false positives, overdiagnosis, and overtreatment, with guidelines evolving based on randomized trial evidence, risk stratification approaches, and shared decision-making frameworks.',
      explanation: `**Evidence Base for Cancer Screening:**

*Randomized Controlled Trials:*

*Breast Cancer:*
- Multiple trials (HIP, Swedish Two-County, Canadian trials)
- Meta-analysis: 15-20% mortality reduction
- Absolute benefit increases with age
- Controversy over mammography age 40-49

*Colorectal Cancer:*
- FOBT trials (Minnesota, Denmark, UK): 15-33% mortality reduction
- Sigmoiodoscopy trials (PLCO, UK Flexible Sigmoidoscopy): 26-50% reduction in distal CRC
- Colonoscopy: No completed RCTs, case-control and cohort data supportive

*Lung Cancer:*
- NLST (National Lung Screening Trial): 20% mortality reduction with LDCT
- NELSON trial: Confirmed benefit
- High false positive rates challenge implementation

*Cervical Cancer:*
- Cytology screening reduced cervical cancer mortality 60%+ in developed countries
- No RCTs (would be unethical)
- HPV primary screening non-inferior or superior

**Overdiagnosis Concept:**

*Definition:*
- Detection of cancers that would never have become clinically apparent
- Distinguish from false positive (true cancer, just indolent)
- Difficult to quantify

*Examples by Cancer:*
| Cancer | Estimated Overdiagnosis | Implication |
|--------|------------------------|-------------|
| Breast | 10-30% of screen-detected | Overtreatment |
| Prostate | 20-50% | Significant overtreatment |
| Thyroid | Majority | Epidemic of incidentality |
| Lung | 10-20% with LDCT | Uncertain significance |

*Consequences:*
- Unnecessary treatment
- Treatment side effects
- Psychological burden
- Healthcare costs

**Risk Stratification:**

*Breast Cancer Risk:*
- Gail model
- Tyrer-Cuzick (IBIS)
- BOADICEA
- Factors: Family history, breast density, prior biopsy, reproductive factors

*Colorectal Cancer Risk:*
- Family history most important
- Lynch syndrome (HNPCC)
- FAP (familial adenomatous polyposis)
- Personal history of polyps/cancer

*Lung Cancer Risk:*
- PLCOm2012 risk calculator
- Bach model
- Liverpool Lung Project
- Better than age/smoking alone

*Risk-Stratified Screening:*
- More frequent/intensive for high risk
- Less frequent for low risk
- Personalized approaches under study
- Potential to improve benefit-harm ratio

**Shared Decision-Making:**

*Components:*
- Inform about benefits and harms
- Assess patient values/preferences
- Make decision together
- Document discussion

*Cancers Requiring SDM:*
- Prostate cancer (essential)
- Lung cancer (increasingly recommended)
- Breast cancer (age 40-49)
- Colorectal (test choice)

*Decision Aids:*
- Improve knowledge
- Reduce decisional conflict
- Align decisions with values
- Available for multiple cancers

**Test Characteristics:**

*Sensitivity and Specificity:*
- Mammography: ~85% sensitive, ~90% specific
- FIT: ~80% sensitive for cancer, ~95% specific
- Low-dose CT: ~95% sensitive, ~50% specific (high false positive)

*Lead Time:*
- Time between screen detection and symptom onset
- Varies by cancer
- Contributes to overdiagnosis

*Sojourn Time:*
- Duration of detectable preclinical phase
- Important for interval cancer understanding

**Screening Implementation:**

*Interval Cancers:*
- Cancers detected between screening rounds
- Reflect test limitations
- More aggressive biology often
- Quality indicator

*Program Factors:*
- Invitation/recall systems
- Quality assurance
- Diagnostic workup timeliness
- Treatment access
- Population coverage

*Organized vs Opportunistic:*
- Organized: Systematic population approach
- Opportunistic: Case-finding during care
- Organized more effective when achievable`,
      keyTerms: [
        { term: 'lead time', definition: 'Time by which screening advances diagnosis compared to symptomatic detection' },
        { term: 'interval cancer', definition: 'Cancer diagnosed between screening rounds, often after negative screen' },
        { term: 'sojourn time', definition: 'Duration of preclinical phase when cancer is detectable but asymptomatic' },
        { term: 'PLCOm2012', definition: 'Lung cancer risk prediction model used to select high-risk individuals for screening' },
        { term: 'organized screening', definition: 'Population-based screening with systematic invitation, quality assurance, and follow-up' },
      ],
      clinicalNotes: 'Discuss benefits and harms of screening with patients. Apply age-appropriate screening recommendations. Use shared decision-making for decisions with close benefit-harm balance. Consider patient life expectancy. Ensure timely follow-up of abnormal results. Address barriers to screening access.',
    },
    4: {
      level: 4,
      summary: 'Advanced cancer screening practice integrates emerging technologies including liquid biopsies, artificial intelligence imaging analysis, and multi-cancer early detection tests while addressing health disparities, implementation science, and cost-effectiveness considerations.',
      explanation: `**Emerging Screening Technologies:**

*Liquid Biopsy:*
- Circulating tumor DNA (ctDNA)
- Circulating tumor cells (CTCs)
- Exosomes and other biomarkers
- Advantages: Non-invasive, real-time monitoring
- Current status: Monitoring approved, screening investigational

*Multi-Cancer Early Detection (MCED):*
- Single test for multiple cancers
- Often use methylation patterns
- GRAIL Galleri (currently investigational)
- Can detect signal origin
- Challenges: False positives, overdiagnosis, lead-time bias

*Artificial Intelligence:*
- Mammography interpretation assistance
- CAD (computer-aided detection)
- Independent reading
- Reduced false negatives
- Risk stratification

*Advanced Imaging:*
- Contrast-enhanced mammography
- Abbreviated MRI (breast)
- Whole-body MRI (research)
- PET-CT for screening (limited roles)

**Health Disparities in Cancer Screening:**

*Disparities by Race/Ethnicity:*
- Lower screening rates in some minority groups
- Later stage at diagnosis
- Higher mortality despite similar incidence
- Multifactorial causes

*Socioeconomic Factors:*
- Insurance coverage
- Access to facilities
- Transportation
- Time off work
- Health literacy

*Geographic Disparities:*
- Rural access challenges
- Mobile screening units
- Telemedicine for follow-up
- Workforce distribution

*Interventions to Address Disparities:*
- Patient navigation
- Reminder systems
- Culturally tailored programs
- Community health workers
- Policy changes (Medicaid expansion)

**Implementation Science:**

*Adoption of Guidelines:*
- Lag between guideline and practice
- Provider knowledge gaps
- EHR decision support
- Audit and feedback

*Screening Program Quality:*
| Component | Quality Indicator |
|-----------|-------------------|
| Invitation | Coverage rate |
| Participation | Uptake rate |
| Test quality | Sensitivity/specificity |
| Follow-up | Time to diagnosis |
| Treatment | Time to treatment |
| Outcomes | Interval cancer rate |

*Increasing Uptake:*
- Mailed FIT programs
- Patient navigation
- Reminder systems
- Addressing barriers
- Community-based approaches

**Cost-Effectiveness:**

*Economic Evaluations:*
- Cost per life-year gained
- Cost per QALY
- Varies by cancer and modality
- Thresholds typically $50,000-$150,000/QALY

*Findings:*
| Screening Test | Cost-Effectiveness |
|----------------|-------------------|
| Colorectal (FIT) | Very favorable |
| Cervical (HPV) | Very favorable |
| Lung (LDCT) | ~$80,000/QALY |
| Breast (biennial) | Favorable |
| Prostate (selective) | Variable |

*Value Frameworks:*
- ASCO Value Framework
- ESMO Magnitude of Clinical Benefit
- NCCN Evidence Blocks
- Cost considerations increasingly important

**Special Populations:**

*High-Risk Groups:*
- BRCA1/2 carriers: Breast MRI + mammogram
- Lynch syndrome: Colonoscopy every 1-2 years
- Heavy smokers: Lung cancer screening
- Personal history: Intensified surveillance

*Elderly Patients:*
- Life expectancy consideration
- Stop screening when benefit unlikely
- Individualized decisions
- Avoid screening in last years of life

*Immunocompromised:*
- Higher cancer risk
- Modified screening protocols
- HPV-related cancers
- Skin cancer surveillance

**International Comparisons:**

*Different Approaches:*
- UK: Organized programs (breast, cervical, bowel)
- Germany: Annual screening emphasis
- Japan: Stomach cancer screening
- South Korea: Thyroid screening (controversial)

*Lessons Learned:*
- Organized programs effective
- Quality assurance essential
- Coverage important for equity
- Adapt to local epidemiology`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; DNA fragments from cancer cells found in blood' },
        { term: 'MCED', definition: 'Multi-cancer early detection; tests designed to detect multiple cancer types simultaneously' },
        { term: 'patient navigation', definition: 'Support service helping patients overcome barriers to care and complete screening/treatment' },
        { term: 'lead-time bias', definition: 'Apparent survival advantage from earlier detection that does not reflect true benefit' },
        { term: 'length-time bias', definition: 'Screening preferentially detects slower-growing cancers, making screening appear more effective' },
      ],
      clinicalNotes: 'Stay current on emerging screening technologies. Address health disparities in your practice. Consider cost-effectiveness when recommending screening. Use patient navigators for complex cases. Individualize screening for elderly and high-risk patients. Understand limitations of new screening tests.',
    },
    5: {
      level: 5,
      summary: 'Expert cancer screening practice requires integrating precision screening approaches, leading implementation of new technologies, addressing population health disparities, and advancing evidence through research while navigating ethical considerations and evolving healthcare economics.',
      explanation: `**Precision Cancer Screening:**

*Risk-Based Stratification:*
- Polygenic risk scores for cancer risk
- Integration with traditional risk factors
- Personalized screening intervals
- Potential to optimize benefit-harm ratio

*Molecular Screening:*
- Blood-based multi-cancer detection
- Tumor-naive approaches (no prior knowledge)
- Tumor-informed approaches (post-treatment monitoring)
- Sensitivity by cancer stage and type

*Biological Age vs Chronological Age:*
- Frailty assessments for screening decisions
- Remaining life expectancy prediction
- Beyond age-based cutoffs
- Functional status integration

**Artificial Intelligence in Screening:**

*Deep Learning Applications:*
- Mammography: FDA-approved systems
- Colonoscopy polyp detection
- Cytology screening automation
- Risk prediction models
- Workflow optimization

*Validation Challenges:*
- Generalizability across populations
- Dataset bias
- Prospective validation needed
- Regulatory frameworks
- Liability considerations

*Future Directions:*
- Fully autonomous screening
- Real-time quality assurance
- Personalized screening intervals
- Integration of multiple data sources

**Global Cancer Screening:**

*Low-Resource Settings:*
- Visual inspection for cervical cancer
- Self-collected HPV testing
- Single-visit screen-and-treat
- Task-shifting to non-physicians
- Mobile health units

*Cancer Transition:*
- Shifting epidemiology globally
- Infectious to lifestyle cancers
- Screening infrastructure needs
- Cost-effectiveness in LMICs

*WHO Initiatives:*
- Cervical cancer elimination goal
- 90-70-90 targets
- HPV vaccination + screening
- Global access to cancer medicines

**Research Frontiers:**

*Ongoing Major Trials:*
- UK Multi-Cancer Early Detection (SYMPLIFY)
- PATHFINDER (Galleri)
- NCI Cancer Screening Research Network
- Risk-adapted screening trials

*Methodological Challenges:*
- Overdiagnosis quantification
- Lead-time bias in new tests
- Length-time bias
- Volunteer bias
- Appropriate endpoints

*Adaptive Trial Designs:*
- Response-adaptive randomization
- Biomarker-driven designs
- Bayesian approaches
- Platform trials

**Health Systems Implementation:**

*Scaling Screening Programs:*
- From trials to population
- Quality maintenance at scale
- Workforce development
- Technology infrastructure
- Sustainability

*Value-Based Care:*
- Bundled payments for screening
- Outcome-based metrics
- Accountable care organization considerations
- Shared savings opportunities

*Electronic Health Records:*
- Screening decision support
- Automated risk assessment
- Recall and reminder systems
- Quality reporting
- Registry integration

**Ethical Considerations:**

*Informed Consent:*
- Understanding of benefits and harms
- Overdiagnosis explanation
- Right not to know
- Incidental findings

*Resource Allocation:*
- Fair distribution of screening
- Priority-setting
- Cost-effectiveness thresholds
- Global equity

*Emerging Test Ethics:*
- MCED false positive burden
- Psychological impact
- Healthcare system capacity
- Regulatory oversight

**Clinical Excellence Framework:**

*Individual Level:*
- Personalized risk assessment
- Shared decision-making
- Appropriate test selection
- Timely follow-up
- Survivorship care

*System Level:*
- Screening program leadership
- Quality improvement
- Disparity reduction
- Technology integration
- Research participation

*Population Level:*
- Public health advocacy
- Policy engagement
- Community education
- Professional education
- Global health engagement

**Future of Cancer Screening:**

*Vision for 2030:*
- Risk-stratified approaches standard
- Blood-based multi-cancer tests integrated
- AI-assisted interpretation routine
- Disparities reduced
- Global access improved

*Challenges Ahead:*
- Overdiagnosis management
- Healthcare system capacity
- Cost and access
- Evidence generation
- Workforce needs

*Key Priorities:*
1. Precision screening validation
2. MCED test evaluation
3. AI implementation
4. Health equity
5. Global access
6. Overdiagnosis mitigation`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk calculated from multiple genetic variants for disease prediction' },
        { term: 'task-shifting', definition: 'Delegating healthcare tasks to less specialized health workers to increase access' },
        { term: 'platform trial', definition: 'Adaptive clinical trial design allowing multiple interventions and continuous enrollment' },
        { term: 'biomarker-driven design', definition: 'Clinical trial design using biomarkers for patient selection or adaptive decisions' },
        { term: 'tumor-naive', definition: 'Blood test approach not requiring prior knowledge of tumor molecular profile' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead implementation of new screening technologies with appropriate caution
- Champion precision screening approaches
- Address health disparities in cancer screening access and outcomes
- Stay current on MCED test evidence
- Use AI tools with understanding of limitations
- Engage in shared decision-making with sophisticated communication
- Advocate for evidence-based screening policies
- Participate in screening research
- Mentor trainees in cancer prevention
- Balance innovation with evidence-based practice`,
    },
  },

  media: [
    {
      id: 'cancer-screening-timeline',
      type: 'diagram',
      filename: 'cancer-screening-recommendations-by-age.svg',
      title: 'Cancer Screening Recommendations by Age',
      description: 'Visual timeline of recommended cancer screening tests by age group',
    },
  ],

  citations: [
    {
      id: 'uspstf-breast-2023',
      type: 'article',
      title: 'Screening for Breast Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nlst-2011',
      type: 'article',
      title: 'Reduced Lung-Cancer Mortality with Low-Dose Computed Tomographic Screening',
      authors: ['Aberle DR', 'Adams AM', 'Berg CD', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'uspstf-colorectal-2021',
      type: 'article',
      title: 'Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'genetic-risk-assessment', targetType: 'concept', relationship: 'related', label: 'Genetic Risk Assessment' },
  ],

  tags: {
    systems: ['preventive-care', 'oncology'],
    topics: ['preventive medicine', 'cancer screening', 'public health'],
    keywords: ['cancer screening', 'mammogram', 'colonoscopy', 'PSA', 'LDCT', 'USPSTF', 'early detection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
