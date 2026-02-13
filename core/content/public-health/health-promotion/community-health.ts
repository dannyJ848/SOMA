import { PublicHealthContent } from '../types';

export const communityHealth: PublicHealthContent = {
  id: 'community-health',
  title: 'Community Health',
  category: 'Health Promotion',
  description: 'Health outcomes of a group of individuals and the approaches to improve population health at the community level',
  levels: [
    {
      level: 1,
      title: 'Introduction to Community Health',
      content: {
        summary: 'Community health focuses on the health and well-being of people where they live, work, learn, and play. Healthy communities make healthy people.',
        keyPoints: [
          'Community health looks at groups, not just individuals',
          'Where we live affects our health opportunities',
          'Community resources like parks, clinics, and stores matter',
          'Social connections impact community health',
          'Everyone can help improve community health'
        ],
        vocabulary: [
          { term: 'Community', definition: 'Group of people living in the same area or sharing interests' },
          { term: 'Public Health', definition: 'Science of protecting and improving community health' },
          { term: 'Resources', definition: 'Assets that help people stay healthy' },
          { term: 'Environment', definition: 'Surroundings and conditions in which people live' }
        ],
        examples: [
          'Neighborhood park where children play safely',
          'Community clinic providing affordable care',
          'Farmers market with fresh local produce',
          'Block parties that build neighbor connections'
        ]
      }
    },
    {
      level: 2,
      title: 'Community Health Assessment',
      content: {
        summary: 'Understanding community health needs requires systematic assessment of health status, resources, risks, and community perspectives.',
        keyPoints: [
          'Health data identifies community health problems',
          'Asset mapping finds community resources and strengths',
          'Community input ensures local priorities guide work',
          'Social determinants shape community health outcomes',
          'Assessment informs action and resource allocation'
        ],
        vocabulary: [
          { term: 'Health Assessment', definition: 'Process of collecting and analyzing community health data' },
          { term: 'Assets', definition: 'Strengths and resources in a community' },
          { term: 'Social Determinants', definition: 'Social and economic conditions affecting health' },
          { term: 'Disparities', definition: 'Differences in health outcomes between groups' },
          { term: 'Stakeholders', definition: 'People with interest in community health' }
        ],
        examples: [
          'Surveying residents about neighborhood health concerns',
          'Mapping locations of grocery stores and fast food',
          'Analyzing disease rates by neighborhood',
          'Community forums gathering input on health priorities',
          'Assessing walkability and safety of streets'
        ]
      }
    },
    {
      level: 3,
      title: 'Community Health Interventions',
      content: {
        summary: 'Effective community health interventions engage community members, build on local assets, and address multiple levels of influence simultaneously.',
        keyPoints: [
          'Community-based participatory research involves community as partners',
          'Coalitions bring organizations together for collective action',
          'Policy change creates lasting environmental improvements',
          'Programs address specific health issues in communities',
          'Sustainability ensures continued benefit after funding ends'
        ],
        vocabulary: [
          { term: 'CBPR', definition: 'Community-Based Participatory Research' },
          { term: 'Coalition', definition: 'Alliance of organizations working together' },
          { term: 'Sustainability', definition: 'Ability to maintain benefits over time' },
          { term: 'Capacity Building', definition: 'Developing skills and resources in communities' },
          { term: 'Community Engagement', definition: 'Process of involving community in decisions' }
        ],
        examples: [
          'Community-academic partnership studying asthma',
          'Safe Routes to School coalition advocating for walking paths',
          'Local smoke-free ordinance protecting clean indoor air',
          'Diabetes prevention program offered at community centers',
          'Training community health workers from the neighborhood'
        ]
      }
    },
    {
      level: 4,
      title: 'Building Healthy Communities',
      content: {
        summary: 'Creating healthy communities requires addressing physical, social, economic, and policy environments that shape health opportunities for all residents.',
        keyPoints: [
          'Built environment affects physical activity and access to resources',
          'Social capital and cohesion influence health behaviors',
          'Economic opportunity enables healthy choices',
          'Policies and regulations create conditions for health',
          'Health equity ensures fair opportunity for all'
        ],
        vocabulary: [
          { term: 'Built Environment', definition: 'Human-made surroundings including buildings and infrastructure' },
          { term: 'Social Capital', definition: 'Networks of relationships enabling society to function' },
          { term: 'Health Equity', definition: 'Fair opportunity for everyone to be healthy' },
          { term: 'Food Security', definition: 'Access to sufficient, safe, nutritious food' },
          { term: 'Gentrification', definition: 'Displacement of residents due to neighborhood improvement' }
        ],
        examples: [
          'Sidewalks, bike lanes, and parks promoting active living',
          'Community gardens building social connections and food access',
          'Living wage policies reducing poverty-related health problems',
          'Affordable housing preventing homelessness and health risks',
          'Inclusionary zoning preserving mixed-income communities'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Community Health Strategies',
      content: {
        summary: 'Complex community health challenges require systems thinking, cross-sector collaboration, and innovative approaches that address root causes of health outcomes.',
        keyPoints: [
          'Health in All Policies integrates health across government sectors',
          'Collective impact aligns diverse organizations around shared goals',
          'Place-based initiatives address interconnected neighborhood challenges',
          'Trauma-informed approaches recognize community trauma history',
          'Resilience building strengthens community capacity to adapt'
        ],
        vocabulary: [
          { term: 'Health in All Policies', definition: 'Systematic consideration of health in all decisions' },
          { term: 'Collective Impact', definition: 'Structured approach to multi-sector collaboration' },
          { term: 'Place-Based', definition: 'Focusing interventions in specific geographic areas' },
          { term: 'Trauma-Informed', definition: 'Understanding and responding to trauma effects' },
          { term: 'Community Resilience', definition: 'Ability to adapt and recover from adversity' }
        ],
        examples: [
          'Housing departments addressing health impacts of policies',
          'Cradle-to-Career education initiatives improving long-term health',
          'Promise Neighborhoods transforming distressed communities',
          'Restorative justice addressing community trauma',
          'Climate adaptation planning protecting community health'
        ]
      }
    }
  ]
};
