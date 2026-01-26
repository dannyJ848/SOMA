/**
 * Home Vital Sign Tracking - Self-Management Skills
 *
 * Teaching patients to accurately measure and track vital signs at home
 * for better chronic disease management.
 */

import { EducationalContent } from '../../types';

export const HOME_VITAL_TRACKING: EducationalContent = {
  id: 'chronic-disease-home-vital-tracking',
  type: 'concept',
  name: 'Home Vital Sign Tracking',
  alternateNames: ['Home monitoring', 'Self-measured vital signs', 'At-home health tracking'],

  levels: {
    1: {
      level: 1,
      summary: 'Measuring your vital signs at home helps you and your doctor keep track of your health between doctor visits.',
      explanation: `**What Are Vital Signs?**
Vital signs are measurements that show how well your body is working. The main ones you can check at home are:

1. **Blood Pressure** - How hard your heart is pumping blood
2. **Heart Rate (Pulse)** - How many times your heart beats per minute
3. **Weight** - Important for heart and kidney conditions
4. **Blood Sugar** - If you have diabetes
5. **Temperature** - If you might have an infection
6. **Oxygen Level** - With a pulse oximeter (little device on your finger)

**Why Track at Home?**
- Your readings at home are often more accurate than at the doctor's office
- You can catch problems early
- Your doctor can make better treatment decisions
- You feel more in control of your health

**Getting Good Readings:**

*For Blood Pressure:*
- Sit quietly for 5 minutes first
- Don't drink caffeine or smoke for 30 minutes before
- Use the same arm each time
- Keep your arm supported at heart level
- Don't talk during the reading

*For Weight:*
- Weigh yourself at the same time each day
- Wear similar clothing (or none)
- Use the same scale in the same spot
- First thing in the morning is best

*For Blood Sugar:*
- Wash your hands first
- Use the side of your fingertip (less pain!)
- Follow your doctor's instructions on when to check

**What to Write Down:**
- The date and time
- Your measurement
- How you were feeling
- Any medications you took
- Any unusual activities or foods`,
      keyTerms: [
        { term: 'vital signs', definition: 'Measurements that show how your body is working, like blood pressure and heart rate' },
        { term: 'blood pressure', definition: 'The force of blood pushing against the walls of your blood vessels' },
        { term: 'pulse oximeter', definition: 'A small device that clips on your finger to measure oxygen in your blood' },
      ],
      analogies: [
        'Vital signs are like the dashboard gauges in your car - they show if everything is running smoothly.',
        'Tracking your vitals is like checking the weather forecast - it helps you prepare for what\'s coming.',
      ],
      examples: [
        'Mary checks her blood pressure every morning and evening, and her doctor was able to see that her medication is working well.',
        'John weighs himself each morning and noticed he gained 3 pounds in two days, which helped catch fluid buildup from his heart condition early.',
      ],
    },
    2: {
      level: 2,
      summary: 'Home monitoring of vital signs provides real-world data for chronic disease management, enabling early detection of problems and more precise medication adjustments than office-based measurements alone.',
      explanation: `**Vital Signs for Chronic Disease Management:**

| Vital Sign | Normal Range | Key For |
|------------|--------------|---------|
| Blood Pressure | <120/80 mmHg | Hypertension, heart disease, kidney disease |
| Heart Rate | 60-100 bpm | Heart conditions, thyroid, medication effects |
| Weight | Stable | Heart failure, kidney disease, diabetes |
| Blood Glucose | 70-130 mg/dL (fasting) | Diabetes management |
| Oxygen Saturation | 95-100% | COPD, heart failure, lung conditions |
| Temperature | 97.8-99.1°F (oral) | Infections, immune conditions |
| Peak Flow | Personal best | Asthma, COPD |

**Equipment Selection:**

*Blood Pressure Monitors:*
- Upper arm cuffs are most accurate
- Look for "validated" devices
- Ensure correct cuff size (measure mid-upper arm)
- Automatic (oscillometric) monitors are easiest
- Avoid wrist or finger monitors if possible

*Scales:*
- Digital scales are more consistent
- Wide platform for stability
- Place on hard, flat surface
- Consider scales with memory function

*Glucose Meters:*
- Check insurance coverage
- Continuous glucose monitors (CGM) now available
- Match test strips to your meter
- Check expiration dates on strips

*Pulse Oximeters:*
- Fingertip devices are common
- Accuracy affected by nail polish, cold fingers
- Note: May be less accurate with dark skin pigmentation

**Proper Measurement Techniques:**

*Blood Pressure Protocol:*
1. Rest 5 minutes in seated position
2. Empty bladder first
3. Feet flat on floor, back supported
4. Cuff on bare arm at heart level
5. No talking during measurement
6. Take 2-3 readings, 1 minute apart
7. Record average of readings

*Weight Monitoring:*
1. Same time daily (morning, after bathroom)
2. Same clothing (or minimal)
3. Same scale, same location
4. Record to nearest 0.5 lb

**Understanding Your Numbers:**

*Blood Pressure Categories:*
- Normal: <120/80
- Elevated: 120-129/<80
- High Stage 1: 130-139/80-89
- High Stage 2: ≥140/≥90
- Crisis: >180/>120 (call doctor immediately)

*Weight Changes:*
- 2-3 lb gain in 1 day: May indicate fluid retention
- 5 lb gain in 1 week: Contact healthcare provider
- Gradual weight loss: May indicate worsening condition

**Recording and Sharing Data:**

*What to Track:*
- Date and time
- Measurement value
- Symptoms at time of measurement
- Recent medications
- Recent activities (exercise, meals)

*Sharing with Healthcare Team:*
- Bring log to appointments
- Use patient portals for electronic submission
- Know target values for your conditions
- Discuss concerning readings promptly`,
      keyTerms: [
        { term: 'validated device', definition: 'Medical equipment that has been tested and proven accurate by standardized protocols' },
        { term: 'oscillometric', definition: 'Blood pressure measurement method that detects blood flow oscillations in the cuff' },
        { term: 'peak flow', definition: 'Measurement of how fast you can blow air out of your lungs, used in asthma/COPD' },
        { term: 'continuous glucose monitor (CGM)', definition: 'Device worn on the body that automatically measures blood sugar throughout the day' },
      ],
      analogies: [
        'Home vital sign monitoring is like having a security camera for your health - it captures what\'s happening when you\'re not at the doctor\'s office.',
      ],
    },
    3: {
      level: 3,
      summary: 'Self-measured vital signs complement clinic-based assessments, with evidence showing improved clinical outcomes when integrated into structured monitoring programs with defined response protocols.',
      explanation: `**Evidence for Home Monitoring:**

*Blood Pressure:*
- Home BP monitoring (HBPM) better predicts cardiovascular risk than office BP
- HBPM eliminates white coat effect (elevated BP in clinical settings)
- Detects masked hypertension (normal office, elevated home)
- Guidelines recommend HBPM for diagnosis and management

*Weight in Heart Failure:*
- Daily weights detect volume overload early
- 2-lb rule: Contact provider for 2-lb gain in 24 hours or 5 lbs in week
- Enables diuretic adjustment before hospitalization
- Part of all HF self-management programs

*Blood Glucose:*
- Self-monitoring of blood glucose (SMBG) essential for insulin users
- Guides real-time treatment decisions
- CGM provides trend data and alerts
- Time-in-range (70-180 mg/dL) emerging as key metric

**Technical Considerations:**

*Blood Pressure Monitor Validation:*
- Look for devices validated by:
  - Association for the Advancement of Medical Instrumentation (AAMI)
  - British Hypertension Society (BHS)
  - European Society of Hypertension (ESH)
- Validated device lists: validatebp.org

*Cuff Size Selection:*
| Arm Circumference | Cuff Size |
|-------------------|-----------|
| 22-26 cm | Small adult |
| 27-34 cm | Standard adult |
| 35-44 cm | Large adult |
| 45-52 cm | Extra large |

*Pulse Oximetry Limitations:*
- Accuracy decreases below SpO2 <90%
- Motion artifact
- Nail polish/artificial nails (darker colors)
- Poor perfusion (cold, hypotension)
- Skin pigmentation affects accuracy (FDA warning 2021)
- Carbon monoxide poisoning: Falsely normal

**Structured Monitoring Protocols:**

*Hypertension:*
- Measure twice daily (AM and PM) for 7 days
- Discard first day readings
- Average remaining readings for clinical decision-making
- Diagnosis: Average ≥135/85 mmHg

*Heart Failure:*
- Daily morning weight after voiding
- Document symptoms (dyspnea, edema)
- Defined action plan based on weight trends
- Diuretic self-adjustment protocols (if prescribed)

*Diabetes:*
- SMBG frequency based on regimen:
  - Multiple daily insulin: 4-10 times/day
  - Basal insulin only: 1-2 times/day
  - Non-insulin: Variable based on goals
- CGM continuous data with 5-minute intervals

**Integration with Telehealth:**

*Remote Patient Monitoring (RPM) Programs:*
- Cellular-connected devices transmit data automatically
- Nurse/coordinator review and follow-up
- Improves outcomes in high-risk populations
- Medicare reimbursement for qualifying conditions

*Patient Portal Integration:*
- Some devices sync to EHR patient portals
- Enables clinician access to home data
- Supports between-visit management

**Data Quality Considerations:**

*Common Sources of Error:*
- Incorrect technique (especially BP)
- Wrong equipment or settings
- Infrequent or irregular monitoring
- Selection bias (skipping readings when feeling unwell)
- Device malfunction

*Quality Assurance:*
- Annual device calibration check
- Periodic technique review with provider
- Comparison with clinic measurements`,
      keyTerms: [
        { term: 'white coat effect', definition: 'Elevated blood pressure readings in clinical settings that are normal at home' },
        { term: 'masked hypertension', definition: 'Normal blood pressure in clinic but elevated readings at home or during daily life' },
        { term: 'time-in-range', definition: 'Percentage of time glucose levels are within target range (typically 70-180 mg/dL)' },
        { term: 'remote patient monitoring', definition: 'Use of technology to collect health data from patients at home for clinician review' },
      ],
      clinicalNotes: 'HBPM is now recommended for hypertension diagnosis by ACC/AHA guidelines. The 2-lb weight rule for HF patients has limited evidence but remains standard practice. FDA has issued warnings about pulse oximeter accuracy in patients with darker skin pigmentation - clinical context should guide interpretation.',
    },
    4: {
      level: 4,
      summary: 'Home vital sign monitoring requires understanding of measurement science, validated protocols, and known limitations to generate reliable data for clinical decision-making in chronic disease management.',
      explanation: `**Measurement Validity and Reliability:**

*Blood Pressure Measurement Science:*

The gold standard remains invasive intra-arterial monitoring. Non-invasive methods use oscillometry:
- Cuff inflates above systolic pressure
- Controlled deflation with measurement of oscillations
- Algorithms estimate SBP and DBP from oscillation patterns
- Algorithm proprietary to manufacturer

*Sources of Blood Pressure Variability:*
- **Intrinsic BP variability** - BP changes beat-to-beat
- **Circadian variation** - 10-20% nocturnal dip normal
- **Postural changes** - Orthostatic hypotension
- **Prandial effects** - Postprandial hypotension
- **Activity effects** - Exercise, talking
- **Environmental effects** - Temperature, noise

*Addressing Variability:*
- Multiple readings averaged
- Standardized conditions
- Same time of day
- Longer monitoring periods

**Validation Standards for Devices:**

*International Protocol Requirements:*
- Comparison with reference standard (mercury sphygmomanometry or intra-arterial)
- Minimum 85 subjects across BP range
- Statistical criteria for accuracy
- Special populations (obesity, pregnancy) may need separate validation

*Device Accuracy Criteria:*
- Mean difference ≤5 mmHg
- Standard deviation ≤8 mmHg
- At least 2/3 of readings within ±10 mmHg

**Continuous Glucose Monitoring Technology:**

*Sensor Technology:*
- Subcutaneous sensor measures interstitial glucose
- Enzymatic reaction (glucose oxidase)
- 5-15 minute lag behind blood glucose
- 10-14 day sensor life

*CGM Metrics:*
| Metric | Target (Type 1/2) | Clinical Significance |
|--------|-------------------|----------------------|
| Time in range (70-180) | >70% | Correlates with A1c |
| Time below range (<70) | <4% | Hypoglycemia burden |
| Time below 54 | <1% | Severe hypoglycemia risk |
| Glucose variability (CV) | <36% | Glycemic stability |
| GMI | Near A1c | Estimated A1c equivalent |

**Advanced Weight Monitoring:**

*Body Composition Scales:*
- Bioelectrical impedance analysis (BIA)
- Estimates fat mass, muscle mass, water
- Affected by hydration status
- Trending more useful than absolute values

*Heart Failure-Specific Considerations:*
- Congestion precedes weight gain by 1-2 weeks in some patients
- Non-specific: Weight also affected by diet, bowel habits
- Symptom monitoring may be equally predictive
- Cardiomems and other implantable monitors provide hemodynamic data

**Multi-Parameter Monitoring:**

*Wearable Device Integration:*
- Heart rate and rhythm (AFib detection)
- Activity and sleep tracking
- Fall detection
- Stress/HRV metrics
- Integration with smartphone apps

*Data Overload Challenges:*
- Volume of data from continuous monitoring
- Need for meaningful signal extraction
- Alert fatigue in patients and providers
- Optimal data visualization

**Implementation Considerations:**

*Patient Education Requirements:*
1. Device operation and maintenance
2. Proper measurement technique
3. Understanding normal ranges
4. When to repeat measurements
5. Action thresholds and response protocols
6. Troubleshooting common problems

*Healthcare System Integration:*
- Workflow for data receipt and review
- Defined response time expectations
- Liability considerations for received data
- Documentation in medical record
- Reimbursement requirements`,
      keyTerms: [
        { term: 'oscillometry', definition: 'Blood pressure measurement technique detecting arterial wall oscillations during cuff deflation' },
        { term: 'glucose variability', definition: 'Extent of blood glucose fluctuations, measured by coefficient of variation (CV) or standard deviation' },
        { term: 'glucose management indicator (GMI)', definition: 'Metric derived from CGM data that estimates equivalent A1c value' },
        { term: 'bioelectrical impedance analysis', definition: 'Body composition estimation method measuring electrical resistance through body tissues' },
        { term: 'CardioMEMS', definition: 'Implantable pulmonary artery pressure monitor for heart failure management' },
      ],
      clinicalNotes: 'For hypertension diagnosis, average of 12 home readings (twice daily for 7 days, excluding day 1) is recommended. CGM is increasingly recommended for all insulin-requiring patients. BIA-based body composition from consumer scales has significant measurement error and should be used for trends only.',
    },
    5: {
      level: 5,
      summary: 'Contemporary home vital sign monitoring integrates consumer and medical-grade devices within connected health ecosystems, supported by machine learning analytics and remote monitoring programs to enable proactive chronic disease management.',
      explanation: `**Evolution of Home Monitoring:**

*Historical Progression:*
- 1970s: Home BP monitoring introduced
- 1980s: Home glucose monitoring transforms diabetes care
- 2000s: Digital devices with memory and connectivity
- 2010s: Consumer wearables, CGM, RPM programs
- 2020s: AI-assisted analysis, multi-modal integration

**Current Technology Landscape:**

*Device Categories:*
1. **Consumer wellness devices** - General health tracking, limited validation
2. **FDA-cleared medical devices** - Validated accuracy, regulated claims
3. **FDA-authorized devices** - Specific clinical indications
4. **Research/investigational** - Emerging technologies

*Regulatory Framework:*
- FDA Software as Medical Device (SaMD) pathway
- De novo classification for novel devices
- Digital health pre-certification program (pilot)
- CE marking in Europe (MDR 2017/745)

**Remote Patient Monitoring Programs:**

*Clinical Evidence:*

Heart Failure:
- BEAT-HF: No mortality benefit, reduced readmissions in subgroups
- TIM-HF2: Mortality reduction with structured RPM program
- Better Effectiveness After Transition-HF: Telehealth reduced readmissions

Hypertension:
- Multiple RCTs show improved BP control with home monitoring
- Greatest benefit with structured protocols and provider engagement
- Cost-effectiveness depends on program design

Diabetes:
- CGM associated with improved A1c and reduced hypoglycemia
- Real-time CGM more effective than intermittent scanning
- Remote CGM review enables telemedicine management

*Implementation Models:*
| Model | Description | Best For |
|-------|-------------|----------|
| Passive data collection | Data available in EHR on demand | Low-risk, stable patients |
| Periodic review | Scheduled nurse review of data | Moderate risk patients |
| Active monitoring | Real-time alerts and response | High-risk, post-discharge |
| AI-assisted triage | Algorithms prioritize concerning data | Large patient panels |

**Machine Learning Applications:**

*Current Applications:*
- AFib detection from smartwatch PPG/ECG
- Glucose prediction from CGM data
- Heart failure decompensation prediction
- Hypertension risk stratification

*Apple Watch FDA Clearances:*
- Irregular rhythm notification (AFib)
- ECG app for rhythm assessment
- Blood oxygen monitoring (wellness, not medical)
- Fall detection

*Emerging Applications:*
- Multi-sensor fusion for health state prediction
- Federated learning on device data
- Digital twin models for personalized thresholds
- Just-in-time adaptive interventions

**Connected Health Ecosystems:**

*Data Interoperability Standards:*
- FHIR (Fast Healthcare Interoperability Resources)
- Apple HealthKit / Health Records
- CommonHealth (Android)
- Argonaut Project for patient data access
- SMART on FHIR apps

*Integration Challenges:*
- Multiple vendors, proprietary platforms
- Data format inconsistencies
- Privacy and security requirements
- EHR integration complexity
- Patient consent and data ownership

**Health Equity Considerations:**

*Digital Divide Issues:*
- Smartphone ownership disparities
- Broadband access limitations
- Health and digital literacy
- Language barriers
- Cost of devices and data plans

*Addressing Disparities:*
- Provision of devices and connectivity
- Culturally adapted education
- Multi-language support
- Non-digital alternatives available
- Community health worker support

**Future Directions:**

*Emerging Technologies:*
- Cuffless continuous BP monitoring
- Non-invasive glucose monitoring (experimental)
- Contactless vital sign sensing
- Smart home ambient monitoring
- Microfluidic lab-on-chip devices

*Research Priorities:*
- Validation in diverse populations
- Optimal alerting strategies
- Integration with social determinants data
- Long-term outcomes studies
- Cost-effectiveness in real-world settings

**Clinical Implementation Framework:**

*Essential Program Components:*
1. Clear clinical goals and target population
2. Validated devices appropriate for population
3. Patient education and support
4. Defined monitoring protocols
5. Clinical response algorithms
6. Workflow integration
7. Quality monitoring
8. Continuous improvement

*Outcome Metrics:*
- Clinical outcomes (hospitalizations, disease control)
- Process metrics (monitoring adherence, response times)
- Patient experience and engagement
- Healthcare utilization and costs
- Provider satisfaction and efficiency`,
      keyTerms: [
        { term: 'Software as Medical Device (SaMD)', definition: 'Software intended for medical purposes without being part of a hardware medical device' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources; modern standard for exchanging healthcare information electronically' },
        { term: 'digital twin', definition: 'Computational model of an individual patient used to simulate responses and personalize treatment' },
        { term: 'federated learning', definition: 'Machine learning approach training algorithms on distributed device data without centralizing raw data' },
        { term: 'photoplethysmography (PPG)', definition: 'Optical technique measuring blood volume changes, used in smartwatches for heart rate and rhythm detection' },
      ],
      clinicalNotes: 'RPM programs show heterogeneous results - benefit depends on program design, patient selection, and response protocols. FDA-cleared smartwatch algorithms for AFib have good specificity but variable sensitivity. Address digital divide proactively in RPM program design. CGM accuracy continues to improve but still requires occasional confirmatory fingerstick glucose testing.',
    },
  },

  media: [
    {
      id: 'bp-technique-video',
      type: 'video',
      filename: 'blood-pressure-measurement-technique.mp4',
      title: 'Proper Blood Pressure Measurement Technique',
      description: 'Step-by-step video demonstrating correct home blood pressure monitoring',
      duration: 180,
    },
    {
      id: 'vital-signs-chart',
      type: 'diagram',
      filename: 'home-vital-signs-reference-chart.pdf',
      title: 'Home Vital Signs Reference Chart',
      description: 'Normal ranges and when to call your doctor',
    },
  ],

  citations: [
    {
      id: 'acc-aha-hypertension',
      type: 'article',
      title: '2017 ACC/AHA Hypertension Clinical Practice Guidelines',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'ada-standards',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      source: 'American Diabetes Association',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-symptom-monitoring', targetType: 'topic', relationship: 'related', label: 'Symptom Monitoring' },
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Sugar Monitoring' },
    { targetId: 'heart-disease-blood-pressure-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Pressure Monitoring' },
  ],

  tags: {
    systems: ['cardiovascular', 'endocrine', 'respiratory'],
    topics: ['self-management', 'chronic disease', 'patient education', 'home monitoring'],
    keywords: ['vital signs', 'blood pressure', 'glucose monitoring', 'remote monitoring', 'telehealth'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
