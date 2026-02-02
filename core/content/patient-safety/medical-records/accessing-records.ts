import { EducationalContent } from '../../types';

export const accessingRecordsContent: EducationalContent = {
  id: 'accessing-records',
  type: 'concept',
  name: 'Accessing Your Medical Records',
  nameEs: 'Acceso a sus Registros Médicos',
  alternateNames: ['Medical Record Access', 'Patient Records', 'Health Information Access'],
  levels: {
    1: {
      level: 1,
      summary: 'You have the right to see and get copies of your medical records. This helps you understand your health and make better decisions.',
      explanation: `## Your Right to Your Medical Records

You have the right to see and get copies of your medical records. This helps you understand your health and make better decisions.

### What Are Medical Records?

Medical records include:
- Doctor notes from visits
- Test results (blood work, x-rays)
- Medication lists
- Surgery reports
- Immunization records

### How to Get Your Records

1. Ask the doctor\'s office or hospital
2. Fill out a request form
3. Show identification
4. Pay any copy fees (usually small)
5. Wait for processing (usually 30 days)

### Ways to Get Records

- Paper copies
- Electronic files
- Patient portal (online)
- CD or USB drive

### Why Access Your Records?

- Remember what the doctor said
- Share with other doctors
- Check for mistakes
- Track your health over time
- Be prepared for emergencies

### If They Say No

There are very few reasons they can refuse:
- Might harm you or others
- Part of a research study (temporarily)
- Most of the time, you have the right to access`,
      keyTerms: [
        { term: 'Medical record', definition: 'Documentation of your healthcare' },
        { term: 'Patient portal', definition: 'Secure website to view your health info' },
        { term: 'HIPAA', definition: 'Law protecting health information privacy' },
        { term: 'Request form', definition: 'Paperwork to ask for your records' }
      ],
      analogies: [
        'Your medical record is like your health report card'
      ],
      examples: [
        'A patient downloads their lab results from the patient portal before a specialist visit',
        'Someone requests records from their old doctor when moving to a new city'
      ]
    },
    2: {
      level: 2,
      summary: 'Under HIPAA, patients have the right to access, inspect, and copy their protected health information. Providers must respond within 30 days and can only charge reasonable fees for copying and mailing.',
      explanation: `## Your Rights Under HIPAA

Under HIPAA, patients have the right to access, inspect, and copy their protected health information. Providers must respond within 30 days and can only charge reasonable fees for copying and mailing.

### Information You Can Access

**Designated Record Set:**
- Medical and billing records
- Lab test results
- Imaging reports
- Progress notes
- Discharge summaries
- Medication lists

**What May Be Excluded:**
- Psychotherapy notes (separate protection)
- Information compiled for legal proceedings
- Some research records
- Information that could endanger safety

### How to Request Records

**Steps:**
1. Contact provider\'s health information department
2. Complete authorization form
3. Provide identification
4. Specify format preference (paper/electronic)
5. Pay applicable fees

**Timeframes:**
- Standard: 30 days
- Extension possible: additional 30 days with notice
- State laws may require faster

### Fees

**Permitted Charges:**
- Cost of copying (paper or electronic)
- Postage
- Preparation summary fee (if applicable)

**No Fees For:**
- Viewing records on-site
- Electronic access through portal
- First copy in some states

### Denial of Access

**Limited Grounds:**
- Endanger life or physical safety
- Endanger another person
- Reference to other person who requests confidentiality
- Privacy Act compliance (federal agencies)

**Review Process:**
- Provider must explain denial in writing
- Right to have decision reviewed
- Complaint to HHS Office for Civil Rights

### Patient Portals

**Common Features:**
- Lab results
- Medication lists
- Visit summaries
- Immunization records
- Secure messaging
- Appointment scheduling

**Benefits:**
- 24/7 access
- Free
- Convenient sharing
- Track health trends`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act' },
        { term: 'Designated record set', definition: 'Group of records covered by access rights' },
        { term: 'Psychotherapy notes', definition: 'Private notes of mental health sessions' },
        { term: 'Protected health information', definition: 'Health data with privacy protections' }
      ],
      analogies: [
        'HIPAA is like a lock on your health information - you control who has the key'
      ],
      examples: [
        'A patient requests their complete records before transferring to a new specialist',
        'Using the patient portal to check blood test results the day after a doctor visit'
      ]
    },
    3: {
      level: 3,
      summary: 'The right to access medical records has expanded with the 21st Century Cures Act and information blocking rules, requiring interoperability and prohibiting unreasonable barriers to electronic health information access.',
      explanation: `## Modern Health Information Access

The right to access medical records has expanded with the 21st Century Cures Act and information blocking rules, requiring interoperability and prohibiting unreasonable barriers to electronic health information access.

### 21st Century Cures Act

**Information Blocking Provisions:**
- Prohibits interference with information exchange
- Applies to healthcare providers, IT developers, HINs
- Penalties for non-compliance
- Patient access is a right

**Required Interoperability:**
- APIs for data exchange
- Standard data formats
- Patient access applications
- No data blocking

### Information Blocking Rules

**Prohibited Practices:**
- Delays beyond allowed timeframes
- Excessive fees
- Complex processes
- Gag clauses in contracts
- Separate application requirements

**Exceptions (if specific conditions met):**
- Preventing harm
- Privacy protection
- Security concerns
- Infeasibility
- Health IT performance
- Content and manner
- Fees (limited)
- Licensing

### Direct Access

**Blue Button Initiative:**
- Medicare beneficiaries
- Download health data
- Standardized formats
- Mobile app access

**Apple Health Records:**
- Integration with EHRs
- Standardized data
- Patient-controlled
- Growing adoption

**Third-Party Apps:**
- Patient-authorized access
- API connections
- Data aggregation
- Privacy considerations

### State Laws

**Strengthened Rights:**
- Faster access requirements
- Lower or no fees
- Broader scope of information
- Specific format rights

**Example State Provisions:**
- California: 5-day access
- New York: Free first copy
- Texas: Electronic format rights

### Special Situations

**Mental Health Records:**
- Access generally allowed
- Psychotherapy notes separate
- Provider may provide summary
- Safety concerns considered

**Genetic Information:**
- GINA protections
- Access rights
- Family implications
- Counseling recommended

**Substance Use Records:**
- 42 CFR Part 2 protections
- Additional consent required
- Separate privacy rules
- Recent modifications expanding access`,
      keyTerms: [
        { term: 'Information blocking', definition: 'Unreasonable barriers to health data sharing' },
        { term: 'API', definition: 'Application programming interface for data exchange' },
        { term: 'Interoperability', definition: 'Ability of systems to exchange information' },
        { term: '42 CFR Part 2', definition: 'Privacy rules for substance use treatment' }
      ]
    },
    4: {
      level: 4,
      summary: 'Accessing medical records serves clinical care coordination, patient engagement, and research. Implementation requires balancing access with privacy, addressing technical challenges of interoperability, and managing identity verification and audit trails for security.',
      explanation: `## Practical Aspects of Record Access

Accessing medical records serves clinical care coordination, patient engagement, and research. Implementation requires balancing access with privacy, addressing technical challenges of interoperability, and managing identity verification and audit trails for security.

### Clinical Care Coordination

**Care Transitions:**
- Hospital to home
- Specialist consultations
- Nursing facility transfers
- Emergency department visits

**Benefits:**
- Reduced duplicate testing
- Medication reconciliation
- Allergy awareness
- Treatment continuity

**Challenges:**
- Fragmented records across systems
- Incompatible formats
- Privacy concerns
- Provider resistance

### Patient Engagement

**Benefits of Access:**
- Improved understanding
- Better self-management
- Preparation for visits
- Medication adherence
- Care plan participation

**Barriers to Patient Use:**
- Health literacy
- Technical challenges
- Complex medical terminology
- Volume of information

**Interventions:**
- Patient-friendly formats
- Plain language summaries
- Health literacy support
- Navigator assistance

### Technical Infrastructure

**FHIR Standard:**
- Fast Healthcare Interoperability Resources
- Modern API standard
- Enabling app ecosystem
- SMART on FHIR framework

**Identity Verification:**
- Multi-factor authentication
- Government ID matching
- Biometric options
- Fraud prevention

**Audit Trails:**
- Who accessed what
- When and where
- Purpose documentation
- Security monitoring

### Research and Public Health

**Research Access:**
- De-identified data
- Consent requirements
- Institutional Review Boards
- Data use agreements

**Public Health:**
- Mandatory reporting
- Surveillance systems
- Outbreak investigation
- Population health

### International Comparison

**European Union:**
- GDPR protections
- Right to data portability
- Consent requirements
- Strong privacy focus

**Other Countries:**
- UK: NHS digital records
- Canada: Provincial variations
- Australia: My Health Record
- Lessons for US system`,
      keyTerms: [
        { term: 'FHIR', definition: 'Modern health data exchange standard' },
        { term: 'SMART on FHIR', definition: 'App platform for health data' },
        { term: 'Medication reconciliation', definition: 'Comparing medication lists' },
        { term: 'GDPR', definition: 'European data protection regulation' }
      ],
      clinicalNotes: 'Information blocking rules now enforced with penalties for non-compliance. FHIR standard enabling patient-facing apps - privacy protections vary by app. Audit trails required for all access - patients can request access reports. Research access requires either de-identification or consent - institutional processes vary.'
    },
    5: {
      level: 5,
      summary: 'Future health record access involves patient-controlled health records, blockchain for consent management, AI for summarization, and genomic data integration. Policy challenges include balancing innovation with privacy, addressing algorithmic bias, and ensuring equitable access across populations.',
      explanation: `## Future of Health Information Access

Future health record access involves patient-controlled health records, blockchain for consent management, AI for summarization, and genomic data integration. Policy challenges include balancing innovation with privacy, addressing algorithmic bias, and ensuring equitable access across populations.

### Patient-Controlled Records

**Concept:**
- Patient owns and controls data
- Grants access to providers
- Portable across systems
- Lifelong record

**Models:**
- Apple Health Records model
- Personal Health Records (PHRs)
- Blockchain-based systems
- Distributed health records

**Challenges:**
- Data completeness
- Provider adoption
- Liability questions
- Technical standards

### Emerging Technologies

**Blockchain:**
- Decentralized storage
- Immutable audit trail
- Smart contracts for consent
- Identity management

**Artificial Intelligence:**
- Natural language processing
- Clinical note summarization
- Predictive analytics
- Decision support

**Wearables and Sensors:**
- Continuous monitoring data
- Patient-generated data
- Integration with EHRs
- Data volume challenges

### Genomic Data

**Integration Challenges:**
- Large file sizes
- Interpretation complexity
- Secondary findings
- Family implications

**Access Issues:**
- Raw data vs reports
- Variant interpretation
- Incidental findings
- Counseling requirements

**Privacy Concerns:**
- Re-identification risk
- Discrimination potential
- Long-term implications
- Consent for future uses

### Health Equity

**Access Disparities:**
- Digital divide
- Language barriers
- Health literacy
- Disability accommodations

**Solutions:**
- Multiple access methods
- Interpreter services
- Plain language requirements
- Accessibility standards

**Rural Considerations:**
- Broadband access
- Mobile-first approaches
- Community health workers
- Telehealth integration

### Policy Directions

**TEFCA (Trusted Exchange Framework):**
- National network for exchange
- Common agreement
- QHINs as network nodes
- Patient access provisions

**Global Harmonization:**
- Cross-border data flows
- International standards
- Privacy framework alignment
- Research collaboration

**Consumer Protection:**
- App privacy standards
- Data use transparency
- Revocation rights
- Breach notification

### Research Frontiers

**Learning Health Systems:**
- Seamless research integration
- Consent management
- Return of results
- Population benefit

**Real-World Evidence:**
- EHR data for research
- Regulatory acceptance
- Quality considerations
- Privacy preservation`,
      keyTerms: [
        { term: 'PHR', definition: 'Personal health record controlled by patient' },
        { term: 'TEFCA', definition: 'National health information exchange framework' },
        { term: 'QHIN', definition: 'Qualified health information network' },
        { term: 'Re-identification', definition: 'Identifying person from de-identified data' }
      ],
      clinicalNotes: 'Patient-controlled health records face adoption challenges - provider buy-in essential. Genomic data integration outpacing clinical infrastructure for interpretation. AI summarization of records requires validation for accuracy. TEFCA implementation ongoing - will facilitate nationwide exchange. Digital divide remains barrier to equitable access - multiple modalities needed.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'medical-records'],
    keywords: ['medical records', 'HIPAA', 'health information', 'patient access', 'information blocking']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
