import { EducationalContent } from '../../types';

export const pseudogoutContent: EducationalContent = {
  id: 'condition-pseudogout',
  type: 'condition',
  name: 'Pseudogout',
  alternateNames: ['CPPD disease', 'Calcium pyrophosphate deposition disease', 'Calcium pyrophosphate crystal arthritis', 'Chondrocalcinosis'],
  hpoId: 'HP:0100215',

  levels: {
    1: {
      level: 1,
      summary: 'Pseudogout is a type of arthritis caused by calcium crystals forming in your joints, causing pain and swelling similar to gout.',
      explanation: `Pseudogout is called "pseudo" (meaning "false") gout because it looks a lot like gout but is caused by different crystals.

**What happens:**
- Calcium crystals (not uric acid like in gout) build up in your joint cartilage
- These crystals can break loose and cause sudden inflammation
- This leads to pain, swelling, and redness in the joint

**How it differs from gout:**
- Different type of crystal
- Usually affects larger joints (knee most common)
- More common in older adults
- Often linked to other medical conditions

**Where it usually affects:**
- Knees (most common)
- Wrists
- Shoulders
- Ankles
- Elbows

**Who gets pseudogout:**
- Usually people over 60 years old
- Becomes more common with age
- Men and women affected equally
- Sometimes runs in families

**What an attack feels like:**
- Sudden joint pain and swelling
- Joint becomes warm and red
- Similar to gout but often less severe
- Can last days to weeks
- May be triggered by illness, surgery, or injury

**Treatment:**
- Anti-inflammatory medicines (NSAIDs)
- Colchicine (same medicine used for gout)
- Steroid injections into the joint
- Ice and rest during attacks

**The good news:**
While there's no cure, attacks can be well managed with medication, and many people have only occasional flares.`,
      keyTerms: [
        { term: 'pseudogout', definition: 'Joint inflammation caused by calcium crystals (not uric acid crystals like gout)' },
        { term: 'calcium crystals', definition: 'Tiny hard particles made of calcium that form in joint cartilage' },
        { term: 'cartilage', definition: 'The smooth cushioning tissue that covers the ends of bones in joints' },
        { term: 'flare', definition: 'A sudden attack of joint pain and swelling' },
      ],
      analogies: [
        'If gout crystals are like tiny needles, pseudogout crystals are like tiny chunks of chalk in your joints.',
        'Think of cartilage like a sponge that slowly gets hard and crusty as calcium deposits build up.',
      ],
      examples: [
        'An 80-year-old woman develops sudden knee swelling after hip surgery',
        'A 70-year-old man has recurring attacks of wrist pain and swelling',
        'Someone notices their knee X-ray shows calcium deposits in the cartilage',
      ],
    },
    2: {
      level: 2,
      summary: 'Pseudogout (CPPD disease) is a crystal-induced arthropathy caused by calcium pyrophosphate dihydrate crystal deposition in articular cartilage and periarticular tissues, presenting as acute arthritis, chronic arthropathy, or asymptomatic chondrocalcinosis.',
      explanation: `Calcium pyrophosphate deposition (CPPD) disease encompasses a spectrum of conditions caused by CPP crystal deposition. Prevalence increases with age, affecting up to 50% of people over 85.

**Pathophysiology:**
- CPP crystals form in cartilage matrix (chondrocalcinosis)
- Crystal shedding triggers acute inflammation
- Mechanisms similar to gout (inflammasome activation)
- Strong age association

**Clinical Presentations:**

1. **Acute CPP crystal arthritis (Pseudogout):**
   - Acute monoarticular or oligoarticular arthritis
   - Knee most common (>50%), then wrist, shoulder
   - Similar presentation to gout
   - May be triggered by illness, surgery, trauma
   - Self-limited (days to weeks)

2. **Chronic CPP arthropathy:**
   - Resembles OA but with inflammatory features
   - Progressive joint damage
   - Affects joints atypical for OA (MCPs, wrists, shoulders)
   - May have superimposed acute attacks

3. **Asymptomatic chondrocalcinosis:**
   - Radiographic finding without symptoms
   - Very common in elderly
   - May never cause problems

4. **Pseudo-RA presentation:**
   - Symmetric polyarthritis
   - Morning stiffness
   - Can mimic rheumatoid arthritis

5. **Pseudo-neuropathic (Charcot-like):**
   - Severe destructive arthropathy
   - Rare presentation

**Risk Factors and Associations:**

*Age-related:*
- Sporadic (most common)
- Prevalence increases with age
- Degenerative cartilage changes

*Metabolic/Secondary:*
- Hemochromatosis (classic association)
- Hyperparathyroidism
- Hypomagnesemia
- Hypophosphatasia
- Hypothyroidism
- Wilson disease (rare)

*Familial:*
- Early-onset CPPD
- ANKH gene mutations
- Autosomal dominant inheritance

**Diagnosis:**

*Synovial fluid:*
- CPP crystals: rhomboid-shaped, weakly positive birefringence
- WBC usually lower than gout (5,000-50,000)
- Always rule out infection

*Imaging:*
- X-ray: Chondrocalcinosis (linear calcification in cartilage)
- Typical locations: knee menisci, triangular fibrocartilage of wrist, symphysis pubis
- May have OA-like changes

**Treatment:**

*Acute attacks:*
- NSAIDs (if no contraindications)
- Colchicine
- Intra-articular or systemic glucocorticoids
- IL-1 inhibitors for refractory cases

*Prophylaxis:*
- Low-dose colchicine for recurrent attacks
- Treat underlying metabolic conditions

*Chronic arthropathy:*
- Manage as for OA
- Physical therapy
- Joint replacement if severe`,
      keyTerms: [
        { term: 'CPPD', definition: 'Calcium pyrophosphate deposition; the crystal disease causing pseudogout and chondrocalcinosis' },
        { term: 'chondrocalcinosis', definition: 'Calcification of cartilage, seen on X-ray as linear densities in joint cartilage', pronunciation: 'KON-dro-kal-sih-NOH-sis' },
        { term: 'weakly positive birefringence', definition: 'How CPP crystals appear under polarized microscopy - blue when parallel to axis' },
        { term: 'rhomboid', definition: 'Diamond or parallelogram shape - the typical appearance of CPP crystals' },
        { term: 'triangular fibrocartilage', definition: 'Cartilage complex on the ulnar side of the wrist, commonly calcified in CPPD' },
      ],
      analogies: [
        'Chondrocalcinosis is like the cartilage slowly turning to chalk over time.',
        'CPP crystals are like tiny chalk blocks, while gout crystals are like needles.',
      ],
    },
    3: {
      level: 3,
      summary: 'CPPD disease results from calcium pyrophosphate dihydrate crystal deposition in fibrocartilage and hyaline cartilage, with crystal shedding triggering NLRP3 inflammasome-mediated acute arthritis, and chronic deposition causing structural arthropathy distinct from primary OA.',
      explanation: `CPPD encompasses a spectrum from asymptomatic chondrocalcinosis to acute crystal arthritis to chronic destructive arthropathy.

**Crystal Formation Mechanisms:**

1. **Extracellular Pyrophosphate Metabolism:**
   - ATP released from chondrocytes
   - Extracellular nucleotide pyrophosphatase (ENPP1) generates PPi
   - ANK protein transports intracellular PPi to extracellular space
   - Progressive pyrophosphate arthropathy (ANKH mutations)

2. **Factors Promoting Crystallization:**
   - Elevated extracellular pyrophosphate
   - Increased calcium concentration
   - Changes in cartilage matrix
   - Aging-related chondrocyte changes
   - Iron overload (hemochromatosis)
   - Magnesium deficiency (cofactor for pyrophosphatases)

3. **Crystal Characteristics:**
   - Monoclinic and triclinic forms
   - Rhomboid or rod-shaped
   - Weakly positive birefringence (blue parallel)
   - 1-20 micrometers

**Inflammatory Mechanisms:**

*Shared with Gout:*
- Crystal phagocytosis by macrophages/neutrophils
- NLRP3 inflammasome activation
- IL-1beta release
- Neutrophil recruitment

*Differences from Gout:*
- Less intense inflammation
- CPP crystals less pro-inflammatory than MSU
- May relate to crystal surface properties
- Lower WBC counts in synovial fluid

**Clinical Phenotypes (EULAR Terminology):**

1. **Acute CPP Crystal Arthritis:**
   - Previously "pseudogout"
   - Sudden onset monoarthritis/oligoarthritis
   - Knee > wrist > shoulder
   - Triggered by surgery, illness, trauma
   - Duration: days to weeks

2. **Chronic CPP Crystal Inflammatory Arthritis:**
   - Pseudo-RA pattern
   - Symmetric polyarthritis
   - Elevated inflammatory markers
   - Positive RF in some (coincidental)

3. **OA with CPPD:**
   - OA-like changes with CPPD features
   - Unusual joint distribution for primary OA
   - More inflammation than typical OA
   - Radiocarpal, patellofemoral involvement

4. **Severe OA/Destructive Arthropathy:**
   - Milwaukee shoulder syndrome
   - Rapidly progressive destruction
   - Large cool effusions
   - Basic calcium phosphate crystals may coexist

**Metabolic Disease Screening:**

*When to screen (especially if <55 years):*
- Hemochromatosis: iron studies, ferritin, transferrin saturation
- Hyperparathyroidism: calcium, PTH
- Hypomagnesemia: serum magnesium
- Hypothyroidism: TSH
- Hypophosphatasia: alkaline phosphatase

*Hemochromatosis-CPPD:*
- Classic association
- 2nd-3rd MCP involvement characteristic
- "Hook-like" osteophytes
- Treat hemochromatosis (phlebotomy)

**Imaging:**

*Radiography:*
- Chondrocalcinosis: linear calcification
- Fibrocartilage (menisci, TFCC, labrum)
- Hyaline cartilage (thin line paralleling subchondral bone)
- Classic sites: knee menisci, wrist TFCC, symphysis pubis

*Ultrasound:*
- Hyperechoic deposits within cartilage
- Different pattern from gout (within cartilage vs. on surface)

*CT:*
- More sensitive for calcification
- Useful for atypical locations (spine)

**Treatment Approach:**

*Acute Attacks:*
1. NSAIDs (first-line if no contraindications)
2. Colchicine (0.5-1 mg daily or BID)
3. Intra-articular corticosteroid
4. Systemic corticosteroids (if polyarticular or NSAID contraindicated)
5. IL-1 inhibition (refractory cases)

*Prophylaxis (Recurrent attacks):*
- Low-dose colchicine (0.5-1 mg daily)
- Low-dose NSAIDs
- Treat underlying metabolic conditions

*Chronic Arthropathy:*
- Similar to OA management
- Physical therapy, weight management
- Analgesics, NSAIDs
- Joint replacement for severe disease

*No proven disease-modifying therapy:*
- Methotrexate studied (limited evidence)
- Hydroxychloroquine (some use for chronic inflammatory form)
- No therapy to dissolve or prevent crystal formation proven`,
      keyTerms: [
        { term: 'ANKH', definition: 'Gene encoding ANK protein that transports pyrophosphate; mutations cause familial CPPD' },
        { term: 'ENPP1', definition: 'Ectonucleotide pyrophosphatase; enzyme that generates extracellular pyrophosphate from ATP' },
        { term: 'Milwaukee shoulder', definition: 'Destructive arthropathy with large effusions and basic calcium phosphate crystite; associated with CPPD' },
        { term: 'fibrocartilage', definition: 'Type of cartilage found in menisci, labrum, and intervertebral discs; preferentially affected in CPPD' },
        { term: 'crowned dens syndrome', definition: 'CPPD causing acute neck pain from CPP deposits around the odontoid process' },
      ],
      clinicalNotes: 'Always consider metabolic causes in patients <55 years with CPPD. Hemochromatosis classically affects 2nd-3rd MCP joints with hook-like osteophytes. CPP crystals are rhomboid and weakly positive birefringent (blue parallel) vs MSU needles that are negatively birefringent (yellow parallel). Milwaukee shoulder: large bloody/watery effusion, rotator cuff destruction, BCP crystals.',
    },
    4: {
      level: 4,
      summary: 'CPPD disease pathogenesis involves dysregulated extracellular pyrophosphate metabolism through ANKH/ENPP1 pathways, age-related chondrocyte changes, and metabolic disturbances affecting crystal nucleation, with crystal-induced inflammation mediated by NLRP3 inflammasome activation and TLR2 signaling.',
      explanation: `**Detailed Molecular Pathogenesis:**

1. **Pyrophosphate Metabolism:**

   *Extracellular PPi Generation:*
   - ATP released by chondrocytes (vesicular, connexin hemichannels)
   - ENPP1 (PC-1) hydrolyzes ATP to AMP + PPi
   - ANK transports intracellular PPi outward
   - Tissue-nonspecific alkaline phosphatase (TNAP) degrades PPi

   *Balance Determines Mineralization:*
   - High PPi: Inhibits hydroxyapatite, promotes CPP
   - Low PPi: Promotes pathologic mineralization
   - Ratio of PPi to Pi critical

   *Aging Effects:*
   - Increased PPi production with age
   - Decreased pyrophosphatase activity
   - Chondrocyte senescence
   - Matrix changes favor crystallization

2. **Genetic CPPD:**

   *ANKH Mutations:*
   - Autosomal dominant
   - Gain-of-function: increased PPi export
   - Severe polyarticular CPPD
   - Young onset (20s-30s)
   - European and American families described

   *CCAL1 Locus:*
   - Mapped to 8q
   - Familial chondrocalcinosis
   - Gene not yet identified

   *Other Genes:*
   - COL2A1 (collagen II) in some families
   - ENPP1 variants

3. **Metabolic Disease Mechanisms:**

   *Hemochromatosis:*
   - Iron inhibits pyrophosphatases
   - Elevated PPi promotes crystallization
   - Iron-loaded chondrocytes dysfunctional
   - Hook-like osteophytes at MCP joints

   *Hyperparathyroidism:*
   - Elevated calcium promotes crystallization
   - PTH effects on chondrocytes
   - CPP solubility product exceeded

   *Hypomagnesemia:*
   - Magnesium is cofactor for pyrophosphatases
   - Deficiency impairs PPi degradation
   - Often from diuretics, alcoholism, GI losses
   - May respond to magnesium replacement

   *Hypophosphatasia:*
   - TNAP deficiency
   - Cannot degrade extracellular PPi
   - Severe CPPD in some patients

4. **Crystal-Induced Inflammation:**

   *NLRP3 Inflammasome:*
   - CPP crystals activate NLRP3
   - Mechanism similar to MSU
   - IL-1beta and IL-18 release
   - Less potent than MSU crystals

   *TLR2 Signaling:*
   - CPP crystals engage TLR2
   - NF-kappaB activation
   - Pro-inflammatory cytokine production

   *Crystal Properties Affecting Inflammation:*
   - Size, shape, surface area
   - Protein coating
   - Crystalline phase (monoclinic vs triclinic)

5. **Cartilage and Joint Changes:**

   *Chondrocyte Dysfunction:*
   - CPP crystals directly toxic
   - Induce MMP production
   - Promote apoptosis
   - Senescent phenotype

   *Matrix Degradation:*
   - MMP-1, MMP-3, MMP-13
   - Aggrecan loss
   - Collagen damage
   - Progressive OA-like changes

**Crown Dens Syndrome:**

*Pathophysiology:*
- CPP deposition in periodontoid ligaments
- Acute inflammation mimics meningitis
- Fever, neck stiffness, elevated CRP
- Elderly patients

*Diagnosis:*
- CT shows calcification around dens
- MRI: periodontoid soft tissue changes
- Differential: septic arthritis, meningitis, RA

*Treatment:*
- NSAIDs, colchicine, steroids
- Usually self-limited
- May recur

**Basic Calcium Phosphate (BCP) Disease:**

*Overlap with CPPD:*
- Different crystal (hydroxyapatite, octacalcium phosphate)
- Often coexists with CPPD
- Milwaukee shoulder/knee
- Rapidly destructive

*Characteristics:*
- Crystals too small for light microscopy
- Alizarin red staining
- Electron microscopy for identification
- "BCP crystal-associated destructive arthritis"

**Investigational Therapies:**

*Targeting PPi Metabolism:*
- Probenecid may lower PPi (limited data)
- PC-1/ENPP1 inhibitors (theoretical)

*Anti-inflammatory:*
- IL-1 inhibitors (anakinra, canakinumab)
- Limited trial data
- Used for refractory cases

*Matrix Modification:*
- Polyphosphates
- Magnesium supplementation
- Limited clinical evidence`,
      keyTerms: [
        { term: 'TNAP', definition: 'Tissue-nonspecific alkaline phosphatase; enzyme that degrades extracellular pyrophosphate; deficient in hypophosphatasia' },
        { term: 'crowned dens syndrome', definition: 'Acute CPP crystal deposition around C1-C2 causing neck pain, fever, and elevated inflammatory markers mimicking meningitis' },
        { term: 'basic calcium phosphate', definition: 'Family of calcium phosphate crystals (hydroxyapatite, etc.) causing distinct arthropathy, often with CPPD' },
        { term: 'PC-1', definition: 'Alternative name for ENPP1 (plasma cell membrane glycoprotein-1); generates extracellular pyrophosphate' },
        { term: 'hook-like osteophyte', definition: 'Characteristic radiographic finding at MCP joints in hemochromatosis-associated CPPD' },
      ],
      clinicalNotes: 'Crown dens syndrome often misdiagnosed as meningitis or septic arthritis - CT shows periodontoid calcification. BCP crystals require special stains (alizarin red) or EM for identification. Hypophosphatasia: low alkaline phosphatase is the clue. CPPD in young patient always warrants metabolic workup.',
    },
    5: {
      level: 5,
      summary: 'CPPD disease represents dysregulated extracellular pyrophosphate homeostasis through ANKH/ENPP1/TNAP pathways, with crystal nucleation influenced by calcium, magnesium, iron, and matrix factors, and inflammation mediated by pattern recognition receptors and NLRP3 inflammasome, informing potential therapeutic targeting of metabolic pathways and innate immunity.',
      explanation: `**Advanced Understanding and Future Directions:**

1. **Pyrophosphate Metabolic Network:**

   *Extracellular PPi Regulation:*

   PPi Sources:
   - ENPP1: Major source, ATP --> AMP + PPi
   - ANK: Intracellular PPi efflux channel
   - ABCC6: Hepatic contribution (PXE gene)

   PPi Degradation:
   - TNAP: Major alkaline phosphatase
   - PHOSPHO1: Intracellular pyrophosphatase
   - Inorganic pyrophosphatases

   *Genetic Disorders of PPi:*

   | Gene | Disease | PPi Level | CPPD |
   |------|---------|-----------|------|
   | ANKH (GOF) | Familial CPPD | High | Yes |
   | ANKH (LOF) | Craniometaphyseal dysplasia | Low | No |
   | ENPP1 (LOF) | GACI | Low | No |
   | ALPL/TNAP | Hypophosphatasia | High | Yes |
   | ABCC6 | PXE | Low | No |

2. **Crystal Nucleation Biology:**

   *Nucleation Factors:*
   - Pyrophosphate concentration
   - Calcium concentration
   - pH (acidic promotes CPP)
   - Collagen fibrils as templates
   - Matrix vesicles
   - Fetuin-A (inhibitor)

   *Crystal Growth:*
   - Monoclinic vs triclinic phases
   - Size affects inflammatory potential
   - Surface characteristics determine opsonization
   - Protein corona formation

3. **Innate Immune Recognition:**

   *Pattern Recognition:*
   - NLRP3 inflammasome (primary)
   - TLR2 (crystal surface recognition)
   - Complement activation
   - Fc receptor engagement (after antibody coating)

   *Downstream Signaling:*
   - Caspase-1 activation
   - IL-1beta, IL-18 maturation
   - Pyroptosis
   - HMGB1 release (amplification)
   - NF-kappaB target gene expression

4. **Phenotype Heterogeneity:**

   *Why Some Have Inflammation, Others Don't:*
   - Crystal load and shedding patterns
   - Host inflammatory response
   - Genetic polymorphisms in innate immunity
   - Protein coating of crystals
   - "Tolerance" vs. "priming" of macrophages

   *Predicting Attack Risk:*
   - Degree of chondrocalcinosis
   - Metabolic conditions
   - Surgical/medical triggers
   - Inflammatory markers

5. **Diagnostic Advances:**

   *Imaging Biomarkers:*
   - US: Hyperechoic spots/bands within cartilage
   - CT: Superior for calcification (spine, TFCC)
   - DECT: Can distinguish CPP from urate
   - MRI: Detects synovitis, structural damage

   *Synovial Fluid Analysis:*
   - Compensated polarized microscopy
   - CPP: Rhomboid, weakly positive birefringent
   - Variable cell count (lower than gout typically)
   - Mixed crystal disease common

   *Biomarkers (Research):*
   - Plasma pyrophosphate
   - Cartilage turnover markers
   - Inflammatory markers during attacks

6. **Treatment Considerations:**

   *Acute Attack Management:*

   Approach by Comorbidities:
   - No contraindications: NSAIDs or colchicine
   - CKD: Colchicine (dose-adjusted), IA steroid, systemic steroid
   - GI bleeding risk: Colchicine, steroids
   - Polyarticular: Systemic steroids, IL-1 inhibition

   IL-1 Inhibition:
   - Anakinra: Case series showing efficacy
   - Canakinumab: Limited data
   - Reserve for refractory/contraindications

   *Prophylaxis:*
   - Colchicine 0.5-1 mg daily
   - Low-dose NSAID
   - Limited evidence base
   - Target recurrent attackers

   *Chronic Management:*
   - No disease-modifying therapy proven
   - Treat underlying metabolic conditions
   - Symptomatic OA management
   - Physical therapy
   - Joint replacement if needed

7. **Emerging Therapeutic Approaches:**

   *Metabolic Targets:*
   - Magnesium supplementation (some evidence)
   - Phosphocitrate (crystal dissolution - theoretical)
   - ENPP1 modulation
   - ANK modulation

   *Anti-inflammatory:*
   - NLRP3 inhibitors (in development)
   - IL-1 pathway (established)
   - TLR2 antagonists (theoretical)

   *Disease Modification (Needed):*
   - No proven therapy to prevent crystal formation
   - No therapy to dissolve established crystite
   - Major unmet need

8. **Special Clinical Scenarios:**

   *CPPD and Surgery:*
   - Post-operative flares common
   - Consider prophylactic colchicine
   - Distinguish from infection

   *CPPD Mimicking Infection:*
   - Can have fever, leukocytosis
   - Crystal analysis essential
   - May need to treat empirically for infection initially

   *CPPD Spine Disease:*
   - Crowned dens syndrome
   - Ligamentum flavum calcification
   - Myelopathy risk
   - Differential: Infectious, neoplastic

   *Young-Onset CPPD (<55 years):*
   - Always screen for metabolic cause
   - Consider genetic (familial) forms
   - ANKH testing if family history`,
      keyTerms: [
        { term: 'GACI', definition: 'Generalized arterial calcification of infancy; caused by ENPP1 loss-of-function leading to low PPi and vascular calcification' },
        { term: 'fetuin-A', definition: 'Serum protein that inhibits calcium phosphate precipitation; protective against ectopic calcification' },
        { term: 'phosphocitrate', definition: 'Potent inhibitor of crystal growth; investigational approach to dissolve or prevent CPP crystals' },
        { term: 'ABCC6', definition: 'Gene mutated in pseudoxanthoma elasticum; hepatic transporter affecting systemic pyrophosphate levels' },
        { term: 'matrix vesicle', definition: 'Extracellular vesicles released by chondrocytes that serve as nucleation sites for mineralization' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- CPPD crystals: rhomboid, weakly positive birefringent (blue when parallel)
- MSU crystals: needle-shaped, negatively birefringent (yellow when parallel)
- Classic sites of chondrocalcinosis: knee menisci, wrist TFCC, symphysis pubis
- Screen for metabolic causes if CPPD <55 years: hemochromatosis (iron studies), hyperparathyroidism (Ca, PTH), hypomagnesemia, hypothyroidism, hypophosphatasia (low alk phos)
- Hemochromatosis CPPD: hook-like osteophytes at 2nd-3rd MCP joints
- Crowned dens syndrome mimics meningitis: neck pain, fever, elevated CRP + periodontoid calcification on CT
- Milwaukee shoulder: large watery effusion, rotator cuff destruction, BCP crystals
- Post-surgical flares common - consider prophylaxis in known CPPD
- No disease-modifying therapy for CPPD exists`,
    },
  },

  media: [
    {
      id: 'cppd-xray-knee',
      type: 'image',
      filename: 'cppd-chondrocalcinosis-knee.jpg',
      title: 'Knee Chondrocalcinosis',
      description: 'X-ray showing linear calcification of meniscal fibrocartilage',
    },
    {
      id: 'cppd-crystals',
      type: 'image',
      filename: 'cpp-crystals-polarized.jpg',
      title: 'CPP Crystals Under Polarized Microscopy',
      description: 'Rhomboid-shaped, weakly positive birefringent calcium pyrophosphate crystals',
    },
    {
      id: 'crowned-dens-ct',
      type: 'image',
      filename: 'crowned-dens-syndrome-ct.jpg',
      title: 'Crowned Dens Syndrome CT',
      description: 'CT showing periodontoid calcification in crowned dens syndrome',
    },
  ],
  citations: [
    {
      id: 'rosenthal-2016',
      type: 'article',
      title: 'Calcium Pyrophosphate Deposition Disease',
      authors: ['Rosenthal AK', 'Ryan LM'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1511117',
    },
    {
      id: 'zhang-2011',
      type: 'article',
      title: 'EULAR recommendations for CPPD. Part 1: Terminology and diagnosis',
      authors: ['Zhang W', 'Doherty M', 'Bardin T', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/ard.2010.139105',
    },
  ],
  crossReferences: [
    { targetId: 'condition-gout', targetType: 'condition', relationship: 'related', label: 'Gout' },
    { targetId: 'condition-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'parent', label: 'Musculoskeletal System' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['rheumatology', 'crystal arthropathy', 'metabolic disease'],
    keywords: ['pseudogout', 'CPPD', 'chondrocalcinosis', 'calcium pyrophosphate', 'crystal arthritis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pseudogoutContent;
