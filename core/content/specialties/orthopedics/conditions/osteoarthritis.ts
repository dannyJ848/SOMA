import { EducationalContent } from '../../../types';

export const osteoarthritisContent: EducationalContent = {
  id: 'ortho-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  alternateNames: ['OA', 'Degenerative joint disease', 'DJD', 'Wear and tear arthritis'],
  hpoId: 'HP:0002758',

  levels: {
    1: {
      level: 1,
      summary: 'Osteoarthritis is when the smooth covering on the ends of your bones wears down over time, causing joint pain and stiffness.',
      explanation: `Osteoarthritis (OA) is the most common type of arthritis. It happens when the protective cartilage that cushions your joints wears down over years.

**What Happens in OA:**
- The smooth, slippery cartilage on bone ends gets rough and thin
- Bones start rubbing together, which hurts
- The joint may swell and become stiff
- Bone spurs (extra bits of bone) can form around the joint

**Common Places for OA:**
- Knees (most common)
- Hips
- Hands and fingers
- Lower back
- Neck

**Risk Factors:**
- **Age**: More common as you get older (especially over 50)
- **Weight**: Extra weight puts stress on joints
- **Past injuries**: Damaged joints wear out faster
- **Family history**: It can run in families
- **Certain jobs**: Kneeling, squatting, heavy lifting

**Symptoms:**
- Pain in the joint, especially with activity
- Stiffness in the morning (usually less than 30 minutes)
- Grinding or crackling sounds when moving
- Swelling around the joint
- Less range of motion

**What Helps:**
- Staying active with gentle exercise
- Keeping a healthy weight
- Pain medications when needed
- Physical therapy
- In severe cases, joint replacement surgery

**OA is Different from Rheumatoid Arthritis:**
- OA wears down joints over time from use
- Rheumatoid arthritis is when your immune system attacks your joints`,
      keyTerms: [
        { term: 'osteoarthritis', definition: 'A condition where joint cartilage wears down, causing pain and stiffness' },
        { term: 'cartilage', definition: 'The smooth, rubbery tissue covering the ends of bones in joints' },
        { term: 'bone spur', definition: 'Extra bone growth that forms around arthritic joints' },
        { term: 'joint stiffness', definition: 'When a joint feels tight and hard to move, especially after rest' },
      ],
      analogies: [
        'Cartilage wearing down is like the tread wearing off a tire - eventually things don\'t run smoothly.',
        'Bone spurs are like rust building up on old metal - the body\'s response to damage.',
        'An arthritic joint is like a door with rusty hinges - it creaks and doesn\'t move smoothly.',
      ],
      examples: [
        'A grandmother who has trouble climbing stairs because of knee pain and stiffness.',
        'A former football player who developed hip OA from years of high-impact activity.',
        'Nodules on finger joints that make opening jars difficult.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoarthritis is a degenerative joint disease characterized by progressive cartilage loss, subchondral bone changes, and joint inflammation, commonly affecting weight-bearing joints.',
      explanation: `Osteoarthritis is the most prevalent form of arthritis, affecting millions worldwide. It represents a failure of the joint as an organ, involving cartilage, bone, synovium, and supporting structures.

**Pathophysiology:**
- **Cartilage changes**: Loss of proteoglycans, collagen disruption, chondrocyte dysfunction
- **Subchondral bone**: Sclerosis (hardening), cyst formation, osteophytes (bone spurs)
- **Synovium**: Low-grade inflammation, synovitis
- **Other structures**: Ligament laxity, muscle weakness

**Classification:**

*Primary (Idiopathic) OA:*
- No identifiable cause
- Related to aging, genetics
- Common patterns: Generalized, knee, hip, hand, spine

*Secondary OA:*
- Identifiable cause
- Trauma (post-traumatic OA)
- Congenital abnormalities (hip dysplasia)
- Inflammatory arthritis
- Metabolic (gout, hemochromatosis)
- Endocrine (diabetes, acromegaly)

**Risk Factors:**
- Modifiable: Obesity, occupation, muscle weakness, injury
- Non-modifiable: Age, sex (women > men after 50), genetics

**Clinical Features:**

*Symptoms:*
- Joint pain with activity, relieved by rest
- Stiffness: Brief (<30 min morning stiffness)
- Functional limitation
- Grinding sensation (crepitus)

*Signs:*
- Bony enlargement
- Tenderness along joint line
- Reduced range of motion
- Effusion (synovial fluid accumulation)
- Muscle atrophy

**Common Patterns:**

*Knee OA:*
- Most common site
- Medial compartment most affected
- Varus (bow-legged) deformity

*Hip OA:*
- Groin or lateral hip pain
- Referred to knee
- Internal rotation often limited first

*Hand OA:*
- DIP joints (Heberden's nodes)
- PIP joints (Bouchard's nodes)
- First CMC joint (thumb base)

**Diagnosis:**
- Clinical diagnosis (history and exam)
- X-rays: Classic findings (LOSS)
  - L: Loss of joint space
  - O: Osteophytes
  - S: Subchondral sclerosis
  - S: Subchondral cysts
- Lab tests: Normal (rule out inflammatory arthritis)

**Treatment Overview:**
- Non-pharmacologic: Exercise, weight loss, physical therapy, assistive devices
- Pharmacologic: Acetaminophen, NSAIDs, topical agents, injections
- Surgical: Arthroscopy (limited role), osteotomy, joint replacement`,
      keyTerms: [
        { term: 'osteophyte', definition: 'Bone spur; bony outgrowth forming at joint margins in OA', pronunciation: 'OS-tee-oh-fite' },
        { term: 'subchondral sclerosis', definition: 'Hardening of bone beneath damaged cartilage, appearing white on X-ray' },
        { term: 'Heberden\'s node', definition: 'Bony enlargement at the DIP joint of fingers in osteoarthritis' },
        { term: 'Bouchard\'s node', definition: 'Bony enlargement at the PIP joint of fingers in osteoarthritis' },
        { term: 'crepitus', definition: 'Grinding or crackling sensation with joint movement', pronunciation: 'KREP-ih-tus' },
        { term: 'synovitis', definition: 'Inflammation of the synovial membrane lining the joint', pronunciation: 'sin-oh-VY-tis' },
      ],
      analogies: [
        'Subchondral sclerosis is like the body laying down concrete to compensate for a weakening foundation.',
        'Osteophytes are like stalactites forming in a cave - abnormal growths in response to the environment.',
        'The joint with OA is like a shock absorber that\'s lost its padding.',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoarthritis pathogenesis involves cartilage degradation through matrix metalloproteinases and inflammatory cytokines, with subchondral bone remodeling and synovial inflammation contributing to a positive feedback loop of joint damage.',
      explanation: `Osteoarthritis is now recognized as a disease of the whole joint involving complex interactions between mechanical and biological factors.

**Cartilage Pathobiology:**

*Normal Cartilage:*
- Type II collagen (tensile strength)
- Aggrecan (compression resistance via water retention)
- Chondrocytes (maintain matrix)
- Avascular, aneural, alymphatic

*Pathologic Changes:*
1. Surface fibrillation
2. Vertical clefts
3. Cluster formation (chondrocyte proliferation)
4. Loss of proteoglycan (Safranin O staining loss)
5. Full-thickness loss exposing bone

*Molecular Mechanisms:*
- MMP-1, -3, -13: Collagen degradation
- ADAMTS-4, -5: Aggrecan cleavage
- Pro-inflammatory cytokines: IL-1β, TNF-α, IL-6
- Imbalance: Catabolism > anabolism

**Subchondral Bone Changes:**

*Early OA:*
- Subchondral bone remodeling
- Increased porosity
- Abnormal mechanical properties

*Progressive OA:*
- Subchondral sclerosis
- Bone marrow lesions (edema on MRI)
- Subchondral cysts
- Osteophyte formation

*Bone-Cartilage Crosstalk:*
- Osteoblast-derived factors affect cartilage
- Neurovascular invasion through tidemark
- Pain generation from bone

**Synovial Inflammation:**

*Mechanisms:*
- Cartilage fragments as DAMPs
- Toll-like receptor activation
- Macrophage polarization (M1 predominance)
- Cytokine production (IL-1β, TNF-α)
- Effusion from increased vascular permeability

*Clinical Correlation:*
- Synovitis correlates with pain
- Predicts structural progression
- Target for therapy

**Risk Factor Biology:**

*Obesity:*
- Mechanical load (weight × steps)
- Adipokines: Leptin, adiponectin
- Systemic low-grade inflammation
- Affects non-weight bearing joints too

*Aging:*
- Cellular senescence
- Reduced autophagy
- AGE (advanced glycation end-product) accumulation
- Mitochondrial dysfunction

*Joint Injury:*
- ACL injury: 50% develop OA within 10-15 years
- Meniscectomy accelerates OA
- Altered biomechanics
- Post-traumatic inflammation

**Imaging:**

*Radiography (Kellgren-Lawrence grading):*
- Grade 0: Normal
- Grade 1: Doubtful osteophytes
- Grade 2: Definite osteophytes, possible JSN
- Grade 3: Moderate JSN, subchondral sclerosis
- Grade 4: Severe JSN, bone-on-bone

*MRI:*
- Cartilage defects and thickness
- Bone marrow lesions (edema)
- Meniscal tears
- Synovitis (with gadolinium)
- Effusion

*Ultrasound:*
- Osteophytes
- Effusion
- Synovitis (power Doppler)

**Treatment Modalities:**

*Non-Pharmacologic:*
- Exercise: Strength, aerobic, aquatic
- Weight loss: 5% weight loss improves symptoms
- Physical therapy: ROM, strengthening
- Bracing: Unloader braces for unicompartmental knee OA

*Pharmacologic:*
- Oral: Acetaminophen, NSAIDs (oral > topical), duloxetine
- Topical: Diclofenac gel, capsaicin
- Intra-articular: Corticosteroids, hyaluronic acid (variable evidence)

*Surgical:*
- Arthroscopy: Limited/no role for degenerative OA
- Osteotomy: Young, active, unicompartmental
- Arthroplasty: End-stage disease`,
      keyTerms: [
        { term: 'ADAMTS-5', definition: 'Aggrecanase enzyme that cleaves aggrecan proteoglycan in cartilage degradation' },
        { term: 'bone marrow lesion', definition: 'MRI finding of edema in subchondral bone, associated with pain and OA progression' },
        { term: 'Kellgren-Lawrence', definition: 'Radiographic grading system for OA severity (0-4)' },
        { term: 'adipokine', definition: 'Cytokine secreted by adipose tissue, linking obesity to OA inflammation', pronunciation: 'AD-ih-poh-kine' },
        { term: 'DAMP', definition: 'Damage-associated molecular pattern; endogenous molecules triggering inflammation' },
        { term: 'unloader brace', definition: 'Knee brace that shifts load away from affected compartment in unicompartmental OA' },
      ],
      clinicalNotes: 'Routine arthroscopic lavage/debridement for knee OA is not recommended based on multiple RCTs showing no benefit over sham surgery. Intra-articular corticosteroids provide short-term relief (weeks to months). Viscosupplementation (HA) has variable evidence; may benefit some patients. Opioids should be avoided for chronic OA pain.',
    },
    4: {
      level: 4,
      summary: 'Osteoarthritis represents a heterogeneous syndrome with distinct phenotypes, molecular signatures, and therapeutic targets, requiring precision medicine approaches that integrate imaging biomarkers, biochemical markers, and patient stratification.',
      explanation: `Contemporary OA research focuses on disease heterogeneity, early detection, and development of disease-modifying treatments beyond symptom management.

**OA Phenotypes:**

*Clinical Phenotypes:*
- Post-traumatic
- Metabolic (obesity-related)
- Aging-related
- Genetic/developmental
- Inflammatory

*Imaging Phenotypes:*
- Bone-predominant (osteophytes, sclerosis)
- Cartilage-predominant (cartilage loss)
- Inflammatory (synovitis, effusion)
- Combined patterns

*Molecular Phenotypes:*
- High inflammatory burden
- Cartilage-degradation signature
- Bone remodeling phenotype
- Neurogenic (central sensitization)

**Molecular Pathways:**

*Wnt Signaling:*
- Aberrant activation → osteophytogenesis
- DKK1, sFRP: Natural inhibitors
- Lorecivivint: Wnt pathway inhibitor in trials

*TGF-β Pathway:*
- Complex role in OA
- Early: Chondroprotective
- Late: Osteophyte formation, synovial fibrosis
- Context-dependent effects

*NF-κB and Inflammation:*
- Central inflammatory mediator
- Activated by IL-1β, TNF-α
- Induces MMPs, ADAMTS
- Anti-inflammatory targets

*Senescence:*
- p16, p21 upregulation
- SASP (senescence-associated secretory phenotype)
- Senolytic agents in development

**Biomarkers:**

*Imaging Biomarkers:*
- MRI-based:
  - MOAKS, WORMS (semi-quantitative scoring)
  - T2 mapping (collagen integrity)
  - T1rho (proteoglycan content)
  - dGEMRIC (GAG content)
- Predicting progression

*Biochemical Markers:*
- Degradation: CTX-II, uCTX-II, COMP
- Synthesis: PIIANP, CS846
- Inflammation: sCOMP, MMP-3
- Limited clinical utility currently

**Therapeutic Targets:**

*Disease-Modifying OA Drugs (DMOADs):*

*Anti-Catabolic:*
- MMP inhibitors: Failed (musculoskeletal toxicity)
- Anti-ADAMTS-5: In development
- Anti-NGF (tanezumab): Pain effective but OA progression concerns

*Pro-Anabolic:*
- Sprifermin (FGF-18): Cartilage thickness improvement
- BMP-7: Chondroprotective
- Kartogenin: Small molecule, MSC differentiation

*Targeting Inflammation:*
- IL-1 inhibition: Variable results
- TNF inhibition: Not effective in OA
- Intra-articular biologics

*Targeting Senescence:*
- UBX0101: Senolytic (p53/MDM2)
- Cleared Phase I, Phase II disappointing

**Regenerative Approaches:**

*Cell-Based Therapies:*
- Autologous chondrocyte implantation (ACI)
- MSC injections
- Mechanism: Paracrine vs. regeneration
- Variable evidence

*Growth Factors:*
- PRP: Heterogeneous preparations
- Variable clinical evidence
- Standardization needed

*Gene Therapy:*
- Intra-articular AAV delivery
- IL-1Ra gene transfer
- Early clinical trials

**Pain Mechanisms:**

*Peripheral:*
- Synovitis
- Subchondral bone
- Osteophyte nerve impingement
- Capsular distension

*Central Sensitization:*
- Prevalent in chronic OA
- Explains diffuse pain, hyperalgesia
- May require centrally-acting agents

**Surgical Advances:**

*Alignment Correction:*
- High tibial osteotomy: Young, unicompartmental
- Distal femoral osteotomy: Valgus deformity
- Careful patient selection

*Joint Preservation:*
- Cartilage restoration procedures
- Meniscal transplant
- Combined procedures

*Arthroplasty Advances:*
- Robotic-assisted
- Patient-specific instrumentation
- Improved implant designs
- Enhanced recovery protocols`,
      keyTerms: [
        { term: 'SASP', definition: 'Senescence-Associated Secretory Phenotype; pro-inflammatory molecules secreted by senescent cells' },
        { term: 'MOAKS', definition: 'MRI Osteoarthritis Knee Score; semi-quantitative assessment of multiple OA features' },
        { term: 'central sensitization', definition: 'Amplified pain processing in CNS contributing to chronic pain beyond tissue damage' },
        { term: 'lorecivivint', definition: 'Wnt pathway inhibitor in clinical development for knee OA' },
        { term: 'CTX-II', definition: 'C-terminal cross-linking telopeptide of type II collagen; biomarker of cartilage degradation' },
        { term: 'tanezumab', definition: 'Anti-NGF monoclonal antibody for OA pain; effective but with joint safety concerns' },
      ],
      clinicalNotes: 'NGF inhibitors (tanezumab) provide significant pain relief but FDA has required REMS due to rapidly progressive OA in some patients. Patient selection critical. Current DMOAD trials target multiple pathways simultaneously. Phenotype-specific treatment may improve trial outcomes. Central sensitization assessment (pressure pain thresholds, questionnaires) may guide treatment (duloxetine for central component).',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge OA research integrates single-cell transcriptomics, spatial biology, machine learning prognostics, and personalized treatment algorithms, while ongoing DMOAD development targets specific molecular phenotypes with novel therapeutics.',
      explanation: `The frontier of OA research combines molecular biology, advanced imaging, artificial intelligence, and precision medicine to revolutionize diagnosis and treatment.

**Single-Cell Biology:**

*Chondrocyte Heterogeneity:*
- scRNA-seq reveals subpopulations
- Homeostatic, effector, and regulatory clusters
- OA-specific transcriptional changes
- Zone-specific differences

*Synovial Cell Landscape:*
- Fibroblast subsets: Lining vs. sublining
- Macrophage polarization states
- T cell populations in OA
- Distinct inflammatory phenotypes

*Senescent Cell Identification:*
- Single-cell resolution of SASP
- Targeting specific senescent populations
- Senolytics with cellular precision

**Spatial Transcriptomics:**

*Tissue Architecture:*
- In situ gene expression mapping
- Cartilage zonal biology
- Osteochondral unit interactions
- Synovium-cartilage interface

*Biomarker Discovery:*
- Spatially-resolved biomarkers
- Microenvironment-specific targets
- Therapeutic localization

**Machine Learning Applications:**

*Image Analysis:*
- Automated KL grading
- Cartilage segmentation
- Progression prediction
- Phenotype classification

*Risk Stratification:*
- Multi-modal data integration
- Individual progression trajectories
- Treatment response prediction
- Clinical trial enrichment

*Drug Development:*
- Target identification
- Virtual screening
- Repurposing candidates
- Trial design optimization

**DMOAD Pipeline - Current Status:**

*Phase III:*
- Lorecivivint (Wnt inhibitor): Knee OA
- Sprifermin (FGF-18): Knee OA (met secondary endpoints)

*Phase II:*
- TPX-100 (targeting MMP-13 cleavage site)
- GZ389988 (TrkA antagonist)
- Multiple biologics

*Preclinical:*
- Gene editing approaches
- mRNA therapeutics
- Nanoparticle delivery systems
- Targeted senolytics

**Novel Therapeutic Modalities:**

*Gene Therapy:*
- AAV-based delivery
- CRISPR editing
- Gene silencing (siRNA, ASO)
- Intra-articular administration

*Cell Therapy Evolution:*
- iPSC-derived chondrocytes
- Engineered MSCs
- CAR-T approach for senescent cells
- Exosome therapy

*Biomaterial Advances:*
- Injectable hydrogels
- Drug delivery platforms
- Scaffold-mediated regeneration
- Smart responsive materials

**Precision Medicine Framework:**

*Patient Stratification:*
- Imaging phenotypes
- Biomarker profiles
- Genetic risk scores
- Pain phenotypes

*Treatment Matching:*
- Phenotype-specific therapy
- Biomarker-guided selection
- Adaptive trial designs
- N-of-1 approaches

*Digital Health Integration:*
- Wearable activity monitoring
- Remote assessment tools
- Digital biomarkers
- Real-world evidence generation

**Clinical Trial Innovation:**

*Enrichment Strategies:*
- Biomarker selection
- Imaging inclusion criteria
- Rapid progressors
- Pain responder prediction

*Outcome Measures:*
- Quantitative MRI endpoints
- Novel PRO instruments
- Composite outcomes
- Long-term follow-up

*Regulatory Considerations:*
- FDA guidance for DMOAD development
- Accelerated pathways
- Biomarker qualification
- Surrogate endpoints

**Health Economics:**

*Burden of Disease:*
- Global prevalence increasing
- Disability-adjusted life years
- Healthcare costs
- Productivity loss

*Value-Based Care:*
- Cost-effectiveness of interventions
- Optimal treatment sequences
- Arthroplasty timing
- Prevention vs. treatment

**Future Directions:**

*Convergence of Technologies:*
- AI + imaging + omics + digital health
- Systems biology approaches
- Real-time monitoring
- Predictive intervention

*Prevention Paradigm:*
- Post-traumatic OA prevention
- Obesity intervention timing
- Exercise as medicine
- Early detection and treatment`,
      keyTerms: [
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing; technology revealing transcriptional heterogeneity at cellular resolution' },
        { term: 'spatial transcriptomics', definition: 'Technology mapping gene expression while preserving tissue spatial context' },
        { term: 'TPX-100', definition: 'Synthetic peptide targeting MMP-13 cleavage site in cartilage matrix; DMOAD candidate' },
        { term: 'iPSC', definition: 'Induced pluripotent stem cell; reprogrammed adult cells with embryonic-like potential' },
        { term: 'enrichment strategy', definition: 'Clinical trial design selecting patients most likely to respond or progress' },
        { term: 'digital biomarker', definition: 'Quantified physiological/behavioral data collected via digital devices' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- No FDA-approved DMOAD exists; all current OA treatments are symptomatic
- Arthroscopy for degenerative OA knee: Multiple RCTs show no benefit
- Intra-articular steroids: Short-term benefit, possible long-term cartilage harm
- NSAIDs: GI and CV risks, particularly in elderly OA population
- Opioids: Should be avoided for chronic OA pain

**Surgical Considerations:**
- TKA timing: Balance quality of life vs. revision risk
- UKA vs. TKA: Appropriate patient selection critical
- HTO: Young, active, unicompartmental with correctable alignment
- Robotic arthroplasty: Improved accuracy, outcome benefits still being evaluated

**Emerging Practice:**
- Phenotype-based treatment selection
- Central sensitization assessment
- Multimodal pain management
- Shared decision-making tools
- Prehabilitation before arthroplasty`,
    },
  },

  media: [
    {
      id: 'oa-pathology',
      type: 'diagram',
      filename: 'osteoarthritis-joint-changes.svg',
      title: 'Osteoarthritis Joint Changes',
      description: 'Cartilage loss, osteophytes, sclerosis, synovitis',
    },
    {
      id: 'kellgren-lawrence',
      type: 'diagram',
      filename: 'kellgren-lawrence-grading.svg',
      title: 'Kellgren-Lawrence Grading',
      description: 'Radiographic grading of OA severity (0-4)',
    },
    {
      id: 'hand-oa-nodes',
      type: 'diagram',
      filename: 'hand-oa-heberden-bouchard.svg',
      title: 'Hand OA: Heberden and Bouchard Nodes',
      description: 'Typical distribution of bony enlargements in hand OA',
    },
  ],
  citations: [
    {
      id: 'hunter-2019',
      type: 'article',
      title: 'Osteoarthritis',
      authors: ['Hunter DJ', 'Bierma-Zeinstra S'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(19)30417-9',
      license: 'Copyright Elsevier',
    },
    {
      id: 'oa-research-society',
      type: 'website',
      title: 'OARSI Guidelines',
      source: 'Osteoarthritis Research Society International',
      url: 'https://oarsi.org/research/oa-guidelines',
      license: 'Copyright OARSI',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-joint-anatomy', targetType: 'structure', relationship: 'related', label: 'Joint Anatomy' },
    { targetId: 'ortho-joint-replacement', targetType: 'topic', relationship: 'related', label: 'Joint Replacement' },
    { targetId: 'ortho-physical-therapy', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
    { targetId: 'rheum-rheumatoid-arthritis', targetType: 'condition', relationship: 'see-also', label: 'Rheumatoid Arthritis' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'rheumatology', 'arthritis', 'degenerative'],
    keywords: ['osteoarthritis', 'OA', 'cartilage', 'joint pain', 'degenerative', 'arthroplasty'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoarthritisContent;
