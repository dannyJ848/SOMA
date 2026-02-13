/**
 * Arrhythmia - Comprehensive Educational Content
 *
 * Heart rhythm disorders including atrial fibrillation, atrial flutter,
 * supraventricular tachycardia, ventricular arrhythmias, and bradyarrhythmias
 */

import { EducationalContent } from '../../types';

export const arrhythmiaContent: EducationalContent = {
  id: 'arrhythmia',
  type: 'condition',
  name: 'Cardiac Arrhythmia',
  alternateNames: ['Arrhythmia', 'Dysrhythmia', 'Heart Rhythm Disorder', 'Irregular Heartbeat'],
  hpoId: 'HP:0011675',

  levels: {
    1: {
      level: 1,
      summary: 'An arrhythmia is an irregular heartbeat - the heart may beat too fast, too slow, or with an irregular pattern, affecting how well it pumps blood.',
      explanation: `## What is an Arrhythmia?

An arrhythmia (ah-RITH-me-ah) is a problem with the rate or rhythm of the heartbeat. During an arrhythmia, the heart can beat too fast, too slow, or with an irregular pattern.

## How the Heart Beats Normally

Think of your heart as having its own electrical system:

1. **Natural pacemaker** (SA node) sends an electrical signal
2. **Signal travels** through the upper chambers (atria)
3. **Crosses to lower chambers** (AV node)
4. **Causes the heart to squeeze** and pump blood

This happens 60-100 times per minute when you are resting.

## Types of Arrhythmias

### Heart Beating Too Fast (Tachycardia)

**Atrial Fibrillation (AFib):**
- Upper chambers quiver instead of beating normally
- Most common type of serious arrhythmia
- Increases risk of stroke

**Supraventricular Tachycardia (SVT):**
- Episodes of very fast heart rate
- Starts suddenly, can stop suddenly
- Can cause racing feeling, dizziness

**Ventricular Tachycardia:**
- Fast rhythm from lower chambers
- Can be dangerous

### Heart Beating Too Slow (Bradyarrhythmia)

**Sinus Bradycardia:**
- Heart rate slower than 60 beats per minute
- Can be normal in athletes
- May need treatment if causing symptoms

### Heart Beating Irregularly

**Premature Beats:**
- Extra beats that feel like a "skipped" beat or "flip-flop"
- Very common, usually not dangerous
- Can be triggered by caffeine, stress, lack of sleep

## Warning Signs

**Common symptoms:**
- Palpitations (feeling like your heart is racing, fluttering, or skipping)
- Fast or slow heartbeat
- Chest discomfort
- Shortness of breath
- Lightheadedness or dizziness
- Fainting or feeling like you might faint

**When to Call 911:**
- Chest pain along with irregular heartbeat
- Fainting or loss of consciousness
- Severe shortness of breath
- Dizziness along with fast heartbeat (especially >150 bpm)

## Causes

**Things that can cause arrhythmias:**
- Heart disease (previous heart attack, heart failure)
- High blood pressure
- Thyroid problems
- Diabetes
- Sleep apnea
- Stress and anxiety
- Certain medications
- Alcohol (especially binge drinking)
- Caffeine
- Smoking
- Imbalance of electrolytes (potassium, sodium, magnesium)
- Sometimes the cause is unknown

## Diagnosis

**Doctors use several tests:**
- **ECG (EKG)** - Records electrical activity of the heart
- **Holter monitor** - Portable ECG worn for 24-48 hours
- **Event monitor** - Worn for weeks, records when you push a button
- **Exercise stress test** - Records heart during exercise
- **Electrophysiology study** - Specialized heart catheterization

## Treatment

**Depending on the type and severity:**

**Lifestyle Changes:**
- Avoid triggers (caffeine, alcohol, stress)
- Manage stress
- Get enough sleep
- Quit smoking

**Medications:**
- To control heart rate
- To restore normal rhythm
- To prevent blood clots (blood thinners)

**Procedures:**
- Cardioversion (shock to reset rhythm)
- Catheter ablation (destroy small area of heart tissue causing problem)
- Pacemaker implantation (for slow heartbeats)
- ICD implantation (for dangerous fast rhythms)

## Living with Arrhythmia

**Most people with arrhythmias live normal, active lives.** Work with your healthcare provider to:
- Find the right treatment
- Manage risk factors
- Know when to seek help
- Monitor your condition

**Important:** If you have AFib or certain other arrhythmias, you may need blood thinners to prevent stroke.`,
      keyTerms: [
        { term: 'arrhythmia', definition: 'A problem with the rate or rhythm of the heartbeat', pronunciation: 'ah-RITH-me-ah' },
        { term: 'tachycardia', definition: 'Heart rate faster than 100 beats per minute', pronunciation: 'tak-ih-KAR-dee-ah' },
        { term: 'bradycardia', definition: 'Heart rate slower than 60 beats per minute', pronunciation: 'brad-ih-KAR-dee-ah' },
        { term: 'palpitations', definition: 'Feeling that your heart is beating too hard, too fast, or skipping beats' },
        { term: 'AFib', definition: 'Atrial fibrillation; irregular and often rapid heartbeat from upper chambers' },
        { term: 'ECG', definition: 'Electrocardiogram; test that records the electrical activity of the heart' },
        { term: 'pacemaker', definition: 'Small device placed under the skin that helps control abnormal heart rhythms' },
      ],
      analogies: [
        'The heart\'s electrical system is like the wiring in a house - when it malfunctions, lights flicker or don\'t work properly.',
        'Atrial fibrillation is like a quivering bag of worms - the upper chambers don\'t squeeze properly.',
        'A pacemaker is like a backup generator - it takes over when the heart\'s natural system fails.',
      ],
      examples: [
        'A person feels their heart racing after drinking several cups of coffee - this could be caffeine-triggered palpitations.',
        'Someone experiences episodes of sudden rapid heartbeat that start and stop abruptly - this could be SVT.',
        'An older person notices their heart sometimes feels irregular and they feel more tired - this could be AFib.',
      ],
      patientCounselingPoints: [
        'Learn to take your own pulse - report irregularities to your doctor',
        'Keep a diary of your arrhythmia episodes (triggers, time, duration)',
        'Avoid triggers that you identify (caffeine, alcohol, stress, lack of sleep)',
        'If prescribed blood thinners, take exactly as directed and watch for bleeding',
        'Wear medical alert jewelry identifying your condition',
        'Tell all your healthcare providers about your arrhythmia and medications',
        'Do not stop medications without consulting your doctor',
        'Report side effects like dizziness, fainting, or worsening palpitations',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac arrhythmias are disorders of cardiac impulse formation or conduction, classified by rate (tachyarrhythmias, bradyarrhythmias) and site of origin (supraventricular, ventricular), with clinical presentations ranging from benign to life-threatening.',
      explanation: `## Cardiac Arrhythmias

**Definition:** Disturbances of cardiac impulse formation, conduction, or both, resulting in heart rates that are too fast, too slow, or irregular.

## Normal Cardiac Conduction

**The Electrical Pathway:**

1. **SA Node (Sinoatrial)**
   - Located at the SVC-RA junction
   - "Natural pacemaker" of the heart
   - Fires 60-100 times per minute
   - Impulse spreads across atria

2. **AV Node (Atrioventricular)**
   - Located at the AV junction (near coronary sinus)
   - Only normal electrical connection between atria and ventricles
   - Delays impulse (0.12-0.20 seconds)
   - Allows atrial contraction before ventricular contraction

3. **Bundle of His**
   - Extends from AV node into interventricular septum
   - Divides into right and left bundle branches

4. **Purkinje Fibers**
   - Rapidly distribute impulse to ventricular myocardium
   - Cause coordinated ventricular contraction

## Classification of Arrhythmias

### By Rate

**Tachyarrhythmias (>100 bpm):**
- Sinus tachycardia
- Atrial fibrillation
- Atrial flutter
- Supraventricular tachycardia
- Ventricular tachycardia
- Ventricular fibrillation

**Bradyarrhythmias (<60 bpm):**
- Sinus bradycardia
- Sick sinus syndrome
- AV block (first, second, third degree)
- Atrial fibrillation with slow ventricular response

### By Site of Origin

**Supraventricular (Above AV Node):**
- Sinus node dysfunction
- Atrial tachycardia
- Atrial fibrillation
- Atrial flutter
- AV nodal reentrant tachycardia
- AV reentrant tachycardia (WPW)

**Ventricular (Below AV Node):**
- Premature ventricular contractions (PVCs)
- Ventricular tachycardia
- Ventricular fibrillation
- Accelerated idioventricular rhythm

## Common Arrhythmias

### Atrial Fibrillation

**Pathophysiology:**
- Multiple reentrant circuits in atria
- Atria quiver (350-600 bpm)
- AV node limits ventricular rate (usually 80-180 bpm)
- Loss of atrial kick (20-30% of cardiac output)
- Blood stasis in atria → thrombus formation → stroke

**ECG Findings:**
- Irregularly irregular rhythm
- No distinct P waves
- "Sawtooth" baseline or fine fibrillatory waves
- QRS narrow (unless baseline bundle branch block)

**Causes:**
- Hypertension (most common)
- Heart failure
- Valve disease (especially mitral)
- Alcohol ("holiday heart")
- Thyrotoxicosis
- Pulmonary disease
- Post-operative (especially cardiac surgery)

### Atrial Flutter

**Pathophysiology:**
- Single reentrant circuit (usually in right atrium)
- Atrial rate ~300 bpm
- Usually 2:1, 3:1, or 4:1 AV block
- Ventricular rate typically 150 bpm (2:1)

**ECG Findings:**
- "Sawtooth" flutter waves
- Regular ventricular rhythm (if fixed block)
- Variable block if on AV blocking drugs

### Supraventricular Tachycardia (SVT)

**Types:**

**AV Nodal Reentrant Tachycardia (AVNRT):**
- Most common SVT (60%)
- Reentry circuit within AV node
- Typically 150-250 bpm
- More common in females

**AV Reentrant Tachycardia (AVRT):**
- Accessory pathway (bypass tract)
- WPW syndrome (bundle of Kent)
- Orthodromic: Conduction down AV node, up accessory
- Antidromic: Conduction down accessory, up AV node

**Atrial Tachycardia:**
- Focus of automaticity outside SA node
- Can be multifocal (MAT) in pulmonary disease

### Ventricular Arrhythmias

**Premature Ventricular Contractions (PVCs):**
- Early ventricular depolarization
- Wide QRS (>0.12 sec)
- Different morphology than normal beats
- Compensatory pause usually follows

**Ventricular Tachycardia (VT):**
- Three or more consecutive PVCs
- Rate >100 bpm
- Sustained: >30 seconds or requiring termination
- Nonsustained: <30 seconds
- Can be stable or unstable

**Ventricular Fibrillation (VF):**
- Disorganized ventricular activity
- No cardiac output
- Cardiac arrest
- Immediate defibrillation required

### Bradyarrhythmias

**Sick Sinus Syndrome:**
- SA node dysfunction
- Can cause bradycardia, tachycardia (bradycardia-tachycardia syndrome)
- Common in elderly

**AV Block:**

**First Degree:**
- PR interval >0.20 seconds
- All impulses conducted
- Usually benign

**Second Degree Type I (Wenckebach):**
- Progressive PR prolongation until dropped beat
- Usually benign, often at AV node

**Second Degree Type II (Mobitz II):**
- Dropped beats without PR prolongation
- Often infranodal (His-Purkinje)
- More concerning, may progress

**Third Degree (Complete):**
- Atria and ventricles beat independently
- No relationship between P waves and QRS
- May need pacemaker`,
      keyTerms: [
        { term: 'SA node', definition: 'Sinoatrial node; the heart\'s natural pacemaker located in the right atrium' },
        { term: 'AV node', definition: 'Atrioventricular node; electrical connection between atria and ventricles' },
        { term: 'WPW', definition: 'Wolff-Parkinson-White syndrome; preexcitation syndrome with accessory pathway' },
        { term: 'reentry', definition: 'Circular movement of electrical impulse causing rapid heart rates' },
        { term: 'PVC', definition: 'Premature ventricular contraction; early beat originating from ventricles' },
        { term: 'sick sinus syndrome', definition: 'SA node dysfunction causing alternating slow and fast rhythms' },
        { term: 'AV block', definition: 'Delay or interruption of conduction from atria to ventricles' },
      ],
      analogies: [
        'AVNRT is like a car doing donuts - the electrical signal goes in circles within the AV node.',
        'AV block is like a traffic jam on a bridge - some or none of the traffic gets across.',
        'AFib is like a chaotic dance floor - everyone is moving but not in any coordinated pattern.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac arrhythmias result from disorders of impulse formation (automaticity, triggered activity) or conduction (reentry, block), with diagnosis based on ECG characteristics and management tailored to mechanism and clinical risk.',
      explanation: `## Arrhythmia Mechanisms and Diagnosis

## Mechanisms of Arrhythmias

### Disorders of Impulse Formation

**Automaticity:**
**Normal Automaticity:**
- SA node: 60-100 bpm
- AV node: 40-60 bpm
- Purkinje fibers: 20-40 bpm

**Enhanced Automaticity:**
- Catecholamine excess
- Hypokalemia
- Digoxin toxicity
- Ischemia, stretch

**Abnormal Automaticity:**
- Depolarized resting potential
- Partial depolarization leads to spontaneous firing
- Can occur in diseased tissue

**Triggered Activity:**

**Early Afterdepolarizations (EADs):**
- Occur during phase 2 or 3 of action potential
- Prolonged repolarization (long QT) predisposes
- Can initiate torsades de pointes

**Delayed Afterdepolarizations (DADs):**
- Occur after repolarization (phase 4)
- Calcium overload (digoxin, catecholamines)
- Can cause atrial or ventricular tachycardia

### Disorders of Impulse Conduction

**Reentry:** Most common mechanism for clinical tachyarrhythmias

**Requirements:**
1. Two parallel pathways with different conduction velocities and refractory periods
2. Unidirectional block in one pathway
3. Critical timing allowing circus movement

**Types:**

**Anatomical Reentry:**
- Fixed circuit (scar tissue, bypass tract)
- Example: AVRT in WPW, atrial flutter

**Functional Reentry:**
- No fixed anatomic obstacle
- Example: AVNRT, polymorphic VT

**Conduction Block:**

**First-Degree AV Block:**
- Delayed conduction (PR >0.20 sec)
- All impulses conducted

**Second-Degree AV Block:**

**Mobitz Type I (Wenckebach):**
- Progressive PR prolongation
- Dropped beat
- Narrow QRS (usually)
- Level: AV node (benign)

**Mobitz Type II:**
- Constant PR interval
- Intermittent dropped beats
- Often wide QRS
- Level: His-Purkinje (dangerous)

**Third-Degree (Complete) AV Block:**
- Complete AV dissociation
- Atria and ventricles beat independently
- Ventricular escape rhythm may be inadequate

## Diagnostic Approach

### ECG Analysis Systematic Approach

**Rate:**
- Atrial: Count P waves or R-R interval
- Ventricular: Count R waves in 6 seconds × 10

**Rhythm:**
- Regular vs irregular
- Pattern of irregularity
- Relationship between P waves and QRS

**P Waves:**
- Present? Normal morphology?
- One per QRS? More than one per QRS?
- Relationship to QRS (PR interval)

**PR Interval:**
- Normal: 0.12-0.20 seconds
- Prolonged (>0.20 sec)? Shortened (<0.12 sec)?
- Variable?

**QRS Duration:**
- Normal: <0.10 seconds
- Wide: ≥0.12 seconds (ventricular or aberrant conduction)

**T Waves:**
- Normal direction relative to QRS?
- Inverted? Peaked? Flat?

**QT Interval:**
- Corrected QT (QTc) using Bazett formula: QTc = QT/√RR
- Normal: <0.44 sec men, <0.46 sec women
- Prolonged QT predisposes to torsades

### Diagnostic Testing

**Holter Monitor:**
- 24-48 hours continuous recording
- Captures symptomatic arrhythmias
- Quantifies PVC frequency

**Event Monitor:**
- Loop recorder: Continuously records, erases, saves when activated
- Patch monitor: Up to 14 days
- Patient-activated when symptomatic

**Mobile Cardiac Telemetry:**
- Real-time transmission
- Up to 30 days
- Automatic and patient-triggered

**Implantable Loop Recorder:**
- Subcutaneous device
- Battery life up to 3 years
- For infrequent syncope, palpitations

**Electrophysiology Study:**
- Invasive catheterization
- Programmed stimulation
- Mapping and ablation
- Diagnostic and therapeutic

### Supraventricular Tachycardia Evaluation

**Differentiation by ECG:**

| Feature | AVNRT | AVRT | Atrial Tachycardia |
|---------|-------|------|-------------------|
| P wave location | In/near QRS (pseudo R') | After QRS (retrograde) | Before QRS |
| RP interval | <70 ms | >70 ms | Variable |
| QRS duration | Usually narrow | Usually narrow | Usually narrow |
| Initiation | Often PVC on terminal T | Often atrial premature | Varies |

**Adenosine Response:**
- AVNRT/AVRT: Terminates SVT
- Atrial flutter: Slows, transiently reveals waves
- Atrial tachycardia: No effect (may slow AV conduction)
- Sinus tachycardia: No effect

## Antiarrhythmic Drug Classification

**Vaughan Williams Classification:**

**Class I (Na+ channel blockers):**
- IA: Quinidine, procainamide, disopyramide
- IB: Lidocaine, mexiletine
- IC: Flecainide, propafenone

**Class II (Beta-blockers):**
- Metoprolol, propranolol, esmolol
- Reduce automaticity, slow AV conduction

**Class III (K+ channel blockers):**
- Amiodarone, sotalol, dofetilide, ibutilide
- Prolong action potential, ERP
- Increased risk of torsades

**Class IV (Ca2+ channel blockers):**
- Verapamil, diltiazem
- Slow AV node conduction

**Others:**
- Digoxin (vagomimetic, slows AV node)
- Adenosine (ultra-short acting AV block)
- Atropine (vagolytic, increases sinus rate)

## Risk Stratification

**Sudden Cardiac Death Risk:**
- Prior cardiac arrest
- LVEF ≤35% (ischemic cardiomyopathy)
- Family history of SCD
- Hypertrophic cardiomyopathy
- Long QT syndrome
- Brugada syndrome
- ARVC

**Stroke Risk in AFib (CHA₂DS₂-VASc Score):**

| Risk Factor | Points |
|-------------|--------|
| Congestive HF | 1 |
| Hypertension | 1 |
| Age ≥75 | 2 |
| Diabetes | 1 |
| Stroke/TIA | 2 |
| Vascular disease | 1 |
| Age 65-74 | 1 |
| Sex category (female) | 1 |

Score ≥2 in men, ≥3 in women: Consider anticoagulation

**Bleeding Risk (HAS-BLED):**
- Hypertension, Abnormal renal/liver, Stroke, Bleeding, Labile INR, Elderly, Drugs/alcohol`,
      keyTerms: [
        { term: 'automaticity', definition: 'Spontaneous depolarization of cardiac cells without external stimulus' },
        { term: 'afterdepolarization', definition: 'Abnormal depolarization occurring during or after repolarization' },
        { term: 'reentry circuit', definition: 'Circular pathway for electrical impulse causing tachycardia' },
        { term: 'QTc', definition: 'QT interval corrected for heart rate; prolonged QT increases torsades risk' },
        { term: 'torsades de pointes', definition: 'Polymorphic VT associated with long QT; can degenerate to VF' },
        { term: 'adenosine', definition: 'Ultra-short acting drug causing transient AV block; terminates many SVTs' },
        { term: 'EP study', definition: 'Invasive electrophysiology testing for arrhythmia diagnosis and treatment' },
      ],
      clinicalNotes: 'In wide-complex tachycardia, assume VT until proven otherwise. Treat as VT if uncertain. Adenosine can be dangerous if wide-complex tachycardia is actually VT - use with caution. Always evaluate QT interval before prescribing QT-prolonging drugs. For unexplained syncope, consider EP study and Holter monitoring.',
    },
    4: {
      level: 4,
      summary: 'Management of arrhythmias requires accurate diagnosis, risk stratification for stroke and sudden death, rhythm vs rate control strategies, catheter ablation for many SVTs, and device therapy for bradyarrhythmias and ventricular arrhythmias.',
      explanation: `## Advanced Arrhythmia Management

## Atrial Fibrillation Management

### Rhythm vs Rate Control

**Rhythm Control (Restore Sinus Rhythm):**

**Candidates:**
- Symptomatic despite rate control
- Younger patients (<65)
- Recent-onset AFib (<12 months)
- AFib as cause of HF
- First episode

**Methods:**
- Electrical cardioversion
- Pharmacologic cardioversion
- Catheter ablation

**Rate Control (Accept AFib, Control VR):**

**Candidates:**
- Older patients (>65)
- Long-standing AFib (>1 year)
- Minimal symptoms
- Prior failed cardioversion

**Target Resting HR:** <110 bpm (lenient) or <80 bpm (strict)

**Rate Control Agents:**
- Beta-blocker (first-line)
- Non-DHP CCB (diltiazem, verapamil)
- Digoxin (add-on, sedentary)
- Amiodarone (if other agents fail or contraindicated)

### Stroke Prevention

**Anticoagulation Decision:**

**CHA₂DS₂-VASc Score:**
- Score 0 (men) or 1 (women): No anticoagulation
- Score 1 (men): Consider anticoagulation
- Score ≥2 (men) or ≥3 (women): Anticoagulate

**Anticoagulant Options:**

**DOACs (Preferred):**
- Apixaban 5 mg BID (2.5 if 2 of: age ≥80, weight ≤60 kg, Cr ≥1.5)
- Rivaroxaban 20 mg daily (15 if Cr 15-49)
- Dabigatran 150 mg BID (110 if high bleeding risk, age ≥80, Cr 30-50)
- Edoxaban 60 mg daily (30 if Cr 15-50, weight ≤60, P-gp inhibitors)

**Warfarin:**
- Mechanical heart valves
- Moderate-severe mitral stenosis
- CrCl <15 or dialysis (caution with DOACs)
- Target INR 2.0-3.0

**Bleeding Risk Assessment (HAS-BLED):**
- Score ≥3 indicates high bleeding risk
- High bleeding risk does NOT contraindicate anticoagulation
- Address modifiable risk factors
- Consider DOACs (lower bleeding than warfarin)

### Cardioversion

**Electrical Cardioversion:**
- Synchronized shock starting at 120-200 J
- Anticoagulate if AFib >48 hours or unknown duration
- TEE to rule out thrombus if not anticoagulated
- Anticoagulate 3 weeks before and 4 weeks after

**Pharmacologic Cardioversion:**

| Drug | Success Rate | Time to Conversion | Comments |
|------|--------------|-------------------|----------|
| Amiodarone | 60-80% | Hours-days | Safe if LV dysfunction |
| Flecainide | 60-90% | Hours-days | Avoid if structural HD |
| Propafenone | 60-80% | Hours-days | Avoid if structural HD |
| Dofetilide | 70-90% | Hours-days | Hospital initiation required |
| Ibutilide | 50-70% | Minutes | Risk of torsades (3-5%) |
| Vernakalant | 50-70% | Minutes | Not FDA-approved |

### Catheter Ablation

**Indications (Class I):**
- Symptomatic paroxysmal AFib refractory/intolerant to ≥1 antiarrhythmic
- Selected patients with persistent AFib

**Technique:**
- Pulmonary vein isolation (PVI)
- Additional lines, ablation of non-PV triggers for persistent AFib
- Cryoballoon or radiofrequency

**Success:**
- Paroxysmal: 70-80% single procedure, higher with repeat
- Persistent: 50-70% single procedure
- Complications: 2-5% (tamponade, PV stenosis, stroke, phrenic nerve injury)

## SVT Management

### Acute Management

**Hemodynamically Unstable:**
- Immediate synchronized cardioversion

**Hemodynamically Stable:**

**Vagal Maneuvers (first attempt):**
- Modified Valsalva (forceful expiration against resistance for 15 sec, then supine with legs raised)
- Carotid sinus massage (one side at a time, avoid if carotid disease)
- Cold water immersion of face
- Success: 20-25%

**Adenosine:**
- 6 mg rapid IV push (follow with saline flush)
- If ineffective: 12 mg
- If still ineffective: 12 mg
- Onset: 10-20 seconds, Duration: <10 seconds
- Side effects: Flushing, chest discomfort, dyspnea, brief asystole

**Caution:**
- Severe asthma/COPD (bronchospasm)
- Carotid disease (avoid vagal maneuvers)
- Long QT (adenosine can cause AFib)
- Heart transplant (denervated heart)

**Alternative Agents:**
- Verapamil 2.5-5 mg IV (avoid if decreased EF)
- Diltiazem 0.25 mg/kg IV
- Beta-blocker (metoprolol 5 mg IV, esmolol drip)

### Chronic Management

**Catheter Ablation:**
- AVNRT: >95% success, low complication rate
- AVRT: >95% success
- Atrial tachycardia: 80-90% success
- First-line therapy for most SVTs

**Prophylactic Medications:**
- Beta-blocker or CCB (first-line)
- Flecainide or propafenone (if no structural HD)
- Sotalol, dofetilide, amiodarone (if others fail)

## Ventricular Arrhythmia Management

### PVCs

**Asymptomatic PVCs:**
- No treatment needed
- Exclude structural HD (echo)

**Symptomatic PVCs:**
- Beta-blocker first-line
- Consider catheter ablation if frequent (>10,000/day)

**PVC-Induced Cardiomyopathy:**
- PVC burden >15-20%
- Ablation improves EF in 70-80%

### Ventricular Tachycardia

**Unstable VT:**
- Immediate synchronized cardioversion
- Consider amiodarone if recurrent

**Stable Monomorphic VT:**
- Amiodarone 150 mg IV over 10 min, then 1 mg/min for 6 hours
- Sotalol 1-1.5 mg/kg IV (if QT normal)
- Procainamide 15 mg/kg IV
- Lidocaine 1-1.5 mg/kg IV (if ischemic)

**Polymorphic VT:**
- If prolonged QT: Treat torsades (magnesium 2 g IV)
- If normal QT: Treat as ischemic VT (lidocaine, amiodarone)

### Ventricular Fibrillation

**Immediate Defibrillation:**
- 200 J (biphasic) or 360 J (monophasic)
- Resume CPR immediately after shock
- Epinephrine 1 mg IV q3-5 min
- Amiodarone 300 mg IV after 3rd shock

### Long-Term Management

**ICD Indications (Class I):**
- Survivors of cardiac arrest (VT/VF)
- Spontaneous sustained VT
- Syncope with inducible VT on EP study
- LVEF ≤35% (ischemic) or ≤35% (non-ischemic) ≥40 days post-MI/3 months revascularization
- Familial or inherited conditions with high SCD risk (HCM, ARVC, long QT)

**ICD plus Medical Therapy:**
- Beta-blocker for all
- Amiodarone or sotalol if recurrent VT
- Catheter ablation for recurrent VT despite drugs

## Bradyarrhythmia Management

### Indications for Permanent Pacing (Class I)

**Sinus Node Dysfunction:**
- Documented symptomatic bradycardia
- Symptomatic chronotropic incompetence

**AV Block:**

**Third-Degree AV Block:**
- Symptomatic
- Asymptomatic with:
  - HR <40 bpm
  - Pause ≥3 seconds
  - Escape rhythm below AV node

**Second-Degree Mobitz II:**
- Symptomatic or asymptomatic

**Bifascicular Block:**
- Alternating bundle branch block
- With Type II second-degree AV block

**Post-AV Node Ablation:**
- For rate control in AFib

**Pacing Mode Selection:**
- Sinus node dysfunction: DDD or sinus node-specific algorithms
- AV block: DDD
- AFib: VVIR or single-chamber ICD if indication

### Reversible Causes of Bradycardia

**Evaluate for:**
- Medications (beta-blockers, CCBs, digoxin, antiarrhythmics)
- Electrolyte abnormalities (hyperkalemia)
- Hypothyroidism
- Lyme disease
- Sleep apnea
- Increased intracranial pressure
- Athlete's heart (benign)`,
      keyTerms: [
        { term: 'rhythm control', definition: 'Strategy to restore and maintain sinus rhythm in AFib' },
        { term: 'rate control', definition: 'Strategy to control ventricular rate while allowing AFib to persist' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; apixaban, rivaroxaban, dabigatran, edoxaban' },
        { term: 'TEE', definition: 'Transesophageal echocardiogram; best test for LA thrombus detection' },
        { term: 'PVI', definition: 'Pulmonary vein isolation; catheter ablation technique for AFib' },
        { term: 'chronotropic incompetence', definition: 'Inability to increase heart rate appropriately with activity' },
        { term: 'bifascicular block', definition: 'Block in two of three fascicles (RBBB + LAFB, RBBB + LPFB, LBBB)' },
      ],
      clinicalNotes: 'Before cardioverting AFib >48 hours or unknown duration, either anticoagulate for 3 weeks OR perform TEE to exclude thrombus. In wide-complex tachycardia, assume VT. Adenosine is generally safe in regular narrow-complex tachycardia but can cause AFib which may conduct 1:1 in WPW - avoid if WPW suspected. For PVC-induced cardiomyopathy, burden >15% is typical threshold.',
    },
    5: {
      level: 5,
      summary: 'Contemporary arrhythmia management integrates evidence-based stroke prevention, rhythm and rate control strategies, catheter ablation, device therapy, and emerging technologies guided by clinical trials and guidelines.',
      explanation: `## Evidence-Based Arrhythmia Management

## Atrial Fibrillation: Key Trials

### Rate vs Rhythm Control

**AFFIRM Trial (2002):**
- Rate control non-inferior to rhythm control for mortality
- Rhythm control had more hospitalizations, drug side effects
- Established rate control as acceptable strategy

**RACE Trial:**
- Similar results to AFFIRM
- Rate control acceptable for permanent AFib

**EAST-AFNET 4 (2020):**
- Early rhythm control (within 1 year) reduced CV outcomes
- Benefit driven by stroke reduction
- Changed practice toward earlier rhythm control

### Stroke Prevention

**RE-LY (Dabigatran vs Warfarin):**
- Dabigatran 150 mg: Lower stroke, similar bleeding
- Dabigatran 110 mg: Similar stroke, lower bleeding
- First DOAC showing superiority to warfarin

**ROCKET-AF (Rivaroxaban):**
- Non-inferior to warfarin for stroke prevention
- Similar bleeding, but more GI bleeding

**ARISTOTLE (Apixaban):**
- Lower stroke, lower bleeding, lower mortality vs warfarin
- Best safety profile among DOACs

**ENGAGE AF-TIMI 48 (Edoxaban):**
- Non-inferior for stroke, lower bleeding

**Meta-analyses:**
- DOACs: Lower intracranial hemorrhage, similar GI bleeding
- All DOACs non-inferior or superior to warfarin

**Left Atrial Appendage Occlusion:**

**PROTECT AF/Prevail (Watchman):**
- Non-inferior to warfarin for stroke prevention
- Complications decreasing with experience

**PRAGUE-17:**
- LAA occlusion non-inferior to DOACs

**Indications:**
- Contraindication to long-term anticoagulation
- High bleeding risk on anticoagulation
- Patient preference

### Catheter Ablation

**CABANA Trial (2018):**
- Intention-to-treat: No mortality benefit with ablation
- As-treated: Significant benefit with ablation
- Ablation superior for symptom control, quality of life

**EAST-AFNET 4 Subanalysis:**
- Catheter ablation beneficial in early rhythm control

**STOP AF First (Cryoballoon):**
- Cryoballoon superior to drug therapy

**Current Practice:**
- First-line ablation for paroxysmal AFib (Class I in 2023 guidelines)
- Earlier intervention preferred

## SVT Ablation

**High Success Rates:**
- AVNRT: >95% with radiofrequency
- AVRT: >95% with radiofrequency
- Typical atrial flutter: >95%

**Cryoablation for AVNRT:**
- FIRE AND ICE trial: Non-inferior to RF
- Similar success, fewer recurrences with RF

## Ventricular Arrhythmias

### ICD Therapy

**MADIT I (1996):**
- ICD improved survival in ischemic cardiomyopathy with inducible VT

**MADIT II (2002):**
- ICD benefit in post-MI patients with LVEF ≤30%
- Established primary prevention indication

**SCD-HeFT:**
- ICD benefit in non-ischemic cardiomyopathy, LVEF ≤35%

**DANISH Trial:**
- No overall ICD benefit in non-ischemic cardiomyopathy
- Age <68 derived benefit

**Current Guidelines:**
- Ischemic cardiomyopathy: LVEF ≤35%, ≥40 days post-MI, ≥3 months post-revascularization
- Non-ischemic: LVEF ≤35%, NYHA II-III despite optimal medical therapy

### Subcutaneous ICD (S-ICD)

**Advantages:**
- No transvenous leads
- Lower infection risk
- No need for venous access

**Limitations:**
- No pacing capability
- Cannot treat VT with antitachycardia pacing
- Larger device

**IDE Study & EFFORTLESS:**
- Non-inferior to transvenous ICD
- Appropriate for patients without pacing indication

### Wearable Defibrillator

**WEARIT/BIROAD:**
- Bridge to decision or recovery
- For patients at temporary SCD risk but not immediate ICD candidates
- Compliance key

### Catheter Ablation for VT

**VT Ablation in Structural Heart Disease:**
- SMASH-VT: Reduced ICD shocks
- VANISH: Improved outcomes with ablation

**Indications:**
- Recurrent VT despite medical therapy
- Storm (>3 VT episodes in 24 hours)
- As alternative to drugs or ICD

## Bradycardia and Pacing

### Leadless Pacing

**Micra Transcatheter Pacing System:**
- Micra IDE study: Safe, effective
- Advantages: No pocket, no leads
- Micra CED: Comparing leadless to transvenous

**Indications:**
- Single-chamber ventricular pacing needed
- High infection risk
- Limited venous access

### Conduction System Pacing

**His Bundle Pacing:**
- Paces native conduction system
- More physiological than RV apical pacing
- Prevents pacing-induced cardiomyopathy

**Left Bundle Branch Pacing:**
- Alternative to His bundle pacing
- Easier to achieve, more stable
- Growing evidence base

### Managed Ventricular Pacing (MVP)

**SAVE PACe Trial:**
- Minimizing RV pacing reduces AFib
- Algorithms to promote native conduction
- Standard in modern pacemakers

## Emerging Therapies

### Stroke Prevention Beyond Anticoagulation

**LAA Ligation/Exclusion:**
- LARIAT: Surgical LAA exclusion
- Amulet: Alternative to Watchman

### AFib Ablation Advances

**Pulsed Field Ablation:**
- Non-thermal ablation using electric fields
- Avoids esophageal, phrenic nerve injury
- Early trials showing promise

**Laser Balloon:**
- Alternative energy source
- Continuous visualization

### Genetic Arrhythmia Syndromes

**Long QT Syndrome:**
- Beta-blockers first-line
- ICD for cardiac arrest or breakthrough events
- Avoid QT-prolonging drugs

**Brugada Syndrome:**
- ICD for cardiac arrest or documented VT
- Quinidine for VT storm
- Avoid sodium channel blockers

**Catecholaminergic Polymorphic VT:**
- Beta-blockers (nadolol preferred)
- Flecainide add-on
- ICD if breakthrough events

## Special Populations

### Post-Cardiac Surgery AFib

**Common:**
- Occurs in 30% after CABG, 50% after valve surgery
- Usually self-limited

**Management:**
- Rate control with beta-blocker first-line
- Anticoagulate if persists >48 hours
- Consider amiodarone prophylaxis

### Hyperthyroid-Associated AFib

**Pathophysiology:**
- Increased beta-adrenergic sensitivity
- Shortened refractory period

**Management:**
- Treat hyperthyroidism
- Beta-blocker for rate control
- Anticoagulate based on stroke risk
- Often resolves after thyroid treatment

### Pregnancy-Related Arrhythmias**

**Common:**
- PVCs, SVT more common

**Management:**
- Beta-blockers preferred
- Avoid amiodarone (fetal thyroid effects)
- DC cardioversion safe if needed

### Athletic Population

**Concerns:**
- Bradycardia normal (athlete's heart)
- Increased PVC frequency may be benign

**Recommendations:**
- Disqualify from competitive sports if:
  - Symptomatic VT not fully evaluated/treated
  - Long QT with symptoms
  - HCM, ARVC, other high-risk conditions
- Shared decision-making for ICD in athletes

## COVID-19 and Arrhythmias

**Arrhythmic Complications:**
- Palpitations (20-30%)
- Atrial arrhythmias (10-20%)
- Nonspecific ST/T changes
- QT prolongation from medications

**Management:**
- Treat underlying COVID-19
- Be cautious with QT-prolonging drugs
- Anticoagulate if AFib based on usual criteria

**Vaccine-Associated Myocarditis:**
- Rare, usually mild
- Arrhythmias possible
- Complete recovery typical`,
      keyTerms: [
        { term: 'AFFIRM trial', definition: 'Landmark trial showing rate control non-inferior to rhythm control in AFib' },
        { term: 'EAST-AFNET 4', definition: 'Trial showing early rhythm control reduces CV outcomes in AFib' },
        { term: 'CABANA trial', definition: 'RCT of catheter ablation vs drug therapy for AFib' },
        { term: 'MADIT II', definition: 'Trial establishing primary prevention ICD in post-MI LVEF≤30%' },
        { term: 'S-ICD', definition: 'Subcutaneous ICD; leadless defibrillator implanted in chest wall' },
        { term: 'His bundle pacing', definition: 'Pacing the native His bundle for physiological activation' },
        { term: 'pulsed field ablation', definition: 'Non-thermal ablation using electric fields; avoids thermal injury' },
      ],
      clinicalNotes: `Key Practice Changes (2020-2024):

1. **Early Rhythm Control:** EAST-AFNET 4 supports rhythm control within 1 year of AFib diagnosis
2. **DOACs Preferred:** All DOACs at least non-inferior to warfarin, apixaban has best safety profile
3. **AFib Ablation First-Line:** 2023 guideline recommendation for symptomatic paroxysmal AFib
4. **LAA Occlusion:** Reasonable alternative to anticoagulation for selected patients
5. **Conduction System Pacing:** His or LBBB pacing superior to RV apical when pacing needed
6. **Subcutaneous ICD:** Consider for patients without pacing indication
7. **ICD Timing:** Wait ≥40 days post-MI, ≥3 months post-revascularization for recovery

Important Pearls:
- All AFib >48 hours needs ≥3 weeks anticoagulation before cardioversion OR TEE
- CHA₂DS₂-VASc ≥2 (men) or ≥3 (women): Anticoagulate regardless of rhythm
- HAS-BLED assesses bleeding risk but does NOT contraindicate anticoagulation
- Assume VT until proven otherwise for wide-complex tachycardia
- Adenosine terminates AVNRT/AVRT but not atrial tachycardia or sinus tachycardia`,
      patientCounselingPoints: [
        'If prescribed anticoagulant, take exactly as directed - do not skip doses',
        'Report any bleeding or bruising while on anticoagulants',
        'Wear medical alert bracelet identifying your condition and device if present',
        'Avoid triggers known to cause your arrhythmia (caffeine, alcohol, stress)',
        'Learn to take your pulse and report abnormal rhythms to your doctor',
        'Keep a diary of arrhythmia episodes including triggers and duration',
        'If you have an ICD, carry your device card and inform security at airports',
        'For AFib: Understand your stroke risk and why anticoagulation is important',
        'For SVT: Learn vagal maneuvers (like Valsalva) that may terminate episodes',
        'Report worsening symptoms, dizziness, fainting, or chest pain immediately',
      ],
    },
  },

  media: [
    {
      id: 'ecg-afib',
      type: 'diagram',
      filename: 'ecg-atrial-fibrillation.svg',
      title: 'Atrial Fibrillation ECG',
      description: 'Irregularly irregular rhythm, absent P waves',
    },
    {
      id: 'conduction-system',
      type: 'diagram',
      filename: 'cardiac-conduction-system.svg',
      title: 'Cardiac Electrical Conduction System',
      description: 'SA node, AV node, bundle of His, Purkinje fibers',
    },
    {
      id: 'av-blocks',
      type: 'diagram',
      filename: 'av-block-comparison.svg',
      title: 'Degrees of AV Block',
      description: 'First, second (type I and II), and third degree AV block',
    },
    {
      id: 'reentry-circuit',
      type: 'animation',
      filename: 'reentry-circuit.mp4',
      title: 'Reentry Circuit Mechanism',
      description: 'Animation showing circus movement tachycardia',
    },
  ],

  citations: [
    {
      id: 'aha-afib-guideline-2023',
      type: 'article',
      title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
      authors: ['January CT', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'aha-arrhythmia-guideline-2018',
      type: 'article',
      title: '2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay',
      authors: ['Kusumoto FM', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'statPearls-arrhythmia',
      type: 'website',
      title: 'Cardiac Arrhythmias',
      authors: ['Kaur H', 'O\'Neill WS'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554500/',
    },
  ],

  crossReferences: [
    { targetId: 'atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'cardiovascular-testing', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Testing' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'electrophysiology', 'arrhythmia'],
    keywords: ['AFib', 'SVT', 'VT', 'palpitations', 'ECG', 'pacemaker', 'ICD'],
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

export default arrhythmiaContent;
