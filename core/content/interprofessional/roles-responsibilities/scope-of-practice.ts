/**
 * Scope of Practice
 *
 * Comprehensive education on professional scope of practice, regulatory frameworks,
 * and the legal and ethical boundaries of healthcare practice.
 */

import { EducationalContent } from '../../types';

export const SCOPE_OF_PRACTICE: EducationalContent = {
  id: 'interprofessional-scope-of-practice',
  type: 'concept',
  name: 'Scope of Practice',
  alternateNames: ['Practice authority', 'Professional boundaries', 'Practice scope', 'Legal scope of practice'],

  levels: {
    1: {
      level: 1,
      summary: 'Scope of practice means the things each healthcare worker is trained and allowed to do.',
      explanation: `Each healthcare worker has specific things they can do based on their training and the law. This is called their scope of practice.

**What is Scope of Practice?**
Scope of practice is like a job description that is set by law. It tells what each healthcare worker can and cannot do.

**Why It Matters:**

*For Your Safety:*
- Makes sure people do only what they are trained to do
- Prevents mistakes from untrained care
- Keeps everyone accountable

*Examples:*
- A nurse can give you medicine but cannot decide which new medicine you need
- A medical assistant can take your blood pressure but cannot tell you what it means
- A physical therapist can help you exercise but cannot prescribe pain pills

**Different Levels of Practice:**

*Doctors (Physicians):*
- Can do almost anything medical
- Diagnose diseases
- Prescribe all medications
- Perform surgeries

*Nurse Practitioners:*
- Can diagnose and treat many conditions
- Can prescribe medications (in most states)
- Work independently or with doctors

*Registered Nurses:*
- Give medications doctors order
- Monitor your condition
- Teach about your health
- Coordinate your care

*Medical Assistants:*
- Take vital signs
- Help doctors during visits
- Cannot give medications on their own

**How It Affects You:**

*What You Might See:*
- One person says "I need to ask the doctor about that"
- Someone refers you to another team member
- Different people do different parts of your care

*Why This Happens:*
- Each person stays in their area of expertise
- You get the right person for each task
- Your care is safer

**What You Can Do:**
- Ask who is caring for you
- Ask what each person's role is
- Understand that teamwork keeps you safe
- Speak up if something seems wrong`,
      keyTerms: [
        { term: 'scope of practice', definition: 'The things a healthcare worker is trained and legally allowed to do' },
        { term: 'licensed', definition: 'Having official permission from the government to do a job' },
        { term: 'delegation', definition: 'When one healthcare worker asks another to do a task they are allowed to do' },
      ],
      analogies: [
        'Scope of practice is like lanes on a highway - each car (healthcare worker) stays in their lane where they belong.',
        'Think of it like positions in basketball - a guard has different skills than a center, and each plays their position.',
      ],
      examples: [
        'When Sarah asked the medical assistant about her lab results, the assistant said, "The nurse or doctor will explain those to you." This is because interpreting lab results is not in the medical assistant\'s scope of practice.',
      ],
      patientCounselingPoints: [
        'Different team members are trained for different tasks',
        'It is good when someone says they need to check with another professional',
        'This teamwork keeps your care safe',
        'You can always ask who does what on your care team',
      ],
    },
    2: {
      level: 2,
      summary: 'Scope of practice defines the legal boundaries within which healthcare professionals may practice, determined by education, licensure, credentialing, and institutional policies.',
      explanation: `Scope of practice provides the legal framework for what healthcare professionals can and cannot do. Understanding these boundaries is essential for safe, effective care.

**Definition:**
Scope of practice refers to the procedures, actions, and processes that a healthcare practitioner is permitted to undertake based on their professional license, education, and demonstrated competence.

**Components of Scope:**

*Legal Authority:*
- State practice acts
- Board regulations
- Federal laws (DEA, CMS)

*Professional Standards:*
- Certification requirements
- Professional guidelines
- Specialty standards

*Institutional Policies:*
- Hospital bylaws
- Credentialing and privileging
- Employment policies

**Scope by Profession:**

| Profession | Key Scope Elements |
|------------|-------------------|
| Physician (MD/DO) | Full diagnostic and treatment authority |
| Nurse Practitioner | Varies by state (full to restricted) |
| Physician Assistant | Collaborative practice with physician |
| Registered Nurse | Nursing care under physician orders |
| Pharmacist | Dispensing, counseling, protocol prescribing |
| Physical Therapist | Movement and rehabilitation |

**Scope Determination Process:**

1. **Education**: Degree requirements and curriculum
2. **Examination**: Licensing and certification exams
3. **Licensure**: State board approval to practice
4. **Credentialing**: Verification of qualifications
5. **Privileging**: Institution-specific authorization

**Prescribing Authority:**

*Full Authority:*
- Physicians (all schedules)
- NPs (varies by state)
- PAs (with physician)

*Limited Authority:*
- Pharmacists (protocols)
- Dentists (limited drugs)
- Optometrists (limited drugs)

*Schedule Variations:*
- Schedule II controlled substances most restricted
- State variations significant

**Supervision and Collaboration:**

*Types:*
| Type | Definition |
|------|------------|
| Direct supervision | Supervisor immediately available |
| Indirect supervision | Supervisor available but not on-site |
| Collaborative practice | Agreement for consultation |
| Independent practice | No supervision required |

*By Profession:*
- NP: Independent in many states
- PA: Collaborative agreement required (most states)
- RN: Functions under physician orders

**Delegation:**

*Definition:*
Transferring authority to perform a task to someone qualified to perform it

*Requirements:*
- Delegator has authority to perform task
- Delegatee has competence to perform task
- Task is appropriate for delegation
- Proper supervision maintained

*Cannot Delegate:*
- Assessment and evaluation
- Nursing judgment
- Tasks requiring professional licensure

**Common Scope Issues:**

*Challenges:*
- Practicing outside scope (legal liability)
- Scope overlap and conflict
- Expanding scope of practice
- Interstate practice barriers

*Resolution:*
- Know your scope
- Document appropriately
- Communicate with team
- Seek clarification when unclear`,
      keyTerms: [
        { term: 'practice act', definition: 'State law defining the scope of practice for a profession' },
        { term: 'credentialing', definition: 'Process of verifying qualifications to practice' },
        { term: 'privileging', definition: 'Institutional authorization to perform specific procedures' },
        { term: 'delegation', definition: 'Transferring authority for a task to another qualified person' },
        { term: 'collaborative practice agreement', definition: 'Formal agreement defining PA or NP practice relationship with physician' },
      ],
      analogies: [
        'Scope of practice is like traffic laws - they create order and safety by defining what everyone can and cannot do.',
      ],
    },
    3: {
      level: 3,
      summary: 'Scope of practice is governed by state practice acts, professional standards, and institutional policies, with ongoing evolution driven by workforce needs, evidence of safety, and policy advocacy, requiring clinicians to navigate complex regulatory landscapes.',
      explanation: `**Regulatory Framework:**

*State Authority:*
- Practice acts define scope
- Boards of nursing/medicine/pharmacy enforce
- Rules and regulations interpret statutes
- Board opinions guide practice

*Federal Influence:*
| Agency | Scope-Related Authority |
|--------|------------------------|
| DEA | Controlled substance prescribing |
| CMS | Billing and supervision requirements |
| VA | Practice authority in VA settings |
| IHS | Practice authority in tribal settings |

**Scope Variations by State:**

*NP Practice Authority (as of 2024):*
- Full Practice: 27 states + DC
- Reduced Practice: 12 states
- Restricted Practice: 11 states

*PA Practice:*
- Optimal Team Practice: Increasing adoption
- Supervision required: Declining but still majority
- Scope determination: Varies significantly

**Scope Evolution Process:**

*Drivers of Change:*
1. Workforce shortages
2. Access gaps
3. Evidence of safety
4. Cost pressures
5. Professional advocacy

*Change Mechanisms:*
- Legislative action (practice act amendment)
- Regulatory change (board rules)
- Pilot programs
- Legal decisions

**Professional Standards:**

*Standard Setting Bodies:*
| Profession | Organizations |
|------------|---------------|
| Nursing | ANA, specialty organizations |
| Medicine | AMA, specialty societies |
| Pharmacy | ASHP, APhA |
| PT | APTA |

*Standards Functions:*
- Define competencies
- Guide education
- Inform regulation
- Establish expectations

**Institutional Scope:**

*Credentialing Process:*
1. Application and verification
2. Primary source verification
3. Committee review
4. Board approval
5. Privilege delineation

*Privileging:*
- Procedure-specific authorization
- Evidence of competence required
- Volume and outcome considerations
- Periodic re-evaluation

**Scope Conflicts:**

*Types:*
- Interprofessional (NP vs MD)
- Intraprofessional (generalist vs specialist)
- Individual vs institutional
- State vs federal

*Resolution Approaches:*
- Evidence review
- Stakeholder negotiation
- Regulatory clarification
- Policy advocacy

**Liability Considerations:**

*Practicing Within Scope:*
- Standard of care for profession
- Reasonable practitioner standard
- Documentation requirements

*Outside Scope:*
- Negligence per se possible
- Increased liability exposure
- License jeopardy
- Criminal potential

**Scope and Quality:**

*Evidence Base:*
- NP/PA care quality equivalent to physicians for many conditions
- Pharmacist involvement improves medication safety
- Team-based care improves outcomes
- Scope expansion not associated with quality decline

*Quality Considerations:*
- Competence-based scope
- Outcome measurement
- Continuous development
- Appropriate consultation`,
      keyTerms: [
        { term: 'full practice authority', definition: 'State policy allowing NPs to practice independently without physician oversight' },
        { term: 'optimal team practice', definition: 'PA practice model emphasizing collaboration over supervision' },
        { term: 'primary source verification', definition: 'Confirming credentials directly from issuing organization' },
        { term: 'negligence per se', definition: 'Automatic negligence finding when professional violates statute' },
        { term: 'standard of care', definition: 'Level of care that reasonably competent professional would provide' },
      ],
      clinicalNotes: 'Know your state-specific scope of practice. Understand institutional privileging requirements. Document at level appropriate to scope. Consult when approaching scope boundaries. Stay current on scope changes in your profession.',
    },
    4: {
      level: 4,
      summary: 'Advanced scope of practice analysis requires understanding the interplay of legal frameworks, professional politics, workforce economics, and patient safety evidence to navigate practice boundaries, lead scope policy advocacy, and optimize team-based care within regulatory constraints.',
      explanation: `**Policy Analysis Framework:**

*Scope Policy Determinants:*
| Factor | Influence |
|--------|-----------|
| Safety evidence | Should drive but often doesn't |
| Workforce needs | Major access driver |
| Professional politics | Significant barrier |
| Economic interests | Both driver and barrier |
| Consumer advocacy | Growing influence |

*Policy Analysis Questions:*
1. What is the evidence for safety?
2. Who benefits from current policy?
3. What are access implications?
4. What are cost implications?
5. What political dynamics exist?

**Scope Expansion Evidence:**

*NP Independent Practice:*
- No quality difference vs physician
- Access improvement, especially rural
- Cost-effectiveness in primary care
- Patient satisfaction equivalent

*PA Practice:*
- Team-based care effective
- Supervision requirements limit access
- Efficiency gains demonstrated
- Quality outcomes comparable

*Pharmacist Scope:*
- Chronic disease management effective
- Immunization authority safe
- Collaborative practice beneficial
- Provider status limited

**Political Economy:**

*Stakeholder Interests:*
| Stakeholder | Position |
|-------------|----------|
| Physicians | Generally oppose expansion |
| NPs/PAs | Support expansion |
| Hospitals | Variable (cost vs quality) |
| Insurers | Support access expansion |
| Patients | Generally support access |

*Advocacy Strategies:*
- Coalition building
- Evidence marshaling
- Economic argument
- Patient stories
- Political engagement

**Workforce Economics:**

*Cost Considerations:*
- Salary differentials
- Productivity comparisons
- Overhead costs
- Training costs

*Economic Analysis:*
- NP/PA care 10-30% less costly
- But substitution not 1:1
- Team-based models most efficient
- Context matters significantly

**Interstate Practice:**

*Barriers:*
- State-based licensure
- Variable scope
- Administrative burden
- Telehealth complexity

*Solutions:*
| Mechanism | Application |
|-----------|-------------|
| Compact | Nursing (NLC), Medicine (IMLC) |
| Endorsement | Streamlined licensing |
| Federal preemption | VA, tribal, military |
| Telehealth exception | During COVID |

**Institutional Optimization:**

*Full Scope Utilization:*
- Task analysis
- Protocol development
- Team training
- Workflow redesign

*Barriers:*
- Physician resistance
- Credentialing limitations
- Billing constraints
- Cultural inertia

**Quality and Safety Governance:**

*Scope and Quality:*
- Peer review processes
- Quality metrics by provider type
- Event analysis
- Improvement initiatives

*Safety Considerations:*
- Appropriate supervision structures
- Consultation requirements
- Competency validation
- Outcome tracking

**Emerging Issues:**

*Technology Impact:*
- AI-assisted diagnosis
- Remote monitoring
- Telehealth scope
- Automation and scope

*New Professions:*
- Community health workers
- Health coaches
- Care coordinators
- Scope definition challenges

**Research Gaps:**

1. Long-term outcomes by provider type
2. Optimal team configurations
3. Technology impact on scope
4. Implementation effectiveness
5. Equity implications`,
      keyTerms: [
        { term: 'political economy', definition: 'Analysis of how political and economic factors shape policy' },
        { term: 'NLC', definition: 'Nurse Licensure Compact; agreement enabling multistate nursing practice' },
        { term: 'IMLC', definition: 'Interstate Medical Licensure Compact; streamlined physician licensing' },
        { term: 'full scope utilization', definition: 'Practice using all services a professional is trained and authorized to provide' },
        { term: 'federal preemption', definition: 'Federal law superseding state scope limitations' },
      ],
      clinicalNotes: 'Analyze scope policy with evidence and stakeholder awareness. Advocate for evidence-based scope policies. Optimize institutional scope utilization. Address scope-related barriers to care. Stay engaged with policy developments.',
    },
    5: {
      level: 5,
      summary: 'Expert scope of practice leadership requires mastery of regulatory science, policy advocacy, workforce optimization, and organizational transformation to advance patient access and team-based care through evidence-based scope policies and practice models.',
      explanation: `**Regulatory Science:**

*Regulatory Analysis:*
| Element | Assessment |
|---------|-----------|
| Statutory framework | Practice act analysis |
| Regulatory interpretation | Board rule review |
| Case law | Legal precedent |
| Policy trends | National and state |

*Evidence Synthesis:*
- Systematic reviews of scope evidence
- Quality outcome comparisons
- Safety data analysis
- Economic evaluation

**Policy Leadership:**

*Advocacy Competencies:*
- Policy analysis
- Coalition building
- Legislative engagement
- Media communication
- Evidence presentation

*Strategic Approaches:*
| Level | Strategies |
|-------|-----------|
| State | Legislation, board rules |
| Federal | CMS policy, Congressional |
| Institutional | Bylaws, policies |
| Professional | Standards, positions |

**Workforce Transformation:**

*System Design:*
- Optimal team composition
- Scope-based task allocation
- Training and development
- Performance management

*Implementation:*
- Change management
- Stakeholder engagement
- Workflow redesign
- Technology support

**Global Perspectives:**

*International Models:*
| Country | Scope Features |
|---------|---------------|
| UK | Extensive nurse/PA integration |
| Canada | Provincial variation, expansion |
| Australia | Rural and remote expanded scope |
| Netherlands | Practice nurse model |

*Lessons:*
- Context adaptation required
- Gradual expansion often successful
- Evidence overcomes resistance
- System support essential

**Future Directions:**

*Trends:*
- Continued scope expansion
- Interstate practice growth
- Technology impact increasing
- Team-based models expanding

*Challenges:*
- Professional resistance persists
- Implementation barriers
- Equity considerations
- Workforce distribution

**Research Leadership:**

*Priority Questions:*
1. Optimal scope boundaries
2. Implementation effectiveness
3. Long-term outcomes
4. Equity impact
5. Technology integration

*Methodological Approaches:*
- Natural experiments
- Implementation studies
- Health services research
- Economic evaluation

**Clinical Excellence Framework:**

*Individual Practice:*
- Know and practice within scope
- Seek appropriate consultation
- Document appropriately
- Advocate for optimal scope

*Team Leadership:*
- Optimize team scope utilization
- Address scope conflicts constructively
- Develop team competencies
- Ensure appropriate supervision

*Organizational Impact:*
- Design scope-optimized systems
- Lead institutional policy
- Champion workforce development
- Measure and improve

*System Leadership:*
- Shape regulatory policy
- Advance evidence base
- Lead professional advocacy
- Mentor future leaders

**Key Principles:**

*For Policy:*
- Evidence-based scope determination
- Patient access priority
- Safety without unnecessary restriction
- Equity consideration

*For Practice:*
- Know your scope
- Practice within scope
- Advocate for optimal scope
- Support team members' scope

*For Systems:*
- Full scope utilization
- Regulatory compliance
- Continuous improvement
- Patient-centered focus

**Expert Competencies:**

*Regulatory:*
- Legal framework mastery
- Policy analysis
- Advocacy skills
- Stakeholder navigation

*Clinical:*
- Scope-appropriate practice
- Consultation and referral
- Team collaboration
- Quality monitoring

*Leadership:*
- Organizational transformation
- Policy engagement
- Evidence generation
- Mentorship and education`,
      keyTerms: [
        { term: 'regulatory science', definition: 'Study of how regulation is developed, implemented, and impacts outcomes' },
        { term: 'natural experiment', definition: 'Research opportunity created by policy change in some but not all jurisdictions' },
        { term: 'scope optimization', definition: 'Designing systems to fully utilize each profession\'s authorized capabilities' },
        { term: 'workforce transformation', definition: 'Fundamental change in how health workforce is deployed and utilized' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead evidence-based scope policy advocacy
- Champion full scope utilization in organizations
- Design optimal team-based care models
- Navigate complex regulatory landscapes expertly
- Generate and synthesize scope evidence
- Mentor professionals in scope navigation
- Address scope-related access barriers
- Build coalitions for policy change
- Model interprofessional collaboration
- Advance health equity through scope policy`,
    },
  },

  media: [
    {
      id: 'scope-framework',
      type: 'diagram',
      filename: 'scope-of-practice-framework.svg',
      title: 'Scope of Practice Framework',
      description: 'Visual guide to components and determinants of scope of practice',
    },
  ],

  citations: [
    {
      id: 'ncsbn-scope',
      type: 'website',
      title: 'APRN Consensus Model',
      source: 'National Council of State Boards of Nursing',
      url: 'https://www.ncsbn.org/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'ftc-competition',
      type: 'article',
      title: 'Policy Perspectives: Competition and the Regulation of Advanced Practice Nurses',
      source: 'Federal Trade Commission',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nap-future-nursing',
      type: 'textbook',
      title: 'The Future of Nursing 2020-2030',
      source: 'National Academies Press',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'interprofessional-healthcare-roles', targetType: 'concept', relationship: 'sibling', label: 'Healthcare Roles' },
    { targetId: 'interprofessional-team-based-care-overview', targetType: 'concept', relationship: 'parent', label: 'Team-Based Care Overview' },
    { targetId: 'concept-medical-ethics', targetType: 'concept', relationship: 'related', label: 'Medical Ethics' },
  ],

  tags: {
    systems: ['interprofessional'],
    topics: ['regulation', 'health policy', 'healthcare professions', 'law'],
    keywords: ['scope of practice', 'licensure', 'credentialing', 'practice authority', 'NP', 'PA'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
