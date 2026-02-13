/**
 * Sharing Records Between Providers
 *
 * Understanding how to facilitate health information exchange for coordinated care.
 */

import { EducationalContent } from '../../types';

export const sharingRecordsBetweenProviders: EducationalContent = {
  id: 'concept-sharing-records-between-providers',
  type: 'concept',
  name: 'Sharing Records Between Providers',
  alternateNames: ['Health Information Exchange', 'Medical Record Sharing', 'Care Coordination'],

  levels: {
    1: {
      level: 1,
      summary: 'When you see different doctors, they need to share information to take good care of you. You can help make sure they have what they need.',
      explanation: `**Why Doctors Need to Share Information:**
When you see more than one doctor, they all need to know about your health:
- Your regular doctor
- Specialists (like heart or bone doctors)
- Emergency room doctors
- Hospital doctors

**What Gets Shared:**
- Your health problems
- Medicines you take
- Test results
- Allergies
- What treatments you have had

**How You Can Help:**

*Keep a List:*
- Write down all your doctors
- List all your medicines
- Note your allergies
- Record important health events

*Bring Records:*
- Carry a summary of your health
- Bring medicine bottles to appointments
- Share test results with new doctors

*Ask for Records to Be Sent:*
- Tell the office to send records to your other doctors
- Sign a form giving permission
- Follow up to make sure it happened

**Why Sharing Matters:**
- Doctors can make better decisions
- You avoid repeating tests
- They know what medicines you take
- You get better care

**Remember:**
You are the link between all your doctors! Your information helps them work together.`,
      keyTerms: [
        { term: 'specialist', definition: 'A doctor who is an expert in one part of the body or one type of health problem' },
        { term: 'health information', definition: 'Facts about your health that doctors need to take care of you' },
        { term: 'permission', definition: 'When you say it is okay for something to happen' },
      ],
      analogies: [
        'Your health information is like a puzzle - each doctor has a piece, and sharing helps put the whole picture together.',
        'Sharing records is like passing the ball in a team sport - everyone needs to be connected to win.',
      ],
      examples: [
        'A patient asks their heart doctor to send test results to their regular doctor.',
        'Someone brings a list of all their medicines when visiting a new specialist.',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective care coordination requires health information sharing between providers. Understanding how to facilitate this sharing improves your healthcare quality.',
      explanation: `**The Importance of Shared Information:**

When providers have complete information, they can:
- Avoid dangerous drug interactions
- Prevent duplicate testing
- Make better treatment decisions
- Coordinate care effectively

**Methods of Information Sharing:**

| Method | How It Works | Your Role |
|--------|--------------|-----------|
| Patient portal | Electronic sharing through website | Share access or download/upload |
| Fax/mail | Traditional document transfer | Request transfer |
| HIE | Automatic electronic exchange | May need to consent |
| Patient-carried | You bring physical copies | Keep copies available |

**Authorization Process:**

*What You Need:*
- Complete authorization form
- Specify what information
- Name receiving provider
- Purpose of disclosure
- Expiration date

*Tips:*
- Be specific about what to share
- Include date ranges
- Keep copies of authorizations
- Follow up on requests

**Health Information Exchange (HIE):**

Many areas have electronic networks where providers can share:
- Hospital records
- Lab results
- Imaging reports
- Medication histories

*Your Options:*
- Opt-in: Choose to participate
- Opt-out: Information shared unless you decline
- Varies by state and network

**Building Your Health Record:**

*Key Documents to Maintain:*
- Current medication list
- Allergy information
- Problem list (diagnoses)
- Recent test results
- Immunization records
- Surgical history

*How to Keep Organized:*
- Use a folder or binder
- Download from patient portals
- Update after each visit
- Bring to appointments

**Questions to Ask:**
- "Will you share this information with my other doctors?"
- "How can I get my records sent to a specialist?"
- "Do you participate in health information exchange?"
- "Can I access my records online?"`,
      keyTerms: [
        { term: 'Health Information Exchange (HIE)', definition: 'Electronic network for sharing health records between providers' },
        { term: 'authorization', definition: 'Written permission to share your health information' },
        { term: 'care coordination', definition: 'Organized sharing of information between all your healthcare providers' },
        { term: 'patient portal', definition: 'Secure website where you can access your health records' },
      ],
      analogies: [
        'Health information exchange is like email for doctors - it lets them quickly and securely share your information.',
      ],
    },
    3: {
      level: 3,
      summary: 'Health information exchange facilitates care coordination through electronic sharing networks, patient-mediated exchange, and regulatory frameworks balancing access with privacy.',
      explanation: `## Health Information Sharing Framework

**HIPAA Treatment Exception:**

*Permitted Disclosures:*
- Providers can share for treatment without authorization
- Directly involved in patient care
- Reasonable professional judgment
- Minimum necessary may not apply

*Practical Application:*
- Referral information
- Consultation requests
- Care coordination
- Emergency access

**Health Information Exchange Models:**

| Model | Description | Patient Role |
|-------|-------------|--------------|
| Directed Exchange | Point-to-point between providers | May authorize |
| Query-Based | Pull information from network | Consent varies |
| Consumer-Mediated | Patient controls sharing | Active management |

**HIE Participation:**

*Consent Models:*
- Opt-in: Must consent to participate
- Opt-out: Participates unless declines
- No consent: Treatment uses authorized
- Varies by state and network

*Patient Considerations:*
- Understand local model
- Know your rights
- Review access logs
- Update preferences

**Interoperability Standards:**

*Key Standards:*
| Standard | Purpose |
|----------|---------|
| HL7 FHIR | Modern data exchange API |
| C-CDA | Clinical document format |
| Direct | Secure messaging protocol |
| IHE | Implementation profiles |

*Patient Impact:*
- Better data availability
- More app choices
- Improved portability
- Quality considerations

**Care Transitions:**

*High-Risk Periods:*
- Hospital discharge
- ED visits
- Specialist referrals
- Post-acute care
- Provider changes

*Information Needs:*
| Transition | Key Information |
|------------|-----------------|
| Discharge | Diagnoses, medications, follow-up |
| Referral | Reason, relevant history, questions |
| Emergency | Medications, allergies, problems |

**Patient-Mediated Exchange:**

*Personal Health Records:*
- Aggregate information from multiple sources
- Patient-controlled
- Portable
- Variety of platforms

*Considerations:*
- Privacy and security
- Data accuracy
- Interoperability
- Maintenance burden`,
      keyTerms: [
        { term: 'Directed Exchange', definition: 'Secure point-to-point information sharing between specific providers' },
        { term: 'Query-Based Exchange', definition: 'Ability to search for and retrieve patient information from network' },
        { term: 'C-CDA', definition: 'Consolidated Clinical Document Architecture - standard document format' },
        { term: 'care transition', definition: 'Movement of patient between healthcare settings or providers' },
      ],
      clinicalNotes: 'Effective care coordination reduces adverse events and improves outcomes. Patients who actively participate in information sharing have better care coordination.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive health information exchange requires integration of technical standards, policy frameworks, patient engagement, and quality measures to achieve effective care coordination.',
      explanation: `## Advanced Health Information Exchange

**Policy Framework:**

*Regulatory Evolution:*
\`\`\`
HIPAA (1996) - Privacy foundation
     ↓
HITECH (2009) - EHR adoption
     ↓
Meaningful Use - Interoperability requirements
     ↓
21st Century Cures (2016) - Information blocking
     ↓
TEFCA (ongoing) - National network
\`\`\`

**TEFCA (Trusted Exchange Framework):**

*Goals:*
- National interoperability
- Simplified trust agreements
- Common requirements
- Patient access

*Components:*
| Component | Purpose |
|-----------|---------|
| Common Agreement | Baseline requirements |
| QHINs | Qualified network operators |
| Standard Operating Procedures | Implementation guidance |
| Governance | Oversight structure |

**Information Blocking Prevention:**

*Prohibited Practices:*
- Unreasonable delays
- Excessive fees
- Technical barriers
- Business practice limitations
- Organizational policies

*Exceptions:*
- Preventing harm
- Privacy protection
- Security requirements
- Infeasibility
- Health IT performance

**Quality Measures:**

| Measure | Focus |
|---------|-------|
| Medication reconciliation | Transition safety |
| Care plan exchange | Coordination |
| Notification receipt | Awareness |
| Patient access | Engagement |

**Implementation Considerations:**

*Technical:*
- EHR integration
- Interface development
- Testing requirements
- Maintenance

*Operational:*
- Workflow integration
- Staff training
- Patient communication
- Quality monitoring

**Patient Engagement Strategies:**

*Education:*
- HIE benefits and risks
- Consent options
- Access methods
- Privacy rights

*Tools:*
- Patient portals
- Mobile apps
- Access logs
- Preference management

**Specialized Sharing Considerations:**

| Domain | Considerations |
|--------|----------------|
| Mental Health | 42 CFR Part 2 for SUD, state laws |
| HIV | Additional consent requirements in some states |
| Reproductive Health | Emerging privacy concerns |
| Pediatric | Minor consent, parent access |

**Care Coordination Models:**

*Medical Home:*
- Centralized coordination
- Comprehensive care management
- Team-based approach
- Patient engagement

*ACO:*
- Shared accountability
- Quality measures
- Financial integration
- Population health`,
      keyTerms: [
        { term: 'TEFCA', definition: 'Trusted Exchange Framework and Common Agreement for national interoperability' },
        { term: 'QHIN', definition: 'Qualified Health Information Network under TEFCA' },
        { term: '42 CFR Part 2', definition: 'Federal regulations protecting substance use disorder records' },
        { term: 'ACO', definition: 'Accountable Care Organization - integrated care delivery model' },
      ],
      clinicalNotes: 'Information sharing for treatment is generally permitted under HIPAA but special categories (substance use, mental health) may have additional requirements. Organizations should have clear policies for sensitive information.',
    },
    5: {
      level: 5,
      summary: 'Optimal health information sharing integrates national interoperability infrastructure, patient-centered design, equity considerations, and emerging technologies within a learning health system.',
      explanation: `## Health Information Exchange: Future State

**National Infrastructure Vision:**

\`\`\`
Patient
    ↓
Any Provider Access ← → Personal Health Record
    ↓                         ↓
Local HIE ← → QHIN Network ← → Patient Apps
    ↓              ↓
National Coverage  Research Integration
    ↓
Improved Outcomes
\`\`\`

**Interoperability Maturity:**

*Current State:*
- Variable connectivity
- Multiple networks
- Limited patient control
- Quality inconsistencies

*Future State:*
- Nationwide reach
- Seamless exchange
- Patient-directed
- Quality assured

**Technology Evolution:**

*Emerging Capabilities:*
| Technology | Application |
|------------|-------------|
| FHIR APIs | Standardized data access |
| Smart on FHIR | App ecosystem |
| Blockchain | Trust and audit |
| AI/ML | Data matching, prediction |

*Patient-Facing Innovation:*
- Aggregation apps
- Health records on phones
- Sharing controls
- Decision support

**Health Equity Implications:**

*Disparities:*
- Digital access gaps
- Connectivity variations
- Literacy barriers
- Trust issues
- Language access

*Equity Interventions:*
- Universal design
- Multi-channel access
- Community partnerships
- Trust building
- Language support

**Privacy and Security:**

*Evolving Threats:*
- Data breaches
- Inappropriate access
- Secondary use concerns
- Re-identification risks

*Protection Strategies:*
- Enhanced consent mechanisms
- Granular access controls
- Audit capabilities
- Patient notification

**Research Integration:**

*Learning Health System:*
\`\`\`
Clinical Care Data
       ↓
Aggregation & Analysis
       ↓
Knowledge Generation ← → Patient Contribution
       ↓
Clinical Decision Support
       ↓
Improved Care
\`\`\`

*Patient Participation:*
- Data donation
- Research consent
- Outcome reporting
- Community engagement

**Global Perspectives:**

*International Examples:*
| Country | Approach |
|---------|----------|
| Estonia | National digital infrastructure |
| Israel | Centralized system |
| Netherlands | Regional networks |
| Australia | My Health Record |

*Lessons:*
- Governance matters
- Patient trust essential
- Incremental progress
- Sustainability planning

**Future Directions:**

*Policy Evolution:*
- Expanded TEFCA
- Additional interoperability requirements
- Patient data rights expansion
- Quality accountability

*Technology Horizon:*
- Ambient documentation integration
- Real-time exchange
- AI-enhanced matching
- Predictive coordination

*Patient Partnership:*
- True data ownership
- Comprehensive portability
- Active participation
- Shared accountability`,
      keyTerms: [
        { term: 'learning health system', definition: 'System where data routinely informs improvement and research' },
        { term: 'Smart on FHIR', definition: 'Platform for building interoperable health apps' },
        { term: 'data donation', definition: 'Patient choice to contribute data for research' },
        { term: 'granular consent', definition: 'Ability to control sharing at detailed level' },
      ],
      clinicalNotes: 'The trajectory is toward ubiquitous health information availability with patient control. Organizations must prepare for increased interoperability requirements while maintaining security and building patient trust.',
    },
  },

  media: [],

  citations: [
    {
      id: 'healthit-hie',
      type: 'website',
      title: 'Health Information Exchange',
      source: 'HealthIT.gov',
      url: 'https://www.healthit.gov/topic/health-it-and-health-information-exchange-basics/health-information-exchange',
    },
  ],

  crossReferences: [
    { targetId: 'concept-accessing-your-records', targetType: 'concept', relationship: 'related', label: 'Accessing Your Records' },
    { targetId: 'concept-understanding-your-rights', targetType: 'concept', relationship: 'related', label: 'Understanding Your Rights' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medical-records', 'care-coordination', 'health-information-exchange'],
    clinicalRelevance: 'high',
    keywords: ['HIE', 'record sharing', 'care coordination', 'interoperability'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sharingRecordsBetweenProviders;
