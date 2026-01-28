import { EducationalContent } from '../../types';

export const gramNegative: EducationalContent = {
  id: 'infectious-disease-gram-negative',
  type: 'concept',
  name: 'Gram-Negative Bacterial Infections',
  alternateNames: ['Gram-Negative Rods', 'Enteric Bacteria', 'GNB Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'Gram-negative bacteria are a large group of germs that can cause infections throughout the body and are often harder to treat than other bacteria.',
      explanation: `Gram-negative bacteria are a type of bacteria that look pink or red under a microscope when special stains are used. They are different from gram-positive bacteria and include many common causes of infections like E. coli and Salmonella.

**Common Gram-Negative Bacteria:**

1. **E. coli**
   - Lives in the intestines normally
   - Can cause UTIs and food poisoning
   - Some types are very dangerous

2. **Klebsiella**
   - Causes pneumonia and UTIs
   - Common in hospitals
   - Often resistant to antibiotics

3. **Pseudomonas**
   - Found in water and soil
   - Causes infections in lungs and wounds
   - Very hard to treat

4. **Salmonella and Shigella**
   - Cause food poisoning
   - Spread through contaminated food

**Why They Are Hard to Treat:**
- Have an extra outer membrane that blocks antibiotics
- Can quickly become resistant to multiple drugs
- Often need different antibiotics than gram-positive bacteria

**Common Infections:**
- Urinary tract infections (UTIs)
- Pneumonia (especially in hospitals)
- Wound infections
- Bloodstream infections
- Meningitis in babies

**Prevention:**
- Good hand hygiene
- Proper food handling
- Catheter care in hospitals
- Antibiotic stewardship`,
      keyTerms: [
        { term: 'gram-negative', definition: 'Bacteria that appear pink/red with Gram stain due to cell wall structure' },
        { term: 'E. coli', definition: 'Common intestinal bacteria that can cause infections' },
        { term: 'Pseudomonas', definition: 'Bacteria found in water that causes hospital infections' },
        { term: 'resistant', definition: 'Able to survive antibiotic treatment' },
      ],
      analogies: [
        'Gram-negative bacteria are like fortress cities with double walls - the extra outer membrane makes them harder for antibiotics to penetrate.',
        'Think of antibiotic resistance like a security system upgrade - bacteria learn to keep antibiotics out by changing their defenses.',
      ],
      examples: [
        'A patient gets a UTI after having a urinary catheter.',
        'A person gets food poisoning from undercooked chicken.',
        'A hospital patient develops pneumonia on a ventilator.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gram-negative bacteria possess an outer membrane containing lipopolysaccharide, making them inherently resistant to many antibiotics and capable of causing severe sepsis through endotoxin release.',
      explanation: `Gram-negative bacteria are characterized by their cell wall structure, which includes a thin peptidoglycan layer surrounded by an outer membrane containing lipopolysaccharide (LPS). This structure has important implications for antibiotic susceptibility and pathogenicity.

**Cell Structure:**

*Outer Membrane:*
- Phospholipid bilayer
- Contains proteins (porins) for nutrient transport
- Lipopolysaccharide (LPS) in outer leaflet
- Barrier to many antibiotics

*Lipopolysaccharide (LPS/Endotoxin):*
- Lipid A: Toxic component, triggers inflammation
- Core polysaccharide: Conserved structure
- O-antigen: Variable, used for serotyping
- Released when bacteria die, causes septic shock

*Periplasmic Space:*
- Between inner and outer membranes
- Contains peptidoglycan layer
- Beta-lactamases located here

**Major Gram-Negative Pathogens:**

*Enterobacterales:*
- Escherichia coli: UTIs, sepsis, meningitis
- Klebsiella pneumoniae: Pneumonia, UTIs, liver abscess
- Enterobacter species: Hospital-acquired infections
- Serratia marcescens: Respiratory, UTIs
- Proteus mirabilis: UTIs (produces urease)
- Citrobacter: Nosocomial infections

*Non-Fermenters:*
- Pseudomonas aeruginosa: VAP, wound infections, CF
- Acinetobacter baumannii: ICU infections, highly resistant
- Stenotrophomonas maltophilia: In CF, immunocompromised

*Other Important Pathogens:*
- Haemophilus influenzae: Respiratory, meningitis
- Neisseria meningitidis: Meningitis, sepsis
- Neisseria gonorrhoeae: Sexually transmitted infection
- Moraxella catarrhalis: Respiratory infections
- Legionella pneumophila: Atypical pneumonia

**Virulence Factors:**
- LPS/endotoxin
- Capsules (anti-phagocytic)
- Pili (adhesion)
- Siderophores (iron acquisition)
- Exotoxins (various)
- Biofilm formation`,
      keyTerms: [
        { term: 'lipopolysaccharide (LPS)', definition: 'Component of gram-negative outer membrane; also called endotoxin' },
        { term: 'endotoxin', definition: 'Toxin released when bacteria die; causes fever and shock' },
        { term: 'Enterobacterales', definition: 'Order of gram-negative rods including E. coli and Klebsiella' },
        { term: 'non-fermenters', definition: 'Bacteria that do not ferment glucose' },
        { term: 'porins', definition: 'Channel proteins in outer membrane' },
      ],
      analogies: [
        'The outer membrane of gram-negative bacteria is like a bulletproof vest - it protects them from many antibiotic attacks that would kill gram-positive bacteria.',
      ],
      examples: [
        'Klebsiella pneumoniae causing a liver abscess in a diabetic patient.',
        'Pseudomonas aeruginosa infecting a burn wound.',
        'E. coli causing neonatal meningitis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gram-negative pathogenesis involves endotoxin-mediated inflammation, antibiotic resistance through multiple mechanisms, and biofilm formation, with increasing prevalence of multidrug-resistant strains limiting therapeutic options.',
      explanation: `Gram-negative bacteria cause significant morbidity and mortality through diverse virulence mechanisms, with antibiotic resistance emerging as a critical global health threat.

**Pathogenesis Mechanisms:**

*Endotoxin-Mediated Effects:*
- Lipid A binds TLR4 on immune cells
- Activates NF-kB pathway
- Cytokine cascade: TNF-alpha, IL-1, IL-6
- Complement activation
- Coagulation cascade activation
- Results: Fever, hypotension, DIC, organ failure

*Iron Acquisition:*
- Siderophores steal iron from host
- Essential for bacterial growth
- High-affinity iron chelators
- Example: Enterobactin, pyoverdine

*Antibiotic Resistance Mechanisms:*

1. **Enzymatic Degradation**
   - Beta-lactamases: ESBLs, carbapenemases
   - Aminoglycoside-modifying enzymes
   - Chloramphenicol acetyltransferases

2. **Target Modification**
   - Mutated DNA gyrase (fluoroquinolone resistance)
   - Modified ribosomal proteins
   - Altered penicillin-binding proteins

3. **Efflux Pumps**
   - Multi-drug efflux systems
   - AcrAB-TolC in E. coli
   - Mex systems in Pseudomonas

4. **Porin Loss**
   - Reduced outer membrane permeability
   - OprD loss in carbapenem-resistant Pseudomonas

5. **Biofilm Formation**
   - Protects from antibiotics and immune system
   - Altered bacterial metabolism
   - Common in device-related infections

**Multidrug-Resistant (MDR) Gram-Negatives:**

*ESBL-Producing Organisms:*
- Extended-spectrum beta-lactamases
- Hydrolyze penicillins, cephalosporins, aztreonam
- Susceptible to carbapenems
- Common in E. coli, Klebsiella

*Carbapenem-Resistant Enterobacterales (CRE):*
- Carbapenemase producers (KPC, NDM, VIM, OXA-48)
- Extremely limited treatment options
- Associated with high mortality
- Strict infection control measures

*Carbapenem-Resistant Pseudomonas and Acinetobacter:*
- Porin loss + efflux + beta-lactamases
- Colistin often only option
- Increasing resistance to last-resort agents`,
      keyTerms: [
        { term: 'TLR4', definition: 'Toll-like receptor 4; recognizes LPS' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase' },
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales' },
        { term: 'siderophore', definition: 'Iron-chelating compound produced by bacteria' },
        { term: 'carbapenemase', definition: 'Enzyme that breaks down carbapenem antibiotics' },
      ],
    },
    4: {
      level: 4,
      summary: 'Management of gram-negative infections requires source control, appropriate empiric therapy based on local resistance patterns, antibiotic de-escalation, and therapeutic drug monitoring, with special considerations for MDR organisms and biofilm-associated infections.',
      explanation: `Optimal management of gram-negative infections integrates antimicrobial stewardship principles, pharmacokinetic optimization, and infection control to improve outcomes while limiting resistance emergence.

**Empiric Therapy Selection:**

*Community-Acquired Infections:*
- Pyelonephritis: Ceftriaxone, fluoroquinolones
- Intra-abdominal: Piperacillin-tazobactam, ceftriaxone + metronidazole
- Pneumonia: Ceftriaxone, respiratory fluoroquinolones

*Healthcare-Associated Infections:*
- Risk factors for resistance guide therapy
- Prior cultures and colonization
- Local antibiogram
- Piperacillin-tazobactam, cefepime, carbapenems

*Antipseudomonal Coverage Needed:*
- Piperacillin-tazobactam
- Cefepime or ceftazidime
- Meropenem or imipenem
- Aztreonam (penicillin-allergic)
- Aminoglycosides or fluoroquinolones (combination)

**Pharmacokinetic Considerations:**

*Beta-Lactams:*
- Time-dependent killing: Maximize %fT>MIC
- Extended or continuous infusions
- Loading doses in critical illness
- Renal adjustment required

*Aminoglycosides:*
- Concentration-dependent killing
- Once-daily dosing (except pregnancy, endocarditis)
- Nephrotoxicity monitoring
- Synergy for serious gram-negative infections

*Fluoroquinolones:*
- Concentration-dependent killing
- Resistance rising - use judiciously
- QT prolongation, tendon rupture risks
- Drug interactions (CYP metabolism)

**MDR Gram-Negative Treatment:**

*CRE Infections:*
- Ceftazidime-avibactam (KPC inhibitor)
- Meropenem-vaborbactam
- Imipenem-cilastatin-relebactam
- Cefiderocol (siderophore cephalosporin)
- Colistin or polymyxin B (nephrotoxic)
- Combination therapy often used

*MDR Pseudomonas:*
- Ceftolozane-tazobactam
- Ceftazidime-avibactam
- Cefiderocol
- Colistin

*Acinetobacter:*
- Sulbactam-durlobactam
- High-dose ampicillin-sulbactam
- Colistin
- Minocycline or tigecycline

**Biofilm-Associated Infections:**
- Device removal often required
- Higher antibiotic concentrations needed
- Rifampin combinations for staphylococci
- Longer treatment courses
- Chronic suppressive therapy sometimes needed`,
      keyTerms: [
        { term: 'fT>MIC', definition: 'Fraction of time free drug concentration exceeds MIC' },
        { term: 'antibiogram', definition: 'Summary of antimicrobial susceptibilities for local isolates' },
        { term: 'avibactam', definition: 'Non-beta-lactam beta-lactamase inhibitor' },
        { term: 'cefiderocol', definition: 'Siderophore cephalosporin active against resistant organisms' },
        { term: 'polymyxin', definition: 'Last-resort antibiotic with significant toxicity' },
      ],
      clinicalNotes: 'Always obtain cultures before starting antibiotics when possible. For suspected MDR gram-negative infections, consider combination therapy initially. Extended-infusion beta-lactams improve outcomes in critical illness. Therapeutic drug monitoring is essential for aminoglycosides and vancomycin.',
    },
    5: {
      level: 5,
      summary: 'Expert management of gram-negative infections encompasses molecular diagnostic integration, novel beta-lactam/beta-lactamase inhibitor combinations, antimicrobial stewardship in immunocompromised hosts, and infection control of carbapenem-resistant organisms.',
      explanation: `Contemporary management of gram-negative infections requires sophisticated use of rapid diagnostics, newer antimicrobial agents, and precision approaches for high-risk patient populations.

**Rapid Diagnostic Technologies:**

*Molecular Methods:*
- FilmArray: Respiratory and bloodstream pathogen panels
- PCR for resistance genes: blaKPC, blaNDM, blaVIM, blaOXA-48
- T2MR: Direct detection from blood
- Accelerates de-escalation and targeted therapy

*MALDI-TOF MS:*
- Rapid species identification
- Direct from blood cultures
- Resistance detection with added tests

**Novel Antimicrobial Agents:**

*Cefiderocol:*
- Siderophore cephalosporin
- Uses iron transport to enter bacteria
- Active against carbapenem-resistant organisms
- FDA approved for complicated UTIs, HAP/VAP

*Meropenem-vaborbactam:*
- Carbapenem + cyclic boronic acid inhibitor
- KPC inhibitor
- NOT active against metallo-beta-lactamases

*Imipenem-cilastatin-relebactam:*
- Dihydroorotate dehydrogenase inhibitor
- KPC and some ESBL coverage

*Cefepime-zidebactam and cefepime-taniborbactam:*
- In development
- Broad beta-lactamase coverage

**Combination Therapy Evidence:**

*Rationale:*
- Synergistic killing
- Prevent resistance emergence
- Enhanced endotoxin release consideration

*Clinical Data:*
- Beta-lactam + aminoglycoside: No mortality benefit in most infections
- Colistin + rifampin for XDR Acinetobacter: Mixed results
- Carbapenem-sparing strategies being studied

**Special Populations:**

*Neutropenic Fever:*
- Antipseudomonal beta-lactam required
- Add vancomycin if suspected catheter infection
- Consider adding fluoroquinolone or aminoglycoside
- Empiric antifungal if persistent fever

*Cystic Fibrosis:*
- Higher antibiotic doses needed
- Chronic Pseudomonas colonization
- MDR organisms common
- Aerosolized antibiotics as adjunct

*Solid Organ Transplant:*
- Donor-derived infections
- Reactivation of latent infections
- Drug interactions with immunosuppressants

**Infection Control of CRE:**

*Active Surveillance:*
- Rectal screening on admission
- Contact precautions for carriers
- Cohorting patients and staff

*Environmental Controls:*
- Enhanced cleaning protocols
- Terminal disinfection
- Equipment dedicated to CRE patients

*Decolonization:*
- Limited evidence
- Selective digestive decontamination in ICU

**Antibiotic Stewardship:**
- Procalcitonin-guided discontinuation
- Short-course therapy (7 days) when appropriate
- IV-to-oral conversion for fluoroquinolones, TMP-SMX
- Daily reassessment of therapy`,
      keyTerms: [
        { term: 'metallo-beta-lactamase', definition: 'Carbapenemase requiring zinc; not inhibited by avibactam' },
        { term: 'XDR', definition: 'Extensively drug-resistant' },
        { term: 'T2MR', definition: 'Magnetic resonance-based rapid diagnostic platform' },
        { term: 'donor-derived infection', definition: 'Infection transmitted through transplanted organ' },
        { term: 'selective digestive decontamination', definition: 'Topical antibiotics to reduce GI bacterial load' },
      ],
      clinicalNotes: 'The pipeline for new gram-negative antibiotics has improved but resistance continues to evolve. Cefiderocol represents a breakthrough for carbapenem-resistant infections. For XDR organisms, combination therapy and expert consultation are essential. Antimicrobial stewardship must balance empiric coverage for sick patients with de-escalation when possible.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious'],
    topics: ['bacterial-infections', 'resistance', 'gram-negative'],
    keywords: ['E. coli', 'Klebsiella', 'Pseudomonas', 'CRE', 'ESBL', 'endotoxin'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default gramNegative;
