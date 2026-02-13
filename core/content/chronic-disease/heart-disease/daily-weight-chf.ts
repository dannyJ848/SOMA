/**
 * Daily Weight Monitoring for CHF - Heart Disease Management
 *
 * Teaching patients with heart failure how to monitor weight
 * to detect fluid retention early.
 */

import { EducationalContent } from '../../types';

export const DAILY_WEIGHT_CHF: EducationalContent = {
  id: 'heart-disease-daily-weight-chf',
  type: 'concept',
  name: 'Daily Weight Monitoring for Heart Failure',
  alternateNames: ['Weight tracking CHF', 'Fluid monitoring', 'Heart failure self-monitoring'],

  levels: {
    1: {
      level: 1,
      summary: 'Weighing yourself every day helps you catch fluid buildup early, which is important when you have heart failure.',
      explanation: `**Why Weigh Yourself Daily?**
When you have heart failure, your heart has trouble pumping all the fluid in your body. Extra fluid can build up in your body. Daily weighing helps you catch this early - before you feel sick.

**How Extra Fluid Shows Up:**
- Sudden weight gain (even 2-3 pounds overnight!)
- Swelling in feet, ankles, or legs
- Feeling more short of breath
- Clothes or shoes feeling tight

**How to Weigh Yourself:**

*Same Time Every Day:*
- First thing in the morning
- After going to the bathroom
- Before eating or drinking
- In light clothing (or same clothes each time)

*Use a Good Scale:*
- Digital scale is easiest to read
- Put it on a hard, flat floor (not carpet)
- Stand still while weighing

**What to Watch For:**

| Weight Change | What to Do |
|---------------|------------|
| Weight stays about the same | Great! Keep doing what you're doing |
| Gain of 2-3 pounds in one day | Call your doctor or nurse |
| Gain of 5 pounds in one week | Call your doctor or nurse |
| Sudden loss of a lot of weight | Call your doctor (might mean something else) |

**Keep a Record:**
- Write down your weight every day
- Note the date
- Bring your log to doctor appointments

**What Your Doctor Might Tell You:**
- Increase your water pill (diuretic)
- Reduce salt and fluid intake
- Come in for a check-up

**Tips for Success:**
- Keep the scale in the same spot
- Make weighing part of your morning routine
- Post a reminder note in your bathroom
- Tell a family member so they can help you remember

**Warning:** Weight gain in heart failure is different from regular weight gain. It happens because of fluid, not fat. That is why it can happen so fast!`,
      keyTerms: [
        { term: 'heart failure', definition: 'A condition where the heart does not pump as well as it should' },
        { term: 'fluid retention', definition: 'When extra fluid builds up in your body' },
        { term: 'diuretic', definition: 'A water pill that helps your body get rid of extra fluid' },
        { term: 'edema', definition: 'Swelling caused by extra fluid, usually in the feet and ankles' },
      ],
      analogies: [
        'Think of your body like a bathtub. When the drain (your heart) is slow, water (fluid) backs up. Weighing yourself helps you notice when the water level is rising.',
        'Daily weighing is like checking the oil in your car - it is a quick daily check that can prevent big problems.',
      ],
      examples: [
        'Mary weighs herself every morning after using the bathroom. When she noticed she gained 3 pounds overnight, she called her nurse who told her to take an extra water pill.',
        'John keeps his scale next to the toilet so he remembers to weigh himself first thing. He writes his weight on a calendar on the bathroom wall.',
      ],
    },
    2: {
      level: 2,
      summary: 'Daily weight monitoring is a cornerstone of heart failure self-management, enabling early detection of fluid retention (congestion) so that treatment can be adjusted before symptoms worsen.',
      explanation: `**Understanding Fluid Balance in Heart Failure:**

In heart failure, the heart cannot pump efficiently enough to meet the body's needs. This causes:
- Fluid backup in the lungs (pulmonary congestion)
- Fluid backup in the body (peripheral edema)
- Activation of hormones that retain more fluid

Daily weights detect this fluid retention before severe symptoms develop.

**The Science Behind Weight Monitoring:**

*Fluid Weight vs. Body Weight:*
- 1 liter of fluid = approximately 2.2 pounds (1 kg)
- True body weight changes slowly
- Rapid weight changes indicate fluid shifts
- 2-3 pounds overnight is almost always fluid

**Proper Weighing Protocol:**

*Timing and Conditions:*
| Do | Why |
|----|----|
| Weigh at same time daily | Consistency |
| Weigh in morning | After overnight equilibration |
| Weigh after voiding | Before fluid intake |
| Weigh before medications | Before diuretics work |
| Weigh in similar clothing | Accuracy |

*Equipment:*
- Digital scale preferred
- Accuracy to 0.2 pounds
- Stable, flat surface
- Regular calibration

**Interpreting Weight Changes:**

| Change | Timeframe | Likely Cause | Action |
|--------|-----------|--------------|--------|
| +2-3 lbs | 1 day | Fluid retention | Call healthcare team |
| +5 lbs | 1 week | Progressive congestion | Urgent evaluation |
| Stable | Daily | Good control | Continue current plan |
| Gradual increase | Weeks | Diet/adherence issue OR disease progression | Discuss at next visit |
| Sudden decrease | Days | Diuretic effect OR illness | Monitor; call if symptoms |

**Signs of Worsening Heart Failure:**

*Weight + Symptoms:*
- Weight gain PLUS increased shortness of breath
- Weight gain PLUS more leg swelling
- Weight gain PLUS waking up breathless at night
- Weight gain PLUS needing more pillows to sleep

These combinations warrant immediate contact with healthcare provider.

**Self-Adjustment Protocols:**

Some patients receive instructions to adjust their own diuretics based on weight:

*Example Flexible Diuretic Protocol:*
| Weight Gain | Action |
|-------------|--------|
| 2-3 lbs over dry weight | Take extra dose of diuretic (as prescribed) |
| 4+ lbs over dry weight | Take extra diuretic AND call provider |
| Below dry weight | Hold diuretic AND call if symptoms |

**Barriers and Solutions:**

| Barrier | Solution |
|---------|----------|
| Forgetting | Set phone alarm, keep scale visible |
| Not owning a scale | Request from healthcare team, community resources |
| Inconsistent conditions | Create routine, same time/clothes |
| Not recording | Use app, paper log, or calendar |
| Not understanding results | Review thresholds with care team |

**Red Flags to Report Immediately:**
- Weight gain of 4+ pounds overnight
- Severe shortness of breath
- Chest pain
- Unable to lie flat
- Fainting or severe dizziness`,
      keyTerms: [
        { term: 'dry weight', definition: 'Your target weight when fluid status is optimal; determined by your healthcare team' },
        { term: 'congestion', definition: 'Fluid buildup in the lungs or body due to heart failure' },
        { term: 'decompensation', definition: 'Worsening heart failure often related to fluid overload' },
        { term: 'flexible diuretic dosing', definition: 'Patient self-adjustment of water pill dose based on weight and symptoms' },
      ],
      analogies: [
        'Your dry weight is like sea level - it is the baseline you compare against. When the tide (fluid) rises above that level, you take action.',
      ],
    },
    3: {
      level: 3,
      summary: 'Daily weight monitoring in heart failure enables proactive congestion management through early detection of volume status changes, supporting flexible diuretic strategies and reducing hospitalizations.',
      explanation: `**Pathophysiology of Fluid Retention in HF:**

*Neurohormonal Activation:*
\`\`\`
Reduced Cardiac Output
         ↓
Reduced Renal Perfusion
         ↓
RAAS Activation → Sodium/Water Retention
         ↓
Sympathetic Activation → Vasoconstriction
         ↓
ADH Release → Water Retention
         ↓
Volume Overload
         ↓
Increased Preload → Pulmonary/Peripheral Congestion
\`\`\`

*Weight as Congestion Proxy:*
- Sensitive to early fluid accumulation
- Changes precede symptom development by days
- Quantitative and objective measure

**Evidence Base:**

*Clinical Trial Support:*
| Study | Finding |
|-------|---------|
| DIAL Trial | Telemonitoring with weight reduced HF hospitalizations |
| HF-ACTION | Weight monitoring associated with better outcomes |
| COACH | Self-care education including weight monitoring improved outcomes |
| TIM-HF2 | Remote monitoring with weight reduced mortality |

*Mechanism of Benefit:*
- Earlier intervention in decompensation
- Diuretic optimization
- Patient engagement
- Reduced emergency presentations

**Dry Weight Determination:**

*Clinical Assessment:*
- Physical examination (JVP, edema, lung crackles)
- Patient symptoms
- BNP/NT-proBNP levels
- Response to diuretic therapy
- Chest imaging

*Dynamic Nature:*
- May change with disease progression
- Reassess after optimization
- Adjust after acute events
- Consider seasonal variation

**Structured Monitoring Protocols:**

*Daily Assessment:*
1. Weight (same conditions)
2. Symptom assessment
3. Documentation

*Weekly Summary:*
- Average weight
- Trend analysis
- Symptom patterns
- Medication adherence

*Threshold-Based Alerts:*
| Threshold | Response Level |
|-----------|----------------|
| ≥2 lb/day or 5 lb/week | Contact healthcare team |
| ≥3 lb/day | Same-day evaluation |
| Rapid weight loss + symptoms | Same-day evaluation |

**Flexible Diuretic Protocols:**

*Requirements:*
- Patient education and understanding
- Written instructions
- Clear boundaries for self-adjustment
- Defined criteria for contacting provider
- Regular follow-up

*Example Protocol:*
\`\`\`
Baseline: Furosemide 40mg daily
Dry weight: 180 lbs

Weight 181-182 lbs: Continue current dose
Weight 183-185 lbs: Take 80mg furosemide today
Weight >185 lbs: Take 80mg furosemide + call provider
Weight <178 lbs: Hold furosemide + call provider
\`\`\`

**Integration with Comprehensive HF Care:**

*Self-Care Behaviors:*
- Daily weights
- Symptom monitoring
- Sodium restriction
- Fluid management
- Medication adherence
- Physical activity

*Care Team Coordination:*
- Shared weight data
- Remote monitoring programs
- Nurse-led HF clinics
- Pharmacist medication management
- Clear escalation pathways

**Technology Support:**

*Connected Scales:*
- Automatic data transmission
- Cloud storage
- Provider dashboard access
- Alert generation

*Telemonitoring Programs:*
- Weight + symptoms + vitals
- Nurse review
- Physician oversight
- Reduced hospitalizations demonstrated`,
      keyTerms: [
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; activated in heart failure causing sodium/water retention' },
        { term: 'ADH', definition: 'Antidiuretic hormone (vasopressin); causes water retention in heart failure' },
        { term: 'preload', definition: 'Volume of blood in ventricles before contraction; elevated in congestion' },
        { term: 'telemonitoring', definition: 'Remote monitoring of patient data including weight with healthcare team oversight' },
        { term: 'congestion score', definition: 'Assessment combining signs and symptoms to quantify fluid overload severity' },
      ],
      clinicalNotes: 'Daily weights with flexible diuretic protocols reduce HF hospitalizations. Determine individualized dry weight through clinical assessment. Telemonitoring programs are cost-effective for high-risk patients. Weight trends are more important than single values. Rapid weight gain is more actionable than gradual changes.',
    },
    4: {
      level: 4,
      summary: 'Weight-based congestion monitoring in heart failure integrates with advanced hemodynamic assessment, remote monitoring technologies, and precision medicine approaches to enable proactive volume management and improve outcomes.',
      explanation: `**Volume Status Physiology:**

*Frank-Starling Mechanism:*
\`\`\`
In Normal Heart:
Increased Preload → Increased Stroke Volume → Maintained CO

In Failing Heart:
Increased Preload → Flat Starling Curve → No SV Increase
                 → Elevated Filling Pressures
                 → Pulmonary/Systemic Congestion
\`\`\`

*Congestion Hemodynamics:*
- Elevated PCWP (>18 mmHg) → Pulmonary congestion
- Elevated RAP (>10 mmHg) → Systemic congestion
- Weight gain correlates with filling pressure elevation
- 1L fluid ≈ 1 kg weight ≈ variable PCWP change

**Advanced Congestion Assessment:**

*Clinical Signs (Examination):*
| Finding | Sensitivity | Specificity |
|---------|-------------|-------------|
| JVP elevation | 40-50% | 80-90% |
| S3 gallop | 20-30% | 90-95% |
| Peripheral edema | 30-50% | 70-80% |
| Pulmonary rales | 15-30% | 80-90% |

*Biomarkers:*
| Marker | Congestion Assessment |
|--------|----------------------|
| BNP/NT-proBNP | Correlates with filling pressures |
| Hemoconcentration (Hgb/HCT) | Increases with decongestion |
| BUN/Creatinine ratio | Elevated in cardiorenal syndrome |

*Imaging:*
- Chest X-ray: Pulmonary vascular congestion
- Lung ultrasound: B-lines for pulmonary edema
- IVC assessment: Diameter and collapsibility

**Implantable Hemodynamic Monitoring:**

*CardioMEMS (Pulmonary Artery Pressure):*
\`\`\`
Implanted PA Sensor
         ↓
Daily Patient Transmission
         ↓
Cloud Platform
         ↓
Clinician Review
         ↓
Proactive Medication Adjustment
         ↓
CHAMPION Trial: 37% Reduction in HF Hospitalizations
\`\`\`

*Other Approaches:*
- Implantable ICD-based impedance
- RV pressure monitoring
- Left atrial pressure (investigational)

**Weight Monitoring Technology:**

*Connected Scale Systems:*
| Feature | Clinical Value |
|---------|----------------|
| Automatic transmission | Eliminates recording burden |
| Trend visualization | Pattern recognition |
| Alert thresholds | Proactive intervention |
| Integration with EHR | Clinician access |
| Multiparameter (BP, HR) | Comprehensive assessment |

*Machine Learning Applications:*
- Weight trend prediction
- Decompensation risk scoring
- Optimal alert thresholds
- Personalized dry weight estimation

**Multiparameter Remote Monitoring:**

*Typical Program Components:*
\`\`\`
Daily Collection:
- Weight
- Blood pressure
- Heart rate
- Oxygen saturation
- Symptom questionnaire

Analysis:
- Threshold alerts
- Trend analysis
- Risk algorithms

Response:
- Nurse triage
- Protocol-based intervention
- Physician escalation
\`\`\`

*Meta-Analysis Evidence:*
- Non-invasive telemonitoring: Mixed results
- Invasive hemodynamic monitoring: Significant benefit
- Structured telephone support: Modest benefit

**Precision Volume Management:**

*Phenotype-Guided Approach:*
| Phenotype | Volume Status | Perfusion | Management Focus |
|-----------|---------------|-----------|------------------|
| Warm and wet | Congested | Adequate | Diuresis primary |
| Cold and wet | Congested | Impaired | Diuresis + inotropes |
| Cold and dry | Euvolemic | Impaired | Inotropes, afterload reduction |
| Warm and dry | Euvolemic | Adequate | Optimal; maintain |

*Diuretic Resistance:*
- Definition: Inadequate response to standard diuretic doses
- Mechanisms: Renal impairment, neurohormonal activation, absorption
- Strategies: Higher doses, combination therapy, IV, ultrafiltration

**Implementation Challenges:**

*Patient-Level:*
- Health literacy
- Cognitive impairment
- Social support
- Technology access

*System-Level:*
- Monitoring infrastructure
- Staff for data review
- Integration with workflows
- Reimbursement`,
      keyTerms: [
        { term: 'PCWP', definition: 'Pulmonary capillary wedge pressure; reflects left heart filling pressure' },
        { term: 'CardioMEMS', definition: 'Implantable pulmonary artery pressure sensor for hemodynamic monitoring in heart failure' },
        { term: 'diuretic resistance', definition: 'Reduced response to diuretics despite adequate dosing' },
        { term: 'cardiorenal syndrome', definition: 'Worsening kidney function due to heart failure and vice versa' },
        { term: 'thoracic impedance', definition: 'Electrical measurement that decreases with pulmonary fluid accumulation' },
      ],
      clinicalNotes: 'Invasive hemodynamic monitoring (CardioMEMS) provides superior congestion detection compared to weight alone. Weight monitoring remains foundational for all HF patients. Multiparameter remote monitoring effectiveness depends on clinical response protocols. Address diuretic resistance before attributing weight changes to medication failure.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art heart failure volume management integrates multimodal sensing, artificial intelligence, personalized hemodynamic targets, and adaptive therapeutic algorithms to optimize fluid status and prevent decompensation.',
      explanation: `**Advanced Congestion Physiology:**

*Compartmental Model:*
\`\`\`
Total Body Water (TBW)
├── Intracellular (2/3)
└── Extracellular (1/3)
    ├── Interstitial (80%)
    │   ├── Peripheral tissues (edema)
    │   └── Pulmonary interstitium (pulmonary edema)
    └── Intravascular (20%)
        ├── Venous (capacitance)
        └── Arterial (resistance)

HF Congestion:
- Intravascular volume expansion
- Interstitial fluid redistribution
- Central volume shifts
- Variable relationship to weight
\`\`\`

*Congestion Without Weight Gain:*
- Central redistribution
- Vascular remodeling
- Acute fluid shifts
- Rapid congestion possible without weight change

**Multi-Modal Sensing:**

*Wearable Technologies:*
| Sensor Type | Parameter | HF Application |
|-------------|-----------|----------------|
| Bioimpedance | Body composition | Fluid distribution |
| Strain gauge | Leg volume | Peripheral edema |
| Photoplethysmography | Pulse contour | Cardiac function |
| Accelerometry | Activity | Functional status |
| Microphone | Heart sounds | S3, congestion |

*Implantable Technologies:*
| Device | Measurement | Evidence |
|--------|-------------|----------|
| CardioMEMS | PA pressure | CHAMPION, GUIDE-HF |
| HeartLogic | Multi-sensor score | Observational data |
| CRT-D impedance | Thoracic fluid | Variable results |
| V-LAP | LA pressure | Clinical trials |

**Artificial Intelligence Integration:**

*Predictive Models:*
\`\`\`
Input Data:
- Daily weights (trend, variability)
- Vital signs
- Activity patterns
- Symptom reports
- Biomarkers
- Environmental factors

Machine Learning:
- Feature extraction
- Time series analysis
- Pattern recognition
- Risk classification

Output:
- Decompensation risk score
- Days to potential event
- Recommended actions
\`\`\`

*Clinical Decision Support:*
- Alert optimization (reduce fatigue)
- Intervention prioritization
- Personalized thresholds
- Treatment recommendations

**Precision Volume Management:**

*Individualized Targets:*
\`\`\`
Traditional: Single dry weight target

Precision Approach:
- Dynamic optimal volume range
- Activity-adjusted targets
- Seasonal variation
- Comorbidity integration
- Patient preference incorporation
\`\`\`

*Biomarker-Guided Therapy:*
| Marker | Application | Evidence |
|--------|-------------|----------|
| NT-proBNP | Therapy intensification | GUIDE-IT (neutral), TIME-CHF |
| CA125 | Decongestion marker | Observational |
| Hemoconcentration | Diuretic adequacy | Strong association |

**Adaptive Therapeutic Systems:**

*Closed-Loop Concepts:*
\`\`\`
Sensing → Algorithm → Therapy Delivery

Current:
- PA pressure-guided adjustment (semi-automatic)
- Weight-based protocols (manual)

Emerging:
- Automated diuretic dosing
- Wearable-integrated recommendations
- AI-optimized regimens
\`\`\`

*Ultrafiltration:*
- Mechanical fluid removal
- For diuretic resistance
- CARRESS-HF trial: Not superior to stepped diuretics
- Role in select patients

**Digital Therapeutics:**

*App-Based HF Management:*
- Symptom tracking
- Weight logging
- Medication reminders
- Education delivery
- Care team communication
- Behavioral nudges

*Evidence:*
- Improved self-care
- Better adherence
- Mixed hospitalization outcomes
- Implementation variability

**Health Systems Innovation:**

*Value-Based HF Programs:*
- Bundled payments
- Readmission penalties
- Quality metrics
- Telehealth integration

*Transitional Care:*
- Post-discharge monitoring
- Early follow-up
- Home-based programs
- Care coordination

**Future Directions:**

*Research Priorities:*
- Optimal monitoring strategies
- AI algorithm validation
- Cost-effectiveness studies
- Health equity in technology
- Biomarker-guided trials

*Emerging Approaches:*
- Exhaled breath analysis
- Continuous biomarkers
- Personalized digital twins
- Predictive interventions
- Social determinant integration`,
      keyTerms: [
        { term: 'digital twin', definition: 'Computational model of individual patient physiology for simulation and prediction' },
        { term: 'HeartLogic', definition: 'Multi-sensor algorithm in implantable devices combining thoracic impedance, heart sounds, and other parameters' },
        { term: 'ultrafiltration', definition: 'Mechanical removal of isotonic fluid from blood as alternative to diuretics' },
        { term: 'closed-loop system', definition: 'Automated therapy adjustment based on continuous sensing without manual intervention' },
        { term: 'transitional care', definition: 'Structured support during high-risk period after hospitalization to prevent readmission' },
        { term: 'bioimpedance', definition: 'Measurement of tissue electrical properties to estimate fluid content and distribution' },
      ],
      clinicalNotes: 'Multi-modal sensing may provide more complete picture than weight alone but clinical implementation varies. AI-based prediction is emerging but requires validation and integration into clinical workflows. Transitional care with intensive monitoring reduces readmissions. Future systems will likely integrate multiple data streams with adaptive therapeutic algorithms.',
    },
  },

  media: [
    {
      id: 'weight-monitoring-guide',
      type: 'diagram',
      filename: 'daily-weight-guide.svg',
      title: 'Daily Weight Monitoring Guide',
      description: 'Visual guide for proper daily weight measurement in heart failure',
    },
    {
      id: 'weight-log-template',
      type: 'diagram',
      filename: 'heart-failure-weight-log.pdf',
      title: 'Heart Failure Weight Log',
      description: 'Printable log for tracking daily weights',
    },
  ],

  citations: [
    {
      id: 'hfsa-guidelines',
      type: 'article',
      title: 'HFSA Guideline for the Management of Heart Failure',
      source: 'Journal of Cardiac Failure',
    },
    {
      id: 'champion-trial',
      type: 'article',
      title: 'CHAMPION Trial: Pulmonary Artery Pressure-Guided Heart Failure Management',
      source: 'The Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'heart-disease-cardiac-warning-signs', targetType: 'topic', relationship: 'related', label: 'Cardiac Warning Signs' },
    { targetId: 'heart-disease-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Cardiac Medications' },
    { targetId: 'chronic-disease-symptom-monitoring', targetType: 'topic', relationship: 'related', label: 'Symptom Monitoring' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['heart failure', 'self-monitoring', 'fluid management'],
    keywords: ['daily weight', 'heart failure', 'congestion', 'fluid retention', 'CHF'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
