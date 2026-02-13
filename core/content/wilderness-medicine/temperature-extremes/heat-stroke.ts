/**
 * Heat Stroke - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const heatStroke: EducationalContent = {
  id: 'wilderness-heat-stroke',
  type: 'condition',
  name: 'Heat Stroke',
  alternateNames: ['Sunstroke', 'Hyperthermia'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat stroke is a very serious emergency when your body gets dangerously hot and stops being able to cool itself. The person may be confused or pass out. Call for emergency help immediately.',
      explanation: `## What Is Heat Stroke?

Heat stroke is a medical emergency. It happens when your body temperature gets so high that it can damage your brain and other organs.

## Warning Signs
- Very hot skin (may be dry or sweaty)
- Confusion or acting strange
- Passing out
- Very fast heartbeat
- Body temperature over 104F (40C)

## What To Do - THIS IS AN EMERGENCY
- Call 911 immediately
- Move person to shade
- Cool them any way you can
- Put ice or cold water on their body
- Fan them while wetting their skin`,
      keyTerms: [
        { term: 'heat stroke', definition: 'A dangerous condition where the body overheats and can\'t cool down' },
        { term: 'emergency', definition: 'A serious situation that needs immediate help' },
      ],
    },
    2: {
      level: 2,
      summary: 'Heat stroke is a life-threatening emergency with core temperature above 40C (104F) and altered mental status. Unlike heat exhaustion, the brain is affected. Rapid cooling is critical to prevent death or permanent damage.',
      explanation: `## Understanding Heat Stroke

Heat stroke occurs when the body\'s temperature regulation completely fails. The brain and organs are damaged by extreme heat.

## Key Features
- Core temperature >40C (104F)
- Altered mental status (confusion, seizures, coma)
- Hot skin (sweating may or may not be present)
- Multi-organ dysfunction

## Types
- Classic: occurs in elderly, ill, during heat waves
- Exertional: occurs during exercise in heat

## Treatment - EMERGENCY
- Call for emergency medical services
- Immediate aggressive cooling
- Ice water immersion if possible
- Evaporative cooling with fanning
- Ice packs to neck, armpits, groin
- Do not delay cooling for transport`,
      keyTerms: [
        { term: 'altered mental status', definition: 'Changes in awareness, thinking, or consciousness' },
        { term: 'multi-organ dysfunction', definition: 'When multiple organs start to fail from heat damage' },
      ],
    },
    3: {
      level: 3,
      summary: 'Heat stroke is defined by hyperthermia (>40C) with CNS dysfunction. It represents complete thermoregulatory failure with systemic inflammatory response and multi-organ injury. Aggressive cooling to target temperature within 30 minutes significantly improves outcomes.',
      explanation: `## Pathophysiology

### Thermoregulatory Failure
- Heat production overwhelms dissipation
- Hypothalamic dysfunction
- Loss of sweating (classic) or continued sweating (exertional)
- Positive feedback loop of hyperthermia

### Cellular Injury
- Direct thermal injury to cells
- Systemic inflammatory response
- Coagulation cascade activation
- Endothelial injury

## Clinical Features

### CNS Manifestations
- Confusion, delirium
- Ataxia
- Seizures
- Coma

### Other Findings
- Core temp >40C (104F)
- Tachycardia, hypotension
- Tachypnea
- Rhabdomyolysis
- Acute kidney injury
- DIC

## Treatment
- Rapid cooling goal: <39C within 30 minutes
- Ice water immersion preferred
- Alternative: evaporative cooling
- Airway management as needed
- IV fluid resuscitation
- Monitor for complications`,
      keyTerms: [
        { term: 'rhabdomyolysis', definition: 'Breakdown of muscle tissue releasing harmful contents into blood' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation - abnormal blood clotting throughout the body' },
      ],
      clinicalNotes: 'Cooling should never be delayed. Ice water immersion cools at approximately 0.2C per minute. Target core temp <39C.',
    },
    4: {
      level: 4,
      summary: 'Heat stroke involves hyperthermia-induced multi-system failure with cytotoxicity, systemic inflammation, and coagulopathy. Mortality correlates with duration of hyperthermia. Evidence supports aggressive cooling with ice water immersion achieving fastest cooling rates and best outcomes.',
      explanation: `## Detailed Pathophysiology

### Thermal Cytotoxicity
- Protein denaturation
- Membrane lipid phase transition
- Mitochondrial dysfunction
- Cell death pathways activation

### Systemic Inflammatory Response
- Heat shock protein release
- Cytokine storm (IL-1, IL-6, TNF-alpha)
- Endothelial activation
- Gut barrier dysfunction with endotoxemia

### Coagulopathy
- Direct platelet injury
- Coagulation factor consumption
- Fibrinolysis activation
- DIC progression

## Organ-Specific Injury
- CNS: cerebral edema, hemorrhage
- Cardiac: myocardial injury, arrhythmias
- Hepatic: centrilobular necrosis
- Renal: ATN, rhabdomyolysis-related injury
- Muscle: rhabdomyolysis

## Evidence-Based Cooling
- Ice water immersion: 0.15-0.35C/min
- Evaporative cooling: 0.05-0.10C/min
- Cold IV fluids: adjunct only
- Pharmacological (dantrolene): not supported by evidence`,
      keyTerms: [
        { term: 'endotoxemia', definition: 'Presence of bacterial endotoxins in blood from gut barrier dysfunction' },
        { term: 'ATN', definition: 'Acute tubular necrosis - kidney injury from ischemia or toxins' },
      ],
      clinicalNotes: 'Mortality increases 2-fold for every 30 minutes cooling is delayed beyond initial recognition. Dantrolene has not shown benefit in human heat stroke.',
    },
    5: {
      level: 5,
      summary: 'Heat stroke represents a complex syndrome of thermal cytotoxicity, systemic inflammation, and multi-organ dysfunction. Molecular mechanisms involve heat shock response failure, endothelial injury, and coagulation activation. Contemporary management emphasizes rapid cooling with evidence favoring ice water immersion.',
      explanation: `## Molecular Pathophysiology

### Heat Shock Response
- HSP70, HSP90 induction
- Failure of protective mechanisms
- Protein aggregation
- Proteasome dysfunction

### Inflammatory Cascade
- DAMP release (HMGB1, S100 proteins)
- TLR activation
- NF-kB signaling
- Inflammasome activation

### Endothelial Injury
- Glycocalyx degradation
- Tight junction disruption
- Increased permeability
- Procoagulant phenotype

## Evidence-Based Management

### Cooling Modalities
| Method | Rate | Evidence |
|--------|------|----------|
| Ice water immersion | 0.2C/min | Gold standard |
| Evaporative | 0.05C/min | Alternative |
| Cold IV fluids | Adjunct | Limited effect |
| Intravascular cooling | Variable | ICU setting |

### Prognostic Factors
- Duration of hyperthermia
- Peak temperature
- Presence of DIC
- Degree of organ dysfunction
- Pre-existing conditions

## Long-term Outcomes
- CNS sequelae in survivors
- Heat intolerance
- Chronic kidney disease risk
- Return to activity considerations`,
      keyTerms: [
        { term: 'HMGB1', definition: 'High mobility group box 1 - DAMP released from injured cells' },
        { term: 'glycocalyx', definition: 'Protective layer on endothelial surface damaged in heat stroke' },
      ],
      clinicalNotes: 'Heat stroke survivors may have persistent heat intolerance for months. Return to exercise should be gradual with heat tolerance testing. Exertional heat stroke in athletes warrants evaluation for predisposing conditions.',
    },
  },

  media: [],
  citations: [
    {
      id: 'heat-stroke-guidelines',
      type: 'article',
      title: 'Heat Stroke Management Guidelines',
      source: 'Wilderness & Environmental Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-heat-exhaustion', targetType: 'condition', relationship: 'related', label: 'Heat Exhaustion' },
  ],
  tags: {
    systems: ['neurological', 'cardiovascular'],
    topics: ['wilderness-medicine', 'environmental-medicine', 'emergency-medicine'],
    keywords: ['heat stroke', 'hyperthermia', 'emergency', 'cooling'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heatStroke;
