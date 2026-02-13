import { EducationalContent } from '../../types';

export const lymphaticVesselsContent: EducationalContent = {
  id: 'structure-lymphatic-vessels',
  type: 'structure',
  name: 'Lymphatic Vessels',
  alternateNames: ['Lymph vessels', 'Lymphatics', 'Vasa lymphatica'],
  fmaId: 'FMA:30315',

  levels: {
    1: {
      level: 1,
      summary: 'Lymphatic vessels are tiny tubes that carry a clear fluid called lymph throughout your body, helping fight infections and remove waste.',
      explanation: `Lymphatic vessels are like a second set of tubes in your body, separate from blood vessels. They carry a clear fluid called lymph.

**How It Works:**

Imagine your body is like a city:
- Blood vessels are like main roads bringing supplies (oxygen, nutrients) to all the buildings (cells)
- But some fluid leaks out of the delivery trucks (blood) into the streets
- Lymphatic vessels are like storm drains that collect this extra fluid
- They also catch any "bad guys" (germs) and take them to "police stations" (lymph nodes)

**Where Do Lymphatic Vessels Go?**
- They start as tiny tubes near your cells
- They get bigger as they join together
- They pass through lymph nodes along the way
- Finally, they empty back into your blood near your heart

**What's Special About Them?**
- They only carry fluid ONE way (toward your heart)
- They have tiny valves like one-way doors
- You have no pump for lymph - it moves when you move!
- That's why exercise is good for your lymphatic system

**Why Are They Important?**
- Remove extra fluid from tissues
- Fight infections (lymph nodes filter germs)
- Absorb fats from food (special lymphatics in intestines)
- Keep fluids balanced in your body`,
      keyTerms: [
        { term: 'lymphatic vessel', definition: 'A tube that carries lymph fluid through your body' },
        { term: 'lymph', definition: 'A clear fluid that flows through lymphatic vessels' },
        { term: 'valve', definition: 'A small flap that only lets fluid flow in one direction' },
      ],
      analogies: [
        'Lymphatic vessels are like storm drains collecting extra water from city streets.',
        'The valves in lymph vessels work like one-way turnstiles at a subway station.',
      ],
      examples: [
        'When your ankles swell after sitting too long, it\'s because lymph isn\'t draining well - moving around helps!',
        'The lymphatic vessels in your intestines absorb fats from the food you eat.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lymphatic vessels form a one-way drainage system that returns interstitial fluid (lymph) to the bloodstream while passing through lymph nodes for immune surveillance.',
      explanation: `The lymphatic vascular system parallels the blood vascular system but serves distinct functions: fluid balance, immune cell trafficking, and lipid absorption. Unlike blood circulation, lymph flows unidirectionally toward the heart.

**Vessel Types:**

1. **Lymphatic Capillaries**
   - Smallest lymphatic vessels
   - Blind-ended (closed at one end)
   - Located in tissue spaces
   - Highly permeable (large gaps between cells)
   - Allow entry of fluid, proteins, cells, pathogens

2. **Collecting Lymphatic Vessels**
   - Larger vessels with valves
   - Propel lymph through contraction
   - Pass through lymph nodes
   - Divided into lymphangions (segments between valves)

3. **Lymphatic Trunks**
   - Larger vessels draining body regions
   - Major trunks:
     * Lumbar trunks (lower limbs, pelvis)
     * Intestinal trunk (digestive organs)
     * Bronchomediastinal trunks (thorax)
     * Subclavian trunks (upper limbs)
     * Jugular trunks (head and neck)

4. **Lymphatic Ducts**
   - **Thoracic duct**: Largest; drains most of body (left side of head/neck, left arm, entire body below diaphragm)
   - **Right lymphatic duct**: Drains right side of head/neck, right arm, right thorax

**Lymph Flow:**

Flow is driven by:
- Skeletal muscle contraction (muscle pump)
- Respiratory movements (breathing pump)
- Arterial pulsations nearby
- Intrinsic contraction of collecting vessels
- One-way valves prevent backflow

**Path of Lymph:**
Tissue spaces → Lymphatic capillaries → Collecting vessels → Lymph nodes → Larger collecting vessels → Trunks → Ducts → Subclavian veins

**Special Lymphatics:**

**Lacteals** (in intestinal villi):
- Specialized lymphatic capillaries
- Absorb dietary fats and fat-soluble vitamins
- Lymph appears milky (chyle) due to fat content
- Drain to intestinal trunk → cisterna chyli → thoracic duct`,
      keyTerms: [
        { term: 'lymphatic capillary', definition: 'Smallest lymphatic vessel, blind-ended, highly permeable for fluid entry' },
        { term: 'thoracic duct', definition: 'The largest lymphatic vessel, draining most of the body into the left subclavian vein' },
        { term: 'lacteal', definition: 'Specialized lymphatic capillary in intestinal villi that absorbs dietary fat', pronunciation: 'LAK-tee-ul' },
        { term: 'chyle', definition: 'Milky lymph containing absorbed dietary fat', pronunciation: 'kile' },
        { term: 'lymphangion', definition: 'Functional segment of collecting lymphatic vessel between valves', pronunciation: 'lim-FAN-jee-on' },
        { term: 'cisterna chyli', definition: 'Dilated sac at the origin of the thoracic duct receiving lymph from lower body', pronunciation: 'sis-TER-nah KY-lee' },
      ],
      analogies: [
        'Lymphatic capillaries are like one-way check valves letting fluid in but not out.',
        'The thoracic duct is like the main drain pipe that all smaller drains eventually connect to.',
      ],
    },
    3: {
      level: 3,
      summary: 'The lymphatic vasculature comprises initial lymphatic capillaries with specialized button-like junctions, contractile collecting vessels with valves organized as lymphangions, and major trunks converging on central ducts, functioning in fluid homeostasis, immune surveillance, and lipid transport.',
      explanation: `The lymphatic vascular system maintains fluid balance by returning approximately 2-4 liters of interstitial fluid to the blood daily, while simultaneously serving as conduits for immune cell trafficking and fat absorption.

**Lymphatic Capillary Structure:**

1. **Initial Lymphatics**
   - Single layer of lymphatic endothelial cells (LECs)
   - Oak leaf-shaped cells with overlapping edges
   - **Button-like junctions** (vs zipper junctions in blood capillaries)
   - Gaps allow entry of fluid, macromolecules, cells
   - No basement membrane (discontinuous)
   - Anchoring filaments connect to surrounding ECM

2. **Entry Mechanism**
   - Increased interstitial pressure pushes cells apart
   - Fluid and contents enter
   - Decreased pressure allows cells to close
   - Functions as primary valve

**Collecting Lymphatic Vessels:**

1. **Structure**
   - Three-layered wall (like blood vessels):
     * Intima (endothelium)
     * Media (smooth muscle)
     * Adventitia (connective tissue)
   - Bicuspid valves at regular intervals
   - Lymphangion: segment between valves
   - More valves than veins

2. **Pumping Mechanism**
   - Intrinsic: Smooth muscle contracts rhythmically
   - Pacemaker cells generate spontaneous contractions
   - Frequency increases with filling
   - Extrinsic: External compression (muscle, respiration)

3. **Regulation**
   - Stretch → increased contraction frequency
   - NO, prostaglandins modulate tone
   - Sympathetic innervation (variable)
   - Inflammatory mediators affect function

**Major Lymphatic Pathways:**

1. **Lower Body Drainage**
   - Lower limbs → Inguinal nodes → External iliac → Lumbar trunks
   - Pelvis/perineum → Internal iliac → Lumbar trunks
   - Lumbar trunks + Intestinal trunk → Cisterna chyli → Thoracic duct

2. **Thoracic Duct**
   - Origin: Cisterna chyli (L1-L2)
   - Ascends through aortic hiatus
   - Courses through posterior mediastinum
   - Receives left bronchomediastinal, subclavian, jugular trunks
   - Empties into left venous angle (left internal jugular + subclavian)
   - Drains ~75% of body lymph

3. **Right Lymphatic Duct**
   - Formed by right jugular, subclavian, bronchomediastinal trunks
   - May be absent (trunks enter veins separately)
   - Empties into right venous angle
   - Drains right upper quadrant

**Molecular Markers:**

*Lymphatic Endothelial Cell Markers:*
- LYVE-1 (lymphatic vessel endothelial hyaluronan receptor-1)
- Podoplanin (D2-40 in pathology)
- PROX1 (transcription factor, master regulator)
- VEGFR-3 (receptor for VEGF-C/D)
- Neuropilin-2

*Blood vs Lymphatic Endothelium:*
- Blood: CD34+, podoplanin-
- Lymphatic: Podoplanin+, LYVE-1+, PROX1+

**Lymphangiogenesis:**

- VEGF-C and VEGF-D drive lymphatic growth
- Bind VEGFR-3 on LECs
- PROX1 specifies lymphatic fate
- Important in development, cancer metastasis, wound healing`,
      keyTerms: [
        { term: 'button junctions', definition: 'Discontinuous cell-cell junctions in lymphatic capillaries allowing fluid entry through gaps' },
        { term: 'anchoring filaments', definition: 'Extracellular fibers connecting lymphatic capillary endothelium to surrounding tissue' },
        { term: 'PROX1', definition: 'Transcription factor that specifies lymphatic endothelial cell identity' },
        { term: 'VEGFR-3', definition: 'Receptor for VEGF-C/D that drives lymphangiogenesis' },
        { term: 'podoplanin', definition: 'Membrane glycoprotein on lymphatic endothelium; D2-40 antibody target in pathology' },
        { term: 'lymphangiogenesis', definition: 'Formation of new lymphatic vessels, driven by VEGF-C/D signaling' },
      ],
      clinicalNotes: 'Lymphedema results from lymphatic obstruction or insufficiency. D2-40 (podoplanin) staining identifies lymphatic invasion by tumors, a key prognostic factor. Lymphangiography can visualize lymphatic anatomy for surgical planning.',
    },
    4: {
      level: 4,
      summary: 'The lymphatic vasculature exhibits specialized endothelial characteristics, contractile properties, and valve function enabling unidirectional flow, with distinct molecular identities from blood vasculature and critical roles in fluid homeostasis, immune trafficking, and pathological processes including cancer metastasis and lymphedema.',
      explanation: `The lymphatic system's unique structural and functional properties reflect its specialized roles in tissue fluid balance, immune cell transport, and lipid absorption, with significant implications for disease processes.

**Lymphatic Endothelial Cell Biology:**

1. **Developmental Origin**
   - Derived from venous endothelium (cardinal vein)
   - PROX1 expression specifies LEC fate
   - SOX18 initiates PROX1 expression
   - COUP-TFII maintains venous/lymphatic identity
   - Separation from blood vasculature: E11.5-12.5 in mice

2. **Transcriptional Regulation**
   - PROX1: Master regulator, maintains LEC identity
   - FOXC2: Required for valve formation
   - GATA2: Valve development, lymphatic function
   - NFATc1: Valve formation, collecting vessel maturation

3. **Junctional Organization**

   *Initial Lymphatics (Button Junctions):*
   - VE-cadherin and claudin-5 at buttons
   - Gaps (2-3 μm) between buttons
   - Allows passive fluid/cell entry
   - Flap-like function (primary valve)

   *Collecting Lymphatics (Zipper Junctions):*
   - Continuous VE-cadherin
   - Tight claudin-5 junctions
   - Prevents leakage
   - Transition occurs at pre-collectors

**Lymphatic Valve Biology:**

1. **Structure**
   - Bicuspid leaflets projecting into lumen
   - Matrix core (collagen, elastin, fibronectin)
   - Specialized valve sinus (expanded region)
   - Integrin α9 critical for valve integrity

2. **Formation**
   - Requires FOXC2, PROX1, NFATc1, GATA2
   - Influenced by fluid shear stress
   - Mutations cause valve defects → lymphedema

3. **Function**
   - Prevent retrograde flow
   - Create functional lymphangion segments
   - Critical for efficient lymph transport

**Collecting Vessel Contractility:**

1. **Pacemaker Activity**
   - Spontaneous action potentials
   - Ca2+ entry via L-type channels
   - Spread via gap junctions
   - Frequency: 2-20 contractions/min (species-dependent)

2. **Contractile Mechanism**
   - Smooth muscle in vessel wall
   - Ca2+-dependent contraction
   - Similar to vascular smooth muscle
   - Coordinated along vessel length

3. **Regulatory Factors**

   *Enhance Contractility:*
   - Increased filling/stretch
   - α-adrenergic stimulation
   - Substance P, histamine

   *Inhibit Contractility:*
   - Nitric oxide (NO)
   - Prostaglandins
   - Inflammatory cytokines
   - Lymph flow/shear stress (via NO)

**Immune Cell Trafficking:**

1. **Entry into Initial Lymphatics**
   - DCs enter via button junctions
   - CCR7 → CCL21 chemotaxis
   - Active migration, not passive
   - May modify junctions for entry

2. **Transit Through Collecting Vessels**
   - Passive transport with lymph flow
   - Cells reach lymph nodes
   - Some exit at nodes, some continue

3. **Role in Inflammation**
   - LECs upregulate adhesion molecules
   - Express chemokines (CCL21, CXCL12)
   - Can present antigens (MHC-I, MHC-II)
   - Induce T cell tolerance (PD-L1)

**Pathological Lymphangiogenesis:**

1. **Tumor Lymphangiogenesis**
   - Tumors secrete VEGF-C/D
   - Promotes lymphatic invasion
   - Facilitates lymph node metastasis
   - Prognostic significance

2. **Inflammation**
   - Inflammatory lymphangiogenesis
   - Cytokine-driven
   - Increases drainage capacity
   - Affects immune cell egress

3. **Transplant Rejection**
   - Lymphangiogenesis in transplanted organs
   - May enhance rejection
   - Target for immunomodulation`,
      keyTerms: [
        { term: 'SOX18', definition: 'Transcription factor that initiates PROX1 expression during lymphatic specification' },
        { term: 'FOXC2', definition: 'Transcription factor essential for lymphatic valve formation; mutations cause lymphedema-distichiasis' },
        { term: 'lymphangion contractility', definition: 'Rhythmic smooth muscle contraction of collecting lymphatic segments driving lymph flow' },
        { term: 'primary valve', definition: 'Functional valve mechanism of overlapping lymphatic capillary endothelial cells' },
        { term: 'integrin α9', definition: 'Adhesion receptor on lymphatic valves; required for valve integrity and function' },
        { term: 'lymphatic invasion', definition: 'Entry of cancer cells into lymphatic vessels; pathological marker assessed by D2-40 staining' },
      ],
      clinicalNotes: 'Lymphedema-distichiasis syndrome (FOXC2 mutations) demonstrates the critical role of valve development. VEGF-C/D inhibition is explored for anti-metastatic therapy. Lymphatic insufficiency contributes to chronic wounds and fibrosis.',
    },
    5: {
      level: 5,
      summary: 'The lymphatic vasculature represents a dynamic system with specialized cellular, molecular, and biomechanical properties essential for tissue fluid homeostasis and immunity, with dysfunction manifesting as lymphedema, and lymphatic networks serving as conduits for cancer metastasis, infections, and therapeutic targeting.',
      explanation: `Comprehensive understanding of lymphatic biology informs management of lymphedema, cancer staging, and emerging therapeutic strategies targeting lymphatic function.

**Advanced Lymphatic Physiology:**

1. **Lymph Formation and Flow**

   *Starling Forces Revised:*
   - Classic: Filtration > reabsorption in steady state
   - Revised: Most filtrate returns via lymphatics
   - Glycocalyx affects filtration coefficient
   - Interstitial pressure regulation critical

   *Flow Dynamics:*
   - Total lymph flow: 2-4 L/day
   - Thoracic duct flow: ~1-4 L/day
   - Increased with inflammation
   - Decreased with immobility

   *Lymph Composition:*
   - Protein concentration: 20-60% of plasma
   - Varies by tissue of origin
   - Contains immune cells, especially in afferent lymph
   - Chyle from intestines contains chylomicrons

2. **Lymphatic-Immune System Interface**

   *LEC Immunomodulation:*
   - Express PD-L1 → T cell tolerance
   - Cross-present peripheral antigens
   - Express MHC-I (constitutive), MHC-II (inducible)
   - Produce CCL21 for DC/T cell attraction

   *Lymph Node Entry:*
   - Afferent lymph enters subcapsular sinus
   - Antigen delivery to resident cells
   - LECs guide lymphocyte trafficking

   *Lymphatic Resolution of Inflammation:*
   - Clearance of inflammatory mediators
   - Removal of activated immune cells
   - Contributes to tissue repair

3. **Lipid Transport**

   *Intestinal Lacteal Function:*
   - Absorb chylomicrons (too large for blood capillaries)
   - Button junctions allow entry
   - VEGF-A maintains lacteal integrity
   - Dysfunction → protein-losing enteropathy

   *Systemic Lipid Transport:*
   - Lymph delivers dietary lipids to blood
   - Bypasses liver first-pass metabolism
   - Implications for drug delivery

**Clinical Syndromes:**

1. **Lymphedema**

   *Primary Lymphedema:*
   - Milroy disease: VEGFR3 mutations
     * Congenital, autosomal dominant
     * Bilateral lower limb involvement
   - Meige disease: Unknown genetics
     * Onset at puberty
     * Lower limbs
   - Lymphedema-distichiasis: FOXC2 mutations
     * Pubertal onset
     * Distichiasis (double row of eyelashes)
     * Valve agenesis on lymphangiography
   - Hypotrichosis-lymphedema-telangiectasia: SOX18 mutations

   *Secondary Lymphedema:*
   - Post-lymphadenectomy (breast cancer, melanoma)
   - Post-radiation
   - Infection: Filariasis (worldwide leading cause)
   - Trauma, malignant obstruction

   *Pathophysiology:*
   - Lymphatic insufficiency
   - Fluid accumulation
   - Protein-rich edema
   - Tissue fibrosis over time
   - Adipose deposition
   - Increased infection risk

   *Management:*
   - Complete decongestive therapy (CDT)
     * Manual lymphatic drainage
     * Compression bandaging/garments
     * Exercise, skin care
   - Compression devices
   - Surgical options:
     * Lymph node transfer
     * Lymphaticovenous anastomosis
     * Liposuction (late-stage)
     * Debulking (severe cases)

2. **Lymphatic Malformations**

   *Classification:*
   - Macrocystic (cystic hygroma)
   - Microcystic
   - Combined

   *Molecular:*
   - Somatic PIK3CA mutations common
   - mTOR pathway involvement

   *Treatment:*
   - Observation (may involute)
   - Sclerotherapy
   - Surgery
   - Sirolimus (mTOR inhibitor)

3. **Lymphatic Involvement in Cancer**

   *Lymph Node Metastasis:*
   - Common route for carcinoma spread
   - Sentinel node biopsy for staging
   - Prognostic significance
   - May alter systemic therapy decisions

   *Tumor Lymphangiogenesis:*
   - VEGF-C/D overexpression
   - Promotes lymphatic invasion
   - Anti-VEGF-C/D in development

   *Lymphangitic Carcinomatosis:*
   - Tumor spread within lymphatics
   - Lung commonly affected
   - Dyspnea, reticular pattern on imaging

4. **Chylous Disorders**

   *Chylothorax:*
   - Chyle accumulation in pleural space
   - Causes: Trauma (surgery), malignancy, LAM
   - Milky fluid, triglycerides >110 mg/dL
   - Management: Drainage, low-fat diet, octreotide, surgery

   *Chylous Ascites:*
   - Chyle in peritoneum
   - Causes: Malignancy, surgery, cirrhosis, infection
   - Similar management approach

   *Protein-Losing Enteropathy:*
   - Intestinal lymphatic dysfunction
   - Loss of protein into gut
   - Hypoalbuminemia, edema, immunodeficiency
   - Causes: Primary intestinal lymphangiectasia, constrictive pericarditis

5. **Lymphatic System in Infection**

   *Lymphangitis:*
   - Infection of lymphatic vessels
   - Red streaking toward regional nodes
   - Usually Group A Streptococcus
   - Requires antibiotics

   *Filariasis:*
   - Wuchereria bancrofti, Brugia sp.
   - Lymphatic obstruction
   - Elephantiasis
   - Leading cause of lymphedema globally

**Research Frontiers:**

- Lymphatic involvement in CNS (meningeal lymphatics)
- Cardiac lymphatics in heart failure
- Lymphatic-targeted drug delivery
- Imaging modalities (lymphoscintigraphy, ICG, MR lymphangiography)
- Therapeutic lymphangiogenesis for lymphedema`,
      keyTerms: [
        { term: 'Milroy disease', definition: 'Congenital primary lymphedema caused by VEGFR3 mutations' },
        { term: 'chylothorax', definition: 'Accumulation of chyle in the pleural space from thoracic duct injury or obstruction' },
        { term: 'lymphangiectasia', definition: 'Dilation of lymphatic vessels; intestinal form causes protein-losing enteropathy' },
        { term: 'lymphangitic carcinomatosis', definition: 'Spread of cancer through pulmonary lymphatics causing characteristic reticular pattern' },
        { term: 'lymphaticovenous anastomosis', definition: 'Microsurgical procedure connecting lymphatics to veins to treat lymphedema' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Thoracic duct injury: Chylothorax, left side more common (anatomic course)
- Sentinel node: First node receiving drainage, radiotracer and/or blue dye identification
- Filariasis: Diethylcarbamazine (DEC) for treatment; ivermectin for mass drug administration
- Protein-losing enteropathy + lymphopenia = consider primary intestinal lymphangiectasia
- Lymphedema stages: I (reversible), II (non-pitting, irreversible), III (elephantiasis)
- Recurrent cellulitis in lymphedema: Prophylactic antibiotics may be indicated
- Lymphangioleiomyomatosis (LAM): Women, cystic lung disease, chylothorax; TSC/mTOR pathway`,
    },
  },

  media: [
    {
      id: 'lymphatic-system-overview',
      type: 'diagram',
      filename: 'lymphatic-system-overview.svg',
      title: 'Lymphatic System Overview',
      description: 'Major lymphatic vessels, trunks, and ducts',
    },
    {
      id: 'lymphatic-capillary-structure',
      type: 'diagram',
      filename: 'lymphatic-capillary.svg',
      title: 'Lymphatic Capillary Structure',
      description: 'Button junctions and anchoring filaments',
    },
    {
      id: 'thoracic-duct-anatomy',
      type: 'diagram',
      filename: 'thoracic-duct.svg',
      title: 'Thoracic Duct Course',
      description: 'Path from cisterna chyli to left venous angle',
    },
  ],
  citations: [
    {
      id: 'alitalo-2011',
      type: 'article',
      title: 'The lymphatic vasculature in disease',
      authors: ['Alitalo K'],
      source: 'Nature Medicine',
      url: 'https://doi.org/10.1038/nm.2545',
    },
    {
      id: 'openstax-ap-ch21',
      type: 'textbook',
      title: 'The Lymphatic and Immune System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '21',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'system-lymphatic', targetType: 'system', relationship: 'parent', label: 'Lymphatic System' },
    { targetId: 'structure-lymph-nodes', targetType: 'structure', relationship: 'related', label: 'Lymph Nodes' },
    { targetId: 'condition-lymphedema', targetType: 'condition', relationship: 'related', label: 'Lymphedema' },
  ],
  tags: {
    systems: ['lymphatic', 'immune', 'cardiovascular'],
    structures: ['FMA:30315'],
    topics: ['anatomy', 'physiology', 'vascular biology'],
    keywords: ['lymphatic vessels', 'thoracic duct', 'lymphedema', 'lymph', 'lacteal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lymphaticVesselsContent;
