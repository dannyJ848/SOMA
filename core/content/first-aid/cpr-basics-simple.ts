/**
 * CPR Basics
 *
 * Comprehensive guide to cardiopulmonary resuscitation for laypeople through
 * healthcare professionals, covering adult, child, and infant CPR, AED use,
 * and the science of resuscitation.
 */

import { EducationalContent } from '../types';

export const cprBasicsSimpleContent: EducationalContent = {
  id: 'topic-cpr-basics-simple',
  type: 'topic',
  name: 'CPR Basics',
  nameEs: 'Fundamentos de RCP',
  alternateNames: ['Cardiopulmonary Resuscitation', 'Hands-Only CPR', 'Basic Life Support'],

  levels: {
    1: {
      level: 1,
      summary: 'CPR is a way to keep blood flowing to the brain and body when someone\'s heart has stopped. Pushing hard and fast on the center of the chest can keep a person alive until help arrives.',
      explanation: `CPR stands for cardiopulmonary resuscitation. That is a big word, but it simply means helping someone whose heart has stopped by pushing on their chest to pump blood through their body.

**Think of the heart like a water pump.** When the pump stops, water stops flowing through the pipes. CPR is like squeezing the pump by hand to keep water moving until someone can fix the pump. The "water" is blood, and the "pipes" are blood vessels.

**Why CPR matters:**
When the heart stops, the brain starts running out of oxygen in about 4-6 minutes. Without oxygen, the brain begins to get damaged. CPR keeps oxygen-rich blood moving to the brain and other organs, buying time until paramedics arrive with special equipment.

**How to do Hands-Only CPR (for adults):**

1. **Check the scene** — Make sure you and the person are safe.
2. **Check the person** — Tap their shoulders and shout "Are you okay?" If they do not respond, they need help.
3. **Call 911** — Tell someone nearby to call 911 and get an AED (a machine that can shock the heart). If you are alone, call 911 yourself — put it on speaker.
4. **Start chest compressions:**
   - Kneel beside the person
   - Place the heel of one hand on the center of the chest (right between the nipples)
   - Put your other hand on top and interlace your fingers
   - Keep your arms straight and push hard and fast
   - Push down at least 2 inches deep
   - Push at a rate of 100-120 times per minute (the beat of the song "Stayin' Alive" by the Bee Gees)
   - Let the chest come all the way back up between pushes
5. **Do not stop** until paramedics arrive or the person starts breathing normally.

**For babies and small children:**
- Use 2 fingers (or 2 thumbs for babies) instead of your whole hand
- Push about 1.5 inches deep for babies, 2 inches for children
- Give 30 pushes, then 2 small breaths if you are trained (tilt head, lift chin, cover mouth and nose)

**What is an AED?**
An AED (automated external defibrillator) is a machine found in many public places that can shock a stopped heart back into a normal rhythm. It has voice instructions that tell you exactly what to do — you cannot mess it up. If one is available, use it as soon as possible.

**You cannot do CPR wrong:**
Many people are afraid to try CPR because they worry about hurting the person. The truth is, if someone's heart has stopped, they will die without help. Even imperfect CPR is far better than no CPR. You are their best chance.`,
      keyTerms: [
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation — pushing on someone\'s chest to pump blood when their heart has stopped' },
        { term: 'chest compressions', definition: 'Pushing hard and fast on the center of someone\'s chest to keep blood flowing to the brain and organs' },
        { term: 'AED', definition: 'Automated external defibrillator — a machine that can shock a stopped heart back into a normal rhythm; found in public places and has voice instructions' },
        { term: 'cardiac arrest', definition: 'When the heart suddenly stops pumping blood, which is different from a heart attack (where blood flow to the heart is blocked)' },
        { term: 'oxygen', definition: 'A gas in the air that your body needs to survive; the brain can only go without it for a few minutes before damage starts' },
        { term: 'defibrillation', definition: 'Using an electrical shock to restart a heart that has stopped or is beating in a dangerous rhythm' },
      ],
      analogies: [
        'The heart is like a water pump — CPR is squeezing the pump by hand to keep water flowing through the pipes.',
        'Push at the beat of "Stayin\' Alive" — the song title even reminds you what you are trying to do.',
        'An AED is like a reset button for the heart — it gives it a jolt to get it beating normally again.',
      ],
      patientCounselingPoints: [
        'You do not need to be trained to do Hands-Only CPR — just push hard and fast on the center of the chest.',
        'Call 911 first (or have someone else call) so that professional help is on the way.',
        'Do not stop CPR until paramedics arrive — the person needs continuous chest compressions.',
        'You cannot make things worse — if someone\'s heart has stopped, doing CPR is always better than doing nothing.',
        'Take a CPR class through the Red Cross or American Heart Association — it takes only a few hours and could save a life.',
        'Learn where AEDs are located in your school, workplace, and community.',
      ],
    },
    2: {
      level: 2,
      summary: 'CPR is a critical life-saving technique that combines chest compressions with rescue breathing to maintain circulation and oxygenation during cardiac arrest. Understanding the Chain of Survival, proper technique for different age groups, and AED operation dramatically increases the chance of survival.',
      explanation: `## CPR Basics: Comprehensive Guide

### Understanding Cardiac Arrest

Cardiac arrest is when the heart suddenly stops effectively pumping blood. It is different from a heart attack:
- **Heart attack**: A blockage in a blood vessel cuts off blood flow TO part of the heart muscle. The person is usually conscious.
- **Cardiac arrest**: The heart's electrical system malfunctions, and the heart stops pumping effectively. The person is unconscious and not breathing normally.
- A heart attack can LEAD to cardiac arrest, but they are not the same thing.

### The Chain of Survival

The American Heart Association identifies five critical links:
1. **Early recognition and 911 activation**: Recognize cardiac arrest (unresponsive, absent or abnormal breathing) and call for help
2. **Early CPR**: Bystander CPR doubles or triples survival chances
3. **Early defibrillation**: AED use within the first few minutes can increase survival to 50-70%
4. **Early advanced care**: Paramedics provide medications, advanced airway management, and monitoring
5. **Post-cardiac arrest care**: Hospital-based critical care including targeted temperature management

### CPR Technique by Age Group

**Adult CPR (puberty and older):**
- Compression location: Center of chest on the lower half of the sternum
- Compression depth: At least 2 inches (5 cm) but no more than 2.4 inches (6 cm)
- Compression rate: 100-120 per minute
- Allow full chest recoil between compressions
- Compression-to-breath ratio: 30:2 (if trained and willing) or compression-only (Hands-Only CPR)
- Minimize interruptions in compressions (no more than 10 seconds for breaths or AED analysis)

**Child CPR (age 1 to puberty):**
- Same technique but may use one hand for smaller children
- Compression depth: At least one-third the depth of the chest (approximately 2 inches / 5 cm)
- Rate: 100-120 per minute
- Ratio: 30:2 (single rescuer) or 15:2 (two rescuers)
- Rescue breaths are more important for children because pediatric cardiac arrest is usually caused by respiratory failure

**Infant CPR (under 1 year):**
- Two-finger technique (single rescuer): Place 2 fingers on the sternum just below the nipple line
- Two-thumb encircling technique (two rescuers): Wrap hands around chest with thumbs on sternum — preferred technique
- Compression depth: At least one-third chest depth (approximately 1.5 inches / 4 cm)
- Rate: 100-120 per minute
- Ratio: 30:2 (single rescuer) or 15:2 (two rescuers)
- Breaths: Cover both mouth AND nose with your mouth

### Rescue Breathing

If trained and comfortable:
1. After 30 compressions, open the airway (head tilt-chin lift)
2. Pinch the nose closed (adults and children)
3. Create a seal over the mouth (or mouth and nose for infants)
4. Give 2 breaths, each lasting about 1 second
5. Watch for chest rise with each breath
6. If the chest does not rise, reposition the head and try again
7. Return to compressions immediately

**Hands-Only CPR:**
For untrained bystanders or those unwilling to give breaths, Hands-Only CPR (compressions without breaths) is recommended for adult cardiac arrest. Studies show it is nearly as effective as conventional CPR for witnessed adult cardiac arrest.

### Using an AED

1. Turn the AED on (press the power button or open the lid)
2. Attach the pads to bare skin as shown in the diagrams on the pads
   - One pad on the upper right chest (below the collarbone)
   - One pad on the lower left side (below the armpit)
   - For children under 8 or under 55 lbs: Use pediatric pads if available
3. Clear the person — make sure no one is touching them
4. Let the AED analyze the heart rhythm
5. If a shock is advised, press the shock button when prompted
6. Immediately resume CPR for 2 minutes, then the AED will analyze again

### Common Concerns
- **Rib fractures**: May occur during compressions, especially in elderly patients. This is expected and does not mean you should stop.
- **Agonal breathing**: Gasping, snoring-type breathing in cardiac arrest. This is NOT normal breathing — start CPR.
- **Legal protection**: Good Samaritan laws protect bystanders performing CPR in good faith.`,
      keyTerms: [
        { term: 'cardiac arrest', definition: 'The sudden loss of effective heart pumping due to an electrical malfunction, causing loss of consciousness and cessation of normal breathing' },
        { term: 'Chain of Survival', definition: 'The five critical links identified by the AHA that maximize cardiac arrest survival: recognition, CPR, defibrillation, advanced care, and post-arrest care' },
        { term: 'agonal breathing', definition: 'Irregular gasping breaths that can occur in the first minutes of cardiac arrest — not normal breathing and not a reason to withhold CPR' },
        { term: 'Hands-Only CPR', definition: 'CPR consisting of chest compressions without rescue breaths, recommended for untrained bystanders responding to adult cardiac arrest' },
        { term: 'full chest recoil', definition: 'Allowing the chest to return completely to its natural position between compressions, enabling the heart to refill with blood' },
        { term: 'return of spontaneous circulation (ROSC)', definition: 'When the heart resumes beating on its own after cardiac arrest, signaled by the person breathing normally, moving, or a detectable pulse' },
      ],
      patientCounselingPoints: [
        'Hands-Only CPR (push hard and fast without breaths) is recommended for bystanders who are not trained in full CPR.',
        'The speed of "Stayin\' Alive" (100-120 beats per minute) is the correct compression rate.',
        'Do not be afraid of using an AED — it will not shock a heart that does not need it.',
        'If there are two rescuers, switch who does compressions every 2 minutes to prevent fatigue.',
        'Agonal gasping is not normal breathing — if the person is unresponsive and gasping, start CPR.',
      ],
    },
    3: {
      level: 3,
      summary: 'CPR is grounded in the physiology of cardiac output generation through external chest compressions, the time-dependent nature of defibrillation success, and evidence from large registries (CARES, ROC) demonstrating that bystander intervention and system optimization are the primary modifiable determinants of cardiac arrest survival.',
      explanation: `## CPR: Intermediate Depth

### Physiology of CPR

**Mechanism of Blood Flow During CPR:**

Two complementary theories explain blood flow during chest compressions:
1. **Cardiac pump theory**: Direct compression of the heart between the sternum and spine pushes blood out of the ventricles. This is the dominant mechanism at lower compression depths.
2. **Thoracic pump theory**: Compression of the entire thorax increases intrathoracic pressure, driving blood from the thorax into the systemic circulation. Venous valves and cardiac valves prevent retrograde flow. This mechanism dominates at higher compression depths.

**Hemodynamics:**
- Optimal CPR generates approximately 25-30% of normal cardiac output
- Coronary perfusion pressure (CPP) is the difference between aortic diastolic and right atrial diastolic pressure during the relaxation phase
- CPP must exceed 15 mmHg for ROSC to be likely
- It takes approximately 5-10 compressions to build adequate CPP after any interruption — this is why minimizing pauses is critical

**Compression Fraction:**
- Defined as the percentage of time during a resuscitation during which compressions are actively being performed
- Target: greater than 80%
- Each pause in compressions causes CPP to drop to zero, requiring several compressions to rebuild
- This is why the AHA emphasizes minimizing interruptions (no more than 10 seconds for rhythm analysis or ventilation)

### The Science of Defibrillation

**Cardiac Rhythms in Arrest:**
- **Ventricular fibrillation (VF)**: Chaotic, disorganized electrical activity. The heart quivers rather than pumps. SHOCKABLE — defibrillation is the definitive treatment.
- **Pulseless ventricular tachycardia (pVT)**: Organized but too-fast rhythm that does not generate effective cardiac output. SHOCKABLE.
- **Pulseless electrical activity (PEA)**: Organized electrical activity on the monitor but no palpable pulse. NOT shockable. Treat the underlying cause (Hs and Ts).
- **Asystole**: No electrical activity (flatline). NOT shockable. Worst prognosis.

**Time-Dependent Success:**
- VF is the initial rhythm in approximately 25-35% of OHCA
- VF deteriorates to asystole over minutes as myocardial energy stores deplete
- Defibrillation success rate decreases approximately 7-10% per minute without CPR
- With CPR, the rate of decline is approximately 3-4% per minute
- This is the fundamental rationale for early CPR + early defibrillation

**Defibrillation Waveforms:**
- Modern AEDs use biphasic waveforms (current flows in two directions)
- Biphasic is more effective than older monophasic waveforms at equivalent energy levels
- Typical adult biphasic dose: 120-200 J (device-specific)
- Pediatric: 2 J/kg initial, escalating to 4 J/kg

### Evidence from Cardiac Arrest Registries

**CARES (Cardiac Arrest Registry to Enhance Survival):**
- National database with over 200 participating EMS agencies
- Overall OHCA survival to hospital discharge: approximately 10-11%
- Bystander-witnessed VF with bystander CPR and early AED: survival exceeds 40%
- Bystander CPR rate has increased from approximately 30% (2005) to approximately 40% (2020)

**ROC (Resuscitation Outcomes Consortium):**
- Multicenter research network conducting pre-hospital resuscitation trials
- ROC PRIMED trial: Dispatcher-assisted CPR with impedance threshold device (ITD) did not improve survival
- ROC CCC (Continuous Chest Compressions): No significant difference between 30:2 CPR and continuous compressions with asynchronous ventilation for OHCA

### High-Quality CPR Metrics (AHA Guidelines)

| Parameter | Target |
|-----------|--------|
| Compression rate | 100-120/min |
| Compression depth (adult) | 2-2.4 inches (5-6 cm) |
| Full chest recoil | Complete between each compression |
| Compression fraction | >80% |
| Ventilation rate | 10/min (advanced airway) or 2 breaths per 30 compressions |
| Rescuer switch | Every 2 minutes |

### Special Circumstances

**Drowning:**
- Give 5 rescue breaths before starting compressions (the cause is respiratory, so ventilation is prioritized)
- Do not attempt to drain water from lungs

**Hypothermia:**
- Continue CPR — "No one is dead until they're warm and dead"
- May need prolonged resuscitation
- Defibrillation may be ineffective below 30 degrees C core temperature

**Opioid Overdose:**
- If naloxone (Narcan) is available, administer while performing CPR
- Naloxone reverses opioid-induced respiratory depression
- If the person is in cardiac arrest (pulseless), CPR takes priority — naloxone alone will not restart a stopped heart

**Pregnancy:**
- Place a wedge or towel under the right hip to displace the uterus leftward (relieves IVC compression)
- If no ROSC within 4 minutes, consider perimortem cesarean delivery (resuscitative hysterotomy) to improve maternal hemodynamics`,
      keyTerms: [
        { term: 'coronary perfusion pressure', definition: 'The pressure gradient driving blood flow through the coronary arteries during the relaxation phase of CPR; must exceed 15 mmHg for return of spontaneous circulation to be likely' },
        { term: 'ventricular fibrillation', definition: 'A chaotic, disorganized cardiac rhythm in which the heart quivers without generating effective cardiac output; the most treatable initial rhythm in cardiac arrest via defibrillation' },
        { term: 'compression fraction', definition: 'The percentage of total resuscitation time during which chest compressions are being performed; target is greater than 80% to maintain coronary perfusion pressure' },
        { term: 'pulseless electrical activity', definition: 'A cardiac arrest rhythm showing organized electrical activity on the monitor but without a palpable pulse or effective cardiac output; not treatable with defibrillation' },
        { term: 'biphasic waveform', definition: 'A defibrillation waveform in which electrical current flows in two sequential directions through the heart, more effective at lower energy levels than older monophasic waveforms' },
        { term: 'Hs and Ts', definition: 'Mnemonic for reversible causes of cardiac arrest: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis (pulmonary/coronary)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Graduate-level CPR encompasses the electrophysiology of defibrillation, pharmacology of ACLS resuscitation drugs, post-cardiac arrest care including targeted temperature management, and critical appraisal of landmark resuscitation trials. Understanding the physiological rationale for each CPR parameter enables optimization of resuscitation quality.',
      explanation: `## CPR: Graduate-Level Detail

### Electrophysiology of Defibrillation

**Mechanism of Defibrillation:**
Defibrillation works by simultaneously depolarizing a critical mass of myocardial cells, terminating re-entrant circuits and chaotic depolarization waves. After the shock, the heart's intrinsic pacemaker cells (SA node) can potentially resume organized electrical activity.

**Critical Mass Hypothesis:**
- Successful defibrillation requires simultaneous depolarization of approximately 75-90% of the myocardium
- Current density must be sufficient across the entire heart, which is affected by pad placement, thoracic impedance, and shock energy

**Factors Affecting Defibrillation Success:**
- **Time in VF**: Longer VF duration depletes ATP and phosphocreatine stores, reducing the probability of organized post-shock rhythm
- **VF waveform characteristics**: Coarse VF (higher amplitude) has better defibrillation success than fine VF
- **AMSA (Amplitude Spectrum Area)**: Quantitative VF waveform analysis that predicts defibrillation success. Some advanced defibrillators incorporate AMSA to optimize shock timing.
- **Pre-shock pause**: Each second of pause before shock reduces success. Target: <10 seconds from last compression to shock delivery.

### ACLS Pharmacology

**Epinephrine:**
- Dose: 1 mg IV/IO every 3-5 minutes
- Mechanism: Alpha-1 adrenergic vasoconstriction increases aortic diastolic pressure, improving coronary perfusion pressure
- Beta effects: Increase myocardial oxygen demand and may worsen post-ROSC myocardial dysfunction
- PARAMEDIC2 trial (2018): Epinephrine improved ROSC and survival to hospital admission but showed NO improvement in neurologically intact survival at 30 days. This raises fundamental questions about epinephrine's net benefit.

**Amiodarone:**
- Dose: 300 mg IV/IO first dose, 150 mg second dose for refractory VF/pVT
- Mechanism: Class III antiarrhythmic; blocks potassium channels, prolongs repolarization
- ALPS trial (2016): Amiodarone and lidocaine both improved survival to hospital admission compared to placebo in shock-refractory VF, but neither improved survival to discharge with favorable neurological outcome

**Lidocaine:**
- Dose: 1-1.5 mg/kg IV/IO first dose, 0.5-0.75 mg/kg subsequent doses
- Alternative to amiodarone for VF/pVT
- ALPS trial: Equivalent to amiodarone for survival to hospital admission

**Vasopressin:**
- No longer recommended as an alternative to epinephrine (removed from ACLS algorithm in 2015 guidelines)
- Evidence showed no benefit over epinephrine alone

### Targeted Temperature Management (TTM)

**Evolution of Evidence:**
- HACA trial (2002) and Bernard (2002): Cooling to 32-34 degrees C improved neurological outcomes after VF cardiac arrest
- TTM trial (2013): 33 degrees C vs. 36 degrees C showed no significant difference in mortality or neurological outcome
- TTM2 trial (2021): Hypothermia (33 degrees C) vs. normothermia (≤37.5 degrees C) showed no benefit of hypothermia. Active prevention of fever was the key intervention.
- Current recommendation: Actively prevent fever (target ≤37.5 degrees C) for at least 72 hours. Hypothermia (32-34 degrees C) is acceptable but not proven superior to normothermia.

### Post-Cardiac Arrest Care Bundle

1. **Hemodynamic optimization**: Target MAP ≥65 mmHg (some guidelines suggest ≥80 mmHg to ensure cerebral perfusion). Vasopressors, fluids, and inotropes as needed.
2. **Ventilation**: Avoid hyperoxia (target SpO2 94-98%, PaO2 75-100 mmHg) and hypocapnia (target PaCO2 35-45 mmHg). Both hyperoxia and hypocapnia worsen neurological outcomes.
3. **Temperature management**: Prevent fever; consider hypothermia in selected patients.
4. **Coronary angiography**: Immediate for STEMI. For non-STEMI cardiac arrest etiology, timing is debated; the COACT trial showed no benefit of immediate vs. delayed angiography.
5. **Neuroprognostication**: Multimodal assessment at ≥72 hours after rewarming using clinical exam, EEG, somatosensory evoked potentials, neuroimaging, and serum biomarkers (NSE). No single test is adequate alone.

### Mechanical CPR Devices

**LUCAS (Lund University Cardiopulmonary Assist System):**
- Pneumatic or battery-powered piston device providing consistent compressions
- LINC trial: No superiority over manual CPR for overall survival
- PARAMEDIC trial: No benefit; trend toward worse neurological outcomes

**AutoPulse (load-distributing band):**
- Circumferential thoracic compression device
- CIRC trial: Non-inferior to manual CPR

**Current consensus**: Mechanical CPR is NOT superior to high-quality manual CPR. Indications include prolonged resuscitation, transport during CPR (ambulance movement degrades manual compression quality), cardiac catheterization lab, and settings where rescuer safety requires hands-free operation.`,
      keyTerms: [
        { term: 'PARAMEDIC2 trial', definition: 'A landmark double-blind RCT demonstrating that epinephrine in OHCA improved ROSC and survival to admission but did not improve neurologically favorable survival at 30 days, challenging the net benefit of epinephrine in cardiac arrest' },
        { term: 'TTM2 trial', definition: 'A large multicenter RCT demonstrating no benefit of therapeutic hypothermia (33 degrees C) compared to normothermia with active fever prevention after cardiac arrest, shifting practice toward fever avoidance as the key intervention' },
        { term: 'AMSA', definition: 'Amplitude Spectrum Area — a quantitative analysis of the VF waveform frequency content that predicts defibrillation success, potentially enabling algorithm-guided optimization of shock timing' },
        { term: 'neuroprognostication', definition: 'The multimodal assessment of neurological prognosis after cardiac arrest, performed at 72+ hours after rewarming, using clinical examination, EEG, evoked potentials, imaging, and biomarkers' },
        { term: 'coronary perfusion pressure', definition: 'The difference between aortic relaxation-phase pressure and right atrial relaxation-phase pressure; the primary determinant of myocardial blood flow during CPR, with a threshold of 15 mmHg for ROSC' },
        { term: 'COACT trial', definition: 'Coronary Angiography after Cardiac Arrest — an RCT showing no benefit of immediate versus delayed coronary angiography in cardiac arrest patients without ST-elevation, influencing post-ROSC management decisions' },
      ],
      clinicalNotes: `Graduate-level clinical considerations:

1. **Epinephrine timing**: Administer the first dose of epinephrine as early as possible for non-shockable rhythms (within 1-3 minutes). For shockable rhythms, administer after the second shock. The PARAMEDIC2 trial suggests epinephrine improves ROSC but the neurological benefit is uncertain — this is an active area of research.

2. **Post-ROSC hyperoxia avoidance**: Titrate FiO2 to maintain SpO2 94-98%. Hyperoxia (PaO2 >300 mmHg) in the post-arrest period is associated with increased mortality, likely through augmentation of reperfusion injury via reactive oxygen species.

3. **TTM in practice**: After TTM2, the strongest recommendation is active fever prevention. If using hypothermia (32-34 degrees C), avoid rebound hyperthermia during rewarming (controlled rewarming at 0.25-0.5 degrees C/hour).

4. **Mechanical CPR utility**: While not superior to manual CPR in trials, mechanical devices are valuable during transport, in the cath lab, and during prolonged resuscitations where rescuer fatigue degrades compression quality.

5. **Neuroprognostication pitfalls**: Avoid prognostication within the first 72 hours after rewarming. Sedation and hypothermia confound clinical examination and EEG. False-positive rates for poor prognosis prediction must be minimized to avoid premature withdrawal of care.

6. **CPR quality feedback**: Real-time feedback devices (accelerometer-based, audio-visual prompts) improve compression depth, rate, and recoil. Their use during all resuscitations is recommended.`,
    },
    5: {
      level: 5,
      summary: 'The frontier of resuscitation science encompasses ECPR for refractory arrest, personalized resuscitation strategies guided by real-time physiologic monitoring, novel pharmacological targets, and systems-based approaches to optimizing the chain of survival. Evidence from ARREST, PARAMEDIC2, TTM2, and emerging trials continues to redefine best practice.',
      explanation: `## CPR: Professional-Level Evidence Review

### Extracorporeal CPR (ECPR)

**The ARREST Trial (2020):**
- Single-center RCT: ECPR vs. standard ACLS for refractory VF OHCA
- ECPR arm: 43% survival to hospital discharge vs. 7% standard care
- Trial stopped early for efficacy by DSMB
- Limitations: Single center, small sample size (30 patients), highly selected population, experienced ECMO center

**The Prague OHCA Study (2022):**
- Larger multicenter RCT: Invasive approach (including ECPR) vs. standard care
- Primary outcome (180-day survival with favorable CPC): 31.5% vs. 22.0% (p=0.09)
- ECPR subgroup showed benefit, but overall trial did not reach statistical significance for the primary endpoint
- Highlights the importance of patient selection and system readiness

**Implementation Considerations:**
- Requires pre-established pathways from EMS to ECPR-capable center
- Patient selection criteria: Witnessed arrest, shockable initial rhythm, high-quality CPR, age <70 (generally), no major comorbidities, reasonable transport time (<60 minutes of CPR)
- Cannulation can occur in the ED or cardiac catheterization lab
- Requires immediate coronary angiography to identify and treat culprit lesion
- Cost-effectiveness analyses are ongoing

### Physiologically-Guided Resuscitation

**End-Tidal CO2 (ETCO2) Monitoring:**
- ETCO2 correlates with cardiac output during CPR
- An ETCO2 <10 mmHg after 20 minutes of CPR is associated with extremely poor prognosis
- Sudden rise in ETCO2 may signal ROSC before a pulse is palpable
- Limitations: Affected by ventilation rate, sodium bicarbonate administration, and pre-existing lung disease

**Arterial Waveform Analysis:**
- Diastolic arterial pressure correlates with coronary perfusion pressure
- Target diastolic pressure >25 mmHg during CPR (associated with improved ROSC rates)
- Requires arterial line placement during resuscitation, which is feasible in the ED setting

**Cerebral Oximetry (rSO2):**
- Near-infrared spectroscopy (NIRS) provides continuous non-invasive cerebral tissue oxygen saturation
- Baseline rSO2 <30% during CPR associated with poor neurological outcome
- Rising rSO2 during resuscitation may predict ROSC
- Potential role in guided CPR quality optimization and prognostication

### Novel Pharmacological Approaches

**Esmolol for Refractory VF:**
- Retrospective data and small prospective studies suggest esmolol (500 mcg/kg bolus + 100 mcg/kg/min drip) may improve outcomes in refractory VF
- Mechanism: Beta-blockade counteracts epinephrine-induced adverse effects (myocardial oxygen demand, proarrhythmia)
- The BETa-blockers in REfractory VF Out-of-Hospital Cardiac Arrest (BRECA) trial is ongoing

**Sodium Nitroprusside Enhanced CPR (SNPeCPR):**
- Intratracheal administration of sodium nitroprusside during CPR improves forward blood flow in animal models
- Combined with active compression-decompression CPR and impedance threshold device
- Phase 2 clinical trials are planned

**Head-Up CPR:**
- Elevating the head and thorax to 20-30 degrees during CPR (after a brief flat period for priming)
- Mechanism: Gravity-assisted venous drainage from the brain, combined with an impedance threshold device to enhance venous return
- Animal data shows improved cerebral perfusion and neurological outcomes
- The ProCPR trial is evaluating this approach in OHCA

### Systems Optimization

**High-Performance CPR (Pit Crew Model):**
- Predefined roles for each team member (compressor, airway, monitor/defibrillator, medication, documentation, team leader)
- Choreographed compressions-to-analysis transitions (less than 3-second pre-shock and post-shock pauses)
- Continuous audio-visual feedback on compression quality
- Demonstrated improvement in compression fraction (>90%) and survival in implementing systems

**Citizen Responder Networks:**
- Smartphone apps (PulsePoint, GoodSAM) simultaneously alert nearby CPR-trained bystanders and provide AED locations
- Swedish registry data: Citizen responder activation increased bystander CPR from 48% to 62% and reduced time to first compression
- Ethical considerations: Psychological impact on citizen responders, especially in cases of unsuccessful resuscitation

**Telephone CPR (T-CPR):**
- AHA recommends that dispatchers provide T-CPR instructions for all suspected cardiac arrests
- Compression-only instructions for adults (simpler, faster to initiate)
- Conventional CPR instructions for children (respiratory etiology)
- Quality improvement: Audio recording review and feedback to dispatchers

### Prognostication and Ethics

**Multimodal Neuroprognostication (ERC/ESICM 2021 Algorithm):**
The recommended approach at ≥72 hours after ROSC (or after rewarming if TTM was used):
1. **Clinical examination**: Absent pupillary and corneal reflexes, absent motor response or extensor posturing, status myoclonus within 72 hours
2. **EEG**: Suppressed background (<10 mcV) or burst-suppression at ≥72 hours
3. **Somatosensory evoked potentials**: Bilaterally absent N20 cortical responses
4. **Serum biomarkers**: NSE >60 mcg/L at 48-72 hours (thresholds vary by assay)
5. **Neuroimaging**: Diffuse cortical diffusion restriction on MRI or global cerebral edema on CT (GWR <1.10)
- At least TWO of these prognostic indicators must be present to predict poor outcome with high confidence
- The false-positive rate for any single test is too high to use alone

**Ethical Framework:**
- Shared decision-making with families regarding goals of care
- Avoid premature withdrawal of life-sustaining therapy (minimum 72 hours of observation)
- Consider organ donation when withdrawal is decided
- Debrief resuscitation team members — moral distress and burnout are significant concerns`,
      keyTerms: [
        { term: 'ARREST trial', definition: 'A landmark single-center RCT demonstrating dramatically improved survival (43% vs. 7%) with extracorporeal CPR compared to standard ACLS for refractory ventricular fibrillation out-of-hospital cardiac arrest' },
        { term: 'end-tidal CO2', definition: 'The partial pressure of carbon dioxide measured at end-expiration during CPR; correlates with cardiac output, serves as a quality metric for CPR effectiveness, and an ETCO2 <10 mmHg after 20 minutes predicts extremely poor prognosis' },
        { term: 'cerebral oximetry', definition: 'Near-infrared spectroscopy-based non-invasive monitoring of regional cerebral tissue oxygen saturation during CPR, providing real-time assessment of cerebral perfusion adequacy and potential prognostic information' },
        { term: 'high-performance CPR', definition: 'A systems-based approach to resuscitation with predefined team roles, choreographed transitions, real-time quality feedback, and targeted metrics (compression fraction >90%, pre-shock pause <3 seconds) demonstrated to improve survival' },
        { term: 'head-up CPR', definition: 'An emerging technique elevating the head and thorax during CPR to leverage gravity-assisted cerebral venous drainage, combined with impedance threshold device-enhanced venous return, showing improved cerebral perfusion in animal models' },
        { term: 'neuron-specific enolase', definition: 'A serum biomarker of neuronal injury used in post-cardiac arrest neuroprognostication; levels >60 mcg/L at 48-72 hours are associated with poor neurological outcome, though thresholds vary by assay and clinical context' },
      ],
      clinicalNotes: `Professional-level clinical considerations:

1. **ECPR implementation**: Systems considering ECPR should develop clear protocols for patient selection, transport logistics, cannulation team availability, and post-ECMO care pathways. The benefit is real but limited to highly selected patients and experienced systems.

2. **ETCO2 as prognostic tool**: An ETCO2 persistently <10 mmHg after 20 minutes of high-quality CPR may support termination of resuscitation, but should be interpreted cautiously. Factors affecting ETCO2 (ventilation rate, bicarbonate, PE) must be considered.

3. **Epinephrine re-evaluation**: The PARAMEDIC2 findings should prompt reflection on epinephrine use. While withholding epinephrine is not currently recommended, the drug may benefit short-term survival at the cost of neurological injury. Optimal dosing, timing, and patient selection remain uncertain.

4. **Head-up CPR**: Monitor emerging trial data. If ProCPR shows benefit, this would represent the first major change to CPR positioning since the procedure was developed. Implementation requires specialized equipment (automated CPR device, impedance threshold device, elevation device).

5. **Neuroprognostication discipline**: Strictly adhere to the multimodal, time-gated approach. Premature prognostication leads to self-fulfilling prophecy. Ensure all team members understand that no single test is sufficient.

6. **Resuscitation team wellness**: Implement post-resuscitation debriefing programs. Cumulative exposure to cardiac arrest resuscitation, particularly unsuccessful ones, contributes to provider burnout and moral injury.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-cpr-1',
      type: 'guideline',
      title: '2020 AHA Guidelines for CPR and Emergency Cardiovascular Care',
      source: 'American Heart Association',
      url: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-cpr-2',
      type: 'guideline',
      title: 'CPR Steps — American Red Cross',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/take-a-class/cpr',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-cpr-3',
      type: 'guideline',
      title: 'Cardiac Arrest Data and Statistics',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/heartdisease/cardiac-arrest.htm',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-when-to-call-911',
      targetType: 'topic',
      relationship: 'related',
      label: 'When to Call 911',
    },
    {
      targetId: 'topic-choking-all-ages',
      targetType: 'topic',
      relationship: 'related',
      label: 'Choking Response for All Ages',
    },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['first-aid', 'resuscitation', 'emergency-care', 'cardiac-arrest'],
    keywords: ['CPR', 'AED', 'defibrillation', 'cardiac arrest', 'chest compressions', 'ACLS', 'BLS'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
