import { EducationalContent } from '../../types';

export const antibioticClasses: EducationalContent = {
  id: 'infectious-disease-antibiotic-classes',
  type: 'concept',
  name: 'Antibiotic Classes and Mechanisms',
  alternateNames: ['Antimicrobial Classes', 'Antibiotic Families', 'Antimicrobial Mechanisms'],

  levels: {
    1: {
      level: 1,
      summary: 'Antibiotics are medicines that kill bacteria or stop them from growing, with different types working in different ways to fight infections.',
      explanation: `Antibiotics are special medicines that help your body fight bacterial infections. They work like different tools that attack bacteria in various ways.

**Major Antibiotic Families:**

1. **Penicillins** (like amoxicillin)
   - First antibiotics ever discovered
   - Work by breaking bacteria\'s cell walls
   - Common uses: Strep throat, ear infections, dental infections
   - Some people are allergic to them

2. **Cephalosporins** (like cephalexin)
   - Related to penicillins
   - Also break cell walls
   - Often used for skin infections
   - Usually safe if allergic to penicillin (but ask your doctor)

3. **Macrolides** (like azithromycin/Z-Pak)
   - Stop bacteria from making proteins
   - Common uses: Lung infections, "walking pneumonia"
   - Good for people with penicillin allergies
   - Usually taken for shorter time (3-5 days)

4. **Fluoroquinolones** (like ciprofloxacin)
   - Stop bacteria from copying their DNA
   - Used for complicated infections
   - Can have serious side effects
   - Not first choice for simple infections

5. **Tetracyclines** (like doxycycline)
   - Also stop protein production
   - Used for acne, tick diseases, some lung infections
   - Can make skin sensitive to sun
   - Not for young children (stains teeth)

6. **Sulfonamides** (like TMP-SMX or Bactrim)
   - Stop bacteria from making folic acid
   - Used for skin infections, UTIs
   - Can cause sun sensitivity
   - Watch for allergic reactions

**Important Rules:**
- Antibiotics only work for bacterial infections - NOT colds or flu
- Always finish all your antibiotics, even if you feel better
- Take exactly as prescribed
- Don\'t share antibiotics with others
- Using antibiotics when not needed leads to antibiotic resistance`,
      keyTerms: [
        { term: 'antibiotic', definition: 'A medicine that kills bacteria or stops them from growing' },
        { term: 'bacteria', definition: 'Tiny living organisms that can cause infections' },
        { term: 'cell wall', definition: 'The outer protective layer of a bacterial cell' },
        { term: 'allergic reaction', definition: 'When your body reacts badly to a medicine, causing rash, swelling, or breathing problems' },
      ],
      analogies: [
        'Antibiotics are like different weapons against an enemy army. Some are like bombs that destroy the enemy\'s fortifications (cell walls), while others are like snipers that stop enemy soldiers from getting supplies (proteins) they need to fight.',
        'Think of bacteria like burglars in your house. Penicillins are like breaking down the doors (cell walls) so the burglars can\'t stay inside.',
      ],
      examples: [
        'Amoxicillin is a penicillin used for ear infections in children.',
        'Azithromycin (Z-Pak) is often used for bronchitis and takes only 5 days.',
        'Doxycycline is used for Lyme disease after a tick bite.',
        'Cephalexin is commonly prescribed for skin infections like cellulitis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Antibiotic classes are categorized by their chemical structure and mechanism of action, with each class targeting specific bacterial processes essential for survival or reproduction.',
      explanation: `Antibiotics are organized into classes based on their chemical structure and how they kill bacteria. Understanding these classes helps predict which antibiotics will work for different infections.

**Beta-Lactam Antibiotics (Cell Wall Synthesis Inhibitors):**

*Penicillins:*
- Natural: Penicillin G, Penicillin V
- Aminopenicillins: Amoxicillin, Ampicillin (broader coverage)
- Penicillinase-resistant: Methicillin, Nafcillin, Dicloxacillin (for Staph)
- Extended-spectrum: Piperacillin (for Pseudomonas)
- With beta-lactamase inhibitors: Amoxicillin-clavulanate, Piperacillin-tazobactam
- Mechanism: Inhibit transpeptidases (penicillin-binding proteins) that build peptidoglycan

*Cephalosporins (5 Generations):*
- 1st gen: Cefazolin, Cephalexin (good for Staph and Strep, gram-positive)
- 2nd gen: Cefuroxime (more gram-negative coverage)
- 3rd gen: Ceftriaxone, Cefotaxime (cross blood-brain barrier, meningitis)
- 4th gen: Cefepime (broad spectrum including Pseudomonas)
- 5th gen: Ceftaroline (MRSA coverage)
- Mechanism: Similar to penicillins but more resistant to bacterial enzymes

*Carbapenems:*
- Imipenem, Meropenem, Ertapenem
- Broadest spectrum beta-lactams
- Reserved for serious infections
- Mechanism: Very stable against beta-lactamases

*Monobactams:*
- Aztreonam
- Only gram-negative coverage
- Safe in penicillin allergy

**Protein Synthesis Inhibitors:**

*Macrolides:*
- Erythromycin, Azithromycin, Clarithromycin
- Bind to 50S ribosomal subunit
- Good for atypical bacteria
- Long half-lives (especially azithromycin)

*Aminoglycosides:*
- Gentamicin, Tobramycin, Amikacin
- Bind to 30S ribosomal subunit
- Concentration-dependent killing
- Nephrotoxic and ototoxic
- Used for serious gram-negative infections

*Tetracyclines:*
- Tetracycline, Doxycycline, Minocycline, Tigecycline
- Bind to 30S ribosomal subunit
- Broad spectrum but many resistance issues
- Doxycycline: Good for community-acquired pneumonia, tick-borne diseases

*Lincosamides:*
- Clindamycin
- Binds 50S ribosomal subunit
- Good for anaerobes (below diaphragm) and some gram-positives
- Risk of C. difficile infection

**DNA/RNA Synthesis Inhibitors:**

*Fluoroquinolones:*
- 2nd gen: Ciprofloxacin (more gram-negative)
- 3rd gen: Levofloxacin (respiratory - balanced coverage)
- 4th gen: Moxifloxacin (more gram-positive, anaerobes)
- Inhibit DNA gyrase and topoisomerase IV
- Tendon rupture risk, QT prolongation, neuropathy
- Not first-line for uncomplicated infections

*Metronidazole:*
- Anaerobic coverage only
- Bactericidal against anaerobes
- Forms toxic metabolites in anaerobic bacteria
- Used for C. difficile, abdominal infections

**Folate Synthesis Inhibitors:**

*Sulfonamides:*
- Sulfamethoxazole (combined with trimethoprim = TMP-SMX/Bactrim)
- Inhibit bacterial dihydrofolate synthesis
- Humans use different pathway - selective toxicity
- Good for UTIs, skin infections (MRSA), PCP prophylaxis

**Lipopeptides:**

*Daptomycin:*
- Depolarizes bacterial cell membrane
- Gram-positive coverage only including MRSA
- Inactivated by surfactant (do NOT use for pneumonia)
- Check CPK for muscle toxicity

**Glycopeptides:**

*Vancomycin:*
- Inhibits cell wall synthesis (different site than beta-lactams)
- Gram-positive coverage including MRSA
- IV for serious infections, oral only for C. difficile
- Monitor levels to prevent kidney damage
- "Red man syndrome" infusion reaction`,
      keyTerms: [
        { term: 'beta-lactam', definition: 'Class of antibiotics containing a beta-lactam ring in their structure; includes penicillins and cephalosporins', pronunciation: 'BAY-tuh LAK-tam' },
        { term: 'mechanism of action', definition: 'The specific way a drug works to kill bacteria or stop their growth' },
        { term: 'ribosome', definition: 'Cellular structure where proteins are made; target of many antibiotics' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus - bacteria resistant to many common antibiotics', pronunciation: 'MER-sah' },
        { term: 'anaerobic', definition: 'Bacteria that can live and grow without oxygen', pronunciation: 'an-air-ROH-bic' },
      ],
      analogies: [
        'Different antibiotic classes are like different demolition crews. Beta-lactams are like wrecking balls destroying the building structure (cell wall). Protein synthesis inhibitors are like cutting off the food supply lines so workers can\'t function. DNA inhibitors are like scrambling the blueprints so no new buildings can be made.',
      ],
      examples: [
        'Ceftriaxone crosses the blood-brain barrier and is used to treat bacterial meningitis.',
        'Azithromycin is used for "atypical" pneumonia caused by Mycoplasma or Chlamydia.',
        'Vancomycin is the drug of choice for serious MRSA infections in hospitalized patients.',
        'Metronidazole specifically targets anaerobic bacteria and is used for C. difficile colitis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antibiotic classes are defined by their chemical structure, mechanism of action, and spectrum of activity, with pharmacokinetic properties and resistance patterns determining clinical utility for specific infections.',
      explanation: `The classification and selection of antibiotics requires understanding microbiology, pharmacology, and pathophysiology.

**Beta-Lactam Pharmacology:**

*Structure-Activity Relationship:*
- All contain beta-lactam ring fused to thiazolidine (penicillins) or dihydrothiazine (cephalosporins)
- Ring opens and acylates penicillin-binding proteins (PBPs)
- PBPs are transpeptidases essential for peptidoglycan cross-linking
- Different beta-lactams have varying affinity for different PBPs

*Resistance Mechanisms:*
- Beta-lactamases: Bacterial enzymes that break the beta-lactam ring
- Altered PBPs: MRSA has mecA gene encoding PBP2a with low affinity
- Porin channel loss: Decreased drug entry in gram-negatives
- Efflux pumps: Active removal of drug

*Pharmacokinetic Considerations:*
- Time-dependent killing: Efficacy relates to time above MIC
- Most given every 4-6 hours or as continuous infusion
- Cefazolin: Preferred surgical prophylaxis
- Ceftriaxone: Once daily dosing (high protein binding, long half-life)
- Meropenem: Crosses inflamed meninges

**Protein Synthesis Inhibitors - Mechanistic Details:**

*Aminoglycosides:*
- Bind 30S ribosomal subunit causing misreading
- Concentration-dependent killing: High peaks improve efficacy
- Post-antibiotic effect: Continued suppression after levels drop
- Dosed once daily for most indications (except endocarditis, pregnancy)
- Nephrotoxicity: Dose-dependent, reversible; avoid with other nephrotoxins
- Ototoxicity: Irreversible; vestibular and/or cochlear damage

*Macrolides:*
- Bind 23S rRNA of 50S subunit
- Bacteriostatic at usual concentrations
- Excellent intracellular penetration
- Long half-lives: Azithromycin 68 hours
- Anti-inflammatory effects independent of antibacterial activity

*Tetracyclines:*
- Bind 30S subunit preventing aminoacyl-tRNA attachment
- Broad spectrum but extensive resistance
- Lipophilic: Good tissue penetration
- Phototoxicity and esophageal erosion risk
- Contraindicated pregnancy and children <8 (bone/teeth effects)

**Fluoroquinolone Concerns:**

*Spectrum:*
- Gram-negative: Excellent (Pseudomonas with cipro/levofloxacin)
- Gram-positive: Variable (best with moxifloxacin)
- Atypicals: Good

*Adverse Effects:*
- Tendon rupture (especially with steroids, age >60)
- QT prolongation and arrhythmias
- Peripheral neuropathy (may be permanent)
- Aortic aneurysm risk
- CNS effects (seizures, psychiatric)
- Resistance rising rapidly - avoid when alternatives exist

**Specialized Agents:**

*Daptomycin:*
- Calcium-dependent insertion into membrane
- Rapid depolarization and cell death
- Inactivated by pulmonary surfactant - never use for pneumonia
- CPK monitoring for rhabdomyolysis
- Alternative to vancomycin for bacteremia, endocarditis

*Linezolid:*
- Oxazolidinone class - unique mechanism
- Binds 50S subunit preventing initiation complex
- 100% oral bioavailability
- MAOI activity - serotonin syndrome risk, tyramine restriction
- Bone marrow suppression with prolonged use (>2 weeks)
- Reserved for VRE, MDR tuberculosis

*Fosfomycin:*
- Inhibits cell wall synthesis (different step than beta-lactams)
- Single-dose oral for uncomplicated UTI
- Also IV formulation for MDR infections

**Pharmacodynamic Principles:**

*Concentration-Dependent Killing:*
- Aminoglycosides, fluoroquinolones, daptomycin
- Maximize Cmax/MIC ratio
- Once-daily dosing optimizes efficacy and reduces toxicity

*Time-Dependent Killing:*
- Beta-lactams, macrolides, clindamycin, linezolid
- Maximize time above MIC (fT>MIC)
- Frequent dosing or extended infusions improve outcomes`,
      keyTerms: [
        { term: 'penicillin-binding protein (PBP)', definition: 'Bacterial enzyme targeted by beta-lactam antibiotics; essential for cell wall synthesis' },
        { term: 'MIC', definition: 'Minimum inhibitory concentration - lowest antibiotic concentration that prevents visible bacterial growth', pronunciation: 'em-eye-see' },
        { term: 'pharmacodynamics', definition: 'Study of how drugs affect the body and microorganisms; relationship between drug concentration and effect' },
        { term: 'post-antibiotic effect', definition: 'Persistent suppression of bacterial growth after antibiotic concentrations fall below MIC' },
        { term: 'VRE', definition: 'Vancomycin-resistant Enterococcus - bacteria resistant to vancomycin', pronunciation: 'vee-are-ee' },
      ],
    },
    4: {
      level: 4,
      summary: 'Antibiotic selection integrates spectrum of activity, pharmacokinetic/pharmacodynamic properties, resistance patterns, penetration to infection site, and host factors, with stewardship principles guiding optimal empiric and definitive therapy choices.',
      explanation: `Advanced antibiotic therapy requires integrating microbiology, pharmacology, and clinical medicine to optimize outcomes while minimizing resistance.

**Beta-Lactam Deep Dive:**

*Advanced Generation Cephalosporins:*
- Ceftaroline: "5th generation" with MRSA activity through affinity for PBP2a
- Ceftolozane-tazobactam: Enhanced Pseudomonas activity plus beta-lactamase inhibitor
- Ceftazidime-avibactam: Active against KPC carbapenemases

*Carbapenem Differentiation:*
- Imipenem-cilastatin: Cilastatin inhibits renal dehydropeptidase I (prevents inactivation)
- Meropenem: Better CNS penetration than imipenem
- Ertapenem: Once daily, no Pseudomonas or Enterococcus coverage
- Doripenem: Good for hospital-acquired pneumonia

*When to Use Beta-Lactam/Beta-Lactamase Inhibitor Combinations:*
- Piperacillin-tazobactam: Broad empiric coverage, healthcare-associated infections
- Ceftolozane-tazobactam: MDR Pseudomonas, complicated intra-abdominal
- Ceftazidime-avibactam: KPC-producing Klebsiella, CRE
- Meropenem-vaborbactam: CRE, complicated UTIs

**Anti-MRSA Agents Comparison:**

| Drug | Pros | Cons |
|------|------|------|
| Vancomycin | Time-tested, inexpensive | Nephrotoxicity, "red man," inferior to beta-lactams for MSSA |
| Daptomycin | Rapid bactericidal, well-tolerated | Inactivated by surfactant, expensive |
| Linezolid | 100% oral bioavailability, CNS penetration | Myelosuppression, serotonin syndrome |
| Ceftaroline | Beta-lactam (bactericidal) | No Pseudomonas, broad spectrum |
| Dalbavancin | Single-dose or weekly | Limited data, very expensive |

**Toxicity Monitoring:**

*Aminoglycosides:*
- Trough levels for multi-dose regimens
- Once-daily: No levels needed for short courses
- Creatinine at least every 2-3 days
- Audiologic testing for prolonged use

*Vancomycin:*
- AUC/MIC target 400-600 (traditional: trough 15-20 for serious infections)
- Bayesian dosing software improves target achievement
- Nephrotoxicity risk increases with trough >20 or concurrent nephrotoxins

*Linezolid:*
- CBC weekly if >2 weeks
- LFTs with prolonged use
- Serotonin syndrome signs (confusion, tremor, hyperthermia)

**Clinical Decision Framework:**

*Empiric Therapy Principles:*
1. What is the likely source/pathogen?
2. What is the severity of illness?
3. What are local resistance patterns?
4. What are host risk factors?
5. What antibiotics penetrate the site?

*Source-Based Selection:*
- Community-acquired pneumonia: Amoxicillin, doxycycline, or macrolide
- Skin/soft tissue (purulent): TMP-SMX or doxycycline (MRSA coverage)
- Skin/soft tissue (non-purulent): Cephalexin (Strep coverage)
- Intra-abdominal: Piperacillin-tazobactam or ceftriaxone + metronidazole
- Meningitis: Vancomycin + ceftriaxone (add ampicillin if >50 or immunocompromised)
- Urinary tract: Nitrofurantoin, TMP-SMX, fosfomycin

*De-escalation Strategy:*
- Obtain cultures before antibiotics when possible
- Reassess at 48-72 hours
- Narrow based on susceptibilities
- Convert IV to oral when clinically stable
- Calculate definitive treatment duration

**Pharmacokinetic/Pharmacodynamic Optimization:**

*Extended Infusions:*
- Beta-lactams: Continuous or prolonged infusion improves fT>MIC
- Meropenem 3-hour infusion for resistant organisms
- Associated with improved mortality in critical illness

*Dose Adjustments:*
- Renal dysfunction: Most require adjustment
- Hepatic dysfunction: Few affected (macrolides, chloramphenicol)
- Obesity: Adjust for weight with vancomycin, daptomycin, aminoglycosides
- Cystic fibrosis: Increased clearances, higher doses needed`,
      keyTerms: [
        { term: 'AUC/MIC', definition: 'Area under the curve to MIC ratio - pharmacodynamic parameter for vancomycin dosing', pronunciation: 'A-YOU-see over em-eye-see' },
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales - highly resistant gram-negative bacteria', pronunciation: 'see-are-ee' },
        { term: 'KPC', definition: 'Klebsiella pneumoniae carbapenemase - enzyme conferring carbapenem resistance', pronunciation: 'kay-pee-see' },
        { term: 'fT>MIC', definition: 'Fraction of time concentration exceeds MIC - key PK/PD parameter for time-dependent antibiotics', pronunciation: 'eff-tee greater than em-eye-see' },
        { term: 'de-escalation', definition: 'Narrowing antibiotic spectrum based on culture results to reduce resistance pressure' },
      ],
      clinicalNotes: 'Vancomycin is inferior to beta-lactams for MSSA bacteremia and endocarditis. Use nafcillin or cefazolin if MSSA is identified. For MRSA bacteremia, daptomycin is non-inferior to vancomycin and may be preferred in renal dysfunction.',
    },
    5: {
      level: 5,
      summary: 'Contemporary antibiotic therapy integrates molecular mechanisms of action and resistance, advanced pharmacokinetic/pharmacodynamic modeling, site-specific penetration, toxicodynamic monitoring, and antimicrobial stewardship to optimize patient outcomes while preserving antibiotic efficacy for future generations.',
      explanation: `Expert antibiotic selection synthesizes detailed mechanistic understanding with clinical epidemiology and stewardship principles.

**Molecular Mechanisms of Resistance:**

*Beta-Lactamases:*
- ESBLs (Extended-Spectrum Beta-Lactamases): TEM, SHV, CTX-M types
  * Hydrolyze penicillins, cephalosporins, aztreonam
  * Inhibited by clavulanate, tazobactam, avibactam
  * Do NOT hydrolyze carbapenems
- AmpC beta-lactamases: Chromosomal in Enterobacter, Citrobacter, Serratia
  * Inducible, high-level expression
  * Not inhibited by clavulanate
  * Can develop resistance during therapy with 3rd gen cephalosporins
  * Carbapenems preferred
- Carbapenemases: KPC, NDM, VIM, IMP, OXA-48
  * Hydrolyze carbapenems and most beta-lactams
  * KPC: Inhibited by avibactam, vaborbactam, relebactam
  * Metallo-beta-lactamases (NDM, VIM, IMP): Require aztreonam + avibactam

*Aminoglycoside Modifying Enzymes:*
- Acetyltransferases, phosphotransferases, nucleotidyltransferases
- Different enzymes target different aminoglycosides
- Amikacin least affected due to chemical modifications

*Fluoroquinolone Resistance:*
- Mutations in DNA gyrase (gyrA) or topoisomerase IV (parC)
- Efflux pump overexpression
- Porin loss decreasing drug entry

*Vancomycin Resistance:*
- VanA: D-Ala-D-Ala changed to D-Ala-D-Lac (high-level resistance)
- VanB: Similar but variable expression
- Vancomycin-dependent Enterococcus: Rare, requires vancomycin to grow

**Advanced Pharmacokinetic Modeling:**

*Bayesian Dosing:*
- Population PK models + individual patient data
- Improves vancomycin target attainment
- Software: PrecisePK, InsightRX, DoseMe
- Reduces nephrotoxicity while maintaining efficacy

*Physiologically-Based PK (PBPK):*
- Models drug distribution based on tissue blood flow and partitioning
- Predicts penetration into specific sites (bone, CSF, lung epithelium)
- Useful for special populations (obesity, pregnancy, ECMO)

*Toxicodynamic Relationships:*
- Aminoglycoside nephrotoxicity: Related to accumulation in proximal tubule
  * Once-daily dosing reduces toxicity (saturation of uptake)
  * Recovery usually 5-7 days after discontinuation
- Vancomycin nephrotoxicity: AUC-dependent
  * Target AUC 400-600 minimizes toxicity while maintaining efficacy
  * Trough-based dosing associated with more nephrotoxicity

**Site-Specific Penetration:**

*Central Nervous System:*
- Inflammation disrupts blood-brain barrier
- Ceftriaxone, cefotaxime: Good penetration
- Vancomycin: Poor without inflammation
- Metronidazole: Excellent penetration
- Daptomycin: Poor - do not use for CNS infections

*Bone:*
- Osteomyelitis requires bone-penetrating antibiotics
- Clindamycin, fluoroquinolones, oxacillin: Good penetration
- Vancomycin: Variable, adequate for most
- Aminoglycosides: Poor

*Lung:*
- Epithelial lining fluid concentrations vary
- Macrolides, fluoroquinolones, linezolid: High ELF concentrations
- Daptomycin: Inactivated by surfactant - never for pneumonia
- Aminoglycosides: Poor, use combination therapy

*Abscesses:*
- Acidic, low-oxygen environment
- Beta-lactams: Variable penetration, often need drainage
- Metronidazole: Good for anaerobic abscesses
- Lipophilic agents (clindamycin, metronidazole): Better penetration

**Stewardship Intervention Types:**

*Prospective Audit and Feedback:*
- ID pharmacists review orders within 24-48 hours
- Recommendations for optimization
- High acceptance rates, reduced resistance

*Preauthorization:*
- Restricted antibiotics require approval
- Effective for newest, broadest agents
- Can delay therapy if not streamlined

*IV to Oral Conversion:*
- Automatic switch protocols
- High bioavailability agents: Linezolid, fluoroquinolones, TMP-SMX
- Reduces line infections, length of stay, costs

*Antibiotic De-escalation:*
- Stop empiric MRSA coverage if cultures negative
- Stop anaerobic coverage if no clinical indication
- Narrow based on susceptibilities

**Emerging Antibiotics:**

*Cefiderocol:*
- Siderophore cephalosporin - uses iron transport system to enter bacteria
- Active against carbapenem-resistant organisms
- Approved for complicated UTI, hospital-acquired pneumonia

*Eravacycline:*
- Synthetic fluorocycline
- Active against many resistant organisms
- IV only

*Omadacycline:*
- Aminomethylcycline
- Oral and IV
- Active against resistant organisms including MRSA

*Lefamulin:*
- Pleuromutilin
- Protein synthesis inhibitor (different binding site)
- Community-acquired pneumonia indication`,
      keyTerms: [
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase - enzyme conferring resistance to most penicillins and cephalosporins', pronunciation: 'ee-ess-bee-el' },
        { term: 'Bayesian dosing', definition: 'Mathematical approach using population pharmacokinetics and individual patient data to predict optimal dosing' },
        { term: 'toxicodynamics', definition: 'Study of relationship between drug concentration and toxicity' },
        { term: 'epithelial lining fluid', definition: 'Fluid lining the alveoli in lungs; relevant for treating pneumonia', pronunciation: 'ep-ih-THEE-lee-ul' },
        { term: 'siderophore', definition: 'Iron-carrying compound used by some antibiotics to enter bacteria via iron transport systems', pronunciation: 'SY-der-uh-for' },
      ],
      clinicalNotes: '**Board-Relevant Pearls:**\n- ESBL producers: Carbapenems are drug of choice; piperacillin-tazobactam unreliable\n- AmpC producers (Enterobacter, Citrobacter, Serratia): Avoid 3rd gen cephalosporins; use carbapenems or cefepime\n- MRSA bacteremia: Vancomycin or daptomycin; add anti-staphylococcal beta-lactam if severe\n- Pseudomonas: Use two active agents in serious infections (beta-lactam + aminoglycoside or fluoroquinolone)\n- C. difficile risk: Clindamycin, fluoroquinolones, cephalosporins highest risk; piperacillin-tazobactam lower\n- Endocarditis: Bactericidal antibiotics required; aminoglycosides added for synergy in some cases\n- Osteomyelitis: Long courses required (4-6+ weeks); surgical debridement often needed',
    },
  },

  media: [
    {
      id: 'antibiotic-classes-chart',
      type: 'diagram',
      filename: 'antibiotic-classes-mechanisms.svg',
      title: 'Antibiotic Classes and Mechanisms of Action',
      description: 'Classification diagram showing major antibiotic families and their bacterial targets',
    },
    {
      id: 'cell-wall-synthesis',
      type: 'diagram',
      filename: 'cell-wall-synthesis-inhibition.svg',
      title: 'Cell Wall Synthesis Inhibition',
      description: 'Diagram showing how beta-lactams inhibit peptidoglycan cross-linking',
    },
  ],
  citations: [
    {
      id: 'sanford-guide',
      type: 'textbook',
      title: 'The Sanford Guide to Antimicrobial Therapy',
      authors: ['Gilbert DN', 'Chambers HF', 'Saag MS'],
      source: 'Sanford Guide',
    },
    {
      id: 'goodman-gilman',
      type: 'textbook',
      title: 'Goodman and Gilman\'s The Pharmacological Basis of Therapeutics',
      authors: ['Brunton LL', 'Hilal-Dandan R', 'Knollmann BC'],
      source: 'McGraw-Hill Education',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-resistance-mechanisms', targetType: 'concept', relationship: 'related', label: 'Resistance Mechanisms' },
    { targetId: 'infectious-disease-stewardship-programs', targetType: 'concept', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'infectious-disease-skin-infections', targetType: 'condition', relationship: 'related', label: 'Skin and Soft Tissue Infections' },
  ],
  tags: {
    systems: ['infectious', 'immune'],
    topics: ['pharmacology', 'microbiology', 'antimicrobial-stewardship'],
    keywords: ['antibiotics', 'antimicrobials', 'beta-lactam', 'penicillin', 'cephalosporin', 'macrolide', 'fluoroquinolone', 'MRSA', 'resistance'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine', 'pediatrics'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default antibioticClasses;
