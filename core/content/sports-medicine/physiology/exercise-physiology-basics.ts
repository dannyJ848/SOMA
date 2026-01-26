/**
 * Exercise Physiology Basics - Comprehensive Educational Content
 *
 * Covers the fundamental physiological responses and adaptations to exercise,
 * providing foundation for understanding athletic performance and training.
 */

import { EducationalContent } from '../../types';

export const exercisePhysiologyBasics: EducationalContent = {
  id: 'sports-med-exercise-physiology-basics',
  type: 'concept',
  name: 'Exercise Physiology Basics',
  alternateNames: ['Exercise Science Fundamentals', 'Physical Activity Physiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Exercise physiology is the study of how your body works during physical activity and how it gets stronger with regular exercise.',
      explanation: `When you exercise, amazing things happen inside your body!

## What Happens When You Exercise

**Your Heart Pumps Faster**
Your heart is like a pump. When you run or play sports, it beats faster to send more blood to your muscles. This blood carries oxygen, which your muscles need to work.

**You Breathe Harder**
You breathe faster and deeper during exercise. This brings in more oxygen and gets rid of carbon dioxide, a waste product your muscles make.

**Your Muscles Work Hard**
Your muscles squeeze and relax to move your body. They use energy from food you've eaten, especially sugars and carbs.

**You Get Sweaty**
Exercise makes you hot inside. Sweating is your body's air conditioning - it cools you down!

## Why Exercise Makes You Stronger

When you exercise regularly, your body adapts (gets used to it) and becomes stronger:
- Your heart becomes a better pump
- Your muscles get bigger and stronger
- You can breathe more easily during activities
- You have more energy throughout the day

Think of it like this: your body says "Wow, we did a lot of work today! Let me get stronger so that's easier next time!"`,
      keyTerms: [
        { term: 'exercise', definition: 'Physical activity that makes your body work harder than normal' },
        { term: 'oxygen', definition: 'A gas in the air that your body needs to make energy' },
        { term: 'muscles', definition: 'The parts of your body that help you move' },
        { term: 'heart rate', definition: 'How fast your heart beats, measured in beats per minute' },
      ],
      analogies: [
        'Your heart is like a water pump in a fountain - it pushes blood around your body in a circle.',
        'Muscles are like rubber bands - they can stretch and squeeze to help you move.',
        'Sweating is like your body\'s built-in air conditioning system.',
      ],
      examples: [
        'When you run to catch the bus, your heart beats faster to give your legs the oxygen they need.',
        'After riding your bike every day for a month, you might notice the hills feel easier.',
      ],
    },
    2: {
      level: 2,
      summary: 'Exercise physiology studies how the body responds to physical activity acutely (during exercise) and adapts chronically (with regular training), involving the cardiovascular, respiratory, and musculoskeletal systems.',
      explanation: `## Understanding Exercise Physiology

Exercise physiology examines two main types of body responses:
1. **Acute responses** - What happens during a single exercise session
2. **Chronic adaptations** - How your body changes with regular training over weeks and months

## The Cardiovascular System During Exercise

**Heart Response:**
- Heart rate increases from ~60-80 bpm at rest to 150-200+ bpm during intense exercise
- Cardiac output (blood pumped per minute) can increase 4-6 times
- Blood is redirected from digestive organs to working muscles

**Blood Vessel Response:**
- Blood vessels in muscles dilate (widen) to bring more blood
- Blood vessels in non-essential areas constrict
- Blood pressure increases moderately

## The Respiratory System During Exercise

**Breathing Changes:**
- Breathing rate increases from ~12-16 breaths/min at rest to 40-60+ during exercise
- Tidal volume (amount of air per breath) increases
- More oxygen enters the blood; more carbon dioxide is removed

## The Musculoskeletal System During Exercise

**Muscle Activity:**
- Muscles contract using energy from ATP
- Energy comes from three systems: phosphagen, glycolytic, and oxidative
- Heat is produced as a byproduct

**Types of Muscle Contractions:**
- Concentric: Muscle shortens (lifting a weight up)
- Eccentric: Muscle lengthens while contracting (lowering a weight)
- Isometric: Muscle contracts without changing length (holding a plank)

## Training Adaptations

With regular exercise over weeks to months:
- Heart gets stronger and more efficient
- Muscles grow larger and produce more force
- Lungs become more efficient at gas exchange
- Body becomes better at burning fat for fuel
- Bones become denser and stronger`,
      keyTerms: [
        { term: 'acute response', definition: 'Immediate changes in the body that occur during a single bout of exercise' },
        { term: 'chronic adaptation', definition: 'Long-term changes that develop with regular training over weeks to months' },
        { term: 'cardiac output', definition: 'The amount of blood pumped by the heart per minute; equals heart rate x stroke volume' },
        { term: 'stroke volume', definition: 'The amount of blood pumped with each heartbeat' },
        { term: 'tidal volume', definition: 'The amount of air inhaled or exhaled with each breath' },
        { term: 'ATP', definition: 'Adenosine triphosphate - the energy currency used by muscles', pronunciation: 'ay-tee-pee' },
      ],
      analogies: [
        'Cardiac output is like the flow from a garden hose - you can increase it by squeezing harder (heart rate) or using a wider hose (stroke volume).',
        'The three energy systems are like different fuel sources in a hybrid car - some kick in quickly, others last longer.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise physiology encompasses the integrated acute cardiovascular, respiratory, metabolic, and neuromuscular responses to physical activity, as well as the structural and functional adaptations that occur with systematic training, governed by principles of specificity, overload, and progression.',
      explanation: `## Cardiovascular Responses to Exercise

### Acute Cardiovascular Response
**Heart Rate:**
- Anticipatory rise via sympathetic activation before exercise begins
- Linear increase with exercise intensity up to HR max
- HR max ≈ 220 - age (general estimate)
- Controlled by: decreased parasympathetic tone, increased sympathetic drive, circulating catecholamines

**Stroke Volume:**
- Increases 50-60% from rest to moderate intensity
- Plateaus at ~40-50% VO2max in untrained individuals
- Continues to increase to near-maximum in trained athletes
- Enhanced by: increased preload (venous return), increased contractility, decreased afterload

**Cardiac Output:**
- Q = HR × SV
- Increases from ~5 L/min at rest to 20-25 L/min (untrained) or 30-40 L/min (elite athletes)

**Blood Flow Redistribution:**
- Muscle blood flow: 15-20% at rest → 80-85% during maximal exercise
- Splanchnic (gut) flow decreases by 80%
- Renal flow decreases by 75%
- Skin blood flow varies based on thermoregulation needs

## Respiratory Responses to Exercise

**Ventilation:**
- VE (minute ventilation) = respiratory rate × tidal volume
- Can increase from ~6 L/min at rest to >100 L/min during maximal exercise
- Initial increase via tidal volume, then respiratory rate

**Gas Exchange:**
- Oxygen uptake (VO2) increases linearly with workload
- VO2max represents maximal aerobic capacity
- Arteriovenous O2 difference (a-vO2 diff) widens during exercise

**Ventilatory Thresholds:**
- VT1 (first ventilatory threshold): ~50-60% VO2max - lactate begins accumulating
- VT2 (respiratory compensation point): ~70-80% VO2max - hyperventilation to buffer acidosis

## Metabolic Responses

### Energy Systems
**Phosphagen System (ATP-PCr):**
- Immediate energy source
- Duration: 10-15 seconds
- No oxygen required (anaerobic)
- Used for explosive movements

**Glycolytic System:**
- Breaks down glucose/glycogen to pyruvate
- Fast glycolysis: pyruvate → lactate (anaerobic), 30-90 seconds
- Slow glycolysis: feeds oxidative system

**Oxidative System:**
- Uses carbohydrates, fats, (proteins) with oxygen
- Krebs cycle and electron transport chain in mitochondria
- Primary system for exercise >2-3 minutes

### Substrate Utilization
- Low intensity: Primarily fat oxidation
- Moderate intensity: Mix of carbs and fat
- High intensity: Predominantly carbohydrate
- Crossover concept: Higher intensity shifts to more carb use

## Neuromuscular Responses

**Motor Unit Recruitment:**
- Size principle: Small motor units recruited first, larger added as force increases
- Type I (slow-twitch) → Type IIa → Type IIx
- Rate coding: Increased firing frequency for more force

**Muscle Metabolism:**
- Increased calcium release from sarcoplasmic reticulum
- ATP hydrolysis by myosin ATPase
- Heat production (only ~25% mechanical efficiency)

## Training Principles

**Specificity (SAID Principle):**
Specific Adaptations to Imposed Demands - training adaptations are specific to the type of training performed

**Progressive Overload:**
Gradually increasing training stress to continue adaptations

**Periodization:**
Systematic variation of training variables over time`,
      keyTerms: [
        { term: 'VO2max', definition: 'Maximal oxygen uptake; the highest rate at which oxygen can be consumed during exercise; gold standard measure of cardiorespiratory fitness', pronunciation: 'vee-oh-two-max' },
        { term: 'cardiac output', definition: 'Volume of blood pumped by the heart per minute (Q = HR × SV); typically 5 L/min at rest, 20-40 L/min during maximal exercise' },
        { term: 'ventilatory threshold', definition: 'Exercise intensity at which ventilation increases disproportionately relative to oxygen consumption, indicating metabolic transition' },
        { term: 'motor unit', definition: 'A motor neuron and all the muscle fibers it innervates; the functional unit of muscle contraction' },
        { term: 'SAID principle', definition: 'Specific Adaptation to Imposed Demands; training adaptations are specific to the stressors applied' },
        { term: 'a-vO2 difference', definition: 'Arteriovenous oxygen difference; the difference in oxygen content between arterial and venous blood; reflects oxygen extraction by tissues' },
      ],
      clinicalNotes: 'Understanding exercise physiology is essential for exercise prescription. VO2max is the best predictor of cardiovascular mortality. Exercise testing with gas analysis can identify ventilatory thresholds for individualized training zones.',
    },
    4: {
      level: 4,
      summary: 'Exercise physiology integrates complex cardiovascular hemodynamics, pulmonary gas exchange, metabolic pathway flux, and neuromuscular activation patterns, with acute responses mediated by autonomic, endocrine, and local factors, and chronic adaptations involving structural remodeling, enzymatic upregulation, and altered gene expression.',
      explanation: `## Cardiovascular Hemodynamics During Exercise

### Cardiac Response Mechanisms
**Chronotropic Response:**
- Withdrawal of vagal tone: HR increases to ~100 bpm
- Sympathetic activation: Further increases to HRmax
- Circulating catecholamines: Fine-tuning at high intensities
- Beta-1 receptor activation on SA node

**Inotropic Response:**
- Increased contractility via:
  - Catecholamine-mediated increased Ca2+ entry
  - Enhanced Ca2+ release from sarcoplasmic reticulum
  - Increased myofilament Ca2+ sensitivity
- Ejection fraction increases from ~55-60% to 80%+

**Diastolic Function:**
- Enhanced lusitropy (relaxation)
- Increased venous return (muscle pump, respiratory pump)
- Frank-Starling mechanism optimization

### Vascular Responses
**Muscle Vasodilation Mediators:**
- Nitric oxide (NO) - endothelium-dependent
- Prostaglandins
- ATP release
- Metabolic vasodilators: K+, adenosine, H+, CO2, decreased PO2
- Functional sympatholysis

**Mean Arterial Pressure:**
- MAP = CO × TPR
- Dynamic exercise: CO↑↑, TPR↓ → modest MAP increase
- Static exercise: CO↑, TPR↑ → significant MAP increase (pressor response)

## Pulmonary Physiology During Exercise

### Ventilatory Control
**Neural Control:**
- Central command from motor cortex
- Peripheral chemoreceptors (carotid bodies): sensitive to PaO2, PaCO2, pH
- Central chemoreceptors: sensitive to CSF H+
- Mechanoreceptors in muscles and joints

**Diffusion Capacity:**
- DLCO increases 2-3x during exercise
- Recruitment of pulmonary capillaries
- Increased capillary blood volume
- Maintained A-a gradient in healthy individuals

### Oxygen Transport
**Oxygen Cascade:**
- Atmosphere → Alveoli → Arterial blood → Tissue
- Bohr effect: rightward shift of O2-Hgb dissociation curve in exercising muscle
- 2,3-DPG, temperature, pH effects

**Delivery Equation:**
DO2 = Q × CaO2 = Q × (1.34 × Hgb × SaO2 + 0.003 × PaO2)

## Metabolic Regulation

### Enzyme Kinetics in Energy Systems
**Phosphagen System:**
- Creatine kinase: PCr + ADP ↔ Cr + ATP
- Myokinase: 2 ADP ↔ ATP + AMP
- AMP activates glycolysis

**Glycolytic Regulation:**
- Phosphofructokinase (PFK-1): Rate-limiting step
  - Activators: AMP, ADP, Pi, ammonia
  - Inhibitors: ATP, citrate, H+
- Lactate dehydrogenase (LDH): Pyruvate ↔ Lactate

**Oxidative Regulation:**
- Pyruvate dehydrogenase complex: Entry to Krebs cycle
- Isocitrate dehydrogenase, α-ketoglutarate dehydrogenase
- Electron transport chain: Complex I-IV, ATP synthase
- Fat oxidation: Carnitine palmitoyltransferase (CPT-I) regulation

### Lactate Metabolism
- Lactate as metabolic intermediate, not just "waste product"
- Cell-cell lactate shuttle
- Intracellular lactate shuttle
- Lactate threshold reflects balance of production/clearance
- Monocarboxylate transporters (MCT1, MCT4)

## Neuromuscular Integration

### Motor Control
**Henneman's Size Principle:**
- Motor neuron excitability inversely related to size
- Orderly recruitment: S (slow) → FR (fast-fatigue resistant) → FF (fast-fatigable)
- De-recruitment in reverse order

**Rate Coding:**
- Motor unit firing rate: 8-25 Hz for sustained contractions
- Higher frequencies for rapid force development
- Doublet firing for enhanced force

### Muscle Fiber Types
| Characteristic | Type I | Type IIa | Type IIx |
|---------------|--------|----------|----------|
| Contraction speed | Slow | Fast | Fastest |
| Fatigue resistance | High | Moderate | Low |
| Oxidative capacity | High | High | Low |
| Glycolytic capacity | Low | High | Highest |
| Mitochondrial density | High | Moderate | Low |
| Capillary density | High | Moderate | Low |

## Hormonal Responses

**Catecholamines:**
- Epinephrine: Increases 2-3x at moderate, 10-20x at maximal exercise
- Effects: Glycogenolysis, lipolysis, cardiovascular stimulation

**Cortisol:**
- Increases with exercise >60% VO2max and duration >60 min
- Gluconeogenesis, protein catabolism

**Growth Hormone:**
- Pulsatile release with exercise
- Greater with resistance vs. endurance exercise

**Testosterone:**
- Acute increase with resistance exercise
- Facilitates muscle protein synthesis signaling`,
      keyTerms: [
        { term: 'functional sympatholysis', definition: 'Override of sympathetic vasoconstriction in exercising muscles by local metabolic vasodilators, ensuring blood flow matches metabolic demand' },
        { term: 'Bohr effect', definition: 'Rightward shift of oxygen-hemoglobin dissociation curve with decreased pH/increased CO2, facilitating oxygen unloading in active tissues' },
        { term: 'phosphofructokinase (PFK)', definition: 'Rate-limiting enzyme of glycolysis; allosterically regulated by multiple metabolic signals to match ATP production with demand' },
        { term: 'lactate shuttle', definition: 'Concept that lactate serves as a mobile fuel between and within cells, not merely a metabolic dead-end' },
        { term: 'Henneman size principle', definition: 'Motor units are recruited in order from smallest to largest based on their recruitment threshold, allowing graded force production' },
        { term: 'lusitropy', definition: 'Rate of cardiac muscle relaxation; enhanced during exercise to allow adequate ventricular filling despite shortened diastole' },
      ],
      clinicalNotes: 'Static exercise causes disproportionate blood pressure rise (pressor response) - important consideration in hypertension and cardiac patients. Functional sympatholysis may be impaired in conditions like heart failure, contributing to exercise intolerance.',
    },
    5: {
      level: 5,
      summary: 'Advanced exercise physiology encompasses molecular signaling pathways governing acute responses and chronic adaptations, integrating mechanotransduction, metabolic sensors (AMPK, mTOR), epigenetic modifications, and the complex interplay between systemic and local regulatory mechanisms that determine training responsiveness and clinical applications.',
      explanation: `## Molecular Mechanisms of Exercise Adaptation

### Skeletal Muscle Signaling Pathways

**mTORC1 Pathway (Anabolic):**
- Mechanical tension → Phosphatidic acid → mTORC1 activation
- IGF-1/insulin → PI3K → Akt → mTORC1
- mTORC1 phosphorylates:
  - p70S6K1 → ribosomal biogenesis, translation initiation
  - 4E-BP1 → cap-dependent translation
- Downstream: Increased muscle protein synthesis (MPS)

**AMPK Pathway (Catabolic/Endurance):**
- Energy deficit (↑AMP:ATP ratio) → AMPK activation
- Upstream: LKB1, CaMKK
- AMPK activates:
  - PGC-1α → Mitochondrial biogenesis
  - Fatty acid oxidation (ACC inhibition)
  - GLUT4 translocation
- Inhibits: mTORC1 (via TSC2 phosphorylation)

**Concurrent Training Interference:**
- AMPK activation may suppress mTORC1 signaling
- Molecular switch hypothesis
- Clinical relevance: Training periodization, sequencing

### Mitochondrial Biogenesis
**PGC-1α Master Regulator:**
- Activated by: AMPK, p38 MAPK, CaMK, SIRT1, β-adrenergic signaling
- Coactivates transcription factors:
  - NRF-1, NRF-2 → Nuclear-encoded mitochondrial genes
  - ERRα → Fatty acid oxidation genes
  - TFAM → mtDNA transcription/replication

**Mitochondrial Dynamics:**
- Fusion (MFN1/2, OPA1) vs. Fission (DRP1, FIS1)
- Quality control via mitophagy
- Exercise promotes balanced dynamics and turnover

### Satellite Cell Biology
**Muscle Regeneration and Hypertrophy:**
- Quiescent satellite cells (Pax7+)
- Activation: HGF, NO, stretch
- Proliferation: Myf5, MyoD expression
- Differentiation: Myogenin, MRF4
- Fusion with existing myofibers
- Self-renewal maintains satellite cell pool

**Myonuclear Domain Theory:**
- Each myonucleus supports finite cytoplasmic volume
- Hypertrophy may require satellite cell addition (debated)
- Muscle memory: Retained myonuclei facilitate retraining

## Cardiovascular Adaptations at Molecular Level

### Cardiac Remodeling
**Eccentric Hypertrophy (Endurance Training):**
- Volume overload → Cardiomyocyte lengthening
- Sarcomeres added in series
- LV dilation with proportional wall thickening
- Physiological vs. pathological: IGF-1/PI3K vs. Gq/calcineurin

**Concentric Hypertrophy (Resistance Training):**
- Pressure overload → Cardiomyocyte thickening
- Sarcomeres added in parallel
- Wall thickening without chamber dilation

**Athlete's Heart:**
- Benign vs. pathological differentiation crucial
- Normal: Symmetric hypertrophy, normal function, regression with detraining
- Red flags: Marked asymmetry, abnormal relaxation, arrhythmias

### Vascular Adaptations
**Endothelial Function:**
- Shear stress → eNOS activation → NO production
- NO: Vasodilation, anti-inflammatory, anti-thrombotic
- Training increases eNOS expression, BH4 cofactor

**Angiogenesis:**
- VEGF upregulation with exercise/hypoxia
- HIF-1α stabilization in low O2
- Increased capillary-to-fiber ratio

## Metabolic Flexibility and Insulin Sensitivity

### Exercise and Glucose Regulation
**Contraction-Mediated Glucose Uptake:**
- AMPK-dependent GLUT4 translocation
- Independent of insulin signaling
- CaMK, NOS pathways also involved
- Explains exercise benefit even in insulin resistance

**Post-Exercise Insulin Sensitivity:**
- Enhanced for 24-72 hours
- Glycogen depletion → enhanced glycogen synthase activity
- Acute effects of each session compound to chronic benefit

### Metabolic Reprogramming
**Training-Induced Changes:**
| Parameter | Endurance Training | Resistance Training |
|-----------|-------------------|---------------------|
| Mitochondrial density | ↑↑↑ | ↑ |
| Capillary density | ↑↑ | ↑ |
| Fat oxidation capacity | ↑↑↑ | - |
| Glycogen storage | ↑↑ | ↑ |
| Muscle fiber size | - | ↑↑↑ |
| Neural activation | ↑ | ↑↑ |

## Clinical Applications

### Exercise as Medicine
**Dose-Response Relationships:**
- Cardiorespiratory fitness: Linear dose-response with mortality
- Resistance training: Non-linear, threshold effects for function
- Diminishing returns vs. J-curve controversies

**Precision Exercise Prescription:**
- Genetic variants influencing trainability (ACE, ACTN3, PPARGC1A)
- Responders vs. non-responders
- Individualized training based on molecular phenotype (emerging)

### Exercise Testing Interpretation
**Integrated Cardiopulmonary Assessment:**
- VO2max: Central (Q) vs. peripheral (a-vO2 diff) limitations
- AT/VT: Metabolic transition, prescription anchor
- VE/VCO2 slope: Ventilatory efficiency, prognostic in HF
- O2 pulse (VO2/HR): Surrogate for stroke volume

**Differentiating Limitation:**
- Cardiovascular: Early AT, flat O2 pulse, heart rate reserve depleted
- Pulmonary: Breathing reserve depleted, desaturation, increased VE/VCO2
- Deconditioning: Low VO2max with normal responses to submaximal work
- Mitochondrial: High VE/VCO2, early AT, hyperkinetic circulation

### Special Populations
**Heart Failure:**
- Central (cardiac output) and peripheral (muscle) limitations
- Impaired vasodilation, mitochondrial dysfunction
- Exercise training improves outcomes (HF-ACTION trial)

**Diabetes:**
- Exercise-induced GLUT4 independent of insulin
- Timing around meals and medication
- Hypoglycemia risk management

**Cancer:**
- Exercise modulates tumor microenvironment (preclinical)
- Reduces treatment-related fatigue
- Improves quality of life and potentially survival`,
      keyTerms: [
        { term: 'mTORC1', definition: 'Mechanistic target of rapamycin complex 1; master regulator of cell growth and muscle protein synthesis, activated by mechanical loading, amino acids, and growth factors' },
        { term: 'AMPK', definition: 'AMP-activated protein kinase; cellular energy sensor activated by metabolic stress, promotes mitochondrial biogenesis and inhibits mTORC1' },
        { term: 'PGC-1α', definition: 'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master regulator of mitochondrial biogenesis and oxidative metabolism' },
        { term: 'satellite cells', definition: 'Muscle stem cells residing between sarcolemma and basal lamina; essential for muscle regeneration and may contribute to hypertrophy' },
        { term: 'concurrent training interference', definition: 'Potential attenuation of strength/hypertrophy adaptations when combined with endurance training, possibly mediated by AMPK inhibition of mTORC1' },
        { term: 'VE/VCO2 slope', definition: 'Ratio of minute ventilation to carbon dioxide production; measure of ventilatory efficiency, powerful prognostic marker in heart failure' },
      ],
      clinicalNotes: `Key clinical applications:
1. VO2max is the strongest predictor of all-cause mortality - every 1 MET increase associated with 12-15% reduction in mortality
2. Concurrent training considerations: Allow 6-24 hours between modalities when optimizing both adaptations
3. In HF patients, VE/VCO2 slope >36 indicates poor prognosis; exercise training can improve this
4. CPET can differentiate cardiac vs. pulmonary vs. deconditioning as cause of dyspnea
5. For diabetic patients, post-exercise enhanced insulin sensitivity can last 24-72 hours - consider timing of exercise for glucose management
6. Satellite cell dysfunction may contribute to sarcopenia in aging - resistance training can partially restore function`,
    },
  },

  media: [
    {
      id: 'exercise-cardiovascular-response',
      type: 'diagram',
      filename: 'cardiovascular-response-exercise.svg',
      title: 'Cardiovascular Responses to Exercise',
      description: 'Heart rate, cardiac output, and blood flow redistribution during exercise',
    },
    {
      id: 'energy-systems-diagram',
      type: 'diagram',
      filename: 'energy-systems-overview.svg',
      title: 'Energy Systems Overview',
      description: 'ATP-PCr, glycolytic, and oxidative energy system contributions over time',
    },
  ],

  citations: [
    {
      id: 'acsm-guidelines',
      type: 'textbook',
      title: 'ACSM\'s Guidelines for Exercise Testing and Prescription',
      source: 'American College of Sports Medicine',
      chapter: 'Principles of Exercise Training',
    },
    {
      id: 'mcardle-exercise-physiology',
      type: 'textbook',
      title: 'Exercise Physiology: Nutrition, Energy, and Human Performance',
      authors: ['McArdle, W.D.', 'Katch, F.I.', 'Katch, V.L.'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-energy-systems', targetType: 'concept', relationship: 'child', label: 'Energy Systems' },
    { targetId: 'sports-med-cardiovascular-adaptations', targetType: 'concept', relationship: 'child', label: 'Cardiovascular Adaptations' },
    { targetId: 'sports-med-muscle-adaptations', targetType: 'concept', relationship: 'child', label: 'Muscle Adaptations' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'musculoskeletal'],
    topics: ['exercise-physiology', 'sports-medicine', 'training'],
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

export default exercisePhysiologyBasics;
