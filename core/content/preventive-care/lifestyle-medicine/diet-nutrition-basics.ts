/**
 * Diet and Nutrition Basics
 *
 * Comprehensive education on healthy eating and nutritional guidelines.
 */

import { EducationalContent } from '../../types';

export const DIET_NUTRITION_BASICS: EducationalContent = {
  id: 'concept-diet-nutrition-basics',
  type: 'concept',
  name: 'Diet and Nutrition Basics',
  alternateNames: ['Healthy eating', 'Nutritional guidelines', 'Dietary recommendations'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating a healthy diet with plenty of fruits, vegetables, and whole grains helps prevent many diseases and keeps you feeling your best.',
      explanation: `Good nutrition is one of the most important things you can do for your health.

**Key Principles:**
- Eat plenty of fruits and vegetables
- Choose whole grains over refined grains
- Include lean proteins
- Limit added sugars and saturated fats
- Watch portion sizes

**Foods to Eat More:**
- Vegetables and fruits (half your plate)
- Whole grains (brown rice, whole wheat)
- Lean proteins (fish, chicken, beans)
- Low-fat dairy
- Nuts and healthy oils

**Foods to Limit:**
- Sugar-sweetened beverages
- Processed meats
- Highly processed foods
- Excessive salt
- Saturated and trans fats`,
      keyTerms: [
        { term: 'whole grains', definition: 'Grains that contain all parts of the grain kernel, providing more nutrients' },
        { term: 'saturated fat', definition: 'Type of fat found mainly in animal products that can raise cholesterol' },
      ],
      analogies: ['Think of food as fuel for your body - quality fuel keeps the engine running smoothly.'],
      examples: ['By switching from white bread to whole wheat and adding more vegetables, Tom lowered his blood pressure.'],
    },
    2: {
      level: 2,
      summary: 'Evidence-based dietary patterns such as the Mediterranean and DASH diets have been shown to reduce cardiovascular disease, diabetes, and some cancers.',
      explanation: `**Recommended Dietary Patterns:**

*Mediterranean Diet:*
- Abundant plant foods
- Olive oil as primary fat
- Fish and poultry
- Limited red meat
- Moderate wine (optional)

*DASH Diet:*
- Fruits, vegetables, whole grains
- Low-fat dairy
- Lean meats
- Limited sodium (<2300mg)
- Reduces blood pressure

**Macronutrient Guidelines:**
- Carbohydrates: 45-65% of calories
- Protein: 10-35% of calories
- Fat: 20-35% of calories

**Key Micronutrients:**
- Calcium and Vitamin D (bone health)
- Iron (blood health)
- Folate (cell division)
- B12 (nerve function)
- Potassium (blood pressure)`,
      keyTerms: [
        { term: 'Mediterranean diet', definition: 'Eating pattern based on traditional foods from Mediterranean countries, rich in olive oil and vegetables' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; eating pattern proven to lower blood pressure' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Nutritional counseling integrates evidence from large cohort studies and randomized trials demonstrating that dietary patterns affect chronic disease risk through multiple mechanisms including inflammation, insulin sensitivity, and the gut microbiome.',
      explanation: `**Evidence Base:**

*PREDIMED Trial:*
- Mediterranean diet + olive oil or nuts
- 30% reduction in cardiovascular events
- Strong evidence for dietary intervention

*DASH-Sodium Trial:*
- DASH diet + sodium reduction
- Significant BP reduction
- Particularly effective in hypertensives

**Mechanisms:**
- Anti-inflammatory effects of plant foods
- Insulin sensitivity improvement
- Lipid profile optimization
- Gut microbiome modulation
- Oxidative stress reduction

**Clinical Applications:**
- Diabetes prevention: Weight loss, healthy diet
- Cardiovascular prevention: Mediterranean, DASH
- Cancer prevention: Plant-based patterns
- Weight management: Caloric deficit approaches`,
      keyTerms: [
        { term: 'PREDIMED', definition: 'Large trial demonstrating cardiovascular benefits of Mediterranean diet' },
        { term: 'gut microbiome', definition: 'Community of microorganisms in the intestines that affects health' },
      ],
      analogies: [],
      clinicalNotes: 'Recommend Mediterranean or DASH pattern for CVD prevention. Weight loss key for prediabetes/diabetes prevention. Address individual barriers to dietary change.',
    },
    4: {
      level: 4,
      summary: 'Advanced nutritional medicine integrates personalized approaches, addresses food insecurity and policy, and considers the environmental sustainability of dietary recommendations.',
      explanation: `**Personalized Nutrition:**
- Genetic influences on nutrient metabolism
- Microbiome-based recommendations
- Individual response variability
- Continuous glucose monitoring for diet optimization

**Food Access and Policy:**
- Food deserts and access issues
- SNAP and WIC programs
- School nutrition standards
- Food labeling policies
- Sugar-sweetened beverage taxes

**Sustainability:**
- Environmental impact of food choices
- Plant-based diets: Lower carbon footprint
- EAT-Lancet Commission recommendations
- Planetary health diet concept

**Special Diets:**
- Vegetarian/vegan: Can be healthy with planning
- Low-carbohydrate: Effective for weight loss, diabetes
- Intermittent fasting: Emerging evidence
- Medical nutrition therapy for specific conditions`,
      keyTerms: [
        { term: 'food desert', definition: 'Area with limited access to affordable, healthy food' },
        { term: 'EAT-Lancet Commission', definition: 'Report on healthy diets from sustainable food systems' },
        { term: 'medical nutrition therapy', definition: 'Nutritional intervention for disease management' },
      ],
      analogies: [],
      clinicalNotes: 'Screen for food insecurity. Consider individual barriers. Low-carb and Mediterranean both effective for diabetes. Address sustainability when appropriate.',
    },
    5: {
      level: 5,
      summary: 'Precision nutrition integrates genomics, metabolomics, and microbiome science to personalize dietary recommendations while addressing global food system challenges and health equity.',
      explanation: `**Precision Nutrition:**
- Nutrigenomics: Gene-diet interactions
- Metabolomic response profiling
- Microbiome-based personalization
- Digital phenotyping for diet optimization

**Research Frontiers:**
- PREDICT studies: Individual meal responses
- Microbiome-targeted interventions
- Time-restricted eating mechanisms
- Circadian nutrition

**Global Challenges:**
- Climate change impacts on food supply
- Sustainable protein sources
- Reducing food waste
- Global nutrition transition

**Implementation Science:**
- Effective dietary counseling methods
- Digital health interventions
- Community-based approaches
- Policy interventions for population health`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genes affect response to nutrients and how nutrients affect gene expression' },
        { term: 'PREDICT studies', definition: 'Large studies examining individual variation in response to foods' },
        { term: 'time-restricted eating', definition: 'Eating within a defined daily window' },
      ],
      analogies: [],
      clinicalNotes: 'Precision approaches emerging but not yet clinical standard. Individual variation in diet response is real. Address food system and equity issues. Stay current on evolving evidence.',
    },
  },

  media: [],
  citations: [
    {
      id: 'dietary-guidelines',
      type: 'website',
      title: 'Dietary Guidelines for Americans',
      source: 'USDA and HHS',
      url: 'https://www.dietaryguidelines.gov/',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['digestive', 'cardiovascular'],
    topics: ['preventive medicine', 'nutrition', 'lifestyle medicine'],
    keywords: ['diet', 'nutrition', 'Mediterranean', 'DASH', 'healthy eating'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
