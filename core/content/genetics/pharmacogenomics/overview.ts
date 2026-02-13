/**
 * Pharmacogenomics Overview - Comprehensive Educational Content
 *
 * Covers the principles of pharmacogenomics, drug metabolism pathways,
 * and clinical implementation of genetic testing for medication management.
 */

import { EducationalContent } from "../../types";

export const pharmacogenomicsOverviewContent: EducationalContent = {
  id: "concept-pharmacogenomics-overview",
  type: "concept",
  name: "Pharmacogenomics Overview",
  alternateNames: [
    "Pharmacogenetics",
    "PGx",
    "Drug-Gene Testing",
    "Personalized Medicine",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Pharmacogenomics studies how your genes affect how medicines work in your body, helping doctors choose the right medication and dose for you.",
      explanation: `Have you ever wondered why a medicine that works great for your friend does not work well for you? Or why you got bad side effects from a drug that others take without problems? The answer might be in your genes.

**What is pharmacogenomics?**

Pharmacogenomics (sometimes called "PGx") looks at how genetic differences affect the way your body handles medicines. Your genes can influence:

- How fast your body breaks down (processes) a drug
- How well a drug works for you
- Whether you are likely to have side effects

**How does it work?**

When you take a medicine, your body needs to process it. Enzymes in your liver and other organs break down drugs so your body can use them or get rid of them. Genes control how these enzymes work.

Some people have genes that make their enzymes work:
- **Very fast** (rapid metabolizers) - the drug might not work because it leaves the body too quickly
- **Normal speed** (normal metabolizers) - the drug usually works as expected
- **Slowly** (poor metabolizers) - the drug stays in the body longer and might cause more side effects

**Why does this matter?**

With a simple genetic test, doctors can learn:
- Which medications might work best for you
- What dose you might need
- Which medications to avoid because they might cause problems

**Examples:**

- Some pain medications do not work in people with certain gene variants
- Some people need much higher or lower doses of blood thinners based on their genes
- Certain genes can predict severe reactions to specific drugs`,
      keyTerms: [
        {
          term: "pharmacogenomics",
          definition:
            "The study of how genes affect a person\"s response to medications",
          pronunciation: "far-muh-koh-jeh-NOH-miks",
        },
        {
          term: "enzyme",
          definition:
            "A protein that helps chemical reactions happen in your body, including breaking down medicines",
        },
        {
          term: "metabolizer",
          definition:
            "How fast your body breaks down a drug - can be poor, normal, or rapid",
        },
        {
          term: "gene variant",
          definition:
            "A difference in a gene that can change how proteins in your body work",
        },
      ],
      analogies: [
        "Pharmacogenomics is like finding the right key for a lock - genes help determine which medication \"fits\" your body best.",
        "Drug enzymes are like food processors - some run fast, some slow, and this affects how quickly medicine is broken down.",
        "A genetic test for medications is like getting a personalized user manual for how your body handles drugs.",
      ],
      examples: [
        "A genetic test might show that codeine will not relieve your pain because your body cannot convert it to its active form.",
        "Before taking a blood thinner called warfarin, genetic testing can help find the right starting dose.",
        "Some people of Asian descent carry a gene variant that can cause severe skin reactions to a seizure medication.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Pharmacogenomics examines genetic variations affecting drug metabolism, transport, and targets to predict therapeutic response and adverse drug reactions, enabling personalized medication selection and dosing.",
      explanation: `Pharmacogenomics applies genetic information to optimize drug therapy. It focuses on inherited variations that affect pharmacokinetics (what the body does to the drug) and pharmacodynamics (what the drug does to the body).

**Key Concepts:**

**Pharmacokinetic Genes:**
Affect drug absorption, distribution, metabolism, and excretion (ADME)

*Drug Metabolizing Enzymes:*
| Enzyme | Common Substrates |
|--------|------------------|
| CYP2D6 | Codeine, tamoxifen, antidepressants, antipsychotics |
| CYP2C19 | Clopidogrel, PPIs, some antidepressants |
| CYP2C9 | Warfarin, phenytoin, NSAIDs |
| CYP3A4 | Many drugs (statins, immunosuppressants) |
| TPMT | Thiopurines (azathioprine, 6-MP) |
| DPYD | 5-fluorouracil, capecitabine |

*Drug Transporters:*
| Transporter | Function |
|-------------|----------|
| SLCO1B1 | Statin uptake into liver |
| ABCB1 (P-gp) | Drug efflux |

**Pharmacodynamic Genes:**
Affect drug targets and pathways

| Gene | Drug | Effect |
|------|------|--------|
| VKORC1 | Warfarin | Dose requirement |
| HLA-B*57:01 | Abacavir | Hypersensitivity |
| HLA-B*15:02 | Carbamazepine | SJS/TEN in Asians |
| G6PD | Certain drugs | Hemolytic anemia |

**Metabolizer Phenotypes:**

| Phenotype | Enzyme Activity | Clinical Impact |
|-----------|-----------------|-----------------|
| Poor metabolizer (PM) | Little/none | Drug accumulation, toxicity |
| Intermediate metabolizer (IM) | Reduced | May need dose adjustment |
| Normal metabolizer (NM) | Normal | Standard dosing |
| Rapid/ultra-rapid metabolizer (RM/UM) | Increased | Reduced efficacy, prodrug toxicity |

**Clinical Applications:**

*Pre-prescription Testing:*
- Guides initial drug/dose selection
- Avoids trial-and-error approach
- Examples: clopidogrel, warfarin, SSRIs

*Reactive Testing:*
- After treatment failure
- After adverse reaction
- Explains unexpected response

**FDA Drug Labels:**
>200 drugs have pharmacogenomic information in labeling
- Some require testing
- Others recommend or provide information only`,
      keyTerms: [
        {
          term: "CYP450 enzymes",
          definition:
            "Family of liver enzymes responsible for metabolizing most medications",
          pronunciation: "sip-four-fifty",
        },
        {
          term: "pharmacokinetics",
          definition:
            "How the body absorbs, distributes, metabolizes, and excretes drugs",
        },
        {
          term: "pharmacodynamics",
          definition:
            "How drugs affect the body, including mechanism of action",
        },
        {
          term: "prodrug",
          definition:
            "A medication that must be converted by the body to its active form",
        },
        {
          term: "HLA",
          definition:
            "Human leukocyte antigen; certain types predict immune-mediated drug reactions",
          pronunciation: "H-L-A",
        },
      ],
      analogies: [
        "Drug metabolism enzymes are like assembly line workers - some work fast, some slow, affecting how quickly products (drug effects) appear.",
        "A prodrug is like a locked box - it needs the right key (enzyme) to open and release the active medicine inside.",
        "HLA testing before certain drugs is like checking for allergies before giving someone food - it prevents a harmful reaction.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Pharmacogenomics integrates polymorphism-phenotype correlations, star allele nomenclature, activity scores, and clinical decision support to translate genetic variants into actionable prescribing recommendations.",
      explanation: `## Molecular Basis of Pharmacogenetic Variation

### CYP450 Polymorphisms

**Star Allele Nomenclature:**
- *1 = wild-type (reference, normal function)
- Other numbers = variant alleles
- Function assigned: Normal, decreased, no function, increased

**CYP2D6 Example:**
| Allele | Function | Frequency (Caucasian) |
|--------|----------|----------------------|
| *1 | Normal | ~35% |
| *2 | Normal | ~25% |
| *3 | No function | 1-2% |
| *4 | No function | ~20% |
| *5 | Gene deletion | 3-6% |
| *10 | Decreased | 1-2% (higher in Asians) |
| *41 | Decreased | ~8% |
| *1xN, *2xN | Gene duplication | 1-5% |

**Activity Score System:**
| Allele Function | Activity Value |
|-----------------|----------------|
| No function | 0 |
| Decreased | 0.5 (or 0.25 for some) |
| Normal | 1 |
| Increased | >1 |

Diplotype activity score = sum of both alleles

| Activity Score | Phenotype |
|----------------|-----------|
| 0 | Poor metabolizer |
| 0.5-1 | Intermediate metabolizer |
| 1-2.25 | Normal metabolizer |
| >2.25 | Ultrarapid metabolizer |

### Pharmacokinetic Implications

**CYP2D6 and Codeine:**
- Codeine → morphine (via CYP2D6)
- PM: No conversion → no analgesia
- UM: Rapid conversion → respiratory depression risk (especially children)
- Recommendation: Avoid codeine in PM and UM

**CYP2C19 and Clopidogrel:**
- Clopidogrel (prodrug) → active metabolite
- PM: Reduced activation → diminished antiplatelet effect
- Increased cardiovascular events in PMs
- Consider alternative (prasugrel, ticagrelor) for PM/IM

### Drug-Specific Guidelines

**CPIC (Clinical Pharmacogenetics Implementation Consortium):**
Provides peer-reviewed guidelines for gene-drug pairs

| Gene-Drug | Recommendation Summary |
|-----------|----------------------|
| CYP2D6-codeine | Avoid in PM and UM |
| CYP2D6-tamoxifen | Consider alternative for PM |
| CYP2C19-clopidogrel | Alternative for PM/IM |
| CYP2C9/VKORC1-warfarin | Algorithm-based dosing |
| TPMT-thiopurines | Reduce dose or avoid in PM |
| DPYD-fluoropyrimidines | Reduce dose or avoid |
| HLA-B*57:01-abacavir | Avoid if positive |
| HLA-B*15:02-carbamazepine | Avoid if positive (Asians) |
| SLCO1B1-simvastatin | Avoid high doses with *5 |

### HLA-Associated Reactions

**Immune-Mediated Mechanisms:**
- Drug-HLA-peptide complex triggers T-cell response
- Specific HLA alleles required
- Potentially life-threatening reactions

| Drug | HLA Allele | Reaction | Population at Risk |
|------|------------|----------|-------------------|
| Abacavir | B*57:01 | Hypersensitivity | All (screening standard) |
| Carbamazepine | B*15:02 | SJS/TEN | Asian |
| Carbamazepine | A*31:01 | HSS/MPE | European, Japanese |
| Allopurinol | B*58:01 | SJS/TEN | Asian, African |
| Phenytoin | B*15:02 | SJS/TEN | Asian |

### Testing Technologies

**Methods:**
- PCR-based genotyping (most common)
- DNA microarrays
- Sequencing (for comprehensive coverage)
- Point-of-care options emerging

**Considerations:**
- Most tests cover common variants only
- Novel/rare variants may be missed
- Copy number variation detection varies`,
      keyTerms: [
        {
          term: "star allele",
          definition:
            "Nomenclature system for pharmacogene variants (e.g., CYP2D6*4)",
        },
        {
          term: "activity score",
          definition:
            "Quantitative system summing allele activities to determine metabolizer phenotype",
        },
        {
          term: "CPIC",
          definition:
            "Clinical Pharmacogenetics Implementation Consortium; develops gene-drug guidelines",
        },
        {
          term: "SJS/TEN",
          definition:
            "Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis; severe drug-induced skin reactions",
        },
        {
          term: "diplotype",
          definition:
            "Combination of two alleles (one from each parent) for a gene",
        },
        {
          term: "wild-type",
          definition:
            "The most common allele in a population, typically with normal function",
        },
      ],
      clinicalNotes:
        "HLA-B*57:01 testing before abacavir is standard of care and essentially eliminates hypersensitivity. FDA black box warning for codeine in children after deaths in CYP2D6 UMs. Consider CYP2C19 testing before clopidogrel in high-risk cardiovascular patients.",
    },
    4: {
      level: 4,
      summary:
        "Advanced pharmacogenomics encompasses complex phenotype prediction algorithms, drug interaction modulation of genetic effects, therapeutic drug monitoring integration, and health system implementation strategies.",
      explanation: `## Complex Phenotype Prediction

### Beyond Simple Diplotypes

**Factors Affecting Phenotype Expression:**
| Factor | Impact |
|--------|--------|
| Drug-drug interactions | May convert phenotype (inhibition/induction) |
| Age | Enzyme expression changes |
| Organ function | Hepatic/renal impairment modifies impact |
| Disease state | Inflammation affects CYP expression |
| Epigenetics | Methylation affects expression |

**Phenoconversion:**
- Strong CYP2D6 inhibitor (e.g., fluoxetine) + normal metabolizer = phenotypic poor metabolizer
- Must consider concurrent medications
- Clinical decision support should flag interactions

### Multi-Gene Interactions

**Warfarin Dosing Algorithm:**
Incorporates:
- CYP2C9 genotype
- VKORC1 genotype
- Clinical factors (age, weight, amiodarone, etc.)
- Validated algorithms available (warfarindosing.org)

**Pain Management Panel:**
| Gene | Drug Affected |
|------|---------------|
| CYP2D6 | Codeine, tramadol, hydrocodone, oxycodone |
| CYP2C19 | Varies by substrate |
| OPRM1 | Opioid receptor sensitivity |
| COMT | Pain perception |

### Therapeutic Drug Monitoring Integration

**Complementary Approaches:**
- Genotype predicts initial dosing
- TDM confirms therapeutic levels
- Together optimize therapy

**Example - Tacrolimus:**
- CYP3A5 expresser (*1 allele): Higher doses needed
- TDM still essential due to narrow therapeutic index
- Genotype guides initial dose; TDM guides adjustments

### Rare Variant Considerations

**Challenges:**
- Standard panels miss rare variants
- Novel variants may have unknown function
- Sequencing provides comprehensive coverage but interpretation limited

**Approaches:**
- Functional prediction algorithms
- Research databases (PharmVar)
- Consider sequencing for unexpected phenotypes

## Implementation Science

### Clinical Decision Support (CDS)

**Models:**
| Model | Description |
|-------|-------------|
| Passive | Results in EHR; physician must act |
| Alert-based | Pop-up alerts at prescribing |
| Pre-emptive | Results available before prescribing |
| Panel-based | Multiple genes tested proactively |

**Effective CDS Features:**
- Actionable recommendations
- Clinical context integration
- Alert fatigue minimization
- Accessible interpretation

### Pre-emptive vs. Reactive Testing

**Pre-emptive Panel Testing:**
- One-time test, lifetime information
- Results available when needed
- May reduce adverse events
- Cost-effectiveness being established

**Implementation Sites:**
- Vanderbilt PREDICT
- St. Jude PG4KDS
- Mayo RIGHT
- Many others developing programs

### Laboratory Considerations

**Reporting Standards:**
- Gene coverage documented
- Allele/variant nomenclature clear
- Phenotype assignment provided
- Limitations stated

**Quality Assurance:**
- CAP/CLIA certification
- Proficiency testing
- Reference material standards

## Pharmacoeconomics

### Value Proposition

**Potential Savings:**
- Reduced adverse drug events
- Fewer treatment failures
- Decreased hospitalizations
- Lower healthcare utilization

**Challenges:**
- Prospective outcomes data limited
- Payer coverage variable
- Implementation costs significant
- Benefit delayed relative to testing

### Coverage Landscape

| Scenario | Coverage |
|----------|----------|
| HLA-B*57:01 before abacavir | Standard |
| CYP2C19 before clopidogrel | Variable |
| Multi-gene panels | Often not covered |
| Oncology PGx | Improving coverage |

## Special Populations

### Pediatrics

**Unique Considerations:**
- Developmental changes in enzyme expression
- Weight-based dosing adjustments
- Safety data extrapolated from adults
- Fewer validated guidelines

**Key Applications:**
- Codeine avoidance (FDA black box)
- ADHD medication selection
- Antidepressant dosing

### Older Adults

**Considerations:**
- Polypharmacy common
- Drug interactions more prevalent
- Organ function changes
- Phenoconversion more likely

### Ancestry and Population Differences

**Allele Frequency Variation:**
| Variant | Caucasian | Asian | African |
|---------|-----------|-------|---------|
| CYP2D6*4 | ~20% | ~1% | ~5% |
| CYP2D6*10 | ~2% | ~40% | ~5% |
| CYP2C19*2 | ~15% | ~30% | ~15% |
| HLA-B*15:02 | <1% | 10-15% | <1% |

**Implications:**
- Testing panels should match population
- Risk assessment considers ancestry
- Health equity concerns with limited data in some groups`,
      keyTerms: [
        {
          term: "phenoconversion",
          definition:
            "Change in metabolizer phenotype due to drug interactions (inhibition/induction)",
        },
        {
          term: "pre-emptive testing",
          definition:
            "Genetic testing before drug exposure to guide future prescribing",
        },
        {
          term: "clinical decision support",
          definition:
            "EHR-integrated tools providing pharmacogenomic guidance at point of prescribing",
        },
        {
          term: "PharmVar",
          definition:
            "Pharmacogene Variation Consortium; maintains star allele nomenclature database",
        },
        {
          term: "therapeutic drug monitoring",
          definition:
            "Measurement of drug levels to guide dosing; complements pharmacogenomics",
        },
        {
          term: "allele frequency",
          definition:
            "How common a genetic variant is in a population; varies by ancestry",
        },
      ],
      clinicalNotes:
        "Always consider phenoconversion from drug interactions when interpreting PGx results. Pre-emptive panel testing is increasingly cost-effective as sequencing costs decrease. Ensure testing panels include variants relevant to patient\"s ancestry. TDM and PGx are complementary, not mutually exclusive.",
    },
    5: {
      level: 5,
      summary:
        "State-of-the-art pharmacogenomics integrates whole genome approaches, polygenic scores for drug response, real-world evidence generation, global implementation initiatives, and emerging regulatory frameworks for precision prescribing.",
      explanation: `## Advanced Genomic Approaches

### Whole Genome/Exome Pharmacogenomics

**Advantages over Panels:**
- Comprehensive variant detection
- Novel variant identification
- Reanalysis capability as knowledge grows
- Research applications

**Challenges:**
- Variant interpretation burden
- Storage and privacy concerns
- Cost (decreasing)
- Clinical actionability uncertain for many variants

### Polygenic Scores for Drug Response

**Concept:**
- Aggregate effect of multiple common variants
- May predict continuous traits (e.g., statin LDL-lowering)
- Complement single-gene pharmacogenomics

**Applications in Development:**
| Drug/Outcome | Polygenic Component |
|--------------|---------------------|
| Statin efficacy | LDL response |
| Warfarin dose | Beyond CYP2C9/VKORC1 |
| Opioid dose | Pain sensitivity |
| SSRI response | Antidepressant efficacy |

### Pharmacoepigenomics

**Emerging Field:**
- DNA methylation affects CYP expression
- Histone modifications influence transporters
- Environmental exposures alter drug response
- May explain inter-individual variation beyond genotype

## Precision Drug Development

### Companion Diagnostics

**Regulatory Framework:**
- FDA requires test with some drugs
- Co-developed drugs and diagnostics
- Labels specify testing requirements

| Drug | Biomarker | Requirement |
|------|-----------|-------------|
| Abacavir | HLA-B*57:01 | Required before prescribing |
| Ivacaftor | CFTR mutation | Required |
| Pembrolizumab | MSI-H/dMMR | Tumor testing |
| Rucaparib | BRCA mutation | Tumor/germline |

### Clinical Trial Enrichment

**Pharmacogenomic-Informed Trials:**
- Enrich for likely responders
- Identify safety biomarkers
- Smaller, more efficient trials
- May accelerate approval

### Rare Disease Applications

**Pharmacogenomics in Rare Disease:**
- Variant-specific therapies
- CFTR modulators by genotype
- Duchenne muscular dystrophy exon skipping
- Personalized medicine paradigm

## Real-World Evidence

### Outcomes Research

**Studies Demonstrating Benefit:**
| Study | Finding |
|-------|---------|
| PREPARE | Reduced ADR in PGx-guided prescribing (EU) |
| GUIDED | Improved antidepressant response with PGx |
| GIFT | Reduced bleeding with genotype-guided warfarin |

**Ongoing Studies:**
- IGNITE network
- eMERGE network
- All of Us program

### Learning Health Systems

**Cycle:**
1. Generate PGx data at scale
2. Analyze outcomes
3. Refine guidelines
4. Implement improvements
5. Repeat

**Data Sources:**
- EHR-linked biobanks
- Insurance claims data
- Patient registries

## Global Implementation

### International Initiatives

| Region | Program |
|--------|---------|
| USA | CPIC, eMERGE, All of Us |
| Europe | DPWG, Ubiquitous PGx |
| Canada | CPNDS |
| Asia | Multiple national programs |

### Harmonization Efforts

**Challenges:**
- Guideline differences between CPIC and DPWG
- Allele frequency variations by population
- Healthcare system differences
- Regulatory frameworks vary

**Progress:**
- PharmVar standardizes nomenclature
- PharmGKB aggregates knowledge
- International collaboration increasing

## Regulatory and Ethical Considerations

### FDA Pharmacogenomics

**Table of Pharmacogenomic Biomarkers:**
- >300 drug labels with PGx information
- Categories: Required, recommended, informational
- Labeling updates ongoing

**Black Box Warnings:**
- Codeine in children (CYP2D6 UM)
- Clopidogrel (CYP2C19 PM)

### Ethical Considerations

| Issue | Consideration |
|-------|---------------|
| Incidental findings | Unexpected disease risk |
| Data privacy | Genetic information protection |
| Access equity | Ensuring all populations benefit |
| Discrimination | GINA limitations (not all insurance) |
| Return of results | Patient preferences |

### Direct-to-Consumer Testing

**Concerns:**
- Accuracy and completeness variable
- Interpretation challenges
- Healthcare provider involvement variable
- Regulatory oversight limited

**Guidance:**
- Encourage physician involvement
- Verify with clinical-grade testing if actionable
- Provide education on limitations

## Future Directions

### Pharmacomicrobiomics

**Gut Microbiome Effects:**
- Drug metabolism by bacteria
- Drug-microbiome interactions
- Interindividual variation
- Research rapidly evolving

### AI/Machine Learning Integration

**Applications:**
- Complex phenotype prediction
- Drug interaction modeling
- Polygenic score development
- Clinical decision support enhancement

### Point-of-Care Testing

**Emerging Technology:**
- Rapid genotyping at bedside
- Emergency department applications
- Primary care integration
- Cost and complexity decreasing

### Gene Editing for Drug Response

**Theoretical Future:**
- Correct deleterious pharmacogene variants
- Optimize drug metabolism
- Currently far from clinical application
- Ethical considerations paramount`,
      keyTerms: [
        {
          term: "companion diagnostic",
          definition:
            "Genetic test required or recommended before prescribing specific medication",
        },
        {
          term: "DPWG",
          definition:
            "Dutch Pharmacogenetics Working Group; European pharmacogenomics guidelines",
        },
        {
          term: "pharmacomicrobiomics",
          definition:
            "Study of gut microbiome effects on drug metabolism and response",
        },
        {
          term: "real-world evidence",
          definition:
            "Clinical outcomes data from routine healthcare rather than controlled trials",
        },
        {
          term: "learning health system",
          definition:
            "Healthcare system that continuously improves through data analysis",
        },
        {
          term: "biobank",
          definition:
            "Repository of biological samples linked to health information for research",
        },
      ],
      clinicalNotes: `Implementation priorities for clinical pharmacogenomics:
1. Start with high-evidence gene-drug pairs (HLA-B*57:01-abacavir, TPMT-thiopurines)
2. Implement clinical decision support integrated with EHR
3. Consider pre-emptive panel testing for high-risk populations
4. Educate providers on interpreting and applying results
5. Address health equity in testing access and panel design
6. Stay current with CPIC guideline updates
7. Document PGx results for lifetime use
8. Consider phenoconversion from concurrent medications`,
    },
  },

  media: [
    {
      id: "pgx-metabolism-diagram",
      type: "diagram",
      filename: "pharmacogenomics-metabolism.svg",
      title: "Drug Metabolism and Pharmacogenomics",
      description:
        "Overview of CYP450 enzymes and metabolizer phenotypes",
    },
    {
      id: "pgx-clinical-workflow",
      type: "diagram",
      filename: "pgx-clinical-workflow.svg",
      title: "Clinical Pharmacogenomics Workflow",
      description:
        "Process for implementing pharmacogenomic testing in clinical practice",
    },
  ],

  citations: [
    {
      id: "relling-2015",
      type: "article",
      title:
        "Pharmacogenomics in the clinic",
      authors: ["Relling, M.V.", "Evans, W.E."],
      source: "Nature",
      chapter: "526",
      page: "343-350",
    },
    {
      id: "cpic",
      type: "website",
      title: "Clinical Pharmacogenetics Implementation Consortium Guidelines",
      source: "CPIC",
      url: "https://cpicpgx.org",
    },
    {
      id: "pharmgkb",
      type: "website",
      title: "PharmGKB: The Pharmacogenomics Knowledge Base",
      source: "PharmGKB",
      url: "https://www.pharmgkb.org",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-common-drug-gene-interactions",
      targetType: "concept",
      relationship: "child",
      label: "Common Drug-Gene Interactions",
    },
    {
      targetId: "concept-genetic-testing-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Testing",
    },
  ],

  tags: {
    systems: ["genetics", "pharmacology"],
    topics: [
      "pharmacogenomics",
      "personalized medicine",
      "drug metabolism",
      "precision medicine",
    ],
    keywords: [
      "CYP450",
      "CYP2D6",
      "CYP2C19",
      "drug-gene interaction",
      "metabolizer phenotype",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "psychiatry"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default pharmacogenomicsOverviewContent;
