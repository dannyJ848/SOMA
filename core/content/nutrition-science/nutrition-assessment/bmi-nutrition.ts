import { EducationalContent } from '../types';

export const bmiNutrition: EducationalContent = {
  id: 'bmi-nutrition',
  title: 'BMI and Nutritional Assessment',
  category: 'nutrition-assessment',
  description: 'Body composition and anthropometric assessment',
  levels: [
    {
      level: 1,
      title: 'Introduction to BMI',
      description: 'Body Mass Index basics',
      content: {
        keyPoints: [
          'BMI is a screening tool for weight categories',
          'Calculated as weight in kilograms divided by height in meters squared',
          'BMI categories: underweight, normal, overweight, obese',
          'Simple, inexpensive, and non-invasive measure',
          'Used in clinical and public health settings'
        ],
        definitions: [
          { term: 'BMI', definition: 'Body Mass Index, a measure of body weight relative to height' },
          { term: 'Anthropometry', definition: 'Measurement of the human body for assessment' },
          { term: 'Ideal body weight', definition: 'Theoretical weight associated with lowest mortality risk' }
        ],
        examples: [
          'BMI calculation examples',
          'Population weight tracking',
          'Clinical weight categorization',
          'BMI in electronic health records'
        ]
      }
    },
    {
      level: 2,
      title: 'BMI Categories and Interpretation',
      description: 'Understanding BMI ranges and limitations',
      content: {
        keyPoints: [
          'Underweight: BMI less than 18.5',
          'Normal weight: BMI 18.5-24.9',
          'Overweight: BMI 25-29.9',
          'Obesity Class I: BMI 30-34.9',
          'Obesity Class II: BMI 35-39.9',
          'Obesity Class III: BMI 40+',
          'Age and ethnic considerations in interpretation'
        ],
        definitions: [
          { term: 'Obesity classes', definition: 'Categories of obesity based on BMI severity' },
          { term: 'Morbidity', definition: 'Incidence of disease or health complications' },
          { term: 'All-cause mortality', definition: 'Death from any cause' }
        ],
        examples: [
          'Health risks by BMI category',
          'BMI thresholds in different ethnicities',
          'Age-related BMI considerations',
          'Pediatric BMI-for-age'
        ]
      }
    },
    {
      level: 3,
      title: 'BMI Limitations and Alternatives',
      description: 'Beyond BMI in body composition assessment',
      content: {
        keyPoints: [
          'BMI does not distinguish fat from muscle mass',
          'May misclassify athletes and elderly',
          'Waist circumference provides additional information',
          'Waist-to-hip ratio assesses fat distribution',
          'Skinfold measurements estimate body fat',
          'Bioelectrical impedance analysis options'
        ],
        definitions: [
          { term: 'Visceral fat', definition: 'Fat stored within the abdominal cavity around organs' },
          { term: 'Subcutaneous fat', definition: 'Fat stored beneath the skin' },
          { term: 'Sarcopenic obesity', definition: 'Low muscle mass with high body fat' }
        ],
        examples: [
          'Athlete BMI misclassification',
          'Waist circumference guidelines',
          'Skinfold measurement sites',
          'Body composition scan interpretation'
        ]
      }
    },
    {
      level: 4,
      title: 'Weight History and Changes',
      description: 'Tracking weight patterns over time',
      content: {
        keyPoints: [
          'Usual body weight comparison important',
          'Unintentional weight loss significance',
          'Weight change percentage calculations',
          'Timeline for weight loss significance',
          'Weight fluctuation patterns',
          'Post-illness weight tracking'
        ],
        definitions: [
          { term: 'Usual body weight', definition: 'A person\'s typical weight over time' },
          { term: 'Significant weight loss', definition: 'Generally >5% weight loss in 1 month or >10% in 6 months' },
          { term: 'Weight cycling', definition: 'Repeated loss and regain of weight' }
        ],
        examples: [
          'Calculating percent weight change',
          'Weight loss red flags',
          'Post-surgery weight monitoring',
          'Fluid status vs. tissue loss'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Body Composition Assessment',
      description: 'Sophisticated measurement techniques',
      content: {
        keyPoints: [
          'DEXA scans for detailed composition',
          'CT and MRI for visceral fat assessment',
          'Bod Pod air displacement method',
          'Hydrostatic weighing techniques',
          '3D body scanning technology',
          'Clinical applications of advanced measures',
          'Cost and accessibility considerations'
        ],
        definitions: [
          { term: 'DEXA', definition: 'Dual-energy X-ray absorptiometry for body composition' },
          { term: 'Bod Pod', definition: 'Air displacement plethysmography device for body composition' },
          { term: 'Lean mass index', definition: 'Lean body mass adjusted for height' }
        ],
        examples: [
          'DEXA in osteoporosis assessment',
          'BMI alternatives in research',
          'Body composition in athletes',
          'Sarcopenia assessment protocols'
        ]
      }
    }
  ]
};
