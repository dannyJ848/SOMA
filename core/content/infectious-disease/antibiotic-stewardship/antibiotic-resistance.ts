import { EducationalContent } from '../../types';

export const ANTIBIOTIC_RESISTANCE: EducationalContent = {
  id: 'infectious-disease-antibiotic-resistance',
  type: 'concept',
  name: 'Antibiotic Resistance',
  alternateNames: ['Antimicrobial Resistance', 'AMR', 'Drug Resistance', 'Multidrug Resistance'],
  levels: {
    1: {
      level: 1,
      summary: 'Antibiotic resistance happens when bacteria change and are no longer killed by antibiotics, making infections harder to treat.',
      explanation: `Antibiotics are medicines that kill bacteria or stop them from growing. They have saved millions of lives by treating infections. But bacteria are living things that can change over time, and some bacteria have learned to survive even when antibiotics are used against them. These are called "antibiotic-resistant" bacteria.

**Why Does This Happen?**
When you take an antibiotic, it kills most bacteria causing the infection. But if a few bacteria have changes (mutations) that help them survive, those survivors multiply. Soon, you have an infection of bacteria that the antibiotic can't kill.

Think of it like weeds in a garden. If you use the same weed killer over and over, eventually some weeds develop resistance and survive. Then those resistant weeds take over.

**Why It's a Problem:**
- Infections become harder to treat
- People stay sick longer
- More expensive treatments may be needed
- More people can die from infections

**What Makes Resistance Worse:**
- Taking antibiotics when you don't need them (like for colds or flu - which are caused by viruses, not bacteria)
- Not finishing your antibiotic prescription
- Overuse of antibiotics in farm animals
- Poor infection control (resistance spreads between people)

**What You Can Do:**
- Only take antibiotics when prescribed by a doctor
- Take them exactly as prescribed and finish the whole course
- Never share antibiotics or save them for later
- Prevent infections by washing hands and getting vaccines
- Don't pressure your doctor for antibiotics`,
      keyTerms: [
        { term: 'Antibiotic', definition: 'A medicine that kills bacteria or stops them from growing' },
        { term: 'Antibiotic resistance', definition: 'When bacteria change and survive treatment with antibiotics' },
        { term: 'Bacteria', definition: 'Tiny single-celled organisms, some of which cause infections' },
        { term: 'Mutation', definition: 'A change in a living thing\'s genetic code that can be passed to offspring' },
      ],
    },
    2: {
      level: 2,
      summary: 'Antibiotic resistance arises through genetic mutations and horizontal gene transfer, accelerated by antibiotic overuse, and represents a major threat to modern medicine.',
      explanation: `Antimicrobial resistance (AMR) occurs when microorganisms (bacteria, viruses, fungi, parasites) evolve mechanisms to survive exposure to drugs that would normally kill them or inhibit their growth.

**How Bacteria Become Resistant:**

*Genetic Changes:*
1. **Spontaneous mutations**: Random DNA changes that happen during replication
2. **Horizontal gene transfer**: Bacteria share resistance genes through:
   - Conjugation (direct contact)
   - Transformation (picking up DNA from environment)
   - Transduction (via viruses that infect bacteria)

*Resistance Mechanisms:*
| Mechanism | How It Works | Example |
|-----------|--------------|---------|
| Enzyme inactivation | Bacteria produce enzymes that destroy the antibiotic | Beta-lactamases break down penicillin |
| Target modification | The drug's target changes so it can't bind | Altered ribosomes in macrolide resistance |
| Efflux pumps | Bacteria pump the drug out before it can work | Tetracycline resistance |
| Reduced permeability | Bacteria change their outer membrane to block drug entry | Gram-negative resistance |

**Selection Pressure:**
Antibiotics create "selective pressure." When exposed to an antibiotic:
- Susceptible bacteria die
- Resistant bacteria survive and multiply
- Eventually, resistant bacteria dominate

The more antibiotics are used, the faster resistance develops.

**Major Resistant Organisms:**

| Organism | Resistance | Concern Level |
|----------|------------|---------------|
| MRSA | Methicillin/oxacillin | Serious |
| VRE | Vancomycin | Serious |
| ESBL Enterobacteriaceae | Extended-spectrum cephalosporins | Serious |
| CRE | Carbapenems | Urgent |
| Drug-resistant TB | Multiple TB drugs | Serious |
| *N. gonorrhoeae* | Multiple antibiotics | Urgent |

**Contributing Factors:**
- Human antibiotic overuse and misuse
- Antibiotic use in agriculture (growth promotion, disease prevention)
- Poor infection control in healthcare settings
- Lack of new antibiotic development
- Global travel spreading resistant bacteria
- Inadequate sanitation in some regions

**Global Impact:**
- CDC estimates 2.8 million resistant infections and 35,000 deaths annually in the US
- WHO considers AMR a top 10 global health threat
- Without action, AMR could cause 10 million deaths/year by 2050 (projected)`,
      keyTerms: [
        { term: 'Horizontal gene transfer', definition: 'The movement of genetic material between bacteria, spreading resistance genes' },
        { term: 'Beta-lactamase', definition: 'An enzyme that breaks down beta-lactam antibiotics (penicillins, cephalosporins)' },
        { term: 'Selective pressure', definition: 'Environmental factor (like antibiotic exposure) that favors survival of certain organisms' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase - enzyme conferring resistance to many antibiotics' },
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacteriaceae - bacteria resistant to last-resort antibiotics' },
      ],
    },
    3: {
      level: 3,
      summary: 'Antibiotic resistance mechanisms encompass enzymatic inactivation, target modification, efflux pumps, and permeability barriers, with resistance genes disseminated via mobile genetic elements and clonal spread, necessitating coordinated One Health approaches.',
      explanation: `Understanding the molecular basis of resistance and the population dynamics of resistant organisms informs surveillance, treatment, and prevention strategies.

**Molecular Mechanisms:**

*Enzymatic Inactivation:*
- **Beta-lactamases**: Hydrolyze beta-lactam ring
  - Class A (TEM, SHV, CTX-M ESBLs): Serine active site
  - Class B (NDM, VIM, IMP): Metallo-beta-lactamases requiring zinc
  - Class C (AmpC): Cephalosporinases
  - Class D (OXA): Oxacillinases, some carbapenemases
- **Aminoglycoside-modifying enzymes**: Acetylation, phosphorylation, adenylation
- **Chloramphenicol acetyltransferases**

*Target Modification:*
- **Ribosomal mutations**: Macrolide, aminoglycoside resistance
- **Ribosomal methylation**: erm genes (MLSB resistance)
- **PBP alterations**: mecA (MRSA), mosaic PBPs (penicillin-resistant pneumococcus)
- **DNA gyrase/topoisomerase mutations**: Fluoroquinolone resistance
- **RNA polymerase mutations**: Rifampin resistance

*Efflux Pumps:*
- Mex pumps in *Pseudomonas* (multidrug resistance)
- Tet pumps for tetracycline efflux
- Often provide low-level multidrug resistance

*Permeability Barriers:*
- Porin mutations (OprD loss in *Pseudomonas* - carbapenem resistance)
- Outer membrane modifications
- Particularly important in gram-negatives

**Mobile Genetic Elements:**

*Plasmids:*
- Self-replicating circular DNA
- Often carry multiple resistance genes
- Can be transferred between bacteria via conjugation
- IncF, IncA/C plasmids common carriers of resistance

*Transposons:*
- "Jumping genes" that move within and between DNA molecules
- Tn10 (tetracycline), Tn3 (ampicillin)

*Integrons:*
- Gene capture systems
- Acquire and express gene cassettes
- Class 1 integrons often in clinical isolates

*Insertion Sequences:*
- Mobile elements that can disrupt genes or provide promoters
- ISAba1 drives carbapenemase expression in Acinetobacter

**Epidemiology:**

*Clonal Spread:*
- Successful clones disseminate globally
- ST131 *E. coli*: Major ESBL clone
- ST258 *K. pneumoniae*: KPC carbapenemase
- USA300 MRSA: Dominant CA-MRSA in US

*Plasmid-Mediated Spread:*
- Same resistance gene in diverse bacterial species
- blaNDM-1: Spread from India globally on multiple plasmids

**One Health Approach:**
Resistance in human, animal, and environmental sectors are interconnected:

*Human Health:*
- Hospital and community antibiotic use
- Infection prevention and control
- Surveillance and reporting

*Animal Health:*
- Agricultural antibiotic use (treatment, prevention, growth promotion)
- Resistance in food animals transmitted to humans
- Regulations limiting agricultural use (EU ban on growth promoters)

*Environment:*
- Pharmaceutical manufacturing waste
- Agricultural runoff
- Wastewater treatment plants
- Environmental reservoirs of resistance genes`,
      keyTerms: [
        { term: 'Mobile genetic element', definition: 'DNA sequences that can move within or between genomes, often carrying resistance genes' },
        { term: 'Integron', definition: 'A genetic system that can capture, integrate, and express gene cassettes including resistance genes' },
        { term: 'ST131', definition: 'Sequence type 131 - a globally successful E. coli clone associated with ESBL production' },
        { term: 'One Health', definition: 'An approach recognizing interconnections between human, animal, and environmental health' },
        { term: 'Clonal spread', definition: 'Dissemination of a single bacterial lineage carrying resistance' },
      ],
    },
    4: {
      level: 4,
      summary: 'Antibiotic resistance biology involves complex regulatory networks, fitness costs, and compensatory mutations, with dissemination driven by plasmid dynamics and clonal expansion, requiring integrated genomic surveillance, novel therapeutics, and multi-sectoral interventions.',
      explanation: `Advanced understanding of resistance integrates molecular genetics, evolutionary biology, and systems-level thinking to address this complex threat.

**Resistance Gene Regulation:**

*Inducible Resistance:*
- AmpC: Induced by beta-lactam exposure via AmpR/AmpD system
- MexXY in *Pseudomonas*: Induced by aminoglycosides, tetracyclines
- erm genes: Inducible or constitutive MLSB resistance
- Clinical implications: May test susceptible but fail treatment

*Two-Component Systems:*
- Sensor kinase + response regulator
- PhoP/PhoQ: Polymyxin resistance in Enterobacteriaceae
- VanS/VanR: Vancomycin resistance in enterococci

**Fitness and Evolution:**

*Fitness Costs:*
- Resistance mutations often reduce bacterial fitness
- In absence of antibiotic, susceptible bacteria may outcompete resistant
- Basis for antibiotic rotation/cycling strategies (limited evidence)

*Compensatory Mutations:*
- Secondary mutations restore fitness without losing resistance
- Resistant bacteria become stable even without antibiotic pressure
- Explains persistence of resistance after antibiotic restriction

*Within-Host Evolution:*
- Prolonged infections allow resistance emergence during treatment
- Cystic fibrosis lungs: Evolution of resistance over years
- Immunocompromised patients: Chronic infections, adaptation

**Genomic Epidemiology:**

*Whole-Genome Sequencing Applications:*
- Identify resistance genes and predict susceptibility
- Track transmission (outbreak investigation)
- Understand global dissemination patterns
- Identify novel resistance mechanisms

*Metagenomics:*
- "Resistome" - all resistance genes in a sample
- Gut microbiome as reservoir of resistance genes
- Environmental surveillance of resistance

**Emerging Threats:**

*Carbapenem-Resistant Organisms:*
| Carbapenemase | Geography | Treatment Options |
|---------------|-----------|-------------------|
| KPC | US, Europe | Ceftazidime-avibactam |
| NDM | South Asia, global | Aztreonam-avibactam, cefiderocol |
| OXA-48-like | Middle East, Europe | Ceftazidime-avibactam |
| VIM, IMP | Variable | Limited |

*mcr-1 (Plasmid-Mediated Colistin Resistance):*
- Discovered 2015 in China
- Now global distribution
- Threatens last-resort therapy
- Regulations on agricultural colistin use

*Transferable Tigecycline Resistance:*
- tet(X) genes with enzymatic inactivation
- Emerging concern

**Drug Development:**

*Pipeline Challenges:*
- Limited financial incentives (antibiotics used short-term)
- High failure rates in development
- GAIN Act, LPAD pathway: Regulatory incentives
- Pull incentives: Subscription models, transferable exclusivity

*Novel Approaches:*
| Strategy | Examples |
|----------|----------|
| New antibiotic classes | Pleuromutilins, teixobactin-like |
| Beta-lactamase inhibitor combinations | Avibactam, vaborbactam, relebactam |
| Siderophore conjugates | Cefiderocol |
| Narrow-spectrum agents | Pathogen-specific targeting |
| Bacteriophage therapy | Compassionate use cases |
| Antibody-antibiotic conjugates | In development |
| Anti-virulence approaches | Quorum sensing inhibitors |

**Policy and Stewardship:**

*National Action Plans:*
- US National Action Plan for CARB
- UK 5-year AMR Strategy
- WHO Global Action Plan on AMR

*Surveillance Networks:*
- CDC AR Threats Report
- ECDC/EARS-Net
- WHO GLASS (Global AMR Surveillance System)
- CDDEP ResistanceMap`,
      keyTerms: [
        { term: 'Fitness cost', definition: 'Reduced survival or reproduction ability associated with resistance mutations' },
        { term: 'Compensatory mutation', definition: 'A secondary mutation that restores fitness while maintaining resistance' },
        { term: 'Resistome', definition: 'The complete collection of resistance genes in a genome or environment' },
        { term: 'mcr-1', definition: 'A plasmid-mediated gene conferring resistance to colistin, a last-resort antibiotic' },
        { term: 'GAIN Act', definition: 'Generating Antibiotic Incentives Now - US legislation providing incentives for antibiotic development' },
      ],
      clinicalNotes: 'Understanding resistance mechanisms informs empiric therapy decisions. Local antibiograms should guide prescribing. When treating suspected resistant organisms, consider combination therapy and optimize PK/PD. Rapid diagnostics enabling earlier targeted therapy can reduce broad-spectrum use and selection pressure.',
    },
    5: {
      level: 5,
      summary: 'Expert-level understanding of antimicrobial resistance integrates molecular mechanisms, evolutionary dynamics, genomic epidemiology, novel therapeutic strategies, and global policy frameworks within a One Health paradigm to address this existential threat to modern medicine.',
      explanation: `Mastery of AMR encompasses advanced genetics, evolutionary biology, pharmacology, and health policy to drive solutions at multiple levels.

**Advanced Resistance Mechanisms:**

*Complex Beta-Lactamase Evolution:*
- Directed evolution studies reveal fitness landscapes
- CTX-M-14 to CTX-M-15: Single mutation expands substrate spectrum
- Accumulation of mutations expands and optimizes resistance
- Prediction of resistance evolution from structural analysis

*Heteroresistance:*
- Subpopulations with elevated MICs within apparently susceptible isolates
- May lead to treatment failure despite susceptible test result
- Population analysis profile (PAP) for detection
- Clinical implications for colistin, vancomycin

*Adaptive Resistance:*
- Transient, non-heritable resistance induced by environmental conditions
- Biofilm-associated resistance
- Persister cells: Metabolically dormant, tolerant to killing
- Distinct from genetic resistance but clinically relevant

*Epistasis and Genetic Background:*
- Resistance phenotype depends on genetic context
- Same resistance gene may confer different levels in different strains
- Complicates genotype-to-phenotype prediction

**Genomic Surveillance at Scale:**

*Real-Time Genomic Epidemiology:*
- Oxford Nanopore sequencing: Rapid, portable
- Integration with electronic health records
- Automated resistance prediction algorithms
- Public health dashboards

*Global Pathogen Surveillance:*
- Pathogenwatch, NCBI Pathogen Detection
- International collaborations (SEDRIC, JPIAMR)
- Climate change and AMR spread considerations

*Machine Learning Applications:*
- Predicting resistance from genotype
- Identifying novel resistance mechanisms
- Forecasting outbreak trajectories
- Optimizing empiric therapy based on patient factors

**Novel Therapeutic Approaches:**

*Bacteriophage Therapy:*
- FDA emergency compassionate use cases
- Challenges: Host range, resistance development, immunogenicity
- Phage-antibiotic synergy
- Engineered phages to overcome limitations

*Microbiome-Based Interventions:*
- Fecal microbiota transplantation for recurrent CDI
- Defined bacterial consortia
- Competitive exclusion of resistant organisms
- "Decolonization" of MDROs through microbiome manipulation

*Immunotherapy:*
- Monoclonal antibodies against pathogens (bezlotoxumab for CDI)
- Anti-virulence antibodies
- Vaccines to prevent infections requiring antibiotics
- Host-directed therapies enhancing immune clearance

*CRISPR-Based Approaches:*
- Targeting resistance genes for destruction
- Sensitizing bacteria to antibiotics
- Delivery challenges (phage vectors)

**Economic and Policy Frameworks:**

*Antibiotic Market Failure:*
- Low return on investment for developers
- Short treatment courses, use restrictions
- "Fire extinguisher" problem: Needed but rarely used

*Incentive Models:*
| Model | Description |
|-------|-------------|
| Push incentives | Grants, tax credits for R&D |
| Pull incentives | Prizes, market entry rewards |
| Subscription models | Fixed payment regardless of volume (UK pilot) |
| Transferable exclusivity | Extend patents on other drugs |
| Delinkage | Separate return from sales volume |

*Stewardship Policy:*
- Antibiotic prescribing metrics
- Prior authorization requirements
- Public reporting of resistance rates
- Agricultural antibiotic use regulations

**Global Governance:**

*WHO Initiatives:*
- Global Action Plan on AMR (2015)
- WHO AWaRe classification (Access, Watch, Reserve)
- Prequalification of biosimilar antibiotics
- Capacity building in low-resource settings

*G7/G20 Engagement:*
- AMR as global security threat
- Financing mechanisms for R&D
- Strengthening national action plans

*Equity Considerations:*
- Access vs. excess: Ensuring antibiotics available where needed
- Global price negotiations
- Technology transfer
- WASH infrastructure as foundation

**Future Directions:**

*Precision Antimicrobial Therapy:*
- Rapid molecular diagnostics standard of care
- Real-time therapeutic drug monitoring
- AI-assisted prescribing decisions
- Personalized microbiome analysis

*Alternative Strategies:*
- Antibiotic stewardship as primary approach
- Infection prevention investments
- Vaccine development reducing antibiotic need
- Understanding and leveraging competitive exclusion

*Systems Thinking:*
- AMR as socio-ecological problem
- Behavioral science for prescriber and patient engagement
- Urban planning and sanitation infrastructure
- Climate change effects on infection and resistance patterns`,
      keyTerms: [
        { term: 'Heteroresistance', definition: 'Presence of subpopulations with different susceptibilities within a single isolate' },
        { term: 'Persister cells', definition: 'Metabolically dormant bacteria that are tolerant to antibiotics without being genetically resistant' },
        { term: 'AWaRe classification', definition: 'WHO categorization of antibiotics into Access, Watch, and Reserve groups for stewardship' },
        { term: 'Delinkage', definition: 'Economic model separating antibiotic developer profits from volume sold to incentivize R&D while enabling stewardship' },
        { term: 'Competitive exclusion', definition: 'Using beneficial microbes to outcompete and displace pathogens' },
      ],
      clinicalNotes: 'Addressing AMR requires action at multiple levels: individual prescribing decisions, institutional stewardship programs, national policies, and global coordination. Clinicians should use rapid diagnostics when available, follow stewardship principles, and recognize that every antibiotic prescription contributes to the collective problem. Engagement with research and policy initiatives is part of professional responsibility.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cdc-ar-threats-2019',
      type: 'website',
      title: 'Antibiotic Resistance Threats in the United States, 2019',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      license: 'Copyrighted',
    },
    {
      id: 'who-amr-2021',
      type: 'website',
      title: 'Global Antimicrobial Resistance and Use Surveillance System (GLASS) Report 2021',
      authors: ['World Health Organization'],
      source: 'WHO',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-appropriate-antibiotic-use', targetType: 'concept', relationship: 'related', label: 'Appropriate Antibiotic Use' },
    { targetId: 'infectious-disease-infection-prevention', targetType: 'concept', relationship: 'related', label: 'Infection Prevention' },
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],
  tags: {
    systems: ['infectious-disease'],
    topics: ['antimicrobial-stewardship', 'public-health', 'microbiology'],
    keywords: ['AMR', 'antibiotic resistance', 'MRSA', 'ESBL', 'CRE', 'stewardship', 'One Health'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
