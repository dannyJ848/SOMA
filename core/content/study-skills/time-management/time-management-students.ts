/**
 * Time Management for Students - Organizing Study Time Effectively
 *
 * Educational content covering time management principles, techniques,
 * and applications for medical students.
 */

import { EducationalContent } from '../../types';

export const timeManagementStudents: EducationalContent = {
  id: 'education-time-management-students',
  type: 'concept',
  name: 'Time Management for Students',
  alternateNames: ['Study Time Management', 'Academic Time Management', 'Student Productivity'],

  levels: {
    1: {
      level: 1,
      summary: 'Time management means planning when to study, rest, and do other activities. Good time management helps you get more done without feeling stressed.',
      explanation: `## What is Time Management?

Time management is planning how to use your time wisely. Everyone has the same 24 hours each day - but how you use them makes a big difference!

## Why Time Management Matters

Good time management helps you:
- Finish homework on time
- Have time for fun activities
- Feel less stressed
- Sleep enough
- Do better in school

## Basic Time Management Tips

**1. Make a Schedule**
- Write down what you need to do
- Plan when you will do each thing
- Include breaks and fun time

**2. Prioritize Tasks**
- Do important things first
- Know what has to be done today
- Some things can wait

**3. Avoid Procrastination**
- Start tasks early
- Don't wait until the last minute
- Break big tasks into smaller pieces

**4. Set Goals**
- Know what you want to accomplish
- Make goals specific
- Celebrate when you reach them

## Tools to Help

**Simple Tools:**
- Calendar or planner
- To-do lists
- Timer for study sessions
- Reminders on your phone

## Balancing Activities

**Important to Include:**
- Study time
- Sleep (8-10 hours)
- Exercise
- Family and friends
- Hobbies and fun

## The Pomodoro Technique

A simple study method:
1. Study for 25 minutes
2. Take a 5-minute break
3. Repeat 4 times
4. Take a longer break (15-30 minutes)

## Remember

- It's okay to take breaks
- Everyone needs time to rest
- Planning ahead prevents last-minute stress
- You can improve with practice!`,
      keyTerms: [
        { term: 'time management', definition: 'Planning and organizing how you spend your time' },
        { term: 'prioritize', definition: 'Deciding which tasks are most important and should be done first' },
        { term: 'Pomodoro technique', definition: 'A study method using 25-minute work periods with short breaks' },
      ],
      analogies: [
        'Time is like money in a piggy bank - you have a limited amount, so spend it wisely.',
        'A schedule is like a map - it shows you where to go and keeps you from getting lost.',
        'Procrastination is like a snowball - the longer you wait, the bigger the problem gets.',
      ],
      examples: [
        'A student writes all their homework in a planner and checks off each task when done.',
        'Using the Pomodoro technique, a student studies math for 25 minutes, then takes a 5-minute break to stretch.',
      ],
      patientCounselingPoints: [
        'Time management skills help medical students handle the large amount of material they need to learn',
        'Good time management reduces stress and supports mental health',
      ],
    },

    2: {
      level: 2,
      summary: 'Effective time management involves goal setting, prioritization, scheduling, and consistent routines. Research shows that students who manage time well have better academic performance and lower stress levels.',
      explanation: `## Time Management Fundamentals

Time management is the process of planning and controlling how much time to spend on specific activities to increase effectiveness and productivity.

## Key Principles

**1. Goal Setting**
- Define clear objectives
- Short-term and long-term goals
- SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound

**2. Prioritization**
| Priority | Characteristics |
|----------|-----------------|
| High | Urgent and important |
| Medium | Important, not urgent |
| Low | Not important, can wait |

**3. Planning**
- Weekly planning sessions
- Daily task lists
- Flexible buffer time
- Regular review

## Time Management Techniques

**The Eisenhower Matrix:**
|  | Urgent | Not Urgent |
|---|--------|------------|
| Important | Do first | Schedule |
| Not Important | Delegate | Eliminate |

**Time Blocking:**
- Schedule specific blocks for tasks
- Protect study time
- Group similar activities
- Include breaks

**Pomodoro Technique:**
- 25-minute focused work
- 5-minute short break
- 15-30 minute long break after 4 cycles
- Reduces mental fatigue

**Eat the Frog:**
- Do the hardest task first
- When energy is highest
- Everything else feels easier

## Common Time Wasters

| Time Waster | Solution |
|-------------|----------|
| Social media | Set time limits, use blockers |
| Multitasking | Focus on one task |
| Poor planning | Plan day/week ahead |
| Perfectionism | Set "good enough" standards |
| Disorganization | Use systems and tools |

## Tools and Systems

**Digital Tools:**
- Calendar apps (Google Calendar, Outlook)
- Task managers (Todoist, Things)
- Pomodoro timers
- Website blockers

**Analog Tools:**
- Paper planner
- Bullet journal
- Wall calendar
- Sticky notes

## Building Routines

**Morning Routine:**
- Consistent wake time
- Review day's tasks
- Start with important work

**Evening Routine:**
- Plan tomorrow
- Review accomplishments
- Prepare materials
- Wind down for sleep

## Academic Applications

**Semester Planning:**
- Map major deadlines
- Space out studying
- Schedule review sessions
- Build in buffer time

**Weekly Planning:**
| Day | Focus |
|-----|-------|
| Sunday | Plan week, light study |
| Mon-Fri | Classes, focused study |
| Saturday | Review, catch-up, rest |

**Study Session Planning:**
- Specific goals for each session
- Right environment
- Materials ready
- Limited duration (focus)

## Balance and Self-Care

**Essential Elements:**
- Sleep: 7-8 hours
- Exercise: 30 minutes daily
- Social time: Connect with others
- Downtime: Rest and recovery`,
      keyTerms: [
        { term: 'SMART goals', definition: 'Goals that are Specific, Measurable, Achievable, Relevant, and Time-bound' },
        { term: 'Eisenhower Matrix', definition: 'A prioritization framework using urgency and importance to categorize tasks' },
        { term: 'time blocking', definition: 'Scheduling specific blocks of time for particular tasks or activities' },
        { term: 'Eat the Frog', definition: 'Doing the most challenging task first thing in the day' },
      ],
      analogies: [
        'The Eisenhower Matrix is like a triage system - dealing with urgency while not forgetting importance.',
        'Time blocking is like making reservations - protecting time for what matters.',
        'Building routines is like creating rails for a train - they keep you on track automatically.',
        'Eating the frog is like exercising first thing - once it\'s done, everything else is easier.',
      ],
      examples: [
        'A student uses the Eisenhower Matrix and realizes studying for next week\'s exam is important but not urgent, so they schedule specific study blocks.',
        'Using time blocking, a student dedicates 9-11 AM daily to their hardest subject when their energy is highest.',
      ],
      patientCounselingPoints: [
        'Time management skills are essential for the demanding schedules of medical education',
        'Balanced time management includes adequate rest and self-care',
      ],
    },

    3: {
      level: 3,
      summary: 'Evidence-based time management integrates goal theory, self-regulation, and productivity research. Effective implementation requires understanding personal chronotype, managing cognitive resources, and building sustainable systems aligned with individual needs.',
      explanation: `## Evidence-Based Time Management

Research in educational psychology and organizational behavior provides foundation for effective time management strategies.

## Theoretical Foundations

**Self-Regulation Theory:**
- Goal setting
- Self-monitoring
- Self-evaluation
- Self-reaction

**Implementation Intentions:**
- "If-then" planning
- When, where, how specificity
- Increases follow-through
- Reduces decision fatigue

**Ego Depletion:**
- Self-control as limited resource
- Depletes with use
- Recovery through rest
- Strategic deployment

## Chronotype Optimization

**Understanding Chronotype:**
| Type | Peak Performance | Characteristics |
|------|------------------|-----------------|
| Morning (Lark) | 9 AM - 12 PM | Early riser, alert in AM |
| Intermediate | 10 AM - 2 PM | Flexible adaptation |
| Evening (Owl) | 4 PM - 10 PM | Late riser, night productive |

**Scheduling Implications:**
- High-demand tasks during peak
- Administrative tasks during troughs
- Sleep aligned with chronotype
- Social/physical in between

## Cognitive Resource Management

**Attention Management:**
| Strategy | Application |
|----------|-------------|
| Deep work blocks | Complex cognitive tasks |
| Shallow work batching | Administrative, routine |
| Context switching minimization | Group similar tasks |
| Strategic breaks | Recovery, consolidation |

**Decision Fatigue:**
- Finite daily decisions
- Quality decreases with quantity
- Routinize recurring decisions
- Important decisions early

## Advanced Planning Systems

**Getting Things Done (GTD):**
1. Capture: Collect all tasks
2. Clarify: Process into actions
3. Organize: Categorize by context
4. Reflect: Weekly review
5. Engage: Do based on context

**Time Boxing:**
- Set fixed time limits
- Work expands to fill available time (Parkinson's Law)
- Creates deadline pressure
- Prevents perfectionism

**Weekly Review Process:**
| Step | Activity |
|------|----------|
| Clear | Process inbox |
| Review | Check calendars, lists |
| Plan | Schedule next week |
| Reflect | What worked, what didn't |

## Academic Application

**Semester Planning:**
| Phase | Activity |
|-------|----------|
| Start | Map major deadlines |
| Weekly | Adjust based on progress |
| Pre-exam | Intensify, protect time |
| Post-exam | Recovery, review |

**Study Time Allocation:**
- Difficult subjects when fresh
- Review/consolidation during troughs
- Active learning over passive
- Spaced across days

## Productivity Barriers

**Procrastination:**
| Type | Cause | Solution |
|------|-------|----------|
| Avoidance | Task aversion | Break into steps |
| Perfectionism | Fear of failure | Set "good enough" |
| Overwhelm | Too much | Prioritize, reduce |
| Distraction | Environment | Remove triggers |

**Technology Management:**
- Notification control
- App time limits
- Website blockers during work
- Designated check times

## Sustainability

**Avoiding Burnout:**
- Sustainable pace vs. sprints
- Recovery time scheduled
- Boundaries protected
- Balance maintained

**Stress Management Integration:**
- Buffer time for unexpected
- Realistic planning
- Self-compassion when off-track
- Flexibility within structure

## Assessment and Improvement

**Tracking Methods:**
- Time logs
- Task completion rates
- Goal achievement
- Subjective well-being

**Iterative Improvement:**
1. Track current behavior
2. Identify patterns
3. Test modifications
4. Evaluate results
5. Refine system`,
      keyTerms: [
        { term: 'chronotype', definition: 'Individual variation in sleep-wake timing and peak alertness periods' },
        { term: 'implementation intention', definition: 'A specific if-then plan linking situational cues to intended actions' },
        { term: 'ego depletion', definition: 'The idea that self-control draws from a limited pool of mental resources' },
        { term: 'Getting Things Done (GTD)', definition: 'A productivity methodology focusing on capturing and organizing all commitments' },
        { term: 'Parkinson\'s Law', definition: 'The observation that work expands to fill the time available for completion' },
      ],
      analogies: [
        'Chronotype is like being a different species of bird - larks and owls have different optimal times.',
        'Ego depletion is like a phone battery - it runs down with use and needs recharging.',
        'GTD is like a trusted personal assistant - captures everything so your mind is free.',
        'Time boxing is like putting work in a container - it can only fill the space you give it.',
      ],
      examples: [
        'Recognizing they\'re a morning person, a student schedules organic chemistry review for 8-10 AM and saves email for after lunch.',
        'Using implementation intentions, a student plans: "If I feel the urge to check social media during study, I will write down what I was thinking about instead."',
      ],
      patientCounselingPoints: [
        'Understanding personal chronotype helps optimize learning and performance',
        'Sustainable time management prevents burnout in demanding fields like medicine',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level time management integrates organizational psychology, behavioral economics, and self-regulation research. Expert practitioners design personalized systems, leverage technology strategically, and continuously optimize through data-driven iteration.',
      explanation: `## Advanced Time Management Framework

Expert time management requires integration of behavioral science, systems design, and continuous improvement methodology.

## Behavioral Economics Applications

**Temporal Discounting:**
- Future rewards undervalued
- Immediate gratification bias
- Commitment devices help
- Pre-commitment strategies

**Choice Architecture:**
- Environment design influences behavior
- Default settings matter
- Friction for unwanted behaviors
- Ease for desired behaviors

**Loss Aversion:**
- Losses hurt more than gains help
- Frame goals as avoiding loss
- Accountability partnerships
- Stakes and consequences

## Self-Regulation Science

**Process Model of Self-Regulation:**
| Phase | Function |
|-------|----------|
| Goal setting | Define desired state |
| Monitoring | Track progress |
| Operating | Execute strategies |
| Testing | Compare to goal |

**Self-Concordance:**
- Goals aligned with values
- Intrinsic motivation
- Sustainable effort
- Greater well-being

## Cognitive Load Optimization

**Attention Capital:**
| Resource | Management |
|----------|------------|
| Focus hours | Protect, deploy strategically |
| Decision energy | Routinize, batch |
| Willpower | Morning deployment |
| Creative capacity | Match to task demands |

**Context Management:**
- Physical environment design
- Digital environment curation
- Social context optimization
- Temporal context awareness

## System Design Principles

**Complexity-Reliability Tradeoff:**
| Approach | Complexity | Reliability | Best For |
|----------|------------|-------------|----------|
| Simple lists | Low | High | Routine tasks |
| Time blocking | Moderate | Moderate | Structured work |
| Full GTD | High | Variable | Complex responsibilities |

**System Requirements:**
1. Capture all commitments
2. Clarify next actions
3. Organize by context
4. Regular review process
5. Flexible execution

## Technology Stack

**Integrated System Example:**
| Function | Tool |
|----------|------|
| Calendar | Google Calendar |
| Tasks | Todoist |
| Notes | Notion |
| Focus | Forest app |
| Tracking | RescueTime |

**Automation Opportunities:**
- Recurring task templates
- Calendar blocking automation
- Reminder systems
- Integration between tools

## Medical Student Application

**Clinical Year Challenges:**
| Challenge | Strategy |
|-----------|----------|
| Irregular schedule | Flexible time blocks |
| Call nights | Recovery scheduling |
| Multiple sites | Travel planning |
| Patient load | Prioritization systems |

**Rotation-Specific Planning:**
- Anticipate rotation demands
- Pre-rotation preparation
- Weekly adjustment
- End-of-rotation review

## Performance Analytics

**Metrics to Track:**
| Metric | Insight |
|--------|---------|
| Tasks completed | Productivity |
| Deep work hours | Quality work |
| Goal achievement | Effectiveness |
| Stress level | Sustainability |

**Review Cadences:**
| Frequency | Focus |
|-----------|-------|
| Daily | Task execution |
| Weekly | Progress, adjustment |
| Monthly | System evaluation |
| Quarterly | Goal assessment |

## Advanced Strategies

**Energy Management:**
- Ultradian rhythms (90-120 min cycles)
- Strategic break timing
- Physical energy maintenance
- Emotional energy protection

**Deliberate Rest:**
| Type | Function |
|------|----------|
| Active rest | Mental recovery |
| Social rest | Connection, support |
| Creative rest | Inspiration, renewal |
| Physical rest | Body recovery |

## Continuous Improvement

**Kaizen Application:**
- Small continuous improvements
- System refinement
- Failure analysis
- Success replication

**Experimentation:**
1. Identify optimization opportunity
2. Design experiment
3. Implement change
4. Measure results
5. Adopt or abandon`,
      keyTerms: [
        { term: 'temporal discounting', definition: 'The tendency to prefer smaller immediate rewards over larger delayed rewards' },
        { term: 'choice architecture', definition: 'Designing environments to influence decisions toward desired outcomes' },
        { term: 'self-concordance', definition: 'The degree to which goals align with personal values and authentic interests' },
        { term: 'ultradian rhythms', definition: 'Biological cycles shorter than 24 hours, including alertness fluctuations' },
        { term: 'kaizen', definition: 'Japanese philosophy of continuous improvement through small incremental changes' },
      ],
      analogies: [
        'Temporal discounting is like preferring a cookie now over a cake later - immediate wins even if smaller.',
        'Choice architecture is like designing a cafeteria - what\'s visible and accessible gets chosen.',
        'Ultradian rhythms are like waves - you perform better riding them than fighting them.',
        'Kaizen is like compound interest - small improvements accumulate to large gains.',
      ],
      examples: [
        'A student uses commitment devices by giving their phone to a friend during study blocks with the agreement to pay $5 if they ask for it back early.',
        'Tracking RescueTime data, a student discovers they lose 2 hours daily to social media and implements automatic blocking during study periods.',
      ],
      patientCounselingPoints: [
        'Understanding behavioral economics helps overcome procrastination and self-control challenges',
        'Data-driven time management enables continuous improvement in demanding fields',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional time management mastery integrates behavioral science, systems thinking, and organizational psychology. Expert practitioners design personalized productivity systems, leverage technology for optimization, and maintain sustainable high performance through evidence-based practices.',
      explanation: `## Professional Time Management Framework

Expert-level time management synthesizes research across domains for optimal performance and well-being.

## Behavioral Science Integration

**Dual-Process Theory Application:**
| System | Characteristics | Management |
|--------|-----------------|------------|
| System 1 | Fast, automatic | Habit formation |
| System 2 | Slow, effortful | Strategic tasks |

**Nudge Theory:**
- Choice architecture design
- Default optimization
- Salience manipulation
- Feedback mechanisms

**Identity-Based Change:**
- "I am a productive person" vs. "I want to be productive"
- Behavior follows identity
- Small wins reinforce identity
- Community reinforcement

## Organizational Psychology

**Flow State Optimization:**
| Condition | Strategy |
|-----------|----------|
| Clear goals | Define session objectives |
| Immediate feedback | Progress visibility |
| Challenge-skill balance | Appropriate difficulty |
| Concentration | Distraction elimination |

**Psychological Detachment:**
- Complete recovery requires mental disengagement
- Boundaries between work and rest
- Rumination prevention
- Restoration activities

## Systems Thinking

**Personal Operating System:**
| Component | Function |
|-----------|----------|
| Vision/values | Direction |
| Goals | Targets |
| Habits | Daily execution |
| Systems | Supporting structures |
| Reviews | Course correction |

**Feedback Loops:**
- Track leading indicators
- Regular system assessment
- Rapid iteration
- Evidence-based adjustment

## High-Performance Routines

**Morning Protocol:**
| Phase | Duration | Purpose |
|-------|----------|---------|
| Wake | Fixed time | Circadian alignment |
| Physical | 15-30 min | Energy, alertness |
| Mental | 10-15 min | Focus, intention |
| Planning | 10-15 min | Day structure |

**Deep Work Protocol:**
1. Environment preparation
2. Clear session goal
3. Distraction elimination
4. Focus block (90-120 min)
5. Complete break
6. Next session

## Decision Architecture

**Batching Decisions:**
| Decision Type | Batch Strategy |
|---------------|----------------|
| Task selection | Morning planning |
| Email | 2-3 times daily |
| Meetings | Specific days/times |
| Administrative | Weekly block |

**Decision Rules:**
- Pre-made decisions reduce fatigue
- If-then protocols
- Threshold triggers
- Automation where possible

## Technology Mastery

**Optimization Stack:**
| Layer | Tools |
|-------|-------|
| Capture | Quick capture app |
| Organization | Task manager |
| Scheduling | Calendar system |
| Focus | Blocking tools |
| Analysis | Tracking software |

**Automation Principles:**
- Reduce friction for desired behaviors
- Increase friction for undesired behaviors
- Template recurring processes
- Integrate systems

## Physician/Professional Application

**Clinical Demands:**
| Challenge | Expert Strategy |
|-----------|-----------------|
| Unpredictability | Flexible frameworks |
| Information overload | Capture and process |
| Emotional labor | Scheduled recovery |
| Continuous learning | Protected time |

**Career Integration:**
- Clinical responsibilities
- Research/scholarship
- Teaching/mentoring
- Administration
- Personal life

## Sustainability Science

**Energy Renewal:**
| Dimension | Practices |
|-----------|-----------|
| Physical | Sleep, exercise, nutrition |
| Emotional | Connection, boundaries |
| Mental | Focus, rest, learning |
| Spiritual | Purpose, meaning, values |

**Preventing Burnout:**
- Early warning recognition
- Proactive recovery
- Sustainable systems
- Community support

## Continuous Mastery

**Deliberate Practice:**
- Specific skill focus
- Feedback integration
- Progressive challenge
- Reflection and adjustment

**Meta-Learning:**
- Learning to learn better
- System improvement
- Efficiency optimization
- Transfer across domains`,
      keyTerms: [
        { term: 'identity-based habits', definition: 'Behavior change approach focusing on becoming the type of person who performs desired behaviors' },
        { term: 'psychological detachment', definition: 'Complete mental disengagement from work during non-work time enabling recovery' },
        { term: 'personal operating system', definition: 'Integrated system of values, goals, habits, and structures guiding daily behavior' },
        { term: 'decision rules', definition: 'Pre-made decisions applied automatically when specific conditions are met' },
      ],
      clinicalNotes: `Expert perspective on time management:

1. **Systems Over Goals:** Individual goals are less important than the systems you build. Good systems produce good outcomes consistently.

2. **Energy Over Time:** Managing energy is more important than managing time. Protect your peak performance hours for your most important work.

3. **Sustainable Pace:** Intensity without recovery leads to burnout. Build recovery into your system, not just when you break down.

4. **Technology as Tool:** Technology should serve your productivity, not fragment it. Be ruthless about what you allow to interrupt you.

5. **Environment Design:** Willpower is unreliable. Design your environment to make good choices easy and bad choices hard.

6. **Identity Alignment:** Lasting change comes from identity shift. Become a person who does the things you want to do.

7. **Iteration Required:** No system works perfectly from the start. Commit to continuous improvement through regular review and adjustment.

8. **Context Matters:** What works in preclinical years differs from clinical years differs from residency. Adapt your system to current demands.

9. **Balance Is Dynamic:** Work-life balance isn't a fixed state but a continuous process of adjustment. Some periods will be more intense than others.

10. **Professional Responsibility:** In medicine, time management isn't just personal productivity - it affects patient care. Manage yourself as the instrument of care you are.`,
    },
  },

  media: [
    {
      id: 'eisenhower-matrix-diagram',
      type: 'diagram',
      filename: 'eisenhower-matrix-diagram.svg',
      title: 'Eisenhower Priority Matrix',
      description: 'Visual guide to the urgency-importance prioritization framework',
    },
    {
      id: 'pomodoro-technique',
      type: 'diagram',
      filename: 'pomodoro-technique.svg',
      title: 'Pomodoro Technique Overview',
      description: 'Illustration of the Pomodoro study method',
    },
  ],

  citations: [
    {
      id: 'macan-1990',
      type: 'article',
      title: 'College Students\' Time Management: Correlations With Academic Performance and Stress',
      authors: ['Macan, T.H.', 'et al.'],
      source: 'Journal of Educational Psychology',
      accessedDate: '2025-01-28',
    },
    {
      id: 'allen-2015',
      type: 'textbook',
      title: 'Getting Things Done: The Art of Stress-Free Productivity',
      authors: ['Allen, D.'],
      source: 'Penguin Books',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-study-schedules', targetType: 'concept', relationship: 'related', label: 'Study Schedules' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'related', label: 'Effective Study Methods' },
    { targetId: 'education-exam-anxiety', targetType: 'concept', relationship: 'related', label: 'Exam Anxiety Management' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['time management', 'productivity', 'study skills', 'self-regulation'],
    keywords: ['time management', 'productivity', 'scheduling', 'Pomodoro', 'prioritization', 'student success'],
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

export default timeManagementStudents;
