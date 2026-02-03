import { EducationalContent } from '../../types';

export const patientAdvocacyContent: EducationalContent = {
  id: 'patient-advocacy',
  type: 'concept',
  name: 'Patient Advocacy',
  nameEs: 'Defensa del Paciente',
  alternateNames: ['Healthcare Advocacy', 'Patient Support', 'Patient Representation'],
  levels: {
    1: {
      level: 1,
      summary: 'Patient advocacy means helping patients get the care they need and making sure their rights are respected. Anyone can be an advocate - the patient, a family member, or a professional.',
      explanation: `## Being a Patient Advocate

Patient advocacy means helping patients get the care they need and making sure their rights are respected. Anyone can be an advocate - the patient, a family member, or a professional.

### What is an Advocate?

An advocate:
- Speaks up for the patient
- Asks questions
- Takes notes
- Helps make decisions
- Supports the patient\'s wishes

### Types of Advocates

**Yourself:**
- Learn about your condition
- Ask questions
- Speak up about concerns
- Know your rights

**Family or Friend:**
- Emotional support
- Second set of ears
- Help with decisions
- Monitor care

**Professional:**
- Hospital patient representatives
- Private advocates
- Social workers
- Ombudsmen

### What Advocates Do

- Ask questions of doctors
- Take notes during visits
- Help understand information
- Support decision-making
- Watch for problems
- Communicate with staff

### When to Ask for an Advocate

- When you feel overwhelmed
- When facing big decisions
- When care seems wrong
- When you need help navigating
- When language is a barrier`,
      keyTerms: [
        { term: 'Advocate', definition: 'Person who supports and speaks for patient' },
        { term: 'Ombudsman', definition: 'Official who investigates complaints' },
        { term: 'Patient representative', definition: 'Hospital staff who helps patients' },
        { term: 'Support person', definition: 'Family or friend helping patient' }
      ],
      analogies: [
        'A patient advocate is like a guide who helps you navigate unfamiliar territory'
      ],
      examples: [
        'A daughter asks questions and takes notes during her mother\'s cancer consultation',
        'A patient representative helps resolve a billing dispute'
      ]
    },
    2: {
      level: 2,
      summary: 'Patient advocacy takes many forms including self-advocacy, family advocacy, and professional advocacy. Hospital patient representatives, ombudsmen, and private patient advocates serve different roles in supporting patients through healthcare experiences.',
      explanation: `## Types of Patient Advocacy

Patient advocacy takes many forms including self-advocacy, family advocacy, and professional advocacy. Hospital patient representatives, ombudsmen, and private patient advocates serve different roles in supporting patients through healthcare experiences.

### Self-Advocacy

**Skills:**
- Information seeking
- Question asking
- Decision-making participation
- Assertive communication
- Rights awareness

**Preparation:**
- Write down questions
- Bring medical records
- Know your medications
- Research your condition
- Know your insurance

**During Visits:**
- Ask for explanations
- Repeat back understanding
- Request written instructions
- Get contact information
- Follow up

### Family Advocacy

**Role:**
- Emotional support
- Information gathering
- Care monitoring
- Communication bridge
- Decision support

**Preparation:**
- Understand patient\'s wishes
- Legal documents if needed
- Contact list
- Medical history
- Insurance information

**Challenges:**
- Emotional stress
- Conflicting opinions
- Fatigue
- Need for self-care

### Professional Advocates

**Hospital Patient Representatives:**
- Help resolve concerns
- Explain policies
- Connect to resources
- Support communication
- Confidential services

**Ombudsmen:**
- Independent investigators
- Long-term care focus
- Government-affiliated
- Complaint resolution
- System improvement

**Private Patient Advocates:**
- Hired by patients
- Navigation assistance
- Billing review
- Decision support
- Care coordination

**Nurse Case Managers:**
- Coordinate care
- Insurance authorization
- Discharge planning
- Resource connection

### Legal Advocacy

**Advance Directives:**
- Healthcare proxy
- Living will
- DNR orders
- Power of attorney

**Patient Rights:**
- Informed consent
- Privacy
- Access to records
- Refuse treatment

**Complaint Processes:**
- Internal grievance
- State agencies
- Licensing boards
- Legal action`,
      keyTerms: [
        { term: 'Self-advocacy', definition: 'Patient speaking up for themselves' },
        { term: 'Case manager', definition: 'Professional who coordinates care' },
        { term: 'Healthcare proxy', definition: 'Legal document naming decision-maker' },
        { term: 'Grievance', definition: 'Formal complaint about care' }
      ],
      analogies: [
        'Professional patient advocates are like personal assistants for your healthcare'
      ],
      examples: [
        'A patient advocate reviews hospital bills and finds errors',
        'A spouse advocates for pain management for their partner'
      ]
    },
    3: {
      level: 3,
      summary: 'Patient advocacy has evolved from patient rights movements to institutionalized roles and professional organizations. Effective advocacy requires understanding healthcare systems, communication skills, ethical principles, and often specialized knowledge in areas like billing, insurance, or specific diseases.',
      explanation: `## Professional Patient Advocacy

Patient advocacy has evolved from patient rights movements to institutionalized roles and professional organizations. Effective advocacy requires understanding healthcare systems, communication skills, ethical principles, and often specialized knowledge in areas like billing, insurance, or specific diseases.

### History of Patient Advocacy

**Patient Rights Movement:**
- 1970s beginnings
- Informed consent
- Right to refuse treatment
- Access to medical records

**Consumer Advocacy:**
- Disease-specific organizations
- Support groups
- Research funding advocacy
- Policy influence

**Professional Development:**
- Certification programs
- Professional associations
- Standards of practice
- Code of ethics

### Core Competencies

**Healthcare Knowledge:**
- Medical terminology
- Disease understanding
- Treatment options
- Healthcare systems
- Insurance and billing

**Communication Skills:**
- Active listening
- Clear speaking
- Written communication
- Negotiation
- Cultural competence

**Ethical Practice:**
- Patient autonomy
- Confidentiality
- Conflict of interest
- Professional boundaries
- Truthfulness

### Specialization Areas

**Medical Billing Advocacy:**
- Claims review
- Error identification
- Appeal filing
- Cost reduction
- Insurance navigation

**Insurance Navigation:**
- Coverage verification
- Prior authorization
- Denial appeals
- Plan selection
- Medicare/Medicaid

**Disease-Specific:**
- Cancer advocacy
- Rare disease expertise
- Chronic condition management
- Clinical trial navigation
- Research connections

**Elder Care:**
- Nursing facility placement
- Long-term care planning
- Medicare navigation
- Abuse prevention
- End-of-life planning

### Certification and Standards

**Professional Certification:**
- Patient Advocate Certification Board
- Board Certified Patient Advocate (BCPA)
- Continuing education requirements
- Scope of practice

**Professional Associations:**
- Alliance of Professional Health Advocates
- National Association of Healthcare Advocacy
- Disease-specific organizations
- Regional networks

**Ethical Standards:**
- Code of ethics
- Conflict of interest disclosure
- Fee transparency
- Scope limitations
- Referral networks`,
      keyTerms: [
        { term: 'Board Certified Patient Advocate', definition: 'Certified professional patient advocate' },
        { term: 'Prior authorization', definition: 'Insurance approval before service' },
        { term: 'Scope of practice', definition: 'Legal and ethical boundaries of role' },
        { term: 'Conflict of interest', definition: 'Situation compromising objectivity' }
      ]
    },
    4: {
      level: 4,
      summary: 'Healthcare institutions implement patient advocacy through patient representatives, patient and family advisory councils, and grievance procedures. These mechanisms serve quality improvement, regulatory compliance, and patient-centered care goals while requiring appropriate training, resources, and organizational support.',
      explanation: `## Institutional Patient Advocacy

Healthcare institutions implement patient advocacy through patient representatives, patient and family advisory councils, and grievance procedures. These mechanisms serve quality improvement, regulatory compliance, and patient-centered care goals while requiring appropriate training, resources, and organizational support.

### Patient Representatives

**Role and Responsibilities:**
- Listen to concerns
- Explain policies
- Facilitate communication
- Investigate complaints
- Connect to resources

**Qualifications:**
- Communication skills
- Conflict resolution
- Healthcare knowledge
- Empathy
- Cultural competence

**Organizational Placement:**
- Quality department
- Patient experience
- Risk management
- Administration

**CMS Requirements:**
- Must have grievance process
- Timeline for response
- Documentation
- Patient notification

### Patient and Family Advisory Councils

**Purpose:**
- Patient perspective
- Policy input
- Program development
- Quality improvement
- Culture change

**Membership:**
- Diverse patient voices
- Family members
- Community representatives
- rotating terms

**Operations:**
- Regular meetings
- Leadership engagement
- Project assignments
- Communication channels

**Impact Areas:**
- Facility design
- Educational materials
- Care processes
- Policy development

### Grievance Processes

**Formal Grievance:**
- Written complaint
- Investigation required
- Response timeline (typically 7 days)
- Written response
- Appeal rights

**Informal Resolution:**
- Immediate concerns
- Patient representative
- Rapid response
- Documentation

**External Options:**
- State health department
- Licensing boards
- Medicare Quality Improvement Organization
- Legal counsel

### Quality Improvement Integration

**Complaint Analysis:**
- Trend identification
- Root cause analysis
- System improvements
- Staff education
- Policy updates

**Patient Experience Data:**
- HCAHPS scores
- Real-time feedback
- Compliment tracking
- Comparison data

**Patient-Centered Metrics:**
- Communication scores
- Respect measures
- Pain management
- Discharge preparation

### Training and Support

**Advocate Training:**
- Communication skills
- De-escalation
- Cultural competence
- Ethics
- Healthcare systems

**Ongoing Support:**
- Supervision
- Peer support
- Resource access
- Self-care
- Burnout prevention

**Interdisciplinary Collaboration:**
- Social work
- Case management
- Ethics consultation
- Spiritual care
- Palliative care`,
      keyTerms: [
        { term: 'Patient experience', definition: 'Patient perception of care' },
        { term: 'HCAHPS', definition: 'Hospital Consumer Assessment survey' },
        { term: 'Root cause analysis', definition: 'Investigation of underlying causes' },
        { term: 'De-escalation', definition: 'Reducing tension in conflict' }
      ],
      clinicalNotes: 'Patient advisory councils most effective when leadership engaged and recommendations implemented. Patient representatives need authority to resolve issues - not just refer to others. Grievance process must be accessible and timely - delays increase dissatisfaction. Patient experience metrics increasingly tied to payment - advocacy role in improvement critical.'
    },
    5: {
      level: 5,
      summary: 'Patient advocacy is evolving with consumer-directed healthcare, digital tools, and value-based payment. Future directions include peer support networks, patient-reported outcome integration, and policy advocacy while addressing equity, access, and the balance between individual and population health.',
      explanation: `## Future of Patient Advocacy

Patient advocacy is evolving with consumer-directed healthcare, digital tools, and value-based payment. Future directions include peer support networks, patient-reported outcome integration, and policy advocacy while addressing equity, access, and the balance between individual and population health.

### Consumer-Directed Healthcare

**High-Deductible Plans:**
- Cost transparency needs
- Shopping for care
- Price negotiation
- Advocacy for savings

**Health Savings Accounts:**
- Financial planning
- Tax optimization
- Long-term savings
- Retirement healthcare

**Direct Primary Care:**
- Membership models
- Advocacy role changes
- Insurance navigation
- Care coordination

### Digital Health Advocacy

**Patient Portals:**
- Record access
- Communication
- Appointment scheduling
- Prescription management

**Mobile Apps:**
- Symptom tracking
- Medication reminders
- Cost comparison
- Provider ratings

**Online Communities:**
- Peer support
- Information sharing
- Research participation
- Policy organizing

**Telehealth:**
- Access expansion
- Digital divide concerns
- Navigation needs
- Quality assurance

### Value-Based Care

**Shared Decision-Making:**
- Patient preferences
- Evidence integration
- Decision aids
- Risk communication

**Patient-Reported Outcomes:**
- PROMs integration
- Quality measurement
- Clinical care use
- Research applications

**Care Coordination:**
- Patient navigators
- Care teams
- Information sharing
- Transitions support

### Health Equity

**Access Advocacy:**
- Insurance expansion
- Safety net programs
- Language services
- Transportation

**Bias and Discrimination:**
- Recognizing inequities
- Speaking up
- Policy change
- Cultural humility

**Social Determinants:**
- Housing
- Food security
- Employment
- Education

### Policy Advocacy

**Patient Organizations:**
- Research funding
- Regulatory input
- Access expansion
- Awareness campaigns

**Grassroots Organizing:**
- Personal stories
- Legislative visits
- Media engagement
- Coalition building

**Global Health:**
- Essential medicines
- Universal health coverage
- Health system strengthening
- Human rights

### Ethical Considerations

**Resource Allocation:**
- Individual vs population
- Cost-effectiveness
- Rationing
- Priority setting

**Information Quality:**
- Misinformation
- Commercial influence
- Confirmation bias
- Evidence evaluation

**Professional Boundaries:**
- Scope of practice
- Medical advice
- Liability
- Collaboration`,
      keyTerms: [
        { term: 'PROMs', definition: 'Patient-reported outcome measures' },
        { term: 'Value-based care', definition: 'Payment based on outcomes' },
        { term: 'Direct primary care', definition: 'Membership-based primary care' },
        { term: 'Social determinants', definition: 'Non-medical factors affecting health' }
      ],
      clinicalNotes: 'Digital advocacy tools expanding access but may worsen disparities. Patient-reported outcomes increasingly used in quality measurement and payment - advocacy needed for appropriate use. Policy advocacy by patient organizations increasingly sophisticated and effective. Health equity central to advocacy - addressing structural factors more important than individual navigation.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'communication'],
    keywords: ['patient advocacy', 'healthcare advocacy', 'patient rights', 'patient support']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
