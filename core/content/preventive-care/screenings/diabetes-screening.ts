/**
 * Diabetes Screening
 *
 * Comprehensive education on diabetes and prediabetes screening
 * based on USPSTF guidelines and ADA recommendations.
 */

import { EducationalContent } from '../../types';

export const DIABETES_SCREENING: EducationalContent = {
  id: 'concept-diabetes-screening',
  type: 'concept',
  name: 'Diabetes Screening',
  alternateNames: ['Type 2 diabetes screening', 'Prediabetes screening', 'Blood sugar screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes screening checks your blood sugar levels to find diabetes or prediabetes early, when lifestyle changes can make a big difference.',
      explanation: `Diabetes is when your body has trouble controlling blood sugar (glucose). Screening can find it early before serious problems develop.

**Types of Diabetes:**
- **Type 1**: Body does not make insulin (usually starts young)
- **Type 2**: Body does not use insulin well (most common, can be prevented)
- **Prediabetes**: Blood sugar higher than normal but not yet diabetes

**Why Get Screened:**
- Diabetes often has no symptoms at first
- High blood sugar damages your body over time
- Early treatment prevents complications
- Prediabetes can be reversed with lifestyle changes

**Who Should Get Screened:**
- Adults 35-70 who are overweight or obese
- Anyone with risk factors:
  - Family history of diabetes
  - High blood pressure
  - History of gestational diabetes
  - Certain ethnic backgrounds (higher risk)

**Screening Tests:**
- **Fasting blood sugar**: Blood test after not eating overnight
- **A1C test**: Shows average blood sugar over 3 months
- **Glucose tolerance test**: Blood sugar measured after drinking sweet liquid

**Understanding Results:**

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting glucose | <100 | 100-125 | 126+ |
| A1C | <5.7% | 5.7-6.4% | 6.5%+ |

**What You Can Do:**
- Healthy diet (less sugar, more vegetables)
- Regular exercise (150 minutes/week)
- Maintain healthy weight
- Take medication if prescribed`,
      keyTerms: [
        { term: 'diabetes', definition: 'A condition where your body cannot properly control blood sugar levels' },
        { term: 'prediabetes', definition: 'Blood sugar levels higher than normal but not high enough to be diabetes' },
        { term: 'insulin', definition: 'A hormone that helps sugar enter your cells for energy' },
      ],
      analogies: [
        'Insulin is like a key that opens the door to let sugar into your cells. In diabetes, either the key is missing or the lock is broken.',
      ],
      examples: [
        'Maria was diagnosed with prediabetes at age 45. By eating healthier and walking 30 minutes daily, she lost 15 pounds and her blood sugar returned to normal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes screening identifies individuals with prediabetes or asymptomatic type 2 diabetes, enabling interventions that can prevent progression and reduce microvascular and macrovascular complications.',
      explanation: `Type 2 diabetes affects over 37 million Americans, with another 96 million having prediabetes. Most people with prediabetes are unaware, making screening essential.

**Screening Recommendations:**

*USPSTF (Grade B):*
- Screen adults 35-70 years with overweight/obesity
- Every 3 years if normal

*ADA Recommendations:*
- Screen all adults ≥35 years regardless of weight
- Consider earlier if risk factors present
- Every 3 years if normal

**Risk Factors:**
- Overweight/obesity (BMI ≥25, or ≥23 in Asian Americans)
- First-degree relative with diabetes
- High-risk ethnicity (African American, Hispanic, Native American, Asian, Pacific Islander)
- History of cardiovascular disease
- Hypertension (≥140/90 or on treatment)
- HDL <35 mg/dL or triglycerides >250 mg/dL
- Polycystic ovary syndrome (PCOS)
- Physical inactivity
- History of prediabetes or gestational diabetes

**Diagnostic Criteria:**

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting plasma glucose | <100 mg/dL | 100-125 (IFG) | ≥126 |
| 2-hour OGTT | <140 mg/dL | 140-199 (IGT) | ≥200 |
| HbA1c | <5.7% | 5.7-6.4% | ≥6.5% |
| Random glucose | - | - | ≥200 + symptoms |

*Confirmation:*
- Requires two abnormal tests (same or different)
- Unless unequivocal hyperglycemia with symptoms

**Test Comparisons:**

*HbA1c:*
- No fasting required
- Less day-to-day variation
- May miss some cases
- Affected by hemoglobinopathies, anemia

*Fasting Glucose:*
- Inexpensive
- Requires fasting
- More variability

*OGTT:*
- Most sensitive
- Inconvenient (2-hour test)
- Higher cost
- Detects IGT (not detected by fasting or A1c)

**Prediabetes Management:**

*Lifestyle Intervention (First-Line):*
- Diabetes Prevention Program (DPP): 58% reduction in progression
- Goal: 7% weight loss
- 150 minutes/week moderate activity
- Dietary counseling

*Metformin:*
- May be considered for prediabetes
- Especially: BMI ≥35, age <60, prior GDM
- Less effective than lifestyle

**Prevention of Complications:**
- Retinopathy: Annual eye exams once diagnosed
- Nephropathy: Annual urine albumin, eGFR
- Neuropathy: Annual foot exam
- Cardiovascular: BP and lipid management`,
      keyTerms: [
        { term: 'HbA1c', definition: 'Hemoglobin A1c; reflects average blood sugar over 2-3 months', pronunciation: 'A-one-C' },
        { term: 'IFG', definition: 'Impaired fasting glucose; fasting glucose 100-125 mg/dL' },
        { term: 'IGT', definition: 'Impaired glucose tolerance; 2-hour glucose 140-199 mg/dL on OGTT' },
        { term: 'DPP', definition: 'Diabetes Prevention Program; landmark trial showing lifestyle prevents diabetes' },
      ],
      analogies: [
        'HbA1c is like a blood sugar diary that your red blood cells keep for the past 3 months.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes screening utilizes fasting glucose, HbA1c, or OGTT with distinct test characteristics, targeting high-risk populations while implementing evidence-based lifestyle and pharmacologic interventions for prediabetes to prevent progression to overt diabetes and its complications.',
      explanation: `**Pathophysiology:**

*Type 2 Diabetes Development:*
1. Insulin resistance (peripheral tissues)
2. Compensatory hyperinsulinemia
3. Beta-cell dysfunction
4. Relative insulin deficiency
5. Hyperglycemia

*Prediabetes:*
- IFG: Primarily hepatic insulin resistance
- IGT: Primarily peripheral insulin resistance
- Both: Beta-cell dysfunction

**Diagnostic Test Characteristics:**

| Test | Sensitivity | Specificity | Notes |
|------|-------------|-------------|-------|
| FPG ≥126 | 45-65% | 95%+ | Misses IGT |
| A1c ≥6.5% | 40-60% | 95%+ | May miss early disease |
| OGTT ≥200 | Reference | Reference | Most sensitive |

*When Tests Disagree:*
- More advanced test (OGTT) may reveal diagnosis
- Repeat testing recommended
- Consider which test is most appropriate

**A1c Limitations:**

*Falsely Low:*
- Hemolysis
- Blood loss/transfusion
- Hemoglobin variants (some)
- Pregnancy (second/third trimester)
- CKD/hemodialysis (some assays)

*Falsely High:*
- Iron deficiency anemia
- Some hemoglobin variants
- Splenectomy

*When to Use Glucose Instead:*
- Hemoglobinopathy
- Significant anemia
- Pregnancy
- Recent transfusion

**Risk Stratification Tools:**

*ADA Risk Test:*
- Questionnaire-based
- Age, BMI, family history, ethnicity, GDM, HTN
- Score ≥5: Recommend testing

*Finnish Diabetes Risk Score (FINDRISC):*
- Validated internationally
- Predicts 10-year risk

**Diabetes Prevention Program (DPP):**

*Intervention:*
- Intensive lifestyle counseling
- Goal: 7% weight loss, 150 min/week activity

*Results at 3 years:*
- Lifestyle: 58% reduction in diabetes
- Metformin: 31% reduction
- Placebo: Reference

*15-year Follow-up:*
- Lifestyle: 27% cumulative reduction
- Metformin: 18% reduction
- Sustained benefit

**Prediabetes Management Algorithm:**

1. Confirm diagnosis (repeat testing)
2. Intensive lifestyle intervention (CDC-recognized DPP)
3. Consider metformin if:
   - BMI ≥35
   - Age <60
   - Prior gestational diabetes
   - Rising A1c despite lifestyle
4. Monitor annually (A1c or FPG)

**Screening in Special Populations:**

*Children/Adolescents:*
- Consider if BMI ≥85th percentile + risk factors
- Use adult criteria
- Type 2 increasing in youth

*Pregnancy:*
- Screen for preexisting diabetes early if risk factors
- Universal GDM screening at 24-28 weeks
- Screen postpartum (6-12 weeks) if GDM

*HIV Infection:*
- Higher diabetes risk
- Screen before and after ART initiation
- Annual screening

**Cardiovascular Risk:**
- Prediabetes = elevated CVD risk
- Diabetes = CVD risk equivalent
- Comprehensive risk factor management essential`,
      keyTerms: [
        { term: 'beta-cell dysfunction', definition: 'Impaired insulin secretion by pancreatic beta cells, central to diabetes development' },
        { term: 'FINDRISC', definition: 'Finnish Diabetes Risk Score; validated questionnaire predicting diabetes risk' },
        { term: 'CDC-recognized DPP', definition: 'Diabetes Prevention Program meeting CDC standards for quality and effectiveness' },
        { term: 'insulin resistance', definition: 'Reduced cellular response to insulin, requiring more insulin to achieve glucose control' },
      ],
      clinicalNotes: 'Use A1c for convenience but consider glucose testing if hemoglobinopathy or anemia present. Refer to CDC-recognized DPP for prediabetes. Consider metformin for high-risk prediabetes. Annual monitoring after prediabetes diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Diabetes prevention and early detection integrate molecular understanding of beta-cell failure, metabolic syndrome pathophysiology, and emerging biomarkers while implementing population-level screening strategies and addressing health disparities in diabetes outcomes.',
      explanation: `**Molecular Pathophysiology:**

*Beta-Cell Failure:*
- Glucotoxicity and lipotoxicity
- ER stress and oxidative stress
- Islet amyloid deposition
- Reduced beta-cell mass (apoptosis)
- Loss of first-phase insulin release

*Insulin Resistance Mechanisms:*
- Ectopic lipid accumulation (liver, muscle)
- Inflammatory cytokines (TNF-α, IL-6)
- Adipokine dysregulation (low adiponectin)
- Mitochondrial dysfunction

*Metabolic Syndrome:*
- Central obesity
- Dyslipidemia (high TG, low HDL)
- Hypertension
- Insulin resistance
- Predicts diabetes and CVD

**Advanced Biomarkers:**

*Glycemic Markers:*
- 1,5-anhydroglucitol (1,5-AG): Postprandial excursions
- Fructosamine: 2-3 week average
- Glycated albumin: Not affected by hemoglobin variants

*Predictive Biomarkers:*
| Marker | Use |
|--------|-----|
| Proinsulin | Beta-cell stress |
| Adiponectin | Insulin sensitivity |
| Fetuin-A | Insulin resistance |
| GGT | Fatty liver, diabetes risk |

*Continuous Glucose Monitoring (CGM):*
- Can detect early dysglycemia
- Time in range metrics
- Not yet standard for screening
- Research applications

**Genetic Risk:**

*Polygenic Risk Scores (PRS):*
- Hundreds of diabetes-associated SNPs
- Can identify high-risk individuals
- May guide early intervention
- Not yet guideline-recommended

*Monogenic Diabetes (MODY):*
- Screen if: Diagnosis <25, autoantibody negative, family history
- Treatment varies by gene
- GCK-MODY: May not need treatment
- HNF1A/HNF4A: Sulfonylurea-responsive

**Prevention Pharmacotherapy:**

*Beyond Metformin:*
| Agent | Evidence |
|-------|----------|
| Metformin | DPP, 31% reduction |
| Acarbose | STOP-NIDDM, 25% reduction |
| Pioglitazone | ACT NOW, 72% reduction, but weight gain |
| Liraglutide | SCALE, weight loss prevents progression |

*GLP-1 Agonists:*
- Weight loss benefits
- May preserve beta-cell function
- Not yet approved for prevention
- Semaglutide in SELECT trial showed CV benefit

**Implementation Strategies:**

*Population-Level Screening:*
- Risk-based questionnaires
- Point-of-care A1c testing
- Pharmacy-based screening
- Community health fairs
- Integration with wellness visits

*CDC National DPP:*
- Standardized curriculum
- In-person, online, or combined
- Medicare covers for prediabetes
- Proven cost-effective

**Health Disparities:**

*Prevalence Differences:*
- Non-Hispanic Black: 11.7%
- Hispanic: 11.8%
- Asian American: 9.2%
- Non-Hispanic White: 7.5%

*Contributing Factors:*
- Access to care
- Food environment
- Cultural factors
- Social determinants
- Obesity prevalence

*Tailored Interventions:*
- Culturally adapted DPP
- Community health workers
- Faith-based programs
- Addressing food insecurity

**Gestational Diabetes:**

*Postpartum Follow-up:*
- 50% develop T2DM within 10 years
- OGTT at 4-12 weeks postpartum
- Annual screening thereafter
- Lifestyle intervention crucial

*Children of GDM Mothers:*
- Higher diabetes risk
- Screen if overweight + risk factors
- Intergenerational cycle`,
      keyTerms: [
        { term: 'glucotoxicity', definition: 'Toxic effects of chronic hyperglycemia on beta cells and insulin sensitivity' },
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; monogenic diabetes with distinct treatment implications' },
        { term: 'GLP-1 agonist', definition: 'Glucagon-like peptide-1 receptor agonist; promotes insulin secretion, weight loss' },
        { term: 'time in range', definition: 'CGM metric measuring percentage of time glucose is in target range' },
      ],
      clinicalNotes: 'Consider CGM-derived metrics in research settings. Screen for MODY if young, autoantibody-negative, strong family history. Ensure postpartum follow-up for GDM. Refer to Medicare-covered DPP for prediabetes.',
    },
    5: {
      level: 5,
      summary: 'Precision diabetes prevention integrates polygenic risk assessment, metabolomic biomarkers, beta-cell functional imaging, and AI-driven risk stratification while addressing implementation science gaps, healthcare system capacity, and the translation of prevention trials to population-level diabetes reduction.',
      explanation: `**Precision Prevention:**

*Polygenic Risk Scores:*
- 400+ diabetes-associated variants
- Stratifies risk beyond clinical factors
- May identify intervention candidates earlier
- Ethnic-specific calibration needed
- Implementation challenges

*Metabolomics:*
- Branched-chain amino acids predict diabetes
- Aromatic amino acids
- Lipid species profiles
- May identify mechanisms and targets

*Proteomics:*
- Multi-protein panels
- Machine learning-derived scores
- Research validation ongoing

**Beta-Cell Assessment:**

*Functional Testing:*
- OGTT-derived indices (HOMA-β, insulinogenic index)
- IV glucose tolerance test
- Arginine stimulation test

*Imaging:*
- PET imaging of beta-cell mass (research)
- May identify individuals approaching failure
- Intervention before overt hyperglycemia

**Early Intervention:**

*Very Early Diabetes:*
- Some propose treating at A1c 5.7-6.4%
- Preserve beta-cell function
- Metformin, GLP-1 agonists
- Clinical trials ongoing

*Remission Concept:*
- DiRECT trial: Intensive weight loss → remission
- 46% achieved remission at 1 year with 15kg+ loss
- Beta-cell recovery if intervened early
- Redefining diabetes as potentially reversible

**Technology Integration:**

*AI Risk Prediction:*
- Machine learning models
- EHR data integration
- Identify high-risk for outreach
- Continuous refinement

*Digital DPP:*
- Online and app-based programs
- Comparable efficacy to in-person
- Greater reach
- Lower cost
- Adherence challenges

*CGM in Prevention:*
- Real-time feedback on diet/exercise
- May enhance lifestyle intervention
- Emerging evidence
- Cost barrier

**Implementation Science:**

*Current Gaps:*
- Only 3% of those with prediabetes in DPP
- Low referral rates
- Program availability
- Insurance coverage variations

*Health System Strategies:*
- EHR-based identification
- Automatic referrals
- Population health dashboards
- Quality metrics inclusion

*Community Strategies:*
- YMCA-based DPP
- Church-based programs
- Worksite wellness
- Pharmacy partnerships

**Policy Considerations:**

*Coverage:*
- Medicare covers DPP
- Medicaid coverage varies by state
- Commercial insurance inconsistent

*Food Policy:*
- Sugar-sweetened beverage taxes
- Nutrition labeling
- SNAP incentives for healthy food
- School nutrition standards

**Global Perspective:**

*Epidemic Proportions:*
- 537 million adults with diabetes globally
- 643 million projected by 2030
- Low/middle-income countries: fastest growth

*Scalable Interventions:*
- Task-shifting to community workers
- mHealth interventions
- Low-cost screening strategies
- Adaptation of DPP to resource-limited settings

**Research Frontiers:**

1. Gene-environment interactions
2. Microbiome and diabetes risk
3. Epigenetic modifications
4. Immune modulation for prevention
5. Personalized prevention algorithms
6. Early intervention with novel agents

**Quality Metrics:**

*Screening:*
- Screening rate in eligible population
- Prediabetes identification rate

*Prevention:*
- DPP referral rate
- DPP completion rate
- Weight loss achievement

*Outcomes:*
- Conversion rate (prediabetes to diabetes)
- Population A1c distribution
- Disparities in screening/prevention`,
      keyTerms: [
        { term: 'DiRECT trial', definition: 'Diabetes Remission Clinical Trial; showed intensive weight loss can achieve diabetes remission' },
        { term: 'branched-chain amino acids', definition: 'Metabolites (leucine, isoleucine, valine) elevated years before diabetes diagnosis' },
        { term: 'insulinogenic index', definition: 'Ratio of insulin to glucose increment during OGTT; assesses early insulin secretion' },
        { term: 'diabetes remission', definition: 'Return to non-diabetic glucose levels without glucose-lowering medications' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Screen high-risk adults systematically
- Use appropriate test for patient (A1c vs glucose)
- Refer all prediabetes to CDC-recognized DPP
- Consider metformin for high-risk prediabetes
- Ensure GDM postpartum follow-up
- Address health disparities with targeted outreach
- Track quality metrics: screening and referral rates
- Stay current: CGM, AI risk models, remission strategies
- Advocate for coverage of prevention programs`,
    },
  },

  media: [
    {
      id: 'diabetes-screening-algorithm',
      type: 'diagram',
      filename: 'diabetes-screening-algorithm.svg',
      title: 'Diabetes Screening Algorithm',
      description: 'Flowchart for diabetes and prediabetes screening decisions',
    },
  ],

  citations: [
    {
      id: 'uspstf-diabetes-2021',
      type: 'article',
      title: 'Screening for Prediabetes and Type 2 Diabetes: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-24',
    },
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      authors: ['American Diabetes Association'],
      source: 'Diabetes Care',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Screening' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['preventive medicine', 'endocrinology', 'screening'],
    keywords: ['diabetes', 'prediabetes', 'screening', 'A1c', 'glucose', 'prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
