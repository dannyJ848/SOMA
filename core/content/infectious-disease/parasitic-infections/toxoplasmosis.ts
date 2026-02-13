import { EducationalContent } from '../../types';

export const TOXOPLASMOSIS: EducationalContent = {
  id: 'infectious-disease-toxoplasmosis',
  type: 'condition',
  name: 'Toxoplasmosis',
  nameEs: 'Toxoplasmosis',
  alternateNames: ['Toxoplasma gondii Infection', 'Toxo', 'Cerebral Toxoplasmosis'],
  levels: {
    1: {
      level: 1,
      summary: 'Toxoplasmosis is an infection caused by a tiny parasite called Toxoplasma gondii that spreads through undercooked meat, contaminated soil, or cat feces; it is usually harmless in healthy people but dangerous for pregnant women and people with weak immune systems.',
      explanation: `Toxoplasma gondii is one of the most common parasites in the world. It is estimated that up to one-third of the world's population has been infected. Most healthy people never know they have it because their immune system keeps it under control.

**How You Can Get Toxoplasmosis:**
- Eating undercooked or raw meat (especially pork, lamb, venison) containing parasite cysts
- Accidentally swallowing soil or water contaminated with cat feces
- Cleaning a cat's litter box (cats are the only animals where the parasite completes its life cycle)
- From mother to baby during pregnancy (congenital toxoplasmosis)

**Symptoms:**
- Most healthy people: No symptoms or mild flu-like illness (swollen lymph nodes, fatigue)
- Pregnant women: Can pass to baby causing birth defects (brain damage, eye problems)
- People with weak immune systems (HIV/AIDS): Brain infection causing headaches, confusion, seizures, fever

**Prevention:**
- Cook meat to safe temperatures
- Wash fruits and vegetables thoroughly
- Wear gloves when gardening
- Pregnant women should avoid cleaning cat litter boxes
- If you have a cat, keep it indoors and feed it commercial food

**Treatment:**
- Healthy people usually do not need treatment
- Pregnant women and immunocompromised patients receive specific medications (pyrimethamine + sulfadiazine)`,
      keyTerms: [
        { term: 'Toxoplasma gondii', definition: 'A tiny parasite that can infect most warm-blooded animals; cats are its main host' },
        { term: 'Congenital', definition: 'Present from birth; congenital toxoplasmosis is passed from mother to baby during pregnancy' },
        { term: 'Cyst', definition: 'A dormant form of the parasite that hides inside tissue and can be reactivated' },
        { term: 'Immunocompromised', definition: 'Having a weakened immune system that cannot fight infections normally' },
      ],
      patientCounselingPoints: [
        'Pregnant women should not clean cat litter boxes and should cook meat thoroughly.',
        'You do not need to get rid of your cat if you are pregnant - just take precautions.',
        'If you have HIV, take your medications to keep your immune system strong and prevent toxoplasmosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Toxoplasma gondii is an obligate intracellular protozoan parasite with cats as definitive hosts; clinical significance lies in congenital infection (chorioretinitis, hydrocephalus, intracranial calcifications) and reactivation encephalitis in HIV/AIDS (CD4 <100); diagnosed by serology or brain imaging showing ring-enhancing lesions.',
      explanation: `Toxoplasma gondii is an apicomplexan parasite (same phylum as Plasmodium) with a complex life cycle involving definitive (cat) and intermediate (all warm-blooded animals, including humans) hosts.

**Life Cycle:**
1. Cats shed oocysts in feces (millions over 1-2 weeks after primary infection)
2. Oocysts sporulate in environment (1-5 days) -> infectious
3. Humans infected by: ingesting oocysts (soil, water, unwashed produce) or tissue cysts (undercooked meat) or transplacentally
4. In humans: Tachyzoites (rapidly dividing) disseminate during acute infection
5. Immune response controls infection -> tachyzoites convert to bradyzoites within tissue cysts
6. Cysts persist lifelong in brain, muscle, eye (latent infection)
7. Immunosuppression -> bradyzoites reactivate to tachyzoites -> disease

**Clinical Syndromes:**

| Syndrome | Population | Key Features |
|----------|-----------|-------------|
| Acute acquired | Immunocompetent | Usually asymptomatic; cervical lymphadenopathy; self-limited |
| Cerebral toxoplasmosis | HIV/AIDS (CD4 <100) | Ring-enhancing brain lesions; headache, confusion, focal neurologic deficits, seizures |
| Ocular toxoplasmosis | Any (especially congenital) | Necrotizing chorioretinitis; "headlight in the fog" fundoscopic appearance |
| Congenital toxoplasmosis | Neonate | Classic triad: Chorioretinitis, hydrocephalus, intracranial calcifications (diffuse) |
| Disseminated | Transplant recipients | Pneumonitis, myocarditis, hepatitis |

**Diagnosis:**

*Serology:*
- IgG: Past or chronic infection; most of the world is seropositive
- IgM: Acute infection (but can persist for months; must interpret carefully)
- IgG avidity: High avidity = infection >3-4 months ago (useful in pregnancy to time infection)

*Cerebral Toxoplasmosis in HIV:*
- MRI: Multiple ring-enhancing lesions, often in basal ganglia
- Toxoplasma IgG positive (>95% of cases; negative IgG makes diagnosis unlikely)
- Empiric treatment trial: Clinical and radiographic improvement within 2 weeks supports diagnosis
- Brain biopsy: Reserved for non-responders (to rule out CNS lymphoma)

*Congenital:*
- Maternal seroconversion during pregnancy (IgM positive, rising IgG, low avidity)
- Amniocentesis PCR (after 18 weeks gestation)
- Neonatal evaluation: Brain imaging, ophthalmologic exam, Toxoplasma PCR/IgM/IgA

**Treatment:**

| Indication | Regimen | Duration |
|------------|---------|----------|
| Cerebral toxoplasmosis (HIV) | Pyrimethamine + sulfadiazine + leucovorin | 6 weeks acute; then maintenance until CD4 >200 for 6 months |
| Alternative (sulfa allergy) | Pyrimethamine + clindamycin + leucovorin | Same |
| Congenital toxoplasmosis | Pyrimethamine + sulfadiazine + leucovorin | 12 months |
| Acute in pregnancy | Spiramycin (first trimester); pyrimethamine + sulfadiazine (after 18 weeks if fetal infection confirmed) | Through delivery |

**Prophylaxis:**
- TMP-SMX prophylaxis for PCP also prevents toxoplasmosis (in seropositive HIV patients with CD4 <100)
- Discontinue when CD4 >200 for 3+ months on ART`,
      keyTerms: [
        { term: 'Tachyzoite', definition: 'The rapidly dividing form of Toxoplasma responsible for acute infection and tissue destruction' },
        { term: 'Bradyzoite', definition: 'The slowly dividing dormant form of Toxoplasma within tissue cysts that persists lifelong in the host' },
        { term: 'Ring-enhancing lesion', definition: 'A brain lesion on MRI that shows a bright ring with contrast, characteristic of cerebral toxoplasmosis in AIDS patients' },
        { term: 'IgG avidity', definition: 'A test measuring how strongly antibodies bind their target; high avidity indicates infection occurred more than 3-4 months ago' },
        { term: 'Leucovorin', definition: 'Folinic acid given alongside pyrimethamine to prevent bone marrow suppression' },
      ],
      examples: [
        'An HIV patient with CD4 of 50 develops headache and left-sided weakness; MRI shows ring-enhancing lesions in the basal ganglia; IgG is positive.',
        'A pregnant woman found to have new Toxoplasma IgM with low IgG avidity undergoes amniocentesis showing positive PCR.',
      ],
      patientCounselingPoints: [
        'If you have HIV with low CD4, take TMP-SMX as prescribed - it prevents toxoplasmosis.',
        'Treatment for cerebral toxoplasmosis is long but effective; do not stop medications early.',
        'Pregnant women should be tested for Toxoplasma antibodies early in pregnancy.',
      ],
    },
    3: {
      level: 3,
      summary: 'Toxoplasma pathogenesis involves active invasion of host cells via the apical complex (rhoptries, micronemes), formation of a parasitophorous vacuole that resists lysosomal fusion, and modulation of host cell signaling; host defense requires IL-12-driven Th1 immunity with IFN-gamma-activated macrophages.',
      explanation: `Understanding the molecular biology of Toxoplasma invasion, immune evasion, and the basis for clinical decision-making is essential.

**Molecular Pathogenesis:**

*Invasion:*
- Apical complex: Specialized secretory organelles (micronemes, rhoptries, dense granules)
- Micronemes: Adhesins for host cell recognition and attachment (MIC2, AMA1)
- Rhoptries: RON proteins form the moving junction; ROP proteins injected into host cell to modulate immune responses
- Active invasion: Parasite-driven (not phagocytosis); gliding motility using actin-myosin motor
- Parasitophorous vacuole (PV): Derived from host cell membrane during invasion; remodeled to resist lysosomal fusion

*Immune Modulation:*
- ROP16: Injected kinase that directly phosphorylates STAT3/STAT6 in host cell, promoting anti-inflammatory responses
- ROP18: Kinase that phosphorylates immunity-related GTPases (IRGs) in mice, preventing PV destruction
- GRA15: Dense granule protein that activates NF-kB, promoting pro-inflammatory responses (strain-dependent)
- Dense granule proteins (GRA): Secreted into PV and exported to host cell; multiple immune modulation functions
- IST (Inhibitor of STAT1 Transcription): Blocks IFN-gamma signaling in infected cells

*Strain Diversity:*
- Three main clonal lineages (I, II, III) in North America/Europe; more diverse in South America
- Type I: Most virulent in mice; associated with severe congenital and ocular disease
- Type II: Most common in human infections in North America/Europe; moderate virulence
- Type III: Less common in human disease; attenuated in mice
- Atypical/recombinant strains: Common in South America; associated with severe disease in immunocompetent patients

**Host Immune Response:**

*Innate Immunity:*
- TLR11/TLR12 (mice): Detect profilin - major innate sensor (not functional in humans)
- Human innate sensing: Less well-defined; involves TLR2, TLR4, inflammasome activation
- IL-12 from dendritic cells and macrophages: Critical driver of Th1 response
- NK cells: Early IFN-gamma source

*Adaptive Immunity:*
- CD4+ Th1 cells: IFN-gamma production essential for macrophage activation
- CD8+ T cells: Kill infected cells; critical for long-term control
- IFN-gamma: Activates indoleamine 2,3-dioxygenase (IDO) in human cells; depletes tryptophan (essential amino acid for Toxoplasma)
- IFN-gamma: Activates p65 GTPases and autophagy pathways
- Immune-mediated containment: Tachyzoite-to-bradyzoite conversion driven by immune pressure

*Ocular Toxoplasmosis:*
- Most common infectious cause of posterior uveitis globally
- Congenital infection: Reactivation in childhood/adolescence
- Acquired: Increasingly recognized as primary ocular disease
- Necrotizing retinitis with vitreous inflammation ("headlight in the fog")
- Satellite lesions near old scars
- Treatment: Pyrimethamine + sulfadiazine (or TMP-SMX) + corticosteroids for severe inflammation
- Classic TMP-SMX prophylaxis reduces recurrence

**Diagnostic Nuances:**
- PCR: CSF PCR for cerebral toxoplasmosis (sensitivity 50-65%; specificity >95%)
- Quantitative PCR: Monitoring treatment response
- Sabin-Feldman dye test: Gold standard serology; reference lab only
- Differential of ring-enhancing lesions in HIV: Toxoplasmosis vs. CNS lymphoma (single lesion, EBV PCR positive, periventricular) vs. PML (no enhancement) vs. tuberculoma
- Thallium SPECT or PET: Distinguish toxoplasmosis (cold) from lymphoma (hot) if diagnostic uncertainty`,
      keyTerms: [
        { term: 'Parasitophorous vacuole', definition: 'A specialized membrane-bound compartment created during Toxoplasma invasion that resists lysosomal fusion and serves as the replication niche' },
        { term: 'ROP16', definition: 'A rhoptry-injected kinase that directly phosphorylates host STAT3/6, modulating the immune response to favor parasite survival' },
        { term: 'Indoleamine 2,3-dioxygenase (IDO)', definition: 'An IFN-gamma-induced human enzyme that depletes intracellular tryptophan, starving Toxoplasma of this essential amino acid' },
        { term: 'Clonal lineages', definition: 'The three predominant genetic types (I, II, III) of T. gondii in North America/Europe, each with distinct virulence characteristics' },
        { term: 'Profilin', definition: 'A T. gondii protein detected by murine TLR11/12 triggering IL-12 production and Th1 immunity; the major innate immune sensor in mice' },
      ],
      clinicalNotes: 'The empiric treatment trial remains the standard approach for suspected cerebral toxoplasmosis in HIV patients; brain biopsy is reserved for non-response at 2 weeks. South American strains cause more severe disease in immunocompetent patients. IFN-gamma is the key cytokine for Toxoplasma control; biological therapies that impair IFN-gamma signaling increase reactivation risk. Ocular toxoplasmosis treatment should include corticosteroids only with concurrent antimicrobial therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced toxoplasmosis management encompasses understanding of parasite manipulation of host cell biology, the neurobiology of chronic infection, transplant-associated disease, novel drug targets beyond DHFR, and the potential for therapeutic vaccination.',
      explanation: `Graduate-level understanding integrates host-cell manipulation, chronic infection biology, and emerging therapeutic strategies.

**Parasite Manipulation of Host Cells:**
- Chromatin remodeling: GRA16 exported to host nucleus; interacts with HAUSP deubiquitinase and PP2A phosphatase; modulates p53 and cell cycle
- GRA24: Activates p38 MAPK -> pro-inflammatory cytokine production
- MAF1: Mediates mitochondrial association with PV membrane; hijacks host mitochondria for nutrients
- TgIST: Blocks STAT1-dependent transcription of IFN-gamma-stimulated genes; enables immune evasion in activated macrophages
- Host cell anti-apoptotic manipulation: Parasite prevents host cell death to maintain replication niche; involves NF-kB activation and caspase inhibition

**Neurobiology of Chronic Infection:**
- Tissue cysts preferentially located in brain (neurons, astrocytes) and skeletal muscle
- Behavioral manipulation (animal models): Infected rodents show decreased fear of cat odor; may increase transmission to definitive host
- Possible mechanisms: Dopamine synthesis (Toxoplasma has tyrosine hydroxylase homologs), neuroinflammation, epigenetic changes
- Human associations (epidemiological, not causal): Schizophrenia, bipolar disorder, risk-taking behavior, traffic accidents; controversial
- Chronic inflammation: Low-grade neuroinflammation from cyst reactivation/rupture; potential role in neurodegenerative diseases

**Transplant-Associated Toxoplasmosis:**
- Heart transplant: Highest risk (D+/R-); donor cysts in myocardium reactivate in seronegative recipient
- HSCT: Reactivation in seropositive recipients; fulminant disease; high mortality
- Monitoring: PCR surveillance in high-risk transplant recipients
- Prophylaxis: TMP-SMX (dual PCP + Toxoplasma prophylaxis)
- Treatment: Standard pyrimethamine + sulfadiazine; atovaquone as alternative

**Novel Drug Targets:**
- Bumped kinase inhibitors (BKIs): Target calcium-dependent protein kinase 1 (CDPK1); block invasion and egress; low toxicity to human kinases
- Endochin-like quinolones (ELQ-316, ELQ-400): Target cytochrome bc1 complex; active against both tachyzoites and bradyzoites (critical for cyst elimination)
- HDAC inhibitors: Disrupt bradyzoite-specific gene expression; force cysts to reactivate for immune/drug clearance
- Combination strategies: Anti-bradyzoite agents + immune activation to eliminate latent cysts
- Pyrimethamine resistance: Not yet clinically significant but documented in vitro mutations

**Therapeutic Vaccination Research:**
- Live attenuated vaccines (veterinary): Toxovax (S48 strain) licensed for sheep
- Human candidates: No approved vaccine
- Recombinant antigens: SAG1, ROP2, GRA7, MIC3 - various platforms (DNA, protein, viral vector)
- mRNA vaccine platforms: Under investigation for congenital toxoplasmosis prevention
- Challenge: Immune evasion mechanisms may limit vaccine efficacy; need for both humoral and cellular immunity

**Congenital Toxoplasmosis - Advanced Management:**
- Risk of transmission: Increases with gestational age (15% first trimester, 60% third trimester)
- Severity inversely related to gestational age at infection (first trimester = most severe)
- Screening strategies: Universal (France, Austria) vs. targeted (most countries)
- Spiramycin: Reduces transplacental transmission by ~60% but does not treat established fetal infection
- In utero treatment: Pyrimethamine + sulfadiazine after amniocentesis PCR confirmation (after 18 weeks GA)
- Neonatal workup: Toxoplasma-specific IgM/IgA, placental histology, brain imaging, ophthalmologic exam
- Long-term follow-up: Annual ophthalmologic exams through adolescence (reactivation risk)`,
      keyTerms: [
        { term: 'TgIST', definition: 'Toxoplasma Inhibitor of STAT1 Transcription; a secreted effector that blocks IFN-gamma-mediated killing of infected cells by suppressing STAT1-dependent gene expression' },
        { term: 'Bumped kinase inhibitors', definition: 'A novel drug class targeting Toxoplasma calcium-dependent protein kinase 1 (CDPK1), blocking parasite invasion with minimal human off-target effects' },
        { term: 'Endochin-like quinolones', definition: 'Drug candidates targeting the Toxoplasma cytochrome bc1 complex with activity against both tachyzoites and bradyzoites, offering potential for latent cyst elimination' },
        { term: 'D+/R- heart transplant', definition: 'A Toxoplasma seropositive donor/seronegative recipient combination representing the highest risk for post-transplant toxoplasmosis from donor organ cysts' },
        { term: 'Behavioral manipulation hypothesis', definition: 'The theory that T. gondii chronic infection alters host behavior (reduced predator avoidance in rodents) to enhance transmission to definitive cat hosts' },
      ],
      clinicalNotes: 'Heart transplant D+/R- mismatch requires Toxoplasma prophylaxis and surveillance. HSCT recipients with seropositive status need monitoring and prophylaxis. Novel anti-bradyzoite drugs (endochin-like quinolones) may eventually enable latent infection cure. Congenital toxoplasmosis requires long-term ophthalmologic follow-up. The role of chronic Toxoplasma infection in neuropsychiatric disease remains an active and controversial research area.',
    },
    5: {
      level: 5,
      summary: 'Expert toxoplasmosis knowledge encompasses single-cell analysis of tissue cyst biology, CRISPR-based functional genomics revealing essential parasite pathways, the global health burden of congenital toxoplasmosis, precision diagnostics using cfDNA, and the design of clinical trials for latent infection cure.',
      explanation: `Expert-level management integrates cutting-edge parasitology, translational research, and global health strategy.

**Single-Cell Biology of Tissue Cysts:**
- Single-cell RNA-seq of bradyzoites: Reveals heterogeneous populations within cysts (not all dormant)
- Spontaneous reactivation: Stochastic rupture of individual cysts with local immune control
- Cyst-immune interface: Microglia and astrocytes form immunological barrier around brain cysts
- Cyst maintenance: Bradyzoites undergo slow division and cyst wall remodeling; not purely static
- Implications: Anti-bradyzoite drugs must penetrate cyst wall and act on metabolically heterogeneous populations

**CRISPR-Cas9 Functional Genomics:**
- Genome-wide CRISPR screens: Identified >200 fitness-conferring genes essential for Toxoplasma survival
- Dense granule protein essentiality: Systematic identification of GRA proteins required for immune evasion
- Druggable genome analysis: Prioritizing novel drug targets based on essentiality and druggability scores
- Apicoplast: Relict plastid (evolutionarily from algal endosymbiont); essential metabolic functions (isoprenoid, fatty acid, heme synthesis); unique drug target
  - Fosmidomycin: DOXP pathway inhibitor targeting isoprenoid synthesis in apicoplast

**Cell-Free DNA Diagnostics:**
- Circulating Toxoplasma cfDNA in plasma: Emerging biomarker for active infection
- Advantages over serology: Direct detection of parasite activity, not just immune response
- Quantitative: May correlate with burden and treatment response
- Potential for monitoring transplant recipients and congenital infection
- Nanopore sequencing: Rapid, point-of-care potential for pathogen cfDNA detection

**Global Health Burden:**
- Estimated 190,000 cases of congenital toxoplasmosis annually
- Highest burden: South America (more virulent atypical strains; higher incidence), Africa (HIV co-infection)
- Ocular toxoplasmosis: 2% of all Toxoplasma infections develop eye disease; higher in South America
- Economic burden: Significant DALY loss, particularly from childhood blindness and neurologic disability
- Universal screening debate: Cost-effective in high-prevalence settings; not implemented in most countries

**Latent Infection Cure:**
- Current drugs do not eliminate tissue cysts (only suppress tachyzoites)
- "Shock and Kill" strategy: HDAC inhibitors to reactivate bradyzoites + artemisinin/atovaquone/new drugs to kill emerging tachyzoites
- Endochin-like quinolones (ELQ-316): Cyst sterilization in mouse models; preclinical development
- Bumped kinase inhibitors + immune activation: Combinatorial approach
- Biomarkers for cure: Need reliable markers of cyst burden (current serology reflects immune response, not parasite load)
- Challenge: Cysts in brain are immunologically privileged; drug penetration and safety concerns

**One Health Perspective:**
- Cat population management: Potential impact on environmental oocyst contamination
- Food safety: Improved meat inspection; freezing kills tissue cysts (-20C for 2 days)
- Water treatment: Standard chlorination does not kill oocysts; UV effective
- Veterinary vaccines: Toxovax reduces oocyst shedding and congenital disease in sheep
- Environmental contamination: Sea otter deaths from T. gondii linked to oocyst runoff; marine ecosystem impact

**Future Directions:**
- mRNA vaccines: Rapid platform for congenital toxoplasmosis prevention; multi-antigen constructs
- Maternal screening algorithms: Integration of serology, avidity, and PCR for optimized timing of intervention
- Precision medicine: Strain genotyping to predict disease severity and treatment response
- AI-assisted diagnosis: Machine learning for differentiating ring-enhancing lesion etiology on MRI
- Community-level interventions: Education programs targeting cat-related and food-related transmission`,
      keyTerms: [
        { term: 'Apicoplast', definition: 'A non-photosynthetic plastid organelle in Toxoplasma derived from an ancient algal endosymbiont; contains essential metabolic pathways that represent unique drug targets' },
        { term: 'Shock and kill strategy', definition: 'A proposed approach to eliminate latent Toxoplasma cysts by forcing bradyzoite reactivation (shock) then killing emerging tachyzoites with drugs (kill)' },
        { term: 'Toxoplasma cfDNA', definition: 'Cell-free parasite DNA detectable in plasma as an emerging biomarker for active Toxoplasma infection, offering advantages over serology for monitoring treatment response' },
        { term: 'Genome-wide CRISPR screen', definition: 'A systematic approach using CRISPR-Cas9 to knock out every gene in the Toxoplasma genome, identifying essential genes that may serve as drug targets' },
        { term: 'Oocyst environmental contamination', definition: 'The widespread distribution of Toxoplasma oocysts from cat feces in soil and water, representing a One Health challenge affecting human, animal, and marine ecosystems' },
      ],
      clinicalNotes: 'The ID specialist must integrate molecular parasitology with clinical management. Key priorities: (1) Advocate for improved congenital toxoplasmosis screening, particularly in high-prevalence settings. (2) Monitor the drug development pipeline for anti-bradyzoite agents. (3) Understand strain diversity when managing patients from South America (more severe disease). (4) Support One Health approaches to reduce environmental contamination. (5) Contribute to clinical trial design for latent infection cure strategies. (6) Utilize emerging cfDNA diagnostics for monitoring active infection in transplant recipients.',
    },
  },
  media: [],
  citations: [
    { id: 'montoya-toxo-lancet-2004', type: 'article', title: 'Toxoplasmosis', authors: ['Montoya JG', 'Liesenfeld O'], source: 'The Lancet', license: 'Copyrighted' },
    { id: 'oit-idsa-guidelines-toxo', type: 'article', title: 'Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV', source: 'AIDSinfo/NIH', license: 'Public Domain' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-malaria', targetType: 'condition', relationship: 'sibling', label: 'Malaria' },
    { targetId: 'infectious-disease-hiv-aids', targetType: 'condition', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'infectious-disease-meningitis', targetType: 'condition', relationship: 'related', label: 'Meningitis' },
  ],
  tags: {
    systems: ['infectious-disease', 'parasitology', 'neurology', 'obstetrics'],
    topics: ['parasitic-infections', 'toxoplasmosis', 'congenital-infections', 'HIV-opportunistic-infections'],
    keywords: ['Toxoplasma', 'toxoplasmosis', 'ring-enhancing lesion', 'congenital infection', 'pyrimethamine', 'bradyzoite', 'tachyzoite', 'cat', 'pregnancy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics', 'obstetrics'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
