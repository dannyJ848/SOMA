/**
 * Medical Nutrition Therapy - Nutrition Science
 *
 * Comprehensive content on nutrition therapy for medical conditions
 * including diabetes, renal disease, hepatic disease, critical illness,
 * and evidence-based dietary interventions for disease management.
 */

import { EducationalContent } from '../types';

export const medicalNutritionTherapy: EducationalContent = {
  id: 'nutrition-medical-therapy',
  type: 'topic',
  name: 'Medical Nutrition Therapy',
  alternateNames: ['MNT', 'Clinical Nutrition', 'Therapeutic Nutrition'],

  levels: {
    1: {
      level: 1,
      summary: 'Medical nutrition therapy means using food and nutrition to help treat health conditions. Just like medicine helps you feel better, the right foods can help manage diabetes, kidney disease, liver problems, and many other health issues.',
      explanation: `## What Is Medical Nutrition Therapy?

Medical nutrition therapy (MNT) is like using food as medicine. Registered dietitians and doctors use special diets to help treat and manage health conditions.

**Food Can Help:**
- Control blood sugar in diabetes
- Reduce strain on kidneys
- Help the liver heal
- Manage high blood pressure
- Treat digestive problems
- Help you recover from illness

## Nutrition Therapy for Common Conditions

**Diabetes:**
- Eat regular meals at consistent times
- Choose foods that don't spike blood sugar
- Include protein, healthy fats, and fiber
- Limit sugary drinks and sweets
- Work with a dietitian to create a meal plan

**Kidney Disease:**
- Limit sodium (salt) to protect kidneys
- Watch protein intake (depends on kidney function)
- Limit potassium and phosphorus if needed
- Control fluid intake if kidneys aren't making urine
- Follow your dietitian's specific recommendations

**Liver Disease:**
- Avoid alcohol completely
- Eat enough protein to help liver repair
- Limit salt if you have fluid retention
- Eat small, frequent meals
- Include fruits and vegetables

**Heart Disease:**
- Limit sodium to lower blood pressure
- Choose healthy fats (olive oil, nuts, avocados)
- Eat more fiber from fruits, vegetables, and whole grains
- Limit saturated fats from fatty meats and full-fat dairy
- Choose lean proteins

**Digestive Problems:**
- Identify foods that cause symptoms
- Eat smaller, more frequent meals
- Avoid trigger foods
- Keep a food diary
- Stay hydrated

## Working with a Dietitian

A registered dietitian nutritionist (RDN) can:
- Review your medical history and lab results
- Create a personalized eating plan
- Teach you about your condition and nutrition
- Help you make realistic changes
- Monitor your progress and adjust your plan

## Tips for Success

1. **Ask questions** about your diet plan
2. **Be honest** about what you're eating
3. **Make gradual changes** that last
4. **Track your progress** with food diaries or apps
5. **Stay positive** - small changes add up!

Remember: Food is powerful medicine. The right nutrition can help manage your condition and improve your health!`,
      keyTerms: [
        { term: 'medical nutrition therapy', definition: 'Using nutrition and diet to treat and manage medical conditions' },
        { term: 'registered dietitian', definition: 'Health professional who specializes in food and nutrition for health' },
        { term: 'blood sugar', definition: 'The amount of glucose (sugar) in your blood; important for diabetes management' },
        { term: 'sodium', definition: 'A mineral found in salt; too much can raise blood pressure and strain kidneys' },
        { term: 'trigger foods', definition: 'Foods that cause symptoms or make a condition worse' },
      ],
      analogies: [
        'Medical nutrition therapy is like having a personalized roadmap for eating - it guides you to your destination of better health.',
        'Your body is like a machine - the right fuel (food) helps it run smoothly even when parts are worn.',
        'A dietitian is like a translator - they turn complex medical information into practical food choices.',
      ],
      examples: [
        'A person with diabetes learns to count carbohydrates to keep blood sugar stable',
        'Someone with kidney disease learns to limit bananas and potatoes (high potassium)',
        'A heart patient learns to read food labels for sodium content',
        'A person with liver disease avoids alcohol to prevent further damage',
      ],
      patientCounselingPoints: [
        'Ask your doctor for a referral to a registered dietitian if you have a chronic condition',
        'Start with small changes - one meal or one food at a time',
        'Keep a food diary to identify patterns and trigger foods',
        'Don\'t be afraid to ask questions about your diet plan',
        'Remember, one size doesn\'t fit all - your needs are unique',
      ],
    },
    2: {
      level: 2,
      summary: 'Medical nutrition therapy (MNT) is an evidence-based approach to treating certain chronic conditions through nutrition. Registered dietitians provide individualized nutrition assessment, education, and interventions for conditions including diabetes, kidney disease, liver disease, and gastrointestinal disorders.',
      explanation: `## Overview of Medical Nutrition Therapy

**Definition:** Medical nutrition therapy (MNT) is nutrition assessment, education, and counseling provided by a registered dietitian nutritionist (RDN) to manage or treat a medical condition.

**MNT Process:**

\`\`\`
1. Nutrition Assessment:
   - Medical history, physical exam
   - Laboratory data interpretation
   - Dietary intake analysis
   - Client/family factors

2. Nutrition Diagnosis:
   - Problem identification
   - Etiology (root cause)
   - Signs/symptoms (PES statement)

3. Nutrition Intervention:
   - Diet prescription
   - Education and counseling
   - Coordination of care

4. Monitoring and Evaluation:
   - Progress toward goals
   - Outcome measurement
   - Plan adjustment as needed
\`\`\`

## Diabetes MNT

**Goals:**
- Achieve and maintain blood glucose targets
- Achieve lipid and blood pressure goals
- Maintain body weight goals
- Prevent or treat complications
- Address individual nutrition needs

**Carbohydrate Management:**

| Strategy | Description | Best For |
|----------|-------------|----------|
| Carbohydrate counting | Track grams of carb per meal | Type 1 diabetes, flexible dosing |
| Plate method | Half plate non-starchy veg, quarter protein, quarter starch | Type 2 diabetes, simplification |
| Glycemic index | Choose foods with lower GI values | Those interested in food quality |
| Consistent carbs | Same amount of carbs at meals daily | Fixed insulin regimens |

**General Recommendations:**
- Regular meal timing and spacing
- Include protein, fat, and fiber to slow glucose absorption
- Limit sugary beverages
- Individualize based on culture, preferences, and goals

## Renal MNT

**Chronic Kidney Disease (CKD) Stages:**

\`\`\`
Stages 1-2 (early):
  - Focus on blood pressure, proteinuria control
  - DASH diet or Mediterranean pattern
  - Moderate protein restriction (0.8 g/kg/day) may be considered
  - Sodium: <2300 mg/day

Stage 3 (moderate):
  - Protein: 0.6-0.8 g/kg/day
  - Sodium: 2000 mg/day
  - Potassium: Monitor (may need restriction)
  - Phosphorus: Monitor (avoid additives)
  - Fluid: As tolerated

Stage 4 (severe):
  - Protein: 0.6 g/kg/day with ketoanalogues (consider)
  - Sodium: <2000 mg/day
  - Potassium: Restriction usually needed
  - Phosphorus: Restriction needed (800-1000 mg/day)
  - Fluid: May need restriction
  - Prepare for dialysis decision

Stage 5 / Dialysis:
  - Hemodialysis: Higher protein (1.2 g/kg/day)
  - Peritoneal dialysis: Higher protein (1.2-1.3 g/kg/day)
  - Potassium: Individualized
  - Phosphorus: Restriction + binders with meals
  - Fluid: Restriction based on urine output
\`\`\`

**Key Modifications:**
- **Sodium:** Avoid processed foods, cook from scratch, use herbs/spices
- **Potassium:** Limit high-K+ foods if needed (bananas, potatoes, tomatoes, oranges)
- **Phosphorus:** Limit dairy, nuts, colas, foods with phosphate additives
- **Protein:** High-biologic value proteins preferred when restricting

## Hepatic MNT

**Conditions and Approaches:**

\`\`\`
Cirrhosis:
  ├─ Malnutrition common (assess: SGA, hand grip)
  ├─ Protein: 1.2-1.5 g/kg/day (prevent muscle loss)
  ├─ Energy: 30-35 kcal/kg/day (dry weight)
  ├─ Sodium: Restrict if ascites/edema (<2000 mg/day)
  ├─ Fluid: Restrict if hyponatremia (<1.5 L/day if Na <130)
  ├─ Vitamin/mineral deficiencies common:
  │  ├─ B-vitamins (folate, thiamine)
  │  ├─ Vitamin D
  │  ├─ Zinc
  │  └─ Fat-soluble vitamins (A, D, E, K)
  └─ Special considerations:
     ├─ Small, frequent meals
     ├─ Evening snack (prevent overnight catabolism)
     └─ Monitor for hepatic encephalopathy

Non-alcoholic fatty liver disease (NAFLD):
  ├─ Weight loss: 5-10% improves steatosis
  ├─ Mediterranean diet pattern
  ├─ Limit fructose (especially sugary beverages)
  ├─ Limit saturated fat
  ├─ Coffee: May be protective
  └─ Omega-3: May help reduce liver fat

Hepatic encephalopathy:
  ├─ Protein restriction not routinely recommended
  ├─ Focus on vegetable/dairy proteins over meat
  ├─ Lactulose/rifaximin as prescribed
  ├─ Correct precipitating factors
  └─ Monitor protein tolerance
\`\`\`

## Cardiovascular MNT

**Heart-Healthy Eating:**

\`\`\'
Therapeutic Lifestyle Changes (TLC) diet:
  ├─ Saturated fat: <7% of calories
  ├─ Trans fat: As little as possible
  ├─ Cholesterol: <200 mg/day
  ├─ Sodium: <2300 mg/day
  ├─ Total fat: 25-35% of calories
  ├─ Soluble fiber: 10-25 g/day
  └─ Plant stanols/sterols: 2 g/day (optional)

DASH diet (for hypertension):
  ├─ Fruits and vegetables: 8-10 servings/day
  ├─ Whole grains: 6-8 servings/day
  ├─ Dairy (low-fat): 2-3 servings/day
  ├─ Meat/poultry/fish: 6 oz or less/day
  ├─ Nuts/seeds/legumes: 4-5 servings/week
  ├─ Sodium: 1500-2300 mg/day
  └─ Proven to lower blood pressure

Mediterranean diet pattern:
  ├─ Emphasis on plant foods
  ├─ Olive oil as primary fat
  ├─ Moderate wine consumption (if appropriate)
  ├─ Fish regularly
  ├─ Limited red meat
  ├─ Strong evidence for CVD prevention
  └─ PREDIMED trial showed 30% CVD risk reduction
\`\`\`

## Gastrointestinal MNT

**Common Conditions:**

\`\`\`
GERD (gastroesophageal reflux):
  ├─ Avoid trigger foods (spicy, acidic, fatty, mint, chocolate)
  ├─ Eat smaller, more frequent meals
  ├─ Avoid lying down after eating (wait 3 hours)
  ├─ Limit caffeine, alcohol
  ├─ Weight loss if overweight
  └─ Elevate head of bed

IBS (irritable bowel syndrome):
  ├─ Identify trigger foods (keep food-symptom diary)
  ├─ Regular meal pattern
  ├─ Adequate fiber (adjust based on symptoms)
  ├─ FODMAP diet (low-FODMAP for 2-6 weeks if needed)
  ├─ Probiotics may help
  └─ Stress management important

Inflammatory bowel disease (Crohn's, ulcerative colitis):
  ├─ Active disease: Low residue, possibly enteral nutrition
  ├─ Remission: Regular diet as tolerated
  ├─ Identify and avoid personal triggers
  ├─ Small, frequent meals
  ├─ Hydration important
  ├─ Monitor micronutrient status (B12, iron, fat-soluble vitamins)
  └─ Surgery may increase nutritional risks
\`\`\``,
      keyTerms: [
        { term: 'medical nutrition therapy', definition: 'Evidence-based nutrition therapy provided by a registered dietitian to treat or manage medical conditions' },
        { term: 'carbohydrate counting', definition: 'Method of meal planning for diabetes that tracks grams of carbohydrate' },
        { term: 'glycemic index', definition: 'Scale ranking how quickly carbohydrate-containing foods raise blood glucose' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; evidence-based eating pattern to lower blood pressure' },
        { term: 'FODMAP', definition: 'Fermentable oligosaccharides, disaccharides, monosaccharides, and polyols; carbs that can cause GI symptoms' },
        { term: 'ascites', definition: 'Fluid accumulation in the abdominal cavity; complication of cirrhosis requiring sodium restriction' },
      ],
      analogies: [
        'MNT is like having a personalized prescription for food - it\'s tailored to your specific medical condition and needs.',
        'Carbohydrate counting is like keeping track of how many passengers (carbs) are getting on each bus (meal).',
        'The FODMAP diet is like detective work - you eliminate suspects (foods) and then reintroduce them to find the culprit.',
      ],
      examples: [
        'Type 1 diabetic using carb counting calculates insulin dose based on 1 unit per 15 g of carbohydrate',
        'CKD stage 4 patient limits potassium by avoiding bananas, potatoes, tomatoes, and salt substitutes',
        'Person with cirrhosis and ascites follows 2 g sodium diet to reduce fluid retention',
        'IBS patient follows low-FODMAP diet for 6 weeks, then systematically reintroduces foods',
      ],
      patientCounselingPoints: [
        'Work with a registered dietitian for personalized nutrition therapy',
        'Make gradual changes rather than trying to change everything at once',
        'Keep a food diary to track patterns and identify triggers',
        'Ask questions about your diet plan - understanding helps you stick with it',
        'Be patient - finding the right nutrition approach may take time',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical nutrition therapy applies pathophysiology and biochemistry to develop targeted dietary interventions for disease management. Evidence-based protocols exist for diabetes, renal disease, hepatic disorders, cardiovascular disease, and gastrointestinal conditions with specific macronutrient and micronutrient modifications.',
      explanation: `## Diabetes Pathophysiology and Nutrition

**Type 2 Diabetes:**

\`\`\`
Pathophysiologic defects:
  ├─ Insulin resistance: ↓Peripheral glucose uptake
  ├─ Hepatic glucose production: Inappropriately increased
  ├─ Beta-cell dysfunction: ↓Insulin secretion
  ├─ Incretin deficiency/resistance
  └─ Increased renal glucose reabsorption

Nutrition interventions targeting pathophysiology:
  ├─ Weight loss (5-10%): Improves insulin sensitivity
  ├─ Carbohydrate quality:
  │  ├─ Whole grains vs. refined: ↓Glycemic response
  │  ├─ Fiber: Slows glucose absorption, improves insulin sensitivity
  │  └─ Avoid concentrated sweets: Prevents glucose spikes
  ├─ Carbohydrate timing:
  │  ├─ Consistent distribution: Improves glycemic control
  │  └─ Avoid skipping meals: Prevents overeating later
  ├─ Fat quality:
  │  ├─ MUFA, PUFA: Improve insulin sensitivity
  │  └─ Saturated fat, trans fat: Worsen insulin resistance
  └─ Protein: Moderate intake (20-25% calories) for satiety

Glycemic targets (ADA):
  ├─ Fasting/preprandial: 80-130 mg/dL
  ├─ 2-hour postprandial: <180 mg/dL
  ├─ HbA1c: <7.0% (individualized)
  └─ Hypoglycemia: <70 mg/dL

Medical nutrition therapy impact:
  ├─ HbA1c reduction: 1-2% (individualized)
  ├─ Weight loss: 5-7% with intensive MNT
  └─ Medication reduction: Possible with lifestyle changes
\`\`\`

**Type 1 Diabetes:**

\`\`\`
Physiologic insulin replacement:
  ├─ Basal-bolus regimen mimics normal secretion
  ├─ Basal insulin: Controls hepatic glucose production
  ├─ Bolus insulin: Covers carbohydrate intake
  └─ Insulin-to-carb ratio: Individualized (usually 1:10 to 1:20)

Carbohydrate counting:
  ├─ Advanced method: Grams of carb calculated
  ├─ Insulin dose = (Total carbs / Carb ratio) + Correction dose
  ├─ Fiber: Subtract if >5 g per serving (insoluble)
  └─ Sugar alcohols: Partially subtract (half of grams)

Continuous glucose monitoring (CGM) insights:
  ├─ Real-time glucose trends
  ├─ Food individual response patterns
  ├─ Postprandial peak timing
  └─ Facilitates personalized nutrition

Exercise considerations:
  ├─ Insulin reduction: Variable based on intensity/duration
  ├─ Carbohydrate: May need 15-30 g for moderate activity
  ├─ Hypoglycemia risk: During and after exercise
  └─ CGM helpful: Predicts trends
\`\`\`

## Advanced Renal Nutrition

**Pathophysiology-Based Interventions:**

\`\`\`
Protein intake considerations:
  ├─ Hyperfiltration injury:
  │  ├─ Increased glomerular pressure from protein intake
  │  └─ Progressive glomerular damage
  ├─ Protein restriction: Reduces hyperfiltration
  │  ├─ 0.8 g/kg/day: Standard
  │  ├─ 0.6 g/kg/day: May slow CKD progression (stages 3-4)
  │  └─ Very low protein (0.3-0.4 g/kg): With ketoanalogues (controversial)
  └─ Risk: Malnutrition if over-restricted

Sodium and volume control:
  ├─ Sodium retention:
  │  ├─ Decreased renal excretion
  │  ├─ Extracellular fluid expansion
  │  └─ Hypertension, edema, ascites
  ├─ Sodium restriction: <2000 mg/day (stage 3+)
  └─ Diuretics: Often needed with diet

Potassium homeostasis:
  ├─ Excretion: Primarily renal (90%)
  ├─ Hyperkalemia risk factors:
  │  ├─ Decreased GFR
  │  ├─ RAAS inhibitors (ACEi, ARB)
  │  └─ Potassium-based salt substitutes
  ├─ Dietary restriction when:
  │  ├─ Serum K+ >5.0 mEq/L
  │  ├─ GFR <30 mL/min
  │  └─ On RAAS inhibitors
  └─ High-potassium foods to limit:
     ├─ Bananas, melon, avocado
     ├─ Potatoes, sweet potatoes
     ├─ Tomatoes, tomato products
     └─ Dried fruits, nuts

Phosphorus control:
  ├─ Excretion: Primarily renal
  ├─ Hyperphosphatemia effects:
  │  ├─ Secondary hyperparathyroidism
  │  ├─ Vascular calcification
  │  └─ Increased CVD mortality
  ├─ Dietary phosphorus sources:
  │  ├─ Natural: Protein foods (better absorbed)
  │  └─ Additives: Highly bioavailable (avoid)
  └─ Phosphate binders with meals if needed

Acid-base considerations:
  ├─ Metabolic acidosis in CKD:
  │  ├─ Inability to excrete acid load
  │  └─ Promotes catabolism, bone loss
  ├─ Bicarbonate supplementation: Target >22 mEq/L
  └─ Plant-based foods: May reduce acid load
\`\`\`

## Hepatic Disorders

**Advanced Cirrhosis Management:**

\`\`\`
Malnutrition in cirrhosis:
  ├─ Prevalence: 65-90% in decompensated cirrhosis
  ├─ Etiology: Multifactorial
  │  ├─ Reduced intake (anorexia, early satiety, taste changes)
  │  ├─ Malabsorption (pancreatic insufficiency, cholestasis)
  │  ├─ Altered metabolism (hypermetabolism in some)
  │  └─ Increased losses (ascites, protein-losing enteropathy)
  ├─ Consequences:
  │  ├─ Muscle loss (sarcopenia)
  │  ├─ Worse outcomes
  │  ├─ Increased infection risk
  │  └─ Poor transplant candidacy
  └─ Assessment: SGA, hand grip strength, CT body composition

Nutritional management:
  ├─ Energy: 35-40 kcal/kg/day (dry weight)
  ├─ Protein: 1.2-1.5 g/kg/day (dry weight)
  │  ├─ Prevents catabolism
  │  ├─ Improves nitrogen balance
  │  └─ Evening snack: Prevents overnight fast (catabolic period)
  ├─ Protein source:
  │  ├─ Casein, vegetable proteins may be better tolerated
  │  ├─ Soy, dairy: Preferred if encephalopathy present
  │  └─ Monitor tolerance
  ├─ Micronutrients:
  │  ├─ Vitamin A: Check before supplement (potential hepatotoxicity)
  │  ├─ Vitamin D: Deficiency common
  │  ├─ Vitamin E: May be beneficial (NASH)
  │  ├─ B-complex: Often deficient (especially thiamine in alcohol)
  │  ├─ Zinc: Supplement if deficient
  │  └─ Fat-soluble vitamins: Malabsorption possible
  └─ Complications:
     ├─ Ascites: Sodium restriction <2000 mg/day
     ├─ Hepatic encephalopathy: Protein NOT restricted (unless episodic)
     └─ Hepatocellular carcinoma: Adequate nutrition for treatment tolerance
\`\`\`

## Critical Care Nutrition

**ICU Nutrition Support:**

\`\`\`
Metabolic response to critical illness:
  ├─ Hypermetabolism: ↑Energy expenditure (not always)
  ├─ Catabolism: ↑Protein breakdown
  ├─ Insulin resistance: Stress hyperglycemia
  ├─ Capillary leak: Edema, third-spacing
  └─ Immunoparalysis: Altered immune response

Nutrition requirements:
  ├─ Energy:
  │  ├─ Indirect calorimetry: Gold standard if available
  │  ├─ Predictive equations: 25-30 kcal/kg actual body weight
  │  ├─ Obese: 11-14 kcal/kg ideal body weight (permissive underfeeding)
  │  └─ Avoid overfeeding: Complications worse than underfeeding
  ├─ Protein: Higher needs
  │  ├─ 1.2-2.0 g/kg/day (depending on severity)
  │  ├─ Obese: 2.0-2.5 g/kg ideal body weight
  │  └─ Essential for wound healing, immune function
  └─ Micronutrients:
     ├─ Vitamin C, zinc: Wound healing
     ├─ Thiamine: Before dextrose in at-risk patients
     └─ Vitamin D: Check levels

Route of nutrition support:
  ├─ EN (enteral nutrition): Preferred if GI tract functional
  │  ├─ Maintains gut barrier
  │  ├─ Reduces infectious complications
  │  ├─ Start within 24-48 hours of admission
  │  └─ Monitor tolerance (residuals, diarrhea)
  ├─ PN (parenteral nutrition):
  │  ├─ Indicated when EN contraindicated or insufficient
  │  ├─ Risks: Infection, liver dysfunction, refeeding
  │  └─ More expensive
  └─ Early EN: Associated with better outcomes

Special populations:
  ├─ ARDS: Omega-3 enriched EN (controversial benefit)
  ├─ Sepsis: Low-dose EN initially, avoid overfeeding
  ├─ Pancreatitis: EN preferred distal to ligament of Treitz
  └─ Trauma/burns: Higher protein needs (2-3 g/kg/day)

Refeeding syndrome:
  ├─ At-risk patients: Malnourished, minimal intake >5 days
  ├─ Pathophysiology: Rapid carbohydrate refeeding → insulin surge →
  │  ├─ Phosphate shift intracellular → hypophosphatemia
  │  ├─ Potassium shift → hypokalemia
  │  ├─ Magnesium shift → hypomagnesemia
  │  ├─ Thiamine depletion → Wernicke, heart failure
  │  └─ Fluid retention → heart failure
  ├─ Prevention:
  │  ├─ Start at 25% of energy needs
  │  ├─ Advance slowly over 4-7 days
  │  ├─ Electrolyte repletion before starting
  │  ├─ Thiamine replacement before dextrose
  │  └─ Monitor electrolytes q6-12h initially
  └─ Risk: Fatal if not recognized
\`\`\``,
      keyTerms: [
        { term: 'incretin', definition: 'Gut hormones that enhance insulin secretion; include GLP-1 and GIP' },
        { term: 'insulin-to-carb ratio', definition: 'Amount of insulin (in units) needed to cover a specified amount of carbohydrate (grams)' },
        { term: 'hyperfiltration', definition: 'Increased glomerular filtration rate; damages nephrons over time in CKD' },
        { term: 'secondary hyperparathyroidism', definition: 'Excess PTH production from low calcium, high phosphorus, or low vitamin D in CKD' },
        { term: 'enteral nutrition', definition: 'Delivery of nutrients directly to the GI tract via tube feeding' },
        { term: 'refeeding syndrome', definition: 'Dangerous shift of fluids and electrolytes with nutrition reinitiation in malnourished patients' },
        { term: 'permissive underfeeding', definition: 'Providing fewer calories than estimated needs in critically ill, obese patients' },
      ],
      analogies: [
        'Carbohydrate counting in type 1 diabetes is like matching a key to a lock - the right amount of insulin unlocks glucose control.',
        'The kidney in CKD is like a worn-out filter - protein restriction reduces the workload and extends its function.',
        'Refeeding syndrome is like starting an engine that\'s been sitting for years - it can seize up if you don\'t prepare it properly.',
      ],
      examples: [
        'T2DM patient reduces HbA1c from 8.5% to 7.0% with MNT and 7% weight loss',
        'CKD stage 4 patient on 0.6 g/kg protein diet shows slower GFR decline',
        'Cirrhotic with albumin 2.0 g/dL improves to 3.5 g/dL with 1.5 g/kg protein + evening snack',
        'ICU patient develops hypophosphatemia on day 2 of tube feeding without electrolyte repletion',
      ],
      clinicalNotes: 'Screen all malnourished patients for refeeding risk before initiating nutrition support. Check thiamine levels and replace before giving dextrose in at-risk patients. In CKD stages 3-5, protein should NOT be over-restricted due to malnutrition risk. In cirrhosis, maintain adequate protein (1.2-1.5 g/kg) unless encephalopathy severe.',
    },
    4: {
      level: 4,
      summary: 'Advanced medical nutrition therapy integrates pathophysiology, evidence-based practice, and specialized nutrition support for complex conditions. Clinical applications include management of diabetes complications, end-stage renal disease, liver transplantation, and critical illness with nutrition support.',
      explanation: `## Diabetes Complications and Nutrition

**Diabetic Kidney Disease:**

\`\`\`
Pathophysiology:
  ├─ Hyperglycemia → glomerular hyperfiltration → damage
  ├─ Microvascular damage → albuminuria
  ├─ Progressive CKD: Stages 1-5
  └─ Cardiovascular disease: Primary cause of mortality

Nutritional management:
  ├─ Glycemic control:
  │  ├─ Primary prevention strategy
  │  └─ Slows progression to ESRD
  ├─ Blood pressure control:
  │  ├─ DASH diet pattern
  │  ├─ Sodium: <1500 mg/day if possible
  │  └─ Weight loss if overweight
  ├─ Protein intake:
  │  ├─ 0.8-1.0 g/kg/day once microalbuminuria present
  │  ├─ Avoid high-protein diets (>20% calories)
  │  └─ Consider renal-specific formulas if needed
  ├─ Sodium:
  │  ├─ <2000 mg/day recommended
  │  ├─ Reduces proteinuria
  │  └─ Lowers blood pressure
  ├─ Potassium: Monitor and restrict if needed
  └─ Phosphorus: Restrict if GFR <30 mL/min

Diabetes with CKD challenges:
  ├─ Competing priorities:
  │  ├─ Diabetes: Consistent carbs
  │  └─ CKD: Potassium/phosphorus restriction
  ├─ Many carb sources are high in K+ (fruits, potatoes)
  ├─ Medical nutrition therapy essential
  └─ Individualization key

SGLT2 inhibitors:
  ├─ Empagliflozin, canagliflozin, dapagliflozin
  ├─ Renal benefits: Reduced CKD progression
  ├─ Cardiovascular benefits: Reduced HF, CV death
  └─ Nutrition implications:
     ├─ DKA risk (euglycemic DKA possible)
     ├─ Slightly reduced calorie intake (glucosuria)
     └─ Ensure adequate hydration
\`\`\`

**Diabetic Neuropathy:**

\`\`\`
Peripheral neuropathy:
  ├─ Pathophysiology: Microvascular damage, sorbitol accumulation
  ├─ Glycemic control: Primary prevention/treatment
  └─ Nutritional considerations:
     ├─ Benfotiamine (fat-soluble B1): Some evidence
     ├─ Alpha-lipoic acid: May improve symptoms
     ├─ Vitamin B12: Check status (metformin can cause deficiency)
     └─ Avoid alcohol: Worsens neuropathy

Autonomic neuropathy:
  ├─ Gastroparesis:
  │  ├─ Delayed gastric emptying
  │  └─ Nutrition strategies:
  │     ├─ Small, frequent meals (6-8/day)
  │     ├─ Liquids: Better tolerated than solids
  │     ├─ Low-fat, low-fiber during exacerbations
  │     ├─ Liquids with meals may worsen symptoms
  │     ├─ Prokinetic agents
  │     └─ Severe cases: Enteral nutrition may be needed
  └─ Enteric neuropathy:
     ├─ Diarrhea:
     │  ├─ Exclude lactose initially
     │  ├─ Soluble fiber (psyllium)
     │  ├─ Gluten trial (if celiac possible)
     │  └─ Cholestyramine (bile acid malabsorption)
     └─ Constipation:
        ├─ Fiber, fluids
        └─ Osmotic laxatives
\`\`\`

## Advanced Renal Replacement Therapy

**Dialysis-Specific Nutrition:**

\`\`\`
Hemodialysis (3x/week):
  ├─ Protein: 1.2-1.3 g/kg/day (high needs to replace losses)
  ├─ Energy: 30-35 kcal/kg/day (prevent catabolism)
  ├─ Potassium: 2-3 g/day (individualized)
  ├─ Phosphorus: 800-1000 mg/day + binders with meals
  ├─ Sodium: 1-2 g/day (control thirst, BP, interdialytic weight gain)
  ├─ Fluid: 1 L/day + urine output (control interdialytic gain)
  ├─ Water-soluble vitamins: Supplement (lost in dialysate)
  └─ Anemia management: Adequate protein, EPO, iron

Peritoneal dialysis (daily):
  ├─ Protein: 1.2-1.3 g/kg/day (higher losses)
  ├─ Energy: 30-35 kcal/kg/day + dialysate calories absorbed
  │  ├─ Consider dextrose in dialysate (200-500 kcal/day)
  │  └─ May need to reduce dietary calories
  ├─ Potassium: Usually less restriction (dialyzed daily)
  ├─ Phosphorus: Restriction + binders
  ├─ Sodium: Individualized (often less restriction than HD)
  └─ Lipid abnormalities: Common (dextrose absorption)

Transplantation:
  ├─ Pre-transplant:
  │  ├─ Optimize nutritional status
  │  ├─ Correct deficiencies
  │  └─ Maintain adequate protein
  ├─ Post-transplant:
  │  ├─ Protein: 1.2-1.5 g/kg/day (catabolic state)
  │  ├─ Energy: 30-35 kcal/kg/day
  │  ├─ New challenges:
  │  │  ├─ Medication effects:
  │  │  │  ├─ Steroids: Hyperglycemia, appetite increase
  │  │  │  ├─ Tacrolismus: Neurotoxicity, tremor
  │  │  │  ├─ Cyclosporine: Gingival hyperplasia
  │  │  │  └─ Sirolimus: Dyslipidemia
  │  │  ├- Weight gain common
  │  │  ├─ Hyperlipidemia
  │  │  ├─ Hyperglycemia (new-onset diabetes)
  │  │  └─ Hypertension
  │  └─ MNT: Address complications, maintain renal function
  └─ Long-term: CVD risk remains primary concern
\`\`\`

## Hepatic Transplantation Nutrition

**Pre-Transplant:**

\`\`\`
End-stage liver disease:
  ├─ Malnutrition: Nearly universal in decompensated cirrhosis
  ├─ Assess: SGA, hand grip, CT body composition
  ├─ Optimize:
  │  ├─ Protein: 1.2-1.5 g/kg/day
  │  ├─ Energy: 35-40 kcal/kg/day (dry weight)
  │  ├─ Evening snack: Critical
  │  └─ Correct micronutrient deficiencies
  └─ Candidacy: Nutritional status affects transplant eligibility

Specific deficiencies common:
  ├─ Vitamin D: Deficiency nearly universal
  ├─ Vitamin A: Elevated in liver disease (don't supplement)
  ├─ Vitamin E: Often low (may supplement in NASH)
  ├─ Vitamin K: Malabsorption, coagulopathy
  ├─ B-complex: Especially thiamine (alcohol), folate
  ├─ Zinc: Common deficiency
  ├─ Selenium: Low in advanced disease
  └─ Carnitine: Low in cirrhosis

Encephalopathy management:
  ├─ Protein NOT restricted routinely
  ├─ Focus on:
  │  ├─ Vegetable and dairy proteins
  │  ├─ Correct precipitating factors:
  │  │  ├─ Constipation
  │  │  ├─ Infection
  │  │  ├─ GI bleeding
  │  │  ├─ Dehydration
  │  │  ├─ Electrolyte abnormalities
  │  │  └─ Medications
  │  ├─ Lactulose: Titrate to 2-3 soft stools/day
  │  └─ Rifaximin: Add if lactulose insufficient
  └─ Branched-chain amino acids: May help in selected patients
\`\`\`

**Post-Transplant:**

\`\`\`
Immediate post-op:
  ├─ EN preferred (if functional)
  ├─ Early enteral feeding: Within 24 hours
  ├─ PN if EN contraindicated:
  │  ├─ Monitor for refeeding
  │  └─ Avoid overfeeding
  ├─ Protein: 1.5-2.0 g/kg/day (wound healing, catabolism)
  ├─ Energy: 30-35 kcal/kg/day (actual body weight)
  ├─ Complications:
  │  ├─ Hyperglycemia: Steroid-induced, manage
  │  ├─ Fluid shifts: Third-spacing common
  │  ├─ Electrolyte abnormalities
  │  └─ Delirium: Common, multifactorial
  └─ Gradual transition to oral diet

Long-term post-transplant:
  ├─ Weight management:
  │  ├─ Weight gain common (steroids, improved appetite)
  │  └─ Obesity risk: Affects graft survival
  ├─ Metabolic complications:
  │  ├─ New-onset diabetes after transplant (NODAT)
  │  ├─ Hypertension
  │  ├─ Dyslipidemia
  │  └─ Cardiovascular disease (primary mortality)
  ├─ Medication side effects:
  │  ├─ Steroids: All above
  │  ├─ Tacrolismus: Tremor, neurotoxicity
  │  ├─ Cyclosporine: Gingival hyperplasia
  │  └─ Sirolimus: Dyslipidemia, impaired wound healing
  └─ Long-term goals:
     ├─ Maintain healthy weight
     ├─ Mediterranean diet pattern
     ├─ Regular physical activity
     └─ CVD risk reduction
\`\`\``,
      keyTerms: [
        { term: 'DKA', definition: 'Diabetic ketoacidosis; life-threatening complication of diabetes characterized by hyperglycemia, ketosis, and acidosis' },
        { term: 'gastroparesis', definition: 'Delayed gastric emptying from autonomic neuropathy; common complication of diabetes' },
        { term: 'euglycemic DKA', definition: 'DKA with normal or mildly elevated glucose; can occur with SGLT2 inhibitors' },
        { term: 'interdialytic weight gain', definition: 'Weight gained between dialysis sessions from fluid and sodium intake' },
        { term: 'NODAT', definition: 'New-onset diabetes after transplantation; common complication of immunosuppressive therapy' },
        { term: 'SGA', definition: 'Subjective Global Assessment; bedside nutritional assessment tool' },
      ],
      analogies: [
        'Diabetes with CKD is like walking a tightrope - you need to balance blood sugar control against kidney protection.',
        'Post-transplant nutrition is like rebuilding a house after a storm - you need lots of materials (protein) and careful planning.',
        'Gastroparesis turns eating into a traffic jam - food backs up because the exit is closed too slow.',
      ],
      examples: [
        'Patient on SGLT2 inhibitor develops euglycemic DKA with glucose 150 mg/dL after fasting',
        'Diabetic with gastroparesis requires liquid nutrition during exacerbations',
        'Peritoneal dialysis patient gains weight from dextrose absorption in dialysate',
        'Liver transplant patient develops NODAT 3 months post-transplant from steroids',
      ],
      clinicalNotes: 'SGLT2 inhibitors can cause euglycemic DKA even with normal glucose; hold during fasting, surgery, or acute illness. In diabetic gastroparesis, liquid meals are often better tolerated. Peritoneal dialysis patients may absorb 300-500 calories daily from dialysate dextrose. Post-transplant, screen for NODAT regularly - up to 30% develop diabetes.',
    },
    5: {
      level: 5,
      summary: 'Expert-level medical nutrition therapy integrates cutting-edge research on nutrition-gene interactions, microbiome modulation, and specialized protocols for complex conditions including immunonutrition, mitochondrial disorders, and personalized nutrition approaches based on metabolomics and biomarkers.',
      explanation: `## Immunonutrition and Critical Care

**Modulating the Immune Response:**

\`\`\`
Immune-nutrient interactions:
  ├─ Glutamine:
  │  ├─ Conditionally essential in critical illness
  │  ├─ Fuel for immune cells, enterocytes
  │  ├─ Evidence: Mixed for benefit in critical illness
  │  └─ Dose: 0.3-0.5 g/kg/day if supplemented
  ├─ Omega-3 fatty acids:
  │  ├─ Anti-inflammatory (resolvins, protectins)
  │  ├─ Modulate membrane fluidity
  │  ├─ Evidence: Some benefit in ARDS, post-op
  │  └─ Dose: 1.5-2 g EPA + DHA/day
  ├─ Arginine:
  │  ├─ Precursor to nitric oxide
  │  ├─ Wound healing, immune function
  │  ├─ Controversial in sepsis (may be harmful)
  │  └─ Contraindicated in septic shock
  ├─ Nucleotides:
  │  ├─ RNA/DNA synthesis
  │  ├─ Rapidly dividing cells
  │  └─ Part of immune-enhancing formulas
  └─ Antioxidants:
     ├─ Selenium, vitamin C, vitamin E
     ├─ Critical illness: Depleted rapidly
     └─ Replacement may be beneficial

Immunonutrition formulas:
  ├─ Contain: Arginine, omega-3, nucleotides, antioxidants
  ├─ Evidence:
  │  ├─ Surgical patients: Reduced infections, LOS
  │  ├─ Critical illness: Mixed/neutral
  │  └─ Sepsis: Potential harm (arginine)
  └─ Consider in: Elective surgery, trauma, burns

Pharmaconutrition:
  ├─ Individual nutrients at pharmacologic doses
  ├─ IV glutamine: Mixed evidence in critical illness
  ├─ IV omega-3: Some benefit in ARDS
  └─ Selenium: Critical illness replacement

Gut microbiome in critical illness:
  ├─ Dysbiosis common
  ├─ Pathogen overgrowth: VAP, C. difficile
  ├─ Barrier dysfunction: Bacterial translocation
  ├─ Probiotics: Mixed evidence, safety concerns
  └─ FMT: Emerging for C. difficile, ICU dysbiosis
\`\`\`

## Inborn Errors of Metabolism

**Nutritional Management Strategies:**

\`\`\`
General principles:
  ├─ Reduce substrate accumulation
  ├─ Prevent catabolism
  ├─ Provide alternative energy sources
  ├─ Correct deficiencies
  └─ Monitor growth, development

Specific disorders:
  ├─ Phenylketonuria (PKU):
  │  ├─ Deficiency: Phenylalanine hydroxylase
  │  ├─ Treatment: Low-phenylalanine diet
  │  │  ├─ Medical formula: Primary protein source
  │  │  ├─ Natural protein: Strictly limited
  │  │  └─ Avoid: High-protein foods, aspartame
  │  └─ Goal: Maintain blood PHE 120-360 μmol/L
  │
  ├─ Maple syrup urine disease (MSUD):
  │  ├─ Deficiency: Branched-chain ketoacid dehydrogenase
  │  ├─ Treatment: Low BCAA diet
  │  │  ├─ Medical formula: BCAA-free
  │  │  └─ Restrict: Leucine, isoleucine, valine
  │  └─ Monitor: Plasma amino acids, growth
  │
  ├─ Urea cycle disorders:
  │  ├─ Defect: Ammonia detoxification
  │  ├─ Treatment: Low-protein diet + nitrogen scavengers
  │  │  ├─ Sodium benzoate/phenylacetate
  │  │  ├─ Arginine or citrulline (depends on defect)
  │  │  └─ Avoid: Catabolism, high-protein loads
  │  └─ Emergency: Hyperammonemia management
  │
  ├─ Glycogen storage diseases:
  │  ├─ Type I (von Gierke):
  │  │  ├─ Defect: G6Pase (gluconeogenesis)
  │  │  ├─ Treatment: Continuous glucose source
  │  │  │  ├─ Cornstarch: Slow-release glucose
  │  │  │  ├─ Nocturnal feeds: Prevent hypoglycemia
  │  │  │  └─ Avoid: Fructose, galactose
  │  │  └─ Monitor: Blood glucose, lactate, lipids
  │  │
  │  └─ Type II (Pompe):
  │     ├─ Defect: Acid alpha-glucosidase (lysosomal)
  │     ├─ Treatment: ERT (enzyme replacement therapy)
  │     └─ Nutrition: Supportive, prevent catabolism
  │
  └─ Mitochondrial disorders:
     ├─ Heterogeneous group
     ├─ Treatment: Supportive nutrition
     │  ├─ Avoid: Catabolism, fasting
     │  ├─ Provide: Alternative fuels (ketones)
     │  ├─ Supplements: CoQ10, carnitine, thiamine, riboflavin
     │  └─ Antioxidants: Vitamin C, E, alpha-lipoic acid
     └─ Mitochondrial cocktail: Individualized
\`\`\`

## Precision Nutrition Applications

**Metabolomics-Guided Therapy:**

\`\`\`
Personalized nutrition approaches:
  ├─ Metabolomic profiling:
  │  ├─ Identifies metabolic signatures
  │  ├─ Predicts disease risk
  │  ├─ Guides dietary interventions
  │  └─ Monitors response to therapy
  ├─ Predictive biomarkers:
  │  ├─ TMAO: CVD risk, personalized diet recommendations
  │  ├─ Branched-chain amino acids: Diabetes risk
  │  ├─ Lipidomics: Personalized fat recommendations
  │  └─ Microbiome metabolites: Personalized pre/probiotics
  └─ AI-driven recommendations:
     ├─ Integrate multi-omic data
     ├─ Machine learning prediction
     ├─ Real-time adaptation
     └─ Clinical decision support

Nutrigenomics in practice:
  ├─ APOE genotyping:
  │  ├- ε4: Stronger response to saturated fat restriction
  │  ├- ε2: May benefit from higher fat intake
  │  └- Personalized fat quality recommendations
  ├─ TCF7L2 diabetes risk:
  │  ├- High-risk genotype
  │  ├- Stronger glycemic response to carbs
  │  └- Lower glycemic diet emphasis
  ├─ FADS variants:
  │  ├- Poor omega-3 converters
  │  ├- Require preformed DHA/EPA
  │  └- May benefit from algal supplements
  └─ MTHFR variants:
     ├- Reduced folate metabolism
     ├- Active folate (5-MTHF) preferred
     ├- B12 interaction important
     └- Homocysteine management

Microbiome-based interventions:
  ├─ Dysbiosis correction:
  │  ├─ Prebiotics: Feed beneficial bacteria
  │  ├─ Probiotics: Introduce beneficial strains
  │  ├─ Synbiotics: Combined approach
  │  └─ FMT: Fecal microbiota transplant
  ├─ Targeted therapies:
  │  ├- C. difficile: FMT highly effective
  │  ├- IBS: Specific probiotic strains
  │  ├- Metabolic syndrome: Akkermansia, Prevotella
  │  └- Immune modulation: Bifidobacterium, Lactobacillus
  └─ Personalized nutrition:
     ├- Predict individual glycemic response
     ├- Design personalized diets
     ├- Monitor microbiome changes
     └- Adjust based on response
\`\`\`

## Emerging Therapies

**Ketogenic Therapies:**

\`\`\`
Established uses:
  ├─ Epilepsy (refractory):
  │  ├─ Mechanism: Altered neurotransmission, energy metabolism
  │  ├─ Efficacy: >50% seizure reduction in many
  │  ├─ Classic 4:1 ratio: 90% fat
  │  ├- Modified Atkins: More liberal
  │  └─ Long-term management: Monitoring essential
  ├─ Glucose transporter type 1 deficiency:
  │  ├─ Mechanism: Ketones provide alternative fuel
  │  └─ Standard of care
  └─ Pyruvate dehydrogenase deficiency:
     ├- Bypass metabolic block
     └- Improves outcomes

Emerging applications:
  ├─ Neurodegenerative diseases:
  │  ├─ Alzheimer disease: "Type 3 diabetes" hypothesis
  │  ├─ Parkinson disease: Mitochondrial support
  │  ├─ ALS: Energy metabolism support
  │  └─ Huntington disease: Neuroprotection
  ├─ Cancer (adjunct):
  │  ├─ Warburg effect: Cancer reliant on glucose
  │  ├─ Ketogenic: May exploit metabolic vulnerability
  │  ├─ Quality of life: May improve
  │  └─ Evidence: Early, ongoing trials
  ├─ Metabolic syndrome:
  │  ├─ Insulin sensitivity improvement
  │  ├─ Weight loss
  │  ├─ Blood pressure reduction
  │  └─ Lipid improvement
  └─ PCOS:
     ├- Insulin sensitization
     ├- Testosterone reduction
     ├- Restoration of ovulation
     └- Fertility improvement

Ketogenic implementation:
  ├─ Induction: Achieve nutritional ketosis (>0.5 mmol/L β-HB)
  ├─ Maintenance: Sustain ketosis long-term
  ├─ Monitoring: Ketones, lipids, growth (in children)
  ├─ Complications:
  │  ├- Growth failure (children)
  │  ├- Dyslipidemia
  │  ├- Kidney stones
  │  ├- Constipation
  │  └- Acidosis
  └- Supplements: Often needed (vitamins, minerals, MCT oil)
\`\`\``,
      keyTerms: [
        { term: 'pharmaconutrition', definition: 'Administration of specific nutrients at pharmacologic doses to modulate disease processes' },
        { term: 'immunonutrition', definition: 'Use of specific nutrients to modulate immune response in critical illness' },
        { term: 'dysbiosis', definition: 'Imbalance in gut microbiota composition associated with disease' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived metabolite associated with CVD risk' },
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects response to nutrients and dietary patterns' },
        { term: 'Warburg effect', definition: 'Observation that cancer cells primarily use glycolysis for energy even with oxygen available' },
        { term: 'FMT', definition: 'Fecal microbiota transplantation; transfer of stool from healthy donor to treat dysbiosis' },
      ],
      analogies: [
        'Pharmaconutrition is like giving the body specific tools from a toolbox to fix a problem.',
        'Immunonutrition in critical care is like sending reinforcements to a battle - you\'re boosting the body\'s defenses.',
        'The ketogenic diet is like switching your body from gasoline to diesel fuel - a different energy source that can help certain conditions.',
      ],
      examples: [
        'Surgical patients receiving immunonutrition formulas have fewer postoperative infections',
        'PKU patients maintain normal cognitive development with strict low-phenylalanine diet from infancy',
        'Child with refractory epilepsy achieves >90% seizure reduction on 4:1 ketogenic diet',
        'FMT cures recurrent C. difficile infection in >90% of cases',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **Refeeding syndrome:** Check electrolytes and replace thiamine before feeding malnourished patients. Start at 25% calories and advance slowly.

2. **Diabetic gastroparesis:** Liquid meals often better tolerated. Prokinetic agents and tight glycemic control essential.

3. **CKD nutrition:** Avoid over-restricting protein in stages 3-4 - malnutrition risk outweighs benefit. Focus on biologic value proteins.

4. **SGLT2 inhibitors:** Can cause euglycemic DKA. Hold 24 hours before surgery, situations that may reduce oral intake.

5. **Critical illness:** Early EN (within 24-48h) preferred over PN. Consider immunonutrition in surgical patients but not sepsis.

6. **Inborn errors:** Refer to metabolic specialist. Even "mild" disorders require careful management during illness to prevent decompensation.`,
    },
  },

  media: [
    {
      id: 'diabetes-plate-method',
      type: 'diagram',
      filename: 'diabetes-plate-method.svg',
      title: 'Diabetes Plate Method',
      description: 'Visual guide for diabetes meal planning using the plate method',
    },
    {
      id: 'renal-diet-stages',
      type: 'diagram',
      filename: 'renal-diet-stages.svg',
      title: 'Renal Diet by CKD Stage',
      description: 'Nutrition modifications for different stages of chronic kidney disease',
    },
  ],

  citations: [
    {
      id: 'diabetes-mnt-standards',
      type: 'article',
      title: 'Standards of Medical Care in Diabetes',
      authors: ['American Diabetes Association'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
    },
    {
      id: 'kdoqi- clinical-practice-guideline',
      type: 'article',
      title: 'KDOQI Clinical Practice Guideline for Nutrition in CKD',
      authors: ['National Kidney Foundation'],
      source: 'American Journal of Kidney Diseases',
    },
    {
      id: 'aspen-guidelines',
      type: 'article',
      title: 'ASPEN Guidelines for Nutrition Support of Critically Ill Patients',
      authors: ['ASPEN Board of Directors'],
      source: 'JPEN Journal of Parenteral and Enteral Nutrition',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'renal-ckd', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'gastrointestinal-cirrhosis', targetType: 'condition', relationship: 'related', label: 'Cirrhosis' },
  ],

  tags: {
    systems: ['gastrointestinal', 'endocrine', 'renal'],
    topics: ['nutrition', 'therapeutics', 'critical-care', 'chronic-disease'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default medicalNutritionTherapy;
