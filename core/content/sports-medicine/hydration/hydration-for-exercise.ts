/**
 * Hydration for Exercise - Comprehensive Educational Content
 *
 * Covers fluid balance, hydration strategies, and electrolyte management
 * for athletic performance.
 */

import { EducationalContent } from '../../types';

export const hydrationForExercise: EducationalContent = {
  id: 'sports-med-hydration-for-exercise',
  type: 'concept',
  name: 'Hydration for Exercise',
  alternateNames: ['Sports Hydration', 'Fluid Replacement in Athletes'],

  levels: {
    1: {
      level: 1,
      summary: 'Drinking enough water is super important when you exercise because your body loses water through sweat, and you need to replace it to feel good and perform your best.',
      explanation: `## Why Water Matters When You Exercise

When you play sports or exercise, your body gets hot. To cool down, you sweat! But sweating means losing water from your body.

### What Happens If You Don't Drink Enough?

- You might feel tired and weak
- You could get headaches
- It's harder to run fast or play well
- You might feel dizzy

### How to Stay Hydrated

**Before Exercise:**
- Drink water with breakfast and lunch
- Have a glass of water about 30 minutes before you start

**During Exercise:**
- Take water breaks every 15-20 minutes
- Don't wait until you're really thirsty!

**After Exercise:**
- Drink water to replace what you lost
- Your pee should be light yellow, not dark

### Water vs. Sports Drinks

**Water is best for:**
- Activities less than an hour
- Most practices and games
- Everyday drinking

**Sports drinks can help for:**
- Very long activities (over an hour)
- Very hot days with lots of sweating
- They have special salts and sugars

### Tips to Remember

1. Bring a water bottle everywhere
2. Take small sips often, not big gulps
3. Drink before you feel super thirsty
4. Check your pee color!`,
      keyTerms: [
        { term: 'hydration', definition: 'Making sure your body has enough water to work properly' },
        { term: 'sweat', definition: 'Water that comes out of your skin to cool you down when you\'re hot' },
        { term: 'dehydration', definition: 'When your body doesn\'t have enough water' },
      ],
      analogies: [
        'Your body is like a car radiator - it needs water to keep cool and running smoothly.',
        'Sweat is like your body\'s air conditioning system - it uses water to cool you down.',
      ],
      examples: [
        'If you play soccer for an hour on a hot day, you might lose 2-4 cups of water through sweat!',
        'Light yellow pee (like lemonade) means you\'re well hydrated. Dark yellow pee (like apple juice) means you need more water.',
      ],
    },
    2: {
      level: 2,
      summary: 'Proper hydration involves replacing fluids and electrolytes lost through sweat during exercise, with individual needs varying based on sweat rate, exercise intensity, and environmental conditions.',
      explanation: `## Understanding Exercise Hydration

### Why Hydration Matters
When you exercise:
- Core body temperature rises
- Sweating begins to cool you down
- Water AND electrolytes (especially sodium) are lost
- Blood volume can decrease if not replaced
- Performance suffers with as little as 2% body weight loss

### Sweat Rate Basics
**How much do you sweat?**
- Average: 0.5-2.0 liters per hour
- Varies by: Intensity, temperature, humidity, fitness level, body size
- Individual variation is huge - some people are "salty sweaters"

**Calculating your sweat rate:**
1. Weigh yourself before exercise (no clothes)
2. Exercise for 1 hour
3. Track any fluids consumed
4. Weigh yourself after (no clothes)
5. Weight lost + fluid consumed = sweat rate

### Hydration Guidelines

**Pre-Exercise (2-4 hours before):**
- Drink 5-7 mL/kg body weight
- Example: 70 kg person = 350-500 mL
- Allows time for urine output to normalize

**During Exercise:**
- Goal: Limit body weight loss to <2%
- Drink 150-350 mL every 15-20 minutes
- Adjust based on conditions and sweat rate

**Post-Exercise:**
- Replace 150% of weight lost
- Include sodium to help retention
- Example: Lost 1 kg = drink 1.5 L over next few hours

### Electrolytes

**Sodium:**
- Main electrolyte lost in sweat
- 200-1,500 mg per liter of sweat
- Important for >60 minute activities

**Other Electrolytes:**
- Potassium, chloride, magnesium
- Usually replaced adequately through diet

### Sports Drinks vs. Water

| Situation | Best Choice |
|-----------|-------------|
| <60 minutes | Water |
| >60 minutes | Sports drink or water + snacks |
| Hot/humid conditions | May benefit from sports drink |
| Heavy sweater | Consider sports drink |

### Signs of Dehydration
- Dark urine
- Thirst (late sign)
- Decreased performance
- Increased heart rate
- Headache, dizziness`,
      keyTerms: [
        { term: 'electrolytes', definition: 'Minerals in your body like sodium, potassium, and chloride that help regulate fluid balance and muscle function' },
        { term: 'sweat rate', definition: 'How much fluid you lose through sweating per hour of exercise' },
        { term: 'hyponatremia', definition: 'Dangerously low sodium levels in the blood, can occur from drinking too much water without electrolytes' },
      ],
      analogies: [
        'Electrolytes are like the salt in a car battery - you need the right balance for everything to work properly.',
        'Your sweat rate is like your car\'s gas mileage - personal and depends on conditions.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise hydration science encompasses sweat rate variability, electrolyte losses, thermoregulation physiology, and evidence-based fluid replacement strategies tailored to individual needs, exercise modality, and environmental conditions.',
      explanation: `## Physiology of Exercise Hydration

### Thermoregulation During Exercise
**Heat Production:**
- Metabolic heat production: ~70-100 W at rest
- Increases 15-20x during vigorous exercise
- Only 20-25% efficiency - rest is heat

**Heat Dissipation Mechanisms:**
1. Radiation: ~60% at rest, less during exercise
2. Convection: Depends on air movement
3. Evaporation: Primary mechanism during exercise
4. Conduction: Minimal contribution

**Sweating Physiology:**
- Eccrine sweat glands: 2-4 million on body
- Activated by: Core temp rise, catecholamines
- Maximum sweat rate: 2-3 L/hour
- Sweat is hypotonic relative to plasma

### Sweat Electrolyte Content
| Electrolyte | Sweat Concentration | Plasma Concentration |
|-------------|--------------------|--------------------|
| Sodium | 20-80 mmol/L | 140 mmol/L |
| Chloride | 20-60 mmol/L | 100 mmol/L |
| Potassium | 4-8 mmol/L | 4 mmol/L |
| Magnesium | 0.05-0.4 mmol/L | 0.8 mmol/L |

**Factors Affecting Sweat Sodium:**
- Heat acclimatization (decreases Na+ loss)
- Fitness level (trained = lower Na+)
- Dietary sodium intake
- Genetics (CFTR gene variations)

### Fluid Balance and Performance

**Hypohydration Effects:**
- 1% body mass loss: Minimal effects
- 2% loss: Noticeable performance decrement
- 3-4% loss: Significant endurance impairment
- 5%+ loss: Serious health/performance risks

**Physiological Consequences:**
- Reduced plasma volume
- Increased heart rate (cardiovascular drift)
- Decreased stroke volume
- Impaired thermoregulation
- Increased core temperature
- Earlier onset of fatigue

### Fluid Replacement Science

**Gastric Emptying:**
- Optimal: 600-1200 mL/hour
- Enhanced by: Moderate temperature (15-21°C), carbohydrates (2-6%)
- Impaired by: High intensity, heat, hypertonic solutions

**Intestinal Absorption:**
- SGLT1 cotransporter: Glucose enhances sodium and water absorption
- Optimal solution: Slightly hypotonic to plasma

### Hydration Assessment Methods

**Acute Markers:**
| Method | Pros | Cons |
|--------|------|------|
| Body mass change | Gold standard for acute | Requires pre-exercise baseline |
| Urine color | Simple, cheap | Affected by diet, supplements |
| Urine specific gravity | Objective | Delayed response |
| Plasma osmolality | Accurate | Invasive, expensive |

**Chronic Hydration Status:**
- First morning urine specific gravity
- Serial body mass monitoring
- No single perfect marker

### Practical Fluid Guidelines

**Pre-Exercise:**
- 5-10 mL/kg in 2-4 hours before
- Goal: Euhydrated at start
- Urine should be pale yellow

**During Exercise:**
- Develop personalized hydration plan based on:
  - Individual sweat rate
  - Exercise duration and intensity
  - Environmental conditions
  - Practical opportunities to drink

**Post-Exercise:**
- 1.25-1.5 L per kg body mass lost
- Include sodium (salt in food or drink)
- Distribute intake over several hours

### Special Considerations

**Sodium Needs:**
- Light sweater (<0.5 L/hr): 300-600 mg/L in replacement fluid
- Heavy sweater (>1.5 L/hr): 600-1,200 mg/L
- "Salty sweater" (visible salt residue): Higher end of range

**Hyponatremia Prevention:**
- Don't overdrink (avoid weight gain during exercise)
- Include sodium for prolonged exercise
- At-risk: Slow pace, long duration, small body size`,
      keyTerms: [
        { term: 'eccrine sweat glands', definition: 'Primary thermoregulatory sweat glands distributed across the body, producing hypotonic sweat' },
        { term: 'cardiovascular drift', definition: 'Progressive increase in heart rate and decrease in stroke volume during prolonged exercise, exacerbated by dehydration' },
        { term: 'euhydration', definition: 'State of normal body water content; optimal hydration status' },
        { term: 'osmolality', definition: 'Measure of solute concentration in a fluid; plasma osmolality reflects hydration status' },
        { term: 'heat acclimatization', definition: 'Physiological adaptations to repeated heat exposure, including increased sweat rate and reduced sweat sodium concentration' },
      ],
      clinicalNotes: 'Hyponatremia risk is highest in prolonged endurance events (>4 hours), particularly in slower participants with high fluid intake. Education should focus on drinking to thirst rather than forcing fluids. Monitor for symptoms: confusion, nausea, headache, seizures.',
    },
    4: {
      level: 4,
      summary: 'Advanced hydration science integrates fluid regulatory mechanisms, sweat gland physiology, thermal strain assessment, and precision hydration technologies to develop individualized protocols accounting for metabolic heat production, environmental factors, and inter-individual variability.',
      explanation: `## Fluid Regulatory Physiology

### Body Water Compartments
**Distribution:**
- Total body water: 50-70% body mass
- Intracellular fluid (ICF): ~65% of TBW
- Extracellular fluid (ECF): ~35% of TBW
  - Interstitial: ~75% of ECF
  - Plasma: ~25% of ECF

**Osmotic Balance:**
- ICF and ECF osmolality maintained ~285-295 mOsm/kg
- Water moves freely across cell membranes
- Sodium primary ECF osmole; potassium primary ICF osmole

### Thirst and ADH Regulation
**Thirst Mechanisms:**
- Osmoreceptors in hypothalamus (1-2% increase triggers thirst)
- Baroreceptors (volume-related, less sensitive)
- Angiotensin II signaling
- Dry mouth contribution

**Antidiuretic Hormone (ADH/Vasopressin):**
- Released from posterior pituitary
- Stimuli: Increased osmolality, decreased blood volume
- Action: Aquaporin-2 insertion in collecting duct
- Results in water retention

**Exercise Impact on Fluid Regulation:**
- ADH increases with exercise intensity/duration
- Thirst often lags behind fluid needs
- Post-exercise ADH remains elevated
- Aldosterone increases for sodium retention

### Sweat Gland Physiology
**Eccrine Gland Structure:**
- Secretory coil: Deep in dermis
- Duct: Reabsorbs sodium/chloride
- Secretory capacity: 0.02-0.04 mL/min per gland

**Primary Secretion:**
- Isotonic with plasma
- Cholinergic stimulation (acetylcholine)
- Sympathetic nervous system (non-adrenergic)

**Ductal Reabsorption:**
- Na+/K+-ATPase and ENaC
- CFTR chloride channel
- Greater reabsorption at lower flow rates
- Heat acclimatization enhances reabsorption

### Heat Acclimatization
**Timeline of Adaptations:**
| Adaptation | Time Course |
|-----------|-------------|
| Plasma volume expansion | 3-6 days |
| Increased sweat rate | 5-10 days |
| Reduced sweat sodium | 5-10 days |
| Improved cardiovascular stability | 7-14 days |
| Lowered core temp threshold for sweating | 7-14 days |

**Practical Protocol:**
- 60-90 min heat exposure daily
- Exercise at 50% VO2max minimum
- 10-14 days for substantial adaptation
- Decay begins within 2-3 days without exposure

### Thermal Strain Assessment

**Core Temperature Measurement:**
- Rectal: Gold standard, invasive
- Esophageal: Responds quickly
- Gastrointestinal pill: Telemetric, practical for field
- Aural (tympanic): Less accurate during exercise
- Acceptable range during exercise: 38-40°C

**WBGT (Wet Bulb Globe Temperature):**
- Combines temperature, humidity, radiant heat
- WBGT = 0.7(Wet bulb) + 0.2(Globe) + 0.1(Dry bulb)
- Used for activity modification guidelines

### Advanced Hydration Strategies

**Hyperhydration:**
- Pre-exercise fluid loading
- Glycerol: 1.2 g/kg + 26 mL/kg fluid
  - Increases TBW by 300-700 mL
  - No longer WADA prohibited (removed 2018)
- Sodium loading: High sodium meal/drink before exercise

**Precision Sweat Analysis:**
- Wearable sweat patches (sodium, chloride)
- Real-time sweat rate monitoring
- Individual electrolyte profiling
- Personalized replacement strategies

**Intravenous Rehydration:**
- Used in emergency/clinical settings
- Faster plasma volume restoration
- Does not improve performance vs. oral (when feasible)
- Sport regulations may restrict use

### Body Mass Monitoring Protocols
**Daily Morning Mass:**
- Upon waking, post-void, before eating/drinking
- <1% day-to-day variation indicates stable hydration
- >1% loss: Possible accumulated deficit
- Track trends over time

**Training Session Monitoring:**
- Pre/post mass with fluid intake tracking
- Calculate sweat rate for various conditions
- Develop sport-specific hydration plans

### Mathematical Modeling
**Heat Balance Equation:**
S = M - W ± R ± C - E

Where:
- S = Heat storage (want to minimize)
- M = Metabolic heat production
- W = External work
- R = Radiant heat exchange
- C = Convective heat exchange
- E = Evaporative heat loss (primary for exercise)

**Predicting Fluid Needs:**
- Sweat rate prediction models account for:
  - Exercise intensity (VO2)
  - Environmental conditions (WBGT)
  - Clothing/equipment
  - Body size and composition`,
      keyTerms: [
        { term: 'aquaporins', definition: 'Membrane water channels; AQP2 in kidney collecting duct regulated by ADH for water reabsorption' },
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature; composite index of environmental heat stress incorporating temperature, humidity, and radiant heat' },
        { term: 'hyperhydration', definition: 'Deliberate expansion of body water above normal levels before exercise, sometimes using glycerol or sodium' },
        { term: 'CFTR', definition: 'Cystic fibrosis transmembrane conductance regulator; chloride channel in sweat duct affecting sweat sodium concentration' },
        { term: 'heat balance equation', definition: 'Mathematical representation of thermal equilibrium; S = M - W ± R ± C - E, guiding heat stress management' },
      ],
      clinicalNotes: 'Core temperature >40°C (104°F) with CNS dysfunction indicates exertional heat stroke - medical emergency requiring immediate cooling. Intravenous fluid resuscitation may be necessary for severe dehydration or heat illness but should not delay cooling. Athletes with sickle cell trait have increased exertional sickling risk with dehydration and heat.',
    },
    5: {
      level: 5,
      summary: 'Elite hydration science integrates genomic influences on thermoregulation and sweat composition, advanced wearable technologies, predictive modeling, and personalized hydration algorithms to optimize performance while preventing thermal illness and hyponatremia in challenging environments.',
      explanation: `## Genomics of Thermoregulation and Sweating

### Sweat Composition Genetics
**CFTR Gene Variants:**
- Carriers of CF mutations: Higher sweat chloride
- May influence sodium loss during exercise
- Ethnic variation in sweat electrolyte genetics

**SCNN1A/B/G (ENaC Subunits):**
- Sodium channel in sweat duct
- Polymorphisms affect reabsorption efficiency
- Potential for "salty sweater" phenotype

### Heat Tolerance Genetics
**HSP70 Polymorphisms:**
- Heat shock protein variants
- Influence cellular heat stress response
- May affect heat illness susceptibility

**ACE I/D Polymorphism:**
- Cardiovascular and thermoregulatory implications
- May influence heat acclimatization rate

### Malignant Hyperthermia Susceptibility
- RYR1 gene mutations
- Abnormal calcium release in muscle
- Triggered by heat + exertion (rare)
- Important for anesthesia but also extreme exertion

## Advanced Monitoring Technologies

### Wearable Sweat Sensors
**Current Capabilities:**
- Real-time sweat rate measurement
- Sodium concentration monitoring
- Lactate, glucose in development
- Microfluidic patch technology

**Validation Status:**
- Some commercial products available
- Accuracy varies by manufacturer
- Research-grade devices more reliable
- Field validation ongoing

### Ingestible Core Temperature Sensors
**Technology:**
- Telemetric pill transmits temperature data
- External receiver worn on athlete
- Real-time core temperature monitoring

**Practical Considerations:**
- Ingest 6-8 hours before activity
- Affected by fluid ingestion (transient drops)
- Limited battery life (~72 hours)
- Cost considerations for widespread use

### Machine Learning Applications
**Predictive Models:**
- Individual sweat rate prediction
- Real-time thermal strain forecasting
- Integration of physiological and environmental data
- Alert systems for high-risk conditions

**Data Integration:**
- Wearable physiological sensors
- Environmental monitoring
- Training load data
- Historical athlete data

## Extreme Environment Hydration

### Altitude
**Physiological Changes:**
- Increased respiratory water loss
- Diuresis with acute altitude exposure
- Impaired thirst sensation
- Fluid requirements increase 0.5-1 L/day

**Strategies:**
- Conscious increase in fluid intake
- Monitor urine color more frequently
- Acclimatization includes fluid balance normalization

### Cold Environment
**Challenges:**
- Reduced thirst drive
- Cold-induced diuresis
- Sweat losses underestimated (vaporization)
- Difficulty drinking (frozen bottles)

**Strategies:**
- Scheduled drinking reminders
- Insulated hydration systems
- Warm fluids when possible
- Monitor urine output

### Hot Environment
**Extreme Heat (>35°C):**
- Evaporative cooling may be compromised (high humidity)
- Sweat rates >3 L/hr possible
- GI absorption becomes limiting
- Pre-cooling strategies valuable

**Desert/Dry Heat:**
- Very high evaporative losses
- May not perceive sweat (rapid evaporation)
- Electrolyte losses substantial
- Acclimatization critical

### Underwater/Diving
- Immersion diuresis
- Breathing dry compressed gas increases losses
- Limited access to fluids
- Pre-dive hydration important

## Hyponatremia: Advanced Management

### Pathophysiology
**Dilutional Mechanism:**
- Excessive fluid intake exceeding losses
- ADH inappropriately elevated during exercise
- Sodium losses compounding dilution
- Cellular swelling, particularly brain

**Risk Factors (Quantified):**
- Body mass gain during event: Strongest predictor
- Event duration >4 hours
- BMI <21.5
- Slow pace (more time, more drinking opportunities)
- Female sex
- NSAID use

### Classification
| Severity | Sodium (mmol/L) | Symptoms |
|----------|----------------|----------|
| Mild | 130-134 | Often asymptomatic |
| Moderate | 125-129 | Nausea, headache, confusion |
| Severe | <125 | Seizures, coma, death risk |

### Field Management
**Mild-Moderate:**
- Stop fluid intake
- Oral hypertonic solution (salty broth, bouillon)
- Close monitoring

**Severe (encephalopathy):**
- Medical emergency
- IV 3% hypertonic saline: 100 mL bolus
- Repeat every 10 min if needed (max 3)
- Goal: Raise Na+ 4-6 mmol/L
- Avoid overcorrection (osmotic demyelination risk)

### Prevention Guidelines
**Education Focus:**
- Drink to thirst, not by schedule
- Avoid weight gain during event
- Know individual sweat/sodium losses
- Use sodium in beverages for long events

## Precision Hydration Protocols

### Individual Assessment Battery
1. **Sweat testing** (multiple conditions)
   - Laboratory environmental chamber
   - Field testing various intensities
   - Patch analysis for electrolytes

2. **Thermal response profiling**
   - Core temperature kinetics
   - Heat tolerance testing

3. **Fluid tolerance assessment**
   - GI tolerance at various intake rates
   - Optimal beverage characteristics

### Competition-Specific Planning
**Pre-Event:**
- Environmental forecast analysis
- Course aid station mapping
- Individualized bottle/nutrition setup
- Backup contingencies

**During Event:**
- Scheduled intake based on testing
- Adjustment for conditions
- Real-time monitoring if available
- Flexible decision-making framework

**Post-Event:**
- Rapid assessment of deficits
- Structured replacement protocol
- Recovery optimization

### Team Sport Applications
**Challenges:**
- Limited drinking opportunities
- Variable playing time
- Position-specific demands
- Substitution strategies

**Solutions:**
- Pre-exercise optimization critical
- Half-time/break protocols
- Individual player sweat profiles
- Bench hydration availability

## Research Frontiers

### Novel Cooling Strategies
- Phase-change materials in clothing
- Ice slurry ingestion (internal cooling)
- Menthol for perceptual cooling
- Cryotherapy for pre-cooling

### Biomarker Development
- Salivary markers of hydration
- Tear osmolality assessment
- Non-invasive continuous monitoring
- AI-integrated warning systems

### Genomic Medicine
- Personalized heat tolerance assessment
- Genetic risk stratification
- Targeted training interventions
- Pharmacogenomics of heat adaptation`,
      keyTerms: [
        { term: 'exercise-associated hyponatremia (EAH)', definition: 'Serum sodium <135 mmol/L occurring during or within 24 hours of prolonged physical activity; potentially life-threatening' },
        { term: 'osmotic demyelination syndrome', definition: 'Neurological condition from overly rapid sodium correction; reason for careful management of severe hyponatremia' },
        { term: 'phase-change materials', definition: 'Substances that absorb/release heat during phase transitions; used in cooling garments for athletic and occupational heat management' },
        { term: 'cold-induced diuresis', definition: 'Increased urine production in cold environments due to peripheral vasoconstriction and suppressed ADH' },
        { term: 'RYR1', definition: 'Ryanodine receptor 1 gene; mutations associated with malignant hyperthermia and potentially exercise-induced heat illness' },
      ],
      clinicalNotes: `Critical clinical points:
1. EAH treatment: For symptomatic hyponatremia, do NOT give IV 0.9% saline initially - it may worsen dilution. Use 3% hypertonic saline.
2. Hypertonic saline 100mL boluses are safe and effective for severe EAH with neurological symptoms
3. Prevention is paramount: "Drink to thirst" has become consensus recommendation for endurance events
4. Exertional heat stroke requires aggressive cooling BEFORE transport - do not delay cooling for transport
5. Athletes with sickle cell trait require additional heat/hydration precautions
6. Wearable technology for monitoring is advancing but not yet standard of care - use as adjunct to clinical judgment`,
    },
  },

  media: [
    {
      id: 'hydration-status-assessment',
      type: 'diagram',
      filename: 'hydration-assessment-methods.svg',
      title: 'Hydration Assessment Methods',
      description: 'Visual guide to assessing hydration status using various markers',
    },
  ],

  citations: [
    {
      id: 'acsm-fluid-replacement',
      type: 'article',
      title: 'ACSM Position Stand: Exercise and Fluid Replacement',
      source: 'Medicine & Science in Sports & Exercise',
    },
    {
      id: 'eah-consensus',
      type: 'article',
      title: 'Consensus Statement on Exercise-Associated Hyponatremia',
      source: 'Clinical Journal of Sport Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-heat-illness', targetType: 'concept', relationship: 'related', label: 'Heat Illness' },
    { targetId: 'sports-med-exercise-in-extremes', targetType: 'concept', relationship: 'related', label: 'Exercise in Extreme Environments' },
    { targetId: 'sports-med-sports-nutrition-basics', targetType: 'concept', relationship: 'related', label: 'Sports Nutrition Basics' },
  ],

  tags: {
    systems: ['cardiovascular', 'renal', 'integumentary'],
    topics: ['sports-medicine', 'hydration', 'thermoregulation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hydrationForExercise;
