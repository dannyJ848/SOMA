import { LegacyWomensHealthContent } from '../types';

export const breastSelfExam: LegacyWomensHealthContent = {
  id: 'concept-breast-self-exam',
  type: 'concept',
  name: 'Breast Self-Exam',
  alternateNames: ['BSE', 'Self breast examination', 'Breast awareness'],

  levels: {
    1: {
      level: 1,
      summary: 'Knowing how your breasts normally look and feel helps you notice any changes that might need to be checked by a doctor.',
      explanation: `**Why Know Your Breasts?**
Your breasts can change throughout the month and over time. Knowing what's normal for you helps you spot anything unusual.

**What to Look For:**
- A new lump or thickening
- Change in size or shape of breast
- Dimpling or puckering of skin
- Nipple that turns inward
- Nipple discharge (especially if bloody)
- Redness, scaling, or thickening of nipple or skin

**How to Check:**

*In the Mirror:*
- Look at your breasts with arms at sides, then raised
- Look for changes in shape, skin, or nipples

*Lying Down:*
- Place pillow under shoulder, arm behind head
- Use opposite hand with flat fingers
- Move in circles around entire breast
- Feel for lumps or thickening

*In the Shower:*
- Soapy skin makes it easier to feel
- Use same circular motion

**Important:**
- Many lumps are NOT cancer
- Normal breasts often feel lumpy
- If you find something new or different, see your doctor
- Breast self-exams don't replace mammograms`,
      keyTerms: [
        { term: 'lump', definition: 'A thickening or mass in the breast that feels different from surrounding tissue' },
        { term: 'nipple discharge', definition: 'Fluid coming from the nipple when not breastfeeding' },
        { term: 'breast awareness', definition: 'Knowing how your breasts normally look and feel' },
      ],
      analogies: ['Think of breast awareness like knowing the map of your own neighborhood - you\'ll notice if something new appears.'],
      examples: ['Noticing your breasts feel lumpier before your period (normal)', 'Finding a new hard lump that wasn\'t there before (should be checked)'],
    },
    2: {
      level: 2,
      summary: 'Breast self-awareness involves understanding normal breast changes and recognizing concerning findings that warrant clinical evaluation, complementing but not replacing screening mammography.',
      explanation: `**Current Recommendations:**
Major organizations (ACS, ACOG) emphasize breast "self-awareness" over formal monthly self-exams. The focus is on knowing your normal and reporting changes.

**Normal Breast Changes:**

*Menstrual Cycle:*
- Breasts may be more tender and lumpy before period
- Changes are usually bilateral (both sides)
- Resolve after period ends

*Pregnancy/Lactation:*
- Significant size and texture changes
- Engorgement, nodularity

*Menopause:*
- Less dense, more fatty tissue
- May become less lumpy

**What to Report:**

*Concerning Findings:*
- New discrete lump
- Unilateral changes
- Skin changes (dimpling, peau d'orange)
- Nipple changes (inversion, eczema-like changes)
- Bloody or spontaneous nipple discharge

*Breast Exam Technique:*
- Vertical strip or circular pattern
- Light, medium, and deep pressure
- Include axilla (armpit) and up to collarbone
- Both standing/sitting and lying down

**Clinical Evaluation:**
- History and clinical breast exam
- Imaging based on age and findings:
  - <30 years: Ultrasound first
  - ≥30 years: Diagnostic mammogram +/- ultrasound
- Biopsy if indicated

**Screening Mammography:**
- Remains primary screening tool
- BSE does not replace screening
- Discuss timing with provider based on risk`,
      keyTerms: [
        { term: 'peau d\'orange', definition: 'Orange peel-like skin texture that can indicate inflammatory breast cancer', pronunciation: 'poh-dor-AHNJ' },
        { term: 'axilla', definition: 'The armpit area, which contains lymph nodes related to breast drainage' },
        { term: 'clinical breast exam', definition: 'Physical examination of breasts by a healthcare provider' },
        { term: 'diagnostic mammogram', definition: 'Mammogram done to evaluate a specific symptom or finding' },
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical evaluation of breast complaints requires understanding the differential diagnosis of breast symptoms, appropriate imaging algorithm based on age, and indications for biopsy.',
      explanation: `**Breast Complaint Evaluation:**

*Breast Mass:*
- History: Duration, changes with cycle, associated symptoms
- Age is key factor in imaging approach
- Physical exam: Size, mobility, tenderness, skin changes

*Imaging Algorithm:*
- Age <30: Ultrasound first (dense breasts, radiation concerns)
- Age 30-39: Ultrasound +/- mammogram
- Age ≥40: Diagnostic mammogram first, then ultrasound

*BI-RADS Classification:*
- 0: Incomplete, needs additional imaging
- 1: Negative
- 2: Benign finding
- 3: Probably benign (<2% malignancy risk), short-term follow-up
- 4: Suspicious (4a, 4b, 4c subdivisions)
- 5: Highly suggestive of malignancy (>95%)
- 6: Known biopsy-proven malignancy

**Nipple Discharge:**

*Concerning Features:*
- Spontaneous (not provoked)
- Unilateral, single duct
- Bloody or clear/serous
- Associated with mass

*Non-Concerning:*
- Provoked (squeezed out)
- Bilateral, multiple ducts
- Milky, green, gray

*Evaluation:*
- Prolactin, TSH if galactorrhea
- Mammogram, ultrasound
- Possible ductogram or MRI

**Breast Pain (Mastalgia):**

*Cyclic:*
- Related to menstrual cycle
- Usually bilateral
- Resolves with cycle
- Rarely associated with cancer

*Non-Cyclic:*
- May be localized
- Could be musculoskeletal
- Evaluate focal findings

*Management:*
- Reassurance (most common)
- Well-fitted bra
- NSAIDs
- Evening primrose oil (limited evidence)`,
      keyTerms: [
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System; standardized classification for mammogram findings' },
        { term: 'galactorrhea', definition: 'Milky nipple discharge not associated with breastfeeding' },
        { term: 'mastalgia', definition: 'Breast pain, which may be cyclic or non-cyclic' },
        { term: 'ductogram', definition: 'Imaging of milk ducts using contrast dye to evaluate discharge' },
      ],
      clinicalNotes: 'Bloody nipple discharge requires evaluation even with negative imaging - may need ductoscopy or surgical excision. BI-RADS 3 requires 6-month follow-up. BI-RADS 4 and 5 require tissue diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced breast evaluation involves understanding biopsy techniques, management of high-risk lesions, correlation of imaging with pathology, and appropriate surveillance strategies.',
      explanation: `**Biopsy Techniques:**

*Core Needle Biopsy:*
- Image-guided (ultrasound or stereotactic)
- Preferred over FNA for solid masses
- Provides architecture for diagnosis
- Clip placement for subsequent localization

*Vacuum-Assisted Biopsy:*
- Larger sample, removes more tissue
- Used for calcifications, small lesions

*Excisional Biopsy:*
- When percutaneous biopsy not feasible
- Or for definitive diagnosis

**High-Risk Lesions:**

*Atypical Hyperplasia:*
- ADH (atypical ductal hyperplasia)
- ALH (atypical lobular hyperplasia)
- Increased future cancer risk
- May require surgical excision after core biopsy
- Consider risk-reducing medications

*LCIS:*
- Lobular carcinoma in situ
- Risk marker for both breasts
- Enhanced surveillance
- Risk-reducing options

*Radial Scar/Complex Sclerosing Lesion:*
- Often requires excision to rule out associated malignancy

**Imaging-Pathology Correlation:**

*Concordant:*
- Imaging findings explained by pathology
- Appropriate follow-up

*Discordant:*
- Pathology doesn't explain imaging
- May need repeat biopsy or excision

**Surveillance Strategies:**

*Average Risk:*
- Annual mammogram starting 40-50 (guidelines vary)

*Intermediate Risk (15-20% lifetime):*
- Strong family history
- Dense breasts
- History of chest radiation
- Consider MRI supplementation

*High Risk (>20% lifetime):*
- BRCA carriers, untested first-degree relatives
- Li-Fraumeni, Cowden syndrome
- Annual MRI + mammogram

**Risk Assessment Tools:**
- Gail model
- Tyrer-Cuzick model
- BRCAPRO`,
      keyTerms: [
        { term: 'stereotactic biopsy', definition: 'Mammogram-guided biopsy using coordinates for targeting calcifications' },
        { term: 'ADH', definition: 'Atypical ductal hyperplasia; high-risk lesion associated with increased cancer risk' },
        { term: 'LCIS', definition: 'Lobular carcinoma in situ; risk marker for invasive cancer in either breast' },
        { term: 'Tyrer-Cuzick model', definition: 'Risk assessment tool incorporating family history, hormonal factors, and breast density' },
      ],
      clinicalNotes: 'ADH on core biopsy has 15-30% upgrade rate to carcinoma on excision - surgical excision recommended. MRI supplemental screening has high sensitivity but also high false positive rate. Dense breasts significantly impact mammogram sensitivity.',
    },
    5: {
      level: 5,
      summary: 'Expert breast evaluation involves integrating evolving screening guidelines, managing uncertainty in risk stratification, coordinating multidisciplinary care, and implementing evidence-based approaches to screening and prevention.',
      explanation: `**Evolving Screening Guidelines:**

*Major Organizations:*
- ACS: Annual mammogram starting 45, option for 40; biennial at 55
- USPSTF: Biennial 50-74, individual decision 40-49
- ACOG: Offer mammography starting 40, no later than 50
- ACR: Annual mammography starting 40

*Key Controversies:*
- Starting age (40 vs. 45 vs. 50)
- Screening interval (annual vs. biennial)
- Stopping age
- Supplemental screening for dense breasts
- Overdiagnosis concerns

**Dense Breast Management:**

*Notification Laws:*
- Most states require dense breast notification
- Dense breasts: Reduced mammography sensitivity

*Supplemental Screening Options:*
- Tomosynthesis (3D mammography)
- Ultrasound (whole breast or automated)
- MRI (abbreviated protocol emerging)
- Contrast-enhanced mammography

*Evidence:*
- Supplemental screening increases cancer detection
- Also increases false positives
- Mortality benefit uncertain

**Genetic Testing Integration:**

*Panel Testing:*
- Beyond BRCA1/2
- ATM, CHEK2, PALB2, etc.
- Variable penetrance, management implications

*Counseling Complexity:*
- Variants of uncertain significance
- Moderate penetrance genes
- Family implications

**Risk Reduction:**

*Pharmacologic:*
- Tamoxifen, raloxifene (premenopausal, postmenopausal)
- Aromatase inhibitors (postmenopausal)
- 50% risk reduction

*Surgical:*
- Prophylactic mastectomy for very high risk
- Bilateral salpingo-oophorectomy for BRCA carriers

**Shared Decision-Making:**

*Patient Communication:*
- Absolute vs. relative risk
- False positive rates
- Overdiagnosis concept
- Personal values and preferences

*Tools:*
- Decision aids
- Visual risk communication
- Time to discuss

**Quality Improvement:**
- Screening rates as metric
- Recall rates, cancer detection rates
- Biopsy positive predictive value
- Accreditation standards`,
      keyTerms: [
        { term: 'tomosynthesis', definition: '3D mammography that reduces overlap and improves detection in dense breasts' },
        { term: 'overdiagnosis', definition: 'Detection of cancers that would never have caused symptoms or death' },
        { term: 'PALB2', definition: 'Partner and localizer of BRCA2; moderate-risk breast cancer susceptibility gene' },
        { term: 'abbreviated MRI', definition: 'Shorter MRI protocol for supplemental screening with reduced cost and time' },
      ],
      clinicalNotes: 'Have explicit conversations about screening recommendations, acknowledging guideline variability. For patients with moderate-risk genes (ATM, CHEK2), enhanced surveillance but not necessarily prophylactic surgery. Dense breast notification without clear follow-up plan can cause anxiety without benefit.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acs-breast-screening',
      type: 'website',
      title: 'American Cancer Society Guidelines for Breast Cancer Screening',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection.html',
      license: 'Copyright ACS',
    },
  ],
  crossReferences: [
    { targetId: 'concept-mammogram-guidelines', targetType: 'concept', relationship: 'related', label: 'Mammogram Guidelines' },
    { targetId: 'concept-breast-conditions', targetType: 'concept', relationship: 'related', label: 'Breast Conditions' },
    { targetId: 'concept-breast-cancer-risk-factors', targetType: 'concept', relationship: 'related', label: 'Breast Cancer Risk Factors' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['womens-health', 'patient-education', 'screening', 'breast-health'],
    keywords: ['breast self-exam', 'breast awareness', 'breast lump', 'screening'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
