import { PublicHealthContent } from '../types';

export const tertiaryPreventionPH: PublicHealthContent = {
  id: 'tertiary-prevention-ph',
  title: 'Tertiary Prevention',
  category: 'Disease Prevention',
  description: 'Interventions to reduce complications and improve quality of life for people with established disease',
  levels: [
    {
      level: 1,
      title: 'Understanding Tertiary Prevention',
      content: {
        summary: 'Tertiary prevention helps people who already have a disease. It focuses on reducing complications, preventing worsening, and improving quality of life.',
        keyPoints: [
          'Tertiary prevention happens after disease has developed',
          'It aims to prevent complications and further damage',
          'Treatment and management are key components',
          'Rehabilitation helps restore function and independence',
          'Good management lets people live well with chronic conditions'
        ],
        vocabulary: [
          { term: 'Tertiary Prevention', definition: 'Actions to reduce complications of existing disease' },
          { term: 'Chronic Disease', definition: 'Long-lasting condition like diabetes or heart disease' },
          { term: 'Complications', definition: 'Additional health problems from a disease' },
          { term: 'Quality of Life', definition: 'Overall well-being and life satisfaction' }
        ],
        examples: [
          'Insulin for diabetes to prevent complications',
          'Physical therapy after a stroke',
          'Cardiac rehabilitation after heart attack',
          'Asthma action plans preventing attacks'
        ]
      }
    },
    {
      level: 2,
      title: 'Disease Management Approaches',
      content: {
        summary: 'Effective tertiary prevention involves comprehensive disease management including treatment, monitoring, and support to maintain health and prevent deterioration.',
        keyPoints: [
          'Medication management controls disease and prevents complications',
          'Regular monitoring tracks disease progression and treatment effectiveness',
          'Self-management education empowers patients in their care',
          'Care coordination ensures comprehensive, efficient care',
          'Lifestyle modification supports medical treatment'
        ],
        vocabulary: [
          { term: 'Disease Management', definition: 'Coordinated approach to chronic disease care' },
          { term: 'Self-Management', definition: 'Patient active participation in their care' },
          { term: 'Care Coordination', definition: 'Organizing care across providers and services' },
          { term: 'Medication Adherence', definition: 'Taking medications as prescribed' },
          { term: 'Comorbidity', definition: 'Having two or more diseases simultaneously' }
        ],
        examples: [
          'Diabetes education programs teaching self-care',
          'Heart failure clinics preventing hospitalization',
          'Asthma inhaler use education',
          'Blood pressure monitoring at home',
          'Medication reminders for adherence'
        ]
      }
    },
    {
      level: 3,
      title: 'Rehabilitation and Functional Improvement',
      content: {
        summary: 'Rehabilitation services restore function, prevent complications, and maximize independence and quality of life for people with disabilities or chronic conditions.',
        keyPoints: [
          'Physical therapy improves mobility and strength',
          'Occupational therapy enables daily living activities',
          'Speech and language therapy restore communication',
          'Cardiac rehabilitation improves heart function after events',
          'Pulmonary rehabilitation enhances breathing capacity'
        ],
        vocabulary: [
          { term: 'Rehabilitation', definition: 'Restoring function after illness or injury' },
          { term: 'Functional Status', definition: 'Ability to perform activities and roles' },
          { term: 'Disability', definition: 'Impairment limiting activities' },
          { term: 'Physical Therapy', definition: 'Treatment to improve movement and function' },
          { term: 'Occupational Therapy', definition: 'Training for daily living skills' }
        ],
        examples: [
          'Stroke rehabilitation restoring walking and speech',
          'Joint replacement recovery therapy',
          'Cardiac rehab exercise programs after heart attack',
          'Pulmonary rehab for COPD patients',
          'Brain injury rehabilitation programs'
        ]
      }
    },
    {
      level: 4,
      title: 'Preventing Complications and Deterioration',
      content: {
        summary: 'A key goal of tertiary prevention is preventing disease complications, progression, and adverse outcomes through proactive management and surveillance.',
        keyPoints: [
          'Glycemic control prevents diabetes complications',
          'Blood pressure management prevents stroke and kidney disease',
          'Lipid control prevents cardiovascular events',
          'Foot care prevents diabetic amputations',
          'Fall prevention reduces injuries in older adults'
        ],
        vocabulary: [
          { term: 'Disease Progression', definition: 'Worsening of disease over time' },
          { term: 'Microvascular Complications', definition: 'Small blood vessel damage from diabetes' },
          { term: 'Macrovascular Complications', definition: 'Large blood vessel disease' },
          { term: 'Exacerbation', definition: 'Worsening or flare of chronic disease' },
          { term: 'Preventable Hospitalization', definition: 'Admission that could be avoided with good care' }
        ],
        examples: [
          'Annual eye exams preventing diabetic blindness',
          'Foot exams preventing diabetic foot ulcers',
          'ACE inhibitors preventing kidney disease in diabetes',
          'Anticoagulation preventing strokes in atrial fibrillation',
          'Osteoporosis treatment preventing fractures'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Tertiary Prevention Strategies',
      content: {
        summary: 'Modern tertiary prevention incorporates precision medicine, digital health technologies, and innovative care models to optimize outcomes for people with complex chronic conditions.',
        keyPoints: [
          'Precision medicine tailors treatment to individual characteristics',
          'Digital health enables remote monitoring and intervention',
          'Palliative care improves quality of life for serious illness',
          'Integrated care addresses physical, mental, and social needs',
          'Patient-reported outcomes guide care improvement'
        ],
        vocabulary: [
          { term: 'Precision Medicine', definition: 'Treatment tailored to individual characteristics' },
          { term: 'Telehealth', definition: 'Healthcare delivery at a distance using technology' },
          { term: 'Palliative Care', definition: 'Specialized care for serious illness symptoms' },
          { term: 'Integrated Care', definition: 'Coordinated physical, mental, and social care' },
          { term: 'Patient-Centered Medical Home', definition: 'Care model emphasizing coordinated, comprehensive care' }
        ],
        examples: [
          'Targeted cancer therapy based on tumor genetics',
          'Continuous glucose monitoring for diabetes management',
          'Implantable cardioverter-defibrillator preventing sudden death',
          'Heart failure remote monitoring reducing hospitalization',
          'Palliative care alongside cancer treatment improving quality of life'
        ]
      }
    }
  ]
};
