/**
 * Macronutrients - Nutrition Science
 *
 * Comprehensive content on carbohydrates, proteins, and fats including
 * their functions, dietary requirements, digestion, metabolism, and
 * health implications across the lifespan.
 */

import { EducationalContent } from '../types';

export const macronutrients: EducationalContent = {
  id: 'nutrition-macronutrients',
  type: 'topic',
  name: 'Macronutrients',
  alternateNames: ['Carbohydrates, Proteins, Fats', 'Macros', 'Energy Nutrients'],

  levels: {
    1: {
      level: 1,
      summary: 'Macronutrients are the nutrients your body needs in large amounts to provide energy and build your body: carbohydrates for fuel, proteins for building, and fats for energy storage.',
      explanation: `## What Are Macronutrients?

Your body needs nutrients to grow, repair itself, and have energy to work and play. The three main types of nutrients you need in large amounts are called **macronutrients**.

### The Three Macronutrients

**1. Carbohydrates (Carbs)** - Your Body's Main Fuel
- Give you energy for running, thinking, and playing
- Found in bread, pasta, fruits, and vegetables
- Your brain prefers carbs for energy
- \`\`\`Examples: oatmeal, apples, rice, beans\`\`\`

**2. Proteins - Your Body's Building Blocks**
- Build and repair muscles, skin, and organs
- Help make antibodies to fight germs
- Found in meat, eggs, beans, nuts, and dairy
- \`\`\`Examples: chicken, tofu, yogurt, eggs\`\`\`

**3. Fats - Energy Storage and More**
- Store energy for later use
- Help your body use vitamins
- Protect your organs and keep you warm
- Found in oils, butter, nuts, and avocados
- \`\`\`Examples: olive oil, nuts, cheese, fish\`\`\`

### Why You Need All Three

Your body is like a house that needs different materials:
- **Carbs** are like the electricity that powers everything
- **Protein** is like the bricks and wood that build the structure
- **Fats** are like the batteries that store extra energy

### Making Healthy Choices

**Choose These Often:**
- Whole grains (brown rice, whole wheat bread)
- Lean proteins (chicken, fish, beans)
- Healthy fats (nuts, olive oil, avocado)

**Limit These:**
- Sugary drinks and candy
- Fried foods
- Processed meats

Each meal should have all three macronutrients to keep you energized and healthy!`,
      keyTerms: [
        { term: 'carbohydrates', definition: 'Nutrients that give your body energy, found in grains, fruits, and vegetables' },
        { term: 'proteins', definition: 'Nutrients that build and repair your body tissues, found in meat, beans, and dairy' },
        { term: 'fats', definition: 'Nutrients that store energy and help your body use vitamins' },
        { term: 'macronutrients', definition: 'Nutrients your body needs in large amounts: carbs, proteins, and fats' },
      ],
      analogies: [
        'Macronutrients are like the three main food groups on your lunch plate - grains, proteins, and fruits/vegetables.',
        'Your body uses carbs like a car uses gasoline - for quick energy.',
        'Protein is like LEGO blocks that build and repair things in your body.',
      ],
      examples: [
        'A balanced lunch: sandwich (carbs), turkey (protein), and avocado (fat)',
        'Breakfast oatmeal with berries (carbs), milk (protein), and nuts (fat)',
        'After sports, your body uses carbs to refill energy and protein to repair muscles',
      ],
      patientCounselingPoints: [
        'Try to include all three macronutrients at each meal for steady energy',
        'Half your plate should be carbohydrates (fruits, vegetables, grains)',
        'A palm-sized portion of protein at meals is usually about right',
        'Include healthy fats like nuts, avocado, or olive oil daily',
      ],
    },
    2: {
      level: 2,
      summary: 'Macronutrients provide energy and building materials for the body. Carbohydrates supply 4 kcal/g and are the primary energy source, proteins supply 4 kcal/g and support tissue growth and repair, and fats supply 9 kcal/g and provide concentrated energy and essential fatty acids.',
      explanation: `## Understanding Macronutrients

Macronutrients are the nutrients that provide calories (energy) and are required in large amounts. They are fundamental to growth, metabolism, and body function.

### Carbohydrates (4 calories per gram)

**Classification:**
| Type | Description | Examples | Digestion |
|------|-------------|----------|-----------|
| Simple sugars | 1-2 sugar units | Glucose, fructose, sucrose | Rapid |
| Complex starches | Long sugar chains | Bread, pasta, potatoes | Moderate |
| Fiber | Indigestible plant material | Vegetables, whole grains, legumes | Minimal |

**Functions:**
- Primary energy source for brain and muscles
- Spare protein from being used for energy
- Essential for intestinal health (fiber)

**Recommended Intake:** 45-65% of total daily calories

### Proteins (4 calories per gram)

**Amino Acid Categories:**
- **Essential:** Must come from diet (9 amino acids)
- **Non-essential:** Body can produce them
- **Conditionally essential:** Needed during illness/stress

**Protein Sources:**
| Source | Examples | Complete Protein |
|--------|----------|------------------|
| Animal | Meat, poultry, fish, eggs, dairy | Yes |
| Plant | Soy, quinoa | Yes |
| Plant | Beans, nuts, grains, vegetables | No (combine for complete)**

**Functions:**
- Build and repair tissues
- Make enzymes, hormones, and antibodies
- Maintain fluid and acid-base balance
- Provide energy when needed

**Recommended Intake:** 10-35% of total daily calories (0.8g/kg body weight minimum)

### Fats (9 calories per gram)

**Types of Dietary Fat:**

| Type | Chemical Structure | Health Impact | Food Sources |
|------|-------------------|---------------|--------------|
| Saturated | No double bonds | Limit intake | Meat, dairy, coconut oil |
| Monounsaturated | One double bond | Health-promoting | Olive oil, avocados, nuts |
| Polyunsaturated | Multiple double bonds | Essential | Fish, walnuts, seeds |
| Trans | Artificial double bonds | Avoid | Processed foods, fried foods |

**Essential Fatty Acids:**
- **Omega-3 (ALA):** Alpha-linolenic acid
- **Omega-6 (LA):** Linoleic acid
- Body cannot make these; must consume them

**Functions:**
- Concentrated energy storage
- Cell membrane structure
- Absorption of fat-soluble vitamins (A, D, E, K)
- Hormone production
- Insulation and organ protection

**Recommended Intake:** 20-35% of total daily calories

### Daily Energy Distribution

For a 2000 calorie diet:
- **Carbohydrates:** 225-325 grams (45-65%)
- **Proteins:** 50-175 grams (10-35%)
- **Fats:** 44-78 grams (20-35%)

### Individual Needs Vary Based On:
- Age and growth stage
- Activity level and exercise
- Health conditions
- Personal goals (weight loss, muscle gain)`,
      keyTerms: [
        { term: 'calorie', definition: 'A unit of energy that measures how much energy food provides to the body' },
        { term: 'essential amino acids', definition: 'Nine amino acids that cannot be made by the body and must be obtained from food' },
        { term: 'complete protein', definition: 'Food containing all nine essential amino acids in adequate amounts' },
        { term: 'saturated fat', definition: 'Fat with no double bonds between carbon molecules; typically solid at room temperature' },
        { term: 'trans fat', definition: 'Artificially created fat through hydrogenation; associated with negative health effects' },
        { term: 'omega-3 fatty acids', definition: 'Polyunsaturated fats with anti-inflammatory properties; essential nutrients' },
        { term: 'glycemic index', definition: 'A measure of how quickly a carbohydrate-containing food raises blood glucose' },
      ],
      analogies: [
        'Carbohydrates are like kindling for a fire - they burn quickly and easily for immediate energy.',
        'Fats are like logs on a fire - they burn slowly and provide long-lasting energy.',
        'Proteins are like the construction crew - they build and repair the body\'s structures.',
      ],
      examples: [
        'Endurance athletes "carb load" before events to maximize glycogen stores',
        'After weight training, consuming protein within 2 hours supports muscle repair',
        'Adding olive oil to vegetables helps absorb fat-soluble vitamins',
        'Combining rice and beans creates a complete protein profile',
      ],
      patientCounselingPoints: [
        'Choose whole grains over refined grains for more fiber and nutrients',
        'Include fish twice weekly for omega-3 fatty acids',
        'Limit processed meats and foods high in saturated fat',
        'Aim for a variety of protein sources from both animals and plants',
        'Don\'t fear fats - choose healthy ones like nuts, olive oil, and avocado',
      ],
    },
    3: {
      level: 3,
      summary: 'Macronutrient metabolism involves complex biochemical pathways for digestion, absorption, and utilization. Carbohydrates are primarily metabolized to glucose and stored as glycogen, proteins are broken down to amino acids for protein synthesis or gluconeogenesis, and fats undergo lipolysis to fatty acids for beta-oxidation or ketogenesis.',
      explanation: `## Carbohydrate Metabolism

**Digestion and Absorption:**
1. **Mouth:** Salivary amylase begins starch digestion
2. **Stomach:** Acidic pH stops amylase activity
3. **Small Intestine:** Pancreatic amylase completes starch digestion
4. **Brush Border:** Disaccharidases break down to monosaccharides
5. **Absorption:** SGLT1 (glucose/galactose) and GLUT5 (fructose) transport

**Monosaccharides:**
| Sugar | Source | Primary Metabolic Fate |
|-------|--------|----------------------|
| Glucose | All carbohydrates | Universal cellular fuel |
| Fructose | Fruit, added sugar | Liver metabolism first |
| Galactose | Dairy | Converted to glucose in liver |

**Post-Absorptive Fate:**
- **Immediate use:** Glycolysis → pyruvate → ATP production
- **Storage:** Glycogenesis → glycogen (liver, muscle)
- **Excess:** De novo lipogenesis → fatty acids → triglycerides

**Regulation of Blood Glucose:**
- **Insulin:** Promotes glucose uptake, glycogen synthesis
- **Glucagon:** Stimulates glycogenolysis, gluconeogenesis
- **Epinephrine:** Rapid mobilization of glucose during stress

**Fiber Types:**
| Type | Solubility | Fermentation | Health Benefits |
|------|------------|--------------|-----------------|
| Soluble | Dissolves in water | Yes (butyrate) | Cholesterol reduction, glycemic control |
| Insoluble | Does not dissolve | Minimal | Bowel regularity, stool bulk |
| Resistant starch | No | Yes | Prebiotic, insulin sensitivity |

## Protein Metabolism

**Digestion:**
1. **Stomach:** Pepsin breaks proteins into peptides
2. **Small Intestine:** Pancreatic proteases (trypsin, chymotrypsin)
3. **Brush Border:** Peptidases to amino acids and di/tripeptides
4. **Absorption:** Active transport via amino acid transporters

**Amino Acid Metabolism:**
\`\`\`
Protein → Amino Acids →
  ├─ Protein synthesis (growth, repair)
  ├─ Energy production (transamination → TCA cycle)
  ├─ Gluconeogenesis (glucose production)
  └─ Fatty acid synthesis (when in excess)
\`\`\`

**Protein Quality Assessment:**
- **PDCAAS (Protein Digestibility-Corrected Amino Acid Score):**
  - Measures amino acid pattern relative to needs
  - Accounts for digestibility
  - Scale: 0-1.0 (1.0 = complete protein)
- **DIAAS (Digestible Indispensable Amino Acid Score):**
  - Newer method, measures at ileum
  - Considered more accurate

**Nitrogen Balance:**
| State | Description | Clinical Context |
|-------|-------------|------------------|
| Equilibrium | Intake = loss | Healthy adults |
| Positive | Intake > loss | Growth, pregnancy, recovery |
| Negative | Intake < loss | Injury, illness, malnutrition |

**Protein Requirements by Life Stage:**
| Population | RDA (g/kg/day) | Rationale |
|------------|----------------|------------|
| Sedentary adult | 0.8 | Maintenance |
| Endurance athletes | 1.2-1.4 | Muscle repair, oxidative stress |
| Strength athletes | 1.6-2.0 | Muscle hypertrophy |
| Elderly | 1.0-1.2 | Counteract sarcopenia |
| Pregnancy | 1.1 | Fetal growth, tissue synthesis |

## Lipid Metabolism

**Digestion:**
1. **Emulsification:** Bile salts from liver break large fat globules
2. **Lipolysis:** Pancreatic lipase breaks triglycerides
3. **Micelle Formation:** Bile + lipid products
4. **Absorption:** Enterocytes via passive diffusion
5. **Reassembly:** Chylomicrons for transport

**Lipoprotein Structure:**
\`\`\`
Core: Triglycerides + Cholesterol esters
Surface: Phospholipids + Free cholesterol + Apolipoproteins
\`\`\`

**Lipoprotein Classes:**

| Lipoprotein | Origin | Primary Lipid | Function | Clinical Significance |
|-------------|--------|---------------|----------|----------------------|
| Chylomicron | Intestine | Triglycerides | Transport dietary fat | Elevated after fatty meal |
| VLDL | Liver | Triglycerides | Transport endogenous fat | Elevated in metabolic syndrome |
| IDL | VLDL metabolism | TG + cholesterol | Intermediate | Risk factor for CVD |
| LDL | VLDL metabolism | Cholesterol | Deliver cholesterol to tissues | "Bad cholesterol" - atherogenic |
| HDL | Liver/intestine | Phospholipids | Reverse cholesterol transport | "Good cholesterol" - protective |

**Fatty Acid Oxidation:**
\`\`\`
Triglycerides → Lipolysis → Free fatty acids →
  Carnitine shuttle → Mitochondria →
  Beta-oxidation → Acetyl-CoA →
    ├─ TCA cycle → ATP
    ├─ Ketogenesis (liver) → Ketone bodies
    └─ Fatty acid synthesis (excess)
\`\`\`

**Ketogenesis:**
- Occurs during prolonged fasting, very low-carb diets
- Liver produces ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone)
- Alternative fuel for brain during glucose scarcity
- Can reduce insulin requirements in type 1 diabetes

## Macronutrient Interactions

**Carbohydrate-Protein:**
- Insulin stimulated by carbs promotes amino acid uptake
- Protein stimulates glucagon, moderating insulin response

**Fat-Carbohydrate:**
- High-fat meals slow gastric emptying and glucose absorption
- Fat燃烧 increases with high-carb diet (Randle cycle)

**Protein-Lipid:**
- Essential amino acid deficiency impairs lipoprotein synthesis
- Protein malnutrition leads to fatty liver (impaired VLDL secretion)`,
      keyTerms: [
        { term: 'glycogenolysis', definition: 'Breakdown of glycogen to glucose-1-phosphate for energy production' },
        { term: 'gluconeogenesis', definition: 'Synthesis of glucose from non-carbohydrate precursors like amino acids and glycerol' },
        { term: 'beta-oxidation', definition: 'Mitochondrial process of breaking down fatty acids to acetyl-CoA for energy' },
        { term: 'ketogenesis', definition: 'Production of ketone bodies from fatty acids in the liver' },
        { term: 'chylomicron', definition: 'Lipoprotein particle that transports dietary lipids from intestine to tissues' },
        { term: 'VLDL', definition: 'Very Low-Density Lipoprotein; carries triglycerides from liver to peripheral tissues' },
        { term: 'PDCAAS', definition: 'Protein Digestibility-Corrected Amino Acid Score; method for evaluating protein quality' },
        { term: 'carnitine shuttle', definition: 'Transport system that moves long-chain fatty acids into mitochondria for oxidation' },
      ],
      analogies: [
        'Glycogen is like a rechargeable battery - it stores energy and can be quickly recharged from meals and drained during activity.',
        'Lipoproteins are like delivery trucks - chylomicrons deliver from the "factory" (intestine), VLDL from the "warehouse" (liver), and HDL is the "cleanup crew" returning excess.',
        'The carnitine shuttle is like a border crossing - fatty acids need special transport (carnitine) to enter the mitochondria "country".',
      ],
      examples: [
        'Marathon runners deplete glycogen stores, causing "hitting the wall" around mile 20',
        'Type 1 diabetics produce ketones when insulin is insufficient, risking DKA',
        'Eskimos traditionally consumed high-fat diets with minimal carbs, remaining in mild ketosis',
        'Kwashiorkor (protein deficiency) causes fatty liver due to impaired VLDL synthesis',
      ],
      clinicalNotes: 'In diabetic ketoacidosis, the absence of insulin leads to unrestrained lipolysis and ketogenesis. Treatment includes insulin to stop ketogenesis and careful glucose and potassium replacement.',
    },
    4: {
      level: 4,
      summary: 'Advanced macronutrient metabolism integrates hormonal regulation, genetic factors, and pathophysiological states. Clinical applications include managing metabolic syndrome, optimizing sports nutrition, and tailoring macronutrient composition for disease prevention and treatment.',
      explanation: `## Advanced Carbohydrate Physiology

**Fructose Metabolism and Health:**

Unlike glucose, fructose bypasses phosphofructokinase (key regulatory step):

\`\`\`
Fructose → Fructokinase → Fructose-1-phosphate →
  Glyceraldehyde + DHAP →
    ├─ Glycolysis (liver)
    ├─ De novo lipogenesis → TG → VLDL
    └─ Uric acid production (via AMP degradation)
\`\`\`

**Clinical Implications:**
- Bypassing PFK = no negative feedback
- Promotes lipogenesis independent of energy status
- Linked to NAFLD, hyperuricemia, insulin resistance
- High-fructose corn syrup concerns

**Glucose Transporters (GLUTs):**

| Transporter | Tissue Distribution | Km | Regulation |
|-------------|-------------------|----|------------|
| GLUT1 | Erythrocytes, brain, placenta | Low | Constitutive |
| GLUT2 | Liver, pancreatic beta-cells, kidney | High | Insulin-independent |
| GLUT3 | Neurons | Very Low | High affinity for brain |
| GLUT4 | Muscle, adipose | Low | Insulin-regulated |
| GLUT5 | Small intestine | N/A | Fructose-specific |

**Insulin Signaling Cascade:**
\`\`\`
Insulin binds receptor → Autophosphorylation →
  IRS phosphorylation → PI3K activation →
    Akt/PKB activation →
      ├─ GLUT4 translocation (muscle, fat)
      ├─ Glycogen synthase activation
      ├─ mTOR activation (protein synthesis)
      └─ Lipogenesis stimulation (SREBP-1c)
\`\`\`

## Advanced Protein Physiology

**Muscle Protein Turnover:**

\`\`\`
Net Protein Balance = Synthesis - Breakdown

MPS (Muscle Protein Synthesis) stimulated by:
  ├─ Essential amino acids (especially leucine)
  ├─ Insulin (anti-proteolytic)
  ├─ Mechanical loading (resistance exercise)
  └─ Anabolic hormones (testosterone, IGF-1)

MPB (Muscle Protein Breakdown) increased by:
  ├─ Cortisol
  ├─ Inactivity/immobilization
  └─ Energy deficit
\`\`\`

**Leucine Threshold:**
- ~2-3g leucine per meal required to maximally stimulate mTOR
- Explains why whey protein (high leucine) is anabolic
- Plant proteins often require larger servings

**Amino Acid Derivatives as Signaling Molecules:**

| Amino Acid | Derivative | Function |
|------------|------------|----------|
| Tryptophan | Serotonin | Mood, appetite regulation |
| Tyrosine | Dopamine, norepinephrine | Neurotransmission |
| Arginine | Nitric oxide | Vasodilation |
| Glutamate | GABA | Inhibitory neurotransmission |
| Histidine | Histamine | Immune response |

**Protein-Energy Wasting (PEW):**

Seen in:
- Chronic kidney disease
- Cancer cachexia
- Chronic heart failure
- COPD

Pathophysiology:
\`\`\`
Inflammation → Cytokines (TNF-α, IL-6) →
  ├─ Increased proteolysis (ubiquitin-proteasome)
  ├─ Decreased protein synthesis
  ├─ Anorexia (central mechanisms)
  └─ Insulin resistance
\`\`\`

## Advanced Lipid Physiology

**De Novo Lipogenesis (DNL):**

\`\`\`
Glucose → Pyruvate → Acetyl-CoA → Malonyl-CoA →
  Fatty Acid Synthase → Palmitate (C16:0) →
    Stearate (C18:0) → Oleate (C18:1)
\`\`\`

**Regulation:**
- **Acute:** Insulin activates, glucagon inhibits
- **Transcriptional:** SREBP-1c (activated by insulin, carbs)
- **Allosteric:** Malonyl-CoA inhibits CPT-1 (blocks fat burning)

**Fatty Acid Desaturation:**

\`\`\`
SFA (18:0) → SCD-1 → MUFA (18:1)
MUFA (18:1) → FADS2 → PUFA (18:2)
PUFA (18:2) → FADS1 → LC-PUFA (20:4)
\`\`\`

**Genetic Variants in FADS genes:**
- Affect conversion to long-chain PUFAs
- Influence inflammatory response
- Explain interindividual variation in omega-3 requirements

**Cholesterol Homeostasis:**

\`\`\`
Sources:
  ├─ Dietary (300-500mg/day)
  └─ Endogenous (800-1000mg/day via HMG-CoA reductase)

Fates:
  ├─ Cell membranes (structural)
  ├─ Bile acids (emulsification)
  ├─ Steroid hormones (precursor)
  └─ Elimination (via bile, ~50% reabsorbed)

Regulation:
  ├─ SREBP-2: Low cholesterol → ↑LDL receptors, ↑synthesis
  ├─ PCSK9: Degrades LDL receptors (gain-of-function = hypercholesterolemia)
  └─ LXR: Oxysterols → ↑cholesterol efflux (ABCA1)
\`\`\`

## Metabolic Flexibility

**Definition:** Ability to switch between carbohydrate and fat oxidation based on fuel availability

**Assessment:** Respiratory Quotient (RQ)
\`\`\`
RQ = VCO2 produced / VO2 consumed
RQ 1.0 = Pure carbohydrate oxidation
RQ 0.7 = Pure fat oxidation
\`\`\`

**Metabolic Inflexibility:**
- Characteristic of insulin resistance, obesity, T2DM
- Impaired fat oxidation during fasting
- Reduced carbohydrate oxidation during feeding
- Contributes to ectopic lipid accumulation

## Clinical Applications

**Medical Nutrition Therapy:**

| Condition | Macronutrient Modification | Rationale |
|-----------|---------------------------|-----------|
| Type 2 Diabetes | ↓Simple carbs, ↑fiber, moderate protein | Improve glycemic control, satiety |
| NAFLD | ↓Fructose, ↑protein, ↑omega-3 | Reduce lipogenesis, improve insulin sensitivity |
| Chronic Kidney Disease | ↓Protein (0.6-0.8 g/kg) | Reduce nitrogenous waste, slow progression |
| COPD | ↑Carbs, ↓fat (lower RQ) | Reduce CO2 production (ventilatory load) |
| Critical illness | ↑Protein (1.2-2.0 g/kg) | Counteract catabolism, preserve lean mass |

**Sports Nutrition Optimization:**

\`\`\`
Endurance:
  Pre-exercise: High-carb meal (1-4h prior) → Maximize glycogen
  During: 30-60g glucose + fructose (2:1) → Multiple transporters
  Post: 1.2 g/kg carb/hr × 4h → Glycogen repletion

Strength:
  Protein timing: 20-40g within 2h post-exercise → MPS
  Leucine threshold: ~3g per serving → mTOR activation
  Total daily: 1.6-2.2 g/kg → Net positive balance
\`\`\`

**Ketogenic Therapy Mechanisms:**

\`\`\`
1. Reduced glucose availability → Lower insulin
2. Ketone bodies as alternative fuel (neuroprotective)
3. GABA/glutamate balance modification (seizure control)
4. Metabolic signaling changes (BDNF, mTOR, AMPK)
5. Reduced oxidative stress compared to glucose metabolism
\`\`\`

**Approved Uses:**
- Refractory epilepsy (especially children)
- Glucose transporter type 1 deficiency
- Emerging: Cancer (Warburg effect), neurodegenerative diseases`,
      keyTerms: [
        { term: 'phosphofructokinase', definition: 'Rate-limiting enzyme of glycolysis; inhibited by ATP and citrate, activated by AMP and fructose-2,6-bisphosphate' },
        { term: 'de novo lipogenesis', definition: 'Synthesis of fatty acids from non-fat precursors, primarily carbohydrates, in the liver' },
        { term: 'SREBP-1c', definition: 'Sterol Regulatory Element-Binding Protein 1c; transcription factor activating lipogenic genes in response to insulin' },
        { term: 'PCSK9', definition: 'Proprotein convertase subtilisin/kexin type 9; promotes LDL receptor degradation; target of PCSK9 inhibitors' },
        { term: 'respiratory quotient', definition: 'Ratio of CO2 produced to O2 consumed; indicates substrate utilization (1.0=carbs, 0.7=fats)' },
        { term: 'muscle protein synthesis', definition: 'Process of building new muscle proteins; stimulated by amino acids, especially leucine, and resistance exercise' },
        { term: 'metabolic inflexibility', definition: 'Impaired ability to switch between fat and carbohydrate oxidation; hallmark of insulin resistance' },
        { term: 'FADS', definition: 'Fatty Acid Desaturase genes; polymorphisms affect conversion to long-chain PUFAs' },
      ],
      analogies: [
        'Metabolic flexibility is like a hybrid car that seamlessly switches between gas and electric - metabolic inflexibility is like a car that gets stuck in one gear.',
        'Insulin resistance is like a lock that won\'t open even with the right key - the insulin is there but the cells don\'t respond properly.',
        'The ubiquitin-proteasome system in muscle wasting is like a demolition crew that works faster than the construction crew can build.',
      ],
      examples: [
        'Familial hypercholesterolemia caused by LDLR or PCSK9 mutations treated with PCSK9 inhibitors (evolocumab, alirocumab)',
        'NAFLD reversal with carbohydrate restriction independent of weight loss',
        'Charlie Foundation protocols for ketogenic diet in epilepsy',
        'Leucine supplementation in elderly to overcome "anabolic resistance"',
      ],
      clinicalNotes: 'In critically ill patients, early enteral nutrition (within 24-48 hours) with adequate protein (1.2-2.0 g/kg) is recommended. Permissive underfeeding (up to 70% of targets) may be beneficial in the acute phase to avoid refeeding syndrome and reduce complications.',
    },
    5: {
      level: 5,
      summary: 'Expert-level understanding of macronutrients encompasses molecular mechanisms, genetic polymorphisms, precision nutrition approaches, and emerging therapeutic applications including ketogenic therapies, protein modulation in aging, and macronutrient-based interventions for metabolic disease.',
      explanation: `## Molecular Regulation of Macronutrient Metabolism

**Nutrient-Sensing Pathways:**

\`\`\`
mTORC1 (Nutrient Excess Sensor):
  Activated by: Amino acids (leucine, arginine), glucose, insulin
  Inhibited by: AMPK, rapamycin
  Effects: Protein synthesis, lipid synthesis, autophagy inhibition
  Clinical: Rapamycin, everolimus (immunosuppressants, anti-cancer)

AMPK (Energy Deficit Sensor):
  Activated by: Low ATP:AMP ratio, metformin, exercise
  Effects: Catabolic switch, mitochondrial biogenesis, autophagy
  Clinical: Metformin, exercise mimetics under development

Sirtuins (NAD+-dependent deacylases):
  SIRT1: Fasting response, mitochondrial biogenesis (PGC-1α)
  SIRT3: Mitochondrial protein deacetylation
  Clinical: NAD+ precursors (NR, NMN) for aging

HIF-1α (Cellular hypoxia sensor):
  Stabilized by: Low oxygen, succinate accumulation
  Effects: Glycolytic shift, angiogenesis
  Clinical: HIF prolyl hydroxylase inhibitors (anemia)
\`\`\`

**Transcription Factor Networks:**

| Transcription Factor | Activators | Target Genes | Metabolic Effect |
|---------------------|------------|--------------|------------------|
| SREBP-1c | Insulin, LXR | FAS, ACC, SCD1 | Lipogenesis |
| ChREBP | Glucose | PKLR, FAS | Glycolytic, lipogenic |
| PPAR-α | Fasting, fibrates | CPT1, ACOX1 | Fatty acid oxidation |
| PPAR-γ | TZDs, fatty acids | aP2, CD36 | Adipogenesis, lipid storage |
| FOXO1 | Glucagon, fasting | PEPCK, G6Pase | Gluconeogenesis |
| NRF2 | Oxidative stress | Antioxidant enzymes | Cytoprotection |

## Genetic Variants Affecting Macronutrient Metabolism

**Carbohydrate Metabolism:**

| Gene | Variant | Effect | Clinical Implication |
|------|---------|--------|----------------------|
| GCKR | P446L | Increased hepatic glucose uptake | Higher triglycerides, lower fasting glucose |
| SLC2A2 | GLUT2 variants | Impaired glucose sensing | MODY (maturity-onset diabetes of young) |
| AMY1 | Copy number variation | Salivary amylase levels | Starch digestion efficiency, obesity risk |
| TCFL7L2 | rs7903146 | Impaired insulin secretion | Strongest T2DM common variant |

**Lipid Metabolism:**

| Gene | Variant | Effect | Clinical Implication |
|------|---------|--------|----------------------|
| APOE | ε4 allele | Impaired lipid clearance | ↑Alzheimer risk, ↑CVD, ↑LDL |
| APOA5 | loss-of-function | Hypertriglyceridemia | Severe HTG, pancreatitis risk |
| LPL | loss-of-function | Impaired TG clearance | Familial chylomicronemia |
| LDLR | loss-of-function | FH (heterozygote) | LDL >190, premature CAD |
| PCSK9 | gain-of-function | LDLR degradation | Hypercholesterolemia |
| PCSK9 | loss-of-function | ↑LDLR activity | Low LDL, ↓CVD risk |

**Protein/Amino Acid:**

| Gene | Variant | Effect | Clinical Implication |
|------|---------|--------|----------------------|
| FADS1/2 | haplotype D | ↓PUFA conversion | ↑LC-PUFA requirement, inflammation |
| MTHFR | C677T | ↓Folate metabolism | ↑Homocysteine, modify B12/folate |
| PEMT | variants | ↓PC synthesis | NAFLD risk, choline requirement |
| SLC6A19 | Hartnup disease | Impaired neutral AA transport | Pellagra-like symptoms |

## Precision Nutrition Approaches

**Genotype-Directed Dietary Recommendations:**

\`\`\`
APOE Genotype and Lipid Response:
  ε4 carriers:
    - Greater LDL reduction with SFA reduction
    - Poorer response to statins (higher dosing needed)
    - Earlier intervention recommended

FADS1/2 Genotype:
  Inefficient converters:
    - Higher requirement for preformed DHA/EPA
    - Plant-based diets require careful planning
    - Direct fish/algae sources preferred

SLC2A2 (GLUT2) "Sugar Sensing":
  Carriers: Reduced sweet taste sensitivity
    - Higher sugar intake to achieve satisfaction
    - May explain individual differences in sugar preference
    - Counseling: Explicit sugar limits, not "moderation"
\`\`\`

**Microbiome-Macronutrient Interactions:**

\`\`\`
Dietary Fiber → Microbial fermentation →
  Short-chain fatty acids (acetate, propionate, butyrate) →
    ├─ Butyrate: Colonocyte fuel, HDAC inhibition, anti-inflammatory
    ├─ Propionate: Gluconeogenesis substrate, satiety hormones
    └─ Acetate: Lipogenesis substrate (periphery), appetite regulation

Bile Acid Metabolism:
  Primary bile acids → Microbial deconjugation →
    Secondary bile acids → FXR, TGR5 signaling →
      Glucose/lipid metabolism, energy expenditure

Amino Acid Metabolism:
  Unabsorbed protein → Microbial fermentation →
    TMAO (from carnitine, choline) → CVD risk
    Hydrogen sulfide → Gut mucosal health
    Branched-chain fatty acids → Barrier function
\`\`\`

**Predictors of Dietary Response:**
- Baseline microbiome composition (e.g., Prevotella/Bacteroides ratio)
- Post-prandial glycemic response variability
- Continuous glucose monitoring for personalized feedback

## Therapeutic Applications

**Ketogenic Metabolic Therapies:**

\`\`\`
Mechanisms Beyond Ketones:
  1. Reduced glycolytic flux → Lower ROS production
  2. Increased NAD+/NADH ratio → SIRT activation
  3. Reduced insulin → Disinhibited lipolysis, autophagy
  4. Adenosine modulation → Neurotransmitter balance
  5. Gut microbiome shifts → Akkermansia increase

Therapeutic Ketosis Levels:
  Nutritional ketosis: 0.5-3.0 mM β-HB
  MCT-induced: Faster onset, limited by GI tolerance
  Exogenous ketones: Rapid elevation, appetite suppression

Conditions Under Investigation:
  - Alzheimer disease: "Type 3 diabetes" hypothesis
  - Parkinson disease: Mitochondrial support
  - Migraine: Metabolic stability, reduced neuroinflammation
  - Cancer: Exploiting Warburg effect
  - PCOS: Insulin sensitization
\`\`\`

**Protein Interventions in Aging:**

\`\`\`
Sarcopenia Prevention:
  Protein: ≥1.2 g/kg/day (vs RDA 0.8)
  Leucine: 2.5-3g per meal (threshold effect)
  Distribution: Even distribution vs skewed (30g/meal max MPS)
  Timing: Pre-sleep protein (~30g casein) → overnight MPS

Anabolic Resistance:
  Age-related blunting of MPS response to protein/amino acids
  Mechanisms:
    - Reduced mTOR activation
    - Impaired amino acid transport
    - Altered leucine kinetics
  Counter-strategies:
    - Higher leucine threshold
    - Protein + resistance exercise synergy
    - HMB (β-hydroxy β-methylbutyrate) supplementation
\`\`\`

**Bariatric Surgery Nutrition:**

\`\`\`
Roux-en-Y Gastric Bypass:
  Macronutrient changes:
    - Reduced intake capacity
    - Malabsorption (protein, calcium, iron, B12)
    - Dumping syndrome (simple carbs)
  Adaptation period: 3-6 months for protein tolerance
  Lifelong: High protein (60-80g), multivitamin, B12 injections

Sleeve Gastrectomy:
  Better protein tolerance than RYGB
  B12 deficiency less common
  GERD risk ↑
\`\`\`

**Emerging Therapeutic Targets:**

\`\`\`
Metabolic Inflammation:
  NLRP3 inflammasome inhibition (saturated fat trigger)
  SFA→TLR4→NF-κB pathway
  Targeted: Omega-3 resolvins, specialized pro-resolving mediators

Brown Adipose Tissue Activation:
  Cold exposure, β3-agonists (mirabegron)
  Capsaicin, menthol (TRP channels)
  Potential: Energy expenditure, insulin sensitivity

Muscle-Organ Crosstalk:
  Myokines (irisin, myostatin, IL-6, IL-15)
  Exercise-induced: Mediate systemic benefits
  Therapeutic: Myokine mimetics

Mitochondrial Substrate Switching:
  Pyruvate dehydrogenase kinase (PDK) inhibitors
  Dichloroacetate: PDK inhibition → ↑PDH → ↑glucose oxidation
  Investigational: Pulmonary hypertension, lactic acidosis
\`\`\`

## Clinical Practice Applications

**Nutritional Genomics in Practice:**

\`\`\`
Available Testing:
  Direct-to-consumer: 23andMe, Ancestry (limited clinical utility)
  Clinical: Nutrigenomix, Genomix (CVD, T2DM risk variants)

Evidence-Based Applications:
  APOE genotyping: Statin eligibility discussion
  CYP variants: Drug-nutrient interactions (e.g., warfarin-vitamin K)
  FH genetic testing: Cascade screening, early intervention

Limitations:
  Small effect sizes for most variants
  Gene-environment interactions complex
  Epigenetics not captured
  Cost-effectiveness debated
\`\`\`

**Personalized Nutrition Algorithms:**

\`\`\`
Multi-omic Integration:
  Genomics + Metabolomics + Microbiome + Phenotype

Continuous Glucose Monitoring-Guided:
  Individual post-prandial responses
  Machine learning prediction
  Real-time dietary feedback

Artificial Intelligence:
  Image-based dietary assessment
  Personalized meal planning
  Behavioral coaching integration
\`\`\``,
      keyTerms: [
        { term: 'mTORC1', definition: 'Mechanistic target of rapamycin complex 1; integrates nutrient, energy, and growth factor signals to regulate protein synthesis and autophagy' },
        { term: 'AMPK', definition: 'AMP-activated protein kinase; cellular energy sensor activated by low energy states; promotes catabolic pathways' },
        { term: 'SREBP-1c', definition: 'Sterol regulatory element-binding protein 1c; master transcription factor regulating lipogenic gene expression' },
        { term: 'anabolic resistance', definition: 'Age-related reduction in muscle protein synthesis response to protein/amino acid intake' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived metabolite from choline/carnitine; associated with CVD risk' },
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects response to nutrients and dietary patterns' },
        { term: 'myokines', definition: 'Cytokines and signaling peptides secreted by skeletal muscle that mediate exercise benefits systemically' },
        { term: 'HMB', definition: 'β-hydroxy β-methylbutyrate; leucine metabolite shown to attenuate muscle protein breakdown, especially in catabolic states' },
      ],
      analogies: [
        'Nutrient-sensing pathways are like cellular GPS systems - mTORC1 says "resources abundant, proceed," while AMPK says "resources scarce, conserve."',
        'Precision nutrition is like having a metabolic fingerprint - your genetic and microbial profile determines which foods work best for you.',
        'The microbiome is like an internal organ that varies between individuals - processing macronutrients differently based on its composition.',
      ],
      examples: [
        'PCSK9 inhibitors (evolocumab, alirocumab) reduce LDL by 50-60% by mimicking loss-of-function variants',
        'APOE ε4 carriers show greater LDL reduction with saturated fat restriction than non-carriers',
        'Continuous glucose monitoring reveals high interindividual variability in glycemic response to identical foods',
        'Beta-hydroxybutyrate (ketone ester) supplementation achieves therapeutic ketosis without dietary restriction',
      ],
      clinicalNotes: `Clinical Implementation Pearls:

1. **Protein in elderly:** Recommend ≥1.2 g/kg/day distributed across meals (≥30g/meal) to overcome anabolic resistance

2. **NAFLD nutrition:** Fructose restriction (<10g/day) + omega-3 (1-2g/day) + Mediterranean diet → Histologic improvement

3. **Bariatric surgery:** Lifelong monitoring for protein, B12, iron, calcium, vitamin D deficiencies

4. **Ketogenic diet therapy:** Monitor serum β-hydroxybutyrate, lipid profile, growth in children; supplement with micronutrients

5. **Genotype-guided nutrition:** APOE ε4 carriers respond exceptionally well to Mediterranean diet pattern

6. **Sarcopenia intervention:** Combined protein (1.2-1.5g/kg) + resistance training + vitamin D optimization`,
    },
  },

  media: [
    {
      id: 'macronutrient-overview',
      type: 'diagram',
      filename: 'macronutrient-overview.svg',
      title: 'Macronutrient Overview',
      description: 'Visual summary of carbohydrates, proteins, and fats with food sources',
    },
    {
      id: 'carbohydrate-metabolism',
      type: 'diagram',
      filename: 'carbohydrate-metabolism.svg',
      title: 'Carbohydrate Metabolism Pathways',
      description: 'Glycolysis, glycogen synthesis, and gluconeogenesis pathways',
    },
    {
      id: 'lipoprotein-transport',
      type: 'diagram',
      filename: 'lipoprotein-transport.svg',
      title: 'Lipoprotein Transport',
      description: 'Chylomicrons, VLDL, LDL, HDL formation and function',
    },
  ],

  citations: [
    {
      id: 'dietary-guidelines-americans',
      type: 'article',
      title: 'Dietary Guidelines for Americans, 2020-2025',
      authors: ['U.S. Department of Agriculture', 'U.S. Department of Health and Human Services'],
      source: 'USDA/HHS',
      url: 'https://www.dietaryguidelines.gov',
    },
    {
      id: 'rodriguez-protein-requirements',
      type: 'article',
      title: 'Nutritional Recommendations for Resistance Training: Protein Requirements',
      authors: ['NR Rodriguez', 'NM Di Marco', 'S Langley'],
      source: 'Journal of the International Society of Sports Nutrition',
      url: 'https://doi.org/10.1186/s12970-019-0323-7',
    },
    {
      id: 'volek-ketogenic',
      type: 'article',
      title: 'Rethinking Fat as a Fuel: Endurance Training and Nutrition',
      authors: ['JS Volek', 'SL Phinney'],
      source: 'Keto Nutrition Foundation',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-micronutrients', targetType: 'topic', relationship: 'sibling', label: 'Micronutrients' },
    { targetId: 'nutrition-hydration', targetType: 'topic', relationship: 'sibling', label: 'Hydration' },
    { targetId: 'metabolism-carbohydrate', targetType: 'process', relationship: 'related', label: 'Carbohydrate Metabolism' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
  ],

  tags: {
    systems: ['gastrointestinal', 'endocrine', 'metabolic'],
    topics: ['nutrition', 'metabolism', 'preventive-medicine', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default macronutrients;
