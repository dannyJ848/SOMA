/**
 * Hydration - Nutrition Science
 *
 * Comprehensive content on fluid requirements, water balance,
 * electrolyte physiology, dehydration, and clinical applications
 * of fluid management across health and disease states.
 */

import { EducationalContent } from '../types';

export const hydration: EducationalContent = {
  id: 'nutrition-hydration',
  type: 'topic',
  name: 'Hydration',
  alternateNames: ['Fluid Balance', 'Water Requirements', 'Electrolyte Balance'],

  levels: {
    1: {
      level: 1,
      summary: 'Hydration means having enough water in your body for it to work properly. Water helps you digest food, control your temperature, and keep all your organs running smoothly.',
      explanation: `## Why Water Is Important

Water is one of the most important things your body needs. You can live without food for weeks, but only a few days without water!

**What Your Body Uses Water For:**
- Digesting the food you eat
- Controlling your body temperature (sweating)
- Carrying nutrients to your cells
- Removing waste through urine
- Lubricating your joints
- Protecting your brain and spinal cord

## How Much Water Do You Need?

**General Guidelines:**
- Kids ages 4-8: About 5 cups (40 oz) per day
- Kids ages 9-13: About 7-8 cups (56-64 oz) per day
- Teenagers: About 8-11 cups (64-88 oz) per day
- Adults: About 8-11 cups (64-88 oz) per day

**You Need More When:**
- It's hot outside
- You're exercising or playing sports
- You have a fever or are sick
- You're pregnant or breastfeeding

## What Counts as Water?

**Good Sources:**
- Plain water
- Milk
- Herbal teas
- Fruits and vegetables (watermelon, cucumber, strawberries)
- Soup and broth

**Limit These:**
- Soda (too much sugar)
- Fruit juice (too much sugar)
- Sports drinks (only for intense exercise lasting over an hour)
- Energy drinks (not for kids!)

## Signs of Dehydration

**Mild Dehydration:**
- Thirst
- Dry mouth
- Dark yellow urine
- Feeling tired
- Headache

**Severe Dehydration (tell an adult immediately):**
- Very dark urine or not peeing much
- Dizziness or confusion
- Extreme thirst
- Dry, cool skin
- Fast heartbeat
- Fainting

**Quick Test:** Check your pee color!
- Pale yellow = Good hydration
- Dark yellow or amber = Drink more water!

## Electrolytes: The Body's "Electric" Minerals

Electrolytes are minerals in your body fluids that help your body work:
- **Sodium:** Helps hold onto water
- **Potassium:** Helps your heart beat properly
- **Magnesium:** Helps your muscles work

You lose electrolytes when you sweat a lot, which is why athletes sometimes drink sports drinks.

## Tips for Staying Hydrated

1. **Carry a water bottle** with you everywhere
2. **Drink water before you're thirsty** - thirst means you're already a bit dehydrated
3. **Eat water-rich foods** like fruits and vegetables
4. **Drink water with every meal**
5. **Set reminders** if you forget to drink

Remember: Your body is about 60% water. Keeping it filled with the right amount helps everything work better!`,
      keyTerms: [
        { term: 'hydration', definition: 'Having enough water in your body for it to work properly' },
        { term: 'dehydration', definition: 'Not having enough water in your body' },
        { term: 'electrolytes', definition: 'Minerals in your body that help control fluid balance and muscle function' },
        { term: 'urine', definition: 'Liquid waste made by your kidneys; the color tells you if you\'re hydrated' },
      ],
      analogies: [
        'Your body is like a sponge - it needs to stay full of water to work properly.',
        'Water is like oil in a car engine - without it, everything overheats and stops working.',
        'Electrolytes are like the battery in your phone - they help power everything.',
      ],
      examples: [
        'After playing sports, drink water to replace what you lost through sweat',
        'If you feel a headache coming on, try drinking a glass of water first',
        'Eating watermelon on a hot day helps you stay hydrated and refreshed',
        'Aim for water to be pale yellow like lemonade, not dark like apple juice',
      ],
      patientCounselingPoints: [
        'Drink a glass of water first thing in the morning',
        'Keep water at your desk or in your backpack',
        'If you don\'t like plain water, try adding a slice of lemon or lime',
        'Eat fruits and vegetables - they\'re mostly water!',
        'Limit sugary drinks - they can actually make you more dehydrated',
      ],
    },
    2: {
      level: 2,
      summary: 'Proper hydration maintains fluid balance, regulates body temperature, and supports essential physiological processes. Daily water requirements vary by age, activity level, and environmental conditions, while electrolytes like sodium and potassium are crucial for nerve and muscle function.',
      explanation: `## Understanding Hydration

Water makes up about 60% of adult body weight (even higher in children and infants). Maintaining proper fluid balance is essential for health and physical performance.

## Daily Water Requirements

**General Recommendations:**

| Group | Total Water (cups/day) | From Beverages | From Food |
|-------|------------------------|----------------|-----------|
| Children 4-8 | 5 | 4 | 1 |
| Boys 9-13 | 8 | 6.5 | 1.5 |
| Girls 9-13 | 7 | 5.5 | 1.5 |
| Boys 14-18 | 11 | 8.5 | 2.5 |
| Girls 14-18 | 8 | 6.5 | 1.5 |
| Men | 12.5 | 10 | 2.5 |
| Women | 9 | 7.5 | 1.5 |
| Pregnancy | 10 | 8 | 2 |
| Breastfeeding | 13 | 10.5 | 2.5 |

*Source: Dietary Reference Intakes (DRI) for Water, Potassium, Sodium, Chloride, and Sulfate*

## Fluid Balance

**Water Input:**
- Beverages (80% of total)
- Food moisture (20% of total)
- Metabolic water produced by cellular processes

**Water Output:**
- Urine (60% of output)
- Skin/sweat (insensible: 20%; sensible: variable)
- Lungs (insensible: 10%)
- Feces (10%)

## Electrolytes

**Major Electrolytes:**

| Electrolyte | Primary Function | Daily Needs | Food Sources |
|-------------|------------------|-------------|--------------|
| Sodium | Fluid balance, nerve signaling | 1500 mg | Salt, processed foods |
| Potassium | Fluid balance, heart rhythm | 2600-3400 mg | Bananas, potatoes, beans |
| Chloride | Fluid balance, stomach acid | 2300 mg | Salt, seaweed |
| Calcium | Bones, muscle function | 1000-1300 mg | Dairy, leafy greens |
| Magnesium | Muscle/nerve function | 310-420 mg | Nuts, whole grains |
| Phosphorus | Bones, energy | 700 mg | Meat, dairy, cola |

**Electrolyte Balance:**
- Sodium and potassium work together to regulate fluid inside and outside cells
- Sodium holds water outside cells
- Potassium is inside cells
- The right balance is essential for proper hydration

## Dehydration

**Causes:**
- Inadequate fluid intake
- Excessive sweating (exercise, hot weather)
- Illness (fever, vomiting, diarrhea)
- Medications (diuretics)
- High altitude

**Signs and Symptoms by Severity:**

| Severity | Signs & Symptoms | Treatment |
|----------|------------------|------------|
| Mild (1-2% fluid loss) | Thirst, dark urine, dry mouth, mild fatigue | Oral fluids, rest |
| Moderate (3-5% fluid loss) | Decreased urine output, headache, dizziness, dry skin | Oral rehydration, electrolytes |
| Severe (>5% fluid loss) | Confusion, rapid pulse, low blood pressure, fainting | Emergency medical care |

**Groups at Higher Risk:**
- Children and infants (higher turnover, can't communicate thirst)
- Elderly (diminished thirst sensation)
- Athletes and outdoor workers
- People with chronic illnesses (diabetes, kidney disease)
- Pregnant and breastfeeding women

## Exercise and Hydration

**Before Exercise:**
- Drink 16-20 oz (2-2.5 cups) of water 2-3 hours before
- Drink 8-10 oz (1 cup) 10-20 minutes before

**During Exercise:**
- For exercise <1 hour: Water is sufficient
- For exercise >1 hour: Sports drink with electrolytes
- Aim for 7-10 oz (about 1 cup) every 10-20 minutes

**After Exercise:**
- Weigh yourself before and after
- Drink 16-24 oz for every pound lost
- Include electrolytes if sweating heavily

**When to Use Sports Drinks:**
- Exercise lasting more than 60 minutes
- High-intensity exercise in hot weather
- Endurance events
- Otherwise, water is usually sufficient

## Overhydration (Hyponatremia)

**What It Is:**
- Low sodium in the blood from drinking too much water without adequate electrolytes
- Dilutes sodium levels, causing cells to swell

**Symptoms:**
- Nausea and headache
- Confusion and fatigue
- Swelling (hands, feet)
- Severe: Seizures, coma

**Prevention:**
- Don't drink more than you sweat
- Include electrolytes during prolonged exercise
- Drink to thirst, not excessively`,
      keyTerms: [
        { term: 'electrolytes', definition: 'Minerals that carry an electric charge and help regulate fluid balance, muscle contractions, and nerve signals' },
        { term: 'dehydration', definition: 'Loss of more fluids than you take in, preventing your body from functioning normally' },
        { term: 'hyponatremia', definition: 'Low sodium concentration in the blood, often caused by drinking excessive water without adequate electrolytes' },
        { term: 'insensible water loss', definition: 'Water loss that you cannot perceive, such as through breathing and skin evaporation' },
        { term: 'sensible water loss', definition: 'Noticeable water loss through urine, sweat, and feces' },
        { term: 'metabolic water', definition: 'Water produced internally as a byproduct of cellular metabolism' },
      ],
      analogies: [
        'Your body is like a swimming pool - it needs the right balance of water and chemicals (electrolytes) to stay clean and safe.',
        'Electrolytes are like the characters in a balanced story - sodium (the good guy) and potassium (the sidekick) need the right ratio to keep things running smoothly.',
        'Dehydration is like driving a car without oil - everything overheats and stops working properly.',
      ],
      examples: [
        'Marathon runners can lose 1-2 liters of sweat per hour, requiring careful fluid and electrolyte replacement',
        'People taking diuretics for blood pressure need to monitor their hydration and electrolyte levels',
        'Breastfeeding mothers need about 13 cups of fluid daily to produce milk for their babies',
        'Football players in hot weather may need 1-2 gallons of fluid during practice',
      ],
      patientCounselingPoints: [
        'Check your urine color - pale yellow means well hydrated',
        'Drink water before, during, and after exercise',
        'Don\'t wait until you\'re thirsty to drink',
        'In hot weather, increase fluid intake and add electrolytes',
        'If you\'re sick with fever, vomiting, or diarrhea, replace lost fluids and electrolytes',
      ],
    },
    3: {
      level: 3,
      summary: 'Fluid homeostasis involves complex regulation by thirst, ADH, RAAS, and renal function. Electrolyte disturbances reflect disrupted balance between intake, excretion, and distribution across fluid compartments. Clinical assessment requires understanding of tonicity, osmolality, and compartment shifts.',
      explanation: `## Body Fluid Compartments

**Total Body Water Distribution:**

\`\`\`
Total Body Water (60% of body weight)
├─ Intracellular Fluid (ICF): 40% of body weight
│  └─ Inside cells, high K+, low Na+
└─ Extracellular Fluid (ECF): 20% of body weight
   ├─ Interstitial: 15% of body weight
   │  └─ Between cells, similar electrolytes to plasma
   ├─ Intravascular: 5% of body weight
   │  └─ Blood volume, plasma
   └─ Transcellular: ~1% of body weight
      └─ CSF, synovial fluid, GI secretions
\`\`\`

**Electrolyte Distribution:**

| Electrolyte | ECF (mEq/L) | ICF (mEq/L) | Clinical Significance |
|-------------|-------------|-------------|----------------------|
| Sodium | 140 | 10 | Major ECF cation, determines osmolality |
| Potassium | 4 | 140 | Major ICF cation, membrane potential |
| Calcium | 2.4 (ionized) | 0.0001 | Cell signaling, clotting |
| Magnesium | 1.7 | 40 | Enzyme cofactor |
| Chloride | 105 | 4 | Major ECF anion |
| Bicarbonate | 24 | 10 | Acid-base balance |
| Phosphate | 1 | 40 | Energy metabolism, buffering |

## Fluid Homeostasis Regulation

**Thirst Mechanism:**

\`\`\`
Osmolality increase (>1%)
  ↓
Osmoreceptors (OVLT, SFO)
  ↓
Thirst sensation + ADH release
  ↓
Water intake → Osmolality normalization

Baroreceptors (low pressure/volume)
  ↓
Thirst + RAAS activation
  ↓
Water + salt intake
\`\`\`

**Antidiuretic Hormone (ADH/Vasopressin):**

\`\`\`
Synthesis: Hypothalamus (supraoptic, paraventricular nuclei)
Storage/Release: Posterior pituitary

Stimuli for release:
  ├─ Increased plasma osmolality (>285 mOsm/kg)
  ├─ Decreased blood volume/pressure (baroreceptors)
  ├─ Nausea, pain, stress
  └─ Various medications (nicotine, morphine)

Actions:
  ├─ V2 receptors (kidney): Insert aquaporins → ↑water reabsorption
  └─ V1a receptors (vascular): Vasoconstriction (high concentrations)

Disorders:
  ├─ SIADH: Excess ADH → hyponatremia, low urine output
  └─ Diabetes insipidus: ADH deficiency/resistance → polyuria, polydipsia
\`\`\`

**Renin-Angiotensin-Aldosterone System (RAAS):**

\`\`\`
Decreased renal perfusion
  ↓
Juxtaglomerular cells release Renin
  ↓
Angiotensinogen → Angiotensin I
  ↓ (ACE)
Angiotensin I → Angiotensin II
  ↓
  ├─ Vasoconstriction (↑BP)
  ├─ ADH release
  ├─ Thirst stimulation
  └─ Aldosterone release (adrenal cortex)
      ↓
      ↑Na+ reabsorption, ↑K+ excretion
      ↓
      Water follows Na+ → ↑blood volume
\`\`\`

## Sodium and Water Balance

**Osmolality and Tonicity:**

\`\`\`
Calculated serum osmolality:
  = 2[Na+] + [Glucose]/18 + [BUN]/2.8
  Normal: 275-295 mOsm/kg

Tonicity categories:
  ├─ Isotonic: Normal osmolality (275-295)
  ├─ Hypertonic: Increased osmolality (>295)
  │  ├─ Hypernatremia (Na+ excess or water loss)
  │  └─ Hyperglycemia (glucose acts as osmole)
  └─ Hypotonic: Decreased osmolality (<275)
     └─ Hyponatremia (Na+ deficit or water excess)

Hyponatremia classification:
  ├─ Hypovolemic: Both Na+ and water ↓, but water > Na+
  ├─ Euvolemic: Normal volume, excess water (SIADH)
  └─ Hypervolemic: Both ↑, but water > Na+ (HF, cirrhosis, nephrosis)
\`\`\`

**Sodium Disorders:**

**Hypernatremia (Na+ >145 mEq/L):**
\`\`\`
Causes:
  ├─ Pure water loss:
  │  ├─ Diabetes insipidus (central or nephrogenic)
  │  ├─ Insensible losses (fever, burns)
  │  └─ Kidney disease (concentrating defect)
  └─ Hypotonic fluid loss:
     ├─ GI losses (vomiting, diarrhea)
     ├─ Diuretics (osmotic, loop)
     └─ Burns

Symptoms:
  ├─ Neurologic: Lethargy, seizures, coma (shrinkage of neurons)
  └─ Volume depletion signs

Treatment:
  ├─ Calculate free water deficit:
  │  = TBW × ([Na+/140] - 1)
  │  TBW ≈ 0.6 × lean body weight (men) or 0.5 (women)
  ├─ Replace over 48-72 hours (≤10 mEq/L/day)
  └─ Address underlying cause
\`\`\`

**Hyponatremia (Na+ <135 mEq/L):**
\`\`\`
Causes:
  ├─ Hypovolemic:
  │  ├─ GI losses (low-Na+ fluids)
  │  ├─ Diuretics (thiazides > loop)
  │  └─ Cerebral salt wasting
  ├─ Euvolemic:
  │  ├─ SIADH (most common in hospital)
  │  ├─ Psychogenic polydipsia
  │  └─ Beer potomania
  └─ Hypervolemic:
     ├─ Heart failure
     ├─ Cirrhosis
     └─ Nephrotic syndrome

Symptoms:
  ├─ Mild: Nausea, headache, confusion
  ├─ Moderate: Lethargy, muscle cramps
  └─ Severe: Seizures, coma, cerebral edema

Risk factors for cerebral edema:
  ├─ Women (menstruating)
  ├─ Children
  ├─ Postoperative
  └─ Rapid Na+ decline (>0.5 mEq/L/hr)

Treatment:
  ├─ Severe symptoms: 3% hypertonic saline (100-150 mL bolus)
  ├─ Moderate: Fluid restriction, salt tablets
  ├─ Chronic/Asymptomatic: Slow correction (≤8 mEq/L/day)
  └─ Avoid overcorrection → Osmotic demyelination syndrome
\`\`\`

## Potassium Balance

\`\`\`
Distribution:
  - 98% intracellular
  - 2% extracellular
  - Small ECF changes = large total body changes

Regulation:
  ├─ External balance:
  │  ├─ Intake: 40-120 mEq/day (fruits, vegetables)
  │  └─ Excretion: Kidney (90%), GI (10%)
  └─ Internal balance:
     ├─ Na+/K+-ATPase (insulin, β2-agonists shift K+ IN)
     └─ Acid-base: Acidosis shifts K+ OUT; alkalosis shifts K+ IN

Hypokalemia (K+ <3.5 mEq/L):
  Causes: Diuretics, GI losses, hyperaldosteronism, hypomagnesemia
  ECG: Flattened T waves, U waves, ST depression
  Treatment: K+ replacement (PO preferred), correct Mg2+

Hyperkalemia (K+ >5.0 mEq/L):
  Causes: Renal failure, ACE inhibitors, spironolactone, tissue breakdown
  ECG: Peaked T waves, PR prolongation, QRS widening, sine wave
  Treatment:
    - Stabilize membrane: Calcium gluconate
    - Shift K+ IN: Insulin + glucose, β2-agonists
    - Eliminate K+: Diuretics, dialysis
\`\`\`

## Clinical Assessment

\`\`\`
Hydration status evaluation:
  ├─ History:
  │  ├─ Fluid intake/output
  │  ├─ Weight changes
  │  └─ Medications (diuretics, lithium, etc.)
  ├─ Physical exam:
  │  ├─ Mucous membranes (dry = dehydrated)
  │  ├─ Skin turgor (tenting = dehydration)
  │  ├─ Jugular venous pressure (low = hypovolemia)
  │  ├─ Orthostatic vitals
  │  └─ Edema (hypervolemia)
  └─ Laboratory:
     ├─ BUN/Cr ratio (>20:1 suggests hypovolemia)
     ├─ Urine specific gravity
     ├─ Urine Na+ (low in volume depletion, high in salt-wasting)
     ├─ Urine osmolality
     └─ Serum electrolytes, osmolality
\`\`\``,
      keyTerms: [
        { term: 'osmolality', definition: 'Concentration of dissolved particles in solution; determines water movement across membranes' },
        { term: 'tonicity', definition: 'Effective osmolality; determines osmotic water movement and cell volume changes' },
        { term: 'ADH', definition: 'Antidiuretic hormone (vasopressin); promotes water reabsorption in collecting ducts' },
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; regulates blood pressure and fluid balance' },
        { term: 'SIADH', definition: 'Syndrome of inappropriate antidiuretic hormone; causes euvolemic hyponatremia' },
        { term: 'aquaporins', definition: 'Water channels in cell membranes regulated by ADH to permit water reabsorption' },
        { term: 'osmotic demyelination syndrome', definition: 'Neurologic damage from rapid correction of chronic hyponatremia; formerly called central pontine myelinolysis' },
      ],
      analogies: [
        'Body fluid compartments are like rooms in a house - doors (cell membranes with aquaporins) control who goes where based on the owner (ADH).',
        'Sodium is like the bouncer at a club - wherever sodium goes, water follows.',
        'The RAAS system is like a security team - when blood pressure drops, they sound the alarm (renin) and call in reinforcements (angiotensin, aldosterone) to restore order.',
      ],
      examples: [
        'Marathon runner with hyponatremia from drinking excessive water without electrolytes',
        'Elderly patient on thiazide diuretic develops hyponatremia',
        'Uncontrolled diabetic with hyperglycemia causing pseudohyponatremia',
        'Heart failure patient with fluid overload requiring diuresis',
      ],
      clinicalNotes: 'In hyponatremia, always calculate serum osmolality first to classify the disorder. Hypovolemic hyponatremia requires volume repletion with isotonic fluids. SIADH is treated with fluid restriction. Rapid correction of chronic hyponatremia (>8-10 mEq/L/day) risks osmotic demyelination syndrome.',
    },
    4: {
      level: 4,
      summary: 'Advanced fluid management requires understanding complex acid-base and electrolyte interactions, mixed disorders, and specialized clinical scenarios including perioperative, critical care, and renal replacement therapy considerations.',
      explanation: `## Advanced Acid-Base and Electrolyte Interactions

**The Delta Gap:**

\`\`\`
Anion gap = [Na+] - ([Cl-] + [HCO3-])
Normal: 8-12 mEq/L (unmeasured anions: albumin, phosphate, sulfates)

Corrected for albumin:
  AG + (2.5 × [4 - serum albumin])

Delta gap = Measured AG - Normal AG (12)
Delta HCO3- = 24 - Measured HCO3-

Relationship in pure anion gap metabolic acidosis:
  ΔGap ≈ ΔHCO3- (1:1 ratio)

If ΔGap > ΔHCO3-:
  → Concomitant metabolic alkalosis

If ΔGap < ΔHCO3-:
  → Concomitant non-anion gap metabolic acidosis

Clinical example:
  AG = 20 (ΔGap = 8)
  HCO3- = 14 (ΔHCO3- = 10)
  ΔGap < ΔHCO3- → Non-anion gap acidosis also present
\`\`\`

**Mixed Acid-Base Disorders:**

\`\`\`
Stepwise approach:

1. Assess pH:
   - Acidemia: pH < 7.40
   - Alkalemia: pH > 7.40

2. Primary process:
   - pCO2 and HCO3- move in opposite directions → Respiratory
   - pCO2 and HCO3- move in same direction → Metabolic

3. Compensation:
   - Respiratory acidosis: Acute ↑HCO3- 1 per ↑pCO2 10
                      Chronic ↑HCO3- 4 per ↑pCO2 10
   - Respiratory alkalosis: Acute ↓HCO3- 2 per ↓pCO2 10
                         Chronic ↓HCO3- 5 per ↓pCO2 10
   - Metabolic acidosis: ↓pCO2 = 1.2 × ↓HCO3-
   - Metabolic alkalosis: ↑pCO2 = 0.6 × ↑HCO3-

4. Calculate anion gap (if metabolic acidosis)

5. Check ΔGap:ΔHCO3- ratio

6. Assess clinical correlation
\`\`\`

**Formulas for Mixed Disorders:**

\`\`\`
Winter's formula (expected pCO2 in metabolic acidosis):
  pCO2 = (1.5 × [HCO3-]) + 8 ± 2
  If measured > expected → Concomitant respiratory acidosis
  If measured < expected → Concomitant respiratory alkalosis

Expected HCO3- in chronic respiratory acidosis:
  HCO3- = 24 + 4 × ((pCO2 - 40)/10)

Expected HCO3- in chronic respiratory alkalosis:
  HCO3- = 24 - 5 × ((40 - pCO2)/10)

Expected HCO3- in acute respiratory acidosis:
  HCO3- = 24 + 1 × ((pCO2 - 40)/10)

Expected HCO3- in acute respiratory alkalosis:
  HCO3- = 24 - 2 × ((40 - pCO2)/10)
\`\`\`

## Fluid Management in Special Populations

**Perioperative Fluid Management:**

\`\`\`
Enhanced Recovery After Surgery (ERAS) protocol:
  ├─ Preop: Carbohydrate loading, minimize fasting time
  ├─ Intraop: Goal-directed therapy, avoid both under- and over-resuscitation
  └─ Postop: Early oral intake, minimize IV fluids

Crystalloid vs Colloid:
  ├─ Crystalloids (NS, LR): First line, inexpensive, effective
  │  ├─ NS: Hyperchloremic acidosis with large volumes
  │  └─ LR: More physiologic, contraindicated in blood transfusion
  └─ Colloids (albumin, hetastarch): No clear outcome benefit
     └─ May have adverse effects (kidney injury with starches)

Third-spacing considerations:
  ├─ Burn patients: Parkland formula (4 mL × kg × %TBSA)
  ├─ Sepsis: Aggressive initial resuscitation (30 mL/kg)
  └─ Abdominal surgery: Conservative fluids improve outcomes
\`\`\`

**Neurocritical Care Fluid Management:**

\`\`\`
Goals:
  ├─ Euvolemia (avoid hypervolemia → cerebral edema)
  ├─ Osmolality >300 mOsm/kg for brain relaxation
  ├─ Sodium 140-150 mEq/L
  └─ Avoid hypotonic fluids (D5W contraindicated)

Hyponatremia in brain injury:
  ├─ Cerebral salt wasting (kidney loss)
  │  └─ Treatment: Volume + sodium replacement
  └─ SIADH (dilutional)
     └─ Treatment: Fluid restriction ± hypertonic saline

Hyperosmolar therapy:
  ├─ Hypertonic saline (3%, 23.4%): Rapid ICP reduction
  └─ Mannitol: Osmotic diuresis, monitor osmolar gap
\`\`\`

**Renal Replacement Therapy:**

\`\`\`
Indications for dialysis in electrolyte disorders:
  ├─ Refractory hyperkalemia (K+ >6.5 with ECG changes)
  ├─ Severe metabolic acidosis (pH <7.1)
  ├─ Volume overload with pulmonary edema
  ├─ Symptomatic uremia
  └─ Certain intoxications (Li, ethylene glycol)

CRRT vs IHD:
  ├─ CRRT (continuous): Hemodynamically unstable patients
  │  ├─ Slower solute removal
  │  ├─ Better hemodynamic tolerance
  │  └─ Continuous clearance
  └─ IHD (intermittent): Stable patients
     ├─ Faster solute removal
     ├─ Lower cost
     └─ Requires anticoagulation
\`\`\`

## Complex Electrolyte Scenarios

**Refining Hyponatremia Workup:**

\`\`\`
Step 1: Assess volume status (history, physical, labs)

Step 2: Check urine osmolality
  ├─ Uosm <100: Primary polydipsia or low solute intake
  └─ Uosm >100: ADH present (inappropriate or appropriate)

Step 3: Check urine sodium
  ├─ Low (<20 mEq/L): Hypovolemia or edematous states
  └─ High (>20 mEq/L): SIADH, salt-wasting nephropathy, diuretics

Step 4: Check for causes of SIADH
  ├─ CNS disorders (stroke, hemorrhage, trauma)
  ├─ Pulmonary (pneumonia, TB, positive pressure ventilation)
  ├─ Malignancy (small cell lung CA, lymphoma)
  ├─ Drugs (SSRIs, carbamazepine, opiates)
  └─ Endocrine (hypothyroidism, adrenal insufficiency)

Step 5: Assess response to treatment
\`\`\`

**Potassium Magnesium Relationship:**

\`\`\`
Hypomagnesemia causes:
  ├─ Renal K+ wasting (increased ROMK activity)
  ├─ Refractory hypokalemia (won't correct until Mg2+ replaced)
  └─ Arrhythmias resistant to K+ replacement

Mechanisms:
  ├─ Mg2+ blocks ROMK channels
  ├─ Mg2+ deficiency → K+ secretion
  └─ Intracellular K+ depletion with Mg2+ deficiency

Clinical implication:
  Always check and correct Mg2+ before treating refractory hypokalemia

Other electrolyte interactions:
  ├─ Calcium-magnesium: Reciprocal relationship
  ├─ Calcium-phosphate: Product >55 → risk of precipitation
  └─ Sodium-calcium: Hypernatremia increases ionized Ca2+
\`\`\`

## Challenging Clinical Situations

**DIabetes Insipidus:**

\`\`\`
Central DI:
  ├─ Cause: ADH deficiency (pituitary/hypothalamic damage)
  ├─ Urine: Large volume, dilute (Uosm <200, specific gravity <1.005)
  ├─ Desmopressin (DDAVP) challenge normalizes urine
  └─ Treatment: Desmopressin (nasal, oral, IV)

Nephrogenic DI:
  ├─ Cause: Kidney resistance to ADH
  │  ├─ Genetic (AVPR2 mutations - X-linked)
  │  ├─ Lithium, hypercalcemia, hypokalemia
  │  └─ Chronic kidney disease
  ├─ Desmopressin ineffective
  └─ Treatment:
     ├─ Thiazide diuretics (paradoxically reduces urine output)
     ├─ Low-sodium diet
     ├─ NSAIDs (reduce renal blood flow)
     └─ Amiloride (if lithium-induced)

Water deprivation test:
  ├─ Differentiates central vs nephrogenic DI
  ├─ Continue until:
  │  ├─ Urine osmolality increases (psychogenic polydipsia)
  │  ├─ Serum osmolality >300 (DI confirmed)
  │  └─ 5% weight loss (stop test)
  └─ Administer desmopressin
     ├─ Central DI: ↑Uosm >50%
     └─ Nephrogenic DI: No response
\`\`\`

**Fluid Management in Heart Failure:**

\`\`\`
Pathophysiology:
  ├─ Reduced cardiac output → RAAS activation
  ├─ RAAS → Na+/water retention → Volume overload
  ├─ Elevated ADH → Free water retention
  └─ Compensation becomes maladaptive

Treatment principles:
  ├─ Diuresis to euvolemia:
  │  ├─ Loop diuretics (furosemide, torsemide)
  │  ├─ Add thiazide for resistance ("sequential nephron blockade")
  │  └─ Monitor for electrolyte abnormalities
  ├─ RAAS inhibition:
  │  ├─ ACE inhibitors/ARBs
  │  ├─ Mineralocorticoid receptor antagonists (spironolactone, eplerenone)
  │  └─ SGLT2 inhibitors (osmotic diuresis)
  └─ Fluid restriction:
     ├─ Generally 1.5-2 L/day
     └─ Loosen restriction if diuretic-responsive

Ultrafiltration:
  ├─ Mechanical fluid removal via dialysis circuit
  ├─ Considered for diuretic-refractory HF
  ├─ No clear mortality benefit
  └─ Complications: Hypotension, bleeding, catheter complications
\`\`\``,
      keyTerms: [
        { term: 'anion gap', definition: 'Difference between serum sodium and sum of chloride and bicarbonate; reflects unmeasured anions' },
        { term: 'Winter formula', definition: 'Calculates expected pCO2 in metabolic acidosis to identify concomitant respiratory disorders' },
        { term: 'third-spacing', definition: 'Fluid accumulation in non-functional spaces (peritoneum, soft tissues) not in equilibrium with ECF' },
        { term: 'cerebral salt wasting', definition: 'Renal sodium loss secondary to cerebral injury causing hyponatremia and hypovolemia' },
        { term: 'desmopressin', definition: 'Synthetic ADH analog used to treat central diabetes insipidus and certain bleeding disorders' },
        { term: 'sequential nephron blockade', definition: 'Combination of loop and thiazide diuretics to overcome diuretic resistance' },
        { term: 'ROMK', definition: 'Renal outer medullary potassium channel; responsible for K+ secretion in collecting duct' },
      ],
      analogies: [
        'The anion gap is like a detective\'s clue - when it\'s elevated, it points to specific "suspects" (ketones, lactate, toxins).',
        'Mixed acid-base disorders are like having two problems at once - your body tries to compensate, but the math doesn\'t add up perfectly.',
        'The kidney in heart failure is like a factory that won\'t shut off - it keeps producing (retaining salt and water) even though the warehouse (blood vessels) is full.',
      ],
      examples: [
        'Diabetic ketoacidosis: High anion gap metabolic acidosis with Δgap:ΔHCO3 ~1:1',
        'Heart failure patient on spironolactone develops hyperkalemia despite normal kidney function',
        'Postoperative patient with both vomiting (metabolic alkalosis) and sepsis (lactic acidosis)',
        'Schizophrenic patient with psychogenic polydipsia and low urine osmolality',
      ],
      clinicalNotes: 'In suspected DKA, always check for concomitant disorders: Δgap should equal ΔHCO3-. If Δgap > ΔHCO3-, concomitant metabolic alkalosis (vomiting, diuretics). If Δgap < ΔHCO3-, concomitant non-anion gap acidosis (diarrhea, RTA). In hyponatremia, never correct faster than 8-10 mEq/L in chronic cases to avoid osmotic demyelination.',
    },
    5: {
      level: 5,
      summary: 'Expert-level fluid and electrolyte management integrates complex physiology, pharmacology, and emerging therapeutic approaches including vasopressin analogs, SGLT2 inhibitors, and novel approaches to hyponatremia, with specialized considerations for unique clinical scenarios.',
      explanation: `## Cutting-Edge Fluid Management

**Balanced Crystalloids vs Normal Saline:**

\`\`\`
Evidence base:
  ├─ SALT-ED (2018): Balanced crystalloids ↓major adverse kidney events
  ├─ SMART (2018): Balanced crystalloids ↓mortality in non-surgical patients
  └─ BASIL (ongoing): Trauma outcomes

Balanced solutions (LR, Plasma-Lyte):
  ├─ More physiologic electrolyte composition
  ├─ Less hyperchloremic acidosis
  ├─ Less kidney injury (likely from renal vasoconstriction)
  └─ No clear benefit in trauma or neurosurgery

NS indications (when chloride needed):
  ├─ Trauma with hemorrhagic shock (early, before massive transfusion)
  ├─ Hypochloremic metabolic alkalosis
  └─ Cerebral salt wasting

NS avoid/limit:
  ├─ Sepsis
  ├─ Most perioperative patients
  └─ Patients at risk for AKI
\`\`\`

**Vasopressin Beyond DI:**

\`\`\`
Vasopressin receptors:
  ├─ V1a: Vascular smooth muscle → vasoconstriction
  ├─ V1b: Pituitary ACTH release
  └─ V2: Renal collecting duct → water reabsorption

Septic shock:
  ├─ Mechanism: Relative vasopressin depletion
  ├─ Dose: 0.03 U/min (fixed, not titrated)
  ├─ Benefits:
  │  ├─ Norepinephrine-sparing effect
  │  ├─ Potential renal protection (V1a-mediated)
  │  └─ Less tachycardia than catecholamines
  └─ Considerations:
     ├─ Monitor for digital ischemia
     ├─ Contraindicated in cardiogenic shock
     └─ Hyponatremia risk (V2 effect)

Vasopressin in cardiac arrest:
  ├─ 40 U IV push (after epinephrine)
  ├─ Alternative: Epinephrine 1 mg (no clear superiority)
  └─ May be beneficial in asystole/PEA

Terlipressin (V1a agonist):
  ├─ Approved for hepatorenal syndrome (2022)
  ├─ Superior to albumin + norepinephrine
  └─ Respiratory failure adverse effect
\`\`\`

**Emerging Hyponatremia Therapies:**

\`\`\`
Vaptans (V2 receptor antagonists):
  ├─ Conivaptan: IV only, V1a+V2 antagonist
  │  ├─ Indication: Euvolemic/hypervolemic hyponatremia
  │  ├─ Rapid correction risk → overly effective
  │  └─ Drug interactions (CYP3A4)
  └─ Tolvaptan: Oral, selective V2 antagonist
     ├─ Indications: Euvolemic hyponatremia, ADPKD
     ├─ SIADH: Effective but limited by rapid correction
     ├─ ADPKD: Slows cyst growth, liver volume
     └─ Adverse: Thirst, polyuria, liver injury (monitor LFTs)

SGLT2 inhibitors for hyponatremia:
  ├─ Mechanism:
  │  ├─ Osmotic diuresis (glucosuria)
  │  ├─ ↑solute delivery to distal nephron → free water excretion
  │  └─ Proximal Na+ reabsorption inhibition → distal delivery
  ├─ Benefits in HF:
  │  ├─ Decongestion with less neurohormonal activation
  │  ├─ ↓worsening HF, cardiovascular death
  │  └─ Synergy with loop diuretics
  └─ Special populations:
     ├─ Diabetes: Standard of care
     ├─ HF with reduced EF: ESC Class I
     └─ Hyponatremic HF: May help correct Na+
\`\`\`

## Advanced Renal Replacement Concepts

**CRRT Anticoagulation Strategies:**

\`\`\`
Regional citrate anticoagulation (RCA):
  ├─ Citrate chelates ionized calcium (stops clotting in circuit)
  ├─ Calcium infused systemically (patient has normal Ca2+)
  ├─ Benefits:
  │  ├─ No systemic anticoagulation (less bleeding)
  │  ├─ Longer filter life
  │  └─ Less HIT
  └─ Risks:
     ├─ Citrate accumulation (liver failure)
     ├─ Metabolic alkalosis (citrate → bicarbonate)
     └─ Hypocalcemia, hypermagnesemia

Heparin:
  ├─ Systemic anticoagulation (bleeding risk)
  ├─ HIT risk
  └─ Lower cost

No anticoagulation:
  ├─ Saline flushes
  ├─ High blood flow rates
  └─ Shorter filter life (bleeding patients)
\`\`\`

**CRRT Prescription:**

\`\`\`
Dose:
  ├─ Standard: 20-25 mL/kg/h
  ├─ High-intensity: >30 mL/kg/h (no mortality benefit)
  └─ Adjust for:
     ├─ Filter downtime
     ├─ Predilution vs postdilution
     └─ Solute/convective clearance needs

Modality selection:
  ├─ CVVH: Convective (solutes removed by filtration)
  ├─ CVVHD: Diffusive (solutes removed by concentration gradient)
  ├─ CVVHDF: Combined convective + diffusive
  └─ Choice depends on solute size goals, membrane availability

Dialysate/Replacement fluid composition:
  ├─ Standard: Na 140, K 4, Ca 3, Mg 1.5, Cl 110, HCO3 35
  ├─ Customizable:
  │  ├─ Lower K+ for hyperkalemia
  │  ├─ Higher Na+ for hyponatremia
  │  └─ Lower HCO3- for metabolic alkalosis
  └─ Phosphate: Can add for severe hypophosphatemia
\`\`\`

## Specialized Clinical Scenarios

**Liver Disease and Electrolytes:**

\`\`\`
Cirrhotic cardiomyopathy:
  ├─ Reduced contractility (diastolic > systolic)
  ├─ Blunted response to volume
  ├─ Arrhythmia risk (prolonged QT)
  └─ Implications: Aggressive diuresis risk

Hepatorenal syndrome:
  ├─ Type 1: Rapid Cr rise >2.5 mg/dL in <2 weeks
  ├─ Type 2: Slower, more stable
  ├─ Pathophysiology:
  │  ├─ Splanchnic vasodilation → "effective" volume depletion
  │  ├─ RAAS + ADH activation
  │  └─ Renal vasoconstriction
  └─ Treatment:
     ├─ Albumin + vasoconstrictors (terlipressin, norepinephrine)
     ├─ Avoid volume overload
     └─ Consider early transplant

Refractory ascites:
  ├─ Large volume paracentesis (>5 L)
  ├─ Albumin 6-8 g/L removed (prevents circulatory dysfunction)
  ├─ TIPS:
  │  ├─ Reduces ascites effectively
  │  ├─ Risk: Hepatic encephalopathy, heart failure
  │  └─ Consider if diuretic-refractory
  └─ Peritoneovenous shunt (rare, high complications)

Electrolyte abnormalities in cirrhosis:
  ├─ Hypokalemia: Diuretics, hyperaldosteronism
  ├─ Hyponatremia: Dilutional (RAAS, ADH)
  │  ├─ Treat with fluid restriction, albumin
  │  └─ Avoid hypertonic saline (volume overload)
  ├─ Hypomagnesemia: Diuretics, poor intake
  └─ Alkalosis: Respiratory (hyperventilation) + metabolic (diuretics)
\`\`\`

**Electrolyte Disorders in Oncology:**

\`\`\`
Tumor lysis syndrome:
  ├─ Laboratory TLS: 2+ abnormalities within 24 hours
  │  ├─ Uric acid ≥8 mg/dL
  │  ├─ K+ ≥6 mEq/L
  │  ├─ Phosphate ≥4.5 mg/dL
  │  ├─ Calcium ≤7 mg/dL
  │  └─ Creatinine ≥1.5 × baseline
  ├─ Clinical TLS: TLS + complications (arrhythmia, seizures, renal failure)
  ├─ Prevention:
  │  ├─ Aggressive hydration (2-3 L/m²/day)
  │  ├─ Allopurinol (xanthine oxidase inhibitor)
  │  └─ Rasburicase (recombinant uricase) for high tumor burden
  └─ Treatment:
     ├─ Hyperkalemia: Standard + dialysis if severe
     ├─ Hyperphosphatemia: Phosphate binders
     ├─ Hypocalcemia: Only treat if symptomatic
     └─ Hyperuricemia: Rasburicase, allopurinol

SIADH in malignancy:
  ├─ Ectopic ADH production (small cell lung CA)
  ├─ Ectopic ADH-like substances
  └─ Treatment:
     ├─ Treat underlying malignancy
     ├─ Fluid restriction (800-1000 mL/day)
     ├─ Salt tablets
     └─ Consider vaptans if refractory

Paraneoplastic syndromes:
  ├─ ACTH production → Cushing (hypokalemia, metabolic alkalosis)
  ├─ PTHrP → hypercalcemia
  └─ Osteoblastic mets → hypocalcemia
\`\`\`

## Fluid Management in the Era of Precision Medicine

\`\`\`
Dynamic assessment tools:
  ├─ Stroke volume variation (mechanical ventilation, sinus rhythm)
  ├─ Passive leg raise (fluid responsiveness test)
  ├─ Carotid artery blood flow variation (POCUS)
  └─ Bioimpedance analysis (body composition, fluid status)

Biomarkers of volume status:
  ├─ Natriuretic peptides (BNP, NT-proBNP)
  │  ├─ Elevated in volume overload (HF, renal failure)
  │  └─ Lower with obesity, HFpEF interpretation challenges
  ├─ Cystatin C (AKI risk, GFR estimate)
  └─ Novel markers: Adrenomedullin, mid-regional pro-ANP

AI/ML applications:
  ├─ Predicting fluid responsiveness
  ├─ Early AKI detection
  ├─ Optimizing dialysis prescription
  └─ Personalizing fluid goals based on phenotype

Future directions:
  ├─ Wearable technology for continuous volume assessment
  ├─ Implantable hemodynamic monitors
  ├─ Gene-guided diuretic response
  └─ Organ-specific fluid targets
\`\`\``,
      keyTerms: [
        { term: 'balanced crystalloids', definition: 'IV fluids with electrolyte composition approximating plasma; associated with less renal injury than normal saline' },
        { term: 'vaptans', definition: 'Vasopressin receptor antagonists; promote aquaresis (electrolyte-sparing water excretion) for hyponatremia' },
        { term: 'regional citrate anticoagulation', definition: 'CRRT anticoagulation technique using citrate chelation of calcium within circuit only; minimizes systemic bleeding risk' },
        { term: 'hepatorenal syndrome', definition: 'Functional renal failure in advanced cirrhosis from renal vasoconstriction and reduced effective arterial volume' },
        { term: 'TIPS', definition: 'Transjugular intrahepatic portosystemic shunt; reduces portal pressure but risks encephalopathy and heart failure' },
        { term: 'tumor lysis syndrome', definition: 'Oncologic emergency from rapid cell death causing hyperuricemia, hyperK+, hyperPO4, hypocalcemia, AKI' },
        { term: 'rasburicase', definition: 'Recombinant uricase enzyme; rapidly converts uric acid to allantoin for TLS prophylaxis/treatment' },
      ],
      analogies: [
        'Balanced crystalloids are like speaking the body\'s language - the electrolyte composition is familiar, so the body responds naturally.',
        'Vaptans are like opening a floodgate specifically for water - they promote water loss without losing electrolytes (aquaresis).',
        'Regional citrate anticoagulation is like setting up roadblocks only where needed - the circuit doesn\'t clot, but the rest of the body can.',
      ],
      examples: [
        'SMART trial showed balanced crystalloids reduced mortality compared to NS in non-surgical patients',
        'Terlipressin approval (2022) for hepatorenal syndrome after positive CONFIRM trial',
        'SGLT2 inhibitors (empagliflozin, dapagliflozin) now standard of care in HFrEF with benefits extending to HFpEF',
        'CRRT with RCA preferred in most ICUs over heparin due to lower bleeding and longer filter life',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **Septic shock:** Add vasopressin 0.03 U/min early to reduce norepinephrine requirements; monitor for digital ischemia

2. **Hyponatremia:** Rapid correction (>10 mEq/L/day) risk osmotic demyelination; re-lower if overcorrected using D5W + desmopressin

3. **Fluid stewardship:** Like antibiotic stewardship - avoid "fluid creep" in ICU patients; daily fluid balance goal of negative by day 3

4. **CRRT:** Start early in refractory metabolic acidosis or severe electrolyte abnormalities; don't wait for complications

5. **Heart failure:** SGLT2 inhibitors now indicated regardless of diabetes status; start early in disease course

6. **Liver disease:** Albumin is both volume expander and pharmacologic agent (binds toxins, improves circulatory dysfunction)`,
    },
  },

  media: [
    {
      id: 'fluid-compartments',
      type: 'diagram',
      filename: 'fluid-compartments.svg',
      title: 'Body Fluid Compartments',
      description: 'ICF, ECF, interstitial, and intravascular compartments',
    },
    {
      id: 'electrolyte-distribution',
      type: 'diagram',
      filename: 'electrolyte-distribution.svg',
      title: 'Electrolyte Distribution',
      description: 'Sodium, potassium, and other electrolytes across compartments',
    },
    {
      id: 'adhn-action',
      type: 'diagram',
      filename: 'adhn-action.svg',
      title: 'ADH Action on Kidney',
      description: 'Mechanism of antidiuretic hormone on collecting duct',
    },
  ],

  citations: [
    {
      id: 'dietary-reference-intakes-water',
      type: 'article',
      title: 'Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate',
      authors: ['Institute of Medicine (US) Panel on Dietary Reference Intakes for Electrolytes and Water'],
      source: 'National Academies Press',
      url: 'https://www.nap.edu/catalog/10925.html',
    },
    {
      id: 'smart-trial',
      type: 'article',
      title: 'Balanced Crystalloids versus Saline in Critically Ill Adults',
      authors: ['RW Semler', 'TR Self', 'PD Wanderer', 'JM Ehrenfeld', 'LB Stoll', 'SP Shah', 'IG Bell', 'KC Candela', 'LA Sailors', 'KJ Ferguson', 'MT Mayol', 'MD Rice'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'ad libitum fluid intake',
      type: 'article',
      title: 'Ad Libitum Fluid Intake in Male Runners',
      authors: ['T Wall', 'S Akhuoi', 'H Snead', 'L Wen'],
      source: 'Journal of Athletic Training',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'sibling', label: 'Macronutrients' },
    { targetId: 'nutrition-micronutrients', targetType: 'topic', relationship: 'sibling', label: 'Micronutrients' },
    { targetId: 'renal-electrolytes', targetType: 'system', relationship: 'related', label: 'Renal Electrolyte Regulation' },
    { targetId: 'endocrine-adrenal', targetType: 'system', relationship: 'related', label: 'Adrenal Glands' },
  ],

  tags: {
    systems: ['renal', 'endocrine', 'gastrointestinal'],
    topics: ['nutrition', 'electrolytes', 'acid-base', 'critical-care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hydration;
