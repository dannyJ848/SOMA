/**
 * Hereditary Cancer Syndromes - Comprehensive Educational Content
 *
 * Covers the major hereditary cancer syndromes including polyposis syndromes,
 * Li-Fraumeni, and other inherited cancer predisposition conditions.
 */

import { EducationalContent } from "../../types";

export const hereditaryCancerSyndromesContent: EducationalContent = {
  id: "concept-hereditary-cancer-syndromes",
  type: "concept",
  name: "Hereditary Cancer Syndromes",
  alternateNames: [
    "Inherited Cancer Predisposition Syndromes",
    "Familial Cancer Syndromes",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Hereditary cancer syndromes are conditions where gene changes passed through families greatly increase the risk of developing certain cancers.",
      explanation: `Most cancers happen by chance or from lifestyle factors. But about 5-10% of cancers are caused by gene changes that run in families. These are called hereditary cancer syndromes.

**How do hereditary cancer syndromes work?**

Everyone is born with two copies of most genes - one from each parent. In hereditary cancer syndromes, a person is born with one gene copy that does not work. This means they start life with less protection against cancer.

**What are the signs of a hereditary cancer syndrome?**

- Cancer at a younger age than usual
- The same type of cancer in multiple family members
- More than one type of cancer in the same person
- Rare cancers (like male breast cancer)
- Cancers in both paired organs (like both breasts or both kidneys)

**Examples of hereditary cancer syndromes:**

- **BRCA-related syndrome**: Increases breast and ovarian cancer risk
- **Lynch syndrome**: Increases colon and uterine cancer risk
- **Li-Fraumeni syndrome**: Increases risk for many cancer types
- **Familial adenomatous polyposis**: Causes hundreds of colon polyps

**Why does knowing about these syndromes matter?**

When doctors identify a hereditary cancer syndrome:
- The person can get more frequent cancer screenings
- Preventive measures might be available
- Family members can be tested to see if they carry the same gene change
- This helps catch cancers early when they are easier to treat`,
      keyTerms: [
        {
          term: "hereditary",
          definition:
            "Passed down from parents to children through genes",
        },
        {
          term: "syndrome",
          definition:
            "A group of signs and symptoms that occur together and are caused by the same underlying condition",
        },
        {
          term: "gene mutation",
          definition:
            "A change in a gene that can affect how the body works",
        },
        {
          term: "predisposition",
          definition:
            "Having a higher chance of developing something, like a disease",
        },
      ],
      analogies: [
        "A hereditary cancer syndrome is like starting a race with one shoelace already untied - you are more likely to trip.",
        "Having a gene change is like having one broken lock on a two-lock door - you still have some protection, but not as much.",
        "Family cancer patterns are like following footprints - they can show where problems might appear.",
      ],
      examples: [
        "A family where grandmother, mother, and daughter all had breast cancer before age 50 likely has a hereditary cancer syndrome.",
        "A person with colon cancer at age 30 and uterine cancer at age 35 might have Lynch syndrome.",
        "A child who develops a brain tumor and their sibling who develops bone cancer might both have Li-Fraumeni syndrome.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Hereditary cancer syndromes result from germline mutations in tumor suppressor genes or DNA repair genes, causing significantly elevated cancer risks and requiring specialized surveillance and management strategies.",
      explanation: `Hereditary cancer syndromes account for 5-10% of all cancers. Understanding these syndromes enables targeted prevention and early detection.

**Major Hereditary Cancer Syndromes:**

| Syndrome | Gene(s) | Main Cancers | Inheritance |
|----------|---------|--------------|-------------|
| HBOC | BRCA1, BRCA2 | Breast, ovarian | AD |
| Lynch syndrome | MLH1, MSH2, MSH6, PMS2 | Colorectal, endometrial | AD |
| Li-Fraumeni | TP53 | Sarcoma, breast, brain, adrenal | AD |
| FAP | APC | Colorectal, duodenal | AD |
| Cowden syndrome | PTEN | Breast, thyroid, endometrial | AD |
| Peutz-Jeghers | STK11 | GI, breast, ovarian | AD |
| MEN1 | MEN1 | Parathyroid, pituitary, pancreatic | AD |
| MEN2 | RET | Medullary thyroid, pheochromocytoma | AD |
| VHL | VHL | Renal cell, hemangioblastoma, pheochromocytoma | AD |

**Red Flags Suggesting Hereditary Cancer:**

*Personal History:*
- Cancer at unusually young age (<50 for most cancers)
- Multiple primary cancers
- Bilateral cancers in paired organs
- Rare tumor types (e.g., male breast cancer, adrenocortical carcinoma)
- Specific tumor histology (e.g., medullary thyroid cancer)

*Family History:*
- Multiple relatives with same cancer type
- Multiple generations affected
- Related cancers in the family (e.g., breast and ovarian)
- Associated features (polyps, skin findings, etc.)

**General Management Principles:**

*Surveillance:*
- Earlier and more frequent screening
- Additional imaging modalities (MRI, ultrasound)
- Syndrome-specific protocols

*Prevention:*
- Risk-reducing surgeries when appropriate
- Chemoprevention (aspirin, tamoxifen, etc.)
- Lifestyle modifications

*Cascade Testing:*
- Testing at-risk family members
- 50% of first-degree relatives carry mutation (AD syndromes)
- Enables targeted management for carriers

**Key Clinical Pearls:**

- Not all hereditary cancer patients have family history (de novo mutations, small families)
- Penetrance varies by gene and mutation
- Multi-gene panel testing increasingly used
- Management should be syndrome-specific`,
      keyTerms: [
        {
          term: "germline mutation",
          definition:
            "A gene change present in every cell of the body that was inherited from a parent",
        },
        {
          term: "autosomal dominant (AD)",
          definition:
            "Inheritance pattern where one copy of a mutated gene is sufficient to cause the condition",
        },
        {
          term: "penetrance",
          definition:
            "The proportion of people with a genetic mutation who develop the associated condition",
        },
        {
          term: "cascade testing",
          definition:
            "Testing family members for a known familial genetic mutation",
        },
        {
          term: "de novo mutation",
          definition:
            "A new genetic mutation that appears for the first time in a family",
        },
      ],
      analogies: [
        "Cascade testing is like following a trail - once you find the starting point, you can trace the path through the family.",
        "Penetrance is like a weather forecast - 70% penetrance means 70% chance of developing cancer, not a guarantee.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Hereditary cancer syndromes involve diverse molecular mechanisms including tumor suppressor loss, DNA repair deficiency, and altered signaling pathways, with syndrome-specific penetrance profiles and evidence-based management guidelines.",
      explanation: `## Molecular Classification

### Tumor Suppressor Gene Syndromes

**Loss of Function Mechanism:**
- Germline mutation inactivates one allele
- Somatic "second hit" inactivates remaining allele
- Complete loss of tumor suppressor function

| Syndrome | Gene | Function |
|----------|------|----------|
| Li-Fraumeni | TP53 | Cell cycle arrest, apoptosis |
| Retinoblastoma | RB1 | Cell cycle checkpoint |
| FAP | APC | Wnt signaling regulation |
| VHL | VHL | Hypoxia response |
| Cowden | PTEN | PI3K/AKT signaling |

### DNA Repair Gene Syndromes

**Genomic Instability Mechanism:**
- Defective DNA repair → mutation accumulation
- Often specific mutational signatures

| Syndrome | Gene(s) | Repair Pathway |
|----------|---------|----------------|
| HBOC | BRCA1/2 | Homologous recombination |
| Lynch | MLH1, MSH2, etc. | Mismatch repair |
| Fanconi anemia | Multiple | ICL repair |
| Xeroderma pigmentosum | XP genes | Nucleotide excision repair |
| Bloom syndrome | BLM | DNA helicase |

### Signaling Pathway Syndromes

| Syndrome | Gene | Pathway |
|----------|------|---------|
| MEN2 | RET | Tyrosine kinase signaling |
| NF1 | NF1 | RAS signaling |
| Gorlin | PTCH1 | Hedgehog signaling |
| Juvenile polyposis | SMAD4, BMPR1A | TGF-β signaling |

## Detailed Syndrome Profiles

### Li-Fraumeni Syndrome (TP53)

**Cancer Spectrum:**
- Soft tissue sarcomas (childhood)
- Osteosarcoma (adolescence)
- Breast cancer (young women)
- Brain tumors (various ages)
- Adrenocortical carcinoma (childhood)
- Leukemia

**Surveillance (Toronto Protocol):**
- Annual whole-body MRI
- Annual brain MRI
- Breast MRI (women)
- Colonoscopy every 2-5 years
- Annual dermatologic exam

**Unique Considerations:**
- Radiation sensitivity - minimize diagnostic radiation
- Very high lifetime cancer risk (~90%)
- Consider radiation-free imaging when possible

### Familial Adenomatous Polyposis (APC)

**Classic FAP:**
- >100 colorectal adenomas
- 100% CRC risk by age 40 without surgery
- Duodenal adenomas (4-12% progress to cancer)
- Desmoid tumors
- Thyroid cancer, hepatoblastoma

**Attenuated FAP:**
- 10-100 adenomas
- Later onset
- May be caused by specific APC mutations or MUTYH (AR)

**Management:**
- Colectomy recommended (IRA vs. IPAA)
- Regular upper endoscopy
- Thyroid surveillance
- Consider sulindac/celecoxib (not substitute for surgery)

### Cowden Syndrome (PTEN)

**Features:**
- Mucocutaneous lesions (trichilemmomas, papillomatous papules)
- Macrocephaly
- Breast cancer (85% lifetime risk)
- Thyroid cancer (35%)
- Endometrial cancer (28%)
- Renal cell carcinoma

**Diagnostic Criteria:**
- Pathognomonic criteria (adult Lhermitte-Duclos, etc.)
- Major criteria (breast cancer, thyroid cancer, macrocephaly)
- Minor criteria (thyroid lesions, GI hamartomas, etc.)

### MEN Syndromes

**MEN1 (Menin):**
- Parathyroid hyperplasia (95%)
- Pituitary adenomas (40%)
- Pancreatic NETs (40-70%)

**MEN2A (RET):**
- Medullary thyroid cancer (MTC) (95%)
- Pheochromocytoma (50%)
- Parathyroid hyperplasia (20-30%)

**MEN2B (RET):**
- MTC (100%) - earlier, more aggressive
- Pheochromocytoma (50%)
- Mucosal neuromas, marfanoid habitus
- No parathyroid disease

**RET Mutation-Specific Management:**
- Highest risk (M918T): Prophylactic thyroidectomy first year of life
- High risk: Thyroidectomy by age 5
- Moderate risk: Thyroidectomy can be delayed`,
      keyTerms: [
        {
          term: "two-hit hypothesis",
          definition:
            "Model where both alleles of tumor suppressor must be inactivated for cancer to develop",
        },
        {
          term: "interstrand crosslink (ICL) repair",
          definition:
            "DNA repair pathway for lesions connecting both DNA strands; defective in Fanconi anemia",
        },
        {
          term: "desmoid tumor",
          definition:
            "Locally aggressive fibromatosis associated with FAP",
        },
        {
          term: "medullary thyroid cancer",
          definition:
            "Thyroid cancer arising from parafollicular C cells; hallmark of MEN2",
        },
        {
          term: "prophylactic thyroidectomy",
          definition:
            "Preventive thyroid removal in MEN2 based on RET mutation risk level",
        },
        {
          term: "hamartoma",
          definition:
            "Benign growth of disorganized tissue native to the site",
        },
      ],
      clinicalNotes:
        "RET mutation testing in MEN2 directly determines timing of prophylactic thyroidectomy. Li-Fraumeni patients should avoid radiation-based screening when alternatives exist. MUTYH-associated polyposis is autosomal recessive - different counseling implications.",
    },
    4: {
      level: 4,
      summary:
        "Advanced hereditary cancer management requires integration of genotype-phenotype correlations, emerging moderate-penetrance genes, multi-gene panel result interpretation, and precision surveillance tailored to specific variants and risk modifiers.",
      explanation: `## Genotype-Phenotype Correlations

### APC Mutation Location

| Location | Phenotype |
|----------|-----------|
| Codons 1-157 | Attenuated FAP |
| Codon 1309 | Severe polyposis, early CRC |
| Codons 1250-1464 | Desmoid tumors |
| After codon 1400 | Attenuated FAP |
| 5" mutations | CHRPE (retinal pigment) |

### TP53 Mutation Types

**High Penetrance:**
- Missense dominant negative mutations
- Hotspot codons (175, 245, 248, 273, 282)

**Reduced Penetrance:**
- Some splice site variants
- Non-dominant negative missense

### VHL Classification

| Type | Feature | Pheo Risk | RCC Risk |
|------|---------|-----------|----------|
| 1 | Truncating | Low | High |
| 2A | Missense | High | Low |
| 2B | Missense | High | High |
| 2C | Missense | High only | Low |

## Moderate Penetrance Genes

### From Multi-Gene Panel Testing

| Gene | Associated Cancers | Relative Risk | Management |
|------|-------------------|---------------|------------|
| ATM | Breast | 2-3x | Enhanced screening |
| CHEK2 | Breast, colorectal | 2-3x | Enhanced screening |
| PALB2 | Breast, pancreatic | 3-5x | High-risk screening |
| RAD51C/D | Ovarian | 5-6x | Consider RRSO |
| BRIP1 | Ovarian | ~3x | Consider RRSO |

### Clinical Challenges

**Variant Interpretation:**
- Higher VUS rates
- Less family data for classification
- Population frequency thresholds differ

**Management Uncertainty:**
- Guidelines still evolving
- Less outcome data
- Shared decision-making important

## Panel Testing Considerations

### Pre-Test Counseling

**Expanded Findings:**
- Moderate penetrance genes
- VUS more likely
- Unexpected findings (e.g., TP53 when testing for breast cancer)

**Incidental Findings:**
- Syndromes beyond indication
- May cause more harm than benefit in some cases

### Result Interpretation

**Positive Finding:**
- Confirm syndrome-specific management
- Cascade testing for at-risk relatives
- Coordinate multi-disciplinary care

**VUS:**
- Do not use for clinical management
- May reclassify over time
- Document and track

**Negative with Family History:**
- Risk may still be elevated
- Continue empiric management
- Consider reanalysis as knowledge advances

## Overlap Syndromes and Phenocopies

### PTEN Hamartoma Tumor Syndrome Spectrum

- Cowden syndrome
- Bannayan-Riley-Ruvalcaba syndrome
- Proteus-like syndrome
- PTEN-related autism spectrum disorder

### RASopathies

**Shared Features:**
- Developmental abnormalities
- Cancer predisposition (variable)
- Overlapping phenotypes

| Syndrome | Gene | Cancer Risk |
|----------|------|-------------|
| Noonan | PTPN11, others | Low (JMML, neuroblastoma) |
| Costello | HRAS | Moderate (rhabdomyosarcoma) |
| CFC | BRAF, others | Low |
| NF1 | NF1 | Moderate (MPNST, glioma) |

## Surveillance Optimization

### Risk-Stratified Approaches

**High-Risk Genes:**
- Disease-specific guidelines (NCCN)
- Established surveillance protocols
- Surgery often indicated

**Moderate-Risk Genes:**
- Less established protocols
- Consider family history
- Shared decision-making

### Imaging Protocols

**MRI Considerations:**
- Annual breast MRI for high-risk
- Whole-body MRI for Li-Fraumeni
- Abbreviated protocols to reduce cost

**Radiation Minimization:**
- Li-Fraumeni: Avoid CT when possible
- Fanconi anemia: Radiation sensitivity
- Use ultrasound/MRI preferentially

## Special Populations

### Pediatric Considerations

**Early-Onset Syndromes:**
- MEN2B: Thyroidectomy in infancy
- FAP: Colectomy in teens
- Li-Fraumeni: Surveillance from early childhood
- Retinoblastoma: Exam under anesthesia

**Genetic Testing in Minors:**
- Indicated when surveillance/intervention changes
- Defer for adult-onset conditions
- Adolescent assent when appropriate

### Reproductive Considerations

**PGT-M Options:**
- Available for most syndromes
- Consider severity and penetrance
- Genetic counseling essential

**Prenatal Testing:**
- CVS or amniocentesis options
- Complex ethical considerations
- Family values paramount`,
      keyTerms: [
        {
          term: "moderate penetrance gene",
          definition:
            "Gene variant conferring 2-4 fold increased cancer risk; less than high-penetrance genes",
        },
        {
          term: "CHRPE",
          definition:
            "Congenital Hypertrophy of Retinal Pigment Epithelium; associated with APC mutations",
        },
        {
          term: "RASopathy",
          definition:
            "Group of syndromes caused by germline mutations in RAS-MAPK pathway genes",
        },
        {
          term: "phenocopy",
          definition:
            "Clinical presentation mimicking genetic syndrome but from different cause",
        },
        {
          term: "MPNST",
          definition:
            "Malignant Peripheral Nerve Sheath Tumor; associated with NF1",
          pronunciation: "M-P-N-S-T",
        },
        {
          term: "exam under anesthesia",
          definition:
            "Ophthalmologic examination requiring sedation for retinoblastoma screening in infants",
        },
      ],
      clinicalNotes:
        "Multi-gene panels have significantly increased identification of moderate-penetrance gene carriers. Management for these genes is evolving - use NCCN guidelines but acknowledge limitations. Document family history even with negative genetic testing - empiric management may still be warranted.",
    },
    5: {
      level: 5,
      summary:
        "Contemporary hereditary cancer syndrome management integrates multi-disciplinary precision oncology, therapeutic targeting of germline alterations, health system implementation of genetic testing programs, and emerging technologies for surveillance and prevention.",
      explanation: `## Precision Oncology Integration

### Germline-Directed Therapy

| Syndrome | Drug | Mechanism | Evidence |
|----------|------|-----------|----------|
| BRCA1/2 | PARP inhibitors | Synthetic lethality | Multiple phase 3 |
| Lynch | Checkpoint inhibitors | Neoantigen recognition | Pembrolizumab approved |
| MEN2 | Selpercatinib, pralsetinib | RET inhibition | Phase 3 data |
| NF1 | Selumetinib | MEK inhibition | Plexiform neurofibromas |
| VHL | Belzutifan | HIF-2α inhibition | RCC, hemangioblastoma |

### Somatic-Germline Overlap

**Tumor-First Detection:**
- 4-18% of tumor sequencing reveals germline findings
- Reflex germline confirmation required
- BRCA most common, others identified

**Guidelines:**
- ESMO: Test certain germline genes on tumor tissue
- Confirm all suspected germline variants constitutionally

### Resistance and Progression

**PARP Inhibitor Resistance:**
- Reversion mutations restore BRCA function
- Capture with ctDNA monitoring
- Alternative therapies (platinum, ATR inhibitors)

**RET Inhibitor Resistance:**
- Secondary RET mutations
- Bypass pathway activation
- Next-generation agents in development

## Emerging Surveillance Technologies

### Multi-Cancer Early Detection

**cfDNA-Based Screening:**
- Galleri, other platforms
- May have role in high-risk syndromes
- Validation studies ongoing

**Potential Applications:**
- Li-Fraumeni screening
- Surveillance for rare tumors
- Complement organ-specific screening

### AI-Enhanced Imaging

**Applications:**
- MRI interpretation assistance
- Polyp detection on colonoscopy
- Mammography reading

**Benefits:**
- Improved sensitivity
- Reduced variability
- Efficiency gains

## Health System Implementation

### Population Health Approaches

**Universal Testing Programs:**
- Colorectal cancer → Lynch syndrome
- Ovarian cancer → BRCA testing
- Expanding to other cancers

**Cascade Testing Infrastructure:**
- Direct contact programs
- Patient navigation
- Electronic health record integration

### Care Coordination

**Multidisciplinary Teams:**
| Role | Function |
|------|----------|
| Genetic counselor | Testing, counseling |
| Medical geneticist | Complex cases |
| Oncologists | Cancer treatment |
| Surgeons | Prophylactic/therapeutic |
| Mental health | Psychosocial support |
| Primary care | Coordination |

**Care Models:**
- Centralized high-risk clinics
- Hub-and-spoke systems
- Integrated EHR decision support

### Quality Metrics

**Process Measures:**
- Testing completion rate
- Time to results
- Cascade testing uptake
- Surveillance adherence

**Outcome Measures:**
- Cancer stage at diagnosis
- Cancer-specific mortality
- Quality of life

## Policy and Access

### Insurance Coverage

**Genetic Testing:**
- Generally covered when criteria met
- Prior authorization common
- Self-pay options expanding

**Surveillance:**
- High-risk breast MRI: Generally covered
- Whole-body MRI: Variable coverage
- Advocacy needed for novel approaches

### Health Equity

**Disparities:**
- Testing rates lower in minorities
- Guideline-concordant care gaps
- VUS interpretation challenges

**Solutions:**
- Community engagement
- Diverse research populations
- Alternative delivery models

## Future Directions

### Gene Therapy

**Potential Approaches:**
- Gene replacement
- Gene editing (somatic)
- RNA interference

**Challenges:**
- Germline cells not targeted
- Somatic correction ongoing
- Delivery to multiple tissues

### Prevention Trials

**Chemoprevention:**
- Aspirin in Lynch syndrome
- PARP inhibitors for prevention (BRCA)
- Targeted agents for specific pathways

**Immunoprevention:**
- Vaccines targeting mutant proteins
- Enhanced immune surveillance
- Very early development

### Polygenic Risk Integration

**Concept:**
- Common variants modify penetrance
- Risk scores being developed
- May refine surveillance recommendations

**Current Status:**
- Research tool primarily
- Validation needed
- Gene-specific scores emerging

## Clinical Decision Support

### Risk Models

| Tool | Application |
|------|-------------|
| CanRisk/BOADICEA | BRCA risk estimation |
| PREMM5 | Lynch syndrome probability |
| ASK2ME | General hereditary cancer |

### EHR Integration

**Functions:**
- Risk assessment prompts
- Surveillance reminders
- Result tracking
- Family history collection

### Shared Decision-Making

**Framework:**
1. Present syndrome-specific risks
2. Review management options
3. Explore values and preferences
4. Provide decision aids
5. Support informed choice`,
      keyTerms: [
        {
          term: "multi-cancer early detection",
          definition:
            "Blood tests detecting signals from multiple cancer types; emerging technology for high-risk surveillance",
        },
        {
          term: "belzutifan",
          definition:
            "HIF-2α inhibitor approved for VHL-associated tumors",
          pronunciation: "bel-ZOO-ti-fan",
        },
        {
          term: "tumor-first testing",
          definition:
            "Identification of potential germline variants through somatic tumor sequencing",
        },
        {
          term: "direct contact program",
          definition:
            "Health system outreach to at-risk relatives for cascade genetic testing",
        },
        {
          term: "clinical decision support",
          definition:
            "EHR tools providing automated guidance for genetic testing and surveillance",
        },
        {
          term: "health equity",
          definition:
            "Fair distribution of health resources and outcomes across populations",
        },
      ],
      clinicalNotes: `Implementation priorities for hereditary cancer programs:
1. Establish universal tumor testing for Lynch syndrome (colorectal, endometrial)
2. Build cascade testing infrastructure with dedicated resources
3. Implement systematic surveillance tracking with EHR reminders
4. Consider germline implications when reviewing tumor sequencing
5. Stay current with rapidly evolving targeted therapies
6. Address equity gaps through alternative delivery models
7. Prepare for multi-cancer early detection integration
8. Develop gene-specific management protocols including moderate-penetrance genes`,
    },
  },

  media: [
    {
      id: "hereditary-cancer-overview",
      type: "diagram",
      filename: "hereditary-cancer-syndromes-overview.svg",
      title: "Overview of Hereditary Cancer Syndromes",
      description:
        "Diagram showing major hereditary cancer syndromes and their associated genes",
    },
    {
      id: "hereditary-cancer-red-flags",
      type: "diagram",
      filename: "hereditary-cancer-red-flags.svg",
      title: "Red Flags for Hereditary Cancer",
      description:
        "Visual guide to personal and family history features suggesting hereditary cancer",
    },
  ],

  citations: [
    {
      id: "garber-2005",
      type: "article",
      title:
        "Hereditary Cancer Predisposition Syndromes",
      authors: ["Garber, J.E.", "Offit, K."],
      source: "Journal of Clinical Oncology",
      chapter: "23",
      page: "276-292",
    },
    {
      id: "nccn-genetic",
      type: "website",
      title: "NCCN Guidelines: Genetic/Familial High-Risk Assessment",
      source: "National Comprehensive Cancer Network",
      url: "https://www.nccn.org",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-cancer-genetics-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Cancer Genetics Overview",
    },
    {
      targetId: "concept-brca",
      targetType: "concept",
      relationship: "sibling",
      label: "BRCA and Hereditary Breast-Ovarian Cancer",
    },
    {
      targetId: "concept-lynch-syndrome",
      targetType: "concept",
      relationship: "sibling",
      label: "Lynch Syndrome",
    },
    {
      targetId: "concept-genetic-counseling-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Counseling",
    },
  ],

  tags: {
    systems: ["genetics", "oncology"],
    topics: [
      "hereditary cancer",
      "cancer syndromes",
      "genetic testing",
      "cancer prevention",
    ],
    keywords: [
      "Li-Fraumeni",
      "FAP",
      "Cowden",
      "MEN",
      "VHL",
      "hereditary cancer",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "surgery", "pediatrics"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default hereditaryCancerSyndromesContent;
