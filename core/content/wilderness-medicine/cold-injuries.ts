/**
 * Cold Injuries - Comprehensive Educational Content
 *
 * Medical conditions caused by cold exposure including hypothermia,
 * frostbite, and non-freezing cold injuries. Understanding prevention,
 * recognition, and treatment of cold injuries is essential for winter
 * wilderness activities.
 *
 * IMPORTANT: This content is for educational purposes only. Severe cold
 * injuries require medical evaluation and may need specialized care.
 */

import { EducationalContent } from '../types';

export const coldInjuriesContent: EducationalContent = {
  id: 'cold-injuries',
  type: 'condition',
  name: 'Cold Injuries',
  alternateNames: ['Cold Exposure', 'Freezing Injury', 'Hypothermia', 'Frostbite', 'Trench Foot', 'Chilblains'],

  levels: {
    1: {
      level: 1,
      summary: 'Cold injuries happen when your body gets too cold. This includes feeling very cold (hypothermia) and parts of your body freezing (frostbite). Staying dry, warm, and protected from wind helps prevent these problems.',
      explanation: `## What Are Cold Injuries?

Cold injuries happen when your body is exposed to cold temperatures for too long. Your body cannot stay warm enough, and this can damage your skin and other parts of your body.

## Types of Cold Injuries

### Hypothermia (Your Whole Body Gets Too Cold)

**What Happens:**
- Your body temperature drops too low
- Your body cannot warm itself up

**Warning Signs:**
- Shivering (shaking) a lot
- Feeling very tired
- Hands and feet feel cold and numb
- Confusion or acting strange
- Clumsy, tripping or falling
- **Danger Sign:** Shivering stops

### Frostbite (Parts of Your Body Freeze)

**What Happens:**
- Skin and tissue freeze
- Most common on fingers, toes, nose, ears

**Warning Signs:**
- Skin looks white or waxy
- Feels numb or hard
- Cannot feel that body part

### Non-Freezing Injuries

**Trench Foot (Immersion Foot):**
- Happens when feet are wet and cold for a long time
- Skin becomes red, swollen, and painful
- Can cause permanent damage

## How to Stay Safe

### Dress Right
- Wear layers of clothes
- Keep your head covered (lots of heat escapes here!)
- Wear waterproof boots
- Protect hands with mittens (better than gloves)
- Cover your ears

### Stay Dry
- Wet clothes make you cold faster
- Change wet clothes right away
- Don't sit or stand in snow
- Watch out for sweat

### Eat and Drink
- Food gives your body fuel to make heat
- Drink plenty of water
- Bring warm drinks when it's cold

### Watch Your Friends
- Check each other for frostbite
- Look at each other's faces (white spots?)
- Ask if anyone feels very cold

## What To Do

### For Someone With Hypothermia
1. Get them out of the cold and wind
2. Take off wet clothes
3. Put on dry, warm clothes
4. Wrap them in blankets
5. Give warm (not hot) drinks
6. **Call for help if they seem confused or very sick**

### For Someone With Frostbite
1. Get to a warm place
2. Take off tight clothes/jewelry
3. **Do NOT rub the frozen part**
4. Warm the part gently with warm water (not hot)
5. Do not use the frozen part
6. **Get medical help**

## Golden Rules

- **Stay dry** - wet equals cold
- **Layer your clothes** - trap warm air
- **Cover your head** - stop heat loss
- **Watch each other** - check for frostbite
- **Get help early** - don't wait`,
      keyTerms: [
        { term: 'hypothermia', definition: 'When your whole body gets dangerously cold', pronunciation: 'hy-poh-THUR-mee-uh' },
        { term: 'frostbite', definition: 'When body parts freeze from cold exposure' },
        { term: 'shivering', definition: 'When your body shakes to make heat' },
        { term: 'numb', definition: 'When you cannot feel a part of your body' },
        { term: 'layers', definition: 'Wearing multiple clothes on top of each other to stay warm' },
      ],
      analogies: [
        'Your body is like a house - it needs insulation (clothes) and fuel (food) to stay warm.',
        'Wet clothes in winter are like leaving the freezer door open - the cold gets in fast!',
        'Shivering is like your body shaking a can of soda to mix it up - it creates heat.',
      ],
      examples: [
        'A skier gets cold and wet after falling in snow and starts shivering a lot.',
        'A hiker forgets gloves and their fingertips turn white and numb.',
        'Someone falls through ice into cold water and gets very cold very fast.',
      ],
      patientCounselingPoints: [
        'Check yourself and your friends for white spots on skin - this is frostbite.',
        'If your clothes get wet, change them right away.',
        'Wear a hat - lots of heat escapes from your head!',
        "Don't rub frostbite - it can damage the skin more.",
        'Bring extra clothes and snacks when you go out in the cold.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cold injuries include hypothermia (core temperature <95°F), frostbite (tissue freezing), and non-freezing injuries like trench foot. Prevention focuses on staying dry, layered clothing, and proper nutrition. Treatment involves removing cold exposure, gradual rewarming, and protecting injured tissue.',
      explanation: `## Classification of Cold Injuries

### Hypothermia by Temperature

| Stage | Core Temperature | Signs | Shivering |
|-------|------------------|-------|-----------|
| Mild | 90-95°F (32-35°C) | Alert, cold, clumsy | Intense |
| Moderate | 82-90°F (28-32°C) | Confused, drowsy | Decreasing |
| Severe | <82°F (<28°C) | Unconscious, rigid | Absent |

### Frostbite Classification

| Classification | Description | Tissue Damage | Appearance |
|----------------|-------------|---------------|------------|
| Frostnip | Superficial, reversible | None | Pale, numb, resolves with rewarming |
| Superficial | Skin and subcutaneous | Minimal | White/waxy, palpable |
| Deep | Tissue, possibly bone | Significant | Hard, wood-like, no sensation |

### Non-Freezing Cold Injuries

**Trench Foot (Immersion Foot):**
- Caused by prolonged exposure to wet cold (above freezing)
- Typically: 12 hours to 4 days exposure
- Signs: Red, swollen, painful skin; possible numbness; blisters
- Can cause permanent nerve damage and tissue loss

**Chilblains (Perniosis):**
- Caused by cold, damp conditions
- Red/purple patches on skin
- Itchy, painful
- Usually resolves without permanent damage

## Pathophysiology: How Cold Injuries Happen

### Heat Loss Mechanisms

**Radiation (60%):** Heat radiates from bare skin to cooler environment

**Conduction:** Direct contact with cold surfaces
- Water conducts heat 25x faster than air
- Contact with cold ground, metal, ice

**Convection:** Air or water movement carries heat away
- Wind chill significantly increases heat loss
- Water movement carries heat rapidly

**Evaporation:** Wet skin or sweating loses heat

### Body Response to Cold

**Normal Response:**
1. Vasoconstriction - blood vessels narrow in extremities
2. Shivering - muscles generate heat
3. Increased metabolism - burns fuel for warmth
4. Behavioral - seek warmth, huddle, curl up

**When These Fail:** Hypothermia develops

## Hypothermia: Detailed Assessment

### Mild Hypothermia (32-35°C)
- Vigorous shivering
- Cold extremities
- Poor judgment
- Slight coordination problems
- Fast heart rate initially

### Moderate Hypothermia (28-32°C)
- Shivering decreases or stops
- Stumbling, clumsiness
- Confusion, slurred speech
- Slow heart rate
- "Paradoxical undressing" may occur

### Severe Hypothermia (<28°C)
- No shivering
- Rigid muscles
- Unconscious
- Very slow heart rate and breathing
- Pupils may be fixed and dilated
- May appear dead

## Frostbite: Detailed Assessment

### Risk Factors
- Previous frostbite
- Peripheral vascular disease
- Diabetes
- Smoking
- Alcohol use
- Inadequate clothing
- High altitude

### Body Parts Most Commonly Affected
1. Fingers and hands
2. Toes and feet
3. Ears
4. Nose
5. Cheeks and chin

### Frostbite Progression

**Early (Frostnip):**
- White, waxy appearance
- Numbness
- No permanent damage

**Superficial Frostbite:**
- Skin feels hard
- Clear blisters may form
- Some tissue damage possible

**Deep Frostbite:**
- Tissue feels wood-like
- No sensation
- Hemorrhagic blisters
- Tissue loss likely

## Treatment Protocols

### Hypothermia Treatment

**Mild Hypothermia:**
- Remove from cold/wind
- Replace wet with dry clothing
- Add insulation (sleeping bag, blankets)
- Active movement if able
- Warm, sweet drinks
- High-calorie food

**Moderate Hypothermia:**
- All of the above PLUS:
- Limit activity (cardiac risk)
- Horizontal position
- Consider heat to core areas (armpits, groin)
- Hot water bottles wrapped in cloth
- Monitor vital signs

**Severe Hypothermia:**
- Handle extremely gently
- Keep horizontal (prevent cold blood rushing to heart)
- Insulate from ground and air
- CPR if no pulse (check for 60 seconds)
- "No one is dead until warm and dead"

### Frostbite Treatment

**Field Management:**
1. Get to warm environment
2. Remove constrictive items
3. Do NOT rub or massage
4. Do NOT use snow to rub
5. Do NOT rewarm if might refreeze

**Rewarming (if definitive care available):**
- Warm water at 37-39°C (98-102°F)
- Do NOT use hot water
- Immerse affected part
- Gently circulate water
- Continue until color returns (may take 30-60 min)
- Protect from injury during thawing (very painful)

**After Rewarming:**
- Keep clean and dry
- Elevate if possible
- Leave blisters intact
- Seek medical evaluation

## Prevention Strategies

### Clothing System
- **Base layer:** Moisture-wicking, NO cotton
- **Insulation layer:** Fleece, wool, down
- **Outer layer:** Wind/waterproof shell
- **Extremities:** Mittens warmer than gloves
- **Head:** Hat covering ears

### Behavioral Prevention
- Monitor weather and conditions
- Take breaks in shelter
- Eat regularly (fuel for heat)
- Stay hydrated
- Buddy system - check each other
- Know your limits

### Equipment Considerations
- Waterproof boots
- Gaiters to keep snow out
- Extra socks
- Hand/foot warmers
- Emergency shelter`,
      keyTerms: [
        { term: 'wind chill', definition: 'How cold the wind makes it feel, increases heat loss' },
        { term: 'frostnip', definition: 'Mild, reversible cold injury with no permanent damage' },
        { term: 'trench foot', definition: 'Foot injury from prolonged wet cold exposure' },
        { term: 'paradoxical undressing', definition: 'Confused hypothermic person removing clothes' },
        { term: 'afterdrop', definition: 'Temperature continues to drop during early rewarming' },
        { term: 'chilblains', definition: 'Cold injury causing red, itchy skin patches', pronunciation: 'CHILL-baynz' },
      ],
      analogies: [
        'Hypothermia stages are like a dimmer switch: bright and alert, getting dim and confused, then dark and unconscious.',
        'Wind chill is like a fan blowing on your soup - it cools it faster than just sitting there.',
        "Treating frostbite is like thawing frozen food - do it gently and don't refreeze.",
      ],
      examples: [
        'A skier falls into water while skiing, gets wet, and develops hypothermia.',
        'A climber at high altitude develops frostbite on fingertips despite warm clothing.',
        'A soldier in wet boots for days develops trench foot with numb toes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cold injuries encompass hypothermia (core temperature <35°C), frostbite (tissue freezing), and non-freezing injuries. Pathophysiology involves heat loss exceeding production, vasoconstriction, and eventual tissue damage. Management focuses on preventing further heat loss, controlled rewarming, and avoiding complications like afterdrop and rewarming shock.',
      explanation: `## Thermoregulation and Cold Pathophysiology

### Normal Heat Balance
\`\`\`
Heat Production = Heat Loss
Metabolic Rate + Activity = Radiation + Conduction + Convection + Evaporation

Normal Core Temperature: 36.5-37.5°C
Hypothermia: <35°C (95°F)
\`\`\`

### Heat Loss in Detail

**Conduction Coefficients:**
- Air: Poor conductor
- Water: 25x more conductive than air
- Metal: Extremely conductive
- Ground: Conducts heat away when in contact

**Wind Chill Effect:**
- Moving air disrupts boundary layer of warm air
- Increases convective heat loss
- Wind chill chart shows "feels like" temperature
- Critical for assessing frostbite risk

**Evaporative Loss::**
- Sweat: 580 kcal heat loss per liter evaporated
- Wet clothing: Continuous heat loss
- Respiration: Heat and moisture loss with breathing

### Cold Physiology

**Cardiovascular Response:**
- Initial: Tachycardia, increased CO, hypertension
- Progressive: Bradycardia, decreasing CO, hypotension
- Cold-induced diuresis (increased urine output)

**Respiratory Response:**
- Initial: Tachypnea
- Progressive: Decreased respiratory drive
- Bronchoconstriction in cold air

**Neurologic Response:**
- Progressive CNS depression
- EEG slowing correlates with temperature
- Loss of consciousness ~30°C
- Reflexes absent below 28°C

**Hematologic Effects:**
- Coagulopathy (enzyme dysfunction)
- Hemoconcentration (fluid shifts)
- Thrombocytopenia
- Possible DIC in severe cases

## Hypothermia: Clinical Staging

### Swiss Staging System (HT I-IV)

| Stage | Clinical Findings | Est. Temp | Field Treatment |
|-------|-------------------|-----------|-----------------|
| HT I | Conscious, shivering | 32-35°C | Active rewarming |
| HT II | Impaired consciousness | 28-32°C | Careful handling, prepare for evacuation |
| HT III | Unconscious, vitals present | 24-28°C | Extreme gentleness, ECMO-capable center |
| HT IV | Apparent death | <24°C | CPR if indicated, ECMO if available |

### Complications

**Afterdrop:**
- Core temperature continues to fall during early rewarming
- Cold blood from extremities returns to core
- Can precipitate arrhythmias
- Minimized by warming core first

**Rewarming Shock:**
- Vasodilation in extremities during rewarming
- Relative hypovolemia as blood pools peripherally
- May require fluid support

**Arrhythmias:**
- Cold heart irritable
- J wave (Osborn wave) on ECG
- Atrial fibrillation common
- VF risk highest 24-28°C

## Frostbite: Pathophysiology and Classification

### Freezing Injury Mechanism

\`\`\`
Ice Crystal Formation:
  Extracellular ice → increases solute concentration
  → Water leaves cells (osmotic gradient)
  → Cellular dehydration
  → Intracellular ice formation (severe cases)
  → Cell membrane disruption
  → Cell death

Vascular Injury:
  Vasoconstriction → endothelial damage
  → Thrombosis
  → Ischemia
  → Tissue necrosis

Inflammatory Phase (post-thaw):
  Prostaglandin release
  → Edema
  → Further tissue damage
\`\`\`

### Frostbite Classification

**First Degree (Frostnip):**
- Epidermal involvement only
- Numbness, pallor
- No tissue loss
- Reverses with rewarming

**Second Degree (Superficial):**
- Epidermis and superficial dermis
- Clear/blister formation
- Edema, erythema
- Minimal tissue loss

**Third Degree (Deep):**
- Full thickness skin to subcutaneous
- Hemorrhagic blisters
- Skin necrosis possible
- Tissue loss likely

**Fourth Degree:**
- Full thickness including muscle, bone, tendon
- Hard, wood-like texture
- No sensation
- Tissue loss certain, amputation likely

### Non-Freezing Cold Injuries

**Trench Foot Pathophysiology:**
\`\`\`
Prolonged cold + wet (0-15°C)
  → Vasoconstriction
  → Capillary endothelial damage
  → Increased permeability
  → Edema
  → Nerve injury
  → Potential tissue necrosis
\`\`\`

**Stages of Trench Foot:**
1. Hyperemic stage: Red, swollen, painful
2. Vasospastic stage: Pale, cold, decreased pulses
3. Permanent damage: Nerve injury, tissue loss

## Treatment Protocols

### Hypothermia Rewarming Methods

**Passive External Rewarming:**
- Remove from cold environment
- Dry insulation, vapor barrier
- Allow body to rewarm itself
- Rate: 0.5-2°C/hour
- Appropriate: HT I

**Active External Rewarming:**
- Forced warm air (Bair Hugger)
- Hot water bottles to trunk
- Body-to-body contact
- Rate: 1-2°C/hour
- Appropriate: HT I-II

**Active Core Rewarming:**
- Warm IV fluids (40-42°C)
- Warm humidified oxygen
- Peritoneal/pleural lavage
- Rate: 2-4°C/hour
- Appropriate: HT II-III

**Extracorporeal Rewarming:**
- ECMO or cardiopulmonary bypass
- Rate: 4-10°C/hour
- Definitive treatment for HT III-IV

### Frostbite Treatment Algorithm

**Field Management:**
1. Evacuate to definitive care if possible
2. Remove constrictive items
3. Protect from further cold exposure
4. Do NOT rub or massage
5. Do NOT use snow to rub
6. Analgesia for rewarming pain
7. Tetanus prophylaxis if indicated

**Rewarming Protocol:**
- Water temperature: 37-39°C (98-102°F)
- Circulate water to maintain even temperature
- Immerse affected part
- Continue until erythema returns (30-60 minutes)
- Separate toes with cotton
- Elevate if possible
- Leave blisters intact

**Post-Thaw Care:**
- Keep clean, dry
- Splint if needed
- Daily whirlpool for debridement
- Delayed amputation (tissue demarcation takes 1-3 months)
- Consider sympathectomy for vasospasm

### Trench Foot Treatment

**Immediate:**
- Remove wet socks/boots
- Dry feet thoroughly
- Rewarm gradually
- Do NOT rub
- Elevate to reduce edema

**Ongoing:**
- Keep clean and dry
- Pain control
- Avoid further cold exposure
- May require weeks to heal`,
      keyTerms: [
        { term: 'Osborn wave', definition: 'ECG finding in hypothermia - J-point elevation', pronunciation: 'OZ-bern' },
        { term: 'Swiss staging', definition: 'HT I-IV clinical classification of hypothermia severity' },
        { term: 'afterdrop', definition: 'Continued core cooling during initial rewarming' },
        { term: 'rewarming shock', definition: 'Hypotension from peripheral vasodilation during rewarming' },
        { term: 'sympathectomy', definition: 'Surgical interruption of sympathetic nerves to improve blood flow', pronunciation: 'sim-puh-TEK-tuh-mee' },
      ],
      clinicalNotes: 'Swiss staging allows clinical assessment when temperature unavailable. Potassium >12 mEq/L in hypothermic arrest indicates poor prognosis. ECMO is treatment of choice for severe hypothermia with cardiac arrest. Frostbite tissue demarcation takes 1-3 months - wait for definitive amputation decisions. Delayed presentation (>24h) should not be rewarmed in field if thaw-refreeze risk.',
    },
    4: {
      level: 4,
      summary: 'Cold injury management requires understanding of temperature-dependent physiology, including coagulopathy, arrhythmogenesis, and altered pharmacokinetics. ECMO provides optimal rewarming for severe hypothermia. Frostbite treatment involves controlled rapid rewarming with careful pain management and delayed surgical decision-making. Evidence-based guidelines inform prognosis.',
      explanation: `## Advanced Pathophysiology

### Temperature-Dependent Physiological Changes

**Cardiac Electrophysiology:**
\`\`\`
ECG Progression with Temperature:
35°C: Sinus tachycardia, tremor artifact
32°C: Bradycardia, PR/QRS/QT prolongation
30°C: J (Osborn) waves, atrial fibrillation possible
28°C: Increased VF susceptibility
<25°C: Asystole, "ventricular paralysis"
\`\`\`

**Osborn Wave Mechanism:**
- Temperature-dependent K+ current alteration
- Heterogeneous repolarization
- More prominent in epicardium vs endocardium
- Height correlates with hypothermia severity

**Coagulopathy Mechanism:**
\`\`\`
Enzyme kinetics: ~10% reduction per °C below 37°C
Platelet dysfunction: Impaired adhesion/aggregation
Endothelial effects: Altered TF/vWF balance
Clinical: Normal labs at 37°C but in vivo coagulopathy
\`\`\`

**Pharmacokinetic Changes:**
- Hepatic metabolism reduced
- Renal excretion decreased
- Protein binding altered
- Volume of distribution changes
- Effect: Delayed onset, prolonged duration, possible accumulation

### Cold-Induced Cellular Injury

**Membrane Effects:**
- Altered lipid bilayer fluidity
- Ion pump dysfunction (Na+/K+-ATPase)
- Calcium dyshomeostasis
- Mitochondrial dysfunction

**Cryoprotective Responses:**
- Cold-shock proteins
- Metabolic suppression
- Reduced oxygen consumption
- May explain "miracle" survival cases

## Evidence-Based Hypothermia Management

### Prognostic Indicators

**HOPE Score (Hypothermia Outcome Prediction after ECLS):**
- Age
- Sex
- Asphyxia mechanism
- CPR duration
- Serum potassium

**Potassium as Prognostic Marker:**
- K+ <8 mEq/L: Favorable
- K+ 8-12 mEq/L: Guarded
- K+ >12 mEq/L: Generally incompatible with survival

**Favorable Survival Factors:**
- Witnessed arrest
- Short downtime
- Non-asphyxial mechanism
- Younger age
- Potassium <8-12

### Modified ACLS Algorithm

**<30°C Considerations:**
| Intervention | Approach |
|--------------|----------|
| Defibrillation | Single shock, then withhold until >30°C |
| Epinephrine | Consider holding or doubling interval |
| Amiodarone | Not recommended until >30°C |
| Focus | Rewarm to 30°C, then resume ACLS |

**Vascular Access:**
- IV access may be difficult (constricted veins)
- Intraosseous access preferred in severe hypothermia
- Cold blood drawn into syringe may clot before testing

## Frostbite: Advanced Management

### Adjunctive Therapies

**Thrombolysis:**
- Tissue plasmininogen activator (tPA) within 24h
- Improves perfusion in some cases
- Risk of bleeding
- Consider for severe frostbite with viable tissue

**Intravenous Iloprost:**
- Prostacyclin analog
- Vasodilator, antiplatelet, anti-inflammatory
- Used for severe frostbite
- Requires hospital monitoring

**Sympathetic Blockade:**
- Regional nerve blocks
- Reduces vasoconstriction
- Decreases pain
- May improve tissue salvage

### Surgical Timing

**Early Intervention (<72h):**
- Fasciotomy for compartment syndrome
- Escharotomy for circumferential burns
- Debridement of clearly necrotic tissue
- Amputation contraindicated

**Delayed Intervention (1-3 months):**
- Tissue demarcation complete
- MRI/CT angiography aids planning
- Amputation at demarcation line
- Reconstruction planning

### Complications of Frostbite

**Neurologic:**
- Hyperesthesia (increased sensitivity)
- Neuropathic pain
- Numbness, paresthesias
- Cold intolerance

**Musculoskeletal:**
- Joint stiffness
- Contractures
- Growth plate damage in children
- Nail deformities

**Vascular:**
- Raynaud phenomenon
- Altered sweat production
- Hair loss in affected area
- Increased cold sensitivity

## Non-Freezing Cold Injuries

### Chronic Sequelae

**Post-Trench Foot:**
- Persistent hyperhidrosis
- Cold sensitivity
- Neuropathic pain
- Increased risk of recurrent injury

**Chilblains Complications:**
- Ulceration
- Secondary infection
- Scarring
- Recurrence with re-exposure

### Prevention of Recurrence

**Behavioral:**
- Avoid prolonged cold/wet exposure
- Rotate foot wear
- Foot inspections
- Prompt treatment of reinjury

**Protective:**
- High-quality waterproof footwear
- Moisture-wicking socks
- Extra socks for changes
- Foot powder to reduce moisture

## Special Populations

**Pediatric:**
- Higher surface-to-mass ratio
- Less subcutaneous fat
- Immature thermoregulation
- Faster cooling rates

**Geriatric:**
- Reduced metabolic rate
- Medication effects (beta-blockers, sedatives)
- Comorbidities
- Decreased mobility

**High Altitude:**
- Lower ambient temperatures
- Increased risk of frostbite
- Hypoxia impairs judgment
- May delay recognition of injury`,
      keyTerms: [
        { term: 'HOPE score', definition: 'Predicts survival after ECMO rewarming of hypothermic arrest' },
        { term: 'cryoprotective', definition: 'Protecting cells from freezing damage' },
        { term: 'iloprost', definition: 'Prostacyclin analog used for severe frostbite to improve perfusion' },
        { term: 'demarcation', definition: 'Clear line between dead and viable tissue after injury' },
        { term: 'hyperesthesia', definition: 'Increased sensitivity to stimulation', pronunciation: 'hy-per-es-THEE-zhuh' },
      ],
      clinicalNotes: 'K+ >12 mEq/L in hypothermic arrest generally incompatible with survival. ECMO should be considered for all hypothermic cardiac arrests without contraindications. tPA for frostbite should be given within 24 hours of thaw. Surgical amputation decisions should be delayed 1-3 months for tissue demarcation. Children have higher frostbite risk due to smaller extremities.',
    },
    5: {
      level: 5,
      summary: 'Cold injury management has evolved with ECMO availability and improved understanding of cold-induced cellular injury. Evidence-based prognostic scoring (HOPE) guides resuscitation. Frostbite treatment incorporates thrombolysis and vasodilators for tissue salvage. Long-term sequelae require comprehensive management. Ongoing research explores optimal rewarming rates and novel cytoprotective agents.',
      explanation: `## Molecular Mechanisms of Cold Injury

### Cryobiology: Cellular Freezing

**Extracellular Freezing Sequence:**
\`\`\`
Cooling below 0°C
  ↓
Extracellular ice crystal formation
  ↓
Increased extracellular solute concentration
  ↓
Osmotic gradient draws water from cells
  ↓
Cellular dehydration and shrinkage
  ↓
Intracellular ice formation (if cooling continues)
  ↓
Membrane disruption and cell death
\`\`\`

**Intracellular Ice Formation:**
- Occurs with rapid cooling
- Lethal to cells
- Mechanical disruption of membranes
- Protein denaturation

**Solution Effects Injury:**
- Prolonged exposure to concentrated solutes
- Protein denaturation
- Lipid membrane damage
- Occurs with slow freezing

**Dehydration Injury:**
- Cellular water loss to extracellular space
- Increased intracellular viscosity
- Protein-protein interactions
- Membrane fusion

### Ischemia-Reperfusion in Cold Injury

**Reperfusion Injury Mechanism:**
\`\`\`
Rewarming of frozen tissue
  → Return of blood flow
  → Oxidative stress
  → Free radical production
  → Inflammation
  → Edema
  → Further tissue damage
\`\`\`

**Inflammatory Mediators:**
- Prostaglandins (PGE2, thromboxane)
- Leukotrienes
- Bradykinin
- Histamine
- Complement activation
- Cytokines (IL-1, IL-6, TNF-α)

### Cold-Induced Neuropathy

**Nerve Injury Patterns:**
- Axonal degeneration
- Demyelination
- Endoneural edema
- Microvascular compromise

**Cold Panniculitis:**
- Subcutaneous fat inflammation
- Predilection for areas with higher fat content
- More common in children
- May predispose to recurrent injury

## Evidence-Based Practice Updates

### ECMO in Hypothermia

**Indications:**
\`\`\`
Cardiac arrest with hypothermia
  ↓
Contraindications absent?
  ↓
Initiate CPR, rewarm to 30°C
  ↓
ROSC achieved?
  ↓
  No → Consider ECMO if:
    - K+ <8-12 mEq/L
    - Witnessed arrest
    - Non-asphyxial mechanism
  Yes → Continue standard care
\`\`\`

**Outcome Data:**
- Survival to discharge: 30-60% in select populations
- Neurologically intact: ~50% of survivors
- Key: Appropriate patient selection

**HOPE Score Validation:**
- External validation confirms predictive value
- AUC 0.81 for survival prediction
- Helps avoid futile interventions
- Online calculator available

### Frostbite Adjuncts

**Thrombolysis Evidence:**
- Meta-analysis: Tissue salvage benefit when <24h
- tPA vs. control: Significant reduction in amputation
- Bleeding risk ~10-15%
- Requires careful patient selection

**Iloprost Evidence:**
- Randomized trials show benefit
- Reduces amputation rate
- Vasodilatory + antiplatelet + anti-inflammatory
- Requires hospital admission

**Combination Therapy:**
- tPA + iloprost + sympathectomy
- Small studies suggest additive benefit
- Requires specialized center

### Rewarming Rate Studies

**Optimal Rate Debate:**
- Traditional: 0.5-1°C/hour
- ECMO: 4-10°C/hour
- Rapid rewarming may increase complications
- Evidence suggests moderate rate (1-2°C/hour) optimal for most

**Temperature Target:**
- No clear consensus on when to stop active rewarming
- Some advocate 34-35°C then passive
- Others advocate to 36-37°C

## Long-Term Sequelae Management

### Neuropathic Pain

**Pharmacologic:**
- Gabapentinoids (gabapentin, pregabalin)
- TCAs (amitriptyline, nortriptyline)
- SNRIs (duloxetine, venlafaxine)
- Topical agents (lidocaine, capsaicin)

**Non-pharmacologic:**
- Desensitization therapy
- Graded motor imagery
- Mirror therapy
- Cognitive behavioral therapy

### Cold Sensitivity

**Management:**
- Avoidance of cold exposure
- Protective clothing
- Graduated cold desensitization
- Biofeedback

### Pediatric Considerations

**Growth Plate Injury:**
- May not be apparent initially
- Serial imaging needed
- Premature epiphyseal closure possible
- May affect limb length

**Long-term Follow-up:**
- Monitor for growth abnormalities
- Functional assessment
- Psychological support for amputation
- Rehabilitation needs

## Research Frontiers

### Cytoprotective Agents

**Antifreeze Proteins:**
- AFPs from cold-adapted organisms
- Inhibit ice crystal growth
- Experimental for frostbite prevention

**Cryoprotectants:**
- Glycerol, DMSO
- Used in organ preservation
- Investigational for human cold injury

### Novel Therapeutics

**Stem Cell Therapy:**
- Angiogenesis promotion
- Tissue regeneration
- Early experimental stage

**Hyperbaric Oxygen:**
- Controversial results
- May help with demarcation
- More study needed

### Improved Diagnostics

**Advanced Imaging:**
- MR angiography for perfusion assessment
- Bone scan for viability
- Thermography for monitoring

**Biomarkers:**
- Inflammatory markers
- Ischemia markers
- Prognostic indicators

### Prevention Technology

**Heated Clothing:**
- Battery-powered garments
- Improved effectiveness
- Cost/accessibility barriers

**Smart Monitoring:**
- Wearable temperature sensors
- Early warning systems
- Connected health applications`,
      keyTerms: [
        { term: 'extracellular ice', definition: 'Ice formation in tissue spaces outside cells, driving water out of cells' },
        { term: 'solution effects', definition: 'Cell damage from concentrated solutes during freezing' },
        { term: 'reperfusion injury', definition: 'Tissue damage when blood flow returns after ischemia' },
        { term: 'antifreeze proteins', definition: 'Proteins that inhibit ice crystal growth in cold-adapted organisms' },
        { term: 'cryoprotectant', definition: 'Substance that protects cells from freezing damage' },
      ],
      clinicalNotes: `Cold Injury Clinical Pearls:

1. HOPE score >10% indicates ECMO should be considered for hypothermic arrest
2. K+ >12 mEq/L generally precludes survival in hypothermic arrest
3. tPA for frostbite should be given within 24 hours of thaw
4. Iloprost improves tissue salvage in severe frostbite
5. Surgical amputation decisions delayed 1-3 months for demarcation
6. Afterdrop minimized by warming trunk first, not extremities
7. Defibrillation often fails <30°C - single shock then rewarm
8. Drug metabolism slowed - consider reduced dosing in hypothermia
9. Pediatric frostbite may involve growth plates - long-term follow-up needed
10. Neuropathic pain common sequela - multiple treatment modalities available`,
    },
  },

  media: [
    {
      id: 'cold-injury-classification',
      type: 'diagram',
      filename: 'cold-injury-classification.svg',
      title: 'Cold Injury Classification Algorithm',
      description: 'Flowchart for classifying and managing cold injuries',
    },
    {
      id: 'frostbite-degrees',
      type: 'image',
      filename: 'frostbite-degrees.jpg',
      title: 'Frostbite Degrees',
      description: 'Visual comparison of frostbite severity grades',
    },
    {
      id: 'hypothermia-ecg-osborn',
      type: 'image',
      filename: 'osborn-wave-ecg.jpg',
      title: 'Osborn Wave ECG',
      description: 'ECG showing characteristic Osborn wave of hypothermia',
    },
  ],

  citations: [
    {
      id: 'wms-hypothermia-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypofhermia',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'wms-frostbite-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for the Treatment of Frostbite',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'hope-score-study',
      type: 'article',
      title: 'Hypothermia Outcome Prediction After Extracorporeal Life Support for Hypothermic Cardiac Arrest',
      source: 'Resuscitation',
    },
    {
      id: 'auerbach-cold-injuries',
      type: 'textbook',
      title: 'Auerbach\'s Wilderness Medicine',
      authors: ['Auerbach, P.S.'],
      source: 'Elsevier',
      chapter: 'Hypothermia and Local Cold Injury',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-altitude-illness', targetType: 'condition', relationship: 'related', label: 'Altitude Illness' },
    { targetId: 'wilderness-first-aid', targetType: 'concept', relationship: 'related', label: 'Wilderness First Aid' },
    { targetId: 'wilderness-wound-care', targetType: 'concept', relationship: 'related', label: 'Wound Care' },
    { targetId: 'wilderness-evacuation-decisions', targetType: 'concept', relationship: 'see-also', label: 'Evacuation Decisions' },
  ],

  tags: {
    systems: ['cardiovascular', 'neurological', 'integumentary'],
    topics: ['wilderness-medicine', 'environmental-medicine', 'emergency-medicine'],
    keywords: ['hypothermia', 'frostbite', 'trench foot', 'cold exposure', 'rewarming'],
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

export default coldInjuriesContent;
