import { EducationalContent, ComplexityLevel } from '../../types';

export const cellDeathPatho: EducationalContent = {
  id: 'cell-death-patho',
  type: 'topic',
  name: 'Cell Death',
  levels: {
    1: {
      level: 1 as ComplexityLevel,
      summary: 'Cell death is a fundamental biological process essential for development, tissue homeostasis, and elimination of damaged cells, with different forms having distinct characteristics.',
      explanation: `Cell death is a fundamental biological process essential for development, tissue homeostasis, and elimination of damaged cells. Different forms of cell death have distinct morphological features, biochemical pathways, and physiological or pathological implications.

## What is Cell Death?

Cell death is when a cell stops functioning permanently. It's a normal and necessary part of life!

## Why Do Cells Die?

Cell death is important for many reasons:

1. **Development**: Helps form proper body structures (like fingers separating)
2. **Maintenance**: Removes old or damaged cells
3. **Protection**: Eliminates cells that could become harmful (like infected or cancerous cells)
4. **Balance**: Keeps the right number of cells in tissues

## Main Types of Cell Death

### Apoptosis: "Programmed Cell Death"

- **Orderly and controlled**
- Like a planned shutdown of a factory
- The cell neatly packages itself for removal
- No inflammation or damage to neighboring cells
- Essential for normal development and health

### Necrosis: "Accidental Cell Death"

- **Messy and uncontrolled**
- Like a factory explosion
- The cell bursts and spills its contents
- Causes inflammation in surrounding tissue
- Results from injury or damage

## Why Does This Matter?

Understanding cell death helps us understand:
- How diseases develop
- How to treat cancer (by promoting cancer cell death)
- How to protect cells from dying (like in heart attacks or strokes)
- How our bodies develop and maintain themselves`,
      keyTerms: [
        { term: 'Apoptosis', definition: 'Programmed, controlled cell death characterized by cellular shrinkage and fragmentation' },
        { term: 'Necrosis', definition: 'Uncontrolled cell death resulting from injury, characterized by swelling and inflammation' },
        { term: 'Autophagy', definition: 'Self-digestion process that can lead to cell survival or death' },
        { term: 'Programmed Cell Death', definition: 'Orderly process by which cells intentionally end their life' },
        { term: 'Inflammation', definition: 'Body immune response to injury or infection' }
      ],
      analogies: [
        'Apoptosis is like taking out the trash - neatly bagged and removed without making a mess.',
        'Necrosis is like a garbage can tipping over - messy and spills everywhere, causing problems.'
      ],
      examples: [
        'Finger development: Apoptosis removes the webbing between fingers during embryonic development',
        'Sunburn: Severe sunburn can cause necrosis of skin cells',
        'Fallen leaves: Like leaves falling from a tree in autumn, cells die and are replaced',
        'Immune system: Old immune cells die to make room for new ones'
      ],
      patientCounselingPoints: [
        'Cell death is a normal part of life - our bodies are constantly replacing old cells with new ones',
        'Some treatments (like chemotherapy) work by causing cancer cells to undergo apoptosis',
        'Protecting cells from premature death (like during a heart attack) is an important medical goal'
      ]
    },
    2: {
      level: 2 as ComplexityLevel,
      summary: 'Apoptosis is a highly regulated form of programmed cell death essential for development, tissue homeostasis, and elimination of damaged cells, involving characteristic morphological changes and complex molecular pathways.',
      explanation: `Apoptosis is a highly regulated form of programmed cell death essential for development, tissue homeostasis, and elimination of damaged cells. It involves characteristic morphological changes and is controlled by complex molecular pathways.

## Apoptosis: Programmed Cell Death

### Definition

Apoptosis (from Greek: "falling off" like leaves from a tree) is a genetically programmed, orderly process of cell death that occurs in multicellular organisms.

### Key Characteristics

**Unlike necrosis, apoptosis:**
- Requires energy (ATP-dependent)
- Is highly regulated and controlled
- Produces characteristic morphological changes
- Does NOT cause inflammation
- Affects individual cells, not groups

### Morphological Features

1. **Cellular Shrinkage**
   - Cell becomes smaller and denser
   - Cytoplasm condenses

2. **Chromatin Condensation**
   - DNA compacts against nuclear membrane
   - Nucleus breaks into fragments

3. **Membrane Blebbing**
   - Surface forms bulges and protrusions
   - Cell appears to "boil"

4. **Formation of Apoptotic Bodies**
   - Cell fragments into membrane-bound packages
   - Contain intact organelles

5. **Phagocytosis**
   - Apoptotic bodies are rapidly eaten by other cells
   - No inflammation is triggered

### Physiological Roles

1. **Development**
   - Embryonic sculpting (digit separation)
   - Neural pathway pruning
   - Removal of temporary structures

2. **Tissue Homeostasis**
   - Balancing cell division with death
   - Intestinal epithelium turnover
   - Skin cell shedding

3. **Immune Function**
   - Negative selection of self-reactive T cells
   - Removal of virus-infected cells
   - Termination of immune responses

4. **Hormone-Dependent Atrophy**
   - Endometrial shedding during menstruation
   - Lactation cessation

### Pathological Aspects

**Too much apoptosis:**
- Neurodegenerative diseases (Alzheimer's, Parkinson's)
- Ischemic injury (heart attack, stroke)
- Autoimmune disorders

**Too little apoptosis:**
- Cancer (cells survive when they should die)
- Autoimmune disorders (self-reactive cells not eliminated)
- Viral infections (viruses block apoptosis)`,
      keyTerms: [
        { term: 'Apoptotic Bodies', definition: 'Membrane-bound fragments formed from apoptotic cells that are phagocytosed' },
        { term: 'Blebbing', definition: 'Formation of bulges in the plasma membrane during apoptosis' },
        { term: 'Chromatin Condensation', definition: 'Compaction of chromosomal material characteristic of apoptosis' },
        { term: 'Phagocytosis', definition: 'Process by which cells engulf and digest apoptotic bodies' },
        { term: 'Laddering Pattern', definition: 'Characteristic DNA fragmentation pattern in multiples of 180-200 bp seen in apoptosis' },
        { term: 'Homeostasis', definition: 'State of balance within the body, maintained by balancing cell birth and death' }
      ],
      analogies: [
        'Apoptosis is like a planned demolition - the building is carefully taken down piece by piece without damaging neighboring properties.',
        'Negative selection in the thymus is like a job interview - cells that can do the job properly are hired, while those that would attack the body are "fired" (killed).'
      ],
      examples: [
        'Thymic selection: 95% of developing T cells die by apoptosis to prevent autoimmunity',
        'Menstrual cycle: Endometrial cells undergo apoptosis when pregnancy does not occur',
        'Chemotherapy: Many cancer drugs work by inducing apoptosis in rapidly dividing cells',
        'Neurodegeneration: Excessive apoptosis contributes to Alzheimer\'s and Parkinson\'s diseases'
      ],
      patientCounselingPoints: [
        'Apoptosis is a normal process that helps prevent cancer by eliminating potentially harmful cells',
        'Some cancer treatments work by triggering apoptosis in cancer cells',
        'Understanding apoptosis helps doctors develop better treatments for various diseases'
      ]
    },
    3: {
      level: 3 as ComplexityLevel,
      summary: 'Apoptosis is executed through precisely regulated molecular pathways involving caspases, Bcl-2 family proteins, death receptors, and mitochondria, which integrate diverse signals to determine cell fate.',
      explanation: `Apoptosis is executed through precisely regulated molecular pathways involving caspases, Bcl-2 family proteins, death receptors, and mitochondria. These pathways integrate diverse signals to determine cell fate.

## Molecular Mechanisms of Apoptosis

### Caspases: The Executioners

Caspases (cysteine-aspartic proteases) are the primary enzymes that execute apoptosis.

**Types of Caspases:**

1. **Initiator Caspases** (8, 9, 10)
   - Activate other caspases
   - Caspase-8: Extrinsic pathway
   - Caspase-9: Intrinsic pathway

2. **Executioner Caspases** (3, 6, 7)
   - Cleave cellular proteins
   - Cause the morphological changes of apoptosis

**Caspase Activation:**
- Synthesized as inactive proenzymes
- Activated by proteolytic cleavage
- Form active tetramers

### Intrinsic (Mitochondrial) Pathway

**Triggered by:**
- DNA damage
- Oxidative stress
- Growth factor deprivation
- ER stress

**Key Steps:**

1. **Pro-apoptotic Signal**
   - p53 activated by DNA damage
   - BH3-only proteins (Bim, Puma, Noxa) expressed

2. **Bcl-2 Family Activation**
   - **Pro-apoptotic**: Bax, Bak (form pores in mitochondria)
   - **Anti-apoptotic**: Bcl-2, Bcl-xL (prevent pore formation)
   - **BH3-only**: Sensing stress (Bid, Bad, Bim, Puma)

3. **MOMP (Mitochondrial Outer Membrane Permeabilization)**
   - Bax/Bak oligomerize and form pores
   - Mitochondrial membrane potential collapses

4. **Cytochrome c Release**
   - Escapes through mitochondrial pores
   - Binds to Apaf-1 in cytoplasm

5. **Apoptosome Formation**
   - Cytochrome c + Apaf-1 + procaspase-9
   - Activates caspase-9
   - Caspase-9 activates caspase-3

### Extrinsic (Death Receptor) Pathway

**Triggered by:**
- Fas ligand (FasL)
- TNF-alpha
- TRAIL

**Key Steps:**

1. **Ligand Binding**
   - Death ligands bind to death receptors
   - Receptors: Fas, TNFR1, TRAIL receptors

2. **DISC Formation**
   - Death-Inducing Signaling Complex
   - Adaptor proteins (FADD) recruited
   - Procaspase-8 brought to complex

3. **Caspase-8 Activation**
   - Autocleavage within DISC
   - Active caspase-8 activates caspase-3

4. **Bid Connection**
   - Caspase-8 cleaves Bid to tBid
   - tBid activates mitochondrial pathway
   - Amplifies death signal

### Regulatory Mechanisms

**IAPs (Inhibitors of Apoptosis Proteins)**
- Bind and inhibit caspases
- Include XIAP, cIAP1, cIAP2
- SMAC/Diablo neutralizes IAPs

**p53**
- "Guardian of the genome"
- Activated by DNA damage
- Induces pro-apoptotic genes
- Decides: repair or apoptosis

**FLIP**
- Inhibits caspase-8 activation
- Regulates extrinsic pathway`,
      keyTerms: [
        { term: 'Caspase', definition: 'Cysteine proteases that cleave target proteins after aspartic acid residues to execute apoptosis' },
        { term: 'Apoptosome', definition: 'Multi-protein complex (cytochrome c + Apaf-1 + caspase-9) that activates the intrinsic pathway' },
        { term: 'Cytochrome c', definition: 'Mitochondrial protein released during apoptosis to trigger caspase activation via apoptosome formation' },
        { term: 'Death Receptors', definition: 'Cell surface receptors (Fas, TNFR) that trigger apoptosis when bound by ligands' },
        { term: 'BH3-only proteins', definition: 'Pro-apoptotic Bcl-2 family members (Bid, Bad, Bim, Puma) that sense cellular stress' },
        { term: 'MOMP', definition: 'Mitochondrial Outer Membrane Permeabilization, the point of no return in intrinsic apoptosis' },
        { term: 'DISC', definition: 'Death-Inducing Signaling Complex, forms when death receptors are activated' },
        { term: 'IAPs', definition: 'Inhibitors of Apoptosis Proteins, regulate caspase activity' }
      ],
      analogies: [
        'The apoptosome is like a molecular guillotine - once assembled, it activates the executioner.',
        'Bcl-2 family proteins are like gatekeepers at the mitochondria - some open the gates (Bax/Bak) and some lock them (Bcl-2/Bcl-xL).',
        'The extrinsic and intrinsic pathways are like two different alarm systems - one outside the building, one inside - but they both call the same response team (caspases).'
      ],
      examples: [
        'Follicular lymphoma: Bcl-2 gene overexpression prevents apoptosis, allowing cancer cells to survive',
        'p53 mutations: Occur in >50% of cancers, preventing DNA damage-induced apoptosis',
        'TRAIL receptor agonists: Being developed as cancer therapeutics to trigger apoptosis',
        'Caspase inhibitors: Investigated for liver diseases and stroke to prevent unwanted apoptosis'
      ],
      clinicalNotes: 'Dysregulation of apoptotic pathways is a hallmark of cancer. Many cancer therapies aim to restore apoptosis (e.g., BH3 mimetics like venetoclax). Conversely, preventing apoptosis is crucial in conditions like stroke, heart attack, and neurodegenerative diseases.'
    },
    4: {
      level: 4 as ComplexityLevel,
      summary: 'Beyond apoptosis, cells can die through multiple distinct pathways with unique morphological features, molecular mechanisms, and physiological or pathological consequences, including necrosis, necroptosis, pyroptosis, ferroptosis, and autophagic cell death.',
      explanation: `Beyond apoptosis, cells can die through multiple distinct pathways with unique morphological features, molecular mechanisms, and physiological or pathological consequences. These forms of cell death contribute to various disease processes.

## Necrosis: Unregulated Cell Death

### Definition
Uncontrolled death caused by overwhelming injury, characterized by cellular swelling, membrane rupture, and inflammation.

### Types of Necrosis

1. **Coagulative Necrosis**
   - **Cause**: Ischemia in most tissues
   - **Appearance**: Firm, pale tissue
   - **Microscopy**: Architecture preserved, hypereosinophilic cytoplasm, lost nuclei
   - **Typical locations**: Heart, kidney, spleen

2. **Liquefactive Necrosis**
   - **Cause**: Bacterial infection or brain ischemia
   - **Appearance**: Liquid, creamy debris
   - **Mechanism**: Digestion by hydrolytic enzymes
   - **Typical locations**: Brain, abscesses

3. **Caseous Necrosis**
   - **Cause**: Mycobacterial infection (TB)
   - **Appearance**: Cheese-like, soft, granular
   - **Association**: Granulomatous inflammation

4. **Fat Necrosis**
   - **Cause**: Acute pancreatitis, trauma to fat
   - **Mechanism**: Lipase digestion + saponification
   - **Appearance**: Chalky white deposits
   - **Typical locations**: Pancreas, breast

5. **Fibrinoid Necrosis**
   - **Cause**: Immune-mediated vascular injury
   - **Appearance**: Bright pink staining (fibrin-rich)
   - **Typical locations**: Blood vessels in vasculitis

6. **Gangrenous Necrosis**
   - **Cause**: Severe ischemia + bacterial infection
   - **Types**: Dry (coagulative) vs. Wet (liquefactive)

## Regulated Forms of Necrosis

### Necroptosis
- **Nature**: Programmed necrosis
- **Key mediators**: RIPK1, RIPK3, MLKL
- **Trigger**: Death receptors when caspases inhibited
- **Mechanism**: MLKL forms membrane pores
- **Appearance**: Similar to necrosis but regulated
- **Clinical relevance**: Inflammation, ischemia-reperfusion injury

### Pyroptosis
- **Nature**: Inflammatory programmed cell death
- **Trigger**: Pathogens, DAMPs
- **Key mediators**: Inflammasomes, gasdermins
- **Mechanism**: Gasdermin D forms membrane pores
- **Result**: IL-1beta, IL-18 release, inflammation
- **Clinical relevance**: Sepsis, autoinflammatory diseases

### Ferroptosis
- **Nature**: Iron-dependent regulated cell death
- **Trigger**: GPX4 inhibition, lipid peroxide accumulation
- **Key features**: Lipid peroxidation, mitochondrial shrinkage
- **Mediators**: Iron, PUFA lipids, ROS
- **Clinical relevance**: Neurodegeneration, cancer therapy

### Autophagic Cell Death
- **Nature**: Death via excessive self-digestion
- **Mechanism**: Massive autophagosome formation
- **Controversy**: May be cell survival attempt
- **Clinical relevance**: Cancer development, neurodegeneration

## Other Forms of Cell Death

### Entosis
- Cell-in-cell death
- One cell engulfed by another
- May promote tumor heterogeneity

### NETosis
- Neutrophil-specific death
- Releases NETs (neutrophil extracellular traps)
- Traps pathogens but can cause tissue damage

### Parthanatos
- PARP1 overactivation
- AIF translocation from mitochondria
- DNA damage-induced

## Comparison of Cell Death Types

| Feature | Apoptosis | Necrosis | Necroptosis | Pyroptosis |
|---------|-----------|----------|-------------|------------|
| Regulation | Programmed | Accidental | Programmed | Programmed |
| Energy | ATP-dependent | ATP-independent | ATP-independent | ATP-dependent |
| Inflammation | No | Yes | Yes | Yes |
| Membrane | Intact (blebbing) | Ruptured | Ruptured | Porous |
| DNA fragmentation | Ladder | Random | Random | Random |
| Key enzymes | Caspases | None | RIPK1/3/MLKL | Caspase-1, gasdermins |`,
      keyTerms: [
        { term: 'Necroptosis', definition: 'Regulated form of necrosis mediated by RIPK1, RIPK3, and MLKL pore formation' },
        { term: 'Pyroptosis', definition: 'Inflammatory cell death activated by inflammasomes and gasdermin pore formation' },
        { term: 'Ferroptosis', definition: 'Iron-dependent form of regulated cell death driven by lipid peroxidation' },
        { term: 'Gasdermin', definition: 'Protein family that forms pores in membranes during pyroptosis' },
        { term: 'RIPK', definition: 'Receptor-interacting serine/threonine-protein kinases involved in necroptosis' },
        { term: 'Inflammasome', definition: 'Multiprotein complex that activates caspase-1 and inflammatory cytokines' },
        { term: 'GPX4', definition: 'Glutathione peroxidase 4, prevents lipid peroxidation and ferroptosis' },
        { term: 'NETosis', definition: 'Neutrophil cell death releasing chromatin webs to trap pathogens' }
      ],
      analogies: [
        'Necroptosis is like a "planned demolition" that still causes a mess - the decision to die is controlled, but the aftermath is similar to accidental necrosis.',
        'Pyroptosis is like a self-destruct alarm that alerts the whole neighborhood - the cell dies but shouts warnings to other cells.',
        'Ferroptosis is like rust spreading through metal - iron-dependent oxidation that destroys the cell from within.'
      ],
      examples: [
        'Myocardial infarction: Coagulative necrosis of cardiac muscle',
        'Brain stroke: Liquefactive necrosis due to high lipid content',
        'Tuberculosis: Caseous necrosis in granulomas',
        'Sepsis: Pyroptosis contributes to cytokine storm',
        'Neurodegeneration: Ferroptosis implicated in Parkinson\'s disease',
        'Crohn\'s disease: Necroptosis in intestinal epithelium'
      ],
      clinicalNotes: 'Understanding the specific cell death pathways has therapeutic implications. Inhibitors of necroptosis (necrostatins), ferroptosis (ferrostatins), and pyroptosis are being investigated for various diseases. The choice of cell death pathway affects tissue outcomes and inflammatory responses.'
    },
    5: {
      level: 5 as ComplexityLevel,
      summary: 'Understanding cell death mechanisms has led to novel therapeutic approaches for diverse diseases, including cancer, neurodegenerative disorders, cardiovascular diseases, and inflammatory conditions through modulation of specific death pathways.',
      explanation: `Understanding cell death mechanisms has led to novel therapeutic approaches for diverse diseases. Modulation of cell death pathways offers opportunities for cancer treatment, neuroprotection, and management of inflammatory conditions.

## Cell Death in Cancer

### Evasion of Apoptosis: A Hallmark of Cancer

**Mechanisms of apoptosis resistance:**

1. **p53 mutations**
   - Loss of DNA damage response
   - Present in >50% of cancers
   - Correlates with poor prognosis

2. **Bcl-2 overexpression**
   - Follicular lymphoma: t(14;18) translocation
   - Sequesters pro-apoptotic proteins
   - Prevents MOMP

3. **IAP overexpression**
   - XIAP, survivin upregulation
   - Direct caspase inhibition
   - Associated with treatment resistance

4. **Death receptor downregulation**
   - Reduced Fas expression
   - Soluble decoy receptors
   - Impairs extrinsic pathway

5. **FLIP overexpression**
   - Inhibits caspase-8 activation
   - Blocks extrinsic pathway

### Therapeutic Induction of Cell Death

**BH3 Mimetics**
- Venetoclax (Bcl-2 inhibitor): CLL, AML
- Navitoclax (Bcl-2/Bcl-xL inhibitor)
- Mcl-1 inhibitors in development

**Death Receptor Agonists**
- TRAIL receptor agonists
- Fas agonists
- Clinical trials ongoing

**SMAC Mimetics**
- Antagonize IAPs
- Promote caspase activation
- Synergize with other therapies

**p53 Reactivators**
- APR-246 (eprenetapopt)
- Restore wild-type function to mutant p53
- Clinical trials in various cancers

## Cell Death in Neurodegenerative Diseases

### Excessive Cell Death

**Alzheimer's Disease**
- A-beta induces apoptosis
- Tau pathology triggers death pathways
- Caspase activation in plaques

**Parkinson's Disease**
- Dopaminergic neuron apoptosis
- Alpha-synuclein aggregates
- Mitochondrial dysfunction

**ALS**
- Motor neuron death
- SOD1 mutations
- Mixed apoptosis/necrosis

**Huntington's Disease**
- Mutant huntingtin protein
- Caspase-6 activation
- Transcriptional dysregulation

### Neuroprotective Strategies

**Caspase Inhibitors**
- Minocycline (caspase-1/3 inhibitor)
- Emricasan (pan-caspase inhibitor)
- Limited clinical success

**Anti-apoptotic Approaches**
- Bcl-2 overexpression (gene therapy)
- IAP enhancers
- Growth factor support

**Anti-necrotic Strategies**
- Necrostatins (necroptosis inhibitors)
- Ferrostatins (ferroptosis inhibitors)
- Antioxidants

## Cell Death in Cardiovascular Diseases

### Myocardial Infarction

**Cell death patterns:**
- Central necrosis (severe ischemia)
- Peripheral apoptosis (moderate ischemia)
- Necroptosis contributes

**Therapeutic targets:**
- Reperfusion strategies (reduce death)
- Caspase inhibitors (clinical trials)
- Necroptosis inhibitors (preclinical)

### Heart Failure

**Chronic cell loss contributes to:**
- Ventricular remodeling
- Progressive dysfunction

**Approaches:**
- Beta-blockers (reduce apoptosis)
- ACE inhibitors (reduce stress)
- Cell death inhibitors (investigational)

## Cell Death in Infectious Diseases

### Pathogen Manipulation

**Viruses**
- Encode caspase inhibitors (crmA, p35)
- Express Bcl-2 homologs
- Block death receptors
- OR manipulate for viral release

**Bacteria**
- Inhibit apoptosis to survive intracellularly
- Induce pyroptosis to spread
- Produce toxins causing necrosis

**Parasites**
- Modulate host cell death
- Prevent apoptosis for survival

### Therapeutic Implications

**Promoting death of infected cells:**
- Enhancing apoptosis of virus-infected cells
- Boosting pyroptosis against intracellular bacteria

**Preventing excessive death:**
- Anti-inflammatory in sepsis
- Caspase inhibitors in severe infections

## Emerging Therapeutic Approaches

### Targeted Therapies

1. **Combination Therapies**
   - Multiple death pathway targeting
   - Overcome resistance mechanisms
   - Lower doses, reduced toxicity

2. **Precision Medicine**
   - Genetic profiling
   - Biomarker-guided therapy
   - Personalized death pathway modulation

3. **Gene Therapy**
   - Pro-apoptotic gene delivery (cancer)
   - Anti-apoptotic gene delivery (neurodegeneration)

4. **Cell Therapy**
   - Engineered immune cells (CAR-T)
   - Stem cells for regeneration
   - Combined with death pathway modulators

### Clinical Pipeline

**Approved:**
- Venetoclax (CLL, AML)
- Bortezomib (multiple myeloma - induces ER stress/apoptosis)

**In Clinical Trials:**
- LCL161 (SMAC mimetic)
- Birinapant (SMAC mimetic)
- Concordet (pan-caspase inhibitor)
- Necrostatins (stroke, MI)

**Preclinical:**
- Ferroptosis inducers (cancer)
- Ferroptosis inhibitors (neurodegeneration)
- Gasdermin activators (infection)
- Gasdermin inhibitors (inflammatory disease)

## Future Directions

1. **Better biomarkers** for cell death type in patients
2. **Imaging modalities** to visualize cell death in vivo
3. **Combination approaches** targeting multiple pathways
4. **Context-specific modulation** - different strategies for different diseases
5. **Timing optimization** - when to inhibit vs. promote cell death`,
      keyTerms: [
        { term: 'BH3 Mimetics', definition: 'Small molecule inhibitors of anti-apoptotic Bcl-2 proteins (e.g., venetoclax) that induce apoptosis' },
        { term: 'SMAC Mimetics', definition: 'Compounds that antagonize IAPs to promote caspase activation and apoptosis' },
        { term: 'Necrostatins', definition: 'Inhibitors of RIPK1 that block necroptosis, under investigation for stroke and myocardial infarction' },
        { term: 'Ferrostatins', definition: 'Inhibitors of ferroptosis that prevent iron-dependent lipid peroxidation' },
        { term: 'Apoptotic Index', definition: 'Percentage of cells undergoing apoptosis in a tissue sample, used as prognostic marker' },
        { term: 'p53 Reactivators', definition: 'Compounds that restore wild-type function to mutant p53 protein' },
        { term: 'Caspase Inhibitors', definition: 'Compounds that block caspase activity to prevent apoptosis, investigated for liver and neurologic diseases' }
      ],
      analogies: [
        'Venetoclax works like cutting the brakes on a car - by inhibiting Bcl-2, it removes the brakes on apoptosis, allowing cancer cells to die.',
        'In neurodegenerative diseases, we want to put the brakes on cell death, while in cancer, we want to accelerate it - same pathways, opposite goals.',
        'Combination therapies are like attacking a fortress from multiple sides - different drugs block different survival pathways.'
      ],
      examples: [
        'Venetoclax + obinutuzumab for CLL: Targeted therapy combining Bcl-2 inhibition with immune-mediated killing',
        'High-dose chemotherapy induces apoptosis in cancer cells but also causes collateral damage to healthy tissues',
        'Stroke patients: Caspase inhibitors studied to reduce penumbra apoptosis and preserve brain tissue',
        'Sepsis: Targeting pyroptosis to reduce cytokine storm while maintaining pathogen clearance',
        'Ferroptosis induction as emerging cancer therapy, especially for treatment-resistant tumors'
      ],
      clinicalNotes: 'The therapeutic window for cell death modulation is narrow and context-dependent. In cancer, we want to promote death, but must avoid killing normal cells. In neurodegeneration, we want to prevent death, but must recognize that some cell death is necessary for homeostasis. Combination approaches that target multiple death pathways simultaneously show promise but increase complexity of treatment.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['general'],
    topics: ['pathology', 'cell-biology', 'cell-death', 'apoptosis', 'necrosis'],
    keywords: ['apoptosis', 'necrosis', 'necroptosis', 'pyroptosis', 'ferroptosis', 'caspases', 'cancer', 'neurodegeneration'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology']
    }
  },
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
  version: 1,
  status: 'draft'
};
