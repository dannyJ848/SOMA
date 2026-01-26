import { EducationalContent, ContentType } from '../../types';

export const naturalLanguageML: EducationalContent = {
  id: 'natural-language-ml',
  type: 'topic' as ContentType,
  name: 'Natural Language Processing in Medicine',
  levels: {
    1: {
      level: 1,
      summary: 'Natural Language Processing enables computers to understand and generate human language, transforming how we interact with clinical notes and medical documentation.',
      explanation: 'Natural Language Processing (NLP) enables computers to understand and generate human language. In medicine, NLP is transforming how we interact with clinical notes, medical literature, and patient communication.\n\nThink of NLP like having a super-powered medical assistant who can read thousands of pages of medical records in seconds and pull out exactly what you need - whether it\'s finding all mentions of a medication, summarizing a patient\'s history, or converting spoken notes into written text.',
      keyTerms: [
        {
          term: 'Natural Language Processing',
          definition: 'The field of AI that enables computers to understand, interpret, and generate human language.'
        },
        {
          term: 'Clinical Notes',
          definition: 'Free-text documentation written by healthcare providers during patient encounters, containing valuable information not captured elsewhere.'
        },
        {
          term: 'Text Extraction',
          definition: 'Pulling specific pieces of information from medical documents, such as diagnoses or medications.'
        }
      ],
      analogies: [
        'Like having a research assistant who can instantly find any information across thousands of medical records',
        'Similar to how Siri or Alexa understand speech commands, but specialized for medical terminology'
      ],
      examples: [
        'Extracting medications from doctor\'s visit notes',
        'Summarizing long medical reports into key findings',
        'Voice-to-text conversion for medical dictation'
      ],
      clinicalNotes: 'Up to 80% of patient information in electronic health records is stored as unstructured text. NLP unlocks this valuable data for analysis and decision support.'
    },
    2: {
      level: 2,
      summary: 'Clinical NLP involves fundamental tasks: tokenization, part-of-speech tagging, named entity recognition, and negation detection.',
      explanation: 'Clinical NLP involves several fundamental tasks that transform raw text into structured, analyzable data. Each task builds on the previous to extract increasingly sophisticated insights.\n\n**Tokenization** breaks text into individual words or meaningful units. **Part-of-Speech Tagging** identifies whether words are nouns, verbs, adjectives, etc. **Named Entity Recognition (NER)** identifies and classifies medical entities like diseases, medications, symptoms, and body parts. **Negation Detection** determines if a condition is present or explicitly denied (e.g., "no chest pain" vs "chest pain").',
      keyTerms: [
        {
          term: 'Tokenization',
          definition: 'Breaking text into individual words or meaningful units, the first step in processing clinical text.'
        },
        {
          term: 'Part-of-Speech Tagging',
          definition: 'Identifying whether words are nouns, verbs, adjectives, etc., helping understand sentence structure and meaning.'
        },
        {
          term: 'Named Entity Recognition (NER)',
          definition: 'Identifying and classifying medical entities like diseases, medications, symptoms, and body parts in text.'
        },
        {
          term: 'Negation Detection',
          definition: 'Determining if a medical condition is present or explicitly denied (e.g., "no chest pain" vs "chest pain").'
        }
      ],
      examples: [
        'Extracting "lisinopril 10mg daily" as a medication entity',
        'Recognizing that "patient denies fever" means fever is absent',
        'Identifying "myocardial infarction" as a disease entity'
      ],
      clinicalNotes: 'These fundamental tasks enable automated coding, quality measurement, and clinical decision support by converting narrative text into structured data that can be analyzed and acted upon.'
    },
    3: {
      level: 3,
      summary: 'Text classification applies labels to clinical documents for workflow routing, quality assessment, and research cohort identification.',
      explanation: 'Classification applies labels to clinical documents or sections, enabling automated workflow routing, quality assessment, and research cohort identification.\n\n**Document Classification** categorizes entire clinical documents into types like admission notes, discharge summaries, or radiology reports. **Section Segmentation** identifies standard sections in clinical notes like "History of Present Illness" or "Assessment and Plan". **Sentiment Analysis** detects patient satisfaction or emotional tone. **Topic Modeling** discovers themes across large collections of clinical documents without predefined labels.',
      keyTerms: [
        {
          term: 'Document Classification',
          definition: 'Categorizing entire clinical documents into types like admission notes, discharge summaries, or radiology reports.'
        },
        {
          term: 'Section Segmentation',
          definition: 'Identifying standard sections in clinical notes like "History of Present Illness" or "Assessment and Plan".'
        },
        {
          term: 'Sentiment Analysis',
          definition: 'Detecting patient satisfaction or emotional tone from clinical communication.'
        },
        {
          term: 'Topic Modeling',
          definition: 'Discovering themes across large collections of clinical documents without predefined labels.'
        }
      ],
      examples: [
        'Automatically identifying discharge summaries for readmission risk analysis',
        'Classifying radiology reports by urgency (normal, abnormal, critical)',
        'Detecting themes in patient feedback to improve service quality'
      ],
      clinicalNotes: 'Text classification automates manual chart review processes, supports quality improvement initiatives, and enables efficient identification of patient cohorts for research and clinical trials.'
    },
    4: {
      level: 4,
      summary: 'Large language models like GPT have revolutionized clinical NLP, enabling sophisticated understanding and generation of medical text.',
      explanation: 'Large language models (LLMs) like GPT and specialized medical models have revolutionized clinical NLP, enabling sophisticated understanding and generation of medical text.\n\n**Large Language Models** are neural networks trained on vast amounts of text that can understand and generate human-like responses. **Contextual Embeddings** provide rich numerical representations of words that capture meaning based on surrounding context. **Fine-Tuning** adapts pre-trained language models to specific medical tasks. **Prompt Engineering** carefully designs input prompts to elicit desired outputs. **Retrieval Augmented Generation (RAG)** combines LLMs with external medical knowledge bases.',
      keyTerms: [
        {
          term: 'Large Language Models',
          definition: 'Neural networks trained on vast amounts of text that can understand and generate human-like responses, including clinical text.'
        },
        {
          term: 'Contextual Embeddings',
          definition: 'Rich numerical representations of words that capture meaning based on surrounding context.'
        },
        {
          term: 'Fine-Tuning',
          definition: 'Adapting pre-trained language models to specific medical tasks using smaller clinical datasets.'
        },
        {
          term: 'Prompt Engineering',
          definition: 'Carefully designing input prompts to elicit desired outputs from language models for clinical applications.'
        },
        {
          term: 'Retrieval Augmented Generation (RAG)',
          definition: 'Combining LLMs with external medical knowledge bases to provide accurate, up-to-date clinical information.'
        }
      ],
      examples: [
        'Generating discharge summaries from hospital course documentation',
        'Answering clinical questions by searching medical literature',
        'Simplifying complex medical information for patient education'
      ],
      clinicalNotes: 'LLMs are transforming clinical documentation, decision support, and patient communication. However, careful validation is required to ensure accuracy and safety in medical applications.'
    },
    5: {
      level: 5,
      summary: 'Advanced clinical NLP includes information extraction, temporal reasoning, coreference resolution, de-identification, and addressing bias and fairness.',
      explanation: 'The frontier of clinical NLP includes information extraction from unstructured data, cross-document reasoning, and addressing challenges specific to medical text.\n\n**Information Extraction** identifies relationships between medical entities. **Temporal Reasoning** understands when events occurred and their relationships. **Coreference Resolution** determines what pronouns and phrases refer to in complex text. **De-identification** removes protected health information to enable data sharing. **Bias and Fairness** ensures NLP systems work equally well across diverse patient populations.',
      keyTerms: [
        {
          term: 'Information Extraction',
          definition: 'Identifying relationships between medical entities, such as which medication treats which condition.'
        },
        {
          term: 'Temporal Reasoning',
          definition: 'Understanding when events occurred and their temporal relationships in clinical narratives.'
        },
        {
          term: 'Coreference Resolution',
          definition: 'Determining what pronouns and phrases refer to in complex clinical text (e.g., what "it" refers to).'
        },
        {
          term: 'De-identification',
          definition: 'Removing or obscuring protected health information to enable data sharing while maintaining patient privacy.'
        },
        {
          term: 'Bias and Fairness',
          definition: 'Ensuring NLP systems work equally well across diverse patient populations and do not perpetuate healthcare disparities.'
        }
      ],
      examples: [
        'Extracting temporal sequences from chart notes to understand disease progression',
        'De-identifying clinical notes for research use while preserving clinical meaning',
        'Detecting and mitigating bias in clinical decision support systems'
      ],
      clinicalNotes: 'Advanced NLP capabilities will enable comprehensive clinical data extraction, support complex clinical reasoning, and facilitate data sharing for research while protecting patient privacy and ensuring equitable care.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['ai-medicine', 'nlp', 'clinical-text'],
    clinicalRelevance: 'high'
  },
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
  version: 1,
  status: 'published'
};
