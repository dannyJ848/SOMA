/**
 * Heat Exhaustion - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const heatExhaustion: EducationalContent = {
  id: 'wilderness-heat-exhaustion',
  type: 'condition',
  name: 'Heat Exhaustion',
  alternateNames: ['Heat Prostration'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat exhaustion happens when your body gets too hot from exercise or being in hot weather. You feel very tired, sweaty, and sick, but can get better by cooling down and drinking fluids.',
      explanation: `## What Is Heat Exhaustion?

Heat exhaustion happens when your body overheats. It usually occurs when you exercise in hot weather or stay in a hot place too long.

## Warning Signs
- Heavy sweating
- Feeling weak and tired
- Feeling sick to your stomach
- Headache
- Pale, cool, clammy skin

## What To Do
- Move to a cool, shady place
- Drink cool water or sports drinks
- Rest and cool down
- If you don't feel better soon, get help`,
      keyTerms: [
        { term: 'heat exhaustion', definition: 'When your body gets too hot and can\'t cool itself properly' },
        { term: 'dehydration', definition: 'Not having enough water in your body' },
      ],
    },
    2: {
      level: 2,
      summary: 'Heat exhaustion is a heat-related illness where the body\'s cooling mechanisms are overwhelmed. Core temperature may be elevated but typically stays below 40C. Prompt cooling and hydration usually lead to full recovery.',
      explanation: `## Understanding Heat Exhaustion

Heat exhaustion occurs when the body cannot dissipate heat fast enough during exertion or hot conditions. Unlike heat stroke, mental status remains normal.

## Symptoms
- Heavy sweating
- Weakness and fatigue
- Nausea, vomiting
- Headache
- Muscle cramps
- Core temperature usually 37-40C (99-104F)
- Normal mental status

## Risk Factors
- Hot, humid environment
- Strenuous exercise
- Inadequate hydration
- Lack of acclimatization

## Treatment
- Move to shade or cool area
- Remove excess clothing
- Cool with water, fans
- Oral rehydration if alert
- Rest until symptoms resolve`,
      keyTerms: [
        { term: 'heat dissipation', definition: 'The body\'s processes for releasing excess heat' },
        { term: 'acclimatization', definition: 'The body\'s gradual adaptation to hot conditions' },
      ],
    },
    3: {
      level: 3,
      summary: 'Heat exhaustion represents a failure of thermoregulatory compensation with volume depletion and electrolyte disturbances. Core temperature elevation is moderate and CNS function is preserved. Management focuses on cooling, rehydration, and monitoring for progression to heat stroke.',
      explanation: `## Pathophysiology

### Thermoregulation Failure
- Heat production exceeds dissipation
- Peripheral vasodilation
- Sweating with fluid/electrolyte loss
- Cardiovascular strain

### Types
- Water depletion: inadequate fluid intake
- Salt depletion: replacement with hypotonic fluids

## Clinical Features
- Core temperature 37-40C
- Preserved mental status (key distinction from heat stroke)
- Tachycardia
- Orthostatic hypotension
- Profuse sweating
- Nausea, vomiting, weakness

## Management
- Remove from heat
- Active cooling: evaporative, ice packs to axilla/groin
- Oral rehydration if mild
- IV normal saline for moderate cases
- Monitor for progression`,
      keyTerms: [
        { term: 'thermoregulation', definition: 'The body\'s system for maintaining normal temperature' },
        { term: 'orthostatic hypotension', definition: 'Drop in blood pressure when standing' },
      ],
      clinicalNotes: 'Mental status is the key differentiator from heat stroke. Any confusion mandates treatment as heat stroke.',
    },
    4: {
      level: 4,
      summary: 'Heat exhaustion involves thermoregulatory stress with cardiovascular and volume depletion manifestations. Preserved CNS function distinguishes it from heat stroke. Management integrates cooling, fluid resuscitation guided by clinical status, and recognition of progression risk.',
      explanation: `## Detailed Pathophysiology

### Cardiovascular Response
- Cutaneous vasodilation for heat dissipation
- Reduced central blood volume
- Compensatory tachycardia
- Decreased stroke volume
- Exercise capacity limitation

### Fluid-Electrolyte Disturbances
- Sweat losses: 1-2 L/hour during exercise
- Sodium loss in sweat (20-80 mEq/L)
- Risk of hyponatremia with hypotonic replacement
- Hypokalemia from sweating and alkalosis

## Clinical Assessment
- Core temperature measurement
- Mental status evaluation
- Orthostatic vitals
- Skin assessment
- Electrolyte evaluation if available

## Management Protocol
- Cessation of activity
- Removal from heat
- Active cooling measures
- Fluid replacement:
  - Oral: isotonic sports drinks
  - IV: normal saline 1-2L bolus as needed
- Electrolyte monitoring
- Activity restriction until recovery`,
      keyTerms: [
        { term: 'exercise-associated hyponatremia', definition: 'Low sodium from excessive hypotonic fluid intake during exercise' },
        { term: 'heat acclimatization', definition: 'Physiological adaptations improving heat tolerance over 10-14 days' },
      ],
      clinicalNotes: 'Avoid excessive hypotonic fluid replacement to prevent hyponatremia. Return to activity should be gradual with proper acclimatization.',
    },
    5: {
      level: 5,
      summary: 'Heat exhaustion represents the clinical syndrome of thermoregulatory strain with cardiovascular insufficiency and hypovolemia. Evidence-based management addresses both cooling and fluid-electrolyte balance while monitoring for progression. Prevention through acclimatization and hydration strategies is well-established.',
      explanation: `## Advanced Pathophysiology

### Molecular Heat Stress Response
- Heat shock protein induction
- Inflammatory cytokine activation
- Endothelial activation
- Oxidative stress

### Cardiovascular Limitations
- Cutaneous blood flow competition
- Cardiac output redistribution
- Exercise capacity reduction
- Syncope risk

## Evidence-Based Management

### Cooling Strategies
- Evaporative cooling effectiveness
- Ice water immersion for rapid cooling
- Cooling rate targets

### Fluid Resuscitation
- Isotonic vs hypotonic solutions
- Rate of replacement
- Electrolyte monitoring indications
- Oral vs IV route selection

### Prevention
- Heat acclimatization protocols (10-14 days)
- Hydration guidelines
- Work-rest ratios
- Environmental monitoring (WBGT)

## Return to Activity
- Symptom resolution
- Normothermia
- Normal laboratory values
- Gradual progression`,
      keyTerms: [
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature - index of environmental heat stress' },
        { term: 'heat shock proteins', definition: 'Molecular chaperones induced by thermal stress' },
      ],
      clinicalNotes: 'Exertional heat illness often occurs in otherwise fit individuals. Post-episode susceptibility may be increased for 1-2 months. WBGT monitoring should guide activity modification in high-risk conditions.',
    },
  },

  media: [],
  citations: [
    {
      id: 'wilderness-medicine-heat',
      type: 'textbook',
      title: 'Wilderness Medicine',
      source: 'Elsevier',
      chapter: 'Heat-Related Illness',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-heat-stroke', targetType: 'condition', relationship: 'related', label: 'Heat Stroke' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['wilderness-medicine', 'environmental-medicine'],
    keywords: ['heat illness', 'hyperthermia', 'dehydration'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heatExhaustion;
