import { EducationalContent } from '../types';

/**
 * Comprehensive Bacterial Infections Educational Content
 *
 * Covers common bacterial pathogens, antibiotic mechanisms, and clinical management
 * across all 5 complexity levels from basic understanding to expert-level knowledge.
 */
export const BACTERIAL_INFECTIONS: EducationalContent = {
  id: 'infectious-disease-bacterial-infections-comprehensive',
  type: 'topic',
  name: 'Bacterial Infections and Antibiotics',
  nameEs: 'Infecciones Bacterianas y Antibioticos',
  alternateNames: [
    'Bacterial Pathogens',
    'Antibiotic Therapy',
    'Bacteriology',
    'Antimicrobial Therapy',
  ],
  levels: {
    1: {
      level: 1,
      summary:
        'Bacteria are tiny living things that can sometimes make you sick, and antibiotics are special medicines that fight bacterial infections like targeted missiles.',
      explanation: `Bacteria are among the smallest living things on Earth. They are everywhere - in soil, water, and even inside your body. Most bacteria are harmless or even helpful. For example, bacteria in your gut help you digest food. But some bacteria can cause infections and make you sick.

**How Do Bacteria Make You Sick?**
Think of harmful bacteria like uninvited guests that break into your house. Once inside your body, they:
- Multiply very quickly (one bacterium can become millions in hours)
- Steal nutrients your body needs
- Release toxins (poisons) that damage your cells
- Trigger your immune system, causing inflammation (redness, swelling, fever)

**Common Bacterial Infections:**
- **Strep throat**: Caused by Streptococcus bacteria; makes your throat sore and red
- **Ear infections**: Often caused by bacteria getting trapped in the ear
- **Urinary tract infections (UTIs)**: Bacteria enter the urinary system
- **Skin infections**: Bacteria enter through cuts or scrapes
- **Pneumonia**: Bacteria infect the lungs, making it hard to breathe

**How Antibiotics Work - Targeted Missiles:**
Antibiotics are like targeted missiles that attack bacteria without hurting your own cells. Different antibiotics work in different ways:
- Some blow up the bacteria's protective wall (like breaking down a castle wall)
- Some stop bacteria from making the proteins they need to survive (like cutting off their food supply)
- Some prevent bacteria from copying their DNA, so they cannot multiply

**Important Rules About Antibiotics:**
- Always finish ALL your antibiotics, even if you feel better
- Never take someone else's antibiotics
- Antibiotics do NOT work against viruses (like colds or the flu)
- Using antibiotics when you do not need them can make them stop working

**When to See a Doctor:**
- Fever that does not go away
- Symptoms getting worse after a few days
- Red, swollen, warm areas on your skin
- Pain that is severe or spreading`,
      keyTerms: [
        {
          term: 'Bacteria',
          definition:
            'Tiny single-celled living things that can sometimes cause infections',
        },
        {
          term: 'Antibiotics',
          definition:
            'Medicines that kill bacteria or stop them from growing; they do not work against viruses',
        },
        {
          term: 'Infection',
          definition:
            'When harmful germs get into your body and start multiplying, making you sick',
        },
        {
          term: 'Toxin',
          definition: 'A poison made by bacteria that can damage your body',
        },
        {
          term: 'Immune system',
          definition:
            'Your body\'s defense system that fights off germs and infections',
        },
      ],
      analogies: [
        'Antibiotics are like targeted missiles that attack bacteria without hurting your own cells.',
        'Bacteria multiplying is like one rabbit becoming hundreds in a short time.',
        'Your immune system is like an army defending a castle, and antibiotics are reinforcements.',
      ],
      examples: [
        'Strep throat is caused by Streptococcus bacteria and is treated with penicillin.',
        'A cut that becomes red, swollen, and oozes pus may have a bacterial infection.',
        'Food poisoning from undercooked chicken can be caused by Salmonella bacteria.',
      ],
      patientCounselingPoints: [
        'Always take the full course of antibiotics even if you feel better.',
        'Antibiotics do not treat colds, flu, or other viral infections.',
        'Wash your hands frequently to prevent spreading or catching bacterial infections.',
        'Report any allergic reactions to antibiotics (rash, swelling, trouble breathing) immediately.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Bacteria are classified as gram-positive or gram-negative based on their cell wall structure, and different antibiotic classes target different bacterial components to treat infections caused by pathogens like Staphylococcus, Streptococcus, E. coli, and Mycobacterium tuberculosis.',
      explanation: `Bacteria are single-celled prokaryotic organisms that can cause a wide range of infections. Understanding how they are classified and how antibiotics work against them is essential for medical knowledge.

**Bacterial Classification:**

*By Gram Stain:*
The Gram stain is the most fundamental way to classify bacteria:
- **Gram-positive** (purple): Thick peptidoglycan cell wall. Examples: Staphylococcus, Streptococcus, Enterococcus
- **Gram-negative** (pink/red): Thin peptidoglycan + outer membrane with lipopolysaccharide (LPS). Examples: E. coli, Klebsiella, Pseudomonas

*By Shape:*
- **Cocci** (round): Staphylococcus (clusters), Streptococcus (chains)
- **Bacilli** (rod-shaped): E. coli, Bacillus, Clostridium
- **Spirochetes** (spiral): Treponema (syphilis), Borrelia (Lyme disease)

*By Oxygen Requirements:*
- **Aerobic**: Need oxygen (Mycobacterium tuberculosis)
- **Anaerobic**: Cannot tolerate oxygen (Clostridium, Bacteroides)
- **Facultative anaerobic**: Can grow with or without oxygen (E. coli, Staphylococcus)

**Common Bacterial Pathogens and Their Infections:**

| Pathogen | Common Infections |
|----------|------------------|
| Staphylococcus aureus | Skin infections, wound infections, pneumonia |
| Streptococcus pyogenes (Group A Strep) | Strep throat, cellulitis, necrotizing fasciitis |
| Streptococcus pneumoniae | Pneumonia, meningitis, otitis media |
| Escherichia coli | UTIs, diarrhea, sepsis |
| Mycobacterium tuberculosis | Tuberculosis (TB) |
| Neisseria meningitidis | Meningitis |
| Salmonella species | Food poisoning, typhoid fever |
| Helicobacter pylori | Stomach ulcers |

**Antibiotic Classes:**

| Class | How They Work | Examples |
|-------|--------------|---------|
| Penicillins | Break bacterial cell wall | Amoxicillin, ampicillin |
| Cephalosporins | Break bacterial cell wall | Cephalexin, ceftriaxone |
| Macrolides | Stop protein production | Azithromycin, erythromycin |
| Fluoroquinolones | Block DNA replication | Ciprofloxacin, levofloxacin |
| Tetracyclines | Stop protein production | Doxycycline, tetracycline |
| Sulfonamides | Block folate synthesis | Trimethoprim-sulfamethoxazole |

**Tuberculosis (TB):**
- Caused by Mycobacterium tuberculosis, a slow-growing acid-fast bacillus
- Spreads through airborne droplets
- Latent TB: Infected but not sick (positive PPD/IGRA, normal chest X-ray)
- Active TB: Cough, fever, weight loss, night sweats
- Treatment requires multiple drugs for 6-9 months (RIPE: rifampin, isoniazid, pyrazinamide, ethambutol)

**Antibiotic Resistance:**
- Some bacteria have developed resistance to antibiotics
- MRSA: Staphylococcus aureus resistant to methicillin and related antibiotics
- Resistance spreads through overuse and misuse of antibiotics
- "Superbugs" are bacteria resistant to multiple antibiotic classes`,
      keyTerms: [
        {
          term: 'Gram stain',
          definition:
            'A laboratory staining technique that divides bacteria into gram-positive (purple) and gram-negative (pink) based on cell wall structure',
        },
        {
          term: 'Peptidoglycan',
          definition:
            'A mesh-like polymer that forms the bacterial cell wall; thicker in gram-positive bacteria',
        },
        {
          term: 'MRSA',
          definition:
            'Methicillin-resistant Staphylococcus aureus - a type of staph bacteria resistant to many common antibiotics',
        },
        {
          term: 'Broad-spectrum antibiotic',
          definition:
            'An antibiotic effective against a wide range of bacteria, both gram-positive and gram-negative',
        },
        {
          term: 'Acid-fast bacillus',
          definition:
            'Bacteria with a waxy cell wall that resist decolorization by acid-alcohol; includes Mycobacterium tuberculosis',
        },
        {
          term: 'Latent TB',
          definition:
            'A state where a person is infected with TB bacteria but is not sick and cannot spread it to others',
        },
      ],
      examples: [
        'A patient with a sore throat and fever tests positive for Group A Strep and is prescribed amoxicillin.',
        'An elderly patient with a UTI caused by E. coli is treated with trimethoprim-sulfamethoxazole.',
        'A wound culture growing MRSA requires vancomycin instead of standard antibiotics.',
      ],
      patientCounselingPoints: [
        'Take antibiotics exactly as prescribed - same time each day, with or without food as directed.',
        'Report any side effects such as diarrhea, rash, or stomach upset to your provider.',
        'If you have been diagnosed with latent TB, completing treatment prevents active disease.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Bacterial pathogenesis involves specific virulence factors including adhesins, toxins, and immune evasion mechanisms, while antibiotics target essential bacterial processes such as cell wall synthesis, protein synthesis, DNA replication, and metabolic pathways with defined spectra of activity.',
      explanation: `A thorough understanding of bacterial pathogenesis and antibiotic pharmacology is essential for rational antimicrobial therapy.

**Bacterial Virulence Factors:**

*Adhesion and Colonization:*
- **Pili/fimbriae**: Hair-like structures for attachment (E. coli P-pili for urinary tract epithelium)
- **Adhesins**: Surface proteins that bind host cell receptors
- **Biofilm formation**: Structured communities encased in extracellular matrix (Pseudomonas in CF lungs, Staphylococcus on implants)

*Toxins:*
- **Exotoxins**: Secreted proteins with specific targets
  - A-B toxins: Binding (B) and active (A) subunits (diphtheria toxin, cholera toxin)
  - Membrane-disrupting: Alpha-hemolysin (S. aureus), streptolysin O (S. pyogenes)
  - Superantigens: Nonspecific T-cell activation causing cytokine storm (TSST-1, streptococcal pyrogenic exotoxins)
- **Endotoxin (LPS)**: Gram-negative outer membrane component; triggers TLR4-mediated inflammatory cascade; responsible for septic shock

*Immune Evasion:*
- **Capsule**: Polysaccharide coating resists phagocytosis (S. pneumoniae, N. meningitidis, K. pneumoniae)
- **Protein A**: Binds IgG Fc region, preventing opsonization (S. aureus)
- **IgA protease**: Cleaves mucosal antibodies (N. meningitidis, H. influenzae)
- **Intracellular survival**: Escaping phagosome (Listeria), preventing phagolysosome fusion (Mycobacterium)
- **Antigenic variation**: Changing surface proteins (N. gonorrhoeae pili)

**Pathogenesis Mechanisms by Organism:**

*Staphylococcus aureus:*
- Coagulase production: Clots plasma, creating protective fibrin barrier
- Protein A: Binds IgG Fc, prevents opsonization
- PVL (Panton-Valentine leukocidin): Pore-forming toxin in CA-MRSA causing necrotizing pneumonia/skin infections
- TSST-1: Superantigen causing toxic shock syndrome

*Streptococcus pyogenes (Group A Strep):*
- M protein: Antiphagocytic; molecular mimicry causes rheumatic fever
- Streptolysin O/S: Hemolysins; ASO titer used diagnostically
- Hyaluronidase, streptokinase: Tissue spreading factors
- Post-infectious sequelae: Rheumatic fever (molecular mimicry), glomerulonephritis (immune complex deposition)

*Escherichia coli pathotypes:*
- **ETEC**: Heat-labile (LT) and heat-stable (ST) enterotoxins; traveler's diarrhea
- **EHEC (O157:H7)**: Shiga-like toxin; hemolytic uremic syndrome (HUS)
- **UPEC**: Type 1 fimbriae for bladder epithelium adhesion; most common cause of UTI
- **EPEC**: Attaching and effacing lesion; pediatric diarrhea
- **EIEC**: Invasion of colonic epithelium; dysentery

**Antibiotic Mechanisms of Action:**

*Cell Wall Synthesis Inhibitors:*
- **Beta-lactams** (penicillins, cephalosporins, carbapenems, monobactams):
  - Bind penicillin-binding proteins (PBPs)
  - Inhibit transpeptidation (cross-linking of peptidoglycan)
  - Bactericidal; time-dependent killing
- **Glycopeptides** (vancomycin, teicoplanin):
  - Bind D-Ala-D-Ala terminus of peptidoglycan precursors
  - Prevent transglycosylation and transpeptidation
  - Bactericidal; active only against gram-positives (too large to cross gram-negative outer membrane)

*Protein Synthesis Inhibitors:*
- **30S ribosomal subunit targets:**
  - Aminoglycosides (gentamicin, tobramycin): Irreversible binding; bactericidal; concentration-dependent
  - Tetracyclines (doxycycline, minocycline): Block tRNA binding to A-site; bacteriostatic
- **50S ribosomal subunit targets:**
  - Macrolides (azithromycin, clarithromycin): Block translocation; bacteriostatic
  - Lincosamides (clindamycin): Block peptide bond formation; bacteriostatic
  - Chloramphenicol: Blocks peptidyl transferase; bacteriostatic
  - Oxazolidinones (linezolid): Prevent 70S initiation complex formation; bacteriostatic

*DNA Synthesis Inhibitors:*
- **Fluoroquinolones** (ciprofloxacin, levofloxacin, moxifloxacin):
  - Inhibit DNA gyrase (topoisomerase II) and topoisomerase IV
  - Bactericidal; concentration-dependent
  - Respiratory quinolones (levofloxacin, moxifloxacin) have enhanced gram-positive coverage

*Folate Synthesis Inhibitors:*
- **Sulfonamides**: Competitive inhibitor of dihydropteroate synthase (DHPS)
- **Trimethoprim**: Inhibits dihydrofolate reductase (DHFR)
- **TMP-SMX**: Synergistic combination blocking two steps in folate pathway; bactericidal

*RNA Synthesis Inhibitor:*
- **Rifampin**: Binds DNA-dependent RNA polymerase; bactericidal; excellent intracellular penetration
- Used for TB, prosthetic joint infections, and as adjunct for S. aureus infections
- Rapid resistance if used as monotherapy

**Spectrum of Activity:**

| Drug | Gram-positive | Gram-negative | Anaerobes | Atypical |
|------|---------------|---------------|-----------|----------|
| Penicillin G | +++ | + | ++ | - |
| Ampicillin | +++ | ++ | ++ | - |
| Piperacillin-tazobactam | +++ | +++ | +++ | - |
| Ceftriaxone | +++ | +++ | + | - |
| Meropenem | +++ | +++ | +++ | - |
| Vancomycin | +++ | - | + | - |
| Azithromycin | ++ | + | - | +++ |
| Doxycycline | ++ | + | - | +++ |
| Ciprofloxacin | + | +++ | - | ++ |
| Levofloxacin | +++ | +++ | - | +++ |
| Metronidazole | - | - | +++ | - |
| TMP-SMX | ++ | ++ | - | - |`,
      keyTerms: [
        {
          term: 'Virulence factor',
          definition:
            'A molecule produced by a pathogen that contributes to its ability to cause disease by damaging host tissue or evading immune defenses',
        },
        {
          term: 'Penicillin-binding protein (PBP)',
          definition:
            'Bacterial enzymes involved in cell wall synthesis that are the target of beta-lactam antibiotics',
        },
        {
          term: 'Superantigen',
          definition:
            'A toxin that nonspecifically activates large numbers of T cells, causing massive cytokine release',
        },
        {
          term: 'Time-dependent killing',
          definition:
            'Antibiotic efficacy depends on duration of time the drug concentration exceeds the MIC (e.g., beta-lactams)',
        },
        {
          term: 'Concentration-dependent killing',
          definition:
            'Antibiotic efficacy depends on the peak concentration relative to MIC (e.g., aminoglycosides, fluoroquinolones)',
        },
        {
          term: 'Bactericidal vs bacteriostatic',
          definition:
            'Bactericidal antibiotics kill bacteria directly; bacteriostatic antibiotics inhibit growth, relying on the immune system to clear infection',
        },
        {
          term: 'Endotoxin (LPS)',
          definition:
            'Lipopolysaccharide component of gram-negative outer membrane that triggers the innate immune response via TLR4',
        },
      ],
      clinicalNotes:
        'Empiric antibiotic selection should consider the most likely pathogen, local resistance patterns (antibiogram), site of infection, and patient factors (allergies, renal/hepatic function). Cultures should be obtained before starting antibiotics whenever possible. Narrow-spectrum agents are preferred when the pathogen is identified to minimize collateral damage to normal flora and reduce resistance selection pressure.',
    },
    4: {
      level: 4,
      summary:
        'Advanced bacteriology encompasses biofilm biology, quorum sensing regulation, PK/PD-optimized antibiotic dosing, the Ambler classification of beta-lactamases, and molecular mechanisms of resistance in clinically significant MDROs including MRSA, VRE, and ESBL producers.',
      explanation: `Graduate-level understanding of bacterial infections integrates microbial physiology, molecular resistance mechanisms, and pharmacokinetic/pharmacodynamic optimization.

**Biofilm Formation and Clinical Significance:**

*Biofilm Development Stages:*
1. **Attachment**: Reversible adhesion via van der Waals forces, then irreversible via adhesins (e.g., fibronectin-binding proteins in S. aureus)
2. **Microcolony formation**: Cell-to-cell aggregation; production of extracellular polymeric substances (EPS)
3. **Maturation**: Three-dimensional architecture with water channels; metabolic heterogeneity; persister cells
4. **Dispersal**: Release of planktonic cells for new colonization

*Clinical Impact:*
- 65-80% of human infections involve biofilms (NIH estimate)
- Biofilm bacteria are 100-1000x more resistant to antibiotics than planktonic counterparts
- Mechanisms of biofilm tolerance:
  - Poor antibiotic penetration through EPS matrix
  - Metabolically dormant persister cells unaffected by most antibiotics
  - Horizontal gene transfer facilitated within biofilm
  - Efflux pump upregulation
- Common biofilm infections: prosthetic joint infections, catheter-related bloodstream infections, endocarditis vegetations, chronic wound infections, ventilator-associated pneumonia

**Quorum Sensing:**

*Mechanism:*
- Cell-to-cell communication via secreted signaling molecules (autoinducers)
- Gram-negative: N-acyl homoserine lactones (AHLs) via LuxI/LuxR system
- Gram-positive: Autoinducing peptides (AIPs) via two-component signal transduction
- AI-2 (autoinducer-2): Interspecies communication via LuxS system

*Regulated Functions:*
- Biofilm formation and dispersal
- Virulence factor expression
- Antibiotic resistance gene expression
- Bioluminescence, motility, sporulation

*Therapeutic Implications:*
- Quorum sensing inhibitors (QSIs) as potential anti-virulence therapy
- Quorum quenching enzymes (AHL-lactonases)
- Furanone compounds (inhibit AHL signaling)

**PK/PD Optimization of Antibiotics:**

*Key PK/PD Parameters:*
- **Time above MIC (fT>MIC)**: Beta-lactams, carbapenems
  - Target: >40-70% of dosing interval (varies by drug)
  - Extended/continuous infusions maximize this parameter
- **Peak/MIC ratio (Cmax/MIC)**: Aminoglycosides
  - Target: Cmax/MIC >8-10
  - Once-daily dosing (extended-interval) optimizes this
- **AUC/MIC ratio**: Fluoroquinolones, vancomycin, daptomycin
  - Fluoroquinolones: AUC/MIC >125 for gram-negatives
  - Vancomycin: AUC/MIC 400-600 (revised 2020 guidelines)

*Clinical Application:*
- Extended-infusion piperacillin-tazobactam (4 hours) improves outcomes in critically ill patients
- Continuous infusion meropenem for carbapenem-resistant organisms (maximizes fT>MIC)
- Vancomycin AUC-guided dosing preferred over trough-based dosing
- Aminoglycoside extended-interval dosing: Higher peak, prolonged post-antibiotic effect, reduced nephrotoxicity
- Therapeutic drug monitoring (TDM) essential for aminoglycosides, vancomycin, voriconazole

**Beta-Lactamase Classification (Ambler Molecular Classification):**

| Class | Active Site | Key Enzymes | Substrates | Inhibitors |
|-------|-------------|-------------|------------|------------|
| A | Serine | TEM, SHV, CTX-M (ESBLs), KPC | Penicillins, cephalosporins, carbapenems (KPC) | Clavulanate, tazobactam, avibactam |
| B | Metallo (Zn) | NDM, VIM, IMP | All beta-lactams EXCEPT aztreonam | NOT inhibited by serine-based inhibitors; EDTA chelation |
| C | Serine | AmpC (chromosomal) | Penicillins, cephalosporins (including 3rd gen) | Avibactam; NOT clavulanate or tazobactam |
| D | Serine | OXA (including OXA-48) | Variable; some hydrolyze carbapenems | Avibactam (for OXA-48) |

*ESBL (Extended-Spectrum Beta-Lactamase):*
- Primarily Class A: CTX-M (most common globally), TEM, SHV variants
- Hydrolyze penicillins, 1st-3rd generation cephalosporins, aztreonam
- Inhibited by clavulanate (phenotypic test basis)
- Treatment: Carbapenems (gold standard), piperacillin-tazobactam (controversial for serious infections)
- Risk factors: Prior antibiotic use, healthcare exposure, travel to endemic areas

**Molecular Mechanisms of Resistance in MDROs:**

*MRSA (Methicillin-Resistant Staphylococcus aureus):*
- **mecA gene** on SCCmec (staphylococcal cassette chromosome mec)
- Encodes PBP2a (altered penicillin-binding protein) with low affinity for beta-lactams
- SCCmec types: I-V (HA-MRSA typically types I-III; CA-MRSA typically type IV-V)
- **CA-MRSA** (e.g., USA300): PVL-positive, SCCmec type IV, often susceptible to TMP-SMX, doxycycline, clindamycin
- **HA-MRSA** (e.g., USA100): Multidrug-resistant, SCCmec types I-III
- Treatment options: Vancomycin, daptomycin, linezolid, ceftaroline, TMP-SMX, doxycycline

*VRE (Vancomycin-Resistant Enterococcus):*
- **vanA operon**: High-level resistance (MIC >64 mcg/mL); modifies D-Ala-D-Ala to D-Ala-D-Lac; inducible; found on transposon Tn1546
- **vanB operon**: Variable resistance (MIC 4-1000 mcg/mL); D-Ala-D-Lac; induced by vancomycin but NOT teicoplanin
- **vanC**: Intrinsic in E. gallinarum/casseliflavus; D-Ala-D-Ser; low-level resistance
- Treatment: Linezolid, daptomycin (not FDA-approved for VRE but widely used), quinupristin-dalfopristin (E. faecium only)

*ESBL-Producing Enterobacterales:*
- Plasmid-mediated horizontal transfer; often co-carry aminoglycoside and fluoroquinolone resistance genes
- CTX-M-15: Most prevalent ESBL globally
- Community-onset ESBL-E. coli increasing, associated with international travel
- Carbapenem-sparing strategies under investigation (MERINO trial: pip-tazo inferior to meropenem for ESBL BSI)

*AmpC-Producing Organisms (SPICE/SPACE organisms):*
- Serratia, Providencia, Indole-positive Proteus, Citrobacter freundii, Enterobacter
- Chromosomal AmpC: Inducible by cephalosporins (especially ceftriaxone)
- Stable derepression during therapy leads to clinical failure
- Treatment: Carbapenems, cefepime (stable to AmpC), fluoroquinolones (if susceptible)`,
      keyTerms: [
        {
          term: 'Biofilm',
          definition:
            'A structured community of bacteria encased in a self-produced extracellular polymeric matrix that confers greatly increased antibiotic tolerance',
        },
        {
          term: 'Quorum sensing',
          definition:
            'A system of bacterial cell-to-cell communication using secreted autoinducer molecules that coordinates group behavior based on population density',
        },
        {
          term: 'fT>MIC',
          definition:
            'The fraction of the dosing interval during which the free drug concentration exceeds the minimum inhibitory concentration; key PK/PD parameter for beta-lactams',
        },
        {
          term: 'AUC/MIC',
          definition:
            'The ratio of the 24-hour area under the concentration-time curve to the minimum inhibitory concentration; key PK/PD parameter for vancomycin and fluoroquinolones',
        },
        {
          term: 'mecA',
          definition:
            'Gene encoding PBP2a, an altered penicillin-binding protein conferring methicillin resistance in MRSA; carried on SCCmec',
        },
        {
          term: 'vanA',
          definition:
            'Gene operon conferring high-level vancomycin resistance in enterococci by modifying the D-Ala-D-Ala target to D-Ala-D-Lac',
        },
        {
          term: 'Ambler classification',
          definition:
            'Molecular classification of beta-lactamases into classes A, B, C, and D based on amino acid sequence and active site (serine vs metallo)',
        },
        {
          term: 'Persister cell',
          definition:
            'A phenotypic variant in a bacterial population that is metabolically dormant and tolerant to antibiotics without genetic resistance',
        },
      ],
      clinicalNotes:
        'PK/PD-optimized dosing strategies (extended/continuous beta-lactam infusions, AUC-guided vancomycin dosing, extended-interval aminoglycosides) improve clinical outcomes, especially in critically ill patients and those with resistant organisms. The choice between carbapenem and non-carbapenem alternatives for ESBL infections remains an active area of clinical research. AmpC-producing organisms require awareness of inducible resistance; avoid ceftriaxone for serious Enterobacter/Citrobacter infections even if initial susceptibility testing shows sensitivity.',
    },
    5: {
      level: 5,
      summary:
        'Cutting-edge bacteriology encompasses novel antibiotic development (siderophore cephalosporins, anti-virulence agents), phage therapy, microbiome-based therapeutics, rapid molecular diagnostics (MALDI-TOF, mNGS), and emerging strategies to combat the global AMR crisis.',
      explanation: `Expert-level understanding integrates the latest advances in antimicrobial development, alternative therapeutic strategies, and diagnostic technologies reshaping infectious disease practice.

**Novel Antibiotics and the Pipeline:**

*Recently Approved Agents:*
- **Ceftolozane-tazobactam**: Enhanced antipseudomonal cephalosporin + beta-lactamase inhibitor; stable to AmpC and many ESBLs; key for MDR Pseudomonas
- **Ceftazidime-avibactam**: Cephalosporin + novel diazabicyclooctane (DBO) inhibitor; covers KPC, OXA-48, AmpC, ESBLs; NOT metallo-beta-lactamases
- **Meropenem-vaborbactam**: Carbapenem + boronic acid BLI; specifically targets KPC-producing organisms
- **Imipenem-cilastatin-relebactam**: Carbapenem + DBO inhibitor; covers KPC, AmpC; enhanced Pseudomonas activity
- **Cefiderocol**: Siderophore cephalosporin - exploits bacterial iron transport to deliver antibiotic across outer membrane; active against metallo-beta-lactamases (NDM, VIM, IMP), KPC, OXA; broadest gram-negative coverage of any single beta-lactam
- **Aztreonam-avibactam** (in development/approved): Combines metallo-BL stability of aztreonam with avibactam inhibition of serine BLs; covers virtually all beta-lactamase classes simultaneously
- **Plazomicin**: Next-generation aminoglycoside resistant to most aminoglycoside-modifying enzymes
- **Eravacycline**: Fluorocycline active against many tetracycline-resistant organisms
- **Omadacycline**: Aminomethylcycline with oral and IV formulations; community-acquired pneumonia and skin infections
- **Ceftaroline**: Anti-MRSA cephalosporin (binds PBP2a); also covers standard gram-negatives

*Pipeline and Emerging Approaches:*
- **Zoliflodacin**: Novel spiropyrimidinetrione targeting DNA gyrase; for gonorrhea (including fluoroquinolone-resistant)
- **Gepotidacin**: Triazaacenaphthylene targeting DNA gyrase; UTIs
- **Murepavidin**: Outer membrane protein inhibitor targeting LptD; Pseudomonas
- **Anti-virulence strategies**: Targeting toxin production, quorum sensing, type III secretion systems rather than bacterial viability; theoretically lower resistance selection pressure

**Bacteriophage Therapy:**

*Principles:*
- Bacteriophages are viruses that specifically infect and lyse bacteria
- Narrow host range (species or strain-specific); requires phage susceptibility testing
- Self-amplifying at the site of infection
- Can penetrate and disrupt biofilms
- Phage-antibiotic synergy (PAS): Subinhibitory antibiotics can increase phage production

*Clinical Application:*
- Compassionate use for multidrug-resistant infections (MDR Pseudomonas, Acinetobacter, Mycobacterium)
- Phage cocktails to broaden coverage and reduce resistance emergence
- Engineered phages expressing biofilm-degrading enzymes (dispersin B, depolymerases)
- Phage lysins (endolysins): Purified enzymes from phages that degrade peptidoglycan; active against gram-positives (e.g., CF-301/exebacase for S. aureus bacteremia)
- FDA has provided regulatory pathways for phage therapy under expanded access/IND

*Challenges:*
- Phage resistance (receptor mutations, CRISPR-Cas systems, restriction-modification)
- Manufacturing standardization and GMP compliance
- Immunogenicity and pharmacokinetics
- Regulatory frameworks still evolving
- Need for rapid phage matching platforms

**Microbiome-Based Therapeutics:**

*Fecal Microbiota Transplantation (FMT):*
- Established for recurrent Clostridioides difficile infection
- SER-109 (Vowst): FDA-approved defined microbial consortium for C. difficile
- RBX2660 (Rebyota): FDA-approved fecal microbiota product
- Mechanism: Restoration of colonization resistance; bile acid metabolism; competitive exclusion

*Next-Generation Approaches:*
- Live biotherapeutic products (LBPs): Defined bacterial consortia
- Engineered probiotics expressing antimicrobial peptides or enzymes
- Postbiotics: Metabolites, short-chain fatty acids
- Microbiome modulation to prevent MDRO colonization and subsequent infection
- Selective digestive decontamination (SDD): Controversial; non-absorbable antibiotics to prevent ICU infections

**Rapid Diagnostic Technologies:**

*MALDI-TOF Mass Spectrometry:*
- Matrix-assisted laser desorption/ionization time-of-flight
- Identifies organisms from colonies in minutes (vs 24-48 hours for biochemical methods)
- Generates protein mass spectral fingerprint matched against reference database
- Direct-from-positive-blood-culture identification
- Emerging applications: Resistance prediction from spectra, typing for outbreak investigation

*Molecular Rapid Diagnostics:*
- **Multiplex PCR panels** (BioFire FilmArray, GenMark ePlex):
  - Blood culture identification panel: 24+ targets in ~1 hour
  - Pneumonia panel (lower respiratory)
  - GI panel, meningitis/encephalitis panel
  - Some detect resistance genes (mecA, vanA/B, KPC, NDM)
- **Accelerate Pheno**: Combined FISH identification + phenotypic AST in ~7 hours from positive blood culture
- **Rapid phenotypic AST**: Accelerated MIC determination using microfluidics, microscopy, or automated imaging

*Metagenomic Next-Generation Sequencing (mNGS):*
- Unbiased sequencing of all nucleic acids in clinical specimen
- Culture-independent pathogen identification
- Can detect bacteria, viruses, fungi, parasites simultaneously
- Karius plasma mNGS (cell-free DNA): Detects pathogen cfDNA in bloodstream
- Clinical utility: Diagnostically challenging cases, immunocompromised patients, culture-negative infections
- Limitations: Distinguishing colonization/contamination from infection; cost; turnaround time; bioinformatic expertise required

*Point-of-Care Testing:*
- Rapid antigen tests (GAS, RSV, influenza)
- CRP/procalcitonin for antibiotic decision-making
- Emerging: Nanopore sequencing at bedside

**Antimicrobial Resistance: Global Perspective and Strategies:**

*The AMR Crisis:*
- Estimated 4.95 million deaths associated with AMR in 2019 (Lancet 2022)
- Projected 10 million annual deaths by 2050 without intervention
- Economic impact: $100 trillion cumulative loss by 2050
- Declining antibiotic pipeline: Market failure due to low return on investment

*Innovation Incentives:*
- GAIN Act, LPAD pathway (limited population antibacterial drugs)
- PASTEUR Act (subscription-based payment model)
- CARB-X, GARDP, BARDA funding for early-stage development
- Pull incentives: Transferable exclusivity vouchers, guaranteed revenue models

*Novel Strategies Under Investigation:*
- Antibiotic adjuvants: Compounds that restore antibiotic activity (e.g., beta-lactamase inhibitor combinations, efflux pump inhibitors)
- Antimicrobial peptides: Innate defense molecules with broad activity
- CRISPR-based antimicrobials: Programmable targeting of resistance genes
- Antibody-antibiotic conjugates: Targeted delivery to intracellular pathogens
- Immunotherapy: Anti-toxin antibodies (bezlotoxumab for C. difficile toxin B)`,
      keyTerms: [
        {
          term: 'Cefiderocol',
          definition:
            'A siderophore cephalosporin that exploits bacterial iron uptake systems to penetrate the outer membrane, active against metallo-beta-lactamases and virtually all gram-negative resistance mechanisms',
        },
        {
          term: 'MALDI-TOF',
          definition:
            'Matrix-assisted laser desorption/ionization time-of-flight mass spectrometry; enables rapid bacterial identification from colonies in minutes by matching protein mass spectra to reference databases',
        },
        {
          term: 'Metagenomic next-generation sequencing (mNGS)',
          definition:
            'Unbiased sequencing of all nucleic acids in a clinical specimen enabling culture-independent identification of bacteria, viruses, fungi, and parasites simultaneously',
        },
        {
          term: 'Bacteriophage therapy',
          definition:
            'The use of bacteriophages (viruses that infect bacteria) to treat bacterial infections, particularly those caused by multidrug-resistant organisms or associated with biofilms',
        },
        {
          term: 'Phage-antibiotic synergy (PAS)',
          definition:
            'The phenomenon where subinhibitory antibiotic concentrations enhance phage replication and bacterial killing',
        },
        {
          term: 'Live biotherapeutic product',
          definition:
            'A defined microbial consortium designed to restore a healthy microbiome, such as FDA-approved products for recurrent C. difficile infection',
        },
        {
          term: 'PASTEUR Act',
          definition:
            'Proposed subscription-based payment model for novel antibiotics, decoupling revenue from sales volume to incentivize development',
        },
        {
          term: 'Endolysin',
          definition:
            'A phage-derived enzyme that degrades bacterial peptidoglycan from outside the cell; being developed as a therapeutic agent, especially against gram-positive pathogens',
        },
      ],
      clinicalNotes:
        'The practicing infectious disease specialist must integrate novel diagnostics (MALDI-TOF, rapid multiplex PCR panels, mNGS) into clinical workflows for earlier pathogen identification and targeted therapy. New beta-lactam/beta-lactamase inhibitor combinations (ceftazidime-avibactam, meropenem-vaborbactam, cefiderocol) have transformed management of carbapenem-resistant organisms but require understanding of their specific spectra. Phage therapy is transitioning from compassionate use to clinical trials, particularly for prosthetic device infections and MDR gram-negatives. Microbiome therapeutics are FDA-approved for C. difficile and expanding to MDRO decolonization. Advocacy for antimicrobial pipeline innovation through novel economic incentive models is a professional responsibility.',
    },
  },
  media: [],
  citations: [
    {
      id: 'murray-medical-microbiology-9e',
      type: 'textbook',
      title: 'Medical Microbiology',
      authors: ['Murray PR', 'Rosenthal KS', 'Pfaller MA'],
      source: 'Elsevier',
      chapter: 'Chapters 14-32',
      license: 'Copyrighted',
    },
    {
      id: 'mandell-principles-practice-id-9e',
      type: 'textbook',
      title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases',
      authors: ['Bennett JE', 'Dolin R', 'Blaser MJ'],
      source: 'Elsevier',
      license: 'Copyrighted',
    },
    {
      id: 'sanford-guide-2024',
      type: 'textbook',
      title: 'The Sanford Guide to Antimicrobial Therapy 2024',
      source: 'Antimicrobial Therapy Inc',
      license: 'Copyrighted',
    },
    {
      id: 'lancet-amr-2022',
      type: 'article',
      title:
        'Global burden of bacterial antimicrobial resistance in 2019: a systematic analysis',
      authors: ['Antimicrobial Resistance Collaborators'],
      source: 'The Lancet',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    {
      targetId: 'infectious-disease-antimicrobial-resistance-comprehensive',
      targetType: 'topic',
      relationship: 'related',
      label: 'Antimicrobial Resistance and Stewardship',
    },
    {
      targetId: 'infectious-disease-viral-infections-comprehensive',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Viral Infections and Antivirals',
    },
    {
      targetId: 'infectious-disease-sepsis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Sepsis',
    },
    {
      targetId: 'infectious-disease-meningitis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Meningitis',
    },
  ],
  tags: {
    systems: ['infectious-disease', 'microbiology', 'pharmacology'],
    topics: [
      'bacterial-infections',
      'antibiotics',
      'resistance',
      'biofilms',
      'diagnostics',
    ],
    keywords: [
      'bacteria',
      'antibiotics',
      'gram-positive',
      'gram-negative',
      'MRSA',
      'VRE',
      'ESBL',
      'beta-lactamase',
      'biofilm',
      'quorum sensing',
      'PK/PD',
      'phage therapy',
      'MALDI-TOF',
      'mNGS',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
