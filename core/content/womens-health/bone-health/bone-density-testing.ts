import { LegacyWomensHealthContent } from '../types';

export const boneDensityTesting: LegacyWomensHealthContent = {
  id: 'concept-bone-density-testing',
  type: 'concept',
  name: 'Bone Density Testing',
  alternateNames: ['DEXA scan', 'DXA scan', 'Bone mineral density test'],

  levels: {
    1: {
      level: 1,
      summary: 'A bone density test is a quick, painless scan that measures how strong your bones are and helps determine if you\'re at risk for fractures.',
      explanation: `**What is a Bone Density Test?**
A bone density test uses low-dose X-rays to measure how much calcium and other minerals are in your bones. The most common type is called a DEXA scan.

**Why Get Tested:**
- Find out if you have osteoporosis (weak bones)
- Predict your risk of breaking a bone
- See if treatment for bone loss is working

**Who Should Get Tested:**
- All women age 65 and older
- Younger women with risk factors for bone loss
- Anyone who has broken a bone from a minor injury

**What to Expect:**
- Takes about 10-20 minutes
- You lie on a padded table
- A scanner passes over your hip and spine
- No injections, no pain
- You can eat and take medications normally

**Understanding Results:**
- **T-score:** Compares your bones to a young healthy adult
  - Normal: -1.0 or above
  - Low bone mass (osteopenia): -1.0 to -2.5
  - Osteoporosis: -2.5 or below

**After the Test:**
- Your doctor will explain your results
- You may need to take steps to protect your bones
- Follow-up testing may be recommended`,
      keyTerms: [
        { term: 'DEXA scan', definition: 'Dual-energy X-ray absorptiometry - the test used to measure bone density' },
        { term: 'T-score', definition: 'A number that shows how your bone density compares to a young healthy adult' },
        { term: 'osteopenia', definition: 'Bone density lower than normal but not yet osteoporosis' },
      ],
      analogies: ['Think of a bone density test like checking the thickness of your walls - it tells you if your bones have enough material to stay strong.'],
      examples: ['Getting your first bone density test at age 65', 'Repeating the test after 2 years of treatment to see if your bones are stronger'],
    },
    2: {
      level: 2,
      summary: 'DEXA scanning provides standardized bone mineral density measurements used to diagnose osteoporosis, assess fracture risk, and monitor treatment response.',
      explanation: `**DEXA Technology:**
- Uses two X-ray beams of different energies
- Differentiates bone from soft tissue
- Measures bone mineral content and area
- Calculates bone mineral density (BMD) in g/cm2

**Standard Measurement Sites:**
- Lumbar spine (L1-L4)
- Total hip
- Femoral neck
- Forearm (if hip/spine not usable)

**Interpreting Scores:**

*T-Score:*
- Standard deviations from young adult mean
- Used for postmenopausal women and men ≥50
- WHO diagnostic criteria based on T-score

*Z-Score:*
- Standard deviations from age-matched mean
- Used for premenopausal women and younger men
- Z-score ≤-2.0 suggests secondary cause

**Screening Recommendations:**

*USPSTF:*
- Women ≥65: Routine screening
- Postmenopausal women <65: Screen if 10-year fracture risk ≥9.3%
- Men: No routine screening recommendation (consider at 70+)

**Factors Affecting Accuracy:**
- Degenerative changes in spine (falsely elevate)
- Vertebral fractures
- Scoliosis
- Prior surgeries
- Vascular calcifications

**Follow-up Testing:**
- Every 1-2 years on treatment
- Precision error of machine affects interpretation
- Least significant change (LSC) determines real change`,
      keyTerms: [
        { term: 'BMD', definition: 'Bone mineral density; amount of mineral per unit area of bone' },
        { term: 'Z-score', definition: 'BMD compared to age-matched population; used in premenopausal women' },
        { term: 'least significant change', definition: 'Minimum change in BMD that represents real biological change beyond measurement error' },
        { term: 'femoral neck', definition: 'Site on hip commonly measured; best predictor of hip fracture' },
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical application of bone densitometry requires understanding of quality assurance, integration with fracture risk assessment, appropriate screening intervals, and limitations of the technology.',
      explanation: `**Quality Assurance:**

*Machine Calibration:*
- Daily phantom scanning
- Cross-calibration between machines
- Quality control essential for monitoring

*Patient Positioning:*
- Standardized protocols
- Reproducible positioning
- Affects precision

*Precision Assessment:*
- Each facility should know their precision error
- Calculated from repeat scans
- Determines LSC (typically 3-5% for spine, 4-6% for hip)

**FRAX Integration:**

*When to Use:*
- Postmenopausal women
- Men ≥50
- Untreated patients
- Clinical risk factors considered

*Components:*
- Age, sex, BMI
- Prior fracture
- Parental hip fracture
- Current smoking
- Glucocorticoids
- Rheumatoid arthritis
- Secondary osteoporosis
- Alcohol ≥3 drinks/day
- Femoral neck BMD (optional)

*Treatment Thresholds:*
- 10-year hip fracture risk ≥3%
- 10-year major osteoporotic fracture risk ≥20%

**Monitoring Intervals:**

*Initial Screening:*
- Repeat in 1-2 years if osteopenia
- Repeat sooner if high-risk
- Normal BMD: Repeat in 5-10 years

*On Treatment:*
- Repeat every 1-2 years
- Expect ~3-5% increase first year with potent therapy
- Stable BMD indicates response

**Limitations:**

*Spine:*
- Degenerative changes increase apparent BMD
- Vertebral fractures may be missed
- Use lateral spine imaging when available

*Hip:*
- Arthritis, metal affect measurement
- Femoral neck vs. total hip interpretation

**Vertebral Fracture Assessment:**
- Lateral spine imaging on DEXA
- Identifies prevalent vertebral fractures
- Many vertebral fractures undiagnosed
- Consider in elderly, height loss, kyphosis`,
      keyTerms: [
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; calculates 10-year probability of fractures' },
        { term: 'VFA', definition: 'Vertebral Fracture Assessment; lateral spine imaging during DEXA' },
        { term: 'phantom', definition: 'Calibration device scanned daily to ensure DEXA accuracy' },
        { term: 'TBS', definition: 'Trabecular bone score; texture analysis that may improve fracture prediction' },
      ],
      clinicalNotes: 'Use the same DEXA machine for monitoring when possible. A T-score change of less than the LSC may not represent real change. VFA should be considered in patients with height loss >4 cm or risk factors for vertebral fracture.',
    },
    4: {
      level: 4,
      summary: 'Advanced bone densitometry practice involves understanding emerging technologies, managing discordant results, interpreting special situations, and integrating BMD with comprehensive fracture risk assessment.',
      explanation: `**Advanced DEXA Interpretation:**

*Discordant Results:*
- Different T-scores at spine and hip
- Use lowest T-score for diagnosis
- Consider site-specific pathology
- Clinical decision based on overall assessment

*Spine Artifacts:*
- Exclude fractured or abnormal vertebrae
- Document excluded levels
- Use lateral spine view when available
- Consider hip-only if spine unreliable

*Hip Analysis:*
- Total hip most reproducible
- Femoral neck best fracture predictor
- Ward's area not for diagnosis
- Use lower of femoral neck or total hip

**Trabecular Bone Score (TBS):**
- Texture analysis of spine DEXA
- Reflects trabecular microarchitecture
- Independent fracture predictor
- Especially useful in diabetes, glucocorticoids

**Beyond DEXA:**

*Quantitative CT (QCT):*
- True volumetric BMD
- Distinguishes trabecular/cortical
- Not affected by degenerative changes
- Higher radiation, cost

*HR-pQCT:*
- High-resolution peripheral QCT
- Assesses bone microstructure
- Research tool, emerging clinical use

*Bone Turnover Markers:*
- CTX (resorption)
- P1NP (formation)
- Monitor treatment response
- Faster feedback than DEXA (months vs. years)

**Special Populations:**

*Premenopausal Women:*
- Use Z-score
- Z-score ≤-2.0 concerning
- Evaluate for secondary causes
- Don't diagnose osteoporosis by BMD alone

*Men:*
- Same T-score criteria as women (controversial)
- Higher absolute fracture risk at same BMD
- Consider starting screening at 70

*Chronic Kidney Disease:*
- DEXA valid for fracture prediction
- Renal osteodystrophy complicates interpretation
- Bone biopsy may be needed

*Diabetes:*
- Higher fracture risk at any BMD
- Bone quality impaired
- TBS may help assess risk`,
      keyTerms: [
        { term: 'discordant T-scores', definition: 'Different diagnostic categories at different skeletal sites' },
        { term: 'QCT', definition: 'Quantitative computed tomography; volumetric bone density measurement' },
        { term: 'CTX', definition: 'C-terminal telopeptide; marker of bone resorption' },
        { term: 'P1NP', definition: 'Procollagen type 1 N-propeptide; marker of bone formation' },
      ],
      clinicalNotes: 'TBS is now incorporated into FRAX for improved risk prediction. Bone turnover markers can show treatment response in 3-6 months, faster than DEXA. In diabetes, fracture risk is underestimated by DEXA alone.',
    },
    5: {
      level: 5,
      summary: 'Expert bone densitometry involves quality improvement in screening programs, addressing disparities in osteoporosis care, understanding evolving technology, and integration into comprehensive bone health management.',
      explanation: `**Quality Improvement:**

*Screening Rates:*
- Only 20-30% of eligible women screened
- Lower in minorities, uninsured
- Opportunity to improve with system interventions

*Post-Fracture Care:*
- Less than 20% of fracture patients get DEXA
- Fracture liaison services improve care
- Care gap is major quality issue

*Program Development:*
- EHR-based screening reminders
- Patient outreach programs
- Tracking and feedback
- Quality metrics for providers

**Disparities:**

*Documented Inequities:*
- Lower screening rates in Black, Hispanic women
- Lower treatment rates after fracture
- Geographic variation
- Insurance coverage gaps

*Addressing Disparities:*
- Community-based screening
- Mobile DEXA units
- Insurance coverage advocacy
- Provider education

**Evolving Technology:**

*Opportunistic CT:*
- Using CT scans done for other reasons
- Automated bone assessment
- No additional radiation
- May improve identification

*AI/Machine Learning:*
- Automated fracture detection
- Risk prediction algorithms
- Quality assurance
- Emerging applications

**Comprehensive Bone Health:**

*Beyond BMD:*
- Fall risk assessment
- Medication review
- Nutrition evaluation
- Exercise recommendations

*Multidisciplinary Care:*
- Endocrinology
- Rheumatology
- Geriatrics
- Physical therapy
- Pharmacy

**Future Directions:**

*Personalized Risk:*
- Genetic risk scores
- Microstructural imaging
- Bone quality measures
- Tailored interventions

*Universal Screening:*
- Debate on expanding indications
- Cost-effectiveness analyses
- Balance benefits and harms

**Patient Communication:**

*Explaining Results:*
- Avoid jargon
- Use visual aids
- Explain treatment implications
- Address anxiety

*Shared Decision-Making:*
- Discuss screening interval
- Treatment decisions
- Lifestyle modifications
- Document preferences`,
      keyTerms: [
        { term: 'fracture liaison service', definition: 'Program ensuring fracture patients receive osteoporosis evaluation and treatment' },
        { term: 'opportunistic screening', definition: 'Using existing imaging studies to assess bone health' },
        { term: 'care gap', definition: 'Difference between recommended and actual care delivery' },
        { term: 'AI imaging', definition: 'Artificial intelligence applied to medical image interpretation' },
      ],
      clinicalNotes: 'Post-fracture care represents the greatest care gap in osteoporosis. Implementing fracture liaison services reduces refracture rates by 30-40%. Opportunistic CT screening may dramatically increase case finding without additional radiation.',
    }
  },
  media: [],
  citations: [
    {
      id: 'iscd-official-positions',
      type: 'article',
      title: 'ISCD Official Positions',
      source: 'International Society for Clinical Densitometry',
      url: 'https://iscd.org/learn/official-positions/',
      license: 'Copyright ISCD',
    },
    {
      id: 'uspstf-osteoporosis-2018',
      type: 'article',
      title: 'USPSTF Recommendation Statement: Osteoporosis Screening',
      source: 'US Preventive Services Task Force',
      license: 'Public domain',
    }
  ],
  crossReferences: [
    { targetId: 'concept-osteoporosis-prevention', targetType: 'concept', relationship: 'related', label: 'Osteoporosis Prevention' },
    { targetId: 'concept-calcium-vitamin-d', targetType: 'concept', relationship: 'related', label: 'Calcium and Vitamin D' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['womens-health', 'patient-education', 'screening', 'bone-health'],
    keywords: ['DEXA', 'bone density', 'T-score', 'osteoporosis screening', 'FRAX'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
