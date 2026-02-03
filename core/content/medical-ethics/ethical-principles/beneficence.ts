import { EducationalContent } from '../../types';

export const beneficence: EducationalContent = {
  id: 'beneficence',
  type: 'concept',
  name: 'Beneficence',
  alternateNames: ['Doing good', 'Patient welfare'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding the basic principle of doing good in medical practice.',
      explanation: `Beneficence means acting for the benefit of patients. The core goal of medicine is to promote health and well-being, and healthcare providers have a duty to help patients. Balancing benefits against risks is essential.

**Key Concepts:**

- Beneficence means acting for the benefit of patients
- Core goal of medicine is to promote health and well-being
- Healthcare providers have a duty to help patients
- Balancing benefits against risks is essential`,
      keyTerms: [
        { term: 'Beneficence', definition: 'The ethical obligation to act in ways that benefit others' },
        { term: 'Patient welfare', definition: 'The well-being and best interests of the patient' },
        { term: 'Well-being', definition: 'The state of being comfortable, healthy, or happy' },
        { term: 'Clinical benefit', definition: 'A positive outcome from medical treatment or intervention' }
      ],
      analogies: [
        'Beneficence is like a teacher helping students learn - it\'s about actively doing good.',
        'Medical beneficence is like a parent caring for a child - acting in their best interest.'
      ],
      examples: [
        'Prescribing effective treatment for an infection',
        'Recommending lifestyle changes to prevent disease',
        'Providing pain relief for a terminally ill patient'
      ],
      patientCounselingPoints: [
        'Your healthcare provider\'s primary goal is to help you and improve your health.',
        'Beneficence means treatments should provide real benefit to you.',
        'Your well-being is the focus of medical decision-making.',
        'Doctors consider both benefits and risks when recommending treatment.'
      ]
    },
    2: {
      level: 2,
      summary: 'Historical and philosophical roots of the beneficence principle.',
      explanation: `The principle of beneficence has deep historical roots. The Hippocratic Oath includes "first, do no harm" (primum non nocere), which is closely related to beneficence. Medical traditions have long emphasized healing and caring, and utilitarian influences shaped beneficent action. Professional codes emphasize patient welfare.

**Key Points:**

- Hippocratic Oath: "first, do no harm"
- Tradition of healing and caring in medicine
- Utilitarian influences on beneficent action
- Professional codes emphasizing patient welfare`,
      keyTerms: [
        { term: 'Hippocratic Oath', definition: 'An ancient Greek code of ethics for physicians that includes principles of beneficence' },
        { term: 'Healing tradition', definition: 'The long-standing medical practice of restoring health and relieving suffering' },
        { term: 'Utilitarianism', definition: 'An ethical theory focusing on maximizing overall benefit or happiness' },
        { term: 'Professional duty', definition: 'The ethical obligation healthcare providers have to act in patients\' best interests' }
      ],
      analogies: [
        'The Hippocratic Oath is like the original code of conduct for doctors - a promise to do good.',
        'Beneficence in medicine is like the golden rule - treat others as you would want to be treated.'
      ],
      examples: [
        'Historical evolution of medical professionalism',
        'Religious and cultural foundations of caregiving',
        'Development of medical ethics codes emphasizing beneficence'
      ],
      patientCounselingPoints: [
        'The duty to do good has been central to medicine for thousands of years.',
        'Professional codes of ethics guide doctors to act in your best interest.',
        'Medical training emphasizes the importance of helping patients.',
        'Your well-being is at the heart of medical professionalism.'
      ]
    },
    3: {
      level: 3,
      summary: 'Practical approaches to promoting patient welfare.',
      explanation: `Applying beneficence in clinical practice involves evidence-based practice, preventive care and health promotion, palliative care and symptom management, patient advocacy in healthcare systems, and balancing individual and public health benefits.

**Key Applications:**

- Evidence-based practice as beneficence
- Preventive care and health promotion
- Palliative care and symptom management
- Patient advocacy in healthcare systems
- Balancing individual and public health benefits`,
      keyTerms: [
        { term: 'Evidence-based medicine', definition: 'Medical practice based on the best available scientific evidence' },
        { term: 'Preventive care', definition: 'Healthcare that focuses on preventing disease rather than treating it after it occurs' },
        { term: 'Palliative care', definition: 'Care that focuses on relieving symptoms and improving quality of life for serious illnesses' },
        { term: 'Patient advocacy', definition: 'Acting on behalf of patients to ensure they receive appropriate care' },
        { term: 'Public health', definition: 'Efforts to protect and improve the health of communities' }
      ],
      analogies: [
        'Preventive care is like maintaining your car - regular service prevents breakdowns.',
        'Patient advocacy is like having a lawyer in court - someone fighting for your rights.'
      ],
      examples: [
        'Implementing screening protocols for early disease detection',
        'Coordinating care to improve health outcomes',
        'Advocating for insurance coverage of necessary treatments',
        'Recommending vaccination to protect patient and community'
      ],
      patientCounselingPoints: [
        'Evidence-based medicine ensures you receive treatments proven to work.',
        'Preventive care helps you stay healthy before problems develop.',
        'Palliative care focuses on comfort and quality of life when cure isn\'t possible.',
        'Your healthcare team can advocate for you within the healthcare system.'
      ]
    },
    4: {
      level: 4,
      summary: 'Navigating tensions between doing good and respecting patient choices.',
      explanation: `Conflicts between beneficence and autonomy arise when patients refuse beneficial treatment, when there's disagreement about what constitutes "benefit," when considering quality vs. quantity of life, and with cultural differences in health values. Therapeutic privilege has limitations in modern practice.

**Key Conflicts:**

- When patients refuse beneficial treatment
- Disagreement about what constitutes "benefit"
- Quality vs. quantity of life considerations
- Cultural differences in health values
- Therapeutic privilege and its limitations`,
      keyTerms: [
        { term: 'Treatment refusal', definition: 'When a patient declines recommended medical care' },
        { term: 'Quality of life', definition: 'An individual\'s satisfaction with their physical, mental, and social well-being' },
        { term: 'Therapeutic privilege', definition: 'Withholding information from a patient for their own perceived good' },
        { term: 'Value pluralism', definition: 'The recognition that different people may have different but equally valid values' },
        { term: 'Cultural humility', definition: 'An approach to working with diverse cultures that emphasizes self-reflection and learning' }
      ],
      analogies: [
        'Quality vs. quantity of life is like choosing between a short exciting vacation or a long boring one.',
        'Value pluralism is like preferring different foods - no single right answer for everyone.'
      ],
      examples: [
        'Patient with schizophrenia refusing antipsychotic medication',
        'Family requesting continued life-sustaining treatment against medical advice',
        'Cultural preferences for family involvement in medical decisions',
        'Jehovah\'s Witness refusing life-saving blood transfusion'
      ],
      patientCounselingPoints: [
        'Your doctor may recommend treatments they believe will help you.',
        'You have the right to refuse treatment, even if your doctor disagrees.',
        'Quality of life means different things to different people.',
        'Cultural and personal values are important in medical decisions.',
        'Open discussion helps balance beneficence with your autonomy.'
      ]
    },
    5: {
      level: 5,
      summary: 'Modern dilemmas in defining and promoting patient benefit.',
      explanation: `Contemporary challenges in beneficence include defining benefit in precision medicine, beneficence in resource-limited settings, AI and predictive analytics in beneficent decision-making, long-term vs. short-term benefits in chronic disease, population-level beneficence and public health ethics, and beneficence in emerging technologies like gene therapy and enhancement.

**Contemporary Issues:**

- Defining benefit in precision medicine
- Beneficence in resource-limited settings
- AI and predictive analytics in beneficent decision-making
- Long-term vs. short-term benefits in chronic disease
- Population-level beneficence and public health ethics
- Beneficence in emerging technologies (gene therapy, enhancement)`,
      keyTerms: [
        { term: 'Precision medicine', definition: 'Medical care tailored to individual characteristics, genetics, and lifestyle' },
        { term: 'Resource allocation', definition: 'How limited healthcare resources are distributed among patients' },
        { term: 'Predictive analytics', definition: 'Using data and algorithms to predict future health outcomes' },
        { term: 'Public health ethics', definition: 'Ethical principles guiding population-level health interventions' },
        { term: 'Therapeutic enhancement', definition: 'Interventions that go beyond treating disease to improve normal function' }
      ],
      analogies: [
        'Precision medicine is like a custom-tailored suit vs. off-the-rack - personalized to fit.',
        'Resource allocation is like triage on a battlefield - making difficult decisions about who gets what.'
      ],
      examples: [
        'Allocating scarce organs to maximize benefit',
        'Using AI to predict and prevent adverse events',
        'Gene editing for treatment vs. enhancement',
        'Balancing individual treatment with population health programs',
        'Social determinants of health and beneficent care'
      ],
      patientCounselingPoints: [
        'Precision medicine aims to provide treatments most likely to benefit you specifically.',
        'Resource limitations sometimes require difficult allocation decisions.',
        'AI tools help predict which treatments will work best for you.',
        'Chronic disease management considers both immediate and long-term benefits.',
        'Public health programs aim to benefit entire communities.',
        'New technologies raise questions about what counts as medical benefit.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'beneficence', 'patient-welfare'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
