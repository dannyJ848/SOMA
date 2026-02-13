import { LegacyWomensHealthContent } from '../types';

export const mammogramGuidelines: LegacyWomensHealthContent = {
  id: 'concept-mammogram-guidelines',
  type: 'concept',
  name: 'Mammogram Guidelines',
  alternateNames: ['Breast cancer screening', 'Mammography recommendations', 'Breast screening guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'A mammogram is an X-ray of your breasts that can find cancer early, when it is easier to treat.',
      explanation: `**What is a Mammogram?**
A mammogram is a special X-ray picture of your breasts. It can find breast cancer before you or your doctor can feel a lump.

**Why Get a Mammogram?**
- Finds cancer early when it's small
- Early treatment works better
- Can save lives

**When to Start:**
- Most experts recommend starting between ages 40-50
- Talk to your doctor about what's right for you
- Some women with higher risk may need to start earlier

**How Often:**
- Every 1-2 years once you start
- Your doctor can help you decide

**What to Expect:**
- Takes about 20 minutes
- Your breast is pressed between two plates
- May be uncomfortable but only for a few seconds
- Try to schedule 1-2 weeks after your period (less tender)

**After Your Mammogram:**
- Results usually in 1-2 weeks
- "Callback" for more pictures is common and usually not cancer
- If something is found, you may need ultrasound or biopsy`,
      keyTerms: [
        { term: 'mammogram', definition: 'An X-ray picture of the breast used to find cancer early' },
        { term: 'screening', definition: 'Testing to find disease before symptoms appear' },
        { term: 'callback', definition: 'Being asked to come back for more pictures after a mammogram' },
      ],
      analogies: ['A mammogram is like an early warning system - it catches problems while they\'re still small and easy to fix.'],
      examples: ['Having your first mammogram at age 40', 'Getting a callback that turns out to be just dense breast tissue, not cancer'],
    },
    2: {
      level: 2,
      summary: 'Mammography screening guidelines vary by organization, with decisions about when to start and how often to screen depending on individual risk factors and patient preferences.',
      explanation: `**Major Guidelines:**

*American Cancer Society (ACS):*
- Ages 40-44: Option to start annual screening
- Ages 45-54: Annual screening recommended
- Age 55+: Biennial screening (or annual if preferred)
- Continue as long as good health and 10+ year life expectancy

*USPSTF (2024 Update):*
- Ages 40-74: Biennial screening recommended
- No longer requires individualized decision for ages 40-49
- Insufficient evidence for ages 75+

*ACOG:*
- Offer starting at age 40
- Recommend no later than age 50
- Annual or biennial based on shared decision-making

**Key Concepts:**

*Benefits of Screening:*
- Reduces breast cancer mortality by 15-30%
- Finds smaller, earlier stage cancers
- Less aggressive treatment possible

*Potential Harms:*
- False positives (10% per screening)
- Callbacks causing anxiety
- Overdiagnosis (treating cancers that wouldn't have caused harm)
- Radiation exposure (minimal)

**Types of Mammography:**
- 2D digital mammography: Standard screening
- 3D tomosynthesis: Reduces callbacks, especially in dense breasts
- Analog (film): Largely replaced by digital

**Dense Breasts:**
- Reduces mammography sensitivity
- Many states require notification
- Supplemental screening may be considered`,
      keyTerms: [
        { term: 'USPSTF', definition: 'US Preventive Services Task Force; makes evidence-based screening recommendations' },
        { term: 'tomosynthesis', definition: '3D mammography that takes multiple images at different angles' },
        { term: 'false positive', definition: 'Abnormal result that turns out not to be cancer' },
        { term: 'overdiagnosis', definition: 'Finding and treating cancers that would never have caused symptoms' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based mammography screening requires understanding mortality reduction data, age-specific considerations, and risk-stratified approaches to optimize benefits while minimizing harms.',
      explanation: `**Evidence Base:**

*RCT Data (Meta-analyses):*
- Ages 50-69: 20-25% mortality reduction
- Ages 40-49: 15% mortality reduction (smaller benefit, more false positives)
- Ages 70+: Limited trial data

*Observational Studies:*
- Generally show larger benefits
- Subject to selection bias

*Modeling Studies (CISNET):*
- Support starting at 40 for maximum benefit
- Biennial maintains most of mortality reduction with fewer harms

**Age-Specific Considerations:**

*Ages 40-49:*
- Lower cancer incidence
- Higher false positive rate
- Smaller absolute benefit
- Individual decision important

*Ages 50-74:*
- Clear net benefit
- Biennial vs. annual: Small incremental benefit from annual

*Age 75+:*
- Limited trial evidence
- Life expectancy consideration
- Individualize based on health status

**Risk Stratification:**

*Average Risk:*
- Lifetime risk <15%
- Standard screening per guidelines

*Intermediate Risk (15-20%):*
- Dense breasts
- Family history
- Prior biopsy with benign findings
- Consider supplemental screening

*High Risk (>20%):*
- BRCA1/2 carriers
- Strong family history (untested)
- History of chest radiation
- Certain genetic syndromes
- Annual MRI + mammography

**Breast Density Considerations:**
- BI-RADS density categories (A-D)
- Increases cancer risk
- Decreases mammographic sensitivity
- Tomosynthesis helps
- Supplemental screening options: US, MRI`,
      keyTerms: [
        { term: 'CISNET', definition: 'Cancer Intervention and Surveillance Modeling Network; provides modeling data for screening guidelines' },
        { term: 'BI-RADS density', definition: 'Classification from A (fatty) to D (extremely dense) describing breast composition' },
        { term: 'NNS', definition: 'Number needed to screen; how many women need screening to prevent one death' },
        { term: 'lead time bias', definition: 'Apparent survival benefit from earlier detection even without changing outcome' },
      ],
      clinicalNotes: 'NNS to prevent one breast cancer death varies by age: approximately 1900 for ages 40-49, 1300 for 50-59, and 800 for 60-69. Recommend risk assessment (e.g., Tyrer-Cuzick) to identify high-risk women who need enhanced screening.',
    },
    4: {
      level: 4,
      summary: 'Advanced mammography practice involves optimizing screening programs, managing dense breasts, integrating supplemental modalities, and understanding healthcare system factors affecting screening.',
      explanation: `**Supplemental Screening Modalities:**

*Breast Ultrasound:*
- Finds additional 2-4 cancers per 1000 in dense breasts
- Higher false positive rate
- Operator dependent
- Automated breast US (ABUS) available

*Breast MRI:*
- Highest sensitivity (>90%)
- For high-risk screening (BRCA, strong family history)
- Abbreviated MRI protocols emerging
- False positive rate and cost concerns

*Contrast-Enhanced Mammography:*
- Emerging modality
- Similar sensitivity to MRI
- Lower cost than MRI

*Molecular Breast Imaging:*
- Nuclear medicine technique
- Higher radiation dose
- Limited availability

**Quality Metrics:**

*ACR Accreditation Standards:*
- Cancer detection rate: >2.5 per 1000
- Recall rate: <10%
- PPV1 (abnormal callback): >4%
- PPV3 (biopsy): 25-40%

**Managing Abnormal Results:**

*BI-RADS 0 (Incomplete):*
- Additional views or ultrasound needed
- Usually resolved same day at imaging center

*BI-RADS 3 (Probably Benign):*
- 6-month follow-up imaging
- <2% malignancy risk
- Consider biopsy if patient preference or high risk

*BI-RADS 4/5 (Suspicious/Highly Suspicious):*
- Tissue diagnosis required
- Image-guided biopsy preferred

**Special Populations:**

*Personal History of Breast Cancer:*
- Annual mammography of remaining breast tissue
- Consider MRI supplementation

*Breast Implants:*
- Screening still recommended
- Implant-displaced views needed
- Lower sensitivity

*Transgender Patients:*
- Trans women on estrogen: Consider screening per cisgender guidelines
- Trans men: Screen based on remaining tissue`,
      keyTerms: [
        { term: 'ABUS', definition: 'Automated breast ultrasound; FDA-approved for dense breast supplemental screening' },
        { term: 'PPV', definition: 'Positive predictive value; percentage of positive tests that are truly positive' },
        { term: 'recall rate', definition: 'Percentage of screening mammograms requiring additional imaging' },
        { term: 'abbreviated MRI', definition: 'Shortened MRI protocol reducing scan time and cost for screening' },
      ],
      clinicalNotes: 'Recall rates >10% may indicate overreading; rates <5% may indicate underreading. BI-RADS 3 should not be used at screening - only at diagnostic evaluation. For implant patients, use implant-displaced (Eklund) views to maximize visualization.',
    },
    5: {
      level: 5,
      summary: 'Expert mammography practice requires systems-level implementation of screening programs, addressing disparities, interpreting evolving evidence, and engaging in shared decision-making that respects patient values.',
      explanation: `**Health Systems Implementation:**

*Improving Screening Rates:*
- Patient reminders (letter, phone, text)
- Provider reminders and EHR alerts
- Removal of barriers (scheduling, transportation)
- Same-day results and callbacks
- Patient navigation programs

*Quality Improvement:*
- Radiologist performance tracking
- Double reading (some settings)
- AI/CAD applications
- Peer review

**Disparities in Screening:**

*Documented Disparities:*
- Lower screening rates in Black, Hispanic, Asian women
- Lower rates in uninsured, underinsured
- Geographic variations
- Higher stage at diagnosis in underserved populations

*Contributing Factors:*
- Access barriers
- Trust and cultural factors
- Competing priorities
- Healthcare system factors

*Mitigation Strategies:*
- Community-based programs
- Mobile mammography
- Patient navigation
- Culturally tailored outreach
- Insurance expansion

**Evolving Evidence:**

*Artificial Intelligence:*
- CAD (computer-aided detection) established
- AI for detection and risk assessment emerging
- May supplement or replace second reader
- Regulatory considerations

*Biomarker-Based Risk:*
- Polygenic risk scores
- May refine screening recommendations
- Not yet standard practice

*Reducing Overdiagnosis:*
- Understanding DCIS natural history
- Active surveillance trials
- May change future treatment recommendations

**Shared Decision-Making:**

*Key Elements:*
- Present absolute numbers
- Discuss benefits AND harms
- Explore patient values
- Use decision aids when available
- Document discussion

*Common Patient Questions:*
- "Do I really need this every year?"
- "My mammogram was negative last year, why do I need another?"
- "My friend had cancer missed on mammogram"
- "I heard mammograms cause cancer"

*Communication Strategies:*
- Absolute risk reduction (not just relative)
- Visual aids
- Acknowledge uncertainty
- Respect preferences`,
      keyTerms: [
        { term: 'CAD', definition: 'Computer-aided detection; AI system that highlights potentially abnormal areas' },
        { term: 'polygenic risk score', definition: 'Combined effect of many genetic variants to estimate disease risk' },
        { term: 'DCIS', definition: 'Ductal carcinoma in situ; non-invasive breast cancer with uncertain natural history' },
        { term: 'decision aid', definition: 'Tool to help patients understand options and clarify preferences' },
      ],
      clinicalNotes: 'When guideline organizations disagree, present multiple perspectives and engage patient values. For women who decline screening, document discussion and offer to revisit. Consider providing written information for patients to review before visits.',
    },
  },

  media: [],
  citations: [
    {
      id: 'uspstf-mammography-2024',
      type: 'article',
      title: 'USPSTF Recommendation Statement: Breast Cancer Screening',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/',
      license: 'Public domain',
    },
    {
      id: 'acs-screening-2024',
      type: 'website',
      title: 'American Cancer Society Breast Cancer Screening Guidelines',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org/',
      license: 'Copyright ACS',
    },
  ],
  crossReferences: [
    { targetId: 'concept-breast-self-exam', targetType: 'concept', relationship: 'related', label: 'Breast Self-Exam' },
    { targetId: 'concept-breast-cancer-risk-factors', targetType: 'concept', relationship: 'related', label: 'Breast Cancer Risk Factors' },
    { targetId: 'concept-breast-conditions', targetType: 'concept', relationship: 'related', label: 'Breast Conditions' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['womens-health', 'patient-education', 'screening', 'breast-health', 'preventive-medicine'],
    keywords: ['mammogram', 'breast cancer screening', 'mammography', 'dense breasts'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
