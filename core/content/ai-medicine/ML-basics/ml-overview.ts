import { EducationalContent, ContentType } from '../../types';

export const mlOverview: EducationalContent = {
  id: 'ml-overview',
  type: 'topic' as ContentType,
  name: 'Machine Learning in Medicine: An Overview',
  levels: {
    1: {
      level: 1,
      summary: 'Machine learning enables computers to learn from data and help doctors make better predictions and diagnoses.',
      explanation: 'Machine learning (ML) is a branch of artificial intelligence that enables computers to learn patterns from data without being explicitly programmed. In medicine, ML algorithms can analyze vast amounts of patient data to identify patterns that humans might miss.\n\nThink of ML like a very observant medical student who has studied millions of patient cases. After seeing so many examples, the student can recognize patterns that lead to specific diseases, predict which patients might get sick, or suggest the best treatment options.',
      keyTerms: [
        {
          term: 'Machine Learning',
          definition: 'A technology that allows computers to learn from data and make predictions or decisions.'
        },
        {
          term: 'Training Data',
          definition: 'The dataset used to teach a machine learning model to recognize patterns.'
        },
        {
          term: 'Prediction',
          definition: 'The output or decision made by a machine learning model after analyzing new data.'
        }
      ],
      analogies: [
        'Like a medical resident who learns from seeing many patients and gradually gets better at diagnosis',
        'Similar to how email spam filters learn which emails are junk based on millions of examples'
      ],
      examples: [
        'Email spam filters learning to identify junk mail',
        'Netflix recommending movies based on viewing history',
        'Phones recognizing faces for security'
      ],
      clinicalNotes: 'ML is already helping doctors predict which patients are at risk of developing conditions like sepsis or heart failure, allowing for earlier intervention.'
    },
    2: {
      level: 2,
      summary: 'There are three main types of machine learning: supervised learning from labeled examples, unsupervised learning finding hidden patterns, and reinforcement learning through trial and error.',
      explanation: 'Machine learning algorithms are categorized by how they learn from data. Understanding these types helps healthcare professionals choose the right approach for clinical problems.\n\n**Supervised Learning** learns from labeled examples where the correct answer is known, like diagnosing disease from labeled patient records. **Unsupervised Learning** finds hidden patterns in unlabeled data, such as discovering patient subgroups with similar characteristics. **Reinforcement Learning** learns through trial and error by receiving rewards or penalties, useful for treatment optimization strategies.',
      keyTerms: [
        {
          term: 'Supervised Learning',
          definition: 'Learning from labeled examples where the correct answer is known, like diagnosing disease from labeled patient records.'
        },
        {
          term: 'Unsupervised Learning',
          definition: 'Finding hidden patterns in unlabeled data, such as discovering patient subgroups with similar characteristics.'
        },
        {
          term: 'Reinforcement Learning',
          definition: 'Learning through trial and error by receiving rewards or penalties, useful for treatment optimization strategies.'
        },
        {
          term: 'Features',
          definition: 'Individual measurable properties or characteristics of data, such as blood pressure, age, or lab values.'
        }
      ],
      examples: [
        'Supervised: Predicting diabetes risk from patient vitals and lab results',
        'Unsupervised: Clustering patients into groups based on similar symptoms',
        'Reinforcement: Optimizing medication dosages over time based on patient response'
      ],
      clinicalNotes: 'Most clinical AI applications use supervised learning because medical records contain well-documented diagnoses that serve as training labels. Unsupervised learning helps discover new disease phenotypes.'
    },
    3: {
      level: 3,
      summary: 'Building a medical ML system involves several critical steps: data preprocessing, feature engineering, model training, validation, and deployment.',
      explanation: 'Building a medical ML system involves several critical steps, from data collection to model deployment. Each step presents unique challenges in the healthcare context.\n\n**Data Preprocessing** cleans and transforms raw clinical data into a format suitable for ML algorithms. **Feature Engineering** creates new features from raw clinical data that better represent underlying patterns. **Model Training** feeds data into an algorithm to adjust its parameters and learn patterns. **Validation** tests the model on separate data to ensure it performs well on unseen patients. **Deployment** integrates the trained model into clinical workflow systems.',
      keyTerms: [
        {
          term: 'Data Preprocessing',
          definition: 'Cleaning and transforming raw clinical data into a format suitable for ML algorithms, including handling missing values and normalizing measurements.'
        },
        {
          term: 'Feature Engineering',
          definition: 'Creating new features from raw clinical data that better represent the underlying patterns, such as deriving BMI from height and weight.'
        },
        {
          term: 'Model Training',
          definition: 'The process of feeding data into an algorithm to adjust its parameters and learn patterns.'
        },
        {
          term: 'Validation',
          definition: 'Testing the model on separate data to ensure it performs well on unseen patients.'
        },
        {
          term: 'Deployment',
          definition: 'Integrating the trained model into clinical workflow systems for real-time predictions.'
        }
      ],
      examples: [
        'Converting free-text notes into structured features using natural language processing',
        'Handling irregular time intervals in electronic health record data',
        'Using temporal splitting to ensure validation data comes from later time periods'
      ],
      clinicalNotes: 'A well-designed ML pipeline is essential for clinical utility. Models must be continuously monitored and updated as medical practices and patient populations evolve.'
    },
    4: {
      level: 4,
      summary: 'Evaluating ML models in medicine requires metrics aligned with clinical priorities: sensitivity, specificity, predictive values, AUROC, and calibration.',
      explanation: 'Evaluating ML models in medicine requires careful consideration of clinical priorities. Traditional metrics may not capture what matters most for patient care.\n\n**Sensitivity (Recall)** measures the proportion of actual positive cases correctly identified - critical when missing a diagnosis has serious consequences. **Specificity** measures the proportion of actual negative cases correctly identified - important to avoid false alarms. **PPV and NPV** indicate the probability that a positive or negative result is correct, depending on disease prevalence. **AUROC** measures the model\'s ability to distinguish between classes across all thresholds. **Calibration** ensures predicted probabilities match actual observed frequencies.',
      keyTerms: [
        {
          term: 'Sensitivity (Recall)',
          definition: 'The proportion of actual positive cases correctly identified - critical when missing a diagnosis has serious consequences.'
        },
        {
          term: 'Specificity',
          definition: 'The proportion of actual negative cases correctly identified - important to avoid false alarms and unnecessary treatment.'
        },
        {
          term: 'PPV and NPV',
          definition: 'Positive and Negative Predictive Values indicate the probability that a positive or negative result is correct, depending on disease prevalence.'
        },
        {
          term: 'AUROC',
          definition: 'Area Under the Receiver Operating Characteristic curve - measures the model\'s ability to distinguish between classes across all thresholds.'
        },
        {
          term: 'Calibration',
          definition: 'How well the model\'s predicted probabilities match actual observed frequencies - crucial for clinical decision making.'
        }
      ],
      examples: [
        'Cancer screening prioritizes high sensitivity to avoid missing tumors',
        'Sepsis prediction requires high calibration for reliable probability estimates',
        'Cross-validation ensures models generalize across different hospitals'
      ],
      clinicalNotes: 'Model evaluation must align with clinical goals. A model with impressive overall accuracy may still fail if it performs poorly on important patient subgroups or rare conditions.'
    },
    5: {
      level: 5,
      summary: 'Medical ML faces unique challenges including data quality, regulatory requirements, domain shift, and the need for interpretable models and causal inference.',
      explanation: 'Medical ML faces unique challenges including data quality, regulatory requirements, and the need for interpretable models. The future lies in addressing these challenges while expanding clinical applications.\n\n**Data Quality Issues** include missing values, measurement errors, and biases that can significantly impact model performance. **Domain Shift** occurs when the relationship between features and outcomes changes over time or across settings. **Federated Learning** trains models across institutions without sharing patient data. **Transfer Learning** adapts models trained on large datasets to specific clinical tasks. **Causal Inference** moves beyond correlation to understand causal relationships.',
      keyTerms: [
        {
          term: 'Data Quality Issues',
          definition: 'Electronic health records contain missing values, measurement errors, and biases that can significantly impact model performance.'
        },
        {
          term: 'Domain Shift',
          definition: 'When the relationship between features and outcomes changes over time or across different healthcare settings, requiring model adaptation.'
        },
        {
          term: 'Federated Learning',
          definition: 'Training models across multiple institutions without sharing patient data, addressing privacy concerns while leveraging larger datasets.'
        },
        {
          term: 'Transfer Learning',
          definition: 'Adapting models trained on large datasets to specific clinical tasks or smaller populations.'
        },
        {
          term: 'Causal Inference',
          definition: 'Moving beyond correlation to understand causal relationships, essential for treatment recommendations.'
        }
      ],
      examples: [
        'Models developed at academic medical centers may not perform well at community hospitals',
        'COVID-19 caused significant domain shift in many clinical prediction models',
        'Federated learning enables large-scale model training while preserving patient privacy'
      ],
      clinicalNotes: 'The successful implementation of ML in medicine requires addressing technical, regulatory, and ethical challenges. The most promising approaches combine ML capabilities with clinical expertise and robust validation frameworks.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['ai-medicine', 'machine-learning'],
    clinicalRelevance: 'high'
  },
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
  version: 1,
  status: 'published'
};
