import { EducationalContent } from '../../types';

export const autonomy: EducationalContent = {
  id: 'autonomy',
  type: 'concept',
  name: 'Autonomy',
  alternateNames: ['Patient autonomy', 'Self-determination'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding the basic concept of patient autonomy in healthcare.',
      explanation: `Autonomy means self-rule and independence. Patients have the right to make decisions about their own bodies, and healthcare providers must respect patient choices. Autonomy is a fundamental ethical principle in medicine.

**Key Concepts:**

- Autonomy means self-rule and independence
- Patients have the right to make decisions about their own bodies
- Healthcare providers must respect patient choices
- Autonomy is a fundamental ethical principle in medicine`,
      keyTerms: [
        { term: 'Autonomy', definition: 'Self-rule and independence; the right of patients to make their own healthcare decisions' },
        { term: 'Self-determination', definition: 'The ability of individuals to make their own choices and control their own lives' },
        { term: 'Patient rights', definition: 'Legal and ethical rights that protect patients in healthcare settings' },
        { term: 'Informed choice', definition: 'A decision made with full understanding of relevant information' }
      ],
      analogies: [
        'Autonomy is like being the captain of your own ship - you decide the direction and course.',
        'Patient autonomy is similar to personal freedom - the right to decide what happens to your own body.'
      ],
      examples: [
        'A patient refusing a recommended blood transfusion due to religious beliefs',
        'An adult choosing to stop smoking despite health risks',
        'A patient selecting between two treatment options'
      ],
      patientCounselingPoints: [
        'You have the right to make decisions about your healthcare.',
        'Your healthcare team should respect your choices and provide information to help you decide.',
        'Autonomy means you can accept or refuse any treatment.',
        'Your values and beliefs are important in healthcare decisions.'
      ]
    },
    2: {
      level: 2,
      summary: 'Historical and philosophical foundations of autonomy in medical ethics.',
      explanation: `Autonomy in medical ethics is rooted in Kantian philosophy and deontological ethics. The healthcare system has evolved from paternalistic approaches to patient-centered care. The Belmont Report (1979) formally established respect for persons as a key ethical principle. Autonomy requires decision-making capacity.

**Key Points:**

- Rooted in Kantian philosophy and deontological ethics
- Emergence from paternalistic to patient-centered care
- The Belmont Report (1979) established respect for persons
- Autonomy requires decision-making capacity`,
      keyTerms: [
        { term: 'Paternalism', definition: 'A model of healthcare where providers make decisions for patients, believing they know what is best' },
        { term: 'Patient-centered care', definition: 'An approach to healthcare that respects and responds to individual patient preferences, needs, and values' },
        { term: 'Belmont Report', definition: 'A 1979 report that established ethical principles for human research, including respect for persons' },
        { term: 'Decision-making capacity', definition: 'The ability to understand and appreciate a decision and its consequences' }
      ],
      analogies: [
        'Paternalism is like a parent making all decisions for a child - well-intentioned but not respecting independence.',
        'The shift from paternalism to autonomy is like moving from a dictatorship to a democracy.'
      ],
      examples: [
        'Historical shift from doctor-knows-best to shared decision-making',
        'Legal cases establishing patient rights to refuse treatment',
        'Evolution of consent forms and processes'
      ],
      patientCounselingPoints: [
        'Healthcare has evolved from doctors making all decisions to patients actively participating in their care.',
        'The Belmont Report helped establish respect for persons as a fundamental principle.',
        'Your ability to make decisions is protected, but it requires understanding your choices.',
        'Shared decision-making means you and your doctor work together.'
      ]
    },
    3: {
      level: 3,
      summary: 'Understanding the components required for valid autonomous choices.',
      explanation: `Autonomous decision-making requires several key elements: voluntariness (freedom from coercion and undue influence), information (adequate understanding of relevant information), decision-making capacity (ability to understand and appreciate the decision), and intentionality (clear communication of the choice).

**Elements of Autonomous Decision-Making:**

- Voluntariness: freedom from coercion and undue influence
- Information: adequate understanding of relevant information
- Decision-making capacity: ability to understand and appreciate the decision
- Intentionality: clear communication of the choice`,
      keyTerms: [
        { term: 'Voluntariness', definition: 'The freedom to make decisions without coercion or undue influence' },
        { term: 'Coercion', definition: 'Being forced to do something against your will through threats or force' },
        { term: 'Undue influence', definition: 'Excessive pressure that affects a person\'s ability to make free choices' },
        { term: 'Capacity assessment', definition: 'The process of evaluating whether a patient has the ability to make healthcare decisions' }
      ],
      analogies: [
        'Voluntariness is like signing a contract without anyone holding a gun to your head.',
        'Undue influence is like a used car salesperson pressuring you to buy - you might agree, but not freely.'
      ],
      examples: [
        'Assessing capacity in elderly patients with cognitive impairment',
        'Identifying subtle pressure from family members on treatment decisions',
        'Ensuring information is presented at an appropriate comprehension level'
      ],
      patientCounselingPoints: [
        'Your decision to accept or refuse treatment must be your own, free from pressure.',
        'Healthcare providers assess capacity to ensure you understand your decisions.',
        'Family members should support your choices, not make them for you.',
        'Information should be presented in a way you can understand.'
      ]
    },
    4: {
      level: 4,
      summary: 'Exploring boundaries of autonomy and situations where it may be overridden.',
      explanation: `Autonomy is not absolute and may be limited in certain circumstances: when patient choices harm others, in emergencies when consent cannot be obtained, when patients lack decision-making capacity, for public health and mandatory reporting requirements, and for resource allocation and distributive justice considerations.

**Limits of Autonomy:**

- Autonomy is not absolute when it harms others
- Emergency exceptions when consent cannot be obtained
- Patients lacking decision-making capacity
- Public health and mandatory reporting requirements
- Resource allocation and distributive justice`,
      keyTerms: [
        { term: 'Emergency exception', definition: 'The legal and ethical principle allowing treatment without consent in emergencies' },
        { term: 'Therapeutic privilege', definition: 'Withholding information from a patient when disclosure may cause harm' },
        { term: 'Public health override', definition: 'Limiting individual autonomy to protect public health' },
        { term: 'Justice vs. autonomy', definition: 'The ethical tension between individual freedom and fair distribution of resources' }
      ],
      analogies: [
        'Limits on autonomy are like speed limits - your freedom is restricted for everyone\'s safety.',
        'Emergency exceptions are like performing CPR on an unconscious person - you help even without permission.'
      ],
      examples: [
        'Mandatory quarantine for contagious diseases',
        'Involuntary hospitalization for suicidal patients',
        'Court-ordered treatment for minors',
        'Resource triage during pandemics'
      ],
      patientCounselingPoints: [
        'Your autonomy is important but not unlimited when it affects others\' safety.',
        'In emergencies, treatment may proceed without consent to save your life.',
        'Public health laws may require certain actions to protect communities.',
        'Resource scarcity sometimes requires difficult allocation decisions.'
      ]
    },
    5: {
      level: 5,
      summary: 'Complex applications of autonomy in modern medical practice and emerging technologies.',
      explanation: `Advanced applications of autonomy include advance directives and surrogate decision-making, shared decision-making models, cultural considerations in autonomy, artificial intelligence and algorithmic decision support, genetic testing and the right not to know, and autonomy in personalized and precision medicine.

**Contemporary Issues:**

- Advance directives and surrogate decision-making
- Shared decision-making models
- Cultural considerations in autonomy
- Artificial intelligence and algorithmic decision support
- Genetic testing and the right not to know
- Autonomy in personalized and precision medicine`,
      keyTerms: [
        { term: 'Advance directive', definition: 'A legal document specifying medical treatment preferences in case of incapacity' },
        { term: 'Surrogate decision-maker', definition: 'A person designated to make healthcare decisions for someone who cannot decide for themselves' },
        { term: 'Shared decision-making', definition: 'A collaborative process where patients and providers make decisions together' },
        { term: 'Cultural competence', definition: 'The ability to understand and respond effectively to cultural differences in healthcare' },
        { term: 'Right not to know', definition: 'The ethical principle that patients may choose not to receive certain medical information' }
      ],
      analogies: [
        'Advance directives are like leaving instructions for house-sitters - you specify what should be done when you\'re not available to decide.',
        'The right not to know is like choosing not to read spoilers for a movie - some prefer not to have certain information.'
      ],
      examples: [
        'Interpreting a living will in an unanticipated clinical scenario',
        'Balancing family involvement with patient privacy in collectivist cultures',
        'AI-driven treatment recommendations and human oversight',
        'Incidental findings from genomic sequencing',
        'Ulysses contracts for psychiatric treatment'
      ],
      patientCounselingPoints: [
        'Advance directives protect your autonomy even if you lose decision-making capacity.',
        'Shared decision-making ensures your values and preferences guide treatment choices.',
        'Cultural differences affect how autonomy is understood and respected.',
        'You have the right to decide how much genetic information you want to know.',
        'AI tools should support, not replace, human decision-making in healthcare.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'autonomy', 'patient-rights'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
