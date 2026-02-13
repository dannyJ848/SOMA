/**
 * Active Learning - Engaging with Material for Deeper Understanding
 *
 * Educational content covering active learning principles, techniques,
 * and applications for medical education.
 */

import { EducationalContent } from '../../types';

export const activeLearning: EducationalContent = {
  id: 'education-active-learning',
  type: 'concept',
  name: 'Active Learning Techniques',
  alternateNames: ['Engaged Learning', 'Participatory Learning', 'Interactive Learning'],

  levels: {
    1: {
      level: 1,
      summary: 'Active learning means doing things with what you are studying instead of just reading or listening. When you participate in your learning, you remember more.',
      explanation: `## What is Active Learning?

Active learning is when you DO something while studying, not just read or listen. It helps you understand and remember better!

## Active vs. Passive Learning

**Passive Learning (Less Effective):**
- Just reading a book
- Listening without taking notes
- Watching videos without thinking
- Highlighting text

**Active Learning (More Effective):**
- Answering questions
- Teaching someone else
- Drawing diagrams
- Discussing with friends
- Doing practice problems

## Why Active Learning Works

When you actively participate:
- Your brain works harder
- You find out what you don't know
- Information "sticks" better
- You can use what you learned

## Easy Active Learning Techniques

**1. Ask Questions**
- Ask "why" and "how" while reading
- Try to answer before looking

**2. Teach Someone**
- Explain what you learned to a friend or family member
- If you can teach it, you understand it!

**3. Quiz Yourself**
- Make flashcards
- Cover your notes and try to remember
- Use practice questions

**4. Draw and Diagram**
- Make pictures of what you're learning
- Create mind maps
- Draw how things connect

**5. Discuss with Others**
- Study groups
- Explain your thinking
- Listen to other ideas

## Tips for Active Learning

- Put away distractions (phone!)
- Take short breaks
- Don't just read - DO something
- Mix up how you study`,
      keyTerms: [
        { term: 'active learning', definition: 'Studying by doing activities that make you think and participate' },
        { term: 'passive learning', definition: 'Studying by just reading or listening without doing much else' },
        { term: 'mind map', definition: 'A diagram that shows how ideas connect to each other' },
      ],
      analogies: [
        'Active learning is like learning to ride a bike - you have to actually do it, not just read about it.',
        'Passive learning is like watching someone cook - you see it but can\'t make the dish yourself.',
        'Teaching someone is like testing your own cooking by serving it to guests.',
      ],
      examples: [
        'Instead of just reading about the heart, a student draws a picture and labels each part.',
        'A student explains how breathing works to their younger sibling to make sure they understand it.',
      ],
      patientCounselingPoints: [
        'Active learning helps medical students deeply understand the material they need to care for patients',
        'The same principles help patients learn about their health conditions',
      ],
    },

    2: {
      level: 2,
      summary: 'Active learning involves cognitive engagement with material through activities like self-testing, teaching, elaboration, and problem-solving. Research shows active learning significantly outperforms passive approaches for retention and understanding.',
      explanation: `## Active Learning Principles

Active learning describes instructional methods that engage students in the learning process through meaningful activities and reflection on what they are doing.

## The Learning Pyramid

Research suggests different retention rates for different activities:

| Method | Retention |
|--------|-----------|
| Lecture | 5% |
| Reading | 10% |
| Audiovisual | 20% |
| Demonstration | 30% |
| Discussion | 50% |
| Practice | 75% |
| Teaching others | 90% |

*Note: Exact percentages debated, but the principle holds.*

## Core Active Learning Techniques

**Self-Testing (Retrieval Practice)**
- Quiz yourself without notes
- Use flashcards
- Practice questions
- Write from memory

**Elaboration**
- Ask "why" and "how" questions
- Connect new info to what you know
- Explain concepts in your own words
- Generate examples

**Teaching/Explaining**
- Explain to a real person
- Pretend to teach (Feynman technique)
- Write explanations
- Create study guides for others

**Problem-Solving**
- Work through practice problems
- Apply concepts to new situations
- Case-based learning
- Scenario analysis

**Discussion**
- Study groups
- Peer instruction
- Socratic dialogue
- Collaborative learning

## Implementing Active Learning

**During Lectures:**
- Take notes in your own words
- Write questions as you listen
- Summarize each section
- Discuss with neighbors when prompted

**During Reading:**
- Stop and summarize paragraphs
- Ask questions about the text
- Create diagrams
- Connect to previous knowledge

**During Review:**
- Close notes and recall
- Teach to an imaginary student
- Do practice problems
- Create your own questions

## Benefits of Active Learning

**Cognitive Benefits:**
- Deeper processing
- Better memory encoding
- Identification of knowledge gaps
- Improved understanding

**Metacognitive Benefits:**
- Better awareness of what you know
- Improved self-assessment
- More accurate confidence
- Better study strategies

## Common Obstacles

| Obstacle | Solution |
|----------|----------|
| "Takes more time" | More efficient in long run |
| "Feels harder" | Difficulty means learning |
| "Prefer passive" | Start with small changes |
| "No study partners" | Teach imaginary student |

## Active Learning in Medical Education

**Pre-Clinical:**
- Problem-based learning (PBL)
- Team-based learning (TBL)
- Case discussions
- Peer teaching

**Clinical:**
- Bedside teaching
- Case presentations
- Simulation
- Procedure practice`,
      keyTerms: [
        { term: 'retrieval practice', definition: 'The act of recalling information from memory, which strengthens learning' },
        { term: 'elaboration', definition: 'Connecting new information to existing knowledge through explanation and questioning' },
        { term: 'Feynman technique', definition: 'Learning method where you explain a concept simply as if teaching a child' },
        { term: 'problem-based learning', definition: 'Learning approach where students learn through solving complex, real-world problems' },
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thinking and learning processes' },
      ],
      analogies: [
        'Active learning is like working out at the gym - the effort builds strength (memory).',
        'The Feynman technique is like translating a complex book into simple language - it reveals gaps in understanding.',
        'Elaboration is like weaving new threads into existing fabric - creating connections makes both stronger.',
      ],
      examples: [
        'A student reads a paragraph about kidney function, then closes the book and writes a summary without looking.',
        'During a study group, each person takes turns teaching a topic to the others, answering questions along the way.',
      ],
      patientCounselingPoints: [
        'Active learning methods help future doctors develop deep understanding of medical concepts',
        'These techniques can be shared with patients to help them learn about their conditions',
      ],
    },

    3: {
      level: 3,
      summary: 'Active learning encompasses evidence-based strategies that require cognitive engagement during study. Techniques like retrieval practice, elaboration, and interleaving demonstrate robust effects on learning outcomes. Implementation requires deliberate practice and metacognitive awareness.',
      explanation: `## Active Learning Framework

Active learning is grounded in cognitive science research demonstrating that learning requires mental effort and engagement rather than passive information reception.

## Cognitive Science Foundation

**Levels of Processing:**
- Shallow processing: Surface features
- Deep processing: Meaning and connections
- Active learning promotes deeper processing
- Deeper processing improves retention

**Dual Coding Theory:**
- Verbal and visual representations
- Multiple codes strengthen memory
- Diagrams + words more effective
- Promotes active engagement

**Generation Effect:**
- Generating information improves retention
- Better than just reading/hearing
- Effort of generation strengthens memory
- Active production enhances encoding

## Evidence-Based Techniques

**Retrieval Practice:**
| Method | Application |
|--------|-------------|
| Free recall | Write everything you remember |
| Cued recall | Answer specific questions |
| Recognition | Multiple choice practice |
| Spaced retrieval | Increasing intervals |

**Elaborative Interrogation:**
- Ask "why" for each fact
- Generate explanations
- Connect to prior knowledge
- Create meaningful associations

**Self-Explanation:**
- Explain each step of a process
- Identify what you don't understand
- Compare to what you know
- Generate examples

**Interleaved Practice:**
- Mix different topics
- Alternate problem types
- Improves discrimination
- Better long-term retention

## Implementation Strategies

**Lecture Optimization:**
| Traditional | Active |
|-------------|--------|
| Listen passively | Take notes in own words |
| Copy slides | Create questions |
| Wait until end | Think during pauses |
| Review notes | Test yourself |

**Reading Optimization:**
1. Preview section headings
2. Generate questions before reading
3. Read to answer questions
4. Summarize without looking
5. Self-test on content

**Study Session Design:**
| Phase | Activity | Time |
|-------|----------|------|
| Activation | Review previous material | 10% |
| Input | Read/watch new content | 30% |
| Processing | Elaborate, explain | 30% |
| Testing | Self-quiz, practice | 30% |

## Medical Education Applications

**Problem-Based Learning (PBL):**
- Small groups with facilitator
- Clinical case drives learning
- Self-directed study
- Group synthesis and discussion

**Team-Based Learning (TBL):**
- Individual preparation
- Readiness assurance tests
- Application activities
- Peer discussion

**Simulation-Based Education:**
- Procedural skills training
- Clinical scenario practice
- Immediate feedback
- Deliberate practice

## Metacognitive Development

**Self-Monitoring Skills:**
- Assess current understanding
- Identify knowledge gaps
- Adjust study strategies
- Evaluate learning effectiveness

**Calibration:**
- Predict performance before testing
- Compare prediction to results
- Adjust confidence accordingly
- Improve accuracy over time

## Challenges and Solutions

| Challenge | Evidence-Based Solution |
|-----------|------------------------|
| Feels inefficient | Long-term efficiency > short-term |
| Uncomfortable difficulty | Desirable difficulties enhance learning |
| Time pressure | Active methods actually save time |
| Preference for passive | Start small, build gradually |

## Assessment Integration

**Formative Assessment:**
- Low-stakes practice
- Immediate feedback
- Identifies gaps
- Guides further study

**Authentic Assessment:**
- Real-world application
- Clinical scenarios
- Performance tasks
- Portfolio development`,
      keyTerms: [
        { term: 'levels of processing', definition: 'Theory that deeper semantic processing leads to better memory than shallow structural processing' },
        { term: 'dual coding', definition: 'Theory that combining verbal and visual information enhances memory and understanding' },
        { term: 'generation effect', definition: 'The finding that actively generating information produces better retention than passive reading' },
        { term: 'desirable difficulties', definition: 'Challenges during learning that slow acquisition but improve long-term retention' },
        { term: 'formative assessment', definition: 'Low-stakes assessment used to guide learning rather than assign grades' },
      ],
      analogies: [
        'Levels of processing is like sculpting versus painting a statue - going deeper creates more durable impressions.',
        'Dual coding is like singing while reading lyrics - two channels reinforce each other.',
        'Desirable difficulties are like resistance training - the struggle builds strength.',
        'Formative assessment is like practice games before the championship - feedback without final consequences.',
      ],
      examples: [
        'A student uses elaborative interrogation while studying diabetes, asking "Why does insulin resistance develop?" and generating explanations.',
        'During PBL, students work through a case of chest pain, identifying learning objectives, researching independently, then synthesizing as a group.',
      ],
      patientCounselingPoints: [
        'Active learning approaches develop the clinical reasoning skills physicians use in practice',
        'These methods build deeper understanding that translates to better patient care',
      ],
    },

    4: {
      level: 4,
      summary: 'Active learning integrates cognitive psychology principles including generation effect, testing effect, and desirable difficulties. Implementation requires understanding mechanism, strategic design, and metacognitive monitoring. Evidence supports significant advantages over passive approaches.',
      explanation: `## Advanced Active Learning Framework

Graduate-level understanding of active learning requires integration of cognitive psychology, instructional design, and metacognitive theory.

## Cognitive Mechanisms

**Memory Encoding:**
| Factor | Effect on Learning |
|--------|-------------------|
| Depth of processing | Deeper = better |
| Generation | Active > passive |
| Retrieval practice | Testing strengthens |
| Elaboration | Connections enhance |
| Spacing | Distributed > massed |

**Transfer Mechanisms:**
- Deep structure understanding
- Multiple retrieval routes
- Flexible knowledge application
- Schema development

**Cognitive Load Considerations:**
| Load Type | Management Strategy |
|-----------|---------------------|
| Intrinsic | Cannot reduce, scaffold |
| Extraneous | Eliminate |
| Germane | Optimize active processing |

## Advanced Techniques

**Feynman Technique Implementation:**
1. Choose concept
2. Teach it simply (as if to a child)
3. Identify gaps in explanation
4. Return to source, fill gaps
5. Simplify and use analogies
6. Repeat until fluent

**Elaborative Interrogation Protocols:**
| Level | Question Type |
|-------|---------------|
| Basic | Why is this true? |
| Connection | How does this relate to X? |
| Application | When would this apply? |
| Prediction | What would happen if...? |
| Synthesis | How do these combine? |

**Concept Mapping Principles:**
- Hierarchical organization
- Cross-links between concepts
- Propositions (concept-link-concept)
- Revision as understanding develops

## Instructional Design

**ICAP Framework:**
| Mode | Definition | Cognitive Process |
|------|------------|-------------------|
| Interactive | Collaborating | Co-construction |
| Constructive | Generating | Knowledge building |
| Active | Manipulating | Integration |
| Passive | Receiving | Storage |

Interactive > Constructive > Active > Passive

**Worked Example to Problem-Solving:**
- Novices: Worked examples most effective
- Experts: Problem-solving most effective
- Transition: Faded worked examples
- "Expertise reversal effect"

## Metacognitive Integration

**Self-Regulation Cycle:**
1. **Planning:** Set goals, choose strategies
2. **Monitoring:** Track comprehension, adjust
3. **Evaluating:** Assess outcomes, revise approach

**Calibration Training:**
| Technique | Purpose |
|-----------|---------|
| Prediction practice | Estimate before testing |
| Confidence tracking | Monitor certainty |
| Post-test reflection | Compare actual to predicted |
| Strategy evaluation | What worked, what didn't |

## Implementation Science

**Adoption Barriers:**
| Barrier | Intervention |
|---------|-------------|
| Student resistance | Explain rationale |
| Time perception | Demonstrate efficiency |
| Discomfort with difficulty | Normalize struggle |
| Faculty training | Development programs |

**Scaling Considerations:**
- Large class adaptations
- Technology integration
- Resource requirements
- Assessment alignment

## Assessment Alignment

**Constructive Alignment:**
- Learning outcomes
- Learning activities
- Assessment methods
- All should align

**Active Learning Assessment:**
| Activity | Assessment |
|----------|------------|
| Problem-solving | Authentic problems |
| Teaching | Explanation quality |
| Discussion | Contribution quality |
| Application | Transfer tasks |

## Research Base

**Meta-Analytic Findings:**
| Comparison | Effect Size |
|------------|-------------|
| Active vs. lecture | d = 0.47 |
| Active fail rate | 1.5x lower |
| Retrieval practice | d = 0.5-0.7 |
| Elaboration | d = 0.4-0.6 |

**Boundary Conditions:**
- Effect size varies by domain
- Implementation quality matters
- Student engagement required
- Assessment must align`,
      keyTerms: [
        { term: 'ICAP framework', definition: 'Model categorizing cognitive engagement levels: Interactive, Constructive, Active, Passive' },
        { term: 'expertise reversal effect', definition: 'Finding that instructional methods effective for novices become less effective for experts' },
        { term: 'constructive alignment', definition: 'Principle that learning objectives, activities, and assessments should be mutually supportive' },
        { term: 'faded worked examples', definition: 'Gradual transition from complete worked examples to full problem-solving' },
        { term: 'self-regulation', definition: 'The process of planning, monitoring, and evaluating one\'s own learning' },
      ],
      analogies: [
        'The ICAP framework is like a engagement staircase - each step up requires more cognitive involvement.',
        'Expertise reversal is like training wheels - helpful at first but limiting later.',
        'Constructive alignment is like building a three-legged stool - all parts must support each other.',
        'Self-regulation is like being your own coach - planning, observing, and adjusting.',
      ],
      examples: [
        'An instructor uses faded worked examples, first showing complete solutions, then omitting steps for students to fill in, finally presenting only problems.',
        'A student uses the self-regulation cycle: plans to study cardiology using retrieval practice, monitors understanding through self-quizzing, and adjusts to focus on weak areas.',
      ],
      patientCounselingPoints: [
        'Active learning methods develop the flexible thinking physicians need for clinical practice',
        'Understanding how learning works helps physicians better educate patients and trainees',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of active learning integrates cognitive science, instructional design, and implementation science. Expert educators design learning experiences that promote deep processing, transfer, and self-regulation. Research continues to refine understanding of mechanisms and optimal implementation.',
      explanation: `## Professional Active Learning Framework

Expert-level active learning practice requires synthesis of cognitive science, educational research, and practical implementation expertise.

## Theoretical Integration

**Learning Science Synthesis:**
| Theory | Contribution |
|--------|--------------|
| Cognitive load | Capacity management |
| Dual process | System 1/2 optimization |
| Constructivism | Knowledge construction |
| Transfer | Application beyond context |
| Self-determination | Motivation integration |

**Mechanistic Understanding:**
- Encoding variability
- Retrieval route multiplication
- Schema construction
- Metacognitive calibration
- Transfer preparation

## Advanced Design Principles

**Productive Failure:**
- Initial problem-solving without instruction
- Activation of prior knowledge
- Awareness of knowledge gaps
- Direct instruction then more effective

**Desirable Difficulties Optimization:**
| Difficulty | Benefit | Implementation |
|------------|---------|----------------|
| Spacing | Long-term retention | Distributed practice |
| Interleaving | Discrimination | Mixed practice |
| Generation | Deeper encoding | Active production |
| Testing | Retrieval strengthening | Frequent practice tests |

**Worked Examples vs. Problem-Solving:**
| Expertise Level | Optimal Method |
|-----------------|----------------|
| Novice | Worked examples |
| Intermediate | Faded examples |
| Advanced | Problem-solving |

## Implementation Excellence

**Course-Level Design:**
1. Backward design from outcomes
2. Active learning activity mapping
3. Assessment alignment
4. Scaffolding progression
5. Metacognitive integration

**Session-Level Design:**
| Phase | Time | Activity |
|-------|------|----------|
| Preparation | Before class | Reading, initial questions |
| Activation | 5-10 min | Prior knowledge retrieval |
| Input | 10-15 min | New content introduction |
| Processing | 15-20 min | Active engagement |
| Consolidation | 5-10 min | Synthesis, self-assessment |

## Faculty Development

**Expert Facilitation Skills:**
- Questioning techniques
- Wait time management
- Scaffolding support
- Feedback provision
- Group dynamics management

**Common Pitfalls:**
| Pitfall | Solution |
|---------|----------|
| Activity without thinking | Require cognitive engagement |
| Insufficient processing time | Adequate wait time |
| Poor debriefing | Structured synthesis |
| Misaligned assessment | Constructive alignment |

## Research and Scholarship

**Current Research Directions:**
- Precision education
- Technology optimization
- Individual difference moderators
- Transfer enhancement
- Long-term outcomes

**Methodological Considerations:**
| Design | Strength | Limitation |
|--------|----------|------------|
| RCT | Causal inference | Ecological validity |
| Quasi-experimental | Practical | Confounding |
| Design-based | Iterative improvement | Generalizability |

## Systems-Level Implementation

**Institutional Change:**
- Culture shift requirements
- Resource allocation
- Faculty incentives
- Assessment reform
- Physical space design

**Sustainability Factors:**
| Factor | Strategy |
|--------|----------|
| Faculty buy-in | Evidence, training |
| Student acceptance | Rationale, scaffolding |
| Assessment alignment | Reform concurrently |
| Administrative support | Outcome data |

## Technology Integration

**Digital Active Learning:**
| Technology | Application |
|------------|-------------|
| Audience response | Real-time assessment |
| Collaborative platforms | Group work |
| Simulation | Practice, feedback |
| Analytics | Personalization |

**Blended Learning Optimization:**
- Pre-class preparation
- In-class application
- Post-class consolidation
- Continuous feedback loop`,
      keyTerms: [
        { term: 'productive failure', definition: 'Instructional design where initial struggle without support prepares for more effective subsequent learning' },
        { term: 'backward design', definition: 'Curriculum design approach starting with desired outcomes and working backward to activities' },
        { term: 'design-based research', definition: 'Iterative research approach developing and testing interventions in real educational contexts' },
        { term: 'precision education', definition: 'Tailoring educational approaches to individual learner characteristics' },
      ],
      clinicalNotes: `Expert perspective on active learning:

1. **Evidence Over Tradition:** Active learning significantly outperforms lecture-based instruction. The evidence is robust; implementation is the challenge.

2. **Mechanism Understanding:** Know why techniques work. Understanding mechanisms enables adaptation to new contexts and troubleshooting when things don't work.

3. **Desirable Difficulties:** Learning that feels easy often isn't effective. Productive struggle builds stronger knowledge. Help learners understand this.

4. **Expertise Matters:** What works for novices differs from what works for experts. Design instruction appropriate to learner expertise level.

5. **Implementation Quality:** Poor implementation undermines active learning. Activity without genuine cognitive engagement is not active learning.

6. **Metacognitive Integration:** Active learning should develop self-regulation skills along with content knowledge. Make thinking visible.

7. **Assessment Alignment:** If assessment rewards memorization, students will memorize. Align assessment with active learning goals.

8. **Faculty Development:** Expert facilitation is a skill requiring development. Invest in faculty training for effective implementation.

9. **Systems Perspective:** Individual course changes are insufficient. Sustainable active learning requires institutional culture change.

10. **Continuous Improvement:** Use data to refine implementation. Active learning in teaching about teaching creates better educators.`,
    },
  },

  media: [
    {
      id: 'learning-pyramid',
      type: 'diagram',
      filename: 'learning-pyramid.svg',
      title: 'Learning Pyramid',
      description: 'Retention rates for different learning activities',
    },
    {
      id: 'icap-framework',
      type: 'diagram',
      filename: 'icap-framework.svg',
      title: 'ICAP Framework for Cognitive Engagement',
      description: 'Visual representation of engagement levels',
    },
  ],

  citations: [
    {
      id: 'active-learning-meta-analysis',
      type: 'article',
      title: 'Active Learning Increases Student Performance in Science, Engineering, and Mathematics',
      authors: ['Freeman, S.', 'et al.'],
      source: 'Proceedings of the National Academy of Sciences',
      accessedDate: '2025-01-28',
    },
    {
      id: 'chi-icap-2014',
      type: 'article',
      title: 'The ICAP Framework',
      authors: ['Chi, M.T.H.', 'Wylie, R.'],
      source: 'Educational Psychologist',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'parent', label: 'Effective Study Methods' },
    { targetId: 'education-concept-mapping', targetType: 'concept', relationship: 'related', label: 'Concept Mapping' },
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['active learning', 'educational psychology', 'learning techniques', 'instructional design'],
    keywords: ['active learning', 'retrieval practice', 'elaboration', 'PBL', 'TBL', 'engagement'],
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

export default activeLearning;
