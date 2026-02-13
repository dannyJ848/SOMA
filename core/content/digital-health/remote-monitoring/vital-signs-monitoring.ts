/**
 * Vital Signs Monitoring
 *
 * Comprehensive educational content on remote monitoring of vital signs,
 * including devices, clinical applications, and interpretation of data.
 */

import { EducationalContent } from '../../types';

export const vitalSignsMonitoring: EducationalContent = {
  id: 'rpm-vital-signs-monitoring',
  type: 'concept',
  name: 'Vital Signs Monitoring',
  alternateNames: ['Remote Vitals Monitoring', 'Home Vital Signs Tracking', 'Connected Vitals', 'Digital Vital Signs'],

  levels: {
    1: {
      level: 1,
      summary: 'Vital signs are important measurements about your body like temperature, heart rate, and blood pressure, and now special devices let you check these at home and share them with your doctor.',
      explanation: `Your body tells you a lot about how healthy it is through "vital signs" - these are like your body's report card!

**What Are Vital Signs?**
Vital signs are measurements that show how your body is doing. The main ones are:
- **Temperature:** Is your body too hot (fever) or just right?
- **Heart rate:** How fast is your heart beating?
- **Blood pressure:** How hard is your blood pushing through your body?
- **Breathing rate:** How fast are you breathing?
- **Oxygen level:** How much oxygen is in your blood?

**Why Are Vital Signs Important?**
When you go to the doctor, they always check your vital signs first. These numbers tell them a lot about your health in just a few seconds! If something is wrong, vital signs often change before you even feel sick.

**Checking Vital Signs at Home**
You can now use special devices at home to check your vital signs:
- **Thermometer:** Put it under your tongue or on your forehead to check temperature
- **Blood pressure cuff:** Wraps around your arm to measure blood pressure
- **Pulse oximeter:** Clips on your finger to check oxygen and heart rate
- **Smart watch:** Can track heart rate and sometimes more

**How Home Monitoring Helps**
- You can check your health every day without going to the doctor
- The devices can send readings to your healthcare team
- Problems can be spotted early
- You learn more about your own body

**What Do Normal Vital Signs Look Like?**
| Vital Sign | Normal for Adults |
|------------|-------------------|
| Temperature | 97-99°F (36-37°C) |
| Heart rate | 60-100 beats per minute |
| Blood pressure | Less than 120/80 |
| Breathing rate | 12-20 breaths per minute |
| Oxygen level | 95-100% |

**When to Tell Someone**
Tell a parent or caregiver if your numbers are very different from normal, especially if you don't feel well!`,
      keyTerms: [
        { term: 'vital signs', definition: 'Important measurements that show how your body is working' },
        { term: 'temperature', definition: 'How hot or cold your body is' },
        { term: 'heart rate', definition: 'How many times your heart beats in one minute' },
        { term: 'blood pressure', definition: 'The force of blood pushing against your blood vessel walls' },
        { term: 'oxygen level', definition: 'How much oxygen is in your blood' },
      ],
      analogies: [
        'Vital signs are like a car\'s dashboard - they tell you how the engine (your body) is running.',
        'Checking vital signs regularly is like checking the weather every day - it helps you know if something\'s changing.',
        'A pulse oximeter is like a tiny window that lets you peek at what\'s happening inside your blood.',
      ],
      examples: [
        'When you have a fever, your temperature goes up to show your body is fighting something off.',
        'After running around, your heart rate goes up because your muscles need more blood.',
        'A grandmother checks her blood pressure every morning with a cuff that sends readings to her phone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vital signs monitoring uses connected devices to track key physiological parameters including blood pressure, heart rate, oxygen saturation, temperature, and respiratory rate, enabling continuous health surveillance and early detection of clinical changes.',
      explanation: `## Understanding Vital Signs

Vital signs represent fundamental physiological measurements that reflect cardiovascular, respiratory, and metabolic function. Remote monitoring of these parameters has become increasingly accessible through consumer and medical-grade connected devices.

## Core Vital Signs

| Vital Sign | Measurement | Normal Adult Range | Clinical Significance |
|------------|-------------|-------------------|----------------------|
| Blood Pressure | Systolic/Diastolic mmHg | <120/80 mmHg | Cardiovascular risk, organ perfusion |
| Heart Rate | Beats per minute | 60-100 bpm | Cardiac function, metabolic state |
| SpO2 | Oxygen saturation % | 95-100% | Respiratory function, tissue oxygenation |
| Temperature | °F or °C | 97.8-99.1°F (36.5-37.3°C) | Infection, inflammation, metabolic state |
| Respiratory Rate | Breaths per minute | 12-20/min | Respiratory function, acid-base status |

## Home Monitoring Devices

**Blood Pressure Monitors:**
- Upper arm cuffs (most accurate for home use)
- Wrist monitors (convenient but less accurate)
- Features: memory storage, irregular heartbeat detection, smartphone connectivity
- Validation: Look for devices validated against standards

**Pulse Oximeters:**
- Fingertip devices measuring SpO2 and pulse
- Reflective vs. transmissive technology
- Limitations: nail polish, cold fingers, dark skin tones may affect accuracy
- Clinical use expanded during COVID-19 pandemic

**Heart Rate Monitors:**
- Chest straps (most accurate)
- Wrist-based optical sensors
- Smartwatches and fitness trackers
- Single-lead ECG devices (Apple Watch, KardiaMobile)

**Thermometers:**
- Oral, temporal, tympanic, axillary methods
- Continuous temperature patches (fever monitoring)
- Connected thermometers with trending

## How Remote Vital Signs Monitoring Works

**Data Collection:**
1. Patient uses device to take measurement
2. Device displays reading and stores data
3. Data transmits via Bluetooth to phone app
4. App syncs with cloud platform
5. Healthcare team accesses data via dashboard

**Clinical Integration:**
- Alert systems for out-of-range values
- Trending and graphing over time
- Integration with electronic health records
- Provider review and clinical action

## Benefits of Regular Monitoring

**For Hypertension:**
- More readings = better picture of true BP
- Avoids "white coat" effect
- Tracks response to medications
- Supports lifestyle changes

**For Heart Conditions:**
- Early detection of rhythm changes
- Heart rate variability insights
- Post-procedure monitoring
- Exercise response tracking

**For Respiratory Conditions:**
- Oxygen level monitoring during illness
- COPD exacerbation detection
- Sleep-related breathing assessment
- Recovery tracking

## Best Practices for Accurate Readings

**Blood Pressure:**
- Rest 5 minutes before measuring
- Sit with back supported, feet flat
- Arm at heart level
- No caffeine or exercise 30 min before
- Same time each day

**Pulse Oximetry:**
- Warm hands
- Remove nail polish if needed
- Keep finger still
- Allow reading to stabilize
- Know your baseline

**General Tips:**
- Follow device instructions
- Maintain consistent routine
- Keep devices charged/batteries fresh
- Report concerning trends`,
      keyTerms: [
        { term: 'systolic pressure', definition: 'The higher number in blood pressure; pressure when heart beats' },
        { term: 'diastolic pressure', definition: 'The lower number in blood pressure; pressure between heartbeats' },
        { term: 'SpO2', definition: 'Oxygen saturation measured by pulse oximetry' },
        { term: 'white coat hypertension', definition: 'Elevated blood pressure in medical settings but normal at home' },
        { term: 'validated device', definition: 'Equipment tested against standards for accuracy' },
        { term: 'heart rate variability', definition: 'Variation in time between heartbeats; indicator of autonomic function' },
      ],
      analogies: [
        'Blood pressure monitoring at home is like checking traffic on your route - it gives you the real picture, not just what you see at certain times.',
        'A pulse oximeter is like a dipstick for your blood\'s oxygen level - quick and easy to check.',
      ],
    },
    3: {
      level: 3,
      summary: 'Remote vital signs monitoring encompasses validated device technologies, standardized measurement protocols, clinical interpretation frameworks, and integration pathways enabling effective physiological surveillance for chronic disease management and acute care transitions.',
      explanation: `## Physiological Basis and Clinical Correlation

**Blood Pressure:**
- Reflects cardiac output × systemic vascular resistance
- Ambulatory/home BP better predicts outcomes than office BP
- Target values vary by condition (HTN, diabetes, CKD)
- Variability itself has prognostic significance

**Heart Rate:**
- SA node rate modulated by autonomic nervous system
- Resting HR correlates with cardiovascular mortality
- HR recovery post-exercise indicates vagal tone
- HRV analysis provides autonomic function insights

**Oxygen Saturation:**
- Reflects hemoglobin oxygen binding
- Pulse oximetry measures functional saturation
- Accuracy affected by: perfusion, skin pigmentation, CO exposure
- Clinical targets vary (COPD often 88-92%)

## Device Technology and Validation

**Blood Pressure Monitors:**
| Validation Standard | Organization | Requirements |
|--------------------|--------------|--------------|
| ESH-IP2 | European Society of HTN | ≤5 mmHg mean difference |
| AAMI/ISO 81060-2 | AAMI/ISO | Validated protocol |
| BHS | British Hypertension Society | Graded accuracy criteria |

**Pulse Oximetry:**
- FDA guidance: ARMS (accuracy root mean square) ≤3%
- Testing in controlled desaturation studies
- Racial bias concerns: higher error in dark skin tones
- Continuous vs. spot-check devices

**ECG/Heart Rate:**
- Single-lead devices: rhythm detection, HR
- Multi-lead patches: more diagnostic capability
- Algorithm validation for arrhythmia detection
- FDA clearance requirements

## Measurement Protocols

**Standardized BP Measurement:**
\`\`\`
Preparation:
- 5 min seated rest
- Empty bladder
- No caffeine/tobacco 30 min prior
- Quiet environment

Technique:
- Proper cuff size
- Arm supported at heart level
- Two readings 1-2 min apart
- Average multiple readings

Timing:
- Morning and evening
- Before medications
- Same time daily
\`\`\`

**Alert Threshold Development:**
| Vital Sign | Yellow Alert | Red Alert |
|------------|--------------|-----------|
| Systolic BP | >160 or <100 | >180 or <90 |
| Diastolic BP | >100 | >120 |
| Heart Rate | >100 or <50 | >120 or <40 |
| SpO2 | <92% | <88% |
| Temperature | >100.4°F | >102°F |

## Clinical Applications

**Hypertension Management:**
- Home BP monitoring per AHA/ACC guidelines
- Out-of-office BP for diagnosis
- Treatment titration guidance
- Masked and white coat HTN detection

**Heart Failure:**
- Daily weight more predictive than vitals alone
- SpO2 decline may indicate decompensation
- HR trends correlate with status
- Combined with symptom assessment

**COPD Management:**
- SpO2 monitoring for exacerbation detection
- Personalized baseline establishment
- Oxygen titration support
- Activity-related desaturation tracking

**Post-Hospital Transitions:**
- 30-day high-risk period monitoring
- Medication adjustment support
- Early deterioration detection
- Reduced readmission potential

## Data Interpretation Framework

**Trending vs. Single Values:**
- Pattern recognition more valuable than single readings
- Establish individual baselines
- Recognize normal variability
- Identify clinically significant changes

**Contextual Factors:**
- Time of day
- Activity level
- Medication timing
- Recent illness
- Measurement technique

## Technology Integration

**Data Standards:**
- IEEE 11073 Personal Health Devices
- Bluetooth Health Device Profile
- HL7 FHIR resources
- Continua Design Guidelines

**Platform Requirements:**
- HIPAA-compliant data storage
- Clinical dashboard functionality
- EHR integration capability
- Alert management systems`,
      keyTerms: [
        { term: 'ambulatory blood pressure monitoring (ABPM)', definition: '24-hour BP measurement providing comprehensive assessment' },
        { term: 'ARMS', definition: 'Accuracy Root Mean Square - FDA standard for pulse oximeter accuracy' },
        { term: 'masked hypertension', definition: 'Normal office BP but elevated home/ambulatory BP' },
        { term: 'IEEE 11073', definition: 'International standard for personal health device communication' },
        { term: 'Continua guidelines', definition: 'Industry standards for interoperable connected health devices' },
        { term: 'HR recovery', definition: 'Heart rate decline after exercise cessation; marker of cardiac health' },
      ],
      clinicalNotes: 'Use validated devices for clinical decision-making. Establish patient-specific baselines and alert thresholds. Consider contextual factors when interpreting readings. Home BP measurements have stronger correlation with outcomes than office readings.',
    },
    4: {
      level: 4,
      summary: 'Advanced vital signs monitoring integrates multi-parameter physiological assessment, algorithmic analysis, wearable technology, and predictive analytics to enable early deterioration detection and personalized health management across care settings.',
      explanation: `## Multi-Parameter Integration

**Physiological Relationships:**
\`\`\`
Hemodynamic Assessment:
├── Blood Pressure
│   ├── Cardiac output component
│   └── Vascular resistance component
├── Heart Rate
│   ├── Autonomic regulation
│   └── Compensatory responses
├── Pulse Characteristics
│   ├── Rhythm regularity
│   └── Pulse pressure variation
└── Combined Indices
    ├── Rate-pressure product
    ├── Shock index (HR/SBP)
    └── Perfusion assessment
\`\`\`

**Clinical Interpretation Matrix:**
| Pattern | BP | HR | SpO2 | Interpretation |
|---------|----|----|------|----------------|
| Sepsis early | ↓ or N | ↑ | N or ↓ | Distributive physiology |
| Heart failure | ↑ or ↓ | ↑ | ↓ | Volume overload, low output |
| Hypovolemia | ↓ | ↑ | N initially | Compensated shock |
| PE | N or ↓ | ↑ | ↓ | V/Q mismatch |

## Advanced Monitoring Technologies

**Continuous Non-Invasive Monitoring:**
| Technology | Parameters | Status |
|------------|------------|--------|
| Cuffless BP | Continuous BP from PPG | Emerging, FDA pathways |
| Respiratory sensing | RR from accelerometry, impedance | Consumer devices |
| Continuous SpO2 | Overnight monitoring | Clinical available |
| HRV analysis | Autonomic function | Research/consumer |

**Wearable Integration:**
- Multi-sensor platforms
- Continuous data streams
- Activity context correlation
- Sleep quality assessment
- Stress and recovery metrics

**Validation Challenges:**
- Motion artifact management
- Diverse population accuracy
- Comparison to gold standards
- Real-world vs. controlled performance

## Predictive Analytics

**Early Warning Scores:**
\`\`\`
NEWS2 (National Early Warning Score):
- Respiratory rate: 0-3 points
- SpO2: 0-3 points
- Supplemental O2: 0-2 points
- Temperature: 0-3 points
- Systolic BP: 0-3 points
- Heart rate: 0-3 points
- Consciousness: 0-3 points
Total: 0-20, higher = higher risk
\`\`\`

**Machine Learning Applications:**
- Deterioration prediction
- Personalized threshold optimization
- Trend pattern recognition
- False alert reduction
- Multi-variate risk scoring

**Implementation Considerations:**
- Algorithm transparency
- Validation in target populations
- Integration with clinical workflow
- Alert fatigue management

## Special Populations

**Pediatric Monitoring:**
- Age-adjusted vital sign ranges
- Device sizing considerations
- Parental training requirements
- Growth-related changes

**Geriatric Considerations:**
- Higher BP variability
- Orthostatic changes
- Atypical presentations
- Baseline establishment challenges

**Pregnancy:**
- Physiologic changes in vitals
- Preeclampsia screening
- Fetal monitoring integration
- Postpartum transition

## Quality Assurance

**Device Performance:**
- Regular calibration verification
- Battery/power management
- Software update protocols
- Replacement schedules

**Data Quality:**
- Artifact identification
- Missing data management
- Measurement technique verification
- Context documentation

## Regulatory Landscape

**FDA Considerations:**
- Medical device classification
- 510(k) clearance pathways
- Software as Medical Device (SaMD)
- Continuous monitoring device guidance

**Clinical Validity Requirements:**
- Comparative accuracy studies
- Diverse population testing
- Use-case specific validation
- Post-market surveillance

## Emerging Directions

**Novel Biomarkers:**
- Pulse wave analysis
- Bioimpedance monitoring
- Photoplethysmography derivatives
- Acoustic sensing

**Integration Trends:**
- EHR population health dashboards
- Telehealth platform integration
- Hospital-at-home programs
- Value-based care alignment`,
      keyTerms: [
        { term: 'NEWS2', definition: 'National Early Warning Score 2 - aggregate vital signs-based risk score' },
        { term: 'cuffless blood pressure', definition: 'Emerging technology measuring BP without traditional inflation cuff' },
        { term: 'photoplethysmography (PPG)', definition: 'Optical technique measuring blood volume changes; basis for many wearable vital signs' },
        { term: 'shock index', definition: 'Heart rate divided by systolic BP; marker of hemodynamic instability' },
        { term: 'pulse pressure variation', definition: 'Change in pulse pressure with respiration; indicates volume responsiveness' },
        { term: 'bioimpedance', definition: 'Measurement of tissue electrical properties; used for fluid and cardiac output assessment' },
      ],
      clinicalNotes: 'Integrate multiple vital signs for comprehensive assessment. Consider physiological context when interpreting values. Emerging cuffless technologies require validation against standards. Early warning scores can be automated but require clinical integration.',
    },
    5: {
      level: 5,
      summary: 'Expert implementation of vital signs monitoring programs requires synthesis of clinical science, technology assessment, operational design, and health system integration to create scalable, equitable surveillance systems that improve population health outcomes.',
      explanation: `## Strategic Framework for Vital Signs Monitoring Programs

**Program Architecture:**
\`\`\`
Vital Signs Monitoring Program:
├── Clinical Design
│   ├── Evidence-based protocols
│   ├── Condition-specific pathways
│   ├── Population risk stratification
│   └── Outcome-driven targets
├── Technology Infrastructure
│   ├── Device selection criteria
│   ├── Data platform requirements
│   ├── Integration specifications
│   └── Cybersecurity framework
├── Operational Model
│   ├── Staffing and workflow
│   ├── Alert management protocols
│   ├── Quality assurance
│   └── Patient support services
└── Performance Framework
    ├── Clinical outcomes
    ├── Process metrics
    ├── Patient experience
    └── Financial sustainability
\`\`\`

## Evidence Synthesis and Protocol Development

**Evidence Hierarchy Application:**
| Evidence Type | Application | Example |
|---------------|-------------|---------|
| Guidelines | Foundation protocols | AHA home BP recommendations |
| RCTs | Specific interventions | Telemonitoring for heart failure |
| Meta-analyses | Aggregate effects | Remote monitoring outcomes |
| Real-world data | Implementation insights | Program-specific analytics |

**Protocol Customization:**
- Condition-specific monitoring parameters
- Risk-stratified intensity levels
- Individual baseline calibration
- Alert threshold personalization

## Advanced Technology Assessment

**Device Evaluation Framework:**
\`\`\`
Evaluation Criteria:
├── Clinical Performance
│   ├── Accuracy vs. reference standards
│   ├── Performance in target population
│   └── Real-world reliability
├── Usability
│   ├── Patient ease of use
│   ├── Setup complexity
│   └── Error modes
├── Connectivity
│   ├── Transmission reliability
│   ├── Platform compatibility
│   └── EHR integration
├── Regulatory
│   ├── FDA clearance status
│   ├── Validation standards met
│   └── Post-market surveillance
└── Operational
    ├── Cost per patient
    ├── Support requirements
    └── Vendor reliability
\`\`\`

**Emerging Technology Roadmap:**
- Cuffless BP: FDA pathways, validation status
- Continuous multi-parameter: Hospital-at-home applications
- AI-enhanced interpretation: Clinical decision support
- Consumer device integration: Interoperability strategies

## Operational Excellence

**Workflow Optimization:**
\`\`\`
Efficient Alert Management:
├── Tier 1: Automated processing
│   └── Normal values → acknowledgment only
├── Tier 2: Clinical staff review
│   └── Threshold breaches → protocol-driven response
├── Tier 3: Provider escalation
│   └── Critical values → immediate notification
└── Feedback Loop
    ├── Alert accuracy monitoring
    ├── Threshold recalibration
    └── False positive reduction
\`\`\`

**Staffing Models:**
| Model | Advantages | Challenges |
|-------|------------|------------|
| Centralized | Efficiency, expertise concentration | Less patient relationship |
| Distributed | Practice integration, continuity | Inconsistent protocols |
| Hybrid | Balanced approach | Coordination complexity |
| Vendor-provided | Turnkey operation | Less control, cost |

## Quality Framework

**Metrics Dashboard:**
\`\`\`
Clinical Outcomes:
├── BP control rates (target <130/80)
├── SpO2 maintenance rates
├── Emergency utilization
├── Hospitalization rates
└── Clinical events prevented

Process Metrics:
├── Measurement adherence rate
├── Alert response time
├── False alert rate
├── Device uptime
└── Patient retention

Patient Experience:
├── Satisfaction scores
├── Engagement metrics
├── Self-efficacy improvement
└── Care communication quality
\`\`\`

**Continuous Improvement:**
- Regular protocol review with outcomes data
- Benchmarking against best practices
- Innovation piloting and evaluation
- Staff feedback integration

## Health Equity Integration

**Addressing Disparities:**
\`\`\`
Equity Domains:
├── Device Access
│   ├── Cost barriers
│   ├── Device provision programs
│   └── Connectivity support
├── Usability
│   ├── Language accessibility
│   ├── Health literacy adaptation
│   └── Physical accessibility
├── Accuracy
│   ├── Skin tone validation
│   ├── Diverse population testing
│   └── Algorithm bias assessment
└── Outcomes
    ├── Stratified analysis
    ├── Disparity identification
    └── Targeted improvement
\`\`\`

**Implementation Strategies:**
- Community health worker integration
- Multilingual support
- Technology assistance programs
- Culturally adapted education

## Research and Innovation

**Priority Research Questions:**
1. Optimal monitoring frequency by condition
2. Alert threshold personalization methods
3. Multi-parameter integration algorithms
4. Long-term outcome impacts
5. Cost-effectiveness across populations

**Innovation Pipeline:**
- Academic partnerships for evaluation
- Industry collaboration for technology
- Pilot programs for emerging devices
- Publication and dissemination

## Future Directions

**Integration Trajectory:**
- Hospital-at-home programs
- Value-based care alignment
- Population health platforms
- AI-driven personalization

**Technology Evolution:**
- Seamless continuous monitoring
- Ambient sensing integration
- Predictive deterioration systems
- Closed-loop interventions`,
      keyTerms: [
        { term: 'hospital-at-home', definition: 'Care model providing hospital-level treatment in patient\'s residence' },
        { term: 'closed-loop intervention', definition: 'System automatically delivering treatment based on monitored parameters' },
        { term: 'ambient sensing', definition: 'Passive monitoring through environmental sensors without active patient participation' },
        { term: 'risk stratification', definition: 'Categorizing patients by likelihood of adverse outcomes to guide monitoring intensity' },
        { term: 'interoperability', definition: 'Ability of different systems and devices to exchange and use information' },
        { term: 'algorithm bias', definition: 'Systematic errors in algorithms leading to unfair outcomes for certain groups' },
      ],
      clinicalNotes: `Strategic Implementation Priorities:
1. Base protocols on condition-specific evidence with appropriate customization
2. Rigorously evaluate devices for accuracy in your patient population
3. Design workflows balancing alert sensitivity with clinician workload
4. Implement comprehensive quality metrics across clinical and operational domains
5. Integrate health equity considerations from program design through evaluation
6. Establish continuous improvement processes with data-driven optimization
7. Build innovation pipeline for emerging technologies and approaches
8. Align with value-based care and population health objectives`,
    },
  },

  media: [
    {
      id: 'vital-signs-overview',
      type: 'diagram',
      filename: 'vital-signs-overview.svg',
      title: 'Vital Signs Overview',
      description: 'Overview of vital signs, normal ranges, and clinical significance',
    },
    {
      id: 'monitoring-devices',
      type: 'diagram',
      filename: 'vital-signs-devices.svg',
      title: 'Vital Signs Monitoring Devices',
      description: 'Common devices for home vital signs monitoring',
    },
    {
      id: 'data-integration',
      type: 'diagram',
      filename: 'vital-signs-integration.svg',
      title: 'Vital Signs Data Integration',
      description: 'Architecture for vital signs data collection and clinical integration',
    },
  ],

  citations: [
    {
      id: 'whelton-2017',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'et al.'],
      source: 'Hypertension',
      url: 'https://doi.org/10.1161/HYP.0000000000000065',
    },
    {
      id: 'fda-pulse-ox',
      type: 'website',
      title: 'Pulse Oximeter Accuracy and Limitations',
      source: 'FDA',
      url: 'https://www.fda.gov/medical-devices/safety-communications/pulse-oximeter-accuracy-and-limitations-fda-safety-communication',
    },
    {
      id: 'smith-news-2017',
      type: 'article',
      title: 'The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death',
      authors: ['Smith GB', 'et al.'],
      source: 'Resuscitation',
      url: 'https://doi.org/10.1016/j.resuscitation.2013.03.014',
    },
  ],

  crossReferences: [
    { targetId: 'rpm-basics', targetType: 'concept', relationship: 'related', label: 'RPM Basics' },
    { targetId: 'vitals-blood-pressure', targetType: 'concept', relationship: 'related', label: 'Blood Pressure' },
    { targetId: 'vitals-heart-rate', targetType: 'concept', relationship: 'related', label: 'Heart Rate' },
  ],

  tags: {
    systems: ['digital-health', 'cardiovascular', 'respiratory'],
    topics: ['vital-signs', 'remote-monitoring', 'connected-health', 'patient-safety'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vitalSignsMonitoring;
