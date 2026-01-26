/**
 * Osteoporosis Screening Guidelines
 *
 * Comprehensive osteoporosis screening recommendations based on USPSTF
 * guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const OSTEOPOROSIS_SCREENING: EducationalContent = {
  id: 'concept-osteoporosis-screening',
  type: 'concept',
  name: 'Osteoporosis Screening Guidelines',
  alternateNames: ['Bone density screening', 'DEXA screening', 'Bone health screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteoporosis screening checks bone strength to find thinning bones before fractures happen.',
      explanation: `Osteoporosis means bones have become weak and brittle. Screening finds bone loss early so treatment can prevent fractures.

**What is Osteoporosis:**
- "Osteo" = bone, "porosis" = full of holes
- Bones become less dense
- More likely to break from minor falls
- Common in older adults, especially women

**Screening Test: DEXA Scan**
- DEXA = Dual-energy X-ray absorptiometry
- Special X-ray that measures bone density
- Quick, painless, low radiation
- Usually checks hip and spine

**Who Should Be Screened:**

**Women:**
- Age 65 and older
- Younger women with risk factors

**Men:**
- Age 70 and older
- Younger men with risk factors

**Risk Factors for Earlier Screening:**
- Broken bone after age 50
- Family history of osteoporosis
- Low body weight
- Smoking
- Long-term steroid use
- Rheumatoid arthritis
- Early menopause

**How Often:**
- Every 2 years (may vary)
- More often if treating osteoporosis

**What the Results Mean:**
- Normal: Bone density is normal for your age
- Low bone mass (osteopenia): Some bone loss
- Osteoporosis: Significant bone loss, higher fracture risk`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'Condition where bones become weak and brittle' },
        { term: 'osteopenia', definition: 'Mild bone loss; not as severe as osteoporosis' },
        { term: 'DEXA scan', definition: 'Special X-ray test that measures bone density' },
        { term: 'bone density', definition: 'How much mineral is in bones; measure of bone strength' },
        { term: 'fracture', definition: 'Broken bone' },
      ],
      analogies: [
        'Bones are like a savings account - you build up density when young, then withdraw in older age. Osteoporosis is when you withdraw too much.',
        'Think of bone density like a sponge - osteoporotic bone has more holes and less material.',
      ],
      examples: [
        'Maria had a DEXA scan at age 65. It showed osteopenia. Calcium, vitamin D, and weight-bearing exercise helped prevent further bone loss.',
        'After a wrist fracture at age 55, John had a bone density test that revealed osteoporosis. Treatment prevented further fractures.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bone density measurement using DEXA scans identifies osteoporosis and osteopenia, with screening recommendations based on age, sex, and risk factors to prevent fragility fractures.',
      explanation: `**Screening Recommendations:**

*Women (USPSTF):*
- Age 65+: Routine screening (Grade B)
- Age 50-64: Individual decision based on risk factors (Grade B for high risk)

*Men:*
- Age 70+: Routine screening
- Age 50-69: Individual decision based on risk factors
- No formal USPSTF recommendation for men

*Risk Factors Warranting Earlier Screening:*

**Personal History:**
- Previous fracture as adult (especially after age 50)
- Height loss >1.5 inches (4 cm)
- Thyroid medication use

**Family History:**
- Parent with hip fracture

**Medications:**
- Glucocorticoids (≥3 months)
- Aromatase inhibitors
- Androgen deprivation therapy
- Antiseizure medications
- Proton pump inhibitors (long-term)

**Medical Conditions:**
- Rheumatoid arthritis
- Diabetes type 1 or 2
- Hyperthyroidism
- Celiac disease
- COPD
- CKD

**Lifestyle:**
- Smoking
- Alcohol >2 drinks/day
- Low calcium intake
- Sedentary lifestyle
- Low body weight (<127 lbs or BMI <21)

**DEXA Scan:**
- Measures bone mineral density (BMD)
- Reports T-score (compares to young adult) and Z-score (compares to age-matched)
- Sites: Lumbar spine, hip, sometimes forearm
- Takes 10-15 minutes

**T-score Interpretation:**
| T-score | Classification |
|---------|----------------|
| ≥ -1.0 | Normal |
| -1.1 to -2.4 | Osteopenia (low bone mass) |
| ≤ -2.5 | Osteoporosis |

**Screening Interval:**
- Every 2 years for most
- May extend to 3-5 years if normal and stable
- More frequent if treating osteoporosis or on high-risk medications`,
      keyTerms: [
        { term: 'fragility fracture', definition: 'Broken bone from minor trauma that would not normally cause fracture' },
        { term: 'T-score', definition: 'Bone density comparison to healthy young adult' },
        { term: 'Z-score', definition: 'Bone density comparison to age-matched individuals' },
        { term: 'BMD', definition: 'Bone mineral density; amount of mineral in bone tissue' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis screening integrates DEXA measurement with FRAX risk assessment, vertebral fracture evaluation, and secondary causes to guide treatment decisions and fracture prevention strategies.',
      explanation: `**FRAX Assessment:**

*What is FRAX:*
- Online tool estimating 10-year fracture risk
- Accounts for clinical risk factors ± BMD
- Ages 40-90 (not validated for younger)
- Country-specific algorithms

*FRAX Inputs:*
- Age, sex, weight, height
- Previous fracture
- Parent fractured hip
- Current smoking
- Glucocorticoids
- Rheumatoid arthritis
- Secondary osteoporosis
- Alcohol ≥3 drinks/day
- BMD (femoral neck) if available

*Treatment Thresholds:*
- Varies by country
- US: 20% 10-year major osteoporotic fracture OR 3% hip fracture (guidance)

**Vertebral Fracture Assessment:**
- Vertebral fractures often asymptomatic
- Height loss, kyphosis may indicate
- Can be assessed on DEXA (VFA) or spine imaging
- Presence changes management

**Secondary Causes Evaluation:**

*Laboratory Workup:*
- CBC
- CMP (calcium, kidney function)
- 25-hydroxyvitamin D
- TSH
- PTH if calcium abnormal
- Serum protein electrophoresis (myeloma)
- 24-hour urine calcium
- Testosterone (men)

*Common Secondary Causes:*
- Hyperparathyroidism
- Vitamin D deficiency
- Hyperthyroidism
- Celiac disease
- Multiple myeloma
- Cushing syndrome
- Hypogonadism

**Special Populations:**

*Glucocorticoid-Induced:*
- Screen at start of long-term therapy
- Rescreen if on ≥3 months
- Higher risk than postmenopausal osteoporosis

*Breast Cancer Survivors:*
- Aromatase inhibitors accelerate bone loss
- Baseline DEXA, monitor annually
- Aromatase inhibitors: Anastrozole, letrozole, exemestane

*Prostate Cancer:*
- Androgen deprivation therapy causes bone loss
- Baseline DEXA, monitor

**Treatment Considerations:**
- T-score ≤ -2.5: Treat
- T-score -1.0 to -2.5 + fragility fracture: Treat
- T-score -1.0 to -2.5 + high FRAX: Consider treatment`,
      keyTerms: [
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; estimates 10-year fracture probability' },
        { term: 'kyphosis', definition: 'Forward curvature of spine; can indicate vertebral fractures' },
        { term: 'VFA', definition: 'Vertebral fracture assessment; imaging on DEXA to detect spine fractures' },
        { term: 'aromatase inhibitor', definition: 'Medication that blocks estrogen, used in breast cancer, causes bone loss' },
      ],
      analogies: [],
      clinicalNotes: 'Use FRAX for borderline cases. Check vitamin D in all. Evaluate secondary causes. Treat after fragility fracture regardless of BMD.',
    },
    4: {
      level: 4,
      summary: 'Advanced osteoporosis screening incorporates trabecular bone score, high-resolution imaging, biochemical markers, and management of treatment effects while addressing emerging therapies and screening controversies.',
      explanation: `**Advanced Imaging Techniques:**

*Trabecular Bone Score (TBS):*
- Texture analysis of lumbar spine DEXA
- Assesses microarchitecture independent of BMD
- TBS <1.23 indicates degraded microarchitecture
- Refines fracture risk prediction when added to FRAX
- Particularly useful in diabetes (BMD overestimates strength)

*High-Resolution Peripheral Quantitative CT:*
- Assesses trabecular and cortical microarchitecture
- Research use currently
- May predict fracture risk beyond BMD

**Biochemical Markers of Turnover:**

*Formation Markers:*
- P1NP (procollagen type 1 N-terminal propeptide)
- Bone-specific alkaline phosphatase

*Resorption Markers:*
- CTX (C-terminal telopeptide)
- NTX (N-terminal telopeptide)

*Clinical Use:*
- Monitor treatment response (changes in 3-6 months)
- Assess adherence (anti-resorptives decrease markers)
- Predict fracture risk (higher markers = higher risk)

**Treatment Monitoring:**

*Anti-Resorptives (Bisphosphonates, Denosumab):*
- Check markers after 3-6 months
- Should see decrease in resorption markers
- Repeat DEXA every 1-3 years

*Anabolic Agents (Teriparatide, Abaloparatide, Romosozumab):*
- Markers increase early (formation first)
- DEXA at 12-18 months
- Significant BMD gains

**Special Situations:**

*Atypical Femur Fractures:*
- Rare complication of long-term bisphosphonates
- Prodromal thigh/groin pain
- X-ray findings: Lateral cortical thickening, transverse fracture line
- Consider drug holiday after 3-5 years if low risk

*Osteonecrosis of Jaw:*
- Rare, mostly in cancer patients on high-dose bisphosphonates
- Dental exams before starting therapy
- Oral surgery precautions

*Diabetes:*
- Both type 1 and 2 increase fracture risk
- BMD overestimates bone strength
- Use TBS for risk refinement
- More aggressive screening

**Emerging Therapies:**
- Romosozumab (sclerostin inhibitor)
- Abaloparatide (PTH-related peptide analog)
- Sequential therapy (anabolic then anti-resorptive)`,
      keyTerms: [
        { term: 'TBS', definition: 'Trabecular bone score; assesses bone microarchitecture from DEXA images' },
        { term: 'P1NP', definition: 'Procollagen type 1 N-terminal propeptide; bone formation marker' },
        { term: 'CTX', definition: 'C-terminal telopeptide; bone resorption marker' },
        { term: 'atypical femur fracture', definition: 'Rare fracture pattern associated with long-term bisphosphonate use' },
        { term: 'sclerostin inhibitor', definition: 'Anabolic agent that blocks sclerostin to increase bone formation' },
      ],
      analogies: [],
      clinicalNotes: 'Consider drug holiday after 3-5 years bisphosphonates in low-risk. Use TBS in diabetes. Monitor markers for treatment response. Evaluate unusual pain.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bone health assessment integrates genetic risk factors, novel biomarkers, AI-enhanced imaging analysis, and precision treatment approaches while addressing global burden and implementation challenges.',
      explanation: `**Precision Medicine in Bone Health:**

*Genetic Risk:*
- Polygenic risk scores for osteoporosis
- LRP5, Wnt signaling pathway variants
- Genomewide association studies (GWAS) identified >500 loci
- Family history remains strong predictor

*Biomarker Evolution:*
- MicroRNAs as fracture predictors
- Sclerostin levels
- Osteocyte-derived proteins
- Proteomic signatures

*Multi-omic Integration:*
- Genomic + transcriptomic + proteomic
- Machine learning fracture prediction
- Beyond BMD risk assessment

**Artificial Intelligence Applications:**

*Imaging Analysis:*
- Automated vertebral fracture detection on CT/DXA
- Opportunistic screening (abdominal CT for BMD)
- Hip shape analysis for fracture risk
- Deep learning for BMD prediction from plain X-rays

*Predictive Analytics:*
- EHR-based fracture risk models
- Falls risk prediction
- Medication impact assessment
- Real-time risk updates

**Screening Controversies:**

*Overdiagnosis Concerns:*
- Treating mild osteopenia
- Limited absolute benefit in low-risk
- Medication side effects
- Natural history uncertainty

*Screening Intervals:*
- Extending intervals for low-risk
- Individualized based on rate of change
- Online calculators for repeat DEXA timing

*Age to Stop Screening:*
- Life expectancy considerations
- Treatment futility in very old
- Patient preference emphasis

**Global Burden & Strategies:**

*Worldwide Impact:*
- 1 in 3 women, 1 in 5 men over 50 will fracture
- Hip fracture mortality: 20-30% in first year
- Disability from vertebral fractures

*Resource-Limited Settings:*
- Portable DEXA devices
- Ultrasound-based screening (heel, phalanx)
- Risk factor-based screening
- Fracture liaison services

**Future Directions:**

*Novel Targets:*
- Cathepsin K inhibitors
- DKK1 inhibitors
- Src kinase inhibitors
- Combination therapies

*Anabolic Evolution:*
- Longer-acting PTH analogs
- Dual-acting agents
- Gene therapy approaches

*Screening Innovation:*
- Point-of-care testing
- Wearable technology for falls
- Home-based risk assessment
- Telemedicine bone health

**Implementation Science:**

*Fracture Liaison Services:*
- Coordinating post-fracture care
- Treatment initiation improves from ~20% to >60%
- Cost-effective model
- Reduces recurrent fractures

*Addressing Disparities:*
- Men under-screened and under-treated
- Racial differences in BMD and fracture risk
- Socioeconomic barriers to DEXA
- Cultural considerations in treatment acceptance

*Quality Improvement:*
- DEXA quality assurance programs
- Standardization of reporting
- Integration with primary care
- Patient education optimization`,
      keyTerms: [
        { term: 'opportunistic screening', definition: 'Using imaging done for other purposes to assess BMD or fracture risk' },
        { term: 'fracture liaison service', definition: 'Coordinated care program to evaluate and treat patients after fracture' },
        { term: 'Wnt signaling', definition: 'Pathway regulating bone formation; target of novel osteoporosis drugs' },
        { term: 'GWAS', definition: 'Genome-wide association study; method for identifying genetic variants associated with disease' },
      ],
      analogies: [],
      clinicalNotes: 'Implement fracture liaison services. Consider AI for vertebral fracture detection. Use risk-based screening intervals. Address under-treatment in men. Individualize based on comorbidities and life expectancy.',
    },
  },

  media: [
    {
      id: 'osteoporosis-screening-algorithm',
      type: 'diagram',
      filename: 'osteoporosis-screening-algorithm.svg',
      title: 'Osteoporosis Screening Algorithm',
      description: 'Visual algorithm for bone density screening and management',
    },
  ],

  citations: [
    {
      id: 'uspstf-osteoporosis',
      type: 'website',
      title: 'Osteoporosis Screening to Prevent Fractures',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening-prevent-fractures',
      accessedDate: '2025-01-25',
    },
    {
      id: 'nof-guidelines',
      type: 'website',
      title: 'Clinician\'s Guide to Prevention and Treatment of Osteoporosis',
      source: 'National Osteoporosis Foundation',
      url: 'https://www.bonehealthandosteoporosis.org/guidelines/',
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-exercise-prevention', targetType: 'concept', relationship: 'related', label: 'Exercise for Bone Health' },
    { targetId: 'concept-nutrition-prevention', targetType: 'concept', relationship: 'related', label: 'Nutrition for Bone Health' },
  ],

  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['preventive medicine', 'rheumatology', 'endocrinology', 'bone health'],
    keywords: ['osteoporosis', 'bone density', 'DEXA', 'FRAX', 'fracture prevention', 'T-score'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'endocrinology'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
