/**
 * Cardiac Warning Signs - Heart Disease Management
 *
 * Teaching patients to recognize warning signs of cardiac emergencies.
 */

import { EducationalContent } from '../../types';

export const CARDIAC_WARNING_SIGNS: EducationalContent = {
  id: 'heart-disease-cardiac-warning-signs',
  type: 'concept',
  name: 'Cardiac Warning Signs',
  alternateNames: ['Heart attack symptoms', 'Heart emergency signs', 'When to call 911'],

  levels: {
    1: {
      level: 1,
      summary: 'Knowing the warning signs of heart problems can save your life. Learn when to call 911 and when to contact your doctor.',
      explanation: `**Heart Attack Warning Signs - Call 911:**

*Common Symptoms:*
- Chest pain or pressure (may feel like squeezing or heaviness)
- Pain spreading to arm, jaw, neck, or back
- Shortness of breath
- Breaking out in a cold sweat
- Nausea or vomiting
- Lightheadedness

**Important:** Women may have different symptoms, including unusual fatigue, back pain, or no chest pain at all.

**Heart Failure Warning Signs - Call Your Doctor:**

*Weight Changes:*
- Gain of 2-3 pounds in one day
- Gain of 5 pounds in one week

*Breathing Problems:*
- More shortness of breath than usual
- Waking up at night unable to breathe
- Needing more pillows to sleep

*Swelling:*
- Feet, ankles, or legs more swollen
- Belly feels bloated

**Irregular Heartbeat Signs:**
- Heart racing or pounding
- Heart skipping beats
- Fluttering feeling in chest
- Dizziness with irregular heartbeat

**When to Call 911:**
- Chest pain lasting more than a few minutes
- Severe shortness of breath
- Fainting or nearly fainting
- Chest pain with sweating, nausea, or arm pain

**When to Call Your Doctor:**
- Symptoms worse than usual
- New symptoms
- Weight gain (heart failure)
- Medication concerns

**Act FAST:**
- Don't wait to see if symptoms go away
- Call 911, don't drive yourself
- Chew an aspirin if not allergic (ask your doctor ahead of time)
- Unlock your door for paramedics

**Plan Ahead:**
- Know the warning signs
- Keep a list of your medications
- Know where the nearest hospital is
- Tell family members what to do in an emergency`,
      keyTerms: [
        { term: 'heart attack', definition: 'When blood flow to part of the heart is blocked, damaging the heart muscle' },
        { term: 'angina', definition: 'Chest pain caused by reduced blood flow to the heart' },
        { term: 'heart failure', definition: 'When the heart cannot pump well enough to meet the body\'s needs' },
      ],
      analogies: [
        'Heart attack warning signs are like fire alarms - when they go off, you need to act immediately.',
        'Your body sends signals when something is wrong with your heart, like warning lights on a car dashboard.',
      ],
      examples: [
        'John felt pressure in his chest and pain in his left arm. He called 911 right away. At the hospital, they found he was having a heart attack and treated him quickly.',
        'Mary noticed she gained 4 pounds in two days and her ankles were more swollen. She called her heart failure nurse, who adjusted her medications.',
      ],
    },
    2: {
      level: 2,
      summary: 'Recognizing cardiac warning signs enables timely intervention for acute coronary syndrome, decompensated heart failure, and dangerous arrhythmias, potentially preventing death or serious complications.',
      explanation: `**Acute Coronary Syndrome (ACS) Symptoms:**

*Classic Presentation:*
- Chest discomfort (pressure, squeezing, fullness, pain)
- Duration: >20 minutes (not relieved by rest or nitroglycerin)
- Associated symptoms: diaphoresis, dyspnea, nausea

*Atypical Presentations (More Common in Women, Elderly, Diabetics):*
| Symptom | Frequency |
|---------|-----------|
| Dyspnea without chest pain | Common |
| Jaw/neck/back pain | Common |
| Fatigue | Common |
| Nausea/vomiting | Common |
| No symptoms (silent MI) | 20-40% of MIs |

**Heart Failure Decompensation:**

*Early Warning Signs (Contact Provider):*
| Sign | Significance |
|------|--------------|
| Weight gain 2-3 lbs/day | Fluid retention |
| Increasing dyspnea on exertion | Worsening congestion |
| New/worsening edema | Volume overload |
| Increasing pillow use at night | Orthopnea |
| Decreased exercise tolerance | Cardiac reserve declining |

*Late/Urgent Signs (Same-Day Evaluation):*
- Dyspnea at rest
- Severe peripheral edema
- Unable to lie flat (orthopnea)
- Waking up gasping (PND)
- Marked fatigue

*Emergency Signs (Call 911):*
- Severe respiratory distress
- Chest pain
- New confusion
- Syncope

**Arrhythmia Warning Signs:**

| Symptom | Possible Arrhythmia |
|---------|---------------------|
| Rapid pounding heart | Tachycardia (SVT, AF, VT) |
| Slow heart rate + symptoms | Bradycardia, heart block |
| Irregular heartbeat | Atrial fibrillation |
| Palpitations + syncope | Ventricular arrhythmia |
| Palpitations + chest pain | Concerning for ischemia |

**Stroke Warning Signs (FAST):**
- **F**ace drooping
- **A**rm weakness
- **S**peech difficulty
- **T**ime to call 911

**Action Plans:**

*ACS Action Plan:*
1. Stop activity, rest
2. Take nitroglycerin if prescribed (up to 3 doses, 5 min apart)
3. Call 911 if symptoms persist >5 minutes
4. Chew aspirin 325mg (if not contraindicated)
5. Unlock door, wait for EMS

*Heart Failure Action Plan:*
| Zone | Symptoms | Action |
|------|----------|--------|
| Green | At baseline weight, no new symptoms | Continue daily monitoring |
| Yellow | Weight up 2-4 lbs, mild symptoms | Call provider, adjust diuretics |
| Red | Weight up >5 lbs, severe symptoms | Seek emergency care |

**Patient Education Points:**
- Know your personal warning signs
- Keep current medication list
- Know allergies (especially aspirin)
- Have action plan written and visible
- Educate family members`,
      keyTerms: [
        { term: 'acute coronary syndrome', definition: 'Spectrum of conditions from unstable angina to heart attack caused by reduced blood flow to heart' },
        { term: 'orthopnea', definition: 'Difficulty breathing when lying flat, requiring elevation of head' },
        { term: 'paroxysmal nocturnal dyspnea', definition: 'Waking suddenly at night with shortness of breath' },
        { term: 'syncope', definition: 'Temporary loss of consciousness; fainting' },
      ],
      analogies: [
        'Heart failure zones (green, yellow, red) work like traffic lights - they tell you when to keep going, slow down, or stop and get help.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac warning sign recognition enables risk stratification, timely triage, and appropriate escalation of care for acute coronary syndromes, acute decompensated heart failure, and life-threatening arrhythmias.',
      explanation: `**Pathophysiology of Cardiac Warning Signs:**

*Acute Coronary Syndrome:*
\`\`\`
Plaque Rupture/Erosion
         ↓
Platelet Aggregation/Thrombus
         ↓
Coronary Artery Occlusion
         ↓
Myocardial Ischemia → Chest Pain, Autonomic Activation
         ↓
Myocardial Necrosis (if prolonged)
\`\`\`

*Heart Failure Decompensation:*
\`\`\`
Trigger (infection, non-adherence, ischemia)
         ↓
Neurohormonal Activation
         ↓
Sodium/Water Retention → Weight Gain, Edema
         ↓
Elevated Filling Pressures → Dyspnea, Orthopnea
         ↓
Reduced Cardiac Output → Fatigue, Confusion
\`\`\`

**Clinical Risk Stratification:**

*ACS Presentation:*
| Feature | Higher Risk | Lower Risk |
|---------|-------------|------------|
| Duration | Prolonged (>20 min) | Brief, intermittent |
| Character | Pressure, heaviness | Sharp, positional |
| Associated symptoms | Diaphoresis, dyspnea | None |
| Rest symptoms | Yes | Exertional only |
| Hemodynamic instability | Yes | No |

*HEART Score Components:*
- History
- ECG
- Age
- Risk factors
- Troponin

**Heart Failure Congestion Assessment:**

*Clinical Signs:*
| Sign | Sensitivity | Specificity |
|------|-------------|-------------|
| Elevated JVP | Moderate | High |
| S3 gallop | Low | High |
| Peripheral edema | Moderate | Low |
| Rales | Low | Moderate |
| Weight gain | High | Moderate |

*Biomarkers:*
- BNP/NT-proBNP: Elevated in congestion
- Troponin: May indicate myocardial injury
- Lactate: Hypoperfusion marker

**Arrhythmia Risk Assessment:**

*High-Risk Features:*
| Symptom Pattern | Concern |
|-----------------|---------|
| Syncope with palpitations | Ventricular arrhythmia |
| Syncope with exertion | Structural heart disease |
| Palpitations + chest pain | Ischemic arrhythmia |
| Prolonged palpitations + dyspnea | Tachycardia-induced cardiomyopathy |
| Palpitations + family sudden death | Inherited arrhythmia |

**Triage Protocols:**

*Pre-Hospital:*
\`\`\`
Chest Pain Assessment:
- STEMI criteria → Activate cath lab
- High-risk ACS → Emergency transport
- Low-risk → Appropriate triage
\`\`\`

*Emergency Department:*
- ECG within 10 minutes
- Troponin
- Risk stratification
- Disposition decision

**Patient Self-Management Support:**

*Action Plan Components:*
1. Recognition: Know personal warning signs
2. Response: What to do for each sign
3. Reporting: When and who to call
4. Resources: Emergency contacts, medications

*Teach-Back Verification:*
- When would you call 911?
- When would you call your doctor?
- What would you do for chest pain?
- What weight gain should you report?

**Special Populations:**

*Diabetic Patients:*
- Higher rate of silent ischemia
- Atypical presentations
- Lower pain threshold education

*Elderly:*
- Atypical ACS presentations
- Delirium as heart failure sign
- Falls may indicate arrhythmia

*Women:*
- Fatigue, dyspnea more common than chest pain
- Delayed presentation
- Different treatment outcomes`,
      keyTerms: [
        { term: 'STEMI', definition: 'ST-elevation myocardial infarction; heart attack with complete coronary artery occlusion' },
        { term: 'HEART score', definition: 'Risk stratification tool for chest pain in emergency department' },
        { term: 'JVP', definition: 'Jugular venous pressure; clinical marker of right heart filling pressure' },
        { term: 'S3 gallop', definition: 'Third heart sound indicating volume overload and ventricular dysfunction' },
      ],
      clinicalNotes: 'Silent MI more common in diabetics and elderly. Weight gain often precedes clinical congestion by days. Syncope with palpitations requires urgent arrhythmia evaluation. Action plans improve self-management and reduce hospitalizations.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac warning sign recognition integrates clinical presentation patterns, biomarker interpretation, risk stratification algorithms, and decision support systems to optimize triage and outcomes in acute cardiovascular emergencies.',
      explanation: `**Pathophysiological Basis of Symptoms:**

*Chest Pain Mechanisms:*
\`\`\`
Ischemic Pain:
- Adenosine release from hypoxic myocardium
- Stimulation of cardiac afferents
- Referred via cardiac plexus to C8-T4 dermatomes
- Explains arm, jaw, neck referral

Non-Ischemic Cardiac Pain:
- Pericarditis: Pericardial inflammation
- Aortic dissection: Adventitial stretch receptors
- Acute HF: Pulmonary venous distension
\`\`\`

*Dyspnea in Heart Disease:*
| Mechanism | Condition |
|-----------|-----------|
| Pulmonary congestion | HF, MS |
| Reduced cardiac output | HF, AS |
| Arrhythmia | AF, VT |
| Diastolic dysfunction | HFpEF |

**Advanced Risk Stratification:**

*ACS Risk Scores:*
| Score | Components | Use |
|-------|------------|-----|
| HEART | History, ECG, Age, Risk, Troponin | ED triage |
| TIMI | Age, risk factors, presentation | Prognosis |
| GRACE | HR, BP, Cr, ECG, troponin, Killip | In-hospital/6-month mortality |

*Heart Failure Decompensation Prediction:*
\`\`\`
Clinical Predictors:
- Renal function change
- BNP trajectory
- Blood pressure trends
- Weight patterns
- Symptom progression

AI/ML Models:
- Multi-parameter integration
- Pattern recognition
- Days-to-event prediction
- Personalized alerts
\`\`\`

**Biomarker Interpretation:**

*Troponin:*
| Pattern | Interpretation |
|---------|----------------|
| Rising/falling pattern | Acute MI |
| Elevated, stable | Chronic elevation (CKD, stable HF) |
| Very high, early peak | Reperfusion |
| Modestly elevated | Demand ischemia, myocarditis |

*Natriuretic Peptides:*
| Level | Interpretation |
|-------|----------------|
| Normal | HF unlikely as cause of symptoms |
| Elevated, stable | Chronic HF at baseline |
| Rising | Decompensation, worsening |
| Very high | Severe decompensation |

**Decision Support Systems:**

*Clinical Decision Rules:*
\`\`\`
Chest Pain Evaluation:
IF HEART score 0-3 AND low-risk features
   → Consider discharge with follow-up
IF HEART score 4-6
   → Observation, serial troponins
IF HEART score 7-10 OR high-risk features
   → Admission, cardiology consultation
\`\`\`

*Remote Monitoring Integration:*
- Weight trends triggering alerts
- Implanted hemodynamic monitors
- Activity pattern changes
- Heart rate variability shifts

**Atypical Presentations:**

*Silent Ischemia Detection:*
| Population | Detection Strategy |
|------------|-------------------|
| Diabetics | Lower threshold for testing, education |
| Elderly | Functional status monitoring |
| Women | Awareness of atypical symptoms |
| Post-CABG | Changed referral patterns |

*Prodromal Symptoms:*
- Fatigue days before event
- Sleep disturbance
- Vague discomfort
- Women more likely to have prodrome

**System-Level Approaches:**

*STEMI Systems of Care:*
\`\`\`
Recognition (EMS/ED)
         ↓
Activation (Cath lab)
         ↓
Transportation
         ↓
Door-to-Balloon Time (<90 min target)
         ↓
Primary PCI
\`\`\`

*Heart Failure Care Pathways:*
- Transitional care programs
- Early warning systems
- Remote monitoring protocols
- Care escalation triggers

**Patient Engagement:**

*Self-Monitoring Effectiveness:*
| Behavior | Impact |
|----------|--------|
| Daily weights | Reduced HF hospitalizations |
| Symptom diaries | Improved communication |
| BP monitoring | Better hypertension control |
| Action plan use | Appropriate care seeking |

*Barriers to Recognition:*
- Symptom normalization
- Fear of healthcare
- Cognitive impairment
- Health literacy
- Social isolation`,
      keyTerms: [
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events score; predicts in-hospital and 6-month mortality in ACS' },
        { term: 'high-sensitivity troponin', definition: 'Cardiac troponin assay detecting lower concentrations, enabling earlier MI diagnosis' },
        { term: 'door-to-balloon time', definition: 'Time from hospital arrival to coronary artery reperfusion; quality metric for STEMI care' },
        { term: 'prodromal symptoms', definition: 'Early warning signs occurring days to weeks before acute cardiac event' },
        { term: 'demand ischemia', definition: 'Myocardial oxygen supply-demand mismatch without coronary occlusion' },
      ],
      clinicalNotes: 'High-sensitivity troponin requires pattern interpretation - single values less informative than trends. HEART score 0-3 identifies patients safe for early discharge. Women more likely to have prodromal symptoms days before ACS. Remote monitoring can detect decompensation days before clinical presentation.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art cardiac warning sign detection integrates multi-modal sensing, artificial intelligence, precision phenotyping, and learning health system approaches to enable predictive, personalized cardiovascular emergency prevention and response.',
      explanation: `**Precision Symptom Phenotyping:**

*Multi-Dimensional Assessment:*
\`\`\`
Traditional:
- Symptom presence/absence
- Severity rating
- Duration

Precision Approach:
- Symptom clusters
- Temporal patterns
- Contextual factors
- Biomarker correlation
- Individual baseline comparison
- Phenotype classification
\`\`\`

*Machine Learning for Symptom Analysis:*
| Application | Approach |
|-------------|----------|
| Symptom classification | NLP from patient reports |
| Pattern recognition | Time-series analysis |
| Risk prediction | Multi-feature models |
| Phenotype clustering | Unsupervised learning |

**Advanced Sensing Technologies:**

*Wearable Monitoring:*
\`\`\`
Continuous Data Streams:
- ECG/heart rhythm
- Heart rate variability
- Activity patterns
- Sleep quality
- Blood pressure (emerging)
- Blood oxygen

Analytics:
- Arrhythmia detection
- Anomaly identification
- Trend analysis
- Risk alerts
\`\`\`

*Implantable Monitoring:*
| Device | Parameters | Evidence |
|--------|------------|----------|
| CardioMEMS | PA pressure | Reduces HF hospitalizations |
| ICD/CRT | Impedance, activity, rhythm | Alert generation |
| Micra | HR, activity | Rhythm monitoring |

**AI-Enabled Prediction:**

*Current Applications:*
- ECG-based heart failure detection
- Arrhythmia prediction
- Decompensation forecasting
- Mortality risk stratification

*Emerging Capabilities:*
\`\`\`
Predictive Model Architecture:
Input Layer:
- Vital signs
- Symptoms
- Activity data
- Lab values
- Medication adherence
- Environmental factors

Processing:
- Deep learning networks
- Temporal analysis
- Feature extraction
- Pattern matching

Output:
- Risk probability
- Time-to-event estimate
- Recommended actions
- Confidence intervals
\`\`\`

**Digital Health Integration:**

*Telemedicine Triage:*
| Symptom | Virtual Assessment |
|---------|-------------------|
| Chest pain | Risk stratification, disposition |
| Dyspnea | Video assessment, vital signs |
| Palpitations | Remote ECG, rhythm analysis |
| Edema | Visual assessment, weight trend |

*Chatbot/AI First Response:*
- Symptom collection
- Risk stratification
- Escalation triggers
- Care navigation

**Precision Risk Stratification:**

*Individual Risk Profiles:*
\`\`\`
Factors Integrated:
- Genomics (CAD risk variants)
- Imaging (plaque burden, structure)
- Biomarkers (hsTn, BNP baseline)
- Wearable data (HRV, activity)
- Lifestyle factors
- Social determinants

Output:
- Personalized risk thresholds
- Individualized warning signs
- Tailored action plans
\`\`\`

**Learning Health System:**

*Continuous Improvement:*
\`\`\`
Clinical Care → Data Capture
         ↓
Pattern Analysis
         ↓
Algorithm Refinement
         ↓
Clinical Decision Support Update
         ↓
Improved Care → Better Outcomes
\`\`\`

*Real-World Evidence:*
- Symptom-outcome correlations
- Intervention effectiveness
- Phenotype-specific responses
- System performance metrics

**Implementation Considerations:**

*Equity and Access:*
| Challenge | Approach |
|-----------|----------|
| Technology access | Community partnerships |
| Digital literacy | Multi-modal interfaces |
| Language barriers | Multilingual support |
| Trust | Transparent algorithms |

*Regulatory Framework:*
- FDA oversight of AI/ML tools
- Liability considerations
- Privacy protections
- Clinical validation requirements

**Future Directions:**

*Research Priorities:*
- Prospective AI validation
- Multi-modal data integration
- Explainable AI development
- Health equity in digital health
- Long-term outcome studies

*Emerging Technologies:*
- Voice biomarkers
- Facial analysis
- Contactless vital signs
- Environmental sensors
- Predictive digital twins`,
      keyTerms: [
        { term: 'digital twin', definition: 'Computational model of individual patient enabling personalized simulation and prediction' },
        { term: 'explainable AI', definition: 'Artificial intelligence approaches providing understandable rationale for predictions' },
        { term: 'voice biomarker', definition: 'Analysis of voice characteristics to detect health status changes' },
        { term: 'learning health system', definition: 'Healthcare system embedding research and improvement into routine care' },
        { term: 'multi-modal sensing', definition: 'Integration of multiple sensor types for comprehensive physiological monitoring' },
        { term: 'digital phenotyping', definition: 'Using digital device data to characterize health patterns and predict outcomes' },
      ],
      clinicalNotes: 'AI-based warning systems are emerging but require clinical validation and integration into workflows. Wearable-detected arrhythmias are increasingly common - clinical interpretation frameworks needed. Equity considerations essential in technology deployment. Human oversight remains critical for AI-generated alerts and recommendations.',
    },
  },

  media: [
    {
      id: 'heart-attack-warning-signs',
      type: 'diagram',
      filename: 'heart-attack-signs.svg',
      title: 'Heart Attack Warning Signs',
      description: 'Visual guide to recognizing heart attack symptoms',
    },
  ],

  citations: [
    {
      id: 'aha-warning-signs',
      type: 'website',
      title: 'Warning Signs of a Heart Attack',
      source: 'American Heart Association',
      url: 'https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-warning-signs', targetType: 'topic', relationship: 'related', label: 'Warning Signs Recognition' },
    { targetId: 'heart-disease-daily-weight-chf', targetType: 'topic', relationship: 'related', label: 'Daily Weight Monitoring' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['heart disease', 'emergency care', 'patient education'],
    keywords: ['heart attack symptoms', 'warning signs', 'cardiac emergency', 'when to call 911'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
