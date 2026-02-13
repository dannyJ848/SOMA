/**
 * Autosomal Dominant Inheritance - Comprehensive Educational Content
 *
 * Covers the principles of autosomal dominant inheritance patterns,
 * characteristics, and clinical examples.
 */

import { EducationalContent } from '../../types';

export const autosomalDominantContent: EducationalContent = {
  id: 'concept-autosomal-dominant',
  type: 'concept',
  name: 'Autosomal Dominant Inheritance',
  alternateNames: ['Dominant Inheritance', 'AD Inheritance'],

  levels: {
    1: {
      level: 1,
      summary: 'In autosomal dominant inheritance, you only need one copy of a changed gene from one parent to have the condition.',
      explanation: `Autosomal dominant inheritance is one way genetic conditions can be passed from parents to children.

"Autosomal" means the gene is on one of the 22 numbered chromosomes (not the X or Y sex chromosomes). "Dominant" means only one copy of the changed gene is enough to cause the condition.

Think of it like having a recipe with one wrong ingredient. Even though you have two copies of the recipe (one from mom, one from dad), if just one copy has the mistake, the dish turns out different.

Key things to know:
- If a parent has the condition, there's a 50% (1 in 2) chance each child will inherit it
- Boys and girls are equally likely to be affected
- The condition usually appears in every generation
- If you don't have the condition, you won't pass it to your children

Some conditions can be more or less severe in different family members, even though they have the same gene change. And sometimes, a person might carry the changed gene but never show symptoms.`,
      keyTerms: [
        { term: 'autosomal', definition: 'On one of the 22 numbered chromosomes, not the sex chromosomes' },
        { term: 'dominant', definition: 'Only one copy of the changed gene is needed to cause the condition' },
        { term: 'inherit', definition: 'To receive something from your parents through their genes' },
      ],
      analogies: [
        'A dominant gene change is like a loud voice that drowns out a quiet voice - it takes over even when paired with a normal gene.',
        'It\'s like a single burned-out bulb on a string of lights - one bad bulb affects the whole string.',
      ],
      examples: [
        'Huntington disease is autosomal dominant - if a parent has it, each child has a 50% chance of inheriting it.',
        'Marfan syndrome, which affects connective tissue, follows this pattern.',
        'Many forms of hereditary deafness are autosomal dominant.',
      ],
    },
    2: {
      level: 2,
      summary: 'Autosomal dominant conditions require only one pathogenic allele to manifest, typically showing vertical transmission and 50% recurrence risk to offspring.',
      explanation: `Autosomal dominant inheritance occurs when a single pathogenic variant on one chromosome is sufficient to cause a phenotype, even when the other chromosome carries a normal allele.

**Key Characteristics:**

1. **Vertical Transmission**: The condition typically appears in every generation
2. **50% Recurrence Risk**: Each child of an affected person has a 1 in 2 chance of inheriting the condition
3. **Male-to-Male Transmission**: Can occur (distinguishes from X-linked)
4. **Equal Sex Ratio**: Males and females equally affected

**Punnett Square for Affected Parent (Aa) x Unaffected Parent (aa):**

|   | a | a |
|---|---|---|
| A | Aa (affected) | Aa (affected) |
| a | aa (unaffected) | aa (unaffected) |

Result: 50% affected, 50% unaffected

**Important Concepts:**

**Penetrance**: Not everyone with the pathogenic variant shows symptoms
- Complete penetrance: 100% of carriers show phenotype
- Incomplete penetrance: Some carriers appear unaffected
- Example: BRCA1 has ~70% penetrance for breast cancer

**Variable Expressivity**: Same genotype can cause different severity
- Example: Neurofibromatosis type 1 - some have mild skin findings, others severe tumors

**De Novo Mutations**: Sometimes neither parent has the variant
- New mutation occurs in egg, sperm, or early embryo
- Recurrence risk for future siblings is low (but not zero due to gonadal mosaicism)
- Example: ~90% of achondroplasia cases are de novo

**Age of Onset**: Some conditions appear later in life
- Huntington disease: Typically 30s-40s
- Creates challenges for presymptomatic testing`,
      keyTerms: [
        { term: 'allele', definition: 'One of two copies of a gene; one inherited from each parent', pronunciation: 'ah-LEEL' },
        { term: 'penetrance', definition: 'The proportion of individuals with a pathogenic variant who show any features of the condition', pronunciation: 'PEN-eh-trans' },
        { term: 'expressivity', definition: 'The degree or range of features shown by someone with a genetic condition' },
        { term: 'de novo mutation', definition: 'A new genetic change that occurs for the first time in a family', pronunciation: 'day NOH-voh' },
        { term: 'gonadal mosaicism', definition: 'When some egg or sperm cells carry a mutation that isn\'t in blood cells' },
      ],
      analogies: [
        'Penetrance is like volume on a speaker - a gene can be turned up (complete penetrance) or occasionally stay quiet.',
        'Variable expressivity is like the same recipe tasting different each time - same ingredients, different results.',
      ],
    },
    3: {
      level: 3,
      summary: 'Autosomal dominant conditions arise from heterozygous pathogenic variants through haploinsufficiency, dominant negative effects, or gain-of-function mechanisms, with penetrance and expressivity modified by genetic and environmental factors.',
      explanation: `## Molecular Mechanisms

### Haploinsufficiency
One functional copy cannot produce sufficient protein:
- 50% normal protein is inadequate
- Examples: LDLR (familial hypercholesterolemia), TP53 (Li-Fraumeni)

### Dominant Negative
Mutant protein interferes with wild-type function:
- Often in proteins forming multimers
- Examples: Collagen disorders, p53 tetramer disruption

### Gain of Function
Mutant protein has new or enhanced activity:
- Constitutive activation
- Altered specificity
- Examples: Achondroplasia (FGFR3), Noonan syndrome (PTPN11)

## Penetrance Modifiers

| Factor | Example | Effect |
|--------|---------|--------|
| Genetic modifiers | BRCA penetrance genes | Alter expression/function |
| Allelic heterogeneity | Different mutations in same gene | Mutation-specific penetrance |
| Environmental | Smoking in AAT deficiency | Triggers disease manifestation |
| Age | HD repeat length | Earlier onset with longer repeats |
| Sex | BRCA breast cancer | Higher in females |

### Reduced Penetrance Mechanisms

- Alternative splicing producing some normal protein
- Upregulation of paralogs
- Modifier gene compensation
- Somatic mosaicism in unaffected parent

## Variable Expressivity

### Contributing Factors

1. **Stochastic effects**: Random developmental variation
2. **Somatic mutation**: Second hits in tumor suppressors
3. **Modifier genes**: Background genetic variation
4. **Environmental factors**: Exposure-dependent manifestation
5. **Imprinting effects**: Parent-of-origin influences

### Examples of Variable Expressivity

| Disorder | Gene | Expression Range |
|----------|------|------------------|
| NF1 | NF1 | Cafe-au-lait spots → malignant tumors |
| Marfan | FBN1 | Mild skeletal → aortic dissection |
| Tuberous sclerosis | TSC1/2 | Skin lesions → epilepsy, renal failure |

## De Novo Mutations

### Characteristics
- Parental age effect (especially paternal)
- Recurrence risk ~1% due to gonadal mosaicism
- Higher for conditions with reduced reproductive fitness

### Detection
- Trio sequencing (proband + parents)
- Confirm true de novo vs. non-paternity
- Rule out low-level parental mosaicism

## Anticipation

Progressive worsening across generations:
- Trinucleotide repeat expansion
- Longer repeats → earlier onset, more severe
- Examples: Huntington disease, myotonic dystrophy
- Usually paternal transmission (HD), maternal (DM1)`,
      keyTerms: [
        { term: 'haploinsufficiency', definition: 'When one functional gene copy produces insufficient protein for normal function', pronunciation: 'HAP-loh-in-suh-FISH-en-see' },
        { term: 'dominant negative', definition: 'Mutant protein that interferes with wild-type protein, often by forming non-functional multimers' },
        { term: 'gain of function', definition: 'Mutation conferring new or enhanced activity to the protein' },
        { term: 'anticipation', definition: 'Progressive earlier onset or increased severity across generations' },
        { term: 'modifier gene', definition: 'Gene affecting the expression or severity of another gene\'s phenotype' },
        { term: 'allelic heterogeneity', definition: 'Different mutations in the same gene causing the same or related phenotypes' },
      ],
      clinicalNotes: 'Reduced penetrance in a family can lead to apparently "skipped generations." Always take a three-generation pedigree even when inheritance pattern seems clear.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of autosomal dominant inheritance incorporates quantitative penetrance modeling, mosaicism detection, genotype-phenotype correlations, and evolving diagnostic strategies.',
      explanation: `## Quantitative Penetrance Analysis

### Age-Related Penetrance Models

Cumulative penetrance curves:
- Survival analysis methods
- Kaplan-Meier estimation
- Allows for censoring of at-risk individuals

**Example: BRCA1 Breast Cancer**
| Age | Cumulative Risk |
|-----|-----------------|
| 40 | ~20% |
| 50 | ~35% |
| 60 | ~50% |
| 70 | ~70% |

### Penetrance Estimation Challenges

- Ascertainment bias (affected families overrepresented)
- Incomplete follow-up
- Phenotype definition variability
- Founder effect skews population data

## Mosaicism Considerations

### Types

**Somatic Mosaicism:**
- Variant in some but not all cells
- May explain apparent non-penetrance
- Tissue distribution affects phenotype

**Germline/Gonadal Mosaicism:**
- Variant in gonadal cells, not somatic
- Explains recurrence in siblings with unaffected parents
- ~1-6% recurrence risk cited

**Mosaic Detection:**
- Deep sequencing (>100x coverage)
- Digital PCR
- Single-cell approaches
- VAF typically 5-25% in affected tissue

### Parental Mosaicism Testing

When to test:
- Multiple affected siblings, unaffected parents
- Affected individual with proven de novo variant
- Testing informs recurrence risk counseling

## Genotype-Phenotype Correlations

### Mutation-Specific Effects

| Disorder | Mutation Type | Phenotype |
|----------|---------------|-----------|
| NF1 | Microdeletions | More severe, learning disability |
| MEN2 | Specific BRET codons | MTC timing, pheochromocytoma risk |
| Marfan | FBN1 haploinsuff | Classic; in-frame → neonatal severe |
| FGFR3 | G380R | Achondroplasia |
| FGFR3 | G375C | Hypochondroplasia (milder) |

### Domain-Specific Effects

- Loss of critical domain → more severe
- C-terminal truncations may have different effects than N-terminal
- Splice variants: Partial function vs. null

## Diagnostic Strategies

### Proband-First vs. Cascade Testing

**Proband Testing:**
1. Clinical diagnosis suspected
2. Genetic testing confirms
3. Identifies family variant

**Cascade Testing:**
- Test at-risk relatives for known family variant
- More cost-effective
- Higher diagnostic yield

### Variant Interpretation in AD Disorders

**Supporting Pathogenicity:**
- Segregation with disease
- De novo occurrence
- Absence in population databases
- In silico predictions
- Functional studies

**Challenges:**
- VUS common in large genes
- Incomplete penetrance complicates segregation
- Population databases underrepresent diverse ancestry

## Management Considerations

### Presymptomatic Testing

Requirements:
- Informed consent process
- Genetic counseling pre/post
- Consider psychological support
- Age-appropriate for minors (generally defer)

### Surveillance Protocols

**Example: Li-Fraumeni Syndrome (TP53)**
- Annual whole-body MRI
- Breast MRI (female)
- Colonoscopy
- Brain MRI
- Dermatologic exam

**Example: MEN1**
- Annual biochemical screening
- Parathyroid, pituitary, pancreatic markers
- Imaging based on biochemistry`,
      keyTerms: [
        { term: 'ascertainment bias', definition: 'Systematic error from how individuals are selected for study' },
        { term: 'variant allele frequency', definition: 'Proportion of sequencing reads containing the variant; indicates mosaicism level' },
        { term: 'cascade testing', definition: 'Testing family members for a known familial pathogenic variant' },
        { term: 'presymptomatic testing', definition: 'Genetic testing of healthy individuals for adult-onset conditions' },
        { term: 'proband', definition: 'First affected family member evaluated for a genetic condition', pronunciation: 'PROH-band' },
        { term: 'surveillance protocol', definition: 'Systematic monitoring plan for individuals at increased disease risk' },
      ],
      clinicalNotes: 'Presymptomatic testing for adult-onset conditions requires careful pre-test counseling about implications for insurance, employment, and psychological impact. Follow established guidelines (e.g., HD testing protocols).',
    },
    5: {
      level: 5,
      summary: 'Clinical application of autosomal dominant genetics integrates molecular diagnostics, precision medicine approaches, reproductive options, and health policy considerations for comprehensive patient care.',
      explanation: `## Advanced Diagnostics

### Multi-Gene Panel vs. Exome/Genome

**Panel Testing Advantages:**
- Higher coverage depth
- Better CNV detection
- Faster turnaround
- Lower VUS burden
- Cost-effective for defined phenotypes

**Exome/Genome Advantages:**
- Broader coverage
- Novel gene discovery
- Data reanalysis potential
- Solves atypical presentations

### RNA Sequencing Applications

- Detect aberrant splicing from intronic variants
- Allelic expression imbalance
- Novel fusion transcripts
- Complement DNA-based testing

### Methylation Analysis

**Example: Beckwith-Wiedemann Syndrome**
- IC1/IC2 methylation defects
- Distinguish AD from imprinting-related
- Guides recurrence risk counseling

## Precision Medicine Integration

### Pharmacogenomic Implications

| Condition | Gene | Drug Consideration |
|-----------|------|-------------------|
| Long QT syndrome | KCNQ1 | QT-prolonging drugs contraindicated |
| Malignant hyperthermia | RYR1 | Avoid triggering anesthetics |
| Familial adenomatous polyposis | APC | COX-2 inhibitors for chemoprevention |
| HCM | MYH7 | Avoid competitive sports |

### Gene-Specific Therapeutic Approaches

**Antisense Oligonucleotides:**
- Huntington disease: Allele-selective silencing
- hATTR: Inotersen, patisiran

**Monoclonal Antibodies:**
- Hypophosphatasia: Asfotase alfa
- Achondroplasia: Vosoritide (C-type natriuretic peptide analog)

**Gene Therapy:**
- In development for various AD conditions
- Challenge: May need to silence mutant while preserving WT

## Reproductive Counseling

### Options for Affected Individuals

| Option | Description | Considerations |
|--------|-------------|----------------|
| Natural conception | 50% recurrence | Prenatal diagnosis option |
| PGT-M | IVF with embryo testing | Resource-intensive |
| Donor gametes | Eliminates variant | Genetic discontinuity |
| Adoption | No biological risk | Personal preference |

### Prenatal Diagnosis

**CVS (10-13 weeks):**
- Earlier result
- ~1% miscarriage risk

**Amniocentesis (>15 weeks):**
- Slightly later
- ~0.5% miscarriage risk

**Non-Invasive Options:**
- cfDNA for some conditions
- Not validated for all variants
- Requires affected parent testing

### PGT-M (Preimplantation Genetic Testing for Monogenic Disorders)

**Process:**
1. IVF stimulation and retrieval
2. Embryo culture to blastocyst
3. Trophectoderm biopsy
4. Genetic testing
5. Transfer of unaffected embryos

**Considerations:**
- Requires IVF process
- ~30-40% pregnancy rate per cycle
- Not all families achieve pregnancy
- Ethical considerations for some conditions

## Policy and Ethical Considerations

### Genetic Discrimination

**GINA (US):**
- Protects against health insurance and employment discrimination
- Does NOT cover life, disability, long-term care insurance

**International Variations:**
- Different protections by country
- Moratoriums vs. legislation

### Return of Results

**Secondary Findings (ACMG v3.2):**
- 81 genes recommended for return
- Many are AD conditions
- Patient can opt out

**Variants of Uncertain Significance:**
- Do not report as causative
- Consider research follow-up
- Periodic reclassification

### Testing Minors

**Generally Appropriate:**
- Childhood-onset conditions
- Conditions requiring childhood surveillance
- Management implications

**Generally Defer:**
- Adult-onset conditions
- No medical interventions in childhood
- Preserve child's future autonomy

**Exceptions:**
- Some tumor surveillance starting in childhood
- Family psychological needs (case by case)`,
      keyTerms: [
        { term: 'PGT-M', definition: 'Preimplantation genetic testing for monogenic disorders; testing IVF embryos for specific variants' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act; US law against genetic discrimination in health insurance/employment' },
        { term: 'secondary findings', definition: 'Pathogenic variants in disease genes unrelated to test indication but with clinical actionability' },
        { term: 'antisense oligonucleotide', definition: 'Synthetic nucleic acid targeting specific mRNA for degradation or splicing modulation' },
        { term: 'allele-selective silencing', definition: 'Therapeutic approach targeting only the mutant allele while preserving wild-type expression' },
        { term: 'non-invasive prenatal testing', definition: 'Analysis of cell-free DNA in maternal blood for fetal genetic conditions' },
      ],
      clinicalNotes: `Practice essentials:
1. Document family history spanning at least three generations
2. Consider reduced penetrance when inheritance pattern seems inconsistent
3. Cascade testing of relatives is standard of care for actionable conditions
4. Presymptomatic testing requires specialized genetic counseling
5. PGT-M is an option for couples wishing to avoid transmission
6. Stay current with evolving surveillance guidelines for specific conditions`,
    },
  },

  media: [
    {
      id: 'ad-pedigree',
      type: 'diagram',
      filename: 'autosomal-dominant-pedigree.svg',
      title: 'Autosomal Dominant Pedigree',
      description: 'Family tree showing vertical transmission pattern',
    },
    {
      id: 'ad-punnett',
      type: 'diagram',
      filename: 'ad-punnett-square.svg',
      title: 'Autosomal Dominant Punnett Square',
      description: '50% recurrence risk calculation',
    },
  ],

  citations: [
    {
      id: 'nussbaum-genetics',
      type: 'textbook',
      title: 'Thompson & Thompson Genetics in Medicine',
      authors: ['Nussbaum, R.L.', 'McInnes, R.R.', 'Willard, H.F.'],
      source: 'Elsevier',
      chapter: '7',
      license: 'Educational',
    },
  ],

  crossReferences: [
    { targetId: 'concept-autosomal-recessive', targetType: 'concept', relationship: 'sibling', label: 'Autosomal Recessive Inheritance' },
    { targetId: 'concept-x-linked', targetType: 'concept', relationship: 'sibling', label: 'X-Linked Inheritance' },
    { targetId: 'condition-huntington', targetType: 'condition', relationship: 'related', label: 'Huntington Disease' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['inheritance patterns', 'genetic counseling'],
    keywords: ['autosomal dominant', 'inheritance', 'penetrance', 'expressivity'],
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

export default autosomalDominantContent;
