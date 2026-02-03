import { EducationalContent } from '../types';

export const mediterranean: EducationalContent = {
  id: 'mediterranean',
  title: 'Mediterranean Diet',
  category: 'special-diets',
  description: 'Traditional Mediterranean eating pattern for health promotion',
  levels: [
    {
      level: 1,
      title: 'Introduction to Mediterranean Diet',
      description: 'Overview of this traditional eating pattern',
      content: {
        keyPoints: [
          'Based on traditional eating habits of countries bordering the Mediterranean Sea',
          'Emphasizes plant foods, olive oil, and moderate wine consumption',
          'One of the most researched dietary patterns',
          'Associated with longevity and reduced chronic disease',
          'Lifestyle components are integral to the pattern'
        ],
        definitions: [
          { term: 'Dietary pattern', definition: 'The overall combination of foods and beverages habitually consumed' },
          { term: 'Monounsaturated fat', definition: 'Type of heart-healthy fat abundant in olive oil' },
          { term: 'Whole foods', definition: 'Foods that are minimally processed and close to their natural state' }
        ],
        examples: [
          'Cretan diet as prototype',
          'Italian traditional eating patterns',
          'Middle Eastern Mediterranean variations',
          'North African influences'
        ]
      }
    },
    {
      level: 2,
      title: 'Core Components',
      description: 'Key foods and food groups',
      content: {
        keyPoints: [
          'Extra virgin olive oil as primary fat source',
          'Abundant vegetables, fruits, legumes, and whole grains',
          'Moderate amounts of fish and poultry',
          'Red meat consumed in small amounts',
          'Moderate wine consumption with meals',
          'Nuts, seeds, and herbs daily',
          'Dairy primarily as cheese and yogurt'
        ],
        definitions: [
          { term: 'Extra virgin olive oil', definition: 'Highest quality olive oil with minimal processing' },
          { term: 'Polyphenols', definition: 'Antioxidant compounds abundant in olive oil and plant foods' },
          { term: 'Legumes', definition: 'Plant foods including beans, lentils, and chickpeas' }
        ],
        examples: [
          'Daily vegetable consumption',
          'Whole grain breads and pastas',
          'Fish several times per week',
          'Fruit as typical dessert'
        ]
      }
    },
    {
      level: 3,
      title: 'Health Benefits and Evidence',
      description: 'Research supporting Mediterranean diet',
      content: {
        keyPoints: [
          'PREDIMED trial demonstrated cardiovascular benefits',
          'Reduced risk of metabolic syndrome and type 2 diabetes',
          'Potential neuroprotective effects',
          'Cancer prevention associations',
          'Cognitive health and mood benefits',
          'Life expectancy advantages'
        ],
        definitions: [
          { term: 'PREDIMED study', definition: 'Major Spanish trial examining Mediterranean diet effects on cardiovascular disease' },
          { term: 'Metabolic syndrome', definition: 'Cluster of conditions including high blood pressure, high blood sugar, and abnormal cholesterol' },
          { term: 'Anti-inflammatory', definition: 'Substances or foods that reduce inflammation in the body' }
        ],
        examples: [
          'Heart disease reduction',
          'Diabetes prevention and management',
          'Brain health and Alzheimer\'s risk',
          'Longevity in Blue Zones'
        ]
      }
    },
    {
      level: 4,
      title: 'Nutritional Analysis',
      description: 'Nutrient profile and metabolic effects',
      content: {
        keyPoints: [
          'High in monounsaturated fats from olive oil',
          'Abundant fiber, vitamins, minerals, and antioxidants',
          'Moderate in protein with plant sources emphasized',
          'Low in saturated fat and refined sugars',
          'High omega-3 to omega-6 ratio',
          'Low glycemic load overall'
        ],
        definitions: [
          { term: 'Omega-3 fatty acids', definition: 'Anti-inflammatory fats found in fish, walnuts, and flax' },
          { term: 'Glycemic load', definition: 'Measure of how a food affects blood sugar considering both type and amount of carbohydrate' },
          { term: 'Antioxidant capacity', definition: 'Ability of foods to neutralize harmful free radicals' }
        ],
        examples: [
          'Fiber content analysis',
          'Fat composition breakdown',
          'Micronutrient density',
          'Phytochemical diversity'
        ]
      }
    },
    {
      level: 5,
      title: 'Implementation and Adaptations',
      description: 'Practical application and special considerations',
      content: {
        keyPoints: [
          'Adapting Mediterranean diet to different cultures',
          'Budget-friendly approaches',
          'Mediterranean diet for specific health conditions',
          'Combining with other dietary approaches',
          'Environmental sustainability aspects',
          'Cultural preservation through traditional foodways'
        ],
        definitions: [
          { term: 'Cultural adaptation', definition: 'Modifying a dietary pattern to fit cultural food preferences while maintaining core principles' },
          { term: 'Food sustainability', definition: 'Food production methods that can be maintained long-term without depleting resources' },
          { term: 'Foodways', definition: 'Cultural, social, and economic practices relating to food production and consumption' }
        ],
        examples: [
          'Asian Mediterranean fusion',
          'Plant-forward Mediterranean adaptations',
          'Quick Mediterranean meal preparation',
          'Mediterranean diet for athletes'
        ]
      }
    }
  ]
};
