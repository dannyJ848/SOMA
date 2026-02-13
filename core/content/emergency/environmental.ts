/**
 * Environmental Emergencies
 *
 * Covers heat illness, hypothermia, drowning, lightning injuries,
 * electrical injuries, and altitude sickness.
 */

import { EducationalContent } from '../types';

export const environmentalContent: EducationalContent = {
  id: 'emergency-environmental',
  type: 'topic',
  name: 'Environmental Emergencies',
  nameEs: 'Emergencias Ambientales',
  alternateNames: ['Environmental Medicine', 'Heat Illness', 'Cold Injury', 'Drowning', 'Altitude Sickness'],

  levels: {
    1: {
      level: 1,
      summary: 'Environmental emergencies are caused by extreme heat or cold, drowning, electrical shocks, lightning strikes, or high altitude, and they can be dangerous or deadly if not recognized and treated quickly.',
      explanation: `Your body is built to handle a range of temperatures and conditions, but extreme environments can overwhelm your body's ability to cope. These environmental emergencies can happen quickly and require immediate help.

**Heat-Related Illnesses**

**Heat Cramps:**
- Painful muscle cramps during exercise in hot weather
- Usually in legs or abdomen
- Body temperature stays normal
- Caused by losing too much salt through sweating

**Heat Exhaustion:**
- Feeling very tired and weak from heat
- Heavy sweating, cool pale skin
- Dizziness, headache, nausea
- Thirst, rapid heartbeat
- Body temperature may be slightly elevated
- Needs to cool down and drink fluids

**Heat Stroke (Life-Threatening):**
- Medical emergency!
- Body temperature above 104°F (40°C)
- Hot, dry skin (sweating stops)
- Confusion, passes out, or seizures
- Organ damage can happen quickly
- Call 911 and cool the person down immediately

**Cold-Related Illnesses**

**Hypothermia:**
- Body temperature drops below 95°F (35°C)
- Shivering at first, then stops as condition worsens
- Confusion, slurred speech, clumsy movements
- Can happen even in cool weather (40-50°F) if person is wet
- Very dangerous - call 911

**Frostbite:**
- Freezing of body tissues (usually fingers, toes, ears, nose)
- Skin feels hard and looks white or waxy
- Numbness, then no feeling at all
- Needs gradual warming - don't rub the area!

**Water Emergencies**

**Drowning:**
- Happens silently, not like in movies with splashing and yelling
- Person can't breathe because water fills lungs
- Brain damage starts within minutes without oxygen
- Immediate CPR is critical
- Prevention: Learn to swim, wear life jackets, supervise children

**Electrical Injuries**

**Household Current:**
- Can cause burns, muscle pain
- Can interfere with heartbeat
- May cause person to be thrown (violent muscle contraction)

**Lightning Strike:**
- Can cause heart to stop, burns, brain injury
- People struck by lightning often have both entry and exit wounds
- Immediate CPR and calling 911 are essential

**High Voltage:**
- Power lines can cause severe internal burns
- Can throw person across the room
- Very dangerous - stay away from downed power lines

**Altitude Sickness**

**Happens when climbing to high elevations:**
- Headache, nausea, trouble sleeping
- Feeling tired and short of breath
- Usually starts above 8,000 feet
- Can be dangerous if continue climbing (HAPE, HACE)

**What to Do for Heat Emergencies:**

**Heat Exhaustion:**
- Move to a cool, shaded place
- Drink cool water or sports drinks
- Cool the body with water and fans
- Rest

**Heat Stroke (Call 911):**
- Move to cool place immediately
- Remove extra clothing
- Cool with water, ice packs, fans
- Call for emergency help

**What to Do for Cold Emergencies:**

**Hypothermia:**
- Call 911 immediately
- Move to warm, dry place
- Remove wet clothing
- Warm the person with blankets (and your own body heat if needed)
- Warm drinks if person can swallow
- Handle gently - rough handling can cause heart rhythm problems

**Frostbite:**
- Get out of the cold
- Don't rub the area!
- Warm gradually in warm (not hot) water
- Don't thaw if there's a chance of refreezing
- Seek medical attention

**Prevention Tips:**

**In Heat:**
- Drink plenty of fluids
- Avoid being outside during hottest part of day
- Wear lightweight, light-colored clothing
- Take breaks in air conditioning or shade
- Never leave children or pets in cars

**In Cold:**
- Dress in layers
- Keep head, hands, and feet covered
- Stay dry
- Avoid alcohol (makes you lose body heat)
- Check on elderly neighbors

**Water Safety:**
- Always supervise children near water
- Learn CPR
- Wear life jackets when boating
- Never swim alone
- Fence home pools

Remember: Weather and environment can be just as dangerous as diseases. Knowing how to recognize and respond to these emergencies can save lives.`,
      keyTerms: [
        { term: 'heat stroke', definition: 'Dangerously high body temperature with confusion; life-threatening emergency' },
        { term: 'heat exhaustion', definition: 'Response to heat stress with heavy sweating, weakness, nausea' },
        { term: 'hypothermia', definition: 'Dangerously low body temperature; body loses heat faster than it can produce it' },
        { term: 'frostbite', definition: 'Freezing of body tissues, usually extremities' },
        { term: 'altitude sickness', definition: 'Illness from climbing to high elevations too quickly' },
        { term: 'drowning', definition: 'Breathing impairment from submersion in liquid; can be fatal' },
      ],
      analogies: [
        'Your body is like a house that needs heating and cooling - when the system breaks down in extreme weather, problems occur.',
        'Heat stroke is like a car engine overheating - if you don\'t cool it down, permanent damage happens.',
        'Hypothermia is like a battery losing power in cold weather - everything slows down and eventually stops.',
      ],
      examples: [
        'A football player collapses during practice on a hot day.',
        'A hiker gets lost in cold weather and becomes confused.',
        'A child falls into a swimming pool and isn\'t breathing.',
      ],
    },
    2: {
      level: 2,
      summary: 'Environmental emergencies encompass heat illness, hypothermia, frostbite, drowning, electrical injuries, lightning strikes, and altitude sickness, each requiring specific recognition and management strategies to prevent morbidity and mortality.',
      explanation: `## Heat-Related Illness

**Heat Illness Spectrum:**

**Heat Cramps:**
- Painful muscle spasms during exertion in heat
- Involve large muscle groups (quadriceps, hamstrings, abdominals)
- Core temperature normal
- Due to sodium and water loss from sweating
- Treatment: Rest, cooling, oral/electrolyte solution

**Heat Exhaustion:**
- Core temperature 100-104°F (37.8-40°C)
- Profuse sweating, weakness, headache, nausea
- Orthostatic hypotension common
- Treatment: Rest, cooling, oral/IV fluids
- Can progress to heat stroke if not treated

**Heat Stroke (Medical Emergency):**
- Core temperature >104°F (40°C)
- CNS dysfunction: Confusion, ataxia, seizures, coma
- Two types:
  - Classic: Elderly, heat wave, no exercise
  - Exertional: Young, healthy, exercising in heat
- Anhidrosis (absent sweating) in classic, may sweat in exertional
- Treatment: Rapid cooling, aggressive fluid resuscitation

**Heat Stroke Treatment:**
- Remove from heat, remove clothing
- Active cooling: Cold water immersion most effective
- Ice packs to neck, axillae, groin
- Spray with water, fan
- Goal: Reduce temperature to 102°F (38.9°C) then stop cooling
- Monitor for shivering (increases heat production)
- IV fluids for dehydration

**Risk Factors for Heat Illness:**
- Extreme age (very young, very old)
- Chronic illness (heart disease, lung disease)
- Medications (diuretics, anticholinergics, beta-blockers)
- Lack of acclimatization
- Obesity
- Poor physical fitness
- Alcohol use

## Cold-Related Illness

**Hypothermia:**

**Classification by Core Temperature:**

| Category | Temperature | Mental Status | Shivering |
|----------|-------------|---------------|-----------|
| Mild | 90-95°F (32-35°C) | Alert, confused | Yes |
| Moderate | 82-90°F (28-32°C) | Slowed, drowsy | May stop |
| Severe | <82°F (<28°C) | Unconscious, coma | No |

**Mild Hypothermia (32-35°C):**
- Shivering, tachycardia, tachypnea
- Cold diuresis (frequent urination)
- Ataxia, dysarthria
- Confusion, poor judgment

**Moderate Hypothermia (28-32°C):**
- Shivering may stop
- Bradycardia, slowed respirations
- Dilated pupils, sluggish reflexes
- Decreased level of consciousness

**Severe Hypothermia (<28°C):**
- Coma, areflexia
- Severe bradycardia (may be profound)
- Ventricular fibrillation risk
- May appear dead

**Treatment:**
- Remove wet clothing, insulate
- Passive external rewarming: Blankets, warm room
- Active external rewarming: Forced air, heating pads
- Active core rewarming: Warmed IV fluids, peritoneal dialysis, ECMO
- Handle gently to precipitate VF ("rough handling" risk)
- CPR indicated; rhythm may be unresponsive to defibrillation until warmed

**Frostbite:**

**Classification:**

**First Degree (Frostnip):**
- Numbness, white skin
- No permanent damage
- Rewarming resolves completely

**Second Degree (Superficial Frostbite):**
- Clear blisters form
- Possible tissue loss

**Third Degree (Deep Frostbite):**
- Hemorrhagic blisters
- Tissue necrosis likely
- May need amputation

**Fourth Degree:**
- Full-thickness tissue loss
- Bone involvement
- Amputation often required

**Treatment:**
- Remove from cold
- Do not rub or massage (causes tissue damage)
- Rapid rewarming in warm water (37-39°C)
- Do not thaw if refreezing possible
- Elevate affected extremity
- Analgesics (thawing very painful)
- Tetanus prophylaxis

## Drowning

**Definitions:**
- Drowning: Process of experiencing respiratory impairment from submersion/immersion in liquid
- Wet drowning: Water in lungs
- Dry drowning: Laryngospasm without water entry (controversial term)
- Secondary drowning: Pulmonary edema hours after submersion

**Pathophysiology:**
- Asphyxia → hypoxia → cardiac arrest
- Fresh water: Washes out surfactant → pulmonary edema
- Salt water: Draws fluid into alveoli → pulmonary edema
- Cold water: Protective diving reflex, better outcomes

**Treatment:**
- Remove from water safely
- Call for help
- Begin CPR immediately (rescue breathing critical)
- Remove foreign material from airway
- In-water resuscitation only if safety permits
- Backboard if cervical spine injury possible

**Prognosis:**
- Good outcome with:
  - Submersion <10 minutes
  - Resuscitation within 10 minutes
  - Water temperature cold
- Poor with:
  - Submersion >25 minutes
  - No resuscitation for >10 minutes
  - Warm water

## Electrical Injuries

**Types:**

**Low Voltage (<1000V):**
- Household current (110V, 220V)
- Contact burns, muscle pain
- Cardiac arrhythmias possible
- Children biting cords: severe mouth burns

**High Voltage (>1000V):**
- Power lines, industrial equipment
- Deep tissue destruction
- Entry and exit wounds
- Thrown from contact source
- Myoglobinuria, compartment syndrome

**Lightning:**
- Keraunoparalysis (transient paralysis)
- Burns: Lichtenberg figures (ferns, branching)
- Cardiac arrest (asystole more common than VF)
- Tympanic membrane rupture
- Cataracts (delayed)

**Management:**
- Ensure scene safety (especially high voltage)
- ABCs, CPR if needed
- Cardiac monitoring (arrhythmias can develop)
- Monitor for myoglobinuria (prevent renal failure)
- Burn care
- Trauma evaluation (falls from being thrown)

## Altitude Illness

**High Altitude:**
- High altitude: 4,900-11,500 ft (1,500-3,500 m)
- Very high altitude: 11,500-18,000 ft (3,500-5,500 m)
- Extreme altitude: >18,000 ft (>5,500 m)

**Acute Mountain Sickness (AMS):**
- Headache plus one of:
  - Nausea/vomiting
  - Fatigue/weakness
  - Dizziness/lightheadedness
  - Difficulty sleeping
- Onset 6-12 hours after ascent
- Treatment: Descend, oxygen, acetazolamide

**High Altitude Pulmonary Edema (HAPE):**
- Dyspnea at rest, cough, frothy sputum
- Crackles on exam
- Cyanosis possible
- Tachycardia, tachypnea
- Treatment: Immediate descent, oxygen, nifedipine

**High Altitude Cerebral Edema (HACE):**
- Ataxia (hallmark sign)
- Altered mental status
- Severe headache
- Can progress to coma, death
- Treatment: Immediate descent, oxygen, dexamethasone

**Prevention:**
- Gradual ascent
- Avoid alcohol, sedatives
- Acetazolamide prophylaxis
- Prompt recognition of symptoms

**Red Flags - Seek Immediate Care:**
- Altered mental status in heat/cold illness
- Core temperature >104°F or <90°F
- Loss of consciousness
- Difficulty breathing
- Chest pain or arrhythmias
- Suspected drowning
- High-voltage electrical injury
- Worsening symptoms at altitude`,
      keyTerms: [
        { term: 'heat stroke', definition: 'Core temperature >40°C with CNS dysfunction; life-threatening' },
        { term: 'anhidrosis', definition: 'Absence of sweating; seen in classic heat stroke' },
        { term: 'hypothermia', definition: 'Core temperature <35°C; body loses heat faster than produced' },
        { term: 'frostnip', definition: 'Mild cold injury with numbness, no tissue loss' },
        { term: 'drowning', definition: 'Respiratory impairment from submersion; primary cause is hypoxia' },
        { term: 'myoglobinuria', definition: 'Myoglobin in urine from muscle breakdown; causes kidney injury' },
        { term: 'HAPE', definition: 'High Altitude Pulmonary Edema; fluid in lungs at high altitude' },
        { term: 'HACE', definition: 'High Altitude Cerebral Edema; brain swelling at high altitude' },
      ],
      analogies: [
        'Altitude sickness is like your body not having time to adjust to less oxygen, similar to driving up a mountain without letting your car adjust.',
        'Hypothermia is like your internal thermostat breaking - your body can\'t make enough heat to stay warm.',
      ],
    },
    3: {
      level: 3,
      summary: 'Environmental emergencies require understanding of pathophysiology, recognition of severity gradients, and specific interventions including cooling or rewarming protocols, fluid resuscitation, and management of complications to prevent permanent injury or death.',
      explanation: `## Heat Illness Pathophysiology and Management

**Heat Stress Physiology:**
- Thermoregulation: Hypothalamus maintains core temp ~37°C
- Heat dissipation: Radiation (60%), evaporation (sweating), convection, conduction
- Acclimatization: Takes 7-14 days of heat exposure

**Pathophysiology of Heat Stroke:**
- Failure of thermoregulation
- Systemic inflammatory response
- Cytokine release, endothelial damage
- Multi-organ dysfunction similar to sepsis
- DIC (disseminated intravascular coagulation)
- Rhabdomyolysis (muscle breakdown)

**Heat Stroke Complications:**
- CNS: Cerebral edema, seizures, coma
- Cardiovascular: Arrhythmias, myocardial injury
- Renal: ATN from hypoperfusion, myoglobinuria
- Hepatic: Transaminase elevation (often >1000)
- Hematologic: DIC, thrombocytopenia

**Cooling Methods:**
- Cold water immersion: Most effective (cooling rate ~0.2°C/min)
- Evaporative: Spray water + fan (cooling rate ~0.1°C/min)
- Ice packs: Neck, axillae, groin
- Invasive: Gastric, peritoneal, bladder lavage
- ECMO with cooling: Severe cases

## Cold Injury Pathophysiology

**Hypothermia Stages:**

**Stage 1 (35-32°C):**
- Shivering (maximal at ~35°C)
- Tachycardia, tachypnea
- Cold diuresis (vasoconstriction → increased GFR)
- Peripheral vasoconstriction → core preservation

**Stage 2 (32-28°C):**
- Shivering decreases/stops
-Bradycardia (Haller's rule: HR decreases 10 beats/°C)
- Decreased level of consciousness
- Osborn (J) waves on ECG

**Stage 3 (<28°C):**
- Poikilothermia (takes on environment temperature)
- Severe bradycardia, hypotension
- Areflexia, fixed/dilated pupils
- Apnea possible
- Risk of ventricular fibrillation

**ECG Changes in Hypothermia:**
- Osborn waves (J waves): Positive deflection at J point
- Prolonged PR, QRS, QT intervals
- Bradycardia
- Atrial fibrillation common

**Rewarming Techniques:**

**Passive External Rewarming:**
- Blankets, warm room
- Insulation from cold ground
- For mild hypothermia (shivering patient)
- Relies on patient's own heat production

**Active External Rewarming:**
- Forced air systems (Bair Hugger)
- Heating pads, radiant warmers
- Indicated for moderate hypothermia
- Watch for "afterdrop" (core temp drops during rewarming)

**Active Core Rewarming:**
- Warmed IV fluids (38-42°C)
- Warmed humidified oxygen
- Peritoneal lavage
- Thoracostomy lavage with warm fluid
- Hemodialysis, ECMO
- Indicated for severe hypothermia

**Afterdrop:**
- Core temperature drops during rewarming
- Cold blood from periphery returns to core
- Can precipitate arrhythmias
- Minimize by active core rewarming in severe cases

**Hypothermic Arrest:**
- Prolonged resuscitation possible ("no one is dead until warm and dead")
- Defibrillation may be ineffective until core temp >30-32°C
- Medications may not work at low temperatures
- Continue resuscitation during rewarming

**Cold-Induced Vasodilation (CIVD):**
- Cyclic vasodilation in cold-exposed extremities
- Protective mechanism to prevent tissue damage
- More common in acclimatized individuals

## Drowning Pathophysiology

**Sequence:**
- Breath-hold → involuntary inspiration → aspiration → hypoxia → cardiac arrest
- Hypoxia is the primary problem

**Types:**

**Wet Drowning (85-90%):**
- Aspiration of water into lungs
- Surfactant washout (fresh water)
- Electrolyte changes minimal (early teaching about electrolyte shifts was wrong)

**Dry Drowning (10-15%):**
- Laryngospasm prevents water entry
- Hypoxia from asphyxia
- Same pathophysiology as cardiac arrest

**Immersion Syndrome:**
- Cold water triggering diving reflex
- Bradycardia, apnea, shunting blood to heart/brain
- Protective effect in cold water drowning
- Better outcomes with prolonged submersion

**Secondary Drowning (Pulmonary Edema):**
- ARDS-like picture hours after submersion
- Direct lung injury from water/irritants
- Can develop 1-24 hours after event

**Management:**
- CPR: 30:2 compressions to breaths (if single rescuer)
- Rescue breaths critical (hypoxia primary problem)
- Remove cervical collar if airway compromised
- Oxygen, bronchodilators if wheezing
- PEEP for pulmonary edema
- Consider ECMO for severe cases

**Prognostic Indicators:**
- Submersion time <10 minutes: Good
- Submersion time >25 minutes: Poor
- Water temperature <10°C: Better outcomes
- Time to CPR <10 minutes: Critical

## Electrical Injury Patterns

**Current Flow:**
- Current follows path of least resistance
- Nerves, blood vessels: Low resistance
- Bone, fat, tendon: High resistance
- Tissue injury proportional to current flow

**Voltage Effects:**

**Low Voltage (<1000V):**
- Household: 110-220V
- Contact burns at entry/exit
- Muscle contraction (can't let go)
- Cardiac arrhythmia risk

**High Voltage (>1000V):**
- Power lines, industrial
- Massive tissue destruction
- Entry and exit wounds often far apart
- Thrown from source (trauma risk)

**Electrical Burns:**
- Tissue damage more extensive than skin appearance
- Myonecrosis (muscle death)
- Compartment syndrome risk
- Nerve damage, vascular thrombosis
- Late cataract formation

**Cardiac Effects:**
- AC current: Ventricular fibrillation (threshold lower at 50-60 Hz)
- DC current: Asystole, ventricular fibrillation
- Entrance/exit wounds can affect current path through heart
- Cardiac monitoring for 24 hours (arrhythmias delayed)

**Other Complications:**
- Myoglobinuria → renal failure
- Fractures from violent muscle contraction
- Cataracts (especially with head/neck contact)
- Neurologic deficits similar to TBI

**Management:**
- ABCs, cervical spine immobilization
- Cardiac monitoring, 12-lead ECG
- CK monitoring (rhabdomyolysis)
- Urine output goal: 1-2 mL/kg/hr (myoglobinuria)
- Fasciotomy for compartment syndrome
- Tetanus prophylaxis
- Surgical debridement of necrotic tissue

## Lightning Injury

**Mechanisms:**
- Direct strike: Lightning hits person directly
- Contact: Holding object conducting lightning
- Splash: Lightning jumps from object to person
- Ground current: Current through ground from strike point
- Blunt trauma: From person being thrown

**Injuries:**
- Cardiac arrest (asystole or VF)
- CNS injury: Confusion, amnesia, paralysis
- Burns: Linear, punctate, or full-thickness
- Lichtenberg figures: Fern-like branching burns (pathognomonic)
- Tympanic membrane rupture
- Cataract formation (delayed)
- Keraunoparalysis: Transient paralysis, usually lower extremities

**Management:**
- Scene safety: Lightning can strike same area again
- ABCs, CPR for arrest
- Cardiac monitoring
- Burn care
- Assess for trauma (falls)
- Ophthalmology evaluation for cataracts
- Neurologic evaluation

## Altitude Illness Pathophysiology

**AMS Pathophysiology:**
- Hypobaric hypoxia (less oxygen at altitude)
- Hyperventilation response
- Cerebral vasodilation
- Mild cerebral edema
- Inducible nitric oxide synthase (genetic factors)

**HAPE Pathophysiology:**
- Hypoxic pulmonary vasoconstriction
- Pulmonary arterial hypertension
- Capillary stress failure → pulmonary edema
- Increased capillary permeability
- Inflammatory mediators

**HACE Pathophysiology:**
- Cerebral edema
- Increased intracranial pressure
- Elevated cerebral blood flow
- Cytotoxic edema from hypoxia

**Treatment:**
- Descent: Most effective treatment
- Oxygen: 2-4 L/min
- Hyperbaric therapy (portable chambers)
- Nifedipine: HAPE (vasodilates pulmonary vasculature)
- Dexamethasone: HACE (reduces cerebral edema)
- Acetazolamide: AMS prevention/treatment

**Prophylaxis:**
- Gradual ascent: <300 m/day above 3000 m
- Rest day every 2-3 days
- Avoid alcohol, sedatives
- Acetazolamide: 125 mg BID starting 1 day before ascent
- Nifedipine: HAPE prophylaxis in high-risk individuals`,
      keyTerms: [
        { term: 'Osborn wave', definition: 'Positive deflection at J point on ECG; classic for hypothermia' },
        { term: 'afterdrop', definition: 'Core temperature drop during rewarming of hypothermic patient' },
        { term: 'poikilothermia', definition: 'Taking on temperature of environment; severe hypothermia' },
        { term: 'myonecrosis', definition: 'Death of muscle tissue; common in electrical injuries' },
        { term: 'keraunoparalysis', definition: 'Transient paralysis after lightning strike; usually lower extremities' },
        { term: 'Lichtenberg figures', definition: 'Fern-like branching burns from lightning strike' },
        { term: 'Haller\'s rule', definition: 'Heart rate decreases 10 beats/minute for each 1°C drop in temperature' },
      ],
      clinicalNotes: 'Hypothermic patients may appear dead. Continue resuscitation until patient is rewarmed.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of environmental emergencies requires understanding of thermoregulatory physiology, injury mechanisms, evidence-based cooling and rewarming protocols, and long-term complication management to optimize outcomes across the spectrum of environmental pathology.',
      explanation: `## Advanced Heat Illness Concepts

**Heat Stroke as Systemic Inflammatory Response:**
- Cytokine storm similar to sepsis
- Endothelial damage → capillary leak
- DIC: Consumption of coagulation factors
- MODS: Multi-organ dysfunction syndrome
- Overlap with sepsis makes diagnosis challenging

**Cooling Methods Comparison:**

| Method | Cooling Rate | Advantages | Disadvantages |
|--------|--------------|------------|---------------|
| Cold water immersion | 0.2-0.5°C/min | Fastest | May not be practical in ICU |
| Evaporative | 0.1°C/min | Easy, non-invasive | Slower, less effective with high humidity |
| Ice packs | Variable | Widely available | Risk of cold injury, slower |
| Invasive | Variable | Effective for refractory cases | Invasive, requires expertise |
| ECMO cooling | Variable | Controls all parameters | Limited availability |

**Cooling Complications:**
- Overcooling: Can induce hypothermia
- Shivering: Increases heat production
- Monitor temperature frequently (rectal or esophageal)
- Stop at 38.9°C (102°F) to prevent overcooling

**Heat Stroke Long-Term Sequelae:**
- Cerebellar dysfunction: Ataxia, dysarthria
- Peripheral neuropathy: Distal weakness
- Renal dysfunction: Chronic kidney disease
- Hepatic dysfunction: Usually resolves
- Pituitary dysfunction: Panhypopituitarism (rare)

## Advanced Cold Injury Concepts

**Hypothermia Classification Updates:**
- Based on clinical findings more than temperature
- Wilderness vs urban hypothermia
- Accidental vs therapeutic hypothermia

**ECG Evolution in Hypothermia:**
- Osborn waves: Most specific finding
- J wave amplitude increases as temperature drops
- Disappears with rewarming
- Other findings: Prolonged intervals, bradycardia

**Rewarming Shock:**
- Vasodilation during rewarming
- Relative hypovolemia
- Can precipitate cardiovascular collapse
- Aggressive fluid resuscitation needed

**Compartment Syndrome in Frostbite:**
- Tissue swelling after rewarming
- Measure compartment pressures
- Fasciotomy may be required
- Associated with electrical injury more than frostbite

**Frostbite Sequelae:**
- Chronic pain
- Hyperhidrosis or anhidrosis
- Cold sensitivity
- Nail deformities
- Growth plate damage in children
- Late amputation may be needed (demarcation takes weeks)

**Frostbite Grading:**
- Grade 1: Numbness with edema, no tissue loss
- Grade 2: Clear blisters, possible tissue loss
- Grade 3: Hemorrhagic blisters, tissue loss likely
- Grade 4: Full-thickness necrosis, amputation needed

**Adjunctive Therapies for Frostbite:**
- TPA (tissue plasminogen activator): May improve perfusion
- Iloprost (prostacyclin analog): Vasodilation, reduces tissue loss
- Hyperbaric oxygen: Controversial, limited evidence
- Sympathectomy: Vasodilation, limited availability

## Advanced Drowning Concepts

**Dry vs Wet Drowning:**
- Historical distinction (controversial)
- Both cause hypoxia
- Treatment same
- Term "dry drowning" no longer used

**Immersion vs Submersion:**
- Immersion: Face in water
- Submersion: Entire body under water
- Both can cause drowning

**Pathophysiology Updates:**
- Primary injury: Hypoxia
- Secondary injury: Reperfusion injury (similar to cardiac arrest)
- ARDS: Direct lung injury
- Neurologic injury: Hypoxic-ischemic encephalopathy

**Treatment Advances:**
- ECMO: For severe pulmonary edema
- Therapeutic hypothermia: Neuroprotection
- Antibiotics: Only if drowning in contaminated water
- Steroids: Not recommended

**Long-Term Sequelae:**
- Neurologic deficits: Cognitive, motor
- Pulmonary: Chronic lung disease
- Psychological: PTSD from near-drowning

## Advanced Electrical Injury Concepts

**Current Path Effects:**
- Hand-to-foot: Cardiac risk
- Hand-to-hand: Transcerebral risk
- Foot-to-foot: Less cardiac risk

**Tissue Injury Pattern:**
- Skin: Often minimal appearance, deep injury
- Muscle: Myonecrosis, compartment syndrome
- Nerve: Demyelination, axonal injury
- Bone: Heat damage, periosteal necrosis
- Vascular: Thrombosis, aneurysm formation

**Late Complications:**
- Cataracts: Weeks to months after injury
- Neuropathy: Persistent pain, weakness
- Contractures: From scarring
- Psychological: PTSD from traumatic event
- Cardiac: Arrhythmias, cardiomyopathy (rare)

**Workup:**
- ECG: Arrhythmias, conduction abnormalities
- CK: Muscle breakdown
- Urine myoglobin: Kidney injury risk
- CT/MRI: Deep tissue injury extent
- Angiography: Vascular injury

## Advanced Lightning Concepts

**Mechanisms:**
- Direct strike: 5% of injuries, highest mortality
- Splash: Injuries near object struck
- Ground current: Most common mechanism
- Side flash: Lightning jumps from object to person
- Blunt trauma: From being thrown

**Injury Patterns:**
- Cardiac: Asystole more common than VF
- Neurologic: Confusion, amnesia, paralysis
- Ophthalmic: Cataracts, retinal detachment, uveitis
- Otologic: TM rupture, hearing loss, vertigo
- Dermatologic: Linear burns, Lichtenberg figures
- Psychological: PTSD common

**Long-Term Sequelae:**
- Chronic pain syndromes
- Sleep disturbances
- Cognitive deficits
- Anxiety, depression
- Persistent neurological deficits

## Advanced Altitude Concepts

**Individual Susceptibility:**
- Genetic factors in acclimatization
- Previous AMS: Predictor of future episodes
- Fitness: Not protective
- Age: No clear correlation

**Pathophysiology Updates:**
- AMS: Mild cerebral edema from vasogenic edema
- HAPE: Non-cardiogenic pulmonary edema, inflammatory component
- HACE: Cerebral edema with increased ICP

**Pharmacology:**
- Acetazolamide: Carbonic anhydrase inhibition → increased ventilation, diuresis
- Dexamethasone: Reduces cerebral edema, symptom relief without acclimatization
- Nifedipine: Pulmonary vasodilation for HAPE
- Sildenafil: Alternative for HAPE (PDE5 inhibitor)

**Prevention Strategies:**
- Gradual ascent: Critical factor
- "Climb high, sleep low": Day trips to higher elevation
- Avoid alcohol, sedatives: Respiratory depression
- Maintain hydration: Prevents AMS symptoms
- High-carbohydrate diet: Reduces AMS severity

**Treatment Escalation:**
- Mild AMS: Rest, analgesics, fluids, acetazolamide
- Severe AMS: Descent, oxygen, dexamethasone
- HAPE: Immediate descent, oxygen, nifedipine
- HACE: Immediate descent, oxygen, dexamethasone, hyperbaric

**Gamow Bag:**
- Portable hyperbaric chamber
- Simulates descent of 1500-2500 m
- Treatment for severe AMS/HACE
- Requires continuous pumping

**Long-Term Sequelae:**
- HAPE recurrence: Likely with re-exposure
- HACE recovery: Usually complete, but can have residual deficits
- Neurological: Persistent ataxia in severe HACE

## Special Populations

**Pediatric:**
- Higher risk for environmental emergencies
- Less thermoregulatory capacity
- Higher surface area to mass ratio
- Drowning: Leading cause of death in children 1-4
- Heat stroke: More rapid onset

**Elderly:**
- Decreased thermoregulation
- Comorbidities increase risk
- Medications affect temperature regulation
- Heat stroke: Classic type more common
- Hypothermia: Poor outcomes

**Athletes:**
- Exertional heat stroke risk
- Rhabdomyolysis common
- May push through symptoms
- Acclimatization critical

**Occupational:**
- Firefighters, military, construction workers
- Heat illness risk factors
- Monitoring and acclimatization programs`,
      keyTerms: [
        { term: 'MODS', definition: 'Multi-Organ Dysfunction Syndrome; simultaneous failure of multiple organs' },
        { term: 'cytokine storm', definition: 'Massive release of inflammatory mediators; seen in heat stroke, sepsis' },
        { term: 'rewarming shock', definition: 'Cardiovascular collapse during rewarming from hypothermia' },
        { term: 'Lichtenberg figures', definition: 'Fern-like branching burns from lightning; pathognomonic' },
        { term: 'Gamow bag', definition: 'Portable hyperbaric chamber for altitude illness' },
        { term: 'climb high sleep low', definition: 'Altitude acclimatization strategy; sleep lower than highest point reached' },
      ],
      clinicalNotes: 'Core temperature measurement should be esophageal or rectal. Tympanic and oral are unreliable in extreme temperatures.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of environmental emergencies integrates evidence-based protocols, advanced monitoring technologies, regionalized systems of care, and preventive strategies to optimize outcomes across the spectrum of heat, cold, drowning, electrical, and altitude pathology.',
      explanation: `## Evidence-Based Environmental Medicine Updates

**Heat Illness:**

**2021 International Consensus Statement:**
- Heat stroke: Core temperature >40°C with CNS dysfunction
- Rapid cooling within 30 minutes improves outcomes
- Cold water immersion fastest method
- Target: Cool to 38.9°C, then stop

**Cooling Methods Evidence:**
- Ice water immersion: Most effective (cooling rate 0.35°C/min)
- Cold water immersion: Very effective (0.20°C/min)
- Evaporative: Less effective (0.09°C/min)
- Comparisons: Immersion significantly faster than evaporative

**Heat Stroke Mortality:**
- Without cooling: >50%
- With cooling: 5-10% (depending on delays)
- Neurologic sequelae in 20-30% of survivors

**Exertional vs Classic Heat Stroke:**
- Exertional: Young, healthy athletes, military
- Classic: Elderly, chronic illness, urban heat islands
- Both need aggressive cooling
- Rhabdomyolysis more common in exertional

**Hypothermia:**

**Targeted Temperature Management:**
- Hypothermia as treatment: Post-cardiac arrest
- 32-36°C for 24 hours
- Prevention of fever critical
- Avoid overcooling complications

**Rewarming Evidence:**
- Active core rewarming most effective for severe hypothermia
- ECMO with temperature control: Best outcomes
- Outcomes better with invasive monitoring

**Hypothermic Prognosis:**
- Good outcomes possible even with prolonged arrest if:
  - Cold water submersion
  - Asphyxial mechanism (not cardiac)
  - Continuous CPR
- No reliable predictors of outcome until rewarmed

**Frostbite Treatment Advances:**
- TPA within 24 hours: Improved digit survival
- Iloprost: Reduced amputation rates
- Multidisciplinary approach improves outcomes
- Delayed amputation until tissue demarcation (weeks)

**Drowning:**

**2020 AHA Guidelines:**
- Rescue breathing critical (hypoxia primary problem)
- Compression-to-ventilation ratio:
  - 30:2 for single rescuer
  - 15:2 for two rescuers (child)
  - 30:2 for two rescuers (infant)
- In-water resuscitation: Only if safe, difficult

**Post-Drowning Care:**
- ECMO: For severe hypoxemic respiratory failure
- Therapeutic hypothermia: Controversial
- Prognosis difficult in first 72 hours

**Drowning Prevention:**
- Four-sided fencing around pools: Most effective
- Life jackets: Critical for boating
- Supervision: Constant, within arm's reach
- Swimming lessons: Reduces risk but doesn't eliminate

**Electrical Injuries:**

**Management Evidence:**
- Cardiac monitoring: 24 hours for high-risk exposures
- CK monitoring: Detect rhabdomyolysis early
- Compartment pressure monitoring: High-risk injuries
- Tetanus prophylaxis: Indicated for all burns

**Lightning Safety:**
- "When thunder roars, go indoors"
- 30-30 rule: 30 minutes after last thunder
- Safe places: Buildings with wiring/plumbing, metal-topped vehicles
- Unsafe: Open areas, under trees, near water

**Lightning Injuries:**
- Keraunoparalysis: Usually resolves
- Cataracts: Delayed presentation, screen for 6-12 months
- Neuropsychiatric sequelae: PTSD common

**Altitude Illness:**

**2019 Wilderness Medical Society Guidelines:**

**AMS:**
- Diagnosis: Headache plus one other symptom
- Treatment: Descent most effective
- Acetazolamide: 125 mg BID
- Dexamethasone: 4-6 mg initial, then 4 mg q6h

**HAPE:**
- Diagnosis: Dyspnea at rest, crackles, cyanosis
- Treatment: Descent, oxygen 2-4 L/min, nifedipine 10 mg q8-12h
- Prophylaxis: Nifedipine for high-risk individuals

**HACE:**
- Diagnosis: Ataxia + altered mental status
- Treatment: Descent, oxygen, dexamethasone 8 mg initial, then 4 mg q6h
- Hyperbaric therapy: Gamow bag 2-4 hours

**Acclimatization:**
- Graded ascent: Critical for prevention
- Avoid increasing sleeping elevation by >300 m/day above 3000 m
- Rest day every 3-4 days
- "Climb high, sleep low"

**Genetic Factors:**
- MTHFR polymorphisms: AMS susceptibility
- ACE I/D polymorphism: HAPE risk
- eNOS variants: Altitude adaptation
- Personalized medicine future application

## Quality and Outcomes

**Heat Stroke:**
- Time to cooling: Critical metric
- Cooling rate goal: >0.1°C/min
- Temperature monitoring frequency
- Mortality rate: <10% with rapid cooling

**Hypothermia:**
- Time from discovery to rewarming
- Rewarming method choice based on severity
- Survival even with profound hypothermia if properly managed

**Drowning:**
- Submersion time: Key prognostic factor
- Time to CPR: Critical for outcome
- Neurologic outcome assessment at 3-12 months

**Electrical/Lightning:**
- Cardiac monitoring compliance
- Late complication screening
- Rehabilitation access

## Prevention Strategies

**Heat Illness Prevention:**
- Acclimatization: 7-14 days
- Hydration: Thirst-guided adequate for most
- Work-rest cycles: Based on WBGT (Wet Bulb Globe Temperature)
- Monitoring: Buddy system, environmental measurements
- Emergency action plans: For athletic events, military training

**Cold Injury Prevention:**
- Layered clothing: Wicking layer, insulation, shell
- Extremity protection: Hands, feet, head
- Hydration: Important even in cold
- Weather monitoring: Wind chill critical
- Buddy system: Recognize hypothermia in others

**Water Safety:**
- Four-sided pool fencing: Most effective intervention
- Life jacket use: Critical for boating
- Supervision: Within arm's reach, constant
- Swimming lessons: Risk reduction but not prevention
- CPR training: For caregivers

**Electrical Safety:**
- Ground fault circuit interrupters (GFCIs)
- Lockout/tagout for electrical work
- Stay away from downed power lines
- Home safety: Outlet covers, cord maintenance

**Lightning Safety:**
- When thunder roars, go indoors
- 30-minute rule after last thunder
- Safe buildings: Full wiring/plumbing
- Safe vehicles: Metal-topped with windows up
- Avoid: Open areas, tall objects, water

## Future Directions

**Heat Illness:**
- Biomarkers for early recognition
- Cooling vests for workers
- Personal environmental monitoring
- Wearable technology for early warning

**Hypothermia:**
- Portable ECMO for field use
- Improved rewarming techniques
- Novel monitoring technologies
- Therapeutic hypothermia optimization

**Drowning:**
- Underwater drones for rescue
- Automated external CPR for water
- Improved resuscitation techniques
- Neuroprotective strategies

**Electrical Injuries:**
- Improved safety devices
- Better compartment syndrome detection
- Nerve regeneration therapies
- Long-term outcome tracking

**Altitude Medicine:**
- Genetic screening for susceptibility
- Novel pharmacologic agents
- Portable hyperbaric chambers
- Predictive models for AMS

**Global Health:**
- Climate change: Increasing heat illness
- Water access: Drowning prevention globally
- Occupational health: Worker protection
- Disaster preparedness: Environmental emergencies in disasters

## Systems of Care

**Heat Illness:**
- Event medical coverage for athletic events
- Cooling stations during heat waves
- Public health advisories
- Vulnerable population outreach

**Cold Exposure:**
- Warming centers during cold waves
- Homeless outreach programs
- Weatherization assistance
- Emergency response protocols

**Water Safety:**
- Lifeguard training and staffing
- Public education campaigns
- Pool safety regulations
- Boat safety requirements

**Lightning Safety:**
- Outdoor event protocols
- Sports league guidelines
- Park warning systems
- Public education campaigns`,
      keyTerms: [
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature; composite measure of heat stress' },
        { term: 'GFCI', definition: 'Ground Fault Circuit Interrupter; electrical safety device' },
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase; genetic variant associated with AMS' },
        { term: 'lockout/tagout', definition: 'Safety system for controlling hazardous energy during maintenance' },
        { term: 'neuroprotective strategies', definition: 'Interventions to protect nervous system during injury' },
      ],
      clinicalNotes: `Key Clinical Pearls for Environmental Emergencies:

1. **Heat stroke = Medical emergency:** Every minute of delay increases mortality
2. **Cold water immersion is fastest cooling:** Use for heat stroke when available
3. **No one is dead until warm and dead:** Prolonged resuscitation in hypothermia
4. **Hypoxia is primary problem in drowning:** Rescue breaths critical
5. **Scene safety first:** Especially for electrical and lightning injuries
6. **Altitude:** Descent is most effective treatment
7. **Afterdrop danger:** Rewarming can cause cardiovascular collapse
8. **Late complications:** Cataracts after lightning; compartment syndrome after electrical
9. **Prevention saves lives:** Fencing, supervision, weather monitoring
10. **Environmental justice:** Vulnerable populations at highest risk`,
    },
  },

  media: [
    {
      id: 'heat-illness-spectrum',
      type: 'diagram',
      filename: 'heat-illness-classification.svg',
      title: 'Heat Illness Spectrum',
      description: 'From heat cramps to heat stroke with management',
    },
    {
      id: 'hypothermia-classification',
      type: 'diagram',
      filename: 'hypothermia-stages-table.svg',
      title: 'Hypothermia Classification',
      description: 'Mild, moderate, severe hypothermia with findings and treatment',
    },
    {
      id: 'lightning-safety-rules',
      type: 'diagram',
      filename: 'lightning-safety-30-30-rule.svg',
      title: 'Lightning Safety 30-30 Rule',
      description: 'Lightning safety guidelines',
    },
  ],

  citations: [
    {
      id: 'heat-illness-consensus-2021',
      type: 'article',
      title: 'Consensus Statement: Global Heat Stroke Treatment',
      authors: ['Racinais, S.', 'et al.'],
      source: 'British Journal of Sports Medicine',
    },
    {
      id: 'wms-guidelines-altitude-2019',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for Treatment of Acute Altitude Illness',
      authors: ['Luks, A.M.', 'et al.'],
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'aha-drowning-2020',
      type: 'article',
      title: '2020 AHA Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care',
      authors: ['American Heart Association'],
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'emergency-cardiac', targetType: 'topic', relationship: 'related', label: 'Cardiac Emergencies (Arrhythmias)' },
    { targetId: 'emergency-respiratory', targetType: 'topic', relationship: 'related', label: 'Respiratory Emergencies (Pulmonary Edema)' },
  ],

  tags: {
    systems: ['integumentary', 'nervous', 'cardiovascular', 'respiratory'],
    topics: ['emergency medicine', 'wilderness medicine', 'environmental health'],
    keywords: ['heat stroke', 'hypothermia', 'frostbite', 'drowning', 'electrical injury', 'lightning', 'altitude sickness'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'wilderness medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default environmentalContent;
