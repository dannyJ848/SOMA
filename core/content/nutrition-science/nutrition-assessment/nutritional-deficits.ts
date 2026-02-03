import { EducationalContent } from '../types';

export const nutritionalDeficits: EducationalContent = {
  id: 'nutritional-deficits',
  title: 'Nutritional Deficits',
  category: 'nutrition-assessment',
  description: 'Identifying and characterizing malnutrition',
  levels: [
    {
      level: 1,
      title: 'Introduction to Nutritional Deficits',
      description: 'Understanding malnutrition and nutrient deficiencies',
      content: {
        keyPoints: [
          'Nutritional deficits can involve macronutrients or micronutrients',
          'May result from inadequate intake, increased needs, or malabsorption',
          'Can affect any individual regardless of body size',
          'Early detection improves treatment outcomes',
          'Deficits may be acute or chronic'
        ],
        definitions: [
          { term: 'Undernutrition', definition: 'Inadequate intake or absorption of nutrients' },
          { term: 'Specific nutrient deficiency', definition: 'Lack of a particular vitamin or mineral' },
          { term: 'Protein-energy malnutrition', definition: 'Form of malnutrition involving both protein and calorie deficiency' }
        ],
        examples: [
          'Micronutrient deficiencies',
          'Protein-calorie malnutrition',
          'Hospital-acquired malnutrition',
          'Community nutrition deficits'
        ]
      }
    },
    {
      level: 2,
      title: 'Types of Malnutrition',
      description: 'Classifying nutritional deficits',
      content: {
        keyPoints: [
          'Marasmus: severe calorie restriction',
          'Kwashiorkor: protein deficiency with adequate calories',
          'Marasmic kwashiorkor: combined form',
          'Micronutrient deficiencies: vitamin and mineral insufficiencies',
          'Acute vs. chronic malnutrition',
          'Disease-related malnutrition'
        ],
        definitions: [
          { term: 'Marasmus', definition: 'Severe malnutrition characterized by extreme wasting' },
          { term: 'Kwashiorkor', definition: 'Protein deficiency with edema despite adequate calorie intake' },
          { term: 'Edema', definition: 'Swelling caused by excess fluid in tissues' }
        ],
        examples: [
          'Starvation-related malnutrition',
          'Chronic illness-related malnutrition',
          'Acute disease or injury-related malnutrition',
          'Multiple nutrient deficiencies'
        ]
      }
    },
    {
      level: 3,
      title: 'Clinical Signs of Deficits',
      description: 'Physical manifestations of nutritional deficiencies',
      content: {
        keyPoints: [
          'Hair changes: thinning, color changes, easy pluckability',
          'Skin changes: dryness, pigmentation, poor wound healing',
          'Nail changes: spooning, ridges, discoloration',
          'Oral manifestations: glossitis, angular stomatitis',
          'Muscle wasting patterns',
          'Neurological signs'
        ],
        definitions: [
          { term: 'Glossitis', definition: 'Inflammation of the tongue' },
          { term: 'Angular stomatitis', definition: 'Cracking at the corners of the mouth' },
          { term: 'Muscle wasting', definition: 'Loss of muscle mass and strength' }
        ],
        examples: [
          'Vitamin deficiency skin findings',
          'Iron deficiency nail changes',
          'B12 deficiency neurological signs',
          'Protein deficiency manifestations'
        ]
      }
    },
    {
      level: 4,
      title: 'Laboratory Assessment',
      description: 'Biochemical markers of nutritional status',
      content: {
        keyPoints: [
          'Serum albumin limitations in acute assessment',
          'Prealbumin (transthyretin) considerations',
          'Complete blood count for anemia',
          'Specific vitamin and mineral assays',
          'Inflammatory markers affecting interpretation',
          'Timing of laboratory assessments'
        ],
        definitions: [
          { term: 'Albumin', definition: 'Protein made by the liver, marker of nutritional status over weeks' },
          { term: 'Prealbumin', definition: 'Protein with shorter half-life than albumin, reflects recent changes' },
          { term: 'Anemia of chronic disease', definition: 'Anemia related to inflammation, not nutritional deficiency' }
        ],
        examples: [
          'Interpreting albumin in inflammation',
          'Ferritin as acute phase reactant',
          'B12 and folate testing',
          'Zinc assessment challenges'
        ]
      }
    },
    {
      level: 5,
      title: 'Global Deficit Patterns',
      description: 'Population-level nutritional challenges',
      content: {
        keyPoints: [
          'Double burden of malnutrition',
          'Hidden hunger (micronutrient deficiencies)',
          'Life cycle critical periods',
          'Food system contributions to deficits',
          'Socioeconomic determinants',
          'Intervention strategies at population level'
        ],
        definitions: [
          { term: 'Double burden', definition: 'Coexistence of undernutrition and overnutrition in populations' },
          { term: 'Hidden hunger', definition: 'Micronutrient deficiencies without obvious underweight' },
          { term: 'First 1000 days', definition: 'Critical period from conception to age 2 for nutrition' }
        ],
        examples: [
          'Global iodine deficiency',
          'Iron deficiency anemia worldwide',
          'Vitamin A deficiency programs',
          'Food fortification initiatives'
        ]
      }
    }
  ]
};
