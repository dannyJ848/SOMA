import { EducationalContent, ContentType } from '../../types';

export const aiDiagnosis: EducationalContent = {
  id: 'ai-diagnosis',
  type: 'topic' as ContentType,
  name: 'AI-Assisted Diagnosis',
  levels: {
    1: {
      level: 1,
      summary: 'AI is becoming an invaluable partner in clinical diagnosis, helping healthcare providers make faster and more accurate decisions.',
      explanation: 'Artificial intelligence is becoming an invaluable partner in clinical diagnosis, helping healthcare providers make faster and more accurate decisions by analyzing patient data and identifying patterns that might be missed.\n\nThink of AI diagnostic tools like having a brilliant consultant who has studied millions of patient cases and can instantly recognize patterns that lead to specific diseases - while still letting the doctor make the final call about treatment.',
      keyTerms: [
        {
          term: 'AI-Assisted Diagnosis',
          definition: 'The use of artificial intelligence systems to help healthcare providers identify diseases and conditions from patient data.'
        },
        {
          term: 'Clinical Decision Support',
          definition: 'Tools that provide healthcare professionals with knowledge and person-specific information to enhance health and health care.'
        },
        {
          term: 'Diagnostic Accuracy',
          definition: 'How often a diagnostic test or AI system correctly identifies or excludes a condition.'
        }
      ],
      analogies: [
        'Like having a super-experienced specialist available 24/7 to consult on any case',
        'Similar to how a seasoned doctor develops intuition after seeing thousands of cases'
      ],
      examples: [
        'Detecting eye disease from retinal scans',
        'Identifying irregular heart rhythms from ECG data',
        'Screening for cancer in mammography images'
      ],
      clinicalNotes: 'AI diagnostic tools are already matching or exceeding human experts in certain domains, helping to reduce diagnostic errors and provide faster access to care, especially in underserved areas.'
    },
    2: {
      level: 2,
      summary: 'Different AI approaches suit different diagnostic challenges: image-based, signal-based, symptom-based, and laboratory test analysis.',
      explanation: 'Different AI approaches are suited to different diagnostic challenges, from image analysis to symptom assessment.\n\n**Image-Based Diagnosis** uses AI to analyze medical images for abnormalities. **Signal-Based Diagnosis** analyzes physiological signals like ECG, EEG, or vital signs. **Symptom-Based Diagnosis** uses patient-reported symptoms and history to suggest diagnoses. **Laboratory Test Analysis** interprets lab results in combination with other patient data.',
      keyTerms: [
        {
          term: 'Image-Based Diagnosis',
          definition: 'AI systems that analyze medical images (X-rays, CT scans, MRIs) to detect abnormalities like tumors, fractures, or organ damage.'
        },
        {
          term: 'Signal-Based Diagnosis',
          definition: 'AI systems that analyze physiological signals like ECG, EEG, or vital signs to identify cardiac, neurological, or other conditions.'
        },
        {
          term: 'Symptom-Based Diagnosis',
          definition: 'AI systems that use patient-reported symptoms and history to suggest possible diagnoses, similar to a digital consultation.'
        },
        {
          term: 'Laboratory Test Analysis',
          definition: 'AI that interprets lab results in combination with other patient data to identify patterns suggesting disease.'
        }
      ],
      examples: [
        'CNNs analyzing chest X-rays for pneumonia and tuberculosis',
        'AI detecting atrial fibrillation from smartwatch ECG data',
        'Chatbot systems assessing symptoms and recommending care levels'
      ],
      clinicalNotes: 'Different diagnostic modalities require different AI approaches. The most effective diagnostic AI systems often combine multiple data types for comprehensive assessment.'
    },
    3: {
      level: 3,
      summary: 'Developing reliable diagnostic AI requires careful attention to training data quality, ground truth labels, validation datasets, and workflow integration.',
      explanation: 'Developing reliable diagnostic AI requires careful attention to data quality, model validation, and integration into clinical workflows.\n\n**Training Data Quality** refers to the accuracy, representativeness, and proper labeling of data. **Ground Truth** is the correct diagnosis established by expert consensus or follow-up. **Validation Dataset** is separate data not used in training to evaluate performance. **Clinical Workflow Integration** determines how AI tools fit into existing processes.',
      keyTerms: [
        {
          term: 'Training Data Quality',
          definition: 'The accuracy, representativeness, and proper labeling of data used to teach AI systems, critically important for medical applications.'
        },
        {
          term: 'Ground Truth',
          definition: 'The correct diagnosis or outcome used to train and validate AI systems, often established by expert consensus or follow-up.'
        },
        {
          term: 'Validation Dataset',
          definition: 'Separate data not used in training, used to evaluate how well the AI performs on new patients.'
        },
        {
          term: 'Clinical Workflow Integration',
          definition: 'How AI tools fit into the existing processes and systems used by healthcare providers.'
        }
      ],
      examples: [
        'Using pathologist-confirmed diagnoses as ground truth for cancer detection models',
        'Validating sepsis prediction on data from different hospitals',
        'Integrating AI alerts directly into electronic health record systems'
      ],
      clinicalNotes: 'Even highly accurate AI models provide no value if they\'re not properly validated and integrated into clinical workflows in a way that supports rather than disrupts care.'
    },
    4: {
      level: 4,
      summary: 'Evaluating diagnostic AI requires metrics that reflect clinical priorities: sensitivity, specificity, AUROC, predictive values, calibration, and external validation.',
      explanation: 'Evaluating diagnostic AI requires metrics that reflect clinical priorities and real-world performance across diverse populations.\n\n**Sensitivity and Specificity** measure ability to detect disease when present and correctly identify when absent. **Area Under ROC Curve** provides comprehensive diagnostic ability measure. **Positive and Negative Predictive Value** indicate the probability results are correct. **Calibration** measures how well predicted probabilities match observed frequencies. **External Validation** tests performance on different populations or time periods.',
      keyTerms: [
        {
          term: 'Sensitivity and Specificity',
          definition: 'Sensitivity measures ability to detect disease when present; specificity measures ability to correctly identify when disease is absent.'
        },
        {
          term: 'Area Under ROC Curve',
          definition: 'A comprehensive measure of diagnostic ability across all possible decision thresholds.'
        },
        {
          term: 'Positive and Negative Predictive Value',
          definition: 'The probability that a positive or negative test result is correct, accounting for disease prevalence.'
        },
        {
          term: 'Calibration',
          definition: 'How well predicted probabilities match observed frequencies, crucial for clinical decision-making.'
        },
        {
          term: 'External Validation',
          definition: 'Testing AI performance on data from different hospitals, populations, or time periods than the training data.'
        }
      ],
      examples: [
        'High sensitivity required for cancer screening to avoid missing cases',
        'Well-calibrated models needed for reliable risk communication',
        'Performance drops observed when models deployed at new institutions'
      ],
      clinicalNotes: 'Diagnostic AI must be evaluated on metrics that matter for patient outcomes and validated across diverse settings to ensure equitable and reliable performance.'
    },
    5: {
      level: 5,
      summary: 'Diagnostic AI faces challenges including regulation, explainability, human oversight, continuous learning, and distribution shift.',
      explanation: 'Diagnostic AI faces challenges including regulation, explainability, and maintaining human oversight. The future lies in augmenting rather than replacing clinicians.\n\n**Regulatory Approval** requires rigorous evidence of safety and effectiveness. **Explainability** provides explanations clinicians can understand and trust. **Human-in-the-Loop** designs maintain human oversight for final decisions. **Continuous Learning** enables systems to improve from new cases. **Distribution Shift** occurs when patient populations or practices change over time.',
      keyTerms: [
        {
          term: 'Regulatory Approval',
          definition: 'The process by which medical AI systems receive approval from regulatory bodies like the FDA, requiring rigorous evidence of safety and efficacy.'
        },
        {
          term: 'Explainability',
          definition: 'The ability of AI systems to provide explanations for their decisions that clinicians can understand and trust.'
        },
        {
          term: 'Human-in-the-Loop',
          definition: 'Designing AI systems to assist rather than replace clinicians, maintaining human oversight for final decisions.'
        },
        {
          term: 'Continuous Learning',
          definition: 'Systems that update and improve from new cases and feedback, adapting to changes in medical practice.'
        },
        {
          term: 'Distribution Shift',
          definition: 'When patient populations or medical practices change over time, potentially degrading AI performance.'
        }
      ],
      examples: [
        'FDA-approved AI devices for diabetic retinopathy and radiology',
        'Attention maps showing which image regions led to a diagnosis',
        'Models requiring periodic retraining to maintain performance'
      ],
      clinicalNotes: 'The most successful diagnostic AI systems enhance clinician capabilities while maintaining appropriate human oversight. Continuous monitoring and updating are essential for long-term success.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['ai-medicine', 'diagnosis', 'clinical-decision-support'],
    clinicalRelevance: 'high'
  },
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
  version: 1,
  status: 'published'
};
