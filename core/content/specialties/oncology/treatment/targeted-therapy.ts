/**
 * Targeted Therapy Educational Content
 *
 * Comprehensive coverage of molecularly targeted cancer therapy including:
 * - Tyrosine kinase inhibitors
 * - Monoclonal antibodies
 * - Small molecule inhibitors
 * - Biomarker-driven therapy
 */

import { EducationalContent } from '../../../types';

export const targetedTherapyContent: EducationalContent = {
  id: 'oncology-targeted-therapy',
  type: 'concept',
  name: 'Targeted Cancer Therapy',
  alternateNames: ['Molecularly targeted therapy', 'Precision oncology', 'Biomarker-driven therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Targeted therapy attacks specific features of cancer cells, like hitting a target, which makes it more precise than regular chemotherapy.',
      explanation: `Targeted therapy is a newer type of cancer treatment that works differently from chemotherapy.

**How It's Different:**
- Regular chemotherapy attacks all fast-growing cells
- Targeted therapy aims at specific things on cancer cells
- It's like using a guided missile instead of a bomb

**What Targeted Therapy Targets:**
- **Specific proteins** on cancer cells
- **Gene mutations** that make cancer grow
- **Blood vessels** that feed tumors

**Examples of Targeted Therapy:**

*Protein Blockers:*
- Some cancers make too much of a protein called HER2
- Trastuzumab (Herceptin) blocks HER2
- Used for certain breast cancers

*Gene Mutation Blockers:*
- Some lung cancers have a mutation in a gene called EGFR
- Special pills can block this mutation
- Cancer cells stop growing

*Blood Vessel Blockers:*
- Tumors need blood vessels to grow
- Some drugs block new blood vessel formation
- Starves the tumor

**Benefits:**
- Often fewer side effects than chemotherapy
- Can work when chemotherapy doesn't
- May be taken as pills at home

**Limitations:**
- Only works if your cancer has the "target"
- Needs testing to find the right match
- Cancer can develop resistance over time`,
      keyTerms: [
        { term: 'targeted therapy', definition: 'Cancer treatment that attacks specific features of cancer cells' },
        { term: 'protein', definition: 'A molecule in cells that has a specific job; some are targets for therapy' },
        { term: 'mutation', definition: 'A change in a gene that can make cells behave abnormally' },
        { term: 'HER2', definition: 'A protein that some breast cancers have too much of; can be targeted by drugs' },
      ],
      analogies: [
        'Targeted therapy is like a key that fits only one lock. It finds cancer cells with the right lock and opens it to destroy them.',
        'If chemotherapy is like a weed killer for the whole lawn, targeted therapy is like carefully pulling out just the weeds.',
      ],
      examples: [
        'A woman with breast cancer tests positive for HER2, so she receives trastuzumab along with chemotherapy.',
        'A man with lung cancer has an EGFR mutation, so he takes a targeted pill instead of traditional chemotherapy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Targeted therapies exploit specific molecular alterations in cancer cells, including receptor tyrosine kinases, signaling pathways, and angiogenesis.',
      explanation: `**Types of Targeted Therapies:**

*Monoclonal Antibodies:*
- Large proteins that bind specific targets
- Given by IV infusion
- Examples:
  - Trastuzumab: Targets HER2 (breast, gastric)
  - Cetuximab: Targets EGFR (colorectal, head/neck)
  - Bevacizumab: Targets VEGF (many cancers)
  - Rituximab: Targets CD20 (lymphoma)

*Small Molecule Inhibitors:*
- Small enough to enter cells
- Usually taken as pills
- Examples:
  - Imatinib: BCR-ABL inhibitor (CML)
  - Erlotinib, osimertinib: EGFR inhibitors (lung cancer)
  - Vemurafenib: BRAF inhibitor (melanoma)

**Key Pathways Targeted:**

*Growth Factor Signaling:*
- EGFR (epidermal growth factor receptor)
- HER2 (human epidermal growth factor receptor 2)
- MET
- These drive cell growth when overactive

*Intracellular Signaling:*
- RAS-RAF-MEK-ERK pathway
- PI3K-AKT-mTOR pathway
- When stuck "on," cells keep growing

*Angiogenesis (Blood Vessel Formation):*
- VEGF/VEGFR pathway
- Tumors need blood supply
- Blocking this "starves" tumors

**Testing for Targets:**

*What Gets Tested:*
- Tumor tissue (biopsy)
- Sometimes blood (liquid biopsy)
- Looking for specific mutations or protein levels

*Common Tests:*
- HER2 (breast cancer)
- EGFR, ALK, ROS1, KRAS (lung cancer)
- BRAF (melanoma, colorectal)
- BRCA (breast, ovarian)

**Advantages Over Chemotherapy:**
- More selective for cancer cells
- Often better tolerated
- Oral administration possible
- May work after chemotherapy fails

**Challenges:**
- Resistance develops over time
- Not all cancers have targetable mutations
- Expensive
- Different side effect profile (skin, GI)`,
      keyTerms: [
        { term: 'monoclonal antibody', definition: 'Laboratory-made protein that binds to specific targets on cells' },
        { term: 'tyrosine kinase inhibitor', definition: 'Drug that blocks enzymes called tyrosine kinases involved in cell growth (TKI)' },
        { term: 'angiogenesis', definition: 'Growth of new blood vessels; tumors use this to get nutrients' },
        { term: 'liquid biopsy', definition: 'Blood test to detect cancer DNA or cells' },
        { term: 'VEGF', definition: 'Vascular endothelial growth factor; protein that promotes blood vessel growth' },
      ],
      analogies: [
        'Tyrosine kinase inhibitors are like turning off the "ON switch" that tells cancer cells to keep dividing.',
        'Anti-angiogenic therapy is like cutting off the supply lines to an enemy camp.',
      ],
    },
    3: {
      level: 3,
      summary: 'Targeted therapy selection is based on molecular profiling, with specific agents matched to driver alterations across various signaling pathways.',
      explanation: `**Receptor Tyrosine Kinase Inhibitors:**

*EGFR Inhibitors:*
- Indications: NSCLC with EGFR mutations (exon 19 del, L858R)
- Generations:
  - 1st: Erlotinib, gefitinib
  - 2nd: Afatinib, dacomitinib
  - 3rd: Osimertinib (also covers T790M resistance)
- Toxicities: Rash, diarrhea, hepatotoxicity, ILD

*ALK Inhibitors:*
- Indications: NSCLC with ALK rearrangements (~5%)
- Agents: Crizotinib, alectinib, brigatinib, lorlatinib
- Lorlatinib: Covers most resistance mutations, CNS penetration
- Toxicities: Visual disturbances, edema, GI, CNS effects

*HER2-Targeted Therapy:*
- Antibodies: Trastuzumab, pertuzumab
- ADCs: T-DM1, T-DXd
- TKIs: Lapatinib, tucatinib, neratinib
- Used in breast cancer, gastric cancer, emerging in other HER2+ tumors

**RAS-RAF-MEK Pathway:**

*BRAF Inhibitors:*
- Indicated for BRAF V600E/K mutations
- Agents: Vemurafenib, dabrafenib, encorafenib
- Combined with MEK inhibitors (trametinib, cobimetinib, binimetinib)
- Melanoma, NSCLC, colorectal (with EGFR inhibitor), other BRAF+ tumors

*KRAS Inhibitors:*
- KRAS G12C: Sotorasib, adagrasib (NSCLC, colorectal)
- Other KRAS mutations: Clinical trials ongoing
- Major advance after decades of KRAS being "undruggable"

*MEK Inhibitors:*
- Combined with BRAF inhibitors
- Single agent in NF1-mutant tumors

**PI3K-AKT-mTOR Pathway:**

*PI3K Inhibitors:*
- Alpelisib: PIK3CA-mutant HR+ breast cancer
- Copanlisib, duvelisib, idelalisib: Lymphomas

*mTOR Inhibitors:*
- Everolimus: Breast cancer, renal cell, neuroendocrine tumors
- Temsirolimus: Renal cell carcinoma

**Other Important Targets:**

*CDK4/6 Inhibitors:*
- Palbociclib, ribociclib, abemaciclib
- HR+/HER2- breast cancer
- Combined with endocrine therapy

*PARP Inhibitors:*
- Olaparib, rucaparib, niraparib, talazoparib
- BRCA-mutated breast, ovarian, pancreatic, prostate
- HRD-positive cancers

*BCR-ABL Inhibitors:*
- Imatinib, dasatinib, nilotinib, bosutinib, ponatinib
- CML, Ph+ ALL
- Ponatinib covers T315I resistance mutation

**Toxicity Patterns:**

*Class Effects:*
- EGFR inhibitors: Rash, diarrhea, mucositis
- VEGF/VEGFR inhibitors: Hypertension, proteinuria, bleeding
- BRAF/MEK inhibitors: Fever, rash, photosensitivity, secondary skin cancers
- CDK4/6 inhibitors: Neutropenia, fatigue, GI`,
      keyTerms: [
        { term: 'driver mutation', definition: 'A mutation that directly contributes to cancer growth; target for therapy' },
        { term: 'PARP inhibitor', definition: 'Drug blocking DNA repair enzyme, causing cell death in BRCA-mutant cancers' },
        { term: 'HRD', definition: 'Homologous recombination deficiency; predicts PARP inhibitor sensitivity' },
        { term: 'T790M', definition: 'Resistance mutation in EGFR; overcome by osimertinib' },
        { term: 'CDK4/6', definition: 'Cyclin-dependent kinases controlling cell cycle; inhibited to treat breast cancer' },
      ],
      clinicalNotes: 'EGFR testing is mandatory before first-line therapy in advanced NSCLC. Osimertinib is preferred first-line for EGFR-mutant NSCLC due to superior survival and CNS activity.',
    },
    4: {
      level: 4,
      summary: 'Advanced targeted therapy integrates molecular profiling, understanding of resistance mechanisms, and combination strategies to optimize outcomes.',
      explanation: `**Molecular Profiling Strategies:**

*Next-Generation Sequencing (NGS):*
- Targeted panels (100-500 genes)
- Whole exome/genome sequencing
- RNA sequencing for fusions
- Identifies actionable alterations

*Liquid Biopsy:*
- ctDNA analysis
- FDA-approved: EGFR (lung), PIK3CA (breast), ESR1
- Advantages: Non-invasive, monitors evolution, captures heterogeneity

*Companion Diagnostics:*
- FDA-approved tests linked to specific therapies
- Examples: cobas EGFR, FoundationOne CDx, MSI testing

**Resistance Mechanisms:**

*On-Target Resistance:*
- Secondary mutations in target gene
  - EGFR T790M → osimertinib; C797S emerging
  - ALK: L1196M, G1202R → next-gen inhibitors
  - BCR-ABL T315I → ponatinib
- Amplification of target gene

*Bypass Mechanisms:*
- Activation of alternative pathways
  - MET amplification in EGFR-mutant lung cancer
  - HER2 amplification in EGFR TKI resistance
- Downstream pathway activation

*Phenotypic Changes:*
- Histologic transformation (NSCLC → SCLC)
- EMT (epithelial-mesenchymal transition)
- Lineage switching

*Strategies to Overcome Resistance:*
- Sequential therapy with next-generation agents
- Combination therapy upfront
- Rechallenge after treatment holiday
- Clinical trials for novel agents

**Combination Strategies:**

*Rationale:*
- Block escape mechanisms
- Enhance efficacy
- Delay resistance

*Examples:*
- BRAF + MEK inhibitors (prevent paradoxical MAPK activation)
- EGFR + MET inhibitors (overcome MET bypass)
- HER2 + HER2 (dual HER2 blockade: trastuzumab + pertuzumab)
- CDK4/6 + endocrine therapy (synergistic cell cycle block)

**Tumor-Agnostic Approvals:**

*Concept:*
- Approval based on biomarker, not cancer type
- Represents paradigm shift in oncology

*Approved:*
- MSI-H/dMMR: Pembrolizumab
- TMB-H: Pembrolizumab
- NTRK fusions: Larotrectinib, entrectinib
- BRAF V600E: Dabrafenib + trametinib
- RET fusions: Selpercatinib

**Special Considerations:**

*CNS Penetration:*
- Many TKIs have limited brain penetration
- Brain metastases common in EGFR, ALK, HER2
- Select agents: Osimertinib, lorlatinib, alectinib, tucatinib

*Dosing Considerations:*
- Hepatic/renal impairment
- Drug interactions (CYP3A4)
- Food effects
- Age-related pharmacokinetics`,
      keyTerms: [
        { term: 'companion diagnostic', definition: 'Test required to select patients for a specific targeted therapy' },
        { term: 'tumor-agnostic', definition: 'FDA approval based on biomarker regardless of cancer type' },
        { term: 'bypass resistance', definition: 'Cancer escapes targeted therapy by activating alternative signaling pathways' },
        { term: 'rechallenge', definition: 'Restarting a previously used therapy after a treatment break' },
      ],
      clinicalNotes: 'For EGFR-mutant NSCLC on osimertinib developing resistance, repeat biopsy (tissue and/or liquid) to identify mechanism. MET amplification or small cell transformation may guide next therapy.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art targeted therapy leverages precision oncology platforms, novel targets, adaptive trial designs, and emerging technologies to continuously expand therapeutic options.',
      explanation: `**Emerging Targets and Agents:**

*Previously "Undruggable" Targets:*
- KRAS G12C: Sotorasib, adagrasib (approved)
- KRAS G12D: MRTX1133 (clinical trials)
- Pan-KRAS inhibitors: In development
- KRAS degraders (PROTACs)
- SOS1/SHP2 inhibitors (upstream of RAS)

*Emerging Fusions:*
- FGFR fusions: Cholangiocarcinoma, bladder (erdafitinib, pemigatinib)
- NRG1 fusions: Various tumors (afatinib, zenocutuzumab trials)
- NTRK: Pan-cancer (larotrectinib, entrectinib)

*Antibody-Drug Conjugates (ADCs):*
- Trastuzumab deruxtecan (T-DXd): HER2-low breast, HER2+ various
- Sacituzumab govitecan: TROP2+ (TNBC, bladder)
- Enfortumab vedotin: Nectin-4 (bladder)
- Expanding to multiple targets and indications

*Bispecific Antibodies:*
- T-cell engagers
- HER2xHER3, EGFRxMET, others in development

**Precision Oncology Platforms:**

*Molecular Tumor Boards:*
- Multidisciplinary interpretation of genomic results
- Trial matching
- Off-label use discussion
- Variant curation

*Basket/Umbrella Trials:*
- Basket: Same alteration across tumor types (BRAF V600E, NTRK)
- Umbrella: Multiple alterations within one tumor type
- Platform trials: Adaptive designs, multiple arms

*Matching Algorithms:*
- OncoKB, CIViC for variant annotation
- Computational tools for trial matching
- AI-assisted interpretation

**Clinical Decision Making:**

*When to Test:*
- Advanced/metastatic disease: Comprehensive profiling
- Earlier stages: Based on tumor type and potential impact
- Testing timing: Before starting systemic therapy

*Interpreting Results:*
- Tier 1: Strong clinical significance (approved therapy or guideline-recommended)
- Tier 2: Potential clinical significance (clinical trial, emerging evidence)
- Tier 3: Unknown significance
- Germline implications

*Off-Label Use:*
- Tissue-agnostic approvals provide framework
- Case reports/series in literature
- Insurance/access considerations
- Clinical trial preferred when available

**Resistance Profiling:**

*Repeat Testing at Progression:*
- Tissue biopsy when feasible
- Liquid biopsy: Non-invasive, captures heterogeneity
- Serial monitoring for emerging resistance

*Novel Resistance Approaches:*
- Fourth-generation TKIs
- Allosteric inhibitors
- Degraders (PROTACs)
- Combination strategies

**Integration with Other Modalities:**

*Targeted + Immunotherapy:*
- Rational combinations
- Example: Atezolizumab + bevacizumab + chemo (HCC)
- Sequencing considerations

*Targeted + Radiation:*
- Radiosensitization
- Consolidation after targeted therapy
- SBRT for oligoprogression

*Targeted in Perioperative Setting:*
- Neoadjuvant targeted therapy (EGFR lung cancer trials)
- Adjuvant: Osimertinib (ADAURA), olaparib (OlympiA)

**Future Directions:**

*Technology:*
- Single-cell sequencing
- Spatial transcriptomics
- Circulating tumor DNA monitoring
- AI for drug design and prediction

*Novel Modalities:*
- mRNA therapeutics
- Gene editing (CRISPR)
- Cellular therapies targeting solid tumors
- Personalized neoantigen approaches

*Access and Equity:*
- Global access to molecular testing
- Drug pricing and value
- Clinical trial diversity`,
      keyTerms: [
        { term: 'PROTAC', definition: 'Proteolysis targeting chimera; induces degradation of target protein rather than inhibition' },
        { term: 'basket trial', definition: 'Clinical trial testing one drug across multiple cancer types sharing a biomarker' },
        { term: 'umbrella trial', definition: 'Clinical trial with multiple treatment arms based on biomarkers within one cancer type' },
        { term: 'bispecific antibody', definition: 'Engineered antibody binding two different targets simultaneously' },
        { term: 'oligoprogression', definition: 'Limited sites of disease progression while other sites remain controlled' },
      ],
      clinicalNotes: `**Key Practice Points:**
- Comprehensive genomic profiling standard for advanced solid tumors
- Know tumor-agnostic approvals: MSI-H, TMB-H, NTRK, BRAF, RET
- Osimertinib preferred first-line EGFR+ NSCLC
- KRAS G12C now druggable (sotorasib, adagrasib)
- ADCs expanding indications (T-DXd for HER2-low breast)

**Board Pearls:**
- Know major targetable alterations by tumor type
- Understand resistance mechanisms (T790M, small cell transformation)
- BRAF inhibitors cause paradoxical MAPK activation - combine with MEK
- PARP inhibitors: BRCA + HRD, mechanism of synthetic lethality
- Liquid biopsy FDA-approved for specific alterations`,
    },
  },

  media: [
    {
      id: 'targeted-therapy-pathways',
      type: 'diagram',
      filename: 'targeted-therapy-pathways.svg',
      title: 'Major Signaling Pathways and Targeted Therapies',
      description: 'Overview of key pathways targeted by cancer drugs',
    },
  ],
  citations: [
    {
      id: 'nccn-biomarkers',
      type: 'website',
      title: 'NCCN Biomarker Compendium',
      source: 'National Comprehensive Cancer Network',
    },
    {
      id: 'oncokb',
      type: 'website',
      title: 'OncoKB: A Precision Oncology Knowledge Base',
      source: 'Memorial Sloan Kettering Cancer Center',
      url: 'https://www.oncokb.org',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-chemotherapy', targetType: 'topic', relationship: 'related', label: 'Chemotherapy' },
    { targetId: 'oncology-mutations', targetType: 'concept', relationship: 'related', label: 'Cancer Mutations' },
    { targetId: 'oncology-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['targeted-therapy', 'precision-oncology', 'biomarkers'],
    keywords: ['TKI', 'EGFR', 'HER2', 'BRAF', 'ALK', 'PARP', 'monoclonal antibodies'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pharmacology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
