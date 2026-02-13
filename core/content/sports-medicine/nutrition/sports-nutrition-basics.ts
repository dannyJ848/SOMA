/**
 * Sports Nutrition Basics - Comprehensive Educational Content
 *
 * Covers fundamental nutrition principles for athletic performance,
 * providing foundation for understanding fueling strategies.
 */

import { EducationalContent } from '../../types';

export const sportsNutritionBasics: EducationalContent = {
  id: 'sports-med-sports-nutrition-basics',
  type: 'concept',
  name: 'Sports Nutrition Basics',
  alternateNames: ['Athletic Nutrition', 'Performance Nutrition Fundamentals'],

  levels: {
    1: {
      level: 1,
      summary: 'Sports nutrition is about eating the right foods to help your body perform well during exercise and sports.',
      explanation: `When you play sports or exercise, your body needs special fuel!

## Why Food Matters for Sports

**Food is Your Fuel**
Just like a car needs gas to run, your body needs food for energy. When you exercise, you use more fuel than when you're resting.

**The Three Main Food Groups for Athletes**

1. **Carbohydrates (Carbs)** - Your Quick Energy
   - Foods like bread, pasta, rice, and fruits
   - These give you energy fast
   - Great to eat before playing sports

2. **Protein** - Your Muscle Builder
   - Foods like chicken, fish, eggs, and beans
   - Helps your muscles grow and repair
   - Important after exercise

3. **Fats** - Your Long-Lasting Energy
   - Foods like nuts, avocados, and olive oil
   - Gives you energy that lasts a long time
   - Helps your body work properly

## Water is Super Important!

When you exercise, you sweat. Sweating cools you down but makes you lose water. You need to drink plenty of water before, during, and after exercise to stay healthy and perform your best.

## Eating Tips for Young Athletes

- Eat breakfast every day
- Have a snack 1-2 hours before sports
- Drink water throughout the day
- Eat something with protein after exercise`,
      keyTerms: [
        { term: 'carbohydrates', definition: 'Foods that give your body quick energy, like bread and pasta' },
        { term: 'protein', definition: 'Foods that help build and repair your muscles, like chicken and eggs' },
        { term: 'hydration', definition: 'Making sure your body has enough water' },
        { term: 'fuel', definition: 'The energy your body gets from food' },
      ],
      analogies: [
        'Your body is like a car - carbs are like premium fuel that burns quickly, while fats are like a bigger gas tank for longer trips.',
        'Protein is like the construction crew that repairs and builds your muscles after a workout.',
      ],
      examples: [
        'A banana before soccer practice gives you quick energy from carbs.',
        'Chocolate milk after a game provides both protein and carbs to help you recover.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sports nutrition focuses on providing the right balance of macronutrients (carbohydrates, proteins, fats) and adequate hydration to optimize athletic performance, recovery, and overall health.',
      explanation: `## Understanding Sports Nutrition

Athletes have higher nutritional needs than non-athletes because they use more energy and put more stress on their bodies during training.

## The Three Macronutrients

### Carbohydrates
- Primary fuel source during moderate-to-high intensity exercise
- Stored as glycogen in muscles and liver
- 4 calories per gram
- Types:
  - Simple carbs: Quick energy (fruits, sports drinks)
  - Complex carbs: Sustained energy (whole grains, oatmeal)

### Protein
- Essential for muscle repair and growth
- 4 calories per gram
- Athletes need more than non-athletes (1.2-2.0 g/kg body weight)
- Best sources: lean meats, fish, eggs, dairy, legumes

### Fats
- Important for hormone production and long-duration exercise
- 9 calories per gram
- Types:
  - Healthy fats: Nuts, avocados, olive oil
  - Limit: Saturated and trans fats

## Timing Your Nutrition

**Pre-Exercise (2-4 hours before)**
- Focus on carbohydrates with some protein
- Avoid high fat and fiber (slow digestion)

**During Exercise**
- Water for activities under 60 minutes
- Sports drinks for longer activities (provide carbs and electrolytes)

**Post-Exercise (within 30-60 minutes)**
- Combination of carbs and protein (3:1 or 4:1 ratio)
- Helps replenish glycogen and repair muscles

## Hydration Guidelines

- Drink 16-20 oz of water 2-3 hours before exercise
- Drink 7-10 oz every 10-20 minutes during exercise
- Replace fluids lost through sweat after exercise`,
      keyTerms: [
        { term: 'macronutrients', definition: 'The three main nutrients needed in large amounts: carbohydrates, proteins, and fats' },
        { term: 'glycogen', definition: 'The stored form of carbohydrates in muscles and liver, used for energy during exercise' },
        { term: 'electrolytes', definition: 'Minerals like sodium and potassium that help regulate fluid balance and muscle function' },
        { term: 'recovery nutrition', definition: 'The foods and drinks consumed after exercise to help the body repair and replenish' },
      ],
      analogies: [
        'Glycogen stores are like a rechargeable battery - they power your muscles but need to be recharged with carbs after use.',
        'Post-workout protein is like sending a repair crew to fix the small tears in your muscles from exercise.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sports nutrition integrates macronutrient timing, energy availability, and periodization strategies to optimize training adaptations, competitive performance, and recovery while maintaining long-term health.',
      explanation: `## Energy Balance and Availability

### Energy Requirements
- Total Daily Energy Expenditure (TDEE) = BMR + TEF + TEA + NEAT
- Athletes may require 3,000-6,000+ kcal/day depending on sport
- Energy availability (EA) = (Energy intake - Exercise expenditure) / Fat-free mass
- Target EA: 45+ kcal/kg FFM/day for optimal health

### Relative Energy Deficiency in Sport (RED-S)
- Syndrome resulting from low energy availability
- Affects: Bone health, immunity, menstrual function, cardiovascular health
- Performance impacts: Decreased strength, endurance, concentration

## Macronutrient Recommendations

### Carbohydrates
| Activity Level | CHO Requirement |
|---------------|-----------------|
| Light training | 3-5 g/kg/day |
| Moderate (1 hr/day) | 5-7 g/kg/day |
| High (1-3 hr/day) | 6-10 g/kg/day |
| Very high (4-5 hr/day) | 8-12 g/kg/day |

- Glycemic index considerations for timing
- Carbohydrate loading for endurance events (>90 min)

### Protein
- Endurance athletes: 1.2-1.4 g/kg/day
- Strength/power athletes: 1.6-2.0 g/kg/day
- Distribution: 20-40g every 3-4 hours optimal for MPS
- Quality: Complete proteins with leucine content important

### Fats
- Minimum 20% of total calories
- Essential fatty acid requirements
- Not recommended below 0.5 g/kg/day

## Nutrient Timing Strategies

### Pre-Competition
- Carbohydrate loading: 10-12 g/kg/day for 36-48 hours before event
- Pre-event meal: 1-4 g/kg carbs, 3-4 hours before
- Pre-event snack: 1 g/kg carbs, 1 hour before

### During Competition
- Events 45-75 min: Mouth rinse with carbs may enhance performance
- Events 1-2.5 hr: 30-60 g/hr carbohydrates
- Events >2.5 hr: Up to 90 g/hr (glucose + fructose)

### Post-Competition/Training
- Glycogen synthesis: 1-1.2 g/kg carbs immediately post
- Protein: 0.25-0.4 g/kg within 2 hours
- Continue carb intake every 2 hours for 4-6 hours if rapid recovery needed

## Hydration Science

### Sweat Rate Assessment
- Pre-exercise weight - Post-exercise weight + fluid consumed = sweat loss
- Individual variation: 0.5-2.5 L/hour

### Electrolyte Considerations
- Sodium: Primary electrolyte lost in sweat (200-1,500 mg/L)
- Importance increases with duration and heat
- Hyponatremia risk with overhydration`,
      keyTerms: [
        { term: 'energy availability', definition: 'Energy intake minus exercise energy expenditure, relative to fat-free mass; indicator of whether sufficient energy is available for physiological functions' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport; syndrome of impaired physiological function caused by low energy availability' },
        { term: 'glycemic index', definition: 'Measure of how quickly a carbohydrate-containing food raises blood glucose levels' },
        { term: 'muscle protein synthesis (MPS)', definition: 'The process of building new muscle proteins; stimulated by protein intake and resistance exercise' },
        { term: 'hyponatremia', definition: 'Dangerously low blood sodium levels, which can occur from excessive water intake without adequate sodium replacement' },
      ],
      clinicalNotes: 'Screen athletes for RED-S risk factors including disordered eating, menstrual dysfunction (females), and unexplained performance decrements. Energy availability <30 kcal/kg FFM/day is considered clinical low EA.',
    },
    4: {
      level: 4,
      summary: 'Advanced sports nutrition encompasses molecular mechanisms of nutrient sensing, substrate oxidation kinetics, gut training protocols, and individualized periodization strategies to maximize metabolic flexibility and sport-specific performance outcomes.',
      explanation: `## Metabolic Regulation of Fuel Selection

### Carbohydrate Metabolism
**Glycogen Kinetics:**
- Muscle glycogen: 300-600g total stores (trained)
- Liver glycogen: 80-100g
- Glycogenolysis rate: Up to 3-4 mmol/kg wet weight/min at high intensity
- Glucose transporter regulation: GLUT4 translocation with exercise

**Carbohydrate Oxidation:**
- Maximal CHO oxidation: ~1 g/min from exogenous sources
- Multiple transportable carbohydrates (glucose + fructose): Up to 1.5-1.8 g/min
- SGLT1 and GLUT5 transport limitations

### Fat Metabolism
**Lipolysis Regulation:**
- Hormone-sensitive lipase (HSL) activation via catecholamines
- ATGL for initial triglyceride hydrolysis
- Fatty acid transport: Albumin-bound, FATP, CD36
- CPT-1 regulation: Malonyl-CoA inhibition

**Maximal Fat Oxidation:**
- Fatmax typically at 45-65% VO2max
- Individual variation: 0.2-1.0 g/min
- Training status and diet history influence capacity

### Protein Metabolism During Exercise
- Leucine oxidation increases with exercise duration
- Contribution to total energy: 2-5% (higher with glycogen depletion)
- Net negative protein balance during prolonged exercise
- Amino acid signaling: mTORC1 activation post-exercise

## Gut Physiology and Nutrition

### Exercise-Induced GI Disturbances
- Splanchnic hypoperfusion: Up to 80% reduction in GI blood flow
- Intestinal barrier dysfunction: Increased permeability
- Mechanical stress from running

### Gut Training Adaptations
- Increased gastric emptying rate
- Enhanced intestinal absorption capacity
- Improved tolerance to CHO ingestion
- Protocol: Progressive CHO intake during training over 2+ weeks

### Practical Gut Training
- Start with tolerated amounts during easy sessions
- Progressively increase to competition-target intake
- Train with competition nutrition strategy
- Identify individual problem foods

## Periodized Nutrition Strategies

### Training Phases

**High-Intensity/Competition:**
- High carbohydrate availability
- Pre-session fueling
- During-session nutrition

**Moderate Training:**
- Matched CHO to training demands
- Periodization within day possible

**Low-Key/Recovery:**
- Reduced CHO if appropriate
- Protein emphasis for recovery

### Train-Low Strategies
**Rationale:**
- Enhanced oxidative enzyme expression
- Increased fat oxidation capacity
- AMPK-mediated adaptations

**Protocols:**
- Fasted training
- Low glycogen training
- Sleep low, train low
- Twice-per-day training without CHO between sessions

**Considerations:**
- May impair high-intensity training quality
- Increased cortisol and immune suppression risk
- Not for competition, only strategic training blocks

## Body Composition Strategies

### Weight Loss for Athletes
- Target: 0.5-1.0% body weight per week maximum
- Maintain protein intake: 2.0-2.4 g/kg/day
- Time restriction to off-season/early preparation
- Monitor performance and energy markers

### Weight Gain (Muscle Mass)
- Energy surplus: 350-500 kcal/day
- Protein: 1.6-2.2 g/kg/day distributed
- Combined with resistance training
- Expected gain: 0.25-0.5 kg/week lean mass`,
      keyTerms: [
        { term: 'multiple transportable carbohydrates', definition: 'Strategy using glucose plus fructose to utilize separate intestinal transporters (SGLT1, GLUT5), allowing higher exogenous CHO oxidation rates' },
        { term: 'Fatmax', definition: 'Exercise intensity at which maximal fat oxidation occurs, typically 45-65% VO2max, varying with training status and nutritional history' },
        { term: 'gut training', definition: 'Process of progressively adapting the gastrointestinal system to tolerate and absorb higher amounts of nutrients during exercise' },
        { term: 'train-low', definition: 'Periodized nutrition strategy of performing some training sessions with low carbohydrate availability to enhance oxidative adaptations' },
        { term: 'mTORC1', definition: 'Mechanistic target of rapamycin complex 1; master regulator of muscle protein synthesis, activated by amino acids (especially leucine) and mechanical stress' },
      ],
      clinicalNotes: 'Train-low strategies require careful periodization and monitoring. Athletes with history of disordered eating should not use intentional energy restriction strategies. High-protein diets (up to 2.4 g/kg) are safe in healthy individuals with no evidence of renal harm.',
    },
    5: {
      level: 5,
      summary: 'Elite sports nutrition integrates nutrigenomics, metabolomics, and individualized molecular profiling to optimize substrate utilization, leveraging emerging technologies and evidence-based practices for precision fueling strategies tailored to athlete phenotype and sport-specific demands.',
      explanation: `## Molecular Nutrition and Gene Expression

### Nutrient-Gene Interactions
**Carbohydrate-Responsive Genes:**
- ChREBP activation with high glucose
- GLUT4 transcriptional regulation
- Glycolytic enzyme expression (hexokinase, PFK, pyruvate kinase)

**Fat-Sensing Pathways:**
- PPARs (alpha, delta, gamma) activated by fatty acids
- PPAR-delta: Oxidative fiber gene expression
- PPAR-alpha: Fatty acid oxidation enzymes

**Protein/Amino Acid Signaling:**
- Leucine → mTORC1 activation → S6K1, 4E-BP1
- BCAA catabolism: BCKDH regulation
- GCN2 pathway with amino acid deficiency

### Nutrigenomics in Sports
**Genetic Variants Affecting Nutrition Response:**
| Gene | Variant | Nutritional Implication |
|------|---------|------------------------|
| PPARGC1A | Gly482Ser | Endurance trainability, fat oxidation |
| PPARD | +294T/C | Fat oxidation capacity |
| FTO | rs9939609 | Appetite regulation, obesity risk |
| MCT1 (SLC16A1) | A1470T | Lactate transport, high-intensity performance |
| CYP1A2 | *1F allele | Caffeine metabolism rate |
| ACTN3 | R577X | Fiber type distribution, power/endurance |

**Emerging Applications:**
- Genotype-guided caffeine recommendations
- Individual carbohydrate tolerance/requirements
- Fat adaptation potential prediction

## Advanced Metabolic Flexibility

### Assessing Metabolic Function
**Indirect Calorimetry:**
- RER/RQ measurement during graded exercise
- Fatmax determination
- Crossover point identification

**Metabolomics Applications:**
- Plasma metabolite profiling pre/post exercise
- Acylcarnitine profiles for fat oxidation
- Lactate kinetics and clearance capacity

### Ketogenic and Low-CHO High-Fat Approaches
**Metabolic Adaptations:**
- Time course: 3-4 weeks for keto-adaptation
- Increased fat oxidation: Up to 1.5 g/min in keto-adapted athletes
- Glycogen sparing but impaired high-intensity capacity

**Evidence Summary:**
- May benefit ultra-endurance events
- Impairs economy at high intensities (increased O2 cost per watt)
- Not recommended for sports requiring repeated high-intensity efforts
- Individual responder/non-responder variation

## Precision Hydration

### Sweat Analysis Technologies
- Wearable sweat sensors
- Sodium concentration profiling
- Individual sweat rate algorithms

### Personalized Hydration Strategies
- Sodium replacement: 300-1,000+ mg/L in replacement fluids for salty sweaters
- Fluid intake algorithms based on real-time monitoring
- Pre-cooling and hyperhydration with glycerol (where permitted)

### Thermoregulation Optimization
- Precooling strategies: Internal (ice slurry) vs. external
- Menthol: Perceptual cooling without thermoregulatory change
- Heat acclimation: Improved plasma volume and sweat response

## Performance Supplements: Evidence-Based

### Category A (Strong Evidence)
| Supplement | Mechanism | Protocol | Effect Size |
|------------|-----------|----------|-------------|
| Caffeine | Adenosine antagonism, CNS stimulation | 3-6 mg/kg, 60 min pre | 2-4% performance |
| Creatine | PCr resynthesis, cellular hydration | 5g/day or 0.1g/kg/day | 5-15% power output |
| Beta-alanine | Muscle carnosine, H+ buffering | 3-6g/day for 4+ weeks | 2-3% for 60-240s efforts |
| Sodium bicarbonate | Extracellular H+ buffering | 0.3g/kg, 60-90 min pre | 2-3% for 1-7 min efforts |
| Nitrate (beetroot) | NO production, mitochondrial efficiency | 6-12 mmol, 2-3 hr pre | 1-3% for endurance |

### Emerging/Category B
- Ketone esters: Exogenous ketones for brain fuel, glycogen sparing
- Collagen + vitamin C: Tendon/ligament support
- Tart cherry: Anti-inflammatory, sleep quality
- HMB: Muscle preservation during caloric deficit

## Special Considerations

### Female Athlete Considerations
**Menstrual Cycle Effects:**
- Follicular phase: Potentially higher CHO oxidation
- Luteal phase: Higher fat oxidation, increased protein catabolism
- Practical impact may be minimal for well-fueled athletes

**Oral Contraceptive Considerations:**
- May alter substrate utilization
- Iron status monitoring essential

### Masters Athletes
- Increased protein requirements: 1.2-2.0 g/kg/day
- Vitamin D optimization
- Omega-3 for inflammation modulation
- Leucine threshold may be higher (40g+ per meal)

### Travel and Competition Abroad
- Jet lag management: Light exposure, melatonin timing
- Food safety protocols
- Familiar food availability planning
- Altitude acclimatization nutrition`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects individual responses to nutrients and optimal dietary strategies' },
        { term: 'metabolic flexibility', definition: 'Ability to efficiently switch between carbohydrate and fat oxidation based on substrate availability and exercise demands' },
        { term: 'keto-adaptation', definition: 'Metabolic state achieved after 3-4 weeks of very low carbohydrate intake where fat and ketones become primary fuel sources' },
        { term: 'crossover point', definition: 'Exercise intensity at which carbohydrate oxidation exceeds fat oxidation; shifts with training status and nutritional history' },
        { term: 'exogenous ketones', definition: 'Supplemental ketone bodies (esters or salts) that can provide an alternative fuel source independent of dietary ketosis' },
      ],
      clinicalNotes: `Key clinical/performance applications:
1. CYP1A2 genotyping can guide caffeine dose and timing - slow metabolizers may need lower doses or earlier timing
2. Metabolomics profiling emerging as tool for monitoring adaptation and recovery status
3. LCHF/ketogenic approaches remain controversial - strong individual variation in response and performance effects
4. Female athletes may require cycle-phase consideration but well-fueled athletes often show minimal practical differences
5. Supplement contamination remains concern - third-party testing (NSF, Informed Sport) essential for competitive athletes`,
    },
  },

  media: [
    {
      id: 'macronutrient-distribution',
      type: 'diagram',
      filename: 'macronutrient-athlete-distribution.svg',
      title: 'Macronutrient Distribution for Athletes',
      description: 'Visual guide to carbohydrate, protein, and fat intake recommendations based on training load',
    },
    {
      id: 'nutrient-timing',
      type: 'diagram',
      filename: 'nutrient-timing-exercise.svg',
      title: 'Nutrient Timing Around Exercise',
      description: 'Pre, during, and post-exercise nutrition strategies',
    },
  ],

  citations: [
    {
      id: 'ioc-consensus',
      type: 'article',
      title: 'IOC Consensus Statement on Sports Nutrition',
      source: 'International Olympic Committee',
    },
    {
      id: 'acsm-nutrition',
      type: 'textbook',
      title: 'ACSM\'s Sports Medicine: A Comprehensive Review',
      source: 'American College of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-macronutrients-for-athletes', targetType: 'concept', relationship: 'child', label: 'Macronutrients for Athletes' },
    { targetId: 'sports-med-hydration-for-exercise', targetType: 'concept', relationship: 'related', label: 'Hydration for Exercise' },
    { targetId: 'sports-med-supplements-in-sport', targetType: 'concept', relationship: 'child', label: 'Supplements in Sport' },
  ],

  tags: {
    systems: ['musculoskeletal', 'gastrointestinal', 'endocrine'],
    topics: ['sports-medicine', 'nutrition', 'performance'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sportsNutritionBasics;
