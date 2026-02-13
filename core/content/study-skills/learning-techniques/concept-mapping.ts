/**
 * Concept Mapping - Visual Organization of Knowledge
 *
 * Educational content covering concept mapping techniques, benefits,
 * and applications for medical education.
 */

import { EducationalContent } from '../../types';

export const conceptMapping: EducationalContent = {
  id: 'education-concept-mapping',
  type: 'concept',
  name: 'Concept Mapping',
  alternateNames: ['Mind Mapping', 'Knowledge Mapping', 'Visual Learning', 'Graphic Organizers'],

  levels: {
    1: {
      level: 1,
      summary: 'Concept maps are diagrams that show how ideas connect to each other. Drawing these pictures helps you understand and remember how things fit together.',
      explanation: `## What is a Concept Map?

A concept map is a picture that shows how ideas are connected. You put ideas in circles or boxes and draw lines between them to show how they relate.

## Why Make Concept Maps?

They help you:
- See the big picture
- Understand how things connect
- Remember information better
- Find what you don't understand

## How to Make a Concept Map

**Step 1: Start with a Main Idea**
- Put your main topic in the center
- Draw a circle around it

**Step 2: Add Related Ideas**
- Think of things connected to the main idea
- Put them around the center
- Draw circles around them

**Step 3: Draw Connections**
- Draw lines between connected ideas
- Write how they connect on the line

**Step 4: Keep Adding**
- Add more details
- Show more connections

## Example: The Heart

\`\`\`
       [Pumps Blood]
            |
    [HEART]-----[Has 4 Chambers]
       |              |
[Receives oxygen]-[Left and Right]
\`\`\`

## Different from Mind Maps

**Concept Map:**
- Shows how things connect
- Has words on the lines
- Can connect anywhere

**Mind Map:**
- Branches out from center
- Like a tree
- More creative and colorful

## Tips for Good Maps

- Start simple
- Use short words
- Draw neatly
- Use colors
- Add pictures if helpful`,
      keyTerms: [
        { term: 'concept map', definition: 'A diagram that shows how ideas or concepts are connected to each other' },
        { term: 'connection', definition: 'A line that shows how two ideas are related' },
        { term: 'main idea', definition: 'The central topic that a concept map is built around' },
      ],
      analogies: [
        'A concept map is like a family tree for ideas - showing how things are related.',
        'Drawing a concept map is like making a map of a neighborhood - showing how streets (ideas) connect.',
        'Connections in a concept map are like bridges between islands - they show how to get from one idea to another.',
      ],
      examples: [
        'A student learning about digestion draws a concept map with "Digestion" in the center, connecting to "Mouth," "Stomach," and "Intestines" with labeled arrows.',
        'To understand blood flow, a student maps how blood goes from "Heart" to "Lungs" to "Body" and back.',
      ],
      patientCounselingPoints: [
        'Concept maps help medical students see how body systems work together',
        'Drawing pictures of ideas can help anyone understand complex health information',
      ],
    },

    2: {
      level: 2,
      summary: 'Concept mapping is a visual learning technique that organizes knowledge hierarchically and shows relationships between concepts. Research supports its effectiveness for meaningful learning and knowledge integration in medical education.',
      explanation: `## Concept Mapping Fundamentals

Concept maps are graphical tools for organizing and representing knowledge through nodes (concepts) and labeled links (relationships).

## Key Components

**Nodes (Concepts):**
- Represent ideas, objects, or events
- Usually in boxes or circles
- One concept per node

**Links (Relationships):**
- Connect nodes with lines/arrows
- Labeled with linking words
- Show nature of relationship

**Propositions:**
- Concept + link + concept
- Form meaningful statements
- Example: "Heart → pumps → blood"

**Hierarchy:**
- Most general concepts at top
- More specific concepts below
- Creates organized structure

## Concept Maps vs. Mind Maps

| Feature | Concept Map | Mind Map |
|---------|-------------|----------|
| Structure | Hierarchical, networked | Radial from center |
| Links | Labeled with relationship | Unlabeled branches |
| Connections | Cross-links anywhere | Branch connections |
| Purpose | Understanding relationships | Brainstorming, memory |
| Style | Formal, structured | Creative, colorful |

## How to Create Effective Concept Maps

**Step 1: Identify Key Concepts**
- List important concepts from material
- Focus on main ideas first
- Usually 15-25 concepts for a topic

**Step 2: Rank Concepts**
- Most general/inclusive at top
- More specific concepts below
- Group related concepts

**Step 3: Begin Building**
- Place most inclusive concept at top
- Add subordinate concepts
- Connect with labeled lines

**Step 4: Add Cross-Links**
- Show relationships between different branches
- These are often the most valuable connections
- Indicate deeper understanding

**Step 5: Revise and Refine**
- Review for accuracy
- Add missing connections
- Improve link labels

## Benefits for Learning

**Meaningful Learning:**
- Moves beyond memorization
- Creates understanding
- Promotes long-term retention

**Integration:**
- Connects new to existing knowledge
- Shows relationships across topics
- Identifies gaps in understanding

**Metacognition:**
- Makes thinking visible
- Reveals misconceptions
- Guides further study

## Applications in Medical Education

**Learning Content:**
- Pathophysiology relationships
- Drug mechanism maps
- Diagnostic reasoning

**Assessment:**
- Demonstrate understanding
- Show clinical reasoning
- Peer teaching

**Clinical Practice:**
- Differential diagnosis
- Treatment planning
- Case analysis

## Tools for Concept Mapping

**Paper-Based:**
- Simple, no technology needed
- Easy to modify
- Good for initial learning

**Digital Tools:**
| Tool | Features |
|------|----------|
| CmapTools | Free, collaborative |
| Coggle | Web-based, simple |
| MindMeister | Mind mapping focus |
| Lucidchart | Professional diagrams |`,
      keyTerms: [
        { term: 'proposition', definition: 'A meaningful statement formed by two concepts connected by a labeled link' },
        { term: 'cross-link', definition: 'A connection between concepts in different areas of the map, showing integration' },
        { term: 'hierarchy', definition: 'Organization with most general concepts at top and more specific ones below' },
        { term: 'node', definition: 'A box or circle containing a single concept in a concept map' },
        { term: 'meaningful learning', definition: 'Learning that connects new information to existing knowledge in an organized way' },
      ],
      analogies: [
        'A concept map hierarchy is like an organizational chart - showing levels of importance and relationships.',
        'Cross-links in a concept map are like discovering that two friends from different groups know each other.',
        'Propositions are like complete sentences - subject, verb, object (concept, link, concept).',
      ],
      examples: [
        'A student creates a concept map of heart failure, with "Heart Failure" at the top, branching to "Left-sided" and "Right-sided," with cross-links showing how they can cause each other.',
        'To study diabetes, a student maps connections between "Insulin," "Glucose," "Beta Cells," and complications, using arrows to show cause and effect.',
      ],
      patientCounselingPoints: [
        'Concept maps help physicians visualize complex disease processes and their connections',
        'The same technique can help patients understand how their conditions and treatments relate',
      ],
    },

    3: {
      level: 3,
      summary: 'Concept mapping based on Ausubel\'s assimilation theory facilitates meaningful learning by making knowledge structure explicit. Research demonstrates benefits for understanding, retention, and transfer in medical education, particularly for complex integrated content.',
      explanation: `## Theoretical Foundations

Concept mapping was developed by Joseph Novak based on David Ausubel's assimilation theory of meaningful learning.

## Ausubel's Assimilation Theory

**Core Principles:**
- Learning is meaningful when new concepts connect to existing knowledge
- Prior knowledge is the most important factor in learning
- Subsumption: New concepts assimilate into existing cognitive structure

**Implications for Mapping:**
- Maps externalize cognitive structure
- Reveal prior knowledge
- Facilitate integration of new information
- Show subsumption relationships

## Concept Map Structure

**Structural Components:**
| Component | Function |
|-----------|----------|
| Focus question | Guides map scope |
| Concepts | Knowledge elements |
| Linking phrases | Relationship descriptors |
| Hierarchical levels | Organization |
| Cross-links | Integration across domains |

**Quality Indicators:**
- Valid propositions
- Hierarchical organization
- Meaningful cross-links
- Appropriate scope

## Construction Methodology

**Expert Skeleton Method:**
1. Expert provides partial map
2. Student completes
3. Compare to expert map
4. Discuss differences

**Fill-in Method:**
1. Map structure provided
2. Student fills concepts/links
3. Scaffolded learning
4. Gradually reduce scaffold

**Free Construction:**
1. Student creates from scratch
2. Demonstrates understanding
3. Reveals misconceptions
4. Most cognitively demanding

## Research Evidence

**Learning Outcomes:**
| Outcome | Evidence |
|---------|----------|
| Comprehension | Strong positive |
| Retention | Moderate positive |
| Problem-solving | Moderate positive |
| Transfer | Emerging positive |

**Medical Education Studies:**
- Improved diagnostic reasoning
- Better pathophysiology understanding
- Enhanced pharmacology learning
- Effective for complex topics

## Cognitive Load Considerations

**Managing Load:**
- Start with partial maps
- Limit initial scope
- Scaffold complex topics
- Gradual independence

**Optimizing Germane Load:**
- Explicit instruction on technique
- Practice with feedback
- Progressive complexity
- Metacognitive reflection

## Assessment Applications

**Scoring Approaches:**
| Method | Basis |
|--------|-------|
| Structural | Count components |
| Relational | Proposition validity |
| Comparative | Match to expert map |
| Holistic | Overall quality |

**Rubric Components:**
- Concept appropriateness
- Link accuracy
- Hierarchical organization
- Cross-link quality
- Map completeness

## Integration Strategies

**Within Curriculum:**
- Pre-learning activation
- During learning organization
- Post-learning synthesis
- Review and revision

**Clinical Integration:**
| Context | Application |
|---------|-------------|
| Diagnosis | Differential mapping |
| Pathophysiology | Mechanism relationships |
| Treatment | Decision algorithms |
| Patient education | Simplified maps |

## Common Challenges

| Challenge | Solution |
|-----------|----------|
| Time investment | Start small, build skill |
| Correct structure | Explicit instruction |
| Revision reluctance | Emphasize maps as drafts |
| Over-complexity | Focus question guides scope |

## Digital Enhancement

**Software Benefits:**
- Easy revision
- Collaboration features
- Sharing and feedback
- Template availability
- Cloud storage

**Limitations:**
- Technology access
- Learning curve
- May reduce cognitive engagement
- Paper maps have benefits`,
      keyTerms: [
        { term: 'assimilation theory', definition: 'Ausubel\'s theory that meaningful learning occurs when new concepts are integrated into existing cognitive structures' },
        { term: 'subsumption', definition: 'The process of incorporating new information under more general concepts in cognitive structure' },
        { term: 'focus question', definition: 'A guiding question that defines the scope and purpose of a concept map' },
        { term: 'expert skeleton', definition: 'A partially completed concept map provided by an expert for students to complete' },
        { term: 'germane load', definition: 'Cognitive effort devoted to learning-relevant processing rather than extraneous demands' },
      ],
      analogies: [
        'Subsumption is like filing papers in folders - new documents go where they relate to existing categories.',
        'Expert skeleton maps are like paint-by-numbers - structure is provided while you fill in the details.',
        'Focus questions are like GPS destinations - they determine where the map should lead.',
        'Cross-links are like discovering highways between distant cities - they show unexpected connections.',
      ],
      examples: [
        'A pathophysiology course provides students with a focus question: "How does hypertension lead to cardiac remodeling?" Students construct maps showing the progression.',
        'For pharmacology, students compare their concept maps of antibiotic mechanisms to expert maps, identifying where their understanding differs.',
      ],
      patientCounselingPoints: [
        'Concept mapping reveals how physicians organize medical knowledge',
        'Simplified maps can help patients understand their condition and treatment',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced concept mapping integrates cognitive science, assessment methodology, and instructional design. Expert mappers use sophisticated structural analysis, leverage technology appropriately, and apply mapping to clinical reasoning development. Research continues to refine understanding of optimal implementation.',
      explanation: `## Advanced Concept Mapping Framework

Graduate-level concept mapping requires integration of cognitive theory, structural analysis, and strategic application across learning and clinical contexts.

## Cognitive Architecture

**Knowledge Representation:**
| Structure | Characteristics |
|-----------|-----------------|
| Propositional networks | Node-link representations |
| Schemas | Organized knowledge patterns |
| Mental models | Dynamic, runnable representations |
| Scripts | Event sequence knowledge |

**Mapping and Memory:**
- Encoding: Creation strengthens memory
- Organization: Hierarchical structure aids retrieval
- Elaboration: Link labeling deepens processing
- Retrieval: Maps serve as retrieval cues

## Structural Analysis

**Novak & Gowin Scoring:**
| Component | Points |
|-----------|--------|
| Valid propositions | 1 each |
| Hierarchical levels | 5 per level |
| Cross-links | 10 if valid |
| Examples | 1 each |

**McClure's Morphology:**
- Spoke: Central node, peripheral connections
- Chain: Linear sequence
- Net: Highly interconnected
- Reflects understanding type

**Sophistication Indicators:**
| Feature | Indication |
|---------|------------|
| Cross-link density | Integration |
| Branching factor | Elaboration |
| Depth of hierarchy | Differentiation |
| Link specificity | Precision of understanding |

## Expert Mapping Characteristics

**Expert vs. Novice Maps:**
| Expert | Novice |
|--------|--------|
| Rich cross-links | Few cross-links |
| Deep hierarchy | Flat structure |
| Specific links | Vague links |
| Coherent structure | Fragmented |
| Dynamic, revised | Static |

**Domain Expertise Effects:**
- Experts create more integrated maps
- Better hierarchical organization
- More precise linking language
- Greater flexibility in revision

## Clinical Reasoning Applications

**Diagnostic Reasoning Maps:**
- Symptoms to diagnoses
- Likelihood relationships
- Testing logic
- Differential organization

**Therapeutic Reasoning:**
| Element | Map Representation |
|---------|-------------------|
| Condition | Central concept |
| Mechanisms | Hierarchical branches |
| Treatments | Linked to mechanisms |
| Side effects | Cross-linked to organs |

**Case Analysis:**
1. Map known information
2. Identify gaps
3. Generate hypotheses
4. Link to test/interventions
5. Revise with new information

## Assessment Methodology

**Reliability Considerations:**
- Scorer training essential
- Rubric specificity
- Multiple raters
- Inter-rater reliability targets

**Validity Evidence:**
| Type | Evidence |
|------|----------|
| Content | Domain expert review |
| Construct | Correlation with knowledge measures |
| Criterion | Prediction of performance |
| Consequential | Appropriate use of scores |

**High-Stakes Assessment:**
- Standardized conditions
- Clear scoring criteria
- Training for scorers
- Reliable scoring protocols

## Technology Integration

**Software Comparison:**
| Feature | CmapTools | Coggle | MindMeister |
|---------|-----------|--------|-------------|
| Collaboration | Yes | Yes | Yes |
| Templates | Yes | Limited | Yes |
| Export options | Multiple | Limited | Multiple |
| Learning curve | Moderate | Low | Low |
| Cost | Free | Freemium | Freemium |

**Technology-Enhanced Features:**
- Real-time collaboration
- Version tracking
- Feedback integration
- Resource linking
- Analytics

## Instructional Design

**Scaffolding Progression:**
| Level | Support | Task |
|-------|---------|------|
| 1 | Full scaffold | Evaluate maps |
| 2 | Partial scaffold | Complete maps |
| 3 | Minimal scaffold | Modify maps |
| 4 | No scaffold | Create maps |

**Integration Points:**
- Pre-class preparation
- In-class synthesis
- Post-class consolidation
- Exam review
- Clinical application

## Research Directions

**Current Focus:**
- Automated assessment
- Real-time feedback
- Clinical reasoning development
- Long-term transfer
- Optimal scaffolding`,
      keyTerms: [
        { term: 'propositional network', definition: 'A cognitive representation consisting of nodes (concepts) connected by labeled links (relationships)' },
        { term: 'morphology', definition: 'The structural pattern or shape of a concept map indicating the type of understanding' },
        { term: 'cross-link density', definition: 'The number of connections between different hierarchical branches in a concept map' },
        { term: 'branching factor', definition: 'The average number of subordinate concepts connected to each superordinate concept' },
      ],
      analogies: [
        'Propositional networks are like the subway system of the mind - stations (concepts) connected by lines (relationships).',
        'Map morphology is like fingerprints - each shape reflects a unique understanding pattern.',
        'Cross-link density is like the interconnectedness of a city - more connections mean better integration.',
        'Scaffolding progression is like training wheels - gradually removed as skill develops.',
      ],
      examples: [
        'A student\'s map of diabetes is analyzed for morphology: chain structure suggests linear thinking about causes and effects, while net structure would indicate integrated understanding.',
        'Using CmapTools, a study group collaboratively builds a concept map of renal physiology, with each member contributing and commenting in real-time.',
      ],
      patientCounselingPoints: [
        'Understanding map structure helps educators identify how students organize medical knowledge',
        'Different map patterns can indicate where understanding needs development',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of concept mapping integrates cognitive science, psychometrics, and implementation science. Expert practitioners design mapping activities, develop assessment frameworks, and contribute to research on knowledge representation and clinical reasoning development.',
      explanation: `## Professional Concept Mapping Framework

Expert-level concept mapping requires integration of cognitive theory, assessment science, and pedagogical expertise for optimal implementation.

## Cognitive Science Deep Dive

**Semantic Network Theory:**
- Concepts as nodes with activation
- Spreading activation through links
- Retrieval = following activation paths
- Learning = strengthening connections

**Schema Theory Integration:**
- Schemas as organized knowledge structures
- Concept maps externalize schemas
- Mapping builds and refines schemas
- Cross-links integrate schemas

**Dual Coding:**
| Mode | Function |
|------|----------|
| Verbal | Concept names, link labels |
| Visual | Spatial organization, structure |
| Integration | Dual representation strengthens memory |

## Assessment Science

**Psychometric Considerations:**
| Property | Challenge | Solution |
|----------|-----------|----------|
| Reliability | Scorer variability | Training, rubrics |
| Validity | Construct representation | Alignment studies |
| Fairness | Prior experience effects | Instruction, practice |
| Utility | Scoring burden | Technology, sampling |

**Scoring Systems Comparison:**
| System | Strengths | Limitations |
|--------|-----------|-------------|
| Structural | Objective, reliable | May miss quality |
| Relational | Content sensitive | Requires expertise |
| Comparative | Criterion-referenced | Expert map needed |
| Holistic | Efficient, practical | Less diagnostic |

**Automated Scoring:**
- Natural language processing
- Graph analysis algorithms
- Machine learning approaches
- Expert map comparison
- Real-time feedback potential

## Clinical Reasoning Development

**Mapping Diagnostic Reasoning:**
| Phase | Map Application |
|-------|-----------------|
| Presentation | Symptom-problem mapping |
| Hypothesis | Differential organization |
| Inquiry | Test-condition links |
| Integration | Evidence-hypothesis connection |
| Decision | Conclusion justification |

**Expert Clinical Maps:**
- Rich causal connections
- Probabilistic thinking
- Uncertainty representation
- Context sensitivity

**Developmental Progression:**
| Level | Characteristics |
|-------|-----------------|
| Novice | Fragmented, simple |
| Intermediate | Organized, hierarchical |
| Advanced | Integrated, cross-linked |
| Expert | Flexible, context-adaptive |

## Implementation Science

**Adoption Factors:**
| Factor | Influence |
|--------|-----------|
| Perceived usefulness | Strong positive |
| Time investment | Negative barrier |
| Training quality | Moderating factor |
| Technology access | Enabling factor |

**Faculty Development:**
1. Theoretical foundations
2. Construction skills
3. Assessment methods
4. Facilitation techniques
5. Research methods

## Curriculum Integration

**Vertical Integration:**
- Build complexity over time
- Connect across courses
- Revisit and revise maps
- Track development

**Horizontal Integration:**
- Link across systems
- Integrate basic and clinical
- Multidisciplinary connections
- Team-based mapping

## Research Methodology

**Study Designs:**
| Design | Question Type |
|--------|---------------|
| RCT | Efficacy |
| Quasi-experimental | Effectiveness |
| Design-based | Implementation |
| Qualitative | Process understanding |

**Outcome Measures:**
- Knowledge acquisition
- Retention over time
- Transfer to new contexts
- Clinical performance
- Self-regulation development

## Future Directions

**Emerging Applications:**
| Innovation | Potential |
|------------|-----------|
| AI-generated maps | Automated construction |
| VR environments | Immersive mapping |
| Learning analytics | Personalization |
| Collaborative platforms | Distributed construction |

**Research Priorities:**
- Long-term outcomes
- Transfer mechanisms
- Individual differences
- Technology optimization
- Implementation scaling`,
      keyTerms: [
        { term: 'spreading activation', definition: 'Process where activating one concept activates related concepts in semantic memory' },
        { term: 'automated scoring', definition: 'Use of algorithms to evaluate concept maps without human raters' },
        { term: 'vertical integration', definition: 'Building curriculum connections across years of training' },
        { term: 'horizontal integration', definition: 'Building curriculum connections across disciplines at the same level' },
        { term: 'design-based research', definition: 'Iterative research approach developing and testing educational interventions in context' },
      ],
      clinicalNotes: `Expert perspective on concept mapping:

1. **Theoretical Grounding:** Effective concept mapping instruction requires understanding the cognitive science behind why it works. Surface-level implementation yields surface-level benefits.

2. **Skill Development:** Concept mapping is a skill that requires instruction and practice. Don't assume students will create good maps without explicit teaching.

3. **Assessment Alignment:** If you teach with concept maps but assess with multiple choice, students will prioritize multiple choice preparation. Assessment drives learning.

4. **Clinical Application:** The real value of concept mapping in medical education is developing clinical reasoning skills. Connect mapping activities to clinical thinking.

5. **Technology Appropriateness:** Digital tools offer advantages but aren't always superior. Sometimes paper maps engage deeper processing. Match tool to purpose.

6. **Scaffolding Strategy:** Start with supported mapping activities, gradually releasing responsibility. Full free construction requires developed skills.

7. **Revision Emphasis:** Concept maps should be living documents. The value is in the revision process, not the final product.

8. **Cross-Link Priority:** Cross-links indicate integration across domains - the most valuable learning. Specifically teach and reward cross-linking.

9. **Assessment Burden:** Detailed scoring is time-intensive. Develop efficient rubrics, consider peer assessment, and explore technology solutions.

10. **Research Contribution:** Contribute to the evidence base. Document innovations, measure outcomes, share findings to advance the field.`,
    },
  },

  media: [
    {
      id: 'concept-map-example',
      type: 'diagram',
      filename: 'concept-map-example.svg',
      title: 'Example Concept Map Structure',
      description: 'Visual example of a properly constructed concept map',
    },
    {
      id: 'map-vs-mindmap',
      type: 'diagram',
      filename: 'map-vs-mindmap.svg',
      title: 'Concept Map vs. Mind Map Comparison',
      description: 'Side-by-side comparison of concept maps and mind maps',
    },
  ],

  citations: [
    {
      id: 'novak-1990',
      type: 'article',
      title: 'Concept Maps and Vee Diagrams: Two Metacognitive Tools to Facilitate Meaningful Learning',
      authors: ['Novak, J.D.'],
      source: 'Instructional Science',
      accessedDate: '2025-01-28',
    },
    {
      id: 'daley-torre-2010',
      type: 'article',
      title: 'Concept Maps in Medical Education',
      authors: ['Daley, B.J.', 'Torre, D.M.'],
      source: 'Medical Teacher',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-active-learning', targetType: 'concept', relationship: 'parent', label: 'Active Learning Techniques' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'related', label: 'Effective Study Methods' },
    { targetId: 'clinical-reasoning-basics', targetType: 'concept', relationship: 'related', label: 'Clinical Reasoning' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['concept mapping', 'visual learning', 'knowledge organization', 'graphic organizers'],
    keywords: ['concept maps', 'mind maps', 'visual learning', 'knowledge representation', 'meaningful learning'],
    clinicalRelevance: 'high',
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

export default conceptMapping;
