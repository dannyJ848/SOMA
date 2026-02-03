/**
 * Cardiac Arrest - Recognition, ACLS, and Post-Resuscitation Care
 *
 * Comprehensive content on cardiac arrest management including rhythm recognition,
 * ACLS algorithms, CPR quality, and post-arrest care optimization.
 */

import { EducationalContent } from '../types';

export const cardiacArrest: EducationalContent = {
  id: 'emergency-cardiac-arrest',
  type: 'condition',
  name: 'Cardiac Arrest',
  alternateNames: ['Cardiopulmonary Arrest', 'Cardiac Arrest', 'Sudden Cardiac Death', 'SCA'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac arrest happens when the heart suddenly stops beating. Without immediate CPR and defibrillation, death occurs within minutes.',
      explanation: `## What Is Cardiac Arrest?

Cardiac arrest is an emergency where your heart stops beating. When this happens, blood stops flowing to your brain and other organs. Without blood, cells begin to die within minutes.

**Cardiac arrest is different from a heart attack:**
- **Heart attack:** Blood flow to the heart is blocked, but the heart usually keeps beating
- **Cardiac arrest:** The heart stops beating completely

## Recognizing Cardiac Arrest

If someone suddenly:

1. **Collapses and becomes unresponsive** - They don't wake up when you shake or call their name
2. **Stops breathing normally** - They may gasp briefly (agonal breathing) but then stop
3. **Has no pulse** - You can't feel a heartbeat

**Call 911 immediately!** Every second counts.

## What To Do: Start CPR

CPR (Cardiopulmonary Resuscitation) keeps blood moving when the heart has stopped. Anyone can learn to save a life!

### Hands-Only CPR (for untrained rescuers):

1. **Call 911 first** or have someone else call
2. **Push hard and fast in the center of the chest**
   - Place one hand on top of the other in the center of their chest
   - Push down at least 2 inches
   - Push at least 100 times per minute (about the beat of the song "Stayin' Alive")
   - Don't stop until help arrives

### CPR with Breaths (if trained):

1. **Check for breathing** - Look, listen, and feel for no more than 10 seconds
2. **Start compressions** - 30 pushes hard and fast
3. **Give 2 rescue breaths** - Tilt head back, pinch nose, blow until chest rises
4. **Repeat** - Continue 30 pushes, 2 breaths until help arrives

## Using an AED (Automated External Defibrillator)

An AED is a machine that can shock the heart back into a normal rhythm. They are found in many public places like schools, airports, and malls.

**How to use an AED:**
1. Turn it on
2. Follow the voice instructions
3. Attach the pads to the person's bare chest as shown in the pictures
4. Let the AED analyze the heart rhythm
5. If it says "SHOCK ADVISED," stand clear and press the shock button
6. If no shock is advised, continue CPR

**Don't worry - an AED will not shock someone who doesn't need it!**

## After Survival

People who survive cardiac arrest need special medical care. Doctors will:
- Try to find out why the heart stopped
- Treat the cause to prevent it from happening again
- Cool the body slightly to protect the brain
- Monitor the heart closely

## Remember

- **Call 911 immediately** - Don't wait!
- **Start CPR right away** - Don't be afraid to try
- **Use an AED if available** - It can save a life!
- **Every minute without CPR reduces survival by 7-10%**

Learning CPR could help you save someone's life - maybe even someone you love.`,
      keyTerms: [
        { term: 'cardiac arrest', definition: 'When the heart suddenly stops beating, causing blood to stop flowing to the brain and body' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation - pressing on the chest and giving breaths to keep blood moving when the heart stops' },
        { term: 'AED', definition: 'Automated External Defibrillator - a machine that can shock the heart back into a normal rhythm' },
        { term: 'agonal breathing', definition: 'Gasping breaths that can happen at the start of cardiac arrest - this is NOT normal breathing' },
      ],
      analogies: [
        'Your heart is like a pump that keeps water flowing through a house. When the pump stops, no water gets to any of the rooms. CPR is like manually pumping the water to keep things running until the pump is fixed.',
        'An AED is like a restart button for the heart - it can stop a bad rhythm and give the heart a chance to start normally again.',
        'During cardiac arrest, time is like water draining from a bucket - every second that passes, the chance of survival goes down.',
      ],
      examples: [
        'A basketball player collapses on the court during practice. His teammates call 911 and immediately start CPR while someone runs to get the AED from the gym wall.',
        'A grandfather suddenly stops talking and slumps over at dinner. His daughter recognizes cardiac arrest, calls 911, and begins chest compressions.',
        'A shopper collapses at the mall. A stranger begins CPR while mall security brings the AED. A shock is delivered and the person wakes up before the ambulance arrives.',
      ],
      patientCounselingPoints: [
        'Everyone should learn CPR - it saves lives!',
        'Know where AEDs are located in your school, workplace, and community',
        'If you see someone collapse, don\'t hesitate to act. Doing something is always better than doing nothing',
        'Call 911 immediately, even if you\'re not sure it\'s cardiac arrest',
      ],
    },

    2: {
      level: 2,
      summary: 'Cardiac arrest is sudden cessation of effective cardiac output. Immediate recognition, high-quality CPR, early defibrillation, and post-resuscitation care are critical for survival.',
      explanation: `## Cardiac Arrest: Definition and Recognition

Cardiac arrest is the sudden cessation of effective cardiac mechanical activity resulting in loss of consciousness and absence of pulse and breathing.

**Immediate recognition criteria:**
- Unresponsive
- No normal breathing (only gasping/agonal breathing)
- No palpable pulse (check for no more than 10 seconds)

**Important distinction:**
| Cardiac Arrest | Heart Attack (MI) |
|----------------|-------------------|
| Heart stops beating | Blood flow blocked, heart beating |
| Unconscious | Usually awake |
| No pulse | Pulse present |
| CPR + defibrillation needed | Aspirin + hospital care needed |

A heart attack can LEAD TO cardiac arrest, but they are different conditions.

## The Chain of Survival

The American Heart Association's "Chain of Survival" describes the critical actions needed for cardiac arrest survival:

1. **Immediate recognition and activation** - Call 911 immediately
2. **Early CPR** - Start high-quality CPR right away
3. **Rapid defibrillation** - Use AED as soon as available
4. **Advanced life support** - EMS provides medications and advanced airway
5. **Post-cardiac arrest care** - Hospital care to optimize recovery

**Breaking any link in the chain reduces survival chances.**

## High-Quality CPR

**Compression technique:**
- **Rate:** 100-120 compressions per minute
- **Depth:** At least 2 inches (5 cm) for adults
- **Recoil:** Allow chest to fully recoil after each compression
- **Interruptions:** Minimize (less than 10 seconds)
- **Ratio:** 30 compressions to 2 breaths (one rescuer) or 30:2 (two rescuers)

**Compression position:**
- Center of the chest, on the lower half of the sternum
- Hands stacked, elbows locked, shoulders directly over hands

**Rescue breaths (if trained):**
- Each breath should make the chest rise
- About 1 second per breath
- Avoid excessive ventilation
- Resume compressions immediately after breaths

**Hands-only CPR** is acceptable for untrained rescuers and is better than no CPR.

## Automated External Defibrillator (AED) Use

**How an AED works:**
1. Analyzes the heart's electrical rhythm
2. Determines if a "shockable rhythm" is present
3. Delivers an electrical shock to reset the heart's electrical system
4. Allows the heart's natural pacemaker to restart

**Shockable rhythms:**
- Ventricular fibrillation (VF) - heart quivers uselessly
- Pulseless ventricular tachycardia (pVT) - fast, ineffective beating

**Non-shockable rhythms:**
- Asystole - no electrical activity at all
- Pulseless electrical activity (PEA) - electrical activity without pumping

**AED steps:**
1. Power on the AED
2. Attach pads to bare chest as shown in diagrams
3. Clear the patient for analysis
4. If shock advised, clear everyone and deliver shock
5. Immediately resume CPR after shock

## Common Causes of Cardiac Arrest

**In adults:**
- Coronary artery disease (most common)
- Heart attack (myocardial infarction)
- Heart failure
- Arrhythmias
- Drug overdose

**In younger people:**
- Inherited heart conditions (hypertrophic cardiomyopathy)
- Electrical problems (Long QT syndrome)
- Heart structure problems present at birth
- Commotio cordis (blunt chest impact)

**In children:**
- Respiratory problems leading to cardiac arrest
- SIDS (Sudden Infant Death Syndrome)
- Trauma
- Near-drowning

## Post-Resuscitation Care

Survivors of cardiac arrest need specialized hospital care:
- Finding and treating the underlying cause
- Therapeutic hypothermia (cooling to protect the brain)
- Preventing complications
- Rehabilitation

**Survival rates:**
- With immediate CPR: ~40% survival
- With CPR + AED within 3-5 minutes: up to 60% survival
- Without CPR: less than 10% survival`,
      keyTerms: [
        { term: 'ventricular fibrillation', definition: 'A chaotic heart rhythm where the heart quivers instead of pumping; the most common rhythm in sudden cardiac arrest', pronunciation: 'ven-TRIK-yoo-ler fib-ri-LAY-shun' },
        { term: 'ventricular tachycardia', definition: 'A fast heart rhythm originating from the ventricles; may cause cardiac arrest if no pulse is present', pronunciation: 'ven-TRIK-yoo-ler tak-ee-KAR-dee-ah' },
        { term: 'asystole', definition: 'Complete absence of electrical activity in the heart; "flatline" rhythm with very low survival rate', pronunciation: 'AY-sis-tole-ee' },
        { term: 'agonal breathing', definition: 'Gasping, irregular breaths that can occur at the beginning of cardiac arrest; not effective breathing', pronunciation: 'AG-on-al' },
        { term: 'defibrillation', definition: 'Delivering an electrical shock to the heart to stop a chaotic rhythm and allow normal rhythm to return', pronunciation: 'de-fib-ri-LAY-shun' },
      ],
      analogies: [
        'Ventricular fibrillation is like a bag of worms wriggling - the heart muscle is quivering but not pumping any blood.',
        'Defibrillation is like hitting a reset button on a frozen computer - it stops the chaotic activity so the system can restart properly.',
        'The chain of survival is like a relay race - each step must be completed and passed to the next for success.',
      ],
      examples: [
        'A 65-year-old man with heart disease collapses at home. His wife recognizes cardiac arrest, calls 911, and starts CPR. Police arrive with an AED within 4 minutes and deliver a shock. The man\'s heartbeat returns.',
        'A 16-year-old athlete collapses during basketball practice. Quick-thinking teammates call 911 and start CPR. The school\'s AED is brought to the court, and a shock is delivered. The athlete survives and is later found to have hypertrophic cardiomyopathy.',
      ],
      patientCounselingPoints: [
        'Learn CPR - you could save a loved one\'s life',
        'Know the location of AEDs in your school, workplace, and community',
        'Don\'t be afraid to act - doing something is always better than doing nothing',
        'If you have a family history of sudden cardiac death or unexplained fainting, see a cardiologist for evaluation',
      ],
    },

    3: {
      level: 3,
      summary: 'Cardiac arrest management requires rapid recognition, high-quality CPR, rhythm interpretation, ACLS protocols, and comprehensive post-arrest care targeting neurologic recovery.',
      explanation: `## Cardiac Arrest Pathophysiology

Cardiac arrest is the sudden cessation of effective cardiac mechanical activity, resulting in loss of circulation and consciousness. Without intervention, irreversible brain injury occurs within 4-6 minutes and death within 8-10 minutes.

**Primary mechanisms:**
- **Electrical:** Arrhythmic causes (VF, VT, asystole, PEA)
- **Mechanical:** Pump failure from structural heart disease
- **Metabolic:** Respiratory failure, electrolyte abnormalities, toxins

**The "4 H's and 4 T's" mnemonic helps identify reversible causes:**

| Hypovolemic | Hypoxia | Hydrogen ion (acidosis) | Hypo/hyperkalemia |
|-------------|---------|-------------------------|-------------------|
| Blood loss | Lack of oxygen | Acid buildup | Potassium problems |

| Tension pneumothorax | Tamponade (cardiac) | Thrombosis (pulmonary) | Thrombosis (coronary) |
|----------------------|----------------------|------------------------|------------------------|
| Air in chest cavity | Fluid around heart | Blood clot in lungs | Blood clot in heart arteries |

## ACLS Primary Survey

The AHA's systematic approach to cardiac arrest:

**C - Compression:** Begin high-quality CPR immediately
**A - Airway:** Provide basic airway management (opener, OPA/NPA)
**B - Breathing:** Provide rescue breaths, consider advanced airway
**C - Circulation:** Establish IV/IO access, give medications
**D - Differential Diagnosis:** Search for and treat reversible causes

## High-Quality CPR Components

| Component | Target | Clinical Significance |
|-----------|--------|----------------------|
| Compression rate | 100-120/min | Optimal coronary and cerebral perfusion |
| Compression depth | 2-2.4 inches (5-6 cm) | Adequate stroke volume |
| Chest recoil | Complete release | Allows venous return |
| Compression fraction | >80% | Maximizes perfusion time |
| Ventilation rate | 10/min (advanced airway) | Avoids excessive intrathoracic pressure |
| CPR before defibrillation | Immediately (witnessed) or 2 min (unwitnessed) | Improves myocardial oxygen delivery |

## Cardiac Arrest Rhythms

**Shockable Rhythms:**

**Ventricular Fibrillation (VF):**
- Chaotic, irregular electrical activity
- No cardiac output
- Multiple waveforms of varying amplitude
- Most common initial rhythm in witnessed arrest

**Pulseless Ventricular Tachycardia (pVT):**
- Wide complex tachycardia >150 bpm
- No palpable pulse
- May be monomorphic or polymorphic
- Deteriorates to VF if untreated

**Non-Shockable Rhythms:**

**Asystole:**
- No discernible electrical activity
- "Flatline" with occasional artifact
- Confirm in multiple leads
- Poor prognosis unless reversible cause identified

**Pulseless Electrical Activity (PEA):**
- Organized electrical activity on ECG
- No palpable pulse or cardiac output
- "The electricity works but the pump doesn't"
- ALWAYS has an underlying cause - find it!

## ACLS Algorithms

**VF/pVT Algorithm (Shockable):**

1. **CPR** - Begin immediately, minimize interruptions
2. **Defibrillate** - First shock (200 J biphasic or equivalent)
3. **CPR** - 2 minutes immediately after shock
4. **Vascular access + epinephrine** - 1 mg IV/IO q3-5 min
5. **Defibrillate** - Second shock (same or higher energy)
6. **CPR** - 2 minutes, then check rhythm
7. **Consider antiarrhythmic** - Amiodarone 300 mg or lidocaine 1-1.5 mg/kg
8. **Continue cycles** - Shock every 2 minutes as needed

**Asystole/PEA Algorithm (Non-shockable):**

1. **CPR** - Begin immediately
2. **Vascular access + epinephrine** - 1 mg IV/IO q3-5 min
3. **Search for H's and T's** - Treat reversible causes
4. **CPR 2 minutes** - Check rhythm after each cycle
5. **Consider atropine for bradycardia** - Only if slow rate PEA (<60 bpm)

**Epinephrine:**
- 1 mg IV/IO every 3-5 minutes
- Increases coronary and cerebral perfusion pressure
- Associated with higher ROSC but not necessarily improved survival

**Amiodarone:**
- 300 mg IV for first dose (after third shock)
- 150 mg for second dose
- May improve ROSC and short-term survival

**Lidocaine:**
- Alternative to amiodarone
- 1-1.5 mg/kg IV, then 0.5-0.75 mg/kg q5-10 min
- Max 3 mg/kg

## Advanced Airway Management

**Timing:**
- Do NOT interrupt CPR for airway placement
- Consider after first defibrillation if return of spontaneous circulation (ROSC) not achieved
- Bag-mask device is acceptable for several cycles

**Options:**
- **Supraglottic airway** (LMA, King LT): Faster, easier to place
- **Endotracheal intubation:** Most secure but requires skill

**After advanced airway:**
- Continuous compressions (no pauses for breaths)
- 1 breath every 6 seconds (10/min)
- Waveform capnography confirmation

## Post-Cardiac Arrest Care

**Immediate goals after ROSC:**
1. Optimize hemodynamics
2. Targeted temperature management
3. Identify and treat the cause
4. Manage complications

**Hemodynamic optimization:**
- BP target: SBP >90 mmHg, MAP >65 mmHg
- Consider vasopressors/inotropes as needed
- Avoid hypotension (worsens neurological outcome)

**Targeted Temperature Management (TTM):**
- Comatose patients after ROSC
- Target: 32-36°C for at least 24 hours
- Prevent fever (>38°C) for at least 72 hours
- Improves neurological outcome

**Coronary angiography:**
- Immediate cath lab for suspected cardiac cause
- STEMI or new LBBB: emergent PCI
- Without STEMI but high suspicion: early angiography

**Prognostication:**
- No decision before 72 hours (or longer with TTM)
- Multiple modalities: exam, EEG, SSEP, imaging, biomarkers
- Multimodal approach recommended`,
      keyTerms: [
        { term: 'ROSC', definition: 'Return of Spontaneous Circulation; restoration of sustained cardiac output after cardiac arrest', pronunciation: 'ross-k' },
        { term: 'compression fraction', definition: 'Percentage of time during cardiac arrest when chest compressions are being performed; goal >80%' },
        { term: 'capnography', definition: 'Monitoring of exhaled CO2; waveform capnography confirms ET tube placement and CPR quality', pronunciation: 'kap-NOG-rah-fee' },
        { term: 'coronary perfusion pressure', definition: 'The pressure gradient that drives blood flow to the heart muscle during CPR; key determinant of ROSC' },
        { term: 'targeted temperature management', definition: 'Controlled cooling or temperature control after cardiac arrest to improve neurological outcome' },
        { term: 'biphasic defibrillator', definition: 'Modern defibrillator that delivers current in two directions; more effective at lower energies than monophasic' },
      ],
      analogies: [
        'PEA is like a car that has electrical power (lights work, radio plays) but the engine won\'t turn over. You need to find the mechanical problem.',
        'Capnography during CPR is like a fuel gauge - it tells you if your compressions are generating any forward blood flow.',
        'Targeted temperature management after cardiac arrest is like putting ice on a sports injury - it reduces swelling and damage.',
      ],
      examples: [
        'A 58-year-old man collapses at home. Wife finds him unresponsive, calls 911, and starts CPR. EMS arrives 6 minutes later, finds VF. Three shocks with epinephrine and amiodarone achieve ROSC. He undergoes emergent PCI for a 100% LAD occlusion.',
        'A 72-year-old woman is found unresponsive by nursing home staff. EMS finds asystole. H\'s and T\'s reveal severe hyperkalemia (K+ 7.8). Calcium gluconate, insulin/glucose, and sodium bicarbonate are given. K+ decreases and sinus rhythm returns.',
      ],
      patientCounselingPoints: [
        'If you have heart disease, discuss with your doctor whether an implantable cardioverter-defibrillator (ICD) is right for you',
        'Family members of cardiac arrest patients should learn CPR - they are most likely to be present if it happens again',
        'After surviving cardiac arrest, you will need thorough evaluation to determine the cause and prevent recurrence',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced cardiac life support requires mastery of rhythm interpretation, pharmacologic interventions, ultrasound-guided procedures, and evidence-based post-arrest care optimization.',
      explanation: `## Advanced Cardiac Arrest Physiology

**Cardiac arrest time course:**
- **0-4 seconds:** Loss of consciousness
- **0-20 seconds:** Loss of oxygenated blood to brain
- **20-60 seconds:** Brainstem activity begins to fail
- **3-5 minutes:** Anaerobic metabolism begins, lactate accumulation
- **5-10 minutes:** Irreversible neuronal injury begins
- **10+ minutes:** Significant permanent brain injury likely

**CPR physiology:**
- Cardiac output during CPR: 20-33% of normal
- Cerebral blood flow: ~50% of normal with optimal compressions
- Coronary perfusion pressure (CPP): key determinant of ROSC
  - CPP = Aortic diastolic pressure - Right atrial diastolic pressure
  - Target CPP >15-20 mmHg for ROSC
  - Correlates with end-tidal CO2 during CPR

**Defibrillation physiology:**
- Depolarizes critical mass of myocardium simultaneously
- Terminates re-entrant circuits and chaotic electrical activity
- Allows sinus node to re-establish control
- Success decreases with ischemic time (metabolic acidosis, ATP depletion)

## Advanced Rhythm Interpretation

**Ventricular Fibrillation characteristics:**
- **Coarse VF:** Higher amplitude waves, more likely to respond to shock
- **Fine VF:** Low amplitude, ischemic myocardium, harder to convert
- Conversion patterns: VF → VT → sinus (good) or VF → asystole (bad)

**Pulseless Ventricular Tachycardia subtypes:**
- **Monomorphic pVT:** Uniform QRS morphology, suggests structural heart disease
- **Polymorphic pVT:** Varying QRS morphology, often ischemic or congenital (e.g., Brugada)
- **Torsades de pointes:** Twisting pattern around baseline, associated with prolonged QT

**PEA subtypes and specific causes:**

| PEA Pattern | Likely Cause | Key Action |
|-------------|--------------|------------|
| Narrow complex | Hypovolemia, PE | Fluid bolus, thrombolytics |
| Wide complex | Hyperkalemia, drugs | Calcium, sodium bicarbonate |
| Bradycardic PEA | Hypoxia, vagal tone | Oxygenation, atropine |
| Tachycardic PEA | Toxic ingestion, sepsis | Antidotes, antibiotics |

## Advanced Pharmacology

**Epinephrine mechanisms:**
- α1 effects: Increases arterial tone, improves CPP
- β1 effects: Increases myocardial O2 demand, may cause arrhythmias
- β2 effects: Minimal at ACLS doses
- Timing: Every 3-5 minutes during arrest

**Vasopressin:**
- Direct V1 receptor stimulation (non-adrenergic vasopressor)
- No longer in AHA algorithms (2015+)
- Equivalent to epinephrine in some studies
- Can be used as one-time替代 for first or second epinephrine dose

**Antiarrhythmics:**
- **Amiodarone:** Multichannel blocker, prolongs action potential
  - Load: 150-300 mg IV
  - Maintenance: 1 mg/min for 6 hours, then 0.5 mg/min
  - Side effects: hypotension, bradycardia, hepatic toxicity
- **Lidocaine:** Na+ channel blocker, membrane stabilizer
  - Load: 1-1.5 mg/kg
  - Maintenance: 1-4 mg/min
  - Contraindicated in ventricular escape rhythms
- **Magnesium:** Specific for torsades, hypomagnesemia
  - Dose: 1-2 g IV over 5-15 minutes

## Ultrasound in Cardiac Arrest (POCUS)

** cardiac ultrasound during CPR:**
- **Pause CPR briefly** (<10 seconds) for subxiphoid view
- **Assess:** Wall motion, tamponade, RV size (for PE), LV function
- **Findings:**
  - Cardiac standstill: Poor prognosis
  - Tamponade: Emergency pericardiocentesis
  - Dilated RV: Consider massive PE
  - Hypovolemia: IVC collapsibility >50%

**PEA with ultrasound findings:**
- Empty IVC + collapsing → Hypovolemia → Give fluids
- Large RV + septal flattening → PE → Consider thrombolytics
- Pericardial effusion → Tamponade → Pericardiocentesis
- Hyperdynamic LV → Sepsis/anaphylaxis → Pressors

## Advanced Airway and Ventilation

**Capnography interpretation:**
- **ETCO2 >10 mmHg:** Adequate CPR quality
- **ETCO2 >20 mmHg:** Improved ROSC likelihood
- **Sudden rise to >40 mmHg:** Likely ROSC (check pulse!)
- **ETCO2 <10 mmHg:** Improve CPR quality, consider causes

**Airway selection algorithm:**
1. Bag-mask if CPR quality maintained
2. Supraglottic airway if CPR interruptions, multiple providers
3. Endotracheal intubation if experienced provider, prolonged arrest

**Optic nerve sheath diameter (ultrasound):**
- >5 mm suggests elevated ICP
- May influence post-arrest management

## Post-Cardiac Arrest Syndrome

**Four components:**
1. **Post-cardiac arrest brain injury:** Most common cause of mortality
2. **Post-cardiac arrest myocardial dysfunction:** Stunning, reversible
3. **Systemic ischemia/reperfusion response:** SIRS-like state
4. **Persistent precipitating pathology:** The original cause

**Optimizing neurological outcomes:**

**Targeted Temperature Management (TTM) details:**
- Indication: Comatose (GCS <8) after ROSC
- Target: 32-36°C (avoid >37.7°C)
- Duration: At least 24 hours at target temperature
- Method: Surface or intravascular cooling
- Shivering control: Skin counter-warming, buspirone, meperidine, magnesium
- Rewarming: Slow (<0.25°C/hour) to minimize rebound edema

**Hemodynamic targets:**
- MAP >65 mmHg (or patient's baseline +10)
- Consider MAP >80-100 mmHg for chronic hypertension
- Cardiac index: 2.5-3.0 L/min/m2
- SvO2: >65%
- Lactate clearance: >10%/hour

**Seizure management:**
- Seizures occur in 20-30% of comatose survivors
- Treat aggressively (propofol, benzodiazepines, levetiracetam)
- EEG monitoring to detect subclinical seizures

**Glycemic control:**
- Target 140-180 mg/dL
- Avoid hypoglycemia (<100 mg/dL)
- Tight control (80-110) associated with worse outcomes

## Prognostication After Cardiac Arrest

**Multimodal approach required:**

**Timing:** No decisions before 72 hours post-rewarming (later if TTM >24h)

**Clinical exam:**
- Absent pupillary reflexes at 72h: Poor prognostic sign
- Absent corneal reflexes at 72h: Poor prognostic sign
- Motor response no better than extension: Poor prognostic sign
- Myoclonus status epilepticus: Poor prognosis if early (<48h)

**Electrophysiology:**
- **Burst suppression:** Poor if persistent beyond 24h
- **Status epilepticus:** Poor prognosis
- **N20 somatosensory evoked potential:** Bilateral absent = poor

**Imaging:**
- **CT:** Early extensive edema (loss of gray-white differentiation) = poor
- **MRI:** Diffusion restriction >10% brain volume = poor
- **Neuronal-specific enolase (NSE):** >33-60 mcg/L = poor

**False positives:** Sedatives, paralysis, metabolic disturbances can confound exam`,
      keyTerms: [
        { term: 'coronary perfusion pressure', definition: 'Aortic diastolic minus right atrial diastolic pressure; key determinant of ROSC during CPR. Target >15-20 mmHg' },
        { term: 'ETCO2', definition: 'End-tidal carbon dioxide; measured by capnography, reflects cardiac output during CPR and ROSC' },
        { term: 'torsades de pointes', definition: 'Polymorphic VT associated with prolonged QT; twisting morphology around baseline. Treat with magnesium' },
        { term: 'post-cardiac arrest syndrome', definition: 'Combination of brain injury, myocardial dysfunction, ischemia-reperfusion response, and persistent pathology after ROSC' },
        { term: 'N20 SSEP', definition: 'Cortical somatosensory evoked potential at 20ms; bilateral absence predicts poor neurological outcome with high specificity' },
        { term: 'myoclonus status epilepticus', definition: 'Continuous, generalized myoclonus within 48 hours of cardiac arrest; associated with poor outcome though not universally' },
      ],
      analogies: [
        'ETCO2 during CPR is like the tachometer on a car - it tells you if the engine (compressions) is generating enough power.',
        'PEA with a specific cause is like a car with a dead battery and a full gas tank - jump it (treat the cause) and it might run again.',
        'Prognostication after cardiac arrest is like reading tea leaves if you only use one method. You need multiple perspectives (exam, EEG, imaging) to be accurate.',
      ],
      examples: [
        'A 45-year-old man in VF arrest receives 8 minutes of CPR. ETCO2 rises from 8 to 25 mmHg after epinephrine. After third shock, ETCO2 jumps to 48 mmHg - ROSC! TTM to 34°C is initiated.',
        'PEA arrest: Ultrasound shows large RV, septal flattening, dilated IVC. Consider PE. Tissue plasminogenogenator given. Ten minutes later, pulse returns. CTPA confirms massive saddle PE.',
      ],
      patientCounselingPoints: [
        'Post-cardiac arrest, brain recovery may take days to weeks to fully assess',
        'Family meetings should involve the full medical team to discuss prognosis using multiple sources of information',
        'Decisions about withdrawal of care should never be made before 72 hours after return of normothermia',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level cardiac arrest care integrates cutting-edge evidence, novel technologies, ECMO, ethical decision-making, and system-level quality improvement to optimize outcomes.',
      explanation: `## Evidence-Based Updates in Cardiac Arrest Management

**High-quality CPR evolution:**
- Real-time CPR feedback devices improve compression metrics
- CPR duration before first shock: No benefit to delayed shock (even for unwitnessed arrest)
- Compression-only CPR: Equivalent outcomes for adult arrest until help arrives
- Mechanical CPR devices: No mortality benefit over manual, but useful during transport or PCI

**Defibrillation strategy:**
- Biphasic truncated exponential waveform: Standard of care
- First shock energy: 150-200 J (manufacturer-specific)
- Subsequent shocks: Same or higher energy
- Double sequential defibrillation: Case reports only, no RCT evidence
- Anterior-posterior pad placement: May improve success in obese/patients with implanted devices

**Medication controversies:**

*Epinephrine:*
- PARAMEDIC2 trial (2018): ROSC higher with epi, but survival with good neuro outcome unchanged
- Benefit: Increased ROSC, transport to hospital
- Harm: Possible worse neurologic outcome in some
- Current: Still recommended, but shared decision-making discussed

*Steroids in cardiac arrest:*
- SCCORT trial: Hydrocortisone + vitamin C + thiamine showed benefit in sepsis arrest
- No clear guideline recommendation yet
- Consider for suspected sepsis-related arrest

## ECPR (Extracorporeal CPR)

**Definition:** VA-ECMO initiated during cardiac arrest

**Indications ( evolving):**
- Age 18-75 years
- Witnessed arrest
- High-quality CPR for >10 min without ROSC
- Reversible cause (cardiac etiology preferred)
- No significant comorbidities
- Low-flow time <60 minutes (shorter better)

**Evidence:**
- CIRCulatory failure using Veno-Arterial ECMO (CHEER trial): Improved outcomes in selected patients
- Extracorporeal Life Support Organization (ELSO) registry: ~30% survival to discharge with ECPR
- No large RCTs yet; ARREST trial ongoing

**Practical considerations:**
- Requires ECMO-capable center
- Resource-intensive
- Vascular access complications (20-30%)
- Bleeding risk
- Need for rapid deployment system

## Coronary Angiography After Cardiac Arrest

**Immediate (within 2 hours):**
- STEMI or new LBBB: Class I recommendation
- Shockable rhythm without clear non-cardiac cause: Class IIa

**Early (within 24 hours):**
- Suspected cardiac cause without STEMI: Class IIa

**COACT trial (2019):**
- Immediate vs delayed angiography in OHCA without STEMI
- No difference in survival at 90 days
- Suggests selective rather than routine strategy

## Refractory VF/VT

**Definition:** VF/pVT persisting despite 3+ shocks

**Strategies:**

1. **Double sequential defibrillation (DSD):**
   - Two defibrillators with pads in different orientations
   - Fire simultaneously or sequentially
   - Limited evidence: Case series only
   - Risks: Damage to equipment, patient

2. **Alternative antiarrhythmic approaches:**
   - Higher dose amiodarone: No clear benefit
   - Lidocaine after amiodarone: Reasonable
   - Beta-blockade (esmolol): Case reports, may terminate electrical storm

3. **Treat underlying cause aggressively:**
   - Correct electrolytes (K+ >4.0, Mg2+ >2.0)
   - Consider coronary spasm (calcium channel blockers)
   - Consider toxins (sodium bicarbonate for Na+ channel blockers)

4. **ECPR consideration:**
   - Best outcomes for refractory VF with cardiac etiology

## Post-Cardiac Arrest Care Updates

**TTM2 trial (2021):**
- 33°C vs 37°C (avoid fever)
- No difference in functional outcome or mortality
- Simplifies management: Target normothermia (36-37°C) is acceptable
- Prevent fever (<38°C) for at least 72 hours

**CAPITALIZE registry insights:**
- Early coronary angiography improves outcomes
- Avoid hypotension (MAP <65 mmHg) strongly associated with worse outcome
- Oxygen target: SpO2 92-98% (avoid hyperoxia)

**Neuroprotection update:**
- No proven pharmacologic neuroprotectants
- Therapeutic hypothermia: Beneficial, but exact target debated
- Seizure prophylaxis: Levetiracetam commonly used, no clear mortality benefit
- EEG: Continuous monitoring preferred to detect subclinical seizures

## Prognostication: Updated Standards

**2019 AHA/ACC guidelines and 2021 ERC/ESICM statement:**

**Multimodal approach mandatory:**
- No single finding sufficient for poor prognosis
- Serial examinations required
- Examine off sedation if possible
- Wait at least 72 hours after rewarming

**Robust predictors of poor outcome:**
- Absent pupillary reflexes at 72+ hours (high specificity)
- Bilaterally absent N20 SSEP at 72+ hours (near 100% specificity)
- Diffuse anoxic injury on MRI >10% brain volume

**Unreliable early (<24h):**
- Myoclonus status epilepticus (may be effectively treated)
- Clinical exam (confounded by sedation, paralysis)
- CT (may look normal initially)

## Special Populations

**Pregnancy:**
- Left uterine displacement (manual or lateral position)
- RSI with cricoid pressure
- Consider perimortem C-section if uterus >20 weeks and >4-5 min arrest
- ACLS medications: Same doses (adjust for increased blood volume)
- TTM can be used in pregnancy

**Pediatric arrest:**
- Two-rescuer CPR preferred
- AED with pediatric pads or dose attenuator if <8 years
- Amiodarone (not lidocaine) first line
- Causes differ: Respiratory arrest most common
- Outcomes better when witnessed and CPR provided

**Novel anticoagulants:**
- DOACs (dabigatran, rivaroxaban, apixaban, edoxaban)
- Reversal agents:
  - Idarucizumab (Praxbind) for dabigatran: Immediate reversal
  - Andexanet alfa for Xa inhibitors: Rapid reversal
  - 4-factor PCC: Alternative, less data
- Does not change CPR approach but affects bleeding risk

## Ethical Considerations

**Starting CPR:**
- Presumed consent in most jurisdictions for arrest
- Documented DNR/AND: Honored if available
- Leeway for futility: Poor terminal illness, prolonged arrest without ROSC

**Stopping CPR:**
- No ROSC after 20 minutes: Consider termination (field protocols vary)
- Witnessed arrest with bystander CPR: Longer duration reasonable
- ECPR candidates: Continue to ECMO center

**EOL decisions post-arrest:**
- Multimodal prognostication required
- Family meetings with clear communication
- Ethics consult helpful for complex cases
- Organ donation considerations

## Systems of Care

**Cardiac Arrest Centers:**
- Regionalization improves outcomes
- Designation criteria: 24/7 PCI, TTM, neuroimaging, EEG, ECMO capability
- Transport protocols to bypass non-resuscitation-capable hospitals

**Bystander CPR initiatives:**
- Compression-only training improves rates
- Mandatory CPR training in schools
- Smartphone apps to alert nearby responders
- Good Samaritan laws protect lay rescuers

**Public Access Defibrillation:**
- AEDs in high-traffic locations: Associated with doubling of survival
- Cost-effectiveness: ~$50,000 per quality-adjusted life year
- Optimal placement: Transportation hubs, sports venues, schools

**Performance metrics:**
- Bystander CPR rate: Target >50%
- AED application rate: Target >10%
- ROSC rate: Target >30%
- Survival to discharge: Target >10-15%
- Good neurologic survival: Target >8%`,
      keyTerms: [
        { term: 'ECPR', definition: 'Extracorporeal CPR; VA-ECMO initiated during cardiac arrest as rescue therapy. Shows promise in selected patients with refractory arrest' },
        { term: 'double sequential defibrillation', definition: 'Using two defibrillators with different pad orientations for refractory VF. Limited evidence, may be considered for refractory VF' },
        { term: 'DOAC reversal', definition: 'Specific antidotes for novel anticoagulants: idarucizumab for dabigatran, andexanet alfa for Xa inhibitors' },
        { term: 'low-flow time', definition: 'Duration of cardiac arrest without adequate perfusion; most important predictor of ECPR outcome. Should be <60 minutes' },
        { term: 'myoclonus status epilepticus', definition: 'Continuous generalized myoclonus within 48 hours of arrest. Once considered invariably poor; now recognized as potentially treatable' },
        { term: 'CHEER trial', definition: 'Mechanical CPR, early ECPR, and cooling for refractory VF. Showed improved survival compared to historical controls' },
      ],
      analogies: [
        'ECPR for cardiac arrest is like a parachute for a falling skydiver - if you deploy it early enough, you can survive. Deploy it too late, and even the best equipment won\'t help.',
        'The decision to terminate resuscitation is like calling a game - you want to be sure it\'s truly over before you walk off the field.',
        'Multimodal prognostication is like triangulation - you need multiple reference points to determine the true location.',
      ],
      clinicalNotes: `Expert clinical pearls for cardiac arrest management:

1. **Refractory VF:** Think reversible causes. Consider ischemia, electrolytes (especially K+, Mg2+), toxins, hypothermia. Don't give up on young, healthy patients with witnessed arrest.

2. **ETCO2 as feedback:** Rising ETCO2 during CPR predicts ROSC. Sudden jump >10 mmHg usually means ROSC - check pulse before continuing compressions.

3. **Ultrasound in PEA:** Can find the cause in up to 50% of cases. Look for tamponade, PE (dilated RV), hypovolemia (collapsible IVC), pneumothorax.

4. **Post-arrest hypotension:** MAP <65 mmHg independently predicts worse neurologic outcome. Aggressively treat with fluids, pressors, inotropes, or ECMO.

5. **ECPR candidacy:** The earlier the better. Develop protocols with your ECMO team. Low-flow time is the critical determinant.

6. **Prognostication:** Never make decisions before 72 hours after rewarming. Use multiple modalities. Involve the family, ethics team, and neurology.

7. **DNR in arrest:** In most jurisdictions, EMS must start CPR unless presented with a valid DNR order. Termination requires protocols or online medical direction.

8. **Special populations:** Pregnancy requires left uterine displacement and consideration of perimortem C-section after 4-5 minutes. Children have better outcomes than adults for most causes.`,
    },
  },

  media: [
    {
      id: 'acls-cardiac-arrest-algorithm',
      type: 'diagram',
      filename: 'acls-cardiac-arrest-algorithm.svg',
      title: 'ACLS Cardiac Arrest Algorithm',
      description: 'Flow diagram for adult cardiac arrest management',
    },
    {
      id: 'cardiac-arrest-rhythms',
      type: 'diagram',
      filename: 'cardiac-arrest-rhythms.svg',
      title: 'Cardiac Arrest Rhythms',
      description: 'ECG examples of VF, VT, asystole, and PEA',
    },
    {
      id: 'cpr-hand-placement',
      type: 'diagram',
      filename: 'cpr-hand-placement.svg',
      title: 'CPR Hand Placement',
      description: 'Proper hand positioning for chest compressions',
    },
    {
      id: 'aed-pad-placement',
      type: 'diagram',
      filename: 'aed-pad-placement.svg',
      title: 'AED Pad Placement',
      description: 'Correct AED electrode positioning',
    },
  ],

  citations: [
    {
      id: 'aha-cpr-guidelines-2020',
      type: 'article',
      title: 'Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
      authors: ['Write Group on CPR', 'et al.'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000891',
      accessedDate: '2026-01-26',
    },
    {
      id: 'neumar-2015',
      type: 'article',
      title: 'Part 1: Executive Summary: 2015 AHA Guidelines Update for CPR and ECC',
      authors: ['Neumar, R.W.', 'et al.'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000252',
      accessedDate: '2026-01-26',
    },
    {
      id: 'paramedic2-trial-2018',
      type: 'article',
      title: 'Randomized Trial of Epinephrine in Out-of-Hospital Cardiac Arrest',
      authors: ['Perkins, G.D.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1806842',
      accessedDate: '2026-01-26',
    },
    {
      id: 'ttm2-trial-2021',
      type: 'article',
      title: 'Targeted Temperature Management for Out-of-Hospital Cardiac Arrest',
      authors: ['Nielsen, N.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2100591',
      accessedDate: '2026-01-26',
    },
    {
      id: 'coact-trial-2019',
      type: 'article',
      title: 'Immediate or Delayed Angiography for Out-of-Hospital Cardiac Arrest',
      authors: ['Lemkes, J.S.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1902131',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'condition', relationship: 'related', label: 'Cardiac Emergency Warning Signs' },
    { targetId: 'specialties-cardiology-arrhythmias', targetType: 'topic', relationship: 'related', label: 'Cardiac Arrhythmias' },
    { targetId: 'specialties-cardiology-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous'],
    topics: ['emergency medicine', 'resuscitation', 'CPR', 'ACLS', 'critical care'],
    keywords: ['cardiac arrest', 'CPR', 'ACLS', 'defibrillation', 'ROSC', 'ventricular fibrillation', 'AED'],
    clinicalRelevance: 'critical',
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

export default cardiacArrest;
