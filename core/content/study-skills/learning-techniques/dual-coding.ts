/**
 * Dual Coding - Learning Through Words and Pictures
 *
 * Educational content covering the dual coding theory and its application
 * for effective learning in medical education.
 */

import { EducationalContent } from '../../types';

export const dualCoding: EducationalContent = {
  id: 'education-dual-coding',
  type: 'concept',
  name: 'Dual Coding',
  alternateNames: ['Dual Coding Theory', 'Multimedia Learning', 'Visual-Verbal Learning', 'Dual Channel Learning'],

  levels: {
    1: {
      level: 1,
      summary: 'Dual coding means learning with both words and pictures at the same time. Using both together helps you remember better than using just words alone.',
      explanation: `## What Is Dual Coding?

Dual coding is a way of learning that uses both words and pictures together. When you see a picture AND read words about the same thing, your brain makes stronger memories.

## Why Two is Better Than One

**Your Brain Has Two Channels:**
1. **Word Channel:** For reading and listening
2. **Picture Channel:** For seeing images and diagrams

When you use both channels together:
- You have two ways to remember the information
- The picture and words help each other
- You understand better
- You remember longer

## How to Use Dual Coding

**When Studying:**
- Look at diagrams while reading
- Draw pictures of what you are learning
- Watch videos with both images and narration
- Make mind maps with words and pictures

**Examples:**
- Look at a heart diagram while reading about how it works
- Draw a cell while learning about cell parts
- Watch a video showing how blood flows through the body
- Make a chart with pictures and words

## Simple Tips

1. Always look at pictures when reading textbooks
2. Draw simple sketches even if you are not an artist
3. Use different colors to organize information
4. Turn words into mental pictures
5. Explain pictures in your own words

## Common Mistakes to Avoid

- Do not just read words without pictures
- Do not just look at pictures without reading
- Do not make pictures too complicated
- Do not put too many words on pictures

## For Medical Students

Medical topics are perfect for dual coding:
- Anatomy diagrams with labels
- Flow charts for how diseases work
- Pictures of skin conditions
- Charts showing drug mechanisms`,
      keyTerms: [
        { term: 'dual coding', definition: 'Learning by using both verbal and visual information together' },
        { term: 'verbal channel', definition: 'The part of the brain that processes words and language' },
        { term: 'visual channel', definition: 'The part of the brain that processes images and pictures' },
        { term: 'mental picture', definition: 'An image you create in your mind to help remember something' },
      ],
      analogies: [
        'Dual coding is like having two roads to get to the same place - if one is blocked, you can still use the other.',
        'It is like watching a movie with subtitles - you get the information through both seeing and reading.',
      ],
      examples: [
        'When learning the bones of the hand, look at a diagram while reading the names of each bone.',
        'To remember the steps of blood clotting, draw a simple flowchart with pictures and labels.',
      ],
      patientCounselingPoints: [
        'Using pictures and words together helps people understand and remember health information better',
        'Visual aids can make complex medical information easier to understand',
      ],
    },

    2: {
      level: 2,
      summary: 'Dual coding theory, proposed by Allan Paivio, posits that information is processed through separate visual and verbal channels. Integrating both channels enhances learning, comprehension, and retention compared to single-channel processing.',
      explanation: `## Dual Coding Theory Overview

Dual coding theory, developed by Allan Paivio in 1971, provides a cognitive framework for understanding how combining verbal and visual information enhances learning.

## Theoretical Foundations

**Separate Processing Channels:**
| Channel | Processes | Capacity |
|---------|-----------|----------|
| Verbal | Words, language, symbols | Limited |
| Visual | Images, spatial information | Limited |

**Types of Processing:**
1. **Representational:** Direct activation of verbal or visual representations
2. **Referential:** Connections between verbal and visual systems
3. **Associative:** Processing within each system

**Cognitive Benefits:**
| Benefit | Explanation |
|---------|-------------|
| Multiple retrieval cues | Two pathways to access information |
| Deeper processing | More elaborate encoding |
| Reduced cognitive load | Spread across channels |
| Enhanced comprehension | Multiple representations |

## Evidence Base

**Research Findings:**
| Finding | Effect Size |
|---------|-------------|
| Text + images vs text alone | 0.75-1.0 |
| Visuals improve comprehension | Large effect |
| Retention benefits | Moderate-large |
| Transfer to new problems | Moderate |

**Mayer\'s Cognitive Theory of Multimedia Learning:**
1. Dual channels (visual/auditory and visual/pictorial)
2. Limited capacity
3. Active processing

## Effective Implementation

**Principles for Learning:**
| Principle | Application |
|-----------|-------------|
| Multimedia | Words + pictures |
| Spatial contiguity | Corresponding words and pictures near each other |
| Temporal contiguity | Corresponding words and pictures presented simultaneously |
| Coherence | Exclude extraneous material |
| Modality | Present words as speech |
| Redundancy | Avoid presenting identical text and narration |
| Individual differences | Consider prior knowledge |

**Creating Effective Materials:**
| Element | Best Practice |
|---------|---------------|
| Diagrams | Simple, clear, labeled |
| Annotations | Minimal, focused |
| Color | Purposeful, consistent |
| Layout | Organized, logical flow |
| Animation | Used to show process |

## Medical Education Applications

**Anatomy:**
| Resource | Dual Coding Application |
|----------|------------------------|
| Atlases | Images + anatomical terms |
| Dissection videos | Visual + verbal explanation |
| 3D models | Spatial + labeling |
| Drawings | Creating own visual-verbal materials |

**Pathology:**
| Application | Implementation |
|-------------|----------------|
| Histology slides | Images with diagnostic criteria |
| Gross pathology | Specimen photos with descriptions |
| Clinical presentations | Photos with symptom lists |
| Disease processes | Flowcharts with mechanisms |

**Pharmacology:**
| Method | Dual Coding Element |
|--------|---------------------|
| Mechanism diagrams | Visual pathways + drug names |
| Side effect charts | Icons + descriptions |
| Drug tables | Color-coding + text |
| Comparison charts | Visual organization + details |

## Study Strategies

**Active Dual Coding:**
| Strategy | Implementation |
|----------|----------------|
| Sketching | Draw while reading |
| Annotating | Add labels to diagrams |
| Concept mapping | Visual organization + text |
| Flashcards with images | Picture + explanation |
| Teaching with visuals | Explain using drawings |

**Creating Visual Materials:**
| Type | When to Use |
|------|-------------|
| Diagrams | Structures, systems |
| Flowcharts | Processes, algorithms |
| Tables | Comparisons |
| Graphs | Trends, relationships |
| Mind maps | Hierarchical information |
| Timelines | Sequences |

**Common Pitfalls:**
| Pitfall | Solution |
|---------|----------|
| Decorative images | Use informative visuals only |
| Split attention | Integrate text and images |
| Overloading | Simplify, focus on key concepts |
| Passive viewing | Active processing required |`,
      keyTerms: [
        { term: 'cognitive load', definition: 'The amount of mental effort required to process information' },
        { term: 'elaboration', definition: 'Adding detail and connecting new information to existing knowledge' },
        { term: 'retrieval cues', definition: 'Hints or prompts that help access stored memories' },
        { term: 'modality principle', definition: 'The principle that words should be presented as speech rather than on-screen text' },
      ],
      analogies: [
        'Dual coding is like having both a map and written directions - you can find your way using either or both together.',
        'The two channels are like two separate highways leading to the same destination - less traffic on each means faster travel.',
      ],
      examples: [
        'Netter\'s Atlas of Human Anatomy combines detailed illustrations with anatomical labels, making it highly effective for learning anatomy.',
        'Medical videos that show procedures while explaining them verbally utilize dual coding for better learning.',
      ],
      patientCounselingPoints: [
        'Health education materials that combine pictures with explanations are more effective',
        'Drawing pictures can help patients understand and remember their treatment plans',
      ],
    },

    3: {
      level: 3,
      summary: 'Dual coding implementation requires understanding cognitive architecture, applying evidence-based principles, and creating integrated visual-verbal materials. Strategic use enhances comprehension and retention of complex medical content.',
      explanation: `## Comprehensive Dual Coding Framework

Effective dual coding implementation requires understanding cognitive mechanisms, applying multimedia principles, and creating integrated learning materials.

## Cognitive Architecture

**Working Memory System:**
| Component | Function | Capacity |
|-----------|----------|----------|
| Phonological loop | Verbal processing | Limited |
| Visuospatial sketchpad | Visual processing | Limited |
| Episodic buffer | Integration | Limited |
| Long-term memory | Storage | Vast |

**Processing Model:**
1. **Selection:** Select relevant words and images
2. **Organization:** Organize into coherent structure
3. **Integration:** Integrate with prior knowledge

**Cognitive Load Theory:**
| Type | Source | Management |
|------|--------|------------|
| Intrinsic | Content complexity | Segmenting, sequencing |
| Extraneous | Poor design | Apply principles |
| Germane | Deep processing | Foster with design |

## Evidence-Based Principles

**Mayer\'s Principles:**
| Principle | Description | Implementation |
|-----------|-------------|----------------|
| Multimedia | Better than words alone | Always include relevant visuals |
| Spatial contiguity | Corresponding elements together | Place labels close to referents |
| Temporal contiguity | Simultaneous presentation | Present narration with animation |
| Coherence | Exclude extraneous material | Omit decorative elements |
| Modality | Audio over text | Narrate rather than caption |
| Redundancy | Avoid duplicating text and audio | Do not read slides verbatim |
| Signaling | Cue essential material | Highlight, outline |
| Segmenting | Learner-paced segments | Break into chunks |
| Pre-training | Key concepts first | Teach component concepts |
| Personalization | Conversational style | Use "you," direct address |
| Voice | Human over machine | Use human narrators |
| Image | Visible presenter when relevant | Show instructor for social cues |

**Clark and Mayer Additions:**
| Principle | Application |
|-----------|-------------|
| Practice | Interactive exercises |
| Feedback | Timely, specific |
| Reflection | Metacognitive prompts |
| Mnemonics | Memory aids |

## Medical Content Design

**Visual Hierarchy:**
| Level | Element | Example |
|-------|---------|---------|
| 1 | Main concept | Central diagram |
| 2 | Key components | Major structures |
| 3 | Details | Labels, annotations |
| 4 | Relationships | Arrows, groupings |

**Color Coding:**
| Purpose | Application |
|---------|-------------|
| Organization | System colors |
| Emphasis | Key points |
| Comparison | Before/after |
| Sequence | Process steps |
| Categorization | Types/classes |

**Annotation Strategies:**
| Type | Use |
|------|-----|
| Labels | Identification |
| Callouts | Explanation |
| Arrows | Direction, flow |
| Brackets | Grouping |
| Highlights | Important areas |

## Creating Learning Materials

**Textbook Study:**
| Step | Action |
|------|--------|
| 1 | Preview images before reading |
| 2 | Read text while viewing diagrams |
| 3 | Create own simplified drawings |
| 4 | Add verbal annotations |
| 5 | Explain visual-verbal relationships |

**Lecture Notes:**
| Method | Implementation |
|--------|----------------|
| Sketching | Quick drawings of concepts |
| Diagram copying | Reproduce key figures |
| Visual metaphors | Represent abstract concepts |
| Color coding | Organize information |
| Arrows and connections | Show relationships |

**Digital Tools:**
| Tool | Application |
|------|-------------|
| Tablet drawing | Digital annotation |
| Screenshot tools | Capture and mark up |
| Mind mapping software | Visual organization |
| Flashcard apps | Image + text cards |
| Video annotation | Mark up lecture videos |

## Assessment and Improvement

**Self-Testing:**
| Method | Purpose |
|--------|---------|
| Explain from image | Visual to verbal transfer |
| Draw from description | Verbal to visual transfer |
| Label blank diagrams | Integration test |
| Compare/contrast | Relationship understanding |
| Apply to new problem | Transfer assessment |

**Metacognitive Monitoring:**
| Question | Reflection |
|----------|------------|
| Can I draw it? | Visual understanding |
| Can I explain it? | Verbal understanding |
| Do connections make sense? | Integration |
| Can I apply it? | Transfer |

## Integration with Other Techniques

**Spaced Repetition:**
| Integration | Implementation |
|-------------|----------------|
| Visual cards | Image + explanation |
| Cloze deletion | Diagram with blanks |
| Progressive disclosure | Reveal parts sequentially |

**Active Recall:**
| Method | Dual Coding Element |
|--------|---------------------|
| Draw from memory | Visual recall |
| Explain images | Verbal-visual connection |
| Reconstruct diagrams | Integration |

**Elaboration:**
| Technique | Dual Coding Enhancement |
|-----------|------------------------|
| Self-explanation | Connect visuals and text |
| Concrete examples | Visual-mental images |
| Analogies | Visual comparisons |

**Interleaving:**
| Approach | Visual-Verbal Strategy |
|----------|------------------------|
| Mix diagrams | Different representations |
| Compare images | Find similarities/differences |
| Categorize visuals | Organize by type |`,
      keyTerms: [
        { term: 'visuospatial sketchpad', definition: 'The component of working memory responsible for temporarily storing visual and spatial information' },
        { term: 'germane load', definition: 'Cognitive load that contributes to learning through deep processing' },
        { term: 'signaling', definition: 'Using cues to highlight important information in multimedia materials' },
        { term: 'segmenting', definition: 'Breaking content into manageable parts controlled by the learner' },
      ],
      analogies: [
        'Working memory channels are like two processors in a computer - they can work simultaneously on different but related tasks.',
        'Cognitive load management is like packing a suitcase - you want to include what is necessary without overloading.',
      ],
      examples: [
        'A pathology resource showing histology images with arrows pointing to key features and text explaining their significance.',
        'An anatomy app where students can rotate 3D models while listening to explanations of structures.',
      ],
      patientCounselingPoints: [
        'Educational materials that combine visual and verbal information improve patient understanding',
        'Using simple drawings during consultations can help patients remember medical advice',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced dual coding requires sophisticated understanding of cognitive architecture, principled multimedia design, and strategic integration with active learning. Expert practitioners create and curate high-quality visual-verbal materials while teaching others effective techniques.',
      explanation: `## Advanced Dual Coding Concepts

Professional-level dual coding mastery requires understanding advanced cognitive science, sophisticated design principles, and systematic application across educational contexts.

## Advanced Cognitive Science

**Mental Models:**
| Aspect | Application |
|--------|-------------|
| Construction | Building understanding through integration |
| Updating | Revising with new information |
| Integration | Combining multiple sources |
| Transfer | Applying to novel situations |

**Schema Development:**
| Stage | Characteristics |
|-------|-----------------|
| Accretion | Adding to existing schemas |
| Tuning | Refining existing schemas |
| Restructuring | Creating new schemas |

**Expert-Novice Differences:**
| Expert | Novice |
|--------|--------|
| Chunked knowledge | Individual elements |
| Pattern recognition | Feature processing |
| Deep structure | Surface features |
| Efficient processing | High cognitive load |

## Sophisticated Design

**Visual Design Principles:**
| Principle | Application |
|-----------|-------------|
| Alignment | Organize elements |
| Repetition | Consistency |
| Proximity | Group related items |
| Contrast | Highlight differences |
| Hierarchy | Guide attention |
| Balance | Visual stability |
| White space | Reduce clutter |

**Information Graphics:**
| Type | Best For | Design Considerations |
|------|----------|----------------------|
| Bar charts | Comparisons | Clear labels, appropriate scale |
| Line graphs | Trends | Minimal lines, clear axes |
| Pie charts | Proportions | Limited slices, clear labels |
| Scatter plots | Relationships | Trend lines when appropriate |
| Heat maps | Patterns | Appropriate color scale |
| Infographics | Complex topics | Story flow, hierarchy |

**Animation Design:**
| Principle | Implementation |
|-----------|----------------|
| Simple | Focus on essential movement |
| Consistent | Standard conventions |
| Pacing | Appropriate speed |
| Cueing | Direct attention |
| Control | Learner pacing |

## Strategic Application

**Curriculum Integration:**
| Level | Strategy |
|-------|----------|
| Course | Visual-verbal syllabus |
| Unit | Concept maps |
| Lesson | Multimedia presentations |
| Assessment | Visual items |

**Differentiated Instruction:**
| Learner Type | Adaptation |
|--------------|------------|
| Visual-dominant | Emphasize graphics |
| Verbal-dominant | Ensure text clarity |
| Low prior knowledge | More guidance |
| High prior knowledge | Less scaffolding |

**Technology Integration:**
| Platform | Dual Coding Application |
|----------|------------------------|
| LMS | Multimedia content |
| Video | Edited with annotations |
| Interactive | Simulations, virtual labs |
| Mobile | Portable visual references |
| VR/AR | Immersive visual-verbal |

## Assessment Design

**Visual Assessment:**
| Format | Application |
|--------|-------------|
| Image interpretation | Radiology, pathology |
| Labeling | Anatomy, histology |
| Matching | Diagram to description |
| Sequencing | Process ordering |
| Comparison | Identify differences |

**Constructed Response:**
| Type | Skill Assessed |
|------|----------------|
| Draw and explain | Integration |
| Explain a diagram | Verbal-visual connection |
| Create a diagram | Visual representation |
| Annotate | Understanding of relationships |

**Performance Assessment:**
| Task | Context |
|------|---------|
| Patient education | Create visual materials |
| Case presentation | Visual supports |
| Teaching | Multimedia explanation |

## Research and Evaluation

**Learning Analytics:**
| Metric | Interpretation |
|--------|----------------|
| Time on visual | Engagement |
| Interaction patterns | Processing |
| Eye tracking | Attention allocation |
| Performance data | Learning outcomes |

**Comparative Studies:**
| Comparison | Outcome |
|------------|---------|
| Visual vs text | Retention, comprehension |
| Static vs animated | Process understanding |
| Student vs expert created | Generative processing |
| Digital vs paper | Accessibility, engagement |

## Common Challenges

**Technical Issues:**
| Challenge | Solution |
|-----------|----------|
| Image quality | High resolution, clear |
| File size | Compression, optimization |
| Accessibility | Alt text, descriptions |
| Copyright | Original, licensed, fair use |

**Pedagogical Issues:**
| Challenge | Solution |
|-----------|----------|
| Passive viewing | Active processing prompts |
| Cognitive overload | Segment, simplify |
| Misconceptions | Careful design, feedback |
| Transfer failure | Varied examples |

## Integration with Clinical Practice

**Patient Education:**
| Application | Format |
|-------------|--------|
| Disease explanation | Diagrams, models |
| Medication instructions | Visual schedules |
| Procedure preparation | Illustrated guides |
| Lifestyle modification | Infographics |

**Clinical Reasoning:**
| Tool | Application |
|------|-------------|
| Diagnostic algorithms | Flowcharts |
| Risk calculators | Visual nomograms |
| Treatment pathways | Decision trees |
| Progress tracking | Graphs, timelines |`,
      keyTerms: [
        { term: 'schema', definition: 'A mental framework that helps organize and interpret information' },
        { term: 'generative processing', definition: 'Deep cognitive processing that occurs when learners actively make sense of material' },
        { term: 'scaffolding', definition: 'Support provided to help learners accomplish tasks they cannot yet do independently' },
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thought processes' },
      ],
      analogies: [
        'Schema development is like building with LEGO - you start with basic blocks and combine them into more complex structures.',
        'Visual hierarchy is like newspaper layout - headlines grab attention, then you read details.',
      ],
      examples: [
        'A medical education platform using interactive histology slides where students can zoom, pan, and click for explanations.',
        'A clinical decision support tool using visual algorithms with integrated evidence summaries.',
      ],
      patientCounselingPoints: [
        'Well-designed visual materials can improve patient comprehension of complex conditions',
        'Interactive visual tools can help patients engage more actively in their healthcare decisions',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional dual coding mastery encompasses cognitive science expertise, advanced design capabilities, educational research literacy, and leadership in multimedia learning. Expert practitioners innovate in visual-verbal learning while mentoring others and advancing the field.',
      explanation: `## Professional Dual Coding Framework

Professional mastery of dual coding integrates cognitive science expertise, design excellence, educational research, and leadership in visual-verbal learning.

## Theoretical Leadership

**Cognitive Architecture Models:**
| Model | Contribution | Application |
|-------|--------------|-------------|
| ACT-R | Production rules | Intelligent tutoring |
| CLT | Load types | Instructional design |
| 4C/ID | Complex learning | Curriculum design |
| CTML | Multimedia principles | Material development |

**Emerging Theories:**
| Theory | Focus |
|--------|-------|
| Embodied cognition | Physical interaction |
| Extended mind | Tools as cognition |
| Enactivism | Action-perception loops |
| Predictive processing | Brain as prediction machine |

**Research Synthesis:**
| Method | Application |
|--------|-------------|
| Meta-analysis | Effect size estimation |
| Systematic review | Evidence synthesis |
| Design-based research | Iterative improvement |
| Learning analytics | Pattern detection |

## Design Excellence

**Universal Design for Learning:**
| Principle | Dual Coding Application |
|-----------|------------------------|
| Multiple representations | Visual, verbal, other modes |
| Multiple means of expression | Create visual, verbal products |
| Multiple means of engagement | Interest, effort, persistence |

**Accessibility Standards:**
| Guideline | Implementation |
|-----------|----------------|
| WCAG | Web accessibility |
| Section 508 | Federal requirements |
| Universal design | All learners |
| Cultural sensitivity | Diverse populations |

**Professional Design Tools:**
| Category | Tools |
|----------|-------|
| Vector graphics | Adobe Illustrator, Inkscape |
| Image editing | Photoshop, GIMP |
| Data visualization | Tableau, R, D3 |
| Animation | After Effects, Houdini |
| 3D modeling | Blender, Maya |

## Educational Innovation

**Emerging Technologies:**
| Technology | Dual Coding Application |
|------------|------------------------|
| AI generation | Automated diagrams |
| VR/AR | Immersive visualization |
| Haptics | Tactile-visual integration |
| Voice interfaces | Audio-visual coordination |

**Personalized Learning:**
| Approach | Implementation |
|----------|----------------|
| Adaptive systems | Match to processing style |
| Learning paths | Visual vs verbal emphasis |
| Recommendation | Content suggestions |
| Feedback | Visual-verbal performance |

**Analytics and AI:**
| Application | Function |
|-------------|----------|
| Eye tracking | Attention analysis |
| EEG/fNIRS | Cognitive load measurement |
| NLP | Verbal processing assessment |
| Computer vision | Visual processing assessment |

## Research Leadership

**Study Design:**
| Type | Application |
|------|-------------|
| RCT | Causal inference |
| Quasi-experimental | Practical settings |
| Qualitative | Understanding mechanisms |
| Mixed methods | Comprehensive answers |

**Dissemination:**
| Channel | Contribution |
|---------|--------------|
| Journals | Scholarly articles |
| Conferences | Presentation, networking |
| Books | Comprehensive resources |
| Media | Public engagement |
| Social | Community building |

**Grant Writing:**
| Focus | Examples |
|-------|----------|
| Basic research | Cognitive mechanisms |
| Applied research | Medical education |
| Development | Technology creation |
| Training | Workforce development |

## Professional Practice

**Curriculum Development:**
| Role | Activities |
|------|------------|
| Needs assessment | Gap analysis |
| Design | Learning objectives, sequencing |
| Development | Material creation |
| Implementation | Faculty preparation |
| Evaluation | Outcomes assessment |

**Faculty Development:**
| Topic | Content |
|-------|---------|
| Principles workshop | Evidence-based design |
| Tool training | Software, platforms |
| Peer review | Quality assurance |
| Communities of practice | Ongoing support |

**Quality Assurance:**
| Process | Activity |
|---------|----------|
| Design review | Expert evaluation |
| Pilot testing | Small-scale trial |
| Revision | Iterative improvement |
| Scale-up | Broader implementation |
| Outcomes | Effectiveness evaluation |

## Future Directions

**Research Priorities:**
| Area | Questions |
|------|-----------|
| Individual differences | Personalization |
| Transfer | Far transfer effectiveness |
| Long-term retention | Durability |
| Motivation | Engagement effects |
| Technology | New modalities |

**Societal Impact:**
| Domain | Contribution |
|--------|--------------|
| Health literacy | Patient education |
| Science communication | Public understanding |
| Education equity | Accessible materials |
| Lifelong learning | Adult education |

**Ethical Considerations:**
| Issue | Framework |
|-------|-----------|
| Data privacy | Protection |
| Algorithmic bias | Fairness |
| Digital divide | Access |
| Cognitive enhancement | Enhancement ethics |`,
      keyTerms: [
        { term: 'universal design for learning', definition: 'An educational framework that guides the design of learning experiences to proactively address learner variability' },
        { term: 'learning analytics', definition: 'The measurement, collection, analysis, and reporting of data about learners and their contexts' },
        { term: 'adaptive learning', definition: 'Educational technology that adjusts to individual learner needs based on performance' },
        { term: 'cognitive tutoring', definition: 'Intelligent tutoring systems based on cognitive science principles' },
      ],
      analogies: [
        'Personalized learning is like having a custom-tailored suit - it fits your specific needs and preferences.',
        'Universal design is like building a ramp instead of stairs - it helps everyone, not just those who need it.',
      ],
      examples: [
        'An AI-powered platform that generates personalized visual explanations based on individual learning patterns.',
        'A medical school implementing dual coding principles across all courses with faculty development and quality metrics.',
      ],
      patientCounselingPoints: [
        'Advances in educational technology are creating more accessible and effective health education materials',
        'Personalized visual learning can accommodate different learning styles and accessibility needs',
      ],
    },
  },

  media: [
    {
      id: 'dual-channels',
      type: 'diagram',
      filename: 'dual-channels.svg',
      title: 'Dual Channel Processing',
      description: 'Diagram showing separate visual and verbal processing channels',
    },
    {
      id: 'multimedia-principles',
      type: 'diagram',
      filename: 'multimedia-principles.svg',
      title: 'Mayer\'s Multimedia Principles',
      description: 'Visual summary of key principles for effective multimedia learning',
    },
  ],

  citations: [
    {
      id: 'paivio-dual-coding',
      type: 'textbook',
      title: 'Mental Representations: A Dual Coding Approach',
      authors: ['Paivio, A.'],
      source: 'Oxford University Press',
      accessedDate: '2025-01-28',
    },
    {
      id: 'mayer-multimedia',
      type: 'textbook',
      title: 'Multimedia Learning',
      authors: ['Mayer, R.E.'],
      source: 'Cambridge University Press',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-concept-mapping', targetType: 'concept', relationship: 'related', label: 'Concept Mapping' },
    { targetId: 'education-active-learning', targetType: 'concept', relationship: 'related', label: 'Active Learning' },
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['learning techniques', 'study skills', 'multimedia learning', 'visual learning'],
    keywords: ['dual coding', 'multimedia', 'visual learning', 'study technique', 'cognitive science'],
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

export default dualCoding;
