/**
 * Submersion Injury - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const submersionInjury: EducationalContent = {
  id: 'wilderness-submersion-injury',
  type: 'condition',
  name: 'Submersion Injury',
  alternateNames: ['Immersion Injury', 'Non-Fatal Drowning'],

  levels: {
    1: {
      level: 1,
      summary: 'Submersion injury happens when someone has been underwater but is rescued and survives. They may have problems breathing and need medical care even if they seem okay at first.',
      explanation: `## What Is Submersion Injury?

When someone is underwater for a while but is rescued, they may still have problems. Water in the lungs can cause breathing difficulties that may get worse over time.

## Why Is Medical Care Important?
- Lung problems can develop hours later
- Water in lungs can cause infection
- The person needs to be watched carefully

## What To Do
- Get the person out of the water
- Call for emergency help
- Keep them warm
- Stay with them and watch for changes`,
      keyTerms: [
        { term: 'submersion', definition: 'Being under water' },
        { term: 'rescue', definition: 'Being saved from a dangerous situation' },
      ],
    },
    2: {
      level: 2,
      summary: 'Submersion injury refers to the complications that occur after someone is rescued from a drowning event. Even if the person seems fine initially, lung problems can develop hours later. All submersion victims need medical evaluation.',
      explanation: `## Understanding Submersion Injury

When someone nearly drowns, they may aspirate (breathe in) water. This can damage the lungs and cause problems that appear hours after the event.

## What Happens
- Water irritates the lungs
- Swelling can develop
- Oxygen levels may drop
- Symptoms may worsen over time

## Warning Signs After Rescue
- Coughing
- Difficulty breathing
- Fatigue
- Confusion
- Chest discomfort

## Important Facts
- Symptoms can develop 6-24 hours later
- All submersion victims need medical evaluation
- "Dry drowning" and "secondary drowning" are not accurate terms`,
      keyTerms: [
        { term: 'aspiration', definition: 'Breathing liquid into the lungs' },
        { term: 'pulmonary edema', definition: 'Fluid buildup in the lungs' },
      ],
    },
    3: {
      level: 3,
      summary: 'Submersion injury involves pulmonary and systemic effects of water aspiration with potential delayed deterioration. Pathophysiology includes surfactant dysfunction, pulmonary edema, and V/Q mismatch. Management requires observation, supportive care, and monitoring for delayed respiratory compromise.',
      explanation: `## Pathophysiology

### Pulmonary Effects
- Aspiration of water (usually small volumes)
- Surfactant washout and dysfunction
- Alveolar epithelial injury
- Non-cardiogenic pulmonary edema
- V/Q mismatch and hypoxemia

### Systemic Effects
- Hypoxic injury (severity depends on duration)
- Hypothermia
- Electrolyte disturbances (rare)
- Aspiration pneumonia risk

## Clinical Presentation

### Immediate
- Coughing, respiratory distress
- Tachypnea, tachycardia
- Rales/crackles on exam
- Hypoxemia

### Delayed (6-24 hours)
- Progressive respiratory distress
- Worsening oxygenation
- Pulmonary edema
- ARDS in severe cases

## Management
- Supplemental oxygen
- Monitoring (continuous pulse oximetry)
- Observation period (6-8 hours minimum)
- Chest radiograph if symptomatic
- Admit if hypoxic or symptomatic`,
      keyTerms: [
        { term: 'non-cardiogenic pulmonary edema', definition: 'Lung fluid accumulation not due to heart failure' },
        { term: 'ARDS', definition: 'Acute Respiratory Distress Syndrome - severe inflammatory lung injury' },
      ],
      clinicalNotes: 'The terms "dry drowning" and "secondary drowning" are not medically accurate and should be avoided. Observation for 6-8 hours is recommended for all symptomatic patients.',
    },
    4: {
      level: 4,
      summary: 'Submersion injury pathophysiology involves aspiration-induced surfactant dysfunction, inflammatory lung injury, and potential ARDS development. Evidence-based management includes risk stratification, observation protocols, and supportive care. Prognostication depends on initial hypoxia severity and clinical trajectory.',
      explanation: `## Detailed Pathophysiology

### Surfactant Dysfunction
- Direct washout by aspirated water
- Protein inactivation
- Type II pneumocyte injury
- Decreased compliance
- Atelectasis

### Inflammatory Cascade
- Alveolar epithelial injury
- Macrophage activation
- Cytokine release (IL-6, IL-8)
- Neutrophil recruitment
- Capillary leak

### ARDS Progression
- Alveolar flooding
- Hyaline membrane formation
- Fibroproliferative phase (if prolonged)

## Risk Stratification

### Low Risk
- Asymptomatic
- Brief submersion
- No aspiration witnessed
- Normal exam and SpO2

### High Risk
- Symptomatic
- Prolonged submersion
- CPR required
- Abnormal exam or SpO2

## Management Protocol
- Low risk: 4-6 hour observation
- High risk: admit, serial assessment
- CXR if symptomatic
- ABG if hypoxic
- Consider bronchoscopy if particulate aspiration`,
      keyTerms: [
        { term: 'hyaline membrane', definition: 'Protein deposits in alveoli seen in ARDS' },
        { term: 'fibroproliferative phase', definition: 'Later phase of ARDS with fibrosis' },
      ],
      clinicalNotes: 'Asymptomatic patients with normal SpO2 after 6 hours of observation have very low risk of delayed deterioration. CXR changes lag behind clinical symptoms.',
    },
    5: {
      level: 5,
      summary: 'Submersion injury encompasses the spectrum of pulmonary and systemic injury from water aspiration. Molecular pathophysiology involves surfactant inactivation, epithelial injury, and inflammatory cascades. Evidence-based protocols guide observation duration, risk stratification, and ICU management for severe cases.',
      explanation: `## Molecular Pathophysiology

### Surfactant Biology
- SP-A, SP-B, SP-C dysfunction
- Phospholipid dilution
- Loss of surface tension reduction
- Alveolar instability
- Cyclic atelectasis with ventilation

### Epithelial Injury
- Type I cell injury (gas exchange)
- Type II cell injury (surfactant production)
- Tight junction disruption
- Alveolar flooding

### Inflammatory Response
- DAMP release
- TLR activation
- NF-kB signaling
- Inflammasome activation
- Neutrophil extracellular traps

## Evidence-Based Practice

### Observation Protocols
- Asymptomatic, SpO2 >95%: 4-6 hours
- Any symptoms: 12-24 hours minimum
- Abnormal CXR: admit
- Hypoxia: ICU consideration

### ICU Management
- Lung-protective ventilation if intubated
- PEEP optimization
- Prone positioning consideration
- ECMO for refractory hypoxemia

### Antibiotics
- Not routinely recommended
- Consider if grossly contaminated water
- Pseudomonas coverage for warm water
- Aeromonas in freshwater

## Outcomes
- Most recover completely
- ARDS: 10-20% of hospitalized
- Neurological injury: related to hypoxia duration
- Long-term pulmonary function usually normal`,
      keyTerms: [
        { term: 'SP-A, SP-B', definition: 'Surfactant proteins essential for lung function' },
        { term: 'NETs', definition: 'Neutrophil Extracellular Traps - inflammatory structures' },
      ],
      clinicalNotes: 'Prophylactic antibiotics are not indicated for submersion injury except in highly contaminated water. Most patients with mild submersion injury recover fully without sequelae. Lung-protective ventilation strategies should be used if mechanical ventilation is required.',
    },
  },

  media: [],
  citations: [
    {
      id: 'submersion-guidelines',
      type: 'article',
      title: 'Submersion Injury: Epidemiology and Management',
      source: 'Pediatric Emergency Care',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-drowning', targetType: 'condition', relationship: 'related', label: 'Drowning' },
  ],
  tags: {
    systems: ['respiratory'],
    topics: ['wilderness-medicine', 'emergency-medicine'],
    keywords: ['submersion', 'drowning', 'aspiration', 'pulmonary edema'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default submersionInjury;
