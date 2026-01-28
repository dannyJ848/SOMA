/**
 * Gout
 *
 * Inflammatory arthritis caused by uric acid crystal deposition.
 */

import { EducationalContent } from '../../types';

export const goutContent: EducationalContent = {
  id: 'rheumatology-gout',
  type: 'topic',
  name: 'Gout',
  alternateNames: ['Gouty Arthritis', 'Podagra', 'Crystal-Induced Arthritis'],

  levels: {
    1: {
      level: 1,
      summary: "Gout is a type of arthritis that causes sudden, severe attacks of pain, swelling, and redness in joints. It happens when uric acid crystals form in your joints.",
      explanation: `## What Is Gout?

Gout is a form of arthritis that causes intense pain, swelling, and stiffness in a joint. It happens when needle-like crystals of uric acid form in your joints.

## What Does a Gout Attack Feel Like?

**Sudden and Severe:**
- Often starts at night
- Intense pain (like your joint is on fire)
- Joint becomes very tender
- Swelling, redness, warmth
- Hard to walk or move the joint

**Most Common Location:**
- Big toe (called podagra)
- Also affects: ankle, knee, foot, elbow, wrist, fingers

**Duration:**
- Most severe: First 12-24 hours
- Discomfort: Days to weeks
- Between attacks: Normal

## What Causes Gout?

**Uric Acid Buildup:**
- Body makes too much uric acid
- Or kidneys don't remove enough
- Uric acid forms sharp crystals
- Crystals cause inflammation and pain

**Risk Factors:**
- Diet (red meat, shellfish, alcohol)
- Being overweight
- Certain medications (diuretics)
- Family history
- Kidney disease
- High blood pressure
- Diabetes

## Treatment

**During an Attack:**
- Anti-inflammatory medicines (NSAIDs, colchicine, steroids)
- Rest the joint
- Ice packs
- Drink lots of water

**Preventing Attacks:**
- Medications to lower uric acid
- Avoid trigger foods
- Lose weight if overweight
- Limit alcohol
- Stay hydrated`,

      keyTerms: [
        { term: 'Uric acid', definition: 'Waste product from digesting certain foods' },
        { term: 'Podagra', definition: 'Gout affecting the big toe joint' },
        { term: 'Crystals', definition: 'Sharp particles that form in joints causing gout' },
        { term: 'NSAIDs', definition: 'Anti-inflammatory medicines like ibuprofen' },
      ],
      analogies: [
        'Uric acid crystals are like tiny shards of glass in your joint.',
        "A gout attack is like stepping on a tack that won't go away.",
      ],
      examples: [
        'Man wakes at 3am with severe big toe pain',
        'Person with red, swollen, tender big toe',
        'Someone who eats steak and drinks wine then gets toe pain',
      ],
    },

    2: {
      level: 2,
      summary: 'Gout is caused by hyperuricemia leading to monosodium urate crystal deposition. First MTP is most commonly affected. Diagnosis by aspiration showing negatively birefringent crystals.',
      explanation: `## Pathophysiology

**Hyperuricemia:**
- Uric acid >6.8 mg/dL (saturation point)
- Most hyperuricemic patients never develop gout
- Requires: Supersaturation + crystal formation + inflammation

**Crystal Formation:**
- Monosodium urate (MSU) crystals
- Preferentially deposit in cooler areas (peripheral joints)
- Trigger NLRP3 inflammasome
- IL-1β release causes inflammation

## Clinical Presentation

**Classic Acute Gout:**
- Sudden onset (often nocturnal)
- First MTP joint (podagra) - 50%
- Red, hot, swollen, extremely tender
- Patient may report "can't even bed sheets touch it"

**Other Common Sites:**
- Midtarsal joints, ankle, knee
- Less common: wrist, elbow, fingers
- Olecranon bursa, Achilles tendon

**Chronic Tophaceous Gout:**
- Tophi (crystal deposits)
- Joint destruction
- Chronic arthritis
- Usually >10 years of untreated gout

## Diagnosis

**Gold Standard:**
- Arthrocentesis with synovial fluid analysis
- Negatively birefringent crystals (yellow when parallel to polarizer)
- WBC count usually 2,000-50,000/μL

**Supportive:**
- Serum urate >6.8 mg/dL (may be normal during flare)
- Ultrasound: Double contour sign
- DECT: Shows urate deposits
- X-ray: Normal early, erosions later

**Clinical Diagnosis (aspiration not possible):**
- Podagra + 1 of: redness, swelling, unilateral, maximal within 24h
- Or any joint with 3+ typical features`,

      keyTerms: [
        { term: 'Monosodium urate', definition: 'Type of uric acid crystal that causes gout' },
        { term: 'Birefringent', definition: 'Crystals that split light - used to identify under microscope' },
        { term: 'Tophi', definition: 'Hard lumps of uric acid crystals under skin' },
        { term: 'Arthrocentesis', definition: 'Removing fluid from joint with needle' },
      ],
      analogies: [
        'Negatively birefringent crystals appear yellow when aligned one way under polarized light.',
        'Tophi are like little gravel deposits under the skin.',
      ],
      examples: [
        'Patient with sudden first MTP pain and redness - podagra',
        'Aspiration shows needle-shaped crystals that are yellow when parallel',
        'Chronic gout patient with tophi on fingers and ears',
      ],
      clinicalNotes: "Serum urate may be NORMAL during acute flare (inflammatory cytokines decrease renal excretion). Don't diagnose gout based solely on serum urate. Aspiration is definitive. Consider septic arthritis in differential - always rule out!",
    },

    3: {
      level: 3,
      summary: 'Acute gout treated with NSAIDs, colchicine, or glucocorticoids. Urate-lowering therapy (allopurinol, febuxostat) initiated after acute attack resolves for recurrent gout.',
      explanation: `## Acute Gout Treatment

**NSAIDs:**
- Naproxen 500mg BID
- Indomethacin 50mg TID
- Continue for 3-5 days after symptom resolution
- Contraindications: CKD, PUD, anticoagulation

**Colchicine:**
- Low dose: 1.2mg load, then 0.6mg 1h later
- Then 0.6mg BID until resolved
- High dose no more effective, more GI side effects
- Dose adjust in renal impairment

**Glucocorticoids:**
- Prednisone 30-40mg daily for 5-10 days
- Taper over 1-2 weeks
- Intra-articular: For single joint involvement

## Urate-Lowering Therapy (ULT)

**Indications:**
- ≥2 gout flares per year
- Tophi
- Chronic gouty arthritis
- Joint damage
- Urolithiasis
- Very high serum urate (>12 mg/dL)

**Allopurinol:**
- First-line ULT
- Xanthine oxidase inhibitor
- Starting dose: 100mg daily (lower if CKD)
- Titrate to goal urate <6 mg/dL
- HLA-B*5801 testing: Asian populations (SJS/TEN risk)

**Febuxostat:**
- Xanthine oxidase inhibitor
- More potent than allopurinol
- 40-80mg daily
- No dose adjustment for CKD
- CV warning (similar to allopurinol)

**Probenecid:**
- Uricosuric
- Increases renal excretion
- Contraindicated in urolithiasis
- Under-dosing common`,

      keyTerms: [
        { term: 'ULT', definition: 'Urate-Lowering Therapy - medications to prevent gout' },
        { term: 'Xanthine oxidase', definition: 'Enzyme that produces uric acid - inhibited by allopurinol' },
        { term: 'Uricosuric', definition: 'Drug that increases uric acid excretion by kidneys' },
        { term: 'CKD', definition: 'Chronic Kidney Disease' },
      ],
      analogies: [
        'Xanthine oxidase inhibitors are like turning down the factory that makes uric acid.',
        'Uricosurics are like opening the floodgates to let more uric acid out.',
      ],
      examples: [
        'Patient with frequent flares started on allopurinol 100mg',
        'Person with CKD gets febuxostat instead of allopurinol',
        'Asian patient tested for HLA-B*5801 before allopurinol',
      ],
      clinicalNotes: 'ULT should NOT be started during acute flare (can worsen). Continue existing ULT during flare. Start ULT 2+ weeks after flare resolves. Give colchicine or NSAID prophylaxis when starting ULT to prevent flares.',
    },

    4: {
      level: 4,
      summary: 'Gout is associated with metabolic syndrome, cardiovascular disease, and kidney disease. Aggressive urate lowering to <5 mg/dL for tophi resolution. Tophaceous gout requires longer therapy.',
      explanation: `## Comorbidities

**Metabolic Syndrome:**
- Obesity
- Hypertension (50-70%)
- Diabetes (20-40%)
- Hyperlipidemia
- All components of metabolic syndrome increased

**Cardiovascular Disease:**
- Independent CV risk factor
- MI, stroke risk increased
- Hyperuricemia contributes to endothelial dysfunction

**Kidney Disease:**
- Uric acid nephrolithiasis (10-20%)
- Urate nephropathy (rare)
- CKD both cause and effect of hyperuricemia

## Tophaceous Gout

**Presentation:**
- Firm, chalky subcutaneous nodules
- Common sites: fingers, hands, feet, elbows, ears
- May ulcerate and drain white chalky material
- Joint destruction, deformity

**Treatment:**
- More aggressive ULT needed
- Target urate <5 mg/dL
- Takes months to years to resolve
- Surgical debridement if infected or ulcerated

## Prophylaxis

**During ULT Initiation:**
- Colchicine 0.6mg BID for 3-6 months
- Or NSAID low dose
- Prevents flares from mobilizing urate stores

**Lifestyle Modifications:**
- Limit alcohol (especially beer)
- Limit high-purine foods:
  - Red meat, organ meats
  - Shellfish (shrimp, scallops)
  - Certain fish (sardines, anchovies)
- Weight loss
- Hydration
- Limit fructose (sugary drinks)

## Refractory Gout

**Definition:**
- Serum urate >6 mg/dL despite maximally tolerated ULT
- Continued flares or tophi

**Treatments:**
- Pegloticase (recombinant uricase)
  - IV every 2 weeks
  - Converts urate to allantoin
  - Risk of anaphylaxis, infusion reactions
  - Premeasurement of serum urate predicts response
- Combination therapy: allopurinol + probenecid`,

      keyTerms: [
        { term: 'Urate nephrolithiasis', definition: 'Kidney stones made of uric acid' },
        { term: 'Pegloticase', definition: 'Enzyme that breaks down uric acid for refractory gout' },
        { term: 'Allantoin', definition: 'Breakdown product of uric acid - more soluble' },
        { term: 'Endothelial dysfunction', definition: "Blood vessel lining doesn't work properly" },
      ],
      analogies: [
        'Pegloticase is like a specialized enzyme that eats uric acid for breakfast.',
        'Tophi resolution is like waiting for a glacier to melt - takes time.',
      ],
      examples: [
        'Patient with tophi on fingers needs urate <5 mg/dL',
        'Person with CKD and gout gets febuxostat with dose monitoring',
        'Refractory gout treated with pegloticase after other drugs fail',
      ],
      clinicalNotes: "Gout flares mimic septic arthritis - ALWAYS aspirate if diagnosis uncertain. Septic arthritis can coexist with gout. Gram stain and culture essential. Don't assume it's just gout. CRP and ESR elevated in both.",
    },

    5: {
      level: 5,
      summary: 'Gout prevalence is increasing globally. Treat-to-target approach with serum urate <6 mg/dL reduces flares and tophi. Cardiovascular risk management is essential.',
      explanation: `## Epidemiology

**Increasing Prevalence:**
- Affects ~4% of US adults
- Higher in: Maori, Pacific Islander, Filipino
- Male:Female ~3:1 (premenopausal women protected)
- Age of onset: Usually 30-50 years
- Increasing with obesity epidemic

## Treatment Approach

**Treat-to-Target:**
- Serum urate <6 mg/dL for most patients
- Serum urate <5 mg/dL for severe gout (tophi, arthritis)
- Check every 2-4 weeks until at goal
- Then every 6 months

**ULT Intensity:**
- Start low, go slow
- Allopurinol: Start 100mg, increase by 100mg monthly
- Febuxostat: Start 40mg, increase to 80mg if needed
- Monitor for flares during titration

## Controversies

**Asymptomatic Hyperuricemia:**
- To treat or not?
- Most patients never develop gout
- ACR: Do NOT treat asymptomatic hyperuricemia
- May consider in very high levels or organ transplant

**Diuretics and Gout:**
- Thiazides and loop diuretics increase uric acid
- Treat the gout, not the diuretic (usually)
- Consider alternative antihypertensive if possible

**Febuxostat CV Safety:**
- CARES trial: Higher CV mortality vs allopurinol
- FAST trial: No difference in CV events
- FDA boxed warning remains
- Patient-specific decision

## Future Directions

**New ULT:**
- Topiroxostat (not in US)
- Dotinurad (uricosuric - Japan)

**Biomarkers:**
- Better risk stratification
- Identify who will develop gout
- Predict who needs treatment`,

      keyTerms: [
        { term: 'Treat-to-target', definition: 'Adjusting treatment to reach specific uric acid goal' },
        { term: 'Asymptomatic hyperuricemia', definition: 'High uric acid without gout symptoms' },
        { term: 'FAST trial', definition: 'Study showing febuxostat CV safety similar to allopurinol' },
        { term: 'Thiazides', definition: 'Blood pressure medications that can raise uric acid' },
      ],
      analogies: [
        'Treat-to-target is like aiming for a bullseye - adjust until you hit it.',
        'Asymptomatic hyperuricemia is like having risk factors but no disease yet.',
      ],
      examples: [
        'Patient with asymptomatic uric acid of 9 mg/dL - observation only',
        'Gout patient on thiazide continues diuretic, adds allopurinol',
        'Febuxostat chosen for patient with allopurinol allergy',
      ],
      clinicalNotes: 'Gout is the most common inflammatory arthritis in men. Quality of life significantly impacted during flares. Adherence to ULT is poor - only 40% continue at 1 year. Education and treat-to-target improve adherence. Shared decision making essential.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['rheumatology', 'gout', 'arthritis', 'uric-acid', 'podagra'],
    systems: ['musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['rheumatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
