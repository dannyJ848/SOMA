/**
 * Obesity Nutrition - Nutrition Science
 *
 * Comprehensive content on nutritional approaches to weight management
 * including energy balance, behavioral strategies, dietary patterns,
 * pharmacotherapy, and surgical nutrition considerations.
 */

import { EducationalContent } from '../types';

export const obesityNutrition: EducationalContent = {
  id: 'nutrition-obesity',
  type: 'topic',
  name: 'Obesity Nutrition',
  alternateNames: ['Weight Management', 'Nutritional Treatment of Obesity', 'Weight Loss Nutrition'],

  levels: {
    1: {
      level: 1,
      summary: 'Weight management is about balancing the calories you eat with the calories your body uses. Making healthy food choices, being active, getting enough sleep, and managing stress all help you reach and maintain a healthy weight.',
      explanation: `## What Is Weight Management?

Weight management means finding a healthy balance between the calories you eat and drink and the calories your body uses through activity and normal functions.

**Calories In vs. Calories Out:**
- When you eat more calories than you use, you gain weight
- When you eat fewer calories than you use, you lose weight
- When they\'re balanced, your weight stays the same

**Energy Balance:**
- Your body burns calories even when sleeping (to keep your heart beating, brain working, etc.)
- Physical activity burns extra calories
- Different activities burn different amounts of calories

## Healthy Eating for Weight Management

**Choose These Foods:**
- Fruits and vegetables (fill you up with fewer calories)
- Whole grains (keep you full longer)
- Lean proteins (chicken, fish, beans)
- Low-fat dairy (milk, yogurt, cheese)
- Healthy fats (nuts, olive oil, avocado)

**Limit These Foods:**
- Sugary drinks (soda, juice, energy drinks)
- Sweets and desserts
- Fried foods
- Fast food
- Large portions

## Tips for Success

**Portion Control:**
- Use smaller plates
- Check serving sizes on food labels
- Share restaurant meals or take half home
- Don\'t eat straight from the bag

**Healthy Habits:**
- Eat breakfast every day
- Don\'t skip meals (can lead to overeating later)
- Eat slowly and pay attention to when you\'re full
- Choose water instead of sugary drinks
- Keep healthy snacks available

**Be Active:**
- Aim for 60 minutes of activity every day
- Choose activities you enjoy
- Take the stairs instead of the elevator
- Walk or bike instead of driving when possible
- Play sports or games with friends

## Why Weight Matters

**Being at a Healthy Weight:**
- Helps your heart work better
- Lowers blood pressure
- Helps prevent diabetes
- Makes it easier to be active
- Helps you sleep better
- Improves your mood and energy

## Set Realistic Goals

- Aim to lose 1-2 pounds per week (safe and sustainable)
- Focus on making lifestyle changes, not quick fixes
- Celebrate small victories
- Remember that everyone\'s body is different
- The goal is health, not a certain size

Remember: Weight management is about making healthy choices you can live with for life!`,
      keyTerms: [
        { term: 'calories', definition: 'Units that measure how much energy food provides to your body' },
        { term: 'energy balance', definition: 'The balance between calories consumed and calories burned' },
        { term: 'portion control', definition: 'Eating the right amount of food for your body\'s needs' },
        { term: 'serving size', definition: 'The recommended amount of food to eat at one time' },
        { term: 'physical activity', definition: 'Any movement that uses energy; helps burn calories' },
      ],
      analogies: [
        'Weight management is like balancing a scale - what you put on one side (food) needs to match the other side (activity).',
        'Your body is like a bank account - food deposits energy, activity withdraws it, and you want to keep the balance healthy.',
        'Portion control is like using a smaller basket - you can only fit so much inside, so you naturally take less.',
      ],
      examples: [
        'Someone who drinks soda every day could lose weight by switching to water',
        'A teenager who joins a sports team may burn extra calories and feel hungrier',
        'Using a smaller plate helps you eat less without feeling deprived',
        'Eating breakfast can help prevent overeating later in the day',
      ],
      patientCounselingPoints: [
        'Focus on adding healthy foods rather than restricting bad foods',
        'Find physical activities you actually enjoy so you\'ll stick with them',
        'Small changes add up - even losing 5-10% of your weight improves health',
        'Don\'t compare yourself to others - everyone\'s body is different',
        'Remember, weight management is a lifelong journey, not a race',
      ],
    },
    2: {
      level: 2,
      summary: 'Weight management involves creating a modest calorie deficit through dietary modification and increased physical activity. Sustainable weight loss of 1-2 pounds per week is recommended, with focus on nutrient-dense foods, appropriate portion sizes, and lifestyle changes rather than restrictive dieting.',
      explanation: `## Understanding Weight Management

**Energy Balance:**

---
Calories In vs. Calories Out:
  +- Calories in: Food and beverages consumed
  +- Calories out:
  |  +- Basal metabolic rate (60-75%): Energy at rest
  |  +- Thermic effect of food (10%): Digestion, absorption, metabolism
  |  +- Physical activity (15-30%): Exercise, daily movement
  +- Weight change = Calories in - Calories out

Calorie deficits for weight loss:
  +- 1 pound fat = ~3,500 calories
  +- 500 calorie/day deficit = 1 pound/week loss
  +- 1,000 calorie/day deficit = 2 pounds/week loss
  +- Recommended: 1-2 pounds/week (safe, sustainable)

Weight maintenance:
  +- Calories in = Calories out
  +- Requires ongoing attention
---

**Body Mass Index (BMI):**

---
BMI = Weight (kg) / Height (m)²

Categories:
  +- Underweight: <18.5
  +- Normal weight: 18.5-24.9
  +- Overweight: 25-29.9
  +- Obese: 30-39.9
  +- Extremely obese: 40+

Limitations:
  +- Doesn\'t distinguish muscle from fat
  +- Varies by ethnicity
  +- May overestimate body fat in athletes
  +- May underestimate body fat in elderly
---

**Other Measures:**
- Waist circumference: >40 inches (men), >35 inches (women) indicates health risk
- Waist-to-hip ratio: >0.9 (women), >1.0 (men) indicates abdominal obesity
- Body composition analysis: Measures fat vs. lean mass

## Dietary Approaches to Weight Loss

**Balanced Deficit Diet:**

---
Principles:
  +- Reduce calorie intake by 500-750 kcal/day
  +- Maintain nutritional adequacy
  +- Include all food groups
  +- Focus on nutrient density

Recommended distribution:
  +- Carbohydrates: 45-65% of calories
  +- Protein: 10-35% of calories (higher may help satiety)
  +- Fat: 20-35% of calories

Food choices:
  +- Emphasize: Vegetables, fruits, whole grains, lean proteins
  +- Moderate: Low-fat dairy, healthy fats
  +- Limit: Added sugars, saturated fats, sodium

Calorie targets for weight loss:
  +- Women: 1,200-1,500 kcal/day (not below 1,200)
  +- Men: 1,500-1,800 kcal/day (not below 1,500)
  +- Very low-calorie diets (<800 kcal) require medical supervision
---

**Other Evidence-Based Approaches:**

| Diet Pattern | Description | Evidence |
|-------------|-------------|----------|
| Mediterranean | Emphasizes plant foods, olive oil, moderate wine | Strong for CVD, weight |
| DASH | Designed for blood pressure, effective for weight | Strong for both |
| Vegetarian/Vegan | Plant-based, may restrict some animal products | Effective for weight |
| Low-carbohydrate | <130 g/day, often higher protein | Effective short-term |
| Intermittent Fasting | Time-restricted eating, alternate-day fasting | Emerging evidence |
| Paleo | Whole foods, eliminates grains/legumes/dairy | Limited evidence |

**Making It Work:**

---
Behavioral strategies:
  +- Self-monitoring:
  |  +- Food diary (paper or app)
  |  +- Regular weighing
  |  +- Activity tracking
  +- Goal setting:
  |  +- SMART goals (specific, measurable, achievable, relevant, time-bound)
  |  +- Short-term and long-term goals
  |  +- Regular review and adjustment
  +- Stimulus control:
  |  +- Keep problem foods out of sight
  |  +- Make healthy foods easily accessible
  |  +- Plan for challenging situations
  +- Problem-solving:
     +- Identify barriers
     +- Brainstorm solutions
     +- Try new strategies

Cognitive strategies:
  +- Challenge unhelpful thoughts
  +- Develop positive self-talk
  +- Practice mindfulness eating
  +- Focus on non-food rewards
---

## Physical Activity

**Recommendations for Weight Loss:**

---
Amount:
  +- At least 150 minutes/week moderate-intensity
  +- 250-300 minutes/week for significant weight loss
  +- Combine aerobic and strength training

Types:
  +- Aerobic: Walking, cycling, swimming
  +- Strength: Weights, resistance bands, bodyweight exercises
  +- Flexibility: Stretching, yoga
  +- Lifestyle: Taking stairs, walking, yard work

Getting started:
  +- Start slowly if inactive
  +- Choose activities you enjoy
  +- Build up gradually
  +- Include variety
  +- Schedule it like an appointment
---

## Maintenance

**Keeping Weight Off:**

---
National Weight Control Registry findings:
  +- Successful losers report:
  |  +- Eating breakfast daily
  |  +- Weighing themselves at least weekly
  |  +- Watching less TV
  |  +- Exercising ~1 hour/day
  |  +- Maintaining consistent eating patterns

Maintenance strategies:
  +- Continue monitoring
  +- Regular physical activity
  +- Problem-solving skills
  +- Social support
  +- Coping with stress
  +- Flexible but healthy eating

Relapse prevention:
  +- Expect setbacks
  +- Learn from slip-ups
  +- Get back on track quickly
  +- Don\'t give up
---`,
      keyTerms: [
        { term: 'calorie deficit', definition: 'Taking in fewer calories than your body burns, leading to weight loss' },
        { term: 'BMI', definition: 'Body Mass Index; a measure of weight relative to height used to categorize weight status' },
        { term: 'nutrient density', definition: 'Amount of nutrients per calorie of food' },
        { term: 'waist circumference', definition: 'Measurement around the waist indicating abdominal fat and health risk' },
        { term: 'basal metabolic rate', definition: 'Calories your body burns at rest to maintain basic functions' },
        { term: 'satiety', definition: 'Feeling of fullness and satisfaction after eating' },
        { term: 'intermittent fasting', definition: 'Eating pattern that cycles between periods of eating and fasting' },
      ],
      analogies: [
        'Weight maintenance is like balancing a checkbook - deposits (calories in) and withdrawals (calories out) need to balance.',
        'BMI is like a quick screening tool, but it doesn\'t tell the whole story - like judging a book by its cover.',
        'The National Weight Control Registry is like a survey of people who have "won" at weight loss - they share what works.',
      ],
      examples: [
        'A 5% weight loss can significantly improve blood pressure and blood sugar',
        'People who keep weight off tend to eat breakfast and exercise regularly',
        'Strength training helps maintain muscle while losing fat',
        'Sleep deprivation increases hunger hormones and makes weight management harder',
      ],
      patientCounselingPoints: [
        'Aim for slow, steady weight loss of 1-2 pounds per week',
        'Focus on adding healthy foods rather than eliminating bad foods',
        'Find physical activities you enjoy so you\'ll stick with them',
        'Keep a food diary - it increases awareness and accountability',
        'Don\'t aim for perfection - progress, not perfection, is what matters',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical weight management integrates physiology of energy homeostasis, behavioral psychology, and evidence-based dietary interventions. Treatment approaches range from lifestyle modification to pharmacotherapy and bariatric surgery, with individualized treatment planning based on comorbidities and patient preferences.',
      explanation: `## Physiology of Energy Homeostasis

**Regulation of Body Weight:**

---
Hypothalamic control:
  +- Arcuate nucleus integration:
  |  +- NPY/AgRP neurons: Stimulate hunger, reduce energy expenditure
  |  +- POMC/CART neurons: Suppress hunger, increase energy expenditure
  +- Hormonal signals:
  |  +- Leptin (adipose satiety hormone):
  |  |  +- Proportional to fat mass
  |  |  +- Suppresses NPY/AgRP, stimulates POMC
  |  |  +- Resistance in obesity: Impaired signaling
  |  |  +- Weight loss to decreased leptin to increased hunger
  |  +- Ghrelin (stomach hunger hormone):
  |  |  +- Stimulates hunger
  |  |  +- Levels rise before meals, fall after eating
  |  +- Weight loss to increased ghrelin
  |  +- Insulin:
  |  |  +- Postprandial satiety signal
  |  |  +- Acts on hypothalamus
  |  |  +- Resistance in obesity
  |  +- PYY, GLP-1, CCK: Satiety hormones from gut
  |  +- Adiponectin: Increases insulin sensitivity
  |  +- Resistin: Associated with insulin resistance
  +- Set point theory:
     +- Body defends a particular weight range
     +- Weight loss triggers compensatory responses
     +- Metabolic adaptation: Decreased energy expenditure
     +- Hormonal adaptation: Increased hunger, decreased satiety
     +- Explains difficulty maintaining weight loss

Metabolic adaptation to weight loss:
  +- Reduced resting metabolic rate beyond predicted
  +- Increased efficiency (fewer calories for same work)
  +- Decreased non-exercise activity thermogenesis (NEAT)
  +- Reduced sympathetic nervous system activity
  +- Partially responsible for weight regain

Energy expenditure components:
  +- Resting metabolic rate (RMR): 60-75%
  +- Thermic effect of food (TEF): ~10%
  +- Activity energy expenditure (AEE): 15-30%
  |  +- Exercise
  |  +- NEAT (fidgeting, posture, daily movement)
  +- Adaptive thermogenesis: Changes in efficiency
---

## Comprehensive Lifestyle Intervention

**Diabetes Prevention Program (DPP) Model:**

---
Core components:
  +- Dietary goals:
  |  +- Reduced calorie intake
  |  +- Reduced fat intake
  |  +- Increased physical activity
  +- Physical activity:
  |  +- Goal: 150 minutes/week moderate intensity
  |  +- Lifestyle activity encouraged
  +- Behavioral strategies:
  |  +- Self-monitoring (food, activity, weight)
  |  +- Stimulus control
  |  +- Problem-solving
  |  +- Cognitive restructuring
  |  +- Relapse prevention
  +- Support:
  |  +- Group sessions
  |  +- Individual coaching
  |  +- Peer support
  +- Frequency:
     +- Weekly initially (16 sessions)
     +- Monthly thereafter
     +- Ongoing maintenance

Outcomes:
  +- Weight loss: 5-7% of initial weight
  +- Diabetes risk reduction: 58% vs. placebo
  +- Benefits maintained long-term
  +- Cost-effective
---

**Trained Lifestyle Coach Approach:**

---
16 core sessions:
  1. Be a Fat and Calorie Detective
  2. Three Ways to Eat Less Fat and Fewer Calories
  3. Healthy Eating
  4. Move Those Muscles
  5. Being Active: A Way of Life
  6. Tip the Calorie Balance
  7. Take Charge of Your Thoughts
  8. The Slippery Slope of Lifestyle Change
  9. You Can Manage Stress
  10. Ways to Stay Motivated
  11. Social Cues
  12. Practicing "No Thank You"
  13. Long-Term Self-Management
  14. Extending Your Skills
  15. Reflections and Looking Forward
  16. Graduation and Beyond

Key techniques:
  +- Fat and calorie counting training
  +- Food label reading
  +- Portion size estimation
  +- Restaurant eating strategies
  +- Activity planning
  +- Problem-solving barriers
  +- Cognitive restructuring techniques
  +- Relapse prevention planning
---

## Pharmacotherapy for Obesity

**Approved Medications:**

---
Orlistat (Xenical, Alli):
  +- Mechanism: Lipase inhibitor, prevents fat absorption
  +- Dose: 120 mg TID (Xenical), 60 mg TID (Alli)
  +- Efficacy: ~5-10% weight loss at 1 year
  +- Side effects: Oily spotting, gas, urgency
  +- Contraindications: Malabsorption, cholestasis
  +- Monitoring: Fat-soluble vitamin levels
  +- Considerations: Must take multivitamin

Phentermine/Topiramate (Qsymia):
  +- Mechanism:
  |  +- Phentermine: Sympathomimetic appetite suppressant
  |  +- Topiramate: Anticonvulsant with weight loss effect
  +- Dose: Titration over several weeks
  +- Efficacy: ~10% weight loss at 1 year
  +- Side effects: Paresthesia, dry mouth, constipation, dysgeusia
  +- Contraindications: Pregnancy (teratogenic), glaucoma, hyperthyroidism, MAOI use
  +- Boxed warning: Teratogenicity
  +- Monitoring: Heart rate, potassium, metabolic acidosis
  +- REMS: Pregnancy testing required

Naltrexone/Bupropion (Contrave):
  +- Mechanism:
  |  +- Naltrexone: Opioid antagonist (reward system)
  |  +- Bupropion: Antidepressant (dopamine, norepinephrine)
  +- Dose: Titration over 4 weeks
  +- Efficacy: ~5-10% weight loss at 1 year
  +- Side effects: Nausea, constipation, headache, dizziness
  +- Contraindications: Seizure disorder, eating disorders, opioid use, MAOI use
  +- Boxed warning: Suicidality, neuropsychiatric reactions
  +- Monitoring: Blood pressure, mood

Liraglutide (Saxenda):
  +- Mechanism: GLP-1 receptor agonist
  +- Dose: Subcutaneous daily, titrated to 3.0 mg
  +- Efficacy: ~8-10% weight loss at 1 year
  +- Side effects: Nausea, vomiting, diarrhea, constipation
  +- Contraindications: Personal/family history of MTC, MEN2
  +- Boxed warning: Thyroid C-cell tumors (rodents)
  +- Monitoring: Gallbladder disease, pancreatitis

Semaglutide (Wegovy, Ozempic):
  +- Mechanism: GLP-1 receptor agonist
  +- Dose: Subcutaneous weekly
  +- Efficacy: ~15% weight loss at 68 weeks (STEP trials)
  +- Side effects: GI (nausea, vomiting, diarrhea, constipation)
  +- Contraindications: Personal/family history of MTC, MEN2
  +- Boxed warning: Thyroid C-cell tumors (rodents)
  +- STEP trials: Demonstrated significant efficacy
  +- Monitoring: Gallbladder disease, pancreatitis, retinopathy (diabetics)
---

## Bariatric Surgery Nutrition

**Preoperative Preparation:**

---
Nutritional assessment:
  +- Identify current eating patterns
  +- Assess vitamin/mineral status
  +- Evaluate protein intake
  +- Screen for disordered eating
  +- Establish baseline weight/composition

Education:
  +- Dietary changes after surgery
  +- Eating behaviors needed for success
  +- Vitamin/mineral supplementation requirements
  +- Expected weight loss trajectory
  +- Potential complications
  +- Lifestyle modifications needed

Pre-op diet:
  +- Often: 2-week low-calorie diet before surgery
  +- Purpose: Reduce liver size, facilitate surgery
  +- Calorie target: 800-1000 kcal/day
  +- Macronutrient: High-protein, low-carb, low-fat
  +- Compliance important for surgical outcomes
---

**Postoperative Nutrition by Procedure:**

---
Roux-en-Y Gastric Bypass (RYGB):
  +- Anatomy: Small pouch, Roux limb, bypassed stomach/duodenum
  +- Dietary progression:
  |  +- Stage 1 (week 1): Clear liquids
  |  +- Stage 2 (weeks 2-3): Full liquids
  |  +- Stage 3 (weeks 4-5): Pureed foods
  |  +- Stage 4 (weeks 6-8): Soft foods
  |  +- Stage 5 (week 8+): Solid foods
  +- Long-term nutrition:
  |  +- Protein: 60-80 g/day minimum
  |  +- Fluid: 64+ oz/day (prevent dehydration, kidney stones)
  |  +- Supplements required:
  |  |  +- Multivitamin: Complete, high-dose (2x daily)
  |  |  +- Calcium: 1,200-1,500 mg/day (citrate preferred)
  |  |  +- Vitamin D: 3,000 IU daily
  |  |  +- Vitamin B12: 500 mcg daily (sublingual preferred)
  |  |  +- Iron: 50-100 mg daily (menstruating women)
  |  |  +- Folate: 400-800 mcg daily
  |  |  +- Thiamine: 100 mg daily (first 6 months)
  |  +- Complications:
  |     +- Dumping syndrome (sugar, large volume)
  |     +- Dehydration
  |     +- Malnutrition
  |     +- Deficiencies common (B12, iron, folate, calcium, vitamin D)
  |     +- Strictures

Sleeve Gastrectomy:
  +- Anatomy: Tubular stomach, no bypass
  +- Similar dietary progression (less restrictive)
  +- Protein: 60-80 g/day minimum
  +- Supplements required (similar but often less than RYGB)
  +- Advantages: No dumping, no malabsorption
  +- Complications:
  |  +- GERD (very common)
  |  +- Leaks
  |  +- Strictures
  |  +- Reflux

Adjustable Gastric Band:
  +- Anatomy: Band with balloon around proximal stomach
  +- Reversible
  +- Fewer nutritional deficiencies
  +- Less weight loss
  +- Complications: Band slippage, erosion, port problems
  +- Less commonly performed now
  +- Many bands being removed due to complications

Biliopancreatic Diversion with Duodenal Switch (BPD-DS):
  +- Most malabsorptive
  +- Greatest weight loss
  +- Highest nutritional risk
  +- Supplements: Extensive required
  +- Complications: Malnutrition, deficiencies common
  +- Performed by experienced surgeons only

SADI-S (Single Anastomosis Duodeno-Ileal Bypass):
  +- Loop duodenal switch
  +- Emerging procedure
  +- Simpler than BPD-DS
  +- Good weight loss
  +- Long-term data limited
---`,
      keyTerms: [
        { term: 'leptin', definition: 'Hormone produced by fat cells that signals satiety and energy stores to the brain' },
        { term: 'ghrelin', definition: 'Hunger hormone produced by the stomach; stimulates appetite' },
        { term: 'set point theory', definition: 'Theory that body defends a particular weight range through compensatory mechanisms' },
        { term: 'NEAT', definition: 'Non-exercise activity thermogenesis; calories burned through daily movement not including exercise' },
        { term: 'dumping syndrome', definition: 'Rapid gastric emptying causing nausea, cramping, diarrhea, weakness after eating, especially high-sugar foods' },
        { term: 'REM', definition: 'Risk Evaluation and Mitigation Strategy; FDA-required safety program for certain medications' },
      ],
      analogies: [
        'Leptin resistance is like having a broken thermostat - the signal is there but the body doesn\'t respond properly.',
        'Metabolic adaptation is like your body putting itself in power-saving mode when you lose weight.',
        'Dumping syndrome is like a flood gate opening - everything rushes through before your body is ready.',
      ],
      examples: [
        'Diabetes Prevention Program: 58% reduction in diabetes incidence with 7% weight loss',
        'STEP 1 trial: Semaglutide 2.4 mg achieved 14.9% weight loss vs 2.4% placebo',
        'Gastric bypass patient develops B12 deficiency requiring lifelong injections',
        'Bariatric surgery patient maintains 25% weight loss at 10 years post-op',
      ],
      clinicalNotes: 'GLP-1 agonists (liraglutide, semaglutide) are now first-line pharmacotherapy for many patients due to superior efficacy. All bariatric surgery patients require lifelong vitamin supplementation, especially B12, iron, calcium, and vitamin D. Post-RYGB patients need aggressive monitoring for anemia and bone health.',
    },
    4: {
      level: 4,
      summary: 'Advanced weight management integrates neuroendocrinology of appetite regulation, genetic factors, personalized nutrition approaches, and specialized protocols for patients with obesity-related comorbidities including diabetes, cardiovascular disease, and NAFLD.',
      explanation: `## Neuroendocrinology of Appetite

**Advanced Signaling Pathways:**

---
Gut-brain axis:
  +- Vagal nerve afferents:
  |  +- Mechanical distension (stomach stretch)
  |  +- Nutrient sensing (glucose, fatty acids, amino acids)
  |  +- Hormone receptors (CCK, GLP-1, PYY)
  |  +- Signals to nucleus tractus solitarius to hypothalamus
  +- Circulating hormones:
  |  +- Short-term (meal-related):
  |  |  +- CCK: Satiety, gallbladder contraction, pancreatic secretion
  |  |  +- GLP-1: Incretin, inhibits gastric emptying, satiety
  |  |  +- PYY3-36: Satiety signal from L-cells
  |  |  +- Oxyntomodulin: Satiety signal
  |  |  +- Amylin: Satiety, slows gastric emptying
  |  |  +- Ghrelin: Hunger, stimulates gastric emptying
  |  +- Long-term (adiposity signals):
  |     +- Leptin: Satiety, increases energy expenditure
  |     +- Insulin: Satiety, hypothalamic effects
  |     +- Adiponectin: Insulin sensitizer
  |     +- Resistin: Associated with insulin resistance
  +- Central processing:
     +- Hypothalamus (arcuate nucleus):
     |  +- NPY/AgRP: Orexigenic (stimulate eating)
     |  +- POMC/CART: Anorexigenic (suppress eating)
     |  +- Receive hormonal signals
     +- Hindbrain (NTS): Vagal integration
     +- Reward circuits: Dopamine, opioids, endocannabinoids
     +- Cortex: Decision-making, executive function

Pharmacologic targets:
  +- GLP-1 receptor agonists:
  |  +- Liraglutide, semaglutide
  |  +- Delayed gastric emptying
  |  +- Satiety signaling
  |  +- Food reward reduction
  |  +- Most effective pharmacotherapy
  +- 5-HT2C receptor agonist (lorcaserin):
  |  +- Satiety enhancement
  |  +- Withdrawn (safety concerns)
  +- Combination approaches:
  |  +- Naltrexone/bupropion: Reward pathways
  |  +- Phentermine/topiramate: Multiple mechanisms
  +- Emerging targets:
     +- Dual/triple agonists (GLP-1/GIP/glucagon)
     +- Unimolecular co-agonists
     +- Novel mechanisms (amylin analogs)

Hormonal adaptations to weight loss:
  +- Leptin decreases exponentially with fat loss
  +- Ghrelin increases (hunger increases)
  +- GLP-1, PYY responses may be blunted
  +- Insulin sensitivity improves
  +- Adiponectin increases
  +- Metabolic adaptation slows weight loss
---

## Precision Nutrition for Weight Management

**Personalized Approaches:**

---
Genetic variants affecting weight:
  +- FTO (fat mass and obesity-associated):
  |  +- Most significant common variant
  |  +- rs9939609: Each allele adds ~1.3 kg/m² BMI
  |  +- Affects satiety perception, food preference
  |  +- Gene-environment interaction with diet
  |  +- Intervention: Protein-rich diet more beneficial
  +- MC4R variants:
  |  +- Monogenic obesity (rare, severe)
  |  +- Heterozygous: Common obesity risk
  |  +- Setapoint elevation
  |  +- Response to MC4R agonists (investigational)
  +- ADIPORQ, PPARG, ADRB2:
  |  +- Modest effects on weight/loss response
  +- TCF7L2:
  |  +- Diabetes risk
  |  +- May affect dietary response
  +- APOE:
     +- epsilon;4 associated with obesity, CVD
     +- Affects dietary fat response

Nutrigenomics considerations:
  +- Gene-diet interactions
  +- Personalized recommendations
  +- Commercial testing available
  +- Clinical utility uncertain
  +- Future potential: Polygenic risk scores

Microbiome and weight:
  +- Dysbiosis in obesity:
  |  +- Reduced diversity
  |  +- Altered Firmicutes/Bacteroidetes ratio
  |  +- Increased energy harvest from diet
  |  +- Enhanced SCFA production
  +- Microbial transfer studies:
  |  +- Lean vs. obese microbiome in mice
  |  +- Transplant confers phenotype
  |  +- Human evidence: FMT from lean donors
  +- Modulation strategies:
  |  +- Prebiotics: Feed beneficial bacteria
  |  +- Probiotics: Specific strains (Akkermansia, etc.)
  |  +- Synbiotics: Combined approach
  |  +- FMT: Experimental
  |  +- Diet: Most powerful modulator
  +- Challenges:
     +- Causality not established
     +- Interindividual variation
     +- Strain-level effects important
     +- Regulatory hurdles

Metabolomics:
  +- Baseline metabolite profile predicts response
  +- Identifies responders vs. non-responders
  +- Personalized dietary advice
  +- Monitor adherence
  +- Emerging field
---

## Obesity-Related Conditions

**Type 2 Diabetes:**

---
Weight loss impact:
  +- 5-10% weight loss:
  |  +- downarrow;Insulin resistance
  |  +- downarrow;Fasting glucose
  |  +- downarrow;HbA1c: 0.5-2.0%
  |  +- uparrow;Insulin secretion
  |  +- Possible remission (early diabetes)
  +- Diabetes Prevention Program:
  |  +- 58% risk reduction with lifestyle
  |  +- More effective than medication (metformin)
  |  +- Benefits last for years
  +- Bariatric surgery:
  |  +- Most effective intervention
  |  +- Remission: 30-60% (varies by procedure)
  |  +- Resolution of hyperglycemia often immediate
  |  +- Superior to medical therapy (many trials)
  +- Nutritional considerations:
     +- Consistent carbohydrate intake
     +- Glycemic index focus
     +- Mediterranean, DASH patterns
     +- Very low-calorie diets (medically supervised)
     +- Bariatric surgery: Specific protocols

NAFLD/NASH:
  +- Pathophysiology: Fat accumulation to inflammation to fibrosis
  +- Weight loss impact:
  |  +- 5-10%: Improvement in steatosis
  |  +- 7-10%: Improvement in NASH
  |  +- >10%: Possible fibrosis regression
  +- Dietary strategies:
  |  +- Weight loss: Primary intervention
  |  +- Mediterranean diet: Best evidence
  |  +- Reduce fructose (especially sugary beverages)
  |  +- DHA/EPA: May reduce liver fat
  |  +- Coffee: Possible protective effect
  |  +- Avoid alcohol: Abstinence recommended
  +- Bariatric surgery:
  |  +- Rapid improvement in NAFLD
  |  +- NASH may improve
  |  +- Fibrosis regression possible in some
  +- Monitoring: Liver enzymes, imaging, FibroScan
---

**Cardiovascular Risk:**

---
Weight loss benefits:
  +- Blood pressure: ~1 mmHg per kg lost
  +- Cholesterol:
  |  +- LDL: Modest reduction (5-10 mg/dL per 10 kg)
  |  +- Triglycerides: Significant reduction (20-30%)
  |  +- HDL: Modest increase (5-10%)
  +- Inflammation: CRP reduction
  +- Vascular function: Improved
  +- Atrial fibrillation: Weight loss to lower burden, possible ablation

Weight regain risks:
  +- Reversal of benefits
  +- Yo-yo dieting concerns:
  |  +- Metabolic adaptation
  |  +- Fat mass redistribution
  |  +- Potential harm (controversial)
  |  +- Focus on sustainable loss
  +- Prevention strategies key

Dietary patterns:
  +- DASH: Proven CVD risk reduction
  +- Mediterranean: Proven CVD risk reduction
  +- Portfolio diet: Cholesterol lowering
  +- Low-fat vs. low-carb: Both effective if calorie-controlled

Bariatric surgery:
  +- Major CVD benefit
  +- Mortality reduction
  +- Event reduction
  +- Cardiac remodeling (improves function)
---`,
      keyTerms: [
        { term: 'FTO gene', definition: 'Fat mass and obesity-associated gene; most significant common genetic variant affecting BMI' },
        { term: 'MC4R', definition: 'Melanocortin-4 receptor; mutations cause rare monogenic obesity' },
        { term: 'GLP-1', definition: 'Glucagon-like peptide-1; incretin hormone with effects on satiety and gastric emptying' },
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease; fat accumulation in liver unrelated to alcohol use' },
        { term: 'NASH', definition: 'Non-alcoholic steatohepatitis; NAFLD with inflammation and possible fibrosis' },
        { term: 'dysbiosis', definition: 'Imbalance in gut microbiota composition; associated with obesity' },
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects response to nutrients and dietary patterns' },
      ],
      analogies: [
        'The gut-brain axis is like a two-way radio - your gut and brain are constantly talking about hunger and fullness.',
        'Metabolic adaptation is like a thermostat that gets more sensitive - your body fights harder to maintain weight after loss.',
        'Dysbiosis is like having a workforce that\'s too efficient at extracting energy - your gut bacteria help you harvest more calories.',
      ],
      examples: [
        'STEP 1 trial: Semaglutide achieved 14.9% weight loss vs 2.4% placebo in non-diabetic obesity',
        'Look AHEAD trial: Intensive lifestyle intervention achieved 8.6% weight loss at 1 year, partial remission of diabetes',
        'Bariatric surgery: STAMPEDE trial showed remission of diabetes in 30% of medical group vs 95% of surgical group',
        'Twin studies: FTO explains only 3 kg/m² BMI difference between genotypes',
      ],
      clinicalNotes: 'GLP-1 agonists (semaglutide, tirzepatide) now show 15-20% weight loss, approaching bariatric surgery efficacy. All patients with obesity and T2DM should be considered for GLP-1 therapy. Weight loss of 5-10% significantly improves NAFLD; 10%+ may reverse NASH. Bariatric surgery is most effective intervention for T2DM remission.',
    },
    5: {
      level: 5,
      summary: 'Expert-level obesity management integrates cutting-edge research on neuroendocrine regulation, multi-agonist pharmacotherapy, personalized medicine approaches, and long-term maintenance strategies including digital health technologies and metabolic adaptation management.',
      explanation: `## Emerging Therapies

**Multi-Agonist Molecules:**

---
Tirzepatide (Mounjaro, Zepbound):
  +- Dual GIP/GLP-1 receptor agonist
  +- SURMOUNT-1 trial:
  |  +- 15% weight loss at 72 weeks (10 mg)
  |  +- 20.9% weight loss at 72 weeks (15 mg)
  |  +- Superior to semaglutide head-to-head (SURMOUNT-2)
  +- SURMOUNT-2 (diabetes):
  |  +- 15.7% weight loss vs 3.2% semaglutide
  |  +- HbA1c reduction: 2.3% vs 1.9%
  |  +- Superiority established
  +- Mechanism advantages:
  |  +- GIP: May enhance insulin secretion, weight loss
  |  +- GLP-1: Satiety, delayed gastric emptying
  |  +- Synergistic effects
  |  +- Unique pharmacokinetics
  +- Side effects: GI (nausea, vomiting, diarrhea, constipation)
  +- Dosing: Weekly subcutaneous, titrated to 15 mg
  +- Future: Obesity, diabetes, HFpEF (pivotal trials ongoing)

Retatrutide (LY3437943):
  +- Triple agonist (GLP-1/GIP/glucagon)
  +- Phase 2 trial:
  |  +- Up to 24% weight loss at 48 weeks
  |  +- Dose-response: Higher doses more effective
  |  +- Ongoing phase 3 trials
  +- Mechanism: Glucagon adds energy expenditure
  +- Potential: Most effective agent yet
  +- Monitoring: Liver enzymes (transaminases)

Other multi-agonists in development:
  +- Cotadutide (GLP-1/glucagon)
  +- Mazdutide (GLP-1/glucagon)
  +- Survodutide (GLP-1/glucagon/GIP)
  +- ALT-801 (GLP-1/glucagon)
  +- Many others in pipeline

Oral semaglutide (Rybelsus):
  +- First oral GLP-1 agonist
  +- SNAC absorption technology
  +- 14 mg: Similar efficacy to injectable 0.5 mg
  +- Phase 3 STEP trials: Positive
  +- Convenient alternative for needle-averse patients

Amylin analogs:
  +- Cagrilintide: Amylin analog + calcitonin agonist
  +- Phase 2: Significant weight loss
  +- Potential combination with GLP-1
  +- Investigational
---

## Digital Health Technologies

**Remote Monitoring and Interventions:**

---
Connected health platforms:
  +- Continuous glucose monitoring (CGM):
  |  +- Real-time glucose trends
  |  +- Food impact visualization
  |  +- Glycemic variability
  |  +- Motivational feedback
  +- Wearable activity trackers:
  |  +- Steps, stairs, active minutes
  |  +- Heart rate zones
  |  +- Sleep monitoring
  |  +- Behavioral insights
  +- Smart scales:
  |  +- Weight trends
  |  +- Body composition (some models)
  |  +- Automatic syncing
  +- Mobile applications:
     +- Food logging and recognition
     +- Barcode scanning
     +- Photo-based tracking
     +- Portion estimation
     +- Nutrient analysis
     +- Activity integration
     +- Peer support communities
     +- Coaching platforms

AI and machine learning applications:
  +- Personalized recommendations:
  |  +- Food suggestions based on preferences
  |  +- Activity suggestions
  |  +- Adaptive goals
  |  +- Predictive modeling
  +- Computer vision:
  |  +- Food recognition from photos
  |  +- Portion size estimation
  |  +- Meal detection
  |  +- Dietary assessment
  +- Behavioral analytics:
  |  +- Pattern recognition
  |  +- Relapse prediction
  |  +- Engagement optimization
  |  +- Just-in-time interventions
  +- Predictive analytics:
     +- Weight trajectory prediction
     +- Dropout risk identification
     +- Intervention optimization
     +- Personalized feedback delivery

Evidence for digital interventions:
  +- Text messaging:
  |  +- Weight loss: ~2 kg vs. control
  |  +- Cost-effective
  |  +- Scalable
  |  +- HIPAA considerations
  +- Mobile apps:
  |  +- Variable efficacy
  |  +- Engagement key factor
  |  +- Integration with coaching improves results
  |  +- Evidence: Can be as effective as in-person
  +- Remote coaching:
  |  +- Video visits
  |  +- Secure messaging
  |  +- Digital resources
  |  +- As effective as in-person (many studies)
  |  +- Increased access, convenience
  +- Virtual reality:
     +- Exposure therapy for food cues
     +- Exercise environments
     +- Education modules
     +- Emerging application

Digital therapeutics:
  +- FDA-approved prescription digital therapeutics
  +- Evidence-based, clinically validated
  +- Insurance coverage expanding
  +- Future: AI-driven personal health assistants
---

## Long-Term Maintenance

**Metabolic Adaptation Management:**

---
Understanding persistent adaptations:
  +- Reduced resting metabolic rate (RMR):
  |  +- Beyond predicted by weight loss
  |  +- Persists long-term
  |  +- May be 5-15% below predicted
  |  +- Requires adjustment of calorie targets
  +- Increased efficiency:
  |  +- Same work costs fewer calories
  |  +- Mitochondrial efficiency
  |  +- Muscle fiber changes
  +- Decreased non-exercise activity (NEAT):
  |  +- Fidgeting reduction
  |  +- Spontaneous movement reduction
  |  +- Unconscious adaptation
  +- Hormonal adaptations:
     +- Lower leptin (hunger increases)
     +- Higher ghrelin (hunger increases)
     +- Satiety hormone changes
     +- "Satiety resistance"
     +- Food reward increases

Maintenance strategies:
  +- Higher physical activity:
  |  +- 60-90 minutes/day (NWCR)
  |  +- Both structured and lifestyle activity
  |  +- May counteract metabolic adaptation
  |  +- Best predictors: Exercise, self-weighing
  +- Dietary patterns:
  |  +- Lower calorie density
  |  +- High volume, satisfying
  |  +- Not rigid restriction
  |  +- Flexibility important
  |  +- Sustainable patterns
  +- Self-monitoring:
  |  +- Regular weighing (at least weekly)
  |  +- Food tracking periodically
  |  +- Activity monitoring
  |  +- Early intervention with regain
  +- Cognitive strategies:
  |  +- Accept realistic weight range
  |  +- Focus on health behaviors, not just weight
  |  +- Flexible restraint
  |  +- Non-perfectionist attitude
  |  +- Self-compassion
  +- Relapse prevention:
     +- Expect small regains
     +- Get back on track quickly
     +- Problem-solve setbacks
     +- Learn from experience
     +- Maintain support systems

Regain prevention:
  +- "Red flag" identification:
  |  +- Not weighing regularly
  |  +- Not tracking food intake
  |  +- Returning to old habits
  |  +- Increased stress eating
  |  +- Stopping physical activity
  +- Early intervention (5 lb regain threshold)
  +- Planned response to slip-ups
  +- Re-engagement with support
  +- Remembering "why" of lifestyle change
---`,
      keyTerms: [
        { term: 'tirzepatide', definition: 'Dual GIP/GLP-1 receptor agonist; shows superior weight loss vs. GLP-1 alone' },
        { term: 'retatrutide', definition: 'Triple agonist (GLP-1/GIP/glucagon) showing up to 24% weight loss in trials' },
        { term: 'metabolic adaptation', definition: 'Physiological adaptations to weight loss including reduced RMR, increased efficiency, hormonal changes' },
        { term: 'digital therapeutics', definition: 'Evidence-based software applications to treat medical conditions; FDA-regulated' },
        { term: 'flexible restraint', definition: 'Cognitive approach to eating that allows flexibility without rigid rules; associated with better maintenance' },
        { term: 'SURMOUNT trials', definition: 'Phase 3 clinical trials of tirzepatide for obesity and diabetes' },
        { term: 'NEAT', definition: 'Non-exercise activity thermogenesis; calories burned through fidgeting, posture, daily movement' },
      ],
      analogies: [
        'Multi-agonist drugs are like a three-pronged attack on obesity - hitting multiple targets at once.',
        'Metabolic adaptation is like your body\'s security system - it fights weight loss by conserving energy.',
        'Digital therapeutics are like having a pocket coach - guidance available 24/7.',
        'Flexible restraint is like having guidelines instead of rules - you can adapt to different situations.',
      ],
      examples: [
        'SURMOUNT-1: Tirzepatide 15 mg achieved 20.9% weight loss at 72 weeks',
        'Retatrutide phase 2: Up to 24% weight loss at highest dose (36 mg weekly)',
        'National Weight Control Registry: Successful maintainers exercise ~1 hour/day and weigh weekly',
        'Digital app studies show comparable weight loss to in-person interventions when engagement is high',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **Tirzepatide:** Now first-line consideration for many patients; superior to semaglutide in head-to-head trials. Monitor for GI side effects, titrate slowly.

2. **Maintenance:** 60-90 minutes/day physical activity is key (NWCR). Self-weighing at least weekly predicts success. Accept 5-10 lb weight fluctuations.

3. **Metabolic adaptation:** RMR may be 5-15% below predicted after weight loss. Adjust calorie targets accordingly, increase physical activity.

4. **Bariatric surgery:** Still most effective intervention. 30-60% diabetes remission. Lifelong supplementation required (B12, iron, calcium, vitamin D).

5. **NAFLD:** Weight loss of 7-10% improves NASH. Mediterranean diet best evidence. Avoid alcohol completely. Consider vitamin E (800 IU/day).

6. **Weight regain:** Most common outcome after loss. Early intervention at 5 lb regain. Re-engage support, focus on behaviors, not weight.`,
    },
  },

  media: [
    {
      id: 'energy-balance',
      type: 'diagram',
      filename: 'energy-balance.svg',
      title: 'Energy Balance',
      description: 'Components of energy expenditure and intake',
    },
    {
      id: 'bmi-chart',
      type: 'diagram',
      filename: 'bmi-chart.svg',
      title: 'Body Mass Index Categories',
      description: 'BMI ranges for underweight, normal, overweight, obese',
    },
  ],

  citations: [
    {
      id: 'obesity-guidelines-2013',
      type: 'article',
      title: 'Guidelines (2013) for Managing Overweight and Obesity in Adults',
      authors: ['Jensen MD', 'Ryan DH', 'Apovian CM', 'et al.'],
      source: 'Obesity',
      url: 'https://doi.org/10.1002/oby.20460',
    },
    {
      id: 'step-1-trial',
      type: 'article',
      title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
      authors: ['Wilding JPH', 'Bastos RH', 'Gayoso BBD', 'Bunch WA'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'nwcr-findings',
      type: 'article',
      title: 'The National Weight Control Registry: Description of the Registry and Methods',
      authors: ['R Wing', 'R Wing'],
      source: 'American Journal of Clinical Nutrition',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'endocrine-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'hepatic-nafld', targetType: 'condition', relationship: 'related', label: 'NAFLD' },
  ],

  tags: {
    systems: ['endocrine', 'gastrointestinal', 'cardiovascular'],
    topics: ['nutrition', 'obesity', 'preventive-medicine', 'metabolic'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default obesityNutrition;
