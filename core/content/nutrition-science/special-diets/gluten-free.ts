import { EducationalContent } from '../types';

export const glutenFree: EducationalContent = {
  id: 'gluten-free',
  title: 'Gluten-Free Diet',
  category: 'special-diets',
  description: 'Nutrition guidance for gluten-related disorders',
  levels: [
    {
      level: 1,
      title: 'Introduction to Gluten-Free Diet',
      description: 'Basics of gluten and when avoidance is necessary',
      content: {
        keyPoints: [
          'Gluten is a protein found in wheat, barley, and rye',
          'Celiac disease requires strict lifelong gluten avoidance',
          'Non-celiac gluten sensitivity may benefit from gluten-free diet',
          'A gluten-free diet excludes all sources of gluten',
          'Proper diagnosis important before starting gluten-free diet'
        ],
        definitions: [
          { term: 'Gluten', definition: 'A group of proteins found in wheat, barley, and rye that provide elasticity to dough' },
          { term: 'Celiac disease', definition: 'Autoimmune disorder triggered by gluten consumption' },
          { term: 'Wheat allergy', definition: 'Allergic reaction to wheat proteins, distinct from celiac disease' }
        ],
        examples: [
          'Bread, pasta, and cereals containing gluten',
          'Hidden sources of gluten in processed foods',
          'Naturally gluten-free whole foods',
          'Gluten-free grain alternatives'
        ]
      }
    },
    {
      level: 2,
      title: 'Gluten-Containing Foods and Alternatives',
      description: 'Identifying gluten and suitable substitutes',
      content: {
        keyPoints: [
          'Wheat varieties all contain gluten (spelt, kamut, farro)',
          'Barley and rye must be avoided',
          'Oats may be cross-contaminated unless certified gluten-free',
          'Naturally gluten-free grains include rice, corn, quinoa',
          'Special considerations for processed foods and medications'
        ],
        definitions: [
          { term: 'Cross-contamination', definition: 'Unintended introduction of gluten into gluten-free foods' },
          { term: 'Certified gluten-free', definition: 'Products tested to meet strict gluten-free standards' },
          { term: 'Malt', definition: 'Flavoring made from barley, contains gluten' }
        ],
        examples: [
          'Reading labels for hidden gluten',
          'Gluten-free baking alternatives',
          'Safe condiments and seasonings',
          'Alcoholic beverages to avoid'
        ]
      }
    },
    {
      level: 3,
      title: 'Celiac Disease Pathophysiology',
      description: 'Understanding gluten-related disorders',
      content: {
        keyPoints: [
          'Celiac disease is an autoimmune condition, not an allergy',
          'Gluten triggers immune response damaging intestinal villi',
          'Damage leads to malabsorption of nutrients',
          'Genetic predisposition (HLA-DQ2/DQ8) required',
          'Screening and diagnostic procedures',
          'Treatment adherence critical for health'
        ],
        definitions: [
          { term: 'Villous atrophy', definition: 'Flattening of the intestinal villi, reducing absorption surface' },
          { term: 'Transglutaminase antibodies', definition: 'Autoantibodies produced in celiac disease used for diagnosis' },
          { term: 'Dermatitis herpetiformis', definition: 'Skin manifestation of celiac disease' }
        ],
        examples: [
          'Diagnostic antibody testing',
          'Intestinal biopsy findings',
          'Genetic testing for celiac risk',
          'Non-celiac gluten sensitivity diagnosis'
        ]
      }
    },
    {
      level: 4,
      title: 'Nutritional Considerations',
      description: 'Preventing deficiencies while gluten-free',
      content: {
        keyPoints: [
          'Many gluten-free products are not fortified',
          'Common deficiencies on untreated celiac disease',
          'Fiber intake may decrease on gluten-free diet',
          'Calcium and vitamin D often inadequate',
          'B vitamin status may be compromised',
          'Weight changes can occur after diagnosis'
        ],
        definitions: [
          { term: 'Fortification', definition: 'Addition of nutrients to foods that may not naturally contain them' },
          { term: 'Enrichment', definition: 'Adding back nutrients that were lost during processing' },
          { term: 'Nutrient density', definition: 'Nutrients provided per calorie of food' }
        ],
        examples: [
          'Choosing nutrient-dense gluten-free grains',
          'Calcium sources without wheat',
          'Fiber strategies on gluten-free diet',
          'B vitamin supplementation considerations'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Clinical Management',
      description: 'Complex cases and therapeutic approaches',
      content: {
        keyPoints: [
          'Non-responsive celiac disease',
          'Refractory celiac disease',
          'Gluten ataxia and neurological manifestations',
          'Potential complications of untreated celiac disease',
          'Intestinal permeability and gluten',
          'Emerging therapies for celiac disease'
        ],
        definitions: [
          { term: 'Refractory celiac disease', definition: 'Celiac disease that does not respond to gluten-free diet' },
          { term: 'Gluten ataxia', definition: 'Neurological condition caused by gluten exposure' },
          { term: 'Intestinal permeability', definition: 'The ability of substances to pass through the intestinal wall' }
        ],
        examples: [
          'Monitoring for complications',
          'Collaborative care with gastroenterology',
          'Ongoing gluten exposure assessment',
          'Quality of life considerations'
        ]
      }
    }
  ]
};
