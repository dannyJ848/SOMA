/**
 * Vertigo - Comprehensive Educational Content
 *
 * Covers peripheral and central vertigo including BPPV, Meniere disease,
 * vestibular neuritis, labyrinthitis, diagnosis, and treatment.
 */

import { EducationalContent } from '../../types';

export const vertigo: EducationalContent = {
  id: 'condition-vertigo',
  type: 'condition',
  name: 'Vertigo',
  alternateNames: ['BPPV', 'Meniere Disease', 'Vestibular Neuritis', 'Labyrinthitis', 'Benign Paroxysmal Positional Vertigo', 'Peripheral Vertigo', 'Central Vertigo'],
  hpoId: 'HP:0001252',

  levels: {
    1: {
      level: 1,
      summary: 'Vertigo is the sensation that you or your surroundings are spinning, often caused by inner ear problems. It is different from dizziness or lightheadedness and can range from mild to severe.',
      explanation: `## What is Vertigo?

**Vertigo** is a specific type of dizziness where you feel like you or the room is spinning or moving. This happens even when you are standing still.

**Vertigo is NOT the same as:**
- **Lightheadedness:** Feeling like you might faint
- **Disequilibrium:** Feeling unsteady or off-balance
- **Dizziness:** A general term that can include all of the above

**Think of it like this:**
Your inner ear has a balance system. When this system has problems, your brain gets confusing signals about your body's position, making you feel like things are spinning.

## The Balance System

Your body uses three systems to maintain balance:
1. **Inner ear (vestibular system):** Detects head position and movement
2. **Eyes (vision):** Helps you see where you are in space
3. **Sensors in muscles and joints (proprioception):** Tell your brain about body position

When these systems disagree, vertigo can happen.

## Types of Vertigo

**Peripheral vertigo (most common):**
- Caused by problems in the inner ear
- Usually not serious
- Examples: BPPV, Meniere disease, vestibular neuritis

**Central vertigo:**
- Caused by problems in the brain
- Can be more serious
- Examples: Stroke, migraine, multiple sclerosis

## Common Causes

**Benign Paroxysmal Positional Vertigo (BPPV):**
- Most common cause of vertigo
- Triggered by changes in head position
- Short episodes of spinning (less than 1 minute)
- Brought on by rolling over in bed, looking up, or bending down
- Not life-threatening

**Meniere disease:**
- Episodes of vertigo lasting hours
- Ringing in the ears (tinnitus)
- Hearing loss
- Feeling of fullness in the ear

**Vestibular neuritis:**
- Inflammation of the balance nerve
- Constant vertigo that lasts days
- Often after a viral infection
- Severe at first, gradually improves

**Labyrinthitis:**
- Similar to vestibular neuritis
- Also affects hearing (inner ear inflammation)

**Other causes:**
- Migraines
- Head injury
- Certain medications
- Stroke or brain problems (less common)

## Symptoms

**Common vertigo symptoms:**
- Spinning sensation (you or room spinning)
- Nausea and vomiting
- Loss of balance
- Sweating
- Abnormal eye movements (nystagmus)

**Symptoms that need immediate medical care:**
- Double vision
- Slurred speech
- Weakness in arms or legs
- Severe headache
- Difficulty walking
- Confusion or trouble understanding speech
- Fainting

## Diagnosis

Doctors diagnose vertigo by:
1. **Asking about symptoms:** When it happens, how long it lasts, what triggers it
2. **Physical examination:** Looking at eye movements, checking balance
3. **Special tests:**
   - **Dix-Hallpike test:** For BPPV
   - **Hearing tests:** For Meniere disease
   - **Imaging:** CT or MRI if needed

## Treatment

**Treatment depends on the cause:**

**For BPPV:**
- **Epley maneuver:** Special head movements to reposition inner ear crystals
- Done by doctor or physical therapist
- Often cures the problem after 1-2 treatments

**For Meniere disease:**
- Low-salt diet
- Medications (diuretics)
- Sometimes surgery for severe cases

**For vestibular neuritis/labyrinthitis:**
- Medications for nausea and dizziness
- Gradual return to normal activities
- Balance exercises (vestibular rehabilitation)

**Medications for symptoms:**
- Meclizine (Antivert) for dizziness
- Dimenhydrinate (Dramamine) for nausea
- Scopolamine patch for prevention

## What You Can Do

**During a vertigo attack:**
- Sit or lie down immediately
- Avoid bright lights
- Avoid sudden head movements
- Stay still until the spinning stops
- Don't drive until symptoms improve

**Preventing future attacks:**
- Avoid triggers you have identified
- Treat ear infections promptly
- Manage stress
- Get enough sleep
- Avoid alcohol excess
- Practice balance exercises if recommended

## Living with Vertigo

**Balance exercises:**
- These help your brain compensate for inner ear problems
- Start with simple exercises
- Gradually increase difficulty
- Usually prescribed by physical therapist

**Safety tips:**
- Use handrails on stairs
- Use nightlights
- Remove fall hazards (rugs, clutter)
- Sit down when feeling dizzy
- Avoid driving during attacks
- Tell family and friends about your condition

## When to See a Doctor

**See a doctor if:**
- Vertigo for the first time
- Symptoms interfere with daily life
- Vertigo keeps coming back
- Hearing changes or ringing in ears
- Weakness, numbness, or difficulty speaking

**Seek emergency care if:**
- Sudden, severe vertigo
- Symptoms of stroke (weakness, slurred speech, confusion)
- Head injury followed by vertigo
- Chest pain or heart palpitations with vertigo
- Fainting or loss of consciousness`,
      keyTerms: [
        { term: 'vertigo', definition: 'Sensation of spinning or movement when you are actually still' },
        { term: 'BPPV', definition: 'Benign Paroxysmal Positional Vertigo; common inner ear problem causing brief vertigo with position changes' },
        { term: 'nystagmus', definition: 'Rapid, uncontrolled eye movements that often happen with vertigo' },
        { term: 'tinnitus', definition: 'Ringing, buzzing, or other sounds in the ears' },
        { term: 'Epley maneuver', definition: 'Special head movements to treat BPPV by repositioning inner ear crystals' },
      ],
      analogies: [
        'The inner ear balance system is like a gyroscope that helps you know which way is up.',
        'BPPV is like having loose rocks in a watch - they move around and disrupt normal function.',
        'Balance exercises are like physical therapy for your brain - they help it learn to work around the inner ear problem.',
      ],
      examples: [
        'A person rolls over in bed and suddenly feels the room spinning for 30 seconds - this could be BPPV.',
        'Someone has episodes of vertigo lasting hours with ringing in the ear and hearing changes - this could be Meniere disease.',
      ],
      patientCounselingPoints: [
        'Vertigo is different from lightheadedness - it feels like spinning',
        'Sit or lie down immediately during a vertigo attack',
        'BPPV can often be cured with a simple head maneuver (Epley)',
        'Balance exercises can help your brain compensate for inner ear problems',
        'Seek emergency care if vertigo is accompanied by weakness, slurred speech, or confusion',
      ],
    },
    2: {
      level: 2,
      summary: 'Vertigo is classified as peripheral (inner ear) or central (brain) based on etiology. Common peripheral causes include BPPV, Meniere disease, vestibular neuritis, and labyrinthitis, each with distinct presentations and treatment approaches.',
      explanation: `## Definition and Classification

**Vertigo:** Illusion of movement, typically rotational spinning sensation

**Classification:**

**Peripheral vertigo (most common):**
- Originates from inner ear or vestibular nerve
- Benign causes predominate
- Associated with nausea, vomiting, nystagmus
- Examples: BPPV, Meniere disease, vestibular neuritis

**Central vertigo:**
- Originates from brainstem or cerebellum
- More serious causes
- Associated with neurological symptoms
- Examples: Stroke, migraine, MS, tumor

## Vestibular System Anatomy

**Peripheral vestibular system:**
- **Semicircular canals (3):** Detect rotational acceleration
  - Horizontal (lateral) canal
  - Anterior (superior) canal
  - Posterior canal
- **Vestibule:** Contains utricle and saccule (detect linear acceleration and gravity)
- **Cochlea:** Hearing organ
- **Vestibular nerve:** Carries balance signals to brain

**Central vestibular pathways:**
- Vestibular nuclei in brainstem
- Connections to cerebellum
- Connections to oculomotor nuclei (eye movement control)
- Connections to spinal cord (postural control)

## Peripheral Vestibular Disorders

### Benign Paroxysmal Positional Vertigo (BPPV)

**Pathophysiology:**
- Otoconia (calcium carbonate crystals) dislodge from utricle
- Migrate into semicircular canals (most commonly posterior canal)
- Create abnormal stimulation with head position changes

**Clinical features:**
- Brief vertigo episodes (< 1 minute)
- Triggered by position changes:
  - Rolling over in bed
  - Looking up
  - Bending forward
  - Turning head in bed
- No hearing loss
- No neurological symptoms
- Fatigable with repeated positioning

**Diagnosis:**
- Dix-Hallpike test positive
- Characteristic nystagmus:
  - Upbeating, torsional nystagmus
  - Latency of onset (1-5 seconds)
  - Duration < 60 seconds
  - Fatigable with repeated testing

**Treatment:**
- Canalith repositioning maneuvers:
  - **Epley maneuver:** For posterior canal BPPV
  - **Semont maneuver:** Alternative for posterior canal BPPV
  - **Barbecue (Lempert) maneuver:** For horizontal canal BPPV
- Brandt-Daroff exercises for home
- High success rate (80-90% after 1-3 treatments)

### Meniere Disease

**Pathophysiology:**
- Endolymphatic hydrops (increased fluid pressure in inner ear)
- Etiology unknown (theories include autoimmunity, genetics, viral)

**Clinical features:**
- **Triad of symptoms:**
  - Episodic vertigo (minutes to hours)
  - Fluctuating hearing loss
  - Tinnitus
- Aural fullness (pressure in ear)
- Usually unilateral (can become bilateral)
- Episodes often cluster, then remit

**Diagnosis:**
- Clinical diagnosis based on symptom triad
- Audiometry: Low-frequency sensorineural hearing loss
- MRI: To rule out other causes (vestibular schwannoma)

**Stages:**
- **Early (Stage 1):** Fluctuating hearing, frequent vertigo attacks
- **Middle (Stage 2):** Hearing loss stabilizes, vertigo attacks continue
- **Late (Stage 3):** Poor hearing, vertigo attacks decrease

**Treatment:**
- **Low-sodium diet** (< 2,000 mg/day)
- **Diuretics:** Hydrochlorothiazide-triamterene
- **Vestibular rehabilitation:** Between episodes
- **Intratympanic steroids:** For acute attacks
- **Intratympanic gentamicin:** For refractory cases (chemical labyrinthectomy)
- **Surgery:** Endolymphatic sac decompression, vestibular nerve section, labyrinthectomy (rare)

### Vestibular Neuritis

**Pathophysiology:**
- Inflammation of vestibular nerve (usually vestibular portion of 8th cranial nerve)
- Viral etiology suspected (herpes simplex virus reactivation)
- No cochlear involvement (hearing preserved)

**Clinical features:**
- Acute, severe vertigo lasting days
- Constant vertigo initially
- Nausea, vomiting prominent
- No hearing loss
- No auditory symptoms
- Often after viral URI

**Diagnosis:**
- Clinical diagnosis
- HINTS examination to distinguish from central causes
- Hearing test: Normal

**Treatment:**
- **Symptomatic:** Vestibular suppressants (meclizine, diazepam) for first 1-3 days
- **Steroids:** 60 mg prednisone taper over 2-3 weeks (evidence for faster recovery)
- **Antivirals:** Acyclovir/valacyclovir (controversial benefit)
- **Vestibular rehabilitation:** Essential for recovery
- Most recover over weeks to months

### Labyrinthitis

**Pathophysiology:**
- Inflammation of labyrinth (inner ear)
- Involves both vestibular and cochlear portions
- Viral or bacterial etiology

**Clinical features:**
- Similar to vestibular neuritis BUT:
  - Hearing loss or tinnitus present
  - Often bacterial (acute otitis media complication) or viral

**Treatment:**
- Supportive care
- Steroids for viral labyrinthitis
- Prompt antibiotics for bacterial labyrinthitis

## Central Vertigo

### Causes

**Vascular:**
- Vertebrobasilar TIA or stroke
- Lateral medullary syndrome (Wallenberg)
- Cerebellar infarction

**Migraine:**
- Vestibular migraine
- Basilar migraine

**Demyelinating:**
- Multiple sclerosis

**Tumors:**
- Acoustic neuroma (vestibular schwannoma)
- Cerebellar tumors
- Brainstem tumors

### Red Flags for Central Vertigo

**Dangerous symptoms requiring urgent evaluation:**
- Severe headache ("worst headache of life")
- Double vision
- Slurred speech
- Weakness or numbness
- Difficulty walking
- Confusion
- Loss of consciousness

**HINTS examination:**
- **Head Impulse:** Abnormal in peripheral, normal in central
- **Nystagmus:** Direction-changing suggests central
- **Test of Skew:** Vertical misalignment suggests central

## Diagnostic Approach

### History

**Key questions:**
- Nature of sensation: Spinning vs lightheadedness
- Duration: Seconds, minutes, hours, days?
- Triggers: Position change, spontaneous?
- Associated symptoms: Hearing loss, tinnitus, neurologic symptoms?
- Number of episodes: Single, recurrent?
- Medical history: Head trauma, ear infections, migraines?

### Physical Examination

**General examination:**
- Vital signs (orthostatic vitals)
- Cardiac examination
- Neurological examination

**Otologic examination:**
- Otoscopy (tympanic membrane, middle ear)
- Hearing assessment (whisper test, tuning fork)
- Insufflation (pneumatic otoscopy)

**Vestibular examination:**
- **Dix-Hallpike test:** For BPPV
- **Head thrust test:** Assessing vestibulo-ocular reflex
- **Nystagmus assessment:**
  - Spontaneous nystagmus
  - Gaze-evoked nystagmus
  - Positional nystagmus
- **Romberg test:** Balance with eyes closed
- **Gait assessment:** Heel-to-toe walking

### Diagnostic Testing

**Audiometry:**
- Pure tone audiometry
- Speech audiometry
- Tympanometry

**Imaging:**
- **MRI brain:** For central vertigo, suspected tumor, stroke
- **CT head:** For trauma, intracranial hemorrhage

**Vestibular testing:**
- Videonystagmography (VNG)
- Caloric testing
- Vestibular evoked myogenic potentials (VEMP)
- Rotary chair testing

## Treatment Principles

**Vestibular suppressants:**
- **Antihistamines:** Meclizine, dimenhydrinate
- **Benzodiazepines:** Diazepam, lorazepam
- **Anticholinergics:** Scopolamine
- Use only during acute phase (first few days)
- Prolonged use delays compensation

**Vestibular rehabilitation:**
- Adaptation exercises
- Habituation exercises
- Balance training
- Gaze stability exercises
- Essential for recovery from vestibular neuritis, labyrinthitis, and post-acute Meniere

**Canalith repositioning:**
- First-line for BPPV
- Epley, Semont, or other maneuvers
- High success rate

**Surgical options:**
- Reserved for refractory cases
- Endolymphatic sac decompression (Meniere)
- Vestibular nerve section (Meniere)
- Labyrinthectomy (last resort)
- Microvascular decompression (rare)

## Complications

**Falls and injuries:**
- Especially in elderly
- Risk of fracture
- Safety modifications important

**Psychological impact:**
- Anxiety about attacks
- Depression
- Avoidance behaviors
- Agoraphobia

**Economic impact:**
- Lost work days
- Healthcare costs
- Reduced productivity`,
      keyTerms: [
        { term: 'BPPV', definition: 'Benign Paroxysmal Positional Vertigo; brief vertigo episodes triggered by position changes due to displaced otoconia' },
        { term: 'nystagmus', definition: 'Involuntary, rapid eye movements; characteristic of vestibular dysfunction' },
        { term: 'Epley maneuver', definition: 'Canalith repositioning procedure for posterior canal BPPV' },
        { term: 'Meniere disease', definition: 'Inner ear disorder causing vertigo, hearing loss, tinnitus, and ear fullness due to endolymphatic hydrops' },
        { term: 'vestibular neuritis', definition: 'Inflammation of vestibular nerve causing acute vertigo without hearing loss' },
        { term: 'endolymphatic hydrops', definition: 'Increased fluid pressure in the inner ear; pathologic finding in Meniere disease' },
      ],
      analogies: [
        'BPPV is like having a tiny rock in your watch - it disrupts the normal mechanism when you change positions.',
        'The inner ear balance system is like three gyroscopes (semicircular canals) detecting rotation in different planes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vertigo evaluation requires systematic differentiation between peripheral and central etiologies using focused history, examination maneuvers (Dix-Hallpike, HINTS), and targeted testing. Treatment is directed at the specific cause including canalith repositioning for BPPV and vestibular rehabilitation for vestibular hypofunction.',
      explanation: `## Vestibular System Physiology

### Semicircular Canal Function

**Angular acceleration detection:**
- Each canal detects rotation in one plane
- **Horizontal canal:** Detects yaw rotation (turning head side to side)
- **Anterior canal:** Detects pitch forward and head rotation
- **Posterior canal:** Detects pitch backward and head rotation
- Ampulla contains cupula with hair cells
- Endolymph movement deflects cupula
- Creates nerve impulses proportional to acceleration

**Vestibulo-ocular reflex (VOR):**
- Maintains stable gaze during head movement
- Fast pathway for eye movement compensation
- Head impulse test assesses VOR function

### Otolith Function

**Utricle and saccule:**
- Detect linear acceleration and gravity
- Macula contains hair cells with otoconia
- Otoconia: Calcium carbonate crystals
- Maintain upright posture
- Contribute to perception of verticality

### Vestibular Pathways

**Peripheral to central:**
- Scarpa ganglion (vestibular nerve cell bodies)
- 8th cranial nerve enters brainstem
- Vestibular nuclei (medulla, pons)
- Connections to:
  - Oculomotor nuclei (VOR)
  - Cerebellum (flocculonodular lobe)
  - Spinal cord (vestibulospinal tracts)
  - Thalamus to cortex (conscious perception)

## Peripheral Vestibular Disorders: Pathophysiology

### BPPV Pathophysiology

**Canalithiasis theory:**
- Free-floating otoconia in semicircular canal
- Gravity moves particles with head position
- Creates abnormal endolymph flow
- Stimulates cupula inappropriately
- Posterior canal most common (85-90%)
- Horizontal canal (10-15%)
- Anterior canal (rare, < 2%)

**Cupulolithiasis theory:**
- Otoconia adherent to cupula
- Makes cupula gravity-sensitive
- Similar symptoms to canalithiasis
- Different treatment implications

**Epidemiology:**
- Incidence increases with age
- Female:male ratio 2:1
- Recurrence rate: 15-30% per year
- Can be bilateral

### Meniere Disease Pathophysiology

**Endolymphatic hydrops:**
- Endolymph overproduction or impaired absorption
- Distorts membranous labyrinth
- Rupture of membranes leads to potassium toxicity
- Attacks correlate with rupture and healing

**Histopathology:**
- Distended scala media
- Reissner membrane bulging
- Dilation of saccule and utricle
- Hair cell degeneration over time

**Etiology theories:**
- **Autoimmune:** Antibodies to inner ear antigens
- **Genetic:** Familial cases reported
- **Viral:** HSV reactivation possible
- **Anatomic:** Small endolymphatic sac
- **Developmental:** Congenital aqueduct abnormalities

### Vestibular Neuritis Pathophysiology

**Viral etiology evidence:**
- Association with antecedent viral URI
- HSV-1 DNA found in vestibular ganglia at autopsy
- Similar to Bell palsy pathophysiology
- Selective vestibular nerve involvement

**Histopathology:**
- Edema and inflammation of vestibular nerve
- Hemorrhage in severe cases
- Patchy axonal degeneration
- Spontaneous regeneration possible

**Differential from labyrinthitis:**
- Neuritis: Vestibular nerve only, hearing preserved
- Labyrinthitis: Labyrinth inflammation, hearing affected

## Diagnostic Evaluation

### Dix-Hallpike Test

**Procedure:**
1. Patient seated on exam table
2. Turn head 45 degrees to tested side
3. Rapidly lay back supine with neck extended 20 degrees
4. Observe for nystagmus for 30 seconds
5. Return to seated position
6. Repeat to other side

**Positive test (posterior canal BPPV):**
- Latency: 1-5 seconds before nystagmus begins
- Nystagmus characteristics:
  - Upbeating torsional nystagmus
  - Torsional component toward downmost ear
  - Duration < 60 seconds
  - Fatigable with repeated testing
- Vertigo corresponds to nystagmus

**Horizontal canal BPPV:**
- Supine roll test (Pagnini test)
- Left/right head turns while supine
- Horizontal direction-changing nystagmus
- Geotropic (beats toward down ear) or apogeotropic

### HINTS Examination

**Distinguishing peripheral from central vertigo:**

| Test | Peripheral finding | Central finding |
|------|-------------------|-----------------|
| **H**ead Impulse | Abnormal (catch-up saccades) | Normal |
| **I**ntNystagmus | Unidirectional | Direction-changing |
| **N**ystagmus | Suppressible with fixation | Not suppressible |
| **T**est of Skew | Absent | Present (vertical misalignment) |

**Head impulse test:**
- Rapid head thrust while patient fixes on target
- Normal: Eyes stay on target
- Abnormal: Catch-up saccades back to target

**Interpretation:**
- Any central finding = Stroke until proven otherwise
- All peripheral = Low probability of central cause
- Sensitivity > 90% for posterior circulation stroke

### Vestibular Testing

**Bedside testing:**
- **Head shake nystagmus:** Horizontal head shaking, observe for nystagmus
- **Head thrust test:** Assess VOR gain
- **Dynamic visual acuity:** Visual acuity with head movement
- **Fukuda stepping test:** Marching in place with eyes closed
- **Romberg and sharpened Romberg:** Proprioception and vestibular function

**Laboratory vestibular testing:**
- **Videonystagmography (VNG):** Records eye movements during various stimuli
- **Caloric testing:** Irrigates ears with warm/cold water
- **Rotary chair testing:** Rotates patient in darkness
- **VEMP:** Tests otolith function
- **Subjective visual vertical/horizontal:** Tests otolith perception

### Imaging

**MRI indications:**
- Red flags for central vertigo
- Progressive symptoms
- Associated neurologic symptoms
- Suspected tumor (acoustic neuroma)
- Atypical presentation

**CT indications:**
- Acute trauma
- Intracranial hemorrhage suspected
- Cannot obtain MRI

## Treatment Strategies

### BPPV Treatment

**Canalith repositioning procedures:**

**Epley maneuver (posterior canal BPPV):**
1. Patient seated, head turned 45 degrees to affected side
2. Rapidly lay back with head extended 20 degrees
3. Rotate head 90 degrees to opposite side
4. Roll body onto side while head turned
5. Sit up
6. Each position held 30-60 seconds

**Semont maneuver (posterior canal):**
- Rapid movement from sitting to lying on affected side
- Then rapidly to opposite side
- Uses gravity and inertia
- Can be more effective than Epley in some cases

**Home exercises:**
- **Brandt-Daroff:** Daily exercises to promote compensation
- Used after canalith repositioning
- May help prevent recurrence

**Post-procedure care:**
- Remain upright for 24 hours
- Sleep with head elevated (45 degrees)
- Avoid looking up or down for 48 hours
- Follow-up in 1 week

### Vestibular Rehabilitation

**Adaptation exercises:**
- Repeated head movements while focusing on target
- Promotes VOR adaptation
- Improves gaze stability

**Habituation exercises:**
- Repeated exposure to provoking movements
- Reduces symptoms over time
- Used for motion sensitivity

**Balance training:**
- Static and dynamic balance exercises
- Surface and visual challenges
- Tai chi, yoga beneficial

**Evidence:**
- Reduces symptoms and fall risk
- Improves balance and gait
- Essential for vestibular neuritis recovery
- Beneficial in chronic vestibular disorders

### Meniere Disease Treatment

**Medical management:**
- **Low-sodium diet** (< 2,000 mg/day)
- **Diuretics:** HCTZ-triamterene or acetazolamide
- **Stress reduction:** Triggers attacks
- **Caffeine avoidance:** May exacerbate symptoms

**Acute attack management:**
- Vestibular suppressants (meclizine, diazepam)
- Antiemetics (ondansetron, promethazine)
- Rest in quiet environment

**Intratympanic injections:**
- **Steroids (dexamethasone):** Preserve hearing, reduce vertigo
- **Gentamicin:** Chemical labyrinthectomy, destroys vestibular function
- 80-90% effective for vertigo control

**Surgical options:**
- **Endolymphatic sac decompression:** Moderate success
- **Vestibular nerve section:** High success, preserves hearing
- **Labyrinthectomy:** Complete ablation, no residual hearing
- Indicated only for severe, refractory cases

### Vestibular Neuritis Treatment

**Acute phase (first 3 days):**
- Vestibular suppressants for severe symptoms
- Antiemetics as needed
- Maintain hydration and nutrition

**Steroids:**
- Prednisone 60 mg daily taper over 2-3 weeks
- Evidence: Faster recovery, better outcomes
- Consider in all patients without contraindications

**Antivirals:**
- Acyclovir or valacyclovir
- Evidence limited
- May be considered in severe cases

**Vestibular rehabilitation:**
- Start immediately after acute phase
- Essential for central compensation
- Improves balance and reduces symptoms
- Most recover over weeks to months

## Prognosis

**BPPV:**
- Excellent with appropriate treatment
- Recurrence common (15-30% per year)
- Can be retreated successfully

**Meniere disease:**
- Variable course
- Episodes may remit for years
- Hearing tends to progressively worsen
- Vertigo often burns out over years

**Vestibular neuritis:**
- Most recover completely
- Some have persistent symptoms
- Vestibular rehabilitation improves outcomes
- Recurrence rare (< 5%)

**Central vertigo:**
- Prognosis depends on underlying cause
- Stroke recovery variable
- Vestibular migraine often manageable`,
      keyTerms: [
        { term: 'VOR', definition: 'Vestibulo-ocular reflex; maintains gaze stability during head movements' },
        { term: 'canalithiasis', definition: 'Free-floating otoconia in semicircular canal causing BPPV' },
        { term: 'cupulolithiasis', definition: 'Otoconia adherent to cupula causing BPPV' },
        { term: 'HINTS exam', definition: 'Head Impulse, Nystagmus, Test of Skew; bedside test to distinguish peripheral from central vertigo' },
        { term: 'caloric testing', definition: 'Irrigation of ears with warm/cold water to stimulate vestibular system; VNG component' },
        { term: 'endolymphatic hydrops', definition: 'Pathologic distension of endolymphatic spaces; hallmark of Meniere disease' },
      ],
      clinicalNotes: 'BPPV is most common vertigo cause. Diagnose with Dix-Hallpike (latency, torsional upbeating nystagmus < 60 sec). Treat with Epley maneuver. HINTS exam distinguishes peripheral vs central: Head impulse abnormal = peripheral; Direction-changing nystagmus or skew = central (stroke until proven otherwise). Meniere: triad of vertigo, hearing loss, tinnitus. Vestibular neuritis: acute vertigo days, normal hearing, treat with steroids and vestibular rehab. Avoid prolonged vestibular suppressants (delay compensation).',
    },
    4: {
      level: 4,
      summary: 'Vertigo management requires precise localization using focused examination maneuvers to distinguish peripheral from central etiologies, with targeted interventions including canalith repositioning, vestibular rehabilitation, and appropriate specialist referral for refractory or central causes.',
      explanation: `## Evidence-Based Diagnostic Approach

### HINTS Examination: Critical Update

**Sensitivity for posterior circulation stroke:**
- HINTS: > 90% sensitivity
- More sensitive than early MRI (first 24-48 hours)
- Must be performed correctly
- Abnormal head impulse = peripheral (usually)
- Direction-changing nystagmus = central
- Skew deviation = central

**Clinical application:**
- Perform in all acute vertigo with continuous symptoms
- Avoid in position-triggered vertigo (likely BPPV)
- Head impulse interpretation:
  - Catch-up saccades = peripheral vestibular hypofunction
  - Normal VOR = central OR bilateral peripheral disease

**Limitations:**
- Requires expertise to perform correctly
- False positives possible with examiner error
- Not useful for position-triggered symptoms
- Must correlate with overall clinical picture

### Dix-Hallpike Evidence

**Diagnostic accuracy:**
- Sensitivity: 50-88% (operator dependent)
- Specificity: 70-100%
- Positive likelihood ratio: 5.9
- Negative likelihood ratio: 0.4

**Best practices:**
- Proper positioning critical
- Neck extension 20 degrees (bring posterior canal vertical)
- Rapid movement (brisk but not painful)
- Observe for latency, duration, fatigue
- Video Frenzel goggles improve sensitivity

**Common errors:**
- Insufficient neck extension
- Slow movement (fails to move canaliths)
- Not holding positions long enough
- Missing horizontal canal BPPV
- Atypical nystagmus patterns

### Imaging Strategies

**When to image:**
- Red flags present
- HINTS suggests central
- Progressive symptoms
- Auditory symptoms suggesting schwannoma
- Age > 50 with new vertigo

**MRI protocols:**
- Diffusion-weighted imaging (acute stroke)
- Thin slice internal auditory canal (acoustic neuroma)
- Gadolinium for tumor detection
- Consider MRA for vascular assessment

**CT vs MRI:**
- CT: Acute hemorrhage, trauma, bony abnormalities
- MRI: Stroke, tumor, demyelination
- MRI superior for most central vertigo causes

## Treatment Evidence

### BPPV Treatment Evidence

**Epley vs Semont:**
- Meta-analysis: Similar efficacy
- Epley more commonly taught
- Semont more effective in some studies
- Choice based on patient factors and clinician expertise

**Canalith repositioning success rates:**
- Immediate: 70-80%
- At 1 week: 80-90%
- At 1 month: > 90%
- Recurrence at 1 year: 15-30%

**Post-maneuver restrictions:**
- Evidence does NOT support benefit
- Traditional restrictions (upright 24h) not evidence-based
- Patient preference should guide

**Horizontal canal BPPV:**
- **Geotropic (canalithiasis):** BBQ (Lempert) maneuver
- **Apogeotropic (cupulithiasis):** Forced position prolonged
- More difficult to treat than posterior canal
- Higher recurrence rate

### Vestibular Rehabilitation Evidence

**Efficacy data:**
- Reduces dizziness symptoms: 70-80%
- Improves balance: 60-70%
- Reduces fall risk: 50-60%
- Essential for vestibular neuritis recovery
- Benefits seen in 4-12 weeks

**Program components:**
1. **Gaze stability exercises:** VOR adaptation
2. **Habituation exercises:** For motion sensitivity
3. **Balance training:** Static and dynamic
4. **Gait training:** With head turns, varied surfaces

**Supervised vs home:**
- Supervised initially better outcomes
- Home exercises effective after initial training
- Telehealth options emerging

### Meniere Disease Treatment Evidence

**Intratympanic steroids:**
- Dexamethasone: Significant vertigo control in 70-80%
- Preserves hearing in most patients
- Repeat injections may be needed
- Low complication rate

**Intratympanic gentamicin:**
- 80-90% vertigo control
- Hearing loss risk: 10-30%
- Titration protocols reduce hearing risk
- Used when vertigo disabling despite other treatments

**Low-sodium diet:**
- Limited evidence but recommended
- Patient reported benefit
- May reduce attack frequency

**Diuretics:**
- Limited RCT evidence
- Commonly used based on clinical experience
- Benefit reported in 60-70% of patients

## Special Populations

### Pediatric Vertigo

**Common causes:**
- BPPV (less common than adults)
- Vestibular migraine (most common)
- Trauma
- Otomastoiditis

**Evaluation:**
- History often challenging
- Physical examination adapted
- Imaging threshold lower
- Hearing assessment critical

**Treatment:**
- Vestibular rehabilitation effective
- Migraine prophylaxis when indicated
- Canalith repositioning for BPPV

### Elderly Vertigo

**Unique considerations:**
- Multifactorial etiology common
- Higher fall risk
- Multiple medications (polypharmacy)
- Comorbidities (vascular, arthritis, vision)

**Evaluation:**
- Comprehensive medication review
- Fall risk assessment
- Cardiovascular causes assessment
- Vision examination
- Psychological evaluation (anxiety, depression)

**Management:**
- Multidisciplinary approach
- Vestibular rehabilitation essential
- Fall prevention strategies
- Medication adjustment

### Pregnancy

**Common causes:**
- BPPV (position-related)
- Vestibular migraine (hormonal)
- Orthostatic hypotension

**Treatment considerations:**
- Meclizine category B
- Diazepam category D
- Epley maneuver safe and effective
- Vestibular rehabilitation safe

## Chronic Vertigo

**PPPD (Persistent Postural-Perceptual Dizziness):**
- Previously called phobic postural vertigo
- Symptoms last months to years
- Often triggered by initial vestibular event
- Exacerbated by visual stimuli and motion
- Anxiety and avoidance common

**Treatment:**
- **SSRIs/SNRIs:** First-line pharmacologic
- **Vestibular rehabilitation:** With exposure elements
- **CBT:** For anxiety and avoidance
- **Patient education:** Essential for prognosis

**Vestibular migraine:**
- Most common cause of spontaneous episodic vertigo
- Diagnostic criteria: Vestibular symptoms + migraine features
- Treatment: Migraine prophylaxis effective
- Tricyclics, topiramate, verapamil, candesartan

## Complications

**Falls:**
- Leading risk in elderly
- Hip fracture, intracranial hemorrhage
- Prevention: Vestibular rehab, home safety

**Psychological:**
- Anxiety disorders: 30-50%
- Depression: 20-30%
- Avoidance behaviors
- Agoraphobia
- Quality of life significantly impacted

**Economic:**
- Healthcare utilization
- Lost productivity
- Disability costs

## Quality Improvement

**Appropriate testing:**
- Avoid imaging for uncomplicated BPPV
- Use HINTS before MRI for acute vertigo
- Targeted audiometry rather than screening

**Appropriate treatment:**
- Canalith repositioning first-line for BPPV
- Avoid prolonged vestibular suppressants
- Vestibular rehabilitation underutilized
- Specialist referral for refractory cases

**Patient education:**
- Diagnosis explanation
- Home exercise instruction
- Expected recovery timeline
- Red flag symptoms`,
      keyTerms: [
        { term: 'HINTS exam', definition: 'Head Impulse, Nystagmus, Test of Skew; > 90% sensitive for posterior circulation stroke' },
        { term: 'PPPD', definition: 'Persistent Postural-Perceptual Dizziness; chronic functional vestibular disorder' },
        { term: 'vestibular migraine', definition: 'Vestibular symptoms meeting migraine diagnostic criteria; most common cause of spontaneous episodic vertigo' },
        { term: 'VOR', definition: 'Vestibulo-ocular reflex; maintains gaze stability during head movements' },
        { term: 'Frenzel goggles', definition: 'Video goggles that prevent visual fixation; enhances nystagmus detection' },
      ],
      clinicalNotes: 'HINTS exam > 90% sensitive for posterior circulation stroke (more sensitive than early MRI). Any central finding = stroke until proven otherwise. BPPV: treat with canalith repositioning (Epley), 80-90% success. Post-maneuver restrictions not evidence-based. Vestibular neuritis: steroids improve recovery, vestibular rehab essential. Meniere: intratympanic steroids effective for vertigo control. Avoid prolonged vestibular suppressants (delay compensation). PPPD: SSRIs + vestibular rehab + CBT.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vertigo management integrates precise bedside examination (HINTS, Dix-Hallpike) with advanced diagnostic techniques, evidence-based treatments including canalith repositioning and vestibular rehabilitation, and individualized approaches for central and peripheral etiologies.',
      explanation: `## Advanced Diagnostic Strategies

### HINTS Examination: Mastering Interpretation

**Head impulse test nuances:**
- Abnormal = catch-up saccades (peripheral hypofunction)
- Normal = central OR bilateral peripheral disease
- Paretic pattern confirms unilateral peripheral
- Corrective saccades may be overt or covert
- Video VOG (video-oculography) improves detection

**Direction-changing nystagmus:**
- **Gaze-evoked:** Beats toward direction of gaze = central (usually)
- **Head-shaking nystagmus:** Central if direction-changing
- **Positional:** Central if direction-changing immediately

**Skew deviation:**
- Vertical ocular misalignment
- Hypertropia of one eye
- Cover-uncover test reveals
- Localizes to brainstem/cerebellum

**Combined interpretation:**
- ALL peripheral = Low probability of central cause
- ANY central = Stroke until proven otherwise
- HINTS+ (adding hearing loss) improves specificity

### Advanced BPPV Concepts

**Multicanal BPPV:**
- Involvement of > 1 semicircular canal
- 5-20% of cases
- More challenging diagnosis
- Treatment: Address each canal separately

**Bilateral BPPV:**
- 2-15% of BPPV patients
- Risk factors: Head trauma, older age
- Dix-Hallpike may be positive bilaterally
- Treat more symptomatic side first

**Post-traumatic BPPV:**
- Higher bilateral involvement
- May have horizontal canal involvement
- Often requires multiple treatment sessions
- May be associated with labyrinthine concussion

**Treatment-resistant BPPV:**
- Consider alternative diagnoses:
  - Vestibular migraine
  - Central positional vertigo
  - Meniere disease (early)
  - Atypical BPPV variants

**Mastoid oscillation:**
- Device-assisted canalith repositioning
- Evidence mixed
- Not widely available

### Meniere Disease: Advanced Management

**Biomarker research:**
- Endolymphatic hydrops imaging with MRI
- Intratympanic gadolinium
- May distinguish Meniere from mimics
- Not yet clinically available

**Endolymphatic sac surgery:**
- Decompression vs shunting
- Evidence: Moderate vertigo control
- Hearing preservation variable
- Less invasive than ablative procedures

**Vestibular nerve section:**
- Middle cranial fossa approach
- Retrosigmoid approach
- > 90% vertigo control
- Hearing preservation 50-70%
- Risk to facial nerve

**Labyrinthectomy:**
- Complete ablation of inner ear
- Indicated only with no serviceable hearing
- > 95% vertigo control
- Significant balance recovery needed

**Saccus decompression:**
- Endoscopic approach
- Emerging technique
- Limited long-term data

### Vestibular Neuritis: Updates

**Steroid protocols:**
- Prednisone 60 mg x 5 days, then taper over 2-3 weeks
- Methylprednisolone IV drip may be superior
- Evidence: Faster recovery, better long-term outcomes
- Best if started within 72 hours

**Antiviral controversy:**
- Valacyclovir + steroids vs steroids alone
- Recent studies: No additional benefit
- May be considered in severe cases
- VZV vestibular neuritis: Acyclovir indicated

**Acute vestibular syndrome:**
- Continuous vertigo lasting days
- HINTS critical to rule out stroke
- MRI may be false negative early
- Hospital admission for monitoring

### Central Vertigo: Emerging Concepts

**Vestibular stroke syndromes:**
- **AICA stroke:** Lateral pontomedullary syndrome
- **PICA stroke:** Lateral medullary syndrome (Wallenberg)
- **SCA stroke:** Superior cerebellar artery infarction
- Each has characteristic signs

**Vestibular migraine updates:**
- Most common cause of recurrent spontaneous vertigo
- Diagnostic criteria continue to evolve
- **Probable vestibular migraine:** Recurrent episodes, migrainous features
- **Definite vestibular migraine:** Meets all ICHD-3 criteria
- Treatment overlap with migraine prophylaxis

**Cerebellar disorders:**
- Spinocerebellar ataxias
- MSA-C (multiple system atrophy, cerebellar type)
- Progressive ataxia syndromes
- Vestibular testing patterns helpful

## Controversies and Evolving Practice

### Vestibular Suppressants: Duration of Use

**Evidence against prolonged use:**
- Delays central compensation
- Slows recovery from vestibular neuritis
- Increases fall risk in elderly
- No benefit after acute phase

**Appropriate use:**
- First 24-72 hours of severe symptoms
- During diagnostic testing
- For specific procedures (BPPV treatment)
- Not for chronic vertigo

### Imaging: MRI Timing

**Early MRI limitations:**
- DWI may be negative initially
- PICA territory strokes missed in first 48 hours
- Follow-up imaging if high clinical suspicion
- MRA may miss small vessel disease

**When MRI is normal:**
- If HINTS suggests peripheral: Observe
- If HINTS suggests central: Repeat MRI in 48-72 hours
- Consider vascular imaging (CTA, MRA)
- When in doubt, admit for observation

### PPPD: Emerging Understanding

**Pathophysiology:**
- Functional vestibular disorder
- Maladaptive neuroplasticity
- Visual-vestibular mismatch
- Anxiety cycle perpetuates symptoms

**Diagnostic criteria (ICD-11):**
- Persistent dizziness/unsteadiness > 3 months
- Most days, fluctuating severity
- Exacerbated by upright posture, motion, visual stimuli
- Often triggered by vestibular event
- May have anxiety, but not primary cause

**Treatment hierarchy:**
1. **Patient education:** Explanation and reassurance
2. **SSRI/SNRI:** First-line pharmacologic
3. **Vestibular rehabilitation:** With exposure elements
4. **CBT:** For maladaptive thoughts and behaviors
5. **Combined approach:** Most effective

## Quality Improvement Initiatives

**Appropriate testing metrics:**
- HINTS documentation before imaging
- Dix-Hallpike performed before imaging for position-triggered vertigo
- CT head utilization rate (should be low for uncomplicated vertigo)
- MRI appropriateness

**Treatment metrics:**
- Canalith repositioning success rate
- Vestibular rehabilitation utilization
- Follow-up completion rate
- Patient-reported outcome measures
- Dizziness Handicap Inventory (DHI) scores

**Referral patterns:**
- Emergency to ENT/Neurology
- Primary care to vestibular therapy
- Multidisciplinary clinic models
- Telehealth vestibular therapy

## Future Directions

**Biomarker development:**
- Meniere disease: Genetic markers
- Autoimmune inner ear disease: Antibodies
- Vestibular migraine: Calcitonin gene-related peptide

**Novel treatments:**
- Memantine for PPCD (investigational)
- Vestibular prosthesis (research)
- Gene therapy for hereditary disorders (future)

**Digital health:**
- Home VOG applications
- Tele-rehabilitation platforms
- Symptom tracking apps
- VR-based vestibular rehabilitation

**Precision medicine:**
- Genetic profiling for Meniere
- Pharmacogenomics for migraine treatment
- Personalized vestibular rehabilitation programs`,
      keyTerms: [
        { term: 'HINTS exam', definition: 'Head Impulse, Nystagmus, Test of Skew; bedside examination with > 90% sensitivity for posterior circulation stroke' },
        { term: 'VOG', definition: 'Video-oculography; records eye movements with infrared camera during vestibular testing' },
        { term: 'PPPD', definition: 'Persistent Postural-Perceptual Dizziness; chronic functional vestibular disorder lasting > 3 months' },
        { term: 'DHI', definition: 'Dizziness Handicap Inventory; validated 25-item questionnaire measuring vertigo impact' },
        { term: 'ICHD-3', definition: 'International Classification of Headache Disorders, 3rd edition; contains diagnostic criteria for vestibular migraine' },
        { term: 'AICA/PICA/SCA', definition: 'Anterior Inferior Cerebellar Artery, Posterior Inferior Cerebellar Artery, Superior Cerebellar Artery; stroke syndromes' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **HINTS examination critical:** > 90% sensitive for posterior circulation stroke, better than early MRI. Perform in acute continuous vertigo. Any central finding (normal head impulse, direction-changing nystagmus, skew) = stroke until proven otherwise.

2. **BPPV diagnosis and treatment:** Dix-Hallpike for posterior canal (latency, torsional upbeating nystagmus < 60 sec). Treat with Epley maneuver. 80-90% success rate. Post-maneuver restrictions not evidence-based.

3. **Vestibular neuritis:** Acute vertigo days, normal hearing. Treat with steroids (60 mg prednisone x 5 days then taper) AND vestibular rehab. Avoid vestibular suppressants beyond acute phase (delays compensation).

4. **Meniere disease:** Triad of vertigo, hearing loss, tinnitus. Low sodium diet, diuretics first-line. Intratympanic steroids for refractory (70-80% vertigo control). Gentamicin for severe cases (hearing loss risk). Surgery only for refractory.

5. **Vestibular rehabilitation:** Essential for vestibular neuritis, chronic vertigo, PPCD. Evidence: reduces symptoms 70-80%, reduces falls 50-60%. Adaptation, habituation, balance exercises.

6. **PPPD (Persistent Postural-Perceptual Dizziness):** Chronic (> 3 months), worsens with upright/motion/visual stimuli. Treat with SSRIs + vestibular rehab (with exposure) + CBT. Education and reassurance essential.

7. **Imaging guidelines:** CT for trauma/hemorrhage. MRI for red flags, central signs, progressive symptoms, auditory symptoms. Don't image uncomplicated BPPV.

8. **Vestibular migraine:** Most common cause of episodic vertigo. Diagnosis: vestibular symptoms + migraine features. Treatment: migraine prophylaxis (tricyclics, topiramate, verapamil, candesartan).

9. **Avoid prolonged vestibular suppressants:** Delays compensation, increases fall risk. Use only in acute phase (first 1-3 days).

10. **Special populations:** Elderly: multifactorial, high fall risk, comprehensive evaluation. Pediatric: vestibular migraine most common. Pregnancy: meclizine safe, Epley safe, vestibular rehab safe.`,
    },
  },

  media: [
    {
      id: 'inner-ear-anatomy',
      type: 'diagram',
      filename: 'inner-ear-anatomy.svg',
      title: 'Inner Ear and Vestibular System',
      description: 'Anatomy of semicircular canals, vestibule, and cochlea',
    },
    {
      id: 'epley-maneuver',
      type: 'diagram',
      filename: 'epley-maneuver.svg',
      title: 'Epley Maneuver',
      description: 'Step-by-step canalith repositioning procedure for posterior canal BPPV',
    },
    {
      id: 'hints-examination',
      type: 'diagram',
      filename: 'hints-examination.svg',
      title: 'HINTS Examination',
      description: 'Head Impulse, Nystagmus, and Test of Skew for distinguishing peripheral vs central vertigo',
    },
    {
      id: 'dix-hallpike-test',
      type: 'diagram',
      filename: 'dix-hallpike-test.svg',
      title: 'Dix-Hallpike Test',
      description: 'Procedure for diagnosing posterior canal BPPV',
    },
  ],

  citations: [
    {
      id: 'aao-hns-vertigo-2017',
      type: 'article',
      title: 'Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update)',
      authors: ['Bhattacharyya N', 'Gubbels SP', 'Schwartz SR', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599817716305',
    },
    {
      id: 'barany-society',
      type: 'article',
      title: 'Diagnostic Criteria for Vestibular Migraine and PPPD',
      authors: ['Lempert T', 'Olesen J', 'Furman J', 'et al.'],
      source: 'Journal of Vestibular Research',
    },
    {
      id: 'uptodate-vertigo',
      type: 'article',
      title: 'Evaluation of Vertigo in Adults',
      authors: ['Post RE', 'Dickerson LM'],
      source: 'UpToDate',
      accessedDate: '2025-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'structure-inner-ear', targetType: 'structure', relationship: 'related', label: 'Inner Ear' },
    { targetId: 'structure-vestibular-nerve', targetType: 'structure', relationship: 'related', label: 'Vestibular Nerve' },
    { targetId: 'condition-migraine', targetType: 'condition', relationship: 'related', label: 'Vestibular Migraine' },
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'related', label: 'Posterior Circulation Stroke' },
  ],

  tags: {
    systems: ['ent', 'nervous'],
    topics: ['otolaryngology', 'neurology', 'vestibular medicine'],
    keywords: ['vertigo', 'BPPV', 'Meniere disease', 'vestibular neuritis', 'labyrinthitis', 'dizziness', 'nystagmus', 'Epley maneuver'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'otolaryngology', 'emergency medicine'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vertigo;
