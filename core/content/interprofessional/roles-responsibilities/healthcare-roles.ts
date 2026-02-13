/**
 * Healthcare Roles
 *
 * Comprehensive education on different healthcare professions, their training,
 * responsibilities, and contributions to patient care.
 */

import { EducationalContent } from '../../types';

export const HEALTHCARE_ROLES: EducationalContent = {
  id: 'interprofessional-healthcare-roles',
  type: 'concept',
  name: 'Healthcare Roles and Responsibilities',
  alternateNames: ['Healthcare professions', 'Medical team members', 'Health professions', 'Clinical roles'],

  levels: {
    1: {
      level: 1,
      summary: 'Many different healthcare workers help take care of you, each with special training and skills.',
      explanation: `When you get healthcare, many different people work together to help you. Each person has special training to do their job well.

**Doctors (Physicians):**

*What They Do:*
- Diagnose what is wrong
- Decide on treatments
- Prescribe medications
- Perform procedures and surgeries
- Lead the medical team

*Types of Doctors:*
- Primary care: Your regular doctor for checkups and common problems
- Specialists: Experts in one area (heart, bones, skin, etc.)
- Surgeons: Perform operations

**Nurses:**

*What They Do:*
- Give medications
- Check your vital signs (temperature, blood pressure)
- Teach you about your health
- Monitor how you are doing
- Coordinate your care

*Types of Nurses:*
- RN (Registered Nurse): Most common type
- Nurse Practitioner: Can prescribe medicines like doctors
- Specialty nurses: ICU, operating room, etc.

**Other Important Team Members:**

*Pharmacists:*
- Make sure your medicines are safe
- Explain how to take medications
- Check for drug interactions

*Physical Therapists:*
- Help you move and exercise
- Help recover from injuries
- Strengthen muscles

*Medical Assistants:*
- Take your vital signs
- Help doctors during visits
- Schedule appointments

*Social Workers:*
- Help with emotional needs
- Connect you to resources
- Plan for after hospital

*Dietitians/Nutritionists:*
- Plan healthy meals
- Help with special diets
- Teach about nutrition

**Other Helpers:**
- Lab technicians (do blood tests)
- X-ray technicians (take images)
- Respiratory therapists (help with breathing)
- Patient care technicians (help with daily needs)

**Why Different Roles Matter:**
Each person brings special skills that together give you complete care. They work as a team with you at the center.

**How to Know Who is Caring for You:**
- Ask people to introduce themselves
- Ask what their role is
- Look at name badges
- Ask your nurse if you are unsure`,
      keyTerms: [
        { term: 'physician', definition: 'A doctor who diagnoses and treats illnesses' },
        { term: 'registered nurse (RN)', definition: 'A nurse with advanced training who gives medications and coordinates care' },
        { term: 'primary care', definition: 'Regular healthcare for prevention and common health problems' },
        { term: 'specialist', definition: 'A doctor who focuses on one area of the body or type of disease' },
      ],
      analogies: [
        'A healthcare team is like a soccer team - everyone has a position (goalkeeper, defense, forward) but they all work together to win the game (get you healthy).',
        'Different healthcare workers are like different tools in a toolbox - each one does something different, and together they can fix any problem.',
      ],
      examples: [
        'When Mrs. Lee broke her hip, her care team included: a surgeon to fix her hip, nurses to give her medications and check on her, a physical therapist to help her walk again, and a social worker to help plan for going home.',
      ],
      patientCounselingPoints: [
        'It is okay to ask anyone on your healthcare team what their job is',
        'Each person has important skills to help you',
        'You can ask any team member questions about their area',
        'You are the most important member of your healthcare team',
      ],
    },
    2: {
      level: 2,
      summary: 'Healthcare delivery involves multiple professions with distinct training, scopes of practice, and responsibilities, working collaboratively to provide comprehensive patient care.',
      explanation: `Modern healthcare requires coordination among numerous professionals, each with specific education, training, and legal authority to practice.

**Physician Professions:**

*Allopathic Physicians (MD):*
- 4-year medical school after college
- 3-7 years residency training
- May subspecialize with fellowship
- Full prescribing and procedural authority

*Osteopathic Physicians (DO):*
- Similar training to MDs
- Additional osteopathic manipulative training
- Equivalent practice rights

*Physician Specialties:*
| Category | Examples |
|----------|----------|
| Primary Care | Family medicine, internal medicine, pediatrics |
| Medical Specialties | Cardiology, oncology, neurology |
| Surgical Specialties | General surgery, orthopedics, neurosurgery |
| Hospital-Based | Emergency medicine, anesthesiology, radiology |

**Advanced Practice Providers:**

*Nurse Practitioners (NP):*
- Master's or doctoral nursing degree
- Can diagnose and treat
- Prescribing authority (varies by state)
- Primary and specialty care

*Physician Assistants (PA):*
- Master's degree PA program
- Practice with physician collaboration
- Prescribing authority
- All medical and surgical specialties

**Nursing Professions:**

| Level | Education | Responsibilities |
|-------|-----------|------------------|
| Nursing Assistant (CNA) | Certificate | Basic care, vital signs |
| Licensed Practical Nurse (LPN) | 1-year program | Medication administration, basic nursing |
| Registered Nurse (RN) | Associate or Bachelor's | Full nursing practice |
| Advanced Practice (APRN) | Master's or Doctorate | Expanded clinical role |

**Allied Health Professions:**

*Pharmacy:*
- PharmD degree (4 years)
- Medication management
- Some prescribing authority (protocols)
- Patient counseling

*Physical Therapy:*
- DPT degree (3 years)
- Movement and rehabilitation
- Direct access in most states

*Respiratory Therapy:*
- Associate or Bachelor's degree
- Ventilator management
- Pulmonary treatments

*Occupational Therapy:*
- Master's or doctoral degree
- Daily living activities
- Adaptive equipment

*Social Work:*
- MSW for clinical practice
- Psychosocial support
- Discharge planning
- Resource connection

*Dietetics:*
- Bachelor's plus internship
- Registered Dietitian (RD)
- Medical nutrition therapy

**Support Roles:**

*Medical Assistants:*
- Certificate or associate degree
- Rooming, vitals, documentation assistance
- Administrative tasks

*Patient Care Technicians:*
- Certificate program
- Basic patient care
- Hospital and dialysis settings

*Health Unit Coordinators:*
- Coordinate unit activities
- Administrative support
- Communication hub

**Interprofessional Practice:**

*Team Members by Setting:*
| Setting | Typical Team |
|---------|--------------|
| Primary Care | MD/DO, NP/PA, RN, MA, PharmD |
| Hospital Floor | MD, RN, CNA, SW, PT |
| ICU | MD, RN, RT, PharmD |
| OR | Surgeon, Anesthesia, Circulator RN, Scrub Tech |
| Rehabilitation | Physiatrist, PT, OT, SLP, RN, SW |

**Understanding Roles:**
- Each profession has defined scope of practice
- Collaboration improves outcomes
- Roles may overlap and complement
- Team leadership varies by setting`,
      keyTerms: [
        { term: 'scope of practice', definition: 'The legally defined range of activities a healthcare professional can perform' },
        { term: 'advanced practice provider', definition: 'NPs and PAs who practice with expanded clinical authority' },
        { term: 'residency', definition: 'Postgraduate clinical training required for physicians' },
        { term: 'allied health', definition: 'Healthcare professions distinct from medicine, nursing, and dentistry' },
        { term: 'PharmD', definition: 'Doctor of Pharmacy degree required for pharmacist practice' },
      ],
      analogies: [
        'Healthcare professions are like an orchestra - each section (strings, brass, percussion) has different training and instruments, but together they create music.',
      ],
    },
    3: {
      level: 3,
      summary: 'Healthcare professions have distinct educational pathways, regulatory frameworks, and scopes of practice that define their contributions to interprofessional teams, with evolving roles influenced by workforce needs, policy changes, and emerging care models.',
      explanation: `**Educational Pathways:**

*Physician Training:*
| Stage | Duration | Content |
|-------|----------|---------|
| Pre-medical | 4 years | Science prerequisites |
| Medical school | 4 years | Basic/clinical sciences |
| Residency | 3-7 years | Specialty training |
| Fellowship | 1-3 years | Subspecialty (optional) |

*Nursing Pathways:*
- ADN (Associate): 2 years, entry-level RN
- BSN (Bachelor's): 4 years, increasingly required
- MSN (Master's): NP, CNS, education, administration
- DNP (Doctorate): Advanced practice, leadership

*PA Education:*
- Bachelor's + prerequisites
- Master's PA program (27 months)
- Generalist training
- Specialty via postgraduate programs

**Credentialing and Licensure:**

*Components:*
| Element | Definition |
|---------|------------|
| Education | Degree from accredited program |
| Licensure | State permission to practice |
| Certification | Specialty competency verification |
| Privileging | Institution-specific authorization |

*Regulatory Bodies:*
- State medical/nursing boards
- National certification organizations
- Hospital credentialing committees
- CMS conditions of participation

**Scope of Practice:**

*Legal Definition:*
- State practice acts
- Regulatory rules
- Board opinions
- Court decisions

*Determinants:*
- Education and training
- Certification
- State regulations
- Institutional policies
- Collaboration agreements

*Scope Variations:*
| Profession | Full Practice States | Restricted |
|------------|---------------------|------------|
| NP | 27+ states | Remainder |
| PA | Optimal team practice | Supervision required |
| PharmD | Provider status varies | Protocol-dependent |

**Role Evolution:**

*Drivers of Change:*
- Workforce shortages
- Cost pressures
- Access needs
- Care model innovation
- Technology

*Emerging Roles:*
- Clinical pharmacists in primary care
- Hospital medicine NPs/PAs
- Care coordinators (RN, SW)
- Community health workers
- Medical scribes

**Interprofessional Competencies (IPEC):**

*Core Domains:*
1. Values/Ethics
2. Roles/Responsibilities
3. Interprofessional Communication
4. Teams and Teamwork

*Role Clarity:*
- Understanding own profession
- Understanding others' contributions
- Appropriate task allocation
- Overlap management

**Care Model Implications:**

*Primary Care Transformation:*
- Team-based care central
- Panel management by team
- Full scope utilization
- Care coordination roles

*Hospital Care:*
- Hospitalist-nurse partnerships
- Pharmacy integration
- Therapy early involvement
- Discharge planning teams

*Specialty Care:*
- Multidisciplinary clinics
- Disease management teams
- Shared follow-up models

**Challenges:**

*Professional Tensions:*
- Scope encroachment concerns
- Supervision debates
- Reimbursement equity
- Professional identity

*System Issues:*
- Workforce maldistribution
- Pipeline limitations
- Reimbursement barriers
- Regulatory complexity

**Quality and Safety:**

*Role-Related Safety:*
- Clear accountability
- Appropriate delegation
- Communication protocols
- Supervision structures

*Team Performance:*
- Shared mental models
- Role clarity correlates with outcomes
- Interprofessional training effective`,
      keyTerms: [
        { term: 'credentialing', definition: 'Process of verifying qualifications to practice' },
        { term: 'privileging', definition: 'Institution-specific authorization to provide specific services' },
        { term: 'IPEC', definition: 'Interprofessional Education Collaborative; defines core competencies for teamwork' },
        { term: 'full practice authority', definition: 'State policy allowing independent NP practice without physician oversight' },
        { term: 'hospitalist', definition: 'Physician specializing in inpatient hospital care' },
      ],
      clinicalNotes: 'Understand scope of practice for team members. Utilize full scope of each profession. Ensure clear role definition and accountability. Support interprofessional competency development. Address scope tensions constructively.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of healthcare roles requires analysis of workforce policy, regulatory frameworks, professional identity formation, and the dynamics of interprofessional practice to optimize team composition, address workforce challenges, and advance collaborative care models.',
      explanation: `**Workforce Policy Analysis:**

*Physician Workforce:*
| Factor | Current Status |
|--------|---------------|
| Supply | Projected shortage 37,000-124,000 by 2034 |
| Distribution | Maldistribution (urban/rural, specialty) |
| Pipeline | GME funding constraints |
| International | IMG reliance significant |

*Nursing Workforce:*
- Projected shortage varies by state
- Aging workforce
- Faculty shortages
- Pipeline expansion efforts

*Advanced Practice:*
- Rapid NP growth
- PA growth steady
- Scope expansion trend
- Distribution follows physicians

**Regulatory Framework:**

*State Variations:*
| Aspect | Variation |
|--------|-----------|
| NP practice | Full, reduced, restricted authority |
| PA oversight | Optimal to direct supervision |
| Pharmacist scope | Provider status in some states |
| Therapy direct access | Variable by profession |

*Federal Policy:*
- CMS reimbursement rules
- DEA prescribing authority
- HRSA workforce programs
- VA independent practice

*Advocacy and Politics:*
- Professional associations
- Scope of practice battles
- Evidence-based policy
- Coalition building

**Professional Identity:**

*Formation:*
- Educational socialization
- Clinical experience
- Professional community
- Ethical frameworks

*Identity Challenges:*
- Role expansion threats
- Team-based blurring
- Generational differences
- Practice setting variation

*Interprofessional Identity:*
- Dual identity model
- Profession + team member
- Not replacement but addition
- Developmental process

**Team Composition Optimization:**

*Skill Mix Analysis:*
- Task analysis
- Competency mapping
- Cost-effectiveness
- Quality optimization

*Evidence Base:*
| Setting | Effective Compositions |
|---------|----------------------|
| Primary care | MD/NP + RN + MA + PharmD |
| ICU | MD + RN (low ratios) + PharmD + RT |
| OR | Surgeon + Anesthesia + RN + Tech |
| Home health | RN + PT/OT + Aides |

*Factors Influencing:*
- Patient population
- Service volume
- Acuity
- Financial model
- Regulatory requirements

**Emerging Roles:**

*New Professions:*
- Clinical informatics
- Care coordinators
- Community health workers
- Health coaches

*Expanded Roles:*
- Clinical pharmacist prescribing
- Therapy advanced practice
- Emergency nurse practitioners
- Hospital medicine PA/NPs

*Technology-Enabled:*
- Remote monitoring specialists
- Telehealth coordinators
- AI integration specialists

**Implementation Challenges:**

*Workforce Development:*
- Education capacity
- Training sites
- Faculty development
- Diversity pipeline

*System Integration:*
- Workflow redesign
- EHR role support
- Reimbursement alignment
- Culture change

**Research Evidence:**

*Team Effectiveness:*
- NP/PA care quality comparable to physicians
- Pharmacist integration improves outcomes
- Team-based care reduces costs
- Care coordination reduces readmissions

*Gaps:*
- Optimal compositions
- Cost-effectiveness
- Long-term outcomes
- Implementation factors

**Health Equity:**

*Workforce Diversity:*
- Underrepresentation persists
- Pipeline programs
- Retention challenges
- Leadership development

*Access Implications:*
- Scope expansion and access
- Community health workers
- Language concordance
- Geographic distribution`,
      keyTerms: [
        { term: 'IMG', definition: 'International medical graduate; physician trained outside the US' },
        { term: 'GME', definition: 'Graduate medical education; residency and fellowship training' },
        { term: 'skill mix', definition: 'Combination of different healthcare workers needed for care delivery' },
        { term: 'professional identity', definition: 'Sense of self derived from membership in a profession' },
        { term: 'dual identity', definition: 'Simultaneous identification with profession and interprofessional team' },
      ],
      clinicalNotes: 'Understand workforce policy context for team planning. Support full scope utilization for all professions. Address professional identity needs while building team identity. Use evidence to guide team composition. Champion health equity in workforce development.',
    },
    5: {
      level: 5,
      summary: 'Expert practice in healthcare roles requires mastery of workforce science, regulatory policy, organizational development, and interprofessional education leadership to transform healthcare delivery through optimized team-based models that address workforce challenges and advance health equity.',
      explanation: `**Workforce Science:**

*Research Methods:*
| Approach | Application |
|----------|-------------|
| Workforce modeling | Supply/demand projection |
| Task analysis | Role optimization |
| Cost-effectiveness | Team composition |
| Implementation science | Practice transformation |

*Key Findings:*
- Team care equivalent or superior quality
- Cost-effectiveness variable by model
- Implementation context critical
- Sustainability requires system support

**Regulatory Policy Leadership:**

*Policy Analysis:*
- Scope of practice evidence
- Quality and safety data
- Access implications
- Cost considerations

*Policy Engagement:*
- Testimony and comment
- Coalition building
- Evidence synthesis
- Implementation guidance

*Future Directions:*
- Federal preemption debates
- National licensure compact
- Telehealth scope
- AI and scope

**Organizational Development:**

*Practice Transformation:*
| Element | Strategy |
|---------|----------|
| Structure | Role redesign |
| Process | Workflow optimization |
| Culture | Collaborative norms |
| Technology | EHR team support |

*Change Leadership:*
- Stakeholder engagement
- Vision communication
- Resistance management
- Sustainability planning

**Interprofessional Education:**

*Curriculum Design:*
- Competency-based
- Longitudinal development
- Authentic practice
- Assessment integration

*Faculty Development:*
- Interprofessional teaching skills
- Facilitation competency
- Assessment expertise
- Role modeling

*Accreditation:*
- IPE requirements across professions
- Outcome measurement
- Continuous improvement

**Global Perspectives:**

*International Models:*
| Country | Notable Features |
|---------|-----------------|
| UK | Extensive NP/PA integration |
| Netherlands | Practice nurse model |
| Brazil | Community health teams |
| Australia | Rural extended roles |

*Lessons:*
- Context adaptation essential
- Policy frameworks matter
- Professional culture varies
- Workforce needs drive change

**Future of Health Professions:**

*Trends:*
- Scope expansion continuing
- Technology integration
- Team-based models expanding
- Specialization and generalization tension

*Emerging Questions:*
- AI impact on roles
- Remote care implications
- Workforce automation
- New professions emergence

**Clinical Excellence Framework:**

*Team Member:*
- Master own professional role
- Understand others' contributions
- Practice within scope
- Contribute to team

*Team Leader:*
- Optimize role utilization
- Address scope tensions
- Build collaborative culture
- Develop team members

*Organizational Leader:*
- Design optimal team models
- Address workforce challenges
- Advocate for policy
- Invest in development

*System Leader:*
- Shape workforce policy
- Advance education models
- Generate evidence
- Lead transformation

**Key Principles:**

*For Professions:*
- Clear identity foundation
- Scope based on competence
- Accountability and collaboration
- Continuous development

*For Teams:*
- Right roles for right tasks
- Full scope utilization
- Mutual respect
- Shared accountability

*For Systems:*
- Evidence-based policy
- Workforce investment
- Distribution attention
- Diversity and equity

**Expert Competencies:**

*Clinical:*
- Professional excellence
- Team collaboration
- Role flexibility
- Patient advocacy

*Leadership:*
- Team development
- Change management
- Workforce planning
- Policy engagement

*Scholarly:*
- Workforce research
- Education innovation
- Evidence synthesis
- Knowledge translation`,
      keyTerms: [
        { term: 'workforce modeling', definition: 'Quantitative analysis projecting healthcare workforce supply and demand' },
        { term: 'task analysis', definition: 'Systematic breakdown of work into component tasks for role optimization' },
        { term: 'national licensure compact', definition: 'Agreement allowing practice across states with single license' },
        { term: 'practice transformation', definition: 'Fundamental change in how healthcare is delivered' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead workforce policy engagement with evidence
- Design optimal team-based care models
- Champion interprofessional education transformation
- Address professional identity while building team culture
- Advocate for scope policies expanding access
- Invest in workforce diversity and equity
- Anticipate technology impact on roles
- Generate and translate workforce research
- Develop next generation of team leaders
- Model interprofessional excellence in practice`,
    },
  },

  media: [
    {
      id: 'healthcare-roles-overview',
      type: 'diagram',
      filename: 'healthcare-roles-overview.svg',
      title: 'Healthcare Professions Overview',
      description: 'Visual guide to healthcare professions and their roles',
    },
  ],

  citations: [
    {
      id: 'ipec-2016',
      type: 'website',
      title: 'Core Competencies for Interprofessional Collaborative Practice: 2016 Update',
      source: 'Interprofessional Education Collaborative',
      url: 'https://www.ipecollaborative.org/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'aamc-workforce',
      type: 'website',
      title: 'The Complexities of Physician Supply and Demand Projections',
      source: 'Association of American Medical Colleges',
      url: 'https://www.aamc.org/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'hrsa-workforce',
      type: 'website',
      title: 'Health Workforce Research',
      source: 'Health Resources and Services Administration',
      url: 'https://bhw.hrsa.gov/',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'interprofessional-team-based-care-overview', targetType: 'concept', relationship: 'parent', label: 'Team-Based Care Overview' },
    { targetId: 'interprofessional-scope-of-practice', targetType: 'concept', relationship: 'sibling', label: 'Scope of Practice' },
    { targetId: 'interprofessional-communication', targetType: 'concept', relationship: 'related', label: 'Interprofessional Communication' },
  ],

  tags: {
    systems: ['interprofessional'],
    topics: ['healthcare professions', 'workforce', 'education', 'health policy'],
    keywords: ['healthcare roles', 'physician', 'nurse', 'NP', 'PA', 'pharmacist', 'allied health'],
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
