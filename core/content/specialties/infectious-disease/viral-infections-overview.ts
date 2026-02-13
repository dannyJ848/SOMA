import { EducationalContent } from '../../types';

export const viralInfectionsOverview: EducationalContent = {
  id: 'infectious-disease-viral-overview',
  type: 'concept',
  name: 'Viral Infections Overview',
  alternateNames: ['Viral Diseases', 'Virology', 'Viral Pathogenesis'],

  levels: {
    1: {
      level: 1,
      summary: 'Viruses are tiny particles that invade your cells and use them to make more copies of themselves, causing infections like the common cold, flu, and COVID-19.',
      explanation: `Viruses are not actually living things - they are tiny packets of genetic material (like a computer program) wrapped in a protein coat. They cannot reproduce on their own; they need to get inside your cells to make copies of themselves.

**How Viruses Work:**
1. A virus lands on a cell and attaches to the surface
2. It injects its genetic material (DNA or RNA) into the cell
3. The virus takes over the cell's machinery to make copies of itself
4. New viruses burst out, killing the cell, and spread to infect more cells

**Common Viral Infections:**

*Respiratory Viruses:*
- Common cold (rhinovirus, coronavirus)
- Flu (influenza)
- COVID-19 (SARS-CoV-2)
- RSV (especially in babies and elderly)

*Other Common Viruses:*
- Chickenpox and shingles
- Cold sores and genital herpes
- Stomach "flu" (norovirus, rotavirus)
- Mononucleosis ("mono" - Epstein-Barr virus)
- HPV (human papillomavirus)

**How Viruses Spread:**
- Breathing in droplets when someone coughs or sneezes
- Touching contaminated surfaces then touching your face
- Direct contact (kissing, sexual contact)
- Through bites (mosquitoes for some viruses)
- From mother to baby during pregnancy or birth

**Treatment:**
Unlike bacterial infections, antibiotics do NOT work against viruses. Some viruses can be treated with antiviral medications. For many viruses, treatment focuses on rest and managing symptoms while your immune system fights the infection. Vaccines can prevent many viral infections.`,
      keyTerms: [
        { term: 'virus', definition: 'A tiny particle that invades cells and uses them to make copies of itself' },
        { term: 'immune system', definition: 'Your body\'s defense system that fights infections' },
        { term: 'antibodies', definition: 'Proteins made by your immune system that recognize and fight specific viruses' },
        { term: 'vaccine', definition: 'A substance that trains your immune system to fight a specific virus' },
      ],
      analogies: [
        'A virus is like a computer virus - it cannot do anything on its own, but once it gets into a computer (cell), it takes over and makes copies of itself.',
        'Your immune system fighting a virus is like having a "Wanted" poster - once your body recognizes the virus, it can target and destroy it.',
      ],
      examples: [
        'When you catch the flu, the influenza virus is taking over cells in your nose and throat, which is why you get a sore throat and runny nose.',
        'Chickenpox causes itchy blisters because the varicella-zoster virus is infecting and killing skin cells.',
      ],
    },
    2: {
      level: 2,
      summary: 'Viruses are obligate intracellular parasites containing either DNA or RNA genomes, classified by structure and replication strategy, causing disease through cell destruction and immune-mediated injury.',
      explanation: `Viruses are fundamentally different from bacteria and other pathogens. They lack the cellular machinery for independent reproduction and must hijack host cells.

**Virus Structure:**

*Basic Components:*
- Nucleic acid core: Either DNA or RNA (never both)
- Capsid: Protein coat surrounding the genetic material
- Some have an envelope: Lipid membrane from host cell

*Capsid Symmetry:*
- Icosahedral (20-sided): Adenovirus, poliovirus
- Helical: Influenza, measles
- Complex: Poxviruses, bacteriophages

**Classification:**

*DNA Viruses (Replicate in nucleus):*
- Herpesviruses (HSV, VZV, CMV, EBV)
- Adenovirus
- Papillomavirus (HPV)
- Parvovirus
- Hepatitis B (unique - uses reverse transcriptase)

*RNA Viruses (Most replicate in cytoplasm):*
- Positive-sense (+): Picornavirus, Coronavirus, Flavivirus (can use RNA directly as mRNA)
- Negative-sense (-): Orthomyxovirus (flu), Paramyxovirus (must transcribe RNA first)
- Retroviruses: HIV (RNA → DNA via reverse transcriptase)

**Viral Replication Cycle:**
1. Attachment: Viral proteins bind specific host receptors
2. Entry: Membrane fusion (enveloped) or endocytosis
3. Uncoating: Capsid breakdown, genome release
4. Replication: Copying of viral genome
5. Transcription/Translation: Making viral proteins
6. Assembly: New virions form
7. Release: Lysis (non-enveloped) or budding (enveloped)

**How Viruses Cause Disease:**

*Direct Effects:*
- Cell lysis (death)
- Cell fusion (syncytia formation)
- Transformation (cancer - HPV, HBV)

*Immune-Mediated:*
- Inflammation from immune response
- Autoimmune reactions
- Immunopathology (tissue damage from immune response)

**Host Defense:**
- Innate: Interferons, NK cells, complement
- Adaptive: Antibodies (prevent entry), cytotoxic T cells (kill infected cells)`,
      keyTerms: [
        { term: 'obligate intracellular parasite', definition: 'Organism that can only reproduce inside a host cell' },
        { term: 'capsid', definition: 'Protein shell surrounding the viral genome' },
        { term: 'enveloped virus', definition: 'Virus with a lipid membrane derived from host cell; susceptible to detergents and drying' },
        { term: 'positive-sense RNA', definition: 'Viral RNA that can be directly translated into proteins by ribosomes' },
        { term: 'interferon', definition: 'Protein released by infected cells that signals neighboring cells to prepare antiviral defenses' },
      ],
      analogies: [
        'Enveloped viruses are like letters in envelopes - the envelope helps them deliver their message but makes them fragile. Non-enveloped viruses are like postcards - more durable but exposed.',
        'Positive-sense RNA viruses bring a ready-to-use instruction manual, while negative-sense viruses bring a copy that must first be transcribed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Viral pathogenesis involves receptor-mediated entry, replication using host machinery, and disease manifestation through cytopathic effects, immune response, and viral evasion strategies.',
      explanation: `Understanding viral infections requires knowledge of molecular virology, immune responses, and clinical manifestations.

**Viral Entry Mechanisms:**

*Receptor-Ligand Interactions:*
- HIV: CD4 + CCR5/CXCR4
- Influenza: Sialic acid residues
- SARS-CoV-2: ACE2 + TMPRSS2
- EBV: CD21 (complement receptor)
- Rhinovirus: ICAM-1

*Entry Routes:*
- Membrane fusion at cell surface (HIV, measles)
- Receptor-mediated endocytosis (influenza, SARS-CoV-2)
- Direct penetration (non-enveloped viruses)

**Viral Replication Strategies:**

*DNA Viruses:*
- Most replicate in nucleus using host polymerases
- Larger genomes, more complex
- Establish latency (herpesviruses)
- Exception: Poxviruses replicate in cytoplasm

*RNA Viruses:*
- Bring or encode RNA-dependent RNA polymerase (RdRp)
- Higher mutation rates (error-prone polymerase)
- Smaller genomes, rapid evolution

*Retroviruses:*
- Reverse transcriptase: RNA → DNA
- Integrase: Viral DNA inserts into host genome
- Provirus: Permanent infection

**Immune Evasion Strategies:**

*Antigenic Variation:*
- Antigenic drift: Point mutations (influenza yearly)
- Antigenic shift: Reassortment (pandemic flu)
- Hypervariable regions: HIV gp120

*Immune Suppression:*
- CD4 T cell destruction (HIV)
- MHC downregulation (herpesviruses)
- Interferon antagonism (many viruses)
- Complement evasion

*Latency:*
- Herpesviruses: Maintain genome without producing virions
- HSV-1/2: Sensory neurons
- VZV: Dorsal root ganglia
- EBV: B lymphocytes
- CMV: Monocytes, progenitors

**Clinical Categories of Viral Infections:**

*Acute Self-Limited:*
- Common cold, influenza, gastroenteritis
- Immune clearance typically successful

*Chronic Infections:*
- Hepatitis B, C: Persistent liver infection
- HIV: Lifelong unless treated

*Latent Infections:*
- Herpesviruses: Periodic reactivation
- VZV: Chickenpox → later shingles

*Oncogenic Viruses:*
- HPV 16/18: Cervical, oropharyngeal cancer
- HBV, HCV: Hepatocellular carcinoma
- EBV: Burkitt lymphoma, nasopharyngeal carcinoma
- HHV-8: Kaposi sarcoma
- HTLV-1: Adult T-cell leukemia

**Diagnosis:**
- Serology: IgM (acute), IgG (past/chronic)
- Viral PCR: Detection of nucleic acid
- Antigen tests: Rapid detection (influenza, RSV, COVID)
- Culture: Growing virus (less common now)`,
      keyTerms: [
        { term: 'reverse transcriptase', definition: 'Enzyme that synthesizes DNA from an RNA template; found in retroviruses and hepatitis B' },
        { term: 'antigenic drift', definition: 'Gradual accumulation of mutations in viral surface proteins causing minor changes' },
        { term: 'antigenic shift', definition: 'Major change in viral antigens through reassortment of genome segments between strains' },
        { term: 'latency', definition: 'State where viral genome persists in host cells without producing virions' },
        { term: 'oncogenic virus', definition: 'Virus capable of causing cancer through cellular transformation' },
      ],
      clinicalNotes: 'IgM positivity suggests acute/recent infection; IgG suggests past infection or immunity. For herpes encephalitis, CSF PCR is diagnostic - do not wait for results to start acyclovir. Influenza testing is most sensitive early in illness (first 48-72 hours).',
    },
    4: {
      level: 4,
      summary: 'Clinical virology integrates molecular pathogenesis, diagnostic modalities, antiviral pharmacology, and immunization strategies for prevention and treatment of acute, chronic, and latent viral infections.',
      explanation: `Advanced understanding of viral infections requires integration of pathophysiology, diagnostics, and therapeutic principles.

**Viral Respiratory Infections - Clinical Approach:**

*Influenza:*
- Type A: Pandemic potential (zoonotic reservoir)
- Type B: Seasonal epidemics only
- Severe disease: Extremes of age, immunocompromised, pregnant, chronic conditions
- Complications: Bacterial superinfection, ARDS, myocarditis
- Treatment: Oseltamivir (most common), zanamivir, peramivir, baloxavir
- Start within 48 hours, but consider in severe disease regardless of timing

*SARS-CoV-2 (COVID-19):*
- Pathophysiology: ACE2 receptor, endothelial dysfunction, hyperinflammation
- Risk factors: Age, obesity, diabetes, cardiovascular disease
- Antivirals: Nirmatrelvir/ritonavir (Paxlovid), remdesivir
- Immunomodulation: Dexamethasone (if hypoxic), baricitinib, tocilizumab

*RSV:*
- Severe in infants and elderly
- Bronchiolitis in children
- Treatment supportive; ribavirin rarely used
- Prevention: Nirsevimab, palivizumab for high-risk infants

**Herpesvirus Infections:**

*HSV-1/HSV-2:*
- Primary vs. recurrent infections
- Dissemination in immunocompromised
- Syndromes: Oral/genital herpes, keratitis, encephalitis, meningitis
- Treatment: Acyclovir, valacyclovir, famciclovir

*VZV:*
- Primary: Chickenpox
- Reactivation: Shingles (dermatomal)
- Complications: PHN, disseminated zoster, VZV vasculopathy
- Treatment: High-dose valacyclovir (shingles), IV acyclovir (disseminated)
- Prevention: Shingrix vaccine (recombinant)

*CMV:*
- Mononucleosis-like syndrome in immunocompetent
- Severe in transplant, AIDS: Retinitis, colitis, pneumonitis
- Congenital CMV: Leading infectious cause of developmental disability
- Treatment: Ganciclovir/valganciclovir, foscarnet, cidofovir, letermovir

*EBV:*
- Infectious mononucleosis
- Associated malignancies
- Post-transplant lymphoproliferative disorder (PTLD)

**Hepatitis Viruses:**

*Hepatitis B:*
- Transmission: Blood, sexual, perinatal
- Markers: HBsAg (infection), HBeAg (replication), anti-HBs (immunity)
- Treatment: Tenofovir, entecavir (chronic infection)
- Prevention: Vaccination (HBsAg-based)

*Hepatitis C:*
- Transmission: Blood-borne
- Treatment: Direct-acting antivirals (cure rate >95%)
- Sofosbuvir-based regimens, glecaprevir/pibrentasvir

**Viral Hemorrhagic Fevers:**
- Ebola, Marburg: Filoviruses
- Dengue: Flavivirus, "breakbone fever"
- Yellow fever: Flavivirus, vaccine-preventable
- Hantavirus: Pulmonary syndrome, renal syndrome

**Emerging Viral Infections:**
- Zika: Flavivirus, congenital syndrome
- Monkeypox (mpox): Orthopoxvirus
- Avian influenza: H5N1, H7N9
- MERS-CoV: Zoonotic coronavirus

**Diagnostic Approaches:**

*Molecular:*
- PCR: Highly sensitive and specific
- Viral load quantification: HIV, HBV, HCV, CMV
- Genotyping: Resistance testing, epidemiology

*Serologic:*
- IgM: Acute infection (with caveats - false positives common)
- IgG: Past infection or immunity
- IgG avidity: Low avidity = recent infection

*Rapid Tests:*
- Antigen detection: Influenza, RSV, COVID
- Point-of-care nucleic acid: GeneXpert, rapid PCR`,
      keyTerms: [
        { term: 'direct-acting antivirals (DAA)', definition: 'Drugs targeting specific viral proteins (protease, polymerase); revolutionized HCV treatment' },
        { term: 'IgG avidity', definition: 'Strength of antibody-antigen binding; low avidity indicates recent infection, high avidity indicates remote infection' },
        { term: 'viral load', definition: 'Quantity of virus in blood/tissue, measured by PCR; used for diagnosis and monitoring treatment' },
        { term: 'seroconversion', definition: 'Development of detectable antibodies in blood following infection or vaccination' },
        { term: 'post-transplant lymphoproliferative disorder', definition: 'EBV-driven B-cell proliferation in immunosuppressed transplant recipients' },
      ],
      clinicalNotes: `Key testing considerations:
- HSV encephalitis: CSF PCR (negative result does not rule out if very early or very late)
- HIV: 4th gen Ag/Ab test; confirm with differentiation assay
- COVID-19: PCR most sensitive; antigen tests less sensitive especially early
- CMV in transplant: Weekly PCR monitoring; preemptive vs. prophylactic strategies
- Hepatitis serology: Order complete panel - HBsAg, anti-HBc, anti-HBs for full picture`,
    },
    5: {
      level: 5,
      summary: 'Contemporary virology encompasses molecular epidemiology, viral evolution and emergence, precision diagnostics including sequencing-based approaches, targeted antiviral therapies, and vaccine development platforms addressing current and future viral threats.',
      explanation: `Expert-level understanding of viral infections requires integration of genomic epidemiology, advanced therapeutics, and public health considerations.

**Viral Evolution and Emergence:**

*Factors Driving Emergence:*
- Zoonotic spillover: Wildlife-human interface
- Climate change: Vector range expansion
- Urbanization: Crowding, sanitation
- Global travel: Rapid dissemination
- Antimicrobial pressure: Resistance selection

*RNA Virus Evolution:*
- Error-prone RdRp: High mutation rate (10^-3 to 10^-5 per site per replication)
- Quasispecies: Viral populations as mutant swarms
- Selective pressures: Immune evasion, receptor adaptation
- Recombination: Coronavirus, influenza (reassortment)

*Surveillance and Genomic Epidemiology:*
- Next-generation sequencing (NGS)
- Phylogenetic analysis
- Molecular clock dating
- Transmission network inference
- GISAID, Nextstrain platforms

**Advanced Diagnostic Approaches:**

*Metagenomic Sequencing:*
- Pathogen-agnostic detection
- Novel virus discovery
- Antimicrobial resistance profiling
- Research tool transitioning to clinical

*Quantitative PCR Applications:*
- Viral load monitoring (HIV, HBV, HCV, CMV)
- Treatment response assessment
- Resistance emergence detection
- Donor screening

*Multiplex Panels:*
- Respiratory pathogen panels
- CNS panels (meningitis/encephalitis)
- GI pathogen panels
- Benefits: Speed, comprehensive; Concerns: Colonization vs. infection

**Antiviral Resistance:**

*HIV Resistance:*
- Genotypic testing: Sequence analysis of RT, protease, integrase
- Interpretation algorithms (Stanford HIVdb)
- Drug class-specific mutations
- Transmitted drug resistance

*CMV Resistance:*
- UL97 mutations: Ganciclovir resistance
- UL54 mutations: Cross-resistance to multiple agents
- Treatment: Foscarnet, cidofovir, maribavir

*Influenza Resistance:*
- H275Y (NA mutation): Oseltamivir resistance (rare currently)
- Baloxavir: PA I38X mutations

*HSV Resistance:*
- Thymidine kinase mutations: Acyclovir resistance
- DNA polymerase mutations
- Treatment: Foscarnet, cidofovir

**Novel Vaccine Platforms:**

*mRNA Vaccines:*
- Rapid development timeline
- Strong immunogenicity
- Lipid nanoparticle delivery
- Examples: COVID-19 (Pfizer-BioNTech, Moderna)

*Viral Vector Vaccines:*
- Adenovirus vectors (Ad26, ChAdOx1)
- Single-dose potential
- Examples: Johnson & Johnson, AstraZeneca COVID vaccines

*Protein Subunit:*
- Traditional approach with adjuvants
- Shingrix (VZV glycoprotein E + AS01B)
- Novavax (COVID-19)

*Live Attenuated:*
- MMR, varicella, rotavirus, yellow fever
- Strong immunity but contraindicated in immunocompromised

**Special Populations:**

*Transplant Recipients:*
- CMV: Highest-risk D+/R-, prophylaxis vs. preemptive
- BK virus: Nephropathy in kidney transplant
- HHV-6: Encephalitis
- EBV: PTLD risk

*HIV/AIDS:*
- Opportunistic viral infections: CMV, HSV, VZV, JC virus (PML)
- Immune reconstitution inflammatory syndrome (IRIS)
- ART restores most immune function

*Pregnancy:*
- Congenital infections: CMV, rubella, VZV, Zika, parvovirus
- TORCH screening
- Vertical transmission prevention (HIV, HBV)

**Emerging Therapeutic Strategies:**

*Broadly Neutralizing Antibodies:*
- HIV: VRC01, 3BNC117
- Influenza: Universal targets
- SARS-CoV-2: Monoclonal antibodies (variant-dependent efficacy)

*Host-Directed Therapies:*
- Interferon augmentation
- Immune checkpoint modulation
- Cytokine storm management

*Gene Therapy Approaches:*
- CCR5 gene editing (HIV cure research)
- Latent reservoir targeting

**Pandemic Preparedness:**
- Pathogen X planning
- Platform technologies for rapid vaccine development
- Antiviral stockpiling (oseltamivir, etc.)
- Surveillance networks (WHO, CDC)`,
      keyTerms: [
        { term: 'quasispecies', definition: 'Dynamic population of viruses with related but distinct genomes existing within infected host' },
        { term: 'broadly neutralizing antibody', definition: 'Antibody capable of neutralizing multiple viral strains/variants by targeting conserved epitopes' },
        { term: 'metagenomic sequencing', definition: 'Unbiased sequencing of all nucleic acid in a sample for pathogen-agnostic detection' },
        { term: 'immune reconstitution inflammatory syndrome (IRIS)', definition: 'Paradoxical worsening of infection after immune recovery, often seen with ART initiation in advanced HIV' },
        { term: 'molecular clock', definition: 'Use of mutation rates to estimate timing of evolutionary events and infection dates' },
      ],
      clinicalNotes: `**Board and Practice Pearls:**
- CMV D+/R- highest risk: Universal prophylaxis vs. preemptive monitoring strategy
- HIV genotype before ART initiation (if not on immediate-start protocol)
- Acyclovir-resistant HSV: Foscarnet first-line; culture needed for susceptibility
- mRNA vaccine technology: No live virus, cannot cause infection; requires cold chain
- COVID-19 antivirals: Paxlovid drug interactions (ritonavir); remdesivir for hospitalized
- VZV reactivation risk: After checkpoint inhibitors, transplant, advancing age
- JC virus/PML: Associated with natalizumab, severe immunosuppression; no specific treatment`,
    },
  },

  media: [
    {
      id: 'virus-structure',
      type: 'diagram',
      filename: 'virus-structure.svg',
      title: 'Viral Structure and Classification',
      description: 'Diagram comparing enveloped and non-enveloped virus structures',
    },
    {
      id: 'viral-replication-cycle',
      type: 'diagram',
      filename: 'viral-replication-cycle.svg',
      title: 'Viral Replication Cycle',
      description: 'Steps of viral attachment, entry, replication, assembly, and release',
    },
  ],
  citations: [
    {
      id: 'fields-virology',
      type: 'textbook',
      title: 'Fields Virology',
      authors: ['Knipe DM', 'Howley PM'],
      source: 'Lippincott Williams & Wilkins',
    },
    {
      id: 'mandell-id-textbook',
      type: 'textbook',
      title: "Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases",
      authors: ['Bennett JE', 'Dolin R', 'Blaser MJ'],
      source: 'Elsevier',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-antiviral-therapy', targetType: 'topic', relationship: 'child', label: 'Antiviral Therapy' },
    { targetId: 'infectious-disease-hiv', targetType: 'topic', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'infectious-disease-vaccination', targetType: 'topic', relationship: 'related', label: 'Vaccination Science' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune', 'respiratory'],
    topics: ['infectious-disease', 'virology', 'immunology'],
    keywords: ['virus', 'viral infection', 'antiviral', 'vaccine', 'herpes', 'influenza', 'COVID-19', 'hepatitis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default viralInfectionsOverview;
