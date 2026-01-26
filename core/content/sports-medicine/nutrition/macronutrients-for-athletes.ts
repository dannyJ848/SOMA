/**
 * Macronutrients for Athletes - Comprehensive Educational Content
 *
 * Detailed coverage of carbohydrate, protein, and fat requirements
 * for optimal athletic performance and recovery.
 */

import { EducationalContent } from '../../types';

export const macronutrientsForAthletes: EducationalContent = {
  id: 'sports-med-macronutrients-for-athletes',
  type: 'concept',
  name: 'Macronutrients for Athletes',
  alternateNames: ['Athletic Macros', 'Sports Macronutrient Requirements'],

  levels: {
    1: {
      level: 1,
      summary: 'Athletes need to eat the right amounts of carbohydrates, proteins, and fats to fuel their bodies and build strong muscles.',
      explanation: `Your body needs three main types of food to play sports well!

## The Three Power Foods

### Carbohydrates - Your Energy Food
- Found in: Bread, pasta, rice, fruits, cereals
- What they do: Give you energy to run, jump, and play
- When to eat: Before and after sports

### Protein - Your Muscle Food
- Found in: Chicken, fish, eggs, milk, beans
- What they do: Build and fix your muscles
- When to eat: After exercise, with every meal

### Fats - Your Super Fuel
- Found in: Nuts, cheese, avocado, olive oil
- What they do: Give you energy that lasts a long time
- When to eat: Throughout the day, in small amounts

## How Much Do Athletes Need?

Athletes need MORE food than kids who don't play sports because:
- You use more energy during practice and games
- Your muscles need extra building blocks
- Your body works harder and needs more fuel

## Simple Tips

- Eat colorful foods at every meal
- Don't skip breakfast - it's your morning fuel!
- Have a healthy snack before practice
- Drink water with every meal`,
      keyTerms: [
        { term: 'carbohydrates', definition: 'Energy foods like bread, pasta, and fruit' },
        { term: 'protein', definition: 'Muscle-building foods like chicken, eggs, and beans' },
        { term: 'fats', definition: 'Long-lasting energy foods like nuts and cheese' },
      ],
      analogies: [
        'Carbs are like kindling that burns fast to start a fire, while fats are like big logs that burn slowly all night.',
        'Protein is like LEGO blocks that your body uses to build and repair muscles.',
      ],
      examples: [
        'A peanut butter sandwich gives you all three: bread (carbs), peanut butter (protein and fat).',
        'Spaghetti with meat sauce before a game gives you carbs and protein.',
      ],
    },
    2: {
      level: 2,
      summary: 'Athletes require specific amounts of carbohydrates for energy, protein for muscle repair, and fats for hormone production and sustained energy, with requirements varying based on sport type and training intensity.',
      explanation: `## Understanding Macronutrients

### Carbohydrates
**What They Do:**
- Primary fuel source for moderate-to-high intensity exercise
- Stored as glycogen in muscles and liver
- Only fuel source for the brain

**How Much:**
- Active teens: 5-7 grams per kilogram of body weight
- More for endurance sports (8-10 g/kg)

**Best Sources:**
- Complex: Whole grains, oatmeal, brown rice, sweet potatoes
- Simple: Fruits, honey (good around exercise time)

### Protein
**What It Does:**
- Repairs muscle damage from training
- Builds new muscle tissue
- Supports immune system

**How Much:**
- Athletes: 1.2-2.0 grams per kilogram of body weight
- More for strength sports (1.6-2.0 g/kg)
- Spread throughout the day (every 3-4 hours)

**Best Sources:**
- Complete proteins: Eggs, chicken, fish, beef, dairy
- Plant sources: Beans + rice together, soy, quinoa

### Fats
**What They Do:**
- Energy for low-intensity activities
- Help absorb vitamins (A, D, E, K)
- Essential for hormone production

**How Much:**
- 20-35% of total calories
- Don't go too low (affects hormones)

**Best Sources:**
- Healthy: Avocados, nuts, olive oil, fatty fish
- Limit: Fried foods, processed snacks

## Timing Matters

| When | What to Eat |
|------|-------------|
| 3-4 hours before | Full meal with all macros |
| 1 hour before | Light carb snack |
| During (if >1 hour) | Simple carbs, fluids |
| Within 30-60 min after | Carbs + protein (3:1 ratio) |`,
      keyTerms: [
        { term: 'glycogen', definition: 'The stored form of carbohydrates in your muscles and liver' },
        { term: 'complete protein', definition: 'A protein source containing all essential amino acids your body needs' },
        { term: 'essential fats', definition: 'Fats your body cannot make and must get from food (omega-3 and omega-6)' },
        { term: 'g/kg', definition: 'Grams per kilogram of body weight - how we calculate individual needs' },
      ],
      analogies: [
        'Your glycogen stores are like a phone battery - you need to recharge them after they get depleted.',
        'Eating protein throughout the day is like making steady deposits in your muscle bank account.',
      ],
    },
    3: {
      level: 3,
      summary: 'Athletic macronutrient requirements are sport-specific, involving periodized carbohydrate intake based on training demands, protein distribution for optimized muscle protein synthesis, and strategic fat intake to support hormonal and metabolic functions.',
      explanation: `## Carbohydrate Requirements

### Daily Carbohydrate Recommendations
| Training Load | CHO Requirement |
|--------------|-----------------|
| Light (low intensity/skill) | 3-5 g/kg/day |
| Moderate (~1 hr/day) | 5-7 g/kg/day |
| High (1-3 hr moderate-high) | 6-10 g/kg/day |
| Very High (4-5+ hr) | 8-12 g/kg/day |

### Glycemic Index Considerations
- High GI foods (>70): Rapid absorption, good during/post exercise
- Low GI foods (<55): Sustained energy, good for pre-event meals
- Moderate GI: Flexible use

### Carbohydrate Loading
- For events >90 minutes
- Protocol: 10-12 g/kg/day for 36-48 hours before event
- Taper training during loading period
- Can increase glycogen stores by 50-100%

## Protein Requirements

### Quantity Recommendations
- Endurance athletes: 1.2-1.6 g/kg/day
- Strength/power athletes: 1.6-2.2 g/kg/day
- During caloric restriction: Up to 2.4 g/kg/day

### Distribution and Timing
- Optimal per meal: 0.25-0.4 g/kg (typically 20-40g)
- Every 3-4 hours for maximal MPS
- Pre-sleep protein (casein): 30-40g beneficial for overnight MPS

### Protein Quality
- Leucine content critical (threshold: ~2-3g)
- High-quality sources: Whey, eggs, meat, fish, dairy
- Plant proteins may require higher total amounts
- Digestible Indispensable Amino Acid Score (DIAAS)

## Fat Requirements

### Baseline Recommendations
- Minimum: 20% of total energy intake
- General range: 20-35% of calories
- Should not drop below 0.5-1.0 g/kg/day

### Essential Fatty Acids
**Omega-3 Fatty Acids:**
- EPA and DHA: Anti-inflammatory, recovery support
- Sources: Fatty fish, fish oil, algae supplements
- Recommended: 1-2g EPA+DHA daily for athletes

**Omega-6 Fatty Acids:**
- Generally abundant in Western diets
- Optimal omega-6:omega-3 ratio: 2:1 to 4:1

### Performance Considerations
- Low fat intake impairs testosterone production
- Medium-chain triglycerides (MCTs): Rapidly absorbed, used for energy
- High-fat pre-exercise meals: Slow gastric emptying, avoid before competition

## Practical Applications

### Sample Daily Distribution (75kg Endurance Athlete)
| Meal | Timing | CHO (g) | Protein (g) | Fat (g) |
|------|--------|---------|-------------|---------|
| Breakfast | 7 AM | 80 | 30 | 15 |
| Snack | 10 AM | 40 | 15 | 10 |
| Lunch | 12 PM | 90 | 35 | 20 |
| Pre-training | 3 PM | 60 | 10 | 5 |
| Post-training | 6 PM | 80 | 30 | 5 |
| Dinner | 7:30 PM | 70 | 35 | 25 |
| Pre-sleep | 9:30 PM | 20 | 30 | 10 |

Total: ~440g CHO (5.9 g/kg), ~185g protein (2.5 g/kg), ~90g fat`,
      keyTerms: [
        { term: 'muscle protein synthesis (MPS)', definition: 'The process of building new muscle proteins, stimulated by protein intake and exercise; peaks 1-3 hours post-ingestion' },
        { term: 'leucine', definition: 'Essential amino acid that triggers MPS; threshold of ~2-3g needed per meal for maximal stimulation' },
        { term: 'DIAAS', definition: 'Digestible Indispensable Amino Acid Score; measure of protein quality accounting for digestibility and amino acid profile' },
        { term: 'glycemic index', definition: 'Ranking of carbohydrates based on how quickly they raise blood glucose; scale of 0-100' },
        { term: 'carbohydrate loading', definition: 'Strategy of maximizing muscle glycogen stores before endurance events through high CHO intake and reduced training' },
      ],
      clinicalNotes: 'Monitor for signs of Relative Energy Deficiency in Sport (RED-S) when athletes restrict macronutrients. Low fat intake (<20% calories) can impair hormone production and should be avoided, especially in female athletes.',
    },
    4: {
      level: 4,
      summary: 'Advanced macronutrient management integrates molecular signaling pathways, substrate oxidation kinetics, and periodization strategies to optimize metabolic adaptations, body composition, and performance outcomes specific to athletic discipline and training phase.',
      explanation: `## Carbohydrate Metabolism in Exercise

### Glycogen Dynamics
**Muscle Glycogen:**
- Storage capacity: 300-600g (trained), ~15g/kg muscle
- Utilization rate: 1-4 mmol/kg wet weight/min at high intensity
- Super-compensation: Up to 150-200% of normal with proper loading

**Glycogenolysis Regulation:**
- Epinephrine → β-receptor → cAMP → PKA → phosphorylase kinase → glycogen phosphorylase
- Ca2+ release during contraction activates phosphorylase kinase
- AMP allosteric activation of phosphorylase

### Exogenous Carbohydrate Oxidation
**Single Transportable CHO:**
- Glucose: SGLT1-mediated intestinal absorption
- Maximum oxidation: ~1.0-1.1 g/min

**Multiple Transportable CHO:**
- Glucose + fructose combination
- Fructose: GLUT5 transporter (different pathway)
- Maximum oxidation: 1.5-1.8 g/min
- Optimal ratio: 2:1 glucose:fructose or maltodextrin:fructose

### Training the Gut
- GI system adapts to increased CHO intake during exercise
- Upregulation of SGLT1 transporters
- Improved gastric emptying
- Protocol: Progressive increase over 2-4 weeks

## Protein Metabolism and MPS

### Molecular Signaling
**mTORC1 Activation:**
- Leucine sensing via Sestrin2 and CASTOR1
- RAG GTPases recruit mTORC1 to lysosomal surface
- Rheb-GTP activates mTORC1 catalytic activity
- Downstream: S6K1, 4E-BP1 → ribosomal biogenesis, translation

**Muscle Full Effect:**
- MPS peaks at 20-40g protein per meal (0.25-0.4 g/kg)
- Additional protein → increased oxidation, not more MPS
- Refractory period: 3-4 hours before muscle responds to next protein dose

### Protein Timing Research
**Anabolic Window:**
- Post-exercise MPS sensitivity: Enhanced for 24-48 hours
- Immediate post-exercise protein: Beneficial but not critical if daily intake adequate
- Pre-exercise protein: Equally effective for MPS

**Pre-Sleep Protein:**
- 30-40g casein before sleep
- Sustains overnight MPS
- May enhance recovery and adaptation
- Particularly beneficial during intensive training blocks

### Protein for Different Goals
| Goal | Protein (g/kg/d) | Distribution | Notes |
|------|-----------------|--------------|-------|
| Muscle maintenance | 1.2-1.6 | 4 meals | Endurance athletes |
| Hypertrophy | 1.6-2.2 | 4-5 meals | Strength athletes |
| Fat loss with LBM preservation | 2.0-2.4 | 4-5 meals | Higher frequency meals |
| Injury recovery | 2.0-2.5 | 5+ meals | Prevent disuse atrophy |

## Fat Metabolism

### Lipid Oxidation Kinetics
**Fatmax Zone:**
- Intensity of maximal fat oxidation
- Typically 45-65% VO2max
- Higher in trained vs. untrained
- Individual variation: 0.2-1.0 g/min

**Determinants of Fat Oxidation:**
- Training status (oxidative enzyme content)
- CHO availability (insulin, muscle glycogen)
- Exercise intensity and duration
- Diet history (fat adaptation)

### Hormonal Regulation
**Lipolysis:**
- Catecholamines → β-adrenergic receptors → HSL activation
- Insulin: Potent inhibitor of lipolysis
- Fasting and exercise: Enhanced lipolysis

**Impact of Dietary Fat on Hormones:**
- Low fat diets (<20%): Reduced testosterone in men
- Essential fatty acid deficiency: Impaired prostaglandin synthesis
- Omega-3s: Reduce inflammatory signaling (NF-κB inhibition)

### Ketogenic and LCHF Approaches
**Metabolic Adaptations:**
- Increased fat oxidation capacity
- Ketone body utilization for fuel
- Glycogen sparing at submaximal intensities

**Performance Implications:**
- May benefit ultra-endurance (>3-4 hours)
- Impairs high-intensity performance
- Increased oxygen cost per unit power
- 3-4 weeks minimum for adaptation

## Periodized Nutrition

### Competition Periodization
| Phase | CHO | Protein | Fat |
|-------|-----|---------|-----|
| General Prep | Moderate (5-7 g/kg) | High (1.6-2.0 g/kg) | Moderate (1 g/kg) |
| Specific Prep | High (6-10 g/kg) | Moderate (1.4-1.8 g/kg) | Moderate |
| Competition | Very High (8-12 g/kg) | Moderate | Low |
| Recovery/Transition | Low-Moderate (3-5 g/kg) | High | Higher |

### Train-Low, Compete-High
**Strategies:**
- Fasted training for some sessions
- Overnight fast (sleep low) after evening training
- Twice-daily training without CHO between sessions

**Molecular Rationale:**
- Low glycogen → AMPK activation
- Enhanced PGC-1α signaling
- Increased mitochondrial biogenesis
- Upregulated fat oxidation genes`,
      keyTerms: [
        { term: 'SGLT1', definition: 'Sodium-glucose cotransporter 1; primary intestinal transporter for glucose absorption, rate-limiting for exogenous CHO oxidation' },
        { term: 'muscle full effect', definition: 'Phenomenon where muscle protein synthesis plateaus at ~20-40g protein per meal, with excess amino acids oxidized rather than incorporated into muscle' },
        { term: 'Fatmax', definition: 'Exercise intensity eliciting maximal fat oxidation; influenced by training status, diet, and individual variation' },
        { term: 'train-low compete-high', definition: 'Periodization strategy performing selected training with low CHO availability for adaptation while competing with high CHO for performance' },
        { term: 'super-compensation', definition: 'Process of achieving above-normal glycogen stores through depletion followed by high CHO intake' },
      ],
      clinicalNotes: 'LCHF/ketogenic approaches require 3-4 week adaptation period. During this time, performance typically declines before stabilizing. Not recommended for sports requiring repeated high-intensity efforts. Monitor athletes for signs of energy deficiency when implementing train-low strategies.',
    },
    5: {
      level: 5,
      summary: 'Precision sports nutrition leverages nutrigenomics, metabolomics, and molecular phenotyping to individualize macronutrient prescriptions, integrating cutting-edge research on substrate flux, signaling pathway interactions, and adaptive responses to optimize performance outcomes and long-term health.',
      explanation: `## Nutrigenomic Influences on Macronutrient Requirements

### Carbohydrate-Related Polymorphisms
**AMY1 Copy Number Variation:**
- Higher AMY1 copies: Increased salivary amylase
- Better starch digestion and tolerance
- Population variation: 2-15 copies
- Implications for high-starch diet tolerance

**GLUT2 and GLUT4 Variants:**
- SLC2A2 polymorphisms: Glucose sensing and transport
- SLC2A4 variants: Insulin-stimulated glucose uptake
- May influence glycemic response and CHO requirements

**Glycogen Storage Capacity:**
- PYGM variants: Muscle glycogen phosphorylase efficiency
- PPP1R3A polymorphisms: Glycogen branching and storage

### Protein Metabolism Genetics
**ACTN3 R577X:**
- XX genotype: No alpha-actinin-3 in fast-twitch fibers
- Associated with endurance phenotype
- May influence optimal protein intake for power athletes

**FTO Gene:**
- rs9939609 variant: Appetite regulation
- May influence protein's satiating effect
- Relevant for weight management in athletes

**Amino Acid Metabolism:**
- BCKDH variants: BCAA catabolism efficiency
- MTHFR variants: Methionine and homocysteine metabolism
- Implications for protein quality requirements

### Fat Metabolism Polymorphisms
**PPARGC1A (PGC-1α):**
- Gly482Ser variant: Reduced endurance trainability
- Influences fat oxidation capacity response to training
- May benefit more from LCHF approaches

**PPARD Variants:**
- +294T/C: Fat oxidation capacity
- Influences response to endurance training
- Potential for fat adaptation strategies

**FADS1/FADS2:**
- Fatty acid desaturase efficiency
- Influences omega-3/omega-6 conversion
- Implications for essential fatty acid requirements

## Advanced Substrate Kinetics

### Carbohydrate Flux Analysis
**Isotope Tracer Methods:**
- 13C-glucose/fructose for exogenous oxidation rates
- 2H2O for de novo lipogenesis assessment
- Allows precise quantification of fuel source contribution

**Continuous Glucose Monitoring:**
- Real-time glucose flux during training
- Individual glycemic response patterns
- Optimizing fueling strategies based on personal data

### Protein Turnover Dynamics
**Fractional Synthetic Rate (FSR):**
- Deuterated water (D2O) method for chronic MPS
- Amino acid tracer studies for acute MPS
- 13C-phenylalanine commonly used

**Muscle Full Mechanisms:**
- Leucine oxidation pathway upregulation
- mTORC1 pathway desensitization
- Role of muscle glycogen on anabolic signaling
- AMPK-mTORC1 interference

### Lipid Metabolism Profiling
**Metabolomic Assessment:**
- Acylcarnitine profiles: Fat oxidation efficiency
- Free fatty acid speciation
- Ketone body production capacity

**Lipidomic Phenotyping:**
- Membrane fatty acid composition
- Influence on inflammation and recovery
- Individual omega-3 status assessment

## Emerging Research Frontiers

### Exogenous Ketones
**Mechanisms:**
- Bypass dietary ketosis requirements
- Alternative brain fuel during glycogen depletion
- Potential glycogen-sparing effects

**Current Evidence:**
- 20-30g ketone ester: ~3-5 mM blood ketones
- Mixed performance results
- May benefit ultra-endurance, impair high-intensity
- GI tolerance issues common

**Future Directions:**
- Combined CHO + ketone strategies
- Individual responder identification
- Novel ketone formulations

### Muscle-Gut-Microbiome Axis
**Exercise-Microbiome Interactions:**
- Endurance training increases Akkermansia, Veillonella
- Lactate-utilizing bacteria (Veillonella) may enhance performance
- Microbiome influences short-chain fatty acid production

**Nutritional Implications:**
- Fiber and polyphenol intake for microbiome health
- Prebiotic/probiotic optimization for athletes
- Individual variation in gut fermentation capacity

### Circadian Nutrition
**Chrononutrition Considerations:**
- Nutrient partitioning varies with time of day
- Morning: Better glucose tolerance, insulin sensitivity
- Evening: Enhanced protein synthesis (?) - limited evidence

**Practical Applications:**
- Align high-CHO meals with training timing
- Consider circadian phase for macronutrient distribution
- Travel/jet lag disrupts nutrient metabolism

## Individualized Prescription Framework

### Assessment Protocol
1. **Genetic profiling** (where available): AMY1, ACTN3, FADS, PPARGC1A
2. **Metabolic testing**: VO2max, Fatmax, RER patterns
3. **Body composition**: DEXA for lean mass, fat mass distribution
4. **Blood biomarkers**: Glucose, insulin, lipid panel, inflammatory markers
5. **Training analysis**: Load, intensity distribution, sport demands

### Prescription Algorithm
| Athlete Profile | CHO (g/kg) | Protein (g/kg) | Fat (%) | Notes |
|----------------|------------|----------------|---------|-------|
| Power/Sprint | 4-6 | 1.6-2.2 | 25-35 | Higher leucine emphasis |
| Team Sport | 5-8 | 1.4-2.0 | 20-30 | Match-day periodization |
| Endurance | 6-10 | 1.2-1.6 | 20-25 | Glycogen availability focus |
| Ultra-Endurance | 5-8 | 1.4-1.8 | 30-40 | Fat adaptation potential |
| Weight Class | 3-5 (off) | 2.0-2.4 | Variable | Periodized with competition |

### Monitoring and Adjustment
- Regular body composition assessment
- Performance testing correlation
- Blood marker tracking
- Subjective wellbeing and recovery metrics
- Training response evaluation`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects individual responses to nutrients, enabling personalized nutrition recommendations' },
        { term: 'metabolomics', definition: 'Comprehensive analysis of small molecule metabolites in biological samples, providing insight into metabolic status and nutrient utilization' },
        { term: 'fractional synthetic rate (FSR)', definition: 'Rate of protein synthesis expressed as percentage of protein pool synthesized per unit time; gold standard for MPS measurement' },
        { term: 'chrononutrition', definition: 'Field studying the interaction between circadian rhythms and nutrition, considering timing of nutrient intake for optimal metabolic outcomes' },
        { term: 'exogenous ketones', definition: 'Supplemental ketone bodies (esters or salts) providing rapid elevation of blood ketones independent of dietary manipulation' },
      ],
      clinicalNotes: `Clinical considerations for precision nutrition:
1. Genetic testing should inform but not dictate nutrition strategies - phenotype and training history remain paramount
2. Metabolomic profiling emerging but not yet validated for routine athletic use
3. Exogenous ketones show promise but evidence remains mixed - use case-by-case with monitoring
4. Gut microbiome assessment interesting but intervention evidence limited
5. Circadian nutrition principles should be considered but practical training schedules often take precedence
6. Individual response monitoring essential - population averages may not apply`,
    },
  },

  media: [
    {
      id: 'macro-distribution-sport',
      type: 'diagram',
      filename: 'macronutrient-distribution-by-sport.svg',
      title: 'Macronutrient Distribution by Sport Type',
      description: 'Visual comparison of recommended macronutrient ratios for different athletic disciplines',
    },
  ],

  citations: [
    {
      id: 'issn-protein',
      type: 'article',
      title: 'International Society of Sports Nutrition Position Stand: Protein and Exercise',
      source: 'Journal of the International Society of Sports Nutrition',
    },
    {
      id: 'acsm-carb',
      type: 'article',
      title: 'ACSM Position Stand: Nutrition and Athletic Performance',
      source: 'Medicine & Science in Sports & Exercise',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-sports-nutrition-basics', targetType: 'concept', relationship: 'parent', label: 'Sports Nutrition Basics' },
    { targetId: 'sports-med-exercise-physiology-basics', targetType: 'concept', relationship: 'related', label: 'Exercise Physiology Basics' },
  ],

  tags: {
    systems: ['musculoskeletal', 'gastrointestinal', 'endocrine'],
    topics: ['sports-medicine', 'nutrition', 'macronutrients'],
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

export default macronutrientsForAthletes;
