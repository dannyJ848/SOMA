/**
 * Exercise for Cardiovascular Disease - Comprehensive Educational Content
 *
 * Covers exercise prescription for individuals with cardiovascular conditions,
 * including cardiac rehabilitation principles and safety considerations.
 */

import { EducationalContent } from '../../types';

export const exerciseForCardiovascular: EducationalContent = {
  id: 'sports-med-exercise-for-cardiovascular',
  type: 'concept',
  name: 'Exercise for Cardiovascular Disease',
  alternateNames: ['Cardiac Rehabilitation Exercise', 'Exercise and Heart Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Exercise is actually good for your heart, even if you have heart problems. With the right program and doctor supervision, exercise can help make your heart stronger and healthier.',
      explanation: `## Can People with Heart Problems Exercise?

Yes! In fact, exercise is one of the best things you can do for your heart. Doctors often prescribe exercise as part of treatment for heart conditions.

## How Exercise Helps Your Heart

- Makes your heart muscle stronger
- Helps blood flow better through your body
- Can lower blood pressure
- Helps you feel less tired during daily activities

## What Kind of Exercise?

**Walking is Often the Best Start**
- Easy to do anywhere
- You can control how fast you go
- Start slow and build up

**Other Good Activities**
- Swimming
- Biking (including stationary bikes)
- Light dancing

## Staying Safe

**Always Talk to Your Doctor First**
- Get permission before starting
- Find out what's safe for you
- Know your limits

**Warning Signs to Stop**
- Chest pain or pressure
- Feeling very short of breath
- Dizziness or feeling faint
- Unusual heart fluttering

**The "Talk Test"**
- You should be able to talk while exercising
- If you can't, you're working too hard
- Slow down until talking feels comfortable

## Cardiac Rehabilitation

Many hospitals have special exercise programs for heart patients called "cardiac rehab." These programs:
- Are supervised by nurses and doctors
- Use monitors to watch your heart
- Teach you how to exercise safely
- Help you build confidence`,
      keyTerms: [
        { term: 'cardiac rehabilitation', definition: 'A special supervised exercise program for people with heart problems' },
        { term: 'blood pressure', definition: 'The force of blood pushing against your blood vessel walls' },
        { term: 'heart rate', definition: 'How fast your heart beats, measured in beats per minute' },
      ],
      analogies: [
        'Your heart is like any other muscle - when you exercise it the right way, it gets stronger.',
        'Cardiac rehab is like having a coach and trainer who specialize in helping hearts get back in shape.',
      ],
      examples: [
        'After a heart attack, a person might start with just 5-10 minutes of slow walking, then gradually do more over weeks.',
        'In cardiac rehab, you might walk on a treadmill while wearing a heart monitor so the nurses can make sure your heart is doing okay.',
      ],
    },
    2: {
      level: 2,
      summary: 'Exercise is a cornerstone of cardiovascular disease management, improving heart function, reducing risk factors, and enhancing quality of life. Cardiac rehabilitation programs provide structured, supervised exercise with medical oversight.',
      explanation: `## Benefits of Exercise for the Heart

### Direct Cardiac Benefits
- Improved cardiac output (heart pumps more efficiently)
- Better coronary artery blood flow
- Reduced resting heart rate
- Lower blood pressure

### Risk Factor Modification
- Improves cholesterol profile (raises HDL, lowers LDL)
- Helps with weight management
- Improves blood sugar control
- Reduces inflammation

### Functional Benefits
- Increased exercise capacity
- Less shortness of breath with activity
- Improved quality of life
- Better psychological well-being

## Cardiac Rehabilitation

### What Is Cardiac Rehab?
A supervised program including:
- Exercise training
- Education about heart health
- Risk factor modification
- Psychological support

### Who Benefits?
- After heart attack (myocardial infarction)
- After heart surgery (bypass, valve surgery)
- Heart failure patients
- After angioplasty/stent placement

### Phases of Cardiac Rehabilitation
| Phase | Setting | When |
|-------|---------|------|
| Phase 1 | Hospital | During hospitalization |
| Phase 2 | Outpatient clinic | 4-12 weeks after event |
| Phase 3 | Community/home | Ongoing maintenance |

## Exercise Prescription

### General Guidelines
- Start low, progress slowly
- Aerobic exercise is the foundation
- Add resistance training when stable

### FITT for Cardiac Patients
**Frequency:** 3-5 days/week
**Intensity:** 40-80% of heart rate reserve (start lower)
**Time:** 20-60 minutes (can be accumulated)
**Type:** Walking, cycling, swimming, arm ergometry

### Intensity Monitoring
**Heart Rate Targets:**
- Use heart rate reserve method
- Account for medications (beta-blockers lower HR)
- Rating of Perceived Exertion (RPE) often used

**RPE Scale:**
- 11-14 (light to somewhat hard) typically appropriate
- Adjust based on symptoms

## Safety Considerations

### Warning Signs (Stop Exercise)
- Chest pain, pressure, or tightness
- Unusual shortness of breath
- Dizziness or lightheadedness
- Irregular heartbeat
- Nausea

### High-Risk Features
- Unstable symptoms
- Severe heart failure
- Uncontrolled arrhythmias
- Uncontrolled blood pressure

### Medication Considerations
- Beta-blockers: Lower heart rate, use RPE instead of HR
- Anticoagulants: Avoid contact/fall risk activities
- Nitrates: May need before exercise in some cases

## Progression and Long-Term Exercise

### Graduating from Cardiac Rehab
- Demonstrated safety and self-monitoring ability
- Understanding of appropriate exercise
- Plan for continued activity

### Lifelong Exercise Goals
- 150+ minutes/week moderate aerobic activity
- Resistance training 2 days/week
- Flexibility and balance exercises
- Stay active as a lifestyle`,
      keyTerms: [
        { term: 'cardiac output', definition: 'The amount of blood pumped by the heart per minute; improves with exercise training' },
        { term: 'heart rate reserve', definition: 'The difference between maximum and resting heart rate; used to calculate target exercise intensity' },
        { term: 'beta-blockers', definition: 'Medications that slow heart rate and lower blood pressure; affect exercise heart rate response' },
        { term: 'RPE', definition: 'Rating of Perceived Exertion; subjective measure of how hard exercise feels' },
      ],
      analogies: [
        'Heart rate reserve is like the range on your car\'s speedometer - you can exercise somewhere between resting (idling) and maximum (full speed).',
        'Cardiac rehab is like physical therapy for your heart - structured training to help it recover and get stronger.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise prescription for cardiovascular disease requires risk stratification, individualized programming based on cardiac function and symptoms, and integration with comprehensive cardiac rehabilitation including secondary prevention strategies.',
      explanation: `## Pathophysiology and Exercise Response

### Cardiovascular Adaptations to Training
**Central Adaptations:**
- Increased stroke volume
- Improved left ventricular function
- Enhanced cardiac output at given workload
- Decreased resting heart rate (increased vagal tone)

**Peripheral Adaptations:**
- Improved endothelial function
- Enhanced vasodilation
- Increased capillary density in muscle
- Improved skeletal muscle oxidative capacity

### Disease-Specific Responses
**Coronary Artery Disease:**
- Improved coronary blood flow
- Enhanced collateral circulation
- Improved oxygen extraction

**Heart Failure:**
- Peripheral improvements may be primary
- Improved skeletal muscle function
- Enhanced ventilatory efficiency

## Risk Stratification

### AACVPR Risk Stratification for Cardiac Rehabilitation
**Low Risk:**
- Uncomplicated MI or procedure
- Functional capacity >7 METs
- No significant arrhythmias
- No symptoms at moderate intensity

**Moderate Risk:**
- Symptoms at moderate intensity
- Functional capacity 5-7 METs
- Mildly depressed LV function (EF 40-49%)
- Some ST depression with exercise

**High Risk:**
- Symptoms at low intensity
- Functional capacity <5 METs
- Complex arrhythmias
- EF <40%
- Hemodynamic abnormalities with exercise

### Supervision Recommendations
| Risk Level | Supervision | Monitoring |
|-----------|-------------|------------|
| Low | Minimum after initial education | Self-monitoring |
| Moderate | Moderate supervision | Intermittent ECG |
| High | Close supervision | Continuous ECG |

## Exercise Testing in Cardiac Patients

### Indications
- Risk stratification post-event
- Functional capacity assessment
- Exercise prescription development
- Symptom evaluation

### Protocols
**Bruce Protocol:**
- 3-minute stages, increasing grade and speed
- Most common, but may be too aggressive for some

**Modified Bruce:**
- Lower starting intensity
- Better for deconditioned/higher risk patients

**Naughton Protocol:**
- 2-minute stages, smaller increments
- Appropriate for heart failure patients

### Interpreting Results
- Peak METs achieved
- Heart rate and blood pressure response
- ECG changes (ST depression)
- Symptoms (angina, dyspnea)
- Reason for stopping

## Condition-Specific Exercise Prescription

### Coronary Artery Disease
**Goals:**
- Improve exercise tolerance
- Reduce ischemia threshold
- Secondary prevention

**Prescription:**
- Intensity below ischemic threshold
- 40-70% HRR initially
- Progress as tolerated

### Heart Failure (HFrEF)
**Evidence:**
- HF-ACTION trial: Safe and beneficial
- Improved quality of life and functional capacity
- May reduce hospitalizations

**Prescription:**
- Lower initial intensity (30-40% VO2peak)
- Interval training may be beneficial
- Include resistance training

### Post-CABG/PCI
**Timeline:**
- Sternal precautions: 6-12 weeks post-CABG
- Gradual upper body loading
- PCI: Can often start sooner

**Prescription:**
- Standard cardiac rehab protocols
- Attention to surgical site healing

### Arrhythmias
**Atrial Fibrillation:**
- Rate control important for exercise
- May need modified intensity targets
- Consider anticoagulation and fall risk

**Ventricular Arrhythmias:**
- Higher supervision needed
- ICD patients: Know device settings
- Avoid intensity that triggers arrhythmias

## Comprehensive Cardiac Rehabilitation

### Core Components
1. **Exercise Training:** Aerobic and resistance
2. **Risk Factor Modification:** Diet, smoking, lipids, BP
3. **Education:** Self-management, medication adherence
4. **Psychological Support:** Depression screening, anxiety management

### Outcome Measures
| Outcome | Typical Improvement |
|---------|-------------------|
| Peak VO2 | 11-36% increase |
| Mortality reduction | 20-30% |
| Cardiac events | 25% reduction |
| Quality of life | Significant improvement |

### Barriers and Solutions
- Access: Home-based and telehealth options
- Adherence: Motivational strategies, social support
- Reimbursement: Advocacy for coverage
- Referral: Systematic referral protocols

## Resistance Training in Cardiac Patients

### Safety Evidence
- No increased cardiac events in trials
- Minimal blood pressure spikes with proper technique
- Improvements in function and quality of life

### Prescription
- Begin 2-4 weeks after event (if stable)
- 2-3 days/week, non-consecutive
- 1-3 sets, 10-15 repetitions
- 40-60% 1RM (low-moderate intensity)
- Avoid Valsalva maneuver
- Include major muscle groups`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Process of categorizing patients by level of risk for adverse events during exercise' },
        { term: 'AACVPR', definition: 'American Association of Cardiovascular and Pulmonary Rehabilitation; establishes standards for cardiac rehab' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction; systolic heart failure with EF ≤40%' },
        { term: 'ischemic threshold', definition: 'Intensity at which myocardial ischemia (inadequate blood flow) begins; exercise should stay below this level' },
        { term: 'Valsalva maneuver', definition: 'Straining against a closed glottis; should be avoided in cardiac patients due to blood pressure effects' },
      ],
      clinicalNotes: 'All cardiac patients should be referred to cardiac rehabilitation when eligible. Home-based programs are an evidence-based alternative when center-based rehab is not accessible. Risk stratification guides supervision level and monitoring requirements.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac exercise management encompasses cardiopulmonary exercise testing interpretation, hemodynamic monitoring strategies, exercise prescription for complex cardiac conditions, and integration of precision medicine approaches for optimizing cardiovascular outcomes.',
      explanation: `## Cardiopulmonary Exercise Testing (CPET)

### Physiological Basis
**Fick Equation:**
VO2 = Q × (CaO2 - CvO2)
- Q = Cardiac output
- CaO2 - CvO2 = Arteriovenous oxygen difference

**Components:**
- Central: Cardiac output (HR × SV)
- Peripheral: Oxygen extraction
- Pulmonary: Ventilation and gas exchange

### Key CPET Parameters
| Parameter | Clinical Significance |
|-----------|---------------------|
| VO2peak | Maximal aerobic capacity; strong prognostic marker |
| AT (VT1) | Anaerobic threshold; sustainable intensity |
| VE/VCO2 slope | Ventilatory efficiency; elevated in HF |
| O2 pulse (VO2/HR) | Surrogate for stroke volume |
| Breathing reserve | Ventilatory limitation assessment |

### Prognostic Value in Heart Failure
**Weber Classification:**
| Class | VO2peak (mL/kg/min) | AT (mL/kg/min) | Prognosis |
|-------|---------------------|----------------|-----------|
| A | >20 | >14 | Good |
| B | 16-20 | 11-14 | Moderate |
| C | 10-16 | 8-11 | Poor |
| D | <10 | <8 | Very poor |

**VE/VCO2 Slope:**
- Normal: <30
- Abnormal: >34
- Severe: >45 (poor prognosis in HF)

### Differentiating Limitations
| Finding | Cardiac Limitation | Pulmonary Limitation |
|---------|-------------------|---------------------|
| VO2peak | Reduced | Reduced |
| AT | Early | Variable |
| O2 pulse | Flat/declining | Normal response |
| VE/VCO2 | Elevated | Elevated |
| Breathing reserve | Normal | Depleted (<15%) |
| SpO2 | Usually maintained | May desaturate |

## Advanced Exercise Prescription

### Threshold-Based Training in Cardiac Patients
**Ventilatory Threshold Training:**
- Training at or below VT1 is typically safe
- Training between VT1-VT2 for those who are stable
- Avoids ischemia in most patients

### High-Intensity Interval Training (HIIT)
**Evidence in Cardiac Patients:**
- SMARTEX trial in HF: HIIT vs. moderate continuous
- Greater VO2peak gains with HIIT
- Safety profile acceptable in selected patients

**Protocol Example:**
- 4 × 4 minutes at 85-95% peak HR
- 3-minute active recovery between intervals
- Careful patient selection essential

**Candidacy:**
- Stable coronary disease or HF
- Adequate baseline fitness
- No exercise-induced ischemia or arrhythmia
- Close monitoring during initial sessions

### Heart Failure-Specific Strategies
**Exercise Training Considerations:**
- Lower initial intensity (30-50% VO2peak)
- Interval approach may be better tolerated
- Attention to volume overload symptoms
- Coordinate with diuretic timing

**Inspiratory Muscle Training (IMT):**
- Addresses inspiratory muscle weakness in HF
- 30% maximal inspiratory pressure (MIP)
- 30 min/day or split sessions
- Improves dyspnea and exercise capacity

## Hemodynamic Considerations

### Blood Pressure Response to Exercise
**Normal Response:**
- SBP increases linearly with workload
- DBP changes minimally
- MAP increases moderately

**Abnormal Responses:**
- Hypotensive response: SBP fails to rise or drops
- Hypertensive response: SBP >250 or DBP >115 mmHg
- Both warrant investigation

### Exercise in Hypertension
**Acute Response:**
- BP rises during exercise (normal)
- Post-exercise hypotension (beneficial acute effect)

**Chronic Adaptation:**
- 5-7 mmHg reduction in resting SBP with training
- Greater effect with higher baseline BP

**Prescription:**
- Primarily aerobic exercise
- Avoid heavy resistance or Valsalva
- Isometric exercise: Newer evidence supports benefit
- Target 150-300 min/week

### Pacemaker and ICD Considerations
**Pacemaker Patients:**
- Heart rate response may be fixed
- Rate-responsive pacemakers adjust to activity
- Use RPE rather than heart rate for intensity

**ICD Patients:**
- Know programmed detection zones
- Keep heart rate below detection threshold
- Avoid arm activities initially if pocket recent
- Magnet available in supervised settings

## Complex Cardiac Conditions

### Valvular Heart Disease
| Valve Lesion | Exercise Considerations |
|--------------|------------------------|
| Aortic stenosis (mild-mod) | Modify based on symptoms |
| Aortic stenosis (severe) | No vigorous exercise until treated |
| Mitral regurgitation | Generally can exercise with monitoring |
| Aortic regurgitation | Avoid heavy isometric |

### Hypertrophic Cardiomyopathy
- Sudden death risk during vigorous exercise
- Individualized risk stratification needed
- Moderate recreational activity often permitted
- Competitive sports controversial

### Adult Congenital Heart Disease
- Highly individualized based on anatomy
- May have unique hemodynamic considerations
- Often benefit from exercise but need expert guidance
- Growing evidence for exercise benefit

## Secondary Prevention Integration

### Risk Factor Modification Through Exercise
**Lipids:**
- HDL increase with aerobic training
- Modest LDL reduction
- Triglyceride reduction

**Blood Pressure:**
- Consistent modest reductions
- Endothelial function improvement

**Body Composition:**
- Visceral fat reduction
- Improved insulin sensitivity
- Body weight management

### Medication Interactions
| Medication | Exercise Consideration |
|------------|----------------------|
| Beta-blockers | Blunted HR response; use RPE |
| ACE inhibitors | Monitor for hypotension |
| Diuretics | Hydration, electrolyte awareness |
| Anticoagulants | Avoid high-impact, fall risk |
| Statins | May have muscle effects; monitor |

### Psychological and Behavioral
**Depression in Cardiac Patients:**
- Common (20-40% post-MI)
- Associated with worse outcomes
- Exercise improves depression scores

**Behavioral Strategies:**
- Goal setting
- Self-monitoring
- Social support integration
- Problem-solving for barriers`,
      keyTerms: [
        { term: 'CPET', definition: 'Cardiopulmonary exercise testing; simultaneous measurement of cardiac, pulmonary, and metabolic responses to exercise' },
        { term: 'VE/VCO2 slope', definition: 'Ratio of ventilation to CO2 production; measure of ventilatory efficiency; powerful prognostic marker in heart failure' },
        { term: 'O2 pulse', definition: 'VO2 divided by heart rate; surrogate for stroke volume at given workload' },
        { term: 'inspiratory muscle training', definition: 'Specific training of respiratory muscles to improve ventilatory function; beneficial in heart failure' },
        { term: 'rate-responsive pacemaker', definition: 'Pacemaker that adjusts heart rate based on activity level detection' },
      ],
      clinicalNotes: 'CPET provides superior prognostic information compared to standard exercise testing in heart failure. VE/VCO2 slope >34 and VO2peak <14 mL/kg/min are poor prognostic indicators. HIIT appears safe and may be superior in selected stable patients but requires careful supervision.',
    },
    5: {
      level: 5,
      summary: 'Elite cardiovascular exercise management encompasses molecular mechanisms of cardioprotection, advanced hemodynamic assessment, precision medicine integration, and cutting-edge technologies for optimizing exercise therapy outcomes in complex cardiac populations.',
      explanation: `## Molecular Cardioprotection Through Exercise

### Myocardial Signaling Pathways
**Ischemic Preconditioning:**
- Exercise induces similar protective signaling
- Adenosine, opioid, bradykinin pathways
- RISK (PI3K-Akt-eNOS) activation
- SAFE (JAK-STAT) pathway involvement

**Mitochondrial Protection:**
- Reduced ROS production with training
- Enhanced mitochondrial biogenesis
- Improved calcium handling
- Upregulated antioxidant defenses

**Anti-Inflammatory Effects:**
- Reduced TNF-α, IL-6 (chronic)
- Anti-inflammatory myokine release
- Reduced macrophage infiltration
- Attenuated atherosclerotic inflammation

### Cardiac Remodeling
**Beneficial Adaptations:**
- Physiological hypertrophy (eccentric)
- Increased chamber size with preserved function
- Enhanced contractility
- Distinct from pathological hypertrophy

**Molecular Markers:**
- IGF-1/PI3K pathway: Physiological hypertrophy
- Gq/calcineurin pathway: Pathological hypertrophy
- Differential gene expression profiles

### Endothelial Function
**Shear Stress Mechanotransduction:**
- Laminar shear with exercise
- eNOS upregulation and phosphorylation
- Improved NO bioavailability
- Reduced endothelial activation

**Vascular Remodeling:**
- Arterial compliance improvement
- Collateral circulation enhancement
- Reduced arterial stiffness

## Precision Medicine in Cardiac Exercise

### Genetic Influences on Exercise Response
**Cardiovascular Phenotypes:**
| Gene | Variant | Implication |
|------|---------|-------------|
| APOE | ε4 | Lipid response to exercise |
| ACE | I/D | Training response, heart failure progression |
| ADRB1 | Arg389Gly | Beta-blocker response |
| CYP2D6 | Multiple | Drug metabolism, exercise HR |

**Exercise Capacity Heritability:**
- ~50% of VO2max variation is genetic
- Trainability also has genetic component
- HERITAGE study demonstrated responder variation

### Biomarker-Guided Exercise
**Troponin:**
- Transient elevation after intense exercise
- Different from ischemic elevation
- Serial monitoring not routinely needed

**BNP/NT-proBNP:**
- May guide exercise intensity in HF
- Tracks with clinical status
- Decreases with effective cardiac rehab

**VO2peak and VE/VCO2:**
- Strongest prognostic markers in HF
- Guide transplant listing decisions
- Monitor response to training

### Digital Health Integration
**Remote Monitoring:**
- Continuous HR and rhythm
- Activity tracking
- Symptom logging
- Virtual coaching

**Machine Learning Applications:**
- Arrhythmia detection during exercise
- Personalized intensity recommendations
- Adherence prediction
- Risk stratification refinement

## Advanced Hemodynamic Assessment

### Non-Invasive Cardiac Output Monitoring
**Impedance Cardiography:**
- Stroke volume estimation
- Cardiac output tracking during exercise
- Research and clinical applications

**Echocardiography During Exercise:**
- Stress echo for ischemia
- Diastolic function assessment
- Pulmonary pressures
- Valvular hemodynamics

### Exercise Right Heart Catheterization
**Indications:**
- Unexplained dyspnea with normal resting hemodynamics
- Pulmonary hypertension assessment
- Heart failure with preserved EF evaluation

**Key Measurements:**
- Pulmonary artery pressure during exercise
- Pulmonary capillary wedge pressure
- Cardiac output response
- PVR dynamics

### Heart Failure with Preserved EF (HFpEF)
**Exercise Pathophysiology:**
- Impaired cardiac output augmentation
- Diastolic dysfunction unmasked
- PCWP rises with exercise
- Limited exercise capacity despite normal EF

**Exercise Benefits:**
- Improved peak VO2 demonstrated
- Peripheral adaptations primary mechanism
- Diastolic function may improve
- Quality of life benefits

## Specialized Populations

### Advanced Heart Failure (LVAD, Transplant Candidates)
**LVAD Patients:**
- Safe and effective exercise documented
- Unique hemodynamics (continuous flow)
- HR remains primary for output modulation
- Avoid contact sports (driveline)

**Pre-Transplant:**
- Exercise capacity for surgical candidacy
- Optimize functional status
- Pulmonary rehabilitation component
- Psychological preparation

**Post-Transplant:**
- Denervated heart: Blunted HR response
- Prolonged warm-up needed
- Gradual chronotropic adaptation over months
- Excellent exercise capacity achievable

### Cardiac Oncology
**Cardiotoxicity Prevention:**
- Pre-treatment exercise: Cardioprotective
- During treatment: May reduce cardiotoxicity
- Post-treatment: Cardiac rehabilitation

**Prescription Modifications:**
- Lower intensity during treatment
- Monitor for symptoms
- Address cancer-related fatigue
- Multidisciplinary approach

### Congenital Heart Disease Adults
**Growing Population:**
- More patients surviving to adulthood
- Often restricted unnecessarily
- Individual risk stratification needed

**General Principles:**
- Expert assessment of anatomy and hemodynamics
- Most can exercise with some modifications
- Avoid competitive high-intensity in some conditions
- Improve quality of life

## Future Directions

### Novel Interventions
**Remote Ischemic Preconditioning:**
- Arm cuff inflation/deflation cycles
- May enhance exercise tolerance
- Cardioprotective signaling
- Research ongoing

**Exercise Mimetics (Research):**
- AMPK activators
- PGC-1α pathway modulators
- Not replacements for exercise but mechanistic interest

### Technology Evolution
**Virtual Reality Cardiac Rehab:**
- Immersive exercise environments
- Improved engagement
- Real-time monitoring integration

**AI-Driven Prescription:**
- Personalized intensity recommendations
- Predictive risk modeling
- Automated progression algorithms

**Implantable Sensors:**
- Pulmonary artery pressure monitoring
- Activity tracking from devices
- Closed-loop exercise guidance

### Research Priorities
- Optimal HIIT protocols for cardiac patients
- Exercise in HFpEF mechanisms and prescription
- Personalized medicine implementation
- Health equity in cardiac rehabilitation access`,
      keyTerms: [
        { term: 'ischemic preconditioning', definition: 'Phenomenon where brief ischemia protects against subsequent prolonged ischemia; exercise induces similar protective signaling' },
        { term: 'RISK pathway', definition: 'Reperfusion Injury Salvage Kinase pathway (PI3K-Akt); mediates cardioprotective signaling from exercise' },
        { term: 'LVAD', definition: 'Left ventricular assist device; mechanical pump supporting heart function; patients can and should exercise' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction; exercise unmasks diastolic dysfunction; growing population' },
        { term: 'remote ischemic preconditioning', definition: 'Brief limb ischemia (arm cuff) that provides systemic cardioprotective effects; potential adjunct to exercise' },
      ],
      clinicalNotes: `Elite-level considerations:
1. Molecular mechanisms of exercise-induced cardioprotection parallel ischemic preconditioning
2. Genetic variation explains substantial inter-individual response to exercise training
3. CPET is the gold standard for prognosis and exercise prescription in advanced heart failure
4. HFpEF responds to exercise training with meaningful improvements in exercise capacity
5. LVAD and transplant patients benefit from structured exercise programs
6. AI and remote monitoring will transform cardiac rehabilitation delivery
7. Health equity in cardiac rehab access remains a critical challenge`,
    },
  },

  media: [
    {
      id: 'cpet-interpretation',
      type: 'diagram',
      filename: 'cpet-interpretation-guide.svg',
      title: 'CPET Interpretation Guide',
      description: 'Key parameters and patterns in cardiopulmonary exercise testing',
    },
  ],

  citations: [
    {
      id: 'aacvpr-guidelines',
      type: 'textbook',
      title: 'AACVPR Cardiac Rehabilitation Resource Manual',
      source: 'American Association of Cardiovascular and Pulmonary Rehabilitation',
    },
    {
      id: 'esc-cardiac-rehab',
      type: 'article',
      title: 'European Society of Cardiology Guidelines on Cardiac Rehabilitation',
      source: 'European Heart Journal',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-exercise-prescription-principles', targetType: 'concept', relationship: 'parent', label: 'Exercise Prescription Principles' },
    { targetId: 'sports-med-exercise-physiology-basics', targetType: 'concept', relationship: 'related', label: 'Exercise Physiology Basics' },
    { targetId: 'sports-med-exercise-for-diabetes', targetType: 'concept', relationship: 'related', label: 'Exercise for Diabetes' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['sports-medicine', 'cardiac-rehabilitation', 'exercise-prescription'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default exerciseForCardiovascular;
