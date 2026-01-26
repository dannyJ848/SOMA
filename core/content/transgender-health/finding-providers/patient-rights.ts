import { EducationalContent } from '../../types';

export const patientRightsContent: EducationalContent = {
  id: 'topic-patient-rights',
  type: 'topic',
  name: 'Patient Rights for Transgender Individuals',
  alternateNames: ['Healthcare Rights', 'Trans Patient Rights'],

  levels: {
    1: {
      level: 1,
      summary: 'Transgender patients have rights to be treated fairly and with respect in healthcare settings.',
      explanation: `Everyone deserves good healthcare. Transgender people have rights when they see doctors and nurses.

**Your Rights Include:**
- Being treated with respect
- Using your correct name and pronouns
- Privacy about your medical information
- Choosing your own healthcare decisions
- Getting the care you need

**What You Can Do:**
- Ask to be called by your correct name
- Speak up if something doesn't feel right
- Ask questions about your care
- File a complaint if you're treated unfairly
- Find another provider if needed

You deserve healthcare that treats you with dignity.`,
      keyTerms: [
        { term: 'rights', definition: 'Things you are allowed and deserve to have' },
        { term: 'privacy', definition: 'Keeping personal information private' },
        { term: 'respect', definition: 'Treating someone fairly and valuing them' },
      ],
      analogies: [
        'Your rights in healthcare are like rules of a game - they protect you and make sure things are fair.',
      ],
      examples: [
        'If a doctor keeps using the wrong pronouns after you corrected them, you can file a complaint.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transgender patients have legal protections against discrimination and rights to affirming care, privacy, and respect in healthcare settings.',
      explanation: `Understanding your rights as a transgender patient helps you get better healthcare and know what to do if problems arise.

**Key Rights:**

*Non-Discrimination:*
- Federal protections under Section 1557 of ACA
- Many states have additional protections
- Applies to hospitals, clinics, insurance

*Privacy:*
- HIPAA protects your medical information
- Your transgender status is private health info
- You control who knows your medical history

*Informed Consent:*
- You decide what treatments to receive
- You must be given information to make decisions
- You can refuse treatment

*Respect:*
- Right to be addressed correctly
- Right to respectful treatment
- Right to competent care

**If Rights Are Violated:**

*Steps to Take:*
1. Speak to the provider or their supervisor
2. File a formal complaint with the facility
3. File with state health department
4. File federal complaint (HHS Office for Civil Rights)
5. Contact legal advocacy organizations

**Resources:**
- Transgender Law Center
- Lambda Legal
- National Center for Transgender Equality
- State-based organizations`,
      keyTerms: [
        { term: 'Section 1557', definition: 'Part of Affordable Care Act protecting against discrimination in healthcare' },
        { term: 'HIPAA', definition: 'Federal law protecting privacy of medical information' },
        { term: 'informed consent', definition: 'Right to receive information and make your own healthcare decisions' },
        { term: 'Office for Civil Rights', definition: 'Federal office that handles healthcare discrimination complaints' },
      ],
    },
    3: {
      level: 3,
      summary: 'Transgender patients are protected by federal non-discrimination laws, HIPAA privacy protections, and state laws, with established mechanisms for filing complaints and seeking legal remedies.',
      explanation: `Legal protections for transgender patients involve multiple regulatory frameworks and enforcement mechanisms.

**Federal Protections:**

*Section 1557 of ACA:*
- Prohibits discrimination in healthcare programs receiving federal funds
- Includes sex discrimination (interpreted to include gender identity)
- Applies to most hospitals, clinics, insurance
- Enforcement by HHS Office for Civil Rights

*HIPAA:*
- Protected health information includes transgender status
- Controls on disclosure
- Patient access to records
- Amendment rights

*Other Federal Laws:*
- ADA may apply in some contexts
- Title VII in employment healthcare contexts

**State Protections:**
- Many states have explicit gender identity protections
- State civil rights agencies may investigate
- State licensing boards may address provider misconduct
- Varies significantly by state

**Patient Rights in Practice:**

*Documentation:*
- Request records reflect correct name/gender
- May require legal name change or may not
- Varies by state and institution

*Treatment Access:*
- Right to medically necessary care
- Insurance coverage requirements vary
- Appeals processes for denials

*Privacy:*
- Control disclosure of transgender status
- HIPAA minimum necessary rule
- Exceptions for treatment, payment, operations

**Filing Complaints:**

*Internal:*
- Facility patient relations
- Document incidents
- Request written response

*External:*
- HHS Office for Civil Rights
- State civil rights agencies
- State licensing boards
- Legal advocacy organizations`,
      keyTerms: [
        { term: 'protected health information', definition: 'Health data covered by HIPAA privacy protections' },
        { term: 'medically necessary', definition: 'Healthcare that is appropriate and required for treatment' },
        { term: 'minimum necessary rule', definition: 'HIPAA principle limiting disclosure to what is needed' },
        { term: 'licensing board', definition: 'State body that regulates healthcare professionals' },
      ],
      clinicalNotes: 'Document patient preferences in medical record. Maintain privacy of transgender status per HIPAA. Support patients in understanding their rights.',
    },
    4: {
      level: 4,
      summary: 'Transgender patient rights are established through federal regulations including Section 1557, HIPAA, and state laws, with enforcement through administrative complaints, licensing actions, and litigation.',
      explanation: `Understanding the legal landscape of transgender patient rights informs clinical practice and patient advocacy.

**Regulatory Framework:**

*Section 1557 of ACA:*
- Codified at 45 CFR Part 92
- Covers entities receiving federal financial assistance
- Sex discrimination includes gender identity (current interpretation)
- Regulatory interpretation has varied by administration
- Private right of action exists

*Covered Entities:*
- Hospitals receiving Medicare/Medicaid
- Health insurance issuers
- Federally facilitated exchanges
- Title I entities

*HIPAA Privacy Rule:*
- 45 CFR Parts 160, 164
- Transgender status as protected health information
- Minimum necessary disclosure
- Patient access rights
- Amendment rights

**State Law Landscape:**

*Strong Protections:*
- Explicit gender identity in civil rights laws
- Insurance coverage mandates
- State enforcement mechanisms

*Variable/Weak Protections:*
- No explicit coverage
- Reliance on sex discrimination interpretation
- Religious exemption issues

**Enforcement Mechanisms:**

*Administrative:*
- HHS OCR complaints (180-day limit typically)
- State agency complaints
- Licensing board complaints
- Insurance department complaints

*Judicial:*
- Private lawsuits under Section 1557
- State civil rights laws
- Tort claims

*Advocacy:*
- Transgender Law Center
- Lambda Legal
- ACLU
- GLAD

**Documentation and Practice:**

*Medical Records:*
- SOGI data collection standards
- Preferred name display
- Gender marker policies
- Confidentiality protections

*Insurance:*
- Coverage denials and appeals
- State mandate compliance
- Exclusion challenges

*Facility Policies:*
- Non-discrimination policies
- Accommodation policies
- Training requirements`,
      keyTerms: [
        { term: 'private right of action', definition: 'Legal ability of individual to sue under a statute' },
        { term: 'covered entity', definition: 'Organization subject to specific regulations (e.g., HIPAA)' },
        { term: 'OCR', definition: 'Office for Civil Rights within HHS' },
        { term: 'insurance mandate', definition: 'State law requiring coverage of specific services' },
      ],
      clinicalNotes: 'Know your facility policies on discrimination. Support patients filing complaints when appropriate. Maintain documentation of any discriminatory incidents.',
    },
    5: {
      level: 5,
      summary: 'Transgender patient rights involve complex interplay of federal regulations, state laws, and enforcement mechanisms, requiring provider awareness of current legal landscape and institutional policies.',
      explanation: `Comprehensive understanding of transgender patient rights informs ethical practice, institutional policy, and patient advocacy.

**Current Legal Landscape:**

*Section 1557:*
- Post-Bostock developments
- Administrative interpretation history
- Current regulations
- Enforcement priorities
- Litigation landscape

*HIPAA Considerations:*
- Transgender status as PHI
- Disclosure limitations
- Special considerations:
  - Law enforcement requests
  - Third-party requests
  - Minors and parental access

*State Variation:*
- 22+ states with explicit protections
- Coverage varies significantly
- Preemption issues with federal law
- Local ordinances may add protections

**Insurance and Coverage:**

*Federal:*
- Medicare coverage evolution
- Medicaid: State plan variations
- Essential health benefits

*Private Insurance:*
- Exclusion challenges
- Medically necessary standard
- Appeals processes

*Self-Funded Plans:*
- ERISA preemption issues
- Limited state regulation
- Employer advocacy

**Emerging Issues:**

*Youth Care:*
- State restrictions
- Parental consent laws
- Confidentiality for minors
- Legal challenges

*Religious Exemptions:*
- RFRA applications
- Institutional exemptions
- Impact on access

*Facility Access:*
- Patient room assignment
- Restroom access
- Inpatient settings

**Institutional Implementation:**

*Policy Development:*
- Non-discrimination policy
- Name and pronoun policy
- Medical record policy
- Facility access policy

*Staff Training:*
- Legal requirements
- Cultural competence
- Complaint handling

*Compliance:*
- Audit processes
- Complaint tracking
- Corrective action

**Patient Advocacy:**

*Individual Level:*
- Rights education
- Complaint support
- Documentation assistance

*Systemic Level:*
- Policy advocacy
- Litigation support
- Legislative engagement

**Resources:**

*Legal Organizations:*
- Transgender Law Center
- Lambda Legal
- National Center for Transgender Equality
- ACLU LGBT Project
- GLAD

*Government Resources:*
- HHS OCR
- State civil rights agencies
- CMS`,
      keyTerms: [
        { term: 'Bostock v. Clayton County', definition: '2020 Supreme Court case extending Title VII to gender identity' },
        { term: 'ERISA', definition: 'Federal law regulating employee benefits; preempts state insurance law for self-funded plans' },
        { term: 'RFRA', definition: 'Religious Freedom Restoration Act; basis for some religious exemption claims' },
        { term: 'essential health benefits', definition: 'ACA-mandated categories of coverage' },
      ],
      clinicalNotes: `**Provider Responsibilities:**
- Know and follow non-discrimination requirements
- Maintain patient privacy per HIPAA
- Support patients exercising rights
- Document any discrimination encountered
- Advocate for institutional policy improvements
- Stay current with evolving legal landscape
- Connect patients with legal resources when needed`,
    },
  },

  media: [],
  citations: [
    {
      id: 'hhs-1557',
      type: 'website',
      title: 'Section 1557 of the Affordable Care Act',
      source: 'HHS Office for Civil Rights',
      url: 'https://www.hhs.gov/civil-rights/for-individuals/section-1557/',
      license: 'Government resource',
    },
  ],
  crossReferences: [
    { targetId: 'topic-affirming-providers', targetType: 'topic', relationship: 'related', label: 'Finding Affirming Providers' },
  ],
  tags: {
    topics: ['legal rights', 'healthcare access', 'discrimination', 'transgender health'],
    keywords: ['patient rights', 'discrimination', 'HIPAA', 'Section 1557', 'legal protections'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default patientRightsContent;
