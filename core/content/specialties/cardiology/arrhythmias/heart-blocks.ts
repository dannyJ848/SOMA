/**
 * Heart Blocks (AV Conduction Disorders) - Comprehensive Educational Content
 *
 * Covers first, second, and third-degree AV blocks, bundle branch blocks,
 * and fascicular blocks with ECG recognition and management.
 */

import { EducationalContent } from '../../../types';

export const heartBlocks: EducationalContent = {
  id: 'condition-heart-blocks',
  type: 'condition',
  name: 'Heart Blocks',
  alternateNames: ['AV Block', 'Atrioventricular Block', 'Conduction Disorders', 'Bundle Branch Block'],
  hpoId: 'HP:0001678',

  levels: {
    1: {
      level: 1,
      summary: 'Heart blocks happen when electrical signals traveling through your heart are slowed down or stopped, causing your heart to beat too slowly.',
      explanation: `Your heart has its own electrical system that tells it when to beat. Think of it like a relay race where the electrical signal is the baton being passed from runner to runner.

**Normal Heart Electrical System:**
1. The signal starts at the top of your heart (SA node - the natural pacemaker)
2. It travels down to a junction box (AV node)
3. Then it goes down wires (bundle branches) to make the bottom chambers beat

**What is a Heart Block?**
A heart block is like a traffic jam in this electrical system. The signal gets delayed or completely stopped at some point.

**Types of Heart Blocks:**

**First-Degree:** The signal is just a little slow, like driving through a school zone. Usually not a big problem.

**Second-Degree:** Some signals get through, but some get blocked. Like a traffic light that only lets some cars through.

**Third-Degree (Complete):** No signals get through at all! The top and bottom of the heart beat on their own separate schedules. This is serious!

**Symptoms:**
- Feeling tired or weak
- Dizziness or lightheadedness
- Fainting
- Chest discomfort
- Shortness of breath
- Some people have no symptoms at all!

**What Causes Heart Blocks:**
- Getting older (wear and tear)
- Heart disease
- Heart attack damage
- Certain medications
- Sometimes people are born with it

**Treatment:**
- Mild blocks may just be watched
- Serious blocks often need a pacemaker (a small device that helps the heart beat regularly)`,
      keyTerms: [
        { term: 'heart block', definition: 'When electrical signals in the heart are delayed or blocked' },
        { term: 'pacemaker', definition: 'A small device implanted to help the heart beat at a regular rate' },
        { term: 'AV node', definition: 'The junction box where electrical signals pass from the top to bottom of the heart' },
        { term: 'fainting', definition: 'Passing out, often from not enough blood getting to the brain' },
      ],
      analogies: [
        'The heart\'s electrical system is like a highway with traffic lights. Heart block is like a broken traffic light causing delays or complete stops.',
        'First-degree block is like mail that arrives a day late. Second-degree is like some mail going missing. Third-degree is like the post office completely shutting down.',
        'The AV node is like a security checkpoint - in heart block, the checkpoint becomes too strict and blocks too many signals.',
      ],
      examples: [
        'An elderly person might develop heart block from years of wear and tear on their heart\'s electrical system.',
        'Someone with complete heart block might suddenly faint because their heart isn\'t pumping enough blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart blocks are classified by the degree of AV conduction impairment: first-degree (PR prolongation), second-degree (intermittent block - Mobitz I and II), and third-degree (complete AV dissociation), with bundle branch blocks affecting intraventricular conduction.',
      explanation: `## The Conduction System

**Normal Pathway:**
1. SA node (60-100 bpm) - initiates impulse
2. Atrial conduction (internodal pathways)
3. AV node - controlled delay (0.12-0.20 seconds)
4. Bundle of His
5. Left and right bundle branches
6. Purkinje fibers - ventricular activation

## AV Blocks

### First-Degree AV Block
- PR interval >200 ms (>0.20 seconds)
- Every P wave conducts, just slowly
- Usually benign, often asymptomatic
- No treatment required unless symptomatic

**ECG:** PR interval >200 ms, each P wave followed by QRS

### Second-Degree AV Block

**Type I (Mobitz I / Wenckebach):**
- Progressive PR prolongation until a beat is dropped
- Usually at AV node level
- Generally benign
- Often reversible (vagal tone, drugs)

**ECG pattern:**
- PR intervals: 200 ms → 240 ms → 280 ms → P wave blocked → cycle repeats
- Grouped beating pattern
- R-R intervals getting shorter before the dropped beat

**Type II (Mobitz II):**
- Sudden dropped beat without PR prolongation
- Usually below AV node (His-Purkinje)
- More serious - can progress to complete block
- Often requires pacemaker

**ECG pattern:**
- Constant PR interval
- Suddenly a P wave doesn't conduct (no QRS)
- May have underlying bundle branch block

### Third-Degree (Complete) AV Block
- No conduction from atria to ventricles
- Atria and ventricles beat independently (AV dissociation)
- Escape rhythm determines heart rate:
  - Junctional escape: 40-60 bpm (narrow QRS)
  - Ventricular escape: 20-40 bpm (wide QRS)
- Medical emergency - often needs pacemaker

**ECG:**
- P waves at one rate (atrial rate)
- QRS at different, slower rate (ventricular rate)
- No relationship between P waves and QRS complexes

## Bundle Branch Blocks

### Right Bundle Branch Block (RBBB)
- QRS ≥120 ms
- RSR' pattern in V1 ("M" shape)
- Wide S wave in I, V5, V6
- Can be normal variant or indicate disease

### Left Bundle Branch Block (LBBB)
- QRS ≥120 ms
- Broad, notched R in I, aVL, V5, V6
- Deep S in V1, V2
- Almost always pathological
- Indicates underlying heart disease

**LBBB Causes:**
- Coronary artery disease
- Hypertension
- Cardiomyopathy
- Aortic valve disease

## Common Causes of Heart Blocks

| Cause | Types Affected |
|-------|----------------|
| Aging (fibrosis) | All types |
| Ischemic heart disease | All types |
| Medications (beta-blockers, CCBs, digoxin) | 1st, 2nd degree |
| Increased vagal tone | 1st, Mobitz I |
| Lyme disease | All types |
| Post-cardiac surgery | All types |
| Infiltrative disease (amyloid, sarcoid) | All types |

## When to Worry

**Emergent:**
- Complete heart block with symptoms
- Mobitz II with symptoms
- Wide complex escape rhythm (unstable)

**Non-emergent:**
- First-degree block (usually)
- Mobitz I (usually)
- Isolated RBBB in healthy person`,
      keyTerms: [
        { term: 'PR interval', definition: 'Time from atrial depolarization to ventricular depolarization; normally 120-200 ms' },
        { term: 'Mobitz Type I', definition: 'Second-degree block with progressive PR prolongation before dropped beat (Wenckebach)' },
        { term: 'Mobitz Type II', definition: 'Second-degree block with sudden dropped beat without PR prolongation' },
        { term: 'AV dissociation', definition: 'Atria and ventricles beating independently; hallmark of complete heart block' },
        { term: 'escape rhythm', definition: 'Backup pacemaker rhythm that takes over when normal conduction fails' },
        { term: 'bundle branch block', definition: 'Delayed conduction in right or left bundle branch causing wide QRS' },
      ],
      analogies: [
        'Mobitz I is like a tired runner in a relay - gets slower and slower until finally dropping the baton, then starts fresh.',
        'Mobitz II is like a random power outage - everything working fine, then suddenly cuts out without warning.',
        'Complete heart block is like two separate orchestras playing at different tempos in the same room.',
      ],
    },
    3: {
      level: 3,
      summary: 'AV conduction disorders reflect dysfunction at specific anatomical levels with distinct ECG patterns, clinical implications, and management strategies, while intraventricular conduction delays indicate bundle branch or fascicular disease with diagnostic and prognostic significance.',
      explanation: `## Anatomical Localization

### AV Node vs Infranodal Block

| Feature | AV Nodal | Infranodal |
|---------|----------|------------|
| PR prolongation | Yes | May be normal |
| QRS | Narrow | Often wide (BBB) |
| Response to atropine | Improves | No effect/worsens |
| Response to exercise | Improves | No effect/worsens |
| Escape rate | 40-60 bpm | 20-40 bpm |
| Risk of progression | Low | High |
| Etiology | Vagal, drugs, ischemia | Fibrosis, ischemia |

## First-Degree AV Block

**Pathophysiology:**
- Delay in AV nodal conduction (most common)
- May be in atrium, His bundle, or bundle branches
- PR interval = atrial conduction + AV nodal delay + His-Purkinje conduction

**Clinical Significance:**
- Usually benign in isolation
- If marked (>300 ms), may cause symptoms from loss of AV synchrony
- Association with atrial fibrillation, heart failure (DAVID trial)
- In acute MI: may indicate AV nodal ischemia

**Management:**
- No treatment if asymptomatic
- Review medications (beta-blockers, CCBs, digoxin)
- Monitor for progression

## Second-Degree AV Block

### Mobitz Type I (Wenckebach)

**Mechanism:**
- Progressive fatigue of AV nodal cells
- Each impulse encounters more refractory tissue
- Eventually complete refractoriness, dropped beat
- After pause, recovery allows cycle to restart

**ECG Features:**
- Progressive PR prolongation
- Decreasing R-R intervals (despite increasing PR)
- Dropped beat (P wave without QRS)
- PR after pause is shortest

**Clinical:**
- Usually benign, reversible
- Common in athletes (vagal tone)
- Can occur during sleep
- In inferior MI: may be transient

### Mobitz Type II

**Mechanism:**
- "All-or-none" conduction failure
- Below AV node (His-Purkinje)
- No gradual PR prolongation

**ECG Features:**
- Fixed PR interval
- Sudden non-conducted P wave
- Often underlying BBB (especially LBBB)
- May show 2:1 or higher ratio block

**Clinical:**
- Serious - indicates structural conduction disease
- High risk of progression to complete block
- Stokes-Adams attacks (syncope from asystole)
- Usually requires pacemaker

### 2:1 AV Block

**Diagnostic Challenge:**
- Can be Mobitz I or II
- Only one conducted beat before each dropped beat
- Can't assess PR progression

**Clues to Type:**
| Favors Mobitz I | Favors Mobitz II |
|-----------------|------------------|
| Narrow QRS | Wide QRS (BBB) |
| Improves with atropine | No change/worsens |
| Improves with exercise | No change/worsens |
| Inferior MI | Anterior MI |

### High-Grade AV Block

- Multiple consecutive non-conducted P waves (3:1, 4:1)
- Not quite complete block
- Treat as Mobitz II / complete block

## Third-Degree (Complete) AV Block

**Mechanisms:**
- Complete failure of AV conduction
- May be AV nodal, His bundle, or bilateral BBB

**ECG Features:**
- P waves and QRS complexes completely independent
- Atrial rate > ventricular rate
- No fixed PR interval (varies randomly)
- Escape rhythm depends on level:
  - AV nodal: 40-60 bpm, narrow QRS
  - His bundle: 30-40 bpm, may be narrow
  - Ventricular: 20-40 bpm, wide QRS

**Clinical Presentation:**
- May be asymptomatic if adequate escape rhythm
- Syncope (Stokes-Adams attacks)
- Heart failure
- Sudden death

**In Acute MI:**
| Location | Inferior MI | Anterior MI |
|----------|-------------|-------------|
| Level | AV nodal | Infranodal |
| QRS | Narrow | Wide |
| Rate | 40-60 bpm | <40 bpm |
| Prognosis | Better, often transient | Poor, often permanent |
| Pacing | May not need | Usually needed |

## Bundle Branch Blocks

### Right Bundle Branch Block (RBBB)

**Pathophysiology:**
- RV activated late (via septal depolarization)
- QRS prolongation from delayed RV activation

**ECG Criteria:**
- QRS ≥120 ms
- RSR' or qR in V1 (RV leads)
- Wide S wave in I, V5, V6 (LV leads)
- ST-T changes opposite to terminal QRS

**Clinical Significance:**
- May be normal variant in young, healthy individuals
- Associated with: ASD, PE, RVH, ischemia, cardiomyopathy
- New RBBB in anterior MI suggests LAD occlusion

### Left Bundle Branch Block (LBBB)

**Pathophysiology:**
- LV activated late (via RV and septum)
- Significant QRS widening
- Abnormal septal activation (Q waves lost)

**ECG Criteria:**
- QRS ≥120 ms
- Broad, notched R in I, aVL, V5, V6
- rS or QS in V1 (no R wave)
- ST-T changes opposite to QRS

**Clinical Significance:**
- Almost always pathological
- Associated with: CAD, HTN, cardiomyopathy, aortic valve disease
- New LBBB may indicate MI (Sgarbossa criteria)
- Affects interpretation of ECG for ischemia

**Sgarbossa Criteria for STEMI with LBBB:**
1. ST elevation ≥1 mm concordant with QRS (5 points)
2. ST depression ≥1 mm in V1-V3 (3 points)
3. ST elevation ≥5 mm discordant with QRS (2 points)
(≥3 points suggests MI)

### Fascicular Blocks

**Left Anterior Fascicular Block (LAFB):**
- Left axis deviation (-45 to -90 degrees)
- qR in I, aVL; rS in II, III, aVF
- QRS slightly prolonged (but <120 ms)
- Most common fascicular block

**Left Posterior Fascicular Block (LPFB):**
- Right axis deviation (>90 degrees)
- rS in I, aVL; qR in II, III, aVF
- Must exclude other causes of RAD (RVH, lateral MI)
- Less common (posterior fascicle has dual blood supply)

### Bifascicular and Trifascicular Block

**Bifascicular:**
- RBBB + LAFB or RBBB + LPFB
- Indicates diffuse conduction system disease
- Risk of progression to complete block (1-2%/year)

**Trifascicular (Imprecise term):**
- Bifascicular block + first-degree AV block
- PR prolongation may be anywhere (not necessarily His)
- Consider EPS if symptomatic`,
      keyTerms: [
        { term: 'Wenckebach phenomenon', definition: 'Progressive AV nodal conduction delay until dropped beat; hallmark of Mobitz I' },
        { term: 'Stokes-Adams attack', definition: 'Syncopal episode from transient asystole in high-grade heart block' },
        { term: 'Sgarbossa criteria', definition: 'ECG criteria for diagnosing STEMI in presence of LBBB or paced rhythm' },
        { term: 'fascicular block', definition: 'Conduction delay in left anterior or posterior fascicle, causing axis deviation' },
        { term: 'bifascicular block', definition: 'RBBB combined with LAFB or LPFB; indicates diffuse conduction disease' },
        { term: 'infranodal block', definition: 'AV block occurring below AV node (His bundle or below); more serious prognosis' },
      ],
      clinicalNotes: 'In 2:1 AV block, narrow QRS and response to atropine suggest Mobitz I (benign); wide QRS suggests Mobitz II (serious). New LBBB with chest pain should be treated as STEMI. Bifascicular block with syncope needs EP study.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of conduction disorders requires understanding of electrophysiologic mechanisms, indications for permanent pacing, device selection, and management of special situations including post-TAVR block and His bundle pacing.',
      explanation: `## Electrophysiology of Conduction Disorders

### Cellular Mechanisms

**AV Nodal Delay:**
- Decremental conduction (slower with faster rates)
- Calcium-dependent action potentials
- Sensitive to autonomic tone, adenosine, CCBs

**His-Purkinje Conduction:**
- Fast, sodium-dependent action potentials
- All-or-none conduction
- Sensitive to class I antiarrhythmics

**Mechanisms of Block:**
- Prolonged refractoriness
- Reduced action potential amplitude
- Source-sink mismatch
- Fibrosis and cell loss

### EP Study Findings

**HV Interval:**
- Normal: 35-55 ms
- Prolonged HV (>70 ms): Increased risk of complete block
- Very prolonged (>100 ms): High risk, consider pacing

**Inducibility:**
- Infra-Hisian block with atrial pacing
- Stress testing of conduction system

## Pacemaker Indications

### 2018 ACC/AHA/HRS Bradycardia Guidelines

**Class I (Recommended):**

*Third-degree AV block:*
- Symptomatic bradycardia
- Asymptomatic with awake HR <40 or pauses ≥3 seconds
- Post AV junction ablation
- Post cardiac surgery not expected to resolve

*Second-degree AV block:*
- Symptomatic Mobitz I
- Symptomatic Mobitz II
- Asymptomatic Mobitz II
- 2:1 or high-grade block with symptoms

*Sinus node dysfunction:*
- Symptomatic bradycardia
- Chronotropic incompetence with symptoms

**Class IIa (Reasonable):**

- Asymptomatic Mobitz II or third-degree with escape >40 bpm
- Bifascicular block with syncope (EP study inconclusive)
- Alternating BBB
- HV >100 ms or pacing-induced infra-His block

**Class III (Not Recommended):**

- Asymptomatic first-degree AV block
- Asymptomatic Mobitz I with narrow QRS
- Reversible causes (Lyme, drug effect)

## Pacemaker Selection

### Pacing Modes

| Mode | Description | Use |
|------|-------------|-----|
| VVI | Single lead RV pacing | Chronic AFib with bradycardia |
| AAI | Single lead atrial pacing | Pure SND with intact AV conduction |
| DDD | Dual chamber (A+V) | Most common; maintains AV synchrony |
| DDDR | DDD with rate response | Chronotropic incompetence |

### Physiologic Pacing

**Goals:**
- Maintain AV synchrony
- Minimize unnecessary RV pacing
- Preserve normal activation pattern

**RV Pacing Concerns:**
- Creates iatrogenic LBBB
- May worsen LV function
- MOST, DAVID trials: RV pacing associated with worse outcomes

**Minimize RV Pacing Strategies:**
- Managed Ventricular Pacing (MVP mode)
- Long AV delays
- AAI-DDD mode switching

## Conduction System Pacing

### His Bundle Pacing (HBP)

**Concept:**
- Pace the His bundle directly
- Maintains normal ventricular activation
- Physiologic QRS

**Advantages:**
- Prevents RV pacing-induced cardiomyopathy
- May improve outcomes in complete heart block
- Can "correct" bundle branch block

**Challenges:**
- Higher thresholds
- Lead stability
- May not capture in infranodal block
- Lower success in fibrotic conduction systems

### Left Bundle Branch Area Pacing (LBBAP)

**Concept:**
- Deep septal pacing targeting left bundle
- Capture left bundle or LV septum directly
- More reliable than HBP

**Advantages:**
- More stable parameters than HBP
- Lower thresholds
- Higher success rate
- Increasingly adopted

**Evidence:**
- Non-randomized studies show favorable outcomes
- May reduce HF and mortality vs RV pacing
- RCTs ongoing

## Special Situations

### Post-TAVR Heart Block

**Incidence:**
- New LBBB: 15-30%
- New pacemaker: 10-20%

**Predictors:**
- Pre-existing RBBB (highest risk)
- Valve oversizing
- Depth of implant
- Self-expanding > balloon-expandable

**Management:**
- Monitor in CCU 24-48 hours post-procedure
- EP study for risk stratification
- Ambulatory monitoring before discharge
- Many transient, but late block can occur

### Post-Cardiac Surgery

**Common After:**
- Aortic valve replacement
- Septal myectomy
- Complex congenital repairs

**Management:**
- Temporary pacing wires
- Wait 5-7 days for recovery
- Permanent pacemaker if persistent

### Infiltrative Cardiomyopathies

**Cardiac Amyloidosis:**
- Common cause of advanced AV block
- Consider even in elderly with "degenerative" block
- May need pacing before other diagnosis apparent

**Cardiac Sarcoidosis:**
- AV block may be presenting feature
- Consider in young patients with unexplained block
- Immunosuppression may improve conduction

### Lyme Carditis

**Presentation:**
- High-grade AV block
- Usually young, healthy patients
- May be presenting symptom
- Endemic area exposure

**Management:**
- IV antibiotics (ceftriaxone)
- Temporary pacing if needed
- Usually resolves with treatment
- Avoid permanent pacemaker if possible

## Lead Extraction and Complications

### Pacemaker Complications

| Complication | Timing | Management |
|--------------|--------|------------|
| Pneumothorax | Acute | Chest tube if large |
| Pocket hematoma | Acute | Observation vs drainage |
| Lead dislodgement | Acute/Subacute | Repositioning |
| Infection | Any time | Extraction, antibiotics |
| Lead failure | Chronic | New lead vs extraction |
| Tricuspid regurgitation | Chronic | Medical management vs leadless |
| Twiddler syndrome | Chronic | Re-fixation, patient education |

### Lead Extraction

**Indications:**
- Systemic infection
- Endocarditis
- Non-functional leads causing issues
- Venous occlusion needing access

**Methods:**
- Manual traction (if recent)
- Mechanical dilator sheaths
- Laser extraction
- Rotational extraction tools

**Risks:**
- SVC tear, tamponade
- Emergent sternotomy
- Death (0.2-0.5%)`,
      keyTerms: [
        { term: 'HV interval', definition: 'Time from His bundle depolarization to ventricular activation; prolongation indicates infranodal conduction disease' },
        { term: 'His bundle pacing', definition: 'Physiologic pacing technique capturing His bundle to maintain normal ventricular activation' },
        { term: 'LBBAP', definition: 'Left bundle branch area pacing; deep septal pacing technique as alternative to His bundle pacing' },
        { term: 'MVP mode', definition: 'Managed ventricular pacing; algorithm minimizing unnecessary RV pacing' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; commonly causes conduction disturbances' },
        { term: 'chronotropic incompetence', definition: 'Failure to appropriately increase heart rate with exercise' },
      ],
      clinicalNotes: 'Consider conduction system pacing (His/LBBAP) over traditional RV pacing, especially in patients with preserved EF who will have high pacing burden. Post-TAVR patients with new LBBB and prolonged PR have highest risk of late complete block. Lyme carditis can cause dramatic heart block but usually recovers with antibiotics.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of conduction disorders incorporates advanced pacing techniques including His bundle and left bundle branch area pacing, leadless pacemakers, and sophisticated algorithms for patient selection, while ongoing research addresses optimal timing and device selection.',
      explanation: `## Current Guidelines and Evidence

### 2018/2023 Bradycardia Guidelines Update

**Key Recommendations:**
1. Conduction system pacing (HBP/LBBAP) as alternative to RV pacing
2. Earlier consideration of physiologic pacing
3. Refined post-TAVR management algorithms
4. Recognition of pacemaker-induced cardiomyopathy

### Evidence for Conduction System Pacing

**His Bundle Pacing Evidence:**
- His-SYNC: HBP maintained narrower QRS vs RV pacing in AV block
- Multiple observational studies: Reduced HF, mortality
- Limitations: Lower implant success, higher thresholds, shorter battery life

**LBBAP Evidence:**
- LBBAP feasibility >90%
- Lower thresholds than HBP
- LEFT-BUNDLE (ongoing): LBBAP vs RV pacing in AV block
- COORDINATE: LBBAP vs CRT

### Pacemaker-Induced Cardiomyopathy

**Definition:**
- LV dysfunction developing from chronic RV pacing
- EF decline ≥10% to <50%
- Occurs in 10-20% of paced patients

**Risk Factors:**
- High RV pacing burden (>40%)
- Baseline EF borderline
- Wide paced QRS
- Pre-existing cardiomyopathy

**Management:**
- Upgrade to BiV/CRT pacing
- His bundle or LBBAP upgrade
- GDMT for heart failure

## Leadless Pacemakers

### Micra (Medtronic)

**Technology:**
- Transcatheter delivery to RV
- Attached by tines to RV septum
- VVI/VVIR pacing only
- Battery life 12-15 years

**Indications:**
- Patients with poor venous access
- Recurrent pocket infections
- High infection risk
- Limited life expectancy

**Outcomes (Micra AV):**
- Can provide AV synchrony via accelerometer sensing atrial contraction
- Non-inferior to transvenous

### Aveir (Abbott)

**Advances:**
- Helix fixation mechanism
- Retrievable design
- Potential for dual-chamber leadless system
- Aveir AR: Atrial leadless pacemaker

**Future:**
- Dual-chamber leadless systems
- Communication between atrial and ventricular devices
- Approaching functionality of transvenous DDD

## Advanced Topics

### Conduction System Pacing in CRT

**Background:**
- Traditional CRT uses LV epicardial pacing
- ~30% non-responders
- Wide paced QRS indicates electrical dyssynchrony

**LOT-CRT (His-Optimized):**
- His bundle pacing fused with LV lead
- Narrower QRS than traditional CRT
- Better resynchronization

**LBBAP for CRT:**
- LBBAP + RV pacing = narrow QRS
- May be alternative to traditional BiV
- Ongoing trials comparing approaches

### Subcutaneous ICD with Pacing

**Current Limitation:**
- S-ICD cannot pace (except post-shock)
- Patients needing pacing excluded

**EMPOWER Modular Pacing System:**
- Leadless pacemaker communicating with S-ICD
- Provides ATP, anti-bradycardia pacing
- Complete transvenous-free system
- FDA approved 2024

### Genetic Conduction Disease

**Progressive Cardiac Conduction Disease (PCCD):**
- SCN5A mutations most common
- Gradual development of AV block, BBB
- May develop arrhythmias (Brugada overlap)
- Family screening recommended

**Lamin A/C Mutations:**
- Dilated cardiomyopathy + conduction disease
- High risk of sudden death
- ICD often indicated even without classic criteria

## Special Situations

### Conduction Block in STEMI

**Inferior MI:**
- AV block in 10-15%
- Usually AV nodal level
- Often transient
- Narrow QRS escape
- Temporary pacing if symptomatic

**Anterior MI:**
- AV block in 5-10%
- Infranodal level
- Wide QRS escape
- High mortality (extensive infarct)
- Often needs permanent pacing

**New LBBB in MI:**
- Indicates large infarct
- Associated with cardiogenic shock
- Progression to complete block
- Consider temporary pacing

### Catheter Ablation-Related Block

**AV Node Ablation:**
- Intentional for refractory AFib with RVR
- Commits to lifelong pacing
- Consider ablate and pace strategy

**Unintentional Block:**
- Complication of septal ablation
- AVNRT ablation (slow pathway)
- Mitral isthmus ablation
- Usually transient, observe 24-48 hours

### Athletes and Heart Block

**Considerations:**
- High vagal tone causes physiologic block
- Mobitz I common in trained athletes
- Resolves with exercise
- Rarely need pacing

**Warning Signs:**
- Block at high heart rates
- Symptomatic block
- Infranodal features

## Future Directions

### Biological Pacemakers

**Concepts:**
- Gene therapy to create pacemaker cells
- Inject HCN channels into myocardium
- Create ectopic automaticity
- Still experimental

### AI and Device Programming

**Applications:**
- Automatic threshold testing
- Arrhythmia discrimination
- Prediction of battery depletion
- Remote monitoring optimization

### Miniaturization

**Trends:**
- Smaller generators
- Longer battery life
- Less invasive implant
- Reduced infection risk

## Quality Metrics

### Device Follow-up

**Standards:**
- In-person or remote check within 72 hours
- Remote monitoring every 3 months
- In-person annually
- Alert management systems

### Appropriate Use Criteria

**Key Metrics:**
- Pacing indication documentation
- Appropriate mode selection
- Minimization of RV pacing when possible
- Infection rates <2%`,
      keyTerms: [
        { term: 'pacemaker-induced cardiomyopathy', definition: 'LV dysfunction developing from chronic RV pacing; indication for upgrade to CRT or physiologic pacing' },
        { term: 'leadless pacemaker', definition: 'Self-contained pacing device implanted directly in heart without transvenous leads' },
        { term: 'Micra AV', definition: 'Leadless pacemaker with accelerometer-based AV synchrony' },
        { term: 'LOT-CRT', definition: 'His bundle-optimized CRT combining His pacing with LV lead' },
        { term: 'EMPOWER', definition: 'Modular pacing system combining leadless pacemaker with S-ICD for transvenous-free solution' },
        { term: 'progressive cardiac conduction disease', definition: 'Genetic disorder (often SCN5A) causing progressive development of conduction blocks' },
      ],
      clinicalNotes: `Key clinical pearls for conduction disorders:

1. **Pacing Mode Selection**: Minimize RV pacing burden; consider conduction system pacing for high pacing needs
2. **Post-TAVR**: Pre-existing RBBB is highest risk; monitor closely and consider EP study if new LBBB
3. **LBBAP vs HBP**: LBBAP has higher implant success and lower thresholds; increasingly preferred
4. **Leadless Options**: Consider for high infection risk or venous access issues
5. **Genetic Testing**: Consider in young patients with progressive conduction disease
6. **Lyme Disease**: Always consider in young patients with unexplained high-grade block
7. **Pacing-Induced Cardiomyopathy**: Monitor EF in patients with high RV pacing burden
8. **CRT Alternatives**: LBBAP may be effective alternative to BiV pacing in CRT candidates
9. **S-ICD + Leadless**: EMPOWER system offers transvenous-free solution for selected patients
10. **Athletes**: Most blocks are vagal and benign; worry about block at high heart rates`,
    },
  },

  media: [
    {
      id: 'av-block-ecg-ladder',
      type: 'diagram',
      filename: 'av-block-ladder-diagrams.svg',
      title: 'AV Block Ladder Diagrams',
      description: 'First, second, and third-degree AV block illustrated with ladder diagrams',
    },
    {
      id: 'bbb-ecg-patterns',
      type: 'diagram',
      filename: 'bundle-branch-block-ecg.svg',
      title: 'Bundle Branch Block ECG Patterns',
      description: 'RBBB and LBBB characteristic ECG findings',
    },
    {
      id: 'conduction-system-anatomy',
      type: 'diagram',
      filename: 'cardiac-conduction-system.svg',
      title: 'Cardiac Conduction System Anatomy',
      description: 'SA node, AV node, His bundle, and bundle branches',
    },
  ],

  citations: [
    {
      id: 'acc-aha-bradycardia-2018',
      type: 'article',
      title: '2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia',
      authors: ['Kusumoto FM', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000628',
    },
    {
      id: 'conduction-system-pacing-review',
      type: 'article',
      title: 'Conduction System Pacing',
      source: 'JACC: Clinical Electrophysiology',
    },
    {
      id: 'braunwald-conduction',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Bradyarrhythmias and Atrioventricular Block',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'MI and Heart Block' },
    { targetId: 'procedure-cardiac-catheterization', targetType: 'topic', relationship: 'related', label: 'TAVR' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['electrophysiology', 'arrhythmia', 'pacing', 'device therapy'],
    keywords: ['AV block', 'heart block', 'pacemaker', 'RBBB', 'LBBB', 'Mobitz', 'His bundle pacing'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartBlocks;
