/**
 * Accessing Your Medical Records
 *
 * Understanding your right to access and obtain your health information.
 */

import { EducationalContent } from '../../types';

export const accessingYourRecords: EducationalContent = {
  id: 'concept-accessing-your-records',
  type: 'concept',
  name: 'Accessing Your Medical Records',
  alternateNames: ['Getting Your Health Records', 'Medical Records Access', 'Health Information Access'],

  levels: {
    1: {
      level: 1,
      summary: 'Your medical records belong to you! You can ask to see them anytime.',
      explanation: `**What Are Medical Records?**
Medical records are like a diary about your health. They include:
- What the doctor found when they examined you
- Test results
- Medicines you take
- Treatments you have had

**Why Would You Want to See Them?**
- To remember what the doctor said
- To share with another doctor
- To check if everything is correct
- To keep track of your health

**How to Get Your Records:**

*Ask at the Doctor's Office:*
- "Can I have a copy of my records?"
- "Can I see my test results?"
- Fill out a form they give you

*Online Access:*
- Many doctors have patient portals
- You can log in to see your records
- Ask for help setting this up

**What You Can See:**
- Doctor's notes
- Lab test results
- X-rays and scan results
- Medication lists
- Immunization records

**It's Your Right!**
The law says you can see your own medical records. Do not be afraid to ask!`,
      keyTerms: [
        { term: 'medical records', definition: 'Written information about your health and medical care' },
        { term: 'patient portal', definition: 'A website where you can see your health information' },
        { term: 'test results', definition: 'The answers from blood tests, X-rays, and other medical tests' },
      ],
      analogies: [
        'Your medical records are like a report card for your health - you have the right to see how you are doing.',
        'A patient portal is like your own special mailbox for health information.',
      ],
      examples: [
        'A patient asks for a copy of their vaccination records for school.',
        'Someone logs into the patient portal to see their blood test results.',
      ],
    },
    2: {
      level: 2,
      summary: 'Federal law guarantees your right to access your medical records. Understanding how to request and use your records empowers you in managing your healthcare.',
      explanation: `**Your Right to Access:**

Under HIPAA, you have the legal right to access most of your medical records. Healthcare providers must respond to your request.

**What's in Your Medical Records:**

| Type | Examples |
|------|----------|
| Clinical notes | Visit summaries, assessments |
| Test results | Lab work, imaging |
| Medications | Prescriptions, allergies |
| Procedures | Surgeries, treatments |
| Correspondence | Referral letters, communications |
| Billing | Charges, insurance claims |

**How to Request Records:**

*Patient Portal:*
- Most convenient for recent records
- Real-time access to many results
- Secure messaging with providers
- Medication refill requests

*Written Request:*
- Complete authorization form
- Specify what records you need
- Provide date ranges if applicable
- Include where to send records

*Timeframe:*
- Providers must respond within 30 days
- Can extend by 30 more days with notice
- Electronic records often available sooner

**Fees:**
- Providers can charge reasonable fees
- Usually for copying and mailing
- Many states limit charges
- Electronic copies may be free or low-cost

**What May Be Withheld:**
- Psychotherapy notes (separate from treatment notes)
- Information compiled for legal proceedings
- Certain research records
- Information that could endanger someone

**Using Your Records:**

*For Continuity of Care:*
- Share with new providers
- Bring to specialist appointments
- Keep for emergencies
- Track health over time

*For Understanding Your Health:*
- Review diagnoses
- Understand test results
- Check medication history
- Verify information accuracy

**If Access Is Denied:**
- You can request a review
- File a complaint with HHS
- Know the reason for denial`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Federal law that gives you the right to access your health records' },
        { term: 'authorization form', definition: 'Document you sign to request or release your records' },
        { term: 'designated record set', definition: 'The group of records you have a right to access' },
        { term: 'psychotherapy notes', definition: 'Private notes therapists keep separately, with limited access rights' },
      ],
      analogies: [
        'Your medical record is like a book about you - you should be able to read your own story.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical records access is governed by HIPAA and related laws, with specific procedures, timeframes, and exceptions that patients should understand.',
      explanation: `## Medical Records Access: Legal Framework

**HIPAA Access Rights:**

*Scope of Access:*
- Designated record set
- Maintained by covered entity
- Used for treatment, payment, operations
- Includes electronic and paper records

*Request Process:*
1. Written request (may be required)
2. Identity verification
3. Fee structure disclosed
4. Response within 30 days (extendable 30 more)

**21st Century Cures Act:**

*Information Blocking Rule:*
- Providers cannot unreasonably restrict access
- Electronic access emphasized
- 8 exceptions defined
- Penalties for violations

*Patient Access Provisions:*
- Access without delay for electronic records
- Format patient can use
- No information blocking

**Record Types and Access:**

| Record Type | Access Right | Notes |
|-------------|--------------|-------|
| Clinical notes | Yes | Including after-visit summaries |
| Lab results | Yes | Direct access often available |
| Imaging | Yes | Images and reports |
| Medications | Yes | Current and historical |
| Psychotherapy notes | Limited | Separate from treatment records |
| Research records | Variable | Depending on study design |

**Electronic Health Record Access:**

*Patient Portals:*
- Real-time or near-real-time access
- OpenNotes movement - access to clinical notes
- Lab result release (may have brief delay)
- Secure messaging

*Health Information Exchange:*
- Records shared between providers
- Patient consent considerations
- Opt-in vs. opt-out models

**Requesting Records for Third Parties:**

*Valid Authorization Required:*
- Written form
- Specific information to disclose
- Purpose of disclosure
- Expiration date
- Right to revoke

*Common Scenarios:*
- Disability applications
- Life insurance
- Legal proceedings
- Family members

**Challenging Record Content:**

*Right to Amendment:*
- Request correction of errors
- Provider has 60 days to respond
- Can accept or deny
- If denied, can add statement to record

*Process:*
1. Submit written request
2. Specify what is incorrect
3. Explain correct information
4. Provider reviews and responds`,
      keyTerms: [
        { term: '21st Century Cures Act', definition: 'Federal law enhancing patient access to electronic health information' },
        { term: 'information blocking', definition: 'Practice unreasonably restricting access to health information' },
        { term: 'health information exchange', definition: 'Electronic sharing of health information between organizations' },
        { term: 'right to amendment', definition: 'HIPAA right to request correction of inaccurate records' },
      ],
      clinicalNotes: 'OpenNotes research shows patients reading their clinical notes have improved understanding and engagement. Some providers delay release of sensitive results to allow counseling.',
    },
    4: {
      level: 4,
      summary: 'Patient access to health information integrates HIPAA rights, Cures Act requirements, and evolving interoperability standards within a framework emphasizing patient empowerment.',
      explanation: `## Comprehensive Health Information Access Framework

**Regulatory Evolution:**

*HIPAA to Cures Act:*
\`\`\`
HIPAA (1996)
     ↓
HITECH (2009) - EHR incentives
     ↓
21st Century Cures (2016)
     ↓
Information Blocking Rules (2021)
     ↓
TEFCA (ongoing) - Interoperability
\`\`\`

**Information Blocking Deep Dive:**

*Prohibited Practices:*
- Unreasonable delays in access
- Limiting formats available
- Charging excessive fees
- Technical barriers
- Organizational policies limiting access

*Permitted Exceptions:*
| Exception | Application |
|-----------|-------------|
| Preventing harm | Substantial risk to patient or others |
| Privacy | Compliance with privacy laws |
| Security | Maintaining data security |
| Infeasibility | Technical limitations |
| Health IT performance | System maintenance needs |
| Content and manner | Reasonable limits on format |
| Fees | Reasonable charges |
| Licensing | Reasonable licensing terms |

**Interoperability Standards:**

*USCDI (US Core Data for Interoperability):*
- Standardized data elements
- Required for certified EHRs
- Expanding annually
- Includes patient demographics, medications, labs, etc.

*FHIR (Fast Healthcare Interoperability Resources):*
- API standard for data exchange
- Required for patient access
- Third-party app access
- Foundation for innovation

**Patient Access Implementation:**

*Portal Features:*
- View clinical notes (OpenNotes)
- Access lab and imaging results
- Review medications and allergies
- Secure messaging
- Appointment scheduling
- Bill pay

*Beyond Portals:*
- FHIR-based apps
- Apple Health integration
- Third-party aggregators
- Personal health records

**Privacy and Security Considerations:**

*Balancing Access and Protection:*
- Authentication requirements
- Audit trail maintenance
- Breach notification
- Third-party app risks

*Patient Responsibilities:*
- Secure login credentials
- Understand app permissions
- Review access logs
- Report concerns

**Special Circumstances:**

| Situation | Considerations |
|-----------|----------------|
| Minors | Parent/guardian access, state variations |
| Deceased patients | Personal representative access |
| Incapacitated patients | Authorized surrogate |
| Mental health | State-specific protections |
| Substance use | 42 CFR Part 2 requirements |

**Quality Improvement Through Access:**

*Benefits:*
- Error detection
- Enhanced understanding
- Improved adherence
- Better preparation for visits
- Shared decision-making

*Challenges:*
- Health literacy barriers
- Result interpretation
- Anxiety from early access
- Information overload`,
      keyTerms: [
        { term: 'USCDI', definition: 'US Core Data for Interoperability - standardized health data elements' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - standard for health data exchange' },
        { term: 'OpenNotes', definition: 'Movement promoting patient access to clinical documentation' },
        { term: 'TEFCA', definition: 'Trusted Exchange Framework and Common Agreement for nationwide interoperability' },
      ],
      clinicalNotes: 'Provider concerns about early result release are generally not supported by research. Most patients benefit from access, though some may need additional support interpreting complex results.',
    },
    5: {
      level: 5,
      summary: 'Health information access represents the intersection of policy, technology, and patient empowerment, with ongoing evolution toward comprehensive interoperability and patient control.',
      explanation: `## Advanced Perspectives on Health Information Access

**Policy Evolution and Future:**

*Current State:*
- HIPAA as baseline
- Cures Act enhancements
- Information blocking enforcement
- Interoperability mandates

*Future Directions:*
- Patient-mediated exchange
- Bidirectional data flow
- SDOH data inclusion
- Research integration

**Technology Landscape:**

\`\`\`
Patient
    ↓
Patient Portal ← → FHIR APIs ← → Third-Party Apps
    ↓                                    ↓
Health System                      Aggregators
    ↓                                    ↓
Health Information Exchange (HIE)
    ↓
TEFCA/National Network
\`\`\`

**Emerging Paradigms:**

*Patient-Controlled Records:*
- Patient data ownership concepts
- Personal health records
- Blockchain applications
- Data donation for research

*AI and Analytics:*
- Patient-facing decision support
- Predictive health tools
- Natural language explanations
- Personalized insights

**Health Equity Implications:**

*Access Disparities:*
- Digital divide
- Health literacy variations
- Language access
- Trust barriers
- Disability accommodations

*Equity Interventions:*
- Universal design
- Multi-language support
- Proxy access for caregivers
- Community health worker assistance
- Alternative access channels

**Research and Evidence:**

*OpenNotes Research:*
- Improved medication adherence
- Better visit preparation
- Error detection by patients
- Minimal provider burden
- Patient satisfaction

*Emerging Questions:*
- Third-party app safety
- Long-term outcomes
- Optimal information presentation
- Vulnerable population needs

**International Perspectives:**

*Comparison:*
| Region | Approach |
|--------|----------|
| US | Rights-based, market-driven |
| EU | GDPR, strong privacy |
| UK | NHS integrated approach |
| Australia | My Health Record opt-out |

*Global Standards:*
- HL7 FHIR adoption
- IHE profiles
- ISO health informatics
- WHO digital health

**Governance and Stewardship:**

*Data Stewardship:*
- Patient as steward
- Provider responsibilities
- Aggregate data uses
- Research governance

*Policy Development:*
- Stakeholder engagement
- Patient advocacy role
- Industry participation
- Regulatory evolution

**Future Vision:**

*Patient-Centered Data Ecosystem:*
\`\`\`
Complete Longitudinal Record
         ↓
Patient-Controlled Access
         ↓
Seamless Provider Sharing ← → Research Contribution
         ↓
AI-Enhanced Insights
         ↓
Improved Health Outcomes
\`\`\`

*Challenges to Address:*
- Data quality
- Consent management
- Liability questions
- Business model sustainability
- Trust establishment`,
      keyTerms: [
        { term: 'patient-mediated exchange', definition: 'Health information sharing controlled by and through the patient' },
        { term: 'data stewardship', definition: 'Responsible management and governance of health data' },
        { term: 'SDOH data', definition: 'Social Determinants of Health information integrated with clinical data' },
        { term: 'digital divide', definition: 'Gap in access to digital technology and health information' },
        { term: 'data donation', definition: 'Patient choice to contribute health data for research' },
      ],
      clinicalNotes: 'The trajectory is clearly toward greater patient control of health information. Organizations should prepare for patient-mediated exchange and ensure equity in access. Provider-patient relationships will evolve with shared information access.',
    },
  },

  media: [],

  citations: [
    {
      id: 'hhs-hipaa-access',
      type: 'website',
      title: 'Individuals Right under HIPAA to Access their Health Information',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-understanding-your-chart', targetType: 'concept', relationship: 'related', label: 'Understanding Your Chart' },
    { targetId: 'concept-correcting-record-errors', targetType: 'concept', relationship: 'related', label: 'Correcting Record Errors' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medical-records', 'patient-rights', 'health-information'],
    clinicalRelevance: 'high',
    keywords: ['medical records', 'health information', 'patient portal', 'HIPAA'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default accessingYourRecords;
