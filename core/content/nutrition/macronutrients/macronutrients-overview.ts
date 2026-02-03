import type { EducationalContent } from '../../types';

/**
 * Macronutrients Overview
 *
 * Comprehensive guide to the three primary macronutrients (carbohydrates, proteins, fats)
 * plus fiber and water, covering their roles in energy metabolism, daily requirements,
 * digestion, absorption, and clinical applications.
 */

export const macronutrientsOverview: EducationalContent = {
  id: 'nutrition-macronutrients-overview',
  type: 'topic',
  name: 'Macronutrients',
  alternateNames: ['Macros', 'Energy Nutrients', 'Caloric Nutrients'],

  levels: {
    1: {
      level: 1,
      summary: 'Macronutrients are the main foods your body needs in large amounts every day: carbs for energy, proteins to build your body, and fats to protect your organs.',
      explanation: `Macronutrients are the "big" nutrients (macro means big!) that make up most of the food you eat. Your body needs lots of them every day to grow, stay strong, and have energy to play and learn.

**The Three Main Macronutrients:**

1. **Carbohydrates (Carbs)** - Your Body's Fuel
   - Found in: bread, pasta, rice, fruits, vegetables
   - What they do: Give you quick energy to run, think, and play
   - Think of them like: The gas that makes a car go!

2. **Proteins** - Your Body's Building Blocks
   - Found in: meat, fish, eggs, beans, nuts, dairy
   - What they do: Build and fix your muscles, skin, and all parts of your body
   - Think of them like: The bricks and wood that build a house!

3. **Fats** - Your Body's Protector and Energy Bank
   - Found in: butter, oil, nuts, avocados, fish
   - What they do: Protect your organs, keep you warm, store energy for later
   - Think of them like: A cozy blanket and a savings account!

**Two Other Important Macronutrients:**

4. **Fiber** - Your Digestive Helper
   - Found in: vegetables, fruits, whole grains, beans
   - What it does: Helps food move through your tummy and keeps you feeling full

5. **Water** - The Most Important!
   - Found in: water, juice, fruits, vegetables, all drinks
   - What it does: Every single part of your body needs water to work!

**Spanish Translation:**
Los macronutrientes son los nutrientes "grandes" que tu cuerpo necesita en grandes cantidades cada día: carbohidratos para energía, proteínas para construir tu cuerpo, y grasas para proteger tus órganos.`,
      keyTerms: [
        {
          term: 'macronutrients',
          definition: 'The nutrients your body needs in large amounts: carbohydrates, proteins, and fats',
          etymology: 'Macro comes from Greek meaning "large" - these are the nutrients you need the most of!'
        },
        {
          term: 'carbohydrates',
          definition: 'Foods like bread, pasta, and fruit that give you energy',
          relatedTerms: ['glucose', 'sugar', 'starch']
        },
        {
          term: 'proteins',
          definition: 'Foods like meat, eggs, and beans that help build and repair your body',
          relatedTerms: ['amino acids', 'muscles']
        },
        {
          term: 'fats',
          definition: 'Foods like butter, nuts, and oil that give you long-lasting energy and protect your body',
          relatedTerms: ['oils', 'fatty acids']
        }
      ],
      analogies: [
        'Macronutrients are like the three main ingredients in a recipe - you need lots of each one to make a complete meal!',
        'Carbs are like firewood that burns fast and bright. Fats are like coal that burns slowly for a long time.',
        'Proteins are like LEGO blocks - your body uses them to build everything from your hair to your toenails!'
      ],
      examples: [
        'A peanut butter sandwich has all three macronutrients: bread (carbs), peanut butter (protein and fat), which is why it gives you good energy!',
        'Athletes eat lots of pasta before a big game to fill their muscles with carbohydrate energy.',
        'Your body can only store about one day worth of carbohydrate energy, but can store fat energy for weeks or months!'
      ],
      patientCounselingPoints: [
        'Try to eat foods with all three macronutrients at each meal to feel full and have steady energy',
        'Colorful fruits and vegetables give you carbs plus vitamins',
        'Drink water throughout the day - your body needs it to use all the macronutrients!',
        'Growing kids need extra protein to build strong muscles and bones'
      ]
    },

    2: {
      level: 2,
      summary: 'Macronutrients provide energy and structural components: carbohydrates (4 kcal/g) for glucose, proteins (4 kcal/g) for amino acids, and fats (9 kcal/g) for fatty acids, with specific daily requirements.',
      explanation: `Macronutrients are organic compounds required in large quantities (grams) that provide energy and serve as building blocks for body tissues.

**Energy Yield:**
- Carbohydrates: 4 kilocalories per gram
- Proteins: 4 kilocalories per gram
- Fats: 9 kilocalories per gram
- Alcohol (not a nutrient): 7 kilocalories per gram

**1. CARBOHYDRATES**

*Types:*
- Simple sugars (monosaccharides): glucose, fructose, galactose
- Disaccharides: sucrose, lactose, maltose
- Complex carbs (polysaccharides): starch, glycogen
- Fiber: soluble and insoluble

*Functions:*
- Primary energy source, especially for brain and red blood cells
- Glycogen storage in liver (100g) and muscles (400g)
- Spares protein from being used for energy
- Necessary for complete fat metabolism

*Daily Requirement:* 130g minimum (brain glucose needs); 45-65% of total calories recommended

**2. PROTEINS**

*Composition:*
- Made of 20 amino acids (9 essential, must come from food)
- Complete proteins: contain all essential amino acids (animal sources)
- Incomplete proteins: lack some essential amino acids (most plant sources)

*Functions:*
- Build and repair tissues (muscle, skin, organs)
- Enzymes for all chemical reactions
- Hormones (insulin, growth hormone)
- Antibodies for immune function
- Transport molecules (hemoglobin)

*Daily Requirement:* 0.8 g/kg body weight (RDA); 10-35% of total calories; athletes may need 1.2-2.0 g/kg

**3. FATS (LIPIDS)**

*Types:*
- Saturated fats: solid at room temperature (animal fats, tropical oils)
- Unsaturated fats:
  - Monounsaturated (MUFA): olive oil, avocados
  - Polyunsaturated (PUFA): omega-3, omega-6 fatty acids
- Trans fats: industrial (avoid); some natural (dairy, meat)

*Functions:*
- Concentrated energy source and storage
- Cell membrane structure (phospholipids)
- Hormone production (steroid hormones)
- Absorption of fat-soluble vitamins (A, D, E, K)
- Insulation and organ protection

*Daily Requirement:* 20-35% of total calories; limit saturated fat to <10%; include essential fatty acids (omega-3, omega-6)

**4. FIBER**

*Soluble fiber:* Dissolves in water; lowers cholesterol; slows glucose absorption (oats, beans, apples)
*Insoluble fiber:* Doesn't dissolve; promotes bowel regularity (wheat bran, vegetables)

*Daily Requirement:* 25g (women), 38g (men); 14g per 1000 calories

**5. WATER**

*Functions:* Solvent, temperature regulation, nutrient transport, waste removal, joint lubrication
*Daily Requirement:* 2.7L women, 3.7L men (total from all sources)

**Spanish Translation:**
Los macronutrientes proporcionan energía y componentes estructurales: carbohidratos (4 kcal/g) para glucosa, proteínas (4 kcal/g) para aminoácidos, y grasas (9 kcal/g) para ácidos grasos.`,
      keyTerms: [
        {
          term: 'kilocalorie (kcal)',
          definition: 'Unit of energy in food; often called "calorie" on food labels; 1 kcal = 1000 calories',
          pronunciation: 'KIL-oh-cal-or-ee'
        },
        {
          term: 'essential amino acids',
          definition: 'Nine amino acids the body cannot make and must obtain from food',
          relatedTerms: ['complete protein', 'protein quality']
        },
        {
          term: 'glycogen',
          definition: 'Storage form of glucose in liver and muscles',
          pronunciation: 'GLY-koh-jen'
        },
        {
          term: 'essential fatty acids',
          definition: 'Fats the body cannot synthesize: linoleic acid (omega-6) and alpha-linolenic acid (omega-3)',
          relatedTerms: ['omega-3', 'omega-6']
        }
      ],
      analogies: [
        'Think of macronutrient ratios like a balanced budget - you need the right percentages of each to meet your goals',
        'Fat having 9 calories per gram compared to 4 for carbs and protein is like premium fuel being more energy-dense than regular fuel'
      ],
      examples: [
        'A 2000-calorie diet might include: 275g carbs (55%), 75g protein (15%), 67g fat (30%)',
        'Endurance athletes increase carb intake to 60-70% to maximize glycogen stores',
        'Bodybuilders may consume 1.6-2.2 g/kg protein to support muscle growth'
      ],
      clinicalNotes: 'Acceptable Macronutrient Distribution Ranges (AMDR) from IOM: Carbohydrate 45-65%, Protein 10-35%, Fat 20-35%. Individual needs vary based on age, activity level, and health conditions.'
    },

    3: {
      level: 3,
      summary: 'Macronutrient metabolism involves coordinated digestion, absorption, and metabolic pathways regulated by hormones (insulin, glucagon, cortisol) to maintain energy homeostasis and support anabolic and catabolic processes.',
      explanation: `**CARBOHYDRATE METABOLISM**

*Digestion:*
1. Mouth: Salivary amylase begins starch → maltose
2. Stomach: Amylase inactivated by acid
3. Small intestine: Pancreatic amylase continues; brush border enzymes (maltase, sucrase, lactase) → monosaccharides
4. Absorption: SGLT1 (active with Na+), GLUT5 (fructose) → portal circulation → liver

*Major Pathways:*
- **Glycolysis:** Glucose → 2 pyruvate + 2 ATP + 2 NADH (cytoplasm)
- **Gluconeogenesis:** Amino acids, lactate, glycerol → glucose (liver, kidney)
- **Glycogenesis:** Glucose → glycogen (storage)
- **Glycogenolysis:** Glycogen → glucose (mobilization)
- **Pentose phosphate pathway:** Generates NADPH and ribose-5-phosphate

*Regulation:*
- **Fed state (insulin dominant):** ↑ glycolysis, ↑ glycogenesis, ↑ lipogenesis
- **Fasted state (glucagon dominant):** ↑ gluconeogenesis, ↑ glycogenolysis, ↑ lipolysis

**PROTEIN METABOLISM**

*Digestion:*
1. Stomach: Pepsin (activated by HCl) → polypeptides
2. Small intestine: Pancreatic proteases (trypsin, chymotrypsin, elastase) → oligopeptides
3. Brush border peptidases → amino acids, dipeptides, tripeptides
4. Absorption: Multiple amino acid transporters (Na+-dependent) → portal circulation

*Major Pathways:*
- **Protein synthesis:** Amino acids → proteins (ribosomes; mTOR-regulated)
- **Protein degradation:** Ubiquitin-proteasome pathway, autophagy
- **Transamination:** Amino acid ↔ α-keto acid (transfers amino groups)
- **Deamination:** Amino acid → NH3 (toxic) → urea (liver) → excretion
- **Gluconeogenesis:** Glucogenic amino acids → glucose (18 out of 20)

*Nitrogen Balance:*
- Positive: Intake > excretion (growth, pregnancy, recovery)
- Equilibrium: Intake = excretion (healthy adults)
- Negative: Intake < excretion (starvation, illness, excessive exercise)

**FAT METABOLISM**

*Digestion:*
1. Mouth/stomach: Minimal lipase activity
2. Small intestine: Bile salts emulsify fats → pancreatic lipase → monoglycerides + fatty acids
3. Micelles form → absorption into enterocytes
4. Reassembly into triglycerides → packaged in chylomicrons → lymphatic system → bloodstream

*Major Pathways:*
- **Lipolysis:** Triglycerides → glycerol + 3 fatty acids (hormone-sensitive lipase)
- **β-oxidation:** Fatty acids → acetyl-CoA + ATP (mitochondria)
- **Lipogenesis:** Acetyl-CoA → fatty acids → triglycerides (fed state)
- **Ketogenesis:** Acetyl-CoA → ketone bodies (liver; during fasting/low-carb)

*Essential Fatty Acid Functions:*
- Linoleic acid (omega-6) → arachidonic acid → eicosanoids (inflammatory mediators)
- α-linolenic acid (omega-3) → EPA, DHA → anti-inflammatory effects, brain structure

**INTEGRATED METABOLISM**

*Fed State (0-4 hours post-meal):*
- ↑ Insulin, ↓ glucagon
- Glucose → glycogen (liver, muscle)
- Excess glucose → fat via lipogenesis
- Amino acids → protein synthesis
- Dietary fat → storage in adipose tissue

*Post-absorptive State (4-12 hours):*
- ↓ Insulin, ↑ glucagon
- Liver glycogenolysis maintains blood glucose
- Begin fat oxidation for energy

*Fasting State (>12 hours):*
- ↓↓ Insulin, ↑↑ glucagon, ↑ cortisol, ↑ epinephrine
- Gluconeogenesis (liver) from amino acids, glycerol
- Lipolysis and fatty acid oxidation dominant
- Ketone body production for brain fuel

*Prolonged Starvation (>3 days):*
- Protein-sparing: Ketones become primary brain fuel
- Minimal protein catabolism to preserve lean mass
- Basal metabolic rate decreases

**Spanish Translation:**
El metabolismo de macronutrientes involucra digestión coordinada, absorción y vías metabólicas reguladas por hormonas (insulina, glucagón, cortisol) para mantener la homeostasis energética.`,
      keyTerms: [
        {
          term: 'glycolysis',
          definition: 'Metabolic pathway converting glucose to pyruvate, generating ATP; occurs in cytoplasm',
          pronunciation: 'gly-KOL-ih-sis',
          etymology: 'Greek: glyco (sugar) + lysis (breakdown)'
        },
        {
          term: 'gluconeogenesis',
          definition: 'Synthesis of glucose from non-carbohydrate precursors (amino acids, lactate, glycerol); primarily in liver',
          pronunciation: 'gloo-ko-nee-oh-JEN-eh-sis'
        },
        {
          term: 'β-oxidation',
          definition: 'Mitochondrial process breaking down fatty acids into acetyl-CoA units for energy',
          pronunciation: 'BAY-tuh ox-ih-DAY-shun'
        },
        {
          term: 'ketogenesis',
          definition: 'Liver production of ketone bodies (acetoacetate, β-hydroxybutyrate, acetone) from acetyl-CoA during low carbohydrate availability',
          pronunciation: 'kee-toh-JEN-eh-sis'
        }
      ],
      analogies: [
        'The fed-to-fasted metabolic transition is like switching a hybrid car from electric (glucose) to gasoline (fat) mode',
        'Insulin is like a key that opens doors in cells to let glucose enter; without it, glucose stays in the bloodstream'
      ],
      clinicalNotes: 'Respiratory quotient (RQ) indicates fuel source: RQ = 1.0 (pure carb oxidation), 0.7 (pure fat oxidation), 0.8 (protein), ~0.85 (mixed diet). Used in indirect calorimetry to assess metabolic state.'
    },

    4: {
      level: 4,
      summary: 'Macronutrient requirements vary based on physiological state, activity level, and disease conditions, with evidence-based guidelines for athletic performance, weight management, diabetes, kidney disease, and specialized therapeutic diets.',
      explanation: `**CLINICAL MACRONUTRIENT APPLICATIONS**

**1. DIABETES MANAGEMENT**

*Type 1 Diabetes:*
- Carbohydrate counting essential for insulin dosing
- Insulin-to-carb ratio: typically 1 unit per 10-15g carb (individualized)
- Timing: Rapid-acting insulin before meals covers carbs
- Low-carb approaches: May reduce insulin needs and glycemic variability; risk of hypoglycemia and DKA if not carefully managed

*Type 2 Diabetes:*
- Carb quality > quantity for many patients
- Low glycemic index foods improve postprandial glucose
- Protein intake: 1-1.5 g/kg; excess may worsen kidney function if nephropathy present
- Fat: Emphasize MUFA/PUFA; limit saturated fat <7% calories
- Evidence: Mediterranean diet, DASH diet, low-carb diets all effective when adhered to

**2. CHRONIC KIDNEY DISEASE**

*CKD Stages 3-4 (pre-dialysis):*
- Protein: 0.6-0.8 g/kg/day to slow progression
- Phosphorus: 800-1000 mg/day (protein restriction helps)
- Potassium: Restrict if hyperkalemic
- Energy: 30-35 kcal/kg to prevent catabolism

*Dialysis:*
- Hemodialysis: ↑ protein to 1.2 g/kg (losses during dialysis)
- Peritoneal dialysis: 1.2-1.5 g/kg (greater protein losses)
- Fluid restriction: Often 800-1000 mL/day

**3. ATHLETIC PERFORMANCE**

*Endurance Athletes:*
- Carbs: 6-10 g/kg/day during heavy training
- Protein: 1.2-1.4 g/kg/day
- Carb loading: 10-12 g/kg for 36-48h pre-event
- During exercise: 30-60g carb/hour (>2.5h events)
- Recovery: 1-1.2 g/kg carb within 30 min post-exercise

*Strength/Power Athletes:*
- Protein: 1.6-2.2 g/kg/day for muscle hypertrophy
- Carbs: 5-6 g/kg/day (adequate for training fuel)
- Timing: 20-40g protein post-workout optimizes muscle protein synthesis
- Leucine threshold: ~2-3g per meal for maximal mTOR activation

**4. WEIGHT MANAGEMENT**

*Energy Balance:*
- Weight loss: 500-750 kcal/day deficit → 0.5-1 kg/week loss
- Macronutrient composition less important than adherence
- Higher protein (1.2-1.6 g/kg) preserves lean mass during weight loss
- Fiber: 30+ g/day increases satiety

*Low-Carbohydrate Diets:*
- Ketogenic (<50g/day): Rapid initial weight loss (water/glycogen); similar fat loss to balanced diets long-term
- Moderate LC (50-130g/day): May improve adherence vs. very low
- Side effects: Constipation, fatigue, headache initially; LDL may increase in some individuals

**5. LIVER DISEASE**

*Cirrhosis:*
- Protein: 1.2-1.5 g/kg (NOT restricted; outdated practice)
- Vegetable protein preferred (less ammonia production)
- Frequent small meals (prevent catabolism)
- Branched-chain amino acids (BCAA) may benefit hepatic encephalopathy

**6. CRITICAL ILLNESS**

*Acute Phase:*
- Energy: 25-30 kcal/kg (not overfeeding)
- Protein: 1.2-2.0 g/kg (higher if burns, trauma)
- Early enteral nutrition (within 24-48h) preferred
- Omega-3 supplementation: Controversial; some evidence for ARDS

**MACRONUTRIENT INTERACTIONS WITH MEDICATIONS**

- **Warfarin:** Consistent vitamin K intake (green vegetables have fat-soluble K)
- **Levodopa:** Protein competes for absorption; distribute protein evenly through day
- **MAO inhibitors:** Tyramine in aged proteins (cheese, cured meats) causes hypertensive crisis
- **Diabetes medications:** Carb intake directly affects dosing

**SPECIALIZED DIETS**

*Ketogenic Diet (4:1 or 3:1 fat:protein+carb):*
- Therapeutic for drug-resistant epilepsy (>50% seizure reduction in ~50% patients)
- GLUT1 deficiency syndrome
- Requires medical supervision; vitamin/mineral supplementation

*Very Low-Calorie Ketogenic Diet (VLCKD):*
- <800 kcal/day, <50g carb
- Rapid weight loss; medical monitoring required
- Preserves lean mass better than standard very low-calorie

**Spanish Translation:**
Los requerimientos de macronutrientes varían según el estado fisiológico, nivel de actividad y condiciones de enfermedad, con guías basadas en evidencia para rendimiento atlético, manejo de peso, diabetes, enfermedad renal y dietas terapéuticas especializadas.`,
      keyTerms: [
        {
          term: 'insulin-to-carb ratio',
          definition: 'Amount of insulin (units) needed to cover a specific amount of carbohydrate (grams); individualized for type 1 diabetes management'
        },
        {
          term: 'nitrogen balance',
          definition: 'Comparison of nitrogen intake (protein) vs. excretion (urine, feces); indicates protein status: positive (anabolic), negative (catabolic), equilibrium (maintenance)'
        },
        {
          term: 'respiratory quotient (RQ)',
          definition: 'Ratio of CO2 produced to O2 consumed; indicates predominant fuel: 1.0 = carbohydrate, 0.7 = fat, 0.8 = protein'
        },
        {
          term: 'mTOR',
          definition: 'Mechanistic target of rapamycin; protein kinase regulating cell growth and protein synthesis; activated by insulin, amino acids (especially leucine), and resistance exercise',
          pronunciation: 'em-TOR'
        }
      ],
      clinicalNotes: 'KDOQI guidelines for CKD protein: Stage 1-2: no restriction; Stage 3-5 pre-dialysis: 0.6-0.8 g/kg; HD: 1.0-1.2 g/kg; PD: 1.2-1.5 g/kg. Monitor albumin, prealbumin, and nitrogen balance to prevent protein-energy wasting.'
    },

    5: {
      level: 5,
      summary: 'Contemporary macronutrient research challenges traditional paradigms, emphasizing individual metabolic responses, nutrient timing, food quality over macronutrient ratios, and personalized nutrition based on genetics, microbiome, and continuous glucose monitoring.',
      explanation: `**EVIDENCE-BASED MACRONUTRIENT CONTROVERSIES**

**1. OPTIMAL MACRONUTRIENT DISTRIBUTION**

*Traditional Dogma vs. Current Evidence:*
- AMDR (45-65% carb, 10-35% protein, 20-35% fat) based on population-level recommendations
- Individual metabolic flexibility varies dramatically
- No single optimal ratio for all individuals or conditions

*Key Trials:*
- **DIETFITS (2018):** Low-fat vs. low-carb; no difference in weight loss at 12 months when matched for quality and adherence
- **PREDIMED (2013):** Mediterranean diet (40% fat, primarily MUFA) superior to low-fat for cardiovascular outcomes
- **Look AHEAD (2013):** Intensive lifestyle intervention (weight loss via calorie restriction) did not reduce CV events in type 2 diabetes (but improved glycemia, reduced medications)

*Conclusion:* Adherence and food quality matter more than macronutrient percentages for most outcomes

**2. PROTEIN REQUIREMENTS: EVOLVING UNDERSTANDING**

*RDA (0.8 g/kg) Limitations:*
- Set at minimum to prevent deficiency, not optimize health
- Nitrogen balance studies may underestimate needs
- Doesn't account for aging (sarcopenia), disease, or training

*Higher Protein Evidence:*
- **Sarcopenia prevention:** 1.0-1.2 g/kg in elderly preserves muscle mass
- **Weight loss:** 1.2-1.6 g/kg improves satiety, preserves lean mass (PSMF studies)
- **Resistance training:** 1.6-2.2 g/kg supports hypertrophy (Morton et al., 2018 meta-analysis)
- **Protein distribution:** 25-30g per meal (with ~2.5g leucine) optimizes muscle protein synthesis

*Safety:*
- No evidence of harm in healthy kidneys at intakes up to 2.0-2.5 g/kg
- Pre-existing CKD: Restriction may slow progression, but excessive restriction causes malnutrition

**3. CARBOHYDRATE QUALITY AND METABOLIC HEALTH**

*Glycemic Index/Load Limitations:*
- High inter- and intra-individual variability (Zeevi et al., Cell 2015)
- Food combinations, meal timing, fiber content all modify response
- Individual microbiome composition affects glucose response

*Continuous Glucose Monitoring Insights:*
- "Healthy" individuals show surprising glycemic variability
- Same food causes different responses in different people
- Personalized nutrition algorithms (using genetics, microbiome, CGM) outperform standard dietary advice

*Fiber and Gut Microbiome:*
- SCFA production (butyrate, propionate, acetate) has metabolic benefits beyond fiber's mechanical effects
- Prebiotic fibers (inulin, FOS) selectively promote beneficial bacteria
- High-fiber diets associated with ↓ all-cause mortality (Thorpe et al., JAMA 2023: 29% reduction per 10g/day increase)

**4. FAT: REHABILITATION OF A MACRONUTRIENT**

*Saturated Fat Controversy:*
- Traditional view: SFA → ↑ LDL → ↑ CVD
- Recent meta-analyses: Weaker association than thought; individual SFA (palmitic vs. stearic) differ in effects
- Food matrix matters: Cheese vs. butter vs. red meat have different CVD associations despite similar SFA content
- Current guidelines: Still limit to <10%, but emphasis shifting to replacing SFA with PUFA (not refined carbs)

*Omega-3 Fatty Acids:*
- **REDUCE-IT (2019):** Icosapent ethyl (EPA) 4g/day reduced CV events 25% in high-risk patients
- **VITAL (2018):** Fish oil supplementation did NOT reduce CVD in general population
- Conclusion: High-dose purified EPA beneficial in specific populations; routine supplementation not recommended

**5. NUTRIENT TIMING AND METABOLIC FLEXIBILITY**

*Time-Restricted Eating:*
- Eating within 8-12h window may improve insulin sensitivity, inflammation independent of calorie restriction
- Mechanisms: Circadian alignment, autophagy upregulation, metabolic switching
- Long-term adherence and safety data still limited

*Carbohydrate Periodization in Athletes:*
- "Train low, compete high" enhances mitochondrial adaptations, fat oxidation
- May improve performance in ultra-endurance events
- Not appropriate for all sports or training phases

**6. PERSONALIZED NUTRITION**

*Genetic Polymorphisms:*
- FTO (fat mass and obesity-associated gene): May respond better to higher protein for weight loss
- APOE ε4: Higher saturated fat → greater LDL increase
- TCF7L2: Higher carb sensitivity in diabetes risk
- Clinical utility: Limited; diet quality matters more than genotype for most

*Microbiome-Based Predictions:*
- Bacteroides vs. Prevotella enterotypes may predict response to fiber
- Individual microbiome composition affects SCFA production, glucose response
- Prebiotic/probiotic interventions show promise but need standardization

**7. ADVANCED CLINICAL APPLICATIONS**

*Cancer Cachexia:*
- Protein: 1.5-2.0 g/kg + omega-3 (1-2g EPA/day) may slow muscle wasting
- Energy: 30-35 kcal/kg (difficult to achieve with anorexia)
- Antioxidants during treatment: Controversial; high-dose may reduce efficacy

*Bariatric Surgery Optimization:*
- Pre-op: High-protein (>60g/day), low-carb to reduce liver volume
- Post-op phases: Liquid → pureed → soft → regular over 6-8 weeks
- Long-term: 60-80g protein/day minimum; lifelong B12, iron, calcium, vitamin D
- Dumping syndrome: Avoid simple sugars, separate liquids from solids

*Chronic Heart Failure:*
- Cardiac cachexia: Protein 1.2-1.5 g/kg
- Sodium restriction: <2000 mg/day (individualized based on volume status)
- Fluid restriction: Often 1.5-2 L/day
- Omega-3: 1g/day may reduce hospitalizations (GISSI-HF)

**FUTURE DIRECTIONS**

- **Metabolomics:** Identifying metabolic signatures predicting dietary response
- **Nutrigenomics:** Integration of genetic, epigenetic, and expression data for precision nutrition
- **AI-driven recommendations:** Machine learning algorithms using multi-omic data + CGM + microbiome
- **Sustainable nutrition:** Balancing health optimization with environmental impact (planetary health diet)

**Spanish Translation:**
La investigación contemporánea de macronutrientes desafía paradigmas tradicionales, enfatizando respuestas metabólicas individuales, momento de nutrientes, calidad de alimentos sobre proporciones de macronutrientes, y nutrición personalizada basada en genética, microbioma y monitoreo continuo de glucosa.`,
      keyTerms: [
        {
          term: 'metabolic flexibility',
          definition: 'Ability to efficiently switch between fat and carbohydrate oxidation based on fuel availability; impaired in insulin resistance and metabolic syndrome'
        },
        {
          term: 'muscle protein synthesis (MPS)',
          definition: 'Anabolic process of building new muscle proteins; stimulated by resistance exercise and amino acids (especially leucine); balanced against muscle protein breakdown determines net muscle balance'
        },
        {
          term: 'short-chain fatty acids (SCFA)',
          definition: 'Bacterial fermentation products of fiber (acetate, propionate, butyrate); provide colonocyte energy, improve insulin sensitivity, reduce inflammation'
        },
        {
          term: 'enterotype',
          definition: 'Gut microbiome classification based on dominant genera (Bacteroides vs. Prevotella vs. Ruminococcus); may predict dietary response and metabolic phenotype'
        }
      ],
      clinicalNotes: 'ADA 2024 Standards: No ideal percentage of calories from carb, protein, fat for all people with diabetes. Medical nutrition therapy should be individualized. Reducing overall carb intake shows most evidence for improving glycemia. Emphasize non-starchy vegetables, minimize added sugars and refined grains, individualize based on personal and cultural preferences.'
    }
  },

  media: [],
  citations: [
    {
      id: 'dri-macronutrients',
      type: 'textbook',
      title: 'Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids',
      source: 'Institute of Medicine',
      url: 'https://www.nap.edu/catalog/10490'
    },
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Medical Care in Diabetes—2024',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care/issue/47/Supplement_1'
    }
  ],
  crossReferences: [
    { targetId: 'nutrition-carbohydrates', targetType: 'concept', relationship: 'child', label: 'Carbohydrates' },
    { targetId: 'nutrition-proteins', targetType: 'concept', relationship: 'child', label: 'Proteins' },
    { targetId: 'nutrition-fats', targetType: 'concept', relationship: 'child', label: 'Fats' },
    { targetId: 'nutrition-fiber', targetType: 'concept', relationship: 'child', label: 'Dietary Fiber' },
    { targetId: 'nutrition-water', targetType: 'concept', relationship: 'child', label: 'Water' }
  ],
  tags: {
    systems: ['digestive', 'endocrine', 'musculoskeletal'],
    topics: ['nutrition', 'metabolism', 'macronutrients', 'energy'],
    keywords: ['carbohydrates', 'proteins', 'fats', 'fiber', 'water', 'energy', 'metabolism', 'insulin', 'diabetes'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'pediatrics']
    }
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Claude Opus 4.5']
};
