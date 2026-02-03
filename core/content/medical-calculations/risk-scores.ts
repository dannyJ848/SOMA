import { EducationalContent } from '../types';

export const riskScores: EducationalContent = {
  id: 'calculation-risk-scores',
  type: 'concept',
  name: 'Clinical Risk Scores',
  alternateNames: ['Risk Stratification', 'Risk Calculators', 'Clinical Scoring Systems', 'HEART Score', 'Wells Criteria', 'CHA2DS2-VASc'],

  levels: {
    1: {
      level: 1,
      summary: 'Risk scores are simple tools that help doctors estimate how likely a patient is to have a serious condition or experience a medical complication.',
      explanation: `## What Are Risk Scores?

Risk scores are tools that use information about a patient (like age, symptoms, and test results) to calculate how likely they are to have a disease or experience a bad outcome.

## Why Are Risk Scores Helpful?

- Help doctors make better decisions
- Identify patients who need urgent treatment
- Prevent unnecessary tests or procedures
- Make sure high-risk patients get proper care

## Common Risk Scores

**For Heart Problems:**
- HEART score: Helps decide if chest pain is serious
- CHA2DS2-VASc: Estimates stroke risk with irregular heartbeat

**For Blood Clots:**
- Wells criteria: Determines likelihood of blood clots in legs or lungs

**For Other Conditions:**
- Many scores exist for different diseases

## How Risk Scores Work

Each factor gets points:
- Age over 65 might get 1 point
- Chest pain might get 2 points
- Abnormal EKG might get 2 points

Total points determine risk level:
- Low score = low risk
- High score = high risk

## Example: HEART Score

Used for patients with chest pain:

**History:** Suspicious (2), Moderately suspicious (1), Slightly suspicious (0)
**ECG:** Significant ST depression (2), Nonspecific changes (1), Normal (0)
**Age:** >=65 (2), 45-64 (1), <45 (0)
**Risk factors:** 3 or more (2), 1-2 (1), None (0)
**Troponin:** >=3x normal (2), 1-3x normal (1), Normal (0)

Total 0-3: Low risk (can usually go home)
Total 4-6: Moderate risk (may need monitoring)
Total 7-10: High risk (needs admission and treatment)

## Important Notes

- Risk scores help but do not replace doctor judgment
- Every patient is different
- New information can change the risk level`,
      keyTerms: [
        { term: 'risk score', definition: 'A tool using patient information to estimate likelihood of disease or complications' },
        { term: 'risk stratification', definition: 'Process of placing patients into risk categories' },
        { term: 'HEART score', definition: 'Tool for assessing risk in patients with chest pain' },
        { term: 'CHA2DS2-VASc', definition: 'Score estimating stroke risk in atrial fibrillation' },
      ],
      analogies: [
        'Risk scores are like a weather forecast - they predict the chance of something happening based on current conditions.',
        'Think of risk scores like car insurance rates - higher risk factors lead to higher scores.',
      ],
      examples: [
        'A 70-year-old with chest pain, abnormal EKG, and high troponin would have a high HEART score and need admission.',
        'A 30-year-old with chest pain but normal tests would have a low HEART score and might go home safely.',
      ],
    },
    2: {
      level: 2,
      summary: 'Clinical risk scores combine demographic, historical, clinical, and laboratory variables to stratify patients into risk categories, guiding diagnostic and therapeutic decisions across cardiovascular, thromboembolic, and other conditions.',
      explanation: `## HEART Score (Chest Pain Risk)

Components (0-2 points each):

| Component | 0 Points | 1 Point | 2 Points |
|-----------|----------|---------|----------|
| History | Slightly suspicious | Moderately suspicious | Highly suspicious |
| ECG | Normal | Nonspecific changes | Significant ST depression |
| Age | <45 | 45-64 | >=65 |
| Risk factors* | None | 1-2 | >=3 |
| Troponin | Normal | 1-3x normal limit | >3x normal limit |

*Risk factors: Diabetes, smoking, hypertension, hyperlipidemia, family history, obesity

**Risk Categories:**
- 0-3: Low risk (0.9-1.7% MACE at 6 weeks) - consider discharge
- 4-6: Moderate risk (12-16% MACE) - observe
- 7-10: High risk (50-65% MACE) - admit, invasive strategy

## Wells Criteria for DVT

Clinical probability score:

| Factor | Points |
|--------|--------|
| Active cancer | +1 |
| Paralysis, paresis, recent cast | +1 |
| Recently bedridden >3 days or surgery <4 weeks | +1 |
| Localized tenderness along deep veins | +1 |
| Swelling of entire leg | +1 |
| Calf swelling >3 cm compared to asymptomatic leg | +1 |
| Pitting edema confined to symptomatic leg | +1 |
| Collateral superficial veins | +1 |
| Alternative diagnosis as likely or more likely | -2 |

**Interpretation:**
- <=0: Low probability (<5% DVT prevalence)
- 1-2: Moderate probability (17% prevalence)
- >=3: High probability (53% prevalence)

## Wells Criteria for PE

| Factor | Points |
|--------|--------|
| Clinical signs of DVT | +3 |
| PE #1 diagnosis OR equally likely | +3 |
| Heart rate >100 | +1.5 |
| Immobilization >=3 days or surgery <4 weeks | +1.5 |
| Previous DVT/PE | +1.5 |
| Hemoptysis | +1 |
| Malignancy | +1 |

**Interpretation:**
- <=4: PE unlikely (7.8% prevalence)
- >4: PE likely (40.6% prevalence)

## CHA2DS2-VASc Score (AFib Stroke Risk)

| Factor | Points |
|--------|--------|
| Congestive heart failure | +1 |
| Hypertension | +1 |
| Age >=75 | +2 |
| Diabetes | +1 |
| Stroke/TIA/thromboembolism | +2 |
| Vascular disease (CAD/MI/PAD) | +1 |
| Age 65-74 | +1 |
| Sex category (female) | +1 |

**Stroke Risk (Annual):**
| Score | Risk | Recommendation |
|-------|------|----------------|
| 0 | 0% | No anticoagulation |
| 1 (male) | 1.3% | Consider anticoagulation |
| 1 (female) | 2.2% | Consider anticoagulation |
| 2 | 2.2% | Anticoagulation |
| >=3 | >3% | Anticoagulation |

## HAS-BLED Score (Bleeding Risk on Anticoagulation)

| Factor | Points |
|--------|--------|
| Hypertension | +1 |
| Abnormal renal/liver function | +1 or +2 |
| Stroke history | +1 |
| Bleeding history or predisposition | +1 |
| Labile INR | +1 |
| Elderly (age >65) | +1 |
| Drugs or alcohol | +1 or +2 |

Score >=3 indicates high bleeding risk (not a contraindication but needs caution)

## CURB-65 (Pneumonia Severity)

| Factor | Points |
|--------|--------|
| Confusion | +1 |
| Urea >7 mmol/L (20 mg/dL) | +1 |
| Respiratory rate >=30 | +1 |
| Blood pressure low (SBP <90 or DBP <=60) | +1 |
| Age >=65 | +1 |

**Risk/Management:**
- 0-1: Low risk - outpatient
- 2: Intermediate - short hospitalization or close outpatient
- 3-5: Severe - hospitalize, consider ICU`,
      keyTerms: [
        { term: 'HEART score', definition: 'History, ECG, Age, Risk factors, Troponin score for chest pain risk stratification' },
        { term: 'Wells criteria', definition: 'Clinical prediction rules for DVT and PE probability' },
        { term: 'CHA2DS2-VASc', definition: 'Congestive heart failure, Hypertension, Age >=75, Diabetes, Stroke, Vascular disease, Age 65-74, Sex category score' },
        { term: 'MACE', definition: 'Major adverse cardiovascular events (death, MI, revascularization)' },
        { term: 'HAS-BLED', definition: 'Hypertension, Abnormal renal/liver function, Stroke, Bleeding, Labile INR, Elderly, Drugs/alcohol score' },
      ],
      analogies: [
        'Risk scores are like credit scores - multiple factors combine to predict future risk.',
      ],
      examples: [
        'A 75-year-old with AFib, hypertension, and diabetes has CHA2DS2-VASc of 4 (75=2, HTN=1, DM=1), indicating need for anticoagulation.',
        'A patient with suspected PE, HR 110, recent surgery, and no alternative diagnosis has Wells score of 6 (likely PE), requiring imaging.',
      ],
    },
    3: {
      level: 3,
      summary: 'Risk stratification tools integrate multiple clinical variables to predict outcomes, requiring understanding of their derivation, validation, sensitivity, specificity, and appropriate application in clinical decision-making.',
      explanation: `## Statistical Foundations of Risk Scores

**Derivation:**
- Identified through multivariate logistic regression
- Variables independently associated with outcome
- Points assigned based on regression coefficients

**Validation:**
- Internal: Bootstrap or split-sample
- External: Different patient population
- Temporal: Same site, later time period

**Performance Metrics:**

Discrimination:
- C-statistic (area under ROC curve)
- 0.5 = no better than chance
- 0.7-0.8 = acceptable
- 0.8-0.9 = excellent
- >0.9 = outstanding

Calibration:
- Agreement between predicted and observed risk
- Hosmer-Lemeshow test
- Calibration plots

## HEART Score Validation

Original study (2008):
- 122 patients in ED
- Predicted 6-week MACE

Subsequent validation:
- HEART Pathway (Mahler et al.): 1.0% MACE in low-risk at 30 days
- Multiple international validations
- Compared to TIMI, GRACE scores

Limitations:
- Troponin assay dependent
- Provider judgment in "history" component
- Does not include all patients (excludes STEMI)

## D-dimer Strategy with Wells

**PE Evaluation:**
- Wells <=4 (unlikely): D-dimer testing
  - Negative: PE excluded
  - Positive: Imaging needed
- Wells >4 (likely): Proceed directly to imaging

**DVT Evaluation:**
- Similar strategy
- D-dimer very sensitive, not specific
- Age-adjusted D-dimer: Age x 10 ng/mL (if >50 years)

## CHA2DS2-VASc Evolution

CHADS2 (older, simpler):
- CHF, Hypertension, Age >=75, Diabetes, Stroke
- Less discriminating at lower scores

CHA2DS2-VASc improvements:
- Better risk stratification in low-risk patients
- Additional vascular disease and age 65-74
- Sex category (female)

Validation:
- Derived from Euro Heart Survey
- Validated in multiple cohorts
- Net reclassification improvement over CHADS2

Limitations:
- Does not include all stroke risk factors
- Dynamic risk changes not captured
- Single score point carries different risk depending on total

## Other Important Risk Scores

**GRACE Score (ACS):**
- Comprehensive ACS risk assessment
- Predicts in-hospital and 6-month mortality
- Used for revascularization decisions

**TIMI Risk Score (ACS):**
- Simpler than GRACE
- 7 variables
- Predicts death, MI, urgent revascularization

**ASCVD Risk Calculator:**
- 10-year cardiovascular disease risk
- Guides statin therapy
- Inputs: Age, sex, race, lipids, BP, diabetes, smoking

**Revised Cardiac Risk Index (RCRI):**
- Preoperative cardiac risk
- 6 predictors
- Guides perioperative management

**Simplified PESI (sPESI):**
- Prognosis in PE
- 6 variables
- Identifies low-risk patients for outpatient management

## Limitations of Risk Scores

**General limitations:**
- Population-specific derivation may not generalize
- Spectrum bias (derived in high-risk populations)
- Missing important variables
- Temporal changes in disease/treatment
- Over-simplification

**Clinical application:**
- Do not replace clinical judgment
- Dynamic risk not captured
- May not apply to individual patient
- Threshold effects arbitrary

**Implementation:**
- Calculation errors
- Missing data
- Time constraints
- Cognitive overload`,
      keyTerms: [
        { term: 'C-statistic', definition: 'Area under ROC curve; measure of discrimination ability' },
        { term: 'calibration', definition: 'Agreement between predicted and observed outcomes' },
        { term: 'discrimination', definition: 'Ability to distinguish between those with and without outcome' },
        { term: 'net reclassification improvement', definition: 'Measure of how well new model reclassifies patients compared to old model' },
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events score for ACS risk' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced application of risk scores requires understanding their integration into clinical pathways, shared decision-making frameworks, and quality improvement initiatives while recognizing their limitations and appropriate scope of use.',
      explanation: `## Clinical Decision Pathways

**HEART Pathway Implementation:**

Components:
1. HEART score assessment
2. Serial troponins (0, 3 hours)
3. Risk-based disposition

Outcomes:
- Major reduction in admissions
- No missed MACE in validation studies
- Cost-effective

**Chest Pain Pathway:**
- Initial risk stratification (HEART or similar)
- Observation unit for intermediate risk
- Stress testing or CTA as appropriate
- Early discharge for low risk

## Shared Decision Making

**Risk Score Communication:**

Presenting absolute risk:
- "Your 10-year heart attack risk is 15%"
- Visual aids (icon arrays)
- Natural frequencies (15 in 100)

**CHA2DS2-VASc and Anticoagulation:**

Discussing trade-offs:
- Stroke risk reduction (absolute benefit)
- Bleeding risk increase (absolute harm)
- Patient preferences and values

Example:
- Score of 3: 3.2% annual stroke risk
- Anticoagulation: ~60% relative risk reduction
- Absolute benefit: ~2% per year stroke prevention
- Major bleeding: ~1-2% per year increase

**Decision Aids:**
- Option grids
- Shared decision-making tools
- Evidence-based risk communication

## Risk Score Integration in EHR

**Electronic Health Record Tools:**

Automated calculation:
- Pull data from EHR
- Auto-populate variables
- Calculate and display score
- Alert providers

Clinical decision support:
- HEART score at chest pain order set
- CHA2DS2-VASc at AFib diagnosis
- Pooled cohort equations at annual exam

**Challenges:**
- Data quality
- Alert fatigue
- Workflow integration
- Keeping scores updated

## Quality Improvement Applications

**Appropriate Use:**

Monitoring:
- Risk score completion rates
- Guideline-concordant care
- Outcomes by risk category

Examples:
- CHA2DS2-VASc documentation in AFib
- Appropriate anticoagulation prescription rates
- VTE prophylaxis based on Caprini score

**Risk-Standardized Outcomes:**

Comparing providers/institutions:
- Risk-adjusted mortality
- Account for patient differences
- Fair comparisons

**Performance Improvement:**

Targeted interventions:
- Identify high-risk populations
- Implement care pathways
- Measure outcomes

## Specialized Risk Scores

**Surgical Risk:**

ACS NSQIP Surgical Risk Calculator:
- Preoperative risk prediction
- 21 procedure-specific models
- Predicts complications and death

POSPOM:
- Postoperative mortality
- Simple 5-variable score

**Oncology:**

Khorana score (chemotherapy VTE risk):
- Site of cancer
- Platelet count
- Hemoglobin/ESA use
- Leukocyte count
- BMI

**ICU:**

APACHE II, III, IV:
- Mortality prediction
- Severity of illness
- Resource utilization

SOFA:
- Organ dysfunction
- Sepsis prognosis

**Trauma:**

ISS (Injury Severity Score):
- Anatomical scoring
- Predicts mortality

RTS (Revised Trauma Score):
- Physiological scoring
- GCS, SBP, RR

TRISS:
- Combines ISS and RTS
- Probability of survival

## Limitations and Pitfalls

**Misapplication:**
- Using score outside validation population
- Ignoring clinical judgment
- Treating score as diagnosis

**Spectrum Bias:**
- Derived in high-risk ED population
- May not apply to primary care
- Prevalence affects predictive value

**Self-Fulfilling Prophecy:**
- High score leads to admission
- Admission leads to procedures
- Procedures may cause complications

**Defensive Medicine:**
- Low scores but fear of missing disease
- Over-testing despite low risk
- Malpractice concerns override scores

## Future Directions

**Dynamic Risk Scores:**
- Serial assessments
- Machine learning integration
- Continuous updating

**Personalized Medicine:**
- Genetic risk factors
- Biomarker integration
- Individualized predictions

**Natural Language Processing:**
- Extract variables from notes
- Automated risk calculation
- Reduce documentation burden`,
      keyTerms: [
        { term: 'HEART pathway', definition: 'Clinical decision pathway incorporating HEART score with serial troponins' },
        { term: 'shared decision making', definition: 'Process where patients and clinicians make decisions together using best evidence' },
        { term: 'clinical decision support', definition: 'Electronic tools providing patient-specific assessments or recommendations' },
        { term: 'APACHE', definition: 'Acute Physiology and Chronic Health Evaluation score for ICU mortality prediction' },
        { term: 'SOFA', definition: 'Sequential Organ Failure Assessment score' },
      ],
      clinicalNotes: 'Implement HEART pathway for chest pain evaluation to safely reduce admissions. Use CHA2DS2-VASc and HAS-BLED together to guide AFib anticoagulation decisions with shared decision-making. Wells criteria should guide D-dimer utilization. Integrate risk scores into EHR for automated calculation but ensure they enhance rather than replace clinical judgment. Risk scores should be used within validated clinical pathways for maximum benefit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary risk stratification leverages machine learning, artificial intelligence, and multi-modal data integration while addressing algorithmic bias, fairness, and the evolving role of clinical prediction models in precision medicine.',
      explanation: `## Machine Learning Risk Prediction

**Advantages Over Traditional Scores:**

Non-linear relationships:
- Capture complex interactions
- Do not assume linearity
- Better performance potential

Big data integration:
- Laboratory values
- Vital signs
- Free text (NLP)
- Imaging
- Genomics

Continuous learning:
- Update with new data
- Adapt to local populations
- Improve over time

**Examples:**

Sepsis prediction:
- Epic Sepsis Model
- Modified Early Warning Score (MEWS)
- National Early Warning Score (NEWS)

AKI prediction:
- Google Health AKI alert
- Predicts 48 hours before creatinine rise

Mortality prediction:
- Multiple ICU models
- eICU-CRL database studies

## Artificial Intelligence in Risk Stratification

**Deep Learning Approaches:**

Neural networks:
- ECG interpretation
- Chest X-ray risk prediction
- Natural language processing

Computer vision:
- Retinal imaging for cardiovascular risk
- Skin lesion risk stratification
- Radiomics for cancer prognosis

**Natural Language Processing:**

Extracting risk factors:
- Social determinants from notes
- Symptom documentation
- Risk behaviors

Automated documentation:
- Risk score calculation
- Clinical summary generation

## Algorithmic Bias and Fairness

**Sources of Bias:**

Training data bias:
- Underrepresentation of minorities
- Socioeconomic disparities
- Historical inequities reflected in data

Label bias:
- Different disease prevalence
- Different treatment thresholds
- Diagnostic disparities

**Consequences:**

Underestimating risk:
- CHA2DS2-VASc underperforms in Black patients
- ASCVD calculator may underestimate in certain groups

Overestimating risk:
- False positives leading to overtreatment
- Resource misallocation

**Mitigation Strategies:**

Fairness metrics:
- Equalized odds
- Demographic parity
- Calibration across groups

Diverse training data:
- Intentional inclusion
- Oversampling underrepresented groups
- Federated learning across sites

Transparency:
- Explainable AI
- Model cards documenting limitations
- Bias auditing

## Precision Medicine Integration

**Multi-Omics Risk Assessment:**

Genomics:
- Polygenic risk scores
- Pharmacogenomics
- Disease-specific variants

Proteomics:
- Protein biomarker panels
- Dynamic risk assessment
- Early disease detection

Metabolomics:
- Metabolic signatures
- Lifestyle integration
- Real-time monitoring

**Digital Biomarkers:**

Wearable devices:
- Continuous heart rate/rhythm
- Activity levels
- Sleep patterns

Smartphone data:
- Speech analysis
- Gait analysis
- Social interaction patterns

## Implementation Science

**Adoption Barriers:**

Provider factors:
- Trust in algorithms
- Fear of automation
- Workflow disruption
- Liability concerns

System factors:
- Cost
- Integration complexity
- Maintenance
- Governance

**Implementation Framework:**

1. Problem identification
2. Model development and validation
3. Impact assessment
4. Workflow integration
5. Training and education
6. Monitoring and feedback
7. Continuous improvement

## Regulatory Considerations

**FDA Guidance:**

Software as Medical Device (SaMD):
- Risk classification
- Validation requirements
- Clinical evidence

AI/ML-Based SaMD:
- Predetermined change control plan
- Real-world performance monitoring
- Transparency requirements

**Clinical Decision Support:**
- CDS 2.0 framework
- Evidence-based interventions
- Fairness and bias mitigation

## Future Directions

**Federated Learning:**
- Train models across institutions
- No central data sharing
- Privacy preservation

**Causal Inference:**
- Moving beyond prediction
- Treatment effect estimation
- Personalized recommendations

**Dynamic Risk Modeling:**
- Real-time updates
- Continuous monitoring
- Early warning systems

**Human-AI Collaboration:**
- Augmented decision making
- Explainable predictions
- Provider override tracking

**Global Health Applications:**
- Low-resource settings
- Transfer learning
- Minimal data requirements

**Ethical Framework:**
- Transparency
- Fairness
- Accountability
- Privacy
- Human oversight`,
      keyTerms: [
        { term: 'machine learning', definition: 'Computer algorithms that improve through experience and data' },
        { term: 'algorithmic bias', definition: 'Systematic errors in algorithmic predictions that disadvantage certain groups' },
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk from multiple variants' },
        { term: 'federated learning', definition: 'Machine learning approach training models across decentralized data sources' },
        { term: 'explainable AI', definition: 'Artificial intelligence systems whose decisions can be understood by humans' },
      ],
      clinicalNotes: 'Machine learning models show promise for risk prediction but require careful validation for bias and fairness. Integrate genomics and digital biomarkers for precision risk stratification. Ensure diverse training data and monitor for algorithmic bias. Human-AI collaboration models are preferred over fully autonomous systems. Regulatory frameworks for AI-based clinical decision support are evolving. Transparency and explainability are essential for clinical adoption.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: ['cardiovascular', 'respiratory'],
    topics: ['clinical-calculations', 'emergency-medicine', 'cardiology'],
    keywords: ['risk scores', 'HEART score', 'Wells criteria', 'CHA2DS2-VASc', 'risk stratification'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
