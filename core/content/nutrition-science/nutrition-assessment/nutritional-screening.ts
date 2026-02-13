import { EducationalContent } from '../types';

export const nutritionalScreening: EducationalContent = {
  id: 'nutritional-screening',
  title: 'Nutritional Screening',
  category: 'nutrition-assessment',
  description: 'Tools and methods for identifying nutritional risk',
  levels: [
    {
      level: 1,
      title: 'Introduction to Nutritional Screening',
      description: 'Purpose and importance of nutritional screening',
      content: {
        keyPoints: [
          'Nutritional screening identifies patients at nutritional risk',
          'Screening is the first step in the nutrition care process',
          'Should be quick, simple, and cost-effective',
          'All patients should be screened upon admission',
          'Positive screening leads to comprehensive assessment'
        ],
        definitions: [
          { term: 'Screening', definition: 'Rapid process to identify individuals who are at nutritional risk' },
          { term: 'Assessment', definition: 'Comprehensive evaluation of nutritional status' },
          { term: 'Malnutrition', definition: 'State of inadequate, excessive, or imbalanced nutrition' }
        ],
        examples: [
          'Hospital admission screening',
          'Clinic waiting room questionnaires',
          'Community nutrition screening',
          'Home care screening tools'
        ]
      }
    },
    {
      level: 2,
      title: 'Screening Tools Overview',
      description: 'Commonly used nutritional screening instruments',
      content: {
        keyPoints: [
          'MUST (Malnutrition Universal Screening Tool) widely used',
          'MNA (Mini Nutritional Assessment) for elderly',
          'STAMP for pediatric patients',
          'MST (Malnutrition Screening Tool) simple and quick',
          'Each tool has specific applications and populations',
          'Choice depends on setting and patient population'
        ],
        definitions: [
          { term: 'MUST', definition: 'Malnutrition Universal Screening Tool, developed by BAPEN' },
          { term: 'MNA', definition: 'Mini Nutritional Assessment, designed for elderly patients' },
          { term: 'STAMP', definition: 'Screening Tool for the Assessment of Malnutrition in Pediatrics' }
        ],
        examples: [
          'MUST scoring interpretation',
          'MNA screening categories',
          'Pediatric screening considerations',
          'Community screening adaptations'
        ]
      }
    },
    {
      level: 3,
      title: 'Risk Factor Identification',
      description: 'Key indicators of nutritional risk',
      content: {
        keyPoints: [
          'Inadequate oral intake is a primary risk factor',
          'Unintentional weight loss significance',
          'Disease-related nutritional impact',
          'Physical symptoms affecting intake',
          'Medication effects on nutrition',
          'Social and economic factors'
        ],
        definitions: [
          { term: 'Unintentional weight loss', definition: 'Weight decrease without intentional dieting' },
          { term: 'Nutritional impact symptoms', definition: 'Symptoms directly affecting food intake or nutrient absorption' },
          { term: 'Food insecurity', definition: 'Limited or uncertain access to adequate food' }
        ],
        examples: [
          'Recent surgery increasing nutritional needs',
          'Chronic disease affecting intake',
          'Depression and appetite changes',
          'Social isolation and meal access'
        ]
      }
    },
    {
      level: 4,
      title: 'Implementation Protocols',
      description: 'Screening procedures in healthcare settings',
      content: {
        keyPoints: [
          'Timing of screening assessments',
          'Who should perform screening',
          'Documentation and follow-up procedures',
          'Quality improvement in screening processes',
          'Interdisciplinary communication',
          'Screening as a trigger for nutrition intervention'
        ],
        definitions: [
          { term: 'Re-screening', definition: 'Repeat screening at specified intervals' },
          { term: 'Referral', definition: 'Directing a patient to a dietitian or other specialist' },
          { term: 'Care pathway', definition: 'Structured plan for patient care including nutrition' }
        ],
        examples: [
          'Hospital screening protocols',
          'Outpatient clinic procedures',
          'Long-term care requirements',
          'Home care screening schedules'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Screening Applications',
      description: 'Special populations and emerging approaches',
      content: {
        keyPoints: [
          'Screening in oncology populations',
          'Critical care screening considerations',
          'Pediatric developmental considerations',
          'Geriatric frailty and nutrition',
          'Electronic health record integration',
          'Artificial intelligence in screening',
          'Screening effectiveness research'
        ],
        definitions: [
          { term: 'Cachexia', definition: 'Complex metabolic syndrome associated with underlying illness' },
          { term: 'Sarcopenia', definition: 'Age-related loss of muscle mass and strength' },
          { term: 'Frailty', definition: 'Decreased physiological reserve and resistance to stressors' }
        ],
        examples: [
          'Cancer malnutrition screening',
          'ICU nutrition risk assessment',
          'Preoperative screening protocols',
          'Telehealth screening adaptations'
        ]
      }
    }
  ]
};
