import { EducationalContent } from '../types';

export const majorMinerals: EducationalContent = {
  id: 'major-minerals',
  title: 'Major Minerals',
  category: 'vitamins-minerals',
  description: 'Calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur',
  levels: [
    {
      level: 1,
      title: 'Introduction to Major Minerals',
      description: 'Overview of the seven major minerals',
      content: {
        keyPoints: [
          'Major minerals are needed in amounts greater than 100mg per day',
          'The seven major minerals include calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur',
          'These minerals are essential for bone health, fluid balance, and nerve function',
          'They are electrolytes that conduct electrical impulses in the body'
        ],
        definitions: [
          { term: 'Macromineral', definition: 'Minerals required in larger amounts (greater than 100mg daily)' },
          { term: 'Electrolyte', definition: 'Minerals that carry an electric charge when dissolved in body fluids' },
          { term: 'Bone mineralization', definition: 'The process of depositing minerals in bone tissue' }
        ],
        examples: [
          'Calcium in dairy products and leafy greens',
          'Potassium in bananas and potatoes',
          'Sodium in table salt and processed foods',
          'Magnesium in nuts and whole grains'
        ]
      }
    },
    {
      level: 2,
      title: 'Calcium and Phosphorus',
      description: 'The primary bone-building minerals',
      content: {
        keyPoints: [
          'Calcium is the most abundant mineral in the human body',
          '99% of calcium is stored in bones and teeth',
          'Phosphorus works with calcium for bone health',
          'Both minerals require vitamin D for proper absorption',
          'Calcium-phosphorus balance is critical for health'
        ],
        definitions: [
          { term: 'Hydroxyapatite', definition: 'The crystalline mineral compound that gives bones their hardness' },
          { term: 'Osteoporosis', definition: 'A condition of decreased bone density and increased fracture risk' },
          { term: 'Parathyroid hormone', definition: 'Hormone that regulates calcium levels in the blood' }
        ],
        examples: [
          'Milk, cheese, and yogurt as calcium sources',
          'Calcium-fortified plant milks',
          'Phosphorus in protein-rich foods',
          'Bone health throughout the lifespan'
        ]
      }
    },
    {
      level: 3,
      title: 'Electrolyte Minerals',
      description: 'Sodium, potassium, chloride, and fluid balance',
      content: {
        keyPoints: [
          'Sodium and potassium maintain fluid balance across cell membranes',
          'These minerals generate nerve impulses and muscle contractions',
          'Chloride works with sodium to maintain fluid balance',
          'The sodium-potassium pump is essential for cellular function',
          'Electrolyte imbalances can be life-threatening'
        ],
        definitions: [
          { term: 'Sodium-potassium pump', definition: 'Cellular mechanism that maintains sodium and potassium gradients' },
          { term: 'Osmosis', definition: 'Movement of water across a semipermeable membrane' },
          { term: 'Hyponatremia', definition: 'Abnormally low sodium levels in the blood' }
        ],
        examples: [
          'Sodium\'s role in blood pressure regulation',
          'Potassium for cardiovascular health',
          'Electrolyte loss during intense exercise',
          'Rehydration solutions for diarrhea'
        ]
      }
    },
    {
      level: 4,
      title: 'Magnesium and Sulfur',
      description: 'Essential minerals for enzyme function and protein structure',
      content: {
        keyPoints: [
          'Magnesium is a cofactor for over 300 enzyme systems',
          'Essential for protein synthesis, blood glucose control, and blood pressure regulation',
          'Sulfur is a component of certain amino acids and vitamins',
          'Sulfur-containing compounds have antioxidant properties',
          'Magnesium deficiency is common in certain populations'
        ],
        definitions: [
          { term: 'Cofactor', definition: 'A substance required for enzyme activity' },
          { term: 'ATP', definition: 'Adenosine triphosphate, the energy currency of cells' },
          { term: 'Glutathione', definition: 'A sulfur-containing antioxidant compound' }
        ],
        examples: [
          'Magnesium in migraine prevention',
          'Sulfur in joint health supplements',
          'Green leafy vegetables as magnesium sources',
          'Epsom salts (magnesium sulfate) for muscle relaxation'
        ]
      }
    },
    {
      level: 5,
      title: 'Clinical Applications and Interactions',
      description: 'Therapeutic uses and mineral interactions',
      content: {
        keyPoints: [
          'Calcium and magnesium ratio considerations',
          'Potassium for hypertension management',
          'Sodium restriction protocols in heart failure',
          'Magnesium in preeclampsia prevention',
          'Drug-mineral interactions affecting absorption'
        ],
        definitions: [
          { term: 'Bioavailability', definition: 'The proportion of a nutrient that is absorbed and utilized' },
          { term: 'Chelated mineral', definition: 'Mineral bound to an amino acid for better absorption' },
          { term: 'Renal handling', definition: 'How the kidneys filter and reabsorb minerals' }
        ],
        examples: [
          'Magnesium glycinate for better absorption',
          'Potassium chloride supplementation',
          'Calcium carbonate vs. citrate absorption',
          'Thiazide diuretics affecting calcium excretion'
        ]
      }
    }
  ]
};
