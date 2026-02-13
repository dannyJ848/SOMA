/**
 * Autosomal Recessive Inheritance - Comprehensive Educational Content
 *
 * Covers the principles of autosomal recessive inheritance patterns,
 * carrier states, and clinical examples.
 */

import { EducationalContent } from '../../types';

export const autosomalRecessiveContent: EducationalContent = {
  id: 'concept-autosomal-recessive',
  type: 'concept',
  name: 'Autosomal Recessive Inheritance',
  alternateNames: ['Recessive Inheritance', 'AR Inheritance'],

  levels: {
    1: {
      level: 1,
      summary: 'In autosomal recessive inheritance, you need two copies of a changed gene - one from each parent - to have the condition.',
      explanation: `Autosomal recessive inheritance is a way genetic conditions can pass through families.

"Autosomal" means the gene is on one of the 22 numbered chromosomes. "Recessive" means you need TWO copies of the changed gene to have the condition - one from mom and one from dad.

People with only ONE copy of the changed gene are called "carriers." Carriers are usually completely healthy - they don't have the condition. But they can pass the gene to their children.

Here's what happens when two carriers have children:
- There's a 25% (1 in 4) chance a child will have the condition (got the changed gene from both parents)
- There's a 50% (1 in 2) chance a child will be a carrier like the parents
- There's a 25% (1 in 4) chance a child won't have the gene at all

Some things to know:
- The condition often appears "out of nowhere" because carriers don't show symptoms
- Brothers and sisters (not parents and children) are usually the ones affected
- Boys and girls are equally likely to have the condition
- If parents are related (like cousins), there's a higher chance both carry the same gene change`,
      keyTerms: [
        { term: 'recessive', definition: 'You need two copies of the changed gene to have the condition' },
        { term: 'carrier', definition: 'Someone with one copy of a recessive gene change who doesn\'t have the condition but can pass it on' },
        { term: 'autosomal', definition: 'On one of the 22 numbered chromosomes' },
      ],
      analogies: [
        'A recessive gene is like a quiet voice - it only affects you when both voices say the same thing.',
        'It\'s like needing two keys to open a lock - one key alone doesn\'t do anything.',
        'Carriers are like people carrying umbrellas on a sunny day - they have the umbrella but aren\'t using it.',
      ],
      examples: [
        'Cystic fibrosis is autosomal recessive - both parents must be carriers for a child to have it.',
        'Sickle cell disease requires inheriting the gene from both mom and dad.',
        'Many metabolic disorders follow this pattern.',
      ],
    },
    2: {
      level: 2,
      summary: 'Autosomal recessive conditions require two pathogenic alleles (homozygosity or compound heterozygosity) and typically show horizontal transmission among siblings with 25% recurrence risk.',
      explanation: `Autosomal recessive inheritance occurs when an individual must have pathogenic variants on both copies of a gene to manifest the condition.

**Key Characteristics:**

1. **Horizontal Transmission**: Typically affects siblings, not multiple generations
2. **25% Recurrence Risk**: When both parents are carriers
3. **Carrier Parents**: Usually unaffected
4. **Equal Sex Ratio**: Males and females equally affected
5. **Consanguinity**: Increases risk (both parents more likely to carry same variant)

**Punnett Square for Two Carrier Parents (Aa x Aa):**

|   | A | a |
|---|---|---|
| A | AA (unaffected) | Aa (carrier) |
| a | Aa (carrier) | aa (affected) |

Results: 25% affected, 50% carrier, 25% non-carrier

**Genotypes in Affected Individuals:**

- **Homozygous**: Same pathogenic variant on both alleles
  - Often occurs with consanguinity or founder mutations

- **Compound heterozygous**: Different pathogenic variant on each allele
  - More common in outbred populations
  - May have phenotypic implications if variants differ in severity

**Carrier Frequency and Disease Incidence:**

If carrier frequency = 1/q, then:
- Disease frequency = (1/q)² × 1/4
- Example: CF carrier frequency ~1/25 in Caucasians
  - Disease frequency: (1/25)² × 1/4 = 1/2,500

**Consanguinity Effects:**

| Relationship | Shared DNA | Risk Increase |
|--------------|------------|---------------|
| First cousins | 1/8 | ~2x for common variants |
| Second cousins | 1/32 | Slight increase |
| Unrelated | - | Population baseline |

Consanguinity uncovers rare recessive variants - "consanguinity loop" in pedigrees.`,
      keyTerms: [
        { term: 'homozygous', definition: 'Having two identical alleles at a genetic locus', pronunciation: 'hoh-moh-ZY-gus' },
        { term: 'compound heterozygous', definition: 'Having two different pathogenic variants in the same gene, one on each chromosome', pronunciation: 'HET-er-oh-ZY-gus' },
        { term: 'consanguinity', definition: 'Being related by blood; having a common ancestor', pronunciation: 'kon-san-GWIN-ih-tee' },
        { term: 'carrier frequency', definition: 'The proportion of people in a population who carry one copy of a pathogenic variant' },
        { term: 'founder mutation', definition: 'A pathogenic variant that originated in a single ancestor and is now common in descendants' },
      ],
      analogies: [
        'Compound heterozygosity is like having two different broken parts in the same machine - either one alone might work, but together they fail.',
        'Consanguinity is like two branches of a family tree connecting - genes that were spread apart come back together.',
      ],
    },
    3: {
      level: 3,
      summary: 'AR inheritance reflects biallelic loss of function, with carrier detection, disease frequency calculations, and compound heterozygote assessment central to genetic counseling.',
      explanation: `## Molecular Basis

### Loss of Function Requirement

Most AR conditions result from:
- Null alleles (complete loss of function)
- Hypomorphic alleles (reduced function)
- Complete loss requires both alleles affected

### Genotype-Phenotype Correlations

| Genotype | Function | Phenotype |
|----------|----------|-----------|
| Two null alleles | 0% | Severe |
| Null + hypomorph | 5-20% | Moderate |
| Two hypomorphs | 10-30% | Mild |
| Carrier (one null) | ~50% | Usually unaffected |

### Threshold Effect

- Enzyme activity threshold for disease varies
- Typically <25% activity causes phenotype
- Explains why carriers (50% activity) are unaffected
- Pseudodeficiency alleles: Low in vitro activity but clinically normal

## Population Genetics

### Hardy-Weinberg Equilibrium

For allele frequencies p (normal) and q (pathogenic):
- p² = AA (unaffected)
- 2pq = Aa (carriers)
- q² = aa (affected)

Where p + q = 1

### Carrier Frequency Calculations

| Condition | Disease Frequency | Carrier Frequency | Population |
|-----------|------------------|-------------------|------------|
| Cystic fibrosis | 1/2,500 | 1/25 | Caucasian |
| Sickle cell | 1/500 | 1/12 | African American |
| Tay-Sachs | 1/3,600 | 1/30 | Ashkenazi Jewish |
| PKU | 1/10,000 | 1/50 | General |

### Founder Effects

Specific mutations enriched in genetic isolates:
- Ashkenazi Jewish: TSD, Gaucher, CF (W1282X)
- Finnish disease heritage: ~35 rare AR conditions
- Amish/Mennonite: Multiple specific founder variants

## Carrier Detection

### Testing Strategies

**Targeted Mutation Panels:**
- Screen for common pathogenic variants
- Population-specific panels
- Detection rate varies by ethnicity
- May miss rare variants

**Sequencing-Based Carrier Screening:**
- Expanded carrier screening (ECS)
- Higher detection rate
- More VUS interpretation challenges

### Detection Rate Example: CFTR

| Population | Panel Detection | Residual Risk |
|------------|-----------------|---------------|
| Ashkenazi Jewish | 97% | 1/930 |
| Caucasian | 88% | 1/200 |
| Hispanic | 72% | 1/100 |
| African American | 64% | 1/65 |
| Asian | 49% | 1/180 |

Residual carrier risk after negative screen depends on population.

## Compound Heterozygosity Assessment

### Phasing Determination

**Methods:**
- Parental testing (most reliable)
- Allele-specific PCR
- Long-read sequencing
- Statistical phasing

**Clinical Importance:**
- Confirms biallelic state
- Two variants in cis = carrier only
- Two variants in trans = affected

### Special Considerations

**Large Genes with Many Variants:**
- CFTR: >2,000 variants reported
- ABCA4 (Stargardt): Complex interpretation
- Need to distinguish pathogenic from benign rare variants`,
      keyTerms: [
        { term: 'Hardy-Weinberg equilibrium', definition: 'Mathematical relationship between allele and genotype frequencies in a population' },
        { term: 'pseudodeficiency allele', definition: 'Variant causing reduced enzyme activity in lab tests but not clinical disease' },
        { term: 'expanded carrier screening', definition: 'Testing for carrier status of many conditions simultaneously' },
        { term: 'phase', definition: 'Whether two variants are on the same (cis) or different (trans) chromosomes' },
        { term: 'residual risk', definition: 'Remaining carrier probability after a negative screening test' },
        { term: 'founder effect', definition: 'High frequency of specific variants due to descent from small founding population' },
      ],
      clinicalNotes: 'Residual carrier risk must be communicated when counseling negative carrier screening results. Risk varies significantly by ethnicity. Consider reflex to sequencing when panel negative but clinical suspicion high.',
    },
    4: {
      level: 4,
      summary: 'Advanced AR genetics integrates expanded carrier screening interpretation, allelic heterogeneity assessment, and evolving paradigms for genotype-phenotype prediction in clinical care.',
      explanation: `## Expanded Carrier Screening

### Panel Design Considerations

**Condition Selection Criteria (ACOG/ACMG):**
- Carrier frequency ≥1/100 OR
- Well-defined phenotype
- Condition causes cognitive/physical impairment
- Early onset
- Prenatal diagnosis/intervention available

**Technical Considerations:**
- Deep coverage for accurate calling
- CNV detection capability
- Variant curation quality
- Population database representation

### Result Interpretation Complexity

**Scenario Analysis:**

| Partner 1 | Partner 2 | Action |
|-----------|-----------|--------|
| Carrier (P/LP) | Carrier (P/LP) | Genetic counseling, consider prenatal Dx |
| Carrier | VUS | Limited risk assessment possible |
| Carrier | Negative | Calculate residual risk |
| VUS | VUS | Cannot make conclusions |
| Negative | Negative | Reassurance with residual risk |

### Reproductive Risk Calculation

For couple with same-gene carriers:
- a priori risk = 1/4 (Mendelian)

With one negative partner (detection rate D):
- Carrier risk = (1-D)/(1-D×q), where q = carrier frequency
- Couple risk = carrier risk × 1/4

## Complex Inheritance Patterns

### Digenic Inheritance

Two genes required for phenotype:
- Example: Some retinitis pigmentosa (PRPH2 + ROM1)
- Example: Bardet-Biedl syndrome modifier effects
- Complicates recurrence risk assessment

### Modifier Genes

| Primary Gene | Modifier | Effect |
|--------------|----------|--------|
| CFTR | TGFB1 | Lung disease severity |
| HFE | Multiple | Iron overload severity |
| Beta-globin | Alpha-globin | Thalassemia severity |

### Pseudodominant Inheritance

AR condition appearing dominant:
- Carrier frequency high in population
- Affected individual × carrier = 50% affected offspring
- Example: Hemochromatosis in population with high carrier frequency

## Genotype-First Approaches

### Newborn Screening Implications

**When Screening Detects AR Condition:**
- Often identifies carriers (incidental)
- Some genotypes have uncertain phenotype
- Variants of uncertain clinical significance

**Example: CF Newborn Screening**
- Immunoreactive trypsinogen (IRT) elevated
- DNA analysis for CFTR variants
- Some genotypes = CFTR-related metabolic syndrome (not classic CF)

### Population Screening Discoveries

- Reduced penetrance variants identified
- Hypomorphic alleles more common than expected
- Challenges classic genotype → phenotype predictions

## Special Populations

### Consanguineous Families

**Approach:**
- Homozygosity mapping
- Whole exome/genome sequencing
- Filter for runs of homozygosity
- Higher diagnostic yield

**Recurrence Risk:**
- May be higher than 25% if multiple AR conditions segregating
- Empiric risk depends on coefficient of inbreeding

### Rare Disease Diagnosis

**Diagnostic Odyssey:**
- AR conditions often undiagnosed longer
- Novel gene discovery common
- International matchmaking (GeneMatcher)

**Functional Validation:**
- Cell-based assays
- Model organisms
- Critical for novel genes/variants`,
      keyTerms: [
        { term: 'digenic inheritance', definition: 'Inheritance pattern requiring pathogenic variants in two different genes' },
        { term: 'pseudodominant inheritance', definition: 'AR condition appearing to follow dominant pattern due to high carrier frequency' },
        { term: 'homozygosity mapping', definition: 'Using runs of homozygosity to identify candidate disease genes in consanguineous families' },
        { term: 'CFTR-related metabolic syndrome', definition: 'Mild CFTR dysfunction not meeting classic CF diagnostic criteria' },
        { term: 'coefficient of inbreeding', definition: 'Probability that two alleles at any locus are identical by descent' },
        { term: 'GeneMatcher', definition: 'Platform connecting researchers/clinicians with shared interest in candidate genes' },
      ],
      clinicalNotes: 'For consanguineous families, recommend genome-wide approach (WES/WGS) with homozygosity analysis. Multiple AR conditions may segregate in same family. Genetic counseling should address all identified risks.',
    },
    5: {
      level: 5,
      summary: 'Clinical management of AR conditions spans carrier screening implementation, reproductive options, newborn screening integration, and emerging therapeutic approaches including gene therapy and enzyme replacement.',
      explanation: `## Carrier Screening Implementation

### Practice Guidelines

**ACOG/ACMG Recommendations:**
- Offer carrier screening to all individuals considering pregnancy
- Ethnicity-based or expanded panel approaches acceptable
- Test one partner; if carrier, test other
- Or test both simultaneously

**Pre-Test Counseling Elements:**
- Purpose and limitations
- Residual risk concept
- VUS possibility
- Implications for relatives
- Reproductive options if both carriers

### Laboratory Considerations

**Quality Metrics:**
| Metric | Standard |
|--------|----------|
| Sensitivity | >99% for targeted variants |
| Specificity | >99.9% |
| CNV detection | Gene-specific validation |
| Reporting time | <14 days |

**Variant Classification:**
- Only report P/LP for carrier status
- VUS policies vary
- Regular reclassification review

## Reproductive Options

### Preconception

| Option | Description | Considerations |
|--------|-------------|----------------|
| Natural conception + prenatal Dx | CVS/amnio for diagnosis | Invasive, decision points |
| PGT-M | IVF with embryo testing | Resource-intensive, ~30% success |
| Donor gametes | Use unaffected donor | Genetic discontinuity |
| Adoption | No biological risk | Personal choice |

### Prenatal Diagnosis

**Timing:**
- CVS: 10-13 weeks
- Amniocentesis: 15+ weeks
- Both >99% accurate for known variants

**Non-Invasive Considerations:**
- cfDNA limited for AR conditions
- Requires paternal variant detection
- Emerging applications for some conditions

## Newborn Screening Integration

### Current AR Conditions Screened

Varies by state/country; examples:
- PKU
- Galactosemia
- MCAD deficiency
- Sickle cell disease
- Cystic fibrosis
- Severe combined immunodeficiency (SCID)

### Molecular Confirmation

**Workflow:**
1. Positive biochemical screen
2. Molecular testing for confirmation
3. Genotype-phenotype correlation
4. Family variant analysis
5. Genetic counseling

### Challenges

- False positives causing parental anxiety
- Identifying carriers (not disease)
- Genotypes of uncertain clinical significance
- Variable condition severity prediction

## Therapeutic Advances

### Enzyme Replacement Therapy (ERT)

| Condition | Enzyme | Outcomes |
|-----------|--------|----------|
| Gaucher type 1 | Imiglucerase | Improved hematologic, skeletal |
| Fabry | Agalsidase | Reduced cardiac, renal progression |
| Pompe | Alglucosidase | Improved survival, motor function |
| MPS I | Laronidase | Reduced GAG accumulation |

**Limitations:**
- Does not cross blood-brain barrier
- Antibody formation
- Lifelong treatment
- High cost

### Substrate Reduction Therapy

- Eliglustat (Gaucher)
- Miglustat (Gaucher, Niemann-Pick C)
- Oral administration advantage
- May complement ERT

### Gene Therapy

**AAV-Based Approaches:**

| Condition | Vector | Target | Status |
|-----------|--------|--------|--------|
| SMA | AAV9 | CNS | Approved (Zolgensma) |
| Hemophilia A/B | AAV5 | Liver | Approved/trials |
| MPS I | AAV | CNS | Trials |
| Phenylketonuria | AAV | Liver | Trials |

**Considerations:**
- Pre-existing AAV antibodies
- Durability of expression
- Immunogenicity
- One-time vs. repeat dosing

### mRNA/ASO Therapeutics

- Patisiran (hATTR): siRNA
- Inotersen (hATTR): ASO
- Emerging applications for other AR conditions

## Health Economics

### Cost-Effectiveness Analyses

**Carrier Screening:**
- Generally cost-effective when considering avoided births of affected children
- Expanded panels more complex analysis
- Must include counseling costs

**Treatment Costs:**

| Treatment | Annual Cost | Lifetime Cost |
|-----------|-------------|---------------|
| ERT (Gaucher) | ~$300,000 | $15+ million |
| Gene therapy (SMA) | ~$2.1 million | One-time |
| ERT (Fabry) | ~$250,000 | $10+ million |

**Value Frameworks:**
- QALY-based assessments
- Societal perspectives
- Rare disease considerations`,
      keyTerms: [
        { term: 'enzyme replacement therapy', definition: 'Treatment providing missing enzyme via IV infusion' },
        { term: 'substrate reduction therapy', definition: 'Treatment reducing accumulation of substrate by inhibiting its synthesis' },
        { term: 'Zolgensma', definition: 'AAV9-based gene therapy for spinal muscular atrophy; one-time IV administration' },
        { term: 'QALY', definition: 'Quality-adjusted life year; measure of disease burden for cost-effectiveness analysis' },
        { term: 'newborn screening', definition: 'Population-based testing of infants for treatable genetic conditions' },
        { term: 'biochemical screen', definition: 'Laboratory test measuring metabolites or enzyme activity' },
      ],
      clinicalNotes: `Key practice points:
1. Offer carrier screening to all patients planning pregnancy
2. Calculate and communicate residual risk after negative screen
3. Consanguineous couples warrant expanded genetic evaluation
4. NBS positive results need careful genotype interpretation
5. ERT and gene therapy transforming outcomes for many AR conditions
6. Cost and access remain significant barriers to treatment`,
    },
  },

  media: [
    {
      id: 'ar-pedigree',
      type: 'diagram',
      filename: 'autosomal-recessive-pedigree.svg',
      title: 'Autosomal Recessive Pedigree',
      description: 'Family tree showing horizontal transmission pattern',
    },
    {
      id: 'ar-punnett',
      type: 'diagram',
      filename: 'ar-punnett-square.svg',
      title: 'Carrier Cross Punnett Square',
      description: '25% affected, 50% carrier, 25% non-carrier',
    },
  ],

  citations: [
    {
      id: 'nussbaum-genetics-ar',
      type: 'textbook',
      title: 'Thompson & Thompson Genetics in Medicine',
      authors: ['Nussbaum, R.L.', 'McInnes, R.R.', 'Willard, H.F.'],
      source: 'Elsevier',
      chapter: '7',
    },
  ],

  crossReferences: [
    { targetId: 'concept-autosomal-dominant', targetType: 'concept', relationship: 'sibling', label: 'Autosomal Dominant' },
    { targetId: 'concept-carrier-screening', targetType: 'concept', relationship: 'related', label: 'Carrier Screening' },
    { targetId: 'condition-cystic-fibrosis', targetType: 'condition', relationship: 'related', label: 'Cystic Fibrosis' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['inheritance patterns', 'genetic counseling', 'carrier screening'],
    keywords: ['autosomal recessive', 'carrier', 'compound heterozygous'],
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

export default autosomalRecessiveContent;
