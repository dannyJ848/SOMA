/**
 * Avalanche Injury - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const avalancheInjury: EducationalContent = {
  id: 'wilderness-avalanche-injury',
  type: 'condition',
  name: 'Avalanche Injury',
  alternateNames: ['Avalanche Burial', 'Snow Avalanche Trauma'],

  levels: {
    1: {
      level: 1,
      summary: 'Avalanches can bury people in snow, causing suffocation or injury. Speed of rescue is critical - most survivors are found within 15 minutes. If caught, try to create an air pocket near your face.',
      explanation: `## Avalanche Safety

Avalanches are fast-moving slides of snow that can bury people.

## If You Are Caught
- Try to move to the side of the avalanche
- Grab onto something solid if possible
- As you slow down, create space around your face for air
- Try to push a hand toward the surface

## Why Time Matters
- After 15 minutes, survival drops quickly
- Snow hardens fast, making self-rescue very hard
- Air pocket is essential for breathing

## Rescue Basics
- Call for help immediately
- Look for clues (ski, pole, clothing)
- Use beacon/probe if trained
- Dig fast once located
- Start CPR if not breathing

## Prevention
- Learn avalanche safety before backcountry travel
- Carry beacon, shovel, probe
- Never travel alone in avalanche terrain
- Check avalanche forecasts`,
      keyTerms: [
        { term: 'avalanche', definition: 'A mass of snow sliding rapidly down a mountain' },
        { term: 'beacon', definition: 'Electronic device that helps rescuers find buried people' },
      ],
    },
    2: {
      level: 2,
      summary: 'Avalanche mortality results from asphyxiation (primary), trauma, and hypothermia. Survival decreases dramatically after 15-18 minutes of burial. Rapid companion rescue with proper equipment is the key to survival.',
      explanation: `## Causes of Death in Avalanche

### Asphyxiation (Most Common - 75%)
- Snow compacts, limiting air
- CO2 builds up in air pocket
- Ice mask forms from exhaled breath
- Death within 15-30 minutes typical

### Trauma (25%)
- Impact with trees, rocks
- Compression injuries
- Often fatal or contributes to burial

### Hypothermia
- Contributing factor
- May be protective if not asphyxiated
- Allows prolonged resuscitation

## Survival Time Curve
- 0-15 min: ~90% survival if located
- 15-35 min: survival drops to ~35%
- 35+ min: <25% survival
- 130+ min: rare survival (air pocket required)

## Rescue Priorities

### Companion Rescue
1. Scene safety (secondary avalanche risk)
2. Note last seen point
3. Beacon search (if equipped)
4. Probe systematically
5. Dig rapidly
6. Begin medical care

### Professional Rescue
- Called after companion search initiated
- Dogs, organized probe lines
- Medical support
- Body recovery if needed

## Medical Care
- Clear airway of snow
- Assess breathing and pulse
- CPR if no signs of life
- Handle gently (hypothermia risk of VF)
- Evacuate to medical care`,
      keyTerms: [
        { term: 'asphyxiation', definition: 'Death from lack of oxygen' },
        { term: 'probe', definition: 'Long pole used to locate buried avalanche victims' },
      ],
    },
    3: {
      level: 3,
      summary: 'Avalanche pathophysiology involves asphyxiation, trauma, and hypothermia in variable combinations. The survival curve demonstrates critical time windows. Resuscitation algorithms address the hypothermic, asphyxiated patient with consideration for prolonged CPR.',
      explanation: `## Pathophysiology

### Asphyxiation Mechanism
- Air pocket size determines survival time
- Snow porosity affects O2 availability
- Exhaled CO2 accumulates
- Ice mask forms, sealing air pocket
- Death from hypoxia/hypercapnia

### Trauma Patterns
- Blunt trauma from debris
- Compression from snow mass
- Often determines non-survivability

### Hypothermia
- Core cooling rate: ~3C/hour
- May be protective (reduced O2 demand)
- Complicates resuscitation decisions

## Survival Factors

| Factor | Better Prognosis | Worse Prognosis |
|--------|------------------|-----------------|
| Air pocket | Present | Absent |
| Burial depth | Shallow | Deep |
| Snow density | Light | Dense |
| Trauma | Absent | Present |
| Burial time | <18 min | >35 min |

## Resuscitation Approach

### On Scene
- Airway clearance
- Assess for signs of life
- Handle gently (VF risk)
- Begin CPR if indicated
- Protect from further cooling

### CPR Decision Algorithm
- Obvious fatal injury: no CPR
- Core temp >32C + asystole >20 min: consider stopping
- Hypothermic (<32C): prolonged resuscitation
- Air pocket present: better prognosis

### Hospital Care
- Rewarming (ECMO for severe)
- Trauma evaluation
- Neurological assessment`,
      keyTerms: [
        { term: 'ice mask', definition: 'Frozen barrier formed by exhaled breath blocking air exchange' },
        { term: 'VF', definition: 'Ventricular fibrillation - dangerous heart rhythm' },
      ],
      clinicalNotes: 'Hypothermia can be protective and warrants prolonged resuscitation. However, asphyxiation without hypothermia has poor prognosis. The presence of an air pocket is the strongest survival predictor for prolonged burial.',
    },
    4: {
      level: 4,
      summary: 'Avalanche medicine integrates understanding of asphyxiation physiology, trauma assessment, and hypothermic resuscitation. Evidence-based algorithms guide field decisions. Survival depends on burial duration, air pocket, and trauma status.',
      explanation: `## Detailed Pathophysiology

### Asphyxiation Timeline
- Phase 1 (0-10 min): Air pocket O2 consumption
- Phase 2 (10-20 min): CO2 accumulation, hypoxia
- Phase 3 (20+ min): Loss of consciousness, death
- Ice mask accelerates timeline

### Snow Characteristics
- Fresh snow: more porous, longer survival
- Slab/wet snow: denser, shorter survival
- Compaction increases with time
- Temperature affects snow metamorphism

### Trauma Considerations
- Primary survey difficult in burial
- Spinal precautions may be warranted
- Internal injuries may be occult
- Trauma may preclude survival before burial

## Evidence-Based Resuscitation

### International Commission Guidelines

**Withhold CPR if:**
- Obvious lethal trauma
- Burial duration >60 min with:
  - No air pocket AND
  - Asystole AND
  - Core temp >32C

**Continue CPR if:**
- Burial <60 min
- Air pocket present
- Core temp <32C
- Any organized rhythm

### ECMO Resuscitation
- Indicated for hypothermic cardiac arrest
- Best outcomes if:
  - Witnessed arrest
  - Reasonable burial time
  - No asphyxiation signs (K+ <12 mEq/L)

## Potassium as Prognostic Marker
- Reflects cell death from asphyxia
- K+ <8: possible survival
- K+ 8-12: poor prognosis
- K+ >12: non-survivable

## Field Decision Making
- Rapid assessment
- Resource allocation
- Mass casualty considerations
- Scene safety paramount`,
      keyTerms: [
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation - for rewarming severe hypothermia' },
        { term: 'potassium', definition: 'Electrolyte marker of cell death in avalanche asphyxiation' },
      ],
      clinicalNotes: 'Serum potassium is the best discriminator between hypothermia (potentially survivable) and asphyxiation (not survivable) in avalanche victims. K+ >12 indicates death from asphyxiation.',
    },
    5: {
      level: 5,
      summary: 'Avalanche medicine combines rescue medicine, hypothermia physiology, and trauma care. The triple H syndrome (hypoxia, hypothermia, hypercapnia) determines pathophysiology. Evidence-based algorithms integrate burial duration, air pocket status, core temperature, and potassium for resuscitation decisions.',
      explanation: `## Advanced Pathophysiology

### Triple H Syndrome
- Hypoxia: O2 consumption in closed space
- Hypercapnia: CO2 accumulation
- Hypothermia: progressive core cooling
- Variable contributions determine outcome

### Air Pocket Physiology
- Volume: critical determinant
- Snow porosity: affects gas exchange
- Exhaled air: 16% O2, 4% CO2
- Ice mask formation: seals pocket
- Survival >30 min requires substantial pocket

### Hypothermic Cardioprotection
- Reduced metabolic rate: 6% per 1C
- At 28C: metabolism ~50% baseline
- Oxygen debt accumulates slower
- Brain more tolerant of ischemia

## Evidence Synthesis

### Survival Predictors
| Factor | Survival Impact |
|--------|-----------------|
| Air pocket | Strongest positive |
| Burial depth <1m | Favorable |
| K+ <8 mEq/L | Favorable |
| Core temp <30C with air pocket | May allow survival |
| Burial >35 min, no air pocket | Very poor |

### ECMO Outcomes
- Avalanche-specific data limited
- Accidental hypothermia data suggests benefit
- K+ cutoff varies (8-12 mEq/L)
- Best if no asphyxiation

## Resuscitation Algorithm (International)

**Decision Tree:**
- Burial >60 min
  - Core temp <30C + air pocket?
    - Yes: Consider ECMO rewarming
    - No: Check K+
      - K+ <12: Consider ECMO
      - K+ >12: Not survivable

## Prevention and Preparation

### Terrain Assessment
- Slope angle (30-45 degrees highest risk)
- Recent loading (wind, snowfall)
- Anchors and triggers
- Escape routes

### Group Management
- Travel one at a time
- Visual contact
- Communication plan
- Practice rescue skills

### Equipment
- Beacon (transceiver)
- Probe (minimum 240cm)
- Shovel (metal blade)
- Airbag pack (reduces burial)

### Training
- Companion rescue skills essential
- Annual practice recommended
- Avalanche education courses`,
      keyTerms: [
        { term: 'Triple H syndrome', definition: 'Hypoxia, Hypercapnia, Hypothermia in avalanche burial' },
        { term: 'airbag pack', definition: 'Inflation device to increase flotation in avalanche' },
      ],
      clinicalNotes: 'Prevention and preparation are the most effective interventions. Companion rescue within 15 minutes offers best survival. ECMO centers should be notified early for potential hypothermic victims. K+ measurement is critical for determining resuscitation futility.',
    },
  },

  media: [],
  citations: [
    {
      id: 'avalanche-resuscitation',
      type: 'article',
      title: 'Avalanche Resuscitation Checklist',
      source: 'Resuscitation',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-hypothermia', targetType: 'condition', relationship: 'related', label: 'Hypothermia' },
  ],
  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'rescue-medicine'],
    keywords: ['avalanche', 'burial', 'hypothermia', 'asphyxiation', 'rescue'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default avalancheInjury;
