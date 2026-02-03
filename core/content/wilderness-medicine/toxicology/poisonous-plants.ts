/**
 * Poisonous Plants - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const poisonousPlants: EducationalContent = {
  id: 'wilderness-poisonous-plants',
  type: 'condition',
  name: 'Poisonous Plant Ingestion',
  alternateNames: ['Plant Poisoning', 'Toxic Plant Ingestion'],

  levels: {
    1: {
      level: 1,
      summary: 'Some plants can make you sick if you eat them. Never eat any wild plant unless an expert confirms it is safe. If someone eats a poisonous plant, call Poison Control right away.',
      explanation: `## Poisonous Plants

Many plants can make you sick if you eat them. Some are very dangerous.

## The #1 Rule
- NEVER eat any plant you cannot identify with 100% certainty
- Many poisonous plants look like safe ones

## Common Dangerous Plants
- **Poison hemlock**: Looks like wild carrot
- **Water hemlock**: Extremely toxic
- **Foxglove**: Affects the heart
- **Deadly nightshade**: Very toxic berries

## What to Do If Someone Eats a Poisonous Plant
1. Call Poison Control: 1-800-222-1222
2. Try to identify the plant (take a photo)
3. Do NOT make them vomit unless told to
4. Keep the person calm
5. Go to the emergency room if needed`,
      keyTerms: [
        { term: 'poisonous', definition: 'Something that can make you sick or cause harm if eaten' },
        { term: 'Poison Control', definition: 'Experts you can call anytime for help with poisoning (1-800-222-1222)' },
      ],
    },
    2: {
      level: 2,
      summary: 'Plant poisonings can range from mild GI upset to life-threatening toxicity. Identification is critical for treatment. Common toxic plants include hemlock, foxglove, and various berries. Management is primarily supportive with specific antidotes for some toxins.',
      explanation: `## Categories of Toxic Plants

### Cardiac Glycosides (Foxglove, Oleander)
- Affect heart rhythm
- Nausea, visual changes
- Bradycardia or arrhythmias

### Alkaloids (Hemlock, Nightshade)
- Varied effects on nervous system
- Can cause paralysis or seizures

### GI Irritants (Daffodil, Pokeweed)
- Nausea, vomiting, diarrhea
- Usually self-limited

### Oxalates (Rhubarb leaves, Dieffenbachia)
- Oral irritation
- Kidney damage in severe cases

## Recognition and First Aid
- Identify plant if possible (photograph)
- Call Poison Control: 1-800-222-1222
- Do not induce vomiting
- Supportive care
- Seek emergency care for severe symptoms

## Prevention
- Never eat unidentified plants
- Teach children not to eat plants
- Supervise young children outdoors
- Know plants in your environment`,
      keyTerms: [
        { term: 'cardiac glycoside', definition: 'Plant toxin that affects heart rhythm' },
        { term: 'alkaloid', definition: 'Nitrogen-containing plant toxin with varied effects' },
      ],
    },
    3: {
      level: 3,
      summary: 'Plant poisoning syndromes are classified by toxin type: cardiac glycosides, alkaloids, GI irritants, and others. Clinical presentation guides management. Poison center consultation is essential for identification and treatment guidance. Specific antidotes exist for some toxins.',
      explanation: `## Toxidromes by Plant Class

### Cardiac Glycoside Plants
- Foxglove (Digitalis)
- Oleander
- Lily of the valley
- Yellow oleander

**Presentation:**
- Nausea, vomiting (early)
- Bradycardia, AV block
- Hyperkalemia
- Visual disturbances (yellow/green halos)
- Digoxin level may be elevated

**Treatment:**
- Activated charcoal if early
- Digoxin-specific Fab (antidote)
- Atropine for bradycardia
- Avoid cardioversion (risk of VF)

### Anticholinergic Plants
- Deadly nightshade (Atropa)
- Jimsonweed (Datura)
- Angel's trumpet

**Presentation:**
- "Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter"
- Tachycardia, mydriasis, delirium
- Urinary retention, decreased bowel sounds

**Treatment:**
- Supportive care
- Physostigmine (severe cases only)

### Convulsant Plants
- Water hemlock (most toxic plant in North America)
- Cicutoxin causes seizures

**Treatment:**
- Aggressive seizure control (benzodiazepines)
- Supportive care`,
      keyTerms: [
        { term: 'toxidrome', definition: 'Pattern of symptoms associated with specific toxin class' },
        { term: 'Digoxin-specific Fab', definition: 'Antibody fragments that bind and neutralize cardiac glycosides' },
      ],
      clinicalNotes: 'Water hemlock is the most toxic plant in North America. Seizures can be severe and refractory. Digoxin immunoassay may be positive with plant cardiac glycoside poisoning, but levels do not correlate with clinical severity.',
    },
    4: {
      level: 4,
      summary: 'Plant toxicology requires understanding diverse toxin mechanisms. Cardiac glycosides inhibit Na/K-ATPase. Alkaloids target various receptors. Management integrates decontamination, supportive care, and specific antidotes. Poison center consultation optimizes identification and treatment.',
      explanation: `## Detailed Mechanisms

### Cardiac Glycosides
- Inhibit Na+/K+-ATPase
- Increased intracellular sodium
- Na+/Ca2+ exchanger reversal
- Increased intracellular calcium
- Positive inotropy and arrhythmogenesis

### Water Hemlock (Cicutoxin)
- Cicutoxin: unsaturated alcohol
- GABA-A receptor antagonist
- Rapid onset seizures
- High mortality without treatment

### Poison Hemlock (Coniine)
- Piperidine alkaloid
- Nicotinic receptor agonist then blocker
- Ascending paralysis
- Respiratory failure

### Anticholinergic (Tropane Alkaloids)
- Atropine, scopolamine, hyoscyamine
- Muscarinic receptor antagonism
- Central and peripheral effects

## Management Approaches

### Decontamination
- Activated charcoal if within 1-2 hours
- Do not induce vomiting
- Consider whole bowel irrigation for large ingestions

### Cardiac Glycoside Poisoning
| Finding | Management |
|---------|------------|
| Bradycardia | Atropine, then Fab |
| Hyperkalemia | Fab first, then insulin/glucose |
| VT/VF | Fab, avoid cardioversion initially |

### Digoxin-Specific Fab Dosing
- Based on estimated dose ingested
- Empiric: 10-20 vials for severe poisoning
- Response within 30-60 minutes

## Complications
- Cardiac glycosides: dysrhythmias, death
- Anticholinergics: hyperthermia, rhabdomyolysis
- Water hemlock: status epilepticus, anoxic brain injury`,
      keyTerms: [
        { term: 'cicutoxin', definition: 'Water hemlock toxin that causes seizures via GABA antagonism' },
        { term: 'coniine', definition: 'Poison hemlock alkaloid causing paralysis' },
      ],
      clinicalNotes: 'Digoxin-specific Fab should be administered early in severe cardiac glycoside poisoning. Hyperkalemia in this setting indicates significant poisoning and is a Fab indication. Cardioversion may precipitate refractory VF in glycoside toxicity.',
    },
    5: {
      level: 5,
      summary: 'Plant toxicology encompasses diverse molecular mechanisms requiring targeted management strategies. Evidence-based treatment integrates decontamination, antidotes, and supportive care. Emerging diagnostics improve toxin identification. Prevention remains paramount given continued morbidity from plant poisonings.',
      explanation: `## Advanced Toxicology

### Cardiac Glycoside Structure-Activity
- Steroid nucleus with lactone ring
- Sugar moiety affects pharmacokinetics
- Cross-reactivity with digoxin immunoassay
- Variable correlation with clinical toxicity

### Cicutoxin Neurotoxicity
- Highly unsaturated C17 alcohol
- GABA-A receptor antagonism
- Rapid CNS penetration
- Seizure threshold lowering
- Secondary excitotoxicity

### Tropane Alkaloid Pharmacology
- Competitive muscarinic antagonism
- M1 receptor: CNS effects
- M2 receptor: cardiac effects
- M3 receptor: peripheral effects
- Duration: 24-48+ hours

## Evidence-Based Management

### Decontamination
- AACT guidelines: single-dose activated charcoal
- Optimal timing: <1-2 hours
- Contraindications: altered mental status, airway concern

### Digoxin-Specific Fab
| Evidence | Outcome |
|----------|---------|
| Mortality reduction | >50% |
| Time to response | 30-60 min |
| Complete reversal | 80-90% |

### Physostigmine in Anticholinergic Toxicity
- Reversible cholinesterase inhibitor
- Dose: 1-2mg IV slow push
- Indications: severe agitation, tachydysrhythmia
- Relative CI: QRS prolongation

## Emerging Considerations

### Diagnostics
- HPLC-MS for toxin identification
- Point-of-care immunoassays limited
- Botanical identification apps (caution)

### Prevention Strategies
- Public health education
- App-based plant identification
- Poison center outreach

### Global Considerations
- Regional toxic plant variation
- Traditional medicine contamination
- Wild foraging popularity increasing`,
      keyTerms: [
        { term: 'HPLC-MS', definition: 'High-performance liquid chromatography-mass spectrometry for toxin identification' },
        { term: 'excitotoxicity', definition: 'Neuronal injury from excessive stimulation, as with uncontrolled seizures' },
      ],
      clinicalNotes: 'Wild foraging popularity has increased plant poisoning presentations. Water hemlock remains the most lethal plant in North America. Digoxin-specific Fab is effective for various plant cardiac glycosides though immunoassay levels do not correlate with clinical severity.',
    },
  },

  media: [],
  citations: [
    {
      id: 'plant-poisoning-review',
      type: 'article',
      title: 'Toxic Plant Ingestions',
      source: 'Clinical Toxicology',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-mushroom-poisoning', targetType: 'condition', relationship: 'related', label: 'Mushroom Poisoning' },
  ],
  tags: {
    systems: ['cardiovascular', 'neurological', 'gastrointestinal'],
    topics: ['wilderness-medicine', 'toxicology'],
    keywords: ['plant poisoning', 'cardiac glycosides', 'hemlock', 'nightshade'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default poisonousPlants;
