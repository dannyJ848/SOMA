/**
 * Heart-Healthy Diet - Heart Disease Management
 *
 * Teaching patients about nutrition for cardiovascular health.
 */

import { EducationalContent } from '../../types';

export const HEART_HEALTHY_DIET: EducationalContent = {
  id: 'heart-disease-heart-healthy-diet',
  type: 'concept',
  name: 'Heart-Healthy Diet',
  alternateNames: ['Cardiac diet', 'Cardiovascular nutrition', 'Low sodium diet'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating heart-healthy foods helps protect your heart by lowering cholesterol, blood pressure, and weight.',
      explanation: `**What Is a Heart-Healthy Diet?**
A heart-healthy diet focuses on foods that protect your heart and blood vessels. It limits foods that can cause problems.

**Foods to Eat More:**
- Vegetables and fruits (aim for 5+ servings daily)
- Whole grains (oatmeal, brown rice, whole wheat bread)
- Fish (especially salmon, mackerel, sardines)
- Beans and legumes
- Nuts (especially almonds, walnuts)
- Olive oil

**Foods to Limit:**
- Salt/sodium (causes high blood pressure)
- Saturated fat (raises cholesterol)
- Trans fat (very harmful for heart)
- Added sugars
- Red meat (choose lean cuts, limit portions)
- Processed meats (bacon, hot dogs, deli meats)

**Sodium (Salt) Tips:**
Most people with heart disease should have less than 2,000 mg sodium per day.
- Don't add salt at the table
- Use herbs and spices instead of salt
- Check food labels for sodium content
- Watch out for canned and processed foods
- Rinse canned vegetables

**Reading Food Labels:**

Look for:
| Nutrient | Goal |
|----------|------|
| Sodium | Less than 600 mg per meal |
| Saturated fat | Less than 7% of calories |
| Trans fat | 0 grams |
| Fiber | More is better |

**The Plate Method:**
- 1/2 plate: Vegetables
- 1/4 plate: Lean protein (fish, chicken, beans)
- 1/4 plate: Whole grains

**Heart-Healthy Snacks:**
- Fresh fruit
- Raw vegetables with hummus
- Unsalted nuts
- Low-fat yogurt

**Tips for Success:**
1. Cook more meals at home
2. Plan your meals for the week
3. Shop with a list
4. Read food labels
5. Make changes gradually`,
      keyTerms: [
        { term: 'sodium', definition: 'A mineral in salt that can raise blood pressure' },
        { term: 'saturated fat', definition: 'A type of fat that can raise cholesterol levels' },
        { term: 'whole grains', definition: 'Grains that contain all parts of the grain kernel, including fiber' },
      ],
      analogies: [
        'Think of your blood vessels like pipes - eating too much salt and fat can cause buildup that clogs them over time.',
        'A heart-healthy diet is like premium fuel for your car - it helps everything run more smoothly.',
      ],
      examples: [
        'Instead of chips, Maria snacks on baby carrots with hummus.',
        'Tom switched from white bread to whole wheat and from regular pasta to whole grain pasta.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart-healthy eating patterns such as the Mediterranean and DASH diets emphasize whole foods while limiting sodium, saturated fat, and processed foods to reduce cardiovascular risk.',
      explanation: `**Evidence-Based Dietary Patterns:**

*Mediterranean Diet:*
- Foundation: Vegetables, fruits, whole grains, legumes
- Healthy fats: Olive oil, nuts
- Protein: Fish, poultry, limited red meat
- Moderate red wine (optional)
- Evidence: Reduced cardiovascular events by ~30% (PREDIMED)

*DASH Diet (Dietary Approaches to Stop Hypertension):*
- High in fruits, vegetables, whole grains
- Low-fat dairy
- Lean protein
- Limited sodium, sweets, red meat
- Evidence: Lowers blood pressure significantly

**Sodium Management:**

| Recommendation | Amount |
|----------------|--------|
| General population | <2,300 mg/day |
| Heart failure | 2,000-3,000 mg/day (varies) |
| Hypertension | 1,500-2,300 mg/day |

*High-Sodium Foods to Avoid:*
- Restaurant/fast food
- Canned soups
- Processed meats
- Cheese
- Bread products
- Condiments (soy sauce, ketchup)

*Low-Sodium Cooking Tips:*
- Fresh or frozen vegetables (no added salt)
- Herbs, spices, citrus for flavor
- Rinse canned foods
- Choose "no salt added" products
- Taste before adding salt

**Fat Quality:**

| Fat Type | Effect | Sources |
|----------|--------|---------|
| Saturated | Raises LDL | Red meat, butter, cheese |
| Trans | Raises LDL, lowers HDL | Fried foods, some margarines |
| Monounsaturated | Lowers LDL | Olive oil, avocado, nuts |
| Polyunsaturated | Lowers LDL | Fish, walnuts, flaxseed |
| Omega-3 | Anti-inflammatory | Fatty fish, flaxseed |

**Cholesterol-Lowering Foods:**

*Foods with proven LDL-lowering effects:*
- Soluble fiber (oats, beans, apples)
- Plant sterols/stanols
- Soy protein
- Nuts (especially almonds, walnuts)
- Fatty fish (omega-3s)

**Meal Planning:**

*Sample Day:*
| Meal | Example |
|------|---------|
| Breakfast | Oatmeal with berries and walnuts |
| Lunch | Grilled chicken salad with olive oil dressing |
| Dinner | Baked salmon, roasted vegetables, brown rice |
| Snacks | Apple, unsalted almonds |

**Eating Out Tips:**
- Check nutrition information online before
- Ask for sauces/dressings on the side
- Choose grilled over fried
- Request low-sodium preparation
- Share portions or take half home

**Special Considerations:**

*Heart Failure:*
- Fluid restriction may apply (typically 1.5-2 L/day)
- Sodium restriction important
- Monitor weight daily

*Warfarin Users:*
- Consistent vitamin K intake (green vegetables)
- Don't drastically change vegetable intake`,
      keyTerms: [
        { term: 'Mediterranean diet', definition: 'Eating pattern emphasizing olive oil, fish, vegetables, and whole grains with proven cardiovascular benefits' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; eating pattern that lowers blood pressure' },
        { term: 'omega-3 fatty acids', definition: 'Polyunsaturated fats found in fish with anti-inflammatory and heart-protective effects' },
        { term: 'soluble fiber', definition: 'Fiber that dissolves in water and helps lower cholesterol' },
      ],
      analogies: [
        'The Mediterranean diet is like following the eating habits of people who have lived long, healthy lives for generations.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical nutrition therapy for cardiovascular disease incorporates evidence-based dietary patterns, specific nutrient targets, and individualized counseling to reduce cardiovascular events and optimize risk factor management.',
      explanation: `**Evidence Base for Cardiovascular Nutrition:**

*Landmark Trials:*
| Trial | Intervention | Key Finding |
|-------|--------------|-------------|
| PREDIMED | Mediterranean + EVOO/nuts | 30% CV event reduction |
| DASH-Sodium | DASH + sodium reduction | BP reduction 8-14 mmHg |
| Lyon Heart Study | Mediterranean | 50-70% reduction in events |
| OmniHeart | Pattern variations | Protein/MUFA improve outcomes |

**Therapeutic Dietary Targets:**

*Macronutrient Recommendations:*
| Nutrient | Recommendation | Rationale |
|----------|----------------|-----------|
| Total fat | 25-35% calories | Quality over quantity |
| Saturated fat | <7% calories | LDL reduction |
| Trans fat | <1% (ideally 0) | LDL and CV risk |
| Carbohydrates | 45-65% (emphasize complex) | Glycemic control |
| Protein | 15-20% | Lean sources |
| Fiber | 25-30 g/day | Cholesterol and glycemic |

*Specific Nutrient Targets:*
| Nutrient | Target | CV Benefit |
|----------|--------|------------|
| Sodium | <2,300 mg (ideal <1,500) | Blood pressure |
| Potassium | 3,500-4,700 mg | Blood pressure |
| Omega-3 | 2 fish servings/week | Triglycerides, CV events |
| Fiber | 25-30 g | LDL reduction |

**Mechanisms of Dietary Effects:**

*Mediterranean Diet:*
\`\`\`
Components → Mechanisms → Outcomes

Olive oil → Anti-inflammatory → Reduced atherosclerosis
Fish → Omega-3s → Reduced arrhythmias, TG
Nuts → MUFA, fiber → LDL reduction
Vegetables → Polyphenols, K+ → Antioxidant, BP
Whole grains → Fiber → Cholesterol, glucose
Wine (moderate) → Polyphenols → Endothelial function
\`\`\`

**Condition-Specific Recommendations:**

*Heart Failure:*
| Consideration | Recommendation |
|---------------|----------------|
| Sodium | 2,000-3,000 mg/day (individualized) |
| Fluid | 1.5-2 L/day if severe HF |
| Nutrition status | Address malnutrition risk |
| Weight | Monitor daily |

*Post-ACS:*
- Mediterranean pattern
- Omega-3 fatty acids
- Plant sterols if LDL elevated
- Cardiac rehabilitation nutrition component

*Atrial Fibrillation:*
- Moderate alcohol or abstinence
- Caffeine in moderation
- Weight management
- Consistent vitamin K if on warfarin

**Functional Foods and Supplements:**

*Evidence-Based Additions:*
| Product | Effect | Dose | Evidence |
|---------|--------|------|----------|
| Plant sterols | LDL ↓ 6-15% | 2 g/day | Strong |
| Psyllium | LDL ↓ 5-10% | 10 g/day | Strong |
| Fish oil | TG ↓ 15-30% | 2-4 g EPA/DHA | Strong |
| Red yeast rice | LDL ↓ | Variable | Moderate (contains statin) |

*Limited Evidence:*
- Garlic, CoQ10, vitamin E, selenium

**Implementation:**

*Medical Nutrition Therapy (MNT):*
- Individual assessment
- Personalized goals
- Culturally appropriate recommendations
- Follow-up and reinforcement
- Coordination with care team

*Behavior Change Strategies:*
- Motivational interviewing
- Goal setting
- Self-monitoring
- Problem-solving barriers`,
      keyTerms: [
        { term: 'medical nutrition therapy (MNT)', definition: 'Evidence-based nutrition counseling provided by registered dietitians' },
        { term: 'plant sterols', definition: 'Naturally occurring compounds that block cholesterol absorption, lowering LDL' },
        { term: 'PREDIMED', definition: 'Major clinical trial demonstrating cardiovascular benefits of Mediterranean diet' },
        { term: 'functional foods', definition: 'Foods providing health benefits beyond basic nutrition' },
      ],
      clinicalNotes: 'Mediterranean diet has strongest evidence for cardiovascular outcomes. Dietary counseling by RDN is recommended for patients with CV disease. Plant sterols can provide additional LDL lowering. Sodium restriction in heart failure should be individualized - overly strict restriction may be harmful.',
    },
    4: {
      level: 4,
      summary: 'Cardiovascular nutrition science integrates dietary pattern research, nutrient-gene interactions, microbiome effects, and precision nutrition approaches to optimize individualized dietary recommendations.',
      explanation: `**Mechanisms of Diet-Heart Relationship:**

*Lipid Metabolism:*
\`\`\`
Dietary Fat → Intestinal Absorption → Chylomicrons
                                    ↓
Saturated Fat → Hepatic LDL-R downregulation → ↑LDL
                                    ↓
MUFA/PUFA → LDL-R upregulation → ↓LDL
                                    ↓
Omega-3 → ↓VLDL synthesis → ↓Triglycerides
\`\`\`

*Vascular Effects:*
| Dietary Component | Vascular Effect |
|-------------------|-----------------|
| Polyphenols | Endothelial NO production |
| Omega-3 | Anti-inflammatory, anti-thrombotic |
| Sodium | Endothelial dysfunction |
| Potassium | Vasodilation |

**Nutrigenomics:**

*Gene-Diet Interactions:*
| Gene | Nutrient | Interaction |
|------|----------|-------------|
| APOE | Fat type | E4 carriers more sensitive to saturated fat |
| FTO | Macronutrients | Obesity gene influences diet response |
| TCF7L2 | Carbohydrates | Diabetes risk modification |
| MTHFR | Folate | Homocysteine metabolism |

*Pharmacogenomics Interface:*
- Vitamin K (VKORC1) and warfarin
- Grapefruit and CYP3A4 substrates
- Dietary tyramine and MAOIs

**Microbiome-Diet-Cardiovascular Axis:**

*TMAO Pathway:*
\`\`\`
Dietary Choline/Carnitine (meat, eggs)
           ↓
Gut Microbiome Metabolism
           ↓
Trimethylamine (TMA)
           ↓
Hepatic FMO3
           ↓
TMAO (Trimethylamine N-oxide)
           ↓
Pro-atherogenic Effects:
- Foam cell formation
- Platelet hyperreactivity
- Vascular inflammation
\`\`\`

*Therapeutic Targets:*
- Reduce dietary precursors
- Modify microbiome composition
- Inhibit microbial enzymes

**Advanced Dietary Interventions:**

*Time-Restricted Eating:*
- Eating within 8-12 hour window
- Cardiovascular benefits emerging
- Mechanisms: Circadian alignment, metabolic improvement
- Clinical trial evidence growing

*Therapeutic Fasting:*
- Intermittent fasting patterns
- Potential cardiometabolic benefits
- Safety considerations in CV disease
- Not standard recommendation yet

**Precision Nutrition:**

*Personalization Approaches:*
\`\`\`
Individual Assessment:
- Genetics (nutrigenomics)
- Microbiome profiling
- Metabolomics
- Continuous glucose monitoring
- Food response testing

Algorithm:
- Integration of personal data
- Predictive modeling
- Personalized recommendations

Validation:
- Outcome tracking
- Iterative refinement
\`\`\`

**Clinical Implementation Challenges:**

*Barriers:*
| Barrier | Impact |
|---------|--------|
| Food environment | Access to healthy foods |
| Food literacy | Understanding recommendations |
| Cultural preferences | Adherence |
| Cost | Economic barriers |
| Behavior change | Habit modification difficulty |

*Solutions:*
- Food prescriptions
- Community resources
- Culturally adapted recommendations
- Motivational interviewing
- Digital tools

**Emerging Research:**

*Ultra-Processed Foods:*
- Associated with CV events independent of nutrients
- NOVA classification system
- Mechanisms being investigated
- Growing clinical attention

*Dietary Patterns Beyond Nutrients:*
- Food matrix effects
- Meal timing
- Eating behaviors
- Social context of eating`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects response to nutrients' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived metabolite linked to cardiovascular risk' },
        { term: 'time-restricted eating', definition: 'Limiting food intake to specific hours, aligning with circadian biology' },
        { term: 'ultra-processed foods', definition: 'Industrially manufactured foods with multiple additives and minimal whole food ingredients' },
        { term: 'NOVA classification', definition: 'Food classification system based on degree of processing' },
      ],
      clinicalNotes: 'TMAO represents diet-microbiome-CV disease connection with therapeutic potential. Nutrigenomics testing is available but clinical utility varies. Ultra-processed food reduction may provide benefits beyond traditional nutrient targets. Time-restricted eating shows promise but needs more CV outcome data.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art cardiovascular nutrition integrates multi-omics personalization, microbiome modulation, digital nutrition interventions, and systems biology approaches to transform dietary management of cardiovascular disease.',
      explanation: `**Systems Biology of Diet-Heart Relationship:**

*Multi-Scale Integration:*
\`\`\`
Molecular Level:
- Nutrient-gene interactions
- Epigenetic modifications
- Protein expression changes
- Metabolite alterations

Cellular Level:
- Endothelial function
- Macrophage polarization
- Hepatocyte metabolism
- Adipocyte signaling

Tissue/Organ Level:
- Vascular remodeling
- Cardiac metabolism
- Adipose tissue inflammation
- Gut barrier function

Systems Level:
- Neurohormonal axes
- Microbiome ecology
- Immune-metabolic crosstalk
- Circadian regulation
\`\`\`

**Advanced Microbiome Science:**

*Cardiovascular Microbiome Signatures:*
| Condition | Microbiome Feature | Potential Intervention |
|-----------|-------------------|----------------------|
| Atherosclerosis | ↑TMAO producers | Diet, targeted probiotics |
| Hypertension | ↓SCFA producers | Fiber, prebiotics |
| Heart failure | Gut barrier dysfunction | Prebiotics, barrier nutrients |

*Therapeutic Approaches:*
- Precision prebiotics
- Next-generation probiotics
- Postbiotics (metabolite delivery)
- Fecal microbiota transplant (investigational)

**Digital Nutrition Therapeutics:**

*Technology Integration:*
\`\`\`
Data Collection:
- Food logging (AI-assisted image recognition)
- Continuous glucose monitoring
- Wearable activity tracking
- Microbiome testing
- Genetic profiling

Analytics:
- Machine learning prediction
- Pattern recognition
- Personalized recommendations
- Real-time feedback

Intervention:
- Adaptive coaching
- Gamification
- Social support
- Just-in-time prompts
\`\`\`

*Efficacy Data:*
- Digital nutrition programs show efficacy
- Scalability advantage
- Engagement challenges
- Integration with clinical care needed

**Precision Nutrition Research:**

*PREDICT Studies:*
\`\`\`
Key Findings:
- Individual responses to foods highly variable
- Genetics explain ~30% of variation
- Microbiome contributes significantly
- Meal timing matters
- Personalization outperforms population guidelines
\`\`\`

*Translation to CV Disease:*
- Personalized dietary patterns
- Individual glycemic response
- Postprandial lipemia assessment
- Inflammation response

**Novel Nutritional Biomarkers:**

*Metabolomics Panels:*
| Biomarker Class | CV Application |
|-----------------|----------------|
| Amino acid profiles | CV risk prediction |
| Lipid species | Beyond standard lipids |
| Gut-derived metabolites | Diet-microbiome assessment |
| Inflammatory mediators | Dietary inflammation response |

*Nutritional Assessment:*
- Objective dietary intake markers
- Compliance monitoring
- Response prediction
- Outcome correlation

**Policy and Population Approaches:**

*Food Environment:*
- Food system transformation
- Labeling policies
- Food assistance programs
- Community food access
- School/workplace nutrition

*Implementation Science:*
\`\`\`
Evidence → Implementation Gap

Bridging Strategies:
- Health system integration
- Digital delivery
- Community health workers
- Policy levers
- Economic incentives
\`\`\`

**Future Directions:**

*Research Priorities:*
- Personalized nutrition trials in CVD
- Microbiome intervention studies
- Digital therapeutic validation
- Ultra-processed food mechanisms
- Chrononutrition optimization

*Emerging Concepts:*
- Food as medicine programs
- Nutrition prescriptions
- Medical food development
- Cultured/sustainable proteins
- Synthetic biology applications`,
      keyTerms: [
        { term: 'precision nutrition', definition: 'Individualized dietary recommendations based on personal biological, behavioral, and environmental data' },
        { term: 'postbiotics', definition: 'Beneficial metabolites produced by gut bacteria or their inactivated components' },
        { term: 'PREDICT study', definition: 'Large-scale research program demonstrating individual variability in dietary responses' },
        { term: 'food as medicine', definition: 'Clinical programs providing healthy food as therapeutic intervention' },
        { term: 'chrononutrition', definition: 'Study of interaction between nutrition and circadian biology' },
        { term: 'SCFA', definition: 'Short-chain fatty acids; gut microbiome products with cardiovascular benefits' },
      ],
      clinicalNotes: 'Precision nutrition is emerging but standard cardiovascular dietary recommendations remain foundation of care. Digital nutrition tools can improve adherence and outcomes. Microbiome modulation for CV disease is largely investigational. Food environment and policy changes needed for population-level impact. Consider food as medicine programs for high-risk patients.',
    },
  },

  media: [
    {
      id: 'heart-healthy-plate',
      type: 'diagram',
      filename: 'heart-healthy-plate.svg',
      title: 'Heart-Healthy Plate',
      description: 'Visual guide to building heart-healthy meals',
    },
  ],

  citations: [
    {
      id: 'predimed',
      type: 'article',
      title: 'PREDIMED Trial: Primary Prevention of Cardiovascular Disease with a Mediterranean Diet',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'heart-disease-blood-pressure-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Pressure Monitoring' },
    { targetId: 'chronic-disease-lifestyle-modifications', targetType: 'topic', relationship: 'related', label: 'Lifestyle Modifications' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['heart disease', 'nutrition', 'lifestyle'],
    keywords: ['heart-healthy diet', 'Mediterranean diet', 'DASH', 'sodium restriction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
