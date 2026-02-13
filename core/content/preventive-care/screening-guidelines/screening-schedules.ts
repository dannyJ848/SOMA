/**
 * Screening Schedules by Age
 *
 * Comprehensive preventive care screening schedule recommendations
 * organized by age group based on USPSTF and major society guidelines.
 */

import { EducationalContent } from '../../types';

export const SCREENING_SCHEDULES: EducationalContent = {
  id: 'concept-screening-schedules',
  type: 'concept',
  name: 'Preventive Screening Schedules',
  alternateNames: ['Health maintenance schedule', 'Wellness schedule', 'Preventive care timeline'],

  levels: {
    1: {
      level: 1,
      summary: 'Preventive screenings are recommended at different ages throughout life to catch health problems early when they are easier to treat.',
      explanation: `Getting the right screenings at the right time helps you stay healthy. Many serious health problems can be found early, before symptoms appear.

**Screenings Throughout Life:**

**Your 20s and 30s**
- Blood pressure: Every visit
- Cholesterol: Starting at age 20
- Cervical cancer (women): Starting at age 21
- STI testing: If sexually active
- Skin checks: Yearly skin exam

**Your 40s**
- All of the above, plus:
- Mammograms (women): Starting at 40-50
- Diabetes screening: Starting at 35
- Eye exam: Every 2-4 years

**Your 50s**
- All of the above, plus:
- Colon cancer screening: Starting at 45
- Lung cancer screening: If you smoke heavily
- Prostate screening (men): Discuss with doctor
- Shingles vaccine: Starting at 50

**Your 60s and Beyond**
- All of the above, plus:
- Bone density scan (women): Starting at 65
- Bone density scan (men): Starting at 70
- Pneumonia vaccine: Starting at 65
- Annual eye exam

**Remember:**
- Your doctor may recommend different timing based on your health
- Family history affects when to start
- Keep track of your screenings
- Ask your doctor which screenings you need`,
      keyTerms: [
        { term: 'screening', definition: 'Testing for disease before symptoms appear' },
        { term: 'preventive care', definition: 'Healthcare to prevent disease or detect it early' },
        { term: 'wellness visit', definition: 'Check-up when you are not sick' },
        { term: 'family history', definition: 'Health information about your close relatives' },
      ],
      analogies: [
        'Preventive screenings are like routine car maintenance - catch problems before you break down.',
        'Think of screenings as a health report card showing how you are doing over time.',
      ],
      examples: [
        'At her wellness visit at age 45, Lisa discussed starting mammograms and colon cancer screening with her doctor.',
        'Because his father had colon cancer at 50, Mike started colonoscopies at age 40.',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based screening schedules vary by age, sex, and risk factors, with specific recommendations for cardiovascular, cancer, infectious disease, and metabolic screening throughout adulthood.',
      explanation: `**Age-Based Screening Schedule:**

**Ages 18-39:**
| Test | Who | Frequency |
|------|-----|-----------|
| Blood pressure | All | Every visit, at least annually |
| Cholesterol | All | Every 4-6 years |
| Cervical cancer | Women | Pap every 3 years (21-29) |
| Cervical cancer | Women | Pap ± HPV every 3-5 years (30-39) |
| STI screening | Sexually active | Based on risk |
| HIV | All | At least once |
| Depression | All | Per clinician judgment |
| Skin cancer | All | Periodic exam |
| HPV vaccine | Through age 26 | If not completed |

**Ages 40-49:**
| Test | Who | Frequency |
|------|-----|-----------|
| All above screenings | | |
| Mammogram | Women | Every 1-2 years (discuss at 40-49) |
| Diabetes | All | Every 3 years (starting at 35) |
| Eye exam | All | Every 2-4 years |
| Lung cancer | Heavy smokers | Discuss with doctor |

**Ages 50-64:**
| Test | Who | Frequency |
|------|-----|-----------|
| All above screenings | | |
| Colorectal cancer | All | Every 10 years (colonoscopy) or alternatives |
| Prostate cancer | Men | Discuss with doctor (ages 55-69) |
| Lung cancer | Heavy smokers | Annual CT scan (ages 50-80) |
| Shingles vaccine | All | Starting at age 50 |
| Pneumonia vaccine | Some | If risk factors present |

**Ages 65+:**
| Test | Who | Frequency |
|------|-----|-----------|
| All above screenings | | |
| Bone density | Women | Starting at 65 |
| Bone density | Men | Starting at 70 |
| Pneumonia vaccine | All | Starting at 65 |
| Aortic aneurysm | Men who smoked | One-time ultrasound (65-75) |
| Annual wellness visit | All | Every year (Medicare) |`,
      keyTerms: [
        { term: 'heavy smoker', definition: 'Smoking history of 20+ pack-years' },
        { term: 'wellness visit', definition: 'Preventive care visit when not sick' },
        { term: 'annual physical', definition: 'Yearly check-up with comprehensive health assessment' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Screening schedules integrate multiple guideline sources, account for individual risk factors, and require shared decision-making for certain recommendations while balancing benefits and harms.',
      explanation: `**Guideline Sources & Reconciliation:**

*Major Sources:*
- USPSTF (U.S. Preventive Services Task Force)
- ACS (American Cancer Society)
- ACC/AHA (American College of Cardiology/American Heart Association)
- ADA (American Diabetes Association)
- ACIP (Advisory Committee on Immunization Practices)

*When Guidelines Differ:*
- Discuss with patient
- Consider patient preferences
- Individualize based on risk
- Document discussion

**Shared Decision-Making Scenarios:**

*Prostate Cancer Screening (PSA):*
- Ages 55-69: Discuss benefits/harms
- Benefits: Potential to detect prostate cancer early
- Harms: False positives, overdiagnosis, treatment complications
- <55 or >70: Generally not recommended

*Mammography Ages 40-49:*
- Individual decision based on preferences
- More frequent false positives in younger women
- Higher density makes interpretation harder

*Lung Cancer Screening:*
- Ages 50-80, 20+ pack-years
- Must be current smoker or quit <15 years ago
- Shared decision-making visit required before first scan

**Individualizing Schedules:**

*Family History:*
- Start 10 years before earliest family diagnosis
- Example: Mother had colon cancer at 45, start screening at 35
- BRCA carriers: Breast MRI + mammography from 25-30

*Risk Factors:*
- May increase screening frequency
- May start screening earlier
- May add additional screenings

*Life Expectancy Considerations:*
- Age-based screening may stop if limited life expectancy
- Generally <10 years: Screening unlikely to benefit
- Consider patient preferences, comorbidities

**Electronic Health Record Integration:**
- Automated reminders for due screenings
- Clinical decision support
- Age-based prompts
- Risk factor alerts`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Patient and provider discussing options to reach decision together' },
        { term: 'overdiagnosis', definition: 'Detecting disease that would never cause harm' },
        { term: 'comorbidities', definition: 'Multiple medical conditions present simultaneously' },
        { term: 'clinical decision support', definition: 'Computer-based prompts to guide clinical decisions' },
      ],
      analogies: [],
      clinicalNotes: 'Individualize based on risk factors. Use shared decision-making for Grade C recommendations. Consider life expectancy for older adults. Leverage EHR reminders.',
    },
    4: {
      level: 4,
      summary: 'Optimal screening schedule implementation requires addressing health disparities, improving adherence, using technology for reminders, and navigating evolving guidelines while considering cost-effectiveness.',
      explanation: `**Health Disparities in Screening:**

*Racial/Ethnic Disparities:*
- Black individuals: Higher colorectal cancer mortality, consider earlier screening (age 45)
- Black men: Higher prostate cancer mortality
- Asian Americans: Different cancer profiles (gastric, liver)
- Hispanic populations: Lower screening rates, language/cultural barriers
- Native Americans: Higher diabetes rates, culturally tailored approaches needed

*Socioeconomic Factors:*
- Insurance coverage
- Transportation
- Time off work
- Health literacy
- Trust in healthcare system

**Improving Adherence:**

*Evidence-Based Strategies:*
- Mailed FIT kits: +20-30% colorectal screening
- Patient navigation: +10-30% completion
- Mobile mammography: Improved access
- Text message reminders: Effective for multiple screenings
- Standing orders: Increases vaccination rates

*Technology Integration:*
- Patient portal reminders
- Automated phone calls
- Mobile health apps
- Wearable device data

**Screening Controversies & Evolution:**

*Colorectal Cancer:*
- Age lowered from 50 to 45 due to increased early-onset cases
- Stool tests (FIT) vs colonoscopy access
- FIT adherence superior due to convenience

*Breast Cancer:*
- Annual vs biennial mammography debate
- Breast density notification laws
- Supplementary screening (MRI, ultrasound) for dense breasts

*Cervical Cancer:*
- Primary HPV testing emerging
- Less frequent intervals with HPV co-testing
- Self-sampling for HPV testing

**Cost-Effectiveness Considerations:**

*Cost per QALY:*
- Colonoscopy: <$50,000/QALY (cost-effective)
- LDCT lung: ~$81,000/QALY (borderline)
- Some screenings: May exceed thresholds in low-risk populations

*Resource Allocation:*
- Colonoscopy capacity constraints
- Radiologist availability
- Prioritizing high-yield screenings

**Electronic Health Record Optimization:**

*Best Practices:*
- Age-based prompts
- Sex-specific reminders
- Risk factor adjustment
- Gap-in-care alerts
- Documentation of discussions

**Patient Communication:**

*Effective Strategies:*
- Plain language
- Visual aids
- Absolute risk/benefit (not relative)
- Addressing specific concerns
- Cultural tailoring`,
      keyTerms: [
        { term: 'QALY', definition: 'Quality-adjusted life year; metric combining quantity and quality of life' },
        { term: 'gap-in-care', definition: 'Recommended care not received; used for quality improvement' },
        { term: 'patient navigation', definition: 'Guiding patients through healthcare system to overcome barriers' },
        { term: 'standing orders', definition: 'Pre-authorized protocols allowing care without individual order' },
      ],
      analogies: [],
      clinicalNotes: 'Address disparities in your practice. Use multiple reminder strategies. Mailed FIT kits effective. Discuss absolute risks. Leverage EHR tools.',
    },
    5: {
      level: 5,
      summary: 'Contemporary screening schedule optimization incorporates precision medicine approaches, multi-cancer detection platforms, AI-enhanced risk stratification, and population health management while addressing implementation challenges.',
      explanation: `**Precision Screening Approaches:**

*Risk-Stratified Schedules:*
- Polygenic risk scores modifying age of onset
- Breast density-adjusted mammography intervals
- Genetic testing guiding schedules (BRCA, Lynch syndrome)
- Family history algorithms

*Multi-Cancer Early Detection (MCED):*
- Galleri test: 50+ cancers from single blood draw
- Sensitivity by stage: I (17%), II (40%), III (77%), IV (90%)
- Specificity: 99.5%
- Not yet guideline-recommended
- Ongoing trials: NHS-Galeri (140,000 participants)

*Implications for Schedules:*
- May reduce frequency of traditional screening
- May increase interval for low-risk
- May complement, not replace, current screening

**Artificial Intelligence Integration:**

*Risk Prediction:*
- EHR-based algorithms identifying candidates
- Natural language processing of family history
- Imaging AI for incidental findings
- Wearable device integration

*Population Health:*
- Identifying overdue patients
- Risk-based outreach prioritization
- Resource optimization
- Outcome tracking

**Implementation Science:**

*Screening Programs:*
- System-level approaches
- Quality metrics and benchmarks
- Continuous improvement cycles
- Learning health systems

*Barriers to Implementation:*
- Provider time constraints
- Electronic health record usability
- Patient factors (cost, access, fear)
- System factors (specialist access, diagnostic capacity)

**Global Perspectives:**

*WHO Guidelines:*
- Different resource settings
- Cost-effective prioritization
- Task-shifting strategies
- Essential screening packages

*Resource-Limited Settings:*
- Visual inspection with acetic acid (cervical cancer)
- Breast clinical exams vs mammography
- TB symptom screening vs chest X-ray

**Future Directions:**

*Biomarker-Driven Schedules:*
- Liquid biopsy replacing some imaging
- Molecular clocks for optimal timing
- Individual response variation

*Personalized Intervals:*
- Not just age-based
- Based on individual risk trajectory
- Dynamic adjustment over time

*Integration with Prevention:*
- Vaccination reducing screening needs (HPV)
- Chemoprevention modifying schedules (aspirin)
- Lifestyle interventions affecting risk

**Quality Metrics:**

*Screening Rate Metrics:*
- Percentage of eligible population screened
- Stratified by demographics
- Disparity monitoring

*Outcome Metrics:*
- Cancer stage at diagnosis
- Mortality reduction
- False positive rates
- Harms from screening

*Process Metrics:*
- Time to diagnostic resolution
- Follow-up after abnormal screening
- Patient satisfaction

**Ethical Considerations:**

*Overdiagnosis:*
- Informed consent essential
- Communication challenges
- Uncertainty about natural history

*Resource Allocation:*
- Who gets screened when resources limited?
- Equity vs efficiency trade-offs
- Shared decision-making imperative`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk from multiple variants' },
        { term: 'learning health system', definition: 'Healthcare system that continuously learns and improves' },
        { term: 'task-shifting', definition: 'Delegating tasks from higher to lower trained health workers' },
        { term: 'shared decision-making', definition: 'Collaborative process between patient and provider' },
      ],
      analogies: [],
      clinicalNotes: 'Stay current with evolving guidelines. Implement risk-stratified approaches. Monitor disparities in your practice. Use MCED cautiously with appropriate expectations. Document shared decision-making.',
    },
  },

  media: [
    {
      id: 'screening-schedule-poster',
      type: 'diagram',
      filename: 'preventive-screening-schedule.svg',
      title: 'Preventive Screening Schedule by Age',
      description: 'Visual timeline of recommended screenings throughout adulthood',
    },
  ],

  citations: [
    {
      id: 'uspstf-all',
      type: 'website',
      title: 'USPSTF Recommendations',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/approach/',
      accessedDate: '2025-01-25',
    },
    {
      id: 'aha-preventive',
      type: 'website',
      title: 'Recommendations for Preventive Pediatric Health Care',
      source: 'American Academy of Pediatrics',
      url: 'https://www.aap.org/en-us/documents/periodicity_schedule.pdf',
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening', targetType: 'concept', relationship: 'related', label: 'Cancer Screening Guidelines' },
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Screening' },
    { targetId: 'concept-annual-physical-exam', targetType: 'concept', relationship: 'related', label: 'Annual Physical Exam' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'primary care', 'screening', 'wellness', 'health maintenance'],
    keywords: ['screening schedule', 'preventive care timeline', 'wellness visit', 'health maintenance', 'age-based screening'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
