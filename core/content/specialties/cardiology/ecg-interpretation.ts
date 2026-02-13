/**
 * ECG Interpretation - Comprehensive Educational Content
 *
 * Covers ECG fundamentals, systematic interpretation, arrhythmia recognition,
 * and clinical applications in cardiovascular diagnosis.
 */

import { EducationalContent } from '../../types';

export const ecgInterpretation: EducationalContent = {
  id: 'topic-ecg-interpretation',
  type: 'topic',
  name: 'ECG Interpretation',
  alternateNames: ['EKG', 'Electrocardiogram', 'Electrocardiography', '12-Lead ECG'],

  levels: {
    1: {
      level: 1,
      summary: 'An ECG (electrocardiogram) is a simple test that records the electrical activity of your heart, showing doctors how fast your heart is beating and whether its rhythm is steady.',
      explanation: `Your heart beats because of tiny electrical signals that travel through it. An ECG machine captures these signals and draws them as wavy lines on paper or a screen.

**How an ECG Works:**

1. Small sticky patches (electrodes) are placed on your chest, arms, and legs
2. These patches detect the electrical signals from your heart
3. A machine records these signals as a tracing
4. The tracing shows each heartbeat as a pattern of waves

**What the Waves Mean:**

The ECG shows a repeating pattern for each heartbeat:

- **P wave** - The small bump at the start, showing the upper chambers (atria) squeezing
- **QRS complex** - The big spike in the middle, showing the lower chambers (ventricles) squeezing
- **T wave** - The smaller bump at the end, showing the heart resetting for the next beat

**What Doctors Look For:**

1. **Heart Rate** - Is it too fast, too slow, or just right?
2. **Rhythm** - Is the heart beating regularly or irregularly?
3. **Heart Attacks** - Are there signs of damage to the heart muscle?
4. **Other Problems** - Is the heart enlarged? Are there conduction problems?

**When You Might Need an ECG:**

- Chest pain or pressure
- Shortness of breath
- Dizziness or fainting
- Racing or pounding heart
- Before surgery
- Routine check-up

**Good News:**
An ECG is completely painless and takes only a few minutes. It does not shock you or hurt at all!`,
      keyTerms: [
        { term: 'ECG/EKG', definition: 'A test that records the electrical activity of your heart' },
        { term: 'electrode', definition: 'A sticky patch placed on your skin to detect heart signals' },
        { term: 'P wave', definition: 'The part of the ECG showing the upper chambers contracting' },
        { term: 'QRS complex', definition: 'The part of the ECG showing the lower chambers contracting' },
      ],
      analogies: [
        'An ECG is like a seismograph for your heart - it records the electrical earthquakes that make your heart beat.',
        'The ECG tracing is like sheet music for your heart, showing the rhythm and pattern of each beat.',
        'Think of electrodes as microphones listening to the electrical symphony of your heart.',
      ],
      examples: [
        'If someone comes to the ER with chest pain, an ECG is one of the first tests done to check for a heart attack.',
        'A person with palpitations might wear a portable ECG monitor to catch the irregular heartbeats.',
      ],
    },
    2: {
      level: 2,
      summary: 'The 12-lead ECG provides a comprehensive view of cardiac electrical activity from multiple angles, enabling systematic analysis of rate, rhythm, axis, intervals, and morphology.',
      explanation: `## ECG Basics

### The 12 Leads

An ECG has 12 different views of the heart:

**Limb Leads (Frontal Plane):**
- Lead I: Right arm to left arm
- Lead II: Right arm to left leg
- Lead III: Left arm to left leg
- aVR, aVL, aVF: Augmented limb leads

**Precordial Leads (Horizontal Plane):**
- V1: Right of sternum, 4th intercostal space
- V2: Left of sternum, 4th intercostal space
- V3: Between V2 and V4
- V4: Midclavicular line, 5th intercostal space
- V5: Anterior axillary line
- V6: Midaxillary line

### The ECG Tracing

**Paper Speed and Calibration:**
- Standard: 25 mm/sec
- Small box = 0.04 sec (40 ms)
- Large box = 0.20 sec (200 ms)
- Voltage: 10 mm = 1 mV

### Waves and Intervals

| Component | Duration | What It Represents |
|-----------|----------|-------------------|
| P wave | <120 ms | Atrial depolarization |
| PR interval | 120-200 ms | AV node conduction time |
| QRS complex | <120 ms | Ventricular depolarization |
| QT interval | <440 ms (varies with HR) | Total ventricular activity |
| T wave | Variable | Ventricular repolarization |

## Systematic Interpretation

Use a consistent approach every time:

**1. Rate**
- 300 / (number of large boxes between R waves)
- Or count R waves in 6 seconds x 10

**2. Rhythm**
- Is it regular?
- Are there P waves before each QRS?
- Is the PR interval constant?

**3. Axis**
- Normal: -30 to +90 degrees
- Left axis deviation: More negative than -30
- Right axis deviation: More positive than +90

**Quick Axis Check:**
- Look at leads I and aVF
- Both positive = normal axis
- I positive, aVF negative = left axis
- I negative, aVF positive = right axis

**4. Intervals**
- PR: >200 ms = first-degree AV block
- QRS: >120 ms = bundle branch block
- QT: Prolonged increases arrhythmia risk

**5. Morphology**
- P wave shape (atrial abnormalities)
- QRS shape (bundle branch blocks)
- ST segments (ischemia/infarction)
- T waves (repolarization abnormalities)

## Common Findings

### Sinus Rhythm Criteria
- Rate 60-100 bpm
- Regular rhythm
- P wave before every QRS
- Upright P in II, inverted in aVR
- PR interval 120-200 ms

### Bundle Branch Blocks

**Left Bundle Branch Block (LBBB):**
- QRS >120 ms
- Broad, notched R in I, aVL, V5-V6
- Absent Q waves in lateral leads
- ST/T discordant to QRS

**Right Bundle Branch Block (RBBB):**
- QRS >120 ms
- RSR' pattern in V1 (rabbit ears)
- Wide S wave in I, V6

### ST Segment Changes

**ST Elevation:**
- Acute MI (STEMI)
- Pericarditis
- Early repolarization
- Left ventricular aneurysm

**ST Depression:**
- Ischemia
- Digoxin effect
- Strain pattern (LVH)
- Reciprocal changes in STEMI`,
      keyTerms: [
        { term: '12-lead ECG', definition: 'Standard ECG with 12 different views of the heart' },
        { term: 'PR interval', definition: 'Time from atrial activation to ventricular activation; measures AV conduction' },
        { term: 'axis', definition: 'The general direction of electrical activity in the heart; normally points down and left' },
        { term: 'bundle branch block', definition: 'Delay in conduction through one of the ventricular bundle branches; widens QRS' },
        { term: 'ST elevation', definition: 'Raised segment between QRS and T wave; may indicate acute heart attack' },
        { term: 'sinus rhythm', definition: 'Normal heart rhythm originating from the SA node' },
      ],
      analogies: [
        'The 12 leads are like 12 cameras pointing at the heart from different angles.',
        'The axis is like a compass needle showing which direction the heart\'s electricity is flowing.',
        'Bundle branch block is like a detour on the highway - electrical signals take a longer route.',
      ],
    },
    3: {
      level: 3,
      summary: 'ECG interpretation integrates understanding of cardiac electrophysiology with pattern recognition for arrhythmia diagnosis, ischemia detection, and identification of conduction abnormalities.',
      explanation: `## Cardiac Electrophysiology Basis

### Normal Conduction Pathway

1. **SA Node** (Pacemaker): 60-100 bpm intrinsic rate
2. **Atrial Conduction**: Internodal pathways, Bachmann's bundle
3. **AV Node**: Slows conduction (PR interval)
4. **Bundle of His**: Penetrates fibrous skeleton
5. **Bundle Branches**: Left (anterior + posterior fascicles), Right
6. **Purkinje Fibers**: Rapid ventricular activation

### ECG Lead Orientation

**Frontal Plane (Hexaxial Reference):**
| Lead | Angle |
|------|-------|
| I | 0 |
| II | +60 |
| III | +120 |
| aVR | -150 |
| aVL | -30 |
| aVF | +90 |

**Precordial Leads and Territories:**
- V1-V2: Septum, RV
- V3-V4: Anterior LV
- V5-V6: Lateral LV

## Arrhythmia Recognition

### Supraventricular Arrhythmias

**Atrial Fibrillation:**
- Irregularly irregular rhythm
- No discrete P waves (fibrillatory baseline)
- Variable R-R intervals

**Atrial Flutter:**
- Sawtooth flutter waves (usually 300/min)
- Regular or regularly irregular (if variable block)
- Common: 2:1 block = ventricular rate 150

**SVT (AVNRT):**
- Narrow complex, regular
- Rate 150-250
- P waves often buried in QRS
- Short RP tachycardia

**AVRT (WPW):**
- Orthodromic: Narrow complex, retrograde P after QRS
- Antidromic: Wide complex, delta wave

### Ventricular Arrhythmias

**Premature Ventricular Contractions (PVCs):**
- Wide, bizarre QRS
- Compensatory pause (usually)
- No preceding P wave

**Ventricular Tachycardia:**
- Wide complex (>120 ms), regular
- Rate >100 bpm
- AV dissociation (P waves march through)
- Fusion and capture beats

**Ventricular Fibrillation:**
- Chaotic, irregular waveform
- No discrete QRS complexes
- Medical emergency

### Distinguishing SVT with Aberrancy from VT

| Feature | Favors VT | Favors SVT with Aberrancy |
|---------|-----------|---------------------------|
| AV dissociation | Yes | No |
| Fusion beats | Yes | No |
| QRS >160 ms | Yes | No |
| Northwest axis | Yes | No |
| Concordance | Yes | No |
| Prior similar | No | Yes |

**Brugada Algorithm:**
1. Absence of RS complex in all precordial leads? → VT
2. RS interval >100 ms in any lead? → VT
3. AV dissociation? → VT
4. Morphology criteria for VT? → VT
5. If none → SVT with aberrancy

## Ischemia and Infarction

### ST Elevation MI (STEMI)

**Criteria:**
- New ST elevation at J point
- ≥1 mm in 2 contiguous leads (limb leads)
- ≥2 mm in V2-V3 (men) or ≥1.5 mm (women)
- New LBBB with ischemic symptoms

**Localization:**
| Territory | Leads | Artery |
|-----------|-------|--------|
| Anterior | V1-V4 | LAD |
| Lateral | I, aVL, V5-V6 | LCx or diagonal |
| Inferior | II, III, aVF | RCA (or LCx) |
| Posterior | V7-V9 (or ST depression V1-V3) | RCA or LCx |
| Right ventricular | V4R | Proximal RCA |

**Reciprocal Changes:**
- ST depression in leads opposite to infarct territory
- Supports STEMI diagnosis

### NSTEMI/Unstable Angina

- ST depression ≥0.5 mm
- T wave inversions
- Dynamic changes
- No ST elevation

### STEMI Mimics

- Pericarditis: Diffuse ST elevation, PR depression
- Early repolarization: Concave ST elevation, fish-hook
- LVH with strain: ST depression, inverted T
- LBBB: Appropriate discordance
- Brugada syndrome: Coved ST elevation V1-V2

## Conduction Abnormalities

### AV Blocks

**First Degree:**
- PR >200 ms
- Every P followed by QRS

**Second Degree, Mobitz I (Wenckebach):**
- Progressive PR prolongation until dropped QRS
- Shortening R-R intervals before dropped beat
- Usually benign, AV nodal level

**Second Degree, Mobitz II:**
- Fixed PR with intermittently dropped QRS
- No progressive lengthening
- Infranodal level, may progress to complete block

**Third Degree (Complete):**
- Complete AV dissociation
- Atrial and ventricular rates independent
- Escape rhythm determines QRS width

### Fascicular Blocks

**Left Anterior Fascicular Block (LAFB):**
- Left axis deviation (-45 to -90)
- qR in I, aVL
- rS in II, III, aVF
- QRS slightly prolonged (<120 ms)

**Left Posterior Fascicular Block (LPFB):**
- Right axis deviation (>+90)
- rS in I, aVL
- qR in II, III, aVF
- Must exclude RVH, PE

**Bifascicular Block:**
- RBBB + LAFB (most common)
- RBBB + LPFB`,
      keyTerms: [
        { term: 'SA node', definition: 'Sinoatrial node; the heart\'s natural pacemaker located in right atrium' },
        { term: 'AV dissociation', definition: 'Atria and ventricles beating independently; suggests VT or complete heart block' },
        { term: 'Brugada algorithm', definition: 'Stepwise approach to differentiate VT from SVT with aberrancy' },
        { term: 'reciprocal changes', definition: 'ST depression in leads opposite to ST elevation; supports STEMI diagnosis' },
        { term: 'Wenckebach', definition: 'Second-degree AV block with progressive PR prolongation before dropped beat' },
        { term: 'fascicular block', definition: 'Block of left anterior or posterior fascicle causing axis deviation' },
      ],
      clinicalNotes: 'In wide complex tachycardia, treat as VT if unsure - adenosine for SVT, electrical cardioversion for unstable VT. New LBBB with chest pain should be treated as STEMI equivalent. Right-sided leads (V4R) should be obtained in inferior STEMI to evaluate for RV involvement.',
    },
    4: {
      level: 4,
      summary: 'Advanced ECG interpretation requires integration of electrophysiological principles, recognition of subtle patterns, risk stratification for arrhythmias, and appreciation of clinical context including preexcitation syndromes and inherited channelopathies.',
      explanation: `## Advanced Arrhythmia Analysis

### Preexcitation Syndromes

**Wolff-Parkinson-White (WPW) Pattern:**
- Short PR interval (<120 ms)
- Delta wave (slurred QRS upstroke)
- Wide QRS (pseudo-bundle branch block)
- Secondary repolarization abnormalities

**Accessory Pathway Localization:**

| Location | Delta Wave Pattern |
|----------|-------------------|
| Left lateral | Positive in V1, negative in I |
| Left posteroseptal | Positive V1, isoelectric I |
| Right posteroseptal | Negative V1, positive I |
| Right lateral | Negative V1, positive I |

**WPW with Atrial Fibrillation:**
- Irregular wide complex tachycardia
- Very rapid rates (can exceed 300)
- Variable QRS morphology
- Life-threatening if treated with AV nodal blockers

### Inherited Channelopathies

**Long QT Syndrome (LQTS):**
- QTc prolongation (>470 ms men, >480 ms women)
- T wave abnormalities (notched, biphasic)

| Type | Gene | Channel | T Wave | Triggers |
|------|------|---------|--------|----------|
| LQT1 | KCNQ1 | IKs | Broad-based | Exercise (swimming) |
| LQT2 | KCNH2 | IKr | Low amplitude, notched | Auditory, postpartum |
| LQT3 | SCN5A | INa | Late onset, peaked | Rest, sleep |

**Brugada Syndrome:**
- Coved ST elevation in V1-V3 (Type 1 pattern)
- Risk of VF, especially during fever, rest
- May be concealed; provocable with sodium channel blockers

**Type 1 (Diagnostic):**
- Coved ST elevation ≥2 mm
- Followed by negative T wave

**Catecholaminergic Polymorphic VT (CPVT):**
- Normal baseline ECG
- Exercise-induced bidirectional VT
- Characteristic beat-to-beat QRS axis alternation

**Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC):**
- Epsilon wave (small deflection after QRS in V1-V3)
- T wave inversions V1-V3
- Prolonged S wave upstroke in V1-V3
- RVOT morphology VT

### Advanced Ischemia Patterns

**de Winter T Waves:**
- Upsloping ST depression at J point (1-3 mm)
- Tall, symmetric T waves in precordial leads
- Equivalent to anterior STEMI (LAD occlusion)

**Wellens Syndrome:**
- Biphasic or deeply inverted T waves in V2-V3
- During pain-free interval
- Indicates critical proximal LAD stenosis
- Do not stress test - high risk of anterior MI

**Posterior MI:**
- Tall R waves in V1-V2
- ST depression V1-V3
- Upright T waves in V1-V3
- Confirm with V7-V9 (ST elevation)

**Sgarbossa Criteria (STEMI in LBBB):**
- Concordant ST elevation ≥1 mm (5 points)
- ST depression ≥1 mm in V1-V3 (3 points)
- Discordant ST elevation ≥5 mm (2 points)
- Score ≥3 suggests MI

**Modified Sgarbossa:**
- Discordant ST elevation/S wave ratio >0.25
- Improves sensitivity for MI in LBBB

### Electrolyte Abnormalities

**Hyperkalemia:**
| K+ Level | ECG Changes |
|----------|-------------|
| 5.5-6.5 | Tall, peaked T waves |
| 6.5-7.5 | PR prolongation, P wave flattening |
| 7.5-8.0 | QRS widening |
| >8.0 | Sine wave, VF, asystole |

**Hypokalemia:**
- Flattened T waves
- Prominent U waves
- ST depression
- Prolonged QT
- Risk of TdP

**Hypercalcemia:**
- Short QT interval
- Short ST segment (absent)

**Hypocalcemia:**
- Prolonged QT (due to long ST)
- Normal T wave

### Drug Effects

**Digoxin:**
- Scooped ST depression (Salvador Dali mustache)
- Short QT
- T wave flattening or inversion
- May cause any arrhythmia

**Antiarrhythmics:**

| Drug Class | ECG Effect |
|------------|------------|
| Class IA (procainamide) | QRS and QT prolongation |
| Class IC (flecainide) | QRS prolongation |
| Class III (amiodarone) | QT prolongation, bradycardia |
| Sotalol | QT prolongation, bradycardia |

**Tricyclic Antidepressants:**
- QRS prolongation (>100 ms concerning)
- Right axis deviation
- R wave in aVR (>3 mm predicts seizures)
- Anticholinergic tachycardia

## ECG in Device Patients

### Pacemaker ECG

**Pacing Spikes:**
- Vertical lines preceding paced complex
- May be small/invisible with bipolar pacing

**Ventricular Pacing:**
- LBBB-like morphology (if RV apex paced)
- Spike before wide QRS

**Dual-Chamber Pacing:**
- Atrial spike before P wave
- Ventricular spike before QRS
- AV sequential pacing

**Failure Patterns:**
- Failure to capture: Spike without depolarization
- Failure to sense: Inappropriate pacing
- Failure to pace: No output when expected

### ICD Assessment

- Underlying rhythm assessment
- T wave oversensing (inappropriate shocks)
- Lead malfunction patterns`,
      keyTerms: [
        { term: 'delta wave', definition: 'Slurred upstroke of QRS indicating ventricular preexcitation via accessory pathway' },
        { term: 'de Winter T waves', definition: 'Pattern of upsloping ST depression with tall T waves equivalent to anterior STEMI' },
        { term: 'Wellens syndrome', definition: 'Biphasic/inverted T waves indicating critical LAD stenosis; high risk if stressed' },
        { term: 'Sgarbossa criteria', definition: 'Rules for identifying STEMI in the presence of LBBB' },
        { term: 'epsilon wave', definition: 'Small deflection after QRS in V1-V3; marker of ARVC' },
        { term: 'bidirectional VT', definition: 'VT with alternating QRS axis; seen in digoxin toxicity and CPVT' },
      ],
      clinicalNotes: 'Never give AV nodal blockers in WPW with AFib - can cause VF. Wellens syndrome requires urgent angiography, not stress testing. The sine wave pattern of severe hyperkalemia is immediately life-threatening - treat empirically if suspected. Modified Sgarbossa improves STEMI detection in LBBB.',
    },
    5: {
      level: 5,
      summary: 'Expert ECG interpretation integrates deep electrophysiological understanding, recognition of rare patterns, risk stratification algorithms, and emerging technologies including AI-assisted interpretation and advanced monitoring.',
      explanation: `## Advanced Electrophysiological Concepts

### Cellular Basis of ECG

**Action Potential Phases:**
| Phase | Ion Current | ECG Correlation |
|-------|-------------|-----------------|
| 0 | Na+ inward | QRS upstroke |
| 1 | Ito (transient outward) | J point |
| 2 | Ca2+ inward, K+ outward | ST segment |
| 3 | K+ outward (IKr, IKs) | T wave |
| 4 | Na/K ATPase, If | Baseline |

**Transmural Heterogeneity:**
- Epicardial vs M cells vs endocardial APD differences
- Basis for T wave formation
- Relevant to drug-induced arrhythmias

### J Wave Syndromes

**Early Repolarization:**
- J point elevation ≥0.1 mV
- Most common in young, athletic males
- Inferior/lateral leads higher risk

**Benign vs Malignant Features:**
| Benign | Malignant |
|--------|-----------|
| V4-V6 predominant | Inferior leads |
| Notched J point | Slurred J point |
| Ascending ST | Horizontal ST |
| No symptoms | Syncope, VF |

**J Wave and Arrhythmia Risk:**
- Accentuated by bradycardia, vagal tone
- Ischemia may unmask
- ICD consideration in survivors

### Complex Arrhythmia Analysis

**Atrial Tachycardia with Block:**
- Regular atrial rate
- Variable ventricular response
- Consider digoxin toxicity, MAT

**Dual Tachycardia:**
- Atrial and ventricular arrhythmia coexisting
- AFib with VT
- Recognition critical for management

**Short-Long-Short Initiation:**
- Pattern preceding TdP
- PVC creates long pause
- Short coupling next PVC triggers TdP

### Advanced Axis and Lead Analysis

**No Man's Land Axis:**
- Extreme axis deviation (-90 to -180 or +180)
- Consider: Lead reversal, ventricular rhythm, hyperkalemia

**Right-Sided and Posterior Leads:**
- V4R, V5R, V6R for RV assessment
- V7, V8, V9 for posterior wall
- Essential in inferior STEMI

**Lewis Lead:**
- Modified lead for P wave clarity
- RA electrode at right 2nd ICS
- LA electrode at right 4th ICS
- Enhance atrial activity detection

### Risk Stratification Algorithms

**Sudden Cardiac Death Risk:**

**Brugada Syndrome:**
- Type 1 pattern + symptoms/family history
- EPS role controversial
- ICD for aborted SCD, spontaneous Type 1 with syncope

**Long QT Syndrome:**
- QTc value
- Syncope history
- Genotype (LQT3 higher risk per event)
- Age and sex specific

**HCM:**
- ESC Risk Calculator
- Wall thickness, LA size, NSVT, family history
- LGE on MRI adds information

## Emerging Technologies

### AI and Machine Learning

**Applications:**
- Automated rhythm detection
- STEMI identification
- Atrial fibrillation screening
- EF prediction from 12-lead ECG
- Phenotyping and risk stratification

**Current Products:**
- Apple Watch AFib detection
- AliveCor Kardia (AI-enhanced)
- EPIC AI for EF prediction
- Various STEMI detection algorithms

**Limitations:**
- False positives in low-risk populations
- Training data bias
- Need for clinical validation

### Wearable and Remote Monitoring

**Single-Lead Devices:**
- Consumer smartwatches
- Patch monitors (Zio, iRhythm)
- Event recorders

**Multi-Lead Ambulatory:**
- Holter monitoring
- Extended wear Holter
- Implantable loop recorders

**Clinical Use:**
- Cryptogenic stroke AFib screening
- Syncope evaluation
- Palpitation documentation
- Post-ablation monitoring

### Advanced Signal Processing

**Signal-Averaged ECG (SAECG):**
- Late potentials detection
- Post-MI VT risk
- ARVC diagnosis support

**Heart Rate Variability (HRV):**
- Autonomic tone assessment
- Post-MI risk stratification
- Time and frequency domain analysis

**QT Dispersion:**
- Difference between max and min QT
- Repolarization heterogeneity
- Research tool primarily

### Body Surface Potential Mapping

**Principle:**
- Multiple electrodes (50-200+)
- 3D reconstruction of cardiac potentials
- Rotor and driver identification

**Applications:**
- AFib mechanism characterization
- Ablation planning
- Research in arrhythmia mechanisms

## ECG in Special Circumstances

### Athletes

**Normal Variants:**
- Sinus bradycardia
- First-degree AV block
- Early repolarization
- Incomplete RBBB
- LVH voltage criteria

**Abnormal (Require Workup):**
- T wave inversions (beyond V2)
- ST depression
- Pathologic Q waves
- Complete LBBB/RBBB
- Epsilon waves
- QTc prolongation

### Hypothermia

**Osborn (J) Waves:**
- Positive deflection at QRS-ST junction
- Height correlates with degree of hypothermia
- Most prominent in precordial leads

**Other Findings:**
- Bradycardia
- Atrial fibrillation
- Prolonged intervals
- Risk of VF during rewarming

### Pregnancy

**Normal Changes:**
- Increased HR
- Axis may shift left
- Small Q in III
- Flattened T waves
- Premature beats common

### Pulmonary Embolism

**Classic Findings (infrequent):**
- S1Q3T3 pattern
- Right axis deviation
- Right heart strain (T inversions V1-V4)
- RBBB (new)
- Sinus tachycardia (most common)

## Quality and Education

### ECG Quality Assurance

**Technical Issues:**
- Lead misplacement (most common: limb reversal)
- Poor electrode contact
- Patient movement
- Electrical interference

**Recognition:**
- Implausible axis
- Unexpected pattern for clinical scenario
- Inconsistency between leads

### Teaching ECG

**Effective Methods:**
- Pattern recognition emphasis
- Clinical correlation
- Case-based learning
- Spaced repetition
- Self-testing with feedback

**Competency Domains:**
- Basic rhythm recognition
- STEMI identification
- Bradyarrhythmias and heart block
- Tachyarrhythmias
- Drug and electrolyte effects
- Device ECGs`,
      keyTerms: [
        { term: 'J wave syndromes', definition: 'Disorders with prominent J point abnormalities including early repolarization and Brugada' },
        { term: 'transmural heterogeneity', definition: 'Differences in action potential duration across heart wall contributing to T wave' },
        { term: 'Lewis lead', definition: 'Modified lead placement to enhance P wave visibility for arrhythmia analysis' },
        { term: 'signal-averaged ECG', definition: 'Technique to detect late potentials indicating VT substrate' },
        { term: 'Osborn wave', definition: 'J wave seen in hypothermia; correlates with body temperature' },
        { term: 'body surface mapping', definition: 'Multi-electrode technique creating 3D cardiac electrical maps' },
      ],
      clinicalNotes: `Key clinical pearls for ECG interpretation:

1. **Systematic Approach**: Always use the same sequence - rate, rhythm, axis, intervals, morphology
2. **STEMI Mimics**: Know pericarditis, early repolarization, LVH, LBBB patterns that mimic STEMI
3. **Wide Complex Tachycardia**: When in doubt, treat as VT; never give verapamil to WCT
4. **WPW + AFib**: Life-threatening; AV nodal blockers contraindicated
5. **Wellens/de Winter**: These patterns indicate imminent LAD infarction - do not stress test
6. **Hyperkalemia**: Recognize early (peaked T) and late (sine wave) - can be rapidly fatal
7. **Modified Sgarbossa**: Better than original for STEMI in LBBB; ratio ≥0.25 suggests MI
8. **Lead Reversal**: Consider when findings do not match clinical picture; limb reversal common
9. **Channelopathies**: QT prolongation, Brugada pattern, epsilon waves may indicate inherited risk
10. **AI Tools**: Emerging but require clinical correlation; useful for screening, not definitive diagnosis`,
    },
  },

  media: [
    {
      id: 'ecg-basics',
      type: 'diagram',
      filename: 'ecg-waves-intervals.svg',
      title: 'ECG Waves and Intervals',
      description: 'P wave, QRS complex, T wave with normal values',
    },
    {
      id: '12-lead-placement',
      type: 'diagram',
      filename: 'ecg-lead-placement.svg',
      title: '12-Lead ECG Electrode Placement',
      description: 'Proper positioning of limb and precordial leads',
    },
    {
      id: 'stemi-patterns',
      type: 'diagram',
      filename: 'stemi-localization.svg',
      title: 'STEMI Localization',
      description: 'Lead territories and coronary artery correlation',
    },
  ],

  citations: [
    {
      id: 'aha-ecg-2009',
      type: 'article',
      title: 'AHA/ACCF/HRS Recommendations for the Standardization and Interpretation of the ECG',
      authors: ['Rautaharju PM', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'goldberger-ecg',
      type: 'textbook',
      title: 'Goldberger\'s Clinical Electrocardiography',
      source: 'Elsevier',
    },
    {
      id: 'braunwald-ecg',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Electrocardiography',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Arrhythmias' },
    { targetId: 'topic-cardiac-electrophysiology', targetType: 'topic', relationship: 'related', label: 'Electrophysiology' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['diagnostics', 'electrophysiology', 'emergency medicine'],
    keywords: ['ECG', 'EKG', 'STEMI', 'arrhythmia', 'heart block', 'bundle branch block'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ecgInterpretation;
