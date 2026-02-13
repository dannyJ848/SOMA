import { EducationalContent } from '../types';

export const waterSolubleVitamins: EducationalContent = {
  id: 'water-soluble-vitamins',
  title: 'Water-Soluble Vitamins',
  category: 'vitamins-minerals',
  description: 'B-complex vitamins and vitamin C fundamentals',
  levels: [
    {
      level: 1,
      title: 'Introduction to Water-Soluble Vitamins',
      description: 'Basic overview of water-soluble vitamins',
      content: {
        keyPoints: [
          'Water-soluble vitamins include B-complex vitamins and vitamin C',
          'These vitamins dissolve in water and are not stored in large amounts',
          'Excess amounts are excreted through urine',
          'Regular daily intake is required to maintain adequate levels'
        ],
        definitions: [
          { term: 'B-complex vitamins', definition: 'A group of eight B vitamins that work together in metabolism' },
          { term: 'Ascorbic acid', definition: 'The chemical name for vitamin C' },
          { term: 'Urinary excretion', definition: 'The process of eliminating substances through urine' }
        ],
        examples: [
          'B vitamins in whole grains and meats',
          'Vitamin C in citrus fruits and bell peppers',
          'B12 in animal products and fortified foods',
          'Folate in leafy green vegetables'
        ]
      }
    },
    {
      level: 2,
      title: 'The B-Complex Vitamins',
      description: 'Overview of B1, B2, B3, B5, B6, B7, B9, and B12',
      content: {
        keyPoints: [
          'B1 (Thiamine) supports energy metabolism and nerve function',
          'B2 (Riboflavin) aids in energy production and cellular function',
          'B3 (Niacin) supports DNA repair and skin health',
          'B5 (Pantothenic acid) is essential for hormone synthesis',
          'B6 (Pyridoxine) supports brain development and function',
          'B7 (Biotin) supports metabolism and hair/skin health',
          'B9 (Folate) crucial for DNA synthesis and cell division',
          'B12 (Cobalamin) essential for nerve function and red blood cell formation'
        ],
        definitions: [
          { term: 'Coenzyme', definition: 'A molecule that assists enzymes in chemical reactions' },
          { term: 'Energy metabolism', definition: 'The chemical reactions that convert food to energy' },
          { term: 'Megaloblastic anemia', definition: 'A type of anemia caused by B12 or folate deficiency' }
        ],
        examples: [
          'Thiamine deficiency causing beriberi',
          'Niacin for cholesterol management',
          'B6 in morning sickness treatment',
          'Folate preventing neural tube defects'
        ]
      }
    },
    {
      level: 3,
      title: 'Vitamin C and Antioxidant Functions',
      description: 'Deep dive into vitamin C physiology',
      content: {
        keyPoints: [
          'Vitamin C is a potent water-soluble antioxidant',
          'Essential for collagen synthesis and wound healing',
          'Enhances iron absorption from plant sources',
          'Supports immune function and acts as an anti-inflammatory'
        ],
        definitions: [
          { term: 'Collagen', definition: 'A structural protein essential for skin, tendons, and connective tissue' },
          { term: 'Scurvy', definition: 'Disease caused by severe vitamin C deficiency' },
          { term: 'Pro-oxidant', definition: 'A substance that can promote oxidation under certain conditions' }
        ],
        examples: [
          'Scurvy symptoms historically in sailors',
          'Wound healing enhancement with vitamin C',
          'Iron absorption improvement when taken with vitamin C',
          'Common cold duration reduction research'
        ]
      }
    },
    {
      level: 4,
      title: 'Clinical Assessment and Deficiencies',
      description: 'Testing and recognizing deficiencies',
      content: {
        keyPoints: [
          'Laboratory assessment varies by specific vitamin',
          'Clinical signs often appear before laboratory abnormalities',
          'Certain populations at higher risk for specific deficiencies',
          'Drug-nutrient interactions common with water-soluble vitamins'
        ],
        definitions: [
          { term: 'Methylmalonic acid', definition: 'A marker that becomes elevated in B12 deficiency' },
          { term: 'Erythrocyte transketolase', definition: 'Enzyme activity test used to assess thiamine status' },
          { term: 'Leukocyte vitamin C', definition: 'Measurement of vitamin C in white blood cells' }
        ],
        examples: [
          'B12 deficiency in vegetarians and elderly',
          'Folate deficiency in alcohol use disorder',
          'B6 deficiency in certain medications',
          'Pernicious anemia and B12 malabsorption'
        ]
      }
    },
    {
      level: 5,
      title: 'Therapeutic Applications and Controversies',
      description: 'High-dose therapy and emerging research',
      content: {
        keyPoints: [
          'High-dose B3 (niacin) for dyslipidemia management',
          'B12 injections for neurological conditions',
          'High-dose vitamin C in cancer therapy research',
          'Folate supplementation in pregnancy and beyond',
          'MTHFR mutations and folate metabolism'
        ],
        definitions: [
          { term: 'Orthomolecular medicine', definition: 'The use of high-dose vitamins for therapeutic purposes' },
          { term: 'Methylcobalamin', definition: 'The active form of B12 used in some supplements' },
          { term: '5-MTHF', definition: 'The active form of folate that bypasses MTHFR enzyme issues' }
        ],
        examples: [
          'IV vitamin C in adjunctive cancer care',
          'B12 protocols for peripheral neuropathy',
          'Folate vs. folic acid supplementation debate',
          'Niacin flushing in cholesterol management'
        ]
      }
    }
  ]
};
