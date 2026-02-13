import { EducationalContent } from '../../types';

export const gramNegativeBacteria: EducationalContent = {
  id: 'infectious-disease-gram-negative',
  type: 'concept',
  name: 'Gram-Negative Bacterial Infections',
  alternateNames: ['Gram- Bacteria', 'Gram-Negative Rods', 'GNR'],

  levels: {
    1: {
      level: 1,
      summary: 'Gram-negative bacteria are germs with a thin protective coat and an extra outer layer that stain pink in lab tests and can cause serious infections.',
      explanation: `Gram-negative bacteria are the second main type of bacteria. They turn pink when scientists use a special staining technique because they have a different type of wall than Gram-positive bacteria.

**Why Gram-Negative Bacteria Can Be Dangerous:**
- They have an outer layer that contains a toxin called endotoxin
- When the bacteria die, they release this toxin, which can make you very sick
- Many antibiotics have trouble getting through their outer layer
- They can become resistant to antibiotics more easily

**Common Gram-Negative Bacteria:**

1. **E. coli (Escherichia coli)**
   - Lives in your intestines (most strains are harmless)
   - Can cause urinary tract infections and food poisoning
   - Most common cause of UTIs

2. **Salmonella**
   - Causes food poisoning from raw eggs, chicken
   - Can cause typhoid fever

3. **Pseudomonas**
   - Found in water and soil
   - Causes infections in hospitals and in people with weak immune systems

4. **Klebsiella**
   - Can cause pneumonia and other infections
   - Often found in hospitals

**Where These Infections Occur:**
- Urinary tract (bladder, kidneys)
- Lungs (pneumonia)
- Bloodstream (very serious)
- Wounds
- Digestive system

**Treatment:**
These bacteria are often harder to treat than Gram-positive bacteria. Doctors may need to use stronger or multiple antibiotics.`,
      keyTerms: [
        { term: 'Gram-negative', definition: 'Bacteria that stain pink and have a thin wall with an outer membrane' },
        { term: 'E. coli', definition: 'Common bacteria in intestines that can cause urinary and digestive infections' },
        { term: 'endotoxin', definition: 'A poison in the outer layer of Gram-negative bacteria released when they die' },
        { term: 'antibiotic resistance', definition: 'When bacteria develop the ability to survive antibiotic treatment' },
      ],
      analogies: [
        'Gram-negative bacteria have two walls like a double-layered jacket - this extra layer makes it harder for antibiotics to get inside.',
        'Endotoxin is like a booby trap that goes off when the bacteria are destroyed, making you sicker even as the infection is being killed.',
      ],
      examples: [
        'When you get a urinary tract infection and feel burning when you urinate, it is often caused by E. coli bacteria that traveled from your intestines.',
        'Food poisoning from undercooked chicken is usually caused by Salmonella bacteria.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gram-negative bacteria possess a thin peptidoglycan layer surrounded by an outer membrane containing lipopolysaccharide (LPS), making them inherently more resistant to many antibiotics.',
      explanation: `Gram-negative bacteria are distinguished by their unique cell envelope structure, which has significant implications for pathogenesis and treatment.

**Cell Envelope Structure:**

1. **Inner (Cytoplasmic) Membrane**
   - Phospholipid bilayer
   - Contains transport proteins and enzymes

2. **Thin Peptidoglycan Layer (1-2nm)**
   - Located in periplasmic space
   - Much thinner than Gram-positive wall

3. **Outer Membrane (Unique Feature)**
   - Contains lipopolysaccharide (LPS/endotoxin)
   - Porins allow selective molecule passage
   - Provides intrinsic antibiotic resistance

**Major Gram-Negative Pathogens:**

*Enterobacterales (formerly Enterobacteriaceae):*
- **E. coli**: UTIs, bacteremia, meningitis (neonatal)
- **Klebsiella pneumoniae**: Pneumonia, UTIs, nosocomial infections
- **Proteus mirabilis**: UTIs (struvite kidney stones)
- **Enterobacter**: Hospital-acquired infections
- **Serratia**: Nosocomial infections
- **Salmonella**: Gastroenteritis, typhoid fever
- **Shigella**: Dysentery

*Non-Fermenters:*
- **Pseudomonas aeruginosa**: Nosocomial infections, CF lung disease
- **Acinetobacter baumannii**: Hospital-acquired, often MDR

*Respiratory Pathogens:*
- **Haemophilus influenzae**: Pneumonia, meningitis, otitis media
- **Moraxella catarrhalis**: Respiratory infections
- **Legionella pneumophila**: Legionnaires' disease

*Other Important Pathogens:*
- **Neisseria meningitidis**: Meningitis
- **Neisseria gonorrhoeae**: Gonorrhea
- **Helicobacter pylori**: Peptic ulcer disease

**Lipopolysaccharide (LPS/Endotoxin):**
- Lipid A: Toxic component, triggers immune response
- Core polysaccharide: Common structure
- O-antigen: Variable, determines serotype
- Activates immune cells via TLR4

**Clinical Syndromes:**
- Urinary tract infections (uncomplicated and complicated)
- Hospital-acquired pneumonia
- Intra-abdominal infections
- Bloodstream infections/sepsis
- Skin and soft tissue infections
- Meningitis`,
      keyTerms: [
        { term: 'lipopolysaccharide (LPS)', definition: 'Major component of Gram-negative outer membrane; the "endotoxin" that triggers strong immune responses', pronunciation: 'lip-oh-pol-ee-SAK-a-ride' },
        { term: 'periplasmic space', definition: 'The space between inner and outer membranes in Gram-negative bacteria' },
        { term: 'porin', definition: 'Channel protein in outer membrane allowing small molecules to pass' },
        { term: 'Enterobacterales', definition: 'Order of Gram-negative bacteria including E. coli, Klebsiella, and Salmonella' },
        { term: 'non-fermenter', definition: 'Bacteria like Pseudomonas that do not ferment glucose' },
      ],
      analogies: [
        'The outer membrane is like a security gate that only lets certain things through, including some antibiotics - but many are blocked.',
        'LPS is like an alarm system that triggers when bacteria are attacked, calling the immune system into overdrive.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gram-negative pathogenesis involves LPS-mediated inflammation, specialized secretion systems, and increasing antibiotic resistance mechanisms including beta-lactamases, efflux pumps, and porin mutations.',
      explanation: `Understanding Gram-negative infections requires integration of virulence mechanisms, resistance patterns, and antimicrobial pharmacology.

**Gram-Negative Virulence Factors:**

*Endotoxin (LPS):*
- Lipid A activates TLR4 on immune cells
- Triggers TNF-alpha, IL-1, IL-6 release
- Complement activation
- Coagulation cascade activation
- High levels cause septic shock

*Adhesins:*
- Fimbriae (pili): Type 1, P pili (E. coli UTI)
- Non-fimbrial adhesins
- Biofilm formation

*Secretion Systems:*
- Type III: "Molecular syringe" (Salmonella, Pseudomonas)
- Type IV: DNA/protein transfer (Legionella)
- Type VI: Bacterial competition and host interaction

*Other Virulence Factors:*
- Capsules: K antigens (Klebsiella, E. coli K1)
- Exotoxins: Shiga toxin (STEC), cholera toxin
- Siderophores: Iron acquisition
- Urease: Proteus (alkaline urine, stones)

**Antibiotic Classes for Gram-Negatives:**

*Beta-Lactams:*
- Penicillins: Ampicillin, piperacillin
- Cephalosporins: Ceftriaxone (3rd gen), cefepime (4th gen)
- Carbapenems: Meropenem, imipenem (broadest spectrum)
- Monobactam: Aztreonam (GNR only, no anaerobes)

*Other Classes:*
- Aminoglycosides: Gentamicin, tobramycin
- Fluoroquinolones: Ciprofloxacin, levofloxacin
- TMP-SMX: Especially for UTIs
- Polymyxins: Colistin, polymyxin B (last resort)
- Tigecycline: Broad spectrum including MDR

**Resistance Mechanisms:**

*Beta-Lactamases:*
- Ambler Classes A-D
- ESBLs (Extended-Spectrum Beta-Lactamases)
- AmpC beta-lactamases
- Carbapenemases (KPC, NDM, OXA-48, VIM, IMP)

*Other Mechanisms:*
- Porin loss (reduced permeability)
- Efflux pumps (expel antibiotics)
- Target modification
- Aminoglycoside-modifying enzymes

**Laboratory Identification:**

*Key Tests:*
- Oxidase: Pseudomonas (+), Enterobacterales (-)
- Lactose fermentation: E. coli, Klebsiella (+); Salmonella, Shigella (-)
- Urease: Proteus (+)
- H2S production: Salmonella (+)
- Motility: E. coli (+), Klebsiella (-)`,
      keyTerms: [
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzyme that hydrolyzes 3rd generation cephalosporins' },
        { term: 'carbapenemase', definition: 'Enzyme capable of hydrolyzing carbapenem antibiotics' },
        { term: 'efflux pump', definition: 'Membrane protein that actively expels antibiotics from bacterial cells' },
        { term: 'Type III secretion system', definition: 'Bacterial apparatus that injects effector proteins directly into host cells' },
        { term: 'TLR4', definition: 'Toll-like receptor 4; recognizes LPS and initiates inflammatory response' },
      ],
      clinicalNotes: 'For suspected ESBL-producing organisms, carbapenems are the treatment of choice. Cephalosporins should not be used even if susceptible in vitro (inoculum effect). Blood cultures are essential for any suspected Gram-negative bacteremia. Polymyxins should be reserved for extensively drug-resistant organisms.',
    },
    4: {
      level: 4,
      summary: 'Management of Gram-negative infections requires understanding of regional resistance epidemiology, carbapenemase detection, PK/PD-optimized dosing strategies, and source control principles for improved outcomes.',
      explanation: `Advanced Gram-negative infection management integrates molecular epidemiology, diagnostic stewardship, and therapeutic optimization.

**Carbapenem-Resistant Enterobacterales (CRE):**

*Resistance Mechanisms:*
1. **Carbapenemase Production:**
   - Class A (KPC): Most common in US
   - Class B (Metallo-beta-lactamases: NDM, VIM, IMP)
   - Class D (OXA-48-like): More common in Europe

2. **Non-Carbapenemase CRE:**
   - ESBL or AmpC + porin loss
   - Often lower MICs, may respond to high-dose carbapenem

*Detection:*
- Modified Hodge test (older, less specific)
- Carba NP test
- Modified carbapenem inactivation method (mCIM)
- Molecular: PCR for specific genes
- MALDI-TOF with resistance algorithms

*Treatment Options:*
- KPC: Ceftazidime-avibactam, meropenem-vaborbactam, imipenem-relebactam
- NDM: Ceftazidime-avibactam + aztreonam, cefiderocol
- OXA-48: Ceftazidime-avibactam
- Tigecycline: For non-bloodstream infections
- Polymyxins: Often in combination
- Aminoglycosides: If susceptible

**Pseudomonas aeruginosa:**

*Intrinsic Resistance:*
- Efflux pumps (MexAB-OprM, etc.)
- AmpC beta-lactamase (chromosomal)
- Reduced permeability (OprD loss)

*Treatment Approach:*
- Non-MDR: Anti-pseudomonal beta-lactam (piperacillin-tazobactam, cefepime, meropenem)
- MDR: Combination therapy, newer agents
- Novel agents: Ceftolozane-tazobactam, ceftazidime-avibactam, imipenem-relebactam, cefiderocol

*Difficult-to-Treat Resistance (DTR):*
- Non-susceptible to all beta-lactams AND fluoroquinolones
- Limited to aminoglycosides, colistin, newer agents

**Acinetobacter baumannii:**

*Characteristics:*
- Survives on dry surfaces (environmental reservoir)
- Rapid resistance acquisition
- Carbapenem resistance: OXA-type carbapenemases (OXA-23, -24, -58)

*Treatment:*
- Carbapenem-susceptible: Ampicillin-sulbactam or carbapenem
- CRAB: Ampicillin-sulbactam (high-dose), polymyxins, tigecycline, cefiderocol
- Combination therapy often needed

**PK/PD Optimization:**

*Beta-Lactams:*
- Time-dependent killing (fT>MIC)
- Extended/continuous infusions for serious infections
- Target: 100% fT>MIC (or fT>4xMIC for resistant organisms)

*Carbapenems:*
- Extended infusion: 3-hour meropenem
- Higher doses for MDR: Meropenem 2g q8h extended

*Aminoglycosides:*
- Concentration-dependent (Cmax/MIC)
- Once-daily dosing preferred
- Monitor levels to avoid nephrotoxicity

*Fluoroquinolones:*
- AUC/MIC-dependent
- Avoid for serious Pseudomonas infections (resistance emergence)

**Specific Syndromes:**

*Hospital-Acquired/Ventilator-Associated Pneumonia:*
- Empiric: Anti-pseudomonal beta-lactam +/- second agent
- Double coverage for high MDR risk
- De-escalate based on cultures

*Complicated UTI/Pyelonephritis:*
- ESBL risk: Ertapenem or ceftriaxone (adjust to culture)
- Pseudomonas risk: Cefepime or piperacillin-tazobactam
- Duration: 7-14 days based on complexity

*Intra-Abdominal Infections:*
- Source control is essential
- Combination or broad-spectrum coverage for nosocomial
- Duration: 4 days post-source control (STOP-IT trial)`,
      keyTerms: [
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales; includes both carbapenemase-producing and non-CP mechanisms' },
        { term: 'KPC', definition: 'Klebsiella pneumoniae carbapenemase; Class A serine carbapenemase, most common in United States' },
        { term: 'NDM', definition: 'New Delhi metallo-beta-lactamase; Class B carbapenemase, requires zinc, inhibited by EDTA' },
        { term: 'DTR', definition: 'Difficult-to-treat resistance; non-susceptible to all beta-lactams, carbapenems, and fluoroquinolones' },
        { term: 'source control', definition: 'Surgical or interventional drainage/debridement of infected focus essential for successful treatment' },
      ],
      clinicalNotes: `**Critical Points:**
- ID consultation for CRE bacteremia associated with improved outcomes
- Always obtain cultures before starting antibiotics for suspected GNR infections
- Extended-infusion carbapenems/beta-lactams for serious infections
- Source control is often more important than antibiotic choice
- Avoid monotherapy for DTR-Pseudomonas; consider synergy testing
- Colistin: Load with 300mg CBA, then renally adjust; monitor for nephrotoxicity`,
    },
    5: {
      level: 5,
      summary: 'Contemporary Gram-negative infection management requires integration of rapid molecular diagnostics, regional antibiogram data, novel beta-lactam/beta-lactamase inhibitor combinations, and recognition of emerging resistance mechanisms to optimize outcomes in an era of increasing antimicrobial resistance.',
      explanation: `Expert-level management of Gram-negative infections requires integration of molecular epidemiology, advanced diagnostics, novel therapeutics, and antimicrobial stewardship.

**Advanced Resistance Epidemiology:**

*Global Carbapenemase Distribution:*
- Americas: KPC predominates (KPC-2, KPC-3)
- Europe: OXA-48-like and NDM increasing
- Asia: NDM (especially Indian subcontinent), IMP
- Middle East: OXA-48
- Africa: Varied, emerging data

*Clonal Spread:*
- High-risk clones: E. coli ST131, K. pneumoniae ST258/512
- Hypervirulent K. pneumoniae (hvKP): K1/K2 capsule, rmpA, aerobactin
- Colistin resistance: mcr genes (plasmid-mediated)

*Horizontal Gene Transfer:*
- Plasmid-mediated resistance spread
- Integrons and transposons
- Carbapenemase genes on mobile elements

**Novel Therapeutic Agents:**

*Beta-Lactam/Beta-Lactamase Inhibitor Combinations:*
| Agent | Activity | Key Limitations |
|-------|----------|-----------------|
| Ceftazidime-avibactam | KPC, OXA-48, AmpC, ESBL | No MBL activity |
| Meropenem-vaborbactam | KPC | No OXA-48 or MBL |
| Imipenem-relebactam | KPC, P. aeruginosa | No OXA-48 or MBL |
| Ceftolozane-tazobactam | P. aeruginosa (MDR) | No carbapenemases |
| Aztreonam-avibactam* | MBLs | Investigational in US |

*Other Novel Agents:*
- Cefiderocol: Siderophore cephalosporin, stable to all carbapenemases
- Plazomicin: Next-gen aminoglycoside, avoids many AMEs
- Eravacycline: Fluorocycline for intra-abdominal infections

**Therapeutic Strategies for Specific Resistance Patterns:**

*KPC Producers:*
1. Ceftazidime-avibactam (first-line for many)
2. Meropenem-vaborbactam
3. Imipenem-relebactam
4. Cefiderocol (for highly resistant)
5. Combination: Colistin + carbapenem + tigecycline (older approach)

*MBL Producers (NDM, VIM, IMP):*
- Ceftazidime-avibactam + aztreonam (synergistic combination)
- Cefiderocol
- Aztreonam (if ESBL co-expression addressed)
- Avoid monotherapy

*OXA-48-like Producers:*
- Ceftazidime-avibactam
- Consider if porin-intact: High-dose carbapenems may work
- Often co-express ESBLs

*DTR-Pseudomonas:*
- Ceftolozane-tazobactam (if no carbapenemase)
- Ceftazidime-avibactam (variable)
- Imipenem-relebactam
- Cefiderocol
- Consider synergy testing

**Diagnostic Advances:**

*Rapid Molecular Diagnostics:*
- Direct-from-specimen PCR: Carba-R, ESBL genes
- Syndromic panels: Blood culture identification + resistance
- CRISPR-based diagnostics (emerging)
- Whole genome sequencing for outbreak investigation

*Resistance Gene Detection:*
- Targeted PCR: blaKPC, blaNDM, blaOXA-48, mcr-1
- Multiplex platforms: Verigene, FilmArray, ePlex
- Genotype-phenotype correlation challenges

*Therapeutic Drug Monitoring:*
- Beta-lactams: Consider for critically ill, altered PK
- Aminoglycosides: Peak and trough monitoring
- Polymyxins: Consider methanesulfonate (prodrug) kinetics

**Combination Therapy Considerations:**

*When to Use Combinations:*
- Empiric coverage for high-risk patients
- CRE bloodstream infections (debated, trend toward monotherapy with new agents)
- DTR-Pseudomonas and CRAB
- Synergy for specific pathogen-antibiotic combinations

*Evidence for Combinations:*
- INCREMENT study: Combination beneficial for high-mortality CRE infections
- AIDA trial: No difference for CRAB with colistin + meropenem
- Newer agent monotherapy increasingly supported by RCTs

**Prognosis and Outcomes:**

*Mortality Predictors:*
- Delayed appropriate therapy
- Source control failure
- High APACHE II/Pitt bacteremia scores
- Immunocompromised status
- Specific resistance patterns (DTR associated with higher mortality)

*Stewardship Integration:*
- Rapid diagnostics + ASP intervention
- Automatic de-escalation protocols
- Regional antibiogram-guided empiric therapy
- Carbapenemase reporting algorithms`,
      keyTerms: [
        { term: 'hvKP', definition: 'Hypervirulent Klebsiella pneumoniae; community-acquired strains with enhanced capsule, siderophores, causing liver abscesses and metastatic infections' },
        { term: 'mcr genes', definition: 'Mobile colistin resistance genes; plasmid-mediated phosphoethanolamine transferases conferring polymyxin resistance' },
        { term: 'siderophore cephalosporin', definition: 'Antibiotic (cefiderocol) that uses bacterial iron transport for cell entry, overcoming permeability barriers' },
        { term: 'INCREMENT', definition: 'Scoring system and study predicting mortality in Enterobacterales bacteremia; guides combination therapy decisions' },
        { term: 'synergy testing', definition: 'Laboratory methods (checkerboard, time-kill) to identify enhanced activity of antibiotic combinations' },
      ],
      clinicalNotes: `**Expert Board Points:**
- Ceftazidime-avibactam + aztreonam for NDM: Aztreonam stable to MBLs; avibactam inhibits ESBLs that would hydrolyze aztreonam
- Cefiderocol: Siderophore uptake bypasses porin loss; active against all carbapenemases; monitor for emerging resistance
- Colistin loading: 300mg colistin base activity (CBA) then renally-adjusted maintenance
- Hypervirulent Klebsiella: String test positive, often causing liver abscess, may be carbapenem-susceptible
- Avoid fluoroquinolones for serious Pseudomonas: High resistance emergence rate
- Meropenem MIC ≥8: Standard dosing unlikely to achieve target; extended infusion + higher doses or alternative agent`,
    },
  },

  media: [
    {
      id: 'gram-negative-cell-wall',
      type: 'diagram',
      filename: 'gram-negative-cell-wall.svg',
      title: 'Gram-Negative Cell Envelope Structure',
      description: 'Diagram showing outer membrane, periplasmic space, and inner membrane',
    },
    {
      id: 'gram-negative-identification',
      type: 'diagram',
      filename: 'gram-negative-id-algorithm.svg',
      title: 'Gram-Negative Rod Identification Algorithm',
      description: 'Laboratory identification flowchart for common Gram-negative pathogens',
    },
  ],
  citations: [
    {
      id: 'cre-treatment-idsa',
      type: 'article',
      title: 'Infectious Diseases Society of America Guidance on the Treatment of AmpC-Lactamase-Producing Enterobacterales, CRE, and Pseudomonas aeruginosa with DTR',
      authors: ['Tamma PD', 'Aitken SL', 'Bonomo RA', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/ciac268',
    },
    {
      id: 'sanford-guide',
      type: 'textbook',
      title: 'The Sanford Guide to Antimicrobial Therapy',
      source: 'Antimicrobial Therapy, Inc.',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'parent', label: 'Bacterial Infections Overview' },
    { targetId: 'infectious-disease-sepsis', targetType: 'topic', relationship: 'related', label: 'Sepsis' },
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'infectious-disease-hai', targetType: 'topic', relationship: 'related', label: 'Healthcare-Associated Infections' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'microbiology', 'pharmacology'],
    keywords: ['Gram-negative', 'ESBL', 'CRE', 'carbapenemase', 'Pseudomonas', 'Klebsiella', 'E. coli', 'MDR'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gramNegativeBacteria;
