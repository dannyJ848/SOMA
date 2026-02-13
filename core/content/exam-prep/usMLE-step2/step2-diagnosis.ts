/**
 * USMLE Step 2 Diagnosis - Clinical Diagnostic Reasoning
 *
 * Educational content covering diagnostic reasoning for USMLE Step 2 CK.
 */

import { EducationalContent } from '../../types';

export const step2Diagnosis: EducationalContent = {
  id: 'education-usmle-step2-diagnosis',
  type: 'concept',
  name: 'USMLE Step 2 Diagnosis',
  alternateNames: ['Clinical Diagnosis', 'Diagnostic Reasoning', 'Step 2 CK Diagnosis', 'Differential Diagnosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Diagnosis on USMLE Step 2 is about figuring out what disease a patient has. It involves listening to symptoms, doing exams, and choosing the right tests.',
      explanation: `## What Is Diagnosis on Step 2?

Diagnosis means figuring out what is wrong with a patient. On Step 2, you learn how doctors:
- Listen to patient symptoms
- Do physical examinations
- Choose the right tests
- Put information together to find the diagnosis

## How Doctors Make Diagnoses

**1. Listen to the Patient:**
- What symptoms do they have?
- When did they start?
- What makes them better or worse?
- Past medical history

**2. Physical Examination:**
- Look at the patient
- Listen to heart and lungs
- Feel for abnormalities
- Check reflexes

**3. Choose Tests:**
- Blood tests
- X-rays or scans
- Special tests based on suspected problem

**4. Think Through Possibilities:**
- What could cause these symptoms?
- Which is most likely?
- What is most dangerous?
- What fits best?

## Common Question Types

**Step 2 might ask:**
- "What is the most likely diagnosis?"
- "What is the best test to order?"
- "What is the most dangerous condition to rule out?"
- "What finding confirms the diagnosis?"

## Tips for Diagnosis Questions

1. Read the question carefully
2. Identify key symptoms and findings
3. Think about what body system is involved
4. Consider common diseases first
5. Do not ignore red flag symptoms
6. Look for classic patterns

## Common Diagnoses to Know

- Heart attack
- Pneumonia
- Appendicitis
- Stroke
- Diabetes complications
- Common cancers`,
      keyTerms: [
        { term: 'diagnosis', definition: 'The identification of the nature of an illness or other problem by examination of the symptoms' },
        { term: 'differential diagnosis', definition: 'A list of possible conditions that could explain a patient\'s symptoms' },
        { term: 'physical examination', definition: 'The process of evaluating the body and its functions using observation, palpation, percussion, and auscultation' },
        { term: 'red flag', definition: 'A symptom or sign that indicates a potentially serious condition requiring urgent attention' },
      ],
      analogies: [
        'Diagnosis is like being a detective - you gather clues (symptoms) and evidence (tests) to solve the mystery (disease).',
        'The differential diagnosis is like a list of suspects - you narrow it down based on evidence.',
      ],
      examples: [
        'A patient with chest pain, shortness of breath, and sweating might be having a heart attack.',
        'A child with fever, sore throat, and swollen neck glands likely has strep throat.',
      ],
      patientCounselingPoints: [
        'Making a diagnosis involves gathering information from many sources',
        'Sometimes multiple tests are needed to confirm a diagnosis',
      ],
    },

    2: {
      level: 2,
      summary: 'Step 2 diagnostic reasoning requires systematic approach to clinical data, pattern recognition, and probabilistic thinking. Questions emphasize identifying the most likely diagnosis, best initial test, and most accurate diagnostic test.',
      explanation: `## Step 2 Diagnostic Reasoning Overview

Step 2 CK focuses on clinical diagnosis through systematic evaluation of patient presentations, diagnostic testing, and clinical decision-making.

## Diagnostic Framework

**History Taking:**
| Element | Components | Clinical Value |
|---------|------------|----------------|
| Chief complaint | Primary symptom | Focus of evaluation |
| HPI | OLDCARTS | Symptom characterization |
| Past history | Medical, surgical | Risk factors |
| Medications | Prescription, OTC | Drug causes |
| Family history | Genetic risks | Hereditary diseases |
| Social history | Habits, exposures | Environmental factors |

**Physical Examination:**
| System | Key Maneuvers | Common Findings |
|--------|---------------|-----------------|
| Cardiovascular | Inspection, palpation, auscultation | Murmurs, gallops |
| Pulmonary | Inspection, percussion, auscultation | Crackles, wheezes |
| Abdominal | Inspection, auscultation, percussion, palpation | Masses, tenderness |
| Neurological | Mental status, cranial nerves, motor, sensory, reflexes | Focal deficits |
| Skin | Inspection, palpation | Rashes, lesions |

**Diagnostic Testing Strategy:**
| Test Type | When to Use | Examples |
|-----------|-------------|----------|
| Screening | Asymptomatic patients | Mammography, colonoscopy |
| Diagnosis | Confirm or rule out disease | Biopsy, culture |
| Staging | Determine extent | CT scans, PET |
| Monitoring | Follow disease course | Tumor markers, HbA1c |
| Prognosis | Predict outcomes | Genetic testing |

## Common Diagnostic Patterns

**Chest Pain Differential:**
| Diagnosis | Key Features | Initial Test |
|-----------|--------------|--------------|
| MI | Crushing, radiation, diaphoresis | ECG, troponins |
| PE | Sudden, pleuritic, dyspnea, risk factors | CT angiography |
| Aortic dissection | Tearing, BP differential, widened mediastinum | CT angiography |
| Pneumothorax | Sudden, unilateral decreased breath sounds | Chest X-ray |
| Pericarditis | Sharp, positional, friction rub | ECG, echo |

**Abdominal Pain Differential:**
| Diagnosis | Location | Key Features |
|-----------|----------|--------------|
| Appendicitis | RLQ | Migration, rebound, fever |
| Cholecystitis | RUQ | Post-prandial, Murphy sign |
| Pancreatitis | Epigastric | Radiates to back, elevated amylase/lipase |
| Diverticulitis | LLQ | Fever, leukocytosis |
| SBO | Diffuse | Distension, vomiting, obstipation |

**Headache Differential:**
| Type | Features | Red Flags |
|------|----------|-----------|
| Tension | Bilateral, pressure, stress | New onset >50 |
| Migraine | Unilateral, throbbing, photophobia | Thunderclap onset |
| Cluster | Periorbital, tearing, rhinorrhea | Different pattern |
| Secondary | Variable | Any red flag |

## Diagnostic Test Interpretation

**Test Characteristics:**
| Measure | Definition | Clinical Use |
|---------|------------|--------------|
| Sensitivity | True positive rate | Rules out if negative |
| Specificity | True negative rate | Rules in if positive |
| PPV | Positive test = disease | Varies with prevalence |
| NPV | Negative test = no disease | Varies with prevalence |
| LR+ | Sensitivity/(1-specificity) | Post-test probability |
| LR- | (1-sensitivity)/specificity | Post-test probability |

**Test Selection:**
| Goal | Test Characteristic | Example |
|------|---------------------|---------|
| Screen | High sensitivity | HIV screening |
| Confirm | High specificity | Western blot for HIV |
| Rule out | High sensitivity | D-dimer for PE |
| Rule in | High specificity | CT for PE |

## Step 2 Question Types

**Most Likely Diagnosis:**
- Identify key features
- Match to disease pattern
- Consider prevalence
- Think about red flags

**Best Initial Test:**
- Most informative first step
- Consider screening vs diagnostic
- Balance sensitivity, specificity, cost
- Least invasive appropriate test

**Most Accurate Test:**
- Gold standard
- Highest diagnostic yield
- Definitive diagnosis
- May be invasive or expensive

**Next Best Step:**
- Prioritize life threats
- Consider diagnostic vs therapeutic
- Think about urgency
- Follow algorithmic approach`,
      keyTerms: [
        { term: 'sensitivity', definition: 'The proportion of true positives correctly identified by a test' },
        { term: 'specificity', definition: 'The proportion of true negatives correctly identified by a test' },
        { term: 'likelihood ratio', definition: 'The likelihood that a given test result would be expected in a patient with the target disorder' },
        { term: 'gold standard', definition: 'The definitive diagnostic test against which other tests are measured' },
      ],
      analogies: [
        'Sensitivity is like a fishing net - a highly sensitive net catches all the fish but might also catch other things.',
        'Diagnostic testing is like peeling an onion - you start with broad tests and get more specific as you narrow down the diagnosis.',
      ],
      examples: [
        'A D-dimer test has high sensitivity but low specificity for PE - good for ruling out but not ruling in.',
        'In a patient with suspected appendicitis, CT scan is the most accurate test but ultrasound is often the best initial test.',
      ],
      patientCounselingPoints: [
        'Diagnostic tests have different strengths - some are good for screening, others for confirmation',
        'Test results must be interpreted in the context of the patient\'s symptoms and risk factors',
      ],
    },

    3: {
      level: 3,
      summary: 'Step 2 diagnostic mastery requires systematic data collection, probabilistic reasoning, and efficient test selection. High-yield skills include recognizing disease patterns, interpreting diagnostic studies, and prioritizing life-threatening conditions.',
      explanation: `## Comprehensive Step 2 Diagnostic Framework

Mastery of diagnosis for Step 2 requires integrating clinical data, understanding diagnostic testing principles, and applying systematic reasoning to patient presentations.

## Advanced Diagnostic Reasoning

**Dual Process Theory:**
| Type | Process | When Used |
|------|---------|-----------|
| System 1 | Pattern recognition | Common presentations |
| System 2 | Analytical | Complex, atypical cases |

**Probabilistic Reasoning:**
- Pre-test probability
- Test characteristics
- Post-test probability
- Decision thresholds

**Bayesian Reasoning:**

Post-test odds = Pre-test odds x Likelihood ratio

**Pre-Test Probability Assessment:**
| Factor | Impact |
|--------|--------|
| Prevalence | Base rate |
| Risk factors | Modifiers |
| Clinical gestalt | Experience |
| Decision rules | Calculated risk |

## Disease Pattern Recognition

**Classic Presentations:**

**Cardiovascular:**
| Disease | Classic Presentation | Confirming Test |
|---------|---------------------|-----------------|
| STEMI | Crushing chest pain, ST elevation | Cardiac cath |
| NSTEMI | Chest pain, troponin elevation | Cardiac cath |
| Aortic stenosis | Syncope, angina, dyspnea | Echo |
| Heart failure | SOB, JVD, edema | BNP, echo |
| Atrial fibrillation | Irregular heartbeat, palpitations | ECG |

**Pulmonary:**
| Disease | Classic Presentation | Confirming Test |
|---------|---------------------|-----------------|
| COPD | Chronic cough, dyspnea, smoking | PFTs |
| Asthma | Wheezing, reversible obstruction | PFTs |
| Pneumonia | Fever, cough, infiltrate | Chest X-ray |
| PE | Dyspnea, tachypnea, risk factors | CT angiography |
| Lung cancer | Smoking, hemoptysis, mass | Biopsy |

**GI:**
| Disease | Classic Presentation | Confirming Test |
|---------|---------------------|-----------------|
| GERD | Heartburn, worse supine | PPI trial, endoscopy |
| PUD | Epigastric pain, H. pylori | Endoscopy |
| IBD | Diarrhea, blood, abdominal pain | Colonoscopy |
| Celiac | Diarrhea, weight loss, IgA-TTG | Biopsy |
| Hepatitis | Jaundice, elevated LFTs | Serologies |

## Diagnostic Algorithms

**Chest Pain Algorithm:**
1. ABCs, vital signs
2. ECG (within 10 minutes)
3. Troponins
4. If STEMI: Activate cath lab
5. If NSTEMI: Risk stratify
6. If low risk: Consider stress test
7. Always consider PE, aortic dissection

**Abdominal Pain Algorithm:**
1. History: OPQRST
2. Physical: Focused exam
3. Labs: CBC, CMP, lipase, UA
4. Imaging based on location:
   - RUQ: RUQ ultrasound
   - RLQ: CT abdomen/pelvis
   - Epigastric: Lipase, CT if severe
   - Diffuse: CT abdomen/pelvis

**Syncope Algorithm:**
1. Determine if true syncope
2. History: Circumstances, symptoms
3. Physical: Orthostatics, cardiac exam
4. ECG
5. Risk stratification (SFSR, OESIL)
6. Further testing based on risk

## Advanced Test Interpretation

**ROC Curves:**
- Plot sensitivity vs 1-specificity
- AUC indicates test discrimination
- Optimal cut-point selection
- Compare tests

**Number Needed to Test:**
---
NNT = 1 / (Sensitivity x Prevalence)
---

**Testing Thresholds:**
| Threshold | Decision |
|-----------|----------|
| Below | No testing |
| Testing to treatment | Diagnostic testing |
| Above | Empiric treatment |

**Decision Analysis:**
- Expected value calculations
- Cost-effectiveness
- Quality-adjusted life years
- Shared decision-making

## Cognitive Biases in Diagnosis

| Bias | Description | Prevention |
|------|-------------|------------|
| Anchoring | Fixation on initial info | Consider alternatives |
| Availability | Recent cases influence | Base rates matter |
| Confirmation | Seeking confirming data | Actively seek disconfirming |
| Premature closure | Stopping too soon | Mandatory differential |
| Attribution | Stereotyping | Individualized assessment |

## Diagnostic Efficiency

**High-Yield Testing:**
| Presentation | Best Initial Test | Most Accurate Test |
|--------------|-------------------|-------------------|
| Suspected PE | D-dimer or CT angio | CT angiography |
| Suspected appendicitis | CT abdomen | CT abdomen |
| Suspected DVT | Compression US | Venography (rarely used) |
| Suspected cholecystitis | RUQ US | HIDA scan |
| Suspected stroke | Non-contrast head CT | MRI |
| Suspected meningitis | Blood culture, LP | CSF analysis |

**Value-Based Testing:**
- Right test for right patient
- Right time in pathway
- Consider downstream consequences
- Avoid low-yield testing`,
      keyTerms: [
        { term: 'pre-test probability', definition: 'The probability of disease before a diagnostic test is performed' },
        { term: 'post-test probability', definition: 'The probability of disease after incorporating test results' },
        { term: 'clinical prediction rule', definition: 'A tool that uses clinical findings to predict probability of disease' },
        { term: 'diagnostic yield', definition: 'The proportion of tests that provide clinically useful information' },
      ],
      analogies: [
        'Pre-test probability is like the weather forecast - it gives you the baseline chance before you look out the window.',
        'A diagnostic algorithm is like a GPS - it guides you step by step to your destination (diagnosis).',
      ],
      examples: [
        'The Wells criteria for PE assigns points to clinical features, creating a pre-test probability to guide testing strategy.',
        'In a young patient with low pre-test probability for CAD, a positive stress test is more likely to be a false positive than true positive.',
      ],
      patientCounselingPoints: [
        'Diagnostic algorithms help ensure important conditions are not missed',
        'Test choice depends on the likelihood of disease and the test\'s characteristics',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Step 2 diagnostic reasoning requires probabilistic thinking, understanding of diagnostic test performance, and systematic approaches to complex presentations. Expert clinicians balance efficiency with thoroughness while avoiding cognitive biases.',
      explanation: `## Advanced Step 2 Diagnostic Concepts

Professional-level diagnostic mastery requires sophisticated understanding of probability, test interpretation, and complex clinical reasoning.

## Complex Diagnostic Reasoning

**Hypothetico-Deductive Reasoning:**
1. Generate hypotheses (differential)
2. Collect data to test hypotheses
3. Revise probabilities
4. Repeat until diagnosis clear

**Illness Scripts:**
| Component | Description |
|-----------|-------------|
| Preconditions | Risk factors, context |
| Fault | Pathophysiology |
| Consequences | Symptoms, signs, findings |
| Management | Treatment, prognosis |

**Expert vs Novice Differences:**
| Expert | Novice |
|--------|--------|
| Pattern recognition | Feature matching |
| Illness scripts | Disease definitions |
| Efficient testing | Shotgun testing |
| Probabilistic thinking | Deterministic thinking |

## Diagnostic Test Performance

**Likelihood Ratio Application:**

**Pre-test to Post-test Conversion:**
---
Pre-test probability -> Pre-test odds
Pre-test odds x LR = Post-test odds
Post-test odds -> Post-test probability
---

**Fagan Nomogram:**
- Visual probability conversion
- Lines connect pre-test, LR, post-test
- Quick bedside estimation

**Threshold Analysis:**
| Probability | Action |
|-------------|--------|
| <1% | Rule out, no testing |
| 1-10% | Test if safe, non-invasive |
| 10-50% | Diagnostic testing indicated |
| 50-90% | Treat or test for confirmation |
| >90% | Treat empirically |

## Complex Clinical Scenarios

**Undifferentiated Dyspnea:**
| Diagnosis | Clues | Best Test |
|-----------|-------|-----------|
| CHF | Orthopnea, JVD, edema | BNP, echo |
| COPD | Smoking, chronic cough | PFTs |
| PE | Risk factors, tachypnea | CT angiography |
| Pneumonia | Fever, cough, infiltrate | Chest X-ray |
| Anemia | Fatigue, pallor | CBC |
| Anxiety | Young, paresthesias | Diagnosis of exclusion |

**Acute Abdomen:**
| Diagnosis | Clues | Urgency |
|-----------|-------|---------|
| Ruptured AAA | Elderly, hypotension, pulsatile mass | Emergency |
| Perforated viscus | Rigid abdomen, free air | Emergency |
| Mesenteric ischemia | Atrial fibrillation, pain out of proportion | Emergency |
| SBO | Distension, vomiting, surgery history | Urgent |
| Pancreatitis | Epigastric, elevated lipase | Urgent |
| Cholecystitis | RUQ pain, Murphy sign | Urgent |

**Altered Mental Status:**
| Category | Causes | Workup |
|----------|--------|--------|
| Structural | Stroke, mass, bleed | Head CT, MRI |
| Infectious | Meningitis, encephalitis | LP, cultures |
| Toxic | Drugs, alcohol, CO | Drug levels, tox screen |
| Metabolic | Glucose, electrolytes, liver | BMP, LFTs, ammonia |
| Seizure | Post-ictal, non-convulsive | EEG |

## Diagnostic Imaging

**CT Applications:**
| Indication | Modality | Findings |
|------------|----------|----------|
| Stroke | Non-contrast head | Hemorrhage, early ischemia |
| PE | CT angiography | Filling defects |
| Aortic dissection | CT angiography | Intimal flap |
| Appendicitis | CT abdomen | Appendiceal dilation |
| Diverticulitis | CT abdomen | Colonic inflammation |

**MRI Applications:**
| Indication | Sequence | Findings |
|------------|----------|----------|
| Stroke | DWI | Acute ischemia |
| MS | T2, FLAIR | White matter lesions |
| Seizure | T2, FLAIR | Hippocampal sclerosis |
| Infection | T1 post-contrast | Enhancement |
| Tumor | T1 post-contrast | Mass effect |

**Ultrasound Applications:**
| Indication | Technique | Findings |
|------------|-----------|----------|
| Gallbladder | RUQ | Stones, wall thickening |
| DVT | Compression | Non-compressible vein |
| FAST | Trauma | Free fluid |
| Echocardiography | Transthoracic | Wall motion, EF |
| OB/GYN | Transvaginal | Pregnancy, masses |

## Evidence-Based Diagnosis

**Clinical Prediction Rules:**
| Rule | Application | Components |
|------|-------------|------------|
| Wells (DVT) | DVT probability | Clinical features |
| Wells (PE) | PE probability | Clinical features |
| PERC | PE rule-out | 8 criteria |
| HEART | Cardiac risk | History, ECG, age, risk factors, troponin |
| CURB-65 | Pneumonia severity | Confusion, urea, RR, BP, age |
| Ottawa ankle | Fracture probability | Examination |

**Systematic Reviews:**
- Diagnostic accuracy studies
- Meta-analysis of tests
- Summary sensitivity/specificity
- Clinical utility assessment

## Quality and Safety

**Diagnostic Errors:**
| Type | Description | Prevention |
|------|-------------|------------|
| No-fault | Rare disease, atypical presentation | Awareness |
| System | Equipment failure, communication | Checklists |
| Cognitive | Thinking errors | Decision support |

**Safety Strategies:**
- Checklists
- Time-outs
- Second opinions
- Decision support tools
- Closed-loop communication

## Teaching Diagnostic Reasoning

| Strategy | Application |
|----------|-------------|
| Think aloud | Model reasoning |
| Case-based | Active learning |
| Reflective practice | Error analysis |
| Simulation | Safe practice |
| Feedback | Specific, timely |`,
      keyTerms: [
        { term: 'illness script', definition: 'A mental representation of a disease that includes predisposing conditions, pathophysiology, and clinical consequences' },
        { term: 'clinical prediction rule', definition: 'A decision tool that uses clinical findings to calculate disease probability' },
        { term: 'diagnostic yield', definition: 'The proportion of tests that provide clinically useful results' },
        { term: 'threshold approach', definition: 'Using probability thresholds to guide diagnostic and therapeutic decisions' },
      ],
      analogies: [
        'Clinical prediction rules are like actuarial tables - they use data to calculate risk more accurately than intuition.',
        'Illness scripts are like movie genres - you recognize the pattern even though every movie is slightly different.',
      ],
      examples: [
        'The HEART score for chest pain patients combines history, ECG, age, risk factors, and troponin to risk-stratify for major adverse cardiac events.',
        'Using the PERC rule, patients with low pre-test probability who meet all 8 criteria do not need D-dimer testing for PE.',
      ],
      patientCounselingPoints: [
        'Clinical decision tools help doctors determine which tests are necessary',
        'Diagnostic reasoning is a skill that improves with experience and training',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert Step 2 diagnostic mastery integrates probabilistic reasoning, advanced test interpretation, and systematic approaches to undifferentiated illness. Professional excellence requires diagnostic calibration, awareness of cognitive biases, and contribution to diagnostic quality improvement.',
      explanation: `## Expert Step 2 Diagnostic Framework

Professional-level diagnostic mastery synthesizes clinical expertise, probabilistic reasoning, quality science, and educational leadership.

## Advanced Probabilistic Reasoning

**Bayesian Networks:**
| Concept | Application |
|---------|-------------|
| Conditional independence | Separating disease features |
| Joint probability | Multiple findings combination |
| Network structure | Disease-symptom relationships |

**Monte Carlo Simulations:**
- Probabilistic sensitivity analysis
- Decision tree modeling
- Cost-effectiveness analysis
- Uncertainty quantification

**Machine Learning in Diagnosis:**
| Approach | Application |
|----------|-------------|
| Supervised learning | Pattern recognition |
| Natural language processing | History extraction |
| Computer vision | Imaging interpretation |
| Deep learning | Complex pattern detection |

## Complex Diagnostic Challenges

**Diagnostic Uncertainty:**
| Strategy | Application |
|----------|-------------|
| Watchful waiting | Time as diagnostic tool |
| Therapeutic trial | Response to treatment |
| Serial testing | Trend analysis |
| Specialist referral | Expert consultation |

**Rare Diseases:**
| Approach | Consideration |
|----------|---------------|
| Prevalence awareness | Base rate neglect risk |
| Pattern deviation | Atypical presentations |
| Genetic testing | Molecular diagnosis |
| Multidisciplinary | Specialized knowledge |

**Multimorbidity:**
- Competing diagnoses
- Drug interactions
- Atypical presentations
- Prioritization challenges

## Diagnostic Quality Science

**Measurement:**
| Metric | Definition |
|--------|------------|
| Diagnostic accuracy | Correct diagnoses / Total |
| Time to diagnosis | Presentation to answer |
| Diagnostic process quality | Adherence to best practice |
| Patient safety events | Harm from diagnostic errors |

**Improvement Strategies:**
| Strategy | Implementation |
|----------|----------------|
| Feedback systems | Track diagnostic performance |
| Second reads | Review by colleagues |
| Checklists | Standardize evaluation |
| Decision support | AI-assisted diagnosis |

**Diagnostic Safety:**
- The "Big Three": Cancer, vascular events, infections
- Delayed diagnosis prevention
- Communication failures
- System factors

## Research Methods

**Diagnostic Test Studies:**
| Design | Application |
|--------|-------------|
| Cross-sectional | Sensitivity, specificity |
| Cohort | Predictive values |
| RCT | Impact on outcomes |
| Diagnostic case-control | Rare diseases |

**Bias Assessment:**
| Bias | Impact |
|------|--------|
| Spectrum | Limited generalizability |
| Verification | Inflated accuracy |
| Incorporation | Circular reasoning |
| Partial verification | Biased estimates |

## Clinical Decision Support

**Electronic Tools:**
| Type | Function |
|------|----------|
| Order sets | Standardize workup |
| Alerts | Prevent errors |
| Calculators | Risk stratification |
| Differential generators | Expand consideration |

**Implementation Science:**
| Factor | Strategy |
|--------|----------|
| Usability | Design for workflow |
| Integration | EHR embedding |
| Overcoming alert fatigue | Tiered alerting |
| Adoption | Training, feedback |

## Global Health Diagnostics

**Resource-Limited Settings:**
| Challenge | Solution |
|-----------|----------|
| Limited imaging | Clinical algorithms |
| Laboratory constraints | Point-of-care tests |
| Specialist shortage | Telemedicine, task-shifting |
| Cost barriers | Essential diagnostics |

**Point-of-Care Testing:**
- Rapid diagnostic tests
- Smartphone microscopy
- Biosensors
- AI-augmented interpretation

## Future of Diagnosis

**Emerging Technologies:**
| Technology | Application |
|------------|-------------|
| Liquid biopsy | Cancer detection |
| Multi-omics | Precision diagnosis |
| Wearables | Continuous monitoring |
| AI imaging | Automated interpretation |

**Paradigm Shifts:**
| From | To |
|------|-----|
| Symptom-based | Molecular-based |
| One-time | Continuous |
| Physician-centered | Patient-centered |
| Reactive | Predictive |

## Professional Development

**Diagnostic Calibration:**
- Track accuracy
- Feedback systems
- Compare to benchmarks
- Continuous improvement

**Teaching Excellence:**
- Case-based learning
- Simulation
- Reflective practice
- Mentorship

**Leadership:**
- Quality improvement
- Safety culture
- Innovation adoption
- Policy influence`,
      keyTerms: [
        { term: 'diagnostic calibration', definition: 'The alignment between a clinician\'s confidence and their diagnostic accuracy' },
        { term: 'point-of-care testing', definition: 'Medical diagnostic testing performed at or near the site of patient care' },
        { term: 'clinical decision support', definition: 'Health information technology systems that provide clinicians with knowledge and person-specific information' },
        { term: 'diagnostic safety', definition: 'The prevention of errors and harm related to the diagnostic process' },
      ],
      clinicalNotes: `Expert perspective on Step 2 diagnosis:

1. **Probability is Key:** Think in probabilities, not certainties. Pre-test probability drives test interpretation and diagnostic strategy.

2. **Pattern Recognition:** Develop illness scripts for common conditions. Expert diagnosticians primarily use pattern recognition.

3. **Avoid Premature Closure:** Force yourself to generate a differential diagnosis. Never anchor on the first possibility.

4. **Test Wisely:** Understand sensitivity, specificity, and likelihood ratios. Choose tests that will change your management.

5. **Red Flags First:** Always rule out life-threatening conditions before focusing on benign diagnoses.

6. **Clinical Prediction Rules:** Use validated decision rules to standardize risk assessment and guide testing.

7. **Time as Diagnostic Tool:** Sometimes observation over time clarifies the diagnosis better than immediate testing.

8. **Know Your Limits:** Recognize when referral is appropriate. No one can diagnose everything.

9. **Diagnostic Safety:** The "Big Three" (cancer, vascular events, infections) account for most serious diagnostic errors. Be vigilant.

10. **Continuous Learning:** Diagnostic skill improves with deliberate practice, feedback, and systematic study of cases.`,
    },
  },

  media: [
    {
      id: 'diagnostic-algorithm',
      type: 'diagram',
      filename: 'diagnostic-algorithm.svg',
      title: 'Diagnostic Algorithm Flowchart',
      description: 'Flowchart showing systematic diagnostic approach',
    },
    {
      id: 'test-characteristics',
      type: 'diagram',
      filename: 'test-characteristics.svg',
      title: 'Sensitivity and Specificity',
      description: '2x2 table showing test characteristic calculations',
    },
  ],

  citations: [
    {
      id: 'first-aid-step2',
      type: 'textbook',
      title: 'First Aid for the USMLE Step 2 CK',
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
    {
      id: 'master-diagnosis',
      type: 'textbook',
      title: 'Learning Clinical Reasoning',
      authors: ['Bowen, J.L.'],
      source: 'BMJ',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'parent', label: 'Step 2 Overview' },
    { targetId: 'education-usmle-step2-management', targetType: 'concept', relationship: 'related', label: 'Step 2 Management' },
    { targetId: 'education-clinical-reasoning', targetType: 'concept', relationship: 'related', label: 'Clinical Reasoning' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['USMLE Step 2', 'diagnosis', 'clinical reasoning'],
    keywords: ['USMLE', 'Step 2', 'diagnosis', 'differential diagnosis', 'clinical reasoning'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default step2Diagnosis;
