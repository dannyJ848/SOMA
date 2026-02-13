import { EducationalContent } from '../../types';

export const endOfLifeEthics: EducationalContent = {
  id: 'end-of-life-ethics',
  type: 'concept',
  name: 'End-of-Life Ethics',
  alternateNames: ['End-of-life care', 'EOL ethics'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding basic ethical issues in caring for dying patients.',
      explanation: `End-of-life decisions are emotionally and ethically complex. Patient autonomy is central to end-of-life choices. Beneficence and non-maleficence guide care goals. Communication and compassion are essential.

**Key Concepts:**

- End-of-life decisions are emotionally and ethically complex
- Patient autonomy is central to end-of-life choices
- Beneficence and non-maleficence guide care goals
- Communication and compassion are essential`,
      keyTerms: [
        { term: 'End-of-life care', definition: 'Care for patients who are nearing death and their families' },
        { term: 'Palliative care', definition: 'Care focused on comfort and quality of life for serious illness' },
        { term: 'Hospice', definition: 'End-of-life care that focuses on comfort rather than cure' },
        { term: 'Advance directive', definition: 'A legal document specifying treatment preferences for end-of-life care' },
        { term: 'Life-sustaining treatment', definition: 'Medical treatments that prolong life but may not cure' }
      ],
      analogies: [
        'End-of-life care is like hospice at home - focusing on comfort and quality.',
        'Advance directives are like leaving instructions for your care when you can\'t speak.'
      ],
      examples: [
        'A patient choosing to stop cancer treatment',
        'Family discussing goals of care for an elderly parent',
        'Managing pain at the end of life'
      ],
      patientCounselingPoints: [
        'End-of-life decisions are deeply personal and should reflect your values.',
        'You have the right to decide about treatments that prolong life.',
        'Comfort and quality of life become primary goals as death approaches.',
        'Having conversations about end-of-life wishes early is important.'
      ]
    },
    2: {
      level: 2,
      summary: 'Ethical considerations in deciding not to start or to stop medical interventions.',
      explanation: `Withholding and withdrawing treatment are ethically equivalent. The distinction between killing and letting die matters. Medical futility applies when treatment provides no benefit. Artificial nutrition and hydration are considered medical treatment. Cardiopulmonary resuscitation (CPR) and DNR orders are important considerations.

**Key Points:**

- Ethical equivalence: withholding and withdrawing are morally equivalent
- Distinction between killing and letting die
- Medical futility: when treatment provides no benefit
- Artificial nutrition and hydration as medical treatment
- Cardiopulmonary resuscitation (CPR) and DNR orders`,
      keyTerms: [
        { term: 'Withholding treatment', definition: 'Not starting a medical intervention' },
        { term: 'Withdrawing treatment', definition: 'Stopping a medical intervention that has been started' },
        { term: 'Medical futility', definition: 'Treatment that will not benefit the patient' },
        { term: 'DNR', definition: 'Do Not Resuscitate - an order not to perform CPR' },
        { term: 'Artificial nutrition', definition: 'Providing food and fluids through medical means' }
      ],
      analogies: [
        'Withholding vs. withdrawing is like not starting a journey vs. turning back - ethically the same.',
        'Medical futility is like pushing a car that won\'t run - effort without benefit.'
      ],
      examples: [
        'Deciding not to intubate a terminal patient',
        'Removing mechanical ventilation per patient wishes',
        'Determining futility of continued dialysis',
        'Writing a DNR order after discussion with patient/family'
      ],
      patientCounselingPoints: [
        'Not starting and stopping treatment are ethically the same.',
        'Letting die naturally is different from causing death.',
        'Sometimes treatment simply won\'t help - this is called medical futility.',
        'Artificial nutrition and hydration are medical treatments that can be refused.',
        'DNR orders specify your wishes about CPR.'
      ]
    },
    3: {
      level: 3,
      summary: 'Tools and processes for documenting end-of-life preferences.',
      explanation: `Advance care planning includes several tools. Living wills are written treatment preferences. Durable power of attorney for healthcare designates a decision-maker. Physician Orders for Life-Sustaining Treatment (POLST/MOLST) guide immediate care. Goals of care conversations explore patient values. Surrogate decision-making follows established standards.

**Key Tools:**

- Living wills: written treatment preferences
- Durable power of attorney for healthcare
- Physician Orders for Life-Sustaining Treatment (POLST/MOLST)
- Goals of care conversations
- Surrogate decision-making standards`,
      keyTerms: [
        { term: 'Living will', definition: 'A written document specifying end-of-life treatment preferences' },
        { term: 'Durable power of attorney', definition: 'Legal document naming someone to make healthcare decisions' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - medical orders for end-of-life care' },
        { term: 'MOLST', definition: 'Medical Orders for Life-Sustaining Treatment - similar to POLST' },
        { term: 'Healthcare proxy', definition: 'A person designated to make healthcare decisions for someone else' },
        { term: 'Substituted judgment', definition: 'Making decisions based on what the patient would have wanted' }
      ],
      analogies: [
        'Living wills are like instruction letters for your care.',
        'Healthcare proxy is like appointing a substitute decision-maker for when you can\'t decide.'
      ],
      examples: [
        'Completing an advance directive after a new diagnosis',
        'Appointing a healthcare proxy to make decisions if incapacitated',
        'Having goals-of-care discussion with a seriously ill patient',
        'Using POLST form to document treatment wishes'
      ],
      patientCounselingPoints: [
        'Advance directives document your wishes for end-of-life care.',
        'A healthcare proxy makes decisions for you if you cannot.',
        'POLST forms translate your wishes into medical orders.',
        'Goals of care conversations help your team understand what matters to you.',
        'Substituted judgment means deciding as you would have decided.'
      ]
    },
    4: {
      level: 4,
      summary: 'Unique ethical challenges in specific end-of-life contexts.',
      explanation: `Special populations present unique end-of-life ethics challenges. Pediatric end-of-life decisions involve parental authority. Patients lacking capacity include those with dementia or intellectual disability. Periviable neonates present resuscitation dilemmas. Patients with psychiatric illness and suicidal ideation require special care. Disagreements among family members are common. Cultural and religious diversity affect practices. Emergent situations require emergency life-sustaining treatment decisions.

**Special Populations and Situations:**

- Pediatric end-of-life decisions and parental authority
- Patients lacking capacity: dementia, intellectual disability
- Periviable neonates and decisions about resuscitation
- Patients with psychiatric illness and suicidal ideation
- Disagreements among family members about care
- Cultural and religious diversity in death practices
- Emergent situations: Emergency life-sustaining treatment`,
      keyTerms: [
        { term: 'Periviable', definition: 'A fetus at the edge of viability outside the womb' },
        { term: 'Neonate', definition: 'A newborn baby, especially in the first four weeks' },
        { term: 'Best interest standard', definition: 'Deciding based on what would best serve the patient' },
        { term: 'Cultural humility', definition: 'Approach to understanding and respecting cultural differences' },
        { term: 'Family conflict mediation', definition: 'Process for resolving disagreements about care' }
      ],
      analogies: [
        'Periviable neonates are on the edge of viability - like a plant that might survive outside or might not.',
        'Family conflict mediation is like having a referee to help people agree.'
      ],
      examples: [
        'Parents deciding on treatment for a terminally ill child',
        'Making decisions for a patient with advanced dementia',
        'Resuscitation decisions for extremely premature infants',
        'Assessing suicidality in a terminally ill patient requesting hastened death'
      ],
      patientCounselingPoints: [
        'Pediatric end-of-life decisions involve parents as decision-makers for children.',
        'For patients with dementia, past wishes and best interests guide decisions.',
        'Extremely premature infants raise difficult resuscitation questions.',
        'Suicidal thinking in terminally ill patients requires careful assessment.',
        'Family disagreements about end-of-life care are common and can be mediated.',
        'Your cultural and religious beliefs are respected in end-of-life care.',
        'Emergencies may require immediate decisions before preferences are known.'
      ]
    },
    5: {
      level: 5,
      summary: 'Current debates and emerging challenges in death and dying.',
      explanation: `Contemporary issues in end-of-life ethics include medical aid in dying (MAID) and physician-assisted death, euthanasia vs. medical aid in dying, palliative sedation for refractory symptoms, defining death (neurological vs. cardiopulmonary criteria), organ donation after circulatory determination of death (DCDD), integrated palliative care and simultaneous care, artificial intelligence in prognosis prediction, novel technologies (ECMO, ventricular assist devices, and abandonment), cost and access to palliative and hospice care, and medical futility (objective vs. value-laden determinations).

**Contemporary Issues:**

- Medical aid in dying (MAID) and physician-assisted death
- Euthanasia vs. medical aid in dying
- Palliative sedation for refractory symptoms
- Defining death: neurological vs. cardiopulmonary criteria
- Organ donation after circulatory determination of death (DCDD)
- Integrated palliative care and simultaneous care
- Artificial intelligence in prognosis prediction
- Novel technologies: ECMO, ventricular assist devices, and abandonment
- Cost and access to palliative and hospice care
- Medical futility: objective vs. value-laden determinations`,
      keyTerms: [
        { term: 'Medical aid in dying', definition: 'Prescribing medication that a terminally ill patient can take to end their life' },
        { term: 'Physician-assisted suicide', definition: 'A physician providing means for a patient to end their life' },
        { term: 'Palliative sedation', definition: 'Sedation to relieve intractable suffering at the end of life' },
        { term: 'Brain death', definition: 'Irreversible cessation of all brain function' },
        { term: 'DCDD', definition: 'Donation after Circulatory Determination of Death' },
        { term: 'ECMO', definition: 'Extracorporeal Membrane Oxygenation - life support outside the body' }
      ],
      analogies: [
        'Palliative sedation is like being under anesthesia for comfort - not to end life but to relieve suffering.',
        'Brain death is like the computer is destroyed - even if electricity still flows to parts.'
      ],
      examples: [
        'Prescribing medication under a medical aid in dying law',
        'Using continuous deep sedation for intractable pain',
        'Determining brain death in complex cases',
        'Organ donation after withdrawal of life support',
        'Managing an LVAD patient at end of life'
      ],
      patientCounselingPoints: [
        'Medical aid in dying is legally available in some jurisdictions for terminally ill patients.',
        'Palliative sedation relieves suffering when other treatments don\'t work.',
        'Brain death means death by neurological criteria - even if the heart still beats.',
        'Organ donation can occur after death by either neurological or circulatory criteria.',
        'Simultaneous care means treating disease while providing palliative support.',
        'AI tools help predict prognosis but are not perfect.',
        'New technologies create new questions about when life-sustaining treatment should stop.',
        'Access to palliative and hospice care varies and is an ethical concern.',
        'Determining futility involves both medical facts and patient values.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'end-of-life', 'palliative-care'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
