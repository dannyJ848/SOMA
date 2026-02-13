/**
 * Effective Study Methods - Evidence-Based Learning Strategies
 *
 * Educational content covering scientifically-validated study methods
 * for optimal learning and retention in medical education.
 */

import { EducationalContent } from '../../types';

export const effectiveStudyMethods: EducationalContent = {
  id: 'education-effective-study-methods',
  type: 'concept',
  name: 'Effective Study Methods',
  alternateNames: ['Study Techniques', 'Learning Strategies', 'Evidence-Based Learning', 'Study Skills'],

  levels: {
    1: {
      level: 1,
      summary: 'Some study methods work better than others. The best ways to learn include testing yourself, spacing out your studying, and explaining things in your own words.',
      explanation: `## The Best Ways to Study

Not all study methods are equal. Some help you remember things much better than others!

## What Works Best

**1. Test Yourself**
- Use practice questions and quizzes
- Try to answer without looking at notes
- Even getting things wrong helps you learn!

**2. Space Out Your Studying**
- Study a little bit each day
- Don't try to learn everything at once
- Review old material regularly

**3. Explain It Yourself**
- Put ideas into your own words
- Teach the material to someone else
- Ask yourself "why" and "how" questions

**4. Mix It Up**
- Study different topics together
- Don't just focus on one thing for hours
- Switch between subjects

## What Doesn't Work as Well

**Less Effective Methods:**
- Just reading your notes over and over
- Highlighting or underlining
- Copying notes word for word
- Staying up all night to cram

## Why This Matters

Using good study methods helps you:
- Remember things longer
- Understand material better
- Feel less stressed about tests
- Save time overall

## Tips for Better Studying

1. **Take breaks** - Your brain needs rest
2. **Get enough sleep** - Memory improves during sleep
3. **Exercise** - Physical activity helps your brain
4. **Find a quiet place** - Reduce distractions
5. **Set goals** - Know what you want to learn`,
      keyTerms: [
        { term: 'practice testing', definition: 'Studying by testing yourself with questions instead of just reading' },
        { term: 'spacing', definition: 'Spreading study sessions out over time instead of cramming' },
        { term: 'cramming', definition: 'Trying to learn everything at the last minute, which is less effective' },
      ],
      analogies: [
        'Testing yourself is like practicing free throws - you only get better by actually doing it, not just watching.',
        'Spacing your study is like watering a plant - a little regularly is better than flooding it all at once.',
        'Cramming is like eating too fast - you might finish, but you won\'t digest as well.',
      ],
      examples: [
        'Instead of reading a chapter three times, a student closes the book and writes down everything they remember.',
        'A student studies math on Monday, reviews it on Wednesday, and tests themselves on Friday.',
      ],
      patientCounselingPoints: [
        'Good study habits help future doctors learn the information they need to care for patients',
        'Learning how to learn is an important skill for lifelong medical education',
      ],
    },

    2: {
      level: 2,
      summary: 'Research shows that active learning strategies like retrieval practice and spaced repetition significantly outperform passive strategies like re-reading. Understanding and applying these methods improves academic performance.',
      explanation: `## Evidence-Based Study Strategies

Scientific research has identified which study methods are most effective for long-term learning and retention.

## High-Effectiveness Strategies

**Retrieval Practice (Testing Effect)**
- Testing yourself strengthens memory more than re-reading
- Works even without feedback
- Benefits increase with difficult retrieval
- Applications: Flashcards, practice tests, self-quizzing

**Spaced Practice (Distributed Learning)**
- Spreading study over time beats cramming
- Optimal spacing depends on retention interval
- Forgetting between sessions is beneficial
- Applications: Study schedules, spaced repetition software

**Elaborative Interrogation**
- Asking "why" and "how" questions
- Connecting new info to existing knowledge
- Generating explanations improves retention
- Applications: Self-explanation, teaching others

**Interleaving**
- Mixing different topics or problems
- Better for discrimination between concepts
- Initially feels harder but improves retention
- Applications: Mixed problem sets, varied practice

## Moderate-Effectiveness Strategies

**Self-Explanation**
- Explaining how new information relates to known information
- Generating steps in solving problems
- Works well combined with practice

**Summarization**
- Creating brief summaries of material
- Most effective with training in summarization
- Better for main ideas than details

## Low-Effectiveness Strategies

**Highlighting/Underlining**
- Does not enhance retention beyond reading
- Can create illusion of learning
- May be useful for marking items to study later

**Re-Reading**
- Minimal benefit beyond initial reading
- Creates familiarity, not actual knowledge
- Time better spent on active strategies

**Keyword Mnemonic**
- Can help with specific associations
- Limited application
- May interfere with deeper understanding

## Practical Application

| Strategy | How to Use | Best For |
|----------|-----------|----------|
| Retrieval practice | Flashcards, self-tests | Facts, vocabulary |
| Spaced practice | Study schedule | All material |
| Interleaving | Mix topics in sessions | Discriminating concepts |
| Elaboration | Ask why/how questions | Understanding concepts |

## Study Environment

**Optimize conditions:**
- Minimize distractions (phone, social media)
- Consistent study location
- Good lighting and comfortable temperature
- Take regular breaks (Pomodoro technique)

**Sleep and Memory:**
- Sleep consolidates memories
- Sleep deprivation impairs learning
- Naps can boost retention`,
      keyTerms: [
        { term: 'retrieval practice', definition: 'Actively recalling information from memory, which strengthens learning more than passive review' },
        { term: 'spaced practice', definition: 'Distributing study sessions over time rather than massing them together' },
        { term: 'interleaving', definition: 'Mixing different topics or types of problems during study rather than focusing on one at a time' },
        { term: 'elaborative interrogation', definition: 'Generating explanations for facts and asking why relationships exist' },
        { term: 'Pomodoro technique', definition: 'Study method using 25-minute focused sessions with short breaks' },
      ],
      analogies: [
        'Retrieval practice is like strengthening a muscle - the effort of recall builds stronger memory traces.',
        'Interleaving is like cross-training in sports - mixing activities builds more versatile skills.',
        'Re-reading is like watching exercise videos without working out - it feels productive but doesn\'t build strength.',
        'Spaced practice is like compound interest - small regular investments grow more than a single large deposit.',
      ],
      examples: [
        'A student uses Anki flashcards with spaced repetition to learn anatomy terms, reviewing cards at increasing intervals.',
        'Instead of studying all of cardiology then all of pulmonology, a student interleaves topics, doing some of each in every session.',
      ],
      patientCounselingPoints: [
        'Evidence-based study methods help students learn medical information more effectively',
        'Understanding learning science helps physicians continue learning throughout their careers',
      ],
    },

    3: {
      level: 3,
      summary: 'Cognitive psychology research has established clear evidence for optimal learning strategies. Retrieval practice, spaced repetition, and interleaving demonstrate robust effects across diverse learning contexts, while common strategies like highlighting show minimal benefit.',
      explanation: `## Cognitive Science of Effective Learning

Understanding the cognitive mechanisms underlying effective study strategies enables principled application to medical education.

## Retrieval Practice Deep Dive

**Testing Effect Research:**
- Roediger & Karpicke (2006): Testing beats re-studying by 50%+
- Benefits seen across content types and populations
- Effect increases with delayed testing
- Works even without feedback (though feedback helps)

**Mechanisms:**
| Mechanism | Explanation |
|-----------|-------------|
| Memory modification | Retrieval strengthens memory traces |
| Elaboration | Recall activates related information |
| Metacognition | Identifies knowledge gaps |
| Transfer | Improves application to new contexts |

**Optimal Implementation:**
- Multiple retrieval attempts
- Varied retrieval cues
- Spaced retrievals
- Mixed difficulty

## Spaced Practice Science

**Spacing Effect:**
- Ebbinghaus (1885): Forgetting curve research
- Cepeda et al. (2006): Meta-analysis of spacing studies
- Optimal spacing: 10-20% of retention interval
- Expanding vs. equal intervals debate

**Practical Spacing Guidelines:**
| Retention Goal | Optimal Spacing |
|---------------|-----------------|
| 1 week | 1-2 days |
| 1 month | 1 week |
| 1 year | 1-2 months |

**Spaced Repetition Systems:**
- SM-2 algorithm (Anki)
- Leitner box system
- SuperMemo algorithms
- Adaptive spacing

## Interleaving Research

**Evidence:**
- Rohrer & Taylor (2007): Math problem solving
- Kornell & Bjork (2008): Category learning
- Benefits for discrimination tasks
- May not benefit very similar items

**When to Interleave:**
| Effective | Less Effective |
|-----------|----------------|
| Discriminating similar concepts | Learning brand new material |
| Practicing problem types | Very distinct content |
| Reviewing mixed topics | Initial encoding |

## Desirable Difficulties Framework

**Bjork's Desirable Difficulties:**
- Conditions that slow learning but enhance retention
- Include: Spacing, interleaving, generation, variable practice
- Contrast with fluency illusion

**Implementation Considerations:**
- Introduce gradually
- Balance difficulty and motivation
- Monitor for frustration
- Scaffold appropriately

## Metacognition and Self-Regulation

**Components:**
| Component | Description |
|-----------|-------------|
| Monitoring | Assessing own knowledge state |
| Control | Adjusting study strategies |
| Calibration | Accuracy of self-assessment |

**Improving Metacognition:**
- Practice testing reveals true knowledge
- Delayed judgments more accurate
- Training in self-assessment
- Feedback on predictions

## Cognitive Load Theory

**Types of Load:**
| Type | Description | Strategy |
|------|-------------|----------|
| Intrinsic | Complexity of material | Cannot reduce |
| Extraneous | Poor instruction | Should minimize |
| Germane | Schema construction | Should optimize |

**Managing Cognitive Load:**
- Worked examples for novices
- Problem solving for experts
- Integrate visual and verbal
- Eliminate redundancy

## Application to Medical Education

**Clinical Integration:**
| Strategy | Medical Application |
|----------|---------------------|
| Retrieval practice | Question banks, flashcards |
| Spaced repetition | Anki, scheduled review |
| Interleaving | Mixed case practice |
| Elaboration | Mechanism-based learning |

**Evidence in Medical Education:**
- Retrieval practice improves exam performance
- Spaced study increases retention
- Interleaved practice improves diagnostic accuracy`,
      keyTerms: [
        { term: 'testing effect', definition: 'The finding that retrieving information from memory enhances long-term retention more than restudying' },
        { term: 'forgetting curve', definition: 'The exponential decline in memory retention over time without review' },
        { term: 'desirable difficulties', definition: 'Challenges during learning that slow acquisition but enhance long-term retention' },
        { term: 'fluency illusion', definition: 'Mistaking ease of processing for genuine learning and long-term retention' },
        { term: 'cognitive load', definition: 'The total mental effort required during learning, which has limited capacity' },
      ],
      analogies: [
        'Desirable difficulties are like resistance training - the struggle is what builds strength, not the easy repetitions.',
        'The fluency illusion is like recognizing a face but not remembering the name - familiarity is not the same as knowledge.',
        'Cognitive load is like RAM in a computer - limited capacity means you must manage what you\'re processing.',
        'Spaced repetition catches memories before they fall off the forgetting curve, pushing them back up each time.',
      ],
      examples: [
        'A student notices they feel confident about material they just read but fails practice questions, recognizing the fluency illusion.',
        'After analyzing study habits, a student shifts from 3-hour cramming sessions to 1-hour daily sessions with spaced review.',
      ],
      patientCounselingPoints: [
        'Understanding learning science helps medical students optimize their education for patient care',
        'Evidence-based study methods are as important as evidence-based medicine',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level understanding of effective study methods integrates cognitive psychology, educational research, and metacognitive strategies. Optimization requires individualizing evidence-based approaches while avoiding common cognitive biases that lead to ineffective studying.',
      explanation: `## Advanced Learning Science Framework

Expert application of learning science requires understanding mechanism, individual differences, and strategic implementation.

## Memory Systems and Learning

**Memory Architecture:**
| System | Function | Study Implication |
|--------|----------|-------------------|
| Working memory | Active processing | Limited capacity |
| Episodic memory | Personal experiences | Context-dependent |
| Semantic memory | Facts and concepts | Organized schemas |
| Procedural memory | Skills and habits | Requires practice |

**Encoding Specificity:**
- Retrieval cues must match encoding context
- Study conditions should simulate test conditions
- Variable encoding creates multiple retrieval paths
- Context-dependent memory effects

## Retrieval Practice Optimization

**Retrieval Difficulty:**
- Harder retrieval = stronger learning effect
- "Desirable difficulty" principle
- Generation effect: Producing > reading
- Error correction benefit

**Retrieval Schedule:**
| Pattern | Effect | Application |
|---------|--------|-------------|
| Immediate | Minimal | Initial learning |
| Delayed | Moderate | First review |
| Expanded | Optimal | Long-term retention |
| Varied | Robust | Multiple contexts |

**Question Format Effects:**
- Free recall > cued recall > recognition
- Application questions > factual questions
- Varied formats improve transfer
- Authentic assessment alignment

## Spacing Optimization

**Mathematical Models:**
| Model | Equation | Application |
|-------|----------|-------------|
| Power law of forgetting | R = at^(-b) | Predicting retention |
| Spacing function | ISI = RI × c | Optimal intervals |

**Individual Differences:**
- Prior knowledge affects optimal spacing
- Learning ability influences intervals
- Material difficulty matters
- Motivation affects adherence

**Spacing Algorithm Comparison:**
| Algorithm | Approach | Strength |
|-----------|----------|----------|
| SM-2 | Ease factor adjustment | Widely used |
| FSRS | Machine learning | Adaptive |
| Leitner | Box system | Simple |

## Interleaving Mechanisms

**Discrimination Hypothesis:**
- Interleaving highlights differences
- Blocked practice emphasizes similarities
- Effect depends on category structure

**Retrieval Hypothesis:**
- Interleaving requires strategy retrieval
- Blocked practice allows repeated strategy
- Effect mediated by retrieval demands

**Boundary Conditions:**
| Factor | Effect on Interleaving Benefit |
|--------|-------------------------------|
| Similarity | Higher similarity = greater benefit |
| Complexity | Too complex may overwhelm |
| Expertise | Novices may need blocked first |

## Self-Regulated Learning

**Zimmerman's Model:**
1. **Forethought:** Goal setting, strategic planning
2. **Performance:** Self-monitoring, strategy use
3. **Reflection:** Self-evaluation, attribution

**Implementation Strategies:**
| Phase | Strategy |
|-------|----------|
| Forethought | Set specific goals, plan schedule |
| Performance | Monitor comprehension, adjust |
| Reflection | Evaluate progress, modify approach |

## Metacognitive Calibration

**Calibration Problems:**
- Overconfidence: Common, dangerous
- Underconfidence: Less common, limits performance
- Dunning-Kruger effect: Low performers overestimate

**Improving Calibration:**
- Practice testing provides accurate feedback
- Delayed judgments more accurate
- Explicit prediction training
- Compare predictions to performance

## Individual Differences

**Factors Affecting Strategy Effectiveness:**
| Factor | Consideration |
|--------|---------------|
| Prior knowledge | Experts benefit differently |
| Working memory | Affects cognitive load tolerance |
| Motivation | Influences sustained effort |
| Learning preferences | May not predict effectiveness |

**Note on Learning Styles:**
- VARK and similar models lack evidence
- Matching style to instruction not supported
- Focus on evidence-based strategies
- Individual experimentation valuable

## Transfer of Learning

**Types of Transfer:**
| Type | Description | Difficulty |
|------|-------------|------------|
| Near | Similar contexts | Easier |
| Far | Different contexts | Harder |
| Low-road | Automatic | Practice-dependent |
| High-road | Mindful abstraction | Metacognition-dependent |

**Promoting Transfer:**
- Vary practice contexts
- Emphasize underlying principles
- Practice application explicitly
- Test in varied formats`,
      keyTerms: [
        { term: 'encoding specificity', definition: 'Principle that memory retrieval is enhanced when conditions match encoding' },
        { term: 'generation effect', definition: 'Better retention for information actively generated rather than passively read' },
        { term: 'calibration', definition: 'The accuracy of self-assessment in predicting actual performance' },
        { term: 'Dunning-Kruger effect', definition: 'Tendency for low performers to overestimate ability while high performers may underestimate' },
        { term: 'transfer of learning', definition: 'Application of knowledge or skills learned in one context to new situations' },
      ],
      analogies: [
        'Encoding specificity is like looking for something where you last saw it - context helps retrieval.',
        'The generation effect is like learning directions by driving versus being a passenger - active engagement creates stronger memories.',
        'Calibration is like a scale that needs regular checking - without feedback, your sense of knowledge drifts from reality.',
        'Transfer is like using a recipe principle in a new dish - understanding why makes adaptation possible.',
      ],
      examples: [
        'A student notices overconfidence in pharmacology, tests themselves, discovers gaps, and recalibrates study focus.',
        'Recognizing that spaced repetition algorithms can be adjusted, a student modifies Anki settings for optimal retention.',
      ],
      patientCounselingPoints: [
        'Understanding memory systems helps physicians retain and apply clinical knowledge effectively',
        'Self-regulated learning skills transfer to lifelong medical education and quality improvement',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level mastery of learning science integrates cognitive psychology, educational neuroscience, and practical implementation. Strategic application requires understanding mechanisms, individual adaptation, and continuous optimization of learning efficiency.',
      explanation: `## Professional Learning Science Mastery

Expert application of learning science synthesizes research across domains for optimal professional development.

## Neurobiological Foundations

**Memory Consolidation:**
| Process | Mechanism | Implication |
|---------|-----------|-------------|
| Synaptic consolidation | LTP/LTD | Hours post-encoding |
| Systems consolidation | Hippocampal-cortical | Days to months |
| Reconsolidation | Memory updating | Retrieval activates |
| Sleep consolidation | Memory replay | Sleep essential |

**Neuroplasticity:**
- Experience-dependent plasticity supports learning
- Spaced practice allows consolidation
- Stress affects plasticity (inverted U)
- Exercise enhances neurogenesis

## Computational Models

**Bayesian Learning:**
- Prior knowledge × new evidence = updated belief
- Optimal integration of information
- Uncertainty quantification
- Application: Adaptive testing

**Connectionist Models:**
- Distributed representations
- Pattern completion
- Interference and integration
- Application: Understanding forgetting

## Evidence Synthesis

**Meta-Analytic Findings:**
| Strategy | Effect Size | Confidence |
|----------|-------------|------------|
| Retrieval practice | d = 0.5-0.7 | High |
| Spaced practice | d = 0.4-0.6 | High |
| Interleaving | d = 0.3-0.5 | Moderate |
| Elaboration | d = 0.4-0.5 | Moderate |
| Summarization | d = 0.2-0.3 | Low |
| Highlighting | d = 0-0.1 | Low |

**Boundary Conditions:**
- Effects vary by content type
- Population differences exist
- Retention interval matters
- Implementation quality critical

## Learning Efficiency Optimization

**Time Allocation:**
| Activity | Relative Value |
|----------|---------------|
| Retrieval practice | High |
| Spaced review | High |
| Initial encoding | Moderate |
| Re-reading | Low |
| Passive review | Very low |

**Efficiency Equation:**
Learning = (Quality of Encoding × Retrieval Practice × Spacing) / Time

## Expert Skill Development

**Deliberate Practice:**
- Specific goals
- Immediate feedback
- Focus on weaknesses
- Progressive difficulty
- Significant effort

**10,000 Hour Debate:**
- Hours necessary but not sufficient
- Quality of practice matters
- Domain-specific requirements
- Individual differences significant

## Medical Education Integration

**Clinical Reasoning Development:**
| Strategy | Application |
|----------|-------------|
| Schema building | Case-based learning |
| Pattern recognition | Varied case exposure |
| Dual-process refinement | Reflective practice |
| Transfer | Simulation training |

**Continuing Medical Education:**
- CME should apply learning science
- Most CME formats suboptimal
- Spaced, interactive CME more effective
- Point-of-care learning integration

## Implementation Science

**Adoption Barriers:**
| Barrier | Strategy |
|---------|----------|
| Habit | Gradual transition |
| Time perception | Demonstrate efficiency |
| Difficulty discomfort | Explain desirable difficulties |
| Institutional norms | Advocate for evidence-based methods |

**Change Management:**
- Start with small modifications
- Track outcomes
- Share successes
- Build community

## Quality Assurance

**Self-Assessment Quality:**
- Regular calibration checks
- Multiple data sources
- Comparative benchmarks
- Longitudinal tracking

**Continuous Improvement:**
- Plan-Do-Study-Act cycles
- Evidence-based adjustments
- Outcome measurement
- Strategy refinement

## Future Directions

**Technology Integration:**
- Adaptive learning systems
- AI-powered tutoring
- Virtual/augmented reality
- Learning analytics

**Research Frontiers:**
- Optimal algorithm development
- Individual difference prediction
- Transfer enhancement
- Motivation integration`,
      keyTerms: [
        { term: 'long-term potentiation', definition: 'Cellular mechanism of memory involving strengthened synaptic connections' },
        { term: 'reconsolidation', definition: 'Process where retrieved memories become temporarily labile and can be modified' },
        { term: 'deliberate practice', definition: 'Purposeful practice focused on specific improvement with feedback' },
        { term: 'dual-process reasoning', definition: 'Framework distinguishing intuitive (System 1) from analytical (System 2) thinking' },
        { term: 'learning analytics', definition: 'Data-driven approach to understanding and optimizing learning' },
      ],
      clinicalNotes: `Expert perspective on effective study methods:

1. **Evidence Over Intuition:** Popular study methods often feel effective but lack evidence. Trust research over tradition - retrieval practice and spacing work; highlighting and re-reading do not.

2. **Desirable Difficulties:** Effective learning often feels harder in the moment. The struggle of retrieval and the challenge of spacing build stronger memories than easy familiarity.

3. **Individual Optimization:** While principles are universal, optimal implementation varies. Experiment systematically with spacing intervals, retrieval formats, and interleaving levels.

4. **Metacognitive Calibration:** Most learners are overconfident. Regular practice testing provides accurate feedback on actual knowledge state.

5. **Sleep Priority:** Memory consolidation requires sleep. Sacrificing sleep to study is counterproductive. Seven to eight hours is not optional.

6. **Efficiency Focus:** Time is finite. Prioritize high-value activities (retrieval practice, spaced review) over low-value activities (re-reading, highlighting).

7. **Transfer Emphasis:** Learning for application requires practice in varied contexts. Test yourself with application questions, not just recall.

8. **Lifelong Learning:** These principles apply throughout medical careers. CME, board preparation, and clinical learning all benefit from evidence-based strategies.

9. **Technology Leverage:** Spaced repetition software (Anki), question banks, and adaptive systems implement learning science principles efficiently.

10. **Professional Responsibility:** As evidence-based practitioners, physicians should apply the same rigor to their learning methods as to their clinical practice.`,
    },
  },

  media: [
    {
      id: 'learning-methods-effectiveness',
      type: 'diagram',
      filename: 'learning-methods-effectiveness.svg',
      title: 'Effectiveness of Study Methods',
      description: 'Visual comparison of study strategy effectiveness based on research',
    },
    {
      id: 'forgetting-curve-spacing',
      type: 'diagram',
      filename: 'forgetting-curve-spacing.svg',
      title: 'Forgetting Curve and Spaced Practice',
      description: 'Illustration of how spacing combats the forgetting curve',
    },
  ],

  citations: [
    {
      id: 'dunlosky-2013',
      type: 'article',
      title: 'Improving Students\' Learning With Effective Learning Techniques',
      authors: ['Dunlosky, J.', 'Rawson, K.A.', 'Marsh, E.J.', 'Nathan, M.J.', 'Willingham, D.T.'],
      source: 'Psychological Science in the Public Interest',
      accessedDate: '2025-01-28',
    },
    {
      id: 'roediger-karpicke-2006',
      type: 'article',
      title: 'The Power of Testing Memory',
      authors: ['Roediger, H.L.', 'Karpicke, J.D.'],
      source: 'Perspectives on Psychological Science',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
    { targetId: 'education-active-learning', targetType: 'concept', relationship: 'related', label: 'Active Learning' },
    { targetId: 'education-test-taking-strategies', targetType: 'concept', relationship: 'related', label: 'Test-Taking Strategies' },
    { targetId: 'education-step1-study-strategies', targetType: 'concept', relationship: 'related', label: 'Step 1 Study Strategies' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['learning science', 'study methods', 'cognitive psychology', 'educational research'],
    keywords: ['retrieval practice', 'spaced repetition', 'interleaving', 'effective studying', 'learning strategies'],
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

export default effectiveStudyMethods;
