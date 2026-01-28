import { EducationalContent } from '../../types';

export const VACCINATION_OVERVIEW: EducationalContent = {
  id: 'infectious-disease-vaccination-overview',
  type: 'concept',
  name: 'Vaccination Overview',
  alternateNames: ['Immunization', 'Vaccines', 'Active Immunization'],
  levels: {
    1: {
      level: 1,
      summary: 'Vaccines teach your body how to fight germs before you get sick, protecting you from serious diseases.',
      explanation: `Your body has an amazing defense system called the immune system. When germs try to make you sick, your immune system fights back. The problem is, the first time your body sees a new germ, it takes a while to figure out how to fight it. During this time, you can get very sick.

**How Vaccines Work:**
Vaccines are like a training exercise for your immune system. They contain harmless pieces of germs or weakened germs that can't make you sick. When you get a vaccine:

1. Your body sees these harmless pieces and thinks "this looks like an enemy!"
2. Your immune system practices fighting this "enemy"
3. Special cells called memory cells remember what this germ looks like
4. If the real germ ever tries to attack, your body already knows how to fight it

Think of it like a fire drill at school. You practice what to do so that if there's ever a real fire, everyone knows exactly how to stay safe.

**Why Vaccines Matter:**
Before vaccines existed, diseases like polio paralyzed thousands of children every year, and measles killed hundreds of thousands of people worldwide. Thanks to vaccines, many of these diseases are now rare.

**Common Vaccines:**
- Flu shot (yearly to protect against influenza)
- MMR (protects against measles, mumps, and rubella)
- Tetanus (protects against a serious infection from cuts)
- HPV (protects against certain cancers)

**Are Vaccines Safe?**
Yes! Vaccines go through many years of testing before people can get them. Scientists continuously monitor vaccines to make sure they're safe. The small risks from vaccines are much, much smaller than the risks from the diseases they prevent.`,
      keyTerms: [
        { term: 'Vaccine', definition: 'A substance that teaches your immune system to recognize and fight specific germs' },
        { term: 'Immune system', definition: 'Your body\'s defense system that fights off germs and diseases' },
        { term: 'Memory cells', definition: 'Special cells in your body that remember germs so they can fight them faster next time' },
        { term: 'Immunization', definition: 'The process of becoming protected against a disease, usually by getting a vaccine' },
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccines stimulate the adaptive immune system to develop memory against specific pathogens, providing protection without causing disease.',
      explanation: `Vaccines work by harnessing the body's natural immune response. Understanding the basics of immunology helps explain how different vaccine types provide protection.

**The Immune Response:**
When your body encounters a pathogen, the adaptive immune system mounts a specific response:
1. **Recognition**: Immune cells identify foreign antigens (molecules on pathogen surfaces)
2. **Activation**: B cells and T cells multiply and differentiate
3. **Attack**: Antibodies neutralize pathogens; killer T cells destroy infected cells
4. **Memory**: Some B and T cells become long-lived memory cells

**Types of Vaccines:**

| Vaccine Type | How It Works | Examples |
|-------------|--------------|----------|
| Live attenuated | Weakened but living pathogen | MMR, varicella, rotavirus |
| Inactivated | Killed pathogen | Flu shot (some types), hepatitis A |
| Subunit/protein | Purified pieces of pathogen | Hepatitis B, pertussis (acellular) |
| mRNA | Instructions to make antigen | COVID-19 (Pfizer, Moderna) |
| Viral vector | Harmless virus carries antigen gene | COVID-19 (J&J), Ebola |
| Toxoid | Inactivated toxin | Tetanus, diphtheria |

**Herd Immunity:**
When enough people in a community are vaccinated, diseases can't spread easily. This protects people who can't be vaccinated, such as:
- Infants too young for certain vaccines
- People with weakened immune systems
- Those with allergies to vaccine components

The percentage needed for herd immunity varies by disease (measles requires about 95%, polio about 80%).

**Vaccine Schedules:**
The recommended vaccination schedule is designed based on:
- When infants' immune systems can respond effectively
- When protection is most needed
- How long immunity lasts
- Safety of giving multiple vaccines together

**Common Side Effects:**
Most vaccine side effects are mild and temporary:
- Soreness at injection site
- Low-grade fever
- Fatigue
- Mild headache

These are signs that your immune system is responding to the vaccine.`,
      keyTerms: [
        { term: 'Antigen', definition: 'A molecule, usually a protein, that triggers an immune response' },
        { term: 'Antibody', definition: 'A protein produced by B cells that binds to specific antigens to neutralize pathogens' },
        { term: 'Attenuated', definition: 'Weakened; a live attenuated vaccine contains a living but weakened pathogen' },
        { term: 'Herd immunity', definition: 'Community protection that occurs when enough people are immune to prevent disease spread' },
        { term: 'Toxoid', definition: 'An inactivated toxin that can stimulate immunity without causing disease' },
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccines induce adaptive immunity through presentation of antigens to the immune system, generating memory B cells and T cells that provide rapid, specific responses upon subsequent pathogen exposure.',
      explanation: `Vaccination represents one of the most successful public health interventions in history. Understanding the immunological basis of vaccines enables appreciation of vaccine design, efficacy, and limitations.

**Immunological Mechanisms:**

*Humoral Immunity:*
- Vaccines stimulate B cells to produce antibodies against target antigens
- Neutralizing antibodies prevent pathogen entry into cells
- Opsonizing antibodies enhance phagocytosis
- Long-lived plasma cells in bone marrow provide sustained antibody production
- Memory B cells enable rapid antibody response upon re-exposure

*Cell-Mediated Immunity:*
- CD4+ T helper cells coordinate immune responses
- CD8+ cytotoxic T cells eliminate infected cells
- Memory T cells persist for decades in some cases
- Particularly important for intracellular pathogens (viruses, some bacteria)

**Vaccine Platforms:**

*Live Attenuated Vaccines:*
- Advantages: Strong immune response, often single-dose sufficient, induces mucosal immunity
- Disadvantages: Requires cold chain, contraindicated in immunocompromised, potential for reversion
- Attenuation methods: Serial passage, cold adaptation, genetic modification

*mRNA Vaccines:*
- Lipid nanoparticle delivery of mRNA encoding antigen
- Host cells translate mRNA and express antigen
- Rapid development and manufacturing scalability
- No risk of genomic integration (mRNA degraded within days)
- Requires ultra-cold storage (though improving)

*Viral Vector Vaccines:*
- Replication-incompetent or replication-competent viral backbone
- Carries gene encoding target antigen
- Strong cellular immune response
- Pre-existing immunity to vector can reduce efficacy
- Examples: Adenovirus-based (Ad26, Ad5, ChAdOx1)

*Protein Subunit Vaccines:*
- Recombinant proteins produced in cell culture systems
- Often require adjuvants to enhance immunogenicity
- Well-established safety profile
- May need multiple doses for optimal immunity

**Adjuvants:**
Substances that enhance immune responses to vaccine antigens:
- Aluminum salts (alum): Most common, enhances humoral immunity
- AS04 (alum + MPL): Used in hepatitis B and HPV vaccines
- MF59 (oil-in-water emulsion): Enhances flu vaccine responses in elderly
- AS01B (liposomes + MPL + QS-21): Used in shingles and malaria vaccines

**Correlates of Protection:**
Immunological markers associated with protection from disease:
- Binding antibody titers
- Neutralizing antibody titers
- T cell responses (IFN-γ production, cytotoxicity)
- Mucosal IgA for respiratory/GI pathogens

**Vaccine Efficacy vs. Effectiveness:**
- Efficacy: Performance in controlled clinical trials
- Effectiveness: Performance in real-world conditions
- Effectiveness often lower due to storage issues, administration errors, population heterogeneity`,
      keyTerms: [
        { term: 'Neutralizing antibody', definition: 'An antibody that prevents pathogen entry into host cells by binding to critical surface proteins' },
        { term: 'Adjuvant', definition: 'A substance added to vaccines to enhance the immune response to the antigen' },
        { term: 'Correlate of protection', definition: 'An immune response marker statistically associated with protection from disease after vaccination' },
        { term: 'Immunogenicity', definition: 'The ability of a substance to provoke an immune response' },
        { term: 'Reversion', definition: 'The process by which an attenuated vaccine strain regains virulence through genetic changes' },
      ],
    },
    4: {
      level: 4,
      summary: 'Vaccine immunology encompasses antigen design, adjuvant mechanisms, germinal center dynamics, memory cell differentiation, and the complex interplay between innate and adaptive immunity that determines protection durability and breadth.',
      explanation: `Advanced vaccinology requires understanding molecular immunology, systems biology of vaccine responses, and the challenges of developing vaccines against difficult pathogens.

**Germinal Center Responses:**
The germinal center (GC) is the anatomical site where high-quality antibody responses develop:

*GC Dynamics:*
- B cells undergo somatic hypermutation (SHM) of immunoglobulin genes
- Affinity maturation selects for higher-affinity antibodies
- Class switch recombination (CSR) generates different isotypes (IgG, IgA, IgE)
- T follicular helper (Tfh) cells provide essential signals
- Output: Long-lived plasma cells and memory B cells

*Vaccine Implications:*
- Antigen persistence enhances GC reactions
- Adjuvants can be designed to optimize GC responses
- Spacing of doses affects affinity maturation quality
- Repeated boosting can exhaust B cell responses (original antigenic sin)

**Innate Immune Activation:**

*Pattern Recognition Receptors (PRRs):*
- Toll-like receptors (TLRs): Recognize pathogen-associated molecular patterns
- RIG-I-like receptors: Detect cytoplasmic RNA (relevant for mRNA vaccines)
- STING pathway: Responds to cytoplasmic DNA

*Adjuvant Mechanisms:*
- TLR4 agonists (MPL): Induce Th1-biased responses
- TLR9 agonists (CpG): Enhance antibody and CTL responses
- STING agonists: Under investigation for cancer and infectious disease vaccines
- Saponins (QS-21): Activate NLRP3 inflammasome

**Memory Cell Heterogeneity:**

*B Cell Memory:*
- Class-switched memory B cells (IgG+, CD27+)
- IgM+ memory B cells
- Tissue-resident memory B cells
- Long-lived plasma cells (bone marrow niches)

*T Cell Memory:*
- Central memory T cells (Tcm): Lymph node homing, proliferative capacity
- Effector memory T cells (Tem): Peripheral tissue homing, rapid effector function
- Tissue-resident memory T cells (Trm): Non-circulating, front-line defense
- Stem cell memory T cells (Tscm): Self-renewal capacity

**Mucosal Immunity:**
Many pathogens enter through mucosal surfaces, but most vaccines are administered parenterally:
- Secretory IgA provides mucosal protection
- Mucosal vaccines (oral, intranasal) can induce local immunity
- Challenges: Tolerance, stability, standardization
- Examples: Oral polio vaccine, intranasal flu vaccine (FluMist)

**Universal Vaccine Strategies:**

*Conserved Epitope Targeting:*
- For rapidly mutating pathogens (influenza, HIV)
- Target conserved regions (influenza hemagglutinin stalk)
- Mosaic antigens presenting multiple variants
- Germline-targeting approaches for broadly neutralizing antibodies

*Challenges:*
- Immunodominance of variable epitopes
- Original antigenic sin directing responses to prior strains
- Low immunogenicity of conserved regions

**Systems Vaccinology:**
Integration of multi-omics data to predict and optimize vaccine responses:
- Transcriptomics of early immune responses predict immunogenicity
- Metabolomics profiles correlate with antibody responses
- Machine learning models for vaccine optimization
- Personalized vaccination strategies`,
      keyTerms: [
        { term: 'Germinal center', definition: 'Transient microanatomical structures in secondary lymphoid organs where B cells undergo affinity maturation and class switching' },
        { term: 'Somatic hypermutation', definition: 'Introduction of point mutations into immunoglobulin variable regions to generate antibody diversity' },
        { term: 'Affinity maturation', definition: 'The process of selection for B cells producing higher-affinity antibodies during germinal center reactions' },
        { term: 'T follicular helper cell', definition: 'A specialized CD4+ T cell subset that provides help to B cells in germinal centers' },
        { term: 'Original antigenic sin', definition: 'The phenomenon where prior immune memory shapes responses to related but distinct antigens, potentially limiting breadth' },
      ],
      clinicalNotes: 'Understanding these mechanisms informs clinical decisions about vaccine selection, timing, and boosting strategies. For immunocompromised patients, assessing vaccine responses through antibody titers or T cell assays may guide additional doses. The success of mRNA vaccines against COVID-19 has accelerated development of this platform for other diseases.',
    },
    5: {
      level: 5,
      summary: 'Expert vaccine immunology integrates structural vaccinology, systems biology, mucosal immunology, and rational adjuvant design to address challenges including antigenic variation, waning immunity, and immune evasion by emerging pathogens.',
      explanation: `Cutting-edge vaccinology applies structural biology, computational immunology, and advanced delivery systems to develop vaccines against historically intractable pathogens and to optimize immunization strategies.

**Structural Vaccinology:**

*Structure-Based Antigen Design:*
- Atomic-level resolution of antigen-antibody complexes guides epitope-focused design
- Stabilization of prefusion conformations (RSV F protein, coronavirus spike)
- Computational design of epitope scaffolds presenting neutralizing epitopes
- Multivalent display on nanoparticles enhances B cell activation

*RSV Vaccine Success:*
- Decades of failed RSV vaccine development (including formalin-inactivated vaccine causing enhanced disease)
- Discovery that prefusion F protein is primary target of neutralizing antibodies
- Structure-based stabilization of prefusion conformation
- Resulted in highly efficacious vaccines (Arexvy, Abrysvo) approved in 2023

**Broadly Neutralizing Antibody (bNAb) Strategies:**

*HIV Vaccine Challenges:*
- Extraordinary sequence diversity
- Glycan shielding of conserved epitopes
- bNAbs take years to develop and require extensive SHM
- Germline-targeting approach: Prime with immunogens that activate bNAb precursor B cells

*Universal Influenza Vaccine:*
- Hemagglutinin head is immunodominant but highly variable
- Stalk domain is conserved but less immunogenic
- Chimeric HA constructs to redirect responses to stalk
- Computationally optimized antigens (COBRA)
- Neuraminidase-based approaches gaining attention

**Next-Generation Adjuvants:**

*Mechanism-Based Design:*
- TLR7/8 agonists: Potent Th1 and CTL responses
- STING agonists: Bridge innate and adaptive immunity
- Saponin-based adjuvants: AS01B component QS-21 induces CD8 responses
- Combination adjuvants targeting multiple pathways

*Delivery Systems as Adjuvants:*
- Lipid nanoparticles have intrinsic adjuvant properties (ionizable lipids activate NLRP3)
- Virus-like particles (VLPs) enhance B cell receptor crosslinking
- Self-amplifying RNA (saRNA): Lower doses, prolonged antigen expression

**Mucosal Vaccine Frontiers:**

*Challenges and Opportunities:*
- Parenteral vaccines often fail to induce mucosal immunity
- Intranasal vaccines can prevent infection (not just disease)
- Oral vaccines face gastric acid, proteases, tolerance mechanisms
- Sublingual route under investigation (avoids GI degradation)

*Innovations:*
- Adenovirus-based intranasal vaccines (COVID-19)
- Outer membrane vesicles (OMVs) as mucosal immunogens
- Targeted delivery to M cells in Peyer's patches

**Therapeutic Vaccines:**

*Cancer Vaccines:*
- Personalized neoantigen vaccines based on tumor sequencing
- mRNA encoding multiple neoantigens
- Combination with checkpoint inhibitors
- HPV therapeutic vaccines for established lesions

*Chronic Infection Vaccines:*
- Therapeutic vaccines for HIV (to enable cure strategies)
- Hepatitis B functional cure approaches
- Challenges: Immune exhaustion, viral reservoirs

**Global Health Considerations:**

*Vaccine Development for Endemic Diseases:*
- Malaria: RTS,S/AS01 and R21/Matrix-M vaccines achieving partial efficacy
- Tuberculosis: BCG replacement and boost strategies
- Neglected tropical diseases: Market incentives and partnerships

*Manufacturing and Distribution:*
- Thermostable formulations for reduced cold chain dependency
- Single-dose regimens for hard-to-reach populations
- Technology transfer and regional manufacturing capacity
- mRNA platform potential for rapid regional production

**Regulatory Science:**
- Accelerated approval pathways for pandemic vaccines
- Correlates of protection as surrogate endpoints
- Adaptive trial designs
- Post-marketing surveillance systems (VAERS, V-safe)
- Benefit-risk communication and vaccine confidence

**Future Directions:**
- Pan-coronavirus vaccines targeting conserved epitopes
- Self-amplifying RNA for dose-sparing
- Implantable controlled-release systems
- AI-driven antigen and adjuvant optimization
- Personalized vaccination based on immunogenotype`,
      keyTerms: [
        { term: 'Structural vaccinology', definition: 'The application of structural biology to rational vaccine antigen design, including stabilization of protective conformations' },
        { term: 'Broadly neutralizing antibody (bNAb)', definition: 'An antibody capable of neutralizing diverse strains of a pathogen by targeting conserved epitopes' },
        { term: 'Germline-targeting vaccine', definition: 'A vaccine designed to activate naive B cells with specific germline-encoded receptors that can mature into bNAb-producing cells' },
        { term: 'Self-amplifying RNA (saRNA)', definition: 'RNA molecules that encode both the target antigen and replication machinery, enabling amplification within host cells' },
        { term: 'Correlate of protection', definition: 'A measurable immunological marker that reliably predicts vaccine efficacy, potentially serving as a surrogate endpoint for approval' },
      ],
      clinicalNotes: 'Clinicians should stay current with evolving vaccine recommendations, particularly for immunocompromised patients where standard schedules may be inadequate. Understanding the immunological basis of vaccines enables informed discussions with vaccine-hesitant patients. The rapid development and deployment of COVID-19 vaccines demonstrated the potential of new platforms and accelerated regulatory pathways, with implications for pandemic preparedness.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cdc-acip-2024',
      type: 'website',
      title: 'Advisory Committee on Immunization Practices Recommendations',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'Centers for Disease Control and Prevention',
      license: 'Copyrighted',
    },
    {
      id: 'plotkin-vaccines-2018',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines',
      authors: ['Plotkin SA', 'Orenstein WA', 'Offit PA', 'Edwards KM'],
      source: 'Elsevier',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-infection-prevention', targetType: 'concept', relationship: 'parent', label: 'Infection Prevention' },
    { targetId: 'infectious-disease-influenza', targetType: 'condition', relationship: 'related', label: 'Influenza' },
    { targetId: 'infectious-disease-covid-19', targetType: 'condition', relationship: 'related', label: 'COVID-19' },
  ],
  tags: {
    systems: ['infectious-disease', 'immunology'],
    topics: ['prevention', 'immunization', 'public-health'],
    keywords: ['vaccines', 'immunization', 'herd immunity', 'antibodies', 'adjuvants', 'mRNA vaccines'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
