/**
 * Heat Illness in Sports - Educational Content
 *
 * Covers prevention, recognition, and management of
 * heat-related conditions in athletics.
 */

import { EducationalContent } from '../../types';

export const heatIllnessContent: EducationalContent = {
  id: 'sports-med-heat-illness',
  type: 'condition',
  name: 'Heat Illness in Sports',
  alternateNames: ['Heat Injury', 'Heat Exhaustion', 'Heat Stroke'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat illness happens when your body cannot properly cool itself during physical activity in hot conditions.',
      explanation: `## What is Heat Illness?

Heat illness occurs when your body cannot properly cool itself during physical activity. This happens when:
- Heat production exceeds heat loss
- Your body temperature rises to dangerous levels
- Sweating mechanism becomes overwhelmed
- Dehydration develops

## Types of Heat Illness (Mild to Severe)

**Heat Cramps:**
- Painful muscle spasms during or after exercise
- Usually in legs, arms, or abdomen
- Caused by dehydration and electrolyte loss

**Heat Exhaustion:**
- Body's response to excessive water/salt loss
- Feeling very tired, weak, dizzy
- Heavy sweating, pale skin
- Nausea or possible vomiting

**Heat Stroke (Medical Emergency):**
- Body temperature reaches dangerous levels (104°F+)
- Hot, dry skin (sweating stops)
- Confusion, loss of consciousness
- Can lead to organ damage or death

## Prevention

1. Hydrate before, during, and after activity
2. Take frequent water breaks
3. Wear light-colored, breathable clothing
4. Exercise during cooler times of day
5. Gradually get used to hot weather (acclimatization)
6. Monitor urine color (pale yellow is good)

## When to Seek Help

- Symptoms of heat exhaustion
- No improvement with rest and fluids
- Any signs of heat stroke
- Confusion or loss of consciousness
- Call 911 for heat stroke immediately`,
      keyTerms: [
        { term: 'heat stroke', definition: 'Dangerous rise in body temperature with potential organ damage' },
        { term: 'acclimatization', definition: 'Gradual adaptation to hot environmental conditions' },
        { term: 'dehydration', definition: 'Excessive loss of body water' },
      ],
      analogies: [
        'Your body is like a car engine - it can overheat if it runs too hard without cooling.',
      ],
      examples: [
        'A football player collapses during practice on a hot day.',
        'A runner develops severe muscle cramps during a marathon.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heat illness exists on a spectrum from mild cramps to life-threatening heat stroke, with recognition, proper hydration, acclimatization, and environmental monitoring essential for prevention.',
      explanation: `## Spectrum of Heat Illness

**Heat Cramps:**
- Painful involuntary muscle contractions
- Occur during or after intense exercise
- Large muscle groups typically affected
- Associated with sodium loss

**Heat Syncope (Fainting):**
- Orthostatic dizziness or fainting
- Blood pooling in dilated vessels
- Usually in unacclimatized individuals
- Resolves with supine position and cooling

**Heat Exhaustion:**
- Inability to continue exercise in heat
- Core temperature usually 100-104°F
- Significant cardiovascular strain
- Requires active cooling and hydration

**Heat Stroke:**
- Life-threatening emergency
- Core temperature >104°F (40°C)
- CNS dysfunction present
- Thermoregulation failure
- Immediate cooling required

## On-Site Assessment

**Vital Signs:**
- Rectal temperature (most accurate core reading)
- Heart rate (elevated relative to exertion)
- Blood pressure (may be low)

**Mental Status Assessment:**
- Confusion or disorientation
- Inappropriate behavior
- Loss of consciousness

## Heat Index Considerations

**Risk Assessment:**
- Temperature + humidity effects
- >80°F: Increased risk
- >90°F: High risk
- >100°F: Extreme risk

**Wet Bulb Globe Temperature (WBGT):**
- More comprehensive than heat index
- Considers temperature, humidity, wind, sun
- <82°F: Normal activity
- 82-87°F: Use caution
- >90°F: High risk, consider canceling`,
      keyTerms: [
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature; comprehensive measure of environmental heat stress' },
        { term: 'core temperature', definition: 'Internal body temperature; most accurately measured rectally' },
        { term: 'heat syncope', definition: 'Fainting from heat; blood pools in dilated blood vessels' },
      ],
      analogies: [
        'WBGT is like a "feels like" temperature that also accounts for the sun and wind.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heat illness requires immediate recognition with core temperature measurement, aggressive cooling for heat stroke using cold water immersion, and structured return-to-play decisions based on severity and individual risk factors.',
      explanation: `## Distinguishing Features

**Classic (Passive) Heat Stroke:**
- Sedentary individuals
- Extreme environmental heat exposure
- Elderly, very young, chronically ill
- Develops over days
- Often lack sweating initially

**Exertional Heat Stroke:**
- During intense exercise
- Healthy athletes often affected
- Develops rapidly (hours)
- May continue sweating initially
- Higher mortality without treatment

## Heat Stroke: Medical Emergency

**Immediate Cooling (Most Important):**
- Cold water immersion (most effective)
- Ice towels over body
- Spray with water and fan
- Ice packs to neck, armpits, groin
- Remove from heat immediately

**Cooling Goals:**
- Cool to <102°F as rapidly as possible
- Optimal method: cold water immersion (0.2°F/min)
- Continue cooling during transport
- Avoid overcooling (<100°F)

## Return to Play Guidelines

**After Heat Exhaustion:**
- Complete recovery expected
- 24-48 hours rest
- Gradual return to activity

**After Heat Stroke:**
- Medical clearance required
- Comprehensive evaluation
- Minimum 1-2 weeks before return
- Consider heat tolerance testing

## Prevention Strategies

**Acclimatization Protocol (14-day recommended):**
- Days 1-5: Single practice, <3 hours
- Days 6-13: Double practice days with guidelines
- Days 14+: Full participation
- Gradually increase intensity/duration

**Hydration Strategies:**
- Pre-hydration: 16-20 oz 2-3 hours before
- During exercise: 6-12 oz every 15-20 minutes
- Post-exercise: Replace weight lost during exercise
- Include electrolytes for prolonged activity`,
      keyTerms: [
        { term: 'cold water immersion', definition: 'Most effective method for rapidly lowering body temperature' },
        { term: 'acclimatization', definition: 'Physiological adaptation to heat over 7-14 days' },
        { term: 'work:rest ratio', definition: 'Ratio of activity time to rest time; adjusted based on environmental conditions' },
      ],
      clinicalNotes: 'Cold water immersion is the most effective cooling method for heat stroke. Cool first, transport second - hospitals cannot provide faster cooling. Acclimatization and proper hydration prevent most heat illnesses.',
    },
    4: {
      level: 4,
      summary: 'Thermoregulation relies on heat production-dissipation balance through cardiovascular adaptations, sweat gland function, and hormonal changes that occur during heat acclimatization, with heat stroke representing failure of these mechanisms.',
      explanation: `## Normal Thermoregulation

**Heat Production:**
- Basal metabolic rate
- Muscle activity during exercise
- Can increase 15-20x above resting
- Direct heat absorption from environment

**Heat Dissipation:**
- Radiation (primary at rest)
- Convection
- Conduction
- Evaporation (primary during exercise)

**Physiological Responses:**
- Cutaneous vasodilation (skin blood flow increases)
- Sweating (evaporative cooling)
- Increased cardiac output
- Redistribution of blood flow

## Heat Adaptations (Acclimatization)

**Cardiovascular Adaptations (Days 1-4):**
- Lower heart rate at given workload
- Increased plasma volume
- Improved stroke volume
- Earlier onset of sweating

**Sweat Gland Adaptations (Days 5-14):**
- Increased sweat rate
- Earlier onset of sweating
- More distributed sweating
- Decreased electrolyte loss in sweat

**Hormonal Adaptations:**
- Aldosterone (sodium conservation)
- Antidiuretic hormone (water conservation)

## Risk Factor Assessment

**Predisposing Conditions:**
- Previous heat illness
- Poor physical fitness
- Obesity
- Sleep deprivation
- Recent illness
- Medications (stimulants, diuretics)

**Dehydration Assessment:**
- Body weight changes (>2% = significant)
- Urine specific gravity (>1.020 = dehydration)
- Urine color (dark = dehydrated)

## Organ-Specific Complications

**Central Nervous System:**
- Cerebral edema
- Seizures
- Confusion, delirium, coma

**Renal:**
- Acute kidney injury
- Rhabdomyolysis (muscle breakdown)
- Myoglobinuria

**Cardiovascular:**
- Arrhythmias
- Hypotension or shock
- Coagulopathy`,
      keyTerms: [
        { term: 'cutaneous vasodilation', definition: 'Widening of blood vessels near skin surface to increase heat loss' },
        { term: 'rhabdomyolysis', definition: 'Breakdown of muscle tissue releasing proteins that can damage kidneys' },
        { term: 'myoglobinuria', definition: 'Presence of myoglobin in urine from muscle breakdown' },
      ],
      clinicalNotes: 'Heat stroke involves thermoregulatory failure and multi-organ involvement. Dehydration assessment using urine specific gravity is practical. Serum sodium monitoring important during prolonged exercise.',
    },
    5: {
      level: 5,
      summary: 'Contemporary heat illness management emphasizes cold water immersion as first-line treatment, cool-first-transport-second paradigm, special population considerations, and prevention through workload monitoring and acclimatization protocols.',
      explanation: `## Exertional Heat Stroke Management

**Cold Water Immersion Evidence:**
- Most effective cooling method
- Cooling rate ~0.2-0.4°F/minute
- Recommended until core temp <102°F
- Superior to evaporative methods
- Should be first-line treatment

**Cooling Modalities Comparison:**
- Cold water immersion: 0.35°F/min
- Ice-water towels: 0.12°F/min
- Fanning with misting: 0.09°F/min

**Transport Decisions:**
- Cool first, transport second (paradigm shift)
- Complete on-site cooling before transport
- Hospital cannot provide faster cooling

## Special Populations

**Athletes with Sickle Cell Trait:**
- Increased risk with exertional rhabdomyolysis
- Can trigger sickling crisis
- Heat illness risk elevated
- Requires special precautions

**Youth Athletes:**
- Higher heat production per body mass
- Less efficient sweating
- Slower acclimatization
- Require more supervision

**Masters Athletes:**
- Decreased thermoregulatory efficiency
- Medication effects
- Comorbidities
- Slower acclimatization

## Exercise-Associated Hyponatremia

**Pathophysiology:**
- Sodium <135 mmol/L
- From excessive hypotonic fluid intake
- Can be life-threatening
- Cerebral edema

**Prevention:**
- Drink to thirst during exercise
- Include sodium in fluids for >4 hours
- Avoid weight gain during exercise

## Future Directions

- Genetic markers for heat intolerance risk
- Wearable technology for core temperature monitoring
- Individualized hydration algorithms`,
      keyTerms: [
        { term: 'EHS', definition: 'Exertional Heat Stroke; dangerous temperature elevation during exercise' },
        { term: 'hyponatremia', definition: 'Low blood sodium from excessive fluid intake' },
        { term: 'thermogenic', definition: 'Producing heat; often refers to supplements that increase metabolism' },
      ],
      clinicalNotes: 'Cool on site before transport unless resources inadequate. Special populations require individualized approaches. Hyponatremia is important differential in collapsed athletes.',
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
  ],

  citations: [
    {
      id: 'heat-illness-guidelines',
      type: 'article',
      title: 'Heat Illness in Sports',
      source: 'American College of Sports Medicine',
    },
    {
      id: 'exertional-heat-stroke',
      type: 'article',
      title: 'Exertional Heat Stroke Management',
      source: 'Journal of Athletic Training',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-environmental-conditions', targetType: 'topic', relationship: 'related', label: 'Environmental Conditions' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['multiple'],
    topics: ['heat-illness', 'thermoregulation', 'sports-medicine', 'environmental'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'sports-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heatIllnessContent;
