/**
 * Annual Physical Exam Components
 *
 * Comprehensive overview of the periodic health examination including
 * history, physical examination, screening tests, and health counseling.
 */

import { EducationalContent } from '../../types';

export const ANNUAL_PHYSICAL_COMPONENTS: EducationalContent = {
  id: 'concept-annual-physical-components',
  type: 'concept',
  name: 'Annual Physical Exam Components',
  alternateNames: ['Wellness visit', 'Annual checkup', 'Periodic health examination'],

  levels: {
    1: {
      level: 1,
      summary: 'A yearly checkup with your doctor helps catch health problems early and keeps you healthy.',
      explanation: `An annual physical is like a tune-up for your body. Your doctor checks how you're doing and looks for any problems.

**What Happens at a Checkup:**

**1. Talking About Your Health:**
- How you've been feeling
- Any new symptoms or concerns
- Medications you're taking
- Family health history
- Lifestyle habits (diet, exercise, sleep)

**2. Measurements:**
- Height and weight (BMI)
- Blood pressure
- Heart rate
- Temperature
- Sometimes oxygen level

**3. Physical Exam:**
- Eyes, ears, nose, throat
- Heart and lungs (listening with stethoscope)
- Abdomen (feeling your belly)
- Reflexes
- Skin check

**4. Blood Tests:**
- Cholesterol levels
- Blood sugar
- Kidney and liver function
- Blood count (looking for anemia)

**5. Other Tests Based on Age and Gender:**
- Women: Breast exam, Pap smear
- Men: Prostate discussion
- Older adults: Bone density, colon cancer screening

**6. Shots (Vaccines):**
- Flu shot
- Other vaccines you might need

**7. Talking About Health Habits:**
- Diet and exercise
- Smoking or alcohol use
- Mental health and stress
- Safety (seatbelts, helmets)

**Before Your Visit:**
- Write down questions you have
- Bring a list of your medications
- Know your family health history
- Bring records from other doctors

Your annual physical is a good time to ask any health questions you have!`,
      keyTerms: [
        { term: 'annual physical', definition: 'A yearly health checkup with your doctor' },
        { term: 'vital signs', definition: 'Basic body measurements like blood pressure, heart rate, and temperature' },
        { term: 'BMI', definition: 'Body Mass Index - a number calculated from your height and weight' },
      ],
      analogies: [
        'An annual physical is like a yearly car inspection - it catches small problems before they become big ones.',
        'Your doctor is like a detective looking for clues about your health.',
      ],
      examples: [
        'Finding high blood pressure at a checkup can lead to treatment that prevents heart attacks and strokes.',
        'A simple blood test can catch diabetes early when it\'s easier to manage.',
      ],
    },
    2: {
      level: 2,
      summary: 'The annual physical examination includes history taking, vital signs, systematic physical examination, age-appropriate screening tests, immunizations, and health counseling tailored to individual risk factors.',
      explanation: `The periodic health examination (PHE) is a comprehensive health assessment performed annually or at recommended intervals.

**Components of the Annual Physical:**

**1. Medical History Update:**

*Review of Systems:*
- Constitutional (weight changes, fatigue, fever)
- Cardiovascular (chest pain, shortness of breath)
- Respiratory (cough, wheezing)
- Gastrointestinal (abdominal pain, bowel changes)
- Genitourinary (urinary symptoms)
- Musculoskeletal (joint pain, weakness)
- Neurological (headaches, numbness)
- Psychiatric (mood, anxiety, sleep)

*Past Medical History:*
- Chronic conditions
- Surgeries
- Hospitalizations
- Allergies

*Medications:*
- Prescription medications
- Over-the-counter medications
- Supplements

*Family History:*
- Cancer (types, ages)
- Heart disease
- Diabetes
- Mental health conditions

*Social History:*
- Tobacco use (pack-years)
- Alcohol use
- Drug use
- Occupation
- Sexual history

**2. Vital Signs:**

| Vital Sign | Normal Adult Range |
|------------|-------------------|
| Blood Pressure | <120/80 mmHg |
| Heart Rate | 60-100 bpm |
| Respiratory Rate | 12-20/min |
| Temperature | 97.8-99.1°F |
| Oxygen Saturation | 95-100% |
| BMI | 18.5-24.9 kg/m² |

**3. Physical Examination:**

| System | Components |
|--------|------------|
| General | Appearance, distress level |
| Head/Eyes | Vision, pupils, fundoscopy |
| Ears/Nose/Throat | Hearing, nasal passages, oral cavity |
| Neck | Thyroid, lymph nodes, carotid pulses |
| Cardiovascular | Heart sounds, peripheral pulses, edema |
| Respiratory | Breath sounds, respiratory effort |
| Abdominal | Tenderness, masses, organomegaly |
| Musculoskeletal | Range of motion, strength |
| Neurological | Mental status, cranial nerves, reflexes |
| Skin | Lesions, rashes, suspicious moles |

**4. Screening Tests:**

*Laboratory:*
- Complete blood count (anemia, infection)
- Comprehensive metabolic panel (glucose, kidney, liver)
- Lipid panel (cholesterol)
- Thyroid function (if symptoms)
- Hemoglobin A1c (diabetes screening)
- Urinalysis (depending on symptoms)

*Age/Gender-Specific:*
- Mammography (women 50+)
- Pap smear (women 21-65)
- Colonoscopy (adults 45+)
- Bone density (women 65+)
- PSA (discussed with men 55-69)

**5. Immunizations:**
- Influenza (annual)
- Tdap/Td (every 10 years)
- Others based on age and risk

**6. Health Counseling:**
- Nutrition and weight management
- Physical activity recommendations
- Tobacco cessation
- Alcohol moderation
- Mental health
- Fall prevention (elderly)`,
      keyTerms: [
        { term: 'review of systems', definition: 'Systematic questioning about symptoms in each body system' },
        { term: 'pack-years', definition: 'Measure of smoking history: packs per day × years smoked' },
        { term: 'screening test', definition: 'Test performed on people without symptoms to detect disease early' },
        { term: 'fundoscopy', definition: 'Examination of the back of the eye with an ophthalmoscope' },
      ],
      analogies: [
        'The review of systems is like going through a checklist to make sure no symptoms are missed.',
      ],
    },
    3: {
      level: 3,
      summary: 'The periodic health examination integrates evidence-based screening, risk stratification, shared decision-making, and preventive counseling within a comprehensive clinical encounter designed to optimize health outcomes while avoiding unnecessary testing.',
      explanation: `**Evidence-Based Periodic Health Examination:**

**History Components:**

**1. Structured History Taking:**

*Chief Concern/Agenda Setting:*
- Open-ended initial inquiry
- Patient priorities for visit
- Clinician agenda items
- Time management

*HPI Expansion:*
- OPQRST for symptoms (Onset, Provocation, Quality, Radiation, Severity, Timing)
- Impact on function
- Prior workup and treatments
- Associated symptoms

*Comprehensive Social History:*

| Domain | Assessment |
|--------|------------|
| Tobacco | Current/former/never; pack-years; readiness to quit |
| Alcohol | AUDIT-C screening; quantity/frequency |
| Substances | Prescription misuse; illicit drugs |
| Sexual | Partners, practices, protection, STI history |
| Safety | Domestic violence, firearms, seatbelts |
| Exercise | Frequency, type, duration |
| Diet | Quality, patterns |
| Sleep | Duration, quality, disorders |
| Mental Health | PHQ-2/PHQ-9, GAD-2/GAD-7 |
| Occupation | Exposures, stress, ergonomics |

**Physical Examination Evidence:**

| Exam Component | Evidence for Asymptomatic | Notes |
|----------------|---------------------------|-------|
| Blood pressure | Strong (USPSTF A) | Every 1-3 years age 18+ |
| Height/weight/BMI | Strong | Obesity screening |
| Vision screening | Moderate | Age 3+, unclear frequency |
| Hearing screening | Insufficient (adults) | Consider age 50+ |
| Oral exam | Limited | Oral cancer rare |
| Thyroid palpation | Insufficient | Low yield in asymptomatic |
| Cardiac auscultation | Routine | Limited evidence but standard |
| Abdominal exam | Routine | AAA screening separate |
| Skin exam | Insufficient (total body) | Targeted if risk factors |
| Breast exam | No longer routinely recommended | Mammography preferred |
| Pelvic exam | Not required annually | Asymptomatic screening |
| Genital exam | Not routine | Symptoms or STI screening |
| Rectal/prostate | Not routine | DRE not screening |

**Shared Decision-Making Areas:**

| Topic | Considerations |
|-------|---------------|
| PSA screening | Benefits vs. overdiagnosis/treatment |
| Mammography 40-49 | Earlier detection vs. false positives |
| Low-dose CT lung cancer | Smoking history, life expectancy |
| Colorectal screening method | Colonoscopy vs. stool-based |
| Statin therapy | CVD risk, side effects |
| Aspirin primary prevention | CVD benefit vs. bleeding risk |

**Laboratory Recommendations:**

*Routine in Asymptomatic Adults:*

| Test | Population | Frequency |
|------|------------|-----------|
| Lipid panel | Adults 40-75 | Every 5 years (or per risk) |
| Glucose/A1c | BMI ≥25 and age 35-70 | Every 3 years |
| HIV | Ages 15-65 | At least once |
| Hepatitis C | Ages 18-79 | Once |
| Hepatitis B | At-risk populations | Once |

*NOT Routinely Recommended:*
- Complete blood count (without symptoms)
- Comprehensive metabolic panel (without indication)
- Thyroid function tests (without symptoms)
- Urinalysis (without symptoms)
- Vitamin D levels (without risk factors)
- ESR/CRP (without symptoms)
- Cancer markers (CA-125, CEA, etc.)

**Health Maintenance Schedule Integration:**

| Service | Timing | Method |
|---------|--------|--------|
| BP screening | Each visit | Manual/automatic |
| Diabetes screening | Q3 years if at risk | Fasting glucose or A1c |
| Lipids | Q5 years or per CVD risk | Fasting or non-fasting |
| Colorectal | Age 45-75 | Colonoscopy Q10y or alternatives |
| Breast cancer | Age 50-74 | Mammography Q2y |
| Cervical cancer | Age 21-65 | Pap ± HPV per guidelines |
| Lung cancer | 50-80, ≥20 pack-years | Annual LDCT |
| AAA | Men 65-75 who smoked | One-time ultrasound |
| Osteoporosis | Women ≥65 | DEXA |
| Depression | All adults | PHQ-2/9 annually |`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient discuss options, considering evidence and patient values' },
        { term: 'AUDIT-C', definition: 'Alcohol Use Disorders Identification Test-Consumption; 3-question alcohol screening' },
        { term: 'PHQ-9', definition: 'Patient Health Questionnaire-9; validated depression screening and severity tool' },
        { term: 'USPSTF grade', definition: 'Strength of recommendation from A (strongly recommend) to I (insufficient evidence)' },
        { term: 'overdiagnosis', definition: 'Detecting disease that would never have caused symptoms or harm if undetected' },
      ],
      clinicalNotes: 'Avoid "routine" labs without indication. Many traditional annual physical components lack evidence. Focus on USPSTF A and B recommendations. Use visit for health counseling and relationship building.',
    },
    4: {
      level: 4,
      summary: 'The modern periodic health examination balances evidence-based preventive services with patient-centered care, incorporating risk stratification, behavioral counseling, care coordination, and documentation requirements while addressing the evolving evidence base for routine testing.',
      explanation: `**Comprehensive Periodic Health Examination:**

**Risk Stratification Framework:**

**Cardiovascular Risk Assessment:**

*10-Year ASCVD Risk Calculation:*
- Age, sex, race
- Total and HDL cholesterol
- Systolic blood pressure (treated vs. untreated)
- Diabetes status
- Current smoking status

*Risk Categories and Actions:*

| Risk Level | 10-Year Risk | Management |
|------------|--------------|------------|
| Low | <5% | Lifestyle |
| Borderline | 5-7.4% | Consider risk enhancers |
| Intermediate | 7.5-19.9% | Risk discussion, consider CAC |
| High | ≥20% | High-intensity statin |

*Risk Enhancers:*
- Family history premature ASCVD
- LDL-C ≥160 mg/dL
- Metabolic syndrome
- CKD
- Chronic inflammatory conditions
- High-risk ethnicity
- Elevated Lp(a), apoB, hs-CRP
- ABI <0.9

*Coronary Artery Calcium (CAC) Score:*
- For intermediate risk with uncertain decision
- CAC = 0: Reassuring (except diabetics, smokers)
- CAC ≥100: Favors statin

**Cancer Risk Assessment:**

*Hereditary Cancer Syndrome Screening:*

| Red Flags | Consider Referral |
|-----------|------------------|
| Multiple cancers same individual | Genetic counseling |
| Early onset cancer (<50) | Genetics |
| Multiple affected family members | Genetics |
| Rare cancers (male breast) | Genetics |
| Known family mutation | Cascade testing |

*Breast Cancer Risk Models:*
- Gail: Age, family history, reproductive, biopsy history
- Tyrer-Cuzick: Adds breast density, detailed family history
- BRCAPRO: Mutation probability

**Preventive Counseling (5 A's Framework):**

1. **Ask** - Identify and document behaviors
2. **Advise** - Clear, personalized advice to change
3. **Assess** - Readiness to change
4. **Assist** - Provide strategies and resources
5. **Arrange** - Follow-up contacts

**Tobacco Cessation:**
- Ask at every visit
- Advise to quit
- Pharmacotherapy: Varenicline, bupropion, NRT
- Behavioral support: Quitline (1-800-QUIT-NOW)
- Combination therapy most effective

**Alcohol Counseling:**
- AUDIT-C screening
- Brief intervention for risky use
- Referral for dependence

**Obesity Management:**
- Calculate BMI every visit
- Discuss if BMI ≥25
- Refer to intensive behavioral program
- Consider pharmacotherapy if BMI ≥30 or ≥27 with comorbidity
- Discuss bariatric surgery if BMI ≥40 or ≥35 with comorbidity

**Medicare Annual Wellness Visit:**

*First AWV (IPPE - Welcome to Medicare):*
- Within first 12 months of Part B
- Medical/social history
- Depression screening
- Functional status
- Fall risk
- Height, weight, BMI, BP
- Vision screening
- Written screening schedule
- Health risk assessment

*Subsequent AWV:*
- Annual after IPPE
- Update health risk assessment
- Establish personalized prevention plan
- Cognitive impairment detection
- Review functional status
- Update screening schedule

**Quality Measures Integration:**

| Measure | Specification | Target |
|---------|---------------|--------|
| Breast cancer screening | Mammogram in past 27 months | ≥74% |
| Colorectal cancer screening | Appropriate test per guidelines | ≥63% |
| Diabetes: A1c control | A1c <8% or <9% | ≥68% |
| Blood pressure control | <140/90 mmHg | ≥70% |
| Statin therapy | If indicated | ≥75% |
| Tobacco screening/cessation | Screen and intervene | ≥85% |
| Depression screening | PHQ screen | ≥90% |

**Documentation Requirements:**

*Essential Elements:*
- Chief complaint/reason for visit
- HPI with OLDCARTS elements
- Review of systems
- Past medical/surgical/family/social history update
- Medications reconciliation
- Allergies verification
- Physical examination findings
- Assessment and plan
- Counseling provided
- Shared decision-making documentation
- Follow-up plan`,
      keyTerms: [
        { term: 'ASCVD risk', definition: 'Atherosclerotic Cardiovascular Disease 10-year risk calculated from pooled cohort equations' },
        { term: 'CAC score', definition: 'Coronary Artery Calcium score from CT; quantifies coronary atherosclerosis' },
        { term: 'Annual Wellness Visit', definition: 'Medicare preventive visit focused on health risk assessment and personalized prevention plan' },
        { term: '5 A\'s framework', definition: 'Behavioral counseling structure: Ask, Advise, Assess, Assist, Arrange' },
        { term: 'risk enhancer', definition: 'Factors that increase CVD risk beyond calculated score and may influence treatment decisions' },
      ],
      clinicalNotes: 'Document shared decision-making conversations for medicolegal protection and quality measures. Medicare AWV has specific billable codes. Risk calculators available in most EHRs. Consider CAC for statin decision in intermediate risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary periodic health examination optimization integrates precision prevention, health information technology, population health management, and value-based care principles while addressing evidence gaps, overutilization, and health disparities in preventive services delivery.',
      explanation: `**Advanced Preventive Care Framework:**

**1. Precision Prevention:**

*Risk-Stratified Screening:*

| Traditional | Precision Approach |
|-------------|-------------------|
| Age-based mammography | Risk model-based intervals |
| Colonoscopy everyone at 45 | Polygenic risk-informed timing |
| PSA shared decision | Genetic risk + biomarkers |
| Lipid panel Q5 years | ASCVD + polygenic risk |

*Genomic Risk Integration:*
- Polygenic risk scores (PRS) emerging
- BRCA, Lynch syndrome cascade testing
- Pharmacogenomics for prevention (statins, antiplatelets)
- Challenges: Ancestry bias, clinical utility validation

*Liquid Biopsy for Multi-Cancer Early Detection:*
- Galleri, Grail tests (circulating tumor DNA)
- Detects 50+ cancers from blood
- Sensitivity varies by cancer type
- Not yet guideline-recommended
- May complement organ-specific screening

**2. Value-Based Preventive Care:**

*Choosing Wisely Recommendations:*
- Avoid routine ECG in asymptomatic low-risk adults
- Avoid routine CBC/BMP without indication
- Avoid annual chest X-ray
- Avoid PSA without informed discussion
- Avoid annual pelvic exam in asymptomatic women
- Avoid routine thyroid screening

*Low-Value Care Reduction:*

| Service | Evidence |
|---------|----------|
| Annual physical in young healthy adults | Questionable overall mortality benefit |
| Pre-operative testing (low-risk surgery) | Rarely changes management |
| Routine vitamin D testing | Not cost-effective |
| Cancer markers in asymptomatic | Not screening tools |
| Carotid ultrasound (asymptomatic) | Not recommended |

*High-Value Services Often Missed:*
- Tobacco cessation counseling
- Colorectal cancer screening (underutilized)
- Statin therapy when indicated
- Blood pressure optimization
- Depression screening and treatment

**3. Health Information Technology:**

*Clinical Decision Support:*
- EHR-embedded health maintenance alerts
- Risk calculator integration
- Order set standardization
- Documentation templates
- Quality measure tracking

*Patient Engagement Tools:*
- Patient portal pre-visit health risk assessment
- Online screening scheduling
- Digital shared decision aids
- Remote monitoring integration
- Vaccination records

*Population Health Management:*
- Panel management dashboards
- Care gap identification
- Outreach workflows
- Registry-based care

**4. Addressing Health Disparities:**

*Screening Disparities:*

| Screening | Disparity |
|-----------|-----------|
| Colonoscopy | Black, Hispanic, uninsured lower |
| Mammography | Similar overall; later stage in minorities |
| Lung cancer screening | Low uptake across all groups |
| Cervical cancer | Hispanic higher incidence; screening gaps |

*Interventions:*
- Patient navigation
- Community health workers
- Mailed screening tests (FIT, self-collected HPV)
- Mobile mammography
- Interpreter services
- Same-day completion strategies
- Address transportation, childcare barriers

**5. Evolving Evidence Base:**

*Recent Guideline Changes:*

| Topic | Old | New |
|-------|-----|-----|
| Colorectal screening start | 50 | 45 |
| Lung cancer screening age | 55-80 | 50-80 |
| Diabetes screening age | 40 | 35 |
| Anxiety screening | Not routine | Recommend (USPSTF 2023) |
| Hepatitis C | Birth cohort | Universal 18-79 |

*Areas of Uncertainty:*
- Optimal screening intervals (personalization)
- When to stop screening (life expectancy)
- Risk-based versus age-based approaches
- MCED test clinical utility
- AI in diagnostic imaging

**6. Visit Structure Optimization:**

*Efficient Preventive Visit Model:*

1. **Pre-visit:**
   - HRA completion via portal
   - Medication list review
   - Care gaps identified
   - Standing orders activated

2. **Rooming:**
   - Vitals by MA/nurse
   - PHQ-2/9, AUDIT-C administered
   - Vaccines offered per standing orders
   - Point-of-care tests if indicated

3. **Clinician time:**
   - Agenda setting (patient and clinician priorities)
   - Shared decision-making discussions
   - Brief counseling interventions
   - Order necessary screenings
   - Referrals as indicated

4. **Post-visit:**
   - Care navigator follow-up
   - Results communication
   - Scheduling referrals/procedures
   - Tracking completion

*Team-Based Care:*
- RN care managers for chronic disease
- Clinical pharmacists for medication management
- Behavioral health integration
- Community health workers for social determinants
- Health coaches for lifestyle change

**7. Documentation and Billing:**

*Coding Optimization:*
- Distinguish preventive from problem visits
- Use appropriate wellness visit codes
- Document time for counseling codes
- Capture chronic care management
- Quality measure documentation

*Audit Protection:*
- Medical necessity for tests ordered
- Indication for non-routine services
- Shared decision-making documented
- Follow-up plan explicit`,
      keyTerms: [
        { term: 'Choosing Wisely', definition: 'ABIM Foundation initiative identifying low-value medical tests and procedures to avoid' },
        { term: 'MCED (multi-cancer early detection)', definition: 'Blood tests detecting multiple cancer types via circulating tumor DNA' },
        { term: 'population health management', definition: 'Proactive management of patient panels to improve outcomes across populations' },
        { term: 'care gap', definition: 'Recommended preventive service not completed; identified through registry analysis' },
        { term: 'health risk assessment', definition: 'Standardized questionnaire identifying behavioral and medical risk factors' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Emphasize high-value services (tobacco cessation, CRC screening, BP control)
- Avoid low-value testing (routine labs, ECG in asymptomatic)
- Use EHR tools for population health management
- Pre-visit planning improves efficiency and completeness
- Document shared decision-making for medicolegal protection
- Address social determinants and barriers to care
- Consider precision approaches as evidence evolves
- Balance thoroughness with visit time constraints`,
    },
  },

  media: [
    {
      id: 'annual-exam-checklist',
      type: 'diagram',
      filename: 'annual-physical-components.svg',
      title: 'Annual Physical Examination Components',
      description: 'Comprehensive checklist of annual exam components by category',
    },
  ],

  citations: [
    {
      id: 'uspstf-prevention',
      type: 'website',
      title: 'USPSTF Recommendations',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'medicare-awv',
      type: 'website',
      title: 'Annual Wellness Visit',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/medicare/coverage/annual-wellness-visit',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-screening-guidelines-age', targetType: 'concept', relationship: 'related', label: 'Screening by Age' },
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'concept-immunizations', targetType: 'concept', relationship: 'related', label: 'Immunizations' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'primary care', 'health maintenance'],
    keywords: ['annual physical', 'wellness visit', 'health screening', 'preventive care', 'Medicare AWV'],
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
