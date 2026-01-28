import type { EducationalContent } from '../../types.js';

export const huddlesDebriefs: EducationalContent = {
  id: 'huddles-debriefs',
  type: 'concept',
  name: 'Huddles and Debriefs',
  alternateNames: ['Team Huddles', 'After-Action Reviews', 'Post-Event Debriefing'],

  levels: {
    1: {
      level: 1,
      summary: 'Huddles and debriefs are team meetings that help healthcare workers plan care and learn from events.',
      explanation: `**What are Huddles?**

A huddle is a short team meeting that happens before or during work. Team members stand together for a few minutes to:
- Plan the day\'s work
- Share important information
- Watch for problems
- Make sure everyone knows their role

**What are Debriefs?**

A debrief is a meeting after something important happens. The team talks about:
- What went well
- What could be better
- What was learned
- How to improve next time

**Why They Matter:**

Huddles and debriefs keep patients safe by:
- Making sure everyone knows the plan
- Catching problems early
- Helping the team learn and improve
- Building trust among team members

**When They Happen:**

**Huddles:**
- At the start of a shift
- Before a complex procedure
- When something unexpected happens

**Debriefs:**
- After an emergency
- After a difficult case
- At the end of a project
- After a medical error`,
      keyTerms: [
        { term: 'huddle', definition: 'A brief team meeting to coordinate care and share information' },
        { term: 'debrief', definition: 'A meeting after an event to discuss what happened and learn from it' },
        { term: 'team communication', definition: 'Sharing information between healthcare workers to provide safe care' },
      ],
      analogies: ['A huddle is like a sports team coming together before a play to make sure everyone knows the plan'],
      examples: ['A nursing team meets for 5 minutes at the start of shift to discuss which patients need extra attention'],
      patientCounselingPoints: ['Your care team meets regularly to coordinate your care', 'These meetings help keep you safe and ensure everyone is on the same page'],
    },
    2: {
      level: 2,
      summary: 'Huddles and debriefs are structured communication tools that support teamwork, situational awareness, and continuous improvement.',
      explanation: `## Types of Huddles

**Shift Huddles:**
- Brief team meeting at start of shift
- Covers census, acuity, staffing concerns
- Identifies patients needing extra attention
- Shares safety reminders

**Safety Huddles:**
- Focus on potential safety issues
- Identifies patients at risk for falls, pressure injuries, etc.
- Discusses equipment or supply issues
- Rapid problem-solving

**Procedure Huddles:**
- Pre-procedure team briefing
- Reviews plan, roles, contingencies
- Uses checklists (like surgical timeout)
- Ensures shared mental model

## Types of Debriefs

**Clinical Debriefs:**
- After complex or critical events
- Focus on clinical decision-making
- Reviews what happened and why
- Improves future response

**Team Debriefs:**
- Focus on team performance
- Communication effectiveness
- Role clarity and coordination
- Psychological safety

**After-Action Reviews:**
- Structured format from military
- What was supposed to happen?
- What actually happened?
- Why was there a difference?
- What will we do differently?

## Key Elements

**Effective Huddles:**
- Brief (5-15 minutes)
- Standing (keeps it short)
- Structured agenda
- Everyone participates
- Action items identified

**Effective Debriefs:**
- Safe environment for honest discussion
- Focus on learning, not blame
- Specific to the event
- Everyone\'s perspective included
- Actionable improvements identified

## Benefits

**For Teams:**
- Improved coordination
- Better communication
- Shared situational awareness
- Enhanced morale
- Reduced errors

**For Patients:**
- Safer care
- Better outcomes
- More coordinated treatment
- Fewer missed issues`,
      keyTerms: [
        { term: 'situational awareness', definition: 'Understanding what is happening around you and anticipating what might happen next' },
        { term: 'acuity', definition: 'The level of care a patient needs based on how sick they are' },
        { term: 'psychological safety', definition: 'Feeling safe to speak up without fear of punishment or embarrassment' },
      ],
      analogies: ['A debrief is like watching game film after a match - you review what happened to get better next time'],
      examples: ['Surgical team does a pre-procedure huddle to confirm patient, procedure, and special equipment needs'],
      patientCounselingPoints: ['Your healthcare team meets to plan your care and learn from each experience', 'These practices help ensure you receive the best possible care'],
    },
    3: {
      level: 3,
      summary: 'Huddles and debriefs are evidence-based team strategies that support situational monitoring, mutual support, and learning systems in healthcare.',
      explanation: `## Evidence Base

**Research Findings:**
- Huddles reduce safety events by improving communication
- Debriefs enhance team learning and performance
- Both support culture of safety
- Linked to improved patient outcomes
- Reduce staff burnout and improve satisfaction

## TeamSTEPPS Integration

**Huddles in TeamSTEPPS:**
- Team Structure: Clear roles and goals
- Communication: Information sharing
- Leadership: Direction and guidance
- Situation Monitoring: Shared awareness
- Mutual Support: Backup behavior

**Debriefs in TeamSTEPPS:**
- Process improvement focus
- Reinforces team learning
- Identifies system issues
- Supports psychological safety

## Structured Approaches

**The SBAR Huddle:**
Adapts SBAR framework for huddle format:
- Situation: Current state
- Background: Relevant context
- Assessment: Team evaluation
- Recommendation: Plan and assignments

**The DEBRIEF Model:**
**D**escribe: What happened?
**E**valuate: What went well?
**B**arriers: What challenges occurred?
**R**eview: What would we change?
**I**mprovements: Specific actions
**E**ngage: Who will do what?
**F**ollow-up: When will we check?

## Implementation

**Huddle Implementation:**
1. Define purpose and scope
2. Set time and location
3. Create standard agenda
4. Train team members
5. Start with volunteers
6. Gather feedback and adjust
7. Make routine

**Debrief Implementation:**
1. Create safe environment
2. Establish ground rules
3. Use structured format
4. Focus on systems, not individuals
5. Document learnings
6. Follow up on action items
7. Celebrate successes

## Barriers and Solutions

**Time Constraints:**
- Keep huddles brief
- Schedule debriefs promptly
- Integrate into workflow

**Hierarchy Issues:**
- Leaders model participation
- Emphasize equal voice
- Focus on learning

**Discomfort with Feedback:**
- Start with positives
- Normalize debriefing
- Use objective data
- Build trust over time`,
      keyTerms: [
        { term: 'TeamSTEPPS', definition: 'Evidence-based teamwork system for healthcare developed by AHRQ and Department of Defense' },
        { term: 'mutual support', definition: 'Team members assisting each other and monitoring performance' },
        { term: 'learning system', definition: 'Organization that continuously learns and improves from experience' },
      ],
      clinicalNotes: 'Integrate huddles into daily workflows. Ensure debriefs are psychologically safe. Train facilitators.',
    },
    4: {
      level: 4,
      summary: 'Huddles and debriefs operationalize high-reliability principles and support organizational learning through structured reflection and communication.',
      explanation: `## Organizational Learning Theory

**Single-Loop vs. Double-Loop Learning:**
- Single-loop: Fix the immediate problem
- Double-loop: Question underlying assumptions and systems
- Debriefs enable both levels of learning

**Just Culture Framework:**
Huddles and debriefs support just culture by:
- Separating human error from at-risk behavior
- Distinguishing at-risk from reckless behavior
- Focusing on system improvements
- Supporting individual accountability

**High-Reliability Organization Principles:**

**Preoccupation with Failure:**
- Huddles identify potential problems before they occur
- Debriefs analyze actual failures to prevent recurrence

**Reluctance to Simplify:**
- Both tools resist oversimplifying complex situations
- Encourage full exploration of contributing factors

**Sensitivity to Operations:**
- Frontline perspective captured
- Real-time issues surfaced
- Context preserved

**Commitment to Resilience:**
- Builds team capacity to respond to surprises
- Develops adaptive capacity
- Reinforces backup behavior

## Advanced Facilitation Skills

**Huddle Facilitation:**
- Time management
- Inclusive participation
- Conflict resolution
- Agenda management
- Action item tracking

**Debrief Facilitation:**
- Creating psychological safety
- Managing emotions
- Balancing perspectives
- Keeping focus on learning
- Avoiding blame
- Ensuring follow-through

**Difficult Debrief Situations:**
- When someone made a clear error
- High emotion situations
- When team members disagree
- When leadership is involved
- Legal or regulatory concerns

## Measurement and Evaluation

**Huddle Metrics:**
- Participation rates
- Duration
- Action item completion
- Staff satisfaction
- Impact on safety events

**Debrief Metrics:**
- Frequency of debriefs
- Quality of facilitation
- Learning outcomes documented
- System changes implemented
- Staff perception of safety culture

**Linkage to Outcomes:**
- Track correlation with safety metrics
- Measure impact on team function
- Evaluate learning retention
- Assess behavior change`,
      keyTerms: [
        { term: 'just culture', definition: 'Approach to safety that balances accountability with learning from error' },
        { term: 'high-reliability organization', definition: 'Organization operating in hazardous conditions with consistently safe performance' },
        { term: 'double-loop learning', definition: 'Learning that challenges underlying assumptions and changes systems' },
      ],
      clinicalNotes: 'Train huddle and debrief facilitators. Monitor psychological safety. Link learning to system changes.',
    },
    5: {
      level: 5,
      summary: 'Huddles and debriefs represent sophisticated organizational interventions that require sustained leadership commitment, infrastructure support, and cultural alignment to achieve transformational impact on safety and performance.',
      explanation: `## Systems Theory Perspective

**Huddles and Debriefs as Interventions:**
These tools operate at multiple system levels:
- Individual: Skill development, reflection
- Team: Coordination, communication
- Unit: Culture, norms, standardization
- Organization: Learning, improvement
- Industry: Spread, innovation

**Complex Adaptive Systems:**
Healthcare functions as a complex adaptive system. Huddles and debriefs:
- Create opportunities for emergence
- Support self-organization
- Enable adaptation to local conditions
- Maintain coherence through simple rules

## Implementation Science

**Consolidated Framework for Implementation Research (CFIR):**

**Intervention Characteristics:**
- Evidence strength
- Adaptability
- Complexity
- Trialability

**Outer Setting:**
- External policies
- Patient needs
- Competitive pressure

**Inner Setting:**
- Structural characteristics
- Networks and communications
- Culture
- Implementation climate

**Characteristics of Individuals:**
- Knowledge and beliefs
- Self-efficacy
- Stage of change

**Process:**
- Planning
- Engaging
- Executing
- Reflecting and evaluating

## Advanced Applications

**Interprofessional Huddles:**
- Include all disciplines
- Address role clarification
- Optimize collaborative practice
- Break down silos

**Post-Event Debriefing:**
- Critical incidents
- Medical errors
- Near-misses
- Good catches
- Unexpected outcomes

**Simulated Debriefing:**
- After simulation exercises
- Focus on teamwork
- Safe learning environment
- Immediate feedback

**Crisis Resource Management:**
- Real-time huddles during crises
- Post-crisis debriefing
- Stress management
- Performance under pressure

## Sustainability Strategies

**Leadership:**
- Executive sponsorship
- Resource allocation
- Policy support
- Role modeling

**Infrastructure:**
- Protected time
- Space availability
- Technology support
- Data systems

**Culture:**
- Psychological safety
- Learning orientation
- Accountability balance
- Celebration of learning

**Continuous Improvement:**
- Regular evaluation
- Feedback integration
- Innovation adoption
- Spread to new areas

## Research Agenda

**Current Questions:**
- Optimal huddle frequency and duration
- Most effective debriefing methods
- Technology integration
- Sustainability factors
- Impact on specific outcomes

**Methodological Challenges:**
- Attribution of effects
- Generalizability
- Long-term follow-up
- Cost-effectiveness`,
      keyTerms: [
        { term: 'complex adaptive system', definition: 'System with multiple interacting components that adapt and learn' },
        { term: 'implementation science', definition: 'Study of methods to promote systematic uptake of research findings into practice' },
        { term: 'Crisis Resource Management', definition: 'Training in teamwork and decision-making during critical events' },
      ],
      clinicalNotes: 'View huddles and debriefs as long-term cultural investments. Secure leadership commitment. Measure and celebrate progress.',
    },
  },

  media: [],
  citations: [
    { id: 'teamstepps-guide', type: 'textbook', title: 'TeamSTEPPS Instructor Guide', source: 'AHRQ' },
    { id: 'debriefing-research', type: 'article', title: 'Debriefing in Healthcare', source: 'Journal of Patient Safety' }
  ],
  crossReferences: [
    { targetId: 'interprofessional-team-meetings', targetType: 'concept', relationship: 'related', label: 'Team Meetings' },
    { targetId: 'conflict-resolution', targetType: 'concept', relationship: 'related', label: 'Conflict Resolution' }
  ],
  tags: {
    systems: [],
    topics: ['interprofessional', 'teamwork', 'communication'],
    keywords: ['huddle', 'debrief', 'team', 'learning', 'safety'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};

export default huddlesDebriefs;
