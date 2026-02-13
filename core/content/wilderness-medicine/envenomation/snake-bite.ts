/**
 * Snake Bite - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const snakeBite: EducationalContent = {
  id: 'wilderness-snake-bite',
  type: 'condition',
  name: 'Snake Bite',
  alternateNames: ['Snake Envenomation', 'Ophidian Envenomation'],

  levels: {
    1: {
      level: 1,
      summary: 'Snake bites can be dangerous, but most snakes are not venomous. If bitten, stay calm, get away from the snake, and get medical help. Do not suck out the venom or cut the wound.',
      explanation: `## What to Know About Snake Bites

Most snakes are not dangerous to people. But if you are bitten by a snake, it\'s important to get help.

## What to Do
- Stay calm
- Get away from the snake
- Call for help (911)
- Keep the bitten arm or leg still and below heart level
- Remove rings or tight clothing near the bite
- Do NOT cut the wound or try to suck out venom

## Warning Signs of a Dangerous Bite
- Severe pain and swelling
- Feeling dizzy or sick
- Trouble breathing
- Numbness or tingling`,
      keyTerms: [
        { term: 'venom', definition: 'Poison that some snakes inject when they bite' },
        { term: 'envenomation', definition: 'When venom enters the body from a bite' },
      ],
    },
    2: {
      level: 2,
      summary: 'Snake envenomation occurs when venom is injected during a bite. Effects depend on the snake species and venom type. First aid focuses on immobilization and transport. Antivenom is the definitive treatment for severe envenomation.',
      explanation: `## Understanding Snake Bites

About 20% of venomous snake bites are "dry bites" with no venom injected. When venom is injected, effects vary by snake species.

## Types of Venom
- **Hemotoxic** (pit vipers): affects blood and tissues
- **Neurotoxic** (coral snakes, cobras): affects nervous system
- **Cytotoxic**: destroys tissue locally

## Signs of Envenomation
- Pain and swelling at bite site
- Bruising or bleeding
- Nausea and vomiting
- Numbness or weakness
- Difficulty breathing

## First Aid
- Keep calm and immobilize the limb
- Remove jewelry before swelling
- Mark the edge of swelling with time
- Transport to hospital
- Do NOT: cut, suck, apply tourniquet, or use ice`,
      keyTerms: [
        { term: 'antivenom', definition: 'Medicine that neutralizes snake venom' },
        { term: 'pit viper', definition: 'Snakes like rattlesnakes with heat-sensing pits' },
      ],
    },
    3: {
      level: 3,
      summary: 'Snake envenomation produces local and systemic effects depending on venom composition. Pit viper venom causes tissue destruction and coagulopathy while elapid venom causes neurotoxicity. Management includes supportive care and antivenom for significant envenomation.',
      explanation: `## Pathophysiology

### Pit Viper Envenomation (Rattlesnakes, Copperheads, Cottonmouths)
- Metalloproteinases cause tissue destruction
- Hemorrhagic toxins affect coagulation
- Local necrosis and edema
- Systemic coagulopathy

### Elapid Envenomation (Coral Snakes)
- Neurotoxins block neuromuscular junction
- Delayed onset (hours)
- Minimal local effects
- Progressive paralysis

## Clinical Presentation

### Pit Viper
- Fang marks with local swelling
- Progressive edema
- Ecchymosis, bullae
- Coagulopathy (thrombocytopenia, hypofibrinogenemia)

### Coral Snake
- Minimal local reaction
- Delayed neurological symptoms
- Ptosis, diplopia
- Respiratory paralysis

## Management
- Supportive care
- Serial examinations
- Lab monitoring (coags, CBC, CK, fibrinogen)
- Antivenom for significant envenomation
- Wound care
- Tetanus prophylaxis`,
      keyTerms: [
        { term: 'coagulopathy', definition: 'Abnormal blood clotting caused by venom toxins' },
        { term: 'neuromuscular blockade', definition: 'Interruption of nerve signals to muscles' },
      ],
      clinicalNotes: 'Serial examinations are essential to assess progression. Mark leading edge of swelling with pen and time. Antivenom is effective for coagulopathy but may not reverse established tissue necrosis.',
    },
    4: {
      level: 4,
      summary: 'Snake envenomation pathophysiology involves complex venom toxins affecting coagulation, tissues, and neuromuscular function. Severity grading guides antivenom dosing. Management integrates supportive care, antivenom therapy, and monitoring for compartment syndrome and recurrence.',
      explanation: `## Detailed Pathophysiology

### Pit Viper Venom Components
- **Metalloproteinases**: ECM degradation, hemorrhage
- **Serine proteases**: coagulation cascade effects
- **Phospholipase A2**: membrane disruption
- **Myotoxins**: muscle injury

### Venom-Induced Consumptive Coagulopathy
- Thrombin-like enzymes consume fibrinogen
- Factor activation and consumption
- Platelet destruction
- Hypofibrinogenemia, thrombocytopenia
- Prolonged PT, PTT

## Severity Grading

### Minimal
- Local swelling <15cm
- No systemic symptoms
- Normal labs

### Moderate
- Swelling 15-30cm
- Mild systemic symptoms
- Abnormal labs (mild)

### Severe
- Swelling >30cm or progressing rapidly
- Severe systemic symptoms
- Significant coagulopathy

## Antivenom Therapy
- Fab antivenom (CroFab): neutralizes venom
- Initial control dose (4-6 vials)
- Repeat if progression
- Maintenance dosing
- Monitor for serum sickness

## Complications
- Compartment syndrome (rare)
- Recurrent coagulopathy
- Wound infection
- Serum sickness (delayed)`,
      keyTerms: [
        { term: 'Fab antivenom', definition: 'Purified antibody fragments that bind and neutralize venom' },
        { term: 'recurrent coagulopathy', definition: 'Return of clotting abnormalities after initial treatment' },
      ],
      clinicalNotes: 'Recurrent coagulopathy occurs in 50% of patients, usually 2-4 days after treatment. Fasciotomy is rarely needed; elevated compartment pressures often respond to antivenom.',
    },
    5: {
      level: 5,
      summary: 'Snake envenomation involves species-specific venom compositions with complex enzymatic and toxic effects. Evidence-based management utilizes severity assessment, antivenom dosing protocols, and monitoring for venom recurrence. Ongoing research addresses optimal antivenom formulations and dosing strategies.',
      explanation: `## Advanced Pathophysiology

### Venom Proteomics
- Snake venoms contain 50-200 proteins
- Geographic and individual variation
- Age-related venom changes
- Species-specific compositions

### Molecular Mechanisms
- SVMP hemorrhagic activity: BM degradation
- PLA2 isoforms: varied toxicity
- Three-finger toxins: receptor interactions
- Venom-induced consumption coagulopathy (VICC)

## Evidence-Based Antivenom Use

### Crotalinae Polyvalent Immune Fab (CroFab)
- Ovine-derived Fab fragments
- Initial dose: 4-6 vials
- Assessment at 1 hour
- Maintenance: 2 vials at 6, 12, 18 hours

### CroFab Alternatives
- Anavip (F(ab\')2): longer half-life
- May reduce recurrence
- Comparative studies ongoing

## Special Considerations

### Pregnancy
- Envenomation increases fetal risk
- Antivenom appears safe
- Close fetal monitoring

### Coagulopathy Management
- Antivenom first-line
- Blood products if active bleeding
- Avoid FFP unless bleeding
- Recurrence monitoring 3-5 days

### Compartment Syndrome
- Clinical diagnosis difficult
- Direct pressure measurement
- Often responds to antivenom
- Fasciotomy rarely needed

## Outcomes
- Mortality <0.5% with treatment
- Tissue loss correlates with delay
- Long-term pain/weakness possible
- Psychological sequelae`,
      keyTerms: [
        { term: 'SVMP', definition: 'Snake venom metalloproteinase - key enzyme in tissue destruction' },
        { term: 'VICC', definition: 'Venom-induced consumption coagulopathy' },
      ],
      clinicalNotes: 'Time to antivenom is the strongest predictor of outcome. The unified treatment algorithm recommends antivenom for any progression. Anavip may have advantages in reducing recurrent coagulopathy due to longer half-life.',
    },
  },

  media: [],
  citations: [
    {
      id: 'snake-bite-guidelines',
      type: 'article',
      title: 'Unified Treatment Algorithm for Crotaline Snakebite',
      source: 'Journal of Medical Toxicology',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-envenomation-overview', targetType: 'concept', relationship: 'parent', label: 'Envenomation Overview' },
  ],
  tags: {
    systems: ['hematologic', 'neurological'],
    topics: ['wilderness-medicine', 'toxicology'],
    keywords: ['snake bite', 'envenomation', 'antivenom', 'coagulopathy'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default snakeBite;
