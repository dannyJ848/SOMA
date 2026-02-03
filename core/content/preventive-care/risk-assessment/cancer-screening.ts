/**
 * Cancer Screening Risk Assessment
 *
 * Comprehensive education on cancer risk assessment, screening guidelines,
 * and evidence-based approaches to early cancer detection.
 */

import { EducationalContent } from '../../types';

export const CANCER_SCREENING_RISK: EducationalContent = {
  id: 'preventive-cancer-screening-risk',
  type: 'concept',
  name: 'Cancer Screening Risk Assessment',
  alternateNames: ['Cancer risk assessment', 'Early cancer detection', 'Cancer screening guidelines', 'Oncology screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer screening tests look for cancer before you have any symptoms, when treatment works best.',
      explanation: `Cancer is easier to treat when it is found early. Screening tests can find cancer before you feel sick or notice any problems.

**What is Cancer Screening?**
Screening means checking for disease in people who do not have any symptoms. These tests can find cancer early when it is small and has not spread.

**Common Cancer Screenings:**

*Breast Cancer:*
- Mammogram (X-ray of the breast)
- Women should start at age 40-50
- Done every 1-2 years

*Cervical Cancer:*
- Pap smear or HPV test
- Women should start at age 21
- Done every 3-5 years

*Colon Cancer:*
- Colonoscopy or stool tests
- Everyone should start at age 45
- Colonoscopy every 10 years or stool tests more often

*Lung Cancer:*
- CT scan of the lungs
- For people who smoke or used to smoke
- Yearly for those at high risk

**Who Needs More Screening?**
Some people have higher cancer risk because of:
- Family history (parents, siblings with cancer)
- Certain genetic changes
- Previous cancer
- Some medical conditions

**What You Can Do:**
- Talk to your doctor about which screenings you need
- Keep track of when you are due for tests
- Tell your doctor about family history of cancer
- Do not skip screenings even if you feel healthy

**Remember:**
Finding cancer early saves lives. Most screening tests are quick and not painful.`,
      keyTerms: [
        { term: 'screening', definition: 'Testing for disease before symptoms appear' },
        { term: 'mammogram', definition: 'An X-ray picture of the breast to look for cancer' },
        { term: 'colonoscopy', definition: 'A test where a doctor looks inside your colon for cancer or polyps' },
        { term: 'Pap smear', definition: 'A test that checks for abnormal cells in the cervix' },
      ],
      analogies: [
        'Cancer screening is like having a smoke detector in your house - it catches problems early before they become dangerous.',
        'Getting screened is like checking your car regularly - finding small problems prevents big breakdowns.',
      ],
      examples: [
        'Maria had a colonoscopy at age 50. The doctor found a small polyp and removed it. This prevented it from turning into cancer.',
      ],
      patientCounselingPoints: [
        'Screening tests can find cancer early when treatment works best',
        'Most screening tests are quick and cause little discomfort',
        'Talk to your doctor about your family history',
        'Keep track of when you need your next screening',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer screening recommendations are based on age, sex, and individual risk factors, with evidence-based guidelines from USPSTF and major medical societies guiding when and how often to screen.',
      explanation: `Cancer screening aims to detect cancer at an early, treatable stage. Guidelines balance the benefits of early detection against potential harms of screening.

**Major Cancer Screenings by USPSTF:**

**Breast Cancer:**
- Mammography every 2 years, ages 50-74 (Grade B)
- Ages 40-49: Individual decision based on values (Grade C)
- Higher risk (family history, genetic): Consider earlier/more frequent

**Cervical Cancer:**
- Ages 21-29: Pap smear every 3 years
- Ages 30-65: Pap + HPV co-testing every 5 years OR Pap alone every 3 years OR HPV alone every 5 years
- After 65: Stop if adequate prior screening

**Colorectal Cancer:**
- Ages 45-75: Screen with one of several methods (Grade A)
- Ages 76-85: Individual decision (Grade C)
- Options: Colonoscopy (10 years), FIT/FOBT (yearly), FIT-DNA (1-3 years), CT colonography (5 years), sigmoidoscopy (5 years)

**Lung Cancer:**
- Ages 50-80 with 20+ pack-year smoking history
- Low-dose CT yearly
- Current smoker or quit within past 15 years

**Prostate Cancer:**
- Ages 55-69: Shared decision-making about PSA testing (Grade C)
- Discuss potential benefits and harms

**Risk Factors That May Change Screening:**

*Family History:*
- First-degree relative with cancer
- Multiple family members affected
- Cancer at young age
- Start screening earlier, more often

*Personal History:*
- Previous cancer
- Precancerous lesions (polyps, dysplasia)
- Radiation exposure

*Genetic Factors:*
- BRCA1/2 mutations (breast, ovarian)
- Lynch syndrome (colorectal, others)
- Li-Fraumeni syndrome

*Lifestyle Factors:*
- Smoking (lung, bladder, others)
- Obesity (colorectal, breast, others)
- Alcohol (breast, liver, others)

**Understanding Screening Harms:**
- False positives: Abnormal test when no cancer (anxiety, additional tests)
- Overdiagnosis: Finding cancer that would never cause problems
- Complications from follow-up procedures

**Shared Decision-Making:**
- Discuss individual risk factors
- Review benefits and harms
- Consider patient preferences
- Make informed choice together`,
      keyTerms: [
        { term: 'USPSTF', definition: 'US Preventive Services Task Force; independent panel that makes evidence-based screening recommendations' },
        { term: 'false positive', definition: 'A test result showing disease when none is present' },
        { term: 'overdiagnosis', definition: 'Detecting cancer that would never have caused symptoms or death' },
        { term: 'pack-years', definition: 'Measure of smoking: packs per day times years smoked' },
        { term: 'Grade A recommendation', definition: 'High certainty of substantial benefit; recommend screening' },
      ],
      analogies: [
        'Screening guidelines are like speed limits - based on evidence about what is safe for most people, but some situations require adjustment.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cancer screening strategies integrate population-level guidelines with individual risk assessment using validated models, genetic testing, and family history to optimize screening intervals, modalities, and age ranges while weighing benefits against harms of overdiagnosis and false positives.',
      explanation: `**Evidence-Based Screening Framework:**

*USPSTF Grading System:*
| Grade | Certainty | Net Benefit | Recommendation |
|-------|-----------|-------------|----------------|
| A | High | Substantial | Recommend |
| B | High/Moderate | Moderate | Recommend |
| C | Moderate | Small | Offer selectively |
| D | Moderate/High | Zero/Negative | Discourage |
| I | Insufficient | Unknown | More research needed |

**Breast Cancer Screening:**

*USPSTF 2024 Update:*
- Biennial mammography ages 40-74 (Grade B)
- Supplemental screening for dense breasts: Insufficient evidence

*High-Risk Assessment:*
- BRCA1/2: MRI + mammography annually from age 25-30
- Lifetime risk >20%: Consider MRI
- Risk models: Gail, Tyrer-Cuzick, BOADICEA

*Dense Breasts:*
- BI-RADS density C/D in ~40% of women
- Lower mammography sensitivity
- Supplemental screening (MRI, ultrasound) debated

**Colorectal Cancer Screening:**

*Test Characteristics:*
| Test | Sensitivity | Interval | Pros | Cons |
|------|------------|----------|------|------|
| Colonoscopy | 95% | 10 years | Gold standard, polypectomy | Sedation, prep, complications |
| FIT | 74% | 1 year | Non-invasive, low cost | Yearly, colonoscopy if positive |
| FIT-DNA | 92% | 1-3 years | Higher sensitivity | Cost, colonoscopy if positive |
| CT colonography | 90% | 5 years | Non-invasive | Radiation, colonoscopy if positive |

*Risk Stratification:*
- Average risk: Start at 45
- High risk (family history, IBD, Lynch): Start at 40 or 10 years before youngest case

*Lynch Syndrome Screening:*
- Universal tumor testing (IHC/MSI) for all CRC
- Identifies hereditary cancer syndrome
- Guides screening for patient and family

**Lung Cancer Screening:**

*NLST and NELSON Trials:*
- 20% mortality reduction with LDCT
- NNS ~300 to prevent 1 lung cancer death

*Eligibility (USPSTF 2021):*
- Age 50-80
- 20+ pack-year history
- Current smoker or quit within 15 years

*Nodule Management:*
- Lung-RADS reporting system
- Follow-up based on nodule size, characteristics
- High false-positive rate (~25% abnormal scans)

**Prostate Cancer Screening:**

*PSA Controversy:*
- PLCO: No mortality benefit
- ERSPC: 21% mortality reduction
- Differences in contamination, follow-up

*Current Approach:*
- Shared decision-making ages 55-69
- Discuss: Modest mortality benefit vs overdiagnosis (~20-50%)
- Higher risk (Black men, family history): Consider starting at 40-45

**Cervical Cancer Screening:**

*HPV-Based Screening:*
- HPV primary screening now preferred (ages 30-65)
- Better sensitivity than cytology alone
- 5-year interval appropriate

*Screening After Hysterectomy:*
- Stop if for benign indication and no CIN2+ history
- Continue if cervix present or prior high-grade dysplasia

**Risk Assessment Models:**

*Breast Cancer:*
- Gail Model: 5-year and lifetime risk
- Tyrer-Cuzick: Includes hormonal factors, density
- BOADICEA: Family history, genetics

*Colorectal Cancer:*
- Family history assessment
- Genetic testing for Lynch, FAP
- Guidelines: ACG, NCCN

*Lung Cancer:*
- PLCOm2012 model
- LCRAT
- Predict benefit of screening

**Genetic Testing and Screening:**

*When to Refer for Genetic Counseling:*
- Multiple family members with same cancer
- Cancer at young age
- Multiple primary cancers
- Male breast cancer
- Ashkenazi Jewish ancestry with breast/ovarian cancer`,
      keyTerms: [
        { term: 'Lung-RADS', definition: 'Standardized reporting system for lung cancer screening CT findings' },
        { term: 'FIT', definition: 'Fecal immunochemical test; detects blood in stool using antibodies to human hemoglobin' },
        { term: 'Lynch syndrome', definition: 'Hereditary cancer syndrome caused by mismatch repair gene mutations' },
        { term: 'BI-RADS density', definition: 'Breast imaging classification of mammographic density from A (fatty) to D (extremely dense)' },
        { term: 'NNS', definition: 'Number needed to screen to prevent one cancer death' },
      ],
      clinicalNotes: 'Individualize screening based on risk factors. Use validated risk models for breast and lung cancer. Refer high-risk patients for genetic counseling. Document shared decision-making discussions, especially for prostate cancer.',
    },
    4: {
      level: 4,
      summary: 'Advanced cancer risk assessment integrates polygenic risk scores, multi-cancer early detection assays, and precision screening approaches while addressing implementation challenges, health disparities, and the evolving evidence base for liquid biopsy technologies.',
      explanation: `**Precision Cancer Screening:**

*Polygenic Risk Scores (PRS):*
- Aggregate risk from multiple common variants
- May refine screening eligibility

*Breast Cancer PRS:*
- 313-SNP score validated (Mavaddat et al.)
- Top 1% has ~4x population risk
- Potential to stratify mammography intervals
- WISDOM study evaluating risk-based screening

*Colorectal Cancer PRS:*
- Emerging evidence
- May complement family history
- Not yet guideline-recommended

**Multi-Cancer Early Detection (MCED):**

*Liquid Biopsy Platforms:*
- Galleri (Grail): cfDNA methylation, 50+ cancers
- CancerSEEK: Protein biomarkers + ctDNA
- PATHFINDER study: 1.4% cancer detection rate
- NHS-Galleri trial: 140,000 participants

*Key Considerations:*
- Sensitivity varies by cancer type and stage
- Higher for advanced vs early-stage
- Cost and access issues
- Diagnostic odyssey for signal of unknown origin
- Not yet recommended as replacement for standard screening

**Hereditary Cancer Syndromes:**

*Comprehensive Panel Testing:*
| Syndrome | Genes | Associated Cancers | Screening |
|----------|-------|-------------------|-----------|
| HBOC | BRCA1/2 | Breast, ovarian, prostate, pancreatic | MRI, mammography, BSO |
| Lynch | MLH1, MSH2, MSH6, PMS2 | CRC, endometrial, ovarian, others | Colonoscopy 1-2 years |
| Li-Fraumeni | TP53 | Sarcoma, breast, brain, adrenal | Whole-body MRI |
| FAP | APC | CRC, duodenal | Colonoscopy yearly |
| Cowden | PTEN | Breast, thyroid, endometrial | Enhanced screening |

*Multigene Panel Testing:*
- Expanded beyond single-syndrome testing
- Detects moderate-penetrance genes (ATM, CHEK2, PALB2)
- Uncertain management for some genes
- VUS (variants of uncertain significance) challenge

**Implementation Science:**

*Barriers to Screening:*
- Access (transportation, cost, insurance)
- Awareness and education
- Fear and fatalism
- Provider recommendation gaps
- Competing priorities

*Effective Interventions:*
- Patient navigation
- Reminder systems (mail, phone, EHR)
- Mobile screening units
- Default scheduling
- Community health workers

**Health Disparities:**

*Disparities by Race/Ethnicity:*
| Cancer | Disparity |
|--------|-----------|
| Breast | Black women: Higher mortality despite similar incidence |
| Colorectal | Black adults: Higher incidence, lower screening |
| Lung | Lower screening uptake in eligible minorities |
| Cervical | Higher incidence in Hispanic women |

*Contributing Factors:*
- Insurance coverage
- Usual source of care
- Provider recommendation
- Trust in healthcare system
- Structural racism

*Equity-Focused Approaches:*
- Community-based participatory research
- Culturally tailored interventions
- Policy (coverage mandates)
- Navigation and support services

**Emerging Biomarkers:**

*Breast Cancer:*
- Circulating tumor cells
- Breast-specific gamma imaging
- Contrast-enhanced mammography

*Colorectal Cancer:*
- Blood-based tests (Cologuard, Guardant Shield)
- Fecal microbiome markers

*Ovarian Cancer:*
- OVA1, ROMA
- HE4 + CA-125
- No effective screening for average risk

**Screening in Special Populations:**

*Immunocompromised:*
- Solid organ transplant: Enhanced skin, anal cancer screening
- HIV: Cervical/anal cancer screening guidelines

*Prior Cancer:*
- Second primary cancer surveillance
- Treatment-related cancer risks (radiation field)

*Limited Life Expectancy:*
- Deprescribing screening
- Balance benefit time horizon vs harms
- Shared decision-making`,
      keyTerms: [
        { term: 'MCED', definition: 'Multi-cancer early detection; liquid biopsy tests that screen for multiple cancers simultaneously' },
        { term: 'cfDNA', definition: 'Cell-free DNA; DNA fragments released by cells into blood, including tumor-derived ctDNA' },
        { term: 'VUS', definition: 'Variant of uncertain significance; genetic change with unknown clinical implications' },
        { term: 'HBOC', definition: 'Hereditary breast and ovarian cancer syndrome, typically caused by BRCA1/2 mutations' },
        { term: 'patient navigation', definition: 'Support services helping patients overcome barriers to completing screening and follow-up' },
      ],
      clinicalNotes: 'Use validated risk models to stratify screening. Refer patients meeting criteria for genetic counseling/testing. Address screening disparities through navigation and outreach. Stay updated on MCED evidence; currently supplements but does not replace standard screening.',
    },
    5: {
      level: 5,
      summary: 'Expert cancer screening practice integrates genomic risk stratification, multi-cancer early detection technologies, and adaptive screening algorithms while leading health system initiatives to reduce disparities, optimize resource allocation, and translate emerging evidence into population health impact.',
      explanation: `**Precision Screening Implementation:**

*Risk-Stratified Screening Models:*

*WISDOM Trial (Breast):*
- Randomized risk-based vs annual mammography
- Risk assessment: PRS, density, family history, Tyrer-Cuzick
- Preliminary: Risk-based non-inferior, fewer false positives
- May inform future guidelines

*Colorectal Risk Stratification:*
- FIT-based triage for colonoscopy
- Risk models (e.g., QCancer) to personalize intervals
- Precision in adenoma surveillance (EACS guidelines)

**Multi-Cancer Early Detection Landscape:**

*Current Platforms:*
| Test | Technology | Cancers | Sensitivity | Specificity |
|------|------------|---------|-------------|-------------|
| Galleri | cfDNA methylation | 50+ | 51% (Stage I-III) | 99.5% |
| CancerSEEK | Protein + ctDNA | 8 | Variable | ~99% |

*Clinical Trials:*
- PATHFINDER: Real-world implementation
- NHS-Galleri: Mortality outcomes (2025+ results)
- SUMMIT: High-risk populations

*Implementation Challenges:*
- Signal of unknown origin workup
- Cost-effectiveness uncertain ($949/test)
- Integration with standard screening
- Patient anxiety management
- Diagnostic yield by cancer type

*Expert Perspective:*
- Supplement, not replace, standard screening
- Consider in screening gaps (pancreatic, ovarian)
- Appropriate for high-risk patients
- Await mortality data for population recommendations

**Genomic Medicine Integration:**

*Cascade Testing:*
- Systematic testing of at-risk relatives
- ~50% of mutations identified through cascade
- Family communication challenges
- Privacy considerations

*Somatic-Germline Integration:*
- Tumor profiling identifies germline variants
- Universal tumor testing for Lynch (CRC)
- BRCA testing in ovarian, prostate, pancreatic cancer

*Pharmacogenomics:*
- 5-FU and DPD deficiency screening
- Tamoxifen and CYP2D6
- Emerging role in cancer prevention

**Population Health Management:**

*Registry-Based Approaches:*
- Identification of screening-eligible populations
- Automated outreach (mail, portal, phone)
- Tracking completion and follow-up
- Quality metrics reporting

*Quality Metrics (HEDIS/MIPS):*
- Breast cancer screening: 72-80% goal
- Colorectal screening: 72-80% goal
- Cervical cancer screening: 93% goal
- Lung cancer screening: Emerging measure

*Health System Optimization:*
- Centralized scheduling
- Open-access colonoscopy
- Same-day diagnostic workup
- Navigation programs

**Reducing Disparities:**

*Evidence-Based Interventions:*
| Intervention | Effect Size | Setting |
|--------------|-------------|---------|
| Patient navigation | +10-15% screening | Safety net |
| Mailed FIT kits | +15-20% CRC screening | Primary care |
| Reminder systems | +5-10% screening | All settings |
| Mobile mammography | +10-15% in underserved | Community |

*Structural Approaches:*
- Insurance coverage mandates
- Geographic access (mobile units)
- Language-concordant materials
- Trust-building initiatives

*Research Priorities:*
- Implementation in marginalized communities
- Adapting interventions to local contexts
- Community-engaged research
- Policy impact evaluation

**Special Screening Scenarios:**

*Post-Transplant Malignancy:*
- PTLD surveillance
- Skin cancer: Annual dermatology
- Increased screening for cervical, anal

*Cancer Survivors:*
- Second primary risk assessment
- Treatment-related surveillance
- Late effects monitoring

*Stopping Screening:*
- Life expectancy <10 years (most cancers)
- Shared decision-making
- Symptom-driven evaluation appropriate
- Documentation of decision

**Future Directions:**

1. **MCED Integration**: Outcomes data, coverage decisions
2. **AI in Imaging**: Mammography, colonoscopy assistance
3. **Adaptive Screening**: Dynamic intervals based on prior results
4. **Pharmacogenomic Prevention**: Tailored chemoprevention
5. **Microbiome Screening**: Stool microbiome for CRC
6. **Breath Analysis**: Volatile organic compounds

**Clinical Excellence Framework:**

*Individual Patient:*
- Comprehensive risk assessment
- Genetic referral when indicated
- Personalized screening plan
- Shared decision-making documentation

*Practice Level:*
- Screening registry and tracking
- Outreach for overdue patients
- Disparity analysis and intervention
- Quality metric optimization

*Health System:*
- Population health infrastructure
- Care coordination programs
- Policy advocacy
- Research participation

*Professional Development:*
- Stay current on guideline updates
- Genetic counseling competency
- MCED technology literacy
- Implementation science principles`,
      keyTerms: [
        { term: 'cascade testing', definition: 'Systematic genetic testing of at-risk family members after identification of a pathogenic variant' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; cancer surveillance priority in transplant recipients' },
        { term: 'signal of unknown origin', definition: 'MCED test positive for cancer without identifiable primary site' },
        { term: 'adaptive screening', definition: 'Adjusting screening intervals based on prior results and evolving risk factors' },
        { term: 'somatic-germline integration', definition: 'Using tumor genomic testing to identify hereditary cancer syndromes' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead comprehensive risk assessment programs
- Integrate genetic testing and counseling workflows
- Monitor emerging MCED evidence; await mortality outcomes for population recommendations
- Champion equity through navigation and outreach programs
- Optimize health system screening infrastructure
- Balance innovation with evidence-based practice
- Engage in shared decision-making, especially for controversial screenings
- Develop expertise in deprescribing screening at end of life
- Contribute to implementation research`,
    },
  },

  media: [
    {
      id: 'cancer-screening-guidelines',
      type: 'diagram',
      filename: 'cancer-screening-guidelines-flowchart.svg',
      title: 'Cancer Screening Guidelines Overview',
      description: 'Summary flowchart of USPSTF cancer screening recommendations by age and risk',
    },
  ],

  citations: [
    {
      id: 'uspstf-breast-2024',
      type: 'article',
      title: 'Screening for Breast Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
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
    {
      id: 'uspstf-lung-2021',
      type: 'article',
      title: 'Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nccn-genetics-2024',
      type: 'website',
      title: 'NCCN Guidelines: Genetic/Familial High-Risk Assessment',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'concept-breast-cancer-screening', targetType: 'concept', relationship: 'child', label: 'Breast Cancer Screening' },
    { targetId: 'concept-colorectal-cancer-screening', targetType: 'concept', relationship: 'child', label: 'Colorectal Cancer Screening' },
    { targetId: 'concept-lung-cancer-screening', targetType: 'concept', relationship: 'child', label: 'Lung Cancer Screening' },
    { targetId: 'concept-cervical-cancer-screening', targetType: 'concept', relationship: 'child', label: 'Cervical Cancer Screening' },
  ],

  tags: {
    systems: ['preventive-care'],
    topics: ['preventive medicine', 'oncology', 'screening', 'genetics'],
    keywords: ['cancer screening', 'mammography', 'colonoscopy', 'LDCT', 'PSA', 'genetic testing', 'MCED'],
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
