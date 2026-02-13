import { EducationalContent } from '../types';

export const vegetarian: EducationalContent = {
  id: 'vegetarian',
  title: 'Vegetarian Nutrition',
  category: 'special-diets',
  description: 'Nutritional considerations for vegetarian and plant-based diets',
  levels: [
    {
      level: 1,
      title: 'Introduction to Vegetarian Diets',
      description: 'Overview of vegetarian eating patterns',
      content: {
        keyPoints: [
          'Vegetarian diets exclude meat, poultry, and fish',
          'Lacto-ovo vegetarians include dairy and eggs',
          'Vegan diets exclude all animal products',
          'Well-planned vegetarian diets can be nutritionally adequate',
          'Vegetarian diets associated with various health benefits'
        ],
        definitions: [
          { term: 'Lacto-ovo vegetarian', definition: 'Vegetarian who consumes dairy products and eggs' },
          { term: 'Vegan', definition: 'Person who consumes no animal products whatsoever' },
          { term: 'Plant-based', definition: 'Diet emphasizing foods from plant sources' }
        ],
        examples: [
          'Mediterranean vegetarian patterns',
          'Traditional Asian vegetarian cuisines',
          'Flexitarian approaches',
          'Whole food plant-based diets'
        ]
      }
    },
    {
      level: 2,
      title: 'Protein and Amino Acid Considerations',
      description: 'Meeting protein needs on vegetarian diets',
      content: {
        keyPoints: [
          'Plant proteins can provide all essential amino acids',
          'Protein combining is not necessary at each meal',
          'Variety of plant foods ensures adequate amino acid intake',
          'Vegetarians need slightly more protein due to digestibility',
          'Soy and quinoa are complete plant proteins'
        ],
        definitions: [
          { term: 'Complete protein', definition: 'Food containing all nine essential amino acids in adequate amounts' },
          { term: 'Essential amino acids', definition: 'Amino acids that must be obtained from the diet' },
          { term: 'Complementary proteins', definition: 'Plant proteins that together provide complete amino acid profile' }
        ],
        examples: [
          'Beans and rice combination',
          'Hummus with pita bread',
          'Tofu as protein source',
          'Lentil soups and stews'
        ]
      }
    },
    {
      level: 3,
      title: 'Critical Nutrients in Vegetarian Diets',
      description: 'Key nutrients requiring attention',
      content: {
        keyPoints: [
          'Vitamin B12 is the most critical nutrient for vegans',
          'Iron from plant sources is less bioavailable than heme iron',
          'Zinc absorption from plant foods can be lower',
          'Calcium needs attention without dairy',
          'Omega-3 fatty acids require plant sources',
          'Iodine may be insufficient without seafood or iodized salt'
        ],
        definitions: [
          { term: 'Bioavailability', definition: 'The proportion of a nutrient that is absorbed and utilized' },
          { term: 'Non-heme iron', definition: 'Iron from plant sources, less well absorbed than heme iron' },
          { term: 'ALA', definition: 'Alpha-linolenic acid, the plant-based omega-3 fatty acid' }
        ],
        examples: [
          'Fortified nutritional yeast for B12',
          'Cast iron cookware increasing iron content',
          'Vitamin C enhancing iron absorption',
          'Seaweed as iodine source'
        ]
      }
    },
    {
      level: 4,
      title: 'Health Benefits and Clinical Considerations',
      description: 'Evidence-based health outcomes',
      content: {
        keyPoints: [
          'Vegetarian diets associated with lower chronic disease risk',
          'Lower rates of heart disease, hypertension, and type 2 diabetes',
          'Potential benefits for weight management',
          'Considerations for specific medical conditions',
          'Life stage considerations for vegetarian diets',
          'Athletic performance on plant-based diets'
        ],
        definitions: [
          { term: 'Chronic disease', definition: 'Long-term health conditions like heart disease or diabetes' },
          { term: 'BMI', definition: 'Body Mass Index, a measure of body fat based on height and weight' },
          { term: 'Plant-forward', definition: 'Diet emphasizing plant foods while not completely eliminating animal products' }
        ],
        examples: [
          'Cardiovascular risk reduction',
          'Diabetes management benefits',
          'Pregnancy and lactation considerations',
          'Childhood vegetarian nutrition'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Vegetarian Nutrition',
      description: 'Special considerations and therapeutic applications',
      content: {
        keyPoints: [
          'Vegetarian diets in chronic disease management',
          'Anti-inflammatory properties of plant compounds',
          'Phytochemicals and health promotion',
          'Environmental sustainability considerations',
          'Personalized plant-based nutrition',
          'Supplementation strategies for vegetarians'
        ],
        definitions: [
          { term: 'Phytochemicals', definition: 'Bioactive compounds in plants with potential health benefits' },
          { term: 'Phytoestrogens', definition: 'Plant compounds with weak estrogen-like activity' },
          { term: 'Nutrient density', definition: 'Amount of nutrients per calorie of food' }
        ],
        examples: [
          'Vegetarian diets in cancer prevention',
          'PCOS management with plant-based eating',
          'Menopausal symptom relief with soy',
          'Gut microbiome effects of plant diets'
        ]
      }
    }
  ]
};
