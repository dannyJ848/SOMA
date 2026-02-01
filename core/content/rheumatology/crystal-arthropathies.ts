/**
 * Crystal Arthropathies - Comprehensive Rheumatology Content
 *
 * Covers Gout (urate metabolism, crystal formation, inflammasome activation),
 * CPPD disease (pseudogout), and basic calcium crystal arthropathy.
 * Includes ACR 2020 gout management guidelines.
 */

import { EducationalContent } from '../types';

export const crystalArthropathiesContent: EducationalContent = {
  id: 'rheumatology-crystal-arthropathies',
  type: 'topic',
  name: 'Crystal Arthropathies',
  nameEs: 'Artropatias por Cristales',
  alternateNames: [
    'Crystal-Induced Arthritis',
    'Crystal Deposition Diseases',
    'Microcrystalline Arthropathies',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Crystal arthropathies are types of arthritis caused by tiny crystals forming in your joints. The two most common are gout (uric acid crystals) and pseudogout (calcium crystals).',
      explanation: `## What Are Crystal Arthropathies?

Sometimes tiny crystals can form inside your joints, like how salt crystals form when water evaporates. These crystals irritate the joint lining and cause sudden, severe pain, swelling, and redness.

## Gout

**What Happens:**
- Your body makes a waste product called uric acid
- If there is too much uric acid, it forms sharp, needle-like crystals
- These crystals collect in joints, especially the big toe
- The joint becomes red, hot, extremely painful, and swollen

**Who Gets It:**
- More common in men
- Often starts in the 30s-50s
- Risk increases with: red meat, shellfish, beer, sugary drinks
- Runs in families
- More common with obesity, high blood pressure, kidney problems

**Pseudogout (Calcium Crystal Disease)**

**What Happens:**
- A different type of crystal (calcium pyrophosphate) forms in joints
- Usually affects larger joints like the knee, wrist, or shoulder
- Can look just like gout but in different joints
- More common in older adults (over 60)

**Other Calcium Crystals:**
- Basic calcium phosphate (BCP) crystals
- Found in tendons (causes calcific tendinitis) and joints
- Common cause of shoulder pain

## How Are They Different from Each Other?

| Feature | Gout | Pseudogout |
|---------|------|-----------|
| Crystal type | Uric acid | Calcium |
| Usual joint | Big toe | Knee, wrist |
| Typical age | 30-50 | Over 60 |
| Trigger foods | Yes | No |

## Treatment

**During an Attack:**
- Anti-inflammatory medicines
- Ice on the joint
- Rest the joint
- See a doctor if first episode

**Preventing Gout Attacks:**
- Medicines to lower uric acid
- Avoid trigger foods and excess alcohol
- Stay hydrated
- Maintain healthy weight`,

      keyTerms: [
        {
          term: 'Crystal arthropathy',
          definition: 'Joint disease caused by crystal deposits in the joint',
        },
        {
          term: 'Uric acid',
          definition: 'A waste product that can form crystals causing gout',
        },
        {
          term: 'Pseudogout',
          definition: 'Joint inflammation from calcium crystals, not uric acid',
        },
        {
          term: 'Podagra',
          definition: 'Gout attack in the big toe - the most common location',
        },
      ],
      analogies: [
        'Gout crystals in a joint are like tiny shards of glass irritating the inside of your shoe.',
        'Pseudogout is the look-alike sibling of gout - similar symptoms but a different crystal.',
        'Crystal formation in joints is like sugar crystallizing at the bottom of a cup of sweet tea when it cools.',
      ],
      examples: [
        'A man wakes at 3 AM with a hot, swollen, extremely painful big toe',
        'An elderly woman develops sudden knee swelling and warmth with no injury',
        'A person who ate steak and drank beer the night before gets a painful toe',
      ],
      patientCounselingPoints: [
        'Gout is treatable - medicines can prevent attacks and lower uric acid.',
        'Diet changes alone are usually not enough to control gout.',
        'Do not stop uric acid-lowering medicine during an attack.',
        'Pseudogout does not have the same dietary triggers as gout.',
        'See a doctor for any sudden, severe joint pain to rule out infection.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Crystal arthropathies are diagnosed definitively by synovial fluid analysis. Gout shows negatively birefringent monosodium urate crystals; CPPD shows weakly positively birefringent calcium pyrophosphate crystals. Management differs significantly.',
      explanation: `## Gout Pathophysiology

**Urate Metabolism:**
- Purines (from diet and cell turnover) are metabolized to hypoxanthine -> xanthine -> uric acid
- Xanthine oxidase catalyzes the final steps
- Humans lack uricase (present in most mammals) that converts urate to allantoin
- Uric acid is excreted 2/3 by kidneys, 1/3 by gut
- Hyperuricemia: Serum urate > 6.8 mg/dL (saturation point at physiologic pH and temperature)

**Crystal Formation:**
- MSU crystals form when urate exceeds solubility
- Cooler, peripheral joints favored (lower temperature decreases solubility)
- Local factors: pH, concentration of cations, presence of connective tissue matrix
- Crystals may be present in joints asymptomatically for years before first flare

**Inflammatory Response:**
- MSU crystals are phagocytosed by monocytes/macrophages
- Activate NLRP3 inflammasome
- IL-1beta release is the key mediator of acute gouty inflammation
- Neutrophil recruitment amplifies inflammation
- Self-limiting: NETs (neutrophil extracellular traps) aggregate and degrade crystals

## CPPD Disease (Pseudogout)

**Crystal Type:**
- Calcium pyrophosphate dihydrate (CPPD) crystals
- Rhomboid or rod-shaped
- Weakly positively birefringent (blue when parallel to compensator axis)

**Clinical Presentations:**
- **Acute CPP crystal arthritis** (pseudogout): Sudden joint inflammation, usually knee or wrist
- **Chronic CPP crystal inflammatory arthritis:** Mimics RA (symmetric polyarthritis)
- **OA with CPPD:** Accelerated osteoarthritis in unusual joints
- **Asymptomatic chondrocalcinosis:** Incidental finding on X-ray

**Associated Conditions:**
- Hemochromatosis (check ferritin, transferrin saturation)
- Hyperparathyroidism (check calcium, PTH)
- Hypomagnesemia
- Hypothyroidism
- Hypophosphatasia
- Wilson disease
- Consider metabolic workup in patients < 55 with CPPD

**Chondrocalcinosis on X-ray:**
- Calcification of cartilage (menisci, triangular fibrocartilage of wrist)
- Present in ~50% of CPPD patients
- Not the same as CPPD disease (can be asymptomatic)

## Basic Calcium Phosphate (BCP) Crystals

**Types:**
- Hydroxyapatite, octacalcium phosphate, tricalcium phosphate
- Too small to see on polarized microscopy
- Identified by alizarin red S staining or electron microscopy

**Clinical Syndromes:**
- **Calcific tendinitis:** Shoulder most common (supraspinatus)
- **Milwaukee shoulder syndrome:** Destructive arthropathy of shoulder in elderly women
- **Periarticular calcification**

## Diagnosis: Synovial Fluid Analysis

**Gold Standard:** Joint aspiration and polarized light microscopy

| Feature | Gout (MSU) | CPPD |
|---------|-----------|------|
| Crystal shape | Needle-shaped | Rhomboid/rod |
| Birefringence | Strongly negative | Weakly positive |
| Color parallel | Yellow | Blue |
| Color perpendicular | Blue | Yellow |
| WBC count | 2,000-50,000/mcL | 2,000-50,000/mcL |

**Mnemonic:** "Gout is Negative and Yellow" (negatively birefringent, yellow when parallel)

**Important:** Septic arthritis can coexist with crystal disease. Always send Gram stain and culture.

## Treatment Overview

**Acute Gout/Pseudogout:**
- NSAIDs (naproxen, indomethacin) - first line if no contraindications
- Colchicine - most effective within 24 hours of onset
- Glucocorticoids - oral, IM, or intra-articular
- IL-1 inhibitors (anakinra) for refractory cases

**Gout Prevention (ULT):**
- Allopurinol (xanthine oxidase inhibitor) - first line
- Febuxostat (xanthine oxidase inhibitor) - alternative
- Probenecid (uricosuric) - if underexcretor
- Target serum urate < 6 mg/dL

**CPPD - No ULT equivalent:**
- No therapy to dissolve or prevent CPPD crystal formation
- Treat acute attacks same as gout
- Low-dose colchicine for prophylaxis of recurrent attacks
- Treat underlying metabolic conditions
- Methotrexate or HCQ for chronic inflammatory CPPD`,

      keyTerms: [
        {
          term: 'MSU',
          definition: 'Monosodium urate - the crystal that causes gout',
        },
        {
          term: 'CPPD',
          definition:
            'Calcium pyrophosphate dihydrate - the crystal that causes pseudogout',
        },
        {
          term: 'NLRP3 inflammasome',
          definition:
            'Immune sensor inside cells that detects crystals and triggers IL-1beta release',
        },
        {
          term: 'Birefringence',
          definition:
            'How crystals bend light under polarized microscopy - used to identify crystal type',
        },
        {
          term: 'Chondrocalcinosis',
          definition:
            'Calcification of cartilage seen on X-ray, associated with CPPD disease',
        },
        {
          term: 'Xanthine oxidase',
          definition:
            'The enzyme that produces uric acid - blocked by allopurinol and febuxostat',
        },
      ],
      analogies: [
        'The NLRP3 inflammasome is like a burglar alarm inside the cell that goes off when it detects crystal intruders.',
        'Negative birefringence in gout means the crystal turns yellow when parallel - remember "gout is negative and yellow."',
        'Chondrocalcinosis on X-ray is like seeing frost on a window - it tells you calcium crystals are there, but not necessarily causing symptoms.',
      ],
      examples: [
        'Joint aspiration shows needle-shaped, negatively birefringent crystals - diagnosis: gout',
        'Elderly patient with acute knee swelling and chondrocalcinosis on X-ray - think CPPD',
        'Patient under 55 with CPPD gets metabolic workup: ferritin, calcium, PTH, magnesium, TSH',
      ],
      clinicalNotes:
        'Crystal identification under polarized microscopy is the gold standard but operator-dependent. CPPD crystals are harder to see (weakly birefringent). Serum urate may be normal during an acute gout flare - do not use it to rule out gout. Always send synovial fluid for Gram stain and culture even when crystals are found, as septic arthritis and crystal arthritis can coexist.',
    },

    3: {
      level: 3,
      summary:
        'Gout management follows ACR 2020 guidelines emphasizing treat-to-target ULT, colchicine mechanisms via tubulin inhibition, and NLRP3 inflammasome-driven IL-1beta as the central inflammatory mediator. CPPD lacks disease-modifying therapy.',
      explanation: `## Detailed Urate Metabolism

**Purine Sources:**
- Endogenous: Nucleic acid turnover (2/3 of total)
- Exogenous: Dietary purines (1/3)
- High-purine foods: Organ meats, red meat, shellfish, sardines, anchovies
- Fructose increases urate (depletes ATP, increases purine degradation)
- Alcohol: Beer (high purine + inhibits excretion), spirits (inhibits excretion), wine (less effect)

**Urate Excretion:**
- Renal (65-75%): Filtered, reabsorbed (URAT1, GLUT9), secreted (ABCG2, OAT1/3)
- GI (25-35%): ABCG2 transporter
- Underexcretion causes ~90% of hyperuricemia
- Overproduction (~10%): Myeloproliferative disorders, tumor lysis, Lesch-Nyhan (HGPRT deficiency)

**Renal Urate Transporters:**
- URAT1: Reabsorption at proximal tubule (target of lesinurad, probenecid)
- GLUT9 (SLC2A9): Major reabsorption transporter
- ABCG2: Secretion (loss-of-function variants increase gout risk by 70%)
- OAT1/3: Secretion

## NLRP3 Inflammasome in Crystal Disease

**Activation Cascade:**
1. MSU/CPPD crystals phagocytosed by macrophages
2. Lysosomal destabilization releases cathepsin B
3. Mitochondrial ROS generation
4. K+ efflux from cell
5. NLRP3 oligomerizes with ASC adaptor protein
6. Caspase-1 activation
7. Pro-IL-1beta cleaved to active IL-1beta
8. IL-1beta released, recruits neutrophils via IL-8, CXCL1

**Signal 1 (Priming):**
- TLR2/TLR4 engagement by crystals
- NF-kappaB activation
- Upregulation of NLRP3, pro-IL-1beta, pro-IL-18

**Signal 2 (Activation):**
- Crystal phagocytosis and lysosomal rupture
- NLRP3 inflammasome assembly
- Caspase-1 activation and IL-1beta processing

**Resolution Mechanisms:**
- NETs (neutrophil extracellular traps) aggregate and degrade crystals
- Macrophage phenotype switch (M1 to M2)
- TGF-beta production
- This explains why gout attacks are self-limiting (7-14 days)

## ACR 2020 Conditional Recommendations for Gout Management

### Acute Flare:
- **First-line:** Colchicine, NSAIDs, or glucocorticoids (based on patient factors)
- **Colchicine:** Low-dose regimen (1.2mg then 0.6mg 1h later), then 0.6mg daily/BID
  - Most effective if started within 24-36 hours
  - Mechanism: Inhibits tubulin polymerization -> disrupts neutrophil chemotaxis, phagocytosis, NLRP3 inflammasome assembly
  - Dose adjust for CKD; contraindicated with strong CYP3A4/P-gp inhibitors
- **IL-1 inhibitors** (anakinra) if above contraindicated or refractory
- **Conditionally against** ACTH for acute flare

### ULT Initiation:
- **Indications** (conditionally recommend ULT):
  - >= 2 flares/year
  - Any tophus
  - Radiographic damage from gout
- **Conditionally against** ULT for first gout flare (exception: CKD >= stage 3, urate >9, urolithiasis)
- **Allopurinol** preferred first-line over febuxostat or probenecid
- Start LOW dose: Allopurinol <= 100mg/day (CKD: start even lower)
- **HLA-B*5801 testing:** Conditionally recommend before allopurinol in Southeast Asian, African American patients (SJS/TEN risk)

### ULT Targets:
- **Treat-to-target:** Serum urate < 6 mg/dL (conditionally recommended)
- Titrate allopurinol dose upward (100mg increments q2-5 weeks)
- Maximum allopurinol dose: Up to 800mg/day (regardless of CKD, if tolerated and titrated slowly)
- **Febuxostat** if allopurinol not tolerated or contraindicated
- **Probenecid** if xanthine oxidase inhibitors contraindicated
  - Requires adequate renal function (eGFR > 50)
  - 24hr urine uric acid to confirm underexcretion

### Prophylaxis During ULT Initiation:
- **Colchicine 0.6mg daily or BID** for 3-6 months (preferred)
- Alternatively: Low-dose NSAID
- Duration: At least 3-6 months (longer if active tophi)

### Lifestyle:
- **Conditionally recommend:** Limit alcohol, limit high-purine foods, limit high-fructose corn syrup
- **Conditionally against:** Low-purine diet as sole management (insufficient alone)

## CPPD Disease Management

**No Disease-Modifying Therapy Available:**
- Cannot dissolve or prevent CPPD crystal formation
- Treatment is symptomatic and supportive
- Address underlying metabolic conditions

**Acute CPP Crystal Arthritis:**
- Same agents as gout: NSAIDs, colchicine, glucocorticoids
- Intra-articular glucocorticoid injection if monoarticular
- Joint aspiration alone may relieve symptoms

**Chronic/Recurrent CPPD:**
- Low-dose colchicine (0.6mg daily or BID) for prophylaxis
- Methotrexate (5-10mg weekly) for chronic inflammatory CPPD
- Hydroxychloroquine for chronic CPPD
- Anakinra (IL-1 inhibitor) for refractory attacks

## Imaging in Crystal Arthropathies

**Gout:**
- X-ray: Overhanging edges (rat-bite erosions), preserved joint space (early), tophi as soft tissue masses
- Ultrasound: Double contour sign (MSU deposits on cartilage surface)
- DECT (Dual-Energy CT): Green color-coded urate deposits, sensitivity 78-100%
- MRI: Tophi are heterogeneous on T2

**CPPD:**
- X-ray: Chondrocalcinosis (menisci, TFCC, pubic symphysis), degenerative changes in atypical locations (MCP joints, patellofemoral, radiocarpal)
- Ultrasound: Hyperechoic punctate deposits within cartilage (unlike double contour of gout which is on surface)`,

      keyTerms: [
        {
          term: 'URAT1',
          definition:
            'Urate transporter 1 - renal transporter that reabsorbs uric acid; target of uricosuric drugs',
        },
        {
          term: 'ABCG2',
          definition:
            'Transporter responsible for urate secretion in kidney and gut; variants increase gout risk',
        },
        {
          term: 'Colchicine mechanism',
          definition:
            'Inhibits tubulin polymerization, disrupting neutrophil chemotaxis and inflammasome assembly',
        },
        {
          term: 'DECT',
          definition:
            'Dual-Energy CT - advanced imaging that identifies urate crystal deposits with color coding',
        },
        {
          term: 'Double contour sign',
          definition:
            'Ultrasound finding of MSU crystal deposition on cartilage surface, specific for gout',
        },
        {
          term: 'NET',
          definition:
            'Neutrophil extracellular trap - web-like structures that help resolve crystal-induced inflammation',
        },
        {
          term: 'HLA-B*5801',
          definition:
            'Genetic variant associated with severe hypersensitivity (SJS/TEN) to allopurinol; testing recommended in high-risk populations',
        },
      ],
      analogies: [
        'The NLRP3 inflammasome has a two-key system: Signal 1 loads the gun (priming) and Signal 2 pulls the trigger (activation).',
        'NETs resolving a gout attack is like casting a fishing net to catch and neutralize the crystal invaders.',
        'URAT1 in the kidney is like a revolving door that keeps pulling uric acid back into the blood instead of letting it leave.',
      ],
      examples: [
        'Patient with recurrent gout flares started on allopurinol 100mg with colchicine prophylaxis per ACR 2020 guidelines',
        'African American patient tested for HLA-B*5801 before starting allopurinol',
        'DECT scan shows green-coded urate deposits in feet of patient with suspected tophaceous gout',
      ],
      clinicalNotes:
        'ACR 2020 guidelines strongly recommend against treating asymptomatic hyperuricemia. Allopurinol can be dose-escalated above the traditional creatinine-based dose ceiling - the key is slow titration. HLA-B*5801 testing is critical in Southeast Asian and African American patients before allopurinol. CPPD in a young patient (<55) warrants metabolic screening: hemochromatosis (ferritin, transferrin sat), hyperparathyroidism (calcium, PTH), hypothyroidism (TSH), hypomagnesemia, hypophosphatasia.',
    },

    4: {
      level: 4,
      summary:
        'Crystal arthropathies involve complex innate immune signaling through NLRP3/IL-1beta, urate transporter genetics (URAT1, ABCG2, SLC2A9), and interaction between metabolic syndrome and inflammatory pathways. Pegloticase with immunomodulation represents a breakthrough for refractory gout.',
      explanation: `## Genetics of Hyperuricemia and Gout

**Genome-Wide Association Studies (GWAS):**
- ~30 loci identified for serum urate levels
- Key transporters:
  - **SLC2A9 (GLUT9):** Largest effect on serum urate (~60% of genetic variance)
    - Renal and intestinal urate reabsorption
    - Loss-of-function: Renal hypouricemia, exercise-induced AKI
  - **ABCG2:** Second largest effect
    - Q141K variant: Common, reduces gut urate excretion by 50%
    - Shifts urate load to kidneys -> "renal overload" hyperuricemia
    - Present in 10-30% of populations, explains significant gout risk
  - **SLC22A12 (URAT1):** Renal reabsorption
    - Target of probenecid and lesinurad
  - **SLC17A1-4 (NPT1/NPT4):** Voltage-dependent urate transport

**Lesch-Nyhan Syndrome:**
- HGPRT (hypoxanthine-guanine phosphoribosyltransferase) deficiency
- X-linked recessive
- Massive urate overproduction
- Severe gout, intellectual disability, self-injurious behavior (lip/finger biting)
- Serum urate typically >10 mg/dL in childhood

## Inflammasome Biology: Deep Dive

**NLRP3 Inflammasome Components:**
- NLRP3 sensor (NACHT domain, LRR domain, PYD domain)
- ASC adaptor protein (PYD + CARD domains)
- Caspase-1 (effector protease)

**Crystal-Specific Activation:**
- Frustrated phagocytosis of large crystals
- Syk kinase activation at phagocytic cup
- PI3K signaling
- Lysosomal membrane permeabilization -> cathepsin B release
- Mitochondrial dysfunction -> mtROS generation
- K+ efflux through damaged membrane -> NLRP3 activation
- NEK7 (a mitotic kinase) is essential for NLRP3 activation

**Gasdermin D and Pyroptosis:**
- Caspase-1 also cleaves gasdermin D
- N-terminal gasdermin D fragment forms pores in plasma membrane
- Causes pyroptotic cell death and passive IL-1beta release
- Amplification loop: Dead cell contents recruit more neutrophils

**Negative Regulation:**
- Autophagy degrades inflammasome components
- Anti-inflammatory cytokines (IL-10, TGF-beta)
- Protein coating of crystals (apolipoprotein B, fetuin-A) reduces immunogenicity
- Explains why crystals can be present in joints without causing inflammation

## Metabolic Syndrome and Gout: Bidirectional Relationship

**Hyperuricemia as Metabolic Risk:**
- Uric acid activates NADPH oxidase in adipocytes and endothelial cells
- Promotes oxidative stress and endothelial dysfunction
- Inhibits nitric oxide production
- Activates RAAS (renin-angiotensin-aldosterone system)
- Promotes insulin resistance via IRS-1 phosphorylation

**Inflammatory Amplification:**
- Metabolic syndrome: Chronic low-grade inflammation
- Adipose tissue produces: IL-6, TNF-alpha, leptin
- These prime NLRP3 inflammasome (Signal 1)
- Fatty acids (palmitate) can serve as Signal 2
- Net result: Lower threshold for crystal-induced flare

**Clinical Implications:**
- Gout is associated with 60% increased CV mortality
- Independent risk factor for MI, stroke, heart failure
- Losartan and fenofibrate have mild uricosuric effects (preferred in gout + HTN/hyperlipidemia)
- SGLT2 inhibitors lower serum urate by 1-1.5 mg/dL (URAT1 competition at proximal tubule)

## Pegloticase: Mechanism and Optimization

**Mechanism:**
- Recombinant porcine-like uricase PEGylated for reduced immunogenicity
- Converts uric acid to allantoin (5-10x more soluble)
- IV infusion every 2 weeks
- Rapidly lowers serum urate to < 1 mg/dL

**Problem: Anti-Drug Antibodies (ADAs):**
- ~40-50% of patients develop ADAs
- Loss of efficacy (serum urate rises back)
- Increased infusion reaction risk
- Pre-infusion urate > 6 mg/dL predicts ADA formation (stop treatment)

**Co-immunosuppression Strategy:**
- **MIRROR trial:** Pegloticase + methotrexate
  - Response rate: 71% vs 39% (pegloticase alone)
  - MTX reduces ADA formation
- **RECIPE study:** Pegloticase + mycophenolate mofetil
- **PROTECT study:** Pegloticase + azathioprine
- Immunomodulation becoming standard of care for pegloticase

## CPPD: Molecular Pathogenesis

**Pyrophosphate Metabolism:**
- Inorganic pyrophosphate (PPi) is a byproduct of many biosynthetic reactions
- ANKH gene: Transmembrane PPi transporter (exports PPi extracellularly)
- ENPP1 (ectonucleotide pyrophosphatase): Generates extracellular PPi from ATP
- TNAP (tissue-nonspecific alkaline phosphatase): Degrades PPi

**Dysregulation in CPPD:**
- Increased ANKH expression or gain-of-function mutations -> excess extracellular PPi
- ENPP1 overexpression
- Decreased TNAP activity (hypophosphatasia)
- Excess PPi + calcium -> CPPD crystal nucleation in cartilage matrix

**Familial CPPD:**
- Autosomal dominant
- ANKH mutations (chromosome 5p15.2)
- Earlier onset (20s-30s)
- Severe polyarticular chondrocalcinosis
- Geographic clusters: Chilean, French, Dutch, Swedish families`,

      keyTerms: [
        {
          term: 'SLC2A9/GLUT9',
          definition:
            'Major urate transporter accounting for ~60% of genetic variance in serum urate levels',
        },
        {
          term: 'ABCG2 Q141K',
          definition:
            'Common variant reducing gut urate excretion by 50%, shifting urate load to kidneys and increasing gout risk',
        },
        {
          term: 'Gasdermin D',
          definition:
            'Pore-forming protein cleaved by caspase-1 that causes pyroptotic cell death during crystal inflammation',
        },
        {
          term: 'Pegloticase',
          definition:
            'PEGylated recombinant uricase that converts urate to allantoin; used for refractory tophaceous gout',
        },
        {
          term: 'ANKH',
          definition:
            'Transmembrane pyrophosphate transporter; mutations cause familial CPPD disease',
        },
        {
          term: 'Anti-drug antibody',
          definition:
            'Immune response against biologic drugs (e.g., pegloticase) that reduces efficacy and increases adverse reactions',
        },
        {
          term: 'NEK7',
          definition:
            'Mitotic kinase essential for NLRP3 inflammasome activation, linking cell division status to inflammatory capacity',
        },
      ],
      analogies: [
        'ABCG2 Q141K is like a clogged drain in the gut, forcing all the uric acid waste water to go through the kidney pipe instead.',
        'Gasdermin D pores are like opening windows in a burning building - contents pour out and sound the alarm for more responders.',
        'Anti-drug antibodies against pegloticase are like the immune system treating the medicine as a foreign invader.',
      ],
      examples: [
        'Patient with refractory tophaceous gout started on pegloticase + methotrexate per MIRROR protocol',
        'Young patient with CPPD found to have hemochromatosis on metabolic workup',
        'Gout patient with hypertension switched to losartan for its mild uricosuric benefit',
      ],
      clinicalNotes:
        'Pegloticase with immunomodulation (MTX, MMF, or AZA) has transformed refractory gout treatment. Pre-infusion serum urate monitoring is essential - rising urate indicates ADA formation and treatment should be stopped to avoid infusion reactions. SGLT2 inhibitors provide an additional 1-1.5 mg/dL urate reduction and should be considered in gout patients with diabetes or heart failure. Familial CPPD (ANKH mutations) should be suspected in early-onset CPPD (<55 years) with severe polyarticular involvement.',
    },

    5: {
      level: 5,
      summary:
        'Current gout research focuses on novel uricosurics (dotinurad, verinurad), URAT1 inhibitor combinations, IL-1 targeted therapy, NLRP3 inhibitors, and redefining the asymptomatic hyperuricemia debate with cardiovascular and renal outcome studies.',
      explanation: `## Evolving Gout Management: Beyond ACR 2020

### Novel Pharmacotherapies:
**Uricosuric Agents:**
- **Lesinurad (withdrawn 2019):** URAT1/OAT4 inhibitor, approved only in combination with XOI
  - Combined pill: Duzallo (lesinurad + allopurinol)
  - Withdrawn for commercial reasons, not safety
- **Dotinurad:** Selective URAT1 inhibitor (approved Japan 2020)
  - More selective than benzbromarone (less hepatotoxicity)
  - Phase 3 data shows non-inferiority to febuxostat
- **Verinurad (RDEA3170):** Potent URAT1 inhibitor
  - In development with allopurinol combination (VERINURAD trials)
  - Dual mechanism: XOI + uricosuric for deeper urate lowering
- **AR882:** Novel URAT1 inhibitor in Phase 3 (DISSOLVE trials)
  - Oral, once-daily
  - May address patients who fail XOI monotherapy

**Anti-Inflammatory Approaches:**
- **Rilonacept (IL-1 trap):** FDA approved for gout flare prevention during ULT initiation
  - PRESURGE studies: Reduced flares from 50% to 5% during ULT initiation
  - Weekly SC injection
  - Alternative to colchicine prophylaxis in patients who cannot tolerate colchicine
- **Canakinumab (anti-IL-1beta):** Effective but not pursued for gout indication (cost)
  - CANTOS trial: Reduced CV events AND gout flares in post-MI patients
  - Proof of concept that IL-1beta links crystal inflammation and atherosclerosis
- **NLRP3 Inhibitors (in development):**
  - Dapansutrile (OLT1177): Oral NLRP3 inhibitor, Phase 2 for gout flare
  - Multiple other NLRP3 inhibitors in pipeline
  - Could treat both the flare and the underlying inflammatory mechanism

### Asymptomatic Hyperuricemia Debate:

**Arguments FOR Treatment:**
- Mendelian randomization studies: Mixed results for causal role of urate in CV disease
- ALL-HEART trial (2022): Allopurinol did NOT reduce CV events in ischemic heart disease
- PERL trial: Allopurinol did NOT slow CKD progression in type 1 DM
- CKD-FIX trial: Allopurinol did NOT slow CKD progression

**Arguments AGAINST Treatment:**
- Most hyperuricemic individuals never develop gout
- No proven benefit for CV or renal outcomes
- Cost and side effect burden of ULT
- ACR 2020: Conditionally recommends AGAINST treating asymptomatic hyperuricemia

**Nuanced View:**
- Subclinical MSU deposition (detected by ultrasound/DECT) present in ~25% of asymptomatic hyperuricemia
- These patients may benefit from ULT (prevent progression to clinical gout)
- Future: Imaging-guided treatment decisions

## CPPD Disease: Research Frontiers

**Therapeutic Targets Under Investigation:**
- **Anti-IL-1 therapy:** Anakinra effective in acute CPPD, but no long-term trials
- **ANKH modulation:** Theoretical target, no drugs yet
- **Phosphocitrate:** PPi crystallization inhibitor (in vitro, not in clinical use)
- **Low-dose methotrexate:** Small studies show benefit in chronic CPPD polyarthritis
- **Colchicine prophylaxis:** Best current option but limited evidence base

**Diagnosis Advances:**
- Ultrasound criteria being validated (OMERACT consensus)
- Hyperechoic punctate deposits within hyaline cartilage
- Differentiation from gout (surface vs. intra-cartilage deposits)

## Gout and Cardiovascular Disease: The CANTOS Connection

**CANTOS Trial (Canakinumab Anti-inflammatory Thrombosis Outcomes Study):**
- 10,061 post-MI patients with hsCRP >= 2 mg/L
- Canakinumab (anti-IL-1beta) reduced CV events vs placebo
- Subanalysis: Also reduced gout flares by 50%
- Established IL-1beta as link between crystal inflammation and atherosclerosis
- Did NOT lead to gout indication (cost-benefit, infection risk)

**Implications:**
- Gout, atherosclerosis, and metabolic syndrome share NLRP3/IL-1beta pathway
- Treating crystal inflammation may have CV benefit
- Colchicine in CV disease (COLCOT, LoDoCo2): Low-dose colchicine reduces CV events post-MI
  - COLCOT: 0.5mg colchicine daily reduced CV events by 23%
  - LoDoCo2: 0.5mg colchicine daily reduced CV events by 31%
  - Now guideline-recommended post-MI
  - Connects gout pharmacology to cardiology

## Quality Measures and Real-World Data

**Gout Quality of Care Gaps:**
- Only 30-40% of gout patients on ULT are at target urate < 6 mg/dL
- ULT adherence at 1 year: ~40%
- Reasons for poor outcomes: Underdosing, lack of titration, poor follow-up
- Treat-to-target with dose escalation is critical

**Electronic Health Record Studies:**
- Large database studies confirm: Gout undertreated
- Allopurinol average dose: 200-250mg (far below potential maximum of 800mg)
- Many patients never have urate checked after starting ULT
- Rheumatology care vs primary care: Better outcomes with specialty management

**Patient-Reported Outcomes:**
- GAQ (Gout Assessment Questionnaire)
- HAQ-DI, SF-36 used in clinical trials
- Patient education and shared decision-making improve adherence
- Digital health interventions: Apps for urate tracking, diet modification, medication reminders

## Emerging Imaging Paradigms

**Dual-Energy CT (DECT):**
- Material decomposition algorithm identifies urate (green) vs calcium (blue)
- Sensitivity 78-100%, specificity 89-100% for tophaceous gout
- Can detect subclinical urate deposition
- Quantitative DECT: Track tophus volume to monitor ULT response
- Limitations: Cost, radiation, misidentification artifacts (nail beds, skin)

**Ultrasound:**
- Double contour sign (MSU on cartilage surface): Sensitivity 65-92%
- Tophus detection: Hyper/hypoechoic heterogeneous aggregates
- Snowstorm sign: Bright foci in synovial fluid
- Advantages: No radiation, real-time, bedside
- OMERACT definitions standardizing reporting

**Photon-Counting CT:**
- Next-generation CT with improved material decomposition
- Better spatial resolution than conventional DECT
- May reduce artifacts and improve diagnostic accuracy
- Early studies promising for crystal detection`,

      keyTerms: [
        {
          term: 'Dotinurad',
          definition:
            'Selective URAT1 inhibitor approved in Japan for gout; more selective than benzbromarone with less hepatotoxicity',
        },
        {
          term: 'Rilonacept',
          definition:
            'IL-1 trap (soluble receptor) FDA approved for gout flare prevention during ULT initiation (PRESURGE trials)',
        },
        {
          term: 'CANTOS',
          definition:
            'Landmark trial showing anti-IL-1beta (canakinumab) reduces CV events post-MI, establishing the inflammation-atherosclerosis link',
        },
        {
          term: 'COLCOT',
          definition:
            'Trial demonstrating low-dose colchicine reduces CV events post-MI by 23%',
        },
        {
          term: 'ALL-HEART',
          definition:
            'Trial showing allopurinol did NOT reduce cardiovascular events in ischemic heart disease',
        },
        {
          term: 'Dapansutrile',
          definition:
            'Oral NLRP3 inflammasome inhibitor in Phase 2 development for acute gout flares',
        },
        {
          term: 'Quantitative DECT',
          definition:
            'Dual-energy CT method that measures tophus volume to monitor treatment response',
        },
      ],
      analogies: [
        'CANTOS connecting gout and heart attacks is like discovering that two seemingly unrelated crimes were committed by the same culprit - IL-1beta.',
        'Colchicine going from gout to cardiology is like a tool designed for one job finding an even more important second use.',
        'Quantitative DECT tracking tophus volume is like a GPS tracker for urate deposits, showing whether treatment is shrinking them.',
      ],
      examples: [
        'Post-MI patient with gout started on low-dose colchicine for dual CV and gout benefit (COLCOT/LoDoCo2 data)',
        'Refractory gout patient started on pegloticase + MTX (MIRROR protocol) with pre-infusion urate monitoring',
        'Patient intolerant to colchicine started on rilonacept for gout flare prophylaxis during ULT initiation',
        'DECT used to quantify tophus burden and monitor ULT response over 12 months',
      ],
      clinicalNotes:
        'The convergence of gout and CV disease through the NLRP3/IL-1beta pathway is one of the most important developments in rheumatology. Low-dose colchicine is now guideline-recommended post-MI (AHA/ACC 2023). The ALL-HEART and CKD-FIX trials have largely settled the asymptomatic hyperuricemia debate - no benefit from treating asymptomatic hyperuricemia for CV or renal protection. Pegloticase with immunomodulation should be standard of care for refractory tophaceous gout. Novel URAT1 inhibitors and NLRP3 inhibitors represent the next therapeutic frontier. Imaging with DECT and ultrasound is increasingly important for diagnosis and monitoring.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acr-2020-gout',
      type: 'article',
      title: '2020 American College of Rheumatology Guideline for Management of Gout',
      authors: ['FitzGerald JD', 'Dalbeth N', 'Mikuls T', 'et al.'],
      source: 'Arthritis Care & Research',
      url: 'https://doi.org/10.1002/acr.24180',
      license: 'Published',
    },
    {
      id: 'cantos-2017',
      type: 'article',
      title: 'Antiinflammatory Therapy with Canakinumab for Atherosclerotic Disease (CANTOS)',
      authors: ['Ridker PM', 'Everett BM', 'Thuren T', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1707914',
      license: 'Published',
    },
    {
      id: 'colcot-2019',
      type: 'article',
      title: 'Efficacy and Safety of Low-Dose Colchicine after Myocardial Infarction (COLCOT)',
      authors: ['Tardif JC', 'Kouz S', 'Waters DD', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1912388',
      license: 'Published',
    },
    {
      id: 'mirror-2022',
      type: 'article',
      title: 'Pegloticase plus Methotrexate for Uncontrolled Gout (MIRROR RCT)',
      authors: ['Botson JK', 'Tesser JRP', 'Bennett R', 'et al.'],
      source: 'Annals of Internal Medicine',
      url: 'https://doi.org/10.7326/M21-4812',
      license: 'Published',
    },
    {
      id: 'all-heart-2022',
      type: 'article',
      title: 'Allopurinol versus Usual Care in UK Patients with Ischaemic Heart Disease (ALL-HEART)',
      authors: ['Mackenzie IS', 'Ford I', 'Nuki G', 'et al.'],
      source: 'The Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(22)01657-9',
      license: 'Published',
    },
  ],
  crossReferences: [
    {
      targetId: 'rheumatology-autoimmune-diseases',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Autoimmune Diseases',
    },
    {
      targetId: 'rheumatology-connective-tissue-disorders',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Connective Tissue Disorders',
    },
    {
      targetId: 'rheumatology-gout',
      targetType: 'topic',
      relationship: 'related',
      label: 'Gout (Detailed)',
    },
  ],
  tags: {
    topics: [
      'rheumatology',
      'crystal-arthropathy',
      'gout',
      'pseudogout',
      'CPPD',
      'uric-acid',
      'inflammasome',
      'NLRP3',
    ],
    systems: ['musculoskeletal', 'immune'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['rheumatology', 'medicine'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
