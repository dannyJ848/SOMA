/**
 * Psoriasis
 *
 * Chronic autoimmune skin condition causing scaly, red patches.
 */

import { EducationalContent } from '../../types';

export const psoriasisContent: EducationalContent = {
  id: 'dermatology-psoriasis',
  type: 'topic',
  name: 'Psoriasis',
  alternateNames: ['Plaque Psoriasis', 'Psoriatic Plaque', 'PsO'],

  levels: {
    1: {
      level: 1,
      summary: "Psoriasis is a skin condition that causes red, scaly patches on your skin. It happens when your immune system mistakenly attacks healthy skin cells, causing them to grow too fast.",
      explanation: `## What Is Psoriasis?

Psoriasis is a chronic (long-lasting) disease that causes itchy, scaly patches on your skin. These patches can appear anywhere but are most common on the elbows, knees, scalp, and lower back.

## What Does It Look Like?

- Red patches of skin covered with thick scales
- Dry, cracked skin that may bleed
- Itching or burning
- Thickened or pitted nails
- Swollen and stiff joints (sometimes)

## Types of Psoriasis

**Plaque Psoriasis (Most Common):**
- Raised, red patches with silvery scales
- Usually on elbows, knees, scalp, back

**Guttate Psoriasis:**
- Small, drop-shaped lesions
- Often triggered by strep throat
- Common in children/young adults

**Inverse Psoriasis:**
- Smooth, red patches in skin folds
- Under breasts, groin, armpits

**Pustular Psoriasis:**
- White pus-filled blisters
- Surrounded by red skin

**Erythrodermic Psoriasis (Rare, Serious):**
- Fiery redness over most of body
- Can be life-threatening

## What Causes It?

- Immune system problem
- Genetics (runs in families)
- Triggers: Stress, injury, infections, certain medications
- NOT contagious (you can't catch it)

## Treatment

- Creams and ointments
- Light therapy
- Medications that affect immune system
- Avoid triggers`,

      keyTerms: [
        { term: 'Autoimmune', definition: "When immune system attacks body's own healthy cells" },
        { term: 'Plaque', definition: 'Raised, red patch of skin with scales' },
        { term: 'Scales', definition: 'Dead skin cells that form on skin surface' },
        { term: 'Contagious', definition: 'Can spread from person to person (psoriasis is NOT)' },
      ],
      analogies: [
        "Psoriasis plaques are like scabs that keep forming and don't heal.",
        "Autoimmune is like your body's defense system attacking you by mistake.",
      ],
      examples: [
        'Person with red scaly patches on elbows and knees',
        'Child with guttate psoriasis after strep throat',
        'Someone with psoriasis under breasts and in groin area',
      ],
    },

    2: {
      level: 2,
      summary: 'Psoriasis is a chronic immune-mediated disease affecting 2-3% of the population. Treatment is based on severity and extent of body surface area involved.',
      explanation: `## Clinical Features

**Typical Distribution:**
- Extensor surfaces (elbows, knees)
- Scalp
- Lower back (sacrum)
- Umbilicus
- Intergluteal cleft

**Nail Changes:**
- Pitting (small depressions)
- Onycholysis (lifting of nail)
- Oil spots (yellow discoloration)
- Subungual hyperkeratosis

**Koebner Phenomenon:**
- New lesions at sites of trauma
- Scratching, cuts, sunburn can trigger

## Assessment of Severity

**Body Surface Area (BSA):**
- Mild: <3% BSA
- Moderate: 3-10% BSA
- Severe: >10% BSA

**PASI Score:**
- Psoriasis Area and Severity Index
- Combines erythema, scaling, thickness
- 0-72 scale

**DLQI:**
- Dermatology Life Quality Index
- Measures impact on daily life

## Treatment by Severity

**Mild (<3% BSA):**
- Topical corticosteroids
- Vitamin D analogs (calcipotriene)
- Topical retinoids (tazarotene)
- Keratolytics (salicylic acid)

**Moderate (3-10% BSA):**
- Phototherapy (UVB, PUVA)
- Systemic retinoids (acitretin)
- Methotrexate
- Apremilast

**Severe (>10% BSA):**
- Biologics (anti-TNF, anti-IL-17, anti-IL-23)
- Advanced systemic agents`,

      keyTerms: [
        { term: 'Koebner phenomenon', definition: 'New psoriasis lesions forming at sites of skin injury' },
        { term: 'Onycholysis', definition: 'Separation of nail plate from nail bed' },
        { term: 'PASI', definition: 'Psoriasis Area and Severity Index - measure of disease severity' },
        { term: 'Phototherapy', definition: 'Treatment using ultraviolet light' },
      ],
      analogies: [
        'Koebner phenomenon is like planting seeds in disturbed soil.',
        'BSA is like measuring what percentage of your body is affected.',
      ],
      examples: [
        'Patient with plaques covering 8% of body starts phototherapy',
        'Person with nail pitting and onycholysis has psoriatic nail disease',
        'Someone gets new plaques at site of tattoo (Koebner)',
      ],
      clinicalNotes: 'All psoriasis patients should be screened for psoriatic arthritis (ask about joint pain, stiffness). Cardiovascular risk is increased - encourage smoking cessation, weight management, blood pressure control. Avoid systemic steroids - can cause rebound flare.',
    },

    3: {
      level: 3,
      summary: 'Psoriasis treatment has been revolutionized by biologic agents targeting TNF, IL-17, and IL-23. Early aggressive therapy may prevent joint damage in psoriatic arthritis.',
      explanation: `## Biologic Therapies

**Anti-TNF Agents:**
- Adalimumab (Humira): 40mg q2weeks
- Etanercept (Enbrel): 50mg weekly
- Infliximab (Remicade): 5mg/kg q8weeks
- Certolizumab: 400mg q2-4weeks

**Anti-IL-17 Agents:**
- Secukinumab (Cosentyx): 300mg q4weeks
- Ixekizumab (Taltz): 80mg q4weeks
- Brodalumab: 210mg q2weeks

**Anti-IL-23 Agents:**
- Guselkumab (Tremfya): 100mg q8weeks
- Risankizumab (Skyrizi): 150mg q12weeks
- Tildrakizumab: 100mg q12weeks

## Conventional Systemics

**Methotrexate:**
- 10-25mg weekly
- Folic acid supplementation
- Monitor: CBC, LFTs, renal
- Contraindicated in pregnancy

**Acitretin:**
- 25-50mg daily
- Teratogenic - contraception for 3 years after stopping
- Hyperlipidemia, mucocutaneous side effects

**Apremilast (Otezla):**
- PDE4 inhibitor
- 10-30mg BID
- No monitoring required
- Diarrhea, nausea common

## Phototherapy

**Narrowband UVB:**
- 2-3 times per week
- First-line for moderate disease
- No systemic immunosuppression

**PUVA (Psoralen + UVA):**
- More effective but higher skin cancer risk
- Requires eye protection`,

      keyTerms: [
        { term: 'PDE4 inhibitor', definition: 'Medication that blocks inflammation through phosphodiesterase pathway' },
        { term: 'Teratogenic', definition: 'Causes birth defects' },
        { term: 'Narrowband UVB', definition: 'Specific wavelength of ultraviolet light for treating psoriasis' },
      ],
      analogies: [
        'Biologics are like smart missiles targeting specific inflammatory proteins.',
        'PUVA is like giving skin a drug that makes it sensitive to light treatment.',
      ],
      examples: [
        'Patient starts adalimumab for severe plaque psoriasis',
        'Woman of childbearing age cannot take acitretin',
        'Phototherapy chosen for patient who wants to avoid systemic medications',
      ],
      clinicalNotes: 'Before starting biologics, screen for latent TB (quantiferon/PPD) and hepatitis B. Vaccinations should be up to date before starting. Live vaccines contraindicated on biologics. Monitor for infections. Efficacy: IL-17/IL-23 inhibitors generally more effective than TNF inhibitors for skin clearance.',
    },

    4: {
      level: 4,
      summary: 'Psoriasis is associated with multiple comorbidities including psoriatic arthritis, cardiovascular disease, metabolic syndrome, and depression. Comprehensive management addresses all aspects of health.',
      explanation: `## Comorbidities

**Psoriatic Arthritis (30%):**
- Inflammatory joint disease
- Can precede, coincide with, or follow skin disease
- Enthesitis, dactylitis, axial involvement
- Early treatment prevents joint damage

**Metabolic Syndrome:**
- Obesity (2x increased risk)
- Type 2 diabetes
- Hypertension
- Dyslipidemia
- Non-alcoholic fatty liver disease

**Cardiovascular Disease:**
- Increased MI risk independent of traditional factors
- Inflammation drives atherosclerosis
- Aggressive risk factor modification needed

**Psychiatric:**
- Depression (risk 1.5-2x)
- Anxiety
- Suicidal ideation
- Body image issues

**Other:**
- Uveitis (eye inflammation)
- Crohn's disease
- Kidney disease
- Certain cancers (lymphoma, skin cancer)

## Psoriatic Arthritis

**Patterns:**
- Oligoarticular (≤4 joints)
- Polyarticular (≥5 joints)
- Distal interphalangeal
- Arthritis mutilans (severe)
- Axial/spondylitis

**Diagnosis:**
- CASPAR criteria
- Typical psoriasis + inflammatory arthritis
- No specific lab test
- RF negative, HLA-B27 often positive

**Treatment:**
- NSAIDs for mild
- Methotrexate first-line systemic
- Biologics preferred for moderate-severe
- IL-17 inhibitors especially effective`,

      keyTerms: [
        { term: 'Enthesitis', definition: 'Inflammation where tendons/ligaments attach to bone' },
        { term: 'Dactylitis', definition: 'Sausage-like swelling of entire finger or toe' },
        { term: 'Arthritis mutilans', definition: 'Severe destructive arthritis causing bone resorption' },
        { term: 'HLA-B27', definition: 'Genetic marker associated with psoriatic arthritis and ankylosing spondylitis' },
      ],
      analogies: [
        'Dactylitis is like a finger swelling up like a sausage.',
        'Enthesitis is like having painful hotspots where muscles attach to bone.',
      ],
      examples: [
        'Patient with skin psoriasis develops swollen, tender fingers',
        'Person with psoriasis has elevated liver enzymes from NAFLD',
        'Someone with psoriasis has earlier heart attack than expected',
      ],
      clinicalNotes: 'Screen all psoriasis patients for PsA: ask about joint pain, stiffness, swelling. Early diagnosis critical to prevent joint damage. Treat to target: MDA (minimal disease activity) or remission. Dermatology and rheumatology collaboration essential.',
    },

    5: {
      level: 5,
      summary: 'Psoriasis pathogenesis involves genetic predisposition (HLA-C*06:02), immune dysregulation (Th17 axis), and environmental triggers. Targeted biologic therapy has transformed outcomes.',
      explanation: `## Pathogenesis

**Genetic Factors:**
- HLA-C*06:02 (PSORS1)
- Polygenic inheritance
- 10% risk if one parent affected
- 50% risk if both parents affected
- Twin concordance: 70% monozygotic

**Immune Pathway:**
- IL-23 from dendritic cells
- Stimulates Th17 cells
- Th17 releases IL-17, IL-22, TNF
- Keratinocyte proliferation
- Angiogenesis
- Recruitment of inflammatory cells

**Triggers:**
- Stress (psychological)
- Trauma (Koebner)
- Infections (strep guttate)
- Medications (beta-blockers, lithium, antimalarials)
- Alcohol, smoking

## Treatment Evolution

**Before Biologics:**
- Coal tar, salicylic acid
- Phototherapy mainstay
- Methotrexate for severe
- Limited efficacy, significant toxicity

**Biologic Era:**
- TNF inhibitors (2000s)
- IL-12/23 inhibitor (ustekinumab)
- IL-17 inhibitors (2015+)
- IL-23 inhibitors (2018+)
- PASI 75 response: 50-80%
- PASI 90/100 increasingly common

## Future Directions

**Oral Advanced Therapies:**
- Tyrosine kinase inhibitors
- Deucravacitinib (TYK2 inhibitor)

**Personalized Medicine:**
- Pharmacogenomics to predict response
- Biomarker-driven therapy selection
- HLA-C*06:02 predicts ustekinumab response

**Combination Therapy:**
- Biologic + topical
- Biologic + phototherapy
- Multiple biologic targets?`,

      keyTerms: [
        { term: 'Th17 axis', definition: 'Immune pathway involving T-helper 17 cells and IL-17' },
        { term: 'Keratinocyte', definition: 'Main cell type in epidermis - overgrows in psoriasis' },
        { term: 'PASI 75', definition: '75% improvement in psoriasis severity score' },
        { term: 'Pharmacogenomics', definition: 'Using genetic information to predict drug response' },
      ],
      analogies: [
        'Th17 axis is like a highway that leads to inflammation.',
        'PASI 90 is like achieving near-complete clearing of skin.',
      ],
      examples: [
        'Patient with HLA-C*06:02 has excellent response to ustekinumab',
        'Research showing IL-23 inhibition may induce long remission',
        'TYK2 inhibitor offers oral option for patients avoiding injections',
      ],
      clinicalNotes: 'Drug survival varies: IL-23 inhibitors have longest persistence (~2+ years). Loss of response may require switching mechanism. Weight-based dosing important (especially for TNF inhibitors). Consider comorbidities when selecting biologic (e.g., avoid TNF inhibitors with heart failure).',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['dermatology', 'psoriasis', 'autoimmune', 'psoriatic-arthritis'],
    systems: ['integumentary', 'immune', 'musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
