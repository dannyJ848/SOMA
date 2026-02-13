/**
 * Understanding Your Rights as a Patient
 *
 * Essential knowledge about patient rights in healthcare settings.
 */

import { EducationalContent } from '../../types';

export const understandingYourRights: EducationalContent = {
  id: 'concept-understanding-your-rights',
  type: 'concept',
  name: 'Understanding Your Rights as a Patient',
  alternateNames: ['Patient Rights', 'Patient Bill of Rights', 'Healthcare Rights'],

  levels: {
    1: {
      level: 1,
      summary: 'When you go to the doctor or hospital, you have special rights. These rights help make sure you are treated fairly and with respect.',
      explanation: `**Your Basic Rights:**
When you get healthcare, you have important rights. Here are some of the most important ones:

**Right to Be Treated with Respect:**
- Everyone should treat you kindly
- No one should make fun of you or hurt your feelings
- You deserve care no matter who you are

**Right to Know:**
- You can ask questions about your care
- Doctors should explain things so you understand
- You can know what medicines you are getting

**Right to Say Yes or No:**
- You can say yes to treatment
- You can say no to treatment
- You can change your mind

**Right to Privacy:**
- Your health information is private
- Doctors cannot tell others without your permission
- Exams happen in private spaces

**Right to Safe Care:**
- You should receive safe treatment
- You can ask about safety
- You can report problems

**What to Do If Something Seems Wrong:**
- Tell a nurse or doctor
- Ask to speak to someone in charge
- Have a family member help you

**Remember:**
- You are important
- Your feelings matter
- It is okay to ask questions
- You can always ask for help`,
      keyTerms: [
        { term: 'rights', definition: 'Things you are allowed to have or do' },
        { term: 'privacy', definition: 'Keeping your information private and not sharing it without your permission' },
        { term: 'respect', definition: 'Being treated kindly and fairly' },
      ],
      analogies: [
        'Patient rights are like rules in a game - they make sure everyone plays fair and everyone is safe.',
        'Your privacy is like your own room - others should ask before coming in.',
      ],
      examples: [
        'A patient asks the doctor to explain what a medicine does before taking it.',
        'Someone asks to have their family member stay with them during a procedure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Patient rights ensure respectful, informed, and safe healthcare. Understanding these rights empowers you to be an active participant in your care.',
      explanation: `**Core Patient Rights:**

Healthcare facilities must respect your rights. These are protected by laws and regulations.

**Right to Informed Consent:**
Before any treatment, you have the right to:
- Understand what will be done
- Know the risks and benefits
- Learn about alternatives
- Ask questions
- Agree or refuse

**Right to Privacy and Confidentiality:**
| Protected | Examples |
|-----------|----------|
| Medical records | Diagnoses, test results |
| Conversations | What you tell your doctor |
| Physical privacy | During exams and procedures |
| Billing information | Insurance and payment |

**Right to Respectful Care:**
- Courteous treatment regardless of background
- Accommodation of cultural and religious needs
- Access to interpreter services
- Consideration of personal dignity

**Right to Information:**
- Know your diagnosis and treatment plan
- Understand your prognosis
- Access your medical records
- Receive itemized bills
- Know who is treating you

**Right to Make Decisions:**
- Accept or refuse treatment
- Leave against medical advice
- Create advance directives
- Designate a healthcare proxy
- Seek second opinions

**Right to Safety:**
- Safe environment
- Qualified caregivers
- Error disclosure
- Report concerns without retaliation

**How to Exercise Your Rights:**

*Ask Questions:*
- "Can you explain my diagnosis?"
- "What are my treatment options?"
- "What are the risks of this procedure?"

*Make Requests:*
- "I would like an interpreter."
- "I need time to think about this decision."
- "I want a copy of my records."

*File Complaints:*
- Speak to patient relations
- Contact hospital administration
- File with state health department
- Report to The Joint Commission`,
      keyTerms: [
        { term: 'informed consent', definition: 'Agreement to treatment after understanding risks, benefits, and alternatives' },
        { term: 'confidentiality', definition: 'Protection of your private health information' },
        { term: 'healthcare proxy', definition: 'Person you designate to make medical decisions if you cannot' },
        { term: 'advance directive', definition: 'Document stating your wishes for future medical care' },
      ],
      analogies: [
        'Informed consent is like reading a contract before signing - you should understand what you are agreeing to.',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient rights are established through federal and state laws, professional standards, and facility policies, providing a framework for ethical healthcare delivery.',
      explanation: `## Legal and Ethical Framework for Patient Rights

**Regulatory Foundation:**

*Federal Laws:*
| Law | Key Protections |
|-----|-----------------|
| HIPAA | Privacy and security of health information |
| EMTALA | Emergency treatment regardless of ability to pay |
| ADA | Non-discrimination based on disability |
| Civil Rights Act | Non-discrimination |
| ACA | Insurance access and protections |

*State Laws:*
- Patient Bill of Rights statutes
- Informed consent requirements
- Medical records access
- Complaint processes

**HIPAA Rights:**

*Privacy Rule Protections:*
- Access to your records
- Request amendments
- Accounting of disclosures
- Restrict certain uses
- Request confidential communications
- File complaints

*Security Rule:*
- Protection of electronic records
- Safeguards against breaches
- Notification requirements

**Informed Consent Requirements:**

*Required Elements:*
1. Nature of procedure
2. Risks and benefits
3. Alternatives
4. Risks of no treatment
5. Opportunity for questions

*Documentation:*
- Written consent for invasive procedures
- Discussion documented in record
- Patient signature
- Witness when required

**Decision-Making Capacity:**

*Assessment Elements:*
- Understanding of information
- Appreciation of situation
- Reasoning about options
- Expression of choice

*When Capacity Is Lacking:*
- Surrogate decision-makers
- Advance directives followed
- Best interest standards
- Ethics consultation

**Special Populations:**

| Population | Considerations |
|------------|----------------|
| Minors | Parental consent, mature minor doctrine |
| Emergency | Implied consent, exception rules |
| Mental health | State-specific involuntary treatment laws |
| Research | Additional IRB protections |

**Complaint and Grievance Processes:**

*Internal:*
- Patient relations/advocacy
- Risk management
- Administration

*External:*
- State health department
- Office for Civil Rights (HIPAA)
- The Joint Commission
- State medical boards
- CMS`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act - federal privacy law' },
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act - requires emergency care regardless of payment' },
        { term: 'decision-making capacity', definition: 'Ability to understand information and make informed healthcare choices' },
        { term: 'surrogate decision-maker', definition: 'Person authorized to make healthcare decisions for someone who cannot' },
      ],
      clinicalNotes: 'Patient rights vary by state. Healthcare providers must know applicable federal and state requirements. Ethics consultations are available for complex situations.',
    },
    4: {
      level: 4,
      summary: 'Patient rights derive from ethical principles, legal frameworks, and quality standards, requiring healthcare organizations to implement policies and processes ensuring their protection.',
      explanation: `## Comprehensive Framework for Patient Rights

**Ethical Foundations:**

*Bioethical Principles:*
| Principle | Application to Rights |
|-----------|----------------------|
| Autonomy | Self-determination, informed consent |
| Beneficence | Right to quality care |
| Non-maleficence | Right to safety |
| Justice | Non-discrimination, access |

*Professional Ethics:*
- Medical codes of ethics
- Nursing standards
- Allied health standards
- Institutional policies

**Legal Framework Deep Dive:**

*HIPAA Privacy Rule:*
- Protected Health Information (PHI) defined
- Permitted uses and disclosures
- Minimum necessary standard
- Patient rights provisions
- Business associate requirements

*Enforcement:*
- OCR investigations
- Civil monetary penalties
- Criminal penalties for willful violations
- State attorney general authority

**CMS Conditions of Participation:**

*Patient Rights Requirements:*
- Notice of rights provided
- Exercise of rights supported
- Privacy and safety ensured
- Complaint resolution process
- Advance directive information

*Compliance:*
- Surveyor assessment
- Deficiency citations
- Corrective action required

**Joint Commission Standards:**

*Rights and Responsibilities Chapter:*
- Informed consent
- Communication
- End-of-life care
- Patient responsibilities
- Resolving complaints

**Organizational Implementation:**

*Policies Required:*
- Patient rights and responsibilities
- Informed consent procedures
- Advance directive processes
- Complaint and grievance resolution
- HIPAA compliance

*Staff Training:*
- Rights and responsibilities
- Communication skills
- Cultural competency
- Ethical decision-making
- Reporting requirements

**Ethics Resources:**

*Hospital Ethics Committees:*
- Case consultation
- Policy development
- Education
- Conflict resolution

*Common Consultation Reasons:*
- End-of-life decisions
- Treatment refusal
- Surrogate disputes
- Resource allocation
- Futility questions

**Quality and Safety Integration:**

*Patient-Centered Care:*
- Rights as foundation
- Engagement strategies
- Experience measurement
- Outcome improvement

*Safety Culture:*
- Speaking up supported
- Concerns addressed
- No retaliation
- Learning from events`,
      keyTerms: [
        { term: 'Protected Health Information', definition: 'Individually identifiable health information covered by HIPAA' },
        { term: 'Conditions of Participation', definition: 'CMS requirements healthcare facilities must meet for Medicare/Medicaid' },
        { term: 'ethics committee', definition: 'Multidisciplinary group providing consultation on ethical issues' },
        { term: 'minimum necessary', definition: 'HIPAA principle limiting PHI disclosure to what is needed' },
      ],
      clinicalNotes: 'Healthcare organizations must balance patient rights with safety and operational needs. Ethics consultation should be available for complex situations. Documentation of rights discussions is essential.',
    },
    5: {
      level: 5,
      summary: 'Patient rights represent the intersection of ethics, law, and quality, requiring sophisticated organizational systems and cultural commitment to ensure meaningful protection.',
      explanation: `## Advanced Perspectives on Patient Rights

**Historical Evolution:**

*Key Milestones:*
- Nuremberg Code (1947) - research ethics
- Patient Bill of Rights (1973) - AHA
- HIPAA (1996) - privacy
- ACA (2010) - access and protections
- 21st Century Cures (2016) - information blocking

*Ongoing Evolution:*
- Digital health implications
- AI and algorithmic rights
- Genomic information
- Global health perspectives

**Ethical Complexity:**

*Autonomy vs. Paternalism:*
\`\`\`
         Autonomy                    Paternalism
              ↓                           ↓
Patient Preferences  ←→  Provider Judgment
              ↓                           ↓
         Informed Choice          Best Interest
              ↓                           ↓
            Shared Decision-Making
\`\`\`

*Limits of Autonomy:*
- Public health requirements
- Professional obligations
- Resource limitations
- Harm to others
- Capacity questions

**Health Equity and Rights:**

*Disparities in Rights Protection:*
- Access barriers
- Language access
- Health literacy
- Power imbalances
- Historical distrust

*Social Determinants Impact:*
- Insurance coverage
- Geographic access
- Economic factors
- Educational attainment
- Cultural context

**Emerging Rights Issues:**

*Digital Health:*
- Telehealth privacy
- Patient portal access
- Data ownership
- Algorithm transparency
- Wearable data

*Genomics:*
- Genetic information privacy (GINA)
- Duty to warn family members
- Research participation
- Direct-to-consumer testing

**Global Perspectives:**

*International Standards:*
- UN Declaration of Human Rights
- WHO patient safety initiatives
- European GDPR
- International bioethics codes

*Variations:*
- Cultural context
- Healthcare system structure
- Legal traditions
- Resource availability

**Organizational Excellence:**

*High-Performing Organizations:*
- Rights embedded in culture
- Leadership commitment
- Staff empowerment
- Patient partnership
- Continuous improvement

*Assessment Methods:*
- Patient experience surveys
- Complaint analysis
- Ethics consultation patterns
- Staff surveys
- External reviews

**Research and Innovation:**

*Current Investigations:*
- Rights implementation effectiveness
- Health literacy interventions
- Decision aid development
- Cultural adaptation
- Technology impact

*Knowledge Gaps:*
- Long-term outcomes
- Implementation science
- Equity interventions
- Global applicability

**Future Directions:**

*Policy Evolution:*
- Interoperability and access
- Price transparency
- Surprise billing protections
- Mental health parity
- Reproductive rights

*Cultural Transformation:*
- From compliance to commitment
- Patient as full partner
- Shared accountability
- Trust restoration`,
      keyTerms: [
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act - protects against genetic discrimination' },
        { term: 'information blocking', definition: 'Practice interfering with access, exchange, or use of electronic health information' },
        { term: 'health equity', definition: 'Attainment of highest level of health for all people' },
        { term: 'interoperability', definition: 'Ability of health information systems to exchange and use data' },
        { term: 'price transparency', definition: 'Disclosure of healthcare costs to enable informed decisions' },
      ],
      clinicalNotes: 'Patient rights continue to evolve with technology and societal changes. Organizations must anticipate emerging issues and adapt policies accordingly. Authentic commitment to rights requires cultural transformation beyond compliance.',
    },
  },

  media: [],

  citations: [
    {
      id: 'hhs-patient-rights',
      type: 'website',
      title: 'Your Rights Under HIPAA',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-individuals/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
    { targetId: 'concept-speaking-up-about-concerns', targetType: 'concept', relationship: 'related', label: 'Speaking Up About Concerns' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['patient-rights', 'healthcare-law', 'patient-advocacy'],
    clinicalRelevance: 'critical',
    keywords: ['patient rights', 'HIPAA', 'informed consent', 'privacy'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default understandingYourRights;
