import { EducationalContent } from '../types';

export const jointDisordersContent: EducationalContent = {
  id: 'ortho-joint-disorders-medical',
  type: 'topic',
  name: 'Joint Disorders: OA, RA, Gout, and Joint Replacement',
  nameEs: 'Trastornos Articulares: OA, AR, Gota y Reemplazo Articular',
  alternateNames: ['Arthritis', 'Arthropathies', 'Degenerative joint disease', 'Inflammatory arthritis'],

  levels: {
    1: {
      level: 1,
      summary:
        'Joints can become painful and stiff due to different types of arthritis. The three most common types are osteoarthritis (wear and tear), rheumatoid arthritis (immune system attack), and gout (crystal buildup).',
      explanation: `Your joints are where two bones meet, and they allow you to move. When joints get damaged or inflamed, it is called arthritis. There are many types, but three are most common.

**Osteoarthritis (OA) - Wear and Tear:**
- The most common type of arthritis
- The smooth cartilage that cushions your joints gradually wears down
- Usually develops slowly over years
- Most common in knees, hips, hands, and spine
- Pain gets worse with activity and better with rest
- Morning stiffness lasts less than 30 minutes
- More common as you get older, if overweight, or after joint injuries

**Rheumatoid Arthritis (RA) - Immune System Problem:**
- Your immune system mistakenly attacks the lining of your joints
- Usually affects both sides of the body equally (both hands, both wrists)
- Morning stiffness lasts more than 1 hour
- Often starts in smaller joints (fingers, wrists)
- Can cause fatigue and general feeling of illness
- Can affect organs beyond joints (lungs, eyes, heart)
- Usually starts between ages 30-60
- More common in women

**Gout - Crystal Buildup:**
- Caused by uric acid crystals building up in a joint
- Usually starts suddenly with severe pain, often at night
- The big toe is the most common first location
- The joint becomes extremely red, hot, swollen, and painful
- Attacks come and go, lasting days to weeks
- Certain foods (red meat, shellfish, alcohol) can trigger attacks
- More common in men

**When Joints Get Too Damaged - Joint Replacement:**
- When arthritis becomes severe and other treatments stop working
- Damaged joint surfaces are removed and replaced with artificial parts
- Most common: hip and knee replacement
- Can dramatically reduce pain and improve function
- Usually lasts 15-20 years or more`,
      keyTerms: [
        { term: 'arthritis', definition: 'Inflammation or damage to a joint causing pain, swelling, and stiffness' },
        { term: 'osteoarthritis', definition: 'The most common arthritis, caused by wear and tear on joint cartilage over time' },
        { term: 'rheumatoid arthritis', definition: 'A disease where the immune system attacks the joint lining, causing inflammation' },
        { term: 'gout', definition: 'Arthritis caused by sharp uric acid crystals depositing in joints, causing sudden severe pain' },
        { term: 'joint replacement', definition: 'Surgery to remove a damaged joint and replace it with an artificial one' },
      ],
      analogies: [
        'Osteoarthritis is like the tread wearing off a tire - it happens gradually from use over time.',
        'Rheumatoid arthritis is like friendly fire - your immune system attacks your own joints by mistake.',
        'Gout is like glass shards forming inside your joint - the sharp crystals cause intense pain.',
        'A joint replacement is like replacing a worn-out door hinge with a brand new one.',
      ],
      examples: [
        'A 65-year-old with knee pain that is worse after walking and better after sitting likely has osteoarthritis.',
        'A 40-year-old woman with painful, swollen knuckles on both hands and morning stiffness lasting 2 hours likely has rheumatoid arthritis.',
        'A man who wakes up at 2 AM with an excruciatingly painful, red, swollen big toe likely has gout.',
      ],
      patientCounselingPoints: [
        'Staying active with low-impact exercise is one of the best things for all types of arthritis.',
        'Maintaining a healthy weight reduces stress on joints, especially knees and hips.',
        'If you have gout, limiting alcohol, red meat, and shellfish can help prevent attacks.',
        'Joint replacement is very successful but is typically recommended only when other treatments have failed.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Joint disorders have distinct pathogenesis, clinical features, and treatment approaches. Osteoarthritis involves cartilage degeneration, RA is an autoimmune synovitis, and gout results from monosodium urate crystal deposition.',
      explanation: `Understanding the differences between joint disorders is essential for diagnosis and management.

**Osteoarthritis (OA):**

*Pathology:*
- Progressive cartilage loss with subchondral bone changes
- Osteophyte (bone spur) formation at joint margins
- Subchondral sclerosis and cyst formation
- Mild synovial inflammation

*Clinical Features:*
- Mechanical pain: worse with activity, better with rest
- Morning stiffness <30 minutes
- Crepitus (grinding sensation)
- Bony enlargement (Heberden's nodes at DIP, Bouchard's nodes at PIP)
- Joint effusion may occur

*Radiographic Findings (Kellgren-Lawrence grading):*
- Joint space narrowing (asymmetric)
- Osteophytes
- Subchondral sclerosis
- Subchondral cysts

*Treatment Ladder:*
1. Education, exercise, weight loss
2. Physical therapy, bracing
3. Acetaminophen, topical NSAIDs
4. Oral NSAIDs, duloxetine
5. Intra-articular corticosteroid injections
6. Viscosupplementation (hyaluronic acid)
7. Joint replacement surgery

**Rheumatoid Arthritis (RA):**

*Pathology:*
- Autoimmune destruction of synovial membrane
- Pannus formation (proliferative granulation tissue)
- Erosion of cartilage and bone from margins inward
- Symmetric polyarthritis pattern

*Clinical Features:*
- Morning stiffness >1 hour (improves with activity)
- Symmetric joint involvement
- MCP and PIP joints, wrists most common
- Swan neck and boutonniere deformities (late)
- Ulnar deviation of fingers (late)
- Rheumatoid nodules (subcutaneous)
- Extra-articular: interstitial lung disease, pericarditis, vasculitis, scleritis

*Diagnosis:*
- RF (Rheumatoid Factor): positive in ~70%
- Anti-CCP antibodies: more specific
- ESR and CRP elevated during active disease
- Radiographs: periarticular osteopenia, marginal erosions, joint space narrowing

*Treatment:*
- DMARDs (Disease-Modifying Anti-Rheumatic Drugs) started early
- Methotrexate is first-line DMARD
- Biologics: TNF inhibitors, IL-6 inhibitors, B-cell depletion, JAK inhibitors
- Corticosteroids for flares (bridge therapy)
- Goal: remission or low disease activity

**Gout:**

*Pathology:*
- Monosodium urate (MSU) crystal deposition
- Crystals trigger intense neutrophilic inflammatory response
- Tophi form with chronic deposition (collections of crystals surrounded by granulomatous inflammation)

*Clinical Features:*
- Acute attacks: sudden onset monoarthritis (classically 1st MTP joint - podagra)
- Red, hot, swollen, exquisitely tender joint
- Intercritical period: asymptomatic between attacks
- Chronic tophaceous gout: deposits in soft tissue, cartilage, bone

*Diagnosis:*
- Gold standard: Joint aspiration showing negatively birefringent needle-shaped crystals under polarized microscopy
- Serum uric acid may be normal during acute attack
- Dual-energy CT can detect urate deposits non-invasively

*Treatment:*
- Acute: NSAIDs (indomethacin), colchicine, corticosteroids
- Prophylaxis: Low-dose colchicine during initiation of urate-lowering therapy
- Urate-lowering therapy: Allopurinol (xanthine oxidase inhibitor), febuxostat
- Target: serum urate <6.0 mg/dL (or <5.0 with tophi)
- Lifestyle: Limit alcohol (especially beer), purine-rich foods, fructose

**Joint Replacement Basics:**
- Total knee replacement (TKR): Resurfaces femoral, tibial, and patellar surfaces
- Total hip replacement (THR): Replaces femoral head and acetabulum
- Bearing surfaces: Metal-on-polyethylene, ceramic-on-polyethylene, ceramic-on-ceramic
- Cemented vs. uncemented fixation
- Expected longevity: 90% survivorship at 15-20 years`,
      keyTerms: [
        { term: 'osteophyte', definition: 'Bony projection (bone spur) that forms at joint margins in osteoarthritis', pronunciation: 'OS-tee-oh-fite' },
        { term: 'pannus', definition: 'Proliferative granulation tissue in RA that erodes cartilage and bone from the joint margins inward' },
        { term: 'DMARD', definition: 'Disease-Modifying Anti-Rheumatic Drug; medication that slows RA progression rather than just relieving symptoms' },
        { term: 'tophi', definition: 'Deposits of monosodium urate crystals in soft tissues seen in chronic gout', pronunciation: 'TOE-fie' },
        { term: 'podagra', definition: 'Gout attack affecting the first metatarsophalangeal (big toe) joint; the classic initial presentation', pronunciation: 'poh-DAG-rah' },
        { term: 'negatively birefringent', definition: 'Optical property of urate crystals seen under polarized light microscopy; they appear yellow when parallel to the compensator' },
        { term: 'Heberden nodes', definition: 'Bony enlargements at the DIP joints of fingers, characteristic of osteoarthritis' },
        { term: 'Bouchard nodes', definition: 'Bony enlargements at the PIP joints of fingers seen in osteoarthritis' },
      ],
      analogies: [
        'OA radiographic changes are like looking at an old road: narrowed lanes (joint space loss), potholes (cysts), speed bumps (osteophytes), and hardened asphalt (sclerosis).',
        'RA pannus is like ivy growing over a wall - it slowly erodes the surface beneath it.',
        'Gout crystals under polarized light are like tiny glowing needles - their negative birefringence (yellow parallel) distinguishes them from pseudogout crystals (positive birefringence, blue parallel).',
      ],
      examples: [
        'A patient with isolated DIP joint swelling and hand X-rays showing osteophytes and joint space narrowing has osteoarthritis, not RA.',
        'A patient with symmetric MCP joint swelling, positive anti-CCP, and marginal erosions on X-ray meets criteria for rheumatoid arthritis.',
        'A patient presenting with an acutely swollen, red first MTP joint should have joint aspiration - finding needle-shaped negatively birefringent crystals confirms gout.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Joint disorders involve distinct pathophysiological mechanisms. OA represents failed joint homeostasis, RA involves T-cell and B-cell mediated autoimmunity, and gout results from inflammasome-mediated responses to urate crystals.',
      explanation: `Deeper understanding of joint disorder pathophysiology guides targeted treatment strategies.

**Osteoarthritis - Beyond Wear and Tear:**

*Molecular Pathogenesis:*
- OA is now understood as active disease, not simple mechanical wear
- Chondrocyte dysfunction: Shift from anabolic (collagen II, aggrecan production) to catabolic (MMP-13, ADAMTS-5) state
- Matrix metalloproteinases (MMPs) degrade collagen network
- Aggrecanases (ADAMTS-4, ADAMTS-5) degrade proteoglycans
- IL-1beta and TNF-alpha drive catabolic gene expression
- Subchondral bone: Increased remodeling, angiogenesis, and sensory nerve ingrowth (pain source)

*Classification:*
- Primary (idiopathic): Age-related, genetic predisposition
- Secondary: Post-traumatic, developmental (hip dysplasia, FAI), metabolic (hemochromatosis, Wilson disease), neuropathic (Charcot joint)

*Joint Arthroplasty Indications:*
- Failed conservative management
- Radiographic evidence of advanced OA
- Significant functional limitation
- Night pain (indicates severe disease)
- Radiograph-symptom correlation important (severe symptoms with minimal radiographic changes warrants further workup)

**Rheumatoid Arthritis - Immunopathology:**

*Pathogenesis:*
- Genetic susceptibility: HLA-DR4 (shared epitope) in 60-70% of seropositive RA
- Environmental triggers: Smoking (increases citrullination), periodontal disease (Porphyromonas gingivalis produces PAD enzyme)
- Citrullination: Post-translational modification of arginine to citrulline
- Anti-CCP antibodies target citrullinated proteins (vimentin, fibrinogen, alpha-enolase)
- Synovial inflammation cascade:
  1. Antigen presentation by dendritic cells to CD4+ T cells
  2. T-cell activation of B cells (autoantibody production) and macrophages
  3. Macrophages release TNF-alpha, IL-1, IL-6
  4. Synovial fibroblast activation and pannus formation
  5. RANKL upregulation drives osteoclast-mediated bone erosion
  6. MMP production destroys cartilage

*Cervical Spine Involvement:*
- Atlantoaxial instability: Pannus erosion of transverse ligament
- Anterior atlantodental interval (AADI) >3 mm is abnormal
- Posterior atlantodental interval (PADI) <14 mm predicts neurological compromise
- MUST obtain flexion-extension cervical spine radiographs before intubation/surgery
- Basilar invagination: Cranial migration of dens

*Treatment Evolution:*
- Treat-to-target strategy: Achieve remission or low disease activity (DAS28 <2.6)
- Step-up vs. step-down approaches
- Conventional DMARDs: Methotrexate (anchor drug), sulfasalazine, hydroxychloroquine, leflunomide
- Biologic DMARDs: TNF inhibitors (adalimumab, etanercept, infliximab), IL-6R (tocilizumab), CTLA-4 (abatacept), anti-CD20 (rituximab)
- Targeted synthetic DMARDs: JAK inhibitors (tofacitinib, baricitinib, upadacitinib)

**Gout - Inflammasome Biology:**

*Uric Acid Metabolism:*
- Purines (adenine, guanine) metabolized to hypoxanthine, then xanthine, then uric acid
- Xanthine oxidase catalyzes final two steps
- Humans lack uricase (lost mutation) - cannot convert uric acid to allantoin
- Urate is primarily excreted renally (2/3) and intestinally (1/3)
- Hyperuricemia: >6.8 mg/dL (saturation point at physiologic pH and temperature)
- Underexcretors (90%): Impaired renal urate excretion via URAT1 and GLUT9 transporters
- Overproducers (10%): Enzyme defects (HPRT deficiency - Lesch-Nyhan), myeloproliferative disorders, tumor lysis

*NLRP3 Inflammasome Activation:*
- MSU crystals are phagocytosed by macrophages
- Crystals damage lysosomal membrane, releasing cathepsin B
- Cathepsin B activates NLRP3 inflammasome
- NLRP3 complex cleaves pro-caspase-1 to active caspase-1
- Caspase-1 cleaves pro-IL-1beta to active IL-1beta
- IL-1beta is the key mediator of acute gout inflammation
- This explains efficacy of IL-1 inhibitors (anakinra, canakinumab) in refractory gout

*Calcium Pyrophosphate Deposition Disease (CPPD/Pseudogout):*
- Weakly positive birefringent rhomboid crystals (blue when parallel)
- Most common in knee, wrist, shoulder
- Associated with hyperparathyroidism, hemochromatosis, hypomagnesemia, hypothyroidism
- Chondrocalcinosis on X-ray (calcification of menisci, triangular fibrocartilage)
- No effective urate-lowering equivalent; treat acute attacks similarly to gout

**Joint Replacement - Surgical Considerations:**

*Total Hip Arthroplasty (THA):*
- Approaches: Posterior (most common), direct anterior (muscle-sparing), anterolateral
- Posterior approach: Higher dislocation rate; hip precautions (avoid flexion >90, adduction, internal rotation)
- Direct anterior: Lower dislocation rate; may have higher nerve injury and fracture rates in learning curve
- Bearing couples: Metal-on-poly (standard), ceramic-on-poly (lowest wear), ceramic-on-ceramic (squeaking risk)
- Fixation: Cemented (older patients, osteoporotic bone), uncemented press-fit (younger, good bone quality)

*Total Knee Arthroplasty (TKA):*
- Cruciate-retaining (CR) vs. posterior-stabilized (PS)
- Component alignment: Mechanical axis alignment vs. kinematic alignment (emerging)
- Patellar resurfacing: Debated; most surgeons in US resurface
- Unicompartmental (partial) knee replacement: For isolated medial or lateral compartment OA with intact ligaments`,
      keyTerms: [
        { term: 'citrullination', definition: 'Post-translational modification converting arginine to citrulline; generates neo-antigens that trigger anti-CCP antibody production in RA' },
        { term: 'NLRP3 inflammasome', definition: 'Intracellular multiprotein complex that activates caspase-1, cleaving pro-IL-1beta into active IL-1beta; key mediator of acute gout inflammation triggered by MSU crystals' },
        { term: 'shared epitope', definition: 'Amino acid sequence in HLA-DR4 and related alleles that confers susceptibility to seropositive RA by presenting citrullinated peptides to T cells' },
        { term: 'ADAMTS-5', definition: 'Aggrecanase enzyme that cleaves aggrecan proteoglycan in cartilage matrix; major driver of OA cartilage degradation' },
        { term: 'atlantoaxial instability', definition: 'Excessive motion between C1 and C2 vertebrae due to transverse ligament erosion by RA pannus; AADI >3mm is abnormal' },
        { term: 'xanthine oxidase', definition: 'Enzyme catalyzing conversion of hypoxanthine to xanthine to uric acid; therapeutic target of allopurinol and febuxostat' },
        { term: 'chondrocalcinosis', definition: 'Calcification of cartilage visible on X-ray; characteristic of CPPD (pseudogout); commonly seen in menisci and triangular fibrocartilage' },
        { term: 'pannus', definition: 'Aggressive granulation tissue in RA that invades and erodes articular cartilage and subchondral bone from the joint margins; composed of activated synovial fibroblasts, macrophages, and inflammatory cells' },
      ],
      clinicalNotes: 'CRITICAL: All RA patients undergoing surgery requiring intubation must have flexion-extension lateral cervical spine radiographs to evaluate for atlantoaxial instability (AADI >3mm or PADI <14mm). Failure to screen can result in catastrophic spinal cord injury during intubation. For gout, serum uric acid may be NORMAL during an acute attack due to uricosuric effect of inflammatory cytokines - do not use a normal level to rule out gout. Joint aspiration is the gold standard.',
    },

    4: {
      level: 4,
      summary:
        'Advanced joint disorder management requires understanding of molecular targets, surgical biomechanics, implant tribology, and complication management. Biologic therapies target specific cytokine pathways and immune cell populations.',
      explanation: `Graduate-level understanding of joint disorders integrates molecular medicine with surgical science.

**Osteoarthritis - Molecular Targets and Emerging Therapies:**

*Signaling Pathways:*
- Wnt signaling: Aberrant activation drives OA progression; DKK1 and FRZB are protective
- Hedgehog pathway: Indian hedgehog (IHH) promotes chondrocyte hypertrophy in OA
- NF-kappaB: Central inflammatory mediator; activated by IL-1beta and TNF-alpha
- mTOR pathway: Regulates autophagy in chondrocytes; impaired autophagy accelerates OA
- TGF-beta: Dual role - protective in cartilage homeostasis but promotes osteophyte formation in subchondral bone

*Emerging Disease-Modifying OA Drugs (DMOADs):*
- Sprifermin (FGF-18): Stimulates chondrocyte proliferation and matrix synthesis; Phase III trials show dose-dependent cartilage thickness increase on MRI
- Lorecivivint (Wnt pathway inhibitor): Targets aberrant Wnt signaling; Phase III completed
- Anti-NGF antibodies (tanezumab, fasinumab): Block pain signaling via nerve growth factor; risk of rapidly progressive OA led to restricted approval
- Senolytic agents: Target senescent cells in OA joints (dasatinib + quercetin in trials)
- Gene therapy: Intra-articular delivery of IL-1Ra (TissueGene-C completed Phase III in Korea)

*Cartilage Biology:*
- Type II collagen: Primary structural protein; triple helix provides tensile strength
- Aggrecan: Proteoglycan providing compressive resistance via osmotic swelling
- Collagen network constrains aggrecan swelling pressure (2-3 atm)
- Once collagen network is disrupted, aggrecan is lost and cannot regenerate the original architecture
- This explains why cartilage has limited repair capacity and why cartilage restoration procedures have variable success

**Rheumatoid Arthritis - Advanced Therapeutics:**

*JAK-STAT Pathway:*
- Janus kinases (JAK1, JAK2, JAK3, TYK2) phosphorylate STAT transcription factors
- Multiple cytokines signal through JAK-STAT: IL-6 (JAK1/2), IL-2/15 (JAK1/3), IFN-gamma (JAK1/2), IL-12/23 (JAK2/TYK2)
- JAK inhibitors: Small molecule oral agents
  - Tofacitinib: JAK1/JAK3 (with some JAK2)
  - Baricitinib: JAK1/JAK2
  - Upadacitinib: JAK1 selective
- ORAL Surveillance trial (tofacitinib): Increased risk of MACE and malignancy vs. TNF inhibitors in patients >50 with CV risk factors
- FDA black box warning on all JAK inhibitors for RA

*Biologic Mechanisms:*
- Anti-TNF: Neutralize soluble and membrane-bound TNF-alpha; increase infection risk including TB reactivation
- Anti-IL-6R (tocilizumab, sarilumab): Block IL-6-driven acute phase response; may mask infection (CRP suppressed)
- CTLA-4 Ig (abatacept): Blocks T-cell co-stimulation (CD80/86 - CD28 interaction)
- Anti-CD20 (rituximab): Depletes B cells; reserved for TNF failures; risk of progressive multifocal leukoencephalopathy (PML)

*Perioperative RA Management:*
- Methotrexate: Continue through surgery (DMARD continuation reduces flares without increasing infection)
- Biologic DMARDs: Hold 1-2 dosing cycles before elective surgery (varies by half-life)
- JAK inhibitors: Hold 7 days preoperatively
- Corticosteroids: Stress-dose if on chronic steroids; do not exceed physiologic replacement

**Gout - Advanced Management:**

*Refractory Gout:*
- Pegloticase (pegylated uricase): Converts uric acid to allantoin; for patients who fail oral ULT
  - Infusion reactions and anti-drug antibodies limit efficacy (30-40% achieve target)
  - Immunomodulation with methotrexate or mycophenolate improves response rate to 70%+
  - Requires G6PD testing before initiation (risk of methemoglobinemia and hemolysis)
- IL-1 inhibitors: Anakinra (off-label), canakinumab (approved in EU) for patients who cannot take NSAIDs, colchicine, or corticosteroids
- Lesinurad (URAT1 inhibitor): Combined with xanthine oxidase inhibitor; withdrawn from market but mechanism important

*Imaging Advances:*
- Dual-energy CT (DECT): Detects urate deposits with 90% sensitivity and 98% specificity
  - Color-coded display: Green for urate, purple for calcium
  - Useful for atypical presentations and monitoring treatment response
- Ultrasound: Double contour sign (urate on cartilage surface), snowstorm appearance in tophaceous gout

**Joint Replacement - Advanced Concepts:**

*Implant Tribology:*
- Wear mechanisms: Adhesive, abrasive, fatigue, corrosion
- Polyethylene wear: Cross-linking reduces volumetric wear by 50-95%
  - Highly cross-linked PE (HXLPE): Standard for modern implants
  - Vitamin E-infused PE: Antioxidant protection against oxidative degradation
- Metal-on-metal: Abandoned for standard THA due to adverse local tissue reactions (ALTR)
  - Metal ions (cobalt, chromium) cause pseudotumor formation
  - Monitoring: Serum cobalt and chromium levels
- Ceramic: Lowest wear rates; risk of squeaking (alumina-on-alumina) and fracture (3rd-gen alumina)
  - Delta ceramic (alumina matrix composite): Addresses fracture concern

*Periprosthetic Joint Infection (PJI):*
- Musculoskeletal Infection Society (MSIS) criteria: Major criteria (sinus tract, two positive cultures of same organism) or minor criteria (elevated ESR/CRP, elevated synovial WBC, elevated synovial PMN%, positive alpha-defensin, positive culture, elevated CRP on synovial analysis)
- Alpha-defensin: Synovial biomarker with >97% sensitivity and specificity for PJI
- Treatment: One-stage vs. two-stage exchange arthroplasty
  - Two-stage (gold standard in North America): Explant, antibiotic spacer, 6-8 weeks IV antibiotics, reimplantation
  - One-stage: Growing evidence; selected patients with known organism and good soft tissues
- Biofilm: Bacteria on implant surfaces form biofilm within 24-48 hours; resistant to systemic antibiotics
- DAIR (Debridement, Antibiotics, Implant Retention): Option for acute PJI (<4 weeks from surgery or <3 weeks of symptoms) with stable implants

*Aseptic Loosening:*
- Most common cause of revision arthroplasty
- Particle disease: Wear debris (polyethylene, metal, cement) phagocytosed by macrophages
- Macrophage activation: TNF-alpha, IL-1, IL-6, RANKL upregulation
- Osteoclast recruitment and periprosthetic osteolysis
- Results in implant loosening and bone loss
- Reduced by modern bearing surfaces with lower wear rates`,
      keyTerms: [
        { term: 'tribology', definition: 'Science of friction, wear, and lubrication between interacting surfaces; critical for understanding bearing surface performance in joint replacement' },
        { term: 'JAK-STAT pathway', definition: 'Intracellular signaling cascade where Janus kinases (JAK) phosphorylate STAT transcription factors; mediates signaling for multiple cytokines; target of JAK inhibitor drugs in RA' },
        { term: 'periprosthetic joint infection', definition: 'Infection around a joint replacement implant; diagnosed by MSIS criteria including alpha-defensin; typically requires implant exchange' },
        { term: 'alpha-defensin', definition: 'Antimicrobial peptide in synovial fluid; highly sensitive and specific biomarker for periprosthetic joint infection (>97% sensitivity/specificity)' },
        { term: 'osteolysis', definition: 'Bone resorption around implants caused by macrophage-mediated inflammatory response to wear debris (particle disease); leading cause of aseptic implant loosening' },
        { term: 'pegloticase', definition: 'Pegylated recombinant uricase enzyme that converts uric acid to allantoin; used for refractory gout; requires G6PD testing and immunomodulation co-therapy to reduce anti-drug antibodies' },
        { term: 'DAIR', definition: 'Debridement, Antibiotics, and Implant Retention; surgical approach for acute periprosthetic joint infection where implant is retained with liner exchange' },
        { term: 'DMOADs', definition: 'Disease-Modifying Osteoarthritis Drugs; emerging therapeutic class targeting cartilage degradation, including sprifermin (FGF-18) and Wnt pathway inhibitors' },
      ],
      clinicalNotes: 'For perioperative management of RA patients: continue methotrexate (evidence from DMARD Continuation trial), but hold biologics and JAK inhibitors per their half-lives. The ORAL Surveillance trial changed JAK inhibitor prescribing: FDA requires failure of TNF inhibitor before JAK inhibitor use. For PJI diagnosis, the lateral flow alpha-defensin test is a rapid point-of-care option but has lower sensitivity than the lab-based ELISA. Always send a minimum of 3-5 tissue cultures (not swabs) held for 14 days to detect low-virulence organisms like C. acnes. For gout: immunomodulation co-therapy with pegloticase (MIRROR trial with methotrexate, PROTECT trial with mycophenolate) has transformed refractory gout management by reducing anti-drug antibody formation.',
    },

    5: {
      level: 5,
      summary:
        'State-of-the-art joint disorder management encompasses precision medicine approaches, advanced implant technology, robotic-assisted surgery, and regenerative strategies. Multi-disciplinary management optimizes outcomes across the spectrum of arthropathies.',
      explanation: `Expert-level joint disorder management integrates current evidence, emerging technology, and systems-based care.

**Osteoarthritis - Precision Medicine and Regenerative Approaches:**

*OA Phenotyping:*
- Emerging recognition that OA is not one disease but multiple phenotypes:
  - Inflammatory OA: Elevated synovial IL-6, TNF-alpha; may respond to anti-inflammatory biologics
  - Metabolic OA: Associated with metabolic syndrome; adipokines (leptin, adiponectin) drive inflammation
  - Mechanical/post-traumatic OA: Structural malalignment primary driver
  - Age-related/senescent OA: Cellular senescence and autophagy failure
  - Genetic OA: Strong family history; collagen mutations (COL2A1), GDF5 variants
- Biomarker-guided treatment selection is an active research area:
  - CTX-II (cartilage degradation marker)
  - COMP (cartilage oligomeric matrix protein)
  - MRI compositional mapping: T2, T1rho, dGEMRIC for early cartilage changes

*Regenerative Strategies:*
- Autologous chondrocyte implantation (ACI/MACI): Harvest, expand, reimplant chondrocytes for focal defects
- Osteochondral allograft transplantation (OCA): Fresh grafts for large defects
- Microfracture: Marrow stimulation for small defects; produces fibrocartilage (inferior to hyaline)
- MSC therapies: Bone marrow-derived or adipose-derived mesenchymal stem cells; variable evidence
- Scaffold-based approaches: Collagen, hyaluronic acid, or synthetic scaffolds seeded with cells
- iPSC-derived chondrocytes: Induced pluripotent stem cells differentiated into chondrocytes (preclinical)

**Rheumatoid Arthritis - Precision and Future Directions:**

*Biomarker-Guided Treatment:*
- Multi-biomarker disease activity (MBDA) score (Vectra): 12 serum proteins predicting disease activity
- Synovial biopsy-guided treatment: Identifying synovial pathotype (lymphoid, myeloid, fibroid) to select therapy
- Anti-CarP antibodies: Target carbamylated proteins; may identify patients who are seronegative (RF-/CCP-) but have erosive disease
- Pharmacogenomics: Predicting methotrexate response via MTHFR polymorphisms and drug metabolite levels

*Emerging Targets:*
- BTK inhibitors (Bruton's tyrosine kinase): Targeting B-cell and macrophage activation
- CD40/CD40L pathway: T-cell co-stimulation beyond CTLA-4
- GM-CSF inhibitors: Targeting macrophage activation (mavrilimumab, otilimab)
- CAR-T cell therapy: Engineering T cells to target autoreactive B cells (early trials)
- Regulatory T-cell (Treg) therapy: Adoptive transfer of expanded Tregs to restore immune tolerance

**Gout - Comprehensive Management:**

*Treat-to-Target Strategy:*
- 2020 ACR Guidelines: Strong recommendation for ULT in patients with tophaceous gout, >2 flares/year, or CKD stage ≥3
- Conditional recommendation to start ULT after first flare for certain patients
- Allopurinol: Start low (100 mg, or 50 mg in CKD), titrate every 2-4 weeks to target
- HLA-B*5801 testing: Mandatory before allopurinol in Southeast Asian, African American, and Korean descent populations (risk of DRESS/SJS-TEN)
- Febuxostat: CARES trial showed non-inferior CV outcomes but higher CV mortality (debated methodology); FDA black box warning

*Advanced Imaging for Disease Monitoring:*
- DECT volumetric urate measurement: Quantifies total body urate burden; monitors treatment response
- Ultrasound power Doppler: Synovial vascularity correlates with inflammation
- OMERACT ultrasound definitions: Standardized scoring for gout features

**Joint Replacement - Advanced Technologies:**

*Robotic-Assisted Arthroplasty:*
- Systems: MAKO (Stryker), ROSA (Zimmer Biomet), VELYS (DePuy Synthes), CORI (Smith+Nephew)
- CT-based planning (MAKO) vs. imageless navigation (ROSA, VELYS)
- Evidence: Improved component positioning accuracy, reduced outliers
- Functional outcomes: Short-term equivalent to conventional; long-term data emerging
- Learning curve and cost-effectiveness remain debated
- Haptic boundaries prevent bone cuts outside planned resection

*Cementless TKA:*
- Historically inferior fixation; modern designs improving
- Highly porous titanium or tantalum (trabecular metal) surfaces
- Biologic fixation via bone ingrowth into porous surface
- Potential advantage: Eliminates cement-related complications, may improve longevity in younger patients
- Concern: Initial migration and early loosening in osteoporotic bone

*Enhanced Recovery After Surgery (ERAS) for Arthroplasty:*
- Multimodal pain management: Periarticular injection cocktail, nerve blocks (adductor canal for TKA), limited opioid use
- Tranexamic acid (TXA): Topical and IV; reduces blood loss and transfusion by 50-70%
- Outpatient arthroplasty: Same-day discharge THA and TKA in selected patients
- AAOS appropriate use criteria for outpatient arthroplasty
- DVT prophylaxis: Aspirin 81 mg BID gaining acceptance for standard-risk patients (vs. LMWH or DOACs)

*Revision Arthroplasty:*
- Bone loss management: Trabecular metal augments, structural allografts, impaction grafting
- Constraint levels: Increase constraint for increasing bone loss and ligament deficiency
- Megaprostheses for massive bone loss
- Custom 3D-printed implants for complex revision with severe bone deficiency

**Multidisciplinary Care Models:**
- Rapid access clinics for inflammatory arthritis (target DMARD start within 6 weeks of symptom onset)
- Fracture Liaison Services for secondary osteoporosis prevention
- Joint replacement optimization clinics: Preoperative hemoglobin, nutrition, diabetes management, smoking cessation
- Virtual care and remote monitoring: Wearable sensors for gait analysis and rehabilitation tracking post-arthroplasty`,
      keyTerms: [
        { term: 'robotic-assisted arthroplasty', definition: 'Computer-navigated surgical systems using robotic arms with haptic boundaries to improve accuracy of bone cuts and implant positioning in joint replacement' },
        { term: 'OA phenotyping', definition: 'Classification of osteoarthritis into distinct molecular subtypes (inflammatory, metabolic, mechanical, senescent, genetic) to guide precision treatment selection' },
        { term: 'HLA-B*5801', definition: 'Genetic marker associated with severe allopurinol hypersensitivity (DRESS/SJS-TEN); testing mandatory before allopurinol in high-risk populations (Southeast Asian, African American, Korean descent)' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; multimodal perioperative protocol including regional anesthesia, TXA, limited opioids, and early mobilization; enables same-day discharge arthroplasty' },
        { term: 'MBDA score', definition: 'Multi-Biomarker Disease Activity score (Vectra); 12-protein serum panel providing objective disease activity assessment in RA beyond CRP and ESR' },
        { term: 'MACI', definition: 'Matrix-Associated Autologous Chondrocyte Implantation; second-generation ACI using a collagen scaffold seeded with expanded autologous chondrocytes for focal cartilage defects' },
        { term: 'trabecular metal', definition: 'Highly porous tantalum material (80% porosity) mimicking cancellous bone architecture; used in cementless implant fixation and bone defect reconstruction' },
        { term: 'treat-to-target', definition: 'Management strategy with defined treatment goals (remission or low disease activity) and systematic escalation until target is achieved; standard of care in RA and gout' },
      ],
      clinicalNotes: 'Key practice pearls: (1) HLA-B*5801 testing before allopurinol initiation in at-risk populations can prevent fatal hypersensitivity reactions - this is a medicolegal standard. (2) For robotic-assisted arthroplasty: improved positioning accuracy is established, but long-term clinical superiority over conventional techniques is not yet proven - patient selection and surgeon experience remain paramount. (3) Outpatient (same-day) arthroplasty requires careful patient selection - BMI <40, ASA 1-2, reliable home support, distance <1 hour from hospital. CMS bundled payment models are driving adoption. (4) For RA, the window of opportunity concept is critical: DMARD initiation within 3-6 months of symptom onset produces significantly better long-term outcomes than delayed treatment. (5) Aspirin 81mg BID for VTE prophylaxis after THA/TKA is supported by the EPCAT-2 and CRISTAL trials, changing practice from routine LMWH/warfarin in standard-risk patients.',
    },
  },

  media: [
    {
      id: 'oa-joint-changes',
      type: 'diagram',
      filename: 'oa-pathology-stages.svg',
      title: 'Osteoarthritis Joint Pathology',
      description: 'Progressive stages of OA showing cartilage loss, osteophytes, subchondral sclerosis, and cyst formation',
    },
    {
      id: 'ra-joint-pathology',
      type: 'diagram',
      filename: 'ra-pannus-erosion.svg',
      title: 'Rheumatoid Arthritis Joint Pathology',
      description: 'Pannus formation, marginal erosions, and synovial inflammation in RA',
    },
    {
      id: 'gout-crystal-polarized',
      type: 'image',
      filename: 'gout-crystals-polarized-light.jpg',
      title: 'Gout Crystals Under Polarized Microscopy',
      description: 'Needle-shaped negatively birefringent MSU crystals under compensated polarized light',
    },
    {
      id: 'joint-replacement-components',
      type: 'diagram',
      filename: 'tha-tka-components.svg',
      title: 'Joint Replacement Components',
      description: 'THA and TKA component anatomy including bearing surfaces',
    },
  ],
  citations: [
    {
      id: 'joint-disorders-firestein',
      type: 'textbook',
      title: 'Firestein & Kelley\'s Textbook of Rheumatology',
      authors: ['Firestein, G.S.', 'Budd, R.C.', 'Gabriel, S.E.'],
      source: 'Elsevier',
      chapter: 'Pathogenesis of Rheumatoid Arthritis; Osteoarthritis; Crystal Arthropathies',
      license: 'Educational Reference',
    },
    {
      id: 'joint-disorders-acr-gout',
      type: 'article',
      title: '2020 American College of Rheumatology Guidelines for Management of Gout',
      authors: ['FitzGerald, J.D.', 'Dalbeth, N.', 'Mikuls, T.'],
      source: 'Arthritis Care & Research',
      license: 'Open Access',
    },
    {
      id: 'joint-replacement-aaos',
      type: 'article',
      title: 'AAOS Clinical Practice Guidelines for Joint Replacement',
      source: 'American Academy of Orthopaedic Surgeons',
      license: 'Educational Reference',
    },
    {
      id: 'oral-surveillance-trial',
      type: 'article',
      title: 'Cardiovascular and Cancer Risk with Tofacitinib in Rheumatoid Arthritis (ORAL Surveillance)',
      authors: ['Ytterberg, S.R.', 'Bhatt, D.L.', 'Mikuls, T.R.'],
      source: 'New England Journal of Medicine',
      license: 'Educational Reference',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-fractures-medical', targetType: 'topic', relationship: 'related', label: 'Fractures' },
    { targetId: 'ortho-spine-disorders-medical', targetType: 'topic', relationship: 'related', label: 'Spine Disorders' },
    { targetId: 'ortho-patient-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'OA Patient Education' },
    { targetId: 'ortho-patient-joint-replacement', targetType: 'concept', relationship: 'related', label: 'Joint Replacement Patient Education' },
  ],
  tags: {
    systems: ['musculoskeletal', 'immune'],
    topics: ['orthopedics', 'rheumatology', 'arthritis', 'joint replacement', 'gout'],
    keywords: [
      'osteoarthritis', 'rheumatoid arthritis', 'gout', 'uric acid', 'DMARD',
      'biologic therapy', 'arthroplasty', 'joint replacement', 'PJI',
      'robotic surgery', 'NLRP3', 'citrullination', 'anti-CCP',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'rheumatology'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointDisordersContent;
