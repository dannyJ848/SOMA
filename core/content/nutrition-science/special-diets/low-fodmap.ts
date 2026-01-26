import { EducationalContent } from '../types';

export const lowFodmap: EducationalContent = {
  id: 'low-fodmap',
  title: 'Low FODMAP Diet',
  category: 'special-diets',
  description: 'Dietary management for IBS and digestive disorders',
  levels: [
    {
      level: 1,
      title: 'Introduction to FODMAPs',
      description: 'Understanding fermentable carbohydrates',
      content: {
        keyPoints: [
          'FODMAP stands for Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols',
          'These are short-chain carbohydrates that are poorly absorbed in the small intestine',
          'FODMAPs ferment in the colon, producing gas and attracting water',
          'Low FODMAP diet is evidence-based for IBS management',
          'This is a temporary elimination diet, not a lifelong eating pattern'
        ],
        definitions: [
          { term: 'Fermentable', definition: 'Substances that can be broken down by bacteria in the colon' },
          { term: 'IBS', definition: 'Irritable Bowel Syndrome, a functional gastrointestinal disorder' },
          { term: 'Elimination diet', definition: 'Dietary approach that removes certain foods and systematically reintroduces them' }
        ],
        examples: [
          'Common high FODMAP foods',
          'Symptoms triggered by FODMAPs',
          'Who may benefit from low FODMAP diet',
          'Working with a dietitian for guidance'
        ]
      }
    },
    {
      level: 2,
      title: 'The FODMAP Categories',
      description: 'Detailed look at each FODMAP group',
      content: {
        keyPoints: [
          'Oligosaccharides: Fructans (wheat, onion, garlic) and GOS (legumes)',
          'Disaccharides: Lactose (milk, soft cheeses)',
          'Monosaccharides: Excess fructose (honey, high-fructose corn syrup, some fruits)',
          'Polyols: Sugar alcohols (sorbitol, mannitol) in certain fruits and artificial sweeteners',
          'Each person has different FODMAP tolerances'
        ],
        definitions: [
          { term: 'Fructans', definition: 'Chains of fructose molecules found in wheat, onion, and garlic' },
          { term: 'Galacto-oligosaccharides (GOS)', definition: 'Carbohydrates found in legumes and some nuts' },
          { term: 'Polyols', definition: 'Sugar alcohols used as sweeteners and found naturally in some foods' }
        ],
        examples: [
          'High fructan foods to limit',
          'Lactose-containing dairy products',
          'High-fructose fruits vs. low-fructose options',
          'Sugar-free gums containing polyols'
        ]
      }
    },
    {
      level: 3,
      title: 'Low FODMAP Diet Phases',
      description: 'Implementation protocol for the diet',
      content: {
        keyPoints: [
          'Phase 1: Strict elimination (2-6 weeks)',
          'Phase 2: Systematic reintroduction of each FODMAP group',
          'Phase 3: Personalization based on tolerance',
          'Proper guidance from a dietitian is essential',
          'Long-term restriction is not recommended',
          'Variety in the diet is important for gut health'
        ],
        definitions: [
          { term: 'Elimination phase', definition: 'Initial period of strict avoidance of all high FODMAP foods' },
          { term: 'Challenge phase', definition: 'Systematic reintroduction of FODMAP groups to test tolerance' },
          { term: 'Threshold', definition: 'The amount of a food that can be tolerated without symptoms' }
        ],
        examples: [
          'Sample low FODMAP meal plan',
          'Reading labels for hidden FODMAPs',
          'Dining out on low FODMAP diet',
          'Food diary during reintroduction'
        ]
      }
    },
    {
      level: 4,
      title: 'Nutritional Considerations',
      description: 'Maintaining nutritional balance on low FODMAP diet',
      content: {
        keyPoints: [
          'Low FODMAP diet can reduce fiber intake if not carefully planned',
          'Calcium intake may decrease without dairy',
          'Probiotic foods may be limited during elimination',
          'Prebiotic effects reduced with low FODMAP intake',
          'Long-term gut health considerations',
          'Working toward the most liberal diet possible'
        ],
        definitions: [
          { term: 'Prebiotic', definition: 'Substance that feeds beneficial gut bacteria' },
          { term: 'Resistant starch', definition: 'Starch that resists digestion and feeds colonic bacteria' },
          { term: 'Microbiome', definition: 'The community of microorganisms living in the gut' }
        ],
        examples: [
          'Low FODMAP fiber sources',
          'Calcium-rich low FODMAP foods',
          'Probiotic options during diet',
          'Gradual expansion of diet post-challenge'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Applications and Special Populations',
      description: 'Complex cases and emerging research',
      content: {
        keyPoints: [
          'SIBO (Small Intestinal Bacterial Overgrowth) and FODMAPs',
          'Endometriosis and dietary management',
          'FODMAP stacking concept',
          'Combining low FODMAP with other dietary approaches',
          'Pediatric considerations for low FODMAP',
          'Individual variability in FODMAP response'
        ],
        definitions: [
          { term: 'SIBO', definition: 'Excess bacteria in the small intestine' },
          { term: 'FODMAP stacking', definition: 'Accumulation of FODMAPs from multiple foods in a meal' },
          { term: 'Visceral hypersensitivity', definition: 'Heightened pain perception in the internal organs' }
        ],
        examples: [
          'Modified low FODMAP for athletes',
          'Combining with other IBS treatments',
          'Psychological aspects of dietary restriction',
          'Personalized nutrition approaches'
        ]
      }
    }
  ]
};
