/**
 * Patient Rights in Plain Language - Comprehensive Educational Content
 *
 * Covers patient rights including informed consent, privacy (HIPAA),
 * access to medical records, non-discrimination, right to an interpreter,
 * emergency care rights, complaint procedures, and ADA protections.
 */

import { EducationalContent } from '../types';

export const patientRightsSimpleContent: EducationalContent = {
  id: 'topic-patient-rights-simple',
  type: 'topic',
  name: 'Patient Rights',
  nameEs: 'Derechos del Paciente',
  alternateNames: ['Patient Bill of Rights', 'Your Rights as a Patient', 'Healthcare Rights', 'Patient Protections'],

  levels: {
    1: {
      level: 1,
      summary: 'As a patient, you have important rights when you receive healthcare. You have the right to understand your care, keep your health information private, be treated with respect, and get emergency care regardless of your ability to pay.',
      explanation: `When you go to the doctor or hospital, you have rights. These rights protect you and help make sure you get good care. No one can take these rights away from you.

**Your Right to Understand Your Care (Informed Consent):**

Before a doctor does a test, surgery, or treatment, they MUST:
- Explain what they want to do and why
- Tell you about the risks and side effects
- Tell you about other options (including doing nothing)
- Answer your questions in a way you understand
- Get your permission before they begin

**You can say NO to any treatment.** Even if the doctor recommends it, the final decision is yours.

**Your Right to Privacy (HIPAA):**

Your health information is private. This means:
- Doctors, nurses, and hospitals cannot share your health information without your permission
- Your medical records are confidential
- The hospital must keep your information safe
- You choose who can see your records
- Your employer cannot see your health records without your OK

**Your Right to an Interpreter:**

If English is not your main language:
- Hospitals and doctors must provide a free interpreter
- You can request an interpreter in your language
- They cannot use your children as interpreters for medical information
- Written materials should be available in your language
- This is the law, not a favor - you don't need to feel bad about asking

**Your Right to Emergency Care (EMTALA):**

- Any hospital with an emergency room MUST treat you in an emergency
- They MUST treat you regardless of:
  - Whether you have insurance
  - Whether you can pay
  - Your immigration status
  - Your race, religion, or nationality
- They must stabilize your condition before they can transfer or release you
- You CANNOT be turned away from an emergency room

**Your Right to See Your Medical Records:**

- You can request copies of your medical records
- You can see your test results
- You can ask for corrections if something is wrong
- Many doctors now use patient portals (websites) where you can see your records online
- They must give you records within 30 days of your request

**Your Right to Be Treated with Respect:**

- You must be treated equally regardless of your race, color, religion, sex, age, disability, or national origin
- You have the right to be treated with dignity
- Staff should listen to your concerns
- You can refuse to be examined by a specific person
- You can have a support person with you

**Your Right to Complain:**

If something goes wrong or you feel your rights were violated:
- Talk to the patient advocate or patient representative at the hospital
- File a complaint with the hospital
- Contact your state health department
- File a complaint with the U.S. Department of Health and Human Services
- Contact the Joint Commission (the organization that inspects hospitals)

**ADA Protections (Disability Rights):**

If you have a disability:
- Healthcare facilities must be accessible (ramps, elevators, accessible exam rooms)
- Doctors must provide reasonable accommodations
- You have the right to communication aids (sign language interpreters, large print)
- You cannot be denied care because of a disability
- Service animals must be allowed

**Remember:**
Knowing your rights helps you be a better advocate for yourself. Don't be afraid to speak up or ask questions about your care.`,
      keyTerms: [
        { term: 'informed consent', definition: 'Your right to understand what a doctor wants to do and to agree to it before they begin any treatment, test, or procedure' },
        { term: 'HIPAA', definition: 'A law that protects your health information and keeps it private - doctors and hospitals cannot share your information without your permission' },
        { term: 'EMTALA', definition: 'A law that says emergency rooms must treat anyone with a medical emergency, regardless of whether they can pay or have insurance' },
        { term: 'patient advocate', definition: 'A person at the hospital whose job is to help you if you have concerns, complaints, or need help understanding your rights' },
        { term: 'interpreter', definition: 'A person who translates what the doctor says into your language so you can understand your care' },
        { term: 'ADA', definition: 'Americans with Disabilities Act - a law that requires healthcare facilities to be accessible and provide accommodations for people with disabilities' },
      ],
      analogies: [
        'Informed consent is like reading the terms before you sign a contract - the doctor needs to explain everything so you can make a good decision about YOUR body.',
        'HIPAA is like a lock on your diary - your health information belongs to you, and nobody can peek at it without your permission.',
      ],
      examples: [
        'A doctor wants to do surgery on your knee. Before the surgery, they must explain what will happen, what the risks are, and what other options you have. You can ask questions and decide whether to go ahead.',
        'You speak Spanish and need to see a doctor. The hospital must provide a Spanish interpreter for free. They cannot ask your 10-year-old child to translate.',
        'You go to the emergency room with severe chest pain but have no insurance. The hospital MUST treat you and stabilize your condition before discussing payment.',
      ],
      patientCounselingPoints: [
        'Always ask questions if you don\'t understand something about your care - it\'s your right and the doctor\'s responsibility to explain',
        'You can request a free interpreter at any hospital or doctor\'s office - don\'t use family members, especially children, for medical interpreting',
        'If you have a medical emergency, go to the emergency room - they must treat you regardless of insurance or ability to pay',
        'You have the right to request and receive copies of your medical records',
        'If you feel your rights have been violated, ask to speak with a patient advocate or file a formal complaint',
        'You can say NO to any treatment, even if a doctor recommends it',
      ],
    },
    2: {
      level: 2,
      summary: 'Patient rights encompass legal protections for privacy, informed consent, non-discrimination, emergency care access, and language services. Understanding these rights under HIPAA, EMTALA, Title VI, and the ADA empowers patients to advocate for themselves and access quality healthcare.',
      explanation: `## Understanding Your Patient Rights

### Informed Consent

**What It Requires:**
Informed consent is both an ethical obligation and legal requirement. Before any treatment, procedure, or test, healthcare providers must:

1. **Explain the diagnosis** or reason for the proposed treatment
2. **Describe the proposed treatment** in understandable terms
3. **Discuss risks and benefits** of the proposed treatment
4. **Explain alternatives** including the option of no treatment
5. **Allow questions** and provide clear answers
6. **Obtain voluntary agreement** without coercion

**Types of Consent:**
- **Express consent**: Written or verbal agreement for specific procedures
- **Implied consent**: Actions suggesting agreement (e.g., rolling up sleeve for blood draw)
- **Informed refusal**: Patient's right to decline treatment after understanding risks

**Special Situations:**
- **Emergency exception**: Consent implied when patient cannot communicate and delay would be life-threatening
- **Minors**: Parent/guardian consent generally required (exceptions for emancipated minors, emergencies, certain sensitive services)
- **Incapacitated patients**: Healthcare proxy or power of attorney makes decisions
- **Advance directives**: Documents expressing wishes about future care if unable to communicate

### HIPAA - Privacy and Security

**HIPAA Privacy Rule:**
Protects individually identifiable health information (Protected Health Information - PHI):

**Your Rights Under HIPAA:**
- **Access**: Right to see and get copies of your health records
- **Amendment**: Right to request corrections to your records
- **Accounting of disclosures**: Right to know who has received your health information
- **Restriction requests**: Right to request limits on how your information is used
- **Confidential communications**: Right to request how and where you receive communications
- **Breach notification**: Right to be notified if your information is compromised

**When Providers CAN Share Information Without Your Permission:**
- Treatment: Sharing with other providers involved in your care
- Payment: Sharing with insurance companies for billing
- Healthcare operations: Quality improvement, training
- Public health: Reporting diseases, injuries, vital statistics
- Law enforcement: Under specific legal circumstances
- Court orders and subpoenas

**When Providers CANNOT Share Without Permission:**
- With your employer (without your authorization)
- With family members (unless you agree or it's in your best interest and you can't decide)
- For marketing purposes
- Sale of your health information
- Psychotherapy notes (require separate authorization)

### Emergency Care Rights (EMTALA)

**Emergency Medical Treatment and Labor Act:**
Applies to all hospitals with emergency departments that accept Medicare.

**Hospital Obligations:**
1. **Medical Screening Examination (MSE)**: Must provide appropriate screening to determine if emergency condition exists
2. **Stabilization**: If emergency condition exists, must provide stabilizing treatment
3. **Transfer provisions**: Cannot transfer until stable unless patient requests or benefits outweigh risks
4. **Anti-dumping**: Cannot refuse to treat or transfer based on ability to pay

**What Constitutes an Emergency:**
- Condition that without immediate treatment could:
  - Place health in serious jeopardy
  - Cause serious impairment of bodily function
  - Cause serious dysfunction of any body organ or part
- Active labor (hospitals with obstetric capabilities)

**EMTALA Violations:**
- Refusing to screen patients who present to the ED
- Discharging patients before they are stabilized
- Transferring patients without proper stabilization
- Asking about insurance or payment before screening and stabilization
- Diverting ambulances away from the ED (except in specific circumstances)

### Language Access Rights

**Title VI of the Civil Rights Act:**
Prohibits discrimination based on national origin, which includes language.

**Requirements for Healthcare Providers Receiving Federal Funds:**
- Provide free language assistance services
- Qualified interpreters (not family members, especially children)
- Translated vital documents
- Notice of language rights
- Available for all interactions (not just emergencies)

**Language Services Standards:**
- Interpreters must be qualified (trained in medical terminology)
- Telephonic and video remote interpreting accepted
- In-person interpreters preferred for complex discussions
- Written translation of vital documents
- Bilingual staff may interpret if qualified

### Non-Discrimination Protections

**Section 1557 of the ACA:**
Prohibits discrimination in healthcare on the basis of:
- Race, color, national origin (Title VI)
- Sex, including gender identity and sexual orientation (Title IX)
- Age (Age Discrimination Act)
- Disability (Section 504, ADA)

**Americans with Disabilities Act (ADA):**
Healthcare facilities must provide:
- Physical accessibility (ramps, elevators, accessible exam tables)
- Effective communication (sign language interpreters, Braille, large print)
- Reasonable modifications to policies and practices
- Accessible medical equipment
- Service animal accommodation

### Right to Medical Records

**HIPAA Access Rights:**
- Providers must respond to record requests within 30 days (one 30-day extension allowed)
- Records can be provided in requested format if readily producible
- Electronic records must be available in electronic format
- Reasonable cost-based fees may be charged
- Cannot withhold records for unpaid bills (in most states)
- Patient portals: Immediate access to most results (21st Century Cures Act)

**Information Blocking Rule (21st Century Cures Act):**
- Healthcare providers cannot unreasonably block access to electronic health information
- Patients have right to their data without delay
- Exceptions for privacy, security, and other limited circumstances
- Applies to electronic health information, not paper records

### Filing Complaints

**Internal Hospital Complaints:**
- Patient advocate/patient relations department
- Grievance procedures (hospitals must have formal process)
- Must acknowledge complaints and provide written response

**External Complaint Options:**

| Agency | Type of Complaint | How to File |
|--------|-------------------|-------------|
| State Health Department | Quality of care, safety | State website or phone |
| Office for Civil Rights (HHS) | HIPAA, discrimination | hhs.gov/ocr |
| The Joint Commission | Accredited hospital concerns | jointcommission.org |
| State Medical Board | Physician conduct | State board website |
| State Insurance Commissioner | Insurance coverage disputes | State department of insurance |
| CMS (Medicare) | Medicare-related concerns | medicare.gov |`,
      keyTerms: [
        { term: 'Protected Health Information (PHI)', definition: 'Any individually identifiable health information including medical records, billing information, and any health data that can be linked to a specific person' },
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act - federal law requiring hospitals with emergency departments to screen and stabilize all patients regardless of ability to pay' },
        { term: 'advance directive', definition: 'A legal document that expresses your wishes about medical treatment if you become unable to communicate, including living wills and healthcare power of attorney' },
        { term: 'Section 1557', definition: 'The non-discrimination provision of the ACA prohibiting discrimination based on race, color, national origin, sex, age, or disability in health programs receiving federal funds' },
        { term: 'information blocking', definition: 'Practices that unreasonably prevent or delay access to electronic health information, prohibited by the 21st Century Cures Act' },
        { term: 'medical screening examination', definition: 'The initial evaluation required by EMTALA that a hospital must provide to anyone who presents to the emergency department to determine if an emergency condition exists' },
      ],
      analogies: [
        'EMTALA is like a rule that says a fire department must respond to every fire, regardless of whether the homeowner has paid their property taxes - emergency rooms must treat first and deal with billing later.',
        'Information blocking rules are like making sure your bank can\'t withhold your account statements - your health data belongs to you and providers can\'t unreasonably keep it from you.',
      ],
      patientCounselingPoints: [
        'Informed consent is an ongoing conversation, not just a form to sign - ask questions until you truly understand your options',
        'Under HIPAA, you can request to see who has accessed your health information through an accounting of disclosures',
        'Emergency rooms must screen and stabilize you regardless of insurance or payment ability - never avoid the ER in a true emergency',
        'You have the right to a qualified interpreter, not a family member, for medical conversations - request this in advance when scheduling appointments',
        'If you feel you\'ve been discriminated against, file a complaint with the HHS Office for Civil Rights',
        'Patient portals now give you near-immediate access to most test results and records under the 21st Century Cures Act',
        'Create an advance directive to ensure your healthcare wishes are known if you cannot speak for yourself',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient rights are codified through a framework of federal laws (HIPAA, EMTALA, ADA, Title VI, Section 1557, 21st Century Cures Act) and state regulations that establish protections for privacy, access, non-discrimination, and informed decision-making. Understanding the regulatory underpinnings and enforcement mechanisms enables effective patient advocacy and institutional compliance.',
      explanation: `## Patient Rights: Legal Framework and Implementation

### Informed Consent - Legal Doctrine

**Common Law Foundation:**
- Evolved from battery (unconsented touching) to negligence framework
- Canterbury v. Spence (1972): Established "reasonable patient" standard
- Two standards of disclosure:
  - Professional standard: What a reasonable physician would disclose
  - Patient standard: What a reasonable patient would want to know
- Majority of states use reasonable patient standard

**Elements of Valid Informed Consent:**

| Element | Description | Legal Requirement |
|---------|-------------|-------------------|
| Disclosure | Adequate information about treatment | Risks, benefits, alternatives |
| Comprehension | Patient understands information | Assessed, not assumed |
| Voluntariness | Free from coercion | No pressure or manipulation |
| Competence | Patient has decision-making capacity | Assessed by treating physician |
| Consent | Patient agrees to proceed | Documented (written preferred) |

**Capacity vs. Competence:**
- Capacity: Clinical determination by treating physician
- Competence: Legal determination by court
- Capacity can fluctuate (pain, medication, time of day)
- Four abilities assessed:
  1. Understanding relevant information
  2. Appreciating the situation and consequences
  3. Reasoning about treatment options
  4. Expressing a consistent choice

**Exceptions to Informed Consent:**
- Emergency situations (patient unable to consent, no surrogate available)
- Therapeutic privilege (rare; information would cause serious harm)
- Patient waiver (patient explicitly declines information)
- Public health mandates (quarantine, reporting requirements)

### HIPAA Regulatory Framework

**Privacy Rule (45 CFR Part 160 and Subparts A, E of Part 164):**

**Covered Entities:**
- Healthcare providers who transmit health information electronically
- Health plans (insurers, HMOs, Medicare, Medicaid)
- Healthcare clearinghouses

**Business Associates:**
- Entities performing functions for covered entities involving PHI
- Must sign Business Associate Agreements (BAAs)
- Directly liable for compliance under HITECH Act
- Examples: EHR vendors, billing companies, cloud storage providers

**Minimum Necessary Standard:**
- Covered entities must limit use and disclosure of PHI to the minimum necessary
- Exceptions: Treatment purposes, individual requesting own information
- Implementation: Role-based access controls, policies and procedures

**Security Rule (45 CFR Part 160 and Subparts A, C of Part 164):**
- Administrative safeguards (risk analysis, workforce training)
- Physical safeguards (facility access, workstation security)
- Technical safeguards (access controls, encryption, audit controls)

**Breach Notification Rule:**
- Notification required for unauthorized acquisition, access, use, or disclosure of PHI
- Individual notification: Without unreasonable delay, no later than 60 days
- HHS notification: Annually for breaches <500 individuals; within 60 days for 500+
- Media notification: Required for breaches affecting 500+ in a state
- Risk assessment to determine if breach compromises security or privacy

**HIPAA Enforcement:**
- HHS Office for Civil Rights (OCR) investigates complaints
- Civil monetary penalties:

| Violation Category | Per Violation | Annual Maximum |
|-------------------|--------------|----------------|
| Did not know | $137-$68,928 | $2,067,813 |
| Reasonable cause | $1,379-$68,928 | $2,067,813 |
| Willful neglect (corrected) | $13,785-$68,928 | $2,067,813 |
| Willful neglect (not corrected) | $68,928 | $2,067,813 |

- Criminal penalties: Up to $250,000 and 10 years imprisonment
- State attorneys general can also bring HIPAA enforcement actions

### EMTALA - Detailed Analysis

**Scope and Application:**
- Applies to all Medicare-participating hospitals with emergency departments
- "Comes to the emergency department" includes:
  - Hospital property (parking lot, sidewalk)
  - Hospital-owned ambulances
  - Off-campus emergency departments
- "Dedicated emergency department" broadly defined

**Stabilization Requirements:**
- Treatment to ensure no material deterioration likely during transfer or discharge
- For pregnant women in labor: delivery of infant and placenta
- No specific time limit; based on clinical judgment
- On-call physicians must respond within reasonable time

**Appropriate Transfer:**
- Patient requests transfer (informed consent)
- Physician certifies benefits outweigh risks
- Receiving facility has capacity and agrees
- Transferring hospital provides medical records and stabilizing treatment
- Transfer by qualified personnel with appropriate equipment

**EMTALA Enforcement:**
- CMS investigation (complaint-driven and survey-based)
- Civil monetary penalties: Up to $119,942 per violation (adjusted annually)
- Physician penalties: Up to $119,942 per violation
- Termination from Medicare program
- Private right of action for damages
- Hospital and physician may both be liable

### Language Access - Regulatory Framework

**Title VI Implementation:**

HHS LEP Guidance provides framework:
- Four-factor analysis for determining appropriate language services:
  1. Number or proportion of LEP individuals in service area
  2. Frequency of contact with the program
  3. Nature and importance of the program
  4. Resources available and costs

**Section 1557 Language Requirements:**
- Notice of non-discrimination and availability of language assistance
- Taglines in top 15 languages in the state
- Qualified interpreters for medical encounters
- Translated vital documents for LEP populations meeting threshold
- Accessible communication for individuals with disabilities

**Interpreter Qualification Standards:**
- National standards (NCIHC, CCHI certification)
- Demonstrated proficiency in English and target language
- Knowledge of medical terminology
- Understanding of interpreter ethics and role
- Training in interpreter protocols

### ADA in Healthcare Settings

**Title III (Public Accommodations):**
- Healthcare facilities are public accommodations
- Must be physically accessible
- Must provide auxiliary aids and services for effective communication
- Must make reasonable modifications to policies

**Accessible Medical Equipment:**
- Adjustable-height exam tables
- Accessible scales
- Accessible mammography equipment
- Standards published by the U.S. Access Board

**Effective Communication:**
- Sign language interpreters (ASL)
- Communication boards
- Real-time captioning
- Braille and large print materials
- Assistive listening devices
- VRI (Video Remote Interpreting) acceptable in some situations

**Recent Developments:**
- Section 504 and ADA integration with Section 1557
- Increased focus on diagnostic accessibility
- Web accessibility standards (WCAG) for patient portals
- Telehealth accessibility requirements

### Advance Directives and End-of-Life Rights

**Patient Self-Determination Act (1990):**
- Hospitals must inform patients about advance directive rights
- Must ask about existing advance directives at admission
- Must document in medical record
- Cannot condition treatment on advance directive execution

**Types of Advance Directives:**
- Living will: Specifies treatment preferences
- Healthcare power of attorney/proxy: Designates decision-maker
- POLST/MOLST: Physician orders for life-sustaining treatment (more specific)
- DNR/DNI orders: Specific orders regarding resuscitation

### Complaint and Enforcement Mechanisms

**Medicare Conditions of Participation:**
- Hospitals must inform patients of their rights
- Must have grievance process
- Must investigate and resolve grievances
- CMS can survey for compliance
- Condition-level deficiency can affect Medicare participation

**State Patient Rights Laws:**
- Many states have patient bill of rights statutes
- State-specific consent requirements
- State-specific medical records access laws
- State licensing board enforcement
- State courts for malpractice and rights violations`,
      keyTerms: [
        { term: 'Canterbury v. Spence', definition: 'The landmark 1972 court case establishing the "reasonable patient" standard for informed consent, requiring disclosure of information a reasonable patient would consider material to their decision' },
        { term: 'Business Associate Agreement (BAA)', definition: 'A HIPAA-required contract between a covered entity and any entity that creates, receives, maintains, or transmits protected health information on its behalf' },
        { term: 'minimum necessary standard', definition: 'The HIPAA principle requiring covered entities to limit use and disclosure of PHI to the minimum amount needed to accomplish the intended purpose' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - a medical order form documenting patient preferences for end-of-life care, more specific than a general advance directive' },
        { term: 'Section 1557', definition: 'The ACA\'s non-discrimination provision prohibiting discrimination in health programs receiving federal funds, incorporating protections from Title VI, Title IX, Section 504, and the Age Discrimination Act' },
        { term: 'medical screening examination', definition: 'The EMTALA-required evaluation that an emergency department must provide to any individual who requests examination to determine whether an emergency medical condition exists' },
      ],
      clinicalNotes: 'Patient rights directly shape clinical practice. Clinicians must ensure informed consent is a meaningful process (not merely a signed form), maintain HIPAA compliance in all communications, understand EMTALA obligations for emergency care, arrange qualified interpreters for LEP patients, and provide accessible care for patients with disabilities. Documentation of informed consent discussions, interpreter use, and accommodation requests is essential for both legal compliance and quality care.',
      patientCounselingPoints: [
        'Informed consent is an ongoing conversation - you can withdraw consent at any time, even after initially agreeing to a procedure',
        'HIPAA gives you specific rights including access to records, amendment requests, and accounting of disclosures - exercise these rights proactively',
        'EMTALA protects you in emergencies regardless of insurance or payment ability - the hospital must provide a medical screening examination',
        'Request a qualified medical interpreter rather than relying on bilingual family members for medical discussions',
        'Complete an advance directive and share it with your healthcare providers and designated decision-maker',
        'If you have a disability, healthcare facilities must provide reasonable accommodations - communicate your needs in advance when possible',
      ],
    },
    4: {
      level: 4,
      summary: 'Patient rights derive from a multi-layered regulatory framework encompassing HIPAA, EMTALA, ADA, Title VI, Section 1557, the 21st Century Cures Act, and state laws. Understanding enforcement mechanisms, evolving regulatory interpretations, and the intersection of patient rights with health equity and digital health is essential for healthcare administration and policy.',
      explanation: `## Patient Rights: Advanced Regulatory and Policy Analysis

### HIPAA in the Digital Health Era

**Evolving Privacy Challenges:**
- Health apps and wearables: Most not covered by HIPAA (not covered entities)
- FTC Health Breach Notification Rule fills some gaps
- State consumer privacy laws (California CCPA/CPRA, state health data laws)
- Washington My Health My Data Act: First comprehensive state health data law

**Information Blocking (21st Century Cures Act):**
- Applies to healthcare providers, health IT developers, and health information networks/exchanges
- Eight exceptions:
  1. Preventing harm
  2. Privacy
  3. Security
  4. Infeasibility
  5. Health IT performance
  6. Content and manner
  7. Fees
  8. Licensing

**ONC enforcement:**
- Disincentives for healthcare providers who information block
- Civil monetary penalties for health IT developers
- Investigation and enforcement by HHS-OIG

**Interoperability and Patient Access:**
- FHIR-based APIs required for patient access
- CMS Patient Access API (health plans)
- Provider Digital Contact Information rule
- TEFCA (Trusted Exchange Framework and Common Agreement)

### EMTALA - Advanced Jurisprudence

**Evolving Interpretations:**
- Screening obligation: "Appropriate" means comparable to what facility provides to other patients
- Stabilization: Ongoing debate about scope, especially for psychiatric emergencies
- On-call obligations: Hospitals must maintain on-call lists; physician response requirements
- EMTALA and state law interaction: EMTALA preempts conflicting state law

**EMTALA and Reproductive Healthcare:**
- Post-Dobbs implications:
  - Federal EMTALA obligations vs. state abortion restrictions
  - CMS guidance: EMTALA requires stabilizing treatment including abortion when necessary
  - Legal challenges: States challenging federal interpretation
  - Idaho v. United States (Supreme Court): Temporary resolution, ongoing litigation
  - Clinical uncertainty affecting emergency care decisions

**EMTALA and Psychiatric Emergencies:**
- Boarding: Extended ED stays for psychiatric patients awaiting inpatient beds
- Stabilization challenges for behavioral health emergencies
- Transfer obligations when psychiatric beds unavailable
- IMD exclusion affects availability of inpatient psychiatric beds

### Section 1557 - Evolving Regulatory Landscape

**2024 Final Rule:**
- Restored and expanded protections:
  - Explicit protection for sexual orientation and gender identity
  - Strengthened language access requirements
  - New accessibility requirements for telehealth
  - Section 504 integration (disability protections)
  - Training requirements for covered entities

**Religious Freedom Tensions:**
- Conscience protections vs. non-discrimination
- Church Amendment, Coats-Snowe Amendment, Weldon Amendment
- State RFRA interactions
- Balancing competing legal obligations

**Enforcement:**
- HHS OCR investigation and resolution
- Private right of action under Section 1557
- Compensatory damages available
- No punitive damages under Section 1557
- State analogues may provide additional remedies

### ADA - Healthcare-Specific Issues

**Diagnostic Accessibility:**
- Many facilities lack accessible exam tables, scales, imaging equipment
- U.S. Access Board Medical Diagnostic Equipment Standards (advisory)
- No mandatory federal standards (recommended but not required under current rules)
- Health disparities for people with disabilities linked to inaccessible equipment
- DOJ settlements establishing accessibility requirements

**Telehealth Accessibility:**
- WCAG 2.1 AA standards for telehealth platforms
- Section 508 compliance for federally-funded platforms
- Communication accessibility: Captioning, ASL interpretation, screen reader compatibility
- Cognitive accessibility considerations
- Growing enforcement focus

**Substance Use Disorders and ADA:**
- ADA protects individuals in recovery from substance use disorders
- Current illegal drug use not protected
- Healthcare discrimination based on SUD diagnosis prohibited
- MAT (medication-assisted treatment) patients protected
- DOJ and HHS enforcement actions against discriminatory practices

### Language Access - Policy Analysis

**Effectiveness of Language Services:**
- Evidence base:
  - Professional interpreters improve communication quality and patient safety
  - Ad hoc interpreters associated with medical errors
  - LEP patients with professional interpreters have outcomes comparable to English-proficient patients
  - Cost-effectiveness data supports professional interpretation
- Quality metrics:
  - Interpreter certification (NBCMI, CCHI)
  - Language concordance in provider-patient communication
  - Patient satisfaction with language services
  - Adverse event rates by language service type

**Technology in Language Access:**
- Video Remote Interpreting (VRI): Growing use, quality varies
- Telephonic interpretation: Most widely available
- AI-assisted translation: Emerging but not yet reliable for medical contexts
- Multilingual patient portals and communication tools
- Challenges: Technology access, digital literacy, bandwidth

### Advance Care Planning - Policy Dimensions

**POLST Paradigm:**
- Medical orders vs. advance directives
- Scope: Terminal illness or serious progressive illness
- Portability across settings
- Registry systems in some states
- Consistency with patient wishes
- Cultural considerations in advance care planning

**Shared Decision-Making:**
- Evolution from paternalistic to shared model
- Decision aids for preference-sensitive conditions
- CMS incentives for shared decision-making
- Certification of patient decision aids
- Health literacy considerations

### Emerging Patient Rights Issues

**AI and Clinical Decision-Making:**
- Algorithmic bias in clinical decision support
- Transparency in AI-assisted diagnoses
- Informed consent for AI-assisted care
- Liability for AI-related errors
- Racial bias in algorithms (e.g., pulse oximetry, clinical risk scores)

**Genetic Privacy:**
- GINA (Genetic Information Nondiscrimination Act)
- Protects against genetic discrimination in employment and health insurance
- Does NOT cover life insurance, disability insurance, or long-term care insurance
- State genetic privacy laws vary
- Direct-to-consumer genetic testing data often not HIPAA-protected

**Social Media and Patient Privacy:**
- Provider social media use and patient confidentiality
- Patient-generated social media content
- Online reviews and HIPAA
- Institutional social media policies

**Climate Change and Patient Rights:**
- Right to accurate information about environmental health risks
- Healthcare facility obligations during climate emergencies
- Disproportionate impact on vulnerable populations
- Emerging legal theories connecting climate and health rights`,
      keyTerms: [
        { term: 'information blocking', definition: 'A practice by a healthcare provider, health IT developer, or health information network that unreasonably interferes with the access, exchange, or use of electronic health information, prohibited under the 21st Century Cures Act' },
        { term: 'TEFCA', definition: 'Trusted Exchange Framework and Common Agreement - the national framework for health information exchange enabling secure, interoperable data sharing across health networks' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act - federal law prohibiting genetic discrimination in health insurance and employment but not in life, disability, or long-term care insurance' },
        { term: 'conscience protections', definition: 'Federal laws (Church Amendment, Coats-Snowe, Weldon) protecting healthcare providers and entities from being compelled to participate in services that violate their religious or moral convictions' },
        { term: 'WCAG', definition: 'Web Content Accessibility Guidelines - technical standards for web accessibility that increasingly apply to healthcare platforms, patient portals, and telehealth systems' },
        { term: 'private right of action', definition: 'The legal ability of an individual to file a lawsuit directly against a violating party, available under some patient rights laws (Section 1557) but not others (HIPAA)' },
      ],
      clinicalNotes: `Patient rights create specific obligations for clinicians and health systems:

1. **Informed consent documentation**: Document the informed consent conversation (risks, benefits, alternatives, questions asked) - not just the signature
2. **HIPAA compliance**: Implement minimum necessary standard in all communications; understand breach reporting obligations; ensure secure communication channels
3. **EMTALA obligations**: Be aware that EMTALA applies to all emergency departments regardless of payor status; understand stabilization requirements; recognize EMTALA-EMTALA transfer rules
4. **Language access**: Arrange qualified interpreters proactively; document interpreter use in medical records; avoid ad hoc interpretation which increases medical error risk
5. **Disability accommodations**: Ensure accessible medical equipment; provide communication accommodations; document accommodation requests and provision
6. **Digital health rights**: Understand information blocking prohibitions; facilitate patient access to records; ensure telehealth accessibility
7. **Advance care planning**: Initiate conversations early; ensure documents are accessible in EHR; honor POLST orders across settings

Evolving issues requiring awareness:
- AI transparency and consent requirements
- Post-Dobbs EMTALA implications for reproductive care
- Genetic privacy limitations (GINA doesn't cover all insurance types)
- Increasing enforcement of digital accessibility requirements`,
      patientCounselingPoints: [
        'Informed consent includes the right to ask about alternatives and to refuse recommended treatment without being penalized',
        'HIPAA gives you specific rights to access, amend, and control your health information, but most health apps are NOT covered by HIPAA - be cautious about sharing health data with apps',
        'If you experience discrimination in healthcare based on race, sex, disability, or other protected characteristics, file a complaint with HHS Office for Civil Rights',
        'Complete a POLST form in addition to an advance directive if you have a serious illness, as it provides specific medical orders that are honored across care settings',
        'Under the 21st Century Cures Act, your healthcare providers cannot unreasonably block your access to your electronic health information',
        'Genetic information protections under GINA do not extend to life insurance, disability insurance, or long-term care insurance - be aware of this gap',
      ],
    },
    5: {
      level: 5,
      summary: 'Patient rights exist at the intersection of constitutional law, federal and state regulation, clinical ethics, health equity, and emerging technology. Advanced analysis requires understanding the evolving jurisprudence of informed consent, HIPAA in the digital age, EMTALA in the post-Dobbs landscape, disability rights enforcement, and the emerging rights frameworks for AI-assisted care, genetic privacy, and health data ownership.',
      explanation: `## Patient Rights: Jurisprudence, Ethics, and Emerging Frontiers

### Informed Consent - Evolving Doctrine

**Philosophical Foundations:**
- Autonomy principle (Beauchamp & Childress)
- Respect for persons (Belmont Report)
- Relational autonomy: Recognition that autonomous decisions occur within social context
- Cultural dimensions: Western autonomy model vs. communitarian decision-making
- Shared decision-making as operationalization of informed consent

**Contemporary Challenges:**
- **Genomic medicine**: Consent for incidental/secondary findings
  - ACMG recommendations for reporting actionable variants
  - Patient right to not know vs. duty to disclose
  - Consent models: Opt-in, opt-out, tiered, dynamic
- **AI-assisted diagnosis**: What must be disclosed about algorithmic involvement?
  - No established legal standard yet
  - Emerging proposals: "AI transparency" in informed consent
  - Analogies to disclosure of trainee involvement
- **Biobank and research reuse**: Broad consent vs. specific consent
  - Common Rule revisions (2018)
  - Consent for data sharing in learning health systems
  - Tribal data sovereignty considerations

**Therapeutic Misconception and Clinical Trials:**
- Participants may not distinguish research from treatment
- Enhanced consent processes for clinical trials
- Community engagement in research consent
- Health literacy impact on consent comprehension

### HIPAA and Health Data Governance

**Post-HIPAA Privacy Landscape:**
The HIPAA framework was designed for a pre-digital health era and faces fundamental challenges:

- **Coverage gaps**: Most health apps, wearables, and consumer health platforms are not HIPAA-covered
- **De-identification limitations**: Re-identification risk from aggregated data
  - Expert determination vs. safe harbor methods
  - Research demonstrating re-identification from "de-identified" data
  - Emerging approaches: Differential privacy, synthetic data
- **Data broker ecosystem**: Health-related data bought and sold outside HIPAA
  - Location data revealing healthcare visits
  - Consumer purchasing data inferring health conditions
  - Social media data used for health-related profiling

**State Health Privacy Innovation:**
- Washington My Health My Data Act (2023): Comprehensive health data protection
- California CCPA/CPRA health data provisions
- Connecticut, Colorado, and other state privacy laws
- Reproductive health data protections post-Dobbs
- Geofencing laws around healthcare facilities

**International Comparison:**
- GDPR: Stronger individual rights, health data as special category
- Right to be forgotten: Not available under HIPAA
- Data portability rights: Partially addressed by 21st Century Cures Act
- Consent requirements: GDPR generally stricter than HIPAA

### EMTALA - Contemporary Analysis

**Post-Dobbs EMTALA Crisis:**
- Federal position: EMTALA requires stabilizing treatment including abortion when emergency medical condition threatens life or health
- State position (some states): State law prohibiting abortion supersedes or coexists with EMTALA
- Idaho v. United States (2024): Supreme Court vacated lower court stay, case remanded
- Clinical impact:
  - Uncertainty about when stabilizing treatment can include abortion
  - Reports of delayed care in restrictive states
  - Provider liability concerns (EMTALA fines vs. state criminal penalties)
  - Patient transfer across state lines for stabilization
  - Chilling effect on emergency obstetric and gynecologic care

**EMTALA and Healthcare Deserts:**
- Hospital closures, particularly in rural areas
- Reduced emergency department capacity
- Impact on EMTALA-obligated screening and stabilization
- Implications for access to emergency care
- Interaction with Certificate of Need laws

**Psychiatric Emergency Limitations:**
- Boarding: ED psychiatric holds averaging 24+ hours in many areas
- Stabilization ambiguity for psychiatric emergencies
- IMD exclusion reducing inpatient psychiatric capacity
- 988 Suicide and Crisis Lifeline as complementary system
- Involuntary treatment: EMTALA vs. state civil commitment laws

### Disability Rights in Healthcare - Advanced

**Health Disparities and Disability:**
- People with disabilities have worse health outcomes across most metrics
- Provider implicit bias documented in research
- Diagnostic overshadowing: Symptoms attributed to disability rather than investigated
- Inaccessible preventive care contributing to late-stage diagnoses
- Mortality disparities during COVID-19

**Intersectionality:**
- Disability intersects with race, gender, socioeconomic status
- Compounded discrimination in healthcare settings
- Research gaps: Limited health outcomes data stratified by disability status
- Emerging consensus: Disability as health equity domain

**Accessibility Enforcement:**
- DOJ Title III enforcement actions against healthcare providers
- Structured settlements establishing accessibility standards
- OCR disability rights enforcement under Section 504 and Section 1557
- Lack of enforceable medical equipment standards (guidance only)
- Private litigation under ADA Title III

### Language Access as Health Equity

**Evidence on Language-Concordant Care:**
- Systematic reviews: Professional interpretation reduces adverse events
- Flores et al. (2003, 2012): Ad hoc interpreters associated with more errors of clinical consequence
- Diamond et al. (2019): Spanish-speaking patients with professional interpreters have similar outcomes to English-speaking patients
- Karliner et al. (2012): Limited English proficiency associated with longer hospital stays and higher readmission rates

**Structural Challenges:**
- Interpreter availability: Critical shortage in many languages
- Payment: No dedicated federal funding for interpretation services
- Medicaid: Some states reimburse interpretation costs; others do not
- Medicare: Does not directly reimburse for interpreter services
- Economic analysis: Interpretation costs offset by reduced adverse events and readmissions

### Emerging Rights Frameworks

**AI Rights in Healthcare:**
- Right to know when AI is involved in clinical decisions
- Right to human review of AI-generated recommendations
- Right to contest AI-assisted decisions
- Transparency regarding algorithmic design and training data
- EU AI Act classification of healthcare AI as "high-risk"
- FDA regulation of AI/ML medical devices
- Algorithmic fairness: Documented racial bias in clinical algorithms (Obermeyer et al., 2019)

**Health Data Ownership:**
- Fundamental question: Who owns health data?
  - HIPAA provides access rights but not ownership
  - Some states recognize patient data ownership
  - Institutional vs. individual claims to data
  - Community data sovereignty (indigenous populations)
- Emerging models:
  - Data cooperatives
  - Personal health data vaults
  - Blockchain-based consent management
  - Data trusts

**Climate and Environmental Health Rights:**
- Right to clean air and water as health right
- Healthcare facility environmental responsibilities
- Climate-related displacement and access to care
- Environmental justice communities and health disparities
- Constitutional environmental rights (state-level)

**Reproductive Health Rights Post-Dobbs:**
- Variable state protections
- HIPAA limitations on reproductive health data protection
- State laws restricting out-of-state care access
- Emergency care rights (EMTALA) in tension with state restrictions
- Conscience clause expansion

### Patient Rights and Health Equity

**Structural Analysis:**
- Patient rights framework assumes individual agency and system responsiveness
- Structural barriers (racism, poverty, language, disability) limit effective exercise of rights
- Health literacy as prerequisite for informed consent and rights navigation
- Power asymmetry between patients and healthcare institutions
- Patient rights enforcement requires awareness, resources, and access to remedies

**Equity-Centered Rights Framework:**
- Beyond individual rights to structural accountability
- Community health rights as complement to individual rights
- Anti-discrimination enforcement as health equity tool
- Data transparency for health equity monitoring
- Participatory governance in healthcare institutions`,
      keyTerms: [
        { term: 'diagnostic overshadowing', definition: 'A phenomenon where symptoms are attributed to an existing disability rather than investigated for other medical causes, contributing to delayed diagnosis and health disparities for people with disabilities' },
        { term: 'relational autonomy', definition: 'An ethical framework recognizing that patient autonomy operates within social, cultural, and relational contexts, moving beyond purely individualistic conceptions of informed consent' },
        { term: 'data sovereignty', definition: 'The concept that individuals and communities have the right to control and govern the collection, ownership, and application of their health data, including indigenous data sovereignty' },
        { term: 'therapeutic misconception', definition: 'The failure of research participants to distinguish between the purposes of research and clinical care, leading to unrealistic expectations about personal benefit from research participation' },
        { term: 'algorithmic fairness', definition: 'The principle that AI and algorithmic systems used in healthcare should produce equitable outcomes across demographic groups, free from racial, gender, or socioeconomic bias' },
        { term: 'geofencing laws', definition: 'State laws prohibiting the collection of location data near healthcare facilities, enacted to protect patient privacy, particularly regarding reproductive healthcare in the post-Dobbs landscape' },
      ],
      clinicalNotes: `Expert-level integration of patient rights into clinical practice and system design:

1. **Informed consent as process**: Move beyond document-centered consent to ongoing dialogue; use decision aids; assess comprehension; accommodate cultural perspectives on decision-making; document conversations, not just signatures
2. **Digital health rights**: Understand information blocking prohibitions; facilitate patient access to data through portals and APIs; address digital literacy barriers; recognize that most consumer health apps are not HIPAA-covered
3. **EMTALA in post-Dobbs context**: Navigate tension between federal emergency care obligations and state reproductive health restrictions; document medical necessity thoroughly; understand institutional policies and state-specific legal landscape
4. **Health equity integration**: Recognize that patient rights frameworks must address structural barriers; advocate for accessible care, language services, and anti-discrimination enforcement; screen for barriers to rights exercise
5. **AI governance**: As AI tools become integral to clinical practice, advocate for transparency, human oversight, algorithmic fairness, and meaningful consent processes for AI-assisted care
6. **Advance care planning**: Approach as health equity issue; ensure culturally competent conversations; address disparities in advance directive completion rates; integrate with palliative care
7. **Research ethics**: Navigate evolving consent frameworks for genomic medicine, biobanking, and learning health systems; ensure equity in research participant protections

Leadership responsibilities:
- Institutional policies should exceed minimum legal requirements
- Invest in language access infrastructure as patient safety intervention
- Implement medical equipment accessibility standards proactively
- Train workforce on disability competency and anti-bias practices
- Monitor and address algorithmic bias in clinical decision support
- Participate in policy advocacy for patient rights strengthening`,
    },
  },

  media: [],

  citations: [
    {
      id: 'hhs-patient-rights',
      type: 'website',
      title: 'Your Rights Under HIPAA',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html',
    },
    {
      id: 'cms-emtala',
      type: 'website',
      title: 'Emergency Medical Treatment & Labor Act (EMTALA)',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/medicare/regulations-guidance/legislation/emergency-medical-treatment-labor-act',
    },
    {
      id: 'ada-healthcare',
      type: 'website',
      title: 'Access to Medical Care for Individuals with Mobility Disabilities',
      source: 'U.S. Department of Justice, Civil Rights Division',
      url: 'https://www.ada.gov/resources/medical-care-mobility/',
    },
  ],

  crossReferences: [
    { targetId: 'topic-insurance-basics', targetType: 'topic', relationship: 'related', label: 'Health Insurance Basics' },
    { targetId: 'topic-healthcare-system-basics', targetType: 'topic', relationship: 'related', label: 'Healthcare System Basics' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['patient rights', 'HIPAA', 'informed consent', 'EMTALA', 'ADA', 'non-discrimination'],
    keywords: ['informed consent', 'privacy', 'medical records', 'interpreter', 'emergency care', 'disability rights', 'advance directive', 'complaint'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default patientRightsSimpleContent;
