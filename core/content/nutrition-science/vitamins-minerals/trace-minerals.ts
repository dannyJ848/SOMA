import { EducationalContent } from '../types';

export const traceMinerals: EducationalContent = {
  id: 'trace-minerals',
  title: 'Trace Minerals',
  category: 'vitamins-minerals',
  description: 'Iron, zinc, copper, manganese, selenium, iodine, chromium, molybdenum, and fluoride',
  levels: [
    {
      level: 1,
      title: 'Introduction to Trace Minerals',
      description: 'Overview of essential trace minerals',
      content: {
        keyPoints: [
          'Trace minerals are needed in amounts less than 100mg per day',
          'Essential trace minerals include iron, zinc, copper, manganese, selenium, iodine, chromium, molybdenum, and fluoride',
          'Despite small requirements, they are vital for health',
          'Many serve as enzyme cofactors or antioxidants'
        ],
        definitions: [
          { term: 'Micromineral', definition: 'Minerals required in small amounts (less than 100mg daily)' },
          { term: 'Cofactor', definition: 'A substance that assists enzymes in performing their functions' },
          { term: 'Antioxidant', definition: 'A compound that protects cells from oxidative damage' }
        ],
        examples: [
          'Iron in red meat and fortified cereals',
          'Zinc in oysters and pumpkin seeds',
          'Iodine in iodized salt and seafood',
          'Selenium in Brazil nuts'
        ]
      }
    },
    {
      level: 2,
      title: 'Iron and Zinc',
      description: 'The most critical trace minerals',
      content: {
        keyPoints: [
          'Iron is essential for oxygen transport and energy metabolism',
          'Heme iron from animal sources is better absorbed than non-heme iron',
          'Zinc supports immune function, wound healing, and DNA synthesis',
          'Both minerals are common deficiencies worldwide',
          'Iron and zinc compete for absorption'
        ],
        definitions: [
          { term: 'Heme iron', definition: 'Iron found in animal foods, bound to hemoglobin proteins' },
          { term: 'Non-heme iron', definition: 'Iron from plant sources, less bioavailable than heme iron' },
          { term: 'Ferritin', definition: 'The iron storage protein; also used to assess iron status' }
        ],
        examples: [
          'Anemia from iron deficiency',
          'Zinc for immune support during illness',
          'Vegetarian considerations for iron absorption',
          'Zinc lozenges for cold symptom reduction'
        ]
      }
    },
    {
      level: 3,
      title: 'Selenium, Iodine, and Thyroid Function',
      description: 'Trace minerals critical for endocrine health',
      content: {
        keyPoints: [
          'Iodine is essential for thyroid hormone production',
          'Selenium is required for thyroid hormone activation',
          'Iodine deficiency causes goiter and hypothyroidism',
          'Selenium protects the thyroid from oxidative damage',
          'Both deficiencies remain global health concerns'
        ],
        definitions: [
          { term: 'Goiter', definition: 'Enlargement of the thyroid gland due to iodine deficiency' },
          { term: 'Thyroxine', definition: 'T4, the primary thyroid hormone produced by the thyroid gland' },
          { term: 'Selenoproteins', definition: 'Proteins containing selenium at their active site' }
        ],
        examples: [
          'Iodized salt preventing goiter',
          'Kelp as an iodine source',
          'Selenium in Brazil nuts',
          'Thyroid hormone synthesis pathway'
        ]
      }
    },
    {
      level: 4,
      title: 'Copper, Manganese, and Other Trace Minerals',
      description: 'Essential minerals with specific functions',
      content: {
        keyPoints: [
          'Copper supports iron metabolism and antioxidant defense',
          'Manganese is involved in bone formation and metabolism',
          'Chromium enhances insulin action',
          'Molybdenum is a cofactor for several enzymes',
          'Fluoride supports dental health',
          'Balance between trace minerals is crucial'
        ],
        definitions: [
          { term: 'Superoxide dismutase', definition: 'An antioxidant enzyme requiring copper, zinc, or manganese' },
          { term: 'Ceruloplasmin', definition: 'A copper-containing protein that transports iron in the blood' },
          { term: 'Glucose tolerance factor', definition: 'A chromium-containing compound that enhances insulin action' }
        ],
        examples: [
          'Copper deficiency rare but can cause anemia',
          'Manganese in bone health supplements',
          'Chromium in blood sugar management',
          'Fluoride in dental caries prevention'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Clinical Applications',
      description: 'Therapeutic uses and complex interactions',
      content: {
        keyPoints: [
          'Iron supplementation protocols in different populations',
          'Zinc for Wilson\'s disease management',
          'Selenium in cancer prevention research',
          'Trace mineral interactions and competition for absorption',
          'Genetic variations affecting trace mineral metabolism',
          'Metallothioneins and mineral binding proteins'
        ],
        definitions: [
          { term: 'Hemochromatosis', definition: 'A genetic disorder causing excessive iron absorption' },
          { term: 'Wilson\'s disease', definition: 'A genetic disorder causing copper accumulation' },
          { term: 'Metallothionein', definition: 'Proteins that bind and regulate metals like zinc and copper' }
        ],
        examples: [
          'Iron chelation therapy',
          'Zinc for copper overload conditions',
          'Selenium in HIV/AIDS nutrition support',
          'Trace mineral assessment in malabsorption syndromes'
        ]
      }
    }
  ]
};
