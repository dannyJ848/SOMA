import { PublicHealthContent } from '../types';

export const secondaryPreventionPH: PublicHealthContent = {
  id: 'secondary-prevention-ph',
  title: 'Secondary Prevention',
  category: 'Disease Prevention',
  description: 'Early detection and intervention to prevent disease progression',
  levels: [
    {
      level: 1,
      title: 'Understanding Secondary Prevention',
      content: {
        summary: 'Secondary prevention means finding diseases early, before symptoms appear. When caught early, diseases are easier to treat and have better outcomes.',
        keyPoints: [
          'Secondary prevention detects disease early in its course',
          'Screening tests find problems before symptoms appear',
          'Early treatment works better and prevents complications',
          'Regular checkups include important screenings',
          'Finding problems early can save lives'
        ],
        vocabulary: [
          { term: 'Secondary Prevention', definition: 'Early detection and intervention for disease' },
          { term: 'Screening', definition: 'Testing for disease in people without symptoms' },
          { term: 'Early Detection', definition: 'Finding disease at an early stage' },
          { term: 'Symptoms', definition: 'Physical signs of illness' }
        ],
        examples: [
          'Mammogram to find breast cancer early',
          'Blood pressure check to detect hypertension',
          'Colonoscopy to find and remove colon polyps',
          'Blood sugar test for diabetes screening'
        ]
      }
    },
    {
      level: 2,
      title: 'Screening Tests and Programs',
      content: {
        summary: 'Screening programs identify individuals at risk or in early stages of disease, enabling intervention before significant harm occurs.',
        keyPoints: [
          'Cancer screening finds tumors at early, treatable stages',
          'Cardiovascular screening detects risk factors and early disease',
          'Infectious disease screening prevents transmission',
          'Developmental screening identifies children needing early intervention',
          'Newborn screening detects congenital conditions at birth'
        ],
        vocabulary: [
          { term: 'False Positive', definition: 'Test indicating disease when none is present' },
          { term: 'False Negative', definition: 'Test missing disease that is present' },
          { term: 'Sensitivity', definition: 'Test ability to correctly identify those with disease' },
          { term: 'Specificity', definition: 'Test ability to correctly identify those without disease' },
          { term: 'Lead Time Bias', definition: 'Earlier detection creating illusion of longer survival' }
        ],
        examples: [
          'Pap test detecting cervical cancer early',
          'Cholesterol screening identifying heart disease risk',
          'HIV testing enabling early treatment',
          'Childhood vision screening preventing learning problems',
          'Newborn screening for phenylketonuria (PKU)'
        ]
      }
    },
    {
      level: 3,
      title: 'Criteria for Effective Screening',
      content: {
        summary: 'Not all diseases are suitable for screening. Effective screening programs must meet specific criteria to do more good than harm.',
        keyPoints: [
          'Disease must be important health problem',
          'Detectable pre-symptomatic period must exist',
          'Effective treatment must be available for early disease',
          'Test must be accurate, acceptable, and affordable',
          'Benefits must outweigh harms and costs'
        ],
        vocabulary: [
          { term: 'Wilson and Jungner Criteria', definition: 'Principles for evaluating screening programs' },
          { term: 'Positive Predictive Value', definition: 'Probability disease is present with positive test' },
          { term: 'Negative Predictive Value', definition: 'Probability disease is absent with negative test' },
          { term: 'Overdiagnosis', definition: 'Detecting disease that would never cause symptoms' },
          { term: 'Number Needed to Screen', definition: 'People screened to prevent one case/death' }
        ],
        examples: [
          'Evaluating lung cancer screening for smokers',
          'Debating PSA screening for prostate cancer',
          'Assessing mammography benefits and harms',
          'Determining optimal screening intervals',
          'Age recommendations for cancer screening'
        ]
      }
    },
    {
      level: 4,
      title: 'Screening Implementation and Challenges',
      content: {
        summary: 'Implementing effective screening programs requires addressing access, quality, equity, and follow-up to ensure population benefit.',
        keyPoints: [
          'Access barriers limit screening uptake in underserved populations',
          'Quality assurance ensures test accuracy and consistency',
          'Screening uptake depends on provider recommendation and patient acceptance',
          'Follow-up of abnormal results is essential for benefit',
          'Health disparities affect screening outcomes'
        ],
        vocabulary: [
          { term: 'Uptake', definition: 'Proportion of eligible population receiving screening' },
          { term: 'Adherence', definition: 'Following screening recommendations and follow-up' },
          { term: 'Health Disparities', definition: 'Preventable differences in health outcomes' },
          { term: 'Recall', definition: 'Bringing patients back for follow-up testing' },
          { term: 'Informed Decision Making', definition: 'Patient understanding of benefits and harms' }
        ],
        examples: [
          'Patient navigation improving colonoscopy completion',
          'Mobile mammography serving rural communities',
          'Culturally tailored outreach increasing screening',
          'Reminder systems improving screening adherence',
          'Standardized quality measures for screening tests'
        ]
      }
    },
    {
      level: 5,
      title: 'Advances in Early Detection',
      content: {
        summary: 'Emerging technologies and approaches are expanding and improving secondary prevention through precision screening, biomarkers, and artificial intelligence.',
        keyPoints: [
          'Risk-stratified screening personalizes recommendations',
          'Liquid biopsy and blood tests enable less invasive detection',
          'Artificial intelligence improves test accuracy and efficiency',
          'Multi-cancer detection tests screen for multiple cancers simultaneously',
          'Genetic screening identifies hereditary cancer risk'
        ],
        vocabulary: [
          { term: 'Biomarker', definition: 'Measurable indicator of disease or risk' },
          { term: 'Liquid Biopsy', definition: 'Blood test detecting cancer DNA' },
          { term: 'Risk Stratification', definition: 'Categorizing by risk level to guide care' },
          { term: 'Precision Screening', definition: 'Personalized screening based on individual risk' },
          { term: 'Polygenic Risk Score', definition: 'Genetic estimate of disease risk' }
        ],
        examples: [
          'Lung cancer screening based on risk calculator',
          'CancerSEEK blood test detecting multiple cancers',
          'AI analysis of mammograms improving detection',
          'GRAIL multi-cancer early detection test',
          'BRCA testing guiding breast cancer screening'
        ]
      }
    }
  ]
};
