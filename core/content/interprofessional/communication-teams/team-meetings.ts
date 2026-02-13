/**
 * Team Meetings - Effective Interprofessional Team Communication
 */

import { EducationalContent } from '../../types';

export const teamMeetings: EducationalContent = {
  id: 'interprofessional-team-meetings',
  type: 'concept',
  name: 'Interprofessional Team Meetings',
  alternateNames: ['Huddles', 'Rounds', 'Team Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Healthcare teams meet regularly to discuss patients and coordinate care. Good meetings help everyone work together.',
      explanation: `**Types of Team Meetings:**

- **Huddles:** Quick daily meetings to plan the day
- **Rounds:** Walking to see patients as a team
- **Care Conferences:** Longer meetings about complex patients
- **Safety Briefings:** Discussing potential problems

**Who is on the Healthcare Team?**

- Doctors and medical students
- Nurses
- Pharmacists
- Therapists (physical, occupational, speech)
- Social workers
- And many others!

**Good Team Meeting Habits:**

- Everyone can speak up
- Share important patient information
- Ask questions if unsure
- Treat each other with respect`,
      keyTerms: [
        { term: 'huddle', definition: 'A brief team meeting to share information and coordinate' },
        { term: 'rounds', definition: 'A meeting where the team visits and discusses each patient' },
        { term: 'healthcare team', definition: 'All the different professionals working together to care for patients' },
      ],
      analogies: ['A team meeting is like a sports team huddle - everyone needs to know the game plan'],
      examples: ['Each morning, the nurses and doctors meet for 10 minutes to discuss the plan for the day'],
      patientCounselingPoints: ['Ask to be included in discussions about your care', 'All team members are there to help you'],
    },
    2: {
      level: 2,
      summary: 'Structured team meetings improve communication, coordination, and patient outcomes.',
      explanation: `## Types of Team Meetings

**Daily Huddles:**
- Brief (5-15 minutes)
- Operational focus
- Safety concerns, staffing, workflow
- Sets priorities for the day

**Bedside Rounds:**
- At the patient bedside
- Patient participation when appropriate
- Real-time assessment
- Care plan discussion

**Multidisciplinary Rounds:**
- Conference room format
- Complex patient discussions
- Multiple disciplines present
- Care planning focus

## Effective Meeting Elements

**Structure:**
- Clear purpose and agenda
- Defined roles (facilitator, timekeeper)
- Consistent timing and location
- Appropriate duration

**Communication:**
- Structured reporting (SBAR)
- All voices heard
- Psychological safety
- Closed-loop communication`,
      keyTerms: [
        { term: 'SBAR', definition: 'Communication framework: Situation, Background, Assessment, Recommendation' },
        { term: 'multidisciplinary', definition: 'Involving multiple healthcare professions working together' },
        { term: 'psychological safety', definition: 'Environment where team members feel safe to speak up' },
      ],
      patientCounselingPoints: ['Ask questions during rounds', 'Know who the team members are and their roles'],
    },
    3: {
      level: 3,
      summary: 'Team-based communication structures are evidence-based interventions for quality and safety.',
      explanation: `## Evidence Base

**Research Findings:**
- Structured rounds reduce adverse events
- Daily huddles improve operational efficiency
- Multidisciplinary rounds decrease length of stay
- Communication tools (SBAR) reduce errors

## TeamSTEPPS Framework

**Core Components:**
- Leadership
- Situation Monitoring
- Mutual Support
- Communication

**Tools:**
- Briefs, Huddles, Debriefs
- SBAR communication
- Check-backs
- CUS (Concerned, Uncomfortable, Safety)

## Implementation Considerations

**Barriers:**
- Time constraints
- Hierarchy and culture
- Physical space
- Technology limitations
- Scheduling challenges

**Success Factors:**
- Leadership support
- Training and practice
- Standardized formats
- Regular evaluation
- Continuous improvement`,
      keyTerms: [
        { term: 'TeamSTEPPS', definition: 'Team Strategies and Tools to Enhance Performance and Patient Safety - evidence-based framework' },
        { term: 'CUS', definition: 'Communication tool for safety concerns: Concerned, Uncomfortable, Safety' },
        { term: 'debrief', definition: 'Team discussion after an event to review what happened and learn' },
      ],
      clinicalNotes: 'Use TeamSTEPPS tools. Structure meetings for efficiency and inclusion. Train staff regularly.',
    },
    4: {
      level: 4,
      summary: 'Team communication requires systematic implementation addressing culture, processes, and human factors.',
      explanation: `## Communication Science

**Team Cognition:**
- Shared mental models
- Transactive memory systems
- Collective situational awareness

**Psychological Safety:**
- Speaking up without fear
- Constructive conflict
- Learning from mistakes
- Leadership behaviors

## Meeting Design Principles

**Purpose Clarity:**
- Information sharing vs. decision-making
- Operational vs. strategic
- Routine vs. ad hoc

**Participation:**
- Role-appropriate involvement
- Patient/family inclusion
- Remote/telehealth options

## Quality Metrics

**Process Measures:**
- Meeting adherence
- Tool utilization (SBAR)
- Speaking up behaviors

**Outcome Measures:**
- Safety events
- Length of stay
- Patient experience
- Staff satisfaction`,
      keyTerms: [
        { term: 'shared mental model', definition: 'Common understanding among team members about goals, roles, and situation' },
        { term: 'transactive memory', definition: 'Team knowledge system where members know who knows what' },
        { term: 'speaking up', definition: 'Voicing concerns or questions to prevent errors or improve care' },
      ],
      clinicalNotes: 'Build psychological safety. Measure meeting effectiveness. Address hierarchy barriers.',
    },
    5: {
      level: 5,
      summary: 'Team communication is foundational to high-reliability healthcare, requiring organizational commitment and continuous improvement.',
      explanation: `## High-Reliability Principles

**HRO Characteristics:**
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

## Implementation Science

**CFIR Domains:**
- Intervention characteristics
- Outer setting (policy, guidelines)
- Inner setting (culture, readiness)
- Individual characteristics
- Process (planning, engaging, executing)

## Technology Integration

**Digital Tools:**
- Virtual rounding platforms
- Secure messaging
- AI-assisted prioritization
- Dashboard integration

## Health Equity Considerations

**Inclusive Practices:**
- Language access
- Cultural considerations
- Power dynamic awareness
- Patient/family engagement

## Future Directions

- Adaptive team structures
- AI augmentation
- Remote team coordination
- Resilience science application`,
      keyTerms: [
        { term: 'high-reliability organization', definition: 'Organization that operates complex systems with fewer than expected accidents' },
        { term: 'CFIR', definition: 'Consolidated Framework for Implementation Research - guides implementation planning' },
        { term: 'resilience engineering', definition: 'Approach focusing on system adaptability and recovery from challenges' },
      ],
      clinicalNotes: 'Apply HRO principles. Integrate technology thoughtfully. Build resilient teams.',
    },
  },

  media: [],
  citations: [{ id: 'teamstepps', type: 'website', title: 'TeamSTEPPS', source: 'AHRQ' }],
  crossReferences: [{ targetId: 'interprofessional-handoffs', targetType: 'concept', relationship: 'sibling', label: 'Handoffs' }],
  tags: { systems: ['communication-teams'], topics: ['team communication', 'meetings'], keywords: ['huddles', 'rounds', 'TeamSTEPPS'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default teamMeetings;
