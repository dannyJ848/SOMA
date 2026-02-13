import { EducationalContent } from '../../../types';

export const breastScreeningContent: EducationalContent = {
  id: 'reproductive-breast-screening',
  type: 'topic',
  name: 'Breast Screening',
  alternateNames: ['Breast cancer screening', 'Mammography screening', 'Breast examination'],
  levels: {
    1: {
      level: 1,
      summary: 'Breast screening helps find breast cancer early when it is easiest to treat. Mammograms are special X-rays of the breast that can detect cancer before you can feel it.',
      explanation: `Breast screening means checking your breasts for cancer before you have any symptoms. Finding cancer early can save lives.

**Why Screening Matters:**
- Breast cancer found early is much easier to treat
- Screening can find cancer before you notice any changes
- Early detection often means less treatment is needed
- Survival rates are higher when cancer is caught early

**Types of Screening:**

**Mammogram (Most Important)**
- A special X-ray of your breast
- The breast is pressed between two plates (this may be uncomfortable but only lasts a few seconds)
- Can find lumps too small to feel
- Recommended regularly for women over 40-50

**Breast Self-Awareness**
- Know how your breasts normally look and feel
- Notice any changes and report them to your doctor
- Not the same as a structured self-exam, but staying aware is helpful

**Clinical Breast Exam**
- A healthcare provider examines your breasts
- Done during regular check-ups

**When to Get Screened:**
- Talk to your doctor about when to start
- Generally, mammograms are recommended starting between ages 40-50
- People with higher risk may start earlier
- Screening continues through at least age 74

**What to Expect During a Mammogram:**
1. You'll undress from the waist up
2. Your breast is placed on a flat surface
3. A plastic plate presses down briefly to spread the tissue
4. X-ray images are taken from different angles
5. The whole process takes about 20 minutes`,
      keyTerms: [
        { term: 'Mammogram', definition: 'A special X-ray picture of the breast used to look for cancer' },
        { term: 'Screening', definition: 'Testing for a disease before symptoms appear' },
        { term: 'Early detection', definition: 'Finding cancer at an early stage when treatment works best' },
        { term: 'Benign', definition: 'Not cancer; not harmful' },
      ],
      analogies: [
        'Screening is like getting your car inspected - it finds problems before they become serious',
        'A mammogram is like looking through a window into your breast tissue',
      ],
      patientCounselingPoints: [
        'Mammograms can save lives by finding cancer early',
        'The discomfort is brief and the benefits are significant',
        'Talk to your doctor about when to start screening',
        'Being called back for more images is common and usually not cancer',
      ],
    },
    2: {
      level: 2,
      summary: 'Breast cancer screening primarily uses mammography, with recommendations varying by age and risk level. Additional modalities like ultrasound and MRI supplement screening in certain populations.',
      explanation: `Breast cancer screening aims to detect cancer at earlier, more treatable stages. Evidence supports screening mammography for reducing breast cancer mortality.

**Screening Modalities:**

**Mammography**
- Uses low-dose X-rays to image breast tissue
- **2D (Conventional)**: Standard imaging
- **3D (Tomosynthesis)**: Multiple images create "slices"; improves detection, especially in dense breasts
- Detects: Masses, calcifications, architectural distortion

**Breast MRI**
- Uses magnetic fields and contrast dye
- Most sensitive for detecting cancer
- Reserved for high-risk women (costly, more false positives)
- Better in dense breast tissue

**Ultrasound**
- Uses sound waves
- Useful for evaluating masses seen on mammogram
- Supplemental screening in dense breasts
- Distinguishes solid masses from cysts

**Clinical Breast Examination (CBE)**
- Physical examination by healthcare provider
- Variable sensitivity; depends on examiner skill
- Not proven to reduce mortality when mammography available

**Screening Recommendations (Average Risk Women):**

| Organization | Start Age | Frequency | Stop Age |
|--------------|-----------|-----------|----------|
| USPSTF | 40 | Every 2 years | 74 |
| ACS | 40 (option); 45 (recommend) | Annual 45-54; every 1-2 years after | Continue if healthy |
| ACR | 40 | Annual | Continue if healthy |

**High-Risk Screening:**
- Lifetime risk >20%: Annual MRI plus mammography
- Begin at age 30 or 10 years before youngest affected relative
- High risk includes: BRCA mutation carriers, prior chest radiation, strong family history

**Understanding Mammogram Results:**

**BI-RADS Categories:**
- Category 0: Need additional imaging
- Category 1: Negative (normal)
- Category 2: Benign finding
- Category 3: Probably benign; short-term follow-up
- Category 4: Suspicious; biopsy recommended
- Category 5: Highly suggestive of malignancy
- Category 6: Known cancer

**Breast Density:**
- Dense breasts: More glandular tissue, less fat
- Makes mammograms harder to read
- Associated with higher breast cancer risk
- Many states require notification of breast density`,
      keyTerms: [
        { term: 'Mammography', definition: 'X-ray imaging of the breast for cancer screening and diagnosis' },
        { term: 'Tomosynthesis', definition: '3D mammography that takes multiple images from different angles; improves detection' },
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System; standardized way to describe mammogram results' },
        { term: 'Breast density', definition: 'Amount of fibroglandular tissue relative to fat; dense breasts are harder to image' },
        { term: 'False positive', definition: 'A test result that suggests cancer when none is present' },
      ],
      examples: [
        'A 50-year-old woman with average risk should have screening mammography every 1-2 years',
        'A 35-year-old woman with a BRCA1 mutation should begin annual mammography plus MRI at age 30',
      ],
    },
    3: {
      level: 3,
      summary: 'Breast cancer screening efficacy is assessed through randomized controlled trials showing mortality reduction, balanced against harms including false positives, overdiagnosis, and radiation exposure, with recommendations stratified by individual risk.',
      explanation: `Breast cancer screening represents a complex public health intervention with demonstrated benefits and measurable harms that must be individualized.

**Evidence Base for Screening:**

**Randomized Controlled Trials**
- 8 major RCTs conducted between 1963-1991
- Meta-analyses show ~20% relative reduction in breast cancer mortality
- Absolute benefit: ~1 death prevented per 1,000 women screened over 10 years (ages 50-69)
- Effect size varies by age and follow-up duration

**Screening Performance Metrics:**

| Metric | Definition | Typical Value |
|--------|------------|---------------|
| Sensitivity | True positives / All cancers | 85-90% |
| Specificity | True negatives / All non-cancers | 90-95% |
| PPV of recall | Cancers / All recalls | 4-8% |
| PPV of biopsy | Cancers / All biopsies | 20-40% |
| Cancer detection rate | Cancers / 1,000 screens | 4-6 |

**Factors Affecting Performance:**
- Breast density (sensitivity lower in dense breasts)
- Screening interval (shorter intervals may detect more)
- Digital vs. film mammography
- Radiologist experience and volume
- CAD (computer-aided detection)

**Harms of Screening:**

**False Positives**
- Cumulative 10-year risk: 50-60% for annual screening
- Lead to anxiety, additional imaging, biopsies
- Most recalled women do not have cancer

**Overdiagnosis**
- Detection of cancer that would never have caused symptoms or death
- Estimated 10-20% of screen-detected cancers
- Leads to unnecessary treatment
- Particularly concerns with DCIS

**Radiation Exposure**
- Mammography: ~0.4 mSv per exam
- Lifetime risk of radiation-induced cancer: ~1 per 100,000 women screened annually from age 40

**Biopsy Complications**
- Pain, bruising, rarely infection
- False negatives can occur

**Screening by Risk Category:**

**Average Risk (Lifetime risk <15%)**
- Mammography every 1-2 years starting age 40-50
- Shared decision-making for ages 40-49
- Continue while life expectancy >10 years

**Intermediate Risk (15-20% lifetime)**
- Earlier initiation of mammography
- Consider supplemental screening (MRI, ultrasound)
- Risk assessment with validated models

**High Risk (>20% lifetime)**
- Annual mammography plus MRI starting age 30 (or 10 years before youngest family member's diagnosis)
- Includes: BRCA carriers, Li-Fraumeni, prior chest radiation
- Consider chemoprevention

**Supplemental Screening in Dense Breasts:**
- Whole-breast ultrasound: Increases cancer detection by 2-4 per 1,000
- MRI: Highest sensitivity but costly, many false positives
- Contrast-enhanced mammography: Emerging option
- Molecular breast imaging: Uses radiotracer`,
      keyTerms: [
        { term: 'Overdiagnosis', definition: 'Detection of cancer that would not have become clinically apparent during the patient\'s lifetime; leads to unnecessary treatment' },
        { term: 'Lead time bias', definition: 'Apparent improvement in survival from earlier detection without actual postponement of death' },
        { term: 'Interval cancer', definition: 'Cancer diagnosed between scheduled screening examinations; often faster-growing' },
        { term: 'Recall rate', definition: 'Percentage of screened women called back for additional imaging; should be <10%' },
        { term: 'Number needed to screen', definition: 'Number of women who must be screened to prevent one breast cancer death; varies by age and duration' },
      ],
      examples: [
        'To prevent one breast cancer death, approximately 1,000 women ages 50-59 need to be screened over 10 years',
        'A woman with extremely dense breasts (category D) has ~4x higher cancer risk and lower mammographic sensitivity; supplemental screening may be warranted',
      ],
    },
    4: {
      level: 4,
      summary: 'Breast imaging physics and digital analysis, including AI-based detection systems, alongside epidemiological methodology for screening program evaluation, inform evidence-based screening policy development.',
      explanation: `**Mammography Physics and Technology:**

**Image Acquisition**
- X-ray spectrum: 25-35 kVp, filtered beam
- Compression: Reduces scatter, equalizes thickness, decreases motion blur
- Standard views: Craniocaudal (CC) and mediolateral oblique (MLO)
- Spot compression and magnification for further evaluation

**Digital Mammography**
- Full-field digital mammography (FFDM): Direct or indirect detection
- Advantages: Wider dynamic range, post-processing capabilities, efficient workflow
- Superior to film in dense breasts and women <50

**Digital Breast Tomosynthesis (DBT)**
- Arc motion, multiple low-dose projections
- Reconstructed into thin slices (typically 1mm)
- Reduces superimposition of tissues
- Improves sensitivity and specificity
- Reduces recall rates by 15-30%
- Slightly increased radiation (may use synthetic 2D to reduce)

**Breast MRI Technical Aspects**
- T1 and T2-weighted sequences
- Dynamic contrast-enhanced (DCE): Kinetic analysis
  - Type 1 curve: Persistent enhancement (usually benign)
  - Type 2 curve: Plateau (indeterminate)
  - Type 3 curve: Washout (suspicious for malignancy)
- Diffusion-weighted imaging (DWI): ADC values
- Background parenchymal enhancement (BPE) affects interpretation

**Artificial Intelligence in Breast Imaging:**

**Computer-Aided Detection (CAD)**
- Marks potential abnormalities for radiologist review
- Traditional CAD: Limited improvement in sensitivity, increased recall
- FDA-approved since 1998

**Deep Learning Systems**
- Convolutional neural networks trained on large datasets
- Performance: Matches or exceeds average radiologist
- Applications:
  - Triage (prioritize suspicious cases)
  - Reader support (second opinion)
  - Standalone detection (investigational)
- Concerns: Validation across populations, explainability, integration

**Risk Prediction Models:**
- AI analysis of mammographic features
- Predicts 5-year breast cancer risk
- May outperform traditional models

**Epidemiological Assessment of Screening:**

**Study Designs**
- RCTs: Gold standard but historical
- Observational: Incidence-based mortality studies
- Ecological: Trend analyses
- Service screening evaluation

**Key Metrics for Program Evaluation**
- Coverage/participation rate
- Recall rate (<10% acceptable)
- Biopsy rate
- PPV of biopsy (>20% acceptable)
- Cancer detection rate
- Interval cancer rate
- Stage distribution of detected cancers
- Mortality reduction

**Biases in Screening Evaluation:**
- **Lead time bias**: Earlier detection adds time to "survival" without changing death date
- **Length bias**: Screening preferentially detects slower-growing cancers
- **Selection bias**: Healthier women more likely to screen
- **Overdiagnosis bias**: Inflates incidence without mortality benefit

**Addressing Biases:**
- Use mortality as endpoint rather than survival
- Intention-to-treat analysis
- Adequate follow-up duration
- Control for other factors (treatment improvements)`,
      keyTerms: [
        { term: 'Digital breast tomosynthesis', definition: '3D mammography using multiple projections to create slice images; reduces tissue superimposition' },
        { term: 'Kinetic curve', definition: 'Pattern of contrast enhancement over time on MRI; washout (type 3) suspicious for malignancy' },
        { term: 'Background parenchymal enhancement', definition: 'Normal breast tissue enhancement on MRI that can obscure lesions; varies with hormonal status' },
        { term: 'Length time bias', definition: 'Screening preferentially detects slower-growing tumors with better prognosis, inflating apparent benefit' },
        { term: 'Convolutional neural network', definition: 'Deep learning architecture used in medical imaging AI; excels at pattern recognition in images' },
      ],
      clinicalNotes: 'The FDA has approved several AI systems for breast cancer detection as reader aids. Studies show AI can match specialist radiologist performance and may reduce workload by triaging normal studies. However, prospective data on mortality reduction and implementation in diverse populations is still needed.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based breast screening implementation requires integration of guideline recommendations, risk stratification tools, shared decision-making, and quality assurance programs within organized screening systems.',
      explanation: `**Guideline Synthesis and Implementation:**

**Comparison of Major Guidelines (2024):**

| Organization | Age to Start | Interval | Modality | Shared Decision |
|--------------|--------------|----------|----------|-----------------|
| USPSTF | 40 | Biennial | Mammography | 40-49: Individualize |
| ACS | 40 (option), 45 (recommend) | Annual 45-54, biennial 55+ | Mammography | 40-44 |
| ACR/SBI | 40 | Annual | With DBT if available | None specified |
| NCCN | 40 (if average risk) | Annual | Tomosynthesis preferred | Based on risk |

**Risk Assessment Integration:**

**When to Assess**
- All women by age 30
- Earlier if concerning family history

**Tools**
- Tyrer-Cuzick (IBIS): Comprehensive; includes benign disease
- BRCAPRO: Family history focus; BRCA probability
- BOADICEA: Polygenic risk scores incorporated
- Gail Model: Limited family history input

**Risk Stratification**
| Lifetime Risk | Category | Recommended Screening |
|---------------|----------|----------------------|
| <15% | Average | Mammography per guidelines |
| 15-20% | Intermediate | Consider supplemental imaging |
| >20% | High | MRI + mammography annually |

**Genetic Testing Considerations:**
- Criteria: ≥2.5% probability of pathogenic variant (NCCN)
- Genes: BRCA1/2, PALB2, TP53, PTEN, ATM, CHEK2, etc.
- Results inform imaging and risk reduction strategies

**Shared Decision-Making:**

**Elements**
1. Patient values and preferences
2. Individual risk assessment
3. Potential benefits (mortality reduction)
4. Potential harms (false positives, overdiagnosis)
5. Screening options and alternatives

**Decision Aids**
- Visual aids showing outcomes per 1,000 women
- Comparison of strategies (annual vs. biennial, start age)
- NCI, ACR, and other organizations provide resources

**Organized Screening Programs:**

**Components**
- Population identification and invitation
- Tracking and follow-up systems
- Quality assurance and audit
- Standardized reporting (BI-RADS)
- Centralized data for evaluation

**Quality Metrics (MQSA Requirements)**
- Accreditation by FDA-approved body
- Equipment standards
- Personnel qualifications
- Medical audit requirements
- Consumer complaint mechanism

**Performance Benchmarks:**
| Metric | Acceptable | Desirable |
|--------|------------|-----------|
| Recall rate | ≤12% | ≤10% |
| PPV of biopsy | ≥20% | ≥25-40% |
| Cancer detection | ≥2.5/1000 | ≥3-4/1000 |
| Invasive cancer <1cm | ≥30% | ≥50% |
| Node-negative invasive | ≥75% | ≥80% |

**Special Populations:**

**Dense Breasts**
- Notification required in many states
- Supplemental screening options: Ultrasound, MRI, contrast mammography
- DENSE trial: MRI reduced interval cancers in extremely dense breasts
- Cost-effectiveness under evaluation

**Prior Chest Radiation**
- Annual MRI + mammography starting at age 25 or 8 years post-radiation
- Includes Hodgkin lymphoma survivors

**Male Breast Cancer**
- No routine screening recommended
- Clinical awareness in Klinefelter syndrome, BRCA2 carriers

**Emerging Directions:**
- AI-enhanced risk-based screening intervals
- Liquid biopsy for early detection (research)
- Abbreviated breast MRI for broader access
- Polygenic risk score integration into standard care`,
      keyTerms: [
        { term: 'MQSA', definition: 'Mammography Quality Standards Act; US federal law establishing quality standards for mammography facilities' },
        { term: 'Organized screening program', definition: 'Population-based program with systematic invitation, quality assurance, and outcome monitoring' },
        { term: 'Abbreviated breast MRI', definition: 'Shortened MRI protocol focusing on essential sequences; aims to increase access while reducing cost' },
        { term: 'Polygenic risk score', definition: 'Combined effect of multiple genetic variants on disease risk; emerging tool for breast cancer risk stratification' },
        { term: 'DENSE trial', definition: 'Dutch trial showing supplemental MRI in extremely dense breasts significantly reduced interval cancers' },
      ],
      clinicalNotes: 'The 2024 USPSTF recommendation lowered the recommended starting age for screening to 40 for all women, acknowledging rising breast cancer incidence in younger women and evidence of benefit. However, biennial screening is still recommended. The ACR and other specialty organizations continue to recommend annual screening starting at 40, citing the value of detecting cancers earlier and concerns about interval cancers with biennial screening. Clinicians should help patients understand these nuances through shared decision-making, considering individual risk factors and preferences.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'Screening for Breast Cancer: US Preventive Services Task Force Recommendation Statement',
      source: 'JAMA',
      authors: ['US Preventive Services Task Force'],
      url: 'https://doi.org/10.1001/jama.2024.5534',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'American Cancer Society Guideline for Breast Cancer Screening',
      source: 'JAMA',
      authors: ['Oeffinger, K.C.', 'et al.'],
      url: 'https://doi.org/10.1001/jama.2015.12783',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-breast-cancer', targetType: 'condition', relationship: 'related', label: 'Breast Cancer' },
    { targetId: 'reproductive-benign-breast', targetType: 'condition', relationship: 'related', label: 'Benign Breast Conditions' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['screening', 'prevention', 'breast', 'radiology'],
    keywords: ['mammogram', 'screening', 'breast MRI', 'early detection', 'BI-RADS', 'breast density'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'medicine', 'surgery'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
