import { EducationalContent } from '../../types';

export const informedConsentModelContent: EducationalContent = {
  id: 'topic-informed-consent-model',
  type: 'topic',
  name: 'Informed Consent Model',
  alternateNames: ['IC Model', 'Informed Consent for HRT'],

  levels: {
    1: {
      level: 1,
      summary: 'Informed consent means you get to make decisions about your own healthcare after learning all the important information.',
      explanation: `Informed consent is about making sure you understand your healthcare choices and that you get to decide what's right for you.

**What It Means:**
- Doctors explain what a treatment does
- They tell you about good things and possible risks
- You get to ask questions
- You decide if you want the treatment
- No one forces you

**Why It Matters:**
- You know your own body and life best
- Good healthcare is a partnership
- You have the right to make choices about your body

This is how a lot of healthcare for transgender people works today.`,
      keyTerms: [
        { term: 'informed consent', definition: 'Understanding and agreeing to a treatment after learning about it' },
        { term: 'decision', definition: 'A choice you make after thinking about your options' },
        { term: 'partnership', definition: 'Working together with your doctor' },
      ],
      analogies: [
        'Informed consent is like reading all the information before signing up for something - you know what you\'re agreeing to.',
      ],
      examples: [
        'Before starting hormones, a doctor explains how they work, what changes to expect, and what to watch out for.',
      ],
    },
    2: {
      level: 2,
      summary: 'The informed consent model allows adults to access gender-affirming hormones after demonstrating understanding of effects and risks, without requiring mental health referrals.',
      explanation: `The informed consent model is an approach to gender-affirming care that respects patient autonomy.

**How It Works:**
1. Patient meets with a medical provider
2. Provider explains hormone effects (reversible and permanent)
3. Discussion of risks and benefits
4. Patient demonstrates understanding
5. Consent is documented
6. Treatment begins

**Key Features:**
- No required letters from mental health providers
- Patient self-identifies as transgender
- Based on patient's own knowledge of their identity
- Reduces barriers to care

**Still Included:**
- Medical history and exam
- Lab work as appropriate
- Ongoing monitoring
- Mental health support available (not required)

**Who Uses This Model:**
- Many LGBTQ+ health centers
- Planned Parenthood clinics
- Some primary care practices
- Informed consent clinics

This model is supported by WPATH SOC 8 for adults.`,
      keyTerms: [
        { term: 'patient autonomy', definition: 'The right of patients to make their own healthcare decisions' },
        { term: 'gatekeeping', definition: 'Requiring extra steps that can delay or prevent access to care' },
        { term: 'referral', definition: 'When one doctor sends you to see another doctor' },
        { term: 'documentation', definition: 'Written records of discussions and agreements' },
      ],
    },
    3: {
      level: 3,
      summary: 'The informed consent model applies shared decision-making principles to gender-affirming hormone therapy, emphasizing patient autonomy while ensuring adequate understanding of treatment effects.',
      explanation: `The informed consent model represents a shift from historical gatekeeping approaches to patient-centered care.

**Historical Context:**
- Traditional model: Required psychiatric evaluation, real-life experience, multiple letters
- Informed consent: Emerged from harm reduction and patient rights movements
- Now endorsed by WPATH SOC 8 for adults

**Core Components:**

*Information Provision:*
- Mechanism of hormone action
- Expected physical changes and timeline
- Reversible vs. irreversible effects
- Potential risks and side effects
- Fertility implications
- Psychological effects

*Assessment of Capacity:*
- Patient can understand information
- Patient can appreciate relevance
- Patient can reason about options
- Patient can communicate a choice

*Documentation:*
- Detailed consent forms
- Discussion documented in chart
- Ongoing consent over time

**Clinical Implementation:**

*Initial Visit:*
- Gender history (supportive, not interrogative)
- Medical history and exam
- Discussion of treatment options
- Review of consent materials

*Hormone Initiation:*
- Baseline labs
- Prescription with monitoring plan
- Safety counseling
- Follow-up scheduled

**Advantages:**
- Reduces barriers to care
- Respects patient knowledge
- Decreases harm from delayed treatment
- Supports marginalized populations

**Considerations:**
- Appropriate for adults
- Adolescent care typically more structured
- Mental health support still valuable
- Not "hormones on demand" but respectful evaluation`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Collaborative process between patient and provider in healthcare choices' },
        { term: 'capacity', definition: 'Ability to understand, appreciate, reason, and communicate healthcare decisions' },
        { term: 'harm reduction', definition: 'Approach focused on minimizing negative outcomes while respecting autonomy' },
        { term: 'real-life experience', definition: 'Historical requirement to live as affirmed gender before medical treatment' },
      ],
      clinicalNotes: 'Informed consent does not mean no evaluation. It means appropriate, respectful assessment focused on ensuring understanding rather than gatekeeping.',
    },
    4: {
      level: 4,
      summary: 'The informed consent model operationalizes bioethical principles of autonomy and beneficence in transgender healthcare, representing evidence-based practice endorsed by WPATH SOC 8 for adult hormone therapy access.',
      explanation: `The informed consent model is grounded in bioethical principles and supported by clinical evidence demonstrating its effectiveness and safety.

**Bioethical Framework:**

*Autonomy:*
- Respects individual right to self-determination
- Recognizes patient as expert on their own identity
- Trusts patient to weigh risks and benefits

*Beneficence/Non-Maleficence:*
- Evidence shows delaying care causes harm
- Timely access improves outcomes
- Balanced against ensuring informed decision

*Justice:*
- Reduces barriers that disproportionately affect marginalized groups
- Increases equity in healthcare access
- Addresses historical gatekeeping harms

**WPATH SOC 8 Position:**
- Supports informed consent for adults
- Recognizes flexibility in care pathways
- Does not require mental health diagnosis for adults
- Emphasizes competent, trained providers

**Implementation Protocols:**

*Consent Process:*
1. Detailed written materials provided
2. Verbal review of key points
3. Opportunity for questions
4. Assessment of understanding
5. Documentation of consent
6. Copy provided to patient

*Elements of Disclosure:*
- Feminizing hormones: Breast development (permanent), redistribution of body fat, decreased muscle mass, skin softening, decreased libido, testicular atrophy, infertility risk, VTE risk
- Masculinizing hormones: Voice deepening (permanent), facial hair, body hair, clitoral growth, menstrual cessation, redistribution of fat/muscle, acne, hair loss risk, polycythemia risk

*Ongoing Consent:*
- Consent as process, not one-time event
- Reassessment at follow-ups
- Updated consent with new information

**Evidence Base:**
- Studies show comparable outcomes to traditional models
- No evidence of increased regret rates
- Improved access to care
- Patient satisfaction typically high

**Challenges:**
- Provider training needs
- System-level implementation
- Insurance authorization processes
- Documentation requirements`,
      keyTerms: [
        { term: 'VTE', definition: 'Venous thromboembolism; blood clots, a potential risk of estrogen therapy', pronunciation: 'V-T-E' },
        { term: 'polycythemia', definition: 'Elevated red blood cells, a potential risk of testosterone therapy', pronunciation: 'pol-ee-sy-THEE-mee-ah' },
        { term: 'decisional capacity', definition: 'Clinical and legal standard for ability to make healthcare decisions' },
        { term: 'disclosure', definition: 'Information that must be provided as part of informed consent' },
      ],
      clinicalNotes: 'Document informed consent thoroughly. Include specific discussion of irreversible effects and fertility implications. Consent is ongoing, not one-time.',
    },
    5: {
      level: 5,
      summary: 'The informed consent model represents best-practice implementation of bioethical principles in transgender healthcare, supported by WPATH SOC 8 and outcome data, requiring provider competency in consent processes and clinical management.',
      explanation: `The informed consent model integrates ethical principles, clinical evidence, and practical implementation considerations for providing accessible, patient-centered transgender healthcare.

**Evolution and Evidence:**

*Historical Development:*
- 1990s-2000s: Emerged from community health centers
- Response to gatekeeping harms
- Influenced by HIV care harm reduction models
- Fenway Health, Callen-Lorde as early adopters

*Outcome Research:*
- Schulz (2018): Informed consent patients show equivalent or better mental health outcomes
- Multiple studies show low regret rates regardless of pathway
- Access-related improvements in health outcomes
- No evidence of increased adverse medical events

**Detailed Consent Elements:**

*Feminizing Hormone Therapy:*
- Expected effects: Breast development (2-3 years to maximum), body fat redistribution, skin softening, decreased muscle mass/strength, decreased spontaneous erections, testicular atrophy, decreased libido (often)
- Potentially permanent: Breast growth, possible fertility changes
- Risks: VTE (increased with age, smoking, oral estrogen), gallstones, elevated prolactin, unknown long-term cardiovascular effects
- Required monitoring: Labs (estradiol, testosterone, metabolic panel, lipids), blood pressure, clinical assessment

*Masculinizing Hormone Therapy:*
- Expected effects: Voice deepening (within 1 year), facial/body hair growth, clitoral growth, cessation of menses, redistribution of fat to masculine pattern, increased muscle mass, increased libido
- Potentially permanent: Voice changes, clitoral growth, facial hair, possible male-pattern baldness
- Risks: Polycythemia, liver function changes, lipid changes, acne, possible cardiovascular effects, vaginal atrophy
- Required monitoring: Labs (testosterone, CBC, metabolic panel, lipids), blood pressure, clinical assessment

**Special Considerations:**

*Decisional Capacity:*
- Presumed in adults unless evidence otherwise
- Acute psychiatric symptoms may require stabilization
- Cognitive impairment requires careful assessment
- Substance use: May affect acutely but doesn't preclude care

*Documentation Best Practices:*
- Standardized consent forms
- Chart notes detailing discussion
- Teaching-back key concepts
- Patient questions and provider responses
- Copies to patient

**System-Level Implementation:**

*Clinic Protocols:*
- Provider training requirements
- Consent form development
- Staff education on affirming care
- Referral networks for mental health, surgery

*Quality Measures:*
- Time from initial visit to hormone initiation
- Patient satisfaction scores
- Adverse event tracking
- Follow-up adherence

**Future Directions:**
- Telehealth consent processes
- Standardized outcome measures
- Long-term follow-up studies
- Integration with primary care`,
      keyTerms: [
        { term: 'teach-back method', definition: 'Having patients explain information back to verify understanding' },
        { term: 'harm reduction model', definition: 'Healthcare approach minimizing negative outcomes while meeting patients where they are' },
        { term: 'Fenway Health', definition: 'Pioneering LGBTQ+ health center that developed informed consent protocols' },
        { term: 'gatekeeping harms', definition: 'Negative outcomes from requirements that delay or prevent access to care' },
      ],
      clinicalNotes: `**Key Implementation Points:**
- Informed consent is not "no assessment" but appropriate, respectful assessment
- Document thorough discussion of effects and risks
- Pay particular attention to fertility preservation discussion
- Use teach-back to verify understanding
- Consent is ongoing - revisit at follow-up visits
- Mental health support should be available but not required
- WPATH SOC 8 fully supports informed consent for adults
- Adolescent care typically requires more structured evaluation`,
    },
  },

  media: [],
  citations: [
    {
      id: 'schulz-2018',
      type: 'article',
      title: 'Informed Consent in the Medical Care of Transgender and Gender-Nonconforming Patients',
      authors: ['Schulz SL'],
      source: 'AMA Journal of Ethics',
      url: 'https://journalofethics.ama-assn.org/',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-care-overview', targetType: 'topic', relationship: 'parent', label: 'Gender-Affirming Care Overview' },
  ],
  tags: {
    topics: ['informed consent', 'ethics', 'transgender health', 'patient autonomy'],
    keywords: ['informed consent', 'autonomy', 'hormone therapy', 'access to care'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default informedConsentModelContent;
