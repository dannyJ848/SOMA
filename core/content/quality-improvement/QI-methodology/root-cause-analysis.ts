import { EducationalContent } from '../types';

export const rootCauseAnalysisContent: EducationalContent = {
  id: 'root-cause-analysis',
  title: 'Root Cause Analysis',
  category: 'quality-improvement',
  subcategory: 'QI-methodology',
  description: 'Comprehensive root cause analysis methods for understanding and preventing adverse events',
  levels: {
    novice: {
      title: 'Introduction to Root Cause Analysis',
      content: `
# Introduction to Root Cause Analysis

## What is Root Cause Analysis (RCA)?

**Root Cause Analysis (RCA)** is a structured method used to identify the underlying causes of problems or adverse events so that effective solutions can be implemented to prevent recurrence.

## The Core Principle

> **"If we don't find the root cause, the problem will happen again."**

Unlike quick fixes that address symptoms, RCA seeks to identify and address fundamental causes.

## Symptoms vs. Root Causes

| Symptom (What We See) | Root Cause (Underlying Issue) |
|-----------------------|-------------------------------|
| A medication was given late | Staffing template doesn't account for medication administration workload |
| A patient fell | No standardized fall risk assessment protocol |
| Equipment wasn't available | No process for equipment tracking and replacement |

## Why RCA Matters in Healthcare

1. **Patient Safety** - Preventing harm to patients
2. **Learning** - Understanding why systems fail
3. **Resource Efficiency** - Solving problems permanently rather than repeatedly
4. **Culture** - Moving from blame to learning
5. **Regulatory** - Required by many accrediting organizations

## Types of Problems Requiring RCA

| Problem Type | Examples |
|--------------|----------|
| **Sentinel Events** | Wrong-site surgery, patient death, serious injury |
| **Near Misses** | Events that could have caused harm but didn't |
| **Recurring Problems** | Same issue happening multiple times |
| **Significant Deficiencies** | Compliance gaps, persistent quality issues |

## Basic RCA Process

### The Four Questions

1. **What happened?**
   - Describe the event clearly and objectively

2. **Why did it happen?**
   - Identify all contributing factors

3. **What can be done to prevent it?**
   - Develop solutions that address root causes

4. **How will we know the changes worked?**
   - Monitor for improvement

### Simple RCA Steps

\`\`\`
Event Occurs
    ↓
Gather Basic Information
    ↓
Identify Contributing Factors
    ↓
Find the Root Cause(s)
    ↓
Develop Solutions
    ↓
Implement Changes
    ↓
Monitor for Effectiveness
\`\`\`

## Common RCA Tools

### Tool Selection Guide

| Tool | Best For | Complexity |
|------|----------|------------|
| 5 Whys | Simple problems, quick analysis | Beginner |
| Fishbone Diagram | Comprehensive cause exploration | Beginner |
| Timeline | Understanding sequence of events | Beginner |
| Barrier Analysis | Identifying why defenses failed | Intermediate |
| Change Analysis | Understanding what changed | Intermediate |

## A Simple RCA Example

**Event:** A patient received the wrong medication

### Initial Analysis (5 Whys)

| Question | Answer |
|----------|--------|
| Why did the error occur? | Nurse grabbed the wrong vial |
| Why was the wrong vial grabbed? | Both vials looked similar |
| Why were both vials available? | They were stored next to each other |
| Why were they stored together? | No separation policy for look-alike drugs |
| Why was there no policy? | Never identified as a risk |

**Root Cause:** Lack of look-alike medication storage policy

**Solution:** Implement tall-man lettering and separate storage protocols

## Key RCA Principles

1. **Focus on Systems, Not People**
   - Blaming individuals doesn't prevent recurrence
   - Most errors result from system design

2. **Dig Deep Enough**
   - Don't stop at the first reasonable answer
   - Keep asking why until you reach root causes

3. **Use Data and Evidence**
   - Base conclusions on facts, not assumptions
   - Interview witnesses, review records

4. **Involve Those Closest to the Work**
   - Frontline staff understand the process
   - Their insights are invaluable

5. **Develop Actionable Solutions**
   - Solutions should address root causes
   - Must be feasible and sustainable

## What RCA Is Not

| Misconception | Reality |
|---------------|---------|
| RCA is about finding someone to blame | RCA focuses on system causes, not individual fault |
| RCA is quick | Thorough RCA takes time and effort |
| RCA answers are obvious | Root causes are often hidden beneath the surface |
| RCA ends with identifying the cause | RCA requires action to prevent recurrence |

## When to Conduct an RCA

**Required RCA:**
- Sentinel events (per Joint Commission standards)
- State-reported adverse events
- Accreditor-identified issues

**Discretionary RCA:**
- Near misses (high learning value)
- Recurring problems
- Significant process failures
- Proactive risk identification

## The Learning Value of RCA

Every RCA should answer:
- What can we learn from this event?
- What needs to change?
- How will we prevent recurrence?

The value is not in the document produced but in the **system improvements** that result.
      `,
      learningObjectives: [
        'Define root cause analysis and its purpose in healthcare',
        'Distinguish between symptoms and root causes',
        'Identify when RCA is appropriate and required'
      ],
      keyTerms: {
        'Root Cause': 'The fundamental underlying reason for a problem or event; removing it prevents recurrence',
        'Sentinel Event': 'An unexpected occurrence involving death or serious physical or psychological injury',
        'Near Miss': 'An event that could have caused harm but didn\'t; also called a "close call"',
        '5 Whys': 'A technique of repeatedly asking "why?" to drill down to root causes'
      },
      quizQuestions: [
        {
          question: 'What is the primary purpose of root cause analysis?',
          options: [
            'To identify who is responsible for an error',
            'To find underlying causes so problems can be prevented from recurring',
            'To satisfy regulatory requirements only',
            'To document what happened for legal protection'
          ],
          correctAnswer: 1,
          explanation: 'The primary purpose of RCA is to identify underlying causes so that effective solutions can be implemented to prevent recurrence.'
        },
        {
          question: 'Why should RCA focus on systems rather than individuals?',
          options: [
            'Individuals are never at fault',
            'System fixes prevent recurrence regardless of which individuals are involved',
            'Systems are easier to fix than people',
            'Regulations require system focus'
          ],
          correctAnswer: 1,
          explanation: 'Focusing on systems rather than individuals creates solutions that work regardless of staffing changes and prevents the same error from happening to anyone else.'
        },
        {
          question: 'What distinguishes a symptom from a root cause?',
          options: [
            'There is no difference between them',
            'Symptoms are what we observe; root causes are the underlying reasons',
            'Root causes are always obvious; symptoms require investigation',
            'Symptoms are more serious than root causes'
          ],
          correctAnswer: 1,
          explanation: 'Symptoms are the visible manifestations of a problem, while root causes are the deeper, underlying issues that allow the problem to occur.'
        }
      ],
      estimatedReadTime: 10,
      prerequisites: []
    },
    beginner: {
      title: 'RCA Tools and Methods',
      content: `
# RCA Tools and Methods

## Overview of RCA Tools

Root cause analysis uses multiple tools that work together to provide a complete picture of why an event occurred.

## Tool 1: The 5 Whys

### How It Works

Ask "Why?" five times (or as many as needed) to drill down from symptoms to root causes.

### Example: Pressure Injury Development

| Why Level | Question | Answer |
|-----------|----------|--------|
| 1st Why | Why did the patient develop a pressure injury? | Patient remained in one position too long |
| 2nd Why | Why wasn\'t the patient repositioned? | Nurse was busy with emergencies |
| 3rd Why | Why couldn\'t other staff reposition the patient? | Repositioning wasn\'t delegated to nursing assistants |
| 4th Why | Why wasn\'t it delegated? | No clear protocol on who performs repositioning |
| 5th Why | Why was there no protocol? | Turn schedule was never developed for this unit |

### Tips for Effective 5 Whys

- **Be specific** - Each answer should be concrete
- **Verify assumptions** - Don't guess; gather facts
- **Multiple branches** - There may be more than one causal chain
- **Stop at actionable causes** - Keep going until you find something you can change

### Limitations

- **Single pathway** - Assumes one linear chain
- **Subjective** - Results depend on who's asking
- **Can be shallow** - May miss systemic factors

**Best use:** Quick analysis or as a starting point for deeper investigation.

## Tool 2: Fishbone (Ishikawa) Diagram

### When to Use

- Complex problems with multiple contributing factors
- When you need a comprehensive cause inventory
- For team-based analysis

### Structure

\`\`\`
                    Problem
                       ↑
    ┌──────────────────┼──────────────────┐
    │                  │                  │
  People            Policy          Equipment
    │                  │                  │
  [Causes]         [Causes]         [Causes]
\`\`\`

### Fishbone for RCA

Unlike general use, RCA fishbones should:
- Be populated with **specific facts** about the event
- Include **interview and observation data**
- Focus on **causes supported by evidence**

## Tool 3: Timeline/SNIC Analysis

### What is SNIC?

**SNIC** = Staff Narrative of Immediate Causes

### Creating an RCA Timeline

1. **Start with the event** - When did it occur?
2. **Work backwards** - What happened leading up to it?
3. **Work forwards** - What happened after?
4. **Mark key times** - When were decisions made? Actions taken?

### Timeline Example: Medication Error

\`\`\`
06:00 - Nurse shift begins
07:30 - Medications prepared for administration
08:00 - Administration begins
08:15 - PA system announces emergency elsewhere
08:17 - Nurse distracted, grabs wrong vial
08:20 - Medication administered to patient
08:45 - Nurse realizes error
08:46 - Physician notified
09:00 - Patient assessed, no harm
\`\`\`

### Timeline Insights

This timeline reveals:
- **Distraction point** (emergency announcement)
- **Vulnerability window** (08:00-08:20)
- **Recovery time** (45 minutes to discovery)

## Tool 4: Barrier Analysis

### The Concept

Every system has barriers (defenses) that prevent errors. RCA asks: **Why did barriers fail?**

### Layers of Defense

\`\`\`
Patient
    ↓
Individual Staff → Why didn't they catch it?
    ↓
Team → Why didn't the team catch it?
    ↓
Department → Why did department systems fail?
    ↓
Organization → Why did organizational systems fail?
\`\`\`

### Barrier Analysis Questions

| Defense Level | Questions to Ask |
|---------------|------------------|
| Individual | What training, competency, or attention factors were involved? |
| Team | How did communication, teamwork, or supervision fail? |
| Department | What protocols, resources, or systems were missing? |
| Organization | What policies, culture, or priorities contributed? |

## Tool 5: Change Analysis

### When to Use

- When something changed before the event
- For problems that haven't occurred before
- To identify what introduced new risk

### The Three Types of Change

| Change Type | Description | Example |
|-------------|-------------|---------|
| **People** | New staff, staffing changes | New nurse orientation incomplete |
| **Process** | Protocol changes, workflow changes | New admission protocol |
| **Technology/Equipment** | New equipment, upgrades | New PCA pump introduced |

### Change Analysis Template

| Category | What Changed | When | How It Relates to Event |

## Combining Tools Effectively

### Recommended RCA Sequence

\`\`\`
1. Timeline/SNIC Analysis
   ↓
2. Fishbone Diagram (organize potential causes)
   ↓
3. 5 Whys on major branches (drill down)
   ↓
4. Barrier Analysis (identify failed defenses)
   ↓
5. Change Analysis (if applicable)
\`\`\`

### Tool Selection Guide

| Situation | Primary Tool(s) |
|----------|----------------|
| Straightforward event | 5 Whys |
| Complex, multi-factorial | Fishbone + Timeline |
| Recurring problem | Barrier Analysis + Trend data |
| New problem | Change Analysis + Fishbone |
| Near miss | Barrier Analysis (why defenses worked) |
| Sentinel event | All tools as appropriate |

## Tool Application Example

**Event: Patient Fall**

### Timeline
- 02:00 - Patient assessed as high fall risk
- 02:30 - Bed alarm placed
- 03:45 - Patient bathroom use - alarm not reactivated
- 04:30 - Patient found on floor

### Fishbone Categories
- People: New nurse, unfamiliar with alarm protocol
- Policy: No documented protocol for alarm reactivation
- Equipment: Alarm easily silenced without notification

### 5 Whys on "Alarm not reactivated"
1. Why? Nurse forgot
2. Why? No reminder built into workflow
3. Why? Protocol doesn't specify reactivation
4. Why? Gap in fall prevention protocol
5. Why? Protocol never updated after new equipment implementation

### Barrier Analysis
- **Individual:** New nurse knowledge gap
- **Team:** No protocol for cross-checking
- **Department:** Equipment training gap
- **Organization:** Incomplete protocol for new equipment

### Root Cause
Fall prevention protocol not updated when new bed alarms were implemented, creating a knowledge and process gap.

## Common Tool Mistakes

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| Using only one tool | Incomplete analysis | Combine multiple tools |
| Tool-driven vs. problem-driven | Using inappropriate tool | Select tool based on question |
| Documentation without analysis | Form over substance | Focus on thinking, not forms |
| Acting on first finding | Missing deeper causes | Keep drilling, verify assumptions |

## Practice Exercise

Select a recent problem from your work and practice using at least two RCA tools:
1. Create a timeline of key events
2. Use the 5 Whys on one major factor
3. Identify which barriers failed

Compare results: What additional insights did each tool provide?
      `,
      learningObjectives: [
        'Apply multiple RCA tools to analyze problems systematically',
        'Select appropriate tools based on the type of problem',
        'Combine tools for comprehensive root cause identification'
      ],
      keyTerms: {
        'SNIC': 'Staff Narrative of Immediate Causes; a structured way to document what happened from the perspective of those involved',
        'Barrier Analysis': 'A method for examining why system defenses (barriers) failed to prevent an event',
        'Change Analysis': 'Examining what changed before an event to identify potential causes',
        'Timeline': 'A chronological display of events leading up to and following an adverse event'
      },
      quizQuestions: [
        {
          question: 'Which RCA tool is most appropriate for understanding the sequence of events?',
          options: [
            'Fishbone diagram',
            '5 Whys',
            'Timeline/SNIC analysis',
            'Barrier analysis'
          ],
          correctAnswer: 2,
          explanation: 'Timeline/SNIC analysis is specifically designed to establish the chronological sequence of events, which is essential for understanding what happened.'
        },
        {
          question: 'What is the purpose of barrier analysis in RCA?',
          options: [
            'To document what barriers should be installed',
            'To understand why system defenses failed to prevent the event',
            'To identify which barriers are most expensive',
            'To assign blame to individuals'
          ],
          correctAnswer: 1,
          explanation: 'Barrier analysis examines why the multiple layers of defense (individual, team, department, organization) failed to prevent the event.'
        },
        {
          question: 'When is change analysis most useful in an RCA?',
          options: [
            'For every RCA regardless of circumstances',
            'When a problem is new or something changed before the event',
            'Only for technical equipment problems',
            'Change analysis is rarely useful'
          ],
          correctAnswer: 1,
          explanation: 'Change analysis is particularly valuable when investigating problems that haven\'t occurred before or when something changed in the system.'
        }
      ],
      estimatedReadTime: 14,
      prerequisites: ['root-cause-analysis:novice']
    },
    intermediate: {
      title: 'Conducting a Thorough RCA',
      content: `
# Conducting a Thorough Root Cause Analysis

## Preparing for an RCA

### Forming the RCA Team

A successful RCA requires the right team:

| Team Role | Responsibilities |
|-----------|------------------|
| **Team Leader** | Guide process, ensure completeness |
| **Content Experts** | Those familiar with the process/workflow |
| **Frontline Staff** | Involved in or familiar with the event |
| **Quality Improvement** | Methodology expertise |
| **Recorder** | Document findings and recommendations |
| **Advisor (optional)** | Subject matter expertise as needed |

### Ideal Team Size
- **Minimum:** 3-4 people
- **Optimal:** 5-8 people
- **Maximum:** 10 people (beyond this, effectiveness declines)

### Before Starting

1. **Define scope** - What will and won't be included
2. **Gather initial information** - Basic facts about the event
3. **Schedule meetings** - Allow adequate time for thorough analysis
4. **Secure resources** - Meeting space, recording tools
5. **Set ground rules** - Confidentiality, open participation, no blame

## The RCA Process

### Phase 1: Information Gathering

#### What to Collect

| Information Type | Sources |
|------------------|---------|
| **Event details** | Incident reports, medical records |
| **Timeline** | All involved parties, system logs |
| **Policies/protocols** | Current written procedures |
| **Training records** | Staff education and competency |
| **Environment** | Physical layout, equipment involved |
| **Context** | Staffing, workload, external factors |

#### Interview Techniques

**Best Practices:**
- Conduct interviews promptly while memory is fresh
- Interview each person separately initially
- Use open-ended questions
- Focus on process, not person
- Avoid "why" questions (can sound accusatory)
- Document direct quotes

**Sample Interview Questions:**
- "Can you walk me through what happened from your perspective?"
- "What were you thinking/feeling at that moment?"
- "What information did you have available?"
- "What would have helped you in this situation?"
- "Has something like this happened before?"

**Questions to Avoid:**
- "Why did you do that?"
- "Who is responsible for this?"
- "Didn't you know...?"

### Phase 2: Event Reconstruction

#### Creating the Timeline

Develop a detailed sequence of events:

| Timestamp | Action | Who | Context |

**Include:**
- What happened
- When it happened
- Who was involved
- What information was available
- What decisions were made
- What actions were taken

#### Timeline Analysis

Look for:
- **Decision points** - Where choices were made
- **Information gaps** - Missing or unclear information
- **Communication breakdowns** - Misunderstandings or lack of communication
- **Timing issues** - Urgency, delays, parallel events

### Phase 3: Cause Identification

#### Using Multiple Tools

1. **Timeline analysis** reveals "when" and "what"
2. **Fishbone diagram** organizes potential causes
3. **5 Whys** drills down on key factors
4. **Barrier analysis** identifies failed defenses

#### Distinguishing Causes

| Cause Type | Definition | Example |
|------------|------------|---------|
| **Root Cause** | Fundamental reason allowing event | No double-check protocol for high-risk meds |
| **Contributing Factor** | Made event more likely | Staff working without breaks |
| **Direct Cause** | Immediately preceded event | Nurse administered wrong dose |

**Remember:** Contributing factors and direct causes are important but addressing them alone may not prevent recurrence if root causes remain.

### Phase 4: Solution Development

#### Solution Criteria

Effective RCA solutions should be:

| Criterion | Questions to Ask |
|-----------|------------------|
| **Strong** | Will it actually prevent recurrence? |
| **Specific** | Is it clear what needs to be done? |
| **Measurable** | Can we track implementation? |
| **Feasible** | Is it realistic given resources? |
| **Sustainable** | Will it last over time? |

#### Hierarchy of Solutions

| Level | Solution Type | Examples | Strength |
|-------|---------------|----------|----------|
| **Strongest** | System redesign | Physical constraints, forcing functions | ⭐⭐⭐⭐⭐ |
| **Strong** | Technology solutions | Automation, decision support | ⭐⭐⭐⭐ |
| **Moderate** | Standardization | Protocols, checklists, standard work | ⭐⭐⭐ |
| **Weaker** | Training/education | Competency requirements, education | ⭐⭐ |
| **Weakest** | Policy/reminders | Warnings, policies, signage | ⭐ |

#### Developing Strong Solutions

**Transform weak solutions to strong:**

| Weak Solution | Strong Solution |
|---------------|-----------------|
| "Be more careful" | Standardize process with checklist |
| "Watch for this" | Build alert into EHR |
| "Remember to..." | Create physical constraint or forcing function |
| "Train staff better" | Redesign system to reduce dependency on memory |

### Phase 5: Action Planning

#### SMART Action Plan

Each action item should be:

| Element | Description |
|---------|-------------|
| **Specific** - What exactly will be done |
| **Measurable** - How will we know it's complete |
| **Achievable** - Is it realistic |
| **Relevant** - Does it address the root cause |
| **Time-bound** - When will it be done |

#### Action Item Template

\`\`\`
Action: [Description]
Root cause addressed: [Which root cause]
Responsible person: [Who will ensure completion]
Target date: [When it will be done]
Resources needed: [What's required]
Measurement: [How we'll know it's done]
\`\`\`

### Phase 6: Implementation and Monitoring

#### Implementation Considerations

1. **Pilot testing** - Test on small scale first
2. **Communication** - Keep stakeholders informed
3. **Training** - Ensure everyone knows new expectations
4. **Documentation** - Update policies, protocols, references
5. **Integration** - Ensure changes fit into workflow

#### Monitoring for Effectiveness

| Monitoring Method | Use When |
|-------------------|----------|
| **Audit** - Compliance with new process | Changes to procedures |
| **Surveillance** - Watch for recurrence events | High-risk changes |
| **Metrics** - Track performance measures | Quantifiable outcomes |
| **Feedback** - Frontline input | Workflow changes |

## Common RCA Pitfalls

### Pitfalls to Avoid

| Pitfall | Why It's a Problem | Prevention |
|---------|-------------------|-------------|
| **Rushing to solutions** | May not address true root causes | Complete full analysis first |
| **Focusing on individuals** | Doesn't prevent recurrence | Always ask "what system factors allowed this" |
| **Stopping too soon** | May identify proximate not root causes | Keep asking why |
| **Confirmation bias** | Seeing only what you expect | Seek disconfirming evidence |
| **Hindsight bias** | "They should have known" | Consider what was known at the time |
| **Weak solutions** | Won't prevent recurrence | Use hierarchy of solutions |

### Red Flags in RCA

Your RCA may be inadequate if:
- ✗ Root cause is "human error" or "staff failed to..."
- ✗ Solutions are "be more careful," "pay attention," or "try harder"
- ✗ Timeline doesn't show what information people had at the time
- ✗ No staff who were involved were interviewed
- ✗ Action items lack specificity or accountability

## RCA Documentation

### Essential Elements

A complete RCA should include:

1. **Executive summary** - Brief overview for leadership
2. **Event description** - What happened
3. **Timeline** - Chronology of events
4. **Methodology** - Tools used, team members
5. **Findings** - Root and contributing causes
6. **Action plan** - Specific, measurable actions with timelines
7. **Measurement plan** - How effectiveness will be assessed

### Writing Clear RCA Summaries

**Formula:** [Problem] occurred due to [root cause], resulting in [consequences]. We will [actions] to prevent recurrence.

**Example:**
"A wrong-site surgery occurred due to lack of standardized site verification protocol, resulting in patient harm and extended hospitalization. We will implement a mandatory pre-procedure checklist and timeout process to prevent recurrence."
      `,
      learningObjectives: [
        'Plan and conduct a comprehensive RCA process',
        'Interview witnesses effectively using non-punitive techniques',
        'Develop strong, sustainable solutions that address root causes'
      ],
      keyTerms: {
        'Root Cause': 'The fundamental underlying reason that, if addressed, would prevent the event from recurring',
        'Contributing Factor': 'A circumstance that made the event more likely but is not the fundamental cause',
        'Forcing Function': 'A design aspect that prevents an action from occurring or makes it impossible to proceed incorrectly',
        'SMART Goals': 'Specific, Measurable, Achievable, Relevant, and Time-bound objectives'
      },
      quizQuestions: [
        {
          question: 'Why is "human error" generally considered an inadequate root cause?',
          options: [
            'Human error never occurs',
            'Human error is inevitable; the question is what system factors allowed it to result in harm',
            'Human error is always someone else\'s fault',
            'It\'s acceptable to stop at human error'
          ],
          correctAnswer: 1,
          explanation: 'Human error is inevitable in any system. The purpose of RCA is to understand what system factors allowed the error to reach the patient and cause harm.'
        },
        {
          question: 'What distinguishes a "strong" solution from a "weak" solution in RCA?',
          options: [
            'Strong solutions cost more money',
            'Strong solutions address system design to make errors difficult or impossible',
            'Strong solutions involve more people',
            'Weak solutions are only for minor problems'
          ],
          correctAnswer: 1,
          explanation: 'Strong solutions involve system design changes, physical constraints, or forcing functions that make errors difficult or impossible to commit.'
        },
        {
          question: 'What is a red flag that an RCA may be inadequate?',
          options: [
            'The RCA used multiple analysis tools',
            'The RCA solutions include "be more careful" or "pay attention"',
            'The RCA interviewed frontline staff',
            'The RCA developed an action plan'
          ],
          correctAnswer: 1,
          explanation: 'Solutions like "be more careful" or "pay attention" are weak and suggest the RCA didn\'t identify true system-level root causes.'
        }
      ],
      estimatedReadTime: 16,
      prerequisites: ['root-cause-analysis:beginner']
    },
    advanced: {
      title: 'Advanced RCA Techniques',
      content: `
# Advanced Root Cause Analysis Techniques

## Beyond Basic RCA

Complex events and systems require sophisticated RCA approaches that go beyond standard tools.

## Advanced Frameworks

### 1. SEIPS-Based RCA

The **Systems Engineering Initiative for Patient Safety (SEIPS)** model provides a comprehensive framework for understanding work systems.

#### SEIPS Components

\`\`\`
Work System → Processes → Outcomes

Work System Components:
├─ Person (physical, psychological, organizational)
├─ Environment (physical, organizational)
├─ Tasks (cognitive, physical)
├─ Tools & Technology
└─ Organization (culture, structure, resources)
\`\`\`

#### Applying SEIPS to RCA

| Component | RCA Questions |
|-----------|---------------|
| **Person** | What physical, psychological, or organizational factors may have contributed? |
| **Environment** | How did the physical or organizational environment contribute? |
| **Tasks** | What task demands or design issues existed? |
| **Tools & Technology** | How did equipment or IT systems contribute? |
| **Organization** | What organizational factors (culture, structure, resources) contributed? |

### 2. AcciMap Approach

**AcciMap** analyzes events across multiple levels of sociotechnical systems.

#### AcciMap Levels

\`\`\`
Government & Regulatory Bodies
              ↓
   Regulators & Associations
              ↓
        Company Management
              ↓
    Technical Management
              ↓
    Physical Processes & Actor Activities
              ↓
         Equipment & Actor Actions
\`\`\`

#### Key Insight
Events often result from decisions made far from the point of care.

**Example:** A medication error's AcciMap might reveal:
- **Equipment level:** confusing medication labels
- **Activity level:** nurse's workload
- **Management level:** staffing decisions
- **Company level:** cost containment priorities
- **Regulatory level:** inadequate labeling requirements

### 3. Swiss Cheese Model (Reason)

**James Reason's** model visualizes how errors penetrate defenses.

#### Layers of Defense

\`\`\`
Threat
    ↓
┌───────────────────────────────────────┐
│ Organizational influences             │ ← Holes in organizational culture
├───────────────────────────────────────┤
│ Supervision                            │ ← Holes in oversight
├───────────────────────────────────────┤
│ Preconditions                         │ ← Holes in conditions (fatigue, etc.)
├───────────────────────────────────────┤
│ Unsafe acts                           │ ← Active failures
├───────────────────────────────────────┤
│ Losses (Patient harm)                 │
└───────────────────────────────────────┘
\`\`\`

#### RCA Application

For each layer, ask:
- What holes existed?
- Why were there holes?
- How can we make Swiss cheese with fewer/smaller holes?

## Cognitive Factors in RCA

### Understanding Cognitive Biases

Bias affects both the original event and the RCA analysis.

#### Biases Affecting the Event

| Bias | Description | RCA Relevance |
|------|-------------|---------------|
| **Confirmation bias** | Seeking confirming evidence | Why was disconfirming evidence missed? |
| **Availability bias** | Recent events influence judgment | Did recent similar events create false patterns? |
| **Anchoring bias** | First information overly influential | Why was initial diagnosis not reconsidered? |
| **Sunk cost fallacy** | Continuing due to prior investment | Why was a failing course continued? |
| **Premature closure** | Stopping before complete analysis | Why was the differential diagnosis incomplete? |

#### Biases Affecting the RCA

| Bias | Mitigation |
|------|------------|
| **Hindsight bias** | "They should have known" | Reconstruct what was known at the time |
| **Fundamental attribution error** | Blaming individuals | Focus on system factors |
| **Confirmation bias in RCA** | Seeing only expected causes | Seek disconfirming evidence |
| **Groupthink** | Premature consensus | Assign devil's advocate |

### Cognitive Work Analysis

Beyond understanding biases, analyze cognitive demands:

| Aspect | Questions |
|--------|-----------|
| **Decision making** | What information was available? What decisions were required? |
| **Situation awareness** | What did staff perceive/understand about the situation? |
| **Attention management** | What competing demands existed? |
| **Memory** | What had to be remembered? What could be forgotten? |

## Advanced Interviewing Techniques

### Cognitive Interview

Enhances memory retrieval by:

1. **Context reinstatement** - Help them mentally return to the environment
2. **Varied perspectives** - Ask how it would look from different angles
3. **Reverse order** - Ask them to recount events backwards
4. **Open-ended probing** - "Tell me more about..."

### Non-Punitive Interview Principles

| Do | Don't |
|----|-------|
| Express appreciation for participation | Use words like "error," "mistake," "failure" |
| Take notes | Record without permission |
| Ask for their suggestions | Interrupt or finish sentences |
| Thank them for their insights | Promise confidentiality you can't guarantee |

### Special Interview Situations

| Situation | Approach |
|-----------|----------|
| **Distressed staff member** | Defer interview, ensure support |
| **Multiple perspectives on same event** | Interview separately, then explore differences |
| **Concern about blame** | Emphasize system focus, clearly state non-punitive intent |
| **Union representation** | Allow union representative participation |

## RCA for Special Circumstances

### Near Miss RCA

Near misses offer high learning value without harm:

**Special considerations:**
- Why did defenses work this time?
- What might have allowed it to reach the patient?
- How can we make the system more robust?

**Example:** A near-miss wrong-patient procedure
- RCA question: Why did the system catch it?
- Finding: Blood transfusion verification worked
- Learning: How can we make other systems as robust?

### No-Harm Events

Events that reach the patient but cause no harm:

**Special considerations:**
- Luck vs. system design
- How to ensure next time doesn't cause harm
- Don't dismiss just because no harm occurred

### Diagnostic Error RCA

Diagnostic errors present unique RCA challenges:

**Framework:**
1. **What was the diagnosis?** (actual and final)
2. **When did it occur?** (initial diagnosis, evolving diagnosis, delayed diagnosis)
3. **Why did it occur?** (cognitive, system, or both)
4. **How can it be prevented?**

**Tools specifically for diagnostic error:**
- **Diagnostic Time-out** - Why wasn't the diagnosis reconsidered?
- **Red flag analysis** - Why were red flags missed or dismissed?
- **Specialist involvement** - Why weren't consultants involved?

## Prospective RCA

### Failure Modes and Effects Analysis (FMEA)

RCA before events occur:

**Process:**
1. **Identify process steps** - What could go wrong at each step?
2. **Identify failure modes** - What are the ways it could fail?
3. **Identify effects** - What would happen if it did fail?
4. **Score risk** - Severity × Occurrence × Detection
5. **Prioritize** - Address highest risks first

### RCA vs. FMEA

| Aspect | RCA | FMEA |
|--------|-----|------|
| Timing | After event | Before event |
| Focus | What happened | What could happen |
| Scope | Specific event | Entire process |
| Question | Why did it happen? | How might it fail? |

## Advanced Solutions

### System Redesign Principles

### Leverage Points in Systems

| Leverage Point | Example | Power |
|----------------|---------|-------|
| **Paradigm shift** | From blame to safety culture | Highest |
| **System goal** | From throughput to safety | High |
| **Information flow** | Real-time data to frontlines | Moderate-High |
| **Rules/incentives** | Safety reporting rewards | Moderate |
| **Feedback loops** | Rapid response to issues | Moderate |
| **Material constraints** | Physical limitations | Low-Moderate |
| **Parameters** | Staffing ratios, resource levels | Low |

### Designing for Resilience

Resilient systems have:
- **Redundancy** - Backup systems and processes
- **Flexibility** - Ability to adapt to unexpected situations
- **Monitoring** - Awareness of system state
- **Response capability** - Resources to respond to issues

### Cultural Change Solutions

| Cultural Change Strategy | RCA Application |
|--------------------------|-----------------|
| **Leadership modeling** | Leaders participate in RCA, model systems thinking |
| **Storytelling** | Share RCA learnings, what changed as a result |
| **Celebrating reporting** | Recognize those who report near misses |
| **Psychological safety** - Create safe spaces for dialogue |

## Measuring RCA Effectiveness

### Metrics for RCA Programs

| Metric | What It Measures |
|--------|------------------|
| **RCA completion rate** | % of events with completed RCA |
| **Implementation rate** | % of action items completed |
| **Recurrence rate** | % of similar events after RCA |
| **Reporting culture** | Volume of event reports |
| **Staff perception** | Safety culture survey results |

### Leading vs. Lagging Indicators

| Type | Examples | Use for |
|------|----------|---------|
| **Leading** | RCA completion, action implementation | Early warning |
| **Lagging** | Recurrence, harm events | Final outcomes |

Track both to assess RCA program health.
      `,
      learningObjectives: [
        'Apply advanced frameworks like SEIPS and AcciMap to complex events',
        'Identify and address cognitive biases in both events and RCA analysis',
        'Design system-level solutions that create resilience'
      ],
      keyTerms: {
        'SEIPS Model': 'The Systems Engineering Initiative for Patient Safety model, a comprehensive framework for analyzing healthcare work systems',
        'AcciMap': 'A method for analyzing events across multiple levels of sociotechnical systems, from government to frontline actions',
        'Swiss Cheese Model': 'James Reason\'s model illustrating how errors pass through holes in multiple layers of defense',
        'Cognitive Bias': 'Systematic patterns of deviation from rationality in human judgment and decision-making'
      },
      quizQuestions: [
        {
          question: 'What does the SEIPS model add to traditional RCA approaches?',
          options: [
            'SEIPS is only for research purposes',
            'A systematic framework for analyzing all components of the work system that contribute to events',
            'SEIPS replaces the need for timeline analysis',
            'SEIPS is only for technical equipment problems'
          ],
          correctAnswer: 1,
          explanation: 'SEIPS provides a comprehensive framework for analyzing all components of the work system (person, environment, tasks, tools, organization) that may have contributed to an event.'
        },
        {
          question: 'What is hindsight bias in RCA and why is it problematic?',
          options: [
            'Looking back at historical data',
            'Judging past decisions with the benefit of knowing the outcome, leading to unfair conclusions',
            'A bias toward looking at recent events only',
            'A bias toward senior team members'
          ],
          correctAnswer: 1,
          explanation: 'Hindsight bias is the tendency to judge past decisions with the benefit of knowing the outcome, leading to unfair conclusions about what people should have known or done.'
        },
        {
          question: 'How does prospective RCA (FMEA) differ from traditional RCA?',
          options: [
            'FMEA is conducted before events occur to identify potential failures',
            'FMEA is only for equipment failures',
            'FMEA is conducted after an event occurs',
            'There is no difference between the approaches'
          ],
          correctAnswer: 0,
          explanation: 'FMEA (Failure Modes and Effects Analysis) is a prospective approach that identifies potential failure modes before they occur, whereas traditional RCA reacts to events that have already happened.'
        }
      ],
      estimatedReadTime: 18,
      prerequisites: ['root-cause-analysis:intermediate']
    },
    expert: {
      title: 'Expert-Level RCA Practice',
      content: `
# Expert-Level Root Cause Analysis Practice

## The RCA Expert Mindset

### Cognitive Frames for Expert Analysis

| Expert Frame | Description | Application |
|--------------|-------------|-------------|
| **Systems thinking** | Understanding relationships, feedback loops, emergence | Look for system-level patterns, not isolated failures |
| **Curiosity over judgment** | Wondering rather than concluding | Maintain openness to multiple explanations |
| **Provisional conclusions** | Hypotheses to be tested | Treat causes as tentative until validated |
| **Comfort with ambiguity** | Accepting complexity and uncertainty | Resist oversimplification |
| **Learning orientation** | Every event is an opportunity | Focus on system improvement, not case closure |

## Advanced Framework Integration

### Joint Commission Framework

The Joint Commission requires RCAs for sentinel events and specifies:

#### Root Cause Categories (per Joint Commission)

| Category | Examples |
|----------|----------|
| **Human Resources** | Staffing, competency, training, supervision |
| **Information Management** | Communication, documentation, data availability |
| **Physical Environment** | Layout, equipment, supplies |
| **Leadership** | Priorities, culture, decision-making |
| **Patient Assessment** | Protocols, reassessment, risk identification |
| **Continuum of Care** | Handoffs, transitions, follow-up |

#### Joint Commission Requirements

A thorough RCA must include:
- Clear explanation of what happened
- Causal factors identified
- Root causes determined
- Risk reduction strategies developed
- Implementation plan with measurement

### WHO Surgical Safety Framework

For surgical events, the WHO framework adds:

| Domain | Elements to Consider |
|--------|---------------------|
| **Safe surgical teams** | Team composition, communication, culture |
| **Safe surgical facilities** | Infrastructure, equipment, supplies |
| **Safe surgical procedures** | Protocols, checklists, guidelines |
| **Safe surgical outcomes** | Surveillance, feedback, learning |

### VA National Center for Patient Safety (NCPS) RCA

The VA's RCA approach emphasizes:

1. **Use of a trained facilitator**
2. **Shorter time to completion** (target: 45 days)
3. **Formal causation assessment** - How certain are we?
4. **Strength of interventions** - Categorizing solution strength
5. **Action tracking** - Formal monitoring of implementation

## Specialized RCA Applications

### RCA for Diagnostic Error

### DIAGNOSTIC ERROR FRAMEWORKS

**National Academy of Medicine Framework:**
1. **Work system factors** (tasks, technologies, organizations)
2. **Cognitive factors** (biases, knowledge gaps)
3. **Both systems and cognition** (how they interact)

**SaferDX Instrument:**
- Was the diagnosis delayed or wrong?
- What was the harm?
- What contributed? (process, patient, system, provider)

**RCA Special Considerations:**
- Multiple decision points over time
- Multiple providers often involved
- Feedback loops often weak (no natural mechanism to learn the diagnosis was wrong)
- Outcome may be unknown to diagnostician

### RCA for Opioid-Related Harm

**Multi-level Analysis:**

| Level | Typical Findings | Solutions |
|-------|------------------|-----------|
| **Prescribing** | Lack of assessment, high doses, combinations | PDMP integration, guideline prompts |
| **Pharmacy** | No red flag alerts, inadequate counseling | Decision support, standardized counseling |
| **Administration** | Lack of monitoring, diversion | Automated dispensing, surveillance |
| **Patient factors** | History of substance use, mental health | Screening, treatment referral |
| **System factors** | No pain management framework, fragmented care | Multidisciplinary approach, care coordination |

### RCA for Disparities and Equity Issues

**Health Equity RCA Framework:**

1. **Was there a disparity?** - Was care different across groups?
2. **Why did the disparity occur?** - Root causes of inequitable care
3. **How do we eliminate it?** - Equitable solutions

**Categories to include:**
- **Language and communication** - Language access, health literacy
- **Cultural factors** - Cultural competence, respect
- **Social determinants** - Housing, food security, transportation
- **Structural factors** - Racism, bias, policy barriers
- **Trust** - Historical and institutional factors

### RCA for Cybersecurity and IT Events

**Health IT Safety RCA Framework:**

| Component | Questions |
|-----------|-----------|
| **Software** - Bugs, updates, configuration, usability |
| **Hardware** - Devices, connectivity, wear and tear |
| **Network** - Bandwidth, reliability, security |
| **Data** - Quality, interoperability, completeness |
| **Human factors** - Training, workflow, cognitive load |
| **Organization** - Support, governance, resources |

## Advanced Causal Analysis Methods

### Bayesian Networks

Probabilistic graphical models representing causal relationships:

**Advantages:**
- Handles uncertainty explicitly
- Shows relationships between multiple variables
- Allows calculation of probabilities
- Can incorporate new data to update understanding

**Application to RCA:**
1. Develop causal network of potential causes
2. Assign initial probabilities based on evidence
3. Update probabilities as new information emerges
4. Identify most probable root causes

### Causal Loop Diagrams

Shows feedback and circular causality:

**Example: Staffing and Experience**
\`\`\`
Staffing levels
     ↓           ↖
Experience gap   |
     ↓           |
Training burden   |
     ↓           |
Turnover          |
     ↓           |
Staffing levels
\`\`\`

**Insight:** This reinforcing loop explains why understaffing becomes self-perpetuating.

### System Dynamics Modeling

Computer simulation of complex systems:

**Use in RCA:**
- Test "what if" scenarios before implementation
- Understand time delays in cause-effect
- Identify unintended consequences
- Predict system behavior

## Organizational RCA Systems

### Building an RCA Program

### Components of a Mature RCA Program

1. **Standardized process**
   - Consistent methodology across organization
   - Templates and tools
   - Training for facilitators

2. **Governance structure**
   - RCA committee oversight
   - Standardized triggering criteria
   - Approval workflow

3. **Learning system**
   - RCA repository and database
   - Cross-case analysis for patterns
   - Knowledge sharing mechanisms

4. **Action tracking**
   - Implementation monitoring
   - Accountability for completion
   - Effectiveness assessment

5. **Integration**
   - Link to quality improvement
   - Link to risk management
   - Link to patient safety programs

### RCA Quality Assessment

**Criteria for RCA Quality:**

| Dimension | Quality Indicators |
|-----------|-------------------|
| **Completeness** | All tools used, all perspectives included |
| **Depth** | Root causes reached, not proximate causes |
| **Evidence** | Findings supported by data and interviews |
| **Solutions** | Strong, specific, measurable actions |
| **Learning** | Clear insights for system improvement |

### Cross-Case Learning

**Pattern Recognition:**

| Analysis Type | Purpose |
|---------------|---------|
| **Event pattern analysis** | Similar events across units/time |
| **Cause pattern analysis** | Recurring root causes |
| **Solution pattern analysis** | What solutions are effective |
| **Unit comparison** | Why some units have fewer events |

## The Limits of RCA

### What RCA Cannot Do

| Limitation | Mitigation |
|------------|------------|
| **Cannot predict the future** | Complement with prospective analysis (FMEA) |
| **Cannot fix everything** | Prioritize based on risk and impact |
| **Cannot overcome culture alone** | Culture change requires leadership commitment |
| **Cannot compensate for inadequate resources** | Resource allocation is a leadership decision |

### When RCA Is Not the Answer

| Situation | Better Approach |
|-----------|-----------------|
| **Routine variation** | Statistical process control |
| **Resource constraints** | Resource allocation decisions |
| **Knowledge gaps** - Not a failure, just unknown | Evidence-based practice, not RCA |
| **Expected complications** | Informed consent, patient counseling |

## Expert Wisdom

### Philosophical Considerations

1. **Every RCA is a story**
   - A narrative about what happened and why
   - Make the story coherent and evidence-based

2. **Perfect is the enemy of good**
   - A complete RCA is better than a perfect RCA that never finishes
   - Aim for thoroughness, not perfection

3. **The work is never done**
   - Systems are always changing
   - New risks emerge continuously
   - RCA is an ongoing process, not a project

4. **Humans are not the enemy**
   - Humans are also the heroes who prevent most errors
   - Design systems that recognize human strengths and limitations

5. **Transparency builds trust**
   - Share RCA findings openly
   - Admit what we don't know
   - Learn together

### The Journey to Mastery

Mastery in RCA involves:

| Skill | Development Path |
|-------|------------------|
| **Tool proficiency** | Learn, apply, teach multiple tools |
| **Facilitation** | Practice with diverse teams and situations |
| **Systems thinking** | Study systems science, apply to events |
| **Pattern recognition** | Participate in many RCAs, maintain database |
| **Solution design** - Study human factors, design theory |
| **Communication** | Develop skill translating technical findings |

### The RCA Expert as Teacher

Expert practitioners:
- **Teach RCA methodology** to others
- **Mentor new facilitators**
- **Share learnings** across the organization
- **Build organizational capacity** for RCA
- **Contribute to the field** through publication and presentation

## The Ultimate Test

**An RCA is successful if and only if:**
- ✗ A comprehensive report was produced
- ✗ Leadership approved the findings
- ✗ Action items were documented
- ✓ The system was changed
- ✓ Similar events are prevented
- ✓ Organizational learning occurred

The measure of RCA effectiveness is **not the document produced** but the **improvement achieved**.

As an RCA expert, your role is to ensure every RCA leads to real, sustained system improvement that protects patients from harm.
      `,
      learningObjectives: [
        'Design and lead organizational RCA programs',
        'Apply specialized RCA frameworks for different types of events',
        'Evaluate and improve RCA quality across an organization'
      ],
      keyTerms: {
        'Health Equity RCA': 'Root cause analysis that examines and addresses disparities in care across different patient populations',
        'Bayesian Network': 'A probabilistic graphical model that represents a set of variables and their conditional dependencies',
        'Causal Loop Diagram': 'A diagram that shows causal relationships and feedback loops in a system',
        'System Dynamics': 'A methodology for studying and managing complex feedback systems through computer simulation'
      },
      quizQuestions: [
        {
          question: 'What distinguishes health equity RCA from standard RCA?',
          options: [
            'It uses different tools',
            'It explicitly examines disparities across patient groups and includes social determinants and structural factors',
            'It is only required by law',
            'There is no difference'
          ],
          correctAnswer: 1,
          explanation: 'Health equity RCA explicitly examines whether care differed across demographic groups and considers social determinants, structural factors, and systemic bias as potential causes.'
        },
        {
          question: 'What is the ultimate test of whether an RCA was successful?',
          options: [
            'Completion of the RCA report within 45 days',
            'Leadership approval of the RCA findings',
            'Real system changes that prevent similar events from recurring',
            'The number of action items identified'
          ],
          correctAnswer: 2,
          explanation: 'The ultimate measure of RCA success is not documentation but actual system changes that prevent similar events from recurring.'
        },
        {
          question: 'Why is pattern recognition across multiple RCAs important for an expert practitioner?',
          options: [
            'It allows for faster completion of individual RCAs',
            'It identifies recurring root causes and systemic issues that require organization-wide solutions',
            'It satisfies regulatory requirements',
            'It is not important for RCA practice'
          ],
          correctAnswer: 1,
          explanation: 'Pattern recognition across RCAs reveals systemic issues that cross units and events, pointing to organization-wide solutions that address fundamental system design problems.'
        }
      ],
      estimatedReadTime: 22,
      prerequisites: ['root-cause-analysis:advanced']
    }
  }
};
