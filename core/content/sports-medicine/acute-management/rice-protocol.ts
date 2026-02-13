/**
 * RICE Protocol - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const riceProtocol: EducationalContent = {
  id: 'sports-med-rice-protocol',
  type: 'concept',
  name: 'RICE Protocol',
  alternateNames: ['RICE Treatment', 'POLICE Protocol', 'Acute Injury First Aid'],

  levels: {
    1: {
      level: 1,
      summary: 'RICE stands for Rest, Ice, Compression, and Elevation - the basic steps for treating a new injury.',
      explanation: `## What is RICE?

RICE is an easy way to remember how to treat a new injury like a sprain or strain.

**R - Rest**
- Stop the activity that caused the injury
- Avoid putting weight on it if it hurts
- Give your body time to heal

**I - Ice**
- Put ice on the injury
- Use a towel between ice and skin
- 15-20 minutes at a time
- Helps reduce swelling and pain

**C - Compression**
- Wrap the area with an elastic bandage
- Should be snug but not too tight
- Helps control swelling

**E - Elevation**
- Raise the injured area above your heart
- Use pillows to prop it up
- Helps fluid drain away

**When to See a Doctor**
- Can't put weight on it
- Severe swelling
- Visible deformity
- Pain doesn't improve`,
      keyTerms: [
        { term: 'RICE', definition: 'Rest, Ice, Compression, Elevation - first aid for injuries' },
        { term: 'compression', definition: 'Wrapping with a bandage to reduce swelling' },
      ],
    },
    2: {
      level: 2,
      summary: 'RICE/POLICE protocols guide initial management of acute soft tissue injuries, with emphasis shifting from rest to optimal loading and early mobilization.',
      explanation: `## RICE to POLICE Evolution

### Traditional RICE
- **Rest:** Avoid use of injured area
- **Ice:** Cryotherapy for pain and swelling
- **Compression:** Elastic wrap
- **Elevation:** Above heart level

### Updated: POLICE
- **P**rotection: Prevent further injury
- **O**ptimal **L**oading: Controlled stress promotes healing
- **I**ce: Cryotherapy
- **C**ompression: Swelling control
- **E**levation: Promote drainage

### Rationale for Change
- Complete rest may delay healing
- Controlled loading promotes tissue healing
- Early mobilization improves outcomes

### Application
**First 24-72 Hours:**
- Protection (brace, crutches if needed)
- Ice: 15-20 min every 2-3 hours
- Compression: Elastic wrap
- Elevation when resting

**Progressive Loading:**
- Pain-free range of motion
- Weight-bearing as tolerated
- Gradual increase in activity

### Ice Application
**Guidelines:**
- 15-20 minutes per session
- Barrier between ice and skin
- Avoid prolonged application
- May use ice bags, ice cups, cold packs

### When to Seek Care
- Unable to bear weight
- Significant deformity
- Neurovascular compromise
- No improvement in 48-72 hours`,
      keyTerms: [
        { term: 'POLICE', definition: 'Protection, Optimal Loading, Ice, Compression, Elevation' },
        { term: 'optimal loading', definition: 'Controlled stress on healing tissue to promote repair' },
        { term: 'cryotherapy', definition: 'Use of cold for treatment of injury' },
      ],
    },
    3: {
      level: 3,
      summary: 'Contemporary acute injury management emphasizes tissue-specific loading protocols, understanding of inflammatory response modulation, and evidence-based application of traditional interventions.',
      explanation: `## Evidence-Based Acute Management

### Evolution of Protocols
**RICE → PRICE → POLICE → PEACE & LOVE**

### PEACE & LOVE (Newest)
**Immediately (PEACE):**
- **P**rotection: Avoid aggravating activities
- **E**levation: Above heart
- **A**void anti-inflammatories: May impair healing
- **C**ompression: Reduce swelling
- **E**ducation: Set expectations

**Subsequently (LOVE):**
- **L**oad: Progressive activity
- **O**ptimism: Positive psychology
- **V**ascularization: Aerobic exercise
- **E**xercise: Restore function

### Ice: Evidence Review
**Proposed Benefits:**
- Pain reduction (well-supported)
- Swelling reduction (limited evidence)
- Tissue protection (uncertain)

**Concerns:**
- May delay healing
- Vasoconstriction limits nutrient delivery
- Standard practice despite limited evidence

### Anti-Inflammatory Use
**Debate:**
- Inflammation is necessary for healing
- NSAIDs may impair tissue repair
- Short-term pain relief vs. healing

**Current Guidance:**
- Consider avoiding in first 48-72 hours
- Short course if needed for function
- Avoid prolonged use

### Optimal Loading
**Principles:**
- Mechanical stress promotes healing
- Tissue-specific loading protocols
- Progressive based on response

**Application:**
- Early range of motion
- Graded weight-bearing
- Eccentric loading (tendon)`,
      keyTerms: [
        { term: 'PEACE & LOVE', definition: 'Modern acute injury management acronym emphasizing loading and avoiding anti-inflammatories' },
        { term: 'mechanotherapy', definition: 'Use of mechanical loading to promote tissue healing' },
      ],
      clinicalNotes: 'Evidence for ice is weaker than traditionally thought. Consider limiting anti-inflammatories early. Optimal loading supports healing. Individual protocols based on injury type and patient.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of acute injury management integrates inflammation biology, mechanobiology of tissue healing, and individualized protocols based on injury characteristics and patient factors.',
      explanation: `## Advanced Concepts

### Inflammatory Response
**Phase 1 (0-72 hrs): Inflammatory**
- Hemostasis
- Phagocytosis
- Cytokine cascade
- Necessary for healing

**Phase 2 (3-21 days): Proliferative**
- Fibroblast proliferation
- Matrix synthesis
- Angiogenesis

**Phase 3 (21 days-1+ year): Remodeling**
- Collagen maturation
- Tissue strengthening

### Modifying Inflammation
**NSAIDs:**
- COX inhibition
- Reduced prostaglandins
- May impair healing phases
- Use judiciously

**Cryotherapy Effects:**
- Vasoconstriction
- Reduced nerve conduction
- Metabolic slowing
- Optimal dosing unclear

### Mechanobiology
**Tissue Response to Load:**
- Cellular mechanotransduction
- Gene expression changes
- Matrix remodeling
- Adaptation to stress

**Loading Principles:**
- Start with tolerable loads
- Progress systematically
- Monitor tissue response
- Avoid overload

### Tissue-Specific Protocols
**Muscle:**
- Early gentle motion
- Progressive resistance
- Eccentric training

**Ligament:**
- Protected early motion
- Progressive weight-bearing
- Neuromuscular training

**Tendon:**
- Isometric for pain
- Progressive eccentric
- Heavy slow resistance`,
      keyTerms: [
        { term: 'cytokine cascade', definition: 'Sequence of inflammatory signaling molecules released after injury' },
        { term: 'fibroblast', definition: 'Cell type that produces collagen and repairs connective tissue' },
      ],
      clinicalNotes: 'Inflammation is necessary for healing - don not eliminate completely. Loading protocols should be tissue-specific. Ice for pain relief is reasonable; effect on healing unclear. Anti-inflammatory timing matters.',
    },
    5: {
      level: 5,
      summary: 'Research frontiers explore optimizing the inflammatory response, novel cryotherapy applications, and biologics to enhance tissue healing.',
      explanation: `## Research Directions

### Inflammation Modulation
**Targeted Approaches:**
- Selective COX-2 inhibition
- Pro-resolution mediators
- Timing optimization
- Individual variation

**Resolution Biology:**
- Lipoxins, resolvins
- Macrophage phenotype switching
- Active resolution processes

### Cryotherapy Research
**Mechanisms:**
- Optimal dosing protocols
- Tissue-specific effects
- Comparison to other modalities

**Novel Applications:**
- Whole-body cryotherapy
- Contrast therapy
- Targeted cooling

### Biologics
**Growth Factors:**
- PRP
- BMAC
- Specific growth factors

**Stem Cells:**
- MSCs
- Delivery optimization
- Clinical evidence emerging

### Tissue Engineering
**Scaffolds:**
- Support tissue regeneration
- Growth factor delivery
- Mechanical properties

### Monitoring Healing
**Biomarkers:**
- Inflammatory markers
- Tissue-specific proteins
- Imaging correlates

**Imaging:**
- Serial monitoring
- Functional assessment`,
      keyTerms: [
        { term: 'resolvins', definition: 'Lipid mediators that actively promote inflammation resolution' },
        { term: 'pro-resolution', definition: 'Active processes that turn off inflammation and promote healing' },
      ],
      clinicalNotes: 'Inflammation resolution is an active process, not just passive decline. Optimal modulation may improve healing. Biologics showing promise but evidence still developing. Personalized approaches may be future of acute care.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-acute-injury-assessment', targetType: 'concept', relationship: 'related', label: 'Acute Injury Assessment' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['first-aid', 'acute-injury', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default riceProtocol;
