/**
 * Wilderness First Aid - Comprehensive Educational Content
 *
 * Basic emergency care principles and techniques for remote settings
 * where definitive care is delayed or unavailable.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical certification or training. Seek professional wilderness
 * medical training for hands-on practice.
 */

import { EducationalContent } from '../types';

export const wildernessFirstAidContent: EducationalContent = {
  id: 'wilderness-first-aid',
  type: 'concept',
  name: 'Wilderness First Aid',
  alternateNames: ['WFA', 'Remote Area First Aid', 'Outdoor Emergency Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Wilderness first aid is about helping someone who gets hurt or sick far from a hospital. The most important things are staying safe, checking if the person is okay, and getting help when you need it.',
      explanation: `## What Is Wilderness First Aid?

Wilderness first aid is what you do to help someone who is hurt or sick when you are far away from doctors and hospitals. You might be hiking, camping, or in another remote place.

## The Most Important Rule: Stay Safe!

Before you help anyone:
- Make sure the area is safe for YOU
- Look for dangers like falling rocks, fast water, or wild animals
- Never become a victim yourself

## Checking Someone Who Needs Help

Use the ABCs:

**A - Airway**
- Can the person breathe?
- Is anything blocking their mouth?
- Help them lie on their side if they need to throw up

**B - Breathing**
- Is their chest moving?
- Are they breathing too fast or too slow?
- Can you hear them breathing?

**C - Circulation**
- Is blood pumping?
- Check for severe bleeding
- Feel for a pulse

## Getting Help

**Before You Go:**
- Tell someone your plans
- Know where you are
- Have a way to call for help

**Ways to Get Help:**
- Cell phone (if you have signal)
- Satellite messenger or phone
- Send someone to get help
- Signal mirror or whistle (3 blasts = help needed)

## What To Do While Waiting

1. Keep the person warm and dry
2. Give them water if they can drink
3. Stay calm and talk to them
4. Don't move them if they might have a spine injury
5. Keep checking their breathing

## Basic Supplies to Carry

- Bandages and tape
- Antibiotic ointment
- Blister pads
- Pain medicine (like ibuprofen)
- Emergency blanket
- Whistle`,
      keyTerms: [
        { term: 'wilderness first aid', definition: 'Emergency care for injuries or illnesses that happen far from hospitals' },
        { term: 'ABCs', definition: 'A simple way to remember what to check first: Airway, Breathing, and Circulation' },
        { term: 'scene safety', definition: 'Making sure an area is safe before you help someone' },
        { term: 'emergency blanket', definition: 'A special lightweight blanket that keeps body heat in' },
      ],
      analogies: [
        'Think of wilderness first aid like being the first link in a chain - you start the help that will continue at a hospital.',
        'The ABCs are like checking if a car can run: does it have air (intake), combustion (action), and fuel (circulation)?',
        'An emergency blanket is like a thermos - it keeps heat in and cold out.',
      ],
      examples: [
        'A hiker twists an ankle on a trail - you help them to a safe spot and wrap the ankle.',
        'Someone gets too hot and dizzy - you move them to shade and give them water.',
        'A camper cuts their hand - you clean it and put on a bandage.',
      ],
      patientCounselingPoints: [
        'Stay calm - your calmness helps the injured person feel safe.',
        'Tell the person what you are doing before you do it.',
        'Never move someone who might have hurt their neck or back unless there is immediate danger.',
        'Keep the person warm - even on warm days, an injured person can get cold.',
      ],
    },
    2: {
      level: 2,
      summary: 'Wilderness first aid extends standard first aid for delayed transport scenarios. Key principles include scene safety, systematic assessment using the primary survey (ABCDE), stabilization, and improvising with available materials. Communication for evacuation is often the definitive intervention.',
      explanation: `## Wilderness vs. Urban First Aid

| Factor | Urban Setting | Wilderness Setting |
|--------|--------------|-------------------|
| Response time | Minutes to hours | Hours to days |
| Equipment | Specialized equipment | Limited, improvised |
| Environment | Controlled | Exposed to elements |
| Help | Nearby | Must self-evacuate or await rescue |
| Duration of care | Hand off quickly | Prolonged care required |

## The Primary Survey: ABCDE

**A - Airway**
- Ensure airway is patent
- Clear obstructions
- Stabilize tongue (jaw thrust)
- Consider cervical spine protection

**B - Breathing**
- Assess respiratory rate and effort
- Listen for breath sounds
- Treat immediate threats (tension pneumothorax if trained)
- Rescue breathing if needed

**C - Circulation**
- Control major bleeding immediately
- Check pulse (central preferred)
- Assess skin signs (color, temperature, capillary refill)
- Begin CPR if indicated

**D - Disability (Neurological)**
- Level of consciousness (AVPU scale)
- Gross motor function
- Pupillary response
- Spine assessment

**E - Environment/Exposure**
- Protect from elements
- Prevent hypothermia
- Ensure scene safety remains

## Patient Assessment System

### 1. Scene Size-Up
- Is the scene safe?
- Mechanism of injury?
- Number of patients?
- Resources available?
- Plan for evacuation?

### 2. Initial Assessment (Primary Survey)
- ABCDE approach
- Identify life threats
- Treat as you find

### 3. Focused Exam (Secondary Survey)
- Head-to-toe assessment
- SAMPLE history
- Vital signs
- Documentation

### 4. Ongoing Assessment
- Recheck vital signs
- Monitor changes
- Adjust treatment
- Plan evacuation

## SAMPLE History

- **S**igns and symptoms
- **A**llergies
- **M**edications
- **P**ast medical history
- **L**ast oral intake
- **E**vents leading to injury/illness

## Triage in Mass Casualty

**START Triage (Simple Triage and Rapid Treatment):**

1. **Red (Immediate):** Serious but survivable with care
2. **Yellow (Delayed):** Injuries require care but can wait
3. **Green (Minimal):** Walking wounded
4. **Black (Expectant):** Unlikely to survive given resources

## Improvisation Principles

**Splinting:**
- C-A-T: Cushion, Anchor, Tie
- Use available materials (trekking poles, sticks, sleeping pads)
- Splint joints above and below injury
- Check circulation before and after

**Bleeding Control:**
- Direct pressure first
- Elevation if possible
- Pressure points (adjunct only)
- Tourniquet for life-threatening extremity bleeding

**Wound Cleaning:**
- Clean water (filtered or boiled if possible)
- Irrigate with pressure
- Remove debris
- Dress with clean material

## Evacuation Decision Making

**Go Now (Immediate Evacuation):**
- compromised Airway, Breathing, Circulation
- Severe head injury with decreasing consciousness
- Spinal injury with neurological deficit
- Major bleeding uncontrolled
- Anaphylaxis
- Cardiac chest pain

**Go Soon (Urgent Evacuation):**
- Fractures requiring reduction
- Dislocations
- Moderate dehydration
- Infection with systemic signs
- Wounds requiring closure

**Can Go Later (Expedient):**
- Minor injuries
- Stable patients responding to treatment
- Can walk out with assistance`,
      keyTerms: [
        { term: 'primary survey', definition: 'Rapid assessment to identify and treat life-threatening conditions' },
        { term: 'AVPU', definition: 'Alert, Verbal, Pain, Unresponsive - scale for level of consciousness' },
        { term: 'SAMPLE', definition: 'Memory aid for taking patient history in emergency situations' },
        { term: 'triage', definition: 'Sorting patients by severity when resources are limited', pronunciation: 'tree-AHZH' },
        { term: 'capillary refill', definition: 'Time for color to return after pressing on skin; checks circulation' },
      ],
      examples: [
        'A hiker falls and hits their head - you do ABCDE assessment, keep them still, and activate rescue.',
        'Someone sprains an ankle badly - you splint it using trekking poles and help them hike out slowly.',
        'A camper develops anaphylaxis - you administer their EpiPen and prepare for rapid evacuation.',
      ],
      analogies: [
        'The primary survey is like checking the foundation of a house before fixing the windows.',
        'Triage is like sorting laundry - you separate what needs immediate attention from what can wait.',
      ],
    },
    3: {
      level: 3,
      summary: 'Wilderness first care integrates extended patient management with environmental challenges. The Patient Assessment System provides structure, while understanding of pathophysiology guides treatment during prolonged field care. Evacuation decisions balance urgency with available resources and environmental constraints.',
      explanation: `## Wilderness Medicine Philosophy

**Differences from Standard First Aid:**
- Prolonged patient contact time
- Lack of diagnostic equipment
- Environmental extremes impact care
- Improvisation essential
- Self-sufficient care team
- Evacuation often the definitive treatment

**Key Principles:**
1. Do no further harm
2. Improvise and adapt
3. Think critically
4. Manage until evacuation
5. Prevent secondary complications

## Detailed Patient Assessment System

### Scene Size-Up Elements

**Hazards Assessment:**
- Environmental (weather, terrain, lightning)
- Biological (animals, plants, insects)
- Human (violent behavior, intoxication)
- Structural (avalanche, rockfall, unstable ground)

**Resource Assessment:**
- Team capabilities and training
- Available equipment
- Time until dark
- Distance to help
- Communication options

### Primary Survey Details

**Airway with C-Spine Protection:**
- Jaw thrust for unconscious patients
- Manual C-spine stabilization if trauma mechanism
- Oropharyngeal airway if trained (no gag reflex)
- Nasopharyngeal airway (contraindicated with facial trauma)

**Breathing Assessment:**
- Rate (normal 12-20 adults, higher in children)
- Depth (tidal volume)
- Effort (accessory muscle use, retractions)
- Sounds (wheezing, stridor, crackles)
- Chest wall symmetry

**Circulation Assessment:**
- Central pulses (carotid, femoral) preferred
- Peripheral pulses assess perfusion
- Skin: color, temperature, condition (capillary refill <2 sec normal)
- Blood pressure estimation if equipment available

**Disability (Neurologic):**
- Level of consciousness (AVPU or GCS)
- Pupils: size, equality, reactivity
- Motor function: move all extremities?
- Sensation: light touch to all extremities

**Exposure/Environment:**
- Remove clothing as needed to assess
- Prevent heat loss
- Protect from elements
- Full body examine for hidden injuries

### Secondary Survey Components

**Head-to-Toe Examination:**
\`\`\`
Head: Inspect and palpate skull, face
Eyes: Pupils, trauma, vision
Ears: Blood, CSF, hearing
Nose: Trauma, discharge, septum
Mouth: Teeth, tongue, soft palate
Neck: C-spine tenderness, trachea deviation
Chest: Symmetry, breath sounds, heart sounds
Abdomen: Quadrants, tenderness, guarding
Pelvis: Stability, tenderness
Extremities: Circulation, sensation, motion, skin
Back: Inspection and palpation (log roll if possible)
\`\`\`

**Vital Signs Monitoring:**
- Heart rate (normal 60-100 adults)
- Respiratory rate (normal 12-20 adults)
- Blood pressure (if available)
- Skin condition and temperature
- Level of consciousness
- Temperature (if thermometer available)
- Trend monitoring more important than single reading

## Shock Recognition and Management

**Types of Shock in Wilderness:**

| Type | Typical Cause | Key Features |
|------|--------------|--------------|
| Hypovolemic | Dehydration, bleeding | Thirst, weak pulse, cool skin |
| Cardiogenic | Heart attack, cold | Chest pain, irregular pulse |
| Septic | Infection | Fever, warm then cool skin |
| Anaphylactic | Allergic reaction | Rash, swelling, wheezing |

**Field Management:**
- Lie patient flat, elevate legs 12 inches
- Keep warm (prevent hypothermia)
- Do NOT give food or water (may need surgery)
- Monitor vital signs closely
- Treat underlying cause if possible

## Wound Management in Wilderness

**Initial Care:**
- Control bleeding first (direct pressure)
- Irrigate copiously (clean water under pressure)
- Clean surrounding skin
- Remove foreign bodies if accessible
- Assess wound depth and structures involved

**Closure Decisions:**

| Close in Field | Leave Open |
|----------------|------------|
| <12 hours old | >24 hours old |
| Clean edges | Contaminated |
| No tension | High tension |
| No contamination | Animal/human bite |
| | Puncture wounds |
| | Signs of infection |

**Wound Dressing:**
- Non-stick primary layer
- Absorbent secondary layer
- Secure but not constricting
- Change daily or if soiled

## Improvised Equipment

**Splinting Materials:**
- Sleeping pads (excellent padding)
- Trekking poles (rigid support)
- Tent stakes (splint material)
- Clothing (padding, ties)
- Duct tape (universal fix)

**Litters:**
- Toggle carry with jackets
- Tarp or tent fabric litter
- Backpack frame litter
- Search and carry technique

**Cold Packs:**
- Snow in waterproof bag
- Stream water evaporative cooling
- Cold rocks wrapped in cloth`,
      keyTerms: [
        { term: 'jaw thrust', definition: 'Technique to open airway without moving cervical spine' },
        { term: 'GCS', definition: 'Glasgow Coma Scale - detailed measure of consciousness from 3-15' },
        { term: 'hypovolemic shock', definition: 'Low blood volume from fluid loss causing inadequate circulation', pronunciation: 'hy-poh-voh-LEE-mik' },
        { term: 'log roll', definition: 'Technique to roll patient while keeping spine aligned' },
        { term: 'toggle carry', definition: 'Method using jackets or poles as handles to carry patient' },
      ],
      clinicalNotes: 'Wilderness situations often require making difficult decisions with limited information. The SOAP note method (Subjective, Objective, Assessment, Plan) provides structure for documentation. Wilderness protocols differ from urban EMS - extended contact times necessitate different approaches to wound care, fracture management, and patient monitoring.',
    },
    4: {
      level: 4,
      summary: 'Wilderness first aid requires integration of emergency medicine principles with improvisation and prolonged field care capabilities. Understanding pathophysiological progression of injuries and illnesses, combined with systematic assessment and evidence-based interventions, optimizes outcomes in resource-limited environments.',
      explanation: `## Pathophysiology of Prolonged Field Care

**Time-Dependent Changes:**

**Cellular Response to Injury:**
\`\`\`
0-2 hours: Inflammatory phase begins
  - Vasodilation, increased permeability
  - Neutrophil infiltration
  - Edema formation

2-24 hours: Continued inflammation
  - Macrophage recruitment
  - Cytokine release
  - Pain, swelling, redness, heat

24-72 hours: Early repair
  - Fibroblast activity
  - Collagen deposition
  - Granulation tissue

72+ hours: Remodeling
  - Tissue reorganization
  - Scar maturation
\`\`\`

**Clinical Implications:**
- Edema peaks 24-48 hours post-injury
- Wound infection risk increases after 6 hours
- Rhabdomyolysis risk with compartment syndrome
- Hypothermia develops faster in injured patients
- Dehydration accelerates shock progression

## Advanced Assessment Techniques

**Cervical Spine Clearance:**

**NEXUS Low-Risk Criteria (all must be present):**
1. Normal alertness
2. No intoxication
3. No painful distracting injuries
4. No focal neurological deficit
5. No midline cervical tenderness

**Canadian C-Spine Rule:**
- Low risk: simple rear-end collision, sitting position, ambulatory at any time, delayed onset neck pain, no midline tenderness
- High risk: age ≥65, dangerous mechanism, paresthesias

If high-risk criteria present: immobilize and evacuate

**Abdominal Assessment:**

**Peritonitis Signs:**
- Rebound tenderness (classically taught but less reliable)
- Guarding (voluntary vs. involuntary)
- Rigidity (involuntary muscle spasm)
- Tenderness with palpation or percussion

**Special Tests:**
- Murphy's sign (cholecystitis)
- McBurney's point tenderness (appendicitis)
- Rovsing's sign (appendicitis)
- Psoas sign (appendicitis/retrocecal appendix)
- Obturator sign (pelvic appendix)

## Advanced Wound Management

**Wound Classification for Closure Decision:**

\`\`\`
Clean: Uninfected, no inflammation, GI/resp/urinary not entered
Clean-Contaminated: Entered controlled without unusual contamination
Contaminated: Trauma, major break in technique, spillage
Dirty: Old traumatic wound, devitalized tissue, infection present
\`\`\`

**Delayed Primary Closure:**
- Clean wound at 3-5 days
- Allows inflammation to resolve
- Decreases infection risk
- Acceptable cosmetic result

**Wound Dehiscence Management:**
- Reclassify as contaminated
- Irrigate thoroughly
- Leave open
- Consider healing by secondary intention

## Fracture Management in Wilderness

**Reduction Indications:**
- Distal pulse compromise
- Progressive neurological deficit
- Skin tenting (imminent open fracture)
- Significant angulation/deformity
- Patient comfort for transport

**Reduction Techniques:**

**Long Bones:**
1. Traction along axis of bone
2. Counter-traction
3. Maintain alignment while splinting
4. Check circulation before and after
5. Splitting circumferential splints if swelling anticipated

**Dislocations:**
- Early reduction (<6 hours) easier
- Distraction technique essential
- Consider analgesia/sedation if available
- Post-reduction neurovascular check
- Immobilize in anatomical position

## Environmental Medicine Integration

**Heat Illness Spectrum:**
- Heat cramps: Sodium depletion, muscle spasms
- Heat syncope: Vasodilation + venous pooling
- Heat exhaustion: Cardiovascular decompensation
- Heat stroke: Thermoregulatory failure (emergency)

**Cold Injury Spectrum:**
- Frostnip: Reversible cold injury, no tissue loss
- Frostbite: Tissue freezing, potential permanent damage
- Hypothermia: Core temperature <35°C
- Afterdrop: Continued cooling during rewarming

**Altitude Illness:**
- AMS: Headache + one symptom, Lake Louise score ≥3
- HACE: Ataxia, altered mental status (emergency)
- HAPE: Dyspnea at rest, crackles, cyanosis (emergency)

## Pharmacology in Wilderness Setting

**Pain Management:**
\`\`\`
NSAIDs (Ibuprofen, Naproxen):
- Mild to moderate pain
- Anti-inflammatory
- Contraindicated: bleeding risk, renal impairment

Acetaminophen:
- Mild to moderate pain
- Fever reduction
- Safer with bleeding risk

Opioids (if available and trained):
- Severe pain
- Requires monitoring for respiratory depression
- Constipation precaution
\`\`\`

**Antibiotics ( wilderness protocols vary):**
- Augmentin: Cellulitis, wound infection
- Doxycycline: Tick-borne illness prophylaxis
- Azithromycin: Respiratory infections
- Ciprofloxacin: Traveler's diarrhea, UTI

**Allergic Reactions:**
- Diphenhydramine: Mild reactions, adjunct
- Epinephrine: Anaphylaxis, severe reactions
- Prednisone: Delayed allergic response

## Evacuation Decision Matrix

**Medical Urgency:**
\`\`\`
RED - Immediate (minutes to hours)
- ABC compromise
- Worsening neurological status
- Uncontrolled bleeding
- Anaphylaxis
- Cardiac ischemia

YELLOW - Urgent (hours to 12-24h)
- Fracture requiring reduction
- Dislocation
- Moderate dehydration
- Infection with systemic signs
- Pain uncontrolled with field measures

GREEN - Expedient (24-48h)
- Stable minor injuries
- Responsive to treatment
- Can self-evacuate with assistance
\`\`\`

**Resource Considerations:**
- Terrain difficulty
- Weather conditions
- Team capability
- Equipment limitations
- Distance/burden to carry`,
      keyTerms: [
        { term: 'delayed primary closure', definition: 'Closing a wound 3-5 days after injury after inflammation subsides' },
        { term: 'dehiscence', definition: 'Surgical or wound reopening, often due to infection or tension', pronunciation: 'deh-HISS-enss' },
        { term: 'afterdrop', definition: 'Continued core cooling during initial rewarming phase of hypothermia treatment' },
        { term: 'skin tenting', definition: 'Bone pushing against skin causing tension, risk of tissue breakdown' },
        { term: 'tendonitis', definition: 'An inflammation or irritation of a tendon, a thick cord that attaches bone to muscle' },
      ],
      clinicalNotes: 'The decision to reduce fractures in the wilderness balances risks of complications from malposition against risks of reduction attempts. Distal neurovascular compromise is the clearest indication. Always document pre- and post-reduction neurovascular status. Epinephrine is the definitive treatment for anaphylaxis; antihistamines are adjuncts only.',
    },
    5: {
      level: 5,
      summary: 'Advanced wilderness first aid incorporates evidence-based protocols for extended care with improvisation. Understanding of wound healing physiology, shock pathophysiology, and environmental medicine guides management. Evacuation decision-making incorporates medical urgency, environmental constraints, and resource limitations. Integration with search and rescue systems and telemedicine capabilities optimizes outcomes.',
      explanation: `## Evidence-Based Wilderness Protocols

**Wound Management Evidence:**

**Closure Timing Meta-Analysis:**
- Wounds closed <12 hours: 5.5% infection rate
- Wounds closed 12-24 hours: 11.8% infection rate
- Wounds >24 hours: Consider delayed closure

**Irrigation Pressure Research:**
- Optimal pressure: 7-8 psi
- <5 psi: Inadequate cleaning
- >15 psi: Tissue damage, bacteria spread
- Practical: Use irrigation syringe or punch holes in water bottle

**Antibiotic Prophylaxis Indications:**
- High-risk wounds (contaminated, deep, hand/face)
- Immunocompromised patients
- Wounds >6 hours old before closure
- Animal/human bites

**Advanced Wound Care:**
\`\`\`
Negative Pressure Wound Therapy (improvised):
- Creates suction effect
- Removes exudate
- Promotes granulation
- Can be improvised with suction bulbs

Wet-to-Dry Dressings:
- Mechanical debridement
- Changed when dry (usually BID)
- Painful but effective
- Consider for necrotic tissue

Hydrocolloid Dressings:
- Autolytic debridement
- Maintains moist environment
- Longer wear time
- May not be available in wilderness
\`\`\`

## Shock Pathophysiology and Management

**Microcirculatory Dysfunction:**

\`\`\`
Normal Capillary Exchange:
Arteriole → Capillary → Venule
  Filtration >>> Reabsorption

Shock State:
  Reduced perfusion pressure
  Anaerobic metabolism
  Lactic acid accumulation
  Cellular edema
  Organ dysfunction

Compensatory Mechanisms:
  Sympathetic activation
  Vasoconstriction
  Tachycardia
  Fluid shifts (interstitial to vascular)

Decompensation:
  Vasomotor failure
  Bradycardia (terminal)
  Worsening acidosis
  Irreversible cellular damage
\`\`\`

**Fluid Resuscitation in Wilderness:**
- Oral: Most practical, patient must be able to protect airway
- IO (intraosseous): Advanced wilderness protocol
- IV: Requires training and equipment
- Choice based on training, availability, evacuation time

**Hemostatic Agents:**
- Kaolin-impregnated gauze (QuikClot): Activates clotting cascade
- Chitosan-based: Forms mucoadhesive barrier
- Conventional gauze: Pressure + time still effective
- Evidence: Hemostatic agents reduce time to hemostasis

## Trauma Management Updates

**Tourniquet Guidelines:**

**Civilian Tourniquet Use:**
- Indicated for life-threatening extremity bleeding
- Windlass-style preferred (CAT, SOFT-T)
- Place proximal to bleeding, as distal as possible
- Mark placement time
- Release >2 hours unlikely to benefit
- Complication rate low if applied correctly

**Junctional Tourniquets:**
- Abdominal, pelvic, axillary, groin wounds
- Specialized devices (junctional tourniquet)
- Improvised: Weighted pressure, aortic compression
- Evidence limited but evolving

**Hemostatic Dressings:**
- Pack into wound cavity
- Apply pressure for 3 minutes
- Reassess for bleeding
- Overwrap with pressure dressing

## Advanced Environmental Medicine

**Thermoregulation Physiology:**
\`\`\`
Heat Production = Heat Loss

Heat Production:
  Basal metabolism (60-70 kcal/hr)
  Activity (variable, can be 10x BMR)
  Shivering (max ~5x BMR)
  Non-shivering thermogenesis (brown fat, infants)

Heat Loss:
  Radiation (~60% at rest)
  Conduction (direct contact, water 25x air)
  Convection (air/water movement)
  Evaporation (sweat, respiration)

Set Point: Hypothalamus
  Heat gain responses: Vasodilation, sweating
  Heat loss responses: Vasoconstriction, shivering
\`\`\`

**Cold Adaptation:**
- Acclimatization: Enhanced non-shivering thermogenesis
- Habituation: Blunted shivering, vasodilation response
- Limitations to human cold adaptation

**Heat Adaptation:**
- Sweating onset earlier, greater volume
- Reduced electrolyte loss in sweat
- Plasma volume expansion
- Cardiovascular efficiency improvement

## Wilderness Medicine Research Updates

**CPR in Remote Settings:**
- Compression-only CPR acceptable for adult witnessed arrest
- Standard CPR with rescue breathing for hypoxic arrests (drowning, avalanche)
- Mechanical CPR devices may facilitate transport
- Prolonged CPR in hypothermia acceptable

**Anaphylaxis Management:**
\`\`\`
Epinephrine First-Line Evidence:
  Reduces hospitalization by 75%
  Underutilized in field settings
  No contraindications in true anaphylaxis
  Second dose needed in 12-36% of cases

Dosing:
  Adults: 0.3-0.5 mg IM (0.3-0.5 mL of 1:1000)
  Children: 0.01 mg/kg IM (max 0.3 mg)
  Repeat q5-15 min prn

Adjuncts:
  Antihistamines: Symptom relief only, do NOT replace epinephrine
  Corticosteroids: May prevent biphasic reaction (evidence limited)
  Bronchodilators: For persistent bronchospasm
\`\`\`

**High-Altitude Research:**
- Genetic susceptibility identified (EPAS1, EGLN1 variants)
- Ibuprofen effective for AMS prevention (600 mg TID)
- Acetazolamide effective at doses as low as 62.5 mg BID
- Tadalafil alternative to nifedipine for HAPE prevention

## Telemedicine in Wilderness

**Remote Consultation:**
- Real-time video improves diagnostic accuracy
- Vital sign transmission possible with some devices
- Photo documentation useful for wound assessment
- Limitations: Connectivity, battery, environmental factors

**Decision Support:**
- Standardized assessment protocols
- Checklists reduce diagnostic errors
- Documentation improves handoffs to rescue personnel
- Electronic health records in wilderness settings emerging

## Wilderness Medicine Education Research

**Simulation Effectiveness:**
- High-fidelity simulation improves retention
- Scenario-based learning superior to didactic
- Deliberate practice essential
- Skill decay without regular practice

**Psychological Factors:**
- Stress inoculation improves performance
- Situational awareness training valuable
- Leadership and communication critical
- Team decision-making research ongoing`,
      keyTerms: [
        { term: 'kaolin', definition: 'Mineral that activates factor XII, accelerating clotting cascade', pronunciation: 'KAY-oh-lin' },
        { term: 'chitosan', definition: 'Polysaccharide from crustacean shells that forms hemostatic seal', pronunciation: 'KYE-toh-san' },
        { term: 'non-shivering thermogenesis', definition: 'Heat production without muscle shivering, via brown adipose tissue metabolism' },
        { term: 'interosseous', definition: 'Into the bone - access route for fluids when IV unavailable', pronunciation: 'in-ter-OSS-ee-us' },
        { term: 'biphasic anaphylaxis', definition: 'Recurrence of anaphylaxis symptoms hours after initial resolution' },
      ],
      clinicalNotes: `Wilderness Medicine Clinical Pearls:

1. Wound irrigation pressure: 7-8 psi optimal (use 18-19 gauge needle or irrigation syringe)
2. Tourniquet time >2 hours: unlikely to benefit, consider conversion to pressure dressing
3. Epinephrine is definitive anaphylaxis treatment - antihistamines are adjuncts only
4. Ibuprofen 600mg TID effective for AMS prevention
5. CPR in hypothermia: "Not dead until warm and dead" applies to select cases
6. Junctional bleeding most common cause of preventable combat death
7. Hemostatic agents reduce time to hemostasis but direct pressure still essential
8. Wilderness dehydration assessment: Urine specific gravity >1.020 indicates dehydration
9. Frostbite assessment: Palpable bone = poor prognosis, likely amputation
10. HACE: Ataxia is most reliable early sign - always test tandem gait`,
    },
  },

  media: [
    {
      id: 'wfa-primary-survey',
      type: 'diagram',
      filename: 'wfa-primary-survey.svg',
      title: 'Wilderness First Aid Primary Survey Flowchart',
      description: 'ABCDE assessment flowchart for wilderness emergencies',
    },
    {
      id: 'wfa-sample-history',
      type: 'diagram',
      filename: 'wfa-sample-history.svg',
      title: 'SAMPLE History Taking',
      description: 'Structured approach to patient history in wilderness settings',
    },
    {
      id: 'wfa-improvised-litter',
      type: 'image',
      filename: 'wfa-improvised-litter.jpg',
      title: 'Improvised Litter Construction',
      description: 'Methods for constructing patient litters from available materials',
    },
  ],

  citations: [
    {
      id: 'nols-wilderness-first-aid',
      type: 'textbook',
      title: 'NOLS Wilderness Medicine',
      authors: ['Todd Schimelpfenig', 'Linda Lindsey', 'Buck Tilton'],
      source: 'Stackpole Books',
      chapter: 'Patient Assessment and Management',
    },
    {
      id: 'wma-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines',
      source: 'Wilderness & Environmental Medicine',
      url: 'https://www.wms.org',
    },
    {
      id: 'auerbach-wilderness-medicine',
      type: 'textbook',
      title: 'Auerbach\'s Wilderness Medicine',
      authors: ['Paul S. Auerbach'],
      source: 'Elsevier',
      chapter: 'Field Assessment and Management',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-hypothermia', targetType: 'condition', relationship: 'related', label: 'Hypothermia' },
    { targetId: 'wilderness-heat-illness', targetType: 'condition', relationship: 'related', label: 'Heat Illness' },
    { targetId: 'wilderness-wound-care', targetType: 'concept', relationship: 'related', label: 'Wilderness Wound Care' },
    { targetId: 'wilderness-trauma', targetType: 'concept', relationship: 'related', label: 'Wilderness Trauma' },
    { targetId: 'wilderness-evacuation-decisions', targetType: 'concept', relationship: 'see-also', label: 'Evacuation Decisions' },
  ],

  tags: {
    systems: ['all-systems'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'first-aid', 'patient-assessment'],
    keywords: ['WFA', 'primary survey', 'ABCDE', 'wilderness protocols', 'evacuation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'family-medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default wildernessFirstAidContent;
