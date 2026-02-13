import { EducationalContent } from '../types';

export const fishboneContent: EducationalContent = {
  id: 'fishbone',
  title: 'Fishbone Diagrams',
  category: 'quality-improvement',
  subcategory: 'QI-methodology',
  description: 'Using fishbone (Ishikawa) diagrams for root cause analysis and problem exploration',
  levels: {
    novice: {
      title: 'Introduction to Fishbone Diagrams',
      content: `
# Introduction to Fishbone Diagrams

## What is a Fishbone Diagram?

A **fishbone diagram** (also called an Ishikawa diagram or cause-and-effect diagram) is a visual tool used to explore and display the possible causes of a specific problem or quality issue.

## Why is it Shaped Like a Fish?

The diagram gets its name from its appearance:
- The **fish head** represents the problem or effect
- The **fish spine** is the main line connecting to the problem
- The **ribs** branching off the spine are categories of causes
- The **small bones** are specific causes within each category

## Common Uses in Healthcare

Fishbone diagrams help teams investigate:
- Medication errors
- Patient falls
- Delayed treatments
- Infection outbreaks
- Equipment failures
- Process delays

## The Basic Structure

\`\`\`
                           Problem
                          (Effect)
                              ↑
                              │
    ┌───────────┬─────────────┼─────────────┬───────────┐
    │           │             │             │           │
  Category   Category     Category     Category   Category
    │           │             │             │           │
   Cause      Cause        Cause        Cause      Cause
    │           │             │             │           │
   Cause      Cause        Cause        Cause      Cause
\`\`\`

## Common Category Frameworks

### 5 Ms (Manufacturing)
- **Manpower** - People involved
- **Machine** - Equipment and tools
- **Material** - Supplies and resources
- **Method** - Processes and procedures
- **Mother Nature** - Environment

### 4 Ps (Healthcare)
- **People** - Staff and patients
- **Policies** - Rules and procedures
- **Programs** - Systems and workflows
- **Plant** - Physical environment

### 5 Ss (Service)
- **Surroundings** - Environment
- **Suppliers** - External partners
- **Systems** - Processes
- **Skills** - Staff capabilities
- **Safety** - Safety measures

## A Simple Example

**Problem: Medication Error**

\`\`\`
                    Medication Error
                           ↑
          ┌────────────────┼────────────────┐
          │                │                │
       People           Policy         Environment
          │                │                │
     Distractions     Unclear          Poor lighting
          │          guidelines
   Staff shortage
\`\`\`

## Key Benefits

1. **Visual exploration** - See all potential causes at once
2. **Team engagement** - Everyone contributes perspectives
3. **Comprehensive thinking** - Ensures multiple categories are considered
4. **Documentation** - Creates a record of your analysis

## When to Use a Fishbone

- Investigating an adverse event
- Analyzing performance gaps
- Brainstorming improvement opportunities
- Understanding a complex problem
- Preparing for root cause analysis

## How to Get Started

1. Write the problem clearly in the "fish head"
2. Choose category categories that fit your situation
3. Brainstorm causes for each category
4. Ask "Why?" repeatedly to dig deeper
5. Identify the most likely root causes to address

## Quick Tip

The power of the fishbone diagram is in the **discussion it creates**, not just the finished diagram. The process of creating it with your team is often more valuable than the final product.
      `,
      learningObjectives: [
        'Define what a fishbone diagram is and its purpose',
        'Identify the key components of a fishbone diagram',
        'Recognize common category frameworks used in healthcare'
      ],
      keyTerms: {
        'Fishbone Diagram': 'A visual tool for organizing and displaying potential causes of a problem, also called an Ishikawa or cause-and-effect diagram',
        'Effect': 'The problem or outcome being analyzed, shown at the "fish head" of the diagram',
        'Cause Categories': 'The main groupings (like People, Process, Equipment) that organize potential causes',
        'Ishikawa Diagram': 'Another name for the fishbone diagram, named after its creator Kaoru Ishikawa'
      },
      quizQuestions: [
        {
          question: 'What is the primary purpose of a fishbone diagram?',
          options: [
            'To track patient outcomes over time',
            'To explore and display potential causes of a problem',
            'To document staff schedules',
            'To assign blame for errors'
          ],
          correctAnswer: 1,
          explanation: 'Fishbone diagrams are tools for exploring and organizing the potential causes of a specific problem or effect.'
        },
        {
          question: 'In a fishbone diagram, the "fish head" represents:',
          options: [
            'The most important cause',
            'The problem or effect being analyzed',
            'The team\'s solution',
            'The timeline of events'
          ],
          correctAnswer: 1,
          explanation: 'The fish head contains the problem statement or effect that you are trying to understand.'
        },
        {
          question: 'Which framework is commonly used for healthcare fishbone diagrams?',
          options: [
            'The 3 Rs (Reading, Riting, Rithmetic)',
            'The 4 Ps (People, Policies, Programs, Plant)',
            'The 6 Cs (Cost, Quality, Time, Scope, Risk, Value)',
            'The 2 Ds (Diagnosis, Drugs)'
          ],
          correctAnswer: 1,
          explanation: 'The 4 Ps framework (People, Policies, Programs, Plant) is commonly used in healthcare fishbone diagrams.'
        }
      ],
      estimatedReadTime: 8,
      prerequisites: []
    },
    beginner: {
      title: 'Creating Your First Fishbone',
      content: `
# Creating Your First Fishbone Diagram

## Preparation Steps

Before creating your fishbone diagram, prepare for success:

### 1. Assemble the Right Team
- Include people with direct knowledge of the process
- Invite diverse perspectives (different roles, departments)
- Consider including a facilitator
- Aim for 4-8 participants

### 2. Define the Problem Clearly
- Be specific about what you're analyzing
- Focus on one problem at a time
- Write a clear problem statement

**Good problem statements:**
- "30-day readmission rate for heart failure patients increased from 15% to 22%"
- "Medication errors in ICU increased from 2 to 8 per month"

**Poor problem statements:**
- "Quality is poor"
- "Patients are unhappy"

### 3. Gather Materials
- Large paper or whiteboard
- Sticky notes (for flexibility)
- Markers in different colors
- Tape (if working on a wall)

## Step-by-Step Creation Process

### Step 1: Draw the Basic Structure

1. Draw a horizontal line across your paper/board
2. At the right end, draw a box and write your problem
3. Draw diagonal lines branching off the spine
4. Write category names at the end of each diagonal

\`\`\`
              Problem Statement
                      ↑
        ┌─────────────┼─────────────┐
        │             │             │
     Category 1   Category 2    Category 3
\`\`\`

### Step 2: Choose Your Categories

Select categories that fit your situation:

| For Clinical Problems | For Administrative Issues |
|-----------------------|---------------------------|
| People                | People                    |
| Policies              | Process                   |
| Programs              | Technology                |
| Plant (Environment)   | Equipment                 |
|                       | Communication             |

### Step 3: Brainstorm Causes for Each Category

Work through each category systematically:

**Rules for brainstorming:**
- Generate as many ideas as possible
- No criticism or evaluation during brainstorming
- Build on others' ideas
- All ideas are welcome

**Tips:**
- Use "Why?" to dig deeper
- Ask "What else?" to find more causes
- Be specific
- Consider both obvious and less obvious causes

### Step 4: Organize and Refine

1. Group related causes together
2. Identify causes that appear in multiple categories
3. Use the "5 Whys" technique to drill down
4. Look for relationships between causes

### Step 5: Identify Likely Root Causes

Discuss which causes:
- Are most likely to contribute to the problem
- Are actionable (you can do something about them)
- Have the biggest potential impact
- Should be investigated further

## Sample Fishbone Creation

**Problem: Patient Falls on the Medical Unit**

\`\`\`
                        Patient Falls
                            ↑
        ┌───────────────────┼───────────────────┐
        │                   │                   │
    People              Environment          Process
        │                   │                   │
   Staff ratio           Lighting        Assessment
   - Night shift         - Dim zones     - Inconsistent
   - Gaps in service     - No motion     - Not on admission
   - New hires           sensors
   Patient factors       Equipment
   - Confusion           - Bed alarms
   - Mobility issues     - Chair alarms
                          - Not working
                          - Poor batteries
\`\`\`

## Common Mistakes to Avoid

| Mistake | Why It's a Problem | Solution |
|---------|-------------------|----------|
| Starting with a solution in mind | Limits exploration of all causes | Stay open to all possibilities |
| Making categories too rigid | Some causes don't fit neatly | Add categories or combine them |
| Only brainstorming alone | Misses diverse perspectives | Always involve a team |
| Stopping at surface causes | Doesn't address root issues | Keep asking "Why?" |
| Trying to solve while brainstorming | Shifts focus from understanding | Separate exploration from solution |

## After Creating Your Fishbone

1. **Document** - Take a picture or copy the diagram
2. **Prioritize** - Identify which causes to investigate first
3. **Validate** - Collect data to confirm which causes are real contributors
4. **Act** - Develop interventions for the most important causes
5. **Review** - Revisit the fishbone if new information emerges

## Practice Exercise

Choose a problem from your work and create a simple fishbone:

1. Write a clear problem statement
2. Choose 3-4 appropriate categories
3. Brainstorm at least 3 causes for each category
4. Identify which causes warrant further investigation
      `,
      learningObjectives: [
        'Facilitate a fishbone diagram creation session',
        'Write clear, specific problem statements for analysis',
        'Apply brainstorming techniques to generate comprehensive causes'
      ],
      keyTerms: {
        'Problem Statement': 'A clear, specific description of the issue being analyzed; the foundation of an effective fishbone diagram',
        'Brainstorming': 'A technique for generating ideas rapidly without criticism or evaluation',
        '5 Whys': 'A technique of asking "why?" repeatedly to dig deeper into root causes',
        'Facilitator': 'A person who guides a group discussion process without contributing content'
      },
      quizQuestions: [
        {
          question: 'Why is it important to involve a team when creating a fishbone diagram?',
          options: [
            'It\'s required by regulatory agencies',
            'Multiple perspectives provide a more complete picture of potential causes',
            'Individuals cannot create fishbone diagrams',
            'It makes the process take longer'
          ],
          correctAnswer: 1,
          explanation: 'Team members with different experiences and perspectives will identify different potential causes, creating a more comprehensive analysis.'
        },
        {
          question: 'Which is a better problem statement for a fishbone diagram?',
          options: [
            '"Poor communication"',
            '"Delayed response to call lights increased from average of 3 minutes to 12 minutes over the past 3 months"',
            '"Staff are not doing their jobs"',
            '"Night shift problems"'
          ],
          correctAnswer: 1,
          explanation: 'A good problem statement is specific, measurable, and describes the issue without assigning blame.'
        },
        {
          question: 'What is the purpose of the "5 Whys" technique when creating a fishbone?',
          options: [
            'To identify 5 people who are responsible',
            'To dig deeper beyond surface-level causes to find root causes',
            'To create 5 different fishbone diagrams',
            'To satisfy documentation requirements'
          ],
          correctAnswer: 1,
          explanation: 'The "5 Whys" technique helps move beyond obvious causes to uncover deeper root causes by repeatedly asking why a problem exists.'
        }
      ],
      estimatedReadTime: 12,
      prerequisites: ['fishbone:novice']
    },
    intermediate: {
      title: 'Advanced Fishbone Techniques',
      content: `
# Advanced Fishbone Techniques

## Deepening Your Analysis

Once you've mastered the basic fishbone, these techniques will help you extract more value from the process.

## Refined Cause Identification

### The 5 Whys in Detail

The "5 Whys" technique helps you drill down to root causes:

**Example: Delayed Antibiotic Administration**

| Why Level | Question | Answer |
|-----------|----------|--------|
| 1st Why | Why were antibiotics delayed? | Provider didn't order them promptly |
| 2nd Why | Why didn't the provider order promptly? | Nurse didn't notify provider of sepsis screen |
| 3rd Why | Why didn't the nurse notify the provider? | Nurse didn't see the sepsis alert |
| 4th Why | Why didn't the nurse see the alert? | Alerts only appear in one tab not routinely checked |
| 5th Why | Why are alerts in an unused tab? | The EHR configuration was never updated after go-live |

**Root cause:** EHR configuration issue, not individual performance

### Process Mapping with Fishbone

Combine fishbone diagrams with process mapping:

1. **Map the process** first to understand flow
2. **Identify failure points** in the process
3. **Use fishbone** to analyze why failures occur at specific points
4. **Connect causes** to specific process steps

### Sub-Causes and Nested Bones

Add more detail to your fishbone with sub-causes:

\`\`\`
                Problem
                   ↑
                   │
    Category: Staff
                   │
          ┌────────┴────────┐
          │                 │
    Staffing Levels    Training
          │                 │
    ┌─────┴─────┐     ┌─────┴─────┐
    │           │     │           │
  Day    Night   New    Ongoing
  shift  shift  hire   education
\`\`\`

## Specialized Fishbone Variants

### Time-Based Fishbone

Organize causes by when they occur in a process:

| Timing Stage | Typical Causes |
|--------------|----------------|
| Pre-process | Scheduling, preparation, planning |
| During process | Execution, resources, communication |
| Post-process | Documentation, follow-up, handoff |

### Hierarchical Fishbone

For complex problems, create layered diagrams:

\`\`\`
Level 1: Main problem and primary categories
    ↓
Level 2: Each category expanded into its own fishbone
    ↓
Level 3: Detailed sub-causes for each secondary cause
\`\`\`

### Reverse Fishbone

Start with the desired outcome and work backward:

\`\`\`
                   Desired Outcome
                          ↑
        ┌─────────────────┼─────────────────┐
        │                 │                 │
    Enablers          Resources          Processes
        │                 │                 │
   What must exist   What we need     How we'll do it
   for success       to succeed       to succeed
\`\`\`

## Quantitative Fishbone Analysis

Transform qualitative causes into quantitative priorities:

### Voting Methods

1. **Dot voting** - Team members place dots on causes they think are most important
2. **Multi-voting** - Ranked voting to narrow down causes
3. **Weighted scoring** - Rate causes on impact and feasibility

### Prioritization Matrix

After brainstorming, score each cause:

| Cause | Impact (1-5) | Feasibility (1-5) | Confidence (1-5) | Total |
|-------|--------------|-------------------|------------------|-------|
| Cause A | 5 | 3 | 4 | 12 |
| Cause B | 4 | 5 | 3 | 12 |
| Cause C | 2 | 5 | 5 | 12 |

*Higher scores indicate higher priority for investigation*

### Data-Driven Fishbone

Combine brainstorming with existing data:

1. **Review data** before the fishbone session
2. **Share key findings** with participants
3. **Focus brainstorming** on areas where data suggests issues
4. **Validate assumptions** with data after brainstorming

## Integration with Root Cause Analysis

### Fishbone to RCA Framework

| RCA Tool | Relationship to Fishbone |
|----------|--------------------------|
| Five Whys | Detailed exploration of specific causes |
| Timeline/SNIC | Shows when causes occurred |
| Process Flow | Shows where causes occur in workflow |
| Change Analysis | Identifies what changed that may be a cause |

### Combining Tools Effectively

\`\`\`
Event Occurs
    ↓
Timeline Analysis (What happened and when)
    ↓
Fishbone Diagram (Why might it have happened)
    ↓
Five Whys on Top Causes (Drilling deeper)
    ↓
Data Validation (Confirming actual causes)
    ↓
Solutions Development
\`\`\`

## Fishbone for Prevention (Prospective Analysis)

Use fishbone before problems occur:

### Failure Modes and Effects Analysis (FMEA) + Fishbone

1. **Identify process steps** in a workflow
2. **Brainstand potential failures** using fishbone
3. **Rate severity and probability** of each failure
4. **Design interventions** for high-priority causes

### Pre-Mortem Fishbone

Before implementing a change, ask:
- "What could cause this to fail?"
- Create a fishbone of potential barriers
- Design preventive measures for each cause

## Facilitation Techniques for Advanced Fishbone

### Managing Group Dynamics

| Challenge | Technique |
|-----------|-----------|
| Dominating voices | Round-robin brainstorming |
| Quiet participants | Anonymous idea generation |
| Groupthink | Devil's advocate assignment |
| Jumping to solutions | "Solution-free zone" rule |

### Virtual Fishbone Sessions

For remote or hybrid teams:
- Use collaborative whiteboard tools (Miro, Mural)
- Create sticky notes digitally
- Use breakout rooms for category brainstorming
- Share screens for real-time collaboration

## Documentation and Storage

### Fishbone Templates

Create standard templates for common problems:
- Medication errors
- Falls
- Pressure injuries
- Readmissions
- CAUTI
- CLABSI

### Knowledge Management

Store fishbones for:
- Future reference when similar problems occur
- Training new staff on common issues
- Building institutional knowledge
- Analyzing trends over time
      `,
      learningObjectives: [
        'Apply the 5 Whys technique to identify root causes',
        'Integrate fishbone diagrams with other QI tools',
        'Use quantitative methods to prioritize causes'
      ],
      keyTerms: {
        '5 Whys Technique': 'A systematic method of asking "why?" repeatedly to drill down from symptoms to root causes',
        'Process Mapping': 'Creating a visual representation of the steps in a workflow to understand how work happens',
        'Failure Modes and Effects Analysis (FMEA)': 'A prospective method to identify potential failures in a process before they occur',
        'Pre-Mortem': 'A technique used before implementation to identify potential causes of failure'
      },
      quizQuestions: [
        {
          question: 'What is the purpose of applying the "5 Whys" technique to a cause from your fishbone diagram?',
          options: [
            'To assign blame to 5 different people',
            'To drill down from surface-level causes to root causes',
            'To create 5 different solutions',
            'To satisfy documentation requirements'
          ],
          correctAnswer: 1,
          explanation: 'The 5 Whys technique helps you move beyond obvious causes to discover deeper root causes that, if addressed, would prevent the problem.'
        },
        {
          question: 'How can a fishbone diagram be used prospectively before a problem occurs?',
          options: [
            'Fishbone can only be used after problems happen',
            'To brainstorm potential failure causes as part of FMEA or pre-mortem analysis',
            'To predict exactly what will go wrong',
            'It cannot be used prospectively'
          ],
          correctAnswer: 1,
          explanation: 'Prospective fishbone analysis helps identify potential failure points before implementation, allowing teams to design preventive measures.'
        },
        {
          question: 'When combining fishbone with other RCA tools, what is the typical sequence?',
          options: [
            'Fishbone alone is sufficient for all analyses',
            'Fishbone → Timeline → Five Whys → Data Validation',
            'Start with Five Whys, then use fishbone',
            'Tools should never be combined'
          ],
          correctAnswer: 1,
          explanation: 'A typical sequence starts with understanding what happened (timeline), then exploring why (fishbone), drilling deeper (Five Whys), and confirming with data.'
        }
      ],
      estimatedReadTime: 14,
      prerequisites: ['fishbone:beginner']
    },
    advanced: {
      title: 'Fishbone for Complex Systems',
      content: `
# Fishbone Diagrams for Complex Systems

## Complexity in Healthcare

Modern healthcare systems are characterized by:
- Multiple interacting components
- Non-linear relationships
- Emergent properties
- Adaptive behaviors

Traditional fishbone diagrams must evolve to address this complexity.

## Systems-Thinking Fishbone

### Beyond Linear Cause-Effect

Traditional fishbone assumes linear cause-and-effect relationships:
\`\`\`
Cause A → Cause B → Cause C → Problem
\`\`\`

Complex systems have:
- **Circular causality** - A causes B, B causes A
- **Multiple pathways** - Many roads to the same outcome
- **Threshold effects** - Small changes have big effects at tipping points
- **Emergence** - System properties not predictable from parts

### Systems-Aware Fishbone Modifications

1. **Add feedback loops**
   - Identify causes that both influence and are influenced by the problem
   - Show reinforcing or balancing feedback

2. **Include time delays**
   - Note causes whose effects are delayed
   - Consider temporal dynamics

3. **Map interactions**
   - Show how causes within and across categories interact
   - Identify leverage points

### Causal Loop Diagrams + Fishbone

Combine tools for complex problems:

\`\`\`
Fishbone: Comprehensive list of potential causes
         ↓
Identify key causes that form feedback loops
         ↓
Create causal loop diagram of dynamic relationships
         ↓
Test understanding through simulation or experimentation
\`\`\`

## Multi-Level Fishbone Analysis

### Individual, Team, and System Levels

Expand your fishbone across levels:

| Level | Focus | Example Causes |
|-------|-------|----------------|
| Individual | Knowledge, skills, fatigue | Training, competency, staffing |
| Team | Communication, coordination | Handoffs, teamwork, culture |
| Organization | Policies, resources, leadership | Protocols, equipment, priorities |
| Environment | Physical layout, external factors | Unit design, community resources |

### Example: Multi-Level Falls Analysis

**Individual Level:**
- Patient: Confusion, mobility, toileting needs
- Staff: Competency, fatigue, awareness

**Team Level:**
- Communication during handoffs
- Response to call lights
- Teamwork in assisting patients

**Organization Level:**
- Staffing ratios
- Scheduling practices
- Equipment availability and maintenance

**Environment Level:**
- Unit layout
- Lighting
- Flooring materials
- Bathroom accessibility

## Cross-Functional Fishbone

### Breaking Down Silos

Many problems span departments and functions:

**Example: Hospital-Acquired Infections**

| Department | Contributions to Fishbone |
|------------|---------------------------|
| Nursing | Hand hygiene, PPE use, device care |
| Medicine | Antibiotic prescribing, device decisions |
| Facilities | Cleaning protocols, HVAC, water systems |
| Pharmacy | Antibiotic availability, sterile compounding |
| Lab | Turnaround time, surveillance cultures |
| Administration | Resource allocation, priorities, culture |

### Cross-Functional Session Design

1. **Pre-work**: Each department identifies potential causes
2. **Session**: Share and integrate across departments
3. **Synthesis**: Create integrated fishbone showing cross-cutting causes
4. **Action**: Develop cross-functional solutions

## Fishbone for Sentinel Events

### Comprehensive RCA Framework

For sentinel events, the fishbone is part of a broader analysis:

\`\`\`
Sentinel Event
    ↓
Immediate response (patient safety, reporting)
    ↓
Root Cause Analysis
    ↓
Fishbone of potential causes
    ↓
Deep dive on plausible causes (data collection, interviews)
    ↓
Identification of root and contributing causes
    ↓
Action plan and systemic improvement
\`\`\`

### Joint Commission Tracer Methodology Integration

The fishbone supports the Joint Commission's framework:
- **Root Cause**: Fundamental reason for the problem
- **Contributing Factor**: Facilitated the problem but isn't root
- **Mitigating Factor**: Lessened the severity

## Dynamic Fishbone

### Living Documents

In complex environments, understanding evolves:

1. **Initial fishbone**: Created soon after event
2. **Revised fishbone**: Updated as new information emerges
3. **Longitudinal fishbone**: Updated as system changes occur

### Version Control

Maintain dated versions to show evolution of understanding:
- Fishbone v1.0 (Initial analysis, 1/15/25)
- Fishbone v2.0 (After data review, 1/22/25)
- Fishbone v3.0 (After process mapping, 2/5/25)

## Digital Fishbone Platforms

### Advanced Software Features

Modern platforms offer sophisticated fishbone capabilities:

1. **Collaborative editing**
   - Real-time collaboration
   - Version history
   - Comments and discussions

2. **Linking and attachments**
   - Attach documents, photos, data
   - Link to process maps
   - Connect to action items

3. **Analytics**
   - Frequency of causes across events
   - Heat maps of common categories
   - Trend analysis over time

4. **Integration**
   - Connect to incident reporting systems
   - Link to EHR data
   - Support for mobile reporting

## Fishbone in High-Reliability Organizations

### HRO Principles Applied to Fishbone

| HRO Principle | Fishbone Application |
|---------------|---------------------|
| Preoccupation with failure | Analyze near misses, not just actual events |
| Reluctance to simplify | Seek complexity, multiple perspectives |
| Sensitivity to operations | Include frontline insights |
| Commitment to resilience | Focus on system defenses |
| Deference to expertise | Input from those closest to work |

## Fishbone and Culture

### Diagnostic Uses

The fishbone creation process reveals organizational culture:

**What to observe:**
- Are people comfortable speaking up?
- Is there finger-pointing or collective responsibility?
- Are leaders' causes treated differently?
- Are psychological safety issues evident?

### Culture as a Cause Category

Consider adding "Culture" as a category:

**Examples of cultural causes:**
- "It's not safe to speak up"
- "We've always done it this way"
- "Documentation is more important than patient care"
- "Asking for help is a sign of weakness"

## Expert Tips for Complex Fishbone Analysis

1. **Map the system first** - Understand before analyzing
2. **Seek multiple perspectives** - Different roles see different causes
3. **Embrace complexity** - Resist oversimplification
4. **Use multiple tools** - Fishbone is powerful but not complete alone
5. **Focus on systems** - Individuals rarely the root cause
6. **Document evolution** - Understanding changes over time
7. **Link to action** - Fishbone should lead to improvement
8. **Revisit periodically** - Systems change, so does understanding

## Case Study: Complex System Fishbone

**Problem: Sepsis Mortality Higher Than Expected**

After multiple rounds of analysis, the fishbone revealed:

**Key Finding:** The problem wasn't a single cause but a **convergence of multiple system issues**:

1. **Diagnostic delays** - Multiple factors in ED, floor, ICU
2. **Treatment variation** - No standardized protocol
3. **Communication breakdowns** - Between departments, shifts
4. **Data gaps** - No real-time surveillance
5. **Resource constraints** - Bed availability, specialist access

**Solution Required:** System-wide intervention, not isolated fixes

This multi-level understanding guided a comprehensive sepsis improvement program addressing all identified dimensions.
      `,
      learningObjectives: [
        'Adapt fishbone diagrams for complex, multi-level systems',
        'Integrate systems thinking concepts into fishbone analysis',
        'Apply fishbone analysis within comprehensive RCA frameworks'
      ],
      keyTerms: {
        'Systems Thinking': 'An approach to analysis that considers the interconnectedness of components and the emergent properties of systems',
        'Feedback Loop': 'A circular relationship where output affects input, creating reinforcing or balancing cycles',
        'High-Reliability Organization (HRO)': 'An organization that operates in complex, high-risk environments but maintains exceptional safety records',
        'Leverage Point': 'A place in a system where small changes can produce large effects'
      },
      quizQuestions: [
        {
          question: 'How does systems thinking change the traditional fishbone approach?',
          options: [
            'It requires using software instead of paper',
            'It adds complexity that isn\'t useful for healthcare',
            'It incorporates feedback loops, interactions, and non-linear relationships',
            'It eliminates the need for multiple categories'
          ],
          correctAnswer: 2,
          explanation: 'Systems thinking expands the traditional linear fishbone to include feedback loops, interactions between causes, and recognition that complex systems have emergent properties.'
        },
        {
          question: 'When analyzing a problem that spans multiple departments, what approach to fishbone is recommended?',
          options: [
            'Create separate fishbones for each department',
            'Only include leadership in the analysis',
            'Conduct cross-functional analysis that integrates perspectives across departments',
            'Focus only on the department where the problem manifested'
          ],
          correctAnswer: 2,
          explanation: 'Cross-functional fishbone analysis integrates perspectives from all relevant departments to capture causes that span organizational boundaries.'
        },
        {
          question: 'What is the value of maintaining dated versions of fishbone diagrams during complex investigations?',
          options: [
            'It satisfies legal requirements',
            'It\'s unnecessary but good for documentation',
            'It shows the evolution of understanding as new information emerges',
            'It allows you to go back to earlier conclusions'
          ],
          correctAnswer: 2,
          explanation: 'Version control shows how understanding evolves over time as new data, interviews, and analyses provide additional insights.'
        }
      ],
      estimatedReadTime: 18,
      prerequisites: ['fishbone:intermediate']
    },
    expert: {
      title: 'Master-Level Fishbone Applications',
      content: `
# Master-Level Fishbone Applications

## Theoretical Foundations

### Origins and Evolution

**Kaoru Ishikawa's Vision**
- Developed in the 1960s for quality control in manufacturing
- Part of the Seven Basic Tools of Quality
- Originally designed to engage workers in quality improvement
- Evolved from simple cause enumeration to sophisticated systems analysis

### Underlying Theory

**Causal Inference Framework**
Fishbone diagrams operate within causal inference theory:

| Element | Description |
|---------|-------------|
| Potential Cause | A factor that may influence the outcome |
| Confounder | A factor that influences both the cause and outcome |
| Effect Modifier | A factor that changes the strength of a cause-effect relationship |
| Necessary Cause | Required for the outcome to occur |
| Sufficient Cause | Guarantees the outcome occurs |

**Causal Pie Model (Rothman)**
Each outcome can be caused by multiple "sufficient cause" pies, each containing multiple component causes. Fishbone helps identify these component causes.

## Advanced Integration Frameworks

### Fishbone in DMAIC (Six Sigma)

| DMAIC Phase | Fishbone Role |
|-------------|---------------|
| **Define** | Initial problem exploration |
| **Measure** | Identify measurement points for potential causes |
| **Analyze** | Deep dive into potential causal factors |
| **Improve** | Test solutions targeting root causes |
| **Control** | Monitor for recurrence of root causes |

### Fishbone and Lean

**Value Stream Mapping + Fishbone**
\`\`\`
Current State VSM
    ↓
Identify waste and non-value-added steps
    ↓
Fishbone: Why do these wastes exist?
    ↓
Design future state addressing root causes
\`\`\`

### Fishbone in TRIZ (Theory of Inventive Problem Solving)

**Contradiction Analysis**
- Identify contradictions in the system
- Use fishbone to analyze why contradictions exist
- Apply TRIZ principles to resolve

### Fishbone and Human Factors Engineering

**SEIPS Model Integration**

\`\`\`
Work System                     →  Processes  →  Outcomes
├─ Person                       ├─ Task       ├─ Patient
│  ├─ Physical                 │  └─ Social   │  └─ Safety
│  ├─ Psychological                         └─ Employee
│  └─ organizational
├─ Environment                  Tools:
├─ Tools & Technology          1. Fishbone of work system
├─ Tasks                       2. Process mapping
└─ Organization                3. Outcome analysis
\`\`\`

## Specialized Applications

### Fishbone for Diagnostic Error

**Saul Weinberg's Diagnostic Error Framework**

| Phase | Potential Causes (Fishbone Categories) |
|-------|----------------------------------------|
| Patient-provider encounter | Communication, physical exam, history-taking |
| Performance of history/exam | Technique, equipment, time constraints |
| Assessment of findings | Knowledge, cognitive biases, heuristics |
| Formulation of diagnosis | Synthesis, differential diagnosis generation |
| Testing | Test selection, interpretation, follow-up |
| Referral | Availability, communication, documentation |
| Follow-up | Systems for tracking, patient adherence |
| Feedback to clinician | Learning, closure of the loop |

### Fishbone for Health Equity Analysis

**Adding "Social Determinants" as a Category**

\`\`\`
                    Health Disparity
                          ↑
    ┌─────────────────────┼─────────────────────┐
    │                     │                     │
  Clinical            System            Social Determinants
    │                     │                     │
• Bias           • Insurance          • Housing
• Communication  • Transportation     • Food security
• Guidelines     • Language access    • Social support
\`\`\`

**Structural Competency Framework**
Expand fishbone to include structural causes:
- Housing policies
- Educational disparities
- Economic inequality
- Racism and discrimination
- Immigration policies

### Fishbone for IT and Digital Health

**Socio-Technical System Analysis**

| Technical Layer | Causes to Consider |
|-----------------|-------------------|
| Hardware | Device compatibility, connectivity, power |
| Software | UI design, workflow integration, bugs |
| Network | Bandwidth, reliability, security |
| Data | Interoperability, accuracy, availability |
| Human | Training, workload, cognitive load |

### Fishbone for Supply Chain Disruptions

**Multi-Echelon Analysis**

\`\`\`
              Supply Disruption
                     ↑
    ┌─────────────────┼─────────────────┐
    │                 │                 │
  Supplier       Logistics        Clinical
    │                 │                 │
• Manufacturing   • Shipping      • Usage patterns
• Quality        • Customs       • Conservation
• Lead time      • Inventory     • Substitutions
• Financial      • Storage       • Documentation
\`\`\`

## Research Applications

### Fishbeam Systematic Review

Using fishbone to organize review findings:

1. **Identify all potential causes** from literature
2. **Organize by categories** for systematic presentation
3. **Identify gaps** where causes are under-studied
4. **Generate hypotheses** for future research

### Fishbone in Implementation Science

**CFIR (Consolidated Framework for Implementation Research)**

| CFIR Domain | Fishbone Translation |
|-------------|---------------------|
| Intervention characteristics | Features of the change being implemented |
| Outer setting | External context, policies, patient population |
| Inner setting | Organizational culture, structure |
| Characteristics of individuals | Staff knowledge, beliefs, self-efficacy |
| Process | Implementation plan, execution, evaluation |

## Organizational Integration

### Building a Fishbone Library

**Taxonomy for Organizational Learning**

\`\`\`
Event Type
├─ Clinical
│  ├─ Medication errors
│  ├─ Falls
│  ├─ Pressure injuries
│  └─ Healthcare-associated infections
├─ Operational
│  ├• Flow
│  ├─ Capacity
│  └─ Resource allocation
└─ Cultural
   ├─ Communication
   ├─ Professionalism
   └─ Burnout/well-being
\`\`\`

**Knowledge Management System**
- Standardized templates
- Tagged by problem type, unit, date
- Searchable database
- Link to action items and outcomes

### Predictive Fishbone

**Machine Learning Integration**

1. **Historical fishbones** → Feature extraction
2. **Incident data** → Training data
3. **ML model** → Predict likely causes for new incidents
4. **Human validation** → Confirm or revise predictions

**Example:** For new medication error reports, system suggests:
- Most probable cause categories
- Similar historical cases
- Proven interventions

### Cross-Institutional Fishbone Analysis

**Collaborative Learning Networks**

\`\`\`
Hospital A                      Hospital B                      Hospital C
    │                               │                               │
    └───────────────┬───────────────┴───────────────┬───────────────┘
                    │                               │
              Shared Fishbone Repository
              (de-identified, standardized)
                    │
            Common Cause Patterns
                    │
            Cross-Institutional Learning
\`\`\`

## Pedagogical Applications

### Teaching Fishbone to Different Learners

| Audience | Approach |
|----------|----------|
| Students | Simple examples, step-by-step methodology |
| Frontline staff | Real problems from their work |
| Leaders | System-level causes, strategic implications |
| QI professionals | Advanced techniques, integration with other tools |

### Fishbone Simulation Training

**Virtual Scenarios**
- Present realistic case scenarios
- Learners create fishbones in virtual environment
- Compare to expert-derived fishbones
- Debrief on process and content

## Limitations and Alternatives

### When Fishbone Falls Short

| Situation | Alternative Approach |
|-----------|---------------------|
| Highly dynamic processes | Process tracing, journey mapping |
| Strong temporal relationships | Timeline analysis first |
| Complex causal pathways | Bayesian networks, system dynamics |
| Individual decision errors | Cognitive forcing strategies |
| Rapid response needs | Quick huddle, not full fishbone |

### Complementary Tools

| Tool | Best Used With Fishbone For |
|------|---------------------------|
| Timeline | Temporal context |
| Process map | Location of causes in workflow |
| Pareto chart | Prioritizing which causes to address |
| Control chart | Detecting when a cause is present |
| Five whys | Drilling down on specific causes |

## Expert Wisdom

### Philosophy of Fishbone Use

1. **The diagram is a tool, not the outcome**
   - Value is in the thinking, not the drawing

2. **Causes are hypotheses, not conclusions**
   - Must be validated with data

3. **The perfect is the enemy of the good**
   - A simple fishbone used is better than a perfect fishbone unused

4. **Every fishbone is provisional**
   - Understanding evolves with new information

5. **Systems are self-organizing**
   - Yesterday's causes may not be today's

6. **Culture eats causes for lunch**
   - Organizational culture can prevent addressing root causes

7. **The map is not the territory**
   - Fishbone represents reality, but is not reality

### Mastery Indicators

You've mastered fishbone diagrams when you can:

- [ ] Select appropriate category frameworks for any problem
- [ ] Facilitate fishbone sessions with diverse groups
- [ ] Integrate fishbone with complementary tools seamlessly
- [ ] Adapt approach for simple and complex problems
- [ ] Teach others to create and use fishbone effectively
- [ ] Apply systems thinking to fishbone analysis
- [ ] Use fishbone prospectively for prevention
- [ ] Evaluate the quality of fishbones created by others
      `,
      learningObjectives: [
        'Integrate fishbone diagrams with multiple QI and research frameworks',
        'Design and maintain organizational fishbone knowledge systems',
        'Evaluate when fishbone is appropriate and which complementary tools to use'
      ],
      keyTerms: {
        'Causal Inference': 'The process of drawing conclusions about causal relationships from data and observations',
        'SEIPS Model': 'The Systems Engineering Initiative for Patient Safety model, a comprehensive framework for understanding work systems and patient safety',
        'CFIR': 'The Consolidated Framework for Implementation Research, a meta-theoretical framework for understanding implementation',
        'Structural Competency': 'The capacity to recognize how social, economic, and political structures produce health inequities'
      },
      quizQuestions: [
        {
          question: 'What is the "causal pie model" in epidemiology and how does it relate to fishbone diagrams?',
          options: [
            'A pie chart showing the percentage of different causes',
            'A model showing that outcomes have multiple sufficient causes, each composed of component causes',
            'A cooking metaphor unrelated to fishbone analysis',
            'A way to prioritize causes based on their importance'
          ],
          correctAnswer: 1,
          explanation: 'The causal pie model recognizes that most outcomes have multiple potential pathways (sufficient causes), each requiring multiple components to come together. Fishbone helps identify these component causes.'
        },
        {
          question: 'How can fishbone diagrams be integrated with implementation science frameworks like CFIR?',
          options: [
            'Fishbone replaces the need for implementation frameworks',
            'CFIR domains can guide category selection and comprehensive analysis',
            'They are incompatible approaches',
            'CFIR is used only after fishbone is complete'
          ],
          correctAnswer: 1,
          explanation: 'Implementation frameworks like CFIR provide systematic domains that can guide category selection and ensure comprehensive analysis of implementation barriers and facilitators.'
        },
        {
          question: 'What is an expert-level insight about fishbone diagrams?',
          options: [
            'The more detailed the fishbone, the better',
            'Fishbone causes are hypotheses that must be validated, not conclusions',
            'Every fishbone should have at least 50 causes',
            'Perfect fishbones lead to perfect solutions'
          ],
          correctAnswer: 1,
          explanation: 'Experts recognize that fishbone diagrams generate hypotheses about potential causes. These hypotheses must be validated with data before being accepted as true causes.'
        }
      ],
      estimatedReadTime: 25,
      prerequisites: ['fishbone:advanced']
    }
  }
};
