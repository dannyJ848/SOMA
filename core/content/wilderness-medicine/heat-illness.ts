/**
 * Heat Illness - Comprehensive Educational Content
 *
 * Medical conditions caused by excessive heat exposure including heat
 * exhaustion, heat stroke, and related conditions. Understanding prevention,
 * recognition, and treatment of heat illness is essential for summer
 * wilderness activities.
 *
 * IMPORTANT: This content is for educational purposes only. Heat stroke
 * is a medical emergency requiring immediate cooling and evacuation.
 */

import { EducationalContent } from '../types';

export const heatIllnessContent: EducationalContent = {
  id: 'heat-illness',
  type: 'condition',
  name: 'Heat Illness',
  alternateNames: ['Heat Exhaustion', 'Heat Stroke', 'Heat Cramps', 'Heat Syncope', 'Hyperthermia'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat illness happens when your body gets too hot and cannot cool down. It ranges from mild muscle cramps to dangerous heat stroke. Drinking water, resting in shade, and getting help for serious symptoms can prevent problems.',
      explanation: `## What Is Heat Illness?

Your body normally stays around 98.6°F (37°C). When it's hot outside or you exercise hard, your body makes heat. Your body cools itself by sweating.

Heat illness happens when:
- Your body makes more heat than it can get rid of
- You lose too much water and salt from sweating
- Your body cannot cool down fast enough

## Types of Heat Illness

### Heat Cramps (Mild)
**What Happens:** Muscles cramp and hurt
**Where:** Usually legs, arms, or stomach
**Why:** Losing too much salt from sweating
**What To Do:** Stop, rest in shade, drink water with salt

### Heat Exhaustion (Moderate - Serious)
**What Happens:** Your body is struggling with the heat
**Warning Signs:**
- Feeling very tired and weak
- Heavy sweating
- Dizziness or fainting
- Headache
- Nausea or throwing up
- Cool, clammy skin
**What To Do:** Get to cool place, drink fluids, rest

### Heat Stroke (Dangerous - Emergency!)
**What Happens:** Your body cannot control its temperature anymore
**Warning Signs:**
- Very hot, red skin (may be dry if stopped sweating)
- Confusion or acting strange
- Passing out or hard to wake up
- Seizure
- Very bad headache
- Throwing up repeatedly
**What To Do:** CALL FOR HELP IMMEDIATELY! Cool them down fast!

## How to Stay Safe

### Drink Plenty of Water
- Drink before you feel thirsty
- Water is best
- Sports drinks can help replace salt

### Dress for the Heat
- Light-colored, loose clothing
- Hat with a brim
- Sunscreen to prevent sunburn

### Plan Your Day
- Avoid hottest part of day (10 AM - 4 PM)
- Take frequent breaks in shade
- Start slow if not used to the heat
- Don't exercise alone

### Watch Your Friends
- Heat illness can make people confused
- They might not know they're in trouble
- Check on each other regularly

## What To Do in an Emergency

**If Someone Shows Heat Stroke Signs:**
1. CALL FOR HELP or call 911
2. Move them to shade right away
3. Take off extra clothing
4. Cool them down with water (pour, spray, sponge)
5. Fan them to help evaporation
6. Put ice packs on neck, armpits, and groin
7. Stay with them until help arrives

**Remember: Heat stroke can kill! Act fast!**`,
      keyTerms: [
        { term: 'heat illness', definition: 'Getting sick from being too hot' },
        { term: 'sweat', definition: 'Wetness your skin makes to help cool your body' },
        { term: 'dehydration', definition: 'Not having enough water in your body' },
        { term: 'heat stroke', definition: 'Very dangerous overheating that can kill you' },
        { term: 'exhaustion', definition: 'Being very tired and weak from heat' },
      ],
      analogies: [
        'Your body is like a car engine - if it runs too hot without cooling, it can break down.',
        'Sweating is like your body\'s air conditioning - it uses water to cool you down.',
        'Heat stroke is like a pot boiling over - the temperature is too high and dangerous.',
      ],
      examples: [
        'A runner on a hot day gets leg cramps and needs to rest and drink.',
        'A hiker feels dizzy and sick after hiking in the hot sun.',
        'A football player collapses during practice on a hot afternoon.',
      ],
      patientCounselingPoints: [
        'Drink water before you feel thirsty - by then you may already be dehydrated.',
        'If you feel dizzy, weak, or very hot, stop and rest in the shade right away.',
        'Never leave a person or a pet in a parked car - it gets very hot fast!',
        'Wear light colors that reflect the sun instead of dark colors that absorb heat.',
        'Take breaks often when it is hot - your body needs time to cool down.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heat illness exists on a spectrum from minor heat cramps to life-threatening heat stroke. Key risk factors include high temperature, humidity, dehydration, and lack of acclimatization. Prevention involves hydration, pacing activity, and environmental awareness. Heat stroke requires immediate aggressive cooling.',
      explanation: `## Heat Illness Spectrum

| Condition | Severity | Core Temp | Key Features |
|-----------|----------|-----------|--------------|
| Heat cramps | Mild | Normal | Painful muscle spasms |
| Heat syncope | Mild | Normal | Fainting from vasodilation |
| Heat exhaustion | Moderate | May be elevated | Heavy sweating, weakness |
| Heat stroke | Severe | >104°F (40°C) | Altered mental status |

## Risk Factors

### Environmental
- High temperature (>80°F increases risk)
- High humidity (prevents sweat evaporation)
- Direct sunlight
- No wind or breeze
- Urban heat island effect

### Individual
- Dehydration
- Lack of heat acclimatization
- Age extremes (very young, very old)
- Obesity
- Certain medications
- Previous heat illness
- Poor physical fitness

### Activity-Related
- Strenuous exercise
- Wearing heavy equipment
- Inadequate rest breaks
- Insufficient fluid intake

## Types in Detail

### Heat Cramps
- Sudden, painful muscle spasms
- Most common in calves, thighs, abdomen
- Occur during or after exercise
- Due to sodium and water loss
- Treatment: Rest, cooling, electrolyte replacement

### Heat Syncope (Fainting)
- Temporary loss of consciousness
- Caused by blood pooling in legs
- Vasodilation + dehydration
- Usually recovers with lying down and fluids
- More common in those not acclimatized

### Heat Exhaustion

**Two Types:**

**Water Depletion Type:**
- Extreme thirst
- Weakness
- Headache
- Loss of consciousness possible

**Salt Depletion Type:**
- Nausea, vomiting
- Muscle cramps
- Dizziness
- Fatigue

**Common to Both:**
- Heavy sweating
- Cool, clammy skin
- Weak pulse
- Normal or slightly elevated temperature

### Heat Stroke - MEDICAL EMERGENCY

**Classic (Passive) Heat Stroke:**
- Elderly, chronically ill
- During heat waves
- No exercise
- Takes hours to days to develop

**Exertional Heat Stroke:**
- Young, healthy people
- During exercise
- Develops rapidly
- High core temperature (>104°F/40°C)
- sweating may or may not be present

**Key Finding: Altered Mental Status**
- Confusion
- Irrational behavior
- Seizures
- Coma

## Prevention

### Hydration Strategy
- Drink 16-20 oz before activity
- Drink 6-12 oz every 15-20 minutes during
- Weigh before/after to estimate fluid loss
- Replace 1.5x the weight lost
- Include electrolytes for activities >1 hour

### Acclimatization
- Takes 7-14 days
- Gradually increase intensity and duration
- Start with 20-30 minutes
- Increase by 10-20% per day
- Maintain with regular exposure

### Activity Planning
- Schedule strenuous activities for cooler times
- Take frequent rest breaks in shade
- Monitor each other for symptoms
- Have emergency plan ready
- Know warning signs

## Treatment

### Heat Cramps
1. Stop activity
2. Move to cool area
3. Gentle stretching
4. Replace fluids with electrolytes
5. Massage may help

### Heat Syncope/Exhaustion
1. Move to cool area
2. Lie down with legs elevated
3. Loosen or remove clothing
4. Cool with fans, wet cloths
5. Replace fluids (water or electrolytes)
6. Monitor for worsening
7. Seek medical help if no improvement

### Heat Stroke - ACT FAST!
1. **CALL 911 immediately**
2. **Rapid cooling is priority**
3. Remove excess clothing
4. Move to shade
5. Cold water immersion if available
6. Ice packs to neck, armpits, groin
7. Fan while spraying with water
8. Continue cooling until temp <102°F (39°C)
9. **Do not delay cooling to transport!**`,
      keyTerms: [
        { term: 'acclimatization', definition: 'Your body gradually getting used to hot weather over time' },
        { term: 'vasodilation', definition: 'Blood vessels getting wider, which can cause fainting' },
        { term: 'electrolytes', definition: 'Salts in your body (like sodium) that you lose when sweating' },
        { term: 'core temperature', definition: 'The temperature inside your body, not just skin temperature' },
        { term: 'heat index', definition: 'How hot it feels when humidity is combined with temperature' },
      ],
      analogies: [
        'Humidity is like wearing a wet sweater - your sweat cannot evaporate to cool you.',
        'Acclimatization is like weightlifting - you need to start light and build up gradually.',
        'Heat stroke is like your body\'s thermostat breaking - the temperature keeps rising unchecked.',
      ],
      examples: [
        'A marathon runner collapses during a race on a hot day - heat stroke.',
        'A construction worker feels dizzy and nauseous after working in the sun - heat exhaustion.',
        'A football player gets leg cramps during summer practice - heat cramps.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heat illness exists on a continuum from minor cramps to life-threatening heat stroke. Thermoregulation fails when heat gain exceeds heat loss. Core temperature >40°C with mental status changes defines heat stroke - a true emergency requiring immediate cooling. Risk factors include environment, physiology, medications, and lack of acclimatization.',
      explanation: `## Thermoregulation Physiology

### Normal Heat Balance
\`\`\`
Heat Production = Heat Loss

Heat Production Sources:
- Basal metabolism (~100 kcal/hour)
- Physical activity (can be 10x basal)
- Shivering (not relevant to heat illness)
- Non-shivering thermogenesis

Heat Loss Mechanisms:
- Radiation (~60% at rest)
- Convection
- Conduction
- Evaporation (primary during exercise)

Normal Core Temp: 36.5-37.5°C
Fever threshold: >38°C
Heat stroke: >40°C (104°F)
\`\`\`

### Thermoregulatory Control

**Central Integration:**
- Hypothalamus (preoptic area)
- Receives input from central and peripheral thermoreceptors
- Initiates heat dissipation responses

**Heat Dissipation Responses:**
1. Vasodilation (radiative/convective loss)
2. Sweating (evaporative loss)
3. Behavioral (seek shade, reduce activity)

### Failure of Thermoregulation

**Heat Gain Exceeds Loss:**
- High environmental temperature
- High humidity (impairs evaporation)
- Strenuous exercise
- Inadequate hydration

**Heat Stroke Pathophysiology:**
\`\`\`
Hyperthermia
  → Cytotoxic injury
  → Increased metabolic demand
  → Splanchnic vasoconstriction
  → Gut barrier breakdown
  → Endotoxin translocation
  → SIRS (systemic inflammatory response)
  → Multi-organ dysfunction
\`\`\`

## Heat Illness Classification

### Heat Cramps
**Pathophysiology:**
- Sodium depletion from sweat
- Muscle membrane hyperexcitability
- Volume depletion contributes

**Clinical Features:**
- Acute, painful muscle spasms
- Common: calves, thighs, abdomen
- Occurs during/after exercise
- Patient usually alert

**Treatment:**
- Rest in cool environment
- Oral sodium replacement
- Stretching and massage
- IV NS for severe cases

### Heat Syncope
**Pathophysiology:**
- Peripheral vasodilation
- Venous pooling in lower extremities
- Decreased venous return
- Decreased cardiac output
- Cerebral hypoperfusion

**Clinical Features:**
- Transient loss of consciousness
- Usually recovers with supine position
- May have brief prodrome
- No neurological sequelae

### Heat Exhaustion

**Two Subtypes:**

**Water Depletion:**
- Thirst, weakness
- Orthostatic symptoms
- Minimal sweating
- Cool, clammy skin

**Salt Depletion:**
- Nausea, vomiting
- Muscle cramps
- Fatigue
- May have normal temp

**Both Types:**
- Core temp <40°C (usually 37-40°C)
- Intact mental status
- Promptly reversible with treatment

### Heat Stroke - Medical Emergency

**Definition:**
- Core temperature >40°C (104°F)
- PLUS central nervous system dysfunction

**Exertional vs. Classic:**

| Feature | Exertional | Classic (Passive) |
|---------|-----------|------------------|
| Population | Young, healthy | Elderly, chronically ill |
| Setting | Exercise | Heat wave, confined space |
| Onset | Rapid (minutes-hours) | Gradual (hours-days) |
| Sweating | Often present | Often absent |
| Rhabdomyolysis | Common | Uncommon |
| Liver injury | Common | Less common |
| DIC | Common | Less common |

**Organ System Involvement:**
\`\`\`
CNS: Confusion, seizures, coma, ataxia
CV: Tachycardia, hypotension, arrhythmias
Pulm: Tachypnea, pulmonary edema (rare)
GI: Nausea, vomiting, diarrhea, liver injury
Renal: ATN from rhabdomyolysis/hypotension
Heme: DIC, rhabdomyolysis
Skin: Hot, dry (classic) or wet (exertional)
\`\`\`

## Treatment Protocols

### Heat Cramps
1. Remove from heat
2. Rest affected muscle
3. Oral sodium + water
4. Gentle stretching
5. Consider IV NS for intractable cases

### Heat Syncope/Exhaustion
1. Supine position with legs elevated
2. Cool environment
3. Oral or IV fluids
4. Monitor temperature
5. May discharge if resolves

### Heat Stroke - Time Critical!

**Cooling Methods (by effectiveness):**

**Cold Water Immersion (Gold Standard):**
- Most effective (0.15-0.30°C/min cooling)
- Water temperature 1-10°C
- Agitate water continuously
- Monitor core temp continuously
- Stop at 39°C to prevent overcooling

**Ice Water Immersion:**
- Most rapid (0.20-0.35°C/min)
- Patient comfort may be issue
- Requires monitoring for shivering

**Evaporative Cooling:**
- Spray with tepid water (15-30°C)
- Fan continuously
- Massage skin to prevent pooling
- Rate: 0.05-0.10°C/min

**Adjuncts to Any Method:**
- Ice packs to groin, axillae, neck
- Remove clothing
- Frequent temperature monitoring
- Treat shivering (benzodiazepines)

**Concurrent Measures:**
- Airway protection as needed
- IV access (large bore)
- Lactated Ringer or NS
- Consider benzodiazepine for shivering
- Shivering increases heat production

**Cooling End Point:**
- Continue to 38-39°C (100.4-102.2°F)
- Then passive cooling
- Avoid overcooling

## Diagnosis and Monitoring

**Temperature Measurement:**
- Rectal or esophageal most accurate
- Tympanic acceptable
- Oral, axillary unreliable in this setting

**Laboratory Studies:**
- CBC (hemoconcentration)
- BMP (electrolytes, renal function)
- CK (rhabdomyolysis)
- LFTs (hepatic injury)
- Coagulation profile (DIC)
- Urinalysis (myoglobin)
- ABG/VBG (acidosis)

## Prevention

### Acclimatization Protocol

**Day 1-2:** 20-30 min exercise at 50% intensity
**Day 3-5:** Increase to 60% intensity
**Day 6-10:** Increase to 75% intensity
**Day 11-14:** Full intensity

**Maintenance:** Regular heat exposure

### Hydration Guidelines

**Pre-exercise:**
- 500 mL (16 oz) 2 hours before
- 250-500 mL (8-16 oz) 15 min before

**During exercise:**
- 150-250 mL (5-8 oz) every 15 min
- More if sweating heavily
- Include electrolytes if >1 hour

**Post-exercise:**
- Replace 150% of weight lost
- Include sodium if heavy sweat loss

### Work-Rest Cycles

**WBGT-Guided:**

| WBGT (°F) | Work:Rest Ratio | Fluid Intake |
|-----------|-----------------|--------------|
| <82 | Normal | Normal |
| 82-87 | 50:10 min | Increase |
| 87.1-89 | 40:20 min | Significant increase |
| 89.1-92 | 30:30 min | Maximum |
| >92 | CANCEL | N/A |

WBGT = Wet Bulb Globe Temperature`,
      keyTerms: [
        { term: 'thermoregulation', definition: 'Body\'s system for maintaining proper temperature' },
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature - comprehensive heat stress index' },
        { term: 'rhabdomyolysis', definition: 'Muscle breakdown releasing contents that can damage kidneys', pronunciation: 'rab-doe-my-OL-uh-sis' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation - abnormal clotting and bleeding' },
        { term: 'SIRS', definition: 'Systemic inflammatory response syndrome - body-wide inflammation' },
      ],
      clinicalNotes: 'Cold water immersion is the gold standard for heat stroke cooling - do not delay cooling for transport. Core temperature should be measured rectally. Rhabdomyolysis is common with exertional heat stroke - monitor CK. Multiorgan failure may develop even after cooling - continue monitoring. Shivering during cooling can be managed with benzodiazepines.',
    },
    4: {
      level: 4,
      summary: 'Heat stroke is a true medical emergency characterized by core temperature >40°C and CNS dysfunction. Rapid cooling (cold water immersion most effective) must not be delayed for transport. Complications include rhabdomyolysis, DIC, hepatic injury, and multi-organ failure. Understanding heat illness spectrum allows for appropriate triage and intervention.',
      explanation: `## Advanced Pathophysiology

### Heat Stroke as Systemic Inflammatory Syndrome

**The Cytokine Storm:**
\`\`\`
Hyperthermia
  ↓
Gut ischemia from splanchnic vasoconstriction
  ↓
Increased intestinal permeability
  ↓
Endotoxin (LPS) translocation to circulation
  ↓
Massive cytokine release (TNF-α, IL-1, IL-6)
  ↓
Endothelial activation and injury
  ↓
DIC, MODS, potential death
\`\`\`

**Coagulopathy Mechanism:**
- Heat-induced protein denaturation
- Endothelial damage
- Platelet activation
- Consumption coagulopathy
- Clinical: Bleeding + thrombosis

### Neurologic Injury

**Direct Thermal Effects:**
- Cerebral edema
- Cerebellar dysfunction (ataxia common)
- Seizure threshold lowered
- Autonomic dysfunction

**Indirect Effects:**
- Hypoglycemia
- Hepatic encephalopathy
- Metabolic acidosis
- Electrolyte abnormalities

### Organ-Specific Injuries

**Hepatic:**
- Centrilobular necrosis
- AST/AST can exceed 10,000 U/L
- Usually resolves with cooling
- Rarely progresses to fulminant failure

**Renal:**
- ATN from hypotension
- Myoglobin precipitation (rhabdo)
- Direct thermal injury
- Usually recover with supportive care

**Cardiac:**
- Demand ischemia
- Direct myocardial injury
- Arrhythmias from electrolytes
- Troponin may be elevated

## Cooling Methods: Evidence Comparison

**Meta-Analysis Cooling Rates:**
\`\`\`
Ice water immersion: 0.20-0.35°C/min
Cold water immersion: 0.15-0.30°C/min
Evaporative: 0.05-0.10°C/min
Ice packs only: 0.02-0.04°C/min
\`\`\`

**Clinical Studies:**
- No mortality difference if cooled to <39°C within 30 min
- Cold water immersion most practical for exertional cases
- Evaporative reasonable when immersion not possible
- Method less important than rapid initiation

**Cooling Complications:**
- Overcooling (<37°C) can occur
- Shivering increases heat production
- Monitor core temp continuously
- Stop at 38-39°C then passive cooling

## Special Populations

### Exertional Heat Stroke

**Unique Features:**
- Young, healthy athletes
- Often continues activity despite symptoms
- May have illicit substances contributing
- Sickling trait patients at extreme risk

**Athletes at Risk:**
- Football players (equipment)
- Distance runners
- Military recruits
- Firefighters

### Classic Heat Stroke

**Unique Features:**
- Elderly predominance
- Medication effects common
- Living alone risk factor
- May not seek help

**Medication Risks:**
- Diuretics (dehydration)
- Beta-blockers (impair thermoregulation)
- Anticholinergics (reduce sweating)
- Phenothiazines (impair thermoregulation)
- Stimulants (increase heat production)

### Pediatric Considerations

**Risk Factors:**
- Higher surface-to-mass ratio
- Less efficient sweating
- Depend on adults for hydration
- Left in cars (rapid heating)

**Car Temperature Data:**
- 80°F day: Car reaches 109°F in 20 min
- 80°F day: Car reaches 119°F in 40 min
- Cracking windows has minimal effect

### Pregnancy

**Considerations:**
- Increased metabolic demand
- Thermoregulation already challenged
- Fetal risk from hyperthermia
- Dehydration risk for preterm labor

## Complications

### Rhabdomyolysis

**Pathophysiology:**
- Direct muscle injury from heat
- Compressive injury from unconsciousness
- Prolonged muscle contraction (seizures)

**Clinical Features:**
- CK often >10,000 U/L (can exceed 100,000)
- Myoglobinuria (tea-colored urine)
- Electrolyte abnormalities
- ATN risk

**Treatment:**
- Aggressive fluids (target urine output 100-200 mL/hr)
- Mannitol for diuresis (controversial)
- Dialysis if severe AKI

### Disseminated Intravascular Coagulation

**Clinical Features:**
- Bleeding from IV sites, gums
- Purpura, ecchymoses
- Thrombotic complications
- Lab: prolonged PT/PTT, low fibrinogen, elevated D-dimer

**Management:**
- Treat underlying cause (cooling)
- FFP, cryoprecipitate if bleeding
- Platelets if <20,000 or bleeding

### Hepatic Injury

**Pattern:**
- Centrilobular necrosis
- AST > ALT
- Bilirubin may be normal initially
- Usually self-limited

**Indications for transplant:**
- Persistent encephalopathy
- INR uncorrectable with FFP
- No improvement after cooling

## Prognosis and Disposition

**Poor Prognostic Indicators:**
- Delay to cooling >2-3 hours
- Core temperature >42°C
- Coma on presentation
- Delayed normalization of lactate
- Multiorgan failure

**Discharge Criteria:**
- Normal temperature off cooling
- Normal mental status
- Normalizing labs
- Reliable follow-up
- No cardiac complications

**Admission Indications:**
- Abnormal mental status
- Persistent organ dysfunction
- Significant lab abnormalities
- Inadequate home support
- Social concerns (elderly, children)`,
      keyTerms: [
        { term: 'cytokine storm', definition: 'Massive release of inflammatory chemicals causing systemic damage' },
        { term: 'endotoxin', definition: 'Toxic substance from gram-negative bacteria that triggers inflammation' },
        { term: 'centrilobular necrosis', definition: 'Death of liver cells around central veins' },
        { term: 'ATN', definition: 'Acute tubular necrosis - kidney damage from ischemia or toxins' },
        { term: 'splanchnic', definition: 'Relating to abdominal organs and their blood supply', pronunciation: 'SPLANK-nik' },
      ],
      clinicalNotes: 'Cold water immersion is the most effective cooling method - do not delay for transport. CK levels can exceed 100,000 in exertional heat stroke with rhabdomyolysis. Core temperature should be measured rectally - other sites are inaccurate in this setting. Cooling should stop at 38-39°C to prevent overcooling. Classic heat stroke has higher mortality than exertional.',
    },
    5: {
      level: 5,
      summary: 'Heat stroke is a systemic inflammatory condition with gut barrier disruption, endotoxemia, and cytokine storm. Multi-organ dysfunction is common. Cold water immersion is the most effective cooling method. Outcomes depend on time to cooling and degree of organ dysfunction. Emerging research explores therapeutic hypothermia, immunomodulation, and biomarkers for prognosis.',
      explanation: `## Molecular Pathophysiology

### Gut-Derived Endotoxemia

**Splanchnic Hypoperfusion:**
\`\`\`
Heat stress
  → Sympathetic activation
  → Splanchnic vasoconstriction (shunting blood to skin/muscle)
  → Gut mucosal ischemia
  → Tight junction disruption (ZO-1, occludin)
  → Increased intestinal permeability
  → Endotoxin (LPS) translocation
  → TLR4 activation on Kupffer cells and macrophages
  → Massive cytokine production (TNF-α, IL-1β, IL-6)
  → Systemic inflammatory response
\`\`\`

**Evidence:**
- Elevated endotoxin in heat stroke patients
- Correlation with cytokine levels
- Animal studies: gut cooling reduces heat stroke severity
- Probiotic/protection strategies under investigation

### Heat Shock Response

**Heat Shock Proteins (HSPs):**
\`\`\`
HSP70, HSP90, HSP27
  ↑ (in response to hyperthermia)
  → Act as molecular chaperones
  → Prevent protein aggregation
  → Facilitate refolding
  → Anti-apoptotic effects
  → Cytoprotective
\`\`\`

**HSP Polymorphisms:**
- Associated with heat stroke susceptibility
- May explain individual variation
- Potential for genetic screening

**Therapeutic Implications:**
- Preconditioning with mild heat stress
- Pharmacologic HSP induction (geranylgeranylacetone)
- Time-dependent expression window

### Coagulopathy Mechanism

**DIC Pathogenesis:**
\`\`\`
Endothelial activation
  ↑
Tissue factor expression
  ↑
Thrombin generation
  ↑
Microvascular thrombosis
  +  Consumptive coagulopathy
  +  Fibrinolysis activation
  = DIC (bleeding + thrombosis)
\`\`\`

**Heat Effects on Coagulation:**
- Direct protein denaturation (especially >42°C)
- Platelet activation and consumption
- Von Willebrand factor release
- Protein C pathway dysfunction

## Clinical Decision Support

### Risk Stratification

**Heat Stroke Severity Score (proposed):**
\`\`\`
Points:
Coma: 2
GCS <8: 1
AST >1000: 1
CK >10,000: 1
Creatinine >2: 1
Platelets <100,000: 1

High score (>3): Consider ICU
Low score (0-1): May consider ward
\`\`\`

### Cooling Decision Algorithm

\`\`\`
Suspected Heat Stroke (hyperthermia + AMS)
  ↓
Immediate cooling initiation
  ↓
Immersion available?
  Yes → Ice water immersion
  No → Evaporative + ice packs
  ↓
Continuous core temp monitoring
  ↓
Temp <39°C?
  Yes → Stop active cooling, monitor
  No → Continue cooling
  ↓
Assess for complications:
  - Rhabdomyolysis (CK)
  - DIC (coagulation)
  - Hepatic injury (LFTs)
  - Renal injury (creatinine, urine)
\`\`\`

## Evidence-Based Updates

### Cooling Methods Comparative Data

**Systematic Review 2020:**
- Ice/cold water immersion: fastest cooling
- No mortality difference if cooled within 30 min
- Evaporative reasonable alternative when immersion unavailable
- Rapid initiation more important than method selection

### Adjunctive Therapies

**Dantrolene:**
- Theoretical benefit (reduces muscle thermogenesis)
- Studies show no benefit
- NOT recommended

**Antipyretics:**
- Acetaminophen: No benefit (heat not mediated by prostaglandins)
- NSAIDs: No benefit, may increase renal risk
- NOT recommended

**Benzodiazepines:**
- Control shivering during cooling
- Treat agitation/seizures
- Reduces heat production from muscle activity
- RECOMMENDED as adjunct

**Cold Saline:**
- 4°C NS: 20-30 mL/kg bolus
- Reduces core temp by ~0.5°C
- Useful adjunct when immersion not possible
- Monitor for fluid overload

## Biomarkers and Prognosis

**Predictive Biomarkers:**

**Early Prognostic Markers:**
- Lactate clearance at 6h predicts survival
- Procalcitonin correlates with severity
- HMGB1: Late biomarker of tissue injury
- Cell-free DNA: Marker of cellular death

**Organ-Specific Markers:**
- NGAL, KIM-1: Renal injury
- AST/ALT ratio: Hepatic injury pattern
- CK-MB, troponin: Cardiac involvement
- NSE: Neuronal injury

## Special Situations

### Exertional Heat Stroke in Athletes

**Return to Play:**
\`\`\`
Complete resolution of symptoms
Normal labs (CK, LFTs, renal)
Normal heat tolerance testing
Gradual return over 2-4 weeks
Recurrence risk: low if proper precautions
\`\`\`

**Screening Considerations:**
- Sickling trait testing (high-risk populations)
- Previous heat illness history
- Medication review
- Acclimatization status

### Heat Stroke in Mass Gatherings

**Pilgrimage (Hajj):**
- High risk due to crowding, dress, acclimatization status
- Mitigation: water points, misting fans, rest areas
- On-site cooling stations critical

**Sporting Events:**
- Pre-event medical screening
- On-site rapid cooling capability
- WBGT monitoring
- Cancelation protocols

### Climate Change Implications

**Increasing Incidence:**
- More frequent heat waves
- Higher peak temperatures
- Longer duration events
- Expansion of at-risk geographic areas

**Public Health Strategies:**
- Cooling centers
- Check-in programs for vulnerable
- Urban heat island mitigation
- Worker protection regulations

## Research Frontiers

### Therapeutic Hypothermia
- Paradoxical concept: controlled hypothermia after heat stroke
- Animal studies show benefit
- Human trials ongoing

### Immunomodulation
- Anti-cytokine therapies
- Steroid controversy
- Targeted anti-TNF therapy
- IL-1 receptor antagonist

### Gut Protection Strategies
- Probiotics
- Antibiotic decontamination
- Tight junction enhancers
- Selective decontamination

### Pharmacologic Preconditioning
- HSP inducers
- Ischemic preconditioning
- Nutraceuticals (curcumin, resveratrol)`,
      keyTerms: [
        { term: 'TLR4', definition: 'Toll-like receptor 4 - recognizes bacterial endotoxin', pronunciation: 'tee-el-are-four' },
        { term: 'tight junction', definition: 'Protein complexes that seal cells together in gut lining' },
        { term: 'dantrolene', definition: 'Muscle relaxant that reduces heat production, ineffective in heat stroke' },
        { term: 'HMGB1', definition: 'High mobility group box 1 - late inflammatory mediator', pronunciation: 'h-m-g-b-one' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin - early kidney injury marker', pronunciation: 'en-gal' },
      ],
      clinicalNotes: `Heat Stroke Clinical Pearls:

1. Cold water immersion is gold standard - do not delay for transport
2. Core temp >40°C + AMS = heat stroke, treat immediately
3. Gut ischemia drives systemic inflammation - early cooling critical
4. CK can exceed 100,000 in exertional heat stroke
5. Stop active cooling at 38-39°C to prevent overcooling
6. Time to cooling is most important prognostic factor
7. Dantrolene and antipyretics are NOT effective
8. Benzodiazepines help control shivering during cooling
9. Elevated lactate predicts mortality
10. Classic heat stroke has higher mortality than exertional`,
    },
  },

  media: [
    {
      id: 'heat-illness-spectrum',
      type: 'diagram',
      filename: 'heat-illness-spectrum.svg',
      title: 'Heat Illness Spectrum',
      description: 'Progression from heat cramps to heat stroke',
    },
    {
      id: 'heat-stroke-algorithm',
      type: 'diagram',
      filename: 'heat-stroke-algorithm.svg',
      title: 'Heat Stroke Emergency Algorithm',
      description: 'Emergency assessment and cooling protocol for heat stroke',
    },
    {
      id: 'wbgt-chart',
      type: 'image',
      filename: 'wbgt-work-rest-chart.jpg',
      title: 'WBGT Work-Rest Guidelines',
      description: 'Work-rest cycles based on wet bulb globe temperature',
    },
  ],

  citations: [
    {
      id: 'wms-heat-illness-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for the Treatment of Exercise-Associated Hyponatremia and Heat Illness',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'acsm-position-heat',
      type: 'article',
      title: 'ACMS Position Stand: Exertional Heat Illness During Training and Competition',
      source: 'Medicine & Science in Sports & Exercise',
    },
    {
      id: 'heat-stroke-systematic-review',
      type: 'article',
      title: 'Cooling Methods for Heat Stroke: Systematic Review and Meta-Analysis',
      source: 'Resuscitation',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-dehydration', targetType: 'condition', relationship: 'related', label: 'Dehydration' },
    { targetId: 'wilderness-first-aid', targetType: 'concept', relationship: 'related', label: 'Wilderness First Aid' },
    { targetId: 'wilderness-environmental', targetType: 'concept', relationship: 'related', label: 'Environmental Medicine' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular', 'thermoregulatory'],
    topics: ['wilderness-medicine', 'environmental-medicine', 'emergency-medicine', 'sports-medicine'],
    keywords: ['heat stroke', 'heat exhaustion', 'hyperthermia', 'thermoregulation', 'WBGT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'sports-medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default heatIllnessContent;
