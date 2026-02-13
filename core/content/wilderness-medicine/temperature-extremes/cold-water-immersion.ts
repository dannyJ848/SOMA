/**
 * Cold Water Immersion - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const coldWaterImmersion: EducationalContent = {
  id: 'wilderness-cold-water-immersion',
  type: 'condition',
  name: 'Cold Water Immersion',
  alternateNames: ['Cold Water Shock', 'Immersion Hypothermia'],

  levels: {
    1: {
      level: 1,
      summary: 'Cold water immersion happens when someone falls into very cold water. The body loses heat much faster in water than in air, which can be very dangerous.',
      explanation: `## What Is Cold Water Immersion?

When you fall into cold water, your body loses heat very quickly. Water takes heat away from your body about 25 times faster than cold air does.

## Why Is It Dangerous?

- Your body gets cold very fast
- You might gasp and breathe in water
- Your muscles stop working well
- You can become confused

## What To Do

- Get out of the water as quickly as possible
- Call for help
- Remove wet clothes and warm up slowly`,
      keyTerms: [
        { term: 'hypothermia', definition: 'When your body gets too cold to work properly' },
        { term: 'immersion', definition: 'Being surrounded by water' },
      ],
    },
    2: {
      level: 2,
      summary: 'Cold water immersion causes rapid heat loss and can trigger dangerous reflexes including cold shock response and swimming failure. Understanding the stages helps with rescue and treatment.',
      explanation: `## Stages of Cold Water Immersion

### Stage 1: Cold Shock (0-3 minutes)
- Gasping reflex
- Hyperventilation
- Increased heart rate
- Risk of drowning from inhaling water

### Stage 2: Swimming Failure (3-30 minutes)
- Loss of muscle coordination
- Inability to swim effectively
- Grip strength decreases

### Stage 3: Hypothermia (30+ minutes)
- Core temperature drops
- Confusion and disorientation
- Loss of consciousness

## Treatment
- Remove from water carefully
- Handle gently (avoid rough movement)
- Remove wet clothing
- Warm slowly with blankets`,
      keyTerms: [
        { term: 'cold shock response', definition: 'The body\'s automatic reaction to sudden cold water exposure' },
        { term: 'swimming failure', definition: 'Loss of ability to swim due to cold affecting muscles' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cold water immersion involves distinct physiological phases: cold shock response with autonomic dysregulation, cold incapacitation affecting neuromuscular function, and progressive hypothermia. Management requires careful attention to rescue collapse and rewarming protocols.',
      explanation: `## Pathophysiology

### Cold Shock Response (0-3 min)
- Peripheral vasoconstriction
- Catecholamine surge
- Cardiac dysrhythmias
- Inspiratory gasp reflex
- Hyperventilation leading to hypocapnia

### Cold Incapacitation (3-30 min)
- Peripheral nerve cooling
- Muscle cooling and dysfunction
- Loss of coordination
- Grip strength loss

### Hypothermia Phase (>30 min)
- Core temperature decline
- Decreased cardiac output
- Progressive CNS depression
- Arrhythmia risk

## Treatment Considerations
- Horizontal rescue position
- Avoid unnecessary movement
- Passive external rewarming
- Monitor for rescue collapse
- Consider active rewarming for severe cases`,
      keyTerms: [
        { term: 'rescue collapse', definition: 'Cardiovascular collapse that can occur during or after rescue from cold water' },
        { term: 'afterdrop', definition: 'Continued core temperature decline after removal from cold water' },
      ],
      clinicalNotes: 'Maintain horizontal position during rescue to prevent orthostatic collapse.',
    },
    4: {
      level: 4,
      summary: 'Cold water immersion pathophysiology involves complex cardiovascular and neurological responses. The cold shock response causes autonomic dysregulation with potential fatal arrhythmias. Treatment integrates rescue techniques with temperature management protocols.',
      explanation: `## Detailed Pathophysiology

### Cardiovascular Response
- Peripheral vasoconstriction increases afterload
- Cold-induced diuresis
- Hemoconcentration
- QT prolongation and arrhythmia risk
- Rescue collapse from venous pooling

### Neurological Effects
- Peripheral nerve conduction slowing
- CNS depression with hypothermia
- Impaired judgment before motor dysfunction

### Respiratory Considerations
- Aspiration risk during cold shock
- Pulmonary edema (cold-induced)
- Decreased respiratory drive with severe hypothermia

## Management Protocols

### Field Management
- Horizontal lift from water
- Remove wet clothing
- Prevent further heat loss
- Avoid vigorous rubbing

### Rewarming Strategy
- Mild: Passive rewarming
- Moderate: Active external rewarming
- Severe: Active core rewarming`,
      keyTerms: [
        { term: 'circum-rescue collapse', definition: 'Hemodynamic collapse occurring just before, during, or after rescue' },
        { term: 'cold diuresis', definition: 'Increased urine output due to cold-induced peripheral vasoconstriction' },
      ],
      clinicalNotes: 'ECG monitoring is essential due to arrhythmia risk. Avoid rapid rewarming which can cause vasodilation and cardiovascular collapse.',
    },
    5: {
      level: 5,
      summary: 'Cold water immersion involves complex interactions between thermal physiology, cardiovascular reflexes, and neurological function. Evidence-based management protocols address the distinct phases of immersion while considering the molecular mechanisms of cold-induced cellular dysfunction.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms
- Cold-induced ion channel dysfunction
- Membrane fluidity changes
- Enzyme kinetics alterations
- Mitochondrial dysfunction

### Cardiovascular Electrophysiology
- Temperature-dependent ion channel behavior
- J-wave (Osborn wave) formation
- QT prolongation mechanism
- Arrhythmogenesis substrate

### Neuroprotection vs Injury
- Cold-induced neuroprotection mechanisms
- Threshold for protective vs harmful hypothermia
- Implications for resuscitation duration

## Evidence-Based Management

### Resuscitation Considerations
- Extended resuscitation protocols
- Core temperature target for ROSC
- ECMO indications
- Prognostication factors

### Post-Resuscitation Care
- Targeted temperature management
- Neurological monitoring
- Multi-organ support`,
      keyTerms: [
        { term: 'Osborn wave', definition: 'J-point deflection on ECG associated with hypothermia' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation for severe hypothermia with cardiac arrest' },
      ],
      clinicalNotes: 'In cold water drowning with hypothermia, prolonged resuscitation is warranted as hypothermia can be neuroprotective. Consider ECMO for refractory cardiac arrest with severe hypothermia.',
    },
  },

  media: [],
  citations: [
    {
      id: 'wilderness-medicine-cold',
      type: 'textbook',
      title: 'Wilderness Medicine',
      source: 'Elsevier',
      chapter: 'Cold Water Immersion',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-hypothermia', targetType: 'condition', relationship: 'related', label: 'Hypothermia' },
  ],
  tags: {
    systems: ['cardiovascular', 'neurological'],
    topics: ['wilderness-medicine', 'environmental-medicine'],
    keywords: ['cold water', 'immersion', 'hypothermia', 'drowning'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default coldWaterImmersion;
