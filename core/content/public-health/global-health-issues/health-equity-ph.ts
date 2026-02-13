import { PublicHealthContent } from '../types';

export const healthEquityPH: PublicHealthContent = {
  id: 'health-equity-ph',
  title: 'Health Equity',
  category: 'Global Health',
  description: 'Achieving fair and just opportunities for everyone to be as healthy as possible',
  levels: [
    {
      level: 1,
      title: 'Understanding Health Equity',
      content: {
        summary: 'Health equity means everyone has a fair chance to be healthy. It focuses on eliminating unfair, avoidable differences in health between groups of people.',
        keyPoints: [
          'Health equity means fair opportunity for health for all',
          'Health differences exist between groups of people',
          'Some health differences are unfair and avoidable',
          'Where we live, learn, work, and play affects our health',
          'Achieving equity requires addressing root causes'
        ],
        vocabulary: [
          { term: 'Health Equity', definition: 'Fair opportunity for everyone to be healthy' },
          { term: 'Health Disparities', definition: 'Unfair differences in health between groups' },
          { term: 'Social Determinants', definition: 'Conditions where people live, work, and play' },
          { term: 'Fairness', definition: 'Justice and lack of discrimination' }
        ],
        examples: [
          'Some neighborhoods lack safe places for children to play',
          'People in poor areas may not have access to healthy food',
          'Some groups have higher rates of certain diseases',
          'Education affects health outcomes'
        ]
      }
    },
    {
      level: 2,
      title: 'Social Determinants of Health',
      content: {
        summary: 'Social determinants of health are the conditions in which people are born, grow, live, work, and age. These conditions shape health opportunities and outcomes.',
        keyPoints: [
          'Economic stability affects housing, food, and healthcare access',
          'Education influences health knowledge and opportunities',
          'Social and community context shapes health behaviors',
          'Healthcare access determines preventive and treatment services',
          'Neighborhood and built environment affects daily health choices'
        ],
        vocabulary: [
          { term: 'Social Determinants', definition: 'Conditions in environments where people live' },
          { term: 'Economic Stability', definition: 'Ability to meet basic needs consistently' },
          { term: 'Neighborhood', definition: 'Local area where people live' },
          { term: 'Built Environment', definition: 'Human-made surroundings' },
          { term: 'Food Desert', definition: 'Area with limited access to healthy food' }
        ],
        examples: [
          'Unemployment leading to loss of health insurance',
          'Low literacy affecting understanding of health information',
          'Segregation creating unequal neighborhood conditions',
          'Lack of transportation limiting healthcare access',
          'Unsafe housing contributing to asthma'
        ]
      }
    },
    {
      level: 3,
      title: 'Health Disparities and Inequities',
      content: {
        summary: 'Health disparities are differences in health outcomes between groups. When these differences are systematic, unfair, and avoidable, they represent health inequities.',
        keyPoints: [
          'Racial and ethnic minorities experience worse health outcomes',
          'Low-income populations have higher disease rates',
          'Geographic location affects health opportunities',
          'Gender creates differences in health and healthcare',
          'Structural racism drives health inequities'
        ],
        vocabulary: [
          { term: 'Health Disparity', definition: 'Difference in health between groups' },
          { term: 'Health Inequity', definition: 'Unjust, avoidable health difference' },
          { term: 'Structural Racism', definition: 'Systemic discrimination in institutions' },
          { term: 'Life Expectancy', definition: 'Average years a person is expected to live' },
          { term: 'Infant Mortality', definition: 'Death of baby before first birthday' }
        ],
        examples: [
          'Higher diabetes rates in Hispanic communities',
          'Lower life expectancy in some Southern states',
          'Black maternal mortality exceeding white rates',
          'Rural hospital closures limiting access',
          'Indigenous communities experiencing poorer health'
        ]
      }
    },
    {
      level: 4,
      title: 'Addressing Health Inequities',
      content: {
        summary: 'Achieving health equity requires multi-level strategies addressing root causes of health disparities and creating conditions for all to thrive.',
        keyPoints: [
          'Policy change addresses structural determinants of health',
          'Community empowerment builds local capacity and power',
          'Culturally competent care improves healthcare quality',
          'Workforce diversity increases cultural understanding',
          'Data collection identifies and measures disparities'
        ],
        vocabulary: [
          { term: 'Culturally Competent', definition: 'Ability to work effectively across cultures' },
          { term: 'Community Engagement', definition: 'Involving community in decisions affecting them' },
          { term: 'Social Justice', definition: 'Fairness in distribution of resources and opportunities' },
          { term: 'Targeted Intervention', definition: 'Program focused on specific population' },
          { term: 'Universal Design', definition: 'Products and environments accessible to all' }
        ],
        examples: [
          'Earned Income Tax Credit reducing poverty-related health problems',
          'Community health workers serving underserved populations',
          'Cultural competence training for healthcare providers',
          'Sickle cell disease funding addressing racial disparity',
          'Language access services in healthcare settings'
        ]
      }
    },
    {
      level: 5,
      title: 'Health Equity in Practice and Policy',
      content: {
        summary: 'Advancing health equity requires integrating equity considerations into all policies, programs, and practices through deliberate, sustained efforts.',
        keyPoints: [
          'Health in All Policies considers equity across sectors',
          'Racial equity impact assessment guides policy decisions',
          'Place-based initiatives address neighborhood disadvantages',
          'Trauma-informed approaches acknowledge historical harms',
          'Power-sharing shifts decision-making to communities'
        ],
        vocabulary: [
          { term: 'Health in All Policies', definition: 'Considering health in all government decisions' },
          { term: 'Impact Assessment', definition: 'Evaluation of policy effects on equity' },
          { term: 'Place-Based Strategy', definition: 'Intervention focused on geographic area' },
          { term: 'Historical Trauma', definition: 'Cumulative emotional harm across generations' },
          { term: 'Authentic Community Engagement', definition: 'Genuine partnership with community power-sharing' }
        ],
        examples: [
          'Housing policies addressing segregation and health',
          'Climate justice policies protecting vulnerable communities',
          'Criminal justice reform affecting public health',
          'Tribal sovereignty supporting Native American health',
          'Participatory budgeting for community health investments'
        ]
      }
    }
  ]
};
