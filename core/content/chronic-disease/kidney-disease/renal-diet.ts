/**
 * Renal Diet - Kidney Disease Nutrition Management
 */

import { EducationalContent } from '../../types';

export const RENAL_DIET: EducationalContent = {
  id: 'chronic-kidney-renal-diet',
  type: 'concept',
  name: 'Renal Diet and Nutrition',
  alternateNames: ['Kidney Diet', 'CKD Diet', 'Low Sodium Diet', 'Renal Nutrition', 'Kidney-Friendly Eating'],

  levels: {
    1: {
      level: 1,
      summary: 'A renal diet limits sodium, potassium, and phosphorus to protect your kidneys. Eating the right foods helps you feel better and slows kidney disease.',
      explanation: `**Why Is Diet Important for Kidneys?**

What you eat affects your kidney health. When kidneys are damaged, they cannot remove certain substances from your blood as well. A renal diet helps by:
- Reducing strain on your kidneys
- Keeping minerals balanced
- Controlling blood pressure
- Preventing complications

**Sodium (Salt) - Limit It:**

Too much salt makes you thirsty, raises blood pressure, and causes fluid buildup.

---
Foods High in Salt (Limit These):
- Canned soups and vegetables
- Frozen dinners
- Deli meats and bacon
- Chips and crackers
- Pickles and olives
- Restaurant/fast food
- Salted nuts
---

---
Better Choices:
- Fresh fruits and vegetables
- Fresh meat (not processed)
- Low-sodium versions of foods
- Herbs and spices for flavor
- Cook at home more often
---

Goal: Less than 2,300 mg sodium per day (about 1 teaspoon of salt)

**Potassium - Watch Your Levels:**

Potassium helps your heart and muscles work. Damaged kidneys may not remove extra potassium well.

---
High Potassium Foods (You May Need to Limit):
- Bananas and oranges
- Tomatoes and tomato sauce
- Potatoes and sweet potatoes
- Spinach and other leafy greens
- Avocados
- Beans and nuts
- Salt substitutes (often high in potassium)
---

---
Lower Potassium Options:
- Apples, berries, grapes
- Cauliflower, cabbage, cucumber
- White bread and rice
- Lean meats
- Butter (small amounts)
---

**Phosphorus - Hidden in Processed Foods:**

Phosphorus keeps bones healthy. Too much can damage blood vessels and weaken bones.

---
Foods with Added Phosphorus (Avoid):
- Colas and dark sodas
- Processed cheeses
- Packaged baked goods
- Instant foods
- Many fast foods
---

---
Better Choices:
- Fresh foods
- White bread instead of whole wheat
- Rice milk instead of dairy (check with your doctor)
- Small portions of meat
---

**Protein - The Right Amount:**

Your body needs protein, but too much makes kidneys work harder.

---
Protein Guidelines:
- Eat moderate portions
- Choose lean meats, fish, eggs
- Limit to 2-3 ounces per meal
- Your doctor may recommend a specific amount
---

**Fluid - Follow Your Doctor's Advice:**

Some people need to limit fluids. Others do not. Ask your doctor what is right for you.

**Tips for Success:**

1. Read food labels - look for sodium content
2. Cook at home when possible
3. Ask about seeing a renal dietitian
4. Plan meals ahead
5. Keep a food diary
6. Ask your doctor about your specific needs

Remember: Every person with kidney disease has different needs. Work with your healthcare team to create a plan that works for you.`,
      keyTerms: [
        { term: 'sodium', definition: 'Salt; limiting it helps control blood pressure and fluid balance' },
        { term: 'potassium', definition: 'A mineral that helps muscles and nerves work; may need limits in kidney disease' },
        { term: 'phosphorus', definition: 'A mineral for bone health; can build up in blood when kidneys fail' },
        { term: 'renal dietitian', definition: 'A nutrition expert who specializes in kidney disease diets' },
      ],
      analogies: [
        'Your kidneys are like a filter in a coffee maker. When the filter gets clogged, you need to be careful what you put in. The renal diet is like using filtered water and the right coffee grounds to protect the filter.',
        'Think of sodium like water filling a bathtub. If the drain (your kidneys) is slow, you need to turn down the faucet (eat less salt) to prevent overflow.',
      ],
      examples: [
        'Maria learned to flavor her food with herbs like basil and oregano instead of salt. She discovered she enjoyed the natural flavors of foods more than she expected.',
        'John switched from canned vegetables to fresh or frozen without added salt. His blood pressure improved, and he felt less swollen in his legs.',
      ],
    },
    2: {
      level: 2,
      summary: 'The renal diet restricts sodium, potassium, and phosphorus based on kidney function stage and lab values. Individualized nutrition counseling optimizes outcomes.',
      explanation: `**Principles of Renal Nutrition**

Dietary management in CKD addresses three primary nutrients while maintaining adequate nutrition:

**Sodium Restriction:**

*Rationale:*
- Hypertension control
- Fluid balance
- Reduced cardiovascular risk
- Prevention of edema

*Recommendations by Stage:*
---
CKD Stages 1-3: Less than 2,300 mg/day (general population guideline)
CKD Stages 4-5: 1,500-2,000 mg/day
Dialysis: Individualized, typically 2,000-3,000 mg/day
---

*Implementation Strategies:*
- Read nutrition labels (sodium per serving)
- Avoid processed and restaurant foods
- Use fresh or frozen vegetables (no salt added)
- Season with herbs, spices, lemon, vinegar
- Rinse canned foods to reduce sodium

**Potassium Management:**

*When to Restrict:*
- eGFR less than 30 (usually)
- History of hyperkalemia
- Medications that raise potassium (ACEi, ARB, spironolactone)
- Dialysis patients

*Target:* Usually 2,000-3,000 mg/day when restricted

*High Potassium Foods to Limit:*
---
Fruits: Bananas, oranges, cantaloupe, kiwi, prunes, raisins
Vegetables: Tomatoes, potatoes, sweet potatoes, spinach, avocado
Other: Chocolate, nuts, seeds, salt substitutes, sports drinks
---

*Potassium Reduction Techniques:*
- Leaching: Soak vegetables in water before cooking
- Double-boiling: Cook, drain, cook again in fresh water
- Avoid liquids from canned foods

**Phosphorus Control:**

*Why It Matters:*
- Prevents secondary hyperparathyroidism
- Reduces vascular calcification
- Maintains bone health

*Target:*
- CKD stages 3-5: 800-1,000 mg/day
- May need lower if elevated PTH or phosphorus

*Sources of Phosphorus:*

Organic phosphorus (animal foods) - 40-60% absorbed
- Meat, poultry, fish, dairy, eggs

Inorganic phosphorus (additives) - 90-100% absorbed
- Processed foods, colas, preservatives
- Look for "phos-" in ingredients

*Management:*
- Limit processed foods (major source)
- Use phosphate binders with meals if prescribed
- Moderate protein portions

**Protein Recommendations:**

*Goals:*
- Maintain nutritional status
- Minimize uremic symptoms
- Reduce hyperfiltration

*Recommendations:*
---
CKD Stages 1-2: 0.8 g/kg/day (standard recommendation)
CKD Stages 3-5 (non-dialysis): 0.6-0.8 g/kg/day
Hemodialysis: 1.0-1.2 g/kg/day
Peritoneal dialysis: 1.2-1.3 g/kg/day
---

*Quality matters:* 50% from high biological value (eggs, meat, fish, poultry, dairy)

**Fluid Management:**

*When to Restrict:*
- Oliguria (low urine output)
- Heart failure
- Dialysis patients
- Severe hyponatremia

*Assessment:*
- Daily weights
- Blood pressure trends
- Edema assessment
- Shortness of breath

**Nutritional Monitoring:**

Labs to track:
- Serum albumin (nutritional status)
- Phosphorus
- Calcium
- Potassium
- Bicarbonate
- Cholesterol/lipids

Referral to renal dietitian recommended for:
- All Stage 4-5 CKD patients
- Diabetes with CKD
- Malnutrition concerns
- Complex dietary needs`,
      keyTerms: [
        { term: 'hyperkalemia', definition: 'High potassium levels in the blood; can cause dangerous heart rhythms' },
        { term: 'secondary hyperparathyroidism', definition: 'Overactive parathyroid glands due to kidney disease' },
        { term: 'phosphate binders', definition: 'Medications that bind phosphorus in food so it is not absorbed' },
        { term: 'biological value', definition: 'Measure of how well the body can use a protein; animal proteins have higher biological value' },
        { term: 'leaching', definition: 'Soaking vegetables in water to remove some potassium' },
      ],
      analogies: [
        'Managing phosphorus is like controlling calcium deposits in pipes. Just as hard water leaves mineral buildup, high phosphorus leaves calcium deposits in blood vessels.',
        'Protein metabolism is like burning fuel - it creates waste (urea). When your exhaust system (kidneys) is compromised, you need to burn less fuel to avoid toxic buildup.',
      ],
      examples: [
        'A patient with Stage 4 CKD worked with a dietitian to reduce protein to 0.6 g/kg/day. Their uremic symptoms improved, and BUN decreased from 80 to 55 mg/dL.',
        'Switching from regular cola (high phosphorus) to lemon-lime soda helped a patient lower their serum phosphorus from 5.8 to 4.5 mg/dL without changing medications.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based renal nutrition therapy involves individualized macronutrient and micronutrient management, with attention to metabolic acidosis, mineral bone disorder, and cardiovascular risk reduction.',
      explanation: `**Comprehensive Nutritional Management in CKD**

**Sodium and Volume Management:**

*Physiological Basis:*
- Impaired natriuresis in CKD
- Sodium retention contributes to hypertension
- Extracellular volume expansion

*Evidence-Based Recommendations:*
- KDIGO: Less than 2 g/day sodium for adults with CKD
- DASH diet modifications for CKD
- Individualize based on volume status

*Practical Implementation:*
- 24-hour urine sodium collection to assess intake
- Target less than 100 mEq/day (2.3 g sodium)
- Greater restriction (1.5 g/day) if refractory hypertension

**Potassium Homeostasis:**

*Pathophysiology of Hyperkalemia:*
- Reduced GFR (primary mechanism)
- Acidosis (intracellular shift)
- Insulin deficiency/resistance
- Medications (RAAS blockers, beta-blockers)
- Constipation (reduced colonic secretion)

*Dietary Management:*
- Restrict when eGFR less than 30 or K+ greater than 5.0
- Target 2-3 g/day potassium
- Education on hidden sources
- Cooking methods to reduce content

*Potassium Content Categories:*
---
High (greater than 250 mg/serving): Bananas, oranges, potatoes, tomatoes, avocado
Medium (150-250 mg): Apples, berries, cauliflower, cabbage
Low (less than 150 mg): Blueberries, cranberries, cucumber, lettuce
---

**Phosphorus and Mineral Bone Disorder:**

*Regulation Disruption in CKD:*
- Decreased phosphate excretion
- Reduced 1,25(OH)2 vitamin D
- Secondary hyperparathyroidism
- Vascular calcification risk

*Dietary Phosphorus:*
- Goal: 800-1,000 mg/day (stages 3-5)
- Absorption varies by source
- Bioavailability: Additives greater than meat greater than plant

*Label Reading:*
Watch for phosphorus additives:
- Phosphoric acid
- Sodium phosphate
- Pyrophosphate
- Polyphosphate

**Protein Intake Optimization:**

*Very Low Protein Diet (VLPD):*
- 0.3-0.4 g/kg/day + keto acids
- May slow progression in select patients
- Requires close dietitian supervision
- Not appropriate for malnourished patients

*Moderate Protein Restriction:*
- 0.6-0.8 g/kg/day (most common)
- Adequate caloric intake essential
- 50-60% high biological value
- Monitor nutritional markers

**Metabolic Acidosis Management:**

*Impact of Acidosis:*
- Protein catabolism
- Bone demineralization
- Progression of CKD

*Dietary Approach:*
- Increase fruits and vegetables (alkaline)
- Reduce acid-producing foods (meat, cheese)
- May supplement with bicarbonate
- Target serum bicarbonate 22-26 mEq/L

**Cardiovascular Risk Modification:**

*Lipid Management:*
- CKD patients have high CVD risk
- Statins indicated for most patients 50+
- Dietary fat quality matters
- Limit saturated fat, trans fat

*Mediterranean Diet Adaptations:*
- Heart-healthy principles
- Modified for potassium/phosphorus
- Plant-forward approach
- Olive oil as primary fat

**Special Considerations:**

*Diabetes with CKD:*
- Carbohydrate consistency
- Glycemic control targets may relax with advanced CKD
- Care with potassium in DKD

*Obesity in CKD:*
- Weight loss may be beneficial in early CKD
- Avoid malnutrition in advanced CKD
- Consider bariatric surgery candidacy

*Pregnancy:*
- Higher protein needs
- Close monitoring essential
- Specialist care required`,
      keyTerms: [
        { term: 'natriuresis', definition: 'Excretion of sodium in urine' },
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System; hormonal system regulating blood pressure' },
        { term: 'keto acids', definition: 'Nitrogen-free amino acid analogs used in very low protein diets' },
        { term: 'net endogenous acid production', definition: 'Acid generated from metabolism of foods; managed with alkali therapy' },
        { term: 'biological value', definition: 'Protein quality measure based on amino acid composition and digestibility' },
      ],
      clinicalNotes: 'Dietary counseling by renal dietitian correlates with improved outcomes. Protein restriction requires adequate caloric intake to prevent malnutrition. Phosphorus restriction is most effective when avoiding additives. Potassium restriction must be individualized - not all patients need it despite low eGFR.',
    },
    4: {
      level: 4,
      summary: 'Advanced renal nutrition integrates pathophysiology-based interventions for mineral bone disorder, protein-energy wasting, and metabolic complications while optimizing cardiovascular outcomes.',
      explanation: `**Pathophysiology-Based Nutritional Interventions**

**Mineral and Bone Disorder (CKD-MBD):**

*Integrated Pathophysiology:*
---
Decreased GFR
    ↓
Phosphate Retention + FGF-23 Rise
    ↓
1,25(OH)2D Suppression + PTH Elevation
    ↓
Osteodystrophy + Vascular Calcification
---

*Nutritional Management:*
- Phosphate restriction: 800-1,000 mg/day
- Calcium intake: 1,000-1,500 mg/day (total)
- Vitamin D: Cholecalciferol supplementation
- Avoid calcium overload from binders

*Phosphate Binder Selection:*

| Binder Type     | Advantages           | Disadvantages        |
|-----------------|----------------------|----------------------|
| Calcium acetate | Low cost, effective  | Calcium load         |
| Sevelamer       | No calcium load      | Cost, pill burden    |
| Lanthanum       | Effective            | Rare earth element   |
| Ferric citrate  | Iron replacement     | GI effects           |
| Sucroferric     | Lower pill burden    | Iron overload risk   |

**Protein-Energy Wasting (PEW):**

*Definition and Diagnosis:*
- Serum albumin less than 3.8 g/dL
- Body mass less than 23 kg/m2
- Reduced muscle mass
- Low dietary protein/energy intake

*Pathophysiology:*
- Anorexia from uremic toxins
- Inflammation
- Metabolic acidosis
- Insulin resistance
- Comorbidities

*Nutritional Intervention:*
- Energy: 30-35 kcal/kg/day
- Protein: Individualize by CKD stage
- Oral nutritional supplements
- Intradialytic parenteral nutrition (if indicated)
- Anti-inflammatory strategies

**Metabolic Acidosis:**

*Consequences:*
- Skeletal muscle breakdown
- Albumin negative charge changes
- Bone buffering
- Growth hormone resistance
- Progression of CKD

*Dietary Alkali:*
- Fruits and vegetables increase serum bicarbonate
- Equivalent to sodium bicarbonate in some studies
- Benefits beyond acid-base (fiber, antioxidants)
- Monitor potassium with high intake

**Uremic Toxins and Diet:**

*Protein-Bound Toxins:*
- Indoxyl sulfate (from tryptophan)
- p-Cresyl sulfate (from tyrosine)
- Associated with CVD and progression

*Management Strategies:*
- AST-120 (oral adsorbent) - limited availability
- Probiotics/prebiotics (investigational)
- Adequate fiber intake
- Consider binders for some toxins

**Advanced Glycation End Products (AGEs):**

*Sources:*
- Diet: Grilled, fried, processed foods
- Endogenous: Hyperglycemia, oxidative stress

*Impact:*
- Inflammation
- Oxidative stress
- Vascular damage

*Dietary Reduction:*
- Cooking methods: Steam, boil, stew vs grill/fry
- Limit highly processed foods
- Fresh preparation preferred

**Plant-Based Diets in CKD:**

*Potential Benefits:*
- Lower acid load
- Higher fiber
- Reduced phosphorus absorption
- Cardiovascular benefits

*Challenges:*
- Potassium content
- Protein quality
- Patient acceptance

*Implementation:*
- Gradual transition
- Dietitian supervision
- Monitor potassium
- Ensure adequate protein

**Nutritional Assessment Tools:**

*Subjective Global Assessment (SGA):*
- Weight history
- Dietary intake
- GI symptoms
- Functional status
- Physical exam

*Objective Measures:*
- Serum prealbumin (short-term nutrition)
- Serum albumin (long-term, also inflammation)
- BMI trends
- Lean body mass (DEXA, BIA)
- Handgrip strength

**Pharmacological-Nutritional Interactions:**

*Drug-Nutrient Considerations:*
- Phosphate binders: Take with meals
- Iron: Separate from calcium, take with vitamin C
- Levothyroxine: Empty stomach
- Immunosuppressants: Food interactions

*Nutritional Side Effects:*
- Appetite suppression (drugs)
- Taste changes (metallic)
- Nausea
- GI disturbances`,
      keyTerms: [
        { term: 'CKD-MBD', definition: 'Chronic Kidney Disease-Mineral and Bone Disorder; systemic disorder of mineral metabolism' },
        { term: 'protein-energy wasting', definition: 'Decreased body stores of protein and energy fuels in CKD' },
        { term: 'FGF-23', definition: 'Fibroblast Growth Factor 23; phosphaturic hormone elevated early in CKD' },
        { term: 'indoxyl sulfate', definition: 'Uremic toxin derived from tryptophan metabolism' },
        { term: 'AGEs', definition: 'Advanced Glycation End Products; compounds linked to inflammation and vascular damage' },
        { term: 'SGA', definition: 'Subjective Global Assessment; clinical tool for nutritional assessment' },
      ],
      clinicalNotes: 'PEW is associated with increased mortality in CKD. Early nutritional intervention prevents complications. Plant-based diets show promise but require careful implementation. Consider intradialytic nutrition in malnourished hemodialysis patients.',
    },
    5: {
      level: 5,
      summary: 'Precision nutrition in nephrology incorporates metabolomics, microbiome analysis, and individualized phenotyping to optimize dietary interventions and improve outcomes in chronic kidney disease.',
      explanation: `**Precision Nutrition in CKD**

**Metabolomics and Dietary Assessment:**

*Uremic Solute Profiling:*
- Mass spectrometry identifies uremic solutes
- Individual variation in toxin generation
- Dietary precursors quantified
- Personalized restriction strategies

*Metabolic Phenotyping:*
---
Baseline Metabolome
    ↓
Identify Pathway Abnormalities
    ↓
Targeted Dietary Intervention
    ↓
Monitor Response
    ↓
Iterate Optimization
---

**Gut Microbiome and CKD:**

*Dysbiosis in Kidney Disease:*
- Decreased beneficial bacteria
- Increased urea-metabolizing bacteria
- Increased pathogenic species
- Reduced SCFA production

*Dietary Modulation:*

| Intervention     | Mechanism                    | Evidence Level |
|------------------|------------------------------|----------------|
| Synbiotics       | Modify gut flora             | Emerging       |
| Resistant starch | SCFA production              | Promising      |
| Plant fiber      | Microbiome diversity         | Growing        |
| Protein restriction| Reduce urea substrate      | Established    |

*Therapeutic Implications:*
- Prebiotic fiber: 20-30 g/day target
- Fermented foods (potassium permitting)
- Avoid excessive protein
- Consider probiotic supplementation

**Nutrigenomics in CKD:**

*Genetic Variants Affecting Diet:*
- APOL1: Disease progression, protein effect
- ACE: Sodium sensitivity
- FTO: Obesity susceptibility
- Vitamin D receptor polymorphisms

*Personalized Recommendations:*
- Sodium sensitivity testing
- Individualized protein targets
- Vitamin D dosing based on genetics
- Future: Precision diets based on genotype

**Artificial Intelligence in Nutrition:**

*Machine Learning Applications:*

| Application              | Description                          |
|--------------------------|--------------------------------------|
| Dietary pattern recognition | Analyze food diaries automatically |
| Risk prediction          | Identify malnutrition risk           |
| Recommendation engines   | Personalized meal planning           |
| Adherence monitoring     | Predict and improve compliance       |

*Digital Health Tools:*
- Smartphone apps for dietary tracking
- Computer vision for food recognition
- Continuous glucose monitoring integration
- Smart pill bottles for binders

**Novel Nutritional Therapies:**

*Ketoanalogue-Supplemented Very Low Protein Diet (sVLPD):*
- 0.3-0.4 g/kg/day protein + keto acids
- May delay dialysis initiation
- Requires specialized dietitian support
- Meta-analyses show mixed outcomes

*Omega-3 Fatty Acids:*
- Anti-inflammatory effects
- May slow IgA nephropathy
- Cardiovascular benefits
- EPA-specific formulations emerging

*Specific Oral Nutritional Supplements:*
- CKD-specific formulations
- Modified electrolyte content
- Concentrated calories
- Protein modules available

**Emerging Research Areas:**

*Time-Restricted Feeding:*
- Circadian biology and kidney function
- Autophagy activation
- Preliminary CKD studies promising

*Ketogenic Diet in CKD:*
- Potential anti-inflammatory effects
- Acid-base considerations
- Limited evidence currently

*Fecal Microbiota Transplantation:*
- Case reports in CKD
- May reduce uremic toxins
- Safety concerns in immunosuppressed

**Implementation Science:**

*Barriers to Dietary Adherence:*
- Food insecurity
- Limited health literacy
- Cultural food preferences
- Cost of recommended foods
- Complexity of restrictions

*Interventions to Improve Adherence:*
- Telehealth nutrition counseling
- Food pharmacy programs
- Culturally tailored education
- Mobile health tools
- Social support interventions

**Future Directions:**

*Research Priorities:*
- Large RCTs of dietary interventions
- Microbiome-targeted therapies
- Personalized nutrition algorithms
- Implementation strategies
- Health equity approaches

*Integrative Approaches:*
- Combine diet, exercise, stress management
- Lifestyle medicine in nephrology
- Patient-centered goal setting
- Shared decision-making`,
      keyTerms: [
        { term: 'metabolomics', definition: 'Study of small molecule metabolites in biological systems' },
        { term: 'dysbiosis', definition: 'Imbalance in microbial communities, particularly gut microbiota' },
        { term: 'SCFA', definition: 'Short-Chain Fatty Acids; beneficial microbial metabolites' },
        { term: 'nutrigenomics', definition: 'Study of how genes and nutrients interact' },
        { term: 'synbiotics', definition: 'Combination of probiotics and prebiotics' },
        { term: 'ketoanalogues', definition: 'Keto acid analogs of amino acids without nitrogen' },
      ],
      clinicalNotes: 'Precision nutrition is emerging as a frontier in nephrology. Microbiome modulation shows promise but requires more research. Implementation science is critical - the best diet is only effective if followed. Address social determinants of health when counseling patients. AI tools will increasingly support dietary management.',
    },
  },

  media: [
    {
      id: 'renal-diet-food-guide',
      type: 'diagram',
      filename: 'renal-diet-food-chart.svg',
      title: 'Renal Diet Food Guide',
      description: 'Visual guide showing foods to choose and foods to limit on a renal diet',
    },
    {
      id: 'potassium-content-chart',
      type: 'diagram',
      filename: 'potassium-food-chart.svg',
      title: 'Potassium Content in Common Foods',
      description: 'Chart showing potassium levels in various fruits and vegetables',
    },
  ],

  citations: [
    {
      id: 'kdigo-nutrition',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline on Nutrition in CKD',
      source: 'Kidney International',
    },
    {
      id: ' renal-diet-evidence',
      type: 'article',
      title: 'Dietary Approaches to Management of Chronic Kidney Disease',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-kidney-ckd-stages', targetType: 'concept', relationship: 'related', label: 'CKD Stages' },
    { targetId: 'chronic-kidney-fluid-management', targetType: 'concept', relationship: 'related', label: 'Fluid Management' },
    { targetId: 'chronic-kidney-medication-adjustments', targetType: 'concept', relationship: 'related', label: 'Medication Adjustments' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['chronic-disease', 'ckd', 'nutrition', 'diet'],
    keywords: ['renal diet', 'kidney diet', 'low sodium', 'potassium restriction', 'phosphorus restriction', 'CKD nutrition'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
