/**
 * Frostbite - Comprehensive Educational Content
 *
 * Freezing injury to tissues from cold exposure.
 *
 * IMPORTANT: This content is for educational purposes only. Severe frostbite
 * requires medical evaluation for optimal outcomes.
 */

import { EducationalContent } from '../../types';

export const frostbite: EducationalContent = {
  id: 'wilderness-frostbite',
  type: 'condition',
  name: 'Frostbite',
  alternateNames: ['Freezing Cold Injury', 'Cold Injury', 'Frostnip'],

  levels: {
    1: {
      level: 1,
      summary: 'Frostbite happens when body parts freeze from cold. Fingers, toes, ears, and nose are most at risk. Mild frostbite can heal, but severe frostbite can cause permanent damage.',
      explanation: `## What Is Frostbite?

Frostbite is when the skin and tissues underneath actually freeze. Ice crystals form in your body! The most common places to get frostbite are:
- Fingers and toes
- Ears
- Nose
- Cheeks

## Warning Signs

**Frostnip (Very Mild - No Permanent Damage):**
- Skin looks pale or red
- Cold, prickly feeling
- Numbness
- Goes away with warming

**Frostbite (More Serious):**
- Skin turns white or grayish-yellow
- Feels waxy or hard
- Very numb - you cannot feel the area
- Blisters may form later

## What To Do

**For Frostnip:**
- Get to a warm place
- Put cold fingers in your armpits
- Warm slowly - not too hot!
- Skin may tingle as it warms

**For Frostbite - BE CAREFUL!**
- Get out of the cold
- Do NOT rub the frozen area
- Do NOT use hot water or heating pads
- Do NOT walk on frozen feet if possible
- Warm with body heat or lukewarm water
- Get medical help

## Prevention

- Dress in layers
- Keep fingers and toes dry
- Wear mittens (warmer than gloves)
- Cover ears and face in cold wind
- Do not wear tight boots or gloves
- Take breaks to warm up
- Watch your friends for white patches on face`,
      keyTerms: [
        { term: 'frostbite', definition: 'When body parts freeze from cold, causing tissue damage' },
        { term: 'frostnip', definition: 'Very mild freezing of the skin that heals completely' },
        { term: 'numbness', definition: 'When you cannot feel a part of your body' },
      ],
      analogies: [
        'Frostnip is like the first layer of ice on a puddle - it melts away easily.',
        'Frostbite is like a frozen water pipe - the ice inside can cause damage.',
        'Rubbing frostbitten skin is like rubbing an ice cube on glass - the ice crystals scratch and damage.',
      ],
      examples: [
        'A skier who forgot gloves got white, numb fingertips - frostnip that warmed up fine.',
        'A climber whose toes were frozen and blistered needed hospital care for frostbite.',
        'Covering your ears with a hat can prevent frostbite on cold, windy days.',
      ],
    },
    2: {
      level: 2,
      summary: 'Frostbite is classified by depth: superficial (frostnip, first-degree) affects skin only, while deep frostbite (second through fourth-degree) involves deeper tissues. Rapid rewarming in warm water (37-39°C) is the standard treatment. Avoid refreezing, which causes worse damage.',
      explanation: `## Classification

### By Depth

| Grade | Depth | Appearance | Blisters | Outcome |
|-------|-------|------------|----------|---------|
| Frostnip | Superficial skin | Pale, numb | None | Full recovery |
| 1st degree | Full skin | White, waxy | None | Recovery |
| 2nd degree | Full skin + some dermis | Blisters | Clear fluid | Usually good |
| 3rd degree | Full skin + subcutaneous | Blood blisters | Hemorrhagic | Tissue loss likely |
| 4th degree | Through to muscle/bone | Mottled, cyanotic | May be absent | Amputation likely |

### Simplified Classification

**Superficial Frostbite:**
- Skin only
- Soft tissue beneath when pressed
- Clear blisters if present
- Generally good prognosis

**Deep Frostbite:**
- Extends to deeper tissues
- Hard/woody when pressed (frozen solid)
- Hemorrhagic blisters
- Higher risk of tissue loss

## Pathophysiology

**Freezing Phase:**
1. Vasoconstriction reduces blood flow
2. Tissue temperature drops below freezing
3. Ice crystals form in extracellular space
4. Cell dehydration as water leaves cells
5. Direct cellular injury

**Thawing Phase:**
1. Blood flow returns
2. Inflammatory response begins
3. Edema develops
4. Prostaglandin and thromboxane release
5. Progressive microvascular thrombosis
6. Reperfusion injury

## Clinical Presentation

### Before Thawing
- Tissue appears pale/waxy/white
- Numbness (anesthesia)
- Hard or "wooden" if deep
- Cannot move joints if severe

### After Thawing
- Tissue becomes red/purple
- Swelling develops
- Blisters form (12-36 hours)
- Pain increases (thawing is painful!)
- Affected tissue may remain numb

## Field Management

### Key Principles
1. Protect from further injury
2. Rewarm if no risk of refreezing
3. Do NOT rewarm if refreezing possible
4. Do NOT rub or massage
5. Prevent infection

### Rewarming Protocol

**When to Rewarm:**
- If evacuation is possible within 2 hours
- If you can protect from refreezing
- If environment is warm enough

**When NOT to Rewarm:**
- If refreezing is likely (evacuation not imminent)
- It is better to walk on frozen feet than refreeze thawed feet

**How to Rewarm:**
1. Prepare warm water: 37-39°C (99-102°F)
2. Feels comfortably warm, not hot
3. Immerse affected part completely
4. Maintain temperature - add warm water as needed
5. Continue 15-30 minutes until tissue is soft and red
6. Very painful - provide pain medication if available

### After Rewarming
- Elevate affected parts
- Separate digits with dry gauze
- Do NOT pop blisters (leave intact)
- Keep warm and dry
- Evacuate for medical care

## What NOT To Do

- Do NOT rub snow on frostbite (causes more injury)
- Do NOT use dry heat (fire, heater) - uneven and can burn
- Do NOT use water above 40°C
- Do NOT walk on thawed feet
- Do NOT break blisters
- Do NOT let tissue refreeze

## Prevention

### Clothing
- Layer appropriately
- Mittens warmer than gloves
- Vapor barrier boots in extreme cold
- Cover all exposed skin
- Avoid tight footwear

### Behavior
- Keep moving (circulation)
- Stay dry (moisture accelerates cooling)
- Monitor extremities regularly
- Buddy checks for facial frostbite
- Retreat to warmth when numb
- Eat and hydrate (fuel for heat production)

### Risk Factors
- Previous frostbite (damaged tissue more susceptible)
- Peripheral vascular disease
- Diabetes
- Smoking
- High altitude
- Constrictive clothing
- Exhaustion
- Intoxication`,
      keyTerms: [
        { term: 'superficial frostbite', definition: 'Freezing injury limited to the skin layers' },
        { term: 'deep frostbite', definition: 'Freezing injury extending to subcutaneous tissue, muscle, or bone' },
        { term: 'hemorrhagic blisters', definition: 'Blood-filled blisters indicating deeper tissue injury', pronunciation: 'hem-oh-RAJ-ik' },
        { term: 'reperfusion injury', definition: 'Additional damage that occurs when blood flow returns to frozen tissue' },
      ],
      analogies: [
        'Rewarming frostbite is like defrosting something carefully - too fast or too hot causes damage.',
        'Refreezing is like freezing and thawing meat twice - the quality gets much worse.',
        'Frozen tissue is like frozen fingers of a glove - stiff but fragile.',
      ],
    },
    3: {
      level: 3,
      summary: 'Frostbite injury results from direct ice crystal formation, cellular dehydration, and reperfusion-mediated microvascular thrombosis. Management centers on rapid rewarming in 37-39°C water, thromboxane inhibition with ibuprofen and potentially tPA for severe cases, and wound care. Early imaging with technetium bone scan helps predict tissue viability.',
      explanation: `## Pathophysiology

### Mechanisms of Injury

**Direct Freezing Injury:**
\`\`\`
Temperature drops -> Extracellular ice crystal formation
                  -> Cellular dehydration (osmotic gradient)
                  -> Electrolyte concentration
                  -> Protein denaturation
                  -> Cell membrane disruption
\`\`\`

**Indirect Injury (Reperfusion):**
\`\`\`
Thawing -> Blood flow returns
       -> Endothelial damage exposed
       -> Inflammatory cascade activation
       -> Prostaglandins, thromboxanes, leukotrienes
       -> Microvascular thrombosis
       -> Progressive tissue loss
\`\`\`

### The Critical Role of Thromboxane

- Released from damaged endothelium
- Causes vasoconstriction
- Promotes platelet aggregation
- Drives progressive microvascular occlusion
- Target of ibuprofen therapy

## Classification Systems

### Traditional Grading (Post-Thaw)

| Grade | Findings | Expected Outcome |
|-------|----------|------------------|
| 1st | Numbness, erythema, edema, no blisters | Full recovery |
| 2nd | Clear blisters, surrounding erythema | Minimal tissue loss |
| 3rd | Hemorrhagic blisters, blue-gray skin | Some tissue loss |
| 4th | Cyanotic, no blisters, no sensation | Amputation expected |

### Cauchy Classification (for Prognosis)

Based on lesion extent after rewarming:
- **Grade 1:** Lesion on distal phalanx
- **Grade 2:** Lesion on middle/proximal phalanx
- **Grade 3:** Lesion on metacarpal/metatarsal
- **Grade 4:** Lesion on carpal/tarsal

Higher grades = more proximal = worse prognosis

## Field Management

### Decision Algorithm

\`\`\`
Frostbite Identified
        |
        v
Can you prevent refreezing?
        |
    +---+---+
   YES      NO
    |        |
    v        v
 Rewarm   Transport frozen
    |     (better than refreeze)
    v
Warm water 37-39°C
Immerse 15-30 minutes
Until soft, red, painful
        |
        v
Post-rewarming care:
- Elevate
- Separate digits
- Protect blisters
- Pain management
- Evacuate
\`\`\`

### Rewarming Details

**Water Bath Technique:**
- Temperature: 37-39°C (98.6-102.2°F)
- Monitor with thermometer
- Large container to avoid contact with sides
- Add warm water to maintain temperature
- Duration: 15-30 minutes or until pink and pliable
- Active circulation of water helps

**Pain Management:**
- Thawing is extremely painful
- NSAIDs (ibuprofen 400-800mg) preferred
- Opioids may be necessary
- Warn patient about expected pain

### Field Wound Care

**Blister Management:**
- Leave clear blisters intact (protective)
- Aspirate hemorrhagic blisters (controversial in field)
- Apply aloe vera if available
- Dry, sterile dressings
- Separate digits with gauze

## Hospital Management

### Initial Assessment

**Imaging:**
- Technetium-99m bone scan (at 48-72 hours)
  - Predicts tissue viability
  - Uptake = viable, no uptake = non-viable
- Angiography (for thrombolytic consideration)
- MRI/MRA (alternative assessment)

### Pharmacological Therapy

**Ibuprofen:**
- Thromboxane inhibitor
- 400-800mg PO q8-12h
- Continue for weeks
- Evidence supports routine use

**Prostacyclin (Iloprost):**
- Vasodilator, inhibits platelet aggregation
- Used in some European centers
- IV infusion protocol
- May reduce amputation rates

**tPA (Tissue Plasminogen Activator):**
- For severe frostbite (grades 3-4)
- Within 24 hours of injury (ideally <6h post-thaw)
- Angiography-guided
- May salvage tissue
- Bleeding risk must be considered

### Wound Care Protocol

**Daily Care:**
- Warm water soaks (37°C) BID
- Debride loose tissue
- Aloe vera application
- Non-adherent dressings
- Elevation

**Escharotomy:**
- For circumferential eschars
- Prevents compartment syndrome
- May be needed before demarcation

### Surgical Planning

**The Waiting Game:**
- "Frostbite in January, amputate in July"
- Tissue demarcation takes weeks to months
- Serial imaging guides timing
- Avoid premature amputation
- Allow maximum tissue salvage

## Complications

**Early:**
- Infection (high risk)
- Compartment syndrome (if circumferential)
- Gangrene

**Late:**
- Chronic pain syndromes
- Cold sensitivity
- Arthritis
- Hyperhidrosis or anhidrosis
- Growth plate injury (children)

## Prevention

### High-Risk Settings
- Altitude (cold + hypoxia + dehydration)
- Wet conditions
- Wind chill
- Immobility (stuck climbers)
- Injury preventing evacuation

### Vapor Barrier Systems
- Prevent evaporative heat loss
- Critical in extreme cold
- Vapor barrier liner inside boots
- Vapor barrier layer in clothing`,
      keyTerms: [
        { term: 'Cauchy classification', definition: 'Grading system based on lesion location to predict amputation level' },
        { term: 'technetium bone scan', definition: 'Nuclear medicine imaging that predicts tissue viability by showing blood flow' },
        { term: 'escharotomy', definition: 'Surgical incision through dead tissue to relieve pressure', pronunciation: 'es-kuh-ROT-oh-mee' },
        { term: 'iloprost', definition: 'Prostacyclin analogue that improves blood flow and reduces platelet aggregation' },
        { term: 'demarcation', definition: 'The visible line between viable and non-viable tissue' },
      ],
      clinicalNotes: 'Never rewarm if refreezing is possible - frozen tissue tolerates walking better than thawed tissue, and refreezing causes dramatically worse injury. Technetium bone scan at 48-72 hours is the best predictor of tissue viability. Consider tPA for severe frostbite presenting within 24 hours.',
    },
    4: {
      level: 4,
      summary: 'Frostbite pathophysiology involves direct cryoinjury and progressive microvascular thrombosis mediated by thromboxane and prostaglandins. Evidence supports aggressive thromboxane inhibition, and tPA may salvage tissue in severe cases presenting within 24 hours. Technetium scintigraphy guides prognosis and surgical planning.',
      explanation: `## Molecular Pathophysiology

### Cryoinjury Mechanisms

**Phase 1: Freezing**
\`\`\`
Tissue cooling -> Extracellular ice nucleation (starts -0.53°C)
              -> Water drawn from cells (osmotic)
              -> Cellular dehydration
              -> Electrolyte concentration
              -> Protein denaturation
              -> Membrane phospholipid injury

At slower freezing: More extracellular ice, cell shrinkage
At rapid freezing: Intracellular ice (more lethal)
\`\`\`

**Phase 2: Stasis**
- Continued ice crystal growth
- Mechanical disruption from ice
- Extended hypoxia
- Duration correlates with injury

**Phase 3: Progressive Ischemia**
\`\`\`
Thawing -> Reperfusion
       -> Endothelial damage exposure
       -> Platelet adhesion, aggregation
       -> Thromboxane A2, Prostaglandin F2α release
       -> Vasoconstriction + thrombosis
       -> Leukocyte activation
       -> Free radical generation
       -> Progressive microvascular occlusion
\`\`\`

### Arachidonic Acid Cascade

**Key Mediators:**
- **Thromboxane A2:** Vasoconstriction, platelet aggregation
- **PGF2α:** Vasoconstriction
- **PGE2:** Vasodilation (protective)
- **Prostacyclin (PGI2):** Vasodilation, anti-aggregation

**Therapeutic Targets:**
- Ibuprofen: Inhibits TXA2 and PGF2α
- Aspirin: Irreversible COX inhibition
- Iloprost: PGI2 analogue

### Microvascular Thrombosis

**Cascade:**
1. Endothelial damage exposes collagen
2. vWF mediates platelet adhesion
3. Tissue factor initiates coagulation
4. Thrombin generation
5. Fibrin formation
6. Progressive vessel occlusion
7. Dermal plexus thrombosis = skin loss

## Advanced Imaging

### Technetium-99m Bone Scan

**Protocol:**
- Perform at 48-72 hours post-injury
- Three-phase study
- Flow, blood pool, delayed images

**Interpretation:**
\`\`\`
Normal uptake: Viable tissue expected
Decreased uptake: Uncertain - may be edema
Absent uptake: Non-viable, amputation likely

Triple-phase negative: ~95% PPV for amputation
\`\`\`

**Advantages:**
- Early prediction (days, not months)
- Guides surgical planning
- High negative predictive value

### Angiography

**Indications:**
- Considering thrombolytic therapy
- Surgical planning
- Research protocols

**Findings:**
- Vessel cutoff indicates thrombosis level
- Guides tPA delivery
- Pre/post treatment comparison

### MRI/MRA

**Role:**
- Alternative when scintigraphy unavailable
- Soft tissue assessment
- Bone viability evaluation

## Thrombolytic Therapy

### tPA Protocol

**Inclusion Criteria:**
- Grade 3-4 frostbite
- Within 24 hours of rewarming (ideally <6 hours)
- No contraindications to thrombolysis
- Expected significant tissue loss

**Exclusion Criteria:**
- Active bleeding
- Recent surgery or trauma
- Intracranial pathology
- Uncontrolled hypertension
- Pregnancy

**Administration:**
\`\`\`
Access: Intra-arterial catheter proximal to injury
Initial angiogram: Document vessel cutoff
tPA bolus: 2-4 mg
tPA infusion: 0.5-1 mg/hour
Duration: Up to 24-72 hours
Monitoring: Fibrinogen, PT, repeat angiography
Endpoint: Restored flow or 72 hours
\`\`\`

**Outcomes:**
- Studies show reduced amputation rates
- Best results when given early
- Must weigh bleeding risks

### Iloprost Protocol

**Evidence:**
- European studies show benefit
- May reduce amputation rates by 50%
- Alternative or adjunct to tPA

**Protocol:**
- IV infusion 0.5-2 ng/kg/min
- 6-hour infusions daily
- 5-7 days of treatment
- Monitor for hypotension, headache

## Surgical Management

### Timing of Amputation

**Traditional Approach:**
- Wait for demarcation (weeks to months)
- "January frostbite, July amputation"
- Avoid premature tissue loss

**Modern Approach:**
- Early imaging guides decision
- Technetium scan at 48-72 hours
- Consider early amputation if clearly non-viable
- Balance tissue salvage vs. rehabilitation delay

### Fasciotomy/Escharotomy

**Indications:**
- Circumferential injury
- Compartment syndrome signs
- Vascular compromise

**Technique:**
- Incise full length of eschar
- Extend to viable tissue
- Monitor perfusion

### Reconstruction

**Options:**
- Skin grafting for superficial loss
- Local flaps for deeper defects
- Free flaps for complex reconstruction
- Prosthetic fitting for amputations

## Special Considerations

### High-Altitude Frostbite

**Unique Factors:**
- Combined hypoxia + cold
- Dehydration common
- Delayed evacuation
- Limited treatment options
- Worse outcomes than sea-level frostbite

### Freeze-Thaw-Refreeze Injury

**Pathophysiology:**
- Ice recrystallization
- Larger ice crystals form
- Greater mechanical damage
- Dramatically worse outcomes

**Prevention:**
- Do not rewarm if refreezing possible
- Better to walk on frozen foot to safety

### Trench Foot (Non-Freezing Cold Injury)

**Different Entity:**
- Prolonged exposure to wet, cold (above freezing)
- Microvascular damage without freezing
- Painful, swollen feet
- Management differs (no rapid rewarming)`,
      keyTerms: [
        { term: 'cryoinjury', definition: 'Tissue damage from freezing, including both direct and indirect mechanisms' },
        { term: 'triple-phase negative', definition: 'Bone scan showing no uptake in all three phases, indicating non-viable tissue' },
        { term: 'thromboxane A2', definition: 'Prostaglandin derivative causing vasoconstriction and platelet aggregation' },
        { term: 'iloprost', definition: 'Synthetic prostacyclin analogue promoting vasodilation and inhibiting platelet aggregation' },
        { term: 'dermal plexus', definition: 'Network of blood vessels in the dermis supplying the skin' },
      ],
      clinicalNotes: 'tPA for frostbite should be considered within 24 hours of rewarming for grade 3-4 injuries. Technetium bone scan at 48-72 hours is the most reliable early predictor of tissue viability. Iloprost may reduce amputations by 50% and should be considered where available. Refreezing injury is far worse than initial freezing - avoid at all costs.',
    },
    5: {
      level: 5,
      summary: 'Frostbite represents a model of cryoinjury involving ice crystal formation, cellular dehydration, and reperfusion-mediated microvascular thrombosis. Contemporary management integrates evidence-based pharmacotherapy targeting the arachidonic acid cascade, thrombolytic therapy for severe cases, and advanced imaging for prognostication. Outcomes have improved with aggressive early intervention.',
      explanation: `## Cellular and Molecular Mechanisms

### Cryobiology

**Ice Nucleation:**
\`\`\`
Heterogeneous nucleation: Ice forms on existing surfaces
                         Occurs at warmer temperatures
                         Extracellular space freezes first

Homogeneous nucleation: Spontaneous ice formation
                        Requires supercooling
                        Intracellular ice (more lethal)
\`\`\`

**Solution Effects:**
- As ice forms, solutes concentrate
- Osmotic gradient draws water from cells
- Electrolyte concentrations become toxic
- pH changes denature proteins
- "Solution effect injury"

**Membrane Injury:**
\`\`\`
Freezing rate affects ice location:
Slow freezing -> Extracellular ice
             -> Cell shrinkage
             -> Osmotic stress

Rapid freezing -> Intracellular ice
              -> Direct membrane perforation
              -> Cell death
\`\`\`

### Reperfusion Injury Cascade

**Molecular Events:**
\`\`\`
Thawing
  |
  v
Endothelial activation
  |
  +-> Selectin expression (P-selectin, E-selectin)
  |     -> Leukocyte rolling
  |
  +-> ICAM-1, VCAM-1 expression
  |     -> Leukocyte adhesion
  |     -> Transendothelial migration
  |
  +-> Tissue factor expression
  |     -> Coagulation cascade activation
  |
  v
Leukocyte activation
  |
  +-> Reactive oxygen species
  |     -> Lipid peroxidation
  |     -> DNA damage
  |
  +-> Proteolytic enzymes
        -> Matrix degradation
\`\`\`

### Arachidonic Acid Pathway in Detail

**Eicosanoid Balance:**
\`\`\`
Membrane phospholipids
        |
        v
    Phospholipase A2
        |
        v
  Arachidonic Acid
        |
        +-------> COX-1/COX-2 -------> Prostaglandins
        |                              Thromboxane A2
        |
        +-------> 5-LOX -----------> Leukotrienes
        |
        +-------> CYP450 ----------> EETs (vasodilatory)

In frostbite:
- TXA2 (vasoconstriction, aggregation) predominates
- PGI2 (vasodilation, anti-aggregation) insufficient
- Net effect: Microvascular thrombosis
\`\`\`

## Evidence Base for Treatment

### Ibuprofen Studies

**Mechanism:**
- Non-selective COX inhibitor
- Reduces TXA2 and PGF2α synthesis
- Preserves some PGE2 (may be protective)

**Evidence:**
- Animal studies: Significant tissue salvage
- Human observational: Standard of care
- Optimal dosing: 400-800mg q8-12h
- Duration: Until wound healing

### Prostacyclin (Iloprost) Evidence

**Zafren et al, 2019 Systematic Review:**
- 5 studies, 125 patients
- Reduced amputation rates
- RR 0.42 (95% CI 0.26-0.68)
- NNT approximately 4

**Protocol Variations:**
- IV infusion protocols vary
- Duration 5-7 days typical
- Dose limited by hypotension

### tPA Evidence

**Bruen et al, 2007:**
- Prospective protocol
- tPA vs. historical controls
- Digit salvage 83% vs. 41%
- Within 24 hours of rewarming

**Twomey et al, 2005:**
- Case series
- Angiography-guided delivery
- Significant tissue salvage

**Current Recommendations:**
- Consider for grade 3-4 frostbite
- Within 24 hours of rewarming (earlier better)
- Angiography-guided protocol
- Weigh bleeding risks

### Imaging Evidence

**Cauchy et al, 2001:**
- Technetium bone scan correlation
- At 48-72 hours post-injury
- High predictive value for outcome
- Guides early surgical planning

## Novel and Emerging Therapies

### Hyperbaric Oxygen

**Theoretical Benefit:**
- Increased tissue oxygenation
- Improved wound healing
- Anti-inflammatory effects

**Evidence:**
- Limited controlled data
- Some case reports positive
- Not standard of care

### Negative Pressure Wound Therapy

**Application:**
- After wound demarcation
- Promotes granulation
- May reduce amputation level

### Pentoxifylline

**Mechanism:**
- Phosphodiesterase inhibitor
- Improves RBC deformability
- Some anti-inflammatory effect

**Evidence:**
- Limited data
- Some European use
- Not first-line

### Stem Cell Therapy

**Research Status:**
- Animal models show promise
- Potential for regeneration
- Clinical trials early stage

## Prognostication

### Early Predictors

**Clinical:**
- Proximal extent of injury
- Hemorrhagic vs. clear blisters
- Tissue consistency on rewarming
- Capillary refill time

**Imaging:**
- Technetium scan at 48-72 hours
- Angiography findings
- MRI/MRA tissue viability

### Outcome Prediction Models

**Cauchy Classification:**
\`\`\`
Grade 1 (distal phalanx): Usually no amputation
Grade 2 (middle phalanx): May lose distal tip
Grade 3 (proximal phalanx): Ray amputation likely
Grade 4 (carpal/tarsal): Transmetacarpal/metatarsal+
\`\`\`

## Long-Term Sequelae

### Chronic Pain

**Pathophysiology:**
- Peripheral nerve damage
- Central sensitization
- Neuropathic pain syndromes

**Management:**
- Gabapentin/pregabalin
- Tricyclic antidepressants
- Physical therapy
- Pain psychology

### Cold Sensitivity

**Mechanism:**
- Vascular damage
- Nerve damage
- Often permanent

**Management:**
- Avoidance
- Calcium channel blockers (nifedipine)
- Biofeedback

### Secondary Raynaud's

**Presentation:**
- Episodic digital ischemia
- Triggered by cold exposure
- May develop months to years later

### Growth Disturbance (Pediatric)

**Mechanism:**
- Epiphyseal plate injury
- Occurs in growing children
- May cause shortened digits

## Prevention Research

### Pharmacological Prevention

**Studies in Progress:**
- Pre-exposure prophylaxis
- Topical agents
- Systemic vasodilators

### Technology

**Heated Clothing:**
- Active warming systems
- Battery technology advances
- Expedition use increasing`,
      keyTerms: [
        { term: 'solution effect injury', definition: 'Cellular damage from electrolyte concentration as water freezes' },
        { term: 'EETs', definition: 'Epoxyeicosatrienoic acids - vasodilatory products of arachidonic acid metabolism' },
        { term: 'epiphyseal plate', definition: 'Growth plate in bones - susceptible to cold injury in children' },
        { term: 'heterogeneous nucleation', definition: 'Ice crystal formation initiated by existing surfaces' },
        { term: 'ICAM-1', definition: 'Intercellular adhesion molecule-1 - enables leukocyte adhesion to endothelium' },
      ],
      clinicalNotes: `Clinical Pearls for Frostbite:
1. Refreezing injury is far worse than initial freeze - never rewarm if refreezing possible
2. Technetium bone scan at 48-72 hours is the best early predictor of tissue viability
3. tPA within 24 hours may salvage 40% more digits in severe frostbite
4. Iloprost reduces amputation risk by ~50% where available
5. Ibuprofen should be given to all frostbite patients without contraindications
6. Clear blisters = better prognosis; hemorrhagic blisters = deeper injury
7. Leave clear blisters intact; drain hemorrhagic blisters (controversial)
8. High-altitude frostbite has worse outcomes due to combined hypoxia
9. Demarcation takes weeks to months - avoid premature amputation
10. Long-term cold sensitivity is common and often permanent`,
    },
  },

  media: [
    {
      id: 'frostbite-classification',
      type: 'diagram',
      filename: 'frostbite-grades.svg',
      title: 'Frostbite Classification',
      description: 'Visual comparison of frostbite grades by depth and appearance',
    },
    {
      id: 'frostbite-rewarming',
      type: 'diagram',
      filename: 'frostbite-rewarming-protocol.svg',
      title: 'Frostbite Rewarming Protocol',
      description: 'Step-by-step field rewarming procedure',
    },
  ],

  citations: [
    {
      id: 'wms-frostbite-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Frostbite',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'bruen-tpa-frostbite',
      type: 'article',
      title: 'Reduction of the Incidence of Amputation in Frostbite Injury with Thrombolytic Therapy',
      authors: ['Bruen, K.J.', 'Ballard, J.R.', 'Morris, S.E.'],
      source: 'Archives of Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-hypothermia', targetType: 'condition', relationship: 'related', label: 'Hypothermia' },
    { targetId: 'wilderness-cold-water-immersion', targetType: 'condition', relationship: 'related', label: 'Cold Water Immersion' },
    { targetId: 'wilderness-burn-care', targetType: 'condition', relationship: 'see-also', label: 'Burn Care' },
  ],

  tags: {
    systems: ['integumentary', 'vascular'],
    topics: ['wilderness-medicine', 'cold-injury', 'emergency-medicine'],
    keywords: ['frostbite', 'cold injury', 'freezing', 'rewarming', 'amputation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default frostbite;
