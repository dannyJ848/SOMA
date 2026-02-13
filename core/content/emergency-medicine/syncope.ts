/**
 * Syncope - Evaluation, Differential Diagnosis, and Risk Stratification
 *
 * Comprehensive content on syncope including causes (vasovagal, cardiac,
 * orthostatic), evaluation approach, and red flags requiring admission.
 */

import { EducationalContent } from '../types';

export const syncope: EducationalContent = {
  id: 'emergency-syncope',
  type: 'condition',
  name: 'Syncope',
  alternateNames: ['Fainting', 'Passing Out', 'Vasovagal Syncope', 'Neurocardiogenic Syncope'],

  levels: {
    1: {
      level: 1,
      summary: 'Syncope means fainting or passing out. It happens when your brain doesn\'t get enough blood for a short time. Most causes aren\'t serious, but some need medical attention.',
      explanation: `## What Is Syncope?

Syncope (pronounced "SINK-uh-pee") is the medical word for fainting or passing out. It happens when you temporarily lose consciousness because your brain isn't getting enough blood.

**Good news:** Most fainting is harmless and happens once.
**Important:** Some causes ARE serious and need a doctor's evaluation.

## What Happens When You Faint

Before fainting, you might feel:
- Dizziness or lightheadedness
- Vision getting dark or blurry
- Nausea or feeling "sick to your stomach"
- Feeling warm or sweaty
- Ringing in your ears
- Weakness

During fainting:
- You lose consciousness briefly
- You might fall down
- You're unresponsive for a few seconds to minutes

After waking up:
- You might feel confused at first
- Usually you recover quickly (within minutes)
- You might feel weak or tired

## Common Causes of Fainting

### 1. Vasovagal Syncope (Most Common)

**What it is:** Your body overreacts to triggers, causing your heart rate to slow and blood vessels to widen

**Triggers:**
- Seeing blood or getting a shot
- Standing for a long time
- Strong emotions (fear, pain, distress)
- Dehydration
- Hot environments

**Why it happens:** Your brain thinks there's an emergency, but there isn't. Your body's response is too strong.

### 2. Orthostatic Hypotension (Position Changes)

**What it is:** Blood pressure drops when you stand up too quickly

**Why it happens:** Blood pools in your legs instead of going to your brain

**More likely if:**
- Dehydrated
- Taking certain blood pressure medicines
- Pregnant
- Elderly
- Been lying down for a long time

### 3. Heart Problems

**What it is:** Your heart isn't pumping enough blood to your brain

**Causes:**
- Abnormal heart rhythms
- Heart valve problems
- Heart muscle weakness

**These are serious causes!** Need medical evaluation.

### 4. Other Causes

- **Dehydration:** Not enough fluid in your body
- **Low blood sugar:** Your brain needs sugar for energy
- **Anemia:** Not enough red blood cells to carry oxygen
- **Medication side effects:** Blood pressure medicines, antidepressants

## Warning Signs (Red Flags)

**Call 911 or seek immediate care if:**
- Fainting while exercising or during physical activity
- Chest pain or palpitations before fainting
- Shortness of breath
- Family history of sudden death
- Pregnancy
- Age >50 with first-time fainting
- Heart disease history
- Fainting without warning (no symptoms before)
- Repeated fainting in a short time

## What To Do When Someone Faints

**If you see someone faint:**

1. **Help them lie down**
   - Flat on their back
   - Raise their legs slightly if possible

2. **Loosen tight clothing**
   - Collars, belts, ties

3. **Check for breathing**
   - If not breathing, call 911 and start CPR

4. **Don't give them anything to eat or drink**
   - Wait until they're fully alert

5. **Stay with them**
   - Until they're fully recovered
   - Call 911 if they don't wake up within a minute

## Preventing Fainting

**If you're prone to fainting:**

- **Stay hydrated:** Drink plenty of water
- **Avoid triggers:** Identify what makes you faint
- **Rise slowly:** When standing up from lying or sitting
- **Move your legs:** If standing for long periods
- **Avoid hot environments:** Or stay cool in them
- **Eat regularly:** To prevent low blood sugar
- **Tell your doctor:** Especially if it happens often

## When To See a Doctor

**See a doctor after fainting if:**
- First time it's ever happened
- You're over age 50
- You have heart disease
- You're pregnant
- It happened during exercise
- You have chest pain, palpitations, or shortness of breath
- You have diabetes or take medications
- You've fainted multiple times

## Remember

**Most fainting is NOT serious!**

But because some causes ARE dangerous, it's important to tell a doctor about it, especially if it happens to you or someone you care about.

**Better safe than sorry - get it checked out!**`,
      keyTerms: [
        { term: 'syncope', definition: 'Temporary loss of consciousness (fainting) caused by decreased blood flow to the brain' },
        { term: 'vasovagal syncope', definition: 'Fainting caused by the body\'s overreaction to triggers like seeing blood or standing too long' },
        { term: 'orthostatic hypotension', definition: 'Blood pressure drops when standing up, causing dizziness or fainting' },
        { term: 'palpitations', definition: 'Feeling like your heart is beating too hard, too fast, or skipping beats' },
        { term: 'dehydration', definition: 'Not having enough water in your body; can cause low blood pressure and fainting' },
      ],
      analogies: [
        'Your blood vessels are like garden hoses - if they suddenly widen, pressure drops and water doesn\'t reach where it needs to go.',
        'Vasovagal syncope is like a car\'s cruise control malfunctioning - the body overreacts and slows everything down.',
        'Orthostatic hypotension is like water rushing down from a water tower when you open the valve too fast - pressure drops everywhere.',
      ],
      examples: [
        'A 16-year-old faints while getting a blood test. She feels dizzy, nauseated, and then passes out. She wakes up quickly after lying down. This is classic vasovagal syncope.',
        'An elderly man stands up quickly from his recliner and feels dizzy, then faints. He\'s taking blood pressure medicine. This is orthostatic hypotension.',
        'A woman faints while jogging. She felt her heart racing before she went down. This is concerning and needs cardiac evaluation.',
      ],
      patientCounselingPoints: [
        'If you feel like you\'re going to faint, lie down or sit down immediately. Don\'t try to push through it.',
        'Stay hydrated, especially in hot weather or when exercising',
        'Rise slowly from lying or sitting positions',
        'Tell your doctor about any fainting episodes, especially if you have heart disease',
      ],
    },

    2: {
      level: 2,
      summary: 'Syncope is transient loss of consciousness due to cerebral hypoperfusion. Evaluation focuses on identifying dangerous causes (cardiac, arrhythmic) versus benign causes (vasovagal, orthostatic).',
      explanation: `## What Is Syncope?

Syncope is defined as a **transient loss of consciousness (TLOC)** due to cerebral hypoperfusion (not enough blood to the brain) with:
- **Rapid onset**
- **Short duration** (usually seconds to minutes)
- **Spontaneous, complete recovery**

**Key distinction:** Syncope is different from other causes of TLOC:
- **Seizure:** Usually has postictal confusion, tongue biting, incontinence
- **Stroke:** Usually causes persistent deficits, not transient loss of consciousness
- **Hypoglycemia:** Resolves with glucose, not always spontaneous

## Classification of Syncope

### Reflex (Neurally Mediated) Syncope

**Vasovagal syncope:**
- Most common cause of syncope (up to 40% of cases)
- Triggered by emotional distress, pain, medical procedures
- **Prodrome:** Nausea, sweating, warmth, graying out of vision
- **Situation:** Often occurs while standing
- **Recovery:** Rapid, with residual fatigue

**Situational syncope:**
- Specific triggers:
  - Cough syncope (chronic cough, COPD)
  - Micturition syncope (urination, often in elderly men at night)
  - Deglutition syncope (swallowing)
  - Carotid sinus syncope (tight collars, turning head)

### Orthostatic Hypotension

**Definition:** Decrease in systolic BP ≥20 mmHg or diastolic ≥10 mmHg within 3 minutes of standing

**Causes:**
- **Volume depletion:** Dehydration, bleeding, diuretics
- **Medications:** Antihypertensives, antidepressants, Parkinson's drugs
- **Autonomic failure:** Diabetes, Parkinson's, MSA
- **Age-related:** Decreased baroreceptor reflex

**POTS (Postural Tachycardia Syndrome):**
- Heart rate increases ≥30 bpm on standing
- More common in young women
- Associated with fatigue, palpitations, exercise intolerance

### Cardiovascular Syncope

**Arrhythmic causes:**
- **Bradyarrhythmias:** Sinus node dysfunction, AV block
- **Tachyarrhythmias:** VT, SVT, AF with rapid ventricular response
- **Drug-induced:** Beta-blockers, calcium channel blockers, antiarrhythmics
- **Channelopathies:** Long QT, Brugada, arrhythmogenic RV cardiomyopathy

**Structural heart disease:**
- **Aortic stenosis:** Syncope with exertion (poor prognosis!)
- **Hypertrophic cardiomyopathy:** Exertional syncope
- **Pulmonary hypertension:** Exertional syncope
- **Myocardial infarction:** Ischemia causing arrhythmia or pump failure

**Other cardiovascular:**
- **Pulmonary embolism:** Syncope in massive PE
- **Aortic dissection:** Can cause syncope from pain, tamponade, or stroke
- **Cardiac tamponade:** Obstructive shock

## Red Flags: When to Worry

**High-risk features requiring workup:**

| Feature | Concern |
|---------|---------|
| Exertional syncope | Structural heart disease, arrhythmia |
| Family history of sudden death | Channelopathy, cardiomyopathy |
| Abnormal ECG | Arrhythmia, ischemia, structural disease |
| Heart failure symptoms | Pump failure, arrhythmia |
| Palpitations before syncope | Arrhythmia |
| Chest pain before syncope | Ischemia, aortic dissection |
| Shortness of breath | Heart failure, PE |
| Severe anemia | Volume depletion, heart disease |

**Syncope during or after exercise is particularly concerning!**

## Evaluation Approach

### History

**Key questions:**
- **What were you doing when it happened?** (exertion vs rest)
- **Did you have warning symptoms?** (prodrome vs sudden)
- **How long were you unconscious?**
- **Did you have any jerking movements?** (seizure vs syncope)
- **Any chest pain, palpitations, or shortness of breath?**
- **Previous episodes?** (recurrence)
- **Medications?** (especially new ones)
- **Family history?** (sudden death, arrhythmias, cardiomyopathy)

**Witness accounts are valuable!**

### Physical Examination

**Vital signs:**
- **Lying and standing BP:** To assess orthostatic changes
- **Heart rate and rhythm:** Irregularities
- **Respiratory rate:** Tachypnea suggests PE, pneumonia
- **Temperature:** Fever suggests infection

**Cardiovascular exam:**
- **Murmurs:** Aortic stenosis (systolic), HOCM (systolic)
- **Gallops:** Heart failure (S3, S4)
- **Pericardial rub:** Pericarditis
- **Unequal pulses:** Aortic dissection

**Neurologic exam:**
- **Postictal state:** Suggests seizure
- **Focal deficits:** Stroke, TIA
- **Meningismus:** SAH, meningitis (rare causes of syncope)

### Diagnostic Testing

**ECG (mandatory!):**
- **Ischemia:** ST changes, T-wave inversions, Q waves
- **Arrhythmia:** Long QT, Brugada pattern, WPW, heart block
- **Hypertrophy:** LVH voltage criteria
- **Infarction:** Pathologic Q waves

**Laboratory tests:**
- **CBC:** Anemia, infection
- **BMP:** Electrolytes, kidney function
- **Glucose:** Hypoglycemia
- **Troponin:** If cardiac ischemia suspected
- **BNP:** If heart failure suspected
- **Toxicology:** If overdose suspected
- **Pregnancy test:** In women of childbearing age

**Imaging:**
- **Echocardiogram:** Structural heart disease, EF
- **CT head:** If head trauma, focal neurologic findings
- **Carotid massage:** If carotid sinus syncope suspected (with monitoring!)
- **Tilt table test:** For recurrent reflex syncope

**Ambulatory monitoring:**
- **Holter:** 24-48 hours
- **Event monitor:** Weeks
- **Implantable loop recorder:** Years (for recurrent unexplained syncope)

## Risk Stratification

**High-risk (admit/observe):**
- Abnormal ECG (new changes)
- Heart failure or structural heart disease
- Exertional syncope
- Family history of sudden death
- Abnormal vitals
- Anemia (Hb <9)
- Older age with comorbidities

**Intermediate risk:**
- Some cardiac risk factors but normal ECG
- Age >50 without clear diagnosis

**Low risk (discharge home):**
- Age <50
- Normal ECG
- No heart disease
- Typical vasovagal presentation
- No red flags

## Management

**Specific treatments:**
- **Vasovagal:** Avoid triggers, increase salt/fluids, counterpressure maneuvers
- **Orthostatic:** Discontinue offending meds, compression stockings, fludrocortisone, midodrine
- **Cardiac:** Depends on cause (pacemaker for bradycardia, ICD for VT, stent for ischemia)
- **Anemia:** Iron, transfusion if severe
- **Dehydration:** Fluid replacement

**Driving restrictions:**
- Varies by jurisdiction
- Generally restricted until cause identified and treated
- Commercial drivers have stricter requirements

**Prevention strategies:**
- Recognize prodromal symptoms
- Lie down or sit when feeling symptoms
- Counterpressure maneuvers (leg crossing, hand grip)
- Avoid triggers
- Stay hydrated`,
      keyTerms: [
        { term: 'vasovagal syncope', definition: 'Most common type of fainting caused by sudden drops in heart rate and blood pressure from triggers like emotion or pain' },
        { term: 'orthostatic hypotension', definition: 'Drop in blood pressure upon standing, causing dizziness or syncope. SBP drop ≥20 or DBP drop ≥10 mmHg' },
        { term: 'prodrome', definition: 'Warning symptoms that occur before syncope: nausea, sweating, warmth, graying vision' },
        { term: 'Brugada syndrome', definition: 'Genetic arrhythmia causing sudden death; ECG shows RBBB with ST elevation V1-V3' },
        { term: 'long QT syndrome', definition: 'Prolonged QT interval on ECG; can cause fatal arrhythmias (torsades de pointes)' },
        { term: 'carotid sinus hypersensitivity', definition: 'Exaggerated response to carotid sinus stimulation causing syncope; treated with pacemaker' },
      ],
      analogies: [
        'The baroreceptor reflex is like a thermostat - it senses pressure and adjusts. In vasovagal syncope, the thermostat malfunctions and turns off the furnace completely.',
        'Orthostatic hypotension is like a water tower with a weak pump - when you stand up, gravity pulls water down but the pump can\'t push it up to the top.',
        'Long QT syndrome is like faulty wiring in the heart\'s electrical system - it can cause dangerous short circuits.',
      ],
      examples: [
        '25-year-old woman faints while having blood drawn. She felt warm and nauseated beforehand. ECG normal. Diagnosed with vasovagal syncope. Discharged home.',
        '70-year-old man faints while walking uphill. No warning symptoms. ECG shows left bundle branch block. Admitted for monitoring. Echo shows EF 35%. ICD placed.',
        '16-year-old athlete faints during basketball game. Cousin died suddenly at age 30. ECG shows Brugada pattern. Referred to electrophysiology.',
      ],
      patientCounselingPoints: [
        'Most fainting is benign, but red flags like fainting during exercise need immediate evaluation',
        'If you feel like you might faint, lie down or sit with your head between your knees',
        'Stay hydrated and avoid triggers that have caused you to faint before',
        'Tell your doctor about any family history of sudden, unexplained death',
      ],
    },

    3: {
      level: 3,
      summary: 'Syncope evaluation requires systematic history taking, risk stratification, and targeted testing. Life-threatening causes must be distinguished from benign vasovagal syncope.',
      explanation: `## Syncope: Definition and Classification

**Definition:** Transient loss of consciousness due to global cerebral hypoperfusion with:
- Rapid onset
- Short duration (typically <1 minute unconscious, <5 minutes total)
- Complete, spontaneous recovery
- Loss of postural tone (falling unless restrained)

**Distinction from other TLOC:**
- **Seizure:** Postictal confusion, tongue biting, incontinence, injury from seizure
- **Psychogenic pseudosyncopc:** Normal vital signs during event, prolonged episodes, absence of prodrome
- **Hypoglycemia:** Associated with diaphoresis, confusion, resolves with glucose
- **Vertebrobasilar TIA:** Brainstem symptoms without complete loss of consciousness

## Classification Systems

### ESC Classification (2018)

**Reflex (neurally mediated) syncope:**
- **Vasovagal:** Emotional triggers, pain, medical procedures
- **Situational:** Cough, micturition, deglutition, laughing
- **Carotid sinus syncope:** Mechanical stimulation

**Orthostatic syncope:**
- **Classical orthostatic hypotension:** Immediate BP drop on standing
- **Initial orthostatic hypotension:** BP drop within 15 seconds of standing
- **Delayed OH:** BP drop after >3 minutes of standing
- **POTS:** HR increase >30 bpm without significant BP drop

**Cardiac syncope:**
- **Arrhythmic:** Brady- or tachyarrhythmias
- **Structural:** Obstructive lesions (AS, HOCM, myxoma)
- **Ischemic:** MI, ischemia

## Detailed Pathophysiology

### Reflex Syncope Mechanisms

**Vasovagal (cardioinhibitory response):**
- **Triggers:** Emotional, pain, instrumentation
- **Pathophysiology:**
  1. Trigger → increased ventricular contractility
  2. Hypercontractile ventricle → stimulates mechanoreceptors (C-fibers)
  3. Vagus nerve activation → bradycardia, vasodilation
  4. Cerebral hypoperfusion → syncope

**Vasodepressor response:**
- Vasodilation without significant bradycardia
- More common in younger patients
- Often has prodrome

**Mixed response:**
- Combination of cardioinhibition and vasodilation
- Most common pattern

### Orthostatic Hypotension Pathophysiology

**Normal response to standing:**
- 500-1000 mL blood pools in lower extremities
- Decreased venous return → decreased stroke volume
- Baroreceptor reflex → increased sympathetic tone
- Result: Mild HR increase, BP maintained

**Abnormal response in OH:**
- Inadequate vasoconstriction or decreased intravascular volume
- Failure to maintain BP → cerebral hypoperfusion

**Causes of impaired compensation:**
- **Hypovolemia:** Dehydration, bleeding, diuretics
- **Autonomic failure:** Diabetes, Parkinson's, MSA, pure autonomic failure
- **Medications:** Alpha blockers, diuretics, TCAs, levodopa, sildenafil
- **Age-related:** Decreased baroreceptor sensitivity

### Cardiac Syncope Mechanisms

**Bradycardia:**
- **Sick sinus syndrome:** Inappropriate sinus bradycardia, sinus pauses
- **AV block:** First, second (Mobitz I, II), third degree
- **Medication effect:** Beta-blockers, calcium channel blockers, digoxin

**Tachycardia:**
- **VT:** Most concerning cause, associated with structural heart disease
- **SVT:** PSVT, AF with RVR, atrial flutter with rapid conduction
- **Channelopathies:**
  - Long QT: Torsades de pointes
  - Brugada: VF during sleep or rest
  - CPVT: Exercise-induced VT
  - ARVC: Exercise-induced VT, RV involvement

**Structural obstruction:**
- **Aortic stenosis:** Fixed obstruction to LV outflow
  - Syncope with exertion = poor prognosis (2-year survival <50%)
  - Pathophysiology: Fixed CO + vasodilation during exercise → hypotension
- **Hypertrophic cardiomyopathy:** Dynamic LVOT obstruction
  - Exertional syncope from obstruction or arrhythmia
  - Sudden death risk
- **Myxoma:** Ball-valve obstruction of mitral valve
  - Positional syncope
- **Pulmonary stenosis:** Rare, exertional syncope

## Risk Stratification Tools

### San Francisco Syncope Rule (SFSR)

**High-risk if any present:**
1. **Abnormal ECG** (nonsinus rhythm or new changes)
2. **Shortness of breath**
3. **Hematocrit <30%**
4. **Systolic BP <90 mmHg**
5. **History of CHF**

**Sensitivity:** 98% for serious outcomes
**Specificity:** 56% (many false positives)

### EGSYS Score (0-10)

| Finding | Points |
|---------|--------|
| Palpitations before syncope | 4 |
| Abnormal ECG/cardiac disease | 3 |
| Syncope during effort | 3 |
| Autonomic prodrome | 2 |
| Age >35 | 2 |
| No triggers | 1 |
| Male sex | 1 |
| Visual hallucinations | -1 |

**Interpretation:**
- 0-2: Low risk (3% serious outcome at 2 years)
- 3-10: Higher risk (27% serious outcome at 2 years)

## Diagnostic Testing Strategy

### Initial Evaluation (ALL patients)

**History:**
- Detailed description of event (witness accounts invaluable)
- Prodromal symptoms?
- Activity at onset?
- Position (standing, sitting, supine)?
- Duration of unconsciousness?
- Post-ictal confusion?
- Similar previous episodes?
- Medications (especially new)?
- Family history of sudden death, arrhythmias, cardiomyopathy?

**Physical examination:**
- Orthostatic vitals
- Cardiovascular exam (murmurs, gallops, rubs)
- Carotid sinus massage (with monitoring, avoid if CVD, recent TIA, carotid bruit)
- Neurologic exam
- Rectal exam (if GI bleed suspected)

**ECG (mandatory):**
- Arrhythmias
- Ischemia
- Conduction disease
- Preexcitation (WPW)
- Long QT, Brugada pattern
- LVH, RVH
- Infarction (Q waves)

### Targeted Testing Based on Initial Evaluation

**Laboratory:**
- CBC: Anemia, infection
- BMP: Electrolytes, kidney function, calcium
- Glucose: Hypoglycemia
- Troponin: If cardiac ischemia suspected
- BNP: If heart failure suspected
- Toxicology: If overdose suspected
- D-dimer: If PE suspected (low pre-test probability)

**Imaging:**
- **Echocardiogram:** Structural heart disease, EF
- **Carotid US:** Only if TIA symptoms
- **CT head:** Head trauma, focal neurologic deficits
- **CT pulmonary angiogram:** If PE suspected

**Advanced cardiac testing:**
- **Holter:** 24-48 hours, for daily symptoms
- **Event recorder:** Weeks, for infrequent symptoms
- **Implantable loop recorder (ILR):** Years, for recurrent unexplained syncope
  - Diagnostic yield: 40-50% at 2 years
  - Consider early in unexplained syncope with negative initial workup

## Special Populations

### Elderly Patients

**Unique considerations:**
- Polypharmacy increases risk
- Multiple comorbidities
- Amnesia for event (common)
- Atypical presentations common
- Orthostatic hypotension very common

**Causes more common in elderly:**
- Sick sinus syndrome
- Aortic stenosis
- Orthostatic hypotension
- Medication effects
- Polypharmacy

### Athletes

**Evaluation considerations:**
- Vasovagal syncope common post-exercise
- Exertional syncope = concerning
- Channelopathies must be excluded
- HOCM, ARVC can present with syncope

**Red flags in athletes:**
- Syncope during or immediately after exercise
- Family history of sudden death
- Abnormal ECG
- Exertional chest pain

### Pregnancy

**Causes:**
- Vasovagal (common)
- Orthostatic hypotension (aortocaval compression)
- Pulmonary embolism (increased risk)
- Arrhythmias (if underlying heart disease)

**Evaluation challenges:**
- Imaging limitations (radiation)
- Medication restrictions
- Physiologic changes affect test interpretation

## Treatment Principles

**Reflex syncope:**
- Education and reassurance
- Avoid known triggers
- Counterpressure maneuvers (leg crossing, hand grip, arm tensing)
- Increased salt and fluid intake
- Compression stockings (if orthostatic component)
- Midodrine (if refractory)

**Orthostatic hypotension:**
- Discontinue/reduce offending medications
- Increased salt/fluid intake
- Compression stockings
- Abdominal binder
- Fludrocortisone
- Midodrine
- Droxidopa (for neurogenic OH)

**Cardiac syncope:**
- **Bradycardia:** Pacemaker
- **VT/SCD risk:** ICD
- **Structural:** Treat lesion (valve replacement, myectomy for HOCM)
- **Ischemic:** Revascularization

**Lifestyle modifications:**
- Adequate hydration
- Salt intake (unless contraindicated)
- Avoid triggers
- Slow position changes
- Elevate head of bed (for nocturnal OH)
- Exercise precautions`,
      keyTerms: [
        { term: 'TLOC', definition: 'Transient Loss of Consciousness; umbrella term including syncope, seizures, psychogenic, and other causes' },
        { term: 'POTS', definition: 'Postural Orthostatic Tachycardia Syndrome; HR increases >30 bpm on standing without significant BP drop' },
        { term: 'cardioinhibitory response', definition: 'Excessive vagal response causing bradycardia or asystole; one mechanism of vasovagal syncope' },
        { term: 'vasodepressor response', definition: 'Vasodilation without significant bradycardia; mechanism of some vasovagal syncope' },
        { term: 'channelopathy', definition: 'Inherited cardiac ion channel disorder causing arrhythmias (Long QT, Brugada, CPVT)' },
        { term: 'ILR', definition: 'Implantable Loop Recorder; subcutaneous cardiac monitor for long-term rhythm monitoring in unexplained syncope' },
      ],
      analogies: [
        'The vasovagal response is like a car\'s cruise control malfunction - the sensors detect something and overreact, slowing everything down too much.',
        'Orthostatic hypotension in elderly is like old plumbing - the pipes are stiff and can\'t constrict quickly when needed.',
        'An implantable loop recorder is like a dashcam that records continuously - it captures events that happen infrequently.',
      ],
      examples: [
        '22-year-old with recurrent syncope, normal ECG, normal echo. Tilt table test positive with vasovagal response. Diagnosed with vasovagal syncope. Taught counterpressure maneuvers.',
        '75-year-old with syncope, orthostatic hypotension confirmed. Medications adjusted. Fludrocortisone started. Compression stockings recommended.',
        '45-year-old with exertional syncope. ECG shows LVH. Echo shows severe aortic stenosis. Referred for valve replacement.',
      ],
      patientCounselingPoints: [
        'Learn your prodromal symptoms so you can lie down before losing consciousness',
        'Counterpressure maneuvers like leg crossing can abort an impending vasovagal syncopal episode',
        'Keep a symptom diary including timing, triggers, and associated symptoms',
        'Wear medical alert bracelet if you have diagnosed arrhythmia or condition requiring pacemaker/ICD',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced syncope evaluation integrates risk stratification tools, targeted testing based on pre-test probability, and evidence-based management of specific syncope syndromes.',
      explanation: `## Advanced Syncope Pathophysiology

### Hemodynamic Derangements

**Cerebral autoregulation:**
- Normal range: MAP 60-160 mmHg maintains constant CBF
- Syncope occurs when MAP falls below lower limit of autoregulation
- **Chronic hypertensives:** Autoregulation curve shifted right
  - Higher MAP required for cerebral perfusion
  - More susceptible to syncope with BP drops
  - Explain why "acceptable" BP may be too low for some patients

**Cerebral oxygen extraction:**
- Normally extracts 40% of delivered oxygen
- Can increase extraction to compensate for decreased flow (to a point)
- When compensation exhausted → syncope

### Neurocardiogenic Mechanisms

**Vasovagal reflex pathways:**
- **C fibers (unmyelinated):** Mechanoreceptors in LV inferoposterior wall
- **Paradoxical response:** Hypercontractile ventricle → C-fiber activation
- **Brainstem integration:** Nucleus tractus solitarius → vagal nuclei
- **Efferent:** Parasympathetic (vagus) + sympathetic withdrawal

**Genetic predisposition:**
- Twin studies show heritability
- Specific polymorphisms identified (e.g., COMT, ADRA2B)
- Explains why some have recurrent vasovagal syncope

## Advanced Risk Stratification

### Clinical Decision Rules Analysis

**San Francisco Syncope Rule:**
- **Pros:** High sensitivity (98%), easy to use
- **Cons:** Low specificity (56%), validation issues
- **Utility:** Good for ruling out, less useful for ruling in

**EGSYS Score:**
- **Pros:** Better specificity, 2-year risk stratification
- **Cons:** More complex, requires ECG interpretation
- **Utility:** Good for identifying low-risk patients

**Boston Syncope Criteria:**
- Abnormal ECG, high-risk history, abnormal cardiac markers, abnormal vital signs
- Higher specificity than SFSR
- Similar sensitivity

**Canadian Syncope Risk Score:**
- 9 variables, points-based
- Predicts 30-day serious outcomes
- Good calibration, discrimination

### Risk Stratification by ECG Findings

**High-risk ECG patterns:**
- **Long QT:** QTc >450 men, >470 women (congenital >500)
- **Brugada:** Type 1 pattern (coved ST elevation V1-V3)
- **Early repolarization:** J-point elevation with horizontal/descending ST in inferior leads
- **Arrhythmogenic RV cardiomyopathy:** Epsilon waves, T-wave inversions V1-V3
- **Hypertrophic cardiomyopathy:** LVH with repolarization abnormalities
- **Preexcitation:** WPW (short PR, delta wave)

**Abnormal ECG in elderly is high risk!**
- Any non-sinus rhythm
- New or repolarization abnormalities
- Conduction abnormalities

## Advanced Testing Strategies

### Implantable Loop Recorders

**Indications:**
- Unexplained syncope after negative initial workup
- Recurrent syncope without clear cause
- Suspected arrhythmia not captured on short-term monitoring
- ILR preferred over repeat Holter/event monitoring

**Diagnostic yield:**
- 40-50% at 2 years
- Higher in older patients, structural heart disease
- Most diagnoses: Bradyarrhythmias (pacemaker), ventricular arrhythmias (ICD)

**Reveal LINQ (Medtronic) or Confirm (Abbott):**
- Small, injected subcutaneously
- Battery life 3 years
- Remote monitoring capability
- Patient-activated or auto-triggered

### Tilt Table Testing

**Indications:**
- Recurrent syncope without prodrome
- Single syncopal episode in high-risk occupation
- Differentiate syncope vs psychogenic pseudosyncopc
- Evaluate for vasodepressor vs cardioinhibitory response

**Protocols:**
- **Passive phase:** 20-45 minutes at 60-80° angle
- **Provocation phase:** Nitroglycerin or isoproterenol
- **Positive result:** Reproduction of symptoms with hypotension/bradycardia

**Limitations:**
- False positives (5-10%)
- False negatives (sensitivity 70-85%)
- Not standardized across centers
- Limited role in structural heart disease

### Advanced Imaging

**Cardiac MRI:**
- **ARVC:** Fat infiltration, RV enlargement/dysfunction
- **HOCM:** Asymmetric hypertrophy, SAM
- **Cardiac sarcoidosis:** Late gadolinium enhancement
- **Myxoma:** Atrial mass detection

**CT coronary angiography:**
- Ischemic evaluation when echo inconclusive
- Coronary anomaly assessment

**Nuclear stress testing:**
- Ischemic evaluation
- Viability assessment

## Management of Specific Syndromes

### Vasovagal Syncope

**Recurrent vasovagal syncope management:**

**Non-pharmacologic:**
- **Counterpressure maneuvers:** Most effective evidence-based intervention
  - Leg crossing: increases BP by 20-30 mmHg
  - Hand grip: Squeezing rubber ball
  - Arm tensing: Isometric handgrip
  - Squatting: Increases venous return
- **Salt loading:** 6-10 g/day if no contraindication
- **Increased fluid intake:** 2-3 L/day
- **Tilt training:** Repeated tilt exposure (controversial)

**Pharmacologic:**
- **Midodrine:** Alpha-1 agonist, 2.5-10 mg TID
  - Best evidence for efficacy
  - Side effects: Supine hypertension, piloerection, scalp itching
- **Fludrocortisone:** Mineralocorticoid, 0.1-0.2 mg daily
  - Less evidence than midodrine
  - Side effects: Hypokalemia, edema
- **SSRIs:** Paroxetine, sertraline
  - Limited evidence, may be effective in refractory cases
- **Pacemaker:**
  - **NOT routinely recommended** for vasovagal syncope
  - May benefit patients >40 with dominant cardioinhibitory response
  - ISSUE-3 trial: No benefit overall

### Orthostatic Hypotension

**Neurogenic OH management:**
- **Fludrocortisone:** 0.1-0.3 mg daily
  - Expands plasma volume
  - Onset 1-2 weeks
  - Side effects: Hypokalemia, edema, hypertension
- **Midodrine:** 2.5-10 mg TID
  - Direct vasoconstrictor
  - Dose 1 hour before activity
  - Contraindicated in supine hypertension
- **Droxidopa:** 100-600 mg TID
  - Norepinephrine precursor
  - Approved for neurogenic OH
  - Monitor for supine hypertension
- **Pyridostigmine:** 30-60 mg TID
  - Acetylcholinesterase inhibitor
  - Improves ganglionic transmission
  - Less supine hypertension

**Non-pharmacologic:**
- Abdominal binder (20-40 mmHg compression)
- Compression stockings (waist-high, 30-40 mmHg)
- Waist-high compression preferred to thigh-high
- Water bolus (500 mL) before standing
- Small, frequent meals (postprandial OH)
- Elevate head of bed 10-15°
- Countermaneuvers (squatting, leg crossing)

### POTS Management

**Graded exercise program:**
- Start recumbent (rowing, swimming)
- Progress to upright exercise
- Improves stroke volume and conditioning

**Pharmacologic:**
- **Fludrocortisone:** Volume expansion
- **Midodrine:** Vasoconstriction
- **Beta-blockers:** Low-dose propranolol (blunts tachycardia)
- **Ivabradine:** If sinus tachycardia dominant
- **SSRIs:** If comorbid anxiety/depression

### Cardiac Syncope Management

**Bradyarrhythmias:**
- **Sinus node dysfunction:** Pacemaker (Class I)
- **AV block (Mobitz II, third degree):** Pacemaker (Class I)
- **Carotid sinus hypersensitivity:** Pacemaker if documented pauses >3 seconds

**Ventricular arrhythmias:**
- **VT with structural heart disease:** ICD (Class I)
- **Channelopathy:** ICD for long QT, Brugada, CPVT
- **Beta-blockers:** First-line for long QT, CPVT

**Structural heart disease:**
- **Aortic stenosis:** Valve replacement when symptomatic
- **HOCM:** Septal reduction therapy (surgical myectomy or alcohol ablation) + medical therapy
- **Myxoma:** Surgical excision

## Psychogenic Pseudosyncopc

**Diagnostic criteria:**
- Events inconsistent with syncope (prolonged, no injury)
- Normal vital signs during event
- No physiologic cause identified despite evaluation
- May have conversion disorder, malingering

**Features:**
- Usually longer (>5 minutes)
- Eyes often closed (syncope usually eyes open)
- Normal movements or thrashing (vs myoclonic jerks in syncope)
- Often witnessed
- May have multiple episodes in one day

**Evaluation:**
- Diagnosis of exclusion
- Video-EEG monitoring to capture event
- Psychiatric evaluation

**Treatment:**
- Cognitive behavioral therapy
- Antidepressants if comorbid depression/anxiety
- Avoid iatrogenic harm (unnecessary procedures)

## Special Circumstances

### Syncope While Driving

**Legal requirements:**
- Variable by jurisdiction
- Generally restricted until cause identified and treated
- Commercial drivers: Stricter requirements

**Medical evaluation:**
- Identify and treat underlying cause
- Risk stratify for recurrence
- Document compliance with treatment

### Driving After Syncope

**Typical restrictions:**
- **Vasovagal syncope:** 3-6 months
- **Unexplained syncope:** 6-12 months
- **Arrhythmia with device:** 6 months after device implantation
- **Treated arrhythmia:** Varies (often 3-6 months)`,
      keyTerms: [
        { term: 'cerebral autoregulation', definition: 'Brain\'s ability to maintain constant blood flow across range of blood pressures (MAP 60-160 mmHg)' },
        { term: ' ISSUE-3 trial', definition: 'International Study on Syncope of Uncertain Etiology 3; showed pacemeters not beneficial for most vasovagal syncope' },
        { term: 'droxidopa', definition: 'Synthetic amino acid precursor of norepinephrine; approved for neurogenic orthostatic hypotension' },
        { term: 'psychogenic pseudosyncopc', definition: 'Episodes resembling syncope but without cerebral hypoperfusion; diagnosis of exclusion' },
        { term: 'tilt table testing', definition: 'Diagnostic test reproducing syncope by tilting patient upright with or without pharmacologic provocation' },
        { term: 'counterpressure maneuvers', definition: 'Physical techniques (leg crossing, hand grip, squatting) that increase blood pressure and abort impending syncope' },
      ],
      analogies: [
        'Cerebral autoregulation is like cruise control - it maintains constant speed (blood flow) despite hills (blood pressure changes). Chronic hypertension is like driving on hilly terrain - the "normal" set point shifts.',
        'The ISSUE-3 trial was like testing whether seatbelts help when you don\'t crash - pacemakers weren\'t useful for most vasovagal patients.',
        'Psychogenic pseudosyncopc is like a car that stops because the driver turned it off, not because the engine failed.',
      ],
      examples: [
        '35-year-old woman with recurrent syncope, normal workup. ILR placed. 6 months later, syncope recurs. ILR shows 8-second pause. Pacemaker placed. No further syncope.',
        '28-year-old with POTS. HR increases from 70 to 120 on standing. Graded exercise program started. Fludrocortisone added. Symptoms improved over 3 months.',
        '50-year-old with exertional syncope. Echo shows HOCM with 50 mmHg gradient. Septal myectomy performed. No further syncope.',
      ],
      patientCounselingPoints: [
        'Counterpressure maneuvers can abort 50-70% of vasovagal syncopal episodes when used at prodrome onset',
        'An ILR is like having a 24/7 heart monitor implanted under your skin - it captures rhythm during infrequent symptoms',
        'Driving restrictions vary by location and cause - discuss specific requirements with your doctor',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level syncope care integrates advanced risk stratification, personalized testing strategies, evidence-based treatments, and nuanced management of complex and refractory cases.',
      explanation: `## Contemporary Syncope Management

**Paradigm shifts in syncope evaluation:**

**Historical approach:**
- Admit all for observation
- Extensive testing for all
- Low diagnostic yield, high cost

**Current approach:**
- Risk stratification first
- Targeted testing based on pre-test probability
- Outpatient evaluation for low-risk patients
- Resource-efficient, evidence-based

**Syncope unit models:**
- Dedicated syncope units within ED
- Protocolized evaluation
- Reduced admission rates without compromising safety
- Better diagnostic yield than standard care

## Advanced Risk Stratification

### Integrated Risk Models

**STEP (Syncope Evaluation in the Emergency Department) pathway:**
- Incorporates clinical judgment + decision rules
- ECG-based risk stratification
- Serial orthostatic vitals
- Selective use of echo, biomarkers
- **Result:** Reduced admissions from 80% to 30% without adverse outcomes

**Canadian Syncope Cohort study:**
- 30-day serious outcomes: 5%
- Predictors: Abnormal ECG, heart disease, absence of prodrome
- High-risk if >1 predictor

### Machine Learning Approaches

**Risk prediction models:**
- Incorporate clinical, ECG, biomarker data
- Outperform traditional decision rules in validation studies
- Not yet widely adopted clinically

**ECG AI algorithms:**
- Automated QTc measurement
- Arrhythmia detection
- Early repolarization pattern recognition
- May identify high-risk patients missed by human interpretation

## Advanced Diagnostic Strategies

### Smart Monitoring

**Patch-based monitors:**
- Wearable, single-use, 14-day monitoring
- Better patient compliance than Holter
- Higher diagnostic yield than Holter
- Algorithms detect arrhythmias and periods of asystole

**Smartwatch technologies:**
- PPG-based rhythm detection
- Falls detection
- Potential for home monitoring of syncope
- Limitations: False positives, not diagnostic grade

**Mobile cardiac telemetry:**
- Real-time transmission of arrhythmias
- Longer monitoring than Holter
- Patient-activated + auto-trigger

### Advanced Imaging Applications

**CT coronary angiography in syncope:**
- Indicated when:
  - Ischemic symptoms present
  - Echo inconclusive
  - Low-intermediate pre-test probability of CAD
- High negative predictive value

**Stress testing in syncope:**
- Indicated when:
  - Exertional syncope
  - Chest pain with syncope
  - Multiple risk factors for CAD

**Nuclear imaging:**
- MUGA scan for LVEF if echo inadequate
- PET for sarcoidosis or inflammatory cardiomyopathy

## Contemporary Treatment Approaches

### Refractory Vasovagal Syncope

**PACING in Vasovagal Syncope:**

**Modern trials:**
- ISSUE-3: No benefit overall
- **Post-hoc analysis:** Benefit in patients >40 with asystole on ILR
- **Current approach:** Consider pacemaker for:
  - Documented asystole >3 seconds
  - Age >40
  - Frequent, unpredictable syncope
  - Excluded structural heart disease

**Leadless pacemakers:**
- Micra (Medtronic), Nanostim (Abbott)
- Lower complication rate than transvenous
- Reasonable option in young, active patients

### Contemporary Pharmacotherapy

**Midodrine updates:**
- **Evidence:** Multiple RCTs show benefit in VVS, OH
- **Dosing:** 2.5-10 mg TID, avoid within 4 hours of bedtime
- **Monitoring:** Supine BP at each visit
- **Contraindicated:** Uncontrolled hypertension, urinary retention, pheochromocytoma

**Fludrocortisone:**
- **Evidence:** Limited RCT data, observational benefit
- **Dosing:** 0.1-0.3 mg daily
- **Monitoring:** BP, K+, Mg2+
- **Contraindicated:** Heart failure, severe hypertension

**Droxidopa:**
- **FDA approved (2014)** for neurogenic OH
- **Evidence:** Two phase III trials (NOH306, NOH307)
- **Dosing:** 100 mg TID, titrate to 600 mg TID
- **Real-world:** Modest benefit, expensive

**Pyridostigmine:**
- **Mechanism:** Enhances ganglionic neurotransmission
- **Evidence:** Modest benefit in neurogenic OH
- **Advantage:** Less supine hypertension
- **Dosing:** 30-60 mg TID

### POTS: Controversies

**POTS controversy:**
- Is it a distinct entity or part of CFS spectrum?
- **Evidence:** Heterogeneous condition, multiple phenotypes
- **Subtypes:**
  - Neuropathic POTS: Partial dysautonomia
  - Hyperadrenergic POTS: Excessive sympathetic activity
  - Hypovolemic POTS: Low plasma volume

**Management strategies:**
- **Non-pharmacologic:** Exercise program, salt/fluid, compression
- **Pharmacologic:** Individualized based on subtype
- **Controversial:** Beta-blockers, ivabradine, fludrocortisone

### Syncope in Athletes

**Evaluation challenges:**
- High prevalence of vasovagal syncope
- Training-related ECG changes
- Distinguishing athlete's heart from cardiomyopathy
- Channelopathy screening

**Red flags in athletes:**
- Exertional syncope (not post-exertional!)
- Family history of sudden death
- Exertional chest pain
- Abnormal ECG despite detraining

**Return to play:**
- Depends on diagnosis
- **Benign causes:** No restrictions
- **Channelopathy:** Treated + ICD → may return to low-intensity sports
- **Structural heart disease:** Depends on severity and treatment

### Geriatric Syncope

**Multifactorial nature:**
- >50% have multiple causes
- "Orthostatic hypovolemia" - OH + medications + deconditioning
- Polypharmacy contributes significantly

**Comprehensive approach:**
- Medication reconciliation
- De-prescribing when possible
- Treatment of contributing causes
- Physical therapy for deconditioning
- Home safety evaluation

**Fall prevention:**
- Syncope evaluation is part of fall workup
- Multidisciplinary team approach
- Home modifications
- Assistive devices when appropriate

## Special Situations

### Pregnancy-Related Syncope

**Causes:**
- Vasovagal (most common)
- Aortocaval compression (supine hypotension)
- Orthostatic hypotension
- PE (increased risk in pregnancy)
- Arrhythmia (if underlying heart disease)

**Evaluation considerations:**
- Limit radiation exposure
- Consider physiologic anemia of pregnancy
- Tilt testing safe in pregnancy
- Medication safety for fetus

### Syncope and Driving

**Legal framework:**
- **Commercial drivers:** DOT medical certification required
- **Private drivers:** State-specific requirements
- **Physician reporting:** Mandatory in some jurisdictions

**Medical assessment:**
- Identify and treat cause
- Assess risk of recurrence
- Document compliance
- Consider wearable monitoring for documentation

### Syncope with Psychogenic Comorbidity

**Pseudosyncopf vs syncope:**
- Can coexist
- Video-EEG monitoring for diagnosis
- Psychiatric evaluation
- Multidisciplinary management

**Treatment:**
- CBT: Most evidence-based
- Antidepressants: SSRIs/SNRIs
- Avoid iatrogenic harm

## Quality Improvement

**Appropriate use criteria:**
- ACC/AHA appropriate use criteria for syncope
- Classify testing as appropriate, maybe appropriate, rarely appropriate
- Reduce unnecessary testing

**Syncope units:**
- Protocolized evaluation
- Standardized order sets
- Multidisciplinary teams
- Improved outcomes, lower costs`,
      keyTerms: [
        { term: 'STEP pathway', definition: 'Syncope Evaluation in the Emergency Department protocol; risk-stratified approach reducing admissions without harm' },
        { term: 'leadless pacemaker', definition: 'Self-contained pacemaker implanted directly in right ventricle; lower complication rate than transvenous' },
        { term: 'POTS subtypes', definition: 'Neuropathic (partial dysautonomia), hyperadrenergic (excessive sympathetic), hypovolemic (low blood volume)' },
        { term: 'orthostatic hypovolemia', definition: 'Multifactorial condition in elderly with OH, medications, and deconditioning contributing to syncope' },
        { term: 'appropriate use criteria', definition: 'ACC/AHA classifications of when testing is appropriate for syncope; resource stewardship tool' },
        { term: 'syncope unit', definition: 'Dedicated ED-based unit with protocol for syncope evaluation; improves efficiency, reduces unnecessary admission' },
      ],
      analogies: [
        'Syncope units are like assembly lines for evaluation - standardized, efficient processes produce consistent quality at lower cost.',
        'POTS is like a car idling too fast - the engine (heart) races when it should be at rest.',
        'Leadless pacemakers are like cordless phones - no wires to break or get infected.',
      ],
      clinicalNotes: `Expert clinical pearls for syncope management:

1. **Exertional syncope is never benign.** Evaluate urgently for structural heart disease, ischemia, or channelopathy. Don't dismiss.

2. **Family history matters.** Sudden death, unexplained drowning, single-car accidents in relatives suggest channelopathy. Screen relatives.

3. **ECG is mandatory.** It's cheap, fast, and catches life-threatening diagnoses. Never skip it.

4. **Orthostatic vitals properly done:** After 5 minutes supine, measure immediately upon standing and at 3 minutes. Document both values.

5. **Witnesses are invaluable.** Get their description of the event. Did they turn pale? Jerk? How long were they out?

6. **Medications are often the cause.** Review and deprescribe when possible in elderly with syncope.

7. **Syncope units work.** If your ED has one, use the protocol. If not, develop one.

8. **ILR for unexplained recurrent syncope.** Diagnostic yield 40-50% at 2 years. Better than repeating negative tests.

9. **Driving restrictions exist.** Know your local requirements. Document your evaluation clearly.

10. **Psychogenic pseudosyncopf is real.** But it's a diagnosis of exclusion. Don't miss the life-threatening causes while labeling patients.`,
    },
  },

  media: [
    {
      id: 'syncope-evaluation-algorithm',
      type: 'diagram',
      filename: 'syncope-evaluation-algorithm.svg',
      title: 'Syncope Evaluation Algorithm',
      description: 'Step-by-step approach to syncope evaluation with risk stratification',
    },
    {
      id: 'tilt-table-test',
      type: 'diagram',
      filename: 'tilt-table-test.svg',
      title: 'Tilt Table Testing',
      description: 'Procedure and interpretation of tilt table testing for syncope',
    },
    {
      id: 'brugada-pattern',
      type: 'diagram',
      filename: 'brugada-pattern.svg',
      title: 'Brugada Syndrome ECG Pattern',
      description: 'Type 1 Brugada pattern with coved ST elevation in V1-V3',
    },
  ],

  citations: [
    {
      id: 'esc-syncope-guidelines-2018',
      type: 'article',
      title: 'Guidelines for the Diagnosis and Management of Syncope',
      authors: ['European Society of Cardiology', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://academic.oup.com/eurheartj/article/39/21/1883/4981371',
      accessedDate: '2026-01-26',
    },
    {
      id: 'acc-aha-syncope-guideline-2017',
      type: 'article',
      title: 'ACC/AHA/HRS Guideline for the Evaluation and Management of Syncope',
      authors: ['Shen, W.K.', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://www.jacc.org/doi/10.1016/j.jacc.2017.03.003',
      accessedDate: '2026-01-26',
    },
    {
      id: 'issue-3-trial',
      type: 'article',
      title: 'Pacemaker Therapy in Patients with Neurally Mediated Syncope and Documented Asystole',
      authors: ['Brignole, M.', 'et al.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/199507',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'specialties-cardiology-arrhythmias', targetType: 'topic', relationship: 'related', label: 'Cardiac Arrhythmias' },
    { targetId: 'specialties-cardiology-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous'],
    topics: ['emergency medicine', 'cardiology', 'neurology'],
    keywords: ['syncope', 'fainting', 'vasovagal', 'orthostatic hypotension', 'arrhythmia', 'POTS', 'TLOC'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'cardiology'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default syncope;
