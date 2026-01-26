/**
 * Envenomations - Comprehensive Educational Content
 *
 * Management of venomous bites and stings including snakes, spiders,
 * scorpions, bees, wasps, and marine animals. Covers identification,
 * first aid, field management, and evacuation considerations.
 *
 * IMPORTANT: This content is for educational purposes only. All
 * envenomations require medical evaluation. Antivenom availability
 * varies by region.
 */

import { EducationalContent } from '../types';

export const envenomationsContent: EducationalContent = {
  id: 'envenomations',
  type: 'condition',
  name: 'Envenomations',
  alternateNames: ['Venomous Bites', 'Stings', 'Snakebite', 'Spider Bite', 'Scorpion Sting', 'Marine Envenomation'],

  levels: {
    1: {
      level: 1,
      summary: 'Envenomations happen when a poisonous animal bites or stings you. This includes snakes, spiders, scorpions, bees, and some sea creatures. Most bites and stings are not dangerous, but some need emergency medical help.',
      explanation: `## What Are Envenomations?

Envenomation is when a poisonous animal injects venom into your body through:
- A bite (snakes, spiders)
- A sting (bees, wasps, scorpions)
- Contact (some sea creatures)

Venom can make you sick in different ways depending on the animal.

## Common Venomous Animals

### Snakes

**In North America:**
- Rattlesnakes (have a rattle on tail)
- Copperheads (copper-colored head)
- Cottonmouths (also called water moccasins)
- Coral snakes (colorful bands: red touch yellow)

**Most snakebites happen when:**
- People try to pick up or handle snakes
- People accidentally step on snakes
- Snakes feel threatened

### Spiders

**Dangerous Spiders:**
- Black widow (shiny black, red hourglass on belly)
- Brown recluse (brown violin shape on back)
- Most spider bites are not dangerous

### Scorpions

**Signs of Scorpion Sting:**
- Very painful sting
- Some can be very dangerous to children
- Bark scorpion is the most dangerous in North America

### Bees and Wasps

**What Happens:**
- Painful sting
- Red, swollen area
- Some people are allergic (can be very dangerous)

**Allergic Reaction Signs:**
- Trouble breathing
- Swelling of face or throat
- Hives (red, itchy bumps)
- Feeling faint

**This is an emergency! Call for help!**

### Marine Animals

**Stinging Creatures:**
- Jellyfish
- Stingrays
- Some fish (like stonefish)

## What To Do

### For Any Bite or Sting:

**DO:**
- Stay calm
- Move away from the animal
- Keep the bitten area still and lower than the heart
- Call for help if needed
- Remove jewelry (swelling can happen)

**DO NOT:**
- Do NOT try to catch the animal
- Do NOT cut the wound
- Do NOT suck out the venom
- Do NOT apply ice directly
- Do NOT use a tourniquet

### For Snakebites:

1. **Stay calm and still** (moving spreads venom faster)
2. **Call 911** or get to a hospital
3. **Keep the bitten limb still** and slightly lower than heart
4. **Remove rings and tight things** (swelling)
5. **Watch for signs of allergic reaction**

### For Spider Bites:

1. **Wash the area** with soap and water
2. **Put ice wrapped in a cloth** on it
3. **Elevate the area**
4. **Get medical help** if you're worried or if it's a dangerous spider

### For Bee/Wasp Stings:

1. **Scrape out the stinger** (use a card, don't pull)
2. **Wash the area**
3. **Put ice on it** (wrapped in cloth)
4. **Watch for allergic reaction**
5. **Call 911 if allergic reaction occurs**

### For Scorpion Stings:

1. **Wash the area**
2. **Put ice on it** (wrapped in cloth)
3. **Get medical help** especially for children

### For Marine Stings:

1. **Get out of the water**
2. **Pour vinegar** on jellyfish stings (don't use fresh water)
3. **Soak in hot water** for stingray injuries
4. **Get medical help**

## Prevention

### Snakes:
- Watch where you step
- Wear boots in snake areas
- Use a flashlight at night
- Leave snakes alone
- Don't put hands in places you can't see

### Spiders/Scorpions:
- Shake out shoes and clothes
- Check bedding
- Wear gloves when moving things
- Don't reach into dark places

### Bees/Wasps:
- Don't swat at them
- Cover food and drinks
- Wear light-colored clothes
- Avoid wearing strong scents

### Marine:
- Shuffle feet when walking in water
- Wear water shoes
- Look before stepping
- Don't touch strange sea creatures

## When to Call for Help

**Call 911 or emergency if:**
- Trouble breathing
- Swelling of face or throat
- Feeling faint
- Chest pain or pressure
- Severe pain
- Confusion
- Snakebite (always needs hospital)`,
      keyTerms: [
        { term: 'envenomation', definition: 'When a venomous animal injects poison into your body' },
        { term: 'venom', definition: 'Poison that some animals inject through bites or stings' },
        { term: 'allergic reaction', definition: 'When your body has a bad response to something like a sting' },
        { term: 'antivenom', definition: 'Medicine that helps treat venomous bites' },
        { term: 'rattlesnake', definition: 'Poisonous snake with a rattle on its tail' },
      ],
      analogies: [
        'Venom is like a key that fits into locks in your body - different venoms fit different locks.',
        'An allergic reaction is like your body\'s alarm system going too loud - it overreacts.',
        'Antivenom is like a special key that blocks the venom\'s key from working.',
      ],
      examples: [
        'A hiker gets bitten by a rattlesnake while taking a photo too close.',
        'A child gets stung by a scorpion in their shoe.',
        'Someone steps on a stingray while wading in the ocean.',
      ],
      patientCounselingPoints: [
        'Most snakes will leave you alone if you leave them alone.',
        'Take a picture of the snake ONLY if it\'s safe - don\'t get closer.',
        'If you know you\'re allergic to stings, carry an EpiPen.',
        'Wear boots and long pants when hiking in snake country.',
        'Shake out shoes before putting them on in areas with spiders/scorpions.',
      ],
    },
    2: {
      level: 2,
      summary: 'Envenomations range from mild local reactions to life-threatening systemic illness. Snakebite severity depends on species, venom yield, and patient factors. Anaphylaxis to insect stings requires immediate epinephrine. First aid focuses on preventing venom spread, preventing secondary injury, and rapid transport to medical care.',
      explanation: `## Snakebite Overview

### North American Venomous Snakes

**Pit Vipers (Crotalinae):**
\`\`\`
Rattlesnakes (Crotalus, Sistrurus)
  - Distinctive rattle on tail
  - Triangular head
  - Heat-sensing pits between eyes and nostrils

Copperheads (Agkistrodon contortrix)
  - Copper-colored head
  - Hourglass pattern on body
  - Less dangerous venom

Cottonmouths (Agkistrodon piscivorus)
  - Also called water moccasin
  - White mouth interior (defensive display)
  - Found near water

Coral Snakes (Micrurus)
  - Red, yellow, black bands
  - "Red touch yellow, kill a fellow"
  - Elapid (neurotoxic venom)
  - Small mouth, fangs in front
\`\`\`

### Snakebite Epidemiology

**Most Common Scenarios:**
- Unintentional surprise (stepping on snake)
- Intentional handling (attempting to move/kill)
- Alcohol involvement
- Male:female ratio ~9:1
- Upper extremity common when handling
- Lower extremity common when walking

**Dry Bites:**
- 20-50% of pit viper bites
- No venom injected
- Snake conserves venom for prey
- All bites need evaluation anyway

## Spider Bites

**Black Widow (Latrodectus):**
- Shiny black, red hourglass on ventral abdomen
- Neurotoxic venom (alpha-latrotoxin)
- Female dangerous, male harmless
- Webs in undisturbed areas

**Brown Recluse (Loxosceles):**
- Brown violin marking on dorsum
- Hemotoxic/necrotic venom
- Usually not aggressive
- Bites when trapped against skin

**Other Spiders:**
- Most spider bites are harmless
- Many "spider bites" are actually other things
- Hobo spider: less dangerous than believed
- Wolf spider: large, intimidating, but venom mild

## Scorpions

**Bark Scorpion (Centruroides sculpturatus):**
- Most dangerous in North America
- Neurotoxic venom
- Small (1-3 inches)
- Climbs well, found in shoes, bedding
- Dangerous especially to children

**Other Scorpions:**
- Most have painful but not dangerous stings
- Local reaction predominates
- Children and elderly at higher risk

## Insect Stings

**Bees, Wasps, Hornets:**

**Hymenoptera Allergy:**
- Can cause anaphylaxis
- May have no previous history
- Epinephrine is first-line treatment
- Antihistamines are adjuncts only

**Normal vs. Allergic Reaction:**
\`\`\`
Normal (Local):
  Pain, redness, swelling at sting site
  Limited to sting area
  Resolves over hours to days

Allergic (Systemic):
  Hives away from sting site
  Swelling of face/throat
  Difficulty breathing
  Wheezing
  Nausea, vomiting
  Dizziness, fainting
  THIS IS AN EMERGENCY!
\`\`\`

## Marine Envenomations

**Jellyfish:**
- Venom in nematocysts (stinging cells)
- Box jellyfish (Chironex) - dangerous, mainly Australia
- Portuguese man-of-war - not true jellyfish, painful sting

**Stingrays:**
- Venom in spine on tail
- Injury from stepping on buried ray
- Wound + envenomation

**Other:**
- Stonefish - most venomous fish
- Scorpionfish - similar to stonefish
- Cone snails - venomous harpoon
- Blue-ringed octopus - venomous bite

## First Aid Principles

### Universal First Aid for All Envenomations

**DO:**
- Remain calm
- Move away from animal
- Remove constrictive items (jewelry)
- Keep patient calm and still
- Position affected area at or below heart
- Seek medical evaluation

**DO NOT:**
- Do NOT capture animal (risk repeat envenomation)
- Do NOT apply tourniquet
- Do NOT cut or suck wound
- Do NOT apply ice directly to tissue
- Do NOT apply electricity
- Do NOT give alcohol by mouth

### Snakebite First Aid

**Field Management:**
1. Calm patient, keep still
2. Immobilize affected limb
3. Remove rings, watches, tight clothing
4. Keep at or slightly below heart level
5. Do NOT use suction devices
6. Do NOT apply tourniquet
7. Transport to hospital
8. Call ahead for antivenom

**Pressure Immobilization Technique (for neurotoxic snakes like coral snakes):**
- Apply pressure over bite site
- Wrap entire limb snugly
- Immobilize with splint
- Do NOT restrict arterial flow
- For elapid bites only, NOT pit vipers

### Spider Bite Management

**Black Widow:**
1. Clean wound with soap and water
2. Apply ice wrapped in cloth
3. Elevate if possible
4. Pain control (NSAIDs)
5. Tetanus prophylaxis if indicated
6. Seek medical evaluation
7. Antivenom available for severe cases

**Brown Recluse:**
1. Clean wound
2. Apply ice wrapped in cloth
3. Elevate if possible
4. Do NOT apply heat
5. Seek medical evaluation
6. Watch for necrosis (tissue death)
7. Surgical care may be needed

### Scorpion Sting Management

1. Clean area
2. Ice wrapped in cloth
3. Local wound care
4. Pain control (may require IV opioids for bark scorpion)
5. Tetanus prophylaxis
6. Antivenom available for bark scorpion
7. Children need urgent evaluation

### Insect Sting Management

**Normal Reaction:**
1. Remove stinger if present (scrape, don't pull)
2. Clean area
3. Ice to reduce pain/swelling
4. NSAIDs for pain
5. Topical steroids for itching
6. Observation at home

**Allergic Reaction (Anaphylaxis):**
1. **EPINEPHRINE immediately** (if available)
2. Call 911
3. Remove stinger if present
4. Place patient supine with legs elevated
5. May repeat epinephrine in 5-15 min
6. Antihistamines are adjuncts, NOT replacements

### Marine Envenomation Management

**Jellyfish:**
1. Remove tentacles (wear gloves)
2. Rinse with vinegar (inactivates nematocysts)
3. Do NOT use fresh water (activates nematocysts)
4. Hot water immersion for pain (45°C/113°F)
5. Seek medical evaluation

**Stingray:**
1. Immerse in hot water (45°C/113°F)
2. Heat inactivates venom
3. Remove obvious spine fragments
4. Clean wound
5. Tetanus prophylaxis
6. Antibiotics often needed (wound contamination)

## Prevention Strategies

### Snakes
- Wear boots, long pants in snake habitat
- Watch where you step/place hands
- Use flashlight at night
- Stay on trails
- Leave snakes alone
- Use walking stick to probe ahead

### Spiders/Scorpions
- Shake out shoes, clothing
- Check bed sheets in endemic areas
- Wear gloves when moving stored items
- Seal cracks in homes
- Remove debris around structures

### Insects
- Avoid scented products
- Cover food/drink outdoors
- Wear light-colored clothing
- Move slowly if insect approaches
- Carry epinephrine if allergic

### Marine
- Shuffle feet when wading
- Wear protective footwear
- Avoid touching marine life
- Look before stepping
- Be aware of local hazards`,
      keyTerms: [
        { term: 'pit viper', definition: 'Snakes with heat-sensing pits and triangular heads, includes rattlesnakes' },
        { term: 'neurotoxic', definition: 'Venom that affects the nervous system' },
        { term: 'hemotoxic', definition: 'Venom that affects blood and tissues' },
        { term: 'anaphylaxis', definition: 'Severe allergic reaction that can be life-threatening', pronunciation: 'an-uh-fuh-LAK-sis' },
        { term: 'dry bite', definition: 'Snakebite where no venom was injected' },
        { term: 'nematocysts', definition: 'Stinging cells on jellyfish tentacles', pronunciation: 'nem-ah-toe-SISTS' },
      ],
      analogies: [
        'Pit viper heat-sensing organs are like built-in night vision goggles for finding prey.',
        'Anaphylaxis is like a fire alarm that won\'t turn off - epinephrine is the reset button.',
        'Nematocysts are like tiny harpoons that fire when touched - they can still sting even if detached.',
      ],
      examples: [
        'A hiker accidentally steps on a rattlesnake on a trail.',
        'Someone puts on a shoe with a scorpion inside.',
        'A child with unknown bee allergy gets stung and develops swelling.',
        'A wader steps on a stingray hidden in the sand.',
      ],
    },
    3: {
      level: 3,
      summary: 'Envenomations produce a spectrum from local tissue injury to life-threatening systemic effects. Snakebite severity grading guides antivenom use. Anaphylaxis requires immediate epinephrine. Marine envenomations have specific first aid (vinegar for jellyfish, hot water for stingrays). Field management focuses on preventing venom spread and rapid evacuation.',
      explanation: `## Snakebite Pathophysiology

### Pit Viper Venom Components

**Crotalid Venom Composition:**
\`\`\`
Proteolytic enzymes: Tissue destruction, necrosis
Hyaluronidase: Spreads venom through tissues
Phospholipase A2: Membrane damage, myonecrosis
Thrombin-like enzymes: Coagulopathy
Hemorrhagins: Damage blood vessels, bleeding
Neurotoxins: Rare (Mojave rattlesnake)
Cardiotoxins: Direct myocardial depression
\`\`\`

**Clinical Effects by System:**

**Local:**
- Pain within minutes
- Edema (swelling) progressing over hours
- Erythema, ecchymosis
- Bullae formation
- Tissue necrosis (severe envenomation)

**Coagulopathic:**
- Defibrination syndrome
- Prolonged PT/PTT
- Decreased fibrinogen
- Spontaneous bleeding
- Laboratory abnormalities may be delayed

**Neurologic (rare, species-specific):**
- Ptosis (eyelid droop)
- Ophthalmoplegia (eye movement weakness)
- Bulbar weakness
- Respiratory failure (Mojave rattlesnake)

**Cardiovascular:**
- Tachycardia
- Hypotension
- Shock (severe envenomation)
- Direct myocardial toxicity (some species)

### Elapid (Coral Snake) Venom

**Neurotoxic:**
- Presynaptic and postsynaptic blockade
- Prevents acetylcholine release/action
- Causes neuromuscular weakness
- Respiratory failure potentially delayed

**Clinical Course:**
- Minimal local effects
- Symptoms may be delayed hours
- Cranial nerve palsies first
- Progressive weakness
- Respiratory failure the main threat

## Snakebite Severity Grading

**Minimal Envenomation:**
- Local pain, swelling <5 cm from bite
- No systemic signs
- Normal coagulation
- Observation usually sufficient

**Moderate Envenomation:**
- Swelling 5-25 cm from bite
- Mild systemic signs (nausea, taste changes)
- Mild coagulopathy possible
- Antivenom indicated

**Severe Envenomation:**
- Swelling >25 cm from bite or rapid progression
- Significant systemic signs
- Coagulopathy with bleeding
- Shock, compartment syndrome
- Multiple vials of antivenom needed

## Antivenom Therapy

**Crotalid Polyvalent Immune Fab (Ovine) - CroFab:**
\`\`\'
Indications:
  - Progressive local effects
  - Coagulopathy
  - Systemic toxicity
  - Severe envenomation

Dosing:
  - Initial: 4-6 vials IV
  - Repeat 4-6 vials until control achieved
  - Maintenance: 2 vials q6h x 3 doses (for severe)

Control defined as:
  - Arrested local progression
  - Return of coagulation studies toward normal
  - Stabilization of systemic signs
\`\`\`

**Coral Snake Antivenom (Micrurus fulvius):**
- Indicated for any suspected coral snake bite
- Delayed symptoms - treat empirically
- Limited availability
- 3-5 vials initially
- May require additional doses

## Spider Envenomations

### Black Widow Pathophysiology

**Alpha-Latrotoxin Mechanism:**
\`\`\'
Binds to nerve terminals
  → Causes massive vesicle release
  → Depletes neurotransmitters
  → Prevents normal vesicle recycling
  → Sustained neurotransmitter release
  → Overstimulation at NMJ
  → Cramping, pain, autonomic instability
\`\`\`

**Clinical Features:**
- Immediate local pain
- Muscle cramping (often abdomen, back, thighs)
- Diaphoresis at bite site
- Hypertension, tachycardia
- Headache, nausea
- Symptoms may last days

**Antivenom (Latrodectus immune F(ab'):**
- Highly effective
- One vial usually sufficient
- Rapid symptom relief
- Available in US
- Risk of anaphylaxis (test dose recommended)

### Brown Recluse Pathophysiology

**Sphingomyelinase D:**
\`\`\`
Enzyme causes:
  - Vasospasm
  - Endothelial damage
  - Platelet aggregation
  - Thrombosis
  → Ischemia and necrosis
\`\`\`

**Clinical Course:**
- Initially painless or mild pain
- May develop eschar (black, necrotic center)
- Necrosis may take weeks to demarcate
- "Red, white, and blue" appearance possible
- Systemic loxoscelism rare (hemolysis, renal failure)

**Management:**
- No proven antivenom in US
- Dapsone studied (controversial)
- Surgical debridement of necrotic tissue
- Delay reconstruction until demarcation complete

## Insect Hypersensitivity

### Anaphylaxis Pathophysiology

**Type I Hypersensitivity:**
\`\`\`
Previous sensitization to venom
  → IgE production
  → IgE binds to mast cells/basophils
  ↓
Re-exposure (sting)
  → Venom binds IgE
  → Mast cell degranulation
  → Histamine, tryptase, leukotrienes release
  → Increased vascular permeability
  → Bronchospasm
  → Vasodilation
  → Shock, respiratory failure
\`\`\`

**Clinical Diagnosis:**
Any one of following after exposure:
- Skin/mucosal involvement (hives, swelling)
- Respiratory compromise (wheezing, stridor)
- Hypotension or syncope
- GI symptoms (cramping, vomiting)
- Usually sudden onset (minutes to hours)

**Epinephrine is definitive treatment:**
- 0.3-0.5 mg IM (1:1000) adults
- 0.01 mg/kg IM children (max 0.3 mg)
- May repeat in 5-15 minutes
- Antihistamines DO NOT treat anaphylaxis
- Corticosteroids prevent biphasic reaction

## Marine Envenomations

### Jellyfish Pathophysiology

**Nematocyst Discharge:**
\`\`\`
Tentacle contact with skin
  → Chemical or mechanical trigger
  → Capsule explosion (microseconds)
  → Tubule ejection into skin
  → Venom injection
  → Pain, local tissue reaction
  → Systemic effects (some species)
\`\`\`

**Treatment Specifics:**

**Portuguese Man-of-War:**
- Vinegar inactivates nematocysts
- Hot water for pain
- No rubbing (discharges more nematocysts)

**Box Jellyfish (Chironex fleckeri):**
- Life-threatening in Australia
- Vinegar recommended
- Antivenom available
- Pressure immobilization

**Sea Urchins:**
- Remove spines if possible
- Vinegar dissolves some spines
- Hot water for pain
- X-ray to locate deep spines

**Stingrays:**
- Heat-labile venom
- Hot water immersion (45°C)
- Remove spine if accessible
- Wound exploration/surgery often needed
- High infection risk

## Scorpion Envenomation

### Bark Scorpion Pathophysiology

**Neurotoxin Mechanism:**
\`\`\`
Alpha-scorpion toxin
  → Binds voltage-gated sodium channels
  → Prevents inactivation
  → Prolonged depolarization
  → Excessive neurotransmitter release
  → Neuromuscular hyperactivity
  → Autonomic instability
\`\`\`

**Clinical Severity Grading:**
\`\`\'
Grade I: Local pain only
Grade II: Local pain + remote symptoms
Grade III: Cranial nerve dysfunction, somatic skeletal neuromuscular dysfunction
Grade IV: Both cranial and somatic dysfunction + autonomic instability

Children at higher risk for severe toxicity
\`\`\'

**Antivenom (Anascorp):**
- Highly effective
- Indicated for Grade III-IV envenomation
- 3 vials IV initially
- May repeat
- Rapid symptom resolution`,
      keyTerms: [
        { term: 'CroFab', definition: 'Crotalid polyvalent immune Fab antivenom for pit viper bites' },
        { term: 'alpha-latrotoxin', definition: 'Black widow venom toxin causing neurotransmitter depletion' },
        { term: 'sphingomyelinase D', definition: 'Brown recluse venom enzyme causing tissue necrosis' },
        { term: 'IgE', definition: 'Immunoglobulin E - antibody involved in allergic reactions' },
        { term: 'pressure immobilization', definition: 'Bandaging technique to slow lymphatic spread of venom' },
        { term: 'eschar', definition: 'Dry, dark necrotic tissue (slough)', pronunciation: 'ESS-car' },
      ],
      clinicalNotes: 'CroFab dosing is weight-based for children. Coral snake antivenom should be given empirically before symptoms develop. Epinephrine is the ONLY definitive treatment for anaphylaxis. Hot water (45°C) inactivates marine venoms (stingray, some jellyfish). Vinegar inactivates box jellyfish nematocysts but may worsen others.',
    },
    4: {
      level: 4,
      summary: 'Envenomation management requires understanding venom composition, pathophysiology, and specific therapies. Antivenom indications are based on severity grading. Anaphylaxis demands immediate epinephrine without delay. Marine envenomations have species-specific treatments. Compartment syndrome, coagulopathy, and tissue necrosis are potential complications requiring monitoring.',
      explanation: `## Advanced Snakebite Management

### Venom Complexity

**Pit Viper Venom Variability:**
\`\`\`
Geographic variation:
  - Same species, different regions
  - Different venom composition
  - Variable clinical effects

Individual variation:
  - Age of snake
  - Time since last envenomation
  - Diet
  - Venom gland regeneration

Bite-related factors:
  - Venom volume delivered
  - Snaking biting vs defensive strike
  - Size of snake
  - Length of fangs
  - Penetration depth

Patient factors:
  - Size (children at higher risk)
  - Age (extremes)
  - Comorbidities
  - Medications (anticoagulants)
\`\`\`

### Coagulopathy Management

**Crotaline-Induced Coagulopathy:**
\`\`\`
Mechanism:
  Thrombin-like enzymes
    → Convert fibrinogen to fibrin
    → Deplete fibrinogen
    → Produce abnormal fibrin clots
    → Dissolve spontaneously
    → Laboratory: defibrination syndrome

Clinical presentation:
  - Spontaneous bleeding (ecchymosis, gum bleeding, hematuria)
  - Prolonged PT, PTT
  - Decreased fibrinogen
  - Elevated FDPs

Laboratory interpretation:
  - Normal PT/PTT does NOT rule out coagulopathy
  - Fibrinogen more sensitive
  - Serial monitoring essential
\`\`\`

**Antivenom for Coagulopathy:**
- Indicated for fibrinogen <100 mg/dL
- Repeat dosing until fibrinogen normalizes
- May require 10+ vials in severe cases
- Monitor for recurrence (needs re-dosing)

### Compartment Syndrome

**Pathophysiology:**
\`\`\`
Local tissue edema
  + Muscle fascia non-compliant
  → Increased compartment pressure
  → Exceeds capillary perfusion pressure
  → Muscle ischemia
  → Nerve dysfunction
  → Permanent damage within hours

Clinical diagnosis (field):
  - Severe pain
  - Pain with passive stretch
  - Tense compartment
  - Sensory changes
  - Late: Pulselessness, paralysis

Measurement (if available):
  - >30 mmHg: Diagnostic
  - >40 mmHG: Emergency fasciotomy
\`\`\`

**Management Controversy:**
- Antivenom first (reduces edema)
- Fasciotomy if refractory
- Do NOT elevate (increases ischemia)
- Keep limb at heart level

### Special Populations

**Pediatric Considerations:**
\`\`\`
Higher risk factors:
  - Smaller blood volume
  - Higher venom-to-body-mass ratio
  - Faster venom distribution

Antivenom dosing:
  - Same dose as adults (not weight-based)
  - Severity guides dosing, not size

Special risks:
  - Children more susceptible to neurotoxicity
  - Higher mortality in severe envenomations
\`\`\`

**Pregnancy:**
\`\`\`
Maternal risks:
  - Same as non-pregnant
  - Fetal loss possible with severe envenomation
  - Antivenom considered safe (Category B)

Fetal risks:
  - Transplacental venom passage possible
  - Preterm labor
  - Fetal distress

Management:
  - Treat mother aggressively
  - Fetal monitoring if available
  - Obstetrics consultation
\`\`\`

## Advanced Spider Management

**Brown Recluse: Systemic Loivoscelism:**
\`\`\`
Hemolytic anemia:
  - Direct RBC destruction
  - Hemoglobinuria
  - Renal failure (ATN)

DIC:
  - Coagulopathy
  - Bleeding

Management:
  - Supportive care
  - Hemodialysis if renal failure
  - Transfusion if indicated
  - No proven antivenom in US
\`\`\`

**Dapsone Controversy:**
\`\`\`
Theoretical benefit:
  - Inhibits neutrophil migration
  - Reduces inflammation
  - May limit necrosis

Evidence:
  - Animal studies positive
  - Human studies equivocal
  - Risk of hemolysis (G6PD)
  - Not standard of care

Current status:
  - Occasionally used
  - Informed consent needed
  - Check G6PD first
  - Many centers no longer use
\`\`\`

## Anaphylaxis Management Update

**Epinephrine Guidelines:**
\`\`\'
IM injection (1:1000 concentration):
  Adults: 0.3-0.5 mg IM
  Children: 0.01 mg/kg IM (max 0.3 mg)
  Site: Vastus lateralis (thigh)
  Repeat in 5-15 min if needed

IV epinephrine (1:10,000):
  ONLY for cardiac arrest
  10 mcg IV push, repeat q3-5 min
  Monitor for hypertension, tachycardia

Autoinjectors:
  EpiPen, Auvi-Q, generic
  Essential for known allergic patients
  Two doses recommended (carry backup)
  Expensive but life-saving
\`\`\`

**Biphasic Anaphylaxis:**
\`\`\'
Occurs in:
  ~20% of anaphylaxis cases

Returns in:
  4-12 hours (usually within 8 hours)

Risk factors:
  Severe initial reaction
  Delayed epinephrine
  History of biphasic reaction

Prevention:
  Observation period (4-8 hours)
  Corticosteroids may help
  Not completely preventable
\`\`\`

## Marine Envenomation Updates

**Irukandji Syndrome (Carukia barnesi):**
\`\`\`
Small jellyfish (1-2 cm)
North Australia
Delayed symptoms (30 min - 2 hours):
  Severe pain
  Catecholamine excess
  Hypertension, tachycardia
  Pulmonary edema
  Cardiac dysfunction

Treatment:
  Supportive
  Magnesium sulfate (controversial)
  Antivenom available (Australia)
\`\`\'

**Sea Snake Envenomation:**
\`\`\'
Elapid venom (neurotoxic)
Bite usually painless
Delayed onset (30 min - few hours)

Clinical:
  Ptosis, ophthalmoplegia
  Myalgia, myoglobinuria
  Respiratory failure

Antivenom:
  Available (Australia)
  Effective
  1 ampoule IV
  May repeat
\`\`\'

## Scorpion Antivenom Update

**Anascorb (Centruroides sculpturatus):**
\`\`\'
F(ab')2 antibody fragment
Highly effective
Indications:
  Grade III-IV envenomation
  especially children

Dosing:
  3 vials IV initially
  Repeat if symptoms persist
  Rapid improvement usually seen

Safety:
  Low rate of anaphylaxis
  No test dose needed
  Premedication optional
\`\`\``,
      keyTerms: [
        { term: 'defibrination syndrome', definition: 'Coagulopathy from venom converting fibrinogen to abnormal fibrin' },
        { term: 'fasciotomy', definition: 'Surgical incision to relieve compartment syndrome' },
        { term: 'loxoscelism', definition: 'Clinical syndrome from brown recluse envenomation' },
        { term: 'biphasic anaphylaxis', definition: 'Recurrence of anaphylaxis after initial resolution' },
        { term: 'Irukandji syndrome', definition: 'Delayed severe syndrome from small jellyfish sting' },
      ],
      clinicalNotes: "Antivenom dosing for snakebite is based on severity, not weight (same dose for adults and children). Coagulopathy may recur after initial improvement - monitor fibrinogen. Compartment syndrome diagnosis is clinical - don't delay antivenom for pressure measurement. Epinephrine is the ONLY definitive treatment for anaphylaxis. Hot water immersion is first-line for stingray envenomation.",
    },
    5: {
      level: 5,
      summary: 'Envenomation management requires understanding of venom proteomics, species-specific pathology, and evidence-based treatment protocols. Antivenom therapy uses Fab fragments with specific dosing protocols. Anaphylaxis management emphasizes immediate epinephrine. Marine envenomations have diverse pathophysiology requiring specific interventions. Ongoing research explores novel antivenoms and treatment modalities.',
      explanation: `## Molecular Venom Biology

### Venom Proteomics

**Pit Viper Venom Complexity:**
\`\`\`
Proteomic analysis reveals:
  50-200+ distinct proteins
  Metalloproteinases (SVMPs)
  Serine proteases (SVSPs)
  Phospholipases A2 (PLA2s)
  C-type lectins
  Disintegrins
  Bradykinin-potentiating peptides

Geographic variation demonstrated:
  Same species, different regions
  Different venom composition
  Different clinical effects
  Implications for antivenom efficacy

Ontogenetic shifts:
  Juvenile vs. adult venom
  Different prey preferences
  Venom composition changes with age
\`\`\`

**Elapid Venom:**
\`\`\`
Three-finger toxins (3FTx):
  Alpha-neurotoxins (curaremimetic)
  Kappa-neurotoxins
  Muscarinic toxins
  Fasciculins

Phospholipases A2:
  Presynaptic (beta-bungarotoxin-like)
  Postsynaptic
  Myotoxic

Other:
  Snake venom metalloproteinases (some)
  Hyaluronidases
  Nucleotidases
\`\`\`

### Antivenom Pharmacology

**Fab vs. F(ab')2 vs. IgG:**

**Fab (CroFab):**
\`\`\`
Structure:
  Papain-digested IgG
  Two antigen-binding fragments
  No Fc portion

Advantages:
  Lower immunogenicity
  Faster tissue penetration
  Less serum sickness

Disadvantages:
  Shorter half-life (12-24 hours)
  More frequent redosing
  Higher cost

Clinical implications:
  May need maintenance dosing
  Risk of recurrence/late coagulopathy
  Repeat dosing based on clinical response
\`\`\`

**F(ab')2 (Anavip, some scorpion antivenoms):**
\`\`\`
Structure:
  Pepsin-digested IgG
  Two Fabs linked by disulfides

Advantages:
  Longer half-life than Fab
  Lower immunogenicity than whole IgG
  Good tissue penetration

Clinical role:
  Newer crotalid antivenom
  Increasing availability
\`\`\`

**Whole IgG (Older antivenoms):**
\`\`\'
Disadvantages:
  Higher immunogenicity
  Serum sickness common (up to 75%)
  Slower tissue penetration
  Higher anaphylaxis rate

Still used:
  Coral snake antivenom (US)
  Many international antivenoms
  Cost considerations
\`\`\`

### Antivenom Production

**Immunization Strategies:**
\`\`\'
Traditional:
  Whole venom immunization
  Horses (most common)
  Sheep (some newer)
  Goats (experimental)

Modern approaches:
  Venom fractionation
  Recombinant proteins
  Monoclonal antibodies
  Synthetic mimetics

Geographic matching:
  Regional antivenoms
  Species specificity
  Cross-neutralization studies
  Pan-regional antivenoms
\`\`\`

## Clinical Decision Making

### Snakebite Severity Scoring Systems

**Snakebite Severity Score (SSS):**
\`\`\`
Validated scoring system:
  Local wound characteristics (0-6)
  Pulmonary (0-4)
  Cardiovascular (0-5)
  Gastrointestinal (0-4)
  Hematologic (0-4)
  Central nervous system (0-4)

Total: 0-25
Higher score = worse prognosis

Uses:
  Standardized documentation
  Triage decision aid
  Antivenom dosing guide
  Prognostication
\`\`\`

### Biomarkers in Envenomation

**Diagnostic Biomarkers:**
\`\`\`
Snakebite:
  - Fibrinogen (early coagulopathy)
  - D-dimer (fibrinolysis)
  - CK (muscle injury)
  - Troponin (cardiac involvement)
  - Venom concentration (ELISA, research)

Spider (brown recluse):
  - CBC (hemolysis)
  - Comprehensive metabolic panel
  - Urinalysis (hemoglobinuria)

Anaphylaxis:
  - Serum tryptase (peaks 1-3h)
  - Histamine (very short half-life)
  - Chymase (mast cell marker)
\`\`\`

### Novel Therapeutics

**Adjunctive Therapies Under Study:**
\`\`\`
Metalloproteinase inhibitors:
  - Doxycycline (anti-inflammatory)
  - Batimastat (research)
  - Marimastat (research)

Antithrombotics:
  - For coagulopathy
  - Not standard of care
  - Risk of bleeding

Vasodilators:
  - For compartment syndrome
  - Nitroglycerin patches (controversial)
  - Not proven

Cytokine modulators:
  - For local tissue necrosis
  - TNF inhibitors (theoretical)
  - No human trials yet
\`\`\`

## Anaphylaxis Updates

**Pathophysiology Refinements:**
\`\`\`
Epinephrine pharmacokinetics:
  IM injection: Peak ~8 min
  Autoinjector: Similar to IM
  Sub-Q: Slower, less reliable
  IV: Immediate, risk of hypertension

Epinephrine pharmacodynamics:
  Beta-1: Increased HR, contractility
  Beta-2: Bronchodilation, decreased mediator release
  Alpha: Vasoconstriction (reduces angioedema)

Biphasic mechanisms:
  Persistent antigen exposure
  Late-phase inflammatory cells
  Mediator re-synthesis
  Not completely preventable
\`\`\`

**Epinephrine Autoinjector Evolution:**
\`\`\`
Original: EpiPen (0.3 mg), EpiPen Jr (0.15 mg)
Newer:
  Auvi-Q (talking, 0.1, 0.15, 0.3 mg)
  Generic versions
  Lower dose options for infants

Controversies:
  Cost ($600+ for two-pack)
  Access issues
  Training requirements
  Alternative routes (intranasal in development)
\`\`\`

## Marine Envenomation Advances

**Box Jellyfish (Cubozoa) Research:**
\`\`\`
Chironex fleckeri venom:
  - Pore-forming toxins
  - Cardioactive compounds
  - Nerve growth factors
  - Extremely potent

Antivenom (CSL):
  - Sheep IgG
  - Effective if given early
  - Limited availability
  - Prevents dermatonecrosis

Adjuncts:
  Pressure immobilization (slows spread)
  Vinegar (inactivates nematocysts)
  Hot water (pain control)
  Magnesium sulfate (controversial)
\`\`\`

**Irukandji Updates:**
\`\`\`
Multiple species identified:
  Carukia barnesi (original)
  Malo maxima (larger, more dangerous)
  Alatina alata (also causes Irukandji)

Pathophysiology:
  Massive catecholamine surge
  Catecholamine-induced cardiomyopathy
  Myocardial stunning
  Pulmonary edema

Treatment evolution:
  Magnesium sulfate (based on asthma protocols)
  Nitroglycerin (for hypertension)
  IV fluids
  Antivenom (experimental)
\`\`\`

## Future Directions

**Recombinant Antivenoms:**
- Species-specific
- Lower immunogenicity
- Unlimited production
- Lower cost potential
- Clinical trials ongoing

**Broad-Spectrum Antivenoms:**
- Human monoclonal antibodies
- Target conserved venom components
- Cross-species neutralization
- Pan-regional applications

**Diagnostic Point-of-Care:**
- Lateral flow immunoassays
- Venom identification in field
- Species confirmation
- Antivenom selection guidance

**Vaccine Approaches:**
- Active immunization for at-risk populations
- Similar to rabies pre-exposure prophylaxis
- Challenges: Cost, logistics, waning immunity`,
      keyTerms: [
        { term: 'proteomics', definition: 'Study of all proteins in a biological sample' },
        { term: 'SVMP', definition: 'Snake venom metalloproteinase - major tissue-damaging component' },
        { term: '3FTx', definition: 'Three-finger toxins - small neurotoxins in elapid venom' },
        { term: 'serum sickness', definition: 'Immune reaction to foreign proteins, delayed hypersensitivity' },
        { term: 'tryptase', definition: 'Mast cell protease elevated in anaphylaxis' },
      ],
      clinicalNotes: `Envenomation Clinical Pearls:

1. Antivenom dosing based on severity, not weight (even in children)
2. Coagulopathy may recur 24-72 hours after initial antivenom
3. Compartment syndrome: treat with antivenom first, fasciotomy second
4. Epinephrine is ONLY definitive anaphylaxis treatment - antihistamines are adjuncts
5. Brown recluse: no proven antivenom in US, surgery delayed until demarcation
6. Hot water (45°C) for stingray, stonefish envenomations
7. Vinegar for box jellyfish, Portuguese man-of-war (NOT all jellyfish)
8. Coral snake: treat empirically before symptoms develop
9. Up to 50% of pit viper bites are "dry" (no venom)
10. Mortality <1% with modern antivenom and critical care`,
    },
  },

  media: [
    {
      id: 'snake-identification',
      type: 'diagram',
      filename: 'venomous-snakes-identification.svg',
      title: 'Venomous Snake Identification',
      description: 'Visual guide to identifying North American venomous snakes',
    },
    {
      id: 'spider-identification',
      type: 'diagram',
      filename: 'dangerous-spiders.svg',
      title: 'Medically Important Spiders',
      description: 'Black widow and brown recluse identification features',
    },
    {
      id: 'anaphylaxis-algorithm',
      type: 'diagram',
      filename: 'anaphylaxis-treatment-algorithm.svg',
      title: 'Anaphylaxis Management Algorithm',
      description: 'Emergency assessment and treatment algorithm for anaphylaxis',
    },
  ],

  citations: [
    {
      id: 'wms-snakebite-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Guidelines for Treatment of Snakebite',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'american-association-venom',
      type: 'article',
      title: 'American Association of Poison Control Centers Snakebite Guidelines',
      source: 'Journal of Medical Toxicology',
    },
    {
      id: 'anaphylaxis-guidelines',
      type: 'article',
      title: 'World Allergy Organization Guidelines for Assessment and Management of Anaphylaxis',
      source: 'World Allergy Organization Journal',
    },
    {
      id: 'marine-envenomation-review',
      type: 'article',
      title: 'Marine Envenomations: A Global Review',
      source: 'Clinical Toxicology',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-first-aid', targetType: 'concept', relationship: 'related', label: 'Wilderness First Aid' },
    { targetId: 'wilderness-trauma', targetType: 'concept', relationship: 'related', label: 'Trauma Management' },
    { targetId: 'wilderness-allergic-reaction', targetType: 'condition', relationship: 'related', label: 'Anaphylaxis' },
  ],

  tags: {
    systems: ['integumentary', 'nervous', 'cardiovascular', 'hematologic'],
    topics: ['wilderness-medicine', 'toxicology', 'emergency-medicine'],
    keywords: ['snakebite', 'anaphylaxis', 'epinephrine', 'antivenom', 'scorpion', 'spider', 'marine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'toxicology'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default envenomationsContent;
