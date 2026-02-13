import { EducationalContent } from '../../types';

export const informedConsent: EducationalContent = {
  id: 'informed-consent',
  type: 'concept',
  name: 'Informed Consent',
  alternateNames: ['Consent', 'Medical consent'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding the basic concept of informed consent in healthcare.',
      explanation: `Informed consent respects patient autonomy. Patients must understand and agree to treatment. Consent must be voluntary and informed. Documentation of consent is standard practice.

**Key Concepts:**

- Informed consent respects patient autonomy
- Patients must understand and agree to treatment
- Consent must be voluntary and informed
- Documentation of consent is standard practice`,
      keyTerms: [
        { term: 'Informed consent', definition: 'A process for getting permission before conducting a medical intervention' },
        { term: 'Autonomy', definition: 'The right of patients to make their own healthcare decisions' },
        { term: 'Voluntary', definition: 'Given without coercion or pressure' },
        { term: 'Consent form', definition: 'A document signed by a patient agreeing to treatment' },
        { term: 'Permission', definition: 'Approval to proceed with medical care' }
      ],
      analogies: [
        'Informed consent is like signing a contract after reading it carefully.',
        'It\'s like agreeing to go on a trip after learning all the details.'
      ],
      examples: [
        'Signing a consent form before surgery',
        'Explaining a procedure to a patient before starting',
        'Asking permission to perform a physical examination'
      ],
      patientCounselingPoints: [
        'Informed consent means you understand and agree to your treatment.',
        'Your healthcare provider should explain your options clearly.',
        'You can ask questions before agreeing to any treatment.',
        'Your decision should be voluntary, without pressure.',
        'Consent is documented to protect your rights.'
      ]
    },
    2: {
      level: 2,
      summary: 'The essential components required for consent to be ethically valid.',
      explanation: `Valid informed consent requires five essential elements. Disclosure means providing relevant information about the procedure. Understanding means the patient comprehends the information. Voluntariness ensures the decision is free from coercion. Competence means the patient has decision-making capacity. Decision involves explicit agreement to proceed.

**Elements of Valid Informed Consent:**

- Disclosure: providing relevant information about the procedure
- Understanding: patient comprehends the information
- Voluntariness: decision is free from coercion
- Competence: patient has decision-making capacity
- Decision: explicit agreement to proceed`,
      keyTerms: [
        { term: 'Disclosure', definition: 'Providing information to enable informed decision-making' },
        { term: 'Capacity', definition: 'The ability to understand and make healthcare decisions' },
        { term: 'Voluntariness', definition: 'Making decisions freely without coercion' },
        { term: 'Competence', definition: 'Legal ability to make decisions' },
        { term: 'Assent', definition: 'Agreement from a patient who cannot legally provide consent' }
      ],
      analogies: [
        'Disclosure is like reading the fine print before signing.',
        'Capacity is like being old enough and mentally able to understand.'
      ],
      examples: [
        'Explaining risks, benefits, and alternatives of surgery',
        'Assessing whether an elderly patient understands the information',
        'Ensuring no family member is pressuring the patient\'s decision',
        'Using interpreters for non-English speaking patients'
      ],
      patientCounselingPoints: [
        'Valid consent requires you to understand the information.',
        'Your healthcare provider will assess your understanding.',
        'Your decision must be your own, without pressure from others.',
        'You must have the mental ability to make healthcare decisions.',
        'Your explicit agreement is needed before treatment begins.'
      ]
    },
    3: {
      level: 3,
      summary: 'What and how much information must be disclosed for valid consent.',
      explanation: `Disclosure standards include the nature and purpose of the proposed procedure, risks and benefits of the proposed treatment, alternative treatment options including no treatment, risks and benefits of alternatives. The reasonable person standard vs. subjective standard determines what must be disclosed. Materiality refers to what a reasonable person would want to know.

**Disclosure Standards:**

- Nature and purpose of the proposed procedure
- Risks and benefits of the proposed treatment
- Alternative treatment options including no treatment
- Risks and benefits of alternatives
- Reasonable person standard vs. subjective standard
- Materiality: what a reasonable person would want to know`,
      keyTerms: [
        { term: 'Reasonable person standard', definition: 'What information a typical person would want to know before deciding' },
        { term: 'Material risk', definition: 'A risk that a reasonable person would consider important in decision-making' },
        { term: 'Therapeutic privilege', definition: 'Withholding information from a patient for their perceived good' },
        { term: 'Subjective standard', definition: 'Disclosure based on what this specific patient would want to know' }
      ],
      analogies: [
        'Material risks are like deal-breakers when buying a car - things that would change your decision.',
        'The reasonable person standard is like "what would most people want to know?"'
      ],
      examples: [
        'Discussing a 1% risk of serious complication',
        'Explaining that surgery is elective and non-surgical options exist',
        'Deciding how much detail to provide about rare complications',
        'Addressing patient-specific questions about the procedure'
      ],
      patientCounselingPoints: [
        'Healthcare providers must disclose important information about your treatment.',
        'This includes risks, benefits, and alternatives.',
        'Material risks are those that would affect your decision.',
        'You should ask about anything you want to know.',
        'The amount of information should help you understand, not overwhelm you.'
      ]
    },
    4: {
      level: 4,
      summary: 'Unique challenges in obtaining valid consent in various circumstances.',
      explanation: `Special consent situations present unique challenges. Emergency consent exceptions apply when patients cannot consent and immediate treatment is needed. Minors require assent plus parental permission. Incapacitated adults need surrogate decision-makers. Research consent differs from clinical consent. Waivers of consent exist for minimal risk research. Cultural and language barriers require special attention. Psychiatric patients may have fluctuating capacity.

**Special Consent Situations:**

- Emergency consent exceptions
- Minors and assent/parental permission
- Incapacitated adults and surrogate decision-makers
- Research consent vs. clinical consent
- Waivers of consent and minimal risk research
- Cultural and language barriers
- Psychiatric patients and fluctuating capacity`,
      keyTerms: [
        { term: 'Emergency exception', definition: 'Providing treatment without consent in life-threatening emergencies' },
        { term: 'Assent', definition: 'Agreement from a minor who cannot legally provide consent' },
        { term: 'Surrogate decision-maker', definition: 'A person authorized to make decisions for someone who cannot decide for themselves' },
        { term: 'Guardian', definition: 'A person legally authorized to make decisions for someone else' },
        { term: 'Legally authorized representative', definition: 'Someone legally empowered to make healthcare decisions for another' }
      ],
      analogies: [
        'Emergency exception is like performing CPR on someone who can\'t say yes - you save their life.',
        'Assent is like a child agreeing while a parent provides legal permission.'
      ],
      examples: [
        'Treating an unconscious trauma patient without consent',
        'Obtaining assent from a 12-year-old with parental permission',
        'Working with a healthcare proxy for a patient with dementia',
        'Using simplified consent forms for low-literacy populations',
        'Navigating family decision-making in collectivist cultures'
      ],
      patientCounselingPoints: [
        'In emergencies, treatment may proceed without consent to save your life.',
        'For minors, both the child\'s assent and parent\'s permission are needed.',
        'If you cannot make decisions, a surrogate will decide for you.',
        'Research consent differs from consent for your own treatment.',
        'Language and cultural differences require special attention.',
        'Mental health conditions may affect your ability to consent.'
      ]
    },
    5: {
      level: 5,
      summary: 'Modern challenges and evolving practices in consent processes.',
      explanation: `Contemporary issues in informed consent include electronic consent platforms and digital signatures, multimedia consent aids (videos, interactive tools), dynamic consent and ongoing permission, consent for genomic sequencing and data sharing, consent for artificial intelligence in diagnosis/treatment, consent for secondary use of clinical data, consent fatigue and documentation burden, and brief consent vs. detailed consent in pragmatic research.

**Contemporary Issues:**

- Electronic consent platforms and digital signatures
- Multimedia consent aids (videos, interactive tools)
- Dynamic consent and ongoing permission
- Consent for genomic sequencing and data sharing
- Consent for artificial intelligence in diagnosis/treatment
- Consent for secondary use of clinical data
- Consent fatigue and documentation burden
- Brief consent vs. detailed consent in pragmatic research`,
      keyTerms: [
        { term: 'eConsent', definition: 'Electronic informed consent using digital platforms' },
        { term: 'Dynamic consent', definition: 'An ongoing process where patients can adjust their preferences over time' },
        { term: 'Secondary use', definition: 'Using health data for purposes other than direct care' },
        { term: 'Data sharing', definition: 'Making health information available for research or other uses' },
        { term: 'Genomic privacy', definition: 'Protection of genetic information and its uses' },
        { term: 'Broad consent', definition: 'Permission for future unspecified research use of data or samples' }
      ],
      analogies: [
        'Dynamic consent is like subscription preferences you can change anytime.',
        'eConsent is like signing documents digitally - more convenient but legally equivalent.'
      ],
      examples: [
        'Tablet-based consent with embedded educational videos',
        'Research participants choosing notification preferences over time',
        'Consenting to future unspecified research on biological samples',
        'Explaining AI diagnostic uncertainty in consent discussions',
        'Balancing thoroughness with readability in consent documents'
      ],
      patientCounselingPoints: [
        'Electronic consent makes the process more convenient and accessible.',
        'Videos and interactive tools help you understand your treatment options.',
        'Dynamic consent allows you to change your preferences over time.',
        'Genomic testing involves decisions about future use of your genetic data.',
        'AI tools in healthcare may require special consent considerations.',
        'Your clinical data may be used for research with appropriate consent.',
        'Healthcare systems are working to reduce consent documentation burden.',
        'Research studies vary in how much consent detail they provide.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'informed-consent', 'patient-autonomy'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
