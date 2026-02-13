/**
 * Diabetes Screening Guidelines
 *
 * Comprehensive diabetes and prediabetes screening recommendations based on
 * ADA guidelines and USPSTF recommendations.
 */

import { EducationalContent } from '../../types';

export const DIABETES_SCREENING: EducationalContent = {
  id: 'concept-diabetes-screening',
  type: 'concept',
  name: 'Diabetes Screening Guidelines',
  alternateNames: ['Diabetes screening', 'Blood sugar screening', 'Prediabetes testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes screening checks your blood sugar to find problems early, when lifestyle changes can prevent or delay diabetes.',
      explanation: `Diabetes means you have too much sugar (glucose) in your blood. Screening finds problems before symptoms appear.

**Why Screen for Diabetes:**
- Early detection means early treatment
- Prediabetes can be reversed with lifestyle changes
- Prevents serious complications (heart disease, kidney problems, vision loss)

**Who Should Be Screened:**
- Adults age 35 or older
- People who are overweight
- Family history of diabetes
- Women who had diabetes during pregnancy
- Certain ethnic groups (Black, Hispanic, Asian, Native American)

**Diabetes Tests:**

**Fasting Blood Sugar**
- No food for 8 hours before test
- Done in morning
- Quick blood test

**HbA1c (Hemoglobin A1c)**
- No fasting needed
- Shows average blood sugar over 3 months
- Simple blood test

**Glucose Tolerance Test**
- Drink sugary liquid
- Blood sugar measured over time
- More detailed test

**Test Results:**

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting Sugar | <100 | 100-125 | ≥126 |
| HbA1c | <5.7% | 5.7-6.4% | ≥6.5% |

**How Often:**
- Every 3 years if normal
- Every year if prediabetes
- More often if high risk`,
      keyTerms: [
        { term: 'diabetes', definition: 'Condition with high blood sugar levels' },
        { term: 'prediabetes', definition: 'Blood sugar higher than normal but not yet diabetes' },
        { term: 'HbA1c', definition: 'Blood test showing average blood sugar over 3 months' },
        { term: 'fasting blood sugar', definition: 'Blood sugar after not eating for 8 hours' },
        { term: 'glucose', definition: 'Sugar in blood that body uses for energy' },
      ],
      analogies: [
        'Prediabetes is like a warning light on your car - time to take action before major damage.',
        'HbA1c is like a report card for your blood sugar over the past 3 months.',
      ],
      examples: [
        'Sarah had prediabetes. With diet changes and exercise, she avoided developing diabetes.',
        'A screening test found high blood sugar in Carlos. Treatment prevented complications.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes screening uses HbA1c, fasting plasma glucose, or oral glucose tolerance testing to identify prediabetes and diabetes in at-risk adults, with evidence supporting early intervention.',
      explanation: `**Screening Recommendations (USPSTF & ADA):**

*Who to Screen:*
- All adults age 35+ (USPSTF Grade B)
- Earlier if overweight + one risk factor (ADA)
- Repeat every 3 years if normal
- Annually if prediabetes

*Risk Factors for Earlier Screening:*
- Overweight or obese (BMI ≥25, ≥23 for Asian Americans)
- First-degree relative with diabetes
- High-risk race/ethnicity (Black, Hispanic, Native American, Asian American, Pacific Islander)
- Physical inactivity
- Women with gestational diabetes history or PCOS
- Hypertension (≥140/90) or on therapy
- HDL <35 or TG >250
- Women with CVD history
- Conditions associated with insulin resistance (PCOS, acanthosis nigricans)
- Other: History of CVD, HTN

**Diagnostic Tests:**

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting Plasma Glucose | <100 mg/dL | 100-125 mg/dL | ≥126 mg/dL |
| HbA1c | <5.7% | 5.7-6.4% | ≥6.5% |
| OGTT (2-hour) | <140 mg/dL | 140-199 mg/dL | ≥200 mg/dL |
| Random Plasma Glucose | - | - | ≥200 + symptoms |

*Test Selection:*
- HbA1c: Convenient, no fasting, reflects 3-month average
- FPG: Standard, requires fasting
- OGTT: More sensitive, especially in pregnancy
- Random: Used when classic symptoms present

**When to Repeat:**
- Normal results: Every 3 years
- Prediabetes: Every year
- Risk factors present: More frequent

**Gestational Diabetes Screening:**
- Screen at 24-28 weeks pregnancy
- 1-hour 50g glucose challenge test
- If positive, follow with 3-hour 100g OGTT`,
      keyTerms: [
        { term: 'OGTT', definition: 'Oral glucose tolerance test; measures blood sugar after drinking glucose solution' },
        { term: 'PCOS', definition: 'Polycystic ovary syndrome; condition associated with insulin resistance' },
        { term: 'acanthosis nigricans', definition: 'Dark, velvety skin patches indicating insulin resistance' },
        { term: 'FPG', definition: 'Fasting plasma glucose; blood sugar after fasting' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Diabetes screening implementation requires understanding test limitations, confirming abnormal results, and integrating screening with cardiovascular risk assessment while addressing diagnostic criteria nuances.',
      explanation: `**Test Limitations & Interpretation:**

*HbA1c Limitations:*
- May be inaccurate with:
  - Anemia (iron, B12 deficiency)
  - Recent blood transfusion
  - Hemoglobinopathies (sickle cell, thalassemia)
  - Pregnancy
  - Chronic kidney disease stages 4-5
  - Recent illness/stress

*Confirmatory Testing:*
- Repeat test on different day unless unequivocal hyperglycemia
- Same test or different test acceptable
- Two abnormal results confirm diagnosis

**Diagnostic Nuances:**

*Asymptomatic vs Symptomatic:*
- Asymptomatic: Two tests required
- Classic symptoms + random glucose ≥200: Single test sufficient

*Classic Diabetes Symptoms:*
- Polyuria (excessive urination)
- Polydipsia (excessive thirst)
- Unintentional weight loss
- Polyphagia (excessive hunger)

**Prediabetes Management:**
- Lifestyle modification: 5-7% weight loss, 150 min/week activity
- Metformin consideration (especially BMI ≥35, <60 years, or women with gestational diabetes history)
- Annual rescreening for progression to diabetes

**Type 1 vs Type 2 Considerations:**

*Adult Type 1 Diabetes:*
- Consider in lean adults with rapid progression
- Check autoantibodies if uncertain
- C-peptide testing for insulin secretion
- Ketosis/prone to ketosis suggests type 1

*MODY (Maturity-Onset Diabetes of the Young):*
- Consider young-onset with strong family history
- Genetic testing
- Different treatment implications

**Screening in Comorbid Conditions:**

*Cystic Fibrosis-Related Diabetes:*
- Start screening at age 10
- Annual OGTT recommended

*Pancreatitis/Pancreatectomy:*
- Secondary diabetes (Type 3c)
- Screen after episodes
- May require insulin early

**Medication-Induced Hyperglycemia:**
- Glucocorticoids
- Antipsychotics
- Immunotherapy (checkpoint inhibitors)
- Monitor closely when started`,
      keyTerms: [
        { term: 'polyuria', definition: 'Excessive urination; classic diabetes symptom' },
        { term: 'polydipsia', definition: 'Excessive thirst; classic diabetes symptom' },
        { term: 'polyphagia', definition: 'Excessive hunger; classic diabetes symptom' },
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; genetic form of diabetes' },
        { term: 'C-peptide', definition: 'Marker of endogenous insulin production' },
      ],
      analogies: [],
      clinicalNotes: 'Confirm abnormal tests. Consider HbA1c limitations. Screen family members of type 1. Distinguish type 1 vs type 2 in atypical presentations.',
    },
    4: {
      level: 4,
      summary: 'Advanced diabetes screening incorporates risk prediction models, screening for complications, and management of special populations while addressing controversies in diagnostic thresholds.',
      explanation: `**Risk Prediction Models:**

*ADA Risk Test:*
- Age, sex, BMI, family history, activity, hypertension
- Available online for patient use
- 7-question screener

*FINDRISC:*
- Finnish Diabetes Risk Score
- Validated in multiple populations
- Age, BMI, waist, activity, diet, meds, family history, glucose

**Complication Screening (Once Diagnosed):**

*Annual Screening:*
- HbA1c (quarterly if not at goal)
- Lipid panel
- Urinary albumin-to-creatinine ratio (kidney disease)
- Comprehensive eye exam (retinopathy)
- Foot exam (neuropathy, peripheral artery disease)
- Blood pressure at every visit

*Blood Pressure Targets:*
- <140/90 for most
- <130/80 if high-risk (young, albuminuria)

*Lipid Targets:*
- Moderate-intensity statin for all 40-75
- High-intensity if multiple risk factors

**Special Populations:**

*Pregnancy (Gestational Diabetes):*
- Screen at 24-28 weeks (earlier if high risk)
- One-step or two-step approach
- Postpartum: Screen at 4-12 weeks, then every 1-3 years

*Older Adults:*
- Individualize HbA1c targets
- Consider life expectancy, comorbidities
- Hypoglycemia risk prioritization
- Targets may be relaxed (HbA1c <8-8.5%)

*Hospitalized Patients:*
- Stress hyperglycemia common
- HbA1c may differentiate pre-existing vs stress
- Don't diagnose based solely on hospital glucose

**Controversies & Nuances:**

*Diagnostic Thresholds:*
- Some populations have different HbA1c distributions
- Racial/ethnic differences in HbA1c
- Consider using glucose if HbA1c discordant

*Prediabetes Debate:*
- Term concerns (pathologizing normal variation)
- Overdiagnosis concerns
- Cost-effectiveness of labeling

*Screening Intervals:*
- 3 years for normal: May miss rapid progressors
- Annual screening recommended by ADA for overweight
- Insurance coverage differences

**Technology Integration:**
- CGM for screening in high-risk
- Home glucose monitoring
- Digital health applications
- Continuous glucose trends in prediabetes`,
      keyTerms: [
        { term: 'FINDRISC', definition: 'Finnish Diabetes Risk Score; validated diabetes risk prediction tool' },
        { term: 'UACR', definition: 'Urinary albumin-to-creatinine ratio; kidney disease marker' },
        { term: 'CGM', definition: 'Continuous glucose monitor; measures glucose continuously' },
        { term: 'stress hyperglycemia', definition: 'Transient high blood sugar during illness/hospitalization' },
      ],
      analogies: [],
      clinicalNotes: 'Individualize targets in older adults. Screen for complications annually. Don diagnose diabetes solely on hospital glucose. Consider CGM in high-risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary diabetes screening integrates multi-omics approaches, artificial intelligence risk prediction, novel biomarkers, and precision medicine while addressing global burden and health equity challenges.',
      explanation: `**Precision Screening Approaches:**

*Genetic Risk:*
- Polygenic risk scores for type 2 diabetes
- TCF7L2 and other risk alleles
- Monogenic diabetes (MODY, neonatal)
- Pharmacogenetic considerations

*Novel Biomarkers:*
- Adiponectin
- Inflammatory markers (IL-6, TNF-alpha)
- MicroRNAs
- Metabolomics signatures

*Multi-omic Integration:*
- Genomic + proteomic + metabolomic
- Machine learning risk models
- EHR-based predictive analytics

**Artificial Intelligence in Screening:**

*Risk Prediction:*
- Retinal imaging for diabetes detection (and complications)
- Natural language processing of clinical notes
- Wearable device data integration
- Predictive modeling in EHRs

*Continuous Monitoring:*
- Smartwatch glucose monitoring
- Non-invasive glucose sensing research
- Digital biomarkers

**Screening Controversies & Evolution:**

*Diagnostic Criteria Evolution:*
- HbA1c threshold debates
- Ethnic/racial differences in HbA1c
- Alternative markers (1,5-anhydroglucitol)
- Combining multiple markers

*Prediabetes Management:*
- Pharmacologic intervention trials
- Tirzepatide for diabetes prevention
- Bariatric surgery for high-risk
- Intensive lifestyle programs (DPP outcomes)

**Global Considerations:**

*Regional Variations:*
- South Asian: Lower BMI thresholds
- Asian American: Increased risk at lower BMI
- Genetic susceptibility differences
- Cultural dietary patterns

*Resource-Limited Settings:*
- Point-of-care testing
- Task-shifting to community health workers
- Cost-effective screening strategies

**Emerging Modalities:**

*Saliva/Breath Testing:*
- Volatile organic compounds
- Non-invasive screening research

*Eye-Based Screening:*
- Retinal changes precede hyperglycemia
- AI-driven retinal imaging
- Simultaneous complication screening

**Screening for Complications:**

*Advanced Neuropathy Testing:*
- Corneal confocal microscopy
- Small fiber neuropathy detection
- Early intervention opportunities

*Cardiovascular Autonomic Neuropathy:*
- Heart rate variability
- Early marker of complications
*Beta-cell Function Testing:*
- C-peptide for insulin secretion
- Proinsulin-to-insulin ratio
- Predicting progression

**Implementation Science:**

*Screening Programs:*
- Workplace screening
- Community-based programs
- Pharmacy-based screening
- Digital health outreach

*Addressing Disparities:*
- Cultural tailoring
- Language accessibility
- Social determinants integration
- Mobile health units

**Future Directions:**

*Screening for At-Risk:*
- Prediabetes treatment evolution
- Prevention trials (drug + lifestyle)
- Biomarker-guided therapy

*Precision Prevention:*
- Genetic risk stratification
- Microbiome modulation
- Epigenetic interventions
- Personalized nutrition`,
      keyTerms: [
        { term: 'TCF7L2', definition: 'Transcription factor 7-like 2; strongest common genetic risk factor for type 2 diabetes' },
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk from multiple variants' },
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; monogenic diabetes' },
        { term: 'digital biomarkers', definition: 'Health measures collected via digital devices' },
      ],
      analogies: [],
      clinicalNotes: 'Consider ethnic differences in BMI thresholds and HbA1c. AI retinal screening promising. Genetic testing for monogenic diabetes when suspected. Precision approaches emerging.',
    },
  },

  media: [
    {
      id: 'diabetes-screening-flowchart',
      type: 'diagram',
      filename: 'diabetes-screening-algorithm.svg',
      title: 'Diabetes Screening Algorithm',
      description: 'Visual algorithm for diabetes screening and diagnosis',
    },
  ],

  citations: [
    {
      id: 'ada-standards',
      type: 'website',
      title: 'Standards of Care in Diabetes',
      source: 'American Diabetes Association',
      url: 'https://diabetesjournals.org/collection/standards-of-care-in-diabetes',
      accessedDate: '2025-01-25',
    },
    {
      id: 'uspstf-diabetes',
      type: 'website',
      title: 'Abnormal Blood Glucose and Type 2 Diabetes Mellitus: Screening',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abnormal-blood-glucose-and-type-2-diabetes-mellitus-screening',
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'concept-exercise-prevention', targetType: 'concept', relationship: 'related', label: 'Exercise for Prevention' },
    { targetId: 'concept-nutrition-prevention', targetType: 'concept', relationship: 'related', label: 'Nutrition for Prevention' },
  ],

  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['preventive medicine', 'endocrinology', 'screening', 'diabetes'],
    keywords: ['diabetes screening', 'prediabetes', 'HbA1c', 'blood sugar', 'glucose testing', 'ADA guidelines'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'endocrinology'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
