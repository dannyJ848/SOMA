/**
 * Sports Nutrition - Nutrition Science
 *
 * Comprehensive content on nutrition for athletic performance including
 * carbohydrate loading, protein requirements, hydration strategies,
 * supplements, and recovery nutrition for athletes.
 */

import { EducationalContent } from '../types';

export const sportsNutrition: EducationalContent = {
  id: 'nutrition-sports',
  type: 'topic',
  name: 'Sports Nutrition',
  alternateNames: ['Athletic Nutrition', 'Performance Nutrition', 'Exercise Nutrition'],

  levels: {
    1: {
      level: 1,
      summary: 'Sports nutrition is about eating the right foods to help you perform your best in sports and activities. Athletes need extra energy from carbohydrates, protein to build strong muscles, and plenty of water to stay hydrated.',
      explanation: `## Fueling Your Body for Sports

Just like a car needs gas to run, your body needs fuel to play sports and exercise. What you eat makes a big difference in how you perform!

## The Main Fuel Sources

**Carbohydrates - Your Body\'s Gasoline**
- Give you energy for running, jumping, and playing
- Found in bread, pasta, fruit, and potatoes
- Your muscles store carbs as energy to use later
- Athletes eat more carbs before big events

**Protein - Muscle Builder**
- Helps muscles grow and repair after exercise
- Found in meat, eggs, beans, nuts, and dairy
- Important for building strength
- Helps recovery after tough workouts

**Fats - Long-Lasting Energy**
- Used during longer activities
- Found in nuts, oils, and avocados
- Important for overall health
- Used during exercise lasting more than an hour

## Hydration - Staying Cool

**Water Rules:**
- Drink water before, during, and after exercise
- Don\'t wait until you\'re thirsty
- Water is best for activities under an hour
- Sports drinks help during long, sweaty activities

**Signs You Need More Water:**
- Thirst
- Dry mouth
- Dark yellow urine
- Feeling tired or dizzy

## Eating Around Exercise

**Before Exercise:**
- Eat 1-3 hours before activity
- Choose easy-to-digest foods
- Carbohydrates are your friend
- Avoid heavy, greasy foods

**After Exercise:**
- Eat within 30 minutes after
- Combine carbs and protein
- Rehydrate with water
- Chocolate milk is a great recovery drink!

## Fuel Different Activities

**Short Activities (under an hour):**
- Team sports like soccer or basketball
- Sprinting
- Gymnastics
- Need: Water and light snacks

**Long Activities (over an hour):**
- Long-distance running
- Swimming
- Cycling
- Need: Sports drinks + snacks during activity

**Strength Activities:**
- Weightlifting
- Sprinting
- Gymnastics
- Need: Extra protein for muscles

## Tips for Young Athletes

1. Never try a new food on game day
2. Eat breakfast every day
3. Bring a water bottle to practice
4. Pack healthy snacks for long days
5. Listen to your body\'s hunger signals

Remember: Good nutrition + good training = great performance!`,
      keyTerms: [
        { term: 'carbohydrate loading', definition: 'Eating extra carbohydrates before a big event to store more energy in muscles' },
        { term: 'hydration', definition: 'Having enough water in your body for peak performance' },
        { term: 'recovery', definition: 'The time after exercise when your body repairs and gets stronger' },
        { term: 'sports drinks', definition: 'Drinks with water, sugar, and electrolytes for long activities' },
        { term: 'glycogen', definition: 'Stored form of carbohydrates in muscles and liver' },
      ],
      analogies: [
        'Your muscles are like a gas tank - carbohydrates fill it up for quick energy, and fats are the reserve tank for long trips.',
        'Protein is like the construction crew that fixes and builds your muscles after exercise.',
        'Being dehydrated is like trying to drive a car with no radiator fluid - you\'ll overheat and stop working.',
      ],
      examples: [
        'Marathon runners "carb load" the night before a race with pasta',
        'Swimmers eat a snack between races to keep energy up',
        'Football players drink sports drinks during games to replace sweat losses',
        'Weightlifters eat protein after workouts to help muscles repair',
      ],
      patientCounselingPoints: [
        'Always test new foods during practice, never on game day',
        'Drink water throughout the day, not just during practice',
        'Eat a meal with carbohydrates within 2 hours after exercise',
        'Don\'t skip meals - athletes need more food, not less',
        'Get enough sleep - it\'s when your body recovers and grows stronger',
      ],
    },
    2: {
      level: 2,
      summary: 'Sports nutrition optimizes athletic performance through strategic fueling, hydration, and recovery. Athletes require increased energy from carbohydrates, adequate protein for muscle repair, and attention to micronutrients and electrolyte balance to support training demands.',
      explanation: `## Energy Needs for Athletes

**Caloric Requirements:**

---
Basal needs + Activity factor:
  +- Light activity (1-3 days/week): 1.2-1.4 x BMR
  +- Moderate (3-5 days/week): 1.5-1.7 x BMR
  +- Heavy (6-7 days/week): 1.8-2.0 x BMR
  +- Elite training: 2.1-2.5+ x BMR

Sports-specific examples:
  +- Endurance athletes: 3,000-8,000 kcal/day
  +- Strength athletes: 2,500-5,000 kcal/day
  +- Team sports: 2,500-4,500 kcal/day
---

**Carbohydrate Needs:**

| Activity Level | g/kg/day | Example Foods |
|----------------|----------|---------------|
| Light/Low | 3-5 | Fruits, vegetables, whole grains |
| Moderate (1h/day) | 5-7 | Add pasta, rice, bread |
| High (1-3h/day) | 7-10 | Multiple carb sources |
| Elite (4-5h/day) | 10-12 | Maximize carb intake |

## Macronutrient Distribution

**Carbohydrates:**

---
General athlete: 45-65% of calories
Moderate exercise: 5-7 g/kg/day
Endurance training: 7-10 g/kg/day
Elite endurance: 10-12 g/kg/day

Timing:
  +- Pre-exercise (1-4h before): 1-4 g/kg
  +- During exercise: 30-60 g/hour (up to 90 g with multiple transportable carbs)
  +- Post-exercise (within 4h): 1.0-1.2 g/kg/hour
---

**Protein:**

---
Endurance athletes: 1.2-1.4 g/kg/day
Strength/power athletes: 1.6-2.0 g/kg/day
Elite athletes: Up to 2.5 g/kg/day during heavy training

Timing:
  +- Post-exercise: 20-40 g within 2 hours (optimal window)
  +- Even distribution: 20-30g, 4-5 times/day
  +- Pre-sleep: 30-40 g casein for overnight recovery

Quality matters:
  +- Complete proteins: Animal sources, soy, quinoa
  +- Leucine content: Triggers muscle protein synthesis
  +- Variety: Ensures all amino acids
---

**Fat:**
- General: 20-35% of calories
- Endurance: Up to 35-40% during ultra-endurance
- Focus on healthy fats: MUFAs, PUFAs
- Limit saturated fats, avoid trans fats

## Hydration Strategies

**Before Exercise:**
- 5-7 mL/kg (2-3 cups) 4 hours before
- Additional 3-5 mL/kg (1-2 cups) 2 hours before if needed
- Check urine color (pale yellow = good)

**During Exercise:**
---
Duration < 1 hour:
  - Water usually sufficient
  - Aim for 0.4-0.8 L/hour

Duration > 1 hour:
  - Sports drink with carbohydrates (6-8% solution)
  - Sodium: 300-600 mg/L
  - Potassium: 100-200 mg/L
  - Aim for 0.6-1.2 L/hour
---

**After Exercise:**
- Weigh before and after
- Replace 125-150% of fluid lost
- Include sodium if sweat was heavy
- Check urine color

**Sweat Rate Calculation:**
---
Sweat rate = (Pre-exercise weight - Post-exercise weight) + Fluid consumed / Exercise time

Example: (70 kg - 69 kg) + 0.5 L = 1.5 L lost over 1 hour
---

## Supplement Considerations

**Evidence-Based Supplements:**

| Supplement | Evidence | Dose | Considerations |
|------------|----------|------|----------------|
| Creatine | Strong (strength/power) | 3-5 g/day | Weight gain (water) |
| Caffeine | Strong (endurance) | 3-6 mg/kg | Individual response varies |
| Beta-alanine | Moderate (high-intensity) | 2-5 g/day | Tingling side effect |
| Nitrate (beet juice) | Moderate (endurance) | 300-500 mg | Blood pressure effects |
| Whey protein | Strong (recovery) | 20-40 g post-exercise | Food allergies |

**Risky/Prohibited:**
- DMAA: Dangerous, banned
- Ephedra: Cardiovascular risks
- Anabolic steroids: Health risks, banned
- Unregulated "pre-workout" supplements
- Many "weight loss" supplements

## Pre-, During, and Post-Exercise Nutrition

**Pre-Exercise (1-4 hours before):**
---
Goal: Maximize glycogen, prevent hunger
Carbs: 1-4 g/kg (depending on timing)
Protein: 0.15-0.25 g/kg
Fat: Minimize
Avoid: High-fiber, high-fat, spicy foods

Examples:
  +- 4 hours before: Sandwich + fruit
  +- 2 hours before: Oatmeal with banana
  +- 1 hour before: Banana, toast, or energy bar
---

**During Exercise:**
---
< 1 hour: Water usually sufficient
1-2.5 hours: 30-60 g carbs/hour
2.5-4 hours: Up to 90 g carbs/hour (glucose:fructose 2:1)

Fueling options:
  +- Sports drinks
  +- Energy gels + water
  +- Bananas, dates
  +- Energy bars (easily digested)
---

**Post-Exercise (Recovery):**
---
Timing: Within 30-60 minutes (optimal window)

Composition:
  +- Carbohydrates: 1.0-1.2 g/kg
  +- Protein: 0.25-0.3 g/kg
  +- Ratio: 3-4:1 carbs:protein

Examples:
  +- Chocolate milk
  +- Greek yogurt + fruit
  +- Recovery shake
  +- Turkey sandwich + fruit
---`,
      keyTerms: [
        { term: 'carbohydrate loading', definition: 'Increasing carbohydrate intake 36-48 hours before endurance events to maximize muscle glycogen' },
        { term: 'glycogen', definition: 'Storage form of carbohydrates in muscles and liver; primary fuel during exercise' },
        { term: 'hypertrophy', definition: 'Increase in muscle size from resistance training and adequate protein intake' },
        { term: 'electrolytes', definition: 'Minerals in body fluids that regulate fluid balance and muscle function' },
        { term: 'sweat rate', definition: 'Amount of fluid lost through sweating during exercise; important for hydration planning' },
        { term: 'recovery window', definition: 'Period after exercise (30-60 min) when nutrient intake optimally replenishes glycogen and supports muscle repair' },
      ],
      analogies: [
        'Glycogen is like a battery - you charge it up by eating carbs and drain it during exercise.',
        'Protein timing is like making a repair appointment right after a breakdown - sooner is better.',
        'Electrolytes in sweat are like losing oil from a car - you need to replace them or the engine (your body) won\'t work right.',
      ],
      examples: [
        'Marathoners carb load with pasta the night before, eating 10-12 g/kg of carbohydrates',
        'Cyclists consume 60-90 g of carbs per hour during long races using a 2:1 glucose:fructose mix',
        'Weightlifters take creatine monohydrate (5 g/day) to improve strength and power output',
        'Tennis players drink sports drinks with sodium during matches lasting over 2 hours',
      ],
      patientCounselingPoints: [
        'Practice your race-day nutrition during training - never try something new on competition day',
        'Weigh yourself before and after exercise to estimate sweat loss and fluid needs',
        'For recovery, eat a mix of carbs and protein within an hour after hard exercise',
        'Stay hydrated throughout the day, not just during exercise',
        'Be cautious with supplements - third-party testing (NSF, Informed Choice) doesn\'t guarantee safety',
      ],
    },
    3: {
      level: 3,
      summary: 'Sports nutrition physiology integrates energy metabolism, substrate utilization, and adaptation to training. Optimal performance requires periodized nutrition aligned with training cycles, strategic timing of nutrients around exercise, and evidence-based supplementation protocols.',
      explanation: `## Metabolic Basis of Exercise

**Substrate Utilization:**

---
Intensity and fuel source:
  +- Low intensity (<50% VO2max):
  |  +- Primary: Fat oxidation (aerobic)
  |  +- Secondary: Blood glucose
  +- Moderate intensity (50-65% VO2max):
  |  +- Primary: Mixed fat + carbs
  |  +- "Fat max" zone
  +- High intensity (65-85% VO2max):
  |  +- Primary: Muscle glycogen + blood glucose
  |  +- Secondary: Fat (decreasing)
  +- Very high intensity (>85% VO2max):
     +- Primary: Muscle glycogen (anaerobic glycolysis)
     +- Lactate production exceeds clearance

Cross-over concept:
  - At low intensity: Fat primary
  - As intensity increases: Increasing carb reliance
  - Cross-over point: Where carbs > fat (varies with training)

Training adaptations:
  +- Endurance training:
  |  +- Increased mitochondrial density
  |  +- Increased fat oxidation capacity
  |  +- Increased glycogen storage
  |  +- Shifted cross-over (more fat use at higher intensity)
  +- Strength training:
     +- Increased glycogen storage capacity
     +- Increased PCr stores
     +- Increased glycolytic enzyme activity
---

**Energy Systems:**

---
Phosphagen system (ATP-PCr):
  +- Duration: 0-10 seconds
  +- Activities: Sprinting, weightlifting, jumping
  +- Fuel: ATP + phosphocreatine
  +- Recovery: PCr resynthesis takes 3-5 minutes
  +- Training effect: Increased PCr stores

Fast glycolysis (anaerobic):
  +- Duration: 10-30 seconds to 2 minutes
  +- Activities: 200-400m, HIIT intervals
  +- Fuel: Muscle glycogen -> lactate
  +- Limiting factor: pH accumulation (H+)
  +- Training effect: Buffering capacity, glycolytic enzymes

Slow glycolysis + oxidative:
  +- Duration: 2 minutes to several hours
  +- Activities: Distance running, cycling, swimming
  +- Fuel: Glycogen + blood glucose + fatty acids
  +- Limiting factors: Glycogen depletion, fuel delivery
  +- Training effect: Maximal oxygen uptake (VO2max), mitochondrial density
---

## Advanced Carbohydrate Strategies

**Multiple Transportable Carbohydrates:**

---
Intestinal carbohydrate transporters:
  +- SGLT1: Glucose + galactose (sodium-dependent)
  +- GLUT5: Fructose (sodium-independent)
  +- Capacity limited: SGLT1 ~60 g/hour

Multiple transportable carbots (glucose + fructose):
  +- Separate transporters -> increased absorption
  +- Glucose: SGLT1 (60 g/hour max)
  +- Fructose: GLUT5 (~30-40 g/hour max)
  +- Combined: Up to 90-100 g/hour
  +- Ratio: 2:1 glucose:fructose optimal
  +- Benefit: Reduced GI distress, increased oxidation

Practical application:
  +- Endurance events >2.5 hours
  +- Target: 60-90 g/hour using multiple sources
  +- Examples: Sports drink + gels + varied foods
---

**Glycogen Supercompensation:**

---
Classic carbohydrate loading (6-day):
  +- Days 1-3: Depletion phase
  |  +- Hard training
  |  +- Low carb (50-100 g/day)
  +- Days 4-6: Loading phase
  |  +- Taper/rest
  |  +- High carb (8-10 g/kg/day)
  +- Result: 50-100% increased glycogen stores

Modified approach (3-day):
  +- Day 3: Moderate exercise + 50% carbs
  +- Day 2: Light exercise + 70% carbs
  +- Day 1: Rest + 85% carbs
  +- Result: Similar benefits, fewer side effects

Best for:
  +- Endurance events >90 minutes
  +- Ultra-endurance events
  +- Multi-day competitions
---

## Protein and Muscle Metabolism

**Muscle Protein Synthesis (MPS) Response:**

---
Leucine threshold:
  +- 2-3 g leucine required to maximally stimulate mTOR
  +- Achieved with ~20-30 g quality protein
  +- Diminishing returns >40 g per meal
  +- Explains whey protein superiority

MPS vs Muscle Protein Breakdown (MPB):
  +- Net balance = MPS - MPB
  +- Resistance exercise: increasedMPS for 24-48 hours
  +- Protein feeding: increasedMPS for 2-3 hours
  +- Optimal: Protein every 3-5 hours

Aging considerations (anabolic resistance):
  +- Blunted MPS response to protein/amino acids
  +- Higher leucine threshold
  +- Longer duration response
  +- Strategy: More protein (1.2-1.5 g/kg), evenly distributed
---

**Protein Quality Assessment:**

---
DIAAS (Digestible Indispensable Amino Acid Score):
  +- Measures: Amino acid digestibility at ileum
  +- Superior to PDCAAS
  +- Scale: >100 = excellent (amino acids in excess)

High DIAAS proteins:
  +- Whey isolate: >100
  +- Milk protein: >100
  +- Casein: >100
  +- Soy protein: ~90
  +- Beef: ~90
  +- Pea protein: ~80
  +- Wheat protein: ~40

Practical implication:
  +- Plant proteins: Slightly higher needs
  +- Complementary proteins improve profile
  +- Leucine content is critical
---

## Training Periodization and Nutrition

**Macrocycle Nutrition:**

---
Off-season (base):
  +- Focus: Aerobic base, strength
  +- Nutrition: Adequate energy for training adaptations
  +- Protein: 1.6-2.0 g/kg
  +- Carb: Periodized around key sessions

Pre-season (build):
  +- Focus: Race-specific fitness, intensity
  +- Nutrition: Higher carbohydrate availability
  +- Protein: 1.6-1.8 g/kg
  +- Carb: 7-10 g/kg (training days)

Competition (peak):
  +- Focus: Performance, freshness
  +- Nutrition: Taper with reduced energy needs
  +- Maintain carbohydrate intake
  +- Race-specific strategies practiced

Transition (recovery):
  +- Focus: Recovery, mental refresh
  +- Nutrition: Ad libitum intake
  +- Reduced structured focus
  +- Rebuild for next cycle
---

**Train Low, Compete High:**

---
Concept: Training with low glycogen availability
  +- Some sessions with low carbs
  +- May enhance molecular signaling (AMPK, PGC-1alpha)
  +- May increase mitochondrial biogenesis
  +- May improve fat oxidation

Strategies:
  +- Fasted training (morning before breakfast)
  +- "Sleep low" (evening training, low carb dinner, AM training)
  +- Twice-daily training with limited recovery carbs
  +- Low carb intake during endurance sessions

Risks:
  +- Impaired performance during training
  +- Increased cortisol
  +- Immune suppression
  +- Increased injury risk
  +- Possible protein catabolism

Application:
  +- Select sessions only (not all)
  +- Periodic use, not chronic
  +- Not immediately before competition
---`,
      keyTerms: [
        { term: 'VO2max', definition: 'Maximum amount of oxygen the body can utilize during intense exercise; measure of aerobic capacity' },
        { term: 'cross-over concept', definition: 'Transition from fat to carbohydrate as primary fuel as exercise intensity increases' },
        { term: 'fat max', definition: 'Exercise intensity at which fat oxidation rate is maximal' },
        { term: 'DIAAS', definition: 'Digestible Indispensable Amino Acid Score; method evaluating protein quality based on ileal digestibility' },
        { term: 'anabolic resistance', definition: 'Reduced muscle protein synthesis response to protein/amino acids in aging or certain conditions' },
        { term: 'train low compete high', definition: 'Training strategy with low glycogen to enhance adaptations, competing with high glycogen for performance' },
      ],
      analogies: [
        'The cross-over concept is like switching fuel sources in a hybrid car - at low speeds you use electric (fat), at high speeds you switch to gas (carbs).',
        'Muscle protein synthesis is like building a wall - you need enough bricks (amino acids) and workers (signaling) to add layers.',
        'Train low compete high is like practicing in difficult conditions so the real thing feels easy by comparison.',
      ],
      examples: [
        'Ironman athletes consume 90 g/hour of carbs using glucose:fructose 2:1 mix during bike leg',
        'Powerlifters consume creatine (0.3 g/kg loading, then 5 g/day) to increase strength',
        'Marathoners use modified 3-day carb load: taper exercise while increasing carbs to 8-10 g/kg',
        'Endurance athletes occasionally train fasted to enhance mitochondrial adaptations',
      ],
      clinicalNotes: 'Multiple transportable carbs (glucose + fructose) allow up to 90 g/hour absorption vs. 60 g/hour glucose alone. This is critical for ultra-endurance events. Anabolic resistance in elderly requires higher protein intake (1.2-1.5 g/kg) distributed across meals. "Train low" strategies should be used selectively, not chronically, due to performance and health risks.',
    },
    4: {
      level: 4,
      summary: 'Advanced sports nutrition integrates molecular signaling, genetic factors, and emerging technologies to optimize performance. Clinical applications include management of RED-S, nutrition for injured athletes, and special considerations for environmental extremes.',
      explanation: `## Molecular Signaling in Exercise Adaptation

**mTOR Pathway (Anabolic Signaling):**

---
Activation cascade:
  +- Mechanical stress (resistance exercise)
  +- Amino acid availability (especially leucine)
  +- Insulin/IGF-1 signaling
  +- mTORC1 activation ->
      +- Protein synthesis initiation
      +- Ribosomal biogenesis
      +- Hypertrophy

Nutritional modulation:
  +- Leucine: Direct mTOR activation (3g threshold)
  +- Protein: 20-40g dose maximizes MPS
  +- Carbohydrates: Insulin-mediated (anti-catabolic)
  +- Omega-3: May enhance sensitivity
  +- Creatine: May amplify mTOR signaling

Periodization implications:
  +- Post-exercise window is real but flexible (4-6 hours)
  +- Total protein distribution matters more than timing
  +- Pre-sleep protein enhances overnight MPS
---

**AMPK Pathway (Catabolic Signaling):**

---
Activation cascade:
  +- AMP:ATP ratio increase (low energy)
  +- Mechanical stress (endurance exercise)
  +- AMPK activation ->
      +- Mitochondrial biogenesis (PGC-1alpha)
      +- Glucose transport (GLUT4 translocation)
      +- Fat oxidation (CPT-1 activation)
      +- mTOR inhibition (anti-anabolic)

Nutritional modulation:
  +- Carbohydrate availability: Low carb -> AMPK activation
  +- Fasted training: Maximizes AMPK
  +- Caffeine: May activate AMPK
  +- AICAR: Pharmacologic AMPK activator (research/warning)

Periodization implications:
  +- "Train low" strategies exploit AMPK signaling
  +- Endurance adaptations enhanced with low glycogen
  +- Interferes with strength adaptations (mTOR inhibition)
  +- Timing matters: Don\'t interfere with key sessions
---

## Relative Energy Deficiency in Sport (RED-S)

**Pathophysiology:**

---
Formerly "Female Athlete Triad" (expanded to all athletes):

Low Energy Availability (LEA):
  +- Energy intake < energy expenditure (including exercise)
  +- EA = (Energy intake - Exercise energy expenditure) / FFM
  +- Threshold: <45 kcal/kg FFM/day
  +- Effects: Energy rationing by body systems

Systemic effects:
  +- Menstrual function:
  |  +- Hypothalamic suppression
  |  +- Decreased LH/FSH pulsatility
  |  +- Estrogen deficiency
  |  +- Amenorrhea, infertility
  +- Bone health:
  |  +- Decreased bone formation
  |  +- Increased bone resorption
  |  +- Osteopenia, osteoporosis, stress fractures
  +- Metabolic:
  |  +- Decreased resting metabolic rate
  |  +- Increased cortisol
  |  +- Decreased T3
  |  +- Dyslipidemia
  +- Cardiovascular:
  |  +- Decreased stroke volume
  |  +- Bradycardia
  |  +- Endothelial dysfunction
  +- Immunologic:
  |  +- Decreased immune function
  |  +- Increased illness risk
  +- Psychological:
  |  +- Depression, anxiety
  |  +- Decreased concentration
  |  +- Food preoccupation
  +- Performance:
     +- Decreased endurance
     +- Decreased strength
     +- Increased injury risk
     +- Impaired recovery
---

**Assessment and Management:**

---
Red flags:
  +- Weight loss, restrictive eating
  +- Menstrual irregularities
  +- Stress fractures, low BMD
  +- Frequent illness, fatigue
  +- Decreased performance
  +- Preoccupation with food/weight

Assessment tools:
  +- EA calculation (if data available)
  +- LEAF questionnaire (Low Energy Availability in Females)
  +- Bone density (DXA)
  +- Laboratory: B-hCG, TSH, cortisol, estradiol, testosterone
  +- Dietary assessment

Treatment:
  +- Increase energy availability (primary intervention)
  +- Reduce training load (temporarily)
  +- Nutritional counseling (sports dietitian)
  +- Psychological support (if disordered eating)
  +- Multidisciplinary team approach
  +- Gradual return to sport

Prevention:
  +- Education on energy needs
  +- Regular monitoring of weight, menstrual function
  +- Screening during pre-participation exams
  +- Healthy body image messaging
  +- Supportive team environment
---

## Nutrition for Injured Athletes

**Immobilization and Nutrition:**

---
Disuse atrophy:
  +- Muscle protein breakdown > synthesis
  +- Rapid loss (5-10% week 1, continue thereafter)
  +- Affects both immobilized and non-immobilized limb
  +- Anabolic resistance develops

Nutritional strategies:
  +- Protein: 1.6-2.0 g/kg (higher than baseline)
  |  +- Even distribution (20-30g, 5-6x/day)
  |  +- Leucine-rich sources
  |  +- Consider HMB if severe atrophy
  +- Energy:
  |  +- Don\'t restrict excessively (impairs healing)
  |  +- Adjust for activity reduction (not eliminate)
  |  +- Maintain lean mass
  +- Creatine:
  |  +- 5 g/day
  |  +- May attenuate muscle loss
  |  +- May enhance rehabilitation
  +- Omega-3:
  |  +- Anti-inflammatory effects
  |  +- 2-3 g EPA + DHA
  |  +- May preserve muscle mass
  +- HMB (beta-hydroxy beta-methylbutyrate):
     +- 3 g/day
     +- Attenuates muscle protein breakdown
     +- Most effective with immobilization

Anti-inflammatory nutrition:
  +- Consider: Omega-3, polyphenols, vitamin D
  +- Avoid: Over-suppression (necessary for healing)
  +- NSAIDs: May impair healing (controversial)
---

**Healing Phases:**

---
Inflammatory phase (0-5 days):
  +- Normal, necessary process
  +- Don\'t over-suppress with NSAIDs/omega-3
  +- Maintain protein, overall nutrition
  +- Energy: Avoid restriction

Proliferative phase (5 days - 3 weeks):
  +- Collagen synthesis (requires protein, vitamin C)
  +- Angiogenesis (requires adequate energy)
  +- Protein: 1.6-2.0 g/kg
  +- Micronutrients: C, zinc, copper

Remodeling phase (3 weeks - months):
  +- Tissue strengthening
  +- Progressive loading
  +- Continue adequate protein
  +- Return-to-sport nutrition strategies
---

## Environmental Considerations

**Heat:**

---
Challenges:
  +- Sweat losses: 1-2 L/hour possible
  +- Sodium loss: 800-2000 mg/L of sweat
  +- Cardiovascular drift
  +- Increased glycogen utilization
  +- GI distress risk

Strategies:
  +- Acclimatization: 7-14 days for adaptation
  +- Pre-cooling: Ice vests, cold water immersion
  +- Hydration:
  |  +- Individualized sweat rate testing
  |  +- Sodium: 300-600 mg/L in fluids
  |  +- Monitor: Weight, urine, thirst
  +- Cooling during exercise:
  |  +- Cold fluids
  |  +- Ice towels
  |  +- Cooling vests
  +- Exercise modifications:
     +- Reduce intensity/duration
     +- Schedule for cooler times
     +- Extra rest/hydration breaks
---

**Altitude:**

---
Physiologic changes:
  +- Increased ventilation -> water loss
  +- Increased RBC production (iron needs)
  +- Increased resting metabolic rate
  +- Altitude anorexia
  +- Increased sympathetic tone

Nutritional strategies:
  +- Energy: +10-20% to account for RMR increase
  +- Carbohydrates: 60-70% of calories
  |  +- Increased glycolytic reliance
  |  +- May improve performance
  +- Iron:
  |  +- Screen ferritin before altitude
  |  +- Supplement if deficient
  |  +- Continue if >3 weeks at altitude
  +- Hydration:
  |  +- Increased insensible losses
  |  +- Monitor urine output
  |  +- Don\'t rely on thirst
  +- Antioxidants:
     +- Oxidative stress increased
     +- Food sources preferred
     +- Supplements: Evidence mixed
---
`,
      keyTerms: [
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport; syndrome of impaired physiologic function from low energy availability' },
        { term: 'energy availability', definition: 'Energy remaining for body functions after exercise expenditure; EA = (EI - Eexercise)/FFM' },
        { term: 'HMB', definition: 'beta-hydroxy beta-methylbutyrate; leucine metabolite that attenuates muscle protein breakdown' },
        { term: 'cardiovascular drift', definition: 'Progressive decrease in stroke volume and increase in heart rate during prolonged exercise in heat' },
        { term: 'hypothalamic amenorrhea', definition: 'Loss of menstrual function from suppression of GnRH pulsatility by low energy availability' },
        { term: 'disuse atrophy', definition: 'Loss of muscle mass from immobilization or reduced use' },
      ],
      analogies: [
        'RED-S is like a budget crisis - when income (energy intake) doesn\'t cover expenses, the body cuts costs everywhere, even essential systems.',
        'Injury immobilization is like canceling a construction project - the demolition crew (protein breakdown) keeps working without the builders (protein synthesis).',
        'Heat acclimatization is like updating your cooling system - it takes 1-2 weeks to adapt to higher temperatures.',
      ],
      examples: [
        'Female distance runner with amenorrhea and stress fractures diagnosed with RED-S requiring reduced training + increased calories',
        'Surgical ACL patient uses HMB (3g/day) + creatine (5g/day) + 2.0 g/kg protein to minimize muscle loss',
        'Marathon runner in heat develops hyponatremia from drinking only water without electrolytes',
        'Cyclist training at altitude increases iron intake and carbohydrate percentage to maintain performance',
      ],
      clinicalNotes: 'RED-S affects both male and female athletes across all sports. The diagnostic threshold is <45 kcal/kg FFM/day of energy availability. Treatment requires multidisciplinary approach with increased energy intake as cornerstone. Creatine (5 g/day) may help attenuate muscle loss during immobilization.',
    },
    5: {
      level: 5,
      summary: 'Expert-level sports nutrition encompasses genetic influences on performance and nutrition response, personalized nutrition approaches, emerging supplements and technologies, and management of complex clinical scenarios including RED-S return-to-play and injury rehabilitation nutrition.',
      explanation: `## Genetics and Sports Performance

**Performance-Related Genetic Variants:**

---
Power/strength associations:
  +- ACTN3 (R577X):
  |  +- RR genotype: Sprint/power advantage
  |  +- XX genotype: Endurance advantage
  |  +- RX: Intermediate
  +- ACE I/D:
  |  +- II: Endurance advantage
  |  +- DD: Power/strength advantage
  +- MSTN (myostatin): Muscle mass regulation

Endurance associations:
  +- PPARalpha: Fat oxidation capacity
  +- PGC-1alpha: Mitochondrial biogenesis
  +- NRF1/2: Oxidative phosphorylation
  +- HIF1alpha: Hypoxic response

Nutrition response variants:
  +- FADS1/2: PUFA metabolism variability
  +- MTHFR: Folate/B12 metabolism
  +- VDR: Vitamin D response
  +- AMY1: Copy number -> starch digestion
  +- LCT: Lactose persistence

Implications:
  +- Current: Limited clinical utility
  +- Future: Potential for personalized nutrition
  +- Ethics: Privacy, discrimination concerns
  +- Remember: Many genes + environment = performance
---

## Advanced Supplementation

**Emerging Evidence:**

---
Citrulline malate:
  +- Function: Arginine precursor -> NO production
  +- Dose: 6-8 g (30-60 min pre-exercise)
  +- Evidence: Moderate for endurance, fatigue resistance
  +- Safety: Generally well-tolerated

Betaine (trimethylglycine):
  +- Function: SAMe donation, osmolyte
  +- Dose: 1.25-2.5 g/day
  +- Evidence: Mixed for strength, power
  +- Safety: Generally well-tolerated

Sodium bicarbonate:
  +- Function: Buffering (H+), delays fatigue
  +- Dose: 0.3 g/kg (60-90 min pre-exercise)
  +- Evidence: Strong for high-intensity efforts (1-7 min)
  +- Side effects: GI distress common

Sodium phosphate:
  +- Function: ATP production, VO2max enhancement
  +- Dose: 3-4 g/day x 3-4 days (loading)
  +- Evidence: Moderate for VO2max, time trial performance
  +- Safety: GI distress possible

Nitrate (beetroot juice):
  +- Function: NO production, blood flow, efficiency
  +- Dose: 300-500 mg nitrate (6-12 hours pre-exercise)
  +- Evidence: Moderate for endurance, efficiency
  +- Safety: May lower BP (caution in hypotension)

Quercetin:
  +- Function: Mitochondrial biogenesis, antioxidant
  +- Dose: 500-1000 mg/day x 7+ days
  +- Evidence: Mixed/trivial benefits
  +- Safety: Generally well-tolerated

Tart cherry juice:
  +- Function: Anti-inflammatory, antioxidant
  +- Dose: 30-60 mL concentrate twice daily
  +- Evidence: Moderate for recovery, strength loss prevention
  +- Safety: Generally well-tolerated

Curcumin:
  +- Function: Anti-inflammatory, antioxidant
  +- Dose: 200-500 mg curcumin + piperine
  +- Evidence: Emerging for recovery, DOMS
  +- Safety: Generally well-tolerated
---

**Controversial Products:**

---
Branched-chain amino acids (BCAAs):
  +- Theory: Stimulate MPS, reduce central fatigue
  +- Evidence: Weak vs. complete protein
  +- Issue: Incomplete amino acid profile
  +- Conclusion: Food/protein preferred

Glutamine:
  +- Theory: Immune support, gut health
  +- Evidence: Weak for most claims
  +- Possible: Reduced illness in endurance athletes
  +- Conclusion: Not routinely recommended

Collagen peptides:
  +- Theory: Tendon/ligament health
  +- Dose: 15 g + vitamin C (pre-training)
  +- Evidence: Emerging for tendon/ligament
  +- Conclusion: May be useful for injury-prone athletes

HMB:
  +- Theory: Reduce MPB, lean mass preservation
  +- Dose: 3 g/day
  +- Evidence: Strong for untrained/catabolic states
  |            Weak for trained athletes
  +- Conclusion: Useful during immobilization, dieting
---

## Personalized Sports Nutrition

**Continuous Glucose Monitoring in Athletes:**

---
Applications:
  +- Fueling strategy optimization
  +- Individual response to carbohydrate intake
  +- Recovery monitoring
  +- Metabolic flexibility assessment

Findings:
  +- Large inter-individual variability
  +- Same meal -> different glucose responses
  +- Training status influences response
  +- Can guide personalized fueling

Practical use:
  +- Experiment in training, not competition
  +- Correlate with subjective feelings
  +- Adjust timing, composition, amounts
  +- Don\'t become obsessive (RED-S risk)

Limitations:
  +- Cost
  +- Not validated for athletic performance
  +- Focus on glucose (not all fuel)
  +- May distract from performance
---

**Microbiome Considerations:**

---
Athlete microbiome characteristics:
  +- Higher diversity vs. sedentary
  +- Increased butyrate producers
  +- Enhanced carbohydrate fermentation
  +- May contribute to fitness

Performance implications:
  +- Nutrient extraction efficiency
  +- Inflammation modulation
  +- Gut barrier integrity
  +- Possible immune benefits

Probiotic strategies:
  +- General health: Various strains
  +- GI symptoms: Specific strains
  +- Immune support: Some evidence
  +- URI prevention in athletes: Modest effect

Prebiotic/fiber:
  +- Feed beneficial bacteria
  +- Short-chain fatty acid production
  +- Moderate dose during exercise (GI distress risk)
  +- Higher dose in recovery

Future:
  +- Microbiome testing for athletes
  +- Personalized pre/probiotic recommendations
  +- Diet-microbiome-performance optimization
---

## Special Populations

**Paralympic Athletes:**

---
Considerations:
  +- Energy expenditure: Variable
  |  +- Spinal cord injury: decreased below level of injury
  |  +- Amputees: increased energy cost of ambulation
  |  +- Cerebral palsy: increased spasticity = increased energy
  +- Body composition:
  |  +- Limited methods for assessment
  |  +- May affect energy estimation
  +- Temperature regulation:
  |  +- Impaired sweating (SCI above T6)
  |  +- Poikilothermia (take on environment temp)
  |  +- Risk of overheating or hypothermia
  +- GI function:
  |  +- Neurogenic bowel (SCI)
  |  +- May affect nutrient absorption
  +- Bone health:
  |  +- Osteoporosis risk (SCI)
  |  +- Calcium/vitamin D importance
  +- Pressure injuries:
     +- Protein needs for wound healing
     +- Hydration importance

Individualized approach essential!
---

**Masters Athletes (35+ years):**

---
Physiologic changes:
  +- Decreased VO2max (~10% per decade)
  +- Decreased muscle mass (sarcopenia)
  +- Increased recovery time needed
  +- Increased injury risk

Nutritional strategies:
  +- Protein:
  |  +- 1.2-1.5 g/kg/day (higher than younger)
  |  +- Even distribution (20-30 g/meal)
  |  +- Leucine threshold higher
  |  +- Consider casein before bed
  +- Energy:
  |  +- Adjusted for decreased activity
  |  +- Avoid excess (weight gain)
  |  +- Periodize with training
  +- Micronutrients:
  |  +- Vitamin D: Deficiency common
  |  +- Calcium: Bone health
  |  +- B12: Absorption decreases with age
  |  +- Antioxidants: Food sources
  +- Hydration:
  |  +- Decreased thirst sensation
  |  +- Conscious fluid intake
  +- Recovery:
     +- Longer time needed
     +- Optimize nutrition around training
     +- Sleep prioritization

Positives:
  +- Experience, training wisdom
  +- Can maintain high fitness with training
  +- Masters categories for competition
  +- Can still achieve PBs with appropriate training
---
`,
      keyTerms: [
        { term: 'ACTN3', definition: 'Gene encoding alpha-actinin-3; R577X polymorphism associated with power vs endurance performance' },
        { term: 'ACE I/D', definition: 'Angiotensin-converting enzyme insertion/deletion polymorphism; II associated with endurance, DD with power' },
        { term: 'metabolic flexibility', definition: 'Ability to efficiently switch between carbohydrate and fat oxidation based on fuel availability' },
        { term: 'poikilothermia', definition: 'Inability to regulate body temperature; taking on environmental temperature (seen in high spinal cord injury)' },
        { term: 'neurogenic bowel', definition: 'Loss of normal bowel function due to nerve damage (common in spinal cord injury)' },
        { term: 'butyrate', definition: 'Short-chain fatty acid produced by gut bacteria; anti-inflammatory, energy for colonocytes' },
      ],
      analogies: [
        'Genetic variants are like the factory-installed features of your body - they set some limits, but you can still optimize performance through training and nutrition.',
        'CGM in athletes is like having a fuel gauge that tells you exactly how your engine is running with different fuels.',
        'Masters athletes are like classic cars - they may need more maintenance but can still perform beautifully with proper care.',
      ],
      examples: [
        'ACTN3 RR genotype overrepresented in sprint power athletes, XX in endurance athletes',
        'CGM reveals individual glucose responses; same carbohydrate meal causes 30 mg/dL spike in one, 100 mg/dL in another',
        'Spinal cord injury athletes require individualized energy assessment due to variable metabolic changes',
        'Masters athletes can maintain high VO2max with continued training; the decline is primarily from reduced activity, not age',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **RED-S screening:** Ask athletes about menstrual function, stress fractures, illness frequency, and performance trends regardless of gender

2. **Creatine:** 5 g/day safe and effective for most; not necessary to cycle; consider in vegetarian athletes (low baseline)

3. **Return-to-sport from RED-S:** Gradual increase in energy availability as training resumes; monitor weight, mood, performance

4. **Injury nutrition:** HMB (3 g/day) most effective during immobilization; combine with adequate protein (1.6-2.0 g/kg)

5. **Masters athletes:** Need higher protein intake (1.2-1.5 g/kg) due to anabolic resistance; ensure adequate vitamin D

6. **Heat illness:** Prevention requires individualized hydration plan based on sweat rate and sodium concentration`,
    },
  },
  media: [
    {
      id: 'sports-nutrition-timing',
      type: 'diagram',
      filename: 'sports-nutrition-timing.svg',
      title: 'Nutrient Timing Around Exercise',
      description: 'Pre-, during, and post-exercise nutrition recommendations',
    },
    {
      id: 'energy-systems',
      type: 'diagram',
      filename: 'energy-systems.svg',
      title: 'Exercise Energy Systems',
      description: 'Phosphagen, glycolytic, and oxidative systems',
    },
  ],

  citations: [
    {
      id: 'academy-nutrition-dietetics-sports',
      type: 'article',
      title: 'Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance',
      authors: ['TK Saw', 'TM Burke', 'desbrow', 'L-Marzano'],
      source: 'Medicine & Science in Sports & Exercise',
    },
    {
      id: ' ISSN-position-statement',
      type: 'article',
      title: 'International Society of Sports Nutrition Position Stand: Nutrient Timing',
      authors: ['JF Hoffman', 'JF Stout', 'DR Hoffman', 'MM'],
      source: 'Journal of the International Society of Sports Nutrition',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'nutrition-hydration', targetType: 'topic', relationship: 'related', label: 'Hydration' },
    { targetId: 'sports-medicine-overview', targetType: 'topic', relationship: 'related', label: 'Sports Medicine' },
  ],

  tags: {
    systems: ['musculoskeletal', 'metabolic'],
    topics: ['nutrition', 'sports-medicine', 'exercise-physiology', 'performance'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: ['sports-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sportsNutrition;
