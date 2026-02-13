/**
 * Bone Density Screening
 *
 * Comprehensive education on osteoporosis screening
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const BONE_DENSITY_SCREENING: EducationalContent = {
  id: 'concept-bone-density-screening',
  type: 'concept',
  name: 'Bone Density Screening',
  alternateNames: ['Osteoporosis screening', 'DEXA scan', 'DXA screening', 'Bone mineral density test'],

  levels: {
    1: {
      level: 1,
      summary: 'A bone density test measures how strong your bones are and can find osteoporosis before you break a bone.',
      explanation: `As we age, our bones can become thin and weak, a condition called osteoporosis. A bone density test can find this before a broken bone happens.

**What is Osteoporosis?**
- Bones become thin and weak
- Bones can break more easily
- Often called the "silent disease" - no symptoms until a fracture
- Very common in older adults, especially women

**The Bone Density Test:**
- Called a DEXA scan (also DXA)
- Uses very low-dose X-rays
- Measures bone strength at hip and spine
- Painless and quick (10-15 minutes)
- You lie on a table while a scanner passes over you

**Who Should Get Tested:**
- All women age 65 and older
- Younger women with risk factors
- Men age 70 and older (some guidelines)
- Anyone who has broken a bone easily

**Risk Factors for Weak Bones:**
- Being female
- Older age
- Small, thin body frame
- Family history of osteoporosis
- Low calcium or vitamin D intake
- Smoking
- Heavy alcohol use
- Certain medications (steroids)

**Understanding Your Results:**
- **T-score**: Compares your bones to a young adult
- Normal: -1.0 and above
- Low bone mass (osteopenia): -1.0 to -2.5
- Osteoporosis: -2.5 and below

**How to Keep Bones Strong:**
- Get enough calcium (1000-1200 mg/day)
- Get enough vitamin D (600-800 IU/day)
- Do weight-bearing exercise (walking, dancing)
- Don't smoke
- Limit alcohol
- Take medications if prescribed`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'A condition where bones become weak and can break easily' },
        { term: 'DEXA scan', definition: 'A special X-ray test that measures bone density', pronunciation: 'DEX-uh' },
        { term: 'T-score', definition: 'A number that compares your bone density to that of a healthy young adult' },
      ],
      analogies: [
        'Think of your bones like a sponge. Healthy bones have small holes like a new sponge. Osteoporotic bones have large holes like an old, worn-out sponge.',
      ],
      examples: [
        'At age 65, Susan had a bone density test that found low bone mass. With calcium, vitamin D, and exercise, she strengthened her bones and prevented osteoporosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bone density screening with DXA identifies osteoporosis and low bone mass, enabling pharmacologic and lifestyle interventions to prevent fragility fractures.',
      explanation: `Osteoporosis affects over 10 million Americans and causes 2 million fractures annually. Screening identifies at-risk individuals before fractures occur.

**USPSTF Recommendations:**
- Women ≥65 years: Screen (Grade B)
- Postmenopausal women <65 with risk factors: Screen (Grade B)
- Men: Insufficient evidence (Grade I)

**DXA (Dual-Energy X-ray Absorptiometry):**
- Gold standard for bone density measurement
- Measures hip, lumbar spine, sometimes forearm
- Low radiation exposure
- Results as T-score and Z-score

**Understanding Scores:**

*T-Score:*
- Compares to young adult reference population
- Normal: ≥-1.0
- Osteopenia: -1.0 to -2.5
- Osteoporosis: ≤-2.5 or fragility fracture

*Z-Score:*
- Compares to age-matched population
- Used in premenopausal women, men <50
- Z-score ≤-2.0 suggests secondary causes

**Risk Factors:**
- Advanced age
- Female sex
- Low body weight
- Previous fracture
- Parental hip fracture
- Glucocorticoid use
- Rheumatoid arthritis
- Smoking
- Alcohol (≥3 units/day)
- Secondary causes (hyperthyroidism, malabsorption)

**FRAX Tool:**
- Fracture Risk Assessment Tool
- Calculates 10-year probability of:
  - Major osteoporotic fracture (hip, spine, forearm, humerus)
  - Hip fracture specifically
- Incorporates clinical risk factors ± BMD
- Guides treatment decisions

**Treatment Thresholds (NOF):**
- T-score ≤-2.5
- Low bone mass (T-score -1.0 to -2.5) AND:
  - 10-year hip fracture probability ≥3%
  - 10-year major osteoporotic fracture probability ≥20%

**Prevention and Treatment:**

*Lifestyle:*
- Calcium: 1000-1200 mg/day (diet + supplements)
- Vitamin D: 600-800 IU/day (may need more)
- Weight-bearing exercise
- Fall prevention
- Smoking cessation
- Alcohol moderation

*Medications:*
- Bisphosphonates (alendronate, risedronate, zoledronic acid)
- RANK-L inhibitor (denosumab)
- Anabolic agents (teriparatide, abaloparatide, romosozumab)
- Selective estrogen receptor modulators (raloxifene)`,
      keyTerms: [
        { term: 'DXA', definition: 'Dual-energy X-ray absorptiometry; gold standard test for measuring bone mineral density' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; calculates 10-year fracture probability' },
        { term: 'osteopenia', definition: 'Low bone mass between normal and osteoporosis (T-score -1.0 to -2.5)' },
        { term: 'fragility fracture', definition: 'A fracture from minimal trauma (e.g., falling from standing height)' },
      ],
      analogies: [
        'FRAX is like a weather forecast for fractures - it combines multiple factors to predict the chance of a bone breaking in the next 10 years.',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis screening integrates DXA measurement with FRAX risk calculation to identify candidates for pharmacologic intervention, with treatment selection based on fracture risk severity, secondary cause evaluation, and consideration of bisphosphonate drug holidays.',
      explanation: `**Bone Biology:**

*Bone Remodeling:*
- Continuous process: Osteoclast resorption → Osteoblast formation
- Peak bone mass achieved by age 30
- Resorption exceeds formation after menopause
- 1-2% bone loss per year post-menopause

*Estrogen Effects:*
- Inhibits osteoclast activity
- Loss at menopause accelerates bone loss
- 5-7 years of rapid loss after menopause

**DXA Technical Aspects:**

*Measurement Sites:*
- Lumbar spine (L1-L4): Trabecular bone predominant
- Femoral neck and total hip: Cortical + trabecular
- Forearm (33% radius): Alternative if spine/hip not measurable

*Limitations:*
- Degenerative changes can falsely elevate spine BMD
- Prior fractures affect measurement
- Metal hardware interferes
- Obesity may affect precision

**WHO Diagnostic Criteria:**

| Category | T-Score |
|----------|---------|
| Normal | ≥-1.0 |
| Osteopenia | -1.0 to -2.5 |
| Osteoporosis | ≤-2.5 |
| Severe osteoporosis | ≤-2.5 + fragility fracture |

**FRAX Implementation:**

*Input Variables:*
- Age, sex, weight, height
- Previous fracture
- Parent hip fracture
- Current smoking
- Glucocorticoid use
- Rheumatoid arthritis
- Secondary osteoporosis
- Alcohol ≥3 units/day
- Femoral neck BMD (optional)

*Thresholds (US, postmenopausal white women):*
- ≥20% major osteoporotic fracture: Treat
- ≥3% hip fracture: Treat
- May vary by country and population

**Secondary Osteoporosis Evaluation:**

*When to Evaluate:*
- Premenopausal women
- Men <50
- Z-score ≤-2.0
- Unexpectedly low BMD

*Workup:*
- CBC, CMP (calcium, phosphorus, renal function)
- 25-OH vitamin D
- PTH
- TSH
- Testosterone (men)
- 24-hour urine calcium
- Consider: Celiac panel, SPEP, cortisol

**Pharmacologic Management:**

*First-Line: Bisphosphonates*
- Mechanism: Inhibit osteoclast function
- Options: Alendronate (weekly oral), Risedronate (weekly/monthly), Ibandronate (monthly), Zoledronic acid (yearly IV)
- Duration: 5 years oral, 3 years IV, then reassess

*Second-Line/High-Risk:*
- Denosumab: RANK-L inhibitor, q6 months
- Teriparatide: PTH analog, anabolic, 2 years max
- Abaloparatide: PTHrP analog, anabolic
- Romosozumab: Sclerostin inhibitor, anabolic, 1 year

**Bisphosphonate Holiday:**

*Rationale:*
- Atypical femur fractures with prolonged use
- Osteonecrosis of jaw (rare)
- Drugs have long skeletal half-life

*Approach:*
- After 5 years oral or 3 years IV
- Reassess fracture risk
- If still high-risk: Continue or switch
- If lower risk: Drug holiday 2-5 years
- Monitor with DXA, bone markers`,
      keyTerms: [
        { term: 'osteoclast', definition: 'Bone cell that resorbs (breaks down) bone tissue' },
        { term: 'osteoblast', definition: 'Bone cell that forms new bone tissue' },
        { term: 'bisphosphonate', definition: 'Medication that inhibits osteoclast activity and reduces bone resorption' },
        { term: 'RANK-L', definition: 'Receptor activator of nuclear factor kappa-B ligand; stimulates osteoclast formation' },
      ],
      clinicalNotes: 'Use FRAX to guide treatment in osteopenia. Evaluate for secondary causes if unexpectedly low BMD or Z-score ≤-2.0. Consider bisphosphonate holiday after 5 years if lower risk. Monitor compliance with oral bisphosphonates.',
    },
    4: {
      level: 4,
      summary: 'Osteoporosis management integrates advanced imaging modalities (TBS, VFA), bone turnover markers, fracture liaison services, and individualized treatment sequencing, balancing efficacy against rare adverse effects while addressing the osteoporosis care gap.',
      explanation: `**Advanced Assessment:**

*Trabecular Bone Score (TBS):*
- Texture analysis of lumbar spine DXA
- Assesses microarchitecture quality
- T-score adjusted based on TBS
- FRAX can incorporate TBS
- Independent fracture predictor

*Vertebral Fracture Assessment (VFA):*
- Lateral spine imaging with DXA
- Detects vertebral compression fractures
- Many vertebral fractures undiagnosed
- Presence upgrades risk category
- Indicated if: T-score <-1.0 plus risk factors

*High-Resolution pQCT (HR-pQCT):*
- Research tool
- Microstructural analysis
- Separate cortical and trabecular compartments
- Not routine clinical use

**Bone Turnover Markers:**

*Resorption Markers:*
- CTX (C-telopeptide of type I collagen)
- NTX (N-telopeptide)
- Elevated: High turnover, fracture risk, treatment response

*Formation Markers:*
- P1NP (procollagen type 1 N-propeptide)
- Osteocalcin
- Bone-specific alkaline phosphatase

*Clinical Use:*
- Monitor treatment response (3-6 months)
- Assess compliance
- Not for diagnosis
- Significant diurnal/biologic variation

**Treatment Sequencing:**

*Very High Fracture Risk:*
- Consider anabolic-first strategy
- Romosozumab → bisphosphonate
- Teriparatide → bisphosphonate
- Greater BMD gains with anabolic first

*Denosumab Considerations:*
- Cannot "stop" without transition
- Rebound bone loss, vertebral fractures
- Must transition to bisphosphonate
- Usually zoledronic acid after stopping

**Atypical Femur Fractures (AFF):**

*Characteristics:*
- Transverse or short oblique fractures
- Subtrochanteric or femoral shaft
- Minimal/no trauma
- Complete or incomplete (stress reaction)
- Associated with prolonged bisphosphonate use

*Risk:*
- Rare: ~1-5 per 10,000 person-years
- Risk increases with duration
- Asian ancestry higher risk
- Prodromal thigh pain common

*Management:*
- Consider drug holiday after 5 years
- Evaluate thigh pain in patients on bisphosphonates
- Prophylactic fixation for incomplete fractures

**Osteonecrosis of Jaw (ONJ):**

*Risk Factors:*
- Higher doses (oncology setting)
- Dental procedures
- Poor oral hygiene

*Prevention:*
- Dental evaluation before starting
- Complete invasive dental work first
- Risk very low at osteoporosis doses (1:10,000-100,000)

**Fracture Liaison Services (FLS):**

*Model:*
- Systematic identification of fracture patients
- Initiate secondary fracture prevention
- Coordinate follow-up

*Evidence:*
- Reduce secondary fractures by 30-40%
- Improve treatment initiation
- Cost-effective

*Care Gap:*
- <20% of fracture patients receive treatment
- FLS addresses this gap
- Capture-the-Fracture initiative

**Special Populations:**

*Glucocorticoid-Induced Osteoporosis:*
- Bone loss begins within months
- Screen if prednisone ≥2.5 mg/day for ≥3 months
- Lower T-score thresholds for treatment
- Consider oral bisphosphonate prophylaxis

*Premenopausal Women:*
- Z-score, not T-score
- Evaluate secondary causes thoroughly
- Treatment decisions more nuanced

*Men:*
- Same diagnostic criteria
- Check testosterone, secondary causes
- Treatment with bisphosphonates effective`,
      keyTerms: [
        { term: 'trabecular bone score (TBS)', definition: 'DXA-derived measure of bone microarchitecture quality' },
        { term: 'vertebral fracture assessment (VFA)', definition: 'Lateral spine imaging to detect vertebral compression fractures' },
        { term: 'atypical femur fracture', definition: 'Stress fracture of femoral shaft associated with prolonged bisphosphonate use' },
        { term: 'fracture liaison service', definition: 'Coordinated program to identify fracture patients and ensure secondary prevention' },
      ],
      clinicalNotes: 'Use VFA if T-score <-1.0 with risk factors. Consider anabolic-first for very high-risk patients. Never stop denosumab without transition plan. Investigate thigh pain in long-term bisphosphonate users.',
    },
    5: {
      level: 5,
      summary: 'Precision osteoporosis management integrates genetic risk assessment, advanced imaging biomarkers, sequential therapy optimization, and implementation science approaches to address the treatment gap while navigating evolving evidence on drug holidays, anabolic sequencing, and emerging therapies.',
      explanation: `**Precision Medicine in Osteoporosis:**

*Genetic Risk:*
- Polygenic risk scores emerging
- Candidate genes: LRP5, ESR1, RANKL, OPG
- May predict BMD and fracture independent of DXA
- Research phase, not clinical use

*Pharmacogenomics:*
- CYP2C8 variants: Bisphosphonate response (limited evidence)
- VDR polymorphisms: Vitamin D response
- Not yet clinically actionable

**Advanced Imaging Research:**

*MRI-Based:*
- Finite element analysis
- Bone marrow composition
- Predicts bone strength

*Nuclear Medicine:*
- F18-NaF PET: Bone formation activity
- May detect early changes

**Treatment Optimization:**

*Anabolic-First Evidence:*
- VERO: Teriparatide → zoledronic acid superior to risedronate → ZA
- ARCH: Romosozumab → alendronate superior to alendronate alone
- FRAME: Romosozumab → denosumab sustained gains

*Optimal Sequencing:*
1. Anabolic (romosozumab or teriparatide) × 1-2 years
2. Transition to antiresorptive (bisphosphonate or denosumab)
3. Consider consolidation then drug holiday

*Romosozumab Considerations:*
- Sclerostin inhibitor: Builds and prevents bone loss
- CV safety signal in ARCH (MI, stroke)
- Avoid if recent MI/stroke
- Annual course, then transition

**Denosumab Management:**

*Long-Term Data:*
- FREEDOM extension: 10 years effective
- Rare ONJ and AFF, but can occur
- Cannot discontinue without rebound

*Transition After Denosumab:*
- Zoledronic acid at month 6 after last denosumab
- May need multiple infusions
- Monitor bone markers to ensure suppression
- No perfect strategy

**Emerging Therapies:**

*Investigational:*
| Agent | Target | Phase |
|-------|--------|-------|
| Setrusumab | Sclerostin | Phase 2 |
| Cathepsin K inhibitors | Osteoclast | Stopped (odanacatib - CV events) |
| Activin receptor inhibitors | Muscle and bone | Research |

**Implementation Science:**

*Treatment Gap:*
- ~80% of hip fracture patients don't receive treatment
- Barriers: Patient fears, provider inertia, system gaps

*Effective Interventions:*
- Fracture liaison services
- Electronic health record prompts
- Patient education materials
- Provider feedback on rates

**Quality Metrics:**

*Process:*
- DXA screening rate (women ≥65)
- Post-fracture DXA rate
- Treatment initiation post-fracture

*Outcome:*
- Fracture rates
- Hip fracture mortality
- Re-fracture rates

**Cost-Effectiveness:**

*Screening:*
- DXA cost-effective at age ≥65
- Earlier if high-risk
- FRAX helps identify who benefits

*Treatment:*
- Generic bisphosphonates: Highly cost-effective
- Denosumab: Moderate cost-effectiveness
- Anabolics: Less cost-effective but justified in very high-risk

**Falls Prevention:**

*Integral to Fracture Prevention:*
- Exercise programs (tai chi, balance training)
- Home safety assessment
- Vision correction
- Medication review (sedatives, BP meds)
- Vitamin D (reduces fall risk)

**Shared Decision-Making:**

*Discussion Points:*
- Fracture risk (absolute numbers)
- Treatment benefits (relative risk reduction ~50%)
- Rare adverse effects (AFF, ONJ)
- Duration and monitoring
- Lifestyle measures importance

**Research Frontiers:**

1. Gene therapy approaches
2. Stem cell therapies
3. Biomaterial-based local delivery
4. Circulating osteocyte markers
5. AI-based fracture prediction
6. Combination therapy strategies`,
      keyTerms: [
        { term: 'romosozumab', definition: 'Sclerostin inhibitor with dual action: stimulates bone formation and inhibits resorption' },
        { term: 'finite element analysis', definition: 'Engineering technique applied to bone imaging to estimate bone strength' },
        { term: 'VERO trial', definition: 'Trial demonstrating superiority of anabolic-first strategy over bisphosphonate-first' },
        { term: 'sclerostin', definition: 'Protein secreted by osteocytes that inhibits bone formation; target for romosozumab' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Screen all women ≥65, postmenopausal women with risk factors
- Use FRAX with BMD for treatment decisions in osteopenia
- Consider VFA to detect occult vertebral fractures
- Anabolic-first for very high-risk patients
- Never stop denosumab without bisphosphonate transition
- Implement fracture liaison services
- Address treatment gap: Most fracture patients untreated
- Monitor with DXA every 2 years on treatment
- Bone markers can assess early response and compliance
- Integrate fall prevention strategies`,
    },
  },

  media: [
    {
      id: 'dxa-scan-positioning',
      type: 'diagram',
      filename: 'dxa-scan-positioning.svg',
      title: 'DXA Scan Positioning',
      description: 'Illustration of proper patient positioning for DXA scan',
    },
  ],

  citations: [
    {
      id: 'uspstf-osteoporosis-2018',
      type: 'article',
      title: 'Screening for Osteoporosis to Prevent Fractures: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'sibling', label: 'Cancer Screening Overview' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['preventive medicine', 'endocrinology', 'screening', 'rheumatology'],
    keywords: ['osteoporosis', 'bone density', 'DXA', 'FRAX', 'fracture prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
