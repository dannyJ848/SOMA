/**
 * Interprofessional Communication
 *
 * Comprehensive education on communication strategies, tools, and best practices
 * for effective collaboration among healthcare professionals.
 */

import { EducationalContent } from '../../types';

export const INTERPROFESSIONAL_COMMUNICATION: EducationalContent = {
  id: 'interprofessional-communication',
  type: 'concept',
  name: 'Interprofessional Communication',
  alternateNames: ['Healthcare team communication', 'Clinical communication', 'Provider communication', 'Team communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Good communication between healthcare workers helps keep you safe and makes sure everyone knows what is happening with your care.',
      explanation: `When healthcare workers talk clearly with each other, you get better care. Poor communication can lead to mistakes.

**Why Communication Matters:**

*Good Communication Leads To:*
- Safer care with fewer mistakes
- Everyone knowing your plan
- Questions getting answered
- Problems being caught early
- You feeling more confident in your care

*Poor Communication Can Cause:*
- Mistakes with medications
- Missed test results
- Repeated questions
- Delays in treatment
- Confusion about what to do

**How Healthcare Workers Communicate:**

*In Person:*
- Team meetings and rounds
- Hallway conversations
- Shift changes (handoffs)

*Written:*
- Medical records
- Notes in your chart
- Orders and prescriptions

*Electronic:*
- Computer messages
- Alerts and reminders
- Phone calls and texts

**Common Communication Tools:**

*SBAR - A Way to Share Information:*
- **S**ituation: What is happening right now?
- **B**ackground: What led to this?
- **A**ssessment: What do I think is going on?
- **R**ecommendation: What do I think should happen?

**Your Role in Communication:**

*Help Your Care Team:*
- Speak up if something seems wrong
- Ask questions when you do not understand
- Tell the nurse if your symptoms change
- Let them know about all your medications

*What You Can Ask:*
- "Who is on my care team?"
- "Can you explain that in simpler terms?"
- "What should I watch for?"
- "Who should I call with questions?"

**Remember:**
Good communication is a team effort. Your voice matters too. Do not be afraid to speak up about your care.`,
      keyTerms: [
        { term: 'handoff', definition: 'When one healthcare worker tells another about a patient when transferring care' },
        { term: 'SBAR', definition: 'A way to organize information: Situation, Background, Assessment, Recommendation' },
        { term: 'care team', definition: 'All the healthcare workers involved in taking care of you' },
      ],
      analogies: [
        'Healthcare communication is like a game of telephone - if the message is not clear at each step, it can get mixed up by the end.',
        'Good handoffs are like passing a baton in a relay race - the next person needs to have a good grip before you let go.',
      ],
      examples: [
        'When the day nurse tells the night nurse about Mrs. Smith using SBAR: "Mrs. Smith is having more pain (Situation). She had hip surgery this morning (Background). I think she needs stronger pain medicine (Assessment). Can you call the doctor to adjust her medication (Recommendation)?"',
      ],
      patientCounselingPoints: [
        'Speak up if something does not seem right',
        'Ask for explanations you can understand',
        'Make sure you know who to call with questions',
        'You are an important part of the communication team',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective interprofessional communication uses structured tools like SBAR and standardized handoffs to reduce errors, improve patient outcomes, and enhance team functioning in healthcare settings.',
      explanation: `Communication failures are a leading cause of medical errors. Structured communication approaches significantly improve patient safety and care quality.

**The Problem:**

*Communication Failure Statistics:*
- Root cause in 60-70% of sentinel events
- Leading factor in malpractice claims
- Major contributor to readmissions
- Key driver of diagnostic errors

**Structured Communication Tools:**

**SBAR (Situation-Background-Assessment-Recommendation):**

| Component | Purpose | Example |
|-----------|---------|---------|
| Situation | Current status | "I'm calling about Mr. Jones in room 302. His BP is 80/50." |
| Background | Relevant history | "He's post-op day 1 from hip surgery. Been stable until now." |
| Assessment | Your clinical judgment | "I'm concerned he may be bleeding internally." |
| Recommendation | What you need | "I think he needs urgent evaluation and labs." |

*When to Use SBAR:*
- Calling physicians about patient changes
- Handoffs between units
- Rapid response activations
- Escalating concerns

**Handoff Communication:**

*I-PASS Framework:*
- **I**llness severity
- **P**atient summary
- **A**ction list
- **S**ituation awareness
- **S**ynthesis by receiver

*Key Handoff Elements:*
- Patient identification
- Current status
- Pending tasks
- Contingency plans
- Opportunity for questions

**Team Communication Strategies:**

*Huddles:*
- Brief, focused team meetings
- Usually standing
- Review priorities, concerns, resources
- Daily or shift-based

*Debriefs:*
- After-event discussion
- What went well
- What could improve
- Action items

**Communication Barriers:**

*Hierarchy:*
- Reluctance to question authority
- Different communication styles
- Power imbalances

*Solutions:*
- Flattened hierarchy for safety
- CUS words: "I am Concerned, Uncomfortable, this is a Safety issue"
- Two-challenge rule
- Psychological safety

*System Factors:*
- Interruptions
- Noise
- Fatigue
- Workload

**Documentation as Communication:**

*Principles:*
- Clear and complete
- Timely
- Accurate
- Professional

*Common Gaps:*
- Discharge summaries
- Test result follow-up
- Care plan updates
- Medication lists

**Electronic Communication:**

*EHR Messaging:*
- Secure messaging between providers
- Task assignment
- Routing of results
- Care team notifications

*Best Practices:*
- Clear subject lines
- Appropriate urgency marking
- Closed-loop confirmation
- Timely responses`,
      keyTerms: [
        { term: 'sentinel event', definition: 'Unexpected occurrence involving death or serious injury requiring immediate response' },
        { term: 'I-PASS', definition: 'Evidence-based handoff framework: Illness severity, Patient summary, Action list, Situation awareness, Synthesis' },
        { term: 'huddle', definition: 'Brief, focused team meeting to review priorities and concerns' },
        { term: 'debrief', definition: 'Structured discussion after an event to identify lessons learned' },
        { term: 'closed-loop communication', definition: 'Confirming message receipt and understanding by repeating back' },
      ],
      analogies: [
        'SBAR is like a template for a business email - it organizes your thoughts so the receiver gets the key information quickly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Interprofessional communication science integrates evidence-based tools (SBAR, I-PASS), psychological safety principles, and team training programs (TeamSTEPPS) to create high-reliability communication systems that reduce harm and improve outcomes.',
      explanation: `**Evidence Base for Structured Communication:**

*SBAR Evidence:*
- Reduced unexpected deaths
- Improved nurse-physician communication
- Decreased critical lab value errors
- Enhanced team confidence

*I-PASS Evidence:*
- 30% reduction in preventable harm (I-PASS study)
- Fewer omitted information elements
- No increase in handoff duration
- Scalable across settings

**TeamSTEPPS Communication Components:**

*Core Communication Strategies:*
| Strategy | Description | Application |
|----------|-------------|-------------|
| SBAR | Structured situation reporting | Escalation |
| Call-Out | Verbal information broadcast | Emergencies |
| Check-Back | Closed-loop verification | Verbal orders |
| Handoff | Structured care transfer | Transitions |

*CUS Framework:*
- "I am **C**oncerned"
- "I am **U**ncomfortable"
- "This is a **S**afety issue"
- Escalating language for speaking up

*Two-Challenge Rule:*
- Assert concern twice if not acknowledged
- Escalate to chain of command
- Patient safety trumps hierarchy

**Psychological Safety:**

*Concept (Amy Edmondson):*
- Team climate for interpersonal risk-taking
- Belief that speaking up will not be punished
- Foundation for learning organizations

*Healthcare Application:*
- Speaking up about errors
- Questioning decisions
- Offering alternative perspectives
- Reporting near misses

*Building Psychological Safety:*
- Leadership modeling vulnerability
- Framing failure as learning
- Responding constructively to bad news
- Acknowledging uncertainty

**Handoff Science:**

*Failure Modes:*
- Information omission
- Failure to transmit
- Failure to receive
- Misunderstanding
- Memory failure

*Effective Handoff Elements:*
1. Standardized format
2. Face-to-face when possible
3. Limited interruptions
4. Receiver synthesis
5. Opportunity for questions
6. Written backup

*Specialty-Specific Handoffs:*
- Operating room (surgical timeout)
- ED to inpatient
- ICU transfers
- Shift changes

**Communication Technology:**

*EHR Communication Functions:*
- Inbox management
- Task lists
- Results routing
- Care team identification
- Secure messaging

*Alert Management:*
- Alert fatigue as safety threat
- Tiered alert systems
- Override monitoring
- Optimization strategies

**Documentation Quality:**

*Clinical Notes:*
- Problem-oriented structure
- Assessment and plan clarity
- Contingency documentation
- Closed-loop follow-up

*Discharge Communication:*
- Within 24-48 hours
- Medication reconciliation
- Pending results
- Follow-up plan

**Communication Training:**

*Simulation-Based:*
- Role-play scenarios
- Standardized patient encounters
- Team simulation exercises
- Video review

*Assessment Methods:*
- Behavioral observation
- Communication checklists
- Survey instruments
- Outcome correlation`,
      keyTerms: [
        { term: 'psychological safety', definition: 'Team environment where members feel safe to speak up, take risks, and admit mistakes' },
        { term: 'TeamSTEPPS', definition: 'Team Strategies and Tools to Enhance Performance and Patient Safety; AHRQ teamwork training' },
        { term: 'alert fatigue', definition: 'Desensitization to safety alerts due to excessive false or low-value notifications' },
        { term: 'call-out', definition: 'Loud verbal broadcast of critical information to entire team in emergencies' },
        { term: 'check-back', definition: 'Receiver repeats message back to sender to confirm understanding' },
      ],
      clinicalNotes: 'Implement SBAR for escalation calls. Use I-PASS or structured format for handoffs. Build psychological safety by responding constructively to concerns. Address alert fatigue through optimization. Train teams together on communication skills.',
    },
    4: {
      level: 4,
      summary: 'Advanced interprofessional communication integrates high-reliability organization principles, human factors engineering, health IT optimization, and implementation science to create sustainable safety communication systems while addressing hierarchy, culture, and technology challenges.',
      explanation: `**High-Reliability Communication:**

*HRO Principles Applied:*
| Principle | Communication Application |
|-----------|--------------------------|
| Preoccupation with failure | Speaking up culture |
| Reluctance to simplify | Comprehensive handoffs |
| Sensitivity to operations | Real-time situation awareness |
| Commitment to resilience | Contingency communication |
| Deference to expertise | Flattened hierarchy |

*Safety Communication Culture:*
- Just culture (distinguish error from recklessness)
- Non-punitive reporting
- Transparent sharing of events
- Learning from near misses

**Human Factors Engineering:**

*Cognitive Considerations:*
- Working memory limits (~7 items)
- Attention interruption
- Fatigue effects
- Cognitive load

*Design Implications:*
- Chunking information
- Standardized formats
- Forcing functions
- Error traps elimination

*Environmental Factors:*
- Noise reduction
- Dedicated handoff spaces
- Interruption-free zones
- Visual management

**Technology Optimization:**

*EHR Communication Design:*
| Feature | Optimization Strategy |
|---------|----------------------|
| Alerts | Tiered, actionable, specific |
| Messaging | Clear urgency levels |
| Task management | Accountability tracking |
| Documentation | Template standardization |

*Interoperability:*
- Cross-organization communication
- Information blocking prevention
- Patient-mediated exchange
- Standard protocols (FHIR)

*AI Applications:*
- Communication pattern analysis
- Risk prediction for communication failure
- Natural language processing
- Automated handoff summaries

**Hierarchy and Power:**

*Barriers:*
- Authority gradient
- Professional silos
- Gender/race dynamics
- Organizational culture

*Interventions:*
- Leadership modeling
- Interprofessional education
- Structured speaking-up protocols
- Anonymous reporting options

*Evidence:*
- Flat hierarchies correlate with safety
- Speaking up training effective
- Culture change requires sustained effort

**Distributed Team Communication:**

*Virtual Teams:*
- Telehealth integration
- Remote monitoring communication
- Cross-geographic collaboration
- Asynchronous coordination

*Challenges:*
- Reduced non-verbal cues
- Technology reliability
- Time zone coordination
- Relationship building

*Best Practices:*
- Video when possible
- Clear communication norms
- Redundant channels
- Regular synchronous touchpoints

**Implementation Science:**

*Communication Intervention Implementation:*
| Factor | Strategy |
|--------|----------|
| Training | Simulation, team-based |
| Infrastructure | Time, space, tools |
| Culture | Leadership, accountability |
| Sustainability | Metrics, feedback, refreshers |

*Common Failures:*
- Training without system change
- Tools without training
- One-time initiatives
- Lack of measurement

**Quality Measurement:**

*Process Measures:*
- Handoff completeness
- SBAR utilization
- Speaking-up behaviors
- Response times

*Outcome Measures:*
- Adverse events
- Near misses
- Patient experience
- Staff satisfaction

**Research Frontiers:**

1. AI-assisted communication
2. Wearable communication devices
3. Team communication analytics
4. Cross-organization handoffs
5. Patient-inclusive communication`,
      keyTerms: [
        { term: 'authority gradient', definition: 'Difference in decision-making power between team members that can inhibit communication' },
        { term: 'forcing function', definition: 'Design feature that makes errors difficult or impossible to commit' },
        { term: 'just culture', definition: 'Organizational approach distinguishing human error from reckless behavior in response to adverse events' },
        { term: 'information blocking', definition: 'Practice that interferes with access to electronic health information' },
        { term: 'cognitive load', definition: 'Amount of mental effort required to complete a task' },
      ],
      clinicalNotes: 'Apply human factors principles to communication design. Flatten hierarchy for safety communication. Optimize EHR alerts to prevent fatigue. Implement sustainably with measurement and feedback. Address distributed team communication challenges.',
    },
    5: {
      level: 5,
      summary: 'Expert interprofessional communication practice requires mastery of team science, organizational psychology, health informatics, and systems engineering to lead communication transformation that achieves high-reliability performance and advances the science of healthcare team communication.',
      explanation: `**Communication Science Integration:**

*Team Communication Theory:*
| Framework | Application |
|-----------|-------------|
| Shared mental models | Common understanding |
| Transactive memory | Knowing who knows what |
| Collective intelligence | Group problem-solving |
| Communication networks | Information flow patterns |

*Research Methods:*
- Communication pattern analysis
- Social network analysis
- Discourse analysis
- Behavioral observation
- Simulation assessment

**Organizational Transformation:**

*Communication Culture Change:*
- Leadership communication modeling
- Organizational storytelling
- Visible commitment to safety
- Recognition systems

*Change Management:*
- Stakeholder engagement
- Multi-level intervention
- Sustained attention
- Measurement and feedback

*Governance:*
- Communication standards ownership
- Policy development
- Compliance monitoring
- Continuous improvement

**Health Informatics Leadership:**

*System Design Principles:*
| Principle | Implementation |
|-----------|---------------|
| User-centered | Workflow integration |
| Cognitive ergonomics | Information presentation |
| Resilience engineering | Failure recovery |
| Interoperability | Standard protocols |

*AI/ML Applications:*
- NLP for documentation quality
- Communication pattern detection
- Handoff risk prediction
- Automated summarization

*Emerging Technologies:*
- Voice-activated systems
- Ambient documentation
- Smart communication routing
- Real-time translation

**Global and Policy Perspectives:**

*International Standards:*
- WHO multi-professional patient safety curriculum
- Joint Commission requirements
- NHS Patient Safety Strategy
- ISQUA standards

*Policy Implications:*
- Mandatory communication training
- Disclosure requirements
- Reporting systems
- Liability considerations

**Research Leadership:**

*Priority Areas:*
1. Optimal communication training approaches
2. Technology-human interaction
3. Cross-organization communication
4. Patient-inclusive models
5. Equity in communication
6. Implementation sustainability

*Methodological Advances:*
- Team communication metrics
- Real-time capture
- Longitudinal studies
- Implementation trials

**Teaching and Mentoring:**

*Interprofessional Education:*
- Communication competency development
- Simulation-based training
- Longitudinal skill building
- Assessment approaches

*Faculty Development:*
- Communication teaching skills
- Debrief facilitation
- Feedback techniques
- Cultural competency

**Clinical Excellence Framework:**

*Individual Practice:*
- Model effective communication
- Use structured tools consistently
- Speak up for safety
- Receive feedback openly

*Team Leadership:*
- Create psychological safety
- Facilitate team communication
- Implement structured protocols
- Monitor and improve

*Organizational Impact:*
- Design communication systems
- Lead culture change
- Champion technology optimization
- Measure and report outcomes

*System Leadership:*
- Advance communication science
- Shape policy and standards
- Train the next generation
- Contribute to evidence base

**Key Principles for Excellence:**

*For Communication:*
- Clear and complete
- Timely and appropriate
- Respectful and inclusive
- Verified and confirmed

*For Teams:*
- Psychological safety foundation
- Structured tools and processes
- Continuous improvement
- Patient-centered focus

*For Organizations:*
- Leadership commitment
- Infrastructure investment
- Culture of safety
- Measurement and accountability

**Expert Competencies:**

*Communication:*
- Master structured tools
- Adapt to context
- Handle difficult conversations
- Cross-cultural competence

*Leadership:*
- Build psychological safety
- Manage change
- Champion innovation
- Develop others

*Scholarship:*
- Advance knowledge
- Evaluate interventions
- Translate evidence
- Educate professionals`,
      keyTerms: [
        { term: 'shared mental models', definition: 'Common understanding among team members about tasks, roles, and expectations' },
        { term: 'transactive memory', definition: 'Team-level cognitive system of knowing who knows what within the group' },
        { term: 'ambient documentation', definition: 'AI-assisted clinical documentation capturing conversation in the background' },
        { term: 'resilience engineering', definition: 'System design approach focusing on ability to recover from and adapt to unexpected situations' },
        { term: 'social network analysis', definition: 'Method for studying relationships and information flow among individuals or groups' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead communication transformation initiatives
- Design communication systems using human factors principles
- Champion psychological safety and speaking-up culture
- Advance health IT optimization for communication
- Contribute to communication science research
- Train next generation in communication competencies
- Model excellent interprofessional communication
- Measure and continuously improve team communication
- Address health equity in communication practices
- Shape policy and standards for healthcare communication`,
    },
  },

  media: [
    {
      id: 'sbar-diagram',
      type: 'diagram',
      filename: 'sbar-communication-framework.svg',
      title: 'SBAR Communication Framework',
      description: 'Visual guide to using SBAR for structured communication',
    },
  ],

  citations: [
    {
      id: 'teamstepps-ahrq',
      type: 'website',
      title: 'TeamSTEPPS 2.0',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/teamstepps/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'ipass-study',
      type: 'article',
      title: 'Changes in Medical Errors after Implementation of a Handoff Program',
      authors: ['Starmer AJ', 'Spector ND', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'edmondson-safety',
      type: 'textbook',
      title: 'The Fearless Organization: Creating Psychological Safety in the Workplace',
      authors: ['Edmondson AC'],
      source: 'Wiley',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'interprofessional-team-based-care-overview', targetType: 'concept', relationship: 'parent', label: 'Team-Based Care Overview' },
    { targetId: 'interprofessional-handoff-communication', targetType: 'concept', relationship: 'child', label: 'Handoff Communication' },
    { targetId: 'concept-patient-safety', targetType: 'concept', relationship: 'related', label: 'Patient Safety' },
  ],

  tags: {
    systems: ['interprofessional'],
    topics: ['communication', 'patient safety', 'team science', 'quality improvement'],
    keywords: ['SBAR', 'handoff', 'TeamSTEPPS', 'psychological safety', 'healthcare communication'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
