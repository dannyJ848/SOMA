/**
 * Rabies Exposure - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const rabiesExposure: EducationalContent = {
  id: 'wilderness-rabies-exposure',
  type: 'condition',
  name: 'Rabies Exposure',
  alternateNames: ['Rabies Post-Exposure', 'Potential Rabies Exposure'],

  levels: {
    1: {
      level: 1,
      summary: 'Rabies is a deadly disease spread by animal bites. If you are bitten by a wild animal or an animal that might have rabies, wash the wound and get medical help right away. Treatment works if started before symptoms appear.',
      explanation: `## What Is Rabies?

Rabies is a very serious virus that affects the brain. It is spread through bites from infected animals. Without treatment, rabies is almost always fatal.

## Animals That Can Spread Rabies
- Bats (most common in US)
- Raccoons
- Skunks
- Foxes
- Stray or wild dogs and cats

## What to Do After a Bite
1. Wash the wound with soap and water for 15 minutes
2. Get medical help right away
3. Report the bite to animal control
4. The animal may need to be tested

## Treatment
- Shots can prevent rabies if given soon after the bite
- Treatment is very effective if started before symptoms
- Once symptoms appear, rabies cannot be treated`,
      keyTerms: [
        { term: 'rabies', definition: 'A deadly virus that affects the brain, spread by animal bites' },
        { term: 'post-exposure prophylaxis', definition: 'Treatment given after exposure to prevent disease' },
      ],
    },
    2: {
      level: 2,
      summary: 'Rabies exposure requires urgent assessment and post-exposure prophylaxis (PEP) if indicated. High-risk animals include bats, raccoons, skunks, and foxes. PEP includes wound care, rabies immune globulin, and vaccine series. Treatment is nearly 100% effective if given before symptoms.',
      explanation: `## Understanding Rabies Risk

### High-Risk Animals
- Bats (primary US source)
- Raccoons, skunks, foxes, coyotes
- Dogs/cats (in countries with endemic rabies)
- Any wild carnivore

### Lower-Risk Animals
- Small rodents (rats, mice, squirrels)
- Rabbits
- Generally do not require PEP

## Exposure Types
- Bite: highest risk
- Scratch with bleeding
- Mucous membrane exposure to saliva
- Bat found in room with sleeping person

## Post-Exposure Prophylaxis (PEP)

### Wound Care
- Immediate thorough washing with soap and water
- May reduce rabies risk by 90%

### PEP Components
1. Rabies Immune Globulin (RIG): given once at wound site
2. Rabies Vaccine: 4 doses over 14 days

### When to Give PEP
- Bite from high-risk animal
- Bat exposure (even without visible bite)
- Unknown animal that cannot be tested
- Animal tests positive for rabies`,
      keyTerms: [
        { term: 'post-exposure prophylaxis', definition: 'Treatment given after exposure to prevent disease' },
        { term: 'rabies immune globulin', definition: 'Antibodies that provide immediate protection against rabies' },
      ],
    },
    3: {
      level: 3,
      summary: 'Rabies is a neurotropic rhabdovirus with nearly 100% fatality once symptomatic. Post-exposure prophylaxis combines passive immunization (RIG) with active immunization (vaccine). PEP is highly effective when administered promptly with proper wound infiltration of RIG.',
      explanation: `## Rabies Virology

### Pathogen
- Lyssavirus genus
- Bullet-shaped RNA virus
- Glycoprotein (G protein) primary immunogen
- Neurotropic: targets nervous system

### Transmission
- Saliva from infected animal
- Bite exposure (primary route)
- Rarely: scratch, mucous membrane, aerosol (cave bats)

## Pathophysiology

### Incubation Period
- Variable: 20 days to >1 year
- Average: 1-3 months
- Shorter with head/face wounds
- Longer with distal extremity wounds

### Disease Progression
- Virus replicates at wound site
- Peripheral nerve entry
- Centripetal spread to CNS
- CNS replication
- Centrifugal spread (salivary glands)

## PEP Protocol

### Unvaccinated Individuals
- Day 0: wound care, RIG (20 IU/kg), vaccine dose 1
- Days 3, 7, 14: vaccine doses 2-4

### RIG Administration
- Infiltrate wound site completely
- Any remaining volume: IM at distant site
- Do not exceed 20 IU/kg
- Do not give after day 7 of vaccine series

### Previously Vaccinated
- Days 0 and 3: vaccine only
- No RIG needed`,
      keyTerms: [
        { term: 'rhabdovirus', definition: 'Family of bullet-shaped viruses including rabies' },
        { term: 'centripetal spread', definition: 'Virus movement toward central nervous system' },
      ],
      clinicalNotes: 'Wound infiltration with RIG is critical - studies show failure primarily with inadequate wound infiltration. PEP can be started at any interval after exposure if symptoms have not developed.',
    },
    4: {
      level: 4,
      summary: 'Rabies pathophysiology involves retrograde axonal transport to CNS with fatal encephalitis. PEP efficacy depends on wound care, proper RIG infiltration, and timely vaccine series. Risk assessment integrates epidemiologic factors, animal behavior, and exposure type.',
      explanation: `## Detailed Pathophysiology

### Molecular Mechanisms
- G protein binds nicotinic acetylcholine receptor
- Additional receptors: NCAM, p75NTR
- Dynein-mediated retrograde transport
- Replication in dorsal root ganglia
- Spread to CNS via spinal cord

### CNS Infection
- Limbic system involvement (behavioral changes)
- Brainstem: autonomic dysfunction
- Negri bodies (intracytoplasmic inclusions)
- Neuronal dysfunction > cell death

## Risk Assessment Framework

### Animal Factors
| Animal | Geographic | Action |
|--------|------------|--------|
| Bat | Everywhere | PEP unless testing negative |
| Raccoon/skunk/fox | Endemic areas | PEP unless testing negative |
| Dog/cat | US | Observe 10 days if healthy |
| Dog/cat | Endemic countries | Consider PEP |
| Rodents | Low risk | Rarely PEP |

### Exposure Factors
- Bite vs scratch vs mucous membrane
- Depth and location of wound
- Multiple wounds higher risk
- Head/face: shorter incubation

## PEP Failures
- Rare if properly administered
- Causes:
  - Inadequate wound infiltration of RIG
  - Severe head wounds (short incubation)
  - Delayed presentation
  - Immunocompromise (check titers)

## Clinical Rabies
- Prodrome: pain at wound site, fever
- Encephalitic (80%): agitation, hydrophobia
- Paralytic (20%): ascending paralysis
- Coma and death typically within 2 weeks`,
      keyTerms: [
        { term: 'hydrophobia', definition: 'Fear of water due to painful pharyngeal spasms, pathognomonic for rabies' },
        { term: 'Negri bodies', definition: 'Intracytoplasmic inclusions diagnostic of rabies' },
      ],
      clinicalNotes: 'The 10-day observation for dogs/cats is based on viral shedding studies - an animal does not shed virus until shortly before death. Immunocompromised patients should have antibody titers checked after PEP.',
    },
    5: {
      level: 5,
      summary: 'Rabies represents a nearly universally fatal neurotropic infection preventable by timely post-exposure prophylaxis. Molecular understanding of viral neurotropism informs the critical timing of PEP. Emerging challenges include bat-associated variants and global elimination strategies.',
      explanation: `## Molecular Pathogenesis

### Viral Entry Mechanisms
- G protein: primary receptor binding
- Nicotinic acetylcholine receptor (nAChR): neuromuscular junction
- Neural cell adhesion molecule (NCAM)
- p75 neurotrophin receptor (p75NTR)
- Low-affinity receptor binding at wound site

### Axonal Transport
- Dynein motor proteins
- Retrograde transport rate: 12-24mm/day
- Incubation proportional to distance from CNS

### CNS Pathology
- Minimal cytopathology despite severe symptoms
- Ion channel dysfunction
- Neurotransmitter abnormalities
- Apoptosis minimal (virus preservation strategy)

## Evidence Base for PEP

### Wound Washing
- 90% risk reduction in animal studies
- 15 minutes with soap and water
- Viricidal agents (povidone-iodine) beneficial

### RIG
- Provides immediate passive immunity
- Half-life: 21 days
- Bridges gap until active immunity
- Must infiltrate wound site for efficacy

### Vaccine
- Cell culture vaccines highly immunogenic
- 4-dose schedule validated
- Day 28 dose no longer recommended

## Emerging Considerations

### Bat-Associated Variants
- Primary US human cases
- Bat exposure often unrecognized
- Any bat contact warrants PEP unless tested

### Global Rabies Elimination
- Dog rabies elimination feasible
- 70% vaccination coverage target
- WHO 2030 elimination goal

### Milwaukee Protocol
- Attempted cure for clinical rabies
- Induced coma, antivirals
- Limited success, high morbidity
- Not recommended as standard

## Special Populations

### Immunocompromise
- Standard PEP indicated
- Check antibody titers at day 14
- May need additional doses
- Consider concurrent IVIG

### Pregnancy
- PEP safe and indicated
- Fetal rabies fatal
- No evidence of vaccine teratogenicity`,
      keyTerms: [
        { term: 'Milwaukee Protocol', definition: 'Attempted treatment for clinical rabies using induced coma' },
        { term: 'dynein', definition: 'Motor protein responsible for retrograde axonal transport of rabies' },
      ],
      clinicalNotes: 'Human rabies is invariably fatal once clinical disease develops, with rare exceptions. PEP should never be withheld due to delay - it can be started at any interval post-exposure if symptoms have not developed. The Milwaukee Protocol has very limited success and high morbidity.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acip-rabies',
      type: 'article',
      title: 'ACIP Recommendations for Rabies Prevention',
      source: 'MMWR',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-mammal-bites', targetType: 'condition', relationship: 'related', label: 'Mammal Bites' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['wilderness-medicine', 'infectious-disease', 'emergency-medicine'],
    keywords: ['rabies', 'post-exposure prophylaxis', 'animal bite', 'vaccine'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rabiesExposure;
