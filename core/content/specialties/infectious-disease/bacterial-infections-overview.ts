import { EducationalContent } from '../../types';

export const bacterialInfectionsOverview: EducationalContent = {
  id: 'infectious-disease-bacterial-overview',
  type: 'concept',
  name: 'Bacterial Infections Overview',
  alternateNames: ['Bacterial Diseases', 'Bacteremia', 'Bacterial Pathogenesis'],

  levels: {
    1: {
      level: 1,
      summary: 'Bacteria are tiny living things that can sometimes make us sick by invading our bodies and causing infections.',
      explanation: `Bacteria are microscopic living organisms - so small you need a microscope to see them. Most bacteria are harmless or even helpful (like the ones in your gut that help digest food), but some can make you sick.

**How Bacteria Cause Infections:**
When harmful bacteria get inside your body, they can:
- Multiply quickly (doubling their numbers every 20-30 minutes!)
- Release toxins (poisons) that damage your cells
- Trigger your immune system to fight back, causing inflammation

**Common Bacterial Infections:**
- Strep throat (Streptococcus bacteria)
- Urinary tract infections (usually E. coli)
- Skin infections like impetigo
- Ear infections
- Pneumonia (lung infection)

**How Bacteria Spread:**
- Coughing and sneezing (respiratory droplets)
- Touching contaminated surfaces
- Eating contaminated food or water
- Through cuts in the skin
- Close contact with infected people

**Treatment:**
Antibiotics are medicines that kill bacteria or stop them from growing. It's important to take all your antibiotics as prescribed, even if you feel better early!`,
      keyTerms: [
        { term: 'bacteria', definition: 'Tiny, single-celled living things that can cause infections' },
        { term: 'infection', definition: 'When germs get inside your body and make you sick' },
        { term: 'antibiotics', definition: 'Medicines that fight bacterial infections' },
        { term: 'toxin', definition: 'A poison made by bacteria that can harm your body' },
      ],
      analogies: [
        'Bacteria are like uninvited guests who sneak into your house (body) and start making a mess. Antibiotics are like the security team that kicks them out.',
        'Your immune system fighting bacteria is like an army defending a castle from invaders.',
      ],
      examples: [
        'When you have strep throat, the Streptococcus bacteria are living in your throat and releasing toxins that make it hurt to swallow.',
        'Food poisoning from undercooked chicken can be caused by Salmonella bacteria.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bacterial infections occur when pathogenic bacteria colonize host tissues, evade immune defenses, and cause disease through direct tissue damage or toxin production.',
      explanation: `Bacteria are prokaryotic organisms (cells without a nucleus) that can cause disease in humans through various mechanisms.

**Bacterial Classification:**
Bacteria are classified in several ways:

1. **By Shape:**
   - Cocci (round/spherical)
   - Bacilli (rod-shaped)
   - Spirilla (spiral-shaped)

2. **By Gram Stain:**
   - Gram-positive (stain purple, thick cell wall)
   - Gram-negative (stain pink, thin cell wall with outer membrane)

3. **By Oxygen Requirements:**
   - Aerobic (need oxygen)
   - Anaerobic (can't survive with oxygen)
   - Facultative (can live with or without oxygen)

**How Bacteria Cause Disease:**

1. **Colonization:** Bacteria attach to host tissues using adhesins (sticky proteins)

2. **Invasion:** Some bacteria can enter cells and spread through tissues

3. **Toxin Production:**
   - Exotoxins: Released by living bacteria
   - Endotoxins: Released when bacteria die (Gram-negative)

4. **Immune Evasion:** Bacteria have ways to hide from or fight your immune system

**Body's Defense:**
- Skin and mucous membranes (physical barriers)
- White blood cells that eat bacteria (phagocytes)
- Antibodies that mark bacteria for destruction
- Fever to slow bacterial growth

**Treatment Principles:**
- Narrow-spectrum antibiotics target specific bacteria
- Broad-spectrum antibiotics target many types
- Culture and sensitivity testing identifies the best antibiotic`,
      keyTerms: [
        { term: 'pathogen', definition: 'A microorganism that causes disease', pronunciation: 'PATH-oh-jen' },
        { term: 'Gram stain', definition: 'A laboratory test that classifies bacteria by their cell wall properties' },
        { term: 'exotoxin', definition: 'A toxin secreted by living bacteria into surrounding tissue' },
        { term: 'endotoxin', definition: 'A toxin released from the cell wall of dying Gram-negative bacteria' },
        { term: 'colonization', definition: 'When bacteria establish themselves on a body surface without causing disease' },
      ],
      analogies: [
        'The Gram stain is like a security scanner that divides bacteria into two main groups based on their "uniform" (cell wall structure).',
        'Colonization is like bacteria setting up camp, while infection is when they start attacking.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bacterial pathogenesis involves complex host-pathogen interactions including adherence via adhesins, tissue invasion, toxin-mediated damage, and evasion of innate and adaptive immune responses.',
      explanation: `Bacterial infections result from a dynamic interplay between microbial virulence factors and host defense mechanisms.

**Bacterial Virulence Factors:**

1. **Adhesins**
   - Fimbriae/pili: Hair-like projections for attachment
   - Afimbrial adhesins: Surface proteins binding host receptors
   - Example: E. coli P pili bind uroepithelial cells in UTIs

2. **Capsules**
   - Polysaccharide coating preventing phagocytosis
   - Example: Streptococcus pneumoniae capsule (93 serotypes)

3. **Toxins**
   - **Exotoxins (protein toxins):**
     * Type A-B toxins: Binding (B) and active (A) subunits
     * Pore-forming toxins: Create membrane pores
     * Superantigens: Cause massive T-cell activation
   - **Endotoxin (LPS):**
     * Lipid A triggers cytokine release
     * Can cause septic shock

4. **Secretion Systems**
   - Type III: "Molecular syringe" injects effectors
   - Type IV: DNA/protein transfer
   - Type VI: Bacterial warfare between species

**Host Defense Mechanisms:**

1. **Innate Immunity**
   - Pattern recognition receptors (TLRs, NOD-like receptors)
   - Neutrophil/macrophage phagocytosis
   - Complement activation
   - Antimicrobial peptides (defensins)

2. **Adaptive Immunity**
   - Antibody opsonization
   - T-helper responses (Th1 for intracellular pathogens)
   - Memory cell formation

**Antibiotic Mechanisms:**
- Cell wall synthesis inhibitors: Beta-lactams, vancomycin
- Protein synthesis inhibitors: Aminoglycosides, macrolides
- DNA replication inhibitors: Fluoroquinolones
- Folate synthesis inhibitors: Sulfonamides, trimethoprim
- Cell membrane disruptors: Daptomycin, colistin`,
      keyTerms: [
        { term: 'virulence factor', definition: 'A bacterial molecule that enables infection or enhances disease severity' },
        { term: 'adhesin', definition: 'Surface molecules that mediate bacterial attachment to host cells' },
        { term: 'superantigen', definition: 'Toxin that activates large numbers of T cells non-specifically, causing cytokine storm' },
        { term: 'opsonization', definition: 'Coating of pathogens with antibodies or complement to enhance phagocytosis' },
        { term: 'lipopolysaccharide (LPS)', definition: 'Major component of Gram-negative outer membrane; endotoxin' },
      ],
      clinicalNotes: 'Cultures should be obtained before starting antibiotics when possible. Blood cultures (2 sets from different sites) are essential for suspected bacteremia. Gram stain results can guide empiric therapy while awaiting cultures.',
    },
    4: {
      level: 4,
      summary: 'Bacterial pathogenicity emerges from the coordinated expression of virulence genes regulated by quorum sensing, two-component systems, and environmental signals, resulting in tissue-specific disease manifestations and triggering specific host immune cascades.',
      explanation: `Understanding bacterial pathogenesis requires integration of molecular mechanisms with clinical manifestations.

**Regulation of Virulence:**

1. **Quorum Sensing**
   - Bacteria communicate via autoinducers
   - Cell density-dependent gene expression
   - Controls biofilm formation, toxin production
   - Example: P. aeruginosa las/rhl systems

2. **Two-Component Systems**
   - Sensor kinase detects environment
   - Response regulator activates genes
   - Example: PhoP/PhoQ in Salmonella survival in macrophages

3. **Pathogenicity Islands**
   - Large genomic regions encoding virulence factors
   - Acquired via horizontal gene transfer
   - Different GC content from core genome

**Intracellular vs. Extracellular Pathogens:**

*Intracellular Pathogens:*
- Evade antibody-mediated immunity
- Require cell-mediated (Th1) responses
- Examples: Mycobacterium, Listeria, Legionella
- Survive within phagocytic vacuoles or escape to cytoplasm

*Extracellular Pathogens:*
- Resist complement and phagocytosis
- Antibody responses critical for clearance
- Examples: Streptococcus, Staphylococcus, E. coli

**Biofilm Formation:**
- Sessile bacterial communities in extracellular matrix
- 100-1000x increased antibiotic resistance
- Clinical relevance: catheter infections, endocarditis, chronic wounds
- Stages: Attachment → Microcolony → Maturation → Dispersal

**Immune Evasion Strategies:**

1. **Antigenic Variation**
   - Phase variation (on/off switching)
   - Antigenic shift (gene recombination)
   - Example: Neisseria gonorrhoeae pili variation

2. **Complement Evasion**
   - Capsules prevent C3b deposition
   - Surface proteases cleave complement proteins
   - Binding host regulators (Factor H)

3. **Phagocytosis Resistance**
   - Capsule, protein A, M protein
   - Killing of phagocytes
   - Survival within phagocytes

4. **Immunomodulation**
   - Superantigens
   - Cytokine manipulation
   - Apoptosis induction in immune cells

**Antibiotic Pharmacodynamics:**

*Time-Dependent Killing:*
- Efficacy depends on time above MIC
- Beta-lactams, vancomycin
- Optimize with extended/continuous infusions

*Concentration-Dependent Killing:*
- Efficacy depends on peak concentration (Cmax/MIC)
- Aminoglycosides, fluoroquinolones
- Optimize with once-daily dosing

*AUC-Dependent:*
- Total drug exposure matters (AUC/MIC)
- Vancomycin, fluoroquinolones for some organisms`,
      keyTerms: [
        { term: 'quorum sensing', definition: 'Cell-to-cell bacterial communication system regulating gene expression based on population density' },
        { term: 'pathogenicity island', definition: 'Large chromosomal region containing clustered virulence genes acquired horizontally' },
        { term: 'biofilm', definition: 'Structured bacterial community enclosed in self-produced extracellular matrix, highly resistant to antibiotics' },
        { term: 'MIC (minimum inhibitory concentration)', definition: 'Lowest antibiotic concentration that inhibits visible bacterial growth' },
        { term: 'antigenic variation', definition: 'Mechanism by which pathogens alter surface antigens to evade adaptive immunity' },
      ],
      clinicalNotes: 'Biofilm infections (prosthetic joint, endocarditis vegetations) often require surgical debridement in addition to prolonged antibiotics. Consider rifampin for staphylococcal biofilm infections. Source control is fundamental to treating any localized infection.',
    },
    5: {
      level: 5,
      summary: 'Bacterial infections represent dynamic host-pathogen equilibria influenced by microbiome composition, host genetic polymorphisms, and bacterial population heterogeneity, with therapeutic success dependent on optimized pharmacokinetic-pharmacodynamic targets and resistance containment strategies.',
      explanation: `Contemporary understanding of bacterial infections integrates molecular pathogenesis with precision medicine approaches and antimicrobial stewardship.

**Advanced Pathogenesis Concepts:**

1. **Microbiome-Pathogen Interactions**
   - Colonization resistance by commensal bacteria
   - Antibiotic-induced dysbiosis enabling C. difficile, VRE
   - Microbiome modulates mucosal immunity
   - Fecal microbiota transplantation restores colonization resistance

2. **Bacterial Heterogeneity**
   - Persister cells: Metabolically dormant, antibiotic-tolerant subpopulation
   - Not genetically resistant but phenotypically tolerant
   - Implicated in relapsing infections
   - Combination therapy may address persisters

3. **Host Genetic Susceptibility**
   - TLR polymorphisms: TLR4 variants affect Gram-negative sepsis outcomes
   - MBL deficiency: Increased invasive pneumococcal disease
   - IL-12/IFN-γ pathway defects: Mycobacterial susceptibility
   - Complement deficiencies: Neisserial infections

**Diagnostic Advances:**

1. **Molecular Diagnostics**
   - Multiplex PCR panels (e.g., BioFire FilmArray)
   - 16S rRNA gene sequencing for culture-negative infections
   - Metagenomic next-generation sequencing
   - Direct-from-specimen resistance gene detection

2. **MALDI-TOF Mass Spectrometry**
   - Rapid species identification from colonies
   - Emerging direct-from-specimen applications
   - Resistance prediction algorithms in development

3. **Procalcitonin and Biomarkers**
   - Procalcitonin: Bacterial vs. viral differentiation
   - Serial monitoring guides antibiotic duration
   - Presepsin, IL-6, mid-regional proadrenomedullin

**Therapeutic Optimization:**

1. **PK/PD-Guided Dosing**
   - Beta-lactams: Target 100% fT>MIC (or 100% fT>4×MIC for severe infections)
   - Vancomycin: AUC/MIC 400-600 for MRSA
   - Aminoglycosides: Cmax/MIC ≥10
   - Therapeutic drug monitoring for individualization

2. **Beta-Lactam Infusion Strategies**
   - Extended infusion (3-4 hours): Piperacillin-tazobactam, meropenem
   - Continuous infusion: Evidence in critically ill
   - Better fT>MIC attainment for resistant organisms

3. **Combination Therapy Indications**
   - Empiric coverage in severe sepsis
   - Synergy: Beta-lactam + aminoglycoside for endocarditis
   - Resistance prevention: TB, Pseudomonas
   - Biofilm penetration: Rifampin combinations

**Resistance Mechanisms in Detail:**

1. **Enzymatic Inactivation**
   - Beta-lactamases: ESBLs, AmpC, carbapenemases (KPC, NDM, OXA-48)
   - Aminoglycoside-modifying enzymes (AAC, ANT, APH)

2. **Target Modification**
   - PBP alterations: MRSA (mecA/mecC → PBP2a)
   - Ribosomal methylation: Macrolide resistance (erm genes)
   - DNA gyrase mutations: Fluoroquinolone resistance

3. **Efflux Pumps**
   - Multidrug resistance (MDR) phenotype
   - MexAB-OprM in Pseudomonas
   - AcrAB-TolC in Enterobacterales

4. **Permeability Changes**
   - Porin loss: Carbapenem resistance in Gram-negatives
   - OmpK35/K36 loss in Klebsiella

**Emerging Therapeutics:**
- Novel beta-lactam/beta-lactamase inhibitor combinations
- Bacteriophage therapy for MDR infections
- Antivirulence strategies
- Monoclonal antibodies (bezlotoxumab for C. diff)
- Immunomodulatory adjuncts`,
      keyTerms: [
        { term: 'persister cells', definition: 'Phenotypically tolerant bacterial subpopulation that survives antibiotic exposure despite lack of genetic resistance' },
        { term: 'colonization resistance', definition: 'Protection against pathogen establishment provided by commensal microbiota' },
        { term: 'carbapenemase', definition: 'Beta-lactamase enzyme capable of hydrolyzing carbapenem antibiotics (e.g., KPC, NDM, OXA-48)' },
        { term: 'fT>MIC', definition: 'Fraction of dosing interval that free drug concentration exceeds MIC; key PK/PD parameter for time-dependent antibiotics' },
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight mass spectrometry; rapid bacterial identification technique' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- ESBL producers: Treat with carbapenems (not cephalosporins, even if susceptible in vitro)
- CRE treatment: Ceftazidime-avibactam (for KPC), meropenem-vaborbactam, cefiderocol
- NDM producers: Aztreonam + ceftazidime-avibactam combination (ceftazidime-avibactam alone inactive)
- Beta-lactam allergy: 1% cross-reactivity penicillin → cephalosporin; skin testing guides use
- Rifampin induces CYP450: Check for drug interactions (reduces efficacy of many medications)`,
    },
  },

  media: [
    {
      id: 'bacterial-cell-structure',
      type: 'diagram',
      filename: 'bacterial-cell-structure.svg',
      title: 'Bacterial Cell Structure',
      description: 'Diagram showing Gram-positive vs Gram-negative cell wall differences',
    },
    {
      id: 'antibiotic-mechanisms',
      type: 'diagram',
      filename: 'antibiotic-mechanisms.svg',
      title: 'Antibiotic Mechanisms of Action',
      description: 'Overview of antibiotic targets in bacterial cells',
    },
  ],
  citations: [
    {
      id: 'mandell-id-textbook',
      type: 'textbook',
      title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases',
      authors: ['Bennett JE', 'Dolin R', 'Blaser MJ'],
      source: 'Elsevier',
      chapter: 'Chapters 1-20',
    },
    {
      id: 'sanford-guide',
      type: 'textbook',
      title: 'The Sanford Guide to Antimicrobial Therapy',
      source: 'Antimicrobial Therapy, Inc.',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-gram-positive', targetType: 'topic', relationship: 'child', label: 'Gram-Positive Bacteria' },
    { targetId: 'infectious-disease-gram-negative', targetType: 'topic', relationship: 'child', label: 'Gram-Negative Bacteria' },
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'microbiology', 'pharmacology'],
    keywords: ['bacteria', 'antibiotics', 'infection', 'pathogenesis', 'virulence', 'resistance'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bacterialInfectionsOverview;
