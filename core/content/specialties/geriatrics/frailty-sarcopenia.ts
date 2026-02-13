/**
 * Frailty and Sarcopenia - Comprehensive Educational Content
 *
 * Covers frailty syndrome, sarcopenia pathophysiology, assessment tools,
 * and evidence-based interventions across multiple complexity levels.
 */

import { EducationalContent } from '../../types';

export const frailtySarcopenia: EducationalContent = {
  id: 'concept-frailty-sarcopenia',
  type: 'concept',
  name: 'Frailty and Sarcopenia',
  alternateNames: ['Frailty Syndrome', 'Age-Related Muscle Loss', 'Physical Frailty'],

  levels: {
    1: {
      level: 1,
      summary: 'Frailty is when an older person becomes weaker and more vulnerable, while sarcopenia is the loss of muscle strength that happens with aging.',
      explanation: `As people get older, some become frailer - meaning they get tired easily, lose weight without trying, and have less strength. This is called frailty, and it makes people more vulnerable to illness and injury.

**What is Frailty?**

Think of frailty like a car battery that is running low:
- It still works, but it does not have the same power it used to
- Small problems can cause bigger issues
- It needs extra care to keep working well

**Signs of Frailty:**
- Feeling tired most of the time
- Losing weight without trying
- Walking slower than before
- Weak grip strength
- Not wanting to do much or go places

**What is Sarcopenia?**

Sarcopenia (sar-ko-PEE-nee-ah) is when muscles get smaller and weaker with age:
- Everyone loses some muscle as they age
- This usually starts around age 40
- By age 80, people may have lost 30-50% of their muscle
- Weak muscles make it harder to walk, climb stairs, and carry things

**Why Does This Happen?**

Several things cause muscle loss:
- Not being active enough
- Not eating enough protein (like meat, beans, eggs)
- Changes in hormones
- Normal aging of cells

**Why Does This Matter?**

Frail older adults:
- Are more likely to fall
- Take longer to recover from illness
- May need more help with daily activities
- Have a higher chance of going to the hospital

**The Good News - You Can Fight Back!**

**Exercise is the Best Medicine:**
- Lifting weights or using resistance bands
- Walking regularly
- Balance exercises
- Even simple chair exercises help!

**Eating Right:**
- Eat enough protein (meat, fish, eggs, beans, dairy)
- Try to have protein at every meal
- Eat plenty of fruits and vegetables
- Drink enough water

**Stay Active:**
- Keep doing activities you enjoy
- Socialize with friends and family
- Challenge your mind with puzzles or reading

**When to Talk to a Doctor:**
- If you notice you are losing weight without trying
- If you feel much weaker than before
- If you are too tired to do normal activities
- If you have trouble getting up from a chair`,
      keyTerms: [
        { term: 'frailty', definition: 'A condition where an older person becomes weaker and more vulnerable to health problems' },
        { term: 'sarcopenia', definition: 'The loss of muscle size and strength that happens with aging', pronunciation: 'sar-ko-PEE-nee-ah' },
        { term: 'protein', definition: 'A nutrient in food that helps build and maintain muscles' },
        { term: 'resistance exercise', definition: 'Exercises that make muscles work against a force, like lifting weights' },
      ],
      analogies: [
        'Frailty is like a car with a weak battery - it still runs but struggles with any extra demands.',
        'Muscles are like a savings account - if you do not add to it (exercise), it slowly gets smaller.',
        'The body is like a house - without maintenance (exercise and nutrition), it slowly weakens.',
      ],
      examples: [
        'A grandmother who started walking 20 minutes daily and doing simple arm exercises with soup cans, and now feels stronger.',
        'A grandfather who began eating eggs for breakfast to get more protein and noticed he had more energy.',
        'An older couple who joined a senior exercise class and found they could do more activities together.',
      ],
    },
    2: {
      level: 2,
      summary: 'Frailty is a clinical syndrome of decreased physiological reserve, while sarcopenia specifically refers to age-related loss of muscle mass and function. Both increase vulnerability to adverse health outcomes.',
      explanation: `## Understanding Frailty

### Definition
Frailty is a state of increased vulnerability where the body has less reserve to handle stressors like illness, surgery, or even minor infections.

### The Frailty Phenotype (Fried Criteria)
A person is considered frail if they have 3 or more of these 5 characteristics:

| Criterion | How It's Measured |
|-----------|-------------------|
| Unintentional weight loss | Lost >10 lbs (or 5% body weight) in past year |
| Exhaustion | Self-reported tiredness most of the time |
| Low physical activity | Below a certain calorie expenditure |
| Slow walking speed | Takes >6-7 seconds to walk 15 feet |
| Weak grip strength | Below normal for sex and BMI |

**Frailty Categories:**
- **Robust**: 0 criteria met
- **Pre-frail**: 1-2 criteria met
- **Frail**: 3 or more criteria met

### Why Frailty Matters

Frail older adults have:
- 3x higher mortality risk
- 2-3x more likely to fall
- Longer hospital stays
- Higher risk of disability
- More likely to need nursing home care

## Understanding Sarcopenia

### Definition
Sarcopenia is the progressive loss of skeletal muscle mass, strength, and function with age.

### How Muscle Loss Progresses
- Begins around age 30-40
- Accelerates after age 60-70
- Loss of 3-8% muscle mass per decade after age 30
- Type II (fast-twitch) fibers affected most

### Causes of Sarcopenia

**Primary (Age-Related):**
- Decreased hormone levels (testosterone, growth hormone, IGF-1)
- Motor neuron loss
- Mitochondrial dysfunction
- Increased inflammation

**Secondary:**
- Inactivity/immobility
- Malnutrition (especially low protein)
- Chronic diseases (heart failure, COPD, cancer)
- Medications (corticosteroids)

### Consequences of Sarcopenia

**Physical:**
- Difficulty with daily activities (climbing stairs, carrying groceries)
- Increased fall risk
- Slower walking speed
- Fatigue

**Metabolic:**
- Decreased metabolic rate
- Insulin resistance
- Reduced bone density

## Assessment

### Simple Tests
| Test | What It Measures | Abnormal |
|------|------------------|----------|
| Grip strength | Muscle strength | <27 kg men, <16 kg women |
| Gait speed | Function | <0.8 m/s |
| Chair stand | Leg strength | >15 sec for 5 stands |
| SARC-F questionnaire | Screening | Score ≥4 |

### SARC-F Screening Questions
1. Strength: Difficulty lifting 10 lbs?
2. Assistance walking: Need help crossing a room?
3. Rise from chair: Difficulty getting up?
4. Climb stairs: Difficulty climbing 10 stairs?
5. Falls: How many falls in the past year?

## Interventions

### Exercise (Most Important!)

**Resistance Training:**
- 2-3 times per week
- Target major muscle groups
- Progressive increase in resistance
- Can improve strength by 25-100% even in very old adults

**Combined Programs:**
- Resistance + balance training
- Aerobic exercise for endurance
- Flexibility exercises

### Nutrition

**Protein Requirements:**
- Older adults need more protein than younger: 1.0-1.2 g/kg/day
- Even higher if sarcopenic: 1.2-1.5 g/kg/day
- Distribute protein throughout the day (25-30g per meal)

**Key Nutrients:**
- Vitamin D (low levels common in elderly)
- Omega-3 fatty acids (may help muscle synthesis)
- Leucine (amino acid that stimulates muscle building)

### Medical Management

**Treat Underlying Conditions:**
- Optimize chronic disease management
- Review medications for muscle-wasting effects
- Address depression and social isolation

**Supplements:**
- Vitamin D if deficient
- Protein supplements if dietary intake inadequate`,
      keyTerms: [
        { term: 'Fried frailty phenotype', definition: 'A widely used definition of frailty based on 5 criteria: weight loss, exhaustion, low activity, slow gait, weak grip' },
        { term: 'pre-frail', definition: 'An intermediate state with 1-2 frailty criteria; important intervention window' },
        { term: 'SARC-F', definition: 'A 5-question screening tool for sarcopenia risk' },
        { term: 'grip strength', definition: 'Hand grip force measured by dynamometer; marker of overall muscle strength' },
        { term: 'gait speed', definition: 'Walking speed, typically over 4 meters; vital sign of aging' },
        { term: 'Type II muscle fibers', definition: 'Fast-twitch muscle fibers that generate power; preferentially lost in aging' },
      ],
      analogies: [
        'Frailty is like a phone battery that does not hold a charge well anymore - it works but runs out quickly.',
        'Pre-frailty is a warning light - time to take action before full frailty develops.',
        'Muscles follow "use it or lose it" - resistance exercise is like charging the battery.',
      ],
    },
    3: {
      level: 3,
      summary: 'Frailty and sarcopenia are interrelated geriatric syndromes with distinct pathophysiology involving inflammatory, hormonal, and cellular mechanisms. Evidence-based assessment and multimodal interventions can improve outcomes.',
      explanation: `## Pathophysiology of Sarcopenia

### Muscle Biology in Aging

**Structural Changes:**
- Loss of motor units (motor neuron + muscle fibers it innervates)
- Denervation and incomplete reinnervation
- Type II fiber atrophy and conversion to Type I
- Increased intramuscular fat infiltration (myosteatosis)
- Decreased satellite cell (muscle stem cell) function

**Cellular Mechanisms:**

| Mechanism | Change with Age | Effect |
|-----------|-----------------|--------|
| Protein synthesis | ↓ Response to anabolic stimuli | Anabolic resistance |
| Protein degradation | ↑ Ubiquitin-proteasome activity | Net muscle loss |
| Mitochondrial function | ↓ Oxidative capacity, ↑ ROS | Energy deficit, damage |
| Autophagy | ↓ Quality control | Accumulation of damaged proteins |
| Apoptosis | ↑ Myonuclear apoptosis | Muscle fiber loss |

### Hormonal Changes

**Testosterone:**
- Declines 1-2% per year after age 30
- Associated with decreased muscle mass and strength
- Testosterone therapy increases muscle mass but unclear functional benefit

**Growth Hormone/IGF-1:**
- GH secretion decreases 14% per decade
- IGF-1 levels decline
- Important for muscle protein synthesis

**Insulin Resistance:**
- Impairs amino acid uptake and protein synthesis
- Skeletal muscle is primary site of glucose disposal
- Creates vicious cycle (less muscle → worse insulin resistance)

**Cortisol:**
- May be elevated in frailty
- Catabolic effect on muscle
- Associated with immunosenescence

### Inflammatory Mechanisms

**Chronic Low-Grade Inflammation (Inflammaging):**
- Elevated IL-6, TNF-α, CRP in frail elderly
- IL-6 associated with muscle wasting
- TNF-α activates ubiquitin-proteasome pathway
- Inflammation impairs muscle protein synthesis

**Proposed Pathway:**
Aging → Cellular senescence → SASP → Chronic inflammation →
Muscle catabolism + Anabolic resistance → Sarcopenia → Frailty

## Frailty as a Clinical Construct

### Phenotype vs. Deficit Accumulation Models

**Fried Phenotype Model:**
- Physical frailty syndrome
- 5 measurable criteria
- Binary classification (frail/not frail)
- Primarily captures physical dimension

**Rockwood Frailty Index:**
- Deficit accumulation approach
- 30-70 health deficits assessed
- Continuous scale (0-1)
- Captures medical, functional, cognitive, social domains
- FI >0.25 = frail; FI >0.45 = severe frailty

### Frailty Trajectories

Studies show different patterns:
- Stable frailty
- Progressive decline
- Fluctuating course
- Improvement (possible with intervention)

### Frailty Assessment Tools

| Tool | Components | Setting | Time |
|------|------------|---------|------|
| Fried Phenotype | 5 criteria | Research, clinical | 10 min |
| Frailty Index | 30-70 deficits | Research | Variable |
| Clinical Frailty Scale | 9-point visual | Clinical, quick | 30 sec |
| FRAIL Scale | 5 questions | Screening | 2 min |
| Edmonton Frail Scale | 17 items, multi-domain | Comprehensive | 5 min |

## Sarcopenia Diagnosis (EWGSOP2 Algorithm)

### Step 1: Find Cases (SARC-F or Clinical Suspicion)
- SARC-F ≥4 suggests sarcopenia risk
- Clinical triggers: falls, weight loss, functional decline

### Step 2: Assess Muscle Strength
- Grip strength: <27 kg (men), <16 kg (women)
- Chair stand: >15 seconds for 5 rises
- Low strength = "probable sarcopenia"

### Step 3: Confirm with Muscle Quantity/Quality
- DXA: Appendicular lean mass/height²
  - <7.0 kg/m² (men), <5.5 kg/m² (women)
- BIA: Validated equations available
- CT/MRI: Research standard but expensive

### Step 4: Assess Severity (Physical Performance)
- Gait speed <0.8 m/s
- SPPB ≤8
- TUG ≥20 seconds

## Evidence-Based Interventions

### Resistance Exercise Training (RET)

**Meta-Analysis Evidence:**
- Increases muscle mass (0.5-1 kg)
- Increases strength (25-100%)
- Improves function (gait speed, chair stand)
- Effective even in 90-year-olds

**Optimal Parameters:**
| Parameter | Recommendation |
|-----------|----------------|
| Frequency | 2-3 sessions/week |
| Intensity | 70-80% 1RM (moderate-high) |
| Volume | 2-3 sets of 8-12 reps |
| Progression | Increase load when can do 12+ reps |
| Duration | At least 12 weeks |

**Important Considerations:**
- Supervision improves outcomes
- Progressive overload essential
- Combined with protein intake timing (post-exercise)

### Nutritional Interventions

**Protein:**
- Current RDA (0.8 g/kg) insufficient for older adults
- Recommended: 1.0-1.2 g/kg/day (healthy)
- For sarcopenia: 1.2-1.5 g/kg/day
- Per-meal threshold: 25-30g (to overcome anabolic resistance)
- Leucine: 2.5-3g per meal may enhance response

**Vitamin D:**
- Deficiency prevalent in elderly (50-80%)
- Low vitamin D associated with sarcopenia, falls
- Supplement if <30 ng/mL
- Dose: 800-2000 IU/day

**Combination Approach:**
- Exercise + protein supplementation > either alone
- Timing: Protein within 2 hours of exercise
- HMB (leucine metabolite): Some evidence for benefit`,
      keyTerms: [
        { term: 'anabolic resistance', definition: 'Decreased muscle protein synthesis response to anabolic stimuli (protein, exercise) seen in aging' },
        { term: 'myosteatosis', definition: 'Infiltration of fat into skeletal muscle; associated with poor outcomes', pronunciation: 'my-oh-stee-ah-TOH-sis' },
        { term: 'EWGSOP2', definition: 'European Working Group on Sarcopenia in Older People 2; revised consensus criteria for sarcopenia diagnosis' },
        { term: 'Clinical Frailty Scale', definition: 'Visual 9-point scale for rapid frailty assessment based on functional status' },
        { term: 'Frailty Index', definition: 'Continuous measure of frailty based on accumulation of health deficits (0-1 scale)' },
        { term: 'leucine', definition: 'Essential branched-chain amino acid that directly stimulates muscle protein synthesis' },
        { term: 'SASP', definition: 'Senescence-Associated Secretory Phenotype; inflammatory factors secreted by senescent cells' },
      ],
      clinicalNotes: 'The Clinical Frailty Scale is quick and practical for bedside use. Grip strength is an excellent screening tool - consider adding to vital signs. Anabolic resistance means older adults need MORE protein per meal (25-30g), not less. Exercise prescription should be specific: type, intensity, frequency, progression.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of frailty and sarcopenia integrates molecular mechanisms, biomarkers, pharmacological interventions under investigation, and precision medicine approaches to prevent and reverse these syndromes.',
      explanation: `## Molecular Mechanisms of Sarcopenia

### Protein Turnover Regulation

**Anabolic Pathways:**

*mTORC1 Pathway:*
- Master regulator of muscle protein synthesis
- Activated by: Amino acids (leucine), insulin/IGF-1, mechanical load
- Age-related impairment: Reduced mTORC1 activation to stimuli
- Downstream: S6K1, 4E-BP1 → ribosome biogenesis, translation

*Anabolic Resistance:*
- Older muscle requires higher protein/leucine to achieve same MPS
- Threshold effect: ~0.4 g protein/kg/meal (vs 0.24 in young)
- Mechanisms: Reduced amino acid sensing, impaired mTOR activation

**Catabolic Pathways:**

*Ubiquitin-Proteasome System:*
- Primary pathway for muscle protein degradation
- Key E3 ligases: MuRF1 (TRIM63), Atrogin-1 (MAFbx/FBXO32)
- Upregulated by: TNF-α, glucocorticoids, inactivity, denervation
- FOXO transcription factors regulate expression

*Autophagy-Lysosome System:*
- Quality control mechanism
- Becomes dysregulated with age
- Both excess and insufficient autophagy problematic
- Mitophagy (mitochondrial autophagy) particularly affected

### Mitochondrial Dysfunction

**Age-Related Changes:**
- mtDNA mutations accumulate (especially deletions)
- Decreased oxidative phosphorylation capacity
- Increased ROS production
- Impaired mitochondrial dynamics (fusion/fission)
- Reduced mitophagy (damaged mitochondria accumulate)

**Consequences:**
- ATP deficit for muscle contraction
- Oxidative damage to proteins, lipids, DNA
- Activation of apoptotic pathways
- Contribution to inflammaging

### Neuromuscular Junction (NMJ) Degeneration

**Age-Related Changes:**
- Motor unit remodeling (denervation-reinnervation cycles)
- NMJ fragmentation
- Decreased acetylcholine receptor clustering
- Schwann cell dysfunction

**Clinical Impact:**
- Loss of motor units (irreversible)
- Preferential loss of Type II fiber motor units
- Contributes to weakness and fatigue

### Satellite Cell Dysfunction

**Changes with Aging:**
- Decreased satellite cell number
- Impaired activation and proliferation
- Altered differentiation capacity
- Niche (microenvironment) alterations

**Implications:**
- Reduced regenerative capacity
- Impaired hypertrophic response to exercise
- Potential therapeutic target

## Biomarkers of Frailty and Sarcopenia

### Inflammatory Markers

| Biomarker | Association | Clinical Use |
|-----------|-------------|--------------|
| IL-6 | Strong predictor of frailty, mortality | Research |
| TNF-α | Associated with muscle wasting | Research |
| CRP | Elevated in frailty, predicts outcomes | Clinical available |
| GDF-15 | Emerging marker, predicts mortality | Research |

### Hormonal Markers

| Biomarker | Change with Frailty | Notes |
|-----------|---------------------|-------|
| IGF-1 | Decreased | May reflect nutritional status |
| DHEA-S | Decreased | Adrenal aging |
| Testosterone | Decreased in men | Associated with sarcopenia |
| Cortisol:DHEA ratio | Increased | Catabolic state |

### Muscle-Specific Markers

| Biomarker | Source | Potential Use |
|-----------|--------|---------------|
| Myostatin | Muscle (inhibitor of growth) | Therapeutic target |
| Irisin | Muscle (myokine) | Exercise marker |
| Creatine kinase | Muscle damage | Limited specificity |
| Urinary creatinine | Muscle mass proxy | Research |

### Composite Approaches

**Frailty Biologic Signature:**
- Multi-marker panels being developed
- Combine inflammatory, hormonal, metabolic markers
- Machine learning approaches to integrate data
- Goal: Earlier detection, precision medicine

## Pharmacological Interventions

### Currently Available

**Testosterone:**
- Increases muscle mass and strength
- Modest functional improvements
- Cardiovascular safety concerns (FDA warning)
- Consider in hypogonadal men with sarcopenia

**Vitamin D:**
- Deficiency treatment improves function
- Unclear benefit in replete individuals
- Safe; monitor for hypercalcemia at high doses

### Investigational Agents

| Agent | Mechanism | Status | Evidence |
|-------|-----------|--------|----------|
| Selective Androgen Receptor Modulators (SARMs) | Tissue-selective androgen effects | Phase 2-3 | Mixed results; liver toxicity concerns |
| Myostatin inhibitors | Block muscle growth inhibitor | Phase 2-3 | Limited efficacy in trials |
| Activin receptor antibodies (Bimagrumab) | Block ActRII signaling | Phase 3 | Increased lean mass; uncertain function |
| GH/GH secretagogues | Anabolic hormone | Studied | Increased lean mass; side effects |
| β2-agonists | Muscle anabolism | Limited | Cardiac side effects |
| Angiotensin system modulation | Multiple mechanisms | Observational | Potential protective effects |

### Senolytic Approaches

**Rationale:**
- Senescent cell accumulation contributes to frailty
- SASP drives inflammaging and tissue dysfunction
- Clearing senescent cells might reverse frailty

**Agents Under Investigation:**
- Dasatinib + Quercetin (D+Q)
- Fisetin
- Navitoclax

**Early Evidence:**
- Improved physical function in small trials
- Reduced SASP markers
- Phase 2 trials ongoing

## Precision Frailty Medicine

### Risk Stratification

**Biological Age Assessment:**
- Epigenetic clocks correlate with frailty
- Proteomic aging signatures
- Metabolomic profiles

**Multi-Omic Integration:**
- Combine genetic risk, biomarkers, clinical data
- Machine learning for prediction
- Identify intervention targets

### Personalized Intervention

**Exercise Prescription:**
- Genetic variants affect training response
- Tailor intensity/type to individual
- Monitor response and adjust

**Nutritional Precision:**
- Metabolomic assessment of nutritional status
- Personalized protein/leucine requirements
- Gut microbiome considerations

### Prehabilitation

**Pre-Surgical Optimization:**
- Identify frail patients before surgery
- 2-4 weeks of intensive intervention:
  - Progressive resistance training
  - Protein supplementation
  - Optimize nutrition
- Reduces postoperative complications
- Faster functional recovery

## Special Populations

### Frailty and Cancer

**Cancer-Related Sarcopenia:**
- Distinct mechanisms (cachexia vs age-related)
- IL-6, TNF-α, PIF-1 elevated
- Associated with chemotherapy toxicity
- Predicts survival

**Management:**
- Frailty assessment before treatment decisions
- Exercise during chemotherapy safe and beneficial
- Nutritional support critical

### Frailty and Heart Failure

**Bidirectional Relationship:**
- HF causes sarcopenia (catabolic state, inactivity)
- Sarcopenia worsens HF outcomes
- Cardiac cachexia: Severe muscle wasting

**Management:**
- Cardiac rehabilitation
- Protein supplementation
- Careful medication titration in frail`,
      keyTerms: [
        { term: 'mTORC1', definition: 'Mechanistic Target of Rapamycin Complex 1; master regulator of muscle protein synthesis activated by nutrients and exercise' },
        { term: 'MuRF1/MAFbx', definition: 'Muscle-specific E3 ubiquitin ligases that tag proteins for degradation; markers of muscle catabolism' },
        { term: 'myostatin', definition: 'Negative regulator of muscle growth; therapeutic target for sarcopenia' },
        { term: 'SARMs', definition: 'Selective Androgen Receptor Modulators; tissue-selective androgens under investigation for sarcopenia' },
        { term: 'GDF-15', definition: 'Growth Differentiation Factor 15; emerging biomarker of frailty and mortality' },
        { term: 'prehabilitation', definition: 'Optimization of physical function before surgery to improve outcomes' },
        { term: 'cardiac cachexia', definition: 'Severe wasting syndrome in advanced heart failure; associated with poor prognosis' },
      ],
      clinicalNotes: 'Prehabilitation is increasingly recognized as valuable before major surgery in frail patients - even 2-4 weeks of exercise and nutrition intervention can improve outcomes. Testosterone has limited evidence for functional outcomes and cardiovascular concerns limit use. Myostatin inhibitors have been disappointing in trials - biology is complex. Focus on proven interventions: exercise and protein.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art frailty and sarcopenia research encompasses cellular reprogramming approaches, multi-omic aging signatures, systems biology of muscle aging, and health systems implementation of frailty-guided care.',
      explanation: `## Advanced Molecular Biology of Muscle Aging

### Satellite Cell Biology and Rejuvenation

**Satellite Cell Aging:**
- Intrinsic changes: Epigenetic alterations, accumulated damage
- Extrinsic niche changes: Reduced growth factors, altered ECM
- Systemic factors: Elevated inflammatory mediators

**Rejuvenation Strategies:**

*Heterochronic Parabiosis Findings:*
- Young blood factors improve satellite cell function
- GDF11 initially proposed; now controversial
- TIMP2 may contribute to cognitive/muscle benefits
- Young plasma trials: Early phase, limited muscle data

*Epigenetic Reprogramming:*
- Partial reprogramming restores satellite cell function
- In vivo OSKM expression improves regeneration in aged mice
- Potential for tissue-specific rejuvenation
- Clinical translation years away

**Young Blood Factors vs. Old Blood Factors:**
| Factor | Source | Effect on Muscle |
|--------|--------|------------------|
| GDF11 | Controversial | Initially pro-regeneration; now disputed |
| Oxytocin | ↓ with age | Improves satellite cell activation |
| CCL11 | ↑ with age | Negative; associated with decline |
| β2-microglobulin | ↑ with age | Impairs regeneration |
| TGF-β | ↑ with age | Inhibits satellite cell function |

### Mitochondrial Biology

**mtDNA Heteroplasmy:**
- Somatic mtDNA mutations accumulate
- Mosaic pattern across muscle fibers
- Threshold effect for dysfunction (~60-80% mutant)
- Clonal expansion of deletions

**Interventions Targeting Mitochondria:**

| Approach | Mechanism | Evidence |
|----------|-----------|----------|
| Exercise | ↑ Mitochondrial biogenesis (PGC-1α) | Strong |
| NAD+ precursors (NMN, NR) | Restore NAD+ levels | Promising preclinical; human trials mixed |
| Urolithin A | Mitophagy enhancement | Phase 2 trials ongoing |
| MitoQ, SS-31 | Mitochondria-targeted antioxidants | Limited clinical data |
| Rapamycin | Improves mitophagy | Animal data; human trials planned |

### Neuromuscular Junction Aging

**Advanced Mechanisms:**
- Decreased agrin signaling (NMJ maintenance)
- Disrupted dystrophin-associated protein complex
- Altered calcium handling at nerve terminal
- Schwann cell senescence

**Therapeutic Targets:**
- Agrin supplementation (preclinical)
- LRP4-MuSK pathway activation
- Neurotrophic factors

## Multi-Omic Frailty Signatures

### Genomics

**Genetic Variants Associated with Frailty/Sarcopenia:**
| Gene | Function | Association |
|------|----------|-------------|
| ACTN3 | α-actinin-3 (fast fiber protein) | Power, sprint performance |
| ACE I/D | Angiotensin converting enzyme | Endurance, longevity |
| VDR | Vitamin D receptor | Muscle strength |
| APOE | Lipid metabolism | Frailty risk |
| IL-6 | Inflammatory cytokine | Muscle mass |
| Myostatin | Muscle growth inhibitor | Rare variants → exceptional muscle |

**Polygenic Risk Scores:**
- Multiple variants combined
- Modest predictive value currently
- May improve with larger GWAS

### Epigenomics

**Muscle Epigenetic Clocks:**
- DNA methylation patterns specific to skeletal muscle
- Track biological age of muscle tissue
- May respond to exercise intervention
- Potential for monitoring intervention effects

**Exercise and Epigenetics:**
- Acute exercise changes DNA methylation at specific genes
- Chronic exercise produces lasting epigenetic changes
- Potential mechanism for "muscle memory"
- Research into epigenetic drugs for muscle

### Proteomics and Metabolomics

**Plasma Proteomics:**
- SomaScan, Olink platforms: 1000s of proteins
- Aging signatures identified
- Organ-specific aging clocks (muscle, liver, brain, etc.)
- Predict frailty, mortality

**Key Muscle-Related Proteins:**
| Protein | Change with Aging/Frailty | Function |
|---------|---------------------------|----------|
| GDF-15 | ↑ | Stress response; strong mortality predictor |
| NT-proBNP | ↑ | Cardiac stress; associated with frailty |
| Cystatin C | ↑ | Renal function; frailty marker |
| Albumin | ↓ | Nutritional status; inflammation |
| Myostatin | Variable | Muscle growth inhibitor |
| Follistatin | ↓ | Myostatin antagonist |

**Metabolomics:**
- Acylcarnitine profiles reflect mitochondrial function
- Amino acid patterns (BCAA) predict outcomes
- Kynurenine pathway metabolites (tryptophan metabolism)
- Gut microbiome-derived metabolites

## Systems Biology Integration

### Network Medicine Approaches

**Multi-Omic Integration:**
- Combine genomics, transcriptomics, proteomics, metabolomics
- Network analysis to identify hubs and modules
- Potential for drug repurposing
- AI/ML for pattern recognition

**Digital Twins:**
- Computational models of individual aging
- Integrate multi-omic data + clinical + wearables
- Predict response to interventions
- Emerging concept; early development

### Resilience as a Systems Property

**Concept:**
- Frailty represents loss of systems resilience
- Multiple interacting subsystems (cardiovascular, muscular, immune, neurological)
- Redundancy provides reserve
- Threshold effects and tipping points

**Measuring Resilience:**
- Recovery from acute stress (illness, surgery)
- Heart rate variability and recovery
- Immune response and recovery
- Physical function recovery trajectory

## Clinical Implementation

### Frailty-Guided Care Models

**Surgical Decision Making:**
- Frailty assessment before major surgery
- Risk-benefit discussion with patients
- Prehabilitation for marginal candidates
- Alternative approaches for very frail (e.g., TAVI vs. SAVR)

**Oncology:**
- Geriatric assessment predicts toxicity
- Dose modifications based on frailty
- Treatment goals discussions
- Emerging oncology-specific frailty tools

**Emergency Department:**
- Frailty screening identifies high-risk
- Informs disposition decisions
- Targets for comprehensive geriatric assessment
- Reduces unnecessary admissions

### Health Systems Implementation

**Implementation Challenges:**
| Challenge | Potential Solutions |
|-----------|---------------------|
| Time constraints | Efficient screening tools (CFS, FRAIL) |
| Lack of training | Education, decision support |
| Workflow integration | EHR-embedded assessments |
| Referral pathways | Geriatric medicine, falls clinics |
| Follow-up | Care coordination, transitions |

**Quality Metrics:**
- Frailty screening rates
- Intervention implementation
- Outcomes (falls, hospitalizations, mortality)
- Patient-reported outcomes

### Economic Considerations

**Cost-Effectiveness:**
- Frailty interventions generally cost-effective
- Exercise programs: High value
- Comprehensive geriatric assessment: Reduces costs
- Prehabilitation: ROI in reduced complications

**Value-Based Care:**
- Frailty affects all-cause outcomes
- Risk adjustment models increasingly include frailty
- Opportunity for targeted intervention investment

## Research Frontiers

### Longevity Interventions Applied to Frailty

**Rapamycin/Rapalogs:**
- mTOR inhibition extends lifespan in multiple species
- Paradox: Inhibits muscle protein synthesis acutely
- May improve overall function through other mechanisms
- Clinical trials in frailty planned

**Metformin:**
- TAME trial will provide evidence
- Potential benefits: Mitochondrial function, inflammation
- May affect sarcopenia through multiple pathways

**Senolytics:**
- D+Q phase 2 trials in frailty
- Clear senescent cells from multiple tissues
- Reduce SASP-driven inflammation
- Restore tissue function

### Precision Medicine in Frailty

**Individualized Intervention:**
1. Multi-omic profiling (genome, proteome, metabolome)
2. Identify dominant mechanisms (inflammatory, nutritional, hormonal)
3. Target specific pathways
4. Monitor biological age markers
5. Iterate based on response

**Example Approach:**
\`\`\`
Patient Assessment:
- Clinical frailty score
- Biomarker panel (GDF-15, IL-6, IGF-1, albumin)
- Proteomics aging signature
- Epigenetic clock

Risk Profile:
- High inflammatory → anti-inflammatory focus
- Low anabolic → optimize protein, consider testosterone
- Mitochondrial signature → NAD+ precursors, exercise

Intervention:
- Tailored exercise prescription
- Precision nutrition
- Targeted supplements
- Consider investigational agents in trials

Monitoring:
- Repeat biomarkers at 3-6 months
- Functional assessments
- Adjust based on response
\`\`\``,
      keyTerms: [
        { term: 'satellite cell niche', definition: 'Microenvironment surrounding muscle stem cells; age-related changes impair regeneration' },
        { term: 'mtDNA heteroplasmy', definition: 'Mixture of mutant and wild-type mitochondrial DNA within cells; accumulates with age' },
        { term: 'urolithin A', definition: 'Gut microbiome-derived metabolite that enhances mitophagy; under investigation for aging' },
        { term: 'digital twin', definition: 'Computational model of an individual integrating multi-omic and clinical data for personalized predictions' },
        { term: 'systems resilience', definition: 'Capacity of interconnected physiological systems to maintain function and recover from stress' },
        { term: 'organ-specific aging', definition: 'Concept that different organs age at different rates; can be measured with proteomic/epigenetic markers' },
      ],
      clinicalNotes: `Key clinical integration points:

1. **Frailty screening** should be routine for hospitalized elderly, surgical candidates, and oncology patients
2. **Clinical Frailty Scale** is practical for rapid bedside assessment; correlates with outcomes across settings
3. **Biomarkers** (GDF-15, IL-6, albumin) add prognostic information but don't yet guide treatment
4. **Exercise remains the cornerstone** - evidence strongest for resistance + balance training
5. **Protein optimization** (1.2-1.5 g/kg/day distributed across meals) is underutilized
6. **Prehabilitation** before surgery in frail patients can improve outcomes even with short duration
7. **Emerging therapies** (senolytics, NAD+ precursors) are promising but not ready for clinical use outside trials
8. **Systems approach** needed: Address multiple domains (physical, nutritional, cognitive, social) together`,
    },
  },

  media: [
    {
      id: 'frailty-phenotype-diagram',
      type: 'diagram',
      filename: 'frailty-phenotype.svg',
      title: 'Fried Frailty Phenotype Criteria',
      description: 'Visual representation of the 5 frailty criteria and their assessment',
    },
    {
      id: 'sarcopenia-pathway',
      type: 'diagram',
      filename: 'sarcopenia-mechanisms.svg',
      title: 'Sarcopenia Pathophysiology',
      description: 'Molecular pathways leading to age-related muscle loss',
    },
  ],

  citations: [
    {
      id: 'fried-frailty',
      type: 'article',
      title: 'Frailty in Older Adults: Evidence for a Phenotype',
      authors: ['Fried LP', 'Tangen CM', 'Walston J', 'et al.'],
      source: 'Journal of Gerontology: Medical Sciences',
    },
    {
      id: 'ewgsop2',
      type: 'article',
      title: 'Sarcopenia: revised European consensus on definition and diagnosis',
      authors: ['Cruz-Jentoft AJ', 'Bahat G', 'Bauer J', 'et al.'],
      source: 'Age and Ageing',
    },
    {
      id: 'exercise-sarcopenia-cochrane',
      type: 'article',
      title: 'Progressive resistance strength training for improving physical function in older adults',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'concept-aging-physiology', targetType: 'concept', relationship: 'parent', label: 'Aging Physiology' },
    { targetId: 'concept-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'concept-polypharmacy', targetType: 'concept', relationship: 'related', label: 'Polypharmacy' },
    { targetId: 'concept-geriatric-syndromes', targetType: 'concept', relationship: 'sibling', label: 'Geriatric Syndromes' },
  ],

  tags: {
    systems: ['musculoskeletal', 'multi-system'],
    topics: ['geriatrics', 'rehabilitation', 'nutrition', 'exercise medicine'],
    keywords: ['frailty', 'sarcopenia', 'muscle loss', 'protein', 'resistance training', 'aging'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default frailtySarcopenia;
