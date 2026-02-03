/**
 * Diet and Carb Counting - Diabetes Management
 *
 * Teaching patients about nutrition and carbohydrate counting
 * for blood sugar management in diabetes.
 */

import { EducationalContent } from '../../types';

export const DIET_CARB_COUNTING: EducationalContent = {
  id: 'diabetes-diet-carb-counting',
  type: 'concept',
  name: 'Diet and Carbohydrate Counting',
  alternateNames: ['Carb counting', 'Diabetes nutrition', 'Medical nutrition therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Counting carbohydrates (carbs) in your food helps you manage your blood sugar because carbs have the biggest effect on blood sugar levels.',
      explanation: `**What Are Carbohydrates?**
Carbohydrates (carbs) are nutrients in food that turn into sugar (glucose) in your body. This is why carbs raise your blood sugar more than other foods.

**Where Are Carbs Found?**
- Bread, rice, pasta, and cereals
- Fruits and fruit juices
- Milk and yogurt
- Beans and legumes
- Sweets, candy, and desserts
- Starchy vegetables (potatoes, corn, peas)

**Foods That Don't Have Many Carbs:**
- Meat, fish, and poultry
- Cheese and eggs
- Non-starchy vegetables (lettuce, broccoli, tomatoes)
- Fats and oils

**What Is Carb Counting?**
Carb counting means keeping track of how many grams of carbohydrates you eat at each meal and snack.

**Why Count Carbs?**
- Helps keep blood sugar steady
- Lets you make better food choices
- Helps you understand how food affects your blood sugar
- Allows more flexibility in what you eat

**How Many Carbs Should I Eat?**
Everyone is different. A good starting point:
- Women: About 30-45 grams per meal
- Men: About 45-60 grams per meal
- Snacks: About 15-20 grams

Your doctor or dietitian will help you find the right amount for you.

**Reading Food Labels:**
Look for "Total Carbohydrate" on the Nutrition Facts label. This tells you how many grams of carbs are in one serving.

**Simple Serving Sizes:**
| Food | Serving | Carbs |
|------|---------|-------|
| Bread | 1 slice | ~15 g |
| Rice or pasta | 1/3 cup cooked | ~15 g |
| Apple | 1 small | ~15 g |
| Milk | 1 cup | ~12 g |

**Tips for Eating Well with Diabetes:**
1. Eat regular meals - don't skip
2. Fill half your plate with vegetables
3. Choose whole grains when you can
4. Limit sugary drinks
5. Watch portion sizes`,
      keyTerms: [
        { term: 'carbohydrates', definition: 'Nutrients in food that turn into sugar and give you energy' },
        { term: 'portion size', definition: 'The amount of food you actually eat' },
        { term: 'serving size', definition: 'The amount of food listed on the nutrition label' },
      ],
      analogies: [
        'Think of carbs as fuel for your body - you need the right amount. Too much fills your tank and overflows (high blood sugar), too little leaves you running on empty (low blood sugar).',
        'Carb counting is like budgeting money - you have a certain amount to "spend" at each meal.',
      ],
      examples: [
        'Maria wants a sandwich for lunch. She checks: 2 slices of bread (30g carbs) + apple (15g) = 45g total. This fits her meal plan.',
        'Tom learns that his bowl of cereal has 3 servings, so he needs to multiply the carbs by 3 to know how much he is really eating.',
      ],
    },
    2: {
      level: 2,
      summary: 'Carbohydrate counting is a meal planning approach that helps people with diabetes manage blood glucose by tracking carbohydrate intake, which has the most significant impact on post-meal blood sugar levels.',
      explanation: `**The Role of Carbohydrates in Diabetes:**

Carbohydrates are the primary macronutrient affecting blood glucose levels. During digestion, carbohydrates break down into glucose, which enters the bloodstream and raises blood sugar.

**Types of Carbohydrates:**

*1. Sugars (Simple Carbohydrates):*
- Natural: fruit, milk
- Added: table sugar, candy, sweetened beverages

*2. Starches (Complex Carbohydrates):*
- Grains, bread, pasta, rice
- Starchy vegetables: potatoes, corn, peas
- Beans and legumes

*3. Fiber:*
- Does not raise blood sugar
- Found in vegetables, fruits, whole grains
- Can be subtracted from total carbs

**Carbohydrate Counting Methods:**

*Basic Carb Counting:*
- Track total grams of carbohydrates per meal
- Aim for consistent carb intake
- Helps identify how much carbohydrate to eat

*Advanced Carb Counting:*
- Used with mealtime insulin
- Insulin-to-carb ratio (e.g., 1 unit per 10g carbs)
- Allows flexibility in carbohydrate intake

**Carbohydrate Servings:**

One "carb choice" or "carb serving" = 15 grams of carbohydrate

| Food Group | One Carb Serving (15g) |
|------------|------------------------|
| Starches | 1 slice bread, 1/3 cup rice/pasta |
| Fruit | 1 small piece, 1/2 cup canned |
| Milk | 1 cup |
| Sweets | Small portion (varies) |
| Vegetables | 3 cups raw or 1.5 cups cooked (non-starchy) |

**Reading Nutrition Labels:**

Key elements to check:
1. **Serving Size** - How much is one serving?
2. **Servings Per Container** - How many servings in the package?
3. **Total Carbohydrate** - Grams of carbs per serving
4. **Dietary Fiber** - Can subtract from total
5. **Total Sugars / Added Sugars** - Part of total carbs

**Glycemic Index and Glycemic Load:**

*Glycemic Index (GI):*
- Measures how quickly a food raises blood sugar
- Low GI (<55): Slower rise
- High GI (>70): Faster rise

*Factors Affecting GI:*
- Fiber content
- Fat and protein in meal
- Food processing/cooking
- Ripeness of fruit

**Meal Planning Strategies:**

*The Plate Method:*
- 1/2 plate: non-starchy vegetables
- 1/4 plate: lean protein
- 1/4 plate: carbohydrate/starch
- Plus: small serving of fruit and/or dairy

*Consistent Carbohydrate Approach:*
- Same carb amount at each meal
- Helps maintain consistent blood sugar patterns
- Easier for those not on flexible insulin

**Practical Tips:**
- Measure portions, especially at first
- Use measuring cups and food scales
- Learn to estimate when eating out
- Keep a food diary to see patterns
- Work with a registered dietitian`,
      keyTerms: [
        { term: 'glycemic index', definition: 'Ranking of how quickly a food raises blood sugar compared to pure glucose' },
        { term: 'carbohydrate serving', definition: 'Amount of food containing 15 grams of carbohydrate' },
        { term: 'insulin-to-carb ratio', definition: 'How much insulin is needed to cover a specific amount of carbohydrate' },
        { term: 'fiber', definition: 'Type of carbohydrate the body cannot digest; does not raise blood sugar' },
      ],
      analogies: [
        'The glycemic index is like how fast a car accelerates - high GI foods are like sports cars (fast blood sugar rise), while low GI foods are more like sedans (gradual rise).',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical nutrition therapy for diabetes centers on carbohydrate management, incorporating quantity control, quality considerations, and individualized meal planning to optimize glycemic outcomes.',
      explanation: `**Medical Nutrition Therapy (MNT) in Diabetes:**

MNT is an evidence-based approach to nutrition management delivered by registered dietitian nutritionists. It is essential for achieving glycemic targets and reducing complications.

**Macronutrient Considerations:**

*Carbohydrates:*
- Primary determinant of postprandial glucose
- No single ideal percentage of calories
- Quality matters (whole grains, fiber, limited added sugars)
- Individualized based on preferences and metabolic goals

*Protein:*
- 15-20% of calories typically
- Does not significantly affect blood glucose
- May modestly increase insulin secretion
- Higher protein may aid satiety

*Fat:*
- Quality over quantity
- Limit saturated and trans fats
- Emphasize unsaturated fats
- Mediterranean-style pattern beneficial

**Carbohydrate Quantification Methods:**

*1. Gram Counting:*
- Precise tracking of carbohydrate grams
- Required for insulin dosing calculations
- Most accurate with food scales and labels

*2. Carbohydrate Choices:*
- 1 choice = 15g carbohydrate
- Simplifies counting
- Good for consistent carb meal plans

*3. Exchange Lists:*
- Foods grouped by nutrient content
- Allows substitution within groups
- Useful for meal planning variety

**Insulin-to-Carbohydrate Ratios:**

*Calculating I:C Ratio:*
- Starting point: 500 rule (500 ÷ TDD = grams per unit)
- Or empirical testing with blood glucose monitoring
- Adjust based on postprandial glucose patterns

*Example:*
- Total daily dose (TDD) = 50 units
- 500 ÷ 50 = 10
- I:C ratio = 1:10 (1 unit per 10g carbs)

*Adjustments:*
| Post-meal BG | Action |
|--------------|--------|
| Consistently high | Decrease ratio (more insulin per carb) |
| Consistently low | Increase ratio (less insulin per carb) |
| Variable | Assess other factors |

**Glycemic Index/Load Application:**

*Glycemic Load (GL):*
- GL = (GI × carbs per serving) / 100
- Accounts for both quality and quantity
- Low GL: <10; High GL: >20

*Clinical Application:*
- Low GI foods may improve glycemic control
- Most benefit when replacing high GI foods
- Consider in context of overall diet pattern

**Dietary Patterns:**

*Evidence-Based Patterns:*
| Pattern | Key Features | Diabetes Evidence |
|---------|--------------|-------------------|
| Mediterranean | Olive oil, fish, vegetables | A1C reduction, CV benefit |
| DASH | Low sodium, high potassium | BP and lipid improvement |
| Plant-based | Limited animal products | A1C and weight benefit |
| Low-carbohydrate | <130g/day carbs | Short-term A1C reduction |

**Special Considerations:**

*Hypoglycemia Treatment:*
- 15-15 rule: 15g fast-acting carbs, recheck in 15 minutes
- Examples: 4 oz juice, glucose tablets, regular soda

*Exercise and Carbohydrates:*
- May need carb adjustment for activity
- Pre-exercise: 15-30g carbs if BG <100 mg/dL
- During prolonged exercise: 15-30g per 30-60 minutes

*Alcohol:*
- Can cause delayed hypoglycemia
- Eat carbohydrates with alcohol
- Monitor blood glucose`,
      keyTerms: [
        { term: 'medical nutrition therapy (MNT)', definition: 'Evidence-based nutrition counseling provided by registered dietitians as part of diabetes care' },
        { term: 'glycemic load', definition: 'Measure combining glycemic index and carbohydrate quantity to predict blood glucose impact' },
        { term: 'insulin-to-carbohydrate ratio', definition: 'Number of grams of carbohydrate covered by one unit of rapid-acting insulin' },
        { term: '500 rule', definition: 'Formula to estimate initial insulin-to-carb ratio: 500 divided by total daily insulin dose' },
      ],
      clinicalNotes: 'MNT by an RDN is recommended at diagnosis and as needed throughout care. No single macronutrient distribution is optimal for all patients. Low-carbohydrate diets can reduce A1C but require monitoring for hypoglycemia if on insulin or sulfonylureas.',
    },
    4: {
      level: 4,
      summary: 'Advanced carbohydrate management integrates quantitative meal planning, insulin dose calculations, glycemic index considerations, and dietary pattern optimization to achieve individualized glycemic and metabolic goals.',
      explanation: `**Nutritional Science in Diabetes:**

Carbohydrate management in diabetes applies principles of nutrient metabolism, endocrinology, and behavioral science to optimize glycemic control.

**Carbohydrate Metabolism:**

*Postprandial Glucose Dynamics:*
\`\`\`
Carbohydrate Ingestion
        ↓
Gastric Emptying (variable rate)
        ↓
Small Intestine Digestion
        ↓
Glucose Absorption
        ↓
Portal Vein → Liver (first-pass effect)
        ↓
Systemic Circulation (BG rise)
        ↓
Insulin Secretion/Action (or exogenous)
        ↓
Glucose Uptake (muscle, adipose)
        ↓
Return to Baseline
\`\`\`

*Factors Affecting Absorption:*
- Gastric emptying rate
- Food form (liquid vs. solid)
- Meal composition (fat, protein, fiber)
- Concurrent medications
- Autonomic function (gastroparesis)

**Advanced Carb Counting:**

*Precision in Estimation:*
- Food scales for accuracy
- Carbohydrate databases
- Portion estimation training
- Validation with CGM data

*Protein and Fat Considerations:*
- High protein/fat meals delay glucose rise
- May require extended insulin coverage
- Fat-Protein Units (FPU) concept
- Dual/extended bolus strategies

*Formula for Extended Bolus:*
\`\`\`
For high-fat/protein meals:
- Calculate carb bolus normally
- Consider FPU: (protein g × 4 + fat g × 9) / 100
- Extend insulin delivery over 3-4 hours for >1 FPU
\`\`\`

**Glycemic Index Science:**

*Physiological Basis:*
- Rate of carbohydrate digestion
- Glucose absorption kinetics
- Incretin response
- Insulin secretion pattern

*GI Determinants:*
| Factor | Effect on GI |
|--------|--------------|
| Fiber content | Lowers GI |
| Starch type (amylose/amylopectin) | Amylose lower GI |
| Food processing | Processing raises GI |
| Acidity | Lowers GI |
| Fat/protein | Lowers GI |
| Ripeness | Ripening raises GI |

**Dietary Pattern Research:**

*Systematic Review Evidence:*
- Mediterranean diet: 0.3-0.5% A1C reduction
- Low-carb (<26% energy): 0.5-1% A1C reduction short-term
- Very low carb (ketogenic): Larger effect but adherence challenges
- High fiber: Improved glycemic control and lipids

*Comparative Effectiveness:*
| Diet | A1C Impact | Sustainability | Additional Benefits |
|------|------------|----------------|---------------------|
| Mediterranean | Moderate | High | CV, weight |
| Low-carb | High (short-term) | Moderate | Weight, TG |
| Plant-based | Moderate | Variable | Weight, LDL |
| DASH | Low-moderate | High | BP |

**Technology Integration:**

*Digital Tools:*
- Carbohydrate counting apps
- Food photography analysis
- Barcode scanning
- CGM correlation with meals
- Bolus calculators

*Automated Insulin Delivery:*
- Meal announcement
- Carb entry requirements
- Extended bolus automation
- Missed meal detection

**Behavioral Approaches:**

*Motivational Interviewing:*
- Explore ambivalence
- Support autonomous choices
- Build self-efficacy
- Develop action plans

*Cognitive Behavioral Strategies:*
- Problem-solving
- Stimulus control
- Cognitive restructuring
- Self-monitoring`,
      keyTerms: [
        { term: 'fat-protein unit (FPU)', definition: 'Concept quantifying delayed glucose impact from protein and fat requiring extended insulin coverage' },
        { term: 'postprandial glucose excursion', definition: 'Rise in blood glucose following meal consumption' },
        { term: 'dual-wave bolus', definition: 'Insulin delivery combining immediate and extended components for mixed meals' },
        { term: 'incretin effect', definition: 'Enhanced insulin secretion from oral versus intravenous glucose due to gut hormones' },
        { term: 'gastroparesis', definition: 'Delayed gastric emptying affecting carbohydrate absorption timing' },
      ],
      clinicalNotes: 'High-fat/protein meals require consideration beyond carbohydrate content for insulin dosing. CGM data enables personalized assessment of food impacts. Dietary pattern changes require medication adjustment to prevent hypoglycemia. Long-term sustainability is critical for dietary intervention success.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art diabetes nutrition management integrates precision nutrition, metabolomics, digital health technology, and behavioral science to enable personalized, predictive dietary interventions.',
      explanation: `**Precision Nutrition in Diabetes:**

Contemporary diabetes nutrition moves beyond standardized recommendations toward personalized approaches informed by individual metabolic responses, genetics, and microbiome composition.

**Postprandial Glycemic Response Variability:**

*PREDICT Studies and Personalization:*
\`\`\`
Factors Explaining Glycemic Response:
- Meal composition: ~35%
- Individual factors: ~65%
  - Microbiome composition
  - Metabolic phenotype
  - Genetics
  - Meal timing/context
  - Prior glucose levels
\`\`\`

*Implications:*
- Glycemic index is average, not individual
- Same food causes different responses
- Personalized prediction possible with ML
- Microbiome modulation potential target

**Metabolomics and Nutrition:**

*Biomarker Applications:*
| Biomarker | Information |
|-----------|-------------|
| Branched-chain amino acids | Insulin resistance marker |
| Short-chain fatty acids | Microbiome/fiber fermentation |
| Acylcarnitines | Fat oxidation |
| Betaine | Choline metabolism |

*Metabolic Phenotyping:*
- Continuous metabolic monitoring (emerging)
- Meal response classification
- Diet-genotype interactions
- Pharmacogenomics applications

**Artificial Intelligence in Nutrition:**

*Current Applications:*
- Food image recognition
- Carbohydrate estimation
- Meal-glucose prediction
- Personalized recommendations

*Machine Learning Models:*
\`\`\`
Glucose Prediction Model:
Inputs:
- Food composition (macros, fiber, GI)
- Meal timing
- Prior glucose trajectory
- Activity data
- Sleep quality
- Individual parameters (learned)

Output:
- Predicted glucose curve
- Confidence intervals
- Recommended modifications
\`\`\`

**Chrononutrition:**

*Circadian Considerations:*
- Glucose tolerance varies by time of day
- Morning vs. evening eating impacts
- Meal timing and metabolic health
- Shift work challenges

*Evidence:*
- Earlier eating associated with better glycemia
- Time-restricted eating shows metabolic benefits
- Circadian misalignment impairs glucose tolerance
- Practical application in meal timing guidance

**Microbiome-Targeted Interventions:**

*Microbiome-Diet Interactions:*
- Fiber fermentation → SCFA production
- Polyphenol metabolism
- Carbohydrate processing variations
- Enterotype-based responses

*Intervention Approaches:*
| Approach | Target | Evidence |
|----------|--------|----------|
| Prebiotic fiber | SCFA production | Improved glycemia |
| Fermented foods | Microbiome diversity | Inflammation reduction |
| Specific fiber types | Targeted bacteria | Research stage |
| FMT | Full microbiome | Investigational |

**Digital Therapeutics:**

*Connected Nutrition Systems:*
\`\`\`
CGM Data
     ↓
Food Logging (AI-assisted)
     ↓
Insulin Systems (AID)
     ↓
Cloud Analytics
     ↓
Personalized Recommendations
     ↓
Behavioral Support
     ↓
Outcome Tracking
\`\`\`

*Decision Support Features:*
- Predictive meal suggestions
- Real-time glucose impact forecasting
- Adaptive recommendations
- Behavioral nudges

**Implementation Science:**

*Barriers to Precision Nutrition:*
- Cost of assessment technologies
- Complexity of recommendations
- Health literacy requirements
- Equity considerations
- Validation requirements

*Scaling Approaches:*
- Digital-first interventions
- Community health worker integration
- Primary care embedded dietitians
- Virtual MNT delivery

**Future Directions:**

*Research Priorities:*
- Individual glucose response prediction
- Microbiome modulation efficacy
- Chrononutrition clinical trials
- AI recommendation validation
- Long-term outcome data

*Emerging Technologies:*
- Continuous metabolic monitoring
- Smart insulin systems with meal detection
- Wearable food tracking
- Voice-activated logging
- Ambient food sensing`,
      keyTerms: [
        { term: 'precision nutrition', definition: 'Personalized dietary recommendations based on individual metabolic, genetic, and microbiome characteristics' },
        { term: 'postprandial glycemic response', definition: 'Individual blood glucose pattern following food intake' },
        { term: 'chrononutrition', definition: 'Study of interaction between nutrition and circadian biology' },
        { term: 'short-chain fatty acids', definition: 'Metabolites produced by gut bacteria fermenting fiber, with metabolic benefits' },
        { term: 'metabolomics', definition: 'Large-scale study of small molecules in biological systems' },
        { term: 'digital therapeutics', definition: 'Evidence-based therapeutic interventions delivered through software' },
      ],
      clinicalNotes: 'Precision nutrition is emerging but not yet standard of care. Individual glycemic responses vary significantly despite standardized food glycemic indices. AI-powered tools are increasingly available but require validation. Consider health equity when implementing technology-dependent nutrition interventions. Microbiome-targeted interventions remain largely investigational.',
    },
  },

  media: [
    {
      id: 'carb-counting-guide',
      type: 'diagram',
      filename: 'carb-counting-basics.svg',
      title: 'Carbohydrate Counting Guide',
      description: 'Visual guide to common foods and their carbohydrate content',
    },
    {
      id: 'plate-method',
      type: 'diagram',
      filename: 'diabetes-plate-method.svg',
      title: 'Diabetes Plate Method',
      description: 'Visual guide to building balanced meals',
    },
  ],

  citations: [
    {
      id: 'ada-nutrition',
      type: 'article',
      title: 'Nutrition Therapy for Adults With Diabetes',
      source: 'Diabetes Care, American Diabetes Association',
    },
    {
      id: 'precision-nutrition',
      type: 'article',
      title: 'Precision Nutrition and Metabolic Health',
      source: 'Nature Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Sugar Monitoring' },
    { targetId: 'diabetes-a1c-targets', targetType: 'topic', relationship: 'related', label: 'A1C Targets' },
    { targetId: 'diabetes-exercise-with-diabetes', targetType: 'topic', relationship: 'related', label: 'Exercise with Diabetes' },
  ],

  tags: {
    systems: ['endocrine', 'digestive'],
    topics: ['diabetes', 'nutrition', 'self-management'],
    keywords: ['carb counting', 'diabetes diet', 'nutrition therapy', 'meal planning'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
