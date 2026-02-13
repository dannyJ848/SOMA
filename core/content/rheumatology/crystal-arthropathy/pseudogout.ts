/**
 * Pseudogout (CPPD Disease)
 *
 * Calcium pyrophosphate deposition disease causing acute crystal arthritis,
 * chronic inflammatory arthropathy, and chondrocalcinosis.
 */

import { EducationalContent } from '../../types';

export const pseudogoutContent: EducationalContent = {
  id: 'rheumatology-pseudogout',
  type: 'condition',
  name: 'Pseudogout (CPPD Disease)',
  nameEs: 'Pseudogota (Enfermedad por CPPD)',
  alternateNames: ['CPPD Disease', 'Calcium Pyrophosphate Deposition Disease', 'Chondrocalcinosis', 'Pyrophosphate Arthropathy'],

  levels: {
    1: {
      level: 1,
      summary: 'Pseudogout is a type of arthritis caused by calcium crystals forming in your joints. It usually affects the knees and wrists and is most common in older adults over 60.',
      explanation: `## What Is Pseudogout?

Pseudogout (meaning "false gout") is caused by tiny calcium crystals that build up in joint cartilage and then get released into the joint fluid, causing sudden pain and swelling.

## How Is It Different from Gout?

| Feature | Pseudogout | Gout |
|---------|-----------|------|
| Crystal | Calcium | Uric acid |
| Usual joint | Knee, wrist | Big toe |
| Age | Usually 60+ | Usually 30-50 |
| Diet trigger | No | Yes |

## Symptoms

**Acute Attack:**
- Sudden, severe joint pain
- Swelling, warmth, redness
- Usually one joint at a time
- Most common: Knee, then wrist
- Lasts days to weeks

**Chronic Form:**
- Ongoing joint stiffness and pain
- Can look like rheumatoid arthritis or osteoarthritis
- Multiple joints may be affected

## What Causes It?

- Usually happens with aging (cartilage changes)
- Sometimes linked to other conditions:
  - Overactive parathyroid gland
  - Iron overload (hemochromatosis)
  - Low magnesium
  - Low thyroid

## Treatment

- Anti-inflammatory medicines during attacks
- Ice and rest for the joint
- Sometimes draining fluid from the joint helps
- No medicine can dissolve or prevent the crystals (unlike gout)
- Treat any underlying condition`,

      keyTerms: [
        { term: 'Pseudogout', definition: 'Joint inflammation caused by calcium pyrophosphate crystals, not uric acid' },
        { term: 'Calcium pyrophosphate', definition: 'The type of crystal that causes pseudogout' },
        { term: 'Chondrocalcinosis', definition: 'Calcium crystal deposits in cartilage visible on X-ray' },
        { term: 'Cartilage', definition: 'The smooth, slippery tissue that covers the ends of bones in joints' },
      ],
      analogies: [
        'Pseudogout crystals in cartilage are like sand granules in a shoe that irritate with every step.',
        'Chondrocalcinosis on X-ray looks like a thin white line outlining the cartilage.',
      ],
      examples: [
        'Elderly woman with sudden painful, swollen knee and no injury',
        'Person hospitalized after surgery who develops acute wrist inflammation',
        'Older adult with knee X-ray showing white lines in the cartilage',
      ],
      patientCounselingPoints: [
        'Pseudogout is manageable but there is no cure for the crystal buildup.',
        'Unlike gout, diet changes do not help prevent pseudogout attacks.',
        'Attacks may be triggered by illness, surgery, or dehydration.',
        'If you are young (<55) with pseudogout, ask about metabolic testing.',
      ],
    },

    2: {
      level: 2,
      summary: 'CPPD disease presents as acute CPP crystal arthritis (pseudogout), chronic CPP inflammatory arthritis, or OA with CPPD. Diagnosis requires weakly positively birefringent rhomboid crystals on synovial fluid analysis. Chondrocalcinosis on X-ray is supportive but not diagnostic.',
      explanation: `## Clinical Phenotypes

**Acute CPP Crystal Arthritis (Pseudogout):**
- Sudden monoarthritis or oligoarthritis
- Knee (50%), wrist, shoulder, ankle
- Can be triggered by: Surgery, illness, trauma, dehydration
- Self-limited (days to weeks)
- May mimic septic arthritis (always rule out)

**Chronic CPP Crystal Inflammatory Arthritis (Pseudo-RA):**
- Symmetric polyarthritis resembling RA
- Morning stiffness, wrist/MCP involvement
- Can be RF-positive (low titer)
- Distinguished by: Chondrocalcinosis, CPPD crystals on aspiration
- Less erosive than RA typically

**OA with CPPD:**
- Accelerated osteoarthritis in unusual joints
- Unusual OA joints: Wrists, MCP, shoulders, ankles
- Progressive structural damage
- Florid OA with CPPD is more severe than OA alone

**Asymptomatic Chondrocalcinosis:**
- Incidental finding on X-ray
- Prevalence increases with age: 10-15% over 65, 30-40% over 85
- Does not require treatment if asymptomatic
- May never become symptomatic

## Diagnosis

**Synovial Fluid Analysis (Definitive):**
- Weakly positively birefringent crystals
- Rhomboid or rod-shaped
- Blue when parallel to compensator axis
- Mnemonic: "CPPD is Positive and Blue" (opposite of gout)
- WBC: 2,000-50,000/mcL (inflammatory range)
- Always send Gram stain and culture (septic arthritis coexists)

**Imaging:**
- X-ray: Chondrocalcinosis (menisci, TFCC, pubic symphysis, acetabular labrum)
- OA in atypical joints (wrists, shoulders, MCPs)
- Ultrasound: Hyperechoic punctate deposits WITHIN cartilage (vs gout: on surface)

## Associated Metabolic Conditions

**Screen if Age <55 or Florid/Polyarticular CPPD:**
- Hyperparathyroidism: Calcium, PTH
- Hemochromatosis: Ferritin, transferrin saturation
- Hypomagnesemia: Serum magnesium
- Hypothyroidism: TSH
- Hypophosphatasia: Alkaline phosphatase (low)
- Wilson disease: Ceruloplasmin (young patients)

## Familial CPPD

- Autosomal dominant
- ANKH gene mutations
- Earlier onset (20s-30s)
- Severe polyarticular chondrocalcinosis
- Geographic clusters reported`,

      keyTerms: [
        { term: 'Positively birefringent', definition: 'Crystals appear blue when parallel to polarizer compensator axis; characteristic of CPPD' },
        { term: 'TFCC', definition: 'Triangular fibrocartilage complex of the wrist - common site of chondrocalcinosis' },
        { term: 'Pseudo-RA', definition: 'Chronic CPPD inflammatory arthritis mimicking rheumatoid arthritis' },
        { term: 'ANKH', definition: 'Gene encoding pyrophosphate transporter; mutations cause familial CPPD' },
      ],
      analogies: [
        'CPPD crystals within cartilage on ultrasound look like sparkles embedded in the tissue, unlike gout which coats the surface.',
        'Screening young CPPD patients for metabolic conditions is like investigating why a pipe burst rather than just fixing the leak.',
      ],
      examples: [
        'Elderly patient with acute knee swelling; aspiration shows rhomboid blue-when-parallel crystals',
        'Person under 50 with CPPD gets metabolic screen: elevated ferritin reveals hemochromatosis',
        'Patient with bilateral wrist OA and chondrocalcinosis on X-ray - OA with CPPD phenotype',
      ],
      clinicalNotes: 'CPPD crystals are notoriously harder to identify than MSU crystals because they are weakly birefringent. Experienced microscopist is important. Chondrocalcinosis on X-ray is not equivalent to CPPD disease - many elderly patients have incidental chondrocalcinosis without symptoms. Septic arthritis MUST be excluded in every acute monoarthritis, even if crystals are found.',
    },

    3: {
      level: 3,
      summary: 'No disease-modifying therapy exists for CPPD. Acute attacks are treated with NSAIDs, colchicine, or glucocorticoids. Chronic management uses low-dose colchicine prophylaxis, methotrexate, or hydroxychloroquine. IL-1 blockade (anakinra) for refractory cases.',
      explanation: `## Acute CPP Crystal Arthritis Treatment

**First-Line Options:**
- NSAIDs: Naproxen 500mg BID, indomethacin 50mg TID for 3-7 days
- Colchicine: 1.2mg then 0.6mg 1 hour later (same low-dose as gout)
  - Less effective than in gout but still used
  - Best within 24-36 hours of onset
- Glucocorticoids: Prednisone 30-40mg daily x5-7 days with taper
  - Preferred in elderly with comorbidities (CKD, GI risk)

**Intra-Articular Corticosteroid:**
- Triamcinolone or methylprednisolone injection
- Excellent for monoarticular attacks
- Perform diagnostic aspiration simultaneously
- Rapid relief within 24-48 hours

**Joint Aspiration Alone:**
- Aspiration of effusion can be therapeutic
- Reduces intra-articular crystal load and pressure
- May be sufficient for mild attacks

**IL-1 Inhibition:**
- Anakinra 100mg SC daily x3-5 days for refractory acute attacks
- Especially useful when NSAIDs, colchicine, and steroids are contraindicated
- Off-label for CPPD but effective

## Chronic/Recurrent CPPD Management

**Prophylaxis:**
- Colchicine 0.6mg daily or BID: Reduces frequency of attacks
- Limited evidence but widely used (extrapolated from gout data)

**Chronic Inflammatory CPPD:**
- Methotrexate 7.5-15mg weekly: Case series show benefit in chronic CPP inflammatory arthritis
- Hydroxychloroquine 200-400mg daily: Anti-inflammatory effect, limited data
- Low-dose prednisone: Last resort for elderly refractory patients

**Key Limitation:**
- No therapy can dissolve existing CPPD crystals
- No therapy can prevent new crystal formation
- Unlike gout (where ULT addresses the underlying problem)
- Treatment is purely symptomatic and anti-inflammatory

## Magnesium Supplementation

- Low magnesium promotes CPPD crystal formation
- Correct hypomagnesemia in all CPPD patients
- Supplementation in normomagnesemic patients: Unproven but often attempted
- Magnesium oxide 400mg daily or magnesium citrate

## Treating Underlying Metabolic Conditions

**Hemochromatosis:**
- Phlebotomy normalizes iron but does NOT reverse existing chondrocalcinosis
- Joint disease may progress despite iron normalization
- Still important to treat to prevent other organ damage

**Hyperparathyroidism:**
- Parathyroidectomy for primary hyperparathyroidism
- Chondrocalcinosis may persist post-surgery
- Acute pseudogout flare may be triggered by parathyroidectomy

**Hypothyroidism:**
- Thyroid hormone replacement
- May reduce CPPD flare frequency`,

      keyTerms: [
        { term: 'Anakinra', definition: 'IL-1 receptor antagonist used off-label for refractory CPPD attacks when standard therapy is contraindicated' },
        { term: 'Prophylactic colchicine', definition: 'Daily low-dose colchicine to reduce frequency of recurrent CPPD attacks' },
        { term: 'Disease-modifying void', definition: 'The absence of any CPPD therapy that dissolves crystals or prevents formation (unlike ULT in gout)' },
        { term: 'Magnesium supplementation', definition: 'Correcting low magnesium may reduce CPPD crystal formation; widely used but evidence limited' },
      ],
      analogies: [
        'Treating CPPD without being able to dissolve crystals is like fighting fires without being able to remove the fuel.',
        'Correcting hemochromatosis after chondrocalcinosis is like shutting off the water after the flood damage is done.',
      ],
      examples: [
        'Elderly patient with acute knee CPPD gets intra-articular triamcinolone and aspiration',
        'Recurrent CPPD attacks reduced with colchicine 0.6mg daily prophylaxis',
        'Chronic CPP inflammatory arthritis in elderly patient treated with methotrexate 10mg weekly',
      ],
      clinicalNotes: 'The absence of disease-modifying therapy is the central challenge in CPPD management. All treatment is reactive and symptomatic. Patients should be counseled that treatments reduce symptoms but do not address the underlying crystal deposition. Anakinra is a useful rescue therapy but requires daily injections and is expensive. Post-surgical and post-illness CPPD flares are common and should be anticipated with prophylactic colchicine in high-risk patients undergoing procedures.',
    },

    4: {
      level: 4,
      summary: 'CPPD pathogenesis involves dysregulated pyrophosphate metabolism through ANKH, ENPP1, and TNAP transporters. Aging-related cartilage changes (increased PPi, chondrocyte senescence) are the primary driver. TGF-beta and inflammasome pathways mediate crystal-induced inflammation.',
      explanation: `## Molecular Pathogenesis

**Pyrophosphate (PPi) Metabolism:**
- PPi is a byproduct of biosynthetic reactions (ATP -> AMP + PPi)
- Extracellular PPi concentration determines crystal formation
- Three key regulators:
  - ANKH: Transmembrane PPi efflux transporter (exports PPi from cell)
  - ENPP1 (NPP1): Ectoenzyme generating PPi from extracellular ATP
  - TNAP: Tissue-nonspecific alkaline phosphatase degrading PPi to Pi

**Crystal Formation Requirements:**
- Excess extracellular PPi
- Adequate calcium concentration
- Cartilage matrix (nucleation sites)
- CPP crystals form preferentially in hyaline and fibrocartilage

**Aging and CPPD:**
- Chondrocyte senescence: Altered PPi metabolism
- Increased ANKH and ENPP1 expression with age
- Decreased TNAP activity
- Cartilage matrix changes: Proteoglycan loss reduces crystal inhibition
- TGF-beta upregulation in aging cartilage promotes PPi production
- Oxidative stress and mitochondrial dysfunction in senescent chondrocytes

**Familial CPPD:**
- ANKH gain-of-function mutations: Increased PPi export
- 5p15.2 locus (ANKH gene)
- Autosomal dominant with variable penetrance
- Multiple kindreds: Chilean, French, British, Swedish, Japanese

## Crystal-Induced Inflammation

**NLRP3 Inflammasome:**
- CPPD crystals activate NLRP3 (similar to MSU)
- IL-1beta release is the key inflammatory mediator
- Same pathway as gout but potentially lower magnitude activation
- This explains why anti-IL-1 therapy (anakinra) works in CPPD

**Differences from MSU Inflammation:**
- CPPD flares generally less intense than gout flares
- Possibly due to: Crystal shape (rhomboid vs needle), coating proteins, lower immunogenicity
- Resolution mechanisms similar: NETosis, macrophage phenotype switch

**Cartilage Damage Mechanisms:**
- Direct: Crystals mechanically damage chondrocytes and matrix
- Indirect: MMPs (matrix metalloproteinases) released by crystal-activated cells
- NO and PGE2 production by chondrocytes in response to crystals
- Accelerated OA through crystal-mediated cartilage degradation

## Associated Metabolic Conditions: Pathophysiology

**Hemochromatosis:**
- Iron inhibits pyrophosphatase (TNAP) activity
- Reduced PPi degradation -> crystal formation
- Iron also promotes chondrocyte damage
- "Hook sign" on X-ray: Osteophytes at MCP heads

**Hyperparathyroidism:**
- Elevated PTH increases calcium-PPi product
- Direct effect on chondrocyte PPi metabolism
- Parathyroidectomy does not reverse existing crystals

**Hypomagnesemia:**
- Magnesium is a cofactor for pyrophosphatases
- Low Mg -> Reduced PPi degradation
- Also increases crystal solubility threshold
- Most correctable metabolic contributor to CPPD

**Hypophosphatasia:**
- TNAP (ALPL gene) loss-of-function
- Reduced PPi degradation
- Low serum alkaline phosphatase is the clue
- Enzyme replacement therapy (asfotase alfa) available`,

      keyTerms: [
        { term: 'ANKH transporter', definition: 'Transmembrane channel exporting pyrophosphate; gain-of-function mutations cause familial CPPD' },
        { term: 'ENPP1', definition: 'Ectoenzyme generating extracellular PPi from ATP; overexpression increases CPPD risk' },
        { term: 'TNAP', definition: 'Tissue-nonspecific alkaline phosphatase degrading PPi; deficiency (hypophosphatasia) causes CPPD' },
        { term: 'Chondrocyte senescence', definition: 'Age-related cellular dysfunction in cartilage altering PPi metabolism and promoting crystal formation' },
      ],
      analogies: [
        'PPi metabolism is like a bathtub: ANKH and ENPP1 fill it (add PPi), TNAP drains it (removes PPi). CPPD forms when the faucets are open and the drain is clogged.',
        'Aging cartilage producing more PPi is like old pipes that gradually accumulate mineral deposits.',
      ],
      examples: [
        'Hypophosphatasia patient with low alkaline phosphatase and severe early-onset chondrocalcinosis',
        'Hemochromatosis patient with hook osteophytes at MCPs and bilateral wrist chondrocalcinosis',
        'Familial CPPD with ANKH mutation presenting in 30s with polyarticular chondrocalcinosis',
      ],
      clinicalNotes: 'Low alkaline phosphatase in a CPPD patient should raise suspicion for hypophosphatasia (ALPL gene). Enzyme replacement (asfotase alfa) is approved for pediatric hypophosphatasia but may benefit adults with severe CPPD. TGF-beta is a key driver of PPi overproduction in aging cartilage and represents a potential therapeutic target. Magnesium supplementation is the most practical metabolic intervention for CPPD.',
    },

    5: {
      level: 5,
      summary: 'CPPD research focuses on identifying disease-modifying targets (ANKH modulators, TNAP enhancement, anti-TGF-beta), improved imaging (ultrasound standardization, DECT for CPPD), and defining CPPD as a distinct entity from OA in clinical trials.',
      explanation: `## Therapeutic Frontiers

**Disease-Modifying Targets Under Investigation:**
- ANKH inhibition: Reducing PPi export (no drugs yet, genetic target)
- TNAP enhancement: Increasing PPi degradation
  - Asfotase alfa (enzyme replacement) in CPPD: Case reports
  - Gene therapy approaches in preclinical models
- Anti-TGF-beta: Targeting age-related PPi overproduction
- Phosphocitrate: PPi crystallization inhibitor
  - Shown to prevent and dissolve CPPD crystals in vitro
  - No human clinical trial to date
  - Challenges: Drug delivery to cartilage, stability

**Anti-Inflammatory Pipeline:**
- Canakinumab (anti-IL-1beta): Effective but cost-prohibitive for CPPD
- Rilonacept (IL-1 trap): Potential for prophylaxis (extrapolating from gout data)
- NLRP3 inhibitors (dapansutrile): May prevent crystal-induced inflammation
- Colchicine optimization: Dose-finding studies for chronic CPPD prophylaxis

**Crystal Dissolution Research:**
- No proven therapy to dissolve existing CPPD crystals in vivo
- Polyphosphates and bisphosphonates investigated in vitro
- Intra-articular PPi-degrading enzymes: Theoretical approach
- Major gap compared to gout (where ULT dissolves MSU)

## Imaging Advances

**Ultrasound Standardization:**
- OMERACT defining scoring systems for CPPD
- Hyperechoic punctate deposits within cartilage
- Distinguishing from gout (double contour sign on surface)
- Potential for screening and diagnosis without aspiration

**DECT for CPPD:**
- Material decomposition can detect calcium crystals
- Less validated than DECT for gout
- Technical challenges: Distinguishing CPPD from bone/calcification
- Research ongoing for CPPD-specific DECT protocols

**MRI:**
- Can detect synovitis and structural damage
- CPPD crystal deposits visible as low signal on gradient echo
- Useful for assessing damage severity but not crystal-specific

## Nosology and Classification

**EULAR Nomenclature Recommendations:**
- "CPPD disease" as umbrella term
- Acute CPP crystal arthritis (replaces "pseudogout")
- Chronic CPP crystal inflammatory arthritis (replaces "pseudo-RA")
- OA with CPPD
- Asymptomatic CPPD (chondrocalcinosis alone)
- Standardized terminology improves research comparability

**Need for Classification Criteria:**
- No ACR/EULAR classification criteria exist for CPPD
- McCarty criteria (1962) are outdated
- EULAR working group developing updated criteria
- Challenge: Overlap with OA and RA phenotypes

## Epidemiology and Outcomes

**Population Studies:**
- Chondrocalcinosis prevalence: 4-7% age 60-75, 17-27% over 85
- Only ~25-30% of chondrocalcinosis patients become symptomatic
- CPPD as predictor of joint replacement: Accelerated OA progression
- Association with cognitive decline in some studies (shared aging pathways)

**Unmet Needs:**
- No disease-modifying therapy (the fundamental gap)
- No biomarker for disease activity
- Poor understanding of why crystals become symptomatic
- No way to predict who with chondrocalcinosis will develop arthritis
- Clinical trial design challenges: Heterogeneous phenotypes, endpoints unclear`,

      keyTerms: [
        { term: 'Phosphocitrate', definition: 'In vitro CPPD crystal formation inhibitor; potential disease-modifying agent not yet in clinical trials' },
        { term: 'OMERACT CPPD scoring', definition: 'Standardization effort for ultrasound assessment of CPPD crystal deposits' },
        { term: 'EULAR CPPD nomenclature', definition: 'Updated terminology standardizing disease phenotype descriptions for research and clinical use' },
        { term: 'Asfotase alfa', definition: 'TNAP enzyme replacement therapy approved for hypophosphatasia; potential CPPD application' },
      ],
      analogies: [
        'The search for CPPD disease-modifying therapy is like looking for a solvent that works inside living cartilage without damaging it.',
        'Standardizing CPPD terminology is like creating a common language so researchers worldwide can compare their findings.',
      ],
      examples: [
        'Phosphocitrate shown to dissolve CPPD crystals in lab setting but awaits human translation',
        'OMERACT ultrasound criteria used to standardize CPPD detection in multicenter research study',
        'Elderly patient with progressive CPPD-associated OA enrolled in registry to track long-term outcomes',
      ],
      clinicalNotes: 'CPPD remains one of the most undertreated and under-researched rheumatic diseases despite its prevalence. The absence of disease-modifying therapy is a critical gap. Phosphocitrate is the most promising crystal-targeting agent but faces delivery challenges. NLRP3 inhibitors may address the inflammatory component. Classification criteria and standardized imaging are needed before large-scale clinical trials can be conducted. The aging population will make CPPD increasingly important in coming decades.',
    },
  },

  media: [],
  citations: [
    { id: 'cite-eular-cppd', type: 'article', title: 'EULAR recommendations for CPPD terminology and diagnosis', source: 'Ann Rheum Dis 2011' },
    { id: 'cite-ankh-cppd', type: 'article', title: 'ANKH mutations in familial CPPD disease', source: 'Nature Genetics 2002' },
  ],
  crossReferences: [
    { targetId: 'rheumatology-gout', targetType: 'topic', relationship: 'sibling', label: 'Gout' },
    { targetId: 'rheumatology-crystal-arthropathies', targetType: 'topic', relationship: 'parent', label: 'Crystal Arthropathies' },
    { targetId: 'rheumatology-rheumatoid-arthritis', targetType: 'topic', relationship: 'related', label: 'Rheumatoid Arthritis (differential)' },
  ],
  tags: {
    topics: ['rheumatology', 'pseudogout', 'CPPD', 'crystal-arthropathy', 'chondrocalcinosis', 'calcium-pyrophosphate'],
    systems: ['musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['rheumatology', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
