import { EducationalContent } from '../../../types';

export const osteoporosisContent: EducationalContent = {
  id: 'ortho-osteoporosis',
  type: 'condition',
  name: 'Osteoporosis',
  alternateNames: ['Bone loss', 'Porous bones', 'Brittle bone disease'],
  hpoId: 'HP:0000939',

  levels: {
    1: {
      level: 1,
      summary: 'Osteoporosis is a condition where bones become weak and brittle, making them more likely to break from minor falls or even everyday activities.',
      explanation: `Your bones are constantly being broken down and rebuilt throughout your life. Osteoporosis happens when your body loses bone faster than it can make new bone.

**Why It Matters:**
- Weak bones can break easily
- Common fractures: Hip, spine, wrist
- Hip fractures are very serious in older adults
- Often called a "silent disease" because you can't feel your bones getting weaker

**Who Is at Risk:**
- Women more than men (especially after menopause)
- Older adults
- Family history of osteoporosis
- Small, thin body frame
- Not getting enough calcium or vitamin D
- Not exercising regularly
- Smoking and excessive alcohol

**Warning Signs:**
- Often no symptoms until a bone breaks
- Getting shorter over time
- Stooped posture
- Back pain (from spine fractures)

**How It's Detected:**
- Bone density test (DXA scan)
- Painless, like an X-ray
- Recommended for women 65+ and others at risk

**Prevention and Treatment:**

*Lifestyle:*
- Get enough calcium (dairy, leafy greens, fortified foods)
- Get enough vitamin D (sunlight, supplements)
- Weight-bearing exercise (walking, dancing, weights)
- Don't smoke
- Limit alcohol

*Medications (if needed):*
- Bisphosphonates (most common)
- Other bone-building medications
- Your doctor will decide what's best for you

**Preventing Falls:**
- Remove tripping hazards at home
- Good lighting
- Handrails on stairs
- Non-slip mats
- Regular eye exams
- Review medications that cause dizziness`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'A disease where bones become weak and are more likely to break' },
        { term: 'bone density', definition: 'How strong and solid your bones are' },
        { term: 'DXA scan', definition: 'A special X-ray that measures how strong your bones are' },
        { term: 'calcium', definition: 'A mineral that makes bones strong; found in dairy and other foods' },
      ],
      analogies: [
        'Healthy bones are like dense wood, but osteoporotic bones are like a dry sponge - full of holes and easy to break.',
        'Your bones are like a bank account - you need to keep making deposits (calcium, exercise) to avoid running low.',
        'A DXA scan is like checking your bone\'s savings account balance.',
      ],
      examples: [
        'A grandmother who breaks her hip after a minor fall.',
        'An older person who lost several inches of height over the years from spine fractures.',
        'A woman who discovers she has osteoporosis during a routine bone density screening.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoporosis is characterized by decreased bone mass and microarchitectural deterioration, diagnosed by DXA T-score, and treated with lifestyle modifications and pharmacotherapy to reduce fracture risk.',
      explanation: `Osteoporosis is a skeletal disorder compromising bone strength and predisposing to fracture. Understanding diagnosis and treatment is essential for prevention.

**Epidemiology:**
- 50% of women, 20% of men will have osteoporotic fracture
- Hip fracture: 20% mortality at 1 year
- Spine fractures often undiagnosed

**Bone Biology Basics:**

*Bone Remodeling:*
- Osteoclasts: Resorb bone
- Osteoblasts: Form new bone
- Balance maintained until ~30 years (peak bone mass)
- After menopause: Accelerated loss

*Bone Types:*
- Cortical (compact): 80% of skeleton
- Trabecular (spongy): Higher turnover, lost first

**Risk Factors:**

*Major:*
- Age >65
- Prior fragility fracture
- Glucocorticoid use
- Family history hip fracture
- Low body weight
- Current smoking
- Excess alcohol

*Secondary Causes:*
- Hyperparathyroidism
- Hyperthyroidism
- Hypogonadism
- Malabsorption
- Chronic kidney disease
- Multiple myeloma
- Medications (steroids, PPIs, anticonvulsants)

**Diagnosis:**

*DXA (Dual-energy X-ray Absorptiometry):*
- Measures bone mineral density (BMD)
- T-score: Comparison to young adult
- Z-score: Comparison to age-matched

*WHO Criteria:*
- Normal: T-score ≥ -1.0
- Osteopenia: T-score -1.0 to -2.5
- Osteoporosis: T-score ≤ -2.5
- Severe: T-score ≤ -2.5 + fracture

*Screening Recommendations:*
- Women ≥65 years
- Men ≥70 years
- Younger with risk factors

**FRAX Tool:**
- 10-year fracture probability
- Includes clinical risk factors
- Guides treatment decisions
- Country-specific algorithms

**Treatment:**

*Non-pharmacologic:*
- Calcium: 1000-1200 mg/day (diet + supplements)
- Vitamin D: 800-1000 IU/day
- Weight-bearing exercise
- Fall prevention
- Smoking cessation

*Pharmacologic:*

*First-line: Bisphosphonates*
- Alendronate, risedronate, ibandronate, zoledronic acid
- Inhibit osteoclasts
- 5-10 years then consider drug holiday

*Other Options:*
- Denosumab: RANKL inhibitor
- Teriparatide: PTH analog (anabolic)
- Romosozumab: Sclerostin inhibitor (anabolic)
- Raloxifene: SERM (breast cancer benefit too)`,
      keyTerms: [
        { term: 'T-score', definition: 'Standard deviations from young adult mean bone density; defines osteoporosis' },
        { term: 'osteoclast', definition: 'Cell that breaks down bone; target of bisphosphonates' },
        { term: 'osteoblast', definition: 'Cell that builds new bone; target of anabolic therapies' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; calculates 10-year fracture probability' },
        { term: 'bisphosphonate', definition: 'Medication that slows bone breakdown; first-line treatment' },
        { term: 'fragility fracture', definition: 'Fracture from low-energy trauma that wouldn\'t break normal bone' },
      ],
      analogies: [
        'Osteoporosis is like a building losing its structural support beams - it looks okay until stress is applied.',
        'Bisphosphonates act like putting a "slow down" sign for the cells breaking down bone.',
        'FRAX is like a weather forecast for your fracture risk over the next 10 years.',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis management integrates fracture risk assessment, appropriate pharmacotherapy selection, monitoring strategies, and understanding of treatment sequencing and duration.',
      explanation: `Comprehensive osteoporosis care requires evidence-based assessment, treatment selection, and long-term management strategies.

**Pathophysiology:**

*Bone Remodeling Cycle:*
1. Activation: Osteoclast precursors recruited
2. Resorption: Osteoclasts remove bone (2-4 weeks)
3. Reversal: Osteoclasts leave, osteoblasts arrive
4. Formation: New bone laid down (4-6 months)
5. Quiescence: Resting phase

*RANK/RANKL/OPG System:*
- RANKL: Activates osteoclasts
- OPG: Decoy receptor, blocks RANKL
- Estrogen increases OPG
- Menopause: Loss of estrogen → increased resorption

*Sclerostin:*
- Inhibits Wnt signaling
- Suppresses bone formation
- Target of romosozumab

**Laboratory Workup:**

*Baseline:*
- Complete metabolic panel (calcium, renal function)
- 25-OH vitamin D
- Consider: TSH, PTH, testosterone (men)

*Secondary Causes:*
- 24-hour urine calcium
- Serum/urine protein electrophoresis
- Celiac serology

*Bone Turnover Markers:*
- CTX (resorption)
- P1NP (formation)
- Monitor treatment response

**Treatment Decision-Making:**

*When to Treat:*
- T-score ≤ -2.5
- Hip or vertebral fracture
- Osteopenia + FRAX ≥20% major, ≥3% hip

*Treatment Selection:*

*Antiresorptive:*
- Bisphosphonates: First-line, most evidence
- Denosumab: CKD-friendly, no drug holiday

*Anabolic:*
- Teriparatide: Daily injection, 2 years max
- Romosozumab: Monthly injection, 1 year
- Reserved for high-risk patients

*Sequential Therapy:*
- Anabolic first, then antiresorptive
- Anabolic builds bone, antiresorptive maintains
- Denosumab discontinuation requires transition

**Bisphosphonate Details:**

*Mechanism:*
- Incorporate into bone matrix
- Taken up by osteoclasts
- Induce osteoclast apoptosis

*Dosing:*
- Oral: Alendronate 70mg weekly, risedronate 35mg weekly
- IV: Zoledronic acid 5mg yearly

*Administration:*
- Empty stomach, upright 30 minutes
- Full glass of water
- Adequate calcium/vitamin D

*Adverse Effects:*
- GI intolerance (oral)
- Acute phase reaction (IV)
- Osteonecrosis of jaw (rare)
- Atypical femur fracture (rare, long-term)

**Monitoring:**

*DXA:*
- Repeat in 2 years on treatment
- Stable or improving = success
- Significant decline: Reassess

*Adherence:*
- Critical for effectiveness
- Address barriers
- Consider IV if oral issues

**Drug Holiday:**

*Bisphosphonates:*
- Consider after 5 years (oral) or 3 years (IV)
- Only for lower-risk patients
- Monitor for bone loss
- Restart if fracture or bone loss

*Denosumab:*
- NO drug holiday
- Rebound bone loss if stopped
- Must transition to bisphosphonate`,
      keyTerms: [
        { term: 'RANKL', definition: 'Receptor Activator of Nuclear factor Kappa-B Ligand; activates osteoclasts; target of denosumab' },
        { term: 'sclerostin', definition: 'Protein that inhibits bone formation; target of romosozumab' },
        { term: 'CTX', definition: 'C-terminal telopeptide; bone resorption marker' },
        { term: 'P1NP', definition: 'Procollagen type 1 N-terminal propeptide; bone formation marker' },
        { term: 'drug holiday', definition: 'Temporary pause in bisphosphonate treatment after long-term use' },
        { term: 'atypical femur fracture', definition: 'Stress fracture of femur shaft associated with long-term bisphosphonate use' },
      ],
      clinicalNotes: 'Denosumab discontinuation causes rapid bone loss - must transition to bisphosphonate. Anabolic therapy followed by antiresorptive maintains gains better than starting antiresorptive. Drug holiday only appropriate for lower-risk patients on bisphosphonates. Check vitamin D before starting therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced osteoporosis management addresses treatment failure, rare complications, glucocorticoid-induced osteoporosis, and complex patient populations requiring individualized approaches.',
      explanation: `Complex osteoporosis care requires expertise in difficult clinical scenarios, rare complications, and specialized populations.

**Treatment Failure:**

*Definition:*
- Fracture despite treatment
- Significant BMD decline
- Consider: Adherence, absorption, secondary cause

*Evaluation:*
- Assess adherence (CTX suppression)
- Rule out secondary causes
- Consider bone turnover markers

*Management:*
- Switch drug class
- Consider anabolic therapy
- Combination therapy (limited data)

**Glucocorticoid-Induced Osteoporosis:**

*Pathophysiology:*
- Decreased bone formation (primary)
- Increased resorption
- Decreased calcium absorption
- Myopathy increases fall risk

*Risk Assessment:*
- FRAX includes steroid use
- Underestimates risk at high doses

*Prevention/Treatment:*
- Start with prednisone ≥2.5mg/day for ≥3 months
- Calcium and vitamin D for all
- Bisphosphonate or teriparatide if high risk
- Consider anabolic for very high risk

**Rare Complications:**

*Osteonecrosis of the Jaw (ONJ):*
- Definition: Exposed bone >8 weeks
- Risk: Dental procedures, IV bisphosphonates, cancer doses
- Incidence: 1/10,000 to 1/100,000 (osteoporosis doses)
- Prevention: Dental clearance before starting
- Management: Conservative, antibiotics, limited surgery

*Atypical Femur Fractures (AFF):*
- Location: Subtrochanteric/shaft
- Prodromal thigh pain
- Associated with >5 years bisphosphonate
- Bilateral imaging recommended
- May need prophylactic fixation

**Special Populations:**

*Chronic Kidney Disease:*
- CKD-MBD spectrum
- DXA interpretation limited
- Avoid bisphosphonates if eGFR <30-35
- Denosumab: Hypocalcemia risk
- Teriparatide: Avoid if PTH already elevated

*Premenopausal Women:*
- Z-score not T-score
- Always look for secondary cause
- Treat cause when possible
- Bisphosphonates: Fetal risk consideration

*Men:*
- Underdiagnosed, undertreated
- Check testosterone
- Same treatments effective
- Secondary causes common

**Vertebral Fractures:**

*Acute Management:*
- Pain control
- Early mobilization
- Bracing (controversial)
- Vertebral augmentation for refractory pain

*Vertebroplasty/Kyphoplasty:*
- Cement injection into vertebra
- Controversial benefit
- Consider for acute fracture with severe pain
- Risk: Cement leak, adjacent fracture

**Surgical Considerations:**

*Fragility Fractures:*
- Hip fracture: Surgery within 24-48 hours
- Cement-augmented fixation
- Intramedullary nailing often preferred

*Post-Fracture Care:*
- Fracture liaison service model
- Start osteoporosis treatment
- High re-fracture risk first 1-2 years

**Hip Fracture Management:**

*Types:*
- Femoral neck: Intracapsular
- Intertrochanteric: Extracapsular

*Treatment:*
- Young: Fixation with screws
- Elderly displaced neck: Hemiarthroplasty or THA
- Intertroch: Sliding hip screw or IMN

*Post-op:*
- Weight bearing as tolerated
- VTE prophylaxis
- Early mobilization
- Delirium prevention
- Start osteoporosis treatment before discharge`,
      keyTerms: [
        { term: 'osteonecrosis of the jaw', definition: 'Exposed bone in jaw lasting >8 weeks; rare complication of antiresorptive therapy' },
        { term: 'atypical femur fracture', definition: 'Transverse fracture of femoral shaft associated with long-term bisphosphonates' },
        { term: 'CKD-MBD', definition: 'Chronic Kidney Disease-Mineral and Bone Disorder; complex bone disease in renal failure' },
        { term: 'vertebral augmentation', definition: 'Vertebroplasty or kyphoplasty; cement injection for painful vertebral fractures' },
        { term: 'fracture liaison service', definition: 'Systematic secondary fracture prevention program' },
        { term: 'cement-augmented fixation', definition: 'Use of PMMA cement to improve screw fixation in osteoporotic bone' },
      ],
      clinicalNotes: 'ONJ risk is very low with osteoporosis doses - don\'t withhold treatment due to fear. AFF presents with prodromal thigh pain - image bilateral femurs. Hip fracture patients must start osteoporosis treatment before discharge - re-fracture risk highest in first year. GIOP requires more aggressive treatment than primary osteoporosis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary osteoporosis research encompasses novel therapeutic targets, precision medicine approaches, fracture healing optimization, and healthcare system interventions to close the treatment gap.',
      explanation: `State-of-the-art osteoporosis care integrates emerging therapeutics, personalized approaches, and system-level quality improvement.

**Emerging Therapeutics:**

*Novel Targets:*
- Cathepsin K inhibitors (odanacatib: Development stopped)
- Dickkopf-1 antibodies
- Activin receptor inhibitors
- PTHrP analogs (abaloparatide)

*Abaloparatide:*
- PTHrP analog
- Daily subcutaneous
- Anabolic effect
- Possibly less hypercalcemia than teriparatide

*Combination/Sequential Therapy:*
- Romosozumab → bisphosphonate
- Teriparatide → denosumab
- Avoid anabolic after long-term bisphosphonate

**Precision Medicine:**

*Genetic Factors:*
- BMD highly heritable (50-85%)
- GWAS identified hundreds of loci
- Polygenic risk scores
- Pharmacogenomics emerging

*Biomarkers:*
- Bone turnover markers for monitoring
- microRNA signatures
- Proteomic approaches

*Risk Prediction:*
- Machine learning models
- Integration of multiple data sources
- Beyond FRAX

**Bone Quality Assessment:**

*Beyond BMD:*
- Trabecular bone score (TBS)
- Hip structural analysis
- Finite element analysis

*Advanced Imaging:*
- HR-pQCT: Microarchitecture
- QCT: Volumetric BMD
- Reference point indentation

**Fracture Healing:**

*Biology:*
- Inflammation → soft callus → hard callus → remodeling
- Anabolic agents may enhance healing
- Bisphosphonates: Mixed data on healing

*Optimization:*
- Vitamin D repletion
- Protein intake
- Mechanical loading
- Anabolic therapy in selected cases

**Healthcare System Approaches:**

*Treatment Gap:*
- 80% of fracture patients not treated
- Fracture liaison services close gap
- Systematic identification
- Care coordination

*FLS Model:*
- Identify fracture patients
- Assess osteoporosis
- Initiate treatment
- Monitor adherence

*Quality Metrics:*
- Screening rates
- Treatment initiation
- Persistence at 1 year
- Refracture rates

**Cost-Effectiveness:**

*Treatment Value:*
- Bisphosphonates highly cost-effective
- Anabolic agents: Higher cost, high-risk patients
- FLS programs: Cost-saving

*Generic Availability:*
- Oral bisphosphonates
- Zoledronic acid
- Teriparatide biosimilars

**Research Frontiers:**

*Cell Therapy:*
- MSC-based approaches
- Bone tissue engineering
- Scaffold technology

*Gene Therapy:*
- Gene editing for bone disorders
- Monogenic conditions
- Research stage

*Digital Health:*
- Remote monitoring
- Adherence support
- Fall detection
- Activity tracking

**Sarcopenia and Frailty:**

*Overlap with Osteoporosis:*
- Osteosarcopenia
- Shared risk factors
- Muscle-bone crosstalk

*Assessment:*
- Grip strength
- Gait speed
- FRAIL scale

*Management:*
- Exercise (resistance training)
- Protein supplementation
- Vitamin D
- Address as syndrome`,
      keyTerms: [
        { term: 'trabecular bone score', definition: 'DXA-derived measure of bone microarchitecture quality' },
        { term: 'HR-pQCT', definition: 'High-Resolution peripheral Quantitative CT; assesses bone microarchitecture' },
        { term: 'fracture liaison service', definition: 'Coordinated care program identifying and treating osteoporosis after fracture' },
        { term: 'abaloparatide', definition: 'PTHrP analog; anabolic agent for osteoporosis' },
        { term: 'osteosarcopenia', definition: 'Co-occurrence of osteoporosis and sarcopenia; synergistic fracture risk' },
        { term: 'polygenic risk score', definition: 'Genetic prediction tool combining multiple variants affecting BMD' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Hip fractures: 20% 1-year mortality
- T-score ≤ -2.5 or fragility fracture defines osteoporosis
- Bisphosphonates: First-line, drug holiday after 5 years
- Denosumab: No holiday, must transition to bisphosphonate
- Anabolic agents: For highest-risk patients, follow with antiresorptive

**Emerging Evidence:**
- Sequential anabolic → antiresorptive superior
- Romosozumab: Most rapid BMD gains
- TBS adds to FRAX prediction
- FLS programs reduce refracture rates

**Practice Considerations:**
- Treatment gap is major public health issue
- Post-fracture: Treat before discharge
- GIOP: Treat early, more aggressively
- Rare complications shouldn't prevent appropriate treatment`,
    },
  },

  media: [
    {
      id: 'bone-remodeling-cycle',
      type: 'diagram',
      filename: 'bone-remodeling-cycle.svg',
      title: 'Bone Remodeling Cycle',
      description: 'Osteoclast resorption and osteoblast formation phases',
    },
    {
      id: 'osteoporosis-dxa',
      type: 'diagram',
      filename: 'dxa-interpretation.svg',
      title: 'DXA Interpretation',
      description: 'T-score classification and clinical interpretation',
    },
  ],
  citations: [
    {
      id: 'aace-guidelines',
      type: 'article',
      title: 'American Association of Clinical Endocrinologists Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis',
      source: 'Endocrine Practice',
      license: 'Copyright AACE',
    },
    {
      id: 'nof-guide',
      type: 'article',
      title: 'Clinician\'s Guide to Prevention and Treatment of Osteoporosis',
      source: 'National Osteoporosis Foundation',
      url: 'https://www.nof.org/',
      license: 'Copyright NOF',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-bone-anatomy', targetType: 'structure', relationship: 'related', label: 'Bone Anatomy' },
    { targetId: 'ortho-fracture-types', targetType: 'condition', relationship: 'sibling', label: 'Fractures' },
    { targetId: 'endo-calcium-metabolism', targetType: 'process', relationship: 'related', label: 'Calcium Metabolism' },
  ],
  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['orthopedics', 'endocrinology', 'geriatrics', 'primary care'],
    keywords: ['osteoporosis', 'bone density', 'fracture', 'bisphosphonate', 'DXA'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoporosisContent;
