/**
 * Mammogram Screening
 *
 * Comprehensive education on breast cancer screening mammography
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const MAMMOGRAM_SCREENING: EducationalContent = {
  id: 'concept-mammogram-screening',
  type: 'concept',
  name: 'Mammogram Screening',
  alternateNames: ['Breast cancer screening', 'Screening mammography', 'Breast X-ray'],

  levels: {
    1: {
      level: 1,
      summary: 'A mammogram is a special X-ray of the breast that can find breast cancer early, when it is small and easier to treat.',
      explanation: `A mammogram is like taking a picture of your breast using X-rays. It can find breast cancer very early - even before you or your doctor can feel a lump.

**Why Get a Mammogram?**
- Find breast cancer early when treatment works best
- Find cancers too small to feel
- Women who get regular mammograms are less likely to die from breast cancer
- Peace of mind

**What Happens During a Mammogram?**

1. You undress from the waist up and wear a gown
2. A technologist positions your breast on the machine
3. A plastic plate presses your breast flat (this may be uncomfortable but only lasts a few seconds)
4. X-ray pictures are taken
5. The process is repeated for the other breast
6. The whole test takes about 20 minutes

**When to Get a Mammogram:**
- Most women should start at age 40 or 50
- Get one every 1-2 years
- Your doctor will tell you what's right for you

**Tips for Your Mammogram:**
- Schedule after your period (breasts less tender)
- Don't wear deodorant or lotion (can show up on X-ray)
- Tell the technologist if anything hurts
- Bring prior mammogram images if from another facility

**Understanding Your Results:**
- Most mammograms are normal
- Sometimes they find something that needs a closer look (this is common and usually not cancer)
- Your doctor will explain your results and next steps

**Important:**
If you feel a lump or notice changes in your breast, tell your doctor right away - don't wait for your next scheduled mammogram.`,
      keyTerms: [
        { term: 'mammogram', definition: 'A special X-ray picture of the breast used to find cancer' },
        { term: 'screening', definition: 'Looking for a disease before you have symptoms' },
        { term: 'benign', definition: 'Not cancer; harmless' },
      ],
      analogies: [
        'A mammogram is like a security camera that can spot trouble early, before it becomes a big problem.',
        'Getting regular mammograms is like checking your smoke detectors - you hope they never find anything, but you are glad they are watching.',
      ],
      examples: [
        'A mammogram found a tiny cancer in Mary\'s breast that was too small to feel. Because it was found early, she only needed minor treatment and is now cancer-free.',
      ],
    },
    2: {
      level: 2,
      summary: 'Mammography is the primary screening tool for breast cancer, using low-dose X-rays to detect tumors before they become palpable, significantly reducing breast cancer mortality when performed at recommended intervals.',
      explanation: `Mammography uses low-dose X-rays to create images of breast tissue, allowing detection of cancers that are too small to feel. Regular screening mammograms have been proven to reduce breast cancer deaths.

**Types of Mammography:**

**Screening Mammography**
- For women with no symptoms
- Usually 2 views of each breast
- Performed on a regular schedule

**Diagnostic Mammography**
- For women with symptoms or abnormal screening results
- More views and closer examination
- May include additional imaging

**2D vs 3D Mammography:**
- **2D (Traditional)**: Standard flat images
- **3D (Tomosynthesis)**: Multiple images combined for 3D view
  - Better for dense breasts
  - Fewer false positives
  - Becoming standard at many facilities

**Who Should Get Screened?**

| Age Group | USPSTF Recommendation |
|-----------|----------------------|
| 40-49 | Individual decision with doctor |
| 50-74 | Every 2 years (recommended) |
| 75+ | Evidence unclear, discuss with doctor |

**Higher Risk Women May Need:**
- Earlier start (before age 40)
- More frequent screening (annually)
- Additional MRI screening

**Risk Factors for Breast Cancer:**
- Family history (especially mother, sister, daughter)
- BRCA1 or BRCA2 gene mutations
- Previous breast biopsy showing atypical cells
- Radiation therapy to chest before age 30
- Dense breast tissue

**What Can a Mammogram Find?**
- **Masses**: May be benign (not cancer) or malignant (cancer)
- **Calcifications**: Tiny calcium deposits, usually benign
- **Architectural distortion**: Changes in breast tissue pattern
- **Asymmetries**: Differences between breasts

**Understanding Results (BI-RADS Categories):**
- **0**: Need more images
- **1**: Negative (normal)
- **2**: Benign finding
- **3**: Probably benign (short-term follow-up)
- **4**: Suspicious (biopsy recommended)
- **5**: Highly suggestive of cancer
- **6**: Known cancer

**Potential Downsides:**
- False positives: About 10% of women are called back for more tests
- Overdiagnosis: Some cancers found would never cause harm
- Radiation exposure: Very small, benefits outweigh risks
- Discomfort during compression`,
      keyTerms: [
        { term: 'tomosynthesis', definition: '3D mammography that takes multiple X-ray images to create a three-dimensional picture', pronunciation: 'toh-moh-SIN-thuh-sis' },
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System; standardized way to report mammogram results', pronunciation: 'by-radz' },
        { term: 'false positive', definition: 'An abnormal result that turns out not to be cancer after further testing' },
        { term: 'calcifications', definition: 'Small deposits of calcium in the breast, often benign but sometimes indicating cancer' },
      ],
      analogies: [
        'BI-RADS categories are like grades on a suspicion scale, from 1 (no worries) to 5 (very concerning).',
      ],
    },
    3: {
      level: 3,
      summary: 'Screening mammography utilizes low-dose X-ray imaging with standardized positioning and interpretation (BI-RADS) to detect breast malignancies, with digital breast tomosynthesis improving performance in dense tissue, while balancing detection benefits against false-positive rates and potential overdiagnosis.',
      explanation: `**Technical Aspects of Mammography:**

**Image Acquisition:**
- Standard views: Craniocaudal (CC) and Mediolateral Oblique (MLO)
- Compression: 25-30 lbs of force
  - Reduces radiation dose
  - Separates overlapping tissue
  - Reduces motion blur
  - Improves image quality

**Digital Mammography:**
- Full-field digital mammography (FFDM) standard since 2000s
- Advantages over film:
  - Wider dynamic range
  - Post-processing capabilities
  - Electronic storage and transmission
  - Computer-aided detection (CAD)

**Digital Breast Tomosynthesis (DBT):**
- Multiple low-dose projections acquired in arc
- 3D reconstruction from multiple angles
- Reduces tissue overlap
- Improves cancer detection, especially in dense breasts
- Reduces false-positive recall rates by 15-40%

**Breast Density:**

*BI-RADS Density Categories:*
- A: Almost entirely fatty (10% of women)
- B: Scattered fibroglandular densities (40%)
- C: Heterogeneously dense (40%)
- D: Extremely dense (10%)

*Clinical Implications:*
- Dense tissue (C/D) masks cancers (lower sensitivity)
- Dense tissue independently increases cancer risk
- Many states require density notification
- Supplemental screening (US, MRI) may be indicated

**USPSTF 2024 Updated Recommendations:**

| Recommendation | Grade | Population |
|----------------|-------|------------|
| Screen every 2 years, ages 40-74 | B | Average-risk women |
| Earlier start, more frequent for high risk | Clinical practice | BRCA, family history |
| Insufficient evidence for DBT vs FFDM | I | All women |
| Insufficient evidence for supplemental screening in dense breasts | I | Dense breasts |

**Performance Metrics:**

*Sensitivity:* 77-95% (lower in dense breasts)
*Specificity:* 90-95%
*Positive Predictive Value (PPV):* 3-8% for screening, 20-40% for biopsy

**Cancer Detection Rate:**
- Approximately 5 per 1,000 screening mammograms
- Higher in older women, first screens, and those with risk factors

**Interval Cancers:**
- Cancers diagnosed between screening rounds
- More common in dense breasts, younger women
- Often more aggressive biology

**Screening Intervals:**

*Annual vs Biennial:*
- Annual: More cancers detected, more false positives
- Biennial: Fewer callbacks, may miss faster-growing tumors
- USPSTF recommends biennial; other organizations recommend annual

**Risk-Based Screening Approaches:**

*High-Risk Criteria for MRI:*
- BRCA mutation carrier
- First-degree relative of BRCA carrier (untested)
- Lifetime risk ≥20-25% by risk models
- Prior chest radiation ages 10-30

*Risk Assessment Tools:*
- Gail Model: Age, reproductive factors, family history
- Tyrer-Cuzick (IBIS): Includes hormones, breast density
- BRCAPRO: BRCA mutation probability`,
      keyTerms: [
        { term: 'digital breast tomosynthesis (DBT)', definition: '3D mammography technology that acquires multiple projections to create slice-by-slice images of the breast' },
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System; standardized lexicon and reporting system for mammography' },
        { term: 'breast density', definition: 'Ratio of fibroglandular tissue to fatty tissue in the breast, affecting both cancer risk and mammographic sensitivity' },
        { term: 'CAD', definition: 'Computer-aided detection; software that identifies potentially abnormal areas for radiologist review' },
        { term: 'interval cancer', definition: 'Cancer diagnosed between regular screening examinations' },
      ],
      clinicalNotes: 'Always assess breast cancer risk using a validated tool (Gail, Tyrer-Cuzick). Document density notification discussions. Consider supplemental screening referral for extremely dense breasts or elevated risk.',
    },
    4: {
      level: 4,
      summary: 'Modern mammographic screening integrates advanced imaging technologies (DBT, contrast-enhanced, AI-assisted interpretation), risk stratification models, and personalized protocols while critically evaluating population-level efficacy data, overdiagnosis estimates, and the complex balance of benefits versus harms across diverse patient populations.',
      explanation: `**Advanced Imaging Modalities:**

**Digital Breast Tomosynthesis (DBT):**
*Technical Parameters:*
- Tube arc: 15-50 degrees depending on manufacturer
- Number of projections: 9-25
- Reconstruction: Filtered back-projection or iterative
- Slice thickness: 0.5-1.0 mm
- Dose: ~1.2-1.5x FFDM (with synthetic 2D: ~same)

*Evidence Base:*
- STORM trial: +2.7 cancers per 1,000 screens, -17% recall rate
- TOMMY trial: Improved cancer detection in all density categories
- Prospective studies show 20-50% reduction in recall rates

**Contrast-Enhanced Mammography (CEM):**
- Dual-energy acquisition after iodine contrast injection
- Combines morphology with enhancement patterns
- May approach MRI sensitivity in high-risk screening
- Lower cost and faster than MRI
- Role: Alternative to MRI when MRI contraindicated or unavailable

**Artificial Intelligence in Mammography:**

*Current Applications:*
- Triage: Prioritize worklist, pre-screen normals
- Detection: Mark suspicious areas
- Risk assessment: Breast density, future cancer prediction
- Quality assurance: Positioning, compression

*FDA-Approved Systems:*
- Multiple vendors (iCAD, Hologic, GE, etc.)
- Validation studies show non-inferior or superior performance
- Debate: AI-assisted vs AI-standalone interpretation

*Implementation Considerations:*
- Workflow integration
- Liability questions
- Radiologist deskilling concerns
- Cost-effectiveness pending

**Overdiagnosis in Breast Cancer Screening:**

*Estimates Vary Widely:*
- RCTs: 1-10%
- Observational studies: 20-50%
- True rate likely 10-30%

*Why the Variation?*
- Different methodologies
- Lead time adjustments
- Background incidence assumptions
- Study population differences

*Contributing Factors:*
- Detection of DCIS (may never progress)
- Slow-growing invasive cancers
- Competing mortality

*Clinical Implications:*
- Some detected cancers would never cause symptoms
- Current inability to distinguish indolent from aggressive
- Leads to overtreatment
- Active surveillance for low-risk DCIS under investigation

**Evidence for Mortality Reduction:**

*Randomized Controlled Trials:*
- Swedish Two-County: 31% mortality reduction ages 40-74
- Meta-analyses: ~20% relative risk reduction
- Absolute benefit: 1-3 fewer deaths per 1,000 women screened over 10 years

*Modern Challenges to RCT Data:*
- Trials conducted 1970s-1980s
- Treatment advances may reduce screening benefit
- Therapy improvements narrow early detection advantage

*Ecological and Observational Studies:*
- Mixed results on population-level mortality trends
- Confounded by treatment improvements
- Stage migration evident

**Personalized Screening Strategies:**

*Risk-Stratified Approaches:*
- Baseline risk assessment at age 25-30
- Genetic testing for high-risk families
- Density-based protocols
- Personal history integration

*Emerging Models:*
- AI-based risk from mammogram images
- Polygenic risk scores (313-SNP)
- Combined clinical + genetic + imaging risk

**Special Populations:**

*BRCA Carriers:*
- Annual MRI + mammogram from age 25-30
- Consider risk-reducing mastectomy discussion
- Annual clinical breast exam

*Dense Breasts:*
- Supplemental screening options:
  - Whole-breast ultrasound: +2-4 cancers/1,000, high false-positive
  - Abbreviated MRI: Promising, under study
  - Contrast-enhanced mammography: Emerging role

*Prior Chest Radiation:*
- Start screening 8 years after radiation or age 25 (whichever later)
- Annual mammogram + MRI recommended`,
      keyTerms: [
        { term: 'contrast-enhanced mammography (CEM)', definition: 'Mammographic technique using iodinated contrast and dual-energy acquisition to visualize enhancing masses' },
        { term: 'synthetic 2D mammography', definition: '2D images generated from tomosynthesis data, eliminating need for separate 2D acquisition' },
        { term: 'DCIS', definition: 'Ductal carcinoma in situ; non-invasive breast cancer confined to milk ducts', pronunciation: 'D-C-I-S' },
        { term: 'abbreviated MRI', definition: 'Shortened MRI protocol focusing on early enhancement, reducing scan time while maintaining sensitivity' },
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic predisposition based on multiple common genetic variants' },
      ],
      clinicalNotes: 'Dense breast notification is mandated in most states. Discuss limitations of mammography in dense tissue and supplemental options. For very high-risk patients (>20-25% lifetime risk), recommend MRI in addition to mammography.',
    },
    5: {
      level: 5,
      summary: 'Contemporary breast cancer screening optimization requires integration of multimodal imaging approaches, validated risk stratification algorithms, AI-enhanced detection systems, and evolving understanding of tumor biology to achieve precision prevention while navigating health system capacity constraints, equity considerations, and the fundamental tension between sensitivity and overdiagnosis.',
      explanation: `**Precision Breast Cancer Screening:**

**Multi-Modal Risk Assessment:**

*Integrated Risk Prediction:*
1. Clinical factors (Gail, Tyrer-Cuzick models)
2. Genetic testing (BRCA1/2, PALB2, CHEK2, ATM)
3. Polygenic risk scores (PRS)
4. Mammographic features (density, parenchymal patterns)
5. AI-derived imaging biomarkers

*Tyrer-Cuzick v8.0 Model Factors:*
- Age at menarche and first live birth
- Menopause age and HRT use
- BMI, height
- Family history (first and second degree)
- Breast biopsies (especially atypical hyperplasia, LCIS)
- Breast density (BI-RADS)
- BRCA status

*Risk Thresholds:*
- Population average: ~12% lifetime risk
- Moderate risk: 15-20%
- High risk: >20%
- BRCA1 carrier: ~70% lifetime risk
- BRCA2 carrier: ~45-70% lifetime risk

**Advanced Imaging Protocols:**

*For High-Risk Patients (>20% lifetime risk):*
- Annual mammography + MRI, typically alternating every 6 months
- Start at age 25-30 for BRCA carriers
- Consider risk-reducing surgery discussion

*For Dense Breasts (BI-RADS C/D):*
- Supplemental screening options being evaluated
- DENSE trial: MRI detected 2.5 additional cancers per 1,000 in extremely dense breasts
- ASTOUND trial: Supplemental US detects additional cancers but high false-positive rate
- Abbreviated MRI (AB-MRI): 3-minute protocol, promising results

*Contrast-Enhanced Mammography (CEM):*
- May be cost-effective alternative to MRI
- Sensitivity approaching MRI in some studies
- Particularly useful when MRI contraindicated

**Artificial Intelligence Integration:**

*Current Evidence:*
- Retrospective studies show AI equivalent to or exceeding radiologist performance
- PERFORMS study: AI + radiologist superior to either alone
- MASAI trial: AI-supported screening non-inferior to standard double reading

*Implementation Models:*
1. AI triage (pre-screening to exclude obvious normals)
2. AI as second reader (replacing double reading)
3. AI-assisted single reading
4. Fully autonomous AI (future, regulatory dependent)

*Breast Cancer Risk Prediction from Mammograms:*
- Deep learning models predict 5-year risk from images alone
- Mirai model: Combines imaging + clinical factors
- May enable personalized screening intervals

**Genomic and Liquid Biopsy Frontiers:**

*Circulating Tumor DNA (ctDNA):*
- Potential for early detection
- STRIVE study: GRAIL methylation test for breast cancer
- Currently lower sensitivity for early-stage breast cancer than mammography
- May have role in surveillance after treatment

*Germline Testing Expansion:*
- Population-based BRCA testing under debate
- UK study found 2% of unselected population carried pathogenic variants
- Cost-effectiveness modeling ongoing

**Health Equity in Screening:**

*Disparities:*
- Black women: Lower screening rates, higher mortality
- Hispanic/Latina women: Lower screening adherence
- Uninsured/underinsured: Access barriers
- Rural populations: Facility access issues

*Interventions:*
- Mobile mammography units
- Patient navigation programs
- Culturally tailored outreach
- Community health worker engagement
- Addressing medical mistrust

*Policy Considerations:*
- Medicaid coverage mandates
- ACA preventive services requirements
- Quality incentive programs

**Overdiagnosis and De-escalation:**

*Active Surveillance for DCIS:*
- LORIS, LORD, COMET trials ongoing
- Identify low-risk DCIS for observation
- Avoid overtreatment of indolent disease

*Risk-Adapted Treatment:*
- 21-gene assay (Oncotype DX) for recurrence risk
- 70-gene assay (MammaPrint) for adjuvant chemotherapy decision
- De-escalation of surgery (lumpectomy, sentinel node only)

**Quality Assurance Framework:**

*MQSA Requirements:*
- Mammography Quality Standards Act (federal regulation)
- Annual physicist survey
- Technologist certification
- Interpreting physician qualifications
- Quality assurance programs

*Performance Benchmarks:*

| Metric | Desirable | Acceptable |
|--------|-----------|------------|
| Cancer detection rate | >4/1,000 | >2.5/1,000 |
| Recall rate | <10% | <12% |
| PPV for biopsy | >25% | >20% |
| Sensitivity | >75% | >70% |

**Shared Decision-Making Framework:**

*For Ages 40-49 (USPSTF Grade B now, previously C):*
- Discuss individual risk factors
- Explain benefits (cancer detection) and harms (false positives, overdiagnosis)
- Use absolute numbers (per 1,000 women)
- Respect patient values and preferences
- Document discussion

*Decision Aids:*
- Visual displays of absolute risk
- Icon arrays for benefit/harm communication
- Interactive online tools

**Future Directions:**

1. Risk-stratified screening intervals
2. AI-personalized protocols
3. Multi-cancer early detection integration
4. Liquid biopsy for surveillance
5. Chemoprevention for high-risk identification
6. De-escalation trials for low-risk cancers`,
      keyTerms: [
        { term: 'MQSA', definition: 'Mammography Quality Standards Act; federal law establishing quality standards for mammography facilities' },
        { term: 'Mirai', definition: 'AI model that predicts breast cancer risk from mammograms and clinical data' },
        { term: 'LORIS/LORD/COMET', definition: 'Clinical trials evaluating active surveillance versus treatment for low-risk DCIS' },
        { term: 'abbreviated MRI (AB-MRI)', definition: 'Shortened breast MRI protocol (typically 3 minutes) designed for screening high-risk or dense breast populations' },
        { term: 'icon array', definition: 'Visual representation using pictographs to communicate risk statistics to patients' },
      ],
      clinicalNotes: `**Clinical Implementation:**
- Integrate risk assessment at age 25-30; update at significant life events
- Document dense breast discussions and supplemental imaging decisions
- Use shared decision-making aids for 40-49 age group
- Track facility quality metrics and benchmark against national standards
- Stay current with evolving AI integration guidelines
- Address barriers: patient navigation, reminder systems, same-day results
- Consider AB-MRI or CEM for dense breasts when MRI access limited
- Genetic counseling referral for high-risk family history or breast cancer diagnosis at <50 years`,
    },
  },

  media: [
    {
      id: 'mammogram-positioning',
      type: 'diagram',
      filename: 'mammogram-standard-views.svg',
      title: 'Standard Mammographic Views',
      description: 'Illustration of CC and MLO positioning for mammography',
    },
    {
      id: 'bi-rads-categories',
      type: 'diagram',
      filename: 'bi-rads-categories.svg',
      title: 'BI-RADS Assessment Categories',
      description: 'Visual guide to BI-RADS 0-6 categories and recommended actions',
    },
  ],

  citations: [
    {
      id: 'uspstf-breast-2024',
      type: 'article',
      title: 'Screening for Breast Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
      accessedDate: '2025-01-24',
    },
    {
      id: 'acr-mammography',
      type: 'website',
      title: 'ACR Appropriateness Criteria: Breast Cancer Screening',
      source: 'American College of Radiology',
      url: 'https://acsearch.acr.org/docs/70910/Narrative/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Screening Overview' },
    { targetId: 'concept-breast-anatomy', targetType: 'structure', relationship: 'related', label: 'Breast Anatomy' },
    { targetId: 'concept-brca-testing', targetType: 'concept', relationship: 'related', label: 'BRCA Genetic Testing' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['preventive medicine', 'oncology', 'screening', 'radiology'],
    keywords: ['mammogram', 'breast cancer', 'screening', 'tomosynthesis', 'BI-RADS', 'dense breasts'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine', 'obstetrics and gynecology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
