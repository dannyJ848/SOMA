/**
 * Screening Guidelines by Gender
 *
 * Gender-specific preventive health screenings including
 * sex-specific cancers and conditions with gender-based risk differences.
 */

import { EducationalContent } from '../../types';

export const SCREENING_GUIDELINES_GENDER: EducationalContent = {
  id: 'concept-screening-guidelines-gender',
  type: 'concept',
  name: 'Gender-Specific Screening Guidelines',
  alternateNames: ['Sex-specific health screenings', 'Men and women health screenings'],

  levels: {
    1: {
      level: 1,
      summary: 'Men and women have some different health screenings because their bodies are different in some ways.',
      explanation: `While many health tests are the same for everyone, some are different for men and women.

**Screenings Just for Women:**
- **Breast cancer screening**: Special X-rays called mammograms check for lumps
- **Cervical cancer screening**: A Pap smear checks the cervix (part of the uterus)
- **Bone density test**: More common in women because they're more likely to get weak bones

**Screenings Just for Men:**
- **Prostate cancer screening**: A blood test checks for problems with the prostate gland
- **Testicular cancer awareness**: Men should know how to check themselves

**Screenings for Everyone but at Different Rates:**
- Heart disease: Men often get heart problems earlier than women
- Osteoporosis: More common in women, so they get tested earlier
- Abdominal aortic aneurysm: Only men who smoked need this test

Remember: Your doctor will help you know which tests you need!`,
      keyTerms: [
        { term: 'mammogram', definition: 'A special X-ray picture of the breast to look for cancer' },
        { term: 'Pap smear', definition: 'A test that checks cells from the cervix for problems' },
        { term: 'prostate', definition: 'A gland in men that helps make fluid for sperm' },
      ],
      analogies: [
        'Gender-specific screenings are like having different maintenance checks for different types of cars - each needs specific inspections.',
      ],
    },
    2: {
      level: 2,
      summary: 'Screening recommendations differ by sex due to anatomical differences, hormonal influences, and varying disease prevalence between males and females.',
      explanation: `Biological sex affects disease risk, presentation, and optimal screening strategies.

**Female-Specific Screenings:**

*Breast Cancer:*
- Mammography every 2 years, ages 50-74
- Earlier/more frequent if high risk
- May include breast MRI if lifetime risk >20%

*Cervical Cancer:*
- Pap smear every 3 years, ages 21-29
- Pap + HPV co-testing every 5 years, ages 30-65
- Can stop at 65 if adequate prior screening

*Ovarian Cancer:*
- No routine screening recommended
- CA-125 and ultrasound for high-risk women (BRCA carriers)

*Osteoporosis:*
- DEXA scan at age 65
- Earlier if risk factors (smoking, low weight, steroid use)

**Male-Specific Screenings:**

*Prostate Cancer:*
- PSA blood test: shared decision-making ages 55-69
- More controversial due to overdiagnosis
- African American men and those with family history may benefit from earlier discussion (age 40-45)

*Testicular Cancer:*
- Self-awareness encouraged
- No formal screening recommendation (rare, excellent cure rates)

*Abdominal Aortic Aneurysm (AAA):*
- One-time ultrasound screening
- Men ages 65-75 who have ever smoked

**Conditions with Different Risks:**

| Condition | Higher Risk In | Notes |
|-----------|---------------|-------|
| Heart disease | Men (until menopause) | Women catch up post-menopause |
| Osteoporosis | Women | 4x more common than men |
| Lung cancer | Equal rates now | Was higher in men |
| Colorectal cancer | Men (slightly) | Same screening recommended |`,
      keyTerms: [
        { term: 'DEXA scan', definition: 'Dual-energy X-ray absorptiometry; measures bone mineral density', pronunciation: 'DEX-uh' },
        { term: 'PSA', definition: 'Prostate-specific antigen; blood test for prostate cancer screening' },
        { term: 'HPV co-testing', definition: 'Testing for human papillomavirus along with Pap smear' },
        { term: 'BRCA', definition: 'Genes that, when mutated, increase risk of breast and ovarian cancer', pronunciation: 'BRACK-uh' },
      ],
    },
    3: {
      level: 3,
      summary: 'Sex-specific screening protocols account for anatomical differences, hormonal effects on disease development, genetic factors, and population-level epidemiological data on disease incidence and outcomes.',
      explanation: `**Female-Specific Screening Details:**

*Breast Cancer Screening:*

| Age Group | Recommendation | Grade | Modality |
|-----------|---------------|-------|----------|
| 40-49 | Individual decision | C | Mammography |
| 50-74 | Biennial screening | B | Mammography |
| ≥75 | Insufficient evidence | I | - |
| High-risk | Enhanced | - | Mammo + MRI |

*High-Risk Criteria (≥20% lifetime risk):*
- BRCA1/2 mutation carriers
- First-degree relative with BRCA
- Chest radiation ages 10-30 (e.g., Hodgkin lymphoma)
- Li-Fraumeni, Cowden, Bannayan-Riley-Ruvalcaba syndromes

*Cervical Cancer Screening:*

| Age | Strategy | Interval |
|-----|----------|----------|
| <21 | No screening | - |
| 21-29 | Cytology alone | Every 3 years |
| 30-65 | Cytology + HPV co-test | Every 5 years |
| 30-65 | Cytology alone | Every 3 years |
| 30-65 | HPV primary | Every 5 years |
| >65 | Stop if adequate prior | - |
| Post-hysterectomy | Stop if no cervix and no CIN2+ history | - |

*Osteoporosis:*
- DEXA of hip and lumbar spine
- T-score ≤-2.5 = osteoporosis
- T-score -1.0 to -2.5 = osteopenia
- FRAX calculator for 10-year fracture risk

**Male-Specific Screening Details:**

*Prostate Cancer:*

The PSA controversy:
- Sensitivity: ~21% (for detecting any cancer)
- Many screen-detected cancers are indolent
- Overdiagnosis rate: 20-50%
- Treatment side effects: Incontinence, impotence

Current recommendations:
- Ages 55-69: Shared decision-making
- Ages 40-54: May discuss if high risk (African American, family history)
- Ages ≥70: Generally not recommended

*Abdominal Aortic Aneurysm:*
- Men 65-75 who have EVER smoked
- One-time ultrasound
- Women: Insufficient evidence (may consider if smoked)

**Transgender Considerations:**

Screening should be based on current anatomy:
- Transgender women with breast tissue: Consider mammography
- Transgender men with cervix: Continue cervical cancer screening
- Hormone effects on cancer risk still being studied`,
      keyTerms: [
        { term: 'T-score', definition: 'Standard deviation from peak bone mass of young healthy adult; used to define osteoporosis' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; calculates 10-year probability of hip or major osteoporotic fracture' },
        { term: 'overdiagnosis', definition: 'Detection of disease that would never have caused symptoms or death' },
        { term: 'indolent', definition: 'Slow-growing; unlikely to cause harm during lifetime' },
        { term: 'CIN', definition: 'Cervical intraepithelial neoplasia; precancerous cervical changes' },
      ],
      clinicalNotes: 'For transgender patients, screening recommendations should be individualized based on anatomy and hormone exposure. This is an evolving area with limited data.',
    },
    4: {
      level: 4,
      summary: 'Gender-specific screening integrates sex-linked genetic susceptibilities, hormonal influences on carcinogenesis, tissue-specific risks, and population health data to optimize detection while addressing the unique challenges of overdiagnosis and health disparities.',
      explanation: `**Advanced Female Screening Considerations:**

*Breast Cancer Risk Stratification:*

**Genetic Testing Criteria:**
- Personal history of breast cancer ≤50 years
- Triple-negative breast cancer ≤60 years
- Male breast cancer
- Ovarian, fallopian tube, or primary peritoneal cancer
- Multiple primary breast cancers
- Family history suggesting hereditary syndrome

**Risk Models:**
- Tyrer-Cuzick (IBIS): Most comprehensive (includes breast density)
- Gail Model: Simpler, used for chemoprevention eligibility
- BRCAPRO: Mutation probability calculation
- BOADICEA: UK-based, polygenic risk

**Screening Intensity by Risk:**

| Risk Level | Lifetime Risk | Screening |
|------------|--------------|-----------|
| Average | <15% | Mammography per guidelines |
| Intermediate | 15-20% | Individualized, consider earlier start |
| High | >20% | Annual mammography + MRI, start at 30 |
| BRCA1 | 50-85% | MRI + mammography from 25-30, consider oophorectomy |

*Cervical Screening Molecular Evolution:*

HPV primary screening approach:
- HPV testing alone (FDA-approved for primary screening)
- If HPV positive → reflex cytology
- Genotype-specific management (HPV 16/18 higher risk)

ASCCP Risk-Based Management:
- Uses prior screening history + current results
- CIN3+ risk thresholds for colposcopy
- Allows for less frequent surveillance in low-risk

**Male Screening Complexities:**

*Prostate Cancer Decision Analysis:*

Shared Decision-Making Components:
1. Absolute risk of death from prostate cancer
2. Test characteristics (sensitivity 21%, specificity 91%)
3. Probability of overdiagnosis (1 in 4 to 1 in 2)
4. Treatment complications (20-30% significant)
5. Anxiety from PSA surveillance
6. Individual values and preferences

PSA Interpretations:
- PSA >4.0 ng/mL: Traditional threshold (low sensitivity)
- PSA velocity: >0.75 ng/mL/year concerning
- PSA density: PSA/prostate volume
- Free PSA ratio: Lower ratio suggests cancer
- phi score, 4Kscore, ExoDx: Refined risk stratification

**Sex Differences in Non-Sex-Specific Cancers:**

*Colorectal Cancer:*
- Men: Higher incidence and mortality
- Women: More right-sided tumors (harder to detect)
- Hormonal factors may be protective (HRT data mixed)

*Lung Cancer:*
- Women: May be more susceptible to carcinogens
- Never-smoker lung cancer more common in women
- Different molecular profiles (EGFR mutations more common in women)

**Hormonal Influences on Screening:**

*Breast Density:*
- Estrogen-dependent
- Dense breasts: Lower mammography sensitivity
- 28 states mandate density notification
- Supplemental screening (ultrasound, MRI) considered

*Hormone Replacement Therapy:*
- Increases breast cancer risk (combined estrogen-progestin)
- May affect mammographic sensitivity
- Consider timing of screening relative to HRT`,
      keyTerms: [
        { term: 'Tyrer-Cuzick model', definition: 'Comprehensive breast cancer risk model incorporating genetic and hormonal factors, including breast density' },
        { term: 'phi score', definition: 'Prostate Health Index; combined marker (total PSA, free PSA, p2PSA) for prostate cancer risk' },
        { term: 'ASCCP', definition: 'American Society for Colposcopy and Cervical Pathology; develops cervical screening management guidelines' },
        { term: 'breast density', definition: 'Proportion of fibroglandular tissue relative to fat; affects mammography sensitivity' },
        { term: 'BOADICEA', definition: 'Breast and Ovarian Analysis of Disease Incidence and Carrier Estimation Algorithm; UK risk model' },
      ],
      clinicalNotes: 'Breast density legislation varies by state. Document shared decision-making for PSA screening. Consider genetic counseling referral for patients meeting testing criteria.',
    },
    5: {
      level: 5,
      summary: 'Precision screening integrates sex-specific physiology, genetic and polygenic risk scoring, imaging advances, biomarker panels, and health equity considerations to move beyond population-based toward personalized prevention strategies while addressing screening disparities and optimizing resource allocation.',
      explanation: `**Precision Approaches to Sex-Specific Screening:**

**1. Genomic Risk Integration:**

*Breast Cancer:*
- Polygenic Risk Scores (PRS): 300+ SNPs
- Mavaddat 313-SNP PRS stratifies population risk
- Combined with clinical factors → personalized screening intervals
- WISDOM trial: Testing risk-based vs. annual screening
- Athena Breast Health Network: Implementing risk-based protocols

*Implementation Challenges:*
- Ancestry-specific PRS (most derived from European populations)
- Clinical utility validation ongoing
- Integration with EHR and risk calculators
- Counseling and patient understanding

*Prostate Cancer:*
- Genetic risk stratification emerging
- BRCA2 carriers: Consider earlier screening
- PRS + PSA may improve specificity
- Stockholm3 model: Clinical + genetic + biomarkers

**2. Advanced Imaging Technologies:**

*Breast:*
- Digital Breast Tomosynthesis (DBT/3D mammography):
  - Increased cancer detection rate (1-2 per 1000 additional)
  - Reduced recall rates
  - Higher radiation dose
- Contrast-enhanced mammography: Approaching MRI sensitivity
- Abbreviated breast MRI: Faster, lower cost, high sensitivity
- AI-assisted interpretation: FDA-approved tools available

*Prostate:*
- Multiparametric MRI (mpMRI):
  - PI-RADS scoring system
  - MRI-targeted biopsy improving detection of significant cancer
  - May reduce unnecessary biopsies
- MRI-ultrasound fusion biopsy

**3. Biomarker Panels:**

*Prostate Cancer Biomarkers:*

| Test | Sample | Use |
|------|--------|-----|
| 4Kscore | Blood | Pre-biopsy risk stratification |
| phi | Blood | Pre-biopsy risk |
| SelectMDx | Urine | Pre-biopsy risk |
| ExoDx | Urine | Pre-biopsy, negative predictive value |
| ConfirmMDx | Tissue | After negative biopsy |
| Oncotype DX GPS | Tissue | Active surveillance decision |
| Decipher | Tissue | Recurrence risk |

*Ovarian Cancer:*
- ROCA algorithm: Serial CA-125 with risk calculation
- HE4: Adjunct marker
- OVA1, Overa: Multivariate index assays
- Still no recommended population screening

**4. Health Disparities in Gender-Specific Screening:**

*Breast Cancer:*
- Black women: Higher mortality despite similar incidence
- Screening rates lower in uninsured, immigrant populations
- Triple-negative more common in young Black women
- Dense breast notification may widen disparities (supplemental screening access)

*Cervical Cancer:*
- Hispanic women: Higher incidence
- Self-collected HPV testing: Increases access
- Never/rarely screened: Account for majority of cervical cancers

*Prostate Cancer:*
- Black men: 2x incidence, 2.5x mortality
- May warrant earlier screening initiation
- Lower rates of active surveillance uptake

*Interventions:*
- Patient navigation
- Mobile screening units
- Community health workers
- Same-day results and follow-up

**5. Special Populations:**

*Transgender Individuals:*

| Population | Organ | Recommendation |
|------------|-------|----------------|
| Trans women | Breast | Screen after 5+ years of hormone therapy |
| Trans women | Prostate | Continue screening based on age/risk |
| Trans men | Cervix | Continue screening if cervix present |
| Trans men | Breast | Screen if breast tissue present, no mastectomy |

*Data gaps:*
- Long-term hormone effects on cancer risk
- Optimal screening intervals
- Inclusive terminology in screening programs

*Intersex Individuals:*
- Individualized based on anatomy and gonadal tissue

**6. Quality Metrics and Policy:**

*Breast Cancer:*
- Mammography Quality Standards Act (MQSA)
- BI-RADS reporting standardization
- Recall rates, cancer detection rates benchmarked

*Cervical Cancer:*
- Quality indicators: Abnormal rate, HSIL+ detection
- HEDIS measures for screening compliance

*Prostate Cancer:*
- Quality metrics less established
- Documenting shared decision-making

**7. Future Directions:**

- Liquid biopsy for gynecologic cancers (Pap-based)
- AI-driven personalized screening intervals
- Microbiome associations with cancer risk
- Multi-cancer early detection integration
- Expanding genetic testing criteria
- Point-of-care HPV testing in low-resource settings`,
      keyTerms: [
        { term: 'polygenic risk score (PRS)', definition: 'Aggregate genetic risk based on multiple common variants, each with small effect sizes' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System; standardized scoring for prostate MRI' },
        { term: 'WISDOM trial', definition: 'Ongoing randomized trial comparing risk-based vs. annual breast cancer screening' },
        { term: 'Stockholm3', definition: 'Prostate cancer risk model combining clinical factors, genetic markers, and protein biomarkers' },
        { term: 'ROCA algorithm', definition: 'Risk of Ovarian Cancer Algorithm; uses serial CA-125 trends for screening high-risk women' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- PRS not yet ready for routine clinical use (validation, equity concerns)
- mpMRI before biopsy increasingly standard of care
- Document transgender/intersex anatomy in screening recommendations
- Breast density notification laws vary - know your state requirements
- Consider referral to high-risk clinics for appropriate patients
- Advocate for equitable access to supplemental screening
- Self-collected HPV samples: Valid alternative for underscreened populations`,
    },
  },

  media: [
    {
      id: 'gender-screening-chart',
      type: 'diagram',
      filename: 'gender-specific-screening.svg',
      title: 'Gender-Specific Screening Comparison',
      description: 'Side-by-side comparison of recommended screenings for males and females',
    },
  ],

  citations: [
    {
      id: 'uspstf-breast',
      type: 'website',
      title: 'Breast Cancer Screening Recommendations',
      source: 'USPSTF',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uspstf-cervical',
      type: 'website',
      title: 'Cervical Cancer Screening Recommendations',
      source: 'USPSTF',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uspstf-prostate',
      type: 'website',
      title: 'Prostate Cancer Screening Recommendations',
      source: 'USPSTF',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-mammography-screening', targetType: 'concept', relationship: 'related', label: 'Mammography Screening' },
    { targetId: 'concept-pap-smear-screening', targetType: 'concept', relationship: 'related', label: 'Pap Smear Screening' },
    { targetId: 'concept-psa-screening', targetType: 'concept', relationship: 'related', label: 'PSA Screening' },
  ],

  tags: {
    systems: ['reproductive', 'multiple'],
    topics: ['preventive medicine', 'screening', 'gender health'],
    keywords: ['gender-specific', 'mammography', 'Pap smear', 'PSA', 'prostate', 'breast cancer', 'cervical cancer'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'obstetrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
