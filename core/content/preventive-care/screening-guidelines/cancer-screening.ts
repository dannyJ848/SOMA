/**
 * Cancer Screening Guidelines
 *
 * Comprehensive cancer screening recommendations based on USPSTF guidelines
 * and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const CANCER_SCREENING: EducationalContent = {
  id: 'concept-cancer-screening',
  type: 'concept',
  name: 'Cancer Screening Guidelines',
  alternateNames: ['Cancer screening recommendations', 'Cancer early detection guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer screening tests look for cancer before you have symptoms, when treatment works best.',
      explanation: `Cancer screening helps find cancer early, before symptoms appear. Early detection often means treatment works better.

**Common Cancer Screenings:**

**Breast Cancer (Women)**
- Mammogram: X-ray of the breast
- Start age: 40-50 (discuss with doctor)
- How often: Every 1-2 years

**Colon Cancer (Everyone)**
- Colonoscopy: Camera examines colon
- Start age: 45
- How often: Every 10 years

**Cervical Cancer (Women)**
- Pap smear: Tests cells from cervix
- Start age: 21
- How often: Every 3-5 years

**Lung Cancer**
- CT scan of lungs
- For: Heavy smokers ages 50-80
- How often: Every year

**Prostate Cancer (Men)**
- PSA blood test
- Ages: 55-69
- Discuss with doctor

**Remember:**
- Not everyone needs every test
- Family history changes recommendations
- Ask your doctor which screenings you need`,
      keyTerms: [
        { term: 'screening', definition: 'Testing for disease before symptoms appear' },
        { term: 'mammogram', definition: 'X-ray test for breast cancer' },
        { term: 'colonoscopy', definition: 'Exam of the colon using a camera' },
        { term: 'PSA', definition: 'Blood test that can indicate prostate problems' },
      ],
      analogies: [
        'Cancer screening is like checking your car regularly to find problems before you break down.',
        'Screening finds small fires before they spread - easier to put out early.',
      ],
      examples: [
        'A mammogram found a small lump that Maria could not feel, leading to early treatment.',
        'During a colonoscopy, the doctor found and removed a polyp before it could become cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based cancer screening guidelines specify age ranges, intervals, and methods for detecting breast, colorectal, cervical, lung, and prostate cancers based on risk-benefit analysis.',
      explanation: `Cancer screening guidelines balance benefits (early detection, saved lives) against harms (false positives, unnecessary procedures).

**USPSTF Recommendation Grades:**
- **Grade A**: Strongly recommended (high certainty of substantial benefit)
- **Grade B**: Recommended (high certainty of moderate benefit)
- **Grade C**: Selectively offer (based on patient circumstances)
- **Grade D**: Not recommended (harms outweigh benefits)
- **Grade I**: Insufficient evidence

**Breast Cancer Screening:**
| Age | Recommendation |
|-----|----------------|
| 40-49 | Individual decision (Grade C) |
| 50-74 | Mammogram every 2 years (Grade B) |
| 75+ | Individual decision (evidence insufficient) |

**Colorectal Cancer Screening:**
| Age | Recommendation |
|-----|----------------|
| 45-75 | Screen (Grade A) |
| 76-85 | Selective (Grade C) |
| 86+ | No screening (Grade D) |

Options: Colonoscopy (10 years), FIT yearly, FIT-DNA every 3 years, CT colonography (5 years), flexible sigmoidoscopy (5-10 years)

**Cervical Cancer Screening:**
| Age | Recommendation |
|-----|----------------|
| 21-29 | Pap every 3 years |
| 30-65 | Pap + HPV every 5 years OR Pap every 3 years |
| 65+ | Stop if adequate prior screening |

**Lung Cancer Screening:**
- Ages 50-80 with 20+ pack-year smoking history
- Current smoker or quit within past 15 years
- Annual low-dose CT scan (Grade B)

**Prostate Cancer Screening:**
- Ages 55-69: Shared decision-making (Grade C)
- Ages 70+: Not recommended (Grade D)`,
      keyTerms: [
        { term: 'USPSTF', definition: 'U.S. Preventive Services Task Force; makes evidence-based screening recommendations' },
        { term: 'pack-year', definition: 'Smoking measure: packs per day x years smoked. 20 pack-years = 1 pack/day for 20 years' },
        { term: 'false positive', definition: 'Test indicating cancer when none is present' },
        { term: 'shared decision-making', definition: 'Patient and doctor discussing options together to decide' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Cancer screening implementation requires understanding test performance characteristics (sensitivity, specificity, PPV, NPV), number needed to screen, lead-time bias, and overdiagnosis to optimize population-level outcomes.',
      explanation: `**Screening Test Performance:**

*Key Metrics:*
- **Sensitivity**: True positive rate; ability to detect disease when present
- **Specificity**: True negative rate; ability to correctly identify disease absence
- **PPV**: Probability that positive test = true disease (depends on prevalence)
- **NPV**: Probability that negative test = truly disease-free

**Number Needed to Screen (NNS):**
- Breast cancer (mammography 50-74): ~1,000-2,000 to prevent 1 death
- Colorectal cancer (colonoscopy): ~500-1,000 to prevent 1 death
- Lung cancer (LDCT): ~250-320 to prevent 1 death

**Screening Biases:**
- **Lead-time bias**: Earlier detection creates appearance of longer survival without actual outcome improvement
- **Length-time bias**: Screening detects slower-growing, less aggressive tumors
- **Overdiagnosis**: Detection of cancer that would never cause symptoms or death

**High-Risk Populations:**

*BRCA Carriers:*
- Breast: MRI + mammography annually starting at 25-30
- Ovarian: Consider risk-reducing surgery

*Lynch Syndrome:*
- Colonoscopy every 1-2 years starting at 20-25
- Endometrial cancer screening

**Family History:**
- Begin screening 10 years before earliest diagnosis in relative
- Consider more intensive screening

**Stopping Considerations:**
- Life expectancy <10 years
- Comorbidities limit benefit
- Patient preference after discussion`,
      keyTerms: [
        { term: 'sensitivity', definition: 'Probability of positive test given disease is present' },
        { term: 'specificity', definition: 'Probability of negative test given disease is absent' },
        { term: 'PPV', definition: 'Positive predictive value; probability of disease given positive test' },
        { term: 'NPV', definition: 'Negative predictive value; probability of no disease given negative test' },
        { term: 'lead-time bias', definition: 'Survival appears longer only because of earlier detection, not delayed death' },
        { term: 'NNS', definition: 'Number needed to screen; people screened to prevent one death' },
      ],
      analogies: [],
      clinicalNotes: 'Use absolute risk reduction when counseling. Frame risks and benefits clearly. Individualize based on patient values.',
    },
    4: {
      level: 4,
      summary: 'Optimal cancer screening requires understanding tumor biology, pre-clinical detectable phase (PCDP), sojourn time, emerging technologies (liquid biopsy, AI), and risk-stratified approaches while addressing disparities.',
      explanation: `**Tumor Biology and Screening:**

*Key Concepts:*
- **Sojourn time**: Duration of pre-clinical detectable phase (PCDP)
- **Critical point**: Stage after which treatment cannot change outcome
- **Sensitivity drift**: Test sensitivity varies by tumor stage

*Screening Interval Optimization:*
- Longer sojourn time = longer screening interval acceptable (breast, colorectal)
- Shorter sojourn time = needs more frequent screening (lung, ovarian)

**Emerging Technologies:**

*Liquid Biopsy:*
- Circulating tumor DNA (ctDNA)
- Multi-cancer early detection (MCED) tests
- Galleri test: 50+ cancer types
- Sensitivity by stage: I (17%), II (40%), III (77%), IV (90%)

*AI in Imaging:*
- Mammography: AI triage reduces reading volume
- Colonoscopy: CADe increases adenoma detection rate 10-15%
- Lung CT: AI nodule detection and volumetric analysis

**Overdiagnosis by Cancer Type:**
| Cancer | Overdiagnosis Rate |
|--------|-------------------|
| Prostate | 20-50% |
| Breast | 10-30% |
| Thyroid | 70-80% |
| Lung (LDCT) | 3-25% |

**Risk-Stratified Approaches:**
- Breast density-adjusted mammography intervals
- Polygenic risk scores (313-SNP score for breast cancer)
- Family history-based earlier screening
- Genetic mutation carriers (BRCA, Lynch)

**Health Disparities:**
- Black individuals have higher CRC mortality (earlier screening considered)
- Black men have higher prostate cancer mortality
- Asian populations have different cancer profiles (gastric, liver)
- Access barriers: geographic, financial, cultural`,
      keyTerms: [
        { term: 'sojourn time', definition: 'Duration of pre-clinical phase when disease detectable by screening' },
        { term: 'PCDP', definition: 'Pre-clinical detectable phase; period when screening can detect disease before symptoms' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; tumor-derived fragments in blood' },
        { term: 'MCED', definition: 'Multi-cancer early detection; blood tests detecting multiple cancers' },
        { term: 'CADe', definition: 'Computer-aided detection; AI assisting polyp identification during colonoscopy' },
      ],
      analogies: [],
      clinicalNotes: 'MCED tests not yet USPSTF recommended. Use cautiously with appropriate expectations. Address disparities in screening access.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cancer screening integrates precision medicine approaches, novel biomarkers, multi-cancer detection platforms, and implementation science while evolving guidelines based on emerging evidence.',
      explanation: `**Precision Screening Paradigm:**

*Risk Models:*
- **Breast**: Tyrer-Cuzick, Gail, BRCAPRO
- **Colorectal**: Family history algorithms, polygenic scores emerging
- **Prostate**: PCA3, 4Kscore, PHI testing

*Clinical Implementation:*
- Lifetime risk >20%: Add breast MRI
- BRCA carriers: Annual MRI + mammography from age 25-30
- Lynch syndrome: Colonoscopy every 1-2 years from age 20-25

**Multi-Cancer Early Detection (MCED):**

*Galleri (GRAIL):*
- Methylation-based cfDNA analysis
- Cancer Signal Origin (CSO) prediction
- Specificity: 99.5%
- PATHFINDER study: 1.4% cancer detection, 38% not found by standard screening

*Challenges:*
- False positive cascade effects
- Unknown mortality impact
- Cost-effectiveness pending
- NHS-Galleri trial ongoing (140,000 participants)

**Artificial Intelligence Integration:**

*Mammography:*
- FDA-approved AI algorithms
- Standalone vs. assisted reading debate
- Performance varies by breast density

*Colonoscopy:*
- GI Genius, EndoBrain-EYE approved
- ADR improvement: 10-15%
- Quality metric integration

*Low-Dose CT:*
- Lung-RADS standardization
- Volumetric nodule assessment
- Incidental findings management

**Implementation Science:**

*Effective Interventions:*
- Mailed FIT kits: +20-30% CRC screening
- Patient navigation: +10-30% completion
- Mobile mammography: increased access
- Text reminders: effective for adherence

**Quality Metrics:**
- Screening rate (eligible population)
- Colonoscopy ADR (minimum 25%)
- Mammography cancer detection rate
- Recall rate (<10% target)
- Time to diagnostic resolution

**Emerging Frontiers:**

*Biomarker Integration:*
- Proteomics panels
- Exosome analysis
- Metabolomics
- Microbiome signatures

*Blood-Based Detection:*
- Minimal residual disease (MRD)
- Early detection technologies
- Combination approaches

*Prevention Integration:*
- HPV vaccination reducing cervical cancer
- Aspirin for CRC prevention
- H. pylori eradication for gastric cancer`,
      keyTerms: [
        { term: 'CSO', definition: 'Cancer signal origin; prediction of anatomical cancer location from molecular patterns' },
        { term: 'ADR', definition: 'Adenoma detection rate; colonoscopy quality metric, minimum 25%' },
        { term: 'MRD', definition: 'Minimal residual disease; small numbers of cancer cells after treatment' },
        { term: 'Lung-RADS', definition: 'Reporting system for lung cancer screening CT findings' },
        { term: 'cfDNA', definition: 'Cell-free DNA; fragments in blood including tumor-derived ctDNA' },
      ],
      analogies: [],
      clinicalNotes: 'Use shared decision-making for Grade C recommendations. Track quality metrics. Address disparities. Stay current with evolving guidelines.',
    },
  },

  media: [
    {
      id: 'cancer-screening-table',
      type: 'diagram',
      filename: 'cancer-screening-guidelines-table.svg',
      title: 'Cancer Screening Guidelines Table',
      description: 'Visual summary of cancer screening recommendations by age and cancer type',
    },
  ],

  citations: [
    {
      id: 'uspstf-cancer',
      type: 'website',
      title: 'USPSTF Cancer Screening Recommendations',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/',
      accessedDate: '2025-01-25',
    },
    {
      id: 'acs-screening',
      type: 'website',
      title: 'American Cancer Society Screening Guidelines',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org/cancer/screening.html',
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'concept-genetic-risk', targetType: 'concept', relationship: 'related', label: 'Genetic Risk Assessment' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'oncology', 'screening', 'public health'],
    keywords: ['cancer screening', 'mammogram', 'colonoscopy', 'Pap smear', 'PSA', 'lung cancer CT', 'USPSTF'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
