/**
 * Bee/Wasp Sting - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const beeWaspSting: EducationalContent = {
  id: 'wilderness-bee-wasp-sting',
  type: 'condition',
  name: 'Bee and Wasp Stings',
  alternateNames: ['Hymenoptera Stings', 'Insect Stings'],

  levels: {
    1: {
      level: 1,
      summary: 'Bee and wasp stings are usually just painful. Some people are allergic and can have a dangerous reaction called anaphylaxis. If someone has trouble breathing after a sting, call 911 immediately.',
      explanation: `## Bee and Wasp Stings

Stings from bees, wasps, and hornets usually cause pain and swelling that goes away in a few hours.

## Normal Reaction
- Pain at the sting site
- Redness and swelling
- Itching

## Dangerous Allergic Reaction (Call 911!)
- Trouble breathing
- Swelling of face, lips, or throat
- Dizziness or fainting
- Hives all over the body

## What to Do
- Remove stinger by scraping (don\'t squeeze)
- Wash with soap and water
- Apply ice
- Take antihistamine for itching
- Use EpiPen if prescribed and having severe reaction`,
      keyTerms: [
        { term: 'allergy', definition: 'When your body overreacts to something harmless' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction' },
      ],
    },
    2: {
      level: 2,
      summary: 'Hymenoptera stings (bees, wasps, hornets) cause local reactions in most people. About 3% of the population has systemic allergic reactions. Anaphylaxis is the major risk and requires immediate epinephrine treatment.',
      explanation: `## Understanding Sting Reactions

### Local Reaction (Most Common)
- Pain, redness, swelling at site
- Resolves in hours to days
- May have large local reaction (>10cm)

### Systemic Allergic Reaction
- Hives, itching beyond sting site
- Facial swelling
- Difficulty breathing
- Dizziness, low blood pressure
- Can progress to anaphylaxis

### Toxic Reaction (Multiple Stings)
- 50+ stings
- Venom toxicity, not allergy
- Muscle breakdown, organ injury

## Treatment
- Remove stinger quickly
- Local: ice, antihistamines, pain relief
- Systemic: epinephrine immediately
- Severe: call 911, consider multiple epi doses

## Prevention
- Allergy testing after systemic reaction
- Venom immunotherapy (allergy shots)
- Carry prescribed epinephrine auto-injector`,
      keyTerms: [
        { term: 'epinephrine', definition: 'Medication that reverses allergic reactions (adrenaline)' },
        { term: 'venom immunotherapy', definition: 'Allergy shots that reduce sensitivity to venom' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hymenoptera venom contains enzymes and peptides causing local inflammation and potential IgE-mediated systemic reactions. Anaphylaxis management requires immediate epinephrine. Venom immunotherapy provides 95%+ protection against future anaphylaxis.',
      explanation: `## Venom Composition

### Bee Venom
- Melittin (major component)
- Phospholipase A2 (major allergen)
- Hyaluronidase
- Histamine

### Wasp Venom
- Different phospholipases
- Kinins
- Hyaluronidase
- Limited cross-reactivity with bee

## Reaction Types

### Local Reaction
- Histamine-mediated
- Pain, erythema, edema
- Resolves spontaneously

### Large Local Reaction
- >10cm diameter
- Peaks at 48 hours
- Not predictive of systemic reaction

### Systemic Reaction
- IgE-mediated
- Mast cell degranulation
- Histamine, tryptase release
- Multi-organ involvement

## Anaphylaxis Management
1. Remove stinger
2. Epinephrine IM (0.3-0.5mg adult, lateral thigh)
3. Position (supine if hypotensive)
4. Call emergency services
5. Repeat epinephrine every 5-15 min if needed
6. Antihistamines, steroids (adjunctive)
7. Observe for biphasic reaction`,
      keyTerms: [
        { term: 'melittin', definition: 'Major peptide component of bee venom' },
        { term: 'biphasic reaction', definition: 'Recurrence of anaphylaxis hours after initial episode' },
      ],
      clinicalNotes: 'Epinephrine is the first-line treatment for anaphylaxis. Antihistamines and steroids are adjunctive only. Refer all systemic reactors to allergist for venom immunotherapy evaluation.',
    },
    4: {
      level: 4,
      summary: 'Hymenoptera envenomation pathophysiology involves direct venom toxicity and IgE-mediated hypersensitivity. Anaphylaxis requires immediate recognition and epinephrine administration. Venom immunotherapy is highly effective for preventing future systemic reactions.',
      explanation: `## Detailed Pathophysiology

### Venom Toxicity
- Phospholipase A2: membrane disruption
- Melittin: hemolysis, histamine release
- Hyaluronidase: venom spread
- Mast cell degranulating peptide

### Allergic Sensitization
- Initial sting: IgE production
- Subsequent stings: cross-linking of IgE on mast cells
- Immediate degranulation
- Histamine, tryptase, prostaglandins, leukotrienes release

## Clinical Severity Grading

| Grade | Manifestations |
|-------|----------------|
| I | Urticaria, pruritus, anxiety |
| II | Angioedema, GI symptoms, dizziness |
| III | Dyspnea, wheezing, stridor |
| IV | Hypotension, collapse, LOC |

## Anaphylaxis Physiology
- Vasodilation: histamine, NO
- Bronchospasm: leukotrienes
- Capillary leak: increased permeability
- Cardiac: direct and hypoxic effects

## Venom Immunotherapy
- 95-98% effective prevention
- Standard: 5-year course
- Mechanism: IgG4 blocking antibodies, T-cell tolerance
- Duration of protection: years to lifelong`,
      keyTerms: [
        { term: 'IgG4', definition: 'Blocking antibody induced by immunotherapy' },
        { term: 'mast cell tryptase', definition: 'Marker of mast cell activation in anaphylaxis' },
      ],
      clinicalNotes: 'Elevated serum tryptase confirms anaphylaxis diagnosis. Venom immunotherapy should be offered to all patients with systemic reactions. Large local reactions have <5% risk of future systemic reaction.',
    },
    5: {
      level: 5,
      summary: 'Hymenoptera venom allergy involves IgE-mediated mast cell activation with well-characterized molecular mechanisms. Evidence strongly supports venom immunotherapy for preventing anaphylaxis. Ongoing research addresses predictive biomarkers and improved immunotherapy protocols.',
      explanation: `## Molecular Mechanisms

### Major Allergens
- Api m 1 (Phospholipase A2): bee
- Api m 2 (Hyaluronidase): bee
- Ves v 1 (Phospholipase A1): wasp
- Ves v 5 (Antigen 5): wasp
- Cross-reactive carbohydrate determinants

### Signaling Cascade
- IgE cross-linking
- FcεRI aggregation
- Lyn/Syk kinase activation
- PLCγ/IP3/DAG pathway
- Ca2+ influx
- Degranulation

### Anaphylaxis Mediators
- Histamine: vasodilation, bronchospasm
- Tryptase: marker, possible effector
- Prostaglandin D2: bronchospasm, vasodilation
- Leukotrienes: bronchospasm
- PAF: cardiovascular collapse

## Evidence-Based Management

### Epinephrine
- Alpha-1: vasoconstriction
- Beta-1: cardiac inotropy
- Beta-2: bronchodilation, mast cell stabilization
- IM dosing: 0.01mg/kg (max 0.5mg)

### Immunotherapy
| Outcome | VIT Efficacy |
|---------|--------------|
| Protection from anaphylaxis | 95-98% |
| Large local reduction | Variable |
| Duration of protection | Years+ |
| Mastocytosis patients | 75-85% |

### Biomarkers
- Baseline tryptase: risk stratification
- Component-resolved diagnostics
- Specific IgE patterns
- Mastocytosis screening

## Special Populations
- Mastocytosis: higher risk, lower VIT efficacy
- ACE inhibitor use: increased severity
- Beta-blocker use: resistant anaphylaxis
- Pregnancy: epinephrine safe, VIT may continue`,
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'Testing for IgE to specific venom proteins' },
        { term: 'FcεRI', definition: 'High-affinity IgE receptor on mast cells' },
      ],
      clinicalNotes: 'Baseline tryptase >11.4 ng/mL warrants mastocytosis evaluation. Beta-blocker use is relative contraindication for VIT due to anaphylaxis treatment resistance. Component-resolved diagnostics can differentiate true sensitization from cross-reactive carbohydrate determinants.',
    },
  },

  media: [],
  citations: [
    {
      id: 'hymenoptera-guidelines',
      type: 'article',
      title: 'Hymenoptera Venom Allergy Guidelines',
      source: 'Journal of Allergy and Clinical Immunology',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['immunologic', 'cardiovascular', 'respiratory'],
    topics: ['wilderness-medicine', 'allergy', 'emergency-medicine'],
    keywords: ['bee sting', 'wasp sting', 'anaphylaxis', 'allergy'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default beeWaspSting;
