/**
 * Cancer Genetics Overview - Comprehensive Educational Content
 *
 * Covers the fundamentals of cancer genetics including oncogenes,
 * tumor suppressors, hereditary cancer syndromes, and genetic testing.
 */

import { EducationalContent } from "../../types";

export const cancerGeneticsOverviewContent: EducationalContent = {
  id: "concept-cancer-genetics-overview",
  type: "concept",
  name: "Cancer Genetics Overview",
  alternateNames: ["Oncogenetics", "Hereditary Cancer", "Cancer Genomics"],

  levels: {
    1: {
      level: 1,
      summary:
        "Cancer genetics studies how changes in genes can cause cancer and how some cancers can run in families.",
      explanation: `Cancer is a disease where cells grow out of control. Our genes normally tell cells when to grow, when to stop, and when to die. When genes get damaged or changed, they can stop working properly and cells might start growing when they should not.

Most cancers happen because of gene changes that occur during a person"s lifetime - from things like sun damage, smoking, or just random mistakes when cells divide. These are called "acquired" or "sporadic" cancers.

However, some people are born with gene changes that make them more likely to get certain types of cancer. These run in families and are called "hereditary" cancers. About 5-10% of all cancers are hereditary.

**Two main types of genes involved in cancer:**

1. **Genes that push cells to grow** - When these get stuck in the "on" position, cells keep dividing
2. **Genes that stop cells from growing** - When these stop working, there is no brake to stop cell growth

If someone in your family had cancer at a young age, or if several family members had the same type of cancer, there might be a hereditary gene change in your family. Genetic testing can sometimes find these changes.`,
      keyTerms: [
        {
          term: "hereditary cancer",
          definition:
            "Cancer that runs in families because of a gene change passed from parent to child",
        },
        {
          term: "sporadic cancer",
          definition:
            "Cancer caused by gene changes that happen during a person\"s lifetime, not inherited",
        },
        {
          term: "gene change",
          definition:
            "An alteration in the DNA instructions that can affect how cells work",
        },
        {
          term: "genetic testing",
          definition:
            "A medical test that looks for changes in genes that might increase cancer risk",
        },
      ],
      analogies: [
        "Genes are like instruction manuals - when pages are torn or misprinted, the instructions do not work correctly.",
        "Cancer-causing gene changes are like a car with a stuck gas pedal or broken brakes - the car keeps going when it should stop.",
        "Hereditary cancer genes are like a spelling mistake in a recipe book that gets passed down to children when the book is copied.",
      ],
      examples: [
        "BRCA1 and BRCA2 gene changes can increase the risk of breast and ovarian cancer.",
        "Lynch syndrome increases the risk of colon cancer and other cancers.",
        "A family where multiple women had breast cancer before age 50 might have a hereditary cancer gene.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Cancer genetics encompasses oncogenes, tumor suppressor genes, DNA repair genes, and hereditary cancer syndromes, with implications for screening, prevention, and targeted therapy.",
      explanation: `Cancer develops when the normal controls on cell growth and death are disrupted. This occurs through genetic changes that affect specific types of genes.

**Types of Cancer-Related Genes:**

1. **Oncogenes**
   - Normal versions (proto-oncogenes) promote cell growth
   - When mutated, they become permanently "on"
   - Only one copy needs to be mutated (dominant)
   - Examples: RAS, HER2, MYC

2. **Tumor Suppressor Genes**
   - Normal function: Stop cell growth, repair DNA, trigger cell death
   - Both copies usually need to be inactivated (recessive)
   - "Two-hit hypothesis" explains hereditary cases
   - Examples: TP53, RB1, APC, BRCA1/2

3. **DNA Repair Genes**
   - Fix mistakes in DNA
   - When defective, mutations accumulate
   - Examples: MLH1, MSH2 (mismatch repair), BRCA1/2 (homologous recombination)

**Hereditary vs. Sporadic Cancer:**

| Feature | Hereditary | Sporadic |
|---------|------------|----------|
| Frequency | 5-10% of cancers | 90-95% of cancers |
| Inheritance | Born with one mutated gene | Mutations acquired over lifetime |
| Age of onset | Often younger | Usually older |
| Multiple tumors | More common | Less common |
| Family history | Strong pattern | Usually absent |

**Hereditary Cancer Syndromes:**

- Hereditary Breast and Ovarian Cancer (BRCA1/2)
- Lynch Syndrome (MLH1, MSH2, MSH6, PMS2)
- Li-Fraumeni Syndrome (TP53)
- Familial Adenomatous Polyposis (APC)

**Clinical Implications:**

Identifying hereditary cancer allows for:
- Enhanced cancer screening
- Risk-reducing surgeries
- Targeted therapies (e.g., PARP inhibitors for BRCA)
- Cascade testing of family members`,
      keyTerms: [
        {
          term: "oncogene",
          definition:
            "A gene that promotes cell growth; when mutated, drives cancer development",
          pronunciation: "ON-koh-jeen",
        },
        {
          term: "tumor suppressor gene",
          definition:
            "A gene that normally prevents cancer by controlling cell growth; cancer develops when both copies are inactivated",
        },
        {
          term: "two-hit hypothesis",
          definition:
            "Theory that both copies of a tumor suppressor gene must be inactivated for cancer to develop",
        },
        {
          term: "hereditary cancer syndrome",
          definition:
            "A genetic condition that significantly increases the risk of developing certain cancers",
        },
        {
          term: "cascade testing",
          definition:
            "Testing family members for a known genetic variant after it is identified in one person",
        },
      ],
      analogies: [
        "Oncogenes are like a car\"s gas pedal stuck to the floor - the cell keeps growing uncontrollably.",
        "Tumor suppressors are like brakes - without them, nothing stops the cell from dividing.",
        "The two-hit hypothesis is like needing both goalies removed before the opposing team can easily score.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Cancer genetics involves multi-step tumorigenesis through accumulated genetic and epigenetic alterations affecting oncogenes, tumor suppressors, and genome stability genes, with hereditary syndromes following Mendelian inheritance patterns.",
      explanation: `## Molecular Basis of Cancer

### Multi-Step Carcinogenesis

Cancer development requires multiple genetic alterations:
1. **Initiation**: First mutation in a critical gene
2. **Promotion**: Clonal expansion of initiated cells
3. **Progression**: Accumulation of additional mutations
4. **Metastasis**: Acquisition of invasive capabilities

### Oncogene Activation Mechanisms

| Mechanism | Example | Result |
|-----------|---------|--------|
| Point mutation | KRAS G12V | Constitutive signaling |
| Gene amplification | HER2 | Protein overexpression |
| Chromosomal translocation | BCR-ABL | Novel fusion protein |
| Promoter insertion | MYC | Increased transcription |

### Tumor Suppressor Inactivation

**Knudson"s Two-Hit Hypothesis:**
- Hereditary: Born with one hit (germline mutation), second hit somatic
- Sporadic: Both hits are somatic (less likely, later onset)

**Mechanisms of Inactivation:**
- Point mutations
- Deletions (LOH - loss of heterozygosity)
- Promoter methylation (epigenetic silencing)
- Structural rearrangements

### DNA Repair Pathways in Cancer

| Pathway | Genes | Cancer Association |
|---------|-------|-------------------|
| Mismatch repair (MMR) | MLH1, MSH2, MSH6, PMS2 | Lynch syndrome, colorectal |
| Homologous recombination | BRCA1, BRCA2 | Breast, ovarian, pancreatic |
| Nucleotide excision repair | XPA, XPC | Xeroderma pigmentosum, skin cancer |
| Base excision repair | MUTYH | MUTYH-associated polyposis |

### Hereditary Cancer Syndrome Genetics

**Autosomal Dominant:**
- BRCA1/2 - Breast/ovarian cancer
- TP53 - Li-Fraumeni syndrome
- APC - Familial adenomatous polyposis
- RB1 - Retinoblastoma
- VHL - Von Hippel-Lindau

**Autosomal Recessive:**
- MUTYH-associated polyposis
- Fanconi anemia
- Ataxia-telangiectasia

### Penetrance and Genetic Modifiers

Penetrance varies by:
- Specific mutation (pathogenic variant)
- Genetic background (modifier genes)
- Environmental factors
- Hormonal factors (for hormone-sensitive cancers)

**Example BRCA1 penetrance:**
| Cancer | Lifetime Risk |
|--------|---------------|
| Breast | 55-70% |
| Ovarian | 40-45% |
| Prostate (males) | Elevated |
| Pancreatic | Elevated |`,
      keyTerms: [
        {
          term: "loss of heterozygosity",
          definition:
            "Loss of the normal allele of a tumor suppressor gene, leaving only the mutated copy",
          pronunciation: "het-er-oh-zy-GOS-i-tee",
        },
        {
          term: "multi-step carcinogenesis",
          definition:
            "The process by which cancer develops through accumulation of multiple genetic alterations",
        },
        {
          term: "epigenetic silencing",
          definition:
            "Inactivation of genes through chemical modifications like DNA methylation rather than DNA sequence changes",
        },
        {
          term: "homologous recombination",
          definition:
            "DNA repair mechanism using sister chromatid as template; defective in BRCA-mutated cancers",
        },
        {
          term: "mismatch repair",
          definition:
            "DNA repair pathway correcting base pairing errors; defective in Lynch syndrome",
        },
        {
          term: "clonal expansion",
          definition:
            "Growth of a population of cells derived from a single mutated cell",
        },
      ],
      clinicalNotes:
        "Loss of heterozygosity (LOH) at tumor suppressor loci is common in hereditary cancer syndromes. Somatic tumor testing for LOH can support pathogenicity of germline VUS. Microsatellite instability (MSI) testing identifies tumors with defective mismatch repair.",
    },
    4: {
      level: 4,
      summary:
        "Advanced cancer genetics integrates genomic instability mechanisms, driver vs. passenger mutations, synthetic lethality-based therapies, and precision oncology approaches guided by comprehensive tumor profiling.",
      explanation: `## Genomic Instability in Cancer

### Types of Genomic Instability

**Chromosomal Instability (CIN):**
- Gains and losses of whole chromosomes or arms
- Defects in mitotic checkpoint, centrosome function
- Results in aneuploidy
- Common in many solid tumors

**Microsatellite Instability (MSI):**
- Alterations in repetitive DNA sequences
- Caused by defective mismatch repair (dMMR)
- MSI-High: ≥30% unstable loci or 2+ markers
- Predicts response to immunotherapy

**Homologous Recombination Deficiency (HRD):**
- Inability to repair double-strand breaks accurately
- BRCA1/2 and related gene mutations
- Results in specific mutational signatures
- Predicts PARP inhibitor sensitivity

### Driver vs. Passenger Mutations

| Feature | Driver Mutations | Passenger Mutations |
|---------|------------------|---------------------|
| Function | Promote cancer development | No selective advantage |
| Frequency | Recurrent across tumors | Random distribution |
| Selection | Positive selection | Neutral |
| Clinical relevance | Therapeutic targets | Background noise |

### Mutational Signatures

Pattern of mutations reflecting underlying etiology:
- **Signature 1**: Age-related (spontaneous deamination)
- **Signature 2/13**: APOBEC activity
- **Signature 3**: HRD (BRCA deficiency)
- **Signature 4**: Tobacco smoking
- **Signature 6/15**: MMR deficiency
- **Signature 7**: UV exposure

### Synthetic Lethality in Cancer Therapy

**Principle**: Two gene defects together are lethal, but individually tolerated

**PARP Inhibitors and BRCA:**
1. HRD tumors rely on PARP for DNA repair
2. PARP inhibition → stalled replication forks
3. Without HR, cells accumulate lethal DNA damage
4. Selective killing of BRCA-deficient cells

**Approved PARP Inhibitors:**
- Olaparib
- Rucaparib
- Niraparib
- Talazoparib

### Comprehensive Genomic Profiling

**Tumor Profiling:**
- Next-generation sequencing panels (100s of genes)
- Whole exome/genome sequencing
- RNA sequencing for fusions
- Copy number analysis

**Germline Implications:**
- 4-18% of patients have actionable germline findings
- "Tumor-first" testing increasingly identifies hereditary cancer
- Confirmatory germline testing required

### Variant Classification in Somatic Testing

| Category | Interpretation |
|----------|---------------|
| Tier I | Strong clinical significance |
| Tier II | Potential clinical significance |
| Tier III | Unknown significance |
| Tier IV | Benign or likely benign |

### Liquid Biopsy Applications

**Circulating Tumor DNA (ctDNA):**
- Non-invasive tumor profiling
- Treatment response monitoring
- Minimal residual disease detection
- Resistance mutation identification`,
      keyTerms: [
        {
          term: "synthetic lethality",
          definition:
            "Genetic interaction where defects in two genes together cause cell death, but either alone is tolerated",
        },
        {
          term: "PARP inhibitor",
          definition:
            "Drug exploiting synthetic lethality to kill HRD tumor cells by blocking alternative DNA repair",
        },
        {
          term: "mutational signature",
          definition:
            "Characteristic pattern of mutations reflecting specific mutagenic process or repair deficiency",
        },
        {
          term: "driver mutation",
          definition:
            "Mutation providing selective growth advantage and contributing to cancer development",
        },
        {
          term: "homologous recombination deficiency",
          definition:
            "Inability to repair double-strand DNA breaks accurately; predicts PARP inhibitor response",
          pronunciation: "hoh-MOL-oh-gus",
        },
        {
          term: "circulating tumor DNA",
          definition:
            "Tumor-derived DNA fragments in bloodstream; used for non-invasive cancer profiling",
        },
      ],
      clinicalNotes:
        "All patients with high-grade serous ovarian cancer should be offered BRCA testing (somatic and germline) regardless of family history. MSI-high/dMMR tumors predict immunotherapy response across cancer types. HRD scores from genomic scarring can identify PARP inhibitor candidates beyond BRCA.",
    },
    5: {
      level: 5,
      summary:
        "Clinical cancer genetics practice encompasses comprehensive risk assessment, multi-gene panel interpretation, evolving NCCN guidelines, implementation of polygenic risk scores, and integration of tumor-normal sequencing for personalized management.",
      explanation: `## Clinical Risk Assessment

### Hereditary Cancer Syndrome Criteria

**NCCN Criteria for Genetic Testing (Examples):**

**Breast Cancer:**
- ≤45 years at diagnosis
- ≤50 years with additional primary or family history
- Triple-negative breast cancer ≤60 years
- Male breast cancer
- Ashkenazi Jewish ancestry with breast/ovarian/pancreatic cancer
- Known family mutation

**Colorectal Cancer:**
- Any Lynch-associated tumor with MSI-H/dMMR
- ≤50 years at diagnosis
- ≥10 adenomatous polyps lifetime
- Meeting Amsterdam or Bethesda criteria

### Multi-Gene Panel Testing

**Advantages:**
- Identifies mutations in moderate-penetrance genes
- Cost-effective vs. sequential testing
- May explain phenotype not fitting classic syndromes

**Challenges:**
- Higher VUS rate
- Genes with uncertain management guidelines
- Incidental findings in lower-penetrance genes

**Commonly Included Genes:**

| Risk Level | Genes | Lifetime Breast Cancer Risk |
|------------|-------|----------------------------|
| High | BRCA1, BRCA2, TP53, PTEN | >40-60% |
| Moderate | ATM, CHEK2, PALB2 | 20-40% |
| Possibly elevated | BARD1, RAD51C/D, others | Under study |

### Variant Interpretation Challenges

**Criteria for Pathogenicity (ACMG/AMP):**
- Population frequency
- Computational predictions
- Functional studies
- Segregation data
- De novo status
- Literature reports

**VUS Management:**
- Do not change management based on VUS
- Consider functional assays/tumor testing
- Periodic reclassification
- Family segregation studies

### Polygenic Risk Scores (PRS)

**Concept**: Aggregate effect of common low-risk variants

**Applications:**
- Refine risk for monogenic mutation carriers
- Population-level breast cancer screening stratification
- Combined with clinical risk models

**Limitations:**
- Primarily validated in European populations
- Not yet standard of care
- Require careful clinical interpretation

## Management Implications

### Risk-Reducing Strategies by Syndrome

**BRCA1/2:**
| Intervention | Benefit |
|-------------|---------|
| Risk-reducing mastectomy | ~95% breast cancer risk reduction |
| Risk-reducing salpingo-oophorectomy | 80% ovarian, 50% breast risk reduction |
| Enhanced screening | Earlier detection if surgery declined |
| Chemoprevention | Tamoxifen option for some |

**Lynch Syndrome:**
- Colonoscopy every 1-2 years from age 20-25
- Consider aspirin chemoprevention
- Hysterectomy/BSO after childbearing
- Annual endometrial sampling option

### Tumor-Normal Sequencing Integration

**Workflow:**
1. Tumor genomic profiling
2. Identify actionable alterations
3. Filter potential germline variants
4. Confirm with dedicated germline testing
5. Genetic counseling for positive results

**Germline Variant Detection in Tumors:**
- Present at ~50% VAF
- Present in normal tissue comparison
- Confirm with constitutional sample

### Emerging Clinical Applications

**ctDNA Monitoring:**
- Post-treatment surveillance
- Lead time over imaging
- Molecular residual disease

**Therapeutic Matching:**
| Finding | Therapy Implication |
|---------|---------------------|
| BRCA1/2 mutation | PARP inhibitor |
| MSI-H/dMMR | Pembrolizumab |
| NTRK fusion | Larotrectinib/entrectinib |
| HER2 amplification | Anti-HER2 therapy |

### Insurance and Access Considerations

**Coverage:**
- Most insurers cover guideline-based testing
- Prior authorization often required
- Self-pay options increasingly available

**Laboratory Selection:**
- CLIA certification
- Data sharing policies
- VUS reclassification programs
- Turnaround time

**Documentation Requirements:**
- Personal cancer history
- Detailed family history
- Prior genetic testing results
- Medical necessity justification`,
      keyTerms: [
        {
          term: "polygenic risk score",
          definition:
            "Aggregate measure of genetic risk based on multiple common low-effect variants",
        },
        {
          term: "multi-gene panel",
          definition:
            "Genetic test analyzing multiple genes simultaneously for hereditary cancer risk",
        },
        {
          term: "NCCN guidelines",
          definition:
            "National Comprehensive Cancer Network evidence-based recommendations for cancer management",
        },
        {
          term: "risk-reducing surgery",
          definition:
            "Prophylactic removal of at-risk organs in high-risk genetic mutation carriers",
        },
        {
          term: "variant of uncertain significance",
          definition:
            "Genetic variant with insufficient evidence to classify as pathogenic or benign",
          pronunciation: "VUS",
        },
        {
          term: "tumor-normal sequencing",
          definition:
            "Comparing tumor genomic profile to normal tissue to identify somatic vs. germline variants",
        },
      ],
      clinicalNotes: `Current clinical recommendations:
1. All ovarian cancer patients should receive genetic counseling/testing
2. Consider panel testing over single-gene for most hereditary cancer evaluations
3. Proactive family communication supported by genetic counseling
4. Periodic VUS reclassification monitoring recommended
5. Germline confirmation required for all presumed germline variants found on tumor testing
6. PRS not yet incorporated into standard risk models but rapidly evolving
7. Coordinate with oncology for therapy-relevant findings`,
    },
  },

  media: [
    {
      id: "cancer-genetics-overview-diagram",
      type: "diagram",
      filename: "cancer-genetics-overview.svg",
      title: "Cancer Genetics Overview",
      description:
        "Diagram showing oncogenes, tumor suppressors, and multi-step carcinogenesis",
    },
    {
      id: "two-hit-hypothesis",
      type: "diagram",
      filename: "two-hit-hypothesis.svg",
      title: "Two-Hit Hypothesis",
      description:
        "Illustration of Knudson two-hit model for tumor suppressor inactivation",
    },
  ],

  citations: [
    {
      id: "hanahan-2011",
      type: "article",
      title: "Hallmarks of Cancer: The Next Generation",
      authors: ["Hanahan, D.", "Weinberg, R.A."],
      source: "Cell",
      chapter: "144",
      page: "646-674",
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
      targetId: "concept-brca",
      targetType: "concept",
      relationship: "child",
      label: "BRCA1/2 and Hereditary Breast-Ovarian Cancer",
    },
    {
      targetId: "concept-lynch-syndrome",
      targetType: "concept",
      relationship: "child",
      label: "Lynch Syndrome",
    },
    {
      targetId: "concept-genetic-testing-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Testing",
    },
  ],

  tags: {
    systems: ["genetics", "oncology"],
    topics: ["cancer genetics", "hereditary cancer", "genetic testing"],
    keywords: [
      "oncogene",
      "tumor suppressor",
      "BRCA",
      "Lynch syndrome",
      "hereditary cancer",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "surgery"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default cancerGeneticsOverviewContent;
