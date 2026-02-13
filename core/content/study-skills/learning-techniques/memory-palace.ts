/**
 * Memory Palace - Ancient Technique for Modern Learning
 *
 * Educational content covering the memory palace (method of loci) technique
 * for medical education and exam preparation.
 */

import { EducationalContent } from '../../types';

export const memoryPalace: EducationalContent = {
  id: 'education-memory-palace',
  type: 'concept',
  name: 'Memory Palace',
  alternateNames: ['Method of Loci', 'Memory Journey', 'Mind Palace', 'Journey Method'],

  levels: {
    1: {
      level: 1,
      summary: 'The memory palace is a technique where you imagine a familiar place and put things you want to remember in specific spots. It helps you remember lots of information.',
      explanation: `## What Is a Memory Palace?

A memory palace is a way to remember things by imagining a place you know well, like your house, and putting the things you want to remember in different spots in that place.

## How It Works

**Step 1: Choose a Palace:**
- Pick a place you know very well
- Could be your home, school, or a route you walk
- The more familiar, the better

**Step 2: Create a Route:**
- Plan a path through your palace
- Go in the same order every time
- Make sure you can visualize it clearly

**Step 3: Place Information:**
- Put what you want to remember in specific spots
- Make it weird, funny, or memorable
- Connect the information to the location

**Step 4: Walk Through:**
- Imagine walking through your palace
- See the items you placed
- Remember what each item represents

## Example

To remember the cranial nerves:
- Front door (I): Olfactory - imagine smelling something at the door
- Living room (II): Optic - giant eye on the couch
- Kitchen (III): Oculomotor - moving eyes on the fridge
- And so on...

## Why It Works

- Our brains remember places very well
- We remember weird and unusual things
- Walking through a familiar route creates a story
- It turns abstract information into concrete images

## Tips for Success

1. Use places you know really well
2. Make the images crazy and memorable
3. Always use the same route
4. Practice walking through regularly
5. Review often to keep the palace fresh`,
      keyTerms: [
        { term: 'memory palace', definition: 'A memory technique using visualization of a familiar place to store information' },
        { term: 'method of loci', definition: 'The ancient technique of using locations as memory cues' },
        { term: 'locus', definition: 'A specific location in a memory palace where information is stored' },
        { term: 'visualization', definition: 'Creating mental images to help remember information' },
      ],
      analogies: [
        'A memory palace is like a filing cabinet where each room is a drawer and each spot is a folder.',
        'It is like organizing your clothes in specific places in your closet - you know exactly where to find each item.',
      ],
      examples: [
        'To remember the Krebs cycle, a student places each step in a different room of their childhood home.',
        'A medical student remembers the brachial plexus by placing each branch at different landmarks along their walk to school.',
      ],
      patientCounselingPoints: [
        'Memory techniques can help patients remember medication schedules and health information',
        'Using familiar places and images makes medical information easier to recall',
      ],
    },

    2: {
      level: 2,
      summary: 'The method of loci is an ancient mnemonic technique that uses spatial memory to encode and retrieve information. It leverages the brain\'s strong capacity for remembering places and routes to organize large amounts of information.',
      explanation: `## Understanding the Method of Loci

The method of loci, dating back to ancient Greece and Rome, is one of the most powerful and proven memory techniques, consistently used by memory champions and effective learners.

## Historical Background

**Ancient Origins:**
- Attributed to Simonides of Ceos (5th century BCE)
- Used by orators to remember long speeches
- Cicero documented the technique
- Medieval scholars used it for religious texts

**Modern Validation:**
- Used by memory competition champions
- Supported by cognitive neuroscience research
- Effective for students, professionals, memory athletes

## Cognitive Mechanisms

**Why It Works:**
| Mechanism | Explanation |
|-----------|-------------|
| Spatial memory | Humans evolved strong place memory |
| Episodic encoding | Creates memorable "experiences" |
| Dual coding | Combines visual and verbal |
| Elaboration | Rich, distinctive encoding |
| Story structure | Sequential, narrative format |

**Neuroscience Research:**
- Hippocampus activation during navigation
- Same brain regions for real and imagined places
- fMRI shows increased connectivity
- Structural brain changes with practice

## Building Your First Memory Palace

**Location Selection:**
| Criteria | Examples |
|----------|----------|
| Familiarity | Childhood home, current residence |
| Distinctiveness | Museum, park, school |
| Size | 10-50 distinct locations |
| Emotional connection | Grandparents\' house |

**Route Creation:**
1. Choose starting point
2. Define clear path through locations
3. Number positions if helpful
4. Ensure consistent order
5. Practice mental walkthrough

**Image Creation:**
| Element | Purpose |
|---------|---------|
| Exaggeration | Makes memorable |
| Action | Creates dynamism |
| Emotion | Enhances encoding |
| Absurdity | Prevents confusion |
| Multi-sensory | Rich encoding |

## Medical Education Applications

**Anatomy:**
| System | Palace Application |
|--------|-------------------|
| Cranial nerves | Numbered stops on a route |
| Brachial plexus | Room-by-room progression |
| Spinal tracts | Floor-by-floor building |
| Abdominal anatomy | Kitchen/garden setting |

**Pharmacology:**
| Category | Memory Strategy |
|----------|-----------------|
| Drug classes | Different rooms |
| Side effects | Vivid images |
| Mechanisms | Action scenes |
| Contraindications | Warning signs |

**Biochemistry:**
| Pathway | Palace Organization |
|---------|---------------------|
| Glycolysis | Sequential locations |
| Krebs cycle | Circular route |
| Urea cycle | Journey with landmarks |

## Advanced Techniques

**Multiple Palaces:**
| Purpose | Strategy |
|---------|----------|
| Different subjects | Separate palaces |
| Related topics | Connected palaces |
| Detailed information | Nested palaces |
| Review | Palace revisits |

** palace Maintenance:**
- Regular mental walkthroughs
- Adding new information
- Consolidating old information
- Rebuilding when needed

**Combining with Other Techniques:**
| Technique | Combination |
|-----------|-------------|
| Spaced repetition | Palace review schedule |
| Active recall | Mental retrieval walks |
| Mnemonics | Image enhancement |
| Flashcards | Palace supplement |

## Practical Implementation

**Study Session Structure:**
1. **Create/Review Palace:** 5-10 minutes
2. **Encode New Material:** 20-30 minutes
3. **Mental Walkthrough:** 10-15 minutes
4. **Active Recall:** 10-15 minutes
5. **Consolidation:** Sleep, rest

**Common Mistakes:**
| Mistake | Correction |
|---------|------------|
| Vague images | Make vivid, detailed |
| Crowded locations | One item per locus |
| Unfamiliar palace | Use well-known place |
| Inconsistent route | Always same path |
| Passive review | Active mental walking |

**Progression:**
| Stage | Focus |
|-------|-------|
| Beginner | Single palace, simple items |
| Intermediate | Multiple palaces, complex info |
| Advanced | Palace networks, rapid encoding |
| Expert | Competition-level performance |`,
      keyTerms: [
        { term: 'mnemonic', definition: 'A memory aid or technique to help remember information' },
        { term: 'spatial memory', definition: 'The part of memory responsible for recording information about environment and spatial orientation' },
        { term: 'episodic memory', definition: 'Memory of autobiographical events including times, places, and associated emotions' },
        { term: 'dual coding', definition: 'The theory that information is better retained when encoded both visually and verbally' },
      ],
      analogies: [
        'The method of loci is like having a GPS for your memory - you always know where to find what you stored.',
        'Creating images in a memory palace is like creating scenes in a movie - the more dramatic, the more memorable.',
      ],
      examples: [
        'To remember the 12 cranial nerves, create 12 stops in your house with vivid images representing each nerve.',
        'For drug side effects, imagine exaggerated versions of those side effects happening at each location.',
      ],
      patientCounselingPoints: [
        'The memory palace technique can help remember complex medical information for patient education',
        'Visual-spatial memory is often preserved even when other memory types decline',
      ],
    },

    3: {
      level: 3,
      summary: 'The method of loci leverages hippocampal spatial processing and episodic memory systems. Effective implementation requires systematic palace construction, vivid image creation, and integration with active recall for medical education.',
      explanation: `## Memory Palace Science and Application

The method of loci represents a sophisticated application of memory neuroscience, offering a systematic approach to encoding and retrieving complex information.

## Neuroscience Foundations

**Hippocampal Function:**
| Role | Application to Loci |
|------|---------------------|
| Place cells | Encode specific locations |
| Grid cells | Track position in space |
| Time cells | Sequence information |
| Episodic buffer | Bind elements together |

**Memory Consolidation:**
| Stage | Process | Loci Application |
|-------|---------|------------------|
| Encoding | Initial learning | Image creation |
| Consolidation | Stabilization | Sleep, review |
| Reconsolidation | Update/modification | Palace modification |
| Retrieval | Access | Mental walkthrough |

**Competition-Level Research:**
- Structural brain differences in memory athletes
- Training-induced neuroplasticity
- Functional reorganization with practice
- White matter changes

## Systematic Palace Construction

**Location Categories:**
| Type | Characteristics | Best For |
|------|-----------------|----------|
| Buildings | Rooms, floors | Sequential information |
| Routes | Journeys, paths | Processes, pathways |
| Landscapes | Natural features | Categorical information |
| Objects | Body, vehicle | Detailed systems |

**Locus Design:**
| Feature | Implementation |
|---------|----------------|
| Numbering | Sequential markers |
| Lighting | Well-lit scenes |
| Size | Human-scale objects |
| Stability | Permanent locations |
| Distinctiveness | Unique features |

**Route Optimization:**
1. Logical flow
2. No backtracking
3. Consistent direction
4. Clear transitions
5. Memorable landmarks

## Advanced Image Creation

**Visual Encoding Principles:**
| Principle | Application |
|-----------|-------------|
| Size | Larger than life |
| Color | Bright, contrasting |
| Movement | Active, dynamic |
| Interaction | With environment |
| Multi-sensory | Sound, smell, touch |

**Association Types:**
| Type | Example |
|------|---------|
| Visual similarity | Shape, color |
| Sound similarity | Rhyme, wordplay |
| Meaning association | Function, category |
| Personal connection | Experience, emotion |
| Absurd combination | Unexpected pairing |

**Image Maintenance:**
- Strengthen weak images
- Consolidate similar items
- Update outdated information
- Refresh fading memories

## Medical Content Applications

**Clinical Medicine:**
| Topic | Palace Strategy |
|-------|-----------------|
| Differential diagnosis | Rooms for categories |
| Treatment algorithms | Decision trees as routes |
| Drug interactions | Collision scenes |
| Physical exam | Body as palace |

**Basic Science:**
| Subject | Organization |
|---------|--------------|
| Biochemistry pathways | Sequential journey |
| Microbiology | Different kingdoms as palaces |
| Pharmacology | Pharmacy setting |
| Anatomy | Body or building sections |

**Board Preparation:**
| Use Case | Approach |
|----------|----------|
| High-yield facts | Core palace |
| Weak areas | Dedicated palaces |
| Quick review | Compressed routes |
| Mnemonics | Image enhancement |

## Integration with Study Systems

**Spaced Repetition:**
| Schedule | Palace Activity |
|----------|-----------------|
| Daily | Mental walkthrough |
| Weekly | Active recall sessions |
| Monthly | Full palace reviews |
| Pre-exam | Rapid palace tours |

**Active Recall Enhancement:**
- Mental palace without notes
- Reconstruct from memory
- Identify weak spots
- Reinforce with imagery

**Collaborative Learning:**
- Share palace designs
- Group memory walks
- Peer testing
- Palace building workshops

## Troubleshooting

**Common Problems:**
| Problem | Solution |
|---------|----------|
| Confusion between items | More distinctive images |
| Forgetting locations | More familiar palace |
| Retrieval failure | Active recall practice |
| Information overload | Multiple palaces |
| Image decay | Regular review |

**Optimization Strategies:**
- Personalize images
- Connect to existing knowledge
- Use emotional hooks
- Create storylines
- Practice under time pressure

**Assessment:**
- Timed palace walks
- Accuracy of recall
- Speed of encoding
- Durability over time`,
      keyTerms: [
        { term: 'place cells', definition: 'Neurons in the hippocampus that become active when an animal is in a specific location' },
        { term: 'neuroplasticity', definition: 'The brain\'s ability to reorganize itself by forming new neural connections' },
        { term: 'memory consolidation', definition: 'The process by which temporary memories become stable, long-term memories' },
        { term: 'reconsolidation', definition: 'The process of restabilizing a memory after it is retrieved' },
      ],
      analogies: [
        'The hippocampus is like the brain\'s GPS system - it naturally tracks where things are located.',
        'Building a memory palace is like creating a video game world - you design the environment and place items strategically.',
      ],
      examples: [
        'A student creates a palace for antibiotics: the entryway for penicillins, living room for cephalosporins, kitchen for aminoglycosides, each with characteristic images.',
        'To remember the clotting cascade, a student creates a journey where each factor activates the next at specific landmarks.',
      ],
      patientCounselingPoints: [
        'Spatial memory techniques can help patients remember medication schedules and health routines',
        'The method of loci has been used for thousands of years and is supported by modern neuroscience',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced memory palace mastery requires understanding neurocognitive mechanisms, sophisticated palace design, and strategic integration with other learning methods. Expert practitioners create palace networks and optimize encoding efficiency.',
      explanation: `## Advanced Memory Palace Concepts

Expert application of the method of loci requires sophisticated understanding of memory systems, advanced construction techniques, and strategic educational application.

## Cognitive Architecture

**Working Memory Integration:**
| Component | Loci Application |
|-----------|------------------|
| Phonological loop | Verbal associations |
| Visuospatial sketchpad | Image creation |
| Episodic buffer | Scene integration |
| Central executive | Route planning |

**Long-Term Memory Systems:**
| System | Loci Enhancement |
|--------|------------------|
| Episodic | Journey experiences |
| Semantic | Concept mapping |
| Procedural | Route automation |
| Prospective | Palace checkpoints |

**Attention Mechanisms:**
| Type | Application |
|------|-------------|
| Sustained | Extended palace walks |
| Selective | Focus on specific loci |
| Divided | Multi-palace management |
| Alternating | Palace switching |

## Sophisticated Palace Design

**Architectural Principles:**
| Principle | Implementation |
|-----------|----------------|
| Hierarchy | Palaces within palaces |
| Parallel routes | Different entry points |
| Interconnectedness | Palace networks |
| Modularity | Swappable sections |

**Location Taxonomy:**
| Category | Examples | Best Use |
|----------|----------|----------|
| Micro | Body parts | Detail |
| Meso | Rooms | Sequences |
| Macro | Buildings | Categories |
| Mega | Cities | Domains |

**Route Complexity:**
- Linear: Simple sequences
- Branched: Decision points
- Cyclical: Review loops
- Layered: Depth of detail

## Expert Image Techniques

**Exaggeration Dimensions:**
| Dimension | Technique |
|-----------|-----------|
| Size | Gigantic or miniature |
| Quantity | Many or few |
| Intensity | Extreme versions |
| Context | Wrong setting |

**Transformation Strategies:**
| Strategy | Example |
|----------|---------|
| Personification | Objects as characters |
| Animation | Inanimate objects active |
| Hybridization | Combined creatures |
| Substitution | Unexpected replacements |

**Multi-Layered Encoding:**
- Surface image: First association
- Deeper meaning: Conceptual link
- Personal relevance: Emotional connection
- Functional relationship: How it works

## Medical Education Optimization

**Clinical Reasoning:**
| Skill | Palace Application |
|-------|-------------------|
| Pattern recognition | Diagnostic palaces |
| Differential generation | Branching routes |
| Treatment selection | Decision trees |
| Prognostication | Outcome pathways |

**Knowledge Organization:**
| Structure | Palace Design |
|-----------|---------------|
| Taxonomy | Hierarchical |
| Process | Sequential |
| Network | Interconnected |
| Matrix | Grid layout |

**Examination Preparation:**
| Phase | Strategy |
|-------|----------|
| Foundation | Core palaces |
| Integration | Palace connections |
| Application | Scenario palaces |
| Review | Compressed routes |

## Quantitative Performance

**Metrics:**
| Measure | Assessment |
|---------|------------|
| Encoding speed | Items per minute |
| Accuracy | Percent correct |
| Retention | Delayed recall |
| Durability | Long-term stability |

**Benchmarks:**
| Level | Encoding Rate | Accuracy |
|-------|---------------|----------|
| Novice | 1-2 items/min | 60-70% |
| Competent | 3-5 items/min | 75-85% |
| Expert | 6-10 items/min | 90-95% |
| Elite | 10+ items/min | 95%+ |

**Competition Techniques:**
- Binary digit palaces
- Playing card systems
- Name/face methods
- Historical dates

## Integration Strategies

**Complementary Techniques:**
| Technique | Synergy |
|-----------|---------|
| Spaced repetition | Palace review timing |
| Active recall | Mental retrieval |
| Concept mapping | Palace architecture |
| Elaboration | Image enrichment |

**Technology Enhancement:**
| Tool | Application |
|------|-------------|
| 3D modeling | Palace visualization |
| VR | Immersive environments |
| Mind mapping | Palace planning |
| Flashcard apps | Palace supplements |

**Collaborative Methods:**
- Palace co-creation
- Group memory walks
- Competitive recall
- Teaching others

## Research Applications

**Cognitive Enhancement:**
| Application | Study |
|-------------|-------|
| Aging | Memory preservation |
| TBI | Rehabilitation |
| Education | Learning enhancement |
| Professional | Expertise development |

**Neuroscience Research:**
- fMRI studies
- Training interventions
- Individual differences
- Transfer effects

**Educational Research:**
- Retention studies
- Transfer to new learning
- Motivation effects
- Long-term outcomes`,
      keyTerms: [
        { term: 'visuospatial sketchpad', definition: 'A component of working memory responsible for temporarily storing visual and spatial information' },
        { term: 'memory athlete', definition: 'A person who competes in memory competitions using techniques like the method of loci' },
        { term: 'hierarchical organization', definition: 'Arranging information in levels from general to specific' },
        { term: 'cognitive enhancement', definition: 'The improvement of cognitive abilities through various techniques or interventions' },
      ],
      analogies: [
        'An advanced memory palace is like a computer file system with folders within folders - organized yet accessible.',
        'Expert-level palace construction is like architecture - combining form, function, and aesthetics.',
      ],
      examples: [
        'A competition memory athlete uses a palace system with 100+ locations to memorize the order of multiple shuffled decks of cards.',
        'A medical resident creates interconnected palaces for each rotation, with a "central hospital" connecting all specializations.',
      ],
      patientCounselingPoints: [
        'Advanced memory techniques can be adapted for patients with memory impairments',
        'Memory palace training has shown benefits for cognitive rehabilitation',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of the method of loci encompasses neuroscience understanding, expert-level construction, teaching capability, and innovation in memory techniques. Elite practitioners contribute to the field while mentoring others in sophisticated memory systems.',
      explanation: `## Professional Memory Palace Framework

Professional mastery of the method of loci integrates neuroscience expertise, pedagogical skill, and innovative application across educational and clinical domains.

## Neuroscience Expertise

**Advanced Brain Mechanisms:**
| System | Expert Understanding |
|--------|----------------------|
| Hippocampal indexing | Pattern completion, separation |
| Prefrontal integration | Strategic organization |
| Parietal involvement | Spatial manipulation |
| Temporal binding | Episode construction |

**Plasticity Mechanisms:**
| Type | Application |
|------|-------------|
| Structural | Palace complexity capacity |
| Functional | Encoding efficiency |
| Connectomic | Palace networks |
| Molecular | Consolidation enhancement |

**Individual Differences:**
| Factor | Implication |
|--------|-------------|
| Spatial ability | Palace selection |
| Imagery vividness | Image creation |
| Working memory | Route complexity |
| Prior knowledge | Association quality |

## Master-Level Construction

**Palace Ecosystems:**
| Level | Organization |
|-------|--------------|
| Micro | Individual loci |
| Meso | Rooms, routes |
| Macro | Palaces |
| Meta | Palace networks |
| Mega | Domain systems |

**Dynamic Palaces:**
- Self-updating structures
- Adaptive capacity
- Information flow
- Consolidation automation

**Collaborative Architecture:**
- Shared spaces
- Interpersonal links
- Cultural palaces
- Institutional memory

## Teaching Mastery

**Pedagogical Progression:**
| Stage | Focus |
|-------|-------|
| Awareness | Introducing the technique |
| Skill building | Basic construction |
| Application | Subject integration |
| Fluency | Automatic use |
| Innovation | Personal adaptation |

**Assessment Methods:**
| Type | Purpose |
|------|---------|
| Formative | Skill development |
| Summative | Competency verification |
| Diagnostic | Weakness identification |
| Authentic | Real-world application |

**Curriculum Integration:**
- Medical school courses
- Residency training
- Continuing education
- Patient education

## Innovation and Research

**Technological Frontiers:**
| Technology | Application |
|------------|-------------|
| VR/AR | Immersive palaces |
| Brain-computer interfaces | Direct encoding |
| AI assistance | Palace optimization |
| Haptics | Tactile encoding |

**Novel Applications:**
| Domain | Innovation |
|--------|------------|
| Clinical | Patient education |
| Surgical | Procedure memorization |
| Diagnostic | Pattern recognition |
| Therapeutic | Cognitive rehabilitation |

**Research Leadership:**
- Study design
- Intervention development
- Outcome measurement
- Translation to practice

## Professional Applications

**Medical Practice:**
| Application | Implementation |
|-------------|----------------|
| Clinical knowledge | Comprehensive palaces |
| Procedural memory | Motor sequence palaces |
| Patient care | Individual patient palaces |
| Quality | Safety checklists |

**Education Leadership:**
| Role | Contribution |
|------|--------------|
| Curriculum design | Palace integration |
| Faculty development | Teaching skills |
| Assessment | Memory-based evaluation |
| Research | Scholarship |

**Healthcare Innovation:**
| Area | Application |
|------|-------------|
| Patient safety | Memory aids |
| Clinical decision support | Diagnostic palaces |
| Medical errors | Prevention systems |
| Quality improvement | Standardization |

## Future Directions

**Emerging Science:**
| Area | Development |
|------|-------------|
| Neuroimaging | Real-time palace viewing |
| Optogenetics | Memory enhancement |
| Pharmacology | Consolidation boosters |
| Genetics | Individual optimization |

**Societal Applications:**
| Domain | Impact |
|--------|--------|
| Education | Universal technique |
| Aging | Cognitive preservation |
| Rehabilitation | Recovery support |
| Professional | Expertise development |

**Ethical Considerations:**
| Issue | Framework |
|-------|-----------|
| Cognitive enhancement | Fairness, access |
| Privacy | Palace contents |
| Identity | Memory manipulation |
| Autonomy | Informed choice |

## Personal Excellence

**Mastery Path:**
1. Technical proficiency
2. Strategic application
3. Teaching capability
4. Innovation contribution
5. Field leadership

**Sustainable Practice:**
- Continued development
- Community engagement
- Work-life integration
- Legacy building

**Professional Identity:**
| Aspect | Development |
|--------|-------------|
| Expertise | Deep knowledge |
| Reputation | Recognized authority |
| Network | Collaborative relationships |
| Impact | Meaningful contribution |`,
      keyTerms: [
        { term: 'connectome', definition: 'A comprehensive map of neural connections in the brain' },
        { term: 'neuroplasticity', definition: 'The brain\'s ability to change and adapt as a result of experience' },
        { term: 'cognitive rehabilitation', definition: 'Therapy designed to improve cognitive functioning after injury or illness' },
        { term: 'immersive learning', definition: 'Learning through complete immersion in an artificial environment or experience' },
      ],
      clinicalNotes: `Expert perspective on the memory palace:

1. **Neuroscience Foundation:** The method of loci works because it leverages our brain's evolved spatial memory systems. Understanding this helps optimize technique.

2. **Vividness is Key:** The more bizarre, emotional, and multi-sensory your images, the better they will be remembered. Do not be afraid to be absurd.

3. **Familiarity Matters:** Use places you know intimately. The better you know the palace, the less cognitive load for navigation.

4. **One Item Per Locus:** Do not crowd locations. One vivid image per spot prevents confusion.

5. **Active Recall Essential:** Mental walkthroughs are necessary for retention. Passive review is insufficient.

6. **Integration with Active Learning:** The palace is one tool among many. Combine with spaced repetition, active recall, and elaboration.

7. **Maintenance Required:** Palaces fade without use. Regular review, especially initially, cements memories.

8. **Personalization Works Best:** Generic images are less effective than personalized, emotionally meaningful ones.

9. **Scalability:** Start with simple palaces and expand. Complex palace networks come with practice.

10. **Clinical Application:** Beyond exams, use palaces for procedures, differential diagnoses, and patient presentations. The technique applies throughout medical practice.`,
    },
  },

  media: [
    {
      id: 'memory-palace-diagram',
      type: 'diagram',
      filename: 'memory-palace-diagram.svg',
      title: 'Memory Palace Structure',
      description: 'Diagram showing a house floor plan with labeled memory locations',
    },
    {
      id: 'hippocampus-memory',
      type: 'diagram',
      filename: 'hippocampus-memory.svg',
      title: 'Hippocampus and Spatial Memory',
      description: 'Brain diagram showing hippocampal involvement in spatial navigation',
    },
  ],

  citations: [
    {
      id: 'yates-art',
      type: 'textbook',
      title: 'The Art of Memory',
      authors: ['Yates, F.A.'],
      source: 'University of Chicago Press',
      accessedDate: '2025-01-28',
    },
    {
      id: 'memory-sport-research',
      type: 'article',
      title: 'Neural Patterns Underlying Memory-Based Contributions to Strategic Decision Making',
      authors: ['Wooley, J.D.', 'Graziano, M.S.'],
      source: 'Neuroscience & Biobehavioral Reviews',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
    { targetId: 'education-active-recall', targetType: 'concept', relationship: 'related', label: 'Active Recall' },
    { targetId: 'education-concept-mapping', targetType: 'concept', relationship: 'related', label: 'Concept Mapping' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['memory techniques', 'study skills', 'mnemonics', 'learning'],
    keywords: ['memory palace', 'method of loci', 'mnemonics', 'memory', 'study technique'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default memoryPalace;
