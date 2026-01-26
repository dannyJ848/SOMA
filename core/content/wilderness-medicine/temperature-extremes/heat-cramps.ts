/**
 * Heat Cramps - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const heatCramps: EducationalContent = {
  id: 'wilderness-heat-cramps',
  type: 'condition',
  name: 'Heat Cramps',
  alternateNames: ['Exercise-Associated Muscle Cramps'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat cramps are painful muscle spasms that happen during or after exercise in hot weather. They usually affect the legs and stomach muscles. Resting and drinking fluids with salt helps them go away.',
      explanation: `## What Are Heat Cramps?

Heat cramps are painful muscle squeezing that happens when you exercise in the heat. They happen because you lose salt and water when you sweat.

## Where Do They Happen?
- Legs (calves, thighs)
- Stomach muscles
- Arms

## What To Do
- Stop exercising and rest
- Drink water or sports drinks
- Gently stretch the cramping muscle
- Rest in a cool place`,
      keyTerms: [
        { term: 'cramp', definition: 'When a muscle squeezes tight and hurts' },
        { term: 'electrolytes', definition: 'Salts in your body that help muscles work' },
      ],
    },
    2: {
      level: 2,
      summary: 'Heat cramps are painful, involuntary muscle contractions during or after exercise in heat. They result from fluid and electrolyte losses through sweating. Treatment involves rest, stretching, and rehydration with electrolyte solutions.',
      explanation: `## Understanding Heat Cramps

Heat cramps occur when heavy sweating leads to significant sodium and fluid losses. The muscles most commonly affected are those used during exercise.

## Symptoms
- Sudden, painful muscle contractions
- Usually in legs, abdomen, or arms
- May occur during or after exercise
- Normal mental status
- Normal body temperature

## Risk Factors
- Heavy sweating
- Drinking only water (no electrolytes)
- Poor physical conditioning
- Lack of heat acclimatization

## Treatment
- Rest in cool environment
- Oral rehydration with salt-containing fluids
- Gentle stretching
- Avoid further exertion until resolved`,
      keyTerms: [
        { term: 'sodium', definition: 'An essential salt lost in sweat that muscles need to function' },
        { term: 'rehydration', definition: 'Replacing lost fluids and electrolytes' },
      ],
    },
    3: {
      level: 3,
      summary: 'Heat cramps represent exercise-associated muscle cramps in the setting of heat exposure and electrolyte disturbances. Sodium depletion from sweating with hypotonic fluid replacement is the primary mechanism. Management focuses on rest, sodium-containing fluid replacement, and prevention through proper hydration.',
      explanation: `## Pathophysiology

### Electrolyte Disturbance
- Sweat sodium losses (20-80 mEq/L)
- Replacement with hypotonic fluids
- Relative hyponatremia
- Altered muscle membrane excitability

### Neuromuscular Mechanism
- Hyperexcitable motor neurons
- Spontaneous action potentials
- Sustained muscle contraction
- Ischemia from sustained contraction

## Clinical Features
- Painful, involuntary contractions
- Large muscle groups
- Often post-exertion
- May be recurrent
- Normal core temperature
- Normal mental status

## Management
- Cessation of activity
- Oral sodium replacement (salt tabs, broth, sports drinks)
- IV saline for severe/recurrent cases
- Gentle stretching
- Activity restriction until resolved`,
      keyTerms: [
        { term: 'hyponatremia', definition: 'Low sodium concentration in the blood' },
        { term: 'motor neuron excitability', definition: 'The tendency of nerves to fire and cause muscle contraction' },
      ],
      clinicalNotes: 'Heat cramps often occur after exercise has stopped. Distinguish from exertional rhabdomyolysis which presents with severe pain and weakness.',
    },
    4: {
      level: 4,
      summary: 'Heat cramps result from sodium deficit relative to water intake during exercise in heat. The pathophysiology involves neuromuscular hyperexcitability from electrolyte disturbances. Management addresses sodium replacement while prevention focuses on acclimatization and appropriate hydration strategies.',
      explanation: `## Detailed Pathophysiology

### Sodium Balance
- Sweat rate: 1-2.5 L/hour
- Sweat sodium: 20-80 mEq/L
- Total sodium loss: 2-8 g in prolonged exercise
- Replacement with water causes dilutional hyponatremia

### Neuromuscular Mechanism
- Sodium-potassium ATPase dysfunction
- Reduced extracellular sodium
- Membrane potential instability
- Alpha motor neuron hyperexcitability
- Sustained muscle contraction

## Clinical Differentiation
| Feature | Heat Cramps | Exertional Rhabdomyolysis |
|---------|-------------|---------------------------|
| Pain | Cramping | Severe, persistent |
| Onset | During/after exercise | During exercise |
| Muscle function | Normal after cramp | Weakness |
| Labs | Low sodium | Elevated CK, myoglobin |

## Management
- Oral: 1-2 L of electrolyte solution
- IV: Normal saline if severe
- Sodium chloride tablets
- Activity modification`,
      keyTerms: [
        { term: 'dilutional hyponatremia', definition: 'Low sodium caused by excess water intake relative to sodium' },
        { term: 'alpha motor neuron', definition: 'Nerve cell that directly controls muscle contraction' },
      ],
      clinicalNotes: 'Consider checking sodium levels in recurrent cases. Athletes may need individualized hydration plans based on sweat rate and composition.',
    },
    5: {
      level: 5,
      summary: 'Heat cramps represent a clinical manifestation of exercise-associated electrolyte disturbances, primarily sodium deficit. Contemporary understanding emphasizes the interplay between sweat losses, hydration practices, and individual susceptibility. Evidence-based prevention incorporates sweat testing and personalized hydration strategies.',
      explanation: `## Advanced Pathophysiology

### Sweat Physiology
- Eccrine gland secretion
- Primary secretion: isotonic
- Ductal reabsorption: sodium, chloride
- Individual variation in sweat composition
- Acclimatization effects on sweat sodium

### Neuromuscular Mechanisms
- Hodgkin-Huxley model implications
- Sodium channel kinetics
- Post-exercise hyperexcitability
- Central vs peripheral mechanisms debate

## Evidence-Based Prevention

### Sweat Testing
- Sweat rate determination
- Sweat sodium concentration
- Individualized fluid/sodium replacement

### Hydration Strategies
- Pre-exercise hydration
- During exercise: 400-800 mL/hour
- Sodium: 300-600 mg/hour for heavy sweaters
- Post-exercise: 1.5x fluid deficit

### Acclimatization
- 10-14 day protocol
- Reduced sweat sodium concentration
- Improved thermoregulation
- Enhanced performance

## Special Populations
- Salty sweaters
- Cystic fibrosis
- Athletes on low-sodium diets
- Those taking diuretics`,
      keyTerms: [
        { term: 'sweat testing', definition: 'Analysis of sweat rate and composition to guide hydration' },
        { term: 'salty sweater', definition: 'Individual with higher than average sweat sodium concentration' },
      ],
      clinicalNotes: 'Sweat sodium concentration varies widely (10-90 mEq/L). Personalized hydration plans based on sweat testing optimize performance and prevent cramps. Heat acclimatization reduces sweat sodium by 40-60%.',
    },
  },

  media: [],
  citations: [
    {
      id: 'exercise-cramps-review',
      type: 'article',
      title: 'Exercise-Associated Muscle Cramps',
      source: 'Sports Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-heat-exhaustion', targetType: 'condition', relationship: 'related', label: 'Heat Exhaustion' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['wilderness-medicine', 'sports-medicine'],
    keywords: ['heat cramps', 'muscle cramps', 'electrolytes', 'hydration'],
    clinicalRelevance: 'medium',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heatCramps;
