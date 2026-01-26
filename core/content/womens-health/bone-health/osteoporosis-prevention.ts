import { LegacyWomensHealthContent } from '../types';

export const osteoporosisPrevention: LegacyWomensHealthContent = {
  id: 'concept-osteoporosis-prevention',
  type: 'concept',
  name: 'Osteoporosis Prevention',
  alternateNames: ['Bone loss prevention', 'Bone health', 'Fragile bones prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteoporosis makes bones weak and more likely to break. You can prevent it by getting enough calcium and vitamin D, exercising, and avoiding smoking.',
      explanation: `**What is Osteoporosis?**
Osteoporosis means "porous bones." Your bones become thin and weak, making them more likely to break from minor falls or even coughing.

**Why Women Are at Higher Risk:**
- Women have smaller, thinner bones than men
- Estrogen protects bones - levels drop after menopause
- Bone loss speeds up after menopause

**Prevention Strategies:**

*Build Strong Bones When Young:*
- Peak bone mass reached by age 30
- Healthy habits in teens and 20s matter

*Get Enough Calcium:*
- Ages 19-50: 1,000 mg daily
- Over 50: 1,200 mg daily
- Food sources: Dairy, leafy greens, fortified foods

*Get Enough Vitamin D:*
- Helps body absorb calcium
- Sunlight exposure
- Supplements if needed (600-800 IU daily)

*Exercise:*
- Weight-bearing exercise (walking, dancing, climbing stairs)
- Resistance training (weights, bands)
- Balance exercises to prevent falls

*Avoid Bone-Harming Habits:*
- Don't smoke
- Limit alcohol
- Limit caffeine`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'A disease where bones become weak and brittle' },
        { term: 'bone density', definition: 'How strong and solid your bones are' },
        { term: 'weight-bearing exercise', definition: 'Exercise where you support your body weight, like walking' },
      ],
      analogies: ['Think of bones like a bank account - you need to deposit calcium and exercise when young to have enough in reserve when you\'re older.'],
      examples: ['Taking a calcium supplement with dinner', 'Walking for 30 minutes most days of the week'],
    },
    2: {
      level: 2,
      summary: 'Osteoporosis prevention involves maximizing peak bone mass, minimizing bone loss through modifiable risk factors, and pharmacologic intervention when indicated based on fracture risk.',
      explanation: `**Risk Factors:**

*Non-Modifiable:*
- Female sex
- Advancing age
- Caucasian or Asian ethnicity
- Family history of osteoporosis/fracture
- Small body frame
- Early menopause
- Prior fracture

*Modifiable:*
- Low calcium/vitamin D intake
- Sedentary lifestyle
- Smoking
- Excessive alcohol (>3 drinks/day)
- Low body weight
- Medications (steroids, anticonvulsants)

**Prevention Across Life Stages:**

*Childhood/Adolescence:*
- 90% of peak bone mass by age 18
- Adequate nutrition essential
- Weight-bearing physical activity

*Premenopausal Women:*
- Maintain healthy weight
- Regular exercise
- Adequate calcium and vitamin D
- Treat amenorrhea (low estrogen harms bone)

*Postmenopausal:*
- Bone loss accelerates (2-3% per year initially)
- Same lifestyle measures
- Consider bone density testing
- Medications if indicated

**Screening:**
- DEXA scan recommended at age 65 for women
- Earlier if risk factors present
- FRAX score calculates 10-year fracture risk

**When to Consider Medications:**
- T-score ≤-2.5 (osteoporosis)
- Prior hip or vertebral fracture
- T-score -1.0 to -2.5 with high FRAX score
- Glucocorticoid use`,
      keyTerms: [
        { term: 'DEXA scan', definition: 'Dual-energy X-ray absorptiometry; test measuring bone density' },
        { term: 'T-score', definition: 'Comparison of bone density to young healthy adult; -2.5 or lower = osteoporosis' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; calculates 10-year fracture probability' },
        { term: 'peak bone mass', definition: 'Maximum bone density achieved, typically in late 20s' },
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis prevention requires understanding bone biology, evidence-based screening criteria, and pharmacologic options for those at elevated fracture risk.',
      explanation: `**Bone Biology:**

*Bone Remodeling:*
- Continuous process of breakdown and formation
- Osteoclasts resorb bone
- Osteoblasts form new bone
- Regulated by hormones, cytokines, mechanical forces

*Estrogen Effects:*
- Inhibits osteoclast activity
- Promotes osteoblast function
- Menopause: Rapid bone loss from estrogen deficiency

**Screening Guidelines:**

*USPSTF Recommendations:*
- Women ≥65: Screen with DEXA
- Postmenopausal <65: Screen if 10-year fracture risk ≥9.3% (FRAX)
- No specific guideline for premenopausal women

*DEXA Sites:*
- Hip and lumbar spine (L1-L4)
- Forearm if hip/spine not usable

*WHO Diagnostic Criteria:*
- Normal: T-score ≥-1.0
- Osteopenia: T-score -1.0 to -2.5
- Osteoporosis: T-score ≤-2.5
- Severe osteoporosis: T-score ≤-2.5 with fragility fracture

**Treatment Thresholds:**

*FRAX-Based Approach:*
- Treat if 10-year hip fracture risk ≥3%
- Treat if 10-year major osteoporotic fracture risk ≥20%

**Non-Pharmacologic Prevention:**

*Exercise:*
- Weight-bearing aerobic: 30 min, most days
- Resistance training: 2-3 days/week
- Balance training: Reduces fall risk

*Nutrition:*
- Calcium: 1,000-1,200 mg/day (food preferred)
- Vitamin D: 600-800 IU/day (may need more if deficient)
- Protein: Adequate intake important

*Fall Prevention:*
- Home safety assessment
- Vision correction
- Medication review
- Balance exercises`,
      keyTerms: [
        { term: 'osteoclast', definition: 'Cell that breaks down bone tissue' },
        { term: 'osteoblast', definition: 'Cell that builds new bone tissue' },
        { term: 'fragility fracture', definition: 'Fracture from low-impact trauma (fall from standing height)' },
        { term: 'osteopenia', definition: 'Low bone density not yet meeting osteoporosis criteria' },
      ],
      clinicalNotes: 'Calculate FRAX before deciding on pharmacotherapy for osteopenia. Assess fall risk in addition to bone density. Vitamin D deficiency is common; check 25-OH vitamin D and replete if <30 ng/mL.',
    },
    4: {
      level: 4,
      summary: 'Advanced osteoporosis management involves pharmacologic selection based on fracture risk, monitoring response, understanding treatment sequencing, and managing special populations.',
      explanation: `**Pharmacologic Options:**

*Antiresorptives:*
- Bisphosphonates (alendronate, risedronate, ibandronate, zoledronic acid)
  - Inhibit osteoclasts
  - Oral or IV
  - Drug holiday after 3-5 years possible
- Denosumab (RANKL inhibitor)
  - Subcutaneous every 6 months
  - Rapid bone loss if stopped (must transition to bisphosphonate)
- Raloxifene (SERM)
  - Reduces vertebral fracture
  - Less effect on hip
  - May worsen hot flashes

*Anabolic:*
- Teriparatide/abaloparatide (PTH analogs)
  - Stimulate bone formation
  - 2-year duration limit
  - Follow with antiresorptive
- Romosozumab (sclerostin inhibitor)
  - Both anabolic and antiresorptive
  - 12-month course
  - Cardiovascular risk warning

**Treatment Selection:**

*Very High Fracture Risk:*
- Recent fracture, T-score ≤-3.0, high FRAX
- Consider anabolic-first strategy

*High Fracture Risk:*
- Bisphosphonates or denosumab

*Moderate Risk:*
- Bisphosphonates often first-line

**Monitoring:**
- Repeat DEXA every 2 years on treatment
- CTX (bone resorption marker) to assess response
- Clinical fracture occurrence

**Drug Holidays:**
- After 3-5 years of bisphosphonates
- If stable BMD and no fractures
- Not for denosumab (rebound bone loss)

**Special Populations:**

*Glucocorticoid-Induced:*
- High fracture risk even with normal BMD
- Start bisphosphonate with prednisone ≥2.5 mg daily ≥3 months

*Chronic Kidney Disease:*
- Avoid bisphosphonates if GFR <30-35
- Denosumab hypocalcemia risk
- Consider referral to nephrology/endocrinology

*Premenopausal Women:*
- Usually do not need pharmacotherapy
- Address underlying cause (amenorrhea, medications)`,
      keyTerms: [
        { term: 'bisphosphonate', definition: 'Medication that slows bone breakdown by inhibiting osteoclasts' },
        { term: 'denosumab', definition: 'RANKL inhibitor; prevents osteoclast activation' },
        { term: 'teriparatide', definition: 'PTH analog that stimulates bone formation' },
        { term: 'drug holiday', definition: 'Temporary discontinuation of bisphosphonate after prolonged use' },
      ],
      clinicalNotes: 'Anabolic-first sequencing provides greater BMD gains. Never abruptly stop denosumab - must transition to bisphosphonate. Rare bisphosphonate complications (ONJ, atypical fracture) are dose-duration related.',
    },
    5: {
      level: 5,
      summary: 'Expert osteoporosis management involves addressing treatment gaps, understanding evolving treatment paradigms, managing rare complications, and implementing population-level strategies.',
      explanation: `**Treatment Gap:**

*Problem:*
- Only 20-25% of high-risk patients receive treatment
- Even after fracture, treatment rates low
- "Osteoporosis care cascade" failure

*Solutions:*
- Fracture liaison services
- Post-fracture care coordination
- Electronic health record alerts
- Patient education

**Evolving Treatment Paradigms:**

*Goal-Directed Therapy:*
- Treat to target (e.g., T-score >-2.5)
- Not just "take this medication"
- Reassess and adjust

*Anabolic-First:*
- Building bone first more effective
- Follow with antiresorptive
- Reserve for very high risk

*Sequential/Combination:*
- Romosozumab → denosumab or bisphosphonate
- Teriparatide → bisphosphonate
- Combined therapy (limited data)

**Rare Complications:**

*Atypical Femoral Fractures:*
- Associated with prolonged bisphosphonate use
- Prodromal thigh pain
- Transverse fracture in subtrochanteric region
- Stop bisphosphonate if occurs

*Osteonecrosis of Jaw (ONJ):*
- Risk with dental procedures
- Higher with IV bisphosphonates
- Dental clearance before starting treatment
- Hold bisphosphonate around invasive dental work

**Special Populations:**

*Male Osteoporosis:*
- Screen men ≥70 or with risk factors
- Secondary causes more common (hypogonadism, glucocorticoids)
- Same treatments effective

*Transgender Health:*
- Estrogen therapy protects bone in trans women
- Monitor BMD in trans men on testosterone

**Population Strategies:**

*Primary Prevention:*
- Calcium and vitamin D in institutional settings
- Exercise programs for elderly
- Fall prevention programs
- Hip protectors

*Secondary Prevention:*
- Post-fracture screening and treatment protocols
- Fracture liaison services
- Care coordination

**Quality Metrics:**
- Percentage receiving DEXA after fracture
- Percentage on therapy post-fracture
- Time to treatment initiation
- Refracture rates`,
      keyTerms: [
        { term: 'fracture liaison service', definition: 'Coordinated program to ensure post-fracture patients receive osteoporosis evaluation and treatment' },
        { term: 'atypical femoral fracture', definition: 'Rare transverse thigh fracture associated with long-term bisphosphonate use' },
        { term: 'osteonecrosis of jaw', definition: 'Rare complication of antiresorptive therapy affecting jaw bone' },
        { term: 'treat to target', definition: 'Goal-directed osteoporosis therapy aiming for specific BMD improvement' },
      ],
      clinicalNotes: 'Fracture liaison services reduce refracture rates by 30-40%. Prodromal thigh pain in bisphosphonate users warrants imaging. The treatment gap is one of the largest in chronic disease management.',
    }
  },
  media: [],
  citations: [
    {
      id: 'aace-osteoporosis-guidelines',
      type: 'article',
      title: 'AACE/ACE Clinical Practice Guidelines for Osteoporosis',
      source: 'American Association of Clinical Endocrinologists',
      license: 'Copyright AACE',
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
    { targetId: 'concept-calcium-vitamin-d', targetType: 'concept', relationship: 'related', label: 'Calcium and Vitamin D' },
    { targetId: 'concept-bone-density-testing', targetType: 'concept', relationship: 'related', label: 'Bone Density Testing' },
    { targetId: 'concept-menopause-transition', targetType: 'concept', relationship: 'related', label: 'Menopause' },
  ],
  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['womens-health', 'patient-education', 'prevention', 'bone-health'],
    keywords: ['osteoporosis', 'bone density', 'fracture prevention', 'calcium', 'bisphosphonate'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
