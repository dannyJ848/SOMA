/**
 * Uterine Cancer
 *
 * Comprehensive coverage of endometrial cancer including types,
 * presentation, staging, and treatment.
 */

import { EducationalContent } from '../../../types';

export const uterineCancerContent: EducationalContent = {
  id: 'obgyn-oncology-uterine-cancer',
  type: 'condition',
  name: 'Uterine Cancer',
  alternateNames: ['Endometrial Cancer', 'Uterine Carcinoma', 'Corpus Cancer'],

  levels: {
    1: {
      level: 1,
      summary: 'Uterine cancer starts in the lining of the uterus and is usually found early because it causes abnormal bleeding.',
      explanation: `Uterine cancer, also called endometrial cancer, begins in the lining of the uterus (womb).

**Good news about this cancer:**
- Usually found early because it causes abnormal bleeding
- Most cases are curable with surgery
- It is the most common gynecologic cancer, but also one of the most treatable

**Warning signs:**
- Vaginal bleeding after menopause (any amount!)
- Very heavy or prolonged periods
- Bleeding between periods
- Unusual discharge

**Risk factors:**
- Obesity (most important)
- Never having been pregnant
- Older age
- Taking estrogen without progesterone
- Diabetes
- Family history of certain cancers

**Treatment:**
- Surgery (hysterectomy) is the main treatment
- Sometimes radiation or chemotherapy is needed
- Many women are cured`,
      keyTerms: [
        { term: 'endometrial cancer', definition: 'Cancer that starts in the lining of the uterus' },
        { term: 'hysterectomy', definition: 'Surgery to remove the uterus' },
        { term: 'postmenopausal bleeding', definition: 'Any vaginal bleeding after menopause; should always be evaluated' },
      ],
      analogies: [
        'The uterine lining is like wallpaper that can sometimes start growing out of control.',
      ],
      examples: [
        'A 60-year-old woman who has light vaginal bleeding, even just spotting, should see her doctor right away to rule out uterine cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endometrial cancer is divided into Type I (estrogen-dependent, better prognosis) and Type II (non-estrogen-dependent, poorer prognosis), with postmenopausal bleeding being the cardinal symptom.',
      explanation: `**Classification:**

*Type I (80-90%):*
- Estrogen-dependent
- Endometrioid histology
- Lower grade
- Better prognosis
- Associated with obesity, anovulation

*Type II (10-20%):*
- Non-estrogen-dependent
- Serous, clear cell histology
- Higher grade
- Worse prognosis
- Occurs in thinner, older women

**Risk Factors:**

*Type I (excess estrogen exposure):*
- Obesity
- PCOS/anovulation
- Diabetes
- Tamoxifen use
- Estrogen-only HRT
- Nulliparity
- Early menarche/late menopause

*Type II:*
- Older age
- Less clear risk factors
- p53 mutations common

**Symptoms:**
- Postmenopausal bleeding (90%)
- Abnormal premenopausal bleeding
- Abnormal discharge

**Diagnosis:**
- Endometrial biopsy (office)
- Transvaginal ultrasound
- Hysteroscopy with biopsy if needed
- Postmenopausal: ET ≤4 mm has high NPV

**Staging:**
- Surgical staging (FIGO)
- Hysterectomy + BSO + nodes
- Stage I: Confined to uterus
- Stage II: Cervical invasion
- Stage III: Regional spread
- Stage IV: Distant metastases

**Treatment:**
- Surgery is primary treatment
- Adjuvant therapy based on stage and risk factors`,
      keyTerms: [
        { term: 'Type I endometrial cancer', definition: 'Estrogen-driven, endometrioid type with better prognosis' },
        { term: 'Type II endometrial cancer', definition: 'Non-estrogen-driven, serous or clear cell type with worse prognosis' },
        { term: 'endometrial biopsy', definition: 'Office procedure to sample uterine lining for cancer diagnosis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Endometrial cancer molecular classification (TCGA) has transformed risk stratification, with POLE ultramutated, MSI, copy number low, and copy number high subtypes guiding adjuvant therapy decisions.',
      explanation: `**Molecular Classification (TCGA):**

| Subtype | Mutations | Prognosis |
|---------|-----------|-----------|
| POLE ultramutated | POLE | Excellent |
| MSI hypermutated | MLH1, MSH2, etc. | Favorable |
| Copy number low | PTEN, PIK3CA, ARID1A | Intermediate |
| Copy number high | TP53, HER2 | Poor (serous-like) |

**Clinical Implications:**
- POLE: May avoid adjuvant therapy even in high-grade
- MSI-H: Immunotherapy for advanced/recurrent
- p53-abnormal: Poor prognosis, needs aggressive treatment

**Surgical Management:**

*Standard:*
- Total hysterectomy + BSO
- Sentinel lymph node mapping increasingly used
- Omentectomy for serous type

*Lymph Node Assessment:*
- SLN biopsy gaining acceptance
- Full lymphadenectomy reserved for high-risk
- Algorithmic approach

**Risk Stratification:**

*Low Risk:*
- Stage IA, Grade 1-2, endometrioid
- No LVSI
- Observation (no adjuvant)

*Intermediate Risk:*
- Stage IA G3, or IB G1-2
- Consider vaginal brachytherapy

*High-Intermediate Risk:*
- Multiple risk factors
- LVSI present
- Brachytherapy or pelvic RT

*High Risk:*
- Stage II+, serous, clear cell
- Deep invasion
- Chemotherapy + radiation

**Endometrial Hyperplasia:**

*Without Atypia:*
- Low progression risk (<5%)
- Progestin therapy
- Can observe

*With Atypia:*
- Precancerous
- ~30% have concurrent cancer
- Hysterectomy recommended
- Progestins if fertility desired (close surveillance)`,
      keyTerms: [
        { term: 'POLE ultramutated', definition: 'Molecular subtype with excellent prognosis due to POLE mutation' },
        { term: 'sentinel lymph node', definition: 'First node receiving lymphatic drainage; used to assess spread' },
        { term: 'atypical hyperplasia', definition: 'Precancerous overgrowth of endometrium; high risk of cancer' },
      ],
      clinicalNotes: 'Molecular classification is changing practice. A POLE-mutated high-grade tumor may have excellent prognosis without adjuvant therapy. p53-abnormal tumors need aggressive treatment regardless of grade.',
    },
    4: {
      level: 4,
      summary: 'Endometrial cancer management integrates molecular profiling, sentinel lymph node assessment, and risk-adapted adjuvant therapy, with immunotherapy transforming treatment of MSI-high and advanced disease.',
      explanation: `**Molecular Testing in Practice:**

*Who Should Be Tested:*
- All endometrial cancers (per NCCN)
- Minimum: MMR/MSI testing
- Expanded: Full molecular classification

*Clinical Utility:*
- Prognosis independent of traditional factors
- Immunotherapy eligibility (MSI-H)
- Family cancer syndrome identification (Lynch)
- Adjuvant therapy de-escalation (POLE)

**Adjuvant Therapy Trials:**

*PORTEC-3:*
- High-risk patients
- Chemoradiation vs. radiation alone
- Benefit for Stage III, serous

*GOG-249:*
- High-intermediate risk
- Vaginal brachytherapy + chemo vs. pelvic RT
- Similar outcomes, different toxicity

*GOG-258:*
- Stage III-IVA
- Chemoradiation vs. chemo alone
- Similar survival, different relapse patterns

**Advanced/Recurrent Disease:**

*First-Line:*
- Carboplatin + paclitaxel standard
- Add pembrolizumab if not MSI-H (NRG-GY018)

*MSI-H/dMMR:*
- Pembrolizumab single agent
- Dostarlimab single agent
- High response rates

*Second-Line:*
- Lenvatinib + pembrolizumab (regardless of MSI)
- Hormonal therapy (ER+ tumors)
- Clinical trials

**Fertility Preservation:**

*Candidates:*
- Grade 1 endometrioid
- Stage IA (no myometrial invasion on MRI)
- Desire fertility
- Understand risks

*Protocol:*
- High-dose progestins (megestrol, IUD)
- Surveillance q3 months
- Hysterectomy when childbearing complete
- Success ~70%

**Lynch Syndrome:**

*Identification:*
- ~3% of endometrial cancers
- Universal tumor testing for MMR
- Genetic testing if abnormal
- Often presents before CRC

*Management:*
- Cascade testing
- Colonoscopy surveillance
- Consider prophylactic surgery
- Immunotherapy effective if cancer`,
      keyTerms: [
        { term: 'lenvatinib + pembrolizumab', definition: 'Combination therapy for advanced endometrial cancer regardless of MSI status' },
        { term: 'dMMR', definition: 'Deficient mismatch repair; indicates MSI-high and Lynch syndrome possibility' },
        { term: 'Lynch syndrome', definition: 'Hereditary cancer syndrome with endometrial and colorectal cancer risk' },
      ],
      clinicalNotes: 'Universal MMR/MSI testing identifies Lynch syndrome (family implications) and selects patients for immunotherapy. The combination of lenvatinib + pembrolizumab has transformed second-line treatment regardless of MSI status.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endometrial cancer care emphasizes molecular-integrated risk assessment, immunotherapy advances, and attention to rising incidence linked to obesity epidemic, while research focuses on targeted therapy and prevention.',
      explanation: `**Epidemiologic Trends:**

*Rising Incidence:*
- Linked to obesity epidemic
- Black women: Higher mortality despite lower incidence
- Aggressive histologies more common in Black women
- Disparities in treatment and outcomes

*Addressing Disparities:*
- Equal access to molecular testing
- Clinical trial enrollment
- Quality of surgical care
- Systemic racism in healthcare

**Prevention Strategies:**

*Weight Management:*
- Obesity strongest modifiable risk factor
- Bariatric surgery reduces risk
- Lifestyle interventions

*Pharmacologic:*
- Progestin-containing contraceptives
- Metformin (under investigation)
- Progestins for hyperplasia

**Molecular Advances:**

*HER2 Targeting:*
- HER2 amplified in ~30% serous
- Trastuzumab combinations
- T-DXd (ADC) in trials

*Other Targets:*
- PI3K/AKT/mTOR pathway
- FGFR inhibitors
- Novel immunotherapy combinations

**Clinical Trial Design:**

*Biomarker-Driven:*
- Molecular selection
- Basket trials
- Adaptive designs
- PRO endpoints

*Key Ongoing Questions:*
- De-escalation based on molecular (POLE)
- Immunotherapy in front-line
- Optimal adjuvant combinations
- Prevention strategies

**Survivorship:**

*Long-Term Issues:*
- Lymphedema
- Sexual dysfunction
- Menopausal symptoms
- Second cancers (Lynch)

*Care Model:*
- Transition from oncology
- Survivorship care plans
- Lifestyle counseling
- Screening for other cancers

**Quality Metrics:**

*Process:*
- Molecular testing rates
- SLN completion rates
- Guideline-concordant adjuvant therapy
- Time to treatment

*Outcomes:*
- Survival by stage
- Recurrence rates
- Quality of life
- Patient experience`,
      keyTerms: [
        { term: 'T-DXd', definition: 'Trastuzumab deruxtecan; HER2-targeted antibody-drug conjugate in trials' },
        { term: 'PI3K/AKT/mTOR', definition: 'Signaling pathway frequently altered in endometrial cancer; target for therapy' },
        { term: 'survivorship care plan', definition: 'Documented summary and follow-up plan for cancer survivors' },
      ],
      clinicalNotes: 'Endometrial cancer is increasing in incidence, driven largely by the obesity epidemic. Black women have worse outcomes due to both biological factors (more aggressive histologies) and systemic disparities. Addressing both is essential.',
    },
  },

  media: [
    {
      id: 'endometrial-cancer-staging',
      type: 'diagram',
      filename: 'endometrial-cancer-figo-staging.svg',
      title: 'Endometrial Cancer FIGO Staging',
      description: 'Visual representation of endometrial cancer stages',
    },
  ],

  citations: [
    {
      id: 'nccn-uterine',
      type: 'article',
      title: 'NCCN Guidelines: Uterine Neoplasms',
      source: 'National Comprehensive Cancer Network',
      authors: ['NCCN'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-uterus', targetType: 'structure', relationship: 'related', label: 'Uterus Anatomy' },
    { targetId: 'obgyn-conditions-aub', targetType: 'condition', relationship: 'related', label: 'Abnormal Uterine Bleeding' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['oncology', 'uterine cancer', 'gynecology'],
    keywords: ['endometrial cancer', 'uterine cancer', 'postmenopausal bleeding'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
