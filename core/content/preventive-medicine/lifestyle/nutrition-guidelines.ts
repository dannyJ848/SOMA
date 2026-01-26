/**
 * Nutrition Guidelines
 *
 * Evidence-based dietary recommendations for health promotion
 * and disease prevention based on current scientific evidence.
 */

import { EducationalContent } from '../../types';

export const NUTRITION_GUIDELINES: EducationalContent = {
  id: 'concept-nutrition-guidelines',
  type: 'concept',
  name: 'Nutrition Guidelines',
  alternateNames: ['Dietary guidelines', 'Healthy eating recommendations', 'Nutrition for health'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating a variety of healthy foods helps your body stay strong and prevents many diseases.',
      explanation: `Good nutrition is like fuel for your body - the right foods help everything work better!

**Building a Healthy Plate:**
Imagine your plate divided into sections:
- Half your plate: Fruits and vegetables
- Quarter of plate: Grains (choose whole grains)
- Quarter of plate: Protein (meat, beans, nuts)
- Small portion: Dairy or calcium-rich foods

**Foods to Eat More:**
- **Fruits and Vegetables**: Aim for many colors - each color has different vitamins
- **Whole Grains**: Brown rice, whole wheat bread, oatmeal
- **Lean Proteins**: Chicken, fish, beans, nuts
- **Healthy Fats**: Olive oil, avocados, nuts

**Foods to Eat Less:**
- **Added Sugars**: Soda, candy, cookies, sweetened cereals
- **Salt**: Chips, processed foods, canned soups
- **Saturated Fats**: Butter, fatty meats, fried foods
- **Processed Foods**: Hot dogs, lunch meats, frozen dinners

**Simple Tips:**
- Drink water instead of sugary drinks
- Eat breakfast every day
- Choose fruits for snacks
- Read food labels
- Cook at home when possible
- Watch portion sizes

**Why Water Matters:**
- Your body is mostly water
- Helps digestion and energy
- Aim for 8 glasses a day
- More if you exercise or it's hot

Remember: You don't have to be perfect! Small changes add up over time.`,
      keyTerms: [
        { term: 'nutrition', definition: 'The way food gives your body what it needs to be healthy' },
        { term: 'whole grains', definition: 'Grains that have all their healthy parts, like brown rice and whole wheat' },
        { term: 'processed foods', definition: 'Foods that have been changed from their natural form, often with added salt, sugar, or chemicals' },
      ],
      analogies: [
        'Your body is like a car - you need the right fuel (food) to run well and go far.',
        'Eating a variety of colorful vegetables is like collecting different vitamins - each color gives you something different.',
      ],
      examples: [
        'Swapping soda for water can cut over 200 calories and lots of sugar from your day.',
        'A handful of nuts makes a healthier snack than a bag of chips.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dietary guidelines emphasize whole foods, plant-based eating patterns, and limiting processed foods to reduce chronic disease risk.',
      explanation: `The Dietary Guidelines for Americans provide evidence-based recommendations updated every 5 years.

**Core Recommendations:**

**1. Follow a Healthy Dietary Pattern:**
- All foods and beverages across the lifespan
- Customize to personal preferences and culture
- Meet nutrient needs within calorie limits

**2. Focus on Variety and Nutrient Density:**

| Food Group | Daily Recommendation (2000 cal) |
|------------|-------------------------------|
| Vegetables | 2.5 cups |
| Fruits | 2 cups |
| Grains (half whole) | 6 ounces |
| Dairy | 3 cups |
| Protein | 5.5 ounces |
| Oils | 27 grams |

**3. Limit Certain Components:**

| Component | Limit |
|-----------|-------|
| Added sugars | <10% of calories (<50g for 2000 cal) |
| Saturated fat | <10% of calories |
| Sodium | <2300 mg/day |
| Alcohol | ≤1 drink/day (women), ≤2 drinks/day (men) |

**Healthy Dietary Patterns:**

*Mediterranean Diet:*
- Emphasizes olive oil, vegetables, fruits, whole grains
- Moderate fish, poultry, dairy
- Limited red meat
- Red wine in moderation (optional)

*DASH Diet (Dietary Approaches to Stop Hypertension):*
- High in fruits, vegetables, low-fat dairy
- Includes whole grains, lean meats, nuts
- Low in saturated fat, total fat, cholesterol
- Proven to lower blood pressure

*Plant-Based Patterns:*
- Vegetarian: No meat, may include dairy/eggs
- Vegan: No animal products
- Flexitarian: Mostly plant-based with occasional meat

**Macronutrient Balance:**

| Macronutrient | % of Calories | Role |
|---------------|--------------|------|
| Carbohydrates | 45-65% | Primary energy source |
| Protein | 10-35% | Building and repair |
| Fat | 20-35% | Energy, nutrient absorption |

**Key Micronutrients:**
- **Calcium**: Bones, 1000-1200 mg/day
- **Vitamin D**: Bone health, immune function, 600-800 IU/day
- **Iron**: Blood cell production
- **Potassium**: Blood pressure, 2600-3400 mg/day
- **Fiber**: Digestion, heart health, 25-38 g/day`,
      keyTerms: [
        { term: 'nutrient density', definition: 'Amount of nutrients relative to calories in a food' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; eating pattern proven to lower blood pressure' },
        { term: 'macronutrients', definition: 'Nutrients needed in large amounts: carbohydrates, proteins, fats' },
        { term: 'micronutrients', definition: 'Nutrients needed in small amounts: vitamins and minerals' },
        { term: 'added sugars', definition: 'Sugars added during processing, not naturally occurring' },
      ],
      analogies: [
        'Nutrient density is like getting the most value for your money - choosing foods that give you lots of nutrients without too many calories.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based nutrition recommendations integrate epidemiological data, clinical trials, and mechanistic understanding to define optimal dietary patterns for chronic disease prevention and health span extension.',
      explanation: `**Scientific Foundation of Dietary Guidelines:**

**Evidence Hierarchy:**
1. Randomized controlled trials (strongest)
2. Prospective cohort studies
3. Case-control studies
4. Mechanistic/physiological studies
5. Expert consensus

**Major Evidence Sources:**
- Nurses' Health Study, Health Professionals Follow-up Study
- PREDIMED (Mediterranean diet RCT)
- DASH trials
- Women's Health Initiative
- PURE study (international)

**Detailed Dietary Recommendations:**

**Carbohydrates:**

| Type | Recommendation | Rationale |
|------|---------------|-----------|
| Whole grains | ≥3 servings/day | Fiber, micronutrients, lower CVD/diabetes risk |
| Added sugars | <10% calories | Obesity, diabetes, CVD risk |
| Fiber | 14g/1000 kcal | Gut health, satiety, cholesterol |
| Glycemic index | Consider low GI | May benefit glucose control |

**Proteins:**

| Source | Recommendation | Evidence |
|--------|---------------|----------|
| Fish | 2 servings/week | Omega-3s, CVD protection |
| Poultry | Preferable to red meat | Lower CVD risk |
| Legumes | Increase intake | Fiber, plant protein |
| Red meat | Limit to 1-2x/week | CVD, colorectal cancer risk |
| Processed meat | Minimize | Strong cancer association |

**Fats:**

| Type | Recommendation | Food Sources |
|------|---------------|--------------|
| Unsaturated (MUFA, PUFA) | Replace saturated | Olive oil, nuts, avocado, fish |
| Omega-3 | Include regularly | Fatty fish, walnuts, flaxseed |
| Saturated | <10% calories | Butter, red meat, full-fat dairy |
| Trans fat | Avoid | Partially hydrogenated oils |

**Specific Nutrient Targets:**

*Sodium:*
- Current average intake: ~3400 mg/day
- Recommendation: <2300 mg (general), <1500 mg (hypertension)
- 10 mmHg SBP reduction with DASH + low sodium

*Potassium:*
- Adequate Intake: 2600 mg (women), 3400 mg (men)
- Most Americans deficient
- Sources: Fruits, vegetables, dairy

*Vitamin D:*
- RDA: 600-800 IU/day
- Many experts recommend higher (1000-2000 IU)
- Deficiency common, especially northern latitudes

**Dietary Patterns and Disease Outcomes:**

| Pattern | CVD Risk | Diabetes Risk | Cancer Risk |
|---------|----------|---------------|-------------|
| Mediterranean | ↓↓ 30% | ↓↓ 30% | ↓ |
| DASH | ↓↓ | ↓↓ | ↓ |
| Plant-based | ↓↓ | ↓↓ | ↓ |
| Western | ↑↑ | ↑↑ | ↑ |

**Nutrition for Specific Conditions:**

*Cardiovascular Disease:*
- Mediterranean or DASH pattern
- Plant sterols/stanols: 2g/day for LDL lowering
- Omega-3 fatty acids: Consider supplements if low fish intake
- Limit sodium, saturated fat

*Type 2 Diabetes:*
- Carbohydrate counting/consistent intake
- Emphasize low glycemic index foods
- Mediterranean pattern reduces HbA1c
- Weight loss diet if overweight`,
      keyTerms: [
        { term: 'glycemic index (GI)', definition: 'Ranking of carbohydrates based on blood glucose response; lower is generally better' },
        { term: 'plant sterols/stanols', definition: 'Plant compounds that block cholesterol absorption; lower LDL 5-15%' },
        { term: 'PREDIMED study', definition: 'Landmark RCT demonstrating cardiovascular benefits of Mediterranean diet' },
        { term: 'ultra-processed foods', definition: 'Industrial formulations with additives; linked to obesity and chronic disease' },
        { term: 'MUFA/PUFA', definition: 'Mono/polyunsaturated fatty acids; beneficial dietary fats' },
      ],
      clinicalNotes: 'Dietary counseling is underutilized. Brief intervention (5-10 minutes) can be effective. Consider referral to registered dietitian for complex cases. Medical nutrition therapy covered by Medicare for diabetes and kidney disease.',
    },
    4: {
      level: 4,
      summary: 'Nutritional medicine integrates molecular nutrition, nutrigenomics, microbiome science, and precision dietary interventions to optimize metabolic health and address the multifactorial etiology of diet-related chronic diseases.',
      explanation: `**Molecular Nutrition:**

**Macronutrient Metabolism:**

*Carbohydrate Pathways:*
- Glycolysis → Pyruvate → Acetyl-CoA
- Gluconeogenesis (liver, kidney)
- Glycogenesis/glycogenolysis
- Pentose phosphate pathway (NADPH, nucleotides)

*Lipid Metabolism:*
- Lipolysis → Free fatty acids
- β-oxidation → Acetyl-CoA
- De novo lipogenesis (excess carbs → fat)
- Lipoprotein metabolism (chylomicrons, VLDL, LDL, HDL)

*Protein Metabolism:*
- Amino acid pools and turnover
- Transamination, deamination
- Urea cycle (nitrogen disposal)
- Glucogenic vs. ketogenic amino acids

**Nutrigenomics:**

*Gene-Diet Interactions:*

| Gene | Nutrient | Effect |
|------|----------|--------|
| MTHFR C677T | Folate | Impaired folate metabolism; may need methylfolate |
| APOE ε4 | Saturated fat | Enhanced LDL response to sat fat |
| TCF7L2 | Carbohydrates | Altered diabetes risk with high carb intake |
| FTO | Total calories | Enhanced obesity susceptibility |
| CYP1A2 | Caffeine | Slow metabolizers: CV risk with coffee |
| LCT | Lactose | Persistence/non-persistence of lactase |

*Clinical Implications:*
- Genetic testing commercially available
- Evidence for personalized nutrition emerging
- Not yet standard of care
- May explain variable dietary responses

**Gut Microbiome and Nutrition:**

*Microbiome Functions:*
- Fermentation of indigestible carbohydrates
- Short-chain fatty acid (SCFA) production
- Vitamin synthesis (K, B12, biotin)
- Bile acid metabolism
- Immune modulation

*Diet-Microbiome Interactions:*

| Dietary Component | Microbiome Effect |
|-------------------|-------------------|
| Fiber/prebiotics | ↑ SCFA production, ↑ diversity |
| Polyphenols | Bidirectional metabolism |
| Protein (excess) | ↑ Proteolytic bacteria, ↑ TMAO |
| Fat (saturated) | ↓ Diversity, inflammation |
| Artificial sweeteners | Altered composition (conflicting data) |

*TMAO (Trimethylamine N-oxide):*
- Produced from carnitine, choline (red meat, eggs)
- Microbial conversion to TMA → hepatic oxidation to TMAO
- Associated with CVD risk in some studies
- Mechanistic link debated

**Precision Nutrition:**

*Continuous Glucose Monitoring (CGM) for Diet:*
- Individual glycemic responses vary dramatically
- Same food → different glucose response in different people
- Factors: Genetics, microbiome, meal context, sleep, stress
- Personalized diet recommendations based on CGM data

*Metabolomics Profiling:*
- Untargeted metabolite analysis
- Identify nutritional deficiencies
- Assess metabolic health
- Monitor dietary intervention response

**Medical Nutrition Therapy:**

*Enteral Nutrition:*
- Indications: Functional GI tract but unable to meet needs orally
- Access: NG tube, PEG, J-tube
- Formulas: Standard, elemental, disease-specific
- Complications: Aspiration, diarrhea, refeeding syndrome

*Parenteral Nutrition:*
- Indications: GI tract not functional or accessible
- Central vs. peripheral access
- Complications: Line infection, metabolic abnormalities
- Monitoring: Electrolytes, LFTs, glucose

*Refeeding Syndrome:*
- Risk: Prolonged starvation, low BMI, electrolyte abnormalities
- Pathophysiology: Insulin surge → intracellular K, Mg, Phos shift
- Prevention: Start low, advance slowly, supplement phosphorus
- Monitoring: Daily electrolytes initially

**Obesity Pharmacotherapy and Nutrition:**

*GLP-1 Agonists (Semaglutide, Tirzepatide):*
- Mechanism: Appetite suppression, delayed gastric emptying
- Weight loss: 15-20%+ with tirzepatide
- Nutritional considerations: Adequate protein to preserve muscle
- Side effects: Nausea, vomiting (dietary modifications help)`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genes and nutrients interact to affect health' },
        { term: 'SCFA (short-chain fatty acids)', definition: 'Microbial fermentation products (butyrate, propionate, acetate) with metabolic effects' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; microbiome-derived metabolite associated with CVD' },
        { term: 'refeeding syndrome', definition: 'Metabolic complications from feeding after starvation; characterized by hypophosphatemia' },
        { term: 'medical nutrition therapy', definition: 'Use of specific nutrition interventions to treat medical conditions' },
      ],
      clinicalNotes: 'Screen for refeeding syndrome risk before initiating nutrition support. Adequate protein intake (1.2-1.5 g/kg) important during weight loss to preserve muscle. GLP-1 agonist patients may need dietary counseling for adequate nutrition despite reduced appetite.',
    },
    5: {
      level: 5,
      summary: 'Nutritional science converges with systems biology, exposomics, and implementation science to develop precision nutrition approaches that account for individual variability while addressing population-level diet-related disease burden through policy and environmental interventions.',
      explanation: `**Systems Nutrition:**

**1. Multi-omics Integration:**

*Omics Layers:*
| Level | Application |
|-------|-------------|
| Genomics | SNP-diet interactions |
| Transcriptomics | Gene expression response to diet |
| Proteomics | Protein biomarkers of intake |
| Metabolomics | Dietary biomarkers, metabolic phenotyping |
| Microbiomics | Host-microbiome-diet interactions |

*Exposome Concept:*
- Totality of environmental exposures (diet is major component)
- Internal exposome: Metabolism, microbiome
- External exposome: Food environment, contaminants
- Lifetime exposures affecting disease risk

**2. Precision Nutrition Clinical Trials:**

*PREDICT Studies (UK/US):*
- N = 1000+ twins + unrelated individuals
- Continuous glucose, lipid monitoring after standardized meals
- Machine learning prediction of individual responses
- Genetics explains ~30% of glucose variance; microbiome, sleep, meal order also important

*NutriGenetic Index Project:*
- Polygenic scores for nutrient responses
- PUFA metabolism and cardiovascular response
- Potential for genotype-guided dietary recommendations

*Challenges:*
- Validation in diverse populations
- Clinical utility demonstration
- Implementation feasibility
- Regulatory framework

**3. Chrononutrition:**

*Circadian Influences on Metabolism:*
- Glucose tolerance decreases evening → night
- Meal timing affects metabolic outcomes
- Time-restricted eating (TRE): Eating within 8-12 hour window

*Evidence:*
| Intervention | Findings |
|--------------|----------|
| Early TRE (eating earlier) | Improved glucose, insulin sensitivity |
| Late eating | Associated with weight gain, metabolic dysfunction |
| Breakfast skipping | Mixed results; may depend on individual chronotype |
| Shift work meals | Timing strategies may mitigate metabolic harm |

**4. Sustainable Nutrition:**

*Planetary Health Diet (EAT-Lancet Commission):*
- Designed for human and planetary health
- 50% of plate: Vegetables, fruits
- Protein: Legumes, nuts, fish, minimal red meat (<14g/day)
- Whole grains, unsaturated oils
- CO2 reduction while meeting nutritional needs

*Food System Transformation:*
- Environmental impact of dietary choices
- Water use, land use, greenhouse gases
- Animal agriculture major contributor
- Plant-based shifts could reduce food-related emissions 70%

**5. Food Policy and Built Environment:**

*Policy Interventions:*
| Policy | Evidence |
|--------|----------|
| Sugar-sweetened beverage taxes | Reduced consumption, modest weight effects |
| Menu calorie labeling | Small effect on choices |
| SNAP (food stamps) | Reduces food insecurity |
| School meal standards | Improved dietary quality |
| Marketing restrictions to children | Some countries implemented |
| Front-of-pack labeling | May influence choices (Nutri-Score, etc.) |

*Food Environment:*
- Food deserts and swamps
- Fast food outlet density → obesity
- Supermarket access → better diet quality
- Workplace and school food environment

**6. Nutritional Epidemiology Methods:**

*Assessment Methods:*
| Method | Strengths | Weaknesses |
|--------|-----------|------------|
| Food Frequency Questionnaire | Captures usual diet, large studies | Memory, social desirability bias |
| 24-hour recall | Detailed, less bias | Single day, variable intake |
| Food records | Accurate short-term | Burden, reactive eating changes |
| Biomarkers | Objective | Not available for all nutrients |

*Analysis Approaches:*
- Single nutrient analysis (traditional)
- Dietary pattern analysis (factor, cluster)
- Reduced rank regression
- Machine learning pattern identification

*Limitations:*
- Confounding (healthy user bias)
- Measurement error
- Reverse causation
- Generalizability

**7. Clinical Nutrition Implementation:**

*Evidence-Practice Gap:*
- Nutrition counseling underutilized
- Limited training in medical education
- Reimbursement challenges
- Time constraints

*Effective Strategies:*
- Brief intervention with follow-up
- Multidisciplinary team approach
- Shared medical appointments
- Digital tools (apps, telehealth)
- Referral to registered dietitians

*Quality Metrics:*
- Dietary counseling rates
- Dietitian referral rates
- Patient-reported dietary behavior
- Biomarker improvements (lipids, HbA1c)

**8. Emerging Research:**

*Personalized Nutrition Companies:*
- DayTwo, ZOE, Viome (microbiome-based)
- Genetic testing for nutrition (multiple providers)
- Continuous glucose monitoring for diet optimization

*Future Directions:*
- AI-driven dietary recommendations
- Wearable-integrated nutrition tracking
- Microbiome modulation (FMT, targeted probiotics)
- Food-drug interactions (pharmaconutrition)
- Nutrition for cognitive health and longevity`,
      keyTerms: [
        { term: 'exposome', definition: 'Totality of environmental exposures including diet throughout the lifespan' },
        { term: 'chrononutrition', definition: 'Study of how timing of food intake affects metabolism and health' },
        { term: 'time-restricted eating (TRE)', definition: 'Limiting eating to a specific window (typically 8-12 hours) aligned with circadian rhythms' },
        { term: 'planetary health diet', definition: 'EAT-Lancet recommended dietary pattern for human and environmental sustainability' },
        { term: 'PREDICT study', definition: 'Large-scale precision nutrition study examining individual variability in dietary responses' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Precision nutrition not yet ready for routine clinical use
- Focus on dietary patterns rather than single nutrients
- Address food environment and access barriers
- Brief dietary counseling effective if done consistently
- Consider referral to RD for diabetes, obesity, kidney disease
- Monitor for nutritional deficiencies on restrictive diets
- Time-restricted eating may benefit metabolic health (emerging)
- Discuss sustainability for patients interested in environmental impact`,
    },
  },

  media: [
    {
      id: 'myplate-diagram',
      type: 'diagram',
      filename: 'myplate-guidelines.svg',
      title: 'MyPlate Dietary Guidelines',
      description: 'Visual representation of recommended food group proportions',
    },
  ],

  citations: [
    {
      id: 'dietary-guidelines-americans',
      type: 'website',
      title: 'Dietary Guidelines for Americans 2020-2025',
      source: 'U.S. Department of Agriculture and U.S. Department of Health and Human Services',
      url: 'https://www.dietaryguidelines.gov/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'eat-lancet',
      type: 'article',
      title: 'Food in the Anthropocene: the EAT-Lancet Commission on healthy diets from sustainable food systems',
      authors: ['Willett W', 'et al.'],
      source: 'Lancet',
      url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31788-4/fulltext',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-exercise-recommendations', targetType: 'concept', relationship: 'related', label: 'Exercise Recommendations' },
    { targetId: 'concept-weight-management', targetType: 'concept', relationship: 'related', label: 'Weight Management' },
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
  ],

  tags: {
    systems: ['gastrointestinal', 'cardiovascular', 'metabolic'],
    topics: ['preventive medicine', 'lifestyle', 'nutrition'],
    keywords: ['diet', 'nutrition', 'DASH', 'Mediterranean', 'dietary guidelines', 'macronutrients'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
