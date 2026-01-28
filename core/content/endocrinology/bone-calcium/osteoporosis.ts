/**
 * Osteoporosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const osteoporosis: EducationalContent = {
  id: 'condition-osteoporosis',
  type: 'condition',
  name: 'Osteoporosis',
  alternateNames: ['Bone Loss', 'Fragile Bone Disease', 'Low Bone Density'],
  hpoId: 'HP:0000939',

  levels: {
    1: {
      level: 1,
      summary: 'Osteoporosis is a condition where bones become weak and brittle, making them more likely to break from minor falls or injuries.',
      explanation: `Your bones are living tissue that constantly rebuilds itself. Osteoporosis happens when your body loses too much bone, makes too little bone, or both. This makes bones weak and more likely to break.

**Who is at risk:**
- Older adults (especially women after menopause)
- People with family history
- Those who do not get enough calcium or vitamin D
- People who smoke or drink too much alcohol
- Those who are inactive

**Common fracture sites:**
- Hip
- Spine (vertebrae)
- Wrist

**Prevention:**
- Get enough calcium and vitamin D
- Weight-bearing exercise (walking, dancing)
- Do not smoke
- Limit alcohol
- Get bone density tests if at risk

**Treatment:**
- Medications to strengthen bones
- Calcium and vitamin D supplements
- Exercise programs
- Fall prevention strategies`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'A condition where bones become weak and break easily' },
        { term: 'bone density', definition: 'How thick and strong your bones are' },
        { term: 'fracture', definition: 'A broken bone' },
      ],
      analogies: [
        'Healthy bone is like a honeycomb with small holes. Osteoporosis is like the holes getting bigger, making the bone fragile like a dried-out sponge.',
      ],
      examples: [
        'A woman who breaks her wrist from a minor fall at age 65 may have osteoporosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoporosis is reduced bone mass and microarchitectural deterioration causing increased fracture risk. Diagnosed by DXA scan T-score <= -2.5. Treatment includes bisphosphonates, calcium, vitamin D, and fall prevention.',
      explanation: `## Definition and Classification

**Osteoporosis:**
- T-score <= -2.5 on DXA
- Low bone mass and structural deterioration
- Increased fracture risk

**Osteopenia:**
- T-score between -1.0 and -2.5
- Intermediate bone mass
- Risk factor for osteoporosis

**Normal:**
- T-score >= -1.0

## Pathophysiology

**Bone Remodeling:**
- Osteoclasts: Break down bone (resorption)
- Osteoblasts: Build new bone (formation)
- Normal cycle: 3-6 months

**In Osteoporosis:**
- Imbalance favoring resorption
- Trabecular bone loss first
- Cortical bone thinning
- Reduced bone quality, not just quantity

## Risk Factors

**Non-modifiable:**
- Age (older = higher risk)
- Female sex
- Family history
- Caucasian/Asian ethnicity
- History of fracture

**Modifiable:**
- Low calcium/vitamin D intake
- Sedentary lifestyle
- Smoking
- Excessive alcohol
- Low body weight
- Certain medications

## Diagnosis

**DXA Scan:**
- Dual-energy X-ray absorptiometry
- Measures hip and lumbar spine
- T-score compares to young adult
- Z-score compares to age-matched

**Indications for Testing:**
- Women >= 65 years
- Men >= 70 years
- Younger with risk factors
- Fragility fracture
- Long-term glucocorticoid use`,
      keyTerms: [
        { term: 'DXA scan', definition: 'Bone density test using low-dose X-rays' },
        { term: 'T-score', definition: 'Comparison of bone density to young adult average' },
        { term: 'osteoclast', definition: 'Cell that breaks down bone tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis management requires assessment of fracture risk using FRAX, evaluation for secondary causes, and pharmacologic therapy with bisphosphonates as first-line, with careful monitoring for atypical fractures and osteonecrosis of jaw.',
      explanation: `## Fracture Risk Assessment

**FRAX Tool:**
- Calculates 10-year fracture probability
- Inputs: Age, sex, BMI, risk factors, femoral neck BMD
- Treatment thresholds vary by country
- Major fracture (hip, spine, wrist, humerus)

**Secondary Causes to Evaluate:**
- Endocrine: Hyperthyroidism, hyperparathyroidism, Cushing, hypogonadism
- Hematologic: Multiple myeloma, mastocytosis
- GI: Celiac disease, malabsorption, liver disease
- Medications: Glucocorticoids, aromatase inhibitors, ADT, anticonvulsants
- Lifestyle: Smoking, alcohol, low BMI

## Pharmacologic Treatment

**First-Line (Bisphosphonates):**
| Drug | Dosing | Notes |
|------|--------|-------|
| Alendronate | 70mg weekly oral | Take on empty stomach, remain upright 30 min |
| Risedronate | 35mg weekly oral | Better GI tolerability |
| Zoledronic acid | 5mg yearly IV | For adherence issues, renal dosing |
| Ibandronate | 150mg monthly | Also FDA-approved for prevention |

**Mechanism:**
- Inhibit osteoclast-mediated bone resorption
- Bind to bone hydroxyapatite
- Released during acidification

**Second-Line Agents:**
- Denosumab: RANKL antibody, 60mg q6 months SQ
- Teriparatide: PTH analog, anabolic, daily injection
- Romosozumab: Sclerostin inhibitor, monthly SQ
- Raloxifene: SERM, for postmenopausal women

## Adverse Effects

**Bisphosphonates:**
- GI upset, esophagitis
- Atypical femur fracture (rare, with long-term use)
- Osteonecrosis of jaw (rare, mainly with IV)
- Hypocalcemia (especially with zoledronic acid)

**Denosumab:**
- Must not miss doses (rebound fractures)
- Skin infections
- Hypocalcemia risk

**Drug Holidays:**
- Consider after 3-5 years oral, 3 years IV
- Reassess fracture risk
- Restart if risk remains high`,
      keyTerms: [
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool' },
        { term: 'denosumab', definition: 'Monoclonal antibody against RANKL' },
        { term: 'atypical femur fracture', definition: 'Transverse fracture of femoral shaft associated with bisphosphonates' },
      ],
      clinicalNotes: 'Always ensure calcium and vitamin D repletion before starting osteoporosis medications, especially denosumab which can cause severe hypocalcemia.',
    },
    4: {
      level: 4,
      summary: 'Advanced osteoporosis management includes sequential therapy with anabolic agents followed by antiresorptives, management of glucocorticoid-induced osteoporosis, vertebral augmentation procedures, and addressing falls risk with multidisciplinary approach.',
      explanation: `## Sequential Therapy

**Anabolic-First Strategy:**
- Start with teriparatide or romosozumab (1-2 years)
- Follow with antiresorptive (bisphosphonate or denosumab)
- Maximizes bone density gains
- Prevents rapid bone loss after anabolic

**Teriparatide Considerations:**
- Daily subcutaneous injection
- Maximum 2 years lifetime (osteosarcoma risk in rats)
- Excellent for severe osteoporosis
- Contraindicated with skeletal metastases

**Romosozumab:**
- Dual action: Increases formation, decreases resorption
- Monthly injection
- Only 12 months approved
- Cardiovascular safety warning

## Glucocorticoid-Induced Osteoporosis

**Highest Risk:**
- Prednisone >= 7.5mg daily for >= 3 months
- Rapid bone loss in first 6 months
- Trabecular bone predominantly affected

**Management:**
| Risk | Management |
|------|------------|
| Moderate-high | Start bisphosphonate when GC started |
| Low | Calcium, vitamin D, monitoring |
| Post-menopausal women | Usually treat prophylactically |

**Bone Loss Prevention:**
- Use lowest effective GC dose
- Alternative GC-sparing agents when possible
- Early osteoporosis treatment

## Vertebral Fractures

**Clinical Presentation:**
- Acute back pain
- Height loss
- Kyphosis
- May be asymptomatic (2/3)

**Management:**
- Pain control (avoid chronic opioids)
- Bracing
- Vertebroplasty/kyphoplasty (selected cases)
- Continue osteoporosis treatment

**Vertebral Augmentation:**
- Consider for persistent pain
- Contraindicated: Infection, coagulopathy
- Benefits: Rapid pain relief, height restoration
- Risks: Cement leakage, adjacent fractures

## Fall Prevention

**Multifactorial Approach:**
- Vision assessment
- Medication review (sedatives, antihypertensives)
- Home safety evaluation
- Gait and balance training
- Strength exercises
- Hip protectors (selected patients)`,
      keyTerms: [
        { term: 'romosozumab', definition: 'Sclerostin inhibitor with dual anabolic and antiresorptive effects' },
        { term: 'vertebroplasty', definition: 'Injection of cement into fractured vertebra' },
        { term: 'sequential therapy', definition: 'Using anabolic agent followed by antiresorptive' },
      ],
      clinicalNotes: 'Never use antiresorptive (bisphosphonate or denosumab) immediately after stopping teriparatide without overlap - the rapid bone loss can cause fractures.',
    },
    5: {
      level: 5,
      summary: 'Contemporary osteoporosis care integrates bone turnover markers for treatment monitoring, trabecular bone score for quality assessment, and emerging therapies targeting Wnt signaling and cathepsin K while addressing personalized fracture risk prediction.',
      explanation: `## Bone Turnover Markers

**Formation Markers:**
- P1NP (procollagen type 1 N-propeptide)
- BAP (bone alkaline phosphatase)
- Preferred for monitoring anabolic therapy

**Resorption Markers:**
- CTX (C-terminal telopeptide)
- NTX (N-terminal telopeptide)
- Preferred for monitoring antiresorptive therapy

**Clinical Use:**
- Assess treatment response
- Identify poor adherence
- Optimal timing: Morning, fasting, consistent time between tests
- Reference ranges vary by lab

## Advanced Assessment

**Trabecular Bone Score (TBS):**
- Texture analysis from DXA images
- Reflects bone microarchitecture
- Adjusts FRAX risk
- Independent predictor of fracture

**Finite Element Analysis:**
- Computer modeling of bone strength
- Better predictor than BMD alone
- Not widely available

**QCT (Quantitative CT):**
- Volumetric BMD
- Separates cortical and trabecular bone
- Higher radiation than DXA

## Emerging Therapies

**Odanacatib:**
- Cathepsin K inhibitor
- Selective inhibition of bone resorption
- Development halted due to stroke risk

**Blosozumab:**
- Anti-sclerostin antibody
- Similar to romosozumab
- Development discontinued

**Wnt Pathway Modulators:**
- Understanding of LRP5/6 signaling
- Potential new targets

**Gene Therapy:**
- Early research
- Targeting osteoblast/osteoclast differentiation

## Personalized Medicine

**Pharmacogenomics:**
- Vitamin D receptor polymorphisms
- Collagen type 1 alpha 1 (COL1A1) polymorphisms
- Not yet clinically actionable

**Risk Stratification:**
- Machine learning models
- Integration of multiple risk factors
- Improved prediction vs FRAX alone

## Future Directions

- Improved adherence strategies
- Longer-acting anabolic agents
- Tissue engineering for bone repair
- Microbiome-bone axis understanding
- Fracture liaison services expansion`,
      keyTerms: [
        { term: 'trabecular bone score', definition: 'Texture-based assessment of bone microarchitecture from DXA' },
        { term: 'P1NP', definition: 'Procollagen type 1 N-propeptide; bone formation marker' },
        { term: 'CTX', definition: 'C-terminal telopeptide; bone resorption marker' },
      ],
      clinicalNotes: 'Bone turnover markers can identify patients with poor adherence to oral bisphosphonates - useful when response to therapy is suboptimal.',
    },
  },

  media: [],
  citations: [
    {
      id: 'nof-guidelines-2014',
      type: 'article',
      title: 'Clinician\'s Guide to Prevention and Treatment of Osteoporosis',
      source: 'National Osteoporosis Foundation',
      authors: ['Cosman F', 'de Beur SJ', 'LeBoff MS', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-hyperparathyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperparathyroidism' },
    { targetId: 'condition-vitamin-d-disorders', targetType: 'condition', relationship: 'related', label: 'Vitamin D Disorders' },
  ],
  tags: {
    systems: ['endocrine', 'musculoskeletal'],
    topics: ['endocrinology', 'geriatrics'],
    keywords: ['osteoporosis', 'bone density', 'fracture', 'bisphosphonate', 'DXA'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'geriatrics', 'family medicine'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoporosis;
