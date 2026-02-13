/**
 * How Vaccines Work
 *
 * Comprehensive education on vaccine immunology and mechanisms
 */

import { EducationalContent } from '../../types';

export const HOW_VACCINES_WORK: EducationalContent = {
  id: 'concept-how-vaccines-work',
  type: 'concept',
  name: 'How Vaccines Work',
  alternateNames: ['Vaccine mechanism', 'Vaccine immunology', 'How immunization works'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccines teach your immune system to recognize and fight germs so you are protected before you get sick.',
      explanation: `Your body has an immune system that fights germs (viruses and bacteria). Vaccines help your immune system learn to fight specific germs safely.

**How Your Immune System Works:**
- Germs enter your body
- Your immune system recognizes them as invaders
- It makes special fighters called antibodies
- Antibodies attack the germs
- Your body remembers how to fight them

**How Vaccines Help:**
- Vaccines contain pieces of germs or weakened germs
- These pieces cannot make you sick
- Your immune system learns to recognize them
- It makes antibodies against them
- If you ever meet the real germ, you're ready to fight!

**Why This Matters:**
- You get protection without getting sick
- Your body remembers for years or even a lifetime
- You can fight off the disease if exposed
- You help protect others who cannot be vaccinated

**Types of Vaccines:**
- Some have weakened germs
- Some have killed germs
- Some have just pieces of germs
- Some use new technology (like mRNA)

**Common Questions:**
- **Can vaccines give you the disease?** No, vaccines cannot give you the disease they prevent.
- **Why do I need multiple doses?** Multiple doses help your immune system build stronger protection.
- **Why do I need boosters?** Some protection fades over time and needs refreshing.`,
      keyTerms: [
        { term: 'immune system', definition: 'Your body\'s defense system against germs' },
        { term: 'antibodies', definition: 'Special proteins your body makes to fight specific germs' },
        { term: 'immunity', definition: 'Protection against a disease' },
      ],
      analogies: [
        'A vaccine is like showing your immune system a wanted poster - it learns what the criminal (germ) looks like so it can catch them quickly if they ever show up.',
        'Your immune system is like an army. Vaccines are like training exercises that prepare the army to fight the real enemy.',
      ],
      examples: [
        'After getting a measles vaccine, your body learns to make antibodies against measles. If you are ever exposed to measles, these antibodies quickly attack the virus before you get sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccines stimulate the adaptive immune system to produce antibodies and memory cells that provide long-lasting protection against specific pathogens.',
      explanation: `Vaccines work by mimicking natural infection to trigger an immune response, without causing disease. This creates immunological memory that protects against future exposure.

**The Immune Response:**

**1. Innate Immunity (First Response)**
- Non-specific defense
- Recognizes general "danger signals"
- Activates inflammation
- Recruits immune cells

**2. Adaptive Immunity (Vaccine Target)**
- Specific to particular pathogens
- Takes days to develop
- Creates lasting memory

**Key Players:**

*B Cells:*
- Produce antibodies
- Some become memory B cells
- Memory cells last years to decades

*T Cells:*
- Helper T cells: Coordinate immune response
- Cytotoxic T cells: Kill infected cells
- Memory T cells: Long-term protection

**How Vaccines Create Immunity:**

1. **Antigen Presentation**: Vaccine antigens are processed
2. **T Cell Activation**: Helper T cells recognize antigens
3. **B Cell Activation**: B cells produce antibodies
4. **Memory Formation**: Memory cells persist long-term
5. **Recall Response**: Faster, stronger response upon re-exposure

**Types of Vaccines:**

| Type | How It Works | Examples |
|------|--------------|----------|
| Live attenuated | Weakened pathogen replicates | MMR, Varicella |
| Inactivated | Killed pathogen | Flu shot, Hepatitis A |
| Subunit | Pieces of pathogen | Hepatitis B, Shingrix |
| Toxoid | Inactivated toxin | Tetanus, Diphtheria |
| mRNA | Instructions for making antigen | COVID-19 (Pfizer, Moderna) |
| Viral vector | Different virus carries antigen gene | COVID-19 (J&J) |

**Why Multiple Doses?**
- First dose: Primary response (slower, weaker)
- Subsequent doses: Booster response (faster, stronger)
- More memory cells created
- Higher antibody levels`,
      keyTerms: [
        { term: 'antigen', definition: 'A substance that triggers an immune response, such as a protein on a virus' },
        { term: 'B cell', definition: 'Immune cell that produces antibodies' },
        { term: 'T cell', definition: 'Immune cell that coordinates response and kills infected cells' },
        { term: 'memory cell', definition: 'Long-lived immune cell that remembers past infections/vaccinations' },
      ],
      analogies: [
        'Memory cells are like keeping notes from a class - when the test (infection) comes, you can review them quickly instead of learning everything from scratch.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccines engage innate immune pattern recognition to drive adaptive immunity, producing germinal center responses that generate high-affinity antibodies and durable memory B and T cell populations.',
      explanation: `**Innate Immune Activation:**

*Pattern Recognition Receptors (PRRs):*
- TLRs (Toll-like receptors): Recognize pathogen-associated molecular patterns
- NOD-like receptors: Intracellular sensing
- RIG-I-like receptors: Detect viral RNA

*Adjuvant Function:*
- Enhance innate activation
- Prolong antigen presentation
- Examples: Aluminum salts, AS01B (Shingrix), MF59
- mRNA vaccines: mRNA itself activates innate immunity

**Dendritic Cell Activation:**
- Professional antigen-presenting cells
- Capture vaccine antigens
- Migrate to lymph nodes
- Present antigens on MHC molecules

**T Cell Response:**

*CD4+ T Helper Cells:*
- Recognize antigen on MHC Class II
- Provide B cell help (cytokines, CD40L)
- Essential for germinal center formation
- Th1 vs Th2 polarization affects response type

*CD8+ Cytotoxic T Cells:*
- Recognize antigen on MHC Class I
- Kill virus-infected cells
- Important for intracellular pathogens
- Live vaccines and mRNA vaccines induce strong CD8 response

**Germinal Center Response:**

*Formation:*
- Occurs in lymph nodes/spleen
- Requires T cell help
- Site of affinity maturation

*Processes:*
1. B cell clonal expansion
2. Somatic hypermutation (SHM)
3. Affinity maturation (selection of high-affinity B cells)
4. Class switch recombination (IgM → IgG, IgA)
5. Memory B cell and plasma cell differentiation

**Memory Cell Populations:**

*Memory B Cells:*
- Long-lived (decades)
- Rapidly reactivate upon re-exposure
- Undergo further affinity maturation

*Long-Lived Plasma Cells:*
- Reside in bone marrow
- Continuously secrete antibodies
- Maintain serum antibody levels

*Memory T Cells:*
- Effector memory: Rapid cytokine production
- Central memory: Proliferative capacity
- Tissue-resident memory: Local protection

**Vaccine Platform Immunology:**

*Live Attenuated:*
- Replicates, mimics natural infection
- Strong CD8+ and CD4+ response
- Durable immunity often with single dose
- Contraindicated in immunocompromised

*mRNA Vaccines:*
- mRNA enters cytoplasm
- Translated to protein antigen
- Presented on MHC I (CD8+ response) and MHC II (CD4+)
- Strong innate activation by mRNA

*Protein Subunit with Adjuvant:*
- Requires adjuvant for innate activation
- Primarily CD4+ and antibody response
- Multiple doses needed`,
      keyTerms: [
        { term: 'germinal center', definition: 'Site in lymph nodes where B cells undergo affinity maturation and memory formation' },
        { term: 'affinity maturation', definition: 'Process of selecting B cells with highest antibody affinity through somatic hypermutation' },
        { term: 'adjuvant', definition: 'Substance added to vaccines to enhance immune response' },
        { term: 'somatic hypermutation', definition: 'Random mutations in antibody genes that enable selection of high-affinity variants' },
      ],
      clinicalNotes: 'Live vaccines contraindicated in immunocompromised due to replication risk. Adjuvanted vaccines (Shingrix) require innate activation for efficacy. mRNA vaccines produce both antibody and cellular immunity.',
    },
    4: {
      level: 4,
      summary: 'Vaccine immunology encompasses correlates of protection, durability of immune memory, immune evasion by pathogens, and rational vaccine design targeting neutralizing epitopes and conserved antigens for broad protection.',
      explanation: `**Correlates of Protection:**

*Definition:*
- Measurable immune response associated with protection
- May be mechanistic (actual protective mechanism) or non-mechanistic (surrogate)

*Examples:*
| Vaccine | Correlate | Threshold |
|---------|-----------|-----------|
| Hepatitis B | Anti-HBs | ≥10 mIU/mL |
| Measles | Neutralizing antibody | ~120-200 mIU/mL |
| Tetanus | Antitoxin | ≥0.01 IU/mL |
| Influenza | HAI titer | ≥1:40 |
| COVID-19 | Neutralizing antibody | Variable |

*Limitations:*
- Correlate may not capture all protection mechanisms
- Cell-mediated immunity often harder to measure
- Threshold may vary by individual and context

**Durability of Immunity:**

*Factors Affecting Duration:*
- Vaccine type (live > inactivated for many)
- Adjuvant quality
- Germinal center response quality
- Bone marrow niche for plasma cells
- Pathogen biology

*Long-Lasting Immunity:*
- Measles, mumps: Decades to lifelong
- Hepatitis B: 20+ years
- Yellow fever: Lifelong

*Waning Immunity:*
- Pertussis: 5-10 years
- Influenza: Variable, requires annual
- COVID-19: Wanes, boosters recommended

**Immune Evasion:**

*Antigenic Variation:*
- Influenza: Antigenic drift (mutations), shift (reassortment)
- HIV: Extreme variability
- SARS-CoV-2: Variants of concern

*Implications for Vaccines:*
- Influenza: Annual reformulation
- COVID-19: Updated boosters
- Universal vaccines: Target conserved epitopes

**Rational Vaccine Design:**

*Structural Vaccinology:*
- Determine antigen structure
- Identify neutralizing epitopes
- Engineer stabilized conformations
- Example: RSV prefusion F stabilization

*Reverse Vaccinology:*
- Genomic analysis of pathogen
- Identify surface-exposed proteins
- Screen for immunogenicity
- Example: MenB vaccine development

*Conserved Epitopes:*
- Target regions that cannot mutate (fitness cost)
- Broadly neutralizing antibodies (HIV, influenza)
- Challenge: Often poorly immunogenic

**Mucosal Immunity:**

*IgA Response:*
- Secretory IgA at mucosal surfaces
- May prevent infection (sterilizing immunity)
- Parenteral vaccines: Primarily systemic IgG
- Mucosal vaccines: Can induce IgA

*Intranasal Vaccines:*
- LAIV (live attenuated influenza vaccine)
- Research: Intranasal COVID-19 vaccines
- May provide better transmission-blocking

**Systems Vaccinology:**

*Approach:*
- High-dimensional immune profiling
- Transcriptomics, proteomics, metabolomics
- Machine learning to predict response

*Applications:*
- Predict vaccine efficacy
- Identify early biomarkers of protection
- Optimize vaccine formulations`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Measurable immune parameter statistically associated with protection from disease' },
        { term: 'antigenic drift', definition: 'Gradual accumulation of mutations in pathogen surface proteins' },
        { term: 'antigenic shift', definition: 'Major antigenic change from reassortment of gene segments (influenza)' },
        { term: 'structural vaccinology', definition: 'Using atomic-level antigen structure to design optimized vaccine immunogens' },
      ],
      clinicalNotes: 'Correlates of protection guide vaccine licensure and assessment. Waning immunity explains need for boosters. Antigenic variation necessitates updated vaccines for influenza and COVID-19.',
    },
    5: {
      level: 5,
      summary: 'Advanced vaccine immunology integrates germinal center dynamics, T follicular helper cell biology, immune memory heterogeneity, and systems approaches to develop next-generation vaccines with optimized durability, breadth, and mucosal protection.',
      explanation: `**Germinal Center Dynamics:**

*Tfh (T Follicular Helper) Cells:*
- Critical for GC formation and maintenance
- Provide B cell help via IL-21, CD40L
- Determine quality of antibody response
- Vaccine adjuvants that enhance Tfh: AS01, MF59

*GC Kinetics:*
- Peak ~2-3 weeks post-vaccination
- Quality correlates with memory durability
- Prolonged GC: Better affinity maturation

*B Cell Selection:*
- Light zone: Antigen testing, T cell help competition
- Dark zone: Proliferation, somatic hypermutation
- Iterative cycles improve antibody affinity

**Memory Heterogeneity:**

*B Cell Memory Subsets:*
- Switched memory B cells (IgG+, IgA+)
- Unswitched memory B cells (IgM+)
- Atypical memory B cells
- Tissue-resident memory B cells

*Plasma Cell Hierarchy:*
- Short-lived plasmablasts (early)
- Long-lived plasma cells (bone marrow)
- Competition for survival niches

*T Cell Memory Subsets:*
- Stem cell memory T cells (TSCM)
- Central memory T cells (TCM)
- Effector memory T cells (TEM)
- Tissue-resident memory T cells (TRM)

**Broadly Neutralizing Antibodies:**

*HIV bnAbs:*
- Target conserved epitopes
- Require extensive somatic hypermutation
- Long CDR H3 loops
- Challenge: Difficult to elicit with vaccines

*Universal Influenza Targets:*
- HA stem (more conserved than head)
- M2 ectodomain
- Neuraminidase conserved epitopes
- Chimeric HA approaches

*Coronavirus:*
- Receptor binding domain (RBD)
- S2 stem region (more conserved)
- Pan-coronavirus vaccine approaches

**Adjuvant Biology:**

*Mechanism Categories:*
- Depot effect (aluminum)
- Innate immune activation (TLR agonists)
- Direct antigen targeting (liposomes, nanoparticles)

*Modern Adjuvants:*
| Adjuvant | Mechanism | Used In |
|----------|-----------|---------|
| AS01B | TLR4 + saponin | Shingrix |
| AS04 | TLR4 (MPL) | Cervarix |
| MF59 | Oil-in-water | Influenza |
| CpG 1018 | TLR9 | Heplisav-B |
| Matrix-M | Saponin | Novavax COVID |

**mRNA Vaccine Biology:**

*Innate Sensing:*
- Recognized by TLR7/8 (endosomal)
- RIG-I and MDA5 (cytoplasmic)
- Modified nucleosides reduce reactogenicity

*Lipid Nanoparticle:*
- Protects mRNA from degradation
- Facilitates cellular uptake
- Ionizable lipids for endosomal escape
- Contributes to adjuvanticity

*Antigen Expression:*
- Cytoplasmic translation
- Enters MHC I pathway (CD8+ T cells)
- Secreted protein → APC uptake → MHC II (CD4+, B cells)

**Systems Vaccinology:**

*Predictive Signatures:*
- Day 1-7 transcriptomic signatures predict antibody response
- Identified for yellow fever, influenza vaccines
- May enable personalized vaccination

*Multi-Omics Integration:*
- Transcriptomics, proteomics, metabolomics, epigenomics
- Single-cell approaches
- Spatial profiling of lymph nodes

**Next-Generation Vaccines:**

*Universal Vaccines:*
- Influenza: HA stem, conserved proteins
- Coronavirus: Pan-sarbecovirus, pan-betacoronavirus
- Challenge: Immune focusing on variable regions

*Therapeutic Vaccines:*
- Cancer neoantigens (mRNA platform)
- Chronic infections (HIV, HBV functional cure)
- Autoimmune disease (tolerogenic vaccines)

*Novel Delivery:*
- Microneedle patches
- Oral delivery (thermostable)
- Self-amplifying RNA
- Nanoparticle display`,
      keyTerms: [
        { term: 'T follicular helper (Tfh)', definition: 'CD4+ T cell subset that provides help to B cells in germinal centers' },
        { term: 'broadly neutralizing antibody (bnAb)', definition: 'Antibody capable of neutralizing diverse strains of a pathogen' },
        { term: 'ionizable lipid', definition: 'Component of LNPs that facilitates endosomal escape of mRNA' },
        { term: 'systems vaccinology', definition: 'Application of systems biology approaches to predict and optimize vaccine responses' },
      ],
      clinicalNotes: `**Clinical Implications:**
- Adjuvant selection affects Tfh response and memory quality
- mRNA vaccines induce strong CD8+ T cell responses
- Broadly neutralizing antibody induction remains challenging
- Systems approaches may enable personalized vaccination
- Universal vaccine development is active research priority
- Therapeutic vaccines (cancer, chronic infection) on horizon`,
    },
  },

  media: [
    {
      id: 'immune-response-vaccine',
      type: 'diagram',
      filename: 'vaccine-immune-response.svg',
      title: 'Immune Response to Vaccination',
      description: 'Diagram showing how vaccines trigger immune response and memory formation',
    },
  ],

  citations: [
    {
      id: 'vaccine-immunology-review',
      type: 'article',
      title: 'Principles of Vaccine Immunology',
      source: 'Nature Reviews Immunology',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-adult-vaccine-schedule', targetType: 'concept', relationship: 'related', label: 'Adult Vaccine Schedule' },
    { targetId: 'concept-vaccine-safety', targetType: 'concept', relationship: 'related', label: 'Vaccine Safety' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['immunology', 'vaccination', 'preventive medicine'],
    keywords: ['vaccines', 'immunology', 'antibodies', 'immunity', 'immune memory'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
