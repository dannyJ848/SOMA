/**
 * Neurologic Emergencies
 *
 * Covers stroke, seizures, status epilepticus, headache emergencies,
 * and other acute neurologic conditions requiring rapid evaluation.
 */

import { EducationalContent } from '../types';

export const neurologicEmergenciesContent: EducationalContent = {
  id: 'emergency-neurologic',
  type: 'topic',
  name: 'Neurologic Emergencies',
  nameEs: 'Emergencias Neurologicas',
  alternateNames: ['Acute Neurologic Conditions', 'Stroke Emergency', 'Seizure Emergency', 'Neurological Crisis'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurologic emergencies are serious problems with the brain and nerves that need immediate help, such as strokes, seizures, and very bad headaches, because quick treatment can prevent permanent damage.',
      explanation: `Your brain is like the control center of your body. It tells your muscles to move, processes what you see and hear, stores memories, and controls everything that makes you who you are. When something goes wrong in your brain, it can be very serious and needs help fast.

**Types of Neurologic Emergencies:**

**Stroke:**
- Happens when blood flow to part of the brain is blocked
- Brain cells start to die within minutes
- Causes sudden weakness, trouble speaking, or vision problems
- Like a heart attack, but in the brain
- Every minute counts - faster treatment means better recovery

**Seizure:**
- A burst of abnormal electrical activity in the brain
- Can cause shaking, staring, confusion, or unusual movements
- Usually lasts a few minutes
- Person may be confused afterward
- Some people have seizures repeatedly (epilepsy)

**Status Epilepticus:**
- A seizure that won't stop or seizures that happen one after another
- Medical emergency requiring immediate treatment
- Can cause brain damage if it continues too long

**Severe Headache:**
- Thunderclap headache: Sudden, extremely painful headache
- Could be caused by bleeding in the brain
- Worst headache of your life
- Needs emergency evaluation

**Meningitis:**
- Infection of the tissues covering the brain and spinal cord
- Causes headache, fever, stiff neck, confusion
- Can be life-threatening if not treated quickly

**Stroke Warning Signs - FAST:**

**F - Face Drooping**
- One side of face droops or feels numb
- Smile appears uneven

**A - Arm Weakness**
- One arm feels weak or numb
- One arm drifts downward when both are raised

**S - Speech Difficulty**
- Speech is slurred or strange
- Can't find the right words
- Hard to understand others

**T - Time to Call 911**
- Call immediately if you see these signs
- Note the time symptoms started
- Don't wait to see if it goes away

**What to Do for Someone Having a Seizure:**
- Keep them safe - move things away they could hit
- Don't hold them down or put anything in their mouth
- Put something soft under their head
- Roll them on their side if possible
- Time the seizure
- Call 911 if it lasts more than 5 minutes or another starts right away
- Stay with them until they're fully alert

**Why Speed Matters:**
- Brain cells start dying within minutes during a stroke
- The clot-busting drug for stroke only works within a few hours
- Seizures that last too long can damage the brain
- Brain infections can get worse quickly without treatment

**After Treatment:**
- Stroke patients may need rehabilitation to relearn skills
- Seizure patients usually need to take medicine regularly
- Brain injuries can take a long time to heal
- Some problems may be permanent

Remember: If someone suddenly has trouble speaking, weakness on one side, confusion, or a terrible headache, call 911 right away. Don't wait to see if it gets better.`,
      keyTerms: [
        { term: 'stroke', definition: 'When blood flow to part of the brain is blocked, causing brain cells to die' },
        { term: 'seizure', definition: 'A sudden burst of abnormal electrical activity in the brain that can cause shaking or changes in behavior' },
        { term: 'FAST', definition: 'Face, Arm, Speech, Time - mnemonic to remember stroke warning signs' },
        { term: 'thunderclap headache', definition: 'An extremely severe headache that comes on suddenly, like a clap of thunder' },
        { term: 'meningitis', definition: 'Infection of the protective tissues covering the brain and spinal cord' },
      ],
      analogies: [
        'A stroke is like a blockage in a water pipe - no water gets through, so the plants downstream die.',
        'A seizure is like an electrical storm in the brain - too much activity at once causes problems.',
        'The brain is like a computer\'s processor - if it stops working properly, nothing else functions correctly.',
      ],
      examples: [
        'A 70-year-old suddenly can\'t lift their right arm and their speech is slurred.',
        'A college student has a seizure during finals week from sleep deprivation.',
        'Someone develops the worst headache of their life while exercising.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurologic emergencies including ischemic and hemorrhagic stroke, seizures, status epilepticus, meningitis, and subarachnoid hemorrhage require rapid recognition and time-critical interventions to prevent permanent neurologic injury and death.',
      explanation: `## Stroke: Brain Attack

A stroke is a medical emergency where blood flow to part of the brain is interrupted. Without oxygen-rich blood, brain cells begin to die within minutes.

**Types of Stroke:**

**Ischemic Stroke (87% of strokes):**
- Blood clot blocks a blood vessel in the brain
- May be caused by:
  - Thrombotic: Clot forms at site of fatty plaque
  - Embolic: Clot travels from elsewhere (usually heart)
- Treatable with clot-busting drug (tPA) if given within 3-4.5 hours

**Hemorrhagic Stroke (13% of strokes):**
- Blood vessel in brain leaks or bursts
- Causes:
  - Intracerebral hemorrhage: Bleeding into brain tissue
  - Subarachnoid hemorrhage: Bleeding into space around brain
- Usually from high blood pressure or aneurysm rupture
- tPA makes this worse - different treatment needed

**Transient Ischemic Attack (TIA):**
- "Mini-stroke" with temporary symptoms
- Same warning signs as stroke but symptoms resolve
- Important warning sign - high risk of full stroke soon
- Needs urgent evaluation

**Recognizing Stroke: BE FAST or FAST**

**B - Balance:** Sudden loss of balance or coordination
**E - Eyes:** Sudden vision changes in one or both eyes
**F - Face:** Facial drooping, usually on one side
**A - Arm:** Arm weakness or numbness, one side
**S - Speech:** Slurred speech, difficulty speaking or understanding
**T - Time:** Call 911 immediately - time is brain

**Time Windows for Treatment:**
- tPA (clot-buster): Must be given within 3-4.5 hours of symptom onset
- Mechanical thrombectomy: Can be done up to 6-24 hours in selected patients
- Every 1.9 million neurons are lost per minute during untreated stroke

## Seizures and Epilepsy

**What is a Seizure?**
- Sudden, uncontrolled electrical disturbance in the brain
- Can cause changes in behavior, movements, feelings, and consciousness

**Types of Seizures:**

**Focal Onset (starts in one part of brain):**
- Focal aware: Person stays awake and aware (simple partial)
- Focal impaired awareness: Altered consciousness (complex partial)
- May spread to become generalized

**Generalized Onset (affects both sides of brain):**
- Absence: Brief staring spells (petit mal)
- Tonic-clonic: Convulsions with loss of consciousness (grand mal)
- Atonic: Sudden loss of muscle tone (drop attacks)
- Myoclonic: Sudden jerks

**Status Epilepticus:**
- Seizure lasting >5 minutes OR
- Three or more seizures without full recovery between
- Medical emergency requiring immediate treatment
- Can cause permanent brain damage
- First-line: Benzodiazepines (lorazepam, midazolam)

**Seizure First Aid:**
- Keep person safe from injury
- Don't restrain or put anything in mouth
- Protect head, loosen tight clothing
- Turn on side if possible
- Call 911 if: first seizure, lasts >5 min, injury occurs, pregnant, or another starts

## Headache Emergencies

**Red Flag Headache Features:**
- Sudden onset, severe ("thunderclap")
- Worst headache of your life
- Different from your usual headaches
- Fever with stiff neck
- Neurologic symptoms (weakness, vision changes)
- Headache after head injury
- New headache after age 50
- Worsening pattern over days/weeks

**Thunderclap Headache:**
- Reaches maximum intensity within 1 minute
- Subarachnoid hemorrhage until proven otherwise
- May indicate ruptured aneurysm
- Needs CT scan and lumbar puncture

## Meningitis and Encephalitis

**Meningitis:**
- Inflammation of meninges (tissues covering brain/spinal cord)
- Symptoms: Fever, headache, stiff neck, photophobia, confusion
- Kernig sign: Pain on knee extension when hip flexed
- Brudzinski sign: Involuntary hip flexion when neck flexed
- Bacterial meningitis is life-threatening emergency

**Encephalitis:**
- Inflammation of brain tissue itself
- Viral infection most common (HSV, West Nile)
- Symptoms: Fever, headache, confusion, seizures, focal deficits
- Requires acyclovir for suspected HSV

## Acute Weakness

**Guillain-Barré Syndrome:**
- Ascending weakness starting in legs
- May progress to respiratory failure
- Areflexia (loss of reflexes)
- Medical emergency if respiratory muscles affected

**Myasthenia Gravis Crisis:**
- Worsening weakness
- May cause respiratory failure
- Ptosis, diplopia, difficulty swallowing
- Treat with pyridostigmine, possibly plasmapheresis or IVIG

## When to Call 911

**Immediate emergency for neurologic symptoms:**
- Sudden weakness, numbness, or paralysis
- Sudden difficulty speaking or understanding
- Sudden vision problems
- Sudden severe headache
- Sudden loss of balance or coordination
- Seizure lasting more than 5 minutes
- First-time seizure
- Confusion or altered mental status
- High fever with stiff neck and headache
- Sudden, severe weakness (ascending pattern)`,
      keyTerms: [
        { term: 'ischemic stroke', definition: 'Stroke caused by a blood clot blocking blood flow to the brain' },
        { term: 'hemorrhagic stroke', definition: 'Stroke caused by bleeding into or around the brain' },
        { term: 'tPA', definition: 'Tissue plasminogen activator; clot-busting drug for ischemic stroke', pronunciation: 'T-P-A' },
        { term: 'aneurysm', definition: 'Weak spot in blood vessel wall that can burst and cause bleeding' },
        { term: 'TIA', definition: 'Transient Ischemic Attack; temporary stroke symptoms that resolve; warning sign of future stroke' },
        { term: 'meninges', definition: 'Three layers of tissue that cover and protect the brain and spinal cord' },
        { term: 'photophobia', definition: 'Sensitivity to light; common in meningitis and migraine' },
      ],
      analogies: [
        'An ischemic stroke is like a blocked highway - cars (blood) can\'t get through to their destination.',
        'A hemorrhagic stroke is like a burst pipe - water (blood) leaks where it shouldn\'t.',
        'A seizure is like an electrical storm in the brain - too much activity creates chaos.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurologic emergencies require rapid differentiation between ischemic and hemorrhagic processes, urgent neuroimaging, and timely initiation of targeted therapies including thrombolysis for stroke, antiepileptics for seizures, and antimicrobials for central nervous system infections.',
      explanation: `## Stroke Evaluation and Management

**Initial Assessment:**

**First Questions:**
- What time did symptoms start? (Last known normal time)
- Was onset sudden or gradual?
- What symptoms are present?
- Any seizure activity?
- Medical history (hypertension, anticoagulation, prior stroke)?

**Rapid Neurologic Exam:**
- Level of consciousness
- Pupils (size, equality, reactivity)
- Eye movements (gaze preference, nystagmus)
- Facial movement (asymmetry)
- Arm drift (both arms extended, palms up)
- Hand grip strength
- Leg strength (raise legs against resistance)
- Sensation (light touch)
- Speech (repetition, comprehension, reading, writing)
- Gait (if safe)

**Stroke Scales:**

**NIH Stroke Scale (NIHSS) - Key Elements:**
- Level of consciousness (0-3)
- Best gaze (0-2)
- Visual fields (0-3)
- Facial palsy (0-3)
- Motor arm (0-4 each side)
- Motor leg (0-4 each side)
- Limb ataxia (0-2)
- Sensory (0-2)
- Best language (0-3)
- Dysarthria (0-2)
- Extinction/inattention (0-2)

Total 0-42, higher = worse stroke
>20: Severe stroke

**Imaging:**

**Non-contrast CT Head:**
- First-line imaging (fast, widely available)
- Rules out hemorrhage (contraindication to tPA)
- Early ischemic signs may be subtle (loss of gray-white differentiation)
- Must be done within 25 minutes of arrival (door-to-CT)

**CT Angiography (CTA):**
- Shows blood vessels
- Identifies large vessel occlusion
- Shows aneurysm in SAH

**CT Perfusion (CTP):**
- Shows core vs penumbra
- Helps identify candidates for late-window thrombectomy

**MRI:**
- DWI sequence shows ischemia within minutes
- More sensitive than CT for early stroke
- Longer acquisition time, less available

**Ischemic Stroke Treatment:**

**IV Thrombolysis (tPA):**
- Indicated for acute ischemic stroke within 3-4.5 hours
- Contraindications:
  - Intracranial hemorrhage on CT
  - Symptoms >4.5 hours (or >3 hours for some criteria)
  - Major surgery or trauma in past 14 days
  - GI or GU bleeding in past 21 days
  - Platelet count <100,000
  - INR >1.7 or on warfarin
  - BP >185/110
  - Blood glucose <50 or >400

**Dosing:**
- 0.9 mg/kg (max 90 mg)
- 10% as bolus, rest over 1 hour
- Monitor closely for bleeding

**Endovascular Therapy:**
- Mechanical thrombectomy for large vessel occlusion
- Can be done up to 6-24 hours in selected patients
- Criteria: Clinical-core mismatch (penumbra present)
- Devices: Stent retriever, aspiration thrombectomy

**Hemorrhagic Stroke Treatment:**

**Intracerebral Hemorrhage:**
- Reverse anticoagulation if present
- Control BP (systolic <140)
- Surgical evacuation considered for:
  - Cerebellar hemorrhage >3 cm
  - Lobar hemorrhage with deterioration
  - Young patients with accessible hemorrhage

**Subarachnoid Hemorrhage:**
- Secure aneurysm (coiling or clipping) within 72 hours
- Nimodipine to prevent vasospasm
- Monitor for vasospasm (transcranial Doppler)
- Ventriculostomy if hydrocephalus

## Seizure Management

**Initial Management:**
- ABCs: Airway, Breathing, Circulation
- Oxygen if hypoxic
- IV access
- Fingerstick glucose
- Benzodiazepine first-line
  - Lorazepam 0.1 mg/kg IV (max 4 mg)
  - Midazolam 10 mg IM/IN/buccal if no IV
  - Diazepam 5-10 mg IV (or rectal gel)

**Status Epilepticus Definition:**
- Convulsive status: Seizure >5 min or recurrent without recovery
- Refractory status: Fails 2-3 appropriately chosen meds
- Super-refractory: Continues 24+ hours after anesthesia

**Treatment Stages:**

**Stage 1 (0-30 min):**
- Benzodiazepine (lorazepam IV)

**Stage 2 (30-60 min):**
- Second AED: Fosphenytoin 20 mg PE/kg, Valproate 40 mg/kg, or Levetiracetam 60 mg/kg

**Stage 3 (60+ min):**
- Intubation and continuous EEG
- Propofol, midazolam, or pentobarbital infusion
- Goal: Burst suppression on EEG

**Post-ictal State:**
- Confusion, fatigue after seizure
- May last minutes to hours
- Todd's paralysis: Temporary weakness after seizure
- Distinguish from stroke (improves over time)

## Meningitis Workup

**Lumbar Puncture Findings:**

| Parameter | Normal | Bacterial | Viral | Fungal |
|-----------|--------|----------|-------|--------|
| Opening pressure | 6-25 | Elevated | Normal/high | Elevated |
| WBC | 0-5 | High (PMN) | Mild (lympho) | Mod (lympho) |
| Protein | 15-45 | High | Mild high | High |
| Glucose | 40-70 | Low | Normal | Low |
| Gram stain | Neg | Positive | Neg | May see fungus |

**Empiric Treatment:**
- Ceftriaxone + Vancomycin + Acyclovir
- Add Ampicillin if >50 years (Listeria)
- Steroids before antibiotics if pneumococcal suspected

## Acute Headache Evaluation

**Subarachnoid Hemorrhage Workup:**
1. Non-contrast CT (sensitivity 95-98% day 0)
2. If CT negative and suspicion high: Lumbar puncture
3. Look for xanthochromia or RBCs that don't clear

**Other Causes of Thunderclap Headache:**
- Reversible cerebral vasoconstriction syndrome (RCVS)
- Cervical artery dissection
- Pituitary apoplexy
- Hypertensive crisis
- Sentinel headache (small leak before major SAH)`,
      keyTerms: [
        { term: 'NIHSS', definition: 'National Institutes of Health Stroke Scale; standardized stroke severity assessment' },
        { term: 'penumbra', definition: 'Area of brain around dead core that is ischemic but salvageable with treatment' },
        { term: 'large vessel occlusion', definition: 'Blockage of major brain artery (ICA, MCA, basilar); may need thrombectomy' },
        { term: 'xanthochromia', definition: 'Yellowish CSF color from breakdown of RBCs; indicates subarachnoid hemorrhage' },
        { term: 'Todd\'s paralysis', definition: 'Temporary weakness or paralysis following a seizure; mimics stroke but resolves' },
        { term: 'burst suppression', definition: 'EEG pattern of bursts of activity separated by suppression; goal in refractory status treatment' },
        { term: 'vasospasm', definition: 'Narrowing of blood vessels; common complication after subarachnoid hemorrhage' },
      ],
      clinicalNotes: 'Time is brain. Document the last time the patient was known to be normal - this determines eligibility for tPA.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of neurologic emergencies requires understanding of cerebrovascular pathophysiology, seizure semiology, CNS infection patterns, and evidence-based protocols for thrombolysis, thrombectomy, antiepileptic therapy, and neurocritical care.',
      explanation: `## Advanced Stroke Concepts

**Collateral Circulation:**
- Primary collaterals: Circle of Willis
- Secondary collaterals: Leptomeningeal anastomoses
- Good collaterals predict:
  - Smaller infarct core
  - Larger penumbra
  - Better response to reperfusion
  - Better outcomes

**Ischemic Penumbra:**
- Tissue with reduced blood flow but not yet infarcted
- Electrical failure but membranes intact
- Salvageable with timely reperfusion
- Concept guides treatment beyond traditional time windows

**Imaging the Penumbra:**
- CT perfusion: CBV vs CBF mismatch
- MRI: DWI vs FLAIR mismatch
- Clinical-core mismatch: NIHSS vs infarct volume

**Extended Window Thrombectomy:**

**DAWN Trial (2018):**
- 6-24 hours, wake-up strokes
- Clinical-core mismatch
- Stroke severity > deficit size
- NNT = 2 for functional independence

**DEFUSE-3 Trial (2018):**
- 6-16 hours
- Perfusion mismatch on CTP/MRI
- NNT = 2 for favorable outcome

**Posterior Circulation Stroke:**
- Basilar artery occlusion: devastating if untreated
- Thrombectomy up to 24 hours (ATTENTION, BASILAR trials)
- Symptoms: Quadriparesis, coma, "locked-in" syndrome
- Worse outcomes than anterior circulation

**Stroke Mimics:**

| Mimic | Key Features | Clues |
|-------|--------------|-------|
| Migraine | Headache, gradual onset | Progressive buildup, history |
| Seizure (post-ictal) | Todd's paralysis | Improves over time |
| Hypoglycemia | Confusion, focal findings | Low glucose, responds to glucose |
| Complex migraine | Aura, visual symptoms | Headache prominent |
| Functional disorder | Inconsistent findings | Incongruent with neuroanatomy |
| CNS tumor | Subacute progression | Headache, worse over weeks |

**Stroke Complications:**

**Early (within 7 days):**
- Neurologic deterioration (edema, hemorrhagic transformation)
- Seizures (more common with hemorrhagic)
- Aspiration pneumonia
- UTI
- DVT/PE

**Late:**
- Spasticity
- Depression
- Cognitive impairment
- Post-stroke pain (central pain, thalamic pain syndrome)

## Advanced Seizure Concepts

**Seizure Semiology:**

**Temporal Lobe Epilepsy:**
- Aura: Epigastric rising sensation, deja vu, fear
- Automatisms: Lip smacking, picking at clothes
- Post-ictal: Confusion, aphasia (dominant side)

**Frontal Lobe Epilepsy:**
- Brief, frequent seizures
- Hyperkinetic: Thrashing, bicycling movements
- Minimal post-ictal confusion
- May be misdiagnosed as psychogenic

**Occipital Lobe Epilepsy:**
- Visual phenomena: Scintillations, shapes
- Contralateral visual field loss
- Eye deviation

**Status Epilepticus Pathophysiology:**
- Initial: Excitotoxicity, glutamate surge
- Self-sustaining phase: Failure of inhibitory mechanisms
- Late: Cellular damage, receptor internalization
- Pharmacoresistance develops over time

**Refractory Status Epilepticus:**
- Consider alternative etiologies:
  - Non-convulsive status (needs EEG)
  - Psychogenic nonepileptic seizures
  - Autoimmune encephalitis (NMDA receptor, LGI1)
  - Genetic epilepsy (Dravet syndrome)
  - Progressive neurologic disease

**Super-refractory Status Epilepticus:**
- Continuous seizures >24-48 hours despite anesthesia
- Consider:
  - Ketogenic diet
  - Immunotherapy if autoimmune suspected
  - Hypothermia (limited evidence)
  - VNS, DBS, RNS (neurostimulation)

## Meningitis and Encephalitis

**Bacterial Meningitis Pathogens:**

| Age Group | Common Pathogens |
|-----------|------------------|
| 0-1 month | Group B Strep, E. coli, Listeria |
| 1-23 months | S. pneumoniae, N. meningitidis, H. influenzae |
| 2-50 years | N. meningitidis, S. pneumoniae |
| >50 years | S. pneumoniae, Listeria, Gram-negatives |

**Viral Encephalitis:**
- HSV: Most common fatal sporadic encephalitis
  - Temporal lobe involvement
  - Fever, headache, confusion, seizures
  - MRI: Temporal lobe hyperintensity
  - Treat with acyclovir (don't wait for confirmation)
- West Nile Virus: Flaccid paralysis, Parkinsonism
- Enteroviruses: Meningoencephalitis, myocarditis
- VZV: Can cause encephalitis, especially in immunocompromised

**Autoimmune Encephalitis:**
- NMDA receptor: Psychiatric symptoms, movements, autonomic instability
- LGI1: Faciobrachial dystonic seizures
- Hashimoto encephalopathy: Confusion, myoclonus
- Treat with immunotherapy (steroids, IVIG, PLEX)

## CNS Vascular Disorders

**Cerebral Venous Sinus Thrombosis:**
- Headache (often thunderclap)
- May have seizures, focal deficits
- Predisposing: OCPs, pregnancy, hypercoagulable
- Diagnosis: MR venography or CT venography
- Treatment: Anticoagulation (even with hemorrhage)

**Reversible Cerebral Vasoconstriction Syndrome (RCVS):**
- Thunderclap headaches, recurrent over days-weeks
- Vasoconstriction of cerebral arteries
- Can cause stroke, SAH
- Triggers: Postpartum, vasoactive drugs
- Treatment: Calcium channel blockers
- Resolves over weeks-months

**CNS Vasculitis:**
- Primary angiitis of CNS (PACNS)
- Secondary: SLE, RA, Sjogren, infection
- Headache, cognitive changes, focal deficits
- Diagnosis: Angiography (conventional or MR/CT)
- Treatment: Steroids + cyclophosphamide

## Neuromuscular Respiratory Failure

**Guillain-Barré Syndrome:**
- Acute inflammatory demyelinating polyneuropathy (AIDP)
- Acute motor axonal neuropathy (AMAN)
- Miller Fisher variant: Ophthalmoplegia, ataxia, areflexia
- Respiratory failure in 20-30%
- Monitor FVC, NIF
- Treat with IVIG or plasmapheresis
- Watch for autonomic dysfunction

**Myasthenia Gravis Crisis:**
- Worsening weakness from infection, medication change, pregnancy
- Respiratory muscles affected
- Edrophonium (Tensilon) test (historical)
- Antibodies: AChR (85%), MuSK (5-10%)
- Treatment: Pyridostigmine, steroids, IVIG, PLEX`,
      keyTerms: [
        { term: 'circle of Willis', definition: 'Ring of arteries at base of brain providing collateral circulation' },
        { term: 'leptomeningeal anastomoses', definition: 'Small connections between surface blood vessels providing collateral flow' },
        { term: 'automatisms', definition: 'Semi-purposeful movements during seizures (lip smacking, picking)' },
        { term: 'Todd\'s paresis', definition: 'Temporary focal weakness after focal seizure; can mimic stroke' },
        { term: 'post-ictal', definition: 'Period immediately following a seizure; patient may be confused or drowsy' },
        { term: 'NMDA receptor encephalitis', definition: 'Autoimmune encephalitis with psychiatric symptoms, seizures, dyskinesias' },
        { term: 'FVC', definition: 'Forced Vital Capacity; lung function measure; <20 mL/kg indicates need for intubation' },
      ],
      clinicalNotes: 'Status epilepticus becomes harder to treat the longer it continues. Aggressive early treatment prevents pharmacoresistance.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of neurologic emergencies integrates advanced neuroimaging, evidence-based thrombolysis and thrombectomy protocols, EEG-guided seizure management, and comprehensive neurocritical care to optimize outcomes across the spectrum of acute neurologic conditions.',
      explanation: `## Evidence-Based Stroke Care

**2023 AHA/ASA Stroke Guidelines:**

**Door-to-Treatment Metrics:**
- Door-to-CT <20 minutes
- CT-to-needle <45 minutes (ideal <30 minutes)
- Door-to-needle <60 minutes (ideal <45 minutes)
- Door-to-groin puncture <90 minutes (direct arrival)
- Door-to-groin puncture <120 minutes (transfer patients)

**Expanded Thrombolysis Indications:**
- Wake-up stroke: MRI DWI-FLAIR mismatch (FLAIR negative in region of DWI positivity)
- Unknown time: Last known normal >4.5 hours ago but eligible for thrombectomy
- Mild stroke: Consider tPA if disabling deficits (even if NIHSS low)

**Mechanical Thrombectomy Updates:**
- Indicated for LVO in anterior circulation up to 24 hours (DAWN, DEFUSE-3 criteria)
- Devices: Stent retrievers and aspiration both first-line
- General anesthesia associated with worse outcomes (conscious sedation preferred)
- Tandem occlusions (ICA + MCA): Treat both lesions

**Blood Pressure Management:**

**Ischemic Stroke (not receiving tPA):**
- Permissive hypertension up to 220/120
- Antihypertensives if >220/120 or planned thrombolysis/thrombectomy

**Ischemic Stroke (receiving tPA):**
- Maintain <185/110 before and during tPA
- Monitor every 15 minutes for 2 hours

**Hemorrhagic Stroke:**
- Systolic BP target <140 (INTERACT2, ATACH-2 trials)
- Avoid rapid drops >25% in first hour

**Secondary Prevention:**
- Antiplatelet: Aspirin, clopidogrel, or aspirin+dipyridamole
- Anticoagulation for AF: DOACs preferred over warfarin
- Carotid stenosis: CEA or CAS if symptomatic >50%
- Patent foramen ovale: Consider closure if <60 and cryptogenic stroke
- Lipid management: High-intensity statin, target LDL <70 (or <55 very high risk)

## Advanced Epilepsy Management

**Status Epilepticus Guidelines (2022 Neurocritical Care Society):**

**Treatment Algorithm:**

1. **Stabilization (0-5 min):**
   - Airway, oxygen, IV access
   - Glucose check
   - Thiamine if alcohol use disorder

2. **Initial therapy (5-20 min):**
   - Benzodiazepine (lorazepam 0.1 mg/kg IV OR midazolam 10 mg IM)
   - Second AED: Levetiracetam (60 mg/kg), valproate (40 mg/kg), or fosphenytoin (20 mg PE/kg)

3. **Refractory status (20-40 min):**
   - Intubation for airway protection
   - Continuous EEG monitoring
   - Anesthetic doses: Midazolam, propofol, or pentobarbital

4. **Super-refractory status (40+ min):**
   - Titrate anesthetic to burst suppression
   - Consider ketogenic diet, immunotherapy, hypothermia
   - Evaluate for underlying cause

**EEG in Critical Care:**
- Indicated for:
  - Unexplained altered mental status
  - Suspected non-convulsive status
  - Post-cardiac arrest prognostication
  - Monitoring during therapeutic coma
- Non-convulsive seizures in 10-20% of comatose ICU patients
- Continuous EEG preferred over routine EEG

**SUDEP (Sudden Unexpected Death in Epilepsy):**
- Incidence: 1.16 per 1000 patient-years
- Risk factors: Generalized tonic-clonic seizures, nocturnal seizures, poor adherence
- Prevention: Medication adherence, seizure detection devices, nighttime supervision

## Meningitis and Encephalitis Updates

**Bacterial Meningitis:**
- Empiric regimen: Ceftriaxone + vancomycin + ampicillin (if >50)
- Dexamethaside before or with antibiotics (reduces mortality in pneumococcal)
- Duration: 7 days (meningococcal), 10-14 days (pneumococcal), 14-21 days (Gram-negative)
- Prophylaxis for close contacts of meningococcal meningitis (rifampin, ciprofloxacin, or ceftriaxone)

**Autoimmune Encephalitis:**
- NMDA receptor encephalitis:
  - Psychiatric symptoms → seizures → autonomic instability → movement disorder
  - Ovarian teratoma in women (40%)
  - Treatment: Tumor resection + steroids + IVIG or PLEX + rituximab/cyclophosphamide
- LGI1 encephalitis: Faciobrachial dystonic seizures, hyponatremia
- Hashimoto encephalopathy: Anti-thyroid antibodies, dramatic response to steroids

**Infectious Encephalitis:**
- HSV encephalitis: Acyclovir 10 mg/kg q8h × 14-21 days
- VZV encephalitis: Acyclovir plus corticosteroids
- West Nile: No proven antiviral therapy
- HIV-associated: Consider IRIS with immune reconstitution

## Advanced Neuroimaging

**Stroke Imaging:**

**CT Perfusion:**
- Cerebral blood volume (CBV): Core infarct (irreversible)
- Cerebral blood flow (CBF): Tissue at risk
- MTT (mean transit time) or TMAX: Prolonged in ischemia
- Mismatch = salvageable tissue (penumbra)

**MRI Stroke Protocols:**
- DWI: Shows infarct within minutes
- ADC: Confirms cytotoxic edema
- FLAIR: DWI-FLAIR mismatch = <4.5 hours (wake-up stroke)
- SWI/GRE: Detects hemorrhage
- MRA: Vessel occlusion or stenosis

**SAH Imaging:**
- Non-contrast CT: Sensitivity ~95% day 0, decreases to 50% by day 5
- Lumbar puncture: Xanthochromia, RBCs that don't decrease across tubes
- CTA: Detect aneurysm (sensitivity 95%)
- DSA: Gold standard for vascular anatomy

## Neurocritical Care

**ICP Monitoring:**
- Indicated for severe TBI (GCS ≤8) with abnormal CT
- Goal ICP <22 mmHg
- CPP (MAP - ICP) goal: 60-70 mmHg
- Treatments: Elevate head of bed, sedation, osmotherapy (mannitol, hypertonic saline), hyperventilation (temporary)

**Seizure Prophylaxis:**
- TBI, SAH, ICH, craniotomy: Consider levetiracetam
- Stroke: Not routinely recommended
- Most seizures occur in first week

**Temperature Management:**
- Fever increases metabolic demand and ICP
- Target normothermia (36-37.5°C)
- Antipyretics, cooling devices

**Glucose Management:**
- Hyperglycemia: Worse outcomes
- Hypoglycemia: Dangerous
- Target: 140-180 mg/dL

**DVT Prophylaxis:**
- All neurologic patients with immobility
- Sequential compression devices
- Chemical prophylaxis when hemorrhage controlled (usually day 2-3)

## Post-Stroke Care

**Early Mobilization:**
- Begin when medically stable (usually day 1-2)
- Improves outcomes (AVERT trial showed earlier not always better - timing matters)

**Dysphagia Screening:**
- Before any oral intake
- Bedside swallow exam
- Speech therapy consultation if failed screen

**Post-Stroke Complications:**
- Depression: Screen (PHQ-9), treat
- Spasticity: Physical therapy, botox, baclofen
- Shoulder pain: Proper positioning, subluxation management
- Central post-stroke pain: Gabapentin, pregabalin, TCAs

**Stroke Centers:**
- Primary stroke center: Acute stroke care, tPA, basic ICU
- Comprehensive stroke center: All capabilities + thrombectomy, neurocritical care
- Thrombectomy-capable stroke center: Can do mechanical thrombectomy`,
      keyTerms: [
        { term: 'door-to-needle', definition: 'Time from hospital arrival to tPA administration; goal <60 minutes' },
        { term: 'door-to-groin', definition: 'Time from arrival to arterial puncture for thrombectomy; goal <90 minutes' },
        { term: 'LAST', definition: 'Large Artery Stenotic or occlusive disease; may need endovascular therapy' },
        { term: 'CEA', definition: 'Carotid Endarterectomy; surgery to remove plaque from carotid artery' },
        { term: 'CAS', definition: 'Carotid Artery Stenting; less invasive alternative to CEA' },
        { term: 'burst suppression', definition: 'EEG pattern showing bursts of activity separated by quiet periods; goal in refractory SE' },
        { term: 'IRIS', definition: 'Immune Reconstitution Inflammatory Syndrome; worsening when immune system recovers' },
        { term: 'CPP', definition: 'Cerebral Perfusion Pressure; MAP minus ICP; goal 60-70 mmHg in TBI' },
      ],
      clinicalNotes: `Key Clinical Pearls for Neurologic Emergencies:

1. **Document last known normal time:** This determines all treatment windows. If stroke woke patient, time went to sleep.
2. **Don't let a normal CT delay tPA:** Early ischemia may not be visible on CT. If within window and no hemorrhage, consider treatment.
3. **Treat the patient, not the blood pressure:** Permissive hypertension helps perfusion in ischemic stroke.
4. **Non-convulsive status is common:** Comatose patients need EEG to rule out ongoing seizure activity.
5. **Thunderclap headache is SAH until proven otherwise:** CT + LP needed if CT negative and suspicion high.
6. **Consider mimics:** Hypoglycemia, migraine, seizures, functional disorders can mimic stroke.
7. **Time is brain, but accuracy matters:** Don't give tPA for hemorrhage or mimics.
8. **Posterior circulation strokes are easily missed:** Watch for vertigo, ataxia, visual field cuts, diplopia.`,
    },
  },

  media: [
    {
      id: 'stroke-fast-mnemonic',
      type: 'diagram',
      filename: 'stroke-fast-mnemonic.svg',
      title: 'FAST Stroke Recognition',
      description: 'Face, Arm, Speech, Time mnemonic for stroke identification',
    },
    {
      id: 'stroke-vascular-territories',
      type: 'diagram',
      filename: 'stroke-vascular-territories.svg',
      title: 'Cerebral Vascular Territories',
      description: 'Middle cerebral artery, anterior cerebral artery, posterior circulation territories',
    },
    {
      id: 'seizure-types',
      type: 'diagram',
      filename: 'seizure-types-classification.svg',
      title: 'Seizure Classification',
      description: 'Focal vs generalized seizure types and characteristics',
    },
    {
      id: 'meningitis-lp-findings',
      type: 'diagram',
      filename: 'meningitis-lp-comparison.svg',
      title: 'Meningitis CSF Findings',
      description: 'Comparison of CSF findings in bacterial, viral, and fungal meningitis',
    },
  ],

  citations: [
    {
      id: 'aha-stroke-2023',
      type: 'article',
      title: '2023 Guidelines for the Early Management of Patients With Acute Ischemic Stroke',
      authors: ['Powers, W.J.', 'et al.'],
      source: 'Stroke',
      url: 'https://doi.org/10.1161/STR.0000000000000434',
    },
    {
      id: 'neurocritical-se-2022',
      type: 'article',
      title: 'Guidelines for the Management of Status Epilepticus',
      authors: ['Brophy, G.M.', 'et al.'],
      source: 'Neurocritical Care',
    },
    {
      id: 'aha-sah-2023',
      type: 'article',
      title: 'Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage',
      source: 'Stroke',
    },
    {
      id: 'idsa-meningitis',
      type: 'article',
      title: 'Clinical Practice Guidelines for Bacterial Meningitis',
      authors: ['Tunkel, A.R.', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'related', label: 'Stroke' },
    { targetId: 'condition-epilepsy', targetType: 'condition', relationship: 'related', label: 'Epilepsy' },
    { targetId: 'emergency-cardiac', targetType: 'topic', relationship: 'related', label: 'Cardiac Emergencies (AFib source of emboli)' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['emergency medicine', 'neurology', 'neurocritical care', 'stroke'],
    keywords: ['stroke', 'TIA', 'tPA', 'seizure', 'status epilepticus', 'meningitis', 'SAH', 'thunderclap headache'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurologicEmergenciesContent;
