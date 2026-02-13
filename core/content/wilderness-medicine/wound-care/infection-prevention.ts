/**
 * Infection Prevention - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const infectionPrevention: EducationalContent = {
  id: 'wilderness-infection-prevention',
  type: 'concept',
  name: 'Wound Infection Prevention',
  alternateNames: ['Wound Antisepsis', 'Prophylaxis'],

  levels: {
    1: {
      level: 1,
      summary: 'Keeping wounds clean is the best way to prevent infection. Wash wounds with clean water, keep them covered, and watch for signs of infection like redness, swelling, and pus.',
      explanation: `## Preventing Wound Infections

Infections happen when germs get into wounds. Good wound care can prevent most infections.

## How to Prevent Infection
1. **Wash the wound well** with clean water
2. **Remove dirt** and debris
3. **Cover with clean bandage**
4. **Change bandages** when dirty or wet
5. **Keep the wound clean**

## Signs of Infection
- Increasing redness around wound
- Swelling getting worse
- Pus (thick, yellow/green fluid)
- Fever
- Red streaks from wound

## When to Get Help
- Signs of infection
- Wound was very dirty
- Animal or human bites
- Deep puncture wounds
- Wound not healing`,
      keyTerms: [
        { term: 'infection', definition: 'When germs grow in a wound causing harm' },
        { term: 'pus', definition: 'Thick fluid that forms when the body fights infection' },
      ],
    },
    2: {
      level: 2,
      summary: 'Wound infection prevention relies primarily on proper irrigation rather than antibiotics. Tetanus prophylaxis is important for dirty wounds. Signs of infection require medical evaluation and possible antibiotic treatment.',
      explanation: `## Infection Prevention Strategies

### Most Important: Irrigation
- Copious amounts of water
- Removes bacteria mechanically
- More effective than antiseptics
- Clean potable water acceptable

### Wound Care
- Remove foreign material
- Debride devitalized tissue
- Appropriate closure decision
- Clean, dry dressing

### Antiseptics
- Not required for most wounds
- May delay healing in some cases
- Povidone-iodine dilute (1%) acceptable
- Hydrogen peroxide not recommended

## Tetanus Prevention
- Clean wounds: update if >10 years
- Dirty wounds: update if >5 years
- Unknown status: treat as unvaccinated

## Signs of Infection
- Erythema spreading beyond wound
- Purulent discharge
- Increasing pain after day 2
- Fever
- Lymphangitis (red streaks)

## Antibiotic Prophylaxis
Generally NOT needed for:
- Simple lacerations
- Abrasions
- Most clean wounds

Consider for:
- Bite wounds
- Heavily contaminated wounds
- Through-and-through oral wounds
- Immunocompromised patients`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Treatment to prevent a problem before it occurs' },
        { term: 'lymphangitis', definition: 'Red streaks from infection spreading through lymph vessels' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based infection prevention emphasizes mechanical cleaning over antiseptics or antibiotics. Risk stratification guides prophylactic antibiotic use. Recognition of early infection enables timely treatment.',
      explanation: `## Evidence for Irrigation

### Mechanism
- Mechanical removal of bacteria
- Dilution of bacterial inoculum
- Foreign body removal
- Most effective at reducing infection

### Optimal Parameters
- Volume: 50-100mL per cm wound
- Pressure: 8-10 psi
- Fluid: potable water equivalent to saline
- Antiseptic additives: not beneficial

## Risk Stratification

### High-Risk Wounds
- Bite wounds
- Crush injuries
- Contaminated wounds
- Puncture wounds
- Delayed presentation
- Immunocompromised host

### Low-Risk Wounds
- Sharp, clean lacerations
- Early presentation
- Healthy host
- Minimal contamination

## Antibiotic Selection

### Bite Wounds
- Dog/cat: amoxicillin-clavulanate
- Human: same + consider Eikenella coverage
- Duration: 3-5 days prophylaxis

### Environmental
- Freshwater: cover Aeromonas (fluoroquinolone)
- Saltwater: cover Vibrio (doxycycline + fluoroquinolone)
- Soil contamination: cover Clostridium

## Tetanus Protocol
| Wound Type | <3 doses or unknown | 3+ doses |
|------------|---------------------|----------|
| Clean, minor | Td + start series | Td if >10 years |
| Other wounds | Td + TIG + start series | Td if >5 years |

## Infection Recognition
- Timing: infection typically >24-48 hours
- Early erythema is inflammatory, not infection
- Purulence suggests infection
- Systemic symptoms indicate serious infection`,
      keyTerms: [
        { term: 'TIG', definition: 'Tetanus immune globulin - provides immediate passive immunity' },
        { term: 'Td', definition: 'Tetanus-diphtheria vaccine booster' },
      ],
      clinicalNotes: 'Erythema in first 24 hours is usually inflammatory, not infectious. Prophylactic antibiotics do not substitute for adequate wound care. Most simple lacerations do not require prophylactic antibiotics.',
    },
    4: {
      level: 4,
      summary: 'Wound infection prevention integrates mechanical cleaning, appropriate closure, and selective antibiotic prophylaxis. Evidence does not support routine antibiotics for simple wounds. Risk assessment guides intervention intensity. Early infection recognition enables appropriate treatment.',
      explanation: `## Infection Pathophysiology

### Inoculum and Host Factors
- Bacterial load: >10^5 organisms/gram increases infection
- Virulence factors
- Foreign body effect
- Host immune status
- Tissue perfusion

### Timeline
- Colonization: bacteria present
- Infection: tissue invasion and response
- Critical period: first 6-8 hours
- Established infection: >24-48 hours

## Evidence for Interventions

### Irrigation
- Reduces infection rates significantly
- Tap water equivalent to saline
- Pressure more important than volume
- Antiseptics provide no added benefit

### Antibiotic Prophylaxis
| Wound Type | Evidence | Recommendation |
|------------|----------|----------------|
| Simple laceration | No benefit | Not recommended |
| Dog bite (hand) | Modest benefit | Consider |
| Cat bite | Clear benefit | Recommended |
| Human bite | Some benefit | Recommended |

### Antiseptics
- Povidone-iodine: cytotoxic to fibroblasts
- Chlorhexidine: less cytotoxic
- Neither superior to saline for irrigation
- May use for surrounding skin prep

## Advanced Considerations

### Biofilm
- Bacterial communities
- Resistant to antibiotics
- Chronic wound issue
- Requires debridement

### MRSA Considerations
- Community prevalence increasing
- Purulent wound infections
- Consider TMP-SMX or doxycycline
- Culture and sensitivity guide therapy

## Wilderness Adaptations
- Water purification for irrigation
- Limited antibiotic options
- Evacuation triggers
- Wound monitoring protocols`,
      keyTerms: [
        { term: 'biofilm', definition: 'Organized bacterial communities resistant to standard treatment' },
        { term: 'critical colonization', definition: 'Bacterial presence impairing healing without overt infection' },
      ],
      clinicalNotes: 'Meta-analyses do not support prophylactic antibiotics for simple lacerations. Cat bites have highest infection rate and benefit most from prophylaxis. MRSA should be considered in purulent infections.',
    },
    5: {
      level: 5,
      summary: 'Wound infection prevention science integrates microbiology, host response, and evidence-based interventions. Mechanical cleaning reduces bacterial inoculum more effectively than antiseptics. Antibiotic stewardship principles apply to prophylaxis decisions. Emerging pathogens and resistance patterns inform treatment selection.',
      explanation: `## Microbiology of Wound Infection

### Normal Skin Flora
- Coagulase-negative Staphylococci
- Corynebacterium
- Propionibacterium
- Potential pathogens in low numbers

### Wound Pathogens
- S. aureus (including MRSA)
- Streptococcus pyogenes
- Gram-negative rods
- Anaerobes (contaminated wounds)
- Environmental organisms

### Inoculum Threshold
- Classic: 10^5 CFU/gram
- Lower for virulent organisms
- Lower with foreign body
- Host factors modify threshold

## Evidence Synthesis

### Cochrane Reviews
- Wound irrigation: tap water acceptable
- Prophylactic antibiotics: not for simple laceration
- Antiseptics: no clear benefit for wound irrigation

### Specific Wound Types
| Type | NNT for Prophylaxis |
|------|---------------------|
| Simple laceration | No benefit |
| Dog bite (all) | 14 |
| Dog bite (hand) | 4 |
| Cat bite | 3 |
| Human bite | 4 |

## Antimicrobial Stewardship

### Principles Applied
- Avoid unnecessary antibiotics
- Use narrow spectrum when possible
- Appropriate duration
- Consider resistance patterns

### Emerging Concerns
- MRSA in community wounds
- ESBL-producing organisms
- C. difficile from antibiotic use
- Resistance selection pressure

## Future Directions

### Novel Approaches
- Antimicrobial dressings
- Negative pressure therapy
- Biofilm disruption strategies
- Host defense enhancement

### Wilderness Applications
- Risk-based decision algorithms
- Limited formulary optimization
- Telemedicine consultation
- Point-of-care diagnostics`,
      keyTerms: [
        { term: 'NNT', definition: 'Number needed to treat - patients treated per outcome prevented' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase producing bacteria with broad resistance' },
      ],
      clinicalNotes: 'Antibiotic prophylaxis decisions should consider local resistance patterns. The NNT data helps guide prophylaxis decisions based on wound type. Antimicrobial stewardship applies even in wilderness medicine.',
    },
  },

  media: [],
  citations: [
    {
      id: 'wound-infection-prevention',
      type: 'article',
      title: 'Prevention of Wound Infection',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-wound-care', targetType: 'concept', relationship: 'parent', label: 'Wound Care' },
  ],
  tags: {
    systems: ['integumentary', 'immunologic'],
    topics: ['wilderness-medicine', 'infectious-disease'],
    keywords: ['infection', 'wound care', 'antibiotics', 'tetanus'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default infectionPrevention;
