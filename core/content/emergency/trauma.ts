import { EducationalContent } from '../types';

export const traumaContent: EducationalContent = {
  id: 'emergency-trauma',
  type: 'topic',
  name: 'Trauma Management',
  nameEs: 'Trauma',
  alternateNames: ['ATLS', 'Trauma Assessment', 'Multiple Trauma', 'Trauma Care', 'Advanced Trauma Life Support'],
  levels: {
    1: {
      level: 1,
      summary: 'Trauma management is a step-by-step method doctors use to treat people who have been seriously injured, focusing on the most life-threatening problems first.',
      explanation: 'When someone gets badly hurt, doctors follow a special plan to save their life. This plan is called trauma management. It starts with the most important things that keep you alive - breathing and having enough blood flowing through your body. Think of it like fixing a house that has been damaged in a storm - you would fix the roof first to stop rain from coming in, then fix the windows, then worry about the furniture. Doctors do the same thing with your body.\n\nThe first part is called the Primary Survey. Doctors check five things in order:\n\n1. Airway - Can air get to the lungs?\n2. Breathing - Are the lungs working?\n3. Circulation - Is blood moving around the body?\n4. Disability - Can the brain control the body?\n5. Exposure - Check the whole body for injuries\n\nAfter making sure these are okay, they do a more detailed check called the Secondary Survey. They look at every part of the body carefully to find all the injuries.\n\nThere is also something called the "Golden Hour" - this is the first hour after a bad injury. Getting good treatment in this hour gives people the best chance of survival. It is like calling the fire department quickly when there is a small fire - putting it out fast saves more of the house.',
      keyTerms: [
        {
          term: 'Trauma',
          definition: 'A physical injury caused by something outside the body, like a car crash, fall, or being hit by something.'
        },
        {
          term: 'ATLS',
          definition: 'Advanced Trauma Life Support - a step-by-step method that doctors use to treat badly injured people.',
          pronunciation: 'A-T-L-S'
        },
        {
          term: 'Primary Survey',
          definition: 'The first quick check doctors do to find and fix life-threatening problems.'
        },
        {
          term: 'Golden Hour',
          definition: 'The first hour after a serious injury, when getting treatment quickly gives the best chance of survival.'
        },
        {
          term: 'Shock',
          definition: 'When the body cannot get enough blood to important organs, which can be life-threatening.'
        }
      ],
      analogies: [
        'Trauma management is like triage on a battlefield - you treat the most serious injuries first to save lives.',
        'The ABCDE approach is like checking a car before a long trip - you make sure the engine works (circulation), the air intake is clear (airway), and nothing is leaking (blood).',
        'The Golden Hour is like a timer on a bomb - every minute counts, and quick action can save the day.',
        'The Secondary Survey is like a home inspection after a storm - you check every room carefully to find all the damage.'
      ],
      examples: [
        'A person hurt in a car accident is brought to the emergency room. The doctors first check if they can breathe, then check for bleeding, then look for broken bones.',
        'Someone falls off a ladder. The paramedics check their neck and back before moving them, then check for internal injuries.',
        'A construction worker is hit by falling equipment. The trauma team works together - one doctor manages the airway, another checks for bleeding, another prepares for surgery.'
      ],
      patientCounselingPoints: [
        'If you witness a serious injury, call 911 immediately - every minute counts during the Golden Hour.',
        'Do not move someone with a possible neck or back injury unless they are in immediate danger.',
        'Learn CPR - it can save a life while waiting for emergency services to arrive.',
        'Keep a first aid kit in your car and home for minor injuries.'
      ]
    },
    2: {
      level: 2,
      summary: 'Trauma management follows a systematic approach called ATLS, which prioritizes life-threatening injuries using the ABCDE method during primary survey, followed by a comprehensive secondary survey.',
      explanation: 'Trauma management is based on the Advanced Trauma Life Support (ATLS) protocol, developed by the American College of Surgeons. This systematic approach ensures that life-threatening injuries are identified and treated in order of priority. The foundation of ATLS is that the most life-threatening problems are addressed first, regardless of how obvious other injuries may be.\n\n## Primary Survey (ABCDE)\n\nThe primary survey is a rapid assessment to identify and treat immediate threats to life. Each step addresses a potential killer:\n\n**A - Airway with Cervical Spine Protection:**\n- Ensure the airway is patent (open)\n- Protect the cervical spine if there is any risk of injury\n- May require jaw thrust, chin lift, or intubation\n\n**B - Breathing and Ventilation:**\n- Assess chest wall movement and breath sounds\n- Check oxygen saturation\n- Treat tension pneumothorax, open pneumothorax, or massive hemothorax immediately\n\n**C - Circulation with Hemorrhage Control:**\n- Check pulse, blood pressure, and capillary refill\n- Identify and control any major bleeding\n- Establish IV access for fluid resuscitation\n\n**D - Disability (Neurologic Status):**\n- Assess level of consciousness using GCS\n- Check pupil response and limb movement\n- Evaluate for spinal cord injury\n\n**E - Exposure and Environment:**\n- Completely undress the patient to find hidden injuries\n- Keep the patient warm to prevent hypothermia\n\n## Secondary Survey\n\nAfter the primary survey is complete and life threats are managed, a thorough head-to-toe examination is performed. This includes:\n- Complete medical history (using the SAMPLE mnemonic)\n- Physical examination of every body region\n- Diagnostic tests (X-rays, CT scans, lab work)\n- Consulting specialists as needed\n\n## Shock Management\n\nShock is a major cause of death in trauma patients. It occurs when tissues do not receive enough oxygen. The most common type in trauma is hypovolemic shock from blood loss. Treatment includes stopping bleeding and replacing fluids through IV lines.\n\n## The Golden Hour\n\nThis refers to the first 60 minutes after injury. Rapid assessment, resuscitation, and transport to definitive care during this time significantly improves survival outcomes.',
      keyTerms: [
        {
          term: 'ATLS',
          definition: 'Advanced Trauma Life Support - a standardized protocol developed by the American College of Surgeons for managing trauma patients systematically.',
          pronunciation: 'A-T-L-S'
        },
        {
          term: 'Primary Survey',
          definition: 'The initial rapid assessment following ABCDE to identify and treat immediate life-threatening conditions.'
        },
        {
          term: 'Secondary Survey',
          definition: 'A comprehensive head-to-toe evaluation performed after stabilizing the patient to identify all injuries.'
        },
        {
          term: 'Tension Pneumothorax',
          definition: 'A life-threatening condition where air accumulates in the chest cavity, compressing the heart and other lung.',
          pronunciation: 'TEN-shun NOO-mo-THOR-aks'
        },
        {
          term: 'Hypovolemic Shock',
          definition: 'Shock caused by low blood volume, usually from significant blood loss.',
          pronunciation: 'HY-po-vo-LEEM-ik'
        },
        {
          term: 'GCS',
          definition: 'Glasgow Coma Scale - a scoring system used to assess level of consciousness based on eye, verbal, and motor responses.'
        },
        {
          term: 'Intubation',
          definition: 'Placing a tube into the windpipe to maintain an open airway or connect to a ventilator.'
        },
        {
          term: 'Hemorrhage',
          definition: 'Excessive bleeding, either internally or externally.',
          pronunciation: 'HEM-or-ij'
        }
      ],
      analogies: [
        'The primary survey is like a pilot checking critical instruments before takeoff - if the engine or navigation is not working, nothing else matters.',
        'The ABCDE sequence is like debugging code - you check the most critical functions first before moving to details.',
        'The trauma team functions like an orchestra - each person has a specific role, but they must work together in harmony.',
        'The Golden Hour is like a sports halftime - what you do in that brief period can determine the outcome of the whole game.'
      ],
      examples: [
        'A 25-year-old male presents after a motorcycle crash. The primary survey reveals a deviated trachea and absent breath sounds on the right (tension pneumothorax). A needle decompression is performed immediately, saving his life before any X-rays are taken.',
        'A construction worker falls 20 feet and arrives unconscious. The team secures his airway through intubation, assesses breathing with chest tube placement for hemothorax, and identifies a broken femur causing significant blood loss.',
        'A teenage athlete collapses during practice. The ABCDE approach reveals an obstructed airway from a mouthguard, which is removed, restoring breathing.',
        'A car accident victim appears stable initially but develops low blood pressure 30 minutes later - the team recognizes this as "occult shock" from internal bleeding and responds rapidly.'
      ],
      patientCounselingPoints: [
        'Wear your seatbelt every time you are in a vehicle - it is the single most effective way to prevent serious trauma injuries.',
        'If you play contact sports, wear all recommended protective equipment properly.',
        'Never move someone with a possible neck or spine injury unless there is immediate danger like fire or explosion.',
        'Learn basic first aid and CPR - you could save a life before emergency services arrive.',
        'Keep emergency numbers programmed in your phone and know your location when calling.'
      ]
    },
    3: {
      level: 3,
      summary: 'ATLS provides a structured framework for trauma management emphasizing a sequential approach to identify and treat life-threatening conditions, with primary survey focusing onABCDE priorities followed by systematic secondary evaluation and definitive management.',
      explanation: 'Advanced Trauma Life Support (ATLS) is the standard of care for initial assessment and management of trauma patients. The program, developed by the American College of Surgeons Committee on Trauma, teaches a standardized approach that can be applied by any healthcare provider caring for injured patients. The fundamental principle is to treat the greatest threat to life first.\n\n## Primary Survey: The ABCDE Approach\n\n**A - Airway Maintenance with Cervical Spine Protection**\n\nThe first priority is ensuring a patent airway while protecting the cervical spine. In any trauma patient with significant mechanism of injury, assume cervical spine injury until proven otherwise.\n\nIndications for definitive airway (intubation):\n- Apnea or inability to maintain airway\n- Severe head injury with GCS ≤ 8\n- Maxillofacial trauma compromising airway\n- Need for hyperventilation (elevated ICP)\n\n**B - Breathing and Ventilation**\n\nOnce the airway is secure, assess breathing. Life-threatening chest injuries must be identified immediately:\n\n- **Tension pneumothorax**: Unilateral absent breath sounds, hyperresonance, tracheal deviation away from affected side, distended neck veins. Treatment: Immediate needle decompression followed by chest tube.\n\n- **Open pneumothorax**: Sucking chest wound. Treatment: Occlusive dressing taped on three sides (one-way valve).\n\n- **Massive hemothorax**: Shock with absent breath sounds, dullness to percussion. Treatment: Chest tube (≥1500 mL blood or ongoing bleeding ≥200 mL/hour indicates need for thoracotomy).\n\n- **Flail chest**: Paradoxical chest wall movement. Treatment: Pain control, pulmonary toilet, possible mechanical ventilation.\n\n**C - Circulation with Hemorrhage Control**\n\nCirculatory assessment includes evaluating perfusion: mental status, skin color/temperature, pulse, and blood pressure.记住 that patients can lose up to 30% of blood volume before significant hypotension occurs.\n\n- Control external bleeding with direct pressure\n- Establish two large-bore IV lines (16-gauge or larger)\n- Begin fluid resuscitation with crystalloids or blood products\n- Consider vasopressors if fluid alone inadequate\n\n**D - Disability (Neurologic Status)**\n\nRapid neurologic assessment using:\n- **Glasgow Coma Scale**: Eye (1-4), Verbal (1-5), Motor (1-6)\n- **Pupils**: Size, symmetry, reactivity to light\n- **Limb movement**: Check for spinal cord injury signs\n\n**E - Exposure/Environmental Control**\n\nCompletely expose the patient while preventing hypothermia. Trauma patients become hypothermic easily, which worsens coagulopathy and increases mortality. Cut clothes off if necessary, use warming blankets, and administer warmed fluids.\n\n## Secondary Survey\n\nAfter stabilizing life threats, perform a comprehensive history and physical examination.\n\n**History - SAMPLE Mnemonic**:\n- **S**igns and symptoms\n- **A**llergies\n- **M**edications\n- **P**ast medical history\n- **L**ast meal (important for anesthesia)\n- **E**vents leading to injury (mechanism)\n\n**Physical Examination**:\nSystematic head-to-toe evaluation:\n- Head: inspect for lacerations, Battle sign, raccoon eyes\n- Face: check for fractures, eye injuries\n- Neck: evaluate for cervical spine injury\n- Chest: auscultate breath sounds, palpate for crepitus\n- Abdomen: inspect, auscultate, percuss, palpate (assess for tenderness, rigidity)\n- Pelvis: assess stability\n- Perineum: check for blood at urethral meatus, high-riding prostate\n- Rectum: assess sphincter tone, blood, prostate position\n- Back: palpate spine, check for deformity\n- Extremities: assess circulation, sensation, movement, deformity\n\n## Shock Classification and Management\n\n**Hypovolemic Shock** (most common in trauma):\n- Class I: Loss 0-15% blood volume - minimal tachycardia\n- Class II: Loss 15-30% - tachycardia, decreased pulse pressure\n- Class III: Loss 30-40% - significant tachycardia, hypotension, anxiety\n- Class IV: Loss >40% - extreme tachycardia, profound hypotension, lethargy\n\nTreatment: Control hemorrhage (surgical or interventional), replace volume with balanced blood products (1:1:1 plasma:platelets:RBCs in massive transfusion protocol).\n\n**Cardiogenic Shock**: Myocardial contusion, cardiac tamponade (Beck triad: hypotension, JVD, muffled heart sounds). Treatment: Pericardiocentesis for tamponade.\n\n**Obstructive Shock**: Tension pneumothorax, cardiac tamponade.\n\n**Distributive Shock**: Neurogenic shock from spinal cord injury (hypotension without tachycardia, warm extremities).\n\n## Common Trauma Injuries\n\n**Head Trauma**:\n- Concussion: functional disturbance without structural damage\n- Epidural hematoma: lucid interval then rapid deterioration (lens-shaped hematoma)\n- Subdural hematoma: crescent-shaped hematoma, poorer prognosis\n- Intracerebral hemorrhage: direct brain parenchymal injury\n- Diffuse axonal injury: shearing of axons from rapid acceleration/deceleration\n\n**Chest Trauma**:\n- Rib fractures: associated with pneumothorax, hemothorax, pulmonary contusion\n- Pulmonary contusion: develops over hours, causes hypoxia\n- Myocardial contusion: ECG changes, elevated troponin\n- Aortic injury: widened mediastinum on CXR, confirmed by CT angiography\n\n**Abdominal Trauma**:\n- Solid organs (spleen, liver) most commonly injured\n- Hollow viscus injury causes peritonitis\n- Diagnostic peritoneal lavage or FAST scan for rapid assessment\n- CT scan for stable patients\n\n**Fractures**:\n- Open fractures require antibiotics and surgical debridement\n- Pelvic fractures can cause massive hemorrhage\n- Long bone fractures can cause fat embolism syndrome',
      keyTerms: [
        {
          term: 'ATLS',
          definition: 'Advanced Trauma Life Support - standardized trauma care protocol developed by the American College of Surgeons Committee on Trauma, now adopted internationally as the standard of care for initial trauma management.'
        },
        {
          term: 'Primary Survey',
          definition: 'Rapid ABCDE assessment to identify and treat immediate threats to life. Each letter represents a potentially fatal condition that must be addressed before proceeding.'
        },
        {
          term: 'Tension Pneumothorax',
          definition: 'Accumulation of air in the pleural space under pressure, causing collapse of the lung and mediastinal shift that compresses the vena cava and heart, leading to cardiovascular collapse.'
        },
        {
          term: 'Flail Chest',
          definition: 'Fracture of at least three consecutive ribs in at least two places, creating a free-floating segment that moves paradoxically (inward during inspiration, outward during expiration).'
        },
        {
          term: 'Cardiac Tamponade',
          definition: 'Accumulation of fluid in the pericardial space, compressing the heart and impairing filling, leading to decreased cardiac output. Classic Beck triad: hypotension, jugular venous distension, muffled heart sounds.'
        },
        {
          term: 'Epidural Hematoma',
          definition: 'Arterial bleed (usually middle meningeal artery) between dura and skull, typically with biconvex (lens-shaped) appearance on CT. Classic presentation: lucid interval followed by rapid deterioration.'
        },
        {
          term: 'Subdural Hematoma',
          definition: 'Venous bleed (bridging veins) between dura and arachnoid, crescent-shaped on CT, more common than epidural and associated with greater brain injury.'
        },
        {
          term: 'Neurogenic Shock',
          definition: 'Distributive shock from spinal cord injury above T6, causing loss of sympathetic tone, resulting in hypotension without reflex tachycardia and warm, dry extremities.'
        },
        {
          term: 'FAST Examination',
          definition: 'Focused Assessment with Sonography for Trauma - rapid ultrasound exam to detect free fluid in abdomen (hemoperitoneum), pericardium (tamponade), or pleural spaces (hemothorax).'
        },
        {
          term: 'Blunt Cerebrovascular Injury',
          definition: 'Injury to carotid or vertebral arteries from blunt trauma, can cause stroke. Screening with CTA for mechanism or physical signs.'
        }
      ],
      analogies: [
        'The primary survey is like a software emergency response plan - you check server status, network connectivity, and power before investigating individual application errors.',
        'The ABCDE sequence is similar to network troubleshooting - you verify the physical connection first (cables/wireless), then check settings, then test applications.',
        'The trauma bay is like a pit stop in racing - every second counts, each team member has a specific role, and coordination determines success.',
        'Secondary survey is like a code review - systematic, thorough examination to find issues that might not be immediately apparent but could cause problems later.',
        'The Golden Hour concept is like the importance of early detection in cancer - catching problems early dramatically improves outcomes.'
      ],
      examples: [
        'A 19-year-old male is ejected from a vehicle. Primary survey reveals: A - airway maintained with jaw thrust, B - absent breath sounds on right with tracheal deviation (tension pneumothorax), immediate needle decompression performed. C - hypotension with tachycardia, two large-bore IVs placed, blood products started. D - GCS of 6 (eye=1, verbal=2, motor=3), pupils unequal. E - clothes cut off, warming blanket applied. The patient is intubated, chest tube placed, and rushed to CT scanner.',
        'A 45-year-old construction worker falls from a 30-foot scaffold. Secondary survey reveals: Battle sign and raccoon eyes (basilar skull fracture), abdominal distension with guarding (possible splenic injury), and pelvic instability. FAST scan shows free fluid in abdomen. Patient goes directly to operating room for exploratory laparotomy.',
        'A 22-year-old male presents after penetrating stab wound to left chest. Examination reveals hypotension, distended neck veins, and muffled heart sounds - classic Beck triad of cardiac tamponade. Pericardiocentesis yields blood, improving blood pressure. Patient taken to OR for sternotomy and repair of right ventricular wound.',
        'A 30-year-old female involved in high-speed motor vehicle collision presents with left leg pain and swelling. Examination reveals deformity of the thigh with absent distal pulses. X-ray shows femur fracture with vascular injury. Vascular surgery consulted for exploration and repair.',
        'A 16-year-old football player takes a helmet-to-helmet hit and loses consciousness for 2 minutes. On exam, he is confused but GCS is 14. CT head shows small subdural hematoma. He is admitted for observation and recovers fully with supportive care.'
      ]
    },
    4: {
      level: 4,
      summary: 'Trauma management employs a hierarchical diagnostic and therapeutic approach prioritizing physiologic restoration over anatomic repair, with the primary survey targeting immediately correctable threats to oxygenation, perfusion, and neurologic function, followed by systematic secondary evaluation and evidence-based definitive management of specific injuries.',
      explanation: 'Advanced Trauma Life Support (ATLS) represents a paradigm shift in trauma care from treatment based on anatomic diagnosis to physiologic prioritization. The fundamental principle is that the most life-threatening conditions must be identified and treated before addressing less critical injuries, regardless of how clinically apparent the latter may be.\n\n## Pathophysiology of Trauma\n\nTrauma initiates a complex systemic response characterized by:\n\n1. **Sympathetic Nervous System Activation**: Catecholamine surge causes tachycardia, increased contractility, and vasoconstriction in non-essential vascular beds, maintaining perfusion to heart and brain.\n\n2. **Neuroendocrine Response**: Hypothalamic-pituitary-adrenal axis activation increases cortisol, ADH, and growth hormone, contributing to fluid retention and hyperglycemia.\n\n3. **Inflammatory Cascade**: Tissue damage activates complement, releases cytokines (IL-1, IL-6, TNF-alpha), and activates coagulation. This "storm of inflammation" can lead to systemic inflammatory response syndrome (SIRS) and multiple organ dysfunction syndrome (MODS).\n\n4. **Coagulopathy**: Trauma-induced coagulopathy (TIC) results from tissue injury, shock, and dilution from fluid resuscitation. Characterized by hyperfibrinolysis, clotting factor depletion, and platelet dysfunction.\n\n## Primary Survey: Detailed Considerations\n\n**A - Airway with Cervical Spine Protection**\n\nAirway compromise in trauma can result from:\n- Direct mechanical obstruction (tongue, foreign body, blood)\n- Anatomic disruption (mandibular fractures, laryngotracheal injury)\n- Neurologic impairment (decreased GCS)\n\nCervical spine injury occurs in 1-3% of blunt trauma patients but up to 10% with specific mechanisms (falls from height, diving injuries, axial loading). The cervical collar is maintained until radiographically cleared or clinical examination rules out injury.\n\nRapid Sequence Intubation (RSI) in trauma:\n- Pre-oxygenation (apneic oxygenation via nasal cannula)\n- Induction agent (ketamine or etomidate preferred in hypotension)\n- Paralytic (succinylcholine or rocuronium)\n- Sellick maneuver (cricoid pressure) controversial in trauma\n\n**B - Breathing and Ventilation**\n\nPathophysiology of tension pneumothorax: Unidirectional air entry into pleural space creates progressive pressure accumulation, causing:\n- Ipsilateral lung collapse (ventilation-perfusion mismatch)\n- Mediastinal shift (kinking of vena cava, decreased venous return)\n- Cardiac compression (decreased stroke volume)\n- Elevated pulmonary vascular resistance (right heart strain)\n\nNeedle decompression: 2nd intercostal space, midclavicular line, 5-8 cm needle (longer needed for thick chest walls). Follow with chest tube (4th-5th intercostal space, anterior axillary line).\n\n**C - Circulation with Hemorrhage Control**\n\nCompensatory mechanisms in hemorrhagic shock:\n- Phase I: Sympathetic activation maintains blood pressure despite volume loss\n- Phase II: Decompensation when compensatory mechanisms fail\n- Phase III: Irreversible shock if not promptly reversed\n\nPermissive hypotension (target systolic 80-90 mmHg) in penetrating trauma without brain injury may improve outcomes by reducing bleeding pressure and avoiding dilutional coagulopathy. However, this is contraindicated in TBI and spinal cord injury.\n\nMassive Transfusion Protocol (MTP):\n- Activate when: anticipated need for >10 units RBCs in 24 hours or >4 units in 1 hour\n- Goal ratio: 1:1:1 (plasma:platelets:RBCs)\n- Avoid crystalloid overload (trauma-associated coagulopathy)\n- Use thromboelastography (TEG) or rotational thromboelastometry (ROTEM) to guide transfusion\n\n**D - Disability (Neurologic Evaluation)**\n\nPrimary brain injury occurs at moment of impact. Secondary brain injury results from:\n- Hypotension (SBP < 90 mmHg doubles mortality)\n- Hypoxia (worse outcomes than hypotension)\n- Increased intracranial pressure (ICP)\n- Cerebral edema (peaks at 48-72 hours)\n\nGlasgow Coma Scale scoring:\n- Eye: 1=none, 2=to pain, 3=to command, 4=spontaneous\n- Verbal: 1=none, 2=incomprehensible, 3=inappropriate, 4=confused, 5=oriented\n- Motor: 1=none, 2=extension, 3=abnormal flexion, 4=withdrawal, 5=localizes, 6=obeys\n\nPupillary examination: Unilateral dilation (third nerve compression) indicates ipsilateral mass effect. Dilated and fixed indicates severe brainstem compression.\n\n**E - Exposure with Environmental Control**\n\nTrauma-induced hypothermia (accidental hypothermia) worsens outcomes by:\n- Shivering increases oxygen consumption 2-4x\n- Shifts oxyhemoglobin dissociation curve (impaired oxygen delivery)\n- Causes coagulopathy (enzyme inhibition)\n- Causes cardiac dysfunction (arrhythmias, decreased contractility)\n\nActive rewarming: Forced air, warmed IV fluids (40°C), warmed humidified oxygen, extracorporeal circuits for severe cases.\n\n## Secondary Survey: Systematic Evaluation\n\n**History Taking**:\n\nAMPLE:\n- **A**llergies: Specifically to antibiotics, contrast, latex\n- **M**edications: Anticoagulants (warfarin, DOACs) significantly affect management\n- **P**ast medical history: Cardiac disease, bleeding disorders, prior surgeries\n- **L**ast meal: NPO status if operative intervention needed\n- **E**vents/Environment: Mechanism, speed, time since injury, position in vehicle\n\n**Head and Face**:\n\nBasilar skull fracture signs:\n- Battle sign (postauricular ecchymosis) - appears at 24-48 hours\n- Raccoon eyes (periorbital ecchymosis) - may be delayed\n- Hemotympanum (blood behind eardrum)\n- CSF otorrhea or rhinorrhea (clear fluid from ear/nose)\n\nOrbital fractures: Blow-out fracture (inferior orbital wall) with entrapment of inferior rectus muscle causing diplopia on upward gaze.\n\n**Neck**:\n\nAnatomic zones define management:\n- Zone I (base of neck): Surgical exploration required for penetrating injuries\n- Zone II (mid-neck): Physical examination reliable\n- Zone III (angle of mandible to skull base): Angiography needed due to difficult surgical access\n\n**Chest**:\n\nPulmonary contusion evolves over 24-48 hours as hemorrhage and edema accumulate in lung parenchyma. Management: Supportive care, oxygen, mechanical ventilation if needed.\n\nMyocardial contusion: ECG (sensitivity >90%), troponin, echocardiography if indicated. Arrhythmias most common complication.\n\n**Abdomen**:\n\nSolid organ injuries graded I-V (AAST grading).\n\nSplenic injury:\n- Grade I-II: Observation\n- Grade III: Consider angioembolization\n- Grade IV-V: Splenectomy or splenorrhaphy\n\nLiver injury:\n- Similar grading system\n- Higher mortality than spleen due to associated injuries\n\nHollow viscus injury: Delayed diagnosis increases mortality. Serial abdominal exams, CT with oral contrast if stable.\n\n**Pelvis and Perineum**:\n\nPelvic fracture-associated hemorrhage: Can be venous (low pressure, tamponades) or arterial (high pressure, requires embolization). Pelvic binder reduces fracture volume and provides tamponade effect.\n\nGenitourinary injury: Blood at urethral meatus, high-riding prostate, or perineal hematoma suggests urethral injury - retrograde urethrogram before catheter placement.\n\n**Extremities**:\n\nCompartment syndrome: Elevated tissue pressure (>30 mmHg) compromising perfusion. Five Ps: Pain, Pallor, Paresthesias, Paralysis, Pulselessness (late sign). Treatment: Emergent fasciotomy.\n\n## Specific Injury Management\n\n**Traumatic Brain Injury**:\n\nIntracranial pressure (ICP) monitoring indicated for:\n- Severe TBI (GCS ≤ 8) and abnormal CT\n- Severe TBI with normal CT but two or more of: age >40, unilateral/bilateral motor posturing, SBP < 90\n\nICP treatment goals:\n- ICP < 22 mmHg\n- CPP (cerebral perfusion pressure) 60-70 mmHg\n\nTiered approach:\n1. Head of bed elevation 30°, sedation, analgesia\n2. Osmotic therapy (mannitol or hypertonic saline)\n3. Hyperventilation (PaCO2 30-35 mmHg) - short term only\n4. Barbiturate coma\n5. Decompressive craniectomy\n\n**Spinal Cord Injury**:\n\nComplete vs. incomplete lesions:\n- Complete: No motor or sensory function at S4-S5\n- Incomplete: Some preserved function\n\nSpinal shock: Temporary loss of reflexes below level of injury (areflexia). May convert to hyperreflexia (UMN signs) in weeks.\n\nNeurogenic shock from spinal cord injury:\n- Loss of sympathetic tone → vasodilation, bradycardia\n- Treatment: Fluid resuscitation, vasopressors (norepinephrine)\n- Avoid pure alpha agents (phenylephrine) as worsen bradycardia\n\nSteroids in acute spinal cord injury: Controversial. NASCIS II and III showed modest benefit with high-dose methylprednisolone if started within 8 hours, but risk of complications (infection, GI bleed) led most centers to abandon routine use.\n\n**Thoracic Trauma**:\n\nThoracic aortic injury:\n- Mechanism: Rapid deceleration causing shearing at ligamentum arteriosum\n- CXR findings: Widened mediastinum >8 cm, apical cap, deviated trachea/esophagus\n- Diagnosis: CT angiography (gold standard)\n- Treatment: Endovascular repair (preferred) or open graft\n\n**Abdominal Trauma**:\n\nDamage control laparotomy:\n- Indicated when patient presents with lethal triad: hypothermia, coagulopathy, acidosis\n- Goal: Control hemorrhage and contamination rapidly, then close temporarily (vacuum dressing), resuscitate in ICU, return for definitive repair when physiology restored\n\n**Orthopedic Trauma**:\n\nPelvic fracture management:\n- Anterior-posterior compression (APC): Open book (external rotation) - pelvic binder, external fixation\n- Lateral compression (LC): Internal rotation - less bleeding, bed rest\n- Vertical shear (VS): Shear through sacroiliac joints - requires ORIF\n\nLong bone fracture embolization: Fat emboli from marrow enter circulation. Fat embolism syndrome: Respiratory insufficiency, neurologic symptoms, petechial rash (axilla, conjunctiva). Prevention: Early fracture fixation.',
      keyTerms: [
        {
          term: 'Trauma-Induced Coagulopathy (TIC)',
          definition: 'Acute coagulopathy following severe trauma, characterized by anticoagulation, hyperfibrinolysis, and clotting factor depletion, resulting from tissue injury, shock, and dilution from resuscitation fluids.'
        },
        {
          term: 'Permissive Hypotension',
          definition: 'Deliberate restriction of fluid resuscitation to maintain lower-than-normal blood pressure (typically SBP 80-90 mmHg) in penetrating trauma without TBI, intended to reduce bleeding pressure and avoid coagulopathy exacerbation.'
        },
        {
          term: 'Damage Control Surgery',
          definition: 'Surgical approach prioritizing rapid control of hemorrhage and contamination over definitive repair, with planned return to OR after correction of hypothermia, coagulopathy, and acidosis (the lethal triad).'
        },
        {
          term: 'Lethal Triad',
          definition: 'The three interconnected factors that create a vicious cycle in severe trauma: hypothermia (impairs coagulation), coagulopathy (worsens bleeding), and acidosis (depresses cardiac function and impairs coagulation).'
        },
        {
          term: 'Cerebral Perfusion Pressure (CPP)',
          definition: 'The pressure gradient driving blood flow to the brain, calculated as MAP minus ICP. Normal is 60-70 mmHg; below this threshold, cerebral ischemia develops.'
        },
        {
          term: 'Battle Sign',
          definition: 'Postauricular ecchymosis appearing 24-48 hours after basilar skull fracture, caused by tracking of blood from mastoid air cells to retroauricular tissues.'
        },
        {
          term: 'Raccoon Eyes',
          definition: 'Periorbital ecchymosis, a sign of basilar skull fracture caused by tracking of blood from anterior cranial fossa to periorbital tissues.'
        },
        {
          term: 'Compartment Syndrome',
          definition: 'Elevated pressure within a fascial compartment compromising perfusion, leading to muscle and nerve ischemia. Diagnosis by clinical exam or compartment pressure measurement (>30 mmHG). Treated with emergent fasciotomy.'
        },
        {
          term: 'Fat Embolism Syndrome',
          definition: 'Systemic manifestation of fat globules in circulation after long bone fractures, characterized by respiratory insufficiency, neurologic dysfunction, and petechial rash, typically occurring 12-72 hours post-injury.'
        },
        {
          term: 'Spinal Shock',
          definition: 'Temporary areflexia and loss of autonomic function below level of spinal cord injury, resulting from sudden loss of descending excitatory input. May persist days to weeks before spinal reflexes return.'
        },
        {
          term: 'TEG/ROTEM',
          definition: 'Thromboelastography (TEG) and rotational thromboelastometry (ROTEM) are point-of-care viscoelastic hemostatic assays that assess whole blood clot formation and lysis, guiding goal-directed transfusion in trauma.'
        },
        {
          term: 'C-Reactive Protein (CRP) Trauma Kinetics',
          definition: 'CRP rises 4-6 hours after trauma, peaks at 48-72 hours. Elevated levels correlate with injury severity and can help identify ongoing inflammation or complications.'
        },
        {
          term: 'FAST Examination',
          definition: 'Focused Assessment with Sonography for Trauma - rapid bedside ultrasound evaluating pericardium, hepatorenal fossa (Morrison pouch), splenorenal fossa, and pelvis for free fluid (blood).'
        },
        {
          term: 'Elevated Intracranial Pressure (ICP)',
          definition: 'Pressure >20-22 mmHg within cranium compromising cerebral perfusion. Etiologies in trauma: mass lesions (hematomas), cerebral edema, hyperemia. Managed via head elevation, osmotherapy, hyperventilation, sedation, or surgical decompression.'
        }
      ],
      analogies: [
        'The lethal triad is like a positive feedback loop in audio - each element amplifies the others, creating a self-reinforcing cycle that must be interrupted.',
        'Trauma-induced coagulopathy resembles a cascading system failure - initial damage propagates through interconnected systems, requiring intervention at multiple points simultaneously.',
        'Permissive hypotension is similar to reducing water pressure while fixing a burst pipe - lowering the pressure reduces the rate of fluid loss until you can repair the source.',
        'The trauma bay during a resuscitation resembles a distributed system undergoing a failover - multiple independent processes must coordinate precisely while each handles a critical component.',
        'Damage control surgery parallels partial deployment in software - get the minimum viable product (stabilized patient) deployed quickly, then iterate with improvements once basic functionality is restored.'
      ],
      examples: [
        'A 32-year-old male sustains gunshot wound to abdomen. Primary survey: Airway intact, breathing normal, hypotensive (SBP 70/40) with tachycardia. Two large-bore IVs placed, MTP activated. Exploratory laparotomy reveals through-and-through liver laceration and small bowel injury. Damage control approach: Rapid hepatic packing, bowel resection with stapled ends, abdominal vacuum dressing, transfer to ICU for resuscitation and rewarming. Returns to OR 48 hours later for pack removal and bowel anastomosis.',
        'A 28-year-old female ejected from vehicle, GCS 6 (E1, V2, M3). Pupils: right 6mm fixed, left 3mm reactive. CT head shows large right epidural hematoma with midline shift. Emergency craniectomy performed with hematoma evacuation. ICP monitor placed. Post-op: ICP controlled with hypertonic saline, sedation, and hyperventilation. Discharged to rehab with residual left hemiparesis.',
        'A 45-year-old male falls from roof, landing on feet. Complaints: back pain, weakness in legs. Exam: no sensation below T10, flaccid paralysis, absent rectal tone. MRI: T10 burst fracture with spinal cord compression, complete cord injury. Managed with TLSO brace, serial neurologic exams. Developed DVT prophylactically anticoagulated. Spinal shock resolved after 3 weeks with emergence of hyperreflexia and spasticity (UMN signs).',
        'A 21-year-old male in high-speed MVC, ejected, GCS 14 on arrival. FAST positive (Morrison pouch). BP drops from 120/80 to 80/50 over 30 minutes. Taken to OR: grade IV splenic laceration. Attempts splenorrhaphy but ongoing bleeding, proceeds to splenectomy. Receives 4 units PRBCs, 2 units FFP, 1 apheresis platelets. Post-op vaccines administered (meningococcal, pneumococcal, Hib) given asplenia.',
        'A 38-year-old male struck by vehicle, complains of right leg pain. Exam: swollen right thigh, tense compartments, pain with passive stretch, diminished sensation in deep peroneal distribution. Compartment pressures: anterior 45 mmHg, posterior 38 mmHg. Emergency four-compartment fasciotomy performed. Muscle appears viable. Delayed primary closure 48 hours later. Full recovery of motor and sensory function.'
      ]
    },
    5: {
      level: 5,
      summary: 'Contemporary trauma care integrates ATLS principles with emerging evidence on restrictive fluid resuscitation, early balanced transfusion strategies, damage control resuscitation, and goal-directed management of coagulopathy, while evolving guidelines address specific challenges in geriatric, pediatric, anticoagulated, and obese trauma populations, and incorporate technological advances including viscoelastic hemostatic assays, endovascular techniques, and advanced neuromonitoring.',
      explanation: 'Advanced Trauma Life Support (ATLS) provides the foundational framework for trauma resuscitation, yet modern trauma care requires integration of evolving evidence, specialized considerations for unique populations, and technological advances. The contemporary trauma leader must synthesize ATLS principles with damage control resuscitation (DCR), massive transfusion protocols (MTP), and emerging research on trauma-induced coagulopathy (TIC).\n\n## Advanced Hemorrhage Control and Resuscitation\n\n**Trauma-Induced Coagulopathy (TIC) Pathophysiology**:\n\nTIC represents an acute endogenous coagulopathy occurring independently of, and exacerbated by, resuscitation efforts. Proposed mechanisms include:\n\n1. **Activation of Protein C Pathway**: Thrombomodulin expression on injured endothelium activates protein C, which inactivates Factors Va and VIIIa while inhibiting plasminogen activator inhibitor-1 (PAI-1), causing anticoagulation and hyperfibrinolysis.\n\n2. **Endothelial Glycocalyx Degradation**: Syndecan-1 release (glycocalyx component) correlates with mortality. Glycocalyx shedding causes capillary leak, edema, and impaired vasoregulation.\n\n3. **Thrombin Generation Impairment**: Shock and tissue injury impair thrombin burst necessary for stable clot formation.\n\n4. **Platelet Dysfunction**: Platelet inhibition occurs via ADPase release from damaged endothelium and shed microparticles.\n\nViscoelastic testing (TEG/ROTEM) identifies TIC phenotypes:\n- **Fibrinolytic phenotypes**: Shutdown (most common, ~60%), physiologic, hyperfibrinolysis (~5%) - TXA indicated for physiologic and hyperfibrinolysis, contraindicated in shutdown\n- **Coagulopathic vs. non-coagulopathic**: Guides factor and platelet replacement\n\n**Damage Control Resuscitation (DCR)**:\n\nDCR represents a paradigm shift from large-volume crystalloid resuscitation to balanced blood product administration, targeting physiologic endpoints while preventing the lethal triad:\n\n**Components**:\n1. Permissive hypotension (SBP 80-90 mmHg) until bleeding controlled\n2. Minimal crystalloid use (avoid dilutional coagulopathy)\n3. Early balanced blood product ratio (1:1:1)\n4. Hemostatic resuscitation guided by viscoelastic testing\n5. Early hemorrhage control (surgery/angio)\n\n**CRASH-2 Trial (2010)**: Tranexamic acid (TXA) within 3 hours of injury reduced mortality (absolute reduction 1.5%). Greatest benefit when given within 1 hour. No benefit after 3 hours (possible increased mortality).\n\n**PROPPR Trial (2015)**: 1:1:1 vs. 1:1:2 plasma:platelets:RBC ratio. No mortality difference, but 1:1:1 group achieved faster hemostasis and fewer deaths from exsanguination in first 24 hours.\n\n**Balanced Transfusion**:\n\nWhole blood is increasingly used in civilian trauma centers (reintroduction from military experience). Benefits:\n- Contains all clotting factors and platelets\n- Less volume overload compared to component therapy\n- Reduced exposure to multiple donors\n\n**Massive Transfusion Protocols (MTP)**:\n\nModern MTPs incorporate:\n- Viscoelastic testing-guided therapy (avoid blind 1:1:1 if not needed)\n- Calcium repletion (citrate toxicity from blood products)\n- Avoidance of hypothermia (blood warmers)\n- TXA for eligible patients\n- Local protocols for antiplatelet/anticoagulant reversal\n\n**Special Populations: Anticoagulated Patients**:\n\n**Warfarin**: Prothrombin complex concentrate (PCC) reverses INR faster than FFP. 4-factor PCC preferred. Vitamin K administered for sustained effect.\n\n**Direct Oral Anticoagulants (DOACs)**:\n- Dabigatran (direct thrombin inhibitor): Idarucizumab (reversal agent)\n- Apixaban, rivaroxaban (Factor Xa inhibitors): Andexanet alfa (reversal agent), expensive, consider PCC off-label\n- Routine measurement: DOAC levels generally not available, thrombin time (dabigatran) or anti-Xa levels may help\n\n**Antiplatelet Agents**:\n- Aspirin/clopidogrel: Platelet transfusion for bleeding, DDAVP may improve platelet function\n- Ticagrelor: More potent, reversal challenging\n\n## Advanced Airway Management\n\n**Rapid Sequence Intubation (RSI) in Trauma**:\n\n**Induction Agent Selection**:\n- **Etomidate**: Hemodynamically neutral, adrenal suppression (single dose clinically insignificant), preferred in hypotension\n- **Ketamine**: Maintains blood pressure (sympathomimetic), may increase ICP (controversial - recent data suggests safe), analgesic properties, bronchodilation\n- **Propofol**: Hypotension, avoid in shocked patients\n\n**Paralytic Selection**:\n- **Succinylcholine**: Rapid onset (30-60 sec), short duration, contraindicated in crush injury >48 hours (hyperkalemia risk), burns, spinal cord injury, neuromuscular disease\n- **Rocuronium**: Intermediate onset (60-90 sec), longer duration, no contraindications, sugammadex reversal available\n\n**Difficult Airway Algorithms**: Apply American Society of Anesthesiologists (ASA) difficult airway algorithm adapted for trauma context. Surgical airway (cricothyrotomy) indicated when RSI fails and ventilation impossible.\n\n## Traumatic Brain Injury: Advanced Management\n\n**Intracranial Pressure (ICP) Management**:\n\n**Monitoring Indications (Brain Trauma Foundation Guidelines)**:\n- Severe TBI (GCS ≤ 8) and abnormal CT\n- Severe TBI with normal CT but two or more of: age >40, motor posturing, SBP < 90\n\n**Tiered Management**:\n\n1. **First tier**:\n   - Head elevation 30° (neutral neck position)\n   - Sedation/analgesia (propofol, fentanyl)\n   - EVD (external ventricular drain) for CSF drainage\n\n2. **Second tier**:\n   - Osmotic therapy:\n     * Mannitol 0.25-1 g/kg (maintain serum osmolality < 320 mOsm/L)\n     * Hypertonic saline (3%, 7.5%, 23.4%) - may be superior in hypotensive patients\n   - Hyperventilation (target PaCO2 30-35 mmHg) - short term only (prophylactic hyperventilation to <25 mmHg worsens outcomes)\n\n3. **Third tier**:\n   - Barbiturate coma (EEG burst suppression)\n   - Decompressive craniectomy (DECRA trial: improved ICP control but worse functional outcome; RESCUEicp: reduced mortality but increased disability)\n\n**CPP Targets**:\n\nHistorically 60-70 mmHg, recent data suggests individualized targets based to pressure autoregulation status. PRx (pressure reactivity index) can calculate optimal CPP for each patient.\n\n**Seizure Prophylaxis**:\n\nLevetiracetam increasingly used instead of phenytoin (fewer drug interactions, no level monitoring needed). Prophylaxis recommended for first 7 days in severe TBI.\n\n**Nutrition**:\n\nFull caloric replacement by day 7. Enteral nutrition preferred (maintains gut barrier, reduces bacterial translocation).\n\n## Geriatric Trauma\n\n**Special Considerations**:\n\nGeriatric patients (≥65 years) have decreased physiologic reserve and higher mortality at similar injury severity compared to younger patients:\n\n- **Blunted tachycardic response**: May not mount tachycardia despite hemorrhage\n- **Medications**: Beta-blockers mask compensatory tachycardia; anticoagulants increase bleeding risk\n- **Comorbidities**: Coronary artery disease, COPD, renal insufficiency affect management\n- **Cognitive baseline**: Dementia complicates neurologic assessment\n- **Falls**: Major mechanism, often associated with intracranial injury (even on anticoagulation)\n\n**Management Modifications**:\n- Lower threshold for CT scanning (intracranial hemorrhage risk)\n- More aggressive resuscitation (less tolerance for hypotension)\n- Early involvement of consultants and family\n- Goals of care discussions when appropriate\n\n**Anticoagulation Reversal in Geriatric TBI**:\n\nImmediate reversal indicated for any intracranial blood:\n- Warfarin: PCC + vitamin K\n- DOACs: Specific reversal agent if available, otherwise PCC\n- Antiplatelet: Consider platelet transfusion, DDAVP\n\n## Pediatric Trauma\n\n**Physiologic Differences**:\n\nChildren are not small adults - key anatomic and physiologic differences:\n\n- **Proportionally larger head**: Higher center of gravity, head injury common, fulcrum of cervical spine at C2-C3 (occiput-C1 junction more mobile)\n- **Flexible skeleton**: Occult injuries common (seatbelt sign, hollow viscus injury without fracture)\n- **Smaller blood volume**: Hypovolemia develops rapidly (75 mL/kg total blood volume, 10% loss = significant)\n- **Better physiologic reserve**: Compensate longer, then decompensate rapidly\n\n**Age-Specific Considerations**:\n\n**Infants (<1 year)**:\n- Non-accidental trauma consideration\n- Birth injuries\n- Shaken baby syndrome (retinal hemorrhages, subdural hematomas)\n\n**Toddler (1-3 years)**:\n- Falls from furniture, windows\n- Near-drowning\n- Poisoning (mimics trauma)\n\n**Preschool/School Age**:\n- Pedestrian struck\n- Bicycle injuries\n- Sports injuries\n\n**Adolescents**:\n- MVC (drivers/passengers)\n- ATV accidents\n- Penetrating trauma (assaults)\n\n**Management Modifications**:\n\n- **Airway**: Uncuffed endotracheal tubes in children <8 years (historical), cuffed increasingly used\n- **Breathing**: Cuffed tube size = (age/4) + 3.5, uncuffed = (age/4) + 4\n- **Circulation**: IO access preferred over difficult IV in children <6 years\n- **Disability**: Age-specific GCS modifications (verbal response adjusted)\n- **Fluid resuscitation**: 20 mL/kg bolus, titrated to response\n- **Hypotension definition**: SBP < 70 + 2×age (years) for children 1-10, < 90 mmHg for >10\n\n**IO Access**:\n\nIndications: Cardiac arrest, difficult IV, shock. Contraindications: fracture of target bone, cellulitis, previous attempt.\n\n## Obesity and Trauma\n\n**Challenges**:\n\n- **Airway**: Higher Mallampati scores, more difficult airways, higher O2 consumption, faster desaturation\n- **Breathing**: Reduced functional residual capacity, restrictive physiology\n- **Circulation**: Larger blood volume, hypertension at baseline, difficult IV access\n- **Assessment**: Physical exam limited, imaging quality reduced\n- **Procedures**: Longer needles for IO, chest tubes, central lines\n\n**Drug Dosing**:\n\nMost drugs dosed on actual body weight for initial bolus, but maintenance dosing based on ideal body weight (lipophilic drugs) or adjusted body weight.\n\n**Obesity Paradox**:\n\nSome studies suggest obese trauma patients have lower mortality after adjusting for injury severity, though this is controversial and may reflect triage bias (only healthier obese patients survive to reach hospital).\n\n## Endovascular and Hybrid Approaches\n\n**REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta)**:\n\nTemporary aortic occlusion via femoral artery catheter to control non-compressible torso hemorrhage:\n- **Zone I** (descending thoracic aorta to celiac): Controls abdominal bleeding\n- **Zone III** (infrarenal): Controls pelvic hemorrhage\n- **Zone II** (between celiac and renal): Avoided (mesenteric ischemia)\n\nIndications: Patients in profound shock (SBP < 60) with intra-abdominal or pelvic hemorrhage, particularly with blunt mechanism. Contraindications: Prolonged occlusion (>30-60 min) causes ischemia-reperfusion injury, acidosis, organ failure.\n\n**Hybrid Operating Rooms**:\n\nCombination of angiography and surgical capabilities allows simultaneous endovascular and open procedures. Increasingly used for:\n- Pelvic fracture embolization\n- Selective mesenteric/renal vessel embolization\n- Endovascular aortic repair (TEVAR) for blunt aortic injury\n- REBOA placement\n\n## Massive Hemorrhage Protocols\n\n**Components**:\n\n1. **Activation triggers**: Anticipated need for >10 units RBCs in 24h or >4 units in 1h, or assessed by clinical judgment\n\n2. **Blood product ratios**: Goal 1:1:1 or 1:1:2 (plasma:platelets:RBCs), guided by viscoelastic testing when available\n\n3. **Laboratory monitoring**: Serial CBC, coagulation profile, TEG/ROTEM\n\n4. **Component support**: Calcium, fibrinogen, cryoprecipitate, TXA\n\n5. **Termination**: When hemorrhage controlled and patient stable\n\n**Trauma Activation Levels**:\n\n**Level I**: Highest acuity - penetrating torso, GCS ≤ 8, hypotension (SBP < 90), gun shot wound to chest/abdomen, transferred from another OR\n\n**Level II**: High but not highest - two or more long bone fractures, pedestrian struck, falls >20 feet, high-risk mechanism\n\n**Level III**: Lower acuity - single long bone fracture, conscious head injury, stable penetrating extremity injury\n\n## Evidence-Based Updates\n\n**Cervical Spine Clearance**:\n\nNEXUS criteria and Canadian C-spine rule allow clinical clearance without imaging in selected patients. CT indicated for:\n- Altered mental status (GCS < 15)\n- distracting injury\n- neurologic deficit\n- midline cervical tenderness\n\nMRI for ligamentous injury when CT negative but clinical suspicion remains (especially in obtunded patients).\n\n**Whole Body CT vs. Selective CT**:\n\nREACT-2 trial: No mortality difference, whole body CT faster, identified more injuries but higher radiation exposure. Individualized approach recommended.\n\n**Antibiotic Prophylaxis**:\n\nOpen fractures: Prompt antibiotics (within 3 hours) reduce infection risk. First-generation cephalosporin (cefazolin) for Gustilo I-II, add aminoglycoside for Gustilo III. Duration: 24 hours (prolonged courses offer no benefit).\n\n**DVT Prophylaxis**:\n\nTrauma patients at high risk for VTE. Mechanical prophylaxis (SCDs) when no contraindication. Chemical prophylaxis (LMWH) when bleeding risk acceptable, typically 24-48 hours post-injury. Inferior vena cava filters for contraindication to anticoagulation with documented DVT or PE.\n\n## Post-Resuscitation Care\n\n**ICU Management**:\n\n- **Ventilation**: Lung-protective strategies (tidal volume 6-8 mL/kg IBW, PEEP 5-10 cm H2O)\n- **Sedation**: Daily interruption of continuous infusions, monitor for withdrawal with prolonged use\n- **Nutrition**: Early enteral nutrition (within 24-48 hours), immunonutrition (arginine, omega-3) not proven superior\n- **Glucose control**: Avoid hypoglycemia, target 140-180 mg/dL (tight control 80-110 increased mortality)\n- **Stress ulcer prophylaxis**: PPI or H2 blocker in high-risk patients (mechanical ventilation >48h, coagulopathy)\n- **Rehabilitation**: Early mobilization when safe, physical/occupational therapy involvement\n\n**Long-Term Outcomes**:\n\nFunctional outcomes increasingly recognized as important quality metrics. Post-traumatic stress disorder (PTSD) occurs in up to 20% of trauma patients. Depression, chronic pain, and return-to-work rates are tracked as patient-centered outcomes.',
      keyTerms: [
        {
          term: 'Trauma-Induced Coagulopathy (TIC)',
          definition: 'Acute endogenous coagulopathy independent of, but exacerbated by, resuscitation, characterized by anticoagulation (protein C activation), hyperfibrinolysis (varies by phenotype), and clotting factor consumption. Correlates with injury severity and mortality.'
        },
        {
          term: 'Damage Control Resuscitation (DCR)',
          definition: 'Strategic approach combining permissive hypotension, hemostatic resuscitation, and rapid hemorrhage control to prevent or mitigate the lethal triad (hypothermia, coagulopathy, acidosis) in exsanguinating patients.'
        },
        {
          term: 'Viscoelastic Hemostatic Assays (TEG/ROTEM)',
          definition: 'Point-of-care whole blood coagulation testing measuring clot formation, strength, and lysis. Identifies specific coagulopathy phenotypes (fibrinolysis shutdown vs. hyperfibrinolysis) to guide targeted therapy.'
        },
        {
          term: 'Endothelial Glycocalyx',
          definition: 'Gel-like layer lining endothelial vessels, composed of proteoglycans, glycoproteins, and glycosaminoglycans. Degradation (measured by syndecan-1) in trauma causes capillary leak, edema, and organ dysfunction.'
        },
        {
          term: 'REBOA',
          definition: 'Resuscitative Endovascular Balloon Occlusion of the Aorta - percutaneous aortic balloon inflation via femoral access for temporary control of non-compressible torso hemorrhage. Zone I (above celiac) for abdominal bleeding, Zone III (infrarenal) for pelvic bleeding.'
        },
        {
          term: 'Massive Transfusion Protocol (MTP)',
          definition: 'Standardized protocol for rapid blood product delivery in exsanguinating patients, incorporating balanced ratios (1:1:1), viscoelastic testing guidance, and adjuncts (TXA, calcium, fibrinogen).'
        },
        {
          term: 'Tranexamic Acid (TXA)',
          definition: 'Antifibrinolytic agent inhibiting plasminogen activation. CRASH-2 trial showed mortality reduction when administered within 3 hours of injury, with greatest benefit within 1 hour. Contraindicated after 3 hours or in fibrinolytic shutdown.'
        },
        {
          term: 'Prothrombin Complex Concentrate (PCC)',
          definition: 'Concentrated clotting factors (II, VII, IX, X) and proteins C and S. Reverses warfarin coagulopathy faster than FFP (minutes vs. hours). Four-factor PCC preferred (contains all required factors).'
        },
        {
          term: 'Idarucizumab',
          definition: 'Humanized monoclonal antibody fragment (Fab) that binds dabigatran (direct thrombin inhibitor) and reverses its anticoagulant effect. Dosed 5g IV (two 2.5g doses no more than 15 minutes apart).'
        },
        {
          term: 'Andexanet Alfa',
          definition: 'Recombinant modified factor Xa molecule that acts as a decoy for factor Xa inhibitors (apixaban, rivaroxaban, edoxaban). Expensive, requires 2-hour infusion. Alternatively, 4-factor PCC used off-label.'
        },
        {
          term: 'Pressure Reactivity Index (PRx)',
          definition: 'Moving correlation coefficient between ICP and MAP, assessing cerebrovascular reactivity. Used to calculate patient-specific optimal CPP targets in severe TBI.'
        },
        {
          term: 'DECRA Trial',
          definition: 'Decompressive Craniectomy in Diffuse Traumatic Brain Injury: early bifrontal craniectomy improved ICP control but resulted in worse functional outcomes at 6 months.'
        },
        {
          term: 'RESCUEicp Trial',
          definition: 'Randomized Evaluation of Surgery with Craniectomy for Uncontrollable Elevation of ICP: craniectomy reduced mortality but increased disability and vegetative state compared to medical management alone.'
        },
        {
          term: 'NEXUS Criteria',
          definition: 'National Emergency X-Radiography Utilization Study criteria for cervical spine imaging: no imaging if no posterior midline tenderness, no focal neurologic deficit, normal alertness, no distracting injury, and no intoxication.'
        },
        {
          term: 'Canadian C-Spine Rule',
          definition: 'Clinical decision rule allowing cervical spine clearance without imaging if: patient is low risk (simple rear-end MVC, ambulatory, delayed pain, no midline tenderness), can actively rotate neck 45 degrees left and right, and has no high-risk factors.'
        },
        {
          term: 'Gustilo-Anderson Classification',
          definition: 'Open fracture classification system: Type I (<1 cm wound, clean), Type II (>1 cm wound, moderate soft tissue damage), Type IIIA (extensive soft tissue, adequate coverage), Type IIIB (extensive soft tissue, periosteal stripping, requires coverage), Type IIIC (arterial injury requiring repair).'
        },
        {
          term: 'Glasgow Outcome Scale (GOS)',
          definition: 'Functional outcome scale: 1=Death, 2=Vegetative State, 3=Severe Disability (conscious but dependent), 4=Moderate Disability (independent but disabled), 5=Good Recovery (return to normal life). Extended GOS-E adds granularity.'
        },
        {
          term: 'Capillary Leak Syndrome',
          definition: 'Increased vascular permeability causing fluid extravasation into interstitium, resulting in edema, hypotension, hypoalbuminemia, and organ dysfunction. Central to trauma pathophysiology, mediated by inflammatory cytokines and glycocalyx degradation.'
        }
      ],
      analogies: [
        'TIC phenotypes (fibrinolysis shutdown vs. hyperfibrinolysis) resemble different inflammatory response patterns to infection - identifying the phenotype guides targeted therapy rather than empiric treatment.',
        'Damage control resuscitation parallels incident response in distributed systems - you prioritize stabilizing the system over root cause analysis initially, returning for definitive fixes once baseline is restored.',
        'The endothelial glycocalyx acts like a vascular firewall that, when degraded, allows "unauthorized traffic" (fluid, proteins) to leak between compartments, causing systemic dysfunction.',
        'Viscoelastic testing in trauma is analogous to application performance monitoring - instead of guessing where the bottleneck is, you have real-time telemetry to guide specific interventions.',
        'Geriatric trauma physiology resembles legacy software systems with accumulated technical debt - they have decreased resilience, more brittle responses to stress, and less capacity to compensate when components fail.',
        'The lethal triad creates a feedback loop similar to race conditions in concurrent systems - each element (hypothermia, coagulopathy, acidosis) amplifies the others, requiring coordinated intervention across multiple domains simultaneously.',
        'Pediatric trauma patients are like early-stage startups - they compensate well and hide issues until near failure, then decompensate rapidly, requiring different monitoring and intervention thresholds.',
        'Whole body CT vs. selective CT parallels comprehensive vs. targeted testing in software - comprehensive testing catches more issues but at higher cost (radiation), requiring risk-benefit analysis for each scenario.'
      ],
      clinicalNotes: 'Trauma care requires continuous reassessment - conditions evolve rapidly, and initial assessments may miss injuries that manifest later. Maintain high suspicion for injuries inconsistent with mechanism. Involve trauma surgery early for operative decision-making. Document all assessments and interventions with timestamps for medicolegal protection and quality improvement.',
      examples: [
        'A 67-year-old male on warfarin for atrial fibrillation falls down stairs. GCS 15, headache. CT head shows small subdural hematoma. INR 3.2. Administered 4-factor PCC (50 units/kg) and vitamin K 10 mg IV. INR corrects to 1.1 within 30 minutes. Admitted to neurotrauma ICU for observation. Repeat CT at 24 hours shows stable hematoma. Discharged home on warfarin hold with cardiology follow-up for anticoagulation reassessment.',
        'A 23-year-old female, restrained driver in high-speed MVC, GCS 7 (E2, V2, M3), hypotensive (SBP 75/45). Primary survey: airway secured with RSI (ketamine + rocuronium), breathing sounds equal bilaterally. Two 16-gauge IVs placed, MTP activated. Pelvic binder applied for suspected pelvic fracture. FAST positive. Taken to OR: grade V liver injury, grade IV splenic injury. Damage control laparotomy with hepatic packing and splenectomy. Abdomen closed with vacuum dressing. Transfused 12 units PRBCs, 6 units FFP, 2 units platelets, 10 units cryo. Received 1g TXA in ED. Returned to ICU with temperature 35.8°C, pH 7.28, INR 1.4. Aggressive rewarming initiated. Returned to OR at 48 hours for pack removal and abdominal closure. Discharged to rehab on POD 14.',
        'A 45-year-old male on rivaroxaban for PE history sustains ground-level fall. CT head shows 2 cm右侧 (right) temporal intraparenchymal hemorrhage with 3 mm midline shift. Neurosurgery recommends against evacuation. Administered andexanet alfa (800 mg bolus followed by 960 mg infusion over 2 hours) with reversal agent unavailable initially. monitored for rebleeding. INR not applicable (DOAC). Anti-Xa level checked post-reversal (undetectable). Discharged to rehab on POD 7 with speech therapy.',
        'A 28-year-old male brought in after assault with stab wound to left chest. Hypotensive (SBP 70/40), distended neck veins, muffled heart sounds - classic tamponade physiology. FAST confirms pericardial effusion. Pericardiocentesis yields 60 mL blood with transient BP improvement. Taken to OR for sternotomy: 2 cm right ventricular injury repaired primarily. Post-op echo shows normal EF, no residual effusion. Discharged POD 5.',
        'A 5-year-old male struck by vehicle while crossing street. GCS 4 (E1, V1, M2), hypotensive (SBP 60). IO access placed bilaterally in proximal tibiae. Airway secured with cuffed 5.0 ETT (formula: (5/4)+3.5 = 4.75, round to 5.0). Fluid bolus 20 mL/kg × 2. CT head: diffuse axonal injury with small subdural. CT abdomen: grade III splenic laceration. Managed nonoperatively with serial exams. Neurologic recovery to GCS 12 by discharge. Transferred to pediatric rehab.',
        'A 52-year-old female, BMI 52, driver in MVC. Airway: Mallampati 4, three attempts at intubation successful with bougie. Breathing: restrictive physiology noted on vent (high peak pressures). Circulation: ultrasound-guided 16-gauge IV placed. CT shows grade II splenic laceration, pelvic fracture. TEG shows fibrinolysis shutdown - TXA withheld. Received 2 units PRBCs only. Pelvic binder placed. Managed nonoperatively. Discharged home on POD 7.',
        'A 38-year-old male with gunshot wound to right abdomen. GCS 15, tachycardic (HR 135), hypotensive (SBP 80/50). Two 16-gauge IVs placed, MTP activated. Taken to OR: through-and-through liver laceration, small bowel injury, injury to right common iliac vein. Damage control approach: hepatic packing, small bowel resection with stapled ends, iliac vein ligated, abdominal vacuum dressing. Transfused 8 units PRBCs, 4 units FFP, 1 unit platelets. Returned to ICU, temperature 36.2°C, pH 7.31, base deficit -8. Received calcium gluconate 1g q6h for citrate toxicity. Returned to OR at 36 hours: packs removed, bowel anastomosis performed, abdomen closed. Discharged to rehab POD 18.',
        'A 74-year-old female on apixaban falls at home. GCS 14, confused, right hemiparesis. CT head shows 1.5 cm left subdural hematoma with 5 mm midline shift. Apixaban level not available. Administered 4-factor PCC 50 units/kg off-label. Neurosurgery recommends nonoperative management. Admitted to neuro ICU, serial exams. Repeat CT at 24 hours shows stable hematoma, no expansion. Discharged to skilled nursing facility on POD 7.',
        'A 19-year-old male ejected from motorcycle. SBP 60/40 on arrival, FAST positive for free fluid. MTP activated. Taken to OR: grade V splenic injury requiring splenectomy, grade IV liver injury managed with packing. Post-op in ICU: TEG shows normal clot formation, moderate fibrinolysis. TXA 1g administered. Platelet count 90 (depleted from MTP). Transfused 1 apheresis unit. Discharged POD 14 after splenectomy vaccines administered.',
        'A 31-year-old female, 28 weeks pregnant, driver in MVC. Airway secured with RSI (ketamine),毯 normal pregnancy changes. FAST shows free fluid in Morrison pouch. OB consulted, fetal monitoring initiated. Taken to OR: grade III splenic laceration. Splenorrhaphy performed successfully. Fetal heart rate normal throughout. Discharged from OB on POD 4 with healthy pregnancy.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['all'],
    topics: ['emergency-medicine', 'surgery', 'critical-care', 'trauma', 'resuscitation'],
    keywords: ['ATLS', 'ABCDE', 'primary survey', 'secondary survey', 'shock', 'trauma', 'emergency', 'resuscitation', 'golden hour', 'damage control', 'massive transfusion'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'emergency-medicine']
    }
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
