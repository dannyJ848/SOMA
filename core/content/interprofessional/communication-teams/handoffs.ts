/**
 * Handoffs - Safe Transfer of Patient Information Between Providers
 */

import { EducationalContent } from '../../types';

export const handoffs: EducationalContent = {
  id: 'interprofessional-handoffs',
  type: 'concept',
  name: 'Clinical Handoffs',
  alternateNames: ['Handovers', 'Sign-Outs', 'Care Transitions'],

  levels: {
    1: {
      level: 1,
      summary: 'When one healthcare worker passes patient information to another, it is called a handoff. Good handoffs keep patients safe.',
      explanation: `**What is a Handoff?**

A handoff happens when one doctor, nurse, or healthcare worker tells another person about a patient so that person can take over care.

**When Do Handoffs Happen?**

- Shift changes (day nurse to night nurse)
- Transfer to another unit or hospital
- Going to surgery or a procedure
- Doctor going off duty

**What Information is Shared:**

- Patient name and what is wrong
- Current treatments and medications
- Important tests pending
- What to watch for
- What to do if something happens`,
      keyTerms: [
        { term: 'handoff', definition: 'When one healthcare worker transfers patient care responsibility to another' },
        { term: 'shift change', definition: 'When one group of workers ends their work and another group starts' },
        { term: 'patient safety', definition: 'Keeping patients free from harm while they receive care' },
      ],
      analogies: ['A handoff is like a relay race - the baton must be passed carefully so the race continues smoothly'],
      examples: ['The day nurse tells the night nurse about each patient before leaving'],
      patientCounselingPoints: ['You can ask who is taking care of you when shifts change', 'Make sure new caregivers know important information about you'],
    },
    2: {
      level: 2,
      summary: 'Structured handoff communication reduces errors and improves patient safety during care transitions.',
      explanation: `## Types of Handoffs

**By Setting:**
- Shift-to-shift (within unit)
- Unit-to-unit (transfers)
- Department-to-department (ED to floor)
- Facility-to-facility (hospital to rehab)

**By Provider:**
- Nurse-to-nurse
- Physician-to-physician
- Interprofessional (between disciplines)

## I-PASS Framework

**I** - Illness Severity (stable, watcher, unstable)
**P** - Patient Summary (diagnosis, recent events)
**A** - Action List (pending tasks)
**S** - Situation Awareness (contingencies, what to watch for)
**S** - Synthesis (receiver summarizes, questions)

## Communication Best Practices

- Face-to-face when possible
- Minimize interruptions
- Use standardized tools
- Allow questions
- Verify understanding`,
      keyTerms: [
        { term: 'I-PASS', definition: 'Standardized handoff framework: Illness severity, Patient summary, Action list, Situation awareness, Synthesis' },
        { term: 'standardized communication', definition: 'Using the same format every time to share information' },
        { term: 'care transition', definition: 'When a patient moves from one care setting or provider to another' },
      ],
      patientCounselingPoints: ['Ask caregivers to introduce themselves when shifts change', 'Share important concerns with each new caregiver'],
    },
    3: {
      level: 3,
      summary: 'Handoff communication is a critical patient safety focus with evidence-based tools and organizational requirements.',
      explanation: `## Evidence Base

**Joint Commission Findings:**
- Communication failures contribute to 80% of serious safety events
- Handoffs are high-risk communication points
- Standardized approaches reduce errors

**I-PASS Study Results:**
- 23% reduction in preventable adverse events
- 30% reduction in medical errors
- Improved information completeness
- Sustained over time with training

## Implementation Elements

**Standardized Format:**
- Consistent structure across organization
- Written and verbal components
- Read-back/verification

**Training:**
- Simulation practice
- Faculty development
- Ongoing competency assessment

**Environment:**
- Dedicated time and space
- Minimal interruptions
- Appropriate lighting and noise

## Quality Metrics

- Handoff completeness audits
- Safety event tracking
- Staff perception surveys
- Direct observation`,
      keyTerms: [
        { term: 'adverse event', definition: 'Harm to a patient resulting from medical care rather than the underlying condition' },
        { term: 'closed-loop communication', definition: 'Communication verified by having receiver repeat back the message' },
        { term: 'situational awareness', definition: 'Awareness of current environment and anticipation of future events' },
      ],
      clinicalNotes: 'Use I-PASS or organizational standard. Train staff regularly. Audit handoff quality.',
    },
    4: {
      level: 4,
      summary: 'Handoff safety requires systematic approaches addressing human factors, organizational culture, and system design.',
      explanation: `## Human Factors

**Cognitive Load:**
- Information overload risks
- Attention limitations
- Memory constraints
- Fatigue effects

**Communication Barriers:**
- Hierarchy and power gradients
- Interruptions and distractions
- Assumptions and mental shortcuts
- Language and terminology differences

## System Design

**Structural Elements:**
- Protected handoff time
- Appropriate physical space
- Technology support (EHR, mobile)
- Workload management

**Process Design:**
- Standardized formats
- Checklists and tools
- Redundancy where needed
- Error recovery opportunities

## Implementation Science

**CUSP Framework:**
- Comprehend the science
- Understand local factors
- Summarize the evidence
- Plan improvement
- Evaluate and iterate

## Special Situations

- Critical/unstable patients
- After-hours coverage
- Complex patients
- Medication reconciliation
- Pending results management`,
      keyTerms: [
        { term: 'cognitive load', definition: 'Mental effort required to process information' },
        { term: 'CUSP', definition: 'Comprehensive Unit-based Safety Program for quality improvement' },
        { term: 'human factors', definition: 'Study of how people interact with systems and environments' },
      ],
      clinicalNotes: 'Address system-level barriers. Consider human factors in design. Engage frontline staff in improvement.',
    },
    5: {
      level: 5,
      summary: 'Handoff safety is a healthcare quality imperative requiring organizational commitment, evidence-based practices, and continuous improvement.',
      explanation: `## Regulatory and Accreditation

**Joint Commission:**
- National Patient Safety Goal on handoff communication
- Required standardized approach
- Performance monitoring expectations

**Other Standards:**
- CMS Conditions of Participation
- State regulations
- Specialty society guidelines

## Research Agenda

**Current Evidence Gaps:**
- Optimal handoff duration
- Technology effectiveness
- Interprofessional handoffs
- Outpatient/ambulatory transitions

**Emerging Areas:**
- AI-assisted handoff support
- Predictive analytics
- Patient/family involvement
- Remote/telehealth handoffs

## System-Level Integration

**EHR Integration:**
- Automated handoff generation
- Decision support
- Documentation linkage
- Continuity tracking

**Culture of Safety:**
- Psychological safety for questions
- Learning from near-misses
- Leadership engagement
- Just culture principles

## Health Equity

- Language access in handoffs
- Cultural considerations
- Health literacy accommodation
- Caregiver involvement`,
      keyTerms: [
        { term: 'National Patient Safety Goal', definition: 'Joint Commission priorities for improving patient safety' },
        { term: 'psychological safety', definition: 'Environment where people feel safe to speak up without fear of punishment' },
        { term: 'just culture', definition: 'Approach balancing accountability with learning from errors' },
      ],
      clinicalNotes: 'Integrate handoffs into quality infrastructure. Measure outcomes. Foster safety culture.',
    },
  },

  media: [],
  citations: [{ id: 'ipass-study', type: 'article', title: 'I-PASS Handoff Study', source: 'NEJM' }],
  crossReferences: [{ targetId: 'interprofessional-team-meetings', targetType: 'concept', relationship: 'sibling', label: 'Team Meetings' }],
  tags: { systems: ['communication-teams'], topics: ['handoffs', 'patient safety'], keywords: ['handoffs', 'I-PASS', 'transitions'], clinicalRelevance: 'critical' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default handoffs;
