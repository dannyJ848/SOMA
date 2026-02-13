import { EducationalContent } from '../../types';

export const resistanceMechanisms: EducationalContent = {
  id: 'infectious-disease-resistance-mechanisms',
  type: 'concept',
  name: 'Antibiotic Resistance Mechanisms',
  alternateNames: ['Antimicrobial Resistance', 'Bacterial Resistance', 'Drug Resistance'],

  levels: {
    1: {
      level: 1,
      summary: 'Antibiotic resistance happens when bacteria change to survive antibiotics, making infections harder to treat and requiring stronger medicines.',
      explanation: `Antibiotic resistance is one of the biggest health problems in the world. It happens when bacteria figure out how to survive antibiotics that used to kill them.

**Why Resistance Happens:**

1. **Overuse of Antibiotics**
   - Taking antibiotics when not needed (like for colds)
   - Not finishing the full course of antibiotics
   - Using antibiotics in farm animals

2. **Bacteria Are Smart**
   - They can change their DNA to survive
   - They can share resistance with other bacteria
   - They multiply quickly, making more resistant bacteria

**What Resistance Looks Like:**

- **MRSA** (MERSA): Staph bacteria resistant to common antibiotics
  - Used to be only in hospitals, now in communities too
  - Can cause serious skin infections

- **Superbugs**: Bacteria resistant to many different antibiotics
  - Very hard to treat
  - May require IV antibiotics
  - Some have no good treatment options

**Why It Matters:**
- Simple infections become life-threatening
- More expensive treatments needed
- Longer hospital stays
- More side effects from stronger antibiotics
- Routine surgeries become riskier

**What You Can Do:**
- Only take antibiotics when prescribed by a doctor
- Finish all your antibiotics, even if you feel better
- Never share antibiotics with others
- Don\'t pressure doctors for antibiotics
- Wash your hands to prevent infections
- Keep vaccinations up to date

**The Future:**
- Scientists are working on new antibiotics
- But bacteria keep evolving
- We must use existing antibiotics wisely
- Prevention is the best medicine`,
      keyTerms: [
        { term: 'antibiotic resistance', definition: 'When bacteria change so antibiotics can no longer kill them or stop their growth' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus - a type of staph bacteria resistant to many antibiotics', pronunciation: 'MER-sah' },
        { term: 'superbug', definition: 'Bacteria that are resistant to multiple antibiotics and hard to treat' },
        { term: 'DNA', definition: 'The genetic material inside bacteria that can change to create resistance' },
      ],
      analogies: [
        'Antibiotic resistance is like a lock changing its shape. The antibiotic is like a key that used to fit perfectly and unlock (kill) the bacteria. But when the lock changes, the key no longer works.',
        'Think of it like bug spray and cockroaches. If you use the same spray over and over, eventually some roaches survive and have babies that are also resistant. Soon the spray doesn\'t work anymore.',
      ],
      examples: [
        'A person takes antibiotics for a cold (caused by virus). The bacteria in their body are exposed to antibiotics unnecessarily and may develop resistance.',
        'Someone stops taking antibiotics after 3 days because they feel better. The strongest bacteria survive and multiply, causing a resistant infection.',
        'MRSA outbreaks can happen in gyms, schools, and hospitals where bacteria spread easily between people.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bacteria develop resistance through genetic mutations and horizontal gene transfer, using mechanisms including enzyme production, target modification, efflux pumps, and altered permeability to survive antibiotic exposure.',
      explanation: `Antibiotic resistance develops through evolutionary pressure and sophisticated bacterial survival mechanisms.

**How Resistance Develops:**

1. **Genetic Mutations:**
   - Random changes in bacterial DNA
   - Some mutations help bacteria survive antibiotics
   - Surviving bacteria multiply and pass on resistance
   - Happens naturally but accelerated by antibiotic use

2. **Horizontal Gene Transfer:**
   - Bacteria can share resistance genes
   - Three main methods:
     * Conjugation: Direct cell-to-cell contact
     * Transformation: Picking up DNA from environment
     * Transduction: Virus carries genes between bacteria

**Major Resistance Mechanisms:**

*1. Enzyme Production:*
- Beta-lactamases break antibiotic structure
  * Simple: Penicillinases destroy penicillin
  * Extended-spectrum (ESBLs): Destroy many cephalosporins
  * Carbapenemases: Even destroy carbapenems
- Aminoglycoside-modifying enzymes

*2. Target Site Modification:*
- Change shape of antibiotic target
- Example: MRSA has altered penicillin-binding protein
- Example: Vancomycin resistance changes cell wall precursor
- Mutations in ribosomal proteins

*3. Efflux Pumps:*
- Bacteria pump antibiotics back out
- Can remove multiple types of antibiotics
- Common in Pseudomonas and Acinetobacter
- Makes bacteria resistant to many drugs

*4. Decreased Permeability:*
- Change cell wall porins
- Antibiotics can\'t enter cell
- Common in gram-negative bacteria
- Often combined with efflux pumps

*5. Bypass Mechanisms:*
- Create alternative metabolic pathways
- Original target no longer essential
- Example: Some sulfonamide resistance

**Important Resistant Organisms:**

*MRSA (Methicillin-resistant S. aureus):*
- Community-acquired (CA-MRSA): USA300 strain
- Hospital-acquired (HA-MRSA): Different clones
- Resistant to all beta-lactams
- Treat with: Vancomycin, TMP-SMX, doxycycline, linezolid, daptomycin

*VRE (Vancomycin-resistant Enterococcus):*
- VanA and VanB types
- Common after vancomycin use
- Spreads in healthcare settings
- Treat with: Linezolid, daptomycin

*ESBL-Producing Enterobacterales:*
- E. coli, Klebsiella most common
- Resistant to penicillins and cephalosporins
- Susceptible to carbapenems
- Spread in community and hospitals

*CRE (Carbapenem-resistant Enterobacterales):*
- Resistant to nearly all antibiotics
- KPC, NDM carbapenemases
- Very limited treatment options
- Associated with high mortality

*MDR Pseudomonas and Acinetobacter:*
- Biofilm formation
- Multiple resistance mechanisms
- Common in ICU settings
- Very difficult to treat

**Factors Driving Resistance:**

*Healthcare Factors:*
- Broad-spectrum antibiotic overuse
- Prolonged hospital stays
- Inadequate infection control
- Agricultural antibiotic use
- Poor sanitation

*Patient Factors:*
- Immunocompromise
- Previous antibiotic exposure
- Long-term care residence
- Travel to endemic areas
- Invasive devices (catheters, lines)`,
      keyTerms: [
        { term: 'horizontal gene transfer', definition: 'Movement of genetic material between bacteria without reproduction; spreads resistance' },
        { term: 'beta-lactamase', definition: 'Enzyme that destroys beta-lactam antibiotics by breaking their ring structure', pronunciation: 'BAY-tuh LAK-tuh-mayse' },
        { term: 'efflux pump', definition: 'Protein channel that actively pumps antibiotics out of bacterial cells' },
        { term: 'conjugation', definition: 'Direct transfer of DNA between bacteria through physical contact', pronunciation: 'kon-joo-GAY-shun' },
        { term: 'porin', definition: 'Protein channel in bacterial outer membrane that allows substances to enter', pronunciation: 'POR-in' },
      ],
      analogies: [
        'Efflux pumps are like bouncers at a club. They recognize antibiotics and kick them out before they can do damage. Some bacteria have multiple bouncers that recognize different antibiotics.',
        'Target modification is like changing the lock on your door. The antibiotic key used to fit perfectly, but now it can\'t turn the lock because the shape changed.',
      ],
      examples: [
        'A patient with recurrent UTIs develops an E. coli infection resistant to TMP-SMX and ciprofloxacin due to previous antibiotic exposure.',
        'An ICU patient acquires Acinetobacter that produces a carbapenemase, making it resistant to all beta-lactam antibiotics.',
        'A healthy athlete develops CA-MRSA skin infection from gym equipment, requiring drainage and specific antibiotics.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antibiotic resistance involves complex molecular mechanisms including chromosomal mutations, mobile genetic elements carrying resistance genes, and sophisticated structural adaptations that collectively enable bacterial survival in antimicrobial environments.',
      explanation: `Resistance mechanisms operate at molecular, cellular, and population levels, requiring comprehensive understanding for effective management.

**Genetic Basis of Resistance:**

*Chromosomal Mutations:*
- Spontaneous errors during DNA replication
- Rate: ~10^-6 to 10^-9 per generation
- Selection pressure enriches resistant mutants
- Examples:
  * DNA gyrase mutations (quinolone resistance)
  * Ribosomal protein mutations (aminoglycoside resistance)
  * RNA polymerase mutations (rifampin resistance)

*Mobile Genetic Elements:*
- Plasmids: Extra-chromosomal DNA carrying multiple resistance genes
- Transposons: "Jumping genes" that move between DNA locations
- Integrons: Gene capture and expression systems
- Resistance islands: Large chromosomal regions with resistance clusters
- Pathogenicity islands: Often contain resistance genes

**Detailed Mechanism Analysis:**

*Beta-Lactam Resistance:*

1. *Beta-Lactamase Types:*
   - Class A (ESBLs): TEM, SHV, CTX-M families
     * CTX-M-15 most prevalent globally
     * Hydrolyze penicillins, cephalosporins
     * Inhibited by clavulanate
   - Class C (AmpC): Chromosomal in many gram-negatives
     * Not inhibited by clavulanate
     * Can be induced or stably derepressed
   - Class D (OXA): Often carbapenemases
   - Class B (Metallo-beta-lactamases): NDM, VIM, IMP
     * Require zinc ion for activity
     * Carbapenemases
     * Inhibited by EDTA, not clavulanate

2. *PBP Modification:*
   - mecA gene encodes PBP2a in MRSA
   - Low affinity for all beta-lactams
   - Mosaic PBP genes in penicillin-resistant pneumococcus

*Aminoglycoside Resistance:*

1. *Modifying Enzymes:*
   - Aminoglycoside acetyltransferases (AAC)
   - Aminoglycoside phosphotransferases (APH)
   - Aminoglycoside nucleotidyltransferases (ANT)
   - Different enzymes target different aminoglycosides

2. *Ribosomal Changes:*
   - 16S rRNA methyltransferases
   - Ribosomal protein mutations
   - Prevent drug binding

3. *Reduced Uptake:*
   - Porin loss in gram-negatives
   - Anaerobic conditions reduce transport

*Fluoroquinolone Resistance:*

1. *Target Mutations:*
   - DNA gyrase (gyrA) mutations most common
   - Topoisomerase IV (parC) mutations
   - Stepwise accumulation of mutations
   - Higher-level resistance with multiple mutations

2. *Efflux Pump Overexpression:*
   - Multiple pump systems (AcrAB-TolC in E. coli)
   - Low-level resistance
   - Often combined with target mutations

3. *Reduced Permeability:*
   - Porin loss
   - Decreased drug entry

*Vancomycin Resistance Mechanisms:*

- VanA: D-Ala-D-Ala replaced by D-Ala-D-Lac
  * High-level resistance (MIC >64)
  * Inducible, transferable
  * Most common in Enterococcus
  
- VanB: Similar but different ligase
  * Variable resistance levels
  * Inducible
  
- Vancomycin dependence: Rare
  * Bacteria require vancomycin to grow

**Biofilm-Mediated Resistance:**

*Biofilm Structure:*
- EPS (extracellular polymeric substance) matrix
- Bacteria in different metabolic states
- Oxygen and nutrient gradients

*Resistance Factors:*
- Physical barrier: Matrix blocks antibiotic penetration
- Slow growth: Many antibiotics require active metabolism
- Persister cells: Dormant, tolerant to antibiotics
- Quorum sensing: Coordinated resistance gene expression

*Clinical Significance:*
- Device-related infections
- Chronic infections (cystic fibrosis, osteomyelitis)
- 10-1000x increased antibiotic tolerance
- May require device removal

**Population Dynamics:**

*Selection Pressure:*
- Antibiotic exposure selects for resistant subpopulations
- Fitness cost of resistance sometimes compensated
- Resistance can persist even without antibiotic exposure

*Transmission Dynamics:*
- Healthcare settings amplify transmission
- Community reservoirs (food, water, animals)
- International travel spreads resistance

*Co-resistance:*
- Resistance genes often linked on mobile elements
- Using one antibiotic selects for resistance to others
- Multiple resistance genes transferred together`,
      keyTerms: [
        { term: 'plasmid', definition: 'Circular piece of DNA separate from chromosomal DNA that can carry multiple resistance genes and transfer between bacteria' },
        { term: 'transposon', definition: 'Mobile genetic element that can move between different DNA molecules; often carries resistance genes', pronunciation: 'trans-POH-zon' },
        { term: 'CTX-M', definition: 'Cefotaximase-Munich; most common ESBL type globally, especially CTX-M-15', pronunciation: 'see-tee-ex-em' },
        { term: 'NDM', definition: 'New Delhi metallo-beta-lactamase; widespread carbapenemase first identified in India', pronunciation: 'en-dee-em' },
        { term: 'integron', definition: 'Genetic system that captures and expresses gene cassettes, often containing resistance genes' },
      ],
    },
    4: {
      level: 4,
      summary: 'Resistance mechanisms involve complex interplay of chromosomal mutations, horizontally-acquired resistance determinants on mobile genetic elements, and adaptive responses including biofilm formation and persister cell development, with significant clinical implications for empiric therapy selection and infection control.',
      explanation: `Understanding resistance at an advanced level requires integrating molecular biology, epidemiology, and clinical medicine.

**Molecular Epidemiology of Resistance:**

*Clonal Spread vs. Horizontal Transfer:*
- Successful resistant clones spread globally
- MRSA: USA300 (community), USA100/800 (hospital)
- CTX-M-15 E. coli: ST131 clone dominates
- Resistance genes jump between clones via mobile elements

*Genomic Surveillance:*
- Whole genome sequencing tracks resistance
- Identifies transmission chains in outbreaks
- Detects novel resistance mechanisms
- Monitors international spread

**Advanced Resistance Mechanisms:**

*Carbapenem Resistance in Enterobacterales:*

1. *KPC (Klebsiella pneumoniae carbapenemase):*
   - Class A beta-lactamase
   - blaKPC gene on Tn4401 transposon
   - Common in K. pneumoniae, Enterobacter
   - Inhibited by avibactam, vaborbactam

2. *NDM (New Delhi MBL):*
   - Class B metallo-beta-lactamase
   - Requires zinc for activity
   - Gene often on broad-host plasmids
   - Widespread in Indian subcontinent
   - Not inhibited by clavulanate

3. *OXA-48-like:*
   - Class D carbapenemase
   - Weak carbapenem hydrolysis
   - Often missed by standard testing
   - Associated with Turkey, North Africa, Middle East

4. *Porin Loss + AmpC/ESBL:*
   - No carbapenemase produced
   - Outer membrane porin (OmpK35/36) loss
   - Combined with ESBL or AmpC
   - Resistant to all beta-lactams except carbapenems
   - Carbapenem resistance through synergy

*MRSA Molecular Types:*

- SCCmec types: I-VIII
  * Type IV: Community strains (CA-MRSA)
  * Type II: Hospital strains (HA-MRSA)
- PVL toxin: Associated with CA-MRSA
- Linezolid resistance: 23S rRNA mutations, cfr methyltransferase

*Mycobacterial Resistance:*

- MDR-TB: Resistant to isoniazid and rifampin
- XDR-TB: MDR plus fluoroquinolone and injectable resistance
- Mechanisms:
  * katG mutations (isoniazid)
  * rpoB mutations (rifampin)
  * gyrA mutations (fluoroquinolones)
  * rrs/eis mutations (aminoglycosides)

**Adaptive Resistance and Heteroresistance:**

*Adaptive Resistance:*
- Temporary resistance induced by antibiotic exposure
- Reversible when antibiotic removed
- Example: AmpC induction in Enterobacter
- Aminoglycoside adaptive resistance in Pseudomonas

*Heteroresistance:*
- Subpopulation of resistant cells within susceptible population
- Can be missed by standard susceptibility testing
- May lead to treatment failure
- Documented with vancomycin, colistin, echinocandins

**Pharmacokinetic/Pharmacodynamic Implications:**

*Resistance Prevention:*
- Achieving adequate drug exposure prevents resistance
- Mutant prevention concentration (MPC)
- Multiple antibiotics reduce resistance probability
- Resistance suppression strategies

*Combination Therapy:*
- Two active agents for serious MDR infections
- Synergy testing (checkerboard, time-kill)
- Prevents resistance emergence during therapy

**Clinical Management Strategies:**

*Empiric Therapy Decisions:*
- Local antibiograms guide selection
- Risk factors for resistant organisms
- Severity of illness
- Source of infection

*Diagnostic Stewardship:*
- Rapid resistance detection (PCR, MALDI-TOF)
- Chromogenic agar for screening
- Molecular testing for carbapenemases

*Infection Control:*
- Contact precautions for resistant organisms
- Active surveillance in high-risk units
- Environmental cleaning
- Hand hygiene compliance

**Treatment of Resistant Infections:**

*CRE Infections:*
- Ceftazidime-avibactam (KPC, some OXA)
- Meropenem-vaborbactam (KPC)
- Imipenem-cilastatin-relebactam (KPC)
- Aztreonam + avibactam (metallo-beta-lactamases)
- Cefiderocol (all types)
- Colistin, tigecycline (last resort)

*MDR Pseudomonas:*
- Ceftolozane-tazobactam
- Cefiderocol
- Colistin combinations
- Aminoglycoside combinations

*MRSA:*
- Vancomycin (monitor levels)
- Daptomycin (not pneumonia)
- Linezolid (oral option, CNS penetration)
- Ceftaroline (beta-lactam option)

*VRE:*
- Linezolid
- Daptomycin
- Tigecycline (not bacteremia)

**Emerging Resistance Concerns:**

*Pan-resistant organisms:*
- No effective antibiotics
- Colistin resistance in CRE
- "Last-resort" antibiotic resistance
- Infection control critical

*Mcr genes:*
- Colistin resistance plasmid-borne
- mcr-1 through mcr-10 identified
- Horizontal transfer between species
- Threatens polymyxin effectiveness`,
      keyTerms: [
        { term: 'SCCmec', definition: 'Staphylococcal cassette chromosome mec; genetic element carrying mecA gene and other resistance determinants', pronunciation: 'es-cee-cee-mek' },
        { term: 'heteroresistance', definition: 'Presence of resistant subpopulations within a susceptible bacterial population, potentially leading to treatment failure' },
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight; rapid bacterial identification method', pronunciation: 'mal-dee-tof' },
        { term: 'MPC', definition: 'Mutant prevention concentration - drug level that prevents growth of resistant mutants', pronunciation: 'em-pee-see' },
        { term: 'mcr', definition: 'Mobile colistin resistance gene; plasmid-mediated colistin resistance', pronunciation: 'em-see-are' },
      ],
      clinicalNotes: 'Empiric coverage for ESBL should be considered in patients with prior ESBL colonization, recent healthcare exposure, or severe infection with risk factors. Carbapenems are drug of choice for ESBL; piperacillin-tazobactam should not be used for serious ESBL infections.',
    },
    5: {
      level: 5,
      summary: 'Antibiotic resistance represents a complex evolutionary and molecular phenomenon involving chromosomal mutations, mobile genetic element dissemination, structural adaptations, and population dynamics, with profound implications for global health, requiring integrated surveillance, stewardship, and novel therapeutic development strategies.',
      explanation: `Expert-level understanding of resistance integrates molecular biology, pharmacology, epidemiology, and systems medicine.

**Advanced Molecular Mechanisms:**

*RNA-Mediated Resistance:*
- Small RNAs regulate efflux pump expression
- Riboswitches control resistance gene expression
- CRISPR-Cas systems in some bacteria
- Non-coding RNA in adaptive responses

*Epigenetic Resistance:*
- DNA methylation patterns affect gene expression
- Phase variation in resistance genes
- No DNA sequence change required
- Reversible adaptation

*Antibiotic Tolerance vs. Resistance:*
- Tolerance: Survive without genetic change
  * Persister cells: Dormant, slow-growing
  * Biofilm physiological gradients
  * Stringent response (ppGpp)
- Distinct from resistance but clinically important
- May be precursor to resistance

*CRISPR and Resistance:*
- Some bacteria use CRISPR to acquire resistance
- Others use it to reject resistance plasmids
- Environmental plasmid defense

**Genomics of Resistance:**

*Whole Genome Sequencing (WGS) Applications:*
- Outbreak investigation: SNP analysis
- Resistance prediction from genotype
- Transmission tracking
- Virulence factor identification
- Population structure analysis

*Resistome Analysis:*
- Comprehensive resistance gene catalog
- Functional metagenomics
- Environmental resistance reservoirs
- One Health perspective

*Machine Learning Approaches:*
- Predict resistance from genome sequence
- Identify novel resistance genes
- Resistance forecasting
- Treatment outcome prediction

**Population Genetics and Evolution:**

*Compensatory Evolution:*
- Resistance often has fitness cost
- Compensatory mutations restore fitness
- Stabilizes resistant clones
- Example: rpoB compensatory mutations in rifampin-resistant TB

*Clonal Expansion:*
- Successful resistant clones spread globally
- ST131 E. coli (CTX-M-15)
- USA300 MRSA
- MDR Salmonella Typhi H58

*Selection Dynamics:*
- Antibiotic concentration affects selection
- Mutant selection window hypothesis
- Resistance selection in gut microbiome
- Co-selection by non-antibiotic compounds

**Clinical Epidemiology:**

*Global Resistance Surveillance:*
- WHO Global Antimicrobial Resistance Surveillance System (GLASS)
- CDC Antibiotic Resistance Threats Report
- ECDC surveillance networks
- Resistance maps and atlases

*Healthcare-Associated Transmission:*
- ICU amplification of resistance
- Long-term care facility reservoirs
- Inter-facility transfer
- Environmental contamination

*Community Reservoirs:*
- Food chain (agricultural use)
- Wastewater and environment
- Companion animals
- International travel

**Novel Resistance Mechanisms:**

*Mobile Colistin Resistance (mcr):*
- Phosphoethanolamine transferase
- Modifies lipid A
- Plasmid-mediated
- Spreads between species
- Threatens last-resort antibiotic

*Cefiderocol Resistance:*
- Siderophore uptake system mutations
- Beta-lactamase production
- Emerging in clinical use

*Teixobactin Resistance:*
- Novel antibiotic from uncultured bacteria
- Lipid II binding
- No resistance yet in lab
- Promising new scaffold

**Therapeutic Approaches to Resistance:**

*Antibiotic Adjuvants:*
- Beta-lactamase inhibitors (clavulanate, avibactam)
- Efflux pump inhibitors (research stage)
- Outer membrane permeabilizers
- Anti-virulence strategies

*Alternative Therapies:*
- Bacteriophage therapy
- Antimicrobial peptides
- CRISPR-Cas antimicrobials
- Immunotherapy approaches
- Microbiome manipulation

*Stewardship Interventions:*
- Prospective audit and feedback
- Preauthorization programs
- IV-to-oral conversion
- De-escalation protocols
- Diagnostic stewardship

**Research Frontiers:**

*Structure-Based Drug Design:*
- Targeting resistant variants
- Bypassing resistance mechanisms
- Covalent inhibitors
- Allosteric inhibitors

*Systems Biology:*
- Network analysis of resistance
- Metabolic modeling
- Predicting evolution trajectories
- Identifying collateral sensitivity

*Diagnostic Advances:*
- Rapid susceptibility testing
- Point-of-care resistance detection
- Host biomarkers for bacterial vs. viral
- Procalcitonin-guided antibiotic cessation

**Policy and Global Health:**

*National Action Plans:*
- WHO Global Action Plan on AMR
- Country-specific strategies
- Surveillance infrastructure
- Stewardship requirements

*One Health Approach:*
- Human, animal, and environmental health
- Agricultural antibiotic regulation
- Environmental monitoring
- Integrated surveillance

*Antibiotic Development Incentives:*
- Limited population antibiotics
- Subscription models
- Market entry rewards
- Public-private partnerships`,
      keyTerms: [
        { term: 'resistome', definition: 'The totality of antibiotic resistance genes and their precursors in pathogenic and non-pathogenic bacteria' },
        { term: 'collateral sensitivity', definition: 'When resistance to one antibiotic increases susceptibility to another; can be exploited therapeutically' },
        { term: 'stringent response', definition: 'Bacterial stress response involving ppGpp that can induce tolerance and persistence' },
        { term: 'fitness cost', definition: 'Decreased bacterial growth or survival associated with resistance mutations; often compensated by secondary mutations' },
        { term: 'GLASS', definition: 'WHO Global Antimicrobial Resistance Surveillance System; global platform for AMR data collection', pronunciation: 'glass' },
      ],
      clinicalNotes: '**Board-Relevant Pearls:**\n- Vancomycin-intermediate S. aureus (VISA) has thickened cell wall; heterogeneous resistance (hVISA) may be missed by standard testing\n- Enterococcus faecium more resistant than E. faecalis; prioritize identification to species level\n- CTX-M ESBLs hydrolyze ceftriaxone and ceftazidime but not cefepime (4th gen)\n- AmpC producers: 3rd gen cephalosporins can select for derepressed mutants; use cefepime or carbapenems\n- Combination therapy with colistin often used for CRE, but resistance can emerge during therapy\n- Daptomycin resistance can develop during therapy for Enterococcus (especially E. faecium)\n- Tigecycline: Concentrates in tissues, low blood levels; avoid for primary bacteremia\n- Fosfomycin IV: Useful for MDR infections, including those resistant to other agents',
    },
  },

  media: [
    {
      id: 'resistance-mechanisms-diagram',
      type: 'diagram',
      filename: 'resistance-mechanisms-overview.svg',
      title: 'Antibiotic Resistance Mechanisms',
      description: 'Diagram showing four major resistance mechanisms with examples',
    },
    {
      id: 'horizontal-gene-transfer',
      type: 'diagram',
      filename: 'horizontal-gene-transfer.svg',
      title: 'Horizontal Gene Transfer',
      description: 'Illustration of conjugation, transformation, and transduction',
    },
  ],
  citations: [
    {
      id: 'who-amr-report',
      type: 'article',
      title: 'Antimicrobial Resistance: Global Report on Surveillance',
      source: 'World Health Organization',
      url: 'https://www.who.int/antimicrobial-resistance',
    },
    {
      id: 'cdc-ar-threats',
      type: 'article',
      title: 'Antibiotic Resistance Threats in the United States',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/drugresistance/biggest-threats.html',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-antibiotic-classes', targetType: 'concept', relationship: 'related', label: 'Antibiotic Classes' },
    { targetId: 'infectious-disease-stewardship-programs', targetType: 'concept', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'infectious-disease-staph-infections', targetType: 'condition', relationship: 'related', label: 'Staphylococcal Infections' },
  ],
  tags: {
    systems: ['infectious', 'immune'],
    topics: ['microbiology', 'pharmacology', 'public-health', 'antimicrobial-stewardship'],
    keywords: ['resistance', 'MRSA', 'ESBL', 'CRE', 'superbug', 'beta-lactamase', 'horizontal-gene-transfer', 'plasmid'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine', 'pediatrics'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default resistanceMechanisms;
