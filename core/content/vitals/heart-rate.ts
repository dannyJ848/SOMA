/**
 * Heart Rate - Vital Signs
 *
 * Comprehensive content on heart rate measurement, normal ranges,
 * bradycardia, tachycardia, heart rate variability, and exercise considerations.
 */

import { EducationalContent } from '../types';

export const heartRate: EducationalContent = {
  id: 'vitals-heart-rate',
  type: 'concept',
  name: 'Heart Rate',
  alternateNames: ['Pulse', 'Heart Beat', 'Pulse Rate', 'HR'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart rate is how many times your heart beats in one minute, telling us how fast or slow your heart is working.',
      explanation: `Your heart is like a pump that never stops working. Every time it beats, it pushes blood through your body to deliver oxygen and nutrients.

**What is Heart Rate?**
Heart rate (also called pulse) is the number of times your heart beats per minute (bpm).

**Normal Heart Rate:**
- Adults: 60-100 beats per minute when resting
- Children: Usually faster than adults
- Athletes: Often slower (50-60 bpm) because their hearts are very efficient

**How to Feel Your Pulse:**
1. Place two fingers (not your thumb) on the inside of your wrist, below your thumb
2. Or press gently on the side of your neck
3. Count the beats for 15 seconds
4. Multiply by 4 to get beats per minute

**When Your Heart Beats Faster:**
- Exercise or physical activity
- Feeling scared, excited, or stressed
- Drinking caffeine
- Having a fever
- Some medications

**When Your Heart Beats Slower:**
- Resting or sleeping
- Being very relaxed
- Being very fit (athletes)

**When to Tell an Adult:**
- Your heart is racing when you're not exercising
- You feel like your heart is skipping beats
- You feel dizzy or faint
- Your chest hurts`,
      keyTerms: [
        { term: 'heart rate', definition: 'How many times your heart beats in one minute' },
        { term: 'pulse', definition: 'The feeling of your heartbeat that you can feel in your wrist or neck' },
        { term: 'beats per minute (bpm)', definition: 'The unit we use to count heart rate' },
      ],
      analogies: [
        'Your heart is like a drum that beats to pump blood through your body like water through pipes.',
        'A resting heart is like a car idling - it\'s running but not working hard.',
        'Exercise makes your heart beat faster, like running makes you breathe harder.',
      ],
      examples: [
        'After running around at recess, your heart beats faster to send more blood to your muscles.',
        'When you\'re sleeping, your heart slows down because your body needs less blood flow.',
        'A scary movie might make your heart beat faster even though you\'re sitting still.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart rate reflects cardiac function and autonomic nervous system activity, with normal resting rates of 60-100 bpm in adults, and variations indicating fitness level, stress, or cardiac conditions.',
      explanation: `## Understanding Heart Rate

Heart rate is the number of cardiac contractions per minute, measured in beats per minute (bpm). It reflects the balance between sympathetic (accelerator) and parasympathetic (brake) nervous system activity.

## Normal Heart Rate Ranges

| Age Group | Normal Range (bpm) |
|-----------|-------------------|
| Newborns (0-1 month) | 100-160 |
| Infants (1-12 months) | 100-150 |
| Toddlers (1-3 years) | 90-140 |
| Preschool (3-5 years) | 80-120 |
| School age (6-12 years) | 70-110 |
| Teenagers (13-18 years) | 60-100 |
| Adults (18+) | 60-100 |
| Well-trained athletes | 40-60 |

## How to Measure Heart Rate

**Pulse Points:**
- **Radial artery** (wrist): Most common for self-monitoring
- **Carotid artery** (neck): Strong pulse, but don't press both sides
- **Brachial artery** (inner elbow): Used for blood pressure
- **Femoral artery** (groin): Used in emergencies
- **Pedal arteries** (foot): Check circulation

**Measurement Tips:**
1. Rest for at least 5 minutes before measuring
2. Use index and middle fingers (thumb has its own pulse)
3. Count for 30-60 seconds for accuracy
4. Note if rhythm is regular or irregular

## Abnormal Heart Rates

**Tachycardia (Fast Heart Rate):**
- Definition: Resting heart rate >100 bpm
- Causes:
  - Exercise, stress, anxiety
  - Fever, infection
  - Dehydration
  - Caffeine, medications, drugs
  - Anemia
  - Hyperthyroidism
  - Heart conditions

**Bradycardia (Slow Heart Rate):**
- Definition: Resting heart rate <60 bpm
- May be normal in:
  - Athletes
  - During sleep
  - Relaxation/meditation
- Concerning causes:
  - Heart block
  - Hypothyroidism
  - Medications (beta-blockers)
  - Sick sinus syndrome

## Resting Heart Rate Significance

**Lower resting heart rate generally indicates:**
- Better cardiovascular fitness
- More efficient heart function
- Lower cardiovascular disease risk

**Studies show:**
- Resting HR >80 associated with increased mortality
- Each 10 bpm increase raises cardiovascular risk
- Regular exercise can lower resting HR by 10-20 bpm

## Exercise Heart Rate

**Maximum Heart Rate (rough estimate):**
\`\`\`
Max HR = 220 - age
\`\`\`

**Exercise Intensity Zones:**
| Zone | % of Max HR | Purpose |
|------|-------------|---------|
| Light | 50-60% | Warm-up, recovery |
| Moderate | 60-70% | Fat burning, endurance |
| Aerobic | 70-80% | Cardiovascular fitness |
| Anaerobic | 80-90% | Performance training |
| Maximum | 90-100% | Short bursts only |

**Target Heart Rate:**
For moderate exercise: 50-70% of maximum
For vigorous exercise: 70-85% of maximum

## When to Seek Care

**Call your doctor if you notice:**
- Resting heart rate consistently >100 or <60 (if not an athlete)
- Heart racing at rest
- Irregular rhythm (skipped beats, extra beats)
- Palpitations with dizziness or chest pain
- Fainting or near-fainting`,
      keyTerms: [
        { term: 'tachycardia', definition: 'Abnormally fast heart rate, greater than 100 bpm at rest', pronunciation: 'tak-ee-KAR-dee-ah' },
        { term: 'bradycardia', definition: 'Abnormally slow heart rate, less than 60 bpm', pronunciation: 'bray-dee-KAR-dee-ah' },
        { term: 'palpitations', definition: 'The sensation of feeling your own heartbeat, often described as pounding, fluttering, or racing' },
        { term: 'radial pulse', definition: 'The pulse felt at the wrist on the thumb side' },
        { term: 'carotid pulse', definition: 'The pulse felt at the side of the neck' },
      ],
      analogies: [
        'Your heart rate is like a car\'s RPM gauge - it shows how hard the engine is working.',
        'The nervous system controls heart rate like a thermostat - sympathetic speeds it up, parasympathetic slows it down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart rate is determined by the sinoatrial node firing rate modulated by autonomic input, with clinical significance in cardiac conduction disorders, arrhythmias, and cardiovascular risk stratification.',
      explanation: `## Cardiac Electrophysiology Basics

**Heart Rate Determination:**
- SA node (pacemaker): Intrinsic rate 60-100 bpm
- AV node: Intrinsic rate 40-60 bpm
- Purkinje fibers: Intrinsic rate 20-40 bpm

**Autonomic Modulation:**
1. **Parasympathetic (Vagus nerve):**
   - Acetylcholine → M2 receptors
   - Opens K+ channels → hyperpolarization
   - Slows SA node firing
   - Dominant at rest

2. **Sympathetic:**
   - Norepinephrine → β1 receptors
   - Opens Ca2+ channels → faster depolarization
   - Increases SA node firing rate
   - Increases contractility (inotropy)

## Heart Rate Variability (HRV)

**Definition:** Beat-to-beat variation in R-R intervals

**Measurement Methods:**
- Time domain: SDNN, RMSSD, pNN50
- Frequency domain: LF (sympathetic), HF (parasympathetic), LF/HF ratio
- Nonlinear methods: Poincaré plots, entropy

**Clinical Significance:**
- Higher HRV = better autonomic flexibility
- Low HRV associated with:
  - Increased cardiovascular mortality
  - Diabetes complications
  - Depression and anxiety
  - Post-MI poor prognosis

**Factors Affecting HRV:**
- Age (decreases with age)
- Fitness (increases with training)
- Stress (acute stress reduces HRV)
- Sleep quality
- Medications (beta-blockers affect variability)

## Sinus Tachycardia

**Appropriate (Physiologic):**
- Exercise
- Fever (10 bpm increase per 1°C/1.8°F)
- Pain, anxiety, stress
- Hypovolemia, hemorrhage
- Anemia
- Hypoxia
- Hyperthyroidism

**Inappropriate Sinus Tachycardia:**
- Resting HR >100 without identifiable cause
- Exaggerated HR response to minimal activity
- Symptoms: Palpitations, fatigue, exercise intolerance
- Treatment: Beta-blockers, ivabradine

## Pathological Tachycardias

| Type | Mechanism | Rate | ECG Features |
|------|-----------|------|--------------|
| Sinus tachycardia | SA node acceleration | 100-180 | Normal P waves, gradual onset/offset |
| SVT (AVNRT) | Re-entry in AV node | 150-250 | Narrow complex, sudden onset |
| Atrial flutter | Atrial macro-reentry | 250-350 atrial, 150 ventricular | Sawtooth flutter waves |
| Atrial fibrillation | Chaotic atrial activity | 350-600 atrial, irregular ventricular | No P waves, irregularly irregular |
| Ventricular tachycardia | Ventricular focus | 150-250 | Wide complex, AV dissociation |

## Bradyarrhythmias

**Sinus Bradycardia:**
- SA node rate <60 bpm
- Causes: Athletic conditioning, sleep, medications, hypothyroidism, sick sinus syndrome
- Symptomatic if: Fatigue, dizziness, syncope, heart failure

**AV Blocks:**
| Degree | PR Interval | P:QRS Ratio | Clinical |
|--------|-------------|-------------|----------|
| First | >200 ms, constant | 1:1 | Usually benign |
| Second (Mobitz I) | Progressive lengthening | Dropped beats | Often benign |
| Second (Mobitz II) | Constant before drop | Variable | High risk of progression |
| Third (Complete) | Variable/dissociated | Independent | Requires pacing |

## Heart Rate Recovery

**Definition:** Rate at which HR decreases after exercise cessation

**Measurement:**
- 1-minute HRR = Peak HR - HR at 1 minute post-exercise

**Clinical Significance:**
- HRR <12 bpm at 1 minute: Abnormal
- Associated with increased mortality
- Reflects vagal reactivation
- Prognostic marker in stress testing

## Chronotropic Incompetence

**Definition:** Failure to achieve ≥80% of age-predicted max HR during exercise

**Causes:**
- Sinus node dysfunction
- Medications (beta-blockers)
- Autonomic dysfunction
- Coronary artery disease

**Clinical Impact:**
- Reduced exercise capacity
- Associated with increased mortality
- May indicate need for rate-responsive pacing`,
      keyTerms: [
        { term: 'sinoatrial node', definition: 'The heart\'s natural pacemaker located in the right atrium; sets the intrinsic heart rate' },
        { term: 'heart rate variability (HRV)', definition: 'Beat-to-beat variation in heart rate intervals; reflects autonomic nervous system function' },
        { term: 'AVNRT', definition: 'AV Nodal Reentrant Tachycardia; most common cause of SVT' },
        { term: 'heart rate recovery', definition: 'Decrease in heart rate after exercise cessation; marker of vagal function' },
        { term: 'chronotropic incompetence', definition: 'Inability to achieve adequate heart rate response during exercise' },
        { term: 'Mobitz type II', definition: 'Second-degree AV block with constant PR before dropped beats; high risk of complete block' },
      ],
      clinicalNotes: 'Abnormal heart rate recovery (<12 bpm at 1 minute) on stress testing is an independent predictor of mortality, even when the test is otherwise negative for ischemia.',
    },
    4: {
      level: 4,
      summary: 'Heart rate regulation involves complex electrophysiological, neurohumoral, and molecular mechanisms, with clinical applications in arrhythmia management, risk stratification, and emerging wearable-based monitoring.',
      explanation: `## Cellular Electrophysiology of Automaticity

**SA Node Action Potential:**
1. Phase 4 (Pacemaker potential):
   - HCN channels (funny current, If) → Na+ influx
   - T-type Ca2+ channels activation
   - Gradual depolarization toward threshold

2. Phase 0 (Upstroke):
   - L-type Ca2+ channel opening
   - Slower upstroke than ventricular cells

3. Phase 3 (Repolarization):
   - K+ efflux through delayed rectifier channels

**Autonomic Modulation Mechanisms:**

| Pathway | Receptor | Ion Channel Effect | Result |
|---------|----------|-------------------|--------|
| Parasympathetic | M2 (muscarinic) | ↑IKACh, ↓If | Hyperpolarization, slowed depolarization |
| Sympathetic | β1 | ↑If, ↑ICa-L, ↑ICa-T | Faster diastolic depolarization |
| Adenosine | A1 | ↑IKACh | Slows conduction (AV node) |

## Advanced Arrhythmia Concepts

**Re-entry Requirements:**
1. Anatomical or functional circuit
2. Unidirectional block
3. Slow conduction in one limb
4. Recovery of excitability in blocked pathway

**Triggered Activity:**
- Early afterdepolarizations (EADs): During phase 2/3, seen in long QT
- Delayed afterdepolarizations (DADs): After full repolarization, seen in digoxin toxicity, catecholaminergic states

**Automaticity Disorders:**
- Enhanced normal automaticity: Subsidiary pacemakers
- Abnormal automaticity: Diseased tissue at rest

## Heart Rate in Critical Illness

**Tachycardia in ICU:**
- Appropriate response to physiologic stress
- May be maladaptive (increased myocardial oxygen demand)
- Heart rate control considerations:
  - Beta-blockers in septic shock (controversial, ESMOLOL-SEPSIS trial)
  - Rate control in atrial fibrillation with RVR
  - Avoid excessive suppression in compensatory states

**Heart Rate Targets:**
| Condition | Target HR |
|-----------|-----------|
| Atrial fibrillation (acute) | <110 (lenient) or <80 (strict) |
| Post-MI | <70 (beta-blocker benefit) |
| HFrEF (sinus rhythm) | <70 (ivabradine if ≥70) |
| Sepsis | Controversial (avoid excessive control) |

## Risk Stratification

**Resting Heart Rate and Outcomes:**
- Framingham study: HR ≥75 associated with 3.5x CVD mortality
- Each 10 bpm increase: 20% increase in CVD risk
- Mechanism: Atherosclerosis progression, plaque instability

**Heart Rate Turbulence:**
- After PVC: Heart rate accelerates then decelerates
- Turbulence onset (TO): Initial acceleration
- Turbulence slope (TS): Subsequent deceleration
- Abnormal values predict sudden cardiac death post-MI

**Deceleration Capacity:**
- Measures overall vagal influence on HR
- Low values (<4.5 ms): 3x mortality risk post-MI
- Independent of LVEF

## Device-Based Heart Rate Management

**Pacemaker Indications (Bradycardia):**
- Symptomatic sinus node dysfunction
- High-grade AV block (Mobitz II, complete)
- Chronotropic incompetence limiting function

**Rate-Responsive Pacing:**
- Sensors: Activity (accelerometer), minute ventilation, QT interval
- Adjust pacing rate to physiologic demand
- Essential for chronotropic incompetence

**Implantable Loop Recorders:**
- Continuous ECG monitoring for 2-3 years
- Indications: Unexplained syncope, cryptogenic stroke
- Detects paroxysmal arrhythmias

## Pharmacological Heart Rate Control

| Agent | Mechanism | Use | Considerations |
|-------|-----------|-----|----------------|
| Beta-blockers | β1 blockade | AF rate control, post-MI, HF | Avoid in decompensated HF |
| Non-DHP CCB | L-type Ca2+ blockade | AF rate control | Avoid in HFrEF |
| Digoxin | ↑Vagal tone | AF rate control at rest | Less effective with exercise |
| Ivabradine | If channel blockade | HFrEF with HR≥70 | No AV nodal effects |
| Adenosine | A1 receptor | SVT termination | Transient asystole |
| Amiodarone | Multiple channels | AF rate control | Long-term toxicity |

## Wearable Technology and Heart Rate

**Consumer Devices:**
- Photoplethysmography (PPG) at wrist
- Good for average HR and trends
- Limited accuracy during motion
- Some detect atrial fibrillation (Apple Watch, Fitbit)

**Clinical Applications:**
- Remote patient monitoring
- AF detection (APPLE HEART, HEARTLINE studies)
- Exercise prescription adherence
- Sleep and recovery assessment

**Limitations:**
- Motion artifact
- Skin pigmentation effects
- Limited arrhythmia specificity
- Over-medicalization concern`,
      keyTerms: [
        { term: 'funny current (If)', definition: 'HCN channel-mediated inward current responsible for SA node automaticity; target of ivabradine' },
        { term: 'heart rate turbulence', definition: 'Baroreflex-mediated HR response to PVCs; abnormal values predict post-MI mortality' },
        { term: 'deceleration capacity', definition: 'Quantification of overall heart rate deceleration; reflects vagal modulation' },
        { term: 'early afterdepolarization', definition: 'Abnormal depolarization during repolarization; trigger for torsades de pointes' },
        { term: 'ivabradine', definition: 'Selective If channel blocker; reduces heart rate without affecting blood pressure' },
        { term: 'photoplethysmography', definition: 'Optical technique for heart rate measurement in wearable devices' },
      ],
      clinicalNotes: 'In HFrEF with sinus rhythm, consider ivabradine if resting HR remains ≥70 despite maximally tolerated beta-blocker. Unlike beta-blockers, ivabradine has no negative inotropic effect.',
    },
    5: {
      level: 5,
      summary: 'Expert-level heart rate management integrates advanced electrophysiology, precision risk stratification, device therapy optimization, and emerging digital health technologies for individualized patient care.',
      explanation: `## Molecular Regulation of Heart Rate

**Ion Channel Genetics:**
| Gene | Protein | Current | Clinical Syndrome |
|------|---------|---------|-------------------|
| HCN4 | HCN channel | If | Sinus node dysfunction, sick sinus |
| SCN5A | Nav1.5 | INa | Brugada, sick sinus, LQT3 |
| KCNQ1 | Kv7.1 | IKs | LQT1, short QT |
| KCNH2 | Kv11.1 | IKr | LQT2, short QT |
| CACNA1C | Cav1.2 | ICa-L | LQT8 (Timothy syndrome) |

**Sinoatrial Node Transcriptional Regulation:**
- TBX3, TBX18: SA node specification
- SHOX2: SA node pacemaker gene expression
- Connexin downregulation in SA node (CX43-, CX40-)
- Failure of transcriptional programming: Congenital sick sinus syndrome

## Advanced Risk Stratification

**Multi-Parameter Risk Assessment:**

| Parameter | Measurement | High Risk Threshold | Mechanism |
|-----------|-------------|---------------------|-----------|
| Resting HR | ECG/Holter | >75 bpm | Atherosclerosis, plaque stress |
| HRV (SDNN) | 24h Holter | <70 ms post-MI | Vagal withdrawal |
| HR turbulence | Holter (post-PVC) | TO ≥0%, TS ≤2.5 ms/RR | Baroreflex failure |
| Deceleration capacity | Holter | <4.5 ms | Global vagal impairment |
| T-wave alternans | Exercise | Positive | Repolarization instability |

**Integrative Risk Scores:**
- MADIT-ICD risk score: HF hospitalization, age, QRS, LVEF, AF
- ATRAMI study: HRV + baroreflex sensitivity post-MI
- FINGER study: Multiple autonomic markers

## Electrophysiology Study Findings

**Sinus Node Recovery Time (SNRT):**
- Measured after rapid atrial pacing
- Corrected SNRT = SNRT - baseline cycle length
- Abnormal: CSNRT >550 ms
- Indicates sinus node dysfunction

**SA Conduction Time (SACT):**
- Time for impulse to exit sinus node
- Measured by premature atrial stimulation
- Abnormal: >140 ms
- Reflects perinodal disease

**AH and HV Intervals:**
| Interval | Normal | Abnormal | Significance |
|----------|--------|----------|--------------|
| AH | 55-125 ms | Prolonged | AV nodal conduction delay |
| HV | 35-55 ms | Prolonged (>55) | His-Purkinje disease |
| HV | | <35 | Pre-excitation |

## Catheter Ablation for Heart Rate Disorders

**Inappropriate Sinus Tachycardia:**
- SA node modification (not isolation)
- Limited efficacy (50-70% success)
- Risk of pacemaker dependence
- Often combined with medical therapy

**AVNRT Ablation:**
- Slow pathway ablation
- Success rate >95%
- AV block risk <1%
- Cryoablation if septal

**Atrial Flutter Ablation:**
- Cavotricuspid isthmus ablation
- Success rate >95%
- Lower recurrence than rate control

## Advanced Device Therapy

**Leadless Pacemakers:**
- Micra (Medtronic): Right ventricular only
- AVEIR (Abbott): Leadless dual-chamber (AV synchrony)
- Advantages: No pocket, no lead, lower infection risk
- Limitations: VVI/VVIR only (Micra), extraction challenging

**Conduction System Pacing:**
- His bundle pacing
- Left bundle branch area pacing (LBBAP)
- More physiologic than RV apical pacing
- Avoids pacing-induced cardiomyopathy
- Technical learning curve

**His Bundle Pacing vs. Biventricular:**
- HBP non-inferior to BiV for CRT (His-SYNC, His-alternative trials)
- LBBAP: Higher success, lower thresholds than HBP
- Emerging as preferred physiologic pacing approach

## Digital Health and Remote Monitoring

**Clinical Trials:**
| Trial | Device | Population | Finding |
|-------|--------|------------|---------|
| APPLE HEART | Apple Watch | General | 84% PPV for AF if pulse irregularity |
| HEARTLINE | Apple Watch | >65 years | Earlier AF detection, engagement outcomes |
| mAFA-II | mHealth app | Known AF | Improved rhythm control and outcomes |
| REHEARSE-AF | AliveCor KardiaMobile | AF screening | Higher AF detection than routine care |

**Implementation Considerations:**
- Sensitivity vs. specificity tradeoffs
- Alert fatigue and false positives
- Clinical workflow integration
- Regulatory and liability issues
- Health equity (device access)

## Emerging Therapies

**Gene Therapy:**
- TBX18 gene transfer: Create biological pacemaker
- In vivo and ex vivo approaches
- Preclinical studies promising
- Challenges: Durability, arrhythmogenicity

**Bioelectronic Medicine:**
- Vagus nerve stimulation for rate control
- Autonomic modulation devices
- Optogenetics (research stage)

**Machine Learning Applications:**
- AF prediction from sinus rhythm ECG
- Sudden cardiac death risk stratification
- Personalized rate control targets
- Arrhythmia detection from wearables

## Future Directions

**Personalized Heart Rate Targets:**
- Individual optimal HR based on:
  - Genetics (HR genetic variants)
  - Cardiac substrate (imaging)
  - Autonomic profile (HRV phenotyping)
  - Lifestyle and activity level

**Closed-Loop Control:**
- Implantable hemodynamic sensors
- Automatic rate optimization
- Integration with mechanical circulatory support

**Precision Cardiology:**
- Pharmacogenomics for rate-control agents
- Polygenic risk scores for bradyarrhythmia
- Tailored device programming based on ML algorithms`,
      keyTerms: [
        { term: 'HCN4', definition: 'Gene encoding hyperpolarization-activated cyclic nucleotide-gated channel 4; mutations cause inherited sinus node dysfunction' },
        { term: 'left bundle branch area pacing', definition: 'Physiologic pacing approach delivering impulses to the left bundle branch region' },
        { term: 'corrected SNRT', definition: 'Sinus node recovery time adjusted for baseline cycle length; marker of sinus node function' },
        { term: 'T-wave alternans', definition: 'Beat-to-beat variation in T-wave morphology; marker of repolarization instability and sudden death risk' },
        { term: 'leadless pacemaker', definition: 'Self-contained pacing device implanted directly in the heart without transvenous leads' },
        { term: 'biological pacemaker', definition: 'Gene therapy approach to create de novo pacemaker cells from non-pacemaker tissue' },
      ],
      clinicalNotes: `Clinical Pearls:
1. LBBAP is emerging as preferred physiologic pacing with higher success rates than His bundle pacing
2. Wearable AF detection has ~84% PPV when pulse irregularity is detected - confirm with 12-lead ECG
3. Heart rate turbulence (abnormal TO or TS) adds prognostic information beyond LVEF post-MI
4. In chronic HF, target HR <70 with beta-blocker + ivabradine if needed (SHIFT trial)
5. Inappropriate sinus tachycardia: Consider SA node modification only if medical therapy fails (high recurrence)
6. Rate control target in AF: Lenient (<110) is non-inferior to strict (<80) in most patients (RACE II)`,
    },
  },

  media: [
    {
      id: 'pulse-locations',
      type: 'diagram',
      filename: 'pulse-locations.svg',
      title: 'Pulse Palpation Sites',
      description: 'Major arterial pulse points for heart rate assessment',
    },
    {
      id: 'cardiac-conduction',
      type: 'diagram',
      filename: 'cardiac-conduction.svg',
      title: 'Cardiac Conduction System',
      description: 'SA node, AV node, bundle branches, and Purkinje fibers',
    },
    {
      id: 'hrv-components',
      type: 'diagram',
      filename: 'hrv-components.svg',
      title: 'Heart Rate Variability Components',
      description: 'Time and frequency domain HRV parameters',
    },
  ],

  citations: [
    {
      id: 'aha-arrhythmia-guidelines',
      type: 'article',
      title: '2019 AHA/ACC/HRS Focused Update of the 2014 AHA/ACC/HRS Guideline for the Management of Patients With Atrial Fibrillation',
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000665',
    },
    {
      id: 'task-force-hrv',
      type: 'article',
      title: 'Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use',
      authors: ['Task Force of ESC and NASPE'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/01.CIR.93.5.1043',
    },
  ],

  crossReferences: [
    { targetId: 'vitals-blood-pressure', targetType: 'topic', relationship: 'sibling', label: 'Blood Pressure' },
    { targetId: 'cardiovascular-arrhythmias', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrhythmias' },
    { targetId: 'nervous-autonomic', targetType: 'system', relationship: 'related', label: 'Autonomic Nervous System' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['vital-signs', 'clinical-skills', 'electrophysiology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartRate;
