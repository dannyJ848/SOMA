import { PublicHealthContent } from '../types';

export const oneHealth: PublicHealthContent = {
  id: 'one-health',
  title: 'One Health',
  category: 'Global Health',
  description: 'Collaborative approach to achieving optimal health outcomes at the human-animal-environment interface',
  levels: [
    {
      level: 1,
      title: 'Introduction to One Health',
      content: {
        summary: 'One Health recognizes that human health is connected to animal health and the environment. Working together across these areas helps keep everyone healthy.',
        keyPoints: [
          'Human health depends on animal and environmental health',
          'Animals and humans can share diseases',
          'Environmental changes affect disease spread',
          'Collaboration across fields improves health outcomes',
          'Most new diseases come from animals'
        ],
        vocabulary: [
          { term: 'One Health', definition: 'Approach connecting human, animal, and environmental health' },
          { term: 'Zoonotic Disease', definition: 'Disease that spreads between animals and humans' },
          { term: 'Environment', definition: 'Natural world and surroundings' },
          { term: 'Collaboration', definition: 'People and organizations working together' }
        ],
        examples: [
          'Rabies spreading from dogs to humans',
          'Mosquitoes transmitting diseases to people',
          'Contaminated water making both animals and people sick',
          'Bird flu spreading from poultry to humans'
        ]
      }
    },
    {
      level: 2,
      title: 'Zoonotic Diseases',
      content: {
        summary: 'Zoonotic diseases are infections that spread between animals and humans. They represent significant global health challenges requiring coordinated response.',
        keyPoints: [
          'Over 60% of emerging infectious diseases are zoonotic',
          'Direct contact with animals spreads many diseases',
          'Vectors like mosquitoes and ticks transmit zoonoses',
          'Food from animals can carry disease if not handled properly',
          'Wildlife trade increases zoonotic disease risk'
        ],
        vocabulary: [
          { term: 'Zoonosis', definition: 'Disease transmitted from animals to humans' },
          { term: 'Reservoir', definition: 'Host that normally harbors a pathogen' },
          { term: 'Spillover', definition: 'Transmission of pathogen from animal to human' },
          { term: 'Vector', definition: 'Organism that transmits pathogens' },
          { term: 'Amplification Host', definition: 'Host that increases pathogen numbers' }
        ],
        examples: [
          'Rabies from dog bites',
          'Lyme disease from tick bites',
          'Salmonella from contaminated poultry',
          'COVID-19 likely originating from wildlife',
          'Avian influenza from infected birds'
        ]
      }
    },
    {
      level: 3,
      title: 'Environmental Health Connections',
      content: {
        summary: 'Environmental changes including climate change, habitat destruction, and pollution create conditions for disease emergence and affect health across species.',
        keyPoints: [
          'Deforestation increases wildlife-human contact',
          'Climate change expands disease vector ranges',
          'Water pollution affects humans, animals, and ecosystems',
          'Agriculture affects environment and disease dynamics',
          'Urbanization creates new human-animal interfaces'
        ],
        vocabulary: [
          { term: 'Deforestation', definition: 'Clearing or destruction of forests' },
          { term: 'Vector Range', definition: 'Geographic area where disease vectors live' },
          { term: 'Urbanization', definition: 'Growth and expansion of cities' },
          { term: 'Ecosystem', definition: 'Community of organisms and their environment' },
          { term: 'Biodiversity', definition: 'Variety of life in an area' }
        ],
        examples: [
          'Deforestation increasing malaria risk',
          'Expanding tick ranges with warming climate',
          'Agricultural runoff creating harmful algal blooms',
          'Urban rats carrying diseases into cities',
          'Wetland loss affecting disease patterns'
        ]
      }
    },
    {
      level: 4,
      title: 'One Health in Practice',
      content: {
        summary: 'One Health requires collaboration between human health, veterinary, and environmental professionals to address complex health challenges at their source.',
        keyPoints: [
          'Disease surveillance integrates human, animal, and environmental data',
          'Joint outbreak investigations identify cross-species transmission',
          'Antibiotic use in animals affects human medicine',
          'Food safety requires farm-to-table coordination',
          'Wildlife conservation and health are interconnected'
        ],
        vocabulary: [
          { term: 'Antimicrobial Resistance', definition: 'Microbes becoming resistant to treatment' },
          { term: 'Food Safety', definition: 'Handling, preparation, and storage of food to prevent illness' },
          { term: 'Wildlife Reservoir', definition: 'Wild animal population carrying pathogen' },
          { term: 'Joint Investigation', definition: 'Collaborative inquiry across sectors' },
          { term: 'Integrated Surveillance', definition: 'Monitoring health across human-animal-environment' }
        ],
        examples: [
          'Coordinated response to avian influenza outbreaks',
          'Wastewater monitoring tracking pathogens in communities',
          'Antibiotic stewardship across human and veterinary medicine',
          'Farm inspections ensuring food safety',
          'West Nile virus monitoring in birds and mosquitoes'
        ]
      }
    },
    {
      level: 5,
      title: 'One Health Policy and Implementation',
      content: {
        summary: 'Implementing One Health requires institutional frameworks, cross-sector policies, and sustained investment in collaborative capacity for complex health challenges.',
        keyPoints: [
          'One Health governance structures enable coordination',
          'National One Health platforms connect sectors and agencies',
          'Pandemic prevention requires addressing animal sources',
          'Antimicrobial resistance demands multi-sector action',
          'Climate change adaptation needs One Health approaches'
        ],
        vocabulary: [
          { term: 'Governance', definition: 'System of direction and control' },
          { term: 'Pandemic Prevention', definition: 'Actions to prevent global disease outbreaks' },
          { term: 'Multi-Sectoral', definition: 'Involving multiple sectors or areas' },
          { term: 'Planetary Health', definition: 'Health of human civilization and natural systems' },
          { term: 'Ecohealth', definition: 'Approach linking ecosystem health and human health' }
        ],
        examples: [
          'WHO Tripartite collaboration on One Health',
          'Global Health Security Agenda',
          'Preventing next pandemic through wildlife protection',
          'Global action plan on antimicrobial resistance',
          'Climate-resilient health systems using One Health'
        ]
      }
    }
  ]
};
