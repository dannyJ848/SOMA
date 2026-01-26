import { EducationalContent } from '../../types';

export const vaccinationScienceContent: EducationalContent = {
  id: 'physiology-immune-vaccination-science',
  type: 'concept',
  name: 'Vaccination Science',
  alternateNames: ['Vaccine Immunology', 'Immunization Science', 'Vaccinology'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccines teach your immune system to recognize and fight germs without making you sick, protecting you from dangerous diseases.',
      explanation: `Vaccines are one of the most important inventions in medicine. They have saved millions of lives by preventing diseases like smallpox, polio, and measles.

**How Do Vaccines Work?**

Think of vaccines as a "training exercise" for your immune system:

1. **The Trainer (Vaccine)**: Contains something that looks like the germ but can't make you sick
   - It might be a weakened germ
   - A dead germ
   - Just a piece of the germ
   - Or instructions to make a piece of the germ (like mRNA vaccines)

2. **The Training Session**: Your immune system practices fighting
   - Your immune cells see the vaccine
   - They think it's a real invader
   - They learn to recognize it and practice destroying it
   - Your body might feel a little tired or sore (this means it's working!)

3. **The Memory**: Your body remembers the training
   - Special "memory cells" remember what the germ looks like
   - These cells can live for years or your whole life
   - If the real germ ever shows up, your body already knows how to fight it!

**Why Get Vaccinated?**

- **Protect yourself**: Don't get sick from dangerous diseases
- **Protect others**: When you can't spread germs, you protect people who can't get vaccinated
- **Stop outbreaks**: When enough people are vaccinated, diseases can't spread (herd immunity)

**Types of Vaccines:**

| Type | How It Works | Example |
|------|-------------|---------|
| Live weakened | Uses a weakened (but alive) germ | MMR, Chickenpox |
| Inactivated | Uses a killed germ | Flu shot, Polio (IPV) |
| Piece of germ | Uses just one part | Hepatitis B |
| mRNA | Instructions to make one part | COVID-19 (Pfizer, Moderna) |

**Vaccine Side Effects:**

Most side effects are signs your immune system is working:
- Sore arm where you got the shot
- Mild fever
- Feeling tired
- Headache

These usually go away in 1-2 days and are much better than getting the real disease!`,
      keyTerms: [
        { term: 'vaccine', definition: 'A substance that teaches your immune system to fight a specific germ' },
        { term: 'immunization', definition: 'Getting a vaccine to become protected against a disease' },
        { term: 'herd immunity', definition: 'When enough people are protected so diseases can\'t spread easily' },
        { term: 'booster', definition: 'An extra vaccine dose to remind your immune system about a germ' },
      ],
      analogies: [
        'A vaccine is like a fire drill - it prepares your body for the real emergency without the actual danger.',
        'Getting vaccinated is like showing your immune system a "wanted poster" so it recognizes the criminal before they cause trouble.',
        'Herd immunity is like having so many guards that a thief can\'t find anyone unprotected to rob.',
      ],
      examples: [
        'Before the measles vaccine, about 500 people died from measles every year in the US. Now, measles deaths are extremely rare.',
        'Smallpox used to kill millions of people, but vaccines completely eliminated this disease from the world.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccines stimulate the adaptive immune system to produce antibodies and memory cells against specific pathogens, providing protection without causing disease.',
      explanation: `Vaccines harness the immune system's natural ability to remember past infections, providing protection against future encounters with dangerous pathogens.

**Immunological Basis of Vaccination:**

**Primary Immune Response to Vaccine:**
1. Vaccine introduces antigen (harmless piece of pathogen)
2. Antigen-presenting cells (APCs) process and present antigen
3. T helper cells become activated
4. B cells are stimulated to produce antibodies
5. Initial antibody response: primarily IgM, then IgG
6. Memory B and T cells are generated

**Secondary Response (Upon Exposure):**
- Faster response (days instead of weeks)
- Higher antibody levels (10-100x more)
- Better quality antibodies (higher affinity)
- More effective pathogen elimination

**Types of Vaccines:**

| Type | Description | Advantages | Disadvantages | Examples |
|------|-------------|------------|---------------|----------|
| **Live Attenuated** | Weakened pathogen that can't cause disease | Strong, long-lasting immunity; mimics natural infection | Can't give to immunocompromised; cold chain required | MMR, Varicella, Rotavirus, Yellow Fever |
| **Inactivated** | Killed pathogen | Safe for immunocompromised; stable | Weaker response; may need boosters | Flu (injection), Polio (IPV), Hepatitis A |
| **Subunit/Protein** | Purified pathogen proteins | Very safe; specific | Often need adjuvants; multiple doses | Hepatitis B, HPV, Pertussis (acellular) |
| **Toxoid** | Inactivated bacterial toxin | Prevents toxin effects | Doesn't prevent colonization | Tetanus, Diphtheria |
| **Conjugate** | Polysaccharide linked to protein | T-cell help for polysaccharide antigens | More complex to make | Hib, Pneumococcal, Meningococcal |
| **mRNA** | Genetic instructions for antigen | Rapid development; no infection risk | Cold storage needed; newer technology | COVID-19 (Pfizer, Moderna) |
| **Viral Vector** | Different virus carries pathogen genes | Strong immune response | Pre-existing immunity may reduce effectiveness | COVID-19 (J&J), Ebola |

**Adjuvants:**

Substances added to vaccines to enhance the immune response:
- **Aluminum salts**: Most common; depot effect, innate immune activation
- **MF59**: Oil-in-water emulsion; enhances antigen uptake
- **AS01/AS04**: Used in newer vaccines (Shingrix, Cervarix)

**Herd Immunity:**

When enough people are immune (through vaccination or prior infection), disease spread slows because:
- Fewer susceptible individuals for pathogen to infect
- Chain of transmission is broken
- Protects those who can't be vaccinated

**Herd Immunity Threshold varies by disease:**
| Disease | R0 | Threshold |
|---------|-----|-----------|
| Measles | 12-18 | 92-95% |
| Pertussis | 12-17 | 92-94% |
| Polio | 5-7 | 80-86% |
| COVID-19 | 2-3 | 60-70% |

**Vaccine Schedule Rationale:**

- **Multiple doses**: Build stronger, longer-lasting immunity
- **Spacing**: Allow immune response to mature between doses
- **Age-specific timing**: Based on maternal antibody waning and disease risk
- **Boosters**: Maintain protection as immunity wanes`,
      keyTerms: [
        { term: 'attenuated', definition: 'Weakened but still alive; can replicate but doesn\'t cause disease', pronunciation: 'uh-TEN-yoo-ay-ted' },
        { term: 'adjuvant', definition: 'Substance added to vaccines to enhance the immune response', pronunciation: 'AD-joo-vant' },
        { term: 'conjugate vaccine', definition: 'Vaccine linking a polysaccharide to a protein to improve immune response' },
        { term: 'herd immunity threshold', definition: 'The percentage of immune people needed to prevent disease spread' },
        { term: 'R0', definition: 'Basic reproduction number; how many people one infected person will infect on average', pronunciation: 'R-naught' },
      ],
      analogies: [
        'Live attenuated vaccines are like training against a sparring partner - they\'re real but held back.',
        'Adjuvants are like loudspeakers that amplify the vaccine\'s message to the immune system.',
        'Herd immunity is like a firebreak - if there are enough gaps in the forest (immune people), the fire (disease) can\'t spread.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccines induce adaptive immunity by presenting antigens to initiate B cell antibody responses and T cell-mediated immunity, with vaccine design optimizing antigen selection, delivery platforms, and adjuvant formulations to generate protective and durable immunity.',
      explanation: `Vaccine immunology involves understanding how different vaccine platforms engage innate and adaptive immune responses to establish protective immunity.

**Immunological Goals of Vaccination:**

1. **Neutralizing Antibodies**: Block pathogen entry/function
2. **Memory B Cells**: Rapid antibody recall upon exposure
3. **Memory T Cells**: Clear infected cells
4. **Long-Lived Plasma Cells**: Sustained antibody production

**Vaccine Antigen Selection:**

**Criteria for Effective Antigens:**
- Surface accessible on pathogen
- Conserved (less prone to mutation)
- Functionally important (mutation would disable pathogen)
- Immunogenic (induces strong immune response)
- Not cross-reactive with self-antigens

**Antigen Types:**
- **Whole pathogen**: Maximum breadth, complex manufacturing
- **Protein subunits**: Defined composition, may miss important epitopes
- **Polysaccharides**: T-independent, weak in young children (hence conjugates)
- **Nucleic acid**: In situ expression, native protein conformation

**Vaccine Platforms:**

**Live Attenuated:**
- Attenuation methods: Serial passage, targeted mutations, cold adaptation
- Induces: Broad response (IgG, IgA, CTL)
- Duration: Often lifelong
- Concerns: Reversion, contraindicated in immunocompromised

**Inactivated:**
- Inactivation methods: Formalin, beta-propiolactone, heat
- Induces: Primarily antibody response
- Duration: Usually requires boosters
- Advantages: Cannot revert, safe in immunocompromised

**Subunit/Recombinant:**
- Expression systems: Yeast, insect cells, mammalian cells, E. coli
- Examples:
  - HBsAg (Hepatitis B): Yeast-expressed
  - HPV L1 VLPs: Virus-like particles
  - RTS,S (Malaria): Circumsporozoite protein with HBsAg

**Conjugate Vaccines:**

*Problem:* Polysaccharide antigens are T-independent
- Don't generate memory B cells
- Poor response in children <2 years
- IgM dominant, no class switching

*Solution:* Conjugate polysaccharide to protein carrier
- Carrier provides T cell epitopes
- T-dependent response with memory
- Examples: CRM197, tetanus toxoid as carriers

**mRNA Vaccines:**

1. mRNA encodes target antigen
2. Lipid nanoparticle (LNP) delivery
3. Endogenous cell expression of antigen
4. MHC I and II presentation
5. Both antibody and CTL responses

*Advantages:*
- No infection/integration risk
- Native protein folding/modification
- Rapid design and manufacturing
- Scalable platform

**Viral Vector Vaccines:**

1. Replication-deficient virus carries antigen gene
2. Infects cells, expresses antigen
3. Strong innate immune activation
4. Robust T cell responses

*Challenges:*
- Pre-existing immunity to vector
- Anti-vector immunity limits re-dosing
- Vector choice: Adenovirus, MVA, VSV

**Adjuvant Mechanisms:**

| Adjuvant | Mechanism | Vaccines |
|----------|-----------|----------|
| Aluminum salts | Depot, inflammasome activation, Th2 bias | Many childhood vaccines |
| MF59 | Enhanced uptake, cytokine induction | Fluad |
| AS01 | MPL + QS-21: TLR4 agonist + saponin | Shingrix |
| AS04 | MPL + alum: TLR4 agonist | Cervarix |
| CpG (ODN) | TLR9 agonist, Th1 bias | Heplisav-B |

**Correlates of Protection:**

Measurable immune parameters predicting protection:
- Antibody titers (e.g., Hib: >0.15 mcg/mL)
- Neutralizing antibody titers
- Functional antibodies (e.g., opsonophagocytic assay for pneumococcus)
- Memory B cell frequency
- T cell responses (harder to measure, standardize)`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Immune measurement that predicts protection from disease after vaccination' },
        { term: 'VLP', definition: 'Virus-like particle; self-assembling viral proteins without genetic material' },
        { term: 'lipid nanoparticle', definition: 'Lipid-based delivery vehicle for mRNA vaccines' },
        { term: 'neutralizing antibody', definition: 'Antibody that blocks pathogen infectivity' },
        { term: 'T-independent antigen', definition: 'Antigen that activates B cells without T cell help, typically polysaccharides' },
        { term: 'conjugate', definition: 'Chemical linkage of polysaccharide to protein carrier' },
      ],
      clinicalNotes: 'Live vaccines contraindicated in pregnancy and immunocompromised patients. Conjugate vaccines revolutionized prevention of invasive disease from encapsulated bacteria in young children. mRNA platform enabled rapid COVID-19 vaccine development (design to authorization in <1 year).',
    },
    4: {
      level: 4,
      summary: 'Vaccination exploits immunological memory through antigen presentation via optimal delivery platforms and adjuvant systems that engage innate immunity to program durable humoral and cellular responses, with vaccine efficacy determined by immunogen design, route of administration, and host factors.',
      explanation: `Rational vaccine design integrates knowledge of pathogen biology, immune mechanisms, and host-pathogen interactions to develop effective immunization strategies.

**Molecular Basis of Vaccine Immunity:**

**B Cell Responses:**

*Extrafollicular Response:*
- Rapid antibody production (days)
- Short-lived plasma cells
- Lower affinity, IgM-dominant
- T-independent antigens limited to this pathway

*Germinal Center Response:*
- Requires T cell help (Tfh cells)
- Somatic hypermutation: Increasing antibody affinity
- Class switch recombination: IgG, IgA, IgE production
- Memory B cells and long-lived plasma cells generated
- Takes weeks to fully develop

*Long-Lived Plasma Cells:*
- Migrate to bone marrow niches
- Produce antibodies for decades
- Maintain serum titers without re-exposure
- Critical for sustained protection

**T Cell Responses:**

*CD4+ T Cells:*
- Essential for B cell help
- Cytokine production
- Memory CD4+ cells: Rapid recall response

*CD8+ CTL:*
- Required for intracellular pathogen clearance
- Live vaccines and nucleic acid vaccines most effective
- Cross-presentation from some adjuvant systems

**Antigen Design Strategies:**

**Structure-Based Vaccine Design:**

*Prefusion Stabilization:*
- RSV F protein: Mutations lock prefusion conformation
- SARS-CoV-2 Spike: 2P mutations for stability
- Targets neutralizing epitopes present only in prefusion state

*Germline-Targeting:*
- Design immunogens to engage specific germline B cells
- Guide affinity maturation toward broadly neutralizing antibodies
- HIV vaccine strategy

*Nanoparticle Display:*
- Multivalent antigen presentation
- Enhanced B cell activation (BCR crosslinking)
- Ferritin, I53-50 platforms

**Route of Administration:**

| Route | Immune Response | Applications |
|-------|-----------------|--------------|
| Intramuscular | Systemic IgG, variable mucosal | Most injectable vaccines |
| Subcutaneous | Similar to IM | Some vaccines |
| Intradermal | Dose-sparing, APC-rich dermis | Some flu vaccines |
| Oral | Mucosal IgA, gut immunity | Rotavirus, OPV, Typhoid |
| Intranasal | Upper respiratory IgA | FluMist |
| Aerosol | Lower respiratory | Under development |

**Adjuvant Systems:**

**Mechanism Categories:**

1. **Delivery Systems:**
   - Depots: Alum, emulsions
   - Targeting: Particles, liposomes
   - Protection: LNPs for mRNA

2. **Immunostimulants:**
   - TLR agonists: MPL (TLR4), CpG (TLR9), Imiquimod (TLR7)
   - STING agonists: Under development
   - Saponins: QS-21 (NLRP3, lysosomal destabilization)

3. **Combination Systems:**
   - AS01: MPL + QS-21 in liposomes
   - AS03: Squalene emulsion + alpha-tocopherol

**Adjuvant Effects:**

*Innate Immune Activation:*
- Inflammasome activation
- Cytokine/chemokine production
- DC maturation and migration
- Increased antigen uptake

*Adaptive Immune Shaping:*
- Th1/Th2 polarization
- Enhanced germinal center formation
- Improved memory generation
- Antibody isotype influence

**Special Considerations:**

**Maternal Immunization:**
- Transfers IgG to fetus (FcRn-mediated)
- Protects infant until own vaccination
- Targets: Pertussis, Flu, RSV
- Timing: Second-third trimester optimal

**Immunocompromised Patients:**
- Live vaccines contraindicated
- May have reduced responses
- May need additional doses
- Check antibody titers if possible

**Prime-Boost Strategies:**
- Heterologous prime-boost: Different platforms sequentially
- May enhance breadth and durability
- mRNA + protein boost for COVID-19 under study`,
      keyTerms: [
        { term: 'prefusion stabilization', definition: 'Structural modifications locking viral proteins in pre-fusion conformation for optimal immunogenicity' },
        { term: 'broadly neutralizing antibody', definition: 'Antibody recognizing conserved epitopes, neutralizing diverse pathogen variants' },
        { term: 'prime-boost', definition: 'Vaccination strategy using different platforms sequentially to enhance responses' },
        { term: 'dose-sparing', definition: 'Achieving protection with lower antigen doses, often through intradermal delivery or adjuvants' },
        { term: 'FcRn', definition: 'Neonatal Fc receptor; mediates IgG transport across placenta and extends IgG half-life' },
        { term: 'cross-presentation', definition: 'Presentation of exogenous antigen on MHC I to activate CD8+ T cells' },
      ],
      clinicalNotes: 'Structure-based design enabled rapid COVID-19 vaccine development. RSV vaccines (finally approved 2023) required prefusion F protein stabilization. Intradermal influenza uses 40% of standard IM dose. Tdap in pregnancy reduces infant pertussis by 90%+. mRNA platform allows rapid variant-specific boosters.',
    },
    5: {
      level: 5,
      summary: 'Vaccinology integrates structural biology, immunology, and systems approaches to develop immunogens that optimally engage germline B cell receptors, establish durable germinal center reactions, and generate tissue-appropriate memory populations, while adjuvant systems shape innate immune activation to program protective adaptive responses across diverse host populations.',
      explanation: `Modern vaccine development employs rational design principles informed by systems vaccinology, structural immunology, and deep understanding of pathogen evolution and immune evasion mechanisms.

**Systems Vaccinology:**

**Predictive Signatures:**
- Early innate gene signatures (day 1-3) predict adaptive responses
- Transcriptomic profiles correlate with antibody titers
- Blood transcriptomics: Accessible window into immune response
- Identified signatures: Interferon, inflammasome, plasma cell

**Applications:**
- Predict vaccine immunogenicity
- Optimize adjuvant formulations
- Identify non-responders
- Understand age-related differences

**Structural Vaccinology:**

**Epitope-Focused Design:**

*HIV bnAb Development:*
- Characterize broadly neutralizing antibody epitopes
- Design immunogens targeting germline precursors
- Sequential boosting toward mature bnAb
- Targets: CD4 binding site, V1V2, membrane proximal region

*Universal Influenza Vaccines:*
- Target conserved HA stalk domain
- Chimeric HA constructs
- Headless HA designs
- Neuraminidase-based approaches

*Pan-Coronavirus Strategies:*
- Conserved epitopes across sarbecoviruses
- Mosaic RBD nanoparticles
- S2 domain targeting

**Nanoparticle Platforms:**

| Platform | Structure | Advantages |
|----------|-----------|------------|
| Ferritin | 24-mer cage | Self-assembling, stable |
| I53-50 | 120-mer icosahedron | High valency, designer |
| VLP | Native viral structure | Strong immunogenicity |
| Liposomes | Lipid bilayer vesicle | Adjuvant incorporation |

**mRNA Vaccine Biology:**

**Immunogenicity Mechanisms:**

*Innate Sensing:*
- TLR7/8: Recognize ssRNA
- RIG-I/MDA5: Detect dsRNA contaminants
- Modified nucleosides (N1-methylpseudouridine): Reduce TLR sensing
- Balance: Some innate activation beneficial, excess detrimental

*LNP Composition:*
- Ionizable lipid: pH-dependent charge, endosomal escape
- Cholesterol: Stability
- Phospholipid: Structure
- PEG-lipid: Circulation time, but anti-PEG antibodies

*Biodistribution:*
- Primary expression at injection site
- Draining lymph nodes: Key immune activation site
- Transient expression (days)
- mRNA degraded, no integration

**Durability Challenges:**
- Antibody waning varies by vaccine/pathogen
- Memory cells persist longer than circulating antibody
- Correlates of protection may not be just antibody titer
- Hybrid immunity: Infection + vaccination most durable

**Vaccine Failure Mechanisms:**

**Host Factors:**
- Immunosenescence: Reduced responses in elderly
- Immunosuppression: Medication or disease-related
- Genetic: HLA polymorphisms, cytokine gene variants
- Microbiome: Affects oral vaccine responses

**Pathogen Factors:**
- Antigenic variation: Influenza drift, SARS-CoV-2 variants
- Immune evasion: HIV, HCV
- Non-protective responses: Dengue antibody-dependent enhancement (ADE)

**Vaccine Factors:**
- Suboptimal antigen design
- Insufficient adjuvant
- Wrong route for target pathogen
- Storage/handling issues

**Breakthrough Infections:**
- Expected at population level
- Infection vs disease prevention
- Severity usually reduced
- Hybrid immunity may result

**Adverse Events:**

**Mechanism Categories:**

1. **Expected Reactogenicity:**
   - Local: Injection site pain, erythema
   - Systemic: Fever, fatigue, myalgia
   - Correlate with immune activation
   - Transient (24-48 hours)

2. **Hypersensitivity:**
   - IgE-mediated anaphylaxis (rare): PEG allergy for mRNA
   - Delayed hypersensitivity: Less common

3. **Autoimmune/Inflammatory:**
   - GBS after influenza vaccine (rare): ~1-2/million
   - Myocarditis after mRNA vaccines: ~1/10,000-50,000 young males
   - Usually mild, resolves

4. **Specific Vaccine Concerns:**
   - VITT after adenoviral vectors: PF4 antibodies
   - Intussusception after rotavirus
   - Febrile seizures: MMR + varicella same day

**Global Health Considerations:**

**Vaccine Development for Endemic Diseases:**
- Malaria: RTS,S/AS01 (partial efficacy), R21 (better?)
- Tuberculosis: BCG limitations, new candidates
- HIV: Decades of effort, no success yet
- Dengue: ADE complicates design

**Implementation Challenges:**
- Cold chain requirements
- Cost and access
- Vaccine hesitancy
- Outbreak response speed

**Novel Platforms for Low-Resource Settings:**
- Thermostable formulations
- Needle-free delivery
- Single-dose regimens
- mRNA: Manufacturing flexibility`,
      keyTerms: [
        { term: 'systems vaccinology', definition: 'Integrative approach using genomics and bioinformatics to understand and predict vaccine responses' },
        { term: 'germline targeting', definition: 'Immunogen design to engage specific naive B cell precursors, guiding antibody maturation' },
        { term: 'hybrid immunity', definition: 'Enhanced and durable immunity from combination of infection and vaccination' },
        { term: 'VITT', definition: 'Vaccine-induced immune thrombocytopenia and thrombosis; rare complication of adenoviral vector vaccines' },
        { term: 'ADE', definition: 'Antibody-dependent enhancement; non-neutralizing antibodies facilitating infection or worsening disease' },
        { term: 'immunosenescence', definition: 'Age-related decline in immune function affecting vaccine responses' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- mRNA vaccines: N1-methylpseudouridine reduces innate sensing, increases translation
- Myocarditis risk: Highest in males 12-29 after dose 2, usually mild
- VITT: Suspect if thrombosis + thrombocytopenia 4-30 days post-adenoviral vaccine; do NOT give heparin, use IVIG + non-heparin anticoagulant
- Correlates of protection: Binding antibody vs neutralizing antibody vs functional assays
- Yellow fever: Single dose provides lifelong immunity (no booster needed per WHO)
- Shingrix vs Zostavax: Shingrix (subunit + AS01) 90%+ efficacy vs Zostavax (live) 51%; Shingrix for immunocompromised
- COVID-19 vaccine timing: 3 months post-infection is reasonable for non-immunocompromised
- Vaccine administration error: Subcutaneous instead of IM - generally still effective but may have more local reactions`,
    },
  },

  media: [
    {
      id: 'vaccine-types-overview',
      type: 'diagram',
      filename: 'vaccine-types-overview.svg',
      title: 'Overview of Vaccine Types',
      description: 'Comparison of live attenuated, inactivated, subunit, mRNA, and viral vector vaccines',
    },
    {
      id: 'vaccine-immune-response',
      type: 'diagram',
      filename: 'vaccine-immune-response.svg',
      title: 'Immune Response to Vaccination',
      description: 'Primary and secondary immune responses with memory formation',
    },
    {
      id: 'herd-immunity',
      type: 'diagram',
      filename: 'herd-immunity-illustration.svg',
      title: 'Herd Immunity Concept',
      description: 'How population immunity protects unvaccinated individuals',
    },
  ],
  citations: [
    {
      id: 'plotkin-vaccines',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines',
      authors: ['Plotkin SA', 'Orenstein WA', 'Offit PA', 'Edwards KM'],
      source: 'Elsevier',
    },
    {
      id: 'pulendran-nature-immunology-2021',
      type: 'article',
      title: 'Emerging concepts in the science of vaccine adjuvants',
      authors: ['Pulendran B', 'Arunachalam PS', 'O\'Hagan DT'],
      source: 'Nature Reviews Immunology',
      url: 'https://doi.org/10.1038/s41577-021-00528-x',
    },
  ],
  crossReferences: [
    { targetId: 'physiology-immune-adaptive-immunity', targetType: 'concept', relationship: 'related', label: 'Adaptive Immunity' },
    { targetId: 'physiology-immune-immunodeficiency', targetType: 'concept', relationship: 'see-also', label: 'Immunodeficiency' },
    { targetId: 'allergy-immunology-anaphylaxis', targetType: 'concept', relationship: 'see-also', label: 'Anaphylaxis' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['immunology', 'preventive medicine', 'infectious disease'],
    keywords: ['vaccines', 'immunization', 'herd immunity', 'mRNA', 'adjuvants', 'memory cells'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics', 'preventive medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vaccinationScienceContent;
