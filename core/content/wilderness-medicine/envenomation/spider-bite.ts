/**
 * Spider Bite - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const spiderBite: EducationalContent = {
  id: 'wilderness-spider-bite',
  type: 'condition',
  name: 'Spider Bite',
  alternateNames: ['Arachnid Envenomation'],

  levels: {
    1: {
      level: 1,
      summary: 'Most spider bites are harmless and cause only minor swelling. The two dangerous spiders in the US are the black widow and brown recluse. Seek medical help if you have severe symptoms.',
      explanation: `## Spider Bites

Most spiders cannot bite through human skin, and most bites cause only minor irritation.

## Dangerous Spiders in the US
- **Black Widow**: shiny black with red hourglass mark
- **Brown Recluse**: brown with violin shape on back

## When to Get Help
- Severe pain or cramping
- Spreading redness or wound
- Fever
- Difficulty breathing
- Muscle spasms

## What to Do
- Wash the bite with soap and water
- Apply ice to reduce swelling
- Take pain medicine if needed
- See a doctor if symptoms are severe`,
      keyTerms: [
        { term: 'envenomation', definition: 'When venom enters your body from a bite' },
        { term: 'antivenom', definition: 'Medicine that helps stop venom from causing harm' },
      ],
    },
    2: {
      level: 2,
      summary: 'Clinically significant spider bites in North America come from black widow and brown recluse spiders. Black widow venom causes muscle pain and spasms. Brown recluse venom causes tissue death at the bite site.',
      explanation: `## Medically Significant Spiders

### Black Widow (Latrodectus)
- Found throughout US
- Shiny black with red hourglass
- Venom causes severe muscle cramps

**Symptoms:**
- Initial pinprick sensation
- Muscle cramps (often abdominal)
- Sweating, nausea
- High blood pressure
- Severe pain

### Brown Recluse (Loxosceles)
- Found in south-central US
- Brown with violin marking
- Venom destroys tissue

**Symptoms:**
- May not notice bite initially
- Develops into painful wound
- Central blistering or darkening
- Slow-healing ulcer

## Treatment
- Clean wound
- Ice application
- Pain management
- Tetanus update
- Seek medical care for severe symptoms`,
      keyTerms: [
        { term: 'latrodectism', definition: 'Syndrome of symptoms from black widow bite' },
        { term: 'necrosis', definition: 'Death of tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'Latrodectus (black widow) envenomation causes neuromuscular symptoms from alpha-latrotoxin. Loxosceles (brown recluse) envenomation causes dermonecrosis from sphingomyelinase D. Management is primarily supportive with antivenom reserved for severe black widow envenomation.',
      explanation: `## Pathophysiology

### Black Widow (Latrodectus)
- Alpha-latrotoxin causes massive neurotransmitter release
- Acetylcholine and norepinephrine release
- Muscle cramping and autonomic effects
- No local necrosis

### Brown Recluse (Loxosceles)
- Sphingomyelinase D causes membrane disruption
- Complement activation
- Neutrophil-mediated tissue destruction
- Dermonecrotic lesion development

## Clinical Presentation

### Latrodectism
- Local: minimal, pinprick
- Systemic: muscle cramps (especially abdominal)
- Hypertension, tachycardia
- Diaphoresis
- Severe cases: respiratory compromise

### Loxoscelism
- Local: erythema, then blister/eschar
- Dermonecrosis (days)
- Systemic (rare): hemolysis, DIC

## Management

### Black Widow
- Supportive care
- Pain management (opioids, benzodiazepines)
- Antivenom for severe cases
- Blood pressure management

### Brown Recluse
- Wound care
- No debridement early
- Delayed reconstruction if needed
- Dapsone not recommended`,
      keyTerms: [
        { term: 'alpha-latrotoxin', definition: 'Black widow venom component causing neurotransmitter release' },
        { term: 'sphingomyelinase D', definition: 'Brown recluse enzyme causing tissue destruction' },
      ],
      clinicalNotes: 'Black widow antivenom is effective but reserved for severe cases due to serum sickness risk. Many suspected "spider bites" are actually other conditions (MRSA, etc.).',
    },
    4: {
      level: 4,
      summary: 'Spider envenomation pathophysiology involves species-specific toxins with distinct mechanisms. Latrodectus venom causes presynaptic neurotransmitter release while Loxosceles venom triggers complement-mediated dermonecrosis. Evidence-based management addresses symptom control and considers antivenom risk-benefit.',
      explanation: `## Detailed Pathophysiology

### Alpha-Latrotoxin Mechanism
- Binds presynaptic receptors
- Forms membrane pores
- Massive Ca2+ influx
- Neurotransmitter depletion
- Affects motor and autonomic neurons

### Sphingomyelinase D Mechanism
- Hydrolyzes membrane sphingomyelin
- Generates ceramide-1-phosphate
- Complement activation
- Neutrophil chemotaxis
- Endothelial injury and thrombosis

## Clinical Grading

### Latrodectism Severity
- **Mild**: local symptoms, mild cramping
- **Moderate**: significant muscle pain, diaphoresis
- **Severe**: respiratory distress, seizures, hypertensive crisis

### Loxoscelism
- **Cutaneous**: local wound only
- **Systemic** (rare): hemolysis, coagulopathy, renal failure

## Management Approach

### Black Widow Antivenom
- Equine-derived IgG
- Rapid symptom relief
- Serum sickness risk (10%)
- Consider for moderate-severe cases

### Brown Recluse Management
- No specific antivenom available
- Conservative wound care
- Avoid early surgery
- Skin grafting if needed (delayed)
- Systemic: supportive care, transfusion`,
      keyTerms: [
        { term: 'latrodectism', definition: 'Clinical syndrome from black widow envenomation' },
        { term: 'loxoscelism', definition: 'Clinical syndrome from brown recluse envenomation' },
      ],
      clinicalNotes: 'Black widow antivenom provides rapid relief but has ~10% serum sickness rate. Brown recluse wounds often blamed on spiders are frequently MRSA infections. Definitive diagnosis requires spider identification.',
    },
    5: {
      level: 5,
      summary: 'Spider envenomation involves complex venom toxins with well-characterized molecular mechanisms. Latrodectus alpha-latrotoxin targets presynaptic terminals while Loxosceles sphingomyelinase D initiates complement-mediated injury. Evidence-based management balances symptom control against treatment risks.',
      explanation: `## Molecular Pathophysiology

### Alpha-Latrotoxin
- 130 kDa protein
- Three receptor types identified
- Neurexin (Ca2+-dependent binding)
- Latrophilin (Ca2+-independent)
- PTP-sigma
- Forms membrane pores (2nm)
- Ca2+ influx depletes neurotransmitters

### Sphingomyelinase D
- Phospholipase D enzyme
- Generates ceramide-1-phosphate, LPA
- Complement activation (C3, C5)
- Neutrophil recruitment
- Endothelial activation
- Microthrombus formation

## Evidence-Based Management

### Black Widow Antivenom Considerations
| Factor | For Antivenom | Against |
|--------|---------------|---------|
| Symptoms | Severe | Mild-moderate |
| Duration | Rapid relief | Self-limited |
| Risks | Minimal | Serum sickness |
| Population | Children, elderly | Young adults |

### Brown Recluse Research
- No FDA-approved antivenom
- Investigational therapies
- Complement inhibition (theoretical)
- Hyperbaric oxygen (not supported)
- Dapsone (not recommended)

## Diagnostic Challenges
- Spider rarely identified
- MRSA mimics brown recluse
- "NOT RECLUSE" mnemonic
- Numerous: multiple lesions unlikely spider
- Occurrence: not in endemic area
- Timing: chronic non-healing

## Outcomes
- Black widow: full recovery typical
- Brown recluse: scarring common
- Systemic loxoscelism: rare but serious
- Psychiatric sequelae possible`,
      keyTerms: [
        { term: 'neurexin', definition: 'Presynaptic receptor for alpha-latrotoxin' },
        { term: 'latrophilin', definition: 'G-protein coupled receptor for alpha-latrotoxin' },
      ],
      clinicalNotes: 'The "NOT RECLUSE" mnemonic helps avoid misdiagnosis. Most necrotic wounds blamed on brown recluse are actually other diagnoses. Black widow antivenom provides dramatic relief but serum sickness risk requires informed consent.',
    },
  },

  media: [],
  citations: [
    {
      id: 'spider-bite-guidelines',
      type: 'article',
      title: 'Spider Bite Management',
      source: 'Clinical Toxicology',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-envenomation-overview', targetType: 'concept', relationship: 'parent', label: 'Envenomation Overview' },
  ],
  tags: {
    systems: ['neurological', 'integumentary'],
    topics: ['wilderness-medicine', 'toxicology'],
    keywords: ['spider bite', 'black widow', 'brown recluse', 'envenomation'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spiderBite;
