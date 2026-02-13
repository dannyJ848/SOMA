/**
 * Breast Cancer Screening
 *
 * Comprehensive coverage of breast cancer screening including
 * mammography, risk assessment, and screening guidelines.
 */

import { EducationalContent } from '../../../types';

export const breastCancerScreeningContent: EducationalContent = {
  id: 'obgyn-screening-breast-cancer',
  type: 'topic',
  name: 'Breast Cancer Screening',
  alternateNames: ['Mammography Screening', 'Breast Screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Breast cancer screening uses mammograms to find cancer early when it is most treatable.',
      explanation: `Breast cancer screening helps find breast cancer before you have any symptoms.

**Why screening matters:**
- Finds cancer when it's small
- Early detection saves lives
- Treatment is more effective when cancer is caught early

**Main screening test: Mammogram**
- X-ray of the breast
- Takes only a few minutes
- May be uncomfortable but should not be very painful
- 3D mammography (tomosynthesis) is now available

**When to start screening:**
- Different guidelines have different recommendations
- Most agree on regular screening starting by age 50
- Some recommend starting at 40
- Talk to your doctor about what's right for you

**What about breast self-exams?**
- Being familiar with your breasts is good
- Report any changes to your doctor
- Formal monthly self-exams are no longer recommended

**Higher risk women:**
- May need to start screening earlier
- May need additional tests (MRI)
- Talk to your doctor about your risk`,
      keyTerms: [
        { term: 'mammogram', definition: 'An X-ray picture of the breast used to look for cancer' },
        { term: 'screening', definition: 'Testing for disease before symptoms appear' },
        { term: 'benign', definition: 'Not cancer; not harmful' },
      ],
      analogies: [
        'Mammography screening is like regularly checking smoke detectors - it helps catch problems early before they become dangerous.',
      ],
      examples: [
        'A 50-year-old woman with no symptoms has a routine mammogram that finds a small cancer that is easily treated.',
      ],
    },
    2: {
      level: 2,
      summary: 'Breast cancer screening recommendations vary by organization, with mammography as the primary modality and supplemental screening for high-risk women.',
      explanation: `**Screening Guidelines Comparison:**

| Organization | Start Age | Frequency | Stop Age |
|--------------|-----------|-----------|----------|
| USPSTF (2024) | 40 | Every 2 years | 74 |
| ACS | 40-44: option; 45-54: annual; 55+: 1-2 years | 45 recommended | Life expectancy >10 yr |
| ACOG | 40 | Annual or biennial | Shared decision |
| ACR | 40 | Annual | Until life expectancy limited |

**Mammography Types:**

*2D Digital Mammography:*
- Standard screening tool
- Two views each breast (CC, MLO)
- Interpreted by radiologist

*3D Tomosynthesis (DBT):*
- Multiple thin slice images
- Reduces false positives
- Better for dense breasts
- Increasingly standard

**Breast Density:**

*Categories (BI-RADS):*
- A: Almost entirely fatty
- B: Scattered fibroglandular densities
- C: Heterogeneously dense
- D: Extremely dense

*Clinical Significance:*
- Dense breasts mask cancer (reduced sensitivity)
- Dense breasts increase cancer risk
- Many states require density notification
- May benefit from supplemental screening

**High-Risk Screening:**

*Who is high risk:*
- BRCA1/2 mutation carriers
- Lifetime risk >20%
- Prior chest radiation (age 10-30)
- Li-Fraumeni, Cowden syndrome

*High-risk protocol:*
- Annual mammography starting at 30
- Annual breast MRI
- Staggered every 6 months

**Risk Assessment:**
- Family history
- Personal history
- Genetic factors
- Density
- Use validated models (Tyrer-Cuzick, Gail)`,
      keyTerms: [
        { term: 'tomosynthesis', definition: '3D mammography that takes multiple images for better detection' },
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System; standardized reporting' },
        { term: 'breast density', definition: 'Amount of fibrous and glandular tissue relative to fat in breast' },
      ],
    },
    3: {
      level: 3,
      summary: 'Optimal breast cancer screening requires individualized risk assessment, understanding of mammography performance characteristics, and appropriate use of supplemental imaging for high-risk women.',
      explanation: `**Mammography Performance:**

*Sensitivity:*
- Overall: 75-90%
- Dense breasts: 50-70%
- Fatty breasts: 85-95%

*Specificity:*
- Overall: 90-95%
- False positives decrease with experience/DBT

*Screening Outcomes:*
- Per 1000 women screened (age 50-59):
  - ~100 recalled for additional imaging
  - ~20 biopsied
  - ~5 cancers detected

**BI-RADS Assessment Categories:**

| Category | Assessment | Action |
|----------|------------|--------|
| 0 | Incomplete | Additional imaging |
| 1 | Negative | Routine screening |
| 2 | Benign | Routine screening |
| 3 | Probably benign | Short-interval follow-up |
| 4 | Suspicious | Biopsy |
| 5 | Highly suspicious | Biopsy |
| 6 | Known cancer | Appropriate treatment |

**Risk Assessment Models:**

*Gail Model:*
- Age, menarche, first birth
- Family history (first degree)
- Prior biopsies
- Calculates 5-year and lifetime risk
- Limitations: Does not include second-degree relatives

*Tyrer-Cuzick (IBIS):*
- More comprehensive family history
- BRCA probability
- Density
- More accurate for high-risk estimation

*When to Refer for Genetics:*
- Lifetime risk >20%
- Strong family history
- Ashkenazi Jewish heritage
- Personal history breast cancer <50
- Triple-negative breast cancer

**Supplemental Screening:**

*Breast MRI:*
- Very high sensitivity (>95%)
- Lower specificity (more false positives)
- For high-risk women
- Alternating with mammography

*Whole-Breast Ultrasound:*
- For dense breasts when MRI not available
- Adds cancer detection
- High false positive rate

*Contrast-Enhanced Mammography:*
- Emerging modality
- May approach MRI sensitivity
- More accessible than MRI`,
      keyTerms: [
        { term: 'Gail model', definition: 'Risk assessment tool calculating breast cancer risk based on several factors' },
        { term: 'Tyrer-Cuzick', definition: 'More comprehensive risk model including extended family history' },
        { term: 'contrast-enhanced mammography', definition: 'Mammography with IV contrast to improve cancer detection' },
      ],
      clinicalNotes: 'Breast density is both a masking factor (reduces mammography sensitivity) and an independent risk factor. Women with dense breasts should be counseled about both aspects and the potential role of supplemental screening.',
    },
    4: {
      level: 4,
      summary: 'Evidence-based breast cancer screening balances benefits (mortality reduction) against harms (false positives, overdiagnosis), with personalized approaches emerging based on individual risk.',
      explanation: `**Screening Benefits:**

*Mortality Reduction:*
- ~20% relative reduction in breast cancer mortality
- Absolute benefit depends on baseline risk
- Ages 50-69: Best evidence
- Ages 40-49: Smaller benefit, more harms

*Quantifying Benefit (per 1000 women screened 10 years):*
- Ages 40-49: 1-2 deaths prevented
- Ages 50-59: 3-4 deaths prevented
- Ages 60-69: 4-5 deaths prevented

**Screening Harms:**

*False Positives:*
- Recall for additional imaging
- Unnecessary biopsies
- Anxiety
- Cumulative risk over 10 years: 50-60%

*Overdiagnosis:*
- Detection of cancers that would never cause harm
- Estimated 10-20% of screen-detected cancers
- Leads to unnecessary treatment
- DCIS particularly affected

*Other Harms:*
- Radiation exposure (minimal)
- Pain from mammography
- Cost

**Risk-Based Screening:**

*Concept:*
- Tailor screening intensity to risk level
- High-risk: More frequent, supplemental imaging
- Average-risk: Standard protocols
- Low-risk: May screen less frequently

*Implementation:*
- Risk assessment at age 30
- Calculate lifetime risk
- Genetic referral if indicated
- Personalized screening plan

**Dense Breast Considerations:**

*Supplemental Screening Options:*
- Whole-breast ultrasound
- Abbreviated MRI
- Contrast-enhanced mammography
- Molecular breast imaging

*Evidence:*
- Additional cancers found (2-4 per 1000)
- High false positive rates
- Impact on mortality unknown
- Shared decision-making essential

**Special Populations:**

*Older Women:*
- Life expectancy consideration
- Comorbidities
- Shared decision to continue/stop
- No upper age limit per se

*Prior Breast Cancer:*
- Annual mammography
- Not high-risk MRI unless genetic
- Surveillance of both breasts

*Post-Augmentation:*
- Mammography still indicated
- Implant-displaced views
- May need additional imaging`,
      keyTerms: [
        { term: 'overdiagnosis', definition: 'Detection of disease that would never cause symptoms or death' },
        { term: 'abbreviated MRI', definition: 'Shortened MRI protocol for screening; faster, less expensive' },
        { term: 'molecular breast imaging', definition: 'Nuclear medicine technique for dense breast screening' },
      ],
      clinicalNotes: 'The 2024 USPSTF update lowered the starting age to 40 based on modeling showing benefits outweigh harms. However, the harms-benefits balance varies by age and risk, supporting shared decision-making.',
    },
    5: {
      level: 5,
      summary: 'The future of breast cancer screening involves AI-assisted interpretation, risk-stratified protocols, liquid biopsy integration, and addressing disparities in screening access and outcomes.',
      explanation: `**Artificial Intelligence:**

*Current Applications:*
- CAD (computer-aided detection) - established
- AI for mammogram interpretation
- Risk prediction from imaging
- Workflow optimization

*Performance:*
- AI matches or exceeds average radiologists
- Potential to reduce workload
- May improve consistency
- Second-reader applications

*Future:*
- Autonomous interpretation
- Integration with clinical data
- Real-time risk assessment
- Personalized protocols

**Emerging Technologies:**

*Blood-Based Biomarkers:*
- Circulating tumor cells
- Cell-free DNA
- Protein markers
- Multi-cancer early detection tests

*Multi-Cancer Early Detection (MCED):*
- GRAIL Galleri test
- Detects multiple cancers
- Breast cancer one of many
- Complementary to mammography

**Risk-Stratified Screening:**

*WISDOM Trial:*
- Comparing risk-based vs. annual screening
- Personalized based on risk factors
- May reduce overdiagnosis
- Improve efficiency

*MyPeBS Trial (Europe):*
- Similar risk-stratified approach
- Multi-country
- Results pending

**Disparities:**

*Known Gaps:*
- Black women: Higher mortality despite similar incidence
- Lower screening rates in uninsured
- Rural access challenges
- Immigrant populations

*Contributing Factors:*
- Screening access
- Follow-up of abnormals
- Treatment differences
- Tumor biology differences

*Addressing Disparities:*
- Mobile mammography
- Patient navigation
- Community health workers
- Extended hours
- Cultural competency

**Quality Metrics:**

*Facility Level:*
- Cancer detection rate
- Recall rate
- Positive predictive value
- Stage at diagnosis

*System Level:*
- Screening rates
- Follow-up rates
- Time to diagnosis
- Mortality rates

**Shared Decision-Making:**

*Components:*
- Individual risk assessment
- Benefits of screening
- Harms of screening
- Patient values and preferences
- Shared plan

*Decision Aids:*
- Visual representations
- Risk communication
- Written materials
- Repeat discussions`,
      keyTerms: [
        { term: 'MCED', definition: 'Multi-Cancer Early Detection tests; blood tests to detect multiple cancer types' },
        { term: 'WISDOM trial', definition: 'Study comparing risk-based versus standard breast cancer screening' },
        { term: 'patient navigation', definition: 'Programs helping patients access and complete screening and follow-up' },
      ],
      clinicalNotes: 'AI in mammography interpretation is rapidly advancing and may transform practice. Risk-stratified screening is being studied and may become standard. Addressing disparities remains critical - we must ensure advances benefit all women.',
    },
  },

  media: [
    {
      id: 'mammography-technique',
      type: 'diagram',
      filename: 'mammography-views.svg',
      title: 'Mammography Views',
      description: 'Standard mammography positioning and views',
    },
  ],

  citations: [
    {
      id: 'uspstf-breast',
      type: 'article',
      title: 'Screening for Breast Cancer: US Preventive Services Task Force Recommendation Statement',
      source: 'JAMA',
      authors: ['US Preventive Services Task Force'],
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-conditions-breast-cancer', targetType: 'condition', relationship: 'related', label: 'Breast Cancer' },
    { targetId: 'obgyn-genetic-testing', targetType: 'topic', relationship: 'related', label: 'Genetic Testing' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['screening', 'breast cancer', 'mammography'],
    keywords: ['mammography', 'breast screening', 'breast cancer', 'BRCA'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
