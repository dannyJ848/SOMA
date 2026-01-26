/**
 * Blood Pressure Monitoring - Heart Disease Management
 *
 * Teaching patients how to monitor blood pressure at home
 * for heart disease and hypertension management.
 */

import { EducationalContent } from '../../types';

export const BLOOD_PRESSURE_MONITORING: EducationalContent = {
  id: 'heart-disease-blood-pressure-monitoring',
  type: 'concept',
  name: 'Blood Pressure Monitoring',
  alternateNames: ['Home BP monitoring', 'Self-measured blood pressure', 'SMBP'],

  levels: {
    1: {
      level: 1,
      summary: 'Checking your blood pressure at home helps you and your doctor keep your heart healthy by making sure your blood pressure stays in a good range.',
      explanation: `**What Is Blood Pressure?**
Blood pressure is the force of blood pushing against the walls of your blood vessels. It has two numbers:
- **Top number (systolic):** Pressure when your heart beats
- **Bottom number (diastolic):** Pressure when your heart rests between beats

**What Do the Numbers Mean?**

| Category | Top Number | Bottom Number |
|----------|------------|---------------|
| Normal | Less than 120 | Less than 80 |
| Elevated | 120-129 | Less than 80 |
| High (Stage 1) | 130-139 | 80-89 |
| High (Stage 2) | 140 or higher | 90 or higher |
| Crisis | Higher than 180 | Higher than 120 |

**Why Check at Home?**
- Your reading at the doctor may be different than at home
- Helps track if your treatment is working
- Helps you see patterns over time
- Makes you more involved in your health

**How to Check Your Blood Pressure:**

*Before You Measure:*
- Sit quietly for 5 minutes
- Don't smoke, drink coffee, or exercise for 30 minutes before
- Empty your bladder
- Sit with feet flat on floor, back supported

*Taking the Reading:*
1. Put the cuff on your bare upper arm
2. Rest your arm on a table at heart level
3. Stay still and don't talk
4. Press the start button
5. Wait for the reading
6. Write down the numbers

**When to Check:**
- Morning: Before taking medications, after waking
- Evening: Before dinner or bed
- Same times each day
- At least 2 readings each time, 1 minute apart

**Keep a Record:**
Write down:
- Date and time
- Your readings
- Which arm
- Any notes (stressed, forgot medication, etc.)

**When to Call Your Doctor:**
- Top number over 180 OR bottom number over 120
- Very low readings with symptoms
- Readings consistently outside your target

**Tips for Accurate Readings:**
- Use the same arm each time
- Make sure cuff size is right for your arm
- Keep a log to share with your doctor`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against your blood vessel walls' },
        { term: 'systolic', definition: 'The top number - pressure when your heart beats' },
        { term: 'diastolic', definition: 'The bottom number - pressure when your heart rests' },
        { term: 'hypertension', definition: 'High blood pressure' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a hose - too much pressure can damage the hose over time, just like high blood pressure can damage your blood vessels.',
        'The two blood pressure numbers are like the wave pattern at the beach - the top number is the wave crashing (heart pumping), the bottom is the water between waves (heart resting).',
      ],
      examples: [
        'Maria checks her blood pressure every morning before breakfast. She writes her readings in a notebook to show her doctor.',
        'Tom noticed his evening readings were higher than morning readings. His doctor adjusted his medication timing based on this information.',
      ],
    },
    2: {
      level: 2,
      summary: 'Home blood pressure monitoring provides more accurate assessment of blood pressure control than office measurements alone, guiding treatment decisions and improving outcomes in hypertension and heart disease.',
      explanation: `**Understanding Blood Pressure Measurement:**

Blood pressure is measured in millimeters of mercury (mmHg) and expressed as systolic over diastolic pressure. Home monitoring addresses limitations of office-based measurement.

**Blood Pressure Categories (ACC/AHA 2017):**

| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | <120 | AND <80 |
| Elevated | 120-129 | AND <80 |
| Stage 1 HTN | 130-139 | OR 80-89 |
| Stage 2 HTN | ≥140 | OR ≥90 |
| Hypertensive Crisis | >180 | AND/OR >120 |

**Benefits of Home Monitoring:**

*Clinical Benefits:*
- Detects white coat hypertension (elevated in office only)
- Detects masked hypertension (elevated at home only)
- Monitors treatment response
- Improves BP control rates
- Enhances patient engagement

*Practical Benefits:*
- Multiple readings in real-world setting
- Cost-effective over time
- Convenient
- Supports telemedicine care

**Proper Technique:**

*Equipment Selection:*
- Validated automatic upper arm monitor
- Proper cuff size (80% of arm circumference)
- Avoid wrist monitors unless specifically validated

*Measurement Protocol:*
1. **Preparation (5 minutes before):**
   - Empty bladder
   - Sit in chair with back supported
   - Feet flat on floor
   - Rest arm on table at heart level
   - Relax, no talking

2. **Cuff Placement:**
   - On bare arm
   - Bottom of cuff 1 inch above elbow
   - Snug but not tight

3. **Taking Readings:**
   - Take 2 readings, 1 minute apart
   - Record both readings
   - Calculate average

**Monitoring Schedule:**

*Initial Diagnosis or Medication Change:*
- Twice daily (morning and evening) for 1-2 weeks
- 2 readings at each time
- Average of readings (excluding first day)

*Stable Control:*
- At least twice weekly
- More frequent if indicated

**Recording and Reporting:**

*What to Track:*
| Data Point | Why It Matters |
|------------|----------------|
| Date/time | Pattern identification |
| Readings | Treatment effectiveness |
| Arm used | Consistency |
| Position | Standardization |
| Notes | Context (symptoms, missed meds) |

*Average Calculation:*
- Exclude first day readings
- Average remaining readings
- Home average ≥135/85 suggests hypertension

**Special Situations:**

*White Coat Hypertension:*
- Office BP elevated, home BP normal
- Lower cardiovascular risk than sustained hypertension
- Monitor regularly; may progress

*Masked Hypertension:*
- Office BP normal, home BP elevated
- Higher cardiovascular risk
- Treatment usually indicated

**Technology Options:**
- Connected monitors with apps
- Cloud storage and sharing
- Integration with EHR
- Telehealth support`,
      keyTerms: [
        { term: 'white coat hypertension', definition: 'Blood pressure elevated only in medical settings due to anxiety' },
        { term: 'masked hypertension', definition: 'Blood pressure normal in office but elevated at home' },
        { term: 'validated monitor', definition: 'Blood pressure device tested for accuracy according to established protocols' },
        { term: 'oscillometric measurement', definition: 'Automated method detecting arterial pulsations to measure blood pressure' },
      ],
      analogies: [
        'One blood pressure reading is like a single snapshot - it captures that moment but not the whole movie of how your pressure changes throughout the day.',
      ],
    },
    3: {
      level: 3,
      summary: 'Self-measured blood pressure monitoring is integral to hypertension diagnosis and management, providing out-of-office measurements that better predict cardiovascular outcomes and enable personalized treatment optimization.',
      explanation: `**Clinical Framework:**

Self-measured blood pressure monitoring (SMBP) has become standard of care for hypertension diagnosis and management based on evidence that home readings better predict cardiovascular outcomes than office measurements.

**Physiological Considerations:**

*Blood Pressure Variability:*
- Diurnal variation (morning surge, nocturnal dip)
- Visit-to-visit variability
- Seasonal variation
- Situational factors (stress, caffeine, activity)

*Implications:*
- Single readings unreliable
- Multiple readings over time needed
- Home readings capture real-world patterns
- 24-hour ABPM provides most complete picture

**Diagnostic Thresholds:**

| Setting | Hypertension Threshold |
|---------|------------------------|
| Office | ≥140/90 mmHg (or ≥130/80 per ACC/AHA) |
| Home (SMBP) | ≥135/85 mmHg |
| Daytime ABPM | ≥135/85 mmHg |
| Nighttime ABPM | ≥120/70 mmHg |
| 24-hour ABPM | ≥130/80 mmHg |

**Evidence Base:**

*Prognostic Value:*
- SMBP predicts cardiovascular events better than office BP
- Home systolic BP 10 mmHg higher → ~25% increased CV risk
- Masked hypertension carries elevated risk despite normal office BP
- White coat effect associated with lower but not absent risk

*Clinical Outcomes:*
| Study Finding | Impact |
|---------------|--------|
| SMBP improves BP control | Meta-analyses confirm |
| Reduces therapeutic inertia | More medication adjustments |
| Cost-effective | Comparable or better than usual care |
| Patient empowerment | Improved adherence |

**Protocol Standardization:**

*AHA/AMA Target:BP Protocol:*
1. Use validated, automatic, cuff-style monitor
2. Measure in morning and evening
3. Take 2 readings at each time, 1 minute apart
4. Discard first day's readings
5. Average remaining readings
6. Continue for 7 days (minimum 3 days)

*Thresholds for Action:*
| Average SMBP | Interpretation |
|--------------|----------------|
| <130/80 | Well-controlled |
| 130-134/80-84 | Borderline, monitor closely |
| ≥135/85 | Above goal, intensify therapy |

**Device Selection:**

*Validation Standards:*
- AAMI/ISO 81060-2
- ESH International Protocol
- validateBP.org database

*Features to Consider:*
| Feature | Importance |
|---------|------------|
| Validation | Essential |
| Cuff sizes | Ensure proper fit |
| Memory | Track readings |
| Connectivity | Data sharing |
| Averaging | Automatic calculation |
| Irregular heartbeat detection | For arrhythmias |

**Integration with Care:**

*Treatment Titration:*
- Home BP data guides medication adjustment
- Telemedicine protocols enable remote titration
- More frequent adjustments possible

*Team-Based Care:*
- Pharmacist BP management programs
- Nurse-led hypertension clinics
- Clinical pharmacy BP services
- Community health worker support

**Special Populations:**

*Chronic Kidney Disease:*
- Higher BP variability
- Masked hypertension common
- Volume-dependent changes

*Heart Failure:*
- Orthostatic changes
- Volume status affects BP
- Guide diuretic therapy

*Pregnancy:*
- Monitor for preeclampsia
- Lower thresholds apply
- Timely intervention critical`,
      keyTerms: [
        { term: 'ambulatory blood pressure monitoring (ABPM)', definition: '24-hour continuous BP measurement providing the most comprehensive assessment' },
        { term: 'blood pressure variability', definition: 'Fluctuations in BP over time; itself a cardiovascular risk factor' },
        { term: 'therapeutic inertia', definition: 'Failure to intensify therapy when treatment goals are not met' },
        { term: 'Target:BP', definition: 'AHA/AMA initiative providing standardized protocols for BP management' },
      ],
      clinicalNotes: 'Home BP better predicts cardiovascular outcomes than office BP. Use validated monitors (validateBP.org). Standard protocol: morning and evening, 2 readings each, average over 7 days. Threshold for hypertension at home is ≥135/85 mmHg. Address therapeutic inertia by using home BP data for titration decisions.',
    },
    4: {
      level: 4,
      summary: 'Self-measured blood pressure monitoring integrates with precision medicine approaches, remote patient monitoring systems, and population health strategies to optimize hypertension control and cardiovascular risk reduction.',
      explanation: `**Physiological Basis of BP Measurement:**

*Hemodynamic Principles:*
\`\`\`
Blood Pressure = Cardiac Output × Systemic Vascular Resistance

Cardiac Output = Stroke Volume × Heart Rate

Factors Affecting BP:
- Autonomic nervous system
- Renin-angiotensin-aldosterone system
- Endothelial function
- Vascular compliance
- Blood volume
\`\`\`

*Measurement Physics:*
- Oscillometric detection of arterial pulsations
- Algorithm estimation of systolic/diastolic
- Device-specific algorithms
- Validation against auscultatory reference

**Blood Pressure Phenotyping:**

*Classification by Office and Out-of-Office:*
| Office BP | Out-of-Office BP | Phenotype | Risk |
|-----------|------------------|-----------|------|
| Elevated | Elevated | Sustained HTN | Highest |
| Normal | Elevated | Masked HTN | High |
| Elevated | Normal | White Coat HTN | Moderate |
| Normal | Normal | Normotension | Lowest |

*Phenotype-Specific Management:*
| Phenotype | Approach |
|-----------|----------|
| Sustained HTN | Standard treatment |
| Masked HTN | Treatment indicated; close monitoring |
| White Coat HTN | Lifestyle; monitor for progression |

**Advanced Monitoring Approaches:**

*24-Hour Ambulatory Monitoring (ABPM):*
- Gold standard for out-of-office BP
- Captures nocturnal BP
- Assesses dipping pattern
- Detects masked nocturnal hypertension

*Dipping Patterns:*
| Pattern | Nocturnal Decline | Cardiovascular Risk |
|---------|-------------------|---------------------|
| Normal dip | 10-20% | Reference |
| Non-dip | <10% | Elevated |
| Reverse dip | BP rises at night | Highest |
| Extreme dip | >20% | Variable |

**Technology Integration:**

*Remote Patient Monitoring (RPM):*
\`\`\`
Home BP Device
      ↓
Data Transmission (Bluetooth/cellular)
      ↓
Cloud Platform
      ↓
Analytics (trends, alerts)
      ↓
Clinical Dashboard
      ↓
Provider Review/Response
      ↓
Patient Feedback
\`\`\`

*Artificial Intelligence Applications:*
- Pattern recognition
- Risk prediction
- Treatment response prediction
- Alert optimization
- Medication adherence monitoring

**Population Health Approaches:**

*Hypertension Control Programs:*
| Element | Implementation |
|---------|----------------|
| SMBP distribution | Provide validated monitors |
| Training | Proper technique education |
| Data collection | Connected devices or manual logs |
| Titration protocols | Algorithm-driven adjustments |
| Team-based care | Pharmacist, nurse, CHW involvement |
| Feedback | Regular communication to patients |

*Kaiser Permanente Example:*
- Standardized SMBP protocols
- Medical assistant-led follow-up
- Clinical pharmacy titration
- EHR integration
- Achieved 90%+ control rates

**Special Considerations:**

*Arrhythmias:*
- Atrial fibrillation affects accuracy
- Multiple readings needed
- Some devices detect irregular rhythm
- ABPM may be preferable

*Obesity:*
- Proper cuff sizing critical
- Conical arm shapes challenging
- Wrist devices may be needed
- Validation in obese populations varies

*Older Adults:*
- Higher variability
- Orthostatic hypotension common
- Standing BP measurements useful
- Frailty considerations in targets

**Implementation Science:**

*Barriers to SMBP:*
- Device cost
- Technical literacy
- Motivation
- Healthcare access
- Data integration

*Facilitators:*
- Device provision programs
- Simplified protocols
- Team-based support
- Telehealth integration
- Reimbursement policies`,
      keyTerms: [
        { term: 'blood pressure phenotype', definition: 'Classification based on combination of office and out-of-office BP patterns' },
        { term: 'nocturnal dipping', definition: 'Normal 10-20% decrease in BP during sleep; absence increases cardiovascular risk' },
        { term: 'remote patient monitoring', definition: 'Technology-enabled collection of patient data for review by healthcare providers' },
        { term: 'oscillometry', definition: 'Automated BP measurement technique detecting arterial wall oscillations' },
        { term: 'cuff hypertension', definition: 'Spuriously elevated BP due to arterial stiffness, more common in elderly' },
      ],
      clinicalNotes: 'BP phenotyping with both office and home measurements is more informative than either alone. Nocturnal dipping pattern predicts cardiovascular risk; ABPM required for assessment. RPM programs can improve hypertension control at scale. Address proper cuff sizing - most errors from incorrect cuff size.',
    },
    5: {
      level: 5,
      summary: 'Contemporary blood pressure monitoring leverages cuffless technologies, advanced signal processing, artificial intelligence, and precision medicine to transform hypertension management and cardiovascular risk stratification.',
      explanation: `**Evolution of BP Measurement:**

*Historical Progression:*
\`\`\`
Mercury sphygmomanometry (Korotkoff 1905)
         ↓
Aneroid devices
         ↓
Oscillometric automated devices
         ↓
24-hour ambulatory monitoring
         ↓
Home self-measurement
         ↓
Cuffless and wearable technologies (emerging)
\`\`\`

**Emerging Technologies:**

*Cuffless Blood Pressure:*
| Technology | Principle | Status |
|------------|-----------|--------|
| Pulse transit time | Time from R-wave to pulse arrival | Research/early commercial |
| Photoplethysmography (PPG) | Optical detection of pulse | Smartphone/wearable apps |
| Tonometry | Arterial waveform analysis | Limited commercial |
| Radar | Chest wall motion | Research |
| Machine learning | Pattern recognition from signals | Integrated with above |

*Validation Challenges:*
- Calibration requirements
- Accuracy across BP ranges
- Individual variability
- Regulatory pathways
- Standards development

**Advanced Signal Processing:**

*Pulse Wave Analysis:*
\`\`\`
Arterial Waveform
      ↓
Signal Decomposition
      ↓
Feature Extraction:
- Augmentation index
- Pulse wave velocity
- Reflection magnitude
- Systolic/diastolic indices
      ↓
Hemodynamic Phenotyping
      ↓
Risk Stratification
\`\`\`

*Central Blood Pressure:*
- Aortic BP differs from brachial
- Better predictor of outcomes
- Estimated from peripheral waveforms
- Research supports clinical utility

**Artificial Intelligence Integration:**

*Machine Learning Applications:*
| Application | Approach | Clinical Value |
|-------------|----------|----------------|
| BP estimation | Deep learning from PPG | Cuffless monitoring |
| Pattern recognition | Time series analysis | Phenotype identification |
| Prediction | Risk modeling | Treatment decisions |
| Personalization | Individual modeling | Optimal targets |

*Challenges:*
- Training data quality
- Generalizability
- Explainability
- Regulatory approval
- Clinical integration

**Precision Hypertension:**

*Phenotyping Approaches:*
\`\`\`
Clinical Phenotype (BP level, comorbidities)
         +
Hemodynamic Phenotype (CO, SVR, PWV)
         +
Biomarker Phenotype (RAAS, sympathetic, endothelial)
         +
Genetic Phenotype (polygenic risk)
         =
Individualized Risk Profile
         ↓
Tailored Treatment Selection
\`\`\`

*Pharmacogenomics:*
| Gene | Drug | Application |
|------|------|-------------|
| ACE I/D | ACE inhibitors | Response prediction |
| ADRB1 | Beta-blockers | Efficacy variation |
| CYP2D6 | Beta-blockers | Metabolism |
| ADD1 | Diuretics | Response prediction |

**Wearable Integration:**

*Smartwatch BP Monitoring:*
- PPG-based estimation
- Continuous or on-demand
- Trend tracking
- Activity context
- Sleep monitoring

*Multi-Parameter Wearables:*
\`\`\`
Integrated Data Streams:
- Blood pressure (estimated)
- Heart rate/HRV
- Activity/steps
- Sleep stages
- ECG
- Oxygen saturation
         ↓
Comprehensive Cardiovascular Profiling
\`\`\`

**Population Health Innovation:**

*Digital Hypertension Programs:*
- App-based monitoring
- AI coaching
- Connected care teams
- Personalized interventions
- Scalable delivery

*Health Equity Considerations:*
- Device accuracy across skin tones
- Algorithm bias assessment
- Technology access disparities
- Culturally appropriate programs
- Social determinants integration

**Regulatory Landscape:**

*FDA Pathway:*
- Traditional 510(k) for cuff devices
- De novo for novel technologies
- SaMD for app-based tools
- CDRH guidance evolving

*Standards Development:*
- IEEE 1708 (cuffless BP)
- ISO 81060-2 (cuff devices)
- Validation protocols adapting

**Future Directions:**

*Research Priorities:*
- Cuffless validation studies
- Central BP clinical trials
- AI algorithm validation
- Health equity in technology
- Long-term outcome data

*Clinical Vision:*
\`\`\`
Future State:
- Continuous, unobtrusive monitoring
- Real-time risk assessment
- Adaptive treatment algorithms
- Personalized targets
- Prevention focus
- Health equity achievement
\`\`\``,
      keyTerms: [
        { term: 'cuffless blood pressure', definition: 'Measurement techniques not requiring inflation cuff, enabling continuous or wearable monitoring' },
        { term: 'pulse wave velocity', definition: 'Speed of arterial pulse propagation; marker of arterial stiffness' },
        { term: 'photoplethysmography (PPG)', definition: 'Optical technique detecting blood volume changes; used in smartwatches and pulse oximeters' },
        { term: 'central blood pressure', definition: 'Pressure in the aorta; may better predict outcomes than brachial pressure' },
        { term: 'augmentation index', definition: 'Measure of wave reflection derived from arterial waveform; related to arterial stiffness' },
        { term: 'hemodynamic phenotyping', definition: 'Classification based on cardiac output, vascular resistance, and other hemodynamic parameters' },
      ],
      clinicalNotes: 'Cuffless BP technologies are emerging but not yet validated for clinical decision-making. Central BP and arterial stiffness measures add to risk stratification. AI-enabled monitoring requires validation across diverse populations. Wearable integration offers promise but accuracy limitations persist. Focus on evidence-based approaches while monitoring technological evolution.',
    },
  },

  media: [
    {
      id: 'bp-technique-guide',
      type: 'diagram',
      filename: 'blood-pressure-technique.svg',
      title: 'Proper Blood Pressure Measurement Technique',
      description: 'Step-by-step visual guide for accurate home BP measurement',
    },
    {
      id: 'bp-log-template',
      type: 'diagram',
      filename: 'blood-pressure-log.pdf',
      title: 'Blood Pressure Log Template',
      description: 'Printable log for tracking home blood pressure readings',
    },
  ],

  citations: [
    {
      id: 'aha-bp-guidelines',
      type: 'article',
      title: 'ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'smbp-systematic-review',
      type: 'article',
      title: 'Self-measured Blood Pressure Monitoring: A Systematic Review',
      source: 'Annals of Internal Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'heart-disease-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Cardiac Medications' },
    { targetId: 'heart-disease-heart-healthy-diet', targetType: 'topic', relationship: 'related', label: 'Heart-Healthy Diet' },
    { targetId: 'chronic-disease-symptom-monitoring', targetType: 'topic', relationship: 'related', label: 'Symptom Monitoring' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['heart disease', 'hypertension', 'self-monitoring'],
    keywords: ['blood pressure', 'hypertension', 'home monitoring', 'cardiovascular health'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
