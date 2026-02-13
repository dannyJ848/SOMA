/**
 * Sepsis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const sepsis: EducationalContent = {
  id: 'condition-sepsis',
  type: 'condition',
  name: 'Sepsis',
  nameEs: 'Sepsis',
  alternateNames: ['Septicemia', 'Blood Poisoning', 'Septic Shock'],
  hpoId: 'HP:0100806',

  levels: {
    1: {
      level: 1,
      summary: 'Sepsis is a life-threatening emergency when your body has an overwhelming response to an infection that can damage organs and cause death.',
      explanation: `Sepsis happens when an infection spreads and your immune system goes into overdrive, causing widespread inflammation that damages your own organs.

**Warning signs:**
- Very high or low temperature
- Rapid heart rate
- Rapid breathing
- Confusion
- Extreme pain or discomfort
- Clammy or sweaty skin

**Sepsis is an emergency!** Get medical help immediately if you suspect sepsis.

**Treatment:**
- IV antibiotics (started immediately)
- IV fluids
- Oxygen
- ICU care for severe cases`,
      keyTerms: [
        { term: 'sepsis', definition: 'Dangerous body-wide response to infection' },
        { term: 'infection', definition: 'When germs invade and multiply in your body' },
      ],
      analogies: ['Sepsis is like your immune system declaring all-out war—but in the process, it damages your own body.'],
      examples: ['A person with pneumonia who becomes confused, has low blood pressure, and is breathing rapidly may have sepsis.'],
    },
    2: {
      level: 2,
      summary: 'Sepsis is life-threatening organ dysfunction from dysregulated host response to infection, defined by SOFA score, with septic shock identified by persistent hypotension and lactate elevation despite fluids.',
      explanation: `## Definitions (Sepsis-3)

**Sepsis:** Infection + SOFA score ≥2 (or increase ≥2 from baseline)
**Septic Shock:** Sepsis + vasopressors needed + lactate >2 mmol/L despite adequate fluid resuscitation

## qSOFA (Quick SOFA)
- Respiratory rate ≥22
- Altered mental status
- Systolic BP ≤100 mmHg
(≥2 criteria suggests sepsis—prompts further evaluation)

## Hour-1 Bundle
1. Measure lactate
2. Obtain blood cultures before antibiotics
3. Administer broad-spectrum antibiotics
4. Begin IV crystalloid 30 mL/kg for hypotension or lactate ≥4
5. Apply vasopressors for MAP <65 after fluids

## Source Control
- Drain abscesses
- Remove infected devices
- Debride necrotic tissue`,
      keyTerms: [
        { term: 'SOFA', definition: 'Sequential Organ Failure Assessment; score quantifying organ dysfunction' },
        { term: 'lactate', definition: 'Blood marker of tissue hypoperfusion' },
        { term: 'source control', definition: 'Removing or draining the infection source' },
      ],
    },
    3: {
      level: 3,
      summary: 'Sepsis pathophysiology involves cytokine storm, endothelial dysfunction, coagulopathy, and mitochondrial dysfunction, with management targeting infection, hemodynamics, and organ support.',
      explanation: `## Pathophysiology
- **PAMPs/DAMPs:** Pathogen and damage molecules trigger innate immunity
- **Cytokine storm:** TNF-α, IL-1, IL-6 release
- **Endothelial dysfunction:** Increased permeability, vasodilation
- **Coagulopathy:** Microvascular thrombosis, DIC
- **Mitochondrial dysfunction:** Impaired oxygen utilization (cytopathic hypoxia)

## Hemodynamic Management
- Crystalloid resuscitation (30 mL/kg initial)
- Norepinephrine first-line vasopressor
- Vasopressin as second agent
- Consider dobutamine if cardiac dysfunction

## Antibiotics
- Broad-spectrum empiric coverage
- De-escalate based on cultures
- Duration typically 7-10 days

## Adjunctive Therapies
- Stress-dose corticosteroids if shock refractory to fluids/vasopressors
- Blood glucose control (target <180 mg/dL)
- VTE prophylaxis
- Lung-protective ventilation if ARDS`,
      keyTerms: [
        { term: 'cytokine storm', definition: 'Excessive inflammatory response damaging host tissues' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation; widespread clotting and bleeding' },
        { term: 'norepinephrine', definition: 'First-line vasopressor for septic shock' },
      ],
      clinicalNotes: 'Every hour delay in antibiotics increases mortality. Procalcitonin can guide antibiotic duration but should not delay initial therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced sepsis care addresses immunoparalysis, biomarker-guided resuscitation, organ support strategies, and post-sepsis syndrome while understanding heterogeneous patient phenotypes.',
      explanation: `## Sepsis Phenotypes
- Hyperinflammatory: High cytokines, mortality benefit from steroids
- Immunosuppressed: HLA-DR low, secondary infections
- Mixed: Features of both

## Biomarker-Guided Care
- Lactate clearance to guide resuscitation
- Procalcitonin for antibiotic duration
- Presepsin, MR-proADM (emerging)

## Immunomodulation
**Corticosteroids:**
- Hydrocortisone 200mg/day for refractory shock
- ADRENAL trial: No mortality benefit but faster shock resolution
- APROCCHSS: Mortality benefit with hydrocortisone + fludrocortisone

**Immunosuppression Phase:**
- GM-CSF, IFN-γ under investigation
- Checkpoint inhibitors for immunoparalysis

## Organ Support
- Lung-protective ventilation (6 mL/kg IBW)
- Conservative fluid strategy after resuscitation
- Early RRT if indicated
- Nutrition within 48 hours`,
      keyTerms: [
        { term: 'immunoparalysis', definition: 'Post-sepsis immune suppression increasing infection risk' },
        { term: 'lactate clearance', definition: 'Rate of lactate decrease; indicates response to resuscitation' },
        { term: 'HLA-DR', definition: 'Monocyte marker; low expression indicates immunosuppression' },
      ],
      clinicalNotes: 'Sepsis is not one disease—phenotype-guided therapy is an active research area. Post-sepsis patients have high long-term mortality and morbidity.',
    },
    5: {
      level: 5,
      summary: 'Precision sepsis medicine integrates transcriptomic profiling, individualized immunotherapy, novel therapeutic targets, and addressing long-term sequelae of sepsis survivors.',
      explanation: `## Transcriptomic Approaches
- Gene expression signatures for phenotyping
- SeptiCyte LAB: FDA-approved sepsis gene panel
- MARS clusters, SRS endotypes

## Emerging Therapies
**Anticoagulation:**
- Antithrombin, recombinant thrombomodulin
- Direct factor Xa inhibitors

**Immunotherapy:**
- Anti-PD-1/PD-L1 for immunoparalysis
- Thymosin α1 (immune stimulant)
- IL-7 (lymphocyte survival)

**Endothelial Protection:**
- Angiopoietin-Tie2 pathway
- Sphingosine-1-phosphate

## Post-Sepsis Syndrome
- Cognitive impairment
- Immune dysfunction
- Physical debility
- Increased long-term mortality
- Rehospitalization risk

## Prevention
- Vaccination (pneumococcal, influenza)
- Infection control
- Early recognition protocols`,
      keyTerms: [
        { term: 'SRS', definition: 'Sepsis Response Signature; transcriptomic classification' },
        { term: 'post-sepsis syndrome', definition: 'Long-term physical, cognitive, and immune consequences of sepsis' },
        { term: 'thrombomodulin', definition: 'Anticoagulant protein under investigation for sepsis-associated coagulopathy' },
      ],
      clinicalNotes: 'Sepsis survivors need long-term follow-up for cognitive, physical, and immune sequelae. Precision immunotherapy based on phenotype is the future but not yet standard care.',
    },
  },

  media: [],
  citations: [{ id: 'ssc-2021', type: 'article', title: 'Surviving Sepsis Campaign Guidelines 2021', source: 'Critical Care Medicine' }],
  crossReferences: [{ targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' }],
  tags: { systems: ['immune'], topics: ['critical care', 'infectious disease'], keywords: ['sepsis', 'septic shock', 'SOFA', 'vasopressors'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sepsis;
