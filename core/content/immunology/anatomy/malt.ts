import { EducationalContent } from '../../types';

export const maltContent: EducationalContent = {
  id: 'structure-malt',
  type: 'structure',
  name: 'Mucosa-Associated Lymphoid Tissue (MALT)',
  alternateNames: ['MALT', 'Mucosal immune system', 'Common mucosal immune system'],
  fmaId: 'FMA:55225',

  levels: {
    1: {
      level: 1,
      summary: 'MALT is immune tissue found in body parts that are open to the outside, like your throat, gut, and lungs, where it protects you from germs.',
      explanation: `Your body has special immune tissue at places where germs could sneak in - like your mouth, nose, throat, stomach, and intestines. This tissue is called MALT (Mucosa-Associated Lymphoid Tissue).

**Where Is MALT Found?**

1. **Tonsils and Adenoids** (in your throat)
   - These are the lumps you can sometimes see at the back of your throat
   - They catch germs that you breathe in or swallow
   - That's why they can get swollen and sore when you're sick!

2. **Peyer's Patches** (in your intestines)
   - Little immune bunches in your gut
   - They watch for bad germs in your food
   - You can't see them, but they're working hard!

3. **Other Places**
   - In your airways (lungs)
   - In your nose
   - Even in your eyes!

**What Does MALT Do?**
- Acts like guards at entry points to your body
- Makes special antibodies called IgA that protect wet surfaces
- Helps your body learn about germs without getting sick
- Creates a "barrier" against invaders

Think of MALT as a security system at all the doors and windows of your body!`,
      keyTerms: [
        { term: 'MALT', definition: 'Immune tissue that protects areas open to the outside of your body' },
        { term: 'tonsils', definition: 'Immune tissue in your throat that catches germs' },
        { term: 'Peyer\'s patches', definition: 'Immune tissue in your intestines', pronunciation: 'PIE-erz' },
        { term: 'mucosa', definition: 'The wet, soft lining inside your mouth, nose, and gut', pronunciation: 'myoo-KOH-suh' },
      ],
      analogies: [
        'MALT is like security guards stationed at all the entry points of a building.',
        'Tonsils are like goalkeepers catching germs before they score!',
      ],
      examples: [
        'When you eat something with germs, the Peyer\'s patches in your intestines work to protect you.',
        'Your tonsils might get swollen when fighting a throat infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'MALT comprises organized lymphoid tissue at mucosal surfaces throughout the body, including tonsils (NALT), Peyer\'s patches (GALT), and bronchial-associated tissue (BALT), specialized for mucosal immunity and IgA production.',
      explanation: `Mucosa-associated lymphoid tissue (MALT) represents the immune system's presence at mucosal surfaces, which constitute the body's largest interface with the external environment (~400 m² surface area). MALT is critical for defense against pathogens while maintaining tolerance to food antigens and commensal microbiota.

**Components of MALT:**

1. **NALT (Nasopharynx-Associated Lymphoid Tissue)**
   - **Palatine tonsils**: Paired masses at oropharynx
   - **Pharyngeal tonsil** (adenoids): Single mass at nasopharynx
   - **Lingual tonsils**: At base of tongue
   - **Tubal tonsils**: Near Eustachian tube openings
   - Collectively form **Waldeyer's ring**

2. **GALT (Gut-Associated Lymphoid Tissue)**
   - **Peyer's patches**: Organized lymphoid follicles in ileum (largest concentration)
   - **Isolated lymphoid follicles**: Throughout intestinal tract
   - **Appendix**: Contains lymphoid tissue
   - **Mesenteric lymph nodes**: Drain intestinal lymph

3. **BALT (Bronchus-Associated Lymphoid Tissue)**
   - Less organized in healthy humans
   - Develops with chronic inflammation/infection
   - Found at bronchial bifurcations

4. **Other Sites**
   - **CALT**: Conjunctiva-associated (eye)
   - **SALT**: Skin-associated lymphoid tissue
   - **VALT**: Vascular-associated (debated)

**Special Features of Mucosal Immunity:**

1. **IgA Production**
   - Dominant immunoglobulin at mucosal surfaces
   - Secretory IgA (sIgA): Dimeric, with secretory component
   - Provides non-inflammatory protection
   - Prevents pathogen attachment

2. **M Cells**
   - Specialized epithelial cells overlying MALT
   - Transport antigens from lumen to immune cells
   - Found in follicle-associated epithelium

3. **Intraepithelial Lymphocytes**
   - T cells residing within epithelium
   - Rapid response to damaged/infected epithelial cells
   - Often γδ T cells

**Functions:**
- First-line defense at mucosal surfaces
- Generate IgA-secreting plasma cells
- Maintain tolerance to food antigens
- Establish memory for mucosal pathogens
- Regulate interactions with microbiota`,
      keyTerms: [
        { term: 'Waldeyer\'s ring', definition: 'Ring of lymphoid tissue in the pharynx including palatine, pharyngeal, lingual, and tubal tonsils', pronunciation: 'VAHL-die-erz' },
        { term: 'Peyer\'s patches', definition: 'Organized lymphoid aggregates in the small intestine, especially ileum', pronunciation: 'PIE-erz' },
        { term: 'secretory IgA', definition: 'Dimeric IgA with secretory component that protects mucosal surfaces' },
        { term: 'M cell', definition: 'Microfold cell; specialized epithelial cell that transports antigens to underlying lymphoid tissue' },
        { term: 'GALT', definition: 'Gut-associated lymphoid tissue; intestinal component of MALT' },
        { term: 'NALT', definition: 'Nasopharynx-associated lymphoid tissue; upper respiratory/pharyngeal component of MALT' },
      ],
      analogies: [
        'M cells are like delivery workers, bringing samples from outside to the immune cells inside.',
        'Secretory IgA acts like a protective coating that keeps germs from sticking to mucosal surfaces.',
      ],
    },
    3: {
      level: 3,
      summary: 'MALT comprises inductive sites (Peyer\'s patches, tonsils) where antigens are sampled and immune responses initiated, and effector sites (lamina propria) where IgA-secreting plasma cells and T cells mediate protection through non-inflammatory mechanisms.',
      explanation: `The mucosal immune system faces unique challenges: defending against pathogens while tolerating food antigens and beneficial commensal bacteria. MALT has evolved specialized structures and mechanisms to achieve this balance.

**Organizational Principles:**

1. **Inductive Sites**
   - Organized lymphoid structures
   - Antigen uptake and presentation
   - Lymphocyte activation
   - Examples: Peyer's patches, tonsils, isolated lymphoid follicles

2. **Effector Sites**
   - Diffuse lymphoid tissue in lamina propria
   - Intraepithelial lymphocytes
   - Plasma cells producing sIgA
   - Effector T cells

**Peyer's Patch Architecture:**

1. **Follicle-Associated Epithelium (FAE)**
   - Overlies lymphoid follicles
   - Contains M (microfold) cells
   - Reduced mucus layer
   - No secretory IgA coating

2. **M Cells**
   - Lack surface microvilli (microfolds instead)
   - Have basolateral pocket containing lymphocytes/DCs
   - Transcytose antigens (particles, bacteria, viruses)
   - Sampling mechanism for mucosal antigens

3. **Subepithelial Dome**
   - Region beneath FAE
   - Rich in dendritic cells
   - Site of initial antigen encounter
   - DCs acquire M cell-delivered antigens

4. **Follicles and Interfollicular Regions**
   - B cell follicles with germinal centers
   - T cell zones between follicles
   - High endothelial venules for lymphocyte entry
   - Organization similar to lymph nodes

**Tonsil Structure:**

1. **Crypts**
   - Deep invaginations of surface epithelium
   - Increase surface area for antigen contact
   - Specialized "reticulated" epithelium (allows antigen entry)
   - Harbor bacteria in healthy state

2. **Lymphoid Tissue**
   - Subepithelial B cell follicles
   - Germinal center formation
   - Interfollicular T cell zones
   - Mantle zone B cells

**IgA Biology:**

1. **IgA Class Switching**
   - Occurs in MALT germinal centers
   - TGF-β drives α chain expression
   - APRIL, BAFF promote IgA switch
   - Can be T-independent or T-dependent

2. **Polymeric IgA and Transport**
   - J chain links IgA monomers (dimeric IgA)
   - Polymeric Ig receptor (pIgR) on epithelial basolateral surface
   - Transcytosis to apical surface
   - Cleaved to release sIgA with secretory component

3. **sIgA Functions**
   - Immune exclusion (prevents attachment)
   - Neutralization of toxins and viruses
   - Intracellular neutralization (during transcytosis)
   - Anti-inflammatory (no complement activation)

**Mucosal Homing:**

1. **Imprinting During Activation**
   - DCs in Peyer's patches produce retinoic acid
   - Induces α4β7 integrin on activated lymphocytes
   - Induces CCR9 for small intestine homing

2. **Tissue-Specific Addressins**
   - MAdCAM-1 on intestinal venule endothelium
   - α4β7 on lymphocytes binds MAdCAM-1
   - CCL25 (expressed by small intestinal epithelium) attracts CCR9+ cells

3. **Common Mucosal Immune System**
   - Cells activated at one mucosal site can home to others
   - Oral vaccination can induce protection at distant sites
   - Interconnected via shared homing receptor expression`,
      keyTerms: [
        { term: 'inductive site', definition: 'Organized mucosal lymphoid tissue where immune responses are initiated (e.g., Peyer\'s patches, tonsils)' },
        { term: 'effector site', definition: 'Mucosal tissue where activated immune cells carry out protective functions (e.g., lamina propria)' },
        { term: 'follicle-associated epithelium', definition: 'Specialized epithelium overlying mucosal lymphoid follicles, containing M cells' },
        { term: 'pIgR', definition: 'Polymeric immunoglobulin receptor; transports dimeric IgA across epithelium to mucosal surface' },
        { term: 'α4β7 integrin', definition: 'Gut-homing receptor on lymphocytes that binds MAdCAM-1 on intestinal endothelium' },
        { term: 'MAdCAM-1', definition: 'Mucosal addressin cell adhesion molecule-1; ligand for α4β7, directs lymphocyte homing to gut' },
      ],
      clinicalNotes: 'Celiac disease involves aberrant immune responses to gluten in the gut, with villous atrophy and intraepithelial lymphocytosis. MALT lymphomas can arise from chronic antigenic stimulation (e.g., H. pylori gastric MALT lymphoma, often cured with antibiotic therapy).',
    },
    4: {
      level: 4,
      summary: 'MALT integrates innate and adaptive mucosal immunity through specialized antigen-sampling mechanisms, tolerogenic and immunogenic pathways, tissue-specific lymphocyte imprinting, and IgA responses, maintaining homeostasis with commensal microbiota while defending against pathogens.',
      explanation: `The mucosal immune system has evolved sophisticated mechanisms to discriminate between harmful pathogens and benign antigens (food, commensals), coordinating protective immunity and tolerance through complex cellular and molecular networks.

**Antigen Sampling Mechanisms:**

1. **M Cell-Mediated Transport**
   - GP2 (glycoprotein 2) binds bacterial FimH
   - Transcytosis of particles <1 μm efficiently
   - Deliver antigens to subepithelial DCs
   - Exploited by pathogens (Salmonella, Shigella)

2. **Dendritic Cell Extensions**
   - CX3CR1+ macrophages/DCs extend transepithelial dendrites
   - Sample luminal bacteria directly
   - Do not disrupt tight junctions
   - Pass antigens to CD103+ migratory DCs

3. **Goblet Cell-Associated Passages (GAPs)**
   - Goblet cells deliver soluble antigens to DCs
   - Small intestine phenomenon
   - May promote tolerance to food antigens

4. **Direct Epithelial Uptake**
   - Neonatal Fc receptor (FcRn) transports IgG-antigen complexes
   - Can deliver to DCs
   - Some antigens cross via paracellular route

**Dendritic Cell Subsets and Functions:**

1. **CD103+ DCs**
   - Derived from pre-cDC, Batf3/IRF8-dependent
   - Migrate to mesenteric lymph nodes
   - Produce retinoic acid (RA)
   - Induce gut-homing receptors (α4β7, CCR9)
   - Promote Treg induction (tolerogenic environment)

2. **CD103+CD11b+ DCs**
   - Major small intestinal subset
   - IRF4-dependent
   - Promote Th17 responses
   - Balance between tolerance and immunity

3. **CX3CR1+ Mononuclear Phagocytes**
   - Non-migratory
   - Luminal sampling
   - Transfer antigens to migratory DCs
   - Promote local T cell responses

**Mucosal T Cell Populations:**

1. **Intraepithelial Lymphocytes (IELs)**

   *Natural IELs:*
   - Develop in thymus, migrate directly to epithelium
   - Often TCRγδ+
   - Express CD8αα homodimer
   - Surveillance and epithelial maintenance
   - Recognize stress ligands (MICA, MICB)

   *Induced IELs:*
   - Conventional T cells (CD4 or CD8αβ)
   - Activated in GALT, migrate to epithelium
   - Antigen-specific memory
   - Respond to infection

2. **Lamina Propria T Cells**
   - CD4+ T cells predominate
   - Th1, Th17, Th2, Tregs
   - Effector memory phenotype
   - Rapid cytokine production

3. **Tissue-Resident Memory T Cells (TRM)**
   - CD103+CD69+ phenotype
   - Permanent residence in mucosa
   - Rapid response to re-infection
   - Important for mucosal vaccines

**Oral Tolerance:**

1. **Mechanisms**
   - Deletion of reactive T cells
   - Anergy induction
   - Regulatory T cell generation

2. **Key Players**
   - CD103+ DCs in mesenteric LN
   - Retinoic acid promotes Foxp3+ Treg conversion
   - TGF-β from multiple sources
   - IL-10 from Tr1 cells

3. **Failure of Tolerance**
   - Food allergy: IgE-mediated responses to food
   - Celiac disease: T cell response to gluten
   - Inflammatory bowel disease: Loss of tolerance to commensals

**Microbiota Interactions:**

1. **Homeostatic Mechanisms**
   - Secretory IgA coats bacteria (non-inflammatory)
   - Mucus layer segregates bacteria from epithelium
   - Antimicrobial peptides (defensins, RegIIIγ)
   - Epithelial barrier integrity

2. **Microbiota-Driven Immune Development**
   - Colonization induces IgA production
   - Specific bacteria induce specific T cell responses
   - Segmented filamentous bacteria (SFB) → Th17
   - Clostridia → Tregs
   - Short-chain fatty acids promote Tregs

3. **Dysbiosis and Disease**
   - Altered microbiota composition
   - Associated with IBD, allergy, autoimmunity
   - Disrupted barrier function
   - Aberrant immune responses`,
      keyTerms: [
        { term: 'GP2', definition: 'Glycoprotein 2; M cell receptor that binds bacterial FimH, mediating uptake of bacteria' },
        { term: 'CX3CR1+ phagocytes', definition: 'Mononuclear phagocytes in lamina propria that sample luminal contents via transepithelial dendrites' },
        { term: 'oral tolerance', definition: 'Active immunological unresponsiveness to orally administered antigens, mediated by Tregs' },
        { term: 'GAP', definition: 'Goblet cell-associated passage; route for soluble antigen delivery to underlying DCs' },
        { term: 'TRM cells', definition: 'Tissue-resident memory T cells; non-circulating memory cells providing rapid local immunity' },
        { term: 'SFB', definition: 'Segmented filamentous bacteria; commensal bacteria that induce Th17 cells in the intestine' },
      ],
      clinicalNotes: 'Vedolizumab (anti-α4β7) treats IBD by blocking gut lymphocyte homing. Microbiome-based therapies (fecal transplant) effectively treat recurrent C. difficile. Oral tolerance induction is being explored for food allergy treatment (oral immunotherapy).',
    },
    5: {
      level: 5,
      summary: 'MALT constitutes a sophisticated immunological network balancing protective immunity with tolerance, integrating microbial signals, dietary antigens, and tissue-specific cues through specialized cellular compartments and molecular pathways, with major clinical implications for mucosal infections, inflammatory diseases, allergies, and vaccine development.',
      explanation: `Understanding mucosal immunity is essential for managing inflammatory bowel disease, designing mucosal vaccines, treating food allergies, and developing microbiome-based therapeutics.

**Advanced MALT Biology:**

1. **Regional Specialization of MALT**

   *Oral Cavity:*
   - Salivary IgA (parotid, submandibular)
   - Lingual tonsils, minor salivary gland MALT
   - Rapid clearance, limited colonization

   *Nasopharynx:*
   - Adenoids sample inhaled antigens
   - Important in children (involution with age)
   - NALT induces respiratory IgA

   *Small Intestine:*
   - Most organized GALT (Peyer's patches)
   - Primary site of IgA induction
   - Retinoic acid-rich environment
   - Major tolerogenic site

   *Large Intestine:*
   - Isolated lymphoid follicles
   - Highest bacterial load
   - Colonic Tregs shaped by microbiota
   - Less organized than small intestine

   *Lower Respiratory Tract:*
   - Inducible BALT in disease
   - Important in chronic infections
   - Contributes to COPD pathology

2. **IgA Immunity in Depth**

   *IgA Subclasses:*
   - IgA1: Predominant in upper respiratory, serum
   - IgA2: Predominant in colon
   - IgA2 resistant to bacterial IgA proteases

   *Polyreactive Natural IgA:*
   - Germline-like, T-independent
   - Binds multiple commensals
   - Maintains microbiota homeostasis
   - Produced by peritoneal B1 cells, marginal zone-like B cells

   *High-Affinity IgA:*
   - T-dependent, germinal center-derived
   - Targets specific pathogens
   - Undergoes somatic hypermutation
   - Memory IgA B cells

   *Secretory Component Functions:*
   - Stabilizes sIgA in proteolytic environment
   - Anchors sIgA in mucus
   - Intrinsic antimicrobial properties
   - Immune exclusion at epithelial surface

3. **Mucosal Innate Lymphoid Cells**

   *ILC3:*
   - RORγt+ cells
   - Produce IL-17, IL-22
   - Maintain barrier function
   - Interact with microbiota
   - Regulate cryptopatch development

   *ILC2:*
   - Type 2 cytokines (IL-5, IL-13)
   - Helminth defense
   - Tissue repair
   - Can drive allergic inflammation

   *ILC1:*
   - IFN-γ production
   - Barrier defense
   - Inflammation in IBD

**Clinical Applications:**

1. **Mucosal Vaccines**

   *Advantages:*
   - Induce mucosal IgA + systemic immunity
   - Block infection at entry site
   - Needle-free administration
   - Potentially lower cost

   *Challenges:*
   - Antigen degradation in gut
   - Inducing immunity vs tolerance
   - Adjuvant safety at mucosal surfaces

   *Current Mucosal Vaccines:*
   - Oral polio vaccine (Sabin)
   - Oral rotavirus vaccines
   - Oral typhoid (Ty21a)
   - Intranasal influenza (FluMist)
   - Oral cholera vaccines

   *Strategies:*
   - Live attenuated organisms
   - Particulate antigens (VLPs, liposomes)
   - Mucosal adjuvants (cholera toxin B, CpG)
   - M cell targeting

2. **Inflammatory Bowel Disease**

   *Crohn's Disease:*
   - Transmural inflammation
   - Any GI location, skip lesions
   - Granulomas, fistulae
   - Th1/Th17-driven
   - NOD2 mutations alter bacterial sensing

   *Ulcerative Colitis:*
   - Mucosal inflammation only
   - Continuous, colon only
   - Aberrant Th2/Th17 responses
   - Defective barrier function

   *Immunological Features:*
   - Loss of tolerance to commensals
   - Defective Treg function
   - Excessive effector T cell responses
   - Disrupted epithelial barrier
   - Dysbiosis (reduced diversity)

   *Therapeutics:*
   - Anti-TNF (infliximab, adalimumab)
   - Anti-integrins (vedolizumab)
   - Anti-IL-12/23 (ustekinumab)
   - JAK inhibitors (tofacitinib)
   - S1P modulators (ozanimod)
   - Fecal microbiota transplant (emerging)

3. **Celiac Disease**

   *Pathogenesis:*
   - HLA-DQ2/DQ8 genetic susceptibility
   - Tissue transglutaminase modifies gluten peptides
   - CD4+ T cells recognize modified peptides
   - IFN-γ production, cytotoxic IELs
   - Villous atrophy, crypt hyperplasia

   *Diagnosis:*
   - Anti-tTG IgA antibodies
   - Anti-endomysial antibodies
   - Duodenal biopsy (gold standard)
   - HLA-DQ2/DQ8 testing

   *Treatment:*
   - Strict gluten-free diet
   - Emerging: Enzyme therapy, zonulin inhibitors, tolerance induction

4. **MALT Lymphoma**

   *Gastric MALT Lymphoma:*
   - Associated with H. pylori (90%)
   - Indolent marginal zone lymphoma
   - Antibiotic therapy curative in early stages
   - t(11;18) associated with treatment resistance

   *Non-Gastric MALT Lymphomas:*
   - Ocular adnexa: Chlamydia psittaci
   - Skin: Borrelia burgdorferi
   - Salivary gland: Sjögren's syndrome
   - Thyroid: Hashimoto's thyroiditis

   *Molecular Features:*
   - API2-MALT1 fusion t(11;18)
   - BCL10 translocations
   - NF-κB pathway activation

5. **Tonsil Pathology**

   *Tonsillitis:*
   - Viral (most common)
   - Bacterial: Group A Streptococcus
   - Complications: Peritonsillar abscess
   - Tonsillectomy indications: Recurrent infection, obstruction

   *Tonsil as HIV Reservoir:*
   - Follicular DCs harbor virus
   - Germinal center B cells infected
   - Reservoir for viral rebound`,
      keyTerms: [
        { term: 'MALT lymphoma', definition: 'Extranodal marginal zone lymphoma arising in mucosal tissues, often associated with chronic infection' },
        { term: 'anti-tTG', definition: 'Anti-tissue transglutaminase antibody; serological marker for celiac disease' },
        { term: 'vedolizumab', definition: 'Monoclonal antibody blocking α4β7 integrin; prevents gut lymphocyte homing in IBD' },
        { term: 'polyreactive IgA', definition: 'Naturally occurring IgA with broad specificity for multiple antigens including commensal bacteria' },
        { term: 'inducible BALT', definition: 'Bronchus-associated lymphoid tissue that forms in chronic lung inflammation/infection' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- H. pylori gastric MALT lymphoma: t(11;18) = poor response to antibiotics, need chemo/RT
- IgA deficiency: Most common primary immunodeficiency, often asymptomatic
- Celiac disease serology: Anti-tTG IgA (check total IgA level first; IgA deficiency false negative)
- Peyer's patch invasion by Salmonella typhi → systemic infection (typhoid)
- Oral polio vaccine (OPV): Live attenuated, induces mucosal immunity, risk of VAPP
- Food allergy: Loss of oral tolerance, IgE-mediated; oral immunotherapy can restore tolerance
- Secretory IgA deficiency in breast milk → increased infant infections`,
    },
  },

  media: [
    {
      id: 'malt-overview',
      type: 'diagram',
      filename: 'malt-overview.svg',
      title: 'MALT Distribution in the Body',
      description: 'Locations of various MALT components throughout the body',
    },
    {
      id: 'peyers-patch',
      type: 'diagram',
      filename: 'peyers-patch.svg',
      title: 'Peyer\'s Patch Structure',
      description: 'Architecture showing M cells, FAE, follicles, and antigen sampling',
    },
    {
      id: 'iga-transport',
      type: 'diagram',
      filename: 'iga-transport.svg',
      title: 'Secretory IgA Transport',
      description: 'pIgR-mediated transcytosis of dimeric IgA',
    },
  ],
  citations: [
    {
      id: 'mowat-2003',
      type: 'article',
      title: 'Anatomical basis of tolerance and immunity to intestinal antigens',
      authors: ['Mowat AM'],
      source: 'Nature Reviews Immunology',
      url: 'https://doi.org/10.1038/nri1057',
    },
    {
      id: 'openstax-ap-ch21',
      type: 'textbook',
      title: 'The Lymphatic and Immune System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '21',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
    { targetId: 'structure-lymph-nodes', targetType: 'structure', relationship: 'related', label: 'Lymph Nodes' },
    { targetId: 'concept-mucosal-immunity', targetType: 'concept', relationship: 'related', label: 'Mucosal Immunity' },
    { targetId: 'condition-ibd', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
  ],
  tags: {
    systems: ['immune', 'digestive', 'respiratory'],
    topics: ['anatomy', 'physiology', 'immunology', 'mucosal immunity'],
    keywords: ['MALT', 'Peyer\'s patches', 'tonsils', 'IgA', 'mucosal immunity', 'M cells', 'GALT'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default maltContent;
