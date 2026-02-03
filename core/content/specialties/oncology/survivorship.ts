/**
 * Cancer Survivorship Educational Content
 *
 * Comprehensive coverage of cancer survivorship including:
 * - Survivorship care planning
 * - Late effects of treatment
 * - Surveillance for recurrence
 * - Second malignancies
 * - Psychosocial issues
 * - Healthy lifestyle after cancer
 */

import { EducationalContent } from '../../types';

export const cancerSurvivorshipContent: EducationalContent = {
  id: 'oncology-cancer-survivorship',
  type: 'concept',
  name: 'Cancer Survivorship',
  alternateNames: ['Cancer survivor care', 'Post-treatment care', 'Long-term follow-up'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer survivorship is about living your best life after cancer treatment, including staying healthy and watching for any problems.',
      explanation: `Once cancer treatment ends, a new chapter begins. You're now a cancer survivor! But finishing treatment doesn't mean your healthcare is over - it's just different.

**What is a Cancer Survivor?**
- Anyone who has been diagnosed with cancer, from the moment of diagnosis
- Includes people actively in treatment and those who finished years ago
- There are over 18 million cancer survivors in the United States

**What Happens After Treatment:**

*Regular Check-ups:*
- Your doctor will want to see you regularly
- Frequency depends on your cancer type
- Visits become less frequent over time
- Usually includes exams and sometimes scans or blood tests

*Watching for Cancer Coming Back (Recurrence):*
- Different for each cancer type
- Know the warning signs to report
- Follow-up tests as recommended

*Side Effects That May Continue:*
- Fatigue (tiredness) is common
- Pain or numbness from surgery or nerves
- Memory or concentration changes ("chemo brain")
- Emotional effects (worry, depression)

**Staying Healthy After Cancer:**
- Regular exercise (helps fatigue and mood)
- Healthy diet
- Maintain a healthy weight
- Don't smoke
- Limit alcohol
- Protect your skin from the sun

**Getting Support:**
- Cancer survivor support groups
- Counseling if needed
- Help getting back to work
- Managing finances and insurance

**The Survivorship Care Plan:**
- A document summarizing your treatment
- Lists what follow-up you need
- Includes signs to watch for
- Helps communicate with all your doctors`,
      keyTerms: [
        { term: 'cancer survivor', definition: 'Anyone who has been diagnosed with cancer, from diagnosis onward' },
        { term: 'recurrence', definition: 'When cancer comes back after treatment' },
        { term: 'follow-up care', definition: 'Regular medical visits after cancer treatment to check on your health' },
        { term: 'survivorship care plan', definition: 'A document summarizing your cancer treatment and follow-up needs' },
      ],
      analogies: [
        'Finishing cancer treatment is like finishing a marathon - you need time to recover, and you need to take care of your body differently now.',
        'A survivorship care plan is like a maintenance manual for your health after cancer.',
      ],
      examples: [
        'A woman who finished breast cancer treatment 2 years ago still sees her oncologist every 6 months for a check-up.',
        'A man who had colon cancer joins a survivor support group to connect with others who understand what he went through.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer survivorship encompasses surveillance for recurrence, management of treatment-related late effects, health promotion, and psychosocial support.',
      explanation: `**The Survivorship Continuum:**

Cancer survivorship begins at diagnosis and continues throughout life. The focus shifts from active treatment to:
- Surveillance for recurrence
- Monitoring for late effects
- Health promotion
- Addressing psychosocial needs

**Surveillance for Recurrence:**

*General Principles:*
- Most recurrences occur in first 2-5 years
- Visit frequency decreases over time
- Tailored to cancer type and risk

*Example - Breast Cancer:*
- History and physical every 3-6 months for 3 years, then annually
- Annual mammogram
- No routine imaging or tumor markers (unless symptoms)

*Example - Colorectal Cancer:*
- CEA every 3-6 months for 2 years, then every 6 months for years 3-5
- CT chest/abdomen/pelvis annually for 5 years
- Colonoscopy at 1 year, then based on findings

**Late Effects of Treatment:**

*Chemotherapy:*
- Fatigue (most common)
- Peripheral neuropathy
- Cognitive changes ("chemo brain")
- Infertility
- Second malignancies (rare)

*Radiation:*
- Fibrosis in treated area
- Lymphedema
- Cardiac effects (if chest radiation)
- Second cancers in radiation field

*Surgery:*
- Chronic pain
- Lymphedema (if lymph nodes removed)
- Functional changes (ostomy, mastectomy)

*Hormonal Therapy:*
- Hot flashes
- Bone loss (osteoporosis)
- Joint pain
- Cardiovascular risk

**Psychosocial Issues:**

*Common Concerns:*
- Fear of recurrence
- Anxiety and depression
- Relationship changes
- Body image concerns
- Financial toxicity
- Return to work challenges

*Support Resources:*
- Individual counseling
- Support groups
- Cancer survivor programs
- Online communities

**Health Promotion:**

*Evidence-Based Recommendations:*
- Regular physical activity (150+ minutes/week moderate)
- Healthy weight maintenance
- Balanced diet rich in fruits, vegetables, whole grains
- Tobacco cessation
- Alcohol moderation (if any)
- Sun protection`,
      keyTerms: [
        { term: 'late effects', definition: 'Health problems that occur months or years after cancer treatment ends' },
        { term: 'peripheral neuropathy', definition: 'Nerve damage causing numbness, tingling, or pain, often in hands and feet' },
        { term: 'lymphedema', definition: 'Swelling caused by damage to the lymphatic system, often after lymph node removal' },
        { term: 'fear of recurrence', definition: 'Worry or anxiety about cancer coming back, common in survivors' },
        { term: 'financial toxicity', definition: 'Financial burden and hardship resulting from cancer diagnosis and treatment' },
      ],
      analogies: [
        'Surveillance for recurrence is like a security system - regular checks to catch any problems early.',
        'Managing late effects is like taking care of a car after a major repair - some things may never be quite the same, but good maintenance helps.',
      ],
    },
    3: {
      level: 3,
      summary: 'Survivorship care requires structured follow-up incorporating cancer-specific surveillance, late effect screening, health behavior counseling, and coordination across primary and specialty care.',
      explanation: `**Survivorship Care Planning:**

*Components of Survivorship Care Plan:*
- Treatment summary (diagnosis, stage, treatments received)
- Surveillance recommendations
- Late effect screening
- Health promotion goals
- Contacts and resources

*Models of Survivorship Care:*
- Oncology-led
- Primary care-led
- Shared care (collaborative)
- Risk-stratified (based on recurrence risk, complexity)

**Cancer-Specific Surveillance:**

*Breast Cancer (NCCN/ASCO):*
- H&P every 3-6 months for 3 years, then every 6-12 months years 4-5, then annually
- Annual mammogram (if breast-conserving)
- No routine labs, imaging, or tumor markers unless symptoms
- Continue endocrine therapy as indicated (5-10 years)

*Colorectal Cancer:*
- H&P every 3-6 months for 2 years, then every 6 months years 3-5
- CEA every 3-6 months for 2 years, then every 6 months years 3-5
- CT chest/abdomen/pelvis annually for 5 years (stage II-III)
- Colonoscopy at 1 year, then per findings

*Lung Cancer:*
- H&P and CT chest every 6 months for 2 years, then annually
- Higher risk of second primary lung cancer

*Prostate Cancer:*
- PSA every 6-12 months
- Testosterone monitoring if on ADT

**Specific Late Effects:**

*Cardiovascular:*
- Anthracyclines (doxorubicin): Cardiomyopathy (dose-dependent)
- Trastuzumab: Reversible LV dysfunction
- Chest radiation: CAD, valvular disease, pericarditis
- Monitoring: Baseline echo, periodic reassessment

*Bone Health:*
- Aromatase inhibitors, androgen deprivation: Accelerated bone loss
- Chemotherapy-induced menopause
- Corticosteroid exposure
- Screening: DXA at baseline and periodic

*Fertility:*
- Alkylating agents, pelvic radiation: Gonadal toxicity
- Counseling pre-treatment for preservation options
- Post-treatment: AMH (women), semen analysis (men)

*Second Malignancies:*
- Treatment-related: Alkylating agents (MDS/AML), radiation (solid tumors in field)
- Genetic predisposition: BRCA, Lynch syndrome, Li-Fraumeni
- Lifestyle-related: Same risk factors as general population

**Cognitive Impairment ("Chemo Brain"):**

*Symptoms:*
- Memory problems
- Difficulty concentrating
- Word-finding difficulties
- Multitasking challenges

*Risk Factors:*
- Chemotherapy (not fully explained by chemo alone)
- Hormonal therapy
- Fatigue, depression, anxiety
- Older age

*Management:*
- Neuropsychological testing if severe
- Cognitive rehabilitation
- Exercise
- Sleep optimization
- Address comorbid conditions`,
      keyTerms: [
        { term: 'survivorship care plan', definition: 'Document summarizing treatment history and ongoing care recommendations for cancer survivors' },
        { term: 'anthracycline cardiotoxicity', definition: 'Heart muscle damage from chemotherapy drugs like doxorubicin (dose-related risk)' },
        { term: 'DXA', definition: 'Dual-energy X-ray absorptiometry; bone density scan for osteoporosis screening' },
        { term: 'AMH', definition: 'Anti-Mullerian hormone; marker of ovarian reserve in women' },
        { term: 'cognitive rehabilitation', definition: 'Strategies and exercises to improve thinking and memory after cancer treatment' },
      ],
      clinicalNotes: 'Survivorship care plans should be provided at treatment completion (ASCO, ACS). Primary care providers play crucial role in survivorship; clear communication and delineation of responsibilities essential.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive survivorship care addresses long-term organ toxicity, genetic risk assessment, fertility preservation, psychosocial rehabilitation, and care coordination across the lifespan.',
      explanation: `**Risk-Stratified Survivorship Care:**

*Risk Categories:*
- Low: No significant late effects expected, low recurrence risk
- Intermediate: Moderate risk, some late effects
- High: High recurrence risk, significant late effects, genetic syndromes

*Care Model by Risk:*
- Low risk: Primary care-led with oncology consultation as needed
- Intermediate: Shared care model
- High risk: Oncology-led with multidisciplinary input

**Organ-Specific Long-Term Monitoring:**

*Cardiac:*
- Anthracycline (cumulative dose threshold ~450 mg/m2 doxorubicin equivalent)
- Risk factors: Pre-existing cardiac disease, concurrent trastuzumab, radiation
- Monitoring: Echo at baseline, 1 year post-treatment, then per symptoms
- Consider cardio-oncology follow-up for high-risk

*Pulmonary:*
- Bleomycin: Pulmonary fibrosis (dose-dependent)
- Radiation: Pneumonitis (acute), fibrosis (chronic)
- Checkpoint inhibitors: Pneumonitis
- Monitoring: PFTs at baseline if high-dose bleomycin, then per symptoms

*Endocrine:*
- Hypothyroidism post-neck radiation
- Premature menopause from chemotherapy/radiation
- Hypogonadism in men (alkylating agents, pelvic radiation)
- Metabolic syndrome (especially with androgen deprivation)

*Neurological:*
- Chemotherapy-induced peripheral neuropathy (platinum, taxanes, vinca alkaloids)
- Radiation-induced cognitive changes
- Leukoencephalopathy (methotrexate)

**Genetic Assessment in Survivorship:**

*Indications for Genetic Counseling:*
- Young age at diagnosis
- Family history of cancer
- Certain tumor types (ovarian, triple-negative breast, pancreatic)
- Tumor genomic findings (MSI-H, BRCA somatic mutation)
- Multiple primary cancers

*Implications of Germline Findings:*
- Increased surveillance for additional cancers
- Risk-reducing surgery options
- Family testing
- Treatment implications (PARP inhibitors for BRCA)

**Fertility and Sexual Health:**

*Fertility Preservation (should be discussed pre-treatment):*
- Women: Oocyte/embryo cryopreservation, ovarian tissue preservation
- Men: Sperm banking
- Gonadal shielding during radiation

*Post-Treatment Fertility:*
- AMH, FSH (women); semen analysis (men)
- Assisted reproductive technologies
- Discussion of surrogacy, adoption if needed

*Sexual Health:*
- Vaginal dryness/dyspareunia (aromatase inhibitors, premature menopause)
- Erectile dysfunction (prostatectomy, radiation, ADT)
- Body image concerns
- Libido changes
- Counseling and treatment options

**Return to Function:**

*Physical Rehabilitation:*
- Exercise prescription
- Physical therapy for specific deficits
- Lymphedema management
- Pain management

*Occupational:*
- Cognitive strategies
- Workplace accommodations
- Disability assessment if needed
- Vocational rehabilitation

*Financial:*
- Insurance navigation
- Assistance programs
- Disability benefits
- Employment rights (ADA)

**Comorbidity Management:**

*Cancer and Chronic Disease:*
- Diabetes: May be worsened by steroids, metabolic changes
- Cardiovascular: Increased risk from treatment
- Obesity: Associated with recurrence and second cancers
- Mental health: Depression, anxiety common

*Medication Management:*
- Drug interactions with endocrine therapy
- CYP2D6 considerations with tamoxifen
- Bone health medications with aromatase inhibitors`,
      keyTerms: [
        { term: 'cardio-oncology', definition: 'Subspecialty focused on cardiovascular complications of cancer and its treatment' },
        { term: 'germline mutation', definition: 'Inherited genetic change present in all cells, passed to offspring' },
        { term: 'gonadotoxicity', definition: 'Damage to reproductive organs from cancer treatment affecting fertility' },
        { term: 'risk-stratified care', definition: 'Tailoring follow-up intensity based on individual risk level' },
        { term: 'leukoencephalopathy', definition: 'White matter brain damage, can occur with certain chemotherapies' },
      ],
      clinicalNotes: 'Childhood cancer survivors have unique needs - COG Long-Term Follow-Up Guidelines provide risk-based screening recommendations. 60-90% of childhood cancer survivors will have at least one chronic health condition.',
    },
    5: {
      level: 5,
      summary: 'Advanced survivorship care integrates precision follow-up, emerging biomarkers for recurrence detection, novel interventions for late effects, and health system models to optimize long-term outcomes.',
      explanation: `**Evidence Base for Survivorship Care:**

*Surveillance Intensity:*
- Less may be more: Intensive imaging doesn't improve survival in many cancers
- ESMO PACE study (breast): Less intensive follow-up non-inferior
- Cost-effectiveness considerations
- Patient preferences (some want more, some less)

*Late Effects Research:*
- Childhood Cancer Survivor Study: Landmark cohort
- Army of Women (breast cancer)
- CCSS data: Basis for COG guidelines

**Emerging Biomarkers:**

*ctDNA for MRD Detection:*
- Post-operative ctDNA predicts recurrence
- DYNAMIC studies (colorectal): ctDNA-guided adjuvant therapy
- Earlier detection than conventional imaging
- Not yet standard of care (trials ongoing)

*Risk Prediction:*
- Polygenic risk scores for second cancers
- Genomic predictors of late effects
- Pharmacogenomics for toxicity prediction

**Interventions for Late Effects:**

*Cognitive Impairment:*
- Cognitive rehabilitation programs
- Exercise (evidence growing)
- Pharmacological: No clear benefit from stimulants in trials
- Mind-body interventions

*Fatigue:*
- Exercise: Best evidence (aerobic and resistance)
- Sleep optimization
- Mind-body therapies (yoga, meditation)
- Methylphenidate: Modest benefit in select patients

*Peripheral Neuropathy:*
- Prevention: Cryotherapy during taxanes
- Treatment: Duloxetine (CIPN), limited efficacy of other agents
- Rehabilitation: Balance training, sensory re-education

*Cardiotoxicity Prevention:*
- Dexrazoxane with anthracyclines
- Liposomal formulations
- ACE inhibitors/beta blockers (mixed data)
- Exercise cardiopulmonary rehabilitation

**Models of Care:**

*Survivorship Clinics:*
- Centralized, specialized
- Comprehensive assessment
- Care planning
- Resource for complex survivors

*Embedded Primary Care:*
- Oncology and primary care collaboration
- Warm handoffs
- Shared medical records
- Clear delineation of responsibilities

*Digital Health:*
- Remote monitoring
- Patient-reported outcomes
- Apps for symptoms, adherence
- Telehealth follow-up

*Navigation Programs:*
- Patient navigators
- Nurse coordinators
- Financial counselors
- Survivorship support specialists

**Quality Metrics:**

*Process Measures:*
- Survivorship care plan completion
- Appropriate surveillance testing
- Late effect screening
- Health behavior counseling

*Outcome Measures:*
- Quality of life scores
- Return to work
- Chronic disease management
- Recurrence detection

**Special Populations:**

*Adolescent and Young Adult (AYA):*
- Fertility impact major concern
- Education and career disruption
- Insurance transitions
- Psychosocial development issues

*Older Adults:*
- Geriatric assessment
- Polypharmacy
- Functional status
- Goals of care (life expectancy context)

*Disparities:*
- Racial/ethnic minorities: Higher mortality, less access to survivorship care
- Rural populations: Distance barriers
- Socioeconomic: Financial toxicity more severe
- LGBTQ+: Unique needs, potential discrimination

**Future Directions:**

*Precision Survivorship:*
- Genomic-guided surveillance
- Biomarker-driven interventions
- Personalized risk calculators

*Health System Integration:*
- Learning health systems
- Big data for outcomes research
- Value-based cancer care
- Global survivorship models

*Research Priorities:*
- Interventions for persistent symptoms
- Implementation science
- Comparative effectiveness of care models
- Patient-centered outcomes`,
      keyTerms: [
        { term: 'MRD', definition: 'Minimal/measurable residual disease; small amounts of cancer detectable by sensitive assays' },
        { term: 'COG', definition: 'Children\'s Oncology Group; develops guidelines for childhood cancer survivors' },
        { term: 'AYA', definition: 'Adolescent and young adult; cancer patients aged ~15-39 with unique needs' },
        { term: 'precision survivorship', definition: 'Tailoring survivorship care based on individual risk factors and biomarkers' },
        { term: 'financial toxicity', definition: 'Financial hardship from cancer costs affecting health outcomes and quality of life' },
      ],
      clinicalNotes: `**Key Practice Points:**
- Provide survivorship care plan at treatment completion
- Surveillance intensity should match evidence (less often better)
- Screen for late effects based on exposures
- Address psychosocial needs and fear of recurrence
- Coordinate with primary care

**Board Pearls:**
- Anthracycline cardiotoxicity is dose-dependent (~450 mg/m2 doxorubicin)
- Breast cancer survivors: No routine imaging or tumor markers
- Colorectal: CEA and imaging for 5 years
- Know late effects by treatment type
- Genetic counseling indications

**Resources:**
- NCCN Survivorship Guidelines
- ASCO Survivorship Care Planning
- COG Long-Term Follow-Up Guidelines (pediatric)
- Livestrong, ACS survivor resources`,
    },
  },

  media: [
    {
      id: 'survivorship-care-continuum',
      type: 'diagram',
      filename: 'survivorship-care-continuum.svg',
      title: 'Cancer Survivorship Care Continuum',
      description: 'Visual representation of survivorship care from diagnosis through long-term follow-up',
    },
  ],
  citations: [
    {
      id: 'asco-survivorship',
      type: 'website',
      title: 'ASCO Cancer Survivorship Care Guidelines',
      source: 'American Society of Clinical Oncology',
    },
    {
      id: 'cog-guidelines',
      type: 'website',
      title: 'Long-Term Follow-Up Guidelines for Survivors of Childhood, Adolescent, and Young Adult Cancers',
      source: 'Children\'s Oncology Group',
      url: 'http://www.survivorshipguidelines.org',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-palliative-care', targetType: 'topic', relationship: 'related', label: 'Palliative Care' },
    { targetId: 'oncology-screening-guidelines', targetType: 'topic', relationship: 'related', label: 'Cancer Screening' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['survivorship', 'follow-up', 'late-effects', 'quality-of-life'],
    keywords: ['cancer survivor', 'surveillance', 'recurrence', 'late effects', 'survivorship care plan'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
