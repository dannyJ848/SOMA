/**
 * HIPAA and Medical Privacy - Comprehensive Educational Content
 *
 * Covers HIPAA regulations, patient privacy rights, how health information
 * is protected, and what patients can do if their privacy is violated.
 */

import { EducationalContent } from '../types';

export const hipaaPrivacy: EducationalContent = {
  id: 'concept-hipaa-privacy',
  type: 'concept',
  name: 'HIPAA and Medical Privacy',
  alternateNames: ['Health Information Privacy', 'Medical Confidentiality', 'PHI Protection', 'Patient Privacy Rights'],

  levels: {
    1: {
      level: 1,
      summary: 'There are special rules that keep your health information private, so doctors and hospitals can\'t share your medical details without your permission.',
      explanation: `When you go to the doctor, you share personal information about your body and health. There's a special law called HIPAA that protects this information and keeps it private.

**What HIPAA Protects:**

Your health information is private. This includes:
- What sickness or injuries you have
- What medicines you take
- Your test results
- Notes your doctor writes about you
- Your address and phone number at the doctor's office

**Who Must Keep Your Information Private:**

- Doctors and nurses
- Hospitals and clinics
- Pharmacies (where you get medicine)
- Health insurance companies
- Anyone who works with your health information

**Your Privacy Rights:**

1. **Keep it Secret**: Your health information can't be shared without your permission (except in special cases like emergencies)

2. **See Your Records**: You can look at your own health information

3. **Fix Mistakes**: If something is wrong in your records, you can ask to have it fixed

4. **Know Who Sees It**: You can ask who has looked at your health information

**When Information CAN Be Shared:**

- To help take care of you (like when your doctor talks to a specialist)
- In emergencies when you can't give permission
- When required by law
- If your parents or guardians need to know (for kids)

Think of HIPAA like a lock on a diary. Your health information is personal, and this law keeps it safe and private!`,
      keyTerms: [
        { term: 'HIPAA', definition: 'A law that keeps your health information private and safe' },
        { term: 'private', definition: 'Something personal that you don\'t share with everyone' },
        { term: 'health information', definition: 'Details about your body, health, and medical care' },
        { term: 'permission', definition: 'Saying it\'s okay for someone to do something' },
        { term: 'records', definition: 'Written information that is saved and stored' },
      ],
      analogies: [
        'HIPAA is like a rule that says no one can read your diary without asking you first.',
        'Your health information has a privacy shield around it, kind of like how a password protects your video game account.',
      ],
      examples: [
        'If your teacher asks the school nurse why you missed class, the nurse can\'t tell them you had a doctor\'s appointment for a specific health issue without your permission.',
        'When you go to the pharmacy to pick up medicine, they won\'t tell other customers what medicine you\'re getting.',
      ],
    },
    2: {
      level: 2,
      summary: 'HIPAA is a federal law that protects your medical information from being shared without your consent and gives you rights over your health records.',
      explanation: `The Health Insurance Portability and Accountability Act (HIPAA) was passed in 1996 to protect the privacy of your health information. It applies to healthcare providers, health insurers, and their business partners.

## What HIPAA Protects

**Protected Health Information (PHI) includes:**
- Your name linked to health data
- Medical records and history
- Test results and diagnoses
- Treatment information
- Prescription records
- Insurance and payment information
- Any information that could identify you and relates to your health

## Your HIPAA Rights

**1. Right to Access Your Records**
- Get copies of your medical records
- Receive them within 30 days of request
- Small fee may apply for copies

**2. Right to Request Corrections**
- Ask to fix errors in your records
- Provider must respond within 60 days
- Can attach your disagreement if denied

**3. Right to Know Who Accessed Your Information**
- Get an "accounting of disclosures"
- Lists who received your information and why
- Covers past 6 years

**4. Right to Request Restrictions**
- Ask that certain information not be shared
- Provider doesn't have to agree (with one exception)
- If you pay cash and ask, provider cannot tell insurer

**5. Right to Confidential Communications**
- Receive information at alternate address/phone
- No need to explain why

## When Providers CAN Share Information

**Without Your Permission:**
| Purpose | Example |
|---------|---------|
| Treatment | Doctor sends records to specialist |
| Payment | Sending bills to insurance |
| Healthcare operations | Quality improvement activities |
| Required by law | Reporting infectious diseases |
| Public health | Tracking disease outbreaks |
| Emergencies | When you cannot give consent |

**Only With Your Permission:**
- Sharing with employers
- Marketing purposes
- Sale of your information
- Most sharing with family/friends

## What Happens If Privacy Is Violated

If your privacy rights are violated, you can:
1. File a complaint with your healthcare provider
2. File a complaint with the HHS Office for Civil Rights
3. Some states allow you to sue for damages`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act - federal law protecting health information privacy', pronunciation: 'HIP-ah' },
        { term: 'Protected Health Information (PHI)', definition: 'Any individually identifiable health information held by covered entities' },
        { term: 'covered entity', definition: 'Healthcare providers, health plans, and healthcare clearinghouses that must follow HIPAA' },
        { term: 'disclosure', definition: 'The release, transfer, or sharing of health information to outside entities' },
        { term: 'Office for Civil Rights (OCR)', definition: 'The HHS agency that enforces HIPAA and investigates complaints' },
      ],
      analogies: [
        'Think of PHI like mail marked "confidential" - it can only be opened by certain people for specific reasons.',
        'HIPAA acts like a gatekeeper, only letting your health information pass to those who truly need it.',
      ],
    },
    3: {
      level: 3,
      summary: 'HIPAA establishes national standards for PHI protection through Privacy, Security, and Breach Notification Rules, enforced by OCR with civil and criminal penalties for violations.',
      explanation: `## HIPAA Structure and Rules

HIPAA comprises several rules affecting healthcare privacy:

### Privacy Rule (45 CFR 164.500-534)
Establishes national standards for when PHI may be used or disclosed.

**Key Principles:**
- **Minimum Necessary**: Only access/share PHI needed for the purpose
- **Notice of Privacy Practices (NPP)**: Required document explaining privacy practices
- **Authorization Requirements**: When written patient authorization is required

**PHI Categories:**
- **Identifiers (18 total)**: Name, DOB, SSN, address, phone, email, medical record numbers, etc.
- **Past, Present, Future**: Health conditions, treatments, and services
- **Payment Information**: Related to healthcare payment

### Security Rule (45 CFR 164.302-318)
Technical and physical safeguards for electronic PHI (ePHI).

**Safeguard Categories:**
| Type | Examples |
|------|----------|
| Administrative | Risk assessments, workforce training, access management |
| Physical | Facility access controls, workstation security, device controls |
| Technical | Access controls, encryption, audit logs, integrity controls |

### Breach Notification Rule (45 CFR 164.400-414)
Requirements when PHI is compromised.

**Notification Requirements:**
- **Individual Notice**: Within 60 days of discovery
- **Media Notice**: If >500 individuals in a state affected
- **HHS Notice**: Within 60 days for breaches affecting >500; annual log for smaller breaches

## Covered Entities and Business Associates

**Covered Entities:**
1. Healthcare providers who transmit claims electronically
2. Health plans
3. Healthcare clearinghouses

**Business Associates:**
- Entities that handle PHI on behalf of covered entities
- Require Business Associate Agreements (BAAs)
- Now directly liable under HITECH Act

## Special Privacy Provisions

### Psychotherapy Notes
- Highest protection level
- Separate authorization required
- Stored separately from medical record
- No disclosure for treatment, payment, or operations

### Substance Use Treatment (42 CFR Part 2)
- Federal regulations stricter than HIPAA
- Requires specific written consent for most disclosures
- Being aligned more closely with HIPAA under 2024 updates

### Minors
- State law determines when minors control their own PHI
- "Personal representative" rules for parents/guardians
- Exceptions for abuse situations

### Deceased Individuals
- HIPAA protects PHI for 50 years after death
- Executor/administrator may access
- Next of kin access varies by state

## Enforcement

**Civil Penalties (per violation):**
| Tier | Knowledge Level | Range |
|------|-----------------|-------|
| 1 | Did not know | $100-$50,000 |
| 2 | Reasonable cause | $1,000-$50,000 |
| 3 | Willful neglect, corrected | $10,000-$50,000 |
| 4 | Willful neglect, uncorrected | $50,000 minimum |

Annual cap: $1.5 million per violation category

**Criminal Penalties:**
- Up to 10 years imprisonment for offenses involving intent to sell PHI`,
      keyTerms: [
        { term: 'minimum necessary standard', definition: 'Principle requiring covered entities to limit PHI use, disclosure, and requests to the minimum necessary to accomplish intended purpose' },
        { term: 'Business Associate Agreement (BAA)', definition: 'Contract between covered entity and business associate ensuring PHI protection' },
        { term: 'HITECH Act', definition: 'Health Information Technology for Economic and Clinical Health Act (2009) - expanded HIPAA enforcement and breach notification requirements' },
        { term: '42 CFR Part 2', definition: 'Federal regulations providing enhanced confidentiality protections for substance use disorder treatment records' },
        { term: 'Notice of Privacy Practices', definition: 'Required document informing patients of how their PHI may be used and their privacy rights' },
        { term: 'ePHI', definition: 'Electronic Protected Health Information - PHI in electronic form covered by Security Rule' },
      ],
      clinicalNotes: 'Train all staff on HIPAA annually. Implement role-based access controls in EHR systems. Conduct regular risk assessments. Document all disclosures for accounting purposes. Have breach response procedures in place. Verify identity before releasing PHI.',
    },
    4: {
      level: 4,
      summary: 'HIPAA\'s regulatory framework involves nuanced application of Privacy, Security, and Breach Notification Rules, requiring sophisticated compliance programs addressing de-identification, research uses, state law preemption, and emerging technologies.',
      explanation: `## Advanced Privacy Concepts

### De-identification Standards
Two methods to remove PHI from HIPAA protections:

**Expert Determination (§164.514(b)(1)):**
- Statistical/scientific expert determines re-identification risk is "very small"
- Documents methods and results
- More flexible but requires expertise

**Safe Harbor (§164.514(b)(2)):**
- Remove all 18 identifiers
- No actual knowledge of re-identification possibility
- More prescriptive but easier to implement

### Limited Data Set
- PHI with direct identifiers removed
- Requires Data Use Agreement
- Can be used for research, public health, healthcare operations
- Geographic data limited to first 3 digits of ZIP (or all 5 if population >20,000)

### Research and HIPAA

**Options for Research Use of PHI:**
1. **Individual Authorization**: Gold standard
2. **IRB/Privacy Board Waiver**: Must meet criteria
3. **De-identified Data**: No longer PHI
4. **Limited Data Set**: With DUA
5. **Preparatory to Research**: No PHI leaves covered entity
6. **Research on Decedents**: With representations

**Waiver Criteria (for IRB/Privacy Board):**
- Research not practicable without waiver
- Research not practicable without access to PHI
- Adequate PHI protection plan
- PHI not used for other purposes
- Adequate written assurances of destruction/protection

## State Law Preemption

HIPAA preemption analysis is complex:

**HIPAA Preempts State Law If:**
- State law is contrary to HIPAA
- Compliance with both is impossible
- State law creates obstacle to HIPAA objectives

**State Law Prevails If:**
- More stringent on privacy protections
- Required for state reporting (public health, etc.)
- Relates to controlled substance monitoring

**Examples of More Stringent State Laws:**
- California (CMIA): Private right of action, shorter breach notification
- Texas: Broader covered entity definition
- Massachusetts: Comprehensive data protection
- New York: Mental health confidentiality (MHL §33.13)

## Compliance Program Elements

### Required Policies and Procedures
- Privacy policies and procedures
- Designation of Privacy Officer
- Workforce training program
- Complaint process
- Sanction policy for violations
- Documentation retention (6 years)

### Risk Analysis Requirements
- Identify all ePHI
- Assess threats and vulnerabilities
- Determine risk levels
- Implement security measures
- Document and review regularly

### Incident Response
1. **Detection**: Monitoring systems, workforce reporting
2. **Investigation**: Determine if breach occurred
3. **Risk Assessment**: Analyze probability of compromise
4. **Mitigation**: Steps to reduce harm
5. **Notification**: If required
6. **Documentation**: Record all steps
7. **Remediation**: Prevent future incidents

## Enforcement Trends and Settlements

**OCR Enforcement Priorities:**
- Right of access violations (most common enforcement)
- Ransomware and hacking incidents
- Insider snooping
- Improper disposal of PHI
- Lack of risk analysis

**Notable Settlements:**
| Year | Entity | Amount | Issue |
|------|--------|--------|-------|
| 2018 | Anthem | $16M | Largest settlement (breach of 79M records) |
| 2022 | Various | Multiple | Right of access enforcement |
| 2023 | Major health systems | Various | Tracking technology on websites |

## Emerging Issues

### Health Apps and Wearables
- Most not covered by HIPAA
- FTC Health Breach Notification Rule may apply
- State consumer protection laws
- Proposed regulations evolving

### Tracking Technologies
- Website analytics, pixels, cookies
- May transmit PHI to third parties
- OCR guidance (December 2022): Regulated tracking technology if connects user to healthcare
- Multiple class actions and settlements

### Reproductive Health Privacy (Post-Dobbs)
- 2024 HIPAA amendments limit disclosures for investigations related to lawful reproductive healthcare
- Providers prohibited from disclosing PHI for certain purposes
- Modification to attestation requirements`,
      keyTerms: [
        { term: 'de-identification', definition: 'Process of removing identifying information from PHI so it no longer identifies an individual' },
        { term: 'safe harbor method', definition: 'De-identification approach requiring removal of 18 specified identifiers with no actual knowledge of re-identification' },
        { term: 'expert determination', definition: 'De-identification method using statistical expert to certify re-identification risk is very small' },
        { term: 'Data Use Agreement', definition: 'Contract required for sharing limited data sets, specifying permitted uses and recipient obligations' },
        { term: 'state preemption', definition: 'HIPAA supersedes contrary state laws unless state law is more stringent or falls within exceptions' },
        { term: 'tracking technology', definition: 'Website scripts, pixels, session recording tools that may transmit user information to third parties' },
      ],
      clinicalNotes: 'Audit EHR access regularly for inappropriate access patterns. Review website tracking technologies for HIPAA compliance. Implement "break the glass" alerts for high-profile patient records. Maintain 6-year documentation retention. Update risk analysis annually and after significant changes. Train workforce specifically on social media and PHI.',
    },
    5: {
      level: 5,
      summary: 'HIPAA compliance requires sophisticated integration of legal, technical, and operational expertise, navigating complex interactions with state laws, research regulations, emerging technologies, and evolving enforcement priorities while building organizational cultures of privacy.',
      explanation: `## Strategic Compliance Architecture

### Governance Model
**Privacy/Security Program Structure:**
- Chief Privacy Officer reporting to senior leadership
- Chief Information Security Officer (CISO) with dotted line to CPO
- Privacy Committee with cross-functional representation
- Integration with compliance, legal, IT, clinical leadership

**Key Performance Indicators:**
- Time to close access requests
- Breach metrics (incidents, response time, scope)
- Training completion rates
- Risk assessment findings and remediation
- Audit findings and corrective actions

### Enterprise Risk Management Integration

**Privacy Risk Assessment Framework:**
1. **Identify**: PHI flows, systems, vendors, use cases
2. **Analyze**: Threats, vulnerabilities, likelihood, impact
3. **Evaluate**: Risk tolerance, regulatory requirements
4. **Treat**: Controls, mitigation strategies
5. **Monitor**: Ongoing surveillance, metrics, review

**Third-Party Risk Management:**
- Comprehensive vendor due diligence
- BAA inventory and renewal tracking
- Periodic vendor security assessments
- Incident notification provisions
- Termination and data return requirements

## Complex Compliance Scenarios

### Health Information Exchanges (HIEs)
- Multiple covered entities exchanging PHI
- Trust framework establishment
- Consent management approaches (opt-in vs. opt-out)
- Accounting of disclosures across network
- TEFCA (Trusted Exchange Framework and Common Agreement) implications

### Mergers and Acquisitions
**Due Diligence:**
- Privacy program assessment
- Breach history review
- State law compliance in all jurisdictions
- Outstanding OCR investigations

**Integration Planning:**
- NPP harmonization
- System integration timeline
- Consent carry-forward
- Breach response capability

### International Data Considerations
- HIPAA has no express international provisions
- Consider GDPR interplay for covered entities with EU presence
- Cross-border data transfers require additional safeguards
- Cloud provider geographic locations

## Litigation and Regulatory Strategy

### OCR Investigation Response
1. **Preservation**: Immediate document/data preservation
2. **Assessment**: Internal investigation to understand facts
3. **Response**: Timely, complete, accurate responses
4. **Negotiation**: Resolution strategies
5. **Remediation**: Corrective action implementation

### Private Litigation Landscape
- No federal private right of action under HIPAA
- State law claims may apply:
  - Negligence (using HIPAA as standard of care)
  - State privacy statutes with private rights
  - Breach of confidentiality
  - Unfair/deceptive practices
- Class action risks for large breaches

### Documentation for Defensibility
- Document all compliance decisions and rationale
- Maintain investigation files
- Preserve risk analysis and remediation tracking
- Keep training records and attestations
- Track authorization and consent management

## Emerging Regulatory Landscape

### Information Blocking (ONC)
**Prohibited Practices:**
- Practices that interfere with access, exchange, or use of EHI
- Eight exceptions with specific requirements
- Applies to healthcare providers, health IT developers, HIEs

**Compliance Requirements:**
- Policy and procedure updates
- Patient access to EHI via apps
- APIs for data access
- Staff training on new obligations

### State Privacy Laws
**Comprehensive State Privacy Laws:**
- California (CCPA/CPRA): Consumer health data provisions
- Washington (My Health My Data Act): Health-specific law
- Various state AI regulations affecting health
- Ongoing state legislative activity

**Compliance Strategy:**
- Map state law applicability
- Identify most stringent requirements
- Build to highest standard where feasible
- Maintain jurisdiction-specific procedures where needed

### Artificial Intelligence Implications
**AI/ML in Healthcare:**
- Training data privacy considerations
- Algorithm transparency requirements
- Consent for AI-assisted clinical decisions
- Bias auditing and documentation

**Generative AI Concerns:**
- PHI in prompts to AI systems
- BAA requirements for AI vendors
- Output containing PHI
- Staff training on appropriate use

## Building Privacy Culture

### Workforce Engagement
- Annual training beyond minimum requirements
- Role-specific training (front desk, clinical, IT, research)
- Simulated phishing and breach exercises
- Privacy champions in each department
- Anonymous reporting mechanisms
- Recognition for privacy-protective behaviors

### Patient Engagement
- Plain-language NPP
- Proactive communication about privacy protections
- Easy access request processes
- Patient portal privacy education
- Transparency about data uses

### Continuous Improvement
- Regular privacy program assessments
- Benchmarking against peer organizations
- Lessons learned from incidents and near-misses
- Incorporation of regulatory guidance updates
- Industry working group participation`,
      keyTerms: [
        { term: 'TEFCA', definition: 'Trusted Exchange Framework and Common Agreement - ONC initiative to establish nationwide health information exchange infrastructure' },
        { term: 'information blocking', definition: 'Practices that interfere with access, exchange, or use of electronic health information, prohibited under 21st Century Cures Act' },
        { term: 'GDPR', definition: 'General Data Protection Regulation - EU privacy law that may apply to US healthcare entities with EU operations or patients' },
        { term: 'break the glass', definition: 'Emergency access procedure allowing override of normal access restrictions with mandatory audit trail' },
        { term: 'API', definition: 'Application Programming Interface - technical mechanism enabling apps to access patient data under new ONC rules' },
        { term: 'EHI', definition: 'Electronic Health Information - broader than ePHI under 21st Century Cures, includes information in designated record set' },
      ],
      clinicalNotes: `Privacy program priorities:
1. Implement comprehensive third-party risk management including BAA lifecycle tracking
2. Address website tracking technology HIPAA compliance urgently
3. Update policies for reproductive health privacy requirements
4. Prepare for information blocking enforcement
5. Assess AI/ML tools for HIPAA implications before deployment
6. Build state-by-state compliance capability as privacy laws proliferate
7. Establish meaningful privacy metrics for board reporting
8. Integrate privacy into EHR implementation and upgrade projects
9. Develop playbooks for common privacy scenarios
10. Create privacy-by-design processes for new initiatives`,
    },
  },

  media: [
    {
      id: 'hipaa-overview-diagram',
      type: 'diagram',
      filename: 'hipaa-overview.svg',
      title: 'HIPAA Regulatory Framework',
      description: 'Overview of HIPAA Privacy, Security, and Breach Notification Rules',
    },
    {
      id: 'phi-disclosure-flowchart',
      type: 'diagram',
      filename: 'phi-disclosure-decision.svg',
      title: 'PHI Disclosure Decision Tree',
      description: 'Flowchart for determining when PHI disclosure is permitted',
    },
  ],

  citations: [
    {
      id: 'hhs-hipaa-guidance',
      type: 'website',
      title: 'HIPAA for Professionals',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-professionals/index.html',
      accessedDate: '2026-01-24',
    },
    {
      id: 'hipaa-privacy-rule',
      type: 'website',
      title: 'The HIPAA Privacy Rule',
      source: 'Code of Federal Regulations Title 45, Part 164',
      url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164',
      accessedDate: '2026-01-24',
    },
    {
      id: 'ocr-right-of-access',
      type: 'website',
      title: 'HIPAA Right of Access Initiative',
      source: 'HHS Office for Civil Rights',
      url: 'https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/right-of-access/index.html',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'parent', label: 'Patient Bill of Rights' },
    { targetId: 'concept-medical-records-access', targetType: 'concept', relationship: 'related', label: 'Accessing Medical Records' },
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'legal-rights', 'healthcare-policy', 'information-security'],
    keywords: ['HIPAA', 'privacy', 'PHI', 'medical records', 'confidentiality', 'data protection'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hipaaPrivacy;
