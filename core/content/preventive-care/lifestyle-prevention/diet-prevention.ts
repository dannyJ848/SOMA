/**
 * Diet and Nutrition for Disease Prevention
 *
 * Comprehensive education on dietary approaches to prevent chronic diseases
 * and promote overall health.
 */

import { EducationalContent } from '../../types';

export const DIET_PREVENTION: EducationalContent = {
  id: 'preventive-diet-prevention',
  type: 'concept',
  name: 'Diet and Nutrition for Disease Prevention',
  alternateNames: ['Preventive nutrition', 'Dietary prevention strategies', 'Healthy eating patterns', 'Nutritional disease prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating healthy foods can help prevent many diseases like heart disease, diabetes, and some cancers.',
      explanation: `What you eat every day affects your health. Good food choices can help keep you healthy and prevent many diseases.

**Why Healthy Eating Matters:**
- Gives your body nutrients it needs
- Helps you maintain a healthy weight
- Protects your heart and blood vessels
- Keeps blood sugar stable
- May reduce cancer risk
- Helps you feel better and have more energy

**Foods to Eat More Of:**

*Fruits and Vegetables:*
- Try to eat 5 or more servings daily
- Different colors = different nutrients
- Fresh, frozen, or canned all count
- Examples: apples, berries, carrots, spinach, broccoli

*Whole Grains:*
- Choose whole wheat bread instead of white
- Brown rice instead of white rice
- Oatmeal for breakfast
- Examples: whole wheat pasta, quinoa, whole grain cereals

*Lean Proteins:*
- Fish (especially salmon, tuna)
- Chicken and turkey (without skin)
- Beans, lentils, and peas
- Nuts and seeds

*Healthy Fats:*
- Olive oil
- Avocados
- Nuts
- Fish

**Foods to Eat Less Of:**

*Processed Foods:*
- Fast food
- Chips, cookies, candy
- Frozen dinners
- Packaged snacks

*Too Much Sugar:*
- Soda and sweet drinks
- Desserts
- Sweetened cereals
- Added sugars in foods

*Too Much Salt:*
- Processed meats (hot dogs, bacon)
- Canned soups (unless low-sodium)
- Fast food
- Salty snacks

*Unhealthy Fats:*
- Fried foods
- Butter in excess
- Fatty meats

**Simple Tips:**
- Fill half your plate with vegetables
- Drink water instead of sugary drinks
- Read food labels
- Cook at home more often
- Eat regular meals`,
      keyTerms: [
        { term: 'nutrients', definition: 'Substances in food that your body needs to grow and stay healthy' },
        { term: 'whole grains', definition: 'Grains that have all parts of the grain seed, giving you more fiber and nutrients' },
        { term: 'processed foods', definition: 'Foods that have been changed from their natural state, often with added salt, sugar, or fat' },
      ],
      analogies: [
        'Think of your body like a car - it runs best with high-quality fuel. Healthy food is premium fuel for your body.',
        'Building good health is like building a house - you need quality materials (nutrients) to make it strong.',
      ],
      examples: [
        'The Garcia family started eating more vegetables and less fast food. After 6 months, Mr. Garcia lost 15 pounds and his blood pressure went down.',
      ],
      patientCounselingPoints: [
        'Start with small changes - you do not have to change everything at once',
        'Adding healthy foods is as important as cutting unhealthy ones',
        'Reading food labels helps you make better choices',
        'Cooking at home gives you more control over what you eat',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based dietary patterns like the Mediterranean and DASH diets have been shown to reduce risk of cardiovascular disease, diabetes, and certain cancers through specific nutrient profiles and food components.',
      explanation: `Research has identified specific eating patterns that significantly reduce chronic disease risk. Understanding these patterns and the evidence behind them supports better dietary recommendations.

**Evidence-Based Dietary Patterns:**

**Mediterranean Diet:**
- Based on traditional eating in Greece, Italy, Spain
- High in: Olive oil, fish, vegetables, fruits, whole grains, legumes, nuts
- Moderate: Wine (optional), dairy
- Low in: Red meat, processed foods, sweets

*Health Benefits (Evidence):*
- 30% reduction in cardiovascular events (PREDIMED trial)
- Reduced diabetes risk
- May reduce cognitive decline
- Possible cancer risk reduction

**DASH Diet (Dietary Approaches to Stop Hypertension):**
- Developed specifically to lower blood pressure
- High in: Fruits, vegetables, whole grains, lean protein, low-fat dairy
- Low in: Sodium, saturated fat, red meat, sweets

*Health Benefits:*
- Lowers blood pressure by 8-14 mmHg
- Reduces LDL cholesterol
- Decreases cardiovascular risk
- Most effective when combined with sodium restriction (<2,300 mg/day)

**Key Nutrients and Disease Prevention:**

**Fiber:**
- Goal: 25-30 grams per day
- Sources: Whole grains, vegetables, fruits, legumes
- Benefits: Lowers cholesterol, improves blood sugar, promotes gut health
- May reduce colorectal cancer risk

**Omega-3 Fatty Acids:**
- Sources: Fatty fish (salmon, mackerel, sardines), walnuts, flaxseed
- Benefits: Reduces inflammation, lowers triglycerides
- Recommendation: Fish 2x per week

**Antioxidants:**
- Sources: Colorful fruits and vegetables
- Vitamins C, E, beta-carotene, polyphenols
- May protect against cellular damage

**Potassium:**
- Sources: Bananas, potatoes, beans, leafy greens
- Benefits: Lowers blood pressure
- Most Americans do not get enough

**Foods and Specific Disease Prevention:**

**Cardiovascular Disease:**
- Reduce saturated fat (<10% of calories)
- Increase unsaturated fats (olive oil, nuts, fish)
- Limit sodium (<2,300 mg/day)
- Eat fiber-rich foods
- Limit added sugars

**Type 2 Diabetes:**
- Choose low glycemic index foods
- Control portion sizes
- Limit sugary drinks
- Increase fiber intake
- Maintain healthy weight

**Cancer Prevention:**
- Eat variety of fruits and vegetables
- Limit processed meats
- Limit alcohol
- Maintain healthy weight
- Avoid charred meats

**Practical Guidelines:**

*Plate Method:*
- Half plate: Vegetables
- Quarter plate: Lean protein
- Quarter plate: Whole grains
- Small portion: Healthy fat

*Daily Recommendations:*
- Vegetables: 2.5-3 cups
- Fruits: 1.5-2 cups
- Grains: 6 oz (half whole grain)
- Protein: 5-6 oz
- Dairy: 3 cups (low-fat)

**Common Barriers and Solutions:**
| Barrier | Solution |
|---------|----------|
| Cost | Frozen vegetables, dried beans, seasonal produce |
| Time | Meal prep, simple recipes |
| Taste preferences | Gradual changes, healthy cooking methods |
| Family preferences | Involve family in choices |`,
      keyTerms: [
        { term: 'Mediterranean diet', definition: 'Eating pattern based on traditional foods of Mediterranean countries, emphasizing olive oil, fish, and plants' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; eating plan proven to lower blood pressure' },
        { term: 'glycemic index', definition: 'Measure of how quickly a food raises blood sugar levels' },
        { term: 'saturated fat', definition: 'Fat from animal sources and some tropical oils; raises LDL cholesterol' },
        { term: 'omega-3 fatty acids', definition: 'Healthy fats found in fish and some plants that reduce inflammation' },
      ],
      analogies: [
        'The DASH diet is like a prescription for your blood pressure - specific ingredients in specific amounts.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nutritional epidemiology supports specific dietary patterns for disease prevention, with PREDIMED, DASH, and other trials demonstrating causality, while understanding mechanisms of action including inflammation modulation, oxidative stress reduction, and metabolic optimization guides clinical recommendations.',
      explanation: `**Evidence Base for Dietary Prevention:**

**Landmark Trials:**

*PREDIMED (PREvención con DIeta MEDiterránea):*
- RCT of 7,447 high-risk adults
- Mediterranean diet + EVOO or nuts vs control
- 30% reduction in major CV events
- Trial had methodological issues (rerandomization), effect persisted in corrected analysis

*DASH Trials:*
- DASH-Sodium: Graded sodium reduction
- Combined low sodium + DASH: 11.5 mmHg SBP reduction
- Comparable to single antihypertensive medication

*Lyon Diet Heart Study:*
- Secondary prevention post-MI
- Mediterranean-style diet
- 50-70% reduction in cardiac events

**Mechanisms of Dietary Effects:**

*Cardiovascular Protection:*
- Reduced LDL oxidation (polyphenols)
- Improved endothelial function (olive oil, fish)
- Anti-inflammatory effects (omega-3s)
- Blood pressure reduction (potassium, low sodium)
- Improved lipid profile

*Metabolic Benefits:*
- Enhanced insulin sensitivity
- Reduced hepatic glucose production (fiber)
- Improved postprandial glycemia
- Weight management

*Cancer Prevention Pathways:*
- Antioxidant protection against DNA damage
- Fiber binding carcinogens in GI tract
- Modulation of hormone levels
- Anti-proliferative effects (phytochemicals)

**Nutrient-Disease Relationships:**

*Sodium and Hypertension:*
- Linear relationship
- Every 1g reduction: ~2-3 mmHg SBP decrease
- More pronounced in hypertensives, older adults, Black individuals
- Current intake ~3,400 mg; goal <2,300 mg (<1,500 for hypertensives)

*Fiber and Colorectal Cancer:*
- Meta-analyses: 10% risk reduction per 10g fiber/day
- Mechanisms: dilution of carcinogens, altered microbiome, reduced transit time
- Whole grains, legumes most protective

*Processed Meat and Cancer:*
- IARC Group 1 carcinogen (sufficient evidence)
- 18% increased colorectal cancer risk per 50g/day
- Mechanisms: N-nitroso compounds, heme iron, PAHs

**Dietary Patterns vs Single Nutrients:**

*Why Patterns Matter:*
- Foods eaten together (nutrient interactions)
- Practical and sustainable
- More robust evidence than single nutrients
- Easier to communicate and implement

*Single Nutrient Disappointments:*
- Vitamin E supplementation: No CV benefit, possible harm
- Beta-carotene: Increased lung cancer in smokers
- Calcium supplements: Uncertain CV effects
- Food sources preferred over supplements

**Special Populations:**

*Diabetes Prevention:*
- DPP trial: Lifestyle intervention (including diet) reduced diabetes by 58%
- Mediterranean diet: 52% reduction (PREDIMED-Reus)
- Weight loss primary mediator

*Prediabetes Management:*
- Weight loss: 5-7% body weight
- Fiber: 14g per 1,000 calories
- Limit refined carbohydrates
- Consider carbohydrate distribution

*Heart Failure:*
- Sodium restriction (<2g/day in symptomatic HF)
- Fluid restriction if hyponatremic
- DASH pattern beneficial

**Gut Microbiome and Diet:**

*Emerging Evidence:*
- Diet shapes microbiome composition
- High-fiber diets increase beneficial bacteria
- Mediterranean diet increases microbiome diversity
- SCFA production (butyrate) beneficial

*Clinical Implications:*
- Fermented foods may be beneficial
- Prebiotic fibers support healthy bacteria
- Probiotics: Limited evidence for disease prevention

**Practical Implementation:**

*Dietary Assessment:*
- 24-hour recall
- Food frequency questionnaire
- Diet quality indices (HEI, AHEI)

*Counseling Strategies:*
- Brief dietary interventions effective
- Focus on additions, not restrictions
- Small, achievable goals
- Address barriers specifically

*Referral Indications:*
- Multiple chronic conditions
- Eating disorders
- Complex dietary needs
- Patient request`,
      keyTerms: [
        { term: 'PREDIMED', definition: 'Spanish RCT demonstrating cardiovascular benefits of Mediterranean diet with olive oil or nuts' },
        { term: 'EVOO', definition: 'Extra virgin olive oil; minimally processed olive oil rich in polyphenols' },
        { term: 'SCFA', definition: 'Short-chain fatty acids; produced by gut bacteria from fiber, beneficial for colon health' },
        { term: 'HEI', definition: 'Healthy Eating Index; measure of diet quality based on Dietary Guidelines for Americans' },
        { term: 'N-nitroso compounds', definition: 'Carcinogenic chemicals formed during processing of meat' },
      ],
      clinicalNotes: 'Recommend Mediterranean or DASH patterns based on patient conditions. Emphasize dietary patterns over single nutrients. Provide specific sodium targets for hypertensive patients. Consider referral to registered dietitian for complex cases.',
    },
    4: {
      level: 4,
      summary: 'Advanced nutritional prevention integrates nutrigenomics, precision nutrition approaches, microbiome modulation, and evidence-based policy interventions while addressing implementation challenges, health disparities, and the translation of dietary trial evidence to population-level disease prevention.',
      explanation: `**Precision Nutrition:**

*Nutrigenomics:*
- Genetic variation affects nutrient metabolism
- Examples:
  - APOE4: Differential response to saturated fat
  - MTHFR: Folate metabolism
  - FTO: Obesity susceptibility
- Limited clinical application currently
- Emerging research on personalized recommendations

*Phenotypic Precision:*
- Metabolic phenotyping
- Microbiome-based predictions
- Continuous glucose monitoring
- Personalized glycemic response

*PREDICT Studies:*
- Large inter-individual variation in postprandial response
- Microbiome, genetics, meal context all contribute
- Same food = different metabolic response
- Implications for personalized advice

**Microbiome-Diet Interactions:**

*Key Concepts:*
- Diet is primary modulator of gut microbiome
- Changes occur within days
- Long-term patterns shape stable composition

*Therapeutic Targets:*
| Intervention | Mechanism | Evidence |
|--------------|-----------|----------|
| High-fiber diet | SCFA production | Strong |
| Fermented foods | Increased diversity | Emerging |
| Polyphenols | Prebiotic effects | Moderate |
| Probiotics | Direct supplementation | Mixed |

*Clinical Applications:*
- IBS: Low FODMAP diet
- IBD: Specific carbohydrate diet, Mediterranean
- Metabolic syndrome: High-fiber, plant-based

**Food Environment and Policy:**

*Environmental Influences:*
- Food deserts: Limited access to healthy food
- Food swamps: Excess unhealthy options
- Marketing and advertising
- Price and affordability

*Policy Interventions:*
- Sugar-sweetened beverage taxes
- Front-of-package labeling
- Menu calorie labeling
- SNAP benefits optimization
- School nutrition standards

*Evidence for Policy:*
- Mexico SSB tax: 6% reduction in purchases
- Chile warning labels: Significant behavior change
- Menu labeling: Modest calorie reduction

**Implementation Science:**

*Healthcare System Integration:*
- Screening for diet quality
- Brief interventions
- Referral pathways to RDs
- Coverage for medical nutrition therapy

*Effective Counseling Approaches:*
- Motivational interviewing
- Goal setting and self-monitoring
- Behavioral economics (defaults, nudges)
- Technology-assisted interventions

*Barriers to Implementation:*
| Level | Barrier | Strategy |
|-------|---------|----------|
| Patient | Knowledge, skills, time | Education, cooking classes |
| Provider | Training, time | Tools, team-based care |
| System | Coverage, access to RDs | Policy advocacy |
| Environment | Food access, cost | Community programs |

**Health Disparities:**

*Dietary Disparities:*
- Lower diet quality in low-income populations
- Racial/ethnic disparities in diet-related diseases
- Food insecurity affects 10% of households
- Geographic variation in food access

*Root Causes:*
- Socioeconomic factors
- Structural racism
- Food environment
- Marketing targeting

*Interventions:*
- SNAP and WIC optimization
- Food prescription programs
- Community gardens
- Mobile markets

**Special Dietary Contexts:**

*Plant-Based Diets:*
- Vegetarian/vegan: Well-planned diets adequate
- Nutrient considerations: B12, iron, zinc, omega-3s
- Environmental and ethical motivations
- Associated with lower CVD and cancer risk

*Ketogenic and Low-Carb:*
- Short-term efficacy for weight loss
- Diabetes management potential
- Long-term safety uncertain
- Not universally recommended

*Intermittent Fasting:*
- Time-restricted eating, 5:2, etc.
- Weight loss similar to continuous restriction
- Possible metabolic benefits
- Patient selection important

**Emerging Research:**

*Circadian Nutrition:*
- Meal timing affects metabolism
- Earlier eating may be beneficial
- Night eating associated with worse outcomes

*Ultra-Processed Foods:*
- NOVA classification
- Associated with obesity, mortality
- Mechanisms: Hyperpalatability, nutrient displacement
- Policy target

*Food as Medicine:*
- Produce prescriptions
- Medically tailored meals
- Coverage expansion efforts`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects response to nutrients and dietary patterns' },
        { term: 'FODMAP', definition: 'Fermentable oligosaccharides, disaccharides, monosaccharides, and polyols; carbohydrates restricted in IBS' },
        { term: 'food desert', definition: 'Area with limited access to affordable, nutritious food, typically due to lack of grocery stores' },
        { term: 'NOVA classification', definition: 'System categorizing foods by degree of processing, from unprocessed to ultra-processed' },
        { term: 'medical nutrition therapy', definition: 'Nutrition-based treatment for disease, provided by registered dietitians' },
      ],
      clinicalNotes: 'Screen for food insecurity and address with resources. Consider referral to RD for complex dietary needs. Advocate for policy changes supporting healthy eating. Stay current on precision nutrition developments while applying population-level evidence.',
    },
    5: {
      level: 5,
      summary: 'Expert dietary prevention practice integrates precision nutrition science, health systems redesign, policy advocacy, and translational research to address the preventable burden of diet-related chronic disease through individual intervention, population health management, and structural change.',
      explanation: `**Precision Nutrition Frontiers:**

*Metabolic Phenotyping:*
- Comprehensive metabolomics profiling
- Prediction of individual dietary responses
- Integration with microbiome data
- Research validation ongoing

*AI-Driven Recommendations:*
| Data Source | Application | Status |
|-------------|-------------|--------|
| CGM + food logs | Personalized glycemic advice | Commercial (Levels, Signos) |
| Microbiome analysis | Prebiotic recommendations | Research |
| Multi-omic integration | Comprehensive phenotyping | Early stage |
| Imaging (liver fat) | Carbohydrate tolerance | Research |

*Clinical Translation Challenges:*
- Validation in diverse populations
- Cost and accessibility
- Evidence for outcomes beyond biomarkers
- Regulatory framework

**Systems Approach to Dietary Prevention:**

*Health System Integration:*
- Population-level diet quality screening
- Embedded dietitians in primary care
- Digital nutrition support
- Social needs screening (food insecurity)

*Quality Metrics:*
- Diet counseling rates
- Referral to nutrition services
- Food insecurity screening
- Diet-related condition control

*Payment Models:*
- Medical nutrition therapy coverage
- Food prescription programs
- Value-based care for diet-related conditions
- Intensive behavioral therapy for obesity

**Policy Leadership:**

*Evidence-Based Policy Priorities:*
| Intervention | Evidence | Political Feasibility |
|--------------|----------|----------------------|
| SSB taxes | Strong | Moderate |
| Front-of-pack labeling | Strong | High |
| Marketing restrictions | Moderate | Low |
| SNAP incentives | Strong | High |
| Healthcare coverage | Strong | Moderate |

*Advocacy Strategies:*
- Coalition building
- Evidence communication
- Community engagement
- Economic impact framing

**Research Translation:**

*Gaps in Evidence:*
- Long-term outcomes of precision approaches
- Implementation effectiveness
- Equity impact of interventions
- Comparative effectiveness of counseling approaches

*Trial Design Considerations:*
- Dietary trial challenges (blinding, adherence)
- Surrogate vs hard outcomes
- Pragmatic trial designs
- Health equity focus

**Global Nutrition Transitions:**

*Trends:*
- Increasing ultra-processed food consumption
- Traditional diet displacement
- Urbanization effects
- Double burden of malnutrition

*Implications:*
- Rising diet-related NCDs globally
- Need for country-specific approaches
- Cultural context essential
- Policy transfer considerations

**Clinical Excellence Framework:**

*Individual Patient Care:*
- Comprehensive dietary assessment
- Evidence-based pattern recommendations
- Address barriers specifically
- Coordinate with care team

*Practice Leadership:*
- Develop nutrition screening protocols
- Build RD collaboration
- Address food insecurity
- Track quality metrics

*Health System Impact:*
- Population health infrastructure
- Coverage advocacy
- Community partnerships
- Research participation

*Professional Development:*
- Nutrition science currency
- Counseling skills
- Policy engagement
- Health equity competency

**Expert Practice Considerations:**

*Controversial Areas:*
- Saturated fat guidelines debate
- Optimal macronutrient distribution
- Role of supplements
- Intermittent fasting recommendations

*Navigating Uncertainty:*
- Acknowledge evidence limitations
- Emphasize robust pattern evidence
- Patient-centered approach
- Avoid nutrition nihilism

*Future Directions:*
1. Precision nutrition validation
2. Food as medicine integration
3. Ultra-processed food policy
4. Microbiome-targeted interventions
5. Digital nutrition coaching
6. Equity-focused implementation

**Key Implementation Priorities:**

*Immediate:*
- Universal food insecurity screening
- Mediterranean/DASH recommendation
- Sodium reduction counseling
- RD referral pathways

*Developing:*
- Produce prescription programs
- Digital support tools
- Community nutrition resources
- Policy advocacy

*Emerging:*
- Precision nutrition applications
- Microbiome interventions
- AI-assisted counseling
- Comprehensive food environment change`,
      keyTerms: [
        { term: 'CGM', definition: 'Continuous glucose monitoring; wearable device measuring interstitial glucose for personalized nutrition insights' },
        { term: 'double burden of malnutrition', definition: 'Coexistence of undernutrition and overweight/obesity in the same population' },
        { term: 'ultra-processed foods', definition: 'Industrial formulations with many additives and minimal whole food components (NOVA Group 4)' },
        { term: 'food prescription', definition: 'Healthcare provider orders for produce or healthy food, sometimes with financial subsidies' },
        { term: 'nutrition nihilism', definition: 'Dismissive attitude toward dietary advice due to perceived contradictions in research' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead comprehensive dietary prevention programs
- Integrate food security screening and intervention
- Champion policy change for healthy food environment
- Critically evaluate precision nutrition claims
- Maintain focus on robust pattern evidence
- Address health equity in all nutrition initiatives
- Develop team-based nutrition care models
- Engage in translational research
- Mentor trainees in nutritional medicine`,
    },
  },

  media: [
    {
      id: 'dietary-patterns-comparison',
      type: 'diagram',
      filename: 'dietary-patterns-comparison.svg',
      title: 'Comparison of Evidence-Based Dietary Patterns',
      description: 'Visual comparison of Mediterranean, DASH, and other dietary patterns for disease prevention',
    },
  ],

  citations: [
    {
      id: 'predimed-2018',
      type: 'article',
      title: 'Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts',
      authors: ['Estruch R', 'Ros E', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'dash-trial',
      type: 'article',
      title: 'A Clinical Trial of the Effects of Dietary Patterns on Blood Pressure',
      authors: ['Appel LJ', 'Moore TJ', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'dga-2020',
      type: 'website',
      title: 'Dietary Guidelines for Americans, 2020-2025',
      source: 'US Department of Agriculture and HHS',
      url: 'https://www.dietaryguidelines.gov/',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'concept-mediterranean-diet', targetType: 'concept', relationship: 'child', label: 'Mediterranean Diet' },
    { targetId: 'concept-dash-diet', targetType: 'concept', relationship: 'child', label: 'DASH Diet' },
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
  ],

  tags: {
    systems: ['preventive-care'],
    topics: ['preventive medicine', 'nutrition', 'cardiology', 'endocrinology'],
    keywords: ['diet', 'nutrition', 'Mediterranean diet', 'DASH', 'disease prevention', 'healthy eating'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
