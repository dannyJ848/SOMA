/**
 * Neurological Emergencies - Warning Signs and Response
 *
 * Comprehensive content on recognizing neurological emergencies including
 * seizures, altered mental status, meningitis, and severe headaches.
 */

import { EducationalContent } from '../types';

export const neurologicalEmergencies: EducationalContent = {
  id: 'emergency-neurological-warning-signs',
  type: 'condition',
  name: 'Neurological Emergency Warning Signs',
  alternateNames: ['Brain Emergency', 'Nervous System Emergency', 'Seizure Emergency', 'Meningitis Warning Signs'],

  levels: {
    1: {
      level: 1,
      summary: 'Brain and nerve emergencies need fast help. Seizures, sudden confusion, severe headaches, and signs of brain infection all need immediate medical care.',
      explanation: `## Brain Emergencies

Your brain controls everything you do - thinking, moving, talking, and even breathing. When something goes wrong with your brain, it can be very serious.

**Signs of a brain emergency:**

1. **Seizures** - When the brain's electrical signals go haywire
   - Shaking or jerking movements you can't control
   - Staring blankly, not responding
   - Falling down suddenly
   - Confusion afterward

2. **Sudden confusion** - When someone suddenly:
   - Doesn't know where they are
   - Can't recognize family members
   - Says things that don't make sense
   - Can't think clearly

3. **Worst headache ever** - A sudden, severe headache that:
   - Comes on like a "thunderclap"
   - Is the worst you've ever had
   - Is different from your normal headaches

4. **Signs of brain infection (meningitis):**
   - Very stiff neck
   - High fever
   - Severe headache
   - Sensitivity to light
   - Confusion or sleepiness
   - Rash that doesn't fade when pressed

## What To Do During a Seizure

**DO:**
1. Stay calm
2. Clear away dangerous objects
3. Put something soft under their head
4. Turn them on their side after shaking stops
5. Time how long it lasts
6. Stay with them until they're fully awake

**DON'T:**
- Put anything in their mouth
- Try to hold them down
- Give them food or water until fully awake

**Call 911 if:**
- Seizure lasts more than 5 minutes
- Person doesn't wake up afterward
- Person is injured
- Person is pregnant or has diabetes
- First-time seizure
- Seizure happens in water

## When to Get Help Right Away

**Call 911 for:**
- Any sudden weakness on one side (could be stroke)
- Sudden severe headache
- Seizure lasting more than 5 minutes
- High fever with stiff neck
- Not waking up or very hard to wake
- Confusion that won't go away

**Remember:** Brain problems can get worse fast. When in doubt, call 911.`,
      keyTerms: [
        { term: 'seizure', definition: 'When the brain\'s electrical signals get mixed up, causing shaking, staring, or confusion' },
        { term: 'meningitis', definition: 'An infection of the covering around the brain and spinal cord', pronunciation: 'men-in-JY-tis' },
        { term: 'confusion', definition: 'When someone can\'t think clearly, doesn\'t know where they are, or doesn\'t make sense' },
        { term: 'consciousness', definition: 'Being awake and aware of what\'s happening around you' },
      ],
      analogies: [
        'A seizure is like a power surge in your brain - all the electrical signals fire at once instead of in an orderly way.',
        'Meningitis is like an infection in the protective bag that surrounds your brain.',
        'A sudden severe headache can be a warning light that something has burst or is bleeding inside your head.',
      ],
      examples: [
        'A teenager at school suddenly falls down and starts shaking - this is a seizure. Help protect them from injury and time it.',
        'An adult with fever and stiff neck who can\'t look down at their chest needs to go to the ER immediately - this could be meningitis.',
      ],
    },

    2: {
      level: 2,
      summary: 'Neurological emergencies involve acute dysfunction of the brain, spinal cord, or nerves. Rapid recognition of seizures, altered consciousness, signs of increased intracranial pressure, and meningitis can be lifesaving.',
      explanation: `## Understanding Neurological Emergencies

The nervous system is the body's control center. Emergencies affecting it require rapid assessment and treatment to prevent permanent damage or death.

### Seizures

**What happens:** Abnormal electrical activity in the brain causes uncontrolled movements, sensations, or altered awareness.

**Types of seizures:**
- **Generalized tonic-clonic:** Whole body stiffening then jerking, loss of consciousness
- **Absence:** Brief "spacing out," more common in children
- **Focal:** Starts in one area, may involve one limb or side

**Phases of generalized seizure:**
1. **Tonic phase:** Body stiffens
2. **Clonic phase:** Rhythmic jerking
3. **Postictal phase:** Confusion, sleepiness, headache

**Status epilepticus:** Seizure lasting >5 minutes or multiple seizures without returning to normal - MEDICAL EMERGENCY

**First aid for seizures:**
- Protect from injury (move objects, cushion head)
- Don't restrain or put anything in mouth
- Turn on side after jerking stops
- Time the seizure
- Stay until fully alert

### Altered Mental Status

**Causes (AEIOU-TIPS):**
- **A**lcohol or drugs
- **E**pilepsy (postictal) or **E**lectrolytes
- **I**nsulin (low or high blood sugar)
- **O**verdose or **O**xygen (low)
- **U**remia (kidney failure)
- **T**rauma, **T**emperature, **T**umor
- **I**nfection
- **P**sychiatric or **P**oison
- **S**troke or **S**hock

**Assessment (AVPU):**
- **A**lert: Normal responsiveness
- **V**erbal: Responds to voice
- **P**ainful: Responds only to pain
- **U**nresponsive: No response

### Severe Headache Red Flags

**Call for immediate help if headache is:**
- "Worst headache of my life" (thunderclap)
- Sudden onset, reaching maximum intensity in seconds
- Associated with fever and stiff neck
- New or different in someone over 50
- With neurological symptoms (weakness, vision changes, confusion)
- After head injury
- Worsening despite treatment

**Possible causes requiring emergency care:**
- Subarachnoid hemorrhage (bleeding around brain)
- Meningitis or encephalitis
- Brain tumor
- Stroke
- Hypertensive emergency

### Meningitis

**Classic triad:**
1. Fever
2. Neck stiffness (nuchal rigidity)
3. Altered mental status

**Other symptoms:**
- Severe headache
- Photophobia (light sensitivity)
- Nausea and vomiting
- Seizures
- Petechial rash (small purple spots that don't blanch)

**Types:**
- **Bacterial:** Most dangerous, requires immediate antibiotics
- **Viral:** Usually less severe, supportive care
- **Fungal:** Often in immunocompromised patients

### Signs of Increased Intracranial Pressure

When pressure inside the skull rises too high:
- Severe headache (worse when lying down)
- Vomiting (often without nausea)
- Vision changes (blurry, double, or decreased)
- Decreased consciousness
- Cushing triad (late sign): hypertension, bradycardia, irregular breathing

**Causes:**
- Brain bleeding or swelling
- Tumor
- Infection
- Blocked CSF flow (hydrocephalus)

### Spinal Cord Emergencies

**Signs of possible spinal cord injury:**
- Weakness or numbness in arms or legs
- Loss of bladder or bowel control
- Severe neck or back pain after injury
- Difficulty breathing (high cervical injury)

**Cauda equina syndrome (emergency!):**
- Low back pain
- Leg weakness
- Numbness in "saddle" area (between legs)
- Bladder or bowel dysfunction
- Requires surgery within 24-48 hours

## When to Seek Different Levels of Care

| Call 911 | Emergency Room | Urgent Care/Doctor |
|----------|---------------|-------------------|
| Seizure >5 min | First-time seizure (now resolved) | Mild headache |
| Sudden worst headache | Severe headache, stable | Chronic headache change |
| Fever + stiff neck | Post-seizure injury | Mild confusion (elderly UTI) |
| New weakness/numbness | Worsening chronic symptoms | Known migraine |
| Loss of consciousness | | |`,
      keyTerms: [
        { term: 'status epilepticus', definition: 'A seizure lasting more than 5 minutes or repeated seizures without recovery - a medical emergency', pronunciation: 'STAT-us ep-ih-LEP-tih-kus' },
        { term: 'postictal state', definition: 'Period of confusion, fatigue, and headache that follows a seizure', pronunciation: 'post-IK-tal' },
        { term: 'nuchal rigidity', definition: 'Stiff neck that prevents touching chin to chest, a sign of meningitis', pronunciation: 'NOO-kal' },
        { term: 'photophobia', definition: 'Sensitivity to light, often seen with meningitis and migraines', pronunciation: 'foh-toh-FOH-bee-ah' },
        { term: 'intracranial pressure', definition: 'Pressure inside the skull; when too high, can damage the brain', pronunciation: 'in-trah-KRAY-nee-al' },
        { term: 'cauda equina syndrome', definition: 'Compression of spinal nerves causing leg weakness and bladder problems - surgical emergency', pronunciation: 'KAW-dah eh-KWY-nah' },
      ],
      analogies: [
        'Status epilepticus is like an electrical storm in the brain that won\'t stop - it needs emergency medication to "reset" the circuits.',
        'Increased intracranial pressure is like inflating a balloon inside a box - there\'s nowhere for the pressure to go, so it damages what\'s inside.',
        'The meninges are like a protective wrapper around your brain - when they get infected, everything inside hurts.',
      ],
      clinicalNotes: 'In suspected meningitis, do not delay antibiotics to get imaging or lumbar puncture. The classic triad of fever, neck stiffness, and altered mental status is present in only 44% of cases. A petechial rash with fever suggests meningococcemia.',
    },

    3: {
      level: 3,
      summary: 'Neurological emergencies encompass conditions affecting the brain, spinal cord, and peripheral nerves requiring immediate intervention. Understanding pathophysiology, rapid assessment techniques, and time-sensitive treatments is critical for optimal outcomes.',
      explanation: `## Pathophysiology of Neurological Emergencies

### Seizures and Status Epilepticus

**Pathophysiology:**
- Imbalance between excitatory (glutamate) and inhibitory (GABA) neurotransmission
- Hypersynchronous neuronal firing
- Progressive neuronal injury with prolonged seizures

**Status Epilepticus Definition:**
- Clinical: ≥5 minutes of continuous seizure OR ≥2 seizures without return to baseline
- Pathophysiologic: After 5 minutes, seizures unlikely to stop spontaneously

**Classification:**
- Convulsive status epilepticus (CSE): Obvious motor manifestations
- Non-convulsive status epilepticus (NCSE): Subtle or no motor signs, requires EEG
- Refractory SE: Failure to respond to first and second-line agents
- Super-refractory SE: >24 hours despite anesthesia

**Management Protocol:**

| Time | Intervention |
|------|-------------|
| 0-5 min | Stabilize, IV access, glucose check, thiamine |
| 5-20 min | Benzodiazepine (lorazepam 4mg IV or midazolam 10mg IM) |
| 20-40 min | Second-line: fosphenytoin, valproate, or levetiracetam |
| 40+ min | Refractory SE: Propofol, midazolam drip, or pentobarbital |

### Altered Mental Status

**Systematic approach (AEIOU-TIPS):**
- **A**lcohol, **E**lectrolytes/Encephalopathy, **I**nsulin, **O**verdose/Oxygen, **U**remia
- **T**rauma/Temperature/Tumor, **I**nfection, **P**sychiatric/Poison, **S**troke/Seizure

**Key examinations:**
- Pupil size and reactivity
- Eye movements (doll's eyes, cold calorics if coma)
- Motor response to stimuli
- Breathing pattern
- Signs of trauma

**Glasgow Coma Scale (GCS):**

| Component | Response | Score |
|-----------|----------|-------|
| Eye opening | Spontaneous / To voice / To pain / None | 4/3/2/1 |
| Verbal | Oriented / Confused / Inappropriate / Incomprehensible / None | 5/4/3/2/1 |
| Motor | Obeys / Localizes / Withdraws / Flexion / Extension / None | 6/5/4/3/2/1 |

Total: 3-15 (≤8 = severe, consider intubation)

### Subarachnoid Hemorrhage (SAH)

**Pathophysiology:**
- Rupture of cerebral aneurysm (85%) or AVM
- Blood in subarachnoid space causes meningeal irritation
- Risk of vasospasm, rebleeding, hydrocephalus

**Clinical presentation:**
- "Thunderclap" headache (maximal at onset)
- Neck stiffness (may take hours to develop)
- Nausea/vomiting
- Altered consciousness
- Focal neurological deficits (depending on location)
- Sentinel headache (warning leak) in 30-50%

**Hunt and Hess Grade:**
1. Asymptomatic or mild headache
2. Severe headache, stiff neck, possible cranial nerve palsy
3. Drowsy, confused, mild focal deficit
4. Stupor, moderate to severe hemiparesis
5. Deep coma, decerebrate posturing

**Diagnosis:**
- CT head: Sensitivity ~98% in first 6 hours, decreases with time
- If CT negative and clinical suspicion high: Lumbar puncture
- Xanthochromia (yellow CSF) indicates SAH

### Bacterial Meningitis

**Pathophysiology:**
- Bacteria enter CNS (hematogenous spread, direct extension, or trauma)
- Inflammatory response in meninges
- Cerebral edema, increased ICP, vasculitis

**Common pathogens by age:**

| Age Group | Common Pathogens |
|-----------|------------------|
| Neonates | Group B Strep, E. coli, Listeria |
| Children | S. pneumoniae, N. meningitidis |
| Adults | S. pneumoniae, N. meningitidis |
| Elderly/Immunocompromised | S. pneumoniae, Listeria, Gram-negatives |

**Physical examination:**
- Kernig sign: Pain with knee extension when hip flexed
- Brudzinski sign: Involuntary hip flexion when neck flexed
- Jolt accentuation: Headache worsens with rapid head rotation

**Management priorities:**
1. Don't delay antibiotics for LP or imaging
2. Blood cultures before antibiotics if possible (don't delay)
3. Empiric therapy: Ceftriaxone + vancomycin ± ampicillin (if Listeria risk)
4. Dexamethasone before or with first antibiotic dose (reduces mortality in pneumococcal meningitis)

### Increased Intracranial Pressure

**Monro-Kellie doctrine:**
- Fixed cranial vault contains brain, blood, CSF
- Increase in one component must be compensated by decrease in another
- Compensation mechanisms exhaust → rapid ICP rise

**Clinical signs:**
- Headache (worse with Valsalva, lying down)
- Papilledema (takes hours to develop)
- Cushing triad (HTN, bradycardia, irregular respirations) - late and ominous
- Herniation syndromes

**Herniation patterns:**
- **Uncal (transtentorial):** Ipsilateral dilated pupil, contralateral hemiparesis
- **Central:** Bilateral small reactive pupils → fixed midposition
- **Tonsillar:** Neck stiffness, respiratory arrest

**Emergent management:**
- Elevate head of bed 30°
- Hyperventilation (temporizing, target PaCO2 30-35)
- Osmotic therapy: Mannitol 1g/kg or hypertonic saline
- Sedation, avoid hyperthermia
- Urgent neurosurgical consultation

### Spinal Cord Compression

**Etiologies:**
- Trauma
- Epidural abscess
- Epidural hematoma (warfarin, epidural procedures)
- Tumor (metastatic most common)
- Disc herniation

**Cauda equina syndrome:**
- Back pain with radiation
- Bilateral leg weakness
- Saddle anesthesia
- Bowel/bladder dysfunction (urinary retention → overflow)
- Decreased rectal tone

**Management:**
- Emergent MRI of entire spine
- High-dose steroids for tumor compression
- Surgical decompression within 24-48 hours
- Delayed surgery = worse outcomes`,
      keyTerms: [
        { term: 'non-convulsive status epilepticus', definition: 'Continuous seizure activity on EEG with subtle or absent motor manifestations; requires high index of suspicion' },
        { term: 'xanthochromia', definition: 'Yellow discoloration of CSF due to bilirubin from hemoglobin breakdown, indicates SAH', pronunciation: 'zan-tho-KROME-ee-ah' },
        { term: 'Cushing triad', definition: 'Hypertension, bradycardia, and irregular respirations indicating critically elevated ICP' },
        { term: 'herniation', definition: 'Displacement of brain tissue through openings in the skull due to increased pressure' },
        { term: 'Kernig sign', definition: 'Pain or resistance to knee extension with hip flexed to 90 degrees; sign of meningeal irritation' },
        { term: 'Brudzinski sign', definition: 'Involuntary hip and knee flexion when neck is passively flexed; sign of meningeal irritation' },
      ],
      clinicalNotes: 'In suspected bacterial meningitis, empiric antibiotics should be given within 30 minutes of arrival. If LP will be delayed for imaging, give antibiotics first. Dexamethasone is most effective when given before or with the first dose of antibiotics. CT before LP is needed only if there are signs of elevated ICP, focal deficits, immunocompromise, or altered mental status.',
    },

    4: {
      level: 4,
      summary: 'Advanced management of neurological emergencies requires integration of detailed neuroanatomical localization, evidence-based protocols, and understanding of complex pharmacologic and procedural interventions.',
      explanation: `## Advanced Seizure Management

### Pharmacology of Antiseizure Medications

**First-line (Benzodiazepines):**
- Enhance GABA-A receptor activity
- Lorazepam: Onset 2-3 min IV, duration 12-24h
- Midazolam: Can give IM (faster than IV lorazepam in RAMPART trial)
- Diazepam: Highly lipophilic, rapid CNS penetration but redistribution limits duration

**Second-line agents:**

| Drug | Loading Dose | Mechanism | Considerations |
|------|--------------|-----------|----------------|
| Fosphenytoin | 20 PE/kg | Na+ channel | Arrhythmia risk, check levels |
| Valproate | 40 mg/kg | Multiple | Hepatotoxicity, avoid in pregnancy |
| Levetiracetam | 60 mg/kg | SV2A | Fewer interactions, well tolerated |
| Lacosamide | 200-400 mg | Na+ channel | Newer option, less evidence |

**ESETT Trial (2019):**
- Compared fosphenytoin, valproate, levetiracetam
- No significant difference in efficacy (~50% response each)
- All reasonable second-line options

**Refractory status epilepticus:**
- Continuous EEG monitoring essential
- Propofol: Rapid onset/offset, GABA agonist, watch for PRIS
- Midazolam infusion: Gradual titration, tachyphylaxis develops
- Pentobarbital: Potent, significant hypotension
- Target: Burst suppression vs seizure suppression

### Advanced SAH Management

**Grading scales:**

Hunt and Hess (clinical):
- Grade 1-2: Good grade
- Grade 3: Moderate
- Grade 4-5: Poor grade

**Fisher Grade (CT blood pattern):**
- Grade 1: No blood
- Grade 2: Diffuse thin SAH <1mm
- Grade 3: Localized clot and/or thick SAH >1mm
- Grade 4: ICH or IVH with or without SAH

Modified Fisher correlates with vasospasm risk.

**Critical care management:**
1. **Rebleeding prevention:**
   - Secure aneurysm early (coiling vs clipping)
   - Blood pressure control (avoid extremes)
   - Avoid straining, use stool softeners

2. **Vasospasm:**
   - Peaks days 4-14
   - Nimodipine: Calcium channel blocker, oral 60mg q4h × 21 days
   - Triple-H therapy: Hypertension, hypervolemia, hemodilution (historically)
   - Euvolemia with induced hypertension now preferred
   - Rescue: Intra-arterial vasodilators, angioplasty

3. **Hydrocephalus:**
   - Acute: EVD placement
   - Chronic: May require VP shunt

4. **Other complications:**
   - Hyponatremia (SIADH vs cerebral salt wasting)
   - Cardiac complications (neurogenic stunned myocardium)
   - Seizures

### Encephalitis

**Distinguishing from meningitis:**
- More prominent altered mental status
- Behavioral changes, personality changes
- Seizures more common
- Focal neurological deficits

**HSV encephalitis:**
- Most common sporadic encephalitis
- Temporal lobe predilection
- Diagnosis: CSF PCR for HSV
- MRI: Temporal lobe hyperintensity
- Treatment: Acyclovir 10mg/kg IV q8h × 14-21 days
- **Do not wait for diagnostic confirmation to start treatment**

**Autoimmune encephalitis:**
- Anti-NMDA receptor encephalitis
- Often young women
- Psychiatric symptoms, movement disorders, seizures
- Associated with teratomas
- Treatment: Immunotherapy, tumor removal

### Acute Weakness Evaluation

**Upper motor neuron (UMN) vs Lower motor neuron (LMN):**

| Feature | UMN | LMN |
|---------|-----|-----|
| Weakness pattern | Pyramidal (extensors in arms, flexors in legs) | Follows nerve/root distribution |
| Tone | Increased (spasticity) | Decreased (flaccidity) |
| Reflexes | Hyperreflexia | Hyporeflexia/areflexia |
| Babinski | Upgoing (extensor) | Downgoing (flexor) |
| Atrophy | Mild, late | Prominent, early |
| Fasciculations | Absent | Present |

**Guillain-Barré Syndrome (GBS):**
- Ascending weakness
- Areflexia
- Albuminocytologic dissociation in CSF (elevated protein, normal WBC)
- Monitor for respiratory failure (NIF, FVC)
- Treatment: IVIG or plasmapheresis

**Myasthenia Gravis Crisis:**
- Respiratory failure from weakness
- Triggered by infection, surgery, medications
- Edrophonium test (less commonly used now)
- Treatment: IVIG or plasmapheresis, pyridostigmine with caution

### Acute Stroke: Beyond FAST

**Posterior circulation stroke:**
- Often missed initially
- Symptoms: Vertigo, diplopia, ataxia, dysarthria, visual field defects
- "5 D's": Dizziness, Diplopia, Dysarthria, Dysphagia, Dystaxia
- HINTS exam for peripheral vs central vertigo:
  - Head Impulse: Normal in central (abnormal = peripheral)
  - Nystagmus: Direction-changing in central
  - Test of Skew: Vertical skew deviation in central

**Basilar artery occlusion:**
- "Top of the basilar" syndrome
- Locked-in syndrome possible
- High mortality, thrombectomy may be beneficial

**Stroke chameleons:**
- Presentations mimicking other conditions
- Isolated facial weakness (peripheral vs central)
- Acute confusional state
- Movement disorders
- Memory impairment`,
      keyTerms: [
        { term: 'ESETT trial', definition: 'Established Status Epilepticus Treatment Trial; showed equivalence of fosphenytoin, valproate, and levetiracetam as second-line agents' },
        { term: 'PRIS', definition: 'Propofol Infusion Syndrome; rare but fatal complication of prolonged high-dose propofol' },
        { term: 'vasospasm', definition: 'Arterial narrowing after SAH, peaks days 4-14, can cause delayed cerebral ischemia' },
        { term: 'HINTS exam', definition: 'Head Impulse, Nystagmus, Test of Skew; bedside exam to distinguish central from peripheral vertigo' },
        { term: 'albuminocytologic dissociation', definition: 'Elevated CSF protein with normal cell count, classic finding in Guillain-Barré syndrome' },
        { term: 'anti-NMDA receptor encephalitis', definition: 'Autoimmune encephalitis with psychiatric symptoms, seizures, movement disorders; often associated with teratoma' },
      ],
      clinicalNotes: 'In status epilepticus, seizure duration correlates with pharmacoresistance - don\'t delay escalation. For suspected SAH with negative CT (sensitivity decreases after 6 hours), LP is essential - look for xanthochromia and elevated opening pressure. HSV encephalitis has significant mortality and morbidity if treatment is delayed - start acyclovir empirically.',
    },

    5: {
      level: 5,
      summary: 'Expert management of neurological emergencies integrates cutting-edge evidence, advanced neuromonitoring, systems-based approaches, and understanding of emerging therapies and evolving treatment paradigms.',
      explanation: `## Evidence-Based Updates in Neurological Emergencies

### Status Epilepticus: Contemporary Management

**RAMPART Trial (2012):**
- IM midazolam (10mg) non-inferior to IV lorazepam (4mg)
- Faster administration offset slower absorption
- Implications: Prehospital treatment without IV access

**ESETT Trial (2019):**
- Fosphenytoin, valproate, levetiracetam equivalent as second-line
- ~45% response to each
- Choice based on patient factors, drug interactions

**Third-line considerations:**
- Phenobarbital: Historical option, effective but significant sedation
- Topiramate: Emerging data in refractory SE
- Ketamine: NMDA antagonist, may be useful in refractory SE (benzodiazepine-resistant)
- Brivaracetam: Rapid IV formulation

**Super-refractory SE:**
- Immunotherapy consideration (autoimmune encephalitis)
- Ketogenic diet
- Electroconvulsive therapy
- Hypothermia (limited evidence)
- Epilepsy surgery in selected cases

### SAH: Evolving Paradigms

**Aneurysm treatment:**
- ISAT Trial: Coiling associated with better outcomes than clipping
- However, some aneurysms anatomically favor clipping
- Multidisciplinary decision

**Vasospasm management evolution:**
- Triple-H therapy largely abandoned
- Euvolemia with induced hypertension preferred
- Milrinone: Inotrope and vasodilator, emerging use
- Intraarterial verapamil or nicardipine for refractory cases
- Balloon angioplasty for severe proximal vasospasm

**Delayed cerebral ischemia:**
- Beyond vasospasm: Microcirculatory dysfunction, cortical spreading depolarization
- Early brain injury concept
- Multimodal monitoring: ICP, brain oxygen, microdialysis

### Neuroprognostication After Cardiac Arrest

**TTM/TTM2 Trials:**
- TTM: 33°C vs 36°C - no difference
- TTM2: 33°C vs normothermia - no difference
- Current practice: Avoid fever, targeted temperature control 32-37.5°C

**Prognostication (minimum 72 hours after normothermia):**
- Pupillary light reflex
- Quantitative pupillometry (PLR <13% poor outcome)
- SSEP: Bilateral absent N20 highly specific for poor outcome
- EEG patterns: Burst suppression, status epilepticus, unreactive background
- NSE levels (>33-67 ng/mL)
- MRI: Diffuse cortical/deep gray injury
- **Multimodal approach recommended**

### Acute Stroke: Paradigm Shifts

**Thrombectomy window expansion:**
- DAWN and DEFUSE 3 trials extended window to 24 hours
- Imaging selection (perfusion mismatch) critical
- Benefits comparable to early window in selected patients

**Tenecteplase:**
- Single bolus administration
- EXTEND-IA TNK: Non-inferior to alteplase
- Potential new standard

**Large core infarcts:**
- SELECT2: Thrombectomy beneficial even with large cores (ASPECTS 3-5)
- RESCUE-Japan LIMIT: Similar findings
- Changing traditional exclusion criteria

**Posterior circulation:**
- ATTENTION, BAOCHE trials: Thrombectomy for basilar occlusion beneficial
- Extended window may be longer than anterior circulation

### Acute Ischemic Stroke Beyond Reperfusion

**Blood pressure management:**
- Post-thrombolysis: <180/105 for 24 hours
- Non-thrombolysis: Permissive hypertension unless >220/120
- BP drops >10% associated with worse outcomes

**Neuroprotection:**
- Decades of failed trials
- Nerinetide: ESCAPE-NA1 negative overall, possible benefit without alteplase
- Otaplimastat: Phase 2 showed promise
- Remote ischemic conditioning: Under investigation

**Edema management in large infarcts:**
- Malignant MCA syndrome
- Decompressive craniectomy (DESTINY, DECIMAL trials)
- Age <60 with large MCA territory infarct
- Surgery within 48 hours

### Autoimmune and Inflammatory Emergencies

**Approach to autoimmune encephalitis:**
1. Exclude infection
2. Antibody testing (serum and CSF)
3. Search for tumor (anti-NMDAR: ovarian teratoma)
4. Early immunotherapy (don't wait for antibodies)

**Treatment:**
- First-line: Steroids, IVIG, or plasmapheresis
- Second-line: Rituximab, cyclophosphamide
- Tumor removal if present

**Acute demyelination:**
- ADEM, transverse myelitis, NMO/NMOSD
- High-dose steroids first-line
- Plasmapheresis for refractory cases
- Rule out MS if recurrent

### Neurocritical Care Monitoring

**Multimodality monitoring:**
- ICP (EVD or parenchymal monitor)
- Cerebral perfusion pressure (CPP = MAP - ICP)
- Brain tissue oxygenation (PbtO2)
- Cerebral microdialysis (lactate/pyruvate ratio)
- Continuous EEG

**ICP management tiers:**
1. Head elevation, sedation, osmotherapy
2. CSF drainage, mild hyperventilation
3. Barbiturate coma, decompressive craniectomy

**CPP optimization:**
- Traditional target: >60-70 mmHg
- Newer: Individualized autoregulation-directed targets
- PRx (pressure reactivity index) to assess autoregulation

### Systems and Quality Improvement

**Stroke systems of care:**
- Prehospital stroke recognition (LAMS, RACE scales)
- Mobile stroke units with CT capability
- Direct-to-thrombectomy protocols
- Telestroke for rural areas

**Metrics and benchmarks:**
- Door-to-needle <60 min (target <45)
- Door-to-puncture for thrombectomy <90 min
- Annual thrombectomy volumes correlate with outcomes

**Seizure care:**
- Standardized SE protocols improve time to treatment
- Specialized neurology rapid response teams
- Continuous EEG availability

### Emerging Technologies

**AI in neurological emergencies:**
- Automated large vessel occlusion detection (RAPID, Viz.ai)
- ICH detection and quantification
- Seizure detection algorithms
- Outcome prediction models

**Advanced imaging:**
- Vessel wall imaging for aneurysm characterization
- 7T MRI for subtle lesions
- Perfusion imaging standardization

**Novel therapeutics:**
- Gene therapy for epilepsy
- Stem cell therapy for stroke
- Targeted immunomodulation`,
      keyTerms: [
        { term: 'RAMPART trial', definition: 'Prehospital trial showing IM midazolam non-inferior to IV lorazepam for status epilepticus' },
        { term: 'TTM', definition: 'Targeted Temperature Management; controlled temperature after cardiac arrest' },
        { term: 'DAWN/DEFUSE 3', definition: 'Landmark trials establishing benefit of thrombectomy in extended window (6-24 hours) with imaging selection' },
        { term: 'multimodality monitoring', definition: 'Combination of ICP, brain oxygen, EEG, and other monitors to assess brain health in neurocritical care' },
        { term: 'cortical spreading depolarization', definition: 'Slow wave of neuronal depolarization that contributes to secondary brain injury' },
        { term: 'PRx', definition: 'Pressure Reactivity Index; measure of cerebral autoregulation derived from ICP and MAP correlation' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Status epilepticus:** Consider autoimmune etiology in cryptogenic refractory SE. Send antibody panels and consider empiric immunotherapy. New-onset refractory status epilepticus (NORSE) has significant morbidity.

2. **SAH management:** DCI is more than vasospasm - involves microcirculatory dysfunction and spreading depolarizations. Multimodality monitoring helps detect ischemia before clinical deterioration.

3. **Extended window thrombectomy:** Imaging selection is crucial. ASPECTS >6 and favorable perfusion mismatch identify candidates. Absolute benefit similar to early window in well-selected patients.

4. **Neuroprognostication:** Wait at least 72 hours after normothermia before prognostication. Use multimodal assessment. Sedation and therapeutic hypothermia can confound exam. False pessimism leads to self-fulfilling prophecy.

5. **Systems optimization:** Stroke outcomes are highly dependent on time and systems organization. Door-in-door-out times, bypass protocols, and telemedicine networks can overcome geographic barriers.`,
    },
  },

  media: [
    {
      id: 'seizure-first-aid',
      type: 'diagram',
      filename: 'seizure-first-aid.svg',
      title: 'Seizure First Aid',
      description: 'Step-by-step guide for helping someone having a seizure',
    },
    {
      id: 'gcs-scale',
      type: 'diagram',
      filename: 'gcs-scale.svg',
      title: 'Glasgow Coma Scale',
      description: 'Quick reference for GCS assessment',
    },
    {
      id: 'meningitis-signs',
      type: 'diagram',
      filename: 'meningitis-signs.svg',
      title: 'Meningitis Warning Signs',
      description: 'Visual guide to recognizing meningitis symptoms',
    },
  ],

  citations: [
    {
      id: 'aes-status-guidelines',
      type: 'article',
      title: 'American Epilepsy Society Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus',
      authors: ['Glauser, T.', 'et al.'],
      source: 'Epilepsy Currents',
      accessedDate: '2026-01-24',
    },
    {
      id: 'meningitis-idsa-guidelines',
      type: 'article',
      title: 'IDSA Clinical Practice Guidelines for Bacterial Meningitis',
      source: 'Clinical Infectious Diseases',
      accessedDate: '2026-01-24',
    },
    {
      id: 'aha-stroke-guidelines',
      type: 'article',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke',
      authors: ['Powers, W.J.', 'et al.'],
      source: 'Stroke',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Nervous System' },
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Emergencies (Stroke)' },
    { targetId: 'emergency-first-response', targetType: 'topic', relationship: 'see-also', label: 'First Response Actions' },
    { targetId: 'emergency-pediatric', targetType: 'topic', relationship: 'see-also', label: 'Pediatric Emergencies' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['emergency medicine', 'patient education', 'warning signs', 'neurology', 'critical care'],
    keywords: ['seizure', 'meningitis', 'status epilepticus', 'altered mental status', 'headache', 'SAH', 'encephalitis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurologicalEmergencies;
