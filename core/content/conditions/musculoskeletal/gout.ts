/**
 * Gout and Pseudogout - Musculoskeletal Conditions
 *
 * Comprehensive content on crystal arthropathies including gout and
 * calcium pyrophosphate deposition disease (pseudogout).
 */

import { EducationalContent } from '../../types';

export const gout: EducationalContent = {
  id: 'conditions-gout',
  type: 'condition',
  name: 'Gout and Pseudogout',
  alternateNames: ['Gouty Arthritis', 'CPPD', 'Calcium Pyrophosphate Deposition Disease', 'Pseudogout', 'Crystal-Induced Arthritis'],

  levels: {
    1: {
      level: 1,
      summary: 'Gout is a type of arthritis caused by uric acid crystals forming in your joints, causing sudden, severe pain and swelling.',
      explanation: `## What Is Gout?

Gout is a painful form of arthritis that happens when uric acid crystals build up in your joints. It most commonly affects the big toe but can affect other joints too.

**What Causes Gout?**

Your body makes uric acid when it breaks down certain foods. Normally, uric acid dissolves in your blood and passes through your kidneys in urine. But sometimes:
- Your body makes too much uric acid
- Your kidneys don't remove enough uric acid

When uric acid levels get too high, sharp crystals can form in your joints.

## What Does a Gout Attack Feel Like?

\`\`\`
Typical gout symptoms:
• Sudden, severe joint pain (often at night)
• Big toe most commonly affected
• Joint becomes hot, red, and swollen
• Pain is often described as the worst pain ever experienced
• May have fever with the attack
\`\`\`

**What Triggers Gout Attacks?**
- Eating foods high in purines (red meat, shellfish, organ meats)
- Drinking alcohol (especially beer)
- Being overweight
- Certain medications (like diuretics/water pills)
- Dehydration
- Recent surgery or trauma

## How Is Gout Diagnosed and Treated?

**Diagnosis:**
- Doctor examines the affected joint
- May remove fluid from the joint to look for crystals
- Blood tests to check uric acid level

**Treatment:**
- **During an attack:** Anti-inflammatory medicines (NSAIDs like ibuprofen, colchicine, or prednisone)
- **Between attacks:** Medicines to lower uric acid (like allopurinol) to prevent future attacks
- Lifestyle changes (diet, weight loss, limiting alcohol)

## What About Pseudogout?

Pseudogout ("false gout") is similar to gout but caused by different crystals (calcium crystals instead of uric acid). It often affects the knee or wrist.

**Key differences:**
- Older age group (usually over 60)
- Calcium crystals instead of uric acid
- Different treatment approach

## Living with Gout

With proper treatment:
- Gout attacks become less frequent
- You can prevent joint damage
- Most people live normal, active lives
- Taking your medicine regularly is very important`,
      keyTerms: [
        { term: 'gout', definition: 'A type of arthritis caused by uric acid crystals forming in joints' },
        { term: 'uric acid', definition: 'A waste product from digesting certain foods; high levels can cause gout' },
        { term: 'crystals', definition: 'Sharp, needle-like particles that form in joints and cause pain and inflammation' },
        { term: 'pseudogout', definition: 'A condition similar to gout but caused by calcium crystals, not uric acid' },
        { term: 'flare', definition: 'A sudden worsening or attack of gout symptoms' },
      ],
      analogies: [
        'Uric acid crystals are like tiny shards of glass inside your joint - that\'s why gout is so painful.',
        'Gout is like having a splinter in your joint - your body reacts strongly to the crystals.',
        'Think of uric acid like salt in water - when there\'s too much, it starts to crystallize instead of staying dissolved.',
      ],
      examples: [
        'A man who wakes up at 3 AM with severe pain, redness, and swelling in his big toe after a night of drinking beer and eating steak is likely having a gout attack.',
        'Someone taking a water pill (diuretic) for high blood pressure might develop their first gout attack because these medicines raise uric acid levels.',
        'An elderly person with a suddenly swollen, painful knee might have pseudogout rather than gout.',
      ],
      patientCounselingPoints: [
        'Drink plenty of water (8-16 cups per day) to help flush uric acid from your body.',
        'Limit alcohol, especially beer, which is high in purines.',
        'Avoid organ meats (liver, kidney), anchovies, and sardines which are very high in purines.',
        'Take your uric acid-lowering medication daily, even when not having a flare, to prevent future attacks.',
        'Don\'t start allopurinol during an acute gout attack - wait until the attack resolves.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gout is a crystal-induced arthritis caused by monosodium urate deposition, while pseudogout is caused by calcium pyrophosphate crystals, both presenting as acute monoarthritis with specific diagnostic and treatment approaches.',
      explanation: `## Understanding Crystal Arthropathies

**Gout (Gouty Arthritis):**
- Caused by monosodium urate (MSU) crystals
- Most common inflammatory arthritis in men
- Affects approximately 4% of US adults
- Increasing prevalence worldwide

**Pseudogout (CPPD):**
- Caused by calcium pyrophosphate (CPP) crystals
- Also called Calcium Pyrophosphate Deposition Disease
- More common in elderly
- Often affects knees and wrists

## Pathophysiology

**Gout:**
- Hyperuricemia (serum urate >6.8 mg/dL)
- Supersaturation leads to MSU crystal formation
- Crystals trigger intense inflammatory response
- NLRP3 inflammasome activation → IL-1β release
- Neutrophil recruitment causes acute inflammation

**Pseudogout:**
- CPP crystal deposition in cartilage (chondrocalcinosis)
- Crystals shed into joint space during stress
- Similar inflammatory cascade to gout

**Hyperuricemia Causes:**
| Type | Causes |
|------|--------|
| Overproduction | Alcohol, purine-rich foods, tumor lysis, psoriasis |
| Underexcretion (90%) | Chronic kidney disease, diuretics, genetics |

## Clinical Presentation

**Gout Attack Characteristics:**
- Sudden onset (often nighttime)
- Rapid progression (maximal 6-12 hours)
- Classic sites: 1st MTP (podagra), ankle, knee, wrist
- Podagra accounts for 50% of initial attacks
- Intense inflammation (red, hot, swollen)
- May have fever, elevated WBC

**Pseudogout Presentation:**
- Similar acute monoarthritis
- Knee most common (50%), wrist, shoulder
- Usually in older adults (>60 years)
- May be triggered by illness/surgery
- Can mimic infection or gout

## Diagnosis

**Gout Diagnosis:**
\`\`\`
Gold standard: Arthrocentesis with crystal identification
- MSU crystals: Needle-shaped, negatively birefringent
- Appearance: Yellow when parallel to polarizer

Serum urate level:
- May be normal during acute attack (up to 40%)
- Useful for monitoring treatment
- Not diagnostic alone

Imaging:
- Ultrasound: Double contour sign
- DECT CT: Urate crystal deposition
- X-ray: Tophi, erosions (late findings)
\`\`\`

**Pseudogout Diagnosis:**
- Synovial fluid: CPP crystals (rhomboid, weakly positive birefringence)
- X-ray: Chondrocalcinosis (cartilage calcification)
- May be associated with hyperparathyroidism, hemochromatosis

## Treatment

**Acute Gout Management:**

| Medication | Dose | Considerations |
|------------|------|----------------|
| NSAIDs | Naproxen 500mg BID | Avoid in CKD, PUD, anticoagulation |
| Colchicine | 1.2mg then 0.6mg in 1hr | Reduce dose in CKD; drug interactions |
| Glucocorticoids | Prednisone 40mg daily | Taper over 7-14 days |
| Intra-articular | Triamcinolone | For single joint involvement |

**Urate-Lowering Therapy (ULT):**
- Indications: ≥2 flares/year, tophi, gouty arthritis, urate overproduction
- **Allopurinol:** First-line (xanthine oxidase inhibitor); start 100mg daily
- **Febuxostat:** Alternative if allopurinol intolerance; CV risk warning
- **Probenecid:** Uricosuric (good renal function, underexcretors)
- Target urate: <6 mg/dL (or <5 for tophaceous gout)

**Pseudogout Treatment:**
- NSAIDs
- Intra-articular steroids
- Oral colchicine (often effective)
- No proven disease-modifying therapy`,
      keyTerms: [
        { term: 'monosodium urate', definition: 'MSU; the type of crystal that causes gout' },
        { term: 'hyperuricemia', definition: 'Elevated uric acid level in the blood; prerequisite for gout' },
        { term: 'podagra', definition: 'Gout affecting the first metatarsophalangeal (big toe) joint' },
        { term: 'tophus', definition: 'A deposit of uric acid crystals under the skin in chronic gout' },
        { term: 'arthrocentesis', definition: 'Procedure to remove fluid from a joint for diagnosis or treatment' },
        { term: 'chondrocalcinosis', definition: 'Calcification of cartilage seen on X-ray in pseudogout' },
        { term: 'birefringence', definition: 'Property of crystals to split light; used to identify crystals under microscope' },
      ],
      analogies: [
        'The NLRP3 inflammasome is like an alarm system - when it detects crystals, it triggers a massive inflammatory response.',
        'Starting allopurinol during a gout attack is like fanning a fire - it can make the attack worse initially.',
      ],
      patientCounselingPoints: [
        'Allopurinol can actually trigger gout flares when first started - continue taking it and your doctor will give you prophylactic medication.',
        'Diet alone rarely controls gout effectively - medication is usually needed to reach target uric acid levels.',
        'If you have kidney disease, colchicine dose needs to be reduced to avoid serious side effects.',
        'Treat acute attacks as soon as symptoms begin - earlier treatment works better.',
      ],
    },
    3: {
      level: 3,
      summary: 'Crystal-induced arthropathies require synovial fluid analysis for definitive diagnosis, with gout managed by treat-to-target urate lowering and pseudogout requiring consideration of associated metabolic conditions.',
      explanation: `## Diagnostic Approach to Acute Monoarthritis

**Differential Diagnosis:**
| Condition | Key Features | Crystal Type |
|-----------|--------------|--------------|
| Gout | 1st MTP, podagra, sudden onset | MSU (needle-shaped, negative) |
| Pseudogout | Knee/wrist, elderly, chondrocalcinosis | CPP (rhomboid, weak positive) |
| Septic arthritis | Fever, high WBC in fluid | No crystals (Gram stain) |
| Trauma | History of injury | Hemarthrosis |
| Psoriatic arthritis | Dactylitis, nail changes | No crystals |

**Synovial Fluid Analysis:**

\`\`\`
Normal synovial fluid:
- WBC <200/mm³
- Clear, viscous
- Negative Gram stain

Inflammatory (gout/pseudogout/septic):
- WBC 2,000-75,000/mm³
- Low viscosity
- Crystal identification critical

Septic arthritis:
- WBC often >50,000/mm³
- Positive Gram stain or culture
- Consider even with crystals present
\`\`\`

**Crystal Identification:**

| Crystal | Shape | Birefringence | Color (Parallel) |
|---------|-------|---------------|------------------|
| MSU (gout) | Needle | Strong negative | Yellow |
| CPP (pseudogout) | Rhomboid/Rod | Weak positive | Blue |
| Hydroxyapatite | Needle/rod | None | None |

## Comprehensive Gout Management

**Treat-to-Target Approach:**

1. **Acute Attack Treatment:**
   - Treat within 24 hours for best response
   - Continue any existing ULT during flare
   - Add prophylaxis if starting ULT

2. **Urate-Lowering Therapy Indications:**
   - ≥2 flares per year
   - Tophaceous gout
   - Gouty arthritis on imaging
   - CKD stage 2+ with hyperuricemia
   - History of uric acid kidney stones

3. **ULT Selection and Monitoring:**
\`\`\`
Allopurinol:
- Start 100mg daily, titrate by 100mg q2-4 weeks
- Screen for HLA-B*5801 in Asian populations (risk of SJS/TEN)
- Check eGFR, CBC, LFTs at baseline and periodically
- Target: Serum urate <6 mg/dL (<5 if tophi)
- Max dose: 800mg daily (if renal function adequate)

Febuxostat:
- 40-80mg daily
- Black box warning for CV death (use alternatives if CV disease)
- No dose adjustment for mild-moderate CKD

Probenecid:
- 500mg BID, increase to 2g/day
- Contraindicated in kidney stones, CKD
- Alkalinize urine (increase fluids)
\`\`\`

4. **Flare Prophylaxis During ULT Initiation:**
   - Low-dose colchicine (0.6mg daily or BID)
   - NSAID (if no contraindications)
   - Continue for 3-6 months after target urate reached
   - Longer if tophi present

## Pseudogout (CPPD) Management

**Associated Conditions to Screen:**
- Hyperparathyroidism (check calcium, PTH)
- Hemochromatosis (check iron studies, ferritin)
- Hypomagnesemia
- Hypothyroidism

**Treatment Approach:**
- Acute: Same as gout (NSAIDs, steroids, colchicine)
- Chronic: No proven ULT equivalent
- Low-dose colchicine (0.6mg BID) may prevent flares
- Treat associated metabolic conditions
- Arthroscopic debridement for refractory cases

## Tophaceous Gout

**Management:**
- Aggressive ULT to reach urate <5 mg/dL
- Tophi shrink over months to years
- Surgical removal rarely needed
- May ulcerate, become secondarily infected

## Comorbidities in Gout Patients

Screen for and manage:
- Metabolic syndrome (obesity, HTN, DM, dyslipidemia)
- Cardiovascular disease (gout is CV risk equivalent)
- Chronic kidney disease (bidirectional relationship)
- Nephrolithiasis (uric acid stones)`,
      keyTerms: [
        { term: 'treat-to-target', definition: 'Strategy of adjusting therapy to achieve specific serum urate goal' },
        { term: 'HLA-B*5801', definition: 'Genetic allele associated with severe allopurinol hypersensitivity in Asian populations' },
        { term: 'dactylitis', definition: 'Sausage-like swelling of entire digit; seen in psoriatic arthritis, not gout' },
        { term: 'hemarthrosis', definition: 'Blood in the joint space; usually from trauma' },
        { term: 'prophylaxis', definition: 'Treatment given to prevent disease or flare before it occurs' },
      ],
      clinicalNotes: 'Septic arthritis can coexist with crystal arthritis. If Gram stain is positive or clinical suspicion is high, treat for septic arthritis regardless of crystal findings. Crystal identification does not exclude infection.',
    },
    4: {
      level: 4,
      summary: 'Gout management requires integrating cardiovascular risk, comorbidity management, individualized ULT selection, and recognition of refractory disease while addressing the complex relationship between hyperuricemia and metabolic syndrome.',
      explanation: `## Advanced Pathophysiology

**Uric Acid Metabolism:**
- Production: Purine catabolism → hypoxanthine → xanthine → uric acid
- Xanthine oxidase catalyzes final two steps
- Renal handling: 90% filtered, 90% reabsorbed (URAT1 transporter)
- Gut elimination via uricase (inactive in humans due to mutation)

**Genetics of Gout:**
- Heritability ~40%
- SLC2A9, ABCG2, URAT1 gene variants
- Polygenic risk scores being developed
- Explains racial/ethnic differences in prevalence

**Hyperuricemia as a Cardiovascular Risk Factor:**
\`\`\`
Observational data: Associated with HTN, CKD, CVD, mortality
Mendelian randomization: Causal relationship uncertain
Treatment implications: Treat gout, not asymptomatic hyperuricemia
\`\`\`

## Difficult-to-Treat Gout

**Definition: Failure to achieve:**
- Serum urate <6 mg/dL on appropriate ULT
- Freedom from flares
- Resolution of tophi

**Refractory Gout: Failure of ≥2 ULTs at maximum dose**

**Management:**
1. **Confirm adherence:** Check serum urate, pharmacy refill data
2. **Optimize allopurinol:** Many under-dosed; push to maximum tolerated
3. **Switch ULT:** Allopurinol → Febuxostat → Probenecid (or combination)
4. **Consider pegloticase:** Recombinant uricase for refractory tophaceous gout

**Pegloticase:**
- IV infusion every 2 weeks
- Indication: Refractory tophaceous gout
- Rapid tophi resolution, urate normalization
- Anaphylaxis risk (premedicate, monitor)
- Infusion reactions in 40-50%
- Loss of response with anti-drug antibodies
- Check serum urate before each infusion

## Comorbidity-Integrated Management

**Gout and Cardiovascular Disease:**
- Gout associated with 1.5-2x increased CV events
- Allopurinol may have CV protective effect (observational)
- Febuxostat: CARES trial showed increased CV mortality vs allopurinol
- FAST trial: No difference between allopurinol and febuxostat
- Practice: Prefer allopurinol in patients with CVD

**Gout and Chronic Kidney Disease:**
\`\`\`
Bidirectional relationship:
- CKD → reduced urate excretion → hyperuricemia → gout
- Hyperuricemia → renal vasoconstriction, inflammation → CKD progression

Management in CKD:
- Allopurinol: Dose adjust to eGFR (but may tolerate higher than guidelines)
- Febuxostat: No dose adjustment to eGFR 30-89
- Avoid NSAIDs for acute treatment
- Colchicine: Dose reduction required
- Steroids: Preferred for acute flares in advanced CKD
\`\`\`

**Drug Interactions:**
| Drug | Interaction with ULT | Management |
|------|---------------------|------------|
| Azathioprine, 6-MP | Allopurinol inhibits xanthine oxidase | Contraindicated (toxicity) |
| Warfarin | Allopurinol potentiates | Monitor INR closely |
| Ampicillin, Amoxicillin | Allopurinol increases rash | Consider alternative |
| ACEi/ARBs | May increase uric acid | Continue; don't change |

## Special Populations

**Gout in Transplant Patients:**
- High prevalence (cyclosporine, tacrolimus reduce urate excretion)
- Difficult to treat (drug interactions)
- Febuxostat often preferred (less interactions)
- Avoid azathioprine with allopurinol

**Gout in Pregnancy:**
- Limited ULT options
- Continue colchicine if benefit > risk
- Acute flares: Prednisone preferred
- Surgical drainage if single joint (avoid systemic meds)

**Asymptomatic Hyperuricemia:**
\`\`\`
Consensus: Do NOT treat
- Most never develop gout
- No proven benefit of ULT
- Focus on lifestyle, CV risk management
- Treat if undergoing chemotherapy (tumor lysis prevention)
\`\`\`

## Pseudogout: Advanced Concepts

**CPPD Disease Phenotypes:**
1. **Pseudogout:** Acute inflammatory arthritis
2. **Pseudo-RA:** Chronic symmetric polyarthritis
3. **Pseudo-OA:** Progressive degenerative arthritis
4. **Pseudoneuropathic:** Spinal stenosis-like presentation

**Genetic forms:**
- Familial CPPD: Rare, autosomal dominant
- Associated with ANKH gene mutations
- Early onset (before age 50)

**Treatment Challenges:**
- No equivalent to ULT for gout
- Recurrent flares: Chronic low-dose colchicine
- Severe destructive disease: Consider anakinra (IL-1 blockade)`,
      keyTerms: [
        { term: 'URAT1', definition: 'Renal transporter responsible for uric acid reabsorption; target of investigational gout drugs' },
        { term: 'Mendelian randomization', definition: 'Genetic epidemiology method to assess causal relationships' },
        { term: 'CARES trial', definition: 'Cardiovascular safety study of febuxostat vs allopurinol showing increased mortality with febuxostat' },
        { term: 'pegloticase', definition: 'Recombinant uricase enzyme; converts uric acid to allantoin for refractory gout' },
        { term: 'anakinra', definition: 'IL-1 receptor antagonist; used off-label for refractory crystal arthritis' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. In renal transplant patients on azathioprine, febuxostat is preferred over allopurinol (drug interaction)

2. Don't stop ULT during acute gout flare - continue and treat the flare

3. Febuxostat carries a boxed warning for cardiovascular death; prefer allopurinol in patients with known CVD

4. Black patients have higher risk of allopurinol hypersensitivity; consider HLA-B*5801 screening or alternative agents

5. Pegloticase can be transformative for tophaceous gout but requires commitment to biweekly IV infusions and careful monitoring

6. Asymptomatic hyperuricemia should NOT be treated with pharmacologic therapy - focus on lifestyle and cardiovascular risk management`,
    },
    5: {
      level: 5,
      summary: 'State-of-the-art gout care incorporates precision medicine with genetic screening, novel uricosurics, combination ULT strategies, and emerging therapies targeting renal transporters and inflammatory pathways while implementing cardiovascular-safe treatment algorithms.',
      explanation: `## Precision Medicine in Crystal Arthropathies

**Pharmacogenomics:**

\`\`\`
HLA-B*5801 Screening:
- Strong association with allopurinol hypersensitivity syndrome (SJS/TEN)
- Allele frequency: Han Chinese 8-10%, Southeast Asian 4-8%, European 1-2%
- Recommendation: Screen high-risk populations before starting allopurinol
- Cost-effectiveness established in Asian populations

ABCG2 Variants (Q141K):
- Associated with gout risk and earlier onset
- Influences uric acid excretion
- May affect response to uricosuric agents
- More common in Asian populations

SLC2A9 (GLUT9):
- Major urate transporter gene
- Variants influence serum urate levels
- Target for future uricosuric development
\`\`\`

## Emerging and Novel Therapies

**New Urate-Lowering Agents:**

| Agent | Mechanism | Status | Key Points |
|-------|-----------|--------|------------|
| Lesinurad | URAT1 inhibitor | FDA approved (with xanthine oxidase inhibitor) | Must be combined; nephrotoxicity risk |
| Dotinurad | Selective URAT1 inhibitor | Japan approved | Potent, well-tolerated |
| Verinurad | URAT1 inhibitor | Phase 3 | Single-agent efficacy |
| Arhalofenate | Dual URAT1/anti-inflammatory | Phase 2 | Unique dual mechanism |

**Recombinant Uricase Evolution:**
- Pegloticase: IV every 2 weeks, high immunogenicity
- Pegadricase (SPEG-UG): Subcutaneous weekly (Phase 3)
- SEL-212: Immune tolerance induction (Phase 2)

**Anti-Inflammatory Approaches:**

\`\`\`
IL-1 Inhibition (approved for gout flares):
- Anakinra: Daily SC injections
- Rilonacept: Weekly SC injections
- Canakinumab: Single SC dose (available outside US)

Targeted Synovitis:
- JAK inhibitors (for refractory gouty arthritis)
- IL-6 blockade (investigational)

Future directions:
- NLRP3 inflammasome inhibitors
- Colchicine-sparing anti-inflammatory approaches
\`\`\`

## Evidence-Based Treatment Algorithms

**2022 ACR Guidelines Highlights:**

\`\`\`
ULT Initiation:
- Strongly recommend for: tophi, frequent flares (≥2/year), CKD stage ≥3, urate stones
- Conditionally recommend for: first flare with hyperuricemia and comorbidities
- Against treating: asymptomatic hyperuricemia

ULT Selection:
- Start allopurinol (over febuxostat) for CVD patients
- Use HLA-B*5801-guided therapy in high-risk populations
- Febuxostat alternative if allopurinol contraindicated or not tolerated

Acute Gout:
- Treat within 24 hours of symptom onset
- Continue ULT through acute flare
- Maximal anti-inflammatory dosing (under-dosing common error)

Treat-to-Target:
- Serum urate <6 mg/dL for most patients
- Serum urate <5 mg/dL for tophaceous gout
- Monitor every 2-5 weeks until target, then every 6 months
\`\`\`

## Cardiovascular Safety Controversies

**The Febuxostat Controversy:**
\`\`\`
CARES Trial (2018):
- Increased CV death vs allopurinol (HR 1.34)
- Flawed design: high allopurinol discontinuation, open-label
- Led to boxed warning

FAST Trial (2020):
- No difference in CV events vs allopurinol
- Better adherence to protocol
- Reassuring but didn't fully reassure

Current Practice:
- First-line: allopurinol (especially if CVD)
- Febuxostat: alternative if allopurinol not appropriate
- Shared decision-making essential
- Don't switch stable patients on febuxostat
\`\`\`

## Quality Improvement and Implementation

**Gout Care Quality Metrics:**
- Serum urate monitoring
- Achievement of target urate
- ULT adherence
- Flare frequency reduction
- Tophi resolution
- Cardiovascular risk assessment

**Implementation Strategies:**
- Nurse-led gout clinics
- Pharmacist medication titration
- Electronic health record decision support
- Patient education programs
- Shared decision-making tools

## Future Directions

**Disease Interception:**
- Treating asymptomatic hyperuricemia in high-risk patients? (under study)
- Preventing first gout attack in those with high urate
- Lifestyle intervention trials

**Combination ULT:**
\`\`\`
Rationale:
- Additive urate-lowering effect
- Lower doses of each agent
- Potential to reach lower targets

Evidence:
- Lesinurad + allopurinol/febuxostat (approved)
- Verinurad + febuxostat (Phase 3)
- Probenecid + xanthine oxidase inhibitor (common practice)

Monitoring:
- Renal function (combination nephrotoxicity risk)
- Serum urate targets reached more quickly
\`\`\`

**Biomarker Development:**
- Ultrasound double contour sign for early detection
- DECT CT quantification of urate burden
- Serum urate variability as treatment target
- Inflammatory biomarkers during flares`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response; guides personalized medication selection' },
        { term: 'URAT1 inhibitor', definition: 'Drug class blocking renal uric acid reabsorption; enhances uric acid excretion' },
        { term: 'NLRP3 inflammasome', definition: 'Intracellular complex sensing crystals; triggers IL-1β release and inflammation' },
        { term: 'dual mechanism', definition: 'Drugs with two therapeutic actions; e.g., arhalofenate lowers urate and reduces inflammation' },
      ],
      clinicalNotes: `Advanced Clinical Practice Points:

1. The "start low, go slow" approach to allopurinol is outdated - start 100mg and titrate aggressively to target (every 2-4 weeks)

2. Don't let the perfect be the enemy of the good - allopurinol 300mg daily (often the maximum prescribed) is inadequate for many patients; push to maximum tolerated

3. Gout is a quality measure in many healthcare systems - ensure documentation of serum urate monitoring and target achievement

4. For patients with refractory gout, don't forget to optimize comorbidities - CKD, diuretic use, and alcohol intake all contribute

5. The future of gout includes subcutaneous uricase (convenience), combination ULT (better efficacy), and potentially disease interception

6. When interpreting imaging for gout, remember that DECT CT can miss small urate deposits and ultrasound is operator-dependent

7. Consider non-adherence before declaring treatment failure - pharmacy fill data and random serum urate levels can be revealing`,
    },
  },

  media: [
    {
      id: 'gout-msu-crystal',
      type: 'diagram',
      filename: 'gout-msu-crystal.svg',
      title: 'Monosodium Urate Crystal Under Polarized Microscopy',
      description: 'Needle-shaped MSU crystals showing negative birefringence',
    },
    {
      id: 'gout-podagra',
      type: 'diagram',
      filename: 'gout-podagra.svg',
      title: 'Podagra - Gout of the First MTP Joint',
      description: 'Clinical appearance of acute gout affecting the big toe',
    },
    {
      id: 'pseudogout-chondrocalcinosis',
      type: 'diagram',
      filename: 'pseudogout-chondrocalcinosis.svg',
      title: 'Chondrocalcinosis in Pseudogout',
      description: 'X-ray findings of cartilage calcification in CPPD',
    },
  ],

  citations: [
    {
      id: 'acr-gout-2020',
      type: 'article',
      title: '2020 American College of Rheumatology Guideline for the Management of Gout',
      authors: ['FitzGerald JD', 'Dalbeth N', 'Mikuls T', 'et al.'],
      source: 'Arthritis Care & Research',
    },
    {
      id: 'acr-gout-2022',
      type: 'article',
      title: '2022 American College of Rheumatology Guideline for the Management of Gout',
      authors: ['Qasim A', 'Soden M', 'Cush J'],
      source: 'Arthritis Rheumatol',
    },
  ],

  crossReferences: [
    { targetId: 'conditions-osteoarthritis', targetType: 'condition', relationship: 'sibling', label: 'Osteoarthritis' },
    { targetId: 'conditions-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
  ],

  tags: {
    systems: ['musculoskeletal', 'renal', 'immune'],
    topics: ['rheumatology', 'crystal-induced-arthritis', 'metabolic-disorders'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'rheumatology'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gout;
