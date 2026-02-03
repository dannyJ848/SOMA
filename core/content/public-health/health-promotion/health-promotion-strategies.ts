import { PublicHealthContent } from '../types';

export const healthPromotionStrategies: PublicHealthContent = {
  id: 'health-promotion-strategies',
  title: 'Health Promotion Strategies',
  category: 'Health Promotion',
  description: 'Approaches and methods for enabling people to increase control over and improve their health',
  levels: [
    {
      level: 1,
      title: 'What is Health Promotion?',
      content: {
        summary: 'Health promotion helps people take control of their health and create conditions for healthier lives. It focuses on preventing disease before it starts.',
        keyPoints: [
          'Health promotion builds skills and knowledge for healthy choices',
          'It creates environments that support good health',
          'Prevention is better than treatment',
          'Communities, schools, and workplaces all play important roles',
          'Everyone deserves the opportunity to be healthy'
        ],
        vocabulary: [
          { term: 'Health Promotion', definition: 'Process of enabling people to increase control over health' },
          { term: 'Prevention', definition: 'Actions to avoid disease or injury' },
          { term: 'Wellness', definition: 'Active pursuit of activities, choices, and lifestyles leading to health' },
          { term: 'Community', definition: 'Group of people living in the same area or having similar interests' }
        ],
        examples: [
          'School programs teaching children about nutrition and exercise',
          'Community gardens providing fresh vegetables',
          'Workplace wellness programs encouraging physical activity',
          'Public health campaigns about quitting smoking'
        ]
      }
    },
    {
      level: 2,
      title: 'Health Promotion Approaches',
      content: {
        summary: 'Health promotion uses multiple strategies working together at different levels to create meaningful and sustainable health improvements.',
        keyPoints: [
          'Health education builds knowledge and skills',
          'Policy change creates supportive environments',
          'Community organizing builds local capacity',
          'Environmental changes make healthy choices easier',
          'Mass media reaches large audiences with health messages'
        ],
        vocabulary: [
          { term: 'Health Education', definition: 'Activities to raise health knowledge and skills' },
          { term: 'Policy', definition: 'Laws, rules, or guidelines that guide decisions' },
          { term: 'Community Organizing', definition: 'Process of building community power to address problems' },
          { term: 'Environmental Change', definition: 'Modifying physical or social surroundings' },
          { term: 'Media Campaign', definition: 'Coordinated use of media to deliver messages' }
        ],
        examples: [
          'Nutrition classes teaching healthy cooking skills',
          'Smoke-free laws protecting people from secondhand smoke',
          'Neighborhood associations advocating for safe parks',
          'Installing sidewalks to encourage walking',
          'Anti-drug public service announcements'
        ]
      }
    },
    {
      level: 3,
      title: 'Planning Health Promotion Programs',
      content: {
        summary: 'Effective health promotion programs follow systematic planning processes to ensure they address real needs and achieve measurable outcomes.',
        keyPoints: [
          'Needs assessment identifies priority health issues',
          'Clear goals and objectives guide program design',
          'Evidence-based strategies increase effectiveness',
          'Evaluation measures impact and guides improvement',
          'Cultural competence ensures relevance to target populations'
        ],
        vocabulary: [
          { term: 'Needs Assessment', definition: 'Process of identifying and prioritizing health problems' },
          { term: 'Objectives', definition: 'Specific, measurable program targets' },
          { term: 'Evidence-Based', definition: 'Programs proven effective through research' },
          { term: 'Evaluation', definition: 'Systematic assessment of program outcomes' },
          { term: 'Cultural Competence', definition: 'Ability to work effectively across cultures' }
        ],
        examples: [
          'Surveying community members about health concerns',
          'Setting goal to reduce teen smoking by 10%',
          'Using proven curriculum for diabetes prevention',
          'Measuring fruit and vegetable consumption before and after program',
          'Adapting materials for language and literacy needs'
        ]
      }
    },
    {
      level: 4,
      title: 'Settings-Based Health Promotion',
      content: {
        summary: 'Health promotion in specific settings (schools, workplaces, healthcare, communities) creates comprehensive approaches that reach people where they live, work, learn, and play.',
        keyPoints: [
          'Healthy Schools create supportive environments for students',
          'Workplace health promotion improves employee well-being',
          'Healthcare settings offer prevention and education',
          'Healthy Communities integrate health into all policies',
          'Settings approaches integrate multiple interventions'
        ],
        vocabulary: [
          { term: 'Settings-Based Approach', definition: 'Health promotion integrated into everyday settings' },
          { term: 'Health-Promoting Schools', definition: 'Schools that actively promote health' },
          { term: 'Workplace Wellness', definition: 'Employer-sponsored health promotion programs' },
          { term: 'Community-Based', definition: 'Programs developed with and in communities' },
          { term: 'Integrated Care', definition: 'Coordinated health and social services' }
        ],
        examples: [
          'Schools requiring daily physical activity',
          'Companies offering standing desks and gym memberships',
          'Doctors prescribing exercise and nutrition counseling',
          'Cities designing walkable, bikeable streets',
          'Head Start programs combining education and health services'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Strategies and Emerging Approaches',
      content: {
        summary: 'Contemporary health promotion incorporates digital innovation, policy advocacy, health equity, and systems thinking to address complex health challenges.',
        keyPoints: [
          'Digital health technologies enable personalized intervention',
          'Health in All Policies integrates health across sectors',
          'Health equity addresses social determinants of health',
          'Systems thinking addresses complex interconnections',
          'Behavioral economics informs better intervention design'
        ],
        vocabulary: [
          { term: 'Health in All Policies', definition: 'Considering health impacts in all policy decisions' },
          { term: 'Digital Health', definition: 'Use of technology for health improvement' },
          { term: 'Health Equity', definition: 'Achieving highest level of health for all' },
          { term: 'Social Determinants', definition: 'Conditions in which people live, work, and play' },
          { term: 'Behavioral Economics', definition: 'Study of how psychology affects economic decisions' }
        ],
        examples: [
          'Mobile apps for medication adherence and behavior tracking',
          'Transportation policies that promote active commuting',
          'Housing policies addressing health impacts of substandard housing',
          'Sugar-sweetened beverage taxes using behavioral insights',
          'Place-based initiatives addressing multiple community needs'
        ]
      }
    }
  ]
};
