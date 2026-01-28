/**
 * Pomodoro Technique - Focused Time Management for Studying
 *
 * Educational content covering the Pomodoro Technique for effective
 * study sessions and productivity.
 */

import { EducationalContent } from '../../types';

export const pomodoroTechnique: EducationalContent = {
  id: 'education-pomodoro-technique',
  type: 'concept',
  name: 'Pomodoro Technique',
  alternateNames: ['Pomodoro Method', 'Tomato Timer', 'Focused Work Sprints', 'Time Boxing'],

  levels: {
    1: {
      level: 1,
      summary: 'The Pomodoro Technique is a way to study using short focused periods with breaks in between. It helps you stay focused and get more done.',
      explanation: `## What Is the Pomodoro Technique?

The Pomodoro Technique is a simple way to manage your time when studying. You work for a short period, then take a short break, and repeat.

## How It Works

**The Basic Steps:**
1. Pick a task to work on
2. Set a timer for 25 minutes
3. Work only on that task until the timer rings
4. Take a short 5-minute break
5. After 4 pomodoros, take a longer 15-30 minute break

**Why 25 Minutes?**
- Long enough to get things done
- Short enough to stay focused
- Easy to commit to
- Creates a sense of urgency

## Why It Helps

**Stay Focused:**
- Knowing a break is coming helps you concentrate
- You work faster when time is limited
- No distractions allowed during pomodoros

**Avoid Burnout:**
- Regular breaks keep your brain fresh
- Prevents studying for too long without resting
- Helps maintain energy throughout the day

**Track Progress:**
- Count how many pomodoros you complete
- See how much work you actually get done
- Feel good about completing each session

## Tips for Success

1. Remove distractions before starting
2. If you think of something else, write it down quickly
3. When the timer rings, stop working even if in the middle
4. Use your break to really rest - step away from studying
5. Start with the most important task

## For Medical Students

- One pomodoro might be reading one section
- Another pomodoro could be doing practice questions
- Use breaks to stretch, get water, or walk around
- Track how many pomodoros different tasks take

## Tools You Can Use

- Kitchen timer
- Phone timer app
- Computer timer
- Special Pomodoro apps`,
      keyTerms: [
        { term: 'pomodoro', definition: 'A 25-minute focused work session' },
        { term: 'time boxing', definition: 'Setting a fixed amount of time for a task' },
        { term: 'focused work', definition: 'Working without distractions on one task' },
        { term: 'break', definition: 'A rest period between work sessions' },
      ],
      analogies: [
        'A pomodoro is like a sprint in running - intense effort for a short time, then rest before the next sprint.',
        'It is like eating a meal in courses - you enjoy each course and take breaks between them.',
      ],
      examples: [
        'A student does 4 pomodoros in the morning: 25 minutes reading, 5 minute break, repeated 4 times with a longer break after.',
        'Someone uses a pomodoro to write an essay, finding they can write more in four 25-minute sessions than in one long 2-hour session.',
      ],
      patientCounselingPoints: [
        'The Pomodoro Technique can help with attention and focus difficulties',
        'Breaking tasks into smaller chunks makes them feel more manageable',
      ],
    },

    2: {
      level: 2,
      summary: 'The Pomodoro Technique, developed by Francesco Cirillo, uses focused 25-minute work intervals separated by short breaks to maintain concentration and productivity. The method combats procrastination and mental fatigue through structured time management.',
      explanation: `## Pomodoro Technique Overview

The Pomodoro Technique, created by Francesco Cirillo in the late 1980s, is a time management method that uses focused work intervals and regular breaks to optimize productivity and attention.

## Core Components

**The Basic Cycle:**
| Phase | Duration | Activity |
|-------|----------|----------|
| Work | 25 minutes | Focused, uninterrupted |
| Short break | 5 minutes | Rest, recharge |
| Long break | 15-30 minutes | After 4 pomodoros |

**Key Principles:**
| Principle | Application |
|-----------|-------------|
| Timeboxing | Fixed work periods |
| Single-tasking | One task per pomodoro |
| Breaks | Mandatory rest periods |
| Tracking | Record completed pomodoros |

## Why It Works

**Psychological Mechanisms:**
| Mechanism | Effect |
|-----------|--------|
| Parkinson\'s Law | Work expands to fill time available |
| Time pressure | Creates productive urgency |
| Zeigarnik effect | Interrupted tasks remembered better |
| Break recovery | Prevents cognitive fatigue |

**Cognitive Benefits:**
- Sustained attention training
- Reduced procrastination
- Improved focus
- Better work-rest balance

**Physiological Benefits:**
- Reduced mental fatigue
- Eye strain prevention
- Physical movement
- Stress reduction

## Implementation Guidelines

**Preparation:**
| Step | Action |
|------|--------|
| 1 | Choose a task |
| 2 | Eliminate distractions |
| 3 | Set timer for 25 minutes |
| 4 | Commit to focus |

**During Pomodoro:**
| Rule | Rationale |
|------|-----------|
| No multitasking | Maintains focus |
| No interruptions | Protects flow state |
| Write down distractions | Clear mind |
| Continue if finished | Overlearning, review |

**Break Activities:**
| Type | Activities |
|------|------------|
| Physical | Stretch, walk, movement |
| Mental | Different task, music |
| Refreshment | Water, snack, bathroom |
| Social | Brief conversation |

## Applications for Studying

**Medical School Use Cases:**
| Activity | Pomodoros |
|----------|-----------|
| Reading | 1-2 per section |
| Practice questions | 1-2 per block |
| Anki reviews | 1 per session |
| Video lectures | 1-2 per lecture |
| Writing notes | 1-2 per topic |

**Task Estimation:**
| Task | Typical Pomodoros |
|------|-------------------|
| Chapter reading | 2-4 |
| Question bank block | 1-2 |
| Flashcard review | 1-2 |
| Practice exam | 8-12 |

## Tools and Resources

**Timer Options:**
| Type | Examples |
|------|----------|
| Physical | Kitchen timer, dedicated devices |
| Mobile apps | Forest, Focus Keeper, Pomodone |
| Desktop | Focus Booster, Tomighty |
| Browser | Marinara, Pomofocus |

**Tracking Systems:**
| Method | Application |
|--------|-------------|
| Paper | Check marks, tally marks |
| Spreadsheet | Date, task, count |
| Apps | Built-in tracking |
| Calendar | Visual progress |

## Common Modifications

**Interval Variations:**
| Type | Work | Break | Long Break |
|------|------|-------|------------|
| Classic | 25 min | 5 min | 15-30 min |
| Extended | 50 min | 10 min | 30 min |
| Short | 15 min | 3 min | 15 min |
| Ultradian | 90 min | 20 min | - |

**When to Modify:**
| Situation | Adjustment |
|-----------|------------|
| Deep work needed | Longer pomodoros |
| Low energy | Shorter intervals |
| Meetings interrupt | Flexible timing |
| Creative work | Variable lengths |

## Troubleshooting

**Common Challenges:**
| Challenge | Solution |
|-----------|----------|
| Cannot focus 25 min | Start with 15 min |
| Distractions constant | Environment changes |
| Skip breaks | Mandatory enforcement |
| Lose count | Tracking tools |

**Adaptations:**
| Need | Modification |
|------|--------------|
| Teamwork | Synchronized pomodoros |
| Creative work | Flexible boundaries |
| Phone calls | Interruption logging |
| Urgent tasks | Emergency protocol |`,
      keyTerms: [
        { term: 'Parkinson\'s Law', definition: 'The adage that work expands to fill the time available for its completion' },
        { term: 'Zeigarnik effect', definition: 'The tendency to remember uncompleted tasks better than completed ones' },
        { term: 'timeboxing', definition: 'Allocating a fixed time period to a task' },
        { term: 'deep work', definition: 'Professional activities performed in a state of distraction-free concentration' },
      ],
      analogies: [
        'The Pomodoro Technique is like interval training for your brain - intense effort followed by recovery.',
        'Timeboxing is like putting items in specific size boxes - you fit your work to the container.',
      ],
      examples: [
        'A medical student completes 12 pomodoros on a Saturday: 6 hours of focused study with planned breaks.',
        'A resident uses 2 pomodoros to write patient notes, finding improved efficiency and reduced errors.',
      ],
      patientCounselingPoints: [
        'Time management techniques like Pomodoro can help with focus and task completion',
        'Regular breaks are important for maintaining attention and preventing fatigue',
      ],
    },

    3: {
      level: 3,
      summary: 'The Pomodoro Technique provides a structured framework for managing attention and preventing burnout. Effective implementation requires task selection, distraction management, break optimization, and integration with broader study systems.',
      explanation: `## Comprehensive Pomodoro Framework

Effective Pomodoro implementation requires understanding attention science, strategic task selection, break optimization, and systematic tracking for continuous improvement.

## Attention Science

**Attention Spans:**
| Type | Duration | Characteristics |
|------|----------|-----------------|
| Sustained | 10-20 min | Focus on single task |
| Selective | Variable | Filter distractions |
| Alternating | Quick shifts | Between tasks |
| Divided | Limited | Multiple tasks |

**Ultradian Rhythms:**
| Cycle | Duration | Application |
|-------|----------|-------------|
| Basic rest-activity | 90-120 min | Longer work blocks |
| BRAC | 90 min | Natural rhythm alignment |
| Attention | 20 min | Core focus period |

**Cognitive Load Management:**
| Load Type | Pomodoro Strategy |
|-----------|-------------------|
| Intrinsic | Match complexity to interval |
| Extraneous | Minimize during work |
| Germane | Optimize during learning |

## Strategic Implementation

**Task Selection:**
| Criterion | Application |
|-----------|-------------|
| Clarity | Well-defined task |
| Scope | Fits in 1-4 pomodoros |
| Priority | Important first |
| Energy match | Align with capacity |

**Task Decomposition:**
| Large Task | Pomodoro Breakdown |
|------------|---------------------|
| Write paper | Research, outline, draft, edit |
| Study chapter | Sections as separate pomodoros |
| Review for exam | Topics in sequence |
| Complete project | Milestones per session |

**Interruption Management:**
| Type | Strategy |
|------|----------|
| Internal | Write down, continue |
| External | Inform others, defer |
| Urgent | Interrupt, log, resume |

## Break Optimization

**Break Science:**
| Break Type | Duration | Activity | Purpose |
|------------|----------|----------|---------|
| Micro | 30 sec | Stretch, eyes | Immediate relief |
| Short | 5 min | Walk, water | Mental reset |
| Medium | 15 min | Exercise, snack | Recovery |
| Long | 30+ min | Meal, nature | Deep restoration |

**Break Activities by Goal:**
| Goal | Activities |
|------|------------|
| Physical | Stretch, walk, exercise |
| Mental | Different task, meditation |
| Social | Brief conversation |
| Refresh | Hydration, nutrition |

**Break Guidelines:**
- Physically move
- Look away from screen
- Avoid similar tasks
- Set timer for break end

## Integration with Study Systems

**Spaced Repetition:**
| Integration | Implementation |
|-------------|----------------|
| Anki review | One deck per pomodoro |
| New cards | Separate session |
| Review timing | Align with intervals |

**Active Recall:**
| Activity | Pomodoro Application |
|----------|---------------------|
| Practice questions | One block per pomodoro |
| Self-testing | Flashcards in sessions |
| Teaching | Explain concepts aloud |

**Deep Work Integration:**
| Session Type | Pomodoro Structure |
|--------------|-------------------|
| Analysis | Multiple sequential |
| Creative | Variable intervals |
| Learning | Standard intervals |
| Administrative | Batched pomodoros |

## Tracking and Analytics

**Metrics to Track:**
| Metric | Purpose |
|--------|---------|
| Pomodoros completed | Productivity |
| Interruptions | Focus quality |
| Task completion | Efficiency |
| Energy levels | Optimization |

**Analysis Framework:**
| Question | Data Source |
|----------|-------------|
| Most productive time? | Time of day analysis |
| Optimal session length? | Interval variation |
| Common interruptions? | Interruption log |
| Task duration estimates? | Actual vs planned |

**Improvement Cycle:**
1. Track baseline
2. Identify patterns
3. Experiment with changes
4. Measure results
5. Implement best practices

## Advanced Techniques

**Pomodoro Combinations:**
| Technique | Combination |
|-----------|-------------|
| Eat the frog | Hardest task first |
| Time blocking | Scheduled pomodoros |
| Batch processing | Similar tasks together |
| Theming | Subject per time block |

**Team Pomodoro:**
| Scenario | Implementation |
|----------|----------------|
| Study group | Synchronized intervals |
| Coworking | Shared timer |
| Accountability | Report progress |
| Collaboration | Work together, break together |

**Hybrid Approaches:**
| Situation | Modification |
|-----------|--------------|
| Long analysis | 50/10 split |
| Creative work | Flexible boundaries |
| Meetings | Pomodoros between |
| Emergencies | Flexible adaptation |

## Optimization Strategies

**Personal Rhythm:**
| Factor | Optimization |
|--------|--------------|
| Chronotype | Match to peak times |
| Energy patterns | Align tasks |
| Attention span | Adjust intervals |
| Recovery needs | Customize breaks |

**Environmental Design:**
| Element | Optimization |
|---------|--------------|
| Noise | Control or mask |
| Lighting | Bright, natural |
| Temperature | Comfortable |
| Ergonomics | Supportive setup |
| Distractions | Remove or block |

**Technology Integration:**
| Tool | Application |
|------|-------------|
| Website blockers | Prevent distraction |
| Focus apps | Enforce breaks |
| Analytics | Track patterns |
| Automation | Reduce friction |`,
      keyTerms: [
        { term: 'ultradian rhythm', definition: 'A recurrent period or cycle repeated throughout a 24-hour circadian day' },
        { term: 'cognitive load', definition: 'The amount of mental effort being used in working memory' },
        { term: 'chronotype', definition: 'An individual\'s natural inclination for sleep and wake times' },
        { term: 'time blocking', definition: 'Scheduling specific blocks of time for specific tasks' },
      ],
      analogies: [
        'Ultradian rhythms are like tides - natural cycles of energy and rest throughout the day.',
        'Task decomposition is like eating a large pizza one slice at a time - manageable portions of the whole.',
      ],
      examples: [
        'A student tracks pomodoros and discovers peak productivity at 9-11 AM, scheduling hardest subjects then.',
        'Analysis shows 40% of interruptions are self-inflicted, leading to phone placement in another room.',
      ],
      patientCounselingPoints: [
        'Understanding personal attention rhythms can optimize work and rest schedules',
        'Structured work-break cycles can improve focus and reduce fatigue',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Pomodoro application requires personalization, integration with productivity systems, and understanding of individual cognitive patterns. Expert users optimize intervals, manage complex workflows, and combine with complementary techniques.',
      explanation: `## Advanced Pomodoro Concepts

Professional Pomodoro implementation involves personalization, systematic optimization, workflow integration, and advanced productivity strategies.

## Personalization Science

**Individual Variation:**
| Factor | Assessment | Adjustment |
|--------|------------|------------|
| Baseline attention | Self-observation | Interval length |
| Recovery speed | Energy tracking | Break duration |
| Task preferences | Productivity log | Task sequencing |
| Chronotype | Sleep patterns | Schedule timing |

**Optimization Experiments:**
| Variable | Test Range | Measure |
|----------|------------|---------|
| Work interval | 15-50 minutes | Output quality |
| Break length | 3-20 minutes | Recovery |
| Long break | 15-45 minutes | Sustained performance |
| Daily pomodoros | 4-16 | Sustainability |

**Adaptive System:**
| Input | Processing | Output |
|-------|------------|--------|
| Energy level | Algorithm | Interval adjustment |
| Task type | Rules | Structure modification |
| Interruptions | Pattern | Protocol change |
| Performance data | Analysis | System optimization |

## Workflow Integration

**Project Management:**
| Scale | Pomodoro Application |
|-------|---------------------|
| Daily | Task completion |
| Weekly | Milestone progress |
| Monthly | Goal achievement |
| Quarterly | Strategic objectives |

**Priority Systems:**
| Framework | Integration |
|-----------|-------------|
| Eisenhower matrix | Quadrant-based scheduling |
| Eat the frog | Hardest task first pomodoro |
| MIT (Most Important Task) | First pomodoro daily |
| 1-3-5 rule | Pomodoro allocation |

**Energy Management:**
| Energy Level | Strategy |
|--------------|----------|
| High | Complex tasks, longer intervals |
| Medium | Routine work, standard intervals |
| Low | Easy tasks, shorter intervals |
| Recovery | Rest, self-care |

## Complex Workflow Management

**Interruptions Protocol:**
| Urgency | Action |
|---------|--------|
| Critical | Stop, address, resume |
| Important | Log, continue, address in break |
| Low | Defer to scheduled time |

**Context Switching:**
| Situation | Strategy |
|-----------|----------|
| Multiple projects | Themed pomodoros |
| Different task types | Batch similar together |
| Reactive work | Buffer pomodoros |
| Deep work | Protected blocks |

**Collaborative Work:**
| Scenario | Approach |
|----------|----------|
| Meetings | Between pomodoros |
| Shared work | Synchronized sessions |
| Availability windows | Communication breaks |
| Team coordination | Shared calendar |

## Productivity System Integration

**GTD (Getting Things Done):**
| Component | Pomodoro Integration |
|-----------|---------------------|
| Capture | Inbox processing sessions |
| Clarify | Decision pomodoros |
| Organize | System maintenance |
| Reflect | Review sessions |
| Engage | Doing the work |

**Kanban:**
| Element | Integration |
|---------|-------------|
| Backlog | Task selection |
| Doing | Active pomodoros |
| Done | Completion tracking |
| WIP limits | Concurrent pomodoros |

**Bullet Journal:**
| Component | Pomodoro Application |
|-----------|---------------------|
| Daily log | Pomodoro tracking |
| Migration | Task rollover |
| Collections | Themed sessions |
| Index | Reference materials |

## Performance Optimization

**Flow State Facilitation:**
| Factor | Optimization |
|--------|--------------|
| Challenge level | Match to skill |
| Clear goals | Define per pomodoro |
| Immediate feedback | Progress visibility |
| Distraction-free | Environment control |

**Deep Work Protocol:**
| Phase | Duration | Activity |
|-------|----------|----------|
| Setup | 5 min | Prepare environment |
| Deep work | 90 min | Focused pomodoros |
| Break | 20 min | Recovery |
| Shallow work | Variable | Administrative tasks |

**Recovery Optimization:**
| Recovery Type | Activities | Duration |
|---------------|------------|----------|
| Physical | Exercise, movement | 20-60 min |
| Mental | Meditation, nature | 20-40 min |
| Social | Quality time | 30-120 min |
| Creative | Hobbies, art | 30-60 min |

## Analytics and Improvement

**Quantified Self:**
| Metric | Tool | Insight |
|--------|------|---------|
| Pomodoros | App/Tally | Productivity volume |
| Interruptions | Log | Focus quality |
| Energy | Scale | Optimal timing |
| Mood | Journal | Satisfaction |

**Correlation Analysis:**
| Variables | Relationship |
|-----------|--------------|
| Sleep and pomodoros | Rest enables output |
| Exercise and focus | Movement aids concentration |
| Nutrition and energy | Fuel affects performance |
| Breaks and sustainability | Recovery prevents burnout |

**Continuous Improvement:**
| Cycle | Activity |
|-------|----------|
| Plan | Schedule pomodoros |
| Do | Execute sessions |
| Check | Review metrics |
| Act | Implement improvements |

## Professional Applications

**Medical Practice:**
| Activity | Pomodoro Application |
|----------|---------------------|
| Documentation | Batched sessions |
| Research | Protected blocks |
| Learning | Daily sessions |
| Quality improvement | Project pomodoros |

**Academic Work:**
| Task | Structure |
|------|-----------|
| Writing | Multiple sequential |
| Research | Variable intervals |
| Teaching | Preparation sessions |
| Service | Admin blocks |

**Leadership:**
| Responsibility | Strategy |
|----------------|----------|
| Strategic thinking | Deep work blocks |
| Email management | Batched pomodoros |
| Meetings | Between sessions |
| Team development | Dedicated time |`,
      keyTerms: [
        { term: 'chronotype', definition: 'The behavioral manifestation of an individual\'s underlying circadian rhythm' },
        { term: 'context switching', definition: 'Moving between different tasks or projects' },
        { term: 'deep work', definition: 'Professional activities performed in a state of distraction-free concentration' },
        { term: 'quantified self', definition: 'Self-tracking with technology to gain self-knowledge through numbers' },
      ],
      analogies: [
        'Personalizing Pomodoro is like tuning an instrument - finding the right settings for optimal performance.',
        'Workflow integration is like choreography - coordinating multiple elements into a harmonious routine.',
      ],
      examples: [
        'A faculty member schedules deep work pomodoros for 8-11 AM when energy is highest, leaving afternoons for meetings.',
        'Analysis reveals that 4 focused pomodoros produce more output than 8 unfocused hours, leading to schedule redesign.',
      ],
      patientCounselingPoints: [
        'Personalized work schedules can accommodate individual variation in attention and energy',
        'Structured focus time can improve both productivity and wellbeing',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional Pomodoro mastery encompasses productivity science, behavioral psychology, and coaching expertise. Expert practitioners design personalized systems, teach methodology, research effectiveness, and contribute to the productivity field.',
      explanation: `## Professional Pomodoro Framework

Professional mastery of the Pomodoro Technique integrates cognitive science, behavioral design, coaching expertise, and contributions to productivity research.

## Theoretical Foundations

**Behavioral Science:**
| Theory | Application |
|--------|-------------|
| Operant conditioning | Reward structures |
| Habit formation | Cue-routine-reward |
| Implementation intentions | If-then planning |
| Commitment devices | Enforcement mechanisms |

**Cognitive Psychology:**
| Concept | Technique Application |
|---------|----------------------|
| Implementation intentions | "When timer starts, I focus" |
| Ego depletion | Manage willpower |
| Decision fatigue | Pre-decide tasks |
| Attention restoration | Nature breaks |

**Behavioral Economics:**
| Principle | Application |
|-----------|-------------|
| Loss aversion | Completed pomodoro value |
| Present bias | Immediate rewards |
| Choice architecture | Default structures |
| Social proof | Group pomodoros |

## System Design

**Personal Productivity System:**
| Component | Design |
|-----------|--------|
| Goals | Align pomodoros to objectives |
| Projects | Decompose to sessions |
| Tasks | Fit to intervals |
| Habits | Integrate routines |

**Technology Architecture:**
| Layer | Components |
|-------|------------|
| Input | Tasks, calendar, goals |
| Processing | Scheduling algorithm |
| Output | Daily pomodoro plan |
| Feedback | Tracking, analytics |

**Behavioral Design:**
| Element | Implementation |
|---------|----------------|
| Cues | Visual, auditory timers |
| Routines | Standard sequences |
| Rewards | Check marks, breaks |
| Environment | Distraction-free setup |

## Coaching and Teaching

**Curriculum Design:**
| Level | Content |
|-------|---------|
| Beginner | Basic technique |
| Intermediate | Personalization |
| Advanced | Integration |
| Expert | Teaching others |

**Assessment:**
| Method | Purpose |
|--------|---------|
| Self-assessment | Baseline |
| Observation | Technique fidelity |
| Outcomes | Results measurement |
| Feedback | Improvement |

**Common Challenges:**
| Challenge | Intervention |
|-----------|--------------|
| Inconsistent use | Habit stacking |
| Distraction | Environment design |
| Burnout | Sustainable pacing |
| Perfectionism | Progress over perfection |

## Research and Innovation

**Effectiveness Studies:**
| Design | Measures |
|--------|----------|
| RCT | Productivity, wellbeing |
| Longitudinal | Sustainability |
| Qualitative | Experience |
| Comparative | vs other methods |

**Innovation Areas:**
| Area | Development |
|------|-------------|
| AI | Adaptive timing |
| Wearables | Physiological optimization |
| VR | Immersive focus |
| Neurotechnology | Brain-state optimization |

**Contribution:**
| Type | Output |
|------|--------|
| Research | Publications |
| Tools | Apps, devices |
| Methods | New techniques |
| Education | Courses, books |

## Professional Practice

**Productivity Consulting:**
| Service | Application |
|---------|-------------|
| Assessment | Current state |
| Design | Custom system |
| Implementation | Change support |
| Optimization | Continuous improvement |

**Organizational Work:**
| Level | Intervention |
|-------|--------------|
| Individual | Coaching |
| Team | Synchronized work |
| Department | Culture change |
| Organization | Policy |

**Specialized Populations:**
| Group | Adaptation |
|-------|------------|
| ADHD | Shorter intervals |
| Anxiety | Structure and predictability |
| Remote workers | Connection rituals |
| Creatives | Flexible boundaries |

## Ethical Considerations

**Wellbeing Priority:**
| Issue | Response |
|-------|----------|
| Overwork | Sustainable limits |
| Perfectionism | Good enough |
| Comparison | Personal progress |
| Burnout | Prevention focus |

**Accessibility:**
| Consideration | Implementation |
|---------------|----------------|
| Disability | Flexible adaptation |
| Socioeconomic | Free tools |
| Cultural | Context sensitivity |
| Language | Global accessibility |

## Future Directions

**Technology Trends:**
| Trend | Application |
|-------|-------------|
| AI assistants | Intelligent scheduling |
| Biometrics | Optimal timing |
| Augmented reality | Focus environments |
| Brain-computer interfaces | Attention monitoring |

**Societal Impact:**
| Domain | Contribution |
|--------|--------------|
| Education | Learning optimization |
| Work | Sustainable productivity |
| Health | Stress reduction |
| Environment | Reduced overwork |

**Integration with Wellbeing:**
| Area | Approach |
|------|----------|
| Work-life balance | Boundaries |
| Mental health | Stress management |
| Physical health | Movement breaks |
| Social connection | Collaborative sessions |`,
      keyTerms: [
        { term: 'implementation intentions', definition: 'Specific if-then plans that link situational cues to goal-directed responses' },
        { term: 'choice architecture', definition: 'Designing the way choices are presented to influence decisions' },
        { term: 'behavioral design', definition: 'Using behavioral science to create products and services that influence behavior' },
        { term: 'habit stacking', definition: 'Linking a new habit to an existing one' },
      ],
      analogies: [
        'Behavioral design is like garden design - shaping the environment to encourage desired growth.',
        'A personal productivity system is like a custom suit - tailored to fit individual needs and preferences.',
      ],
      examples: [
        'A productivity coach helps clients design personalized Pomodoro systems based on individual chronotypes and work demands.',
        'Research shows that group Pomodoro sessions increase compliance and create positive social pressure.',
      ],
      patientCounselingPoints: [
        'Evidence-based productivity techniques can be adapted for various health conditions and life circumstances',
        'Sustainable productivity prioritizes wellbeing alongside output',
      ],
    },
  },

  media: [
    {
      id: 'pomodoro-cycle',
      type: 'diagram',
      filename: 'pomodoro-cycle.svg',
      title: 'Pomodoro Technique Cycle',
      description: 'Visual representation of work intervals and breaks',
    },
    {
      id: 'productivity-comparison',
      type: 'diagram',
      filename: 'productivity-comparison.svg',
      title: 'Productivity Comparison',
      description: 'Graph comparing focused vs unfocused work over time',
    },
  ],

  citations: [
    {
      id: 'cirillo-book',
      type: 'textbook',
      title: 'The Pomodoro Technique',
      authors: ['Cirillo, F.'],
      source: 'Currency',
      accessedDate: '2025-01-28',
    },
    {
      id: 'newport-deep-work',
      type: 'textbook',
      title: 'Deep Work',
      authors: ['Newport, C.'],
      source: 'Grand Central Publishing',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-study-schedules', targetType: 'concept', relationship: 'related', label: 'Study Schedules' },
    { targetId: 'education-time-management', targetType: 'concept', relationship: 'parent', label: 'Time Management' },
    { targetId: 'education-active-learning', targetType: 'concept', relationship: 'related', label: 'Active Learning' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['time management', 'productivity', 'study skills', 'focus'],
    keywords: ['pomodoro', 'time management', 'productivity', 'focus', 'study technique'],
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

export default pomodoroTechnique;
