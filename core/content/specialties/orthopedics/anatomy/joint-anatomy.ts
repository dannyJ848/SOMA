import { EducationalContent } from '../../../types';

export const jointAnatomyContent: EducationalContent = {
  id: 'ortho-joint-anatomy',
  type: 'structure',
  name: 'Joint Anatomy and Function',
  alternateNames: ['Articular anatomy', 'Joint structure', 'Articulations'],
  fmaId: 'FMA:7490',

  levels: {
    1: {
      level: 1,
      summary: 'Joints are where two or more bones meet, allowing your body to bend, twist, and move in different ways.',
      explanation: `Joints are like hinges in your body that let you move. Without them, you would be stiff as a board!

**Types of Joints:**

*Joints That Move A Lot (Synovial Joints):*
- **Ball-and-socket**: Your hip and shoulder - lets you move in circles
- **Hinge**: Your elbow and knee - bends one way like a door
- **Pivot**: Your neck - lets you turn your head "no"

*Joints That Move A Little:*
- The bones in your spine have small cushions between them
- These let you bend and twist your back

*Joints That Don't Move:*
- The bones in your skull are locked together
- These protect your brain

**Parts of a Moving Joint:**
- **Cartilage**: Smooth, slippery coating on bone ends (like ice on a skating rink)
- **Joint fluid**: Thick, slippery liquid that helps bones glide (like oil in a machine)
- **Ligaments**: Strong bands that hold bones together (like straps)
- **Joint capsule**: A bag that wraps around the joint and holds the fluid in

**Why Joints Hurt:**
When the smooth cartilage wears down or gets damaged, bones can rub together and cause pain. This is what happens in arthritis.`,
      keyTerms: [
        { term: 'joint', definition: 'Where two or more bones meet in your body' },
        { term: 'cartilage', definition: 'Smooth, rubbery tissue that covers the ends of bones in a joint' },
        { term: 'ligament', definition: 'Strong bands that connect bones to other bones' },
        { term: 'synovial fluid', definition: 'Slippery liquid inside joints that helps them move smoothly' },
      ],
      analogies: [
        'A joint is like a door hinge - it connects two parts and lets them swing.',
        'Cartilage is like the non-stick coating on a pan - it keeps things from rubbing.',
        'Joint fluid is like WD-40 - it keeps everything moving smoothly.',
        'Ligaments are like seat belts - they hold things in place but still let them move.',
      ],
      examples: [
        'When you wave goodbye, your shoulder joint moves in a circle.',
        'Kicking a soccer ball uses your knee joint bending and straightening.',
        'Shaking your head "no" uses the pivot joint in your neck.',
      ],
    },
    2: {
      level: 2,
      summary: 'Joints are classified by their structure and range of motion, from immobile fibrous joints to highly mobile synovial joints with specialized structures for smooth movement.',
      explanation: `Joints (articulations) are classified based on their structure, the type of tissue connecting bones, and their degree of movement.

**Structural Classification:**

1. **Fibrous Joints** (connected by fibrous tissue)
   - Sutures: Skull bones (immobile after growth)
   - Syndesmoses: Tibia-fibula connection (slight movement)
   - Gomphoses: Teeth in sockets

2. **Cartilaginous Joints** (connected by cartilage)
   - Synchondroses: Growth plates (hyaline cartilage)
   - Symphyses: Pubic symphysis, intervertebral discs (fibrocartilage)

3. **Synovial Joints** (most mobile, have joint cavity)
   - Ball-and-socket: Hip, shoulder (most mobile)
   - Hinge: Elbow, knee, fingers (flexion/extension)
   - Pivot: Atlantoaxial (rotation)
   - Saddle: Thumb CMC joint (biaxial)
   - Condyloid: Wrist (biaxial)
   - Plane/Gliding: Carpals, tarsals (sliding)

**Functional Classification:**
- **Synarthrosis**: Immobile (skull sutures)
- **Amphiarthrosis**: Slightly mobile (vertebrae)
- **Diarthrosis**: Freely movable (synovial joints)

**Synovial Joint Components:**
- **Articular cartilage**: Hyaline cartilage covering bone ends (2-4mm thick)
- **Joint capsule**: Outer fibrous layer + inner synovial membrane
- **Synovial membrane**: Produces synovial fluid
- **Synovial fluid**: Lubricates, nourishes cartilage, shock absorption
- **Ligaments**: Provide stability (intrinsic and extrinsic)
- **Menisci**: Fibrocartilage pads in some joints (knee)
- **Bursae**: Fluid-filled sacs reducing friction

**Joint Movements:**
- Flexion/Extension
- Abduction/Adduction
- Internal/External rotation
- Circumduction
- Pronation/Supination (forearm)
- Dorsiflexion/Plantarflexion (ankle)`,
      keyTerms: [
        { term: 'synovial joint', definition: 'Most mobile joint type, characterized by a joint cavity filled with synovial fluid', pronunciation: 'sih-NOH-vee-ul' },
        { term: 'articular cartilage', definition: 'Hyaline cartilage covering the bone surfaces within a joint', pronunciation: 'ar-TIK-yoo-lar' },
        { term: 'meniscus', definition: 'C-shaped fibrocartilage pad in joints like the knee that improves fit and absorbs shock', pronunciation: 'meh-NIS-kus' },
        { term: 'bursa', definition: 'Small fluid-filled sac that reduces friction between tissues', pronunciation: 'BUR-sah' },
        { term: 'joint capsule', definition: 'Connective tissue envelope surrounding a synovial joint' },
        { term: 'flexion', definition: 'Bending movement that decreases the angle between body parts' },
        { term: 'extension', definition: 'Straightening movement that increases the angle between body parts' },
      ],
      analogies: [
        'Synovial fluid works like motor oil - it lubricates and reduces friction between moving parts.',
        'The meniscus is like a gasket - it improves the seal and fit between two surfaces.',
        'A bursa is like a water balloon between moving parts - it cushions and allows smooth gliding.',
      ],
    },
    3: {
      level: 3,
      summary: 'Synovial joint function depends on the biochemical properties of articular cartilage, synovial fluid dynamics, and the integrated stabilizing roles of ligaments, capsule, and muscles.',
      explanation: `Synovial joint biomechanics integrate structural anatomy with tissue properties to achieve low-friction, load-bearing movement.

**Articular Cartilage Structure:**

*Zonal Organization:*
1. **Superficial zone (10-20%)**: Collagen parallel to surface, low proteoglycan
2. **Transitional zone (40-60%)**: Random collagen orientation
3. **Deep zone (30%)**: Collagen perpendicular, high proteoglycan
4. **Calcified cartilage**: Anchors to subchondral bone via tidemark

*Extracellular Matrix:*
- Type II collagen (tensile strength)
- Aggrecan (proteoglycan, compressive strength)
- Water (65-80% of wet weight)
- Chondrocytes (1-5% volume, maintain matrix)

*Biomechanical Properties:*
- Coefficient of friction: 0.001-0.01 (lower than ice on ice)
- Compressive modulus: 0.5-1.5 MPa
- Biphasic behavior: Solid matrix + interstitial fluid

**Synovial Fluid:**

*Composition:*
- Ultrafiltrate of plasma
- Hyaluronic acid (HA): 3-4 mg/mL
- Lubricin (PRG4): Boundary lubrication
- Proteins: Albumin, globulins

*Functions:*
- Lubrication (boundary + fluid film)
- Nutrient delivery to cartilage (avascular)
- Shock absorption
- Joint stability (cohesive properties)

**Ligament Structure and Function:**

*Composition:*
- Type I collagen (primarily)
- Elastin (for stretch)
- Ground substance (proteoglycans)

*Mechanical Properties:*
- Nonlinear stress-strain (toe region, linear region, failure)
- Viscoelastic (creep, stress relaxation)
- Proprioceptive function (mechanoreceptors)

**Joint Stability Mechanisms:**
1. **Static stabilizers**: Ligaments, capsule, labrum, menisci
2. **Dynamic stabilizers**: Muscles crossing the joint
3. **Articular geometry**: Bone shape (e.g., hip socket depth)
4. **Negative intraarticular pressure**: Suction effect

**Common Joint Pathology:**

*Osteoarthritis:*
- Cartilage degradation (matrix metalloproteinases)
- Subchondral bone changes
- Osteophyte formation
- Synovial inflammation

*Ligament Injury:*
- Grade I: Stretch (microscopic tearing)
- Grade II: Partial tear
- Grade III: Complete rupture

*Meniscal Tears:*
- Types: Radial, horizontal, bucket-handle, complex
- Vascular zones: Red-red, red-white, white-white`,
      keyTerms: [
        { term: 'proteoglycan', definition: 'Large molecules (e.g., aggrecan) that attract water and provide compressive resistance in cartilage', pronunciation: 'pro-tee-oh-GLY-kan' },
        { term: 'hyaluronic acid', definition: 'Long-chain polysaccharide in synovial fluid providing viscosity and lubrication', pronunciation: 'hy-al-yoo-RON-ik' },
        { term: 'lubricin', definition: 'Glycoprotein (PRG4) providing boundary lubrication in joints' },
        { term: 'tidemark', definition: 'Boundary between calcified and uncalcified articular cartilage' },
        { term: 'subchondral bone', definition: 'Bone layer immediately beneath articular cartilage' },
        { term: 'proprioception', definition: 'Sense of joint position and movement, partly mediated by joint mechanoreceptors', pronunciation: 'pro-pree-oh-SEP-shun' },
      ],
      clinicalNotes: 'Meniscal tears in the white-white (avascular) zone have poor healing potential and often require partial meniscectomy. Red-red zone tears may heal with repair. Loss of meniscus accelerates osteoarthritis development.',
    },
    4: {
      level: 4,
      summary: 'Joint homeostasis involves mechanotransduction in cartilage, synovial membrane-cartilage crosstalk, and tightly regulated anabolic-catabolic balance disrupted in osteoarthritis and inflammatory arthropathies.',
      explanation: `Advanced joint biology integrates cellular mechanobiology, inflammatory pathways, and tissue-specific metabolism essential for understanding joint disease.

**Chondrocyte Biology:**

*Phenotype and Function:*
- Post-mitotic in mature cartilage
- Isolated in lacunae, no cell-cell contact
- SOX9: Master transcription factor
- Maintains matrix: Collagen II, aggrecan synthesis
- Low metabolic activity (anaerobic glycolysis)

*Mechanotransduction:*
- Integrin-mediated sensing
- Primary cilium signaling
- Ion channels (TRPV4, Piezo)
- Intracellular calcium flux
- Load required for cartilage health

*Response to Mechanical Stress:*
- Physiologic loading: Anabolic (matrix synthesis)
- Underloading: Matrix loss
- Overloading: Catabolic shift

**Matrix Turnover and Degradation:**

*Matrix Metalloproteinases (MMPs):*
- MMP-1, -8, -13: Collagenases (cleave type II collagen)
- MMP-3: Stromelysin (degrades proteoglycans)
- MMP-2, -9: Gelatinases

*ADAMTS (A Disintegrin And Metalloproteinase with Thrombospondin Motifs):*
- ADAMTS-4, -5: Aggrecanases (cleave aggrecan)
- Rate-limiting in OA cartilage loss

*TIMPs (Tissue Inhibitors of Metalloproteinases):*
- TIMP-1, -2, -3, -4: Natural MMP inhibitors
- Imbalance (MMP > TIMP) in OA

**Synovial Membrane Biology:**

*Normal Synovium:*
- Type A synoviocytes: Macrophage-like
- Type B synoviocytes: Fibroblast-like (produce HA, lubricin)
- Fenestrated capillaries (nutrient exchange)

*Synovitis:*
- Macrophage activation (M1 polarization)
- Cytokine production: IL-1β, TNF-α, IL-6
- Angiogenesis (VEGF)
- Synovial hypertrophy

**Cartilage-Synovium Crosstalk:**
- Synovial inflammatory mediators → cartilage catabolism
- Cartilage fragments → synovial inflammation (DAMPs)
- Positive feedback loop in OA

**Subchondral Bone in Joint Disease:**

*OA Changes:*
- Subchondral sclerosis
- Bone marrow lesions (edema)
- Cyst formation
- Osteophytogenesis (TGF-β, BMP-2)

*Bone-Cartilage Crosstalk:*
- Osteoblast-derived factors reach cartilage
- Subchondral stiffening alters cartilage loading
- Angiogenesis crosses tidemark (neurovascular invasion)

**Inflammatory Arthropathy (RA):**

*Pathophysiology:*
- Autoimmune targeting of joint
- CD4+ T cells, B cells, macrophages
- Pannus formation (invasive synovium)
- Erosion of cartilage and bone
- Osteoclast activation (RANKL upregulation)

*Cytokine Networks:*
- TNF-α: Central driver
- IL-6: Acute phase, systemic effects
- IL-17: Th17 pathway, bone erosion
- GM-CSF: Macrophage activation

**Clinical Assessment of Joints:**

*Physical Examination:*
- Inspection: Swelling, deformity, erythema
- Palpation: Effusion, warmth, tenderness
- Range of motion: Active vs. passive
- Stability testing: Ligament laxity
- Special tests: Joint-specific (Lachman, McMurray)

*Imaging:*
- X-ray: Joint space narrowing, osteophytes, erosions
- MRI: Cartilage, ligaments, menisci, bone marrow
- Ultrasound: Effusion, synovitis, real-time assessment

*Synovial Fluid Analysis:*
- WBC count: <200 (normal), 200-2000 (OA), 2000-50000 (inflammatory), >50000 (septic)
- Crystal analysis: MSU (gout), CPPD (pseudogout)
- Gram stain/culture: Septic arthritis`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Process by which cells convert mechanical stimuli into biochemical responses affecting gene expression' },
        { term: 'MMP-13', definition: 'Matrix metalloproteinase-13, primary collagenase in OA cartilage degradation' },
        { term: 'ADAMTS-5', definition: 'A disintegrin and metalloproteinase with thrombospondin motifs 5; major aggrecanase in OA' },
        { term: 'pannus', definition: 'Abnormal layer of granulation tissue in RA that erodes into cartilage and bone' },
        { term: 'DAMPs', definition: 'Damage-associated molecular patterns; endogenous molecules released from damaged tissue that trigger inflammation' },
        { term: 'synoviocyte', definition: 'Cells lining the synovial membrane; Type A (macrophage-like) and Type B (fibroblast-like)' },
      ],
      clinicalNotes: 'Biologic DMARDs target specific cytokines: TNF inhibitors (infliximab, adalimumab), IL-6 inhibitor (tocilizumab), IL-17 inhibitor (secukinumab). JAK inhibitors (tofacitinib) block intracellular cytokine signaling. In OA, intra-articular hyaluronic acid provides temporary viscosupplementation with variable clinical benefit.',
    },
    5: {
      level: 5,
      summary: 'Current research in joint biology focuses on cartilage regeneration strategies, disease-modifying OA drugs (DMOADs), mechanobiological models, and precision medicine approaches for inflammatory arthritis.',
      explanation: `Contemporary joint research integrates regenerative medicine, advanced biomaterials, and systems biology to develop novel therapeutics.

**Cartilage Regeneration Strategies:**

*Current Surgical Options:*
- Microfracture: Marrow stimulation, fibrocartilage formation
- Osteochondral autograft/allograft (OATS): Hyaline cartilage transfer
- Autologous chondrocyte implantation (ACI): First-generation cell therapy
- MACI (Matrix-induced ACI): Cells on collagen scaffold

*Limitations:*
- Fibrocartilage vs. hyaline (inferior mechanical properties)
- Donor site morbidity
- Limited defect size
- Variable outcomes

*Emerging Approaches:*

**Stem Cell Therapies:**
- MSC intra-articular injection: Paracrine effects, immunomodulation
- MSC + scaffold constructs: Tissue engineering
- iPSC-derived chondrocytes: Unlimited cell source
- Challenges: Phenotype maintenance, integration

**Growth Factor Delivery:**
- TGF-β family: Chondrogenic differentiation
- FGF-18 (Sprifermin): Phase III trials in knee OA
- BMP-7: Chondroprotective effects
- Challenges: Delivery, dosing, off-target effects

**Gene Therapy:**
- AAV-mediated gene delivery to cartilage
- CRISPR editing of OA-related genes
- Ex vivo vs. in vivo approaches

**Biomaterial Scaffolds:**
- Hydrogels: Hyaluronic acid, collagen, synthetic (PEG)
- Nanofiber matrices
- 3D-printed constructs
- Injectable, in situ gelling materials

**Disease-Modifying OA Drugs (DMOADs):**

*Targets Under Investigation:*

**Anti-Catabolic:**
- MMP inhibitors: Failed (musculoskeletal syndrome)
- ADAMTS-5 inhibitors: In development
- Wnt pathway inhibitors: Lorecivivint (Phase III)
- Cathepsin K inhibitors

**Pro-Anabolic:**
- Sprifermin (FGF-18): Cartilage thickness increase
- BMP-7 analogs
- Kartogenin: Small molecule chondrogenic

**Anti-Inflammatory:**
- IL-1 inhibition: Variable results (anakinra)
- NGF inhibitors (tanezumab): Pain, but OA progression concerns
- iNOS inhibitors

**Targeting Senescence:**
- Senolytics: Clear senescent cells in OA joints
- UBX0101: p53/MDM2 inhibitor (Phase II)

**Joint Microbiome:**
- Emerging concept of joint microbiome
- Gut-joint axis in inflammatory arthritis
- Potential therapeutic modulation

**Advanced Imaging and Biomarkers:**

*Quantitative MRI:*
- T2 mapping: Collagen integrity
- T1rho: Proteoglycan content
- dGEMRIC: Delayed gadolinium enhancement
- Compositional MRI predicts progression

*Biomarkers:*
- COMP (cartilage oligomeric matrix protein)
- CTX-II (C-terminal cross-linking telopeptide of type II collagen)
- ARGS neoepitope (aggrecan fragment)
- Synovial fluid proteomics

**Computational Modeling:**

*Finite Element Analysis:*
- Patient-specific joint loading
- Cartilage stress prediction
- Implant design optimization

*Multiscale Models:*
- Organ → tissue → cellular → molecular
- Integrating mechanobiology and metabolism
- Predicting disease progression

**Precision Medicine in Inflammatory Arthritis:**

*Phenotyping:*
- Synovial biopsy-driven therapy selection
- Transcriptomic signatures predict response
- Imaging-based inflammatory burden

*Biomarker-Guided Treatment:*
- Predicting biologic responders vs. non-responders
- Personalized treatment algorithms
- Treat-to-target strategies

**Clinical Trials Considerations:**

*OA Trial Challenges:*
- Slow progression (2-4 year trials)
- Outcome measures: WOMAC, KOOS, radiographic JSW
- Responder vs. non-responder analysis
- Regulatory pathways for DMOADs

*Current Major Trials:*
- FORWARD (FGF-18)
- Various cell therapy trials
- Gene therapy Phase I/II studies`,
      keyTerms: [
        { term: 'DMOAD', definition: 'Disease-modifying osteoarthritis drug; therapy that alters structural progression of OA rather than just symptoms' },
        { term: 'Sprifermin', definition: 'Recombinant FGF-18; intra-articular agent that has shown cartilage thickness improvement in trials' },
        { term: 'Lorecivivint', definition: 'Wnt pathway inhibitor (CLK2/DYRK1A) in clinical development for knee OA' },
        { term: 'senolytics', definition: 'Agents that selectively kill senescent cells; emerging approach for OA treatment' },
        { term: 'dGEMRIC', definition: 'Delayed gadolinium-enhanced MRI of cartilage; compositional imaging technique for proteoglycan content' },
        { term: 'T1rho', definition: 'MRI relaxation parameter sensitive to proteoglycan content in cartilage' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- No FDA-approved DMOAD exists yet; current OA treatment is symptomatic
- ACI/MACI: Best for young patients, focal defects, intact joint
- Microfracture: Less invasive but fibrocartilage healing
- NGF inhibitors (tanezumab): Effective for pain but concerns about rapidly progressive OA
- Biologic DMARDs: Treat early, aggressive RA to prevent erosions (window of opportunity)

**Surgical Considerations:**
- High tibial osteotomy: Young, active patients with unicompartmental OA
- UKA vs TKA: Appropriate patient selection critical
- Cartilage restoration: Best in contained defects, healthy surrounding cartilage
- Revision TKA: Consider infectious workup for early failure`,
    },
  },

  media: [
    {
      id: 'joint-types-diagram',
      type: 'diagram',
      filename: 'synovial-joint-types.svg',
      title: 'Types of Synovial Joints',
      description: 'Ball-and-socket, hinge, pivot, saddle, condyloid, and plane joints',
    },
    {
      id: 'joint-structure-cross-section',
      type: 'diagram',
      filename: 'synovial-joint-anatomy.svg',
      title: 'Synovial Joint Structure',
      description: 'Cross-section showing capsule, cartilage, synovium, and fluid',
    },
    {
      id: 'cartilage-zones',
      type: 'diagram',
      filename: 'articular-cartilage-zones.svg',
      title: 'Articular Cartilage Zonal Organization',
      description: 'Superficial, transitional, deep, and calcified zones',
    },
  ],
  citations: [
    {
      id: 'openstax-ap-ch9',
      type: 'textbook',
      title: 'Joints',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '9',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/9-introduction',
      license: 'CC BY 4.0',
    },
    {
      id: 'sophia-loeber-2021',
      type: 'article',
      title: 'Articular cartilage regeneration',
      authors: ['Sophia N', 'Loeber A'],
      source: 'Nature Reviews Rheumatology',
      url: 'https://doi.org/10.1038/s41584-020-00527-3',
      license: 'Copyright Nature Publishing Group',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-bone-anatomy-healing', targetType: 'structure', relationship: 'sibling', label: 'Bone Anatomy' },
    { targetId: 'ortho-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
    { targetId: 'ortho-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'ortho-joint-replacement', targetType: 'topic', relationship: 'related', label: 'Joint Replacement' },
  ],
  tags: {
    systems: ['musculoskeletal', 'skeletal'],
    structures: ['FMA:7490'],
    topics: ['anatomy', 'orthopedics', 'rheumatology', 'joints'],
    keywords: ['joint', 'cartilage', 'synovial', 'ligament', 'arthritis', 'meniscus'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointAnatomyContent;
