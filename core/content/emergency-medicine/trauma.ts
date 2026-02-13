/**
 * Trauma - Primary/Secondary Survey, ATLS, and Common Injuries
 *
 * Comprehensive content on trauma management including primary and secondary surveys,
 * ATLS principles, hemorrhage control, TBI management, damage control resuscitation,
 * and advanced trauma systems research.
 */

import { EducationalContent } from '../types';

export const trauma: EducationalContent = {
  id: 'emergency-trauma',
  type: 'topic',
  name: 'Trauma',
  nameEs: 'Trauma',
  alternateNames: ['Traumatic Injury', 'Polytrauma', 'Major Trauma', 'Trauma Resuscitation'],

  levels: {
    1: {
      level: 1,
      summary: 'Trauma means a serious injury to the body, like from a car crash, fall, or violence. When someone is badly hurt, doctors follow specific steps to find and fix the most dangerous injuries first.',
      explanation: `## What Happens When Someone Gets Hurt Badly?

When a person has a serious injury -- like from a car accident, a bad fall, or being hurt by someone -- they need emergency help right away. The body can be hurt in many ways at the same time, and some injuries are more dangerous than others.

### Why Speed Matters

When someone is seriously injured:
- **Bleeding** can cause the body to run out of blood quickly
- **Breathing problems** can cut off oxygen to the brain
- **Head injuries** can cause the brain to swell
- The first hour after injury is called the **"golden hour"** because getting help fast saves lives

### What Should You Do?

If you see someone who is badly hurt:

1. **Call 911 immediately** -- Tell them what happened, where you are, and how many people are hurt
2. **Stay safe** -- Make sure you are not in danger (traffic, fire, etc.)
3. **Do not move the person** unless they are in immediate danger (like a fire)
4. **Keep them warm** -- Cover them with a blanket or jacket
5. **Talk to them** -- Keep them calm and awake if possible
6. **Apply pressure to bleeding** -- Use a clean cloth and press firmly on any bleeding wound

### What Happens at the Hospital?

When the ambulance arrives at the hospital:
- A whole team of doctors and nurses is waiting
- They check the most important things first: breathing, heartbeat, and bleeding
- They use X-rays and scans to find hidden injuries
- They may need surgery to fix serious problems

### Common Types of Serious Injuries

- **Car crashes** -- The most common cause of serious injury
- **Falls** -- Especially dangerous for older people and children
- **Violence** -- Gunshots, stabbings, and assaults
- **Sports injuries** -- Especially head injuries in contact sports
- **Burns** -- From fire, chemicals, or electricity`,
      keyTerms: [
        { term: 'trauma', definition: 'A serious injury to the body caused by an accident, fall, violence, or other event' },
        { term: 'golden hour', definition: 'The first 60 minutes after a serious injury, when getting medical help can make the biggest difference in survival' },
        { term: '911', definition: 'The emergency phone number in the United States to call for police, fire, or ambulance help' },
        { term: 'bleeding', definition: 'When blood comes out of the body through a cut or wound; serious bleeding can be life-threatening' },
        { term: 'ambulance', definition: 'A special vehicle equipped with medical supplies that takes injured or sick people to the hospital' },
      ],
      patientCounselingPoints: [
        'Always call 911 if someone is seriously hurt -- do not try to drive them to the hospital yourself',
        'Do not move someone who may have a neck or back injury unless they are in immediate danger',
        'Apply firm pressure to any bleeding wound with a clean cloth',
        'Wear your seatbelt every time you ride in a car -- it is the best way to prevent serious injury',
        'Wear helmets when biking, skating, or playing contact sports',
      ],
    },

    2: {
      level: 2,
      summary: 'Trauma assessment follows a systematic approach: the primary survey (ABCDE) identifies and treats immediately life-threatening conditions, followed by a secondary survey for a complete head-to-toe examination.',
      explanation: `## Trauma Assessment Overview

Trauma is the leading cause of death in people under 45 years old. Managing a trauma patient requires a structured, systematic approach to ensure nothing life-threatening is missed.

### The Primary Survey (ABCDE)

The primary survey is the first assessment done on every trauma patient. It follows the letters ABCDE and addresses the most life-threatening problems first:

**A -- Airway (with Cervical Spine Protection)**
- Is the patient talking? If yes, the airway is open
- Look in the mouth for blood, vomit, broken teeth, or swelling
- The neck must be kept still (immobilized) until a spinal injury is ruled out
- If the airway is blocked, it must be cleared immediately

**B -- Breathing**
- Expose the chest and look for equal chest movement
- Listen to both lungs with a stethoscope
- Feel for broken ribs or air under the skin (crepitus)
- Life-threatening findings: tension pneumothorax (collapsed lung under pressure), open chest wound, flail chest

**C -- Circulation (with Hemorrhage Control)**
- Check pulse rate and blood pressure
- Look for sources of bleeding and apply direct pressure
- Signs of shock: fast heart rate, low blood pressure, pale/cool skin, confusion
- Start IV fluids and blood products if needed

**D -- Disability (Neurological Status)**
- Check the Glasgow Coma Scale (GCS) -- a scoring system from 3 to 15 measuring eye opening, verbal response, and motor response
- Check pupil size and reactivity
- GCS of 8 or less means the patient cannot protect their own airway

**E -- Exposure/Environment**
- Remove all clothing to examine the entire body
- Log-roll the patient to check the back
- Prevent hypothermia -- cover with warm blankets

### The Secondary Survey

After the primary survey is complete and life threats are addressed, a thorough head-to-toe examination is performed:

- **Head:** Scalp wounds, skull fractures, facial injuries
- **Neck:** Tenderness, tracheal position, jugular vein distension
- **Chest:** Heart sounds, rib fractures, lung sounds
- **Abdomen:** Tenderness, rigidity, distension
- **Pelvis:** Stability (only compress once)
- **Extremities:** Fractures, dislocations, pulses
- **Back:** Log-roll to examine for injuries
- **Neurological:** Full neurological exam including sensation and movement

### Glasgow Coma Scale (GCS)

| Component | Response | Score |
|-----------|----------|-------|
| Eye Opening | Spontaneous | 4 |
| | To voice | 3 |
| | To pain | 2 |
| | None | 1 |
| Verbal | Oriented | 5 |
| | Confused | 4 |
| | Inappropriate words | 3 |
| | Incomprehensible sounds | 2 |
| | None | 1 |
| Motor | Obeys commands | 6 |
| | Localizes pain | 5 |
| | Withdraws from pain | 4 |
| | Abnormal flexion | 3 |
| | Extension | 2 |
| | None | 1 |

**Total GCS ranges from 3 (worst) to 15 (best)**

### Mechanism of Injury

Understanding how the injury occurred helps predict what injuries to expect:

- **Head-on car crash:** Chest, abdomen, lower extremity injuries
- **Side-impact crash:** Lateral chest, pelvis, spleen/liver injuries
- **Fall from height:** Calcaneal (heel) fractures, spinal compression fractures
- **Pedestrian struck:** Lower extremity, pelvis, head injuries (Waddell triad in children)
- **Penetrating trauma:** Follow the trajectory to predict injured organs`,
      keyTerms: [
        { term: 'primary survey', definition: 'The initial rapid assessment (ABCDE) of a trauma patient designed to find and treat immediately life-threatening conditions' },
        { term: 'secondary survey', definition: 'A thorough head-to-toe physical examination performed after the primary survey to identify all injuries' },
        { term: 'Glasgow Coma Scale (GCS)', definition: 'A scoring system from 3-15 that measures level of consciousness by testing eye opening, verbal response, and motor response' },
        { term: 'mechanism of injury', definition: 'How the injury occurred (e.g., car crash, fall, gunshot), which helps predict the pattern and severity of injuries' },
        { term: 'hemorrhage', definition: 'Medical term for bleeding; the most common preventable cause of death in trauma' },
        { term: 'pneumothorax', definition: 'A collapsed lung caused by air leaking into the space between the lung and chest wall' },
        { term: 'shock', definition: 'A life-threatening condition where the body is not getting enough blood flow, often due to severe bleeding' },
        { term: 'cervical spine immobilization', definition: 'Keeping the neck perfectly still to prevent further damage if there is a possible spinal injury' },
      ],
      clinicalNotes: 'The primary survey should take less than 2 minutes. Any life-threatening finding must be addressed immediately before moving to the next letter. The secondary survey is only performed after the primary survey is complete and the patient is stabilized.',
    },

    3: {
      level: 3,
      summary: 'Advanced Trauma Life Support (ATLS) provides a standardized algorithmic approach to trauma management. Key concepts include damage control surgery, hemorrhage classification (Classes I-IV), the FAST exam for intra-abdominal bleeding, and systematic TBI and spinal cord injury management.',
      explanation: `## Advanced Trauma Life Support (ATLS)

ATLS is the gold standard trauma management protocol developed by the American College of Surgeons. It provides a systematic, reproducible approach to trauma care that prioritizes treatment of the greatest threat to life first.

### Core ATLS Principles

1. **Treat the greatest threat to life first** -- Airway obstruction kills faster than inability to breathe, which kills faster than blood loss
2. **A definitive diagnosis is not necessary** -- Treat the clinical problem, not the diagnosis
3. **Lack of a definitive diagnosis should never impede treatment**
4. **A detailed history is not essential** -- Use the AMPLE mnemonic:
   - **A**llergies
   - **M**edications
   - **P**ast medical/surgical history
   - **L**ast meal
   - **E**vents surrounding the injury

### Hemorrhage Classification

| Class | Blood Loss | Heart Rate | Blood Pressure | Mental Status | Fluid Replacement |
|-------|-----------|------------|----------------|---------------|-------------------|
| I | <750 mL (<15%) | <100 | Normal | Slightly anxious | Crystalloid |
| II | 750-1500 mL (15-30%) | 100-120 | Normal | Anxious | Crystalloid |
| III | 1500-2000 mL (30-40%) | 120-140 | Decreased | Confused | Crystalloid + Blood |
| IV | >2000 mL (>40%) | >140 | Decreased | Lethargic | Crystalloid + Blood |

**Key point:** Blood pressure does not drop until Class III hemorrhage (30% blood volume lost). Tachycardia is often the earliest sign.

### FAST Exam (Focused Assessment with Sonography in Trauma)

Bedside ultrasound to detect free fluid (blood) in the abdomen and pericardium:

- **Right upper quadrant (RUQ):** Morrison's pouch (hepatorenal space) -- most sensitive for free fluid
- **Left upper quadrant (LUQ):** Splenorenal recess
- **Suprapubic:** Pouch of Douglas (females) or rectovesical space (males)
- **Subxiphoid:** Pericardial effusion/tamponade

**Extended FAST (eFAST):** Also evaluates for pneumothorax and hemothorax by examining the anterior chest for absent lung sliding.

**Sensitivity:** ~85-96% for detecting >200 mL free fluid in the abdomen; lower sensitivity for solid organ injury without free fluid.

### Damage Control Surgery

When a patient is too physiologically compromised for definitive repair, damage control surgery is employed:

**Phase 1: Operating Room**
- Stop hemorrhage (packing, ligation, shunting)
- Control contamination (staple off bowel injuries)
- Temporary abdominal closure

**Phase 2: ICU Resuscitation**
- Correct the "lethal triad": hypothermia, acidosis, coagulopathy
- Warm the patient aggressively
- Correct coagulopathy with blood products
- Optimize hemodynamics

**Phase 3: Definitive Repair**
- Return to OR in 24-72 hours when physiology is normalized
- Perform definitive repairs of all injuries
- Fascial closure when possible

### Traumatic Brain Injury (TBI)

**Classification by GCS:**
- Mild TBI: GCS 13-15
- Moderate TBI: GCS 9-12
- Severe TBI: GCS 3-8 (requires intubation)

**Intracranial Pressure (ICP) Management:**
- Normal ICP: 5-15 mmHg
- Treatment threshold: ICP >22 mmHg
- Cerebral Perfusion Pressure (CPP) = MAP - ICP
- Target CPP: 60-70 mmHg

**Signs of Herniation:**
- Cushing triad: hypertension, bradycardia, irregular respirations
- Unilateral dilated ("blown") pupil -- ipsilateral to the lesion
- Decerebrate or decorticate posturing
- Emergency treatment: hyperventilate to PaCO2 30-35 mmHg, mannitol or hypertonic saline

**Common TBI Patterns:**
- **Epidural hematoma:** Classically from middle meningeal artery tear; "lucid interval" followed by rapid deterioration; lens-shaped on CT
- **Subdural hematoma:** Bridging vein tear; crescent-shaped on CT; common in elderly and anticoagulated patients
- **Subarachnoid hemorrhage (traumatic):** Blood in the sulci; associated with contusion
- **Diffuse axonal injury:** Shearing of axons from rotational acceleration; petechial hemorrhages at grey-white junction

### Spinal Cord Injury

**Spinal Cord Injury Levels and Expected Function:**

| Level | Motor Function | Key Muscle |
|-------|---------------|------------|
| C3-C5 | Diaphragm (breathing) | Diaphragm |
| C5 | Elbow flexion | Biceps |
| C6 | Wrist extension | Wrist extensors |
| C7 | Elbow extension | Triceps |
| C8 | Finger flexion | Finger flexors |
| T1 | Finger abduction | Hand intrinsics |
| T6-T12 | Trunk stability | Abdominals |
| L2 | Hip flexion | Iliopsoas |
| L3 | Knee extension | Quadriceps |
| L4 | Ankle dorsiflexion | Tibialis anterior |
| L5 | Great toe extension | EHL |
| S1 | Ankle plantarflexion | Gastrocnemius |

**Incomplete Spinal Cord Syndromes:**
- **Central cord:** Upper extremity weakness > lower (hyperextension injury in elderly with stenosis)
- **Anterior cord:** Loss of motor and pain/temperature; preserved proprioception
- **Brown-Sequard:** Ipsilateral motor/proprioception loss, contralateral pain/temperature loss (hemisection)
- **Cauda equina:** Saddle anesthesia, urinary retention, lower extremity weakness`,
      keyTerms: [
        { term: 'ATLS', definition: 'Advanced Trauma Life Support; a standardized protocol from the American College of Surgeons for systematic trauma assessment and management' },
        { term: 'FAST exam', definition: 'Focused Assessment with Sonography in Trauma; a bedside ultrasound protocol to detect free fluid in the abdomen and pericardium' },
        { term: 'damage control surgery', definition: 'A staged surgical approach for severely injured patients: stop bleeding and contamination first, stabilize in ICU, then return for definitive repair' },
        { term: 'lethal triad', definition: 'The combination of hypothermia, acidosis, and coagulopathy that creates a deadly cycle in trauma patients' },
        { term: 'intracranial pressure (ICP)', definition: 'The pressure inside the skull; elevated ICP from brain swelling or bleeding can cause brain herniation and death' },
        { term: 'cerebral perfusion pressure (CPP)', definition: 'The net pressure gradient driving blood flow to the brain; calculated as MAP minus ICP; target is 60-70 mmHg' },
        { term: 'herniation', definition: 'Brain tissue being pushed through openings in the skull due to increased intracranial pressure; a neurosurgical emergency' },
        { term: 'epidural hematoma', definition: 'Bleeding between the skull and the dura mater, classically from middle meningeal artery tear; lens-shaped on CT' },
        { term: 'Brown-Sequard syndrome', definition: 'Hemisection of the spinal cord resulting in ipsilateral motor/proprioception loss and contralateral pain/temperature loss' },
        { term: 'AMPLE history', definition: 'A mnemonic for focused trauma history: Allergies, Medications, Past history, Last meal, Events surrounding injury' },
      ],
      clinicalNotes: `Key clinical pearls for ATLS management:

1. The FAST exam has limitations: it cannot detect retroperitoneal hemorrhage and has reduced sensitivity in early presentations with small amounts of fluid.
2. Pelvic fractures can cause massive hemorrhage (>2L); apply a pelvic binder before imaging if pelvic instability is suspected.
3. Never perform a secondary survey until the primary survey is complete and all life threats are addressed.
4. In TBI, avoid hypotension (SBP <90) and hypoxia (SpO2 <90%) -- even a single episode doubles mortality.
5. Spinal cord injury above C3-C5 compromises diaphragm function and requires immediate ventilatory support.`,
    },

    4: {
      level: 4,
      summary: 'Advanced trauma resuscitation involves massive transfusion protocols (1:1:1 ratio), tranexamic acid (TXA) based on CRASH-2 evidence, permissive hypotension strategies, and consideration of resuscitative thoracotomy and REBOA for non-compressible torso hemorrhage.',
      explanation: `## Advanced Trauma Resuscitation

### Massive Transfusion Protocol (MTP)

Massive transfusion is defined as transfusion of >=10 units pRBCs in 24 hours, or replacement of the patient's entire blood volume.

**1:1:1 Ratio (PROPPR Trial Evidence)**
The Pragmatic Randomized Optimal Platelet and Plasma Ratios (PROPPR) trial compared 1:1:1 (platelets:plasma:pRBCs) vs 1:1:2 ratios:
- 1:1:1 showed improved hemostasis and trend toward decreased 24-hour mortality
- More patients in the 1:1:1 group achieved hemostasis (86% vs 78%, p=0.006)
- No difference in 30-day mortality but 1:1:1 is now the standard approach
- Activation criteria: Assessment of Blood Consumption (ABC) score >= 2, or clinical judgment

**MTP Activation Criteria (ABC Score):**
- Penetrating mechanism (+1)
- Systolic BP <= 90 mmHg at ED arrival (+1)
- Heart rate >= 120 at ED arrival (+1)
- Positive FAST exam (+1)
- Score >= 2 activates MTP (sensitivity 75%, specificity 86%)

**MTP Cooler Contents (typical):**
- Round 1: 6 units pRBCs, 6 units FFP, 1 apheresis platelet
- Subsequent rounds: Same ratio
- Goal: Fibrinogen >150 mg/dL, platelets >50K, INR <1.5
- Adjuncts: Calcium replacement (citrate chelation causes hypocalcemia), cryoprecipitate for fibrinogen <150

### Tranexamic Acid (TXA) -- CRASH-2 Evidence

The CRASH-2 trial (2010) was a landmark RCT of 20,211 patients across 274 hospitals in 40 countries:

**Key Findings:**
- TXA reduced all-cause mortality: 14.5% vs 16.0% (RR 0.91, p=0.0035)
- Reduction in death due to bleeding: 4.9% vs 5.7% (RR 0.85, p=0.0077)
- **Critical timing:** Benefit only when given within 3 hours of injury
- TXA given >3 hours after injury INCREASED mortality (4.4% vs 3.1%, p=0.004)
- No increase in thromboembolic events

**Dosing Protocol:**
- 1 gram IV over 10 minutes within 3 hours of injury
- Followed by 1 gram IV infusion over 8 hours

**MATTERs Study (military):** Confirmed TXA benefit in combat trauma; even greater benefit in patients receiving massive transfusion.

### Permissive Hypotension

The concept of tolerating lower-than-normal blood pressures during active hemorrhage to prevent "popping the clot":

**Rationale:**
- Aggressive crystalloid resuscitation dilutes clotting factors
- Elevated blood pressure dislodges forming clots
- Crystalloid worsens the lethal triad (hypothermia, acidosis, coagulopathy)
- Excess crystalloid causes abdominal compartment syndrome

**Target Blood Pressures:**
- Penetrating torso trauma: MAP 50 mmHg or SBP 60-70 mmHg until surgical hemorrhage control
- Blunt trauma: MAP 50 mmHg or SBP 80-90 mmHg
- **Exception: TBI patients** -- Target SBP >= 110 mmHg (hypotension doubles TBI mortality)

**Evidence:**
- Bickell et al. (1994): Delayed resuscitation in penetrating torso trauma improved survival (70% vs 62%, p=0.04)
- PROPPR: Supports limiting crystalloid; early plasma and platelets preferred

### Resuscitative Thoracotomy (RT)

Emergency department thoracotomy for patients in extremis:

**Indications:**
- **Penetrating thoracic trauma** with witnessed cardiac arrest or vital signs lost in ED
  - Survival rates: 10-15% for stab wounds with tamponade (best outcomes)
  - Survival: 5-10% for GSW to chest
  - Survival: 1-2% for GSW to abdomen
- **Blunt trauma** with loss of vitals in the ED (NOT prehospital arrest)
  - Survival: <1-2%

**Contraindications:**
- Blunt trauma with prehospital cardiac arrest (survival essentially 0%)
- Penetrating trauma with >15 minutes of CPR without response
- Asystole without pericardial tamponade

**Procedure Goals:**
1. Release pericardial tamponade (pericardiotomy)
2. Control cardiac hemorrhage (cardiorrhaphy)
3. Cross-clamp the descending aorta (redistribute blood to heart and brain)
4. Control pulmonary hilar hemorrhage (hilar cross-clamp or pulmonary tractotomy)
5. Internal cardiac massage

### REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta)

A less-invasive alternative to resuscitative thoracotomy for non-compressible torso hemorrhage:

**Concept:** A balloon catheter is placed via the femoral artery and inflated in the aorta to occlude flow below the diaphragm.

**Aortic Zones:**
- **Zone 1:** Between left subclavian and celiac trunk -- for abdominal/pelvic hemorrhage
- **Zone 2:** Between celiac trunk and lowest renal artery -- **AVOID (visceral ischemia)**
- **Zone 3:** Below lowest renal artery -- for pelvic hemorrhage

**Evidence:**
- AORTA registry: Observational data suggests hemodynamic improvement
- UK-REBOA trial: Showed no survival benefit and potential harm in blunt trauma
- AAST AORTA-2: Ongoing trial for definitive evidence
- Current use: Bridge to definitive hemorrhage control; consider in centers with expertise

**Complications:**
- Distal ischemia (limb, renal, mesenteric)
- Reperfusion injury upon balloon deflation
- Aortic injury
- Access site complications

### Hemorrhage Control Adjuncts

**Tourniquet Use:**
- Recommended for extremity hemorrhage not controlled by direct pressure
- Apply high and tight; note application time
- Effective in military (TCCC) and civilian settings
- Conversion to definitive control within 2 hours when possible

**Junctional Hemorrhage:**
- Axillary, inguinal, and cervical wounds difficult to tourniquet
- Wound packing with hemostatic gauze (QuikClot, Celox)
- Junctional tourniquets (JETT, SAM Junctional Tourniquet)

**Resuscitative Endovascular Balloon Occlusion:**
- See REBOA section above
- Bridges unstable patients to OR for definitive hemorrhage control`,
      keyTerms: [
        { term: 'massive transfusion protocol (MTP)', definition: 'A systematic protocol for delivering large volumes of blood products in a balanced ratio (1:1:1 pRBC:FFP:platelets) to patients with life-threatening hemorrhage' },
        { term: 'PROPPR trial', definition: 'Pragmatic Randomized Optimal Platelet and Plasma Ratios trial; demonstrated that 1:1:1 ratio of platelets:plasma:pRBCs improved hemostasis in massively bleeding trauma patients' },
        { term: 'tranexamic acid (TXA)', definition: 'An antifibrinolytic agent that inhibits plasminogen activation; shown in CRASH-2 to reduce mortality when given within 3 hours of traumatic hemorrhage' },
        { term: 'CRASH-2 trial', definition: 'Clinical Randomisation of an Antifibrinolytic in Significant Haemorrhage; landmark RCT of 20,211 patients showing TXA reduces trauma mortality when given within 3 hours' },
        { term: 'permissive hypotension', definition: 'A resuscitation strategy tolerating lower-than-normal blood pressures (SBP 80-90 for blunt, 60-70 for penetrating) to avoid disrupting clot formation, contraindicated in TBI' },
        { term: 'resuscitative thoracotomy', definition: 'Emergency surgical opening of the chest to release tamponade, control hemorrhage, cross-clamp the aorta, or perform internal cardiac massage in patients in extremis' },
        { term: 'REBOA', definition: 'Resuscitative Endovascular Balloon Occlusion of the Aorta; a catheter-based technique to occlude aortic flow above the site of non-compressible torso hemorrhage' },
        { term: 'ABC score', definition: 'Assessment of Blood Consumption score; uses 4 parameters (mechanism, SBP, HR, FAST) to predict need for massive transfusion' },
        { term: 'lethal triad', definition: 'The deadly combination of hypothermia, acidosis, and coagulopathy that accelerates hemorrhagic death in trauma; the target of damage control resuscitation' },
      ],
      clinicalNotes: `Advanced trauma resuscitation pearls:

1. **TXA timing is critical:** The CRASH-2 data clearly shows benefit within 3 hours and HARM after 3 hours. Give TXA early or not at all. Consider prehospital administration.

2. **Calcium in massive transfusion:** Citrate in banked blood chelates calcium. Ionized calcium <1.0 mmol/L impairs coagulation and cardiac contractility. Empirically give 1g calcium chloride per 4 units pRBCs.

3. **Permissive hypotension does NOT apply to TBI:** A single episode of SBP <90 doubles mortality in TBI. These patients need SBP >= 110 mmHg even during active hemorrhage.

4. **Resuscitative thoracotomy:** Know the survival statistics. The best outcomes are penetrating cardiac injuries with tamponade (up to 35% survival for stab wounds). Blunt trauma with prehospital arrest has near-zero survival.

5. **REBOA is a bridge, not definitive treatment.** Balloon occlusion time should be minimized (<60 min Zone 1) to prevent distal ischemia. Partial REBOA may extend safe occlusion time.

6. **Tourniquets save lives:** The military experience (TCCC) conclusively showed tourniquet use reduces extremity hemorrhage death. Apply early and high. Nerve damage from tourniquet is rare; death from hemorrhage is not.

7. **Pelvic binder:** For hemodynamically unstable patients with suspected pelvic fracture, apply at the level of the greater trochanters. Reduces pelvic volume and tamponades venous bleeding.`,
    },

    5: {
      level: 5,
      summary: 'Cutting-edge trauma research includes whole blood resuscitation, viscoelastic hemostatic assays (TEG/ROTEM) for goal-directed transfusion, damage control resuscitation paradigms, polytrauma severity scoring (ISS, TRISS, RTS), and evolving trauma systems research on regionalization and verification.',
      explanation: `## Advanced Trauma Research and Evidence

### Whole Blood Resuscitation

The concept of returning to whole blood (WB) resuscitation represents a paradigm shift back toward military practices:

**Low-Titer Group O Whole Blood (LTOWB):**
- Contains all blood components in physiologic ratios
- Avoids dilution inherent in component therapy (each unit of pRBC, FFP, or platelets is in ~300mL additive solution)
- Military data (Spinella et al.) showed improved survival with fresh whole blood vs component therapy
- Civilian adoption: Growing number of Level I centers now stock LTOWB
- Walking blood bank: Used in austere environments when banked blood unavailable

**Evidence:**
- STOIC Study (2023): Prehospital LTOWB vs standard of care in hemorrhagic shock
- Pittsburgh whole blood program: Demonstrated feasibility in civilian setting
- Component therapy approximates whole blood but requires 3:1 volume to match hematocrit and factor levels
- Cold-stored LTOWB (14-21 day shelf life) vs warm fresh whole blood

**Challenges:**
- Supply chain logistics (Group O, low anti-A/B titer donors)
- Shorter shelf life than components
- Male-only donors preferred (to avoid TRALI risk from multiparous female donors)
- Blood bank regulatory considerations

### Viscoelastic Hemostatic Assays (TEG/ROTEM)

Point-of-care testing that provides a comprehensive picture of the coagulation cascade in real time:

**Thromboelastography (TEG) Parameters:**
- **R-time (reaction time):** Time to initial fibrin formation (clotting factor function)
- **K-time:** Time from initial fibrin to fixed clot strength (fibrinogen/platelet function)
- **Alpha angle:** Rate of clot strengthening (fibrinogen function)
- **MA (maximum amplitude):** Maximum clot strength (platelet function, ~80% contribution; fibrinogen ~20%)
- **LY30 (lysis at 30 min):** Percent clot lysis at 30 minutes (fibrinolysis)

**ROTEM (Rotational Thromboelastometry) Parameters:**
- **CT (clotting time):** Equivalent to TEG R-time
- **CFT (clot formation time):** Equivalent to TEG K-time
- **MCF (maximum clot firmness):** Equivalent to TEG MA
- **ML (maximum lysis):** Fibrinolysis assessment

**Goal-Directed Transfusion Based on TEG/ROTEM:**
| Abnormality | TEG Finding | ROTEM Finding | Treatment |
|-------------|-------------|---------------|-----------|
| Factor deficiency | Prolonged R | Prolonged CT (EXTEM) | FFP or PCC |
| Fibrinogen deficit | Decreased alpha, low K | Low MCF on FIBTEM | Cryoprecipitate or fibrinogen concentrate |
| Platelet dysfunction | Low MA | Low MCF (EXTEM - FIBTEM) | Platelet transfusion |
| Hyperfibrinolysis | Elevated LY30 (>3%) | Elevated ML | TXA or aminocaproic acid |

**Evidence for TEG/ROTEM-guided resuscitation:**
- iTACTIC trial (2020): Viscoelastic-guided resuscitation did not improve outcomes over empiric MTP
- ITACTIC criticism: Protocol was complex; real-world use may differ
- Multiple observational studies suggest reduced blood product usage and improved mortality
- European Trauma Guidelines (2023): Recommend viscoelastic testing to guide hemostatic therapy (Grade 1C)

### Damage Control Resuscitation (DCR)

DCR is an integrated approach that extends damage control surgery principles to the entire resuscitation:

**Core Principles:**
1. **Permissive hypotension** until hemorrhage control
2. **Minimization of crystalloid** (limit to 1-2L; prefer blood products)
3. **Balanced transfusion ratios** (1:1:1 or whole blood)
4. **Hemostatic resuscitation** (early TXA, calcium, fibrinogen optimization)
5. **Aggressive rewarming** (target normothermia)
6. **Rapid hemorrhage control** (damage control surgery, IR, or REBOA)
7. **Correction of acidosis** through improved perfusion, not bicarbonate

**Acute Traumatic Coagulopathy (ATC) / Trauma-Induced Coagulopathy (TIC):**
- Present in 25-35% of severely injured patients on ED arrival
- Independent predictor of mortality (4-fold increase)
- Pathophysiology: Activated protein C pathway activation, hyperfibrinolysis, endothelial glycocalyx shedding, platelet dysfunction
- Distinct from DIC: ATC has an anticoagulant/hyperfibrinolytic phenotype early, transitioning to prothrombotic state later
- Endotheliopathy of trauma: Emerging concept linking tissue injury, shock, and sympathoadrenal activation to glycocalyx degradation and autoheparinization

### Polytrauma Severity Scoring

**Injury Severity Score (ISS):**
- Based on the Abbreviated Injury Scale (AIS)
- Divide body into 6 regions: head/neck, face, chest, abdomen, extremities, external
- Take the AIS score (1-6) for the three most severely injured regions
- ISS = sum of squares of the three highest AIS scores
- Range: 1-75 (if any AIS = 6, ISS automatically = 75)
- ISS >= 16 defines "major trauma"
- Limitation: Cannot score two injuries in the same region

**New Injury Severity Score (NISS):**
- Same as ISS but uses the three highest AIS scores regardless of body region
- Better predictor of mortality than ISS, especially for penetrating trauma

**Revised Trauma Score (RTS):**
- Based on GCS, systolic blood pressure, and respiratory rate
- RTS = 0.9368(GCS coded value) + 0.7326(SBP coded value) + 0.2908(RR coded value)
- Range: 0-7.84
- Used for triage and outcome prediction

**TRISS (Trauma and Injury Severity Score):**
- Combines ISS, RTS, patient age, and mechanism (blunt vs penetrating)
- Calculates probability of survival
- Ps = 1 / (1 + e^(-b))
- where b = b0 + b1(RTS) + b2(ISS) + b3(Age index)
- Used for benchmarking trauma center performance (W-statistic, M-statistic, Z-statistic)

**Other Scoring Systems:**
- **APACHE II/IV:** ICU-specific, not trauma-specific
- **SOFA score:** Sequential Organ Failure Assessment; tracks organ dysfunction over time
- **BASE deficit:** Arterial base deficit >6 mEq/L correlates with hemorrhagic shock severity and transfusion needs

### Trauma Systems Research

**Trauma Center Verification (ACS):**
- Level I: Comprehensive, 24/7 in-house attending; research requirement; minimum volume (1200 admissions or 240 major trauma/year)
- Level II: Comprehensive care; may not have all subspecialties; education requirement
- Level III: Prompt assessment, resuscitation, stabilization; transfer agreements with Level I/II
- Level IV: Initial evaluation and stabilization; transfer protocols
- Level V: Initial evaluation and transfer; typically rural areas

**Regionalization Evidence:**
- MacKenzie et al. (2006): Mortality 25% lower at Level I vs non-trauma centers
- Nathens et al. (2000): In-hospital mortality decreased from 22% to 10% with organized trauma systems
- Inclusive vs exclusive systems: Inclusive systems (all hospitals participate at their level) show better population outcomes

**Prehospital Controversies:**
- Scoop and run vs stay and play: Urban penetrating trauma favors rapid transport
- Helicopter EMS: Benefit primarily for rural trauma with long transport times
- Prehospital intubation: RSI in the field -- evidence is mixed; skill maintenance is key concern
- Prehospital blood products: PAMPER trial showed improved 30-day survival with prehospital plasma

**Emerging Research:**
- Xenotransfusion and artificial blood substitutes
- Suspended animation (Emergency Preservation and Resuscitation -- EPR): Rapid cooling to 10-15 degrees C with cold saline flush for refractory cardiac arrest from hemorrhage
- Valproic acid as a histone deacetylase inhibitor for hemorrhagic shock
- Complement inhibition (eculizumab) for post-traumatic organ failure
- Machine learning for trauma outcome prediction and resource allocation
- Point-of-care genomic testing for individualized resuscitation`,
      keyTerms: [
        { term: 'LTOWB', definition: 'Low-Titer Group O Whole Blood; contains all blood components in physiologic ratios, avoiding the dilution inherent in component therapy; increasingly adopted by civilian trauma centers' },
        { term: 'TEG (thromboelastography)', definition: 'A viscoelastic hemostatic assay providing real-time assessment of the entire coagulation cascade from initial clot formation through fibrinolysis, enabling goal-directed transfusion therapy' },
        { term: 'ROTEM', definition: 'Rotational thromboelastometry; similar to TEG but with different methodology; provides CT, CFT, MCF, and ML parameters for coagulation assessment' },
        { term: 'acute traumatic coagulopathy (ATC)', definition: 'An endogenous coagulopathy present in 25-35% of severely injured patients on arrival; driven by activated protein C, hyperfibrinolysis, and glycocalyx shedding; 4-fold increase in mortality' },
        { term: 'damage control resuscitation (DCR)', definition: 'An integrated approach combining permissive hypotension, balanced transfusion, crystalloid limitation, hemostatic adjuncts, and damage control surgery into a unified resuscitation strategy' },
        { term: 'Injury Severity Score (ISS)', definition: 'An anatomical scoring system (1-75) calculated from the sum of squares of the three highest AIS regional scores; ISS >= 16 defines major trauma' },
        { term: 'TRISS', definition: 'Trauma and Injury Severity Score; combines ISS, RTS, age, and mechanism to calculate probability of survival; used for trauma center benchmarking and quality improvement' },
        { term: 'endotheliopathy of trauma', definition: 'An emerging concept linking tissue injury, shock, and sympathoadrenal activation to endothelial glycocalyx degradation, autoheparinization, and subsequent coagulation derangement' },
        { term: 'Emergency Preservation and Resuscitation (EPR)', definition: 'Experimental technique of inducing profound hypothermia (10-15 degrees C) via cold aortic flush in patients with refractory hemorrhagic cardiac arrest to buy time for surgical repair' },
        { term: 'PAMPER trial', definition: 'Prehospital Air Medical Plasma trial; demonstrated improved 30-day survival with prehospital thawed plasma administration in hemorrhagic shock patients transported by helicopter' },
      ],
      analogies: [
        'Whole blood resuscitation is like putting the original engine back in a car instead of trying to rebuild it from individual parts -- the components work together best when they are in their natural proportions.',
        'TEG/ROTEM is like getting a real-time movie of the clotting process instead of a single snapshot -- you see the entire story from clot formation through breakdown.',
        'The ISS scoring system is like grading a test where only your three worst mistakes count, and the penalty increases exponentially -- a single devastating injury dominates the score.',
      ],
      clinicalNotes: `Expert-level trauma management pearls:

1. **Whole blood vs components:** While the evidence is building for LTOWB, most civilian centers still use component therapy. The key advantage of whole blood is volume efficiency -- 1 unit WB provides the equivalent of 1 pRBC + 1 FFP in a single bag with lower total volume.

2. **TEG/ROTEM interpretation:** The LY30/ML parameter is critical. Hyperfibrinolysis (LY30 >3%) indicates the need for TXA and is associated with very high mortality. A "flat-line" TEG (no clot formation) indicates complete coagulopathy and extremely poor prognosis.

3. **ISS limitations:** The ISS cannot capture two injuries in the same body region. A patient with bilateral femur fractures and a splenic laceration would have the same ISS as one with a single femur fracture and splenic laceration. The NISS addresses this limitation.

4. **Base deficit as a resuscitation endpoint:** Serial lactate and base deficit measurements guide adequacy of resuscitation. Failure to clear lactate within 24 hours is associated with >50% mortality in hemorrhagic shock.

5. **Trauma center verification:** The ACS verification process requires rigorous PIPS (Performance Improvement and Patient Safety) programs. Outcomes data should benchmark against TQIP (Trauma Quality Improvement Program) national norms.

6. **EPR (suspended animation):** The University of Maryland EPR trial for penetrating trauma with refractory arrest is the first human trial of this approach. Results are eagerly anticipated by the trauma community.

7. **The future:** Machine learning models incorporating real-time physiologic data, genomic information, and imaging are being developed to individualize resuscitation strategies. The era of precision trauma resuscitation is approaching.`,
    },
  },

  media: [
    {
      id: 'trauma-primary-survey-abcde',
      type: 'diagram',
      filename: 'trauma-primary-survey-abcde.svg',
      title: 'Primary Survey ABCDE Algorithm',
      description: 'Flow diagram of the ATLS primary survey approach',
    },
    {
      id: 'hemorrhage-classification-table',
      type: 'diagram',
      filename: 'hemorrhage-classification.svg',
      title: 'Hemorrhage Classification (Classes I-IV)',
      description: 'Table showing vital sign changes and treatment for each hemorrhage class',
    },
    {
      id: 'fast-exam-views',
      type: 'diagram',
      filename: 'fast-exam-views.svg',
      title: 'FAST Exam Sonographic Views',
      description: 'Four standard views of the FAST exam with anatomical landmarks',
    },
    {
      id: 'tbi-ct-patterns',
      type: 'image',
      filename: 'tbi-ct-patterns.png',
      title: 'CT Patterns in TBI',
      description: 'Epidural (lens), subdural (crescent), SAH, and DAI patterns on CT',
    },
    {
      id: 'reboa-zones',
      type: 'diagram',
      filename: 'reboa-aortic-zones.svg',
      title: 'REBOA Aortic Zones',
      description: 'Diagram showing Zone 1, 2, and 3 of the aorta for balloon placement',
    },
    {
      id: 'teg-tracing',
      type: 'diagram',
      filename: 'teg-tracing-interpretation.svg',
      title: 'TEG Tracing Interpretation',
      description: 'Normal and abnormal TEG tracings with parameter annotations',
    },
  ],

  citations: [
    {
      id: 'atls-10th-edition',
      type: 'textbook',
      title: 'Advanced Trauma Life Support (ATLS) Student Course Manual, 10th Edition',
      authors: ['American College of Surgeons Committee on Trauma'],
      source: 'American College of Surgeons',
      accessedDate: '2026-01-30',
    },
    {
      id: 'crash2-2010',
      type: 'article',
      title: 'Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage (CRASH-2)',
      authors: ['CRASH-2 Trial Collaborators'],
      source: 'The Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(10)60835-5',
      accessedDate: '2026-01-30',
    },
    {
      id: 'proppr-2015',
      type: 'article',
      title: 'Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients With Severe Trauma',
      authors: ['Holcomb, J.B.', 'Tilley, B.C.', 'Baraniuk, S.', 'et al.'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2015.12',
      accessedDate: '2026-01-30',
    },
    {
      id: 'mackenzie-2006',
      type: 'article',
      title: 'A National Evaluation of the Effect of Trauma-Center Care on Mortality',
      authors: ['MacKenzie, E.J.', 'Rivara, F.P.', 'Jurkovich, G.J.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMsa052049',
      accessedDate: '2026-01-30',
    },
    {
      id: 'bickell-1994',
      type: 'article',
      title: 'Immediate versus Delayed Fluid Resuscitation for Hypotensive Patients with Penetrating Torso Injuries',
      authors: ['Bickell, W.H.', 'Wall, M.J.', 'Pepe, P.E.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJM199410270311701',
      accessedDate: '2026-01-30',
    },
    {
      id: 'pamper-trial-2018',
      type: 'article',
      title: 'Prehospital Plasma during Air Medical Transport in Trauma Patients at Risk for Hemorrhagic Shock',
      authors: ['Sperry, J.L.', 'Guyette, F.X.', 'Brown, J.B.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1802345',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-trauma-primary-survey', targetType: 'topic', relationship: 'related', label: 'Trauma Primary Survey' },
    { targetId: 'emergency-trauma-secondary-survey', targetType: 'topic', relationship: 'related', label: 'Trauma Secondary Survey' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'critical-care-blood-products', targetType: 'topic', relationship: 'related', label: 'Blood Product Transfusion' },
    { targetId: 'specialties-neurology-tbi', targetType: 'topic', relationship: 'related', label: 'Traumatic Brain Injury' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous', 'musculoskeletal', 'integumentary'],
    topics: ['emergency medicine', 'trauma', 'resuscitation', 'ATLS', 'surgery', 'critical care'],
    keywords: [
      'trauma', 'ATLS', 'primary survey', 'secondary survey', 'GCS', 'FAST exam',
      'massive transfusion', 'TXA', 'CRASH-2', 'permissive hypotension', 'REBOA',
      'damage control surgery', 'TBI', 'spinal cord injury', 'hemorrhage', 'ISS', 'TRISS',
      'whole blood', 'TEG', 'ROTEM', 'resuscitative thoracotomy',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default trauma;
