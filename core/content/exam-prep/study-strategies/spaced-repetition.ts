/**
 * Spaced Repetition - Optimizing Long-Term Memory Retention
 *
 * Educational content covering the science and application of spaced
 * repetition for effective learning in medical education.
 */

import { EducationalContent } from '../../types';

export const spacedRepetition: EducationalContent = {
  id: 'education-spaced-repetition',
  type: 'concept',
  name: 'Spaced Repetition',
  alternateNames: ['Spaced Practice', 'Distributed Practice', 'SRS', 'Spaced Repetition System'],

  levels: {
    1: {
      level: 1,
      summary: 'Spaced repetition means reviewing things at the right times so you remember them better. Instead of studying everything at once, you spread it out over time.',
      explanation: `## What is Spaced Repetition?

Spaced repetition is a smart way to study that helps you remember things for a long time. Instead of trying to learn everything in one sitting, you review things at specific times.

## How It Works

**The Forgetting Curve:**
- When you learn something, you start forgetting it right away
- At first, you forget quickly
- Over time, you forget more slowly
- Review at the right time to stop forgetting!

**The Right Time to Review:**
1. Learn something new
2. Review it the next day
3. Review it a few days later
4. Review it a week later
5. Review it a month later
6. Each time, you remember longer!

## Why It Works

**Your brain gets stronger:**
- Each review makes the memory stronger
- Like exercising a muscle
- Eventually, you don't forget

## Using Flashcards

Flashcards are perfect for spaced repetition:
- Make a card for each fact
- Review cards at the right times
- Focus on cards you forget more often
- Skip cards you know well

## Spaced Repetition Apps

**Apps that help:**
- Anki (most popular)
- Quizlet
- Other flashcard apps

These apps:
- Track what you know
- Tell you when to review
- Make studying easier

## Tips for Success

1. Study a little bit every day
2. Don't skip your review days
3. Keep cards simple
4. Be patient - it takes time to work!`,
      keyTerms: [
        { term: 'spaced repetition', definition: 'A study method where you review things at increasing time intervals' },
        { term: 'forgetting curve', definition: 'The natural pattern of forgetting - we forget quickly at first, then more slowly' },
        { term: 'flashcard', definition: 'A card with a question on one side and the answer on the other for studying' },
      ],
      analogies: [
        'Spaced repetition is like watering a plant - regular small amounts work better than flooding it once.',
        'The forgetting curve is like a ball rolling downhill - it goes fast at first, then slows down.',
        'Each review is like putting another coat of paint on a fence - it gets stronger and lasts longer.',
      ],
      examples: [
        'A student learns a new word today, reviews it tomorrow, then again in 3 days, then in a week.',
        'Using Anki, a student studies 20 new flashcards and reviews 100 old ones that are scheduled for that day.',
      ],
      patientCounselingPoints: [
        'Medical students use spaced repetition to remember thousands of facts they need to care for patients',
        'Learning to space out studying helps people remember important health information',
      ],
    },

    2: {
      level: 2,
      summary: 'Spaced repetition is a learning technique that schedules reviews at optimal intervals to combat forgetting. Research shows it significantly improves long-term retention compared to massed practice or cramming.',
      explanation: `## Understanding Spaced Repetition

Spaced repetition is one of the most effective learning techniques backed by over a century of research.

## The Science Behind It

**Ebbinghaus Forgetting Curve (1885):**
- Memory decays exponentially over time
- Without review, most information is forgotten within days
- Well-timed reviews can reset and flatten the curve
- Each successful review increases retention duration

**Spacing Effect:**
- Distributed practice beats massed practice
- Same total study time, better results
- Effect is robust across content types and ages
- One of the most reliable findings in cognitive psychology

## How Spaced Repetition Works

**The Algorithm:**
1. **Initial learning:** New information encoded
2. **First review:** Short interval (1 day)
3. **Successful recall:** Interval increases
4. **Failed recall:** Interval resets to short
5. **Repeat:** Intervals keep expanding

**Typical Progression:**
| Review # | If Successful | Memory Strength |
|----------|---------------|-----------------|
| 1 | 1 day | Weak |
| 2 | 3 days | Moderate |
| 3 | 1 week | Good |
| 4 | 2 weeks | Strong |
| 5 | 1 month | Very strong |
| 6 | 3 months | Excellent |

## Spaced Repetition Software (SRS)

**Anki - The Gold Standard:**
- Free, open-source
- Powerful algorithm (SM-2 based)
- Customizable decks
- Huge medical community
- Cross-platform sync

**How Anki Works:**
1. Create or download flashcard decks
2. Review cards when scheduled
3. Rate your recall (Again, Hard, Good, Easy)
4. Algorithm adjusts next review date
5. Cards you know appear less often

**Other SRS Options:**
- Quizlet (simplified, social features)
- SuperMemo (original SRS)
- RemNote (notes + flashcards)
- Obsidian with SRS plugins

## Best Practices

**Creating Effective Cards:**
| Do | Don't |
|----|-------|
| One fact per card | Multiple facts per card |
| Simple, clear questions | Complex, compound questions |
| Use images when helpful | Text-only for visual content |
| Make it personal | Generic, impersonal cards |

**Daily Habits:**
- Complete all due reviews every day
- Add new cards gradually (20-50/day max)
- Review at the same time daily
- Never let reviews pile up

## Benefits and Limitations

**Advantages:**
- Highly efficient (minimal time, maximum retention)
- Evidence-based
- Personalized to your learning
- Portable (phone apps)

**Limitations:**
- Best for factual knowledge
- Requires daily commitment
- Initial setup takes time
- May feel boring/repetitive

## Medical School Applications

**Common Uses:**
- Anatomy terms and relationships
- Pharmacology (drug names, mechanisms)
- Microbiology (organisms, diseases)
- Pathology (disease characteristics)
- Biochemistry pathways`,
      keyTerms: [
        { term: 'spacing effect', definition: 'The finding that information is better remembered when study sessions are spaced apart over time' },
        { term: 'Anki', definition: 'Popular open-source spaced repetition software widely used in medical education' },
        { term: 'SM-2 algorithm', definition: 'The mathematical formula used by Anki to calculate optimal review intervals' },
        { term: 'massed practice', definition: 'Studying content all at once (cramming), which is less effective than spaced practice' },
        { term: 'review interval', definition: 'The time between study sessions for a particular piece of information' },
      ],
      analogies: [
        'Spaced repetition is like building a house - you need time between coats of paint to let each layer dry properly.',
        'The SM-2 algorithm is like a personal trainer that knows exactly when to schedule your workouts for maximum benefit.',
        'Letting reviews pile up is like missing gym sessions - the longer you wait, the harder it is to catch up.',
        'Cramming is like trying to fill a leaky bucket all at once - spaced repetition patches the holes first.',
      ],
      examples: [
        'A medical student uses an AnKing deck with 25,000 cards, reviewing 150-200 cards daily over two years to prepare for Step 1.',
        'A resident creates custom Anki cards for each interesting case they encounter, building a personal reference library.',
      ],
      patientCounselingPoints: [
        'Spaced repetition helps doctors maintain knowledge of thousands of conditions, medications, and treatments',
        'The same principle can help patients remember their medication schedules and health information',
      ],
    },

    3: {
      level: 3,
      summary: 'Spaced repetition leverages the spacing effect and retrieval practice to optimize long-term retention. Modern SRS software implements algorithms that individualize review schedules based on performance, making learning efficient and sustainable.',
      explanation: `## Spaced Repetition Science and Application

Spaced repetition combines two powerful learning principles: the spacing effect and retrieval practice, optimized through algorithmic scheduling.

## Theoretical Foundations

**Spacing Effect Mechanisms:**
| Theory | Explanation |
|--------|-------------|
| Encoding variability | Different contexts create richer memory |
| Study-phase retrieval | Spacing forces memory retrieval |
| Deficient processing | Massed practice reduces attention |
| Consolidation | Time allows memory consolidation |

**Retrieval Practice Integration:**
- Spaced repetition = spacing + testing
- Each review is a retrieval attempt
- Successful retrieval strengthens memory
- Failed retrieval identifies knowledge gaps

## Algorithm Design

**SM-2 Algorithm (Anki):**
\`\`\`
EF' = EF + (0.1 - (5 - q) × (0.08 + (5 - q) × 0.02))
\`\`\`
Where:
- EF = Ease Factor (difficulty rating)
- q = quality of response (0-5)
- EF' = new ease factor

**Interval Calculation:**
- First interval: 1 day
- Second interval: 6 days
- Subsequent: Previous interval × EF
- EF typically starts at 2.5

**Algorithm Comparison:**
| Algorithm | Approach | Strength |
|-----------|----------|----------|
| SM-2 | Fixed formula | Simple, proven |
| SM-17/18 | Complex modeling | Theoretically optimal |
| FSRS | Machine learning | Adaptive |
| Leitner | Box system | Intuitive |

## Optimal Implementation

**Card Quality Principles:**
1. **Minimum information principle:** One atomic fact per card
2. **Use cloze deletions:** "[...] is the powerhouse of the cell"
3. **Add context:** Include clinical relevance
4. **Include images:** Visual memory is strong
5. **Avoid orphans:** Cards should connect to broader knowledge

**Deck Organization:**
| Strategy | Description |
|----------|-------------|
| By system | Cardiology, Pulmonology, etc. |
| By resource | First Aid, Pathoma, etc. |
| Unified deck | All cards together |

**Common Approaches:**
- AnKing: Comprehensive, pre-made, regularly updated
- Personal deck: Custom cards from studying
- Hybrid: Pre-made base + personal additions

## Efficiency Optimization

**Daily Review Management:**
- Target: 150-300 reviews/day sustainable
- New cards: 20-50/day during learning
- Review time: 0.5-1 minute average per card
- Total time: 1-2 hours/day typical

**Preventing Burnout:**
| Problem | Solution |
|---------|----------|
| Too many reviews | Reduce new cards, use filtered decks |
| Boring cards | Add images, improve formatting |
| Low retention | Adjust ease, remake poor cards |
| Time pressure | Review at consistent times |

## Medical Education Applications

**Pre-Clinical Integration:**
| Year | Focus |
|------|-------|
| M1 | Anatomy, biochemistry, physiology |
| M2 | Pathology, pharmacology, microbiology |
| Dedicated | Board-relevant content |

**Clinical Year Adaptation:**
- Create cards from patient encounters
- Focus on management and diagnosis
- Reduce total load, maintain reviews
- Use shelf exam decks

## Effectiveness Research

**Evidence in Medical Education:**
- Medical students using SRS score higher on exams
- Long-term retention significantly improved
- Effect size comparable to other high-yield strategies
- Student satisfaction variable

**Limitations:**
| Limitation | Mitigation |
|------------|------------|
| Facts over concepts | Combine with active learning |
| Maintenance burden | Realistic daily targets |
| Passive card reading | Ensure active recall |
| Isolation from context | Include clinical connections |

## Advanced Techniques

**Filtered Decks:**
- Create custom study sessions
- Target weak areas
- Review specific tags
- Pre-exam focused review

**Add-ons and Customization:**
- Image occlusion for anatomy
- Heat maps for visual progress
- Load balancer for smooth workload
- Retention statistics analysis`,
      keyTerms: [
        { term: 'ease factor', definition: 'A multiplier in spaced repetition algorithms that determines how quickly intervals increase based on card difficulty' },
        { term: 'cloze deletion', definition: 'A card type where a word or phrase is replaced with a blank, testing recall of that specific information' },
        { term: 'minimum information principle', definition: 'The guideline that flashcards should test one simple fact rather than complex concepts' },
        { term: 'filtered deck', definition: 'A custom deck in Anki that pulls cards matching specific criteria for focused study' },
        { term: 'atomic fact', definition: 'A single, indivisible piece of information that forms the basis of an effective flashcard' },
      ],
      analogies: [
        'The ease factor is like a thermostat - it automatically adjusts based on how well you\'re doing to maintain optimal learning temperature.',
        'Cloze deletions are like fill-in-the-blank tests - they force you to actively recall specific information.',
        'A filtered deck is like a playlist created from your music library - same songs, different organization for specific purposes.',
        'The minimum information principle is like breaking a wall into individual bricks - easier to handle and place precisely.',
      ],
      examples: [
        'A student adjusts their ease factor from 2.5 to 2.3 after noticing too many mature cards becoming leeches (poorly remembered).',
        'Before a cardiology shelf exam, a student creates a filtered deck of all cards tagged #cardiology for intensive review.',
      ],
      patientCounselingPoints: [
        'Spaced repetition helps physicians maintain comprehensive medical knowledge efficiently',
        'The same principles can be applied to patient education for important self-care information',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced spaced repetition mastery requires understanding algorithm mechanics, optimizing card design, and integrating SRS within a broader learning strategy. Expert users customize parameters, analyze retention data, and balance efficiency with deep learning.',
      explanation: `## Advanced Spaced Repetition Mastery

Expert application of spaced repetition requires understanding the underlying mathematics, optimization strategies, and integration within comprehensive learning systems.

## Algorithm Deep Dive

**SM-2 Mathematics:**
Interval calculation:
- I(1) = 1
- I(2) = 6
- I(n > 2) = I(n-1) × EF

Ease factor adjustment:
- EF' = EF + (0.1 - (5 - q) × (0.08 + (5 - q) × 0.02))
- Minimum EF = 1.3
- q = response quality (0-5 in original, 1-4 in Anki)

**Modern Algorithms (FSRS):**
- Free Spaced Repetition Scheduler
- Machine learning based
- Accounts for individual learning patterns
- Better prediction than SM-2 in studies

**Parameter Optimization:**
| Parameter | Default | Optimization |
|-----------|---------|--------------|
| Starting ease | 250% | Lower if struggling |
| Interval modifier | 100% | Adjust for target retention |
| New cards/day | 20 | Based on available time |
| Max interval | 36500 | Consider shortening for boards |

## Retention Rate Analysis

**Target Retention:**
| Retention Rate | Efficiency | Recommendation |
|---------------|------------|----------------|
| 95%+ | Low (too much review) | Increase intervals |
| 90% | Optimal | Target range |
| 85% | Acceptable | Standard for many users |
| <80% | Inefficient (too much relearning) | Decrease intervals |

**Monitoring Tools:**
- Add-on: True Retention
- Built-in statistics
- Heat maps
- Review heatmaps

## Card Design Optimization

**High-Yield Card Types:**
| Type | Use Case | Example |
|------|----------|---------|
| Basic | Simple facts | "ACE inhibitors end in -pril" |
| Cloze | Fill-in-blank | "The {{c1::pancreas}} produces insulin" |
| Image occlusion | Anatomy, histology | Labeled diagram with hidden labels |
| Basic reversed | Bidirectional recall | Drug → mechanism AND mechanism → drug |

**Card Quality Checklist:**
1. Single retrievable fact?
2. Clear, unambiguous question?
3. Context provided?
4. Personal connection/clinical relevance?
5. Visual aid if beneficial?

**Leech Management:**
- Leeches: Cards failed many times
- Identify cause (poor card design, difficult concept)
- Rewrite or delete
- Break into simpler cards
- Add context or mnemonics

## Workflow Integration

**During Content Learning:**
1. Learn concept from primary resource
2. Create or unsuspend related cards
3. Initial review cements encoding
4. Space repetition maintains

**Pre-made Deck Strategy:**
| Approach | Pros | Cons |
|----------|------|------|
| Unsuspend as learning | Aligned with curriculum | Requires discipline |
| Unsuspend all | Quick start | Overwhelming initially |
| Delete unused | Focused | May miss content |

## Time Efficiency Analysis

**Review Time Breakdown:**
- Average mature card: 8-10 seconds
- Average young card: 15-20 seconds
- New card learning: 30-60 seconds
- Estimated: 150 cards/hour

**Optimization Strategies:**
| Strategy | Time Saved | Trade-off |
|----------|------------|-----------|
| Remove redundant cards | High | Content coverage |
| Set max interval | Moderate | Long-term retention |
| Lower daily new cards | High | Content acquisition speed |
| Bury siblings | Low | Review spread |

## Integration with Active Learning

**SRS is Necessary but Insufficient:**
- SRS for retention
- Active learning for understanding
- Problem-solving for application
- Clinical experience for integration

**Complementary Activities:**
| Activity | Purpose |
|----------|---------|
| Question banks | Application, reasoning |
| Concept mapping | Relationships |
| Teaching | Deep processing |
| Clinical cases | Transfer |

## Common Pitfalls

**Card Hoarding:**
- Creating too many cards
- Unsustainable review burden
- Solution: Quality over quantity

**Passive Review:**
- Reading cards without active recall
- Rating "Good" when unsure
- Solution: Honest self-assessment

**Neglecting Understanding:**
- Memorizing without comprehension
- Pattern matching without meaning
- Solution: Ensure conceptual learning first

**Inconsistency:**
- Skipping days creates review mountains
- Solution: Daily habit, reduced new cards if needed

## Data-Driven Optimization

**Metrics to Track:**
- Retention rate by card type
- Review time trends
- Leech accumulation
- True retention vs. apparent retention

**Adjustment Triggers:**
| Observation | Action |
|-------------|--------|
| Retention < 85% | Lower starting ease, improve cards |
| Reviews > 2 hours | Reduce new cards, optimize deck |
| Many leeches | Review card quality, study concepts |
| Plateau in performance | Reassess learning strategy |`,
      keyTerms: [
        { term: 'FSRS', definition: 'Free Spaced Repetition Scheduler - a modern machine learning based algorithm for optimizing review intervals' },
        { term: 'interval modifier', definition: 'A multiplier applied to calculated intervals to globally adjust review frequency' },
        { term: 'leech', definition: 'A card that has been failed many times, indicating a problem with the card or concept' },
        { term: 'true retention', definition: 'The actual percentage of cards answered correctly, accounting for multiple reviews' },
        { term: 'bury siblings', definition: 'Anki setting to postpone related cards after reviewing one to prevent interference' },
      ],
      analogies: [
        'FSRS is like a personalized GPS that learns your driving patterns rather than using generic directions.',
        'Leeches are like weeds in a garden - they drain resources and need to be addressed or removed.',
        'Interval modifier is like a global thermostat - it adjusts the entire system without changing individual settings.',
        'True retention versus apparent retention is like actual weight versus what you tell yourself - honest measurement drives improvement.',
      ],
      examples: [
        'A student notices 15% leech rate, reviews the cards, finds many have multiple facts, and rewrites them as atomic cards.',
        'After achieving 95% retention with 3 hours daily reviews, a student increases interval modifier to 120% to reduce workload while maintaining 90% retention.',
      ],
      patientCounselingPoints: [
        'Understanding learning optimization helps physicians efficiently maintain comprehensive medical knowledge',
        'Data-driven learning approaches reflect evidence-based medicine principles',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of spaced repetition integrates cognitive science, algorithm optimization, and learning system design. Expert practitioners customize implementations for specific domains, analyze performance data, and contribute to the evolving science of optimal learning.',
      explanation: `## Professional Spaced Repetition Framework

Expert-level spaced repetition practice synthesizes cognitive science, educational technology, and continuous improvement principles.

## Cognitive Science Foundations

**Memory Consolidation:**
| Phase | Process | SRS Implication |
|-------|---------|-----------------|
| Encoding | Initial learning | Quality matters |
| Consolidation | Stabilization | Sleep essential |
| Reconsolidation | Update on retrieval | Active recall strengthens |
| Retrieval | Access and use | Each review modifies |

**Optimal Spacing Research:**
- Cepeda et al. (2006): Optimal ISI = 10-20% of RI
- RI = retention interval (how long you need to remember)
- ISI = inter-study interval (time between reviews)
- ISI/RI ratio guides algorithm design

**Computational Models:**
| Model | Approach |
|-------|----------|
| ACT-R | Activation-based memory |
| MCM | Multiple-component model |
| HLR | Half-life regression |
| DSR | Decay-strength-retrieval |

## Algorithm Engineering

**SM-17/18 Concepts:**
- Stability: How resistant to forgetting
- Difficulty: Inherent concept complexity
- Retrievability: Current recall probability
- Three-dimensional memory model

**FSRS Implementation:**
- Neural network trained on millions of reviews
- Predicts optimal review time
- Adapts to individual learning patterns
- Open-source, actively developed

**Algorithm Comparison Research:**
| Algorithm | MAE | Efficiency |
|-----------|-----|------------|
| SM-2 | Higher | Good |
| SM-17 | Lower | Better |
| FSRS | Lowest | Best |

## System Design Principles

**Knowledge Base Architecture:**
| Level | Content |
|-------|---------|
| Atomic | Individual facts |
| Molecular | Fact relationships |
| Conceptual | Understanding |
| Applied | Clinical reasoning |

**Card Hierarchy:**
\`\`\`
Domain (Cardiology)
├── Topic (Heart Failure)
│ ├── Pathophysiology
│ ├── Diagnosis
│ ├── Treatment
│ └── Complications
└── Topic (Arrhythmias)
\`\`\`

## Performance Analytics

**Metrics Framework:**
| Metric | Formula | Target |
|--------|---------|--------|
| Retention rate | Correct / Total reviews | 85-90% |
| Workload | Reviews / day | Sustainable |
| Efficiency | Learning / Time | Maximized |
| Coverage | Cards learned / Total | Complete |

**Statistical Analysis:**
- Survival analysis for card lifespan
- Bayesian updating for predictions
- Time-series for trend detection
- Cohort analysis for card types

## Domain-Specific Optimization

**Medical Education:**
| Content Type | Card Strategy |
|--------------|---------------|
| Anatomy | Image occlusion, spatial relationships |
| Pharmacology | Drug tables, mechanisms |
| Microbiology | Organism profiles |
| Pathology | Disease cards with clinical features |

**Clinical Integration:**
- Point-of-care card creation
- Case-based card generation
- Differential diagnosis drilling
- Management algorithm cards

## Long-Term Sustainability

**Maintenance Strategies:**
| Challenge | Solution |
|-----------|----------|
| Card accumulation | Regular pruning |
| Outdated content | Systematic review |
| Changing knowledge | Update cycles |
| Motivation decline | Gamification, social |

**Career-Long Learning:**
- Board recertification integration
- Specialty knowledge maintenance
- New research integration
- Personal reference library

## Research and Development

**Contribution Opportunities:**
- Algorithm improvement research
- Deck development and validation
- Integration tool development
- Effectiveness studies

**Future Directions:**
| Area | Development |
|------|-------------|
| AI integration | Automated card generation |
| Adaptive content | Personalized difficulty |
| VR/AR | Immersive learning |
| Biometrics | Attention/fatigue detection |

## Implementation Leadership

**Team/Program Integration:**
- Curriculum alignment
- Shared deck development
- Quality assurance processes
- Outcome measurement

**Best Practice Documentation:**
- Card creation standards
- Review protocols
- Performance benchmarks
- Remediation pathways`,
      keyTerms: [
        { term: 'memory stability', definition: 'A measure of how resistant a memory is to forgetting, independent of current retrievability' },
        { term: 'retrievability', definition: 'The current probability of successfully recalling a piece of information' },
        { term: 'inter-study interval', definition: 'The time between study sessions, optimized in spaced repetition systems' },
        { term: 'retention interval', definition: 'The desired duration for which information should be retained' },
        { term: 'half-life regression', definition: 'A computational model predicting memory decay based on accumulated review history' },
      ],
      clinicalNotes: `Expert perspective on spaced repetition:

1. **Foundation, Not Framework:** SRS is highly effective for fact retention but insufficient for clinical reasoning. Use it as one component of comprehensive learning.

2. **Algorithm Selection:** Modern algorithms (FSRS) outperform SM-2 in studies. Consider upgrading if available and willing to adjust workflow.

3. **Card Quality Over Quantity:** One well-designed card is worth ten poor ones. Invest time in card creation and curation.

4. **Retention Calibration:** 90% retention is typically optimal. Higher retention wastes time on unnecessary reviews; lower retention requires excessive relearning.

5. **Daily Consistency:** The power of spaced repetition comes from consistent daily use. Missing days creates review mountains that undermine the system.

6. **Integration with Understanding:** Never create cards for content you don't understand. SRS maintains knowledge; active learning creates it.

7. **Leech Management:** Persistent leeches indicate card or concept problems. Address them rather than brute-forcing with more reviews.

8. **Sustainable Load:** Determine your sustainable daily review capacity and work backward to new card rate. Burnout undermines the entire system.

9. **Data Utilization:** Use retention statistics to optimize parameters. Personal data beats generic recommendations.

10. **Evolution:** Spaced repetition science is advancing. Stay current with algorithm developments and research findings to optimize your practice.`,
    },
  },

  media: [
    {
      id: 'forgetting-curve-diagram',
      type: 'diagram',
      filename: 'forgetting-curve-diagram.svg',
      title: 'The Forgetting Curve',
      description: 'Ebbinghaus forgetting curve showing memory decay over time',
    },
    {
      id: 'spaced-repetition-intervals',
      type: 'diagram',
      filename: 'spaced-repetition-intervals.svg',
      title: 'Spaced Repetition Intervals',
      description: 'How review intervals expand with successful recall',
    },
  ],

  citations: [
    {
      id: 'ebbinghaus-1885',
      type: 'article',
      title: 'Memory: A Contribution to Experimental Psychology',
      authors: ['Ebbinghaus, H.'],
      source: 'Teachers College, Columbia University (1913 translation)',
      accessedDate: '2025-01-28',
    },
    {
      id: 'cepeda-2006',
      type: 'article',
      title: 'Distributed Practice in Verbal Recall Tasks',
      authors: ['Cepeda, N.J.', 'Pashler, H.', 'Vul, E.', 'Wixted, J.T.', 'Rohrer, D.'],
      source: 'Psychological Bulletin',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'parent', label: 'Effective Study Methods' },
    { targetId: 'education-active-learning', targetType: 'concept', relationship: 'related', label: 'Active Learning' },
    { targetId: 'education-step1-study-strategies', targetType: 'concept', relationship: 'related', label: 'Step 1 Study Strategies' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['spaced repetition', 'memory', 'learning science', 'study techniques', 'Anki'],
    keywords: ['SRS', 'Anki', 'flashcards', 'forgetting curve', 'distributed practice', 'memory retention'],
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

export default spacedRepetition;
