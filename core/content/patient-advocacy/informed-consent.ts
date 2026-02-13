/**
 * Informed Consent Principles - Comprehensive Educational Content
 *
 * Covers the ethical and legal principles of informed consent in healthcare,
 * including elements, exceptions, capacity assessment, and documentation.
 */

import { EducationalContent } from '../types';

export const informedConsent: EducationalContent = {
  id: 'concept-informed-consent',
  type: 'concept',
  name: 'Informed Consent',
  alternateNames: ['Consent to Treatment', 'Medical Consent', 'Consent Process'],

  levels: {
    1: {
      level: 1,
      summary: 'Before doctors do something to help you, they must explain what they want to do and ask if it\'s okay with you.',
      explanation: `When a doctor wants to help you get better, they need to tell you what they plan to do and make sure you agree. This is called "informed consent" - it means you understand and say "yes."

**What Doctors Should Tell You:**

1. **What's the problem?** The doctor explains what they think is making you sick or hurt.

2. **What do they want to do?** They tell you about the treatment, medicine, or test they think will help.

3. **Why will it help?** They explain how the treatment is supposed to make you feel better.

4. **Could anything bad happen?** They tell you if the treatment might cause any problems (like a shot might hurt a little).

5. **Are there other choices?** They let you know if there are different ways to treat the problem.

**You Can:**
- Ask questions until you understand
- Say no if you don't want the treatment
- Take time to think about it
- Have a parent or trusted adult help you decide

**When Doctors Don't Need to Ask First:**
If you're very hurt and doctors need to help you right away to save your life, they can help even if they can't ask you first. This is called an emergency.

Think of informed consent like asking before borrowing someone's toy - it's polite and respectful to ask and explain what you want to do before you do it!`,
      keyTerms: [
        { term: 'informed', definition: 'Having the information you need to understand something' },
        { term: 'consent', definition: 'Giving permission or saying it\'s okay to do something' },
        { term: 'treatment', definition: 'Something doctors do to help make you better, like medicine or surgery' },
        { term: 'emergency', definition: 'A serious situation where you need help right away' },
        { term: 'decision', definition: 'A choice you make after thinking about your options' },
      ],
      analogies: [
        'Getting informed consent is like a teacher explaining a project before asking the class if they want to do it.',
        'It\'s like when someone asks to borrow your bicycle - they tell you where they\'ll go and promise to be careful before you say yes.',
      ],
      examples: [
        'Before getting stitches, the doctor explains that they will numb the area so it doesn\'t hurt, use special thread to close the cut, and that you\'ll have a small scar.',
        'Before a blood test, the nurse explains they\'ll use a tiny needle, it might pinch for a second, and why they need to check your blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Informed consent is the process where healthcare providers explain treatments or procedures, including risks and alternatives, and patients voluntarily agree to proceed with understanding.',
      explanation: `Informed consent is both an ethical obligation and a legal requirement in healthcare. It ensures that patients actively participate in their medical decisions rather than just having things done to them.

## The Five Elements of Informed Consent

**1. Disclosure**
The healthcare provider must share:
- Diagnosis or medical condition
- Nature of the proposed treatment/procedure
- Expected benefits
- Material risks (what could go wrong)
- Alternative treatments available
- Consequences of refusing treatment

**2. Understanding**
- Information must be presented in understandable language
- Medical jargon should be explained
- Visual aids or written materials may help
- Patients should be encouraged to ask questions

**3. Voluntariness**
- Decision must be made freely without pressure
- No threats or manipulation
- Patient should have adequate time to decide
- Undue influence from family or providers must be avoided

**4. Capacity**
- Patient must be able to understand the information
- Must appreciate how it applies to their situation
- Must be able to reason and weigh options
- Must be able to communicate a decision

**5. Authorization**
- Patient explicitly agrees to the treatment
- Usually documented with a signature
- Verbal consent may be appropriate for minor procedures

## Exceptions to Informed Consent

1. **Emergencies**: Life-threatening situations where delay could cause death or serious harm
2. **Incapacity**: Patient cannot make decisions; surrogate decides
3. **Therapeutic privilege**: Rare cases where information would cause serious harm to patient
4. **Waiver**: Patient voluntarily chooses not to be informed

## Types of Consent

| Type | Description | Examples |
|------|-------------|----------|
| Express written | Signed document | Surgery, invasive procedures |
| Express verbal | Spoken agreement | Physical examination, injections |
| Implied | Actions indicate agreement | Extending arm for blood draw |

## Important Points

- Consent is an ongoing process, not just a form
- Patients can withdraw consent at any time
- Consent for one procedure doesn't cover others
- Signature alone doesn't prove valid consent`,
      keyTerms: [
        { term: 'disclosure', definition: 'Sharing all necessary information about a treatment or procedure' },
        { term: 'capacity', definition: 'The ability to understand information and make rational decisions about medical care' },
        { term: 'material risk', definition: 'A risk that a reasonable person would want to know about before making a decision' },
        { term: 'therapeutic privilege', definition: 'Rare exception allowing doctors to withhold information if it would seriously harm the patient' },
        { term: 'surrogate', definition: 'A person who makes medical decisions for someone who cannot decide for themselves' },
      ],
      analogies: [
        'Informed consent is like agreeing to terms and conditions - except healthcare providers are required to explain everything in plain language.',
        'Getting consent is like having a conversation before a team project: everyone should understand the plan and agree to their role.',
      ],
    },
    3: {
      level: 3,
      summary: 'Informed consent is a legally mandated and ethically grounded process ensuring patient autonomy through adequate disclosure, verified comprehension, voluntary decision-making, demonstrated capacity, and documented authorization.',
      explanation: `## Legal and Ethical Foundations

### Legal Standards
Two standards exist for what must be disclosed:

1. **Professional Standard (Minority)**: What a reasonable physician would disclose
2. **Reasonable Patient Standard (Majority)**: What a reasonable patient would want to know

Most jurisdictions use the reasonable patient standard, requiring disclosure of information material to the patient's decision.

### Ethical Basis
Informed consent operationalizes the principle of **respect for autonomy** - the recognition that competent individuals have the right to self-determination regarding their bodies and healthcare.

## Elements in Detail

### Disclosure Requirements

**Mandatory Elements:**
- Diagnosis/nature of condition
- Nature and purpose of proposed intervention
- Material risks and their probability
- Expected benefits
- Alternative treatments (including no treatment)
- Prognosis with and without treatment

**Risk Disclosure Considerations:**
- Severity vs. probability (disclose severe risks even if rare)
- Common risks should be disclosed regardless of severity
- Patient-specific risks (e.g., musician considering hand surgery)

### Capacity Assessment

**Four Abilities (Appelbaum & Grisso):**
1. **Understanding**: Comprehend disclosed information
2. **Appreciation**: Apply information to one's own situation
3. **Reasoning**: Manipulate information rationally
4. **Expression**: Communicate a consistent choice

**Key Principles:**
- Capacity is decision-specific (may have capacity for some decisions but not others)
- Capacity can fluctuate (reassess if status changes)
- Disagreement with recommendation ≠ incapacity
- Capacity is a clinical determination; competence is legal

### Special Consent Situations

**Minors:**
- Generally, parents/guardians provide consent
- Exceptions vary by state:
  - Emancipated minors
  - Mature minor doctrine
  - Specific services (STI, contraception, substance abuse, mental health)
- Minor's assent should be sought when developmentally appropriate

**Research:**
- Additional requirements under Common Rule (45 CFR 46)
- IRB approval required
- May require written consent documenting specific elements
- Special protections for vulnerable populations

**Psychiatric Patients:**
- Same consent standards apply when patient has capacity
- Involuntary medication may require court order
- Emergency exception applies for immediate danger

## Documentation

**Elements to Document:**
- Discussion occurred (date, time, participants)
- Information provided
- Questions asked and answered
- Patient's understanding verified
- Voluntary authorization given
- Form signed and witnessed

**Verification of Understanding:**
- Teach-back method: Have patient explain in their own words
- Ask open-ended questions
- Avoid simple yes/no confirmation`,
      keyTerms: [
        { term: 'reasonable patient standard', definition: 'Legal standard requiring disclosure of information a reasonable person in the patient\'s position would find material to the decision' },
        { term: 'professional standard', definition: 'Legal standard requiring disclosure of what a reasonable physician would disclose in similar circumstances' },
        { term: 'capacity', definition: 'Clinical determination of ability to make a specific healthcare decision; distinct from legal competence' },
        { term: 'competence', definition: 'Legal status determined by courts; incapacitated patients need legally authorized surrogates' },
        { term: 'assent', definition: 'Agreement by someone (often a minor) who cannot legally consent but should participate in decision-making' },
        { term: 'teach-back method', definition: 'Verification technique where patient explains information in their own words to confirm understanding' },
      ],
      clinicalNotes: 'Always document the consent conversation, not just the signature. For patients with marginal capacity, consider maximizing capacity (timing, environment, support persons). Involving the patient in decisions even when surrogate consent is needed respects dignity and may improve outcomes.',
    },
    4: {
      level: 4,
      summary: 'Informed consent represents a dynamic, relational process navigating tensions between autonomy and beneficence, requiring sophisticated assessment of decision-making capacity, culturally responsive communication, and rigorous documentation to meet evolving legal standards.',
      explanation: `## Legal Evolution and Variability

### Landmark Cases
| Case | Year | Significance |
|------|------|--------------|
| Schloendorff v. Society of NY Hospital | 1914 | Established bodily self-determination right |
| Salgo v. Leland Stanford | 1957 | Coined "informed consent" term |
| Natanson v. Kline | 1960 | Professional disclosure standard |
| Canterbury v. Spence | 1972 | Reasonable patient standard |
| Cobbs v. Grant | 1972 | Material risk disclosure |
| Truman v. Thomas | 1980 | Duty to disclose risks of refusing |

### Current Legal Framework
- **State variation**: Standards and specific requirements differ by jurisdiction
- **Statute of limitations**: Usually 1-3 years from discovery of injury
- **Burden of proof**: Generally on plaintiff to prove inadequate consent
- **Causation requirement**: Must prove reasonable person would have refused with adequate disclosure

## Capacity Assessment Protocols

### Standardized Tools
- **MacArthur Competence Assessment Tool (MacCAT)**: Research-validated structured interview
- **Aid to Capacity Evaluation (ACE)**: Practical clinical tool
- **University of California, San Diego Brief Assessment of Capacity to Consent (UBACC)**

### Clinical Assessment Approach

**Step 1: Optimize Conditions**
- Treat reversible factors (pain, medications, metabolic disturbances)
- Choose optimal timing (lucid intervals)
- Ensure sensory aids available
- Reduce anxiety, provide support person

**Step 2: Structured Interview**
1. Present information at appropriate level
2. Ask patient to paraphrase (understanding)
3. Explore how information applies to them (appreciation)
4. Discuss how they weighed pros and cons (reasoning)
5. Elicit stable, consistent choice (expression)

**Step 3: Calibrate Threshold**
- Higher-stakes decisions warrant more rigorous assessment
- Disagreement with recommendation requires more documentation
- Risk-benefit ratio influences threshold

## Shared Decision-Making Model

Modern informed consent has evolved toward **shared decision-making**:

| Traditional Consent | Shared Decision-Making |
|--------------------|------------------------|
| One-time event | Ongoing dialogue |
| Provider-driven | Collaborative |
| Information transfer | Deliberation |
| Procedure-focused | Values-focused |

**Key Elements:**
- Elicit patient preferences and values
- Present options with evidence
- Facilitate deliberation
- Ensure decision aligns with patient values
- Decision support tools may help

## Special Contexts

### Cultural Considerations
- **Family-centered decision-making**: Some cultures prefer family involvement
- **Truth-telling preferences**: Vary by culture; some prefer indirect disclosure
- **Interpreter requirements**: Professional interpretation for LEP patients
- **Religious considerations**: Jehovah's Witnesses (blood), Christian Scientists, etc.

### Decisionally Impaired Adults
1. **Advance directives**: Honored if applicable
2. **Designated proxy**: Healthcare agent decides
3. **Court-appointed guardian**: For healthcare decisions
4. **Statutory surrogate**: Family hierarchy per state law
5. **Decision standards**: Substituted judgment > best interest

### Emergency Exception
**Requirements:**
- Immediate treatment necessary
- Delay would cause death or serious harm
- Patient cannot consent
- No advance directive refusing treatment
- Surrogate not available (or time doesn't permit)

**Documentation must establish:**
- Nature of emergency
- Efforts to obtain consent
- Why delay was not possible
- Treatment provided was limited to emergency`,
      keyTerms: [
        { term: 'MacCAT', definition: 'MacArthur Competence Assessment Tool - validated structured interview for assessing decision-making capacity' },
        { term: 'shared decision-making', definition: 'Collaborative model where clinicians and patients work together, integrating clinical evidence with patient values' },
        { term: 'substituted judgment', definition: 'Decision-making standard where surrogate decides based on what the patient would have wanted if able' },
        { term: 'sliding scale capacity', definition: 'Concept that capacity threshold varies based on the risk/benefit ratio of the proposed intervention' },
        { term: 'Canterbury standard', definition: 'Requirement to disclose risks that a reasonable patient would find material to the decision' },
        { term: 'LEP', definition: 'Limited English Proficiency - patients requiring language assistance services' },
      ],
      clinicalNotes: 'Never equate capacity with agreement. Document both the patient\'s specific statements demonstrating capacity and the clinical reasoning supporting capacity determination. For high-stakes decisions by patients refusing recommended treatment, consider ethics consultation and thorough documentation. Cultural humility includes recognizing when family involvement differs from Western autonomy models.',
    },
    5: {
      level: 5,
      summary: 'Informed consent practice requires integration of legal doctrine, clinical ethics, health communication science, and systems thinking to address complex scenarios including research protocols, innovative therapies, decisionally impaired populations, and evolving technological contexts.',
      explanation: `## Contemporary Challenges

### Consent in Research Contexts

**Common Rule Requirements (45 CFR 46):**
- Basic elements (8 items)
- Additional elements when appropriate (6 items)
- Documentation requirements
- Waivers and alterations (criteria)

**Post-2018 Revised Common Rule Changes:**
- Concise summary requirement at beginning of long consent forms
- Broad consent for future research use
- Single IRB mandate for multi-site studies
- Continuing review elimination for minimal risk
- New exemption categories

**Consent Challenges:**
- Therapeutic misconception (confusing research with treatment)
- Voluntariness in desperate illness
- First-in-human trials
- Placebo-controlled design ethical acceptability

### Innovative/Non-Standard Therapies
- Right to Try Act (2018): Expanded access outside clinical trials
- Compassionate use protocols
- Off-label use disclosure obligations
- Distinction from research consent requirements

### Artificial Intelligence and Clinical Decision Support
- Emerging obligation to disclose AI involvement?
- Algorithmic transparency issues
- Consent for data use in algorithm training
- Liability allocation when AI contributes to decisions

### Genomic Medicine
- Return of incidental/secondary findings
- Family implications of genetic testing
- Re-contact obligations as knowledge evolves
- Consent for genetic database inclusion

## Medico-Legal Risk Management

### Elements of Negligent Informed Consent Claim
1. Duty to obtain informed consent existed
2. Duty was breached (inadequate disclosure)
3. Patient would have refused with adequate disclosure
4. Undisclosed risk materialized causing harm
5. Damages resulted

### Defensive Documentation
**Consent Form Elements:**
- Specific procedure(s) and laterality
- Named performing provider
- Material risks (list specific)
- Alternatives discussed
- Questions asked/answered
- Patient's statement of understanding
- Dated signatures (patient, witness)

**Supplementary Documentation:**
- Progress note describing consent discussion
- Duration of discussion
- Questions patient asked
- Assessment of understanding (teach-back results)
- Capacity determination if any concern
- Interpreter use if applicable

### High-Risk Scenarios

**Refusing Recommended Treatment:**
1. Document full disclosure of risks of refusal
2. Assess and document capacity
3. Explore reasons for refusal
4. Attempt to address concerns
5. Offer alternatives
6. Document ongoing availability for care
7. Consider AMA form with specific risks listed

**Consent Under Time Pressure:**
- Document why full discussion wasn't possible
- Focus on most material risks
- Arrange post-procedure discussion
- Document patient's opportunity to ask questions

## Systems-Level Implementation

### Consent Process Quality Improvement

**Metrics:**
- Timing of consent (not day-of for elective procedures)
- Patient-reported understanding scores
- Teach-back success rates
- Interpreter utilization when indicated
- Attending physician involvement in consent

**Interventions:**
- Multimedia consent tools
- Decision aids (IPDAS standards)
- Standardized consent templates
- Consent conversation training
- Dedicated consent clinics for complex procedures

### Health Literacy Integration
- Universal precautions approach (assume low literacy)
- Plain language consent forms (6th-8th grade reading level)
- Visual information supplements
- Chunk and check method
- Adequate time allocation
- Accompanying written information for take-home

### Electronic Consent Innovations
- Tablet-based consent with multimedia
- Remote consent (telehealth considerations)
- Electronic signatures and witnessing
- Consent tracking in EHR
- Patient portal access to signed consents

## Ethical Frontiers

### Precision Consent
- Tailoring information to individual patient needs and preferences
- Some want extensive detail; others prefer focused information
- Preference assessment as part of consent process

### Consent and Social Media/Public Health
- Waiver of consent for public health emergencies?
- Patient consent for case reports/educational use
- Social media mining for research

### Global Health Considerations
- Cross-cultural consent validity
- Community consent concepts
- Resource-limited setting adaptations
- Post-colonial critique of Western consent models`,
      keyTerms: [
        { term: 'Common Rule', definition: 'Federal policy (45 CFR 46) governing human subjects research protection, adopted by multiple federal agencies' },
        { term: 'therapeutic misconception', definition: 'Research participants\' failure to appreciate the difference between research and clinical care' },
        { term: 'IPDAS', definition: 'International Patient Decision Aid Standards - criteria for quality decision support tools' },
        { term: 'universal precautions', definition: 'Health literacy approach treating all patients as potentially having limited literacy without individual assessment' },
        { term: 'Right to Try Act', definition: '2018 federal law allowing terminally ill patients access to investigational therapies outside clinical trials' },
        { term: 'broad consent', definition: 'Consent mechanism allowing agreement to unspecified future research use of biospecimens/data' },
      ],
      clinicalNotes: `Practice optimization:
1. Standardize consent timing (not day-of for elective procedures)
2. Use decision aids for preference-sensitive conditions
3. Implement teach-back verification routinely
4. Document consent conversations in progress notes, not just forms
5. Train residents in consent communication skills
6. Monitor consent quality metrics at departmental level
7. Ensure 24/7 interpreter availability
8. Review and update consent forms regularly for plain language
9. Consider ethics consultation for complex consent scenarios
10. Address therapeutic misconception proactively in research settings`,
    },
  },

  media: [
    {
      id: 'informed-consent-elements',
      type: 'diagram',
      filename: 'informed-consent-elements.svg',
      title: 'Elements of Informed Consent',
      description: 'Visual diagram showing the five essential elements: disclosure, understanding, voluntariness, capacity, and authorization',
    },
    {
      id: 'consent-process-flowchart',
      type: 'diagram',
      filename: 'consent-process-flowchart.svg',
      title: 'Informed Consent Process',
      description: 'Flowchart illustrating the steps in obtaining valid informed consent',
    },
  ],

  citations: [
    {
      id: 'beauchamp-childress',
      type: 'textbook',
      title: 'Principles of Biomedical Ethics',
      authors: ['Beauchamp, T.L.', 'Childress, J.F.'],
      source: 'Oxford University Press',
      chapter: '4',
    },
    {
      id: 'appelbaum-assessment',
      type: 'article',
      title: 'Assessment of Patients\' Competence to Consent to Treatment',
      authors: ['Appelbaum, P.S.', 'Grisso, T.'],
      source: 'New England Journal of Medicine',
      page: '1988;319:1635-1638',
    },
    {
      id: 'ama-informed-consent',
      type: 'website',
      title: 'Informed Consent',
      source: 'American Medical Association Code of Medical Ethics',
      url: 'https://www.ama-assn.org/delivering-care/ethics/informed-consent',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'parent', label: 'Patient Bill of Rights' },
    { targetId: 'concept-healthcare-proxy', targetType: 'concept', relationship: 'related', label: 'Healthcare Proxy' },
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
    { targetId: 'concept-questions-for-doctor', targetType: 'concept', relationship: 'related', label: 'Questions to Ask Your Doctor' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'medical-ethics', 'legal-rights', 'clinical-practice'],
    keywords: ['informed consent', 'patient autonomy', 'capacity', 'medical decision-making', 'disclosure'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default informedConsent;
