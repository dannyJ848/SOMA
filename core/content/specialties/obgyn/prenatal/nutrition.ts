/**
 * Prenatal Nutrition Content
 *
 * Coverage of nutritional requirements and recommendations during pregnancy.
 */

import { EducationalContent } from '../../../types';

export const prenatalNutritionContent: EducationalContent = {
  id: 'obgyn-prenatal-nutrition',
  type: 'pathway',
  name: 'Prenatal Nutrition',
  alternateNames: ['Pregnancy diet', 'Prenatal vitamins'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Good nutrition during pregnancy helps your baby grow healthy and strong.',
      explanation: `Eating well during pregnancy is important for you and your baby.

**Key nutrients:**
- Folic acid: Prevents brain and spine defects
- Iron: Prevents anemia
- Calcium: Builds baby's bones
- Protein: Helps baby grow

**What to eat:**
- Fruits and vegetables
- Whole grains
- Lean proteins
- Dairy products

**What to avoid:**
- Raw fish and undercooked meat
- Unpasteurized dairy
- Excess caffeine
- Alcohol`,
      keyTerms: [
        { term: 'prenatal vitamin', definition: 'Supplement with nutrients important for pregnancy' },
        { term: 'folic acid', definition: 'Vitamin that prevents neural tube defects' },
      ],
    },
    2: {
      level: 2,
      summary: 'Pregnancy nutrition requirements include increased calories, specific micronutrients, and avoidance of harmful foods and substances.',
      explanation: `**Caloric Needs:**
- First trimester: No additional calories needed
- Second trimester: ~340 extra calories/day
- Third trimester: ~450 extra calories/day

**Key Micronutrients:**
| Nutrient | Daily Need | Source |
|----------|-----------|--------|
| Folic acid | 400-800 mcg | Prenatal vitamin, leafy greens |
| Iron | 27 mg | Prenatal vitamin, meat, beans |
| Calcium | 1000 mg | Dairy, fortified foods |
| Vitamin D | 600 IU | Sunlight, fortified foods |
| DHA | 200-300 mg | Fish, supplements |

**Weight Gain Goals:**
- Underweight (BMI <18.5): 28-40 lbs
- Normal (BMI 18.5-24.9): 25-35 lbs
- Overweight (BMI 25-29.9): 15-25 lbs
- Obese (BMI ≥30): 11-20 lbs

**Foods to Avoid:**
- High-mercury fish
- Raw/undercooked eggs, meat, fish
- Unpasteurized products
- Deli meats (unless heated)`,
      keyTerms: [
        { term: 'DHA', definition: 'Omega-3 fatty acid important for brain development' },
        { term: 'neural tube defect', definition: 'Birth defect of brain or spine prevented by folic acid' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based prenatal nutrition includes targeted supplementation, management of special dietary needs, and counseling for pregnancy complications.',
      explanation: `**Folic Acid Timing:**
- Critical: Before conception and first 28 days
- Neural tube closure by day 28
- Many pregnancies unplanned → universal supplementation
- Higher dose (4mg) for history of NTD

**Iron Supplementation:**
- All pregnant women recommended 27mg/day
- Screening for anemia at first visit, 24-28 weeks
- Additional supplementation if deficient
- GI side effects common

**Vitamin D Considerations:**
- Deficiency common, especially in darker skin
- Screening controversial
- 600 IU minimum, some need more
- Important for calcium absorption

**Special Dietary Needs:**
- Vegetarian/vegan: B12, iron, zinc, DHA
- Celiac disease: Gluten-free options
- Food allergies: Safe alternatives
- Lactose intolerance: Calcium sources

**Gestational Diabetes:**
- Carbohydrate counting
- Glycemic index considerations
- Medical nutrition therapy first-line`,
      keyTerms: [
        { term: 'medical nutrition therapy', definition: 'Dietitian-directed nutritional intervention' },
        { term: 'macrosomia', definition: 'Large baby, associated with excess weight gain' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced prenatal nutrition addresses micronutrient interactions, evidence for supplementation, and management of eating disorders.',
      explanation: `**Micronutrient Interactions:**
- Iron and calcium compete for absorption (separate dosing)
- Vitamin C enhances iron absorption
- Zinc and iron competition
- Folate and B12 interaction

**Evidence for Supplements:**
- Folic acid: Strong evidence for NTD prevention
- Iron: Prevents maternal anemia
- Calcium: May reduce preeclampsia risk
- DHA: Modest evidence for neurodevelopment
- Probiotics: Emerging evidence

**Iodine:**
- Critical for thyroid and brain development
- 220 mcg/day recommended
- Not in all prenatal vitamins
- Salt iodization variable

**Mercury in Fish:**
- Avoid: Shark, swordfish, king mackerel, tilefish
- Limit: Albacore tuna
- Encourage: Low-mercury fish (salmon, sardines)
- Benefits of fish consumption outweigh risks if low-mercury

**Eating Disorders:**
- Screen for history
- Monitor weight gain closely
- Multidisciplinary approach
- Higher risk for complications`,
      keyTerms: [
        { term: 'iodine', definition: 'Mineral essential for thyroid function and fetal brain development' },
        { term: 'methylmercury', definition: 'Toxic form of mercury accumulating in certain fish' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive prenatal nutrition encompasses developmental origins of disease, personalized approaches, and global nutrition challenges.',
      explanation: `**Developmental Origins of Disease:**
- Fetal nutrition programs adult health
- Barker hypothesis
- Both undernutrition and overnutrition harmful
- Epigenetic modifications
- Implications for obesity, diabetes, cardiovascular disease

**Personalized Nutrition:**
- Nutrigenomics
- MTHFR polymorphisms and folate
- Individual micronutrient needs
- Microbiome considerations

**Hyperemesis Management:**
- NPO with IV fluids if severe
- Thiamine supplementation (prevent Wernicke)
- Enteral feeding if prolonged
- TPN rarely needed

**Food Insecurity:**
- Screen for access issues
- WIC program referral
- Food bank resources
- Impact on pregnancy outcomes

**Global Perspective:**
- Micronutrient deficiencies widespread
- Multiple micronutrient supplements
- Malaria and nutrition interaction
- Deworming programs

**Research Directions:**
- Optimal micronutrient formulations
- Timing of supplementation
- Personalized recommendations
- Microbiome modification`,
      keyTerms: [
        { term: 'MTHFR', definition: 'Gene affecting folate metabolism, polymorphisms may increase folate needs' },
        { term: 'WIC', definition: 'Women, Infants, and Children supplemental nutrition program' },
      ],
      clinicalNotes: 'Start folic acid before pregnancy when possible. Prenatal vitamins should contain iron and ideally iodine. Address food insecurity as part of prenatal care. Excessive weight gain is associated with macrosomia and cesarean delivery.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-nutrition',
      type: 'article',
      title: 'Nutrition During Pregnancy',
      source: 'ACOG Committee Opinion',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-prenatal-care-overview', targetType: 'pathway', relationship: 'parent', label: 'Prenatal Care' },
    { targetId: 'obgyn-pregnancy-overview', targetType: 'pathway', relationship: 'related', label: 'Pregnancy' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['prenatal care', 'nutrition'],
    keywords: ['prenatal nutrition', 'folic acid', 'iron', 'prenatal vitamins', 'weight gain'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
