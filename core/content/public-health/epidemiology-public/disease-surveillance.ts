import { PublicHealthContent } from '../types';

export const diseaseSurveillance: PublicHealthContent = {
  id: 'disease-surveillance',
  title: 'Disease Surveillance',
  category: 'Epidemiology',
  description: 'Systems and methods for monitoring disease patterns in populations',
  levels: [
    {
      level: 1,
      title: 'Introduction to Disease Surveillance',
      content: {
        summary: 'Disease surveillance is the ongoing systematic collection, analysis, and interpretation of health data essential to planning, implementing, and evaluating public health practice.',
        keyPoints: [
          'Surveillance tracks disease patterns in populations',
          'Early detection of outbreaks saves lives',
          'Data comes from hospitals, labs, and clinics',
          'Modern surveillance uses digital technology',
          'Global systems monitor diseases worldwide'
        ],
        vocabulary: [
          { term: 'Surveillance', definition: 'Continuous monitoring of health events' },
          { term: 'Outbreak', definition: 'Sudden increase in disease cases above normal' },
          { term: 'Endemic', definition: 'Disease regularly present in a population' },
          { term: 'Epidemic', definition: 'Disease spreading rapidly in a region' }
        ],
        examples: [
          'Fl tracking systems that monitor influenza-like symptoms across hospitals',
          'COVID-19 case reporting to public health authorities',
          'Mosquito monitoring programs that track disease vectors'
        ]
      }
    },
    {
      level: 2,
      title: 'Surveillance Systems and Data Sources',
      content: {
        summary: 'Effective disease surveillance relies on multiple data sources and systematic approaches to collect, analyze, and disseminate health information.',
        keyPoints: [
          'Passive surveillance relies on healthcare providers to report cases',
          'Active surveillance involves public health officials seeking cases',
          'Sentinel surveillance uses selected sites to represent larger populations',
          'Syndromic surveillance tracks symptoms before diagnoses are confirmed',
          'Laboratory surveillance provides confirmed disease identification'
        ],
        vocabulary: [
          { term: 'Passive Surveillance', definition: 'System where reports are submitted voluntarily' },
          { term: 'Active Surveillance', definition: 'System where health officials actively seek cases' },
          { term: 'Sentinel Site', definition: 'Selected monitoring location representing broader population' },
          { term: 'Notifiable Disease', definition: 'Disease that must be reported by law' },
          { term: 'Case Definition', definition: 'Standard criteria for identifying disease cases' }
        ],
        examples: [
          'Doctors reporting measles cases to health departments (passive)',
          'Public health nurses calling hospitals weekly for pneumonia cases (active)',
          'Selected primary care clinics tracking flu patterns (sentinel)',
          'Emergency department visits for fever monitoring (syndromic)'
        ]
      }
    },
    {
      level: 3,
      title: 'Analytical Methods and Indicators',
      content: {
        summary: 'Surveillance data analysis uses epidemiological measures and statistical methods to detect patterns, trends, and outbreaks in disease occurrence.',
        keyPoints: [
          'Incidence measures new cases over time in a population',
          'Prevalence measures total cases at a specific point in time',
          'Mortality rates track deaths from specific diseases',
          'Time-series analysis identifies temporal patterns and trends',
          'Spatial analysis maps geographic distribution of diseases'
        ],
        vocabulary: [
          { term: 'Incidence Rate', definition: 'New cases per population at risk over time period' },
          { term: 'Prevalence', definition: 'Proportion of population with disease at given time' },
          { term: 'Case Fatality Rate', definition: 'Proportion of cases resulting in death' },
          { term: 'Attack Rate', definition: 'Proportion of at-risk population developing disease' },
          { term: 'Epidemic Curve', definition: 'Graph showing disease cases over time' }
        ],
        examples: [
          'Calculating weekly flu incidence from reported cases',
          'Mapping cancer rates by county to identify clusters',
          'Comparing COVID-19 mortality across age groups',
          'Using epidemic curves to identify outbreak sources'
        ]
      }
    },
    {
      level: 4,
      title: 'Advanced Surveillance Technologies',
      content: {
        summary: 'Modern disease surveillance incorporates digital technologies, big data analytics, and artificial intelligence to enhance detection, prediction, and response capabilities.',
        keyPoints: [
          'Digital health reporting systems enable real-time data collection',
          'Wastewater surveillance provides early warning of community spread',
          'Machine learning algorithms predict outbreak patterns',
          'Mobile phone data tracks population movement for disease modeling',
          'Genomic surveillance tracks pathogen evolution and variants'
        ],
        vocabulary: [
          { term: 'Digital Epidemiology', definition: 'Use of digital data for disease tracking' },
          { term: 'Wastewater Surveillance', definition: 'Monitoring sewage for pathogen detection' },
          { term: 'Genomic Epidemiology', definition: 'Using pathogen genomes to track spread' },
          { term: 'Nowcasting', definition: 'Estimating current disease activity from available data' },
          { term: 'Bioinformatics', definition: 'Analysis of biological data using computational tools' }
        ],
        examples: [
          'COVID-19 variant tracking through genomic sequencing',
          'Polio detection through wastewater testing',
          'Google Flu Trends using search query data',
          'ProMED-mail reporting emerging diseases globally',
          'Air travel data modeling international disease spread'
        ]
      }
    },
    {
      level: 5,
      title: 'Global Surveillance Networks and Policy',
      content: {
        summary: 'International cooperation and formal frameworks enable coordinated global disease surveillance, information sharing, and response to public health emergencies.',
        keyPoints: [
          'WHO coordinates global surveillance through International Health Regulations',
          'Global Outbreak Alert and Response Network (GOARN) provides rapid response',
          'Fleming Fund supports antimicrobial resistance surveillance globally',
          'Africa CDC strengthens continental surveillance capacity',
          'Cross-sector collaboration (One Health) integrates human, animal, and environmental health'
        ],
        vocabulary: [
          { term: 'IHR (2005)', definition: 'International Health Regulations binding WHO framework' },
          { term: 'PHEIC', definition: 'Public Health Emergency of International Concern' },
          { term: 'GOARN', definition: 'Global Outbreak Alert and Response Network' },
          { term: 'Zoonosis', definition: 'Disease transmitted from animals to humans' },
          { term: 'One Health', definition: 'Approach integrating human, animal, and environmental health' }
        ],
        examples: [
          'WHO declaration of COVID-19 as PHEIC in January 2020',
          'Global Polio Surveillance System tracking eradication progress',
          'International Bird Flu monitoring networks',
          'Antimicrobial resistance surveillance in 90+ countries',
          'Ebola outbreak response through GOARN coordination'
        ]
      }
    }
  ]
};
