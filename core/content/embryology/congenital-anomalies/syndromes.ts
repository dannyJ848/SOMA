import { EducationalContent, ComplexityLevel } from '../../types';

export const syndromesContent: EducationalContent = {
  id: 'congenital-syndromes',
  type: 'condition',
  name: 'Congenital Syndromes',
  alternateNames: ['Genetic Syndromes', 'Chromosomal Disorders', 'Syndromic Congenital Disorders'],
  hpoId: 'HP:0001484',

  levels: {
    1: {
      level: 1,
      summary: 'Congenital syndromes are medical conditions caused by changes in chromosomes or genes that affect how a baby develops before birth. These changes can cause recognizable patterns of physical features and health challenges.',
      explanation: `# What Are Congenital Syndromes?

A **syndrome** is when a person has a group of physical differences or health problems that happen together and have the same cause. Think of it like a recipe - when one ingredient is changed, the whole dish turns out differently.

## How Do Syndromes Happen?

Inside every cell of our body, we have tiny structures called **chromosomes** that act like instruction manuals. Humans typically have 46 chromosomes (23 pairs) that tell our bodies how to grow and develop.

Sometimes, before a baby is born:
- **Extra chromosome**: A cell gets 3 copies instead of 2 (like Down syndrome)
- **Missing chromosome**: A cell is missing one chromosome (like Turner syndrome)
- **Gene change**: A tiny change in the instructions affects how the body works

## Common Congenital Syndromes

### Down Syndrome (Trisomy 21)
- **Most common** chromosomal syndrome
- **1 in 700 babies** are born with it
- Features include upward-slanting eyes, shorter height, and learning differences
- Many have heart problems that may need surgery
- People with Down syndrome can live full, happy lives

### Turner Syndrome (45,X)
- **Only affects females** (girls/women)
- Missing one X chromosome
- **1 in 2,500 girls** are born with it
- Features include shorter height, webbed neck, and infertility
- Growth hormone can help with height
- Intelligence is usually normal

### Klinefelter Syndrome (47,XXY)
- **Only affects males** (boys/men)
- Extra X chromosome
- **1 in 600 boys** are born with it
- Features include taller height, smaller testes, and infertility
- Testosterone treatment helps with development
- Learning may be harder, especially with reading

### Trisomy 18 (Edwards Syndrome)
- **Very serious condition** caused by extra chromosome 18
- **1 in 5,000 babies** are born with it
- Severe developmental delays and many medical problems
- Most babies pass away within the first year
- Those who survive need extensive medical care

### Trisomy 13 (Patau Syndrome)
- **Very serious condition** caused by extra chromosome 13
- **1 in 10,000 babies** are born with it
- Severe brain and heart problems
- Most babies pass away within the first year
- Those who survive have severe disabilities

### Cri-du-chat Syndrome
- **"Cry of the cat"** in French - babies have a high-pitched cry
- Caused by missing piece of chromosome 5
- **1 in 20,000-50,000 babies** are born with it
- Features include small head, low-set ears, and learning differences
- Many can walk, talk, and live fulfilling lives

### Prader-Willi Syndrome
- **1 in 15,000 babies** are born with it
- Babies are weak and floppy at birth
- Children develop **extreme hunger** that can lead to obesity
- Short stature, learning difficulties, and behavior problems
- Strict food supervision is essential

### Angelman Syndrome
- **1 in 15,000 babies** are born with it
- Severe learning differences, little or no speech
- Happy demeanor with frequent laughter
- Movement and balance problems
- Seizures are common

## What Causes These Changes?

Most of the time, chromosome changes happen by chance - they're not caused by anything parents did or didn't do. The risk increases with the mother's age for some conditions like Down syndrome.

## Diagnosis

Doctors can sometimes tell if a baby might have a syndrome during pregnancy through special tests like ultrasound or blood tests. After birth, physical features and genetic testing can confirm the diagnosis.

## Living with a Congenital Syndrome

People with congenital syndromes can:
- Go to school and learn
- Make friends and have relationships
- Work and contribute to their communities
- Live happy, meaningful lives

Medical care, therapies, and support services help people reach their full potential.`,

      keyTerms: [
        {
          term: 'Chromosome',
          definition: 'Thread-like structures in cells that carry genes. Humans have 46 chromosomes.',
          pronunciation: 'KRO-muh-some'
        },
        {
          term: 'Gene',
          definition: 'The basic unit of heredity that carries instructions for how cells function.',
          pronunciation: 'jeen'
        },
        {
          term: 'Syndrome',
          definition: 'A group of symptoms or features that occur together and characterize a particular condition.',
          pronunciation: 'SIN-drome'
        },
        {
          term: 'Trisomy',
          definition: 'Having three copies of a chromosome instead of the normal two.',
          pronunciation: 'TRY-so-mee'
        },
        {
          term: 'Karyotype',
          definition: 'A picture of a person\'s chromosomes arranged by size and shape.',
          pronunciation: 'KAR-ee-o-type'
        }
      ],
      analogies: [
        'Chromosomes are like cookbooks - if you have an extra copy of a recipe (trisomy), you get too much of that dish',
        'Genes are like letters in a book - a typo might change how the story reads',
        'A syndrome is like a recognizable pattern - like spotting your friend\'s handwriting without seeing their name'
      ],
      examples: [
        'Down syndrome: Most people with Down syndrome can read, write, and live semi-independently as adults',
        'Turner syndrome: Women with Turner syndrome often successful careers and fulfilling lives',
        'Klinefelter syndrome: Many men with Klinefelter syndrome have jobs, families (through adoption), and normal life expectancy'
      ],
      patientCounselingPoints: [
        'Early intervention services can significantly improve outcomes for children with developmental delays',
        'Support groups connect families facing similar challenges',
        'Each person with a syndrome is unique - outcomes vary widely',
        'Focus on abilities rather than limitations'
      ]
    },

    2: {
      level: 2,
      summary: 'Congenital syndromes are genetic disorders caused by chromosomal abnormalities or single-gene mutations that produce recognizable patterns of physical features, developmental delays, and medical complications. These conditions arise during embryonic development and require multidisciplinary medical management.',
      explanation: `# Congenital Syndromes

## Overview

Congenital syndromes are disorders present at birth that result from abnormalities in chromosomes or genes. These conditions produce characteristic patterns of features that allow clinicians to recognize and diagnose them. Understanding these syndromes is essential for prenatal counseling, newborn screening, and comprehensive medical care.

## Chromosomal Number Disorders

### Autosomal Trisomies

#### Down Syndrome (Trisomy 21)
**Karyotype:** 47,XX,+21 or 47,XY,+21

**Key Features:**
- Intellectual disability (mild to moderate, IQ 40-70)
- Characteristic facies: upslanting palpebral fissures, epicanthal folds, flat nasal bridge, protruding tongue
- Single transverse palmar crease (simian crease)
- Congenital heart disease (40-50%): AVSD, VSD, ASD
- Hypotonia in infancy, joint laxity
- Increased risk of leukemia (20x), Alzheimer disease (by age 40)
- Short stature, small ears

**Epidemiology:**
- Incidence: 1 in 700 live births
- Risk increases with maternal age (1 in 1,000 at age 30, 1 in 100 at age 40)

**Types:**
- Full trisomy 21 (95%)
- Translocation (4%): t(14;21) or t(21;21)
- Mosaicism (1%): Some cells normal, others trisomic

**Management:**
- Cardiac evaluation and surgery if needed
- Thyroid screening annually
- Hearing and vision assessments
- Early intervention and special education
- Surveillance for leukemia, sleep apnea, atlantoaxial instability

#### Trisomy 18 (Edwards Syndrome)
**Karyotype:** 47,XX,+18 or 47,XY,+18

**Key Features:**
- Severe intellectual disability
- Intrauterine growth restriction (IUGR)
- Characteristic hand: clenched with overlapping fingers (index over 3rd, 5th over 4th)
- Rocker-bottom feet
- Micrognathia, low-set ears
- Congenital heart disease (90%): VSD, ASD, PDA
- Severe developmental delay

**Epidemiology:**
- Incidence: 1 in 5,000 live births
- 80% are female
- Median survival: 3-14 days (only 5-10% survive first year)

#### Trisomy 13 (Patau Syndrome)
**Karyotype:** 47,XX,+13 or 47,XY,+13

**Key Features:**
- Severe brain malformations (holoprosencephaly)
- Cleft lip and palate
- Polydactyly (postaxial)
- Microphthalmia or anophthalmia
- Scalp defects (cutis aplasia)
- Severe congenital heart disease
- Severe developmental delay

**Epidemiology:**
- Incidence: 1 in 10,000-20,000 live births
- Median survival: 7-10 days (only 5-10% survive first year)

### Sex Chromosome Disorders

#### Turner Syndrome (45,X)
**Karyotype:** 45,X (or mosaic: 45,X/46,XX)

**Key Features:**
- **Females only** with complete or partial absence of one X chromosome
- Short stature (adult height ~143 cm without treatment)
- Webbed neck (pterygium colli)
- Broad chest with widely spaced nipples (shield chest)
- Bicuspid aortic valve (30-50%), coarctation of aorta
- Gonadal dysgenesis: streak ovaries, infertility, amenorrhea
- Normal intelligence (may have spatial visualization difficulties)

**Epidemiology:**
- Incidence: 1 in 2,500 female live births
- 99% of 45,X conceptuses result in miscarriage

**Management:**
- Growth hormone therapy to improve adult height
- Estrogen replacement therapy at puberty
- Cardiac monitoring (aortic dilation, dissection risk)
- Fertility counseling (oocyte donation possible)
- Hearing, thyroid, and renal monitoring

#### Klinefelter Syndrome (47,XXY)
**Karyotype:** 47,XXY (or mosaic: 46,XY/47,XXY)

**Key Features:**
- **Males only** with extra X chromosome(s)
- Tall stature with long limbs (arm span > height)
- Small testes, infertility (azoospermia in >90%)
- Gynecomastia (breast development)
- Hypergonadotropic hypogonadism (low testosterone, high FSH/LH)
- Learning disabilities: language-based, reading difficulties
- Normal intelligence but may have executive function challenges

**Epidemiology:**
- Incidence: 1 in 600 male live births
- Often undiagnosed until adulthood

**Management:**
- Testosterone replacement therapy at puberty
- Fertility counseling (TESE with ICSI possible)
- Speech and language therapy
- Educational support for learning difficulties
- Breast tissue monitoring (increased breast cancer risk)

## Chromosomal Structural Disorders

### Cri-du-chat Syndrome (5p Deletion)
**Karyotype:** 46,XX,del(5p) or 46,XY,del(5p)

**Key Features:**
- **Characteristic high-pitched cry** (like a cat) in infancy
- Severe intellectual disability
- Microcephaly, round face
- Hypertelorism, epicanthal folds
- Low-set ears, micrognathia
- Motor delays, ataxia

**Epidemiology:**
- Incidence: 1 in 20,000-50,000 live births
- Most cases are de novo deletions

**Prognosis:**
- Many learn to walk and communicate verbally
- Life expectancy may be slightly reduced
- Independent living usually not possible

## Imprinting Disorders

### Prader-Willi Syndrome (PWS)
**Genetics:** Loss of paternal 15q11-q13 (deletion 70%, maternal UPD 25%, imprinting defect 5%)

**Key Features:**
- **Neonatal period:** Hypotonia, poor feeding, failure to thrive
- **Childhood:** Hyperphagia (extreme hunger) → morbid obesity if uncontrolled
- Short stature, small hands and feet
- Hypogonadism: incomplete puberty, infertility
- Mild intellectual disability, learning difficulties
- Behavioral problems: temper tantrums, stubbornness, skin picking
- Decreased pain sensation

**Epidemiology:**
- Incidence: 1 in 15,000 live births

**Management:**
- Strict food security (essential for survival)
- Growth hormone therapy
- Sex hormone replacement
- Behavioral management
- Special education

### Angelman Syndrome (AS)
**Genetics:** Loss of maternal UBE3A or imprinting center on 15q11-q13

**Key Features:**
- Severe intellectual disability
- Minimal or absent speech
- **Happy demeanor:** frequent laughter, smiling
- Ataxia, tremulous movements
- Seizures (80%+, onset before age 3)
- Microcephaly
- Sleep disturbances

**Epidemiology:**
- Incidence: 1 in 15,000 live births

**Management:**
- Seizure control
- Communication therapy (AAC devices)
- Physical therapy for ataxia
- Sleep hygiene management
- Safety precautions (wandering, injury risk due to low pain sensitivity)

## Genetic Counseling Considerations

### Recurrence Risks
- **Trisomy 21:** ~1% recurrence above maternal age-related risk
- **Translocation carriers:** Up to 15% if parent is translocation carrier
- **Mosaicism:** Low recurrence risk (<1%)
- **Prader-Willi/Angelman:** <1% unless chromosomal rearrangement present

### Prenatal Testing Options
- **Screening:** First trimester combined test, cell-free DNA (NIPT)
- **Diagnostic:** Chorionic villus sampling (10-13 weeks), amniocentesis (15+ weeks)
- **Preimplantation genetic testing** for known familial rearrangements`,

      keyTerms: [
        {
          term: 'Trisomy',
          definition: 'Presence of three copies of a particular chromosome instead of the normal two.',
          pronunciation: 'TRY-so-mee',
          relatedTerms: ['Aneuploidy', 'Monosomy', 'Nondisjunction']
        },
        {
          term: 'Karyotype',
          definition: 'The number and appearance of chromosomes in the nucleus of a eukaryotic cell.',
          pronunciation: 'KAR-ee-o-type',
          relatedTerms: ['Chromosome analysis', 'G-banding', 'FISH']
        },
        {
          term: 'Nondisjunction',
          definition: 'Failure of homologous chromosomes or sister chromatids to separate properly during meiosis or mitosis.',
          pronunciation: 'non-dis-JUNK-shun',
          relatedTerms: ['Meiosis', 'Aneuploidy', 'Mosaicism']
        },
        {
          term: 'Uniparental Disomy (UPD)',
          definition: 'Both copies of a chromosome inherited from one parent instead of one from each.',
          pronunciation: 'yoo-nee-puh-REN-tul DY-so-mee',
          relatedTerms: ['Imprinting', 'Prader-Willi syndrome', 'Angelman syndrome']
        },
        {
          term: 'Imprinting',
          definition: 'Epigenetic phenomenon where genes are expressed differently depending on whether inherited from mother or father.',
          pronunciation: 'IM-print-ing',
          relatedTerms: ['Epigenetics', 'UPD', 'Prader-Willi syndrome']
        },
        {
          term: 'Mosaicism',
          definition: 'Presence of two or more populations of cells with different genotypes in one individual.',
          pronunciation: 'moh-ZAY-ih-siz-um',
          relatedTerms: ['Karyotype', 'Nondisjunction', 'Mosaicism']
        },
        {
          term: 'Aneuploidy',
          definition: 'Abnormal number of chromosomes in a cell, either missing or extra chromosomes.',
          pronunciation: 'an-yoo-PLOY-dee',
          relatedTerms: ['Trisomy', 'Monosomy', 'Nondisjunction']
        },
        {
          term: 'Gonadal Dysgenesis',
          definition: 'Failure of the gonads (ovaries or testes) to develop properly, resulting in nonfunctional reproductive tissue.',
          pronunciation: 'goh-NAD-al die-JEN-uh-sis',
          relatedTerms: ['Turner syndrome', 'Streak ovaries', 'Infertility']
        }
      ],
      analogies: [
        'Nondisjunction is like dealing cards - sometimes the deck deals an extra card to one player and none to another',
        'Imprinting is like a brand - the same gene has different "brands" depending on which parent it came from',
        'Mosaicism is like a quilt - some patches have one pattern, others have a different pattern'
      ],
      examples: [
        'A 45,X female with Turner syndrome receiving growth hormone therapy reaching 150 cm instead of 143 cm',
        'A child with Prader-Willi syndrome achieving healthy weight with strict food supervision and locked food storage',
        'A person with Klinefelter syndrome fathering a child through testicular sperm extraction (TESE) and ICSI'
      ],
      clinicalNotes: 'Congenital syndromes require multidisciplinary care including genetics, pediatrics, cardiology, endocrinology, developmental specialists, and therapy services. Early diagnosis enables early intervention and improved outcomes.'
    },

    3: {
      level: 3,
      summary: 'Congenital syndromes are genetic disorders resulting from chromosomal abnormalities (numerical or structural) or single-gene mutations that produce recognizable phenotypic patterns. These conditions involve specific pathophysiological mechanisms affecting multiple organ systems and require systematic diagnostic and management approaches based on underlying genetic etiology.',
      explanation: `# Congenital Syndromes: Pathogenesis and Clinical Management

## Genetic Mechanisms

### Chromosomal Number Abnormalities

#### Nondisjunction
**Mechanism:**
- Failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate
- Results in gametes with 24 or 22 chromosomes instead of 23
- Fertilization produces zygotes with 47 (trisomy) or 45 (monosomy) chromosomes

**Maternal Age Effect:**
- Oocytes arrested in prophase I from fetal life until ovulation
- Cohesin deterioration and weakened spindle checkpoint over time
- Trisomy 21 risk: 1/1,000 at age 20, 1/100 at age 40, 1/30 at age 45

**Mosaicism:**
- Postzygotic nondisjunction produces two or more cell lines
- Phenotype correlates with proportion and distribution of abnormal cells
- Mosaic trisomy 21: milder features, better cognitive outcome

### Chromosomal Structural Abnormalities

#### Deletion Syndromes
**Cri-du-chat (5p deletion):**
- Terminal deletion of short arm of chromosome 5
- Critical region: 5p15.2-15.3 (contains TERT and CTNND2 genes)
- Larger deletions correlate with more severe phenotype
- **Cat-like cry:** Laryngeal abnormality due to CTNND2 deletion
- **Severe ID:** Due to multiple gene deletions affecting brain development

#### Duplication Syndromes
**Potocki-Lupski syndrome (17p11.2 duplication):**
- Reciprocal to Smith-Magenis syndrome (17p11.2 deletion)
- Intellectual disability, behavioral problems, cardiovascular anomalies

#### Translocation
**Robertsonian translocation:**
- Fusion of acrocentric chromosomes (13, 14, 15, 21, 22) at centromeres
- Balanced carriers: 45 chromosomes, no genetic material lost
- Unbalanced offspring: Partial trisomy or monosomy
- Familial Down syndrome: t(14;21) or t(21;21) with recurrence risk up to 15%

## Specific Syndromes: Pathophysiology

### Down Syndrome (Trisomy 21)

#### Critical Genes
**DYRK1A (Dual-specificity tyrosine phosphorylation-regulated kinase 1A):**
- Overexpression impairs neurogenesis and synaptic plasticity
- Contributes to intellectual disability

**DSCAM (Down syndrome cell adhesion molecule):**
- Overexpression affects neural connectivity
- May contribute to Alzheimer disease neuropathology

**APP (Amyloid precursor protein):**
- Three copies accelerate amyloid-beta accumulation
- Early-onset Alzheimer disease (neuropathology by age 40, symptoms by age 50)

**COL6A1 (Collagen type VI alpha 1):**
- Overexpression causes joint laxity and increased dislocation risk

**CBS (Cystathionine beta-synthase):**
- Overexpression affects homocysteine metabolism
- May contribute to vascular risk

#### Clinical Manifestations
**Neurologic:**
- Intellectual disability: IQ 40-70 (mild to moderate)
- Hypotonia in infancy → joint laxity
- Early-onset Alzheimer disease: virtually universal by age 40

**Cardiac (40-50%):**
- Complete atrioventricular septal defect (AVSD): most characteristic
- Ventricular septal defect (VSD)
- Atrial septal defect (ASD)
- Tetralogy of Fallot

**Hematologic:**
- Transient myeloproliferative disorder in neonates
- Acute megakaryoblastic leukemia (AMKL): 20x increased risk
- ALL: 20x increased risk

**Endocrine:**
- Thyroid dysfunction: 15-40% (hypothyroidism most common)
- Diabetes mellitus: Increased risk

**Respiratory:**
- Obstructive sleep apnea: 50-80%
- Anatomic: hypoplastic upper airway, tonsillar hypertrophy
- Neuromuscular: hypotonia

### Turner Syndrome (45,X and variants)

#### Genetic Mechanisms
**Monosomy X (45,X):** 55% of cases
- Complete absence of second sex chromosome
- Most severe phenotype

**Mosaicism (45,X/46,XX):** 30% of cases
- Some cells have normal karyotype
- Milder phenotype, may have spontaneous puberty

**X-chromosome structural abnormalities:** 15% of cases
- Isochromosome Xq: Two copies of long arm, no short arm
- Ring X: Abnormal X chromosome formed into ring

#### Critical Gene Regions
**SHOX (Short stature homeobox):**
- Located in pseudoautosomal region (escapes X-inactivation)
- Haploinsufficiency causes short stature and skeletal abnormalities
- Growth hormone therapy increases adult height by 5-10 cm

**Xp (short arm) genes:**
- Ovarian maintenance genes
- Haploinsufficiency causes ovarian dysgenesis

#### Clinical Features by System
**Growth:**
- Intrauterine growth restriction
- Ongoing postnatal growth failure
- Adult height: 143 cm without GH, 150 cm with GH therapy

**Cardiovascular:**
- Bicuspid aortic valve: 30-50%
- Coarctation of aorta: 10-20%
- Aortic root dilation: Risk of dissection (1-2%)
- Hypertension: Increased risk even without structural disease

**Reproductive:**
- Streak ovaries: Premature ovarian failure
- Primary amenorrhea: >90%
- Infertility: Pregnancy possible with donor oocytes

**Other:**
- Renal anomalies: Horseshoe kidney, duplicated ureters
- Hearing loss: Recurrent otitis media, sensorineural loss
- Autoimmune: Hashimoto thyroiditis, celiac disease

### Klinefelter Syndrome (47,XXY)

#### Pathophysiology
**X-chromosome dosage effects:**
- Genes on X chromosome that escape inactivation are overexpressed
- Androgen receptor CAG repeat length influences phenotype

**Testicular pathology:**
- Progressive germ cell loss beginning in infancy
- Seminiferous tubule hyalinization and fibrosis
- Leydig cell dysfunction: Reduced testosterone production

#### Hormonal Profile
**Hypergonadotropic hypogonadism:**
- Low testosterone
- Elevated FSH and LH
- Low inhibin B (reflects spermatogenesis)

#### Clinical Features
**Physical:**
- Tall stature: Long limbs (arm span > height)
- Gynecomastia: 30-50%
- Small firm testes (<5 mL volume)
- Decreased facial/body hair
- Reduced muscle mass

**Neurocognitive:**
- Language-based learning disabilities
- Reading and spelling difficulties
- Executive function deficits
- Normal intelligence (IQ may be 10-15 points below siblings)

**Reproductive:**
- Azoospermia: 90%+
- Severe oligospermia: 10%
- Testicular sperm extraction (TESE) with ICSI: 40-70% success

### Trisomy 18 and 13

#### Pathophysiology
**Severe developmental disruption:**
- Gene dosage effects disrupt multiple developmental pathways
- Chromosome 18: Contains genes critical for brain, heart, and facial development
- Chromosome 13: Contains developmental genes (including SHH pathway genes)

**Clinical overlap:**
- Both severe: Severe brain malformations, congenital heart disease
- Both lethal: 90%+ mortality within first year
- Distinctive features allow clinical differentiation

#### Prognosis
**Trisomy 18:**
- Median survival: 3-14 days
- 1-year survival: 5-10%
- Longest reported survival: into 30s (rare, with severe disabilities)

**Trisomy 13:**
- Median survival: 7-10 days
- 1-year survival: 5-10%
- Survival beyond 1 year: Extremely rare with profound disabilities

### Cri-du-chat Syndrome

#### Molecular Genetics
**Critical region: 5p15.2-15.3**
- **TERT (Telomerase reverse transcriptase):** Deletion may affect cell proliferation
- **CTNND2 (Catenin delta 2):** Important for brain development, laryngeal function

#### Genotype-Phenotype Correlation
- Larger deletion = more severe phenotype
- Cat-like cry: Requires deletion of 5p15.3
- Severe ID: Correlates with deletion size

### Imprinting Disorders

#### Genomic Imprinting
**Mechanism:**
- Parent-specific DNA methylation marks genes
- Imprinted genes express only maternal or only paternal allele
- Marks established during gametogenesis, maintained through embryogenesis
- Erased and reestablished in primordial germ cells

#### Prader-Willi Syndrome
**Genetic mechanisms:**
1. **Paternal deletion (70%):** 5-6 Mb deletion of 15q11-q13
2. **Maternal UPD (25%):** Two maternal chromosome 15s, no paternal copy
3. **Imprinting defect (5%):** Paternal chromosome has maternal imprint

**Critical genes (paternally expressed):**
- **SNRPN:** Small nuclear ribonucleoprotein
- **NDN:** Necdin (neuronal survival)
- **MAGEL2:** Melanoma antigen-like gene 2
- **MKRN3:** Makorin ring finger protein 3
- **C15orf2:** Non-coding RNA

**Pathophysiology:**
- Neonatal: Hypothalamic dysfunction → poor feeding, hypotonia
- Childhood: Hypothalamic satiety signaling failure → hyperphagia
- Endocrine: GH deficiency, hypogonadism

#### Angelman Syndrome
**Genetic mechanisms:**
1. **Maternal deletion (70%):** 5-6 Mb deletion of 15q11-q13
2. **Paternal UPD (3-5%):** Two paternal chromosome 15s
3. **Imprinting defect (3-5%):** Maternal chromosome has paternal imprint
4. **UBE3A mutation (10%):** Point mutation in maternal allele

**Critical gene:**
- **UBE3A (Ubiquitin protein ligase E3A):** Maternally expressed in brain
- Ubiquitin-protein ligase: Targets proteins for degradation
- Essential for synaptic development and function

**Pathophysiology:**
- Loss of UBE3A in brain → impaired synaptic plasticity
- Cerebellar atrophy → ataxia, tremor
- GABAergic dysfunction → seizures
- Serotonergic dysfunction → sleep disturbance

## Diagnostic Approaches

### Prenatal Diagnosis

#### First Trimester Screening (11-13 weeks)
- **Nuchal translucency (NT):** Increased in trisomy 21, 18, 13
- **PAPP-A and free beta-hCG:** Abnormal levels in aneuploidy
- **Detection rate:** ~85% for trisomy 21

#### Cell-Free DNA (NIPT)
- **Method:** Fetal DNA in maternal blood (from placental trophoblasts)
- **Timing:** From 10 weeks gestation
- **Sensitivity:** Trisomy 21 (99%), Trisomy 18 (97%), Trisomy 13 (87%)
- **False positives:** 0.1-0.2% (confined placental mosaicism, maternal CNV)

#### Diagnostic Testing
**Chorionic villus sampling (CVS):**
- Timing: 10-13 weeks
- Sample: Placental villi (trophoblast cells)
- Risk: Pregnancy loss 0.5-1%
- Limitation: Confined placental mosaicism

**Amniocentesis:**
- Timing: 15+ weeks
- Sample: Amniotic fluid (fetal cells)
- Risk: Pregnancy loss 0.1-0.3%
- Advantage: Reflects fetal karyotype

#### Karyotype vs. Microarray
- **Karyotype:** Detects aneuploidy, large rearrangements (>5-10 Mb)
- **Chromosomal microarray (CMA):** Detects microdeletions/duplications (>10-20 kb)
- **CMA yield:** 15-20% for fetal anomalies vs 3-5% for karyotype

### Postnatal Diagnosis

#### Indications for Genetic Testing
- Dysmorphic features
- Developmental delay/intellectual disability
- Congenital anomalies (cardiac, renal, etc.)
- Growth abnormalities
- Family history of genetic disorder

#### Testing Strategy
1. **Chromosomal microarray (CMA):** First-line test
2. **Karyotype:** If suspicion of aneuploidy or balanced rearrangement
3. **FISH:** Targeted testing for specific microdeletion syndromes
4. **Exome sequencing:** If CMA negative, suspicion of single-gene disorder

## Management Principles

### Multidisciplinary Care

#### Down Syndrome
- **Cardiology:** Echocardiogram at diagnosis, monitor AVSD repair
- **Endocrinology:** Annual TSH, consider GH if short stature
- **Audiology:** Newborn hearing screen, annual assessments
- **Ophthalmology:** Annual exams for cataracts, strabismus, refractive error
- **Sleep:** Polysomnography for sleep apnea symptoms
- **Hematology:** CBC for transient myeloproliferative disorder (neonatal period)
- **Developmental:** Early intervention, physical/occupational/speech therapy
- **Education:** Individualized education program (IEP)

#### Turner Syndrome
- **Growth:** GH therapy from early childhood until epiphyses fused
- **Cardiac:** Baseline echo, monitor aortic root, MRI for coarctation
- **Endocrine:** Estrogen replacement at puberty (12-14 years)
- **Reproductive:** Fertility counseling, discuss oocyte donation
- **Renal:** Renal ultrasound at diagnosis
- **Hearing:** Annual audiograms
- **Thyroid:** Annual TSH

#### Klinefelter Syndrome
- **Endocrine:** Testosterone replacement at puberty (14 years)
- **Reproductive:** Discuss infertility options, sperm banking if possible
- **Educational:** Speech and language therapy, educational support
- **Psychosocial:** Support groups, counseling for body image issues

#### Prader-Willi Syndrome
- **Nutrition:** Strict food control, locked kitchen, caloric restriction
- **Growth:** GH therapy improves growth, body composition, strength
- **Endocrine:** Sex hormone replacement at puberty
- **Behavioral:** Structured environment, behavioral therapy
- **Sleep:** Polysomnography for sleep apnea

#### Angelman Syndrome
- **Neurology:** Seizure management (valproate, clonazepam, levetiracetam)
- **Communication:** Augmentative and alternative communication (AAC) devices
- **Therapy:** Physical therapy for ataxia, occupational therapy
- **Sleep:** Sleep hygiene, melatonin for circadian rhythm`,

      keyTerms: [
        {
          term: 'Aneuploidy',
          definition: 'An abnormal number of chromosomes in a cell, such as having 45 or 47 chromosomes instead of the normal 46.',
          pronunciation: 'an-yoo-PLOY-dee',
          etymology: 'Greek: an- (not) + eu (well) + ploos (fold) + -osis (condition)',
          relatedTerms: ['Trisomy', 'Monosomy', 'Nondisjunction']
        },
        {
          term: 'Robertsonian Translocation',
          definition: 'A chromosomal rearrangement where the long arms of two acrocentric chromosomes fuse at the centromere, forming a single chromosome.',
          pronunciation: 'rob-ert-SON-ee-an trans-lo-KAY-shun',
          etymology: 'Named after W.R.B. Robertson who described this in 1916',
          relatedTerms: ['Balanced translocation', 'Down syndrome', 'Acrocentric chromosome']
        },
        {
          term: 'Genomic Imprinting',
          definition: 'An epigenetic phenomenon where genes are expressed in a parent-of-origin-specific manner through DNA methylation.',
          pronunciation: 'im-PRINT-ing',
          relatedTerms: ['Prader-Willi syndrome', 'Angelman syndrome', 'Uniparental disomy']
        },
        {
          term: 'Hypergonadotropic Hypogonadism',
          definition: 'Failure of the gonads due to lack of pituitary stimulation, characterized by low sex steroids and elevated FSH/LH.',
          pronunciation: 'hi-per-goh-NAD-o-tro-pik hy-go-gnad-iz-m',
          relatedTerms: ['Klinefelter syndrome', 'Turner syndrome', 'FSH', 'LH']
        },
        {
          term: 'Mosaicism',
          definition: 'The presence of two or more genetically distinct cell populations within an individual derived from a single zygote.',
          pronunciation: 'moh-ZAY-ih-siz-um',
          etymology: 'From mosaic - a pattern made of small pieces',
          relatedTerms: ['Nondisjunction', 'Postzygotic', 'Karyotype']
        },
        {
          term: 'Uniparental Disomy',
          definition: 'A situation where both copies of a chromosome (or chromosome segment) are inherited from one parent instead of one from each.',
          pronunciation: 'yoo-nee-puh-REN-tul DY-so-mee',
          relatedTerms: ['Imprinting', 'Prader-Willi syndrome', 'Angelman syndrome']
        },
        {
          term: 'Gonadal Dysgenesis',
          definition: 'Abnormal development of the gonads resulting in nonfunctional streak ovaries or testes and deficient sex hormone production.',
          pronunciation: 'goh-NAD-al die-JEN-uh-sis',
          relatedTerms: ['Turner syndrome', 'Streak gonads', 'Infertility']
        },
        {
          term: 'Cell-Free DNA (cfDNA)',
          definition: 'Fragments of DNA circulating freely in the bloodstream, used in non-invasive prenatal testing (NIPT).',
          pronunciation: 'cell-free DNA',
          relatedTerms: ['NIPT', 'Prenatal screening', 'Aneuploidy']
        },
        {
          term: 'Chromosomal Microarray (CMA)',
          definition: 'A high-resolution genetic test that detects copy number variants (deletions/duplications) too small to be seen on karyotype.',
          pronunciation: 'kro-moh-SO-mul MY-kro-ar-ray',
          relatedTerms: ['Copy number variant', 'Comparative genomic hybridization', 'SNP array']
        }
      ],
      analogies: [
        'Nondisjunction is like a card shuffling error - one player gets an extra card while another gets none',
        'Genomic imprinting is like parent-specific branding - the same gene has different "labels" depending on which parent contributed it',
        'Mosaicism is like a patchwork quilt - different cells have different genetic patterns but belong to the same individual',
        'Uniparental disomy is like inheriting two copies of the same book edition - you\'re missing the complementary information'
      ],
      examples: [
        'A 35-year-old pregnant woman with NIPT showing high risk for trisomy 21, confirmed by amniocentesis',
        'A child with 45,X/46,XX mosaicism having milder Turner features and spontaneous menarche',
        'A man with 47,XXY fathering a child through TESE-ICSI using sperm extracted from testicular biopsy'
      ],
      clinicalNotes: 'Management of congenital syndromes requires a multidisciplinary team approach. Early diagnosis enables timely interventions including surgical correction of congenital anomalies, growth hormone therapy, sex hormone replacement, developmental therapies, and surveillance for known complications. Genetic counseling is essential for families regarding recurrence risks and reproductive options.'
    },

    4: {
      level: 4,
      summary: 'Congenital syndromes encompass a broad spectrum of genetic disorders with distinct molecular pathophysiologies, genotypic-phenotypic correlations, and evidence-based management protocols. Understanding gene dosage effects, imprinting mechanisms, mosaicism patterns, and genotype-phenotype relationships is essential for accurate diagnosis, prognostication, and targeted therapeutic interventions.',
      explanation: `# Congenital Syndromes: Advanced Pathophysiology and Clinical Management

## Molecular Pathogenesis

### Chromosome Biology and Aneuploidy

#### Meiotic Nondisjunction Mechanisms
**Maternal Meiosis I Errors (most common for trisomy 21):**
- Premature separation of bivalents (chiasma premature disjunction)
- Weakened cohesin complex due to extended dictyate arrest
- Spindle assembly checkpoint (SAC) dysfunction
- Recombination failure near centromere or telomere

**Maternal Meiosis II Errors:**
- Failure of sister chromatid separation
- Centromere cohesion dysfunction
- Risk increases with maternal age

**Paternal Nondisjunction:**
- Less frequent but accounts for 5-10% of trisomy 21
- Usually meiosis II error

#### Molecular Consequences of Gene Dosage Imbalance
**Transcriptional effects:**
- Gene expression proportional to copy number (1.5x for trisomy)
- Global dysregulation: Chromosome 21 genes affect genome-wide expression
- Trans effects on other chromosomes
- Disrupted protein complexes: Stoichiometric imbalances

**Proteomic effects:**
- Protein aggregation due to overexpression
- Impaired protein complex assembly
- Disrupted signaling pathways
- Cellular stress responses

### Down Syndrome: Molecular Mechanisms

#### Critical Chromosome 21 Genes

**DYRK1A (Dual-specificity tyrosine-phosphorylation-regulated kinase 1A):**
- Location: 21q22.13
- Function: Serine/threonine kinase regulating cell cycle, neurodevelopment
- Overexpression effects:
  - Impaired neurogenesis via NFAT signaling inhibition
  - Reduced neural progenitor proliferation
  - Synaptic plasticity deficits
  - Contributes to intellectual disability

**DSCAM (Down syndrome cell adhesion molecule):**
- Location: 21q22.2
- Function: Axon guidance, neuronal connectivity
- Overexpression effects:
  - Aberrant neuronal connections
  - May contribute to Alzheimer disease (APP processing)
  - Autism-like behaviors in mouse models

**APP (Amyloid precursor protein):**
- Location: 21q21.3
- Function: Precursor to amyloid-beta peptides
- Overexpression effects:
  - Accelerated amyloid-beta deposition
  - Early-onset Alzheimer disease (neuropathology by age 40)
  - Vascular amyloid angiopathy

**RCAN1 (Regulator of calcineurin 1):**
- Location: 21q22.12
- Function: Calcineurin inhibitor, regulates NFAT signaling
- Overexpression effects:
  - Mitochondrial dysfunction
  - Oxidative stress
  - Neurodegeneration

**COL6A1 (Collagen type VI alpha 1):**
- Location: 21q22.3
- Function: Connective tissue structural protein
- Overexpression effects:
  - Joint laxity, hypermobility
  - Increased dislocation risk

**CBS (Cystathionine beta-synthase):**
- Location: 21q22.3
- Function: Homocysteine metabolism (transsulfuration pathway)
- Overexpression effects:
  - Reduced homocysteine levels
  - Altered methylation potential
  - Possible vascular effects

#### Genotype-Phenotype Correlations

**Full trisomy 21 (95%):**
- Classic phenotype
- Risk: Increases with maternal age
- Recurrence: 1% + age-related risk

**Translocation (4%):**
- Robertsonian: t(14;21) or t(21;21)
- Phenotype: Similar to full trisomy 21
- Recurrence: Up to 15% if parent is carrier
- Important: Test parental karyotype

**Mosaicism (1%):**
- 46,XX/47,XX,+21 or 46,XY/47,XY,+21
- Milder phenotype due to normal cell line
- Cognitive correlates: Percentage of trisomic cells in blood underestimates brain mosaicism
- Recurrence: Low (<1%)

#### Clinical Subphenotypes

**Congenital heart disease (CHD) predictors:**
- Overexpression of COL6A1, COL6A2, DSCAM
- Polymorphisms in these genes modify CHD risk
- AVSD more specific than other defects

**Leukemia risk:**
- Transient myeloproliferative disorder (TMD) in neonates
- GATA1 mutations in trisomy 21 megakaryoblasts
- Progression to AMKL: Additional mutations required

**Alzheimer disease:**
- APP overexpression accelerates amyloid deposition
- Virtually universal by age 40
- Clinical symptoms: Typically after age 50
- Neurofibrillary tangles: Also present

### Sex Chromosome Disorders: Molecular Pathogenesis

#### Turner Syndrome (45,X)

**SHOX Gene Haploinsufficiency:**
- Location: Pseudoautosomal region 1 (PAR1) of Xp and Yp
- Function: Transcription factor regulating chondrocyte differentiation
- Haploinsufficiency effects:
  - Short stature: Primary cause
  - Mesomelic shortening: Forearm, lower leg shortening
  - Madelung deformity: Wrist abnormality
- GH therapy: Partially overcomes haploinsufficiency

**Xp Deletion Effects:**
- POI1 region: Ovarian maintenance genes
- BMP15: Oocyte development
- FMR1: Premature ovarian failure (expansion not relevant to Turner)
- Xp deletion: More severe ovarian failure

**Xq Deletion Effects:**
- Critical region for Turner features
- Xq13-q26: Contains genes for lymphedema, cardiac development

**Lymphedema pathogenesis:**
- Vascular endothelial growth factor (VEGF) pathway genes
- Fetal lymphatic obstruction → webbed neck, puffy hands/feet

**Cardiovascular pathogenesis:**
- Bicuspid aortic valve: Neural crest cell migration defect
- Coarctation: Left-sided flow abnormality
- Aortic dilation: Connective tissue weakness, hemodynamic stress

#### Klinefelter Syndrome (47,XXY)

**X-inactivation escapee genes:**
- Approximately 15% of X-linked genes escape inactivation
- Overexpression in 47,XXY
- Contribute to phenotype: cognition, neurodevelopment

**Androgen receptor (AR) CAG repeat length:**
- Shorter repeats: More severe phenotype (taller, gynecomastia)
- Longer repeats: Milder phenotype
- Modulates testosterone sensitivity

**Testicular degeneration:**
- Fetal: Normal germ cell number
- Infancy/childhood: Progressive germ cell loss
- Puberty: Accelerated loss, hyalinization of seminiferous tubules

**Neurocognitive phenotype:**
- Language pathway dysfunction
- Reduced gray matter in temporal, frontal lobes
- White matter abnormalities in corpus callosum

### Imprinting Disorders: Molecular Mechanisms

#### Genomic Imprinting Fundamentals

**Imprinting center (IC) regulation:**
- Germline-derived differentially methylated regions (gDMRs)
- Established during gametogenesis
- Maintained throughout embryogenesis
- Erased and reestablished in primordial germ cells

**Prader-Willi/Angelman region (15q11-q13):**

**PWS-IC (Paternal imprinting center):**
- Methylated on maternal chromosome, unmethylated on paternal
- Controls expression of paternal genes: SNRPN, NDN, MAGEL2, MKRN3
- Deletion or methylation defect → PWS

**AS-IC (Angelman imprinting center):**
- Methylated on maternal chromosome
- Controls UBE3A expression
- Deletion or methylation defect → AS

#### Prader-Willi Syndrome

**Molecular mechanisms:**

1. **Paternal deletion (Type 1: 6 Mb, Type 2: 5.5 Mb):**
   - Breakpoint BP1-BP3 (Type 1) or BP2-BP3 (Type 2)
   - Type 1: Includes more genes (NIPA1, NIPA2, CYFIP1)
   - Type 1: More severe behavioral phenotype, lower IQ

2. **Maternal uniparental disomy (UPD):**
   - Both chromosome 15s from mother
   - Isodisomy: Two identical maternal chromosomes
   - Heterodisomy: Two different maternal chromosomes
   - Milder phenotype than deletion
   - Higher risk of maternal age-related trisomy 15 rescue

3. **Imprinting center defects:**
   - Microdeletions of PWS-IC
   - Epimutations: Abnormal methylation without deletion
   - Familial cases reported

**Gene functions:**

**SNRPN (Small nuclear ribonucleoprotein polypeptide N):**
- Component of spliceosome
- Involved in mRNA processing
- Paternal-only expression

**NDN (Necdin):**
- Neural growth suppressor
- Promotes neuronal survival
- Expressed in postmitotic neurons

**MAGEL2 (MAGE-like 2):**
- Retrograde transport protein
- Circadian rhythm regulation
- Mutations cause Schaaf-Yang syndrome (PWS-like)

**MKRN3 (Makorin ring finger protein 3):**
- Ubiquitin ligase
- Puberty initiation (inhibits GnRH)
- Loss may contribute to hypogonadism

**Pathophysiology:**
- Hypothalamic dysfunction: Satiety signaling failure
- Neonatal: Poor feeding due to hypotonia, poor suck
- Childhood: Hyperphagia due to absent satiety
- Endocrine: GH deficiency, hypogonadotropic hypogonadism

#### Angelman Syndrome

**Molecular mechanisms:**

1. **Maternal deletion (Class I: 6 Mb, Class II: 5 Mb):**
   - More severe phenotype than UPD
   - Includes OCA2 (albinism in some)

2. **Paternal UPD:**
   - Both chromosome 15s from father
   - Milder phenotype than deletion
   - Occurs via trisomy 15 rescue

3. **Imprinting center defects:**
   - Maternal IC has paternal imprint
   - AS-IC microdeletions or epimutations
   - Familial cases possible

4. **UBE3A mutations (10%):**
   - Point mutations in maternal UBE3A
   - May have milder phenotype
   - Familial recurrence risk up to 50%

**UBE3A function:**
- Ubiquitin-protein ligase E3A
- Targets proteins for proteasomal degradation
- Synaptic development and plasticity
- Brain-specific imprinting: Paternal allele silenced

**Pathophysiology:**
- Loss of UBE3A → impaired synaptic pruning
- Cerebellar Purkinje cell dysfunction → ataxia
- GABAergic dysfunction → seizures
- Dopaminergic dysfunction → hyperactivity, happy demeanor

### Microdeletion Syndromes

#### 22q11.2 Deletion Syndrome (DiGeorge/Velocardiofacial)

**Critical genes:**

**TBX1 (T-box transcription factor 1):**
- Primary gene for cardiac phenotype
- Pharyngeal arch development
- Neural crest migration
- Haploinsufficiency: Conotruncal heart defects, thymic hypoplasia

**COMT (Catechol-O-methyltransferase):**
- Dopamine metabolism
- Haploinsufficiency: Psychiatric vulnerability

**CRKL (v-crk avian sarcoma virus CT10 oncogene homolog-like):**
- Neural crest migration
- Cardiac outflow tract development

**DGCR8 (DiGeorge critical region gene 8):**
- MicroRNA processing
- Haploinsufficiency: Neurodevelopmental phenotype

**Genotype-phenotype correlations:**
- Large deletions (3 Mb): More severe cardiac anomalies
- Small deletions (1.5 Mb): Milder phenotype, may be subclinical
- TBX1 variants: Isolated cardiac defects without full syndrome

### Cri-du-chat Syndrome

**Critical regions:**

**5p15.3 (cat-cry region):**
- Contains CTNND2 (catenin delta 2)
- Laryngeal development
- Small deletions: Cry present, milder ID

**5p15.2 (severe ID region):**
- Contains multiple genes including TERT
- Larger deletions: Severe ID, microcephaly

## Diagnostic Advances

### Chromosomal Microarray (CMA)

**Technologies:**
- **Array CGH (Comparative genomic hybridization):**
  - Detects copy number variants (CNVs)
  - Resolution: 10-50 kb depending on platform
- **SNP array:**
  - Detects CNVs + loss of heterozygosity (LOH)
  - Detects UPD, consanguinity

**Yield for congenital anomalies:**
- Pathogenic CNVs: 7-14%
- Variants of uncertain significance (VUS): 2-3%
- Secondary findings: 1-2%

**Interpretation challenges:**
- Incomplete penetrance: Some CNVs have variable expression
- VUS management: Parental testing helps determine inheritance
- Incidental findings: Adult-onset conditions detected

### Whole Exome Sequencing (WES)

**Diagnostic yield:**
- Multiple congenital anomalies: 30-40%
- Isolated anomaly: 10-15%
- Suspected syndrome: 40-50%

**Advantages:**
- All coding regions
- Novel gene discovery
- Rapid diagnosis (weeks to months)

**Limitations:**
- VUS rate: 20-40%
- Non-coding variants: Missed
- Structural variants: Poorly detected
- Mosaicism: May miss low-level

### Whole Genome Sequencing (WGS)

**Advantages over WES:**
- Uniform coverage
- Non-coding variants detected
- Better structural variant detection
- Better mosaicism detection

**Challenges:**
- Non-coding variant interpretation
- Higher VUS rate
- Cost and data storage

## Therapeutic Implications of Genotype

### Down Syndrome

**Targeted therapies under investigation:**

**Cognitive enhancement:**
- DYRK1A inhibitors: Epigallocatechin gallate (EGCG)
- GABA-A antagonists: Basmisanil (partial benefit in trials)
- Neurotrophic factors: BDNF enhancement

**Alzheimer disease prevention:**
- APP-targeted therapies: Beta-secretase inhibitors
- Anti-amyloid antibodies: Investigation in DS population

**Leukemia:**
- Targeted therapies based on mutations
- JAK inhibitors for myeloproliferative disorders

### Growth Hormone Therapy

**Turner syndrome:**
- Start: 4-6 years (or earlier, 2-4 years)
- Dose: 0.05 mg/kg/day subcutaneously
- Response: +5-10 cm final height
- Monitor: IGF-1 levels, glucose tolerance

**Prader-Willi syndrome:**
- Start: 4-6 years (after growth failure documented)
- Dose: 0.035 mg/kg/day (higher dose risk of sleep apnea)
- Benefits: Height, body composition, strength, development
- Contraindication: Severe sleep apnea without treatment

### Sex Hormone Replacement

**Turner syndrome:**
- Estrogen: Start at 12-14 years
- Gradual dose increase over 2-3 years
- Progesterone: Add after breakthrough bleeding or 2 years
- Benefits: Pubertal development, bone health
- Continue until average menopause age (50 years)

**Klinefelter syndrome:**
- Testosterone: Start at 14 years
- Route: Intramuscular, transdermal, or topical
- Dose: 50-100 mg IM q2-4 weeks or 5-10 g gel daily
- Monitor: Bone density, hematocrit, PSA, lipid profile

### Seizure Management

**Angelman syndrome:**
- First-line: Valproate, clonazepam, levetiracetam
- Avoid: Carbamazepine, phenytoin (can worsen myoclonus)
- Refractory: Consider ketogenic diet, vagus nerve stimulation
- Target: UBE3A pathway therapies under investigation`,

      keyTerms: [
        {
          term: 'Gene Dosage Effect',
          definition: 'The phenotypic consequences of having more or fewer copies of a gene, resulting in proportional changes in gene expression and protein levels.',
          pronunciation: 'jeen DOH-saj ef-fekt',
          relatedTerms: ['Aneuploidy', 'Transcriptional regulation', 'Haploinsufficiency']
        },
        {
          term: 'Pseudoautosomal Region',
          definition: 'Regions on the X and Y chromosomes that undergo homologous recombination during meiosis and escape X-inactivation.',
          pronunciation: 'soo-doh-aw-to-SO-mul',
          relatedTerms: ['SHOX', 'X-inactivation', 'PAR1', 'Turner syndrome']
        },
        {
          term: 'Differentially Methylated Region (DMR)',
          definition: 'Genomic regions with different methylation patterns depending on parental origin, crucial for genomic imprinting.',
          pronunciation: 'dif-uh-REN-shuh-lee METH-uh-lay-ted',
          relatedTerms: ['Imprinting', 'Prader-Willi syndrome', 'Angelman syndrome']
        },
        {
          term: 'Copy Number Variant (CNV)',
          definition: 'A segment of DNA ranging from kilobases to megabases that is present at a variable copy number compared to a reference genome.',
          pronunciation: 'KAH-pee num-ber VARE-ee-unt',
          relatedTerms: ['Microdeletion', 'Microduplication', 'Chromosomal microarray']
        },
        {
          term: 'Variant of Uncertain Significance (VUS)',
          definition: 'A genetic variant where the clinical significance is not yet known based on available evidence.',
          pronunciation: 'VARE-ee-unt of un-SER-tin sig-NIF-uh-kence',
          relatedTerms: ['ACMG guidelines', 'Genetic counseling', 'Reclassification']
        },
        {
          term: 'Methylation',
          definition: 'The addition of a methyl group to DNA, typically at CpG sites, which regulates gene expression without changing the DNA sequence.',
          pronunciation: 'meth-uh-LAY-shun',
          relatedTerms: ['Epigenetics', 'Imprinting', 'CpG island']
        },
        {
          term: 'Nonsense-Mediated Decay',
          definition: 'A cellular surveillance mechanism that degrades mRNA containing premature stop codons, preventing production of truncated proteins.',
          pronunciation: 'NON-sens MEE-dee-ay-ted day-KAY',
          relatedTerms: ['Premature stop codon', 'Nonsense mutation', 'mRNA surveillance']
        },
        {
          term: 'Loss of Heterozygosity (LOH)',
          definition: 'A chromosomal event where the remaining functional allele is lost, leading to complete loss of gene function.',
          pronunciation: 'loss of het-er-oh-ZYE-go-si-tee',
          relatedTerms: ['Tumor suppressor', 'Uniparental disomy', 'SNP array']
        }
      ],
      analogies: [
        'Gene dosage effects are like having too many cooks in the kitchen - the recipe (development) becomes unbalanced',
        'Genomic imprinting is like parent-specific highlights - the same text is emphasized differently depending on which parent provided it',
        'Mosaicism is like a garden with different plant varieties in different sections - each region has its own genetic identity',
        'VUS results are like finding an unknown word in a book - you know it\'s there but not what it means until more context is available'
      ],
      examples: [
        'A patient with 46,XY/47,XXY mosaic Klinefelter having some sperm production and successful TESE-ICSI',
        'A child with Angelman syndrome due to paternal UPD having milder phenotype than deletion cases',
        'A Type I 5p deletion (larger) causing more severe intellectual disability than Type II 5p deletion in cri-du-chat'
      ],
      clinicalNotes: 'Genotype-phenotype correlations are increasingly refined, allowing personalized prognostication and management. Emerging targeted therapies (DYRK1A inhibitors for Down syndrome, antisense oligonucleotides for Angelman) may revolutionize treatment. Genetic counseling must address variable expressivity, incomplete penetrance, and the uncertainty of VUS results.'
    },

    5: {
      level: 5,
      summary: 'Congenital syndromes represent complex genetic disorders with well-characterized molecular etiologies, natural histories, and emerging precision medicine approaches. Contemporary management integrates multidisciplinary clinical care with genomic sequencing, pharmacogenomics, gene-targeted therapies, and comprehensive counseling for reproductive decision-making. Current research focuses on gene editing, RNA therapies, and phenotype modification through pathway modulation.',
      explanation: `# Congenital Syndromes: Advanced Clinical Genetics and Therapeutic Frontiers

## Systems Biology of Aneuploidy

### Global Transcriptional Effects

**Down Syndrome Transcriptome:**

**Chromosome 21 gene overexpression:**
- Approximately 300 genes on chromosome 21
- 1.5-fold expression increase for most genes
- Not uniform: Some genes escape dosage compensation

**Trans effects on other chromosomes:**
- Global transcriptional dysregulation
- Downstream pathways affected:
  - Interferon signaling: Chronic immune activation
  - Oxidative stress: SOD1, CBS overexpression
  - Amyloid processing: APP, BACE2 dysregulation
  - Cell cycle regulation: DYRK1A, RUNX1 effects

**Proteomic consequences:**
- Protein complex stoichiometry disruption
- Proteostasis network stress
- Aggregation-prone protein accumulation
- Impaired autophagy

### Epigenetic Consequences of Aneuploidy

**DNA methylation changes:**
- Genome-wide hypomethylation in trisomy 21
- Tissue-specific epigenetic effects
- May contribute to phenotype variability

**Histone modification alterations:**
- H3K4me3 changes at promoters
- Chromatin accessibility alterations
- May explain some neurodevelopmental features

## Precision Medicine Approaches

### Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) Modulators

**Mutation classes and therapies:**

**Class I (No protein production):**
- Nonsense mutations: e.g., G542X, W1282X
- **Read-through agents:**
  - Ataluren (PTC124): Mixed results
  - Gentamicin: Read-through but toxic
  - ELX-02: In development

**Class II (Protein processing defect):**
- F508del: ~70% of alleles
- **Correctors:**
  - Lumacaftor (VX-809): First-generation, modest benefit
  - Tezacaftor (VX-661): Better tolerated
  - Elexacaftor (VX-445): Most effective corrector
- **Triple therapy (elexacaftor/tezacaftor/ivacaftor):**
  - F508del/F508del: 10-14% ppFEV1 improvement
  - F508del/minimal function: Even heterozygotes benefit
  - Transforms CF from fatal to chronic disease

**Class III (Gating defect):**
- G551D and related mutations
- **Potentiators:**
  - Ivacaftor (VX-770): 10-15% ppFEV1 improvement
  - Specific for gating mutations

**Class IV (Conductance defect):**
- R117H, D110H, etc.
- Ivacaftor: Variable response

**Class V (Reduced protein production):**
- Splice mutations, promoter mutations
- Partial response to modulators

**Modifier genes:**
- **MSPI (Mannose-binding lectin 2):** Affects lung disease severity
- **SLC26A9:** Alternate chloride channel, modifies phenotype
- **TGF-β1:** Fibrosis modifier
- **Genotype-phenotype:** Not fully explained by CFTR alone

### Spinal Muscular Atrophy (SMA) Therapies

**Molecular mechanisms:**

**SMN2 copy number as disease modifier:**
- SMN2 produces ~10% functional SMN protein
- Copy number correlates with severity:
  - Type 0 (severe, prenatal): 1-2 copies
  - Type I (Werdnig-Hoffmann): 2 copies
  - Type II: 3 copies
  - Type III (Kugelberg-Welander): 3-4 copies
  - Type IV (adult-onset): 4+ copies

**Approved therapies:**

**Nusinersen (Spinraza):**
- **Mechanism:** Antisense oligonucleotide (ASO)
- **Action:** Binds intronic splicing silencer, promotes exon 7 inclusion
- **Administration:** Intrathecal (loading doses, then maintenance q4 months)
- **Efficacy:** Motor milestone achievement, survival benefit
- **Limitations:** Invasive administration, high cost

**Onasemnogene abeparvovec (Zolgensma):**
- **Mechanism:** AAV9-mediated SMN1 gene replacement
- **Administration:** Single IV infusion
- **Target:** Motor neurons (AAV9 crosses blood-brain barrier)
- **Efficacy:** Best when given presymptomatically
- **Limitations:** Liver toxicity, thrombocytopenia, high cost
- **Age restriction:** <2 years (FDA), under study for older

**Risdiplam (Evrysdi):**
- **Mechanism:** Small molecule SMN2 splicing modifier
- **Administration:** Daily oral liquid
- **Efficacy:** Similar to nusinersen in trials
- **Advantages:** Non-invasive, systemic distribution
- **Limitations:** Daily administration, long-term safety data

**Therapeutic decision-making:**
- Age at diagnosis
- SMN2 copy number
- Symptom status (presymptomatic vs symptomatic)
- Access/cost considerations
- Combination therapy under investigation

### Duchenne/Becker Muscular Dystrophy Therapies

**Genotype-phenotype correlations:**

**Reading frame rule:**
- **Out-of-frame:** Frameshift → premature stop → no dystrophin → Duchenne
- **In-frame:** Deletion preserves frame → shortened dystrophin → Becker
- **Exceptions:** Some out-of-frame produce Becker (exon skipping effects)

**Mutation types:**
- **Deletions (60-65%):** Exon hotspots 45-52, 1-10
- **Duplications (5-10%):** Usually in-frame
- **Point mutations (25-30%):** Nonsense, missense, splice site

**Therapies:**

**Exon skipping (mutation-specific):**
- **Eteplirsen (Exondys 51):** Skips exon 51 for amenable mutations
- **Golodirsen (Vyondys 53):** Exon 53 skipping
- **Viltolarsen (Viltepso):** Exon 53 skipping
- **Casimersen (Amondys 45):** Exon 45 skipping
- **Limitations:** Mutation-specific, modest dystrophin production (<1-3%)

**Stop codon read-through:**
- **Ataluren (Translarna):** Promotes read-through of premature stop codons
- **Indication:** Nonsense mutations (~10-15%)
- **Efficacy:** Modest benefit, slows progression

**Gene therapy (micro-dystrophin):**
- **Elevidys (delandistrogene moxeparvovec):** AAVrh74 micro-dystrophin
- **Mechanism:** Truncated dystrophin gene delivery
- **Efficacy:** Functional improvement in early ambulatory
- **Limitations:** Immune response, limited duration (muscle turnover)
- **Age:** 4-5 years (before significant fibrosis)

**Gene editing approaches (experimental):**
- **CRISPR-Cas9:** Exon deletion to restore reading frame
- **Base editing:** Direct correction without double-strand breaks
- **Prime editing:** More flexible editing
- **Delivery challenges:** AAV capacity, immune response, off-target effects

**Systemic therapies:**
- **Corticosteroids:** Prednisone, deflazacort (standard of care)
- **ACE inhibitors/ARBs:** Cardiomyopathy prevention
- **Beta-blockers:** Cardiomyopathy treatment

### Emerging Therapeutic Platforms

**RNA therapies:**
- **ASOs:** Nusinersen (SMA), milasen (Batten disease, N=1)
- **RNA interference:** Patisiran (hATTR amyloidosis)
- **mRNA delivery:** Protein replacement, CFTR, enzymes

**Gene editing:**
- **In vivo editing:** AAV or LNP delivery
- **Ex vivo editing:** HSCs, T cells (already approved for cancer)
- **Base editors:** A•T to G•C or C•G to T•A conversions
- **Prime editors:** Small insertions/deletions, all base changes
- **Considerations:** Off-target effects, mosaicism, immune response

**Cell therapy:**
- **iPSC-derived cells:** Patient-specific disease modeling
- **Autologous gene-corrected cells:** Ex vivo editing, transplantation
- **Allogeneic off-the-shelf:** Universal donor cells

## Clinical Trial Design in Rare Diseases

### Statistical Challenges

**Small sample sizes:**
- Limited patient populations
- Multi-center trials required
- International collaboration
- Natural history controls

**Phenotypic heterogeneity:**
- Variable expressivity
- Genotype-specific effects
- Stratification by genotype

**Endpoint selection:**
- **Surrogate endpoints:** Biomarkers vs clinical outcomes
- **Motor function:** NSAA (North Star Ambulatory Assessment), 6MWT
- **Pulmonary:** ppFEV1 in CF
- **Cognitive:** Bayley scales, developmental quotients
- **Patient-reported outcomes:** Quality of life measures

### Natural History Studies

**Importance:**
- Establish expected disease course
- Identify prognostic factors
- Enable historical controls
- Required for accelerated approval

**Examples:**
- **CINRG Duchenne Natural History Study:** 440 patients, 10-year follow-up
- **CFTR2 Registry:** 80,000+ patients worldwide
- **SMA Natural History:** Critical for presymptomatic treatment era

### Adaptive Trial Designs

**Platform trials:**
- Multiple therapies tested in same infrastructure
- Shared placebo/control arm
- Example: SPIRAL trial for DMD exon skippers
- Efficient use of rare disease resources

**Basket trials:**
- Single therapy tested across multiple conditions
- Based on shared mechanism/pathway
- Example: Gene therapies for neurodegenerative disorders

**N-of-1 trials:**
- Single-patient randomized controlled trials
- Ultra-rare disorders
- Personalized therapies (milasen for Batten disease)

## Ethical Framework

### Prenatal and Preimplantation Genetic Testing

**Expanded carrier screening:**
- **ACMG 113 genes (2023 recommendations):**
  - CF, SMA, Fragile X, spinal muscular atrophy
  - Hemoglobinopathies, metabolic disorders
  - X-linked severe conditions
- **Pan-ethnic approach:** All couples offered screening
- **Counseling challenges:**
  - VUS results
  - Incidental findings
  - Reduced penetrance variants
  - Equity of access

**Prenatal sequencing:**
- **Diagnostic:** WES/WGS for fetal anomalies
- **Reproductive:** Known familial mutations
- **Challenges:**
  - VUS: Up to 40% rate in exome sequencing
  - Incidental findings: Adult-onset conditions
  - Turnaround time: 2-4 weeks for rapid exome
  - Cost-effectiveness: Not established for all pregnancies

**Preimplantation genetic testing (PGT):**
- **PGT-A:** Aneuploidy screening for all IVF embryos
- **PGT-M:** Single gene disorder testing
- **PGT-SR:** Structural rearrangement testing
- **Ethical issues:**
  - Embryo disposition decisions
  - "Savior siblings" (HLA matching)
  - Enhancement vs treatment slippery slope
  - Equity of access

### Gene Therapy Ethics

**Germ-line editing:**
- **Current status:** Prohibited for clinical use globally
- **2018 He Jiankui case:** CCR5 editing in embryos (widely condemned)
- **Safety concerns:**
  - Off-target effects
  - Mosaicism
  - Intergenerational effects
- **Ethical concerns:**
  - Enhancement potential
  - Eugenics concerns
  - Equity and justice
  - Consent of future generations

**Somatic cell therapy:**
- **Risk-benefit assessment:**
  - Single-dose curative intent vs lifetime treatment
  - Irreversibility vs chronic disease burden
  - Immune responses
- **Equity:**
  - Costs: Zolgensma >$2 million
  - Access disparities
  - Insurance coverage

### Incidental Findings Management

**ACMG recommendations (2021 update):**
- **List of reportable genes:** 73 genes (expanded from 59)
- **Categories:**
  - Cancer predisposition (BRCA1/2, Lynch syndrome)
  - Cardiac (hypertrophic cardiomyopathy, arrhythmias)
  - Metabolic (hemochromatosis, familial hypercholesterolemia)
  - Other (Fragile X, Marfan)
- **Patient choice:** Opt-out option for most conditions
- **Pediatric considerations:**
  - Adult-onset conditions: Generally deferred
  - Childhood-onset: Always reported
  - Reproductive implications: Deferred until maturity

**VUS counseling:**
- Explain uncertainty clearly
- Avoid overinterpretation
- Plan for reclassification
- Consider familial segregation studies

## Future Directions

### In Utero Therapy

**Rationale:**
- Earlier intervention before irreversible damage
- Developing immune system (tolerance induction)
- Smaller patient size (lower dose)
- Broader stem cell distribution

**Approaches:**
- **Enzyme replacement:** In utero ERT for lysosomal storage diseases
- **Stem cell transplantation:** In utero HSCT for immunodeficiencies
- **Gene therapy:** Fetal AAV administration
- **Gene editing:** In utero CRISPR delivery

**Ethical considerations:**
- Maternal-fetal risk balance
- Informed consent complexities
- Long-term unknown effects
- Regulatory challenges

### Multi-Omics Approaches

**Integrating data types:**
- **Genomics:** DNA sequence, structural variants
- **Transcriptomics:** Gene expression, splicing
- **Proteomics:** Protein levels, modifications
- **Metabolomics:** Metabolic profiles
- **Epigenomics:** DNA methylation, chromatin state

**Applications:**
- **Genotype-phenotype refinement:** Better prognostication
- **Modifier gene discovery:** Explaining variability
- **Biomarker identification:** Treatment monitoring
- **Drug target discovery:** Novel pathway identification

### Artificial Intelligence

**Diagnostic applications:**
- **Facial recognition:** Gestalt matching for syndrome identification
- **GestaltMatcher:** Deep learning for rare disease diagnosis
- **Natural language processing:** Phenotype extraction from EHRs

**Therapeutic applications:**
- **Drug repurposing:** AI prediction of existing drugs for new indications
- **Clinical trial optimization:** Patient stratification, endpoint selection
- **Predictive modeling:** Treatment response prediction

### Gene Therapy Advances

**Capsid engineering:**
- **Directed evolution:** Select for desired tropism
- **Rational design:** Modify surface proteins
- **Goal:** Reduced immunogenicity, enhanced tissue targeting

**Promoter optimization:**
- **Tissue-specific promoters:** Restrict expression
- **Synthetic promoters:** Tunable expression
- **Self-regulating:** Feedback loops

**Manufacturing advances:**
- **Scalability:** Production capacity
- **Purification:** Removing empty capsids
- **Quality control:** Potency assays

**Immune modulation:**
- **Immunosuppression regimens:** Steroids, rituximab
- **Capsid decoys:** Neutralizing antibody reduction
- **Immune evasion:** Engineered capsids`,

      keyTerms: [
        {
          term: 'Proteostasis',
          definition: 'The cellular process of maintaining proper protein folding, concentration, and localization through chaperone systems, degradation pathways, and stress responses.',
          pronunciation: 'pro-tee-OH-stuh-sis',
          etymology: 'Greek: proteios (of the first quality) + stasis (standing)',
          relatedTerms: ['Proteostasis network', 'Autophagy', 'Unfolded protein response']
        },
        {
          term: 'Transcriptome',
          definition: 'The complete set of RNA transcripts produced by the genome under specific circumstances or in a specific cell type.',
          pronunciation: 'tran-SKRIPT-tohm',
          relatedTerms: ['Genome', 'Proteome', 'Gene expression profiling']
        },
        {
          term: 'Pharmacogenomics',
          definition: 'The study of how genetic variation affects individual responses to drugs, enabling personalized medication selection and dosing.',
          pronunciation: 'FAR-muh-koh-JEE-noh-miks',
          relatedTerms: ['Personalized medicine', 'Drug response', 'Genetic variation']
        },
        {
          term: 'Allelic Heterogeneity',
          definition: 'The presence of different mutations in the same gene that cause the same or similar phenotypic outcome.',
          pronunciation: 'uh-LEE-lik het-er-oh-jeh-NEE-ih-tee',
          relatedTerms: ['Genetic heterogeneity', 'Phenotypic variability', 'Mutation spectrum']
        },
        {
          term: 'Reduced Penetrance',
          definition: 'A situation where individuals with a pathogenic variant do not display the associated phenotype or have milder manifestations.',
          pronunciation: 're-DOOST pen-eh-trance',
          relatedTerms: ['Expressivity', 'Variable phenotype', 'Asymptomatic carrier']
        },
        {
          term: 'Synthetic Lethality',
          definition: 'A genetic interaction where mutation of either of two genes alone is viable but mutation of both causes cell death.',
          pronunciation: 'sin-THET-ik lee-THAL-ih-tee',
          relatedTerms: ['PARP inhibitors', 'Cancer therapy', 'Genetic interaction']
        },
        {
          term: 'Surrogate Endpoint',
          definition: 'A biomarker intended to substitute for a clinical endpoint that measures directly how a patient feels, functions, or survives.',
          pronunciation: 'SUR-oh-gut end-point',
          relatedTerms: ['Biomarker', 'Clinical trial', 'FDA approval']
        },
        {
          term: 'N-of-1 Trial',
          definition: 'A clinical trial in which a single patient is the entire trial, often using multiple crossover periods to assess treatment efficacy.',
          pronunciation: 'en-of-wun TRY-ul',
          relatedTerms: ['Personalized medicine', 'Rare disease', 'Crossover design']
        }
      ],
      analogies: [
        'Gene dosage effects are like an orchestra with too many instruments playing the same part - the harmony (development) is disrupted',
        'Proteostasis networks are like cellular quality control inspectors - they identify and remove misfolded proteins before problems occur',
        'Reduced penetrance is like having a genetic cookbook that sometimes produces the expected dish and sometimes doesn\'t - the recipe alone doesn\'t guarantee the outcome',
        'Surrogate endpoints are like checking the oil light instead of the engine - it\'s an indirect measure but predicts the outcome'
      ],
      examples: [
        'A CF patient with F508del/R117H genotype responding to elexacaftor/tezacaftor/ivacaftor triple therapy with 15% improvement in FEV1',
        'An SMA infant treated presymptomatically with onasemnogene abeparvovec achieving normal motor milestones',
        'A DMD patient with out-of-frame deletion amenable to exon 51 skipping producing 3% dystrophin on eteplirsen treatment',
        'A CFTR2 registry analysis revealing that G551D patients on ivacaftor have near-normal lung function',
        'A patient with Angelman syndrome due to imprinting defect having recurrence risk up to 50% versus <1% for deletion cases'
      ],
      clinicalNotes: 'Precision medicine has transformed management of many congenital syndromes from purely supportive to targeted therapies. CFTR modulators, SMN2 splicing modifiers, and dystrophin-restoring therapies exemplify successful genotype-directed treatment. Emerging gene therapies offer potential cures but raise important ethical questions about access, consent, and long-term safety. Multidisciplinary care remains essential alongside pharmacologic advances.'
    }
  },

  media: [],
  citations: [
    {
      id: 'moore-persaud',
      type: 'textbook',
      title: 'The Developing Human: Clinically Oriented Embryology, 11th Edition',
      authors: ['Keith L. Moore', 'T.V.N. Persaud', 'Mark G. Torchia'],
      source: 'Elsevier',
      chapter: 'Chromosomal and Genetic Syndromes'
    },
    {
      id: 'jones-lynce',
      type: 'textbook',
      title: 'Smith\'s Recognizable Patterns of Human Malformation, 7th Edition',
      authors: ['Kenneth Lyons Jones', 'Michele C. Reed', 'M. Michael Bocian'],
      source: 'Elsevier'
    },
    {
      id: 'acmg-cf',
      type: 'article',
      title: 'Technical standards for clinical genetics laboratories: CFTR mutation testing',
      authors: ['ACMG Laboratory Quality Assurance Committee'],
      source: 'Genetics in Medicine (2023)'
    },
    {
      id: 'hecht-cftr',
      type: 'article',
      title: 'CFTR modulators: The dawn of a new era in cystic fibrosis treatment',
      authors: ['Hecht, L. A.', 'Mayer-Hamblett, N.'],
      source: 'Annals of the American Thoracic Society, Vol 20(3), 351-362',
      page: '351-362'
    },
    {
      id: 'finkel-sma',
      type: 'article',
      title: 'Treatment of spinal muscular atrophy: Current status and recent advances',
      authors: ['Finkel, R. S.', 'Chiriboga, C. A.'],
      source: 'Current Treatment Options in Neurology, Vol 25, 73-90',
      page: '73-90'
    },
    {
      id: 'birnbaum-dmd',
      type: 'article',
      title: 'Diagnosis and management of Duchenne muscular dystrophy: Part 1: Diagnosis and neuromuscular management',
      authors: ['Birnkrant, D. J.', 'Bushby, K.', 'Benson, D. W.'],
      source: 'Lancet Neurology, Vol 22(4), 380-394',
      page: '380-394'
    },
    {
      id: 'acmg-es',
      type: 'article',
      title: 'Recommendations for reporting of secondary findings in clinical exome and genome sequencing',
      authors: ['ACMG Board of Directors'],
      source: 'Genetics in Medicine, Vol 23(7), 1101-1112',
      page: '1101-1112'
    }
  ],
  crossReferences: [
    {
      targetId: 'chromosomal-abnormalities',
      targetType: 'topic',
      relationship: 'related',
      label: 'Chromosomal Abnormalities'
    },
    {
      targetId: 'genetic-counseling',
      targetType: 'concept',
      relationship: 'related',
      label: 'Genetic Counseling'
    },
    {
      targetId: 'prenatal-diagnosis',
      targetType: 'topic',
      relationship: 'related',
      label: 'Prenatal Diagnosis'
    }
  ],
  tags: {
    systems: ['reproductive', 'nervous', 'cardiovascular', 'musculoskeletal', 'endocrine'],
    topics: ['embryology', 'genetics', 'pathology', 'pediatrics'],
    keywords: ['chromosome', 'trisomy', 'monosomy', 'syndrome', 'aneuploidy', 'genetic counseling', 'prenatal testing', 'CFTR', 'SMN2', 'dystrophin', 'imprinting'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'obstetrics-gynecology']
    }
  },
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 2,
  status: 'published'
};
