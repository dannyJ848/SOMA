/**
 * Orthodontics Basics - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const orthodonticsBasics: EducationalContent = {
  id: 'procedure-orthodontics-basics',
  type: 'topic',
  name: 'Orthodontics Basics',
  alternateNames: ['Braces', 'Teeth Straightening', 'Dental Alignment'],

  levels: {
    1: {
      level: 1,
      summary: 'Orthodontics is the branch of dentistry that straightens crooked teeth and fixes bite problems. Braces and clear aligners are the main tools used to move teeth into the right position.',
      explanation: `**What Is Orthodontics?**
Orthodontics fixes teeth that are crooked, crowded, or do not bite together properly.

**Why Straighten Teeth?**
- Easier to clean (less cavities and gum disease)
- Better chewing
- Improved appearance and confidence
- Less jaw pain
- Clearer speech

**Types of Braces:**
1. **Metal Braces**: Traditional silver brackets and wires
2. **Ceramic Braces**: Tooth-colored, less visible
3. **Clear Aligners**: Invisible plastic trays (Invisalign)
4. **Lingual Braces**: Behind the teeth, hidden

**How Braces Work:**
- Brackets attached to teeth
- Wire connects brackets
- Wire gently pulls teeth
- Teeth slowly move into position

**Treatment Time:**
- Average: 18 months to 2 years
- Depends on how much movement needed

**After Braces:**
- Retainer keeps teeth in place
- Worn full-time then nights only
- Essential to prevent teeth moving back`,
      keyTerms: [
        { term: 'orthodontics', definition: 'The branch of dentistry that straightens teeth and corrects bite problems' },
        { term: 'braces', definition: 'Brackets and wires used to move teeth' },
        { term: 'aligners', definition: 'Clear plastic trays that gradually move teeth' },
        { term: 'retainer', definition: 'Device worn after braces to keep teeth in position' },
        { term: 'malocclusion', definition: 'When teeth do not fit together properly' },
      ],
      analogies: [
        'Braces work like a slow train pushing teeth along a track to their destination.',
        'A retainer is like a bookmark - it holds your teeth in place after the story of movement is done.',
      ],
      examples: [
        'A teenager with crowded front teeth gets braces to create space and align them.',
        'An adult uses clear aligners to straighten teeth without visible metal braces.',
      ],
    },
    2: {
      level: 2,
      summary: 'Orthodontic treatment corrects malocclusion using fixed or removable appliances that apply controlled forces to move teeth through bone. Treatment planning involves diagnosis of skeletal and dental components.',
      explanation: `## Malocclusion Classification

**Angle Classification:**
| Class | Description |
|-------|-------------|
| Class I | Normal molar relationship, crowding/spacing |
| Class II | Lower molar back; "overbite" appearance |
| Class III | Lower molar forward; "underbite" |

**Skeletal vs. Dental:**
- Skeletal: Jaw size/position issue
- Dental: Tooth position issue
- Often combination

## Treatment Options

**Fixed Appliances:**
| Type | Features |
|------|----------|
| Metal brackets | Traditional, effective |
| Ceramic brackets | Esthetic |
| Self-ligating | Reduce friction |
| Lingual | Behind teeth |

**Removable:**
| Type | Use |
|------|-----|
| Clear aligners | Mild-moderate crowding |
| Retainers | Post-treatment retention |
| Functional appliances | Growth modification |

## Treatment Mechanics

**Force Application:**
- Light continuous force optimal
- Heavy force causes root resorption
- Bone remodels around moving teeth

**Tooth Movement Types:**
| Movement | Description |
|----------|-------------|
| Tipping | Crown moves, root tips opposite |
| Bodily | Crown and root move together |
| Rotation | Tooth spins on axis |
| Intrusion | Push tooth into bone |
| Extrusion | Pull tooth out of bone |

## Treatment Planning

**Records Needed:**
- Clinical exam
- Photographs
- Dental impressions/scans
- X-rays (panoramic, cephalometric)

**Duration:**
- Simple cases: 12-18 months
- Complex cases: 24-36 months

## Retention

**Why Needed:**
- Teeth tend to relapse
- Periodontal fibers take time to remodel

**Types:**
| Type | Protocol |
|------|----------|
| Hawley retainer | Removable, adjustable |
| Clear retainer | Removable, esthetic |
| Fixed retainer | Bonded wire, permanent |`,
      keyTerms: [
        { term: 'Angle classification', definition: 'System classifying molar relationships: Class I, II, or III' },
        { term: 'cephalometric', definition: 'Lateral skull X-ray for skeletal analysis' },
        { term: 'self-ligating', definition: 'Brackets with built-in clip instead of elastic ties' },
        { term: 'bodily movement', definition: 'Parallel movement of crown and root together' },
        { term: 'retention', definition: 'Maintaining tooth position after active treatment' },
      ],
      analogies: [
        'Tooth movement is like moving a fence post - apply gentle pressure consistently.',
        'Bone remodeling is like snow melting on one side of a fence post and accumulating on the other.',
      ],
    },
    3: {
      level: 3,
      summary: 'Orthodontic tooth movement involves bone remodeling via pressure and tension zones, regulated by cellular and molecular processes. Treatment planning integrates cephalometric analysis, growth considerations, and biomechanical principles.',
      explanation: `## Biology of Tooth Movement

**Pressure-Tension Theory:**
| Zone | Process | Result |
|------|---------|--------|
| Pressure | Bone resorption (osteoclasts) | Tooth moves into space |
| Tension | Bone formation (osteoblasts) | New bone fills gap |

**Optimal Force:**
- 25-50 g for tipping
- 50-100 g for bodily movement
- Excessive force → hyalinization, root resorption

**Cellular Events:**
1. PDL compression
2. Blood flow changes
3. Inflammatory mediators (PGE2, IL-1)
4. Osteoclast recruitment
5. Bone resorption
6. Tooth movement

## Cephalometric Analysis

**Landmarks:**
| Landmark | Structure |
|----------|-----------|
| Sella (S) | Center of sella turcica |
| Nasion (N) | Frontonasal suture |
| Point A | Maxillary apical base |
| Point B | Mandibular apical base |
| Gonion | Mandibular angle |

**Key Measurements:**
| Analysis | Measures |
|----------|----------|
| SNA | Maxillary position |
| SNB | Mandibular position |
| ANB | Jaw relationship |
| FMA | Mandibular plane angle |

## Treatment Approaches

**Non-Extraction:**
- Expansion (arch development)
- Interproximal reduction
- Distalization

**Extraction:**
- Severe crowding (>8mm)
- Protrusion reduction
- Usually first premolars

**Orthognathic Surgery:**
- Severe skeletal discrepancy
- Adult non-growing patients
- Combined with orthodontics

## Biomechanics

**Anchorage:**
| Type | Description |
|------|-------------|
| Maximum | Back teeth stable |
| Moderate | Some back tooth movement acceptable |
| Minimum | Allow back teeth to move |

**TADs (Temporary Anchorage Devices):**
- Mini-screws or plates
- Skeletal anchorage
- Enables movement without side effects

## Complications

| Complication | Prevention |
|--------------|------------|
| Root resorption | Light forces, monitor radiographs |
| Decalcification | Good oral hygiene |
| Gingival recession | Bone assessment, careful movement |
| Relapse | Retention protocol |`,
      keyTerms: [
        { term: 'hyalinization', definition: 'Necrosis of PDL from excessive force; delays tooth movement' },
        { term: 'cephalometric analysis', definition: 'Measurement of skull landmarks for diagnosis and treatment planning' },
        { term: 'ANB angle', definition: 'Measure of anteroposterior jaw relationship' },
        { term: 'TADs', definition: 'Temporary Anchorage Devices; mini-screws for skeletal anchorage' },
        { term: 'anchorage', definition: 'Resistance to unwanted tooth movement' },
        { term: 'interproximal reduction', definition: 'Removing enamel between teeth to create space' },
      ],
      clinicalNotes: 'Light forces (25-50g) are more efficient than heavy forces and cause less root resorption. TADs have expanded treatment options significantly. Cephalometric analysis guides extraction vs. non-extraction decisions. Retention is the most critical factor in long-term success.',
    },
    4: {
      level: 4,
      summary: 'Advanced orthodontics integrates molecular biology of tooth movement, sophisticated biomechanics, growth modification strategies, and digital treatment planning for predictable outcomes.',
      explanation: `## Molecular Mechanisms

**RANKL-OPG System:**
| Component | Role |
|-----------|------|
| RANKL | Osteoclast activation |
| OPG | RANKL inhibitor (protective) |
| Pressure zone | RANKL ↑, OPG ↓ → resorption |
| Tension zone | RANKL ↓, OPG ↑ → formation |

**Inflammatory Mediators:**
- Prostaglandins (PGE2)
- Interleukins (IL-1, IL-6)
- TNF-α
- Matrix metalloproteinases

## Advanced Biomechanics

**Moment-to-Force Ratio:**
| M/F Ratio | Movement Type |
|-----------|---------------|
| Low | Uncontrolled tipping |
| 5-7:1 | Controlled tipping |
| 10:1 | Translation (bodily) |
| High | Root movement |

**Archwire Progression:**
| Phase | Wire |
|-------|------|
| Alignment | NiTi (flexible) |
| Leveling | NiTi, TMA |
| Working | Stainless steel |
| Finishing | Stainless steel, TMA |

## Growth Modification

**Functional Appliances:**
| Appliance | Indication |
|-----------|------------|
| Twin block | Class II, growing |
| Herbst | Class II, fixed |
| Frankel | Various, functional |

**Headgear:**
- Cervical pull (Class II)
- High pull (vertical control)
- Reverse pull (Class III)

**Rapid Palatal Expansion:**
- Skeletal expansion in young patients
- 0.25-0.5mm per day
- Midpalatal suture separation

## Digital Orthodontics

**Treatment Planning:**
| Technology | Application |
|------------|-------------|
| CBCT | 3D anatomy |
| Intraoral scanning | Digital impressions |
| Treatment simulation | Virtual setup |
| 3D printing | Aligners, appliances |

**Aligner Therapy:**
- Sequential aligner changes
- Predictable movements: Tipping, rotation, mild spacing
- Challenging movements: Extrusion, significant torque

**AI Applications:**
- Treatment prediction
- Aligner design
- Outcome assessment

## Complex Cases

**Interdisciplinary:**
| Specialty | Integration |
|-----------|-------------|
| Periodontics | Pre-ortho perio, CTG |
| Prosthodontics | Space management |
| Surgery | Orthognathic planning |
| Implants | Positioning for future implants |

**Adult Considerations:**
- No growth modification
- Pre-existing periodontal issues
- Root resorption risk
- Increased retention needs`,
      keyTerms: [
        { term: 'moment-to-force ratio', definition: 'Relationship determining type of tooth movement produced' },
        { term: 'NiTi', definition: 'Nickel-titanium alloy with superelasticity for alignment wires' },
        { term: 'functional appliance', definition: 'Removable device modifying growth through muscle/jaw positioning' },
        { term: 'RPE', definition: 'Rapid Palatal Expansion; appliance for skeletal maxillary widening' },
        { term: 'CBCT', definition: 'Cone Beam CT; 3D imaging for orthodontic diagnosis' },
      ],
      clinicalNotes: 'M/F ratio determines movement type - understanding this is essential for mechanics design. TADs provide absolute anchorage for challenging movements. Growth modification requires growing patient. Digital workflow improving aligner predictability. Adult patients require careful periodontal assessment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary orthodontics research encompasses accelerated tooth movement, precision digital workflows, personalized treatment based on biological factors, and integration with regenerative approaches.',
      explanation: `## Accelerated Tooth Movement

**Biological Approaches:**
| Method | Mechanism |
|--------|-----------|
| Micro-osteoperforations | Regional Acceleratory Phenomenon |
| Corticotomy | Decreased bone density |
| Low-level laser | Biostimulation |
| Vibration | Enhanced remodeling |

**Evidence:**
- Variable outcomes in studies
- Propel (micro-osteoperforation) most studied
- Cost-benefit consideration
- Patient selection important

## Precision Treatment

**AI-Driven Planning:**
| Application | Status |
|-------------|--------|
| Treatment prediction | Commercial use |
| Aligner staging | Standard |
| Outcome assessment | Emerging |
| Root position prediction | Improving |

**3D-Printed Appliances:**
- Direct-printed aligners
- Custom brackets
- Surgical guides
- Retainers

## Personalized Orthodontics

**Biological Factors:**
| Factor | Impact |
|--------|--------|
| Age | Rate of movement |
| Bone density | Response to force |
| Root morphology | Resorption risk |
| Genetics | Individual variation |

**Biomarkers:**
- GCF biomarkers for movement
- Salivary indicators
- Future: Genetic profiling

## Regenerative Integration

**Periodontal Considerations:**
| Procedure | Integration |
|-----------|-------------|
| CTG | Pre-ortho tissue augmentation |
| Bone grafting | Enable movement into grafted areas |
| GTR | Following ortho-induced defects |

**Alveolar Engineering:**
- Corticotomy-assisted orthodontics
- Bone grafting protocols
- Expansion with regeneration

## Future Directions

**Research Priorities:**
1. Biological acceleration validation
2. Root resorption prediction
3. AI treatment optimization
4. Personalized force protocols
5. Direct aligner printing

**Clinical Translation:**
1. Digital workflows becoming standard
2. AI improving treatment predictability
3. Acceleration methods need more evidence
4. Personalization based on biology is future
5. Integration with regenerative dentistry`,
      keyTerms: [
        { term: 'Regional Acceleratory Phenomenon', definition: 'Localized increase in bone remodeling after surgical trauma' },
        { term: 'micro-osteoperforation', definition: 'Small perforations in cortical bone to accelerate movement' },
        { term: 'direct-printed aligners', definition: 'Aligners 3D-printed directly rather than thermoformed' },
        { term: 'CBCT root tracking', definition: 'Using serial CBCT to monitor root position during treatment' },
      ],
      clinicalNotes: `Research translation priorities:
1. Acceleration methods have variable evidence - case selection important
2. Digital workflow is standard of care
3. AI improving aligner treatment prediction
4. Biological individual variation affects treatment
5. Root resorption prediction improving with imaging
6. Personalized force protocols based on biology is future direction`,
    },
  },

  media: [{ id: 'bracket-system', type: 'diagram', filename: 'orthodontic-brackets.svg', title: 'Bracket System', description: 'Components of fixed orthodontic appliance' }],
  citations: [{ id: 'proffit-ortho', type: 'textbook', title: 'Contemporary Orthodontics', authors: ['Proffit, W.R.'], source: 'Elsevier' }],
  crossReferences: [{ targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' }],
  tags: { systems: ['dental'], structures: ['teeth', 'jaws'], topics: ['treatment', 'orthodontics'], keywords: ['braces', 'aligners', 'malocclusion'], clinicalRelevance: 'high', examRelevance: { usmle: false, nbme: false, shelf: [] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default orthodonticsBasics;
