/**
 * Osteoporosis - Musculoskeletal Conditions
 *
 * Comprehensive content on bone health, fracture risk assessment,
 * prevention strategies, and evidence-based treatment approaches.
 */

import { EducationalContent } from '../../types';

export const osteoporosis: EducationalContent = {
  id: 'conditions-osteoporosis',
  type: 'condition',
  name: 'Osteoporosis',
  nameEs: 'Osteoporosis',
  alternateNames: ['Porous Bone', 'Bone Loss', 'Low Bone Mass', 'Osteopenia'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteoporosis is a condition where bones become weak and brittle, making them more likely to break from even minor falls or bumps.',
      explanation: `## What Is Osteoporosis?

Osteoporosis means "porous bones." It's a condition where your bones lose density and become weak and fragile. Think of healthy bone like a solid sponge, and osteoporotic bone like a dry, brittle sponge with lots of holes.

**The Silent Disease:**
Osteoporosis is called a "silent disease" because you can't feel your bones getting weaker. Many people don't know they have it until they break a bone.

**Who Gets Osteoporosis?**
- Women (especially after menopause)
- People over age 50
- People with a family history of osteoporosis
- People who are very thin or have small frames
- People of Caucasian or Asian descent
- People who don't get enough calcium or vitamin D

## How Bones Change

\`\`\`
Normal bone turnover:
• Old bone is constantly being removed
• New bone is constantly being formed
• This process keeps bones strong

In osteoporosis:
• Old bone removal outpaces new bone formation
• Bones become less dense and more fragile
• The structure becomes like honeycomb with larger holes
\`\`\`

## Types of Broken Bones (Fractures)

Common osteoporosis-related fractures:
- **Hip fractures:** Often from a fall; can be life-changing
- **Spine fractures:** Can cause height loss and stooped posture
- **Wrist fractures:** Often from trying to catch a fall
- **Rib fractures:** Can happen from coughing or minor bumps

## Prevention: Building Strong Bones

**Calcium:**
- Adults need 1,000-1,200 mg daily
- Found in dairy products, leafy greens, fortified foods
- Supplements if diet doesn't provide enough

**Vitamin D:**
- Helps your body absorb calcium
- Adults need 600-800 IU daily
- Made by skin when exposed to sunlight
- Found in fatty fish, fortified milk
- Many people need supplements

**Exercise:**
- Weight-bearing exercises (walking, dancing, stair climbing)
- Strength training (lifting weights, resistance bands)
- Balance exercises (tai chi, yoga) to prevent falls

**Healthy Lifestyle:**
- Don't smoke (smoking weakens bones)
- Limit alcohol (more than 2 drinks daily harms bones)
- Maintain healthy weight (being too thin increases risk)

## Diagnosis

**Bone Density Scan (DEXA):**
- Quick, painless test
- Measures bone strength
- Recommended for women over 65, men over 70
- Earlier if risk factors present

## Treatment

If you have osteoporosis, your doctor may recommend:
- Calcium and vitamin D supplements
- Medications to slow bone loss or help build new bone
- Fall prevention strategies
- Exercises to strengthen bones and improve balance

## Living with Osteoporosis

**Fall Prevention:**
- Remove tripping hazards (rugs, cords, clutter)
- Install grab bars in bathroom
- Improve lighting throughout your home
- Wear shoes with good support
- Get your vision checked regularly
- Review medications that might cause dizziness

**Stay Active:**
- Exercise is one of the best things you can do
- Focus on weight-bearing and resistance exercises
- Balance exercises help prevent falls
- Work with a physical therapist if needed`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'A disease where bones become weak and brittle due to loss of bone density' },
        { term: 'fracture', definition: 'A broken bone, which can happen more easily with osteoporosis' },
        { term: 'calcium', definition: 'A mineral essential for building strong bones and teeth' },
        { term: 'vitamin D', definition: 'A nutrient that helps the body absorb calcium and build strong bones' },
        { term: 'DEXA scan', definition: 'A special X-ray test that measures bone density' },
      ],
      analogies: [
        'Bones are like a bank account - you build up bone density when young and withdraw in older age. Save enough when you\'re young!',
        'Think of your bones like a retirement account - deposits in childhood and young adulthood determine your "wealth" in later years.',
        'Bone is like living concrete - constantly being repaired and rebuilt. In osteoporosis, the repair team can\'t keep up.',
      ],
      examples: [
        'A 65-year-old woman who breaks her wrist from a minor fall might have undiagnosed osteoporosis.',
        'Someone who notices they\'re getting shorter over time may have had small spine fractures from osteoporosis.',
        'A postmenopausal woman whose mother had hip fractures should talk to her doctor about bone density testing.',
      ],
      patientCounselingPoints: [
        'It\'s never too early to build strong bones - but it\'s also never too late to start taking care of your bones.',
        'Vitamin D supplements are often needed because it\'s difficult to get enough from food, and many people don\'t get enough sun exposure.',
        'Weight-bearing exercises like walking are excellent for bone health - aim for 30 minutes most days of the week.',
        'Fall prevention is crucial - most hip fractures happen from falls, and preventing falls can prevent fractures.',
        'If you\'ve broken a bone after age 50, ask your doctor about being tested for osteoporosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoporosis is characterized by decreased bone density and microarchitectural deterioration, increasing fracture risk, diagnosed by DEXA and managed with calcium, vitamin D, and pharmacologic therapy.',
      explanation: `## Pathophysiology

**Normal Bone Remodeling:**
\`\`\`
Bone remodeling cycle:
1. Activation: Osteoclasts recruited to bone surface
2. Resorption: Osteoclasts break down old bone
3. Reversal: Transition phase
4. Formation: Osteoblasts build new bone
5. Resting: Quiescent phase

Balance: In healthy adults, resorption = formation
\`\`\`

**Osteoporosis Mechanism:**
- Increased osteoclast activity (bone resorption)
- Decreased osteoblast activity (bone formation)
- Net bone loss of 0.5-1% annually after age 30
- Accelerated loss after menopause (3-5% annually for several years)

**Types of Osteoporosis:**
| Type | Cause | Typical Patients |
|------|-------|------------------|
| Primary (postmenopausal) | Estrogen deficiency | Women 50-70 |
| Primary (senile) | Age-related bone loss | Adults >70 |
| Secondary | Medications, diseases | Various ages |

## Risk Factors

**Non-Modifiable:**
- Female sex (2x risk vs males)
- Advanced age
- Caucasian or Asian race
- Family history of fracture
- Small body frame (BMI <20)
- Previous fracture as adult

**Modifiable:**
- Low calcium intake
- Vitamin D deficiency
- Sedentary lifestyle
- Smoking
- Excessive alcohol (>2 drinks/day)
- Weight loss (<127 lb in women)

**Medication-Related:**
- Glucocorticoids (prednisone, etc.)
- Anticonvulsants
- Proton pump inhibitors (controversial)
- SSRIs
- Aromatase inhibitors
- Androgen deprivation therapy

## Diagnosis

**Bone Density Testing (DEXA):**

\`\`\`
WHO Definitions (T-score):
Normal: T-score ≥ -1.0
Osteopenia: T-score between -1.0 and -2.5
Osteoporosis: T-score ≤ -2.5
Severe osteoporosis: T-score ≤ -2.5 + fracture

T-score: Comparison to healthy young adult
Z-score: Comparison to age-matched controls
\`\`\`

**Who to Screen:**
- Women ≥65 years (USPSTF)
- Women <65 with risk factors
- Men ≥70 years
- Adults with fragility fracture
- Adults on glucocorticoids ≥3 months
- Consider earlier for high-risk individuals

**FRAX Assessment:**
- 10-year fracture risk calculator
- Factors: age, sex, weight, fracture history, glucocorticoids, RA, secondary osteoporosis, parental hip fracture, smoking, alcohol, BMD
- Guides treatment decisions

**Laboratory Evaluation (to rule out secondary causes):**
\`\`\`
Basic panel:
- CBC
- CMP (calcium, phosphate, creatinine, liver enzymes)
- 25-hydroxyvitamin D
- TSH
- Serum protein electrophoresis (if older)
- 24-hour urine calcium (if considering bisphosphonates)
\`\`\`

## Fracture Types

**Fragility Fractures:**
- Hip: Mortality 20% within 1 year
- Vertebral compression: Height loss, kyphosis
- Distal radius (wrist): Often sentinel fracture
- Humerus, pelvis, ribs

**Vertebral Fracture Signs:**
- Height loss (>2 cm)
- Kyphosis ("dowager hump")
- Chronic back pain
- Reduced abdominal space → early satiety

## Management

**Nutrition:**
- Calcium: 1,000 mg daily (women <50, men <70); 1,200 mg daily (women ≥50, men ≥70)
- Vitamin D: 600-800 IU daily for adults; higher if deficient
- Protein: 1.0-1.2 g/kg body weight

**Exercise:**
- Weight-bearing aerobic: Walking, jogging, dancing, stair climbing
- Resistance training: 2-3 times weekly
- Balance training: Tai chi, yoga (fall prevention)

**Pharmacologic Therapy Indications:**
- Hip or vertebral fracture
- T-score ≤ -2.5 at hip/spine
- T-score between -1.0 and -2.5 + FRAX 10-year risk ≥3% (hip) or ≥20% (major)
- Glucocorticoid ≥7.5 mg prednisone equivalent ≥3 months

**Medication Classes:**
- Antiresorptive: Bisphosphonates, denosumab, hormone therapy
- Anabolic: Teriparatide, abaloparatide, romosozumab`,
      keyTerms: [
        { term: 'osteoblast', definition: 'Bone-building cell that forms new bone tissue' },
        { term: 'osteoclast', definition: 'Bone-breaking cell that resorbs old bone tissue' },
        { term: 'T-score', definition: 'Bone density comparison to healthy young adult; negative scores indicate lower density' },
        { term: 'fragility fracture', definition: 'Broken bone from minor trauma that wouldn\'t normally cause a fracture' },
        { term: 'FRAX', definition: 'Tool estimating 10-year probability of hip and major osteoporotic fracture' },
        { term: 'osteopenia', definition: 'Low bone mass, not as severe as osteoporosis; T-score -1.0 to -2.5' },
      ],
      analogies: [
        'Bone remodeling is like road repair - osteoclasts remove old pavement and osteoblasts lay down new. In osteoporosis, the repair crew falls behind.',
        'Bone density peaks around age 30 like a retirement account - after that, you\'re making withdrawals.',
      ],
      patientCounselingPoints: [
        'Take calcium supplements with food in divided doses (500 mg or less at a time) for better absorption.',
        'Vitamin D3 (cholecalciferol) is preferred over D2 (ergocalciferol) as it\'s more effectively absorbed.',
        'Weight-bearing exercise means your bones work against gravity - walking counts, swimming doesn\'t.',
        'Fall prevention is as important as bone health - remove rugs, install grab bars, improve lighting.',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis evaluation requires comprehensive assessment including secondary causes, fracture risk stratification using FRAX, and evidence-based treatment selection balancing antiresorptive and anabolic therapies.',
      explanation: `## Secondary Causes of Osteoporosis

**Endocrine Disorders:**
- Hyperparathyroidism: PTH increases bone resorption
- Hyperthyroidism: Increased bone turnover
- Hypogonadism: Low estrogen/testosterone
- Cushing syndrome: Excess cortisol
- Diabetes mellitus: Type 1 associated with increased fracture risk
- Prolactinoma: Hypogonadism

**Gastrointestinal:**
- Malabsorption (celiac, IBD, bariatric surgery)
- Chronic liver disease
- Vitamin D deficiency
- Calcium malabsorption

**Medications:**

\`\`\`
High-risk medications:
- Glucocorticoids (dose and duration dependent)
- Aromatase inhibitors (breast cancer)
- Androgen deprivation therapy (prostate cancer)
- GnRH agonists
- Anticonvulsants (enzyme inducers)
- Loop diuretics (calcium wasting)
- PPIs (controversial)
- SSRIs

Medication review:
- Dose reduction/deprescribing when possible
- Consider calcium/vitamin D supplementation
- Monitor bone density if long-term use essential
\`\`\`

**Malignancy:**
- Multiple myeloma: Bone lesions, fractures
- Metastatic disease: Breast, prostate, lung
- Consider SPEP/UPEP, PSA in appropriate patients

## Pharmacologic Therapy

**Bisphosphonates (First-Line):**

| Agent | Dose | Frequency | Route |
|-------|------|-----------|-------|
| Alendronate | 70 mg | Weekly | Oral |
| Risedronate | 35 mg | Weekly | Oral |
| Ibandronate | 150 mg | Monthly | Oral |
| Zoledronic acid | 5 mg | Yearly | IV |

**Mechanism:** Inhibit osteoclast-mediated bone resorption

**Adverse Effects:**
- GI upset (oral)
- Acute phase reaction (IV: flu-like symptoms)
- Osteonecrosis of jaw (rare)
- Atypical femur fracture (rare, with long-term use)

**Duration Consideration:**
\`\`\`
Drug holiday after 3-5 years:
- Reassess fracture risk
- Consider BMD monitoring
- May resume if fracture risk remains high or BMD declines
\`\`\`

**Denosumab (RANKL Inhibitor):**
- Subcutaneous every 6 months
- More potent than bisphosphonates
- No renal dose adjustment
- Rebound vertebral fractures if discontinued without transition
- Consider dental exam before starting

**Anabolic Agents (Bone Builders):**

| Agent | Dose | Duration | Notes |
|-------|------|----------|-------|
| Teriparatide | 20 mcg SC daily | Max 2 years | PTH 1-34 |
| Abaloparatide | 80 mcg SC daily | Max 2 years | PTHrP analog |
| Romosozumab | 210 mg SC monthly | Max 1 year | Sclerostin inhibitor |

**Indications for Anabolics:**
- Severe osteoporosis (T-score ≤ -3.0)
- Multiple fractures despite antiresorptive therapy
- Glucocorticoid-induced with fracture
- Inability to tolerate antiresorptives

**Sequential Therapy:**
- Anabolic → antiresorptive (maintain gains)
- Switch denosumab → bisphosphonate before stopping (prevent rebound fractures)

## FRAX Integration

**US Treatment Thresholds (NOF Guidelines):**

\`\`\`
Postmenopausal women, men ≥50:
Treat if:
• Hip or vertebral fracture
• T-score ≤ -2.5 at hip/spine
• T-score -1.0 to -2.5 AND:
  - Hip fracture probability ≥3% (10-year)
  - Major osteoporotic fracture ≥20% (10-year)
\`\`\`

**FRAX Limitations:**
- Uses femoral neck BMD only
- Doesn't account for multiple fractures
- Less accurate in complex patients
- Doesn't replace clinical judgment

## Monitoring

**Bone Density Monitoring:**
- DEXA every 1-2 years during pharmacotherapy
- Monitor at same facility if possible
- Least significant change: ~3% at hip, ~5% at spine

**Biochemical Markers (optional):**
- Bone formation: P1NP, osteocalcin
- Bone resorption: CTX, NTX
- May assess adherence, response
- Not routinely recommended in practice

**Treatment Response:**
- Stable or increased BMD
- Reduction in bone turnover markers (if antiresorptive)
- No new fractures

**Treatment Failure:**
- Recurrent fractures
- Significant BMD loss (>5%)
- Consider secondary causes, adherence, or switch therapy`,
      keyTerms: [
        { term: 'antiresorptive', definition: 'Medication that slows bone breakdown (bisphosphonates, denosumab)' },
        { term: 'anabolic', definition: 'Medication that stimulates new bone formation (teriparatide, romosozumab)' },
        { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand; target of denosumab' },
        { term: 'atypical femur fracture', definition: 'Rare fracture of the thigh bone from minimal trauma, associated with long-term bisphosphonate use' },
        { term: 'ONJ', definition: 'Osteonecrosis of the jaw; rare complication of bisphosphonates/denosumab' },
      ],
      clinicalNotes: 'Before starting anabolic therapy, ensure patient has adequate calcium and vitamin D. Monitor serum and urine calcium during teriparatide (can cause hypercalcemia). Transition to antiresorptive after anabolic to maintain gains.',
    },
    4: {
      level: 4,
      summary: 'Osteoporosis management requires individualized treatment selection, monitoring for rare but serious adverse events, consideration of sequential therapy, and integration of comorbidities with evidence-based duration strategies.',
      explanation: `## Advanced Treatment Considerations

**Duration of Bisphosphonate Therapy:**

\`\`\`
Benefits vs. Risks Over Time:
Years 0-3: Greatest fracture risk reduction
Years 3-5: Continued benefit, low risk
Years 5-10: Cumulative benefit, increasing risk
Beyond 10: Individualize decision

Factors favoring continued therapy:
• Prior fracture while on therapy
• Very low BMD (T-score < -3.0)
• High FRAX score
• Glucocorticoid use

Factors favoring drug holiday:
• Lower fracture risk
• BMD improvement (T-score > -2.0)
• Patient preference
• Concerns about rare side effects
\`\`\`

**Atypical Femur Fractures (AFF):**
\`\`\`
Diagnostic criteria (ASBMR):
• Located along femur from just below lesser trochanter to just above supracondylar flare
• No or minimal trauma
• Transverse or short oblique fracture line
• Lateral cortical breakage with medial spike
• No comminution

Risk factors:
• Bisphosphonate duration >3 years
• Asian race
• Femoral shaft cortical thickening on X-ray

Management:
• High index of suspicion (thigh/groin pain)
• Contralateral femur imaging if fracture found
• Orthopedic referral
• Discontinue bisphosphonate
• Consider anabolic therapy
\`\`\`

**Osteonecrosis of the Jaw (ONJ):**
\`\`\`
Risk factors:
• IV bisphosphonates (cancer doses)
• Dental extraction or invasive dental work
• Poor oral hygiene
• Smoking, diabetes
• Duration of therapy

Prevention:
• Dental exam before starting therapy
• Complete major dental work first
• Regular dental care
• Good oral hygiene

Management:
• Oral surgeon referral
• Continue bisphosphonate if established
• Discontinue if high-risk ONJ
• Conservative management preferred
\`\`\`

## Comorbidity-Specific Management

**Chronic Kidney Disease:**

\`\`\`
CKD Stage 3a (eGFR 45-59):
• Full dose alendronate, risedronate
• Monitor renal function

CKD Stage 3b-4 (eGFR 15-44):
• Reduced dose/interval risedronate
• Avoid alendronate if eGFR <35
• Denosumab (no dose adjustment)
• Consider hormone therapy

CKD Stage 5 (eGFR <15 or dialysis):
• Denosumab preferred (monitor calcium)
• Avoid bisphosphonates
• Consider teriparatide
• Rule out/adynamic bone disease
\`\`\`

**Rheumatoid Arthritis:**
- Increased fracture risk independent of BMD
- Glucocorticoids add risk
- Treat aggressively (T-score ≤ -1.5)
- Denosumab or zoledronate effective
- Consider calcium/vitamin D monitoring

**Diabetes:**
- Type 1: Markedly increased fracture risk
- Type 2: Increased risk despite higher BMD
- Poor bone quality
- May need earlier intervention

**Epilepsy:**
- Enzyme-inducing anticonvulsants reduce vitamin D
- Monitor 25-OH vitamin D
- Supplement aggressively if deficient

## Sequential Therapy Strategies

**Evidence-Based Sequencing:**

\`\`\`
Anabolic → Antiresorptive:
1. Start teriparatide/abaloparatide for 1-2 years
2. Transition to denosumab or bisphosphonate
3. Rationale: Locks in BMD gains
4. Best data: Teriparatide → Denosumab

Denosumab → Bisphosphonate:
• Must transition before stopping
• Give zoledronate ~6 months after last denosumab
• Prevents rebound vertebral fractures
• Consider if treatment discontinuation needed

Bisphosphonate → Anabolic:
• Washout period recommended
• Anabolics more effective after bisphosphonate holiday
• Consider if fractures despite bisphosphonates
\`\`\`

## Special Populations

**Premenopausal Women:**
- Diagnosis uncertain (use Z-score not T-score)
- Rule out secondary causes
- Avoid bisphosphonates/denosumab if pregnancy possible
- Consider for secondary osteoporosis (glucocorticoids)

**Men:**
- Screen at age 70 (or 50 with risk factors)
- Secondary causes more common (hypogonadism, alcohol)
- Bisphosphonates effective
- Consider testosterone if low

**Glucocorticoid-Induced Osteoporosis:**
- Rapid bone loss (5-15% in first year)
- Treat if ≥3 months of ≥5 mg prednisone daily
- Bisphosphonates, teriparatide effective
- Calcium 1,200 mg + vitamin D 600-800 IU minimum

**Organ Transplant:**
- High fracture risk
- Multiple factors (glucocorticoids, CNIs, poor nutrition)
- Early intervention (within 3 months)
- Consider anabolic for severe cases

## Controversies and Emerging Topics

**Vitamin D Supplementation:**
- Optimal level debated (20 ng/mL vs 30 ng/mL)
- Routine supplementation >4,000 IU not recommended
- Toxicity rare but possible at very high doses

**Calcium Supplementation:**
\`\`\`
Dietary preferred:
• Better absorption
• Lower kidney stone risk
• Associated with lower cardiovascular risk

Supplements:
• Use if dietary intake inadequate
• Divide doses (<500 mg each)
• Calcium citrate preferred (better absorption)
\`\`\`

**Sclerostin Inhibitors (Romosozumab):**
- Very effective (BMD increase >10% in 1 year)
- Black box warning for cardiovascular events
- Contraindicated in recent MI, stroke
- ARCH trial: More CV events vs alendronate
- Reserve for very high-risk without CV disease`,
      keyTerms: [
        { term: 'drug holiday', definition: 'Planned interruption of bisphosphonate therapy after 3-5 years while monitoring BMD' },
        { term: 'adynamic bone disease', definition: 'Low bone turnover in advanced CKD; increases fracture risk' },
        { term: 'Z-score', definition: 'Bone density compared to age-matched peers; used in premenopausal women, men <50' },
        { term: 'sclerostin', definition: 'Protein inhibiting bone formation; target of romosozumab' },
      ],
      clinicalNotes: `Key Clinical Insights:

1. Atypical femur fractures are rare but be alert for thigh/groin pain in patients on long-term bisphosphonates - obtain X-ray if symptoms present

2. Always transition denosumab to a bisphosphonate before discontinuing to prevent rebound vertebral fractures

3. Anabolic agents are underutilized but highly effective for severe osteoporosis - consider earlier in high-risk patients

4. In CKD, bone metabolism becomes abnormal - avoid bisphosphonates in advanced disease, use denosumab with careful calcium monitoring

5. The duration of bisphosphonate therapy should be individualized - no "one size fits all" for drug holidays

6. Secondary causes are common - at minimum check vitamin D, calcium, TSH, and consider SPEP in older adults with osteoporosis`,
    },
    5: {
      level: 5,
      summary: 'State-of-the-art osteoporosis care implements fracture risk prediction beyond BMD, individualized treatment duration, novel anabolic combination therapies, and precision medicine approaches while navigating emerging evidence on long-term safety.',
      explanation: `## Beyond BMD: Advanced Risk Assessment

**FRAX Limitations and Next-Generation Tools:**

\`\`\`
FRAX limitations:
• Single BMD site only (femoral neck)
• Doesn't account for multiple fractures
• Less accurate in complex patients
• No input for falls risk
• Limited validation in some populations

Enhanced risk assessment:
• Trabecular Bone Score (TBS): Texture analysis of DXA
• FRAX plus falls history: Improved prediction
• Hip structural analysis: Geometry, strength
• Finite element analysis: Strength estimation
\`\`\`

**Trabecular Bone Score (TBS):**
- Texture analysis of lumbar spine DXA
- Identates degraded microarchitecture
- Adjusts FRAX risk upward or downward
- Particularly useful in diabetic patients (T2DM)
- Predicts fracture risk independent of BMD

**Competing Risk of Death:**
- In oldest-old (>80-85), competing mortality high
- Fracture prevention less impactful
- Individualize treatment decisions
- Consider life expectancy, functional status

## Pharmacotherapy Frontiers

**Romosozumab Positioning:**

\`\`\`
ARCH Trial (Romosozumab → Alendronate vs Alendronate alone):
• 48% lower vertebral fracture risk
• 19% lower nonvertebral fracture risk
• More cardiovascular events (safety signal)

FRAME Trial (Romosozumab → placebo → then alendronate):
• 73% lower vertebral fractures at 12 months
• No CV signal (lower risk population)

Positioning:
• Highest risk patients without CV disease
• Consider after antiresorptive failure
• Limited to 1 year duration
• Must transition to antiresorptive
\`\`\`

**Combination Therapy:**

\`\`\`
DATA-HD Trial (Denosumab + Teriparatide vs either alone):
• Combination superior BMD increase
• Cost and access limitations
• Not routinely recommended
• Consider in severe, high-risk cases

Rationale:
• Teriparatide increases bone formation
• Denosumab prevents concurrent resorption
• Theoretical synergism confirmed
• Unclear fracture benefit vs sequential
\`\`\`

**Investigational Agents:**
- Setrusumab (sclerostin inhibitor): Oral formulation in development
- Abaloparatide oral: Bioavailability challenges
- Cathepsin K inhibitors: Development stalled (stroke risk)
- Romosozumab biosimilars: Cost reduction

## Duration and Drug Holiday Evidence

**Long-Term Bisphosphonate Data:**

\`\`\`
FLEX Extension Trial (Alendronate):
• 5 additional years (10 total) vs placebo
• No additional fracture reduction for most
• Small subset may benefit (those with prior vertebral fracture)

HORIZON Extension (Zoledronic acid):
• 3 additional years (6 total) vs placebo
• Continued BMD increase
• Lower fracture incidence in extension
• No increase in adverse events

Clinical implications:
• Benefits plateau after 3-5 years for many
• High-risk patients may benefit from longer duration
• Drug holiday reasonable for lower-risk patients
• Monitor BMD during holiday; resume if declining
\`\`\`

**Rebound After Denosumab Discontinuation:**

\`\`\`
DATA-Switch Trial:
• Stop denosumab → Rapid BMD loss
• Multiple vertebral fractures reported
• 30% increase in remodeling markers

Transition strategies:
• Give zoledronate 6 months after last denosumab
• May need more than one zoledronate dose
• Monitor BMD and markers
• Consider indefinite therapy in very high risk
\`\`\`

## Precision Medicine Approaches

**Genetic Risk Prediction:**
- Polygenic risk scores in development
- May guide screening initiation
- Not yet clinically available

**Biomarker-Guided Therapy:**
\`\`\`
Bone turnover markers:
• Early treatment response assessment
• Identify non-adherence
• P1NP (formation) and CTX (resorption)
• Predict BMD change better than BMD alone

Utility:
• Assess treatment response at 3-6 months
• Consider switch if inadequate response
• Limited availability in practice
• Cost-effectiveness uncertain
\`\`\`

## Special Population Guidelines

**Very Elderly (>85 years):**
- Fracture risk extremely high
- Competing mortality risk
- Functional status key consideration
- Fall prevention critical
- Treat if reasonable life expectancy

**Nursing Home Residents:**
- Very high fracture risk
- Calcium/vitamin D deficiency common
- Fall prevention essential
- Treat if BMD indicates
- Consider IV zoledronate (convenience)

**Hip Fracture Prevention:**

\`\`\`
Hip pad effectiveness:
• Mixed evidence
• Compliance issues
• Not routinely recommended

Collar and hip protectors:
• Nursing home setting
• Some evidence for benefit
• Adherence challenges

Zoledronate after hip fracture (HORIZON-Recurrent Fracture Trial):
• 35% reduction in new clinical fractures
• 28% reduction in mortality
• Consider in all hip fracture patients
\`\`\`

## Implementation and Quality Improvement

**Care Gaps:**
\`\`\`
Undertreatment:
• <20% of fragility fracture patients receive treatment
• "Treatment gap" despite clear indication
• Missed opportunities for prevention

Contributors:
• Focus on fracture event, not underlying disease
• Lack of ownership (ortho vs primary care)
• Patient concerns about medication side effects
• Confusion about screening guidelines

Improvement strategies:
• Fracture liaison services
• Automatic DEXA ordering after fracture
• Electronic health record alerts
• Patient education materials
\`\`\`

**Post-Fracture Care:**
- Fracture liaison services coordinate care
- BMD testing, calcium/vitamin D, treatment initiation
- Reduces subsequent fractures by 20-40%
- Cost-effective implementation`,
      keyTerms: [
        { term: 'Trabecular Bone Score', definition: 'TBS; textural analysis of DXA images assessing bone microarchitecture' },
        { term: 'competing risk', definition: 'Risk of death from other causes that may limit benefit of preventive treatment' },
        { term: 'fracture liaison service', definition: 'Coordinated care program ensuring osteoporosis evaluation after fragility fracture' },
        { term: 'extension trial', definition: 'Long-term study continuation assessing ongoing treatment effects' },
      ],
      clinicalNotes: `Advanced Practice Perspectives:

1. The "treatment gap" is the single biggest issue in osteoporosis care - most patients with fragility fractures never receive treatment

2. Romosozumab is highly effective but the cardiovascular safety signal demands careful patient selection - avoid in anyone with recent MI, stroke, or CV disease

3. TBS can reclassify fracture risk in patients with diabetes who have higher BMD but more fragile bones

4. Never stop denosumab without a transition plan - rebound vertebral fractures are real and devastating

5. Drug holidays are appropriate for many patients after 3-5 years but require monitoring - don't abandon patients after discontinuation

6. Anabolic agents are transformative for severe osteoporosis but underutilized - consider earlier in high-risk patients, especially those with fractures despite bisphosphonates

7. Hip fracture patients should receive zoledronate before discharge - reduces mortality and recurrent fractures by 30%`,
    },
  },

  media: [
    {
      id: 'osteoporosis-bone-structure',
      type: 'diagram',
      filename: 'osteoporosis-bone-structure.svg',
      title: 'Normal vs Osteoporotic Bone Structure',
      description: 'Comparison of trabecular bone in normal and osteoporotic bone',
    },
    {
      id: 'osteoporosis-t-score',
      type: 'diagram',
      filename: 'osteoporosis-t-score.svg',
      title: 'DEXA T-score Interpretation',
      description: 'Understanding T-score categories and fracture risk',
    },
    {
      id: 'osteoporosis-fracture-types',
      type: 'diagram',
      filename: 'osteoporosis-fracture-types.svg',
      title: 'Common Osteoporotic Fractures',
      description: 'Hip, vertebral compression, and wrist fractures',
    },
  ],

  citations: [
    {
      id: 'nof-guide-2023',
      type: 'article',
      title: 'Updated 2023 Osteoporosis Guideline from the National Osteoporosis Foundation',
      authors: ['Cosman F', 'Krege JH', 'Looker AC', 'et al.'],
      source: 'Osteoporosis International',
    },
    {
      id: 'acr-osteoporosis-2020',
      type: 'article',
      title: '2020 American College of Rheumatology Guideline for the Prevention and Treatment of Glucocorticoid-Induced Osteoporosis',
      authors: ['Buckley L', 'Guyatt G', 'Fink HA', 'et al.'],
      source: 'Arthritis Care & Research',
    },
    {
      id: 'asbmr-aff-2020',
      type: 'article',
      title: 'Atypical Femoral Fractures: Task Force 2020 Update',
      authors: ['Shane E', 'Burr D', 'Abrahamsen B', 'et al.'],
      source: 'Journal of Bone and Mineral Research',
    },
  ],

  crossReferences: [
    { targetId: 'conditions-fractures', targetType: 'condition', relationship: 'related', label: 'Fractures' },
    { targetId: 'conditions-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
  ],

  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['bone-health', 'metabolic-bone-disease', 'fracture-prevention'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'endocrinology', 'obstetrics-gynecology'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoporosis;
