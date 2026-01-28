/**
 * Patient Rights - Patient Safety Educational Content
 *
 * Explains the fundamental rights patients have in healthcare settings
 * and how to advocate for them.
 */

import { EducationalContent } from '../../types';

export const patientRightsContent: EducationalContent = {
  id: 'patient-safety-patient-rights',
  type: 'concept',
  name: 'Patient Rights',
  alternateNames: ['Patient Bill of Rights', 'Healthcare Rights', 'Medical Rights'],

  levels: {
    1: {
      level: 1,
      summary: 'Patients have important rights that protect them and ensure they get safe, respectful care.',
      explanation: `Your Rights as a Patient

When you receive medical care, you have rights that protect you. These rights help make sure you are treated with respect and get safe care.

Right to Respectful Care

You have the right to:
- Be treated with dignity
- Have your privacy protected
- Receive care without discrimination
- Have your cultural beliefs respected

Right to Information

You have the right to:
- Know about your health condition
- Understand your treatment options
- Ask questions and get answers
- Get information in a way you understand

Right to Make Decisions

You have the right to:
- Say yes or no to treatment
- Change your mind about treatment
- Get a second opinion
- Leave the hospital (in most cases)

Right to Safety

You have the right to:
- Receive safe care
- Have your medicines checked
- Know who is caring for you
- Report problems without fear

Right to Your Medical Records

You have the right to:
- See your medical records
- Get copies of your records
- Ask for corrections to errors
- Know who has seen your records

If Your Rights Are Not Respected

You can:
- Talk to your nurse or doctor
- Ask to speak with a patient advocate
- Contact the hospital administration
- File a complaint with the state

Remember: These rights belong to you. Do not be afraid to speak up if something does not feel right.`,

      keyTerms: [
        { term: 'patient rights', definition: 'Protections and privileges patients have when receiving healthcare' },
        { term: 'informed consent', definition: 'Agreement to treatment after understanding the facts' },
        { term: 'privacy', definition: 'Keeping your personal health information confidential' },
        { term: 'advocate', definition: 'Someone who speaks up for your rights and needs' },
        { term: 'discrimination', definition: 'Treating someone unfairly because of who they are' }
      ],

      analogies: [
        'Patient rights are like the rules of a game - they make sure everyone is treated fairly.',
        'Your medical records are like your personal diary - you have the right to know what is in them and who reads them.'
      ],

      examples: [
        'You have the right to ask your doctor to explain your diagnosis in simple words you understand.',
        'You can refuse a treatment even if your doctor recommends it.',
        'If you feel you are not being listened to, you can ask to speak with a patient advocate.'
      ]
    },

    2: {
      level: 2,
      summary: 'Patient rights encompass respectful treatment, informed consent, privacy, access to records, and the ability to participate in care decisions.',
      explanation: `Understanding Patient Rights

The Patient Bill of Rights outlines fundamental protections for individuals receiving healthcare. These rights apply in hospitals, clinics, and other healthcare settings.

Right to Respectful Care

Dignity and Respect:
- Considerate, respectful care
- Recognition of personal dignity
- Accommodation of cultural values
- Freedom from abuse or harassment
- Pain management appropriate to condition

Non-Discrimination:
- Care regardless of race, ethnicity, religion
- Regardless of disability or age
- Regardless of sexual orientation or gender identity
- Regardless of ability to pay
- Regardless of source of payment

Right to Information and Communication

Medical Information:
- Diagnosis and explanation
- Treatment options and risks
- Expected outcomes
- Alternative treatments
- Prognosis if requested

Communication:
- Information in understandable language
- Interpreter services if needed
- Access to medical records
- Explanation of bills and charges

Right to Informed Consent

Elements of Informed Consent:
- Explanation of proposed treatment
- Potential risks and benefits
- Alternative treatments available
- Consequences of no treatment
- Opportunity to ask questions

Special Considerations:
- Right to refuse treatment
- Right to withdraw consent
- Right to change providers
- Right to leave against medical advice (AMA)
- Emergency exceptions

Right to Privacy and Confidentiality

Privacy Protections:
- Confidential medical records
- Private examination and treatment
- Control over who sees records
- Right to approve disclosures

HIPAA Rights:
- Notice of privacy practices
- Accounting of disclosures
- Request for restrictions
- Confidential communications
- Right to complain about violations

Right to Participate in Care Decisions

Decision-Making Rights:
- Participate in developing care plan
- Accept or refuse treatment
- Formulate advance directives
- Have wishes respected
- Designate decision-maker if unable

Family Involvement:
- Include family in care decisions when appropriate
- Visitors according to preferences
- Support persons present

Right to Safety and Quality Care

Safety Rights:
- Safe care environment
- Identity verification
- Medication safety checks
- Fall prevention measures
- Infection prevention

Quality Rights:
- Appropriate assessment and treatment
- Care planning and coordination
- Discharge planning
- Continuity of care

Right to Complaint Resolution

Grievance Process:
- Voice complaints without fear
- Fair review of complaints
- Response within reasonable time
- Access to advocacy services
- External review options

Advocacy Resources:
- Patient advocates/ombudsman
- Ethics committees
- Risk management
- State regulatory agencies
- Accrediting organizations

Advance Directives

Types of Directives:
- Living will
- Healthcare power of attorney
- Do not resuscitate (DNR) orders
- Physician orders for life-sustaining treatment (POLST)

Rights Regarding Directives:
- Create or modify directives
- Have wishes followed
- Revoke at any time
- Receive information about options`,

      keyTerms: [
        { term: 'Patient Bill of Rights', definition: 'Document outlining fundamental patient protections' },
        { term: 'informed consent', definition: 'Process of obtaining agreement after full disclosure' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act - privacy law' },
        { term: 'advance directive', definition: 'Legal document stating healthcare wishes for future incapacity' },
        { term: 'patient advocate', definition: 'Hospital representative who helps resolve patient concerns' },
        { term: 'ombudsman', definition: 'Official who investigates complaints and advocates for patients' }
      ],

      analogies: [
        'Patient rights are like consumer protection laws - they ensure fair treatment in a service relationship.',
        'An advance directive is like leaving instructions for someone housesitting - it tells them what to do when you cannot communicate directly.'
      ],

      examples: [
        'A patient requests their medical records and receives them within the legally required timeframe.',
        'A non-English speaking patient requests and receives interpreter services for all medical discussions.',
        'A patient exercises their right to leave the hospital against medical advice after understanding the risks.'
      ]
    },

    3: {
      level: 3,
      summary: 'Patient rights are established through federal and state laws, accreditation standards, and healthcare ethics, creating a framework for patient-centered care and autonomy.',
      explanation: `Legal and Ethical Framework for Patient Rights

Sources of Patient Rights:

Federal Law:
- HIPAA Privacy and Security Rules
- Emergency Medical Treatment and Active Labor Act (EMTALA)
- Americans with Disabilities Act (ADA)
- Civil Rights Act (Title VI)
- Patient Self-Determination Act

State Law:
- Medical malpractice statutes
- Informed consent requirements
- Advance directive laws
- Healthcare surrogate laws
- Hospital licensing regulations

Accreditation Standards:
- Joint Commission standards
- CMS Conditions of Participation
- State licensing requirements
- Professional ethics codes

Detailed Right Analysis

Informed Consent Requirements:

Legal Elements:
- Disclosure of material information
- Patient comprehension
- Voluntary consent
- Patient capacity
- Documentation

Exceptions:
- Emergency (implied consent)
- Therapeutic privilege (rare)
- Patient waiver
- Prior patient knowledge

Informed Refusal:
- Right to decline treatment
- Documentation of refusal
- Capacity assessment
- Consequences explained

HIPAA Privacy Rights:

Individual Rights:
- Access to records (within 30 days)
- Request amendments
- Accounting of disclosures
- Request restrictions
- Confidential communications
- File complaints

Provider Obligations:
- Notice of privacy practices
- Minimum necessary standard
- Business associate agreements
- Security safeguards
- Breach notification

Limitations:
- Public health exceptions
- Law enforcement access
- Research with de-identification
- Treatment, payment, operations

EMTALA Obligations:

Applicable to Medicare-participating hospitals:
- Medical screening examination
- Stabilization of emergency conditions
- Appropriate transfer protocols
- Anti-dumping provisions

Patient Rights Under EMTALA:
- Screening regardless of ability to pay
- Stabilization before transfer
- Informed consent for transfer
- Acceptance by receiving facility

Advance Directives and Surrogate Decision-Making

Types of Directives:
- Living will (treatment preferences)
- Durable power of attorney for healthcare
- Healthcare proxy designation
- POLST/MOLST (physician orders)
- Do not resuscitate orders

Surrogate Hierarchy (varies by state):
1. Court-appointed guardian
2. Durable power of attorney
3. Spouse or domestic partner
4. Adult children
5. Parents
6. Adult siblings
7. Close friends

Decision Standards:
- Substituted judgment (patient wishes known)
- Best interest (wishes unknown)

Discrimination Protections

Protected Classes:
- Race, color, national origin
- Disability (ADA, Section 504)
- Age (Age Discrimination Act)
- Sex (Title IX)
- Religion

Requirements:
- Reasonable accommodations
- Effective communication
- Accessible facilities
- Non-discriminatory policies

Enforcement Mechanisms

Internal Processes:
- Patient relations/ombudsman
- Ethics consultation
- Risk management
- Quality improvement
- Peer review

External Processes:
- State licensing boards
- CMS complaints
- Joint Commission concerns
- Accrediting bodies
- Civil litigation
- Criminal prosecution (rare)

Patient Advocacy Organizations

Hospital-Based:
- Patient advocates
- Social workers
- Case managers
- Chaplains
- Ethics committees

External:
- State health departments
- Medicare Quality Improvement Organizations
- Protection and Advocacy agencies
- Legal aid societies
- Disease-specific organizations

International Perspectives

Universal Declaration of Human Rights:
- Right to health
- Right to dignity

World Medical Association:
- Declaration of Lisbon on patient rights
- International Code of Medical Ethics

Variation by Country:
- National health service models
- Insurance-based systems
- Limited resource settings
- Cultural variations`,

      keyTerms: [
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act - anti-dumping law' },
        { term: 'capacity', definition: 'Ability to understand information and make decisions' },
        { term: 'surrogate decision-making', definition: 'Another person making decisions for an incapacitated patient' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - portable medical orders' },
        { term: 'material information', definition: 'Information a reasonable person would want for decision-making' },
        { term: 'minimum necessary', definition: 'HIPAA standard limiting disclosure to minimum needed' }
      ]
    },

    4: {
      level: 4,
      summary: 'Patient rights operate within a complex framework of federal and state regulations, accreditation requirements, and ethical obligations. Understanding enforcement mechanisms and advocacy resources enables effective rights protection.',
      explanation: `Comprehensive Patient Rights Framework

Regulatory Landscape:

Federal Requirements:
- CMS Conditions of Participation (hospitals)
- CMS Conditions for Coverage (other providers)
- HIPAA Omnibus Rule
- 21st Century Cures Act (information blocking)
- Affordable Care Act provisions
- No Surprises Act protections

Accreditation Standards:
- Joint Commission patient rights standards
- DNV GL NIAHO requirements
- HFAP standards
- CARF accreditation
- AAAHC standards

State Variations:
- Informed consent standards (professional vs reasonable patient)
- Surrogate decision-making hierarchies
- Advance directive requirements
- Minor consent laws
- Mental health commitment standards

Detailed Rights Analysis

Right to Medical Records Access:

HIPAA Requirements:
- Access within 30 days (60 for off-site records)
- One free copy of PHI per year
- Reasonable cost-based fees for copies
- Electronic access if records maintained electronically
- Denial only in specific circumstances

21st Century Cures Act:
- Information blocking prohibition
- Patient access to electronic health information
- API requirements for interoperability
- Exceptions for safety and privacy

Right to Informed Consent:

Standards:
- Professional practice standard (what would reasonable physician disclose)
- Materiality standard (what reasonable patient would want to know)
- Subjective standard (what this specific patient wants to know)
- State law variations

Documentation Requirements:
- Nature of procedure
- Risks and benefits
- Alternatives
- Consequences of refusal
- Patient questions and answers

Capacity Assessment:
- Ability to understand relevant information
- Appreciate situation and consequences
- Reasoning ability
- Communication of choice
- Consistent over time

Right to Participate in Care:

Shared Decision-Making:
- Evidence-based option presentation
- Patient values elicitation
- Decision support tools
- Documentation of shared decision

Care Planning Rights:
- Participation in planning
- Family involvement
- Cultural preferences
- Discharge planning participation
- Continuity of care

Right to Safety and Quality:

Patient Safety Organizations:
- Voluntary reporting protection
- Quality improvement privilege
- Limited discovery protections

Reporting Requirements:
- Sentinel events
- Healthcare-associated infections
- Medical device adverse events
- Quality measure reporting

Right to Non-Discrimination:

Section 1557 (ACA):
- Health program discrimination prohibited
- Sex discrimination includes gender identity
- Language access requirements
- Notice requirements

ADA Requirements:
- Physical accessibility
- Effective communication
- Reasonable modifications
- Auxiliary aids and services

Enforcement and Advocacy

Internal Hospital Processes:
- Patient relations department
- Risk management
- Ethics consultation
- Care management
- Quality improvement

External Enforcement:
- CMS surveys and enforcement
- State licensing boards
- Ombudsman programs
- Protection and Advocacy agencies
- Legal aid organizations

Litigation Pathways:
- Medical malpractice
- Civil rights actions
- HIPAA enforcement (HHS Office for Civil Rights)
- State attorney general actions
- Class actions

Emerging Issues

Telehealth Rights:
- Informed consent for telehealth
- Licensing and jurisdiction
- Technology requirements
- Privacy considerations
- Quality standards

Artificial Intelligence:
- Right to know AI is being used
- Explanation of AI recommendations
- Opt-out options
- Algorithmic bias concerns

Genomic Information:
- Right to genetic information
- Incidental findings
- Family implications
- Genetic discrimination protections (GINA)
- Insurance and employment implications

Research Ethics Integration

Research Participant Rights:
- Informed consent for research
- Right to withdraw
- Confidentiality protections
- Data sharing preferences
- Return of results

Clinical Trials:
- Understanding experimental nature
- Placebo possibilities
- Alternative treatments
- Compensation for injury
- Post-trial access

Global Health Rights

Universal Health Coverage:
- WHO Sustainable Development Goals
- Right to health in international law
- Health equity considerations

Resource Limitations:
- Rationing and priority-setting
- Cost-effectiveness considerations
- Quality-adjusted life years
- Disparities in access

Humanitarian Settings:
- Refugee health rights
- Conflict zone protections
- Minimum standards
- Humanitarian law`,

      keyTerms: [
        { term: 'information blocking', definition: 'Practice that interferes with access, exchange, or use of electronic health information' },
        { term: 'sentinel event', definition: 'Unexpected occurrence involving death or serious physical or psychological injury' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act - protects against genetic discrimination' },
        { term: 'shared decision-making', definition: 'Collaborative process allowing patients and providers to make decisions together' },
        { term: 'auxiliary aids', definition: 'Services or devices enabling effective communication for disabled individuals' },
        { term: 'Care management', definition: 'Coordination of patient care across providers and settings' }
      ],

      clinicalNotes: `Protecting patient rights requires vigilance from both patients and providers. Clinical implications include:
- Thorough informed consent processes with documentation
- Regular capacity assessments when indicated
- Cultural competence in care delivery
- Proactive identification of communication barriers
- Prompt response to patient concerns
- Ethics consultation for complex situations
- Regular training on patient rights for staff

Healthcare organizations should have clear policies, accessible advocacy resources, and continuous monitoring for rights violations. Patient safety is fundamentally linked to respect for patient rights and autonomy.`
    },

    5: {
      level: 5,
      summary: 'Patient rights represent an evolving intersection of law, ethics, and healthcare delivery. Systematic approaches to rights protection, advocacy, and policy development optimize patient-centered care and organizational compliance.',
      explanation: `Advanced Patient Rights Framework

Theoretical Foundations:

Ethical Principles:
- Autonomy and self-determination
- Beneficence and non-maleficence
- Justice and equity
- Dignity and human rights
- Professional fidelity

Legal Doctrines:
- Battery vs negligence in consent
- Corporate negligence
- Respondeat superior
- Loss of chance
- Wrongful life/birth

Policy Development:
- Evidence-based policy creation
- Stakeholder engagement
- Regulatory compliance
- Cultural competency integration
- Health equity considerations

Comprehensive Rights Implementation

Organizational Infrastructure:

Governance:
- Board oversight of patient rights
- Ethics committee structure
- Patient and family advisory councils
- Diversity and inclusion integration
- Quality and safety alignment

Operations:
- Patient relations function
- Ombudsman services
- Interpreter services program
- Accessibility coordinator
- Privacy officer

Technology:
- Patient portals
- Electronic consent
- Decision support tools
- Privacy monitoring
- Information blocking compliance

Legal and Regulatory Compliance

Federal Enforcement:
- CMS Conditions of Participation surveys
- HIPAA Office for Civil Rights enforcement
- EMTALA investigations
- Civil monetary penalties
- Corporate integrity agreements

Accreditation:
- Joint Commission tracer methodology
- Standards interpretation
- Performance improvement requirements
- Sentinel event review
- Patient tracer interviews

State Oversight:
- Licensing surveys
- Complaint investigation
- Certificate of need review
- Medicaid compliance
- Professional discipline

Complex Consent Scenarios

Research Consent:
- Therapeutic misconception
- Randomization understanding
- Placebo acknowledgment
- Genetic research considerations
- Biobank consent
- Return of results

Emergency Exceptions:
- Implied consent doctrine
- Substituted judgment
- Best interest standard
- Documentation requirements
- Follow-up when capacity returns

Vulnerable Populations:
- Mental illness and capacity
- Intellectual disability
- Pediatric assent
- Prisoners and detainees
- Economically disadvantaged
- Limited English proficiency

Advanced Directives and End-of-Life

Legal Frameworks:
- Natural Death Act statutes
- Healthcare surrogate laws
- POLST paradigm spread
- DNR order portability
- Religious objections

Ethical Complexities:
- Surrogate uncertainty
- Family conflicts
- Cultural variations
- Spiritual considerations
- Resource allocation
- Futility disputes

Implementation Science

Quality Improvement:
- Plan-Do-Study-Act cycles
- Lean process improvement
- Six Sigma methodology
- Human factors engineering
- Reliability science

Measurement:
- Patient experience metrics
- Complaint analysis
- Compliance audits
- Mystery shopper programs
- Tracer methodology

Technology Integration:
- Electronic consent workflows
- Clinical decision support
- Privacy monitoring tools
- Patient portal functionality
- Telehealth platforms

Global and Comparative Perspectives

International Frameworks:
- WHO patient safety
- Council of Europe rights charter
- Commonwealth Fund comparisons
- OECD health indicators
- Universal health coverage goals

Resource-Limited Settings:
- Rights vs resource constraints
- Essential health packages
- Catastrophic health expenditure
- Community health worker roles
- Task shifting implications

Health Equity and Rights

Disparities Research:
- Implicit bias effects
- Communication quality
- Pain management disparities
- Procedure rates variation
- Outcome differences

Structural Competency:
- Social determinants integration
- Community resource connection
- Advocacy beyond clinical care
- Policy engagement
- Power dynamics recognition

Emerging Challenges

Digital Health:
- Algorithmic bias
- AI explainability
- Data ownership
- Platform responsibility
- Cybersecurity and privacy

Genomics and Precision Medicine:
- Incidental findings management
- Family communication
- Variant reclassification
- Long-term biobank governance
- Global genomic equity

Climate Change and Health:
- Environmental justice
- Migration health rights
- Emerging infectious diseases
- Mental health impacts
- Intergenerational ethics

Professional Development

Curriculum Integration:
- Health humanities
- Narrative medicine
- Communication skills
- Cultural humility
- Advocacy training

Competency Assessment:
- Objective structured clinical exams
- Direct observation
- Patient feedback
- Portfolio assessment
- Maintenance of certification

Research and Innovation

Patient-Centered Outcomes Research:
- Comparative effectiveness
- Patient-reported outcomes
- Shared decision-making effectiveness
- Health literacy interventions
- Navigation program outcomes

Implementation Research:
- Spread of innovation
- Sustainability science
- De-implementation
- Complex interventions
- Systems thinking

Advocacy and Activism

Patient Advocacy:
- Self-advocacy skills
- Peer support programs
- Disease-specific organizations
- Consumer coalitions
- Policy advocacy

Provider Advocacy:
- Professional organizations
- White coat activism
- Community engagement
- Policy participation
- Ethical leadership`,

      keyTerms: [
        { term: 'therapeutic misconception', definition: 'Failure to recognize research differs from treatment' },
        { term: 'corporate integrity agreement', definition: 'Settlement between healthcare entity and government requiring compliance improvements' },
        { term: 'structural competency', definition: 'Capacity to recognize and respond to health effects of social structures' },
        { term: 'algorithmic bias', definition: 'Systematic errors in AI systems affecting certain groups' },
        { term: 'task shifting', definition: 'Delegation of tasks to less specialized health workers' },
        { term: 'tracer methodology', definition: 'Accreditation technique following individual patients through system' }
      ],

      clinicalNotes: `Advancing patient rights requires systematic organizational commitment and individual provider dedication. Key strategies include:
- Embedding patient rights in organizational mission and operations
- Regular training on rights recognition and protection
- Empowering patients through education and access
- Proactive identification and removal of barriers
- Continuous monitoring and improvement
- Engagement with patient and community advisors
- Policy advocacy for structural improvements

Rights violations often indicate systemic problems requiring root cause analysis. Individual cases should prompt organizational learning and improvement. The goal is creating cultures where patient rights are intrinsic to care delivery, not merely compliance requirements.`
    }
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['patient-safety'],
    keywords: ['patient rights', 'informed consent', 'HIPAA', 'patient advocacy']
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
