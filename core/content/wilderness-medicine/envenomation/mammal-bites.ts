/**
 * Mammal Bites - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const mammalBites: EducationalContent = {
  id: 'wilderness-mammal-bites',
  type: 'condition',
  name: 'Mammal Bites',
  alternateNames: ['Animal Bites', 'Dog Bites', 'Cat Bites'],

  levels: {
    1: {
      level: 1,
      summary: 'Animal bites can cause infections and may carry rabies. Wash all bites with soap and water immediately. See a doctor for deep bites or if the animal might have rabies.',
      explanation: `## Animal Bites

Bites from dogs, cats, and wild animals can be serious because of infection risk.

## What to Do Right Away
- Wash the bite with soap and water for at least 5 minutes
- Control bleeding with pressure
- Cover with clean bandage
- See a doctor

## When to Get Help Immediately
- Deep or large wounds
- Bites on face, hands, or feet
- Animal acting strangely (possible rabies)
- Wild animal bite (bat, raccoon, skunk, fox)
- Heavy bleeding

## About Rabies
- Rabies is very serious and can be fatal
- Bats, raccoons, skunks, and foxes can carry rabies
- Pets should be vaccinated
- Treatment must start before symptoms appear`,
      keyTerms: [
        { term: 'rabies', definition: 'A deadly disease spread by animal bites' },
        { term: 'infection', definition: 'When germs get into a wound and cause problems' },
      ],
    },
    2: {
      level: 2,
      summary: 'Mammal bites carry infection risk from oral bacteria and potential rabies exposure. Dog bites are most common, but cat bites have higher infection rates. Management includes wound care, antibiotics for high-risk wounds, and rabies assessment.',
      explanation: `## Types of Mammal Bites

### Dog Bites
- Most common mammal bite
- Crush and tear injuries
- Infection rate ~15-20%

### Cat Bites
- Deep puncture wounds
- Infection rate ~30-50%
- Pasteurella multocida common

### Human Bites
- High infection risk
- Eikenella corrodens
- "Fight bite" over knuckles serious

### Wild Animal Bites
- Rabies risk assessment critical
- Wound infection concerns

## Wound Management
- Copious irrigation
- Debridement if needed
- Primary closure for most dog bites
- Leave cat bites open
- Tetanus prophylaxis

## Antibiotics
- Not all bites need antibiotics
- High risk: hand, face, deep punctures, immunocompromised
- First-line: amoxicillin-clavulanate

## Rabies Assessment
- Animal type and behavior
- Vaccination status of animal
- Geographic rabies prevalence
- Consult public health`,
      keyTerms: [
        { term: 'Pasteurella', definition: 'Bacteria found in cat and dog mouths that causes infection' },
        { term: 'prophylaxis', definition: 'Treatment to prevent disease before it occurs' },
      ],
    },
    3: {
      level: 3,
      summary: 'Mammal bite management involves wound care, infection prevention, and rabies risk assessment. Bite bacteriology is polymicrobial with Pasteurella, streptococci, staphylococci, and anaerobes. Antibiotic prophylaxis is indicated for high-risk wounds. Rabies post-exposure prophylaxis is time-sensitive.',
      explanation: `## Wound Characteristics by Animal

### Dog Bites
- Crush/avulsion injuries
- Fractures possible in children
- Lower infection rate than cat

### Cat Bites
- Deep puncture wounds
- Penetrate joints, tendons
- High infection rate (Pasteurella)
- Rapid symptom onset (12-24 hrs)

### Human Bites
- Polymicrobial (oral flora)
- Eikenella corrodens
- Anaerobes
- "Clenched fist" injuries high risk

## Bacteriology
- Pasteurella multocida: cats, dogs
- Streptococcus species
- Staphylococcus aureus (including MRSA)
- Anaerobes (Bacteroides, Fusobacterium)
- Capnocytophaga canimorsus (dog saliva)

## Management

### Wound Care
- High-pressure irrigation
- Debridement
- Closure: primary for most dog bites, delayed for cat/human

### Antibiotic Prophylaxis Indications
- Moderate to severe bites
- Puncture wounds
- Crush injuries
- Hand, face, genital bites
- Immunocompromised host

### Rabies Decision
- Unprovoked attack
- Animal behavior
- Species and geographic factors
- Observation vs euthanasia/testing`,
      keyTerms: [
        { term: 'Capnocytophaga', definition: 'Bacteria from dog saliva causing severe sepsis in immunocompromised' },
        { term: 'high-pressure irrigation', definition: 'Forceful wound washing to remove bacteria and debris' },
      ],
      clinicalNotes: 'Cat bites to the hand are high risk for deep space infection. Capnocytophaga can cause fulminant sepsis in asplenic patients. Amoxicillin-clavulanate covers typical bite pathogens.',
    },
    4: {
      level: 4,
      summary: 'Mammal bite infections involve complex polymicrobial bacteriology. Management integrates wound assessment, irrigation, selective closure, and appropriate antimicrobial coverage. Rabies post-exposure prophylaxis protocols balance infection risk against treatment burden.',
      explanation: `## Detailed Bacteriology

### Oral Flora Considerations
| Animal | Key Organisms |
|--------|---------------|
| Dog | Pasteurella, Capnocytophaga, Streptococcus |
| Cat | Pasteurella multocida (75%), Bartonella |
| Human | Eikenella, Streptococcus, Anaerobes |
| Bat | Rabies virus (primary concern) |

### Capnocytophaga canimorsus
- Gram-negative rod
- Dog/cat saliva
- Risk factors: asplenia, alcoholism, immunocompromise
- Fulminant sepsis with DIC
- High mortality if delayed treatment

## Wound Management Decisions

### Closure
- Primary closure: face, most dog bites <12hrs
- Delayed primary: high-risk wounds
- No closure: cat bites, punctures, crush injuries

### Antibiotics
- Prophylaxis: 3-5 days for high-risk
- Treatment: 7-14 days for established infection
- Agent: amoxicillin-clavulanate
- PCN allergy: fluoroquinolone + clindamycin

## Rabies Post-Exposure Prophylaxis

### Decision Factors
- Animal type (bat, raccoon, skunk, fox highest risk)
- Geographic factors
- Provoked vs unprovoked
- Animal available for testing?

### Protocol
- Wound irrigation and care
- HRIG: 20 IU/kg infiltrated at wound
- Vaccine: 4-dose series (days 0, 3, 7, 14)`,
      keyTerms: [
        { term: 'HRIG', definition: 'Human rabies immune globulin - provides immediate passive immunity' },
        { term: 'post-exposure prophylaxis', definition: 'Treatment after exposure to prevent disease' },
      ],
      clinicalNotes: 'Any bat exposure (even without visible bite) may warrant rabies PEP as bat bites can be undetected. Wound infiltration of HRIG is critical for preventing rabies at exposure site.',
    },
    5: {
      level: 5,
      summary: 'Mammal bite management integrates evidence-based wound care, antimicrobial selection for polymicrobial infections, and rabies risk assessment using epidemiological and clinical factors. Emerging pathogens and antimicrobial resistance require awareness. Rabies PEP protocols are highly effective when administered appropriately.',
      explanation: `## Advanced Bacteriology

### Molecular Identification
- 16S rRNA sequencing reveals diverse flora
- Culture-negative infections common
- Biofilm formation in deep bites

### Emerging Considerations
- MRSA in bite wounds
- ESBL-producing organisms
- Pasteurella resistance patterns

## Evidence-Based Antimicrobial Therapy

### Meta-Analysis Findings
- Prophylactic antibiotics reduce infection
- NNT: ~14 for dog bites, ~4 for cat bites
- Hand bites benefit most

### Alternative Regimens
| Scenario | Regimen |
|----------|---------|
| Standard | Amoxicillin-clavulanate 875/125 BID |
| PCN allergy | Moxifloxacin OR doxycycline + metronidazole |
| Severe infection | Piperacillin-tazobactam OR ampicillin-sulbactam |

## Rabies Pathophysiology
- Neurotropic RNA virus
- Centripetal spread via peripheral nerves
- Replication in dorsal root ganglia
- CNS dissemination
- Centrifugal spread (salivary glands)
- Invariably fatal once symptomatic

## PEP Efficacy
- >99% effective if administered properly
- Failures attributed to:
  - Wound not infiltrated with HRIG
  - Severe head wounds (short incubation)
  - Delayed initiation

## Special Populations
- Immunocompromised: higher infection risk, check antibody response to vaccine
- Asplenia: Capnocytophaga risk, consider prophylaxis after any dog bite
- Pregnancy: rabies PEP safe, indicated if exposure`,
      keyTerms: [
        { term: 'neurotropic', definition: 'Having affinity for nerve tissue' },
        { term: 'centripetal spread', definition: 'Movement toward the central nervous system' },
      ],
      clinicalNotes: 'Rabies vaccine should be given regardless of interval from exposure. HRIG should not be administered after day 7 of vaccine series. Asplenic patients should receive antibiotic prophylaxis after any dog or cat bite due to Capnocytophaga risk.',
    },
  },

  media: [],
  citations: [
    {
      id: 'mammal-bite-management',
      type: 'article',
      title: 'Management of Mammalian Bite Wounds',
      source: 'Clinical Infectious Diseases',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-rabies-exposure', targetType: 'condition', relationship: 'related', label: 'Rabies Exposure' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['wilderness-medicine', 'infectious-disease', 'emergency-medicine'],
    keywords: ['animal bite', 'dog bite', 'cat bite', 'rabies', 'Pasteurella'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mammalBites;
