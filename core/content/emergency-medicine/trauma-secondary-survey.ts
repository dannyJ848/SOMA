/**
 * Secondary Trauma Survey - Comprehensive Head-to-Toe Assessment
 *
 * Comprehensive content on the secondary trauma survey including detailed
 * physical examination, injury identification, and documentation.
 */

import { EducationalContent } from '../types';

export const traumaSecondarySurvey: EducationalContent = {
  id: 'emergency-trauma-secondary-survey',
  type: 'topic',
  name: 'Secondary Trauma Survey',
  alternateNames: ['Secondary Survey', 'Head-to-Toe Assessment', 'Detailed Trauma Exam', 'ATLS Secondary Survey'],

  levels: {
    1: {
      level: 1,
      summary: 'The secondary survey is a detailed check of the entire body for injuries. It happens after life-threatening problems are fixed in the primary survey.',
      explanation: `## What Is the Secondary Survey?

After doctors fix any life-threatening problems in the primary survey, they do a **secondary survey**. This is a thorough check of the entire body from head to toe to find every injury.

**The secondary survey starts ONLY when:**
- The ABCDE (primary survey) is complete
- Breathing and blood pressure are stable
- Life-threatening problems are under control

## Order of the Secondary Survey

The secondary goes from head to toe in a specific order:

### 1. Head
- Look for cuts, bruises, or bumps
- Check the eyes (pupils should be the same size)
- Look inside the ears and nose
- Check for fluid leaking from ears or nose

### 2. Face
- Look for broken bones in the face
- Check teeth (are any missing or broken?)
- Look for unequal eye openings

### 3. Neck
- Feel for any pain or tenderness
- Check if the neck can move normally (after spine cleared)
- Listen to the carotid arteries (blood vessels in neck)

### 4. Chest
- Look for bruises, cuts, or unusual shape
- Listen to breathing sounds
- Feel for broken ribs
- Check breastbone (sternum)

### 5. Abdomen (Belly)
- Look for bruises, especially seatbelt marks
- Listen for bowel sounds
- Feel gently for pain or hard spots

### 6. Pelvis and Hips
- Gently press on the pelvis to check for breaks
- Check for bleeding from the urinary tube

### 7. Arms and Legs
- Look for swelling or unusual shapes (broken bones?)
- Check pulses (blood flow) in each limb
- Test movement and feeling in arms and legs
- Look for cuts and bruises

### 8. Back and Bottom
- Log roll the patient to check the back
- Look for bruises or cuts on the spine
- Check the bottom area for injuries

## Special Tests During Secondary Survey

**Rectal exam:**
- Checks for prostate position in men
- Checks for blood in the rectum
- Tests if the person can control their muscles

**Vaginal exam (for women):**
- Checks for injuries in the vagina
- Looks for bleeding

**Tube and catheter checks:**
- A tube goes down the throat to the stomach
- A tube goes into the bladder to drain urine
- These help check for internal bleeding

## Imaging Tests

After the physical exam, doctors may order:

**X-rays:**
- To find broken bones
- To check the spine
- To look at the chest

**CT scans:**
- Detailed pictures of the head
- Detailed pictures of the chest and belly
- Finds internal injuries

**Ultrasound (FAST exam):**
- Checks for blood in the belly
- Checks for blood around the heart
- Done during primary survey but also used later

## Remember

The secondary survey is careful and thorough because:
- Some injuries are hidden and hard to find
- Small injuries can become big problems if missed
- Complete documentation helps with treatment
- It provides a baseline for recovery

**Every part of the body is examined systematically!**`,
      keyTerms: [
        { term: 'secondary survey', definition: 'A thorough head-to-toe examination to find all injuries after life threats are controlled' },
        { term: 'log roll', definition: 'A way to turn a patient onto their side while keeping the spine straight and protected' },
        { term: 'CT scan', definition: 'A special X-ray machine that takes detailed pictures of the inside of the body' },
        { term: 'FAST exam', definition: 'Fast ultrasound test to look for bleeding inside the belly or around the heart' },
        { term: 'pelvic binder', definition: 'A device that wraps around the pelvis to stabilize broken pelvic bones' },
      ],
      analogies: [
        'The secondary survey is like a detective searching a crime scene - you check every inch systematically so you don\'t miss any clues.',
        'A CT scan is like looking at slices of bread - you see thin slices of the body layer by layer.',
      ],
      examples: [
        'A car accident patient has a cut on their head that was treated. During the secondary survey, the doctor finds a broken wrist that was missed at first. It gets cast to heal properly.',
        'After a fall, the primary survey checks ABCDE and finds no life threats. The secondary survey finds tenderness over the ribs. An X-ray shows three broken ribs that need monitoring.',
        'A patient was kicked in the stomach. The secondary survey finds a large bruise on the belly. A CT scan reveals a small spleen injury that needs observation in the hospital.',
      ],
      patientCounselingPoints: [
        'The secondary survey may take a while - be patient, as the medical team is being thorough',
        'You may need imaging tests like X-rays or CT scans to find hidden injuries',
        'Tell the doctors about any pain or discomfort you feel anywhere in your body',
        'Some injuries may not show up right away - tell your doctor if new pain develops later',
      ],
    },

    2: {
      level: 2,
      summary: 'The secondary survey is a comprehensive head-to-toe assessment performed after stabilizing life threats. It identifies all injuries through systematic examination, imaging studies, and specialized tests.',
      explanation: `## Secondary Survey Overview

The secondary survey is a complete head-to-toe physical examination performed only after:
- **Primary survey (ABCDE) is complete**
- **Patient is hemodynamically stable**
- **Life-threatening conditions are being addressed**

The goal is to identify and document ALL injuries before they are missed.

## Timing of Secondary Survey

| Scenario | Approach |
|----------|----------|
| Stable patient | Complete secondary survey in ED |
| Unstable patient | Deferred until OR or ICU |
| Rapidly deteriorating | Abort secondary survey, reassess ABCDE |

## Systematic Head-to-Toe Examination

### Head and Scalp
**Inspect:**
- Scalp lacerations (hidden by hair)
- Contusions, hematomas
- Battle sign (bruising behind ear) → basilar skull fracture
- Raccoon eyes (bruising around eyes) → basilar skull fracture
- CSF leak from ears/nose (clear fluid)

**Palpate:**
- Step-offs or depressions (skull fracture)
- Tenderness

**Assess:**
- GCS (Glasgow Coma Scale) if not done
- Pupils: Size, equality, reactivity

### Face
**Inspect:**
- Symmetry
- Lacerations, contusions
- Eye movements (cranial nerves)
- Vision changes
- Dental injuries (missing teeth may be in airway/lungs!)
- Maxillofacial fractures

**Palpate:**
- Bony tenderness
- Crepitus (grating sensation of broken bones)
- Zygomatic arches
- Orbital rims

### Neck
**Inspect:**
- Tracheal deviation (toward tension pneumo, away from simple pneumo)
- Jugular venous distention (JVD)
- Hematomas (expanding = vascular injury)
- Subcutaneous emphysema (air in tissues)
- Penetrating wounds
- Laryngeal fractures

**Palpate:**
- Carotid pulses (check for bruit)
- Cervical spine tenderness
- Cricoid cartilage stability
- Laryngeal crepitus

### Chest
**Inspect:**
- Contusions, seatbelt sign
- Flail segment (paradoxical movement)
- Open wounds/sucking chest wounds
- Chest wall asymmetry
- Subcutaneous emphysema
- JVD

**Auscultate:**
- Breath sounds (decreased or absent = pneumo/hemothorax)
- Heart sounds (muffled = tamponade, pneumothorax)

**Palpate:**
- Chest wall stability
- Rib fractures
- Sternum fracture (seatbelt injury)
- Subcutaneous emphysema
- Crepitus

### Abdomen
**Inspect:**
- Distension
- Contusions (seatbelt sign)
- Open wounds
- Evisceration (organs coming out)
- Peristalsis

**Auscultate:**
- Bowel sounds (absent in shock, peritonitis)
- Bruits (vascular injury)

**Percuss:**
- Dullness (blood, fluid)
- Tympany (gas, air)
- Palpation: Tenderness, guarding, rigidity, rebound

**Palpate:**
- General vs localized tenderness
- Guarding (voluntary vs rigid)
- Rebound tenderness (peritonitis)
- Masses
- Pelvic stability

### Perineum, Rectum, and Vagina
**Inspect:**
- Blood at urethral meatus (pelvic fracture → urethral injury)
- Perineal lacerations
- Scrotal hematoma (pelvic fracture)
- Vaginal bleeding

**Rectal exam:**
- Sphincter tone (spinal cord injury)
- Prostate position (high-riding prostate → urethral injury)
- Blood (GI injury, pelvic fracture)
- Rectal vault sensation

**Vaginal exam (if indicated):**
- Bleeding
- Lacerations
- Foreign bodies
- Fetal monitoring if pregnant

### Extremities
**Inspect:**
- Deformities, swelling
- Contusions, lacerations
- Open fractures (bone visible)
- Color (pallor, cyanosis)

**Palpate:**
- Bony tenderness
- Crepitus
- Pulses (radial, femoral, dorsalis pedis, posterior tibial)
- Capillary refill (<2 seconds)
- Motor function
- Sensation

### Back and Spine
**Log roll with spine precautions:**
- Inspect entire spine
- Palpate spinous processes
- Check for step-offs or gaps
- Paraspinal tenderness
- Sacral bruising
- Rectal tone recheck

## Adjuncts to Secondary Survey

**Imaging studies:**

| Study | Indications | What It Shows |
|-------|-------------|---------------|
| Chest X-ray | All significant trauma | Pneumothorax, hemothorax, widened mediastinum |
| Pelvis X-ray | Pelvic tenderness, unstable | Pelvic fractures |
| C-spine X-ray/CT | Neck pain, altered mental status | Cervical spine fractures |
| CT Head | Head injury, altered mental status | Intracranial bleeding |
| CT Chest/Abd/Pelvis | Significant trauma | Internal injuries |
| Extremity X-rays | Pain, deformity | Fractures |

**Laboratory studies:**
- CBC (blood count for bleeding)
- BMP (electrolytes, kidney function)
- Coagulation studies (bleeding risk)
- Type and cross (blood preparation)
- Serum pregnancy test (all females of childbearing age)
- Lactate (tissue perfusion)
- Blood gas (acid-base status)

**Monitoring:**
- Cardiac monitor (arrhythmias)
- Pulse oximetry (oxygenation)
- Urinary output (kidney function, shock)
- Repeat vital signs

## Documentation

**Accurate documentation is critical:**

- Draw pictures of injuries on body diagram
- Note all findings, even minor ones
- Document times of assessments
- Record all interventions
- Note any changes over time

**Why thorough documentation matters:**
- Legal protection
- Communication with consulting services
- Baseline for monitoring progress
- Billing justification`,
      keyTerms: [
        { term: 'Battle sign', definition: 'Bruising behind the ear that suggests a basilar skull fracture' },
        { term: 'raccoon eyes', definition: 'Bruising around the eyes that suggests a basilar skull fracture' },
        { term: 'CSF leak', definition: 'Cerebrospinal fluid leaking from ears or nose after skull fracture' },
        { term: 'flail segment', definition: 'Floating section of chest wall caused by multiple rib fractures' },
        { term: 'peritonitis', definition: 'Inflammation of the abdominal lining, causing tenderness, guarding, and rebound pain' },
        { term: 'crepitus', definition: 'Grating or crackling sensation caused by broken bone ends rubbing together or air in tissues' },
      ],
      analogies: [
        'Battle sign is named after a black eye - it\'s bruising that appears in a specific pattern pointing to a serious injury.',
        'A flail segment is like a loose floorboard - it moves independently from the rest of the structure instead of working with it.',
        'Peritonitis is like putting a raw nerve ending on sandpaper - anything touching the inflamed abdominal lining causes pain.',
      ],
      examples: [
        'Car crash patient: Secondary survey reveals right upper quadrant abdominal tenderness. CT scan shows liver laceration. Patient admitted for observation.',
        'Fall from ladder: During secondary survey, patient complains of wrist pain. X-ray shows distal radius fracture. Orthopedics consulted for casting.',
        'Pedestrian struck: During secondary survey, blood noted at urethral meatus. Retrograde urethrogram confirms urethral injury. Foley not placed. Urology consulted.',
      ],
      patientCounselingPoints: [
        'Tell your doctor about any pain or discomfort anywhere in your body, even if it seems minor',
        'Some injuries may not show symptoms right away - follow up if you develop new pain',
        'Keep all follow-up appointments after discharge',
        'X-rays and CT scans help find injuries that can\'t be seen on the outside',
      ],
    },

    3: {
      level: 3,
      summary: 'The secondary survey is a systematic head-to-toe examination that identifies all injuries after life threats are addressed. Requires integration of physical examination skills, imaging interpretation, and clinical judgment.',
      explanation: `## The ATLS Secondary Survey Framework

The secondary survey is a **complete history and physical examination** that only begins after:
1. Primary survey (ABCDE) is complete
2. Resuscitation is ongoing
3. Vital signs are normalizing
4. Life-threatening injuries are being managed

**Critical principle:** **Do not proceed with secondary survey in an unstable patient!** Return to primary survey as needed.

## History Taking in Trauma (AMPLE)

Even in unconscious patients, gather information from all sources:

| Letter | Meaning | Key Questions |
|--------|---------|---------------|
| A | Allergies | Any drug allergies? |
| M | Medications | Current meds, especially anticoagulants |
| P | Past medical history | illnesses, surgeries |
| L | Last meal | When? (important if surgery needed) |
| E | Events/Environment | Mechanism, time, speed, restraints, ejected? |

**Additional history elements:**
- Tetanus immunization status
- Pre-hospital interventions and responses
- Past surgical history
- Family history
- Social history (substance use, living situation)

## Detailed Physical Examination

### Head Examination

**Skull:**
- Palpate entire skull for defects, depressions
- Check for cephalohematoma (subperiosteal) vs caput succedaneum
- Battle sign: Postauricular ecchymosis (basilar skull fracture)
- Raccoon eyes: Periorbital ecchymosis (basilar skull fracture)
- CSF otorrhea/rhinorrhea: Clear fluid leak from ears/nose

**Eyes:**
- Visual acuity if possible
- Pupils: Size, equality, direct/consensual light reflex
- Extraocular movements: CN III, IV, VI
- Fundoscopic exam: Retinal changes, papilledema
- Subconjunctival hemorrhage
- Globe rupture: Teardrop pupil, deep anterior chamber

**Ears:**
- Hemotympanum: Blood behind eardrum
- CSF otorrhea (basilar fracture)
- External auditory canal injuries
- Hearing assessment

**Nose:**
- CSF rhinorrhea (halo sign when blood on filter paper)
- Septal hematoma (needs drainage to prevent saddle deformity)
- Nasal bone fracture crepitus

**Mouth:**
- Mandible palpation for step-off
- Dental injuries (count missing teeth!)
- Airway patency
- Soft palate injury
- Tongue lacerations

### Neck Examination

**Anatomy consideration:** Zones of the neck

| Zone | Location | Concerns |
|------|----------|----------|
| I | Mandible to cricoid | Carotid, pharynx, major vessels |
| II | Cricoid to angle of mandible | Carotid, jugular, vertebral |
| III | Clavicles to cricoid | Great vessels, lung apex, esophagus |

**Physical findings:**
- **Tracheal deviation:**
  - Toward injury: Hemothorax, collapsed lung
  - Away from injury: Tension pneumothorax
- **JVD:** Elevated right atrial pressure (tamponade, tension pneumo, PE)
- **Subcutaneous emphysema:** Pneumomediastinum, pneumothorax, tracheal injury
- **Expanding hematoma:** Vascular injury - surgical emergency!
- **Cervical spine:**
  - Posterior midline tenderness: 70% sensitive for fracture
  - Focal neurological deficit
  - Distracting injury may mask neck pain
  - Altered mental status: Assume cervical injury until cleared

### Chest Examination

**Inspection:**
- Chest wall motion: Asymmetry suggests pathology
- Flail chest: Paradoxical movement
- Open/sucking chest wound
- Seatbelt sign: Deep bruising from seatbelt (significant!)
- Subcutaneous emphysema
- Chest wall deformity

**Auscultation:**
- Breath sounds: Decreased/absent = pneumo/hemothorax
- Wheezing: Bronchospasm, airway injury
- Crackles: Pulmonary contusion, ARDS
- Heart sounds: Muffled = tamponade, tension pneumo

**Palpation:**
- Chest wall stability
- Subcutaneous emphysema
- Rib fractures: Most common thoracic injury
- Sternal fracture: High association with cardiac contusion, MI
- Surgical emphysema

**Percussion:**
- Hyperresonant: Pneumothorax
- Dull: Hemothorax
- Tympanic: Normal

### Abdominal Examination

**Anatomy: Solid vs Hollow Organs**

| Solid Organs | Hollow Organs | Vascular |
|--------------|---------------|----------|
| Liver | Stomach | Aorta |
| Spleen | Small bowel | IVC |
| Kidneys | Colon | Mesenteric vessels |
| Pancreas | Bladder | |
| | Ureters | |

**Exam sequence:**
1. **Inspect:** Distension, bruises (seatbelt sign = chance of intestinal injury)
2. **Auscultate:** Bowel sounds (may be absent in shock, peritonitis)
3. **Percuss:** Dullness (blood, fluid), tympany (gas)
4. **Palpate:** Start away from pain, work toward it

**Peritoneal signs:**
- **Voluntary guarding:** Conscious contraction (pain/anxiety)
- **Involuntary guarding:** Rigid abdomen (peritonitis)
- **Rebound tenderness:** Pain on release (peritonitis)
- **Tenderness:** Generalized vs localized

**Rectal examination:**
- Sphincter tone (spinal shock → absent)
- Blood (GI injury, pelvic fracture)
- Prostate position (high-riding → urethral injury)
- Rectal vault sensation (sacral nerve roots)

### Genitourinary Examination

**Signs of urethral injury:**
- Blood at urethral meatus
- Perineal hematoma
- High-riding prostate on rectal
- Inability to void
- **Do NOT place Foley!** Obtain retrograde urethrogram first

**Scrotal hematoma:**
- Associated with urethral injury
- May contain testicular injury

### Extremities and Musculoskeletal

**Vascular assessment:**
- **Pulses:** Radial, brachial, femoral, popliteal, dorsalis pedis, posterior tibial
- **Capillary refill:** <2 seconds normal
- **Color:** Pink, pale, cyanotic, mottled
- **Temperature:** Warm, cool

**Neurological assessment:**
- **Motor:** 5-point strength testing (0-5)
- **Sensation:** Light touch, pain (dermatomes)
- **Tendon reflexes:** Biceps, triceps, patellar, Achilles

**Skeletal assessment:**
- Deformity, shortening, rotation
- Crepitus (bone on bone)
- Point tenderness (fracture)

**Compartment syndrome signs:**
- Pain out of proportion
- Pain with passive stretch
- Paresthesias
- Pallor
- Pulselessness (late sign!)
- Paralysis (late sign)

**Specific fractures:**
- **Femur fracture:** Can lose 1-2 units of blood
- **Pelvic fracture:** Can lose massive amounts of blood
- **Tibial fracture:** High risk of compartment syndrome

### Neurological Examination

**Glasgow Coma Scale:**
| Score | Eyes | Verbal | Motor | Total |
|-------|------|--------|-------|-------|
| 6 | Spontaneous | Oriented | Obeys | 15 |
| 5 | To speech | Confused | Localizes | 14 |
| 4 | To pain | Inappropriate | Withdraws | 11 |
| 3 | None | Incomprehensible | Flexion | 8 |
| 2 | | | Extension | 6 |
| 1 | | | None | 3 |

**Focal neurological deficits:**
- Hemiparesis (brain injury, spinal shock)
- Paraplegia (thoracic cord)
- Quadriplegia (cervical cord)
- Spinal cord levels and dermatomes

**Pupillary assessment:**
- Size, equality
- Direct light reflex
- Consensual reflex
- Uncal herniation: Ipsilateral blown pupil
- Brainstem injury: Fixed, midpoint pupils

**Reflexes:**
- Deep tendon reflexes (0-4+ scale)
- Babinski sign (upper motor neuron lesion)
- Bulbocavernosus reflex (spinal shock)

## Imaging in the Secondary Survey

**Standard trauma imaging:**

| Study | Indication | Findings |
|-------|------------|----------|
| CXR (PA + lateral) | All significant trauma | Pneumo/hemothorax, widened mediastinum, rib fractures |
| Pelvis X-ray | Pelvic pain, instability | Fractures, pelvic ring disruption |
| C-spine | Neck pain, mechanism, AMS | Fractures, subluxations |
| CT Head | Head injury, AMS, focal deficit | Bleeding, swelling, skull fracture |
| CT C-spine | C-spine fracture on X-ray or high suspicion | Extent of injury |
| CT Chest/Abd/Pelvis | Significant mechanism, unstable | Solid organ injury, hollow viscus, vascular |
| Angiography | Specific vascular injury | Active bleeding, vascular injury |

**Pan-scan controversy:**
- **Pros:** Identifies unexpected injuries, faster
- **Cons:** Radiation exposure, cost, incidental findings
- **Current:** Use selectively based on mechanism and physical findings

## Reassessment

**Repeat primary survey:**
- Vital signs: Any changes?
- ABCDE: Any deterioration?
- Response to interventions

**Repeat secondary survey:**
- Identify missed injuries
- Document progression

**Timing:**
- Immediately after any intervention
- Before transfer
- Before discharge
- Periodically in ICU

**Missed injury rate:**
- Up to 10-15% of major trauma patients
- More common in unconscious patients
- More common with severe injuries
- Reassessment is critical!`,
      keyTerms: [
        { term: 'Battle sign', definition: 'Postauricular (behind the ear) ecchymosis indicating basilar skull fracture. Appears 24-48 hours after injury.' },
        { term: 'raccoon eyes', definition: 'Periorbital ecchymosis (bruising around eyes) indicating basilar skull fracture. Bilateral is classic.' },
        { term: 'compartment syndrome', definition: 'Increased pressure in fascial compartment causing ischemia. Clinical signs: pain, paresthesias, pallor, pulselessness, paralysis.' },
        { term: 'cephalohematoma', definition: 'Subperiosteal hematoma of the skull that does NOT cross suture lines. Unlike caput succedaneum.' },
        { term: 'seatbelt sign', definition: 'Ecchymosis and abrasions across abdomen/chest from seatbelt. Associated with intestinal injury, Chance fracture of spine.' },
        { term: 'halo sign', definition: 'Clear CSF separates from blood on filter paper, creating a halo pattern. Indicates CSF rhinorrhea (skull fracture).' },
      ],
      analogies: [
        'Compartment syndrome is like wearing shoes that are too tight - the pressure builds up until blood flow is cut off, damaging tissue.',
        'A widened mediastinum on chest X-ray is like the shadow in the middle being too wide - suggests blood or damage to major vessels.',
        'Spinal cord assessment is like checking electrical wiring - you need to test each circuit (dermatome, myotome) to find where the break is.',
      ],
      examples: [
        'Motorcycle crash: Secondary survey reveals thigh deformity. X-ray shows femur shaft fracture. Patient monitored for fat embolism syndrome. Orthopedics places intramedullary nail.',
        'Fall from height: Secondary survey finds absent sensation below T10. MRI shows T10 burst fracture with cord compression. Neurosurgery consulted for possible decompression.',
        'Car crash with seatbelt: Seatbelt sign noted on abdomen. Patient has abdominal tenderness. CT shows small bowel perforation. Surgery performs primary repair.',
      ],
      patientCounselingPoints: [
        'Some injuries may not be apparent immediately - report any new symptoms',
        'Follow-up imaging may be needed to detect injuries that evolve over time',
        'Keep all follow-up appointments with specialists',
        'Wear your seatbelt properly - across the hip bones, not the belly',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced secondary survey integrates detailed anatomical knowledge, injury patterns, imaging interpretation, and clinical decision-making to identify all traumatic injuries and guide management.',
      explanation: `## Advanced Concepts in Secondary Survey

**Epidemiology of missed injuries:**
- Overall missed injury rate: 10-15%
- Most commonly missed: Orthopedic injuries, small bowel injuries, vascular injuries
- Risk factors: Severe head injury, intoxication, multiple injuries
- Mortality from missed injuries: Up to 5%

**Systematic approach reduces misses:**
- Standardized protocols
- Repeat examinations
- Low threshold for imaging
- Multidisciplinary review

## Advanced Regional Assessment

### Head and Neck Advanced Assessment

**Basilar skull fracture signs:**
- **Battle sign:** Retroauricular ecchymosis (24-48 hours delayed)
- **Raccoon eyes:** Periorbital ecchymosis (bilateral typical)
- **Hemotympanum:** Blood behind tympanic membrane
- **CSF otorrhea/rhinorrhea:** Clear fluid leak

**Complications of basilar skull fracture:**
- CN VII palsy (facial nerve)
- CN VIII palsy (hearing loss, vertigo)
- Meningitis (communication with environment)
- Carotid artery injury (dissection, pseudoaneurysm)
- Cavernous sinus thrombosis

**Orbital fracture assessment:**
- **Blowout fracture:** Floor of orbit, trap inferior rectus
- **Blow-in fracture:** Roof of orbit
- **Trapdoor fracture:** Pediatric, muscle entrapment
- **Diplopia:** Enophthalmos, limited upward gaze

**Significant facial fractures:**
- **Le Fort I:** Horizontal maxillary fracture (floating palate)
- **Le Fort II:** Pyramidal maxillary fracture
- **Le Fort III:** Craniofacial disjunction (face detached from skull)
- **Mandible fractures:** Often multiple, associated with cervical spine injury

### Advanced Chest Assessment

**Radiographic signs of injury:**

**Widened mediastinum (>8 cm):**
- Traumatic aortic injury (up to 90% have widened mediastinum)
- Apical cap (blood tracking up)
- Deviated trachea/esophagus
- Deviated NG tube
- Obliterated aortic knob
- Widened paratracheal stripe

**Rib fracture patterns:**
- **First and second rib:** High-energy (associated with aortic injury)
- **Ribs 1-3:** Associated with brachial plexus, vascular injury
- **Ribs 9-11:** Associated with liver, spleen, kidney injury
- **Flail chest:** ≥2 fractures in ≥2 ribs
  - Paradoxical movement
  - Underlying pulmonary contusion is main concern
  - May require ventilation

**Pulmonary contusion:**
- Present immediately (unlike atelectasis)
- Injuries worsen over 24-48 hours
- Can cause respiratory failure
- Supportive care (oxygen, ventilation)

**Myocardial contusion:**
- Associated with sternal fracture
- ECG findings: Arrhythmias, ST changes, conduction abnormalities
- Troponin elevation
- Echocardiography for wall motion abnormalities
- Rarely causes actual cardiac dysfunction

### Advanced Abdominal Assessment

**Solid organ injury grading (AAST):**

**Spleen:**
- Grade I-II: Minor lacerations, subcapsular hematoma
- Grade III-IV: Major lacerations, hilar involvement
- Grade V: Shattered spleen, hilar vascular injury

**Management approach:**
- Grade I-III: Observation (95% success)
- Grade IV: Angioembolization or surgery
- Grade V: Splenectomy

**Liver:**
- Similar grading system
- Right lobe more commonly injured
- Grade I-III: Usually observation
- Grade IV-V: Surgery or angio
- Higher mortality than spleen injuries

**Kidney:**
- Grade I-III: Observation
- Grade IV: Consider angioembolization
- Grade V: Radical nephrectomy may be needed

**Hollow viscus injuries:**

**Small bowel:**
- High association with seatbelt sign
- Handlebar injury in children
- CT findings: Free air, thickened bowel wall, mesenteric stranding
- Surgical repair required

**Colon/rectum:**
- Associated with pelvic fractures
- Diverting colostomy for rectal injuries
- Primary repair for colon injuries in selected patients

**Pancreas:**
- Rare but hard to diagnose
- Associated with handlebar injury, steering wheel impact
- Elevated amylase/lipase not specific
- CT with pancreatic protocol
- Surgical consultation required

**Duodenum:**
- Rare, often missed
- Associated with steering wheel injuries
- CT: Retroperitoneal air, duodenal thickening
- Surgical repair usually needed

### Advanced Pelvic Assessment

**Pelvic fracture classification:**

**Young-Burgess classification:**
- **LC (Lateral Compression):** Most common
  - LC1: Sacral impaction
  - LC2: Crescent iliac wing fracture
  - LC3: LC2 + contralateral sacroiliac dislocation (worst)
- **APC (Anteroposterior compression):** "Open book"
  - APC1: <2.5 cm symphysis widening
  - APC2: 2.5-5 cm widening
  - APC3: >5 cm, complete disruption
- **VS (Vertical shear):** Highest mortality
- **CM (Combined mechanism):** Mixed patterns

**Associated injuries:**
- **Urethral injury:** More common with APC injuries
- **Bladder injury:** Intraperitoneal vs extraperitoneal
- **Vaginal injury:** High association with pelvic fractures
- **Nerve injury:** Sciatic, lumbosacral plexus
- **Hemorrhage:** Venous (presacral plexus) and arterial

**Pelvic binder:**
- Applied low over greater trochanters
- Reduces pelvic volume
- Tamponades venous bleeding
- Does NOT stop arterial bleeding
- Remove when angiography available

### Advanced Extremity Assessment

**Fracture patterns:**

**Knee dislocation:**
- High risk of popliteal artery injury
- Check pulses immediately
- ABI <0.9 → angiography
- Vascular injury can occur with normal pulses!

**Compartment syndrome:**
- **Measured pressures:** >30 mmHg diagnostic
- **Delta P:** (Diastolic BP - compartment pressure) <30
- **Fasciotomy:** Treatment for established compartment syndrome
- **Sham group:** Patients at risk but without definitive syndrome

**Neurovascular assessment:**
- Document individual nerve distributions
- Pre-existing deficits important to document
- Repeated examinations catch evolving injuries

### Advanced Spine Assessment

**Cervical spine clearance algorithms:**

**Awake, asymptomatic patient:**
- No neck pain
- No distracting injury
- Normal alertness
- No intoxication
- Range of motion testing → if no pain, cleared clinically

**Unevaluable patient:**
- Obtunded, intoxicated, painful distracting injury
- CT cervical spine
- If CT negative but high suspicion → MRI
- MRI for ligamentous injury, cord injury

**Spinal cord injury without radiographic abnormality (SCIWORA):**
- More common in children
- MRI shows cord injury
- Normal CT and X-rays
- Significant neurological findings

**Central cord syndrome:**
- Arms > legs weakness
- Burning hands
- Hyperextension injury in cervical spondylosis
- Often incomplete recovery

**Anterior cord syndrome:**
- Motor and pain/temperature loss
- Preserved proprioception
- Poor prognosis

**Brown-Sequard syndrome:**
- Ipsilateral motor and proprioception loss
- Contralateral pain and temperature loss
- Hemisection of cord
- Good prognosis

## Advanced Imaging Interpretation

**Trauma CT findings:**

**Aortic injury signs:**
- Direct: Intimal flap, pseudoaneurysm, contour abnormality
- Indirect: Mediastinal hematoma, apical cap

**Solid organ injuries:**
- **Liver:** Laceration pattern, hematoma, active extravasation
- **Spleen:** Laceration extending to hilum = worse
- **Kidney:** Contrast extravasation = vascular injury

**Angiography indications:**
- Pelvic fracture with hemodynamic instability
- Solid organ injury with active bleeding
- Suspected vascular injury
- For embolization or stenting

## Documentation and Communication

**Comprehensive documentation:**
- Body diagrams with all injuries marked
- Time-stamped entries
- Negative findings documented
- Consults and responses
- Informed consent discussions
- Family communication

**Handoff communication:**
- SBAR format: Situation, Background, Assessment, Recommendation
- Include mechanism, injuries, interventions, current status
- Repeat-back for critical information`,
      keyTerms: [
        { term: 'Le Fort classification', definition: 'Classification system for maxillary fractures: I (floating palate), II (pyramidal), III (craniofacial disconnection)' },
        { term: 'Young-Burgess classification', definition: 'Pelvic fracture classification based on force vectors: lateral compression, anteroposterior compression, vertical shear, combined' },
        { term: 'SCIWORA', definition: 'Spinal Cord Injury Without Radiographic Abnormality; normal imaging but neurological deficits, more common in children' },
        { term: 'sham group', definition: 'Patients at risk for compartment syndrome who do not yet meet diagnostic criteria but require close monitoring' },
        { term: 'delta P', definition: 'Diastolic blood pressure minus compartment pressure. <30 mmHg indicates compartment syndrome requiring fasciotomy' },
        { term: 'angioembolization', definition: 'Minimally invasive procedure to stop bleeding by blocking blood vessels using imaging guidance' },
      ],
      analogies: [
        'SCIWORA is like a broken wire inside a rubber coating - the outside looks fine, but the inside is damaged.',
        'Angioembolization is like putting a plug in a leaky pipe - you stop the bleeding without major surgery.',
        'The delta P concept is like checking water pressure - if the pressure behind the blockage is too low, water can\'t get through.',
      ],
      examples: [
        'Motorcycle crash at high speed: CT shows widened mediastinum. Angiography confirms traumatic aortic injury. Endovascular stent placed successfully.',
        'Ejection from vehicle: Pelvic fracture with hemodynamic instability. Pelvic binder placed. Angioembolization stops bilateral internal iliac bleeding. Patient stabilizes.',
        'Fall down stairs: Arm weakness > leg weakness. MRI shows central cord syndrome. Cervical stenosis noted. Gradual recovery expected with therapy.',
      ],
      patientCounselingPoints: [
        'Imaging studies are important tools but doctors also rely on thorough physical examination',
        'Some injuries may evolve over time - repeat examinations help detect changes',
        'Complete documentation helps all your doctors understand your injuries and treatment',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level trauma assessment integrates advanced imaging, injury pattern recognition, clinical decision rules, and multidisciplinary management to optimize outcomes in complex trauma patients.',
      explanation: `## Advanced Trauma Imaging Strategies

**Pan-scan vs selective imaging:**

**Pan-scan (whole body CT):**
- **Pros:** Comprehensiveness, speed, identifies unexpected injuries
- **Cons:** Radiation exposure (up to 25 mSv), cost, incidental findings, contrast nephropathy
- **Current consensus:** Reserved for high-energy mechanisms, abnormal physiology

**Selective imaging:**
- Based on physical examination findings
- Mechanism of injury
- Hemodynamic status
- Reduces radiation and cost
- Risk of missed injuries

**Clinical decision rules:**

**Canadian CT Head Rule (minor head injury):**
- **High risk for neurological intervention:**
  - GCS <2 at 2 hours
  - Suspected open/depressed skull fracture
  - Any sign of basal skull fracture
  - Vomiting ≥2 episodes
  - Age ≥65
- **Medium risk for brain injury on CT:**
  - Amnesia >30 min
  - Dangerous mechanism

**Canadian C-Spine Rule:**
- **High risk:** Age ≥65, dangerous mechanism, paresthesias
- **Low risk:** Simple rear-end, ambulatory, sitting position, delayed neck pain, absence of midline C-spine tenderness
- **Allows imaging:** If any high risk present
- **Allows assessment:** If any low risk AND no high risk

**NEXUS criteria:**
- No midline cervical tenderness
- No focal neurologic deficit
- Normal alertness
- No intoxication
- No painful distracting injury
- **All must be present** to clinically clear without imaging

## Advanced Injury Patterns

**Traumatic brain injury evolution:**

**Primary injury:**
- Occurs at time of impact
- Scalp laceration, skull fracture, concussion, contusion, hematoma, diffuse axonal injury
- Cannot be reversed

**Secondary injury:**
- Evolves over hours to days
- Edema, increased ICP, herniation, ischemia, infection
- **Preventable!** Target: Adequate oxygenation, perfusion, normocapnia, normothermia

**Epidural hematoma:**
- Lens-shaped on CT (does NOT cross suture lines)
- Arterial bleed (usually middle meningeal)
- Lucid interval before deterioration
- Surgical emergency!

**Subdural hematoma:**
- Crescent-shaped on CT (crosses suture lines)
- Venous bleed (bridging veins)
- Associated with brain injury (worse prognosis than epidural)

**Intracerebral hematoma:**
- Within brain parenchyma
- Associated with contusion
- May expand, causing deterioration

**Diffuse axonal injury:**
- Shearing injury from rotational forces
- Multiple small petechial hemorrhages
- Poor prognostic indicator
- No surgical treatment

**Thoracic vascular injury:**

**Traumatic aortic injury:**
- 80-90% die before hospital
- Classic: Widened mediastinum, deviated trachea
- **Descendending thoracic aorta** at isthmus most common
- **Treatment:** Endovascular stent graft (preferred) or open repair

**Other great vessel injuries:**
- Innominate artery
- Common carotid
- Subclavian artery/vein
- Pulmonary artery

**Solid organ injury management:**

**Spleen:**
- Nonoperative management: Success >95% for low-grade injuries
- Angioembolization: For higher grade or active bleeding
- Splenectomy: For unstable, high-grade injuries
- **OPSI risk:** Overwhelming post-splenectomy infection (encapsulated bacteria)

**Liver:**
- Higher mortality than spleen
- More common in penetrating trauma
- Nonoperative success >90% for low-grade
- Angioembolization increasingly used
- Packing (damage control) for unstable

**Kidney:**
- Most renal injuries managed nonoperatively
- Grade IV-V may require intervention
- Angioembolization for vascular injury
- Nephrectomy for shattered kidney

**Hollow viscus injury:**

**Small bowel:**
- Delayed presentation common (up to 3 days)
- CT findings: Free air, thickened wall, mesenteric stranding
- Surgical repair required
- Resection with primary anastomosis

**Colon/rectum:**
- Diverting colostomy for rectal injuries
- Primary repair for colon injuries if stable
- Hartmann procedure: Resection + colostomy + Hartmann pouch

**Duodenum:**
- Diagnosis difficult (retroperitoneal)
- CT findings: Retroperitoneal air, duodenal thickening
- Surgical repair usually needed
- Associated with pancreatic injury

## Pelvic Fracture Management

**Initial management:**
1. **Pelvic binder:** Reduces pelvic volume, tamponades venous bleeding
2. **Resuscitation:** Blood products, permissive hypotension
3. **Angioembolization:** For arterial bleeding (internal iliac branches)
4. **External fixation:** For temporary stabilization
5. **Definitive fixation:** ORIF when stable

**Angio vs preperitoneal packing:**
- **Angioembolization:** Effective for arterial bleeding, requires interventional radiology
- **Preperitoneal packing:** Surgical, controls venous and arterial bleeding, faster in unstable patients
- **Combination:** May use both approaches

**Associated injuries:**
- **Urethral injury:** More common with APC injuries
- **Bladder injury:** Intraperitoneal vs extraperitoneal
- **Vaginal injury:** High association
- **Nerve injury:** Lumbosacral plexus
- **Rectal injury:** Requires colostomy

## Orthopedic Priorities

**Damage control orthopedics:**
- Temporary external fixation
- Definitive fixation delayed until patient stable
- Indications: Pelvic fractures, femur fractures, major arterial injuries

**Compartment syndrome:**
- **Diagnosis:** Clinical suspicion + compartment pressures
- **Threshold:** >30 mmHg absolute, OR delta P <30 mmHg
- **Treatment:** Emergent fasciotomy
- **Time sensitivity:** Permanent injury within 4-6 hours

**Long bone fracture priorities:**
- **Femur:** External fixation, then intramedullary nail
- **Tibia:** External fixation initially if multiple injuries
- **Humerus:** External fixation, ORIF when stable

## Missed Injury Prevention

**High-risk scenarios:**
- Severe head injury (can't report pain)
- Intoxication
- Multiple injuries (distracting)
- Penetrating trauma (multiple tracks)

**Strategies:**
- **Tertiary survey:** Repeat exam within 24-48 hours
- **Protocol-driven imaging:** Less reliance on exam alone
- **Multidisciplinary rounds:** Discuss all patients
- **Checklists:** Ensure all areas examined
- **Discharge instructions:** Warning signs of missed injury

**Commonly missed injuries:**
1. Orthopedic injuries (especially hand, foot)
2. Small bowel injuries
3. Vascular injuries
4. Spinal fractures (especially thoracolumbar)
5. Diaphragmatic injuries

## Special Situations

**Geriatric trauma:**
- Higher mortality for same mechanism
- Comorbidities complicate management
- Medications (anticoagulants)
- Lower threshold for imaging
- Social discharge planning important

**Pediatric trauma:**
- Different injury patterns (large head, more compliant chest)
- Spinal injury without radiographic abnormality (SCIWORA)
- Growth plate injuries
- Radiation sensitivity
- Long-term follow-up critical

**Pregnancy:**
- Anatomic changes affect injury patterns
- Fetal monitoring after 20-24 weeks
- CT justified when indicated
- Left lateral positioning
- Perimortem C-section if maternal arrest >4-5 min
- Kehr incision for peritoneal lavage (avoid uterus)

**Anticoagulated patients:**
- Higher risk of bleeding
- Lower threshold for imaging
- Reversal agents available
- Observation after minor head injury

**Obesity:**
- Imaging quality affected
- Physical examination limited
- Higher complication rates
- Dosing adjustments needed
- Special equipment may be needed

## Quality Improvement

**Trauma quality metrics:**
- Time to CT head
- Time to OR for bleeding
- Missed injury rate
- Appropriate imaging rates
- Length of stay
- Complication rates
- Mortality (risk-adjusted)

**Morbidity and mortality conferences:**
- Review all deaths and major complications
- Identify systems issues
- Implement changes
- Re-evaluate effectiveness

**Performance improvement:**
- Benchmarking against national standards
- Trauma verification process
- Continuous quality improvement`,
      keyTerms: [
        { term: 'Canadian CT Head Rule', definition: 'Clinical decision rule identifying which minor head injury patients need CT imaging, reducing unnecessary scans' },
        { term: 'Canadian C-Spine Rule', definition: 'Highly sensitive clinical decision rule for cervical spine imaging after trauma, more efficient than NEXUS' },
        { term: 'damage control orthopedics', definition: 'Temporary external fixation with delayed definitive surgery until patient physiologically stable' },
        { term: 'tertiary survey', definition: 'Repeat comprehensive examination performed within 24-48 hours to identify missed injuries' },
        { term: 'OPSI', definition: 'Overwhelming Post-Splenectomy Infection; life-threatening infection with encapsulated bacteria after spleen removal' },
        { term: 'preperitoneal packing', definition: 'Surgical placement of gauze in retroperitoneal space to control pelvic hemorrhage; faster than angio for unstable patients' },
      ],
      analogies: [
        'The tertiary survey is like re-reading an essay before submitting it - you catch mistakes you missed the first time through.',
        'Damage control orthopedics is like putting on a temporary cast while you heal from other injuries - you\'ll fix it properly later.',
        'Preperitoneal packing is like stuffing a hole with towels - not elegant, but it stops the bleeding fast when you\'re bleeding to death.',
      ],
      clinicalNotes: `Expert clinical pearls for the secondary survey:

1. **Missed injuries:** Repeat the exam within 24 hours. The most commonly missed injuries are orthopedic (especially hands and feet) and hollow viscus injuries.

2. **Seatbelt sign = danger sign:** This deep bruising pattern is associated with intestinal injury and Chance fractures of the spine. Have a low threshold for CT and surgical consult.

3. **First rib fracture:** This is a high-energy injury. Up to 50% have associated aortic or great vessel injury. Get CT angiography.

4. **Pelvic fracture + hemodynamic instability:** This equals bleeding until proven otherwise. Binder first, then rapid decision: angio vs packing vs OR.

5. **Mechanism over exam in obtunded patients:** If they can\'t tell you where they hurt, trust the mechanism more than the physical exam. Low threshold for imaging.

6. **Blood at urethral meatus:** Don\'t place a Foley! Get a retrograde urethrogram first. You\'ll make the injury worse if you don\'t.

7. **Widened mediastinum:** In a high-energy mechanism, don\'t attribute it to supine position alone. Get CT angiography to rule out aortic injury.

8. **Intoxicated patients:** They can\'t feel pain, can\'t give history, and have higher injury rates. Treat them like they have serious injuries until proven otherwise.

9. **Elderly patients:** They die from injuries that younger people survive. Lower threshold for aggressive imaging and admission.

10. **Pregnant patients:** After 24 weeks, get fetal monitoring. After 20 weeks, the uterus is no longer protected by the pelvis.`,
    },
  },

  media: [
    {
      id: 'secondary-survey-body-diagram',
      type: 'diagram',
      filename: 'secondary-survey-body-diagram.svg',
      title: 'Secondary Survey Documentation Diagram',
      description: 'Body diagram template for documenting injuries',
    },
    {
      id: 'facial-fracture-patterns',
      type: 'diagram',
      filename: 'facial-fracture-patterns.svg',
      title: 'Le Fort Facial Fracture Patterns',
      description: 'Anatomical diagrams of Le Fort I, II, and III fracture patterns',
    },
    {
      id: 'pelvic-fracture-classification',
      type: 'diagram',
      filename: 'pelvic-fracture-classification.svg',
      title: 'Young-Burgess Pelvic Fracture Classification',
      description: 'Illustration of pelvic fracture patterns by mechanism',
    },
  ],

  citations: [
    {
      id: 'atls-secondary-survey',
      type: 'textbook',
      title: 'Advanced Trauma Life Support (ATLS) Secondary Survey Guidelines',
      authors: ['American College of Surgeons', 'Committee on Trauma'],
      source: 'American College of Surgeons',
      url: 'https://www.facs.org/quality-programs/trauma/atls',
      accessedDate: '2026-01-26',
    },
    {
      id: 'stiell-2001',
      type: 'article',
      title: 'The Canadian CT Head Rule for Patients with Minor Head Injury',
      authors: ['Stiell, I.G.', 'et al.'],
      source: 'Lancet',
      url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(01)06138-X',
      accessedDate: '2026-01-26',
    },
    {
      id: 'steele-2003',
      type: 'article',
      title: 'The Canadian C-Spine Rule for Radiography in Alert and Stable Trauma Patients',
      authors: ['Stiell, I.G.', 'et al.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/198597',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-trauma-primary-survey', targetType: 'topic', relationship: 'parent', label: 'Primary Trauma Survey' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock Types' },
    { targetId: 'specialties-cardiology', targetType: 'topic', relationship: 'related', label: 'Cardiology' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'trauma', 'surgery', 'physical examination'],
    keywords: ['secondary survey', 'head to toe', 'trauma assessment', 'ATLS', 'physical exam', 'injury documentation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default traumaSecondarySurvey;
