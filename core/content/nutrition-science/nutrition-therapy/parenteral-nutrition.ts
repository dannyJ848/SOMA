import { EducationalContent } from '../types';

export const parenteralNutrition: EducationalContent = {
  id: 'parenteral-nutrition',
  title: 'Parenteral Nutrition',
  category: 'nutrition-therapy',
  description: 'Intravenous nutritional support',
  levels: [
    {
      level: 1,
      title: 'Introduction to Parenteral Nutrition',
      description: 'Overview of IV nutrition therapy',
      content: {
        keyPoints: [
          'Parenteral nutrition delivers nutrients intravenously',
          'Used when GI tract cannot be used for nutrition',
          'Can provide complete or supplemental nutrition',
          'Requires specialized formulation and monitoring',
          'More complex and costly than enteral nutrition'
        ],
        definitions: [
          { term: 'Parenteral nutrition', definition: 'Intravenous administration of nutrition' },
          { term: 'Central line', definition: 'Intravenous catheter terminating near the heart' },
          { term: 'PN', definition: 'Abbreviation for parenteral nutrition' }
        ],
        examples: [
          'Complete bowel obstruction',
          'Severe pancreatitis',
          'High-output fistula',
          'GI tract failure'
        ]
      }
    },
    {
      level: 2,
      title: 'PN Components',
      description: 'Ingredients in parenteral nutrition',
      content: {
        keyPoints: [
          'Macronutrients: dextrose, amino acids, lipids',
          'Micronutrients: electrolytes, vitamins, trace minerals',
          'Fluids and water requirements',
          'Individualized formulations',
          'Concentration limits for compatibility',
          'Sterile compounding required'
        ],
        definitions: [
          { term: 'Dextrose', definition: 'Glucose solution used as PN carbohydrate source' },
          { term: 'Amino acids', definition: 'Protein components in PN' },
          { term: 'Lipid emulsion', definition: 'Intravenous fat source in PN' }
        ],
        examples: [
          'Standard PN macronutrient ratios',
          'Electrolyte additions',
          'MVI (multivitamin) infusion',
          'Trace element additions'
        ]
      }
    },
    {
      level: 3,
      title: 'Access and Administration',
      description: 'Venous access and delivery methods',
      content: {
        keyPoints: [
          'Central venous access for TPN',
          'Peripheral PN possible for limited duration',
          'PICC lines for intermediate-term access',
          'Tunneled catheters for long-term TPN',
          'Infusion pump requirements',
          'Aseptic technique essential'
        ],
        definitions: [
          { term: 'TPN', definition: 'Total Parenteral Nutrition, providing all nutrients' },
          { term: 'PICC', definition: 'Peripherally Inserted Central Catheter' },
          { term: 'PPN', definition: 'Peripheral Parenteral Nutrition, via smaller veins' }
        ],
        examples: [
          'Subclavian catheter placement',
          'PICC line for TPN',
          'Implanted port for HPN',
          'Infusion rate considerations'
        ]
      }
    },
    {
      level: 4,
      title: 'Complications and Monitoring',
      description: 'Preventing and managing PN problems',
      content: {
        keyPoints: [
          'Metabolic complications: hyperglycemia, electrolyte abnormalities',
          'Infectious complications: catheter-related infections',
          'Hepatic complications: PN-associated liver disease',
          'Refeeding syndrome prevention',
          'Fluid balance monitoring',
          'Regular laboratory surveillance'
        ],
        definitions: [
          { term: 'Refeeding syndrome', definition: 'Dangerous shifts in fluids and electrolytes when restarting nutrition' },
          { term: 'Hyperglycemia', definition: 'Elevated blood glucose levels' },
          { term: 'PN-associated liver disease', definition: 'Liver dysfunction from long-term PN' }
        ],
        examples: [
          'Managing hyperglycemia on PN',
          'Preventing refeeding syndrome',
          'Catheter infection protocols',
          'Liver function monitoring'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced PN Concepts',
      description: 'Specialized applications and management',
      content: {
        keyPoints: [
          'Home parenteral nutrition (HPN)',
          'Intestinal failure management',
          'Cyclic PN protocols',
          'Multiple bag vs. all-in-one systems',
          'Weaning from PN',
          'Intestinal transplantation considerations'
        ],
        definitions: [
          { term: 'Intestinal failure', definition: 'Loss of intestinal absorptive capacity requiring PN' },
          { term: 'Cyclic PN', definition: 'PN administered over fewer than 24 hours' },
          { term: 'All-in-one', definition: 'PN with all components combined in one bag' }
        ],
        examples: [
          'Short bowel syndrome HPN',
          'Long-term TPN complications',
          'Intestinal rehabilitation programs',
          'Transition from PN to enteral'
        ]
      }
    }
  ]
};
