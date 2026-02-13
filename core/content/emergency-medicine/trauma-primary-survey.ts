/**
 * Primary Trauma Survey - ABCDE Assessment and Life-Threat Management
 *
 * Comprehensive content on the primary trauma survey including ABCDE approach,
 * identification of immediate life threats, and emergency interventions.
 */

import { EducationalContent } from '../types';

export const traumaPrimarySurvey: EducationalContent = {
  id: 'emergency-trauma-primary-survey',
  type: 'topic',
  name: 'Primary Trauma Survey',
  alternateNames: ['ABCDE Assessment', 'Primary Survey', 'Trauma Assessment', 'ATLS Primary Survey'],

  levels: {
    1: {
      level: 1,
      summary: 'The primary survey is a fast check for life-threatening problems after an injury. We check Airway, Breathing, Circulation, Disability, and Exposure to find and fix dangers immediately.',
      explanation: `## What Is the Primary Survey?

When someone gets hurt badly, doctors and emergency responders use a special order to check for life-threatening problems. This is called the **primary survey**. They use the letters **ABCDE** to remember what to check first.

The most important things are checked first. If they find a problem, they fix it before moving to the next letter.

## A - Airway: Can Air Get In?

**What to check:**
- Is the person able to talk?
- Is there anything blocking their throat?
- Is their neck injured?

**What to do if there's a problem:**
- Help them sit up if they can breathe better
- Open their mouth and clear anything blocking the airway
- Sometimes special equipment is needed to help them breathe

## B - Breathing: Are They Breathing Well?

**What to check:**
- Is their chest moving?
- How fast are they breathing?
- Is it hard for them to breathe?
- Any sounds like wheezing or gasping?

**What to do if there's a problem:**
- Help them breathe with a bag and mask
- Put tubes in their chest if air or blood is crushing their lungs
- Give them extra oxygen

## C - Circulation: Is Blood Moving?

**What to check:**
- Can you feel a pulse?
- Is there a lot of bleeding?
- Is their skin pale, cold, or clammy?
- How fast is their heart beating?

**What to do if there's a problem:**
- **STOP ANY BLEEDING!** Press directly on the wound
- Put special bandages (tourniquets) on arms or legs if bleeding severely
- Give fluids through an IV
- Find where internal bleeding might be happening

## D - Disability: Brain and Nerves

**What to check:**
- Are they awake and alert?
- Do they know where they are?
- Can they move their arms and legs?
- Are their pupils (the black center of the eye) the same size?

**What to do if there's a problem:**
- Protect their neck (don't move it)
- Keep checking their level of awareness
- Treat them gently if they have a head injury

## E - Exposure: Look Everywhere

**What to check:**
- **Look at the whole body** - not just where they hurt
- Check for hidden bleeding under clothes
- Look for bruises, cuts, and other injuries
- Check their back (log roll technique)

**What to do:**
- Remove clothes to see all injuries
- Cut clothes if needed (don't pull over injured limbs)
- Keep them warm with blankets after checking

## Remember: Life Threats Come First

The primary survey finds problems that can kill quickly:

| Letter | Life Threat | What We Do |
|--------|-------------|------------|
| A | Blocked airway | Open it up! |
| B | Can't breathe | Help them breathe |
| C | Bleeding to death | Stop the bleeding |
| D | Brain injury | Protect head and neck |
| E | Getting cold/hypothermia | Keep them warm |

## When to Call for Help

**Call 911 immediately if someone:**
- Can't breathe or is struggling to breathe
- Is bleeding heavily that won't stop
- Is unconscious or won't wake up
- Has a neck or back injury (don't move them!)
- Was in a serious accident (car crash, fall, etc.)

**Do NOT move someone with a possible neck or back injury unless:**
- They are in immediate danger (fire, explosion, etc.)
- You need to give CPR

## Important Rule

The rule of the primary survey is: **Treat the biggest threat first!**

If someone can't breathe (B), we fix that BEFORE checking for internal bleeding (C). If their airway is blocked (A), we fix that BEFORE anything else!

This ABCDE order has saved countless lives by making sure the most dangerous problems are found and treated first.`,
      keyTerms: [
        { term: 'primary survey', definition: 'The first check for life-threatening problems after an injury, following ABCDE order' },
        { term: 'airway', definition: 'The path air takes from your nose and mouth to your lungs' },
        { term: 'tourniquet', definition: 'A tight band that stops blood flow to a limb to control severe bleeding' },
        { term: 'IV', definition: 'A small tube put into a vein to give fluids and medicines directly into the bloodstream' },
        { term: 'log roll', definition: 'A way to turn someone while keeping their head and spine in a straight line' },
      ],
      analogies: [
        'The ABCDE approach is like checking a house after a storm - first you make sure the doors open (airway), then that the air is breathable (breathing), then that the pipes aren\'t burst (circulation).',
        'Your airway is like a straw - if it gets blocked, no air can get through no matter how hard you breathe.',
        'A tourniquet is like pinching a garden hose - it stops all water flow past that point.',
      ],
      examples: [
        'A cyclist is hit by a car and can\'t breathe. The responder first checks A - opens the airway by lifting the chin. Then checks B - notices a chest wound that sucks air when the person breathes. A special dressing is applied to seal it.',
        'A construction worker falls and has a deep cut on the thigh that\'s spraying blood. A coworker applies pressure and uses a tourniquet to stop the bleeding immediately.',
        'After a car crash, a person can\'t talk and is gasping for air. The paramedic opens the airway, inserts a breathing tube, and then checks for other injuries.',
      ],
      patientCounselingPoints: [
        'If you witness a serious accident, call 911 immediately',
        'Never move someone with a possible neck or back injury unless they are in immediate danger',
        'Learn how to control bleeding - direct pressure and tourniquet use save lives',
        'If someone can\'t breathe, that\'s the first thing to fix - their life depends on it',
      ],
    },

    2: {
      level: 2,
      summary: 'The primary trauma survey is a systematic ABCDE approach to identify and treat immediate life threats. Life-threatening conditions are addressed in order of priority before proceeding to secondary assessment.',
      explanation: `## The Primary Survey Overview

The primary survey is a rapid, systematic assessment to identify and treat immediate life-threatening conditions in trauma patients. The ABCDE mnemonic ensures that life threats are addressed in order of priority.

**Critical principle:** Fix problems as you find them before moving to the next step!

## A - Airway with C-spine Protection

**Assessment:**
- Can the patient speak? (clear airway = can speak)
- Listen for stridor, gurgling, or snoring sounds
- Look inside the mouth for foreign bodies, blood, vomit
- Check for facial fractures that may block the airway

**Life threats:**
- Obstruction by tongue, blood, vomit, or foreign object
- Facial or neck trauma
- Cervical spine injury (must protect neck throughout!)

**Interventions:**
- **Jaw thrust:** Lift jaw forward without tilting the head
- **Oropharyngeal airway (OPA):** Only if unconscious, no gag reflex
- **Nasopharyngeal airway (NPA):** Can use with gag reflex, avoid with facial fractures
- **Intubation:** If airway cannot be maintained otherwise
- **C-spine immobilization:** Collar, blocks, tape until injury ruled out

## B - Breathing and Ventilation

**Assessment:**
- Respiratory rate: Normal 12-20, >20 or <10 is concerning
- Oxygen saturation (SpO2): Should be >94%
- Chest wall movement: Equal bilaterally?
- Breath sounds: Present on both sides?
- Tracheal position: Deviated to one side?

**Life threats:**
- **Tension pneumothorax:** Air trapped in chest, pushing on heart and lungs
- **Open pneumothorax:** Sucking chest wound
- **Flail chest:** Multiple broken ribs creating floating segment
- **Hemothorax:** Blood in chest cavity
- **Simple pneumothorax:** Collapsed lung

**Interventions:**
- Supplemental oxygen (15 L/min non-rebreather)
- **Needle decompression:** For tension pneumothorax (2nd intercostal space, midclavicular line)
- **Chest tube:** For pneumothorax/hemothorax
- **Occlusive dressing:** For open pneumothorax (tape on 3 sides only!)
- **Assisted ventilation:** If breathing inadequate

## C - Circulation with Hemorrhage Control

**Assessment:**
- Level of consciousness: Brain needs blood!
- Pulse rate: >100 = shock until proven otherwise
- Pulse strength: Weak, thready, or absent?
- Skin signs: Pale, cool, diaphoretic, or mottled
- Capillary refill: >2 seconds is concerning
- Blood pressure: May be normal until significant blood loss

**Life threats:**
- External hemorrhage (obvious bleeding)
- Internal bleeding (chest, abdomen, pelvis, retroperitoneum)
- Cardiac tamponade (blood around heart)
- Tension pneumothorax (affects circulation too)

**Interventions:**
1. **Stop external bleeding FIRST:**
   - Direct pressure
   - Tourniquet for limb bleeding (applied proximal to wound)
   - Hemostatic dressings (special clotting bandages)
   - Pressure points as last resort

2. **IV access:**
   - Two large-bore IVs (14-16 gauge)
   - In antecubital fossa or external jugular

3. **Fluid resuscitation:**
   - Crystalloids (normal saline, lactated Ringer's)
   - Blood products if available
   - Warm fluids (hypothermia worsens bleeding)

**Signs of shock:**
| Mild | Moderate | Severe |
|------|----------|--------|
| Normal BP | Decreased BP | Severely decreased BP |
| HR 80-100 | HR 100-120 | HR >120 or <50 |
| Slight anxiety | Confused | Unconscious/altered |

## D - Disability (Neurologic Status)

**Assessment:**
- **GCS (Glasgow Coma Scale):**
  - Eyes: 1-4 (4 = spontaneous, 1 = none)
  - Verbal: 1-5 (5 = normal, 1 = none)
  - Motor: 1-6 (6 = normal, 1 = none)
  - Normal = 15, <8 = coma
- Pupils: Size, equality, reaction to light
- Focal neurologic deficits: Weakness on one side, etc.

**Life threats:**
- Brain injury (bleeding in or around brain)
- Spinal cord injury
- Shock (affects brain function)

**Interventions:**
- Maintain cervical spine immobilization
- Treat hypoxia and hypotension (both worsen brain injury)
- Prepare for rapid neuroimaging (CT scan)

## E - Exposure and Environmental Control

**Assessment:**
- Completely undress patient (cut clothes if necessary)
- Log roll to examine back and spine
- Look for hidden injuries, burns, penetration wounds
- Check rectal tone for spinal cord injury

**Life threats:**
- Hypothermia (patient gets cold quickly when exposed)
- Missed injuries (hidden under clothes or in back)

**Interventions:**
- Remove all clothing
- Examine entire body thoroughly
- **REWARM immediately:** Blankets, warm fluids, raise room temperature
- Continued monitoring (patient can deteriorate quickly)

## Summary of Life Threats

| Step | Life Threats | Key Intervention |
|------|--------------|------------------|
| A | Blocked airway | Open it, protect spine |
| B | Tension pneumo, hemothorax, flail | Decompression, chest tube |
| C | Hemorrhage, shock | Stop bleeding, fluids |
| D | Brain injury, spine injury | Protect spine, treat BP/O2 |
| E | Hypothermia, missed injuries | Expose fully, then keep warm |

## The Golden Periods

- **Golden hour:** First 60 minutes after injury - rapid transport to trauma center improves outcomes
- **Platinum 10 minutes:** First 10 minutes for life-saving interventions

The primary survey should take 2-5 minutes maximum in an unstable patient!`,
      keyTerms: [
        { term: 'tension pneumothorax', definition: 'Air trapped in the chest cavity that collapses the lung and pushes the heart and other lung to the side', pronunciation: 'PNEU-mo-THOR-ax' },
        { term: 'hemothorax', definition: 'Blood in the chest cavity that compresses the lung', pronunciation: 'hee-mo-THOR-ax' },
        { term: 'flail chest', definition: 'Segment of chest wall that moves independently when two or more ribs are broken in two or more places', pronunciation: 'flayl chest' },
        { term: 'GCS', definition: 'Glasgow Coma Scale; a score from 3-15 that measures level of consciousness based on eye, verbal, and motor responses' },
        { term: 'jaw thrust', definition: 'Technique to open the airway by moving the jaw forward without moving the neck, used when cervical spine injury is suspected' },
        { term: 'hemostatic dressing', definition: 'Special bandage containing clotting agents to help control severe bleeding', pronunciation: 'hee-mo-STAT-ik' },
      ],
      analogies: [
        'Tension pneumothorax is like a balloon inflating in the chest - each breath pushes more air in, but it can\'t escape, eventually crushing the heart.',
        'A flail chest is like a drawer that\'s come off its tracks - it moves separately from the rest of the chest instead of working together.',
        'The GCS score is like a quick brain status report - it tells you how well the brain is working right now.',
      ],
      examples: [
        'Motorcycle crash: Patient is gasping for breath. Primary survey reveals A - jaw thrust opens airway. B - decreased breath sounds on right, trachea deviated left. Needle decompression of right chest relieves tension pneumothorax.',
        'Stab wound to groin: Massive bleeding. Tourniquet applied to thigh proximal to wound. Two large-bore IVs placed. Patient transported to trauma center.',
        'Fall from height: Patient moaning but not following commands. GCS 8. Collar placed. Log roll reveals no back injuries. Transport to trauma center for head CT.',
      ],
      patientCounselingPoints: [
        'In serious accidents, stay still and wait for help - moving could make neck or spine injuries worse',
        'If someone is bleeding heavily, apply firm pressure directly to the wound',
        'Learning basic first aid and CPR can help you save lives before emergency responders arrive',
        'Tourniquets are safe when used correctly - they can save a limb or a life',
      ],
    },

    3: {
      level: 3,
      summary: 'ATLS primary survey uses systematic ABCDE approach to identify and treat immediate life threats. Requires understanding of shock physiology, rapid assessment techniques, and life-saving interventions.',
      explanation: `## ATLS Primary Survey Framework

The Advanced Trauma Life Support (ATLS) primary survey is a structured approach to rapidly identify and treat threats to life. The fundamental principle: **address life threats as they are found**, not in sequence.

**Key principles:**
- Treat life threats before moving to the next step
- No diagnostic studies until ABCDE completed and patient stable
- Assume cervical spine injury in all trauma patients until proven otherwise
- Reassess frequently - patients can deteriorate rapidly

## A - Airway Maintenance with Cervical Spine Protection

**Assessment:**
- **Is the airway patent?** Can patient speak in full sentences?
- **Any obstruction?** Foreign body, blood, vomit, soft tissue swelling
- **What's the mechanism?** Facial trauma, inhalational injury, neck trauma

**Indications for definitive airway:**
- Unable to maintain airway (obstruction, decreased consciousness)
- Hypoxia not responsive to oxygen
- Significant facial/neck trauma
- GCS ≤8 (unable to protect airway)
- Apnea or inadequate respiratory effort

**Airway interventions:**
- **Chin lift** (only if no c-spine injury suspected)
- **Jaw thrust** (preferred with potential c-spine injury)
- **Oropharyngeal airway (OPA):** Unconscious patient, no gag
- **Nasopharyngeal airway (NPA):** Semi-conscious, avoid with basilar skull fracture signs
- **Rapid sequence intubation (RSI):** Definitive airway with cervical spine precautions

**C-spine protection:**
- Hard collar + rigid spine board + head blocks + tape
- Maintain inline stabilization during airway maneuvers
- Remove collar only after c-spine cleared

**Red flags for difficult airway:**
- Facial fractures, swelling
- Blood/vomit in airway
- Neck hematoma
- Basilar skull fracture signs (Battle sign, raccoon eyes)

## B - Breathing and Ventilation

**Assessment:**
- **Inspection:** Respiratory rate, effort, chest wall symmetry, wounds
- **Auscultation:** Bilateral breath sounds
- **Percussion:** Hyperresonant (pneumo) vs dull (hemothorax)
- **Palpation:** Tracheal deviation, subcutaneous emphysema, crepitus

**Immediate life threats:**

**Tension Pneumothorax:**
- Absent breath sounds on affected side
- Tracheal deviation AWAY from affected side
- Hyperresonant to percussion
- Distended neck veins, hypotension
- **Treatment:** Immediate needle decompression (2nd ICS, midclavicular) followed by chest tube

**Open Pneumothorax (Sucking Chest Wound):**
- Hole in chest wall >2/3 tracheal diameter
- Air enters wound instead of trachea
- **Treatment:** Occlusive dressing taped on 3 sides (one-way valve)

**Flail Chest:**
- 2+ fractures in 2+ ribs creating free-floating segment
- Paradoxical movement (moves in during inspiration, out during expiration)
- Underlying pulmonary contusion is main concern
- **Treatment:** Pain control, pulmonary toilet, consider ventilation

**Hemothorax:**
- Dull to percussion
- Decreased breath sounds
- Shock out of proportion to visible injuries
- **Treatment:** Chest tube (large-bore, 36-40 Fr)

**Massive Hemothorax:**
- >1500 mL blood immediately OR >200 mL/hour for 2-4 hours
- Requires thoracotomy

## C - Circulation with Hemorrhage Control

**Assessment of shock:**
| Sign | Mild | Moderate | Severe |
|------|------|----------|--------|
| Blood loss | <750 mL | 750-1500 mL | >1500 mL |
| HR | <100 | 100-120 | >120 |
| BP | Normal | Decreased | Severely decreased |
| Pulse pressure | Normal | Decreased | Narrow |
| RR | 14-20 | 20-30 | >30 |
| Urine output | >30 mL/h | 20-30 mL/h | <20 mL/h |
| Mental status | Normal, anxious | Anxious, confused | Confused, lethargic |

**Hemorrhage control priorities:**
1. **Direct pressure** to all external bleeding
2. **Tourniquet** for extremity bleeding not controlled by pressure
   - Apply 2-3 inches proximal to wound
   - Tighten until bleeding stops
   - Note time of application
   - Can be left in place up to 2 hours safely
3. **Hemostatic agents** (gauze with clotting factors)
4. **Pressure points** (rarely used, not very effective)
5. **Resuscitative endovascular balloon occlusion of aorta (REBOA)** for non-compressible truncal hemorrhage

**Vascular access:**
- Two large-bore IVs (16 gauge or larger)
- Antecubital fossa preferred
- Consider saphenous cutdown or intraosseous access if IVs unavailable
- Central line in internal jugular or subclavian (if skilled provider available)

**Fluid resuscitation:**
- **Crystalloids:** Lactated Ringer's or normal saline
- **Blood products:** Prefer balanced transfusion (1:1:1 plasma:RBC:platelets)
- **Permissive hypotension:** Target SBP 80-90 (or MAP 50-60) until bleeding controlled
- Avoid excessive fluids (dilutes clotting factors, increases bleeding)
- Warm all fluids (hypothermia worsens coagulopathy)

**Cardiac tamponade (Beck triad):**
- Hypotension
- Muffled heart sounds
- Distended neck veins
- **Treatment:** Pericardiocentesis or thoracotomy

## D - Disability (Neurologic Assessment)

**Rapid neurologic assessment:**
- **AVPU scale:**
  - A: Alert
  - V: Responds to Verbal stimuli
  - P: Responds to Pain
  - U: Unresponsive

- **Glasgow Coma Scale:**
  | Eye | Verbal | Motor | Total |
  |-----|--------|-------|-------|
  | 4 | 5 | 6 | 15 (normal) |
  | 1 | 1 | 1 | 3 (worst) |
  | <8 | | | Needs intubation |

- **Pupils:** Size, symmetry, reactivity
- **Limb movement:** Can patient move all four limbs?
- **Spinal cord assessment:** Priapism, diaphragmatic breathing, loss of rectal tone

**Elevated ICP signs (Cushing triad):**
- Hypertension with bradycardia
- Irregular respirations
- Indicates severe brain injury, needs immediate intervention

## E - Exposure and Environmental Control

**Complete exposure:**
- Remove all clothing (cut if necessary)
- Log roll with spine precautions to examine back
- Look at EVERYTHING

**Hidden injuries to find:**
- Posterior penetrating wounds
- Seatbelt signs
- Degloving injuries
- Rectal and vaginal injuries
- Perineal trauma

**Hypothermia prevention:**
- Trauma patients become hypothermic rapidly
- Hypothermia worsens coagulopathy (lethal triad: hypothermia, acidosis, coagulopathy)
- **Interventions:**
  - Warm environment
  - Remove wet clothing
  - Cover with warm blankets/bear hugger
  - Warm all IV fluids
  - Warm room

**Log roll technique:**
1. One person stabilizes head/neck
2. Three others roll patient as a unit
3. Palpate entire spine
4. Inspect back and perineum
5. Place spinal board if not already on one

## Summary: The ATLS Primary Survey

\`\`\`
The ATLS approach in action:

A → Airway: Is it open? Protect cervical spine
    ↓ Problems found? Fix before moving on
B → Breathing: Are both lungs working?
    ↓ Treat pneumo/hemothorax before proceeding
C → Circulation: Control bleeding! Start fluids
    ↓ Stop external bleeding FIRST
D → Disability: Check brain and nerves
E → Exposure: Look everywhere, keep warm
\`\`\`

After completing ABCDE, move to:
- **Secondary survey:** Head-to-toe detailed exam
- **Adjuncts:** Imaging, labs, monitoring
- **Definitive care:** Surgery, ICU, transfer

**Remember:** Complete ABCDE in minutes for unstable patients!`,
      keyTerms: [
        { term: 'RSI', definition: 'Rapid Sequence Intubation; technique for placing a breathing tube quickly in trauma patients with cervical spine protection' },
        { term: 'subcutaneous emphysema', definition: 'Air trapped under the skin, feels like bubble wrap; suggests pneumothorax or airway injury' },
        { term: 'permissive hypotension', definition: 'Strategy of keeping blood pressure lower than normal during hemorrhage to avoid dislodging clots and worsening bleeding' },
        { term: 'lethal triad', definition: 'Hypothermia, acidosis, and coagulopathy - three problems that worsen each other and lead to death in trauma' },
        { term: 'REBOA', definition: 'Resuscitative Endovascular Balloon Occlusion of the Aorta; inflates a balloon in aorta to stop bleeding below diaphragm' },
        { term: 'trauma bay', definition: 'Emergency room area dedicated to trauma resuscitation, equipped with rapid infusers, monitoring, and surgical equipment' },
      ],
      analogies: [
        'Permissive hypotension is like driving on a spare tire - you go slower and more carefully to avoid making things worse before you can fix the problem properly.',
        'The lethal triad is like three wolves chasing each other in circles - hypothermia worsens coagulopathy, coagulopathy worsens bleeding, bleeding worsens hypothermia.',
        'Subcutaneous emphysema feels like Rice Krispies under the skin - crackly air bubbles where they shouldn\'t be.',
      ],
      examples: [
        'Pedestrian struck by car: Patient unconscious, breathing shallowly. A - Intubate with RSI, inline c-spine. B - Decreased sounds right, needle decompression, chest tube placed. C - IVs started, normal saline bolus. D - GCS 6T, pupils equal. E - No other injuries found. Transport to OR for exploratory laparotomy.',
        'Fall from ladder: Patient alert but short of breath. A - Airway patent. B - Left chest wall moves paradoxically. Flail chest diagnosed. C - Stable. D - Alert, moving all limbs. E - Multiple rib fractures confirmed on X-ray. Admitted for pain management and pulmonary toilet.',
        'Stab wound to chest: Patient hypotensive, neck veins distended. A - Patent. B - Breath sounds distant bilaterally. C - Muffled heart sounds. Cardiac tamponade suspected. Pericardiocentesis returns blood. Patient improves. Transport to OR for repair.',
      ],
      patientCounselingPoints: [
        'If you\'re in an accident, try to stay still until help arrives - this prevents making injuries worse',
        'Tourniquets are safe for up to 2 hours - do not remove once applied, let medical personnel handle it',
        'When being examined for injuries, medical staff may need to remove your clothing to find hidden injuries',
        'You may feel cold after being examined - this is normal and staff will keep you warm',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced trauma assessment requires integration of pathophysiology, diagnostic imaging, invasive monitoring, and complex decision-making for optimal management of life-threatening injuries.',
      explanation: `## Advanced Primary Survey Concepts

**The "death spiral" in trauma:**
The lethal triad (hypothermia, acidosis, coagulopathy) creates a self-reinforcing cycle:
- Hemorrhage → decreased perfusion → acidosis
- Acidosis + hypothermia → coagulopathy
- Coagulopathy → worsened bleeding
- Worsened bleeding → more hemorrhage

**Breaking the cycle:**
1. **Damage control resuscitation:** Limited fluids, permissive hypotension, early blood products
2. **Damage control surgery:** Stop bleeding rapidly, defer definitive repair
3. **Aggressive rewarming:** Active measures to prevent/treat hypothermia

## Advanced Airway Management

**Predicting difficult airway in trauma:**
- **LEMON mnemonic:**
  - **L**ook externally: Facial trauma, beard, large teeth
  - **E**valuate: 3-2-1 rule (3 fingers mouth opening, 2 fingers hyoid-mental distance, 1 finger thyrohyoid distance)
  - **M**allampati: Class 3-4 (if able to assess)
  - **O**bstruction: Blood, vomit, swelling
  - **N**eck mobility: Assume limited due to collar

**RSI modifications for trauma:**
- Maintain manual inline stabilization throughout
- Consider bougie use for difficult airways
- Have surgical airway backup ready (cricothyrotomy)
- Video laryngoscopy increasingly preferred

**Failed airway algorithm:**
1. Optimize: Reposition, suction, increase force
2. Alternative device: Video laryngoscope, bougie, LMA
3. Surgical airway: Cricothyrotomy (cannot do in <10 years old)

**Cricothyrotomy:**
- Indications: Failed intubation, massive facial trauma, upper airway obstruction
- Contraindication: <10-12 years old (cricoid too small - do tracheostomy instead)
- Technique: Vertical incision through skin, horizontal through cricothyroid membrane

## Advanced Thoracic Trauma

**Tension pneumothorax pathophysiology:**
- One-way valve mechanism lets air in but not out
- Increasing pressure collapses ipsilateral lung
- Mediastinum shifts away, compressing contralateral lung
- Increased intrathoracic pressure ↓ venous return → obstructive shock

**Needle decompression details:**
- **Location:** 2nd intercostal space, midclavicular line
- **Alternative:** 4th-5th intercostal, anterior axillary line (some evidence suggests better)
- **Needle:** 14-gauge, at least 2 inches (5 cm) for average adult
- **Angle:** 90° to chest wall, superior to rib to avoid neurovascular bundle
- **Confirmation:** Rush of air, clinical improvement
- **Follow with:** Chest tube (32-36 Fr) in 4th-5th intercostal space, anterior axillary line

**Cardiac tamponade physiology:**
- Pericardial fluid accumulation (50-100 mL can cause tamponade in acute setting)
- Equalization of diastolic pressures: RA = RV diastolic = PA diastolic
- **Beck triad:** Hypotension, muffled heart sounds, JVD (not all patients have all three)
- **Pulsus paradoxus:** BP drop >10 mmHg during inspiration

**Pericardiocentesis:**
- **Landmark:** Subxiphoid, 16-18 gauge needle
- **Angle:** 45° to skin, directed toward left shoulder
- **ECG guidance:** Attach V1 to needle, watch for ST elevation if touching epicardium
- **Ultrasound guidance:** Preferred when available

**Massive hemothorax management:**
- >1500 mL initial output OR >200 mL/hour for 2-4 hours
- Requires thoracotomy for bleeding control
- Common sources: Intercostal vessels, internal mammary, lung parenchyma, great vessels

## Advanced Hemorrhage Control

**Resuscitative Endovascular Balloon Occlusion of the Aorta (REBOA):**
- **Indication:** Non-compressible truncal hemorrhage (abdomen, pelvis, junctional zones)
- **Contraindication:** Cardiac arrest, prolonged CPR, terminal injury, chest/abdominal aortic injury
- **Zones:**
  - Zone I: Descending thoracic to celiac (above diaphragm) - abdominal bleeding
  - Zone III: Infrarenal aorta - pelvic bleeding
  - Zone II: Renal arteries - avoid occlusion
- **Technique:** femoral artery cutdown or percutaneous, advance under fluoroscopy
- **Complications:** Limb ischemia, aortic injury, organ ischemia

**Balloon tamponade for junctional hemorrhage:**
- **Combat Gauze:** Kaolin-based hemostatic dressing
- **AAJT (Abdominal Aortic and Junctional Tourniquet):** External compression
- **CRoC (Combat Ready Clamp):** For axillary/groin hemorrhage

**Damage control resuscitation principles:**
1. **Permissive hypotension:** SBP 80-90 until bleeding controlled
2. **Hemostatic resuscitation:** 1:1:1 plasma:RBC:platelets
3. **Massive transfusion protocol:** Activated when >10 units blood needed
4. **Tranexamic acid:** 1 g load + 1 g infusion over 24h (give within 3h of injury)

**Coagulopathy management:**
- **Viscoelastic testing (TEG/ROTEM):** Guides specific factor replacement
- **Fibrinogen:** <150-200 mg/dL → cryoprecipitate or fibrinogen concentrate
- **Platelets:** <50,000-100,000
- **Calcium:** Ionized Ca <1.0-1.2 mmol/L (citrate in blood products chelates calcium)

## Advanced Neurologic Assessment

**Intracranial pressure dynamics:**
- Monro-Kellie doctrine: Fixed cranial volume (brain + blood + CSF)
- Increase in one component must decrease another
- When compensatory mechanisms exhausted → rapid ICP rise

**Cushing response (late sign):**
- Hypertension with bradycardia
- Widened pulse pressure
- Indicates brainstem compression
- Surgical emergency if caused by mass lesion

**Uncal herniation:**
- Uncus of temporal herniates through tentorial notch
- **Ipsilateral:** Blown pupil (CN III compression)
- **Contralateral:** Hemiparesis (cerebral peduncle compression)
- Late sign: Respiration changes

**Brain herniation syndromes:**
| Type | Signs | Management |
|------|-------|------------|
| Uncal | Ipsilateral blown pupil, contralateral weakness | Hyperventilation, osmotic therapy, surgery |
| Central | Cheyne-Stokes breathing, small reactive pupils | Same |
| Tonsillar | Coma, irregular breathing, neck stiffness | Immediate neurosurgery |
| Upward | Coma, small pupils, upgaze palsy | Same |

## Resuscitative Thoracotomy (ED Thoracotomy)

**Indications:**
- Penetrating chest trauma with signs of life
- Penetrating abdominal trauma with signs of life
- Blunt trauma with <10 minutes of prehospital CPR

**Contraindications:**
- No signs of life with prolonged CPR
- Blunt trauma with >10 minutes CPR
- Obviously nonsurvivable injuries

**Procedure:**
- Left anterolateral thoracotomy (4th-5th intercostal space)
- Pericardiotomy for tamponade relief
- Open cardiac massage (better compressions than external)
- Cross-clamp aorta for abdominal bleeding
- Internal defibrillation if VF/VT

**Survival:** ~10-15% overall, up to 30% for selected penetrating injuries`,
      keyTerms: [
        { term: 'massive transfusion protocol', definition: 'Pre-planned protocol for rapid blood product delivery in 1:1:1 ratio (plasma:RBC:platelets) to treat coagulopathy of trauma' },
        { term: 'REBOA zone I', definition: 'Zone I extends from the left subclavian artery to the celiac trunk; occlusion here controls abdominal bleeding' },
        { term: 'damage control surgery', definition: ' abbreviated surgery to control hemorrhage and contamination only, with definitive repair delayed until patient stabilized' },
        { term: 'permissive hypotension', definition: 'Intentional maintenance of lower-than-normal blood pressure (SBP 80-90) during active hemorrhage to reduce bleeding and avoid clot disruption' },
        { term: 'thoracotomy', definition: 'Surgical opening of the chest cavity; in ED, resuscitative thoracotomy can relieve tamponade, allow cardiac massage, and cross-clamp aorta' },
        { term: 'viscoelastic testing', definition: 'Point-of-care coagulation testing (TEG/ROTEM) that evaluates whole blood clot formation; guides targeted blood product replacement' },
      ],
      analogies: [
        'REBOA is like pinching a garden hose at the faucet - it stops all flow downstream of the pinch, giving you time to fix the leaks.',
        'The Monro-Kellie doctrine is like a suitcase - it\'s full and you can\'t add more without taking something out.',
        'Viscoelastic testing is like watching a video instead of looking at a snapshot - you see how the whole clotting process happens, not just a single value.',
      ],
      examples: [
        'Gunshot wound to abdomen: Patient hypotensive (BP 70/palp). FAST positive. Massive transfusion activated. REBOA placed in Zone I. Blood pressure improves. Patient to OR for damage control laparotomy. BP 100/60 in OR after packing',
        'Motorcycle crash: Patient deteriorates during primary survey. Needle decompression negative. Ultrasound shows pericardial fluid. Pericardiocentesis improves BP. Transfer to OR for cardiac repair.',
        'Stab wound to chest: Patient loses pulses. ED thoracotomy performed. Pericardiotomy releases 300 mL blood. Heart emptying. Internal cardiac compressions started. ROSC achieved. Patient to OR for lung repair.',
      ],
      patientCounselingPoints: [
        'Trauma care involves many rapid interventions; you may be too unstable for complete explanations initially',
        'Family will be updated regularly during resuscitation; the trauma team is focused on saving your life',
        'After stabilization, you may need multiple surgeries - damage control approach stages these to help you survive',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert trauma care integrates cutting-edge resuscitation strategies, advanced monitoring technologies, evidence-based protocols, and system-level coordination to optimize outcomes in critically injured patients.',
      explanation: `## State-of-the-Art Trauma Resuscitation

**Evolution from ATLS to current practice:**

Traditional ATLS emphasized large-volume crystalloid resuscitation. Current practice emphasizes **hemostatic resuscitation** with blood products, minimal crystalloids, and early control of bleeding.

**Key paradigm shifts:**
1. **Crystalloid to blood:** 1:1:1 plasma:RBC:platelets
2. **Normotension to permissive hypotension:** SBP 80-90 until bleeding controlled
3. **Reactive to proactive:** Massive transfusion protocol triggered early
4. **Late to early imaging:** FAST and extended FAST (eFAST) in trauma bay
5. **Whole blood:** Returning to whole blood transfusion when available

## Advanced Resuscitation Strategies

**Whole blood vs component therapy:**
- **Whole blood advantages:** Contains all factors, platelets, plasma
- **Component therapy:** Allows customization but requires multiple products
- **Low titer O-negative whole blood:** Increasingly used in prehospital and ED
- **Walking blood banks:** Military experience translated to civilian systems

**TXA (Tranexamic Acid) evidence:**
- **CRASH-2 trial:** Reduced mortality if given within 3 hours
- **Dosing:** 1 g load over 10 min + 1 g infusion over 8 hours
- **Mechanism:** Inhibits fibrinolysis (prevents clot breakdown)
- **Harm:** Increased mortality if given >3 hours post-injury
- **Current guideline:** Give within 3 hours for suspected significant bleeding

**Balanced resuscitation goals:**
- RBC:Plasma:Platelets = 1:1:1
- Hematocrit 24-28% (may be lower temporarily)
- INR <1.5
- Fibrinogen >150-200 mg/dL
- Platelets >50,000 (higher if brain injury)

## Advanced Monitoring in Trauma

**Goal-directed resuscitation endpoints:**
- MAP ≥65 mmHg (or higher if TBI: ≥80 mmHg)
- SvO2 >65% (mixed venous oxygen saturation)
- Lactate clearance: >10% per hour
- Base deficit: Improving trend
- Hourly urine output: >0.5 mL/kg/h

**Viscoelastic testing (TEG/ROTEM):**

| Parameter | What it measures | Target |
|-----------|------------------|--------|
| R time (TEG) | Clot initiation | Normal to slightly shortened |
| K time | Speed to reach certain clot strength | Normal |
| Alpha angle | Fibrinogen function | Normal |
| MA (TEG) / MCF (ROTEM) | Overall clot strength | >50-55 mm |
| LY30 | Fibrinolysis | <3% |

**Treatment based on viscoelastic results:**
- Prolonged R → FFP or plasma
- Low MA → Platelets
- Low alpha angle + low MA → Cryoprecipitate (fibrinogen)
- Elevated LY30 → TXA

**Cardiac output monitoring:**
- Esophageal Doppler
- Arterial waveform analysis (FloTrac, LiDCO)
- Transpulmonary thermodilution
- Limited data in trauma; use if available

## REBOA Updates and Controversies

**Current evidence:**
- No large RCTs comparing REBOA to standard care
- Observational data: Possible mortality benefit in selected patients
- Complications: 20-40% (limb ischemia most common)

**Patient selection refined:**
- Best: Young, penetrating trauma, short prehospital time
- Questionable: Blunt trauma, prolonged CPR, significant comorbidities
- Avoid: Cardiac arrest >10 min, terminal injuries

**Partial REBOA:**
- Intermittent balloon inflation instead of continuous
- Allows some distal perfusion
- May reduce ischemia complications
- Emerging technique

**Hybrid REBOA:**
- Combination with other techniques (angiographic embolization)
- Balloon used as bridge to definitive hemorrhage control

## Advanced Airway Controversies

**Video laryngoscopy vs direct laryngoscopy:**
- VL improves first-pass success in many settings
- VL may be superior in cervical spine immobilization
- Some data shows faster times with DL for experienced providers
- Current trend: VL as default in trauma

**Apneic oxygenation:**
- High-flow nasal cannula during RSI
- May prolong safe apnea time
- No harm demonstrated
- Reasonable adjunct in trauma RSI

**Bougie as first-line:**
- Improves first-pass success
- Particularly useful with cervical collar
- Low risk, high benefit
- Increasingly adopted

## Trauma Systems of Care

**Trauma center designation:**
- Level I: Highest resources, teaching, research
- Level II: Similar clinical capabilities without research requirement
- Level III: Resuscitation, surgery, transfer capability
- Level IV: Initial stabilization, transfer
- Level V: Basic stabilization, rapid transfer

**Field triage criteria:**
- Step 1: Vital signs and mental status (GCS, SBP, RR)
- Step 2: Anatomy of injury (penetrating trauma to head/neck/trunk, flail chest, crush injuries)
- Step 3: Mechanism of injury (high risk)
- Step 4: Special considerations (elderly, anticoagulation, pregnancy)

**Direct to OR:**
- Penetrating trauma with hypotension
- FAST positive with hypotension
- Gunshot wound to torso with hypotension
- GCS ≤8 with obvious bleeding on CT
- Permissive hypotension maintained until OR

**Damage control resuscitation to damage control surgery transition:**
- Resuscitation ends when: Bleeding controlled, patient stabilized
- Damage control surgery if: pH <7.2, temp <34°C, coagulopathy refractory
- Planned reoperation: 24-48 hours later when physiology improved

## Special Populations

**Geriatric trauma (≥65):**
- Higher mortality for same mechanism
- Comorbidities affect outcomes
- Lower GCS may be baseline
- Premorbid medications: Anticoagulants, antiplatelets
- Earlier aggressive intervention recommended

**Pregnant trauma:**
- Anatomic changes: Enlarged uterus displaces organs upward
- Physiologic changes: Increased blood volume, decreased hemoglobin
- Fetal viability: ~24 weeks (consider perimortem C-section if maternal arrest >4-5 min)
- Radiation concerns: CT justified when indicated
- Left lateral decubitus positioning (displace uterus off IVC)

**Pediatric trauma:**
- Different patterns: Large head, less subcutaneous tissue
- Greater compensatory mechanisms: Maintain BP until sudden decompensation
- Blood volume: 80 mL/kg (vs 70 mL/kg adults)
- Cricothyroid membrane too small for surgical airway <10-12 years

**Anticoagulated patients:**
- Warfarin: Give 4-factor PCC + vitamin K
- DOACs: Specific reversal agents available (idarucizumab, andexanet alfa)
- Antiplatelets: No specific reversal; platelet transfusion may help
- Consider reversal before surgical intervention

## Quality and Performance Improvement

**Trauma quality metrics:**
- Time to OR: <60 min for penetrating trauma with hypotension
- Time to angiography: <90 min for pelvic fractures with hemodynamic instability
- TBI: Time to craniotomy, ICP monitoring placement
- Over-triage vs under-triage rates

**Prehospital blood product administration:**
- Increasingly common in helicopter EMS
- Some ground EMS programs implementing
- Whole blood or RBC + plasma
- Improved survival in selected patients

**Economic considerations:**
- REBOA: High cost for equipment, training
- Massive transfusion: Expensive but cost-effective for severe hemorrhage
- Damage control: Multiple surgeries vs single definitive repair
- Long-term outcomes: Rehabilitation dominates trauma costs

**Future directions:**
- Point-of-care ultrasound for every trauma assessment
- Artificial intelligence for predicting need for massive transfusion
- Drone delivery of blood products to remote locations
- Portable viscoelastic testing
- Automated CPR devices in trauma (limited utility currently)`,
      keyTerms: [
        { term: 'hemostatic resuscitation', definition: 'Resuscitation strategy emphasizing early blood component therapy and minimizing crystalloids to treat trauma-induced coagulopathy' },
        { term: 'CRASH-2 trial', definition: 'Landmark RCT showing tranexamic acid reduces mortality in trauma patients when given within 3 hours of injury' },
        { term: 'whole blood transfusion', definition: 'Use of whole blood (rather than components) for trauma resuscitation; contains RBCs, plasma, and platelets in natural ratios' },
        { term: 'viscoelastic testing', definition: 'Point-of-care assessment of whole blood clot formation (TEG/ROTEM) that guides targeted blood product replacement' },
        { term: 'damage control surgery', definition: 'Abbreviated surgery controlling hemorrhage and contamination only; definitive repair delayed until patient stabilized' },
        { term: 'partial REBOA', definition: 'Intermittent balloon inflation during REBOA to allow some distal perfusion, potentially reducing ischemic complications' },
      ],
      analogies: [
        'Viscoelastic testing is like watching the clotting process as a movie instead of looking at a single photo - you see initiation, strengthening, and dissolution all together.',
        'The shift from crystalloid to blood products is like switching from water transmission to transmission fluid - you\'re replacing what\'s actually being lost.',
        'Damage control surgery is like patching a tire on the side of the road - it\'s temporary but gets you to where you can fix it properly.',
      ],
      clinicalNotes: `Expert clinical pearls for advanced trauma care:

1. **Bleeding trauma patient:** Don't let "normal" BP fool you. Young, healthy patients maintain BP until they crash. Look at lactate, base deficit, and mental status.

2. **REBOA timing:** Consider early for patients in extremis with abdominal/pelvic bleeding who can't get to OR quickly. But don't delay transport or definitive care.

3. **Viscoelastic testing:** Learn to use it. It replaces cookbook transfusion ratios with targeted therapy. MA <50? Give platelets. R prolonged? Give FFP. Low angle + low MA? Give cryo.

4. **Pelvic fracture with hypotension:** Bind first, then FAST, then consider angiography OR REBOA OR preperitoneal packing. Don't delay OR for bleeding control.

5. **TBI with hemorrhage:** Balance conflicting goals. TBI needs higher BP (≥80), hemorrhage needs lower BP. Give blood to maintain MAP ≥80 while controlling bleeding quickly.

6. **Anticoagulated patients:** Know your reversal agents. Warfarin gets PCC + vit K. Dabigatran gets idarucizumab. Xa inhibitors get andexanet alfa. Have these available immediately.

7. **Penetrating trauma to torso:** Hypotensive patients should go directly to OR, not CT. Minutes matter. Only stop for emergent interventions (ED thoracotomy if arresting).

8. **Massive transfusion:** Activate early. Don't wait for patient to crash before calling. If you think you might need it, you probably do.

9. **Pediatric trauma:** They compensate remarkably well, then crash suddenly. Normal BP with altered mental status = shock until proven otherwise in kids.

10. **Geriatric trauma:** Lower threshold for aggressive care. Higher mortality for same mechanism. Earlier intervention (surgery, angio) is usually appropriate.`,
    },
  },

  media: [
    {
      id: 'primary-survey-atls-algorithm',
      type: 'diagram',
      filename: 'primary-survey-atls-algorithm.svg',
      title: 'ATLS Primary Survey Algorithm',
      description: 'Flow diagram for ABCDE primary trauma assessment',
    },
    {
      id: 'needle-decompression-technique',
      type: 'diagram',
      filename: 'needle-decompression-technique.svg',
      title: 'Needle Decompression Technique',
      description: 'Anatomical landmarks for tension pneumothorax decompression',
    },
    {
      id: 'tourniquet-application',
      type: 'diagram',
      filename: 'tourniquet-application.svg',
      title: 'Tourniquet Application',
      description: 'Proper tourniquet placement for extremity hemorrhage control',
    },
    {
      id: 'log-roll-technique',
      type: 'diagram',
      filename: 'log-roll-technique.svg',
      title: 'Log Roll Technique',
      description: 'Safe patient rolling with spine protection',
    },
  ],

  citations: [
    {
      id: 'atls-10th-edition',
      type: 'textbook',
      title: 'Advanced Trauma Life Support (ATLS) Student Course Manual',
      authors: ['American College of Surgeons', 'Committee on Trauma'],
      source: 'American College of Surgeons',
      url: 'https://www.facs.org/quality-programs/trauma/atls',
      accessedDate: '2026-01-26',
    },
    {
      id: 'east-guidelines',
      type: 'article',
      title: 'Eastern Association for the Surgery of Trauma Practice Management Guidelines',
      authors: ['Eastern Association for the Surgery of Trauma'],
      source: 'Journal of Trauma and Acute Care Surgery',
      url: 'https://www.east.org/education/practice-management-guidelines',
      accessedDate: '2026-01-26',
    },
    {
      id: 'crash-2-trial',
      type: 'article',
      title: 'Effects of Tranexamic Acid on Death, Vascular Occlusive Events, and Blood Transfusion in Trauma Patients',
      authors: ['Shakur, H.', 'et al.'],
      source: 'Lancet',
      url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(10)60535-5',
      accessedDate: '2026-01-26',
    },
    {
      id: 'prosper-trial',
      type: 'article',
      title: 'Clinical Overall Use of Plasma, Cryoprecipitate, and Platelets in Trauma',
      authors: ['Holcomb, J.B.', 'et al.'],
      source: 'Journal of Trauma and Acute Care Surgery',
      url: 'https://journals.lww.com/jtrauma/Fulltext/2015/03001/Clinical_Overall_Use_of_Plasma_Cryoprecipitate_and.5.aspx',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-trauma-secondary-survey', targetType: 'topic', relationship: 'parent', label: 'Secondary Trauma Survey' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock Types' },
    { targetId: 'specialties-cardiology-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'trauma', 'surgery', 'critical care'],
    keywords: ['ABCDE', 'primary survey', 'ATLS', 'trauma', 'tension pneumothorax', 'hemorrhage', 'shock', 'tourniquet'],
    clinicalRelevance: 'critical',
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

export default traumaPrimarySurvey;
