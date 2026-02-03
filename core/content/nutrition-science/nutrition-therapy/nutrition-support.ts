import { EducationalContent } from '../types';

export const nutritionSupport: EducationalContent = {
  id: 'nutrition-support',
  title: 'Nutrition Support',
  category: 'nutrition-therapy',
  description: 'Specialized nutrition therapy and interventions',
  levels: [
    {
      level: 1,
      title: 'Introduction to Nutrition Support',
      description: 'Overview of specialized nutrition therapy',
      content: {
        keyPoints: [
          'Nutrition support provides specialized nutrition for illness or injury',
          'Can be oral, enteral, or parenteral',
          'Used when regular food intake is inadequate',
          'Requires individualized assessment and planning',
          'Integral part of comprehensive patient care'
        ],
        definitions: [
          { term: 'Nutrition support', definition: 'Specialized nutritional therapy for patients with increased needs or impaired intake' },
          { term: 'Medical nutrition therapy', definition: 'Nutrition assessment and intervention for specific conditions' },
          { term: 'Nutrition support team', definition: 'Multidisciplinary team managing complex nutrition needs' }
        ],
        examples: [
          'Hospital nutrition support',
          'Critical care nutrition',
          'Home nutrition support',
          'Rehabilitation nutrition therapy'
        ]
      }
    },
    {
      level: 2,
      title: 'Indications for Nutrition Support',
      description: 'When specialized nutrition is needed',
      content: {
        keyPoints: [
          'Inadequate oral intake for expected duration',
          'Severe malnutrition risk or presence',
          'Increased metabolic demands',
          'Impaired nutrient absorption',
          'Specific medical conditions',
          'Pre-operative optimization'
        ],
        definitions: [
          { term: 'Malnutrition', definition: 'State of inadequate nutrition (undernutrition or overnutrition)' },
          { term: 'Hypermetabolism', definition: 'Increased metabolic rate and nutrient needs' },
          { term: 'Nutrition risk', definition: 'Likelihood of developing nutrition-related complications' }
        ],
        examples: [
          'Major trauma or burns',
          'Major abdominal surgery',
          'Head and neck cancer',
          'Neurological disorders affecting swallowing'
        ]
      }
    },
    {
      level: 3,
      title: 'Nutrition Requirements Assessment',
      description: 'Determining nutrition needs',
      content: {
        keyPoints: [
          'Energy requirement calculations',
          'Protein needs based on stress level',
          'Fluid requirements assessment',
          'Micronutrient considerations',
          'Individualized vs. equation-based estimates',
          'Monitoring and adjusting needs'
        ],
        definitions: [
          { term: 'REE', definition: 'Resting Energy Expenditure, energy used at rest' },
          { term: 'TEE', definition: 'Total Energy Expenditure, total daily energy needs' },
          { term: 'Nitrogen balance', definition: 'Comparison of protein intake to protein losses' }
        ],
        examples: [
          'Indirect calorimetry',
          'Predictive equations for energy',
          'Protein needs by condition',
          'Stress factor adjustments'
        ]
      }
    },
    {
      level: 4,
      title: 'Monitoring and Outcomes',
      description: 'Assessing effectiveness of nutrition support',
      content: {
        keyPoints: [
          'Tolerance assessment',
          'Laboratory monitoring',
          'Clinical outcomes tracking',
          'Complication surveillance',
          'Transition planning',
          'Quality metrics in nutrition support'
        ],
        definitions: [
          { term: 'Tolerance', definition: 'Ability to receive nutrition without adverse effects' },
          { term: 'Visceral proteins', definition: 'Proteins like albumin, prealbumin reflecting nutritional status' },
          { term: 'Gastric residual volume', definition: 'Amount of formula remaining in stomach' }
        ],
        examples: [
          'Daily tolerance assessment',
          'Weekly lab monitoring',
          'Weight change tracking',
          'Functional outcome measures'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Nutrition Support',
      description: 'Complex cases and emerging therapies',
      content: {
        keyPoints: [
          'Critical care nutrition protocols',
          'Immunonutrition applications',
          'Specialized formulations',
          'Ethical considerations in nutrition support',
          'Palliative care nutrition',
          'Emerging research and innovations'
        ],
        definitions: [
          { term: 'Immunonutrition', definition: 'Formulas with added nutrients to modulate immune response' },
          { term: 'Permissive underfeeding', definition: 'Providing less than calculated needs in certain critical conditions' },
          { term: 'Futility', definition: 'When nutrition support is unlikely to benefit the patient' }
        ],
        examples: [
          'ARDS nutrition protocols',
          'Sepsis nutrition strategies',
          'Oncology nutrition support',
          'End-of-life nutrition discussions'
        ]
      }
    }
  ]
};
