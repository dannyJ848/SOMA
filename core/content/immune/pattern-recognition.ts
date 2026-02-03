/**
 * Pattern Recognition Receptors
 *
 * TLRs, NLRs, and other innate immune sensors
 */

import { EducationalContent } from '../types';

export const patternRecognitionContent: EducationalContent = {
  id: 'pattern-recognition-receptors',
  type: 'concept',
  name: 'Pattern Recognition Receptors',
  alternateNames: ['PRRs', 'Innate Immune Sensors', 'Pathogen Recognition'],

  levels: {
    1: {
      level: 1,
      summary: 'Your immune cells have special sensors called pattern recognition receptors that detect germs by recognizing unique patterns on their surfaces, triggering immediate immune responses.',
      explanation: `## How Your Cells Detect Germs

Your immune cells need to know when germs are present. They use special sensors called **pattern recognition receptors** (PRRs) that act like security cameras, constantly watching for signs of danger.

### What Do These Sensors Detect?

**PAMPs - Patterns on Germs**
- Pieces of bacteria, viruses, and fungi
- Common patterns found on many germs
- Examples: bacterial cell walls, viral genetic material

**DAMPs - Signs of Damage**
- Signals released by damaged body cells
- Tell immune system that injury occurred
- Examples: DNA outside nucleus, broken cell parts

### Main Types of Sensors

**Toll-like Receptors (TLRs)**
- Located on cell surfaces and inside cells
- 10 different types in humans
- Each detects different germ patterns
- Like different security cameras for different threats

**Examples:**
- TLR4 detects bacterial cell walls (LPS)
- TLR3 detects viral double-stranded RNA
- TLR7 detects viral single-stranded RNA
- TLR9 detects bacterial DNA

**NOD-like Receptors (NLRs)**
- Found inside cells
- Detect germs that get inside
- Also sense cell damage
- Important for activating inflammation

**RIG-I-like Receptors (RLRs)**
- Detect viral infections
- Recognize viral RNA in cell cytoplasm
- Trigger antiviral defenses

**C-type Lectin Receptors (CLRs)**
- Detect fungal infections
- Recognize sugars on fungal cell walls
- Important for antifungal immunity

## What Happens When Sensors Detect Germs?

1. **Receptors bind** to germ patterns
2. **Signals sent** inside the cell
3. **Genes turned on** to make immune proteins
4. **Inflammation triggered** to fight infection
5. **Other immune cells called** to help

## Why This Matters

These sensors allow your body to:
- **Respond immediately** to infections
- **Distinguish** germs from healthy cells
- **Remember** patterns for faster future responses
- **Coordinate** with other immune defenses

## When Things Go Wrong

- **Too much activation**: Can cause severe inflammation
- **Not enough activation**: Increased infection risk
- **Self-recognition**: Can trigger autoimmune disease`,
      keyTerms: [
        { term: 'pattern recognition receptor', definition: 'A sensor on immune cells that detects patterns on germs', pronunciation: 'PAT-ern ree-KOG-nish-un ree-SEP-tor' },
        { term: 'PAMP', definition: 'Pathogen-associated molecular pattern; unique structures on germs', pronunciation: 'pamp' },
        { term: 'DAMP', definition: 'Danger-associated molecular pattern; signals from damaged cells', pronunciation: 'damp' },
        { term: 'Toll-like receptor', definition: 'A type of pattern recognition receptor on cell surfaces', pronunciation: 'toll-lyke ree-SEP-tor' },
        { term: 'inflammation', definition: 'The body response to injury or infection with redness, heat, swelling, and pain', pronunciation: 'in-flah-MAY-shun' },
      ],
      analogies: [
        'Pattern recognition receptors are like security cameras that can identify intruders by their clothing patterns.',
        'PAMPs are like fingerprints that identify germs as dangerous.',
        'TLRs are like different types of smoke detectors - each detects a different kind of fire (infection).',
        'The immune response is like a fire alarm - when sensors detect danger, they trigger a full emergency response.',
      ],
      examples: [
        'When bacteria enter a cut, TLR4 on immune cells detects their cell walls and triggers inflammation.',
        'During a viral infection, TLR3 inside cells detects viral RNA and activates antiviral genes.',
        'Fungal infections are detected by CLRs that recognize sugars on yeast cell walls.',
        'In gout, crystals in joints act as DAMPs and trigger painful inflammation through NLRs.',
      ],
      patientCounselingPoints: [
        'Fever and inflammation are signs your pattern recognition receptors detected an infection.',
        'Some autoimmune diseases occur when these receptors mistakenly recognize body tissues.',
        'Vaccines help train your immune system to recognize patterns on specific germs.',
        'Chronic inflammation can sometimes be caused by overactive pattern recognition.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pattern recognition receptors (PRRs) including Toll-like receptors (TLRs), NOD-like receptors (NLRs), RIG-I-like receptors (RLRs), and C-type lectin receptors detect pathogen-associated molecular patterns (PAMPs) and danger-associated molecular patterns (DAMPs) to initiate innate immune responses.',
      explanation: `## Pattern Recognition Receptor Families

### Toll-like Receptors (TLRs)

**Structure and Signaling:**
- Type I transmembrane proteins
- Leucine-rich repeat (LRR) domains for ligand binding
- Toll/IL-1 receptor (TIR) domain for signaling
- Homodimerize or heterodimerize upon activation

**Cellular Localization:**

**Cell Surface TLRs:**
- **TLR4**: LPS (Gram-negative bacteria), recognizes with MD-2 and CD14
- **TLR5**: Bacterial flagellin
- **TLR1/TLR2 heterodimer**: Triacyl lipopeptides
- **TLR2/TLR6 heterodimer**: Diacyl lipopeptides, peptidoglycan, zymosan

**Endosomal TLRs:**
- **TLR3**: Double-stranded RNA (viruses)
- **TLR7/TLR8**: Single-stranded RNA (viruses), guanosine/uridine-rich
- **TLR9**: Unmethylated CpG DNA (bacteria, viruses)
- **TLR11/12** (mouse): Profilin (Toxoplasma)

**Signaling Pathways:**
- **MyD88-dependent**: All TLRs except TLR3; activates NF-κB and AP-1
- **TRIF-dependent**: TLR3 and TLR4; activates IRF3 and NF-κB
- **NF-κB**: Pro-inflammatory cytokines (IL-6, TNF-α, IL-1β)
- **IRF3/7**: Type I interferons (IFN-α/β)

### NOD-like Receptors (NLRs)

**Structure:**
- C-terminal LRR: Ligand sensing
- Central NACHT domain: Oligomerization
- N-terminal effector domain: Protein-protein interactions

**Subfamilies:**

**NLRs with CARD (NLRC):**
- **NOD1**: Recognizes iE-DAP (Gram-negative bacteria)
- **NOD2**: Recognizes MDP (all bacteria)
- Activate NF-κB and MAPK pathways
- Induce antimicrobial peptides

**NLRs with PYD (NLRP):**
- **NLRP3**: Forms inflammasome (crystals, ATP, alum, ROS)
- **NLRP1**: Forms inflammasome (anthrax toxin, MDP)
- **NAIP/NLRC4**: Detect bacterial flagellin, T3SS

**Inflammasome Function:**
- Oligomerization upon activation
- Recruit ASC adaptor
- Activate caspase-1
- Process IL-1β and IL-18
- Induce pyroptosis

### RIG-I-like Receptors (RLRs)

**Family Members:**
- **RIG-I (DDX58)**: Detects 5'-triphosphate ssRNA, short dsRNA
- **MDA5 (IFIH1)**: Detects long dsRNA
- **LGP2 (DHX58)**: Regulatory function

**Structure:**
- Two N-terminal CARDs
- Central helicase domain
- C-terminal regulatory domain

**Signaling:**
- MAVS adaptor on mitochondria
- Forms prion-like aggregates
- Activates IRF3/7 and NF-κB
- Induces type I interferons

### C-type Lectin Receptors (CLRs)

**Dectin-1 (CLEC7A):**
- Detects β-glucans (fungi)
- ITAM signaling
- Syk kinase activation
- Induces ROS, phagocytosis, cytokines

**Dectin-2 (CLEC6A):**
- Detects α-mannans (fungi)
- FcRγ chain association
- Syk-CARD9 pathway

**Mincle (CLEC4E):**
- Detects TDM (Mycobacteria), SAP130 (self)
- FcRγ chain signaling
- Macrophage activation

## PAMPs and DAMPs

### Pathogen-Associated Molecular Patterns

**Bacterial PAMPs:**
- LPS (TLR4): Gram-negative outer membrane
- Lipoteichoic acid (TLR2): Gram-positive cell wall
- Peptidoglycan (TLR2, NOD2): Bacterial cell wall
- Flagellin (TLR5, NLRC4): Bacterial motility
- Bacterial DNA (TLR9): CpG motifs
- RNA (TLR7/8): Viral/bacterial RNA

**Viral PAMPs:**
- dsRNA (TLR3, MDA5): Viral replication intermediate
- ssRNA (TLR7/8, RIG-I): Viral genome
- Viral DNA (TLR9, cGAS): Viral genome

**Fungal PAMPs:**
- β-glucans (Dectin-1): Cell wall component
- Mannans (Dectin-2, TLR4): Cell wall component

### Danger-Associated Molecular Patterns

**Endogenous DAMPs:**
- ATP (NLRP3, P2X7R): Released from damaged cells
- Uric acid crystals (NLRP3): Gout
- HMGB1 (TLR2, TLR4, RAGE): Nuclear protein
- DNA (TLR9, cGAS): Extracellular DNA
- RNA (TLR3, TLR7/8): Released from damaged cells
- IL-1α: Pre-formed, released upon damage

**Exogenous DAMPs:**
- Alum (NLRP3): Vaccine adjuvant
- Silica/asbestos (NLRP3): Occupational exposure
- Hyaluronan fragments (TLR2, TLR4): ECM breakdown

## Clinical Correlations

**TLR Deficiencies:**
- TLR3 deficiency: Herpes simplex encephalitis
- IRAK-4 deficiency: Pyogenic bacterial infections
- MyD88 deficiency: Severe bacterial infections in childhood

**Inflammasome Disorders:**
- CAPS (NLRP3 mutations): Cold-induced urticaria, fever
- FMF (MEFV mutations): Mediterranean fever
- PAPA syndrome (PSTPIP1 mutations): Pyogenic arthritis

**Autoimmune Diseases:**
- SLE: TLR7/9 overactivation by immune complexes
- RA: TLR2/4 activation by endogenous ligands
- Aicardi-Goutieres syndrome: Type I interferonopathy from nucleic acid sensing defects`,
      keyTerms: [
        { term: 'PAMP', definition: 'Pathogen-associated molecular pattern; conserved microbial structures recognized by PRRs', pronunciation: 'pamp' },
        { term: 'DAMP', definition: 'Danger-associated molecular pattern; endogenous molecules released by damaged cells', pronunciation: 'damp' },
        { term: 'TIR domain', definition: 'Toll/IL-1 receptor domain; signaling module in TLRs and IL-1R', pronunciation: 'tee-eye-ahr' },
        { term: 'inflammasome', definition: 'Cytosolic protein complex that activates caspase-1 and processes IL-1β', pronunciation: 'in-FLAM-ah-zohm' },
        { term: 'pyroptosis', definition: 'Inflammatory programmed cell death mediated by caspases', pronunciation: 'py-roh-TOH-sis' },
        { term: 'MAVS', definition: 'Mitochondrial antiviral signaling protein; adaptor for RLR signaling', pronunciation: 'mavs' },
        { term: 'CARD', definition: 'Caspase activation and recruitment domain; protein-protein interaction module', pronunciation: 'kard' },
        { term: 'ITAM', definition: 'Immunoreceptor tyrosine-based activation motif; signaling motif', pronunciation: 'eye-tam' },
        { term: 'CpG motif', definition: 'Unmethylated cytosine-guanine dinucleotide common in bacterial DNA', pronunciation: 'C-p-G' },
        { term: 'iE-DAP', definition: 'γ-D-glutamyl-meso-diaminopimelic acid; NOD1 ligand', pronunciation: 'eye-ee-dap' },
      ],
      analogies: [
        'PRRs are like a home security system with different sensors for smoke, motion, and glass breaking.',
        'TLRs on the cell surface are like door sensors, while endosomal TLRs are like sensors inside the house.',
        'The inflammasome is like an alarm control panel that processes signals and triggers the response.',
        'DAMPs are like a panic button - when cells are damaged, they send out distress signals.',
      ],
      examples: [
        'TLR4 recognizes LPS from E. coli, triggering sepsis if the response is excessive.',
        'NLRP3 inflammasome activation by uric acid crystals causes the painful inflammation of gout.',
        'RIG-I detects influenza virus RNA and induces interferons to establish antiviral state.',
        'Dectin-1 deficiency leads to chronic mucocutaneous candidiasis due to impaired fungal recognition.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pattern recognition receptors comprise multiple families (TLRs, NLRs, RLRs, CLRs) that detect conserved microbial structures (PAMPs) and endogenous danger signals (DAMPs), triggering signaling cascades that activate transcription factors, induce inflammatory cytokines, and coordinate innate and adaptive immune responses.',
      explanation: `## Toll-like Receptor Signaling

### MyD88-Dependent Pathway

**TLR4 Signaling:**
1. LPS binds MD-2/CD14/TLR4 complex
2. TLR4 homodimerization
3. TIR domain recruitment of MyD88
4. MyD88 recruits IRAK4
5. IRAK4 phosphorylates IRAK1
6. TRAF6 ubiquitination
7. TAK1 activation
8. IKK complex activation
9. NF-κB nuclear translocation
10. Pro-inflammatory gene expression

**IRAK Family:**
- IRAK4: Kinase, essential for signaling
- IRAK1: Kinase, downstream of IRAK4
- IRAK2: Similar to IRAK1
- IRAK3 (IRAK-M): Negative regulator
- IRAK4 deficiency: Severe immunodeficiency

**NF-κB Activation:**
- IKK phosphorylates IκB
- IκB ubiquitination and degradation
- NF-κB (p50/p65) released
- Nuclear translocation
- DNA binding to κB sites
- Gene transcription: TNF-α, IL-6, IL-1β, chemokines

### TRIF-Dependent Pathway

**TLR3 and TLR4:**
1. TRIF recruited to TIR domain
2. TRIF binds TRAF3 and TRAF6
3. TRAF3 recruits TBK1/IKKε
4. TBK1 phosphorylates IRF3
5. IRF3 dimerization and nuclear translocation
6. Type I IFN gene expression
7. TRAF6 activates NF-κB (alternative pathway)

**IRF Family:**
- IRF3: Induces IFN-β, IFN-α4
- IRF7: Induces all IFN-α subtypes
- IRF5: Pro-inflammatory with MyD88
- IRF8: DC development, IFN regulation

### Endosomal TLR Trafficking

**UNC93B1:**
- ER-resident protein
- Chaperones TLR3, TLR7, TLR9
- Required for trafficking to endosomes
- Mutations cause TLR7/9 dysfunction

**Cleavage Requirement:**
- TLR7 and TLR9 require proteolytic cleavage
- Cathepsins in endosomes process TLRs
- Cleavage required for ligand sensing
- Unprocessed TLRs are inactive

## NLR Biology

### NOD1 and NOD2 Signaling

**NOD1:**
- Ligand: iE-DAP (diaminopimelic acid-containing peptides)
- Sources: Gram-negative bacteria
- RIP2 (RIPK2) kinase recruitment
- IKK and MAPK activation
- NF-κB and AP-1 activation

**NOD2:**
- Ligand: MDP (muramyl dipeptide)
- Sources: All bacteria
- Higher affinity than NOD1
- RIP2 recruitment
- NF-κB and MAPK activation
- Induces antimicrobial peptides (defensins)

**NOD2 Mutations:**
- Crohn disease (3020insC, R702W, G908R)
- Blau syndrome (NOD2-associated autoinflammation)
- Loss of function: Impaired bacterial recognition
- Gain of function: Autoinflammation

### Inflammasome Assembly

**NLRP3 Inflammasome:**

**Activation Signals (Two-Signal Model):**
1. **Priming signal**: TLR or cytokine signaling
   - NF-κB activation
   - NLRP3 and pro-IL-1β transcription
2. **Activation signal**: Diverse triggers
   - K+ efflux (pore-forming toxins, ATP)
   - Lysosomal damage (crystals, particles)
   - ROS production
   - Mitochondrial dysfunction

**Assembly Process:**
1. NLRP3 oligomerization
2. PYD-PYD interaction with ASC
3. ASC forms filament (speck)
4. CARD-CARD recruitment of pro-caspase-1
5. Caspase-1 autoactivation
6. Processing of pro-IL-1β and pro-IL-18
7. Gasdermin D cleavage
8. Pyroptosis

**NLRC4 Inflammasome:**
- NAIP proteins detect ligands
- NAIP1: T3SS needle protein
- NAIP2: T3SS rod protein
- NAIP5/6: Flagellin
- NAIP-NLRC4 interaction
- Direct caspase-1 recruitment (no ASC required)

**Pyrin Inflammasome:**
- FMF gene (MEFV) encodes pyrin
- Regulates actin dynamics
- Detects Rho GTPase modification
- Activated by bacterial toxins
- ASC-dependent caspase-1 activation

## RLR Signaling

### RIG-I and MDA5 Specificity

**RIG-I:**
- 5'-triphosphate ssRNA
- Short dsRNA (<1 kb)
- Panhandle structures
- Negative-strand RNA viruses
- Paramyxoviruses, rhabdoviruses, influenza

**MDA5:**
- Long dsRNA (>1 kb)
- No 5'-triphosphate requirement
- Positive-strand RNA viruses
- Picornaviruses

**LGP2:**
- Regulates RIG-I and MDA5
- Can be positive or negative regulator
- RNA binding without signaling

### MAVS Signaling Platform

**MAVS Architecture:**
- CARD-like domain (interacts with RIG-I/MDA5)
- Proline-rich region
- TM domain (mitochondrial outer membrane)
- Forms prion-like aggregates

**Downstream Signaling:**
1. MAVS aggregation on mitochondria
2. Recruitment of TRAF3, TRAF6
3. TBK1/IKKε activation
4. IRF3 phosphorylation
5. NF-κB activation
6. Type I IFN and ISG expression

**Mitochondrial Dynamics:**
- MAVS requires intact mitochondria
- Mitochondrial fission/fusion regulates signaling
- Mitophagy downregulates response
- Links metabolism to antiviral immunity

## CLR Signaling

### Dectin-1 Pathway

**Ligand Recognition:**
- β-1,3-glucans
- Curdlan (synthetic ligand)
- Fungal cell wall component

**Signaling Cascade:**
1. Dectin-1 clustering
2. HemITAM phosphorylation
3. Syk kinase recruitment
4. CARD9-BCL10-MALT1 complex
5. NF-κB activation
6. NFAT activation (calcium-dependent)
7. Gene transcription

**Cellular Responses:**
- Phagocytosis
- ROS production
- Cytokine production (TNF-α, IL-6, IL-23)
- Th17 differentiation

### CARD9 Deficiency

**Clinical Features:**
- Susceptibility to fungal infections
- Chronic mucocutaneous candidiasis
- Invasive fungal infections
- Normal antibacterial/antiviral immunity

**Mechanism:**
- Required for Dectin-1, Dectin-2 signaling
- Impaired Th17 responses
- Defective antifungal immunity

## Cytosolic DNA Sensing

### cGAS-STING Pathway

**cGAS (cyclic GMP-AMP synthase):**
- Detects cytosolic dsDNA
- No sequence specificity
- Activated by DNA binding
- Synthesizes 2'3'-cGAMP

**2'3'-cGAMP:**
- Cyclic dinucleotide
- Second messenger
- Binds STING
- Unique 2'-5' and 3'-5' phosphodiester bonds

**STING (stimulator of interferon genes):**
- ER-resident protein
- Binds cGAMP
- Traffics to Golgi
- Recruits TBK1
- Phosphorylates IRF3
- Induces type I IFNs

**Sources of Cytosolic DNA:**
- Viral infection
- Bacterial infection
- Damaged mitochondria
- Genomic DNA leaks
- Reverse transcription

### Other DNA Sensors

**AIM2:**
- HIN domain binds DNA
- PYD domain forms inflammasome
- ASC recruitment
- Caspase-1 activation
- IL-1β processing

**IFI16:**
- Nuclear and cytosolic
- Binds viral DNA
- STING-dependent IFN induction
- ASC-dependent inflammasome

**DNA-PK:**
- DNA-dependent protein kinase
- DNA damage response
- IFN induction

## Clinical Applications

**Adjuvants:**
- MPL (TLR4 agonist): HPV vaccine
- CpG ODN (TLR9 agonist): Hepatitis B vaccine
- MF59: Emulsion enhancing responses
- Alum: NLRP3 activator

**Therapeutic Targeting:**
- TLR antagonists: Autoimmune diseases
- NLRP3 inhibitors: Inflammatory diseases
- STING agonists: Cancer immunotherapy
- cGAS inhibitors: Autoinflammatory diseases

**Diagnostic Biomarkers:**
- Type I IFN signature in SLE
- IL-1β in autoinflammatory diseases
- Inflammasome activation markers`,
      keyTerms: [
        { term: 'TRAF6', definition: 'TNF receptor-associated factor 6; E3 ubiquitin ligase in TLR signaling', pronunciation: 'traf-six' },
        { term: 'TAK1', definition: 'TGF-β-activated kinase 1; MAP3K in TLR and IL-1R signaling', pronunciation: 'tak-one' },
        { term: 'RIP2', definition: 'Receptor-interacting protein kinase 2; mediates NOD signaling', pronunciation: 'R-I-P-two' },
        { term: 'ASC', definition: 'Apoptosis-associated speck-like protein with CARD; inflammasome adaptor', pronunciation: 'ay-ess-see' },
        { term: 'gasdermin D', definition: 'Pore-forming protein executed by caspases in pyroptosis', pronunciation: 'GAS-der-min D' },
        { term: 'TBK1', definition: 'TANK-binding kinase 1; phosphorylates IRF3 in TLR and RLR signaling', pronunciation: 'T-B-K-one' },
        { term: 'hemITAM', definition: 'HemITAM; single YxxL motif signaling like ITAM', pronunciation: 'hem-eye-tam' },
        { term: 'cGAMP', definition: 'Cyclic GMP-AMP; second messenger produced by cGAS', pronunciation: 'see-gamp' },
        { term: 'STING', definition: 'Stimulator of interferon genes; ER protein sensing cGAMP', pronunciation: 'sting' },
      ],
      analogies: [
        'The MyD88 pathway is like a direct phone line - fast and reliable for immediate response.',
        'The TRIF pathway is like a conference call - it coordinates multiple responses including interferons.',
        'Inflammasome assembly is like building a scaffold - proteins come together to create a platform for caspase activation.',
        'cGAS is like a burglar alarm for DNA - it detects when DNA is somewhere it should not be (cytoplasm).',
      ],
      examples: [
        'Aicardi-Goutieres syndrome is caused by defects in nucleases (TREX1, RNase H2), leading to accumulation of self-nucleic acids and type I interferon production.',
        'NLRP3 mutations cause CAPS (cryopyrin-associated periodic syndromes) with cold-induced fever and rash.',
        'STING gain-of-function mutations cause STING-associated vasculopathy with onset in infancy (SAVI).',
        'DNase II deficiency causes lethal anemia due to failure to clear DNA from erythroid precursors, triggering interferon production.',
      ],
      clinicalNotes: 'The type I interferon signature is a hallmark of SLE and other autoimmune diseases. JAK inhibitors (tofacitinib, baricitinib) block interferon signaling and show promise in these conditions.',
    },
    4: {
      level: 4,
      summary: 'Pattern recognition receptor signaling involves complex molecular cascades with multiple adaptor proteins, ubiquitin-mediated regulation, and crosstalk between pathways. Understanding these mechanisms enables development of targeted therapeutics for infectious, autoimmune, and autoinflammatory diseases.',
      explanation: `## Advanced TLR Signaling

### Ubiquitin-Mediated Regulation

**Types of Ubiquitin Chains:**
- **K63-linked**: Signal transduction (TRAF6, NEMO)
- **K48-linked**: Proteasomal degradation
- **M1 (linear)**: NF-κB activation (LUBAC)
- **K11-linked**: Proteasomal degradation

**TRAF6 Function:**
- E3 ubiquitin ligase activity
- Forms K63-linked chains on itself
- Activates TAK1 and IKK
- Regulated by deubiquitinases (A20, CYLD)

**A20 (TNFAIP3):**
- Deubiquitinase activity
- Removes K63 chains
- Adds K48 chains (target for degradation)
- Negative regulator of NF-κB
- Mutations cause autoinflammatory disease

**LUBAC (Linear Ubiquitin Chain Assembly Complex):**
- HOIP, HOIL-1, SHARPIN
- M1 ubiquitin chains on NEMO
- Essential for NF-κB activation
- Mutations cause immunodeficiency

### Negative Regulation

**Soluble Decoy Receptors:**
- sTLR2: Binds ligands, prevents signaling
- sTLR4: Inhibits LPS responses
- sST2: IL-33 decoy

**Intracellular Inhibitors:**
- **IRAK-M**: Dominant-negative IRAK
- **SOCS1**: Inhibits TLR signaling
- **MyD88s**: Short form inhibits signaling
- **SIGIRR**: TIR domain without signaling

**MicroRNA Regulation:**
- miR-146a: Targets IRAK1, TRAF6
- miR-155: Promotes inflammation
- miR-21: Negative regulator
- Fine-tunes TLR responses

## Inflammasome Biology

### Alternative Inflammasomes

**Non-canonical Inflammasome:**
- Caspase-4/5 (human), caspase-11 (mouse)
- Direct LPS sensing in cytosol
- No ASC requirement for pyroptosis
- ASC required for IL-1β processing
- Gram-negative bacteria trigger

**Caspase-8 Inflammasome:**
- Activated by TLR signaling
- Processes IL-1β and IL-18
- Alternative to caspase-1
- Involved in antifungal immunity

**AIM2 Inflammasome:**
- HIN200 domain binds DNA
- No NACHT domain
- PYD-PYD with ASC
- Herpes simplex virus activation
- Francisella tularensis activation

### Inflammasome Regulation

**Priming Requirements:**
- Signal 1 induces NLRP3 transcription
- Also induces pro-IL-1β
- Required for full response
- Explains why some stimuli need priming

**Post-Translational Modifications:**
- **Phosphorylation**: NEK7 required for NLRP3 activation
- **Ubiquitination**: Prevents spontaneous activation
- **Deubiquitination**: Required for activation
- **Nitrosylation**: S-nitrosylation inhibits NLRP3

**Mitochondrial Regulation:**
- mtROS activates NLRP3
- Cardiolipin binds NLRP3
- Mitochondrial DNA release
- Mitophagy inhibits NLRP3

## DNA Sensing Networks

### cGAS Regulation

**Activation:**
- DNA length-dependent (>20 bp)
- No sequence specificity
- Zinc coordination
- Liquid-liquid phase separation

**Regulation:**
- **Phosphorylation**: Autoinhibition
- **Glutamylation**: Enhances activity
- **Acetylation**: Inhibits activity
- **Nucleosome binding**: Inhibits cGAS

**Compartmentalization:**
- Nuclear cGAS inhibited by chromatin
- Mitochondrial cGAS activated by mtDNA
- Cytoplasmic cGAS main sensor
- Lysosomal cGAS for phagocytosed DNA

### STING Trafficking

**Activation Cycle:**
1. ER-resident STING (inactive)
2. cGAMP binding
3. ER exit
4. Golgi trafficking
5. Palmitoylation (Golgi)
6. TBK1 recruitment
7. IRF3 phosphorylation
8. STING degradation

**Alternative STING Activation:**
- Direct binding of cyclic dinucleotides
- c-di-GMP (bacteria)
- c-di-AMP (bacteria)
- 3'3'-cGAMP (bacteria)
- 2'3'-cGAMP (mammalian)

**STING Variants:**
- STING R71H-G230A-R293Q (HAQ allele)
- STING R284S (common variant)
- Gain-of-function mutations cause SAVI
- Loss-of-function increases viral susceptibility

## Metabolic Regulation

### Immunometabolism

**Aerobic Glycolysis (Warburg Effect):**
- Activated macrophages switch to glycolysis
- Even with oxygen present
- Rapid ATP production
- Supports biosynthesis
- Regulated by HIF-1α

**TCA Cycle Breaks:**
- Succinate accumulation (inflammatory)
- Itaconate production (anti-inflammatory)
- Citrate export (lipid synthesis)
- Metabolites as signaling molecules

**mTOR Signaling:**
- mTORC1 promotes glycolysis
- Activated by TLR signaling
- Supports anabolic metabolism
- Required for trained immunity

### Metabolite Sensors

**SIRTUINS:**
- NAD+-dependent deacetylases
- SIRT1 inhibits NF-κB
- SIRT6 regulates glycolysis
- Links metabolism to inflammation

**AMPK:**
- Energy sensor
- Activated by low ATP
- Inhibits inflammatory responses
- Promotes OXPHOS

## Nucleic Acid Sensing in Disease

### Type I Interferonopathies

**Aicardi-Goutieres Syndrome:**
- TREX1 deficiency (DNA exonuclease)
- RNase H2 deficiency
- SAMHD1 deficiency
- ADAR1 deficiency
- Accumulation of self-nucleic acids
- IFN-α signature
- Severe neurological disease

**STING-Associated Vasculopathy:**
- STING gain-of-function
- Vascular inflammation
- Interstitial lung disease
- Skin lesions
- Treatment: JAK inhibitors

**SLE:**
- Defective clearance of apoptotic cells
- Immune complexes contain DNA/RNA
- TLR7/9 activation
- Plasmacytoid DC IFN-α production
- Type I IFN signature

### Therapeutic Strategies

**Targeting Nucleic Acid Sensing:**
- **Hydroxychloroquine**: Blocks TLR7/9, endosomal acidification
- **JAK inhibitors**: Block IFN signaling (tofacitinib, baricitinib)
- **Anti-IFNAR**: Anifrolumab (SLE)
- **cGAS inhibitors**: Preclinical development
- **STING inhibitors**: For autoinflammatory diseases

**Targeting Inflammasomes:**
- **Anakinra**: IL-1R antagonist
- **Canakinumab**: Anti-IL-1β
- **Rilonacept**: IL-1 trap
- **NLRP3 inhibitors**: MCC950 (clinical trials)
- **Colchicine**: Broad inflammasome inhibitor

## Systems-Level Integration

### Cross-talk Between Pathways

**TLR-RLR Cooperation:**
- TLR priming enhances RLR responses
- Shared signaling components (TRAF3, TBK1)
- Synergistic IFN production
- Important for antiviral defense

**NLR-TLR Integration:**
- NLR priming by TLR signals
- Coordinated cytokine production
- NLRP3 activation often requires TLR priming
- Spatial organization matters

**Metabolic-Immune Crosstalk:**
- Metabolites regulate PRR signaling
- PRRs induce metabolic changes
- Mitochondria as signaling hubs
- Nutrient availability affects responses

### Compartmentalization

**Endosomal TLRs:**
- Must traffic to endosomes for activation
- UNC93B1 chaperone required
- Proteolytic processing needed
- Prevents recognition of self-nucleic acids

**Cytosolic Sensors:**
- cGAS, RIG-I, NLRP3 in cytosol
- Compartmentalization prevents autoimmunity
- Nuclear envelope as barrier
- Mitochondrial outer membrane as platform

**Spatial Organization:**
- MAVS on mitochondria
- STING on ER
- ASC specks in cytosol
- Signalosomes form at specific locations

## Emerging Concepts

**Trained Immunity:**
- Innate immune memory
- Epigenetic reprogramming
- Metabolic changes
- β-glucan, BCG induce training
- Implications for vaccines

**Cell Death and PRRs:**
- Pyroptosis (inflammasome)
- Necroptosis (RIPK1/3, MLKL)
- Apoptosis (caspase-3/7)
- PANoptosis (combined death)
- DAMP release

**Non-immune Cell PRRs:****
- Epithelial cells express TLRs
- Fibroblasts express NLRs
- Neurons express PRRs
- Tissue-specific functions
- Barrier immunity`,
      keyTerms: [
        { term: 'LUBAC', definition: 'Linear ubiquitin chain assembly complex; M1 ubiquitin for NF-κB', pronunciation: 'LOO-bak' },
        { term: 'HOIP', definition: 'HOIL-1 interacting protein; catalytic subunit of LUBAC', pronunciation: 'hoip' },
        { term: 'NEMO', definition: 'NF-κB essential modulator; regulatory subunit of IKK complex', pronunciation: 'NEE-moh' },
        { term: 'TREX1', definition: 'Three prime repair exonuclease 1; degrades cytosolic DNA', pronunciation: 'TREX-one' },
        { term: 'SAVI', definition: 'STING-associated vasculopathy with onset in infancy', pronunciation: 'sav-ee' },
        { term: 'anifrolumab', definition: 'Anti-IFNAR antibody for SLE', pronunciation: 'an-ih-FROH-loo-mab' },
        { term: 'MCC950', definition: 'Small molecule NLRP3 inhibitor', pronunciation: 'M-C-C-nine-fifty' },
        { term: 'PANoptosis', definition: 'Programmed cell death involving pyroptosis, apoptosis, and necroptosis', pronunciation: 'pan-op-TOH-sis' },
      ],
      analogies: [
        'Ubiquitin chains are like different colored flags - K63 flags say "activate this," K48 flags say "destroy this."',
        'Priming is like loading a gun - you need to have the weapon ready before you can fire.',
        'Compartmentalization is like having security zones - you want sensors in the right places to avoid false alarms.',
        'Trained immunity is like muscle memory - your innate immune system remembers previous encounters.',
      ],
      examples: [
        'Haploinsufficiency of A20 (TNFAIP3) causes an early-onset autoinflammatory disease with Behçet-like features.',
        'HOIL-1 deficiency causes immunodeficiency with autoinflammation due to defective LUBAC activity.',
        'SAMHD1 deficiency causes Aicardi-Goutieres syndrome and also increases susceptibility to HIV due to dNTP regulation.',
        'ADAR1 deficiency causes severe interferonopathy due to accumulation of dsRNA from unedited endogenous transcripts.',
      ],
      clinicalNotes: 'Anifrolumab (anti-IFNAR) was approved for SLE in 2021 based on TULIP trials showing reduced disease activity and steroid sparing. It represents the first targeted biologic for type I interferon in SLE.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of pattern recognition reveals sophisticated regulatory networks integrating ubiquitin-mediated signaling, metabolic reprogramming, compartmentalization, and systems-level crosstalk. Translational applications target PRR pathways in infectious diseases, autoinflammatory conditions, autoimmune diseases, and cancer immunotherapy.',
      explanation: `## Structural Biology of PRR Signaling

### Cryo-EM Structures

**TLR4-MD-2 Complex:**
- Horseshoe-shaped TLR4 ectodomain
- MD-2 binds LPS lipid A
- Five acyl chains required for activation
- Receptor dimerization upon ligand binding
- Conformational change in TIR domains

**NLRP3 Inflammasome:**
- Inactive NLRP3 in auto-inhibited state
- LRR domain blocks NACHT
- NEK7 binds LRR for activation
- Oligomerization into disk-like structure
- PYD domains form filaments

**cGAS-DNA Complex:**
- cGAS dimer binds DNA
- Two active sites per dimer
- DNA length-dependent activation
- Phase separation into droplets
- Catalytic efficiency increases with DNA length

**STING-cGAMP Structure:**
- V-shaped dimer in ER
- cGAMP binds in groove
- Conformational change upon binding
- Exposes palmitoylation sites
- Enables TBK1 recruitment

### Phase Separation in PRR Signaling

**cGAS Condensates:**
- Liquid-liquid phase separation
- DNA-induced droplet formation
- Concentrates cGAS and DNA
- Enhances enzymatic activity
- Regulated by nucleosomes

**ASC Specks:**
- ASC forms large filamentous structures
- Prion-like polymerization
- Nucleates caspase-1 activation
- Released from dying cells
- Can propagate inflammation

**MAVS Aggregates:**
- Prion-like aggregation on mitochondria
- RIG-I/MDA5 nucleate MAVS filaments
- Signal amplification
- Platform for downstream signaling
- Regulated by mitochondrial dynamics

## Single-Cell Analysis

### PRR Expression Heterogeneity

**scRNA-seq Insights:**
- Cell-type specific PRR expression
- Activation states visible
- Co-expression patterns
- Response heterogeneity

**Macrophage Subsets:**
- Different TLR expression profiles
- Tissue-specific adaptations
- Disease-associated changes
- Metabolic-immune coupling

**DC Subsets:**
- cDC1 vs cDC2 TLR differences
- pDC unique TLR7/9 expression
- Maturation changes
- Functional specialization

### Spatial Transcriptomics

**Tissue Context:**
- PRR expression in tissue architecture
- Cell-cell interactions
- Microenvironment effects
- Disease localization

**Infection Models:**
- Local PRR activation
- Spread of inflammatory signals
- Tissue damage patterns
- Resolution mechanisms

## Precision Medicine

### Pharmacogenomics

**TLR Polymorphisms:**
- TLR4 D299G: Hyporesponsive to LPS
- TLR5 R392X: Deficient flagellin response
- TLR9 polymorphisms: Autoimmune associations
- Affect vaccine responses

**NLRP3 Mutations:**
- CAPS spectrum disorders
- Cold-induced activation
- IL-1β blockade effective
- Genotype-phenotype correlations

**STING Variants:**
- Gain-of-function: SAVI
- Loss-of-function: Viral susceptibility
- HAQ allele: Common variant
- Drug response differences

### Biomarker Development

**Type I IFN Signature:**
- ISG expression pattern
- Interferon score
- Predicts response to anti-IFN therapy
- SLE, Sjögren, myositis

**Inflammasome Activation:**
- IL-18 levels
- Caspase-1 activity
- ASC specks in serum
- Disease activity marker

**STING Pathway:**
- cGAMP levels
- STING phosphorylation
- TBK1 activation
- Pharmacodynamic marker

## Emerging Therapeutics

### TLR-Targeted Therapies

**Agonists:**
- **MPLA**: TLR4, approved adjuvant
- **SD-101**: TLR9, lymphoma trials
- **IMO-2055**: TLR9, solid tumors
- **GS-9620**: TLR7, HBV trials

**Antagonists:**
- **Eritoran**: TLR4, sepsis (failed)
- **TAK-242**: TLR4, stroke trials
- **IMO-8400**: TLR7/8/9, autoimmune

### Inflammasome Inhibitors

**NLRP3 Specific:**
- **MCC950**: Potent, selective
- **OLT1177**: Dapansutrile, clinical trials
- **Tranilast**: Approved drug, repurposed
- **Z-YVAD-FMK**: Caspase-1 inhibitor

**Broad Inflammasome:**
- **Colchicine**: Multiple indications
- **Anakinra**: IL-1R blockade
- **Canakinumab**: Anti-IL-1β

### cGAS-STING Modulators

**STING Agonists:**
- **ADU-S100**: Intratumoral, clinical trials
- **MK-1454**: Intratumoral
- **cGAMP analogs**: Systemic delivery
- **Combination**: Checkpoint inhibitors

**STING Antagonists:**
- **H-151**: Covalent inhibitor
- **SN-011**: Preclinical
- **For**: SAVI, autoinflammation

**cGAS Inhibitors:**
- **A-151**: Oligonucleotide inhibitor
- **G150**: Small molecule
- **Preclinical development**

### Metabolic Modulators

**Targeting Immunometabolism:**
- **2-DG**: Glycolysis inhibitor
- **Oxamate**: LDH inhibitor
- **Dimethyl fumarate**: Nrf2 activator
- **Metformin**: AMPK activator

## Future Directions

**Unanswered Questions:**
- How are PRRs organized spatially?
- What determines response magnitude?
- How is self vs non-self distinguished?
- Can we engineer PRRs?

**Technological Advances:**
- Cryo-ET of signaling complexes
- Super-resolution microscopy
- Single-molecule analysis
- AI/ML for drug discovery

**Therapeutic Opportunities:**
- Personalized PRR targeting
- Combination therapies
- Tissue-specific delivery
- Temporal control of inflammation

**Disease Applications:**
- Infectious diseases (adjuvants)
- Autoimmune diseases (antagonists)
- Cancer immunotherapy (agonists)
- Neurodegeneration (neuroinflammation)
- Cardiovascular disease (inflammation)`,
      keyTerms: [
        { term: 'phase separation', definition: 'Liquid-liquid demixing creating membraneless compartments', pronunciation: 'fayz sep-ah-RAY-shun' },
        { term: 'prion-like', definition: 'Self-templating protein aggregation', pronunciation: 'PREE-on-lyke' },
        { term: 'pharmacogenomics', definition: 'Study of genetic factors affecting drug response', pronunciation: 'far-mah-koh-jen-OH-miks' },
        { term: 'ISG', definition: 'Interferon-stimulated gene', pronunciation: 'I-S-G' },
        { term: 'dapansutrile', definition: 'OLT1177; NLRP3 inhibitor in clinical trials', pronunciation: 'dah-PAN-soo-tril' },
        { term: 'ADU-S100', definition: 'Cyclic dinucleotide STING agonist', pronunciation: 'A-D-U-S-one-hundred' },
        { term: 'cryo-ET', definition: 'Cryo-electron tomography', pronunciation: 'cry-oh-ee-tee' },
        { term: 'super-resolution', definition: 'Microscopy beyond diffraction limit', pronunciation: 'soo-per rez-oh-LOO-shun' },
      ],
      clinicalNotes: `Evidence-Based Practice:

1. **Anifrolumab**: Anti-IFNAR approved for SLE (2021). TULIP trials showed SRI-4 response in 48% vs 32% placebo. Monitor for herpes zoster.

2. **Canakinumab**: CANTOS trial showed 15% reduction in cardiovascular events independent of lipid lowering. IL-1β as cardiovascular target validated.

3. **STING agonists**: Early phase trials in combination with anti-PD-1 show responses in MSS colorectal cancer. Intratumoral injection required.

4. **JAK inhibitors**: Tofacitinib, baricitinib approved for RA. Emerging use in type I interferonopathies and SLE.

5. **NLRP3 inhibitors**: MCC950 highly effective in preclinical models. Clinical development ongoing for Muckle-Wells, cardiovascular disease.`,
      patientCounselingPoints: [
        'Your immune system uses pattern recognition to detect infections immediately.',
        'Inflammation is a normal response to infection or injury.',
        'Some autoimmune diseases involve overactive pattern recognition.',
        'New treatments target specific pattern recognition pathways.',
        'Vaccines work partly by training pattern recognition receptors.',
        'Report unusual infections or persistent inflammation to your doctor.',
      ],
    },
  },

  media: [
    {
      id: 'tlr-signaling',
      type: 'diagram',
      filename: 'tlr-signaling-pathways.svg',
      title: 'TLR Signaling Pathways',
      description: 'MyD88-dependent and TRIF-dependent pathways',
    },
    {
      id: 'inflammasome-assembly',
      type: 'animation',
      filename: 'nlrp3-inflammasome.mp4',
      title: 'NLRP3 Inflammasome Assembly',
      description: 'Stepwise assembly and caspase-1 activation',
    },
    {
      id: 'cgas-sting',
      type: 'diagram',
      filename: 'cgas-sting-pathway.svg',
      title: 'cGAS-STING Pathway',
      description: 'Cytosolic DNA sensing and type I interferon induction',
    },
    {
      id: 'prr-families',
      type: 'diagram',
      filename: 'pattern-recognition-receptor-families.svg',
      title: 'PRR Families',
      description: 'TLRs, NLRs, RLRs, and CLRs with ligands',
    },
  ],

  citations: [
    {
      id: 'janeway-immunobiology',
      type: 'textbook',
      title: 'Janeway Immunobiology',
      authors: ['Murphy K', 'Weaver C'],
      source: 'W.W. Norton & Company',
      chapter: '3',
    },
    {
      id: 'kawai-tlr',
      type: 'article',
      title: 'The Roles of TLRs, RLRs and NLRs in Pathogen Recognition',
      authors: ['Kawai T', 'Akira S'],
      source: 'International Immunology',
    },
    {
      id: 'schroder-inflammasome',
      type: 'article',
      title: 'The Inflammasomes',
      authors: ['Schroder K', 'Tschopp J'],
      source: 'Cell',
    },
    {
      id: 'chen-cgas',
      type: 'article',
      title: 'Cyclic GMP-AMP Synthase is a Cytosolic DNA Sensor',
      authors: ['Sun L', 'Wu J', 'Du F', 'Chen X', 'Chen ZJ'],
      source: 'Science',
    },
    {
      id: 'statpearls-inflammasome',
      type: 'website',
      title: 'Biochemistry, Inflammasome',
      authors: ['Man SM', 'Kanneganti TD'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459371/',
    },
  ],

  crossReferences: [
    { targetId: 'innate-immunity-barriers', targetType: 'concept', relationship: 'sibling', label: 'Physical and Chemical Barriers' },
    { targetId: 'innate-immunity-cells', targetType: 'concept', relationship: 'sibling', label: 'Innate Immune Cells' },
    { targetId: 'inflammation', targetType: 'process', relationship: 'related', label: 'Inflammation' },
    { targetId: 'cytokines', targetType: 'concept', relationship: 'related', label: 'Cytokines' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['immunology', 'innate immunity', 'inflammation', 'signal transduction'],
    keywords: ['TLR', 'NLR', 'inflammasome', 'RIG-I', 'cGAS', 'STING', 'PAMPs', 'DAMPs', 'NF-kB'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-31T00:00:00.000Z',
  updatedAt: '2026-01-31T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default patternRecognitionContent;
