import { EducationalContent } from '../types';

export const vitaminDeficiencies: EducationalContent = {
  id: 'vitamin-deficiencies',
  title: 'Vitamin Deficiencies',
  category: 'vitamins-minerals',
  description: 'Clinical presentation and management of vitamin deficiencies',
  levels: [
    {
      level: 1,
      title: 'Introduction to Vitamin Deficiencies',
      description: 'Overview of why vitamin deficiencies occur',
      content: {
        keyPoints: [
          'Vitamin deficiencies occur when intake is inadequate or absorption is impaired',
          'Different risk factors for deficiencies exist across populations',
          'Deficiencies can develop gradually over months or years',
          'Early detection and prevention is key to avoiding complications'
        ],
        definitions: [
          { term: 'Deficiency', definition: 'Inadequate intake or absorption of a nutrient leading to impaired function' },
          { term: 'Risk factor', definition: 'A characteristic that increases likelihood of developing a condition' },
          { term: 'Malnutrition', definition: 'Lack of proper nutrition, caused by not having enough to eat or not eating enough of the right things' }
        ],
        examples: [
          'Limited dietary variety leading to deficiencies',
          'Medical conditions affecting absorption',
          'Life stages with increased requirements',
          'Medications interfering with vitamin status'
        ]
      }
    },
    {
      level: 2,
      title: 'Fat-Soluble Vitamin Deficiencies',
      description: 'Deficiencies of vitamins A, D, E, and K',
      content: {
        keyPoints: [
          'Vitamin A deficiency causes night blindness and increased infection risk',
          'Vitamin D deficiency leads to rickets in children and osteomalacia in adults',
          'Vitamin E deficiency is rare but causes neurological problems',
          'Vitamin K deficiency results in bleeding disorders',
          'Fat malabsorption syndromes increase risk of these deficiencies'
        ],
        definitions: [
          { term: 'Night blindness', definition: 'Difficulty seeing in low light or darkness' },
          { term: 'Rickets', definition: 'Bone disease in children caused by vitamin D deficiency' },
          { term: 'Osteomalacia', definition: 'Softening of bones in adults due to vitamin D deficiency' }
        ],
        examples: [
          'Xerophthalmia from vitamin A deficiency',
          'Osteoporosis risk with low vitamin D',
          'Easy bruising with vitamin K deficiency',
          'Cystic fibrosis and fat-soluble vitamin needs'
        ]
      }
    },
    {
      level: 3,
      title: 'B-Complex Vitamin Deficiencies',
      description: 'Specific B vitamin deficiency syndromes',
      content: {
        keyPoints: [
          'B1 deficiency causes beriberi and Wernicke-Korsakoff syndrome',
          'B3 deficiency causes pellagra',
          'B12 deficiency causes megaloblastic anemia and neurological symptoms',
          'Folate deficiency causes neural tube defects in pregnancy',
          'Multiple B vitamin deficiencies often occur together'
        ],
        definitions: [
          { term: 'Beriberi', definition: 'Disease caused by thiamine deficiency affecting cardiovascular and nervous systems' },
          { term: 'Pellagra', definition: 'Disease caused by niacin deficiency characterized by diarrhea, dementia, and dermatitis' },
          { term: 'Megaloblastic anemia', definition: 'Anemia with large, immature red blood cells due to B12 or folate deficiency' }
        ],
        examples: [
          'Alcohol-related thiamine deficiency',
          'Pernicious anemia from B12 malabsorption',
          'Folate deficiency in poor dietary intake',
          'B6 deficiency from certain medications'
        ]
      }
    },
    {
      level: 4,
      title: 'Vitamin C Deficiency and Assessment',
      description: 'Scurvy and diagnostic approaches',
      content: {
        keyPoints: [
          'Vitamin C deficiency causes scurvy',
          'Symptoms include bleeding gums, poor wound healing, and fatigue',
          'Risk factors include limited fruit/vegetable intake and smoking',
          'Diagnosis based on clinical signs and response to supplementation',
          'Laboratory testing can confirm deficiency'
        ],
        definitions: [
          { term: 'Scurvy', definition: 'Disease caused by severe vitamin C deficiency' },
          { term: 'Gingivitis', definition: 'Inflammation of the gums' },
          { term: 'Petechiae', definition: 'Small red or purple spots caused by bleeding into the skin' }
        ],
        examples: [
          'Historical cases of scurvy in sailors',
          'Modern scurvy in malnourished populations',
          'Increased vitamin C needs in smokers',
          'Rapid response to vitamin C treatment'
        ]
      }
    },
    {
      level: 5,
      title: 'Complex Deficiency Patterns',
      description: 'Multiple deficiencies and special populations',
      content: {
        keyPoints: [
          'Multiple vitamin deficiencies often coexist',
          'Alcohol use disorder leads to multiple deficiencies',
          'Bariatric surgery patients require lifelong vitamin monitoring',
          'Eating disorders present complex nutritional challenges',
          'Malabsorption syndromes require specialized supplementation',
          'Global vitamin deficiency initiatives'
        ],
        definitions: [
          { term: 'Syndrome', definition: 'A group of symptoms that consistently occur together' },
          { term: 'Refeeding syndrome', definition: 'Dangerous shifts in fluids and electrolytes during nutritional rehabilitation' },
          { term: 'Bioavailability', definition: 'The proportion of a nutrient that is absorbed and used by the body' }
        ],
        examples: [
          'Global vitamin A supplementation programs',
          'Post-bariatric surgery vitamin protocols',
          'Pregnancy and multiple nutrient needs',
          'HIV/AIDS-related vitamin deficiencies'
        ]
      }
    }
  ]
};
