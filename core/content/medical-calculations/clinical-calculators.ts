/**
 * Clinical Calculators - Medical Calculations
 *
 * Comprehensive content on clinical decision support tools, risk scores,
 * and evidence-based calculators used in medical practice.
 */

import { EducationalContent } from '../types';

export const clinicalCalculators: EducationalContent = {
  id: 'calculations-clinical-calculators',
  type: 'concept',
  name: 'Clinical Calculators',
  alternateNames: ['Clinical Decision Tools', 'Risk Calculators', 'Medical Scoring Systems'],

  levels: {
    1: {
      level: 1,
      summary: 'Clinical calculators are tools that help doctors use math to make better decisions about your health care.',
      explanation: `Doctors use special math tools called clinical calculators to help figure out the best care for their patients. These calculators use information about you to predict things and guide treatment decisions.

**Why Doctors Use Calculators:**
- To figure out how sick someone might be
- To predict what might happen in the future
- To decide which treatments work best
- To compare patients in research studies

**What Information Goes Into Calculators:**
- Your age
- Your height and weight
- Test results (like blood tests)
- Symptoms you are having
- Medical history

**Common Uses:**
- **Body Mass Index (BMI):** Uses height and weight to check if weight is healthy
- **Heart Risk:** Checks chances of heart problems in the future
- **Kidney Function:** Shows how well kidneys are working

**Important Things to Know:**
- Calculators help doctors but do not replace their judgment
- They work for most people but not everyone is average
- Your doctor uses many things to make decisions, not just calculators
- Always ask your doctor to explain what calculator results mean for you

**Example: BMI Calculator**
BMI uses your height and weight to give a number:
- Under 18.5 = Underweight
- 18.5 to 24.9 = Healthy weight
- 25 to 29.9 = Overweight
- 30 and above = Obese

This helps doctors talk about weight and health.`,
      keyTerms: [
        { term: 'calculator', definition: 'A tool that uses math to figure something out' },
        { term: 'BMI', definition: 'Body Mass Index - a number calculated from height and weight that helps describe body size' },
        { term: 'predict', definition: 'To use information to guess what might happen in the future' },
      ],
      analogies: [
        'Clinical calculators are like a GPS for doctors - they help point the way, but the doctor still makes the final decision about where to go.',
        'Using a calculator is like using a recipe - it gives you guidance, but a good cook still uses their experience.',
      ],
      examples: [
        'A doctor might use a calculator to figure out if a patient needs medicine to prevent heart disease.',
        'Before surgery, doctors use calculators to estimate how risky the operation might be.',
      ],
      patientCounselingPoints: [
        'Ask your doctor to explain what any calculator result means for you specifically.',
        'Calculator results are estimates - they cannot predict exactly what will happen to you.',
        'Your doctor considers many things, not just calculator numbers, when making decisions.',
      ],
    },
    2: {
      level: 2,
      summary: 'Clinical calculators are evidence-based tools that combine patient data with statistical models to predict outcomes, stratify risk, and guide clinical decision-making.',
      explanation: `## Understanding Clinical Calculators

Clinical calculators transform patient data into actionable information using validated mathematical formulas derived from research studies.

**Types of Clinical Calculators:**

**1. Risk Stratification Tools:**
- Predict likelihood of disease or events
- Guide prevention strategies
- Examples: ASCVD Risk, CHA2DS2-VASc

**2. Diagnostic Tools:**
- Calculate probability of disease
- Guide testing decisions
- Examples: Wells Criteria, HEART Score

**3. Prognostic Tools:**
- Predict outcomes
- Guide treatment intensity
- Examples: APACHE II, Child-Pugh Score

**4. Physiologic Calculators:**
- Estimate body function
- Guide medication dosing
- Examples: Creatinine Clearance, Body Surface Area

## Commonly Used Calculators

**Cardiovascular Risk:**
| Calculator | Purpose | Key Variables |
|------------|---------|---------------|
| ASCVD Risk | 10-year CV event risk | Age, BP, cholesterol, diabetes, smoking |
| HEART Score | ACS risk | History, ECG, age, risk factors, troponin |
| HAS-BLED | Bleeding risk on anticoagulation | Hypertension, abnormal renal/liver, stroke, etc. |

**Kidney Function:**
- **eGFR (CKD-EPI):** Estimates kidney filtration rate
- **Cockcroft-Gault:** Estimates creatinine clearance for drug dosing

**Other Common Calculators:**
| Calculator | Purpose |
|------------|---------|
| BMI | Body weight assessment |
| MELD | Liver disease severity |
| Glasgow Coma Scale | Neurologic assessment |
| CURB-65 | Pneumonia severity |
| Wells Criteria | DVT/PE probability |

## How to Use Calculator Results

**Understanding Output:**
- Point scores translate to risk categories
- Percentages indicate probability
- Compare to reference populations

**Limitations:**
- Population-based estimates may not apply to individuals
- Validation studies may not include all populations
- Cannot account for all individual factors
- Models may become outdated

**Best Practices:**
- Use calculators validated for your patient population
- Combine with clinical judgment
- Explain results and limitations to patients
- Document calculator use and results

## Example: ASCVD Risk Calculator

**What It Does:**
Estimates 10-year risk of atherosclerotic cardiovascular disease (heart attack, stroke)

**Input Variables:**
- Age
- Sex
- Race
- Total cholesterol
- HDL cholesterol
- Blood pressure
- Diabetes status
- Smoking status
- Statin/aspirin use
- Blood pressure medication use

**Output:**
- 10-year ASCVD risk percentage
- Risk category (low, borderline, intermediate, high)
- Lifetime risk

**Clinical Application:**
- Risk <5%: Low risk, lifestyle focus
- Risk 5-7.5%: Borderline, consider risk enhancers
- Risk 7.5-20%: Intermediate, consider statin
- Risk ≥20%: High, recommend statin therapy`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Using tools to divide patients into groups based on their likelihood of certain outcomes' },
        { term: 'ASCVD', definition: 'Atherosclerotic Cardiovascular Disease - includes heart attacks and strokes caused by artery blockages' },
        { term: 'eGFR', definition: 'Estimated Glomerular Filtration Rate - a measure of how well kidneys filter blood' },
        { term: 'validated', definition: 'Tested in studies to confirm the tool works as intended' },
        { term: 'prognosis', definition: 'Prediction of the likely course or outcome of a disease' },
      ],
      analogies: [
        'Risk calculators are like weather forecasts - they give you the probability of rain, but they cannot guarantee whether you specifically will get wet.',
        'Using multiple calculators together is like getting several expert opinions - each adds valuable perspective.',
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical calculators employ validated statistical models to quantify risk, guide diagnosis, and inform treatment decisions, requiring understanding of their derivation, validation, and appropriate application in clinical practice.',
      explanation: `## Calculator Development and Validation

**Derivation Process:**
1. **Cohort Selection:** Define study population
2. **Predictor Identification:** Select candidate variables
3. **Model Building:** Regression analysis (logistic, Cox)
4. **Variable Selection:** Stepwise, LASSO, clinical importance
5. **Internal Validation:** Bootstrapping, cross-validation
6. **Scoring System:** Convert coefficients to points

**Validation Metrics:**

| Metric | Description | Good Value |
|--------|-------------|------------|
| C-statistic (AUC) | Discrimination - ability to rank | >0.7 |
| Calibration | Predicted vs. observed outcomes | Slope ~1, intercept ~0 |
| Net Reclassification | Improvement over existing tools | Significant NRI |
| Decision Curve Analysis | Clinical usefulness | Positive net benefit |

**External Validation:**
- Testing in independent populations
- Geographic, temporal, ethnic validation
- May require recalibration

## Cardiovascular Calculators

**ASCVD Pooled Cohort Equations:**
\`\`\`
10-year ASCVD Risk = 1 - S₀^exp(individual sum - mean sum)
\`\`\`
Where coefficients differ by sex and race

**Risk Enhancers (when risk is borderline/intermediate):**
- Family history of premature ASCVD
- Metabolic syndrome
- CKD
- Chronic inflammatory conditions
- South Asian ancestry
- LDL-C ≥160 mg/dL
- Lp(a) ≥50 mg/dL
- ApoB ≥130 mg/dL
- CAC score

**CHA₂DS₂-VASc Score (Atrial Fibrillation Stroke Risk):**
| Criterion | Points |
|-----------|--------|
| CHF | 1 |
| Hypertension | 1 |
| Age ≥75 | 2 |
| Diabetes | 1 |
| Stroke/TIA/thromboembolism | 2 |
| Vascular disease | 1 |
| Age 65-74 | 1 |
| Sex category (female) | 1 |

*Score Interpretation:*
- 0 (male) or 1 (female): Low risk, anticoagulation optional
- 1 (male): Consider anticoagulation
- ≥2: Recommend anticoagulation

## Diagnostic Calculators

**Wells Criteria for DVT:**
| Criterion | Points |
|-----------|--------|
| Active cancer | 1 |
| Paralysis/immobilization | 1 |
| Bedridden >3 days or surgery <4 weeks | 1 |
| Tenderness along deep veins | 1 |
| Entire leg swelling | 1 |
| Calf swelling >3 cm vs. other leg | 1 |
| Pitting edema (symptomatic leg) | 1 |
| Collateral superficial veins | 1 |
| Alternative diagnosis more likely | -2 |

*Score Interpretation:*
- ≤0: Low probability (~5%)
- 1-2: Moderate probability (~17%)
- ≥3: High probability (~53%)

**Clinical Application:**
- Low probability + negative D-dimer → DVT excluded
- Moderate/High probability → Imaging required

**PERC Rule (to exclude PE without testing):**
All must be absent:
- Age ≥50
- HR ≥100
- SpO₂ <95%
- Unilateral leg swelling
- Hemoptysis
- Recent surgery/trauma
- Prior DVT/PE
- Estrogen use

## Prognostic Calculators

**MELD-Na Score (Liver Disease):**
\`\`\`
MELD-Na = MELD + 1.32 × (137 - Na) - [0.033 × MELD × (137 - Na)]
\`\`\`
Where Na is bounded 125-137 mEq/L

*Applications:*
- Liver transplant allocation
- Mortality prediction
- Surgical risk assessment

**CURB-65 (Pneumonia Severity):**
| Criterion | Points |
|-----------|--------|
| Confusion (new) | 1 |
| Urea >7 mmol/L (BUN >19 mg/dL) | 1 |
| Respiratory rate ≥30 | 1 |
| Blood pressure (SBP <90 or DBP ≤60) | 1 |
| Age ≥65 | 1 |

*Disposition:*
- 0-1: Outpatient treatment
- 2: Consider admission
- 3-5: Hospital/ICU admission

## Renal Function Calculators

**CKD-EPI 2021 (eGFR without race):**
Uses creatinine (and optionally cystatin C), age, and sex

**Cockcroft-Gault (Creatinine Clearance):**
\`\`\`
CrCl = [(140 - age) × weight] / (72 × SCr) × 0.85 if female
\`\`\`
- Still required for many drug dosing guidelines
- Uses actual body weight (or adjusted in obesity)`,
      keyTerms: [
        { term: 'C-statistic', definition: 'Area under the ROC curve; measure of a model\'s ability to discriminate between outcomes' },
        { term: 'calibration', definition: 'Agreement between predicted and observed outcomes across risk groups' },
        { term: 'net reclassification improvement', definition: 'Measure of how well a new model correctly reclassifies patients compared to an existing model' },
        { term: 'decision curve analysis', definition: 'Method evaluating clinical usefulness of prediction models across threshold probabilities' },
        { term: 'MELD', definition: 'Model for End-Stage Liver Disease; score predicting liver disease mortality, used for transplant allocation' },
      ],
      clinicalNotes: 'The ASCVD Pooled Cohort Equations tend to overestimate risk in contemporary populations. Consider using coronary artery calcium scoring as a tiebreaker for intermediate-risk patients, especially when statin therapy decision is uncertain.',
    },
    4: {
      level: 4,
      summary: 'Advanced clinical calculator application requires understanding of model limitations, population-specific validation, integration into clinical workflows, and appropriate use of calculator results within shared decision-making frameworks.',
      explanation: `## Model Performance and Limitations

**Sources of Calculator Inaccuracy:**

*Population Differences:*
- Derivation cohort characteristics
- Temporal changes in disease prevalence
- Geographic variation
- Healthcare system differences
- Socioeconomic factors

*Model Limitations:*
| Issue | Impact | Mitigation |
|-------|--------|------------|
| Overfitting | Poor external performance | Regularization, external validation |
| Collinearity | Unstable coefficients | Variable selection |
| Missing data | Biased estimates | Multiple imputation |
| Spectrum bias | Diagnostic performance varies | Test in target population |
| Case-mix | Calibration drift | Recalibration |

**Updating Models:**
- Recalibration: Adjust intercept/slope
- Model updating: Add new predictors
- Model revision: Rebuild with new data

## Advanced Cardiovascular Calculators

**Coronary Artery Calcium (CAC) Integration:**

*MESA Risk Calculator with CAC:*
Incorporates CAC Agatston score into ASCVD risk prediction

*CAC Score Interpretation:*
| CAC Score | Risk Category | 10-year Event Rate |
|-----------|---------------|-------------------|
| 0 | Very low | ~1% |
| 1-99 | Mildly elevated | ~3-7% |
| 100-399 | Moderately elevated | ~7-12% |
| ≥400 | Severely elevated | >12% |

*Clinical Application:*
- CAC = 0: May defer statin if no high-risk features
- CAC ≥100: Favors statin regardless of calculated risk
- Particularly useful in intermediate-risk patients

**TIMI Risk Scores:**

*TIMI Risk Score for STEMI:*
| Criterion | Points |
|-----------|--------|
| Age ≥75 | 3 |
| Age 65-74 | 2 |
| DM or HTN or angina | 1 |
| SBP <100 | 3 |
| HR >100 | 2 |
| Killip class II-IV | 2 |
| Weight <67 kg | 1 |
| Anterior STE or LBBB | 1 |
| Time to treatment >4 hours | 1 |

*Applications:*
- Mortality estimation
- Treatment intensity decisions
- Clinical trial stratification

**SYNTAX Score:**
Angiographic scoring system for CAD complexity
- Guides PCI vs. CABG decision
- Low (0-22): PCI equivalent to CABG
- Intermediate (23-32): Either approach
- High (≥33): CABG preferred

## Integrated Clinical Decision Support

**Calculator Implementation in EHR:**

*Design Considerations:*
- Automatic data population
- Point-of-care alerts
- Workflow integration
- Documentation support
- Interruptive vs. passive display

*Challenges:*
- Alert fatigue
- Calculation errors
- Version maintenance
- Clinician override rates

**Decision Support Quality Metrics:**
| Metric | Target |
|--------|--------|
| Calculator utilization rate | >80% eligible encounters |
| Override rate | <20% |
| Time to result | <30 seconds |
| Error rate | <1% |

## Shared Decision-Making with Calculators

**Communication Framework:**

*Risk Communication:*
- Absolute vs. relative risk
- Natural frequencies (1 in 20 vs. 5%)
- Visual aids (icon arrays, bar graphs)
- Time horizons

*Patient Values:*
- Risk tolerance
- Treatment preferences
- Competing priorities
- Quality of life considerations

**Example: Statin Decision Aid**
1. Calculate 10-year ASCVD risk
2. Present absolute risk reduction with statin (~25-30% relative reduction)
3. Discuss potential side effects
4. Explore patient preferences
5. Shared decision

**Number Needed to Treat (NNT) Application:**
\`\`\`
NNT = 1 / (baseline risk × relative risk reduction)
\`\`\`

Example: 10% baseline risk, 25% RRR
NNT = 1 / (0.10 × 0.25) = 40

"To prevent one heart attack or stroke, we would need to treat 40 people like you for 10 years."

## Special Populations

**Elderly Patients:**
- Many calculators not validated in ages >75-80
- Competing mortality risks
- Functional status not captured
- Consider life expectancy in treatment benefit estimation

**Diverse Populations:**
- Race/ethnicity considerations in calculator choice
- CKD-EPI 2021 removed race from eGFR
- ASCVD risk equations have race-specific coefficients (controversy)
- Validation in underrepresented groups often limited

**Comorbid Conditions:**
- Calculators typically address single conditions
- Multi-morbidity complexity not captured
- Interactions between conditions
- Consider overall patient trajectory`,
      keyTerms: [
        { term: 'CAC', definition: 'Coronary Artery Calcium; CT-measured calcium in coronary arteries predicting cardiovascular events' },
        { term: 'SYNTAX score', definition: 'Angiographic scoring system quantifying coronary artery disease complexity for revascularization planning' },
        { term: 'number needed to treat', definition: 'NNT; number of patients needing treatment to prevent one adverse outcome' },
        { term: 'recalibration', definition: 'Statistical adjustment of a prediction model to improve performance in a new population' },
        { term: 'icon array', definition: 'Visual risk communication tool showing affected individuals within a population' },
      ],
      clinicalNotes: 'When using calculators for shared decision-making, translate results into absolute risk and NNT. Patients understand "3 out of 100 people like you" better than "3% 10-year risk." Use visual aids when available.',
    },
    5: {
      level: 5,
      summary: 'Expert application of clinical calculators integrates advanced modeling concepts, precision medicine approaches, real-world evidence integration, and systems-level quality improvement while recognizing evolving methodologies and emerging technologies.',
      explanation: `## Advanced Prediction Modeling

**Machine Learning in Clinical Prediction:**

*Algorithm Types:*
| Algorithm | Strengths | Limitations |
|-----------|-----------|-------------|
| Logistic regression | Interpretable, validated methods | Linear relationships assumed |
| Random forest | Handles nonlinearity, feature interactions | Less interpretable, overfitting risk |
| Gradient boosting | High performance, handles missingness | Requires tuning, computational |
| Neural networks | Complex pattern recognition | Black box, data requirements |

*Emerging Applications:*
- EKG-based predictions (age, EF, future AF)
- Imaging-based risk scores (CT, echo)
- Multi-omic integration
- Continuous risk monitoring

**Model Interpretability:**
- SHAP values (SHapley Additive exPlanations)
- LIME (Local Interpretable Model-agnostic Explanations)
- Feature importance ranking
- Partial dependence plots

**Fair ML and Bias:**
- Algorithmic fairness definitions
- Protected attribute considerations
- Outcome vs. process fairness
- Bias auditing methods

## Precision Medicine and Risk Prediction

**Genetic Risk Scores:**

*Polygenic Risk Scores (PRS):*
- Combine thousands of genetic variants
- CAD PRS can modify clinical risk scores
- Still limited clinical implementation
- Equity concerns (primarily European ancestry derivation)

*Integration with Clinical Calculators:*
- Add PRS as risk enhancer
- Reclassify intermediate-risk patients
- Inform screening decisions
- Guide treatment intensity

**Biomarker Integration:**

*High-Sensitivity Cardiac Troponin:*
- Risk stratification beyond diagnosis
- HEART pathway integration
- Accelerated rule-out protocols

*Novel Biomarkers:*
| Biomarker | Application | Status |
|-----------|-------------|--------|
| Lp(a) | ASCVD risk enhancement | Guideline-recommended |
| ApoB | Residual risk | Available |
| NT-proBNP | CV risk in stable patients | Evidence growing |
| hsCRP | Inflammatory risk | Selective use |
| CAC | Risk reclassification | Established |

## Real-World Evidence and Calculator Updating

**Learning Health Systems:**
- Continuous data collection
- Real-time model performance monitoring
- Adaptive algorithm updating
- Feedback loops to clinicians

**EHR-Based Model Development:**
| Phase | Activities |
|-------|------------|
| Retrospective | Model derivation, validation |
| Prospective silent | Performance monitoring |
| Prospective active | CDS integration |
| Continuous | Model updating, surveillance |

**Federated Learning:**
- Multi-site model training
- Privacy preservation
- Larger, diverse populations
- Address generalizability

## Quality and Safety

**Clinical Decision Support Governance:**

*Committee Structure:*
- Informatics leadership
- Clinical experts
- Quality/safety representatives
- Legal/compliance
- Patient representatives

*Governance Activities:*
- New calculator approval
- Version updates
- Performance monitoring
- Adverse event review
- Sunset decisions

**Alert Optimization:**

*Strategies to Reduce Alert Fatigue:*
| Strategy | Implementation |
|----------|----------------|
| Tiered alerts | Match severity to interruptive level |
| Smart targeting | Context-aware display |
| Override analysis | Remove ineffective alerts |
| User customization | Provider preferences |
| Batch presentation | Reduce interruptions |

**Regulatory Considerations:**
- FDA software as medical device (SaMD)
- Clinical decision support exemptions
- Institutional liability
- Documentation requirements
- Transparency obligations

## Emerging Directions

**Dynamic Risk Assessment:**
- Wearable device integration
- Continuous vital sign monitoring
- Real-time risk updates
- Personalized alerts

**Multi-Morbidity Models:**
- Competing risk frameworks
- Multi-state models
- Comprehensive geriatric assessment integration
- Quality-adjusted life years

**Patient-Facing Tools:**
- Direct-to-consumer risk assessment
- Shared decision-making apps
- Health literacy considerations
- Engagement strategies

**Implementation Science:**

*Frameworks:*
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- CFIR (Consolidated Framework for Implementation Research)
- PRISM (Practical, Robust Implementation and Sustainability Model)

*Metrics:*
| Domain | Measure |
|--------|---------|
| Reach | Proportion of eligible patients |
| Effectiveness | Outcome improvement |
| Adoption | Provider utilization |
| Implementation | Fidelity to protocol |
| Maintenance | Sustained use |

## Future Directions

**Counterfactual Reasoning:**
- What-if scenario modeling
- Treatment effect heterogeneity
- Optimal treatment regimes
- Causal inference methods

**Uncertainty Quantification:**
- Confidence intervals for predictions
- Communicating model uncertainty
- Bayesian approaches
- Ensemble methods

**Regulatory Evolution:**
- AI/ML model oversight
- Continuous learning systems regulation
- International harmonization
- Post-market surveillance

**Ethical Considerations:**
- Algorithmic transparency
- Equity in model development and deployment
- Patient autonomy and informed consent
- Professional responsibility`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk calculated from thousands of common variants; emerging tool for risk stratification' },
        { term: 'SHAP values', definition: 'Model interpretation method explaining individual prediction contributions; used for black-box algorithms' },
        { term: 'federated learning', definition: 'Machine learning approach training models across multiple sites without sharing raw data' },
        { term: 'learning health system', definition: 'Healthcare system systematically using data to generate knowledge and continuously improve care' },
        { term: 'SaMD', definition: 'Software as a Medical Device; regulatory category for software intended for medical purposes' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Machine learning models may outperform traditional scores but require careful validation and interpretability assessment
2. Polygenic risk scores show promise but equity concerns limit current broad implementation
3. Calculator governance structures are essential for safe implementation in health systems
4. Alert fatigue remains the primary barrier to effective clinical decision support
5. Dynamic risk models incorporating continuous monitoring represent the next frontier
6. Consider competing risks and multi-morbidity when applying calculators in elderly patients
7. Implementation science frameworks guide successful calculator deployment`,
    },
  },

  media: [
    {
      id: 'ascvd-risk-calculation',
      type: 'diagram',
      filename: 'ascvd-risk-calculation.svg',
      title: 'ASCVD Risk Calculation Components',
      description: 'Visual representation of factors included in cardiovascular risk calculation',
    },
    {
      id: 'calculator-workflow',
      type: 'diagram',
      filename: 'calculator-workflow.svg',
      title: 'Clinical Calculator Integration in Workflow',
      description: 'How calculators fit into clinical decision-making process',
    },
  ],

  citations: [
    {
      id: 'acc-ascvd-guidelines',
      type: 'article',
      title: '2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease',
      authors: ['Arnett DK', 'Blumenthal RS', 'Michos ED', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2019.03.010',
    },
    {
      id: 'mdcalc-resource',
      type: 'website',
      title: 'MDCalc - Medical Calculators and Clinical Decision Support',
      source: 'MDCalc',
      url: 'https://www.mdcalc.com/',
    },
  ],

  crossReferences: [
    { targetId: 'calculations-dosing', targetType: 'concept', relationship: 'sibling', label: 'Dosing Calculations' },
    { targetId: 'calculations-unit-conversions', targetType: 'concept', relationship: 'sibling', label: 'Unit Conversions' },
    { targetId: 'ebm-risk-assessment', targetType: 'concept', relationship: 'related', label: 'Evidence-Based Risk Assessment' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-decision-support', 'risk-assessment', 'evidence-based-medicine'],
    keywords: ['calculator', 'risk score', 'prediction model', 'clinical decision support', 'ASCVD', 'MELD'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default clinicalCalculators;
