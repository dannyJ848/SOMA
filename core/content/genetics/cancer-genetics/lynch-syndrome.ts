/**
 * Lynch Syndrome - Comprehensive Educational Content
 *
 * Covers Lynch syndrome genetics, associated cancer risks, screening strategies,
 * and clinical management.
 */

import { EducationalContent } from "../../types";

export const lynchSyndromeContent: EducationalContent = {
  id: "concept-lynch-syndrome",
  type: "concept",
  name: "Lynch Syndrome",
  alternateNames: [
    "Hereditary Nonpolyposis Colorectal Cancer",
    "HNPCC",
    "Lynch Syndrome",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Lynch syndrome is an inherited condition that increases the risk of colon cancer and other cancers, especially at younger ages.",
      explanation: `Lynch syndrome is a genetic condition that runs in families. People with Lynch syndrome have a much higher chance of developing certain cancers, especially colon (bowel) cancer.

**How does it happen?**

Our bodies have special genes that work like "spell-checkers" for our DNA. These genes find and fix mistakes that happen when cells divide. In Lynch syndrome, one of these spell-checker genes does not work properly.

When mistakes in DNA are not fixed, they can build up over time. Eventually, these mistakes can cause cells to grow out of control and become cancer.

**What cancers are more common?**

- Colon cancer (most common) - up to 80% lifetime risk
- Uterine (endometrial) cancer - up to 60% lifetime risk in women
- Ovarian cancer
- Stomach cancer
- Urinary tract cancer
- Other cancers

**How is it inherited?**

If one parent has Lynch syndrome, each child has a 50% (1 in 2) chance of inheriting it. Both boys and girls can inherit and pass on Lynch syndrome.

**What can be done?**

People with Lynch syndrome should:
- Get colonoscopies more often, starting at a younger age
- Women may need additional screenings for uterine and ovarian cancer
- Some people choose to have surgery to prevent cancer
- Family members can be tested to see if they also have the gene change`,
      keyTerms: [
        {
          term: "Lynch syndrome",
          definition:
            "An inherited condition that increases the risk of colon cancer and other cancers",
        },
        {
          term: "colonoscopy",
          definition:
            "A test where a doctor looks inside the colon with a camera to find and remove polyps before they become cancer",
          pronunciation: "koh-lon-OSS-koh-pee",
        },
        {
          term: "polyp",
          definition:
            "A growth on the inside of the colon that can sometimes turn into cancer if not removed",
        },
        {
          term: "hereditary",
          definition: "Passed down from parents to children through genes",
        },
      ],
      analogies: [
        "The mismatch repair genes are like spell-checkers - when they do not work, mistakes in the DNA pile up like typos in a document.",
        "Lynch syndrome is like having a weaker defense system against cancer - the body cannot catch and fix DNA mistakes as well.",
        "Regular colonoscopies are like regular car inspections - catching small problems before they become big ones.",
      ],
      examples: [
        "A family where multiple relatives had colon cancer before age 50 might have Lynch syndrome.",
        "A woman with Lynch syndrome might have colonoscopies every 1-2 years instead of every 10 years.",
        "A person diagnosed with colon cancer at age 35 should be tested for Lynch syndrome.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Lynch syndrome is caused by germline mutations in mismatch repair genes (MLH1, MSH2, MSH6, PMS2) leading to microsatellite instability and significantly elevated cancer risks requiring intensive surveillance.",
      explanation: `Lynch syndrome is the most common hereditary colorectal cancer syndrome, accounting for 2-4% of all colorectal cancers.

**Genetic Basis:**

Lynch syndrome is caused by mutations in mismatch repair (MMR) genes:
- **MLH1** (chromosome 3) - most common
- **MSH2** (chromosome 2) - second most common
- **MSH6** (chromosome 2)
- **PMS2** (chromosome 7) - lowest penetrance
- **EPCAM** deletions (affect MSH2 expression)

**Cancer Risks by Gene:**

| Cancer | MLH1/MSH2 | MSH6 | PMS2 | General Pop |
|--------|-----------|------|------|-------------|
| Colorectal | 40-80% | 10-22% | 15-20% | 4.5% |
| Endometrial | 25-60% | 16-26% | 15% | 2.7% |
| Ovarian | 4-24% | 1-11% | 3% | 1.3% |
| Gastric | 1-13% | ≤3% | <3% | <1% |
| Urinary tract | 1-12% | <1% | <3% | <1% |

**How MMR Deficiency Causes Cancer:**

1. Normal MMR proteins fix DNA replication errors
2. Without functional MMR, errors accumulate
3. Microsatellites (repetitive DNA sequences) become unstable
4. Tumor suppressor genes may be inactivated
5. Cancer develops more rapidly

**Diagnosis:**

*Tumor Testing:*
- Immunohistochemistry (IHC) for MMR proteins
- Microsatellite instability (MSI) testing
- If abnormal → germline genetic testing

*Direct Germline Testing:*
- Indicated if strong family history
- Multi-gene panel testing increasingly used

**Surveillance Recommendations:**

- Colonoscopy every 1-2 years starting age 20-25
- Consider upper endoscopy every 3-5 years
- Women: Endometrial sampling, consider pelvic ultrasound
- Urinalysis annually

**Prevention Options:**

- Aspirin may reduce colorectal cancer risk
- Risk-reducing hysterectomy and oophorectomy after childbearing`,
      keyTerms: [
        {
          term: "mismatch repair",
          definition:
            "DNA repair system that corrects errors made during DNA replication",
          pronunciation: "MMR",
        },
        {
          term: "microsatellite instability",
          definition:
            "Changes in the length of repetitive DNA sequences due to defective mismatch repair",
          pronunciation: "MSI",
        },
        {
          term: "immunohistochemistry",
          definition:
            "Laboratory test using antibodies to detect specific proteins in tissue samples",
          pronunciation: "im-yoo-noh-his-toh-KEM-is-tree",
        },
        {
          term: "germline mutation",
          definition:
            "A genetic change present in every cell of the body, inherited from a parent",
        },
        {
          term: "penetrance",
          definition:
            "The proportion of people with a mutation who develop the associated condition",
        },
      ],
      analogies: [
        "MMR genes are like quality control inspectors on an assembly line - without them, defective products (mutations) slip through.",
        "Microsatellite instability is like a photocopier that cannot copy repetitive text correctly - the copies keep getting different lengths.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Lynch syndrome results from constitutional heterozygosity for MMR gene mutations, with tumorigenesis following Knudson two-hit model and producing MSI-H tumors with distinct molecular and immunological characteristics.",
      explanation: `## Molecular Pathogenesis

### Mismatch Repair System

**Core MMR Proteins:**
| Heterodimer | Components | Function |
|-------------|------------|----------|
| MutSα | MSH2 + MSH6 | Recognizes single base mismatches and small indels |
| MutSβ | MSH2 + MSH3 | Recognizes larger insertion/deletion loops |
| MutLα | MLH1 + PMS2 | Coordinates repair after mismatch recognition |
| MutLβ | MLH1 + PMS1 | Minor role in MMR |

**MMR Process:**
1. MutS heterodimer recognizes mismatch
2. MutL heterodimer recruited
3. PCNA and RFC loaded
4. Exonuclease 1 (EXO1) degrades error-containing strand
5. DNA polymerase δ resynthesizes
6. DNA ligase I seals

### Two-Hit Inactivation

**Germline (First Hit):**
- Heterozygous MMR gene mutation
- All cells carry one defective copy
- No cancer phenotype yet

**Somatic (Second Hit):**
- LOH, mutation, or promoter methylation
- Complete loss of MMR function
- MSI develops → accelerated mutation accumulation

### Microsatellite Instability

**Definition:** Alteration in microsatellite repeat length due to defective MMR

**Testing:**
| Panel | Markers | Classification |
|-------|---------|----------------|
| Bethesda | BAT25, BAT26, D2S123, D5S346, D17S250 | |
| MSI-H | ≥2 markers unstable | High instability |
| MSI-L | 1 marker unstable | Low instability |
| MSS | 0 markers unstable | Microsatellite stable |

**MSI-H Tumor Characteristics:**
- Right-sided colon preference
- Poorly differentiated
- Mucinous histology
- Tumor-infiltrating lymphocytes
- Better stage-for-stage prognosis
- Response to immune checkpoint inhibitors

## Diagnostic Approach

### Universal Tumor Testing

**EGAPP Recommendation:** Test all newly diagnosed colorectal cancers

**IHC Pattern Interpretation:**
| Pattern | Likely Gene |
|---------|-------------|
| MLH1/PMS2 loss | MLH1 (or MLH1 methylation) |
| MSH2/MSH6 loss | MSH2 or EPCAM |
| MSH6 loss only | MSH6 |
| PMS2 loss only | PMS2 |

**MLH1 Methylation Testing:**
- If MLH1/PMS2 loss on IHC
- Distinguishes sporadic (methylated) from Lynch (unmethylated)
- Also test BRAF V600E (positive = sporadic)

### Clinical Criteria

**Amsterdam II Criteria:**
- ≥3 relatives with Lynch-associated cancer
- One is first-degree relative of other two
- ≥2 successive generations
- ≥1 diagnosed <50 years
- FAP excluded

**Revised Bethesda Guidelines:**
- CRC <50 years
- Synchronous/metachronous Lynch cancers
- CRC with MSI-H histology <60 years
- CRC + first-degree relative with Lynch cancer <50 years
- CRC + ≥2 relatives with Lynch cancers at any age

## Gene-Specific Considerations

### EPCAM Deletions
- 3" deletions cause MSH2 promoter hypermethylation
- MSH2 silencing in EPCAM-expressing tissues
- Higher colorectal, lower endometrial cancer risk
- Requires deletion/duplication analysis`,
      keyTerms: [
        {
          term: "MutSα",
          definition:
            "MSH2-MSH6 heterodimer that recognizes DNA mismatches",
          pronunciation: "myoot-S-alpha",
        },
        {
          term: "MutLα",
          definition:
            "MLH1-PMS2 heterodimer that coordinates mismatch repair after recognition",
          pronunciation: "myoot-L-alpha",
        },
        {
          term: "microsatellite",
          definition:
            "Short repetitive DNA sequences (1-6 bp repeats); unstable when MMR is deficient",
        },
        {
          term: "BRAF V600E",
          definition:
            "Somatic mutation in BRAF gene; presence suggests sporadic rather than Lynch-associated tumor",
        },
        {
          term: "universal tumor testing",
          definition:
            "Strategy of testing all colorectal cancers for MMR deficiency regardless of clinical criteria",
        },
        {
          term: "tumor-infiltrating lymphocytes",
          definition:
            "Immune cells within tumor; increased in MSI-H tumors due to neoantigen load",
        },
      ],
      clinicalNotes:
        "Universal tumor testing identifies more Lynch syndrome cases than clinical criteria alone. Always check MLH1 methylation and BRAF status before attributing MLH1/PMS2 loss to germline mutation. PMS2 testing is technically challenging due to pseudogenes.",
    },
    4: {
      level: 4,
      summary:
        "Advanced Lynch syndrome management encompasses variant interpretation challenges, immunotherapy responsiveness, chemoprevention evidence, and surveillance optimization based on gene-specific and personalized risk assessment.",
      explanation: `## Variant Interpretation Complexity

### Gene-Specific Challenges

**PMS2:**
- Multiple pseudogenes complicate testing
- Long-range PCR or specialized methods required
- Lower penetrance may affect classification

**MSH6:**
- Later onset cancer risk
- Higher endometrial:colorectal cancer ratio
- May not meet Amsterdam criteria

### Variant Classification

**InSiGHT Consortium:**
- MMR gene-specific classification criteria
- Functional assay integration
- International collaboration

**Challenging Variants:**
| Type | Approach |
|------|----------|
| Missense | Functional assays, tumor MMR status |
| Splice site | RNA studies, minigene assays |
| Large deletions | MLPA, array CGH |
| Promoter | Methylation studies |

### Constitutional MLH1 Methylation (Epimutation)

**Characteristics:**
- Soma-wide MLH1 methylation
- Can be heritable or de novo
- Variable penetrance
- May reset between generations

## Immunotherapy in Lynch Syndrome

### Mechanism

MSI-H tumors have high neoantigen burden:
1. Frameshift mutations in coding microsatellites
2. Novel peptides presented by MHC
3. Enhanced T-cell recognition
4. Response to checkpoint blockade

### Clinical Evidence

**KEYNOTE-177:**
- Pembrolizumab vs. chemotherapy in MSI-H mCRC
- Superior PFS with pembrolizumab
- First-line approval

**CheckMate 142:**
- Nivolumab ± ipilimumab
- High response rates in MSI-H mCRC

### Emerging Applications

- Neoadjuvant immunotherapy
- Non-colorectal Lynch cancers
- Potential for organ preservation

## Chemoprevention

### Aspirin

**CAPP2 Trial:**
- 600 mg aspirin daily × 2 years
- 63% colorectal cancer reduction (long-term follow-up)
- Benefit apparent after ~4 years

**CaPP3 Trial:**
- Dose-finding study
- 100 mg vs. 300 mg vs. 600 mg
- Results pending

**Current Recommendation:**
- Consider aspirin for CRC prevention
- Optimal dose not established
- Balance against bleeding risk

### Other Agents

- Resistant starch (under investigation)
- NSAIDs (less evidence than aspirin)

## Advanced Surveillance

### Colonoscopy Optimization

**Chromoendoscopy:**
- Dye-spray technique
- May improve flat adenoma detection
- Recommended in European guidelines

**Interval:**
- 1-2 years standard
- May extend to 2-3 years with high-quality exams

### Endometrial Surveillance

**Options:**
| Method | Sensitivity | Considerations |
|--------|-------------|----------------|
| Transvaginal US | Variable | Operator dependent |
| Endometrial biopsy | High | Requires procedure |
| Hysteroscopy | Highest | Most invasive |

**Current Evidence:**
- No proven mortality benefit
- Shared decision-making recommended

### Urinary Tract

- Annual urinalysis
- Consider cytology
- Ultrasound if hematuria

### Upper GI

- EGD every 3-5 years
- H. pylori testing and treatment
- More frequent in Asian populations

## Risk-Reducing Surgery

### Gynecologic

**Hysterectomy + BSO:**
- Highly effective for uterine cancer prevention
- Consider after childbearing complete
- Earlier for MLH1/MSH2 vs. MSH6/PMS2

### Colorectal

**Subtotal Colectomy:**
- Consider at time of CRC diagnosis
- Reduces metachronous cancer risk
- Balanced against quality of life

## Reproductive Options

- Preimplantation genetic testing (PGT-M)
- Prenatal diagnosis available
- Genetic counseling for family planning`,
      keyTerms: [
        {
          term: "neoantigen",
          definition:
            "Novel protein fragment resulting from tumor mutations; recognized by immune system",
        },
        {
          term: "constitutional epimutation",
          definition:
            "Heritable epigenetic change (methylation) affecting gene expression without DNA sequence change",
        },
        {
          term: "checkpoint inhibitor",
          definition:
            "Immunotherapy drug releasing brakes on T-cell anti-tumor response (e.g., pembrolizumab)",
        },
        {
          term: "chromoendoscopy",
          definition:
            "Colonoscopy technique using dye spray to enhance visualization of flat lesions",
        },
        {
          term: "InSiGHT",
          definition:
            "International Society for Gastrointestinal Hereditary Tumours; develops MMR variant classification",
        },
        {
          term: "metachronous cancer",
          definition:
            "Second primary cancer developing at different time from first",
        },
      ],
      clinicalNotes:
        "MSI-H/dMMR is a tumor-agnostic biomarker for pembrolizumab. Consider aspirin chemoprevention for all Lynch syndrome patients after discussing risks. Gene-specific management increasingly important - MSH6/PMS2 carriers may have later surveillance initiation and lower-risk surgery decisions.",
    },
    5: {
      level: 5,
      summary:
        "Contemporary Lynch syndrome care integrates universal tumor testing programs, precision immunotherapy approaches, polygenic risk modification, and health system implementation strategies for cascade testing optimization.",
      explanation: `## Universal Testing Implementation

### Health System Programs

**Implementation Strategies:**
| Model | Description | Advantages |
|-------|-------------|------------|
| Pathology-based | Reflex IHC on all CRC | Systematic, high uptake |
| Genetic counselor-led | GC review all results | Expert interpretation |
| Mainstreaming | Oncologist-ordered testing | Faster, scalable |

**Key Metrics:**
- IHC completion rate (>95% target)
- Germline testing uptake after abnormal IHC
- Time from surgery to genetic result
- Cascade testing rate

### Expansion Beyond CRC

**Endometrial Cancer:**
- Universal testing increasingly recommended
- May identify Lynch before CRC
- Similar workflow to CRC

**Other Lynch Cancers:**
- Ovarian: Consider testing
- Upper GI: Selective testing
- Sebaceous neoplasms: Muir-Torre variant

## Precision Immunotherapy

### Biomarker Integration

**MSI vs. dMMR:**
- High concordance (~95%)
- Occasional discordance
- Both predictive of checkpoint response

**TMB (Tumor Mutational Burden):**
- MSI-H tumors typically TMB-high
- TMB-high but MSS may also respond
- Complementary biomarkers

### Neoadjuvant Approaches

**NICHE Trial:**
- Neoadjuvant ipilimumab + nivolumab
- dMMR tumors: 100% pathologic response
- Potential for organ preservation

**Ongoing Studies:**
- Single-agent checkpoint inhibitors
- Optimal duration
- Long-term outcomes

### Resistance Mechanisms

| Mechanism | Frequency | Potential Approach |
|-----------|-----------|-------------------|
| B2M loss | ~30% | Limits MHC-I presentation |
| JAK1/2 mutations | ~15% | Impairs IFN-γ response |
| Antigen loss | Variable | Alternative targets |

## Polygenic Risk Modification

### SNP-Based Risk Scores

**Concept:**
- Common variants modify penetrance
- Gene-specific scores under development
- May guide surveillance intensity

**Current Status:**
- Research tool
- Not yet clinical standard
- Validation studies ongoing

### Clinical Integration

- Combine with MMR gene and mutation type
- Family history remains important
- Decision support tools in development

## Cascade Testing Optimization

### Barriers to Testing

| Barrier | Intervention |
|---------|--------------|
| Family communication | Templated letters, direct contact |
| Access to counseling | Telehealth, alternative models |
| Insurance concerns | Patient navigation, cost transparency |
| Geographic | Decentralized testing options |

### Direct Contact Programs

**Evidence:**
- Higher uptake vs. proband-mediated
- Privacy considerations
- Opt-out models

### Digital Health Tools

- Risk assessment apps
- Family sharing platforms
- Result delivery systems

## Special Populations

### Pediatric Considerations

**CMMRD (Constitutional MMR Deficiency):**
- Biallelic MMR mutations
- Childhood cancers (brain, hematologic)
- Cafe-au-lait spots
- Requires surveillance from early childhood

### Diverse Populations

**Challenges:**
- Higher VUS rates
- Variant databases less complete
- Access disparities

**Solutions:**
- Population-specific research
- Database diversification
- Community engagement

## Future Directions

### Liquid Biopsy Applications

- Early detection of Lynch cancers
- Surveillance augmentation
- ctDNA monitoring post-treatment

### Prevention Trials

**CaPP3:**
- Aspirin dose optimization
- Ongoing enrollment

**Resistant Starch:**
- Targeting microbiome
- Preclinical promise

### Vaccine Strategies

- Frameshift neoantigen vaccines
- Preventive setting
- Early clinical development

## Quality Assurance

### Registry Development

- Population-based registries
- Outcome tracking
- Research facilitation

### Guidelines Integration

**NCCN Updates:**
- Annual review
- Gene-specific recommendations
- Variant interpretation guidance

**European Guidelines:**
- Chromoendoscopy emphasis
- Aspirin recommendation

### Provider Education

- Recognizing Lynch syndrome
- Testing workflows
- Variant interpretation
- Management protocols`,
      keyTerms: [
        {
          term: "CMMRD",
          definition:
            "Constitutional Mismatch Repair Deficiency; biallelic MMR mutations causing childhood cancers",
          pronunciation: "C-M-M-R-D",
        },
        {
          term: "tumor mutational burden",
          definition:
            "Number of somatic mutations per megabase; high TMB correlates with immunotherapy response",
          pronunciation: "TMB",
        },
        {
          term: "direct contact",
          definition:
            "Genetic counselor-initiated contact with at-risk relatives for cascade testing",
        },
        {
          term: "mainstreaming",
          definition:
            "Non-genetics specialists ordering and managing genetic testing",
        },
        {
          term: "NICHE trial",
          definition:
            "Neoadjuvant immunotherapy study showing excellent responses in dMMR colorectal cancer",
        },
        {
          term: "B2M loss",
          definition:
            "Beta-2-microglobulin loss; resistance mechanism to checkpoint inhibitors",
        },
      ],
      clinicalNotes: `Clinical implementation priorities:
1. Advocate for universal tumor testing programs in your institution
2. MSI-H/dMMR status guides first-line therapy selection in metastatic CRC
3. Consider neoadjuvant immunotherapy for rectal cancer with dMMR (clinical trials)
4. Gene-specific counseling: MSH6/PMS2 carriers have different risk profiles
5. Aspirin chemoprevention should be discussed with all Lynch syndrome patients
6. Implement systematic cascade testing with dedicated resources
7. Screen for CMMRD in families with childhood cancers and consanguinity
8. Stay current with rapidly evolving immunotherapy landscape`,
    },
  },

  media: [
    {
      id: "mmr-pathway",
      type: "diagram",
      filename: "mismatch-repair-pathway.svg",
      title: "Mismatch Repair Pathway",
      description:
        "Molecular mechanism of DNA mismatch repair with MMR protein roles",
    },
    {
      id: "lynch-ihc-patterns",
      type: "diagram",
      filename: "lynch-ihc-patterns.svg",
      title: "IHC Staining Patterns in Lynch Syndrome",
      description:
        "Immunohistochemistry patterns indicating different MMR gene deficiencies",
    },
    {
      id: "lynch-surveillance",
      type: "diagram",
      filename: "lynch-surveillance-timeline.svg",
      title: "Lynch Syndrome Surveillance Timeline",
      description:
        "Age-based screening recommendations for Lynch syndrome carriers",
    },
  ],

  citations: [
    {
      id: "lynch-2015",
      type: "article",
      title:
        "Milestones of Lynch syndrome: 1895-2015",
      authors: ["Lynch, H.T.", "Snyder, C.L.", "Shaw, T.G.", "et al."],
      source: "Nature Reviews Cancer",
      chapter: "15",
      page: "181-194",
    },
    {
      id: "burn-2020",
      type: "article",
      title:
        "Cancer prevention with aspirin in hereditary colorectal cancer (Lynch syndrome)",
      authors: ["Burn, J.", "Sheth, H.", "Elliott, F.", "et al."],
      source: "Lancet",
      chapter: "395",
      page: "1855-1863",
    },
    {
      id: "nccn-lynch",
      type: "website",
      title: "NCCN Guidelines: Genetic/Familial High-Risk Assessment: Colorectal",
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
      targetId: "concept-genetic-testing-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Testing",
    },
    {
      targetId: "concept-hereditary-cancer-syndromes",
      targetType: "concept",
      relationship: "sibling",
      label: "Hereditary Cancer Syndromes",
    },
  ],

  tags: {
    systems: ["genetics", "oncology", "gastroenterology"],
    topics: [
      "hereditary cancer",
      "Lynch syndrome",
      "colorectal cancer",
      "mismatch repair",
    ],
    keywords: [
      "MLH1",
      "MSH2",
      "MSH6",
      "PMS2",
      "microsatellite instability",
      "immunotherapy",
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

export default lynchSyndromeContent;
