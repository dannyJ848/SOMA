import { EducationalContent } from '../types';

export const enteralNutrition: EducationalContent = {
  id: 'enteral-nutrition',
  title: 'Enteral Nutrition',
  category: 'nutrition-therapy',
  description: 'Tube feeding and nutritional support',
  levels: [
    {
      level: 1,
      title: 'Introduction to Enteral Nutrition',
      description: 'Overview of tube feeding',
      content: {
        keyPoints: [
          'Enteral nutrition delivers nutrition directly to the GI tract',
          'Used when oral intake is inadequate but GI function is intact',
          'Preferred over parenteral nutrition when GI tract functional',
          'Can provide complete or supplemental nutrition',
          'Maintains gut integrity and immune function'
        ],
        definitions: [
          { term: 'Enteral nutrition', definition: 'Delivery of nutrients directly to the stomach or small intestine' },
          { term: 'Tube feeding', definition: 'Administration of liquid nutrition through a tube' },
          { term: 'Formula', definition: 'Liquid nutrition preparation containing proteins, carbohydrates, fats, vitamins, and minerals' }
        ],
        examples: [
          'Nasogastric tube feeding',
          'Gastrostomy tube feeding',
          'Post-operative nutrition support',
          'Stroke patients with swallowing difficulties'
        ]
      }
    },
    {
      level: 2,
      title: 'Access Devices',
      description: 'Types of feeding tubes',
      content: {
        keyPoints: [
          'Nasogastric tubes: nose to stomach',
          'Nasoenteric tubes: nose to small intestine',
          'Gastrostomy tubes: direct stomach access',
          'Jejunostomy tubes: direct small intestine access',
          'Each type has specific indications',
          'Duration of need influences tube selection'
        ],
        definitions: [
          { term: 'Nasogastric (NG) tube', definition: 'Feeding tube passed through the nose into the stomach' },
          { term: 'PEG tube', definition: 'Percutaneous endoscopic gastrostomy, tube placed through abdomen into stomach' },
          { term: 'Nasojejunal (NJ) tube', definition: 'Tube from nose to jejunum (small intestine)' }
        ],
        examples: [
          'Short-term NG tube use',
          'Long-term PEG placement',
          'Post-surgical NJ tube',
          'Gastrostomy button devices'
        ]
      }
    },
    {
      level: 3,
      title: 'Enteral Formulas',
      description: 'Types of tube feeding formulas',
      content: {
        keyPoints: [
          'Standard polymeric formulas for most patients',
          'Peptide-based formulas for malabsorption',
          'Elemental formulas for severe GI issues',
          'Disease-specific formulas available',
          'Fiber-containing vs. fiber-free',
          'Caloric density variations'
        ],
        definitions: [
          { term: 'Polymeric formula', definition: 'Formula with intact proteins, requiring normal digestion' },
          { term: 'Peptide-based formula', definition: 'Formula with partially broken down proteins' },
          { term: 'Elemental formula', definition: 'Formula with nutrients in simplest absorbed form' }
        ],
        examples: [
          'Standard 1.0 calorie/mL formula',
          'High-calorie 2.0 formula',
          'Renal-specific formulas',
          'Pulmonary formulas with lower CO2 production'
        ]
      }
    },
    {
      level: 4,
      title: 'Administration and Monitoring',
      description: 'Delivery methods and complications',
      content: {
        keyPoints: [
          'Continuous vs. bolus feeding',
          'Gastric residual volume monitoring',
          'Prevention of aspiration',
          'Managing diarrhea and other complications',
          'Tube site care',
          'Medication administration considerations'
        ],
        definitions: [
          { term: 'Bolus feeding', definition: 'Intermittent administration of formula volume' },
          { term: 'Continuous feeding', definition: 'Steady administration of formula over time' },
          { term: 'Aspiration', definition: 'Accidental inhalation of formula into lungs' }
        ],
        examples: [
          'Bolus feeding regimens',
          'Cyclic feeding for home patients',
          'Managing high residuals',
          'Preventing tube clogging'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Enteral Nutrition',
      description: 'Complex cases and special considerations',
      content: {
        keyPoints: [
          'Critical care enteral nutrition strategies',
          'Post-pyloric feeding indications',
          'Home enteral nutrition management',
          'Transition from hospital to home',
          'Complicated diarrhea management',
          'Enteral nutrition in specific diseases'
        ],
        definitions: [
          { term: 'Post-pyloric feeding', definition: 'Delivery of nutrients beyond the stomach' },
          { term: 'Trophic feeding', definition: 'Minimal enteral nutrition to maintain gut structure' },
          { term: 'ENTERAL transition', definition: 'Process from initiating enteral feeds to full nutritional needs' }
        ],
        examples: [
          'Pancreatitis enteral nutrition',
          'ICU early enteral feeding',
          'Pediatric home tube feeding',
          'Transition to oral diet'
        ]
      }
    }
  ]
};
