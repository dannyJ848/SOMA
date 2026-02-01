import { EducationalContent } from '../../types';

export const patientRightsContent: EducationalContent = {
  id: 'patient-rights',
  type: 'concept',
  name: 'Patient Rights',
  nameEs: 'Derechos del Paciente',
  alternateNames: ['Patient Bill of Rights', 'Healthcare Rights', 'Medical Rights'],
  levels: {
    1: {
      level: 1,
      summary: 'Patient rights are the rules that protect you when you get medical care. They help ensure you are treated with respect and receive safe care.',
      explanation: `## Your Rights as a Patient

Patient rights are the rules that protect you when you get medical care. They help ensure you are treated with respect and receive safe care.

### Basic Rights

**Right to Respect:**
- Be treated with dignity
- Have your privacy protected
- Receive care without discrimination

**Right to Information:**
- Know about your condition
- Understand your treatment options
- Get answers to your questions

**Right to Make Decisions:**
- Accept or refuse treatment
- Have a say in your care plan
- Choose your doctors

**Right to Safety:**
- Receive appropriate care
- Be protected from harm
- Have your concerns heard

### If Your Rights Are Violated

- Speak to the hospital patient advocate
- File a complaint with the hospital
- Contact your state health department
- Seek legal advice if needed`,
      keyTerms: [
        { term: 'Patient rights', definition: 'Protections for people receiving healthcare' },
        { term: 'Privacy', definition: 'Keeping your health information confidential' },
        { term: 'Informed consent', definition: 'Agreeing to treatment after understanding it' },
        { term: 'Patient advocate', definition: 'Person who helps protect patient rights' }
      ],
      analogies: [
        'Patient rights are like rules of the road that keep everyone safe'
      ],
      examples: [
        'A patient asks for an interpreter to understand their diagnosis',
        'Someone refuses a treatment after learning about side effects'
      ]
    },
    2: {
      level: 2,
      summary: 'Patient rights include informed consent, privacy protection under HIPAA, access to medical records, and the right to make decisions about your care. These rights are protected by law.',
      explanation: `## Understanding Patient Rights

Patient rights include informed consent, privacy protection under HIPAA, access to medical records, and the right to make decisions about your care. These rights are protected by law.

### Informed Consent Rights

**Before any treatment, you have the right to know:**
- Your diagnosis or condition
- The proposed treatment
- Risks and benefits of treatment
- Alternative options
- What happens if you refuse

**Consent must be:**
- Given voluntarily
- Based on understanding
- Documented in your record

### HIPAA Privacy Rights

**Your health information is protected:**
- Medical records
- Test results
- Billing information
- Conversations with providers

**You control who sees your information:**
- Providers need your permission
- You can request restrictions
- You can see who accessed your records

### Access to Records

**You have the right to:**
- See and get copies of your records
- Request corrections to errors
- Know who has seen your information
- Take your records when changing doctors

### Decision-Making Rights

**Advance Directives:**
- Living will (end-of-life wishes)
- Healthcare power of attorney
- Do not resuscitate orders

**Surrogate Decision-Making:**
- Family can make decisions if you cannot
- Priority order usually by state law
- Healthcare proxy designation

### Non-Discrimination

**You cannot be denied care based on:**
- Race, color, or national origin
- Sex or gender identity
- Age or disability
- Religion
- Ability to pay (emergency care)`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Health privacy protection law' },
        { term: 'Advance directive', definition: 'Document stating healthcare wishes' },
        { term: 'Healthcare proxy', definition: 'Person chosen to make medical decisions' },
        { term: 'Protected health information', definition: 'Medical information with privacy protections' }
      ],
      analogies: [
        'HIPAA is like a lock on your medical file that only you control the key to'
      ],
      examples: [
        'A teenager requests their own medical records without parental access',
        'A patient asks that their mental health records not be shared with their employer'
      ]
    },
    3: {
      level: 3,
      summary: 'Patient rights are codified in federal regulations, state laws, and hospital policies. The Patient Self-Determination Act, EMTALA, and Americans with Disabilities Act provide foundational protections in the US healthcare system.',
      explanation: `## Legal Framework for Patient Rights

Patient rights are codified in federal regulations, state laws, and hospital policies. The Patient Self-Determination Act, EMTALA, and Americans with Disabilities Act provide foundational protections in the US healthcare system.

### Federal Legislation

**Patient Self-Determination Act (1990):**
- Requires hospitals to inform patients of their rights
- Must ask about advance directives
- Must honor valid advance directives
- Applies to Medicare/Medicaid providers

**EMTALA (Emergency Medical Treatment and Labor Act):**
- Emergency departments must screen all patients
- Cannot delay care to ask about payment
- Must stabilize emergency conditions
- Transfer rules for unstable patients

**Americans with Disabilities Act (ADA):**
- Prohibits discrimination in healthcare
- Requires reasonable accommodations
- Applies to physical and programmatic access
- Includes mental health conditions

**Affordable Care Act Provisions:**
- No denial for pre-existing conditions
- Dependent coverage to age 26
- Preventive services without cost-sharing
- Right to appeal insurance decisions

### Hospital-Specific Rights

**The Joint Commission Standards:**
- Right to considerate and respectful care
- Right to obtain current information
- Right to informed consent
- Right to privacy
- Right to refuse treatment
- Right to advance directives

**CMS Conditions of Participation:**
- Patient rights as condition for Medicare payment
- Specific requirements for hospitals
- Survey and enforcement mechanisms

### Enforcement Mechanisms

**State Licensing Boards:**
- Investigate provider misconduct
- Disciplinary actions
- License revocation possible

**CMS Enforcement:**
- Hospital surveys
- Deficiency citations
- Termination from Medicare

**Civil Litigation:**
- Malpractice claims
- Civil rights violations
- Privacy breach lawsuits

### Limitations on Rights

**Not Absolute:**
- Public health emergencies
- Court-ordered treatment
- Mandatory reporting requirements
- Provider conscientious objection

**Resource Constraints:**
- Experimental treatments not guaranteed
- Insurance coverage limitations
- Geographic access challenges`,
      keyTerms: [
        { term: 'EMTALA', definition: 'Emergency care access law' },
        { term: 'Patient Self-Determination Act', definition: 'Law about advance directive rights' },
        { term: 'Conditions of Participation', definition: 'Rules for Medicare participation' },
        { term: 'Conscientious objection', definition: 'Provider right to refuse certain care' }
      ]
    },
    4: {
      level: 4,
      summary: 'Patient rights frameworks balance autonomy, beneficence, and justice principles. Effective implementation requires institutional commitment, staff training, grievance procedures, and integration with quality improvement programs.',
      explanation: `## Implementing Patient Rights

Patient rights frameworks balance autonomy, beneficence, and justice principles. Effective implementation requires institutional commitment, staff training, grievance procedures, and integration with quality improvement programs.

### Ethical Foundations

**Autonomy:**
- Self-determination in healthcare decisions
- Informed consent as primary expression
- Right to refuse even life-sustaining treatment
- Capacity assessment when needed

**Beneficence:**
- Acting in patient best interest
- Balancing with patient autonomy
- Shared decision-making model
- Clinical expertise informing choices

**Justice:**
- Fair distribution of healthcare resources
- Non-discrimination in care delivery
- Addressing health disparities
- Equitable access to services

### Institutional Implementation

**Patient Rights Policies:**
- Written statement of rights
- Posted in visible locations
- Provided to patients at admission
- Available in multiple languages

**Patient Representatives:**
- Ombudsman/patient advocate role
- Investigation of complaints
- Liaison between patients and staff
- Reporting to leadership

**Grievance Procedures:**
- Formal complaint process
- Timeframe for response (CMS requires prompt resolution)
- Right to external review
- Documentation requirements

**Staff Training:**
- Rights education during orientation
- Annual refresher training
- Competency validation
- Scenario-based learning

### Vulnerable Populations

**Pediatric Patients:**
- Assent in addition to parental consent
- Age-appropriate involvement
- Best interest standard
- Mature minor exceptions

**Incarcerated Patients:**
- Reduced but present rights
- Security considerations
- Constitutional protections
- Access to adequate care

**Mental Health Patients:**
- Involuntary treatment criteria
- Right to least restrictive setting
- Due process protections
- Advocacy requirements

**Cognitive Impairment:**
- Surrogate decision-making
- Best interest vs substituted judgment
- Capacity assessments
- Support for patient participation

### Measuring Rights Protection

**Patient Experience Surveys:**
- Respect and dignity questions
- Communication quality
- Pain management
- Discharge process

**Complaint Analysis:**
- Trends in grievances
- Root cause analysis
- System improvements
- Staff feedback

**Compliance Audits:**
- Documentation review
- Observation of care
- Policy adherence
- Regulatory compliance`,
      keyTerms: [
        { term: 'Substituted judgment', definition: 'Deciding based on what patient would want' },
        { term: 'Assent', definition: 'Pediatric patient agreement to treatment' },
        { term: 'Least restrictive alternative', definition: 'Minimum intervention needed' },
        { term: 'Capacity assessment', definition: 'Evaluation of decision-making ability' }
      ],
      clinicalNotes: 'Hospitals must provide patient rights notice at admission. CMS requires grievance resolution within 7 days for Medicare patients. Patient representatives play key role in rights protection but often underutilized. Cultural competency essential for effective rights implementation across diverse populations.'
    },
    5: {
      level: 5,
      summary: 'Patient rights evolve with healthcare transformation, presenting challenges in areas like genetic privacy, digital health data, artificial intelligence in decision-making, and resource allocation during public health emergencies.',
      explanation: `## Emerging Issues in Patient Rights

Patient rights evolve with healthcare transformation, presenting challenges in areas like genetic privacy, digital health data, artificial intelligence in decision-making, and resource allocation during publichealth emergencies.

### Genetic Information Privacy

**GINA (Genetic Information Nondiscrimination Act):**
- Prohibits insurance discrimination
- Employment protections
- Limited to health insurance (not life/disability)
- Gaps in protection remain

**Direct-to-Consumer Testing:**
- Data sharing with third parties
- Law enforcement access concerns
- Secondary findings disclosure
- Family implications of genetic information

### Digital Health and Privacy

**Mobile Health Apps:**
- Often fall outside HIPAA scope
- Data sharing with tech companies
- Limited user control over data
- Privacy policies difficult to understand

**Wearable Devices:**
- Continuous health monitoring
- Employer wellness program use
- Insurance incentive programs
- Consent challenges

**Electronic Health Records:**
- Information blocking prohibitions
- Patient access requirements
- Interoperability challenges
- Audit trail capabilities

### AI and Algorithmic Decision-Making

**Right to Explanation:**
- AI-driven clinical decision support
- Algorithmic bias concerns
- Transparency in recommendations
- Human oversight requirements

**Informed Consent for AI:**
- Disclosure of AI involvement
- Understanding of limitations
- Opt-out considerations
- Liability questions

**Predictive Analytics:**
- Risk scoring algorithms
- Potential for discrimination
- Accuracy and validation
- Consent for predictive uses

### Public Health Emergency Limitations

**COVID-19 Lessons:**
- Surge capacity and resource allocation
- Crisis standards of care
- Visitor restrictions
- Vaccine prioritization ethics

**Resource Allocation Frameworks:**
- Save the most lives
- Life-years saved
- First-come first-served
- Lottery/randomization

**Ethical Challenges:**
- Tension between individual and population health
- Equity in emergency response
- Transparency in rationing decisions
- Restoration of normal standards

### Global Perspectives

**Universal Declaration of Human Rights:**
- Right to health
- Access to medical care
- Varying implementation globally
- Resource limitations

**WHO Patient Safety:**
- Global patient safety initiatives
- Rights-based approaches
- Low-resource setting challenges
- Capacity building needs

### Future Directions

**Proposed Expansions:**
- Right to health data portability
- Algorithmic transparency
- Mental health parity enforcement
- Long-term care rights

**Technology-Enabled Rights:**
- Telehealth access rights
- Digital accessibility requirements
- Cybersecurity protections
- Blockchain for consent management

**Policy Considerations:**
- Balancing innovation with protection
- International harmonization
- Equity in rights protection
- Enforcement mechanisms`,
      keyTerms: [
        { term: 'Information blocking', definition: 'Unreasonable restrictions on health information sharing' },
        { term: 'Crisis standards of care', definition: 'Alternative protocols during emergencies' },
        { term: 'Algorithmic bias', definition: 'Systematic errors in AI systems affecting certain groups' },
        { term: 'Secondary findings', definition: 'Unexpected genetic discoveries' }
      ],
      clinicalNotes: 'Genetic data requires enhanced privacy protections beyond standard HIPAA. AI clinical decision tools require transparency in development and validation. Crisis standards of care must include equity considerations to avoid discrimination in resource allocation. Information blocking rules now enforce patient access rights with penalties.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'healthcare-navigation'],
    keywords: ['patient rights', 'HIPAA', 'informed consent', 'privacy', 'healthcare law']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
