import { EducationalContent } from '../../types';

export const goutContent: EducationalContent = {
  id: 'condition-gout',
  type: 'condition',
  name: 'Gout',
  alternateNames: ['Gouty arthritis', 'Monosodium urate crystal arthritis', 'Podagra'],
  hpoId: 'HP:0001997',

  levels: {
    1: {
      level: 1,
      summary: 'Gout is a type of arthritis caused by too much uric acid in your blood, which forms crystals in your joints and causes sudden, severe pain.',
      explanation: `Imagine tiny sharp needles forming inside your joint - that's what happens in gout. These "needles" are actually crystals made from a waste product called uric acid.

**What causes gout:**
- Your body makes uric acid when it breaks down certain foods
- Normally, uric acid dissolves in your blood and leaves through your kidneys
- If there's too much, it can form crystals in your joints

**What a gout attack feels like:**
- Sudden, intense pain (often wakes you up at night)
- Usually affects one joint at a time
- The big toe is the most common spot (called "podagra")
- Joint becomes red, hot, swollen, and extremely tender
- Even the weight of a bedsheet can hurt

**What increases your risk:**
- Foods high in purines (red meat, organ meats, shellfish)
- Beer and liquor
- Sugary drinks with fructose
- Being overweight
- Some medications (water pills/diuretics)
- Kidney problems
- Family history

**How it's treated:**
- Medicines to stop the pain and swelling during an attack
- Different medicines to lower uric acid and prevent future attacks
- Avoiding trigger foods and drinks
- Staying hydrated

**The good news:**
Gout can be very well controlled with medication and lifestyle changes. Most people can prevent attacks entirely with proper treatment.`,
      keyTerms: [
        { term: 'uric acid', definition: 'A waste product in your blood that comes from breaking down certain foods' },
        { term: 'crystals', definition: 'Tiny solid particles that form when there\'s too much uric acid' },
        { term: 'podagra', definition: 'Gout affecting the big toe - the classic first attack location', pronunciation: 'poh-DAG-rah' },
        { term: 'purines', definition: 'Substances in certain foods that your body turns into uric acid' },
      ],
      analogies: [
        'Gout crystals are like tiny needles or broken glass forming inside your joint, causing intense pain.',
        'Think of uric acid like sugar in iced tea - if there\'s too much, it won\'t dissolve and crystals form at the bottom.',
      ],
      examples: [
        'A man wakes up at 2 AM with severe pain in his big toe that came on suddenly',
        'After a holiday meal with lots of meat and alcohol, someone gets a painful, swollen ankle',
        'The joint is so tender that even light touch or a bedsheet causes pain',
      ],
    },
    2: {
      level: 2,
      summary: 'Gout is an inflammatory arthritis caused by deposition of monosodium urate (MSU) crystals in joints and soft tissues, resulting from chronic hyperuricemia.',
      explanation: `Gout is the most common inflammatory arthritis in men and affects approximately 4% of US adults. It results from elevated serum uric acid levels leading to crystal formation.

**Uric Acid Metabolism:**
- Uric acid is the end product of purine metabolism in humans
- Humans lack uricase enzyme (present in other mammals)
- Sources: dietary purines (1/3) and endogenous production (2/3)
- Excretion: 2/3 renal, 1/3 GI tract

**Causes of Hyperuricemia:**

*Underexcretion (90% of cases):*
- Chronic kidney disease
- Medications (diuretics, low-dose aspirin, cyclosporine)
- Lead nephropathy
- Hypertension

*Overproduction (10%):*
- Dietary excess (red meat, seafood, alcohol)
- Myeloproliferative disorders
- Tumor lysis syndrome
- Enzyme defects (HGPRT deficiency/Lesch-Nyhan)

**Clinical Stages:**

1. **Asymptomatic hyperuricemia:**
   - Elevated uric acid without symptoms
   - Most never develop gout
   - Treatment controversial

2. **Acute gouty arthritis:**
   - Sudden onset, often nocturnal
   - Monoarticular (one joint) typically
   - First MTP (podagra) in 50% of first attacks
   - Exquisitely painful, red, hot, swollen
   - Peaks in 12-24 hours
   - Self-limited (days to weeks)

3. **Intercritical gout:**
   - Asymptomatic periods between attacks
   - Crystal deposition continues
   - Second attack usually within 2 years

4. **Chronic tophaceous gout:**
   - Tophi: deposits of urate crystals in soft tissues
   - Chronic pain and joint destruction
   - Olecranon, Achilles tendon, ears
   - Develops after years of untreated disease

**Diagnosis:**

*Gold standard:*
- Joint aspiration showing MSU crystals
- Needle-shaped, negatively birefringent under polarized light

*Supportive findings:*
- Elevated serum uric acid (may be normal during acute attack)
- Rapid response to colchicine
- Typical clinical presentation

**Treatment:**

*Acute attack:*
- NSAIDs (indomethacin, naproxen)
- Colchicine (best if started <24 hours)
- Glucocorticoids (oral or intra-articular)
- IL-1 inhibitors for refractory cases

*Prevention/Urate-lowering therapy:*
- Allopurinol (xanthine oxidase inhibitor)
- Febuxostat (xanthine oxidase inhibitor)
- Probenecid (uricosuric)
- Target serum urate <6 mg/dL`,
      keyTerms: [
        { term: 'hyperuricemia', definition: 'Elevated uric acid level in the blood (>6.8 mg/dL)', pronunciation: 'hy-per-yur-ih-SEE-mee-ah' },
        { term: 'monosodium urate (MSU)', definition: 'The crystal form of uric acid that deposits in joints and tissues' },
        { term: 'tophus', definition: 'A nodular deposit of urate crystals in soft tissues, plural: tophi', pronunciation: 'TOE-fus' },
        { term: 'negatively birefringent', definition: 'How MSU crystals appear under polarized microscopy - yellow when parallel to axis' },
        { term: 'xanthine oxidase', definition: 'Enzyme that produces uric acid; target of allopurinol and febuxostat' },
      ],
      analogies: [
        'MSU crystals are like microscopic shards of glass accumulating in the joint space.',
        'Tophi are like chalk deposits building up around joints and tendons.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gout is a crystal-induced arthropathy resulting from MSU crystal deposition, triggering NLRP3 inflammasome activation, IL-1beta release, and intense neutrophilic inflammation, managed acutely with anti-inflammatory agents and chronically with urate-lowering therapy targeting serum urate <6 mg/dL.',
      explanation: `Gout pathophysiology involves both metabolic (hyperuricemia) and inflammatory (crystal-induced) components.

**Pathophysiology of Crystal-Induced Inflammation:**

1. **Crystal Formation:**
   - Uric acid solubility limit: 6.8 mg/dL at physiologic pH/temperature
   - Crystal nucleation favored by cold, dehydration, acidosis
   - MSU crystals are immunogenic

2. **Innate Immune Response:**
   - Crystals phagocytosed by macrophages/monocytes
   - NLRP3 inflammasome activation
   - Caspase-1 cleavage
   - Pro-IL-1beta converted to active IL-1beta
   - Massive neutrophil recruitment
   - Release of inflammatory mediators

3. **Resolution Phase:**
   - Spontaneous resolution occurs
   - Anti-inflammatory cytokines (TGF-beta, IL-10)
   - Neutrophil apoptosis
   - Macrophage phenotype switch
   - Crystal coating with proteins (apoE, apoB)

**Risk Factors and Associations:**

*Strong Risk Factors:*
- Hyperuricemia (duration and degree)
- Male sex
- Dietary factors (meat, seafood, alcohol, fructose)
- Obesity and metabolic syndrome
- Diuretics (especially thiazides)
- Chronic kidney disease
- Hypertension
- Organ transplant (cyclosporine)

*Genetic Factors:*
- SLC2A9, ABCG2 (urate transporters)
- 10-15% have positive family history

**Classification Criteria (2015 ACR/EULAR):**

Entry criterion: At least one episode of joint swelling, pain, or tenderness

Sufficient criterion: MSU crystals in symptomatic joint or tophus

Scoring criteria (if crystal confirmation unavailable):
- Clinical: joint pattern, characteristics, time course
- Laboratory: serum urate, synovial fluid
- Imaging: double contour sign on ultrasound, urate on DECT

**Laboratory and Imaging:**

*Synovial Fluid Analysis:*
- MSU crystals: needle-shaped, negative birefringence
- WBC 20,000-100,000/mm3, neutrophil predominant
- Always rule out infection (can coexist!)

*Serum Uric Acid:*
- May be normal or low during acute attack (cytokine effect)
- Check intercritical period for baseline

*Imaging:*
- X-ray: soft tissue swelling (early), erosions with overhanging edge (late)
- Ultrasound: double contour sign (MSU on cartilage surface)
- DECT: color-coded urate deposition

**Treatment Approach:**

*Acute Gout:*

NSAIDs:
- Indomethacin, naproxen at anti-inflammatory doses
- Contraindicated: CKD, GI disease, cardiovascular risk

Colchicine:
- Most effective <36 hours of symptom onset
- Low-dose equally effective: 1.2 mg, then 0.6 mg one hour later
- Avoid with CYP3A4 inhibitors, P-gp inhibitors
- Reduce dose in CKD

Glucocorticoids:
- Oral prednisone, IM triamcinolone, intra-articular
- Good option when NSAIDs/colchicine contraindicated
- Watch for glucose elevation

IL-1 Inhibitors:
- Anakinra, canakinumab, rilonacept
- For refractory cases

*Urate-Lowering Therapy (ULT):*

Indications:
- Recurrent flares (>=2/year)
- Tophi
- CKD stage 2+
- Urolithiasis
- After first flare: consider if very high urate or comorbidities

Allopurinol:
- Start low (100 mg), titrate slowly
- Target urate <6 mg/dL (or <5 mg/dL with tophi)
- HLA-B*5801 screening in high-risk populations (Asian, African)
- Severe hypersensitivity syndrome (DRESS, SJS/TEN) risk

Febuxostat:
- Alternative xanthine oxidase inhibitor
- Useful in allopurinol intolerance
- FDA boxed warning: increased CV mortality in CARES trial (debated)

Probenecid:
- Uricosuric agent
- Requires adequate renal function (eGFR >30)
- Avoid with kidney stones

Pegloticase:
- Pegylated uricase (converts uric acid to allantoin)
- For severe, refractory gout
- IV infusion, risk of infusion reactions
- Requires antibody monitoring`,
      keyTerms: [
        { term: 'NLRP3 inflammasome', definition: 'Multi-protein complex that activates caspase-1 and IL-1beta release when triggered by MSU crystals' },
        { term: 'double contour sign', definition: 'Ultrasound finding of MSU crystal deposition on cartilage surface appearing as hyperechoic line' },
        { term: 'DECT', definition: 'Dual-energy CT; imaging technique that can color-code urate deposits based on X-ray attenuation' },
        { term: 'HLA-B*5801', definition: 'Genetic marker associated with severe allopurinol hypersensitivity, especially in Asian populations' },
        { term: 'uricosuric', definition: 'Drug that increases uric acid excretion in the urine (e.g., probenecid)' },
      ],
      clinicalNotes: 'Start allopurinol low (100 mg) and go slow - rapid urate lowering can trigger flares. Prophylactic colchicine 0.6 mg daily for 3-6 months when starting ULT. Screen for HLA-B*5801 before allopurinol in Korean, Han Chinese, Thai populations. Serum urate target <6 mg/dL (<5 mg/dL if tophi present).',
    },
    4: {
      level: 4,
      summary: 'Gout pathogenesis involves uric acid supersaturation, MSU crystal nucleation, and NLRP3 inflammasome-mediated IL-1beta release driving neutrophilic inflammation, with treatment targeting inflammatory cascades acutely and urate metabolism chronically through xanthine oxidase inhibition or uricosuric agents.',
      explanation: `**Detailed Molecular Pathogenesis:**

1. **Urate Homeostasis:**

   *Renal Handling (Key Transporters):*
   - URAT1 (SLC22A12): Reabsorption, target of uricosurics
   - GLUT9 (SLC2A9): Reabsorption, genetic variant affects levels
   - ABCG2: Secretion in kidney and gut
   - OAT1, OAT3: Organic anion transporters
   - NPT1, NPT4: Phosphate transporters with urate activity

   *Intestinal Excretion:*
   - ABCG2 major pathway (30% of urate excretion)
   - Reduced ABCG2 function shifts burden to kidney
   - Gut microbiome may affect urate

2. **Crystal Nucleation and Growth:**

   *Factors Promoting Crystallization:*
   - High urate concentration (>6.8 mg/dL)
   - Low temperature (peripheral joints)
   - Low pH (acidic environments)
   - Dehydration/reduced solvent
   - Trauma, microtrauma
   - Matrix proteins as nucleation sites

   *Crystal Characteristics:*
   - Monosodium urate monohydrate
   - Needle-shaped morphology
   - 5-25 micrometers length
   - Surface properties affect immunogenicity

3. **NLRP3 Inflammasome Activation:**

   *Two-Signal Model:*

   Signal 1 (Priming):
   - TLR2, TLR4 engagement
   - NF-kappaB activation
   - Pro-IL-1beta and NLRP3 expression

   Signal 2 (Activation):
   - MSU crystal phagocytosis
   - Lysosomal destabilization
   - Cathepsin B release
   - Potassium efflux
   - Mitochondrial ROS
   - NLRP3 oligomerization
   - ASC recruitment
   - Caspase-1 activation
   - IL-1beta and IL-18 cleavage and release

4. **Neutrophil-Mediated Inflammation:**
   - IL-1beta induces endothelial activation
   - E-selectin, ICAM-1, VCAM-1 expression
   - Massive neutrophil recruitment
   - Neutrophils amplify IL-1beta production
   - NETosis contributes to inflammation
   - Neutrophil extracellular traps aggregate crystals

5. **Spontaneous Resolution Mechanisms:**

   *Protein Coating of Crystals:*
   - ApoE, ApoB coat crystals
   - Reduces inflammatory potential
   - "Aged" crystals less immunogenic

   *Anti-inflammatory Mediators:*
   - TGF-beta from macrophages
   - IL-10 production
   - Lipoxins, resolvins
   - Neutrophil apoptosis (not necrosis)
   - Efferocytosis by macrophages

   *Macrophage Phenotype:*
   - M1 to M2 transition
   - Reduced TNF, IL-1 production
   - Anti-inflammatory cytokine secretion

**Cardiovascular and Metabolic Connections:**

*Gout and CV Risk:*
- Independent association with CV events
- Hyperuricemia damages endothelium
- Xanthine oxidase produces ROS
- Uric acid and hypertension
- Gout associated with metabolic syndrome

*Shared Pathways:*
- Insulin resistance affects renal urate handling
- Fructose increases uric acid and metabolic dysfunction
- Adipose tissue produces uric acid
- Chronic inflammation and atherosclerosis

**Drug Mechanisms:**

*Colchicine:*
- Binds tubulin, inhibits microtubule polymerization
- Blocks neutrophil chemotaxis and adhesion
- Inhibits inflammasome activation
- Reduces IL-1beta production
- Narrow therapeutic index

*Allopurinol:*
- Structural analog of hypoxanthine
- Competitive inhibitor of xanthine oxidase
- Converted to oxypurinol (active metabolite)
- Oxypurinol has long half-life (14-28 hours)
- Dose adjustment required in CKD

*Febuxostat:*
- Non-purine xanthine oxidase inhibitor
- Selective for XO (vs. other molybdoflavin enzymes)
- Hepatic metabolism (no CKD dose adjustment)
- More potent urate lowering than allopurinol

*Probenecid:*
- Inhibits URAT1 transporter
- Blocks urate reabsorption
- Requires good renal function
- Risk of uric acid stones (alkalinize urine)

*Pegloticase:*
- Pegylated recombinant uricase
- Converts uric acid to allantoin (water soluble)
- Achieves very low urate levels
- Highly immunogenic
- Pre-infusion immunomodulation improves durability`,
      keyTerms: [
        { term: 'URAT1', definition: 'Urate transporter 1 (SLC22A12); mediates urate reabsorption in proximal tubule; target of uricosuric drugs' },
        { term: 'ABCG2', definition: 'ATP-binding cassette transporter G2; major pathway for intestinal and renal urate excretion' },
        { term: 'oxypurinol', definition: 'Active metabolite of allopurinol with long half-life; responsible for sustained urate lowering' },
        { term: 'inflammasome', definition: 'Multiprotein complex in innate immune cells that activates inflammatory caspases and IL-1 family cytokines' },
        { term: 'allantoin', definition: 'Highly water-soluble end product of uric acid metabolism by uricase; excreted renally' },
      ],
      clinicalNotes: 'CARES trial controversy: febuxostat arm showed higher CV mortality vs allopurinol, but trial limitations and subsequent studies question this finding. Pegloticase response lost in ~40% due to antibody development; immunomodulation (MTX, azathioprine) improves durability. Colchicine cardiovascular benefits (COLCOT, LoDoCo2 trials) beyond gout.',
    },
    5: {
      level: 5,
      summary: 'Gout represents the paradigm of innate immune activation by crystalline danger signals, with MSU crystals triggering NLRP3-ASC-caspase-1 inflammasome assembly, IL-1beta maturation, and neutrophilic inflammation, informing precision medicine approaches targeting specific transporters, xanthine oxidase isoforms, and IL-1 pathway components.',
      explanation: `**Precision Medicine in Gout:**

1. **Genetic Determinants of Hyperuricemia:**

   *Major Risk Loci:*
   - SLC2A9 (GLUT9): Strongest effect, explains 3-4% of urate variance
   - ABCG2: Q141K variant common (10-30% frequency)
   - SLC22A12 (URAT1): Reabsorption transporter
   - SLC17A1-4: Phosphate/urate transporters
   - GCKR: Metabolic effects on urate

   *Pharmacogenomics:*

   HLA-B*5801 and Allopurinol Hypersensitivity:
   - Strong association with severe cutaneous reactions
   - OR ~80-500 in Asian populations
   - Screening recommended: Korean, Han Chinese, Thai, African ancestry
   - FDA recommends considering testing before allopurinol

   ABCG2 and Drug Response:
   - Q141K reduces ABCG2 function
   - May predict allopurinol response
   - Impacts febuxostat response

   CYP2C9 and Febuxostat:
   - Febuxostat partially metabolized by CYP2C9
   - Potential for drug interactions

2. **Inflammasome as Therapeutic Target:**

   *NLRP3 Inhibitors (Investigational):*
   - MCC950/CRID3: Potent, selective NLRP3 inhibitor
   - OLT1177 (dapansutrile): Phase II completed
   - Tranilast: Approved for other indications, NLRP3 effects
   - Colchicine: Indirect inflammasome inhibition

   *IL-1 Pathway Targeting:*

   Anakinra (IL-1Ra):
   - Recombinant IL-1 receptor antagonist
   - Short half-life, daily injection
   - Effective in acute gout
   - Off-label use

   Canakinumab (anti-IL-1beta):
   - Monoclonal antibody
   - Long half-life (26 days)
   - FDA approved for gout indication
   - CANTOS trial: CV benefit signal
   - Cost-prohibitive for routine use

   Rilonacept (IL-1 trap):
   - Fusion protein binds IL-1alpha/beta, IL-1Ra
   - Weekly injection
   - FDA approved for gout flare prevention

3. **Emerging Urate-Lowering Strategies:**

   *Selective Uricosurics:*

   Lesinurad:
   - URAT1 and OAT4 inhibitor
   - Combined with XOI (withdrawn as monotherapy)
   - Risk of acute renal failure
   - Availability limited

   Verinurad:
   - Highly selective URAT1 inhibitor
   - Phase II/III development
   - Combination with XOI

   Dotinurad:
   - Approved in Japan
   - Selective URAT1 inhibitor
   - Good tolerability profile

   *Modified Uricases:*

   Pegloticase Optimization:
   - Immunomodulation (MTX, azathioprine, leflunomide) extends response
   - Anti-pegloticase antibodies predict loss of response
   - Pre-infusion uric acid monitoring
   - Consider in treatment-refractory gout

   SEL-212:
   - Pegadricase + tolerogenic nanoparticle (SVP-rapamycin)
   - Designed to reduce immunogenicity
   - Phase III development

4. **Gout and Cardiovascular Disease:**

   *Mechanistic Links:*
   - XO-derived ROS and endothelial dysfunction
   - Uric acid activates vascular smooth muscle
   - Crystal-induced vascular inflammation
   - Shared metabolic risk factors

   *Clinical Implications:*

   Febuxostat Controversy:
   - CARES trial: Higher CV death with febuxostat
   - FDA boxed warning added
   - FAST trial (Europe): No CV difference
   - FREED trial: CV benefit signal with febuxostat
   - Debate continues

   Colchicine CV Benefits:
   - COLCOT: Reduced CV events post-MI
   - LoDoCo2: Reduced CV events in stable CAD
   - May be through inflammasome/IL-1 inhibition
   - FDA approved for CV indication

   Allopurinol and CV:
   - ALL-HEART trial: No CV benefit in CAD patients
   - XO inhibition benefits may depend on context

5. **Treatment Algorithm (2020 ACR Guidelines):**

   *Acute Flare Management:*
   - First-line: Colchicine, NSAIDs, or glucocorticoids
   - Choice based on comorbidities, contraindications
   - IL-1 inhibitors for refractory/contraindications

   *ULT Initiation:*

   Strong indications:
   - >= 1 tophus
   - Radiographic damage
   - Frequent flares (>= 2/year)

   Consider:
   - CKD >= stage 3
   - Serum urate > 9 mg/dL
   - Urolithiasis
   - First presentation with high burden

   Treat-to-Target:
   - Goal: serum urate < 6 mg/dL
   - Lower target (< 5 mg/dL) if tophi present
   - Titrate medications to achieve target
   - Regular monitoring

   Anti-inflammatory Prophylaxis:
   - Colchicine 0.6 mg daily or BID
   - Or low-dose NSAID
   - Continue 3-6 months after achieving target
   - Longer if tophi present

6. **Special Populations:**

   *CKD:*
   - Allopurinol dose reduction required
   - Febuxostat no dose adjustment needed
   - Uricosurics less effective
   - Pegloticase may be option
   - Colchicine dose reduction

   *Transplant:*
   - Cyclosporine causes hyperuricemia
   - Drug interactions with colchicine (P-gp inhibition) - dangerous
   - Azathioprine + allopurinol interaction (6-MP accumulation)
   - Febuxostat preferred XOI

   *Heart Failure:*
   - NSAIDs contraindicated
   - Colchicine generally safe
   - Consider IL-1 inhibition
   - ULT may improve outcomes (uncertain)`,
      keyTerms: [
        { term: 'dapansutrile', definition: 'Direct NLRP3 inflammasome inhibitor in development for gout and other inflammatory conditions' },
        { term: 'verinurad', definition: 'Highly selective URAT1 inhibitor in development for combination therapy with xanthine oxidase inhibitors' },
        { term: 'SEL-212', definition: 'Novel pegadricase combined with tolerogenic nanoparticles designed to prevent immunogenicity' },
        { term: 'treat-to-target', definition: 'Strategy of titrating urate-lowering therapy to achieve and maintain specific serum urate goal (<6 mg/dL)' },
        { term: 'CARES trial', definition: 'Cardiovascular safety trial of febuxostat vs allopurinol that showed higher CV mortality with febuxostat, though results are debated' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Gout is the paradigm of NLRP3 inflammasome-mediated inflammation
- MSU crystals: needle-shaped, negatively birefringent (yellow parallel to axis)
- Serum urate may be normal during acute attack
- Screen HLA-B*5801 before allopurinol in high-risk ethnicities
- Start allopurinol 100 mg, titrate to urate < 6 mg/dL
- Prophylactic colchicine when starting ULT (reduces flares)
- Colchicine + cyclosporine = potentially fatal interaction (avoid or drastically reduce dose)
- Allopurinol + azathioprine = 6-MP toxicity (reduce azathioprine dose 75%)
- IL-1 inhibitors for refractory gout or multiple contraindications
- Pegloticase reserved for severe refractory tophaceous gout
- Colchicine has CV benefits beyond gout (COLCOT, LoDoCo2)`,
    },
  },

  media: [
    {
      id: 'gout-big-toe',
      type: 'image',
      filename: 'gout-podagra.jpg',
      title: 'Acute Gouty Arthritis (Podagra)',
      description: 'Erythematous, swollen first MTP joint in acute gout attack',
    },
    {
      id: 'gout-tophi',
      type: 'image',
      filename: 'gout-tophi.jpg',
      title: 'Gouty Tophi',
      description: 'Tophaceous deposits on ear helix and finger',
    },
    {
      id: 'gout-crystals',
      type: 'image',
      filename: 'msu-crystals-polarized.jpg',
      title: 'MSU Crystals Under Polarized Microscopy',
      description: 'Needle-shaped, negatively birefringent monosodium urate crystals',
    },
  ],
  citations: [
    {
      id: 'dalbeth-2021',
      type: 'article',
      title: 'Gout',
      authors: ['Dalbeth N', 'Gosling AL', 'Gaffo A', 'Abhishek A'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(21)00569-9',
    },
    {
      id: 'acr-gout-2020',
      type: 'article',
      title: '2020 ACR Guideline for the Management of Gout',
      authors: ['FitzGerald JD', 'Dalbeth N', 'Mikuls T', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.41247',
    },
  ],
  crossReferences: [
    { targetId: 'condition-pseudogout', targetType: 'condition', relationship: 'related', label: 'Pseudogout (CPPD)' },
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'parent', label: 'Musculoskeletal System' },
    { targetId: 'system-renal', targetType: 'system', relationship: 'related', label: 'Renal System' },
  ],
  tags: {
    systems: ['musculoskeletal', 'renal', 'metabolic'],
    topics: ['rheumatology', 'crystal arthropathy', 'metabolic disease'],
    keywords: ['gout', 'uric acid', 'hyperuricemia', 'MSU crystals', 'podagra', 'tophi', 'allopurinol'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default goutContent;
