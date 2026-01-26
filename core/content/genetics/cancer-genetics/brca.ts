/**
 * BRCA1/2 and Hereditary Breast-Ovarian Cancer - Comprehensive Educational Content
 *
 * Covers BRCA gene function, associated cancer risks, testing indications,
 * and clinical management strategies.
 */

import { EducationalContent } from "../../types";

export const brcaContent: EducationalContent = {
  id: "concept-brca",
  type: "concept",
  name: "BRCA1/2 and Hereditary Breast-Ovarian Cancer",
  alternateNames: [
    "BRCA",
    "Hereditary Breast and Ovarian Cancer Syndrome",
    "HBOC",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "BRCA1 and BRCA2 are genes that help protect against cancer. When these genes do not work properly, the risk of breast and ovarian cancer increases significantly.",
      explanation: `Everyone has two copies of the BRCA1 gene and two copies of the BRCA2 gene. These genes help repair damage in our cells and protect us from cancer.

When someone is born with a change (mutation) in one of their BRCA genes, the gene cannot do its job properly. This means cells are more likely to develop cancer over time.

**What does this mean for cancer risk?**

Women with BRCA mutations have a much higher chance of developing:
- Breast cancer (up to 7 out of 10 women by age 80)
- Ovarian cancer (up to 4 out of 10 women by age 80)

Men with BRCA mutations can also have increased risks for:
- Breast cancer (yes, men can get breast cancer too)
- Prostate cancer

**How do BRCA mutations run in families?**

If a parent has a BRCA mutation, each child has a 50% (1 in 2) chance of inheriting it. This is true for both sons and daughters.

**What can be done?**

People who know they have a BRCA mutation can:
- Get more frequent cancer screenings starting at younger ages
- Take medications that may lower cancer risk
- Consider surgery to remove at-risk organs before cancer develops
- Help family members learn if they should also be tested`,
      keyTerms: [
        {
          term: "BRCA",
          definition:
            "Genes (BRCA1 and BRCA2) that help repair DNA and protect against cancer",
          pronunciation: "BRAK-uh",
        },
        {
          term: "mutation",
          definition:
            "A change in a gene that stops it from working correctly",
        },
        {
          term: "hereditary",
          definition:
            "Something that can be passed from parents to children through genes",
        },
        {
          term: "screening",
          definition:
            "Tests done to look for cancer before symptoms appear",
        },
      ],
      analogies: [
        "BRCA genes are like spell-checkers for your DNA - they find and fix mistakes. Without them, errors can pile up.",
        "Having a BRCA mutation is like having a car without airbags - you can still drive safely, but you have less protection if something goes wrong.",
        "Passing on a BRCA mutation is like flipping a coin for each child - heads they inherit it, tails they do not.",
      ],
      examples: [
        "Angelina Jolie publicly shared her BRCA1 mutation diagnosis, which led to more awareness about genetic testing.",
        "A woman whose mother and aunt both had breast cancer before age 50 might be tested for BRCA mutations.",
        "A man with a BRCA2 mutation might start prostate cancer screening at an earlier age than usual.",
      ],
    },
    2: {
      level: 2,
      summary:
        "BRCA1 and BRCA2 are tumor suppressor genes involved in DNA double-strand break repair. Pathogenic variants confer significantly elevated lifetime risks for breast, ovarian, and other cancers, with management options including enhanced surveillance and risk-reducing surgery.",
      explanation: `BRCA1 (chromosome 17) and BRCA2 (chromosome 13) encode proteins essential for repairing double-strand DNA breaks through homologous recombination.

**Cancer Risks with BRCA Mutations:**

| Cancer Type | BRCA1 | BRCA2 | General Population |
|-------------|-------|-------|-------------------|
| Breast (female) | 55-70% | 45-70% | 12% |
| Ovarian | 40-45% | 15-25% | 1.3% |
| Male breast | 1-2% | 6-8% | 0.1% |
| Prostate | Elevated | 15-25% | 12% |
| Pancreatic | 2-3% | 3-5% | 1.5% |

**Inheritance Pattern:**
- Autosomal dominant
- 50% chance of passing to each child
- Both males and females can carry and transmit mutations
- Variable penetrance (not everyone develops cancer)

**Testing Criteria (examples):**
- Breast cancer diagnosed at age 45 or younger
- Triple-negative breast cancer at age 60 or younger
- Ovarian cancer at any age
- Male breast cancer
- Pancreatic cancer with family history
- Known BRCA mutation in family
- Ashkenazi Jewish ancestry with breast/ovarian/pancreatic cancer

**Management Options:**

*Enhanced Screening:*
- Breast MRI annually starting age 25-30
- Mammogram annually starting age 30
- Consider transvaginal ultrasound and CA-125 for ovarian (limited effectiveness)

*Risk-Reducing Surgery:*
- Mastectomy reduces breast cancer risk by ~95%
- Salpingo-oophorectomy reduces ovarian cancer risk by ~80% and breast cancer by ~50%

*Chemoprevention:*
- Tamoxifen or other selective estrogen receptor modulators
- Reduces breast cancer risk by ~50%`,
      keyTerms: [
        {
          term: "tumor suppressor gene",
          definition:
            "A gene that normally helps prevent cancer by controlling cell growth or repairing DNA",
        },
        {
          term: "pathogenic variant",
          definition:
            "A gene change that is known to cause disease or significantly increase disease risk",
        },
        {
          term: "homologous recombination",
          definition:
            "A DNA repair process that uses a matching DNA template to accurately fix double-strand breaks",
          pronunciation: "hoh-MOL-oh-gus ree-kom-bin-AY-shun",
        },
        {
          term: "penetrance",
          definition:
            "The proportion of people with a genetic mutation who actually develop the associated condition",
        },
        {
          term: "salpingo-oophorectomy",
          definition:
            "Surgical removal of the fallopian tubes and ovaries",
          pronunciation: "sal-PING-go oh-off-or-EK-toh-mee",
        },
      ],
      analogies: [
        "BRCA proteins are like construction workers who repair broken bridges (DNA breaks) - without them, the bridge stays broken.",
        "Penetrance is like weather probability - a 70% chance of rain does not mean it will definitely rain, just that it is likely.",
      ],
    },
    3: {
      level: 3,
      summary:
        "BRCA1/2 encode proteins essential for homologous recombination repair of double-strand breaks. Loss of function leads to genomic instability, accumulation of mutations, and carcinogenesis, with therapeutic vulnerabilities to PARP inhibition.",
      explanation: `## Molecular Function of BRCA Proteins

### BRCA1 Functions
- Forms complexes with multiple proteins (BARD1, BRIP1, PALB2)
- Recruited to sites of DNA damage
- Promotes DNA end resection
- Essential for homologous recombination (HR)
- Also involved in transcriptional regulation

### BRCA2 Functions
- Mediates RAD51 loading onto resected DNA
- Essential for strand invasion during HR
- Stabilizes stalled replication forks
- Works through PALB2 interaction

## Mechanism of Tumorigenesis

**Loss of Heterozygosity (LOH):**
1. Germline mutation inactivates one allele
2. Somatic event inactivates second allele
3. Complete loss of BRCA function
4. Homologous recombination deficiency (HRD)
5. Accumulation of genomic alterations

**Genomic Instability Pattern:**
- Chromosomal rearrangements
- Large deletions
- Specific mutational signature (Signature 3)
- Can be detected by HRD scores

## Genotype-Phenotype Correlations

| Location | Association |
|----------|-------------|
| BRCA1 RING domain | May affect protein stability |
| BRCA1 BRCT domain | Disrupts protein interactions |
| BRCA2 central region | Higher ovarian cancer risk |
| BRCA2 3" region | Lower ovarian, higher breast risk |

## Founder Mutations

**Ashkenazi Jewish:**
- BRCA1 185delAG (c.68_69delAG)
- BRCA1 5382insC (c.5266dupC)
- BRCA2 6174delT (c.5946delT)
- ~1 in 40 individuals carries one mutation

**Other Populations:**
- BRCA1 c.4035delA (Polish)
- BRCA2 c.771_775del5 (Icelandic)
- Various founder mutations in different populations

## PARP Inhibitor Mechanism

**Synthetic Lethality:**
1. PARP1 repairs single-strand breaks (SSB)
2. Unrepaired SSBs become DSBs during replication
3. Normal cells repair DSBs via HR
4. BRCA-deficient cells cannot use HR
5. DSBs accumulate → cell death

**PARP Trapping:**
- PARP inhibitors trap PARP on DNA
- Creates replication fork obstacles
- Requires HR for resolution
- Additional cytotoxicity mechanism

**Approved Indications:**
| Drug | Indications |
|------|-------------|
| Olaparib | BRCA+ breast, ovarian, pancreatic, prostate |
| Rucaparib | BRCA+ ovarian |
| Niraparib | Ovarian (regardless of BRCA) |
| Talazoparib | BRCA+ breast |`,
      keyTerms: [
        {
          term: "homologous recombination deficiency",
          definition:
            "Inability to repair double-strand DNA breaks using HR pathway; creates therapeutic vulnerability",
          pronunciation: "HRD",
        },
        {
          term: "loss of heterozygosity",
          definition:
            "Loss of the functional copy of a gene when one copy is already mutated",
          pronunciation: "LOH",
        },
        {
          term: "PARP inhibitor",
          definition:
            "Drug that blocks PARP enzyme, causing synthetic lethality in HR-deficient cells",
        },
        {
          term: "synthetic lethality",
          definition:
            "Genetic interaction where combined loss of two genes/pathways causes cell death",
        },
        {
          term: "founder mutation",
          definition:
            "Mutation originating in a small ancestral population, now common in descendants",
        },
        {
          term: "mutational signature",
          definition:
            "Characteristic pattern of mutations reflecting underlying repair deficiency or mutagen exposure",
        },
      ],
      clinicalNotes:
        "HRD testing can identify patients who may benefit from PARP inhibitors beyond those with germline BRCA mutations. Consider tumor BRCA testing in addition to germline testing. Approximately 3% of unselected ovarian cancers have somatic-only BRCA mutations.",
    },
    4: {
      level: 4,
      summary:
        "Comprehensive BRCA management integrates risk modeling, variant classification algorithms, HRD assessment, resistance mechanisms to PARP inhibitors, and evolving surgical and surveillance strategies informed by emerging data.",
      explanation: `## Risk Modeling and Modifiers

### Risk Calculation Tools
- BOADICEA/CanRisk
- BRCAPRO
- Tyrer-Cuzick
- IBIS

### Genetic Modifiers of Penetrance

| Modifier | Gene | Effect |
|----------|------|--------|
| Common variants | Multiple SNPs | Polygenic risk score modification |
| RAD51 | Rare variants | May increase risk |
| FGFR2 | rs2981582 | Modifies breast cancer risk |
| MAP3K1 | rs889312 | Modifies breast cancer risk |

### Non-Genetic Modifiers
- Reproductive history (parity, age at first birth)
- Hormonal exposures
- Bilateral oophorectomy timing
- Lifestyle factors

## Advanced Variant Classification

### ENIGMA Consortium Classification
- ClinVar aggregation
- Functional assay integration
- Multifactorial likelihood analysis

### Challenging Variants
**Splice variants:**
- In silico prediction
- RNA studies when available
- May have variable penetrance

**Missense variants:**
- Most are VUS
- Functional assays (HDR, drug sensitivity)
- Saturation genome editing data emerging

**Large Rearrangements:**
- 10-15% of BRCA1 mutations
- Require MLPA or equivalent
- Not detected by sequencing alone

## PARP Inhibitor Resistance

### Mechanisms
| Mechanism | Description |
|-----------|-------------|
| BRCA reversion | Secondary mutation restoring function |
| 53BP1/RIF1 loss | Restores end resection |
| PARP1 mutations | Prevents PARP trapping |
| Drug efflux | P-glycoprotein upregulation |
| Fork stabilization | SLFN11 loss |

### Clinical Detection
- ctDNA monitoring for reversion mutations
- Progression on PARP inhibitor
- May retain platinum sensitivity

## Surgical Decision-Making

### Risk-Reducing Mastectomy
**Considerations:**
- Timing relative to cancer diagnosis
- Reconstruction options
- Residual risk (~2-5%)
- Contralateral breast cancer risk

**Emerging Data:**
- MRI surveillance may approach surgical benefit
- CARRIERS study informing moderate-risk gene management

### Risk-Reducing Salpingo-Oophorectomy
**Timing Considerations:**
| Factor | BRCA1 | BRCA2 |
|--------|-------|-------|
| Recommended age | 35-40 | 40-45 |
| Ovarian cancer onset | Earlier | Later |
| Premature menopause effects | Consider HRT | Consider HRT |

**Surgical Technique:**
- Complete salpingectomy
- Careful pathologic examination (SEE-FIM protocol)
- 2-5% occult cancer detection rate

## Emerging Surveillance Technologies

### Breast
- Abbreviated MRI protocols
- Contrast-enhanced mammography
- AI-assisted interpretation

### Ovarian
- Serial CA-125 (ROCA algorithm)
- Transvaginal ultrasound
- Limited sensitivity for early detection
- Surgery remains primary prevention

## Family Communication

### Cascade Testing
- 50% of first-degree relatives carry mutation
- Up to 50% of at-risk relatives decline testing
- Direct contact programs improve uptake
- Genetic counseling for all tested individuals`,
      keyTerms: [
        {
          term: "reversion mutation",
          definition:
            "Secondary mutation restoring gene function; causes PARP inhibitor resistance in BRCA-mutant tumors",
        },
        {
          term: "polygenic risk score",
          definition:
            "Aggregate risk from multiple common genetic variants; can modify BRCA penetrance estimates",
        },
        {
          term: "SEE-FIM protocol",
          definition:
            "Sectioning and Extensively Examining the FIMbria; detailed pathologic examination of fallopian tubes",
        },
        {
          term: "ROCA algorithm",
          definition:
            "Risk of Ovarian Cancer Algorithm; serial CA-125 interpretation method for screening",
        },
        {
          term: "multifactorial likelihood analysis",
          definition:
            "Statistical method integrating multiple evidence types for variant classification",
        },
        {
          term: "saturation genome editing",
          definition:
            "Systematic introduction of all possible variants to assess functional impact",
        },
      ],
      clinicalNotes:
        "Consider HRT until natural menopause age after RRSO - does not significantly increase breast cancer risk in this setting and improves quality of life. Monitor for PARP inhibitor resistance with ctDNA if available. BRCA reversion mutations may restore platinum sensitivity even with PARP resistance.",
    },
    5: {
      level: 5,
      summary:
        "State-of-the-art BRCA management encompasses precision prevention trials, novel therapeutic combinations, reproductive considerations, and health equity initiatives addressing disparities in genetic testing access and outcomes.",
      explanation: `## Precision Prevention Initiatives

### Chemoprevention Trials
**BRCA-P (Olaparib Prevention):**
- Low-dose PARP inhibitor for prevention
- Phase 3 in BRCA carriers
- Novel approach targeting DNA repair

**Denosumab Studies:**
- RANK ligand inhibition
- Preclinical BRCA1 breast cancer prevention
- Clinical trials ongoing

### Immunoprevention
- Vaccine approaches targeting mutant proteins
- Enhanced immune surveillance
- Early-phase clinical trials

## Therapeutic Advances

### Combination Strategies
| Combination | Rationale | Status |
|-------------|-----------|--------|
| PARPi + anti-angiogenic | Additive effects, hypoxia | Approved (olaparib + bevacizumab) |
| PARPi + immunotherapy | DNA damage → neoantigen | Phase 3 ongoing |
| PARPi + ATR inhibitor | Overcome resistance | Phase 1/2 |
| PARPi + RAD51 inhibitor | Enhance HRD | Preclinical |

### Overcoming Resistance
**ATR/CHK1 Inhibitors:**
- Target alternative repair pathways
- May resensitize resistant tumors

**Antibody-Drug Conjugates:**
- Sacituzumab govitecan
- Trastuzumab deruxtecan (HER2-low)
- Active in BRCA-associated cancers

### Novel Targets
- Polθ (polymerase theta) inhibitors
- BRCA-deficient cell dependency
- Synthetic lethality distinct from PARP

## Reproductive Considerations

### Preimplantation Genetic Testing (PGT-M)
**Process:**
1. IVF stimulation and retrieval
2. Embryo culture to blastocyst
3. Trophectoderm biopsy
4. BRCA variant testing
5. Transfer unaffected embryos

**Outcomes:**
- ~30-40% pregnancy rate per cycle
- Prevents transmission to offspring
- Ethical considerations regarding selection

### Fertility Preservation
**Before Cancer Treatment:**
- Oocyte/embryo cryopreservation
- Ovarian tissue cryopreservation (experimental)
- Gonadotoxicity assessment

**Before RRSO:**
- Oocyte cryopreservation option
- Timing considerations

### Prenatal Diagnosis
- CVS (10-13 weeks) or amniocentesis (>15 weeks)
- Not commonly pursued for BRCA
- Complex ethical considerations

## Health Equity and Access

### Testing Disparities
| Factor | Impact |
|--------|--------|
| Race/ethnicity | Lower testing rates in minorities |
| Insurance | Coverage gaps |
| Geography | Limited genetic counselors |
| Education | Awareness differences |

### Addressing Disparities
**Population-Based Screening:**
- Universal BRCA testing proposals
- Ashkenazi screening programs
- Economic modeling supports cost-effectiveness

**Alternative Delivery Models:**
- Telehealth genetic counseling
- Mainstreaming (oncologist-ordered testing)
- Direct-to-consumer with physician oversight

### Diverse Population Research
**Variant Databases:**
- Population-specific databases needed
- Higher VUS rates in underrepresented groups
- Functional studies for reclassification

## Clinical Implementation

### Multidisciplinary Care
**Team Members:**
- Medical genetics/genetic counselor
- Breast surgeon
- Gynecologic oncologist
- Medical oncologist
- Plastic surgery
- Psychology/social work

### Shared Decision-Making Framework
1. Assess patient values and preferences
2. Present risk data clearly
3. Discuss all management options
4. Address emotional and practical concerns
5. Support informed autonomous decisions

### Quality Metrics
- Time from diagnosis to genetic testing
- Cascade testing uptake rate
- Compliance with screening recommendations
- Risk-reducing surgery utilization
- Patient-reported outcomes

## Future Directions

### Circulating Biomarkers
- Early detection through ctDNA
- Longitudinal monitoring
- Multi-cancer early detection tests

### Artificial Intelligence
- Risk prediction refinement
- Image interpretation enhancement
- Variant classification assistance

### Gene Therapy
- Somatic gene correction approaches
- CRISPR-based strategies
- Very early development`,
      keyTerms: [
        {
          term: "PGT-M",
          definition:
            "Preimplantation Genetic Testing for Monogenic disorders; IVF-based prevention of BRCA transmission",
        },
        {
          term: "ATR inhibitor",
          definition:
            "Drug targeting ATR kinase; may overcome PARP inhibitor resistance in clinical trials",
        },
        {
          term: "mainstreaming",
          definition:
            "Genetic testing ordered by treating physician rather than genetics specialist",
        },
        {
          term: "population-based screening",
          definition:
            "Offering genetic testing to all individuals in a population regardless of family history",
        },
        {
          term: "antibody-drug conjugate",
          definition:
            "Targeted therapy linking antibody to cytotoxic drug for selective tumor delivery",
        },
        {
          term: "polθ inhibitor",
          definition:
            "Drug targeting polymerase theta; exploits alternative synthetic lethality in BRCA-deficient cells",
        },
      ],
      clinicalNotes: `Critical practice points:
1. All patients with ovarian cancer should be offered germline BRCA testing regardless of family history
2. Tumor BRCA testing recommended for treatment decisions in advanced cancers
3. Consider combination therapies for maintenance (e.g., olaparib + bevacizumab in HRD+ ovarian)
4. Address testing disparities through alternative delivery models
5. PGT-M is an option for mutation carriers wishing to prevent transmission
6. Encourage cascade testing - provide resources for family communication
7. HRT after RRSO generally appropriate until natural menopause age
8. Multidisciplinary teams optimize outcomes for complex decision-making`,
    },
  },

  media: [
    {
      id: "brca-dna-repair",
      type: "diagram",
      filename: "brca-dna-repair.svg",
      title: "BRCA in DNA Double-Strand Break Repair",
      description:
        "Diagram showing BRCA1 and BRCA2 roles in homologous recombination",
    },
    {
      id: "brca-cancer-risks",
      type: "diagram",
      filename: "brca-cancer-risks.svg",
      title: "BRCA-Associated Cancer Risks",
      description:
        "Visual comparison of cancer risks in BRCA1, BRCA2, and general population",
    },
    {
      id: "parp-synthetic-lethality",
      type: "diagram",
      filename: "parp-synthetic-lethality.svg",
      title: "PARP Inhibitor Synthetic Lethality",
      description:
        "Mechanism of PARP inhibitor activity in BRCA-deficient cells",
    },
  ],

  citations: [
    {
      id: "kuchenbaecker-2017",
      type: "article",
      title:
        "Risks of Breast, Ovarian, and Contralateral Breast Cancer for BRCA1 and BRCA2 Mutation Carriers",
      authors: ["Kuchenbaecker, K.B.", "et al."],
      source: "JAMA",
      chapter: "317",
      page: "2402-2416",
    },
    {
      id: "nccn-hboc",
      type: "website",
      title: "NCCN Guidelines: Genetic/Familial High-Risk Assessment: Breast, Ovarian, and Pancreatic",
      source: "National Comprehensive Cancer Network",
      url: "https://www.nccn.org",
    },
    {
      id: "lord-2016",
      type: "article",
      title: "PARP inhibitors: Synthetic lethality in the clinic",
      authors: ["Lord, C.J.", "Ashworth, A."],
      source: "Science",
      chapter: "355",
      page: "1152-1158",
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
      targetId: "concept-genetic-counseling-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Counseling",
    },
    {
      targetId: "concept-predictive-testing",
      targetType: "concept",
      relationship: "related",
      label: "Predictive Genetic Testing",
    },
  ],

  tags: {
    systems: ["genetics", "oncology", "gynecology"],
    topics: [
      "hereditary cancer",
      "BRCA",
      "breast cancer",
      "ovarian cancer",
      "PARP inhibitors",
    ],
    keywords: [
      "BRCA1",
      "BRCA2",
      "HBOC",
      "olaparib",
      "homologous recombination",
      "risk-reducing surgery",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "surgery", "obstetrics-gynecology"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default brcaContent;
