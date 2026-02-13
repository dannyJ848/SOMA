import { EducationalContent } from '../types';

/**
 * Comprehensive Antimicrobial Resistance Educational Content
 *
 * Covers resistance mechanisms, antibiotic stewardship principles,
 * MDRO management, and the WHO priority pathogen list across all
 * 5 complexity levels.
 */
export const ANTIMICROBIAL_RESISTANCE: EducationalContent = {
  id: 'infectious-disease-antimicrobial-resistance-comprehensive',
  type: 'topic',
  name: 'Antimicrobial Resistance and Stewardship',
  nameEs: 'Resistencia Antimicrobiana y Uso Racional de Antibioticos',
  alternateNames: [
    'AMR',
    'Antibiotic Resistance',
    'Antimicrobial Stewardship',
    'MDRO Management',
    'Drug-Resistant Infections',
  ],
  levels: {
    1: {
      level: 1,
      summary:
        'Some germs have learned to fight off the medicines we use against them, making infections harder to treat, so it is important to use antibiotics carefully and only when truly needed.',
      explanation: `Imagine you are playing a video game, and the enemies start learning your attacks. They build stronger shields and dodge your moves. Something similar happens with bacteria and antibiotics.

**What Is Antibiotic Resistance?**
When bacteria are exposed to antibiotics, most of them die. But a few bacteria might have special tricks that help them survive. These survivors multiply, and now you have bacteria that the antibiotic cannot kill. This is called antibiotic resistance.

**Why Does This Happen?**
- **Overusing antibiotics**: Taking antibiotics when you do not need them (like for a cold) gives bacteria more chances to learn resistance
- **Not finishing your medicine**: If you stop antibiotics early, the strongest bacteria survive and multiply
- **Antibiotics in farming**: Animals raised for food are sometimes given antibiotics, which can create resistant bacteria
- **Spreading germs**: Resistant bacteria can spread from person to person just like regular bacteria

**Why Is This Scary?**
- Some infections are now very hard to treat because no antibiotic works well
- Doctors call these "superbugs"
- Simple surgeries and treatments become dangerous if we cannot prevent or treat infections
- Every year, resistant infections make many people very sick or even cause death

**What Can YOU Do?**
- Only take antibiotics when your doctor says you need them
- Always finish your full prescription
- Never share antibiotics or use leftover antibiotics
- Wash your hands well and often
- Stay up to date on vaccines (they prevent infections so you do not need antibiotics)
- Do not pressure your doctor for antibiotics when they say you do not need them

**The Good News:**
- Scientists are working on new medicines and new ways to fight resistant bacteria
- Hospitals have special programs to make sure antibiotics are used wisely
- YOU can help by being a smart medicine user`,
      keyTerms: [
        {
          term: 'Antibiotic resistance',
          definition:
            'When bacteria learn to survive the medicines meant to kill them, making infections harder to treat',
        },
        {
          term: 'Superbug',
          definition:
            'A nickname for bacteria that are resistant to many different antibiotics',
        },
        {
          term: 'Antibiotic stewardship',
          definition:
            'Using antibiotics carefully and only when needed to keep them working for the future',
        },
      ],
      analogies: [
        'Antibiotic resistance is like video game enemies that learn your attacks and become harder to beat.',
        'Using antibiotics when you do not need them is like crying wolf - when you really need them, they might not work.',
        'Finishing your antibiotics is like making sure all the weeds are pulled - if you leave some, they grow back stronger.',
      ],
      examples: [
        'A patient with a cold asks for antibiotics, but the doctor explains that colds are caused by viruses and antibiotics will not help.',
        'MRSA is a type of Staph bacteria that is resistant to many common antibiotics and can cause serious skin infections.',
      ],
      patientCounselingPoints: [
        'Always take antibiotics exactly as prescribed and finish the full course.',
        'Never take antibiotics prescribed for someone else.',
        'Do not save leftover antibiotics for later use.',
        'Ask your doctor if your infection really needs an antibiotic.',
        'Wash hands frequently to prevent infections and reduce the need for antibiotics.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Antimicrobial resistance occurs through genetic mechanisms including mutation and horizontal gene transfer, threatening global health and requiring organized stewardship programs to preserve antibiotic effectiveness.',
      explanation: `Antimicrobial resistance (AMR) is one of the greatest threats to global health. It occurs when microorganisms (bacteria, viruses, fungi, parasites) evolve to survive exposure to the drugs designed to kill them.

**How Bacteria Become Resistant:**

*Genetic Mechanisms:*
- **Mutations**: Random changes in bacterial DNA that happen to protect against an antibiotic
- **Horizontal gene transfer**: Bacteria share resistance genes with each other through:
  - **Conjugation**: Direct cell-to-cell transfer via a bridge (pilus)
  - **Transformation**: Picking up free DNA from the environment
  - **Transduction**: Bacteriophages (viruses that infect bacteria) carry resistance genes between bacteria

*Common Resistance Strategies:*
| Strategy | How It Works | Example |
|----------|-------------|---------|
| Drug inactivation | Bacteria produce enzymes that destroy the antibiotic | Beta-lactamases break down penicillins |
| Target modification | Bacteria change the antibiotic's target site | MRSA has altered PBPs |
| Efflux pumps | Bacteria pump the antibiotic out of the cell | Tetracycline resistance |
| Reduced permeability | Bacteria change their outer membrane to block entry | Pseudomonas porin mutations |
| Bypass pathways | Bacteria use an alternative metabolic route | Vancomycin-resistant Enterococcus changes target |

**Key Drug-Resistant Organisms:**

*Important "Superbugs":*
- **MRSA** (Methicillin-Resistant Staphylococcus aureus): Resistant to penicillins and cephalosporins
- **VRE** (Vancomycin-Resistant Enterococcus): Resistant to vancomycin, a last-resort drug
- **ESBL producers**: Bacteria (E. coli, Klebsiella) resistant to most cephalosporins
- **CRE** (Carbapenem-Resistant Enterobacterales): Resistant to carbapenems, among our strongest antibiotics
- **C. difficile**: Not resistant itself, but caused by antibiotic overuse wiping out normal gut bacteria
- **Drug-resistant TB**: MDR-TB (resistant to isoniazid + rifampin) and XDR-TB (even more resistant)
- **Drug-resistant gonorrhea**: Increasingly resistant to last-line cephalosporins

**Antibiotic Stewardship:**

*What Is It?*
Antibiotic stewardship means using the right antibiotic, at the right dose, for the right duration, only when truly needed.

*Core Strategies:*
- **Get cultures first**: Know what you are treating before choosing an antibiotic
- **Narrow spectrum**: Use the most targeted antibiotic possible
- **De-escalation**: Start broad if critically ill, then narrow based on culture results
- **Duration optimization**: Shorter courses are often just as effective (e.g., 5-7 days for many infections)
- **Avoid unnecessary antibiotics**: No antibiotics for viral infections
- **Dose optimization**: Correct dose based on infection site and patient factors

*Impact of Stewardship:*
- Reduces C. difficile infections by 30-50%
- Decreases emergence of resistant organisms
- Reduces antibiotic side effects and costs
- Improves patient outcomes

**Global Impact:**
- AMR causes approximately 1.27 million deaths directly and is associated with 4.95 million deaths globally per year
- By 2050, AMR could cause 10 million deaths annually without intervention
- The WHO has declared AMR one of the top 10 global health threats`,
      keyTerms: [
        {
          term: 'Horizontal gene transfer',
          definition:
            'The transfer of genetic material (including resistance genes) between bacteria through conjugation, transformation, or transduction',
        },
        {
          term: 'Beta-lactamase',
          definition:
            'An enzyme produced by bacteria that breaks down beta-lactam antibiotics (penicillins, cephalosporins), making them ineffective',
        },
        {
          term: 'MRSA',
          definition:
            'Methicillin-Resistant Staphylococcus aureus - a type of staph that is resistant to many common antibiotics',
        },
        {
          term: 'CRE',
          definition:
            'Carbapenem-Resistant Enterobacterales - bacteria resistant to carbapenems, one of our most powerful antibiotic classes',
        },
        {
          term: 'De-escalation',
          definition:
            'The practice of switching from a broad-spectrum antibiotic to a narrower one once the specific pathogen is identified',
        },
        {
          term: 'Antibiogram',
          definition:
            'A summary of antimicrobial susceptibility testing results for common pathogens at a healthcare facility, guiding empiric therapy',
        },
      ],
      examples: [
        'A hospital implements a stewardship program that requires pharmacist approval for broad-spectrum antibiotics and sees a 40% reduction in C. difficile infections.',
        'A patient with an E. coli UTI is initially treated with a broad-spectrum antibiotic, then switched to a targeted drug once culture results return.',
      ],
      patientCounselingPoints: [
        'Antibiotic resistance affects everyone, regardless of age or health status.',
        'Stewardship programs exist to protect you by ensuring antibiotics work when you truly need them.',
        'If your doctor recommends waiting before prescribing antibiotics, it is for your benefit and safety.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Antimicrobial resistance involves molecular mechanisms including enzymatic inactivation, target site modification, efflux systems, and permeability changes encoded on mobile genetic elements; stewardship programs integrate prospective audit, formulary restriction, and clinical decision support to optimize antimicrobial use.',
      explanation: `A comprehensive understanding of AMR requires knowledge of molecular resistance mechanisms, epidemiology, and evidence-based stewardship interventions.

**Molecular Resistance Mechanisms in Detail:**

*1. Enzymatic Inactivation:*
- **Beta-lactamases**: Hydrolyze the beta-lactam ring
  - Penicillinases: Hydrolyze penicillins (TEM-1, SHV-1)
  - ESBLs: Extended-spectrum, hydrolyze 3rd-gen cephalosporins (CTX-M, TEM/SHV variants)
  - AmpC: Cephalosporinases (chromosomal in SPICE organisms; plasmid-mediated CMY, DHA)
  - Carbapenemases: Hydrolyze carbapenems (KPC, NDM, VIM, IMP, OXA-48)
- **Aminoglycoside-modifying enzymes (AMEs)**: Acetyltransferases, phosphotransferases, nucleotidyltransferases
- **Chloramphenicol acetyltransferase (CAT)**: Inactivates chloramphenicol

*2. Target Site Modification:*
- **PBP alteration**: mecA encodes PBP2a in MRSA (low affinity for beta-lactams)
- **Ribosomal methylation**: erm genes methylate 23S rRNA (MLSB resistance to macrolides, lincosamides, streptogramin B)
- **DNA gyrase mutations**: gyrA and parC mutations in fluoroquinolone resistance
- **Peptidoglycan precursor modification**: vanA/B in VRE (D-Ala-D-Lac replaces D-Ala-D-Ala)
- **RNA polymerase mutations**: rpoB mutations in rifampin resistance (TB)
- **Ribosomal mutations**: 16S rRNA mutations in aminoglycoside resistance; 23S rRNA mutations in linezolid resistance

*3. Efflux Pumps:*
- MexAB-OprM (Pseudomonas): Multi-drug efflux; contributes to intrinsic and acquired resistance
- AcrAB-TolC (Enterobacterales): Resistance to tetracyclines, fluoroquinolones, chloramphenicol
- NorA (S. aureus): Fluoroquinolone efflux
- Tet efflux pumps: Tetracycline-specific efflux

*4. Reduced Permeability:*
- OprD loss in Pseudomonas: Carbapenem (imipenem) resistance
- Porin mutations in Enterobacterales: Contribute to carbapenem resistance when combined with AmpC or ESBLs

*5. Target Bypass:*
- mecC: Novel PBP in livestock-associated MRSA
- Vancomycin resistance (vanA): Entire operon reprograms cell wall synthesis

**Mobile Genetic Elements Driving Resistance Spread:**
- **Plasmids**: Self-replicating extrachromosomal DNA; carry multiple resistance genes; transfer via conjugation
  - Example: IncF, IncN plasmids carrying CTX-M ESBLs and KPC carbapenemases
- **Transposons**: "Jumping genes" that move between chromosome and plasmids (Tn1546 carries vanA)
- **Integrons**: Gene capture systems with site-specific recombination; accumulate resistance gene cassettes
- **Insertion sequences**: IS elements flank resistance genes; ISAba1 upstream of OXA in Acinetobacter

**Antibiotic Stewardship Programs - Core Elements:**

*CDC Core Elements (Inpatient):*
1. **Leadership commitment**: Dedicated resources and support
2. **Accountability**: Physician leader responsible for program outcomes
3. **Drug expertise**: Pharmacist leader with ID training
4. **Action**: Implement at least one evidence-based intervention
5. **Tracking**: Monitor antibiotic prescribing and resistance patterns
6. **Reporting**: Share data with prescribers regularly
7. **Education**: Ongoing education about resistance and optimal prescribing

*Key Interventions:*
- **Prospective audit and feedback**: ID/pharmacy review of antimicrobial orders with recommendations (most effective)
- **Preauthorization/formulary restriction**: Require approval for restricted antibiotics
- **Clinical decision support**: EMR-based alerts, order sets, and dosing guidance
- **Antibiotic timeout**: Mandatory reassessment at 48-72 hours based on culture data
- **IV-to-oral conversion**: Transition to oral antibiotics when clinically appropriate
- **Procalcitonin-guided therapy**: Biomarker to guide antibiotic initiation and duration (respiratory infections)
- **Rapid diagnostics integration**: Coupling rapid ID/AST results with stewardship pharmacist intervention

*Outpatient Stewardship:*
- Delayed prescribing strategies for viral URIs
- Communication training (addressing patient expectations)
- Clinic-level antibiotic prescribing reports
- Evidence-based guidelines for common infections (UTI, sinusitis, pharyngitis)

**Infection Prevention and Control:**
- Hand hygiene compliance monitoring
- Contact precautions for MDROs
- Environmental cleaning (particularly for C. difficile spores - bleach-based products)
- Active surveillance cultures for MRSA, VRE, CRE in high-risk patients
- Chlorhexidine bathing in ICU (reduces MRSA and CLABSI)
- Antimicrobial-coated devices (chlorhexidine/silver sulfadiazine catheters)`,
      keyTerms: [
        {
          term: 'Mobile genetic element',
          definition:
            'DNA sequences (plasmids, transposons, integrons) that can move between bacteria, facilitating the spread of resistance genes',
        },
        {
          term: 'MLSB resistance',
          definition:
            'Cross-resistance to macrolides, lincosamides, and streptogramin B mediated by erm gene methylation of the 23S ribosomal RNA',
        },
        {
          term: 'Prospective audit and feedback',
          definition:
            'A stewardship intervention where antimicrobial orders are reviewed by ID/pharmacy experts who provide recommendations to optimize therapy',
        },
        {
          term: 'Procalcitonin',
          definition:
            'A biomarker that rises in bacterial infections and can guide decisions about starting or stopping antibiotics, particularly in respiratory infections and sepsis',
        },
        {
          term: 'Integron',
          definition:
            'A genetic element capable of capturing and expressing gene cassettes, often accumulating multiple antibiotic resistance genes',
        },
        {
          term: 'AmpC beta-lactamase',
          definition:
            'A class C cephalosporinase that is chromosomally encoded in SPICE organisms and can be inducibly overproduced during therapy, causing treatment failure',
        },
      ],
      clinicalNotes:
        'Stewardship interventions have the strongest evidence for reducing C. difficile infection and decreasing antimicrobial costs. Prospective audit and feedback is the most effective single intervention but requires dedicated personnel. Rapid diagnostic technologies coupled with stewardship pharmacist notification significantly reduce time to optimal therapy. Empiric therapy should always be guided by local antibiogram data, as resistance patterns vary substantially between institutions and geographic regions.',
    },
    4: {
      level: 4,
      summary:
        'Advanced AMR management requires understanding of carbapenem resistance mechanisms (KPC, NDM, OXA-48), WHO critical priority pathogens (CRE, CRAB, CRPA), novel beta-lactamase inhibitor combinations, and the design of institution-specific stewardship programs guided by molecular epidemiology.',
      explanation: `Graduate-level AMR expertise integrates molecular resistance typing, advanced MDRO treatment, and stewardship program design.

**WHO Priority Pathogen List (Critical Priority):**

*1. Carbapenem-Resistant Acinetobacter baumannii (CRAB):*
- Intrinsically resistant to many antibiotics; acquires resistance readily
- Resistance mechanisms: OXA-type carbapenemases (OXA-23, OXA-24/40, OXA-58), ISAba1 promoter insertion, porin loss, efflux pumps
- Environmental persistence: Survives on surfaces for weeks
- Treatment options (limited):
  - Ampicillin-sulbactam (high-dose; sulbactam has intrinsic activity against Acinetobacter PBPs)
  - Polymyxins (colistin, polymyxin B): Nephrotoxic; resistance emerging (mcr genes, LPS modifications)
  - Minocycline/tigecycline: Variable activity
  - Cefiderocol: Active against many CRAB strains
  - Combinations often used (e.g., high-dose ampicillin-sulbactam + meropenem + polymyxin)
  - Sulbactam-durlobactam (Xacduro): FDA-approved specifically for CRAB; durlobactam is a DBO inhibitor

*2. Carbapenem-Resistant Pseudomonas aeruginosa (CRPA):*
- Mechanisms: AmpC derepression + OprD loss (most common), MBLs (VIM, IMP), GES carbapenemases, efflux (MexAB-OprM)
- Distinguish "difficult-to-treat" resistance (DTR-Pseudomonas): Resistant to all beta-lactams and fluoroquinolones
- Treatment:
  - Ceftolozane-tazobactam: Best option for non-MBL CRPA (stable to AmpC, efflux, OprD loss)
  - Ceftazidime-avibactam: Active against many CRPA (not MBLs)
  - Imipenem-relebactam: Restores imipenem activity against AmpC + OprD loss
  - Cefiderocol: Active against MBL-producing Pseudomonas
  - Polymyxins: Last resort

*3. Carbapenem-Resistant Enterobacterales (CRE):*
- **KPC (Klebsiella pneumoniae carbapenemase)** - Class A serine:
  - Most common carbapenemase in US
  - Treatment: Ceftazidime-avibactam (drug of choice), meropenem-vaborbactam, imipenem-relebactam
  - Ceftazidime-avibactam resistance: KPC mutations (D179Y); may restore meropenem susceptibility
- **NDM (New Delhi metallo-beta-lactamase)** - Class B metallo:
  - Common in South/Southeast Asia, spreading globally
  - Hydrolyzes ALL beta-lactams except aztreonam
  - Not inhibited by avibactam, vaborbactam, or relebactam (serine-based inhibitors)
  - Treatment: Ceftazidime-avibactam + aztreonam (synergistic), cefiderocol, aztreonam-avibactam
- **OXA-48-like** - Class D serine:
  - Common in Middle East, North Africa, Europe
  - Weakly hydrolyzes carbapenems; often combined with porin loss or ESBLs
  - Treatment: Ceftazidime-avibactam (drug of choice)
- **VIM/IMP** - Class B metallo:
  - Similar profile to NDM; more common in Europe (VIM) and Asia-Pacific (IMP)

**Treatment Algorithm for CRE:**
1. Identify carbapenemase type (rapid PCR or phenotypic testing)
2. KPC: Ceftazidime-avibactam or meropenem-vaborbactam
3. NDM/VIM/IMP: Ceftazidime-avibactam + aztreonam, cefiderocol, or aztreonam-avibactam
4. OXA-48: Ceftazidime-avibactam
5. Unknown/combination: Cefiderocol (broadest single-agent activity)
6. Salvage: Polymyxin-based combinations; consider cefiderocol + another active agent

**WHO High Priority Pathogens:**
- Vancomycin-resistant Enterococcus faecium (VRE)
- MRSA
- Clarithromycin-resistant Helicobacter pylori
- Fluoroquinolone-resistant Campylobacter
- Fluoroquinolone-resistant Salmonella
- Cephalosporin-resistant/fluoroquinolone-resistant Neisseria gonorrhoeae

**Advanced Stewardship Program Design:**

*Metrics and Outcomes:*
- **Process metrics**: Days of therapy per 1000 patient-days (DOT/1000 PD); antibiotic starts; time to de-escalation
- **Outcome metrics**: C. difficile infection rates; MDRO incidence; bloodstream infection mortality; length of stay
- **Balancing metrics**: Untreated infections; readmission rates; mortality (ensure stewardship is not harmful)
- **NHSN antimicrobial use (AU) and resistance (AR) reporting**: Benchmark against national data

*Molecular Epidemiology in Stewardship:*
- Whole-genome sequencing (WGS) for outbreak investigation
- Plasmid tracking: Identify resistance gene transmission between species
- Strain typing: Distinguish relapse from reinfection
- Resistome analysis: Comprehensive characterization of all resistance genes in a specimen or patient

*Stewardship in Special Populations:*
- **ICU**: Higher resistance; empiric broad-spectrum often necessary; more aggressive de-escalation
- **Immunocompromised**: Lower threshold for empiric therapy; longer durations sometimes needed; increased MDRO risk
- **Long-term care facilities**: Reservoir for MDROs; outpatient stewardship principles apply; avoid unnecessary cultures (asymptomatic bacteriuria)
- **Neonatal**: Developmental pharmacology; unique pathogens (GBS); antibiotic exposure affects microbiome development

**One Health Approach:**
- AMR at the human-animal-environment interface
- Agricultural antibiotic use (growth promotion banned in US/EU but not globally)
- Environmental contamination: Pharmaceutical manufacturing waste, hospital effluent
- Wildlife reservoirs of resistant organisms
- Coordinated surveillance across sectors (CDC, USDA, EPA)`,
      keyTerms: [
        {
          term: 'Carbapenemase',
          definition:
            'A beta-lactamase enzyme capable of hydrolyzing carbapenem antibiotics; includes KPC (class A), NDM/VIM/IMP (class B metallo), and OXA-48 (class D)',
        },
        {
          term: 'Difficult-to-treat resistance (DTR)',
          definition:
            'A category of Pseudomonas aeruginosa resistance defined as non-susceptibility to all beta-lactams and fluoroquinolones, requiring alternative agents',
        },
        {
          term: 'CRAB',
          definition:
            'Carbapenem-Resistant Acinetobacter baumannii; WHO critical priority pathogen with limited treatment options',
        },
        {
          term: 'Sulbactam-durlobactam',
          definition:
            'An FDA-approved combination specifically targeting CRAB, leveraging sulbactam intrinsic activity against Acinetobacter PBPs with a novel DBO beta-lactamase inhibitor',
        },
        {
          term: 'Days of therapy (DOT)',
          definition:
            'A stewardship metric measuring antibiotic use as the number of days each antibiotic is administered per 1000 patient-days',
        },
        {
          term: 'One Health',
          definition:
            'An integrated approach recognizing the interconnection of human, animal, and environmental health in addressing AMR',
        },
        {
          term: 'Resistome',
          definition:
            'The complete collection of antibiotic resistance genes in a bacterial population, patient, or environment',
        },
        {
          term: 'Whole-genome sequencing (WGS)',
          definition:
            'Complete DNA sequencing of an organism enabling precise strain identification, resistance gene detection, and phylogenetic analysis for outbreak investigation',
        },
      ],
      clinicalNotes:
        'Carbapenemase identification is critical for optimal CRE treatment: KPC and OXA-48 respond to ceftazidime-avibactam, while metallo-beta-lactamases (NDM, VIM, IMP) require aztreonam-based combinations or cefiderocol. CRAB remains the most challenging MDRO with sulbactam-durlobactam as the first targeted therapy. Stewardship metrics should be tracked longitudinally and benchmarked against NHSN data. Rapid molecular resistance detection (e.g., Xpert Carba-R, BioFire BCID) enables real-time treatment optimization and is a key integration point between diagnostics and stewardship.',
    },
    5: {
      level: 5,
      summary:
        'Expert AMR management encompasses global policy frameworks, novel antimicrobial economic models, emerging resistance threats (pan-drug resistance, colistin resistance), decolonization strategies, machine learning for resistance prediction, and the design of national action plans aligned with WHO Global Action Plan on AMR.',
      explanation: `Expert-level AMR knowledge integrates clinical management, translational research, policy leadership, and global health strategy.

**The Global AMR Crisis - Expert Perspective:**

*Global Burden Data (Lancet 2022):*
- 1.27 million deaths directly attributable to AMR; 4.95 million associated with AMR (2019)
- Highest burden: Sub-Saharan Africa and South Asia
- Leading pathogen-drug combinations:
  - Methicillin-resistant S. aureus: 100,000+ attributable deaths
  - Third-generation cephalosporin-resistant E. coli: Major contributor
  - Carbapenem-resistant Acinetobacter and K. pneumoniae: Rising rapidly

*Pandrug Resistance (PDR):*
- Definition: Non-susceptible to all agents in all antimicrobial categories
- Documented in Acinetobacter baumannii, Pseudomonas aeruginosa, and some Enterobacterales
- When no antibiotics work: Supportive care, source control, investigational agents
- Phage therapy and compassionate use agents as options of last resort

*Transmissible Colistin Resistance:*
- mcr-1 gene (discovered 2015): Plasmid-mediated; phosphoethanolamine transferase modifying LPS
- mcr-1 through mcr-10 identified globally
- Threat: Colistin was last-resort agent for CRE and CRAB
- Surveillance: Global tracking through genomic databases
- Policy response: Many countries banned colistin as growth promoter in agriculture

**Advanced MDRO Management Strategies:**

*Decolonization:*
- **MRSA decolonization**: Intranasal mupirocin + chlorhexidine bathing
  - Universal decolonization in ICU (REDUCE-MRSA trial): Reduced bloodstream infections by 44%
  - Targeted decolonization for pre-surgical patients
  - Household decolonization for recurrent community MRSA skin infections
- **VRE decolonization**: No proven strategy; focus on infection prevention
- **CRE decolonization**: Limited evidence; oral gentamicin or colistin studied but concerns about resistance
- **Microbiome-based decolonization**: FMT and defined consortia under investigation for MDRO gut decolonization; promising early results

*Combination Therapy Rationale:*
- Synergy testing: Checkerboard and time-kill assays
- Double carbapenem therapy: For some KPC producers (ertapenem as "suicide substrate" + meropenem)
  - Rationale: Ertapenem preferentially binds KPC, allowing meropenem to reach PBPs
  - Largely replaced by novel BL/BLI combinations
- Colistin + meropenem, colistin + tigecycline: Historical combinations for CRE
- Ceftazidime-avibactam + aztreonam: Mechanistically rational for MBL producers

*Newer Therapeutic Approaches:*
- **Cefiderocol**: Siderophore cephalosporin; broadest activity against resistant gram-negatives including MBL, KPC, OXA, CRAB, CRPA
  - CREDIBLE-CR trial: Higher mortality in CRAB subgroup (controversial; patient selection bias)
  - APEKS-NP trial: Non-inferior for nosocomial pneumonia
- **Aztreonam-avibactam**: Rational combination covering all beta-lactamase classes; approved/in development
- **Sulbactam-durlobactam**: First targeted CRAB therapy; ATTACK trial demonstrated superiority over colistin-based regimens
- **Cephalosporin-siderophore conjugates in development**: GT-1, S-649266 derivatives

**Artificial Intelligence and AMR:**

*Machine Learning Applications:*
- Antimicrobial susceptibility prediction from WGS data
- Automated antibiogram generation and resistance trend analysis
- Real-time surveillance dashboards
- Clinical decision support: Predicting MDRO infection risk based on patient factors
- Drug repurposing: AI-driven identification of compounds with antimicrobial activity (e.g., halicin)
- De novo antibiotic design using generative models

*Digital Stewardship:*
- Electronic health record-integrated clinical decision support
- Natural language processing for antibiotic indication documentation
- Automated alerts for culture-drug mismatches
- Predictive analytics for C. difficile risk
- Telemedicine-enabled ID consultations for community hospitals

**Global Policy Framework:**

*WHO Global Action Plan on AMR (2015):*
1. Improve awareness and understanding of AMR
2. Strengthen surveillance and research
3. Reduce incidence of infection
4. Optimize use of antimicrobial medicines
5. Develop sustainable investment case for new medicines, diagnostics, vaccines, and other interventions

*National Action Plans:*
- US: National Action Plan for Combating Antibiotic-Resistant Bacteria (CARB)
  - CDC Antibiotic Resistance Threats Report (updated 2019): Urgent, serious, concerning threats
  - AR Lab Network: Regional labs for advanced resistance testing
  - NHSN: Standardized reporting of AU and AR
- EU: European Antimicrobial Resistance Surveillance Network (EARS-Net)
- Global: GLASS (Global Antimicrobial Resistance and Use Surveillance System)

*Economic Incentive Models:*
- **Push incentives**: Fund early-stage R&D (CARB-X, BARDA, GARDP, Wellcome Trust)
- **Pull incentives**: Reward successful development
  - Transferable exclusivity vouchers: Extend patent on another drug as reward for new antibiotic
  - PASTEUR Act (US): Subscription model - government pays fixed fee regardless of volume
  - UK subscription model (pilot): NHS pays fixed annual fee for access to novel antibiotics
  - Market entry rewards (EU): One-time payment upon regulatory approval
- **Delinkage**: Separate antibiotic revenue from sales volume to ensure appropriate use post-approval

*Stewardship at Scale:*
- WHO AWaRe classification:
  - **Access**: First-line for common infections; widely available (e.g., amoxicillin, metronidazole)
  - **Watch**: Higher resistance potential; priority for stewardship (e.g., fluoroquinolones, 3rd-gen cephalosporins)
  - **Reserve**: Last-resort antibiotics; restricted use (e.g., colistin, ceftazidime-avibactam, linezolid)
- Global target: 60% of total antibiotic consumption from Access group by 2023 (WHO)
- Essential medicines list alignment

**Emerging Research Frontiers:**

*Diagnostics-Driven Stewardship:*
- Rapid AST from positive blood cultures (<6 hours): Accelerate PhenoTest, REVEAL, dRAST
- Host response biomarkers: Transcriptomic signatures distinguishing bacterial from viral infection
- Point-of-care molecular diagnostics in low-resource settings
- Direct-from-specimen AST (bypassing culture)

*Novel Therapeutics Under Investigation:*
- CRISPR-Cas antimicrobials: Programmed to target resistance genes, restoring susceptibility
- Anti-virulence therapeutics: QSIs, anti-toxin antibodies, type III secretion system inhibitors
- Immunotherapy: Monoclonal antibodies against MDRO surface antigens
- Microbiome restoration: Precision probiotics for MDRO decolonization
- Metal-based antimicrobials: Gallium disrupting bacterial iron metabolism
- Antimicrobial peptides: Innate defense molecules with novel MOAs and low resistance potential`,
      keyTerms: [
        {
          term: 'Pandrug resistance (PDR)',
          definition:
            'Non-susceptibility to all agents in all antimicrobial categories tested; the most extreme form of drug resistance',
        },
        {
          term: 'mcr-1',
          definition:
            'The first plasmid-mediated colistin resistance gene, encoding a phosphoethanolamine transferase that modifies LPS, threatening the last-resort agent for multidrug-resistant gram-negative infections',
        },
        {
          term: 'AWaRe classification',
          definition:
            'WHO framework categorizing antibiotics as Access (first-line), Watch (stewardship priority), or Reserve (last-resort) to guide appropriate use globally',
        },
        {
          term: 'PASTEUR Act',
          definition:
            'Proposed US legislation establishing a subscription-based payment model for novel antibiotics, decoupling revenue from sales volume to incentivize development while promoting stewardship',
        },
        {
          term: 'Decolonization',
          definition:
            'Strategies to eliminate MDRO carriage (e.g., mupirocin + chlorhexidine for MRSA) to prevent subsequent infections and transmission',
        },
        {
          term: 'GLASS',
          definition:
            'Global Antimicrobial Resistance and Use Surveillance System; WHO-coordinated international AMR surveillance network',
        },
        {
          term: 'Delinkage',
          definition:
            'Economic models that separate antibiotic revenue from sales volume, enabling appropriate stewardship without financial disincentives for developers',
        },
        {
          term: 'Halicin',
          definition:
            'A novel antibiotic compound identified using machine learning, demonstrating the potential of artificial intelligence in drug discovery for AMR',
        },
      ],
      clinicalNotes:
        'The infectious disease specialist must serve as both clinical expert and policy advocate in the AMR crisis. Key responsibilities include: (1) Leading institutional stewardship programs with measurable outcomes benchmarked against national data. (2) Integrating rapid molecular diagnostics for carbapenemase identification into real-time treatment algorithms. (3) Engaging with the emerging pipeline of novel agents while maintaining competency in complex combination regimens for PDR organisms. (4) Advocating for sustainable economic models (PASTEUR Act, subscription-based procurement) to incentivize antibiotic development. (5) Applying the One Health framework, recognizing that AMR in human medicine is inextricable from agricultural and environmental antibiotic use. (6) Contributing to global surveillance through GLASS, NHSN, and regional networks. The AWaRe framework provides a practical tool for both institutional and national antibiotic use optimization.',
    },
  },
  media: [],
  citations: [
    {
      id: 'lancet-amr-burden-2022',
      type: 'article',
      title:
        'Global burden of bacterial antimicrobial resistance in 2019: a systematic analysis',
      authors: ['Antimicrobial Resistance Collaborators'],
      source: 'The Lancet',
      license: 'Copyrighted',
    },
    {
      id: 'who-gap-amr-2015',
      type: 'website',
      title: 'Global Action Plan on Antimicrobial Resistance',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789241509763',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'cdc-ar-threats-2019',
      type: 'website',
      title: 'Antibiotic Resistance Threats in the United States, 2019',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/drugresistance/biggest-threats.html',
      license: 'Public Domain',
    },
    {
      id: 'tamma-idsa-amr-guidance-2023',
      type: 'article',
      title:
        'IDSA 2023 Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections',
      authors: ['Tamma PD', 'Aitken SL', 'Bonomo RA', 'Mathers AJ', 'van Duin D', 'Clancy CJ'],
      source: 'Infectious Diseases Society of America',
      license: 'Copyrighted',
    },
    {
      id: 'who-priority-pathogens-2024',
      type: 'website',
      title: 'WHO Bacterial Priority Pathogens List, 2024',
      source: 'World Health Organization',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],
  crossReferences: [
    {
      targetId: 'infectious-disease-bacterial-infections-comprehensive',
      targetType: 'topic',
      relationship: 'related',
      label: 'Bacterial Infections and Antibiotics',
    },
    {
      targetId: 'infectious-disease-viral-infections-comprehensive',
      targetType: 'topic',
      relationship: 'related',
      label: 'Viral Infections and Antiviral Therapy',
    },
    {
      targetId: 'infectious-disease-sepsis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Sepsis',
    },
    {
      targetId: 'infectious-disease-antibiotic-resistance',
      targetType: 'concept',
      relationship: 'related',
      label: 'Antibiotic Resistance (Overview)',
    },
  ],
  tags: {
    systems: ['infectious-disease', 'microbiology', 'pharmacology', 'public-health'],
    topics: [
      'antimicrobial-resistance',
      'stewardship',
      'MDRO',
      'infection-prevention',
      'global-health',
    ],
    keywords: [
      'AMR',
      'MRSA',
      'VRE',
      'ESBL',
      'CRE',
      'CRAB',
      'CRPA',
      'KPC',
      'NDM',
      'carbapenemase',
      'stewardship',
      'WHO',
      'AWaRe',
      'resistance',
      'beta-lactamase',
      'decolonization',
      'One Health',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
