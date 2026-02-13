import { PublicHealthContent } from '../types';

export const primaryPreventionPH: PublicHealthContent = {
  id: 'primary-prevention-ph',
  title: 'Primary Prevention',
  category: 'Disease Prevention',
  description: 'Interventions that prevent disease or injury before it occurs',
  levels: [
    {
      level: 1,
      title: 'What is Primary Prevention?',
      content: {
        summary: 'Primary prevention means stopping disease or injury before it ever happens. It focuses on keeping people healthy rather than treating them after they get sick.',
        keyPoints: [
          'Primary prevention acts before disease develops',
          'It targets the underlying causes of health problems',
          'Vaccines are powerful primary prevention tools',
          'Healthy habits prevent many chronic diseases',
          'Safe environments prevent injuries'
        ],
        vocabulary: [
          { term: 'Primary Prevention', definition: 'Actions taken before disease develops' },
          { term: 'Vaccine', definition: 'Substance that creates immunity to disease' },
          { term: 'Chronic Disease', definition: 'Long-lasting condition like diabetes or heart disease' },
          { term: 'Immunity', definition: 'Protection against disease' }
        ],
        examples: [
          'Vaccinating children against measles',
          'Putting on sunscreen to prevent skin cancer',
          'Wearing a seatbelt to prevent injuries',
          'Eating healthy food to prevent heart disease'
        ]
      }
    },
    {
      level: 2,
      title: 'Types of Primary Prevention',
      content: {
        summary: 'Primary prevention includes multiple approaches: vaccination, health education, environmental modifications, and policies that create conditions for health.',
        keyPoints: [
          'Vaccination provides immunity to infectious diseases',
          'Health education builds knowledge and skills for healthy choices',
          'Environmental protection reduces exposure to hazards',
          'Nutrition and physical activity prevent chronic diseases',
          'Safety measures prevent intentional and unintentional injuries'
        ],
        vocabulary: [
          { term: 'Herd Immunity', definition: 'Protection of community when enough are immune' },
          { term: 'Environmental Health', definition: 'Addressing environmental impacts on health' },
          { term: 'Injury Prevention', definition: 'Actions to prevent accidental or intentional harm' },
          { term: 'Health Literacy', definition: 'Ability to understand and use health information' },
          { term: 'Sanitation', definition: 'Conditions relating to public health and cleanliness' }
        ],
        examples: [
          'Flu shots preventing influenza spread',
          'Water fluoridation preventing tooth decay',
          'Lead abatement preventing lead poisoning',
          'Bike lanes preventing cycling injuries',
          'Nutrition education preventing obesity'
        ]
      }
    },
    {
      level: 3,
      title: 'Vaccines and Immunization',
      content: {
        summary: 'Vaccination is one of the most successful primary prevention tools, having eliminated smallpox and nearly eliminated many other deadly diseases.',
        keyPoints: [
          'Vaccines stimulate immune response without causing disease',
          'Childhood immunization schedules prevent multiple diseases',
          'Herd immunity protects those who cannot be vaccinated',
          'Vaccine safety monitoring ensures public confidence',
          'Global vaccination efforts have eradicated and controlled diseases'
        ],
        vocabulary: [
          { term: 'Pathogen', definition: 'Disease-causing microorganism' },
          { term: 'Antigen', definition: 'Substance that triggers immune response' },
          { term: 'Antibody', definition: 'Protein that neutralizes pathogens' },
          { term: 'Contraindication', definition: 'Condition making vaccination inadvisable' },
          { term: 'Adverse Event', definition: 'Negative reaction following vaccination' }
        ],
        examples: [
          'MMR vaccine preventing measles, mumps, rubella',
          'Polio vaccination nearly eradicating the disease',
          'Hepatitis B vaccine preventing liver cancer',
          'HPV vaccine preventing cervical cancer',
          'COVID-19 vaccination reducing severe disease'
        ]
      }
    },
    {
      level: 4,
      title: 'Lifestyle and Behavioral Prevention',
      content: {
        summary: 'Many chronic diseases can be prevented through addressing tobacco use, physical inactivity, poor nutrition, and harmful alcohol use.',
        keyPoints: [
          'Tobacco control prevents cancer, heart disease, and respiratory illness',
          'Physical activity prevents cardiovascular disease, diabetes, and some cancers',
          'Healthy nutrition prevents obesity, diabetes, and heart disease',
          'Moderate alcohol use prevents liver disease and some cancers',
          'Stress management prevents mental health disorders'
        ],
        vocabulary: [
          { term: 'Modifiable Risk Factor', definition: 'Behavior that can be changed to reduce disease risk' },
          { term: 'Tobacco Cessation', definition: 'Process of quitting tobacco use' },
          { term: 'Metabolic Syndrome', definition: 'Cluster of conditions increasing heart disease risk' },
          { term: 'Obesogenic Environment', definition: 'Surroundings that promote weight gain' },
          { term: 'Preventable Fraction', definition: 'Disease that could be prevented by intervention' }
        ],
        examples: [
          'Tobacco taxes reducing smoking rates',
          'School physical education preventing childhood obesity',
          'Sodium reduction preventing hypertension',
          'Alcohol taxes preventing excessive drinking',
          'Workplace stress reduction programs'
        ]
      }
    },
    {
      level: 5,
      title: 'Policy and Environmental Primary Prevention',
      content: {
        summary: 'Creating conditions for health through policy and environmental change is the most effective and equitable approach to primary prevention at the population level.',
        keyPoints: [
          'Policy interventions create broad population-level impact',
          'Regulatory standards protect environmental health',
          'Economic incentives encourage healthy choices',
          'Built environment design promotes physical activity',
          'Health in All Policies considers health across sectors'
        ],
        vocabulary: [
          { term: 'Population-Level', definition: 'Affecting entire communities or societies' },
          { term: 'Upstream Intervention', definition: 'Addressing root causes of health problems' },
          { term: 'Fiscal Policy', definition: 'Use of taxes and spending to influence behavior' },
          { term: 'Zoning', definition: 'Regulation of land use and development' },
          { term: 'Precautionary Principle', definition: 'Acting to prevent harm even with uncertain evidence' }
        ],
        examples: [
          'Clean Air Act reducing respiratory disease',
          'Sugar-sweetened beverage taxes reducing consumption',
          'Trans fat bans preventing heart disease',
          'Complete Streets policies promoting active transportation',
          'Paid family leave preventing child health problems'
        ]
      }
    }
  ]
};
