import { PublicHealthContent } from '../types';

export const globalHealthChallenges: PublicHealthContent = {
  id: 'global-health-challenges',
  title: 'Global Health Challenges',
  category: 'Global Health',
  description: 'Major health issues affecting populations worldwide and the responses to address them',
  levels: [
    {
      level: 1,
      title: 'Introduction to Global Health',
      content: {
        summary: 'Global health focuses on improving health and achieving equity in health for all people worldwide. It addresses health issues that cross national boundaries.',
        keyPoints: [
          'Global health concerns affect multiple countries',
          'Health inequalities exist between wealthy and poor nations',
          'Diseases can spread quickly across borders',
          'International cooperation is essential for health',
          'Health is connected to development and prosperity'
        ],
        vocabulary: [
          { term: 'Global Health', definition: 'Health issues that transcend national boundaries' },
          { term: 'Pandemic', definition: 'Disease outbreak across multiple countries' },
          { term: 'Developing Countries', definition: 'Nations with lower income and development' },
          { term: 'Health Equity', definition: 'Fair opportunity for everyone to be healthy' }
        ],
        examples: [
          'COVID-19 pandemic spreading worldwide',
          'Malaria affecting tropical countries',
          'International vaccination campaigns',
          'Global responses to HIV/AIDS'
        ]
      }
    },
    {
      level: 2,
      title: 'Infectious Diseases',
      content: {
        summary: 'Infectious diseases remain major global health challenges, particularly in low-resource settings where prevention and treatment access is limited.',
        keyPoints: [
          'HIV/AIDS continues to affect millions globally',
          'Malaria claims hundreds of thousands of lives annually',
          'Tuberculosis remains a leading infectious disease killer',
          'Neglected tropical diseases affect poorest communities',
          'Emerging infections pose pandemic threats'
        ],
        vocabulary: [
          { term: 'Epidemic', definition: 'Disease spreading rapidly in one region' },
          { term: 'Endemic', definition: 'Disease regularly found in an area' },
          { term: 'Vector', definition: 'Organism that transmits disease' },
          { term: 'Antimicrobial Resistance', definition: 'Microbes becoming resistant to treatment' },
          { term: 'Neglected Tropical Diseases', definition: 'Group of diseases affecting poor populations' }
        ],
        examples: [
          'HIV prevention and treatment in sub-Saharan Africa',
          'Bed nets preventing malaria transmission',
          'DOTS therapy for tuberculosis control',
          'Mass drug administration for river blindness',
          'Ebola outbreaks in West Africa'
        ]
      }
    },
    {
      level: 3,
      title: 'Non-Communicable Diseases',
      content: {
        summary: 'Non-communicable diseases (NCDs) like heart disease, cancer, diabetes, and respiratory diseases are now the leading causes of death worldwide, including in low- and middle-income countries.',
        keyPoints: [
          'Cardiovascular diseases are the leading cause of global deaths',
          'Cancer is a growing burden in all regions',
          'Diabetes prevalence is rising dramatically',
          'Chronic respiratory diseases affect millions',
          'NCDs increasingly affect lower-income countries'
        ],
        vocabulary: [
          { term: 'Non-Communicable Disease', definition: 'Chronic disease not spread from person to person' },
          { term: 'Epidemiological Transition', definition: 'Shift from infectious to chronic diseases' },
          { term: 'Risk Factor', definition: 'Characteristic that increases disease risk' },
          { term: 'Dual Burden', definition: 'Coexistence of infectious and chronic diseases' },
          { term: 'Premature Mortality', definition: 'Death before age 70' }
        ],
        examples: [
          'Rising heart disease in developing countries',
          'Tobacco use driving global cancer epidemic',
          'Diabetes increases linked to urbanization',
          'COPD from indoor air pollution in poor households',
          'Road traffic injuries as growing global problem'
        ]
      }
    },
    {
      level: 4,
      title: 'Health Systems and Access',
      content: {
        summary: 'Weak health systems, workforce shortages, and inadequate access to essential medicines and services limit health improvements in many regions of the world.',
        keyPoints: [
          'Health worker shortages limit care delivery in many countries',
          'Access to essential medicines remains inadequate',
          'Health infrastructure is insufficient in many regions',
          'Financial barriers prevent people from seeking care',
          'Universal health coverage remains an unmet goal'
        ],
        vocabulary: [
          { term: 'Health System', definition: 'All organizations, people, and actions promoting health' },
          { term: 'Universal Health Coverage', definition: 'All people receiving needed health services' },
          { term: 'Health Workforce', definition: 'People providing health services' },
          { term: 'Essential Medicines', definition: 'Drugs that satisfy priority health needs' },
          { term: 'Out-of-Pocket Payments', definition: 'Direct payments by patients for care' }
        ],
        examples: [
          'Community health workers extending care in rural Africa',
          'GAVI vaccine alliance increasing immunization coverage',
          'Elimination of user fees improving maternal care access',
          'Drug shortages in low-income countries',
          'Brain drain of health professionals from developing countries'
        ]
      }
    },
    {
      level: 5,
      title: 'Contemporary Global Health Challenges',
      content: {
        summary: 'Global health in the 21st century faces complex challenges including climate change, antimicrobial resistance, humanitarian crises, and the need for sustainable financing.',
        keyPoints: [
          'Climate change threatens health through multiple pathways',
          'Antimicrobial resistance could undo medical progress',
          'Humanitarian crises create health emergencies',
          'Urbanization creates new health challenges',
          'Sustainable development requires health investment'
        ],
        vocabulary: [
          { term: 'One Health', definition: 'Approach integrating human, animal, and environmental health' },
          { term: 'Planetary Health', definition: 'Health of human civilization and natural systems' },
          { term: 'Humanitarian Emergency', definition: 'Crisis requiring international assistance' },
          { term: 'Sustainable Development Goals', definition: 'Global targets for development by 2030' },
          { term: 'Social Determinants of Health', definition: 'Conditions shaping health outcomes' }
        ],
        examples: [
          'Climate change expanding range of disease vectors',
          'COVID-19 pandemic disrupting health services worldwide',
          'WHO response to Syrian refugee health crisis',
          'Air pollution causing millions of premature deaths',
          'Global health security and pandemic preparedness'
        ]
      }
    }
  ]
};
