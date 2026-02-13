/**
 * Calling Consults Guide - Clinical Rotations
 *
 * Educational content on effectively requesting specialist consultations,
 * including preparation, communication, and follow-up.
 */

import { EducationalContent } from '../../types';

export const callingConsults: EducationalContent = {
  id: 'guide-calling-consults',
  type: 'concept',
  name: 'Calling Consults',
  alternateNames: ['Consultation Request', 'Specialist Consult', 'Consult Call'],

  levels: {
    1: {
      level: 1,
      summary: 'Calling a consult is asking a specialist doctor for their expert opinion about a patient\'s care, done through a phone call or electronic request.',
      explanation: `## What Is a Consult?

A consult (consultation) is when one doctor asks another doctor with special expertise for help with a patient\'s care. For example, a medicine doctor might ask a heart doctor (cardiologist) for help with a patient having heart problems.

## Why Consults Are Important

**Reasons to Call a Consult:**
- The patient needs special expertise
- A procedure needs to be done
- A complex decision needs expert input
- The patient has a condition outside your expertise

**Types of Consults:**
1. **Opinion only** - You want advice on what to do
2. **Co-management** - The specialist helps manage the patient
3. **Procedure** - The specialist will do a procedure
4. **Transfer of care** - The specialist takes over completely

## Before You Call

**Be Prepared With:**
- Patient\'s name and location
- Why you are calling (the question)
- Brief history of the problem
- What you have already done
- Current medications
- Relevant test results

## How to Make the Call

**Introduce Yourself:**
"Hi, this is [Your Name], a medical student working with Dr. [Attending] on [Service]. I\'m calling for a cardiology consult."

**Present the Case:**
1. Who the patient is (age, gender, main problem)
2. Why you need help (specific question)
3. Important background information
4. What you want them to do

**Example:**
"This is Mr. Smith, a 65-year-old man with chest pain. We\'re worried he might be having a heart attack. His EKG shows some changes. We\'d like your opinion on whether he needs a cardiac catheterization."

## After the Call

**Document:**
- Who you spoke with
- What they recommended
- When they will see the patient
- Any follow-up needed

**Follow Up:**
- Make sure the consult happens
- Communicate recommendations to your team
- Implement the plan

## Tips for Success

**Do:**
- Know your patient well before calling
- Have a clear, specific question
- Be respectful of the consultant\'s time
- Have the chart available
- Write down the recommendations

**Don\'t:**
- Call without reviewing the case
- Ask vague questions like "What would you do?"
- Argue with the consultant
- Forget to follow up`,
      keyTerms: [
        { term: 'consult', definition: 'Request for a specialist physician to evaluate a patient and provide recommendations' },
        { term: 'consultant', definition: 'The specialist doctor who provides expert opinion' },
        { term: 'co-management', definition: 'When the primary team and specialist share responsibility for patient care' },
        { term: 'curbside consult', definition: 'Informal request for advice without formal consultation' },
      ],
      analogies: [
        'A consult is like asking a specialist mechanic to look at a specific problem with your car.',
        'Calling a consult is like adding an expert to your team - they bring special skills to help the patient.',
      ],
      examples: [
        'Calling a nephrologist to help manage a patient with severe kidney problems and electrolyte imbalances.',
        'Requesting a surgical consult for a patient with abdominal pain concerning for appendicitis.',
      ],
      patientCounselingPoints: [
        'Specialists are brought in to provide additional expertise for complex problems.',
        'Your primary doctor will continue to coordinate your overall care even with specialists involved.',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective consultation requires clear communication of the clinical question, organized presentation of relevant data, and collaborative care coordination between primary and consulting services.',
      explanation: `## Consultation Types

| Type | Responsibility | Example |
|------|---------------|---------|
| Opinion only | Primary team maintains care | "Is this rash drug-related?" |
| Recommend | Primary team implements | Management recommendations |
| Co-manage | Shared responsibility | Diabetes with endocrinology |
| Transfer | Consultant takes over | Surgery admission |
| Procedure | Specific intervention | Cardiac catheterization |

## Consult Request Components

**Required Information:**
| Element | Content |
|---------|---------|
| Patient ID | Name, MRN, location |
| Service | Your team |
| Reason | Specific question |
| Urgency | Routine vs urgent vs emergent |
| Contact | How to reach you |

**Clinical Information:**
| Component | Details |
|-----------|---------|
| One-liner | Patient summary |
| HPI | Relevant history |
| PMH | Pertinent conditions |
| Current status | Vitals, exam |
| Data | Labs, imaging |
| Current plan | What you\'re doing |

## The 5 Cs of Consultation

**1. Contact:**
- Identify yourself and your service
- Identify patient clearly
- State urgency

**2. Communicate:**
- Brief, focused presentation
- One-liner first
- Pertinent positives/negatives

**3. Core Question:**
- Specific, answerable question
- What do you want from consultant?
- Clear expectations

**4. Collaboration:**
- Discuss recommendations
- Agree on plan
- Clarify responsibilities

**5. Closing the Loop:**
- Document consultation
- Communicate to team
- Implement recommendations
- Follow up

## Urgency Levels

| Level | Timeline | Examples |
|-------|----------|----------|
| Emergent | Immediately | STEMI, trauma |
| Urgent | Hours | ACS, sepsis |
| Routine | 24-48 hours | Stable chronic issues |
| Elective | Outpatient | Non-urgent evaluations |

## Preparation Checklist

**Before Calling:**
| Task | Complete |
|------|----------|
| Review chart | Yes |
| See patient | Yes |
| Know question | Specific |
| Gather data | Labs, imaging |
| Check allergies | Current list |
| Review meds | Accurate list |
| Discuss with team | Attending aware |

## Communication Script

**Opening:**
"Hello, this is [Name], [role] with [Service]. I have a consultation request for [Specialty]. Is now a good time?"

**Presentation:**
"The patient is [one-liner]. The specific question is [question]. Relevant history includes [key points]. We have done [workup]. Current status is [vitals, exam]."

**Closing:**
"When do you think you can see the patient? How should we reach you with questions? Thank you for your help."

## Documentation

**Consult Note Elements:**
| Element | Documentation |
|---------|---------------|
| Date/time | When called |
| Consultant | Name, service |
| Reason | Question asked |
| Urgency | Level |
| Response | Recommendations |
| Plan | Actions agreed |

**Following Recommendations:**
- Read consultant note promptly
- Communicate to primary team
- Implement agreed plan
- Re-consult if course changes

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Vague question | Be specific |
| Missing data | Gather before calling |
| Wrong urgency | Match to clinical need |
| Poor timing | Consider consultant workflow |
| Not following up | Track recommendations |`,
      keyTerms: [
        { term: 'STEMI', definition: 'ST-elevation myocardial infarction - heart attack requiring emergency intervention' },
        { term: 'MRN', definition: 'Medical Record Number - unique patient identifier' },
        { term: 'pertinent negative', definition: 'Absence of expected symptom that helps narrow diagnosis' },
        { term: 'closing the loop', definition: 'Ensuring recommendations are received, understood, and implemented' },
      ],
      analogies: [
        'A good consult request is like a good restaurant order - specific, clear, and includes all necessary details.',
        'Consultation is a handshake, not a handoff - both teams work together for the patient.',
      ],
      examples: [
        'Requesting cardiology opinion: "65-year-old with chest pain, troponin 0.5, EKG with ST depressions - question: medical management vs cath?"',
        'Consulting infectious disease: "Fever of unknown origin for 5 days, negative blood cultures, CT unremarkable - need guidance on workup."',
      ],
      patientCounselingPoints: [
        'Different specialists may visit you throughout your hospital stay - each contributes their expertise to your care.',
        'Your primary team coordinates all specialist recommendations into your overall care plan.',
      ],
    },
    3: {
      level: 3,
      summary: 'Expert consultation management requires sophisticated communication skills, appropriate urgency triage, collaborative care coordination, and effective integration of specialist recommendations into comprehensive patient care.',
      explanation: `## Consultation Etiquette

**Professional Communication:**
| Element | Best Practice |
|---------|---------------|
| Respect | Acknowledge expertise |
| Efficiency | Value consultant time |
| Clarity | Specific questions |
| Responsiveness | Available for discussion |
| Gratitude | Thank for assistance |

**Context Awareness:**
| Factor | Consideration |
|--------|---------------|
| Time of day | Business hours vs overnight |
| Consultant workload | Multiple consults |
| Urgency | Appropriate triage |
| Setting | Academic vs community |

## Advanced Preparation

**Data Organization:**
| Category | Preparation |
|----------|-------------|
| Labs | Trend relevant values |
| Imaging | Have images available |
| Medications | Reconcile list |
| Allergies | Document reactions |
| Consent | For procedures |

**Question Refinement:**
| Type | Example |
|------|---------|
| Diagnostic | "Is this PE?" |
| Therapeutic | "Should we anticoagulate?" |
| Procedural | "Is patient candidate for biopsy?" |
| Prognostic | "Expected course?" |

## Consultation Reasoning

**Decision to Consult:**
| Reason | Example |
|--------|---------|
| Expertise needed | Complex arrhythmia |
| Procedure required | Endoscopy |
| Out of scope | Pediatric patient |
| Second opinion | Uncertain diagnosis |
| Complication | Uncontrolled bleeding |

**Avoiding Unnecessary Consults:**
- Review guidelines first
- Attempt basic management
- Consider curbside discussion
- Ensure appropriate workup

## Electronic Consultation

**eConsult Platforms:**
| Feature | Benefit |
|---------|---------|
| Asynchronous | Flexible timing |
| Documentation | Written record |
| Review | Time for consideration |
| Access | Multiple specialties |

**eConsult Best Practices:**
| Element | Practice |
|---------|----------|
| Question | Single, focused |
| Data | Attach relevant |
| Context | Clinical situation |
| Follow-up | Response plan |

## Complex Consultations

**Multiple Consultants:**
| Challenge | Strategy |
|-----------|----------|
| Coordination | Designate lead |
| Conflicting recs | Facilitate discussion |
| Scheduling | Prioritize by urgency |
| Communication | Team updates |

**Ethical Considerations:**
| Issue | Approach |
|-------|----------|
| Patient refusal | Document discussion |
| Futile care | Ethics consultation |
| Capacity | Formal evaluation |
| Conflict | Mediation |

## Consultant Perspective

**What Consultants Need:**
| Element | Why Important |
|---------|---------------|
| Clear question | Focus evaluation |
| Relevant data | Avoid duplication |
| Current status | Assess urgency |
| Primary plan | Context |
| Accessibility | Questions, updates |

**Building Relationships:**
- Professional courtesy
- Appropriate referrals
- Timely follow-up
- Feedback
- Reciprocity

## Quality Metrics

**Consultation Quality:**
| Metric | Standard |
|--------|----------|
| Response time | By urgency level |
| Satisfaction | Both services |
| Outcomes | Patient improvement |
| Efficiency | Appropriate utilization |

**Appropriate Use:**
| Review | Criteria |
|--------|----------|
| Necessity | Could primary manage? |
| Timing | Urgency appropriate? |
| Workup | Complete before consult? |
| Follow-through | Recommendations implemented? |`,
      keyTerms: [
        { term: 'eConsult', definition: 'Electronic consultation using secure messaging without in-person evaluation' },
        { term: 'curbside consultation', definition: 'Informal request for advice, often without formal documentation' },
        { term: 'reconcile', definition: 'Process of comparing medication lists to ensure accuracy' },
        { term: 'triage', definition: 'Prioritizing patients based on urgency of need' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced consultation practice involves complex care coordination, interprofessional collaboration, systems thinking, and quality improvement to optimize specialist integration and patient outcomes.',
      explanation: `## Complex Care Coordination

**Multidisciplinary Teams:**
| Specialist | Role | Coordination |
|------------|------|--------------|
| Primary | Overall management | Team lead |
| Subspecialty | Expert input | Focused role |
| Supportive | Therapy, social | Integration |
| Procedural | Interventions | Timing |

**Care Conferences:**
| Element | Purpose |
|---------|---------|
| Preparation | Data compilation |
| Facilitation | Discussion guide |
| Documentation | Consensus plan |
| Follow-up | Implementation |

**Conflicting Recommendations:**
| Strategy | Implementation |
|----------|----------------|
| Direct discussion | Consultant to consultant |
| Team meeting | All stakeholders |
| Ethics consultation | Value conflicts |
| Patient/family | Goals clarification |

## Systems Approach

**Consultation Systems:**
| Component | Optimization |
|-----------|--------------|
| Access | Response time |
| Communication | Standardization |
| Documentation | EHR integration |
| Feedback | Quality loop |

**Operational Efficiency:**
| Metric | Target |
|--------|--------|
| Response time | Urgency-based |
| Completion rate | 100% |
| Satisfaction | >80% |
| Cost | Value-based |

**Technology Integration:**
| Tool | Application |
|------|-------------|
| EHR consults | Electronic requests |
| Paging systems | Urgent contact |
| Telemedicine | Remote evaluation |
| AI support | Triage assistance |

## Quality Improvement

**Consultation Review:**
| Type | Focus |
|------|-------|
| Peer review | Appropriateness |
| Outcome review | Effectiveness |
| Process review | Efficiency |
| Satisfaction | Experience |

**Metrics:**
| Domain | Measures |
|--------|----------|
| Timeliness | Response times |
| Appropriateness | Guidelines adherence |
| Communication | Clarity scores |
| Outcomes | Patient results |

**Improvement Strategies:**
| Strategy | Implementation |
|----------|----------------|
| Education | Appropriate use |
| Guidelines | Decision support |
| Feedback | Data sharing |
| Technology | EHR optimization |

## Interprofessional Collaboration

**Team Dynamics:**
| Element | Importance |
|---------|------------|
| Respect | Mutual recognition |
| Communication | Clear, timely |
| Role clarity | Responsibilities |
| Shared goals | Patient-centered |

**Advanced Practice Providers:**
| Role | Consult Integration |
|------|---------------------|
| NP/PA | First-line evaluation |
| Specialized APPs | Direct consultation |
| Care coordinators | Facilitation |

## Legal and Ethical

**Liability Considerations:**
| Issue | Documentation |
|-------|---------------|
| Request | Clear question |
| Response | Timely follow-up |
| Implementation | Action taken |
| Refusal | Reason documented |

**Informed Consent:**
| Element | Requirement |
|---------|-------------|
| Procedure | Risks, benefits |
| Alternatives | Options discussed |
| Competence | Capacity assessment |
| Refusal | Respected, documented |

## Education and Training

**Consultation Skills:**
| Skill | Training |
|-------|----------|
| Communication | Role play |
| Prioritization | Case discussion |
| Negotiation | Simulation |
| Documentation | Feedback |

**Teaching Consultation:**
- Modeling
- Observation
- Feedback
- Independence`,
      keyTerms: [
        { term: 'multidisciplinary team', definition: 'Healthcare team with members from different professions collaborating on patient care' },
        { term: 'care conference', definition: 'Meeting of healthcare team, patient, and family to discuss care plan' },
        { term: 'value-based care', definition: 'Healthcare delivery model focused on outcomes per dollar spent' },
        { term: 'decision support', definition: 'Clinical tools providing guidance at point of care' },
      ],
      clinicalNotes: `Clinical Pearl: The best consultants are those who understand their role as collaborators, not just technicians. When requesting consultation, frame your question to invite partnership rather than just task completion. When serving as consultant, remember you are joining an existing care team and must integrate with their workflow and goals.

Expert Tip: Master the art of the "consult conversation." The most valuable consults often occur when both parties engage in dialogue rather than transactional information exchange. Ask "What would you do if this were your patient?" to access tacit knowledge that formal recommendations may miss.`,
    },
    5: {
      level: 5,
      summary: 'Professional mastery of consultation involves leadership in care coordination, systems design, innovation in consultation models, and contribution to advancing interprofessional practice.',
      explanation: `## Consultation Leadership

**Strategic Consultation:**
| Level | Focus |
|-------|-------|
| Individual | Patient optimization |
| Service | Operational excellence |
| Institution | System design |
| Professional | Field advancement |

**Consultant Development:**
| Element | Program |
|---------|---------|
| Skills | Communication training |
| Business | RVU management |
| Quality | Outcomes monitoring |
| Leadership | Program direction |

## Systems Design

**Consultation Models:**
| Model | Structure |
|-------|-----------|
| Traditional | Reactive, individual |
| Proactive | Panel management |
| Integrated | Embedded specialist |
| eConsult | Asynchronous |
| Hub-and-spoke | Regional centers |

**Access Design:**
| Strategy | Implementation |
|----------|----------------|
| Triage | Centralized intake |
| Urgency | Priority pathways |
| Capacity | Demand management |
| Technology | Telehealth |

**Value Optimization:**
| Element | Approach |
|---------|----------|
| Appropriateness | Decision support |
| Efficiency | Standardized pathways |
| Outcomes | Quality metrics |
| Cost | Value analysis |

## Innovation

**Emerging Models:**
| Innovation | Application |
|------------|-------------|
| AI triage | Automated routing |
| Predictive analytics | Anticipatory consults |
| Mobile consults | Point-of-care |
| Virtual teams | Remote expertise |

**Technology:**
| Tool | Status |
|------|--------|
| NLP | Consult documentation |
| Decision support | Recommendation engines |
| Telemedicine | Expanded access |
| Blockchain | Consult verification |

## Research and Scholarship

**Consultation Science:**
| Area | Questions |
|------|-----------|
| Outcomes | Patient impact |
| Efficiency | Process optimization |
| Access | Equity studies |
| Technology | Innovation evaluation |

**Quality Science:**
| Method | Application |
|--------|-------------|
| Implementation | Guideline adoption |
| Comparative | Model effectiveness |
| Cost | Value studies |
| Patient-centered | Experience |

## Professional Advancement

**Academic Consultation:**
| Role | Contribution |
|------|--------------|
| Director | Program leadership |
| Educator | Training programs |
| Researcher | Scholarship |
| Clinician | Expert practice |

**Organizational Leadership:**
| Position | Impact |
|----------|--------|
| CMO | System policy |
| Chair | Department direction |
| Medical director | Operations |
| QI leader | Quality improvement |

## Legacy

**Contributions:**
| Domain | Legacy |
|--------|--------|
| Patient care | Better outcomes |
| Education | Training excellence |
| Research | Evidence base |
| Policy | System change |

**Sustainability:**
- Succession planning
- Pipeline development
- Knowledge preservation
- Innovation continuity`,
      keyTerms: [
        { term: 'RVU', definition: 'Relative Value Unit - measure of physician work for productivity and billing' },
        { term: 'tacit knowledge', definition: 'Expert knowledge that is difficult to articulate or transfer' },
        { term: 'anticipatory consult', definition: 'Proactive consultation based on predicted needs' },
        { term: 'NLP', definition: 'Natural Language Processing - AI technology for text analysis' },
      ],
      clinicalNotes: `Expert Perspective: Consultation is the cornerstone of modern healthcare delivery. Expert consultation practice demonstrates:

1. Clear understanding of when and why to consult
2. Effective communication across professional boundaries
3. Collaborative partnership rather than transactional interaction
4. System thinking about care coordination
5. Commitment to timely, appropriate access
6. Quality improvement orientation
7. Innovation in consultation models

The future of consultation includes greater use of technology, team-based models, and value-based approaches. Mastering both requesting and providing consultation is essential for all physicians, regardless of specialty or practice setting.`,
    },
  },

  media: [
    {
      id: 'consult-process-flow',
      type: 'diagram',
      filename: 'consult-process-flow.svg',
      title: 'Consultation Process',
      description: 'Steps in requesting and completing a consultation',
    },
    {
      id: 'consult-communication-checklist',
      type: 'diagram',
      filename: 'consult-communication-checklist.svg',
      title: 'Consult Communication Checklist',
      description: 'Key elements to include when calling a consult',
    },
  ],

  citations: [
    {
      id: 'sgim-consult',
      type: 'article',
      title: 'The Consultation Process: Best Practices',
      source: 'Society of General Internal Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'consult-guidelines',
      type: 'article',
      title: 'Effective Consultation in Internal Medicine',
      authors: ['Goldman L', 'Lee T', 'Rudd P'],
      source: 'Annals of Internal Medicine',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'guide-presenting-patients', targetType: 'concept', relationship: 'related', label: 'Presenting Patients' },
    { targetId: 'guide-pre-rounding', targetType: 'concept', relationship: 'related', label: 'Pre-Rounding' },
    { targetId: 'clerkship-overview', targetType: 'concept', relationship: 'parent', label: 'Clinical Clerkships' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-skills', 'communication', 'interprofessional'],
    keywords: ['consultation', 'specialist', 'referral', 'communication', 'care coordination'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['all'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default callingConsults;
