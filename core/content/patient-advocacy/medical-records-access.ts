/**
 * Medical Records Access - Comprehensive Educational Content
 *
 * Covers patients' rights to access their medical records, how to request them,
 * and understanding what information is included.
 */

import { EducationalContent } from '../types';

export const medicalRecordsAccess: EducationalContent = {
  id: 'concept-medical-records-access',
  type: 'concept',
  name: 'Medical Records Access',
  alternateNames: ['Health Records', 'Patient Records', 'Medical Chart Access'],

  levels: {
    1: {
      level: 1,
      summary: 'You have the right to see and get copies of your health records that doctors and hospitals keep about you.',
      explanation: `Every time you visit a doctor or hospital, they write things down about you. This is called your medical record. It includes information about:

- What the doctor found during your checkup
- Any medicines you take
- Any tests you had done
- What the doctor thinks is making you feel sick

**Your Right to See Your Records:**

You can ask to see these notes! Your parents can help you get copies of your records. This is important because:

1. You can learn more about your health
2. You can share the information with a new doctor
3. You can make sure the information is correct

Think of your medical record like a special report card about your health. Just like you can see your school grades, you can see your health information too!`,
      keyTerms: [
        { term: 'medical record', definition: 'A file where doctors write down information about your health' },
        { term: 'health information', definition: 'Facts about your body, any sicknesses you have had, and treatments you received' },
        { term: 'patient portal', definition: 'A special website where you can look at your health information' },
      ],
      analogies: [
        'Medical records are like a diary that doctors keep about your health.',
        'Getting your records is like getting a copy of your report card from school.',
      ],
      examples: [
        'If you move to a new city and need a new doctor, you can get copies of your old records to share with them.',
        'Your parents might ask for your vaccination records when you start at a new school.',
      ],
    },
    2: {
      level: 2,
      summary: 'Federal law gives patients the right to access and obtain copies of their medical records from healthcare providers, with specific timelines and limited fees.',
      explanation: `## Your Right to Medical Records

Under HIPAA (the Health Insurance Portability and Accountability Act), you have the legal right to access your medical records. This applies to most healthcare providers, hospitals, and health plans.

### What's in Your Medical Record

Your medical record typically includes:
- **Personal information**: Name, address, date of birth
- **Medical history**: Past illnesses, surgeries, allergies
- **Visit notes**: What happened at each appointment
- **Test results**: Lab work, imaging studies
- **Treatment plans**: Medications, therapies
- **Immunization records**: Vaccines you've received

### How to Request Records

1. Contact the medical records department
2. Fill out an authorization form
3. Specify what records you need
4. Choose your format (paper, CD, electronic)

### What to Expect

- **Timeline**: Providers have 30 days to respond (can extend 30 more days with notice)
- **Fees**: Can charge reasonable copying costs only
- **Format**: You can request electronic copies if records are electronic

### Exceptions

Providers can deny access in limited situations:
- Psychotherapy notes (personal notes therapists keep)
- Information compiled for legal proceedings
- Information that could endanger someone's safety`,
      keyTerms: [
        { term: 'HIPAA', definition: 'A federal law that protects your health information and gives you rights to access it' },
        { term: 'authorization form', definition: 'A paper you sign giving permission to release your health information' },
        { term: 'medical records department', definition: 'The office at a hospital or clinic that manages patient health records' },
        { term: 'electronic health record (EHR)', definition: 'A digital version of your medical chart stored on a computer' },
      ],
      analogies: [
        'Your medical record is like a bank account statement for your health - you have the right to see the record of all transactions.',
        'Requesting medical records is similar to requesting your credit report - it\'s your information, and the law protects your access to it.',
      ],
    },
    3: {
      level: 3,
      summary: 'HIPAA Privacy Rule establishes comprehensive patient rights to access Protected Health Information (PHI), with specific regulations governing request procedures, response timelines, permitted fees, and limited denial grounds.',
      explanation: `## Legal Framework for Medical Records Access

### HIPAA Privacy Rule (45 CFR 164.524)

The Privacy Rule establishes the right of individuals to access and obtain copies of PHI held by covered entities (healthcare providers, health plans, healthcare clearinghouses).

### Scope of Access Right

**Designated Record Set includes:**
- Medical and billing records
- Enrollment, payment, claims, and case management records
- Records used to make decisions about individuals

**Excludes:**
- Psychotherapy notes (kept separate from main record)
- Information compiled for civil, criminal, or administrative proceedings
- PHI subject to Clinical Laboratory Improvements Amendments (CLIA)

### Request and Response Requirements

**Request Processing:**
- Written request required (form provided by covered entity)
- Cannot require explanation of why access is sought
- Can request specific records or entire record

**Response Timeline:**
- 30 days for records maintained on-site
- 60 days for records maintained off-site
- One 30-day extension permitted with written notice

**Format Requirements:**
- Must provide in requested format if readily producible
- If electronic records exist, must provide electronic copy upon request
- 21st Century Cures Act prohibits information blocking

### Fee Limitations

Covered entities may charge only:
- Labor for copying (paper or electronic)
- Supplies for paper copies
- Postage if mailed
- May not charge for search and retrieval

**Note:** Many states have more restrictive fee limits than federal law.

### Denial of Access

**Unreviewable denials:**
- Psychotherapy notes
- Information for legal proceedings
- Information from confidential sources (research)

**Reviewable denials:**
- Licensed healthcare professional determines access would endanger patient or others
- Reference to another person who could be harmed
- Request made by personal representative deemed harmful to patient`,
      keyTerms: [
        { term: 'Designated Record Set', definition: 'Group of records maintained by or for a covered entity used to make decisions about individuals' },
        { term: 'covered entity', definition: 'Healthcare provider, health plan, or clearinghouse subject to HIPAA regulations' },
        { term: 'information blocking', definition: 'Practice that unreasonably limits access, exchange, or use of electronic health information' },
        { term: 'psychotherapy notes', definition: 'Notes recorded by a mental health professional documenting the contents of therapy sessions' },
        { term: 'personal representative', definition: 'Person authorized to act on behalf of an individual regarding healthcare decisions' },
      ],
      clinicalNotes: 'Healthcare facilities should have clear policies for records requests. Staff training on access rights prevents HIPAA violations. Document all requests and responses carefully.',
    },
    4: {
      level: 4,
      summary: 'Medical records access rights involve complex interplay of federal and state laws, enforcement mechanisms, and practical implementation challenges including format requirements, fee disputes, and access delays.',
      explanation: `## Regulatory Framework

### Federal Requirements

**HIPAA Access Provisions (45 CFR 164.524):**
- Right to inspect and obtain copies of PHI in designated record set
- Right to direct copies to third parties
- Right to electronic access for electronic records
- Accounting of disclosures (164.528)

**21st Century Cures Act:**
- Information blocking prohibition effective April 2021
- Eight exceptions to information blocking rules
- ONC and CMS enforcement authority
- Patient access to electronic health information without delay

**HITECH Act Amendments:**
- Enhanced fee limitations
- Expedited access for electronic records
- Patient right to electronic copy of records

### State Law Variations

| Aspect | Federal Minimum | Common State Variations |
|--------|-----------------|-------------------------|
| Timeline | 30 days + 30 extension | 10-15 days (CA, NY) |
| Fees | Reasonable cost-based | Specific per-page limits |
| Mental health | Psychotherapy notes exempt | Additional protections |
| Minors | Parent access general | Minor consent to treatment records |
| HIV/substance abuse | 42 CFR Part 2 | Enhanced confidentiality |

### Implementation Considerations

**Format Requirements:**
- EHI must be available in computable electronic format
- USCDI (United States Core Data for Interoperability) standard
- HL7 FHIR API availability

**Patient Portals:**
- Meaningful Use/Promoting Interoperability requirements
- View, download, transmit capabilities
- Lab results within specified timeframes
- Clinical notes (Open Notes movement)

### Enforcement Mechanisms

**OCR Enforcement:**
- Right to Access Initiative launched 2019
- Increased enforcement actions
- Corrective action plans
- Civil monetary penalties ($100-$50,000 per violation)

**Private Actions:**
- No private right of action under HIPAA
- State law remedies may exist
- Breach of contract claims
- Tort claims (negligence, invasion of privacy)

### Special Circumstances

**Deceased Patients:**
- Personal representative of estate has access rights
- State probate laws govern authorization
- 50-year limit on HIPAA protection

**Research Records:**
- Access to research data may be suspended during trial
- Final study results must be accessible
- IRB-approved restrictions`,
      keyTerms: [
        { term: 'USCDI', definition: 'United States Core Data for Interoperability - standardized set of data classes and elements for health information exchange' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - modern standard for exchanging healthcare information electronically' },
        { term: 'Right to Access Initiative', definition: 'OCR enforcement priority focusing on ensuring patients can access their health information' },
        { term: 'Open Notes', definition: 'Movement promoting transparency by sharing clinical notes directly with patients' },
        { term: '42 CFR Part 2', definition: 'Federal regulations providing additional confidentiality protections for substance use disorder treatment records' },
      ],
      clinicalNotes: 'Ensure EHR systems support patient portal access. Train staff on responding to access requests within timelines. Develop clear fee schedules compliant with both federal and state law. Monitor OCR enforcement actions for compliance guidance.',
    },
    5: {
      level: 5,
      summary: 'Medical records access requires sophisticated understanding of evolving interoperability requirements, information blocking regulations, and practical strategies for balancing patient rights with operational and privacy considerations.',
      explanation: `## Contemporary Regulatory Landscape

### Information Blocking Final Rule

**Scope of Prohibition:**
- Applies to healthcare providers, health IT developers, health information networks/exchanges
- Covers electronic health information (EHI) - broader than PHI
- Effective compliance dates: April 2021 (initial), October 2022 (expanded)

**Eight Exceptions:**
1. **Preventing Harm**: Reasonable belief of substantial harm
2. **Privacy**: Complying with privacy laws or patient request
3. **Security**: Protecting EHI security
4. **Infeasibility**: Technically or financially infeasible
5. **Health IT Performance**: Maintaining system performance
6. **Content and Manner**: Offering alternative means of access
7. **Fees**: Reasonable, cost-based fees
8. **Licensing**: Reasonable licensing terms

**Enforcement:**
- ONC referral to OIG for providers
- CMS Conditions of Participation (hospitals, CAHs)
- FTC enforcement for health IT developers
- Penalties up to $1M per violation

### Technical Requirements

**USCDI v2 Data Classes:**
- Patient demographics
- Allergies and intolerances
- Clinical notes (11 note types)
- Diagnostic imaging
- Goals
- Immunizations
- Laboratory
- Medications
- Problems
- Procedures
- Provenance
- Vital signs
- Health concerns
- Assessment and plan

**API Requirements:**
- Certified Health IT must support FHIR R4 APIs
- Patient access API without special effort
- Standardized patient matching
- App registration for third-party access

### Complex Access Scenarios

**Adolescent Records:**
- State minor consent laws vary
- Parent access vs. minor privacy
- Reproductive health records
- Mental health and substance use treatment
- Documentation of minor's objection

**Behavioral Health Integration:**
- 42 CFR Part 2 alignment efforts
- SAMHSA final rule updates
- Integration with general medical records
- Patient consent requirements

**Genetic Information:**
- GINA protections
- Research use limitations
- Predictive information disclosure
- Family member privacy

### Organizational Implementation

**Policy Considerations:**
- Access request workflow design
- Fee schedule development
- Denial documentation requirements
- Third-party access protocols
- Research data access procedures

**Technology Integration:**
- Patient portal optimization
- Mobile access capabilities
- Third-party app connectivity
- Audit logging requirements
- Identity proofing standards

**Staff Training:**
- HIPAA access rights
- Information blocking rules
- Fee calculation
- Denial grounds and review process
- Customer service approach

### Emerging Issues

**Data Portability:**
- Health data ownership debates
- Interoperability roadmap
- Consumer-facing apps
- Data quality concerns

**AI and Access Rights:**
- Algorithmic clinical notes
- Explanation of AI-derived recommendations
- Bias transparency
- Right to understand automated decisions

**Research Data Access:**
- Common Rule revisions
- Participant access to results
- Broad consent models
- Return of incidental findings`,
      keyTerms: [
        { term: 'electronic health information (EHI)', definition: 'Broader than PHI - includes all electronic information that identifies an individual and relates to health' },
        { term: 'information blocking exception', definition: 'One of eight permitted reasons for not making EHI available under the Cures Act' },
        { term: 'Conditions of Participation', definition: 'CMS requirements for healthcare facilities to participate in Medicare/Medicaid programs' },
        { term: 'USCDI v2', definition: 'Second version of the United States Core Data for Interoperability standard' },
        { term: 'identity proofing', definition: 'Process of verifying a person\'s identity before granting access to health information' },
      ],
      clinicalNotes: `Implementation priorities:
1. Audit current access request workflows against regulatory requirements
2. Ensure FHIR API deployment meets certification requirements
3. Develop patient-facing materials explaining access rights
4. Create clear fee schedules with state law compliance
5. Train revenue cycle staff on access vs. billing records
6. Implement robust identity verification for portal access
7. Monitor OIG enforcement priorities
8. Document all denial decisions with clinical rationale`,
    },
  },

  media: [
    {
      id: 'records-access-flowchart',
      type: 'diagram',
      filename: 'records-request-process.svg',
      title: 'Medical Records Request Process',
      description: 'Step-by-step flowchart for requesting medical records',
    },
  ],

  citations: [
    {
      id: 'hhs-right-access',
      type: 'website',
      title: 'Individuals\' Right under HIPAA to Access their Health Information',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html',
      accessedDate: '2026-01-24',
    },
    {
      id: 'onc-info-blocking',
      type: 'website',
      title: 'Information Blocking',
      source: 'Office of the National Coordinator for Health IT',
      url: 'https://www.healthit.gov/topic/information-blocking',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-hipaa-privacy', targetType: 'concept', relationship: 'related', label: 'HIPAA and Medical Privacy' },
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'legal-rights', 'health-information', 'healthcare-policy'],
    keywords: ['medical records', 'health records access', 'HIPAA', 'patient rights', 'information blocking'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default medicalRecordsAccess;
