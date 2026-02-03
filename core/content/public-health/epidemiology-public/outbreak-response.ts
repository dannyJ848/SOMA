import { PublicHealthContent } from '../types';

export const outbreakResponse: PublicHealthContent = {
  id: 'outbreak-response',
  title: 'Outbreak Response',
  category: 'Epidemiology',
  description: 'Strategies and actions for detecting and responding to disease outbreaks',
  levels: [
    {
      level: 1,
      title: 'Understanding Outbreaks',
      content: {
        summary: 'An outbreak is the occurrence of more cases of disease than expected in a given area or population. Quick response saves lives and prevents spread.',
        keyPoints: [
          'Outbreaks can be local, regional, or global (pandemic)',
          'Early detection allows faster containment',
          'Response involves investigation, control, and communication',
          'Vaccination, isolation, and hygiene are key tools',
          'Public health agencies lead outbreak responses'
        ],
        vocabulary: [
          { term: 'Outbreak', definition: 'Increase in disease cases above expected level' },
          { term: 'Pandemic', definition: 'Global outbreak of disease affecting many countries' },
          { term: 'Containment', definition: 'Measures to prevent disease spread' },
          { term: 'Contact Tracing', definition: 'Finding and monitoring people exposed to disease' }
        ],
        examples: [
          'Local food poisoning outbreak from contaminated restaurant',
          'Measles outbreak in an under-vaccinated community',
          'COVID-19 pandemic spreading worldwide',
          'Ebola outbreak in West Africa (2014-2016)'
        ]
      }
    },
    {
      level: 2,
      title: 'Outbreak Detection and Investigation',
      content: {
        summary: 'Detecting outbreaks requires vigilance and systematic investigation to identify sources, modes of transmission, and affected populations.',
        keyPoints: [
          'Detect outbreaks through surveillance data and healthcare reports',
          'Verify the outbreak by comparing cases to expected baseline',
          'Define a case to standardize case identification',
          'Count cases and organize data by person, place, and time',
          'Generate hypotheses about the source and transmission'
        ],
        vocabulary: [
          { term: 'Case Definition', definition: 'Standard criteria for identifying cases' },
          { term: 'Epidemic Curve', definition: 'Visual display of cases over time' },
          { term: 'Hypothesis Generation', definition: 'Creating testable explanations for outbreak' },
          { term: 'Attack Rate', definition: 'Proportion of exposed people who become ill' },
          { term: 'Index Case', definition: 'First identified case in an outbreak' }
        ],
        examples: [
          'Analyzing restaurant food logs to identify contaminated items',
          'Using epidemic curves to identify point source vs. continuous exposure',
          'Mapping cases to identify geographic clusters',
          'Calculating attack rates by food item to find source'
        ]
      }
    },
    {
      level: 3,
      title: 'Control Measures and Interventions',
      content: {
        summary: 'Effective outbreak response implements multiple control strategies simultaneously to interrupt transmission and prevent additional cases.',
        keyPoints: [
          'Isolation separates sick individuals to prevent transmission',
          'Quarantine restricts movement of exposed but healthy individuals',
          'Vaccination creates immunity and stops disease spread',
          'Vector control reduces transmission from insects or animals',
          'Environmental controls eliminate sources of contamination'
        ],
        vocabulary: [
          { term: 'Isolation', definition: 'Separation of infected individuals' },
          { term: 'Quarantine', definition: 'Restriction of exposed individuals' },
          { term: 'Ring Vaccination', definition: 'Vaccinating contacts around cases' },
          { term: 'Vector Control', definition: 'Reducing disease-carrying organisms' },
          { term: 'Post-Exposure Prophylaxis', definition: 'Treatment after exposure to prevent disease' }
        ],
        examples: [
          'Isolating COVID-19 patients for 10 days',
          'Quarantining measles contacts for 21 days',
          'Ring vaccination strategy used in smallpox eradication',
          'Mosquito control to prevent dengue spread',
          'Food recall to stop Salmonella outbreak'
        ]
      }
    },
    {
      level: 4,
      title: 'Outbreak Management and Coordination',
      content: {
        summary: 'Successful outbreak response requires coordinated management across multiple agencies, clear communication, and systematic application of epidemiological methods.',
        keyPoints: [
          'Incident Command System (ICS) structures response activities',
          'Epidemiologic investigation identifies source and transmission',
          'Laboratory testing confirms cause and tracks strain variations',
          'Risk communication informs public and guides behavior',
          'After-action reviews identify lessons learned for improvement'
        ],
        vocabulary: [
          { term: 'Incident Command System', definition: 'Standardized emergency management structure' },
          { term: 'Situational Awareness', definition: 'Understanding current outbreak status' },
          { term: 'Risk Communication', definition: 'Exchange of information about health risks' },
          { term: 'Reproductive Number (R₀)', definition: 'Average cases one infected person generates' },
          { term: 'Herd Immunity Threshold', definition: 'Proportion immune needed to stop spread' }
        ],
        examples: [
          'CDC Emergency Operations Center activating for COVID-19',
          'Multi-agency response to Ebola outbreaks in Africa',
          'Foodborne outbreak investigations involving FDA, CDC, and state health',
          'School closure decisions during flu outbreaks',
          'After-action reviews from H1N1 pandemic response'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Response Strategies and Emerging Challenges',
      content: {
        summary: 'Modern outbreak response integrates advanced technologies, predictive modeling, and adaptive strategies to address emerging pathogens and complex public health emergencies.',
        keyPoints: [
          'Mathematical modeling predicts outbreak trajectory and intervention impact',
          'Real-time genomic sequencing tracks pathogen evolution during outbreaks',
          'Digital surveillance and AI enhance early detection capabilities',
          'Social and behavioral science improves intervention effectiveness',
          'Health equity considerations ensure just distribution of resources'
        ],
        vocabulary: [
          { term: 'SEIR Model', definition: 'Mathematical model tracking Susceptible, Exposed, Infected, Recovered' },
          { term: 'Phylodynamics', definition: 'Combining phylogenetics and epidemiology' },
          { term: 'Infodemic', definition: 'Overabundance of information during outbreak' },
          { term: 'Syndromic Surveillance', definition: 'Tracking symptoms before diagnosis confirmation' },
          { term: 'Adaptive Response', definition: 'Flexibly adjusting strategies based on data' }
        ],
        examples: [
          'Real-time COVID-19 variant tracking during Omicron surge',
          'Predictive modeling guiding Ebola ring vaccination',
          'Digital contact tracing apps for COVID-19',
          'Combating COVID-19 misinformation through health communication',
          'Equitable vaccine allocation strategies for global pandemics'
        ]
      }
    }
  ]
};
