import { PublicHealthContent } from '../types';

export const publicHealthData: PublicHealthContent = {
  id: 'public-health-data',
  title: 'Public Health Data',
  category: 'Epidemiology',
  description: 'Collection, analysis, and application of health data for population health improvement',
  levels: [
    {
      level: 1,
      title: 'Introduction to Health Data',
      content: {
        summary: 'Public health data is information about health status, diseases, and health outcomes in populations. It helps us understand health problems and make decisions.',
        keyPoints: [
          'Health data shows disease patterns in communities',
          'Data comes from hospitals, clinics, surveys, and laboratories',
          'Birth and death records track vital events',
          'Public health decisions should be based on data',
          'Privacy protects personal health information'
        ],
        vocabulary: [
          { term: 'Data', definition: 'Facts and statistics collected for analysis' },
          { term: 'Population', definition: 'Group of individuals being studied' },
          { term: 'Vital Statistics', definition: 'Data on births, deaths, and marriages' },
          { term: 'Privacy', definition: 'Protection of personal information' }
        ],
        examples: [
          'Counting flu cases each week to track season',
          'Birth certificates recording baby weight and health',
          'Death certificates noting cause of death',
          'Survey asking people about their health habits'
        ]
      }
    },
    {
      level: 2,
      title: 'Types and Sources of Health Data',
      content: {
        summary: 'Public health uses many types of data from different sources to build a complete picture of population health and identify health challenges.',
        keyPoints: [
          'Vital records document births, deaths, and fetal deaths',
          'Disease registries track specific conditions like cancer',
          'Health surveys collect self-reported health information',
          'Administrative data comes from healthcare encounters',
          'Census data provides population denominators'
        ],
        vocabulary: [
          { term: 'Registry', definition: 'Database of people with specific disease' },
          { term: 'Administrative Data', definition: 'Data collected for billing or operations' },
          { term: 'Survey', definition: 'Collection of information from sample of population' },
          { term: 'Census', definition: 'Official count of population' },
          { term: 'Denominator', definition: 'Population total used for rate calculations' }
        ],
        examples: [
          'Cancer registry tracking all cancer diagnoses in a state',
          'BRFSS survey collecting health behaviors by telephone',
          'Hospital discharge data for utilization statistics',
          'Census data for calculating rates per 100,000 people',
          'Immunization registry tracking vaccine coverage'
        ]
      }
    },
    {
      level: 3,
      title: 'Data Analysis and Epidemiological Measures',
      content: {
        summary: 'Public health data analysis uses standardized measures and statistical methods to quantify disease burden, identify trends, and compare populations.',
        keyPoints: [
          'Rates measure events per population size over time',
          'Ratios compare two related quantities',
          'Proportions show parts of a whole',
          'Age adjustment enables comparison across populations',
          'Time trends show changes in disease patterns'
        ],
        vocabulary: [
          { term: 'Incidence Rate', definition: 'New cases per population over time period' },
          { term: 'Prevalence', definition: 'Proportion of population with disease' },
          { term: 'Crude Rate', definition: 'Rate for total population without adjustment' },
          { term: 'Age-Adjusted Rate', definition: 'Rate standardized to population age structure' },
          { term: 'Confidence Interval', definition: 'Range indicating estimate precision' }
        ],
        examples: [
          'Age-adjusted death rates comparing county health',
          'Infant mortality rate as deaths per 1,000 live births',
          'Diabetes prevalence percentage in adults',
          'Trend analysis showing rising obesity rates',
          'Confidence intervals on cancer incidence rates'
        ]
      }
    },
    {
      level: 4,
      title: 'Data Quality and Interpretation',
      content: {
        summary: 'Understanding data quality, limitations, and biases is essential for accurate interpretation and appropriate public health action.',
        keyPoints: [
          'Data completeness affects accuracy of estimates',
          'Data validity measures correctness of information',
          'Timeliness impacts relevance for decision-making',
          'Selection bias can distort population estimates',
          'Statistical significance vs. public health significance'
        ],
        vocabulary: [
          { term: 'Validity', definition: 'Accuracy of measurement' },
          { term: 'Reliability', definition: 'Consistency of measurement' },
          { term: 'Bias', definition: 'Systematic error causing distortion' },
          { term: 'Missing Data', definition: 'Absent values affecting analysis' },
          { term: 'Data Standardization', definition: 'Ensuring consistent data formats' }
        ],
        examples: [
          'Underreporting of mild COVID-19 cases',
          'Race/ethnicity misclassification in health records',
          'Lag time in cancer registry data completion',
          'Survey non-response bias affecting estimates',
          'ICD coding changes affecting disease trends'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Data Systems and Applications',
      content: {
        summary: 'Modern public health leverages integrated data systems, advanced analytics, and emerging technologies to improve surveillance, prediction, and health outcomes.',
        keyPoints: [
          'Health information exchanges enable data sharing across systems',
          'Linkage of multiple datasets provides comprehensive views',
          'Machine learning enables prediction and pattern recognition',
          'Geographic information systems map health disparities',
          'Real-time data systems support rapid response'
        ],
        vocabulary: [
          { term: 'Health Information Exchange', definition: 'Digital sharing of health data across organizations' },
          { term: 'Data Linkage', definition: 'Connecting records across datasets' },
          { term: 'Predictive Analytics', definition: 'Using data to predict future outcomes' },
          { term: 'GIS', definition: 'Geographic Information Systems for mapping data' },
          { term: 'Big Data', definition: 'Large, complex datasets requiring advanced methods' }
        ],
        examples: [
          'Electronic health records data for disease surveillance',
          'Linking birth and death records for maternal mortality',
          'Predictive models for COVID-19 hotspots',
          'GIS mapping of food deserts and health outcomes',
          'Real-time opioid overdose dashboards'
        ]
      }
    }
  ]
};
