/**
 * Neurological Warning Signs - Stroke (FAST), Seizures, Altered Consciousness
 *
 * Educational content for recognizing neurological emergencies including stroke,
 * seizures, and altered levels of consciousness.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any emergency, call 911 immediately.
 *
 * Spanish translations (Traduccion al espanol) included at each level.
 */

import { EducationalContent } from '../types';

export const neurologicalWarnings: EducationalContent = {
  id: 'emergency-neurological-warning-signs',
  type: 'condition',
  name: 'Neurological Warning Signs',
  alternateNames: [
    'Brain Emergency Signs',
    'Senales de Advertencia Neurologica',
    'Stroke Warning Signs',
    'Neurological Red Flags',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your brain controls everything your body does. When something goes wrong in the brain, warning signs include sudden face drooping, arm weakness, trouble speaking, seizures, and confusion. Knowing these signs can save a life.',
      explanation: `## Warning Signs of a Brain Emergency

Your brain is the control center for your entire body. It controls movement, speech, vision, thinking, and even breathing. When the brain is in danger, it sends warning signs that you need to recognize quickly.

**Traduccion al espanol:** Tu cerebro controla todo lo que hace tu cuerpo. Cuando algo sale mal, las senales de advertencia incluyen cara caida, debilidad en el brazo, problemas para hablar, convulsiones y confusion.

---

## 1. Stroke Signs: Remember F.A.S.T.

A **stroke** happens when blood flow to part of the brain is blocked or when a blood vessel in the brain bursts. Brain cells start dying within minutes.

**F.A.S.T. is the easiest way to remember stroke signs:**

- **F = Face drooping** -- One side of the face droops or feels numb. Ask the person to smile -- is it uneven?
- **A = Arm weakness** -- One arm feels weak or numb. Ask the person to raise both arms -- does one drift down?
- **S = Speech difficulty** -- Speech is slurred or hard to understand. Ask the person to say a simple sentence.
- **T = Time to call 911** -- If you see ANY of these signs, call 911 right away. Note the time symptoms started.

**Other stroke signs:**
- Sudden confusion
- Sudden trouble seeing in one or both eyes
- Sudden severe headache with no known cause
- Sudden trouble walking, dizziness, or loss of balance

**Why time matters:** There is a medicine (called tPA) that can help if given within 4.5 hours. "Time is brain!"

**In Spanish:** Recuerde R.A.P.I.D.O. -- Rostro caido, Alteracion del equilibrio, Perdida de fuerza, Impedimento visual, Dificultad para hablar, Obtenga ayuda (llame al 911).

---

## 2. Seizures (Convulsiones)

A **seizure** happens when the brain's electrical signals get mixed up. The brain sends out a burst of signals all at once.

**What a seizure can look like:**
- Shaking or jerking of the whole body (convulsions)
- Staring into space and not responding
- Sudden stiffness of the body
- Falling down suddenly
- Lip smacking, chewing, or hand movements without awareness

**What to do if someone has a seizure:**
1. **Stay calm** and stay with the person
2. **Move dangerous objects** away (sharp things, furniture)
3. **Put them on their side** (to keep the airway clear)
4. **Time the seizure** -- this helps doctors
5. **Call 911** if the seizure lasts more than 5 minutes, if they are injured, or if this is their first seizure

**Do NOT:**
- Put anything in their mouth
- Hold them down
- Give them food or water until fully awake

---

## 3. Altered Consciousness (Cambios en el Estado de Conciencia)

**When someone is not acting like themselves -- confused, very sleepy, or hard to wake up -- something may be wrong with their brain.**

**Warning signs:**
- Cannot be woken up or barely responds
- Suddenly very confused (does not know where they are or who you are)
- Speaking in a way that does not make sense
- Acting very strangely or aggressively for no reason
- Becoming more and more sleepy and hard to arouse

**Call 911 if someone:**
- Cannot be woken up
- Is confused after hitting their head
- Has a sudden change in behavior or awareness
- Is confused AND has a fever (could be a brain infection)
- Is confused AND has a headache (could be bleeding in the brain)

---

## Remember

- **Stroke:** Think F.A.S.T. -- Face, Arm, Speech, Time
- **Seizure:** Keep them safe, time it, call 911 if >5 minutes
- **Confusion/Not responsive:** Call 911 right away
- **Every minute matters** for brain emergencies

**In Spanish:** Para emergencias del cerebro, cada minuto cuenta. Llame al 911 inmediatamente.`,
      keyTerms: [
        {
          term: 'stroke',
          definition: 'A brain emergency that happens when blood flow to part of the brain is blocked (ischemic stroke) or a blood vessel bursts (hemorrhagic stroke). Brain cells die quickly without blood.',
        },
        {
          term: 'seizure',
          definition: 'A sudden burst of electrical activity in the brain that can cause shaking, staring, confusion, or loss of consciousness.',
          pronunciation: 'SEE-zhur',
        },
        {
          term: 'F.A.S.T.',
          definition: 'An easy way to remember stroke signs: Face drooping, Arm weakness, Speech difficulty, Time to call 911.',
        },
        {
          term: 'altered consciousness',
          definition: 'When someone is not alert and aware as they normally would be -- they may be confused, very drowsy, or unable to be woken up.',
        },
        {
          term: 'tPA',
          definition: 'A clot-busting medicine given through an IV that can treat ischemic stroke. It must be given within 4.5 hours of symptom onset.',
          pronunciation: 'tee-pee-ay',
        },
      ],
      analogies: [
        'A stroke is like a water pipe breaking or getting blocked in your house. If the pipe to the kitchen is blocked, the kitchen loses water. If blood flow to the part of the brain that controls your arm is blocked, your arm stops working.',
        'A seizure is like a power surge in your house -- all the circuits fire at once, causing things to go haywire until the surge passes.',
        'F.A.S.T. is like a fire alarm checklist -- it helps you quickly recognize danger and know exactly what to do.',
        'Altered consciousness is like a dimmer switch turning down the lights in the brain -- the person is less and less "there."',
      ],
      examples: [
        'A grandmother is eating dinner when suddenly one side of her face droops and she cannot lift her left arm. Her grandson remembers F.A.S.T. from school and calls 911. She receives tPA at the hospital and recovers.',
        'A student in class suddenly stares blankly and does not respond to his name. His body starts shaking. A teacher times the seizure (2 minutes), puts him on his side, and calls the school nurse. This is his first seizure.',
        'An elderly neighbor is found sitting on his porch, confused and not knowing what day it is. He cannot explain what happened. His wife calls 911 because this is not normal for him.',
      ],
      patientCounselingPoints: [
        'Learn F.A.S.T. to recognize a stroke -- teach it to your whole family',
        'If someone is having a seizure, keep them safe but do NOT put anything in their mouth',
        'Note the time when stroke symptoms start -- the doctor needs to know',
        'Sudden confusion in an elderly person is always an emergency',
        'Aprenda F.A.S.T. (o R.A.P.I.D.O. en espanol) para reconocer un derrame cerebral',
      ],
    },

    2: {
      level: 2,
      summary:
        'Neurological emergencies include stroke (ischemic and hemorrhagic), seizures, and altered mental status. The F.A.S.T. mnemonic identifies stroke, while distinguishing seizure types and causes of altered consciousness guides appropriate emergency response.',
      explanation: `## Neurological Warning Signs: Recognition and Response

Neurological emergencies are time-sensitive conditions where rapid recognition directly improves outcomes. Understanding the key presentations and appropriate responses is essential.

**Traduccion:** Las emergencias neurologicas incluyen accidente cerebrovascular, convulsiones y alteracion del estado mental. La nemotecnia F.A.S.T. identifica el accidente cerebrovascular.

---

## Stroke: Types and Recognition

### Two main types:

**Ischemic stroke (87% of all strokes):**
- Blood clot blocks a blood vessel in the brain
- Brain tissue beyond the blockage begins to die
- Treatment: tPA (clot-buster) within 4.5 hours, or mechanical thrombectomy within 24 hours

**Hemorrhagic stroke (13% of all strokes):**
- Blood vessel in the brain bursts and bleeds
- Bleeding damages surrounding brain tissue and increases pressure
- Two subtypes:
  - **Intracerebral hemorrhage:** Bleeding within brain tissue
  - **Subarachnoid hemorrhage:** Bleeding in the space around the brain

### F.A.S.T. and BE-FAST

**B.E.-F.A.S.T.** is an updated mnemonic that catches more strokes:
- **B = Balance** -- Sudden loss of balance or coordination
- **E = Eyes** -- Sudden vision loss or double vision
- **F = Face** -- Facial droop (ask them to smile)
- **A = Arm** -- Arm weakness (ask them to raise both arms)
- **S = Speech** -- Slurred or garbled speech
- **T = Time** -- Call 911 immediately, note the time

### Stroke mimics vs. actual stroke:

| Stroke Mimics | Key Differences |
|--------------|-----------------|
| Seizure with post-ictal paralysis | Resolves over minutes-hours; seizure witnessed |
| Migraine with aura | Gradual onset, visual symptoms, headache follows |
| Hypoglycemia | Glucose low on finger stick; resolves with sugar |
| Bell's palsy | Forehead affected (vs. stroke spares forehead) |
| Conversion disorder | Inconsistent exam findings; psychiatric history |

**Important:** When in doubt, treat as stroke. Better to activate the system and be wrong than to miss a real stroke.

---

## Seizures: Types and Management

### Seizure classification:

**Generalized seizures (both sides of brain):**
- **Tonic-clonic (grand mal):** Stiffening then shaking of entire body, loss of consciousness
- **Absence (petit mal):** Brief staring spells, often in children
- **Myoclonic:** Sudden brief jerks of muscles
- **Atonic (drop attacks):** Sudden loss of muscle tone, falling

**Focal seizures (one side of brain):**
- **Focal aware:** Person is awake but has involuntary movements or sensations
- **Focal impaired awareness:** Person is confused, staring, may do repetitive movements (lip smacking, hand rubbing)
- **Focal to bilateral tonic-clonic:** Starts focal, then spreads to both sides

### When seizures are an emergency:

**Status epilepticus** -- a seizure lasting >5 minutes or multiple seizures without regaining consciousness between them. This is a medical emergency.

**Call 911 for seizures if:**
- Seizure lasts >5 minutes
- First-time seizure
- Person does not regain consciousness
- Person is injured during the seizure
- Person has difficulty breathing after
- Person is pregnant
- Person is diabetic
- Seizure happens in water

### First aid for seizures:
1. Ease the person to the floor
2. Turn them on their side (recovery position)
3. Clear the area of hard or sharp objects
4. Place something soft under their head
5. Time the seizure
6. Stay until they are fully conscious
7. Be calm and reassuring when they wake up

---

## Altered Mental Status: Assessment and Causes

### Levels of consciousness:

| Level | Description |
|-------|-------------|
| Alert | Awake, aware, responds normally |
| Confused | Awake but disoriented (time, place, person) |
| Lethargic | Drowsy, can be aroused with voice |
| Obtunded | Difficult to arouse, responds to repeated stimulation |
| Stuporous | Minimal response, only to pain |
| Comatose | No response to any stimulation |

### Common causes (AEIOU-TIPS mnemonic):

- **A** = Alcohol / Acidosis
- **E** = Epilepsy / Electrolytes / Encephalopathy
- **I** = Infection (meningitis, encephalitis, sepsis)
- **O** = Overdose / Oxygen (hypoxia)
- **U** = Uremia (kidney failure) / Underdose (missed medications)
- **T** = Trauma / Temperature (hypo/hyperthermia)
- **I** = Insulin (hypoglycemia or DKA)
- **P** = Psychiatric / Poisoning
- **S** = Stroke / Shock / Subarachnoid hemorrhage

### When altered mental status is an emergency:

**Call 911 immediately if the person also has:**
- Fever + stiff neck (meningitis)
- Worst headache of life (subarachnoid hemorrhage)
- Head injury
- Focal neurological signs (one-sided weakness, speech problems)
- Seizure
- Difficulty breathing
- Rapid deterioration

---

## Headache Red Flags (When a Headache Could Be Dangerous)

Not all headaches are emergencies, but some are warning signs of serious conditions.

**Seek emergency care for:**
- "Worst headache of my life" or "thunderclap" headache -- sudden, severe, maximal at onset
- Headache with fever, stiff neck, and sensitivity to light (meningitis)
- Headache after head trauma
- New headache in someone over 50
- Headache with vision changes, confusion, or weakness
- Headache that wakes you from sleep
- Headache that is progressively worsening over days/weeks`,
      keyTerms: [
        {
          term: 'ischemic stroke',
          definition: 'The most common type of stroke (87%), caused by a blood clot blocking blood flow to the brain. Treated with tPA (clot-buster) or mechanical thrombectomy.',
          pronunciation: 'iss-KEE-mik',
        },
        {
          term: 'hemorrhagic stroke',
          definition: 'A stroke caused by a blood vessel bursting in or around the brain. Includes intracerebral hemorrhage and subarachnoid hemorrhage.',
          pronunciation: 'hem-oh-RAJ-ik',
        },
        {
          term: 'status epilepticus',
          definition: 'A seizure lasting more than 5 minutes, or multiple seizures without regaining consciousness between them. A medical emergency requiring immediate treatment.',
          pronunciation: 'STAT-us ep-ih-LEP-tik-us',
        },
        {
          term: 'post-ictal state',
          definition: 'The period of confusion, drowsiness, and weakness that occurs after a seizure. Can last minutes to hours.',
          pronunciation: 'post-IK-tal',
        },
        {
          term: 'thunderclap headache',
          definition: 'A sudden, severe headache that reaches maximum intensity within seconds to one minute. Can be a sign of subarachnoid hemorrhage -- a life-threatening emergency.',
        },
        {
          term: 'meningitis',
          definition: 'Infection of the membranes surrounding the brain and spinal cord. Classic signs: headache, fever, stiff neck. Can be rapidly fatal without treatment.',
          pronunciation: 'men-in-JY-tis',
        },
      ],
      analogies: [
        'An ischemic stroke is like a clogged drain -- if you can unclog it quickly (with tPA or thrombectomy), the water (blood) flows again. A hemorrhagic stroke is like a burst pipe -- blood is flooding where it should not be.',
        'Status epilepticus is like a fire alarm that will not stop ringing -- the brain\'s electrical system is stuck in overdrive and needs medication to reset.',
        'The AEIOU-TIPS mnemonic for altered mental status is like a checklist of suspects in a mystery -- you go through each possible cause to find the culprit.',
        'A thunderclap headache is like a lightning strike in the brain -- sudden, severe, and potentially life-threatening.',
      ],
      examples: [
        'A 68-year-old man suddenly cannot lift his right arm and his speech is slurred. His wife uses BE-FAST and calls 911. He arrives at the hospital within 45 minutes and receives tPA. He recovers with minimal disability.',
        'A 12-year-old girl stares blankly in class for 30 seconds, then blinks and asks what happened. Her teacher has seen this before and calls her parents. She is diagnosed with absence seizures.',
        'A college student is found confused in his dorm room with a fever of 103F and a stiff neck. His roommate calls 911. He is diagnosed with bacterial meningitis and receives antibiotics immediately.',
      ],
      patientCounselingPoints: [
        'Use BE-FAST to identify strokes: Balance, Eyes, Face, Arm, Speech, Time',
        'Note the exact time stroke symptoms start -- this determines what treatments are available',
        'Never put anything in the mouth of someone having a seizure',
        'Sudden severe headache ("worst ever") needs emergency evaluation',
        'Use el acronimo R.A.P.I.D.O. para identificar un derrame cerebral',
      ],
    },

    3: {
      level: 3,
      summary:
        'Neurological emergencies require rapid assessment using validated scales (NIHSS, GCS), recognition of stroke syndromes by vascular territory, differentiation of seizure types, and systematic evaluation of altered consciousness using structured approaches.',
      explanation: `## Neurological Warning Signs: Clinical Framework

Neurological emergencies demand systematic, time-sensitive evaluation. "Time is brain" applies to stroke, status epilepticus, and elevated intracranial pressure alike.

**Traduccion:** Las emergencias neurologicas requieren evaluacion sistematica y sensible al tiempo utilizando escalas validadas como NIHSS y GCS.

---

## Stroke: Clinical Assessment and Syndromes

### NIH Stroke Scale (NIHSS) -- Key Components:

| Category | Scoring | Max Points |
|----------|---------|------------|
| Level of consciousness | 0-3 | 3 |
| Gaze | 0-2 | 2 |
| Visual fields | 0-3 | 3 |
| Facial palsy | 0-3 | 3 |
| Motor (arm) | 0-4 each | 8 |
| Motor (leg) | 0-4 each | 8 |
| Ataxia | 0-2 | 2 |
| Sensory | 0-2 | 2 |
| Language | 0-3 | 3 |
| Dysarthria | 0-2 | 2 |
| Extinction/inattention | 0-2 | 2 |
| **Total** | | **42** |

**NIHSS interpretation:**
- 0-4: Minor stroke (may not benefit from IV tPA risk)
- 5-15: Moderate stroke (strongest tPA benefit)
- 16-20: Moderate-severe stroke
- 21-42: Severe stroke

### Stroke Syndromes by Vascular Territory

**Anterior circulation (carotid system):**

| Artery | Territory | Syndrome |
|--------|-----------|----------|
| MCA (superior division) | Motor/sensory cortex, Broca area | Contralateral face/arm weakness > leg, expressive aphasia (dominant) |
| MCA (inferior division) | Temporal/parietal cortex, Wernicke area | Receptive aphasia (dominant), neglect (non-dominant), visual field cut |
| MCA (complete) | Entire MCA territory | Dense hemiplegia, hemianesthesia, aphasia or neglect, gaze preference |
| ACA | Medial frontal/parietal cortex | Contralateral leg weakness > arm/face, personality changes, urinary incontinence |

**Posterior circulation (vertebrobasilar system):**

| Artery | Territory | Syndrome |
|--------|-----------|----------|
| PCA | Occipital lobe, medial temporal | Contralateral homonymous hemianopia, memory impairment |
| Basilar | Brainstem, cerebellum | Vertigo, diplopia, ataxia, crossed signs, "locked-in syndrome" |
| PICA (Wallenberg) | Lateral medulla | Vertigo, dysphagia, ipsilateral Horner, contralateral pain/temp loss |
| Cerebellar | Cerebellum | Ataxia, vertigo, headache, nausea; risk of herniation from edema |

### Large Vessel Occlusion (LVO) Screening

LVO requires mechanical thrombectomy (up to 24 hours in select patients).

**Rapid arterial occlusion evaluation (RACE) score:**
- Facial palsy (0-2)
- Arm motor function (0-2)
- Leg motor function (0-2)
- Gaze deviation (0-1)
- Aphasia/agnosia (0-2)
- Score >=5: High suspicion for LVO -> Transport to thrombectomy-capable center

### Stroke Treatment Windows

| Treatment | Window | Evidence |
|-----------|--------|----------|
| IV tPA (alteplase) | 0-4.5 hours from onset | NINDS, ECASS III |
| IV tenecteplase | 0-4.5 hours (emerging) | AcT, EXTEND-IA TNK |
| Mechanical thrombectomy (LVO) | 0-6 hours | MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT |
| Late thrombectomy (LVO, salvageable tissue) | 6-24 hours | DAWN, DEFUSE 3 |
| tPA for wake-up stroke (MRI-guided) | Unknown onset, DWI-FLAIR mismatch | WAKE-UP trial |

---

## Seizures: Advanced Classification and Management

### New ILAE Seizure Classification (2017):

**Focal onset:**
- Focal aware (previously "simple partial")
- Focal impaired awareness (previously "complex partial")
- Focal to bilateral tonic-clonic (previously "secondarily generalized")

**Generalized onset:**
- Tonic-clonic, absence, myoclonic, atonic, tonic, clonic

**Unknown onset:**
- Motor: tonic-clonic
- Non-motor: behavior arrest

### Status Epilepticus Management Protocol:

**0-5 minutes (Stabilization phase):**
- ABCs, vitals, IV access, glucose check
- Draw labs: BMP, CBC, AED levels, tox screen

**5-20 minutes (First-line -- benzodiazepines):**
- IV lorazepam 0.1 mg/kg (max 4 mg), may repeat once OR
- IM midazolam 10 mg (if no IV) -- RAMPART trial showed non-inferior/superior to IV lorazepam
- If no IV/IM: Rectal diazepam 0.2 mg/kg or intranasal midazolam

**20-40 minutes (Second-line -- antiepileptic drugs):**
- IV fosphenytoin 20 mg PE/kg (max rate 150 mg PE/min) OR
- IV levetiracetam 60 mg/kg (max 4500 mg) OR
- IV valproate 40 mg/kg (max 3000 mg)
- ESETT trial: All three equally effective for benzodiazepine-refractory SE

**>40 minutes (Refractory status epilepticus):**
- Intubation and continuous infusion:
  - Midazolam 0.2 mg/kg bolus, then 0.05-2 mg/kg/hr
  - Propofol 2 mg/kg bolus, then 20-100 mcg/kg/min (watch for propofol infusion syndrome)
  - Pentobarbital 5 mg/kg bolus, then 1-5 mg/kg/hr (for super-refractory)
- Continuous EEG monitoring

### Acute Symptomatic Seizures (not epilepsy):

Common causes requiring investigation:
- Stroke (most common cause in elderly)
- CNS infection
- Metabolic (hypoglycemia, hyponatremia, hypocalcemia, uremia)
- Drug withdrawal (alcohol, benzodiazepines, barbiturates)
- Drug toxicity (tramadol, bupropion, isoniazid)
- Eclampsia (pregnant or postpartum)
- Traumatic brain injury

---

## Altered Consciousness: Structured Assessment

### Glasgow Coma Scale (GCS):

| Response | Score | Details |
|----------|-------|---------|
| **Eye Opening** | | |
| Spontaneous | 4 | Eyes open without stimulation |
| To voice | 3 | Opens eyes to verbal command |
| To pain | 2 | Opens eyes to painful stimulus |
| None | 1 | No eye opening |
| **Verbal Response** | | |
| Oriented | 5 | Knows who/where/when |
| Confused | 4 | Speaks but disoriented |
| Inappropriate words | 3 | Random words, no conversation |
| Incomprehensible sounds | 2 | Moaning, groaning |
| None | 1 | No verbal response |
| **Motor Response** | | |
| Obeys commands | 6 | Performs requested movements |
| Localizes pain | 5 | Reaches toward painful stimulus |
| Withdraws | 4 | Pulls away from pain |
| Abnormal flexion | 3 | Decorticate posturing |
| Extension | 2 | Decerebrate posturing |
| None | 1 | No motor response |

**GCS clinical significance:**
- GCS <=8: Cannot protect airway -- consider intubation
- GCS 9-12: Moderate impairment
- GCS 13-15: Mild impairment

### Signs of Elevated Intracranial Pressure (ICP)

**Cushing triad (late, ominous sign):**
1. Hypertension (widening pulse pressure)
2. Bradycardia
3. Irregular respirations

**Other ICP signs:**
- Headache worse with lying down, straining, coughing
- Papilledema (swollen optic disc)
- Unilateral pupil dilation (uncal herniation)
- Decreased consciousness (progressive)
- Vomiting (often projectile, without nausea)

**Herniation syndromes:**
- **Uncal:** Ipsilateral pupil dilation, contralateral hemiparesis, decreased consciousness
- **Central (transtentorial):** Bilateral small then fixed dilated pupils, decerebrate posturing
- **Tonsillar:** Respiratory arrest, cardiovascular collapse`,
      keyTerms: [
        {
          term: 'NIHSS',
          definition: 'National Institutes of Health Stroke Scale. Standardized 42-point assessment quantifying stroke severity. Used to guide tPA eligibility and predict outcomes.',
        },
        {
          term: 'large vessel occlusion',
          definition: 'Blockage of a major intracranial artery (ICA, MCA M1/M2, basilar). Requires mechanical thrombectomy in addition to IV thrombolysis. Can be treated up to 24 hours in select patients.',
        },
        {
          term: 'mechanical thrombectomy',
          definition: 'Endovascular procedure using a catheter to physically remove a clot from a blocked brain artery. Standard of care for LVO stroke up to 24 hours with salvageable tissue.',
          pronunciation: 'throm-BEK-toh-mee',
        },
        {
          term: 'status epilepticus',
          definition: 'Seizure activity lasting >5 minutes or recurrent seizures without return to baseline. Medical emergency with stepwise treatment protocol: benzodiazepines, then antiepileptics, then continuous infusion.',
        },
        {
          term: 'Glasgow Coma Scale',
          definition: 'Standardized assessment of consciousness using eye opening (1-4), verbal response (1-5), and motor response (1-6). Score <=8 indicates severe impairment requiring airway protection.',
        },
        {
          term: 'Cushing triad',
          definition: 'Hypertension, bradycardia, and irregular respirations indicating critically elevated intracranial pressure with impending brainstem herniation.',
        },
      ],
      analogies: [
        'The NIHSS is like a damage report after an earthquake -- it systematically surveys each brain function to determine how much territory was affected.',
        'Large vessel occlusion stroke is like a highway traffic accident blocking a major freeway -- you need heavy equipment (thrombectomy) to clear it, not just a traffic cop (tPA alone).',
        'Status epilepticus is like a runaway train -- each level of treatment tries to apply stronger brakes to stop the seizure.',
        'Cushing triad is like the brain\'s last distress signal -- the pressure inside the skull is so high that the body makes a desperate attempt to force blood into the brain.',
      ],
      examples: [
        'A 72-year-old woman presents with right-sided weakness and aphasia. NIHSS is 18. CT shows no hemorrhage. tPA is administered at 2.5 hours from onset. CTA reveals left MCA M1 occlusion. Mechanical thrombectomy is performed with successful recanalization. NIHSS improves to 4 by day 2.',
        'A 45-year-old man presents with a seizure that began 8 minutes ago and is continuing. IM midazolam 10 mg is given. Seizure stops 3 minutes later. Glucose is 180 mg/dL. CT head is normal. Labs reveal sodium of 118 mEq/L -- hyponatremia is the cause.',
        'A 30-year-old woman presents with the "worst headache of her life" that began suddenly 1 hour ago. GCS is 14 (confused). CT head shows subarachnoid hemorrhage. CTA reveals a ruptured anterior communicating artery aneurysm.',
      ],
      clinicalNotes: `**Clinical pearls for neurological warning signs:**

1. **Last known well time, not symptom onset:** For stroke, the treatment clock starts from the last time the patient was known to be neurologically normal. Wake-up strokes and unwitnessed events use the last known well time.

2. **Posterior circulation strokes are frequently missed.** Dizziness, vertigo, and ataxia are common presentations that overlap with benign conditions. The HINTS exam (Head Impulse, Nystagmus, Test of Skew) can differentiate central from peripheral causes.

3. **First seizure workup:** All first-time seizures need CT head, basic metabolic panel, and consideration of LP and MRI. New-onset seizure in an adult >40 requires brain imaging to rule out mass lesion.

4. **GCS motor component:** The motor component is the most predictive of outcome. Report the best response from the best-performing limb, but document asymmetries.

5. **In Spanish-speaking patients,** stroke symptoms may be described as "se me cayo la cara" (my face fell), "no puedo mover el brazo" (I can't move my arm), or "no puedo hablar bien" (I can't speak well).`,
    },

    4: {
      level: 4,
      summary:
        'Advanced neurological emergency evaluation integrates multimodal neuroimaging (CT perfusion, MR DWI/FLAIR mismatch), EEG monitoring for non-convulsive status epilepticus, ICP management algorithms, and evidence-based stroke treatment paradigms extending to 24 hours.',
      explanation: `## Advanced Neurological Emergency Evaluation

### Advanced Stroke Imaging

**Non-contrast CT (NCCT):**
- Sensitivity for acute ischemic stroke: ~25% in first 6 hours
- Primary role: Exclude hemorrhage before thrombolysis
- Early ischemic changes: Loss of gray-white differentiation, sulcal effacement, hyperdense vessel sign
- ASPECTS score (Alberta Stroke Program Early CT Score): 0-10; score <6 associated with worse outcomes, higher hemorrhagic transformation risk

**CT Angiography (CTA):**
- Identifies large vessel occlusion (LVO)
- Essential for thrombectomy decision-making
- Carotid stenosis assessment
- Collateral circulation grading (influences thrombectomy outcome)

**CT Perfusion (CTP):**
- Core vs. penumbra assessment ("target mismatch")
- Core: Irreversibly infarcted tissue (CBF <30% of normal)
- Penumbra: At-risk but salvageable tissue (Tmax >6s but not yet infarcted)
- Mismatch ratio: Penumbra/Core. Ratio >1.8 with core <70 mL favorable for thrombectomy

**MRI in Stroke:**
- DWI (diffusion-weighted imaging): Detects ischemia within minutes (most sensitive)
- FLAIR (fluid-attenuated inversion recovery): Becomes positive at 4-6 hours
- DWI-FLAIR mismatch: DWI positive but FLAIR negative suggests onset <4.5 hours -> eligible for tPA even with unknown onset (WAKE-UP trial)
- MR perfusion: PWI-DWI mismatch identifies salvageable tissue

### Extended Treatment Windows

**DAWN trial (2018):**
- Thrombectomy 6-24 hours after LKW
- Selection: Clinical-core mismatch (high NIHSS with small infarct core on CTP or MRI)
- Criteria: NIHSS >=10 with core <21 mL (if >=80y), <31 mL (if <80y, NIHSS >=10), or <51 mL (if <80y, NIHSS >=20)
- Result: 49% functional independence with thrombectomy vs 13% with medical management

**DEFUSE 3 (2018):**
- Thrombectomy 6-16 hours after LKW
- Selection: Target mismatch on CTP (mismatch ratio >=1.8, core <70 mL, mismatch volume >=15 mL)
- Result: 45% functional independence with thrombectomy vs 17% medical management

**Wake-up stroke (WAKE-UP trial, 2018):**
- IV tPA for unknown onset stroke
- Selection: DWI-FLAIR mismatch on MRI
- Result: Favorable outcome 53% tPA vs 42% placebo

---

### Tenecteplase vs. Alteplase for Acute Ischemic Stroke

**Advantages of tenecteplase (TNK):**
- Single IV bolus (vs. 1-hour alteplase infusion)
- Higher fibrin specificity
- Longer half-life
- Easier to administer (prehospital, rural settings)
- AcT trial (2022): TNK non-inferior to alteplase for ischemic stroke
- Increasingly adopted as standard thrombolytic

---

### Non-Convulsive Status Epilepticus (NCSE)

**Definition:** Electrographic seizure activity without overt convulsions. Present in up to 30-40% of patients with unexplained altered mental status in the ICU.

**Clinical clues:**
- Fluctuating mental status without clear cause
- Subtle motor signs: Eye deviation, nystagmus, facial twitching, finger movements
- Unexplained coma after convulsive SE (ongoing subclinical seizures)
- TBI, stroke, or CNS infection with worsening mental status

**Diagnosis:** Continuous EEG (cEEG) monitoring. Standard 20-minute EEG may miss intermittent NCSE.

**Treatment:** Same stepwise protocol as convulsive SE. May require prolonged continuous infusion with cEEG-guided titration.

**Key principle:** Always consider NCSE in unexplained altered mental status. The threshold for cEEG monitoring should be low.

---

### ICP Management in Neurological Emergencies

**Normal ICP:** 5-15 mmHg
**Elevated ICP:** >20 mmHg (treatment threshold varies by pathology)
**Cerebral perfusion pressure (CPP):** MAP - ICP (target 60-70 mmHg)

**Tier 1 interventions:**
- Head of bed elevation to 30 degrees
- Midline head positioning (optimize venous drainage)
- Sedation and analgesia (propofol, fentanyl)
- Normothermia (fever increases ICP and metabolic demand)
- Osmotherapy: Mannitol 0.5-1 g/kg IV or hypertonic saline (23.4% 30 mL, or 3% infusion)
- CSF drainage via EVD (external ventricular drain)

**Tier 2 interventions:**
- Neuromuscular blockade
- Targeted temperature management (33-35C)
- Moderate hyperventilation (PaCO2 30-35 mmHg, temporary bridge)
- Barbiturate coma (pentobarbital)

**Tier 3 interventions:**
- Decompressive craniectomy
  - Malignant MCA infarction: DECIMAL, DESTINY, HAMLET trials -- reduces mortality from 71% to 22% in patients <60
  - Traumatic brain injury: DECRA, RESCUEicp trials -- reduces mortality but may increase severe disability
- Hypothermia (32-34C)

---

### Subarachnoid Hemorrhage (SAH) Assessment

**Hunt and Hess grading:**
| Grade | Description | 30-day Mortality |
|-------|-------------|-----------------|
| 1 | Asymptomatic or mild headache | ~1% |
| 2 | Moderate headache, nuchal rigidity, cranial nerve palsy | ~5% |
| 3 | Drowsy, confused, mild focal deficit | ~19% |
| 4 | Stupor, moderate-severe hemiparesis | ~42% |
| 5 | Comatose, decerebrate | ~77% |

**Modified Fisher Scale (predicts vasospasm risk):**
| Grade | CT Findings | Vasospasm Risk |
|-------|-------------|----------------|
| 0 | No SAH or IVH | Low |
| 1 | Thin SAH, no IVH | Low |
| 2 | Thin SAH with IVH | Moderate |
| 3 | Thick SAH, no IVH | High |
| 4 | Thick SAH with IVH | Highest |

**SAH management priorities:**
1. Aneurysm securing (coiling or clipping within 24 hours)
2. Vasospasm prevention: Nimodipine 60 mg q4h PO for 21 days
3. Vasospasm treatment: Triple-H therapy (hypertension, hypervolemia, hemodilution) or intra-arterial vasodilators
4. Hydrocephalus management: EVD if needed
5. Seizure prophylaxis: Levetiracetam (phenytoin associated with worse outcomes)

---

### Posterior Reversible Encephalopathy Syndrome (PRES)

**Presentation:**
- Headache, altered mental status, seizures, visual disturbances
- Associated with: Severe hypertension, eclampsia, immunosuppressants (cyclosporine, tacrolimus), renal failure

**Imaging:** Bilateral symmetric vasogenic edema, predominantly parieto-occipital (posterior watershed zones)

**Treatment:** Blood pressure control, remove offending agent, seizure management. Usually reversible with prompt treatment.`,
      keyTerms: [
        {
          term: 'CT perfusion',
          definition: 'Advanced CT imaging that measures cerebral blood flow, blood volume, and transit time to distinguish infarcted core from salvageable penumbra. Essential for thrombectomy selection in the 6-24 hour window.',
        },
        {
          term: 'DWI-FLAIR mismatch',
          definition: 'MRI finding where diffusion restriction (DWI+) is present without FLAIR signal change, suggesting stroke onset <4.5 hours. Enables tPA treatment for unknown-onset strokes (WAKE-UP trial).',
        },
        {
          term: 'non-convulsive status epilepticus',
          definition: 'Continuous electrographic seizure activity without visible convulsions. Present in up to 30-40% of ICU patients with unexplained altered mental status. Diagnosed only by continuous EEG.',
        },
        {
          term: 'target mismatch',
          definition: 'Imaging-based selection criteria for late-window thrombectomy: small ischemic core with large penumbra (at-risk tissue). Mismatch ratio >=1.8 with core <70 mL (DEFUSE 3).',
        },
        {
          term: 'decompressive craniectomy',
          definition: 'Surgical removal of a portion of skull to relieve elevated intracranial pressure. Reduces mortality in malignant MCA infarction (age <60) and severe TBI, though may increase severe disability.',
        },
        {
          term: 'ASPECTS score',
          definition: 'Alberta Stroke Program Early CT Score. 10-point scale assessing early ischemic changes in the MCA territory on NCCT. Score <6 indicates extensive ischemia with higher hemorrhagic risk.',
        },
      ],
      analogies: [
        'CT perfusion is like a satellite weather map for the brain -- the core infarct is the drought zone where tissue is dead, and the penumbra is the region where rain (blood) could still arrive if the blockage is removed.',
        'DWI-FLAIR mismatch is like reading the freshness date on food -- DWI shows the damage exists, while FLAIR tells you how old it is. Fresh damage (DWI+ FLAIR-) is still treatable.',
        'Non-convulsive status epilepticus is a silent fire in the brain -- invisible from the outside but causing ongoing damage. You need EEG (a smoke detector) to find it.',
        'Decompressive craniectomy is like opening a pressure cooker -- removing part of the rigid skull allows the swollen brain to expand without crushing vital structures.',
      ],
      examples: [
        'An 82-year-old woman is found with left-sided weakness at 7 AM (LKW 10 PM). NIHSS is 16. CT shows no hemorrhage, ASPECTS 9. CTP shows core 12 mL, penumbra 85 mL (mismatch ratio 7.1). CTA: right MCA M1 occlusion. Thrombectomy at 11 hours post-LKW achieves TICI 2b/3 reperfusion. Discharged with NIHSS 3.',
        'A 50-year-old man is intubated for status epilepticus. After benzodiazepines and fosphenytoin, convulsions stop. However, he remains comatose. cEEG shows ongoing non-convulsive seizure activity. Midazolam infusion is started with EEG-guided titration to burst suppression.',
        'A 45-year-old woman presents with sudden "worst headache of her life," vomiting, and neck stiffness. Hunt and Hess grade 2. CT shows thick SAH (modified Fisher 4). CTA reveals a 6mm anterior communicating artery aneurysm. Endovascular coiling performed within 12 hours. Nimodipine started for vasospasm prophylaxis.',
      ],
      clinicalNotes: `**Expert clinical pearls:**

1. **Late-window thrombectomy:** DAWN and DEFUSE 3 revolutionized stroke care. Patients with LVO and favorable imaging (small core, large penumbra) benefit from thrombectomy up to 24 hours. Always obtain CTA/CTP for suspected LVO regardless of time.

2. **Tenecteplase adoption:** TNK is rapidly replacing alteplase due to ease of administration (single bolus) and comparable efficacy. Ideal for prehospital and rural settings.

3. **cEEG in the ICU:** The threshold for continuous EEG should be low. Any unexplained altered mental status, TBI, or post-cardiac arrest coma should trigger cEEG to evaluate for NCSE.

4. **SAH pitfall:** 5-10% of SAH patients have normal initial CT (especially if presenting late). If clinical suspicion is high, perform LP (xanthochromia) or CTA. "Worst headache of life" + normal CT does not exclude SAH.

5. **Decompressive craniectomy timing:** In malignant MCA infarction, craniectomy should be performed within 48 hours of onset for maximal benefit (age <60). Delayed decision-making worsens outcomes.`,
    },

    5: {
      level: 5,
      summary:
        'State-of-the-art neurological emergency management leverages AI-augmented imaging, mobile stroke units, neuroprotective strategies, precision medicine in epilepsy, advanced neuromonitoring, and systems of care optimization to push the boundaries of brain salvage.',
      explanation: `## Cutting-Edge Neurological Emergency Management

### AI and Machine Learning in Stroke

**Automated LVO detection:**
- FDA-cleared platforms (RapidAI/Viz.ai): Automated CTA interpretation with LVO detection
- Sensitivity >90%, specificity >80% for LVO
- Alert directly to neurointerventionalist smartphone within 6 minutes of scan
- Demonstrated reduction in door-to-groin puncture time by 20-30 minutes
- Workflow integration: Parallel notification to stroke and IR teams

**AI-augmented CT perfusion:**
- Automated ASPECTS scoring with AI: Reduces inter-reader variability
- Automated core/penumbra calculation in <5 minutes
- Integration with EHR for real-time clinical decision support
- Prediction models: AI combining imaging + clinical data predicts functional outcome with AUC >0.85

**Natural language processing (NLP):**
- Automated stroke symptom extraction from EMS reports and triage notes
- Real-time stroke alert systems triggered by keyword patterns
- Reducing time from ED arrival to stroke team activation

---

### Mobile Stroke Units (MSU)

**Concept:** CT scanner, point-of-care lab, telemedicine, and tPA in a specially equipped ambulance.

**BEST-MSU trial (2021):**
- tPA administered 72 minutes earlier with MSU vs standard EMS
- Better functional outcomes (mRS 0-1) at 90 days: 55% vs 44%
- NNT = 9 for better outcome with MSU
- Greatest benefit: Patients treated within first 60 minutes of onset

**Pre-hospital stroke care evolution:**
- Field triage scales for LVO: RACE, LAMS, VAN -- direct transport to thrombectomy center
- Prehospital tenecteplase: Single-bolus thrombolytic administered by paramedics (trials ongoing)
- Telemedicine-guided prehospital stroke assessment: NIHSS via video from ambulance
- Drone delivery of tPA to remote areas (proof of concept)

---

### Neuroprotection in Stroke and TBI

**Neuroprotective strategies (current evidence):**

| Strategy | Mechanism | Status |
|----------|-----------|--------|
| Therapeutic hypothermia | Reduces metabolic demand, inflammation | Mixed results in stroke, beneficial in cardiac arrest |
| Remote ischemic conditioning | Limb BP cuff inflation/deflation | RESIST trial: Improved outcomes when combined with thrombolysis |
| Nerinetide (NA-1) | PSD-95 inhibitor, reduces excitotoxicity | ESCAPE-NA1: Benefit in non-tPA patients; ESCAPE-NEXT ongoing |
| Uric acid | Antioxidant | URICO-ICTUS: Benefit in women, patients with hyperglycemia |
| Hypothermia (33C) for malignant MCA | Reduces edema, neuroprotection | EuroHYP-1: Underpowered, no clear benefit |

**Emerging approaches:**
- Glibenclamide (CHARM trial): SUR1-TRPM4 channel blocker reducing cerebral edema
- Fingolimod: Immunomodulation in acute stroke
- Stem cell therapies: Phase I/II safety established, efficacy unclear
- Blood-brain barrier stabilization agents

---

### Precision Medicine in Epilepsy and Status Epilepticus

**Genetic epilepsy and targeted therapy:**

| Gene/Condition | Mechanism | Targeted Treatment |
|---------------|-----------|-------------------|
| SCN1A (Dravet) | Na+ channel loss of function | Avoid Na+ channel blockers; use stiripentol, fenfluramine, cannabidiol |
| KCNQ2/3 | K+ channel dysfunction | Ezogabine (retigabine) |
| TSC1/TSC2 (TSC) | mTOR pathway overactivation | Everolimus (mTOR inhibitor) |
| DEPDC5 | mTOR pathway | mTOR inhibitors (investigational) |
| CDKL5 | Kinase deficiency | Ganaxolone |
| GRIN2A | NMDA receptor | Memantine (investigational) |

**Super-refractory status epilepticus (SRSE):**
- Definition: SE continuing despite 24+ hours of continuous anesthetic infusion
- Emerging therapies:
  - Ketamine (NMDA antagonist): Increasingly used, growing evidence base
  - Immunotherapy (IVIG, plasmapheresis): For autoimmune etiology
  - Ketogenic diet: Rapid induction in ICU setting
  - Electroconvulsive therapy (ECT): Case reports of efficacy
  - Allopregnanolone (brexanolone): GABA-A modulator
- Autoimmune encephalitis: Anti-NMDA receptor, anti-LGI1, anti-CASPR2 -- must identify and treat underlying etiology

---

### Advanced Neuromonitoring

**Multimodal neuromonitoring in TBI and SAH:**
- ICP monitoring (EVD or intraparenchymal bolt)
- Brain tissue oxygenation (PbtO2): Target >20 mmHg
- Cerebral microdialysis: Lactate/pyruvate ratio (metabolic crisis if >40)
- Continuous EEG: Seizures, cortical spreading depolarizations
- Transcranial Doppler (TCD): Vasospasm monitoring (MCA velocity >120 cm/s = mild, >200 cm/s = severe)

**Cortical spreading depolarization (CSD):**
- Massive depolarization waves that propagate across cortex
- Occurs in TBI, SAH, malignant stroke
- Causes transient cortical silence followed by metabolic distress
- Detection: Subdural electrode strips (ECoG)
- Association with secondary injury and worse outcomes
- Potential therapeutic target: Ketamine, nimodipine, hypothermia

**Automated pupillometry:**
- Quantitative pupillary assessment (NPi -- Neurological Pupil Index)
- NPi <3: Abnormal, correlates with elevated ICP and worse outcomes
- More sensitive and reproducible than manual assessment
- Can detect changes 15-20 hours before clinical deterioration

---

### Disparities and Health Equity in Neurological Emergencies

**Stroke care disparities:**
- Black patients: 2x stroke incidence, higher mortality, less likely to receive tPA or thrombectomy
- Hispanic patients: Higher stroke mortality, language barriers delay recognition
- Rural patients: Longer transport times, fewer thrombectomy-capable centers
- Women: Present later, receive tPA less often, have worse functional outcomes

**Solutions and interventions:**
- Telestroke networks: Bring neurologist expertise to rural/underserved hospitals
- Hub-and-spoke stroke systems: Rapid drip-and-ship protocols
- Community stroke education in multiple languages
- Standardized stroke protocols reducing provider discretion (reduces bias)
- Mobile stroke units in underserved areas

**Language-concordant neurological assessment:**
- Validated Spanish NIHSS available
- Key Spanish neurological terms:
  - Derrame cerebral / embolia / infarto cerebral (stroke)
  - Convulsiones / ataques (seizures)
  - Dolor de cabeza muy fuerte (severe headache)
  - No puedo mover el brazo/la pierna (can't move arm/leg)
  - Veo doble / no veo bien (double vision / can't see well)
  - Confusion / desorientacion (confusion / disorientation)

---

### Systems of Care Optimization

**Stroke system metrics (Target Stroke III):**
- Door-to-CT: <20 minutes (target <10 minutes)
- Door-to-needle (tPA): <45 minutes (target <30 minutes)
- Door-to-groin puncture: <90 minutes
- Symptom-to-reperfusion: <120 minutes (ideal)
- tPA administration rate for eligible patients: >85%

**Telestroke evidence:**
- STRokE DOC trial: Telestroke non-inferior to in-person neurologist for tPA decision
- Reduces rural disparities in tPA administration
- Expanding to thrombectomy triage (CTA interpretation via telestroke)

**Quality improvement:**
- Registry participation (Get With The Guidelines - Stroke)
- Mock stroke codes / simulation training
- Multidisciplinary debriefing after stroke alerts
- Patient-reported outcome measures (PROs) at 90 days`,
      keyTerms: [
        {
          term: 'mobile stroke unit',
          definition: 'Specialized ambulance equipped with CT scanner, point-of-care lab, and telemedicine allowing prehospital stroke diagnosis and tPA administration. BEST-MSU trial demonstrated improved outcomes with 72-minute earlier treatment.',
        },
        {
          term: 'cortical spreading depolarization',
          definition: 'Massive waves of neuronal/glial depolarization propagating across cortex at 2-5 mm/min. Detected by subdural ECoG. Causes metabolic distress and secondary injury in TBI, SAH, and malignant stroke.',
        },
        {
          term: 'neurological pupil index',
          definition: 'Quantitative pupillary assessment (NPi 0-5) from automated pupillometry. NPi <3 is abnormal and correlates with elevated ICP. More sensitive and reproducible than manual pupil checks.',
        },
        {
          term: 'super-refractory status epilepticus',
          definition: 'Status epilepticus persisting despite 24+ hours of continuous anesthetic infusion. Requires consideration of ketamine, immunotherapy, ketogenic diet, or other emerging therapies.',
        },
        {
          term: 'autoimmune encephalitis',
          definition: 'Antibody-mediated brain inflammation (anti-NMDA receptor, anti-LGI1, anti-CASPR2) causing seizures, altered consciousness, psychiatric symptoms, and movement disorders. Requires immunotherapy (IVIG, steroids, rituximab).',
        },
        {
          term: 'nerinetide',
          definition: 'PSD-95 inhibitor neuroprotectant blocking excitotoxic signaling. ESCAPE-NA1 trial showed benefit in non-tPA-treated stroke patients. ESCAPE-NEXT trial evaluating further.',
        },
      ],
      analogies: [
        'A mobile stroke unit is like bringing the hospital to the patient -- the earlier tPA starts, the more brain tissue is saved, and every minute saved is 1.9 million neurons preserved.',
        'Cortical spreading depolarizations are like tsunamis in the brain -- massive waves of electrical activity that sweep across the cortex, leaving metabolic devastation in their wake.',
        'AI-augmented stroke imaging is like having an expert radiologist and neurologist instantly available at every scanner in the world -- democratizing expertise that was previously available only at academic centers.',
        'Precision epilepsy treatment is like having a key for each specific lock -- instead of trying every antiepileptic drug, genetic testing identifies the exact channel defect and its targeted treatment.',
      ],
      clinicalNotes: `**Expert-level clinical pearls:**

1. **AI stroke platforms in practice:** Viz.ai and RapidAI are now standard at many stroke centers. They reduce notification time by 20-30 minutes and improve identification of LVO patients who would otherwise be missed. However, they are not perfect -- always review the images yourself.

2. **Tenecteplase in the field:** TNK's single-bolus administration makes it ideal for prehospital and rural settings. As evidence matures (AcT trial), expect TNK to become the standard thrombolytic for ischemic stroke.

3. **NCSE prevalence:** Non-convulsive status is massively underdiagnosed. In ICU patients with unexplained altered mental status, up to 30-40% have electrographic seizures. Low threshold for continuous EEG is critical.

4. **Autoimmune encephalitis:** Any young patient with new-onset seizures, psychiatric symptoms, and movement disorder should be evaluated for anti-NMDA receptor encephalitis. Often presents as "psychiatric illness" before neurological decline.

5. **PbtO2-guided therapy in TBI:** Brain tissue oxygenation monitoring is increasingly used alongside ICP. BOOST-3 trial will clarify if PbtO2-guided management reduces mortality. Current evidence supports maintaining PbtO2 >20 mmHg.

6. **Health equity imperative:** Stroke outcomes are heavily influenced by access to specialized care. Telestroke networks, hub-and-spoke systems, and community education in multiple languages are evidence-based strategies to reduce disparities. Advocate for these systems at your institution.

7. **Genetic epilepsy at the bedside:** For refractory epilepsy, especially in pediatrics, rapid genetic testing (epilepsy gene panels or exome sequencing) can identify actionable targets. Dravet syndrome diagnosis (SCN1A) changes management urgently -- sodium channel blockers are contraindicated.`,
    },
  },

  media: [
    {
      id: 'neuro-warning-signs-infographic',
      type: 'diagram',
      filename: 'neuro-warning-signs-infographic.svg',
      title: 'Neurological Warning Signs Infographic',
      description: 'Visual guide to BE-FAST stroke recognition and neurological emergencies in English and Spanish',
    },
    {
      id: 'stroke-vascular-territories',
      type: 'diagram',
      filename: 'stroke-vascular-territories.svg',
      title: 'Stroke Vascular Territory Map',
      description: 'Brain diagram showing arterial territories and corresponding stroke syndromes',
    },
    {
      id: 'gcs-assessment-guide',
      type: 'diagram',
      filename: 'gcs-assessment-guide.svg',
      title: 'Glasgow Coma Scale Assessment Guide',
      description: 'Step-by-step GCS assessment with scoring examples',
    },
    {
      id: 'status-epilepticus-algorithm',
      type: 'diagram',
      filename: 'status-epilepticus-algorithm.svg',
      title: 'Status Epilepticus Treatment Algorithm',
      description: 'Stepwise management protocol for status epilepticus',
    },
  ],

  citations: [
    {
      id: 'dawn-trial-2018',
      type: 'article',
      title: 'Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct',
      authors: ['Nogueira, R.G.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1706442',
      accessedDate: '2026-01-30',
    },
    {
      id: 'defuse3-2018',
      type: 'article',
      title: 'Thrombectomy for Stroke at 6 to 16 Hours with Selection by Perfusion Imaging',
      authors: ['Albers, G.W.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1713973',
      accessedDate: '2026-01-30',
    },
    {
      id: 'esett-2019',
      type: 'article',
      title: 'Treatment of Established Status Epilepticus (ESETT)',
      authors: ['Kapur, J.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1905795',
      accessedDate: '2026-01-30',
    },
    {
      id: 'best-msu-2021',
      type: 'article',
      title: 'Effect of Mobile Stroke Unit Care vs Standard Care on Disability at 90 Days',
      authors: ['Grotta, J.C.', 'et al.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/2785372',
      accessedDate: '2026-01-30',
    },
    {
      id: 'aha-stroke-guidelines-2019',
      type: 'article',
      title: '2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke',
      authors: ['Powers, W.J.', 'et al.'],
      source: 'Stroke',
      url: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000211',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Cardiac Warning Signs' },
    { targetId: 'emergency-respiratory-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Respiratory Warning Signs' },
    { targetId: 'emergency-abdominal-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Abdominal Warning Signs' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'parent', label: 'Nervous System' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['emergency medicine', 'neurology', 'warning signs', 'patient education'],
    keywords: [
      'stroke', 'FAST', 'seizure', 'status epilepticus', 'altered mental status',
      'GCS', 'NIHSS', 'tPA', 'thrombectomy', 'intracranial pressure',
      'derrame cerebral', 'convulsiones',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'neurology', 'internal medicine'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurologicalWarnings;
