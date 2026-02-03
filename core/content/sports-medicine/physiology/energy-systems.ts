/**
 * Energy Systems - Comprehensive Educational Content
 *
 * Covers the three energy systems (ATP-PCr, glycolytic, oxidative) and their
 * contributions to exercise performance at different intensities and durations.
 */

import { EducationalContent } from '../../types';

export const energySystems: EducationalContent = {
  id: 'sports-med-energy-systems',
  type: 'concept',
  name: 'Energy Systems',
  alternateNames: ['Bioenergetics', 'Metabolic Pathways for Exercise', 'ATP Production Systems'],

  levels: {
    1: {
      level: 1,
      summary: 'Your body has three different ways to make energy for exercise - one for quick bursts, one for medium efforts, and one for long activities.',
      explanation: `## How Your Body Makes Energy

Think of your body like a car that can use three different types of fuel!

**The Quick Energy System (like rocket fuel)**
- Used for super fast, powerful movements
- Lasts only about 10-15 seconds
- Examples: Sprinting to catch a ball, jumping as high as you can
- It's already stored in your muscles, ready to go!

**The Medium Energy System (like regular gas)**
- Kicks in when quick energy runs out
- Lasts for about 30 seconds to 2 minutes
- Examples: Running a fast lap, swimming a race
- Makes your muscles feel tired and "burn"

**The Long-Lasting Energy System (like a hybrid battery)**
- Used for activities that go on and on
- Can last for hours if you have enough food and water
- Examples: Jogging, biking, hiking
- Needs oxygen to work (that's why you breathe harder!)

**How They Work Together**
All three systems work at the same time, but one takes the lead depending on what you're doing. Short and fast? Quick energy leads. Long and steady? The lasting system takes over!`,
      keyTerms: [
        { term: 'energy', definition: 'The power your body needs to move and do activities' },
        { term: 'ATP', definition: 'A tiny energy package your muscles use like a battery', pronunciation: 'ay-tee-pee' },
        { term: 'oxygen', definition: 'A gas in the air you breathe that helps make energy' },
      ],
      analogies: [
        'Quick energy is like the emergency flashlight in your drawer - bright but runs out fast!',
        'Medium energy is like a campfire - gives good heat but needs fuel and doesn\'t last forever.',
        'Long-lasting energy is like a power plant - makes energy slowly but can keep going all day.',
      ],
      examples: [
        'When you sprint in tag, your quick energy system lets you run super fast for a few seconds.',
        'During a soccer game, all three systems work together depending on whether you\'re sprinting, jogging, or resting.',
      ],
    },
    2: {
      level: 2,
      summary: 'The body produces ATP through three energy systems: the phosphagen system for immediate power (10-15 sec), glycolysis for short-duration high intensity (30-120 sec), and oxidative phosphorylation for prolonged activity (>2 min).',
      explanation: `## The Three Energy Systems

Your muscles need ATP (adenosine triphosphate) to contract. The body has three pathways to regenerate ATP:

### 1. Phosphagen System (ATP-PCr)
**Duration:** 10-15 seconds
**Intensity:** Maximum effort

- Uses creatine phosphate (PCr) stored in muscles
- Fastest way to make ATP
- No oxygen needed (anaerobic)
- Limited stores - runs out quickly
- **Used for:** Sprints, jumps, throws, lifting heavy weights

### 2. Glycolytic System (Anaerobic Glycolysis)
**Duration:** 30 seconds to 2 minutes
**Intensity:** High

- Breaks down glucose (blood sugar) or glycogen (stored sugar)
- Doesn't need oxygen
- Produces lactic acid as a byproduct
- The "burn" you feel during hard exercise
- **Used for:** 400m sprint, intense basketball plays, fast swimming

### 3. Oxidative System (Aerobic)
**Duration:** 2+ minutes to hours
**Intensity:** Low to moderate

- Uses carbohydrates and fats with oxygen
- Happens in mitochondria (cell "powerhouses")
- Most efficient but slowest system
- Produces CO2 and water as byproducts
- **Used for:** Distance running, cycling, swimming laps

## Energy System Interaction

All three systems work together but contribute differently based on:
- Exercise intensity (how hard)
- Exercise duration (how long)
- Your fitness level

| Activity | Primary System | Secondary System |
|----------|---------------|------------------|
| 100m sprint | Phosphagen | Glycolytic |
| 800m run | Glycolytic | Oxidative |
| Marathon | Oxidative | Glycolytic |`,
      keyTerms: [
        { term: 'ATP', definition: 'Adenosine triphosphate - the energy currency that powers muscle contractions', pronunciation: 'ay-tee-pee' },
        { term: 'creatine phosphate', definition: 'A molecule stored in muscles that can quickly regenerate ATP' },
        { term: 'glycolysis', definition: 'The breakdown of glucose to produce ATP, can occur with or without oxygen' },
        { term: 'aerobic', definition: 'Energy production that requires oxygen' },
        { term: 'anaerobic', definition: 'Energy production without oxygen' },
        { term: 'lactic acid', definition: 'A byproduct of anaerobic glycolysis that contributes to muscle fatigue' },
      ],
      analogies: [
        'The phosphagen system is like cash in your pocket - immediately available but limited.',
        'Glycolysis is like an ATM withdrawal - takes a moment but gives you more.',
        'Oxidative metabolism is like a direct deposit - slow but can provide unlimited amounts.',
      ],
    },
    3: {
      level: 3,
      summary: 'Energy for muscular contraction is derived from ATP hydrolysis, with regeneration occurring through three distinct but interrelated metabolic pathways: the phosphagen system (immediate), anaerobic glycolysis (short-term), and oxidative phosphorylation (long-term), each with specific enzymatic regulation and substrate utilization patterns.',
      explanation: `## ATP and Energy Transfer

Muscle contraction requires ATP hydrolysis:
**ATP + H2O → ADP + Pi + Energy**
- Myosin ATPase catalyzes this reaction
- Only ~85g ATP stored in body (enough for ~2 sec of max exercise)
- Continuous regeneration essential

## The Phosphagen System

**Key Reactions:**
1. Creatine Kinase: PCr + ADP ↔ Cr + ATP
2. Adenylate Kinase: 2 ADP ↔ ATP + AMP

**Characteristics:**
- Substrate: Phosphocreatine (~80-100g stored in muscle)
- Rate: Very high (can double ATP turnover rate)
- Capacity: Low (~5-8 kcal)
- Duration: 10-15 seconds at maximum effort
- Regulation: Mass action (substrate availability)

**Recovery:** PCr restored within 3-5 minutes of rest

## Anaerobic Glycolysis

**Pathway:**
Glucose/Glycogen → Glucose-6-P → ... → Pyruvate → Lactate

**Net ATP Yield:**
- From blood glucose: 2 ATP
- From muscle glycogen: 3 ATP

**Key Regulatory Enzymes:**
- Hexokinase: Glucose → G-6-P
- Phosphofructokinase (PFK): F-6-P → F-1,6-BP (rate-limiting)
- Pyruvate kinase: PEP → Pyruvate

**Lactate Production:**
- Lactate dehydrogenase: Pyruvate + NADH → Lactate + NAD+
- Regenerates NAD+ for continued glycolysis
- Lactate threshold: ~65-80% VO2max in trained individuals

**Capacity:** ~1.2 mol ATP/min; total ~100 kcal

## Oxidative Phosphorylation

**Substrates:**
- Carbohydrates (glycogen, glucose)
- Fats (free fatty acids, intramuscular triglycerides)
- Proteins (amino acids - minor contribution)

**Pathway Components:**
1. Glycolysis → Pyruvate
2. Pyruvate → Acetyl-CoA (PDH complex)
3. Beta-oxidation of fatty acids → Acetyl-CoA
4. Krebs Cycle: Acetyl-CoA → CO2 + NADH + FADH2
5. Electron Transport Chain: NADH/FADH2 → ATP

**ATP Yield:**
- Glucose: ~30-32 ATP (aerobic complete oxidation)
- Palmitate (16-C fatty acid): ~106 ATP

**Capacity:** 0.5-1.0 mol ATP/min; virtually unlimited total

## Energy System Integration

**Crossover Concept:**
- At low intensity: ~60% fat, ~40% carbs
- As intensity increases: Greater reliance on carbohydrates
- At maximum intensity: Nearly 100% carbohydrate

**Factors Affecting Substrate Use:**
- Exercise intensity
- Exercise duration
- Training status
- Carbohydrate availability
- Hormonal milieu`,
      keyTerms: [
        { term: 'phosphocreatine (PCr)', definition: 'High-energy phosphate compound that rapidly regenerates ATP via creatine kinase reaction; primary substrate for phosphagen system' },
        { term: 'phosphofructokinase (PFK)', definition: 'Rate-limiting enzyme of glycolysis; allosterically regulated by ATP, ADP, citrate, and other metabolites' },
        { term: 'pyruvate dehydrogenase (PDH)', definition: 'Enzyme complex that converts pyruvate to acetyl-CoA, linking glycolysis to the Krebs cycle' },
        { term: 'lactate threshold', definition: 'Exercise intensity at which blood lactate begins to accumulate exponentially; marker of aerobic fitness' },
        { term: 'beta-oxidation', definition: 'Metabolic pathway that breaks down fatty acids into acetyl-CoA units for oxidative metabolism' },
        { term: 'crossover concept', definition: 'Model describing the shift from fat to carbohydrate oxidation as exercise intensity increases' },
      ],
      clinicalNotes: 'Understanding energy systems is essential for training prescription. Interval training improves lactate threshold. Carbohydrate availability significantly impacts high-intensity performance.',
    },
    4: {
      level: 4,
      summary: 'Bioenergetics during exercise involves coordinated regulation of the phosphagen, glycolytic, and oxidative systems through allosteric enzyme modulation, substrate availability, and hormonal control, with the relative contribution determined by exercise intensity, duration, and metabolic perturbation, governed by concepts of power output versus capacity.',
      explanation: `## Phosphagen System Biochemistry

### Creatine Kinase Reaction
**PCr + ADP + H+ ↔ Cr + ATP**
- ΔG°' = -12.5 kJ/mol
- Near-equilibrium reaction
- Functions as temporal and spatial energy buffer
- Creatine shuttle hypothesis: CK isoforms at mitochondria and myofibrils

### Adenylate Kinase and AMP Signaling
**2 ADP ↔ ATP + AMP**
- Myokinase reaction
- AMP accumulation signals metabolic stress
- AMP activates:
  - AMPK (AMP-activated protein kinase)
  - Phosphorylase (glycogenolysis)
  - PFK (glycolysis)

### PCr Recovery Kinetics
- Monoexponential recovery
- τ (time constant) ≈ 20-30 sec (fast component)
- Full recovery: 3-5 minutes
- Reflects mitochondrial oxidative capacity
- Impaired in mitochondrial disorders, heart failure

## Glycolytic Regulation

### Allosteric Control Points

**Hexokinase:**
- Inhibited by G-6-P (product inhibition)
- Muscle isoform (HK-II) with higher Km

**Phosphofructokinase (PFK-1):**
- Rate-limiting step
- Activators: AMP, ADP, Pi, NH4+, fructose-2,6-bisphosphate
- Inhibitors: ATP, citrate, H+
- pH sensitivity explains fatigue mechanism

**Pyruvate Kinase:**
- Activated by fructose-1,6-bisphosphate (feedforward)
- Inhibited by ATP, alanine

### Lactate Dynamics
**Production:**
- LDH catalyzes: Pyruvate + NADH ↔ Lactate + NAD+
- Muscle LDH-5 (M4) favors lactate production
- Serves to regenerate NAD+ for glycolysis

**Clearance:**
- Oxidation in type I fibers, heart, other tissues
- Gluconeogenesis in liver (Cori cycle)
- Monocarboxylate transporters (MCT1, MCT4)

**Lactate Shuttle:**
- Cell-cell shuttle: Lactate as intercellular fuel
- Intracellular shuttle: Cytosolic → mitochondrial oxidation

## Oxidative Phosphorylation Regulation

### Mitochondrial Respiration Control
**States of Respiration:**
- State 3: ADP present, maximal respiration
- State 4: ADP depleted, minimal respiration
- Respiratory Control Ratio: State 3/State 4

**Control Points:**
1. Substrate supply (pyruvate, fatty acids)
2. ADP availability (P/O ratio)
3. Oxygen supply
4. NADH/NAD+ ratio

### Pyruvate Dehydrogenase Complex
**PDH Regulation:**
- PDH kinase: Inactivates PDH (phosphorylation)
- PDH phosphatase: Activates PDH
- Regulators:
  - Inhibitors: Acetyl-CoA, NADH, ATP
  - Activators: Ca2+, pyruvate, exercise

### Fat Oxidation Regulation
**Carnitine Palmitoyltransferase (CPT-I):**
- Rate-limiting for long-chain fatty acid entry to mitochondria
- Inhibited by malonyl-CoA
- AMPK inhibits acetyl-CoA carboxylase → reduced malonyl-CoA → enhanced fat oxidation

**Intramuscular Triglycerides (IMTG):**
- Hormone-sensitive lipase (HSL)
- Adipose triglyceride lipase (ATGL)
- Regulated by catecholamines, exercise

## Metabolic Flexibility

### Randle Cycle (Glucose-Fatty Acid Cycle)
- Elevated FFA → increased fat oxidation
- Increased acetyl-CoA → inhibits PDH
- Increased citrate → inhibits PFK
- Net effect: Reduced glucose oxidation when fat available

### Exercise-Induced Shifts
| Intensity | Dominant Pathway | Primary Substrate | Key Regulators |
|-----------|-----------------|-------------------|----------------|
| <25% VO2max | Oxidative | Fat (plasma FFA) | Low catecholamines |
| 25-65% | Oxidative | Fat + CHO (IMTG, muscle glycogen) | Moderate hormonal |
| 65-85% | Oxidative + Glycolytic | CHO (muscle glycogen) | High catecholamines |
| >85% | Glycolytic | CHO (muscle glycogen, glucose) | Max sympathetic |
| Max sprint | Phosphagen + Glycolytic | PCr, glycogen | Mass action |

### Training Adaptations
**Endurance Training:**
- Increased mitochondrial density
- Enhanced fat oxidation (glycogen sparing)
- Rightward shift of crossover point
- Higher lactate threshold

**High-Intensity Interval Training:**
- Increased glycolytic enzyme activity
- Enhanced lactate clearance (MCT expression)
- Improved PCr recovery`,
      keyTerms: [
        { term: 'creatine shuttle', definition: 'Hypothesis that creatine kinase isoforms at different cellular locations facilitate rapid energy transfer between mitochondria and myofibrils' },
        { term: 'AMPK', definition: 'AMP-activated protein kinase; cellular energy sensor that responds to metabolic stress by promoting catabolic pathways and inhibiting anabolic processes' },
        { term: 'Randle cycle', definition: 'Glucose-fatty acid cycle; reciprocal regulation where increased fatty acid oxidation inhibits glucose utilization through allosteric mechanisms' },
        { term: 'respiratory control ratio', definition: 'Ratio of state 3 to state 4 respiration; measure of mitochondrial coupling efficiency' },
        { term: 'monocarboxylate transporter (MCT)', definition: 'Membrane proteins that facilitate lactate and pyruvate transport across cell membranes; MCT1 (uptake) and MCT4 (efflux)' },
        { term: 'malonyl-CoA', definition: 'Intermediate in fatty acid synthesis that inhibits CPT-I, regulating fat oxidation; decreased during exercise via AMPK' },
      ],
      clinicalNotes: 'PCr recovery kinetics measured by 31P-MRS can assess mitochondrial function non-invasively. Impaired PCr recovery is seen in heart failure, peripheral arterial disease, and mitochondrial myopathies. The lactate shuttle concept has therapeutic implications for glucose management.',
    },
    5: {
      level: 5,
      summary: 'Advanced bioenergetics integrates molecular regulation of energy metabolism through allosteric enzyme control, post-translational modifications, and transcriptional regulation via metabolic sensors (AMPK, sirtuins), with clinical implications for metabolic disorders, exercise prescription, and nutritional interventions targeting substrate utilization and metabolic flexibility.',
      explanation: `## Molecular Control of Energy Metabolism

### AMPK Signaling Network
**Activation Mechanisms:**
- AMP/ATP ratio sensing (allosteric, protects from dephosphorylation)
- LKB1-mediated phosphorylation (Thr172)
- CaMKKβ activation (Ca2+ dependent)
- Exercise: All three mechanisms operative

**Downstream Effects:**
- Acute metabolic regulation:
  - ACC inhibition → reduced malonyl-CoA → enhanced fat oxidation
  - GLUT4 translocation (independent of insulin)
  - Glycogen synthase inhibition
- Chronic transcriptional effects:
  - PGC-1α activation → mitochondrial biogenesis
  - GLUT4 gene expression
  - Hexokinase II expression

**Isoform Specificity:**
- α1 predominant in oxidative fibers
- α2 predominant in glycolytic fibers
- Exercise activates α2 preferentially in human skeletal muscle

### Sirtuin Regulation
**SIRT1:**
- NAD+-dependent deacetylase
- Activated by caloric restriction, exercise
- Deacetylates PGC-1α → increased activity
- Links metabolic state (NAD+/NADH) to gene expression

**SIRT3:**
- Mitochondrial sirtuin
- Regulates acetylation of metabolic enzymes
- Targets: LCAD, SDH, complex I
- Exercise increases SIRT3 expression

### Transcriptional Control of Oxidative Metabolism
**PGC-1α Signaling:**
\`\`\`
Exercise → Ca2+, AMPK, p38 MAPK, β-adrenergic → PGC-1α activation
         ↓
PGC-1α co-activates:
  - NRF-1, NRF-2 → nuclear-encoded mitochondrial genes
  - ERRα → fatty acid oxidation genes
  - PPARδ → metabolic gene expression
  - TFAM → mtDNA transcription/replication
\`\`\`

**Fiber Type-Specific Regulation:**
- Calcineurin-NFAT pathway: slow fiber genes
- MEF2 activation: oxidative program
- HDAC4/5 nuclear export: de-repression of MEF2

## Advanced Concepts in Substrate Metabolism

### Glycogen Metabolism Integration
**Glycogenolysis Regulation:**
- Phosphorylase kinase: Ca2+ activated (exercise), cAMP-dependent (hormonal)
- Glycogen phosphorylase: AMP activated, glucose-6-P inhibited
- Rate matched to ATP demand

**Glycogen Availability Effects:**
- Low glycogen augments AMPK activation
- "Train low, compete high" concept
- Enhanced lipid oxidation and mitochondrial biogenesis
- Trade-off: Reduced high-intensity capacity

### Lactate Metabolism: Beyond the Shuttle
**Lactate as Signaling Molecule:**
- GPR81: Lactate receptor
- Regulates adipose tissue lipolysis
- Autocrine effects in skeletal muscle
- Potential role in adaptive signaling

**Brain Lactate Utilization:**
- Astrocyte-neuron lactate shuttle
- Preferred substrate during exercise
- MCT expression in brain

### Fatty Acid Metabolism Nuances
**IMTG Utilization:**
- PLIN5: Lipid droplet protein in oxidative fibers
- Links lipid droplets to mitochondria
- ATGL regulation by CGI-58, G0S2
- Training increases IMTG stores and turnover

**Ketone Body Metabolism:**
- Hepatic ketogenesis during prolonged exercise
- Direct muscle utilization via SCOT
- Spares glycogen
- Exogenous ketones as ergogenic aid (emerging)

## Clinical Applications

### Exercise Intolerance Differential
**Mitochondrial Disorders:**
- Exercise intolerance, premature fatigue
- Elevated lactate at low workloads
- Impaired PCr recovery (31P-MRS)
- Low VO2max with high VE/VCO2

**McArdle Disease (Myophosphorylase Deficiency):**
- Absent muscle glycogenolysis
- No lactate rise with exercise
- "Second wind" phenomenon (shift to FFA)
- Exercise intolerance at moderate intensity

**Metabolic Myopathies:**
| Disorder | Affected Pathway | Exercise Pattern |
|----------|-----------------|------------------|
| McArdle | Glycogenolysis | No lactate rise, second wind |
| Phosphofructokinase def. | Glycolysis | No lactate rise, out-of-wind |
| CPT-II deficiency | Fat oxidation | Rhabdomyolysis with prolonged exercise |
| Mitochondrial myopathy | ETC | Early fatigue, excess lactate |

### Pharmacological Targeting
**AMPK Activators:**
- Metformin: Indirect AMPK activation
- AICAR: Direct AMPK agonist (doping concern)
- Exercise mimetics concept (controversial)

**Metabolic Modulation:**
- Dichloroacetate: PDH activation (investigational)
- L-carnitine: Fatty acid transport support
- Creatine supplementation: Enhanced PCr system

### Precision Nutrition for Performance
**Periodized Nutrition:**
- Carbohydrate periodization
- "Sleep low" strategies
- Fasted training adaptations
- Pre-competition carbohydrate loading

**Metabolic Flexibility Assessment:**
- RER (respiratory exchange ratio) during exercise
- Fat oxidation rates (MFO, Fatmax)
- Lactate profiles
- Individualized fueling strategies

### Emerging Research
**Metabolomics Insights:**
- Exercise-induced metabolite signatures
- Lactate, succinate, β-aminoisobutyric acid as myokines
- Metabolite-receptor signaling

**Gut Microbiome-Muscle Axis:**
- Short-chain fatty acids from fiber fermentation
- Propionate effects on exercise capacity
- Microbiome differences in athletes`,
      keyTerms: [
        { term: 'AMPK isoforms', definition: 'Tissue and fiber-type specific catalytic subunits (α1, α2) with differential activation patterns and downstream effects during exercise' },
        { term: 'sirtuins', definition: 'NAD+-dependent deacetylases that link cellular energy status to transcriptional regulation; SIRT1 activates PGC-1α, SIRT3 regulates mitochondrial enzymes' },
        { term: 'PGC-1α', definition: 'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master regulator integrating exercise signals into mitochondrial biogenesis and oxidative metabolism' },
        { term: 'metabolic flexibility', definition: 'Ability to switch between carbohydrate and fat oxidation based on substrate availability and energy demands; impaired in metabolic disease' },
        { term: 'exercise mimetics', definition: 'Pharmacological agents that activate exercise signaling pathways (AMPK, PGC-1α) without physical activity; controversial for performance enhancement' },
        { term: 'glycogen periodization', definition: 'Strategic manipulation of muscle glycogen availability during training to enhance metabolic adaptations while preserving performance capacity' },
      ],
      clinicalNotes: `Clinical integration:
1. 31P-MRS PCr recovery is a non-invasive biomarker of mitochondrial function with diagnostic value in myopathies and heart failure
2. McArdle disease diagnosis: forearm ischemic exercise test (no lactate rise) + genetic confirmation of PYGM mutations
3. Metformin use in athletes: may impair some training adaptations via excessive AMPK activation; timing matters
4. "Train low" strategies may benefit metabolic adaptation but require careful implementation to avoid overtraining
5. Individual variation in metabolic flexibility explains differential responses to dietary interventions
6. Emerging: Lactate as a signaling molecule (via GPR81) opens therapeutic targets for metabolic disease`,
    },
  },

  media: [
    {
      id: 'energy-systems-timeline',
      type: 'diagram',
      filename: 'energy-systems-timeline.svg',
      title: 'Energy System Contributions Over Time',
      description: 'Relative contribution of ATP-PCr, glycolytic, and oxidative systems during exercise of varying durations',
    },
    {
      id: 'glycolysis-pathway',
      type: 'diagram',
      filename: 'glycolysis-pathway.svg',
      title: 'Glycolytic Pathway',
      description: 'Key enzymes and regulatory points in glycolysis',
    },
  ],

  citations: [
    {
      id: 'acsm-guidelines-energy',
      type: 'textbook',
      title: "ACSM's Guidelines for Exercise Testing and Prescription",
      source: 'American College of Sports Medicine',
      chapter: 'Metabolic Calculations and Exercise Programming',
    },
    {
      id: 'brooks-fahey',
      type: 'textbook',
      title: 'Exercise Physiology: Human Bioenergetics and Its Applications',
      authors: ['Brooks, G.A.', 'Fahey, T.D.', 'Baldwin, K.M.'],
      source: 'McGraw-Hill',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-exercise-physiology-basics', targetType: 'concept', relationship: 'parent', label: 'Exercise Physiology Basics' },
    { targetId: 'sports-med-macronutrients-for-athletes', targetType: 'concept', relationship: 'related', label: 'Macronutrients for Athletes' },
  ],

  tags: {
    systems: ['musculoskeletal', 'metabolic'],
    topics: ['energy-metabolism', 'exercise-physiology', 'bioenergetics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default energySystems;
