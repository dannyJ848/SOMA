/**
 * Health Risk Calculators
 *
 * Comprehensive education on clinical risk assessment tools, calculators,
 * and decision support instruments used in preventive medicine.
 */

import { EducationalContent } from '../../types';

export const HEALTH_RISK_CALCULATORS: EducationalContent = {
  id: 'preventive-health-risk-calculators',
  type: 'concept',
  name: 'Health Risk Calculators',
  alternateNames: ['Clinical risk calculators', 'Medical risk assessment tools', 'Risk prediction models', 'Decision support tools'],

  levels: {
    1: {
      level: 1,
      summary: 'Health risk calculators are tools that help doctors figure out your chances of getting certain diseases so they can help you stay healthy.',
      explanation: `Doctors use special tools called risk calculators to understand how likely you are to develop certain health problems. These tools look at different things about your health and give a number that shows your risk.

**What Are Risk Calculators?**
Risk calculators are like math formulas that take information about you and estimate your chance of getting a disease. They help doctors know who needs extra care or treatment.

**What Information Do They Use?**
- Your age
- Whether you are male or female
- Your weight and height
- Blood pressure numbers
- Cholesterol levels
- Whether you smoke
- Family history of disease
- Other health conditions you have

**Common Risk Calculators:**

*Heart Disease Risk:*
- Looks at your chance of having a heart attack or stroke
- Uses blood pressure, cholesterol, smoking, and diabetes

*Diabetes Risk:*
- Checks if you might develop diabetes
- Looks at weight, family history, and activity level

*Osteoporosis Risk:*
- Estimates chance of breaking a bone
- Important for older adults, especially women

**How Results Are Shown:**
- As a percentage: "You have a 10% chance in the next 10 years"
- This means: Out of 100 people like you, about 10 would get the disease

**Why This Matters:**
- Helps you and your doctor make a plan
- Shows if you need medicine or lifestyle changes
- Some insurance covers treatments based on risk level
- Motivates healthy changes when you see your numbers

**What You Can Do:**
- Ask your doctor about your risk scores
- Understand what the numbers mean
- Work on the things you can change (diet, exercise, smoking)
- Get recommended tests and checkups`,
      keyTerms: [
        { term: 'risk calculator', definition: 'A tool that estimates your chances of getting a health problem' },
        { term: 'risk factor', definition: 'Something that increases your chance of getting a disease' },
        { term: 'percentage', definition: 'A number out of 100 that shows how likely something is' },
      ],
      analogies: [
        'A risk calculator is like a weather forecast for your health - it uses information to predict what might happen.',
        'Think of risk factors like ingredients in a recipe - the more unhealthy ingredients, the worse the final dish.',
      ],
      examples: [
        'Tom used a heart disease calculator at his checkup. It showed his 10-year risk was 15%. His doctor helped him start exercising and eating better to lower that number.',
      ],
      patientCounselingPoints: [
        'Risk calculators help you and your doctor make better health decisions',
        'Your risk can change if you make healthy lifestyle changes',
        'A high risk does not mean you will definitely get sick',
        'Ask your doctor to explain your risk numbers',
      ],
    },
    2: {
      level: 2,
      summary: 'Health risk calculators are validated clinical tools that combine multiple risk factors to estimate disease probability, guiding shared decision-making about prevention, screening, and treatment.',
      explanation: `Risk calculators are evidence-based tools derived from large population studies that help clinicians and patients make informed healthcare decisions.

**How Risk Calculators Work:**

*Development Process:*
1. Large groups of people are studied over time
2. Researchers identify which factors predict disease
3. Statistical models are created and tested
4. Calculators are validated in different populations

*Key Components:*
- Input variables (age, sex, lab values, etc.)
- Mathematical algorithm
- Output: Risk estimate (percentage or category)

**Major Risk Calculator Categories:**

**Cardiovascular Risk:**

*Pooled Cohort Equations (PCE):*
- Estimates 10-year ASCVD risk
- Inputs: Age, sex, race, cholesterol, BP, diabetes, smoking
- Categories: Low (<5%), Borderline (5-7.5%), Intermediate (7.5-20%), High (>20%)
- Guides statin therapy decisions

*Framingham Risk Score:*
- Original CVD risk calculator
- Still used in some settings
- Less diverse validation population

**Diabetes Risk:**

*ADA Risk Test:*
- Simple questionnaire-based
- Identifies candidates for glucose testing
- Inputs: Age, sex, family history, BMI, activity, history of gestational diabetes

*Finnish Diabetes Risk Score (FINDRISC):*
- Predicts 10-year diabetes risk
- Validated in multiple populations
- Guides lifestyle intervention

**Fracture Risk:**

*FRAX:*
- 10-year fracture probability
- Hip fracture and major osteoporotic fracture
- Inputs: Age, sex, BMI, prior fracture, family history, smoking, alcohol, glucocorticoids, RA, secondary osteoporosis
- Can include bone density if available
- Treatment thresholds defined

**Cancer Risk:**

*Breast Cancer (Gail Model):*
- 5-year and lifetime risk
- Inputs: Age, age at menarche, age at first birth, family history, prior biopsy
- Guides chemoprevention discussions

*Colorectal Cancer:*
- Various family history-based tools
- Guides screening timing

**Understanding Risk Numbers:**

*Absolute vs Relative Risk:*
- Absolute: Your actual chance (e.g., 10% in 10 years)
- Relative: Compared to average (e.g., 2x higher than average)
- Absolute risk more useful for decisions

*Number Needed to Treat (NNT):*
- How many people need treatment to prevent 1 event
- Lower NNT = more beneficial treatment
- Example: If 10% risk reduced to 7% with treatment, NNT = 33

**Limitations of Risk Calculators:**
- May not apply to all populations
- Cannot predict who specifically will get disease
- Do not capture all risk factors
- Static (do not track changes over time)

**Shared Decision-Making:**
- Present absolute risk in understandable terms
- Use visual aids when helpful
- Discuss benefits AND harms of interventions
- Respect patient preferences`,
      keyTerms: [
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease; includes heart attacks, strokes, and peripheral artery disease' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; estimates 10-year probability of fractures' },
        { term: 'NNT', definition: 'Number needed to treat; people who must receive treatment to prevent one adverse event' },
        { term: 'absolute risk', definition: 'Actual probability of an event occurring' },
        { term: 'relative risk', definition: 'Risk compared to a reference group' },
      ],
      analogies: [
        'Risk calculators are like actuarial tables insurance companies use - they estimate likelihood based on population data.',
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical risk calculators integrate epidemiological data, biostatistical methods, and validation studies to provide evidence-based decision support, though understanding their derivation, calibration, and limitations is essential for appropriate application.',
      explanation: `**Risk Prediction Model Development:**

*Derivation Cohorts:*
- Large prospective studies
- Representative populations
- Adequate follow-up for outcomes
- High-quality data collection

*Statistical Methods:*
- Cox proportional hazards (time-to-event)
- Logistic regression (binary outcomes)
- Machine learning approaches (emerging)

*Model Performance Metrics:*
| Metric | Meaning | Ideal |
|--------|---------|-------|
| C-statistic (AUC) | Discrimination | >0.7 |
| Calibration | Predicted vs observed | Slope = 1 |
| Net reclassification | Clinical utility | Positive |

**Major Cardiovascular Calculators:**

*Pooled Cohort Equations (2013):*
- Derivation: ARIC, CHS, CARDIA, Framingham
- Predicts: MI, stroke, CHD death
- Validation: Moderate calibration, some overestimation
- Race: White, African American (others use White)

*MESA Calculator:*
- Adds coronary artery calcium
- Better discrimination in intermediate risk
- Useful when CAC available

*SCORE2 (European):*
- Age-specific calibration
- Includes non-cardiovascular mortality
- Regional recalibration available

**Fracture Risk Assessment:**

*FRAX Details:*
- Developed: University of Sheffield
- Derivation: 12 international cohorts
- Inputs: Clinical risk factors +/- femoral neck BMD
- Outputs: 10-year hip fracture, major osteoporotic fracture

*Treatment Thresholds (NOF):*
- Hip fracture risk ≥3%
- Major osteoporotic fracture risk ≥20%
- OR T-score ≤-2.5
- OR prior hip/vertebral fracture

*FRAX Limitations:*
- Does not capture dose-response (fractures, glucocorticoids)
- Does not include fall risk
- Trabecular bone score adjustment available

**Cancer Risk Models:**

*Breast Cancer:*
| Model | Inputs | Use |
|-------|--------|-----|
| Gail | Age, history, biopsies | Chemoprevention eligibility |
| Tyrer-Cuzick | + Hormonal, density | Supplemental screening |
| BOADICEA | + Genetic testing | Genetic counseling |

*Lung Cancer:*
- PLCOm2012: Validated for screening eligibility
- LCRAT: Alternative model
- Both predict lung cancer risk to refine CT screening selection

**Diabetes Risk:**

*FINDRISC:*
- Score 0-26
- ≥15: High risk (30% 10-year incidence)
- Guides lifestyle intervention referral

*ADA Risk Calculator:*
- Identifies undiagnosed diabetes
- Sensitivity ~80% for diabetes

**Kidney Disease:**

*KFRE (Kidney Failure Risk Equation):*
- Predicts progression to ESRD
- Inputs: Age, sex, eGFR, albuminuria
- 2-year and 5-year predictions
- Guides nephrology referral, dialysis planning

**Bleeding Risk:**

*HAS-BLED:*
- Bleeding risk in atrial fibrillation
- Contextualizes anticoagulation decisions
- Does not contraindicate anticoagulation

*ORBIT:*
- Alternative bleeding risk score
- Similar components

**Stroke Risk:**

*CHA₂DS₂-VASc:*
- Stroke risk in atrial fibrillation
- Guides anticoagulation decisions
- Score ≥2 (men) or ≥3 (women): Anticoagulation recommended

**Calculator Limitations:**

*Calibration Drift:*
- Populations change over time
- Treatments improve outcomes
- Models may overestimate current risk

*Missing Variables:*
- Social determinants not captured
- Novel biomarkers not included
- Genetic risk scores emerging

*Generalizability:*
- May not apply to all ethnic groups
- Local recalibration sometimes needed

**Implementation Considerations:**

*Point-of-Care Integration:*
- EHR-embedded calculators
- Automated data population
- Alert systems

*Patient Communication:*
- Use absolute risk
- Visual formats (icon arrays)
- Avoid percentages alone
- Frame positively and negatively`,
      keyTerms: [
        { term: 'C-statistic', definition: 'Measure of model discrimination; probability that a randomly selected patient with event has higher predicted risk than one without' },
        { term: 'calibration', definition: 'Agreement between predicted and observed event rates across risk groups' },
        { term: 'derivation cohort', definition: 'Population used to develop a risk prediction model' },
        { term: 'CHA₂DS₂-VASc', definition: 'Stroke risk score for atrial fibrillation guiding anticoagulation decisions' },
        { term: 'KFRE', definition: 'Kidney Failure Risk Equation predicting progression to end-stage renal disease' },
      ],
      clinicalNotes: 'Use calculators as decision support, not decision replacement. Recognize limitations in populations different from derivation cohorts. Communicate risk in patient-friendly terms. Document calculator use and results in clinical notes.',
    },
    4: {
      level: 4,
      summary: 'Advanced risk prediction integrates traditional calculators with imaging biomarkers, genetic risk scores, and machine learning models, while addressing calibration challenges, health equity implications, and the translation from model development to clinical implementation and patient outcomes.',
      explanation: `**Risk Model Evolution:**

*Traditional Models:*
- Based on established risk factors
- Cox/logistic regression
- Validated in defined populations
- Moderate discrimination (C-statistic 0.7-0.8)

*Enhanced Models:*
- Add imaging (CAC, carotid IMT)
- Incorporate biomarkers (Lp(a), hsCRP)
- Include genetic risk scores
- Improved discrimination and reclassification

*Machine Learning Approaches:*
- Random forests, neural networks, gradient boosting
- Can handle non-linear relationships
- May capture novel risk interactions
- Interpretability challenges

**Cardiovascular Risk Refinement:**

*CAC Integration:*
| PCE Risk | CAC = 0 | CAC 1-99 | CAC ≥100 |
|----------|---------|----------|----------|
| <5% | Very low | Low | Intermediate |
| 5-7.5% | Low | Intermediate | High |
| 7.5-20% | Low | Intermediate | High |

- MESA study: 25% reclassification
- CAC = 0 allows statin deferral
- CAC ≥100 supports statin therapy

*Polygenic Risk Scores:*
- Millions of genetic variants
- Risk stratification independent of traditional factors
- UK Biobank: Top 8% have 3x population risk
- Not yet guideline-recommended
- Health equity concerns (European-centric)

**Fracture Risk Advances:**

*Trabecular Bone Score (TBS):*
- Lumbar spine texture analysis
- Adds to FRAX
- Captures bone quality beyond BMD

*Vertebral Fracture Assessment:*
- DXA-based spine imaging
- Identifies occult vertebral fractures
- Upgrades risk category

*Finite Element Analysis:*
- CT-based bone strength estimation
- Research applications
- May improve fracture prediction

**Diabetes Prediction:**

*QDiabetes:*
- UK-derived, comprehensive model
- Includes medications, conditions
- 10-year prediction

*Genetic Susceptibility:*
- Type 2 diabetes PRS available
- Risk stratification in prediabetes
- May guide intervention intensity

**Cancer Risk Enhancement:**

*Breast Density Integration:*
- BI-RADS density categories
- Tyrer-Cuzick includes density
- Dense breasts: Consider supplemental screening

*Genetic Risk Scores:*
- 313-SNP breast cancer PRS
- Refines lifetime risk estimate
- WISDOM trial: Risk-based screening

**Model Calibration Challenges:**

*Secular Trends:*
- CVD rates declining
- PCE overestimates in contemporary cohorts
- Periodic recalibration needed

*Population Drift:*
- Treatment advances
- Lifestyle changes
- Environmental factors

*Recalibration Approaches:*
- Update intercept (baseline hazard)
- Full model re-derivation
- Local calibration

**Health Equity Considerations:**

*Race in Risk Calculators:*
- PCE includes race coefficient
- Reflects social constructs, not biology
- Perpetuates differential treatment
- Race-neutral alternatives emerging

*Underrepresented Populations:*
- Asian, Hispanic underrepresented in derivation
- Model performance may differ
- Need for diverse validation

*Access to Advanced Testing:*
- CAC, genetic testing not universally accessible
- Insurance coverage varies
- Geographic disparities

**Implementation Science:**

*EHR Integration:*
- Automated calculation
- Point-of-care alerts
- Population health dashboards

*Clinician Adoption Barriers:*
- Time constraints
- Uncertainty about thresholds
- Complexity of shared decision-making
- Alert fatigue

*Effective Implementation:*
- Clinical decision support
- Team-based care
- Quality metrics alignment
- Patient education materials

**Emerging Approaches:**

*Dynamic Risk Assessment:*
- Serial measurements
- Risk trajectory
- Wearable integration
- Real-time updates

*Multi-Morbidity Models:*
- Competing risks
- Frailty indices
- Holistic prediction

*AI-Derived Markers:*
- ECG-based predictions
- Retinal imaging analysis
- Opportunistic imaging data`,
      keyTerms: [
        { term: 'reclassification', definition: 'When a new marker changes a patient from one risk category to another' },
        { term: 'calibration drift', definition: 'Degradation of model performance over time as population characteristics change' },
        { term: 'competing risks', definition: 'Situation where multiple potential outcomes may prevent observation of outcome of interest' },
        { term: 'TBS', definition: 'Trabecular bone score; measure of bone microarchitecture derived from DXA images' },
        { term: 'dynamic risk assessment', definition: 'Continuous risk estimation incorporating serial measurements over time' },
      ],
      clinicalNotes: 'Integrate imaging biomarkers (CAC) for intermediate CVD risk decisions. Recognize limitations of race-based risk adjustments. Stay updated on genetic risk score implementation evidence. Address access disparities in advanced testing. Use calculators to guide, not replace, clinical judgment.',
    },
    5: {
      level: 5,
      summary: 'Expert implementation of risk prediction requires mastery of model performance metrics, equity-conscious application, integration of multi-modal data sources, and leadership in translating predictive analytics into health system infrastructure that improves population outcomes.',
      explanation: `**Risk Prediction Model Evaluation:**

*Discrimination vs Calibration:*

| Aspect | Metric | Interpretation |
|--------|--------|----------------|
| Discrimination | C-statistic | Ability to rank individuals by risk |
| Calibration | Hosmer-Lemeshow | Agreement of predicted vs observed |
| Clinical Utility | Net benefit | Improvement in decisions made |

*Advanced Metrics:*
- Net Reclassification Index (NRI): Proportion correctly moved to different category
- Integrated Discrimination Improvement (IDI): Improvement in discrimination slope
- Decision curve analysis: Net benefit across threshold probabilities

**Precision Medicine Integration:**

*Multi-Omic Risk Prediction:*
- Genomics: PRS for multiple conditions
- Proteomics: Multi-protein panels
- Metabolomics: TMAO, ceramides, etc.
- Integration algorithms under development

*AI/ML Applications:*
| Domain | Application | Validation Status |
|--------|-------------|-------------------|
| ECG | Predicted age, AF, HF | FDA-cleared devices |
| Retinal imaging | CV risk, diabetes | Research validation |
| Chest X-ray | Pulmonary diseases, mortality | Emerging |
| CT scans | Opportunistic CAC | Clinical use |

*Deep Learning Considerations:*
- Black box concerns
- Interpretability methods (SHAP, LIME)
- Validation in diverse populations
- Regulatory frameworks

**Health Equity Framework:**

*Race in Risk Models:*
- Historical inclusion based on observed disparities
- Reflects structural racism, not biology
- Algorithmic harm potential
- Emerging approaches:
  - Race-neutral models
  - Social determinants inclusion
  - Area-level socioeconomic factors

*Equity-Centered Implementation:*
- Monitor risk assessment equity
- Ensure access to risk-modifying interventions
- Community engagement in model development
- Disaggregated outcome tracking

**Population Health Integration:**

*EHR-Based Infrastructure:*
- Automated risk calculation
- Population risk registries
- Outreach to high-risk patients
- Quality dashboards

*Care Management Workflows:*
| Risk Stratum | Intervention Level |
|--------------|-------------------|
| Low | Self-management support |
| Moderate | Care coordination |
| High | Intensive management |
| Very high | Complex care coordination |

*Value-Based Care Alignment:*
- Risk adjustment for payment
- Quality metrics incorporation
- Total cost of care models
- Shared savings programs

**Clinical Decision Support Design:**

*Effective CDS Principles:*
- Right information, right person, right time
- Minimal disruption to workflow
- Actionable recommendations
- Easy-to-understand risk communication

*Alert Optimization:*
- Avoid alert fatigue
- High-priority, actionable alerts only
- Passive displays for low-priority
- Regular review of alert performance

**Risk Communication Excellence:**

*Formats for Patients:*
- Absolute risk in natural frequencies (1 in 20)
- Icon arrays (100 person figures)
- Comparisons (population average)
- Time horizons (10-year vs lifetime)

*Shared Decision-Making Tools:*
- Decision aids
- Option grids
- Values clarification
- Teach-back confirmation

*Clinician Communication:*
- Standard reporting formats
- Uncertainty acknowledgment
- Next steps recommendations
- Documentation templates

**Research and Development:**

*Model Improvement Priorities:*
1. Diverse population validation
2. Social determinants integration
3. Dynamic risk models
4. Competing risk frameworks
5. Multi-morbidity prediction

*Implementation Research:*
- Comparative effectiveness of CDS designs
- Equity impact assessments
- Cost-effectiveness of enhanced models
- Patient outcome studies

**Future Directions:**

*Federated Learning:*
- Train models across institutions
- Privacy preservation
- Larger, diverse datasets

*Real-World Evidence:*
- Continuous model updating
- Pragmatic validation
- Rapid learning systems

*Patient-Centered Risk:*
- Patient-reported outcomes
- Quality of life integration
- Personalized risk communication

**Clinical Excellence Framework:**

*Individual Patient Care:*
- Select appropriate calculators
- Interpret with clinical context
- Communicate effectively
- Document decision-making

*Practice Leadership:*
- Implement systematic risk assessment
- Train team members
- Monitor quality metrics
- Address disparities

*Health System Impact:*
- Population health infrastructure
- Data analytics capability
- Value-based care alignment
- Continuous improvement culture

*Professional Development:*
- Statistical literacy
- Health informatics competency
- Implementation science principles
- Equity-conscious practice`,
      keyTerms: [
        { term: 'NRI', definition: 'Net Reclassification Index; measure of improvement in risk categorization when new marker is added' },
        { term: 'decision curve analysis', definition: 'Method to evaluate clinical utility of prediction models across threshold probabilities' },
        { term: 'federated learning', definition: 'Machine learning approach training models across decentralized data without sharing raw data' },
        { term: 'SHAP', definition: 'SHapley Additive exPlanations; method for explaining machine learning model predictions' },
        { term: 'algorithmic harm', definition: 'Negative consequences from biased or inappropriate use of predictive algorithms' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Master model performance metrics beyond C-statistic
- Lead equity-conscious risk assessment implementation
- Champion EHR integration and population health infrastructure
- Design effective clinical decision support
- Communicate risk using evidence-based formats
- Address race in risk models with nuance and emerging alternatives
- Stay current on AI/ML developments with critical appraisal
- Engage in implementation research and continuous improvement
- Mentor trainees in risk prediction literacy`,
    },
  },

  media: [
    {
      id: 'risk-calculator-overview',
      type: 'diagram',
      filename: 'health-risk-calculators-overview.svg',
      title: 'Overview of Clinical Risk Calculators',
      description: 'Summary of major health risk assessment tools by condition and use case',
    },
  ],

  citations: [
    {
      id: 'acc-aha-cholesterol-2018',
      type: 'article',
      title: '2018 AHA/ACC Guideline on the Management of Blood Cholesterol',
      authors: ['Grundy SM', 'Stone NJ', 'et al.'],
      source: 'Circulation',
      accessedDate: '2025-01-28',
    },
    {
      id: 'frax-assessment',
      type: 'website',
      title: 'FRAX Fracture Risk Assessment Tool',
      source: 'University of Sheffield',
      url: 'https://www.sheffield.ac.uk/FRAX/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'tangri-kfre-2016',
      type: 'article',
      title: 'A Predictive Model for Progression of Chronic Kidney Disease to Kidney Failure',
      authors: ['Tangri N', 'Grams ME', 'et al.'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'preventive-cancer-screening-risk', targetType: 'concept', relationship: 'related', label: 'Cancer Screening Risk Assessment' },
    { targetId: 'concept-shared-decision-making', targetType: 'concept', relationship: 'related', label: 'Shared Decision-Making' },
  ],

  tags: {
    systems: ['preventive-care'],
    topics: ['preventive medicine', 'clinical decision support', 'risk assessment', 'epidemiology'],
    keywords: ['risk calculator', 'ASCVD risk', 'FRAX', 'Gail model', 'clinical prediction', 'decision support'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
