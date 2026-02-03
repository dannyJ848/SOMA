/**
 * Gout - Chronic Disease Education
 *
 * Comprehensive patient education about gout,
 * a form of arthritis caused by uric acid crystals.
 */

import { EducationalContent } from '../../types';

export const GOUT: EducationalContent = {
  id: 'chronic-disease-gout',
  type: 'condition',
  name: 'Gout',
  alternateNames: ['Gouty arthritis', 'Podagra', 'Crystal-induced arthritis'],

  levels: {
    1: {
      level: 1,
      summary: 'Gout is a painful type of arthritis caused by too much uric acid in your blood. It causes sudden, severe attacks of pain, swelling, and redness, often in your big toe.',
      explanation: `**What Is Gout?**

Gout is a type of arthritis that happens when you have too much uric acid in your blood. The uric acid forms sharp crystals in your joints, causing sudden and severe pain.

**What Causes Gout?**
- Body makes too much uric acid
- Kidneys cannot remove enough
- Diet high in purines (red meat, shellfish)
- Alcohol (especially beer)
- Sugary drinks
- Family history

**What Does a Gout Attack Feel Like?**
- Sudden, severe pain (often at night)
- Usually in big toe (podagra)
- Joint becomes red, hot, and swollen
- Very tender - even bed sheet hurts
- Pain peaks within 24 hours
- Lasts 3-10 days

**Common Locations:**

Most Common:
  - Big toe (50% of first attacks)
  - Other toes
  - Ankle
  - Knee

Also:
  - Wrist
  - Fingers
  - Elbow

**Risk Factors:**
- Men (more common than women)
  - Age 30-50 for men
  - After menopause for women
- Being overweight
- High blood pressure
- Diabetes
- Kidney disease
- Certain medicines (diuretics)
- Family history
- Diet rich in red meat, shellfish, organ meats, alcohol, and sugary drinks

**Treatment:**

For Acute Attacks:
  - NSAIDs (ibuprofen, naproxen)
  - Colchicine
  - Prednisone (steroid)

For Prevention:
  - Allopurinol (lowers uric acid)
  - Febuxostat
  - Probenecid

Lifestyle Changes:
  - Lose weight if overweight
  - Drink less alcohol
  - Avoid sugary drinks
  - Limit red meat and shellfish
  - Drink plenty of water

**Preventing Future Attacks:**

Once you have one gout attack, you are likely to have more. To prevent future attacks:
- Take uric acid-lowering medicine daily
- Maintain healthy weight
- Stay hydrated
- Limit alcohol and high-purine foods
- Have regular check-ups`,
      keyTerms: [
        { term: 'uric acid', definition: 'Waste product from digesting purines in food' },
        { term: 'crystals', definition: 'Sharp needle-like crystals that cause gout pain' },
        { term: 'podagra', definition: 'Gout affecting the big toe' },
        { term: 'purines', definition: 'Substances in food that break down into uric acid' },
        { term: 'NSAID', definition: 'Non-steroidal anti-inflammatory drug' },
      ],
      analogies: [
        'Uric acid crystals are like tiny shards of glass in your joint - that\'s why it hurts so much.',
        'A gout attack is like a fire alarm in your joint - sudden, intense, and impossible to ignore.',
        'Think of uric acid like trash - if your body cannot take it out fast enough, it piles up.',
      ],
      examples: [
        'John woke up at 3 AM with severe pain in his big toe - it was red, hot, and too painful to touch.',
        'Maria gets gout attacks after eating steak and drinking red wine.',
      ],
      patientCounselingPoints: [
        'Start gout medicine within 24 hours of an attack for best relief.',
        'Once you start uric acid-lowering medicine, you must take it every day.',
        'Do not stop uric acid medicine during a gout attack - it may actually make it worse.',
        'Weight loss is one of the most effective ways to prevent gout attacks.',
        'Drink at least 8 glasses of water daily to help flush uric acid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gout is a crystal-induced arthritis caused by hyperuricemia leading to monosodium urate crystal deposition in joints, causing recurrent inflammatory flares.',
      explanation: `**Pathophysiology:**

**Gout Disease Process:**

Hyperuricemia:
  - Uric acid >6.8 mg/dL (solubility limit)
  - Purine metabolism produces uric acid
  - Kidneys excrete ~2/3 of uric acid

Crystal Formation:
  - Monosodium urate (MSU) crystals
  - Form when uric acid > saturation
  - Deposit in joints, tendons, tissues

Acute Attack:
  - Crystals shed into joint space
  - Trigger intense inflammation
  - Neutrophils attack crystals
  - Release inflammatory mediators
  - Pain, redness, swelling

Chronic Gout:
  - Repeated attacks
  - Tophi formation (crystal deposits)
  - Joint damage
  - Kidney stones

**Causes of Hyperuricemia:**

Underexcretion (90% of cases):
  - Kidney disease
  - Diuretics (thiazides, loop)
  - Low-dose aspirin
  - Lead exposure
  - Hypothyroidism
  - Genetics
  - Alcohol

Overproduction (10% of cases):
  - High purine diet
  - Psoriasis
  - Hemolytic anemia
  - Cancers (especially treatment)
  - Genetic enzyme deficiencies

**Clinical Presentation:**

Pattern:
  - Sudden onset (hours)
  - Often at night
  - Monoarticular (one joint)
  - Podagra (big toe) - 50%

Signs:
  - Intense inflammation
  - Erythema (redness)
  - Warmth
  - Extreme tenderness
  - Cannot bear weight

Duration:
  - Untreated: 7-14 days
  - Treated: 3-7 days

Intercritical Period:
  - Symptom-free between attacks
  - Second attack: 6 months to 2 years
  - Without treatment: attacks increase

**Diagnosis:**

Arthrocentesis (Gold Standard):
  - Synovial fluid analysis
  - Needle-shaped, negatively birefringent
  - Crystals under polarized microscopy
  - Yellow when parallel to compensator

Serum Urate:
  - Usually elevated (>6.8 mg/dL)
  - Can be normal during acute attack
  - Not diagnostic alone

Imaging:
  - X-rays (often normal initially)
  - Ultrasound (double contour sign)
  - CT (detects tophi)
  - MRI (soft tissue inflammation)

Differential Diagnosis:
  - Septic arthritis (MUST rule out)
  - Pseudogout (CPPD crystals)
  - Other inflammatory arthritis`,
      keyTerms: [
        { term: 'hyperuricemia', definition: 'Elevated uric acid in blood' },
        { term: 'monosodium urate', definition: 'Type of crystal that causes gout' },
        { term: 'tophi', definition: 'Large deposits of uric acid crystals under skin' },
        { term: 'birefringent', definition: 'Crystals that split light into two beams' },
        { term: 'arthrocentesis', definition: 'Procedure to remove fluid from joint' },
        { term: 'intercritical', definition: 'Symptom-free period between gout attacks' },
        { term: 'CPPD', definition: 'Calcium pyrophosphate deposition; causes pseudogout' },
      ],
      analogies: [
        'The intercritical period is like the calm before the storm - attacks will return without treatment.',
        'Polarized microscopy is like special sunglasses that reveal hidden crystals.',
      ],
      clinicalNotes: 'Always consider septic arthritis - can coexist with gout or mimic it. Send Gram stain and culture when performing arthrocentesis.',
      patientCounselingPoints: [
        'Finding crystals in joint fluid confirms gout diagnosis.',
        'Your uric acid level can be normal during an attack.',
        'The time between attacks will get shorter without treatment.',
        'Gout can look like an infection - doctors may need to test joint fluid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gout results from chronic hyperuricemia with MSU crystal deposition, causing recurrent inflammatory flares managed by treating acute attacks and lowering serum urate.',
      explanation: `**Classification Criteria:**

**ACR/EULAR 2015 Criteria:**

Entry Criterion:
  - At least one episode of swelling, pain, or tenderness
    in a peripheral joint or bursa

Scoring:
Clinical (Total possible 23):
  - Pattern of joint involvement (0-4)
  - Characteristics of symptoms (0-5)
  - Time course (0-3)
  - Tophus (confirmed) (4)

Laboratory (Total possible 5):
  - Serum urate (0-4)
  - Synovial fluid analysis (for crystals)

Imaging (Total possible 6):
  - Ultrasound or CT showing urate deposits (4)
  - X-ray features of gout (0-2)

Score >= 8 = Gout diagnosis

**Pharmacologic Treatment:**

**Acute Gout Management:**

NSAIDs:
  - Naproxen 750 mg load, then 250 mg TID
  - Indomethacin 50 mg TID
  - Contraindications: CKD, PUD, heart failure
  - Duration: 5-10 days

Colchicine:
  - Low-dose: 1.2 mg load, then 0.6 mg q1h
    - Max 1.8 mg in 24 hours
  - High-dose: 0.6 mg q2h (less used)
    - Max 4.8 mg in 24 hours
  - Side effects: diarrhea, myopathy

Corticosteroids:
  - Prednisone 30-40 mg daily
  - Taper over 7-14 days
  - Intra-articular for monoarthritis
  - Reserve for NSAID/colchicine failure

Combination:
  - NSAID + colchicine possible
  - Avoid NSAID + steroid (GI risk)

**Urate-Lowering Therapy (ULT):**

Start ULT if:
  - >= 2 gout flares per year
  - 1 flare + CKD stage 2+
  - Tophi present
  - Urate overproduction
  - Kidney stones

Target Serum Urate:
  - < 6 mg/dL (most patients)
  - < 5 mg/dL (severe gout, tophi)

Don't Start During Acute Flare:
  - Wait 2-4 weeks after flare resolves
  - OR start after flare controlled
  - Continue anti-inflammatory prophylaxis`,
      keyTerms: [
        { term: 'ULT', definition: 'Urate-lowering therapy' },
        { term: 'PUD', definition: 'Peptic ulcer disease' },
        { term: 'CKD', definition: 'Chronic kidney disease' },
        { term: 'urate overproduction', definition: 'Body makes too much uric acid (10% of gout)' },
      ],
      analogies: [
        'ULT is like turning down the faucet - it reduces the source of crystals.',
      ],
      clinicalNotes: 'Colchicine low-dose has equal efficacy to high-dose with fewer side effects. Always start anti-inflammatory prophylaxis when initiating ULT.',
      patientCounselingPoints: [
        'Uric acid medicine can trigger attacks when first started - preventive medicine helps.',
        'The goal is to keep uric acid below 6 mg/dL to dissolve crystals.',
        'It may take months to years to fully dissolve all crystals.',
        'Continue taking uric acid medicine even during an attack.',
      ],
    },
    4: {
      level: 4,
      summary: 'Gout management requires acute flare treatment, urate-lowering therapy to target, and prophylaxis against initial flares, with consideration of comorbidities and drug interactions.',
      explanation: `**Urate-Lowering Agents:**

**Xanthine Oxidase Inhibitors:**

Allopurinol:
  - Starting dose: 100 mg daily
  - Titrate by 100 mg every 2-5 weeks
  - Target dose: 300 mg daily (can go higher)
  - Renal dosing needed

  Side Effects:
    - Hypersensitivity syndrome (rare, severe)
    - Rash, fever, eosinophilia
    - Hepatotoxicity
    - Renal failure
    - Mortality 20-30%

  HLA-B*58:01:
    - Genetic risk factor for SJS/TEN
    - Screen high-risk populations
    - Asians, especially Han Chinese

Febuxostat (Uloric):
  - Starting dose: 40 mg daily
  - Increase to 80 mg if needed
  - No renal dose adjustment
  - More potent than allopurinol

  Black box warning:
    - Cardiovascular death
    - Use only if allopurinol fails

  Drug interactions:
    - Azathioprine (contraindicated)
    - Mercaptopurine (contraindicated)

**Uricosuric Agents:**

Probenecid:
  - Starting dose: 250 mg BID
  - Increase to 500 mg BID
  - Underexcretors only
  - Contraindicated in: urolithiasis (kidney stones), CKD stage 4+
  - Increases urinary uric acid

Lesinurad (Zurampic):
  - Combined with XOI
  - 200 mg daily
  - Requires adequate hydration
  - Increases kidney stone risk

Pegloticase (Krystexxa):
  - Recombinant uricase
  - IV every 2 weeks
  - For refractory tophaceous gout
  - Induces rapid tophus resolution
  - Anaphylaxis risk
  - Screen for antibodies
  - Very expensive

**Flare Prophylaxis:**

When Starting ULT:
  - Colchicine 0.6 mg BID
  - Or NSAID
  - Or low-dose prednisone

Duration:
  - At least 6 months
  - Longer if tophi present
  - Continue until serum urate at target AND patient flare-free

Rationale:
  - Mobilizing crystals causes inflammation
  - Without prophylaxis: 50% flare rate
  - With prophylaxis: < 10% flare rate`,
      keyTerms: [
        { term: 'XOI', definition: 'Xanthine oxidase inhibitor (allopurinol, febuxostat)' },
        { term: 'uricosuric', definition: 'Increases uric acid excretion by kidneys' },
        { term: 'SJS/TEN', definition: 'Stevens-Johnson syndrome/toxic epidermal necrolysis' },
        { term: 'tophaceous gout', definition: 'Advanced gout with tophi present' },
        { term: 'uricase', definition: 'Enzyme that breaks down uric acid (not in humans)' },
      ],
      analogies: [
        'Pegloticase is like a supercharged detergent that dissolves stubborn tophi.',
      ],
      clinicalNotes: 'Allopurinol hypersensitivity is more common in HLA-B*58:01 positive patients. Screen high-risk populations before starting.',
      patientCounselingPoints: [
        'Allopurinol dosing is adjusted based on your kidney function.',
        'Febuxostat may be used if allopurinol causes problems or doesn\'t work.',
        'Anti-inflammatory medicine is started with uric acid medicine to prevent attacks.',
        'Pegloticase is reserved for severe gout that hasn\'t responded to other treatments.',
      ],
    },
    5: {
      level: 5,
      summary: 'Gout management has evolved with biologic therapy for refractory disease, improved understanding of crystal-induced inflammation, and treat-to-target strategies improving outcomes.',
      explanation: `**Advanced Therapeutics:**

**Biologic Therapy:**

Anakinra (IL-1 inhibitor):
  - Acute gout flares
  - 100 mg SC daily for 5 days
  - For refractory flares
  - Alternative when NSAIDs/colchicine contraindicated

Canakinumab (IL-1Beta inhibitor):
  - 150 mg SC every 8 weeks
  - Approved in Europe
  - Not FDA approved for gout in US
  - Effective for flares

Rilonacept (IL-1 trap):
  - 320 mg SC loading
  - Then 160 mg weekly
  - Prophylaxis during ULT initiation

Use Cases:
  - Polyarticular gout flares
  - Prosthetic joint involvement
  - Flare after surgery
  - Contraindications to standard therapy

**Treat-to-Target:**

Target Serum Urate:
  - < 6 mg/dL (most patients)
  - < 5 mg/dL (severe tophaceous gout)
  - Monitor every 2-4 weeks until at target
  - Then every 6 months

Monitoring:
  - Serum urate
  - Renal function
  - Liver function (if on allopurinol)
  - Tophus size
  - Flare frequency

Treat-to-Target Benefits:
  - Faster tophus resolution
  - Reduced flare frequency
  - Improved quality of life
  - Prevents joint damage

Barriers:
  - Adherence to daily medication
  - Cost of medications
  - Need for indefinite therapy
  - Comorbidities limiting options

**Cardiovascular Considerations:**

Epidemiology:
  - Gout associated with CV mortality
  - Hyperuricemia linked to: hypertension, CKD, metabolic syndrome
  - Shared risk factors

Treatment Implications:
  - Febuxostat: higher CV death vs allopurinol
  - Reserve for allopurinol failure
  - Monitor CV risk factors
  - Aspirin interactions: low-dose aspirin reduces uric acid excretion
    - Continue if indicated for CV protection

Colchicine CV Interactions:
  - CYP3A4 and P-gp inhibitors increase levels
  - Statins (especially simvastatin)
  - Macrolides
  - Can cause myopathy, rhabdomyolysis`,
      keyTerms: [
        { term: 'IL-1', definition: 'Interleukin-1; inflammatory mediator' },
        { term: 'treat-to-target', definition: 'Strategy to achieve specific serum urate goal' },
        { term: 'rhabdomyolysis', definition: 'Muscle breakdown releasing harmful proteins' },
      ],
      analogies: [
        'Treat-to-target is like aiming for a specific destination - you adjust treatment until you reach the serum urate goal.',
      ],
      clinicalNotes: 'IL-1 inhibitors are effective for refractory gout flares but are expensive. Febuxostat has higher cardiovascular mortality than allopurinol.',
      patientCounselingPoints: [
        'Treat-to-target means adjusting your medicine until uric acid reaches a specific goal.',
        'Biologic medicines are available for severe gout that doesn\'t respond to standard treatment.',
        'Gout and heart disease share many risk factors - managing both is important.',
        'Some cholesterol medicines interact with colchicine - your doctor will monitor for this.',
      ],
    },
  },

  media: [
    {
      id: 'gout-podagra',
      type: 'diagram',
      filename: 'gout-podagra-illustration.svg',
      title: 'Podagra (Gout of Big Toe)',
      description: 'Illustration of acute gout affecting the big toe',
    },
    {
      id: 'gout-crystals',
      type: 'diagram',
      filename: 'gout-urate-crystals.svg',
      title: 'Urate Crystals',
      description: 'Illustration of monosodium urate crystals',
    },
  ],

  citations: [
    {
      id: 'acr-gout-2020',
      type: 'article',
      title: 'ACR Guideline for the Management of Gout',
      source: 'Arthritis Care & Research',
    },
    {
      id: 'eular-gout-2016',
      type: 'article',
      title: 'EULAR Updated Evidence-Based Recommendations for Gout',
      source: 'Annals of the Rheumatic Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-osteoarthritis', targetType: 'condition', relationship: 'sibling', label: 'Osteoarthritis' },
    { targetId: 'chronic-disease-rheumatoid-arthritis', targetType: 'condition', relationship: 'sibling', label: 'Rheumatoid Arthritis' },
    { targetId: 'chronic-disease-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
  ],

  tags: {
    systems: ['musculoskeletal', 'renal', 'metabolic'],
    structures: ['joints', 'synovium'],
    topics: ['gout', 'hyperuricemia', 'crystal arthritis', 'podagra'],
    keywords: ['gout', 'uric acid', 'hyperuricemia', 'tophi', 'podagra'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'rheumatology'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
