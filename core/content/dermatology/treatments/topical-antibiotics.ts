/**
 * Topical Antibiotics
 *
 * Antibiotic medications applied to the skin to treat bacterial infections.
 */

import { EducationalContent } from '../../types';

export const topicalAntibioticsContent: EducationalContent = {
  id: 'dermatology-treatment-antibiotics',
  type: 'concept',
  name: 'Topical Antibiotics',
  alternateNames: ['Antibiotic Ointments', 'Antibacterial Creams', 'Mupirocin'],

  levels: {
    1: {
      level: 1,
      summary: 'Antibiotic creams are medicines put on the skin to kill bacteria and treat infections like cuts, scrapes, and impetigo.',
      explanation: `## What Are Antibiotic Creams?

Antibiotic creams kill germs (bacteria) on the skin. They help:
- Prevent infection in cuts and scrapes
- Treat infected skin areas
- Stop bacteria from spreading

## When to Use

- Small cuts and scrapes
- Minor burns
- Insect bites that get infected
- Impetigo (honey-colored crusts)
- Before surgery on skin

## Common Types

- Bacitracin
- Neomycin
- Polymyxin B
- Mupirocin (prescription)

## How to Use

1. Clean the area with soap and water
2. Pat dry gently
3. Apply thin layer of cream
4. Cover with bandage if needed
5. Use as directed by doctor

## When to See a Doctor

- Redness spreading
- Pus or drainage
- Fever
- Area getting more painful
- Not improving after a few days`,

      keyTerms: [
        { term: 'Antibiotic', definition: 'Medicine that kills bacteria' },
        { term: 'Bacteria', definition: 'Tiny germs that can cause infection' },
        { term: 'Infection', definition: 'When germs get into the body and cause problems' },
        { term: 'Impetigo', definition: 'A common skin infection with crusty sores' },
      ],
      analogies: [
        'Antibiotic cream is like security guards - they stop bad bacteria from taking over.',
        'Bacteria on skin are like weeds - antibiotic cream pulls them out before they spread.',
      ],
      examples: [
        'Child applies antibiotic ointment to scraped knee',
        'Doctor prescribes mupirocin for impetigo around nose',
        'Surgeon uses antibiotic cream before stitching cut',
      ],
    },

    2: {
      level: 2,
      summary: 'Topical antibiotics treat superficial bacterial skin infections. They have limited penetration and are not effective for deep infections.',
      explanation: `## Common Topical Antibiotics

**Combination Products (OTC):**
- Neomycin/Polymyxin B/Bacitracin (Neosporin)
- Polymyxin B/Bacitracin (Polysporin)
- Bacitracin only

**Prescription:**
- Mupirocin (Bactroban)
- Retapamulin (Altabax)
- Ozenoxacin (Xepi)

## Spectrum of Activity

**Gram-positive coverage:**
- Staphylococcus aureus
- Streptococcus pyogenes
- Primary targets for skin infections

**Gram-negative coverage:**
- Polymyxin covers some gram-negative
- Limited compared to oral antibiotics

## Appropriate Uses

**First-line for:**
- Impetigo (localized)
- Minor wound prophylaxis
- Infected eczema (small areas)
- Folliculitis (mild)
- Secondary bacterial infection

**NOT for:**
- Deep infections (cellulitis)
- Abscesses
- Systemic infection signs
- Large surface areas

## Resistance Concerns

- Widespread use promotes resistance
- MRSA prevalence increasing
- Mupirocin resistance reported
- Judicious use important`,

      keyTerms: [
        { term: 'Spectrum', definition: 'Range of bacteria an antibiotic can kill' },
        { term: 'Gram-positive', definition: 'Type of bacteria that stain purple in lab tests' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus - hard to treat bacteria' },
        { term: 'Folliculitis', definition: 'Infection of hair follicles' },
        { term: 'Cellulitis', definition: 'Deep skin infection requiring oral antibiotics' },
      ],
      analogies: [
        'Spectrum is like the range of a flashlight - some cover wide areas, others are more focused.',
        'Antibiotic resistance is like bacteria learning to outsmart the medicine.',
      ],
      examples: [
        'Patient uses OTC triple antibiotic on minor cut',
        'Mupirocin cream prescribed for nasal MRSA colonization',
        'Retapamulin used for impetigo in child with sulfa allergy',
      ],
      clinicalNotes: 'Triple antibiotic ointment has high rate of contact dermatitis (especially neomycin component). Consider Polysporin (no neomycin) for patients with sensitivity. Mupirocin is drug of choice for impetigo due to MRSA coverage.',
    },

    3: {
      level: 3,
      summary: 'Topical antibiotics treat superficial bacterial infections. Selection depends on likely pathogens, local resistance patterns, and patient factors.',
      explanation: `## Mechanisms of Action

**Mupirocin:**
- Binds to bacterial isoleucyl-tRNA synthetase
- Inhibits protein synthesis
- Bactericidal at therapeutic concentrations
- Unique mechanism - low cross-resistance

**Retapamulin:**
- Pleuromutilin class
- Binds to 50S ribosomal subunit
- Inhibits protein synthesis
- Approved for >9 months age

**Ozenoxacin:**
- DNA gyrase/topoisomerase IV inhibitor
- Blocks bacterial DNA replication
- Approved for >2 months age

**Bacitracin:**
- Inhibits cell wall synthesis
- Interferes with peptidoglycan
- Primarily gram-positive coverage

**Neomycin/Polymyxin:**
- Neomycin: aminoglycoside, protein synthesis inhibition
- Polymyxin: cell membrane disruption

## Clinical Applications

**Impetigo:**
- Mupirocin first-line (BID x 5 days)
- Retapamulin alternative (BID x 5 days)
- Ozenoxacin (BID x 5 days)
- Oral antibiotics if extensive

**Nasal MRSA Decolonization:**
- Mupirocin intranasal BID x 5 days
- Part of decolonization protocol
- Combined with chlorhexidine bathing

**Infected Atopic Dermatitis:**
- Short course if clinical infection
- Most crusting is non-infectious
- Culture if recurrent or resistant

**Secondary Infection Prophylaxis:**
- Surgical wounds
- Minor traumatic wounds
- Evidence of benefit limited

## Adverse Effects

**Contact Dermatitis:**
- Neomycin: 1-10% sensitization rate
- Bacitracin: less common
- Preservatives in vehicles

**Ototoxicity/Nephrotoxicity:**
- Neomycin if applied to large areas
- Rare with appropriate use
- Avoid in large burns`,

      keyTerms: [
        { term: 'Isoleucyl-tRNA synthetase', definition: 'Bacterial enzyme that mupirocin blocks' },
        { term: 'Pleuromutilin', definition: 'Class of antibiotics including retapamulin' },
        { term: 'Ribosomal subunit', definition: 'Part of bacterial protein-making machinery' },
        { term: 'DNA gyrase', definition: 'Enzyme that helps bacteria replicate DNA' },
        { term: 'Peptidoglycan', definition: 'Material that makes bacterial cell walls' },
      ],
      analogies: [
        'Protein synthesis inhibition is like stopping a factory production line.',
        'Cell wall synthesis inhibition is like removing bricks from a wall under construction.',
      ],
      examples: [
        'Patient with recurrent impetigo gets mupirocin plus bleach baths',
        'Pre-operative nasal mupirocin for MRSA-positive patient',
        'Contact dermatitis from neomycin requiring switch to mupirocin',
      ],
      clinicalNotes: 'Distinguish colonization from true infection in atopic dermatitis. Most yellow crusting represents serous exudate, not bacterial infection. Reserve topical antibiotics for overt infection (pustules, cellulitis signs). Consider bacterial culture for recurrent or treatment-failure cases.',
    },

    4: {
      level: 4,
      summary: 'Topical antibiotics have specific indications in dermatology. Understanding resistance mechanisms and appropriate stewardship prevents treatment failures.',
      explanation: `## Resistance Mechanisms

**Mupirocin Resistance:**
- Low-level: point mutations in target gene
- High-level: plasmid-mediated mupA gene
- Increased with widespread use
- Cross-resistance concerns

**MRSA Considerations:**
- Community-acquired MRSA common
- Mupirocin generally effective
- Resistance testing for failures
- Alternative: ozenoxacin

**Biofilm Issues:**
- Bacteria form protective layers
- Topical antibiotics less effective
- May require mechanical debridement
- Combine with antiseptics

## Decolonization Protocols

**Indications:**
- Recurrent skin infections
- Healthcare workers
- Pre-operative (high-risk surgery)
- Household transmission

**Standard Protocol:**
1. Intranasal mupirocin BID x 5 days
2. Chlorhexidine bathing daily x 5 days
3. Treat concurrent infections
4. Environmental cleaning

**Success Rates:**
- 60-80% short-term clearance
- High recolonization rate
- May need repeated courses

## Comparative Effectiveness

**Impetigo:**
- Topical mupirocin = oral antibiotics for limited disease
- Faster healing than no treatment
- Retapamulin comparable efficacy
- Ozenoxacin non-inferior

**Secondary Infected Dermatitis:**
- Limited evidence for routine use
- Short course may help true infection
- Steroid-antibiotic combinations available

**Wound Prophylaxis:**
- Modest benefit for surgical wounds
- Not routinely recommended for minor wounds
- Risk of contact dermatitis`,

      keyTerms: [
        { term: 'Plasmid', definition: 'Small DNA molecule that can transfer between bacteria' },
        { term: 'Biofilm', definition: 'Community of bacteria encased in protective matrix' },
        { term: 'Decolonization', definition: 'Eliminating bacteria from body surfaces' },
        { term: 'Colonization', definition: 'Bacteria present without causing disease' },
        { term: 'Chlorhexidine', definition: 'Antiseptic soap used for skin cleansing' },
      ],
      analogies: [
        'Plasmid transfer is like sharing cheat sheets - bacteria pass resistance to each other.',
        'Biofilm is like a fortress - bacteria hide inside and are hard to reach.',
      ],
      examples: [
        'Family with recurrent MRSA using decolonization protocol',
        'Patient with high-level mupirocin resistance requiring alternative therapy',
        'Surgical prophylaxis with mupirocin in cardiac surgery patient',
      ],
      clinicalNotes: 'Reserve topical antibiotics for documented bacterial infection rather than routine use in dermatitis. Consider culture with sensitivity testing for recurrent or non-responding infections. Monitor local resistance patterns. Address carrier states in recurrent infection scenarios.',
    },

    5: {
      level: 5,
      summary: 'Topical antibiotics remain important in dermatologic therapy. Understanding pharmacokinetics, resistance epidemiology, and stewardship optimizes patient outcomes.',
      explanation: `## Pharmacokinetics

**Percutaneous Absorption:**
- Minimal with intact skin
- Increased with inflammation
- Variable by body site
- Ointments enhance penetration

**Bacterial Killing Dynamics:**
- Concentration-dependent killing
- Post-antibiotic effect
- Resistance prevention strategies

**Drug Interactions:**
- Minimal systemic interactions
- Local inactivation possible
- Incompatible combinations

## Resistance Epidemiology

**Global Trends:**
- Increasing mupirocin resistance
- Geographic variation
- Healthcare vs community strains
- Surveillance importance

**Risk Factors for Resistance:**
- Chronic use
- Inadequate dosing
- Monotherapy in high-burden settings
- Poor adherence

**Molecular Mechanisms:**
- Target modification
- Efflux pumps
- Enzymatic inactivation
- Biofilm-mediated resistance

## Advanced Applications

**Ozenoxacin:**
- Non-fluorinated quinolone
- Low resistance potential
- Pediatric approved
- BID dosing advantage

**Mupirocin Calcium Cream:**
- Less irritation than ointment
- Better cosmetic acceptability
- Similar efficacy

**Combination Therapy:**
- Antibiotic + steroid for inflamed infection
- Antibiotic + antiseptic for biofilms
- Sequential therapy strategies

## Future Directions

**New Agents:**
- Novel mechanisms needed
- Anti-biofilm compounds
- Bacteriophage therapy
- Antimicrobial peptides

**Stewardship Principles:**
- Appropriate prescribing
- Culture-directed therapy
- Limit prophylactic use
- Patient education
- Surveillance and monitoring`,

      keyTerms: [
        { term: 'Post-antibiotic effect', definition: 'Continued bacterial suppression after drug levels drop' },
        { term: 'Efflux pump', definition: 'Bacterial mechanism to pump out antibiotics' },
        { term: 'Bacteriophage', definition: 'Virus that infects and kills bacteria' },
        { term: 'Antimicrobial peptide', definition: 'Natural protein with antibiotic properties' },
        { term: 'Quinolone', definition: 'Class of antibiotics that target DNA replication' },
      ],
      analogies: [
        'Efflux pump is like a bilge pump on a ship - bacteria pump out antibiotics to survive.',
        'Bacteriophage therapy is like using specialized hunters to target specific prey.',
      ],
      examples: [
        'Patient with biofilm-associated wound requiring combined approach',
        'Outbreak investigation showing clonal MRSA spread in household',
        'Clinical trial of novel topical agent for resistant infections',
      ],
      clinicalNotes: 'Consider bacterial culture with susceptibility testing for any topical antibiotic treatment failure. Document local resistance patterns through collaboration with microbiology laboratory. Reserve newer agents (ozenoxacin) for situations where first-line options have failed to preserve susceptibility.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'dermatology-treatment-steroids', targetType: 'concept', relationship: 'related', label: 'Often combined with antibiotics' },
    { targetId: 'dermatology-eczema', targetType: 'topic', relationship: 'related', label: 'Secondary infections' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'treatments', 'antibiotics', 'infections'],
    keywords: ['antibiotics', 'topical', 'mupirocin', 'impetigo', 'MRSA', 'bacteria'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology', 'family-medicine'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
