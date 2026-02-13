/**
 * Lung Cancer Screening
 *
 * Comprehensive education on lung cancer screening with low-dose CT
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const LUNG_CANCER_SCREENING: EducationalContent = {
  id: 'concept-lung-cancer-screening',
  type: 'concept',
  name: 'Lung Cancer Screening',
  alternateNames: ['Low-dose CT screening', 'LDCT lung screening', 'Lung cancer early detection'],

  levels: {
    1: {
      level: 1,
      summary: 'A special low-dose CT scan can find lung cancer early in people who smoke or used to smoke heavily.',
      explanation: `Lung cancer is the leading cause of cancer death, but finding it early can save lives. A special type of CT scan can find lung cancer when it is small and easier to treat.

**Who Should Get Screened?**
- Adults ages 50-80
- Who smoke now OR quit within the last 15 years
- Who smoked heavily (20 pack-years or more)

**What is a Pack-Year?**
- 1 pack per day for 1 year = 1 pack-year
- 2 packs per day for 10 years = 20 pack-years
- 1 pack per day for 20 years = 20 pack-years

**What is a Low-Dose CT Scan?**
- A quick X-ray scan of your lungs
- Takes about 15 minutes
- No needles or dye needed
- Lower radiation than a regular CT scan

**Benefits:**
- Can find cancer early when treatment works best
- Reduces chances of dying from lung cancer by 20%
- Quick and painless

**Important to Know:**
- The scan may find spots that are NOT cancer (common)
- You might need follow-up tests
- The best way to prevent lung cancer is to quit smoking
- Talk to your doctor if you qualify for screening`,
      keyTerms: [
        { term: 'CT scan', definition: 'A special X-ray that takes detailed pictures of the inside of your body' },
        { term: 'pack-year', definition: 'A way to measure how much you have smoked over time' },
        { term: 'nodule', definition: 'A small spot on the lung that shows up on a CT scan' },
      ],
      analogies: [
        'A CT scan is like taking a detailed photograph of your lungs layer by layer, like slicing a loaf of bread.',
        'Lung nodules are like freckles on the lung - most are harmless, but some need to be watched.',
      ],
      examples: [
        'Jim smoked a pack a day for 25 years before quitting 5 years ago. His doctor recommended lung cancer screening, which found an early cancer that was successfully treated.',
      ],
    },
    2: {
      level: 2,
      summary: 'Low-dose CT screening for lung cancer reduces mortality by 20% in high-risk smokers, requiring careful patient selection based on smoking history and age criteria.',
      explanation: `Lung cancer screening with low-dose CT (LDCT) has been proven to reduce deaths from lung cancer in high-risk individuals with significant smoking history.

**Screening Criteria (USPSTF 2021):**

| Criterion | Requirement |
|-----------|-------------|
| Age | 50-80 years |
| Smoking status | Current smoker OR quit within 15 years |
| Smoking history | 20+ pack-years |
| Health status | Able to undergo treatment if cancer found |

**Key Trial Evidence:**

*National Lung Screening Trial (NLST):*
- 53,000 participants
- 20% reduction in lung cancer mortality
- 6.7% reduction in all-cause mortality
- Compared LDCT to chest X-ray

*NELSON Trial:*
- European study
- 24% mortality reduction in men
- Confirmed NLST findings

**What the Scan Can Find:**
- **Nodules**: Small spots on the lung
  - Most are benign (not cancer)
  - Size and appearance determine follow-up
- **Lung cancer**: Can be found at early, treatable stages
- **Other findings**: Emphysema, coronary calcifications

**Understanding Lung Nodules:**

*Based on Size:*
- <6mm: Usually no follow-up needed
- 6-8mm: Follow-up CT in 6-12 months
- >8mm: More urgent evaluation needed

*Lung-RADS Categories:*
- 1: Negative (no nodules)
- 2: Benign (definitely benign)
- 3: Probably benign (follow-up)
- 4A: Suspicious (short-term follow-up)
- 4B/4X: Very suspicious (tissue diagnosis)

**Benefits vs. Risks:**

*Benefits:*
- 20% reduction in lung cancer death
- Finding cancer early
- Opportunity for smoking cessation counseling

*Risks:*
- False positives (24% have some abnormality)
- Follow-up tests and procedures
- Anxiety
- Radiation exposure (low)
- Overdiagnosis (some slow-growing cancers)`,
      keyTerms: [
        { term: 'LDCT', definition: 'Low-dose computed tomography; CT scan using reduced radiation for screening' },
        { term: 'Lung-RADS', definition: 'Lung Imaging Reporting and Data System; standardized reporting for lung CT findings' },
        { term: 'pack-years', definition: 'Smoking history calculated as packs per day multiplied by years smoked' },
        { term: 'false positive', definition: 'An abnormal finding that turns out not to be cancer' },
      ],
      analogies: [
        'Lung-RADS is like a weather forecast for nodules - telling you how likely a nodule is to be concerning.',
      ],
    },
    3: {
      level: 3,
      summary: 'LDCT lung cancer screening applies risk-based eligibility criteria and standardized Lung-RADS reporting to balance sensitivity for early-stage cancer detection against false-positive rates and procedural complications in a shared decision-making framework.',
      explanation: `**Lung Cancer Epidemiology:**
- Leading cause of cancer death (US and globally)
- ~230,000 new cases annually in US
- ~130,000 deaths annually in US
- 5-year survival: 22% overall, 60% if localized
- 80-85% attributable to smoking

**Risk Assessment:**

*Pack-Year Calculation:*
- Pack-years = (packs/day) x (years smoked)
- 20 pack-years minimum for screening eligibility
- Higher pack-years = higher risk

*Additional Risk Factors:*
- COPD/emphysema
- Family history
- Occupational exposures (asbestos, radon)
- Prior lung cancer

**NLST Key Findings:**
- 53,454 participants, ages 55-74
- 20+ pack-year history
- Randomized to LDCT vs CXR
- 3 annual screens
- NNS: 320 to prevent 1 lung cancer death
- Absolute risk reduction: 0.3%

**NELSON Trial:**
- 15,792 participants (mostly male)
- Volume-based nodule management
- 24% mortality reduction in men
- 33% reduction at 10 years
- Longer follow-up, European population

**Lung-RADS Classification:**

| Category | Finding | Management |
|----------|---------|------------|
| 1 | No nodules OR definitely benign | Annual screening |
| 2 | Benign appearance/behavior | Annual screening |
| 3 | Probably benign | 6-month follow-up CT |
| 4A | Suspicious | 3-month follow-up OR PET/CT |
| 4B | Very suspicious | Tissue diagnosis (biopsy) |
| 4X | 4A/4B with additional features | As per 4A/4B |
| S | Other significant findings | As indicated |

**Nodule Evaluation:**

*Size Thresholds (solid nodules):*
- <6mm: Lung-RADS 2
- 6-8mm: Lung-RADS 3 (new) or 2 (stable)
- 8-15mm: Lung-RADS 4A
- ≥15mm: Lung-RADS 4B

*Ground-Glass Nodules:*
- Different thresholds (can be larger)
- ≥30mm: Lung-RADS 4B
- Growth more concerning than size

**Shared Decision-Making:**

*CMS Requirements:*
- Documented counseling visit
- Discussion of benefits/harms
- Smoking cessation counseling
- Eligibility verification

*Key Discussion Points:*
- Absolute risk reduction (~0.3%)
- False positive rate (~24% abnormal findings)
- Follow-up procedures and biopsies
- Radiation exposure (~1.5 mSv)
- Importance of continued screening

**Implementation Challenges:**
- Low uptake (~5-15% of eligible)
- Access disparities
- Follow-up adherence
- Incidental findings management`,
      keyTerms: [
        { term: 'Lung-RADS', definition: 'ACR reporting system for lung CT screening, categories 1-4X with specific management recommendations' },
        { term: 'ground-glass nodule', definition: 'Hazy lung opacity that does not obscure underlying structures; different management than solid nodules' },
        { term: 'NNS', definition: 'Number needed to screen to prevent one outcome (death)' },
        { term: 'incidental findings', definition: 'Abnormalities found on screening not related to the primary purpose (e.g., coronary calcification)' },
      ],
      clinicalNotes: 'Document shared decision-making visit. Verify pack-year history carefully. Include smoking cessation counseling at every visit. Use Lung-RADS for standardized reporting. Ensure follow-up tracking systems for abnormal findings.',
    },
    4: {
      level: 4,
      summary: 'Lung cancer screening optimization requires integration of risk prediction models, volume-based nodule assessment, imaging biomarkers, and AI-enhanced detection while addressing implementation science challenges including low uptake rates, health disparities, and the balance between sensitivity and overdiagnosis.',
      explanation: `**Risk Prediction Models:**

*PLCOm2012:*
- Age, education, BMI, COPD
- Family history, smoking duration, intensity, quit time
- Better discrimination than USPSTF criteria alone
- Threshold: ≥1.5% 6-year risk

*LLPv2 (Liverpool Lung Project):*
- UK-derived model
- Includes pneumonia history, occupational exposures
- Used in UK screening program

*Model Comparison:*
- Risk models identify more cancers with fewer screens
- May improve efficiency of screening programs
- Equity concerns with education-based criteria

**Advanced Nodule Assessment:**

*Volume-Based Management (NELSON approach):*
- Volume doubling time (VDT)
- VDT <400 days: Suspicious
- VDT 400-600 days: Indeterminate
- VDT >600 days: Likely benign
- Reduces false-positive rate

*Perifissural Nodules:*
- Nodules at lung fissures
- Almost always benign (intrapulmonary lymph nodes)
- Can be managed less aggressively

**Imaging Biomarkers:**

*Emphysema Score:*
- Automated quantification
- Independent lung cancer predictor
- May refine risk stratification

*Coronary Calcification:*
- Incidental finding on LDCT
- Predicts cardiovascular events
- Opportunity for risk modification

*Radiomic Features:*
- Texture, shape, attenuation patterns
- May predict malignancy probability
- AI models under development

**Artificial Intelligence:**

*Computer-Aided Detection (CAD):*
- Nodule detection assistance
- Reduces miss rate
- FDA-approved products available

*Deep Learning:*
- End-to-end lung cancer prediction
- Google/Northwestern: AUC 0.94
- May predict cancer 1-2 years before radiologist

*Challenges:*
- Validation across populations
- Integration into workflow
- Regulatory considerations
- Interpretation alongside Lung-RADS

**Overdiagnosis in Lung Cancer Screening:**

*Estimates:*
- 3-25% depending on definition
- NLST estimate: ~18%
- Primarily slow-growing adenocarcinomas

*Contributing Factors:*
- Lepidic-predominant adenocarcinomas
- Adenocarcinoma in situ
- Competing mortality in older smokers

*Clinical Implications:*
- Active surveillance protocols emerging
- Sublobar resection for early-stage
- Avoid aggressive treatment in high comorbidity

**Implementation Science:**

*Current Uptake:*
- Only 5-15% of eligible screened
- Significant variation by region
- Lower in rural, underinsured populations

*Barriers:*
1. Patient factors: Awareness, fear, fatalism
2. Provider factors: Lack of time, uncertainty
3. System factors: Access, tracking, follow-up
4. Policy factors: Insurance coverage, centers

*Interventions:*
- Centralized screening programs
- Patient navigation
- EMR-based identification
- Direct outreach to eligible patients
- Shared decision-making tools

**Special Populations:**

*Continuing Smokers:*
- Higher cancer incidence
- Benefit from screening
- Intensive cessation intervention critical

*Never-Smokers:*
- Not currently recommended for screening
- Different cancer biology (EGFR mutations common)
- Research ongoing

*Prior Lung Cancer:*
- Annual surveillance typically
- Higher second primary risk
- May use LDCT protocol`,
      keyTerms: [
        { term: 'volume doubling time (VDT)', definition: 'Time for nodule to double in volume; rapid growth suggests malignancy' },
        { term: 'radiomic features', definition: 'Quantitative imaging features extracted from CT that may predict cancer risk' },
        { term: 'PLCOm2012', definition: 'Risk prediction model derived from PLCO trial data incorporating multiple risk factors' },
        { term: 'lepidic', definition: 'Adenocarcinoma growth pattern along alveolar walls; often slow-growing' },
      ],
      clinicalNotes: 'Consider risk models for borderline eligibility. Use volume-based assessment when available. Incorporate AI tools as adjunct to radiologist reading. Track screening outcomes for quality improvement. Address cessation at every encounter.',
    },
    5: {
      level: 5,
      summary: 'Precision lung cancer screening integrates polygenic risk, radiomic AI models, blood-based biomarkers, and risk-adaptive protocols while critically addressing health equity, implementation barriers, and evolving evidence for expanded eligibility and optimal screening intervals.',
      explanation: `**Precision Risk Stratification:**

*Polygenic Risk Scores:*
- SNPs associated with lung cancer susceptibility
- May identify never-smokers at elevated risk
- Potential to refine eligibility criteria
- Validation studies ongoing

*Integrated Risk Models:*
- Clinical + genetic + imaging features
- May optimize screening efficiency
- Personalized screening intervals
- Research phase

**Blood-Based Biomarkers:**

*Circulating Tumor DNA (ctDNA):*
- Detection of lung cancer-specific mutations
- MCED tests (Galleri) include lung cancer
- Lower sensitivity for early-stage than LDCT
- May complement imaging

*Autoantibody Panels:*
- EarlyCDT-Lung
- Panel of tumor-associated antigens
- Modest sensitivity, may stratify CT findings
- Not yet widely adopted

*Protein Biomarkers:*
- CEA, CYFRA 21-1
- Not specific enough for screening
- May have role in nodule characterization

**Artificial Intelligence Advances:**

*End-to-End Deep Learning:*
- Direct cancer prediction from CT
- Sybil (MIT): Predicts 1-6 year cancer risk
- May identify cancers before visible nodule
- Extensive validation needed

*Nodule Classification:*
- Malignancy probability scoring
- Lung-RADS integration
- May reduce unnecessary biopsies

*Incidental Findings:*
- Automated detection of emphysema, calcification
- Cardiovascular risk stratification
- Comprehensive health assessment

**Expanded Eligibility:**

*USPSTF 2021 Changes:*
- Lowered age from 55 to 50
- Reduced pack-years from 30 to 20
- Expands eligibility by 87%

*Still Missed Populations:*
- Younger heavy smokers
- Significant secondhand exposure
- Occupational exposures
- Never-smokers (5% of lung cancers)

*International Approaches:*
- UK: Risk model-based selection
- Australia: Following USPSTF
- Varying criteria globally

**Screening Interval Optimization:**

*Current Standard:*
- Annual LDCT
- Continue until age 80 or quit >15 years

*Risk-Adaptive Intervals:*
- Longer intervals for low-risk findings
- Shorter for high-risk
- Nodule-specific protocols
- Cost-effectiveness modeling supports approach

**Health Equity Imperatives:**

*Disparities:*
- Black Americans: Higher lung cancer mortality
- Rural populations: Limited access
- Low SES: Lower screening rates
- Uninsured: Major barrier

*Contributing Factors:*
- Fewer screening-certified centers
- Transportation barriers
- Medical mistrust
- Provider awareness gaps

*Interventions:*
- Mobile CT units
- Community health workers
- Culturally tailored education
- Policy advocacy for coverage

**Smoking Cessation Integration:**

*Critical Component:*
- More lives saved by cessation than screening
- Teachable moment at screening
- Combined intervention optimal

*Evidence-Based Approaches:*
- Pharmacotherapy (varenicline, bupropion, NRT)
- Behavioral counseling
- Quitlines
- Digital interventions

**Emerging Questions:**

1. When to stop screening?
2. Role of biomarkers in risk stratification?
3. Optimal follow-up for indeterminate nodules?
4. AI integration: Reader replacement or augmentation?
5. Never-smoker screening criteria?
6. Cost-effectiveness of expanded eligibility?

**Implementation Excellence:**

*Program Requirements:*
- ACR-designated lung cancer screening center
- Lung-RADS reporting
- Smoking cessation program
- Tracking and recall systems
- Multidisciplinary team

*Quality Metrics:*
- Screening rate among eligible
- Positive predictive value
- Complication rates
- Stage shift (% early-stage diagnoses)
- Cessation intervention rate`,
      keyTerms: [
        { term: 'Sybil', definition: 'AI model predicting lung cancer risk from LDCT up to 6 years before diagnosis' },
        { term: 'EarlyCDT-Lung', definition: 'Blood test measuring autoantibodies to tumor-associated antigens for lung cancer risk stratification' },
        { term: 'MCED', definition: 'Multi-cancer early detection tests using ctDNA methylation patterns' },
        { term: 'stage shift', definition: 'Increase in proportion of cancers diagnosed at early stage due to screening' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Ensure ACR-designated screening center
- Document comprehensive shared decision-making
- Integrate smoking cessation at every visit
- Use standardized Lung-RADS reporting
- Implement robust tracking/recall system
- Consider risk models for eligibility decisions
- Address equity: patient navigation, transportation assistance
- Track quality metrics: screening rates, stage distribution
- Stay current: AI tools and biomarkers evolving rapidly
- Collaborate with thoracic surgery, oncology, pulmonology`,
    },
  },

  media: [
    {
      id: 'lung-nodule-management',
      type: 'diagram',
      filename: 'lung-rads-management-algorithm.svg',
      title: 'Lung-RADS Management Algorithm',
      description: 'Flowchart for nodule management based on Lung-RADS categories',
    },
  ],

  citations: [
    {
      id: 'uspstf-lung-2021',
      type: 'article',
      title: 'Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening',
      accessedDate: '2025-01-24',
    },
    {
      id: 'nlst-2011',
      type: 'article',
      title: 'Reduced Lung-Cancer Mortality with Low-Dose Computed Tomographic Screening',
      authors: ['National Lung Screening Trial Research Team'],
      source: 'New England Journal of Medicine',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Screening Overview' },
    { targetId: 'concept-smoking-cessation', targetType: 'concept', relationship: 'related', label: 'Smoking Cessation' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['preventive medicine', 'oncology', 'screening', 'pulmonology'],
    keywords: ['lung cancer', 'LDCT', 'screening', 'smoking', 'Lung-RADS', 'nodule'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
