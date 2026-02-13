import { EducationalContent } from '../types';

export const fatSolubleVitamins: EducationalContent = {
  id: 'fat-soluble-vitamins',
  title: 'Fat-Soluble Vitamins',
  category: 'vitamins-minerals',
  description: 'Comprehensive guide to vitamins A, D, E, and K',
  levels: [
    {
      level: 1,
      title: 'Introduction to Fat-Soluble Vitamins',
      description: 'Basic overview of the four fat-soluble vitamins',
      content: {
        keyPoints: [
          'There are four fat-soluble vitamins: A, D, E, and K',
          'These vitamins are absorbed along with dietary fat',
          'They can be stored in the body\'s fatty tissues and liver',
          'Unlike water-soluble vitamins, they don\'t need to be consumed daily'
        ],
        definitions: [
          { term: 'Fat-soluble vitamin', definition: 'Vitamins that dissolve in fats and oils and can be stored in body tissues' },
          { term: 'Dietary fat', definition: 'Fat consumed in food that aids in absorption of fat-soluble vitamins' },
          { term: 'Liver storage', definition: 'The liver\'s ability to store certain vitamins for future use' }
        ],
        examples: [
          'Vitamin A in carrots and sweet potatoes',
          'Vitamin D from sunlight exposure and fortified milk',
          'Vitamin E in nuts and vegetable oils',
          'Vitamin K in leafy green vegetables'
        ]
      }
    },
    {
      level: 2,
      title: 'Individual Fat-Soluble Vitamins',
      description: 'Detailed look at each fat-soluble vitamin',
      content: {
        keyPoints: [
          'Vitamin A supports vision, immune function, and skin health',
          'Vitamin D promotes calcium absorption and bone health',
          'Vitamin E acts as an antioxidant protecting cells from damage',
          'Vitamin K is essential for blood clotting and bone metabolism'
        ],
        definitions: [
          { term: 'Retinol', definition: 'The active form of vitamin A found in animal products' },
          { term: 'Beta-carotene', definition: 'A plant compound that the body converts to vitamin A' },
          { term: 'Antioxidant', definition: 'A substance that protects cells from damage caused by free radicals' }
        ],
        examples: [
          'Night vision improvement with adequate vitamin A',
          'Rickets prevention in children with vitamin D',
          'Skin protection with vitamin E-rich foods',
          'Proper wound healing with sufficient vitamin K'
        ]
      }
    },
    {
      level: 3,
      title: 'Absorption and Metabolism',
      description: 'How the body processes fat-soluble vitamins',
      content: {
        keyPoints: [
          'Fat-soluble vitamins require bile for absorption in the small intestine',
          'They are incorporated into chylomicrons for transport',
          'Storage occurs primarily in the liver and adipose tissue',
          'Conditions affecting fat absorption can impact these vitamins'
        ],
        definitions: [
          { term: 'Bile', definition: 'Digestive fluid produced by the liver that emulsifies fats' },
          { term: 'Chylomicron', definition: 'A lipoprotein that transports dietary lipids through the bloodstream' },
          { term: 'Adipose tissue', definition: 'Connective tissue that stores fat' }
        ],
        examples: [
          'Malabsorption syndromes like celiac disease reducing absorption',
          'Weight loss surgery affecting vitamin D absorption',
          'Cystic fibrosis impacting fat-soluble vitamin status',
          'Pancreatic insufficiency requiring enzyme replacement'
        ]
      }
    },
    {
      level: 4,
      title: 'Clinical Applications and Assessment',
      description: 'Testing, deficiency, and toxicity considerations',
      content: {
        keyPoints: [
          'Serum levels can be measured but may not reflect total body stores',
          'Deficiency patterns differ based on storage capacity',
          'Toxicity is possible due to storage capability',
          'Drug-nutrient interactions affect fat-soluble vitamin status'
        ],
        definitions: [
          { term: 'Hypervitaminosis', definition: 'Excess accumulation of vitamins leading to toxic effects' },
          { term: 'Serum retinol', definition: 'The measurement of vitamin A in blood' },
          { term: '25-hydroxyvitamin D', definition: 'The primary circulating form of vitamin D used for status assessment' }
        ],
        examples: [
          'Vitamin A toxicity from excessive supplementation or accutane use',
          'Vitamin D toxicity causing hypercalcemia',
          'Vitamin K antagonism by warfarin therapy',
          'Vitamin E interaction with blood thinners'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Therapeutic Applications',
      description: 'Clinical uses and emerging research',
      content: {
        keyPoints: [
          'High-dose vitamin A protocols for measles in developing countries',
          'Vitamin D dosing controversies and optimal serum levels',
          'Vitamin E in neurodegenerative disease prevention research',
          'Vitamin K protocols for reversing anticoagulation'
        ],
        definitions: [
          { term: 'Cholecalciferol', definition: 'Vitamin D3, the form produced in skin and used in supplements' },
          { term: 'Tocotrienols', definition: 'A form of vitamin E with potential distinct health benefits' },
          { term: 'Menadiol', definition: 'A synthetic form of vitamin K used clinically' }
        ],
        examples: [
          'Vitamin D receptor polymorphisms affecting requirement',
          'Vitamin A in retinoblastoma prevention research',
          'Vitamin K2 in cardiovascular health studies',
          'Genetic variations affecting vitamin E metabolism'
        ]
      }
    }
  ]
};
