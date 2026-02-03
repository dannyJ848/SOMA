import { EducationalContent } from '../../types';

export const nonMaleficence: EducationalContent = {
  id: 'non-maleficence',
  type: 'concept',
  name: 'Non-Maleficence',
  alternateNames: ['Do no harm', 'Primum non nocere'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding the foundational principle of not causing harm.',
      explanation: `Non-maleficence means "do no harm" - one of the oldest medical ethical principles. It requires careful consideration of treatment risks and is essential for building patient trust.

**Key Concepts:**

- Non-maleficence means "do no harm"
- One of the oldest medical ethical principles
- Requires careful consideration of treatment risks
- Essential for building patient trust`,
      keyTerms: [
        { term: 'Non-maleficence', definition: 'The ethical principle of not causing harm to others' },
        { term: 'Do no harm', definition: 'The traditional medical directive to avoid causing injury or damage' },
        { term: 'Medical risk', definition: 'The possibility of harm or adverse effects from medical treatment' },
        { term: 'Patient safety', definition: 'Practices and procedures to prevent harm to patients during healthcare' }
      ],
      analogies: [
        'Non-maleficence is like "first, do no harm" - the basic rule of medicine.',
        'It\'s like a doctor\'s version of the Hippocratic oath: help, but don\'t hurt.'
      ],
      examples: [
        'Reviewing medications to avoid harmful drug interactions',
        'Properly sterilizing equipment to prevent infection',
        'Avoiding treatments with risks outweighing benefits'
      ],
      patientCounselingPoints: [
        'Your healthcare provider\'s first priority is to avoid causing harm.',
        'Treatments are carefully chosen to minimize risks.',
        'Patient safety protocols exist to protect you from harm.',
        'Your doctor will discuss potential risks before any treatment.'
      ]
    },
    2: {
      level: 2,
      summary: 'The origins and evolution of non-maleficence in medical history.',
      explanation: `The principle of non-maleficence has ancient roots. The Hippocratic Corpus includes "first, do no harm" (primum non nocere). Ancient medical traditions emphasized safety. Medicine has evolved from avoiding obvious harm to preventing subtle harms, leading to the modern patient safety movement.

**Key Points:**

- Hippocratic Corpus: "first, do no harm" (primum non nocere)
- Ancient medical traditions emphasizing safety
- Evolution from avoiding obvious harm to preventing subtle harms
- Modern patient safety movement`,
      keyTerms: [
        { term: 'Primum non nocere', definition: 'Latin phrase meaning "first, do no harm" - a core medical principle' },
        { term: 'Hippocratic medicine', definition: 'Medical practices based on the teachings of Hippocrates, emphasizing ethical practice' },
        { term: 'Patient safety movement', definition: 'Modern efforts to systematically reduce harm in healthcare' },
        { term: 'Iatrogenic harm', definition: 'Harm caused by medical examination or treatment' }
      ],
      analogies: [
        'The evolution of non-maleficence is like moving from "don\'t stab people" to "don\'t accidentally give them the wrong dose."',
        'Modern patient safety is like aviation safety - many small protections prevent disasters.'
      ],
      examples: [
        'Historical context of harmful medical practices',
        'Development of surgical safety protocols',
        'Introduction of evidence-based medicine to prevent harm',
        'Evolution of pharmaceutical safety testing'
      ],
      patientCounselingPoints: [
        'The "do no harm" principle has guided medicine for thousands of years.',
        'Modern medicine focuses on preventing even subtle types of harm.',
        'Patient safety systems help prevent errors before they reach you.',
        'Your healthcare team is trained to minimize all types of risk.'
      ]
    },
    3: {
      level: 3,
      summary: 'Categorizing and understanding different forms of harm in healthcare.',
      explanation: `Medical harm can take many forms: physical harm from procedures, medications, or errors; psychological harm including trauma and loss of dignity; social harm from stigma or discrimination; financial harm from unnecessary or expensive treatments; and iatrogenic harm caused by the healing process itself.

**Types of Medical Harm:**

- Physical harm from procedures, medications, or errors
- Psychological harm including trauma and loss of dignity
- Social harm from stigma or discrimination
- Financial harm from unnecessary or expensive treatments
- Iatrogenic harm: harm caused by the healing process itself`,
      keyTerms: [
        { term: 'Iatrogenic', definition: 'Adverse effects of medical treatment or advice, especially those caused by therapy or diagnostic procedures' },
        { term: 'Medical error', definition: 'A preventable adverse effect of medical care, whether or not it is evident or harmful to the patient' },
        { term: 'Adverse event', definition: 'An unintended injury or complication resulting from healthcare rather than the underlying condition' },
        { term: 'Side effect', definition: 'A secondary, typically undesirable effect of a drug or medical treatment' },
        { term: 'Complication', definition: 'An unfavorable evolution or consequence of a disease, condition, or treatment' }
      ],
      analogies: [
        'Iatrogenic harm is like breaking something while trying to fix it.',
        'Medical errors are like typos - sometimes small, sometimes serious, always worth preventing.'
      ],
      examples: [
        'Medication errors causing adverse reactions',
        'Hospital-acquired infections',
        'Psychological impact of traumatic medical experiences',
        'Unnecessary procedures leading to complications',
        'Privacy breaches causing social harm'
      ],
      patientCounselingPoints: [
        'Harm in healthcare can be physical, emotional, social, or financial.',
        'Your healthcare team works to prevent all types of harm.',
        'Iatrogenic harm refers to harm caused by treatment itself.',
        'Reporting concerns about harm helps improve patient safety.'
      ]
    },
    4: {
      level: 4,
      summary: 'Risk-benefit analysis in clinical decision-making.',
      explanation: `All medical interventions carry some risk, so non-maleficence requires careful risk-benefit analysis. The net benefit must be positive for intervention. Shared decision-making about risk tolerance is important. There's uncertainty and individual variation in risk, leading to the concept of "acceptable risk."

**Key Points:**

- All medical interventions carry some risk
- Net benefit must be positive for intervention
- Shared decision-making about risk tolerance
- Uncertainty and individual variation in risk
- The concept of "acceptable risk"`,
      keyTerms: [
        { term: 'Risk-benefit ratio', definition: 'A comparison of the risk of a treatment to its potential benefits' },
        { term: 'Net benefit', definition: 'The overall benefit of a treatment after accounting for its risks' },
        { term: 'Risk tolerance', definition: 'The amount of risk a person is willing to accept' },
        { term: 'Uncertainty', definition: 'The lack of complete knowledge about outcomes in medicine' },
        { term: 'Clinical judgment', definition: 'The skill of making decisions about patient care based on experience and expertise' }
      ],
      analogies: [
        'Risk-benefit analysis is like checking weather before a trip - you balance risks against the benefit of traveling.',
        'Acceptable risk is like driving - you accept some risk for the benefit of getting places.'
      ],
      examples: [
        'Weighing chemotherapy side effects against cancer prognosis',
        'Deciding whether to perform high-risk surgery',
        'Choosing between watchful waiting and invasive treatment',
        'Determining acceptable risk thresholds in clinical trials'
      ],
      patientCounselingPoints: [
        'All medical treatments have some risk - your doctor helps you understand these.',
        'Risk-benefit analysis compares potential benefits against potential harms.',
        'Your tolerance for risk is personal and should guide treatment decisions.',
        'Shared decision-making ensures your values are considered in risk assessment.',
        'Some risk may be acceptable if the potential benefit is significant.'
      ]
    },
    5: {
      level: 5,
      summary: 'Contemporary issues in preventing harm in complex healthcare systems.',
      explanation: `Modern applications of non-maleficence include system-level approaches to preventing harm, addressing diagnostic error and delayed diagnosis, preventing overdiagnosis and overtreatment as harm, managing Health IT and medical errors, applying non-maleficence in end-of-life care, preventing harm through quality improvement, and recognizing provider burnout as a patient safety risk.

**Contemporary Challenges:**

- System-level approaches to preventing harm
- Diagnostic error and delayed diagnosis
- Overdiagnosis and overtreatment as harm
- Health IT and medical errors
- Non-maleficence in end-of-life care
- Preventing harm through quality improvement
- Burnout and healthcare provider wellness affecting patient safety`,
      keyTerms: [
        { term: 'System error', definition: 'A failure in the healthcare system that leads to patient harm' },
        { term: 'Diagnostic error', definition: 'A missed, wrong, or delayed diagnosis' },
        { term: 'Overdiagnosis', definition: 'Diagnosing a condition that would never cause symptoms or harm' },
        { term: 'Overtreatment', definition: 'Medical treatment that provides no benefit or causes more harm than good' },
        { term: 'Quality improvement', definition: 'Systematic efforts to improve healthcare quality and safety' },
        { term: 'Second victim', definition: 'Healthcare providers who experience trauma after being involved in a medical error' }
      ],
      analogies: [
        'System errors are like potholes in the road - the infrastructure causes problems regardless of who\'s driving.',
        'The second victim phenomenon is like PTSD for providers - they suffer after errors too.'
      ],
      examples: [
        'Implementing checklists to prevent surgical errors',
        'Reducing diagnostic errors through decision support systems',
        'Addressing antibiotic resistance through stewardship',
        'Minimizing low-value care that provides no benefit but may harm',
        'Recognizing provider burnout as a patient safety risk'
      ],
      patientCounselingPoints: [
        'Modern healthcare uses system-level approaches to prevent harm.',
        'Diagnostic errors are a significant source of medical harm.',
        'Sometimes "more" treatment isn\'t better and can cause harm.',
        'Electronic health records have both benefits and risks for patient safety.',
        'End-of-life care requires special attention to non-maleficence.',
        'Healthcare provider wellness is important for patient safety.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'non-maleficence', 'patient-safety'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
