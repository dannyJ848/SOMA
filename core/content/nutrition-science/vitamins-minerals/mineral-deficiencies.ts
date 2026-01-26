import { EducationalContent } from '../types';

export const mineralDeficiencies: EducationalContent = {
  id: 'mineral-deficiencies',
  title: 'Mineral Deficiencies',
  category: 'vitamins-minerals',
  description: 'Clinical presentation and management of mineral deficiencies',
  levels: [
    {
      level: 1,
      title: 'Introduction to Mineral Deficiencies',
      description: 'Overview of mineral deficiency causes and impact',
      content: {
        keyPoints: [
          'Mineral deficiencies result from inadequate intake, poor absorption, or excessive losses',
          'Both major and trace minerals can become deficient',
          'Soil depletion affects mineral content of food',
          'Certain life stages increase mineral requirements',
          'Deficiencies often manifest with non-specific symptoms'
        ],
        definitions: [
          { term: 'Bioavailability', definition: 'The amount of a mineral that can be absorbed and used by the body' },
          { term: 'Antinutrient', definition: 'Compounds in food that interfere with mineral absorption' },
          { term: 'Homeostasis', definition: 'The body\'s process of maintaining internal balance, including mineral levels' }
        ],
        examples: [
          'Iron deficiency being the most common worldwide',
          'Calcium needs increasing with age',
          'Zinc deficiency in developing countries',
          'Magnesium deficiency from poor dietary intake'
        ]
      }
    },
    {
      level: 2,
      title: 'Iron Deficiency',
      description: 'The most common nutritional deficiency worldwide',
      content: {
        keyPoints: [
          'Iron deficiency affects over 2 billion people globally',
          'Causes include inadequate intake, poor absorption, and blood loss',
          'Progression from iron depletion to iron deficiency anemia',
          'Symptoms include fatigue, weakness, and pallor',
          'Certain populations at higher risk'
        ],
        definitions: [
          { term: 'Anemia', definition: 'Condition marked by a deficiency of red blood cells or hemoglobin' },
          { term: 'Ferritin', definition: 'Protein that stores iron; low levels indicate depleted iron stores' },
          { term: 'Hemoglobin', definition: 'Iron-containing protein in red blood cells that carries oxygen' }
        ],
        examples: [
          'Menstruating women at higher risk',
          'Pregnancy increasing iron needs',
          'Vegetarian dietary considerations',
          'Blood donation affecting iron status'
        ]
      }
    },
    {
      level: 3,
      title: 'Calcium and Vitamin D Deficiency',
      description: 'Interrelated deficiencies affecting bone health',
      content: {
        keyPoints: [
          'Calcium and vitamin D deficiencies often occur together',
          'Vitamin D is needed for calcium absorption',
          'Long-term deficiency leads to decreased bone density',
          'Osteoporosis is a major public health concern',
          'Adequate intake needed throughout life'
        ],
        definitions: [
          { term: 'Osteoporosis', definition: 'Bone disease characterized by low bone mass and deterioration of bone tissue' },
          { term: 'Osteopenia', definition: 'Condition of lower than normal bone density that may precede osteoporosis' },
          { term: 'Peak bone mass', definition: 'Maximum bone density and strength achieved in early adulthood' }
        ],
        examples: [
          'Bone fractures in elderly',
          'Rickets in vitamin D deficient children',
          'Dairy-free diet considerations',
          'Sunlight exposure and vitamin D synthesis'
        ]
      }
    },
    {
      level: 4,
      title: 'Electrolyte and Trace Mineral Deficiencies',
      description: 'Sodium, potassium, zinc, iodine, and selenium deficiencies',
      content: {
        keyPoints: [
          'Sodium deficiency usually from excessive losses, not inadequate intake',
          'Potassium deficiency affects cardiovascular and muscle function',
          'Zinc deficiency impairs immune function and wound healing',
          'Iodine deficiency causes thyroid enlargement',
          'Selenium deficiency linked to certain health conditions'
        ],
        definitions: [
          { term: 'Hyponatremia', definition: 'Abnormally low sodium levels in the blood' },
          { term: 'Hypokalemia', definition: 'Abnormally low potassium levels in the blood' },
          { term: 'Goiter', definition: 'Enlargement of the thyroid gland' }
        ],
        examples: [
          'Potassium loss with diuretic medications',
          'Zinc deficiency in alcohol use disorder',
          'Iodine deficiency in regions without iodized salt',
          'Selenium deficiency in certain geographical areas'
        ]
      }
    },
    {
      level: 5,
      title: 'Complex Mineral Deficiencies',
      description: 'Multiple deficiencies and special populations',
      content: {
        keyPoints: [
          'Multiple mineral deficiencies often coexist',
          'Gastrointestinal disorders affect mineral absorption',
          'Kidney disease alters mineral homeostasis',
          'Malabsorption syndromes require specialized management',
          'Drug-nutrient interactions affecting mineral status',
          'Mineral supplementation protocols and considerations'
        ],
        definitions: [
          { term: 'Malabsorption', definition: 'Impaired absorption of nutrients from the digestive tract' },
          { term: 'Chelation', definition: 'Binding of minerals to other substances, affecting absorption or excretion' },
          { term: 'Renal osteodystrophy', definition: 'Bone disease occurring in kidney disease due to mineral imbalances' }
        ],
        examples: [
          'Celiac disease and iron deficiency',
          'Inflammatory bowel disease and mineral losses',
          'Bariatric surgery and mineral needs',
          'Mineral interactions in supplementation'
        ]
      }
    }
  ]
};
