/**
 * X-Linked Inheritance - Comprehensive Educational Content
 *
 * Covers X-linked dominant and recessive inheritance patterns,
 * X-inactivation, and clinical examples.
 */

import { EducationalContent } from '../../types';

export const xLinkedInheritanceContent: EducationalContent = {
  id: 'concept-x-linked',
  type: 'concept',
  name: 'X-Linked Inheritance',
  alternateNames: ['Sex-Linked Inheritance', 'X-Linked Recessive', 'X-Linked Dominant'],

  levels: {
    1: {
      level: 1,
      summary: 'X-linked inheritance involves genes on the X chromosome and typically affects males more than females.',
      explanation: `X-linked inheritance is about genes located on the X chromosome - one of the sex chromosomes.

Remember: Girls have two X chromosomes (XX), and boys have one X and one Y (XY).

Because boys only have one X chromosome, if they inherit a changed gene on their X, they will be affected - they don't have a second X to compensate. Girls have two X chromosomes, so if one has a changed gene, the other X can often make up for it.

**X-linked recessive conditions** (like hemophilia or color blindness):
- Usually only affect boys
- Girls are usually carriers (have the gene but aren't affected)
- A carrier mom has a 50% chance of passing it to each son
- Affected dads pass the gene to all daughters (making them carriers) but no sons

**X-linked dominant conditions** (like Rett syndrome):
- Affect both girls and boys, but may be more severe in boys
- Sometimes lethal in boys before birth
- An affected mom has 50% chance of passing it to any child

One special thing about girls: In each cell, one X chromosome gets randomly turned off. This is called X-inactivation. Sometimes this causes girls who are carriers to have mild symptoms.`,
      keyTerms: [
        { term: 'X chromosome', definition: 'One of the sex chromosomes; girls have two, boys have one' },
        { term: 'X-linked', definition: 'A gene located on the X chromosome' },
        { term: 'carrier', definition: 'A female with one changed gene who usually doesn\'t have symptoms' },
        { term: 'X-inactivation', definition: 'When one X chromosome in each cell is turned off' },
      ],
      analogies: [
        'Boys are like a tightrope walker with no safety net for X-linked genes - if something goes wrong, there\'s no backup.',
        'X-inactivation is like randomly choosing which of two instruction manuals to follow in each cell.',
      ],
      examples: [
        'Hemophilia was common in European royalty and passed through carrier women to affected men.',
        'Color blindness is X-linked recessive - much more common in men than women.',
        'Duchenne muscular dystrophy primarily affects boys.',
      ],
    },
    2: {
      level: 2,
      summary: 'X-linked conditions show distinctive inheritance patterns based on hemizygosity in males and X-inactivation effects in heterozygous females.',
      explanation: `X-linked inheritance describes conditions caused by genes on the X chromosome. The pattern differs significantly between males (hemizygous, XY) and females (XX).

**X-Linked Recessive (most common pattern)**

Features:
- Primarily affects males
- Females are usually carriers (heterozygotes)
- No male-to-male transmission (father passes Y to sons)
- All daughters of affected males are carriers
- Affected males usually born to carrier mothers

| Parent | Offspring |
|--------|-----------|
| Carrier female × Normal male | 50% sons affected, 50% daughters carriers |
| Normal female × Affected male | All sons normal, all daughters carriers |

**X-Linked Dominant**

Features:
- Affects both males and females
- Affected males often more severely affected
- Some conditions lethal in males
- Affected fathers pass to all daughters, no sons
- Affected mothers have 50% affected children regardless of sex

**X-Inactivation (Lyonization)**

In each female cell:
- One X chromosome is randomly inactivated early in development
- The inactive X forms the Barr body
- Inactivation is maintained through cell division
- Results in mosaic pattern of X expression

**Clinical Implications:**
- Carrier females may have mild symptoms (unfavorable inactivation pattern)
- Manifesting heterozygotes: Carriers with clinical features
- Skewed X-inactivation: Non-random pattern favoring one X

**Examples:**

| Condition | Type | Affected | Key Features |
|-----------|------|----------|--------------|
| Hemophilia A | Recessive | Males | Factor VIII deficiency |
| Duchenne MD | Recessive | Males | Progressive muscle weakness |
| Fragile X | Special | Males>Females | Intellectual disability |
| Rett syndrome | Dominant | Females | Often male lethal |`,
      keyTerms: [
        { term: 'hemizygous', definition: 'Having only one copy of a gene; males are hemizygous for X-linked genes', pronunciation: 'hem-ee-ZY-gus' },
        { term: 'X-inactivation', definition: 'Random silencing of one X chromosome in female cells; also called Lyonization' },
        { term: 'Barr body', definition: 'The condensed inactive X chromosome visible in female cells' },
        { term: 'manifesting heterozygote', definition: 'A carrier female showing clinical features of an X-linked condition' },
        { term: 'skewed X-inactivation', definition: 'Non-random pattern of X-inactivation favoring one chromosome' },
      ],
      analogies: [
        'Hemizygosity in males is like having only one copy of a recipe - if it\'s damaged, there\'s no backup.',
        'X-inactivation creating a mosaic pattern is like a patchwork quilt with two different fabrics.',
      ],
    },
    3: {
      level: 3,
      summary: 'X-linked inheritance involves dosage compensation through X-inactivation, with cellular mosaicism in females affecting phenotype expression and requiring consideration in genetic counseling.',
      explanation: `## X Chromosome Biology

### X-Inactivation Mechanism

**Initiation:**
- Occurs at ~1000 cell stage in embryo
- XIST RNA expressed from future inactive X
- Coats chromosome in cis
- Recruits silencing machinery

**Maintenance:**
- DNA methylation (CpG islands)
- Repressive histone modifications (H3K27me3)
- Late replication timing
- Stable through cell divisions

**Escape from Inactivation:**
- ~15-25% of X-linked genes escape
- Pseudoautosomal regions (PAR1, PAR2)
- Variable between individuals
- Contributes to X-monosomy phenotypes

### Dosage Compensation Consequences

| Genotype | Active X chromosomes | X-linked gene dosage |
|----------|---------------------|---------------------|
| 46,XX | 1 | Normal |
| 46,XY | 1 | Normal |
| 45,X | 1 | Normal (but missing escape genes) |
| 47,XXY | 1 | Normal (but excess escape genes) |
| 47,XXX | 1 | Normal (excess escape genes) |

## X-Linked Recessive

### Carrier Detection

**Methods:**
- Genetic testing (direct mutation analysis)
- Biochemical testing (e.g., Factor VIII levels in hemophilia)
- Family history analysis

**Challenges:**
- ~1/3 of DMD cases are de novo
- Germline mosaicism affects recurrence
- Some carriers have symptoms

### Manifesting Carriers

**Mechanisms:**
- Skewed X-inactivation (>80:20)
- X-autosome translocation disrupting gene
- Turner syndrome (45,X)
- Homozygosity (rare)

**Clinical Examples:**
| Condition | Carrier Manifestations |
|-----------|----------------------|
| DMD | Elevated CK, mild weakness, cardiomyopathy |
| Hemophilia A | Reduced factor VIII, bleeding symptoms |
| Fabry | Pain, corneal changes, renal disease |

## X-Linked Dominant

### Characteristics

- Affected individuals in every generation
- No male-to-male transmission (same as XL recessive)
- Affected females may be less severely affected
- 2:1 female:male ratio (if not male lethal)

### Male Lethality

Some XLD conditions cause:
- Miscarriage of affected males
- Only affected females survive
- Examples: Rett syndrome, incontinentia pigmenti, Aicardi syndrome

### Phenotypic Variability in Females

**Factors:**
- X-inactivation pattern
- Somatic mosaicism
- Genetic modifiers
- Stochastic effects

## Special Inheritance Patterns

### Fragile X Syndrome

**Unique Features:**
- CGG repeat expansion in FMR1
- Sherman paradox: Increasing risk across generations
- Premutation carriers have distinct phenotypes (FXTAS, FXPOI)

| Category | Repeat Number | Phenotype |
|----------|---------------|-----------|
| Normal | <45 | Unaffected |
| Intermediate | 45-54 | Usually unaffected |
| Premutation | 55-200 | FXTAS (males), FXPOI (females) |
| Full mutation | >200 | FXS (males affected, females variable) |

### X-Linked Intellectual Disability (XLID)

- >100 genes identified
- ~10% of intellectual disability in males
- Often syndromic features
- Family history pattern diagnostic clue`,
      keyTerms: [
        { term: 'XIST', definition: 'X-inactive specific transcript; long non-coding RNA initiating X-inactivation' },
        { term: 'pseudoautosomal region', definition: 'X-Y homologous regions that escape inactivation and undergo recombination' },
        { term: 'escape gene', definition: 'X-linked gene that remains active on the inactive X chromosome' },
        { term: 'Sherman paradox', definition: 'Increasing penetrance of fragile X syndrome across generations' },
        { term: 'FXTAS', definition: 'Fragile X-associated tremor/ataxia syndrome; late-onset disorder in FMR1 premutation carriers' },
        { term: 'FXPOI', definition: 'Fragile X-associated primary ovarian insufficiency; premature menopause in premutation carriers' },
      ],
      clinicalNotes: 'Carrier females for X-linked recessive conditions should receive counseling about their own health risks, not just reproductive implications. Manifesting carrier status affects surveillance and management.',
    },
    4: {
      level: 4,
      summary: 'Advanced X-linked genetics integrates molecular mechanisms of X-inactivation, skewing analysis, mosaic detection, and comprehensive carrier risk assessment for clinical practice.',
      explanation: `## X-Inactivation Analysis

### Clinical Testing

**Indications:**
- Explain phenotype in heterozygous female
- Carrier testing when molecular testing inconclusive
- Research into disease mechanisms

**Methods:**
| Method | Principle | Limitation |
|--------|-----------|------------|
| HUMARA assay | AR gene methylation | Blood cells only |
| RNA-based | Allelic expression | Tissue-specific |
| SNP arrays | Allelic imbalance | Requires informative SNPs |

### Skewing Thresholds

| Pattern | Ratio | Clinical Significance |
|---------|-------|----------------------|
| Random | 50:50 to 65:35 | Normal |
| Moderate skewing | 65:35 to 80:20 | May be significant |
| Extreme skewing | >80:20 | Often clinically significant |

### Causes of Skewing

**Primary (developmental):**
- Stochastic with small precursor pool
- Cell selection (e.g., XIST mutations)

**Secondary (acquired):**
- Selection against cells with active mutant X
- Blood-specific (myeloid/lymphoid neoplasia)
- Age-related (increases in elderly women)

## Carrier Risk Assessment

### Bayesian Analysis

**Components:**
- Prior probability (pedigree position)
- Conditional probability (phenotypic data)
- Posterior probability (combined)

**Example: DMD Carrier Risk**
- Mother of isolated case: Prior ~2/3 carrier (1/3 de novo)
- Incorporate CK level, DNA testing
- Adjust for mutation rate

### Germline Mosaicism

**Impact on Counseling:**
| Proband Finding | Maternal Testing | Recurrence Risk |
|-----------------|------------------|-----------------|
| De novo | Negative | ~7-8% (germline mosaicism) |
| De novo | Low-level positive | Up to 50% |
| Inherited | Positive | 50% |

**Deep Sequencing:**
- Detect low-level mosaicism in mother
- Sensitivity depends on coverage depth
- May detect mosaicism at 1-5% level

## X-Autosome Translocations

### Mechanism of Disease

**In Females:**
- Translocation disrupts X-linked gene
- Normal X preferentially inactivated
- Derivative X with autosomal material remains active
- Results in functional hemizygosity

### Diagnostic Clues

- Female with "X-linked recessive" condition
- Balanced X-autosome translocation on karyotype
- Often detected at cytogenetic resolution

## Clinical Management

### DMD Carrier Females

**Recommendations:**
- Baseline echocardiogram at diagnosis or by 25 years
- Echo every 3-5 years if normal
- Cardiac MRI if echo abnormal
- Monitor for skeletal muscle symptoms

### Hemophilia Carriers

**Considerations:**
- Factor VIII/IX levels (wide range in carriers)
- Symptomatic if <40% activity
- Bleeding precautions for procedures
- Pregnancy/delivery planning

### Fabry Carriers

**Disease Manifestations:**
- Significant disease in 60-70%
- Corneal changes (cornea verticillata)
- Neuropathic pain
- Renal/cardiac involvement
- ERT may be indicated

## Gene Therapy Considerations

### X-Linked Targets

| Condition | Vector | Target | Status |
|-----------|--------|--------|--------|
| Hemophilia A | AAV5 | Liver | Approved |
| Hemophilia B | AAV5 | Liver | Approved |
| DMD | AAV9 | Muscle | Trials |
| X-SCID | Lentiviral | HSCs | Approved |

### Carrier Implications

- Gene therapy transforms inheritance counseling
- Treated males may still transmit variant
- Daughter of treated male = carrier
- Sperm banking discussions`,
      keyTerms: [
        { term: 'HUMARA assay', definition: 'Human androgen receptor assay; methylation-based test for X-inactivation skewing' },
        { term: 'Bayesian analysis', definition: 'Statistical method combining prior and conditional probabilities for carrier risk assessment' },
        { term: 'germline mosaicism', definition: 'Presence of mutation in germ cells but not detectable in blood' },
        { term: 'X-autosome translocation', definition: 'Chromosomal rearrangement between X and autosome; can cause disease in females' },
        { term: 'functional hemizygosity', definition: 'Having only one functional copy of an X-linked gene; normal in males, abnormal in females' },
        { term: 'cornea verticillata', definition: 'Whorl-like corneal opacity seen in Fabry disease carriers' },
      ],
      clinicalNotes: 'Female carriers of X-linked conditions require specific surveillance protocols. X-inactivation analysis can explain phenotypic variability but is not routinely indicated. Deep sequencing of mothers of "de novo" cases can inform recurrence risks.',
    },
    5: {
      level: 5,
      summary: 'Clinical practice for X-linked conditions integrates comprehensive carrier detection, personalized risk assessment, reproductive options, and evolving therapeutic interventions including gene therapy.',
      explanation: `## Comprehensive Carrier Testing

### Testing Algorithm

**Step 1: Family Variant Identification**
- Sequence proband
- Identify pathogenic variant
- Deletion/duplication analysis if sequencing negative

**Step 2: Obligate vs. At-Risk Carriers**
| Category | Definition | Testing Approach |
|----------|------------|------------------|
| Obligate | Unaffected mother of 2+ affected males | Confirmatory testing |
| At-risk | Sister of affected male, mother with 1 affected | Full testing |
| Extended | Maternal relatives | Cascade testing |

**Step 3: Interpret in Clinical Context**
- X-inactivation status if symptomatic
- Mosaicism assessment in mothers
- Residual risk if negative (consider gene size)

### Population Screening Considerations

**Fragile X:**
- Some advocate universal screening
- Identifies premutation carriers
- Ethical complexity (predictive testing)

**DMD:**
- High de novo rate challenges screening
- Newborn screening emerging (CK + DNA)
- Identifies carriers as incidental finding

## Reproductive Counseling

### Risk Figures

**For Carrier Females:**
| Scenario | Affected Sons | Carrier Daughters |
|----------|---------------|-------------------|
| XL recessive carrier | 50% | 50% |
| XL dominant carrier | 50% affected sons | 50% affected daughters |

**Special Situations:**
- Germline mosaicism: Empiric 4-8% if apparently de novo
- Premutation carrier: Risk of expansion to full mutation
- X-inactivation testing: May predict severity in daughters

### Reproductive Options

| Option | Description | X-Linked Specific Considerations |
|--------|-------------|-----------------------------------|
| PGT-M | IVF + embryo testing | Can test sex + mutation |
| PGT-SR | For translocations | X-autosome translocations |
| Prenatal Dx | CVS/amnio | Sex determination + variant testing |
| Sex selection | PGT or sperm sorting | Transfer only females (controversial) |
| Donor egg | Eliminates carrier status | For high-risk females |

### Non-Invasive Prenatal Options

**cfDNA:**
- Fetal sex determination (>99% accurate)
- Single gene testing emerging
- Limited availability for X-linked variants

**Workflow:**
1. cfDNA sex determination
2. If male: Offer invasive testing
3. If female: Discuss carrier implications

## Emerging Therapies

### Gene Therapy for X-Linked Conditions

**Hemophilia:**
| Product | Gene | Approach | Efficacy |
|---------|------|----------|----------|
| Valoctocogene roxaparvovec | F8 | AAV5 to liver | ~40% normal activity |
| Etranacogene dezaparvovec | F9 | AAV5 to liver | ~40% normal activity |
| Fidanacogene elaparvovec | F9 | AAV-Spark100 | Ongoing trials |

**Considerations:**
- Pre-existing AAV antibodies exclude ~30%
- Durability questions (some decline over time)
- Immunosuppression may be required
- Cost ($2-3 million)

**DMD:**
| Approach | Strategy | Status |
|----------|----------|--------|
| Exon skipping | ASOs (eteplirsen, etc.) | Approved (limited efficacy) |
| Micro-dystrophin | AAV-delivered mini-gene | Trials |
| Gene editing | CRISPR to restore frame | Preclinical |

### Non-Gene Therapy Innovations

**Hemophilia:**
- Emicizumab: Bispecific antibody (Factor VIIIa mimetic)
- Fitusiran: siRNA reducing antithrombin
- Concizumab: Anti-TFPI antibody

**DMD:**
- Corticosteroids: Standard of care
- Vamorolone: Dissociative steroid
- Givinostat: HDAC inhibitor (European approval)

## Health Policy Considerations

### Newborn Screening Expansion

**Arguments For:**
- Early diagnosis improves outcomes
- Gene therapy most effective when started early
- Family planning information

**Arguments Against:**
- Identifies carriers (not just affected)
- Predictive testing in minors
- Psychological impact

### Insurance and Access

**Current Landscape:**
- Gene therapies: $2-3 million
- Outcome-based contracts emerging
- International variation in access

**Coverage Challenges:**
- Carriers needing surveillance
- Manifesting carrier treatment
- Gene therapy authorization

### Genetic Counseling Workforce

- Demand increasing with expanded testing
- Genetic counselor shortages
- Telegenetics expanding access
- Primary care genomic literacy needs`,
      keyTerms: [
        { term: 'valoctocogene roxaparvovec', definition: 'AAV5 gene therapy for hemophilia A delivering functional F8 gene to liver' },
        { term: 'emicizumab', definition: 'Bispecific antibody mimicking factor VIIIa function for hemophilia A prophylaxis' },
        { term: 'exon skipping', definition: 'Antisense approach to restore dystrophin reading frame in DMD' },
        { term: 'micro-dystrophin', definition: 'Shortened but functional dystrophin gene that fits in AAV vector' },
        { term: 'sperm sorting', definition: 'Separation of X-bearing from Y-bearing sperm for sex selection' },
        { term: 'telegenetics', definition: 'Genetic counseling provided via telemedicine' },
      ],
      clinicalNotes: `Clinical practice essentials:
1. Female carriers of X-linked recessive conditions need health surveillance
2. Germline mosaicism affects recurrence risk counseling
3. cfDNA can non-invasively determine fetal sex, guiding invasive testing decisions
4. Gene therapy is transforming management of hemophilia
5. Carrier identification has reproductive, insurance, and psychological implications
6. Expanded newborn screening for X-linked conditions is evolving`,
    },
  },

  media: [
    {
      id: 'xl-pedigree',
      type: 'diagram',
      filename: 'x-linked-pedigree.svg',
      title: 'X-Linked Recessive Pedigree',
      description: 'Family tree showing carrier females and affected males',
    },
    {
      id: 'x-inactivation',
      type: 'diagram',
      filename: 'x-inactivation.svg',
      title: 'X-Inactivation',
      description: 'Random inactivation creating cellular mosaicism',
    },
  ],

  citations: [
    {
      id: 'lyon-1961',
      type: 'article',
      title: 'Gene Action in the X-chromosome of the Mouse',
      authors: ['Lyon, M.F.'],
      source: 'Nature',
      chapter: '190',
      page: '372-373',
    },
  ],

  crossReferences: [
    { targetId: 'concept-autosomal-dominant', targetType: 'concept', relationship: 'sibling', label: 'Autosomal Dominant' },
    { targetId: 'concept-autosomal-recessive', targetType: 'concept', relationship: 'sibling', label: 'Autosomal Recessive' },
    { targetId: 'condition-hemophilia', targetType: 'condition', relationship: 'related', label: 'Hemophilia' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['inheritance patterns', 'X-inactivation', 'genetic counseling'],
    keywords: ['X-linked', 'carrier', 'hemizygous', 'Lyon hypothesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default xLinkedInheritanceContent;
