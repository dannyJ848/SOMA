/**
 * Active Recall - Powerful Learning Through Self-Testing
 *
 * Educational content covering the active recall learning technique
 * and its application in medical education.
 */

import { EducationalContent } from '../../types';

export const activeRecall: EducationalContent = {
  id: 'education-active-recall',
  type: 'concept',
  name: 'Active Recall',
  alternateNames: ['Retrieval Practice', 'Self-Testing', 'Active Retrieval', 'Practice Testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Active recall is a study method where you try to remember information without looking at your notes. It helps you learn better than just re-reading.',
      explanation: `## What Is Active Recall?

Active recall is a way of studying where you actively try to remember information instead of just passively reading it. It is like testing yourself before the real test.

## How It Works

Instead of just reading your notes over and over:
1. Close your book or notes
2. Try to remember what you learned
3. Write down or say everything you can recall
4. Check what you got right and wrong
5. Focus on what you forgot

## Why Is It Better Than Re-reading?

**Re-reading is passive:**
- Your eyes move over the words
- You think you know the material
- But you may not remember it later

**Active recall is active:**
- Your brain works to pull out information
- You find gaps in your knowledge
- You strengthen memory connections

## Simple Ways to Use Active Recall

**Flashcards:**
- Question on one side
- Answer on the other
- Try to answer before flipping

**Practice Questions:**
- Use question banks
- Try to answer first
- Then check the explanation

**Teach Someone:**
- Explain the topic out loud
- Without looking at notes
- Notice where you get stuck

**Write from Memory:**
- After reading, close the book
- Write down what you remember
- Compare to your notes

## Tips for Success

1. Do not look at notes while recalling
2. It is okay to struggle - that helps learning
3. Check answers immediately after
4. Repeat what you got wrong
5. Use it for everything you need to memorize`,
      keyTerms: [
        { term: 'active recall', definition: 'A learning technique where you actively try to remember information without looking at your notes' },
        { term: 'retrieval practice', definition: 'Another name for active recall - practicing pulling information from memory' },
        { term: 'passive reading', definition: 'Simply reading over notes without trying to actively remember the information' },
        { term: 'self-testing', definition: 'Testing yourself on material to check your understanding and memory' },
      ],
      analogies: [
        'Active recall is like doing practice shots in basketball - you learn by doing, not by watching.',
        'It is like checking if you locked the door - you have to actually try to remember, not just assume you did.',
      ],
      examples: [
        'After reading about the heart, a student closes the book and draws the heart from memory, labeling all the parts.',
        'A student uses flashcards to test themselves on drug names, trying to remember the mechanism before checking the answer.',
      ],
      patientCounselingPoints: [
        'Active recall helps medical students remember information they will need to care for patients',
        'Self-testing is one of the most effective ways to learn and remember new information',
      ],
    },

    2: {
      level: 2,
      summary: 'Active recall, also called retrieval practice, is a learning technique where students actively stimulate memory during the learning process. Research shows it produces better long-term learning than passive review methods.',
      explanation: `## Understanding Active Recall

Active recall is the practice of actively stimulating memory for information during learning. It is one of the most effective evidence-based learning strategies.

## The Science Behind Active Recall

**Retrieval Strength vs. Storage Strength:**
- **Storage strength:** How well information is stored in memory
- **Retrieval strength:** How easily information can be accessed
- Active recall strengthens both

**Why It Works:**
1. **Encoding enhancement:** Retrieval creates additional memory pathways
2. **Metacognitive awareness:** Students learn what they do not know
3. **Desirable difficulties:** Effortful retrieval improves learning
4. **Transfer-appropriate processing:** Practice matches testing conditions

## Evidence for Active Recall

| Study Finding | Impact |
|--------------|--------|
| Self-testing beats re-reading | Effect size: 0.50-0.80 |
| Practice testing improves retention | 50% better than studying |
| Testing effect persists long-term | Benefits seen weeks later |
| Works across age groups and subjects | Robust finding |

## Active Recall Methods

**Closed-Book Summarization:**
1. Read a section of text
2. Close the book
3. Write everything you remember
4. Check accuracy
5. Fill in gaps

**Question Generation:**
- Create questions while reading
- Answer them later
- Use who, what, when, where, why, how

**Flashcard Systems:**
- Paper or digital
- Regular review schedule
- Focus on cards you miss

**Practice Testing:**
- Question banks
- Past exams
- Self-made quizzes
- Study group testing

## Implementation Strategies

**During Initial Learning:**
- Pause after each section
- Ask yourself: What did I just learn?
- Explain concepts out loud
- Create mental summaries

**During Review:**
- Always test before looking
- Space out recall attempts
- Mix different topics
- Vary question types

**Common Mistakes:**
| Mistake | Correction |
|---------|------------|
| Looking too soon | Force yourself to struggle |
| Giving up quickly | Push through discomfort |
| Passive highlighting | Turn highlights into questions |
| Only easy questions | Include challenging material |

## Integration with Other Techniques

**Spaced Repetition:**
- Active recall at spaced intervals
- Combines two powerful techniques
- Maximizes retention efficiency

**Elaborative Interrogation:**
- Ask "why" and "how"
- Connect to prior knowledge
- Deepens understanding

**Concrete Examples:**
- Recall with specific examples
- Makes abstract concepts memorable`,
      keyTerms: [
        { term: 'retrieval strength', definition: 'How easily information can be pulled from memory at a given moment' },
        { term: 'testing effect', definition: 'The finding that long-term memory is improved when learning includes active retrieval' },
        { term: 'desirable difficulties', definition: 'Challenges that require effort but improve learning outcomes' },
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thought processes' },
      ],
      analogies: [
        'Active recall is like strength training - the effort of lifting weights builds muscle, just as the effort of retrieval builds memory.',
        'Re-reading without recall is like watching someone else work out - you see it happening, but you do not get stronger.',
      ],
      examples: [
        'A medical student reads about diabetes, closes the book, and writes down everything they can remember about the disease mechanism.',
        'A study group quizzes each other on anatomy structures without looking at diagrams, then checks their answers.',
      ],
      patientCounselingPoints: [
        'Active recall is one of the most researched and effective learning methods available',
        'The effort of trying to remember, even when difficult, strengthens memory pathways',
      ],
    },

    3: {
      level: 3,
      summary: 'Active recall leverages the testing effect to enhance learning through retrieval practice. Effective implementation requires understanding cognitive mechanisms, selecting appropriate methods, and integrating recall with other evidence-based study strategies.',
      explanation: `## Active Recall Science and Application

Active recall operates through multiple cognitive mechanisms to enhance encoding, consolidation, and retrieval of information.

## Cognitive Mechanisms

**Multiple Route Theory:**
- Retrieval creates additional neural pathways
- Information becomes accessible through multiple cues
- Reduces dependence on specific prompts

**Consolidation Enhancement:**
- Retrieval triggers reconsolidation
- Memory traces become more stable
- Connections to related knowledge strengthen

**Metacognitive Calibration:**
- Students identify knowledge gaps
- Judgments of learning improve
- Study time is allocated efficiently

## Active Recall Variants

**Free Recall:**
- Recall everything about a topic
- No specific prompts
- Best for overall knowledge assessment

**Cued Recall:**
- Partial information provided
- Fill in missing details
- Scaffolds difficult retrievals

**Recognition with Active Components:**
- Multiple choice with justification
- Why is this answer correct?
- Why are others incorrect?

**Successive Relearning:**
- Test until correct
- Space subsequent tests
- Highly efficient for retention

## Implementation Framework

**Pre-Study Phase:**
| Step | Action |
|------|--------|
| Preview | Skim material for structure |
| Question | Generate questions before reading |
| Read | Active reading with purpose |

**During Study Phase:**
| Step | Action |
|------|--------|
| Pause | Stop after each section |
| Recall | Close materials and retrieve |
| Check | Verify accuracy |
| Elaborate | Connect to prior knowledge |

**Review Phase:**
| Step | Action |
|------|--------|
| Delay | Wait before reviewing |
| Test | Active recall first |
| Target | Focus on errors |
| Cycle | Repeat at intervals |

## Medical Education Applications

**Anatomy:**
- Label diagrams from memory
- Describe structures without images
- Trace pathways mentally

**Pharmacology:**
- Mechanism before checking drug
- Indications from drug name
- Side effects from memory

**Pathology:**
- Differential from presentation
- Diagnostic criteria recall
- Treatment algorithms

**Clinical Reasoning:**
- Case presentations without notes
- Differential generation
- Next step determination

## Optimization Strategies

**Difficulty Calibration:**
- Target 70-80% success rate
- Too easy = not learning
- Too hard = discouraging
- Productive struggle zone

**Feedback Quality:**
| Timing | Effectiveness |
|--------|---------------|
| Immediate | Corrects errors quickly |
| Delayed | Prevents dependency |
| Self-generated | Deeper processing |

**Interleaving:**
- Mix topics during recall
- Improves discrimination
- Enhances transfer

## Measurement and Assessment

**Learning Metrics:**
- Retention at 1 week
- Retention at 1 month
- Application to new problems
- Transfer to novel contexts

**Study Efficiency:**
- Time per concept learned
- Retention per minute studied
- Performance on final assessment`,
      keyTerms: [
        { term: 'reconsolidation', definition: 'The process of restabilizing a memory after it is retrieved, which can strengthen or modify it' },
        { term: 'successive relearning', definition: 'Practicing retrieval until correct, then spacing additional practice trials' },
        { term: 'interleaving', definition: 'Mixing different topics or skills during practice rather than blocking' },
        { term: 'productive struggle', definition: 'The optimal level of difficulty that requires effort but remains achievable' },
      ],
      analogies: [
        'Multiple retrieval routes are like having multiple roads to a destination - if one is blocked, others still work.',
        'Successive relearning is like waterproofing a tent - first application helps, but multiple layers provide better protection.',
      ],
      examples: [
        'A student uses the Cornell note-taking system, covering the note column and using cue column prompts for active recall.',
        'A resident presents a patient case from memory without looking at the chart, then verifies details.',
      ],
      patientCounselingPoints: [
        'Active recall creates stronger memory traces than passive review',
        'The difficulty of active recall is what makes it effective - easy studying rarely produces lasting learning',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced active recall mastery requires understanding retrieval dynamics, optimizing difficulty levels, and systematically integrating recall across the learning continuum. Expert application involves metacognitive monitoring, strategic difficulty calibration, and combining recall with elaborative processing.',
      explanation: `## Advanced Active Recall Concepts

Expert application of active recall involves sophisticated understanding of retrieval dynamics, difficulty optimization, and integration with deeper processing strategies.

## Retrieval Dynamics

**Strength Dynamics:**
| Variable | Effect on Retrieval |
|----------|---------------------|
| Time since learning | Decreases accessibility |
| Number of retrievals | Increases strength |
| Retrieval difficulty | Increases learning |
| Context match | Facilitates access |

**Retrieval-Induced Forgetting:**
- Practicing some items can inhibit related items
- Strategic consideration in study design
- Mitigate through comprehensive coverage
- Balance depth and breadth

**Forward Testing Effect:**
- Testing improves subsequent learning
- Use recall before new study sessions
- Enhances encoding of new material
- Optimizes study sequences

## Difficulty Optimization

**Desirable Difficulty Spectrum:**

Too Easy <-> Optimal <-> Too Hard
  90%+        70-80%      <50%

**Calibration Strategies:**
- Monitor success rates
- Adjust support level
- Use scaffolding appropriately
- Fade cues over time

**Progressive Difficulty:**
| Stage | Support Level | Goal |
|-------|---------------|------|
| Initial | High scaffolding | Success |
| Developing | Partial cues | Challenge |
| Mastery | Free recall | Fluency |
| Maintenance | Spaced testing | Retention |

## Metacognitive Integration

**Judgments of Learning (JOLs):**
- Predict recall success
- Calibrate with actual performance
- Use discrepancy to guide study
- Improves over practice

**Calibration Improvement:**
| Strategy | Effect |
|----------|--------|
| Immediate testing | Reduces overconfidence |
| Delayed JOLs | More accurate |
| Feedback on errors | Sharpens calibration |
| Variety of topics | Generalizes skill |

**Regulation of Study:**
- Allocate time based on recall success
- Restudy forgotten material
- Space successfully recalled items
- Terminate study when criteria met

## Elaborative Integration

**Retrieval-Elaboration Combination:**
1. Initial retrieval attempt
2. Check accuracy
3. Elaborate correct answers
4. Study errors with connections
5. Re-retrieve elaborated material

**Elaboration Types:**
| Type | Description |
|------|-------------|
| Self-explanation | Explain why answer is correct |
| Analogical | Connect to known examples |
| Structural | Map to existing knowledge |
| Practical | Apply to clinical scenarios |

## Long-Term Retention Design

**Spacing Functions:**
- Optimal intervals increase with each successful retrieval
- Expand spacing schedule
- Individualize based on difficulty
- Prioritize items with low retrieval strength

**Retrieval Scheduling:**
| Priority | Items |
|----------|-------|
| High | Recently learned, frequently missed |
| Medium | Moderate difficulty, stable |
| Low | Well-learned, high success |

**Decay Prevention:**
- Continue retrieval practice after mastery
- Refresh at expanding intervals
- Mix old and new material
- Periodic comprehensive review

## Clinical Application

**Differential Diagnosis Drills:**
- Present with symptoms only
- Generate differential from memory
- Check against criteria
- Practice until fluent

**Treatment Algorithm Recall:**
- Patient scenario presented
- Management steps from memory
- Protocol verification
- Variation practice

**Drug Information:**
- Indication from drug name
- Mechanism without notes
- Side effects from memory
- Interactions recalled

## Assessment Integration

**Formative Self-Testing:**
- Frequent, low-stakes
- Immediate feedback
- Error analysis
- Strategic restudy

**Summative Preparation:**
- Simulated exam conditions
- Comprehensive coverage
- Timing practice
- Anxiety management`,
      keyTerms: [
        { term: 'retrieval-induced forgetting', definition: 'The phenomenon where retrieving some information impairs recall of related information' },
        { term: 'forward testing effect', definition: 'The finding that testing improves learning of subsequent material' },
        { term: 'judgment of learning', definition: 'A prediction about future recall success for an item' },
        { term: 'scaffolding', definition: 'Support provided to help learners succeed with challenging material' },
      ],
      analogies: [
        'Retrieval dynamics are like a savings account - regular deposits (retrievals) increase balance, but withdrawals (decay) happen naturally.',
        'Scaffolding is like training wheels - start with support, then gradually remove as competence develops.',
      ],
      examples: [
        'A student notices they consistently overestimate their knowledge, so they implement immediate self-testing after each study session.',
        'A resident uses progressive difficulty: first with differential checklists, then without, then with time pressure.',
      ],
      patientCounselingPoints: [
        'Expert learners monitor their own understanding and adjust their study strategies based on performance',
        'The combination of active recall and elaboration produces deeper learning than either technique alone',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of active recall encompasses understanding cognitive science foundations, designing optimal retrieval schedules, and integrating recall into comprehensive learning systems. Expert practitioners contribute to the science of learning while mentoring others in evidence-based study strategies.',
      explanation: `## Professional Active Recall Framework

Expert-level active recall practice synthesizes cognitive science, educational research, and practical implementation to optimize learning across contexts.

## Cognitive Science Foundations

**Memory Systems:**
| System | Role in Active Recall |
|--------|----------------------|
| Working memory | Processing during retrieval |
| Episodic memory | Context of learning |
| Semantic memory | Conceptual knowledge |
| Procedural memory | Skill execution |

**Neuroscience of Retrieval:**
- Hippocampal-cortical interactions
- Reactivation of encoding patterns
- Pattern completion mechanisms
- Consolidation over time

**Computational Models:**
| Model | Application |
|-------|-------------|
| ACT-R | Predicting retrieval success |
| SAM | Spacing optimization |
| Multiscale | Temporal dynamics |
| Context | Contextual effects |

## Optimal Design Principles

**Retrieval Practice Design:**
1. **Specific learning objectives:** Define target knowledge
2. **Appropriate retrieval format:** Match to learning goals
3. **Optimal difficulty:** Calibrate challenge level
4. **Timely feedback:** Enable error correction
5. **Spaced implementation:** Optimize retention
6. **Interleaved practice:** Improve discrimination

**Adaptive Systems:**
- Machine learning optimization
- Personalized schedules
- Performance-based adjustment
- Real-time calibration

## Learning System Integration

**Curriculum Design:**
| Component | Active Recall Integration |
|-----------|--------------------------|
| Lectures | Embedded questions, peer discussion |
| Reading | Retrieval-based note taking |
| Labs | Procedural recall, error analysis |
| Clinical | Case presentations, differential drills |

**Assessment Alignment:**
- Formative quizzes
- Retrieval-based examinations
- Oral examinations
- Workplace-based assessment

**Technology Enhancement:**
- Spaced repetition systems
- Adaptive questioning
- Analytics and feedback
- Gamification

## Expert Practice Characteristics

**Metacognitive Sophistication:**
- Accurate self-assessment
- Strategic planning
- Resource allocation
- Error analysis

**Self-Regulation:**
| Process | Expert Behavior |
|---------|-----------------|
| Planning | Set specific goals |
| Monitoring | Track understanding |
| Evaluation | Compare to standards |
| Adaptation | Modify strategies |

**Deliberate Practice:**
- Focus on weaknesses
- Specific feedback
- Repeated retrieval
- Progressive challenge

## Teaching and Mentoring

**Retrieval-Based Teaching:**
- Start classes with retrieval
- Cold calling with wait time
- Retrieval-based homework
- Testing as teaching

**Student Development:**
| Stage | Focus |
|-------|-------|
| Novice | Introduction to technique |
| Developing | Skill building |
| Competent | Independent use |
| Expert | Innovation and mentoring |

**Faculty Development:**
- Training in evidence-based methods
- Modeling active recall
- Assessment redesign
- Culture change

## Research and Innovation

**Current Research Areas:**
- Optimal spacing algorithms
- Individual differences
- Transfer effects
- Technology integration
- Long-term retention

**Contribution Opportunities:**
- Educational research
- Tool development
- Best practice documentation
- Policy influence

**Future Directions:**
| Area | Development |
|------|-------------|
| AI | Personalized retrieval |
| Neuroscience | Brain-based optimization |
| Measurement | Real-time learning analytics |
| Design | Integrated learning systems |

## Professional Application

**Lifelong Learning:**
- Continuous knowledge updating
- Board recertification
- New skill acquisition
- Teaching preparation

**Clinical Reasoning:**
- Pattern recognition development
- Differential generation
- Decision-making under uncertainty
- Diagnostic calibration`,
      keyTerms: [
        { term: 'computational model', definition: 'Mathematical representations that simulate memory processes and predict learning outcomes' },
        { term: 'deliberate practice', definition: 'Focused, structured practice with specific goals and feedback aimed at improving performance' },
        { term: 'adaptive learning system', definition: 'Educational technology that adjusts to individual learner needs based on performance' },
        { term: 'self-regulated learning', definition: 'The process of taking control of and evaluating one\'s own learning and performance' },
      ],
      clinicalNotes: `Expert perspective on active recall:

1. **Foundation Technique:** Active recall is the single most effective learning technique. No other method produces equivalent learning gains for the time invested.

2. **Effort is Essential:** The difficulty of retrieval is what creates learning. Easy retrieval indicates already-learned material; struggle indicates learning is happening.

3. **Metacognitive Accuracy:** Most learners are poor judges of their own learning. Active recall provides objective feedback that calibrates self-assessment.

4. **Integration Required:** Active recall works best when combined with other techniques: spaced repetition, elaboration, and concrete examples.

5. **Feedback Quality:** Immediate feedback corrects errors; delayed feedback prevents dependency. Strategic use of both optimizes learning.

6. **Clinical Application:** In clinical practice, active recall manifests as thinking through cases before looking at the chart - a habit that sharpens diagnostic reasoning.

7. **Technology Enhancement:** Spaced repetition software automates scheduling, but the active recall component remains manual and effortful.

8. **Teaching Through Testing:** Every retrieval opportunity is a learning opportunity. Design curricula with embedded retrieval practice.

9. **Lifelong Learning:** Active recall is essential for maintaining medical knowledge throughout a career. Passive review is insufficient.

10. **Cultural Shift:** Medical education must move from content delivery to retrieval-based learning. This requires institutional commitment and faculty development.`,
    },
  },

  media: [
    {
      id: 'active-recall-diagram',
      type: 'diagram',
      filename: 'active-recall-diagram.svg',
      title: 'Active Recall Process',
      description: 'Diagram showing the active recall learning cycle',
    },
    {
      id: 'testing-effect-graph',
      type: 'diagram',
      filename: 'testing-effect-graph.svg',
      title: 'Testing Effect Research',
      description: 'Graph showing retention benefits of active recall vs re-reading',
    },
  ],

  citations: [
    {
      id: 'karpicke-2012',
      type: 'article',
      title: 'Retrieval-Based Learning: Active Retrieval Promotes Meaningful Learning',
      authors: ['Karpicke, J.D.', 'Agarwal, P.K.'],
      source: 'Current Directions in Psychological Science',
      accessedDate: '2025-01-28',
    },
    {
      id: 'dunlosky-2013',
      type: 'article',
      title: 'Improving Students\' Learning with Effective Learning Techniques',
      authors: ['Dunlosky, J.', 'Rawson, K.A.', 'Marsh, E.J.', 'Nathan, M.J.', 'Willingham, D.T.'],
      source: 'Psychological Science in the Public Interest',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'parent', label: 'Effective Study Methods' },
    { targetId: 'education-question-banks', targetType: 'concept', relationship: 'related', label: 'Question Banks' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['active recall', 'retrieval practice', 'learning science', 'study techniques'],
    keywords: ['active recall', 'retrieval practice', 'self-testing', 'testing effect', 'memory'],
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

export default activeRecall;
