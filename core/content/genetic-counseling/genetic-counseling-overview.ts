/**
 * Genetic Counseling Overview - Educational Content
 *
 * Covers: what genetic counseling is, when it is needed, genetic testing types
 * (karyotype, FISH, microarray, WES/WGS), interpreting results, family history
 * pedigree, inheritance patterns, ethical considerations, prenatal testing.
 */

import { EducationalContent } from '../types';

export const geneticCounselingOverview: EducationalContent = {
  id: 'genetic-counseling-overview',
  type: 'topic',
  name: 'Genetic Counseling Overview',
  alternateNames: ['Genetic Counselling', 'Genetics Consultation', 'Clinical Genetics Consultation'],

  levels: {
    1: {
      level: 1,
      summary: 'Genetic counseling helps you understand how your genes affect your health and whether genetic tests might be useful for you or your family.',
      explanation: `## What Is Genetic Counseling?

A **genetic counselor** is a trained healthcare worker who helps you understand the instructions inside your body called **genes**. They look at your family health history, explain genetic tests, help you understand results, and support your decisions.

## When Might You Need It?

- Several family members have the same health problem (cancer, heart disease)
- You are planning a pregnancy and want to know about risks
- A screening test during pregnancy showed something unusual
- A family member was diagnosed with a genetic condition

## Types of Genetic Tests

1. **Karyotype** - Pictures all your chromosomes to spot missing or extra ones
2. **FISH** - Uses glowing tags to find one specific chromosome change
3. **Microarray** - Scans all chromosomes for small missing or extra pieces
4. **Whole exome/genome sequencing** - Reads most or all genetic letters to find tiny spelling mistakes

## Understanding Results

- **Positive** - A known harmful change was found
- **Negative** - No harmful change found
- **Uncertain** - A change was found but scientists are not sure what it means yet

## Family Tree (Pedigree)

Genetic counselors draw a special family tree using shapes and symbols to track who had health problems and spot patterns.

## How Conditions Pass Through Families

- **Autosomal dominant** - One changed copy from one parent is enough
- **Autosomal recessive** - Two changed copies needed (one from each parent)
- **X-linked** - On the X chromosome; often affects boys more

## Prenatal Testing

- **Screening tests** (blood tests, ultrasound) estimate the chance of conditions
- **Diagnostic tests** (amniocentesis, CVS) give definite answers but carry small risks

## Important Points

- Genetic testing is always your choice
- Laws like GINA protect against genetic discrimination
- Having a gene change does not always mean you will get sick`,
      keyTerms: [
        { term: 'genetic counselor', definition: 'A healthcare professional trained to help people understand genetic conditions and testing' },
        { term: 'gene', definition: 'A small section of DNA that acts as an instruction for your body' },
        { term: 'chromosome', definition: 'A large bundle of DNA containing many genes; humans normally have 46' },
        { term: 'pedigree', definition: 'A special family tree diagram used to track health conditions in a family' },
        { term: 'karyotype', definition: 'A test that photographs all chromosomes to check for large changes' },
      ],
      analogies: [
        'Genes are like a recipe book for your body. Genetic counseling helps you check if any recipes have typos.',
        'A karyotype views the book chapters from far away; genome sequencing reads every word.',
      ],
      examples: [
        'A woman whose mother and aunt had breast cancer sees a genetic counselor about BRCA testing.',
        'A couple learns they both carry sickle cell trait and discusses options with a counselor.',
      ],
      patientCounselingPoints: [
        'Genetic counseling is a conversation - you will have time to ask questions.',
        'You are never required to do genetic testing; it is always your choice.',
        'Bring any family health information you can gather to your appointment.',
      ],
    },

    2: {
      level: 2,
      summary: 'Genetic counseling combines family history assessment, genetic education, and psychosocial support to help individuals understand hereditary risks and make informed decisions about genetic testing.',
      explanation: `## The Genetic Counseling Process

Certified genetic counselors (CGCs) hold a master's degree and are certified by the ABGC. The process involves risk assessment, education about inheritance and testing options, psychosocial support, and coordination of care.

## Indications for Referral

Family history of hereditary cancer, known genetic condition in the family, recurrent pregnancy loss, abnormal prenatal screening, consanguinity, positive newborn screening, or birth defects and intellectual disability.

## Genetic Testing Technologies

**Karyotype**: Visualizes all 46 chromosomes; detects aneuploidies and large rearrangements (resolution ~5-10 Mb). Turnaround: 10-14 days.

**FISH**: Fluorescent probes for specific regions. Rapid aneuploidy detection and microdeletions (e.g., 22q11.2). Turnaround: 24-48 hours.

**Chromosomal Microarray (CMA)**: Detects copy number variants (deletions/duplications) at higher resolution than karyotype. First-tier test for developmental delay and congenital anomalies. Cannot detect balanced rearrangements.

**WES/WGS**: WES sequences protein-coding genes (~25-40% diagnostic yield for undiagnosed conditions). WGS covers the entire genome including non-coding regions.

## ACMG Variant Classification

1. Pathogenic  2. Likely pathogenic  3. Variant of uncertain significance (VUS)  4. Likely benign  5. Benign

## Pedigree and Inheritance

A **three-generation pedigree** uses standard symbols: squares (males), circles (females), filled shapes (affected), half-filled (carriers), diagonal line (deceased).

| Pattern | Recurrence | Key Feature |
|---------|-----------|-------------|
| AD | 50% | Affected every generation |
| AR | 25% (both carriers) | May skip generations |
| X-linked recessive | Males affected | No male-to-male transmission |
| Mitochondrial | Maternal only | Variable severity |

## Prenatal Testing

**Screening**: First-trimester screen (NT + blood markers), cfDNA/NIPT (>99% sensitivity for trisomy 21), quad screen.

**Diagnostic**: CVS (10-13 weeks, placental tissue) and amniocentesis (15-20 weeks, amniotic fluid). Miscarriage risk ~0.1-0.3%.

## Ethical Considerations

- **Autonomy**: patients may accept or decline testing
- **GINA**: protects against discrimination in employment and health insurance (not life/disability)
- **Non-directiveness**: counselors inform without directing decisions`,
      keyTerms: [
        { term: 'karyotype', definition: 'A test arranging and photographing all 46 chromosomes to detect large abnormalities', pronunciation: 'KAIR-ee-oh-type' },
        { term: 'FISH', definition: 'Fluorescence In Situ Hybridization; uses fluorescent probes for specific chromosome changes' },
        { term: 'microarray', definition: 'A high-resolution test scanning for small deletions and duplications (copy number variants)', pronunciation: 'MY-kro-uh-RAY' },
        { term: 'VUS', definition: 'Variant of uncertain significance; a genetic change whose health effect is not yet known' },
        { term: 'amniocentesis', definition: 'Prenatal diagnostic procedure collecting amniotic fluid to test fetal chromosomes and DNA', pronunciation: 'AM-nee-oh-sen-TEE-sis' },
      ],
      analogies: [
        'Karyotype checks encyclopedia volumes for missing or extra books; microarray checks chapter titles; WGS proofreads every page.',
      ],
      examples: [
        'A woman with Lynch syndrome family history is referred for multi-gene panel testing.',
        'After a positive cfDNA screen for trisomy 21, a counselor explains screening vs. diagnostic testing.',
      ],
    },

    3: {
      level: 3,
      summary: 'Genetic counseling integrates clinical genetics, psychosocial assessment, and patient education to facilitate informed decision-making regarding genetic testing, risk assessment, and management of hereditary conditions.',
      explanation: `## Practice Framework

The NSGC defines genetic counseling as helping people understand and adapt to medical, psychological, and familial implications of genetic contributions to disease. Key components: contracting, pedigree construction, risk assessment, education, psychosocial assessment, facilitated decision-making, and follow-up with cascade testing.

## Testing Methodologies

**Karyotype**: Requires cultured lymphocytes; G-banding resolution ~5-10 Mb. Gold standard for balanced rearrangements and mosaicism assessment.

**FISH**: Locus-specific, centromeric, or whole-chromosome paint probes. Applications: rapid aneuploidy, DiGeorge (22q11.2), Williams (7q11.23), Prader-Willi/Angelman (15q11-q13).

**CMA**: aCGH and SNP array platforms. SNP arrays additionally detect regions of homozygosity (consanguinity, UPD) and triploidy. ~15-20% diagnostic yield above karyotype for DD/ID/ASD. ACMG first-tier recommendation (Miller et al., 2010).

**NGS**: Gene panels (targeted phenotype), WES (~25-40% yield for undiagnosed Mendelian disease), WGS (includes non-coding). RNA-seq emerging for cryptic splice variants (~7-10% additional yield).

## ACMG/AMP Variant Classification

Evidence categories: population data (gnomAD), computational predictors (REVEL, CADD, SpliceAI), functional assays, segregation data, de novo status, allelic data. ClinVar aggregates variant-disease assertions from clinical laboratories.

## Bayesian Risk Analysis

Integrates prior probability (Mendelian genetics) with conditional probability (phenotype, testing) to derive posterior probability. Example: carrier risk for DMD in a woman with affected maternal uncle, modified by age and CK level.

## Prenatal Genomics

**cfDNA/NIPT**: Analyzes placental DNA in maternal circulation. Sensitivity >99% for T21; PPV depends on prevalence. False positives from confined placental mosaicism, vanishing twin, or maternal CNVs. ACOG recommends offering to all pregnancies.

**PGT**: PGT-A (aneuploidy), PGT-M (monogenic), PGT-SR (structural rearrangements) for IVF embryos.

## Ethical and Legal Framework

- **GINA (2008)**: Titles I (health insurance) and II (employment); excludes life/disability/LTC insurance
- **ACMG SF v3.2**: 81 genes for mandatory return of secondary findings (pathogenic/likely pathogenic)
- **Pate v. Threlkel, Safer v. Pack**: duty-to-warn precedents regarding at-risk relatives
- **Pedigree standards**: Bennett et al. (2008) nomenclature`,
      keyTerms: [
        { term: 'copy number variant', definition: 'A genomic segment with altered copy number (deletion or duplication) relative to reference', pronunciation: 'KOP-ee NUM-ber VAIR-ee-unt', relatedTerms: ['CMA', 'CNV'] },
        { term: 'penetrance', definition: 'Proportion of individuals with a pathogenic variant who manifest the phenotype; may be age-dependent or incomplete', relatedTerms: ['expressivity'] },
        { term: 'Bayesian analysis', definition: 'Statistical method combining prior genetic probabilities with phenotypic/testing data to refine risk estimates', relatedTerms: ['posterior probability'] },
        { term: 'confined placental mosaicism', definition: 'Chromosomal abnormality present in placenta but not fetus; can cause false-positive cfDNA or CVS results', relatedTerms: ['cfDNA', 'CVS'] },
        { term: 'cascade testing', definition: 'Systematic offering of genetic testing to at-risk relatives after identifying a pathogenic variant in a proband', relatedTerms: ['proband'] },
        { term: 'preimplantation genetic testing', definition: 'Genetic analysis of IVF embryos before transfer; PGT-A (aneuploidy), PGT-M (monogenic), PGT-SR (structural)', relatedTerms: ['IVF'] },
      ],
      examples: [
        'A couple with a child with SMA receives counseling on 25% recurrence risk, carrier testing for relatives, and PGT-M.',
        'CMA in a child with DD reveals a 1.5 Mb 16p11.2 deletion.',
      ],
      clinicalNotes: 'CMA is the first-tier cytogenetic test for DD/ID/ASD/MCA (Miller et al., 2010). Karyotype remains indicated for suspected balanced rearrangements and recurrent pregnancy loss.',
    },

    4: {
      level: 4,
      summary: 'Advanced genetic counseling integrates risk modeling (BRCAPro, BOADICEA, PREMM5), the quantitative ACMG framework, emerging technologies (long-read sequencing, EpiSign), and psychosocial theory to navigate complex genomic medicine scenarios.',
      explanation: `## Theoretical Frameworks

Practice models include the reciprocal engagement model (REM), self-regulation theory, health belief model, and shared decision-making. Outcome tools: Decision Regret Scale, GCOSS, MICRA.

## Advanced Risk Assessment

Empiric models: Gail, Tyrer-Cuzick, BRCAPro, PREMM5, CanRisk/BOADICEA. Polygenic risk scores (PRS) aggregate common variant effects; clinical utility under investigation for breast cancer, CAD, and diabetes. Bayesian modification updates carrier probabilities using negative molecular testing and penetrance curves.

## Emerging Technologies

**Long-read sequencing** (PacBio, ONT): resolves repeat expansions (FMR1, HTT, C9orf72), structural variants, and haplotype phasing. **Optical genome mapping** (Bionano): SVs >=500 bp including balanced rearrangements. **RNA-seq**: cryptic splice variants, allele-specific expression, expression outliers (~7-10% added yield). **EpiSign**: DNA methylation signatures confirm VUS in chromatin disorders (Kabuki, Sotos, CdLS); validated for 60+ conditions.

## Variant Interpretation: Advanced

ClinGen VCEPs publish gene-specific ACMG criteria (PTEN, RASopathy, CDH1, hearing loss). Saturation genome editing and MAVEs provide high-throughput functional data. Allele frequency thresholds vary by disease; BA1 revised to 0.05% for high-penetrance dominant conditions. VUS reclassification rate ~7-10%/year.

## Prenatal Advanced Topics

cfDNA fetal fraction typically 10-20%; must exceed ~4% for reliability. Reduced by early GA and obesity. Genome-wide cfDNA detects CNVs >7 Mb and rare trisomies. Prenatal WES: PAGE study (Lord et al., 2019) showed 8.5% additional yield in structurally abnormal fetuses. Highest for skeletal anomalies and hydrops.

## Expanded Carrier Screening

ACOG/ACMG recommend offering for conditions with carrier frequency >=1/200. Pan-ethnic panels include 100-500+ genes. Residual risk calculations require detection rate and ethnicity-specific allele distributions.

## Psychosocial Dimensions

Survivor guilt in unaffected members, anticipatory grief (Huntington protocol), identity implications of diagnosis, VUS-related distress comparable to pathogenic results. Cascade testing uptake: typically 20-40%.

## Access and Equity

Higher VUS rates in non-European populations (~1.5-2x for hereditary cancer panels) due to database bias. ~1 genetic counselor per 80,000 US population. Telehealth and chatbot-assisted triage models expand access.`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Quantitative genetic predisposition measure aggregating weighted effects of many common variants; clinical utility under investigation', pronunciation: 'POL-ee-JEN-ik', relatedTerms: ['GWAS', 'SNP'] },
        { term: 'fetal fraction', definition: 'Proportion of cfDNA from placental trophoblast in maternal plasma; must exceed ~4% for reliable cfDNA screening', relatedTerms: ['cfDNA', 'NIPT'] },
        { term: 'epigenomic signature', definition: 'Genome-wide DNA methylation pattern characteristic of specific genetic syndromes; used to confirm VUS in chromatin disorders', relatedTerms: ['EpiSign', 'methylation'] },
        { term: 'reciprocal engagement model', definition: 'Genetic counseling practice model integrating education, emotional support, and therapeutic relationship as interconnected components', relatedTerms: ['genetic counseling theory'] },
        { term: 'saturation genome editing', definition: 'High-throughput functional assay evaluating all possible SNVs in a gene to determine functional impact, aiding variant classification', relatedTerms: ['MAVE', 'ACMG'] },
      ],
      clinicalNotes: 'Gene-specific ACMG criteria from ClinGen VCEPs supersede general guidelines. Long-read sequencing and RNA-seq are available as reflex testing when WES/WGS is non-diagnostic. Higher VUS rates in underrepresented populations require careful pre-test counseling.',
    },

    5: {
      level: 5,
      summary: 'Contemporary genetic counseling operates at the convergence of precision genomics, population health equity, and psychosocial science, addressing quantitative variant frameworks, multi-omic diagnostics, prenatal genomics, and evolving legal-ethical challenges.',
      explanation: `## Quantitative Variant Interpretation

The Tavtigian et al. (2018, 2020) Bayesian framework assigns point values to ACMG/AMP evidence (supporting: 2, moderate: 4, strong: 8, very strong: 16). ClinGen VCEPs (60+) publish gene-specific rule specifications. Computational calibration: REVEL, BayesDel, AlphaMissense mapped to evidence strengths. SV interpretation frameworks extend ACMG principles to structural variants with breakpoint, gene content, and regulatory element analysis.

## Multi-Omic Integration

**Transcriptomics**: RNA-seq reclassifies ~7-10% of WES/WGS-negative cases (Fresard et al., 2019) via aberrant splicing, monoallelic expression, and expression outliers. **Epigenomics**: EpiSign (Aref-Eshghi et al., 2019) validated for 60+ Mendelian chromatin disorders. **Long-read**: Clinical use for repeat expansions (FRDA, FMR1, RFC1-CANVAS, ATXN10), methylation phasing, haplotype-resolved SV detection. **Pharmacogenomics**: CPIC guidelines for 25+ gene-drug pairs; preemptive panels (PREDICT, RIGHT) with CDS integration.

## Population Genomics and Equity

gnomAD v4: >800K exomes/genomes with expanded but still incomplete ancestral representation. African ancestry individuals have ~1.5-2x higher VUS rates on hereditary cancer panels. All of Us and H3Africa aim to close gaps. Founder mutations (BRCA1 185delAG Ashkenazi, CHEK2 1100delC Northern European) require population-informed counseling.

## Advanced Prenatal Genomics

Expanded cfDNA: genome-wide screening for rare trisomies, CNVs >7 Mb, triploidy. PPV for rare conditions substantially lower; ACOG cautions against screening with PPV <50%. Maternal incidental findings (malignancy, autoimmune, constitutional CNVs). Prenatal WES (PAGE, Lord et al. 2019): 8.5% added yield; ACMG/ACOG consensus recommends offering when standard tests non-diagnostic. Compressed turnaround and VUS management in prenatal context remain challenges.

## Carrier Screening Policy

ACOG 690/691: expanded screening for all patients regardless of ethnicity (frequency >=1/200). Residual risk requires sensitivity and population allele data. Couples-based vs. sequential: efficiency vs. VUS disclosure trade-offs. Emerging: X-linked conditions, mild-phenotype alleles (GJB2 p.Val37Ile), variable expressivity.

## Legal Landscape

GINA Title I/II excludes <15 employees, military, IHS. ACA prohibits pre-existing condition denial. State laws extend coverage variably (CA, FL, MA for life insurance). DTC genetics: FDA-cleared limited reporting (23andMe); microarray limitations produce false positives; clinical confirmation mandatory. Recontact obligations: no consensus; ESHG shared-responsibility model.

## Research Frontiers

Somatic mosaicism via deep sequencing explains some variable expressivity/incomplete penetrance. PRS-modified screening trials (PERSPECTIVE, WISDOM for breast cancer). Gene therapy changes natural history counseling (voretigene, onasemnogene, exa-cel). Newborn genomic sequencing programs (BabySeq, GUARDIAN, Generation Study) raise consent, return-of-results, and data storage challenges.`,
      keyTerms: [
        { term: 'quantitative ACMG framework', definition: 'Bayesian point-based system (Tavtigian et al., 2018) assigning numerical values to evidence categories for variant classification with calibrated odds-of-pathogenicity thresholds', relatedTerms: ['ACMG/AMP', 'Bayesian'] },
        { term: 'AlphaMissense', definition: 'DeepMind deep learning model predicting pathogenicity of all possible single amino acid substitutions across the human proteome', relatedTerms: ['REVEL', 'CADD'] },
        { term: 'positive predictive value', definition: 'Probability that a positive screening result is a true positive; for cfDNA depends on sensitivity, specificity, and population prevalence', pronunciation: 'POZ-ih-tiv pre-DIK-tiv', relatedTerms: ['sensitivity', 'specificity'] },
        { term: 'EpiSign', definition: 'Clinical methylation array test identifying disorder-specific episignatures for molecular diagnosis confirmation in chromatin remodeling disorders', relatedTerms: ['DNA methylation', 'epigenomics'] },
      ],
      clinicalNotes: 'Contact laboratories directly for current variant classifications given ongoing reclassification. PRS not yet recommended for routine clinical use (ACMG). DTC results require clinical-grade confirmation. For prenatal WES, establish VUS management and secondary findings policies pre-test.',
    },
  },

  media: [
    {
      id: 'gc-pedigree-symbols',
      type: 'diagram',
      filename: 'pedigree-standard-symbols.svg',
      title: 'Standard Pedigree Nomenclature',
      description: 'Standard symbols for genetic pedigree construction including affected/unaffected, carriers, deceased, and consanguinity',
    },
    {
      id: 'gc-testing-algorithm',
      type: 'diagram',
      filename: 'genetic-testing-algorithm.svg',
      title: 'Genetic Testing Decision Algorithm',
      description: 'Stepwise approach to selecting genetic tests from karyotype through whole genome sequencing',
    },
    {
      id: 'gc-prenatal-pathway',
      type: 'diagram',
      filename: 'prenatal-testing-pathway.svg',
      title: 'Prenatal Genetic Testing Pathway',
      description: 'Decision tree for prenatal screening vs. diagnostic testing by gestational age',
    },
  ],

  citations: [
    {
      id: 'cite-acmg-amp-2015',
      type: 'article',
      title: 'Standards and guidelines for the interpretation of sequence variants',
      authors: ['Richards S', 'Aziz N', 'Bale S', 'et al.'],
      source: 'Genetics in Medicine',
      chapter: '17(5):405-424',
      page: '405-424',
      url: 'https://doi.org/10.1038/gim.2015.30',
    },
    {
      id: 'cite-miller-2010',
      type: 'article',
      title: 'Consensus statement: chromosomal microarray is a first-tier clinical diagnostic test',
      authors: ['Miller DT', 'Adam MP', 'Aradhya S', 'et al.'],
      source: 'American Journal of Human Genetics',
      chapter: '86(5):749-764',
    },
    {
      id: 'cite-tavtigian-2018',
      type: 'article',
      title: 'Modeling the ACMG/AMP variant classification guidelines as a Bayesian framework',
      authors: ['Tavtigian SV', 'Greenblatt MS', 'Harrison SM', 'et al.'],
      source: 'Genetics in Medicine',
      chapter: '20(9):1054-1060',
    },
    {
      id: 'cite-bennett-2008',
      type: 'article',
      title: 'Standardized human pedigree nomenclature: update and assessment',
      authors: ['Bennett RL', 'French KS', 'Resta RG', 'Doyle DL'],
      source: 'Journal of Genetic Counseling',
      chapter: '17(5):424-433',
    },
    {
      id: 'cite-lord-2019',
      type: 'article',
      title: 'Prenatal exome sequencing analysis in fetal structural anomalies (PAGE)',
      authors: ['Lord J', 'McMullan DJ', 'Eberhardt RY', 'et al.'],
      source: 'The Lancet',
      chapter: '393(10173):747-757',
    },
  ],

  crossReferences: [
    { targetId: 'inheritance-patterns', targetType: 'concept', relationship: 'related', label: 'Inheritance Patterns' },
    { targetId: 'prenatal-screening', targetType: 'process', relationship: 'related', label: 'Prenatal Screening Methods' },
    { targetId: 'molecular-genetics', targetType: 'topic', relationship: 'parent', label: 'Molecular Genetics' },
  ],

  tags: {
    systems: ['genetics', 'reproductive'],
    topics: ['genetic counseling', 'genetic testing', 'prenatal genetics', 'ethics'],
    keywords: [
      'genetic counseling', 'karyotype', 'FISH', 'microarray', 'whole exome sequencing',
      'whole genome sequencing', 'pedigree', 'inheritance patterns', 'prenatal testing',
      'NIPT', 'cfDNA', 'amniocentesis', 'CVS', 'ACMG', 'variant classification', 'GINA',
    ],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics', 'pediatrics', 'medicine'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
  contributors: ['biological-self-content-team'],
};
