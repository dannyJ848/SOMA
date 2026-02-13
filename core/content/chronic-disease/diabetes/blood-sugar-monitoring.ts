/**
 * Blood Sugar Monitoring - Diabetes Management
 *
 * Teaching patients how to monitor blood glucose levels
 * for effective diabetes self-management.
 */

import { EducationalContent } from '../../types';

export const BLOOD_SUGAR_MONITORING: EducationalContent = {
  id: 'diabetes-blood-sugar-monitoring',
  type: 'concept',
  name: 'Blood Sugar Monitoring',
  alternateNames: ['Blood glucose monitoring', 'Self-monitoring of blood glucose', 'SMBG', 'CGM'],

  levels: {
    1: {
      level: 1,
      summary: 'Checking your blood sugar regularly helps you understand how food, medicine, and activities affect your diabetes.',
      explanation: `**What Is Blood Sugar?**
Blood sugar (also called blood glucose) is the sugar in your blood that gives your body energy. When you have diabetes, your blood sugar can get too high or too low.

**Why Check Your Blood Sugar?**
Checking helps you:
- Know if your blood sugar is in a healthy range
- See how food affects your levels
- Know if your medicine is working
- Prevent problems from high or low blood sugar

**How to Check Your Blood Sugar:**

*Using a Finger-Stick Meter:*
1. Wash and dry your hands
2. Put a test strip in the meter
3. Prick the side of your fingertip with a lancet
4. Touch the drop of blood to the test strip
5. Read your number on the meter
6. Write down your result

*Using a Continuous Glucose Monitor (CGM):*
- A small sensor under your skin checks sugar all day
- You can see your numbers on a phone or receiver
- It shows if your sugar is going up or down

**Target Blood Sugar Ranges (General):**

| Time | Target Range |
|------|--------------|
| Before meals | 80-130 mg/dL |
| 2 hours after eating | Less than 180 mg/dL |

*Note: Your doctor may give you different targets.*

**What Do the Numbers Mean?**
- **Low (below 70):** You need sugar quickly - drink juice or eat glucose tablets
- **Normal (70-180):** Good job! Keep doing what you're doing
- **High (over 180):** Your sugar is up - check if you forgot medicine or ate too many carbs

**When to Check:**
- When you wake up
- Before meals
- 2 hours after meals
- Before bed
- Before driving
- When you feel "off"

**Tip:** Keep a log of your numbers to share with your doctor!`,
      keyTerms: [
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'glucose meter', definition: 'A small device that measures your blood sugar from a drop of blood' },
        { term: 'lancet', definition: 'A small needle used to prick your finger for a blood drop' },
        { term: 'CGM', definition: 'Continuous glucose monitor - a device that checks blood sugar all day through a sensor' },
      ],
      analogies: [
        'Your blood sugar meter is like a gas gauge for your body - it shows you if your fuel level is too low, just right, or too high.',
        'Checking blood sugar is like checking the weather before going outside - it helps you know what to expect and how to prepare.',
      ],
      examples: [
        'Maria checks her blood sugar before breakfast and sees it is 145 mg/dL. She knows this is a little high, so she is extra careful with her carbs at breakfast.',
        'John uses a CGM and sees his blood sugar is dropping. He eats a snack to prevent it from going too low.',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood sugar monitoring through finger-stick testing or continuous glucose monitoring provides essential data for diabetes management, helping patients understand glycemic patterns and make informed treatment decisions.',
      explanation: `**Understanding Blood Glucose Monitoring:**

Regular blood sugar monitoring is a cornerstone of diabetes self-management. It provides real-time data about how your body responds to food, medication, activity, and other factors.

**Types of Blood Sugar Monitoring:**

*1. Self-Monitoring of Blood Glucose (SMBG):*
- Uses finger-stick blood sample
- Provides point-in-time readings
- Requires test strips and meter
- Most common monitoring method

*2. Continuous Glucose Monitoring (CGM):*
- Sensor inserted under skin (usually arm or abdomen)
- Measures interstitial glucose every 1-5 minutes
- Shows trends and direction of change
- Alerts for high and low levels
- Types: Real-time CGM, intermittently-scanned CGM (flash)

**Blood Sugar Targets:**

| Population | Fasting/Pre-meal | Post-meal (2 hrs) | Bedtime |
|------------|------------------|-------------------|---------|
| Most adults | 80-130 mg/dL | <180 mg/dL | 100-140 mg/dL |
| Older adults/High risk | 90-150 mg/dL | <180 mg/dL | 100-180 mg/dL |
| Pregnancy | <95 mg/dL | <120 mg/dL | 60-99 mg/dL |

*Note: Individual targets may vary based on your health status.*

**When to Monitor:**

*Typical Schedule:*
- Fasting (before breakfast)
- Before meals
- 2 hours after meals (post-prandial)
- Bedtime
- Before driving or exercise

*Additional Monitoring:*
- When feeling symptoms of high or low blood sugar
- During illness
- When changing medications
- Before and after physical activity

**Understanding Your Results:**

*Factors Affecting Blood Sugar:*
| Raises Blood Sugar | Lowers Blood Sugar |
|--------------------|-------------------|
| Carbohydrate foods | Diabetes medications |
| Illness/infection | Insulin |
| Stress | Physical activity |
| Some medications | Alcohol (delayed effect) |
| Dawn phenomenon | Skipping meals |

*Pattern Recognition:*
Looking at several days of data helps identify:
- Consistent highs or lows at certain times
- Effects of specific foods
- Medication timing issues
- Activity impacts

**Monitoring Technology:**

*Meter Features:*
- Memory storage
- Averaging capabilities
- Connectivity to apps
- Coding requirements
- Test strip accuracy

*CGM Components:*
- Sensor (worn 7-14 days)
- Transmitter
- Receiver/smartphone app
- Calibration requirements (some models)

**Troubleshooting:**

| Problem | Possible Causes |
|---------|-----------------|
| Readings don't match how you feel | Technique issue, expired strips, dirty hands |
| Frequent lows | Too much medication, skipped meals, extra activity |
| Frequent highs | Dietary changes, missed medication, illness |`,
      keyTerms: [
        { term: 'SMBG', definition: 'Self-Monitoring of Blood Glucose using finger-stick meters' },
        { term: 'continuous glucose monitoring (CGM)', definition: 'System using a subcutaneous sensor to continuously measure glucose levels' },
        { term: 'interstitial fluid', definition: 'Fluid between cells where CGM sensors measure glucose; readings lag blood glucose by 5-15 minutes' },
        { term: 'glycemic variability', definition: 'Swings in blood sugar levels throughout the day' },
        { term: 'dawn phenomenon', definition: 'Early morning blood sugar rise due to hormone release' },
      ],
      analogies: [
        'A glucose meter gives you a snapshot (single photo), while CGM gives you a movie showing the full picture of your blood sugar over time.',
      ],
    },
    3: {
      level: 3,
      summary: 'Blood glucose monitoring encompasses self-monitoring and continuous glucose monitoring technologies, providing data for glycemic assessment, pattern analysis, and treatment optimization in diabetes management.',
      explanation: `**Clinical Framework for Glucose Monitoring:**

Glucose monitoring serves multiple clinical purposes:
- Assessment of current glycemic control
- Detection of hypo- and hyperglycemia
- Pattern identification
- Medication adjustment guidance
- Patient education and engagement

**Self-Monitoring of Blood Glucose (SMBG):**

*Indications:*
- All patients on insulin therapy
- Type 2 diabetes with varying glycemia
- Gestational diabetes
- Assessment of hypoglycemia risk
- During illness or treatment changes

*Testing Accuracy Standards:*
- ISO 15197:2013 requirements
- 95% of results within +/- 15 mg/dL (<100 mg/dL) or +/- 15% (>100 mg/dL)
- Hematocrit and interfering substance effects

*Testing Frequency Recommendations:*
| Regimen | Recommended Testing |
|---------|---------------------|
| Multiple daily injections | 4+ times/day |
| Basal-bolus insulin | Before meals and bedtime |
| Basal insulin only | Fasting, occasional other times |
| Non-insulin therapy | Varies by clinical need |

**Continuous Glucose Monitoring (CGM):**

*System Components:*
- Subcutaneous sensor (electrochemical glucose oxidase or fluorescence-based)
- Transmitter
- Receiver/display device
- Data management software

*CGM Metrics:*
| Metric | Definition | Target |
|--------|------------|--------|
| Time in Range (TIR) | % time 70-180 mg/dL | >70% |
| Time Below Range (TBR) | % time <70 mg/dL | <4% |
| Time Above Range (TAR) | % time >180 mg/dL | <25% |
| Glucose Management Indicator (GMI) | Estimated A1C from CGM | Individual target |
| Coefficient of Variation (CV) | Glycemic variability | <36% |

*CGM Data Interpretation:*
- Ambulatory Glucose Profile (AGP)
- Trend arrows indicating rate of change
- Pattern analysis tools
- Time-in-range summaries

**Point-of-Care vs. Laboratory Testing:**

*POC Glucose Meters:*
- Capillary whole blood sample
- Results in seconds
- Accuracy limitations
- Interferences (altitude, hematocrit, medications)

*Laboratory Glucose:*
- Plasma glucose (gold standard)
- Higher accuracy
- Used for diagnosis
- Not practical for self-monitoring

**Clinical Decision Support:**

*Pattern Management:*
1. Collect 3-7 days of data
2. Identify consistent out-of-range patterns
3. Analyze contributing factors
4. Adjust therapy systematically
5. Reassess after changes

*Treatment Adjustment Principles:*
- Address hypoglycemia first
- Fix one time period before moving to another
- Consider total daily dose
- Evaluate carbohydrate intake
- Account for activity patterns

**Special Situations:**

*Hypoglycemia Detection:*
- Symptoms may not match readings
- Hypoglycemia unawareness consideration
- CGM alarms for low glucose
- Prevention strategies

*Illness and Stress:*
- More frequent monitoring recommended
- Sick day rules
- Ketone monitoring in Type 1
- Adjusting targets during acute illness`,
      keyTerms: [
        { term: 'Time in Range (TIR)', definition: 'Percentage of time glucose is within target range (typically 70-180 mg/dL)' },
        { term: 'Ambulatory Glucose Profile (AGP)', definition: 'Standardized visual report of CGM data showing glucose patterns over time' },
        { term: 'Glucose Management Indicator (GMI)', definition: 'Estimated A1C calculated from mean CGM glucose data' },
        { term: 'coefficient of variation', definition: 'Measure of glycemic variability; standard deviation divided by mean' },
        { term: 'hypoglycemia unawareness', definition: 'Reduced ability to perceive symptoms of low blood sugar' },
      ],
      clinicalNotes: 'CGM has become standard of care for Type 1 diabetes and is increasingly used in Type 2 diabetes on insulin. Time in Range correlates with A1C and is associated with complication risk. Consider accuracy limitations when making treatment decisions based on glucose readings.',
    },
    4: {
      level: 4,
      summary: 'Advanced glucose monitoring integrates continuous glucose monitoring technology, standardized metrics, and data analytics to enable precision diabetes management, reduce glycemic variability, and improve clinical outcomes.',
      explanation: `**Theoretical Framework:**

Glucose monitoring has evolved from periodic assessment to continuous physiological measurement, enabling understanding of dynamic glucose homeostasis and its relationship to diabetes complications.

**Physiology of Glucose Measurement:**

*Blood vs. Interstitial Glucose:*
- CGM measures interstitial fluid glucose
- Physiological lag of 5-15 minutes
- Equilibration affected by glucose rate of change
- Clinical implications for real-time decisions

*Factors Affecting Measurement:*
\`\`\`
Physiological         Technical
     ↓                    ↓
Perfusion          Calibration
Metabolism         Sensor age
Temperature        Compression
Hydration          Interference
     ↓                    ↓
      → Measured Value ←
\`\`\`

**CGM Technology:**

*Sensor Technologies:*
- Electrochemical (glucose oxidase)
- Fluorescence-based
- Implantable vs. transcutaneous
- Factory vs. in-vivo calibration

*Current Generation Features:*
- 10-14 day sensor wear
- No fingerstick calibration required
- Predictive alerts
- Integration with insulin delivery
- Cloud connectivity

**Advanced CGM Metrics:**

*Beyond Time in Range:*
| Metric | Clinical Significance |
|--------|----------------------|
| Time in tight range (70-140) | Postprandial glucose control |
| TBR <54 mg/dL | Severe hypoglycemia risk |
| TAR >250 mg/dL | Significant hyperglycemia exposure |
| MAGE | Mean Amplitude of Glycemic Excursions |
| MODD | Mean of Daily Differences |
| ADRR | Average Daily Risk Range |

*Glycemic Variability Analysis:*
- Short-term variability (within day)
- Long-term variability (between days)
- Association with oxidative stress
- Independent predictor of complications

**Integration with Therapy:**

*Automated Insulin Delivery:*
- CGM-insulin pump integration
- Hybrid closed-loop systems
- Algorithm-adjusted basal rates
- Predictive suspend features
- User input requirements

*Dosing Decision Support:*
- Bolus calculators
- Trend-adjusted dosing
- Pattern recognition algorithms
- Retrospective analysis tools

**Data Interpretation Framework:**

*Ambulatory Glucose Profile (AGP):*
\`\`\`
AGP Components:
1. Summary statistics (mean, GMI, CV)
2. Time in ranges pie chart
3. Daily glucose profile (median, IQR, 10th-90th percentile)
4. Daily glucose profiles
\`\`\`

*Structured Data Review:*
1. Assess overall control (GMI, mean)
2. Evaluate variability (CV, IQR)
3. Identify hypo- and hyperglycemia
4. Analyze patterns by time of day
5. Correlate with events and behaviors

**Clinical Applications:**

*Hypoglycemia Management:*
- Alert threshold customization
- Predictive alerts
- Suspension of insulin delivery
- Post-event analysis
- Hypoglycemia unawareness reversal

*Pregnancy and Diabetes:*
- Tighter targets (63-140 mg/dL)
- Real-time monitoring importance
- Fetal outcomes correlation
- Postpartum management

**Implementation Considerations:**

*Patient Selection:*
- Motivation and capability assessment
- Technology comfort
- Expected benefit vs. burden
- Support system availability

*Education Requirements:*
- Device operation
- Alert management
- Data interpretation
- Therapy adjustment

*Healthcare System Integration:*
- Data sharing platforms
- Remote monitoring protocols
- Reimbursement requirements
- Care team workflows`,
      keyTerms: [
        { term: 'interstitial glucose', definition: 'Glucose concentration in fluid surrounding cells, measured by CGM sensors' },
        { term: 'hybrid closed-loop', definition: 'System integrating CGM with insulin pump for automated basal insulin adjustment' },
        { term: 'MAGE', definition: 'Mean Amplitude of Glycemic Excursions; measure of significant glucose swings' },
        { term: 'glycemic variability', definition: 'Fluctuations in blood glucose levels; associated with oxidative stress and complications' },
        { term: 'predictive alert', definition: 'CGM notification warning of impending high or low glucose based on trend analysis' },
      ],
      clinicalNotes: 'Time in Range >70% is associated with reduced complication risk. CGM data should supplement, not replace, A1C for glycemic assessment. Glycemic variability is an emerging target beyond mean glucose control. Automated insulin delivery systems require ongoing patient engagement and education.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art glucose monitoring leverages advanced sensor technology, artificial intelligence, and closed-loop systems to enable personalized, predictive, and automated diabetes management.',
      explanation: `**Evolution of Glucose Monitoring:**

Glucose monitoring has transformed from intermittent self-assessment to continuous, connected, and increasingly automated physiological surveillance.

**Advanced Sensor Technologies:**

*Current Innovations:*
- Extended wear sensors (180+ days implantable)
- Non-invasive approaches (optical, microwave, electromagnetic)
- Multi-analyte sensors (glucose, lactate, ketones)
- Nanomaterial-enhanced sensitivity
- Biocompatibility improvements

*Emerging Technologies:*
\`\`\`
Non-Invasive Glucose Monitoring Research:
- Near-infrared spectroscopy
- Raman spectroscopy
- Reverse iontophoresis
- Photoacoustic sensing
- Electromagnetic sensing
- Tear/sweat/saliva sampling

Challenges:
- Accuracy vs. blood glucose
- Calibration stability
- Interference management
- Regulatory pathway
\`\`\`

**Artificial Intelligence in Glucose Analytics:**

*Current Applications:*
- Pattern recognition algorithms
- Glucose prediction (15-60 minutes ahead)
- Meal detection and estimation
- Exercise effect prediction
- Alert optimization

*Machine Learning Approaches:*
| Algorithm | Application |
|-----------|-------------|
| LSTM/RNN | Time-series glucose prediction |
| Random Forest | Hypoglycemia risk classification |
| Neural Networks | Pattern identification |
| Reinforcement Learning | Insulin dosing optimization |

**Closed-Loop Systems:**

*System Architecture:*
\`\`\`
CGM Sensor
     ↓
Glucose Data
     ↓
Control Algorithm ← User Inputs (meals, exercise)
     ↓
Insulin Commands
     ↓
Insulin Pump
     ↓
Physiological Effect
     ↓
[Feedback Loop to CGM]
\`\`\`

*Algorithm Types:*
- Proportional-Integral-Derivative (PID)
- Model Predictive Control (MPC)
- Fuzzy logic controllers
- Adaptive algorithms

*Current Systems:*
- Hybrid closed-loop (automated basal)
- Advanced hybrid (automated correction boluses)
- Fully automated (minimal user input)

**Multi-Hormone Systems:**

*Dual-Hormone Approaches:*
- Insulin + glucagon delivery
- Prevention of hypoglycemia
- Stability challenges with glucagon
- Clinical trial outcomes

*Future Multi-Analyte Integration:*
- Continuous ketone monitoring
- Lactate for exercise guidance
- Cortisol/stress markers
- Alcohol detection

**Data Integration and Digital Health:**

*Connected Health Ecosystem:*
\`\`\`
Glucose Data
     ↓
Cloud Platform ← Activity Data
     ↓          ← Food/Medication Logs
Analytics      ← Social Determinants
     ↓
Provider Dashboard ← Patient App
     ↓                    ↓
Population Health    Personalized
Insights             Recommendations
\`\`\`

*Interoperability Standards:*
- FHIR for health data exchange
- Device interoperability
- Data portability
- Privacy protection

**Research Frontiers:**

*Outcome Studies:*
- Time in Range and complications
- CGM in Type 2 diabetes without insulin
- Real-world effectiveness data
- Health economic analyses

*Precision Diabetes Management:*
- Genotype-guided targets
- Phenotype-specific algorithms
- Environmental factor integration
- Individualized time-in-range goals

**Regulatory and Access Considerations:**

*FDA Pathways:*
- PMA for CGM devices
- de novo for novel technologies
- Interoperability requirements
- Real-world evidence acceptance

*Global Access:*
- Reimbursement variations
- Technology access disparities
- Training infrastructure
- Outcome data requirements

**Future Directions:**

*Technology Horizons:*
- Fully implantable systems
- Bionic pancreas
- Cell-based glucose sensing
- Integration with transplant/regenerative approaches

*Clinical Evolution:*
- Routine CGM in all diabetes
- Prevention/prediabetes applications
- Inpatient CGM standardization
- Non-diabetes metabolic monitoring`,
      keyTerms: [
        { term: 'closed-loop system', definition: 'Automated insulin delivery system using CGM data to continuously adjust insulin dosing' },
        { term: 'model predictive control', definition: 'Algorithm using mathematical model of glucose dynamics to optimize insulin delivery' },
        { term: 'artificial pancreas', definition: 'Fully automated system mimicking healthy pancreatic glucose regulation' },
        { term: 'interstitial lag', definition: 'Time delay between blood and interstitial glucose changes due to diffusion' },
        { term: 'glucose prediction', definition: 'AI-based forecasting of future glucose values from CGM trends' },
        { term: 'digital health ecosystem', definition: 'Integrated network of connected devices, apps, and platforms for health management' },
      ],
      clinicalNotes: 'Automated insulin delivery systems have demonstrated improved Time in Range and reduced hypoglycemia. Non-invasive glucose monitoring remains investigational; accuracy challenges persist. AI-augmented decision support is increasingly integrated into CGM platforms. Consider health equity implications of technology-dependent diabetes management.',
    },
  },

  media: [
    {
      id: 'blood-sugar-monitoring-guide',
      type: 'diagram',
      filename: 'blood-sugar-monitoring-steps.svg',
      title: 'How to Check Blood Sugar',
      description: 'Step-by-step visual guide for finger-stick glucose testing',
    },
    {
      id: 'cgm-placement-guide',
      type: 'diagram',
      filename: 'cgm-sensor-placement.svg',
      title: 'CGM Sensor Placement Guide',
      description: 'Recommended sites for CGM sensor insertion',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      source: 'Diabetes Care, American Diabetes Association',
    },
    {
      id: 'cgm-consensus',
      type: 'article',
      title: 'International Consensus on Time in Range',
      source: 'Diabetes Care',
    },
  ],

  crossReferences: [
    { targetId: 'diabetes-a1c-targets', targetType: 'topic', relationship: 'related', label: 'A1C Targets' },
    { targetId: 'diabetes-diet-carb-counting', targetType: 'topic', relationship: 'related', label: 'Carb Counting' },
    { targetId: 'diabetes-complication-prevention', targetType: 'topic', relationship: 'related', label: 'Complication Prevention' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'self-management', 'monitoring'],
    keywords: ['blood glucose', 'CGM', 'glucose meter', 'diabetes monitoring', 'time in range'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
