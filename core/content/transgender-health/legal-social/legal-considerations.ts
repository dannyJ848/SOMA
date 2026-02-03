import { EducationalContent } from '../../types';

export const legalConsiderationsContent: EducationalContent = {
  id: 'topic-legal-considerations',
  type: 'topic',
  name: 'Legal Considerations for Transgender Individuals',
  alternateNames: ['Trans Legal Rights', 'Gender Identity Law'],

  levels: {
    1: {
      level: 1,
      summary: 'Transgender people have legal rights and can change their name and gender on official documents.',
      explanation: `There are laws that protect transgender people and allow them to update their official documents.

**Your Rights:**
- Protection from some types of discrimination
- Ability to change your name legally
- Ability to change gender on many documents
- Rights vary by where you live

**Getting Help:**
- Lawyers who know about transgender issues
- Legal aid organizations
- Community organizations

Laws are different in different places, so it's important to learn about the rules where you live.`,
      keyTerms: [
        { term: 'discrimination', definition: 'Treating someone unfairly because of who they are' },
        { term: 'legal rights', definition: 'Things the law says you can do or that protect you' },
        { term: 'documents', definition: 'Official papers like IDs and birth certificates' },
      ],
      analogies: [
        'Updating your documents is like updating your contact information - it makes sure records match who you are now.',
      ],
      examples: [
        'A transgender person might work with a lawyer to change their name on their driver\'s license and birth certificate.',
      ],
    },
    2: {
      level: 2,
      summary: 'Legal considerations for transgender individuals include name changes, gender marker updates, anti-discrimination protections, and understanding rights in various settings.',
      explanation: `Understanding legal options helps transgender individuals navigate systems and protect their rights.

**Identity Documents:**

*Name Change:*
- Court process in most states
- Requirements vary (residency, filing fees)
- Some require newspaper publication
- May need updated for all documents after

*Gender Marker Change:*
- Birth certificate: Varies significantly by state
- Driver's license: State-specific requirements
- Passport: Federal process, requires medical certification
- Social Security: Requires documentation

**Legal Protections:**

*Federal:*
- Employment (Bostock v. Clayton County, 2020)
- Some housing and healthcare protections
- Varies by administration interpretation

*State/Local:*
- Many states have explicit protections
- Some cities have local ordinances
- Coverage varies significantly

**Seeking Legal Help:**

*Resources:*
- Transgender Law Center
- Lambda Legal
- ACLU LGBT Project
- Local legal aid organizations
- LGBTQ+ community centers

Document requirements and processes change frequently - seek current local guidance.`,
      keyTerms: [
        { term: 'name change', definition: 'Legal process to change your name officially' },
        { term: 'gender marker', definition: 'The gender listed on official documents (M, F, X)' },
        { term: 'Bostock v. Clayton County', definition: 'Supreme Court case protecting LGBTQ+ workers' },
        { term: 'legal aid', definition: 'Free or low-cost legal help' },
      ],
    },
    3: {
      level: 3,
      summary: 'Transgender legal issues encompass identity documentation changes, employment protections under Title VII, state anti-discrimination laws, and evolving healthcare-related legal protections.',
      explanation: `Legal considerations for transgender individuals span multiple areas of law with significant jurisdictional variation.

**Identity Documentation:**

*Name Change Process:*
- Court petition required in most jurisdictions
- Requirements: Residency, filing fee ($50-500), fingerprints (some)
- Publication requirement: Waivable in some states for safety
- Processing time: Weeks to months

*Gender Marker Changes:*
- Birth Certificate:
  - State-dependent
  - Some: Court order only
  - Some: Medical certification
  - Some: Surgery required (declining)
  - Some: Cannot be changed

- Driver's License/ID:
  - State-specific
  - Many now allow self-attestation
  - Some require medical documentation
  - Non-binary (X) available in many states

- Passport:
  - Self-attestation now accepted
  - X marker available
  - No medical certification required (as of 2022)

- Social Security:
  - Requires documentation update
  - Self-attestation accepted
  - Medical or legal gender change evidence

**Employment Protection:**

*Federal:*
- Title VII: Sex discrimination includes gender identity (Bostock, 2020)
- Applies to employers with 15+ employees
- EEOC enforcement

*State:*
- 22+ states have explicit gender identity protections
- Municipal protections may add coverage
- Religious exemptions in some areas

**Healthcare Rights:**

*Section 1557 of ACA:*
- Prohibits discrimination in healthcare
- Interpretation varies by administration
- Applies to federally-funded programs`,
      keyTerms: [
        { term: 'Title VII', definition: 'Federal law prohibiting employment discrimination' },
        { term: 'self-attestation', definition: 'Declaring one\'s own gender without external documentation' },
        { term: 'Section 1557', definition: 'ACA provision prohibiting healthcare discrimination' },
        { term: 'EEOC', definition: 'Equal Employment Opportunity Commission; enforces employment discrimination laws' },
      ],
      clinicalNotes: 'Documentation requirements for gender marker changes have eased in many jurisdictions. Refer patients to legal resources. Medical letters may still be needed for some purposes.',
    },
    4: {
      level: 4,
      summary: 'Transgender legal issues involve complex, evolving law including identity documentation, employment and housing protections, healthcare rights, and family law, with significant variation by jurisdiction.',
      explanation: `Comprehensive understanding of transgender legal issues informs patient support and advocacy.

**Identity Documentation:**

*Federal Documents:*
- Passport: Self-attestation accepted (2022), X marker available
- Social Security: Updated gender requires documentation; self-attestation accepted
- Selective Service: Complex for trans women
- Immigration: I-130, visa, naturalization processes

*State Documents:*
- Birth Certificate: Highly variable
  - 11+ states: Self-attestation
  - Many: Court order or medical certification
  - Few: Surgery requirement (declining)
  - 2: Cannot be changed (TN, OK as of 2023)
- Driver's License: Most states have processes; X marker in 20+ states
- Name change: Court order typically required

**Anti-Discrimination Law:**

*Employment:*
- Title VII: Bostock (2020) includes gender identity
- EEOC guidance and enforcement
- Disparate treatment and harassment covered
- Religious employer exemptions contested

*Housing:*
- Fair Housing Act: Interpreted to include gender identity
- HUD guidance varies by administration
- State laws provide additional protection in many areas

*Public Accommodations:*
- State and local law dependent
- No federal public accommodations law
- Ongoing litigation and legislative activity

**Healthcare:**

*Section 1557:*
- Prohibits discrimination in healthcare receiving federal funds
- Gender identity inclusion varies by administration
- Private right of action exists
- Religious exemption debates

*Insurance:*
- State mandates in some states
- Self-funded plan limitations (ERISA)
- Medicare and Medicaid coverage evolving

**Family Law:**

*Parenting:*
- Custody and visitation
- Adoption rights
- Marriage validity generally resolved

*Youth Issues:*
- Parental consent for treatment
- Minor's rights
- School protections variable`,
      keyTerms: [
        { term: 'disparate treatment', definition: 'Intentional discrimination based on protected characteristic' },
        { term: 'Fair Housing Act', definition: 'Federal law prohibiting housing discrimination' },
        { term: 'ERISA', definition: 'Federal law governing employee benefits; limits state regulation of self-funded plans' },
        { term: 'private right of action', definition: 'Legal ability to sue under a statute' },
      ],
      clinicalNotes: 'Legal landscape changes frequently. Refer to current resources. Be aware of documentation needs for patients and provide letters when appropriate.',
    },
    5: {
      level: 5,
      summary: 'Transgender legal issues encompass constitutional and statutory protections, identity documentation, employment and civil rights law, healthcare access, and emerging youth care restrictions, requiring current knowledge and advocacy.',
      explanation: `Expert understanding of transgender legal issues integrates constitutional law, statutory protections, and evolving policy.

**Constitutional Framework:**

*Equal Protection:*
- Heightened scrutiny for sex: Applies to gender identity (some courts)
- Rational basis: Other courts
- Circuit split not fully resolved
- Future Supreme Court action possible

*Due Process:*
- Privacy rights
- Bodily autonomy arguments
- Parental rights (youth care debates)

**Federal Statutory Protections:**

*Title VII (Employment):*
- Bostock v. Clayton County (2020): Sex discrimination includes gender identity/orientation
- Applies to employers with 15+ employees
- BFOQ exceptions narrow
- Religious employer issues ongoing

*Title IX (Education):*
- Federal interpretation includes gender identity
- Athletics participation ongoing debate
- Bathroom/locker room access contested
- State laws in conflict

*Section 1557 (Healthcare):*
- Affordable Care Act provision
- Sex discrimination includes gender identity (current interpretation)
- Provider objection issues
- Enforcement activity

**Identity Documentation:**

*Federal:*
- Passport: Self-attestation, X marker (2022)
- Social Security: Process updated
- Immigration: Evolving guidance

*State Variation:*
- Birth certificates: Range from self-attestation to unchangeable
- Driver's licenses: Most states have process
- Non-binary markers: Growing availability

**Emerging Issues:**

*Youth Care Restrictions:*
- Multiple states restricting gender-affirming care for minors
- Constitutional challenges ongoing
- Provider liability laws
- Parental rights framing

*Bathroom Bills:*
- Some states restrict bathroom access
- Education and public facility policies
- Litigation ongoing

*Sports Participation:*
- State and athletic association policies
- Federal Title IX interpretation
- NCAA and professional league policies

**Advocacy and Resources:**

*Organizations:*
- Transgender Law Center
- Lambda Legal
- National Center for Transgender Equality
- ACLU LGBT Project
- GLAD

*Clinical Advocacy:*
- Medical letters for documentation
- Expert testimony
- Amicus briefs
- Policy engagement`,
      keyTerms: [
        { term: 'heightened scrutiny', definition: 'More rigorous judicial review for certain classifications' },
        { term: 'BFOQ', definition: 'Bona fide occupational qualification; limited exception to discrimination law' },
        { term: 'amicus brief', definition: 'Legal filing by non-party providing expertise to court' },
        { term: 'circuit split', definition: 'Different federal appeals courts reaching different conclusions' },
      ],
      clinicalNotes: `**Legal Awareness Pearls:**
- Bostock protects employment but litigation continues
- Documentation processes easing in many states
- Youth care restrictions spreading - know your state
- Be prepared to provide medical letters
- Refer to legal advocacy organizations
- Healthcare rights under Section 1557 depend on administration
- Stay current - landscape changes rapidly
- Know local resources for patients`,
    },
  },

  media: [],
  citations: [
    {
      id: 'ncte-resources',
      type: 'website',
      title: 'ID Documents Center',
      source: 'National Center for Transgender Equality',
      url: 'https://transequality.org/documents',
      license: 'Public resource',
    },
  ],
  crossReferences: [
    { targetId: 'topic-patient-rights', targetType: 'topic', relationship: 'related', label: 'Patient Rights' },
  ],
  tags: {
    topics: ['legal', 'rights', 'documentation', 'transgender health'],
    keywords: ['legal rights', 'name change', 'gender marker', 'discrimination'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default legalConsiderationsContent;
