/**
 * Cardiac Arrhythmias - Comprehensive Educational Content
 *
 * Covers atrial fibrillation, supraventricular tachycardia, heart block,
 * and other rhythm disturbances with evaluation and management.
 */

import { EducationalContent } from '../types';

export const arrhythmiasContent: EducationalContent = {
  id: 'category-arrhythmias',
  type: 'topic',
  name: 'Cardiac Arrhythmias',
  alternateNames: ['Heart Rhythm Disorders', 'Cardiac Dysrhythmias', 'Arrhythmia'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Arrhythmias are problems with the speed or pattern of your heartbeat, caused by issues with the heart\'s electrical system, ranging from harmless to life-threatening.',
      explanation: `## What Are Arrhythmias?

Your heart has its own electrical system that tells it when to beat. Think of it like the wiring in a house that controls when lights turn on and off. When this electrical system doesn't work properly, your heart may beat too fast, too slow, or in an irregular pattern.

## Types of Arrhythmias

### Heartbeat That's Too Fast (Tachycardia)

**Atrial Fibrillation (AFib):**
- The most common serious arrhythmia
- Heart beats irregularly and often fast
- Blood can pool in the heart and form clots
- Increases risk of stroke

**What It Feels Like:**
- Heart racing or fluttering
- Feeling like your heart is "skipping beats"
- Fatigue
- Shortness of breath
- Some people have no symptoms at all!

### Heartbeat That's Too Slow (Bradycardia)

**When the heart beats too slowly:**
- May not pump enough blood to the brain
- Can cause fainting or dizziness
- Often caused by aging, medications, or heart damage

### Extra or Skipped Beats

**Premature Beats:**
- Feel like a "flip-flop" or "thump" in your chest
- Usually harmless
- Can be triggered by caffeine, stress, or lack of sleep

## What Causes Arrhythmias?

**Common Triggers:**
- Too much caffeine or alcohol
- Smoking
- Stress or anxiety
- Certain medications
- Thyroid problems
- Heart disease or damage
- Sleep apnea

**Sometimes the cause is unknown!**

## How Doctors Find Arrhythmias

**Tests:**
- **ECG (EKG):** Records heart's electrical activity
- **Holter monitor:** Portable ECG worn for 24-48 hours
- **Event monitor:** Worn longer, activated when symptoms occur
- **Smartwatch:** Can detect some rhythm problems

## Treatment Options

**For AFib (irregular heartbeat):**
- **Blood thinners:** Prevent clots and stroke
- **Rate control medications:** Keep heart from beating too fast
- **Rhythm control medications:** Restore normal rhythm
- **Cardioversion:** Shock to reset heart rhythm
- **Ablation:** Procedure to fix the problem area

**For Other Arrhythmias:**
- Medications to control heart rate
- Avoiding triggers (caffeine, alcohol, stress)
- Pacemaker for slow heartbeats
- Implantable cardioverter-defibrillator (ICD) for dangerous rhythms

## When to Get Emergency Help

Call 911 if you have:
- Chest pain or pressure
- Severe shortness of breath
- Fainting or feeling like you might faint
- Rapid or irregular heartbeat with other symptoms

## Living with Arrhythmias

**Things You Can Do:**
- Take medications as prescribed
- Limit caffeine and alcohol
- Don't smoke
- Manage stress
- Exercise as approved by your doctor
- Keep regular follow-up appointments

Most people with arrhythmias live normal, active lives with proper treatment!`,
      keyTerms: [
        { term: 'arrhythmia', definition: 'A problem with the rate or rhythm of the heartbeat' },
        { term: 'atrial fibrillation', definition: 'An irregular and often rapid heart rate; commonly called AFib' },
        { term: 'tachycardia', definition: 'A heart rate that is too fast (over 100 beats per minute)' },
        { term: 'bradycardia', definition: 'A heart rate that is too slow (under 60 beats per minute)' },
        { term: 'ECG', definition: 'A test that records the electrical activity of the heart' },
        { term: 'pacemaker', definition: 'A small device that helps the heart beat at a normal rate' },
      ],
      analogies: [
        'The heart\'s electrical system is like the wiring in a house - if there\'s a short circuit, lights flicker or don\'t work.',
        'AFib is like a quivering bowl of jello instead of a steady squeeze.',
        'A slow heartbeat is like a slow delivery truck - packages don\'t arrive on time.',
      ],
      examples: [
        'A person with AFib might feel their heart racing and fluttering after drinking too much coffee.',
        'Someone with bradycardia might feel dizzy when standing up because blood isn\'t getting to their brain fast enough.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac arrhythmias result from disturbances in impulse formation or conduction, including atrial fibrillation (most common clinically significant), supraventricular tachycardias (AVNRT, AVRT), bradyarrhythmias (sinus node dysfunction, AV block), and ventricular arrhythmias, with evaluation via ECG and treatment ranging from medications to device therapy.',
      explanation: `## Cardiac Electrophysiology Basics

**Normal Conduction:**
1. SA node (pacemaker) fires → Atrial depolarization → P wave
2. AV node (delays impulse) → PR interval
3. Bundle of His → Bundle branches → Purkinje fibers
4. Ventricular depolarization → QRS complex

**Normal Values:**
- Heart rate: 60-100 bpm
- PR interval: 120-200 ms
- QRS duration: 80-120 ms
- QT interval: <440 ms (men), <460 ms (women)

## Supraventricular Tachycardias (SVT)

### Atrial Fibrillation

**Pathophysiology:**
- Multiple reentrant wavelets in atria
- Atria quiver at 400-600 bpm
- AV node blocks most impulses (irregular ventricular response)
- Loss of atrial kick → 20-30% reduction in cardiac output

**ECG Findings:**
- Irregularly irregular R-R intervals (no pattern)
- No discrete P waves ( fibrillatory waves)
- QRS narrow (unless underlying BBB)

**Classification:**
- First detected (could be paroxysmal)
- Paroxysmal: Self-terminating within 7 days
- Persistent: Requires cardioversion
- Long-standing persistent: >1 year
- Permanent: Decision not to pursue rhythm control

**Risk Factors:**
- Age (prevalence 10% at age >80)
- Hypertension
- Heart failure
- Valve disease (especially mitral)
- Obesity
- Sleep apnea
- Alcohol ("holiday heart")

### Atrial Flutter

**Pathophysiology:**
- Macro-reentrant circuit, typically in right atrium
- Typical flutter: Counterclockwise around tricuspid annulus
- Atrial rate ~300 bpm
- Ventricular rate usually 150 bpm (2:1 block)

**ECG Findings:**
- Sawtooth flutter waves (best in II, III, aVF)
- Regular ventricular rhythm (usually)
- Variable block possible

### AV Nodal Reentrant Tachycardia (AVNRT)

**Mechanism:**
- Reentry circuit within AV node
- Two pathways with different conduction properties
- Most common regular SVT

**ECG Findings:**
- Narrow complex tachycardia (150-250 bpm)
- P waves often hidden in QRS
- May see "pseudo R'" in V1 or "pseudo S" in inferior leads

### AV Reentrant Tachycardia (AVRT)

**Mechanism:**
- Accessory pathway (bypass tract) connecting atrium and ventricle
- Orthodromic: Conduction down AV node, up accessory pathway (narrow QRS)
- Antidromic: Conduction down accessory pathway (wide QRS)

**WPW (Wolff-Parkinson-White) Syndrome:**
- Pre-excitation pattern: Short PR, delta wave, wide QRS
- Risk of sudden cardiac death if AF develops

## Bradyarrhythmias

### Sinus Node Dysfunction (Sick Sinus Syndrome)

**Types:**
- Sinus bradycardia
- Sinus arrest/pause
- Sinoatrial exit block
- Tachy-brady syndrome (AF with slow episodes)

**Causes:**
- Age-related degeneration (most common)
- Ischemia (RCA disease)
- Medications (beta-blockers, CCBs, digoxin)
- Infiltrative diseases

### AV Block

**First Degree:**
- PR interval >200 ms
- All impulses conducted
- Usually benign

**Second Degree - Type I (Wenckebach):**
- Progressive PR prolongation until dropped beat
- Narrow QRS
- Usually benign, AV node level

**Second Degree - Type II (Mobitz II):**
- Dropped beats without PR prolongation
- Wide QRS
- Infranodal (His-Purkinje), dangerous

**Third Degree (Complete):**
- Atria and ventricles beat independently
- No relationship between P waves and QRS
- Junctional or ventricular escape rhythm
- Requires pacemaker if symptomatic

## Ventricular Arrhythmias

### Premature Ventricular Contractions (PVCs)

**ECG Findings:**
- Wide QRS (>120 ms) without preceding P wave
- Compensatory pause
- Often different morphology than sinus beats

**Clinical Significance:**
- Common in normal people
- Increased frequency associated with cardiomyopathy
- Treatment if symptomatic or >10,000/day

## Treatment Overview

**Rate Control (AFib):**
- Beta-blockers (metoprolol, esmolol)
- Non-DHP CCBs (diltiazem, verapamil)
- Digoxin (add-on, sedentary patients)

**Rhythm Control (AFib):**
- Electrical cardioversion (elective or urgent)
- Pharmacologic cardioversion (amiodarone, flecainide, dofetilide)
- Maintenance of sinus rhythm

**Anticoagulation (AFib):**
- Stroke prevention critical
- Assess risk vs bleeding`,
      keyTerms: [
        { term: 'SVT', definition: 'Supraventricular tachycardia; fast rhythm originating above ventricles' },
        { term: 'AVNRT', definition: 'AV nodal reentrant tachycardia; reentry within AV node' },
        { term: 'AVRT', definition: 'AV reentrant tachycardia; uses accessory pathway' },
        { term: 'WPW', definition: 'Wolff-Parkinson-White syndrome; pre-excitation via accessory pathway' },
        { term: 'delta wave', definition: 'Slurred upstroke of QRS in WPW, representing ventricular pre-excitation' },
        { term: 'Wenckebach', definition: 'Type I second-degree AV block with progressive PR prolongation' },
        { term: 'Mobitz II', definition: 'Type II second-degree AV block with dropped beats without PR prolongation' },
      ],
      analogies: [
        'AVNRT is like traffic going in circles on a roundabout - cars keep going around without exiting.',
        'Heart block is like a delayed train - some cars (impulses) never make it through.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac arrhythmias arise from disorders of impulse formation (automaticity, triggered activity) or conduction (reentry, block), with specific mechanisms, ECG patterns, and clinical implications requiring systematic evaluation including risk stratification for stroke and sudden cardiac death.',
      explanation: `## Arrhythmia Mechanisms

### Disorders of Impulse Formation

**Enhanced Automaticity:**
- Phase 4 depolarization steeper than normal
- Ectopic pacemaker faster than SA node
- Causes: Catecholamines, hypokalemia, ischemia, drugs

**Triggered Activity:**
- **Early Afterdepolarizations (EADs):** Occur during phase 2 or 3
  - Prolonged repolarization (long QT)
  - Causes: Hypokalemia, hypomagnesemia, certain drugs
  - Can trigger torsades de pointes

- **Delayed Afterdepolarizations (DADs):** Occur after phase 4
  - Cytosolic calcium overload
  - Causes: Digoxin toxicity, catecholamines, heart failure

### Disorders of Conduction

**Reentry:** Requires three conditions:
1. Two pathways with different conduction properties
2. Unidirectional block in one pathway
3. Critical timing for circus movement

**Types of Reentry:**
- Anatomical reentry (scar-based VT, AVRT)
- Functional reentry (AVNRT, AF, atrial flutter)

### Action Potential and Antiarrhythmic Drugs

**Vaughan Williams Classification:**

**Class I (Na+ Channel Blockers):**
- IA: Quinidine, procainamide, disopyramide (prolong repolarization)
- IB: Lidocaine, mexiletine (shorten repolarization)
- IC: Flecainide, propafenone (slow conduction, minimal effect on repolarization)

**Class II (Beta-Blockers):**
- Metoprolol, propranolol, esmolol
- Reduce automaticity, slow conduction

**Class III (K+ Channel Blockers):**
- Amiodarone, sotalol, dofetilide, ibutilide
- Prolong repolarization (prolong QT)

**Class IV (Calcium Channel Blockers):**
- Verapamil, diltiazem
- Slow AV nodal conduction

## Atrial Fibrillation

### Pathophysiology

**Multiple Wavelet Hypothesis:**
- Atria can't support simultaneous wavefronts
- Wavelength = conduction velocity × refractory period
- Short wavelength + dilated atria = reentry

**Electrical Remodeling:**
- "AF begets AF"
- Atrial electrical changes with AF promote further AF
- Takes 2-4 weeks to develop
- Reverses with rhythm control

### Stroke Risk Stratification (CHA2DS2-VASc)

| Risk Factor | Points |
|-------------|--------|
| C - Congestive Heart Failure | 1 |
| H - Hypertension | 1 |
| A2 - Age ≥75 | 2 |
| D2 - Diabetes | 1 |
| S2 - Prior Stroke/TIA | 2 |
| V - Vascular Disease | 1 |
| A - Age 65-74 | 1 |
| Sc - Sex Category (Female) | 1 |

**Anticoagulation Recommendations:**
- Score 0 (men) / 1 (women): No anticoagulation
- Score 1 (men): Consider anticoagulation
- Score ≥2 (men) / ≥3 (women): Anticoagulate

### Bleeding Risk (HAS-BLED)

| Risk Factor | Points |
|-------------|--------|
| H - Hypertension (uncontrolled) | 1 |
| A - Abnormal renal/liver function | 1 each |
| S - Stroke history | 1 |
| B - Bleeding history | 1 |
| L - Labile INRs | 1 |
| E - Elderly (>65) | 1 |
| D - Drugs/alcohol use | 1 each |

Score ≥3 indicates high bleeding risk, but not a reason to withhold anticoagulation - address modifiable factors.

### AF Management

**Rate Control Targets:**
- Strict: Resting HR <80 bpm, moderate activity <110 bpm
- Lenient: Resting HR <110 bpm
- RACE II trial showed lenient control non-inferior

**Rhythm Control Indications:**
- Symptomatic despite rate control
- Young patients
- Tachycardia-mediated cardiomyopathy
- New-onset AF (<1 year)

**Cardioversion Considerations:**
- AF <48 hours: Cardiovert without anticoagulation
- AF >48 hours or unknown: Anticoagulate ≥3 weeks or exclude thrombus with TEE

## SVT

### AVNRT Management

**Acute Termination:**
- Valsalva maneuver (most successful non-pharmacologic)
- Modified Valsalva (supine with leg raise)
- Adenosine (6 mg → 12 mg → 12 mg if needed)
- CCB if adenosine contraindicated

**Chronic Management:**
- Beta-blocker or CCB first-line
- Catheter ablation: >90% success rate
- Ablation preferred as first-line in many centers

### AVRT / WPW

**Pre-excitation Patterns:**
- Type A: Positive delta wave in V1 (left-sided pathway)
- Type B: Negative delta wave in V1 (right-sided pathway)

**Management:**
- Asymptomatic: Observation (EP study for high-risk occupations)
- Symptomatic: Ablation (95% success, low complication rate)
- Avoid AV node blocking agents in AF with WPW (may accelerate ventricular response)

## Bradyarrhythmias

### Indications for Pacing

**Class I (Must Pace):**
- Symptomatic bradycardia
- Third-degree AV block
- Type II second-degree AV block
- Mobitz II with wide QRS

### Pacemaker Types

**Single Chamber (VVI):**
- Ventricle only
- Simple, less expensive
- Used in atrial fibrillation

**Dual Chamber (DDD):**
- Both atrium and ventricle
- Maintains AV synchrony
- Most common for sinus node dysfunction

**Biventricular (CRT):**
- Paces both ventricles
- Used in heart failure with wide QRS
- Resynchronizes contraction

## Ventricular Tachycardia

### Monomorphic VT

**Mechanism:** Reentry, typically around scar (post-MI)

**ECG:**
- Wide QRS (>140 ms)
- Consistent morphology beat-to-beat
- Atrioventricular dissociation
- Fusion/capture beats

**Stable VT:**
- Amiodarone 150 mg IV
- Sotalol 1.5 mg/kg (avoid if prolonged QT)
- Consider cardioversion if BP unstable

**Unstable VT:**
- Immediate synchronized cardioversion

### Polymorphic VT / Torsades

**Mechanism:** EADs in setting of prolonged QT

**ECG:**
- QRS axis varies beat-to-beat
- "Twisting" around baseline
- Rate 200-300 bpm

**Causes of Prolonged QT:**
- Congenital (long QT syndrome)
- Electrolyte abnormalities (K+, Mg2+)
- Drugs (antiarrhythmics, antibiotics, antipsychotics, methadone)

**Treatment:**
- Magnesium sulfate 2 g IV
- Correct K+ to >4.0 mEq/L
- Isoproterenol infusion (temporary)
- Overdrive pacing

## Sudden Cardiac Death (SCD)

**Risk Factors:**
- LVEF ≤35%
- Prior cardiac arrest or VT
- Family history of SCD
- Hypertrophic cardiomyopathy
- Long QT syndrome

**Prevention:**
- ICD for primary prevention (EF ≤35%, NYHA II-III)
- ICD for secondary prevention (prior arrest/VT)
- Avoid QT-prolonging drugs in susceptible patients`,
      keyTerms: [
        { term: 'EAD', definition: 'Early afterdepolarization; depolarization during phase 2/3 of action potential' },
        { term: 'DAD', definition: 'Delayed afterdepolarization; depolarization after repolarization complete' },
        { term: 'CHA2DS2-VASc', definition: 'Stroke risk stratification score for atrial fibrillation' },
        { term: 'reentry', definition: 'Circus movement of electrical impulse through circuit causing arrhythmia' },
        { term: 'electrical remodeling', definition: 'Adaptive changes in electrical properties promoting arrhythmia persistence' },
        { term: 'anticoagulation', definition: 'Blood thinning to prevent clot formation' },
        { term: 'torsades de pointes', definition: 'Polymorphic VT associated with prolonged QT; French for "twisting of points"' },
      ],
      clinicalNotes: 'In AF >48 hours, always rule out LA thrombus before cardioversion (TEE or 3 weeks anticoagulation). Avoid AV node blockers in WPW with AF as they may accelerate conduction down accessory pathway causing VF. Magnesium is first-line for torsades. Correct potassium to >4.0 in prolonged QT.',
    },
    4: {
      level: 4,
      summary: 'Advanced arrhythmia management requires understanding complex electrophysiologic mechanisms, appropriate use of antiarrhythmic medications with recognition of proarrhythmic potential, catheter ablation techniques, and device therapy including pacemakers, ICDs, and cardiac resynchronization therapy.',
      explanation: `## Advanced Electrophysiology

### Atrial Fibrillation Ablation

**Pulmonary Vein Isolation (PVI):**
- Pulmonary veins trigger AF in most patients
- Ablation encircles veins to electrically isolate them
- Success rates: 70-80% single procedure, 85-90% with repeat

**Techniques:**
- Radiofrequency ablation: Heat-based lesion formation
- Cryoballoon ablation: Freeze-based, faster procedure
- Laser balloon: Alternative energy source

**Complications:**
- Cardiac tamponade (1%)
- PV stenosis (rare with modern techniques)
- Atrioesophageal fistula (rare, fatal)
- Phrenic nerve injury (especially R superior PV with cryo)

**When to Ablate:**
- Symptomatic paroxysmal AF refractory to antiarrhythmic
- Symptomatic persistent AF (lower success)
- Preferred over antiarrhythmics in younger patients

**Recent Trials:**
- CABANA: No mortality benefit vs medical therapy, but better symptoms and quality of life
- EARLY-AF: Ablation first-line superior to antiarrhythmic in paroxysmal AF

### Ventricular Tachycardia Ablation

**Substrate Mapping:**
- Identify scar (low voltage) in sinus rhythm
- Identify late potentials (delayed activation)
- Target channels of surviving tissue within scar

**Approaches:**
- Endocardial: From ventricular chamber
- Epicardial: Through pericardial space (sometimes needed)
- Surgical: For refractory cases

**Outcomes:**
- Success rates 50-70% (lower than SVT)
- Often used adjunctively with ICD
- Reduces ICD shocks

### Antiarrhythmic Drug Considerations

**Proarrhythmia:**

**Class IC (Flecainide, Propafenone):**
- Contraindicated in CAD/structural heart disease (CAST trial)
- Increased mortality in post-MI patients
- Safe in hearts without structural disease
- "Pill-in-pocket" approach for paroxysmal AF

**Class III (Sotalol, Dofetilide):**
- Can cause torsades (dose-dependent)
- Requires inpatient initiation (QT monitoring)
- Dofetilide: renal dosing, QT monitoring
- Sotalol: contraindicated in significant renal dysfunction

**Amiodarone:**
- Most effective antiarrhythmic
- Low proarrhythmic risk
- Significant extracardiac toxicity:
  - Pulmonary fibrosis
  - Thyroid dysfunction
  - Liver toxicity
  - Skin discoloration
  - Corneal deposits
- Numerous drug interactions (CYP450)

**Dronedarone:**
- Amiodarone analog without iodine
- Less toxic but less effective
- Contraindicated in permanent AF (increased mortality in PALLAS trial)
- Contraindicated in NYHA III-IV HF

### Bradycardia Management

### Pacemaker Algorithms

**Rate Responsive Pacing:**
- Activity sensor or minute ventilation
- Increases rate during activity
- Useful in chronotropic incompetence

**Mode Switching:**
- Automatically switches to non-tracking mode during AF
- Prevents rapid ventricular response

**RV Pacing Minimization:**
- High RV pacing percentages associated with heart failure and AF
- MVP (Managed Ventricular Pacing) algorithm
- Conduction system pacing (HBP, LBBP) when possible

### His Bundle Pacing

**Technique:**
- Paces the His bundle directly
- Maintains normal ventricular activation
- Alternative to biventricular pacing

**Advantages:**
- Physiological activation pattern
- Narrower QRS than traditional pacing
- May prevent pacing-induced cardiomyopathy

**Challenges:**
- Higher capture thresholds
- Lead stability
- Longer implant time
- Operator learning curve

### Left Bundle Branch Pacing

**Technique:**
- Paces the left bundle branch from septal position
- More stable than His bundle pacing
- Lower thresholds
- Becoming more popular

### Cardiac Resynchronization Therapy (CRT)

**Indications:**
- LVEF ≤35%
- NYHA II-IV on GDMT
- LBBB with QRS ≥150 ms (strongest evidence)
- Non-LBBB: QRS ≥150 ms (weaker evidence)

**Responders:**
- ~70% show improvement
- Predictors of response:
  - LBBB morphology
  - QRS ≥150 ms
  - Female sex
  - Non-ischemic cardiomyopathy
  - LV lead in lateral position

**Non-Responders:**
- Consider:
  - Lead repositioning
  - Multisite pacing
  - Conduction system pacing
  - Optimization (AV and VV intervals)

### Implantable Cardioverter-Defibrillators (ICD)

**Primary Prevention:**

**Ischemic Cardiomyopathy:**
- MADIT-II: EF ≤30%, NYHA II-3, ≥40 days post-MI
- SCD-HeFT: EF ≤35%, NYHA II-3

**Non-Ischemic Cardiomyopathy:**
- DANISH trial: No mortality benefit overall
- Subgroup benefit: EF ≤35%, age <68
- Shared decision-making crucial

**Subcutaneous ICD (S-ICD):**
- No transvenous leads
- Lower infection risk
- No pacing capability
- Larger device
- Shock therapy only

**ICD Issues:**

**Inappropriate Shocks:**
- SVT with rapid rates
- Lead noise/failure
- T-wave oversensing
- Treatment: Anti-tachycardia pacing, reprogramming

**Electrical Storm:**
- ≥3 separate VT/VF episodes within 24 hours
- Treat with: Antiarrhythmics, sedation, ablation

**Shock Anxiety:**
- Common psychological issue
- Counseling and support essential

### Inherited Arrhythmia Syndromes

**Brugada Syndrome:**
- Type 1 ECG: Coved ST elevation V1-V3
- Risk of SCD, especially during sleep
- ICD for cardiac arrest or syncope
- Avoid Na+ channel blockers (flecainide, procainamide)

**Long QT Syndrome:**
- Prolonged QT >500 ms high risk
- Beta-blockers first-line (except LQT3)
- Avoid QT-prolonging drugs (www.crediblemeds.org)
- ICD for cardiac arrest or breakthrough events

**Catecholaminergic Polymorphic VT:**
- Exercise or emotional stress triggers
- Bidirectional VT characteristic
- Beta-blockers first-line
- ICD for cardiac arrest

**Arrhythmogenic RV Cardiomyopathy:**
- Fibrofatty replacement of RV
- Epsilon waves, T-wave inversions V1-V3
- Exercise restriction
- ICD for cardiac arrest, sustained VT`,
      keyTerms: [
        { term: 'PVI', definition: 'Pulmonary vein isolation; catheter abation encircling pulmonary veins to treat AF' },
        { term: 'CAST trial', definition: 'Cardiac Arrhythmia Suppression Trial; showed increased mortality with flecainide in CAD' },
        { term: 'His bundle pacing', definition: 'Direct pacing of His bundle; physiological alternative to RV pacing' },
        { term: 'CRT', definition: 'Cardiac resynchronization therapy; biventricular pacing for dyssynchrony' },
        { term: 'Brugada syndrome', definition: 'Inherited channelopathy causing coved ST elevation and SCD risk' },
        { term: 'epsilon waves', definition: 'Small deflection after QRS in ARVC; diagnostic marker' },
        { term: 'electrical storm', definition: '≥3 separate VT/VF episodes within 24 hours' },
      ],
      clinicalNotes: 'CAST trial was landmark - stopped early due to excess mortality with encainide/flecainide in post-MI patients. Always assess for structural heart disease before using Class IC agents. CRT responder rates improve with patient selection - LBBB with QRS >150 ms best. Shared decision-making increasingly important for ICDs, especially in non-ischemic cardiomyopathy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary arrhythmia management integrates advanced mapping technologies, evidence-based ablation techniques, sophisticated device therapies with remote monitoring, and emerging paradigms including conduction system pacing, wearable technology, and precision medicine approaches to inherited arrhythmia syndromes.',
      explanation: `## Contemporary Arrhythmia Management

## 2023 AHA/ACC/HRS Guideline Updates

### Atrial Fibrillation

**Key Changes:**
- Emphasize symptom assessment (EHRA symptom score)
- Early rhythm control may improve outcomes (EAST-AFNET 4)
- Catheter ablation as first-line therapy for select patients
- Left atrial appendage occlusion (LAAO) for stroke prevention when anticoagulation contraindicated

**Stroke Prevention:**

**Direct Oral Anticoagulants (DOACs) Preferred:**
- Apixaban, rivaroxaban, dabigatran, edoxaban
- Superior to warfarin for stroke prevention
- Lower intracranial bleeding risk
- No routine monitoring needed

**When Warfarin Still Preferred:**
- Mechanical mitral valve
- Moderate-to-severe mitral stenosis
- Severe renal failure (CrCl <15)

**LAAO (Left Atrial Appendage Occlusion):**
- WATCHMAN, Amulet devices
- Indicated when anticoagulation contraindicated
- Non-inferior to warfarin for stroke prevention
- Procedural complication rate decreasing

**DOAC Dosing Adjustments:**
| Drug | Renal Adjustment | Others |
|------|------------------|---------|
| Apixaban | CrCl <15: avoid | Avoid with dual P-gp/CYP3A4 inhibitors |
| Rivaroxaban | CrCl <15: avoid | Avoid with P-gp inhibitors |
| Dabigatran | CrCl <30: avoid | Avoid with P-gp inhibitors |
| Edoxaban | CrCl 15-50: 50% dose | Avoid with P-gp inhibitors |

### Ventricular Arrhythmias

**Risk Stratification:**
- Primary prevention ICD: EF ≤35%, NYHA II-III
- Consider CMG (Cardiac Magnetic Resonance) for scar characterization
- Genetic testing for inherited cardiomyopathies

**Antiarrhythmic Selection:**
- Amiodarone: Most effective, significant toxicity
- Sotalol: Requires normal QT, renal function
- Mexiletine: Adjunct for refractory VT
- Consider catheter ablation early for recurrent VT

### Bradycardia and Conduction System Disease

**Conduction System Pacing:**
- His bundle pacing: Preserves native activation
- Left bundle branch pacing: More stable, wider applicability
- Becoming preferred over RV pacing in many centers

**Leadless Pacemakers:**
- Micra (Medtronic): Transcatheter, single chamber
- Aveir (Abbott): Retrievable option
- Advantages: No pocket, no lead, shorter procedure

### Device Therapy and Remote Monitoring

**Remote Monitoring Benefits:**
- Earlier detection of arrhythmias
- Reduced hospitalizations
- Improved survival (COMPASS trial)
- Automatic transmission

**ICD Transvenous vs Subcutaneous:**
- Transvenous: Pacing capability, lower thresholds, lead complications
- Subcutaneous: No leads, higher defibrillation threshold, no pacing

**Shared Decision-Making:**
- Discuss benefit vs risks
- Consider comorbidities, life expectancy, goals of care
- Quality of life important consideration

## Mapping and Ablation Advances

### High-Density Mapping

**Technologies:**
- Rhythmia (Boston Scientific): 64-electrode mini-basket
- Advisor HD Grid (Abbott)
- Carto 3 (Biosense Webster)

**Benefits:**
- Detailed voltage maps
- Identification of critical isthmus
- Improved ablation success

### Persistent AF Ablation

**Challenges:**
- Lower success than paroxysmal AF
- Extensive ablation often needed
- Fibrotic substrate changes over time

**Approaches:**
- PVI mandatory (base procedure)
- Posterior wall ablation (if low voltage)
- Roof lines, mitral isthmus lines
- Elimination of non-PV triggers
- Rotor mapping (controversial)

### VT Ablation in Structural Heart Disease

**Substrate Modification:**
- Core isolation: Isolate dense scar
- Late potential abolition
- Linear lesions through scar
- Homogenization

**Adjunctive Therapy:**
- Steroid for inflammation reduction
- Colchicine for pericarditis prevention

## Inherited Arrhythmia Syndromes

### Genetic Testing

**When to Test:**
- Unexplained cardiac arrest in young person
- Family history of SCD <50 years
- Unexplained syncope with concerning ECG
- Exercise-induced symptoms

**Genes Tested:**
- LQTS: KCNQ1, KCNH2, SCN5A (70% of cases)
- Brugada: SCN5A (most common)
- CPVT: RYR2, CASQ2
- ARVC: PKP2, DSP, DSG2

**Cascade Testing:**
- Screen first-degree relatives
- Asymptomatic carriers may need treatment
- Reproductive counseling

### Specific Syndromes

**Long QT Syndrome:**
- Beta-blockers first-line (except LQT3)
- Avoid QT-prolonging drugs (www.crediblemeds.org)
- ICD for cardiac arrest, recurrent events despite beta-blocker
- Left cardiac sympathetic denervation for refractory cases

**Brugada Syndrome:**
- Type 1 ECG diagnostic (spontaneous or drug-induced)
- Fever can precipitate events - aggressive antipyresis
- Avoid Na+ channel blockers (flecainide, procainamide)
- ICD for cardiac arrest or documented VT
- Quinidine can reduce arrhythmias

**CPVT:**
- Exercise-induced syncope or cardiac arrest
- Bidirectional VT on exercise testing
- Beta-blockers (nadolol preferred)
- Flecainide adjunct for breakthrough events
- ICD for cardiac arrest

## Emerging Therapies

### Wearable Technology

**Smartwatch Detection:**
- Apple Watch: AF detection FDA approved
- Fitbit: AF detection capability
- Patch monitors (Zio patch, iRhythm)

**Clinical Integration:**
- Useful for paroxysmal AF detection
- Can guide anticoagulation decisions
- Diagnostic yield improves with longer monitoring

### Left Atrial Appendage Closure

**Devices:**
- WATCHMAN FLX: Most studied, >150,000 implants
- Amplatzer Amulet: Alternative with complete closure

**Evidence:**
- PROTECT AF, PREVAIL, EWOLUTION trials
- Non-inferior to warfarin for stroke prevention
- Bleeding risk lower than anticoagulation

**Indications:**
- Contraindication to long-term anticoagulation
- High bleeding risk
- Patient preference after shared decision-making

### Conduction System Pacing

**His Bundle Pacing:**
- Selective: Capture His bundle only
- Non-selective: His + local myocardium
- Success rates 80-90% in experienced centers
- Lower hospitalization vs RV pacing

**Left Bundle Branch Pacing:**
- Transseptal approach from RV
- Higher success rate than His bundle
- More stable long-term
- Wider applicability

## Anticoagulation Special Considerations

### Perioperative Management

**Bridging Therapy:**
- Low risk: Stop DOAC, no bridge
- Moderate-high risk: Consider bridge with LMWH
- High thrombotic risk: Mechanical valve, stroke within 3 months

### DOAC Reversal

**Idarucizumab (Praxbind):**
- Reverses dabigatran
- 5 g IV divided into 2 doses

**Andexanet alfa (Andexxa):**
- Reverses factor Xa inhibitors
- Expensive, limited availability

### Cancer-Associated Thrombosis

**LMWH preferred historically:**
- No drug interactions
- No need for monitoring
- Predictable response

**DOACs increasing:**
- Select patients (no GI malignancy, no drug interactions)
- Direct comparison studies ongoing`,
      keyTerms: [
        { term: 'DOAC', definition: 'Direct oral anticoagulant; apixaban, rivaroxaban, dabigatran, edoxaban' },
        { term: 'LAAO', definition: 'Left atrial appendage occlusion; device closure of LAA for stroke prevention' },
        { term: 'EHRA symptom score', definition: 'European Heart Rhythm Association symptom classification for AF' },
        { term: 'EAST-AFNET 4', definition: 'Trial showing early rhythm control improves outcomes in AF' },
        { term: 'His bundle pacing', definition: 'Physiologic pacing via native conduction system' },
        { term: 'leadless pacemaker', definition: 'Transcatheter pacemaker without transvenous leads' },
        { term: 'CPVT', definition: 'Catecholaminergic polymorphic ventricular tachycardia; inherited arrhythmia syndrome' },
      ],
      clinicalNotes: `Clinical practice updates:

1. **DOACs:** First-line for most AF patients; warfarin reserved for mechanical valves
2. **Catheter Ablation:** Consider earlier in disease course (EAST-AFNET 4)
3. **LAAO:** Stroke prevention alternative when anticoagulation not possible
4. **His Bundle/LBBP:** Conduction system pacing replacing RV pacing in many centers
5. **Leadless Pacemakers:** Growing adoption for single-chamber pacing needs
6. **Wearables:** Increasingly important for arrhythmia detection and monitoring
7. **Remote Monitoring:** Standard for ICDs, improves outcomes
8. **Shared Decision-Making:** Essential for device therapy, especially in primary prevention`,
    },
  },

  media: [
    {
      id: 'afib-ecg',
      type: 'diagram',
      filename: 'atrial-fibrillation-ecg.svg',
      title: 'Atrial Fibrillation ECG',
      description: 'Irregularly irregular rhythm without P waves',
    },
    {
      id: 'avnrt-mechanism',
      type: 'diagram',
      filename: 'avnrt-reentry-circuit.svg',
      title: 'AVNRT Reentry Circuit',
      description: 'Dual pathway physiology in AV node',
    },
    {
      id: 'blocks-ecg',
      type: 'diagram',
      filename: 'av-block-ecg-patterns.svg',
      title: 'AV Block ECG Patterns',
      description: 'First, second (Mobitz I and II), and third degree AV block',
    },
  ],

  citations: [
    {
      id: 'aha-acc-hrs-afib-2023',
      type: 'article',
      title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
      authors: ['January CT', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'aha-acc-hrs-va-2022',
      type: 'article',
      title: '2022 ACC/AHA/HRS Guideline for Cardiac Pacing and Cardiac Resynchronization Therapy',
      authors: ['Kusumoto FM', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'east-afnet-4',
      type: 'article',
      title: 'Early Therapy of Atrial Fibrillation for Stroke Prevention',
      authors: ['Kirchhof P', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'waldo-arrhythmias',
      type: 'textbook',
      title: 'Clinical Arrhythmology',
      authors: ['Waldo AL', 'Wit AL'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'topic-cardiovascular-testing', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Testing' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Cardiac Medications' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'electrophysiology', 'internal medicine'],
    keywords: ['AFib', 'SVT', 'AV block', 'VT', 'anticoagulation', 'ablation', 'pacemaker'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default arrhythmiasContent;
