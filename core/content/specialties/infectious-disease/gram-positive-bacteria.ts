import { EducationalContent } from '../../types';

export const gramPositiveBacteria: EducationalContent = {
  id: 'infectious-disease-gram-positive',
  type: 'concept',
  name: 'Gram-Positive Bacterial Infections',
  alternateNames: ['Gram+ Bacteria', 'Gram-Positive Cocci', 'Gram-Positive Bacilli'],

  levels: {
    1: {
      level: 1,
      summary: 'Gram-positive bacteria are germs with a thick protective coat that stain purple in lab tests and cause common infections like strep throat and skin infections.',
      explanation: `Gram-positive bacteria are one of the two main types of bacteria. Scientists identify them by a special staining technique - these bacteria turn purple because they have a thick outer wall.

**Common Gram-Positive Bacteria:**

1. **Staphylococcus (Staph)**
   - Lives on skin and in the nose
   - Causes skin infections, boils, and sometimes more serious infections
   - MRSA is a type that is resistant to many antibiotics

2. **Streptococcus (Strep)**
   - Causes strep throat, ear infections, and pneumonia
   - Group A Strep can cause "flesh-eating" disease (rare but serious)
   - Group B Strep can infect newborn babies

3. **Enterococcus**
   - Lives in the intestines
   - Can cause urinary tract and blood infections
   - Some types are resistant to antibiotics (VRE)

**Common Infections:**
- Skin infections (cellulitis, impetigo, abscesses)
- Strep throat
- Ear infections
- Pneumonia
- Bone infections

**Treatment:**
These bacteria are usually treated with antibiotics like penicillin, amoxicillin, or cephalosporins. For resistant bacteria like MRSA, doctors use special antibiotics like vancomycin or doxycycline.`,
      keyTerms: [
        { term: 'Gram-positive', definition: 'Bacteria that stain purple and have a thick protective wall' },
        { term: 'Staphylococcus', definition: 'Round bacteria often found on skin that can cause infections' },
        { term: 'Streptococcus', definition: 'Round bacteria that cause strep throat and other infections' },
        { term: 'MRSA', definition: 'A type of staph bacteria resistant to common antibiotics' },
      ],
      analogies: [
        'The thick cell wall of Gram-positive bacteria is like a sturdy castle wall that protects the bacteria but also holds onto the purple dye.',
        'MRSA is like a bug that has developed armor against the weapons (antibiotics) we usually use.',
      ],
      examples: [
        'Strep throat is caused by Group A Streptococcus bacteria living in your throat.',
        'A skin boil or pimple that becomes infected is often caused by Staphylococcus aureus.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gram-positive bacteria possess a thick peptidoglycan cell wall that retains crystal violet stain and include major pathogens such as Staphylococcus, Streptococcus, and Enterococcus species.',
      explanation: `Gram-positive bacteria are characterized by their thick peptidoglycan layer (20-80nm) that retains the crystal violet-iodine complex during Gram staining.

**Major Gram-Positive Cocci:**

1. **Staphylococcus aureus**
   - Catalase-positive, coagulase-positive
   - Golden hemolysis on blood agar
   - Diseases: Skin/soft tissue infections, osteomyelitis, endocarditis, pneumonia, toxic shock syndrome
   - MRSA: mecA gene encodes altered PBP2a

2. **Coagulase-Negative Staphylococci (CoNS)**
   - S. epidermidis: Prosthetic device infections
   - S. saprophyticus: UTIs in young women

3. **Streptococcus Species**
   - **S. pyogenes (Group A Strep/GAS):**
     * Pharyngitis, cellulitis, necrotizing fasciitis
     * Post-strep complications: Rheumatic fever, glomerulonephritis
   - **S. agalactiae (Group B Strep/GBS):**
     * Neonatal sepsis and meningitis
     * Maternal screening at 36-37 weeks
   - **S. pneumoniae (Pneumococcus):**
     * Community-acquired pneumonia, meningitis, otitis media
     * Lancet-shaped diplococci
   - **Viridans Group Streptococci:**
     * Endocarditis, dental infections
     * Alpha-hemolytic

4. **Enterococcus**
   - E. faecalis (80-90%), E. faecium (10-20%)
   - UTIs, bacteremia, endocarditis
   - Intrinsically resistant to cephalosporins
   - VRE: Vancomycin-resistant strains

**Major Gram-Positive Bacilli:**

1. **Clostridium Species** (Anaerobic, spore-forming)
   - C. difficile: Antibiotic-associated diarrhea
   - C. perfringens: Gas gangrene
   - C. tetani: Tetanus
   - C. botulinum: Botulism

2. **Listeria monocytogenes**
   - Meningitis in elderly, neonates, immunocompromised
   - Foodborne (unpasteurized dairy, deli meats)

3. **Bacillus Species**
   - B. anthracis: Anthrax
   - B. cereus: Food poisoning`,
      keyTerms: [
        { term: 'peptidoglycan', definition: 'The major component of bacterial cell walls made of sugars and amino acids', pronunciation: 'pep-ti-do-GLY-kan' },
        { term: 'catalase', definition: 'Enzyme that breaks down hydrogen peroxide; distinguishes Staphylococcus (+) from Streptococcus (-)', pronunciation: 'CAT-a-lase' },
        { term: 'coagulase', definition: 'Enzyme that clots plasma; distinguishes S. aureus from other staphylococci' },
        { term: 'alpha-hemolysis', definition: 'Partial lysis of red blood cells causing green discoloration on blood agar' },
        { term: 'beta-hemolysis', definition: 'Complete lysis of red blood cells causing clear zone on blood agar' },
      ],
      analogies: [
        'Catalase and coagulase tests are like fingerprinting - they help identify which type of Staphylococcus you are dealing with.',
        'The Lancefield grouping system is like a surname for streptococci, helping identify family groups.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gram-positive bacteria pathogenesis involves specific virulence factors including surface proteins, toxins, and immune evasion mechanisms, with treatment guided by species identification and susceptibility patterns.',
      explanation: `Understanding Gram-positive pathogenesis requires knowledge of virulence mechanisms and antimicrobial options.

**Staphylococcus aureus Virulence:**

*Surface Factors:*
- Protein A: Binds Fc portion of IgG, prevents opsonization
- Clumping factor (fibrinogen binding)
- Fibronectin-binding proteins: Endocarditis pathogenesis
- Biofilm formation on prosthetic material

*Toxins:*
- Alpha-toxin (hemolysin): Pore-forming, cytolytic
- Panton-Valentine Leukocidin (PVL): Associated with CA-MRSA, necrotizing pneumonia
- Toxic Shock Syndrome Toxin-1 (TSST-1): Superantigen
- Exfoliative toxins: Scalded skin syndrome
- Enterotoxins: Staphylococcal food poisoning

*Enzymes:*
- Coagulase: Fibrin deposition around bacteria
- Staphylokinase: Fibrinolysis for spread
- Lipases, proteases, hyaluronidase: Tissue destruction

**Streptococcal Virulence:**

*S. pyogenes (GAS):*
- M protein: Antiphagocytic, basis for serotyping
- Streptolysin O and S: Hemolysins
- Streptococcal pyrogenic exotoxins (SPEs): Superantigens
- Hyaluronidase, streptokinase: Tissue spread

*S. pneumoniae:*
- Polysaccharide capsule: Antiphagocytic (93 serotypes)
- Pneumolysin: Pore-forming toxin
- Autolysin: Cell lysis releases inflammatory contents
- IgA protease: Mucosal colonization

**Antimicrobial Treatment:**

*First-Line Options:*
- MSSA: Nafcillin/oxacillin or cefazolin
- Streptococci: Penicillin G or ampicillin
- Enterococci: Ampicillin (if susceptible)

*MRSA Treatment:*
- IV: Vancomycin, daptomycin, linezolid
- Oral: TMP-SMX, doxycycline, clindamycin, linezolid

*VRE Treatment:*
- Linezolid, daptomycin
- Tigecycline (not for bloodstream infections)

**Laboratory Identification:**

| Organism | Catalase | Coagulase | Hemolysis | Special |
|----------|----------|-----------|-----------|---------|
| S. aureus | + | + | Beta | Golden pigment |
| S. epidermidis | + | - | Gamma | Novobiocin-S |
| S. saprophyticus | + | - | Gamma | Novobiocin-R |
| S. pyogenes | - | N/A | Beta | Bacitracin-S, PYR+ |
| S. agalactiae | - | N/A | Beta | CAMP+, hippurate+ |
| S. pneumoniae | - | N/A | Alpha | Optochin-S, bile soluble |
| Enterococcus | - | N/A | Gamma/Alpha | Bile esculin+, 6.5% NaCl+ |`,
      keyTerms: [
        { term: 'Protein A', definition: 'S. aureus surface protein that binds IgG Fc region, blocking opsonophagocytosis' },
        { term: 'Panton-Valentine Leukocidin', definition: 'Pore-forming toxin of S. aureus associated with severe skin infections and necrotizing pneumonia', pronunciation: 'PAN-ton VAL-en-teen LOO-ko-SY-din' },
        { term: 'M protein', definition: 'Major virulence factor of S. pyogenes; antiphagocytic and basis for serological typing' },
        { term: 'superantigen', definition: 'Toxin that activates T cells by cross-linking MHC class II and T-cell receptor, causing cytokine storm' },
        { term: 'CAMP test', definition: 'Laboratory test identifying Group B Strep by enhanced hemolysis with S. aureus' },
      ],
      clinicalNotes: 'For serious S. aureus infections, always check for MRSA risk factors (recent hospitalization, prior MRSA, dialysis, injection drug use). Blood cultures should be repeated at 48-72 hours to document clearance; persistent bacteremia suggests endocarditis or metastatic infection.',
    },
    4: {
      level: 4,
      summary: 'Gram-positive infections require understanding of bacterial genomics, resistance mechanisms, PK/PD optimization, and infection syndrome-specific management including source control and duration guidelines.',
      explanation: `Advanced management of Gram-positive infections integrates molecular diagnostics, resistance epidemiology, and evidence-based treatment protocols.

**Staphylococcus aureus Bacteremia (SAB) Management:**

*Classification:*
- Uncomplicated: No endocarditis, removable source, negative follow-up cultures, no metastatic infection
- Complicated: Endocarditis, persistent bacteremia, metastatic infection, or prosthetic material

*Workup:*
- Repeat blood cultures every 48-72 hours until negative
- Echocardiography: TTE for all; TEE if prosthetic valve, high clinical suspicion, or TTE indeterminate
- Imaging for source if occult

*Treatment Duration:*
- Uncomplicated: 14 days (from first negative culture)
- Complicated: 4-6 weeks
- Infective endocarditis: 6 weeks (native valve), 6+ weeks (prosthetic)

**MRSA Resistance Mechanisms:**

*mecA/mecC Genes:*
- Encode PBP2a with low beta-lactam affinity
- Located on staphylococcal cassette chromosome mec (SCCmec)
- SCCmec types: I-V (type IV/V associated with CA-MRSA)

*Healthcare-Associated (HA-MRSA) vs. Community-Associated (CA-MRSA):*
- HA-MRSA: SCCmec I-III, multidrug resistant, USA100/200
- CA-MRSA: SCCmec IV/V, PVL+, often susceptible to TMP-SMX, doxy; USA300/400

*Vancomycin Resistance:*
- VISA (Vancomycin-Intermediate): MIC 4-8 mcg/mL, cell wall thickening
- VRSA (Vancomycin-Resistant): MIC ≥16 mcg/mL, vanA gene from Enterococcus

**Enterococcal Resistance:**

*Intrinsic Resistance:*
- Cephalosporins, nafcillin/oxacillin: All enterococci
- Aminoglycosides (low-level): Requires synergy with cell wall agent

*Acquired Resistance:*
- Ampicillin: Common in E. faecium (rare in E. faecalis)
- High-level aminoglycoside resistance (HLAR): Abolishes synergy
- Vancomycin: vanA (high-level, inducible), vanB (variable level)

*VRE Treatment:*
- E. faecium VRE: Linezolid, daptomycin, tigecycline
- E. faecalis VRE (rare): Often ampicillin-susceptible

**Streptococcal Syndromes:**

*Necrotizing Fasciitis (GAS):*
- Surgical emergency: Early debridement critical
- Clindamycin + penicillin (clindamycin inhibits toxin synthesis)
- IVIG for toxic shock syndrome

*Pneumococcal Disease:*
- Penicillin MIC determines susceptibility:
  * Non-meningitis: Susceptible ≤2, Intermediate 4, Resistant ≥8
  * Meningitis: Susceptible ≤0.06, Resistant ≥0.12
- Meningitis: Vancomycin + ceftriaxone empirically
- Non-meningitis: Ceftriaxone or high-dose amoxicillin

**Specific Syndromes and Empiric Coverage:**

*Skin/Soft Tissue:*
- Purulent (abscess): I&D +/- TMP-SMX or doxycycline (MRSA coverage)
- Non-purulent cellulitis: Cephalexin or dicloxacillin (beta-hemolytic strep)
- Severe: Vancomycin + piperacillin-tazobactam (covers MRSA + GNR + anaerobes)

*Osteomyelitis:*
- MSSA: Nafcillin or cefazolin 4-6 weeks
- MRSA: Vancomycin + rifampin for prosthetic infections

*Native Valve Endocarditis:*
- MSSA: Nafcillin 6 weeks (+/- gentamicin first 3-5 days per IDSA)
- MRSA: Vancomycin or daptomycin
- Consider adding ceftaroline for persistent MRSA bacteremia`,
      keyTerms: [
        { term: 'SCCmec', definition: 'Staphylococcal cassette chromosome mec; mobile genetic element carrying mecA gene conferring methicillin resistance' },
        { term: 'VISA', definition: 'Vancomycin-intermediate S. aureus; MIC 4-8 mcg/mL, caused by cell wall thickening' },
        { term: 'vanA/vanB', definition: 'Genes encoding vancomycin resistance in enterococci through altered peptidoglycan precursors' },
        { term: 'high-level aminoglycoside resistance', definition: 'Enterococcal resistance (MIC >500) that eliminates synergistic killing with beta-lactams' },
        { term: 'synergy', definition: 'Combined antibiotic effect greater than sum of individual effects; cell wall agent + aminoglycoside for enterococcal endocarditis' },
      ],
      clinicalNotes: 'For persistent MRSA bacteremia (>7 days), consider adding ceftaroline or rifampin, and re-evaluate for undrained source. Daptomycin is inactivated by pulmonary surfactant - do not use for pneumonia. Linezolid carries risk of myelosuppression and serotonin syndrome.',
    },
    5: {
      level: 5,
      summary: 'Management of Gram-positive infections incorporates genomic epidemiology, novel resistance mechanisms, therapeutic drug monitoring, and integration of rapid diagnostics with antimicrobial stewardship to optimize patient outcomes and limit resistance emergence.',
      explanation: `State-of-the-art management of Gram-positive infections requires integration of molecular epidemiology, PK/PD optimization, and evidence-based protocols.

**Advanced Resistance Concepts:**

*Staphylococcal Resistance Evolution:*
- Methicillin resistance: mecA → PBP2a expression
- Heterogeneous resistance (hetero-MRSA): Subpopulation resistance
- mecC: Zoonotic origin, different PBP2c
- Adaptive resistance: Exposure-induced, non-genetic tolerance

*Vancomycin Tolerance vs. Resistance:*
- MIC creep controversy: Historical increase in VISA
- Accessory gene regulator (agr) dysfunction: Associated with persistent bacteremia
- Vancomycin tolerance: MBC/MIC ratio >32

*Daptomycin Resistance:*
- mprF mutations: Increased surface positive charge
- cls mutations: Altered membrane phospholipid composition
- Cross-resistance concerns with VISA strains

*Linezolid Resistance:*
- 23S rRNA mutations (G2576T most common)
- cfr gene: Methyltransferase, plasmid-mediated
- optrA: ABC-F protein, transferable

**Therapeutic Drug Monitoring:**

*Vancomycin:*
- Target: AUC₂₄/MIC 400-600 (MRSA infections)
- Bayesian dosing software preferred over trough monitoring
- Nephrotoxicity: AUC >650-700 increases risk
- Consider alternatives if MIC ≥2 mcg/mL

*Daptomycin:*
- Bacteremia/endocarditis: 8-10 mg/kg/day
- CK monitoring weekly; discontinue if CK >5x ULN with symptoms
- Avoid concomitant statins during treatment

*Linezolid:*
- Myelosuppression: Weekly CBC if >2 weeks therapy
- Serotonin syndrome: Avoid SSRIs, tramadol, meperidine
- Peripheral/optic neuropathy with prolonged use

**Special Populations and Syndromes:**

*Prosthetic Joint Infections:*
- Two-stage exchange: Higher success rate (>90%)
- One-stage: Selected cases, aggressive debridement
- DAIR (Debridement, Antibiotics, Implant Retention):
  * Early post-op (<30 days) or acute hematogenous
  * Stable implant, intact soft tissue
  * S. aureus: Rifampin + companion drug essential
  * Duration: 12 weeks (hip), 6 weeks (knee) post-DAIR

*Vertebral Osteomyelitis:*
- 6 weeks IV antibiotics (can consider PO switch in selected cases)
- Oral fluoroquinolone + rifampin non-inferior to IV in OVIVA trial
- Surgery for: Neurologic deficits, instability, abscess, failure

*Cardiac Device Infections:*
- Device removal essential for pocket or lead infections
- Bloodstream infection: Complete removal with delayed reimplantation
- Duration: 4-6 weeks (lead infection), 2 weeks (pocket only, negative TEE)

**Rapid Diagnostics Integration:**

*Blood Culture Identification:*
- MALDI-TOF: Species ID in hours (vs. days)
- PCR panels: mecA detection within 1-2 hours of positivity
- Verigene, FilmArray BCID: Direct-from-bottle resistance markers

*Impact on Stewardship:*
- Earlier MRSA identification: Stop unnecessary vancomycin
- Earlier MSSA identification: De-escalate to nafcillin/cefazolin
- Studies show reduced mortality, LOS, cost with rapid diagnostics + stewardship

**Emerging Therapeutics:**

*Novel Agents:*
- Ceftaroline: Anti-MRSA cephalosporin, enhances daptomycin activity
- Ceftobiprole: Extended Gram-positive coverage including MRSA
- Dalbavancin/oritavancin: Lipoglycopeptides, long half-life (weekly/single dose)
- Tedizolid: Next-generation oxazolidinone, once daily, less myelosuppression
- Delafloxacin: Fluoroquinolone with MRSA activity

*Investigational Approaches:*
- Phage therapy for recalcitrant MRSA/VRE
- Anti-toxin antibodies (e.g., suvratoxumab for S. aureus pneumonia prevention)
- Immunotherapy combinations
- Biofilm dispersal agents

**Quality Metrics:**
- SAB: Infectious disease consultation associated with reduced mortality
- Repeat blood cultures to document clearance
- Echo for all S. aureus bacteremia
- Appropriate de-escalation within 48-72 hours`,
      keyTerms: [
        { term: 'AUC/MIC', definition: 'Ratio of 24-hour area under the concentration-time curve to MIC; primary PK/PD target for vancomycin efficacy' },
        { term: 'agr dysfunction', definition: 'Loss of quorum sensing system in S. aureus associated with persistent infections and biofilm formation' },
        { term: 'DAIR', definition: 'Debridement, Antibiotics, Implant Retention; joint-sparing approach for selected prosthetic joint infections' },
        { term: 'cfr gene', definition: 'Transferable gene encoding 23S rRNA methyltransferase conferring linezolid resistance' },
        { term: 'lipoglycopeptide', definition: 'Vancomycin derivatives (dalbavancin, oritavancin) with enhanced Gram-positive activity and prolonged half-life' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- SAB + ID consult = reduced mortality (call ID for all S. aureus bacteremia)
- Rifampin for staphylococcal prosthetic infections: Never use alone; start after surgery
- Daptomycin dose: 6 mg/kg UTI, 8-10 mg/kg bacteremia/endocarditis
- Linezolid: Equal efficacy to vancomycin for MRSA pneumonia; oral bioavailability 100%
- Ceftaroline for persistent MRSA bacteremia: Synergistic with daptomycin
- VRE bacteremia: Remove catheters; daptomycin 8-10 mg/kg or linezolid`,
    },
  },

  media: [
    {
      id: 'gram-positive-morphology',
      type: 'diagram',
      filename: 'gram-positive-morphology.svg',
      title: 'Gram-Positive Bacteria Morphology',
      description: 'Microscopic appearance and cell wall structure',
    },
    {
      id: 'gram-positive-identification',
      type: 'diagram',
      filename: 'gram-positive-id-algorithm.svg',
      title: 'Gram-Positive Identification Algorithm',
      description: 'Laboratory identification flowchart for Gram-positive cocci',
    },
  ],
  citations: [
    {
      id: 'sab-guidelines',
      type: 'article',
      title: 'Clinical Practice Guidelines by the IDSA for the Treatment of MRSA Infections',
      authors: ['Liu C', 'Bayer A', 'Cosgrove SE', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/ciq146',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'parent', label: 'Bacterial Infections Overview' },
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'infectious-disease-sepsis', targetType: 'topic', relationship: 'related', label: 'Sepsis' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'microbiology', 'pharmacology'],
    keywords: ['MRSA', 'Staphylococcus', 'Streptococcus', 'Enterococcus', 'VRE', 'vancomycin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gramPositiveBacteria;
